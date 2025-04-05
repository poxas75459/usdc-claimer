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
    "3MwN2oYfBXPE3jE4qsyqZ9ah8h8rQYnjai1MrQJdx8XHwHqvwVnh3sitDyuNbGNYBihJPkZKiSgaP1mcJqwCHRp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHZB94a8SELLTTeCR2oq86MQTFXbXSWxCui4XjJHQqnPfV1TpH6go2nE5jNcpQb9rqqyGs38hBUqwaFyG7L28x8",
  "key1": "4XExypNUR2fMFEVa5VHk7BFk5BsjCULXc3RHdN34NyRgCLmDR24iZeMAFegYDJDyeyeDwDLgWVC3DoqXkAni8hRG",
  "key2": "4VTasiuvPz5xLie39a3UNp1E6Y9CZFTm17VwpnVfnmMv6a2zdKs5LUjaVhdaM7Xff4eUq2rsrboNR2sJobXSiuUZ",
  "key3": "8XmyyLvVxAdF6CJDumzXo1nC3s4oxEEq31GFpnKjDPMALK2KfvCPju31kYx4SR8BrbfJx1dqgFUXU94yvKgvoHm",
  "key4": "4auMTWKBDAMcwz9Gwsuq5U5gWL3CY28QndT1YSruYpp1sHpNfnY9NcKi45FZqto4B1rGM2XEXyBAUNho1jsHxa48",
  "key5": "5cjKdjUBNoeHxwsZwupSpopAuFnKG5Ncne25HPzhLhLoSk8hsc6vjVs7KpgWpDUYHontmt8NpfF8oJz4zV9LBcZi",
  "key6": "3MbEQFcGj1jkoh5s2fwphcUugrrmpNX3Fp9p9oSQZEmzCV8SejH7wbUXzXWaC3SGw5Ua9WRKgZWgQASk8aTdKzC3",
  "key7": "4mk44rhiuh7wUJKuCT165W8ZBRL9GV4PmF5YcG22ez5B74MaQLoun8cSFetzfojYj9FHHg4m1vLWsQkTRawUMr9d",
  "key8": "2RdNwUqKHVjwrVQEMa8BXotoBKtdtLEBYduvmDHbcUJzCbxrYnyVxcSoYUUTEyLyt1NuGZp9ifzTXJJv9giUbck8",
  "key9": "28Ua2kuhziDd8Ncf2dTUE6D4teZjV1UKPmgrX4TaCELfspb9NYwhmSHH64jXuVerFEH1JMYNo766pULFmqvUf8Tf",
  "key10": "4C3FkRc46qsAp9fjpzQMbHWNMbdS9Ztyn4fzdz3zRJZuNpAhpM5wXn9g5SSzvDRgaX92enYiKjSr1u5Va2PktwLm",
  "key11": "4TG22Cpgq4sqtRNa8DdD2xq3zNoUph1MQGk7Qeoqu13WQwYaTLXQgKXmBk7RqoaGas8K9RvimX9u5mcbW3HCLz2g",
  "key12": "mgArjxnRNeFHtUmTMVu4m6TSZwfQwzGgRvaec7QGPEt9RL9MEiMBXMcf35NG8i6GQnkdsqL9QHAVdChvUfPS6Et",
  "key13": "3BSjyAzBjSACWHWMf9vHBKSYZd5v5CUnr5xsLYmxvvDrCBKBfbk4sfPuDN8QVimzY4wGkpu1ejqs5KE9LsBww7cj",
  "key14": "4WcdSkJGqvfBqaqwSmSJatFkWKKmvUx2kk5X43m7DpF5BmdH19XELRb3d2wvan8FH7URvTmPhDU8PUbduiU81vP",
  "key15": "2spYUv2HbcVfsVHH3wPQ7PLAUfGhhFYTEUdG5VMAa827vNeCJuQLGq1tWbNGv9Q715FX5nTWqXDsP3TFNV1xAT2Q",
  "key16": "3nyMj3cWKbJbSXFarRV8atUvBFhki64T5vnuNpUa1NMqDRYH4C9BpdCbAY9xJDKQcposToexmH3vAjzeazjrqBW8",
  "key17": "2yCjmotZKVycwRmj3UvNyoW6GvtqnaXBqQrPyUPeCpkC517bcjFi4ZgbgiV4tNJKsVYtDkFGipA34t85LETSQ21z",
  "key18": "2tmdR9XcLvhXGcE9BM8zTUa8aEzUENijSkDCro23oyL6ux72TnHXgsxHSSqDXfPLTRoWHSDHJfN8mEBx8huoULwj",
  "key19": "5NtWcV88qzs4bb1xdeygJ1WDRKaUFrLoYknPFbWJ8Aj4LhanAg9Fysxe187ViMNa9dd1gjh4BY9maA3eoU8QB2Sr",
  "key20": "4ASdBP129BwKAEBTLQv9YySSaB6QbLdFDoMdFVQ86w2b17SAvL99jufr8vaWzfxkzN4yxJsTbose584u58QwQSeL",
  "key21": "3ftN7WkaGXjLSYe9GPirbnZJ3hpVJzdnUFX3zqoA62UZUD4Ad6EKJ5m9ieRXw22krwYQSyy1tS2N3eC5aftjS15c",
  "key22": "2EWmF85379PLtdc6PrPsLCGrkpE4HL9ChboMLrf6P3dFfvJiKDLkvNWS3KNvzUbgsRtz4Mkm6ogzD8Uc6yoxwDdr",
  "key23": "673gcpdcLnPptfbhGjag13VXnW6eqkA7MS4faxb4GYLfqkStd2tYVeAcKcpdfGTqivsM2KJoc28ioDnZ41NmnMQ3",
  "key24": "5HaFv5oFoA15SD557xe4VsYt87U9qPZDvRoqAoFxjyCqxUBE4E21APk5KuhZT74H1t7bwV1MBLb8MKwUHE4NeQxw",
  "key25": "67ZUVWJWLXCGfJqUawhtw6mPCFLBZcZXuGpitgChFQhRCfnAZUWvm55hfXvPF2vkK9fTKtk8WDK1XQREsNCzp73M"
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
