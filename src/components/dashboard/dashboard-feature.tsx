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
    "5gtRvQEmAT4iC7ZqpALmvTbgnFsdZmGgYQpdjrviXA8StLHTcgPf8XJfUhQLJ7ChHpqewdKNcbLWeh2jt6KAFeDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zfYMZequHxKLChQhaPko4V3dVVvw8BzMwfQ4quzpFvFb3e4HU5RjLAG6Q1Xu7WaXCPLH7RSSJxhRp8oK4uankpp",
  "key1": "3SZqMWJ2JLnT1kG9stJ6CMvLXN2ZznaxMu3q7mV2W1Fg6ov8GuhFxD9ho9e4mYGyVJQQWGFTnnkfuMKtsX5SBqUx",
  "key2": "4dFnoLFgY29fSEbDGqUzanPGpYjxrv7Ms3gEjhHTcPj3153jtN5qQDxab8Lt52qppW2PHaap4MSrYX1L76ySYmYz",
  "key3": "2MqV3vGNHUjzCv5fpdFTJAHpL4UBUa8ZBpV5Rtu4TDVJvt8Mj1yp31DimS44rEEm55wFnKf58pcNSrzfBaNFU6N4",
  "key4": "y9sc4kXok6fMbp1b12k9W6baZEc5Sat3JHfnMkCRu2GwST8DjPauk6UWLLuDioTz2nKwRK5njtHR7fcoiBQvyXr",
  "key5": "2dj8PiewiAV2aqv3J1ugagsJ4SKV5bHQbYa1gNnWzbRMdkpPk6bm3brxw95bpKaww8APXrvo46zky7L7GFr91uUG",
  "key6": "X4Qch96uB6frguZCYRJBrYqZMDKrKrn24BuU7Z98Um3TsAWxHz5KZ663rJKYxTwVHLnMgPubSrunMHTxLEKMq9M",
  "key7": "3iDCNLDqS1L6Zmm9BttRXFkADvqPXkuCnz9Q4wr4qARkx9iiCJ2c2KKwJ8ZTmQCkNc1caryRUtbyMA6s79WnrJKe",
  "key8": "5z2xRnzNXbUeVeFVmZ9631THbBaTQx9GK9LwRGigmPP7qNZnQpsxrU186nf7YNS3NBMWx96bEbZwme6qxmaJkaXQ",
  "key9": "3dciBs74ofmLChvNonwYvYmM1utYpE3tC5sUxCsHBkyGBu4i1yzoBXaqV8HuAuPP8NZSJRzjFGComXnpv9DiFurW",
  "key10": "5x2R1bkibZs55VW6Q5BsoQZa9ZjpwXMxtNYACNGk5G9j8pyEj7TrXPiJtKNbWNxWsdJQ9xmyxdydoMxqYy2fujGj",
  "key11": "3c34zzjjVCtaCs1kpA8R4sNjsLMZpHTHZZMCpxazXvmajsHFFWP7d3gCm7Cob81tDBMi2APH4uATYsRytLpkn9WZ",
  "key12": "2ATKYv7FcnbZTD8sQvXRpT48tPFbZCHoQZ8uh5K5STWzkmbko1EgPvCpXwQ1Rfg6iur8BheoUDkAnNPqLU1fwbYS",
  "key13": "3hA4cAuJAwoLQqZHV3ueMbuuq8LgNoMjTdY398mTUJejBJzVFL1anhkdu1UoqLPJYxjdEWwUA4FyR7G91FGMS5Ma",
  "key14": "3KhEDmzUhw42Xw6R9SEJfoTLWxjcz5gWvjiJJTeRnFBN81z8eFBpBSDfRXxnJu7uCRrSVGFkfUxeJWDBxU6zUmjP",
  "key15": "3bsBL3UziR4VpdCKknxYZqzJFMpbcgrc39q7Ased9rrasxJFPy7KKmn5L9797U9taFHcoiRejbJpCM8PathEyuBr",
  "key16": "2U7GKaUPheiyRLJPbpznXk557D5gyB5uVUmdhyH1gPz9en6KnBLJSoSffmjK6MomFRwWaWSs8gg9u4gFhtsfFdGB",
  "key17": "41MiBxUps9TujoZcdmQRF8wfaWKwvRtqUYArAqLnmEmAijZ4wFBNZeFNZcGDLDfu3YkMDGkhBbKY5vpVKpZWnsVM",
  "key18": "2PdMhyKTVVeX84uuY6okarYFuLTETBPG6c4AKShefdf9CXLP8ZeLYESeJtATWVc16ZZitTM3sZ9m91wYsVvUBW99",
  "key19": "3AbgcvZBwkKMpz2jsX4VMocgtzzkifhKKs3iZmGjWeoTAGMZf83Ab6xxesYpVVEhLLBjXNQB7CMT3UH4SttHoLHa",
  "key20": "2G33HYRf9US8BCrm9fGzYWT8F1R19Ki1hDFg3M6cpJviA7Mn469V1UYWzFAqyeHWLr3QtjQHMNKJZdnsqdbWkAVr",
  "key21": "5e3xoo8JkhLoGFt8RwUrgDMp3E9jUs4C3dSkPoGfyrzx8YHH5Mwr2rxAyEYjP94Acx4wwFfH7efHGrvQPX6Dpj5",
  "key22": "4moBsbuzuFgCjM2qiZnnWFb9BVK9AyzXzzGB6GERNCVoCzLuUbeR2sLCNEaeKYrAt12jiznpJkhokxYWWMwm3bBw",
  "key23": "dZt9CPjZemn6Sphr4A2WiiDCJFuvaHNJudjAwR51q15jagfboAwCvookNhaiKYe7rCmhMEjUp7iot9Kiefca8uz",
  "key24": "4CtyLGFerYvgafnbFvRsbQ5oinvWb7npi6qhp8uBksa4Au4vxNegdV4PxgWeXkfAnMSnQw2ufvmLzgftSczkt8dz",
  "key25": "5z8q9Rtrc1BRp7pSLdQsKQv9CDo8YD1vbrWtFagixBBcPbtwuqj8kHCGBMXdskfpW1QQAtxcZ33nyaGp7c8DRdd7",
  "key26": "4dGWrG6vNjUVzsReczsPKaFxHNu2tsu4YXakzmSKJypZuia1RnoPjtwA2E7ot6tqQhNogywH3ZXR93bNsrRaNERw",
  "key27": "5MdkJ3cMNxvkcpaqem3JLekN5bXjVB9PK4Mt51cWCryqshxfz4uDpcPTyUR9CUzaREp8TUXCMzQAo7oXS48gzBCK",
  "key28": "21s7xr1ye2Zfge14NpWeEutpwocB3Pv7Vf1ASGCFekvzzzH1RHsp1ntiwssX4fNkhDAvfE2duSjPS5XRs8cnUTjM",
  "key29": "4Sp4xLPsnToVX6gEypvMoC5m1bHLeGLMWdz6GnHzjzVpPH1bZDhXxt83mTMVckSFJcvbRu24cJ4HPTPHB9rmWQCE",
  "key30": "617agZa91aqW6cwdbqRijUM3RSENhtkAMcBZCpQnVN8QXE7K3iyg4gCymW2eQY5WUYj2XBCzaYoj2REtxAWpht4E",
  "key31": "5xaTEPjKfnVCRffHvBF6xTYt6cP96BU2Z9FJhitm8PyJr1ZSTHNkcNqhsTmWEGHfxvcvbB1qGNkBhoQtJUdZ7DwL",
  "key32": "5G9Tbum1EhTFeYPkMHGL4gbdX5EYdVYv4jheBHqTp5xpByk9Zpf2cpCwWUtjgxPwWY2Dp2My3apiarjjXzmZrFFV",
  "key33": "423GziGjkDNoSWh1WfqvdytSJARPEtsTt4RAsYdQgGNPssz4q6VtYT11QjpGcq1rDbLFpnFKfVHRWscyg37mfmsk",
  "key34": "32DAofXzkQbZVxUQ7hcVZLKvgFgpnfZYNZFsY8gjpt5fG9xvkMycvV8ndXhAQNznYMta9Qm33eysM3v5hfG7WK9Z",
  "key35": "4Xd6jHPxmFEMzpdhTa3Ny4AvPpMGeiNMmvkZo7Msn2cWgYAdB4NBFPJogKxVSasUUmg2qdyvJKejrfeHZRgguq1i",
  "key36": "3wo5JKwNVLASPQ3nDP9GXY1aN9xown6h7yBtPahxgdhNFDbrQgBu48yzpfPtDzRuJb7XV1hVaTA29jma3Yiab4Uo",
  "key37": "4po1S1MuVcBS2K4vKTDpB1rQQunNot3ZoAD3qUf4e8nBx7MP59QN5pzajfnNmsp9Bw9YCAyqb6aynBj97hey96nT",
  "key38": "2LZMR4M8pemnfh44wATMVHaC4i93GeLFZupWSJmTvma1JXTM2mC6hDc4eDpufbJh4Xif5moASw5kzKguFhkqUJWq",
  "key39": "5kbMd8ZkJYpx5MxN79feUjr8qJELPfXyWzx8F3qUj1UywhDN9f52XxQXAfDpYfcNBJKtkJxMnhoscJFfnc8MuBbi",
  "key40": "2wgCbCToDEsT7DJk1C6MPosu4BZvCmKisJgZy5c7Xfn1keMpqpvWAtjKmrYziY9BeidoWPwizYBNmDP5C49wxa49",
  "key41": "4tW7nTcxWWcdEQHxY69Z1mnSHMuMZiAgjNaXQorDvMZBGhtcYtuFFHMsFEuYQoswBHeVizoUafEXJCp9fBCnnnzx",
  "key42": "WWqmyCzDhP6cXSFQ8Q5JGmA63RGLZDMrGJhsHGYgMqcPsF8qgocBMoYZ3bt89Svbka4sPNnP4UZj8LY9BTh8U3f",
  "key43": "3GJCQgKWBNC2NTHKwd4s7UP7uk37Hkvq4TCQJYWcNJr1iNHAPhtf8RY7LiTAxSjsMHF6rjfJJeqaSNGPFZQTwUnF",
  "key44": "2fSX6Vu7YWxo9AnyFnLGX9zBh1q1pUh6YeTnzZ5xkNgRXJxiAik4uxxD3o7sE7K4eZgW6R9MGLSzSbcz6qnTrmdJ",
  "key45": "2jYmB7ht3bSTKyHkr1oGH7AjoDy2vTdnmZAT2mydGgmaYy2K3i2LHAquV7EPqJcoVYngWfs3sGUp4uCnhDWiQZtE",
  "key46": "4rRbDXa1r8fSuZtsiS8gyBcaFqgqyz5xfwcUhob3Bj8QefbHBJdYaB77LPyHXH7L8V4eLThkxQ4pgmBzbuE5nLis",
  "key47": "2sD5LVoPDc1nQqW7bXNBGZ72Co4CPUaPeCkHejuHcUqV7KdrL1gWAvCZoGzHiq8ou4sTUDmv41PY9EtbxhnHdczk"
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
