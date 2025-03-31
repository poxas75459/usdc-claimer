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
    "5htdyrhRHhSWQ2wBxmuqpnzgRH5XktFXHFUa1XNe1xmeLAPouZsLM3EMeA9XMJveT8BQmbWJZD7LGNDKR8m2HahZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39aTkZQecsWASDoLSPjYbiAWcufP7KnrBwefCDJhqKFw7vU2oon6DdNpSPPyeMHbMszFXpw3Vibn4uRty8BoWepn",
  "key1": "5G9Gm58DuK139Wkpw4rSrnBcL51tyTED2RxeA2T8P3T2i2YNbeqcrVnzyJaCuqK1NbNcfNpevVTGPGMEu8wfQR3C",
  "key2": "5RTxtA4CTKTeazG1S1wvaqra78EaPFn53dsDWrzpHxyqbxviEQTMLR1ek8vimmoWfDhjyneRKfxDaAxUigLioQcx",
  "key3": "4h4gVtrQ6zZy3hpWUKzoAf1j1NBsAXbR2GSnLSN1KqdVHHnYYym5HETFmP81Uhs4GygBzNqkXx9AaXPQdLVoAhRY",
  "key4": "3VTJ7Cr1CAtWM3GxrmGUF4XP5cZ4apkq3RGSnJRrQdFNKVCodAtVsxWc1YR4Sb9EfSeGajmrZhRwnB8q3CrZXZHx",
  "key5": "3NhtruDQHQ33Y87GyW6AeDgzotVP2oTNFECA34DjVEvs3nAYHBjtSUEffJzBtxV8255MX5i6t2uuVgQtbRZb9JD2",
  "key6": "i6mNa7WNnaggVGxre4csVkg1AgzeeWeEjMSCUM6BG1Cv71a7WiXnTpCHWSJpZzXuTwPQEbZYvcUtwkDgRts7LSk",
  "key7": "5nJykS7Xv9CWcDHsPQx5zg2U8o9m3TZQR5WNe3F65CXxiqaCu8SGEfFWUsNGn7tdzAey2zdqNdGXYz4FEvbnZtkn",
  "key8": "ZJpfX4kRVBeALM2oM42D4pYBEbPbPvXtYFtJEUgGPJp3KdEPpuP3pb6d554ZuTFUCDddYVzFscbuhyx23ck98fg",
  "key9": "5qwUALTqR4zhWoi8daLbWr3PWMH8bCHfbhrFmfY9c8WsxTgKVe8BmbAswSAa8kVFAbdCELM59mHsrRWFo214DBjx",
  "key10": "5RKp4PyD1Kd6x5toPULDTgjUiV9jZf4HscLZPVsuX5pX5qK4cJWbDu9JatvksRoWGj3U78j2ahmYzxGWyi7Xu5ou",
  "key11": "5vs3sJamgcQSNKmSap5vQ1w8aY7Atbo1uSn9Fyrw4nAmNudr9RZknUXbEwiCxGCRkdRbLeybW7pVUJNGVvzaAWoq",
  "key12": "39NcNQBT7YTvLe2WWrtHMoFxLoZFAJ1uNjKJNDxUyuc3AByfa7oBWSpQaAKpjQEN2ZqKpxXfNTkX2RzVZDtwWQnM",
  "key13": "3ymwZwkqR9hCwUXaZbn7KFb17o3Bq116FVA1LHfL1ELa1woeDM29GUx89BM5JWXzHkLkS4LZYVN2eeeMADuD16Je",
  "key14": "5qGmPFU6FFC8tb7NEwhHPpLvjaf9mZJJys1mwSTuQ2e4k8Noc7dUUr4gyuN8zdJMpQuNJszggK4oyAaPgKM7MDFk",
  "key15": "rbfdQ2CfW33VJ6nAbsbQX6QGmi6oiRLiqsH1Y6ppGZtyndrgbbWAKeWCakPuq5zazm2wq2HS2cBgCRHbDt7uae9",
  "key16": "6578HjcrExaAYvbXoEqTwuZMJQQdqVyni6vWMyHwmjrkMbQXTZvEgVVVL7a5yz1JcuyePnXnJp4AgDrLimAfTcdb",
  "key17": "5pGxYGhwynh813fnf85zf2Zhvu9Mi4M4mksKDrAjkPN2x8EXdyMcc8WtsKL5hwchuDZGfAdW6YdTkHYugswzg21G",
  "key18": "5ywFPpzuBXvKYyNBvk9nK1h9nfzySYcpSpSxnTyJRWvHrxb1f3LuHy7fwHUVtFACzufkKrcgfSrDf9Q2fCnreXUH",
  "key19": "M18NQJgirZrvn4PeFe3SpNPjxe2waPu39NJXfuCbheWJxcUviNvvR6sgsSpxbo5X4QdTFpA9DoADF3yhxBZKpvL",
  "key20": "4VSnge3P5d5S9SAo57VSytFzmggNL1FN3etNZKNdRRxkJ1batFBuAGen2CK3hUsYGc3yMFtLSBTTA3VYnNQUfsDV",
  "key21": "M7rg3Etgw155msXENNPQBgabFh2mxtaRWkFkCaYTWcrfeupVwvXxjaKRrtnAA6bUFJzcQWdSfrreScost6Q7vdK",
  "key22": "kdbbQSqQMS1t2SfW1gn1enUcDnqDk5bAE9swnUuZdCRkYK9bpYhMU7aSKLx3zVHVzTsjyYejjafy8paxLNE1Wp5",
  "key23": "5yTsqLcPhRp9ZMoi5C4uBwx2SMPgaPhybeTunAq1FRzAJzEFLjp5HtYxujrZFc52sSkMfwjCCLG2ktay3wjpVNex",
  "key24": "4fy8TE3xJ9ja6ghsYQL5QrHER9QLTQb1xtmL9EH31trRYDGwKaqkqfQnaiAcHo3cRwXecW83tV9fQ1462GevNcEz",
  "key25": "U6FmTRK8V7vvdyG7h1maXSEHBytEAA3tFpk44Z7ezCwHPetPi2uVt71ng8gb7SG7NJnyTzENAH4WcJ9rLo2jgC2",
  "key26": "4vKiVvv9HYiquFkbnt9mbfGVFJRjveirPmnBBKk7KeWEsq4ZxVXMbFAmd6TFAbSDTCcdG9fYb9mNq5XL17Vuh8o6",
  "key27": "2QDAf5fEC7sk3WZgyJVpQshbcMQs1C3VLW38W8zAMD7Sn5oaWg7FFR29PmfwLgtpap4Pk25qEy1q9mfuwdxHDHid",
  "key28": "6p2eDZEq93wMVtCBr6xK65sGSABjMFkRP4hauo58JkwrxT8mcGuA8u1BaSiFamhze2RR8pZQesJKcWEyZEAkLiN",
  "key29": "5sbiVQ75SSnLKt9bURBYGFoi8epHbsrsnigpUjVmSbi8uFRhcfxu61HNvz6YkdDqgcqDc59uVBq1jj1iUWA2spG3",
  "key30": "5qXVYU2MEUVDckt128PxSujm2VsTXtnP2iCkckNFJSvgKooGZuHMUjzQTK6phqPXWLA23U12kJibUgeJ3ga1kNuC",
  "key31": "5Y4PaqETqCjkugUnxysRk3hhFufHCWq1QpiF3k5ZcFUy5VESGFjAtPNH2BfuXB1dk8GL8XHxfNCYGNW1ivaEJe2G",
  "key32": "2fzH1DWzrDyc7NEcSVpohNv4aVu3K3RzrMKCsuS1QkCs1BwuXwPNT4WBs3KmzxmjXYgvYH433FmeVDA4t83nLPQ9",
  "key33": "4uEbhQMFJmh97LxvUFVgo53dGHhu42a3JpGKQJecv7m6LcdorBeF2iaaobmu5Fx587pZarRyCG6wvYbTdmD5XT7i",
  "key34": "4Le9y1FhQHUjgG27Zfq7rgFKVzHhZVTxhg89z9yZhsSeVpAZLFmMTxHLnmU9KZY4wQC9XDGVApqXajXpcyhJoTEf",
  "key35": "321L54Ek8rT6EQikqft5dMcgxv9ovxEG9j3xbFyiMkPoPkaYXicpzCxDnZAbnQrsXWqbChE1S3oyVhKZhcpU1qZ6",
  "key36": "2r7ohevDgWBzYK39bzyrZiJp9dR88f75dUYL7dsSur18uzYcjS1n3oxYZYfdPsg4DnEA66RZijo9P6Ac7toSGVDq",
  "key37": "48KSU52G541SuzczyCZr4YTsRu6CuoDPK5CyGpLUwVRUx4LNk7zRVDaav8fPN4bJR6GWnQ2a5nghubV4RJzCEA3s",
  "key38": "3qY93aaZvCW6HvnVymA1NHPzDRzdx7U2Xgrxb7KBuyvCCLDKnGSJfQSsXfDWoRYNQgy6RVGhp3TJXfDCweN2rMRk",
  "key39": "2J1wFEAFoMDzGhtrPgtsumsYKg5Lb8TxBhSqEzGVirCThnojbXz2RxLK7FxegLkT8RZXi1tMKVxs1nbcLCuWELH9",
  "key40": "2p9vgmrfVwNCmBiaZpW6gR3rqzaejmhmhGUPNMhTzdY6GnPtimVzeY1Laxtiew6NrZPcWhL4u4pWSQaadK17byLa",
  "key41": "DM5GRiqpcg61c8rADcVfqqx4EAcQQDboFvXTgRjumbyqQzZyQ67KoiMxitS7CDKqegkiyaVKHipboyQjVVdTzWt",
  "key42": "2yZzmH6vDqJCWhyJrxkNUsUTJvRxw6sVmyN5sjFm47k3Xp3SCdDNgr7GGpn5f52dYDpHco4EYBVBcupsc81Aadxp",
  "key43": "xxx34ZewxJy5yjd1uZ3W2eWHSPGF1Upd1CsKuKSmsY79HDmDuxfHbNrGcPi9cw87ULiBC3oaGVWihuK1fcd62Jk",
  "key44": "3tZvmgYD54qevKSejhoqC4s1ZWmocxB7ewkuzrNbNMan8pTDAR4SXdTNR7HSqyq8V9rf9oScJ7JP6yennsmrpq5r",
  "key45": "BWXZMukSfU6fmETWrDCPhWW5TmKWTEnmtVEM5AC7ERvaPXp9bUD4AN9DFGhSp9Er7jArymvku8TVYWTj8hcBCxQ",
  "key46": "3JnDhrjJw48e4aHwitN69JFz1txobQCpmoCBFrmb7ZDcutxFVKDxshs4qBgp3oyNZwPBXygt2e7QWNTfSvvEwxv1"
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
