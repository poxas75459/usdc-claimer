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
    "4wEees29XkKYdUrKqvFJD72nZQAkyWfCGwxGh141jwyn2bUDcD7xjX2GPgEa37hMK65K2B7Fg2zPQ9WghTEvtWB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xASjiWeWjkcdtMvgqDyngKEQUYS1QXRt2JNtPgg19uvY2CACiBPtfyJKoSi2uzZsX28B8rpN25mrBEb68UN1P17",
  "key1": "4gMWPqcWZjwb43Ldp5uvzUV5xQczrH3zjLUGfroKfTCSu2Jv1BbJDWT2qmFN1eWsGvLPBd2EdTnfPizTNLgFGWyV",
  "key2": "2QPvouEccA5HdorwWUDcomdhHDLMbjAN6ckG96TPkMJsay9ndYWmkrPiyczVToXqPBXvozyDqyvp2RBpQJExaBFC",
  "key3": "3RjahWYSWUuF498H3Lv289AZJF7BhahxgsTAH5gmTZM2PLya6wWzBuLaQ5w3ywTj8bqqQF8JtSJZyECCVYg7cbF9",
  "key4": "5L7yZ59qZzyY1dRUJXHAD26vUpB1H8je6T2b85gwEEud1k4THWDD75gjjmkEALNSpNRYXRyAe7joVdN3CAaZM5Dh",
  "key5": "24diLsvCn3dMJWSEGdaUnQTa2KuwwawajLYb7q25F5iASbqr7fJmdSEvWt84mvu5TzzBQLJvVdyRRLY6mSCdbobY",
  "key6": "3xA7kYfXesmxvRuREX9rYiwFD4krvB9PDznJgUYXWHJwDnKU8jFhru4c7YbTWQoNce4nAwxViZSivU7Q5rEJc74M",
  "key7": "uC76McjTc1UgkHgRuVsP3Cn6GH3fhtfFo57W9xKw9LFyFWFSnu5Cwhjj6W4673LtK6HmDGTWgxJ93KUgjKP6hf6",
  "key8": "3vo2PtirTka2gyxgVoKhxcduMsYfbY4fyH2qQiLtmyUxGsT5dsNQaF4VBc7Vu2rWsQ4V1PKi5eYr9NZSyG4QwZDV",
  "key9": "2dToDHDHtsW4PBTzBhPfuumSqyEtwD8hLyD5bGcxJ3VanAWYRLobvLP6nDeEKtj3iTW4bGvhjA7nDMpk4YYn3XLh",
  "key10": "6196JNq8jn4PeeJD1F9WkS9Hfg5W7hNCU6rqKbXFGZQC3utoBCyYxBjHb6mNv2uo3bVAr2U2HqP23Cdnk797PeN6",
  "key11": "36n4xk8wVgWMhmxSkCWoDSqJHpqxAZF8UKUat194kojqcywpzZwC7zjgAutX3M2d2Jyy5rWwyvvDZRa9qHdrdyn8",
  "key12": "41aTv7TfGA9Je4HQbudTTxYiMJPazCY8fe8Sq8oT8vg7ecij4gN1eQLNLGByNcY12qnofEGyxsMGxmsEvseEioGU",
  "key13": "5zYC6RcPtMKjM2B1ceSZwESVThesXRUCBQbud6RfHx8sQTjfU9Rtr5qhhbwe1Y3Qu4niJGgeXt46NUVKhQjYuybb",
  "key14": "2LoFWM5wCzRqY9d5Y9rR9fNQn9NMJZz35EXtkdrWomKRdXaqQH3U5r75r3c1aGFy98dZZvbkpMVimsXF8bWJpK75",
  "key15": "4PS8J2xKeu1cvq1przcouSkNP7sRok3VxshXWJavLHNLPuFP714k6NqHgxeYCg3d9h3dUjDpg1Le1VR8p6EamVfi",
  "key16": "3HjvftXRy99JyVkuzk5wz6PAqXyxoQjcuFptWDXSc2S5S1cJTj6SMFmHWWpQYYLMM2RiMHFu7VJUjMDsWcn1vQDD",
  "key17": "2Wj7adWKH2uxjzjTbEuB41sms4cYwKY3mX7yHkJFnAg2VpXQdmvUZ3m4qBaEpXeVZd9gwkzYFCguuGJBMpqYvear",
  "key18": "2GEFFUHYkCc4zCQkbrBmbyPJazMVXrWFvRBkgeuPmFuFm9daW9AX1pzDQSSa87r6p49eeJSzfLXPAQXtV7k2SCo6",
  "key19": "2HoVwmXAtrxfmUioH46qHyak7oiPCoWMYTF5u6JSxWRVLeKxaSDNdhXjrmVnG1AELUWavUFMvKhvzL4dNoRuudpT",
  "key20": "3PhHtbEWTDpV2kigNsJr2DrYJnxt5VtaNPQ4PAg1ADA5UvykhbbitoGLqL2sxL6yPJdi6yumgPPUd1dRcg8CJjMB",
  "key21": "kSgjyEqdAFotJjBo5pfFfxrnm1uEM3qBdPM7RiWwQD23f6X2bh9hLiD9xRZt27ynvmHn6AcFvm23LjL3JLQ8oiV",
  "key22": "5N1o7TbGayJmxQX4RE1Ktp6xXKAv85tjxYK5dhnoBQPBEc5D8CrtoKd69tbxtzuxPzFq46vSA39ctaGxGg5hpqqT",
  "key23": "8vpdrCrseHHaWbsmPLyddn7Spi8ASsS5rYbXLNqPTcQvUSMux9TNZQuApM8v1kJTjMzGAeAJJafU3gFgYtTTVJM",
  "key24": "27CcSevmQAYHLiLcdKQgDpQPqiEhWMnSyAcRAY2AykbVcAx7wZhnY232ZSeKTMYzxuDvnGQy1cbh3KwazyPmqVKu",
  "key25": "3ccp9eS93QUnsjk2bGCJ3vfqtZWGiGfYebVm3Jcjk3ZPfAZo5Gvv7knSaYLs8bbfA8iK8oWmu6f5U6PcSfTq1FUL",
  "key26": "4uJyXj6ABe7svmsVcusdwne1qEk3vPsvhK1wzNNsZxu12LpHzTtQh76iTKdqcGA9ftus5o3jP7xbdzhMshmAYZhG",
  "key27": "2NCyE4bk8xPNrhCSPgWc549X4woznVmB8UbLXeGdpBDJuyWpShT3jH3e1b4y8J4xVsq6mWzeetdwP7m83cX5THNY",
  "key28": "4xaVyFB2Rn3VbdoHCtaPqE5gcxnFhDKHP1T47H4EMhCAE3U9YkzSjjxQnFETBVfScmbDPGkMg8jwLiUvr4LsJ2p4",
  "key29": "5oUvC4BhpwJ2UgXmeFCF4DvrNrbwYuS35y2c3LoiowVwMu571dB8BDX6rU6XVcMmUzwGU2YdRWUazVeEf6DgakEk",
  "key30": "2EY8g56DReaJzGi8HKVtfANEehCSpLWNCSXyT5hTxrQemBhQce2QkGnGosLtFU9URaswKLv2Ft2FEyDskdTVDmSB",
  "key31": "23E8M7CRwgXshYHoD9WdPyeL8Nr5toEWpCFqChQPXXrpt5cBz8fePcDQgkKqxbzg2V3D8VmGN5ygsbadRu6idsjv",
  "key32": "3pmVirnw92JQqn7mucSYvx54SHLkHQoQMaacg8KXcsGCTbwAJnVixDsqLJhe6iZmDL7JgGb3sCxe3fGfAsgAeXrP",
  "key33": "5o4fqXP7ybC68nAvFMzrfgd8Cu9cYproXHLpEktbBe5hQk1gpySprRNV8PffX3MVotwENZ13cv7eJwAvz6u56K58",
  "key34": "66AyRK9EQZDEyr4BpDtRDJx1uuxKDPg2r5juEvDHBgM5gaE1DyoPJS8qdPSnwDX2CvU2LdY68neEmesLFFuobbob",
  "key35": "4wL9orzzAkARoysxsync4a3amxPk3TDkwA5QaLNaUgLqKtVLVwTxLsmcLwTgVTV82tgXmJ144X4xcZaCjgeqUzRC",
  "key36": "2MhjADBB36tGznxnLtzCVGQgRvYqXKCwTdD6VfT7MiJmQoBuDX7Ct1WBprQ8MoooFLVGZuPVBF9Pe5qaXhXcR9n6",
  "key37": "39AimVvppTRxmR8TRuczHMk73omUwX2YnrSrAwjeZd1nTvJQG5gF2sr6QWn5XDDdqCWtaAkQ9NyUcwdSkcTbS6xt",
  "key38": "4z1dpstVJB8KojeA7iCYrPcEiSPiosWtvnUZQwhpTXkRBe6gQg759YhswojLXi7YSuqkAze8ot9UzFMN4j63ixRZ",
  "key39": "3KcoifRuhKPEnxfFewEaV6HkZZkzriK9xNs8pD5wJEsSzhS2nHSk62M9GEMaK3GsD6RKYYmAVtnC5G7RxAwsygvN",
  "key40": "2w9Gy5P9GcApXZVW6RrUMqevjxZBjWFe9n3Njmrg2HAbmHjhd49G1EXGX6e6owZtxvmAWuzw7aWUhLFyBY4Q2x6x"
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
