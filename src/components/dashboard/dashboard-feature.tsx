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
    "5xaZZtemSBtKVP6aCcmSRaUsvKz9Wux9x9k9v8jf1uz8Yyro5w6cioTuM6urwkFxSSdkAdc43jNQLkUmzbuierMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVJepV77kdbvfpqkaRKSYR34RNLEHt1TQCzMn8zdT6rvTSbw5GJMfRBcmU1txyYSUTGnVxJUJHkrLShx4AGEnQJ",
  "key1": "58uGGZBEaRm4Lw5SHVw1ptZtYVb9N2LDyPVdDN8fbebqffPKv2ehRnDc7d5CL1EqP89WWftAUWTcjmLsTNvG6Qbu",
  "key2": "2vrjFG7EZkt4icGTtg9BqLwkqLn4E7mH9fUjGSvVX6qCtzVy29Bo2nbwL5YpEKskQ9aAsNvC13c9hJqoXG846qJ1",
  "key3": "33RwrH4pAKtxvCZs27PoBDPMZY5HhWV17MaEDwUJogsQZQBNsH1yEPiwyve99Dsxkrq27TRnAwi4EVoc53pr21jM",
  "key4": "5623E2imspQEmN28pESDdB76MN5QiHiSg4qV72oSvXHPk4F9qkzUQcybbzkDzZe8oCgkMRXKkzHGGdCQCb8DWVd9",
  "key5": "4oHptu6Y4f9yGhxgSxw5xtRtWsXG3QMT66mwJFEbgdVKJgaTGUojTyGZZzgieThVcyTwSgx6AreBiBq7XXHyYa9Y",
  "key6": "SaSawck3hdJH5xYPK2PRESWAC96GGdbmazLPuQYLbhYpnAFY9sB3XfN7FuZEPamsJhAhTUdUig47m2Q14BYuJr8",
  "key7": "5LPE6FZzWZV4S7LaRSRVVWuAsuFZBjg9UBEkGKGDmgpeRQ31KVp2aEyqJXopWcwoWZ1udpeKDhifS37i5jnJnAg7",
  "key8": "4jFb9YyCh2jL4RkP457WAyMkvRhu5QeTDJSQztNdDH5icki21RQXd9d6vtaezcZQRs9bPoMdti9RBY7M3QNTiNzu",
  "key9": "5xuGnoc8np3ejU8sLCT2XYjzJYurp5rKzqbDdHBcsLdTxU3w3SXwMSnNtz1bbdibs79NJHXrbWGDzuMRhF7Wt4Qd",
  "key10": "4ySgGaqAzUKe21BhRWW8VmeZYoqjNLCBkGDA2QZPVi23JCKD6FYE8XTCQxeRcov9NMoiLH22m5SX57CYN7g4WL67",
  "key11": "33QwLM2cQMXFzVLisTkGcSK5gtBFfuw4MiwmnuELye6VzVyQrF3DP75zXxwvP19L8YvG5s3VFT3j7hyf12wEWieF",
  "key12": "51PGDLPn3JkXNwAoKuHwKt7BEPvzXdTEajuvZAFtepx9a2q49AtLUjmQsbfgqa1ERKqAC4Y2oxW8EoavKwFBWiXC",
  "key13": "3Nz6yoenbYTQAgmpeFmEKjAjgkaKnt9DR9UnShNnbcYLVCHd4NiShms7EpeGGPdnYAAN4shqaLyNXekCnZPuy1Gj",
  "key14": "2iSs7ABDuMGwZtYvu7Vn7pCeycv6DKyuUJwzaCas4xXDiTMNWp7PQm7tk18JEfrotFiuKAc2JPkEa6KfU9aoVUYp",
  "key15": "32kPzeF6KvWEsiex7jDDkHoz5EuzGHmUCE9Cgyi7bsURv571dmevzroX6PcJrwHmzMo9Tj4h7h1mePb5qCHNougg",
  "key16": "2tFfwQ9DKjPxJhpRN1zM2i2vP2pZr7vE8BvsxFA9vQKnEiHT2XUfWYyENrL4aq3axWD119ftqLLbiPLXk9KZ4H9o",
  "key17": "4ksaVC9sireDp13FYhyTVhLLV4kts2FaCM5REfVDb1y9hxQmR4jNZ5HPSZCgNANboFQqhcMEkbaURmL4M27MnSVW",
  "key18": "5dDsxPptKEG8cysHRZUiG88poTPRybyDPieCrgYTZ5NeAd5YLUMDiAMNz2iiL5BgSg82mQFqu45Ytc78LTGjVbJH",
  "key19": "4PRJx6szNACDXenPWExqDX1YjycS3TJvSATLe2kf7tFsFh7VJboLsAEZneWS3y8tPejzypyUbtQHbnsfkg4oRWEn",
  "key20": "3m5K1ZriQW8iKUxgM4zRNxgJhUafSePFWbKcm2MCox8wCtYzNkEEm8Z8Cz6Thw7suw7Hag3Gn2uA8zocypTtP6gB",
  "key21": "2LtqjYnte7G78HyAgNkrVjMZn83QZCZxknGPvPd9va2BMd6t8fKv7hEW2c9dZocPmYdmXKTkuBXNNAXBvFQcjcqA",
  "key22": "5ohBtnVSfHm2cvn23dWMBDzmN2jWamSZKysc6sMwuHZunL2muAMSq3LziVxET75y6ftUmXTe7E3F5a4xr6vqa6L1",
  "key23": "5fGBfQLcYf8fcQbV6vgkdozt8PYNNEzmC9GznJXJ1Tr1t6SUY9jE2XZfDnRXncK5d66mqNuhazJnBNqKgbaR2mS3",
  "key24": "5FdXxYiPpYrmeFf6pir5pDRN2A9QU9RqZ6YZZsQMMwZ19Mdo3NJ226Emw2HnQ87zpM2c2DUpn8gc53HPRe1H1nLb"
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
