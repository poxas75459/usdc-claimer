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
    "3hbRqXzmuxeK6Pz7igCkMAUgwCFeiRTjzEKcUydp2fgJavsrF35LVmSLvVjMj7X5GfU18HEJDKnm883mPfrNvbay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyNNHsfxXKCwTiQ6oebHQKpHccDHj4L2Ew7T7LRo4SEGGw9hjTdWqdTKot5fbjJczxTinJ7Dx8SPMV97RQ6ZQQh",
  "key1": "2wiEyksAuj2kjeCRttRQU1zs9mxLzDxKm2PjAzjG2t4nsNEdT6CsctBputY5yAKF7hkCGJgcmR9C5XQJo92cdhwu",
  "key2": "3RdVp6TbcWjFx8cAG6yBdyt4bRFUW4XJW9NptqNWAopVaJbesvTAjiw2EfFHntxaHTVkFZ18i69tEj93QUuT3DRG",
  "key3": "382zTqEBrqCZgk12xTgMxuW8eCNLPrAPYZ6DZRZ8o3Km7XD2uHfxwHdZxRyjdhb5hAt7jbVVjtvxpM5UBXMsXsfC",
  "key4": "4FYH2PNCSNomKJp9XzqtGUkyYosndHbMBHYWirZfjLBAtAzuDixHUorijDp7xjUQGP3AHqHu7ThqPgxd8gXc1jNV",
  "key5": "4fmSD8njv9JHP47yhYZjCUzsArKzq38XaiqFE6TmuyTaetYjJA3SDJoVvfKQoanejUGTjoZujWqFymR567QLeVEr",
  "key6": "3uYNPgfLRyLeh3WBEGXuBCk5FGrcSbHSr99sDsEBVMxxicQYyP1e8P82uKQg91Rf79CEHr5pBBmQGmA4Wb98W1Xu",
  "key7": "3ioFRRXNVkcRA3EF7CjyTqBkbg54VQveop5TuR4NHxandjAqoBsMfvrVibHijpm6RgyrBV2g4YT6HK2GunqyW6jf",
  "key8": "38Ncs69T9zHbXcpoN9rmpVdW5mzcBCG5a2ZseivKmRN8NyPEdtbRtQ51SPCVLcmvmBn59cwAFikshkduYbFs7qPr",
  "key9": "5ov7CJrvBoSiFVb3nfwgXSuzarNDrru5MqQGJE3dPN1PY6quLSggtcAk7EYEfjSP4tYkmE3XGFRg5oxdJkVt5B4o",
  "key10": "3P7TVFmChBPyPkqcEX1bi5kTy2e929mTA2FkUYWCmW3QfbmeVZD5EadWfSY6TcHkK7VYzkKo1by1oMtdt234HkvJ",
  "key11": "5tMtWphantdMMzTwzbpsGhFTft3rK4LYJ12eiBC7CDkdgQs3VJQyhcW2cdwLt7EvpkzSdzS9H9YzLB9a6U7hDuwf",
  "key12": "57c6xCAkhd7NDavG3gQ93wxCvXTPpsJ2UzzjkwoJkw2ZJstGQiMBSfqxhU6PqJTLDuxAtPpWg2kT5Wj8F25cU3zT",
  "key13": "jQHYv5hfiSshDUocKUeUVvc38vtifAsEXrPBBDQWoxVDf4PvBSNbahMsPW45ScsZFZpVRq1mLdkY316o9seDrTH",
  "key14": "4x1yjwdMtLjQZqTwFTUz8RLXo6nT1pLFzZrjwkuUcxfmkH815Uuv5DURWkLXE8GJkb1ZWWfHaimZQhTMp68ypHBp",
  "key15": "5BeFtMi1hSEEumSyntUcP4Miu4F38XsazJHAbKDfdtH4jEGpjav1pE8TUzCG3yDi7vyPwZqpgv7NJT5zhqndFjsX",
  "key16": "3X67MEJ5r9HjfW91Cgq36xsyPPgCHEDN44JJjmbhsvrMcPnTymW8zzacWZe66quEQfR8tiwMbc7Ee29Z6g1UB246",
  "key17": "5RJQJYZBhGL6zqF97vzds6oG5dxN1aX2szUwXevqzYoJ7MvF13ve1XLMY9vjxG3Xovik4RgW2h3ufgng25AdgfqJ",
  "key18": "2Emd8RmoWLx366KVWQcnerFtFV2wK1wT5P2RxqmdvCSVg8Cw8xwbtkBSU9KLxficWXGbd2o37qEAEi1ph5NeL8pL",
  "key19": "4tBujftBYJSJpRAXQ4Ss9enq2Zxc8Dek7MWb3jU7tFZhM16VSeuQtCHF8569uhXne3HR9XAm22L8nVMJde5uR8ZB",
  "key20": "3KxCbThcLh7ctZjm5od19jFQWqik2Sj5mzxsk7wN9CeiQNYMQu8RrXKnkJEwFULdQeXDBt3ZCmmJbTDJpViR1kbk",
  "key21": "5jp2V5bCBp3E3Wf4Qrb58Rw7Lzwdx6iTTpAP1swXyuB8i42sUNXiKGcDeH9GN38GVxSc4PHRipVxvZ5RhPY5tCsf",
  "key22": "2NcwtmtehzVpawcpdtpaggrdozqv6XJnBj1QPbVwgThPLWMVm1Z64AsYdVnoJ7k4JNGXR21SNe121EfVnZv1VTcA",
  "key23": "3KhX7hWxxL45zDLwAiKByxwsGSK2aS8FtKQHRME28bDVT2eTC3g2a5gK6nnrMcEZmUf5PrkKaFApQ1osLgyNNEMh",
  "key24": "3rkhsPhcYv1TqKxwrWd9TU5hy4vf9csaKKSh2pXjhEWFEXkYccEZtoEVtCkYkR9njNDxhrbmG5husDypXVdfJEnz",
  "key25": "rsX6zJYFRHxbkahKDnnvHYe2zVh8LYGA2PPjeDDKtDaLkVcEKdU1jnYp5TNnYXK8M6BFeqvMUY5PJskxMvy1ry1",
  "key26": "52a2RduWdxQyLdVUMDfi3cbLXnmYMbDWzbWw2ERea5iFt3zKkKo53KrQdnMpdW9dCCVqRcnBVWWmZLu5Haskiqed",
  "key27": "5BSnuDCtwmzoYnYm9NpXH7uvta8djBXtnsA5aYuUGzXJ7innw55gugTc5vY4pw1DgdZ91sgxYruW2PwaAKHGc1ZJ",
  "key28": "5A4PdL1dUHDrnWTYZSJQiM4VQtffzmtFWyPEJzB8GrxX22EohYPyeBHEXdjLmmLQWkh9v3LRVWi7rmVFgNdiieT8",
  "key29": "5mvKKWvTPCkLLiCcqHSYAZENAiyR2tSXrw1xqLdPzpc4pBGhyf8tCpNUTYRjmuuhZXjq19ednpE8p5fDvpiacbTN",
  "key30": "5TDcLQkgeJpy9XA444XpRDWCRViBnBM3zci7fE3dchZxs7N3EePyDC2AGT8i1ZzXaRPe4znJs32znPvQCJMtXbmN",
  "key31": "CNzLHDmYHUiJ98WCgonsVT53FPv9JrbaXm87WX4oRDgQadyb4n94vpY8KrGVMpFnCbXaEBr63WFU12kYXzUE2L5",
  "key32": "3TH8Wxa1WqaoxemkADQZSjFXsJNvTk14SPcuh23XQDtKPn4g95gjmLimp49asbs35KtApMBpd16LgezdVjoiypkr",
  "key33": "2m1r656CVNsU3sTwzAJLuaej1E9waTh1ridGDHj4X4YNENisGTj5ykWAVTWiYLyxbvwMXX8KQYEqUrGdntDKuQ9o",
  "key34": "3natoJ6eHEpocTiv2byJ1rKdUxSZi1cns2241pah6YWBeiY2c5nMbafLHz4vMP71EtjBhuB3aDP6hudP9z2H8mp1",
  "key35": "VrfCx4nUWeqqZka14BnZTewyNWqZVcBoXBeyGAxYfuZNJ1n6xymX9R16ZnFmzxRePAY1M4TkB4DHrTYUPf45Xbo",
  "key36": "3tVoM76dhs4TPsb4HeahuWbGHHLSR2R1KaTvbYYCTbGTtLQLAGCv8Qgmbdr3ddZnoJanGFh5w97QC64G1Kz9zmNG",
  "key37": "34vcw81qQ3NCkjGiChCHYbmgQ39VBsbsqt2NtyD2KfdNrkXszrt6jkhyJLazj2am3S49LkjgNfteQLN6F1KkMuys",
  "key38": "35QF4mnvVpHZmDoJ3ZnpvuACtQALrimY9pDtfcscVm6Sy5dwrkjgWEop35HizhDcwxsrU5FKSUys3doUauMjewCe",
  "key39": "3gqaBPLJ7G5ZTrRKwRMkWTf3XX4QRVyiwRinajeN4iSrhqhSiKiPvUZTaosC45WeEsBEQsMt45sFeNgFU7ZyYe4u",
  "key40": "4MDedcYka78uwrVAQw2UTbMXXUppeWqw7pcKpk8hg96Qs1XFf3eURKLw1JENuZ7Gxa28ubrPYfNisvybkZGseKmi",
  "key41": "2fLZQNxhsq7omLcjFCrLLTdCcaNHNTLBpfmvGZEAr5gY7aDTtdPqyQKhBsV6ZffiJoG7Jd6Tz7ZbHHcoHaMeuuz1",
  "key42": "5KhqssbR3wg2indTeNG3c57USu1G7jHaWHHUqauHcgvAVtvBccb6vk2DJ256HHndRB3HSZ6Eqj9PuGtu8nn7CTDp"
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
