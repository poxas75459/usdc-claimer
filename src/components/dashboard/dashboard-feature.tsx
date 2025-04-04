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
    "4qrmPYJAN2MmYXF81QPZkA4ueSfQWKYtF8RRTLQGbAYyMBP6CAuRQmRzaMmYk1okFzRC4g8yLAghQyNqgd9cBX5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVFiZ1CSgA2RJKd6VyGgZParuwjS1ERBH9FYjswNQTuGk1CcE6CyKyTKaat93GKvJKswa6JrjDt3jWnu53KmS1w",
  "key1": "5iA6qF4VRLzLzbjZXQP5qPNgKC9XwjDEhm3ZrP7dmUrZvctPGMPF5atFubQ77ChriBSzmXSREA7R8oxUnohoSZRb",
  "key2": "4mrMGhzc3SViccDwuyUtWWPYMoenvow3XFhgDhywG9KcGWeA2HXqFc4Z1Lmk8wh8T2sgx7PgCHCpBZLJmc4QuVuu",
  "key3": "qZKbkVgWMtCzSHaY5t4nB2BftjhKCQi49ZU6z5ZkeB8UVLCyLDi6nwFx64zSqsjNWFcpbgpQ5eX5PHAyodZVGkf",
  "key4": "3WoGTYpXYXREgf3YaEw1vPD5vdQnuLS7Ecu2eK7FkxTBLyvY6DN4pCCnY9xsE1fb6c4gnGwGGFzCuM52Wo3DN5gE",
  "key5": "4N63pjpyG6o3QrStLtXhzL57T7K1VJ1Lua5oavEYBYW2aXD3N4FJCoiBZpFRa2iJtqWEmcLAQddcUdHTQjwaLvo4",
  "key6": "5gfQaqHGWkDoAG43oaCwRN78HHfkAUWwagCejciwbJg2LnMQcKC5y7x2mgvsp2ehZ8vuZ18BLmhHsZMRYk57EtrU",
  "key7": "4ZJ33dHy9bBXYZBdp85GwoMPwmtPFcAroUDvC5bZw91BhRco7mRA6b3jckSHXtr7T1kiFNjmzU2Bs39tAQkug3oU",
  "key8": "5Xox4NHkMvmXSa99bEQo7bNKtUHQy8HwaYTh3Fo1Lo7fW4e4jcVyYa5LcNvz1PQez2kDoEByDBEfE5p3q11q49up",
  "key9": "4Yus6vjMTfm7FviHvq8zEojyzbgaC5tiR5MxqQiTm2ZFhEa97AkBGtCvL7PhUkQ48Cjca5hDzR7FcM9uxp3EShsf",
  "key10": "aMrpAtXy2dqcU6zVKbdTW2RKF3df7TtE92nrMKr9qRoAdWEKzWxvLzCRYKHSw8L8D1PrMAUQnUZPB7vrqA53s9z",
  "key11": "5WYFCAmxpY1UvSg1uQCsQ9JnUrRrHHwdnTksXCNS7At5RoiT9CVoLovyiFiWpKz47aGEfZRXuyyc5Yz5ftpiDuME",
  "key12": "2tDqHd9ksxokmtiTWBh68MuyPYZ1YLH99s8sYFHjc3xn8dDWvo5UixcpaQqnvv7yo8YwgwW9pLu5W3PANTYNJhff",
  "key13": "5mjGqPpnJSRRqiA96eEJmooaUJXj9xTqToTgzeDfBbavke7tvfzTkiHt2VLfRh9hkE76nWYM2DgfEBQC5GJH8kMs",
  "key14": "3ECyKhpU32EdWAsYdz4g2MCfguvScMwtp2mv5TyN4fQy883H8UMQF33Ku3tfMPYLB4SjiUu21SG2WB2U4YJY3B4g",
  "key15": "2jXw4Q2Qh7kV3c3dCFWFT6ArK3oPQceh7xEhcNYCP2tepFT2uQkzQtwTgEUKgFkHgjCmFFivPZ9X3CpvyiNvmguc",
  "key16": "tC49vFwezhjQVdnq55BoV9F5Re6BKjRqLfdoHTGxdzn3eq7B5qwwwg6rURMonHu9RihawdQiCrL4nGTazgXjYGR",
  "key17": "5bFDD9eUTzLtuDgGa5njrXMQavwxNxXcxNQHF6YX46u12U9SfNcL7Z8NF84fapB4ZaYufSJBj2S9qzffy379A7uU",
  "key18": "2hXWpGoC8j9p4HFMkVoWZjWM9ajNoFPVKhCwL7mMqEEL3vG5eCnqZc5hpG8eDmsr5awR9LscwV8TVRuVsaiiLifZ",
  "key19": "3RcSEVQeUrBVgnbWPfKmf6Ezkci1aapPHjhQeUBpYMikkymZYbZktbHgLdMS1STcaFsHRyPcggdfEE6BxGk1cMSf",
  "key20": "2bpixF5EMrxLBRU6VsVHukFY9brhLsXzSixY5f21r5TcxwtUHTodQXVVXBpEAS9zNhmj8r4wZwT79Xdih6bcLP2g",
  "key21": "38EQ35khhnFhJK6HMQ1kZe3ssE2BUQHVczeernDt8STq4NZqSsArX41Upy3vABTYytHWuLGDpYrANTvgx6fydsTq",
  "key22": "5d3kEVkXZGWSL1ucX2RsvgbcL2EdCx1fC3WE8L5ianqt6zKfLspvbuhNv8DfFytpLQwxACQDkGARRJx7VgM425Kh",
  "key23": "5aroheLmTnd8NCSc3LQMQPzHhf9RJRhBFP4gDFVjJXp8po3WCAHcMvbZnN665LLNFRtwmJv8WC7Zq25Hccqx8yGn",
  "key24": "5DYqfkF5ECeVGb45JxvAZaHZQHvDS5J3HJypWswehoEhfvVcZnjzTL36LhK5ZpQYGzrTHys7daGEezNiMr3XVPwM",
  "key25": "nCxfphcZPHyRHCBtfuVd4Tjtn96YupjWxoj27tRzUxwk8JmTmznNsYBxmGLE1JJBmySukNwodRu6TZ93WCtc77x",
  "key26": "66QssGDFsaqPcPg1XpcUqkMTtXJAzwLpqmxWFEUTP8bgd8ZTarZs8nzcUk23oYPqvJBgLgXs1Yvnhtr7RraLHWJT",
  "key27": "4t71N7rmmqDUH8nzE74sJCFDmh3PptpYL4DrZ2KeFFYR9YnHJYziGgiZiU5vAUmucX5dBLFkNoUAQ77ziBR6WCbM",
  "key28": "59XGyJUidnvuduScBLAP4VGJirnKHXL1PS8JQQqbA5FrNn2AYHWswr731rCXS6AvaHiWa5YUF6WefWZ4ume45p78",
  "key29": "WPdmSV7QdCqJqhNentvxzob9Q5Dmtmrmhn7HQKdMdU3p2EfGWmxuHQsuixTqEtNt7VHBkdMQYnFUnAjS9iFrGvS",
  "key30": "2UieTvitXEqXBnzjd3is6n5mkrbBbBkD2GFrXF4gqwfNZbAbnBAyad3yS2sxLrxUgoZBnh4WriUB2KiXJwvTZsig",
  "key31": "4S9T7TV1xDWU6HrroFWbT2fxpSXBjWgLFXvYMX8uYFx7cWtLP4twKoJyPmusyDaRKhyNmK5uHhJNNBFMSVeVMNy7",
  "key32": "55gW1SJNwd5mknpbY1CGj9qZHymVTGQfxnSQFwQPB5rfyQSV27RGo7gwSjVpaBTKbpAtQACkrrzb7R4r81gQdmpz",
  "key33": "5pVes17L4oNg9Fo5VNieNjsz9Rywyh2DtFky8dYjK6mnVuT98iG2SoLYRxiWRYhwf7oqqpgsrHZ7wMCiNUhxoG1y",
  "key34": "2wJyDnWbXPem1MYTHzW1NYixWtQFkFxu5x5Fh2QRjnRgctzLfrXAA5CXvGeX7xT69ZwZgdMdyxRhPTNSRwJnXzgP",
  "key35": "4ceNe1jjrR9biuXfceXVj7SSW8RuJBZhr5AD3cQgoinEHDVzFuoGGAB9KJGsq3v3J5EmMzgxVnxNa8gWVhF9EpGF",
  "key36": "GV6MJo1kP9vfios9b422kN6MSBk9sL2RuShbq56ZCpdtNeDN2q1AFAe44zcse6WfUtqSuGs79YMxaDi3zXi2GPo",
  "key37": "5cZJ8d37PdED7FUZdwh4bwGxFzW9DjrHNsNGsu54ZgoL4i4dXCmon5T5ognxXtBJ9iapito9i8k2GCUjWx88haXD",
  "key38": "2vJ4L5yP7tNknT74qEpSBWnrLw3eYbmbcGo5rr69hqZ7JMpYmQJycVrKfzPLAzaJvnxJupE43RQb7x9Kfa1XQgmz",
  "key39": "5Hb9Sn6u9XV31vQijErvQUsSe8VDuZ5fXWf7PZH5BHftdoAirhVSkY72DmX7eRMxAwBeayZ5iSLrrsi6SBhgRMVx",
  "key40": "4nk6FqmiAFSZjQYAb2C2BNb5CqtGKsCUu4mXyXtvT2FdBZVUX7Z3nyMqVQNVu7yaMtmd9phPLggiLEXcXvFZGPqR",
  "key41": "3QK5vudvvihNrbQD8z6u7B8QnNpoXJDNVzRrgDYsxyWiQwVVJSk5bFsJYXQkp2o2V1bBuqCzpMT93kYDDnFTDHs3",
  "key42": "42ESMD5bgDtZAGn4VdSxUJjtKnaFggbERwhQE445v19pMJs9BHzbTMyghUTDcbs1CZXsmUbk1PqpKbS6EjGXxhiV",
  "key43": "7e7vq2zCBQtDVCKN4SktcesVeZTpTKaRxwmyGM6SfqMbi2Xg2ATpziUxjKWWsMoMg2gkNEM8aQG8D4g6YeC18US",
  "key44": "3uG472NPCZiY5i78HMorMN4ZaYoj1XP22XSzGU6msssAix1N6iBarx41Kr18mdMVKuDpJYMc17CdrfgdZnskmEPH",
  "key45": "4ZgGfZaQ4dmZqzeFALkDU77humQ8LdWw99dE93MeHwnHxBUNzCBEEmoUhXeG5BajJkMLoacJCLAQHdooRuUzNKBb",
  "key46": "6tbrvBUSpXSZoycF1sdziPkGe6C4oVSLHmZjZR3xgHbhXZH1DhBRxUeeLGm6SrrTromQ61WcP1yoQAjydebx8TB",
  "key47": "21MXpXDv8mHf3dbh2LBwQoYWgnVGMjBQ17ci86k28drBGRVRLFNYLeeKHf5m6Emd3uWPeD4wj5aQSkXz6227ofik",
  "key48": "3DYDTfhB25JFkuWGutKUognNjRgcMvRZs2pueyAfqwXPvT2pFYWTPqx7Ad9LwXRLGUyumqyQnBdW124quY7bekLi",
  "key49": "uMjCu3CtG3zHpVfZKoyfvroqWhPB25EgwLWBNTCQbZRPzbzgZVXFiMkMoRDkLbbG9S76RY9MFMTjLmgRNBQTZQv"
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
