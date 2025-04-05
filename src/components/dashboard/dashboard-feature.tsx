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
    "4uj63ivJBca3yhbTukEUuqNsDt2gzbHHPATYKAgMoT4uFfA44D9nZwBPrpVggfUCehe5rJ7Nn5UFsCDsAG7rPyj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPwrB3CQZggnLddQu4e8pRhKM8uvEovZwzk1GHZkWeFiFLwBcAvSqwbwGyHjwNWUcpno9c1AJHpyGTeRm3PpwfK",
  "key1": "4YMt6naSoyZSLcvo8xaR1rPo9QQB8FBDFnJo5Y2odUtRiGmPVDBVnptkm1p5XejffiFG932XtdezeNBoKDUjHspW",
  "key2": "4xbPQSkrwAnVqrWSKkDo3FbC7fugFcg7LyrwFKPijkA465ngekvssETCavxAYMZJURqMpK98LTzSCdPj2HhTaUcb",
  "key3": "4FxeFZFybWjiYkwighuy1exX8RsKjQUQ4rpccCgMrYaZAUHMDvQQtr9vy74dsGRxwSD2BmkhWEkix84WmZ9cS3ab",
  "key4": "5xofxJgToeASKwUZP9Nfg8Dr8T6mEnvXHZV8c7UL64Lbvy24RucRP7MAqz33vxB4gbRAKVJ1pQu4oKJpXouDeJuH",
  "key5": "2Af4ashgtD5Mk9oy58a5jqUS8EAYKUAQ7xMhTr3GjL4FozqsLBWo3HK3a6VZvdTYTEaJPpzSFsER3wLNnBKk8Unz",
  "key6": "5qBCLJqzUjGUXsSHHPUZNoQaxcxKP9iVU5eyvphRrm6jEF5j6JRFWra1sZysGyzJ2gSPgo5MqanQFpvb1vX5syQD",
  "key7": "5JhEJgT6CMyPgq9rvQetfByg1qaKpqAnhDxEGqjiUgbE7RBQqQQHTqJrW3AWx5bMB5JZ2pf7TK8HCQkAyKFKM5SA",
  "key8": "5HwuUwvxTnBMKauVWE4NzBEVng5HamKXfSGogGZKrWQEZhhAmV6rT1fDVfXVARtTEqHGDHNt3MRikhRVAWoH9QeW",
  "key9": "VC6xafPPpydEnYHbQaVSQzrYirQ9MMLtwjB1v6JJmggmb9ENGurQhZ9syNprpNU5vUUfiuF6BMDYfJapJDntSQT",
  "key10": "5KEZm7Loj8BHi2Ubjgiprsg8UUQ9unv1e5gZ6oXzmDo8XpswVs3p4wSm5LLp5brThck2vYXbivw1ErW6LGUxgbcR",
  "key11": "4cjsWowRLG7KofbwX9Qb5kzWUCynGUanATAUnHgPtzfXaMZGJE9XtNxB4qR4jbq3fFhVuR7go4LcjphRvNFdx6SM",
  "key12": "5SwDfb13cLGyyGf9eYHtjb2HTz72f851aZrSeaTfw2AZnas144csZbxvhxMkwWZg7oyqofkVPac6RKor6ff5TEVD",
  "key13": "hcZUARBvwtLeaiK1S292mZAs85XuzgyizrSCkHd7qto5jnmgjh6t6QzXULKQKTFTKDmJ3VaooicsFZKVDCsw6Cm",
  "key14": "37XGKjhvPrPEQRBJEYaFJXuiRL3WRPQVWKyHjmKxmexC3y8ZmUG5Qos3kGogpHH3SWDvbWLTvtojaTZACFXQcb25",
  "key15": "3iUUEHUdc1kcca8n3q8sfgQg1xeRN4ZCMXWNqYHyPn4fTr7ZG8gbr1M23VrYzRXSW4y9xGhRC8ihgUswM5vvhX1w",
  "key16": "2CHqvhCCzJ5rDA4zAUxa7LybQsrTjTpCcj54DoWobs6xM6kcAemQnFTouqLNukdSd3sGMxeGK5t4WrKrqb2NrHsE",
  "key17": "4EQuV9zJncNRqfSAiGnn7dhhCcWAdYXHLTiNGsqMkGTcqSzL4LY2TPU6WjTfDAkcEvbRZgudq7fYLkzLrASc4VsR",
  "key18": "4YxBfL9SpuTfFb64zC9AXDnDrNWEHp9hKrbRPax843gV44pSMg7fRJkb92NvLSQE5kc8jLDBfMiiT9XvjAgGZdpA",
  "key19": "FZUkVZPeWEdGcEuvJtTNfiSrHFfGk5Cxc1g98J2dMAxozEQ1WnUwTS3pqqQsm3xe5aP6qFByyBovmCrJU7TnfMb",
  "key20": "p4MYcQVb5YLW8AYCED3cEqoY1oWLmLLY9gk7gTR1XCqMuRZxjCFWvFYrdip8cWi7dbvHsEuH74Ad47cvu1CvhpU",
  "key21": "3yJanN3KApvBaHQeQz7m9TpXENUfNiMWyHMadRWaXFu5HzfVGLDw5trMzvuzSqwdb6yjwQ14JgPBJZ6fEbZRCevx",
  "key22": "5RTxHaPWvD4a7PfSyspsuZeUxqcRNb7pwFmjFYLsTGvZndMnfuGXKkanpKKeFJ5Ehe5dBdHYq3uKtVih4rnPkxnh",
  "key23": "c8S36oKeg6q3WcAPfHpY6wyEK6U7YPs7XbSt43sRpebHctBGYY3RhSdV4ix4zfahFqYMdPmUkHVUVqHCM3KZcs1",
  "key24": "2ynvyv6HA4s5JKEoobi6Pcgs7ZSkSR5rcbXqirka8S2hF2eamrgV89BonsSh5fAHxRwCTSs8WhMvGKysRiV3uVRd",
  "key25": "5G3D17yxJNdPoguPd8QNP7GvJE4gNve7LtrHcTrjA2WezvN2JwUMsAJvnx9va4rgULg5pqWpYfD454NwriE5SD8K",
  "key26": "4fJaN3w22V2y79Ekns2cX55kZ3dqxRgLcY7Yo9sCW6GS4eWgmxitye5d2uMk4TaezctTT2e492hHmVg1HxRsDuR7",
  "key27": "33yw8NyKpD4tjHsJYgs2BQNzsBxXzCan6HZqe8F6D8qWJNCcu7vrw29onomtLqa2cncMmsTB73NbKEnadpJ1P9kH",
  "key28": "5C4AZRB8RRSuhjPea26hGxN55KX1xbQ6pghpaw3Xcj6UUUm45pDeuTWXdVN5EavNSRcYZWNX34GzAWKj6m2zcm8X"
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
