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
    "3R8PxJwKm1fZadwroPGMDAbjFgDuhVuY21z4bd5Bqu2E6s6J9iyUdDaC8eiZLssFQ2K8jNqyqssSYw9dgWAyaWKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmvqB26986TDUBtEYuQviy4R1D8g9pytcwM5VWWA8CtNzXuvKzdedszAavdJRU1Xze7xqBGZ3awU5822Gx73p3w",
  "key1": "w7dFThxMLwcACPm8RFSp4fsrQKh9fsmrDdxKVgNibzJ4HnGG4jrz6Gpp4xgaeeungQBbgWY8F6wu7TPpMyxXaPN",
  "key2": "tGiQLWpiMgC1NVVn8ZvtWAPyakfDV16mkMFWAuEdL9BqDLo1kUk5Tz21XiFEzweewLqeGnKjgfbmZDi6CeBNpW2",
  "key3": "5NzPBTQ7CUjdEyq6Syqr28hrtWn5vFFTdbXQkBeyxysk4PCo6sVyDvoPmgzPTxrHG7BW9fGynSsu1ynGroF3h8n1",
  "key4": "5GPo1pB7ZMANf9GEkQzqzFhN81wpijgcQP8NjBpXzE7ZNytVP1fwEWyLbj1ojJw1BtHfoRdn2jMhyUStMfrB43zR",
  "key5": "3bbpasWKZC844v1jXeaPqhDqJEHRJtj9HsYV7UpeeYeiU446Fx74886NwwyrC8EVzoy2hf4jcnPCWp8dN6P99vRp",
  "key6": "4VpJ3SvK1Q93xeYg19uMrbyymTc3H6KW1j8zxCaFPs44uJThseo6mNxGw3nax8L9S1QCUb9DZwJVmoLLRF8fKMuy",
  "key7": "2TLmmyrC7Kp4AcRY71927KEzRLBW96JLv4b83jTTV4CjpkzUg2bCKCbrCe9X5WLrXTBSM6QyMz65Y6nAYPDxwWhV",
  "key8": "4AwBFxjyQ4CRYMtGvgDVWN8a3NrQ9VeRBoPt3Tc4mDT2ysdnimNR3re4yvwtViNCEea79LoThULFbDCTmLSKweuZ",
  "key9": "qdeCrLdTZeicXM3qbgmA7brVAPD16MBh1DLu35JKKYrrGLet8CDjc65j4UeC4WdMhDrFXWwyN1ZHkiLqxq5rFRY",
  "key10": "5jDisGshxFHFnXfW1m8vWSbpy6zwmKmXa3KfoCNQReWGSqxD8omRaSymGzMir4s4bhcEkFX6TQRkSiHc3DVV8Hyk",
  "key11": "H7hBEVCXUcPHkjQuGTX8JE99dxZ9XEXafh7vk6Coj53gtrHVNPuRW5PNGV7bsNnEwJH2FYjX4EzuLy2SWRLi1ZU",
  "key12": "qdX88Z8Ax18CB1bRYq2Pgde2jvKHTFnQHVEe3hPh9vSrnUbtZJTHRUd9fE77UfDuRVadRSrvNjwFJ6fe9dUfx8m",
  "key13": "UL5erTm1vRKAvmVEeRKgnG8pLS1Zz3LUb8dCCPetVQ1M9pmSPTZczpv3XN1vmmQND2GhgdQD2Shc27gyGGniUyn",
  "key14": "2kSchG9hNtLd7J6M44Vt9tTjSNi9ZAoqdtgiswM3zrFRntkmpmR9LgMuogiidS3Z7Ju4uY4EfYTKQeBLPwhMkpNS",
  "key15": "4rKzwTuw5g42xm2VTYtw3eHEvjvDxD7SRfBVuz7Y8zL8H4H6EMeoisjNQnWnZ1YnbSHRVy1HXT5RBffCsgbgxmrz",
  "key16": "Tfv1Su7hpsAtbipKEVvdXCaZ72415eWwsWSXPRfazL9PhEJ2ANrWYMeM7P9kvUi6Km7qSe6cpM52Tebd6npfSZQ",
  "key17": "4N5Kym3ssPYbpAYYNBej8PyeoVBia5ectEAWHheXvx9NEdhQzwzqQLMqA3Pss6CYW1D2ZDuEmp49vKSFoDGZvXxQ",
  "key18": "4UcGziLoMRUKK8QbuKk2XNpvAyQcjmBUMgzup3fbZm9E6M7wE4YuwhbinFsupduWSANm9q3168gg8z29iLw2EqTS",
  "key19": "b4KuEB4ZBJ51mNnuPzEpeeoPmX6EQ5xbstYv7d6RjbxYYAn8Ymfd4E7Q43238pdpouFSLqpD3DGMGopuDVZgDWy",
  "key20": "4YqPdJfQvNMm6Esuoo8wXaikURAEkNNQWob6uMS6FQU3MbsFW2VtebXvBEEKbDCByoLfWYsVbsykgPEJjPHkHj26",
  "key21": "5gXi499VikGCqpAuY9JpSHQSPXQFUV9saQBK5haBK324Yoai4GSkTzP8GWMgTQzT4Z3jFdRDjUdrBQ9osnoQdkE3",
  "key22": "5bUr5RjQ89ixM8HseJ7bSz3PMwYXRHvB74gAByASj9x7MPZLTSkQvq38znBtnVEdGB8rYS89859DMKHK2erTUmdu",
  "key23": "2TmSkXCeyshth5JqRvPJUAZQaVfofupgGNaP1dU2Z7eS8vBxJDe4EQU5bLM9t2MQhkxRpPQq8LD8paB12V6s9M3v",
  "key24": "5uMeZb4yd4NNR23faTrAruuirGAWW5DoFTDux59ARPjN9HcZjYceZxpTshCnd6W1nsna4zxqJSTHipwuoFxp9zD2",
  "key25": "3ADtXM3fntxYwC7wc2ZhMnshRLtzR6ArwfoxAeP9fWVYsMhg3D4NtyK31uvLmiyzcgC76JVcALstAP4VECbwpjdw",
  "key26": "2nc769RupXxSqq7kEyGB5dimZoLgkGmojWnTs2SidFwy2snviNim9m3jSta8BqkHgE5qLABowxCVrsMF42SgbdJa",
  "key27": "2WvczcC5oYXpVZd2tYQ69nhxgGvQ1dQqwYEJkrGsmJDfepCV7WTAJcSBrqZwdAv944ztnvnEW9QJLe9RarY6Ny4c",
  "key28": "43bem4qFYDu2HL3B1sFHCdwq1WqGBF43JUzhNo7m8LpmMv8EMVAqoFc54kfepBzdhb7su2F1UJF18bzSbE2nQwJM",
  "key29": "3TKXYZrekBwDNYoneFuVJ9SKZJobsV1EsXuKf85guXy8wAde2Vm1BArFN5t6ejC1Q9S118MizDM4W1Y6r7B5c2tf",
  "key30": "3zjEkbU5Q3wD4oJeQkhpGSpC7fKsjaYtjBrV9zjjb65cwjWRjAeVWPtGbWnVjMAUHdwfH13fZmz8Vk4brmR7HrU2",
  "key31": "5qGchRqWbKkuqQBYSxEmAX3ePqDVKPKkp5oT2GV6NPahwLr981CVpaoGHEMk93cPFwxc9mLwVmNdjqwqe5Rnr3Yn",
  "key32": "3yzwBaXqaaBvVAtv6bBEiPcWqna6ATSbDFprzCdtgcgTmqJgVci6rvcZ6rzR9pbHaeKU4wXUGQWjw9EzqJdDdNK5"
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
