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
    "hcWMV7L9qtuFaTfrDaskviibheXR3FWgTRFXak8VisvxjuHq3aoKZsZu96eJQnZLAmxJEXbiSdL1aUuKDGenFqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aquVbhvCdfdndu7fV565rXZtQUjXV95ixYQ3FSjTE112rNDRU2HBD9VaMUr7PSwnFf3ZK6F7Fx6LsNQYoCAUgTF",
  "key1": "2geTVca3r9vk6LDWZjdxUfQ71NNeijvCKk4qSPkYhJQkLPzTcGaXTAz4fWLMV2npJeUa3sGrLaBHvxrzXozJgYL1",
  "key2": "4Pxaa2d3Gxpce9THRyxF2KGSCkMWhJzeUKE6waNsT1RsXY1cZT8uR8djmjCTnVJUsuXBJFLGwChwZs3wbdB8Niyi",
  "key3": "3ArJink4UbNjsnRsZscPQPzgsN4G13wWRmnPrFYhWmMAT9UapF3NrdXucVQoBjGBN5GZyp8GJ4u7FfJXVi6djuoU",
  "key4": "xKrDPwgGEvgi7jVLJPgr7CWETZkGBBfBgPx728QnEAmrwfnBb49PQ87JQWPmTvu8ChWciPgCY8LjcH66DBrpgiE",
  "key5": "y2jsCCWCtdxV4MPsBWsuWcze9Rj4j5PTJaYSDoadU7XSc7ivigRXgpqVNh9jKmDx3MBoTbHjakU3jDGKhNQkRYz",
  "key6": "3YH66yGkaPwUvSnRyT4dP6FZN7p7kgCksGewMevTZhAKDC1utzr8bomYU8wA8RX4LyRMHExeYfemCxyn4o96H7Bj",
  "key7": "2Xd2H4wBV13esd21AJFBRv2BVXi8ghxScCWmvgKpvTSjbdmfDxcZph6TxhiYR4yuMe7V768Pu7rQPe3224Fk3G7r",
  "key8": "f6fJ8xspCBJgzViYLGchHG5Qf9Bvx8dPKDDmMYF98hCsWYheEtVvBfaG3UVn7a6pZfmxytJHnsn2bfo3ukM39Mv",
  "key9": "pbHh5VG2aAnJjNf3cKpV8Z3RMRJmBBssESrMqQJwHNtBEuV7DkgveWr2eTDeWXZVGZekY8wizBsrLnPMTjZd279",
  "key10": "3fzaguXfHCDTG5iAthSGgMsrhWtrUFaVLPb3vcDC9wgWZi9ExA4rwJVRxdwLEaEDGGRaaKQXWH6iLPCgvijzNUGM",
  "key11": "2j7XeXdYj6AdE7tZQCBQhzzE2pWLtvUtKPQJ7aPNunnNAW8ciiDPWzK2ygjybFB4HPcr4KEU9orYHXxbBcy3U1Be",
  "key12": "SFJhj7yNuqjgmvNanNyMNEq5Dt5vP8tfwETftpxhUE5cugP73hsZ5TXokjVmKCt2ZJCcbvksmkonmjJN4nWeuze",
  "key13": "513ALcdFpYhwBGRH1ZXr1sdzVLsSHqkbN7144EX65Egr5p29WDApTsv74oULWgyiwJMVrq3NRDHdTkFpf7Suqvrz",
  "key14": "CENzk3b5qG98Stxqqg8EcVpTbxuhp8pnTXFGDrGjkfUPdJZU9q562NVx93UmRRi2ypdvpVWjzagjo5wXvhn9xx9",
  "key15": "4XuYZe4CPXrNH5r3qUxqqvkuo4gKv9CVPeqNettYD6E2ZMqUYHiewNjMCZziQPu2xKv8aoYjTqPsmHZFPBPRJ7FB",
  "key16": "3eozPaVw8Gkocm88BBMtErh3W2Z3zMk82kJG8ngo3ZTf5b9XFHshzZvMxECDJeKBfkjTzVdwtreFNqWBLdr2BNr7",
  "key17": "3uPDNrm1scSr19APVwAtSoMgeonWENLCMzWF6oKhi7L8RbJTDEoQxurCaktUYH8po9XmQ1Cmhj6R1WJ9CcEnLQ3d",
  "key18": "2jDiQ7nudW5jPnB2WmGSbcL7ac7bQfmFof5YUL8M2UAApMyJuscDEkD74BCFG4JeL2bP5Bsc5jSMJc5ytPnTKaq7",
  "key19": "5U1AVvhmkTsRDNk1byTDpTVnCs4UhHWkVzRXj1wds9VUou7btk7t2fEKASK42yhMExgBwrKrrWd8qeTfEkosTEAx",
  "key20": "y5SknyPZABegKh28bbrNtiFDVLJYPVf9LRDLeHSTKEhzmdjNs2WkyYTeEhsXSZ24rvqYZzGyaK1feBqAegTyULP",
  "key21": "3nWW4ivobAscoKgnFTyMKvVi45ra3CpYWdVnXTChtKctJcvgkxP5NLFmNcbasbAhDYdeGHRmuXS1xHRG87DxQtbV",
  "key22": "2oL5fSL7pmy5VkTHeWnJZx8e3fe5vEiPnZ9iSUMhS9xgdRvvbuXcTjmYvaDZBxnKMYddr26jfwUwUUo1TQi83owQ",
  "key23": "5mtDHTrncdGBRqbWJj9kGhV6swX9iic8ur1NwhDwnfJhmgerKpFQh6eh3xT7Nm7Y2X82DSjtF7BF1gD7Z8sFMdUR",
  "key24": "2nfjWWKgyWYAgeTMaZRJt7qhcGHvFqWXwzU4jWot85MhQT35cr5Qg4votFxdEcR4LfSW7EkYMZMvRnc5vQWox9Zz",
  "key25": "5W826AaUrVY9DvmJR2PrZGXgjcPA1yXmcZGJezDmD6fQz6PWSbhrwdu4t6idKMLd9x91ZwSGotqGFY6YVFRUGUjc",
  "key26": "5UXj4eMYBLcWZrL9BYkxSUfjZXPyzHVnLSJRD6ykbv1hYrc6mtNqsBTbzF8E8kYrLpqWq3Gw3yzyzeuduMf3Dres",
  "key27": "4RbjzGuBndbtRXujwHgax7QM1Uyzb6uTakzrfiLpnFdaLiHrqn1qSSsUCDFuE2sPq51ZPkuSWLEG5zYB2jKtSJf1",
  "key28": "3fXNhQbV7DBJ3iguNGBbC5zphVBVDqpUgchLCDYqKTKqLVfSye9gp4Hj7omkdrmaGCtueqE63FbEnNxyPD2ub5sk",
  "key29": "cYKFwXXcbhEf8pGya6NBdqp8cArwdW1uSPyLvKvSH4seJ8EhZXFbGu7DLNDFw83gAUAUvmu1PfeNBDybZs1ggc2"
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
