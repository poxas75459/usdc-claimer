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
    "76XqM9g7VtiPBFHDeWNTheyehavFubmC1G6Wc8p9JP9bG38tsYH4DEbnPv8EyZ8hNw68gVFg16U68ka7ck2MyeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fCKi2nrJEuLakDeph6HhFh8yzZHnVfMRP2EsUVtDY4gWEav73qdt7JqJZSGHLwBnCLBiEqd2MKWXVo6X4xxghES",
  "key1": "4EC6NG7fRkm5ZXCa5wjDagDrpUkwjhkMwUrAx3ie9xbAJEbTWGVWB4GhDcsbiHZGdWTTSqz8tws6G2FBPGvvdCgS",
  "key2": "2Tjk6fkn1Jzkq48X2HsZcbw5fbRSmSy5ACtiH9A9yz5oX7g6GoWYQiRLuqTi2SUK1gCNNZz4raBUoGr87W5SVprW",
  "key3": "2UJCm4fywvVpRgXcF3zSnb73hCTvYxaV1KDoDXCazYF927m9i69cwjdeG94XdjzsLgD54ux3DaQVXrWWwgFz4ubg",
  "key4": "3mpFaSaRbJvtkSq4WqTu8fvgmPAQQuP6oquS71gAEq3ydvoT55DNd8UfbcixU2onoiuc9L8CZ1YhtGPfGhqcAJc9",
  "key5": "57g89pnXSomEK3fkirHGaSYHCsG2A95Wp2jENwD8fmiYi96UnosYbvr9uzRYmcUnVAowKFaKohZnCvXVmUMinuhd",
  "key6": "4zsewYjMzfUpAidd98WVA8tWxSCV2ddPMLURFf4kBcFeAbxgUhy8qvNwB4EfomN2AN4gGznojHGtuwJ3X8s6Swcs",
  "key7": "F7HCvDyfoaip4iJoGe6vxanpBJJF9eDHmJ73ZBpXPKhpGZSThi7s79xjSMQg4PchLADQtXfRRhf2NoKkG4ozraq",
  "key8": "rKqnTqL8i2QK6TRvy79jsNahUCJQKpo8eZ43cayeTBjLqhPUqeNrwaS3p3ZK1vV6HVJcpwzR2WUsuiVJCP3P2mE",
  "key9": "4Uqya6VkVnxQg5hQ1Pxom2CDhYdtXwjeNWyME6QU6jvhwhr4C4sjnDyYaJK1yA6zzBNAqZCuYxkc19QJRccU9P2Y",
  "key10": "67eZYWiBo3PZXVQ3dM9Tm6TAZkc5TNKhLo1zCRX4Cz4KWyKco3qkWP6WuWrXXtDFBGZh2jFqDvR4JkzyEbf7ouLX",
  "key11": "3VjsiXczeB9AQCM9pDVzkwCDFmrHKt8N4ebFL7KQxiA6tkP8V6RReR8nZ6odFoGLLimzgn3S6hYdzPANE9eEMGzR",
  "key12": "4nn8E1XAE4EUmB8TeykbXWctYir2FKhWKUAePA4fFCXEAdT3PAw2jRqSpSRvGYBqGtFJ8pMXkvbDk4YKcK8d8do1",
  "key13": "3rwVvxbtPDCkkZCsP18pzQqsJDVV6xxf4zB7YWoLTRxKBTzRRzNTtPNUR1QaRSGAyY7xuWU76jCVjX2dihvtJbhA",
  "key14": "2tLYbwMynCT2gyGWU8Xyp1hzhkGpQLZCiXHk36Ju3vYPJvjkMpNGr2dMo12nwg5hk4PpgUjom8gWpcjasBW8JCk1",
  "key15": "5vFTZ6q77674tramAdeMV47V1yoF1hA5BWuHqvLxzq8G8Gj9uVpv8zYH6xusZH9twYmMWdGJeaYifbadZVgwNgha",
  "key16": "4bAtPU9Bqey6HAJbiSoHSGyD1SGvik7jZdraxSvrB9i1H96NP71sDqTUw9tJCfgN2BVQZBdJFvKRov7r8XUqJxvT",
  "key17": "3tPhw5HeJdBN2wsn3ETcjAGS2Z4b5F7hNp7kAeUh9CHAWk8YnrS5LAyWSyJpzhmac3tHimxx62UHQLmfuteeszTh",
  "key18": "rGMpJv6Ts5EnXVkXoAzEy6fzg1KAJxUkLSzcbJPgmWT3HcAq4ys53MykxdFwG9xKjBpRdVcx9Sd6PiEkmcxsn3s",
  "key19": "TWobmwYoxwrZqxnMZrYbUhByMJr7A8kTDZQEaYZLMBLDBMVr4ZxhXqV1vhfR3tvMRNNhVjZd2CCnXmVyW1jPsJF",
  "key20": "4D11hF4NYnGHvgj4nGMvXLJyGdnv9GLWrPKQWD24xbLSZJF5PPtFi3NMqgQFQ1k3ckNRM6p95TvCWFMG5C7W1PzY",
  "key21": "3yzcDZDrUJAQyTLCt7XPMsL3VDiTyKnD9uooAuDuuTK629j1QceM7MqYDNHsKBqQERWFEAqvLNRJteqxTBBFpKdb",
  "key22": "4jZm5uyA13cpfKHNxe2vbefjhjrsKffsHx782s3BhSBH3x8QUkFy4R8QCKkFs3EHY3nu6TSxGur5R3gAz21jF9pw",
  "key23": "3BvbcwjiokxpcfEHBHRpC1ZWWs2zPRX2c8sUa1YQN7gWiHZ259iSaLSyWe9Pn9LQXF4EMQRG95dwwkkunbpuNHYo",
  "key24": "397fmwGeuREeLoNF9TGGS3KaapHycezuAg9eXESZSinyfFUMc3Vmb9HbUgXigABxpRBUcMc3873MRdBVx729NwFL",
  "key25": "2KMqze37PM8DkXVA9mCwGwTQbyynUidkBivpjGPUhkedq9LH6gNfhx1FoJQhfxSFyT6ZDJ3yyJ6kEhYrpsU4c9c2",
  "key26": "CcmMm4XL1KqWSMgmF5jZvtGro15fEC2aY7h81o4UqYUEyLz9uPEUwuR83EM5fqveMhKzf8sG12j5dNidAPR26d2",
  "key27": "53xNinFXKGHsLA7MqymKsbGu972DstCbjyb8wBmJApXL7FqYFWmfQneLEasHuqgtbUKRWENamqBMesgzTazbzPpY",
  "key28": "2LnMwhzEFt5HTLQ1nsWdXeefPT4cQJEZxWG7cRxXY53eKrkPfYXgMyyCDwcmNvGfSLkSyydWbxF4Q4UL75BaoSvx",
  "key29": "35SpPvmbvhF9JnPqUnV1U4Kom3BW9BCxBeGHMXM39Y1pDwBvsXHG9qo6x6AqgJScnWbCYr3kj8xDsDoDDKiWFD9y",
  "key30": "3pVcZ9Ff7iSsqcdybJQDPP6VCzU1YqQZ4KSa4hkMaZ7CBYR9LVDnzj41XWYdfdrA36MYHAKo576wjAb6nGwWUjoX",
  "key31": "3GUXKP5KYTvH9bVKHitRwo3XRbq729znHg5dk2QLghdMVytVYWrE7b4m1ZaACha7xviGuwB51V4yDmaGPYjzRvbH",
  "key32": "5c2jLDRUHFUeiK4kh2L4ofBm8EvgAJjmDdHvBuKFXEZQKHJFazLjBXmTMeW8jRTnqMPYyRQKgUZdvhAHjzpvQgYx",
  "key33": "4PtDPzYKJcFdXzLU7twRRyVLnC3EB6aLXTvjtvix5utNvf6FWRkmEgV1GrkNSbNopWwtswzojSihFmMYkeY3Dje6",
  "key34": "5vkpbW3PTnuSwrQZ3cUGeGPg188C9nEgNKJiAmjdfiQnMMFzJKHEj3heZNZ2UtEymiqJhfXzQn9vQgZcsDmPHDv6",
  "key35": "4K8E6vpYvGnuuwVdCWG9eEiSBt3kCWBacwVyw3Lj8dGKB72eqgim63wVBKmVxdWwGnwPvkFy6oxMHUxEzYemeSrb",
  "key36": "7khPqHGPiZPrfmvS2poT8pEGNcQo8ztZJ1BSJ1Co4YgczE5KyPSFbtRZrGfrPcTKh2rbRf2PtgWXwonm3EMgGsT",
  "key37": "32kJTenbJZqV6de8STqw4JmnZFCrHc2NHpDqQqvhX51QwbNvQAC1ZTQ6Sih2XvTCjHF6TFR1MQhSpWbtFoHV1VAS",
  "key38": "2MJBYbwXAcXFRarUR8PQDG7nanBHGxnJymfT8kyjozupgcucdBoXiSWn9m84tZ6CY7xoTYg2vZsuaRha1L4eHry3",
  "key39": "PebH3LW2YwW7qS9a3d916BNu4Jm7YCBLkdSZgcEpSy3wkrVnL3cJYmjHHJ3Qtx4HR9NErkt5XxPr85rpo1WhSfi",
  "key40": "4dfZhkKYaLm9ruW41816evV8tQ2BU4gWwXtVC739JCiNgXqJ1p3Q6tNTT21cxCRZBypVwdTsGE5GwYi7gYAm7XG7",
  "key41": "64j9Ukwewfpwq8wezVsmwjm4v2n2Dz4jJ39CgFxjMP9JEzkEWiCger5BikkJHgCyuLNjmVE96tsHvAEvGNbr5sKp",
  "key42": "2cyde9QxmYezL6vERQ3erD5KAycU2ptjwwGn4Nn3uxSe1d3DDUwawc62ahavBkeeMbzoFfGVTteXMVvvSnQnTuFw",
  "key43": "4xw9ZHP3prbFKWs5oUfRuwMN4YW9onaBuFtZR19m54vh6cr5heg7hkpbkekGQQTNiyggNDQcu8mjRYkR2eMBCFrm",
  "key44": "3XZn7cpoFZx6z6sq6avTwRerSmMGdur1JpGvofhkjykCXqMxt7fCsdf3xt6Nzpdg1TGZaU2VSb7L7CrzLtqrba1t",
  "key45": "3Wsxg9ydxdkdtMSLHn9iVVNbm4wEFTm7xXJdQJkov95gGX68uRjPtAW5Js4PydGJfXfqQJN2yDvNufhjwut9Jmd9"
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
