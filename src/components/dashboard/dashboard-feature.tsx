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
    "4jabi8LoK57axCHTkohV9jTEPPQPqTZkFsyuk8yn7vQYuhApjCUQDzVnhB6rZeu3b8JjgCbE3NsKyUfXq5KQNtND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTfJk2oWrnGmQLbAKx74hzqoinCtgurNVZahVgFpLbNmGF5e7yp8nfeKSzSTeM5moSBCneRNQ59eLvncb7WP6vB",
  "key1": "2kSdPyRcZGYiBwEsVDi1sSmpJZLci8hKgQvsTWYJYM8P55tqovFkPdAeXAowpTo42w61vhZyPauKfTHAUrBRRmHv",
  "key2": "s7URqhbXDBoF5emZkf92Yyr7CJ3zzw7QZ1h5fQ2zhwBUN428TFe63sp7VNufLAKLc2jeRBRdFCxgHb2BEMMeRSr",
  "key3": "3dSR3qHe8nVrRGgBKtNVbFvYnWuSK4YwenxaipAD7h6Mb3CYdjcxp5x4RhvrA5pEiR6bomMCmAWm97nZp6akXLNL",
  "key4": "4drVziptQ9xJR5VDqopXXjVWJBuoeJsyfpdFFU4BbFBsHr9tVwkEtzojHNgZm4Pk8z37kh4B1FsTajnMRUa4W1Po",
  "key5": "2d485YtNbLvNjiTY7DfUnoXBzkGKcJJgL71JVgCFA35UC3NTzsvXSZTdKejBrzF8YPbAx49GcV34WLFZqaZKvfp8",
  "key6": "31LPcem7yo59ed6uEY4ZL9YFPsUbsr7GtdDP8M5YDe8Mv9FB287Q6nEagQ1PZigDrfTT3z8fXSNC5LTTtEXzABo8",
  "key7": "HjZ2zpYu8rtMNaQR9yywU159VpEyxyW5HZySEMEXBBgx3SXyEPG3r3h38iUvxLE4cLcoK2KMEwwuAxvuCcy9Wn4",
  "key8": "5u6AGX7nYFTKE5HthuUgM2HhD23x6fSWEwtqCSLgTqEqFraWKagVxvft4JSc9NaqwJB3ePDCy9vKaZXE8fJWYQSa",
  "key9": "5jmabg3JQvVFpMvfRyhGjTjjuY4gLWujkBS3SmRzdEMGxeoKG6WpGs67WcBXfUnTJ5VKU4NSZhSm7D7RkWiM9HTc",
  "key10": "3W8kBBGRwwYi7oUuAgqEXAcgNBEHwE22T5uycsPHFvLSj3uAnjUnwEM2MbAWMgJ4Qb2uQ5auNoJQ1aCLxc1fScig",
  "key11": "P4pnh8bV7K8EjkHdLa6NMrAK9hf4xStmCbm2Gm8P9fdsSGYcDvPuUUvZf9WcnkHfsnKz7Ernbv9BXn1UGSndoRw",
  "key12": "35k5rdPPN9ZFaQc5TNPeu6DUHmnnYjWx7AbNBPycXnbMmhCnf6KiseHNms7kagxi6yz2H5UxGTdAvvdWAGSZmDcd",
  "key13": "5bRWvQLNF6jEtMqndWnqDoyYrX29GEKC1ZcK8HfPn47ihP1Kma8Eh7a4aLnwdA1h6czHSUKV3itRFJsqHVcSvG4A",
  "key14": "5vC7NcQMrziL6JT3pctNpRP8NdNFxsVsw2nyPmSSkdzREGRnnRViit7DuNiS6jrsazezpiTcNJv6Dx36Ucf3Jyg5",
  "key15": "2phTeE7H9cDFyvQ1ogD85STiux5mHVLxcZHMK6bNcNajMCcwa5T2Jj4UrG9nPgRsMkWrYZUgz47v4FT2gdnUQRDS",
  "key16": "2UhdPGbVkPjS5Jsdj1Ri1RmRmxUP51DYrVsg92jNRC2vAKbbMijT6dMEFN7CbM7e3jEkJPM1gdpp4iYVSmoLgFEr",
  "key17": "279CpKegAEnGyQESi2Z2p2fE9ccEXdtf99DNSg85D38BVN9GxD7rM6ungFVLcVdB4i8cLmUnoxhe26Np7TE7GJQS",
  "key18": "4FFpci7XGZqLWzvvNVjm2pVL3zkxLUdB2pmy8JPbiwhodGBFnZeuA1ewn8QQfZxu7pDPa4TxD1TyV2g85mjbtwHB",
  "key19": "37vxBka2cvAkEg3bcVE4S38qkc8WZQhGBrzwezzCQ4bC6i1yvSHmxHwzwNUbqWGrqcZHibgL8LAoZmDCDUp9orxj",
  "key20": "23NfBRcXqB26pWCE6TftSCGerjLu9GUK6RLhtGA8zSYAzddetd6UfBNuSCencohMxUe1tcnvoFmVhWJs41QK74zq",
  "key21": "5VNt76tnQPCqGChs6pfRnJsP3zQssLriAPACRnhFEUDpZDmzKVCuKV6DEkuZKM8qfLry8GC1wxZ8yWwsC1fJrNbf",
  "key22": "4f59Pg8SjQweHhb3ZHfQfSJevpJXJ2KPTv5zAB9rKUsxXQprGXN8tWoR3P8HH6DLfAGkFkvthoHmX6R4NXinMiXZ",
  "key23": "v8qiABimCmo6rieaXv8MnyckT1ZPobZugFRHHKth7PBDvC24E6DEgGU1Zw6eiiRDs6XV79U1EwscHSQwVDQXyou",
  "key24": "63nbUQwAV6uSxUa5nXPqDv4BsvkVHaFP81uzxspHnkbWb74fCrPggBNeA9TMeK72R1aoAUkeMpbxPd6TGBQehsV2",
  "key25": "25Bzb8yrCbH8DgbbMxvd5j3cu8FyW8aXFwFGeRDNFLcR53VktL3cc8eUGRmbTmFP2eCyTFYA5GrXmnBRmqzu14J2",
  "key26": "674ktPNtmKgYJGpb9Pkk2fFB4Yvs8P5xdxjczuYdyUoxddeCecYMDc4tDEH7iXKDa5nu7scBebEdredAe1CShtJY",
  "key27": "SSqSqfZGHGsip8fL1Jafy6AVdqUSpnKjBPgGgYgCvhiH8C13gV31zmAZ5vMUwbmA9E4tA1qh1bdoYPF9rmcXpNn",
  "key28": "5SMBUAFDFLoHVp7MmnkZYhuQqnhmBwUAxsu5JYW1Ei4fSGbeTFqGx4pXSFquTx74QFnpETQCLw5oT8k9eDZNhnbU",
  "key29": "iZYZcMXYHR77iZERTp2kfyiYBWqk5NvT3vrpYixRQ4iAG197XhfmcD4TsFBTACuK5pV5YFH8HPerbXFpwVUDDGt",
  "key30": "Z6sB9vD9tvQNUQnz14W7BG72cfeNw1TqDfki5mkoagQdAuvuhKDoLVMpy8yV649ZNqVw1tVpb2hZdLroq5QNvCJ",
  "key31": "5GszwBaDcccePd7oQR2J6H4jPFo4VXtcCZJczLZmZ5nfp8EfwZR7SugsYxu1uVrjxAhVtooL6JcT7J26jRwz7NqG",
  "key32": "2vGuSwibS5pgEEQpJzSXpJjM5yXS7zseS8p3BGdLHGuwtzQUkQZBp1gcouRHsrC7NAdX1HonxXg5VFdnMpUsFBeP",
  "key33": "32GrpRExkkybLjck8XFTNc3TKw4PEjVxEGauigrSs2WNSJdjZDbyq1nUCrNGuujZBHoRk4eWhAsUAPULxRJAsqno",
  "key34": "4hKsE2yNtESPS1YQbVBBe1mMj3u9xZV5sSEhxn9WPyYzrmVVmvCv2GtNYg3k8X2XZJ7waM9Em96pgtUtYek2HEn7",
  "key35": "5Puq9PL7HPnpsp8hotiyqFBFKEdaMgtbZiPzkFuH6oHJ9Vd7FtaXdu6bKS73QCTv3HjkcGrGuo52Eff6T2tBycA",
  "key36": "tw3oWmwqZAU2oejDtkr1cBWw8A7mpzkCAakSar3QC4Te4dfmsKPD7unoS2vN5c63cGarNaqXYujzdBS3fkpJeM9",
  "key37": "4ZMHoS16FTqChi6YQY9Y1puRcUCVrG446vbyUDC7WfmRqBE7M6Xen2H6Hujh93eyvsApFKprBxUefkJZ1wamxXwT",
  "key38": "nTMJ543G4Wh8vFJeWpcPWqsSnBNkroSByie5LZTSB6At9nwc886yxm9npL1fgiGPMxgN3CaasGUdnZCH7doYF6J",
  "key39": "3e6jRNrmDVXTKTfy4oLreDS6riaw61DDRv4XVLvDhn9zpfufPDiMqTgewSW3Ja58Hft9hW167TdHqskm3hQiffAg",
  "key40": "bxeWvr3oVBMNggFpVhpzdEZQuHveChADZTjvqGxt3Dp6we3GqiPnDRorDEQEkcAjEJELz7UNYiS2QDSvN7YKyqd",
  "key41": "3qih2M9isgfE2a6Frkh7nJov5fKLMoe831TinsJZuxJu8WGrk2Mj9wZWC8bKxQbiFuVXC8fDsXapC1wnW9JgYVvy",
  "key42": "65LP38nfdr41Wbh4qgJAebe9c7sbw13zB8pm46MWECdvRpkzmx631SJ5wpyHmPC3tyuRWRiHDGtuD5RqZ3XhCL83",
  "key43": "2Ed21iBHiEvnE9GTkEzzZCUreHYdBpmj383pa2PnwHeHmWGjFbYQBMHvoTHU1msn9dPnMmZeNCsH5GxFndffhxZ9",
  "key44": "2PTrs1gsSRZwGjFtAbtJAJCiU2anPeT9BgbQXXWJrmmEGH779Jsi6BdrkfgB5zpXMR37Q5SuRqcoNeEH7StCNKjK",
  "key45": "4V8DeCvqstBiwpXW7cf11JFtoU2PU6j7iBj9aQQHpouEsnrABpbjhFtQmDsZsxr6CVCbyd2Hb7G9Rjxy5yb7K2QF",
  "key46": "39EVN1Ggfn6m4b26jyFEA62KrcyTyAVLDAcnRTHk9StLM4i8wfccNVt9UFyjhqZYFtjKLgPWo8VW34SDJjSFDr7P"
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
