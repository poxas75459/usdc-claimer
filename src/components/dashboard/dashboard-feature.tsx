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
    "5uGKmmM3TpKBSJLCNbeZ48xE8pCpepNQoDC1dgDzer5pa6EKroP7WzyDDYkTKKC1woUMbic9rBa9XKktTtxZ8Ux1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJpgv9pWZyg7ts7AScCpnLygb8nLdeKEU2Sv3qQY5Np8CNwRniZPZLkXby3AdrzbZNC5Gv8Le4zuJQf3qrF5UPs",
  "key1": "X51M2LNfnAhyRHf8x1kyBK7UZ1BTQkszChkP1pSF8ktxfNmfqsfek82f6vFYTUYT4Mn2azode4L6BrGtEtyf4Gr",
  "key2": "WkEb7ATCBhTMEwKeM9fsg3ijWDqLjtqdGeaJr8po3VuT1dSB4n9W36MWQEq2WWRJKkrXRZKUHBf4oKWB8QraUh1",
  "key3": "5StJqJDrAuxByxg1R1JYvHgcbCTQYkZEvmjm2j6XWwY8kmx8Wx6142oa8qcEPqxgAh9knkwWaFegZWBfCqobJKSr",
  "key4": "5zEykLiMvN8m51q4eawskYLJGiVV9GJFVwqR6R32pLzp3C23c7zY99gdnn5Urgc8ENQkdzPGzxceaNk9jRNtTB5z",
  "key5": "5vVRN9LbvaJJpw1dMsu6s8hC1y2ArjkLwfxifwXaw1mADYNpm4NgB4M2abUxp5mBiMFt3SYdSvmWvUskhwXCVBBZ",
  "key6": "4ivLd2srGxsaGSbPJvq8DPr1XMe5W3kxrPP1zMRp5u3Gd6FUJobLHoQ9PA2JfdcMJe5YHPCK1Ywtq7stAnv5drus",
  "key7": "2iTtBd7C7PqXUQCuYR2nEFb1icvB7Pk3DgxVCSJDA8UE7Zc2jHLHwpvdxRJQd59TWpp5ceqbK5oEwddu4shuznYx",
  "key8": "5AV4q1WQ3qfsa5o38wG21B4deGt9ns4reKnzurBgVundrbaineeXauP1D3uykQcofVJiJ91PPQR9ZpcZmJo28G7Z",
  "key9": "48BNm3nZbAG8Li3rRb328UaoFKhkBw9S5zmZtCsfZ667UD6ze2hkF7ppGp4SRMpXXPYLU4XZSqcxNdj5f8cMQeyr",
  "key10": "24CWqnXr1xVHJCpTv2nrJZue6vURiC1ZirFLjhLVMWdopBtyeNopMmhRYD4VCEuG7Y59VNj6ebcRWEQwcqKXVuvB",
  "key11": "21a9WwRd8XMn14RKgWtHAKudmfAx1fRb3y5vQxUwEJwFviGQpA9sQ2ZFg8shwEhN9eomF2Xk4rJGiyCH5bSQ84ae",
  "key12": "2rgUqm9Qdht8nmQp7ypWJc4kdnjGRxTrDCHN9xZxaxEKWcBHSPptcpK6NFQaLa21p1bduzj9pGES3RYP3VVgxPsN",
  "key13": "4qvetkdNHPNaRavFphmfftws82NiLxwNEJdUN4HbmuwG5PKL57h7aSeuuvu7ocseiPNgQhY2aMWcGwoLWL44QLTC",
  "key14": "21Fr6TDo6W8a1RAhSzKM3pCBe7jv9PGk85TFhKUsUSQ8htCGzuuNaeKmWtYAKu18mhvidpryAjXwexUH8tGcSR4E",
  "key15": "3r7GxtT3qRaqaBBBzgMh3qjZ7nryRuXU7RJzhVQLBPEZ2GvNdJPXWaRDTKe56EuxQ4UP61nDvDi9GEspus7hrDLx",
  "key16": "2R4ahuKUCc7jpYqhdxCEtUoXJDby1MBxVhZuAeUpxnvLisN3Nx1TDAHCN8SCPMnti3mCHC9DZ8BpChr2Ui4zd1uf",
  "key17": "55Fq2i7bd4QPETdvdTr85gHfJDEQasqz5PEYrgp9Dwa2tci2XrE8Lue5aPUaEVjU9Yf8Zufr181DLoEmcmX4jyZS",
  "key18": "3Pao5mkxGj1bdWthwAXzPm7QR5a1BsfznDgfgTafhgrijtiE4HjtTnXVC461AZ2SJdcrRZy5G37uoe1SBs1bPnTu",
  "key19": "5GNosG3KUx7Jeag3WDivtTjXhzUCokcVvGw4AyApUJzPah2dvAKZYXFNQyFSCVBJnF8gT49AqhEvJ49bxpvuyEWZ",
  "key20": "4QFbAVgmugdqfgyFmGFkS39kFUKkpubMoCULQNGk3d6Sy27qnUzdYqyBmjginyNr9CWKU7c4ufWL5VrKVDP3cJE1",
  "key21": "4SrsEYtDALrprMWcfJiLBVtjkjoVEPShtKvyJ8TvuhDhzbCGT4ocTE9DAsCFnY8PhHmUshJSitetHSqLhm5NA1QE",
  "key22": "4pJZTAMBCFGiQ3gNXRsoa1cnfhqbGAprSS3L3LFSEmwrdwsy8MPYaTFqNEbYKDjaXk6jQx45NVyvYjCENf8NSLX1",
  "key23": "2TC8irRw1MCNxbt5fNghGPXx9449CiyXmvCt1xTH61TA9TuSPoryfEzh2tPCRKibydH9xmA5wKPHcMWt7qJwjm1Q",
  "key24": "3886buY2iFYenn8UYQTajtcDtB8RN2ht4BHnFgC4DQ7YpPFCu4AHqsbxivW1etkQNjP93T5LhfBje7YNU8LJjHf5",
  "key25": "449gWM8empZScMXcMSQcwju1dA32JZfMXmN9G7V5Fj9CVwefRuK92aqqUZbFmgEfUBz9ZEHqFmXt4gz271uX4ooY",
  "key26": "4zfgJDXkG4kMCsjuhZ4mq4mEAzo3py5To7GvMqj4SkPkAV8mH8rQxoVPomsfDHs2uqavEfzCTSJhZMUzhYRvAvFb"
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
