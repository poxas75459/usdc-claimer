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
    "4ekvNGVzTMdQQ2Vva9ehgzk4yXya44p6WN3HqsGAEMsaSe74kZPcx1rVVKryXRrdLKChmVG1EXofESdHbGavZcAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LsGEKTdAM3hxmnAeKttVtsjHwZEQyfgbEfXrvjboPuG46QxMFmHmabpToFXVadwDz5HhzhojjEG2GjPoaJsvHLb",
  "key1": "5zvGqbJoqy9kdi6sHPVY8qGhmXTzWWjDvRGisBgFNbdpLNY2nMLwDZkFZd8E8nRvyfooqH8uJcCWnbuw3N5zfGen",
  "key2": "4LHEMUa2w2N9cf2E6Y75qXg4CzA1J1ML8qExMiYbXGGcgvUhoc3hR7C2PyM6ZzShUeGBfhBSUhD9XCpMryzyaDVF",
  "key3": "5wZeXQftCMX3UUCbg3E9xAwfJKMivkmHvBrsTbXXN7kCBHyTKZjX2W9giJ7Dg6yKcEK95dZu6Vd7QLNJ2bsrsBca",
  "key4": "UE7vRsWSGyeG9Acxgv5hBQYQeqBbUzBRf9JJhag6UBvB4HKVhLYvGPYfXyma6RxHpgXaJ7XMPbRWX1r7kyPz3M7",
  "key5": "2H3QoVGhU7S6gzp53N1WF8PMWQ67L2anbS1UQNdMW2AKD5rysKFuE32t5SSeRPVLKdCNz2u5eMt2mJc8j8Y19sZ8",
  "key6": "5Ux84DFVRqoBGkiTcAusjv3uLRwwQqtwzQpJrAtZU4qg2j6YNmuWC9NycgYjyQRy5fp4BFSrCSk2LRPeza7hwbu8",
  "key7": "2ij6DHc1usAzu5CshmBrBr4T5XK2qDCid6hEzeMdPXazv4Cshr57t5yiTUtnETHnXn9SGhW77Y7XiqeXzCMMUjfU",
  "key8": "3CNEmEn6EmsQqwfTLc1r7n2kQzxPwND3t6zhTMnG1bwGLhm4GKHxpXoirtQ1cqnqiehveCbMV4TM2itjjavJuBLZ",
  "key9": "3Vmy61wdszQSZRkSmV2WNyu2T9hXzQ4RHPmxd15QuSmabJ9EftVtW5DCLLPBN9Bg3CPDT59foVx5xFHTniG7q9Lp",
  "key10": "2erTzRh844do7Azfwg29vVh5FSQjqnvQcSKEb7C1WWw9uNg5ji36Qs4L2xC8F6on4HWB7rk7LBJkSVvcqEW5GBUV",
  "key11": "k9MMNHohbRqc4tuDQaa9WKuVLGPcBzT5A412k4JzRXxTR4CApJQSHUD7uTZ2McAk57Dm62vbHp8GDjXRw7ShgyC",
  "key12": "3eHHahRu4h1eojTsdRTS5UyEbSDrWEHpmAZNi6Kb6nUcdbfV21tYxLEnMfuMdbpuEd63HTdQvze1jPyzSygcR2D8",
  "key13": "5vxKifMNmUjbqEqgMx99EHaoG3nQ9SZXqnYy342tNZBzL9X4WCyqQJRh7W24B8mMowEvP9J7VtucZr4ZC1sWWU6r",
  "key14": "5YBmETq5km7C8V4vSwY9psi3neKXX16YaBxe4tifR85csTLfVYrxEC8UTWU3QNXvjVnNJ4QYnucnYTGkD7itkhvk",
  "key15": "4sY6HNFUXBkcPDDKnikZ3epjowzHP5YnPPqdPhAzQJdAJdyxGPMYNQx2ji2ZunCc62vC7Qms5YxQ9ZRnKfdyhM4t",
  "key16": "5SntyCFVLDzuCfH3UY9eFvab5eLx7u9vmsqn5L8ooS6iacgYHs6ZwdCtKf8zWBrG2MFFavuXF8pq73mGmDyrcC6d",
  "key17": "3H9W67h9Y8oFXsy5PBFRUmPunZAimKTLA1Toevd21jBDzKX3KchduTg6H5G4GyJ29x9qCfULHWBbA1CDKAf7HZA",
  "key18": "r2aZtZ4MVGdEBbZjq1foJTHsMJBWkrRGCLv6gBnMGoDYDK4Tx5pBmEyATCuEgMKKqdXHV8zWfD6g18qLGUa7K2s",
  "key19": "21646GeuVGhcju9qn55HeBTrpkuVmrkt5ZRdUGoaidi52HQhensRf7mBgdiqNqAiBEpEBGzR88duoFhg6deqZBoN",
  "key20": "2rvTdKRM9eHd6XBi7VMn4Hgj9Kp5m5C5WhmXvx7n13MdEFc8DC81h2mNUGtxfioWRM7o8KB7zqGqPoA7t41a7mWE",
  "key21": "4pFn5dcRH1YredczXEjuXdfpv7aj98HWutjAEqgLacCarxJEBndfkF2UhaC3U32jS6co2w6bMaovqfpWawkNuZTZ",
  "key22": "Be1wyJxtErynJ3MzUvHScUaifu8JaVXUWuwtwioT4qvJVgmpn6KxTYG3EEeF3rE2yk6SksRBhpLRp7dCn5ZxtR9",
  "key23": "4hGwJ6rbBWLrKjTVTjaMPM1KeNQd4hknVcap8NifbF5LGvQnDdXmRwL5RUcF7deJdVQcGa7oVXRhpoAVu2pJkioM",
  "key24": "4Gki4GLVx5wcsHTu5bXyVZ1opGzKXVDGuCSFErJg58r7g9qJqn2Y1DxwuBc4XKcJCx1RV8BMvKJ8RfZKHSFq2j2T",
  "key25": "2uJsZtnzHsoGiVbnhrPYieNPBuzHwU1hf7XX69XGiFZYrLd1SDtZqf6cAjTBMNNztTtiReW1UagQQLHvjESWGym8",
  "key26": "xjuGE6GET13aXgmzyaLAseJ2xDBTV9JnS1Db244XNgSSnRxGH4GU8tRACh7MnkNKGjbsg579qzM8XeWr4KX7zCu",
  "key27": "624RLD94MN7PHRiHRgZGmafqLf31LZrQ9rtpj6WgJwKCiLmu3XGkHe43si7cH21s4eDhHYpi5Jz1vMKkEzz1eg26",
  "key28": "BvecRmkNZcExeAskg7MRmJ9dcekqFdRoV4ezBa6JGqoNnSJkBUUCsYYc9939PNLMmsMgf8rfVNgFXWNvXWgGMH1",
  "key29": "5NK7XkthdwoP4VaciTtXRcJ2vamWnaS94vQv4pbsZZqZDkCmLo4SEyank7MpQMM73T8b4dbWb4zrdqrcSJ1rVv8F",
  "key30": "3wD3JMDbmwxVcJuP1bx9UtCDGTBsLoHJZ2AfXbeYUGAWy3iU4muPXwrQS8ufnbYnfyBFdKdGzQKTjfzjjk4p1j5V",
  "key31": "3pprmZHDz4rUdFuxEbYbDUQVpyThfdAFS2BWTAdsg4F6VA6cCCp9yyMoTQiH55ggK11SjjN5oyqr5fhtnbeUJkmA",
  "key32": "3bopvzGhZR7hQ8grHXeuuXJy4LZHhMMuygUyarX1JKqWHxMhDiijyN84nxc8ZbBuQ1EAD2uSufbx8NXQZqqdHgS8",
  "key33": "jSNFE2v7KzLuc9AovX9EAYrp1zrkc5ReGetq8s2xCArF8CDZqMmzgFtduEvZeAuiAH4efvtnnPA3HFCVy4ukNpK",
  "key34": "3EMXEkg7B163VCS1GJRwoEMq2ZUaszsuxamEfArXksoTiUSabNtB46MF51FKP1A2toKC9m4Qkru1aDR5nKdSoGAJ",
  "key35": "VE5Yvx5dapx4ob1N8Lbi3kPRwukYgkA3GYy389ochi5ZHux4yfENsfLjf4P7xjwMDGDbhxACNEP9S9UURHufD2z",
  "key36": "3yrxXHfhpAwR16ZgnXLFhpTT8sDjdbPY7sR9ZfAxXRCebygkTmbbA8tCSkKncmzFZ3k1QeBdnmN8BYvHwwgbCmnH",
  "key37": "2HF2BrTyLLfNMtNZkMCuRoNguKVHJddXhnGqpn2x44wxyiJVc4oh9SfDKFLakxAvS9jbvfaEhgoWN3SAH7mxc7eK",
  "key38": "5EfX9EpTNSSqpNrx51g8ER16BxhLYpZ1aPXsw67k6Nc16kUXFWsP9i1b1ZbnpBuVLpQCJasi6sdykkmuXUXCRaRb",
  "key39": "4FLwsNzRn5tzdK3YA25qkayBFW7djDRQwsPv6eQndicYqniBtpmfWpXjW1FNK67h1761W7J8vPnNKhaecjvpcDiU",
  "key40": "LHE21kguKWbPYuTt2krSspA8FVYmKJqvGzwtz2Uu8naxgCpGvM6pEA2VeQkzKUozypmB5VvhBuC67sSabfNx3A2",
  "key41": "3EFpepXLUcknusM4oWwxpow7fqHMviV39V5jhRmECqpbzypTqyqj5GdixR3dPXCgAcQynHYr25bvyorhbWPZChn2",
  "key42": "V7ERHYsrzteJzM93U9v5cGE2nwsRUeiTzdN8S3nBZHikVrrMPtqugnG3QrDYoNR1v4cHVmVARb2JZDmJdkpnPdf",
  "key43": "3PxVa1T5F6nnvox3erEEEMQZfq2SVZX9cDSxhbr2ppCKHB9Xrjnb5X9w7W7AL7P7ugs8iXNZSXcA2mLuUcEnK5cb",
  "key44": "5niWZx1KqfTfcNTYBWJtQjBnCbu7HMa7cgFRyk857VN6fhzcd3UGH8vntGQFVDkAH2h92bZVtV3qdiAAiQrXv1iH",
  "key45": "2SPnXTeF1QuVvjrKCRfPa9acPJbgWr3w99dQmp95rYqwShtWxsQ7MgtzWi7S8di2LFUjwgN6L5q8MiMfgknmg6zN",
  "key46": "474ubTrbctGU9UdaR7bL7HSDsScbeNsPQLpvXLqRdp1YdPU34uBjs86iTyQPUubNHQMPCdyUKUzAPd4PDKTpk1xr",
  "key47": "4YcFCFeCuirP6HWA8ZSpuoYtCpvSM9Mutnxidd2c1ZevF2it5XSApdKEfdkxeganVj58LDAF8sG6r5mg2hc6aU75",
  "key48": "5QTdHedREDnMSC8LMgUrEdyBSjWF6Lj42Cs8jtN2Dt38DWKMUoXauvmqQCDUm2wMhG8j1m64vzX26PDyphr5z66c",
  "key49": "5QWvfWjiLnCzVaapLTpbHMq8FD74Q3uxz41NqqNEFVASLoLH6BKASoVKbeY7HnqK3Br2eZhJx1iGGDzvTiT4Ggo9"
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
