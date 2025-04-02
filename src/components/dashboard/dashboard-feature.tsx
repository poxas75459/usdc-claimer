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
    "3PejZbGbMj4Fmpr59n4abAU7qAu1Btqk9RriMv6mE9wZUt4waM1LGMAh7bCKYGFQNJZA1TterN89SxFhAKfdT3T2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuSbhRUena3N3qpG7L5fU89PwkLvVDCVgGNUrBgnmXYYJmTCt5keaAsm1d5edaQdKFHvyvev35hKAaNjseuLso2",
  "key1": "3aTXPT3XQEW4PSNssZXeRJFPKYadGa7B6hGuF1HG7e8EcHLnYPYy1yjREWLMnWap9k1jc7z7o94CJAHzfhyQCp8e",
  "key2": "XXN45ZRdm1AThjj1qzujLfFur2dUnFJjxRzLMX3BS67xLG9Y1uZAKBnb4zbwvWhTnBv9bePtYuVSVa2H8Epidov",
  "key3": "2c8tei4KKHUaELZybALHUJ6C6kcQfqghpM3VvqRv2m88kVZehUEEMcP3nyXGb8m81Z2J94b3vZrVnbfsoEBMiqig",
  "key4": "2UhMozWdSJ6ZxRcya9XdTdASm3q1s5mP5gK9czccpyQ2sa17saoHQZadVJ35JSgQtso7FzR9xyB76ZWMGTf8j3q2",
  "key5": "x3gxymujSBrzHgRYeeE1mSzAvEdBFmoi6VNRarWE3hSuCimRuGXLfh5eznMd7TZgttaG2szvthwgt1PJUHYtoYn",
  "key6": "5dwpTpuVQg1kAisgsMLgNf6vDHDKphSwr7sZ3X1B5s2okdasxCzqFcdUJyMzZgU1AYfVrChvFpM2Na2mWW95pTwQ",
  "key7": "1n8HP8sycsU11Jpe39w1JbSh3uxNjD7boGHH2zETYkngD7gvSiasgLuk5x9qTcBhyBo5SktWNdjAWJxQi15va5q",
  "key8": "2GKEdugZ9ZMhVfGsq9DnLMes1VJZWKHJQVRcqUXkWSV8gwLZ6BCXicABsps5tLJZdddmy5nAPuUAPr6HCV9uxkDX",
  "key9": "4z5DbRg3jJRXpZPFeTyTmHGoRbnDFvSPdvi5RYAEw4HWQ3FWmL8AFfCpynNTTiw6zagTTy4pFymWLZbA3hmw3zew",
  "key10": "3SLUQctS9QYpPCnqg8qdHn873QwEN4MaUByj4RDRsA3GSZpyPnk8idtrPXhQ9UaWLqJC3bH1tErdxUPF1h15oJWr",
  "key11": "2VjiK6acSxaYh62fGw1rrPvfEykkRD59RVScfzvCyVkxSBX1GCix7sSGW6KPY8uXwbzJHDjTPu92ifUuYcqxsiqH",
  "key12": "5tq5fTmBJQDXfvd57NSQq7tpwoWst76NZHRqeartiDjXxMpwMegbgDoNJQFXntFPn8T7PSRj8mx3r3crvJVndW3n",
  "key13": "JBLdBSSYsy4X6v3t38njCqutVmrisUcmKRhLo3GQEy3rJKnHxb3MNmm3tBF18Tyf8Z7ytL8xDk8QpapBJfxTAUS",
  "key14": "QRtAqmV3YjvA6mzB5H8N3oTJi56CQR4f1TtwGfTPqJr2uvrbcPd9DcqFLBsSHMWhxzSHSHC1ZTJ3Z61itatwnAX",
  "key15": "4uWibuyaWm21u4cyLAeKcGMoAwemMcW4BzrPpHupVjKwTTUitjqGQVRj7oGmFBAz6e5nbPTFjGjz1NL67D2GVBD9",
  "key16": "4hcYwt5qxoEdC7Kbt5e7c3pYie9NJgYmViPnDgk2JtG3BUrdCoyp7jHaVrtz6YWhnDPVRxxeVeuVUyHrCxMGAheV",
  "key17": "53oPeYHgTHrFzzkdV5hTJyGTPEV52jL5FBtD2QeDqEmb5eVsaisANTKRFYbbB1N96FT6rgrZs4mJqXooy3WofVYT",
  "key18": "3JAGc7aeVnBHQctm9V4T43avZnh3NGe1tAvkpUiK14r3evD777aQUufYfTgAaVyvZ2VooCSUz3DNfkWR1kmVQJnV",
  "key19": "2avQJdxRBmMK8KrpqxH8xmMqUtWDa4bAPQpTJsd3Y6xJGEa84fgkveviAugW1TQ6o4rZdzzTKXJSmvXCvDjRBufM",
  "key20": "4SfcVFSsXVcnzMqg1mpZUJeFWtJ5bMhVAX8iRmx5khDTXFz3WkEjwutHZcac84q7z3ZpuS1XDoH6KbAbpCPDcm1M",
  "key21": "4w1rKUqU8CxqQyM4kMKL7obT1TNaZvHQq3EUXiPou6VZLc7ezFGFUrLed3p6YHGjRrj6AFxY8Mz5y2hWaLawiB4L",
  "key22": "38KK9Wu8yg8UQQrtxda2dBAK8C4bp46vWjLzCrnvXQUr65akRUmoLkoVAEGn7P183p5BSefVx1VtZvQxftHQxm7R",
  "key23": "24iPCY5trot5SsJATmVc4m1r7q2tX7tX4GM1MzVPSrp8rfFEpvFcvgcAjxZX9Mx1PCArcizssJ7cmTXVSu8WPCeE",
  "key24": "4AkrXrDcRBEzoxF6PMtziVvDJfnZCg2dfW6EHhAX92vpF1Z4B2RXGT3jDqqz62VeigM1HPzaJWnuSkiKrWuipe7V",
  "key25": "AAi5aEiYSiVhnf9uw8nTbymNg41e4Hf9hg2ZeVQMQTbaw3Mokp7imEM3epZJV2RTcdCx4eJ8yvKd7de25Kr1V2E",
  "key26": "3sqSEtkpoZU1rLt2AGrrYtEJ3Ys2UUgMXMj2LNKm8XeVceVVpFgEsFxpJr6qtRkFwJnjC9tVEfemf3qQs7G9vd94",
  "key27": "3TAa2CgtbKmnftTiyw4ELMVmMktE155iSXRucgMmvypa1kFEqjSvhFhUqJ52q5HRrThprEgZPTtxamCbinVSmUUV",
  "key28": "2fDhoLFbkm3uaLFrH1mi8wXuE9haN7HS5GgPF4A8SLZ7W6H1dwxYSfiub6wR7BJ6opJTy6Biky9QrAMfKA9u6uM8",
  "key29": "29ARujJjPoR8d1Po6GMJDTJbtoGjbb1ZaftR6JXQYhFrDUEqPGy83HgvB6PmwoPFin799Mhtj2aNkrRmxH3rKAcF",
  "key30": "43wNEvTxYep2RQCwJ3ZtMmaaRGfDAaQA8DMCije7BA9AmryMPnaPmCEudS57fa654zgBdjSAN5gpQmoDCGjy46iS",
  "key31": "r3oapKcdxbJmG3uXHuM9WMrg2vynMetTkWkf3uqjyKDWkg5xfuLN2BfqAZVwjSCS1vh4z8WC9bgBewbkw6QCKti",
  "key32": "52PTNrJwVps83YShfPPzNwgjTgRiiM7vbL6sCz3X77wFJ7FaU6gzCtkrkad6N3zdB1oismtS59eFQPikVfbgMT5q",
  "key33": "2Smi7RUZFufN39oSzMJRpao3RSUxogSRoVwR1zauQr1Vwrtdtao2gh8icj57NpZoChu7p2chUDBjEpUCSFRRGf9U",
  "key34": "61mPpuDGrgMzTitazh4yuz47EAz2D5f8HP38qqkNgTt1T7i6euekfqUS1sM8H3hpBCckypsWaEfuTWazaHHb7zcp",
  "key35": "2v6qJ5c25Yeueb95kCui48qSfqRZSCi3nmYuJjKo3GXKpUpbweRcNuJrvfyaFoFBhMevgsKMRsuSPYXuLXZZRGjm",
  "key36": "4oqp5VSaVqUzrzMhuReN5Yg9jzW4PVGCZmP5DDmPaeQnkrYzRBr3ekTWu3wcgDEYSKszR9sBJYjkUCEgHKdyj8TA",
  "key37": "kr1soCEj44irW4u4E4CEHc37HfffqvcqWGjgNHyFckiD1DECHojkEmi1LtvVMdPiBTCRsVuhjPkpKieXH3f2Lew",
  "key38": "3gQz7C3evovXXwo7ALJYLywN2R3Mm8uBwrj6Lbv6oqyzPhsoiJavoPSP7bgP4WPRsDTgGTYsSmg6XHUi8ng44MNu",
  "key39": "2xUwQrnrUb17wWjXYZ9YbBtCYf2RkiHaRhwexjpLmGU9X24yksXao7JJ5ZsH31s9NaHcmXb5NvCbjPfP41CW2ubd",
  "key40": "Hdt2zJPisDVuyifjiKzTbfdxrjTQ2e92NGNR7Mk4iSNT4thKwxN82anGKaLWRvMmweNfXG7mX2C51w5o8Vcr85q"
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
