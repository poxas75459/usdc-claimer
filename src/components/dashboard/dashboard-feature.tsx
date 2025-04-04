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
    "3zMwBCBLqq5sEMP1mRLNTs87uy5q6embfwZ7DKosFpktveEFmdahGDdyrras3xiHz6CufeqDMmE1UmW127c8czQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejVsYi4aRJTLhSnvZFZHgnbCXr8KC95buQ1eozc4H5DxB7E2KAwbWNCiLNcPPh6aLDFHPbUKCtbQn57i5rbF3Pz",
  "key1": "3fAD2KZCadyE6qyuHDtfE847viYbctQ41AfJtWpbgfiyaJ9z9hupC2wLaZWtCVBmNJ5x786pSZqDhzhEAtygaLhf",
  "key2": "4qPGxjA1ELUaMRjsfGgs8ybk2A32JejHggSVXPQtd42kcitzdVfJGbcNH9HznWqonzhE58kqVLjbEK6yfL329v2L",
  "key3": "28QnCJYJSpF3moYq8eieHTcYKHVRKi2RMBCL7cAU57mXKmPsv1548B9XusChp3dj83VtAJgc9T4XFhCpHHe6MQcZ",
  "key4": "5nHX2L6vyXNP9AFC7ij2hmsCuVuuS9spcEevSJ7VcBXoerwfZy8yzz66ABc87XR9rj5HvDQ61ovatZwyE26Fvc71",
  "key5": "3woABZNp4g5m3r6WQ4hSNTdQKY6kvBU4rtEFAaWjTXmMZFJvGzJdExVGaiGcjjQsiu25g7hb9Tno7zJph72FfUSx",
  "key6": "Jem9wvsZc2BpDsa5JTJTdyuQ7vM6C7JPiqDa91yJWCij1pvgBNfnpCisKwz6fp5Aj7p1tEKsqS5svyLe4vJhTXe",
  "key7": "2PBNtpZX43bJc2PKHMJibEBQxZKoyzRgbjyKXsdNJyZvjZTMqBj7mrJkMauC8wfwftw3HhsXzbtUQ7Vw45k6nARm",
  "key8": "33P2Z9ybh4y7p7UGs9UmR89Y9MawcEWmooT615q53AxgevJ9BeJXxVERcFeUQJq4WRxYhzu8SuYFcRdGgnUNQnQ7",
  "key9": "K7sevXFrvd32c7FvWURnGFJokRANk75Tke6Rv41hgpzGrjhrXPif4tohUudHTLSSP1NPcCKSP6FbiRxhti8Hfq1",
  "key10": "3n6rNb8cXzeAKvbMxh8aYqBcom7N4m9N9HRLwkSjQs3WWYruYRiU2hSSBBjG122QViHdAD1E5wC9PumwyZiqNpaW",
  "key11": "3DG725S4SGRBDqpQ944aq2Te9YnwbpQMveq6FXRn5UrHnoG42T8Ymf872L2p4cJke49YWCzNbN5zAcywyRMJTDMW",
  "key12": "4p8FZNik9x3vebtTEhQxYARzg1DB2K6pz9aoeEEieUcwoYzDGDGHxkxGC5sLSnRToqJF2PbT1vcYmUdgepgWYN4R",
  "key13": "4u9VK6BRjtAwnkXz4wh7mFFcc7QhwZPArd7kNg8As2d6kwHCz5MayefrRFNA9HUu6GeviuyVpvJdbNg9M2b2hhSu",
  "key14": "5ikgwAaAjhFKPzLV4ZZovHdnJALPrX58MsvdHM8ZNCvL5wdjY4mX4ZFnEfHcnwXjLkvnenQ7CmwWc1zhwiaziXAE",
  "key15": "2wXY9JBPPU4LLweMCvRE8JTvvZx1vv5hCHvmzf6LijRtAuLxDp52RYj5Qi7xv9nrZDVGxTdMYh95SLMg9nBeUWcH",
  "key16": "2vBhU4xpGgqKWRdA85SohYh6oSukGRaPiLNPh72qSEuREVb18URy53mbjrrkL16LTFMJhgpAQbbzCBUU82kzN1D3",
  "key17": "3suJRg5vWr3tVwSZve4vGhSP4dZV3arrNib4nJ5rozU1dK5g8Z3u9n7KhmDZaSAUe2CSxuxRvH9BNLf2DUg487Sr",
  "key18": "oqLkbMGZ7ZHF36kwwoyG6ifgyEJe2hqVimeU3MtrMMFoUuoZAfurjdv9EmJEt4L34mq1MHMgbtbXBxb8DipzN9n",
  "key19": "5rabdmxWk4MKVrFdnVQM4kKyf8eaR44LVNJhQ1tFTaE1agLg32BT19Xt3s8wCPe8Z1thp42zkPoQEURtteMg55fn",
  "key20": "23S3zypFPGbhLVwZU6qXHKjMbbG4co6zuKy5wvp1yGQRU9eQVDbLbJRPsQgDZBDN2YofnygVp2fxYu2u4Kfz3TbH",
  "key21": "53e4mRiZ38a7ERZ8DUysV8A5vVayHZT1CgeQS7w6tw2qMw9hgo3ArsS9hfdsAmNwUNSnRmb53vLbmo3Xd2nxBQhe",
  "key22": "2KsyXHar9SJXF4fWbjRT83C119HwMCacogQj8JDJJgkZT7rVkDuQZsMUqGzdH4gTFWMkYVZBGaFnozrZ5hpWzsWj",
  "key23": "s6m7xDL19N3ZoME2czjYiuLhJZmuNgmECvECFVWLo2JHbTcFfL2rSAjPWku8PsNLkXebX89Jo7Q6CHTiLV8hwbQ",
  "key24": "xiXtZwgy9wpAGthymNL5zBcRkj1a9RxZtBnjHyPyZRsn1txnC78VKjcJH75RaGKhH9Khm8oubS1Rs3VBTLvy7EL",
  "key25": "2mkeoStq2eyGupcct2zqLR8ZBE6hRpgDfH8DQFWAfU1bbX6Pr8tnMUmkq1PEdEsPVBrVY4xgeDCSZJotRJ9jsFBw",
  "key26": "DeWDAivbAxkHmbk646tMo9kuvCtcfLcuqorsTynh6Wwp14BYjfKJJtrQandhEcYaqwe8CUMs19ZtH3rJpXkYGpr",
  "key27": "do4eUW6eXWtVzzaEU1HSJSWxrRBNpTXSFoHw8CvnAgUHhyPnM53e2FvxH9sZYYeMzwvjvYsnmKUeAeBKpu1WH5Y",
  "key28": "5sbvyox1kU9YwuecZXWyApWnfhCTfNP2cvDdoiek7Yn5ffJWyTBuMrHwGc6dgZBBoijgpMvtVLTCj3shWowPemzq",
  "key29": "2bzuRFf96avoVrmGZjzZpHPMkcycXu9yX8y8nVFE2mvyzqAtRkCjXPe5wnyExnn3fZkyqcidvEXz6pf2i9zzT8X9",
  "key30": "5a6i6VpNFa3fCsFW3kkFScZzioehdzw5x2mRWeenKP8adPaeuVj8YdRy9LXvThg924TtWHL3jtXsYPrNVuDRWEoP",
  "key31": "2J69ZjqbovZiD1Gn9Zv1XxAnPPaiHG6WjYgD41BDAAc6nyvzVQYhpmSgGSJivUBQ9cSs1Dk7cvoiJ63PJdDh1dGP",
  "key32": "5TDm22xAPXfW4HPgEkdzS4xaTVBrpgjMMoewHPuVQRy8gXse7sEWrGGNA7T8bsnCMMyDQL4y7r8JTNeo7d5Vg6Z8",
  "key33": "2vRUxPntJykrL6pi7m3KqanfShX8xr2mNGe616Su9mmDEDMUuKRSpiKrprVJwkJrrgu2Qu3rRg8cT7PVPmuxB3FU",
  "key34": "UdyAZPCr2PY7yfD2ug5yLSSHT4bgeZfW94F62iMjnDmmD2J51LeJ5qjNY8CPXFVXkRfJKivzLGKLTu9wSdzaKha",
  "key35": "5GZwNWeaVTCPqrVf1RkQEyRMdRnvnqXt8NDmgcH5JdWPq6RhY5JjT3am7SqWvLYxzMPkDBixHRznztBZLrBy2rzy",
  "key36": "Yo7j7L8RgTa3F6RaxPGmvhJnFDYLuJSoK5JWpxxU1m5kvNXacFvWy6o7MCL2WjaZUDTsW5SoBF7FeF1BoUFpX3Q",
  "key37": "4nA6kB966unRHZJRVamK1qQ5m8xrizDY5Q42o7vyiNcuG9XHMjMPCGyWvNHpfitcN5jYwSp7svB4tMoDYYWAkHgd",
  "key38": "mKbCx1uHkLUUKEXG6WWJ48YjPCjtSYBc1TrERrmG4Sgz75kV9gd6eugKJ5RfzJDQ6qtdooS4tGRUWdNL52yrrBP"
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
