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
    "to5k4Dq5HirShBD94FjBsPH8ZGxpMAcWc6WYZEmNWqmM2m9CPFtDNFtr74zwKLNky2CPf3JZKyHtQHoBPbTwXtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5q96spH4sKN7FKbPJ34eMKT58jUWvUcCLYBt4VKeZDxsq8bZmfwuGN1Pvthpoc74YdcMWaKi9qEEBPoC2MDxGs",
  "key1": "BSAheNXVeXfHZYF9mGHgVJZ9fxKsrYZEn1yCRQekqbAXDhkwtkZbu3p1nTTixMdt7nHKWAJn9xV5pqUjypvw9vE",
  "key2": "LotKn6pSjdK9CW5KU4C3wBz6uKgQWAimSL9fSt2mxuthetBcAcGMCyhTSRrRWhSgVsRXG7D6KuBMtFdRWeER2Vj",
  "key3": "5CFcLyHrkXCTeiC1vwYRFo6dPEJ3HcWYNGT5UpK2S2fakyA1FkUD8LFqxRJQZNqqtvkShnP8L1WYzSSX7F6EAELC",
  "key4": "2rtAMwLeTj4YJGr6fRqYZtvJuVXBHpnzCQfHJxSCSdDh1Y3bV1Tsjr5MxFYVwwPDgf1BjZBf2KeyiBTT5he4md43",
  "key5": "3YSg7Kkbh2m7WqxLoMRj1REpYQP9245hBaxVJk2Z4ntHD4MtuEbLwvoX96ntoFJnwQ5U7zr5iXr4sDnAnNKNx1xv",
  "key6": "37eqXp5hDhevKAc22Jk72byvdNt1RuaRDVJAowoT9vJDgsoXsEBCD25Jm7RxBphyWFAbNx7kXYSetPgE5wtVKk3r",
  "key7": "3FCD28dnFJokFiKJUfvBfC2CbDnqrkdVFiPk9fAjjhe7cdbxzXDqhcyHjJDx64uo5HN7RcbysJhBjp26Hq4VfRKH",
  "key8": "ekkWZzpjk8rPYknBHSPoDcfKXXXB94u7Q2jTqsvUX4eAyzPF5D7nRYkt8cvyQMsVNn58VbeZEKFNB7D8esEG8YN",
  "key9": "5QY3rbSHj1Lq2QZ14bSXxfZffGr8oung8bfU6GaULABK4K2jJhowfDDuXmWQYauNzHRAioTFXbp5AzCh5RaGySxX",
  "key10": "5RbT9CnVydMbzGM7kTiVxEHFibHcnmdUBCLgJ92aNmQNENa8PGeCsahQdfU8KpAvftewUqvdLKM9S4bMnR88B92F",
  "key11": "44df1s7oRtmmqdvfteNXXViSDnYo2639bCMnrn4z6uAXv4WcApewTEc8a1jhrr9EPyGUhPCsM3v47sV8teP2vDPi",
  "key12": "uZEVMQf77gxifZGcCW7m97C7vCnvkzS3GZtCBXvnF8hcxPgrxesuRHPEU8LWd2MKF2fdkUf1w6gEhSVpciwQ8sn",
  "key13": "RxwxXdiUjiZAVhHxTKSBysBdTczQjeAeDkGHk4Wo24fcPH16tvfzS8WvX3e7tqP7kx5uKKnnHwSHK1bacimmXcp",
  "key14": "3ySL8JCrJSvUgvBPDWd7Fgywwpc9632kKQYWxJ4pscmLbEoATuazoiku2p6kJLqcLFyvCXF8F3eaez6siFNNmqfp",
  "key15": "BMP3qHzHjW2hJt1eqfk5pqJkkgcugJzPxwXXM836esdH63hHsHCXEqmEL6NbbFVv8VT17uPtFNDTT2a8pFK4eFa",
  "key16": "4ycsWuLtoisoDkmZzhxPtdAg7o7MdPq1jRA7c1K1vVBhAp7RUDji1bjmTiRqQZmeCKLRXTUZNqx1qsMbSPcGJQaV",
  "key17": "4VXbPswvHsoQSK4BF6yqYFXY59UfJUzrxcvLcAy8ejontn5egKymYTdTMd2gX3rgYomjJFcGFgCfA4eVqAPNZVj",
  "key18": "5nv9ZkhpwSHKFQTgbL3xopeshH82BZzjg38qGG2yQYzSo1gtPHwMzU4i92aWiyiwhkn1yQ5FBBbfociggVQPBVZg",
  "key19": "3ycFAaDqmZWdiGetunRaJYjhtwYrFfASqWpLKAxXc88GbXRhTxLGFyWeZo6rviKneo9BpRaGac2EpKH3nr394GDs",
  "key20": "2VYLCu1uV99JhxiEkczaSgX34NCXgTCtqczKS5S5ncDQf3q5NSaym6nMBvQ3pcEqQghLiQmJCtVuJ7aQQQ7cYYjL",
  "key21": "4iD1r5CLn1VCq8p3LH5yneonCNmauvpS7ZvsHzZUMZCTyaAVJP1gd1PDJWeDRkDhDmhe9xHg1FYc7PmMGD7WPwi9",
  "key22": "57sMU2Dbc7DeWf5eUc8HByGeaQqWLffKiCNVkfZJq2MwfiT17aaVtmUu1ZMtY2ww8jfbVFr3UPHxKKvF2UD5JC6G",
  "key23": "2PNEDfDaJ2WebmXFbbHrV3kBcw4XPmdBoWd9xjfWCgiWZbLfM37gKYDtbAYyzsVYRYnKBXadj9wPD2KsPmRK9fxf",
  "key24": "Y6fHMewogkzWtoekWdqDyAj7aTwT3EHUhcMevTGpXQRQZYeqnE9juLC6ueomceHvWqWsnHvhwqHmEoPFBDj8jsE",
  "key25": "3erc4QA23TxcGxvzaBeV7ADbPxM94Dvwcm7VeWbUWoTyNL5L4fAKGvUEXdUYA3GXTAWDrYCnJjz5ZPaTWct5mBgB",
  "key26": "4m3maz5B7DSPYwCPYJG5ztdW12tkfVa9SQLNscEhLPxfBV5eXxArLsigFoahkiYmmmCNDCkhsbi959ZiKB6zYy3B",
  "key27": "4FcYtNkM24h5m8CuzM5yQadVSaybbJuTPJ7kcuG1UVX2STDVyMsJ9TPXv6SrAV3eQt6cS8vmLNQteKwz9rFnFrkN",
  "key28": "3ciJafwzcT9QMuNvpxgtPGjNCWAqF45awVUAmQBBH4pEUaY3F5quDZYvUjPBSc4Zm4T3ooqZUKQQgrHnDPQQmpaA",
  "key29": "2pkdyN3R15MhtXgytwuZ2CNda6NhXgt8nf2TvLdWbCHLABV2jbUANTgKpmBpFZq16hm1bijR7nM3SxqeNtJcM62j"
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
