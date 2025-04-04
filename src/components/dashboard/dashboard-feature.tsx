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
    "22QdfEgdTpaNM7KMaaETDzyZWWV8prEh6BNVLHjVnRjJjGvxYs8CPKWT63BiLBYQrPJjiegUx2w1PhnNVD6oongA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrvuJCLNBms9NqUChiSv9MK5prjxEoyKoWy6md6VJuEtCfDP2WP1wourvbqqYf4cPaVs97QrfTRrhbMUWp115sM",
  "key1": "2Su7DKsDKkr9rKLQPPzd29WxMw4fXWZYKPoW4Jn9HyHQgP1TWVGEEGcU1XDDGPn9az2dyeYb4iUd45PiagmgY2K",
  "key2": "tSTi3eDffgJwT1a5k2AAdMVruxopQrNBdFozg8PMarsErbYTB4n1Du7V4dksyPGovGfnESio2yazRqSWSSS5jt5",
  "key3": "xZWHtvstgLo4bzRJdyHZwu2Du2mspFGdr2phtq4VyqHHBY1RHyVMWR9Ft4Qy8yTPVjV3DfR8wB2KWaVeysAXbtx",
  "key4": "234uMw2TmwqaqBTwVfWhtgsCYEqekEmfY37p97Pia9r5Y97GPmN4UoaGsvvMLr3WtivjMWGkcrw9aey4rwezYB7K",
  "key5": "4THARoeME41TkmeV3iHey5XptLXCgHsVZ7MnGb49veBBBRYszKSxEiuoCCMEzrrJhBYZnvFu3WvFs3j8su9ctNTV",
  "key6": "5d9MQPafeMwz6ctiaw7uwNhvQpGejZ33vscrWLUFUhhZ3V9JoC1H9UrMrjH2gCjyJLbPhxmjvx4uQuycRpwGFpzt",
  "key7": "3U4GxnAjkbTVtGa3dX3dTtEojnd1KR2CiETbcv3gSZaHQcqUUPn27kaPb3Q92fbUQ6whfdnj6JzwZJ6ZUHoWbTL8",
  "key8": "5NGwJd9z273FQ5ZqnyEuEXQ34Xe8fv8QE8ntmFBW79QcuQfc4U64CtmCKdSgHCPMQ4CgpHxhEAaGTaQMQc4sbgLk",
  "key9": "3mMRox86fzNb6nfvmfwCnBZEAadZdWJV1mWVVhcHwD8mvsMbvadKgM5Dde1zsY1Aqh316sKfLRCey43BpkQVNZ1F",
  "key10": "4LVE7vsW4QPNgL5gPuUNT55c2jaWM2oEUNp5HyXZtr5KRN1rsAWkYywq41b7y6ovgSFZTEQM9nLPRhWa8BEyPTf9",
  "key11": "2HGspyWd39DqxLxf5tWKeC7oEJpACT7wwByrdHrzxwkNjboBtymVGvqoWzbkMRhZDYANLEuMGxEqdVhMG88TvqnY",
  "key12": "2WR1rxMuRXkuBq97eMn4QdCKtdhvXvGfMF2XMEfS2f9KxqFPox2VAhRGMYUcyjSsKmf9Y31hq92p2TMUcKZYFYQt",
  "key13": "3kYfme6sA6MHvf9egQLEgiEzmJFUUyRrKRsJzvJgTweUEiUhnhcJB1UcZmedJq3SprWKZnLybm7r1nhebeMrmp4H",
  "key14": "2pk2bvJgmvSocjbY8j22SrwjWQCnCUrCRQFcB6NHHs3T1ZjCxWZ7MvHnLy3rU2QVJZJWZjDuMEG4P8xM7FaCyiz",
  "key15": "4Ydo9JtKgEaUWuKGKQdBesgygPMhY36CYbnJMzZYJLcHAbFJEyxuRW6yWuENjzkUhC3oXN1zBKgWdw5Q1AMwUGHL",
  "key16": "2UUDcC1kB35jTAschaChGvLT2eotNX72hCHhPpxo7by97YaYEn2q8Csas5BrCsXNj9TTJS2zPJGqFTwkZrhGa4Gx",
  "key17": "ZKjv43JieWqzaJXn4eaiTgjdgGvJZaK8EVngMUs6b2m2anvZFJvD78xmRqMeGXRsX9pH6nyMAiKLk8DxNedH8ZD",
  "key18": "2WkV5VX7JVhVi35mNv3kk2C9bNuTTAdPRRtguDNifRiwQ99wapcgvEgpnDzPGwkMgiYQ2dVuQ4MsJkqXmMW5B9Qb",
  "key19": "2t3ePKrYgLqmFFEFrX8VYtkJzuHGKCD2jnf3AoMjripkfHrXW9uDqUvXo5H72aZjoWyXz9QHUrUBsfVGmG1SUhp9",
  "key20": "TiqejwGSPq5uzo4EJnyNDG4LCnajSTRw7r658s11HP7Svma3CpB5ab3BoeKxu6SkYCEtfdsuvNxMtPi7tK2jy1m",
  "key21": "2iSTBfy3vhSNzNmN2rwq1oWRBmji2PAWdUatCUUwnhfDbSfKJZ1vKPR4UbVgFCvJQXYa4qGFx1T9BKTyNjKFKVRq",
  "key22": "ahBVr9Tpebwjm2ToPaF5ntKSLeMHMBFpSGW89R73TqbxjuZpzUmK9G2R2sjYbbggerciJ8z32DoqyNE8HigYG15",
  "key23": "3EecH7ixsvZSsFjpo7NCw1T9PqR1dbRWcUeHHuUJQTDfmHNpRZDNVrAyfjBG8883dbPbJNo9cbhME5QUXU8hHjXP",
  "key24": "22jwWD4Sf4Li3hSb6fyBThsuRYNLZEvcvQVhk7cse3zBoroyqFFfAVJiYwBNjRbk8J9YJFbdze1NEv3L3tQH72YF",
  "key25": "3v9T67vxSpW1kSYUZCvhdBVU4qnnxWSNx1bKGEh7TBkrjX8XXFEuaYuGimZEmsv6ZCdgpH2CXzwn6CB6Hm8vKwhR",
  "key26": "4KqQzMaVbrxEehGnRRUQEuAFY5x3VCT9FJ5H2Xot2GRoW2BhnykXBkuFpidLy3RT2UbrfUkxTSkJqNEz9F26J8vk",
  "key27": "LzPPZCUVjniftxsriZz4QSRNAMMGHiSBAgY8YmUjhuTSA7Bp3Djpm6EHVN32gcTpAt3E8JuvUTaFNVKaMYCVkpP",
  "key28": "5Fegpiv2fxkrUn5Y1qUXmvdvPjt6GtRM8KZgT9Xj3GALdnHh1sZmNrdXDAPwR4SW4KrVcshGm9J8iE2pjwPjv81t",
  "key29": "eBJkRV2FzSHstuckcACpwvTX2b1h1xPCoNmwhpdb6D4Kjy6z7tD1VAaXxt9yitttQtqMs81EHrwJRQhEyg9TvDM",
  "key30": "HF1rJ5uWiyWpKcr3pjisU9X17QGfhVzDHQbNnE1X43MvtaWMyWnibiBuZ6oWSCBwK7s2CViFSGxt3K7YxM5Rcvv",
  "key31": "8CPBaes5UPEPF5LZAAEL8FDeb8czRXGeqBnyCr9XNuuJWB33JgBfpt7zT7i7JqgiGbB1tF6E1MFEvDkmKWm7Dvb",
  "key32": "5WhFzCBLYyDLVBKJnS5tPnJr2TXaANtus4pKyKLT8dEinD7t5PcDTGf9PAGsPzYxP2Mv6bMhFQqx5Psy2k9yRTzy",
  "key33": "87wySth1BgJdxHWuBz7FMdzvpbwgfjQVKWgdYPT9UKk6KryafDCwTXuETVcfEtxYLUU6VwgHDNXrT5r4u71h95t",
  "key34": "2ooYPkmAXJrsQg77kY8j1TwgaQhvy7tVvktkRy7MZiLP8h3J9tyz2iEDN8udsbWZntZ3GrQGZ23oP5mog8nohsnw",
  "key35": "3bAVcxFNfjkJT4wnJwQ4a1cjN1mdefDZv1nh6atx34UxGSz3fRmNJHksrdP2fubVoxHwDJJ8CY8uv7mSppZ4VWfs",
  "key36": "4LgxWW8j4PE4dXWPKyDEi567cBnA38biohKqQ56moBmFJyg3vEPJK764reiLUKv5d7zwCCcnxaYLJeu1w2uuDv4w",
  "key37": "Tkxzh6LAvHXvJ28UzSFNwsBDLGFWoyCunshssDqMWCbQA8TvtL2qEFPqzykXJDXkokDw2sAAw4WTqaJTkBRukia",
  "key38": "3Y63z5arZJQhHd4CQUY75VSmMNKyydNqMNJbqshnXeQJ42MCNnG6w6iuvEsqMruhECSCUHhdGQ2fc6PGQiCnSPdu",
  "key39": "579iF8NrAzss7S1LpRQKBhZnebKgbTBXigugXNGmhy4GvBUtqGraFznHExt94YUeBrCp3onvuNrYnoW3CNBnnyay",
  "key40": "4shonnySt6rbs2QbQZBjKr7Tx6sjHGW1i7DNzyWFZcrRRshLUSPRqJmDmUjFc92M52E1MATReZMq7fEnjAZUD5uK",
  "key41": "3sm6JEAZXKu5TGEjg9mwPauuRuwQjxhpV7SaLGVNH7DCvvdxFDUqb43YebTRPY6tgAbL7psgiJWzbE11NUPezAqa",
  "key42": "53EJHoSEckTH38qrv9HzbfBUEhbpjTZAKp81WzknDNmXZdiK21MCxBKnnMwjxtmfP1Je542nyTcBdZRhFRvCoimD",
  "key43": "4XNWkw6HUpZrEiJQA4pFgyuqDdSgxxxpVpn2p4WQDCG7wTT5BKeXmohMEAXYFzKbt47P7qsZXEj1AjutHRmYG5o",
  "key44": "5FheeQ6E555KFFDrEc3RMkukNFTM8n6L62Qke6uGFdogQogcwE5NkYCS7ouMwpUWmwqKHZ5KPnyFGzKJovc932V2",
  "key45": "2Fz8vusVDh6jQo7vuzhqMyWjSC3KZHaXkhiaUMbCToaiDLX3wYjXmVd2kntzfEyHqvXRfxaP9zVJwCTUUF6oAprJ",
  "key46": "4wb8N5fF57parMFFSuyFmTuWzjVmJqP5AJT7xEzYFvVzqCbLKZc6qNR6jDVfARuNaHbCiXEH46meGcVw6NfMQoMr"
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
