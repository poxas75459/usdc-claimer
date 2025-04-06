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
    "fToz3cdnoi5sctJe3nDLmDWca1YC3G52xgZHHmwBmNppU99qAnbhDCz2AANJ2hdRetZMD48RVXbdkw4ibixukWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24J6tyJnv7J8HcnvNHsB5GoctBUCTbDJNr4daJztuGTU7vR8eVbjCMRAqTua4dGRvs24FLsQpFG8KEecsVTQWQW5",
  "key1": "5Xe42jEgK2dWpRDdSKhGsErXs6kQiF18JKujMj9sLHQnxgiNypvbwycWfP7g65T7soAVfbapUBXtwtYtQvG8r3fw",
  "key2": "9xc5uPgmy2JWBBaLc341UwWhRf5KpfT6QzcizWRZVuYkKJgxKpYUd1NYQStaubAMPY4d6A9DTmYZMsUBR3ggs8k",
  "key3": "3jE7Pv7vuEwB3ky7KPxbjiD87wVXCeJUgGRZkFnGVejRhhKL8xkvWV3tTXUMEvknSWmbGF86GCy4v4wwDydAYoiH",
  "key4": "37LkTvLz28qL5v6GNrjJkt1Y6KQD9ievNrtVExMCaJW7Y3CkeyhdAd7cCcMHGiie2JcxGwNHuc5BNXXJ2Vch8JVu",
  "key5": "5WhxHwAhQjd8p2CvHKNvwhn344zkg1DD57sh4vEG59R8jiUeNS6u1G8rYHe9k83DJQ4TxWaNAZWfjxG95YNzKsk",
  "key6": "B4HvDJ4q6oXEinD9xv4FBDNjVeKfZ9qv7ay7xciu65xeDu9UYgHqe8aP5yoXKZA3PX5PYVA63DfDRZUhwxk5NLW",
  "key7": "3haDyjEmV8eoaEn9bPdtbPJhz3oSR4LmMTg7DbwPyasJb64CCW2qyi3C2VQoxjZeBKtQUfh3uxzkCPoPmxuCACCA",
  "key8": "3FwLxhwDL78gmSWHbxVEJn6Z4zw7RdqwToGHt33MEF8tWgszZYJoUCSZvZcvQVAVahTDjohj8o4giMMdKDMMtQ49",
  "key9": "2ChspYAgaBcEEhWz2Za955SMGGZ9995reNpJCxVPv1uDDBRNHEm13Ah4m8p6jQBsLU3AwmC2zzTjS4fL3errE1we",
  "key10": "2Ecf4Z13znyYVwyDPtWqgFL27nNhiWUcog74wubKb9VoKEdvnxSWkCZasE2sSBcSuXuG4GCf4EKSckK9jE167BWe",
  "key11": "5NLPHsp8n3Rc4HkwjrZtTbBf41fhgrfCsKSSaUoT3DrbinqKvipVMGgduJ5RyaipEPS39ZQdzY6J4SoGmrW94ZPg",
  "key12": "2uRY3XzYcR9x2aCazJeLGiGBqEjSSMHSLop7GkT7EY9aLigHr47aFUEWB43Cs2cUmVie7pY4aEePcjjSUz4kKePr",
  "key13": "2vd2K8rJq3SEq9Cab8FWbS4KfZWLBYRNRzbjNfuJpgZGAZLQ52uosC9J67rks8ZB5hGG7afJwXmWTZdYygYBmAy3",
  "key14": "442vei8SZJ2rgp93QdMEWcULkB2q5nF9UEyUFXEJiCSS4Zdy4prtz3kTmwJu99FtusoD3DERr3Fu8VR81P7WTG9S",
  "key15": "4F3xqBHQAyxUE6XXMxdyBy2iqsjDYpxnpPLScuvPkQCPiynpBK3srYVSpbFQRwzU6in1pQkqUsrN624bijvrf5Mq",
  "key16": "4JtkNrerK4VU8bPC4saWrWSQtejVNukXxw8r1Eqtw26VQh7pS9YtJsrmSVkQ2J57N1oD5TK6kAAyAPjJpEiCpKNM",
  "key17": "4jYt672cD6WyB5QTEPKiFvxb3k9K2MBP5x5tqEoQkYCFMVrFi9KJomLFZJRMeQhGs8Nmx1kPo33oakuUDSJJ5edt",
  "key18": "2R4dRdXxEpVkBpbtuqPbCaGpMU3iM3WnzXYnHVNzhwbtVbdZQf2cB3zWS25xRWM3979xThqgamjK95kXBen1r9DK",
  "key19": "32qnv9fmjSCWwQndtemSwDAPj3n9xpt8a8au7tvTxkxdqrXrPa1iggUxUSXVtoGdAHtk2Vaix3uKjKfoFskMAMC7",
  "key20": "3nVavV3WgdxJ6XDyHiVFeXmvwfQFSaU1mM6YNYhtsBJAYq5izdmhHMJxWgjrNECGa2aFN131yobntqh68hypoSdB",
  "key21": "5YKZiknHF38qCSCCbShMmezepYWvYD6fMUCSvrgxZ1qFavER1uWeWzDA35duwrjG4DBu7jiKoJN4e7CrT9a6um3u",
  "key22": "3zNPT9CnnVr6aMK8LLTpyophY5eUS4vuBhR1HUfSQZWbwXPoYbJzDoqYME4FqifiQRjTjJSAT1dHJb89KCrG25zb",
  "key23": "4eQn7BN4VzRsy5P5XaYzEDmDCdd2MzngWxuhnFdWPXw6AQYUiLNj9N8pTPd9L8DMKEUz38duc7EE14m6qPGCaAHH",
  "key24": "LKgXsixsrQfJEPeYxkA3panoNCUTDiFDpXnCL4LxrVNuvLQkPenKrqxMvtBDFii52Z3xkbsPk958GzYcvbaxJVi",
  "key25": "4VLiGGd4TjiE5yPeAULm17mc7intYABEtaKRqvTSYccF24vd1rBTr4zrY21PQ1emcy4gopdGFHLTeeCxG6N2esc",
  "key26": "3RACS3hvmmyx8xedxgi8XyxkRHrJ2RQWH28kmZNxVcctdBKn9xJWWYspp9simsLVe7oxDYLq6WzzYJTfKwgi4doc"
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
