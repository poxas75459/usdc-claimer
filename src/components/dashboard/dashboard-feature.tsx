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
    "5zwXD332ZckVFzoRiyF8nptNNjzvd32Lxbjk8TeFQVCyNqwf54uyBxutRvNnXqxtqXFWctskDLyKBv9QgD3ewGko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ED8rA16upHQvSdUNcGos1dKBcswMjEB2DfiRRkbMSDmJPz28iiFdcbSftTTU3ay1sE8pLPeBSEquRFhG6UBi4ZZ",
  "key1": "4VUs1ebfFoUBWZcQ1d65WriNmvhpKm18DkMPuAR3LDsxxgBhanMDrbMKDybfzsx95MnPzdrvXkF7qwt44zDZt327",
  "key2": "3MgEYD3DKqTu5KUmTZCtyrX4MrircYDKjzG9Df3vWyfVBv915kW4N8DczdKSxkzrfDSPWeexdicfs5ddh8kVCQtB",
  "key3": "2cPcRJeeDamZsAivVuhQenEeagnJxiWLxS6bJSoQ98dnv3BLYfBRwYiYhrKPhTmPrhNPKiHHP7zVZDB6wrCKpBwV",
  "key4": "3kxsjqasdEYKNEz7E2JLQCBRM5R7Fgzv4cCNSmUJ891feotRafjymYBY7RZpToVuE1qcCqbiAFHyjCt6rCpPReRd",
  "key5": "4jCrXHYdRPdxyKzQTGGzXM2nAAJFwBif9cKWbAA9PdsMgi5SbD4fY6TTdiQ6H7AF1nrSvP7otVnCfsN96Vt1vSN8",
  "key6": "63oBG8YbiFhVYEgExZrxAFPBAyUZ9bkHG91WN5Qc939vShdtsD4M9SdpLnRcQU4uS9yJRjhmVqfUGQK8qZNSiKxN",
  "key7": "4aVNHqL7rWQzhgeaX2Vxxx5ai7e3QDgmbWufTbk8CAXbtR8sKmeaxcUskpS2vX8gVXzKskvDjrFEtV6T8RXfSHZ9",
  "key8": "61G9vZH8A9JbsJeH3aKByzZwkRN8LMYasfZaipPoXXTzimzHmJvpbFQtdvJJn56pHqGKbtnGGgYsrgcu99NaxtpT",
  "key9": "4StwuKYzdh6UGNs8jASu27eRxt6nmJGXcVemmEFq9k71P8dcebjia2ps2TSoy3xucaKXWbPDnaw9Kuzn5foLxVk6",
  "key10": "5NyL3y4Rr7wQVQfVhhtsoR8Uq4u5RAz5ukDnzWwshE9bv4bd1sdrG1Rv4U2cGJsmQeVkdJkCJVqSX8t5956uykEa",
  "key11": "qMpuRJzy9u6XgPMvmz3mAQerJdADbgXa7oD3sD5SbE6XDpS6bgaEP6zsaeLjVYyLaVG2JaPHywTuk1BeVjfDZ5w",
  "key12": "57uDLXV9iwCTojeKhsJzsLegfY6F66Y7tE77uaVGveUsEZ58TLw3DLFUht8FbXyoa916SAByVNGL68y1VFX8Ssd7",
  "key13": "3bVBjuue4Qnq9CUZNdMe86pYuhBi48QVmrFWaAyb7EKfphGj5uKe2UPEf1wLaUxZnEmAMANjoSyhgt57qdEst9oQ",
  "key14": "5Sp8SUvLcgjNU6BrGVr26dgVE9EG8r2r2z1ZkUAkcKyP7Q5AGJiUCfwhFxxb93KFC1w8dzYwnLZmLjhTLtC1vwDv",
  "key15": "4EM4414FHLwQtkomRiQi9xV4GFhiXicXvDfn2f1t7qL1ENow7izoaCaqjYqBoLu1Eg7gcefYXviVHp6RDykS8GzV",
  "key16": "aSq927WN7FJ6coFys5umKhLU88uoWgj48StEGBHTkDg8xU5fSBvioKUDDNxFK762iSt2jvDDXisbGQNhJ34KutQ",
  "key17": "3MURv6W92Mw5y2bALzxN7NA2QyMsj2NKF2hE2oGGBcYzZgzohVRugX1WU9MJkPbgT74BS4CyzQJS3biCLHdi5wq1",
  "key18": "kW5rGJV1HN9n9CzoA2XX3bndZwqw4HsBDbVVaEp4zaGbkKNbejx2uU6E4s6E4KvJYTwfXdKm5fWsEcbzMmKL1J8",
  "key19": "5UN7fgJ9gnpKwE3jAooSHVZjDKe2gYincqCggpsU5jwF7f6X5FcgvyjysUdkaHTM2rHo2h4HxCaQLW9eaQCoQsah",
  "key20": "rkEqo9BPEYPP2NPjCetdooNb4PbgJ5yzN3P8p946azMuVZyAg1sJ48jZAN8cA474qzLqmDRA2tmk8TF5KGcim6y",
  "key21": "5fMpqLEXh87zSeJ75Gc1QcfuziPrd2uaMJdwxxrXFDWXpAQSGacwgLLJi5tDMW12yB33oSNAK5UitoGhtinAZMGn",
  "key22": "5Hsxdf4NfCeoaS88Zdp66iHst37bSabjUe5F5LGhSKqr88GnswPYdXZA6VmUgX5MjxD43MrwmBGPHzsfFxNS5gDW",
  "key23": "4yBeFzLaxr3steEiwaGcZ4J2V7sG6uUoMSCq5rajY8yjnX3rh1r86472KLAz6YLrddJtWfL2r2TNYNyWYMLtkt3b",
  "key24": "3XuCCCW2dw98HhfRTDH4jTgMn89BpcFJR2vq9cLDJvebCabnhgpzcyehENdeMszSi9PBT1pP8qzehEX6JRNttszZ",
  "key25": "2AC51fjbSL3RVBgfGxyMF8RhdE8kQ6BfzD2ud6jDVF5wq1Tr7Zyz8jjzrazT5ENzBv7N4uwHNXsqfMQzepx3YfWY"
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
