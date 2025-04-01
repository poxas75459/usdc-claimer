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
    "5GKNRGjPbFXsuNeJKZgsmuD4miY1usP5YDHxZbKmw4U131xXKTvMibJqd9DAMRAdw5f4Y3YcPeoznR2CgNfKpx4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZLBa6pMCCX1fmJFQepN5QspFeWG2cLH5pMaHMpqMbRkWo3oFFfMQWnB3TtRrkr74mW8YeLKJGUu213RezoQ65",
  "key1": "46pTCFij9iTCMJQxPTYadyZQDyjM3Z3bGqamncTy8dwREzcgDVKNrrxmfj9BsKDsXbnCVkSyta9CKBb59SSAQ1AS",
  "key2": "3u4PU7prUaocHFoJgbHpVJm85JyRQjuDnkKQTJr51q5fgMBXNuLh5hvrb5peRupUWFY2j83N16ey4jCXSbYH1jij",
  "key3": "4jWMFkPvCbvbhqGTCD2rFhmfjwK5TdXKvxmLcSr7nrHjG8wHLnnUf4ciKM2BdjyWKuLqv23HbMpWnRHmbgcUY8xZ",
  "key4": "25fu78gx6jxGgbz7unMfegg78YbUVtsiaxVykNV2hh7BMj5z4nnUgifvot2pfxagbvhWrAhKDav7t8VUCeNRRH85",
  "key5": "dErF2TUFHH5RaPJVXh2uRkTraTwfBntfLpk88j6DCSwEWFcoSTPLPsfH2veQ6dBdf9YAFoHRXPdChi5oCJPZEp7",
  "key6": "3xeT9srGTbkYsMDTXvgYAzzirvm7VuoEMm82p8xwhBsJXduMQz6xNWKQXLprnECvoCrHKB1uAcPo8gdnFT6KQu35",
  "key7": "vq6wvKyCpcMecHinoPeXcegN6sE4hTFLuC9BXAGwkAx9irugBWRwpfBhujM5xj8H4oqhMswiWAEAttCQDgZUaBQ",
  "key8": "2Gp31w9CDTEwT8jstKp9KY3yBREm6y5RDSTWaPVjoUiA1k5sXS7oXmje5twJ7t3L7QnAhGGxVJ71bYdnQcyAdwDd",
  "key9": "4HLJN8JFXZpacJuByNPSTvrcWCy1a6AfWg1wo9RsvuULnrSsL1cn39Bqf83uNjpsCHzfsPZ8QcUDwiDBznAv96mT",
  "key10": "51DAw1LBP2ZZ8bAmP6TwrtUh7yVp8o27HUaE45fji9NdYNcKW2eCsfCbn56EsxGxQUE38KxNzJvReq8TQMTuoXN5",
  "key11": "2TErPcZfbGNdD5xyMy4KQV6NyJrFb7NmFPmyby8WkQSLLCK28wUegBqP5nmJY7HCXzQjug3MwPweML1ZyoDTkiKM",
  "key12": "3e8MzbxQ8XnMCAN4k6aBizmT2TNtg4NW1dB6PKqoJ7vBT3eGg4jopTBe52fKTn1QjEVwUkup6oSn2s496mynz6nU",
  "key13": "3RmUWRVy2ccZ96oXKBmA6cZY2g1zEs4i7SMAuozGAayL7wKAqwDrNvGkQvwu3UvzN71eP6WF9Xow4fTrYAQnhL99",
  "key14": "34wKFRBUPKzfv67qy9mNoGUsbd7gnXmHDy5BNQ8dY2AsEMNUs94t3VKx13L5o21Rjo1rTAJcDDKfwMWnRyHiaZYZ",
  "key15": "2zTj3FBw16oLZCmKAAyd1V8Lyfb43VTyziYeBDKeq8s8ffFJ8GGJyqR1HY47VcmM1n4CDaeqUxxnCba7XLR8M73r",
  "key16": "5mYWCVqWsiY2eCzpuyqesKYjHiMVmTQGbBvKfcp8g6KPTLZ74ZLMVULtffZFZLsbFYD8c3P3GLBESpPx23gabN9i",
  "key17": "3PQAdrP3k1yb9kSJuFRVmfCseyY3jLpqoeGtjiQwLvKq92aKSPgGSJ5FStKH4wqDRzNim2BJ1nYQQ5sNMX1hasqx",
  "key18": "2qnFB2nYSvV2TZeK9KjEn3DAT4egRmaA9WXjVYg9kX4NqQkrcTuyQkiXN5qhHxrNrn4RgVFpMrtMUVBWjbF5ept4",
  "key19": "2SV5wJ4dpBoDrScfyFPa7MjSMUPvoMJKM2MGRZxtwfqDhe9MLF7futwRueDzbDeCAxTz2MQDMXxSzPTxKHT8aXmi",
  "key20": "K4B2uMLM3JnMXdiD55YsX6qeSkqrw83insxU4cMt2e71sx2S7Fyh2NR8cyTu94ARY9kKV4ipb7QJayJjDJYmtjZ",
  "key21": "4W8sSgBL9MB11J1enKTy16YX2Hi6usRBvoJ3PNCqLPhy58fhDbeMWq3ANrFJwbt1gtpSjWdo2JvGRG3xUDgrHPAC",
  "key22": "3KNxWMCWPxcK2SSmnodwV7qeUPzGJ9ess1diufqXepqrqwcvp4XryTC1u2BGbu9YCRcRFz7teTuZ7WzBRmzBAdc1",
  "key23": "5Q7spTJ4G14cLEEBFok7j35rRVATkhVu8osyePVUZCXv6VqEshvz1r6287XDAzZQkQt8SWt5Tzc8gVpnd4ZVFBLW",
  "key24": "2fC3R6UtMPJZhij8gb66cZn7nfypwGugxUmbzf1XScVZ8dRHaQCNYYVrd29kTYEgQixM78XhHS5FTrYXMfXkWSug",
  "key25": "LyZN9ChUNHb6zXtna8RWLKTzVqWUV43teZ2kohVh6pbFyUCn33V7rtYsD8JEP6rgyDxUD1uihHT1BpeVY1PZJtn"
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
