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
    "VxL7ja8odd87mraSowmE1dorbYJe5usFUp2oDmq1bge24fWJhQ3UKKYA5qeU6R4jgXdv7bYGJ74w2RQ5iqimKYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnqcXEEjeNSAbar6zhJFNjB6MCwe5wTxZZyoan6r12j5AaukZV94XmmNJAtGCT4CXAuNmf9h1kjaawKSSgf1sWy",
  "key1": "3d5KaXRoEhnqjgagkvXVCxKXtJs4gVrJuoEqQL3vETY5RyfWoQpeW6dnkZtfadJaxxUaXjUkg6eNLz9L1GLGqwFR",
  "key2": "4N3rtqMZgHSPUgQDegfqxtYAQzaqfuibfzdXCU6qe5QGLBiN16R7iS9nYT95J1EsRbukGMPsrrYNapcaRJtRwmco",
  "key3": "QNhszaVgEVmiugfavejDgdqiviaLiu4a2oovptCXgy1KRCqXEM3mw7zoCM3K7BTb8zmoMobGXT33XUycUmxJQXa",
  "key4": "33gEf3U6hKojWaes5n8Fo81hgWsxMmoHZArbMjmEJka6T5aEdozhJ3boFRDksk9RcTs4WX7j1Ku2biwSX11HCd4W",
  "key5": "4fxTzyqNZRmXrRCTMBxfBMAqeotzP86YM8JfRm84NvaZkZJpQo8eGchABJ7mzyVPGhEQNNd9J6CWkcqUvyTQGUfN",
  "key6": "4iD5cPoe73VPX9Nx1TRev6PvVizW7NpkQkELSPFwCDu68FWbacembjAD4wVLESAuK1LnRxrbzudJRcAn9r9YKyjk",
  "key7": "62mVShDWh2fTDg5bmBo1ZDFijJC4pEJva5ZKH6SDxy5wGLBQgpD1fekD3S9omVox9axFYtUD2xAb3jbA3FENLH32",
  "key8": "9cWEBrVJbff87DSdbXmaorUAbaxFgP8X5p6etC8chzUG2KLth2tgPxMqkLNjC4Q9hCFTHdWe5FYyayM7sQuviUX",
  "key9": "4LMuYdNrVT85bNUm4mqyJ5A6b5NFq44DzBzjq5gpeCptAtUJ926cHF6opguNRC8ULMUvtZnP9Uw3zwHdL9TfFNyV",
  "key10": "2kD9EcckAXUb41cbmJTXVbGydfrK7obJBBKoo82D6DpMpdu8V5WX3rbuvANDAKEoqaC8ZF4o9HuaywAYdcd6em2d",
  "key11": "27ecZ9hkqbZxKoCmgRF4nroNPAJQuufrW6buT331AEw6oPpcLSsLqkjPsBWhXuhAzA7zVktYfLrbh3V6xFnmrvWm",
  "key12": "3X1DvPx34WYAWfcFa3X4METAVosCfLifFzJbzEpzp5MBxgaqC87GMq5nK2jo5tqn6oh92EuuJ22a5nurQ3Y1dseR",
  "key13": "4piGEkGytSP5dPSpUsEcAb4fyNeU8hkeLbBfTDpgR9tkiA9oNT3Y9CRQSGtdqN59RuP13YH8fTC2oBEAKHHWLNFT",
  "key14": "2hm3Y42L1wj9zsyGvzKCuYgN1g1VqugFhRrBhJK3jhwUy7EqmaCryE6opsvG2cvz2K4h9QgPTjfbp82eww9Ykt2b",
  "key15": "4QanqUN9zAxR6FXxanaWAFBU2vSkES9XhEFBW3GVr9Mzq7tPr3ZYoaTKRqDuf3LNghfh4yLrjVsU3tuDtZfjfHF2",
  "key16": "xbzQA6u3MikpZUGJUe4whaTb99Z8scDCf4xcwCSFCzw3vg1TS1LjT5PcArDfVME39hzpJnC55h2TgQ45X8YwExh",
  "key17": "3FnMFP73Es7twykfZYJarGU7Q7WUDHy2DaeQMzAMqqQWZRXzDkGwyyv4Tcc3tvkBuY4zSeT2ho5SB4a8zWBiVHx5",
  "key18": "wUdxhA8sNq4MMwTHALzEQB8GE5sHddvZ43N1xbS1g1HfnmT7VdPST84CfSDMDxsQcRH4KMdBxz1QbFoQ2Gsnxff",
  "key19": "4dcQELVj2o3saxmM5mkMXDUfRTQjD5a7nuvwG8pnJeSkiRjS9t8k1MoTckA5UDEWpazTTVrzC2YBENMAGbYLtNNg",
  "key20": "4YWNx7z74v8jVeThFaz7wkT9wVd44DsMonpPXXLMZA3crwKYq4v9sbgXemPP11hN14KmBgoKUhYPR5HMPyNZhtun",
  "key21": "4AnZjeJ88NbYovStK7zPGxPP5L4Wi5vJxfTjyCKBJDN8mVYxH3FQvnRRKYnb6qRBPUY1qd7JDGWhXwazJ2uzeqn1",
  "key22": "3myXxVhpwUM3hLkGc31h1Pct4DRdoMENUYyPf4i5KZ9LpUDTzKM2rf5g453QTMmWiyBDs1ZoJ7s5fEE3cX5KBV4C",
  "key23": "5Y1sym7jXax7K6inQkQSgsnLT1fdR5erLXH2hMbgnmbAzPvp3prxajXoostSW4SzCeDX2kPfajvUaWF6qfa1om2g",
  "key24": "27fQvn2xBN3QP8BdppmzMcHSNiJnQ7UTah9t5yEajF4DA1oMXSDsAdaCeYPFUYSHzdUAPCwEnbJBLxkWiSLyJpkh",
  "key25": "295Ayv1e6zNfJWCkzjxT5CNPkuKv4GFfBrWnmvXjjxUMoTq1G9zEjRsSGuyFT7Ec1K2kB9nkv7X4Xa9AXuFgDjhR",
  "key26": "3yiuZXXiDvjcXJbxR6KeqSPfEV85zEXFWojmocvN3pWWZ3kwZcPaofUpDWjXpsVfaBBea4u8eVTGdkMBqxXJ4G6d",
  "key27": "5MysPKuy6vkRohcNswrpeUxnUqrUvFk9YVamdEBYhXt2Bm7NbS47wETiipiqfwMbVyoJ6cg5JDekbh65oBzLNr4E",
  "key28": "3prmCRaFjsH6aJ3ScivJyHtUK2cASTVRswy5BM2T3nXe5H5sqLUh4J7WmNqarAhHp22ArJpQmMSpmLiNzcUm1MUm",
  "key29": "4n2hYCsDxUG2ZMw4scYfkEYcpLbPamC8wtAJaXgm7mvWJuNRExgW4VAstvFhyDso26bYpGTBKyqQFVKQpyZ2Rjkm",
  "key30": "3Ss7887D3kzALMQfkpq7z25pD3c5TfKY917aEH3XHRkRFoWXZiYz6XCm4m6JiNQvjohFcDvzVQMgwxk85pLoCmj7",
  "key31": "3VvVej75HmGwDjrgxwsDwR2oJrLdtGB8gG81aHAJvDGFg31dch1DA5diCTncXn4cvC6TuDCMEDatAMy1K1gH712a",
  "key32": "2cYLbX8xRZKVp7pM7cLVrHuGEjY4Bt469rmceRtAkjoFCeMmHsZBooAQZH2txFpqemkS82tg59hJ7ZjKcs3XC4ss",
  "key33": "4DsadQjkSXgjzMbzjztBGKYF3rw3UQRkutQy1bngD5XmEv1FFJGcBy9sxZAkQVqmnVuXWCAKRn5aaFbJeTq1H1EN",
  "key34": "3KhgYnh5J43ehVs9VssBiTn3qCXYHrRaLM4duRMbdYbzxmXapmwmnuyfLFHFbKkDa9yf2ux69dfD9yeMxiA8JRar",
  "key35": "uxvhA1F37bDS3DmhMyb8rbAY1VFgVjzeQ2jEDuit5pv49x1wUCf8D3KEDRETaqoCt7EQ8dikvvU8rTdfne8YCqT",
  "key36": "4MoDNjHub3dLVL8deTT1mmZ7oeBfypwP2XHkakLB7CL89ZNEPiMEJ9JGVEEoK8E1YzJH34i33TekvWE1BYes4xuV",
  "key37": "51kCd3j7p4PRD3fPLaidXCMSccyY3RCZUPhKGEVa84E89MN19HxY4MhqsBThewgEGPzRb8vd9QE1xJjWYcMZWddz",
  "key38": "3VEgJc81L4VCp2dh3HGsdGBiKEET9DWAz8h3GKoiwryzWrJDSWCW6yeBRVFmi2tmrwvoe8bYgr5B3wKHjHtVeT26",
  "key39": "2ZCYeexmzcQpQVXRWrWY2Gmc6wLj8Wf3MdBaNa6k86J687sBSqPPU4f6n2ouFGHc2Fhs73r5TLWS3NuJ9pA8S5Mz"
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
