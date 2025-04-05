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
    "4b7c6aTkQLbjMAahcjqV8BC2p4D6EJCSZf3UVYbN37HEWsNCoqc2hZhM4DbvbERZuX6m9dDDiRujtYqhoXkBBLhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oT8dUJhVgxCReX7EHQRgHAkGDDobcL56ooRHiMCBBisWSXkcV2UfMoiHtMExCTtcDVXQwvwEgxSW8zKWJvimvvU",
  "key1": "3E1BsEut7m5G19kQXjJzVXP4RksvvrJaiwkrMHRs6etTBf2wwriMLuKYgAnraSFy4D2EHUHkzrvbHTQ9oVDL3duh",
  "key2": "54xAeAKR8Kxnmqyhh9r4dzyMeuMfiWJJLfgcMmKY4UpZVW3rV7hUDRJzuXphLDCtuyM17CEw1BreXbgTMxXPhavX",
  "key3": "37EDBnkZp8H5w4CZdQY8n64N1CFY4WocaWTAtZqTCmgUPdLSvNKqFKhLPsx614tqL8ij96HbrdbqYYs9KLwrYMzD",
  "key4": "3ZEuSC4wcx7stDeoWezFpZwxUSznQCSAnP4mwmDzSFBX6zKTwoSzggFpueQpgsTHw3EuLaSHv3nWwEdBaXAUhBBx",
  "key5": "3G6gZZaoRves982HbtgBFtVv3ARLv11bMDrW71ogAeSbFoqpCrUjV3gyCM2sCZmBisf4tovJC5VjAm4ApdWo3SUY",
  "key6": "4aR7YhruLh8krGBezPqNq7NaaXSbKmdj33XidzyEXk59sccPaRvwMNELSCCkzWXg5uecWY7NHWybfmYKt2RgZkSX",
  "key7": "3HTtvUKqUiJSpwpreUrzig5w1TwBjntk34Xy13GMmfaAfVBLQth7cWhyuZJG56jVTpoBgN4bfWz7i4ykZJhMBsMt",
  "key8": "5hdNYPjgDxbh3gyDQ1D6sx9NudGYDSUV4UUm1H2hoxxeDreaSyFhAftVvWGrMo8JQ59SswaXVJXvMfTvEZnztZFy",
  "key9": "2HJHH9tEqu755G6UjFVw3zrhqH541EAvCFxtPvvYkLpgPK4VMkoyyFhinfE96Lp3jF4Ddne5V3XJ1umdiZx2FFKb",
  "key10": "5qCxQHXXtnVrPTuibvMgcSVqyfqZh8YcH7nWnAB5AVjiR1684pMcbYJ8zjz5DF2VLZ3f5UQb1PSCkGJScocAyK39",
  "key11": "2gc1buvWmQe1QoPWpYfDPXRTRcaY9MxapeATYKve58SdCCVeDpFqbNHnpZNDfYPdaLdhkZp1TymU2jzD7HdFViRM",
  "key12": "kf2Qbwdu3WR1XPAAAE5wwYhAgRdYmSwbMiS5whhne5JMhb6xYtMakrA2aQ7fcnutd93bB87ULJpNGT88NDdem1n",
  "key13": "BPDQRg9N7F5beg3vAnPS5jrvyFtAMrL5ighDiUk1QdUGtQx9ZV3MgVQkEqEv3LTKqbVnv9st8yXkFEmbEf4s4ND",
  "key14": "4W3ssDnotZmu1BkSC62fw1xmSkSxgkxUfbdproSR95iJaqpiADeXiVtYHjZyQf8NYHQxZhUczCJ8JDH7iDB3fviN",
  "key15": "4vY9xMxKdzpWcMLxA5gYBnSH7SA2QDMd9QvwZE8d7R1DFad3M9Hy5F17ADsL5wHcSUrDviC7r4ut3SroF22B8iQT",
  "key16": "2TX7kPTNpcRj8Au7T4sBf1me2KZ982cXN4RpAf99JXWtdYGX4GbYMcvUnFjjTBsjpzSQa7F1GU18PNxhCcahTSjB",
  "key17": "4ZosLJW7zdFWEKz8QbyYnNaWZjp8SoxuXv8AmzSqEpymbogd3X31GJciPDKZWBErTGFYwHeV6sAqacrnEe5FYags",
  "key18": "371Rn8FTifADrSF8PpVUzhtDF3orz4ufwKgN8jTkexd8DK6uC79geT57sZdoW1xn7Ez6KKMK5AZG6ewgB3oZFtA4",
  "key19": "5YvDPEEdkL72qj3hAnFfPfDrVPs9esJvMGANRNYCufUcUiYd3i9F8SY2dzq42mLVkUXGrnXsf87jufes4tvupVBs",
  "key20": "Fo8dHecQXr6RYgZ5H4NynmD2n3jaKe7aQ6YtWGyq62vfUSqgweMhZXdz1EXLpq3eqVjK24gLNhehNZWorHCvQ3o",
  "key21": "2wiTwL7h3TvgvkhbcS38HbntetFcQiJF5NaCP7sFGJiRgNueK9xXdjoQ4BnaAptQvFwoTR1xsSq1Yo45o9coMi9F",
  "key22": "51VTw81i6hckqjJL2SNNDfLZtKmDV81MJiZYqo2oumcw9vtfUQX5pYdGdEBTAEjisrkB2sMTRoUiozV4Tj4dxrxX",
  "key23": "ajFAGgSdaChzFkVABkvo8DvavP9USducJ3LwaPCtBK1Fv6dmH64nQhKEJedupLBL9y7SQNZFHs2DbV3nnuPcE9M",
  "key24": "5i7e7n5rdubqcVe3NFQFU7gUa9B6nijEHojTGhJ3SQXhwSDyv2iEP3KaKJTpUNaYjor4AuiMcGv3mHge3NdT7v7f",
  "key25": "C8y64bGe3iLmoexfrxGmqLq1STxReNzVPnCH1S4MjUaPz1jUwCwmZmwV88vJr1u6VzVSM7ntJutWpo65UaZDqvH",
  "key26": "3ngqxEp3yh9E8dnrMVuyuyRB7ZFcJV5536eienw5sckzeTDSFfh2qZvCYU3V718Qoz2fgf7ZB4ot5CQabSfSAsDj"
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
