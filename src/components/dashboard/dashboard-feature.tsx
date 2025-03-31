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
    "4PFFahfw4h9smshT2mExfJZM5as9KkfViLpW6JB8divLGsSUrVWnFc2VMz6YdnswF3zsvsp7ZHnnWM2NcLECur3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kQPE4V9ZrGF78m4cnFjvceWxTLJTvjTfo73cKDXkRqiR4EvgA4TVUu3wbUe9T2ejPr2AWJxiZawx2g2TcTrAL7w",
  "key1": "4rHK294RYQqJUWercbc31nD8sf3pqB3kgcpGhKc5RNHe8PVnDZkmm2CnQJ9Y6wsmPErC6cr47AVKTiJXFDxHHVMe",
  "key2": "2nqrTrkar3gPeGQSUeXhntJfgS23y8Dq2mV3rvjZtBekH62KDrznaZvoDHBXsWSpt4gFhC4f5qqTsLChoGM933Pd",
  "key3": "63qkZagqnD11yXNEdyEphvDC2N2JjhnYu9oUcJQDcb17girWRfkvY1PYr1ZhVZSEKqHhpK8SQHC6LuAXu7BRikzT",
  "key4": "rFDY3J7U7VQMNkhsBMTVoxaJVUYY87CXafHvFD6DwMpaNtYNosm8bhqZiTmXbWZzKNbzQNs8RV3b9CAhLvw9UCp",
  "key5": "479MkPZivPjYAez1BekEDZUGMRJt7HfED7yecijVTTiKSqD3kcqbsoDdSucq5sJ8qacFmJxUX4KZZc7A7nXezjAj",
  "key6": "Us3xEtkStfn6LDxwyWhwh64bfbJDxWNakTK1wmbm5zbM8K32xAG38duGr1wXFjQJt8pHe31NVj1A7rinMrZakwG",
  "key7": "3UgFCuBE4EC24d3GTJS38CoG9F4zUdukMDRKsMaUxaCJ8ExSrbN2DD2gjTuUwPXJKwFXbuWvcSd9XZjDXXbo16J5",
  "key8": "2hVZhoMam9fieUmstCXMmHjTxetfn36VUX8NVtXF6eJ3vzF3NV6fpgD5ihGuUGvCbEUYg7tk5jqYEnvuhJY63MGU",
  "key9": "2DQpyzMTS49BGZP2YYxvzkbTUBaUA3jFymTabg2er4sR8gi9DQRgAenvenCKdNNvxwx5sEDs4DxxNRVo8F1hZAqW",
  "key10": "2uD313Q5LHLhshU1vHirw1qPxPjHWmEzh1PuoXB19AbDuX9J5F91BZKH9JpPWqHFRXE2GoDMfzdDxwsFyxTNFsg8",
  "key11": "2ZkyxiNdtLkcBTJpFga2bKKetGYNoUtJaS3s72FYBsecyX1ALo3nw1FWUiB2cpoV1WNuDdMPQHTkcrdmSt91EwXW",
  "key12": "656QvTBobq5xgg5aFPFo8Hx7vGTrBXP8eRZqMmZ3BzZww1rKzswxY1NDS1dqoBdbckLqb5AjqrtCWq57tmiHtbtB",
  "key13": "4oYZNrAK2qXsk8dy4HKCNFTRWS4DkQ6Z25MZPUHebQu7m53Qs93xth21SFXZCAexvDaJDnQhYDVQYQTRYoAgyWth",
  "key14": "3yx7KvwuzUkuwqzLjF9E2WVPbrafXtBasTwekkZcg4Uf2z9viWKVv92xjrXH6VvFpcRD1QHdAsnqgPKPRVnF6vnj",
  "key15": "2wVK8jNVvKaY61oxodq1wUwFduwBs9fddzGAz2y6un1psaDFL15gLuYaD1m7Jk1mH3Coa95GwP4xXmmiDTkoiQAV",
  "key16": "5zEQbcfMPBTdnfbjASFzR5SStasztG4WJJY2qWVvf4SbAXAQyTk5cyW7VbAPZmQt2L8dJ1Kbp22pVVpJbsz6qmnL",
  "key17": "AXWETrCtZRC9qqu1hDAxx5MSH7ctDhkBkAdsDLVLByhaGJBkU9PENbuRZETvYNXCNSBQmoJujvjPrgfpiUwTREQ",
  "key18": "5tEk1CxDxg2yjPAaS9E3ZjUsQDBBxmoja5cVFeQbhkC8xmWpEvepW6quJH1noySY7DdD7uU2NVzLvh3sCyoFUPLn",
  "key19": "25tjTtBQnpqWVENkndm25nTmvUDBthBqLijZcXsbUHvShwEgsNu5obXvCc5PosmykMCFaNFnCxWrmwaoEmTCsmFG",
  "key20": "pzJ7nGT6WcLP9wqxeUC1qHj9tmdqg6eHWXBn9vs6eGZcdcz4funjZJmSjCTEZDiGVqwccP9r9QGgtjcbw8BXgzJ",
  "key21": "NduGaFtX8pnDx3VxBCmiiZsZL54A3fvP6hf6K31EQmzpYHpovZXNxg7T9kyYVQNH3XYTQNR6w7gXZxwbcqfMGW9",
  "key22": "RKg7THmv4AHJwkja252bTf9VzaUNNui9tJn44dMdURpMRMWA4D397wchUsJwzDkNW2o2AAbwPJkFcX3mqS73so1",
  "key23": "4Cjdm6EwTNvBsitHhmwUpXY2Dgqv47G5CzsET7j7pH1UY72wy8Jfhk1WQNLMKiKz7Qb9vdrjahHBNqtFTiz6Gjf3",
  "key24": "5coaDf15QCovCjVH7GJXxmA6T5fq35yuh5WdiPP3CVZNrzCc9g7AUFseYZifc2bbh25pte3snNbr8NndL6a1W9Z6",
  "key25": "crwWmpQF9kU5ZBp7hLJ4U6iL2wiyRsgXAV3BaWoMVFzLXDqnehPAfTr5dUYZXWZnX3mD1tiuL4mjGLULHrenxsv",
  "key26": "4YEZTS58qtsDfsPdefENzHDvXYANK1qofbEKYPgCUzpUgx1fkTNJYLLA6y5GiMukg2TE4XPYy1buCJgN7NpFL6k3",
  "key27": "2qq4caGxFdxqz6LtfeGvsxUATsSxMBqQHHgGTi3DSbsiCr9BppJgj9y8U9YTtqnbQYhqwCWKSRCFTLRAxUb1Dfrs",
  "key28": "2KtWEjeiFRgPTnuwnQ6fgTEtERrxEnNacfNfSS6FS46hLyDz6gbWZWP5Z9Y5uzBerRJtf3AoCKfFCR7ypuyCQYfx",
  "key29": "jZ91ory2wAkvoVXfsZgyV31i89GqCrD9Fu6x9KzUhFxeuxTkZWFEsvx9BvYsMPrH89CkQ2LFFReDYD2BhLrHV2P",
  "key30": "25fYcUjAS3oSnCAFkCqmRacJYXgFvhx7tjAUw61rr4QrEZrpTDhxcugYZK4rRZWdZo3jskQoUmjCYG7vxy9vcLqS",
  "key31": "4ugsti8YBE9xiyahZRwpQ6cymQLyHk53aoDdE87KTTvLkPTszEZXC5N4L4qJrGtLUDiAnqQQ2Etcf4w9xkmUT2nG",
  "key32": "4QJeUUnUcghr8Zhg8BW6x1pDvF6qLmFKYqmE33iGaZRvjqn8czQEjyNhRKjBCsfhK4pmPKbTYEmiHiWtMHFx4Ppe",
  "key33": "AnDLWd3juDSwfZp6PxPfdvQLZgb7h6YRcScTBNLc7YPogHACV3w844aK7DeSkgQcUx2LLYKi9pJ9qJtEVKfXGLP",
  "key34": "cCuc6TwoMT1KpzhYsANTxYShWXS9ZMPMRcLvqYWDLFrQvLMRNBfTdpv5U1ExViW7nGiWfKCzHcEoYc9GpCuSK2q",
  "key35": "2SmvDtg4AjD44JsjRJ9rLbzEGMQ7zVQv5uMzTbAW1HyigzHKPaBedYJLLjNk7yYeEufTBCvYt5eCzw42xxrpHpUB",
  "key36": "5UvLdtGR24TcuD77jxwg4o5yHEPtpmSjU5EYLkkfpRvaq4CM61HKF9Q6xLtoQPi3dV34UH7ru2b3YgYPcAyZ223z",
  "key37": "2Cr8q86kTweXZii1nubVh8pjSNkQeej6M5XkTioYmTJw35H7KZHa2rNnCz6rLUJkuxBJKUPoPG7yHpXqpxwEDDCm",
  "key38": "3KP8NS3kJHQX9bsVYnoGxjQEKXdhchHfGbxsLSEbgqg2pth6J5RduLDJDATYBkYw2C2DjF5jWcRXZ1SkwWL7UJgu",
  "key39": "5cHmCTJDKdQiYmATBSCNtuBMrrVQcYYe5nQnKnivqLeqcfBT8aNKxSM41vmovQZMQ8HqUShehk22hvrLhGsxu1Qc",
  "key40": "3o7iikV6HYWhiSMUcmbJMSTj5vhL6FPqAWsbT26nhRJBnMJRk717LuhQbwpe7tdcT9RLtTyjiLACzBQC78ZqhKq",
  "key41": "yVuNGnbN8nnj12Cw8ht56CXTaxJJsSPsxzDexSkC4AtXUqbFZnf8nt2hGPRGKKTovQKRfRSeWSYgrnbipbDpxAH",
  "key42": "S7YootdS5VA2k5bvmgFjEptVXXke9AgWaX3QNThXN7ecfpp1RBEJ9vabXb7MejK1bNShixagUEQ7iJMTLK99pHT",
  "key43": "52tfDWfnEgpjQTapKL2zEcu2anowcgaRVrXAqnHbrYTHGH3uS6FNp4bU7F41oGUoio6RXi1d7Qs68QTnctJZt3Fm",
  "key44": "5yVN3sANXqQH5F7zRSCrmPisR7oS9T7sBTq1BHTQZ2TTic2i8UsPM8cLLq8AmLuK64AZ22fFs2erXKUSCXh97T4x",
  "key45": "3QS9PPtxPJYyeeMCpvDxzCabm9Vw1aWjuZgZmo9KDzz8HMx9PCTmJR42xTDxM27GgGtXxSbLiDHzcPaf9afHfP1s",
  "key46": "3wq5y6LGBJEZC7XAMCrtJWeZqRkG5hhwwHTW7i7NxVURzkno4D926ZLzocquN8HgfsGYJp3qNH6g8KRtMfsExWFX"
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
