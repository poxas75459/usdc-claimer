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
    "4wF1to8J7Zkiv3zpYYKPX5WeERd6asUZacENEYmgarKBsU7Pr1rGEJWKF5wtwvfL3yGxNKNWyAmfgPiPUNf5X4uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qSLiodugswQNFtBg3JBEj18ds8K4FP8Xvv42rhPHjzQkXFpt4McvD15hEApBXYPgBvUo2vzZeSVBzt55gxbxvgf",
  "key1": "32aMpb4iiaJsmFZyULKD6awaJ88bJ6QTpr312b5DSERJAPpmajDEr3SKxh4TzzvYsH76GnrNtFcMAV488XNmd1rY",
  "key2": "57ERGcjeHWXDCsSDnw85sdjrnZQPsFcJtzhjAQNxP4XLigpsup4PiyHR4e1Vf3ttXBPKaXGdFzGNWoQj4hp3rTge",
  "key3": "3byvscSZq7PPwgpbzkBMWPMZvWwVgxhb7SwSnHet7qZJUvDNk8hAvXWYD9FCALk7pB1EDUXNWvZxit3sjiwrCpTz",
  "key4": "5fVGTpbq3STamjQLNnJjqrUAba9HBbbfRUi9WyFUjWFLH8BhgYFxB1qc1zP6p9MPNRWXzFFL1R7ZsFCBcbHhVGRL",
  "key5": "4hPYDfS6J7bPZfKsxcp4H39t7rZq3t7neA8mmNkePLL21EWmDm4qSnDxEzUa4XjFhnf5foxVAYTLPZET6F8CUgwb",
  "key6": "48ZayCeK61Dy4ZM7dX2Sj4aZJNKMmrwbfd2tYsYN1DpaZPr2RYPGByapFAdkJ4WRHJRuvQyLWEHnpeFCGEb5PDNB",
  "key7": "5vgTzXATcP8XAA2KCSuGCV5JCoyji8ThKwBm1khfmxrBwtpYxMTNtcFpg9rnEhEJkmUygrE4PiajQyL3zNep6uKK",
  "key8": "3KUfmTLwHemqtnJzvzte7NV99xHqAMAtCdsSwWJT59HNRdawDjsALFT4jQSv6te1nYCDczLPdfjfNpL2agii1NpK",
  "key9": "Z5u8GZ9fvch4hDKbp5SfJDxrhsM2kawDSH5rcTC1fkXFzegUgg8T9d1tLP42um96JMH8H2d9Q3dDrS4wxrwewC9",
  "key10": "5eDW7q2JPRzScxnHK8gPzPs7hCHGrRLQQqfGEPTj5wmvahZi6vY6c9P2iCPg4q47z3bPucKwJZtC2WbkewNYpLNv",
  "key11": "2Zftzqg6aBa2n2jG2pbMv6qxULtj6qUohdm5phk9NtAggLLibo9E1A4T1tQLGpBjocWzbsXmGPDPj341dEr7Fuie",
  "key12": "2Tj5etKCqhRQfAqpcxE23bvHvGzFvxHbXmL5ntSftFi2RjGLXxUzKtDeZ7vQmXDRmRxEHupq43KSgNze4reu2TR9",
  "key13": "5dNzLScPiQioGtpPVqFcyjuR1SaMqhmpNEZLz5NHTi55Y96qBqqB1RwCKZAPKuw2NMBcHyL5T2n7kbcJa3UfpomJ",
  "key14": "6iqrvBLnc61f5VQqp9GR1veZ4qNFZp9wFxhSMm8E44Xaf5uSYKRxutsSZ44mCED8o7ziALcyR9qbKwmSZrdVNEW",
  "key15": "2Ns4oyasnpgbqjDrUxpjUQbpRkf7vSjzDviqr9LU75PUivPVSt1YWvU6wu1UfZuPH5wtbrWChJbdDexEfnpQz4bu",
  "key16": "2RQcJJuMmpDDkwsxbsD2HnAxfN1W7s7iAx3kJeaJvF3DUXZrWeut7iL152n8fzE4w8qLmeAuCs8LvtNPDvvFXyen",
  "key17": "4kBQm2qwTveiqeq8o9XbWt3nZ8oAjzDmMMQ43gjEfzn7H2byVEnEDxtRzTHFRnFU4WykaxdeVAWTYyCHC3grpEP2",
  "key18": "5iYJxHDyAHvkeJ28cD1Jka6hjra9pdzJ2NLNYNLwcLivab1JRiJXkHjwYwrw6BoYpYeDYzC8CXdkY43ThUFqkFmk",
  "key19": "A54G1ZLhX2vM8wNJXvSNj9kW11fxGEi5dzLzGMM5MJqRFLRMgH26qMtD1xmvjGa6B7pTv3zkcmAFqHiN9yBRgcF",
  "key20": "4GpSGZEtNibWcFNeMkCtRucv2cmye6FsFo9t67pVMP2zMduk2CiopiphWA9dPba44WiT9XjBDXBg7iLNH22CS3ZY",
  "key21": "2jP5KFBCPNgdxJdvNmDZftvpJUuU3a4wxZSv5TqPRpMMV9LBkgJyGBjTCkvunhr6SAobXRYyvP2uCtHemkBCWR5b",
  "key22": "4PvX8Ugyc2AFpeAFAooeag4YK9cTxZCd2u58xsUBnyUzJWvz5HUZyw28Dk8zRjX8qeSNMVjCfVMEuhqyBBneD8Am",
  "key23": "5GFSuQVmkVk5ZKdEfveosR1S9Qz4K9EuXfdK3jrxA8tceHjBcPHUcaKZ9Z1SsJCboDoeqzhJcLTAbSPUzSkHc3Am",
  "key24": "5xEgsdshLG4oE9dHuVqbbh9z4pYmrERiBXTS4nTguxRCizJCg8ZXnrzfQpZy65cpXGuzcT6cgWTZETzoJmL9wJLw",
  "key25": "4htzUsFUArWspUEAUXFr4pFugGkidNN6VLoJpQggzbuWwom8P3sJp6P1SzRk9iSB4qFLnPs9fWYEV14LHpVar55x",
  "key26": "2Mx6UQp6jDKpK9pcFBjiv43gzvh6pzoh7WT5utqpinGUEjDNZRMr2iySpgthtyifpv3Jc5TTKZPX89Rdr2WDumEw",
  "key27": "3RgLAXJXBTAKUU8eCWc7ws2WftBMzanygP1SXC9xtXj73Nk1nPEfNu6hQxdbfoG6ECFZDtDHzc6n537m2jYMusze",
  "key28": "2YA1TE5LJ4dfGjSeLPPAGk7PNyNw7gcCqcyoEeVf39JwKNsWV53KtciDA3UvcD68hVw8nnt6u52QnnJ53hz3yZxc",
  "key29": "2gxv6akTQEu4aLSrMopyHZ86nWm1nhxQe5tSTuhKmBsPkeCnSLHP4WK7Uj5BpZsKvgC38Kk38Pb4TzfeU9MUvjtw"
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
