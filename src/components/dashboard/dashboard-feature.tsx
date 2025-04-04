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
    "469AgnJiA2Gbw1htrDVmd5NpU1EgcynywRVhMcP5xdcyHjtUJLwkT6qxu3EfnPEJXVET6JBxNDt1cw7DXKRzSQdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kb1CY6u5sGxNivpAhG6HNR4CRFUSkUhnbZrdCpcKEhriTfvYrBq1uxUYSJV8wVQFE6rf1tKs4nUVbB1RnbssaG2",
  "key1": "5gLA6J2pjEdBTkXHrJhXHFbtSokuRynqCyxfPj7FEnhtfvgJhFn3qDqTSd1dRirZcfeXAk2pha3EhhirWxFcQQ9e",
  "key2": "n99XQHm4Tw6JMRVqzG9XtiEuMArs5oy3i1FRWWkcHNwyi8WMZyTPzwMtcoNiJxthq2NSTA7fhH5PRH8ipZcqd41",
  "key3": "575qEdbfpymCeBvVQGUEorh27VCwiAbnJWrKkkmiAsSDB1w5gDukgj7cojNs45jY49MqPMgpXEEh5W7aG6Hgm2Fv",
  "key4": "3Y6thWPpuAC1zHNThSjWqCe46BKVgPy7nu141kPpruqfi7tDJSEDZvCghEpeaHYd7hWg9JAFCeSM2c8YB8qY114Q",
  "key5": "LBybjuMpxw6VYJWQ37MdVgqomEtv5G178QZRcnSqBovh1TNr2s5rfN43bisDbnyQusC6vnFXGAqdVUokw3fU4ao",
  "key6": "2vLyvDAumk6veKXcA78TCy6iC9Pa4n1RopoG3BozrDungM9kwyQtVWk6o72WhaUXMKWtRU6fGjU96J5REaNjURgk",
  "key7": "2ZVxCJRiucNG8fikYpXokgzub17BpL9Uf7UMmTj51LKs1zejr6WXsow5Dc2PNXBvDUv3t5uyWzjz5BKTZDHseP5d",
  "key8": "5zcMSkkCvUWG4MZjkG7Txuino7XpfsBcTSN136VwUjKBXUQLzB2Uz1nF4QaiUQ1d8dizPtL74ZHoRC57vVn1YF9h",
  "key9": "3Nz3xuAEguz1eQRQNZswJEDYCL1Hyq17WKnGhVDZhjBc7BYxs7JYn9Z9q6rG5QcZ1kbo9uNN5D3m17Nr5t7mxDLs",
  "key10": "2k3DKDcPJU53KbakCjYzJHWtbG5WurjukGuidBp2zBXJE9bX23Sz477xn79arZvrMqWrQwvqoLaUSxPRcGrFbAy8",
  "key11": "3EK48pASYqrMWc5ud4hgh2GoZ1f41Q1REjxC7km855KhDueEg3ELj46n1EcZccftGVVr6GxhHtE4aKvQ7g7ZAMaR",
  "key12": "5toNJ2tn5kqouiw4PPc8sxqNC4kFfpp7FZRLFJVbo4WfgXBcC56DTwM3JZXrKg6zCHecSbybKM6mZhhdwpBm6Lvi",
  "key13": "2GYTYaFiwE3MAdTHRdLDobTjtLYiXwsSTF4jJzr3SuATjR5e4Bbm8PuytNiJUzR8u2NcQApzYqQojv8AR4WnWnf3",
  "key14": "5QwsQDGUBz2YdivvERuPgtDqaE6xEAfdVs7BEgTcr5WQUQWoCvCJSwbPH2uKKhsTdWHouedCkivbLDZRZT2eYy6p",
  "key15": "3TMPMf66DyDrhRMfx2z4rRy4zTzKBEisRcdFhNx23Eh3uHiW9QwPdHKvdaEHgvPketb8UEF7FqauLVAmwhWiKNVZ",
  "key16": "4tktFX58v4yS29TsPf5iR4WPUyNMLVjm7FRWvkar8fQCez6eqeZibuKkEzzBRfNwAf876mWpeYpVpV3zGZ2WTK2u",
  "key17": "dm6AikKyLLqai38pFp3LgGrxNBGyqrR1TWXJjjeC6zBdkQc5126nT6Z8Wr2h127CznZbi61T7xhg49umtPTXYSd",
  "key18": "32d1RcTFeyWXdV7XYfs9veyFUdL7ZBK9o1VWzdvujiRQRJCwJw3cvRvLgUpxMKt9ypZkWjov71kUjvm9QCv4N7cM",
  "key19": "4CipjxbFsWzy2NZ8XhzwYPuJhPpCmjvdtWKcsMzSex7yDgVw1TSDGJgMRMzqkjqRngDjggrxPLkNV9b5LmzPniWo",
  "key20": "3VaqDE6fZGqpwoEDpTgXD5vJ8Hrc4ee1vN68rw64HvXNeF8NwwCB6REPa1AEZNcWV9rp312483cybykRixcF2NzV",
  "key21": "3W125ob45LV3EpnwHhmEZfP1vPnsC7M4qJnc2K5UaeDcYKTdhys3GUb8zhsfouwn2PAJgor63SpJwsKQe7rhnZEB",
  "key22": "36gPreQYhhRxpt6FDugAEyVQTZEDbjZXaGCwEKuKwtDp3rnHQRuvujkN74HznsU4nFjM6aow4Pnp5RBYNxxdZYhh",
  "key23": "B3CfxKTer5TyoyHLbmug9cJ9Wq9QTgS3Mp5vX574kTLewnzxkCfYqbpYQJqV69ntXQ8zXaLWdXpWjbMy4XsMcmT",
  "key24": "5QTjeuJrBjpHXBkGepLf9mju2KK8b9N9EoYk5kensPUNQ3soi7xKcPcX7TrcV3ZAijv6QuzE7FY94PrTgpL5T2Nm",
  "key25": "UcunExnvyKEAn2gwj1XsnfaiGfc8gQQcsP1zLwcZ1QpKRoDfLsAGVxWU8fEC7YENnU5g1t1ShMYxC2B2ZSMoUZV",
  "key26": "43QU1NkPWkuf3EsmKQwHxFTEVsqZYdzHK8FayJhD4WK2tb7vRvF6cPfo1WkSkgzbX7YnpBdQgthMyu2ThZwMiytX",
  "key27": "4tW64if1oybLvq7UigMigjAkvATGhyk4oRrgij4pdESFpwTCsRX2JCkxAVzpGMccy1ChDH3upYPMFtV7d8oN4kNq",
  "key28": "2sTfFTJ3mJaPvht2D5EP8WXfkJUL8q3AauP2YkFmdoEqZbmupHSZSrj5yocF1WCqC16uLSHamnAaVwW6d5KjHc9X"
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
