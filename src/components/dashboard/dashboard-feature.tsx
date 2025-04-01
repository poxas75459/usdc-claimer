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
    "23n7phbquq9qYuSiNuEBhxxr7SCbXmEzGiFsZKaqcovE7NrbwGTzX5BqvJe33nwvbUZJv814WRUuMttgT5iZHTAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9WTnX43G5d3i65GTRacviF16Qe7Aejm8dT6JZaxd9mUBVzAqz5fU5eU6ZMUA5GhBGoWvJ7JgbswgZgBnbtWMLL",
  "key1": "4sWm2GpvbYATj3VJyhp1MCSSBznQDtsrkozr44gWN1RWHpUYt1gWECz5w6Q9rJJEPKNMKy87JiTo36xdwcLg2YgV",
  "key2": "rsLqHWw4Fjfh8GCUg23PP6tLrKr2p4ArHAyBaJwUVqTtjBzXqpX9qr5wXV9kHDdEwT5FLzd4yyNeU7jr2vkdVCM",
  "key3": "4obdi3JjLekvPLAWB97MuAXNtixNCXdBw84R7R45WwfGkq2jTuiLwZmf7fa1ECsRE3K6tNa951W1Uz5w3c85WEUa",
  "key4": "2BgpjGsyBRRF31Uua4y8iikynACr74ScjgP9uTRRyYWBHuneLaFDEmRXXv5ZvxFmkU2sL4nxftGdFwUYj4eByCBp",
  "key5": "ckLFskwzN7Yr9Z95nmtk7GE4uDALWEKgrTLyBF4gRDwyYqCe61Rv6EobSHGz3DavAwijPQfgu1h7beNLt9bREx1",
  "key6": "5yrjHEiPnKfEivyKtx7PkDskcisMGrfRYkTs7EwEdUuzHLKErUzvkaW94qCxQWFaA5SzqAqiXtbDvPJqMkSP8aa9",
  "key7": "5NMKeZmHNKRra5C6paSWrF9k4mFHBG2TwhmMRQ2mqpwoeQTeERXQLXcEy1aRwfxLnLipckDJj7RKSb2XZ4GNpBiv",
  "key8": "tKF8QSE2mTJTWCAv921t9JaskmmLiwpYSwFpFRRWf3BeA1umn9GYqNKcHev28NuX8nARdJhL9ATpfZ2EdNSx887",
  "key9": "YCG438oTQHJ5LsKge8UFFNA3k92mz3CbygNUxJSLjcgCnrdhsGePAVyMJQmp6JYXtwfWR1UWb81npbhBLpPW9ra",
  "key10": "576bxYAztGo2XUFzhmJCizFuxyy6joAuR27mgBCK6n7VFWg1WW3sxHP6rdcY4vS5nYyK5rMBg8yJizKbxBx4yzgz",
  "key11": "3V29A2Dqe4PnPqYG5W4QehTuM2muQCR78mL5mgVeYAbdhZXKNdUJb9ULBUkwcbSLRtaQvD38FpVW91fXXtctK7Ko",
  "key12": "5q72imE9QqK8WfPZV4UnBoyBGB2woq8YmC4oCEU1xtSHWU9PNfT2yAgkR5AVhs2597rv8wgGJ4UkdYP2dKZyME5m",
  "key13": "4AeWfZckxSBL7af8bgiwP5iExR6ThFYnWt9FyYhYQT238mjpmR8xufaP8ZNatqCe1hQCeyp62R61wogD8ancmwdv",
  "key14": "KbebKn3UukAd2MBT2HngJ35RANTnjr2Z9i52AjgGa6wyhgaeNSpmxQssp3EPSX41Q9Fbt9BgjS6zRWUbjRmzSsL",
  "key15": "64QGgeSAZiT461veuKNVwaMDpBgxVYG6bW2F3W2AjyYScLsWkyCeDvCP5NtjW2fesquDGbp7bztGHvzfupJWrw7E",
  "key16": "32rFyKwKXNcdPGLZEJH7uFhsPxjrP8qpUp8TBw2JdT2ohoLDQ3SQow4vppLeWJ6VgjPeCJjytEMQmcANNDHYgvfk",
  "key17": "64C6y3Ngq82MgK8G7rpjtXmYZYnin4X5Uicd2waBEXDdceG8YfC8HFkWPpUuWxrWQvLPEC5qEx4gEUNHnuz39Qbs",
  "key18": "5QA1BL36zt5TJtVEtSAG8kzU21ApbSY84wZQP6Gcp4pzh9RhDKeNBA6pYj8wmUH6RVpw1KhYTe95qZmi3GHM3xW3",
  "key19": "438mFERcLj3takPLC2RXnjJVdUudxC6KzVt94wf5yaSeBUYL8M53gUSyLi6MchQksrC1ixi6gHkToiJQp8LUXUeB",
  "key20": "7ZpWRFV94d6pNCh4AFbsBuTP2JJQkt9KYvk9JdDwFe1RuCmupAouKb9uLQzYFU3mswz8gMewxYyVyBZEXsZ3Gmv",
  "key21": "xMPLvoGMW4GYA9qzDxFq6GLsUP59WX3jUPC53JfYP3Y42ZHVU7u6kuabCZJgA8kiikQLrUDg7y3cHSx9f3uv8W9",
  "key22": "67XTnX2hHCXN8xoPrQzzXNFyJyhwNAZPsbuZQ8fP7FmVytXCpZE6KCVhn6AsUM2f5MaWpPSBhu5xeMPSdo6o8wK5",
  "key23": "5Jp2nbFXxBXKkEYMapJ5nK1pzYadMGut57rmChfNAHjFp2cETrbcNaB65oHFdQ9XXhXdLm1K3c2t9DdwUTZq8oK",
  "key24": "3kk8wyqgs6bJGevLdzcjC7hhM2v9JzTYZwHjG9fzdgwWeUcrkAw7mNg5NTw4pjMBVKWBFmFPHx6qWPf6PxYmab7",
  "key25": "3XC7TCM22ALQ6zBTGNWgck3hbEtyKgMCaftMdSW9J3TsV7qJSKF8VYRaENaPPEgupAvYG7U19mykNTSdTTy2jnjB",
  "key26": "3vqpfZCpNzLEgEDkne8cwGcQssSTD6axPGYvVdUMZ9AXSW5C82Hj4QnSaLgc8WQBCp79BzeNedAn6H42zhDF1gaa",
  "key27": "4hzhxoygQHikgvJct1ZDUMoPNb627eq8bs6sxV3B69HkM6pSpjHfbLbcKXkcovhZkJXea5reV4twa8ihRx4EhV9Z",
  "key28": "25DH7jmrYj3v1WU6QvCBGfXGmuuJb7AcaNbvTu7FZW7f2BEiJc3dm5odZm1tZnJtNay681mcPfGF9wymVXQhXudj",
  "key29": "5E6KbavDUCMQMA9mijE9iE7ap5gWm5KBdLCXPWbaFGxBATEGUTYFvBhp2onEnNk8Evy252RSkmY4UQj9rv6mVd1Y"
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
