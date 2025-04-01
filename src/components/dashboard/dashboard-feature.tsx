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
    "S31aZ937L4KsE4qZCr6hQ6ae5eYc5hv4Z7EsQKw36qmYVgFjuM5htabsdFptUxFjw4CmqMXDbU8nehxjjD2R8Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ErJo2rXSruZgxVsVgapJD25pU3yKxgTTKpkH4PNr55dtd7r8eausCxwRyLbLkeHLMnPiiM23bGYTwdG1djg7rQe",
  "key1": "3MVqKh9Ytth8G1AbVrHCXdBWtLKCdrkQcptsQEyK4zN9FSMFtoZcqTtZNdnQ58qiWqWiEUBmCGKw1HmCi1M126hz",
  "key2": "4bRzF4DMKBJPH36SXsKWF9d48zCePLp5H8J1gQVGSmdUT5w61du9ZwzcdLPYJvEp4i61DXMZbriAMzmdCQwNbQbv",
  "key3": "3CRCkaKxqez6z6XeSZEQ2jgywCmY8UtYXfvskxUj7H3Pptwpa7B64ZtSYKfPjcn9tA7hFufhAeznHeFbyfMWnUZc",
  "key4": "4Aosn5F9tMRjpZbqpXDdFrtcvDYMeey6vP83Z3xNGeCpdxhRjjhhAy4nLfVEZzDkW2bkUxWdtJYgkmdoRzHaTqB8",
  "key5": "gPff9bmyBDneqLW5reYx6TtTsxuayF9c1kx98wFGTsTCY4SfMGhGeekULX77hdmsPrhRQ9a2958fEbS3A8NfM36",
  "key6": "4gkKqeEjqJC9ck6kDP9sBqobwGwsWWws3CQGJEA3ECJHZ9UUc5d9w2ELiDz4wrrsR8UEvrX93SUESwuCcpz9tQPi",
  "key7": "3TqsBhaJqE8dRM6LrBPiKpkXgvYVVaLDCBRbmM9ZD2vTzdLao5ekFJo8wTQxboJhAATkbQc53boRQt4ToAV2uhYx",
  "key8": "5P9mZay2yvX8LKD8Rqng4hxTUTvYEtd1p3C9wixdz8jCvE16m8rUdjsCCVVckRr3HNe87v6fQHUt1Bbk86ngqyem",
  "key9": "5WnyrLn2fM2SnuyDb5uKqsMfgXqJsKzDogce76cre65amDMAKfhfFj59pmNuvjMeD7pfbmsBkVWewGygLgXJGCyQ",
  "key10": "5822qsNBcsvU9jSCoh1t8VhRdCXDAAQyouo1tUi8ZV3EswVhHHN72j3nuiNKmS3fSoikRJhH4sbWFuo1q8AXsVzG",
  "key11": "QcGGFKfyb1ZpFk9LjxydCU63xeNx8XDnhmrVDV2QZXGLLkUZ1F7cCtaHgtCSin6nQvHjhBtpu5kD5R49fKcZHob",
  "key12": "2QfgTrCnxrhfpUSExggKHDfTeebxLFaEEbm8Ba5Hdnvdb3n5dvYYaThNPv1hQqYN2oL9wnwjTMrKSGnKbv1xnVvK",
  "key13": "J2NRk5becmW9ZEZShzW8Vx4dPGjt1SSSPALGg9fq9HMuXzE79C7uMF46aMd1ubSpi1EZJ3NRgq5AajH6HPtpG4B",
  "key14": "4jmNXTAPj8GhQQGh8pgunS2r1P3o8reSBGSWAG37XA8vRRXrhF8kUNcu3xsVgHeQM1mt5AjQGp9NQTM7cYPu17Qa",
  "key15": "33WsbADQq14PL5qbXEsu5BBN2MMQBH9cFb7aLNK76P7Doa27PbDLs7vSxLM8b6H8zSugEz1AnGFhkeBSd2Lqg39t",
  "key16": "3UBugoLnVompa3gfpXN6xeqJAjfEt1Z41zMhghKrT6LrSCkeVy5jkgVCaVnpWAjzpwDV1nndEpSQLib4VmULuUqE",
  "key17": "5RsC6f1Xb9B9dFriZPz8x9GrJG9kmFc6DkFPpogZxLTFSWzSy7vwiuLNWb3wuuZLCSo7bUjrjeLgt6gRDQnRh7y4",
  "key18": "4am1Jx8gyPNdFB5J12BYRpmfAZjc7m5MHkE3WkvxznUcKnQyvZqya8Nq5Gd4bgzYyipyiHpp5t9Y5kRQjhKuEGH",
  "key19": "9NnRyD7KuJudrtGswT9pqq1YMigXWXEbq3zTUVrpDRfsWVU3k2N3Nxn7ivDrq7EVL5KH8ZBNmSzvfY1vo9jvpy1",
  "key20": "3VnihoozfAnbn9XTYkw46YvT6HEBZfkXqSD88ufdWfYoSkBKk81BnqKSLyaDkm3SvMhkYdWnAMfbqcU3N45nKgTb",
  "key21": "39UmfCfH9jEKEYfA3U354XVooP1Bwk342HC9b7CUjWyvp8rFeWEcvtcYgTt5VNp1W2RhvenNuCmVUYTNr5Pm8WKD",
  "key22": "35ctWbZYGsPkZZNeVshHndE1jduhYWp29bDss5uk33RNfhQdyxKMyG1zAU54BLnAKvnxpEGdpxpRq53FUmxQjYhH",
  "key23": "2pDgqSBZDzjSwmA4LMGMJyjn8DL65bRh2GRhUFDCTXmZQjWrfFJsapncHGKTQaNGj343JGG9NaEsmwXz3ZEchZFU",
  "key24": "18G8YoP1Kxt2PkgBTjjJ1FcnZB61RuCWwXiXvhtXcud9s5J6Am5HmZtTdM4SxQ1nFCF9m7pAWbAWeGt87YwoceG",
  "key25": "3nrXyyJeZcsXkjbxXusatgHeZrzH7qWDzRX19s6rABwXUYNqHiCez5retR21zhQs828A139yrbwWzVzeDttt76Kp",
  "key26": "42JXv6ENms4qz124iJMh2anGAAi8metped1Nrz7HHjc24PZVdviYfGy1okFF5JoiyKSYwn3Lt4WgtSa9LjvaCTcj",
  "key27": "2rGSy6gSCxnmK8dXHWfwZrDXQXYKEQR8fdXeuW5qvnywsTSUSKDmF1pRoopZsXX6PMpruMnnXnT5scDR1xJcAdfv",
  "key28": "3BF1wmpDzWaiYe23Tni7aWBSUDrywdbhhcsHgkNg5ppP1JkE23YfttCfkQcM5eSvU1wmYwarG83NWwo7iL5jZBV6",
  "key29": "4kPB7oAaCeNBCqgRDpSyyE72QwkUbtEnNNZ5z4M117kK1fmiNXStGByQZNUy4jtvaMv9Jqn7az8T6HnuLhxnhvNX",
  "key30": "56jBABs5XKvQEPxyfLSfJ93WakghHuubj2Z6p4y1A9JDHNTFCiKdoCvgJnPVSvZf3kwdoJPKA3A1XpD7QoFdgAWX",
  "key31": "2jrwRnCLwVSZJXPmmKi5fpSb2U5GBzoVD21goBZjAYpGK2DD4q3fVCZTfKHVfg8taygxXnj3yhZfXuepFnPKoku",
  "key32": "66cH3CcSHuG5Wm6QvHxWrWfuKCXT1MXXw35miBTkM3HZorV7odQEHiFf3wKkriiMKZbTXhe1PjNwJKKYwA2AYRBH",
  "key33": "3coDZJjWgThbCEgyVN6FrHpX3JnXA3GPjrhuDyvXRZHfcvMNqULX89SeDAapvRQA8YsgGiA3nfFpnsUHAGC5KWaf",
  "key34": "5nWArnC3YPHnj1DsBtnekB2kptAgY4hqwNcg7xWq3X63Q8yz8rUX2Sr3PQ58hRavxseXb5d8JaHb3ADicpijxXXS",
  "key35": "3MnYaz8Y5DRVNJL9U1E7x7soKugcaZQahjJKGneDdLUvePEmtoRMdr3jQV9KCmxPui2996aNcDZRzrqZJWSpzkXm",
  "key36": "2RvNdENEiB9cwat2TbQbWTdg4qJaYNyb8MSvhrzmPVwEgL3CYNppn2282ohDxT8K3s9cQ9WxXW8JE5NJnb2Uspmm",
  "key37": "5JxF5L5LMYxXtUuuvS4DMZAeujGwQBBqdwc4iSiyCaRoQbao3uYjipQnciF1G63tenCiBqU2bNCVpqhFtAk8hhzN",
  "key38": "3yAHQ7jLjd37Z1HFgaBWSMQ3ZuLey9SrH3dFmWp8hNZghPrShRTaPpkaNBgNGJNPWw5NwHMFBwpuFUPYVypgyZMm",
  "key39": "4Ddq6K3eZMKTqArHmnQH3KRssQ6ApuWXesvxaWVLvHv2FZSA71Y9UR2CCBSCBt4R92VPd1BvtgABTAwvxfaRDLaB",
  "key40": "5kW5Z8i4RZXww6eEjhVfXhUvGs3Kkr1XZ4ZsbGyiuVzAERXb6oR3wMMMzXZCci9F8d4m9uUwgzzA1Jhp53tCexFw",
  "key41": "43hZ9MaRAQw7Ykkea4T7fcQsKBgvFrscGX2zZUJoT5h8DNgbVDArBor8cnQCpteT9LVsoNY53xY5uhD4aiEUBeRD"
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
