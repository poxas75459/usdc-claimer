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
    "2ZWw1wicfCk6oatB1kUDL8pz55nDpD5EPjHLjoMv5DZWXtBZuUcnCce7UzRfWVDGpNaoWqGDQauutghde82XBueW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qAEVHDoGn6eq5khADd6qo6gegKDrTvomXVMhbBZ7BfsHFiYSu1GamPJsyUVZSMMZwasgmXrswWLb5FXCuG7fkPf",
  "key1": "E2akrGULMpRUZTE7sz1DqjEVNLHxNkCC5jc3VCJ9ygorp4ECVAqLh3b1Fo9gEe5vSMMHVrD5iXfkS7iLDpz8Zyr",
  "key2": "47dTDf5NDbfPpGQZVyJugTNNPo14b2vNGca9GAF42BkZCHaVH1DQNsRGzrggGZzm88qWrDeZ3RmTnQ2xopv1VYYZ",
  "key3": "QBxEaRHej2Q3zECEgAbL2FzcZjSvBTM911o8nWLf2YLus8Kcy6ZcH6jEyJdT3T1WkMsHbVcAszir88sFrydaUsh",
  "key4": "8RwdWXkBxwTRwMTcK1nKfwFqKr3U3fGZGFvra9rFT9eDz2o8Qr9XzvwpfoVBgAKTfUQ3iEYGmPQTZZarFbDpgoa",
  "key5": "31yrqLX5cV1TFeKqwTosVsAaei3BGnRUmYJxPabVpiRSdxebH9tdJA8Pj2pzF31yG7Xmio9kQ8tKhKK7AxLskhzM",
  "key6": "B35jR3Gtxz23KxrgexMXDQs7YUhYxyYJeetvcejDWV5DWDYgPPJrHAiRpaEGtF4ssCiT43LPqgohvtFKsCrUGvS",
  "key7": "3YzTMqRcGaSJUwbqnbsm81peab5HD8mENNgtnNufYgxL1cuSVEwGfoWwDZ1TgedCGwBEzSjBFV3MeBa6yjAVNJJY",
  "key8": "5ix9uGbreU1pfLy1r21QDrLNFMnQUwBqtatfUsYc3x6DuFKipt8iB5DkgHFhzoF8WBQ9QW3gFukjDySivu1d9ZFc",
  "key9": "64CzpSkt6ax5CE3JyvHcQkjbdiyrGEt8MeohfCWo6xEZnFcF7UrSUbvPaArs2ufkzY1JcUgAW32Si3kTvovQD5uz",
  "key10": "4HKuD9syoMGTdonR7NkQRvhEnrcLkcXVaBF5aqjyS7DxUbQhm3jrbaz7dLm4asX1vbEwy6MmBsLCM9pE98D78waL",
  "key11": "6SGfnGfjXxo6oykZBnUzLg5UfPjXSpZZbFssyyedYJwynj5QmXYzp5aJjArN9d2rZSBtu16p27voiCoRkRpPpZD",
  "key12": "5AiGqbZwpoUFsYcPtzbQaszGDNiWbTBTEznT6hUaBZ63ZBfZTezQ29KxAZXCuCLcTt3bZiTS73Yai7kATeE4WsE7",
  "key13": "3NrhKK5hBPT5QSL35fLBVRrt4pkej3mXUgZEeRYnCvzMd5hfHm4kT1Eu2vQVVED8GQHFxRJPVcWvmiz3FHBYN8wc",
  "key14": "4GcLmfe4YctvoE2HqaASYE1cEhgZamoLn4xmHeM2K9DMcmhxQTNV22cDmWHWue8sPhVFZYa6JTCEGGdB9PpdVkBf",
  "key15": "3wUdgipsmXMASJfe8byhLeQBEX6Ub5rykJbtw9dLZc6fDPF5Sy1ox66R1DYW7e5PDJEj178HQ52B5jiiL9LXsakB",
  "key16": "3qdNcJJmxobCYXrsEnFLknbCxPZ4NPaFiE7ywFextcGddf276au3KRdGnN5KmjFCgCaBDK6yx2J98RN6ZwRJtoNF",
  "key17": "59eCh96MykHmEQRPrfjFaMdvU9YvBpDJgTGze3QNewg27jsXGyhkKPCXrppkoPPaUQFJtFbZG8ZWr6vo1WrcmrVL",
  "key18": "kdpPnTKhp9VrvBQrhaVeVc52QTkXTXE4ktAERUb5F8fn7MkV6BxvXKDkXhQSqAFDVwujH45N1Xh1jb3yt5S48MT",
  "key19": "34rMHMNt6YenoJodAvMWcQP1Hq5rvQ5a2AmpYwL1dRAfra8e1362ZrMCuSMUZB4hAMjmmhpD9cncaMNCqSaWCrXo",
  "key20": "4jtaq6FNDMfsu1Mus6U2g4pb2nWNveSV4hQZXtpqtni9WsCbHzqgNzXwadhZyDCJgajLcvzhLSN1AecTDqVRpa5C",
  "key21": "3PJErCNF5YRzpXBxmyBtQBL1VQpwTJJbUiX53Zo3GTQQUQMjNkkPvn1YDxbtszy6FxikNcY7FksyimjoN8B41jz8",
  "key22": "5qjMqpSW45bKL1ZmmyLwiEWSPsXfZfusMHyvp4T5UndiPVcE9YtHrrPnDzDgrV4smUYLyEHo1KkTpDHsmtQXwsMn",
  "key23": "5J6sExjD91bFH5MnrCcSHE8HJ9j7vr21jjJuRKn1oDweAKwHDn4ZJrpeBjjhVxVmaXTVHacY1bFRc8yctVzgTwb3",
  "key24": "3w3r3JFRLbxMxC2WTv8fx4hqPVw95BGLnjFssSD6hutcdcAbY14fkaN1x8UhyB2ZU2u1BwbQ9QEcdxMLZxqzstRG",
  "key25": "2amQVK558vyHy47xjY6x9FoTTZYob5dTrvoYH27JV82dUrGGYbCsWCrekYDBrgtKUuf7h9xKBA8qkfauHYD7ftR7",
  "key26": "FNwTqJTg9EqeLAf2jVE3QmWiHDDFkSrCfwPL81dJZzUYmEun79XeCUhtr794rYtJ3oPat76AQUk6a2UKX9CQX36",
  "key27": "21GCK2bgtxeb3LEGnUdSpuc35Va4cU7MNk1Z8uRSBXizRYp8yUL35kp6dYE5Sjw3tA6NGHoKykSmnng1EyqTEmQx",
  "key28": "KH67zQjzqFkwKKTmxRSoVLeqJTGGLSHGPQEyEtt5bUCcae1T3ZgirFU2WmWXfRzZzTjKP6zVVUPmCcMqRN7czXB"
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
