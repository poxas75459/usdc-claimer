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
    "3wMp7Je6D8vWyUd14j5pLtdq4odA5FwHZrPjzkLXRmWkG7Lx2sbRqnC8DTLNVgmyo39iZqMMqWPx1XLtJaAGd4Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTEoUiPvg7eVhuUuVRdSEfGVKwzeu5Cdpt6msY8PpXS8LfXu9t8hpfCJjKF2tzWNPhHyypm27NFHF3rCu4VbHmm",
  "key1": "3oJKjRZsem87EYxCXzo5Fo2ftKCk9ywdCP7t5x8qYfBeojpfmAano9GQJp62Yq7HX8vNrg6YKybutcQRF3FLHnmK",
  "key2": "2NPCZGdqkrRFaL3LPGJNBGmfdByvrQdQTxFu98et1tLr87hThDZwQXbrmViRfiapDPCpmN9kkzbjywVQcEbr3Uj9",
  "key3": "4BdBRVkoXn63gsiQXCBFVwhQ4GUaRi92BL2BTUSQnxhYUGP7oMMnYgcTJqHtuM6XwJrmff8RevLhvjmWLnn9BCAz",
  "key4": "3m43xaiFfREWhyucme3sm3daTRucWxy7seoLMvaE6AcmUPE2q2nisP4oGCTyLHT7QxnihhGTuT94SSiHDf7gvruo",
  "key5": "2rqoZmCLrmPhdQHJCxk9TkvvFmNgLYPpPTsiLt9wJcU5CXAprhGCQXnG7mK7veiBQ7akLryEi7r9bEaNUUGGzJTh",
  "key6": "5RjAW1THYxVKKTPZsp6Xpyt9tZ1ZUvr5NsUpjUuNxATuueuwQPTgRh43xDcc7r5pfVDcw6e4eKYJd971oHqPyzyM",
  "key7": "33ekXs9QguyvxVDYiBRb6aRrocBDMWPfU9pPbQGruaWdwt5yeHTYHWMaKr52YYPjK2gEp2pRNRCmwAM763tYn1xa",
  "key8": "55jdxg7xVAW48hJCujFkusNhYHbNCvHG1CXGMRH3sMCxPAwS65go91vELFY3oKUv1H3QE6WCRXTHkAK4sz2jYTYv",
  "key9": "4jwr8ufn1E5SF3SspsyhxQfst6a7mozgyGat1wS4W3bQycauUzFVXhL3pdpyGJACF7h1vj1MAoiZ9xqSo1cnzBJG",
  "key10": "2fvEmmjC1qXbbZ83EvHfwVuuxqwgVi7BJwUrz5M7cSyZ7eYnNDFKGDwWYMS7AVq2UvPeGwvSMwPSY8tLzAL4zRXV",
  "key11": "4iWXpgVWMGhnvfHPhWRmNxwVrcTisTLTYbySNMeK3G8qS9Dcj9x91AxH3Qoz4R3oKJRTd4DR6YnVRnDF84s5CRjF",
  "key12": "4jpJDfUDwknbcDk8TKimV6ye777FXvjcqfvH22WWaYZmWq5RDcudnvnFa4M38TGRfeAn9Ao2PQfaXQZ9rmX4YRSw",
  "key13": "2ZBDBdbx1swhrQ6QgFSRyVCLrCzydMESaBNVWtpkAJjaN7JaTHSE2BMhQ5yDCc8FBfP44QsiVeKHCpZntUmUZ4jH",
  "key14": "2NymerNPmkhmnLFjXU1F81DGyRFWBdbymQP2fPTiduic6NsGsZPFLhBmDxn8ZSjEb7nMWjS9DGq6QSFycfa4ho5T",
  "key15": "2dxTtfvc3sDxaEbM85Nv9HAggHzwJ5bzkPa9mH9DycxSbkoPMGNWCNq9TsAkpdLirbmPY3kwkmqoxesxSmf4AZ6j",
  "key16": "4Ur1DkjLgr89skXBDRC11EciunLzpgQbPd7QEWnfGLY6Yt8Evxn9Ju1s7QzENVNnqgRR8h3Ladf8Lw5dYinYtEjc",
  "key17": "ZADbad2bAWJniC8ki4bfo2o4bCo5J7ocMLgFeGnZjFMAKMR1vwyDjJ1sFqeg28SwfpiLoWKAFNnUXJ8y5E1rqog",
  "key18": "aUbWga52eBLXAKn8cmYNt7TamWv7sHA4WrnSPoJQbWbPi8JRC35VMyvgJNJ1MZiuSRq8K2PZLmT9ae4eskCxVXv",
  "key19": "4rsHbGCQBWvpQKeuPrcuuWdLcPAVCpKV95bcBMcciVgsTgkMW7LWRXJFEMAs7auxQu3og76C64aG5wMSiX5pLg4G",
  "key20": "tPGgCG7FcwT5jK71A2yw2B2iPDre67tk9Y3URjGmz3o3YC82b1t3VUfdyArZrWYTWHgH9WESJ8vKpsD8eJQv8ab",
  "key21": "4FKqhy72wh7ZLSCFSuDtGvdu3DkAe5ARwNRRZcSCE7spodgx5knaBQdkNSjTUtCDMj5WXVr7iFpYXNhr8d68VweN",
  "key22": "2G3TDQ4ctm6XSZix8vQKesdUzGyKD3jwRDZKrvdcTZidKabjRuvNcafggq3kB7PGVvQDvzLroqWRGajmMLR2paMg",
  "key23": "5BLjTjmSzEBG3fuU4SWALq3Pk4diM83MuUcw9eFRUeUpxuSQjHn8DN4eScixVL8cngdQCCjxj2LwKJxEV5B1Fi3c",
  "key24": "4Yenu7UMtT18xR2gaL9PDGmYRuxKK1Yivwyxx1KyJDBjseJyywtLE2DBGWfAGFHrinfzfgiu6yywwCPahKQNKewN",
  "key25": "rPbdfXhAm88oeuNa6F49CUC6HDnMVJesz7EQjjupDsd9VBuDjhYS4ACy7H7gpPa4nEpRWpr7a4EzgnwjSwGxy26",
  "key26": "3YdPwYi4k5PiGmbSb7R9PXxCqLsPUetRn1V3Q3cURPNVwRzAGyENMUpBVGET8zctPmCHtxuCEN4CHqRmbDah9d8V",
  "key27": "A7fond3GHu7nihSsHR6ZcRozbi678iuR1QWcSqMDhkK333TNc6qDN6XnSxSc5FmcYZXa6DufhnA7QYgRPP63Vx4",
  "key28": "7N3nmwp9G7utZnT1kF8BnmoEtbhD8WFDWvcBTWYMgGjEthSxobAQWK5QuUkJkxfpyCuN3FXKKGJcuvHDGePSpsQ",
  "key29": "5x2g8t3N3ekUuVbhr5pgWbQNFf9t7g8siU48WBkg6qKbboeJFBsNLe8ag5LP7zEph4GymN9EzMjaCYYE6WZrPFXY",
  "key30": "66ieATQjmx8LMreVY8iH5As8rS4HndDtuD6gjy72o8Bw61TdeZKHUzmVUBSrwGDHPjjys13bPAJzhVViXiSjQT9N",
  "key31": "4ciG2UohPAvhH2XqYnEXf8hT7VFGDi88MySYsSzoppSAuD2PU9mz3tgmWu4Vi2WgMDwjscQpyGm42dzjDbFh9omn",
  "key32": "3LchmYzAhNjtGgDCKZfNBJPnvoArnzKEM6LMxmEp96zNFhxeuRKecpz5WQZpcaXLs91xZDci4Wa4DX5a47LnoRdd",
  "key33": "4feFLtEpWTm5Wx5HkzA2uYpU3rEgcu49SDdwRvWgLuajYGy4QbJEqS1GBrBcqPpXhhFtZuhVfLDcWEyqs2DJbYme",
  "key34": "49NW9wtSa5NjLdZyvWVMt2ZMaJZCjG2MrF6cNhVZNJiiTJQBwugoJHvQWYRsbsG8gzsdSF8QrBKRaPCMxmJagVRn",
  "key35": "2rmxCVGKAm9A4mkuG2B5e18FHpv8aCZdRmbSrXmuUHqTv4jP6rvjqrdgrGyK8KEGwVn5Fjqza1E1RhryzHZ3hh4v",
  "key36": "5c9TBxY4b7PoUhuLs3oDgsY2Pkcz48UZ3puARJvEfDgByxvbgZXBwnWFsr2EedwP5sB4TRuPdbzXYG8EuNc5WaYN",
  "key37": "67mmaT1EkY7u3ZUDgNNzzpWwc3FAWkGA7rpHECDiaPGWv786HTRw2MjDTzkGuFQtewWcH44NE4dxgLUs6sSSrb9W"
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
