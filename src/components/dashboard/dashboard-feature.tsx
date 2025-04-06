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
    "33EKCM5LVwdYNPkizTPSCWGehX2tpGTbXqGyZAva6ZjpAjYgzRDZ92dKxRtgNyAqvi1hnpQCa7UA24wUSFiWc5sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4NjWskFuCv7nZPtkDTANYRwgjjg4piruBZGSZ1b6zfAgLkjRFaWqA6LhQjaZHb7Kgjvr1cU9CpAs4kudSNwstP",
  "key1": "55zuWhHPB8yFeMCRMtjGXRQZByrmdSgFbLEWmgFjT9L8xGkLympsNwpQWVLMFaujRNCm8KHjEy3y4aWBeGK8EqG9",
  "key2": "2J9kb4Qp1ZJSnoKQTWwGcq6LkLa3ZnekmrdeYowqd8RTZr8PMiq5LqxWPLm7TiqCCUKPWR3NfiB96B3i3qAwAB2r",
  "key3": "rk73FJM4ztd5rNdvn61mT39t8PeMtiWsRVjsyn5q3M39i1hd6H671kfXmnS5oQoZhf8h46uFP6ZySjXp6DAB6eg",
  "key4": "2AKz9PVBugV7aKGRQNPNDhuzTdZgh6UQjkuBuBBEL5fy2Kb9iBQMZbBAe3qtcbNsi1ZrCHaUCYpe8yftHKyLn9UV",
  "key5": "5KhwEcKaRyyrC1BtAoHHg19V4jrP2nunZ1hreetPFc47DwuvYgqf9kZAyBYmF2aLU6nMiy3QmiNfRtDsKBEYNmCK",
  "key6": "hDeQvGAdEz8LDXJDag1WfMcFn78XwSNDZc9TcqStxeqpU9LSGcLKrUznz2nX45QNMpSt6mYgWoRF4brQLvAmHER",
  "key7": "oDhks4umA4dFi88bePKp8H6ZQBYvMG5S9ssBQ9VjvKXyRm8vf7gWkopwFJqFarQqQNtSqPh1ZBEkLe733pfVn7V",
  "key8": "4oNa6q9wZ1WJUH1nEzYFYmv87BZFd3PweAr1oworWq9XQKDdQKv4XD6GYqbMoYTYKYy7xcwJAVSm9nwnusAK5tG9",
  "key9": "3f78XYZQ4wLhhiAnMjB6Eo1JY3oEzmVe37ayNfZhEWg4bKbX9hkm55X6zpXzqTxUniUKG7QPZ2Xr6NQpFcvDiaBW",
  "key10": "3zWkEN4qeS7jXxKudz46ByhXamdDSzZ3QD7juUtVStAbDmqdTNccsDrLRqRKr8EzPkyB1zvCDQSN4FWRF3q2B4Ae",
  "key11": "JgatvhdPFPF7Fbhdn6cRcAgPoDWsJ8BqM8fDcu95nqF9mTXnu9B7s71x5eFwEekWh9Rw4Wy5AqvFC34cweXBbtG",
  "key12": "2hLuAkjN2268zwepX5EWBjc2PewHyNcUpromM1A1MHXsFpJVQ2M1sAVcPy7a6xCX5gxzePwSDiKp96F3vDAHUenH",
  "key13": "28JVqDhQFXf9Bxbasf1FkPVXjCaBt4UgyZHVQ2xoX9g6LLDicPoovdG26nqgtaNCFneX4GCMhMGoPkC3ehhExEP3",
  "key14": "2sfGvqz73BcG5THdbKqwM2mHk7N7TCgxBLk8EXfs2sDkazyyRxLaUqfCyiDETfzTc4Bet1usUfwuVDeubAwXqYJC",
  "key15": "3ptTiAwNWfRWS5Da2MosQrYiX3m7v8k56NtoY6ggT4WZCLFnig6VCSUiwvpUHui1oN4JSYdzP4T7ozrx3ppYs2Gb",
  "key16": "4vzVfRgjYemNnVbdEcnj3JnC3wWktbYpLofouMpySLq8sfj3nkmMqf7W3JJNSdNj18rVXVBQrQC4wAXHoMusfXXf",
  "key17": "4tBHtyVdcA6PBWJyGZvEkBKgYYYEt7XXiYGaA9GC7TtKeb93NkYNCdHjvXFPPqjKAsQYCDRk86LkuKxgxtsasNSe",
  "key18": "2EPdudeUaqnncb91v7hkbNfjGQvB2216fzPU86toYUjRzBsAC3L2EytiyxGGVSpoPX4hn9ED2xGf3yzgoRL7EFWP",
  "key19": "5dPr8S6GwBXrHKDnzL4WzpruLpJmQEac6SX6A95xHfhF9BPu7oCW9mQcHeX6FUme2ixwh25gfLz18qgy18p9eWaL",
  "key20": "iVmFU6iBgyYz91KGPwxJMw3QEHYjgMD5UjQsaDeCBXUyiKtoc5B7JDT8H6kuPwqBG8YyK25rmyLGzTcSSv8RXki",
  "key21": "3V1B7JKLFfTpuhP12vrdEYNZj5GTSixXjQVgJ1vEGLmkQV5eaYQcGuYfQEySmwxzH8FNGXznnyF9jWGERPKzeg5d",
  "key22": "5n7NXZkBaesJKqGsNrsAF5q9UeqMWPAGwDW2VGFmvGNdKiabwJv7KrXA5usXG7TaWGHW8FiCvQuTUQgzu65e7oKf",
  "key23": "2qVXdWS7gpHmSBvDFdxGnRaLCmqC6zxfgsmPpkcrPXuJPHa7PcMVQXoiVH5ME22FCdo1f2wC5xAHfUWXimcUf9Gj",
  "key24": "2kn9gYx5fJ5nxGcQayitYQ8Q5utW5fvBghVV8AJLKL3sgfPf9EPbwpnQox5TBAYZrUsi7nQP49fPraJrZpte54jw",
  "key25": "JuaQzdHBsnJJzQqXC6PRLbVPLszMSVKTZ7LaWsjSVre3mV8sGwAaeLo8QLhjoQzMeQbN2Z5S9mnhgBAH6A4xAAu",
  "key26": "4vkR5FEWZCaqj1pgh7H6iwr4LSSeHwGYRL2jHkFHWvNu6f8QDANH8vt4L5zPd5DrPXS348b9YcjjaenLPFa2CDUe",
  "key27": "96e9MHFaD1pRikYUvmTRE2US1EE8yhefLT4wKqZVP34f5GEfVKTX5qR5cL2u8Nxi8TVehWd6C6vf1kYXtrqopAk",
  "key28": "5Fdt6Erk7mkXXWf5pwhDHSM4dQtUJK3ndjZ83HkVorTMHN2zY3X4wCt6g7nCat6QBfqzL1y9JojoWa6N6EQPBCDY",
  "key29": "bGe4WufxXkRaNzTkcrdZpvdPe15RjasZm5oj2gkdW9iKGRdyz9sxMqUYxJ1GgNeYftRHe8p9Zn2vL4Dr1xmA9Vm",
  "key30": "2b3ijyPy9BGfLTe4CLHAtSfm3FsQ1eT7386WeTyconQWdnVedCKeKtr87Ki4H2RgvNB7jSVFmBk81rB5TSNoAPnk",
  "key31": "5srAtSWAtREzV8FU8bmM63kz1wcCYz7Hec1h4GGbnmg9Sbtyks9DvANcuBKMtKuRva34axdKexiUDvKMFdr7oze2"
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
