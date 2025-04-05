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
    "5rGeLBLZ3fUW7eEGh7cxAim26ja1y4NTYd1rrFuVBP8ACGyUD93d6AwiwnmV26LuTAeyR96pcikwqNNR2nYAUNNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Crqbb2pj2D7JM7sBUU9XE75UqySJmUDdHCBtpGiy2WQXyQsAKQ4vgKvM7NBkvpzy2vqQEAe567kLcjUXUvERRGR",
  "key1": "5CXnE1BT3nPLLUqhNCw9vmwJBovwkJiSp9qxQyCWhMouCVcBpL7Wyo93wj5dStZtW9GEGDmQbHLrXmNeH1kb5Dc6",
  "key2": "uEazsb1T69yG8v6AEWmXR3ADabCTQ1a3p6yRPELfa4N5EbtxEcyPZokhcKeAmRqwnbhg9M23rQAshmSx3fqQ6Bs",
  "key3": "28nKSRbVSSrmoBXzoxHT6SPHQ24QJaskrDdLWgK2MeHce6A9UVH6STCMbWMMdV9jKT5N8xySPsL3chEinJR3jXQK",
  "key4": "4rA1F8GfrXEpS3CuyXofym2ccunmTwo65TNw7Sac75MuTCaRa8X9yu2iM3Ms9xRMqM4cLDPritYhrxNWFDjVQdti",
  "key5": "3hSTsam8tcDf6c4gh9Gc2paBsCP3R7ZcWPNnNh5Y6FPmyBvu9STudTLbz6vS1wp2J2KnPuFdPfwYo5SbpSRgRHDd",
  "key6": "2caw32Q2V5VU55YnQ8vakgrxQ6X26jbCrAZqT3bqmbNDYWu62ARXK6e8K4sxzHRjNqjSYZCBUWAq41DuDtaZEDAL",
  "key7": "2qkNK17Bvqj8frgnQbdoNkcK3UK2FcSb9STw1rnnmoHuT6TBVFmBSnzDXS834g5cejXkCYU9yan7LcX5j5qr46V4",
  "key8": "3oiC5JeD7EFvDZpNcub6TcL1VxRVwBwsqk4vnsyMcBVeRnDP5vpwuZfp5szCBE8dtBrhowmb4hkd3thrgGNmyXDX",
  "key9": "Su6qUNju3G5EgsxJbbHMvgn4HRu4VQPEz63qX9WsSyMEqgQAJCGvdQjsEYzxhrAjnN6vrY3VHg4M2s1TmwUSTkF",
  "key10": "2PDYUeUNB8Gs6UFzvWxLM6PdMZDZuei3bk7SmxUq68SeSex3rcf86Hg6PXXTn1Bgqa6dJ87RxigRAE2air2Tc7xc",
  "key11": "4rVJNcbouuGFmX3TT8DMXZbw3PBZBFBjHudLgJvgbE4qM3yAPjEUNEBZf7PiT1Cz6o381aY5qUGbDmkjQfxjYFNw",
  "key12": "48xjGMUeCHQKYkiMXyZ8RkXSTB3fR8ySazK1XFGomvnzuxdRyat5WuzFSW9AeaBb5KQWR8M6ppdoxBZKZDHA7AT1",
  "key13": "33dSeUBjBaz7ivRiiUfbjnmEZfdvrZvJH84Fe7typGzXjDCRaH9BxBnDManfebN1yKBJS2VGUZgknpEKuqo6bEUz",
  "key14": "42TBFVkd3k2K6jGLdV7byGo2nqeUMvABMQHksXuYUTH2ctn5uaxeebpBhym9PtnaoeQBieXkL5cpYcexDtW9TrVm",
  "key15": "3vRR7WXAkAbXJaKASeMnySaj3EZJ7ivwXQtYuP5wJeuxRtbdRpfhpLfdS5Lk2tqSGkEFZcweujyVF78JEzsG5GWd",
  "key16": "5hKqDrT5LRdFTrRYifJEqS5mMXs7r1Gv1W8Yi866RXoWJ939wnoFpVwYdfN4DsTsLqifXfDXExJxsEYAFB7cqEnn",
  "key17": "2yrD58VWSVhJGauXBWpv24eKWbNaZaXqVt6wiyhVaz3t27ZZjrrQGFkqgo6oBcCGU7mAFHuX7ftBtfhRD4gHuNrz",
  "key18": "nbSdjwLZYL6qmmsfsR2ESMycbLWJhH5cuTCUmKFHqqQLaqJ2ciCNwevGD6F9f4fjAPAgQ5cUwHpFNHeN7u5HqYh",
  "key19": "4NfQgfy5CS4pyvLcZrScJJYZcY2dUe9L3Q1BGsVKsf7ExJ6E2a684omCrPnsJ98ipFqX9MRaqgpZEXeXxBiBpacr",
  "key20": "3fWrCNDL5Wuf6JqbvkDUxUeJ6c8FwayohF6oL72m1kNVUGz9jw1qJNQXBypZuV36evzAJZFmjqQorzVdC4MYUvH2",
  "key21": "puTwTakXtc9Kg1VFmuNLk2fNZerdqa7TY8a4iKVHUtsPCCQLP2RECYijHFyE6F8LW4zhaJPr2e8DMP5a9guRsGs",
  "key22": "3LBMJRFkTfT5C35xbnkQk9iVbnxxMTwuFQ1Z1Ynf582gYQnmbbcorekkSFBqpYts87qBNBt7rVLXt1QXoKY9ZGYX",
  "key23": "2iiUaup8W12CUS7GEJCuJShhWnCPejC2A18yzsuWRfPBYE8Qf1TgWGNMnbwEPTfawabiDaqgaheHLc7py5bX2gir",
  "key24": "ZxqyuEBqRKMnta71iahajpoESDtKKkPG8nAb7YiZKmGjj6C7KvGzC4kUYwqhT92LsbJCrRfpkUpKAVeQCPt6c7k",
  "key25": "3NXA8ZCwrwxu6VKh6RtMeLgDrNnNAXkNS9zpzizphkRoSChsz5AttFdhBbumvA95gJD5nRf3kNBTSSW9hwsJPoEB",
  "key26": "3RX4J19NP7xETLqtrKK7t81StjZ1rbwRi5v46XNU2inxHX7Df1unTKzVNsXeXrJaAV4tt2KHYbwErwAaNfmDFjfN",
  "key27": "2tx3uHoErH2jcYi7FsmhZYKTQ2WzGHFXTMKgw8CoW4boPWH8qcPMCZccGcFesq6UMrbDkLkU3yzuRUFrH1939Ca4",
  "key28": "5SdnscLa2zRdkzYB8BXeiQhVFEV4dMCQbHfTT3xajT7dfY8dMDGBGJCK5buNF3S57RT3DZumeok855yYAmeExrVq",
  "key29": "2odnTDzg7noXhsqbtPkPc7XnmWLXm6quG7Ys5kRrCjFAN34GcsVawzz21cgT1koe7Dm6JsN2K74fpVY3Vq68134m",
  "key30": "34RR5KYptFqnnjZqq3G1PFr7cTo3NmFQUNNTrDjnR1pYpmKNPLXmLwbK8ReDs9isXCCy52Yu3bqXXdceE1p2Acmz",
  "key31": "42yNP5XKMKWp9MTb6jPAwWR2u2B3aBg89d4sM9LGSfT49AN6sbxzBe3NBMkoY6Rz6L53N7S9B5QgdgAq6tAijRkb",
  "key32": "4zW62verRRLUEark6i2pbpVYmK9XdLGim2irMXmk9AsgYbHWzTHntjWNoXSQgjWi49cuQ6riCxh4y1Lvu4PNfi64",
  "key33": "5DyNmXJ3KDvGRKgFKybMJoDQyaGwiwswJu8yZMY9s44q1NjoofC68hxBXtb4onSbCdVpFwrfHjKd4tpBEMbj4WvZ"
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
