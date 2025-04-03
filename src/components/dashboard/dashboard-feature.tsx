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
    "5Bp4aSx5TSkS2TkdLyzXQrjDzJ7DXJMGHcTVnziLXeXBf2uLAFHuJxVuzg6syXy5QS8T3jGTwvafXWjsYQ6k63uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkgLDSuAX6d1ie3srd38eh1gDJpAJpfR6GXhUUirdkzGZPRjCqd9s8YySxasHrcrJuJXRDrCJWgxzuxF9v3sHMk",
  "key1": "3VeVhg2S1CkruSwShG4AXg5TrCFaJd5QpUmQq4GGivY2RrWfU7ssUGUdpX6N3zHkUL9aoRmMv5zy881TShUwLdSb",
  "key2": "2QCURbn2Sxra9BuUL5AP97hgztoNESnHzwNFxovk4nrswMJjb7qX3icp5ELeSFUjkLUnCRT2zNum3CgnWTsGpoen",
  "key3": "5fqXoV92zTNuJ4r3Mwoawt7fTgcTBa4syStqGqoPPk5SwrtxinztuEGtc6iK2gkEaNYrL6zmK9iWcd9kQ3kr9VKG",
  "key4": "36U9TUoApMVcfyyCjk5LXCLsDF41hkf86pQ76YvYmfcT5kx8Y5thjNujNyJPCHiEBWsz4UU6JYgMezKM9fAMPnVQ",
  "key5": "4NajjGJ8Y6mrAq7ptCijqdyiRNpzpHQHgdgSp61jGYoWSYBJ619M5B5cZN2QdNgaQc1m7mYNaQhirUEWAcHb6LMx",
  "key6": "4QRB1c7K4K59gpaorbvif2jsX1fUe6qHSWPawipGXBgfS46r9izJNaT8ytd8Rn4MAzoYPbmGeise7vkaBq2zNKLB",
  "key7": "euYW1zFKm2hwSLvbw8kBEndBWTfvpTTvhFNg3XfU6WZpwmczAozewWvnuVnfbqh9H9Z5HDVHp6v4cX4ws5AAGVq",
  "key8": "5s8rHTqvJzFRf9BughQ8nDqr6NXoYhMSpstBBKgXoB9wjzMwAVS8XnRxiDVPT4T3a46VJVJmyWbsvSEwn5GnW1XV",
  "key9": "QyEhDoyRsRVsPyhJDJiGXbpkfEaeaA9Rh8k3QWkQpAds7EwN6GEojDYeR9ZdSqjNKioA9L5jPoBhNzZLJ2YXRAW",
  "key10": "5kyFgA19LECS71Pnr35NsZ2QD7xwL3s5s9pZkQJAJktt5eG8AtfL3pBL1BmvSDc77wjKU78zEgnQZBTv9VyFJdfi",
  "key11": "5tiJWveSjKyuXefbzBKUPFyoNvx41rysjdtseFEcoHUN1Vo9Yk1Cg2bbg4Q3qdaxLh6thP3osh4FXSe7RCz63QBd",
  "key12": "8KbBvy9X4Ti7h41xbPoDcUpAE2fQYKNbwxUhoTTNDoq7TygyRweSVuGvdGT4yzfhdNVWKQZrqi437icELpMJbbL",
  "key13": "46oPLfJctJLp8kNhjWobReqMnrXQtLdHgkzRWAE1RMMpoc84JsEGwRtQHmEQoVd4FfLRQPq2ZRPZasHw89Ee8ThC",
  "key14": "5LmGPpKGZGYTxj9kBEeZLfBUe8y2odjGkN8eDTzPRcKA5wMnZLapDjeQjaqpvYRbLUkExrKXh5mjLkXkAhSdrhkV",
  "key15": "5HhA6frWTTmdqoucEojqr8xM8nC7o5QRzYcu5w5UtrmZSLpfVTn5hxNw7nffk6oXQ3yATvXSFBL5EjuPFyVnrM77",
  "key16": "4BCkiijUnHfX3sxS3WMJajnJjKgJ9m4tHtmv8ps7nRsab6jvpcDBkMA9smrJwFFAj5UXTcbQrsfq314ZVjoC5EtP",
  "key17": "2gTtNnp8cvV62U6C4Xfz23LMEMK1wHcuaB6c1VRFuN2SWTuFPPewJ4WkaqFTiBCfFhWwHxx6vi6cRZx9ZDKmdPG6",
  "key18": "2ZYZbu6E3XZXU4rANYZK5qcYowGjFE2edDaqG8Fuw41aPoGk7xytw7exNNodBJReboUZNTexZocT52Pk7CARrJuK",
  "key19": "64VeZBgaZLykymLk73XQLaUxy6vBCizuco5JGzKfb83gTutCPhMR2y9YA39WLQZkYr7gdvDmcM6KCamfq1qu339X",
  "key20": "2xLw8ZjM6jRKxv8rzQx55bRHx1B3nrHmqH3Ve3EUYRBDPAUWhJq1o6s6EDpWn2KSkavZoPQ3K15iuu3LRQBMwCRF",
  "key21": "U3RYt6BWg4dVErnjwf2ouKkiKEv99GrPg7nSjiiavTZJ9naYyDx2TbEqLeREKfYwF11YnUyAtv7SrMmA7BW2UCX",
  "key22": "27SwMwfFYvtN6edpwkuBEbTcrkiaLS3bM7b5j66NvngAWqpMXk9R48nM5To8vy3fJK1HGzPYwATsedGU8J1zA6mu",
  "key23": "52UDBjUNS9etLvrdzckrN2XGcbvmyBqo8gXbUy7iM8qFyNJcBm3kn2PF1LmWeqG2yA9xkxHBwtZTeWiYyrqHWbPN",
  "key24": "5ZVYRJeMK1X6URqAFKAzayDaxCxduuYt9tsir98whewUz23PzUqtkbW94MoLpW98nuP6o18DEcZvNktHWg86SK9V",
  "key25": "NxK8auduJ8XgLhwSPQUJuzNCfbNsna5ysgzjRALCsGtz2UyGS2w4WCtayNZGqoFk3DgyJBwd8fbaS4epZiuSgTR",
  "key26": "5H3i3XXiUoFj2p1o4JA6Fj82rB5JeG8X3xaqwHdukJsfFxC4bqBrkJWpoo4mcWKyNDC7pBz55GKQpvhmCNLppo58",
  "key27": "52FzjyDGZC7ZPTvnmUFzZmLhELmAF6n5STuxG5hnLLpiPKqaQWCKUmCDgAa1ZQZi4AFX8FAHfyP2pjhT5eZP2M8T",
  "key28": "3Fsvt44aMBLfdVFJi5QJ4ToJjbFLFgftz65f1nFVQmf67kJ5T1BSd9UXdfm5TVnKieoQKUT5AorwAyNVscub8UK9",
  "key29": "S2eeU9affyNEd8KuRX26ca1L5EUHoBj9jLt4JhEUJ8oTzprCAqZzRxK6iTdgRkKF7QzrjxfSBty6ng8s7j6aTvu",
  "key30": "3nw7rb5uaYQfRjCw4cJUGKnmuRwLUUdCqbd6n1cJgCkm7dChkmtJ7jTx66mX9nBJMgVtP1JCYV7VHT9DHciW8KpN",
  "key31": "4ViM2vEM9ytLHCjjqWrh9cvhRnQfESwNS2iNrDqY7htgWw1Lsuoa5TVXpiaLE5iH8PDi7PsGfiPS4hVHHB8FSHTk",
  "key32": "3wgDyTw8C4ghZJhMRpw69L2uKeVmhZroec36soe2adxRf4bLqnirKZjvvbDmGCLXAo8cf839yakt2cnDcRtu7ED5",
  "key33": "4acjcYRAaC5sxX8hBYSssGREucxxmKUx7L55hcZC4pYqmrUCYcwrd7oM5NHgzHRML8rpvXTJ29hpqDt911TYNYYr",
  "key34": "4Gfs2ypGaPxJUVCy6rEYsCN71DGxjQSph9adoTuJJRsNPaZqMi4rRkud5AHx672yanw2QhJa8keattjNmr6Zo11n"
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
