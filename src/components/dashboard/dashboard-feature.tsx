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
    "4GBgx4rS7fr4U42SxrpVzwhHpuCnRepSvcqBL2TuwsszvQkmXBemWugbxoZv8WH9rHAXah2RVbS8D6vFJdXc4Ny1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZh5GTX1HXF6QyFHTpiwd627csdQVevUscCALpDwNMVqzhYxTN55mgBEGxGhPdTn5k9JX9bCtpnk7hAuP3jizjf",
  "key1": "4w5PgUnKhHaX8zJJTyjcQUKURopAXLb9uHjdLDqsKkyNZd78CSPbLZv1acT1wyG9FTeKVMJiBqr711dhZLUqxmTy",
  "key2": "43bjNSUps4vBQ93YejexbxjeLi8aQjHxEyY46rnqjwYdGgG1LdENjPygokEzvxsikYtKAGNQUtDgrVmrxDwGi3ps",
  "key3": "3HdaGHcbcHDai832WtrTC8C6Fgp5iPDQbkyPVoaHeAp8WGczzX4ZUHiSB8weKfRp6vRahKFjsnLpQBmfW6z34fqf",
  "key4": "43n83G24qdvMomozbZoNtKQD69NY363nbNrgCc3sTTx3mqXVuEyYQdrtFhheTdUqDupCZQDEos5Ko5NhtXwrk1L2",
  "key5": "3vna9ZhSvT5MSuJoCipJeEJ7HFBK32LpbEVNXxRxv2KMvtvpH7Ro9czPzBHDLqA5bTS3vgsofCbApEahG8ANKihD",
  "key6": "3JQq5BXxEMnCrLXtsRY8fBvzEdz2tvNh59Em61TLTS47kfw1bVLossoTrnYAGR78bbWgcqJwLzkG7yLWs5gdx92e",
  "key7": "4gUx4nEBtryb5S7tfzeVEwmumKoFvagCPZXu1Xrti9aDrn5sqFppNhH1AQDWspGKsA4K3vMFUGBxk7cywXkQyGfg",
  "key8": "57G2A3UTEKGixRX1Nix5EVmgPCwbhqyUDJSucvZZXRx3Qyoi6wsygvhAoKYsu5aAXxwCFEn8rL3f91fZA8m4p6jd",
  "key9": "5VsV7c92rHLvnvRebt5pGqj6dMofNmENEYyBRex7Zx7eyCYoq2ctneuiAfMC8ebxXHGczr9u5qdJZrp1nTSCyWqf",
  "key10": "5BPE9qJ3xNwoV5nt4YhDk1CgvDjaVvMzRmCZ7KHm5F5m4jSW6jqLMh9ezvacKP2SwFb8VxSx4ZVVFnb8PkDcNDd2",
  "key11": "4Q3apvnMQzrYf35FrA19KSohQfYgfdhQjD1zwohRdM9B9SAz3ka5PHxhH4xfEP4NAJK1oGSqsdeCy3wn2sCr2rEC",
  "key12": "2DyKqb9Dv67cKkXtJNj1VZmi2DwCo386wtqocksj9bFb4X6U1hnqSXfg2Vn7z3Lg1fqQ1LVrguPkQGjVGvSRwGdp",
  "key13": "3jCZb5yvwCEe4yqx2YfK1vuz6kZgjAGfXMqLa3cAWXtwpgMn26ftiV4rFVdp4BBPsfzMdX3dLivPvr7NSJTD4Lmf",
  "key14": "3qnkxEXVJXLoTy2huZPTfbuSoe6tpKntf6VQsDm8zQuz6dgMogogqgk1bBXYaWQpdL55BnnE7wcTskZaar9MGCKt",
  "key15": "4kJAg2n34WVfmuXi68osuauz6S6YJ1vHBh8GSUB3oGjAgZxy9FkrnKyvZDY3wr6m5q96k36JT57EPKy2ETxuam86",
  "key16": "xkoR3466vgVsdvYeFUxPU6aZS2aAPP1j2rUd27ZbLbuvS6AgaDCL55UhAHBKA1wd3qaVAXgefrnQdt1R8PJsVJw",
  "key17": "2BTfNcibzLpsboimgfp4cAFZ4tp9VeNrveNhZ1JyNNCdZi8kPnrL2j7yRBJNJM6DmJvkKXh7tZ6PUoWoZX8kUFS3",
  "key18": "3nU98dop3eEcAV9HepNiTtfzTPDWnpiPgKk898w1GJmFjuNERwyRssyq8QfDKBhmsjYpAqhBgoBcxMuz9hfiS4kz",
  "key19": "JuCEtNzSg3CDgVDyJxJ9k4RF4iN29YSEYrt98KjygPSZBUbnQ2Mr9fqwhwM5Sq89VLwYDT8MmVTqzKFhCXWXcF1",
  "key20": "gvCoenFnD65p1qjeu9XauHG55LKcvWBXhPEZkHcT4UNYoxQwfSwZtrAVrWrePNjNNKxd2PGcCkDBHsJti9xjzTa",
  "key21": "3V8jCCCA2TtTrtGNVjQn3QUFrnGLGLPrudoPHyCCoiRfmG6FzJ7DDsa5WwuruVTLonvLxdHaakvpzdrzZq47VKAA",
  "key22": "2qq9XYCu9u86DQFn9WviXkT6MnSnheRqErKufwM8f96ecrFjVsYMuqUSxiTG8qTwqFrEPptjtodHqEirpZtHafYc",
  "key23": "oYkndjRzJcLAevi8ZPpgMM86mkkHSXVVGP9pbxHepLbNi5EexWQQLEGMNB6stQ6GMZnB7GwYPWCYkDPTnY2Akh8",
  "key24": "AQ9EG8aGQembgFSmWu8NqFf7eFmZqvDqz1MnzF83qDUdd8SHVnDfkZbWKmHXJ6XLQjuk8P8NT8PkDDVFRFic9Gc",
  "key25": "5i82B9e8yFQovWwebDkczouQNvfmJx3QWjQQ4biY7rgwA2J2mhKXB7AC6FrxgHodZqYnZ8SkNijUFBebmnVWoMTV",
  "key26": "36d8G8DSw8xaz2hYTtoAPESdxPCoUc6J72pUXH5g6atMfUHVdUJsxUaq6RWXrG4tmwnC4Nw1ok2GTqeenPDKDq1U",
  "key27": "Aa62cX4o7MgGUketVQyryZcbV6M7PirnUXTs3CgjJCmNuzkuj5aM3VR4FtrQZmHMC5uGd1aT9rqUWG7v4WEHLF5",
  "key28": "qmqmcLSZnjMQnM6VmDxSaix8UmPcKZHQzZuwm7CkQyzEcboSmiCK4TLR9ZLr8FHHcxPVUSUMZR1pAaWjZSsXrEX",
  "key29": "3aDC6zfh7Cipd8qotKxF9bwrCwu1UHaaMVgBD5UDudAM2Cw8USvvq8MgrwJDWH4v1eou1bsCoNfEJ7vq1FKNa5ky",
  "key30": "4QEn5WpXgEwmHFs3yjZ59sfzvsWSAdvR8geHpHNjuDgCpoBwtnV2BBubA5DsqyJJXtEgw1oBNteG9B9HfXgauQ7e",
  "key31": "3uhZB4CjAPMDEcEVD76EoFhSk8t5cF4fiqzZj4jVofkRyu22xJXWjHuMYHcW9NA7PA28TsTqRYYz8eigwBFwz6pY",
  "key32": "5hDLNCXHoHG7NvGPhy9Jjc6Z5BzY3WLbdZbypF6NJA4cByvbykWjGjZ4MngTtBTEjNwjuTdEpwerMuEndFtEXDFR",
  "key33": "VAdDeP5sZkBENDU9qazku3rqzwE5iNwge6x9gfEc8svstYArf885xw7K3wgb4ym1EoNqxycdi93346kpfvUYBq6",
  "key34": "hTpz51ypxVvsR2NrC8aoV5cYn6LFYaL9QACqjodjj794mmXhmQcnZUmbQnVbHn8tJudQYC4BVmdqRXxJYr5RepF",
  "key35": "5wH1RTmjGXGKVeUyYt8YTYegArqNNhk5JvJ25QHpxapAmWwwwVZY4Nf1ETbD79t32GohxkpsjS3FdiGojd7c9iHe",
  "key36": "FCEgFdZnZmrPBYkDQbuVZSPARAMERX3mjSrcBBEkymNQDSDnjHggwqmwjYhjddXphbWvMJXWRQaA1WHZeDqD88g",
  "key37": "2qEBZ4K32GpbU3DEM3pfDj8KQSL2TfJJhvKRyhprWeYUERy3L2Un7MTHFXA4fw6p1UjXLMpnTdPJJCMhGqTwFkGf",
  "key38": "tvPtSpobzqVm36H2zajB1nL8DBpxo9do8XatJCcd8w2mmmwuguSLQtvVZ2hkmvBPKz2BZ6z2dgUHAMAdiUjTFsr"
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
