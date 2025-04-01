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
    "5b7bQk7XFPSqg6FiNVWG2LwMcu4aKmGjTh9FSTGiFeKhP9vxTu6TncTWpoHEG8QiH7VPaRZp9n83kRz1mGakZvXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hUvxw2WANGyBZVhPcq6MuVEVuuQewbGYWmmzetWcFbFM6xyZwP82NRUAmxJh4zasjmCjr1KQkLoaktuMEBskBn3",
  "key1": "3FhGVq2MW6re3uoFnsygJVRAfxL1j8578o2UiEs9eQnb4oXZ961kViNEC1H24Jq1TqDtK6ky3RidwkCCt7Trc8b7",
  "key2": "4BWag8u76eZPswgegBuks2iEMfQ6JjnCUBPgvYpr9ruuRjPUQH9DgLbVnk4DUKi1r7SbHisYYJ6iMPJpfe2e33Qa",
  "key3": "xAus6H7hyUt4NkzLhjbiCzoaJP1UMA5P4jwMqUgHDrpeBmSQqFjKMUGQgnyYMwf8e4ZWLmRRZ6Jjr1P6jYvqrXw",
  "key4": "5t7EXnn6ViLZsjqNtUFoMqMHgjrPsz2JqKSVh5VBbsDQ3jweWU8mXewGZMt3MmvthT2x85s3rUwh66QE7yN9Deyb",
  "key5": "44boJSSJJ3ieQc1juEkydS7LnRnGkqysqRE5KcduQXLgqDgZzNNNpyEMnBco3Fs9Vx12WZufnZ1veBNLW6RqJupL",
  "key6": "2ULa7RQw8M9k2SExDqUcNhGMZASWB8DeYp9q8kq9vT2QtAqBfezGPhYjja3zWseL4chaWnLA9aLXgWVrpoTw1pRs",
  "key7": "S55K57eWNud3JAcStZPKr6hvaJ1DQNnMHfniojXgwnS4EKS1GBHRfo2SsNwm4oan796AQN8C74fdxASTYQXC7kY",
  "key8": "rpPjWNBVJnp211zqg7ze1PfhCupUGmmfymaG58NurMETQEywi5w3i2JQ4xMLgpg8329N7gphXWDcmaPTn8uyq5f",
  "key9": "5Xh6yEoWhnk312eDGKaWPMKwMoCbqm1kWYq9NmZRM353rcpSDUaAgwn8WAGX3tD5bm2sEJbrdu9UcNt9pvnmGVrB",
  "key10": "5jaWuWYJk4hrUN9XEm4EzkG9bgAK7UAWNgzJRAC8ppDBHz7ca4hVV1YQ97iP2HR5xPW5soLL1gouK6sP5iadRfEh",
  "key11": "525DzzrwVq2mLKHiCec9Tg8goTZhyrvVsE33Yw3HkegdGXLD2UwTshVMWAaRx2wi7awNcToUXS7ySMN8KEwTajxx",
  "key12": "4yygMvceVB4GnhhswyG849kjNp3X65ZS21kC5N3Lo1FTdBgyFyiRwKF8v4XN34UzW6D1dn7DdWwhr3w8rs4Ba7GY",
  "key13": "4rBorcpM1xb4BYwjv4FXfkWvWMC1Ty8akuPA1Ekev9UpAPA5xF3JLUjGXepQ4povBnrLK3GKgBRhrdh2iXEQ2NGz",
  "key14": "58cokSFcYApGX3nxKGpJaewHEeCVYBpR4TjggA3F7zCWqJYdDBLCgUajqMVhA88PHsZkzeoLLEgN4GCzm2tqib7A",
  "key15": "3tMnegXxo5WKW5hN65z2UAEPHYdVnrcxJCCNbks9tARYLhNVUD7YPFcbzZKE15vLf159jSWKBvigFQX7jCXgUj9x",
  "key16": "4fp57eBNFRMCrzSVxsBWaUvPW62QWDTS2YQTxNzEbaU6XhjziV5ZVyNpMXWxK86SZPv4rhKLFEXfzgbVQ7iuVv2z",
  "key17": "2gMvbhK7h29hgZL9njVKHYyeFuLc7rwDhVTLZCubpiDbmbjcgB2zrCuDqocLrPStBonQfD26ZUeCpQo2X3UZdRFa",
  "key18": "2AxDodSvx2JEDvnh3JRLRXoUEEuaDvS4hw22qGm4y9si6fk1YigcAruVyJppMtVc4atP4GAjCmsbffyNXstsLTVw",
  "key19": "ob99rPkYg49tQG4WMWPxgxYBWRs9AxTz1xedHMH4V2pBcq1gDZBCur5WUCYZTTzBsMZJXix43VmY7QTA1Kzfopm",
  "key20": "4HmzHJHnTJcPFaDUNpVWMU6q1bvV457jxvw3s8nU83XdAa2CQRnCR5x4T6N6BKbPrrSBd7mJ4wHLaMyoBYxmK2Xv",
  "key21": "4d9zsHzCaDM7Cvr9zRcV3WjbV3o7SpfxSKeUvgnPuFHLxgKjsspgdgxJSw16uifEhAcr8ihMvcJDESY25asoA1fP",
  "key22": "DPSnrWscXcNCYdJ7xHhd5KPAJWErWYQdhfLkDrGL1VYdzKS62WpgYqVRWAHCmy9QNLcwR2KFfnwZdCsjV6XbdvS",
  "key23": "HRB85DMeWVZEThTE6uVgisKg8v2Xy8LKN8giWGqPJuSerJ3xwKeUJ3xZKNCYemgKfxvLQ4TkYL6t83uY8FmTFG3",
  "key24": "5EXq7TYKF7k7eqwVhqpNoWcMzwpRitJdErD7kvHKPonRCcW5ZRobMTQZMn3225GyYd8GpjemuW6ow5FYESgv5Uxr",
  "key25": "64ZtCuPHsZcN1x2btBPGYiRYGYioHGyUiXPLZP4jxJqZh2UeKmYqFMuBZRHhu7a5wwh9vJYMhbj1FsaBqwndJA6e"
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
