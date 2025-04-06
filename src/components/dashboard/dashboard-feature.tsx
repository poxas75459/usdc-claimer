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
    "5fVahbJ9vQegBaxt1mHygWdgAJt6YTrceLUyMSksLNbDfmBANitSekyHKKFfjQKwuUuXPcoDaSANZTN8Hbz5RZfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298DqgFMPssaNaXeppoekejcbWe7yVE1AZkuujiP4knGKd51uyJxYtkyEejEfNvzVB23CBSeaqJ36GjQrQRNfdNs",
  "key1": "hCVNN6tko6zGR43fJZ9CGigPZnwKArt9Zvq1cehecxtHQBqU7p5DKbsvceDxeah4BJv8WnngMs9iy9RqqF7B8Bc",
  "key2": "2QsDrCa6oqpA1Vp9NtFzqPpBht1BrVeaSxhD7opBm6oKi6EWECWhmRdisKo5tzMfBqkwDsKVyg4bW6jsk4MBomUb",
  "key3": "4vvcJ4KSeE7JKaSyyquATmLGJxfsyrNGKLiF3h4xoK8dyaxkfrxhxEQm38kC2quuPWAHtKnYDKDH7Mha8ucuzZ6a",
  "key4": "4DbGV6tUGR74R4QgdHuRsTQZTrmteLjp3UcQ28Dytjufd6mEkiDb7hX4kDDwhc4k3XQ6x1dN6MeQiJYbk7mkjU8w",
  "key5": "3VNBJz9ectVepuXhL85VtV75AuMECL17jVukn8jj1yUJHVkC655tDLVRbyg68Bx1gKRmWeKHPQsrR5ZDAV1gQvnc",
  "key6": "fxq9b5BjP6kZx8hKkS4ShsHLufmFUNoR9J8zDYaqqEsL74pS3yrukp6APxTojMtEFYh77CA8HuzChdsFRvf1t7J",
  "key7": "2V7CXb53MqvRkGTr75q8jVn8kSp91Sm2c6WCBUtia4tn3Hswcx3soaam6wcCzrH4KkK4WX1xvC9aRYmPSsisPmZB",
  "key8": "2Bzu4ogNBHQuzCFwSiu2GK699m345XFt9Z4AenzkgLH4tptTu73iciJFmr8pyt1i4dQD9d3oypCSCByizLQdc1N",
  "key9": "2gx5q8V6YiXsSRXESLkS4GFpKBFnGRvktzr3EhQvUisddZ1XHLweTMYeeJhKqSAcccRJXJ3sGodScT3raqZ3DQmZ",
  "key10": "4EMcfeeF16j4wbypuntz6DwR19xQ1kWT6snVyEX34PhX2JMJAsq7UMHy2XgyVqKq3qJ2FBobk6TF52fHCgaqUu41",
  "key11": "2w1AiEuKemMa1ULAaNKnkZ4ahG1orEyL8SZFS3Bdao4uaZp8N9W7rmkncxj63wit7yjxxtYLMw6GPuLgnJ2RTQjY",
  "key12": "4dkcGK4gzuoP9EYeZpCuQ7Ya89FGCMRB2pnuYqz6UUAvic2qzjXsABkEKspretdELXovZc8kaq9SbucoJkMEU9i5",
  "key13": "4iTUMpiKka7GKUm7QQuQn2W8KAAUAzRHG5rcH2T4juXoSUkH61oe6ozL6JJ39fVWgiMuiVvTwevXgWvenq81zLD6",
  "key14": "2mP38hYAQt1Tww43xReNaU3AvQAPFBipP4sPapid3h2FQhLXgPbcvUyjsPQ2YVjza2AGWEC6rrLsjpvcNXvRscmf",
  "key15": "TJyCFCPGXDGX6F4Dtf7W3D7pYmv4YSRfKXJbRJkkBdVoQQ3uuaR4TdgS9zbjKGztGTZRQUMaNcPRkpukyveZ2uE",
  "key16": "2LrsTMQ5iHb4mnkSKvLi7UryCTbGGXyhSC9F1mczT33nRdLbLgkqxPDFyjTn5yMTvhbGvZEaHTwrECLoWnbnCsQ7",
  "key17": "2NQ36YmsrbgEP3Qb5jr4hojfV1eSBrVq3Wms833MMJcEicdzhQhasstPQpdrR2dJtV8eMdB6pgx3Zh1Kyq4oYVaW",
  "key18": "ufA81zoSVEsbQbpNR8HYmPt9vSZSHymPSxUGGnU3zHcVoFqcsy8gbert4ALfhVGjyVGgQZmudwiRHUytY1NxGu4",
  "key19": "4anFj88QumrEkLukRt7CesBnxpdcxsgRmdGEAtxvGAXv27ucLRihdEGNQmzBaPdFk2FU6UbzPUpAadr8F9w7n8UD",
  "key20": "pWJXMzuHyZrdqtKUWagjv5rj2S9WFCWWj4C6RrVs6xhrh6moVqNsG3jBHG55SiM9ysZkWk343PbG6kzx4GceUjc",
  "key21": "4Dm6RvL7cSnsmuHPzq6adMRoJMTZ6CPBzcfNdkEcx6ShL28QTs9zmmpZAf516ZSewCdHPd6ASQXFEDVz5x8yCEU8",
  "key22": "5S4TNYaUKmnv2BuT3YvvFcCg3m3Rs6BMAcFL1tETMpwYfNqbdJFc76dk1ZpbFwKj7ivpsJ25taVCEzA1fHxajn1Q",
  "key23": "5zjKeoHPX9nzZEecWWERDo5s4fzEjQMSJpn9TWdY25fa29bKuHVm32rH18KdG5cPigSLKjExxxx7E5hPq7pvLb8r",
  "key24": "55uF9V7Sh3odZgy6J1xZUNykwh5z2Q9pgN6vfVeqNnjjq9HyHARxytac7QrwTmMLZ8qKjMnPYhg5Y1YCGxnaaoN6",
  "key25": "3GZki8P9husGhtvupThs8xd6iZxFPjk2LNmFe4VQhY5rW7GEEBvLLf2C6aKDp4tWFvMaqwEx6dRSWocHMUCMUtgp",
  "key26": "5teYvg692cYJvrLQntoVkcvhthc9FDx73FwyitzjD5hzX6sh4QRmyWobBqURzKZwgCojbYGZ87mZA4Ap8C8zurf9",
  "key27": "5NmdamKixcPDYT1XVg1j75eq9Rhk6d9CPKVFpV6zStU9mRSigjj5KuSW9cVj3RpPWtuTuE7z9TGXhqt9Zk9sYnam",
  "key28": "4PDhRQLVPZnwCG24VbtY5D4JkPB3eDsb46Exuh57pDQLymqRc2kfM29TzpCY6h9omVQ4qjqmmr7Ni3edKDE7ggpL",
  "key29": "2Dz8B7XXAptiSJbcDFmPB3cwpJkUQaSUpHZJcSwnYTZMk6kXQRjYcbsjdB7Lot6CP9VuRdA6EtVHeLk8Y41frkJm",
  "key30": "NmHPte5K51AavdD3yk7JzDdgNbsLoPcGjfSZjia433VYusts5sMpjKMM4iuvQPwwFTSJf64H7gVqqsAbNfKAHYH",
  "key31": "2Vq4YnmtfdRDbj9P2AimskXDeYWRhdhjmYiYkcZ68J8VjMemDbYgHd4ZSPtBRTnFr4B1xxCExweZSanGnujjQa2a",
  "key32": "3bjVTrKv5TtYjrPjLHvqFRSHnbfeN13xXcWwCAmvKXsGUCvae8qAqpJwuTtczpnesVoMu4wjGFipkf1umygipop9",
  "key33": "nPhgQavDDm8AAR2V8KjvyWADGh9o4gCNLnHSfsLEVhRwg3nJcdck8JftiFmTJ2hQPcgw69GLoKkXxmDbo4FK87m"
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
