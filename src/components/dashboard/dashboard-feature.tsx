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
    "3viSvhM1pHxgkcpV7q7t6VGvy1jnNAynp1mikVqH9pcnwVgZizNCrcRyho7ChjDsqLju9wxD1xdpPXE6xvsSBzRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kguWakiorFCTT79bvdCmgWNPUuehJeTm5w9dJjdoSFwRi7iqJdZiy6pDTzM3aSGS7zLDbRVwWm9boDg2suFcnLm",
  "key1": "5YdU7fNUWV1VLv1aTePPxo3AD6Ptev9sNGmipxGtWga8nHGjMyMfvpwXWDQhcvC1h5ByDxuvzA29LFz2SNTARtM9",
  "key2": "4TZzFTCEoRayWincEgwxCGVGEXFsGF7cNoH9Xuj3WG6QLG4uBLaUKWxZZ68KV6NLLJWNqbv36YzUsmcqHZgFKMMG",
  "key3": "3A84NX9iCQTkSZLusabGJ8Trewt3VD42D1AMDsFm18Mj5yB5LQfxxBF9Xu6ykgoNJ5T4QqctyaJzoHti7VKkZooc",
  "key4": "32eUa3PSmjFfQ2pnGt8gE8M4zpYMTVSh7SeXV5FQqKH3u4Ege474zCpWTTtV2JKii5a37tC3XX9vLQcsh4ZAmfsj",
  "key5": "2dwhj776sth1Gj3zbUrPA9HagqzpHjkUUHnaFw4tXpMG69wwhFUWxsBVMRWGutoPzftGzyWvDCQEzAJxwgTCmeBD",
  "key6": "2Nb6GqUVVCywKRApauk7MrG8xomHr1JjT18kNUG4AAntLye5rgiG3a4znftqsa66cK48LCtJv3BuBTwyBVJiyc8w",
  "key7": "27qz8epH4gcbQgjaVVsrr9YkH7P5XS3xdAbMNjcjj1MKQoz2wozwZuEoX7yPbFPtfEMPcZ2UsRPVXrfQwmC1AKUu",
  "key8": "fGbBX5KRckzobCeYbqGHUz72tf7QphEPNxvito7LHEdqS8uTDLGcofK3QRuZmwV5UawEBVmyCQKg6Qd9XKkqb4s",
  "key9": "2CkvoetfFn7gC8DDoHtngNcSC7XMj8AMAf4KAiibkUoTdGFwSeJpbVNZCgxyG54yLg8qkmnBycHrSckxh7wavtiM",
  "key10": "5YroGKAFqZW2H1dLUAgk9F25sbaRCrcroJdREyXWPcj4fEqYA64H4RmpAxmQ9W7vLoYriK6qNuvL74XE9yk7vKyQ",
  "key11": "3cdoY1FcMpr7UvYNA636ZZFXV4KrQiF8Mz3q61xeZ7esDoEHMRoT9Xxcx1o9i91G1wn8JBLQvVBSRbdnze5irrV3",
  "key12": "2gKe7dRXRCC1iTyZCkRmF9NfLumooHuZr7o7mvgTcFeBsxNh2G6SR4c3CGVCstmw2W8m7ebnBNbTCNtCE8AHymEG",
  "key13": "3CxzjknqwdBUDi2KF6TRgSeW1S5Y9SesP2W932LHqHvwgbuczDKW55PNHSjBYikiM8Tu7s2xEF4WeRsC5jdbwre9",
  "key14": "2V2CCeWTPot78jpsU4mTJPtHAf4Cw9K1ZB4pBnR7TeEeYENkGiEzREERP1ESqFf7XGBgcWDraHkoAaLt6VbpwLAh",
  "key15": "H7ttpeVHYTrNmSaZtvcCFD46u2ZkU3tEkKWsgH7exfRt92QKWdAiP2x6bBA8sxk6czK1nNMbRmJ5zGD7gwCDFYh",
  "key16": "NWFUbUYgCskQjDh9eat7DSzVsoZzioJi81Z2tpoAiLyo2hJSWz6jN8jzyGEVXVUW3j1AqxZK1hFBqz3PfkBht4d",
  "key17": "4eMBErwLV5Nu6v3XyTW3G8ZZBxkDRYbrXmfTEzMjMm5HCxEsi3j9Dky56fBB22ZSXkhFLe3n9DSVsVsSzry8EyEy",
  "key18": "rFJPhQD3uwKdKvJeBaLAS6evxRRPTvFoi5rUx2rXqAHSuEcdyG3ABokWnQhHtCEHvHKexJkPTB1nf6Pb8MpU3qC",
  "key19": "4eJNuzV64A6E2r6QUWSc3wDxAx3TtfiwuncxbC4yBjTVvMkKHyKkh98s5Tesb3EpbareLpXvptkiHaZJragc1tB9",
  "key20": "MCyoYusutXuHCBeMmPj4eucmSvQxXGRDTLaxgg4DmPjVTFX4DwTa5ASoxgiYy43w9CLrVPAe5k9JjH8GrfsBS5j",
  "key21": "3sj52SRhTt58oY7dpFmGc6wNxMxyx1hn4dcjNgjjUpcJR1b1D5TKa66T9WiAKiULsJsy8JLxArpgr6nUUFwnVKXJ",
  "key22": "5UtNXQyuV3tAHQBSW7uuHcZhnhwnWwzXnZpKbTtWfhCRQM2Ej9ojmFpSXPHtj1jqg1nzfk17FTL9ET3Ujo5WnNz9",
  "key23": "3VcoTuxC8mkEdx2LySjor5C2vfnCwxBPuVNTDL7yT2nXq7A8XL5BNHC1u6UxTDhjCSkWwSczsPTeTJXmKUJnpWFu",
  "key24": "3XS38mvoKowZoLBuCRtbbkSEstjsvWBjGdWqjrwgqPm2AKih55kZjuAaKhhiyCApGAS4pHJSwsQ9XdTP1PQEv1AA",
  "key25": "4saQzYfwxdA5zvhrD6QYU3AurLvW2yhUuvZN23CVd4chAJKviHhAexpWxyi8Wf3tbD9vkhh6hpdkPeMu894fcQgz",
  "key26": "5ppvCuHzub3dSHWLnuTPUbCpEBKCoM4JosPQzWB63sdo7JC4d2JMF8p8AtGxvZn6hnwJsQKSV8P82VWueTHg5rU9",
  "key27": "4QpLMuenf8PT6r1rMANtMqEjjxanGaQxZVWYREW3Cv8jpRCrBrwrnV9uBCYp4proYuQN5E9vhraGgBT7BJ7FuNT5",
  "key28": "KQnCpiHEUTtANEPPV4BK8A2szL54i53YV9a8i86zqwnrJL4xUMtcxGgMirpStngc6zZX9b7KbSiL2no2BRXA2DM",
  "key29": "4G6i3QRnRaKLVfWxsGuRsjxcg2BVxCmTzXP2o3iPSSwNEzNjcc9i7dxGPuJ5Bh61AzDEDwAnNecnhY6SHhkkk9ke",
  "key30": "4QhEX3TuGpCKCjYKQskQKbqjwkkiSTTPYzAHxr198tZDpLCzbC2bhXc4RNbsEJiJNZzKVmDSqSYjScFLbuE5z4UA",
  "key31": "3aF3CUpzut8B5DXVNNG9jdXBAsY16xVcxjq2kSMy681R6KgVbtPLUyUkFEzCAeWVrUDskSvPGrXrCfmqP7KSfrqP",
  "key32": "5nL2ss26FzhanmNUJEZmcyPuKMDUm59aJeSTmyiBy2JjUfQbzAV3ZNUG2xeNAdxFRnrQNQMdshMXQxgCw5JwYrc7",
  "key33": "YsujjzcRjSyUe2ZAeVZKXWTNq99twPKvtRVEqUY63sAML7ej7ZCdksc8eqjEjFQDoyGpzWRwKc8DmqXHLTFBtw4",
  "key34": "3KkgFQgPcLtue7DoCuXjFnf28ozLgnCdbVCxncQmQJ6a61J5tkZ2MvRbN16xK7FRApTziNWdNEp78f2G6fBN8MBr",
  "key35": "2qxKHc7ed1VrxYLFCLXHsE2iJgh46FrzYpARcif1rKYB2YYewQhr5x2MXkKs3VdBBDjh2sSXMYNvz4484C9n3k3s"
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
