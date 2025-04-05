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
    "2yTXfntyummS8VKwEBiRw7eoGrMLHjDF9NcHs6ULWG4cHHVphM36J83NWhMfBMkCpRqoJwATPRQCb7sZUu3qqdfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBAQTEspg3jRqwo7ki8UDKFCa8kE4WCejzxQ6hNxodnKhjMsNWQjMzceMrEQWtqAdCpV71XDx4unKJonk8qdivq",
  "key1": "4E2cu2DsUE2BEtJczMyZiTtmgXebDprfdHSTaPcxDXjWi5mQWRNcxEHRmibN5otEsmrsrTyw5NuGWHnBWhxZigrR",
  "key2": "511JoKHAxiDq7fRhzv4nQ4RahLp9FzcAbW1rV5K36dNudC79j5b4kmcsbFqSzH3ahE1ZynHRCc97p2aEW4AA4APv",
  "key3": "2vZ2roGZ1krSpFPyfUmgWsFRUjwcymR7G9rbDMpAt8VMev5WCvixUPmhFN132aszabkEJ5TrcKc2u7waLoT9MKYs",
  "key4": "2ujnLPxkH2RpQmymuZ5jes1Lsawc3dadwvXDEeA9ZvuF7HuKUmKQH9ZZM6YMrufhfhpps1xD428voJ2BeihgQXCw",
  "key5": "5tXh7nkctE9KLQyw166fudwYznV2yV2MocuJhzCUAjbotvmBqMqNFEPFDP1Ak7mDkypJX4nC6pZAHNcgShRCd6AX",
  "key6": "2bGLztgvD6Z6f6GjP9hPHuxbvQ27aeMboAPBuKVwTeBb5ceEZRUS5vHedGMGd1G9r4DKHFkvSwy9WZYePiSZjhuB",
  "key7": "4FBLxbeiXHGFvAJp8nPFiGeaC82SrXxvAeKJiQ6ySCJXxkThAcZhyKY3ouhN56whv2TFTHtGwcgkixQA2iLe2NN2",
  "key8": "5aB4e1nBM94qfjtUdkvwhgc5cNt4v8ThtH2EED9CNDKeiFe3py87kH2VzfGB1bsUTCyFJVpxdmQFxLgyvvq2FFLB",
  "key9": "jcfiCNHNZweH3yRNAvwrC4ACLvYn9guxApSsxT6xUrG2BzvP2GmSym2RMGkkeqhUC3LttytpmCFEfRsGNiRe1nQ",
  "key10": "iVW9VJkjQqjUn1cLFFFHTHq7gHXS6VnHCeZZRGgrVADQG15FQQr3C3YkikA9B583cGMqRPYVZ16vYWpaZJdxAMe",
  "key11": "2TahTBT21p5J5yu5Jf6woHX8QWZoZnBS6MuooH1YtoGD64xdgDzLGkydRjgQRjEvXt66nb8WHtK1w96mszrabk3M",
  "key12": "PEjaPaG8s5p5soynaxb9H4GKnYJu4jrvr6UGgateXM9XG4C5UkM2B7mt1FmBhLCtF3bX9PQiB5d8NUWUvwyMQi7",
  "key13": "DBKpZe1ZBXEnHxVMeSPjWUZsisqMiri9NxqsRnjygjSLqUxhky3zv2KocoBBruQdNHg5iJSwuhraARULmwXnJ9j",
  "key14": "5CJRzUVq6dKBff5ix69nFsqCpz8pZpDopUDwoAwj7qnDvFkrm2AVSsRTy3R5uibuHrgb2coQmwjasr4KwLAHEcGP",
  "key15": "5yLtPPKj9eWQHGQPWaLV5xvz3hp9DadoYFpBJ39f3o3n3KnqfixE2aDaJprAFQGcCSCHCGsdUZhphPSbWWnv56KT",
  "key16": "5srSoB4Tv9RjegkE6d5uVWwL1YFGrAuZQNJzczdQPPS4W4eu2LpsMTRdmvxwoQbxsXrrijV6i9kT77R6DSKT5p72",
  "key17": "2hXVtJmbihRsHiWdfczUvjnKjWKoTGQRGQnivRJUpKW8QmbtF5RZwB8d6nZvhDDj4qENVEFBR8hWu1A9nWUEdUfD",
  "key18": "1EzTEJTBiHeDWgFp1fS4CW5vjybnRAVKHjMZTSngNBa2sNazznvi5un3QuYF6Ywizm8MsUdYSZx4uyjjqE3v8zh",
  "key19": "2SADJbPdjJPDJgcs4xrqaVf5CdBUXdg65B3CWBqp5HTp1dwJjviFezV5E54U5wWoHhJ9CtyvgXDjyAQ7b87GS4i5",
  "key20": "3muTKmYUkaAJuT4WxQ4WzT7MvSDP7NXYnfS9PMdwe71NUcyF9ffPFDtfTQFy3PUiako67ag69fAxnaZbH5SZZ4mz",
  "key21": "5bEYzVud8CadHBJQAVjBCLZUvbvaisZNRebgSJbmrqfC1t62vrKMThmwruSxWK28FPsSBegiEiwfo1EgZqjquNKw",
  "key22": "ZjhDRLy5NwjpmfaDLfikHtwfY8V7JCuKr4CzqHFndwmS1VjkHc76h73xmPbiRBW1VBpjiJwo13jmHDGkwk5EjuE",
  "key23": "3cUv4BdxBYHsr2fu9QPKKZoT716q4HoinLATYcke2R3W4PbZWm3E2gynbgAUSLm3nYHx1aQvDFW64V8JZ1f85paB",
  "key24": "5AUWrT96znRDBqudNcjYNA992GmNAHKgknCaFbe9waeYPf4VM9rHJqkiDtFRmtpowAMoJixguw1KwEkLHevYZdo9"
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
