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
    "3WJjCr2LZwkqNuaGYL4PsvgHDsSqRoeWmVLxz54Ev3dYEX4ZvaovZAiewijiH4GMn42HJAddVTb9K8zVynojJj6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4foU8Fjuj4dLo4tXd9jZ7gWKcG2xf2wAepS29f9YZS3ecJVgLn5tE3dPAx78nwtLaAh1FKyhEQBVJyf8Z3GRNjwC",
  "key1": "4iNbiA79L73CTKQCxAHZvZ3zskCJMhRYjTQvJWidWVxYJZTRgxBXetDU1YEDyvjpbS77yUKCaxx812LPkW5caGtC",
  "key2": "3rZMwJp6F7MsRVzbNUUXdZaM7nMvqQeDsNsJ31YiGYzLBRY42DC7fKUYACQL8uPHdpobikV6Us2NTmLgct81LqqK",
  "key3": "53YAtFTe9FBSREhLhrVs9drFUo36AbNNBtF425fnxtJbaygG97J5DV67gtJ7WNvauwiMU6hubai9MSzHzeVtWX57",
  "key4": "3ih26C6W3khoEsCCk8aF5U2z3ftSyVWFqdpYgzn7GTDUtn35UpVuTAEzXDvWuUGobpkiQyCVPWQ5jeAoEmZs1XnR",
  "key5": "2zkJQpTeGK8JWfgr1SRhSEggermssBU5UXEWgPXLA9V3RKk8xqaoCNUTNr9gi85S6SwHmVu8K4Ud9sz25CDoFFjv",
  "key6": "2jbiHM9Htdpbjb2W182oLrTictbQ21aD3iNQAqQ7A95E3HcMEJLfaS1D2iD16HArneYax1db5tRFFHTbgp5ZxXwF",
  "key7": "46KSXkSEwSjMTfgBf21Ski8Ze1zmpbymjqC7CKCXzzU7MCWRm468c5uj6CVKB6VCgdZh3LpgcEVoSJSS4PLocAkT",
  "key8": "49tZkpQRkQhumqLWXzaMdWVJ3Qcqd7XyGEVPSGg7SoN1dtswA3FYZ3h3A4cHtXbxK1dd34xHDTSyB8wky5nTHRCs",
  "key9": "4rcQhz1Anf2i8xsrduqAyDtiTMNsdyMyMZiukrcvTAr6TFcLPEHi8ajmaUxd6tFyUaLU2HYVL51Rb9JAqJoBHm7G",
  "key10": "5JrkZoN7vFCzTJ2QF5a8H47Ad6soHEfR7dDG32hPVbCWCLMCKtrFRn1N54aEawKMbEwtFLBRSPcTEg6RhbGbTUtp",
  "key11": "bdFohTbPXzfvyLPtTyo7Aax3uXTjBszpACEbEWeoGqd9uDAKeWdhsLRcfyJPDUjuprQaTeWPA4eb6RkAHoALyth",
  "key12": "ps9nT7gFvJetZZfcQ4z47MjgguJHAapfreRrCjqefGRe1hGfRUtghJNw8EvzBH8oANYhHcdnfEeT1hCCh6egCk4",
  "key13": "4Xvtx7ZZhZZBZT8GmQJydTDyPwkWBjvodBgRJyWixWNZqCzFnZw28s6Pcuy8soJpfufseT14ECMSem5xVJUSUHN6",
  "key14": "2S4EkSqWcXzGmY9Wwu7bExdgpefoHyUCGCSVA1oVfnsU1LqJ4X8oguYqJjHLjLYq7t8Q4iLHCeJ4REZdcTEU9TkM",
  "key15": "2FfaTWcaAX15bEdzevjLFHFLjkAcNeHHNu8ed56HphHPHxECQmp2vqXmTNiEDX8tS9CPc8PmUEUmn1jKqXYaY1a7",
  "key16": "2a38nXXAQ4X8ZzpDP7SQQ27ySh9KqHXCZdrutGQ3sFEgyoJ6jJLHXaNwGnC71CG5HkAcsRt8X53AseU6W5kaet5S",
  "key17": "25w1JqZ3tFS4Mkx2FwCndWffHPZxoiK9daFP92vofofGhx6PuzMUBT78qfQBy9veKzKgzaUFnbb3AZ69LwmgicoJ",
  "key18": "5i6ujpr9AoUGm1nkP5ZDDdZ3SfHLmWXwVND3FXQqmwjH4vV9wKRJvkmM5Pi3QKSxhbhvjv3RifQA4qxaxG2yxDdD",
  "key19": "5zcrYngzkUSpUiNMr33e6DmUaRZ2HWLCmrcpS2k1oS16WGy5wcxkbhXdzpYDXvdfiZSAtyvpF7xKeAtXYMrPEsVG",
  "key20": "4QeseLLMCaMGfSiWZiThAak662ciapgEtTsaSQZDnXSAXT1htc692eaxEUeEmfWXdfVHRzeTwqJszg4RfPKfBAtz",
  "key21": "2e1aEo1JxxKFu7psF7F7aFFm7ZUiXhkMfiz67xSXBh4UZ7h87B4EuKciQodThZvE1QPpa4uyXYw3PzcbjgwbofQ",
  "key22": "HTfkBzbeC9u5ocetMFwXC8zUQnriWoojewNeQ9hmuD3DbiqehqvEfSGC6kQSPfN4XRfYL1UAH15JJYTM8h52H1g",
  "key23": "368JdYby4eZHDkeqYFoMLNJJHYGHoRTxjewwsZ4X8i1wYySB2qFzxFy5SJ1rASkYcr3oADR9ERDMtNzZvnZB9MBe",
  "key24": "4xT928fTyJzdF58NCo8SYDYuQr7e4diqxhhqdRPX59t8pM1uCMZxi2NKY1GU4T1eub7YaC3bNtMMAhe3GU7sUXyp",
  "key25": "42idbe273Gp31vuStPj6WrHtBg8WY82zUAzSohLq8ga2aNAFmSWrwX3w6npVkd9KxEr6uemvQCH8HsrPQWdEV5SZ",
  "key26": "4LSgXHbwgsTDYGzRMk1gpXCpRyiYZmAtPRP5uZT4KG1T3jTRuDToJPiT1tYFDuKXSiGFcHzuYsgGh6HS6JYDESvL",
  "key27": "mrcqA3BAijwU8oPNF5pAKoccEuXwuGZQyKcGc8DGhjGgNLkNVV2cGk7wofXR8SRT6iqNUzdXMAt6p1ii5GP8cLn",
  "key28": "429epe8gVRNJgseqgBYGCASZYhynniHAKa4i3toyzxZHsZG6WQ4DWjPBFneHr4MwyLEEuvJnA811Y9ard2jydRmo",
  "key29": "2Hk14Yc7G8u7RdGQKG8N7WkhDXnEX5FPSEuYrHpArP19kZNeFKP9d6vLv3suY5R1xMWmcojct9e1EYrtgK65ZQ6c",
  "key30": "28a54ka9Zk8ojoR9zsxG2nb5WAEhH9CNA9X8Wq4honbbXuGHNf5B7Q2tfsXmmx4kJnRGYFZeJJ7uk4Rv9z8C7ee5",
  "key31": "zDboGvNmWFWZ7sFgjXyDVQFi2jUiLGBqMxWiXKJ2nhzVT3PKFVD3VEHWraQKFoghkU2bAVqruf6ok41v2MCdV9w",
  "key32": "4AoKTMfTuRx4jjAcfJ3aDtfsxFauyJBihJvFmp4zrK17Dm6LyEJX2ToPTPUUpMCeiDzGGGvjp1URd7ky4h2Wtsk",
  "key33": "5Bjuzkupsk96jzJZC7CU3JibS2rvq98TUVPoqUyHS5vDmzcugwbt4Mg5HCPCsZhtC46w7zj5CY1w6xeb8bw4mWRq",
  "key34": "5KGGhv46zbDyFXN8J2HWjVpGf5xDN85GUA8aBufcd5GuUmmjgc2h65WYCMYWR3cAqNEcfa9M5ogDYB1VSSdN8xhX",
  "key35": "2AZTohhVdyb4maNzVM1k7rKtLDJEv5dcMvbDTw2bu8DfEQq4z9PLSJbYqxbMowBjGR1FGww5DVJt2QJrjQLzUxbW"
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
