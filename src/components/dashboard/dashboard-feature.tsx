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
    "5JBGyhkUg48BaBLjNqs4oSH6jLJk8V1J93D5E5VjRLWFZbMLFWb9KaLRjFHgzsRgbuHECumCZnRDhiWbeEY6qydR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xVQ6qk31EDXTfwjwkAguNUsR1CM1qXkPwn2Zw6CV2SxXd8Nteno94EkBYeH7VinJH1okGpwenFhY36mRX7WPRS",
  "key1": "4bpEtiKFcZLkeSCaTHzSft2Z3TiCAd8QHverbDEDPDxGqzTuJXtGdCHrw4xh4V8ovaxadtsWLHXizT5U6hd65Jrm",
  "key2": "9eYQ631Xr5k9UHuvxzuWT91vgbjVuA8G7H13DSf9aUBpqDMo1C73HGx9YKPGLoWi7o35g6vUL7marvD3fNVZFKs",
  "key3": "xeyD7czYBT1ZgshzK6hhL7jRkV3bMVqW7eng777JD9t3b25n95KUrydbjaQgZVZuJYppNXAu7Bzn8Bnnykebs3R",
  "key4": "V47mstSLiRk3wmJsygswYegDTz3UzEpo5uRahwHP7pxnBPqk3jsg6kYHTpiGbGi1iSXCUasLjEz64fKkzLcnQjD",
  "key5": "3TufVpEzLcuesEFntz9UAaTyk4qQgLTysEHvoq4euZw52tDh9kiGQDsvd8hDE6T5N9LgeiXPW8WvhvaDhwsXgo6C",
  "key6": "4xSFzQVFn6pSCBQEFzo3gstVWTtvy5E6R3MxXVohuyBiYHovgQ8FTWft5oJmwqJiQL7qNNGpnbPArzBbvQMqk8oa",
  "key7": "4bsdVin4p2gp7rSeEKrftWJr9QoapKfUAzaxA7QxuZiSCQje3VGbdAafFsUHL3eWrxBtgAcjJLLvbimafD2E724a",
  "key8": "2zJZWKSYASZDu2mHcsM6JBtXQEQGhm63DzcBrLtBrCVxNuuEKDCaYVEstF3Cony2eP5quzqLXyhLskVDRQvZ6MVc",
  "key9": "3oDLdt8tVekGyzPtY5KscjWmVYW1GxUdscPYP68ynQZbYACCZ4fcfjvKr5fepi3xSzHLdYGkZnS11nj1JMxZMJTm",
  "key10": "4i9Q31ZRfKnrU22jpLeSfkE2PRREiEayfwUmuqprKBeCW4zmtREzVMwujXcuVSm6y7dGBTooAPMB5dcR8xGTSMjz",
  "key11": "9xnU4MhGGJtx5MJZTdY5crhyTifP2ohQ7Ea7YESsEex1Ah12g11w5Ko1et93oXRPMuQmev9F2onZNcRgmVs1FGD",
  "key12": "3ydFE6sSVRqDwDCpVSkFFcu2mWkLV7WhfKNufwtLWBaEgnZgiVyq9AVKFvHusjDWVMdoNKbHhaVqkzK7A1dRytXp",
  "key13": "5Wz5KjJ92TTLzsMWysu85gN6ig3Nk7b3VfnU7DeBX2nkUFpmGtUWuBKJwzmmzfVU7VpbPrZy7edfnhUK6Jgno2UN",
  "key14": "64FcNzWqfCxa6ebM8dWfem22eAkSjiKCpiopf9Ut7XPbpPqEAHMmi3LkxSc5paxggXHhxZeyV5ShQGt8TxW6fjps",
  "key15": "3qwUoJFmKwoWMm7biWkg99ss78JQJ5qbXzdPebMsBooBtSDLkiq4DQVJ1FxpsMZjtDxpXwCgUSzh3CrGkXgE3By9",
  "key16": "3epnTWpDFsCBac4M7jMXoUhiRGTwP6tizRJMwQhWemnCKKqSkgNhdwN2JSTYB6G3DuFvteCaw9dk8wUjNpooBJB6",
  "key17": "ewpKqGADBbWR6Rb7wGS8ePZbhaimZ9MZpHMwjWahJRcC4ZZ4AebdxqGcwNpckyhtvET1orLvmY2h2iHhLjkn2t9",
  "key18": "2ZoKAgKtRp1g1fTwexbNdw38HnRAf6wtPvQ5LqEgf9FFxw2zQ16MqRjzEdxF6huc84EJ95716dKvKSMktq4PtFs6",
  "key19": "665h6rkaq3ACyKFF6pPZXKzNo7vvgCGZxtCuAvTsWcqhrXrYzPEuxa4PR71eASU3DoFi1cZLWh1XCziEBZqGL5k8",
  "key20": "4f2nsAnA2VcUjejsVZCq7Nhx9TxpEDmBNeVpDpGnSgC3YsezFLL7mPzJcMvU4cRvzTrJzhWjRcGCpt1TczCGVPGH",
  "key21": "ZA2r95DaFEeCJruLCYyRrUc6TVRoAdUT9xTeRAzmGkoDSP5GAaaMu9ve8xUmSQ8GxvoRbUax6E3BWoS4rChnz1D",
  "key22": "3jeLwH5FBoXPfioskf3MTHbTScvRF3ax1nJ5qcqxso3WXdd5mbF954rtWoLynBqCBWbtvMX4q8hj7jdju1EUeaAL",
  "key23": "4Fpi93BcDEg1hREwxRREiYQCMG7dirAsqGNphL42c7kTdLo4ZxFk6dFPzHnjW9L2tEQV4HvcJv6djGtYVcdrz6zu",
  "key24": "ipSzKUDgEB4ARP1Nyjtr7kFUfLSvdkmnwyyG3rcyNtT1SPScruyBFVkZysXvT9fW9X2xR8x1rSW5gxTTpAgvWrB"
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
