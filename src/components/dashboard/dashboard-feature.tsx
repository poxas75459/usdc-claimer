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
    "37zUBV5p8UNpDx8rnVjPPBGMw2vgtz37azUfg7CJZwyfVq495tBfiFUdLXdhp1zodgtdSWTzmM3GYVDgZtUnZHt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzKBj31tY2yff3zpyYsXYdVSP8UckHyi2bJvGYSoi6vh1FAeVbwGAN7odMZLKaMknNsBQLsqXLQcb8FRz7Hh3EW",
  "key1": "5ZKJrZk8qg9L1e32KMejXWYnsZ3prQVnKHfgLdZQQvXmZ2LWceMEYSnhqPghyeSbMd8hHpKELGSCx1r47FRTseX1",
  "key2": "25fz9CwVL97XiPwhCkao1sPdy75GKtyAZGNoprUfTghg68MeqzQdc3Ndv1LQUKoXGXpGdx37HuzN9ABHMhxTHajV",
  "key3": "3gC5x3GteJq9J3MLXcNti8oRB2DcZkdrSJBqZFvSDkkNyg2xE2xJ9dbk8myJe3ZQ2a9KgUb1nb2KeC4qnth8rbPL",
  "key4": "4u61iCBQK4cJxPGMjMpF8cEftotbfWrDRnFVtAkAs1MYbkjdyFz2cuB8CPDSxBj69fQAM7prrLixs8iSRGkq2949",
  "key5": "4fAN3d33oNA5nznPB3BnWcVfeAddA6EWG2DfG9C57E79pAUxUnRoqQGqQ4g8u4bojJtBtGDpxKi93PA2zqBvar7B",
  "key6": "U1pMUaeTcFFfxo9wG3TkXgb6BrcytqxwepwvQM6iVQLKYq64CLM3Z9biJpx6y2SEDj7gninPSbZviE4vd8qSf2g",
  "key7": "YWRG3vgN98qQfLktkJDoeh7J5iFRicztM7i6WProWpTAcAowzRXRLTVhWfYWSkFP8DNagv4tLMu1H4VnBMEVck9",
  "key8": "4K42KTSaJZQvC9mTLWXcBXAtgqHEs75BTTdTKfvRviNjBUKUCyGRD6dVRFTLWErV2UNw4duLv8PAsgVV6AW5gNUW",
  "key9": "2y2p4ewztL9PWqrixdidFcmgSy7JM661BiPEjjUaf1q5qifFe7UuMD9Hmjmkh5KFhUvpxcJKFoLQurmeANNbjV3n",
  "key10": "q9gYTReCMb2d2au6KThAuwhJYyhYiiXcCkU7MzVXyZy1WVEEc5349vMvVx1grAHFavwgBxy87ft2ZAG3aEC9WqQ",
  "key11": "5TXkesDynhqB1SB9sUagoCqDSWCW3hzjGnbz2Ece2PeX8asUFaLLxYaP5m8fHrAhTR9M43TEoYTaNHcnZYkkw34N",
  "key12": "3wdoADmtMtMNy5CU34so51dR5QvoESRcDPNgQhRoiXwLQnGypMGKdqX15cnTGbWLsQ1C9zybLEAkNnUjhyZZ3Q15",
  "key13": "459ZUYbfh2HBSSyyMAcbrX7FbL8fF9Q843K99vxETu7CK8w65BifRw4RHt7uPzkUVskrTBfUWTLsAFSVEtwk85gD",
  "key14": "5cDB9N6SRL2yDWS6XBUajyfDBv4Ahrp6ScREdXdqfuiZCj5txsw1K9EHznaQo21denk8d3GexstfwzvyTTtPiBdb",
  "key15": "Z39pCKc7Gf5HD8PkZxVPqeWXv5cSVHjc7AdgPEX6DcfKrCLVcpKuEmteYLJgGBShfnX1Q4rDuuw6PNFjpt3H6X2",
  "key16": "2CA5Jd3jxjwpdqd5TarJS1skxgY2L5BWjqW6XCDBtXZeUuTc3U41Aks7bbNP81KHd8rkkET7zzz47hjqATEgFwK",
  "key17": "35QPNZYatRnKm63vfeHJgXgaCQsJfJgqpvN3dZZc9drF93PAt2kPgCGPmGLdA1ex1h9Z9wHzmckyUKaDopJM1ykv",
  "key18": "2e4tjrDA4gtmLb17sgnbRQoKfQMHvfSrgeVswhP7TJ9eM9pDxSVcrdRu8u5cigcsEoewoNi5HXdcBNwCGeQ8Go87",
  "key19": "3xwkxjjBystoXKj3vJnK5tLKiQRNRMZhHd7T2FxHezWphfhBL1y4dmcEmkMV3MAm5RE184cNj5BXFxynhvCJ2uau",
  "key20": "3wgn4t7NTuM2VezcT1R3hG4fPseLGQymPjEky4gn3ygJ4Z1vC7h3P5JUhLdbsJBYSEvvgEgzcvyj6JcUeuWt8wbX",
  "key21": "SjwJEohZZs73h51jU4i49gKFQRW5e9FbF6NBqniFaDiB25tvjkbfNxiLEpxdzAkTD7rBhbwijZq8hYoWbEfQenz",
  "key22": "4MMUfg4GHyp1XhLmyn2DVCcc8BZT4bqzMsn8pqekDjsyWD59gDKvrQxrS6QBWow7a5o1akxJupqpDn3NUQdoMbwk",
  "key23": "62k9Ucwxdtbt3CvwGs7yauWvwcBN7Hsrryd3hWjd85kTTnjtxfam48mXD8t4hvAPTeSvTyc8cSCFVDhguatCzZBn",
  "key24": "5WiE6HtmLes9Nn9WHDSRcCkmfrsAgxy7vUDf4Yf9URExaQh2nugm1pnbQeU9GNs48TYWEQzQSjzqjqc82DGyM9fK",
  "key25": "4tmgneQgFfFtFX72DUd5kFfxjLY8H1bcyJLVjPeyM96qoSC5w2Du1oUBqisTthuK4oYzHXGD7MrdeFUG1ek5w55L",
  "key26": "53vogyjvrtBbutCPnRKPP3cdhBohVyQA9xK1fY6GRjA9BQMhv6SkUsefPsTP8MF69iQkdcReWDp13BWbD4dXwxnt",
  "key27": "4MQFc3fammhLxq2Zv1Bpr5fH2QSGcXD5X6smqAGzeXsbM1xjAeUWfuYCG4XPfbGnZcf4Hi48Sngx8Hvq6zt2wjZF",
  "key28": "2ZHPk83wx3HW33MvTBq79kS2sWoFM97KMgtzM83efWE6xuN75jjFTQAkBDXs1nxsYU2De8QDxd8fLUxoQZjUkZna",
  "key29": "z2NGs6poEGSLYXwwkskAJTKMUCx6LFie39GD91LLrvYv3XXUm6RH6QpdcGni99oNEEUmo82UHt7WLePCJD8txm1",
  "key30": "35zfx3JhCbVV44aUa4Nyqs9t5b7ozijqxA71CmUDrwFLd9yqqjPFDgDEwHR1fMEGksFWif5TMzKqocY8gGhwnkjj",
  "key31": "2ecA6gDFUEKGpAieu4BacNG57tvWyXFVGnvQhcHWiGbEo2o5Sy6mFHyWzsCTiJ9gQgymGJyNhuvPgD6qMxG3rjYf",
  "key32": "4RadNMHqCpKVXM6EoDSBH86A8j4Bg1LxXRBwdk36C33r1CM2bNF7gms9ZtGmbb1XvMLzGBPKMZTMYHcPYqfJZuco",
  "key33": "678VqZg8HjPhcCopQTQzRQ83B3mpMMppDV1u1WBrMDkHGcfD3FuMNbm8J5KouTGRH6Mz9rdmBcv8NPcLtiKsRLkF",
  "key34": "5EkCKhggctjCTnjPEJZSVuJdHrvJgvsuz1NK8crNVnrxm99Vx2g8oyywJ8HaDc1AjxfK4YEFrXkMWERG6oi3yHas",
  "key35": "44KYiNTFMhK6guNwUAC518JThiqbozSXpTEsRwMXxXGiNJ7tL7vjFy7DukqAWZwsmy2LMgt2u6QgCdGCVrdXAWVC",
  "key36": "53yMzuC6xDCUZQy1V7ALnLmjX5TsrdpJeRcueaLncw4j76YNdBLahyytqEcBujhbtoBFcRvfTLYyU2vWS639roGQ",
  "key37": "67Xf2KJaFUKKDa2MJQdkDwfhPucefEnUH4VGW3HBrtdQfeE44AjvbdYjjTRiLRRru2Wz31Wi1NZxtZTzQsfyfk6U",
  "key38": "2zXZXEGex5F7PbjLE7qKvEdAKJb7WmJYbQ1NEWxmuBXGo8X4AMuqRo8Ndo1E9YqT1hAqZGsgVnryhwH5VgsNf6Qu",
  "key39": "2YQjcUo6KeoeMRzUBczJi7qB2Ejtm81vYF3vq5kbZKKLs31t6oAQLK1wS2iEhrCuxKvYhnyyTaXBpbDYym5fCWF4",
  "key40": "TQ2MGQto1pMeVEtVG64yz9989TXYB84b58RZqVpV8EHsWXBvrReSrEkpYiwPnJxnYzcQR7kAiAH7etr9ksCzKf8"
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
