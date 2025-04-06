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
    "29UCrXQ75ojQHoauiizNZRZVyQpFbrqxiyfRqxFqaGBWyA5dgDAHSmopbDjP6p74dRX5StYwEPX6NMwynH3Ewr21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ME2ZhxiG5sTrrw2Vc2J4VkRVYfRkahrqF2qknhMvtcXnCoT23vMZ2w9JtGPTSs6HUBaTdkoMnzF2r6NzbQUJFV",
  "key1": "5KmTeB9bFBM2VPvvVgDoa9ESJK7CF7wF4QUnanYuRwxPvnegwamT5BkwmjYfubUaQR9ap5aen26xaGoAC7wQze7T",
  "key2": "33LvZMdURQeW1QLTnknSxeyZ7TrinRaVa2dtN4ZUX1SVXzM2d4ASVinRiRgQJsFBukGxWkcCPXstyyNjjZWZF32A",
  "key3": "353m82ssueSQmUXB7rAPqeaZv7sHjjJYTyg9A9kPzb2pqJHb5CJgif4kMxsiNuosFt8s32R9u2NqBGk1NCg9UFyf",
  "key4": "3XLoRYBjiU2JD79JeSRnxcN4wBPaSfDY8mAG8xbjdhSiHKtDjKWWrcVjeVp27vgkRZcUjki3ypWSJpm3nPmFBB1V",
  "key5": "JwsyrLKPcg9mtiS8r7LB1ND6NM5Zh6cFviFvqPGcVwq97t1VZ8nn6BLhQBu6GVnZT7GYP64nUahcfLE1g3X55Fw",
  "key6": "43SkciRUr7AXuqAYsgfnQRJg6zadsYMwvgyETkN6uiTgWsWaHfZ4g1ff1p2SpfbqzccSYfGfHjtqGuo3fDHkuZ4d",
  "key7": "25JokgHXqn2GE6SCzU3q5wXevGSSgKmbJN9qAoCMy66ZtXZwWEgwHVTTQh6zaXKUGxsdfZAcCMYyvRhkEUPW1Nbr",
  "key8": "2Sfkj4LZsMzrGRWQKpfvXFJH6mdEjQat9VAeG8CFtLvGXkcrnpBXqa44jRaJHNNx6v6YLPvQTQVyXr3TFCTszrLn",
  "key9": "3ut7hqdCpG9EcoeDDdy2DquNhM9MEaG6Pp21xLnp1vJhCnyGDnpcE6KgUcH1Ntj2KRksx3i7GrW6GfRmUn2NY9Jy",
  "key10": "2vvW3HEScZHVDqXWe7QvzKUkWteBKDViTp5akhQ3eP7RsRBt6d3bZkM4pQs8uiaf3cwyhm2GVbsZnYonRPGn1scY",
  "key11": "5iJhroScpi23DgqrCvaanBXrWg1F6tT3n5qP684vA5gFRmW893TdcPoQVWEQHEoY8qaonRfsuiDiFvbqDCq4ivqA",
  "key12": "v4sodCuG4G1DPXGR9NKNiYeLHxNwtE3knTGAmCCTzJsTMnKCUSctydhcT8poaY69AYp2T33fS4KBGxSs1e2FY5T",
  "key13": "66GSN84zNR1vfA7XY2rw12kyHUxTT9RzapHqPG7XZGeAswtrXMqU1EVcs6VfbT96JFDFcYELj84kzWRPQDU58bV1",
  "key14": "2ca9vAK2DLCmCfN2vZUVasAx2ZEY9WhiCEFKVm7MddktrF2E3bd4aoahg5Us84Ucg5d4RMxeNpBmVKSgrUc25ACa",
  "key15": "5YU6ZP3Pxwz13RRQoLKg5hzbVy4W4caZBkmmRot4CoY9xrVfrvs3u36W4QyKqKuM1zPiB5dNuZzTaJRTwfzP1by9",
  "key16": "3nprVGnDwykfVGwr1SzJZrkTf53b1vq7H5bqZ3QWJipDa6ja2ucsQ5CcdTuv6y5HpJnimKbhT8fbnjQoFnHJK61z",
  "key17": "49Uzwu8egsBhgN9XkYsY2XBRrk99hj5Que6roGpTHZ4LX2hqBex2pKJUDvYk6FAU879arpi4QPFSAKEme1viCWsF",
  "key18": "2K57kKF4CeZMuzeQsaHdihgScva3hg8SNQ6hBVSKUuqwM2zgwwodoRYAico9HAJMjopggzoov89L91UDm4jDDDWd",
  "key19": "4UeoeqK29aNVyhY9hQAFaVcqHtryBUyZgBHhzu6veHgsYviAjJvR8EVkgLjGe12Uqb1faz4u5LAshDX9ZjmpxBQd",
  "key20": "4hhCzYRwy9hqgRWt3pazJqJBnk7diMztQNZiTMtL3DEvFG43RYqCVv1rbw1Jo67978xqZuvWMzbFZjjSA4zQN7KQ",
  "key21": "5k3MXKeCsCU8FbvqSTjLfFjb21mRfRenMHv27VJ52FVWiv29L4DBiYvMt4ryRPrqGnPyorKRq71xsYUrUqTmjWoc",
  "key22": "eeUBgLp7EdCCJArJVaSkuGto3EEETUSzYgRF2GZfd3AKod42UzekJVroL8Uy99yBcoueZisFJSSBDYGxT5o5sRz",
  "key23": "2hjasaZtSKPW2qWDcPV3BAoERYhNaMdL4Qi9HFa21Dkvoy8jhyjRp9kKmLnmaKmwANKj9PGkmT1WznCaqsgaQ1wM",
  "key24": "2dNtYgj1qDTtTdYJxG9HhwuE9aK6bjdKEKTMk5AoQ43RkrFTjeBtzBLL48ZsTgATEh9pVLPE4HoVss8EnLSfdUxt",
  "key25": "3kENwQKqxE4RkmNX3df7xKgxDvC8Tx9ibQv4bikAsZniXxsFdyYmdCjyD33wnrkMxVAhWFhJ29dr7DijS15BqSzh",
  "key26": "4tnqX5VYqQjDKdvtGYKyqNym9VWNfQuJ6bUjiXpY1wfZkf3ztDgebiELyzFQjryVgRg5KEzHECkCd3dUSeWCmdqv",
  "key27": "5CkvEuNQs2VLeCSszE8w5x2X2r4k421EoMMevJ6s8tUoafzFH6Pz9PNLKti63WeuUAFoBoEtMt59zPJzEjASKrkk",
  "key28": "4oVDdw1AfMdGjdrVaV5NTdR2KQukfbPwNZUah67HfgBgD65wo4KZ2bbXnhZjiQsvTFGjoJyeuGiYaZkBJZNz3q5q",
  "key29": "EgN71BBzEo2Qe4ympN4i54xCevHnWKvYYh3uShTHPgMeQtEpgdj4HjMDvgQvMXkWKEvxt6DaNWkaPybqsYXnEwx",
  "key30": "5Nqgs9G2E53fbJmUT7R3FcCiHFdyRmE7v51znhsxoacao97EBjDigZCNTGcEmaDYpDePsHQmo3Cp9R4EBoCem3KW",
  "key31": "mLgx6GYAsLe4tz5PvhAtm2uLJV3pQq4NF2UAmSr63qVpgPsr8Uw9hcSw3XKK8nmA2TNAY87ZacWD8txv125SLbh",
  "key32": "7sKKVRVtTEANabMmsaHuikA45ePu48iDL6E5RPcgmL4UiWNkUGaRyjYUDVqPqyrZBStfsmLr5qtaGDHnY25ydHX",
  "key33": "4A2UCPK4YzZ1X2kAGEjwMCEdveNrEKjq3ZCrW2QZkSszHhNS7hhSEs3w6N96HMuJBCPPVSWk7do5aUf42MjySxx3",
  "key34": "4vtup6Wpvdm6dBr7i3dRCPxg5vwkaKJ87hhNEx1jrnMyoQEjogSB1AyaEruNw3UMkLC1MrRnLPjQXdR6BP9aToMC",
  "key35": "uicc1BrqU1iEHv93qq3nSsrAmPfrr9uLuqT5xVxrUqUHqUob88MU1RBKo2LFnPqdQtqQnPbbiFn2tZS4VVVYUiW",
  "key36": "teE3ow4P9ZfHKbZLCrBkw6C1dqVou75zVW4ZLDRDnhGxa34L1MuaMpF3DCDwMbN3qBKS94nw9KTHYseq32jqJ4f",
  "key37": "2YstQUWLnrKRtwPwcjTxrQmrmPSBSfCefqch3ojCwHNJyK3xhSZUm2sBYUuBQRpein4BgG3JgEuGY2MKC8BHT4Yv",
  "key38": "4VkKLcUNvp9Ra8trqfJcYsh6sECk7dxke9hvPDQt5XYor6cpyBgwCYskRbiEETX4rE4AMBCdsMpBZgRLqpBhgR9F",
  "key39": "2iK5YgAw8op4mG5Ycf1hz8KpmVC562sPXtyKHeUDxJJ4i7UhdKfLH17wdyHmdU8a7pdyNuv2ZrccrRfKGxfrtcfw",
  "key40": "5K2SzqVicQjWjv8UG2RNa38WB4RCkFJzZuxoHKtLn5p8B95j8q4M1PSLSpPWiruCDKRo31LZtwAtwgBCpgWHuSLZ",
  "key41": "16L4hzhbB7aUsy5RaWEr3u2Bozfz1w5gxUvM3g5XSWypk2e9VfrxuLB6ps1z2AuJDj7Zbfvfz7dUTudHjiBo5hn"
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
