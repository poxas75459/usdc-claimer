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
    "4y2Mr43DHeWfpBaAPsmwe956Gh7FXGViwcZF6FuaF4PypxKy1iD3FbxkjZ2ovvGjEsSSVcb1nBzMd65S4vyqf3dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28GFtAD1ZX7GUy9TVPGqdxrxGKTyyEeXVgAttPVgUvik31KAdvMf4pYKHUqiMp8dmxVnuihpxU9FSg5R68CsGbpB",
  "key1": "3WpXyHknUNmfrktMouXrHBfscv2YDfZ4SH4uSE4Lr8FPsaVdHNSBHXY6PTNivvQ5GvVAygG8zhC9zMCUcQ2PLNpu",
  "key2": "5ZwAyZWNePihduutbb6281PS1vy1HS8JFjtcoHZYg3j1mvGGVW9TeAgf1Uo9SoEBLk4oTkib2cESMuR6oJdU2Cm9",
  "key3": "2TRsDTj4at8C1H3E3ntxvcFnM88KV3L3oLYGQP4PxEwvjFS9Wrrfwk1mJfPea1orC8bYo249tzcETg61VBY2e1RK",
  "key4": "52n6pWjHN6w1efBwFpHP2YvAWvJDUjz7u22STfSPQQnHmfushK26mhPmnxSWPtEcFdG7kujtbfaN8Bsdz1kGEEcy",
  "key5": "2cGjUVJfXshNVsbHyC5ipZTSVUnXxoKTPak3giwmhATkytDFQydLwaeZ6vPqPCwaGVDszmR54xgK1XRThsmRDdPW",
  "key6": "jWwcFUjAYzpoNBBJYV11ccxARQUD4bkw5eGXPWVCbBrfk6n5TE47myiibPNNJdxywZc9WqmQmGno1aDLkHvDxF2",
  "key7": "47tJ6br6cgGohNmMNTq2XJqJwCrvfmgXZ4DVQgxoRs11ktK9fnkBm8aKPL5FTgUL3yQQsMnKH8BcmiMzpebpR4uR",
  "key8": "bKgBSYjfq3XzZZr41XZdqVruqbBenvjjnhLoL3REhMfJavryR55pNG6n1UYcbjhXdreqWthPZtnRDHXn5jjhNaC",
  "key9": "3BraHc3gUUmg2sFb2bxtWohUabFHnEGcFi4gVU1vc1XyPzXkfDVuyxtRJ7DR89ncfqjrt1FCWngeR56WG9Aeyq8X",
  "key10": "32zE4s653j9DAwCwVNA3oSx19YSMBxPVwZPuFYwss5e8AKGUNz3a2KbHHCS1rDTQi7Dqo4C1bwiXfZWJ6SkwC3mR",
  "key11": "6Yif5SYCCvVkPWL9UcgtwC9NDipmx3J7VvDqNo7EizeD1WoYnfudPsi82xk99KHhMZTJ6bsugP4k2jiCidemBdq",
  "key12": "45pxTxEpZ64h35qiYtaZLny15EMRPp22qGfq24yESbK9fbaV7nnopsNqq9nLKb46urnD6GVgwPjy5YaAWRFBw5i5",
  "key13": "5XwHCEgzhMjqJLrdxoB1qQZVkGVWcro4QcKUiNzdboQ5ttBuXVT82XHyt7z5br2h29QawFy1cE4N3MV9SBkeS4DZ",
  "key14": "3gZLKNEEK6a6ZcY7JYRuK8y77tngAhhdoCNvMygxxURzT6UVq6HyXWpk9QH79SKHkm4Eq9jWVtrpCaAe5w4qZuVr",
  "key15": "3wEmk8eRQhdiAvHrp2jT2EmnQJtKNV73J45C1SguNXJSF5BTFGXZBAQqCgAQ4vVAy7fd456vYzf55RdqyLmdEDGr",
  "key16": "ZK4B72H3sDDXc9ZFSDguKhT5jFRbgAr2RrKbqAn3J1SxADE6FZ1rEZeh6NCEHBB6jT8nBEimSgqbfEsaKRvS2mx",
  "key17": "EYfcN8FQXSm2MWjNRLSYHT3fCoXu72bAb85XaCVfLKHn3SU2xRCDmaBu9VvfbFMJpJnE6G5g7Gx2cosQuiBpqz6",
  "key18": "64X4qHXCKXtJLtjyxMRWtxduBYTcABusRkrBmVReTBMzv8bU16T4hqKH8rh6QuvVNv9Z3yiGLgUnP5YPx2TQteHj",
  "key19": "dWrNV6j8ufRWTHVALg5PSLr9x6vU4q4U4PUMEi3BPJKLuUSdo5M7aqceQowZ3m6n7eLvRmnr8keQyYPAKSv599t",
  "key20": "THdqiEEdDLonuENEag5q9HTQSens5qFioyayVYrcedC2FRLhekytTd14hB8wooj4MkuGrGELauYWkdSjKQbZK9b",
  "key21": "2un31QU8hPWwjKCD48zZoJfRzLBJjXrgkPnMYhHpyzbzjXWdsFvW56qnNwDUKRntEekzVDAnzNo8AY69BLaWSwj2",
  "key22": "gs2zNoPYm3KcPVoQAXmfeWKFVnAZt1aRUpxFfeCjTibup1CdbRLsPknxVC6RVNhFM41ya1MhFye8euN31gHVc8D",
  "key23": "5V2TDmqz6k22TdBwe3i55oMUFwTgZTnkev6V8nafohVZpzVohr7SBHPQLFx2RD5uWbpq8ZSCrAtUX3fTZAdP8AL1",
  "key24": "52dzt3YB9yygvEtBywz8aiSZK4P5ds3gK7RWaUXVQpCEs8n1wxR4fVT4Joxx1wK55JrMz4FHLmRwt5yePQZUnruY",
  "key25": "3qQDQfEQzp4osoTr9m6Tu9usYZoB18gSku4jQfpf8FTfrdBbM6A2s4ue6HoJBTGkLhT96EZqapzfeX5aSPnEo7eQ",
  "key26": "42Q1crFTsbc3ZWDKtdjf4MporUDwwx5Yj6cb7eYfgEPbnrpim8KVwmUG1VWUP1WzJfSipnQ91s1kf7o6WWqxzYkw",
  "key27": "UesSwwJWJj5rDyD6BQXvZaddW9W2nMTfZzK9Uz1wp28rqgQsqSPYWCpfe5QGYzf9mjnT9eZ8n6NyUKxUi5y3kCT",
  "key28": "63BDQfWThy6RouJtiPrrrfF7REwUfdN7HkJZNyuThAWd6GgaucUt1DHKf8gc9XA9T6aacCaCTqvQ3sjjJe3nn3yG",
  "key29": "48Rb6Vj8WxoDLq7q9qwiqzJ2JsR5gNSK1P11LKJwBv3LGd5DAYk5nxY5QyUe3PRMVJ5ELeLJDqdn2XumV7ec6JFe",
  "key30": "3chWDHzewKaTum8QyA4jFiHLqymSuPW8vHFXP9HsmkioHkzBNEvNw61u9PUP2sqhgte8hfdwJzHPHvQGW56Rksk3",
  "key31": "3feXcjcVRxXdtfFq1hUuuhUbE2yQMCLxFpxwy7c8UzCzL43xPcAhHTen2c6URtenZ3VLsbpzQPKB7nYnhq8gn5fF",
  "key32": "4MtgDJxs4RTVt28vH3vwdbSQYe82HGUKSxURCtRRwKUWWvCvmCtgrj3PcRuqbQvCnfLh46JYtbebNPvprhVU3ceY",
  "key33": "3k2CmW9mkkRXoFYoAmRzQwiitGFF9gmQefRdyZzHELTk5B1QYBigXjkSqaZyxTZ3pRt4KQSb5y9yz3B4uQ2cpCVL",
  "key34": "2t1R2dajsruvU6nmUutT4urAM6Bb7WLNP1DNkov19LTBdXEbBCUP1vj6WvzkxrfaHW4STHwRTZLgBBpGoa8YSFF2",
  "key35": "27uso5fNmL12jFPeV5WJCSC942QeK4fFnhPCXNRGEvs6Hws9q5ocDshkf5hUQxa3Z2RxaAwfRJNBANr1fVjy6iJg",
  "key36": "YPsaecTBp6ViyU6TA6BzHeVLXZTA2jkUWbqBenPASpcbo1iibNbDuiwENDxbKnSCjnnbFw1ysjGy69pwpdRWUQ7",
  "key37": "t8WSzJrLEbTWLn4VKGUNjc6cTZqafTrrY2jk78TkyKA1SCTSK9YAsPL8WEmPuVr15Bo3bCsH4iaQevwVwqd4LFh",
  "key38": "2Qh1NHxkvwm41oF5CHkr87drdqaFhGnKK3mtxGADCbpn1wxvXD3xDwyftX4asDA6VssqfHEGkTFmy2pWgdDkJmkK",
  "key39": "5KDu3c4Wq8r12LWPW7za6sz9ZsiyCtwtBP7nhfzcrAXSDfjHNco3mdiKom4rBP4VESRCF2PgQyrKRwnJoJ3HhFJG",
  "key40": "2GoGrkpBWBzBdF5t3wjPTU5Ear7XC9m3sfCRFq5BEyyeMxcGnRsZn9s18S9aRpeFSqcoQcd2BVnv5iMcaoS12KqF",
  "key41": "24AYi7pAYtVDbNUExfSBMPTi7RfDERMkLtiQfVJvvhfyP2rHVm1BwpRZmHk9Ejh7HHiTEexSejFKLxaQXHKcrsy7",
  "key42": "Pb815mSqcTx6fPbBp6MTNbTHC7fzfswfemYoEBnHgK2UykYruLxVHSg1o6ro2DGH8nxVjuhu5iMPA2zhTsPjHmd",
  "key43": "43hJuoVnfqivXmJcHVm7H9JuCm7jbGgS85DYDMtWFqKb1WTeMdMkUaBhmAjZtkLTHPfbQh7oe5LUo2uqejgLEtah",
  "key44": "31xc91WPpbYCQAuhnfYjRaTNSaGQuH4fzsfzuMRuEjw8Jo42SW9azFGZjmtWcDVGPgKZczexfGCtcNTcWShFHxrc",
  "key45": "4U6HTRNPx3BSRAfdWdBLFxzseBnAQPCfnChmBUu3k83qodc6YmjbSUcfZVWr4nywwDo3bSRCuvvQ87ZoGidCYpWD"
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
