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
    "4GyDXi2vwSG5dHikvxPD7hmjHmRQFpHdc8ckJHhuNYud4wCP16YvENDmiE7SJLx66QJXKq1MmJCeo9jmVDPK7rEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZiGfrxtQNfg3so4xUHgd9iVTpKVa86uaoWWFde1ghGz4xYCRupDSLLccUnjxyzBmvhm1foQaRMi2kxx6XKP1utQ",
  "key1": "4fe1yYNLsBZFhrj612azadAqzF2vko1t1VQhE1PQ5uvG6MnJVskh5ZW2gt3EqrjSi8gEMdTYkw9TjLPgFD96D68c",
  "key2": "6bKagoHphRGhkvVFpkBMbjmjJjjRsNXgH6W8KaybjULMtUbVLn9BderEx2BERZbrrjkuY73ALbtxqygJD1ALyFn",
  "key3": "2P1XjPR4vMPintfXE6php94fC4w4F7m5UFYbVCX3PKcd4xLvg5mNMfRhBr1rCoX2v4ddDDSKn576kVc4ZYeW77M1",
  "key4": "2Yfdfh7RnQSngo7auux6yzajcNk5vjfS1HR4o4cWismFpP86UaRRDY25J4899FfTQefCodThEDatQhxPvNUaorjG",
  "key5": "5XvumxB1KaZ4BuxCNQMmZUwcbkhRT63fndK3Mz1fGtSytNBBrLZSRhwP1EphE5b1KCRfP51uMZ5oscJkrNVHcgvN",
  "key6": "jsL5sNCFJLWDSzK3L7EnzA7TgAe69S7XeTYNJtV7nQqCZNbnj6S6iPLMNpLr17M6LYvs7tZ6RQXvpqMfphRnk7N",
  "key7": "5kynfFgtb9QwsuDmaL8TFBYLACrXB3pytXCyf6Wsi2YD7rovyjnMyYKbXMLqTaKo7KAW172tRGN3rhuyY2LJuKQD",
  "key8": "4utjkm1krS5Y3jAjPNvHESbKYfuonunfZmN7xAZich9XShwGwwaLB1zkXZRFXkubDXnxKEDvMXk3we9T6SZxN9vM",
  "key9": "5PnsJXUgiYLmHkFDsq6Qr6XiQuiTbsRd7M6K37yshunxzvdob5t8i5wXAFLQXPGHpnxboc8LK81XmYREreiZyWaf",
  "key10": "3NaHYwrBgKUy4wVQpWSqoep6aTeUUvLzUadCbJtFY5ggs85jaFJcQkhKv4ne1CpCWi5tywBpGzUpTvTqWbnjEq9Z",
  "key11": "3trmMfjU9TMXxeib2qWhx81vqQ81ZmfW5DaTUebWByET8HafJS3yxrzDkrxSJVnJN1mNTtAchuMsstVh74HNUKTN",
  "key12": "5GZ7LwFDAWYqw1jRKU2MJNyVG9iGb1gaivpUoYYcZukbYAsG9819XXq7v4vg6nxC7X2AUepJrPHMrWnJbQYWyRb2",
  "key13": "38CxSWgtMifnLwirQRkMif7oMAm7gcCk6pzFCUXYHAiGzfBVVfKv1wSpMUVcfnpXRANMyKsbtZkLcnwvFjakoVZ6",
  "key14": "643Yyx61Rje4756SAdLhxWfGJXPEK5MkuHkpMzt48iowjTDhSmCgh2gBAGLrQcuasCBZfhqfNUBKyHB6mvkpSVk5",
  "key15": "5VBcerLffJNmQydBReKr9hGhuX6F4LDjXWzghbewv8sk4rZR3T3SJTzdefe3VKrvDz6iyGnthAqReU6HiwdABk3n",
  "key16": "h2BfgtyuQ74FVapYwW72GiY6YaCXSfmiv2Zr82cPVPTJxvChYRMQezePmfReqhLswizvpSY2JJhf2q4oA89Ehbm",
  "key17": "5QRiQtj879DLSzAEvsctymP2CkYZSAXFj7ewaY5ixg8tSzepNbmyPLCAM72jJuLrvdW4tyQ8vNG738hXyvhAGiLC",
  "key18": "25seoopQfWJJ9F7dtoA2oy42mXFZ1XJE6mSzxoDpbEbZJz72bEe4Cf4A31v5indCkVYMpz523SE96dviKFYhq18a",
  "key19": "3SW1ze2yrwuihgSkmzo9TSG4Jwi1usF2Yw8HvX1psRMa2eDh7JFxMrWPo4pojCLpt2m31KJKCZUS2bXR6CLBVejW",
  "key20": "4VdhK21v99NQfjkxDiFetQBgjy4kBSB8deu5tqWMSX1paam5PDkFnKqyrZUmJsTf3pVB883BNs5Dsg33HzPHFde9",
  "key21": "3Sqs2U4xHf8foWQFEBFJPmG9dFyGMJfbqW2Mi7rwcgqifyK5W6ue49uBGd3yswxt7AxGwotnyyRAqE5F2zmm9tBb",
  "key22": "k4isGnvyzykLEBZcNUvWsQPuMeGoS3P6172jHsnPqa3mN75vJxX5Pd15Au1mvx9ZozHrNJdHCabxzzgcMAmaSEs",
  "key23": "55CoMnNsMZmoDn2fwh9eaH57U13c1GgooUfNkyXTy49YcMuK6ec6qSK2xsrR6akBrRLXj3HVpkSUYnsQ2TSGXH6F",
  "key24": "2EdHZoS2Uk6aydhZqVUogdLWXbwNeM8vsuj266nnvaxGA6SFwttU1KxnhWE2GeWBE635cuc6sqx2eXKfFV2RdwZj",
  "key25": "5QE9GcTJcg5Ef8adht22X99HpkHqKqMXBnZsWjqhALRkp6eZrEJE77ochJd3VMbsovyKYG73dBxFWjwovMGfKdcF",
  "key26": "27oABMdZGGuMLepNxpBYBb3ML9ier3NPrPG6VFWVLeRv72n63oC4KWvdUPqoMX34W6MdvTWpVUfVodsKLyVoaM8Z",
  "key27": "3gLje9ijQKvBbtHM6iWbStE4oA97kHKZ2S6BsG2jMDywwZcVvFajjoScCaRgSVe5kNzuy3fzVLANUFuYyvEcWxpJ",
  "key28": "3RKn7yvDfFgj79pfaVDasSZ82hNjoDrQea2eit9CUFuhCiy753TTd5yBPKSJn17fe2GPQNXUQ14mNJ25Stp8V4fB",
  "key29": "THhyVs37kDzoUrMT52ZFbNqiVSJocyZSQwqKMaMscmhdr33PbwNiEAdnp5AW9uzEC1nwft7314sixtSzc9ey3hN",
  "key30": "4vrDL9kkV2XpxZQUANUdSvgEUvX4nPpsCyXU5inQv9erqZUzS9yEmCrhX1CLstLfCXZJcVVYFNE2bdGbL9saKLmx",
  "key31": "MapSoeCAsRXvHQSZFcJNtmvEse4BERbvEWMGeGKWsL1HdjRXsypNfUnizvfufduV5j2qdqH1B3U4oAFNbAk4B3p",
  "key32": "4F9UDun9suqm6u14gMoa7mtnBJmkVgiJ1CytPM6MURa49h1LR6RyTNKyiZ5afByrMwt1p5dLczsd28TJ6QyGxHc8",
  "key33": "5tUxiCBvJz8SCL47QJjyEPSoYiyUc9d4u3YfaaEMUceejuq5DQt4me5NsRw9rEpo5eLxZ2WSePePKE7pBELdyJEg",
  "key34": "2f8GCZjoQ4ev4afdKyEVR4AyA83dEDpw8QgpyCiEpWw9pHiQvTStuEhzBv1hRcntbpjQJtHYc5X1eU5nWThJgU8F",
  "key35": "YYmvrjrPPYYXbSv5M1QyjENbuPpiZqUXj2HAsChEQLb6vGCQSkYj1wA82CT4QajgKh9FKosNRLwYWJtqe29JrYd",
  "key36": "3pDxHgdEs9q3ZsEnzufyLSNaWZ3tvscag3PXdxr598mGGRKedjvWePdfwbJcqXKtB2LBBXvQfibMDLjhY7FqDBWD",
  "key37": "64qT3CMbGN6Q3Wnk1wsUDNqaBgm3D41u1KNuvua2FFR1Veui18bq5ECTB3qm7fnQkXJHTcCHtxjEVfizXCZt5yeF",
  "key38": "3Zw5YjGuJmLkNZhGHQapaduABGcXKwyuVorjxqQDjo1nDz7XUXmAKVnhfJBiSHNscqTzJuLTgmwuaBmk1ZkVBKBX",
  "key39": "2F3NMRFnfqbjfzzfupELJyq5UKkJFfmbMZ8arXtNtMvXAi7V2DwJZRPHDKpZaiLBZ7Gmz1NjpkYHNE6Uy8MQb8hy",
  "key40": "2MHSmLVGdFimoXpQRpV8GSUTkkupExxpaoxb997Zv5t6gdmFHC7ekjV3UtdqNgqUGzHP7mUJyh4HkF4nX1M7Vr4Z",
  "key41": "5emBMFEJybuaoVKfNDXFPeUEx9Yo4hggaGCjv4kDqcWhwikvcpyb58VHMs3Jc3jG4TLFtXr6uP81bxFSqem9uCB6",
  "key42": "3M5j3E594z4q2VLtUVn8DVAVDCAFud6Ek3C6c7EiTxqJGCpHPU6bWB978HXoL9W5TV1bJCjfDrXKD18eY488uFDT",
  "key43": "2tuJsQQhr7gaLWeoiQqxitCn3CKZa5vSdBzg4fAgemVqKssU2xhLJg5HW3MrTZ7eF3fXYciw67zohDhZ21aA9Z3P",
  "key44": "dkXeYMDGmYgjwBzeJfXThHN7ZfepdLnP8EanZ6CEfKWKN8v7oRHM9gnyZT1LnD7EEpWdN2pwLKrL7vECywwjTm8"
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
