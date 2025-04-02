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
    "5joBieD79CdSrRBxKexLHg7Wtz79MGZKjyFsddA2oK5JAS9LrzAGhPC6a1vr2vSeYfd5bXiTdzNsrAJpsdZ79zCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RydeuGN6c9CxiY7AbEVSgy1wSC1mCNZNmphz4qYmJ8huYYcAzfBK4Y2uRqocDUVsD4MGz88UhiG7DATDoXq4HxJ",
  "key1": "3JBjm8ovrRyuFcSYzd7r62yeQrwwUgTpASAmAPjY6qk2avSG7MMMKq1dvQQt5wh1jhQ1i4CD8MWYxgfCzvz5GeAe",
  "key2": "5v3L5epRAN8LXrnFWR44AkkFRmWWfEi6ffJkX7XroeFhg8dQYG6pbdadHGP3fspKtTtXeEM9ypEXEmUYVYDzj4d9",
  "key3": "2hCZFTHRswiHfSHyQFKMWEGNibrrg1sHaPab1LgEnvZkKUxqyg2uQHMef5xyRDHuDXcCQnn4ch3da7pRF1fTuDPK",
  "key4": "2FLbQyP72d4ZrbWQunik3M8pQzvEAQiw4FKDyrrRjwxR8w1sLHoF2W2FKBPTf3z28CnYh8zwtYbpqX3GNA2PypKQ",
  "key5": "2yKRVVEmZVsU2sHPy5iMGv7LgisRQvRg8YbxVq6zi2mnkwKFEZV3ricCgPLyUnNn7HqjwmEF5HGKCkNS1AEekop4",
  "key6": "ppaL11nTE1WzmpM9TCjgTPaBGJdUuy8tVhprR6GSYqsamnocV6HkmmJvfmLCXtWraF1XBkzRCwdAVYyYdR59wri",
  "key7": "2RqUPeVN3XsGVQpsgg4UUTWroPdRKtnDAu36VM9UGhmSQjPcudYYBXFFQfC6TfRTsbSRM9ygdF2Cy4NShLJ8URuS",
  "key8": "2DXRggVHWP7vcqkiJ62CWkpqMx32dC69kLCFyPvL4PcinS1vm7RfEJdCXC9jdFezWduaYKcp1zRkhwsZ1BFRCtSn",
  "key9": "5wRpVnFwWYoxwevqi8WENz1ojCvPjyF8KyXvCvGLff2SETyDp1ud65dW5MhqGwCzdLn57tfW6Yz2oucQc2gskMeX",
  "key10": "3VUtzTSDnWZbxFTKPbtf1Y8L4QvWG1kDVFiKpp8XoGrQsqMUyxeLAWLPz8MYRMcE2MVKjV7tJd1vRZKK6e3m8h3K",
  "key11": "3kJZ2NwEzKsXtF1d1P1T2QPERp5k33BUZM4dBYTa4LTBi4tiaA4zpEDTywiiQTaXmQwM1knJsybcMw8PAJNCEavS",
  "key12": "3gdfBooZNSkJAmmAwwEn8QHd8sf2RQBNs7JsPkQXEvccutkzRM2TmXeC7HpbsNLykr1wBpjeoF5MWtp4gyn8Dmdg",
  "key13": "gbxNQutNzd6ecAG1uhZJoxVwoVq4Aj9ftumLGFdZCwgYjxcymv4aYvDnwuYMHbBTwwTZXSraiuxfSAzzXex6uyx",
  "key14": "4zrEhikds84TygzyJBu9oC8vUFovwequ6XcS7ZVNNYKnnXDFnc9F3rVruEK2DXnoi6Uhnk7TuQLywsGirdpfdWtD",
  "key15": "2qt6dPtrnFWKK8wi1SzDJJB2TcyNpcwaQojCunK2UmWBQnYYLhdKnPa69uiGbhKrNxmSCW6mE2k5qQgqjuTDmZ4h",
  "key16": "54F5Y3CekMTVtCp5ri6Tw9amDyZoxsvUcBieZ8BVbr51ArtPWxoiPUcEZHAcsLBoeexcadigYK1K2H3VdKmdkjoG",
  "key17": "4GPsmxWFkhtAaSvXet1mYwFD4xVVysPCnH8hCfSRbatXhv23QtrcM5jtcvKopR98kM5ut5RRZALKzVxDVRrsvS5A",
  "key18": "5SQyzrMboheRGNKoWDtox9wXu2Ev6MjPEa6rw2womH4UmX9XeT7RDP7x5hrGG4eLqC5tGS9JpKxLq9p1S9rcMoC2",
  "key19": "3dRwSDQnKoW8vhaAxmJmDiRJsPbkFqSxvV44Eb35WiZLQwjEfC156FmPJMWwci8cB8PEf9U4Jc82Gvmm7HfjemEQ",
  "key20": "3WndifeUAXhBZ2ukRpg42VPEwbfh9Fp3iMifxCcmGYvAzeypUekgMeg7tHQLiUEBWsyngUAtRycbze67k2HvbMjH",
  "key21": "ReTUx1LGXawcouR6f4badVY4VZzaEvXK6ysthVVMrCt6rnjfGKvk3StrNHrNtdRJwEVRtAkADhv8MS232boeewh",
  "key22": "5aFhqaW5evi4ofK4NsXce2dCieEV2GnQJXNY63GRq1eJyyxqtopa2T2ahiQww8HGS4LDezW7ymBAHtNMiA16yGPt",
  "key23": "4ox7ornHEyPQPMuPX2LsDEvwzt3NwxMqwQjf1SucthG4WKF6wfaGUXr7BFqDc9YBz5BqQKHd6t49tZnX1pAEkjHf",
  "key24": "ThRY4bju4zUatNrtuVwSA65YTP3KF7sHUbcQKSxX85QRYSoe7AdJuZrfKj4QpNwnh7SYBqiGSjsRCLqZyvaZbQL",
  "key25": "4fwJVLoi1SduqnVG92hY4tLEN59WNgR9nQXXy6mD1sYYbTriRikdDeycGwxxjJU8So32sYsZNCbCaQsJjanvHQPQ",
  "key26": "3c9Xj5nTVB8A786aY9s1enea5qQoDpmr7XaG2BGvmApw9X9Qne3gFimEU4dgAq7GpVn6P6oKMi1VtCPQvEuHLc2e",
  "key27": "4PHEPVe5GKKsDrL3mhrLRewCbVhUx2YCfxry8wNKSwZFrJwgMNwzqwUci5R5SCnJs2sb5Ro6VPBb6YRpRLQfBVDy",
  "key28": "5wkdTJrUM6VguvstYL3tLkyLn6oRCA8Ao5DitG8jxMqHV1QwT2j6sSBR16GuCYSh3qgSLHMkDXBjMPYanzyg8GT3"
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
