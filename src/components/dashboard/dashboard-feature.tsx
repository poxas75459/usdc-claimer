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
    "2EwmVYfB7kdChkwXcGvBhqxRYEVLCosz9zBUQQEPsgLf3DMq955SVR4X4StBAS1yq9MEiJpT5rRTN7T1ozR3frSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGkFbTDyaLc7zdEEzHhJ6QMzKY7hpdoHLGvuD6r8NAwSJJj89TgELKCoUQggvXifh8keT8EfPqyapWjEL98wjRM",
  "key1": "2TC9dVjG3Y383HXRg9dX8WKiRyF5izhmbGvAK3QSkjREt7y3GTcEmi88iSucdaRo4FvvXTadYZPxosyyhTsy1MBo",
  "key2": "3EVTJSX52ZYivnHcpKdN2WM95QxE87Y8XjVT7i3WfgdiPsBFNDBjcdEua4B2YvMqebsJZs9hy7XiBTiwtXYDcWAq",
  "key3": "269JcoPstBug7C2aTMyZC4sEonzAAbZmhmhphboL5pgQFLPJKrbMZ2yBZAtMHx2TfQChMyc8HgAUWzZ3pxBoHoeV",
  "key4": "4J65W8eF3BV9idMEUDvsDz1Qrp42qi2Qe8UL9siT6FdQxNqRun7nHVDMkmLcEe1dLHsmZ8m8igeCkCCT6htuyAUW",
  "key5": "476s4wVGcVFPatJ1YkgXDih8KE78TKuuULSs2LarTsMqYJfmzwjKXmod5AVwiwLQ9Gq6YmrH34BSpbe4LABn3aCz",
  "key6": "5UzMEwk1pshnbxFAtdjK9ycwMLmGXfX3LAKyB5kEa4JgVe7KYGCJF7YCU1tF3g9bgtHKgmMQR4vHwQmZEFmDkcxu",
  "key7": "jYWU2wZAyaWFa5GSnBqcRStRGfSWjF6yw9T6rJ45m7h4F8T63RZL5z5VGrJjrgCkCdLm1stjHssCFREb5YrBswu",
  "key8": "jHEo6cnkKmEF2LX79n3vNmUWx7YBK6uFRpBeuTej77pAwD5bi2TBJ5DbJRqNKmgNPxRoZAiaiEH97vET2ny7eFi",
  "key9": "3XUprCnt9ivfTPt7wzNFeEwfz8XspdbwLxBrEsNZpaHa1qTxxz6CmGW3EaehVLqBhmQzp9XmZ29KFWhqErVqbiRJ",
  "key10": "2S1eLPLf8MyqJHxF3VfwNz24JfgfHsfH23bury4hxYiHWNnpRHhdgzwUcuWZtBMyFncfURRYKCjChqCPqBzToov4",
  "key11": "6438F1E9hbNXJ7SqFVLEAskhPFDYDcXnpPpuYCY78QKB5YWwW89zzATnNufkkGyPSzaCTzCfgSsNHgH8VVcBXY2p",
  "key12": "5dZgQ1GHG1Z1fBFGDRHWEbvEHHop9XfMuN9hVHMRUN7mczspgCLZQiXCXdxbASQ2yvSd3RGvgQhaVComvEkR7biW",
  "key13": "2f7GwQzjhrWTQ3TdawSsHCm8KUdw12RWJL3VHUcYKBBp7Z5aATLeciF9e2fwpx4L3CqeafzKywgQwDy6D9d72ZkN",
  "key14": "HURirLvwqVZsFwGuxPNMbkmtRJ2BBM3YUs3yvRNqYNXtv8pH6H9wAp8sHKkPph6ZV8BTvhEvgndP4Q9rFXWXpUQ",
  "key15": "4o98dgr6sbFKJnLwo9FJRqJA7UZ36RwPSkzPsxccKTuSyf8a2URRTXSpgRrfisXLjL8dFMT2dCarAse6GrZ9NTjV",
  "key16": "3Qvr6PtQEvgT28LbPJPFFEDzk4XXzk8vFqvxyD8UQpeEL5vFeNbLXziywL8f3YmV8t6qVRULmKCY8odKRATNh1Ka",
  "key17": "5kCtEcK7VDF8k9SxnE1MKG7An72MgZorQmwt1B1PzWipjwqjKW4XGgdbx7UAGPezzmAwVeP95T5WmLURHry7h1Rb",
  "key18": "4hguhVyDyxtbZM7C9WTp7Nhc2D42rocA52zJWiJDAhbR8sG4ZrhdhLACKD5SuFCbHe7jCcPbKcy2oApm48Wpr91e",
  "key19": "TRL1GijwtA3DJ8Rgaa8qrfYiegtYveERmFZ5J18fsZkmZvWFDtLtzCNLpVEpmsSit6BdpSK4D2igz4x2pkZSroC",
  "key20": "3VRxpGtoWvWyx1dFkvUTMxsEGqCQjou8FuS6cEb58BkRWfMaVCy3M84dzZPAXGT4PNXttspyeJTFVs9mJb4W7rST",
  "key21": "w3x93QjqEZvydmmjUVifDfgWBxDox71QMrTBVoET4dR8fqbRjj4LrrV4G6ugSW8VifhfePcmsW7sHDPKvRn5KoH",
  "key22": "3YQRgU1VewZJBNCaaMHn6FzdzYEtk1bWWZ8iF44v9DspV4XfZkLC51otVXg3d9gc9jgSr68CqMyNUChkWcsPjVMg",
  "key23": "3VFBTSnAGTMtyMmHoTXERbvwTMpuD9ntLYm7y3QEoeQH5zh9RzBJfSJ2A7JLosZGdYaCB3X1MRuAME99FKvgGfnj",
  "key24": "JvMiWL4nUenQgvy5Vrp66Ukt4bjhFgRXpsCHw6ASXvJeu9W59tX4DXKJtdtM8kcnRPGXizZHvhaWmyLCtU1H5CV",
  "key25": "5bQEM8fSayMhoxS2FPV6WhRjvn8WZaEGDh6nSwjBJ1fdpFYBpBKFJqajJeKLyTPiv5Lc4hVT3fHkNNw7H8fLBkUp",
  "key26": "3AHaRBjNtpo29imZLUVbzrVUrHgmjja8v1g8b6wp7WGwuuo1kUjXYWc7nKxMKggaTKxsgWxiL3yZdLJXTkCgJWAQ",
  "key27": "2eDsVhucAaqZejQjXagCXWVRkpmGrxZV4igb5bPNW2i7Fp3tSDDsuskAgHXLXV5EpGeishuDAiphv7SjAG35rRbh",
  "key28": "5yCXGV2SmYL99CCuq4vzxXVLfVuNrF1z7HiGbgJgXCHXw6gCVbD7KyU8nsfEJEueN1dAo3jzgeH9xKucUAcsYe3b",
  "key29": "5JtK7yy7SeGwNR5rqyJsjhSqoSV6MmDePQqHGqnhF4DEVvBsqFtRb4C24FUmUNDWeE9Gf31xmYc5Q4Au6Wg4ep5Y",
  "key30": "3RS2xPec6K9eSewb887svQkfExxzNLuYhveqYC3zpJ1HBH2eWzoDx6FWm2wbhvdXmAhKS5d64b4yUyicSNo1ryt7",
  "key31": "Xaok7hkzxxP4bLKNmCoXwgJiMqNsftV6JEuvJYv37ceaBaz9u4nvQR8D2HGsgks89ji1krsRDfXmM7ofcWoJw4j",
  "key32": "4qkLzWK7SjiewkL7Rk9bre49YpDr67Mkrd53oZinihHDrvNKBcVBhFgSZrZ6nukrwnuYxyhT45noCYqKAPGQ26Tb",
  "key33": "59qkjHaRcstT7x4o8ncob5WeeWi3wamqrX3KvTGXVvmurWoEcCcGT2PE6cv6GMdtWhApMBtEkfEZ2HA3f7Udb2By",
  "key34": "2ZaFV6idKgB8RdSUNTeXrPGAMu6YGX9zfJggVatkrubfSNYpAwPZsssb7u5AxPbfu5n3Nng2nqGiAzNGScuYsnDr",
  "key35": "2V6nq6KGteZQxuA14jqY5WaGn9Y3bPVPu3tSWuVJeMxMrMSCXV7ChPZthkW9cQFaRdGgLpdt4yRCxmSxoHd6XZAb",
  "key36": "3Q9Yu23XHP9VxyrxHUrWXPAS8fw3XP36XNKWvTYf2y76r7j9PKnYEzJJ3diytomrgPiZhCb8watc5TC26L49vcLW",
  "key37": "2Yi9WQy7Pfv93ug8yarVC3UEJTe5RJmv9wq5ju3wYUDXLmQ5ZujtrPwxr7UShhhhPArMmkLbAqY9XRzwVDBLW8jf",
  "key38": "34xMk1LspxfM1426mABFWNqP6Lgw9L2nxJpqdktfNeXthj4uqBjbWu9T1A7v5iUAGx8wAGSRevNks9aT8c4RXs46"
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
