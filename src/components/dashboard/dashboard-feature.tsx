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
    "63r7gd3i2btJ5dfgbEXBdfZwRzFiN2jMfm6AYNVzDdQHPwoKjxmydRY2eW5FQbwZjBbr8D9DVKWy5EBWWQinJFYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPTz8tCr5kt1CUfYjsiX9R1Qksco4c5Bfw1peDXhtkrdCpScoh8UnhE6HZukKU3HgeYwEdzmjwiHd5ttNut2Ff3",
  "key1": "3WUxouFsmv3aymioffTTRoPNaTnKMJQB4fgnaNP9dXTXvB6xGCR1ijaNHv9512emwfowrAJKGbjXV7CNAXaS2rLJ",
  "key2": "3rwtzaAS6etXvohoqEmoVFTEZTpEG4mZSW3D5fg6M84NZGTBRHWGcfenHCbhq4NrxWPyavDZ3zQnNojmPVnaC7EJ",
  "key3": "Rd6LHbSHA3ZssgVmoLuhjfXcfdWPtQSrytWeXF16m3t9UuRrk6MSNM4gL3UC3UJTNkErFroZz6yHhfBjKzZCD4G",
  "key4": "3KojV3NQ416frDbm79x4wotyLLCZbSGqgoSq53h8U6WyEwsi37RtLTPjXVi7ajkVDhd1QRVtytWYX1aoMHzE5Gzt",
  "key5": "4Bmu4gqXhCuvcCbGsxkGtuKf362yQqtQ3cbb4DqLyCGofiuGHRcfDJXGGx37EGU2JBEy7cJgjHq9nM1RW7EfyLr5",
  "key6": "4C6thMEHcH4giC57s57iPAiwChNWm2ZE8ecGDW5wPUDcfyrk8eXhrzRWMc82GnNPshLpkmMAhwkhbLrUycK1KAmT",
  "key7": "2VhXcuwsJHoZYEDPVUzVczhUy15wdSYE3FyNsvdeaVg1DEZDmVidqadM52boaiTwx3YgXGetzjurGEswEiHo3ZSP",
  "key8": "3r6AdJdtov6cUvU6PJBYxHjfcbU4d8k8cQwXDdjWqNXnjcsfRGESgcdm3MAPSbmb1k5geEsztMeEaiuTdHDG1JHj",
  "key9": "346d14Usat7kGvyWDbhBGBiuw75mkaNhgfjcwjh8TfMec68qTWZ9AtgwncmX3b3qtpCHV3PyiTt8i7DnEowCZVps",
  "key10": "1pmFrpqMg1e63XxCb3gFT23S9Qg3WUJ3XaZjvCrM1FL1EBQYn7y2mUKb5iEPz8Kvp4Y6CBgzYuwRbytowcLs24A",
  "key11": "3s7m9A77yNdXQiAyDD1Aaz7FMmy3pxPSGtPkiQj2sqhmyBeGJowtjJ2SfSScmoRtoswcCqYACZsmkNVxu7gGz7vF",
  "key12": "3zxin9D7DSkpjjMfL3csJFh62SEiX4Md5sjodvb2vZRTuYcnpnJAw5Y3JxgtVyJ4oR1sDxW3SbiTrhsRYXkEtbFd",
  "key13": "2QPXAU2SCtNGf27DLHNPjjN1Lh1bAT7W1s3uDXoPCTMfEJqmCABmDtpPQVhaU3ucR9M99DRB8pJgYfENbyDGbzZ7",
  "key14": "5rxzXHEvtwYPSZrXX882GxEesUdHseny4Ef37e1Ve1bnUNY9BUFNQzufcxsnw4MZdPixrz69eW5rN4a9uDo7HHQf",
  "key15": "FZALvmqAmGy9zg6km2xpT6bPaX14gbwbgzbRkzBJDRkz5tX3xfUztf4Eb8FRy5n3ejqprZCLNSseGhTvvXp4ZrP",
  "key16": "2uMhd5eTqR2QMftHLF1Z2zuEeexp8Q7fv9aeZhYHDxrqRZpoW7utayjDE1UPbDAEc4jSJcnCvvm9LCxnAUSvwKjE",
  "key17": "26sLA3sD86RHFsNkBh8a2v3YrmvA2aEwaFo1nL7thp65TYcHzB4nLuo7fcNokqwxizMgJmvxYpN2hZeKbd92CxDw",
  "key18": "3tfU3rhX4fTA9KD9Mg1vCWdn9aHaG2tZskx2se8e8VABf6H8gbhCMszyAQ4QYk28sEvL7zgNYnyupaSwwBNFqM5A",
  "key19": "mfWedcn7dhTfqHJXtpwJYUGSMaVekdkXQGGDjxDeLsBqPz1AJdnpcasXFZNDceFGh2uTw7zfs49iJHPEDft5vce",
  "key20": "vH5pLa6FviDEJqqgSjzP5iKFq3fVBhAiDyjWNmut1GLH2YycNWJwkWfb8aBbAvAz5uFnTnxzRttbBauiA3ivR2G",
  "key21": "2w8oaou59WkLbpMtSyShsuZMwJiMECSpTwps8Qb28PfH6EhHHmeVA2gCpRjMEyWTCJ8L4eMNh7giU8tUHp9Zeqdy",
  "key22": "2x9L7e68hpDYtEWufXSPq3g1Q9kwf7QmArwFPnv1McFiUxk58piScYZRF5tC7F29GXx3bYnAtfKECAXLhmxsvjez",
  "key23": "3QbFSKBWMsieSv9WEqKrHsTu8VwjHajVuG9hZ7mVYsn3PBBtkCuxT7wv5G6wVzxmJKSdb74eMe2nJnHCaKTss1R",
  "key24": "stkWSxoBQdSvMg3vnT9AtDQas62vFCHxhsWcbrMqrv86N7YRZmugWfxaDdBjhhnT5zRa2w7ig7prCHBxZTz5CA2",
  "key25": "3n441PrqjsLbFji8StpzcdxuvtX9TatrAEwcC1F1m83GvF6iPhn9zmpDkDjQNq29f8JaB1Z6N7ZS3jmgKLikzkuc",
  "key26": "3arR85DhW9jP9JXyxmpAoHkE3tHEeUXdPyHCLn4Db9beiBaArz8Ht78xZjhg1cocUxUdTGmpsgGUtsAXFncf2srb",
  "key27": "2D8BVzGvXsH4b72R6wEiqA5orTJqdcWLMPmrTVohPL1sMx9Uy2PN9aZPmFkYrcy552uQtan22DuA1m7GgCZ7npUn",
  "key28": "341VkTCR3AVEdVTHQfbswZymvqNm28GfadT69o8NKYydsiqGYC8QVR7NqZCPaPJhjHTrwq5YHdevHtdiUhZtg8p",
  "key29": "6tqBiiT7qo9NwsuuTHQWTuQbo5jfJuk7MbiCW78G6dnV2FjXKTdD3CNgB9N1NdNLNTUW1K2imUBHc7RTFzzYr4n",
  "key30": "4chXB5efdJoGwGP632sVyajnK7LDqh3s6GvvwTqSJwhymTNuxrbbHfAsJhBX6RMftLSt5yEbTWHxdX5LAAaccRDg",
  "key31": "2NHdBBVjrBR4ben4tU6uatihntYmHVebjhj4m3dW8fcFdvYrLGFjvy34bFKXwPgMpp4dDSdnnetL4D6UxPVd5cu9",
  "key32": "5Cq9h71c19v6SacFKYfsibu7q13zQ9M6CSziZMjCuUCtosVVrYBur5XtC7cx1BB32HN2E4HRvtoAiuW48ZJMHToy",
  "key33": "NtjtnSs5FGASJFMmWYAz6fGch48YJoqKBaUg7y9MQijQyQTWcR9DFz2Xx7HavTe83jXjmtRjesA2KjdxYrc1yp5",
  "key34": "3VYJr1vBYiq5XdsuQgsFBw6sueVeJDYBzZr2LYJR1nG1PCiqHEUdt8eanxT5iHZM6zfEDWx8WBpfUKBKSMhVPk9B",
  "key35": "513PGJ5bS48YDQRkoxU6deEUtUQwnjQYdQjksJk4FhrN4AbntJz55chY2UvYDZgtaS68rV1ipVAqw88HGySX1EvP",
  "key36": "2zaZXuwJmnwmAhKAyEUvHSFUhYwT2VZ5wUidBENeRwSreozrNAHbsnNVNL9jXQUKuabejm3RctMjoM5F4Fu9JenY",
  "key37": "4sRoUsgtFmrw9A9wrUL1DyhELrFUsv1hJYXd3ZhaC2N3jop1hyJHcXv73dzbfWhPBTjQY6Qtv8g96iG3CuS6Ww2p",
  "key38": "5e5anpPZeus16JRJGnrM1mqn55mdAz8fTo6SHCN2sSb3T9PpMNdnmbXjAu58SFNtm7CNjqtomcPhB4eXzM7HYdyS",
  "key39": "cDrgJ222NHV3R7D6xXFs1EaiLAcR8i7m9hd6wtHzam7TpBKVVpvRU5AFffXaxTXj3F2mUmZSRV8nqtKxU1SPDae",
  "key40": "FA2HgvCpKVg3WdzZMCWV5Ud9x9BmkaoqfKqy9PPLiRNfG5QZtGgb9VwiCer3adrL64tFNgDAB8VKLMtNu9eHMfX",
  "key41": "2dpKJqL5ofgc1t5uN2817pWojH7eUBXGJpo4uQQdnRkWvgC9pnBKno3Gwu6gQ7SKNgyGgXVWq9BwaLcr4xfzMMfk",
  "key42": "4f1n9izLPaxQXvojR25gkAYXP3gUSexGpZvMpMwdWeSwGiNgHN2aAf5YbnfHsmb3TeVuwBmKY8HwRTMMCC4d1ap4",
  "key43": "2J1Kfe82QbFWAZvUjxE6xaQkCGsm12PsXrHMMtzXPSLrhunAy65q5jk8qky8R2EniAX61mv315o4WgSN7UDszZtG",
  "key44": "664hjxhvAUZTj6xsJqjvUSnt5JGP4VHUC5FHe7nCLhRuFeEf1epFC3dd7Fr3SrSEvw8mLTLikHApsVQSMjzpV33b",
  "key45": "4qqujVkwHJaB7YJJRVKEJoqaqZBnzAD5ncrU9PRpix1mL5yxCYcWqUvDLiKUKrGiga52hjcDhpedYAkpgyWruEtV",
  "key46": "321SFcTLaq65D11mPRLu4t7CP2dSmoWF26b857vGcWPFcS8q8UipwqeyWGM4priWiQyBouw51BnzQqd9SuMCrYZb"
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
