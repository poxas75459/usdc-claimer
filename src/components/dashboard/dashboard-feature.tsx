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
    "3xdTU8Uci43gD6GJyCERU4JrfqthgKnSQ95R4UXZEpJK8H87s5oJYN3HYPUbJtVY5prB4h8fdVzEweBMmnZJxTss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZRbts9jzU2vvgjSWCexDEwjDg9S4uE3rLhKvyBi9HD9Tuptf4kkCfSAh8DsahUA7HehHUNvr6jegtQQoSCno6g",
  "key1": "4Jx9EYMgMg6GFQdz85Fd3GeYGTJ1bkbhwiCyUJqcUuJehffsxTVFiDZQHGQ8UWM1phzrPBADSUH4kGweJLTUkCxw",
  "key2": "5Pf17GAjHykWmDJGZEJz7d9Urzzh87svVETcyBKMvd84fwgMZJBR4D8nLDaMqZ1SmCSiWXPr7aAwKnjhmwpMicHX",
  "key3": "eeR9bcvnmANtkaB2mwbtfK9BNqocKS2LC5mYNbGLUQtuwuzLxSYfTUQfu3QSGvL4hya5tBq4MjHxST21GgCKk6K",
  "key4": "6KAkmvP6aJ16ooEdo7mg1srmP5YAjwREtoW8DYCZZc4myXAGpCAwLCc5PK36DwtRD6Nj8otekt5tcqfzwrfWzBz",
  "key5": "2yE3edCjjswkK7Xk2F8SBTWKQr134Jh5c7hd72sBAmbF4pN9NYYeC89KphDzs1maS8DmdGrqTpZaJHetTjiPB6KQ",
  "key6": "5GD7PhtJKqXQLPt6Des8uX4ggDU1e8ZDTzgGbtaBQGaAVAoyAHCiDGM3VDNGJjW5TXd3KjFPmS3J8zmVdMKp2fnD",
  "key7": "5yNjeZsTTT2hmeuksPfVnXWCZq7Mc5U93VCiGxTybioXQzXrTWQMdg4cHpCrdRtqq1vuCLANRqniuXFtZjaTmHTs",
  "key8": "4XTkidiu9E1D1h1gkcKGHhv9LYi6hSFw21bisMCYvg6zf2sWsnZCiczKDeacgMJSNEriSsMcmgFcMLxmM446XoTM",
  "key9": "2gWN85jPskeoNLQcLEeMHptWU7xmq5XrGAkfkvTDXsqySEqud3tstiRwkAucE4LM33VhrhcNAjFYnM2MV6rmwdBk",
  "key10": "2Nd5n63AKCEHw7i32bSVgp3jMmX2YioNSyUrRfLR73thUApArtFaU8x6ez2NuMcZDuqWPSL3gmVpM9ovxTof6T41",
  "key11": "4rDb6TmBWFjKb13UeqH7VSm2b9bfiFS5iHyRwSe4FDCqeq9BpSDmr8TmKanXCj4vfWwfwcmhBKsPeRbFgvsJ27HG",
  "key12": "apmSxATNod651UiNvkNxXczrcYGZLdfKXRFYkKEavFZNTMaRXwk5d9FfQgxhPzB3LV2DFJbpD8xWsaobhWuhYzN",
  "key13": "UXy9qMFD96dD8TwzjSkr8cHAh2TF9fKQnShWGMovydu3JpU3yGv9vxNpR43PEgfaNBftJuHLBEHL4ZYQVVA37Py",
  "key14": "4aYRTFfT1ZN9HzWAjeTzL4ikWWKJ7JTKGxrsYF84tPENuaw96KvsUAQhAMMhjAaPPk5B7uvFhnCQJzPgM2bXfqK4",
  "key15": "bruZmP22wjutVAT2yazpHyw4aUa5MnK2JXxynkZc864BJN5wx1nqqpE7a47QfVKwaddLWRmQVzGPboo7Xx8cTMF",
  "key16": "3pTn18bhBhuRPYxTeYYXGzpnY8ZMTvPquv8WXMWVrRAW4qUxcuPREZGQyTz211GPcmebDA8A4y791eSaizzcYUUu",
  "key17": "3BGutPqvgzNqzuZZR38CggVQVWJzT2fAtyQwHmDVD3jM5eZPZjkxgezfvxz9EJfuuPJVEMXD6z2NrNWptbgHbumK",
  "key18": "3yRdwmnxUxjMi8jpRs4YwJhnGfjnJVihXvsAofVC8YP4wFuDaq56Pf8VCD8km7oeUAU9gGWJf2mcaBeozm6DzWcf",
  "key19": "zXySHwaDaVPCQSAJctNa6FLugZibVWyBoivjoQnpj4YsBMjgetRQwzo7ntBuarWvQZnxL3nhH27LmpwMgK642du",
  "key20": "3zjzTehCDSwUriCyZuyccn4xAwVMPejVogL1ihdPjyJQRrEUxogBeLTcHwyM7b7VMqHucheTyYuEnjGT3aSoSKsD",
  "key21": "3GcKzenrWxF7kwtFV9gpW6BrCoZ2o8gvAwycfrGZDAWDfDimA4P4qY58Htma6ecqbTpo6ZAhFUmM8cDTAE4y6Sbj",
  "key22": "3zSSDPkoLvXARZUUY9keiKnxmUkLk1iA3NmqnM1rjiNJqnC2Ck49uqV2feXFGyM6KohrSrgeBJhgqN2U2WtQ6qHg",
  "key23": "Fs8er63iHEAYi2q7dfFc3JyLDrj2Nx5jbihtUZhPYoxHypn4csShVyz6JUwuPVrjF4F2xgLFYhpgo8Ynk9zZnQy",
  "key24": "3Zht1aGfDLFwh4kBYDnkcCsKiww1p3N4mZBLHbMeF44VNReRAMERbGf3inPWpkKzQsxPkTrDX7VhR3Pvf8cga3zk",
  "key25": "2NbWPZB95VHReVG4bAsv3fQBP46ZXRysZXPwMJeTBWYN32Y5hqbzshpErFhvgSfzyC4ioUb1iN9na8TfJowLsYvV",
  "key26": "2emagkvpvRkZFRiyXP5ZWcpaCtd8b2QTycGdt26nNJSuKUrr96ENMrsKBUwnePHUWNzVqUDQ8HgfTdgM7TbsgP4X",
  "key27": "5ekhUYbfGQoNDXdN3dpzdRwBze8UF8TtXjTRgyxApiwed5Z5Z1LQHDmJGWD8a9TzCQ3okTPRXMxYksbBwsCNmLjw",
  "key28": "4hU9t9Fy7kXeAGBnEjxaS3J7DHgVVQWWqS9sm12J6XnWUFYtnkScfaiJfd6WBJgr2YAADPcmTHtPbPDbLJWWF1ev",
  "key29": "3uifx4VWsXbMUjTW5vnz9dgtW3ykHqJdkSuk8mSr4SeQkW8Zp6coTL8DCjxiKwKbu1DN8okhv85q4AY4bk8KezUw",
  "key30": "3bDZWr7tNyc7VujrkzNFL8rLWULaX8c3vWE9txB9f8nBU65mWeuKEARBqLsudKSFJSeV5YwvCxs4cCE3t5utnXhD",
  "key31": "3xD8sWSwqbjRnJeccRTqqTSKddn6USQ8DK5ngN1o4THpyZYvF9gxYskrAQuiixqmToVStFGzGYhRA3k8MUgPzxU5",
  "key32": "5vQBZcy3u4kb2jNUR44pkuGwNJCoZ5NnTgmGxR3As3BgM5UgScpgjh8bhZfr61cxxDLB6DqJmLtnEvgxv5HdzfcB",
  "key33": "5xhUYTXjE2p4JRaPdr9HcYndjEgieBJGCHEvBp8ZrxALzkAX4kD6kfv624RmHBTZmZj21WSSzeX92Cwj1Tz5MyMQ"
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
