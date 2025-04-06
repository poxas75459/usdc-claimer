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
    "5K6BCiEW3E1RpZ3RuzCN5hAujZx2UNJAtWEYgEitpUg5m9Ph92rdMCjeoeqEQ7EhvX4tzneYRbUFzdHv6n91x9ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tSc5Q9mNNRZVaQGxXGpSQg6AxwZ1vc8d3PvsrYyR79zfpiCUctgpqqYyepX8SvwVZD78TBEmDdGfNN3rZkCXg5m",
  "key1": "4jKKQrwDSs5S5woPeejB5qVPzuC4T5qD6Y4Che6d5V5G2xhPrUMVn5pwXKWG9YEkddMU9pcViifhw7qXZ7uQBjf6",
  "key2": "3YmXqGgwc24LcCBw9Xoc7xhL2Z2UThri3vMJjnFUjmcA88Y63Xwc3HKAuEkNNYt6UJHSix1qWkkf3pCpj9wFvssd",
  "key3": "CJTxStoahZn8rD6EfcsmxGUHeBXcn14RZTWvSXSkkBU7W2s7MskEj5KrnhRAmJuVdTh3eENHffM4W7LfkVrSNFS",
  "key4": "2Z9tb79gAvQdmEQm5ADGgXmzW7WVvJrkXqXCvdt6VxBT6JB7MJrqAuQqQiqtKV2rkoaH7ftNVVUCc9eqAaWkVrRJ",
  "key5": "5EJBoyMUM6Ru5ECMH8ZRuLDWeVmiZkcWWVtKMmkLbAEPHwReu7Le7jPd17x55CUxMoJtQNLE6vSKq7H9VFKrcay7",
  "key6": "51KW8H7jPoBXBDa2c627YNHV7y6hCiig2z7XGUfEpegX6wCefCK9q4soWc2TiPw26iEvjDz87i9oQuAXJBs4uh9f",
  "key7": "5Ph28GaBjmFsKDFQEAFqSrCRgP9joBzEdBNMDHgUv8ieouEHJ7cWKG6ckuU94ZQGzZ5XHTUwj7vZ4gz6ou7SYX1z",
  "key8": "fzH5xiha8ArXYaSNX8zx5GRwduVSo8NDVBaSgo8hN3woALDRQ3GkVhm3fUc4gHwW8Ne4qLBXt7gDSzxNg4wia72",
  "key9": "2M7iEBZmF6uBgQLRxWkRWuUetaF4UCsjxhrRub4Ngk9fLK437LmrXgYZNC7gKRCSAnkLUTUNjGkt76Pk52JAmfDC",
  "key10": "5CCwCUTrY4KnLipFKBmebhJb1REddhiH5iN5bEs6keUziFWGH7gZDQVfNsX3xagrgJjpxD4e5N7TiNjvbuF5APPU",
  "key11": "kUnRziY7LM3835CVnbXDioma72vLfw7NGSpAQYhUqB97irUGNHepC7SdjS8BGodPKMePTjorxNqX3mCCrsijYtn",
  "key12": "3SS2SaP7vc1EU9EH34cSDsLu1hgHzzeCXyct92yMeUAjoeysr8HvZjTRtcMBEo1KUWsZ2eKgznFJifAjcWH3o5cF",
  "key13": "3mLJVPrbUv5jge56yfpgpMv3niSG3AYE3DGRG38CXcDsk6pPG2D9ShAPtZCCLXSkCMQ5iWftkV7akSZ5vRmANPbC",
  "key14": "5sZsi1jpvjBuqJi6aPce5JwCPf2Uga9VhuEZ6JUpW611sKR5ux2vKCpKNvBtQfD5vaSUqhXDwUCDjkgrCMEjcnKu",
  "key15": "2X1bKhx1xyCo8i3d81r89Cs5fsJ3ZGBEiyZkTVhd6hGggdQr6wFZVBLiVbHcQWFt2y1aRgoEYFvTGZN62duSfVdL",
  "key16": "129Kf6iFhTcoiEuCSw7sCpTFxeVistLEm6nQgfFeZ7bWCrj2RrSWQD9NtshyDJbjUE1n1bAWyS8A1spduY2zide6",
  "key17": "36hBnmvoRGx9QbirfKWr8DvLgwSANtqo3gMvUNCRr4PLZXQU3aTbd8TCXrGcD691uo8zHx8ng9jpzJCGnLmhPBsC",
  "key18": "oDmsWck2u2tymdDw4ACRDcMiAMqmex99bvWGeV2J6J3tto7WmusMtV8NZKCKXZNPyR1MNe2QSuJSQkskbzEtmR4",
  "key19": "3N2H6EuNZY2N2SycG513nqirJPMLCVzDeauNWifHn1dtdkXHJsTERGqgM8KaG9BiAPxKQDWw8JgAVQ982CDBEWmB",
  "key20": "5Jdb5ArkHy1i3drTihJDEbstw5jU7J257N4W6YgTrtXZakUcYzx3dT25Za5T4H9BYnLBf1kHnoCNL98CHwig5Qwp",
  "key21": "5EUdcSrLJLtYTqghpDE5e92NtzVSNMdbyNxXfeh1ZBCRJF8vUULQmLKpKTWnXEeXfh1LBD4kLCNdb3QvZjxEy4u3",
  "key22": "3tLJW3GkdBJLYpLvEDDsiJvHWcTV8MMeUjD5EhU1sb2qdRbLuXAhGJta1qriXz1zegJxyuEbPJurwNU3XR9uYC7A",
  "key23": "2LcPXALqMzPdcZHz91qegmHzGrnwoc3bzTRR8r2rCmPts7cuFDehrV3zub7EE4nmJbrYmCsa5ZddM3uJy2ReXCbD",
  "key24": "46YnZh33E6Yu4rHfPWxApNqMaEiRDJFjq5DPVDcArcnVrQ8xQ8wzzyrkfwULp9SokHfPpMDxWBfxHLB7f9YGhJAt",
  "key25": "kRpEq1cvZxct5M1pxjub8WzPq8RKSFefVkfMxe54WFCE6mnsZkB1SNiiyAuqp944BFfdA7rR2zLbsGY2N5VPzhg",
  "key26": "3ozRJiR4nijuFwUUzRhrRZ8tq9v4dpQBZyMVEqWfwBfNrR9BTY9GJ62TvcS9pgbnRCwvUEqVARkhi7KvoVhGD632",
  "key27": "3UAk68XdUDBLKTfkJtPwmA7SsErZJh53QbbmSM8noBvByFvvM72FB9syQwpttMbbUQP73E8jSq1wZ2SAVEF51prY",
  "key28": "2weNvQChxzKrZ3DAgL7u8NrABzDq26fnkJu9WwZwSmjdaqynyRBJtZvbY4Tv7xjmMDEa8fp4CFhRkR1T6EwhHqZL",
  "key29": "2sj41GtQA1u8Q4RR9Jg2NHC2GEfL2Xz3vPzrWbX81SkwdZUqhgZmYH62RUNvnemxK9qLtkPGopNLjwu1ZR5y9ESs",
  "key30": "2qr5whLv93qiQt4qt8LPYEJRCVjWQ6vhEYmDhtpePNi8JGq9o4mGk8m9pAGmX5HBh7AhtRPw7DoMAUBuDoWffzgN",
  "key31": "2nE7XLSN6xe5EnYcKC78C2PHtDUroUobMDAgs2BmJj4VzFHVLpSvLLx56hZ3hj6Ad6Q2YnzQmvHBuXkhJJV8XXTX",
  "key32": "M7bQz4M7fE59mThziphgsCeQmqMKeGaQa3xKLWK915ZCFazrMD22FLPq3f2mi7vHZw5JiCKYTe1pdt8sz2DueSv",
  "key33": "CPZCsfqXpR4NdNZUDo76HUSJWgjxB6uvomhr4sJN4pMJmxRFRD1g9Mh28546x3u1sDqiQMGyRBJMaWYE1USP8q9",
  "key34": "3ayMtngGbWuvAgPCvf1RBqBbT4NzcvGJVYYHFQ9mfBxy1JgfyPgqA9dMoiwvN7KY4WSnBvrtiif92S6L8Puc7w3K"
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
