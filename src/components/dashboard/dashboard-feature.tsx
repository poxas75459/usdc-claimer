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
    "3PwGt2WMQL4ua9gffG97FDYwEXP873hmEAKoEGubnuBJKKpZxUX3ibVktv2uNmqFBCCwdRUV49pcv39ieDYGQA3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41SfmLXYjSVPMzv3A56hfYpek6z86En4Dqf5vwfHBrzLwinH6zVKNR6BKJdxhgGJ4JPaR1pvQv65bJRDFuCPTzzx",
  "key1": "3zGSmhD5cZ1QDeKTpLiEuCWtMpRVif27ftdSpcXxMjFgQsmg6ZoE4FcNjo2z3ShrPZ38gL5giLhjg7vb77pcFbvz",
  "key2": "5qpNA64JV73DS4LzJj58Wraeib1bRK2eCe78chvEZorYayTWEPXMJUGndNvCPU48GWg6hsXM6PqejnfKeveE3yS7",
  "key3": "53JnSg9YsByGQyEV4QQ6UaB3k6YoYgtwB31GpT5XyvhPMuwrxFEPSvsmexF4qsPKcFiK1pnbkHhyi5e9UWzVKCWo",
  "key4": "22kTrF2DZo8fnwBUHJtBYREFp71Bz6qT7gzugVxT2FQTTB2AV6aSWinJMbnSxQyR85vDrxPk8314uPybUD3QaBPD",
  "key5": "sPgCZ6uY338yRK8eJHtJonTcv6djqNVj9LBR9wSyUKGtVfSx9RAcUgGY9omqSWBkJv9iv4DJjN7pknpuXzH4DAs",
  "key6": "3Djhnuygxqa1hNHdrLfxYgiNXAvyJKR8a69X31JzHaBQNpTk7bYdvSQbV9Hh2QpyVwnT3aV8cundYQscAbXJp475",
  "key7": "5KKABm85hG96Z2owRBYqFYJZXK85bkQcbJmU6MNjWUGL5S7dsYSds1VS4NGu7WFuA3QV4dFY9E3TLcWMCp5NCzXk",
  "key8": "5akM1CfodCknC2Jyp9iuisVU895P2iNsBTaK1PNZjWTWSbJTXFaPZT773tHDkcZv96Bo7pAP3BiRAt7fxZvow5dc",
  "key9": "5V5DENVJ5JKzB675dzjsDYSzTna3g5DD7WkQ5mLe4QJoWJG1P1LQMS5gpXVVG9tKE5SdsJ7mzmJEnNW3rSoz8pyr",
  "key10": "2xHoX9HMqP4YJpdmb9H4REQ4m7H2tmJfwtXNmC7k82HHLSCR68yRQCbzaFi1QoALFSX9j19679sxkRaRhhjmmkQQ",
  "key11": "2sQSk6r7Nv662aAAfse1djZSsamMPcXmCaoeURQ7DSmnbgDnTwF7pJYgTpPbjRv5iZ9XjGiyxtUrck1eHx4mM1zU",
  "key12": "2ecwAECeRUDSCRRUuSUSQyybwYJ3CTAVVCyNkCpTY248f4MiYQ8xS8rcb1pKz5zzbCtty9g8AM9WATwazPTAP1K2",
  "key13": "2FKj53h3i3EXXFkvQ8jKRPtd8mm1UrTLxaUvjkB7NvAf5K96NCMDNThsBe62FAZ48xEYTiSLvVw3spxgJVMJqGHs",
  "key14": "2AJaiB78oMsJtFTphCRREJLJjA3US8uv6PL5LxHKwcApLiSktCVkj8Ujb8oGGG5rc99jVCU3sagBgfMFgPawjdBf",
  "key15": "WFDxFUMa4fo5JD8z6Wc53qQaTJoDTfEk69Wad9jKm4kVNsZrDs7DY2B5FTwt7KfQVasLbK8poU4ni9gkGy7BXC6",
  "key16": "pX8CSa5Fux6nsYdUfkaB1onhfVZ7i21kaizWpBTTF8UvDNjhcotkGAw6rJhttJzutKsK3fi9CyyoADA8oz8nGY4",
  "key17": "2VErZn8mBgMjpZawrnjPXyEetArxA2CHYYocw7WtDdwTVP8ec4VG85gtULEqFUxE8oReKHKtp9erMCKwcfL4b1BP",
  "key18": "V1s3zJL3bneit5fPYpHf8gYUHES4QUC6in5x6aQBWsxLEri9mBZcLzdtEZUqjMQ72p8Nouypvkeb4AyyH4pw3Gh",
  "key19": "5htQiyU7E1o6nxEgBmDyG5tQA4xeme2U1Nq5wwE8WptWor9V6QsqsyNCZ9sVNm6g4PwJQcQMRYKFdTAmQMxhouoX",
  "key20": "zouMxt9AdhzMpxKxZMbjpjhx5mxdrc66BrLKPdcBg73fBZLwV1ffuQ58mRCAmF83GMAkhFtUtYa4H4tffdL4wm7",
  "key21": "qunysdWUp9g28xq3KZLeJEoUEw3Yne7MKqVCGdBFvEsq6TvRPvyoLjRUzhxZE8aUPFC4qihwmu3fq7R3ytLzEbn",
  "key22": "4fwwAKmDmeHdoL47pAiSF5noYEyyzZC34jJgSvr3fNZ2pV8iLuCJjcPANYfXyGPgmtKvCPp8jEtSnFRmaDUfJcVd",
  "key23": "2ZDAwvvNs79Tzq1b5N4osZWGSBCuHFeiyU7DFgFHSYPSVxgu2hhDQFBmBgaV4D1FGVhMRqkZdAoNJFFeytyUSRBK",
  "key24": "46JnWhbjZ6SBGGSfwJ5ZEo6Red1tk5HCtxPf9c5pgeFjAuQL4WwVvoDZe5hqbRYd5arjySGGJ6E4ugX111qgfuSg",
  "key25": "39w4QreXMpdJ5CNkThWuJr2jY4GzkW97hajY4xkpjeEQhqEqJ5dy13U8cSYHUPu5SqnfmypVky6y9SEhd1WuTzut",
  "key26": "5wp99YGz5rbKHj2ZRhDb6afd1p5Sax1QxPsUtry7T8NEK4LsvshY5ZVheYM5XT9A61gcnb8877SfBM6mBeo52Zn",
  "key27": "5JDWVsUX8Ehqc4pSnk5ZH1ivR3cef77TgBM3mVwNqdWr5XhpjRMwnZPtCEMvxAcdXzECHLh9DuJGuN6aDy4qz73i",
  "key28": "3xbruL8T13KZ8JeNv9ezNnp5onUncyxy5AwpvQym3Cd3bzyemKBLM4LXVtTKdm75bih5s1gVFeWz4wV7NcA6Rdx6",
  "key29": "4n6m43yh2mSKnFJWAReGEFCLhDXtkhfjNPjpCbaWFKkiFjkrunBF992FwUAhtb7aJxBCds2rY9KgmugH78X33Uwu",
  "key30": "4PJsCNwCkRNb2a43tcYfjjmHqUALKP6FQXEokLLJjnYMHECuHNbuRyXpybaNrjcrCz66CwMriMgcPrqgeYoSZ5VE",
  "key31": "4v34wDGPyRV8fbWyU5BQooguaxugZQRDtwiiRgbcqBhz8URnobCVAmVgZGKrMWmCkxsLhp2Q16YWLumHArj55qrM",
  "key32": "34yBHvXZmXbyDnnNVEadi5zyhrnXuXHNQfpLPDNPxLSA783uNfehWgFunbHFYXDVWMAPQSX8aSa6w9EcEo7Xjm8X",
  "key33": "43wddWxZFZMJSRnyViXsg1Z7n16MDCZZEowocK9erUJ5BwYGmBbiryWNF8peb3TvhMhPzdQwt8Q5ky8QCtM4ufRE",
  "key34": "4PaDAvdfrfEy3KfNMuLzVAMPiu8DA4ghHUSZ697oyv5YjagU8zxu6gAizvViE8iDFtLucmVYXVXcahPFXKdhGodK",
  "key35": "VYRG1BDJDHxiQQMhidPiCHdf97Q7ENw22T4bXJMCvpustbaeSaA1B6poznDBmPQa7F1JK227WS38ViRKhvsQYSG"
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
