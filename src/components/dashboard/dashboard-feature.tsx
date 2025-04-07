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
    "3ReY6G4NVG376MjZkGEPyaDB8gPV4VoYLsbDnFWBGva6wyCW1xV4c1VW3TsZAzFxKh5heymH17nyPvr2qA4UvRPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdEziJxnsU7h2Voy1o9MbkzvmDwm2rLEb2u6TuEx66vKkR7Rg21VK3PaiTggBt4azRcWLv67Z1DST9sCQYdc5do",
  "key1": "HhiS5NkBLmda27S477eyFP6Pfy43DVonNLB2jw9Hf3V7HcbkoPK3i5QTjimBiC7cQKeEAvtuiMtYWdBcuFzzU2c",
  "key2": "5DJVWMBxXror1FMEydFHgYHpEjLMQmQEtXgWDT32oRFc8Gs6mHTurCjhbrJcG4Vh9utozvxPkHfwdn9NkgPYyZEH",
  "key3": "2xKM8vwchW9jMGiXev9kQEmW1m7GNASoquwrptTwPkvnzK3YeSxZEQq4MKU3VrGXMDjFMKNPmb6SBUjXFzWMGKH6",
  "key4": "2XjqFQyzNKwGc1czZqCi4Tb1TXa9giBCupWBcxzwvn4ifgE9YPYZLDjeBrnsTxJk5TA9Tkb2sRfY12zuhXW9D2i5",
  "key5": "67FGZjCWALTggvp4C61BHtirukxEb1EVBiX71T1D5BJdAQGDn4uD7Ut42KvrTDBFiEoyagB1UNYZFtjDPtABXfSY",
  "key6": "QFVa7cC7mtGaQGNvMa9nq99fxaerKDWeNpztyazuaxxaS7dzm5rX9tyr4fJMntjfPLWDiVtUfXAt3BrEm9rrC7y",
  "key7": "9weZsjFnCkYwffzcRJnBJ99WWoQ2iHJvAhgaeKgmWxjPdKmjDACX9xzQkRKwL81VKfsLS4yLituQegM2c9KECL2",
  "key8": "5fe8vW3nK1cim8vjWLF3WfokqviVWERzNhidahdaUAtJzMG7p15KrzpLXQbPTL6K59eSPZC2PdHspvqKw5jbVAhR",
  "key9": "5PWPSxNmKb6ieQba2AXz7RiLkUo9odrPcJvrydtBJuXdFkD63U3DKTeCNht9eSm9DyvNWRnGFdCeADkJQpikbrP1",
  "key10": "iNGj8R9qQKc2RdU475uaf32HmC3Mhg3csjfASEjvXtgC8uMUuAAPpM4cVPgoEegBkqvGuFCfD7KXCWihrary6cP",
  "key11": "4G2Ng3h4us3wLMRDMJf1ttmGWByJD92EtqhA9nwekNyV5URPXVcJJtFmDMB6gGvFxUiu8E8UD75LxSRZ71NeXhoN",
  "key12": "3xTcSCJAE9H6FRJT7euX9mKVu58MiwYHQDYZo5pnw9cYc4PCgkZW6tSyB7BmfU5b7uTkXE4SNj7mie8MakZyp6mD",
  "key13": "HKswvm7EYSrvUDYhQMGY6gpWW5c9PNaDTmdK1PaNDHDBf4zUf9E6oCd2NyFCYj4FePWZcPKuy5EQ8W2majz2n1q",
  "key14": "2JQ5KaiZq6YBuuKfJDRJuyhkZvYNkaKZXGGgjZ8UYhsceDddveVR4KKo3j97GEyfY2Bd3iRwRna2ofievSeJ64og",
  "key15": "4aGtesbiMXAfaQQ2DqW9qLBFBM9xDBheSHK4DRKonsYDsCgK7V3bXF4qVUj8Mxca6esWX1pyqCdATm9wV6iazifw",
  "key16": "3rtEDLSKi2jAvraVzbt34MP5F4fkWQxcezH26FSNFUA2hgddG5TT5qzfyrNTVakHuEevjgJfoVZCpMVSmiAGjNxW",
  "key17": "3vD2oDiB84YXrEef5zCxrpBdGpPuenSCVfqEKFVeYgqQXkdp4HPhab1gALfr7GS35jYu26eAPGdiXdeibXmj4kS9",
  "key18": "5DQKUbcR7Nm11R2gz2wG6L5pXnKGqJXNPKFFfihWFLK6X9TT5JrwHLgHCd2imo3b9KwNNb8HD4DZFLiMWAHoLMhN",
  "key19": "3UWe74ahPShxH9otDSmAktPyXbKptqdQQtorepHmy3jS9CDhLXwBMbLNpZeCAzn2uZwXRYffmrJNxpcmSLFrHytt",
  "key20": "3c35DmiZz55jA8dB23ijBeBY66QTcHY2aSdeVB2RpgYoPADsCSQhbPzmNwbLzZdYeaf5DLYh4iwSzkyJ3j4zQ1yb",
  "key21": "4rp99zNyBkEyDodJJGVMsyoceSrPi5H1DQ3U92PAmapP9hc1WF1gDdN1scfjcX7d4ZLxexHe4bsxirgvywTY2UxQ",
  "key22": "2kksSRwJefF3riexvz62ukyGYq9SzMddkMU9LvbRFTD2VSw8vT1TBDmVz6HXWMyfip5ZDsp4pFQAfSfeSveZSKbn",
  "key23": "5JkBpFwQ1vg6mkf8WiognhcLFM2vNypLxhbzM38yauwfYaqyQccctiSgoiARGqtM8G1YQEDaN88jh5Yy5nP9tuwS",
  "key24": "5ZcFRB6NAoLwTaurXzv42Dr35E2GASkUwGXxw5tFZvs8Sruoh61ehPwdD5PL42bsme3YJtP9pHcA3CLGLyQo93F9",
  "key25": "4mQDRMc4tuLvKuyuc9auvXhnGEpFBrGnPUzSw2qna959nKtrdE22U9f9obvvZv1G47aytfKAyqPX2eq23UyxjSgq",
  "key26": "4hGuRp6fMt76vUCJVem3VjZCPCLaaQaVhWJLRSsWr7vipMK4oQnS4EQsRJso3c91ozTpNLKoCgxYRpZrDR3WFXeg",
  "key27": "gmnpx3vNhEpD8wDYjX9sZ8DAsKyVLyHYgxSzVoq417Jw6DHMpV6oEg5Du342ubjZxvgAc1gt43mzXSPYJpJNn3Y"
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
