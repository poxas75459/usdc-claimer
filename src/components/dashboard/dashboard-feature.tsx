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
    "2c2eEJg6CScwiF3SnwKvDgs1wyYwrDQkXswekWZAANMKnr2zopqi17pPDHfvW2mghTyzodJqKZpQ1z47D39MwfT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ULpf9ioWrtGKUGjUvXqaEkSXsvWsWtHiSzy3GUM15QfNF1e7d9gzQh53kVxsojueLSGJfCPj4Szy5k1LnozgfL",
  "key1": "WDxVWXiBWxbh75TFd3ahz5Htq8x7L2sfwH4RLqQnX5KHA6XedAZS5NvM8Fmf6eNEGeiQeah2pTngkMMjuZ2QtWG",
  "key2": "2UKX8FsRp9utzrBuRc7f2vLVPYbwZGrquMKUUxa3Su5M4xcGc51eQrpJJ93HPDY8Qpo2Bv1e5s3BiErUYeaiwx3L",
  "key3": "rxUyphaLNiytSdGqoyJDENMZzU4fHs1UWutTRnFjeLNner8D4ah37DdwQBnMWLbxiPGAJjQniKdUZuKEf4a1G4J",
  "key4": "2JfDKaYZJLDfRDYM1PSXdstigyPDzBMd84GDwq9pknAy49sD1mCtugXrTMdUQJudyC6dppfnkQStja9GyoGMUoAm",
  "key5": "4WQ1oH9S7qPgxG44C7KrHpZ5vK6j6zzYC7tT9YxZyrYJCw9yQpPMHpfk8oByDRzjAZKzMjV3hbu2KPoihpb3ysLa",
  "key6": "5weTmn9TaDY4bWB4jzgaKMtdmPvRojRzhW1bts9ANe6YCHeWeBXTZHm8JqoJGX7JcTKJ66bCts3wvd8VQr8cCkAa",
  "key7": "3DwNpGk9j2MPgcfFeXFV6zPB5ynBbrPocnBFksLj8UsSa2nT6hdZLaoEPJ8auR2t1ENwzaKGYCnCNB34kAbyr6Wq",
  "key8": "4yjMARVPgnvL2MUuEmFukYnwPzGyXYrGT6WPcpnsyB6a3dxoLxzJoKXTAfoZSSu5emAhDSRBS8Dnn76t1F7qCZgZ",
  "key9": "zxfSvHTiVUsxiBXAm3o7Y3vJE34RjxJrEVg8XBdCH3GnFMbRJU9w5f2j8ztAKKuymE9HqhnPkR8xKMVr5AAd58F",
  "key10": "2TbQKBWhrAF3fzPqft1QbUe7q1oK7Mzs8wbVmZiHXh6mv7chMBFZDDyQET2wbnamvLe5nXaJR9vKdRsnackpVS2o",
  "key11": "4eFjD8RJz7nC9ZSVWfoUDUAJPQDjQy1aUnPyqCiUXxFdH2GQCQqJQ2ocUacv4ckXG8sZxADqbTgogjzC7WiZu7WU",
  "key12": "3jDeX3XRwP6SYXToZDTiLkhGRhoFh35EhSnZQiEBaT7j4D17WSeSMpLR5nit5jXKkAxmg6i5QmMEg7vkzE7huJsY",
  "key13": "L6fed5q14e2FtraSvLea5CE5FvuLpou3qR3cFqpRBFo8qwHY2GKLSASwXc57nHk8ocFpGb3q5RTozJuBnN8eBBA",
  "key14": "7GAx6HgkgP1yF4sQnHgJCkiPcRCVFFCFQmfCR9wZb5qG3Za1S8Yb7vmZqpXpdrbBZiuiLGHaGAzW3MP69ei5Fby",
  "key15": "5kegPH69zCUx3AQsEssuTqsy21G8ucJZWsw1nqtEJFLWVrhBDekyVnLzeh2zRvp5MakMRawv2KCTUjcPEd1uYkQS",
  "key16": "2SrxoTbWA968i7KTDYDdo57X9xCQqkEfUcsi5SYm7dDsHvWKEXGufrjRYnZywnvi2LWUvKk5GSENPg3p1LwP31VE",
  "key17": "5dveki4jYgTJBrPDbD6bej5gHW2q9Kg2GTrJsePbDvXVrZAkvDWLW8pGWjsNuAruNiKERkSASzaMhFaSdwtv3YGK",
  "key18": "64CYicQVvonftujHaXyWpAVqQZxpdNg51ZPw1cmnc1Ep2otQZ3ejQrGgRu7W4XhMNtmh4dqN4EADGDRaRmB2uqvQ",
  "key19": "5Tpr3jerjBDiUHFYKMbNg6y8S51a2AS9pZ8TMacbiGtB9gXKaSZHRyjrbWj2Dqxp7EYLQR1gwCjHEPHxHzEVCSzF",
  "key20": "4eG5aJYR9qS4cMaYbcGEdbf98CgJrNpbLURhir1UGVLHF7obBKafugKstKFjmWFgoLoKTwab8jPXrLurNLkfkZh1",
  "key21": "3dupH19EWDVbFiUjbZgu3KpmREX4SEr8xJ8AVtAxQVBrV1eU5GuFucDrUzwtJPQGrGzGvjeSMFdH6DgAZgX9wbFB",
  "key22": "5nvSBeXSFewENme97MiHmrLUo4Jd5bAD9BuStDc2HQYpUZeUzcLRG9WnfNU5XtceSykaRNrnAPNjR8T8XwG5F6Md",
  "key23": "5JTRdgc85XWYjMpjtQQgLJX2zsN2ybGTeW6Y9cyfyzYwb1qdCRJXak2AeM5Rf33jeKx1ZNNAMn2uHcbUaAj7aYWa",
  "key24": "2saDet7DmvyXTTymwof322QBZ17tE97XK4mWahTbW4pxMGNJvxYNrSTFZk7cTj2crbLWzCdHKBq4LRxDij11LtEt",
  "key25": "Lux1rhvaFDxU4HPY65dqBfJNUD4RmzH1DsTMd2s13U5X1bhsccYC3e1GRi6KgJ91D1diAWNbjn22Hic5xbtX8Sq",
  "key26": "3re1DzY7UYAQ1dhE8LTtrJWtpUXRkiMeXkaSW7h3gQwp4WV4iutc9TtH8tr6W5s6ijA5QBoZHMxNaYmuqETwoykr",
  "key27": "4UKpPP76BcZQFRTN3sJZAMaGGX1UBhHBYTr1JB5BC95BzNBTDFcJzfjLk7QpbmHjCEjZmrxFEnQFfYP48ziddz8b",
  "key28": "nMmjsU1tiQwCe2A7tawc93xQUKiBXguVUEiSzHgNLLg73f724Hk3qR5c7RaSr33CkecdrWzjEPMMGReiVmMdBRK",
  "key29": "2h7nrHAvyvuhCvR9fs55FdQdHdSLJJoQSv4gpCzBDzwRpVGuzCeHNBV5ot8sbpU2HsS7btvR8c69DG7K7oRfFF4J",
  "key30": "3MSuwcoKz7kTZuz9YvBtqUUAFJeZdXLSTj7zyFGvqfsAbq9UW5RGL8Yses2DypYNvb3DgUHAx78LA7pquYdYr7Da",
  "key31": "jKE9mYKxaN7mW7ev1jrNa77zaHnqreAxujHXFk8G1xX7tqjpgpS4NT8E2RZCTB84YSUSMnmgzb9B8N6oHp9XhSA",
  "key32": "3fzsLfjQV7keBLtVJPyyC7BY6HE7tuPn4fx6wNnNUmEeUVHZTQzmkAtaFkrrU4cmcuoruC95L1RtrfgVjmNPuE4",
  "key33": "aYb51JjF24ncjFPsfQxwo3xDqxrrBCiWwZjJx8L4W2xRbg66LBmJW9PUyZKSqrffsQEwuDW2b51qg3ELsepiK7a",
  "key34": "GtRPCM3SHXUpjFkVoGcL6Xsj35YekNA3rwg3JjnSybfeJzDoP5tJSWFH68t5CvWicTifo6zHxrZVvyYKDP9P8YP",
  "key35": "3fRH3n7T4J9JGK3LDhANQziiSbYQrjPDbyc7pQBRVHMVD6eXKgZxvmstu4kNEh13W84Az6JaKEiDgDmd5Lk2AqXk",
  "key36": "WKVVQ6DaL3ad9ohwZCyrBd92zgxgaoRR7FfKrmHVnY93ZZdXGVsJqtLa2M2cXqNKKjNTPGHjPE7NRBF9bd7RqXm",
  "key37": "tGeawsHfWmzokezqfa7t3G5mvYcfZUhiTnam6jsd3omS7K1qgYvYXB6YxZxPrMrQhJZa15NYoiLqbAGJmmVXp98",
  "key38": "63NHKqPSs5UKvYkpfbC165NAgrs4ootLzMqUs5BZgTShCZzJkQdY5WJRndY3qopyKbyMULCdAYsUzRnzCqFBthYP",
  "key39": "4PtT4J3eUHKS9XYk8iCpTT3JSWpepcHR9DpZ9rjdL6tyzsWNzdrutfUYGMVQyNzMgUK1vVFFTmi8DeNrCocrHMDj",
  "key40": "3vY9RHXUVTo2z87AUM91mb4bLPWsR3X2jFq8fMFayh1Pg5gchnMLGECE6tQMPPgdFoasrbBywgzTWkfbtFG312Nz",
  "key41": "3QbtZr4yTYvZYxDHeRCfVegtzFhPJGg1y7JJUgoAaZBQXSNoMP11m38n3tHjoFY3rEXJPW6eMW1fuwFp6q4yLDmG",
  "key42": "5mGSQwE2PS84CKtJFBGy4hwMm3UqftZ1ceDrLrhDZEeF344hRMZ5MFdEXCekDFCR3QtkJKUrrwPRv3fdrDjqxPz1",
  "key43": "3KoN1RnhYy2gYwKWthSccresYQP1u1owVynHb64PDEFPinT7Mmm9LETzLLVk6CNJ2KT9BLTynmHiALBW7MzMvfQw",
  "key44": "3zUQ4g3AveChUZnWi5vSQfDN1Nk6TPVsVdavCsTcSje54zpwe6XpDzBPojQokBFZquiX9Z5H9XJrRCfLodVZJdPq",
  "key45": "3Fi4JBM3G29gry2F33eLuurWFvA8WiER2XMtk7QCA164KrrQtm4Hp7D4syZ2WUfYEFEg19CBFuU3dF5djR6cEUo1",
  "key46": "5ByYBwHDmnD2EtMeUADvA17D5fdUpKbDZ3fVd7bveSEZ68r99n6uFVHPbmZM7H6JJGF12dSaVw73bEzCNRTEWDW1",
  "key47": "4p1nwDitVfLBBKaK6bKFkh51DBS1SDrTi69pdJwwnkyjUiqCm4DyMQPRQ5SMFt83M5d4JGdQXLJQGCXcGdsduAv9"
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
