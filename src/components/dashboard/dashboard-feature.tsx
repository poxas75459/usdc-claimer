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
    "3eYV7i39cgsZkHsRNhR12sCvBDurLxdQ7motNsh9yeoo8uwZ91gmHUM2oFLLCLdeoA2jNDPMM3BVjNMHQ4Fgjs3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcKwkxDKC1a5cSttNKP7dHY4f9VsJS1Go4n7PW7wc6MQwepSSq23rBdCYwGgKR6xb5Ghf8k6fnNMnSxzyny8tLn",
  "key1": "4h32aAw2Fd4BDCG9xm2LyuvMos7VRanvAoBtbefxLWVs1z61YquhnZEiDh7ympaCsmtcyzmHta622yGyFGQsMFof",
  "key2": "2CqosawkioWt6PxXMdvCsETDDVLnoXTGhaiijoFZ3Gw7rviQDh89bMWJPEk9sbh7bXzjrgQjn8wNEkd3Fatr97rv",
  "key3": "3t421T9YXYhTo35CNQAd66Dukne7679etPKBNBA3ERUsn5iCWHDVzRjvzp16Z6vwdaFwGo8PXJb6zuCL2ByYCeKE",
  "key4": "33NFgAHsFoU9pcyRDSD3vkdcGcUnE2uVptdBNk1vYJPBurby2yj6B2skPHt5kf4kCbTHgnBdRND16xUWR1BEMP66",
  "key5": "3fFtPhdu5pRG2diebouMvATRFmngY2UJ2DScSQLoPxJt3CR1Arf89PfMEQE79wUcuDSjqJU8ngG7HmHLNNcqfys1",
  "key6": "259pZdJUPAw3Uj8kmgGLT1bQdWmV5QGz6au47kXQNqYUDVo9qDqM5b7VS8G6C1sFQcHNx4c28EfjE9YUbmFe3CmK",
  "key7": "2xn1H3vxbv3wWqpHqns5b117ESiX9YSgxorcG2csmvA65WhUeQmkcdhJjBN6AHqXAAXV5v3eJjrGojwzr63nDuoA",
  "key8": "5Ryw993ZWAEBbfNpLsFMRRrFesdwQnfFmP3kvccMcZrijcwownZV6xdv9Gtgbe94cWJFsUaAbrzXc16ZxZgadiS6",
  "key9": "38gsMDxWEtTxN8ABBKom79ztiYY9e6pkC2Vov39qjqRpRieV8KRQUubmd7tk8Kb7Dq9ou9QAhXxrvknNA4vYhCK6",
  "key10": "4MYgiuo3bZzegbmhqc9kmxgYBfACSbammw7kg9phGs4CBEGUvE4WkSMJSnpfqkkfzV5KZG6mhDdjPAWsP6iZiwwP",
  "key11": "3nSnf1fB6GcnfjxFG8bTH1uGnrjVYdQEEAnUDsw2dKHr8m3DWSs1noTT8w2n63CECKseXc5MMXLSq1XWE9HJzGiH",
  "key12": "2RQRycFcmJwfAxCxoKCx1DqTeToz3RsAFmkJQVhA4TQKWXt6rBvTTTJcBkjjwoo4aENJH2ienvtxmGwXcWjdZbDL",
  "key13": "2bs7aYuoiTspQUW5gaC3BCBrVezUjgNqJzZXjpmckcT8ADHpJwLSpVKXf2hAn1cxVuLWqye2uMiYXB4VNn39jkqr",
  "key14": "5U3vT831EdCF8AChwYQnnR6d5HK9uDCQkNJgFEgt3DJvFFozDaHgc41veWytHdFSefMdpwZS4iq8L6HvgDJ5yjXg",
  "key15": "2wnwb9M2tDTK6FUGhYacTdhAE46qSap9TQVHTo2VqzrCw1hWcB3GdHrWmFxiQKxRidLrqsysbD3LsCZ6iDH67YzU",
  "key16": "2jrDofNpNbnjaVVPjCS5yUBruVNRDSqmBPB8s7MMnZjnGJTMNymdrJku8Siiept4RMfxgckSQdhUSvSiN8cWGE8q",
  "key17": "4tfhc4V1prhvsDbritHeVvNe3ifisrwEdwVBB9haopqt4Q7Mz1ZXztNVYYp9brpJfAHvnqTvfB9hBzkBAgBc2tvK",
  "key18": "5fNkU2AepPa7NafBzyBzEDWuufpHgY7v9Dku8UBp3iRNXVqDGCX84UEkfc67tTKucCzFsoXuECBvUFx3bVXNk9dz",
  "key19": "51NnYz5p5KTwFbHuQweTQvuoVgQooRP7xbF1spojY5h2Le7qrRm1MLY3aJiiWGxcu2Vs8aMrxJRxVdJ66YAGgMVn",
  "key20": "27RDn2yCVBibzMooZPD4pYSKGGFasXzeTHC1pzZMek57Uqt7Dxo85aAPxg7a721ZmPsWdydoYQ2S6gpQoWmh7JqD",
  "key21": "NkrwwuPg6k7YoacD1n6nzBqbQWB4svXbbni35jCmYD2LXT6X4yQemeGnPBkJhqecVZcetr58msFt57DEfJTbsWn",
  "key22": "427NhyjCbqAzmj2mnhFBWscebnWg95GYfgtGyFccH6jQesFYo3FZfvV6eS9L2eCFaoVC4uNSBJjJFjz64bwu41Mi",
  "key23": "3q3h7322aHJpKNqdkVMmNYFBG8fXM7jJP89zny8HvEyeBVBgHDkX694tsbSLipuhhysJ7JxCp6BpHbZTKMgqKE5C",
  "key24": "4LobNrrEwptDhJXWjhZyQ1WbVEYUrA22SQFGP1ph1ejvE7UrHnZLrrTtRxPwYh8oJdEgcNn7yiQsf1vd1RUqsPyR",
  "key25": "2SttGtEhaC2RyqzB874g8M9pg1WDoHxGn6QN9zNLwPsM4m5RFzUxZkERGmyCHUahEoBW2TxHFbmBS5n6CktqQRWj",
  "key26": "2oBgNQNmLU9UqgZFVUptwV5qmKdoxM3JErBiFcVQyYFGCcGqNUY2vqowNTrsAjiYNqxxbuXo1FC7J98gYKo46uUL",
  "key27": "3gpJWQjiSz9tFtcHKt94186Lh2FXSMydgBikEqyiW3nAz4A2RnAHkQitCsEt35JmnAwUMNoWKoJ3k9y561rBM2W2",
  "key28": "5Au177TGpqAaQxQLh5qRY6wk8oTe3Vto1ajGKc5ccoZwMYAq6r63zZRqfuDQgve3hAdYpRvthiuLffkucV7zbzPj"
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
