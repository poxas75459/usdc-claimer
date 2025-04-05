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
    "2WTBJGUCzYXDtpG9V74ShSMGDpb2Q19wRbuKoe7bD6HdDgsVzbeYBAiyLdn2tSrVZDbv6wkbCb385U6L2KtwAgdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CgZfAhfhz5akTBPK8Eq31LSX3fHQXTC1eNCJRCwjZGkMgW3BCwU7zcZuBfEhKKXHd3xiF2i7tmFb1A8zJejkSuA",
  "key1": "3AX9Lj5wrFjoaJ47t4TddBtPcWfKJdVwvkk3Nob6As9z26Y6CYuz4oHxErrAEpMTr3HzRShdNmNnbAAxtcxWiRuf",
  "key2": "o7qQT33w9kJaXLUWvzqMVNUiYkYCQZNKJQhunNcEtNP2n5KEnoPWaSxfzs61UKoiha12Ek1qcHXfTA289C982sy",
  "key3": "3emnw2K6AaFdDVA696T5gkRdrZhAQGkbT7P3kPt9vctYR4AV2GwxMdv38QE3zniZqs2wmn41b9qMYaoQPBHGCvkk",
  "key4": "2NXwbH9cvD9HmnbEuRwXXSxFTbweSbrUQLrV1kLMSfFDiDnzfSiaJRsQFkDWuiFYctyFaYQCdNYPKG5cnGQruddd",
  "key5": "3ZspAWn4x9yfDYorviLSeaBCeYSzgyJopFhLE8nTyYL82i6SWWe6ggm9iw2aeuMTgnjTaw5Pkd77PCRSCrsTXspJ",
  "key6": "4p2dc7HXzyjiHzWSX67EAjRXnBQK9FSDSMNZ8xaTr4vcFU6KjcJAAwTvmM5Vxd525LbBW7H3CUnF6iqrb4D4q4F7",
  "key7": "9EM9yFsqpoopjgM4HbZ84DkRSgfpnYLwPoqUEcFsMvdpX5TANdiUJRme5qfKunQqRyVwgWPP5KidKkLmJv2tMAL",
  "key8": "5Z6eMsZtwuJzDVcYdL791hzM4x2nR1oCPfBp8CkqVsQD6BCVupz64cmGNjsQZTLEYwpwE88Q4fqK6i7RitKHQknr",
  "key9": "3oiT7diBEK8Q189MyKn3yogpaYyPxAM6xv5Vj9yQrdqve5LprZiCkEmZTBBtoExRoyJe8a7Ujzn1JbECKYf3oGG3",
  "key10": "5fDJLG7dzoncMRXtCcNHv9NoRZiYG1fHNDbMdyGiw3zpv5REs19nryAyvjYH5hHdMQ5mxiLX5bWu45hFjxEUY4D1",
  "key11": "3cP9JJDjL6RGL8MNykGMsRmANnfP7fveQz7otJTVZhyRWB9xQ5B2Zw3ij1NR8VYHPKGYA6iXt7uaXMFz9xBQoTHc",
  "key12": "K88499opGcK2NDnWJaafjBg1ncExojiL3n8NFg5MFKmHxczkLkvqxg5Y3qJ6xC3Lg2RYuNzbuRYKAgFSLoBt8Vx",
  "key13": "4cU4aQ3RPxocmHGcLsnTeraWoCWZckbGX3PxtGJsdrJMyGZZuw98dcVs7wMkxtoD7kedG6ASjNobNjuQgpXZt5ue",
  "key14": "4ukL41C56S3Gy7CYTzvQF7piPRdm32jZ6cinq5uPK3hPGCjS7rFmwgWXWVTujiDKpQzc5aE1iC6d7SkBMEHcqKhV",
  "key15": "5fE93DWWgiJmb8wGZMUL61EADKc5UmNPuKoAxv92Zj6gAvWsg1KZWQEwWdYQzHL82TUg7pv6Z29yaEPSJHrL9nmK",
  "key16": "643LiRDuV78MNVkK1PnMHyeGic5EpvKrgVSmeCawJWWEHMDQhNnrDGzU4rL9sB9UVauxkrQUfGLpk8oYJG9QL7ZY",
  "key17": "5QvXDUVG9RDEumCcafqYo8KtXpAtQhgP7NWwAd8XrCZuxWS8PRxCQzMs7gVUxZzsxSro2Pnb7KM2awJhAhKomJPt",
  "key18": "5rcgopLChooPu7MyZaZ2y9zuEzY4DswPVtjbc9Uc7eXnhueQ3YPguEVoPUHZB9CTwQtPKDBsFjjDu89xmEGQnCkh",
  "key19": "5gbcw1LtBxwqEv1NcPQGPk3bdRQ3Z9u8J7a9qj1XCAimpbAF4M9eFT1UEwVbCmuC4orWKLT8dZkkdWmarQArepLM",
  "key20": "4XtcuDyZCymqtZWAQeku9yao5reB1Nz26oiUBuinXLM7i8YemWq9Cvnc94mjSuqAA74jJeeDEPqVLrb1NHFt4avF",
  "key21": "4PPEEaYFgbPHieb4XR1uq8obvNK9GdKrECQ9FVLT1xqGBAGJkRvA3FWrXU8YA5htrb1pUCBRDLxFF7ZTdUY9pu4a",
  "key22": "3vmu4GKZrET8DCoRaWJrVgQxdu8o5CczGbXrZWnm5Ly27StzAsBdo1tSsoiqvsrWpZQwrQi4wg4SdSDn1s9MsywU",
  "key23": "5K2fdLr6wiTKrcdYFMnJqhn7JBYrCKEeeCBamsEpEwjTUUyDjUkqae7eteT4WVrArLWXuzCFiDXJCxthjYce9wMi",
  "key24": "SuwQcQvdgrRsixaCDU66bNNbCBZPdQA5egtWbm4S8fcDhiUEfjzVidE2n4qeQMfRqtkRCE4pR5ouhPi5JqPokj2",
  "key25": "3GLhecAJyag1zinM5Pj5miD58MiRJxZdUpuJQnFf5tgzMpue2Axtx69Qzx7PKbWwA5oLpGzEjBsXdrY5S6Zgzc1B",
  "key26": "5hYx2UahB6fiA71P4NohdxhA5XNZpU5qMQsuXY2WfkWJX2nkzdGsFPf5MgMBxBnKWzN4yH2b7f1Wn3aYAthmqkiN",
  "key27": "4Gqt2sMiWuzQnsqrKNfsLJ6WWDjQtXXoffkuZmApwjuS9kohmtExJEC6hmeCSbBmv1BNDHZMzBr4gWeHFCZPjfiq",
  "key28": "3aD5kLp1En3n3HuzsYqRcBFKpdbrULcgZ92GnBBkgD4oQWUyYx1dXdKCYjdDQMVRNZ8piZpyg7LeDn44TMEkJ1Cu",
  "key29": "4SXbnRgN6hgm9uABtXk4Rc8b6MMdn53sZDv1oYRRfnDmENidmPPtS58GjkZiGrciUHBTHSRZJKJjHuxJwAA3vGWN",
  "key30": "2X9ST8JV9q9GhfNrxypDrfneB6Yf4YJs38cpfzcFZvZXt72AvZcBWdbwPbJgkeu9cLyY8ULmJc1ox4jawPgiRGmQ",
  "key31": "1v6DH6aqja1tt8eAJ7aC8qjYJDbue9TbZuJwUaJ9rH6ZLoWegxBLLYtZtj6i3A38QNsjjXBPze3SecsDEzuKhfF",
  "key32": "3rcwiarvwfNde1BFNm2Yxa7TCzi7Y32MAtGHGWpXjVQVwAS7c5pYWxy8BHHpjJKnxhczBka5d7CSozU9eJvzE1r8",
  "key33": "2CimJWazeLw3W2LDTwUsJ9bZEgMNkWn29GX5TkqKoKeCnnQxi3bDtTYKao9iRrC2iGQhH2mUop5xsCWfu7GobvZb"
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
