/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4ouVTVhsRwkQdSavaoT2zjWujxvPUVeioQWiq2DP21To2PcWycvF4atPu8Z8htokEXu1u64DUvFZ8GmUz7XZ5Td6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7Twim3fgcRCUh1fZD4Q5suodWLS1N9uMhx1P5D35bhQaaRktmKRSJfTCTkkAndKEkqifXBrSFHFcafNs1iAEnq",
  "key1": "2JGHYbggdU3CDk1cA7sJP6uHsqWBCQEYHK8bvAY19uvS6wonSCStkVBcxxMga4Ph1py76XhvFK4MX3HKJQwS2pyh",
  "key2": "2TfLBMHxoKjoUzRsZSVk13KwnzVmzMYxXb1L9JHcqCeAbBgqg3VrWktvJWyLLEpoDWeW7pYXPJS4mwaufWSLdmtm",
  "key3": "4MHA4oDRhbF1B4wKBwvWwKPTPtoDeKGbKN9boKUoAsKJZKXCXZkqTmDmGFT9EJuUcEsKfmorp3FWRhBiZYYDpzuK",
  "key4": "43aR6YHLpbe2Xk9VGaxWvPncVhFF6K2mtFnKYBvvy4B6xnwoseeAzVYwx49uvaSUfA7vWSycdHVs5sEAsVuBsujj",
  "key5": "5D9DaEzCZNpp9Q9vU1xQsPnuSePTN41BEZDKtegdQquB2tXywdMfXhF3QxRMrxMPFnMaoyaTtVyG6xazbH9w6wDw",
  "key6": "45G1yvqreBgwKXj4bMdEiu792DnM2WiZDSvrT5K73PP1k5dqr7A1bYtPPMUaCePqEfgHBoPSUEgnfi594JH3THyJ",
  "key7": "4h2XXsxRs84dKj9x2kbZLhFBZn3d5YSxB1JWLL2c5gmQwmduvHd9mxwYb7wzuovUB1BJXLbymZq21KwwBcjP3kwH",
  "key8": "LtZRgouiSpUr53ptCogXbQHZQ3GHMhH2QTFKVjTZzVrEzv78a3WNxaHFVQ4iq3JnAqKWBUmbgXwWa8PaVKStQrx",
  "key9": "4FcjGRpfQgjjuVxrmKhUiJ9bJHNYzCrHLqreXbUepCxSQVcsxrYcERJFcMLBhKpCpZSVrnj8djZ3Jh5TPFgZ1Tpd",
  "key10": "4CNtihmLm9ezixj3VLHveLzrpjAHu8mcoW21FBifiqEk2uHQFY6RzERpxd8dv8dY7F9YUV7GHq9jwMg3WhErc2nC",
  "key11": "26u7ExrRNAsDwGgPxhbSPXhgrZ8ccKwYoxSuprb1ENXwKuEU329hrtLt3yYVoS3dqTxifa9bEYjjDSq5448G3Rkf",
  "key12": "NbSrqewzPNwmNZb1SpsbqefRAKaddLuPSXzX5hHZhffg8P2dWPAS6YcTTzQAVMAPHCQ4N4qVqF89xQeb2QxiSci",
  "key13": "5LN2scdpfdjhuYLyE3f6uZ7HwLC7ReYkp7rs1MPTXJG3XKEv589iEP4hc2yBvdhKZqfpddUtazjrWxkPcyZ2QhLZ",
  "key14": "4yDNV3CMHYkg1BPFNUyBLjMKgxj28GG8d1bWqa7o9ZiFW6x5nPcFJQ9hirPRxEVPbHqBVX94ssm8eFpi6pNwi76k",
  "key15": "4gpRoGcegoRnhzNxzQHAi1UNLSGXjYWJkPFWRfzG5ns2JsZ7FPUXKtPgsUmBBtgLoHvdUf4QBe6LcRvNssXX9Mo1",
  "key16": "KojvWs2L3g4SNEywgRGofm2TW4t7Fd62fftPty3CeAMz5GzuhtrvKCtUjgWtbuUbTgVdgwz9mPPZ7mTdxUpYaSX",
  "key17": "FzSWzNSuNZjrX5TmUM9XsmQFd9wk7EPCJfxDT3RgymXi7srAur7Dh3wcpzpyjmUtngAWFzZANBNahyqQzJJKkRv",
  "key18": "3rKMnPuytZDbX8YgPd8SvLrWBVFXdnTgLgY8ffTvzyQEHfUhHpseLDHdjHfQqcEJ8Mh6ZKFdBGots6hBLn6vqnkb",
  "key19": "24LZN856CEBbLKHbbmfciHFBt9QdFVe49tjELRWEf4AuJrxDnXQGfpUU9CZhUCqTKZm9yBPhTnzLxN4pSnaYNWnd",
  "key20": "5JbZYPjc8eDtQUndgeMVgTFgzSWLbDb5SCJPqEeC6sZXkDvAzmSFDFZCm2TT7KaepPwxGLLE7BZgqfjGkezaVvio",
  "key21": "2obydukaKPe7rRBX1BwHDN2KhsS9xwVXXQo5JSGZUFEeZ81ofzs4paz8ELvHuf3vGsMd21Shzq1cKm55RnUoK22M",
  "key22": "3Egzy9awgzvonLNxhWRtrHpwKcT2yLFRG38UoXWtuct74nSoEsdNyUUd5p6RtrJQASHf7LHvgZXFZ1FMeeKEuTB",
  "key23": "4ncKPuMaJg4SbhRdRVcfmiHCuyA4XVmvXhURtxnvvoEzNSEQ5Ue8WY1iKsCvuxWwUxkdSNNiHwC7wJipyNRuRaR6",
  "key24": "xFYWNE3ZJkKsR5Q6zzV1CL1nFqA1yoBL1uwbBuh2JSYxcU66XQSus9FJJsrrg1jzYUWhuRorAmRhCePA5VUFhrr"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
