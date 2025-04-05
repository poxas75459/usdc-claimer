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
    "VjRPpNeQQ553womgesq1FSMraf39WQftzeTNEJSoUmD6LBToLbHwzQaRnwE4mJFNVnV3tiZM3A5HEpoRwGjbygq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdGqJADbQnKhE8iZXpche476pwhM649sYkEgPYdoovDr487SpEZRgK5Zhht7oBb2yu8gCTvN2nMxA3w8UTxsSdJ",
  "key1": "TXbdknUdKMUP2wThBERVRPUcE8QXM3HUCFhqzddVv5Ru8Hi4eArwoEPXCZkn3WrLoA1ZnYR8GhzPKLEeNBLUeyo",
  "key2": "svK5kup8uJMnsmfJmkWBUg6vnitZJs2Pnzz7PwcRZ24pjPNLUrxqudGrPfPzYEy9EJu84ULgqNteTNaxb2cosN6",
  "key3": "2tVLzqDBRGsdk3U4VA8Wb3K5mabDk6Pw3P9xynGk6Qf87pYEmo2AkHb61f2GgmQw9j9UUMWbhTtmp8HHLy9iJea7",
  "key4": "3x3xW444hzhGyvaxbcAHPnfrdjL2rJUn2cwU93nFg6xEyZRf2TpUwSgcYDJb3xrJiak7TKz8JBdcvw3iv5cGA3xz",
  "key5": "3hLKvgFa6r51SQuarwGRnA1sNpWDGprN63pMGXdvvwSihTNKG3jcf7S3GjZwJP5NumPRKdJrDaUJKZakCqe2NbkP",
  "key6": "2sVJU8rhgW2TTYFmiJ7QsqthchoqjvWSQ1wsW4N8Ay3rdZv2AswQJ1VBWY4dppY7fkPK3QM1nG7ZCCPs5jfqZ7se",
  "key7": "5Fqu5Pqy7LY91d57zEs3tatevX1GFRpwVENzBnBVerfRPVDe3fCJtkBwTHGd6RtT58zcHSvr1dEJ7FyT4S19MNcg",
  "key8": "A3dg4FUKK65t2eFN8LUVxHZfQEkNBY1a8uQYgWWwAQPnRaCKrAzQC3sFsdX4M46tgSBRTC9wibA1nUkpicXVGow",
  "key9": "4n3gchxPooPbXZ1zLEEnSzfcAVbhXA3pQcPLHLmeF7q3b8JhpfMrcLHWJXwoLpN2JnkKW3XQMD3Gg4d5F5PJf5yp",
  "key10": "3BEcHcGgnW3zbKPXE3jB9oqTDnS6ZQy7Qi1CStv1UnW1ezgDQ9kHenaGsSMEFqNGRAUb8wH5GNbY7DeznPU2dkai",
  "key11": "2SYxNTyyfSN3AWpPZBv1K5phNU2rsz2rAwYxT2qNzcPJ8ZxGhfgksxtdKB1w1fKVF9fiFBcJiQS8R766uE5MfXDp",
  "key12": "4FV8CpFUgNHGfoik4aPu4zEvYWuDi8nnQqyud2c6uek4DjNJp8YaP59LqyQAxNiMppbTwYTtonugro6aahXVMEPa",
  "key13": "3SAbwoviBb4sTNYZtBCtgTG6aPWLtLncupzJSqUgxBuQopv8RfX2XXmJuioEmaQvQtBK6ag4QCBoddTvfd5rdcGk",
  "key14": "59YMDyac5sRqeBHyhUeBzbJi9WFnUV7FuoY5Mr3hQKd4oAdyjBxzmxTtxCZqNCGbycUu5J1t5RtoPTMFagYrcDhC",
  "key15": "2YQpbYZBDzYn7Ljpb4aPagsHMRfSGGiu2dCgbnaGvd8dDLyjF7hcRLvptqiAz8Y9Hr7Ht7QKox3ERpPmkjHbpWy1",
  "key16": "4pTuy84MGYBAxDAHna7Vz3HQrYAAEauDTDoDwXRuSjydb2UCv7mjSEQ6D7yG2WV5sgqLo8sFnSrn2Pqsu4DcNLNX",
  "key17": "4A9zti872SXhL922kqaGFgCkfD6YuM8H5sUFhUyaiALNoe966smRQoKkFoNmcgMErMaY7afLMf8RgxNxFweJTaS2",
  "key18": "JPE8SCSHnGLwHas4eLXVgW9pShkPud6LB5Nn9W1emoHcebgcxp43LMiZLHZ4QoJMUfHduXFnyQH1dj5UTHk59Xf",
  "key19": "VtLqKGoFUnHn2EsvKyvT2zt6RzcS5XsnCxV3S6b2kz5wVfFi6ChobrHEd8EGJEFKPjD5pqqfgJvi3somxzguDK1",
  "key20": "2Jm51gFQuRK1G9PJ5kkHurKV7W8vQhEUrHpk3d8xvV1YXna2i6nJTtRY3vctfneyg69YXqdkcR48ZoDceuRXWPdc",
  "key21": "2nVDUuMD2BRHcVDea1wztxjdLSnKey3GHpJQsgHDTTH2RymHP1X98z2cVBkU5GbR677dcrsV9vH7nm5JYse8Q7rs",
  "key22": "3uTpb4XAr9XKkojMYWxLCEcA8rTKuViJAs3Wjqm7sTCmuhtFxRS9oUHGkuQm8MNyvqMtyveXtnZD8vkmhg5zZSgj",
  "key23": "2BVn8PxSTvYecY6vNDVQhFwjMDpVXMxYPTSve9nUGkk2YaZd12iFi1SQhS4Y6ZYaJSWwJace3SPq3Rf9rRHCrDnw",
  "key24": "EDLuN9pnvw1pBsBo63j7zwUWgRjgfHpzTZqQ17Scfap8Vd4RAM486QJVZfM1B5kvA5SkarZHvPikU3JVnoVwB8J"
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
