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
    "ANhz6H1cRi19xFJoMbj2PsuKSYXiHMzsoQ1qUHbx26if3jL2HRH1edpgceT55HqCYLpTeudFvuFdVTXJXu1VnS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vHGE99mbBtcvjXJs6nwVA711QAtJvDYHyhP691MdQUnagvH2QCEYbPymW9zPR19iN1ViSnSkXeCQ57di1R4NWu8",
  "key1": "5V6KxLRsu8uyRGymumCfMfAXoande4wrJX7ch3LdBt3ns4HTLEweeLasAmdPgrPNHJhgXBMVy2SGRyQtiZVYrSrh",
  "key2": "977jEmWxQfeoSEZqyPtz3nKMRNeBTwpwVsfyka2GwqfDpyHNLgtxx4RvR73zixLkqMkHXUqxLyF5KtyP2qYYf4m",
  "key3": "3kSFRYWKvMZ4DGMMqpLBcsA1NenmGCzwNsDU9R1AfNzySR3HP8xZKxqJ5xTBSsdrdHjqhwumvbN7dPZkc2XrPWdo",
  "key4": "3M6PUrmFBe43hmYS2XdF2xu3rX3bMRJg5YcRq3DCg5LEG994yNzLb8XhGJMnJjTvbPr8DHBEnG8bLzgWx93jHRvZ",
  "key5": "44HV1ayXx4gTjJ5yo6X3SAKskDwoUbtEHznCHiy2KLjxoTa8NruyXaWJaTqnDDBxqz3dbZGSwSVyYyqwQUPSrkAU",
  "key6": "56tbZguS5gbrLdw6GuAsLpAqzngLekQHG53hFg9PHMp4pwyrCLydSiJ4Rg5AFovzT1wivBNPe75w7JEJoUPwWjCU",
  "key7": "36rXV9WPMmu18i9nKmhqMLhg6EBKaWS1qnCPyGhMuY6z9Z7X5yrueYZH3GB63hmsEfA2vjABsXEcCCugD8nJr884",
  "key8": "4grW6WWFQe6m6UDWKEJcLU4BNLRPfU8k9kusDdHcmhiX5E6zzPfnEwmJZSPDRQFhKFp6e6YbYxTAB4QumWxMR5kq",
  "key9": "5Qmmf2SiceFaPwTzwG6JKP2oUoXEezWdmi9g8tiMW7Be6e1fosSuN9TznMPeEyDsizRKg1CypZHx3ietpc1zCG9Q",
  "key10": "6348vGA2MsMAAJEwrvqxJWqQTcK83qaMzcYm2QuEXht1mPx54MvQUi9RXZ4WnJucKiHZPxuHdEEnLMZBxZLdq8AD",
  "key11": "iwKiUi9M2iLweoE3eeaciyrWAHefgtyQxXhXtpp9C4x7zDkda5DjCxbzkY22P2HUcAYWj3VxsGHfm22RxXzCWND",
  "key12": "2CMtEzCsjy8Jnhk9hwK14JXXKU6czCvggb6ov1x3LuPyEPBusvaaUisYgtfG81kZthbi1zstbWEssXkDFzXnDXRP",
  "key13": "629sCc3tVX41tKCDdQX8eWUT8geVyuhK4gnQXNYbdrHqf3N4K9UT7R4VxN7qezR9f9oVRXEuGSuT6iqTv1gRoX61",
  "key14": "2z2xLPh7cni6UMqhoBucW9E1pT2jNFephgUf3mwpTgJ5RsgRx4WrLbwgBYPpBvWLA4wQM6EhRBUqWjKDFnV15vQF",
  "key15": "4CkW2BsXd1ogNuu8ovQHDZGmBJxjBPVPhtuHu3khonXLPZqHjcyu9NoNMpNWzmFQdu3aZhbE8yr6BqjGm86U8bVe",
  "key16": "66gCU6Af8SfDP3uiMCqtB8w4a9VHTGCpHUKf8tSv4YnDxxmgkwCWN8vtVDxBEv6QzCFRyuStcnGwq5A8f8UyTY1e",
  "key17": "6248vCmbzsg22wCwg4m7J45gPTTKNc7UnLaAvJwmL416XqfeX8yE9EGjECMdqDSxKew4EnFLj2VSJEaL1dWGXH52",
  "key18": "3SKkA2SWVGnbjzQbfxQfUxC9TZ5ZFjJMTAeqS1m7wRtUPQbVF5hNC8BqYtrq9nd6NRVym9gAt7hFh8DcBuKBfwG7",
  "key19": "45t7ze2Tge4wXycEiP4dL964tSsnzfNwdqn52S1pkZPLSui48atiQ1qg1GZJESttd9hCzqQP4E7GjzpMo2vLvN73",
  "key20": "oMMwh2rVaqUjFEn7bs9HUtxh6LAs53FdiMpZLhHmwe7B7wVP4h9eWiAxf1AJKqM7Zbz7uPswtxWfgF3KkQyknnX",
  "key21": "4JfqWMKDa6JrJEHrC43JbFfXC7m6hF1LAM2vMEbqpjHseTkJhzSHP2Lygd9h7ApjUzHHmbuYL36fVSYuZat21gvZ",
  "key22": "26JDiMv1s3xSXp34oEMHigyB6ufWbGD2gYRLWWPCPSZeYr5za7rnk9UmhMBS5wBWdrW1QvJvYMDwGw3FTvCv199E",
  "key23": "KhZcBgFdoVSzqhydE13zPgpdhbQNZLYdkVPEqg65yhMTchMT7Fz9DdoXdDoYHWZPFUEZZUAuRwSHBBxP48XhrSZ",
  "key24": "2nAKKUqW2iZuUygAXCtxH3Jqtu3q7wczD2KpY1KwVUC9rYxpzpjEeyhv2R2iKS8CdWz2yJZN9FJP8Qz8YrSVbQG2",
  "key25": "2rn9cXFbethLopHkqSKZr92qXECut9rzuWp6L3gPf11MtjWXYtq8U4bSt72rdnbdnKLFq28uN8R3D54rZgeFBQfd"
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
