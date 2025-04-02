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
    "A2TY1xPw8US4QHnqATipuPPyMjACtqxSNhTMJFbcvADatw1wSD9dpZPC9ojyudE94j6X8hK81k9BZWYeV3D1PQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hufkD92o64MJDxpv2UvBtAcidtdiQKp7VLdirL8yqajBBvkytsMbYkzpD4TvW5wxUs4zZiW4rX6PGuTvDPRNu5",
  "key1": "jeMJuHAVfDjitTopPVKFTVVM7uhPf1Hrdpg3JdgEwEvR4z4kgh8mpNLPrTpG74VJuQKnH28B4BRYTbaYCN64XC5",
  "key2": "2ST2Sh5D7L5PSquhrtw5ptiSFCQuud9JuGVXZ6Vb7qCCGbzPejffALsvPAgGD4vVZW4XQFRE7d4SYbP1zfiiMxdJ",
  "key3": "3PLfv8B1EPdUBPqTBrZuX2XtS8UurQ9W8DgGzpMELWf5hU7S5PxwgNy8QgpHEXbwe7PzuPjuQXLwZxxePNo5sTme",
  "key4": "eFGG9YHvpTvwMKqjM1w7z3gMX8u9CQXLE3GXiGTTVJy3ErqgbBKRLbuKpVoEZRNXJFwVgS1awUwyCTKshF1kAec",
  "key5": "XunZh1SVDWhq6k7UToQFWGFSPkhMv8xbSHJCJJoSxcK915bJ8nze6f2dL3FmPUQ4DUBx9JnTCwpHATg4BcWNXUk",
  "key6": "5Z6Ld23JpMZThDbvAk9LhVmNmqsLjNes41Y4TqgFJhTSSpV2ZZBw73pGDjgkDNBx8AWgkeC4yAsKJyRgSiFPpMfa",
  "key7": "4vRLQQMUkFi5Kzdzzpf8QRM7wqNwSsYEU4rBS9DHUcc7ReLzmFBmJVjm2n3Sb7R6PXqaaQRtpXNKD7RWUKMYqrcu",
  "key8": "3NhGWW8MeupQpgydm3dUzGye64jXeTDv1jMEkppPRqwzs4TWMNNbcqmv5mVdAyaMzpyEWoQG3yzgZkEBQBqutosR",
  "key9": "5pfFothaeTBEpeAMD5UG1cVjBRfF5mUgynNo6QBHdtdQAj3fpPxgDkfW56mjEEX3JpzhcH7uHftx4RDVYWrCps7X",
  "key10": "46SY3oRmH6H6gCCdP9jbNAttXq21rnsSErGJWoFQqGLYmNBEM7km3UmULmqucm7BDkYQ3DvG1DU4TUWDRmAb1ZhU",
  "key11": "ouN1gBV6JfB29kqDQwfVBDXwqJBhhCiPjjPf5ZNTYGUcS9dUguhMp8DXLhvUuDJgKFoaaQKwPDrJAk2RN1idoBB",
  "key12": "3rr6MVP8dV9N1FG3bxBGPvsfN5mkJbUqnddZ7H7TdNjqxU78pQutjKj7wMwGacDPszciEBVudm5q8gQ9q1KrrEZz",
  "key13": "mexNDUBtRtjfUtPi7vyyGhVoS6mjvNhhH2Somr6HsD55uG4A447W87RhCFZ99rDKoergNKVRfnDzrWE9W2WgMCC",
  "key14": "522iKK7ZqqMiEMscguFYw9YimNARMtw5izk73pvkAc8DsJz2CyPWsPc2psSzHfXQNVZMWrHU9qo9ZgcuYtNw1Bng",
  "key15": "5rYuzqxbPW8YqTFskp1K87hphB3LQFSXsJGrgFeK7NT8UoCF7UDVaNhtDtTBYPfBoVvyeXhgDz9acEsF5Fsr3eA4",
  "key16": "FE9NqxFJGDCnToGv5CdHdJM2tGUCdhdUW4AbBvYbdLWyU3hxbG8x2ifuDS4joZBD6o4L43iP3Yz1uGQs7Minaha",
  "key17": "2a1yry5gQiwLz9bgzY7edK7TyZLELc5jjbAw9n3gE4ugrwrKeum8VSuEJiPGcCC8fsBSDRmcwScZNhd4mnwdinub",
  "key18": "3gSGQ4fnU27fhRf9jQXBb5JtS4neCPPPfddNavboxhCasKkCNcSmw8YtSAUUtT9jJk1cN2UectTGhmQJQp5qxGRr",
  "key19": "dWTDUDFnxGgz3quATbdUHg1wGfgeKm97jCYDwBZgz9rFuHjZRGVfD4hoaP4NbqLJXxLpKLT3FSWZCT21tFmFLtz",
  "key20": "4tpfwdT7KsJFtASpjTSSwysAyyeTzVoXSTKDq9AaPQSRjGBWjT2qqQRhcrJhsauCkQx8RApFpoNvDSHnJ3ixmMVP",
  "key21": "yWnpcerSpeiMs1QnYCmPDwekQX2SNL56RtuCdpKUxfX77VWG2JRzDYg5fbhYCmRBU1XknrqQSPmMK6igMrvEFUq",
  "key22": "4TopVU28aikLwa5zcj369k29gjZX4PGyzZAtozoXRHhXeqReRKACNTuuR8yZ6Bikhf7woP5p5oJVjyMa68bYa6PK",
  "key23": "2WrUpKkSseR3reDQpHX3gu1tvC8yQ52dhHM7G3zAJrgEtmdCAWsxx3YsRaaTwwWPK6da5v8BNNgEtXUwbVe4XhuR",
  "key24": "2LfS2vF4Dr1YmMb7LeqNP4Q5wwDdTyK2KXkX474CpdNi5hS4Dv9JWbMv1M5QhXsUc4ocNcRZz1JnioVGUg8xWTtZ",
  "key25": "4bcEDVybupErfDmWYKmNqxgRaJyLkhkLK7VeKDxPrqH1HEJhqDVC91ZECP3xfoa7CNCLkR2wjMeYEyMWrvYnu64V",
  "key26": "n2Cio8v61vNQiHkJw92Vzze7jik9XSb91H5htiCMVBLuRpeYfSe5yU3d9FpfkbnZqjSKkSdcW35tGc1T4zbnLdq",
  "key27": "BhvvKoJ3t7qVDJnvGJtFoSYK4usgJB9byZfChbsedsVLF7jtWtuUWBqKMFCNG5YqPYTZKexeHMKfZvrjCCGKrVg",
  "key28": "4r5wfVwn4C1ykepdvFBbqnttX6B2HgvFrNuAVaZvteLsSmkTdhqQpo73NbgZwrafwerTVQCLcnpt8JiiPe8Jyrir",
  "key29": "3FwCTwuYeCjr4jo3tLVtC2GyM92GKHcwqr17Tm2aoa2o6oSghJ4oiYs4yGc93MUyGjFsYSUP7HBR93XbzokkfXfv",
  "key30": "2EYPTuLJdmqpsMt1uBSEGuafBxAHEaBGHBp8JwkZ473ghSwsa5eNTVBTHytjWNMKZydvZGPz5atxbd16dSRqpXH",
  "key31": "5TGRd4XHHswfaaUsUqqzYnVe67v6Sr9CVqvaxC2L8TzCdVGfgW14T1eg7xsyNYeqCukapiqX4HLYaZkraYxp2Amc",
  "key32": "5tk17sbgoPDGxCChAC4n7y5owCrAZmy1VBqdkUJNJxxrkLBngVVFsMg8HC2xborHcGVcX4VbhSMHRJVEdRDXbZFH",
  "key33": "3bkrqjbdYqbDnRgVtoXY5fhCeU6ZD8rcpQgpfbnPCbBcnViWDcvozLgkuwRXgD9FanVa1ZaKJggauqWL6fEfV6Bx",
  "key34": "5i7BaLMhxH7xnwyeMzvZvNUr918vZd6CmaR3w9CwaFTzZYk1R5A8ZwimMciKXMbFdqe8N1ZkUnNqfXV3uKDQvrLe",
  "key35": "sjUH1BwJoDuZqgTvB9ySjr2cepD4d6BiMu4kdr1WHwiwULfVwp3kKDz4VJ7qD14tx18XNKG2JqDjuoSdPpsfGsg",
  "key36": "33vp7d7BZ8hkCdLkVppYDBUPznxmuzao19Wm4sQUgpvpdQG2VzBU38ZEjHnKUoh2Mvx2N4Gjwxvm95jcn3z2xvMG",
  "key37": "4b4SusJHHecnZfgfFrNqHyCNqbcTLLnm1faxRLN4fySrq5HUVD8kVdrw3MTuPNEFYm9qERFGPrJsXhRufFtXkV1J",
  "key38": "3nNgD8J7xkgjW7Pi3mEQrUSrDpzv23qLpQDWu8GGVLMfau2f93tJdA8mLnXmGgoAUdkJ4GmUqt6rtoW17mmzhCmP",
  "key39": "3SWVb6suwpzohHM5CVdX2XJN6nu4cb5NDX9ds4KNWq7vKsAWvMsguvk2xg4Z6ULYvErDfjdrgbhcsmkMSGPVQiym",
  "key40": "ncW6hxBjdX1NdGy1BNEYbECzKXKZ1cj3UeU9true5W34avmC1YfP6tcsxBLsyiDq4enn5HDFnuUT7VzAmFYFJyn",
  "key41": "5zmDkYT4gW3JRZRmkZ7YCDjeVqbiNiekd4wZuW7JAbbLwD2iqzSkfKDNyeebMgDbNwgo2aqEDGPqo77MFqxG7Lrk",
  "key42": "3yw5qUFueKc8iPwCZPqMoogrs1TsTgaBEDdkMWZpxAGyRUvYcK1Gaa7eextvTCvqoTxHFc3tPwXxFEmwf2tzgAzs"
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
