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
    "5Zahbgq4nrhhXRRyPsfF8gvnL8KRbD8W39Q2vD8UXeqCdFG99mTaqh4u5S8UCwbqKWj4Mqssi84XWycxeb3i1izi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DsPFRdktw8QA7PAkBLbpnFfj4rcuJbbRxYQY3buAXs68Uvi3vQCvnfnQS5tLyTyZZ6Gp9jJZY4grUr5th49AFw3",
  "key1": "3PqfgHQNmoQFsz349usdQbB4g9CHKkCPc6tuF2LSKCWtFkzAmtZQwzAhfc1SUJD62w3v4YBAAw58t56mKhyfB7hE",
  "key2": "2KVUvyDCXQXcmeEK28yM4VCf19ZRGaZ4XFacs585zuDHwwagjoJ7EQkUbvX86DiSoDaT51sy77PURuJYGiGCWBRG",
  "key3": "3tPWH3FWRyFDARkbwPzEqpAbxytWDA1JCoBTqcKKqzVSjBTZcNJzgdGBqP8Qm3ZjbfGfKzXQFTBMbj5uxw48Qaj5",
  "key4": "5quPwovzqNHhQ5PkRnHjAPVrnf8DFDhLCx28U44XQbChg8sPxeEsiaDo8grK1oiPNUJSfqBHk3cDXMgGtuvNdJzE",
  "key5": "48NA151k6NL1JFqSQGoE4XRztxkJVfKZCLYX7GZgfic8pQaNBk7N3aM49xKaHS9ASrs8SAiQQg1kLzxcp8CeFVHs",
  "key6": "3u8upib3k1qTv1nVPa5nyUNb6tFkDzLwKhRW9yXG3z44P9QuEVmEd2Ke7eq3ktvs87GK56aoVSyiTHoNRaSaGCZZ",
  "key7": "ohrKDhBapQFmR6Y8LdjnWJXZZwa3RtJLhBva6g3m4bGrmtz8uKDWCPHa8Fp9FjgAFJGY6kyCJjRJCn5XB4ZQNKB",
  "key8": "2YnyTz24dB5KDczkbdK2uemkUobteqKNa8PkBh39fowpK3K2W5sCRUwpTfW6iGerbsSLXbRTrSFCKoLe7uc418Bo",
  "key9": "3uUFi5Yg5AMbhrpPWSnNpVqWmDjF7HRAFdqWoFG6DHe5q7YtvxAtEJ1C7yUCK3Np3e5Ra73fpXD8W8ZhoiZsPh1",
  "key10": "c8ryy8MbmHJnMgzyE41axeZgVEap76m4bMCNpgQU3sCkhmWfBwRxQgoP2aKLpbLztg8YT4SA7YsJzNj6pkPMBqm",
  "key11": "CGWR6ZAetmaGMq1TCcvFVUFMzfY9SAyZmeLhJp6CVKLbYGocpqrXHF2pZmaKL1RaFhpX3up1qdi76tMgRArVxw2",
  "key12": "5Qay9aGSRBLitfBTj7fHr9ZxdLke666dM5c1ocTiwdjUWnNNj5s2bRDRqcWhRnMhs51rPsMGPWwi8CKJyjaPCxbT",
  "key13": "4kB3Pm74eVHzru4f7fV7mvKvBqY1UzmBdHqxg1Y6qQZkjb6RS8nphmuyDP8QoAyNrCh47cv5CA5HLHNAv6sBDSNk",
  "key14": "64nzpTm33LQ5naHBQvfNHpUzhHeoEHhBaMEaJiGG69tSWBahZG1R2bp6iUYPWgs221TFQoXT72LHscriCDidf3mo",
  "key15": "3LdKjkSyuFbVw5BsvhgbwPjjyJvuFexjQVoXY5TThiLArzCUYLvpWYn1iJV8qsyg8HiooKyuhhCXZfQYHm39Ts5x",
  "key16": "2dhPGkpYnYyYPPUygpjd8bLjU4SvvBqZdSjHRoxFgMRvwvBWJZMijKettc8E9M3qkzQBtVtAi9qztf7zP3xzrhfQ",
  "key17": "5Q9wGFe6wXetXtvgJ2RKgHWXdcDE1ZkysqrH5LxBM7PipkMYLUWTiKRntsjRGJNDhEvxd8LsZEKs3bdYrPhQDaPx",
  "key18": "2k6uQaEq5PkL25UgVkAHWMEAkJxAoaRurN7GtxW2muPND7WeNxiAPNq7p3ULz4tZNsta9Fqe6tiB45CoHLqZEY3f",
  "key19": "5HXPAL4kzVaLwe28YWuN1pRuvdz8AzhG71tupVsxjd2RiWnbDewackeaVcJ29jd2Zyr7zTigU5WRfJVkEQrcNML",
  "key20": "ihi15wEuVVs7gnMaVuR3KPBcM4vfNnd78X2SXVjZCWLtF2QtE2gY9QYjNPUZR7P82LwKUBV5RNREHs1fNbErGFU",
  "key21": "2ZnvNBSpzE5QCRbwi3SD8Hs8NZbYKAD9KoR4EDe1dTQBqdrM8Teoxy3D7FWjxhn96TFEwzm2AybH8LFTywhm8f9n",
  "key22": "5rnZCTSUkmm3cURKaU5G8y4FmuFrq4zwwnDqJhLdp64tsVkazmoQDRap1FwG2ZpaXChPjvA9aTpbtnR2PJhVdVWt",
  "key23": "36ezZpeGvyevkV3dMHTR6tkgseARXCyRgdGoSnfmb9cDADwPL6dd5431ACN8WNVfEK2BzzSM5xWHkQAmYFNf5Yec",
  "key24": "39Q8RLGKKjzRWsbdctt9wyAubsKVJrYZYXHJvk4GnCi51APUuaBBmeFWaAGJaGs4SWcBwPDmRNmdMb1waF2PMFzn",
  "key25": "4gbpRLrVWa7xwUqS61j5bg14hxWRSardjzaqE6DEwgDvyG5FuWk5K2eqSkgyj4jmhNAPiPNGbECcZV7526pxvu75",
  "key26": "4ZuLAwdy4jSpX8y1pf2St71t4vtpEnauGPQK3Qs37yrQyBXjvzFpzbUvrp6yD4ccAPUaSa4AQU7XmUoaznADAkxr",
  "key27": "3VWEoee4KYhKpimQD8a134t75VD4erjCQTSpr2wZj4bL8UewVvybnPBmyPt3v6UueA2F5vCc64t1EGUgTnghQB98",
  "key28": "4nDj57XVgjtDQT6jDaBHRN1APAa5V5TohSSLTPA5n1ozViaw7RQYAXS4avcgwnLDGjHy322AbJUn1ocPEAtGTksL",
  "key29": "fMtxcFKWeEmZqMkN4KPF4Ybk7RDbg1Ph3KwF5ySdkvDbNbo9hPsmnfAc8SsBfQDS38Cwmk99XUHL2MaucxoLLGH",
  "key30": "nLhkQyAqLnguaMjx4AoGV49hNcacCCtyhyP9X6jFCjdAuf2AsvjVHDn9b2YyPm1YCcnAuUTctmCkbU2NtDxB5wr",
  "key31": "9tZqvS7m6rsdyaWY1sPHNnopXD3438aMoM3kKW5NEVyE7oA3UHothcBbGyQtkPZajhSRrWGK77NiWMZ29crzjtf",
  "key32": "P1WfzdA2toEWgNtEh5a7eacnFF7zAABWe9i6GP1oA3zCu49XBuENW2PHoFKaCuANYHGTqvbpJy34BrzxCAqxMgC",
  "key33": "37wcAoy8Dyc2t84TSP6ceBffVSiXHuJKitg8Qa3KWuuroSxvBTaNPYUDn5DafEtcaD2eWqesLz39Py7p7Z2zW14i",
  "key34": "2kdtM5A5DWMRj9L1hmkUDWTLfSFc1CvhyXuW8Aj6rY7vZqytoJh2L7dFpHmgAfepsMo6Gzrcy8iUoQScMBABjF97",
  "key35": "DrJySnCzBeUipNB7PATr8vUKmJUzuGZSqbHvJwyMS8ia43yGM2mgbxzXrc3rgnHjd9ZcAmHT5J6Zhwsi2h6eYdQ",
  "key36": "GTH2T547GvprUkxoEHptBaAbVGvsKufcXT1CgiNjhy8nAArYfQ1uFwW5ymxYybfunXeYpAxK1xfs3H4JNMwLxqv",
  "key37": "21Y6kezsqh386DxfRh3MsUegan9hMuUqnjVfB1K72vdXhQoUa58u8DFQ2WZhdaLdHfJ758Cr5jU7YNG6y4Y6fdXk",
  "key38": "2MrnmPSHHpvmey6m2wVGaLmfWYbxA6mwFcfxmZQFgrtDuzF6N2h4XkaGGqPZuSSTEYqPd5TTdg5AffFc5C7L9nAa",
  "key39": "2enykLvYdkN3yos6Gf3HA9Xyd8HmAtugw2gmh6E1rpdhdbxCeEXhUwPQnFnukeEc8pDPebCLctVUYhwArZoCW9Qe",
  "key40": "3cL3PqtefPYQrdPwTNxR4VgAuFR2nusnBsabY3yFws4M6MxVd6sPHma5hm1n6tH54vtNa5fRkAfRGpMv56KbM72b",
  "key41": "5SpL3UWivBdKh4BpRLpaTW3hSp9JZPJ1stFoVAr9ioQoqNpwPuuEJwRBuG6ZXFZMoCPphqwCMJCtdQBWtGrhzsUf",
  "key42": "51pKPVmXRTxy72BByrWPPVEosDisENaimJ1QEzcwiDsrZTBbEhamSusXv4tzExZQroLziTPCcGykdYt3zKhYHNDf"
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
