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
    "4yzmRtmfdTZZkt3UEdz27EE1XyLfsZSTM2PDTXYoSsFxsm2Uqb9x2iAz2eHPAaBPjnu9yRmn4vrHfsL4uiBxq6FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7PB9rjYEsANfiEnrSAaeNmaB2BsXbmyVRpdvPUvPGCczPu33VJt6UTnsDfmExsCjYrX8NQToruGPTgGihvrS4o",
  "key1": "3ZExS7aztF2E8v8GUVmiMBtgfk1Y1jX9W6TVqJj3QHvaLetkDBmKNXy1mztGxVEsd1D8sqgVuRu9FQb7Lyz2i867",
  "key2": "4JyYrQdw9L8dgqWndsBc42tFsCeeUFAn397ATVCuzxBe7S24ms4Rh1kVoHEchPwCUwQm2JY1i7JgZXmT4kDsGszb",
  "key3": "5mbMb87RxWDS5xgAN7vBSYJHyHva5gMr7ku6zDzLsbJNxnoKrmmvGYKu2CEAYFBqYzBunG12jayaYFdYuB2kjPeS",
  "key4": "2WK1eEwMXCJu2ojJ2PWFny6AvwAezTZwHgjBBr5e7qfZtGiEMUs3iMrK5tjEoqZLp4Y6ZmNeWuEipzv9muNW6Uhr",
  "key5": "447pQZkfq6go6NFnd4PMn9pFVHBuSZCBcfkS3bHR4LqKGJa85DVxgPUe3ycxK7NcpmTDaqPmzzkTFjKpRSA2RxJ",
  "key6": "4gXgPuPd2278XZDkHpRpHoU4y4EjfpEaAxXUM9NJbR8K3ELYmEnRaB24GiPmh7ZszpYFHR9YMBHdprH9d8xGQUjg",
  "key7": "39HpEDNSehLJ3S2QzZxGKKJbjNJ9YQKdXsS9cFovWK2ua9GSSvnCd97ZJKq2Fxz6ky3vVKd5us539RDdfXYJYPTF",
  "key8": "LGkGNEx25RR3kXcpFKMgU69nLf1FfVtH9uW9SHXENma8YYRNPVz3B75vPBKwiFPC2iWEE7FtDUCNBb9ceU1rSGs",
  "key9": "3P5GxZDVuXYyLM3Lpd2Ub5TYfUUNWKrFFLtUENwk4jSL2Sykb5TrcVeJ9pKFuzXUk7bMW5n2BZc6kvk9Ut3NjcvG",
  "key10": "22QKZuE6tzLCRy9p7cnUMKjtUNfrjza3Sm3jCjGNn5mf7FrXjnya9RAFSa3Y9W5aP5sbqY38xTaVsFWfgLikFw99",
  "key11": "2bdSYEnGDy3SntLjGdpixbTZrBv1eENDSSHmQdvHrUDdQ1ebQSd3SBSWxvJzRNbRxhM37Yw1oEzE7dBGj5PjiKmD",
  "key12": "5dC4MKsVnzyEnhWAN6WecUkGDbBLvSHCmtzMrEjiABRwtcjDVbqPR3zufZo2YrmvoqAocZW4pkFgdPNg2dU5Uphg",
  "key13": "34vvyEV66btZvz43bL131JPq1FvYnq3yzRTERY5VYMG9H5w9yhFRujbCpwPRmFDKmy12mAuDjWyrFaQLenWC98ng",
  "key14": "2MxBinarH7iSYZKNk8x3dQUh5HepykcHCSiWkdBv3aKtfn8rSj9w9drX4knWxzjUvNMF9hWLbhWcWH5QCaLYrXTq",
  "key15": "HV3YUnhKSxuM9AaCKc7qAM77m6279ETkywbNkW2XqtK1vNs7awamkZE6qUuJUKtC7rwYHMBMhkNWrQv578csiCc",
  "key16": "4Xia2fwBQUpmeov18BP9b76TuBZmowSRhjrk442u9T9Rmyjbq7VawhESMjDM82TCo3VhKWV3F3q7rgRfUmkCCik2",
  "key17": "3kbphcVamBBUrMVGqNQdgGqj2RdHL4Rbw5anTqjW6EZjW5qi4seqJuhFhHmsRhBNeyCdFdawbo7a2WPysMMryCgQ",
  "key18": "2o1XzkvwbPJQo5J7MU7H5srnRDznKQFstry1ESoEDrwk6JyLWFAdj78PbHxinBRCmARjpRy449VSgtonFyQ713DY",
  "key19": "2PuEa5HhLNZhSqB7wy1DTgYZZErne6ewidxwBusfXH1rNhUUG6rUdfVEMRZcpTJ6ZhC9LSaETvZ8DLAhERoKMmjq",
  "key20": "5qW8GuXMQqNj6XknPnuGyuzXMSZrmSB63rtqSc9MkuHYgrtVJ4iDKPy2Ztm7RQ3tZFHijdj1DouBsJENuJYBrMNU",
  "key21": "5XEAULn9LgVc9BD1QhqPbAo8vmUJpEDBskjahTn4asJWfFzycdanvsmX7vfpyzKVpxYFn2Uc9BJSLoQicPvnb5cR",
  "key22": "4nvWixNDWTPCVC1h1HN7Z2KnJGM8Hew2xhkm2YLdFVoUc4opVdcE4DVGitX5VvS1z1U4heLxHMkVqcqxjnpjjcbK",
  "key23": "9dT6po2tuBj9Vu9F7JfrDedGUC7nYmH1i8sxws5KTyQGsMYDuyMN7i9oEGVFCS3C9Ywz2urJLP447mwe34HANxo",
  "key24": "RLmePe8p5KA2y2skCebwToFmMy3RE1bchHJ1REw5YF2iaB41QLpCbovFTkKVBg4X4z6SpDnX8zXLyLi1BGY6xC4",
  "key25": "55wUkrtEuX5ZPunKfJupNoskRnRq5dpCF6U2mCm5XWTSdxW3GEdkuuUvNepMBUnDRxTUiSjtVJgyjXkcTCYpR7XU",
  "key26": "9XxwUURk3Grj57LZDEbvfKVVreHqYGFaE4epSoxKNFv2AFzByD7Znie6xtdvznhu36J7BKvMJsFeuWanvSai57b",
  "key27": "38bcnUf2c7tNZmGLXFfbjcg5GAouEGPHj747d8anWX5ThSq5hRdDrpJHEvSEHNLWdjV6Hn7gfWrE7RTyoD5PipaR",
  "key28": "3yCCjfc4s1sXCaSHs8wjDr9jKJ95hvveYxtDiaZzMaoRZYjDcpSUVcRANVeuUVyof4VDEdR6gNyo217GEPWtANXC",
  "key29": "5ZxMz3efNv7Aomk5PDHiXaMv3XkM4U3imb8W412oGfVfXQtMzcedkucYPDhr7Y5jZvLdNro3FpVsBf55Utk1uELt",
  "key30": "5qCY8dqjnuGcY7p935wtoKUk3yjLPr9GqmY8z376ZJZrqF3HwGzBp1jejdVNGADi7gid3hzMNKKNsFKAQtZvXzyW",
  "key31": "4MgKmMLRk7b4fTEMzYTYfsmgvTKsSaakTS29uKbiHe6DyzSQyftcqDpFzy9ZdRgeg8NigME4NQJmwWk8iAWPDrLA",
  "key32": "5QPDbGbU8359MR4QezEqz536kc6YEaL9GHPngp4eVKT1PyYm7RW9x6fvw7tEV1r7Ez2qyQaX6Ho6GUqbsn3E2hFB",
  "key33": "5eqAB6ke5EazKiRPc3w4UvjTWR1S2g2WjHrmMjVJKjanCSG25y9ycwQ199dyF9BwhmbKKmwqkZ5bXjRjW8s8645g",
  "key34": "3unRwJZabzDFgkgRL1uZg23YTmLBy4Q7fCdGH2h2dqEqMVRzhwK4gk8MHkd2KwFk9mzETQbe4Rr2JtQg8mANurB",
  "key35": "5egDLXV31ZigLMEssx6gxiWHrtkLsyk97YsoMeDWaEqmDFn5xBTFz1B6ygA9FLGP44EYBc2QhcVGc9LYnGP9PXBb",
  "key36": "moaTu5uYBDG9EEHqR8Gvjv6WMG3Li4iMzKUqAwFEGFNCSEh8PWe9GRZCyfU24X41wDx5pjQZVQKfX7EHWJqi2id",
  "key37": "55dwdKRhCEL9KWEBQNH48g1KqHYZDhk9ERBhURW3gfMCE3vZN1JdDrdrPTTJK72evg61UrM54RWVe1sKA8jW6yTy",
  "key38": "57TPJTLMGGfyiHNh7ksaKrynKWpf7gB9JSAagBHnpghviEWn95bU93zpMcBPiWR9xcXfnaxWk5xfUzNdGE8L3oxE",
  "key39": "3YhiF8KKaZRNMfJvNLJFnVJtEAYaVtWANonq358u9RSn2xWYZcvQpRk44ffMUosr5zuka9pdtGromECj7hafhVdo",
  "key40": "5SykRJpZkdZTYhGviW9AmUW6R1ZNTebyghfR1qGKZZJie6cbB7ZTxNQ7V45ep8LeVFZSb82v8KpCPTjxXX7ngyd5",
  "key41": "46qtxawv5zJS2nokyGzLvgNVHxwjXj1w5G4p4aZbsDHao1nEeEUmJy7HbCGdEuy1YxeixX9hqD2vTfCjLtWUTpxH",
  "key42": "23Z2mUfcdnWM2EY89xk2D8UezA1YHRnDFoppqmvLuQyEAD553BTS1d9aWyxdeyJWZUEPRNStMBHQ1dbo5RUZPf7W",
  "key43": "9WtuzkPn6MgoQd1m3NvoxvfW2PoWWZeXxiPvtkGHgxuoHE6GjkmC5sf7vTLkNwbck3oxGd9Rphud8TjMXA86cBh",
  "key44": "NYUW1AAYyUJfNyWx1X6bPeFHZfhCHUQLuaVu3p8CWdPJnC1V9VQxNtzVFxaPSW4wtuy2QP3rcnsu6jaV1551hyo",
  "key45": "39PmvH6Gp1gS1TGBFc4HhZfKyoYWXj4rMHkPhTBtRAJ45FgW8ytkJPF7qk9progtCsuSgCb4yNAPEReNzkC6nTsz",
  "key46": "4yrWed5WA63K3itddd9upMhJG81EnLkZ9q8x99KPjuNuXwW9wfvaXmxxUbRkJsJrQXpsbTcEF6vxKW8WWYuMRynk",
  "key47": "3XotiBjf6XbtVCFb2eyCFPEN9iEqeCcLPjqgnWfzLZePk1zHA3AySoMh1rxfh2w4HCpcmEC5Ys3jvD9GC5bHK8CY",
  "key48": "51nWvb7D1LsXyM2KQh6XoNDNgeT16LGaNTCVdCAyYaL1Mc4SA9K58gq3q1xYGeagAQhy6FHr7pqeqQL4zG5Fp9DL",
  "key49": "2GVztphtLF5knYsMJMMJGSsjbSQgA27S47we3sB5wnxYZXfwBVDD1L3fHF9GchmeGT4LBMqZgih33S392aecvVct"
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
