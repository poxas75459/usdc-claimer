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
    "3f73mEjM31XfaeJ9yWrccmiG3MmxNxg5nZXfxFdAJGkBQJptE3CUA8c3oKGYD7ULaRqBBi3fKd9ngVZsqTJA6GCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWMXXFsgix7aSdG7JvDiJqBeSjVfJs4NHQswPoJtQUpUec5DN2bDmtfjvdW4iwU7LfGykaazqS5ttvtWgcmkh8U",
  "key1": "3YPBs5jCCZ3hxGXP2uzL8DfkaNnUFGLnyxxUscTkAAb5BdEPgBRoEjJSrzTizf5cRcedUEYcGdbkju7PSizrmZvv",
  "key2": "3HGAxUVh5uNxq88EN1crH85Fkkkke6fpbfWNkiNqFUGbFLeENgNs91aBWN88eRTipfevny6wYaq24SjBLF1GnAwm",
  "key3": "jvX8q2sViySgQ8G3jRCCBvwKPejhfLAnegszynHyXvqtzCU1JagtRur8yxszjvoVu2qpASR6WcrXWja9ZjyaTW9",
  "key4": "3wvFcfE12Nikxm2XmMF2uh7JLt7cdB44emtoPfMovSyjVNuiKJ65qqpNNHrJivdhZiLSxdCVTqdgzqzG8qT8Z4oD",
  "key5": "46KpxgPQzqewLAW5Apiu9PxGoMzZuBv5ZaE8h3nEXssJmDLH7j867jnRNH83hAphSuvoUm18oAGEMmmCT1uSBw9v",
  "key6": "UrzhN2PwgPokfbce5mXAzHeMYQuoqnEBW1urdHjmRsn2nv5RoNSLrx3xnRf3LweormR6BUhubnjaoaDQtV1DdUT",
  "key7": "2kTSwSchwMHFWSHquRfFRVF5qAKiDAHnQE7cc8prc9xStisQ2MVWjJaW2T9FXDCDVHfPPA7GrrPcTZT9Ww9hXUxT",
  "key8": "44Hb7LEjLV3yQTKFuzqNrPhevQvGjpVTcYG8hjgcpBqnBWbFzxqoSJoZy7Kigb53na2LLYoQP5VmcbdEniAb8dHG",
  "key9": "67JfQWjHdphHEqycu11MwAzWWdJCM6kpE3mhy84EAKovFSUHgFMwNzvLjxzvYLx41ZMb3aeGkRzRGAbAVVtLJCso",
  "key10": "4WFUUqE5EhpaeAakgymGRvchGXxDNVhqjDf69SxH9pqECWyaAhmRS9JyTcNP2pKFqfNPyKbw7Ts8S7jGGd9WMWB6",
  "key11": "3N5uAR6s5vNiX76nb59Z1eVKWABoitDxBJWQrLst5jwq5T2pYVCS7s2VEfNtEiM8NWECVnosowkgoz8wMNuBps93",
  "key12": "4tJjvRg7mEZunqyBwJNmUuyY9LLs87cSRGujTAncVJvFHJJoc3am1TKaS8XVpQQE43QbjULAyUTHGSPC6USNJTDu",
  "key13": "57nDYcfomWxRM2Jkbdu1sHfpko7q7xcqwMT6vaC2iXBwcdBquiiBGKZxERYN9LoJnCnzfftiA8iqto9MLk1EQH2K",
  "key14": "2W3TBQBqhtAjYuWRzGp9a2jG5b2nnVer3X9xCiL6ZY2mvBjKz13FZXKwDeZ8cHyW85MUGWFwCiPDoWzsSvE9rq6f",
  "key15": "sUTWnjbKLC286oxp11oZuyJr7fgYzULDep5CR29Vxwq3Vz8pepAc4TPakPZK2ULPrSVwjiygWpvBeAAhQHykzDL",
  "key16": "5qcHznnhMjiUNrSdemtBjWW7eZ65xV6a5oACJv5S9CLvFbpUngaeJnULCL4YVs54DeNUYXtwBnvu7Acjr1Fi45uL",
  "key17": "2396miKuofzUWShg73U31649Hc3EYhTZ96tmRqh25NdcF6QDuD6QpkXAzV5N1oCeyWRcE1KVZ5ueMAmKxM7e29QF",
  "key18": "2KEP8kNqw5T2Q3GRk5ZbyMHP3tSoatRjdqQxt8RvaXuLvwA4ykqotk8VbEdidxzHRnYE7K4juR293fnaskj4URHf",
  "key19": "3CDEWDaK2uyirHxNECHn4Sh9iqnspRiC7SuKKQ7Tda1jv4tQbJc3FwNWVvtAwjr4ky9bjiisFUDxg6y39GTsJ5NA",
  "key20": "4kBYCZXYFDZ5BNPkKXxj82diJEubAeE6nUY2Xvu1XJnH7nRabXsQ6Tqtyrif6e5aeV2mTFEpm1VsfpxESwvnZ8SK",
  "key21": "3tH514dv4pjS5FJdzQqQ1fUMMAfNwg23hyoy7bReWbqYukBY8MfkTstKzmP5Jn4CBsLhQrWLEnzGZFEes9ikzeaW",
  "key22": "3UvhuTEBvM6bDCFS6z7PMtyY9XfbopjkA48izL4w2spJmC94RZneb2wcXSNijJWVMtStCoJGYVS3FqubxNmwcZoX",
  "key23": "5sjx2y5bbAQP7bndzroC38VWNVyzHs6YTTEAVu7xujkwMadij3d1nFVERLkS3NXtmAi2VMAqfSVbUa95dRdeBGra",
  "key24": "rqzZP582Q4DSaW5ttsA2fZKtA7azcybbsqzf77w2yjKCMnvNu8dVhT2qJYuwPHdwgcd7pq7guuWDz1GPjwtbJZp",
  "key25": "3gNCn4MNUGt7Fqn5VriJiiuGF3CJ4dTyEmyPMeK5QMEhtUkiVfRotqgw2r4DyQBJxX9iXmPFBYWM1bCmTxrU1ybE",
  "key26": "5ntqij9ppZkS9vMgwwdiHoBi6iV9caNp4te5EsDzBZMdbkqzPVox1ASR1TdLcuE3a7jFmtG3maLqL8ZS4LbaLnLG",
  "key27": "2jD9xJxJsTkJCw3QjacgaryVRnkV4d3VBC22VHcfJS44nS2EV1YLooF8CqMs8LgA7EqfUmR38i4m6uwkZLkogZ3s",
  "key28": "4QqR2r4xdgZhpisX7ozfLqyjGxFdppeAgULGEiHEguM4mCNSQEV2mUdXgNRxE75jKPhsckDiFVqHcbbrd6tP8cGw",
  "key29": "61onntfMoXDFnKBVgsDpdR8XPBhryRAnwPdywUy2g6zWK89QhXKG4wHdVBEK8mfv8DbZaKPnKsQ9yXfBhkYydXcL",
  "key30": "3sTMM1dj3dwDSpPJtggDmL8xn3c119TnvAvG1KW1NB5qL3NtEAAa6KEVgx1fhTSEDpzHheADjjiyQdb2oPz2UhJY",
  "key31": "4qw2YsjzjDapNQYFUo3x5WjVPSX7UCCSzbPqNnV7vHQVWMfWH6VxAgy1LqeaAyNCLUyPGxC2LhXnrAZiaczFTQ1Y",
  "key32": "2y9nag4D8aYixbvBsg5W6ZAJNDaEpF2XvQgg4iFqWDbt5Yzg45oprLCqPstVQavVezTd9nLcnwRCt68FjPHvnYZ7",
  "key33": "2k1mKuSLFFXa3jJHJABdTnMeC3fjezhY74V9HN6wfvysJa5gkstepCa5HjqizZBbYsPdseWKwdaWveoveqgeEnrU"
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
