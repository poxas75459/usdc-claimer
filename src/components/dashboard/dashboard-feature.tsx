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
    "wckx3DEDU5y3hShk4PGqhMmy3Duoch6mV8m8CVWkF22LJdSiU4sEMpSqxpxe99eWwCvd1rQ7d7pCE18rtTM5BnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jdc4eMkMUJprAnnCpLF5ZTdVhUbJw2AmKz1gScVZA2iryu1YvgALuSfwrdiZv4DNUGNXVARcp1KH5rFSYv4tzUy",
  "key1": "DV4EXiGTxa9Cnk4bp9sap9EZkmj8h3x1mYHwAHXSyEKV6mcCwJhXwAsAycTMe9ThMhrLEQrosMoBat2ZmwwHKkb",
  "key2": "39fXg3RDTM7U5psbxyeb3atGqSKu2eYPxr5JNGNHS6jt3dXiViQ4XjQaMeaigtaNrb3EaqYmhhAoVAThnYqnGQKa",
  "key3": "2eyHs43tvGnGHLZ95LepZTSKfT6Mnbbbb16hdKY1wHJbVkrYxDVmUoew7CHQExqwGf4ijwxFHmcudzmAcxNSHrki",
  "key4": "5y4dUFVMQ2wZHmjNapncWwU4S6iEdGegnAmtwg7qR5Ds7jKcwhMMe6ssLaFvMPrn8M7kXeKPHd3uYp5wkrpuRwBf",
  "key5": "2y2MyokH6wXg5QyYepgGT1WSdXtDVDKHt78v8CeBgCFrMuphUAQnsiqHy5qcNszSN67ou53iMw1RPWBmsd8TMzyh",
  "key6": "4FwW32gQ4zGR8ESC3s9i9Nz9LfmrTDRB2GJZpX4q9PqV8GLbEcW9LbS33GD6eJW19JWEpueQropcFkSmzW6w7dh8",
  "key7": "5jyuvfa2wBaNzJ3nZ9X4k1DtY5SCbtoC6nW9rjamN3B8TiPbS1XEBkd8FW2HgD1Nz9DUjYA8L7HYuVN6D77782g2",
  "key8": "5snZvPE1dkP2sHADBY7FDDL6xm6XLLtihWUVo3vvn33Jt52YGeFxowGbd4wcq3vksAwvHR5WE64gtvidRNpqUHWL",
  "key9": "5w4Q5bkEgy2VcP3dcbA7JmJHJGnRSYVUy7NoHSXLY6y7muLQo22CCqtUfHv3rBaRrT3aMk75KhefRG3jmGike1Np",
  "key10": "DH8ancrH5uw6LavBh56HuAejqw9kast2bcCekp7tgjxsJdLgp97ERFpWRWrUWp55AoUZVbeAsPsgLCbYoPCicxk",
  "key11": "XniZwhXvh5WZyfjh37s6xikJZ4jrYbumbkDWg4QijLeYHaDXS5puEivguttVuqAnGSfRGvdr3zRbbdNJtH2Yfj8",
  "key12": "3DrMgdUnDMd4j6RfSGrKjNFDFmnWdcEsFYEeZ3nrFuZd79UTaHnPvCqcMwuYmVAveT645FgeuwzTZjd7UiFm7gip",
  "key13": "5KCNj2ZoyaAk6pGqJDJhhtRdvhRfmzeq3PHUfZ7xwxQanVeXrixfH75K5ceLNgUPuMcmgmSTiyxcCiW9tgpyr19H",
  "key14": "3MK1LkXXKErWxxc5cVLoMGK7qSGSkR94U7n89KsmXnvNigeUysy3CVQCH9DfpRG6kpw29YNY8QCTCQAa6ZbUjiyr",
  "key15": "2Ah82Jy26m3CV9YQMx9t75WXbvThP7VxKJj8Rhn2a8zzAUhtDiQ4vBi5p3BnmAKGyLxeuBaEBb25hNkF4UujTBBZ",
  "key16": "3hgtDN6Ktxaafg2Pb7A68TjqAejtSKzz2Jwd4zQKRRPVFFf9RHXy1T7EgV2HKkh7GGbCeQi9ai6ZjxfQwBzVigNW",
  "key17": "4UcThZKWHqcoPbVenHaA6Z1tajrs75ykVVshQvynVAG9iBJ3SUYuVSAZEeY8Q8KtpVHZChMdswhSkRBS8CaBUsEp",
  "key18": "3hw372St5VSNdUij6T7Ugt6tDrMQMBH9YMg6mcyqbNeE8AxMgfXabea36zB8kPjJqf6rxcBiEDtq9fpq9RLTm8jW",
  "key19": "43FiMHiqaN3fvmakM9hrb7TYJGLXCkKRHZLLaBEgBr8UB6EGEyxv29uVp8Ye5uu4GMMyKnDshVseEgwGNon1ZvAV",
  "key20": "3wiZr99mQTzmCJAjsqou7uUkz9qoDdWaEfEEMWsLSNjhSL3ZQGBVfuyCjuHMH6ck8XF4NF89KdoAHymAf3GpUZH1",
  "key21": "4PBBo1Hdtg9idMLCVzYWifGiTxEmVeKjDJoh3UGUDTUx9fhJgmiQUVwvKVGeTG7pgqMBPvJKmjWxWQxG6HGwjGGn",
  "key22": "372AfgLRGWk98k8qmt1q6qmJWCoSaFxyH4mVGA7XPyH9eThCjkzXpsqywmSovjbQ7wprNb7iQgCm55LcP1UBTYGT",
  "key23": "5eQd9Qkt3Mbj6xzQPCKD3qg5dHDKtooGGw7MbsZkUBfDEzEoPnAKfJWYgGXkz46PP1LdaXqMbGzi5yJx86CAtfHX",
  "key24": "qseqimmjD5Wz1VU7JgAyNgaawFxhqVp1UkgagLsnrvt77LBsgjeZyNitB37UXQ7tKUmAT1Vd4rHM4F98WZFhM93",
  "key25": "2d3tn1B3myWngmPQ1WZbq7fPZwTvg9WaVen4PjWdPkP2JNC3YjyKB9BAr5z9dLheapxB7qC1pdc5MSC448uw8u4t",
  "key26": "m6uZ8W3bFKoxLYZf63mMN2dtxiK2yqUEzZJsE9t3gm8PVmdKMkvZrNAfUxGYboiNWsiDT1EWhN5NJUfGJcp7NGa",
  "key27": "2qzyccGq2uSzVo5ipJyaoXpUTh5TqaBu5VQ1AYN9anAZaZR8mYvckkzCGautPwkffqUKAhD1H78CsAvoY74YVvM6",
  "key28": "2nEm34ojF3TSN6kQCx6Qa8Aon1ZzP7cPCrTV66SX8bLzL8Zrvm9XpjrrtqyjTxWC8k2gjPDQ9cYzmk5xtpnDpQzZ",
  "key29": "39srT256xNnJpadvCUYAYSGh3GGD7uAKgKKy7QjksR89h9cJsfFvXz72FvnbAeBpt3hvHzpw2Mf1YTAy3YsXfeT6",
  "key30": "3ETJ6Yd9TZjx55NG8VMXzuzrUnpS6bLFWqDKLgFtKeroLm29nijz5ijVJZg9izFQrD5YkKVQBEauiWEVwJLUuYDb",
  "key31": "v6Hg75a9EprRgDvmVR98eZmQ3MrnTfgmpTNdf2AYg8pQZnD9S1MJE15sAoUf3VJfK1HMwY75ejibWnqJihaegpf",
  "key32": "2MCDzp2mCEt972iqwxfRfTbFyYPdnKpHQU5ixyBpoS7wZ94sPMsVwALB4tgZwLF7hdCwtctH5R1fYJi9McgQEBA6",
  "key33": "4oP6c2E7aJxeKhgfpwpjP7j1Fkk89NWuGXLhTb3SYAWtpPR6r7WLMjfdK9px5uP7m8E8K61QBf9cUxUmhQnoWZ9x",
  "key34": "4VsFjx6oGcFzX8HtiY9SieAGPTRa2n4hjKeUr7ygA3KNjXNXs7TX2Ek1Uk2bab4v4b5V7KBWXHhiD1ia2rTDNPH1",
  "key35": "5Lo43YNqrWwE7aDZ8pnbC4SDREwdLQP1s9jetHDXigHSKpbwhpqaEUELhVBZWANG9p94DoQNwVyMX2s16tck2FAn",
  "key36": "32R2MfT8ajXk5PpegAUqwxocmKNvSVXpEBm2dXjPaDXkRt3gS4XiYbdnubBLJ44qsdJVv5jzKgTKw3EjyCHuKBN3",
  "key37": "3krqxkxv63oSPLAgzFZGGPSsi6StPyh3uaunpqm27j41qoyv2SurA8mHuyzTKeyZZXikosGDnMXTECC9nxuhFBEc",
  "key38": "2oHi8MQcoyybquxLJQDYyH7z7b5rzzoVPYJ8FV2u5j5gi9uPoZcjGGWzEAMjyNp6nExsNn1upAPNEFsZVVktetQe",
  "key39": "3vTnxJ4A8osCg468PHvf1WBX99WevVSS2EZieVetKYocrekULc8G1s7XFnq7uLnwkQShkBbH5bXqKh5sUF9ZWeSu",
  "key40": "2Nti4TvN6U34tpTkwZzQGwcaQ9F5hrQnQ6K9hKkNy7dPPhYhn5SR7F5oWCPmusm6kEd5qsPPh38QmmVmEfrYyVyJ",
  "key41": "3Fg5eLYHBRNHtKw5B7mkpUNDBYQPt3n4fShkjBUnGQVPvsstGUPW27441LyyJVNjNqvXjTAjLfaR5hwppZ522gvU",
  "key42": "5QCk2bxQ1fo9Ahd6Yfgd6hgCoESKaWCJDvkF47bL87ZiXtQnhHLzzT1MiFfXXRQM8mtm1Qz2sAccTyZ7p6iuLzWB",
  "key43": "2YmL438GqNTBjcbxbaLam14Z4BZU2gQC7vgvDmLUy2M8XQN9DmMpAVTn2hcav8AGBPCTzTRbpt35MzqC4h6UByWk",
  "key44": "r1JSQ37gxBuyZAHuTD54BwYRKxxrVDmjLLd7VCCX1LF6sdmTVs61NMjjShcFb81pztk6RJ8KwbkkYJhePPMes2G",
  "key45": "tsPaBRR5sXweAb72Rnm3trXe6Y599mG4VoA82VU77hrHZgVSHFdMb464BgkHUQkfyKkJqTYAyFt1KkHYf9gfc6w",
  "key46": "5FyyuDqfhLoqoQEGXp8KyaHHmVFTHHuQV7pHvnVt9FEpizCFHBoGVwSdjceAof42bL3JD9hSAZSruiskExqYNmyk",
  "key47": "3tAPeKxVLrVFVfLkjfTe84VokRhHPyZkEAu9PSasPuESFDyXDeB2PYB9jnmBsauhquVbz6WnY1Mman4aw39u9Zcp"
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
