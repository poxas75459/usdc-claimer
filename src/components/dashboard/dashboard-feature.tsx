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
    "2Ln4qkjLdEuHHfhESdn8WZCEcRBJyqWPUyao8736vdEmo58voRbmynVNX8jBLeMGqniq4fwEpdYBxKMviFRNwAB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sfJJDLZteNcpBQZroENRZ2y4YdLp83NrswpViAHLkz3mhn2bRSZFM1HPtPZhZwqdyxDEesvnMpM2hZ1h2HJgFkt",
  "key1": "4qJmN8D9P6mYYKp47BQtVVwEVyx7bvxXLCAtzh1jQx57RmTYBBsLt6DS7f1fwhkBsDCZ71bGAE4RaK9Lm5MWHA3k",
  "key2": "5i1LaW9s3t7FV56me9bRjsFG4b5fMpWcjphPf9e71NrB1PDb6eoAoEUCxfsCqPsmzfmXrg9QUySNzCARBFkFHSDF",
  "key3": "31srsNtSWxtq8Tv8coNx4qkyL3hC8z48mcMRebRzeqQ69qZJByaa3S5Hro9YUB9McUwHeZLH39FG2MdJ1ziDGCVq",
  "key4": "5Ep9oqP6Yoa3Wx7XpNKqNyQfmGcBgLQYoEnrT26kuGmcK9PZMt5af35BFxkWzQ2gN5z6yiZnMF9TGbqXCAafb2Ub",
  "key5": "KFporS8moCNTerg5Y1wfgVEiTfNnaA6XVMfknq8b7M1fPBudaokWQthB8Zc1exuhXgt1Kux438zC2bP4D3iwfb4",
  "key6": "33ZjcY3rw89rhSLHpgM2pekS96rmNtsbbWevvYNVtwWC9grJ4smNNhdDxqsSXbRQTmysnbZNfwBgio7SFPiKjni",
  "key7": "4SpeaAWZ985XHcdJED2QAeydDCHe2sMKerWWdV1GSsjR72cBmhDYNe1mKweCG6ghckYkfcWq5zsiLyq9ZvnrQaQF",
  "key8": "64H6qGWBGnkpsG64nMC1pP5zVzT9DNoScpE8CQwszzvU4gef9UE7ouqoxCFhKezG8qshTquW856gFvE8C1kHeT7S",
  "key9": "267vRMMAQR5xktGbXCdeSAp82J2dZLkcRrv5w4KKZcqx1qQGTV23bBQNfvJsqeZRogrD4mZdTtJtfjS225ayAkgf",
  "key10": "44sKYZUtFdqkTBh9hvSxYXHV1y195qQLC7NXfyPaJAMCURA44HFN3Mhdr3pbnPGDiHdQvc6mRKkpcXhg7jMLJop2",
  "key11": "2Vt6ExoGSuK37tGUZzwU8YVJd3tXCXNHNf1fK8ryMP1CQrWSugUTjHUt2w5eSB3C6krz6qDusQLtCJjQebLbvXmS",
  "key12": "4CT9hzPAYnzgZEtiTb8v9R69M3MDLPY61TNj2ApwveLStM6W5qPeXbdyP8BGmDrNyHVqdC1tivX9hyMUfWmHPCcK",
  "key13": "4XX9dFDnvFAKa5PSgY1KiWe3jubJ1y2W2G8VA6GMmceb2HRpntyQeJXosCJvrCcH8KmdFMwCTZWH3tA4uoiFJEEd",
  "key14": "3gmRCp7J7WTSqfxtBm975JHLNxD8GBeABM88MWkQk2pq37B7f2qkGS3d8yLRfv529nqekMdWLCXdigbffYK3WCVZ",
  "key15": "2QzKcxw5YRYWDauP9C99HiP3YHSUiGYXJf5ihzMirUJq7MUy5G1ni5sXY1xv2dnhRQQthCZVFL5jVzCpA5fPjp2c",
  "key16": "32G2j9HbXf7bADEVSNTgw9a9Rz6XrMWH3Kp2Pcp95BFWjGjxZz7wf7hQbprR3gdNKsRpGbtd4yYXdYqr7cmdvqJM",
  "key17": "5MgirhGYooiuzP3peKKXajnEFa2Aie2qUxdDA9Cm6biaNwF9WFLpKyF8Tv4L7AcouqpJ1naDj7iVrLJxgKAJUZKr",
  "key18": "VeiHsC8VjYkk1K2BW9Smrw9GLoiR8qEZKMqYMyanXUSdPvJyTqVhqns3WdBVYYi5S47ZXWTrUNYK928LNmzNWWu",
  "key19": "339s3rxRPFe6Ewd1SRBkmrvvsrjEsnHMxCQ8hGWPQZ3QfUNJJA5GbzXMXcbLtqNUMgmJ4AARyKVqW3yEbQYikVj1",
  "key20": "5DopCrhQZKWMJSYEx7MRfzTdPNkg5DqKRV4JZFT8jpNQHGXYNQEdwT4GGsbCEEpStDZFFaS8UL1wsAbsRXCxbaN9",
  "key21": "4wWux2DiVqVwYcNCtvQYg8U66fpL1Ta8tznRSxoeZv57apGeitSha84dqQdBQcC8cj4aTR6ARd8Xsdrm7K4RTaMj",
  "key22": "5QSypN6Tk4TAfYG1bxzmLjPxKawUzW4cjPSa3Y1TVNb1tRiRPW4easzEJU6yBbaf3KFHsUb1HbsB4c9B5NHFvvEU",
  "key23": "3i4iNXsd32TkWeRM4Tt83vPmDXdEYbwXtEcvUoityikygsMGrg7oEBwyp9vGLKASRN2TP3Ry9DV2yDR13xtbcFmU",
  "key24": "5jg283DP3HDJFDWPBCbHBPUxkwAac4smkdDgWbpj785mwEVvVw9VK7kioGAnG3LKS3A8uxN4vbU88McyJRGSnsVH",
  "key25": "5AyFB7YPcE7TiFu1DmbxDavxU8Lt3fMqFmKR6XguE9fbjv96mKhVVApMr88RFoxWFcrkGaUBETUqE6aN9cUdvjQv",
  "key26": "AdKaV7A1ZJcWf1aTK2wpYCXG7bHxJepfoCQ1un4PQxP3JrLMfke8UQJNCjb422p7ddVYvRLsn949P1ny7Zfj7L5",
  "key27": "3HAyjSqunBb3jhkcqvkVNYSWsv5NoAeSgMcy3d8vZwB2Nvx39peCpdXfQczbeQZXL85SsinqfMMf22ntaFbgDehd",
  "key28": "4vU3HNgkYhstYRqPKkkpjBJdz7zvGGESM5UXwXVm3SpSmJJrnMAhr77xcNcssXwyqyvfpqeDXkC2dWeJvTqQ8D57",
  "key29": "5RLzSYGXbvraYG5hpw4tCkkvaebhxDERMVV42ghpd7zgjphFBfMMt31kFEBAQPgwHofbb9C44ze2tkcANGK3rqr4",
  "key30": "o5NhanMcmKNz2DDgSpmZaEycmfWBxmTL11ocrHJKo9E8FoTjEJhqLAA3KFKSPnV1cm3fWrpjNjSyfBoLeSs1cPF",
  "key31": "5nDA7STgSi3PqZQL2BCQiz96tSx35oGEerJggcMQsS5ptVhAoaAzdTQ82JeKZaZf7fbFY4CjC49QGpmDhr4QvPHX",
  "key32": "5m5yNiKN8QeytXwBEymQPdHPq6W4p28L4NVLv4T2id99RtA6pZbeh2qUzd2d6UHJwRRycxBGMbcFbgUzkdJesQCS",
  "key33": "4XTmYwoDUbnbvdEwfxmk9QMyoeqQPZNQyopeM38VFKKHjskEAZuu9BM3g8NBBWvDMojqdoLAjHE4SJHaE26uqf6W",
  "key34": "5UCmEH66NFwumAXYMCeeZfjoJ8dkQm98G9eqYgtnD9vBrKQ66R48Psf2ewYEr7dz5XpVQRyXrsBDUuGyy4WBc1tf",
  "key35": "SkzFeQ5QxjvnHSnsNizbezgcSc1DZgYuhQfLsm7kQZ7ENr7CxoZMiRKHJFvZvaiGtPpfoCUDvqSyuUHqBbHTpFS",
  "key36": "4Qjx5eZ3peDJUiLv4ui5ceMWMLDaTp79r2cLDj5jQ49MhRAz6N7b9Ns8RZdKVbnhNJkeC3EXHMZk8BMp5KevJtnG",
  "key37": "3t5UehFEz2QeGyJgg9tjdGP9TrKWf6TMmFxtqsWYsoD61W4JSUw8wmShAf6AfiDe2vDfdf45qXnz2LfPTKCemFUo",
  "key38": "4rGo8DSfTjmW4SxJVo8J1qtsyxT7YufsyZ1fLht6P4zxS3gSppr7k4jTRSrgEYWkATXR75yTm28MFf5Q7Qhy78ub",
  "key39": "J24xHNs6drUDgw6wgZQrWSpZwv9KVsAt3igkMCyAQ6g1cZyTFzY9AYrUywYQkCd8wnNPvA7YKagcnUnzAcqCDGq",
  "key40": "5UdtBZCVzPwWGtV6N4pP2giMwzJGCnJZh6YZsDKR4fCeWHrTtFdY3SAnZ7bkAw2PRPUDbFkTKUwuWkDi52Z2pFeq",
  "key41": "4osTUbBUTeWiiqh95LmbwVDDyikuYJHnmnUtnnAXganjcLce2XqE2qM6A3wyScDZ7JzWX8nPsTwBMhDcUUPrKPEq",
  "key42": "4pPP4xbKocqF3dZwv1KpVNv2LcCRnszN7iZxayRQrofdi23k4dJ27M4GaNt28dpKC2JzfV7bsqnvCcwTZSvmEkwb",
  "key43": "35iehoHEsQze2nqiY76ALrTYxQwRMvt2SkL8JfQ7SQwALuvozZ4bkh8kvGDe6PMwu8tp61moPdDfZQgGeTadttvo",
  "key44": "JppQHfm8p8c8AqyBVVfeEY5tTNHDQiXZCT542WVQHNNxBYqWAMaE4QmZNnbFKesM7ruA5YGB8oGqgep3nQW9Mcx",
  "key45": "3FxtqpanBC2SbFJKxnAsU1JTwNXMGLeBrMgQjHUnTGXhurek5NeG4vfj8uUNNtWJmLgp9fsBiaVeqG3qTJKETGPy",
  "key46": "3QaithiCMkAaPdZdkZpuUcaixKHPdEsUtHkr9tnqbrAt9a4dijVQ7ganKpEqYpNJmMy7NuhdoNnZwMKNm71dogo1",
  "key47": "4w8quUb3khsw3DfEKcouTqmUgokvxdVQY5wz2DqYjzqShrCTRy1vPCj5H3222x35KEvMikyQaDDSkgKeszQZtGiz",
  "key48": "3aDyBNPVNW49ohbZ5iyGcjKbFM4w578Z6Asxo3veQdm12GPwHN1d9rA3rXe2Zv1pmumsgcwnWMRgujrx66La5eut"
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
