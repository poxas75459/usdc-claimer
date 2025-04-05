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
    "3ETUHkCnGTysaAwS9xMYfhiUPMqSZ91pUrEAgcFNfSMofeuhEgfurTiYorNyaASWpfAgCo5VW41R4e2Z8csmpDtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLUZ7C9HdWG74gNCa5WaRL55AMjoeqVKQ1w31iefVtYTuT4qTsbA1fi3MNbXwWfn84LqDZHPq4hjmeSxhC1moss",
  "key1": "Tt5jmFMHC1vzefGCMLL7omqZvcXh9dPn5f5UvzU1i6RfsXLAwVwJVn3i7djTyZ5sSCFe1JTbb6m9n94c2TYYnAX",
  "key2": "4d9Fu81YW41WpQaXgNp266CA59WCw2QLoAGFxaMya8oqQiyVSx9uyirMJwKcZxFK7RG2jfv2wzEZZER8VCgBN34B",
  "key3": "2ks8GYDTNm1cKmc4o2shEDYShef32xUpjBgBEee78qJjVN5fTDoL5zyhzCp1o5z2Gbdh6CPBUhsP8ZfjVkgvG1Kx",
  "key4": "3nW4d9dx96xaApS17zGx9uLpX9mQCiP5ENRrnx1pccuJAmpWZjiwCqSHuwVp9HVAVRCPFpBrYqqcmu2WWaK8FxSW",
  "key5": "5AQqiHgbGttfCN2QArrxtr5UMSqUYbMoe8mrSGQiY9udKNTHST7eG23BN15FWWLaWngCBvGt8pL58hLJK61WBf7g",
  "key6": "3WvNT3PMRNaobczum25QSb6ByFs1b2W7VPHEMmJ1P8wY96cHM8YhNf2YRJ83Wc8ibF5XJNGJtiGyErotHitucnJY",
  "key7": "2Tu2wGnnVaebaPC9E3UpsjB7Adt1NKduxk65Fx5EuCWz2wisNHPFqWj91u5r9qBSJDjNJcFSquSPsSMLcuhCBrN9",
  "key8": "5pnr84yo32XYc6o12sBJmk7Hj1bpAv5pPGchwdqMKgUSVyUmw6kBAvADaz56XHxYE2366UBfQx54KMY2t6SpMVH",
  "key9": "37CAx1no3Y3zcjyrNa5y64JKN9F7vzfmYBkrMCZAz5VoScWken1Hw5PyHBGNBtaVFyD4UrHzwNM7psdBCeU971R6",
  "key10": "24cvxcJiVe7hzNEcm6jR427vRf4emCZCckbFFnEAwNdVMeBmgcQaPJLWnyTfw1ch3xREkKAGgefpH6T9ff5UuRtS",
  "key11": "DG2HW4R73H7UeugonFoXzWgnNBMykQysGL1j7ddz5tzhoKGbYiPgpbou1VkepQv16Mm1mtxNNBJhyaQSEJrsC7n",
  "key12": "4PNPDqfazPUkoHbnbuAfjdGKVTk5yrnb5cZ11HcwWtJiMzNmVJ9pSAzZNMoLSntTjKyFAGaJKT2Mn16BNfmYCi1R",
  "key13": "3KQXVsmiD7hpdYtbsVKW4YNuL3uJUtnhetPmyaWfJM9SNFp7qudSDWF73PbjCvr8Ur8ATmMxhxT9oUKej334j5i9",
  "key14": "EJrJBETzFgGJzo1yAz7v6Y9TN7CTNTSXu6eSVLEmcvY3bZ22bruxsWRGLdojJZpdZnF4nJffY6aV3yYSWqh81os",
  "key15": "3S5dfyrUDGoWuhE38nsHKU8QjHEZiyuJRnVLASHpxo4rc6qvqgJxDBHPAXPrwTBT4wy21emzSTvHE8f1R8noZ2wF",
  "key16": "5nD721dtBnz4UhscKU31F9LEYTNMj133rimZppYHobyfZKdmm9kzpZVJ8NWfXy1ipXgUJdQ1fVhgua4M1c3bhYct",
  "key17": "3GUWR8unwwWZMevmhN42xzas5jvXQ6r2f84h4Lc91tyEgBnjDRgL6Qn7zJH19D96zCUQaPeuZeaTw9Zrx7m4zdRi",
  "key18": "JSREhmpwsEJ7pdgkwXEBuLv6h1Vbrj8ACYQ9QM8PiYdRJpitT4yUMi6GWwv5Y4JdvLfAmbaaWySpWnq1i9fSXpe",
  "key19": "3REzagV5vPYM3fN6ugJCfMvtWPy2K23TgYXkUeTiNZ78KWDtDmE11z8yw7YcERuwTX9fmjz7pcaYQrT8bFhzXw9B",
  "key20": "4Fybb6AGbGGmSkRaV7CS9gsdqyYENkPSAMyt4WhYFZmxQrYu4UioaQY7KUTTrcTcYrxzhYxwCtSKygcbagKCqNoa",
  "key21": "4ATHi5aVrj8ujK96Tqx3vPoCydeKvdkUWm31nwNhfxY7PcAt4maVUgAeD5Y7jLr5VzVPbniasqLsPMius44Zd54b",
  "key22": "5U2B4fCdDMBennMDYg47ABo26qjJ5K3ZtAAWwXrV4ge6Jv4dAzE4Lybo4aLoabLpjC1DZ2vptUznMHe6RMiCnmfY",
  "key23": "4ogVtbH5kDPqS3x3kNhR1B3tt9B4YNaZXk1v2RboLgR87M6pELCR7ZNrmhGM3VSzkkhbHP3Gjkz6P5TuE5NftPRD",
  "key24": "3hi22ZPd7yggWP46Lxw7eNmQThC7su3KtWBSnPKarFLLwSoTPvULjKMzBLQrjAzXTXDK1o3eRELMKKGfVGiNL526",
  "key25": "58DpH7moyTj8CmChEu8hyUayfEhzxBQYFxQncaRzrjwNztXgKB6bGrq4vEXrRnFsvYhiTE1yKq999BHo6FiBpi6C",
  "key26": "2G3DPM4CVBF2yRyiXM2Pf3JpKHjRSMz3eCsu4QgF4HmB1nEVJQeph2LNYyyy5RHBFbf6Jrtg8vUrRJgVcTN1eChN",
  "key27": "2gg1eNHBoyh78rtqNfSMk7nWRKYNrDRcKYnqFbs1XPJPrXjkWn4JSCt8vhaqFVTFFkx4AD6HkJ9wGxCVshGeo3pD",
  "key28": "5yZRNzGmwvedHaJ6rRUbj4wnwKvakdBP86q5coG9DQnqq4AWAbNjuZSKsqsqDxuJ3Y7cfCTHJjdU5nrvUodaophe",
  "key29": "4cPscfHnzuuG56DEW5L7xEQ9NXGj4zTAw31uGEwd7DWpqNERvzenwdbCns6MCQYb3rpY6Z9W2me46oFbNQ67n2Fw",
  "key30": "39fhWrbaSCPheG9GKqG2XqzFzBCcwrsCEWQxH4xVKujQPCmm6DgZ5j5R9yMdLq3d7LUUX3DKKZKzvhvL6VVRiia9",
  "key31": "2P5hpvQMeBy2nXbYQwkJQCc8AQ3ex6LaSCcpHKsXcyqb5uXV4AxNQSYYJENia6fNgJKBmAWzPE5ZnmB9ZP6o8rbd",
  "key32": "3tYuk4F2pc4peVM6RsqpByjrdozLS5J9R3iT9yvcptD2eWT4ywQNW5ZdsjDv4mGLVBswQyoMkM65757QZcBzRRXW"
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
