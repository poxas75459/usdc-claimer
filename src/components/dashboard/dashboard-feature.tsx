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
    "5kzkw3FCqyn1GMY6hKChfR1WkChDhUoa5oCY38598w4Y7syEdayTaQmjbqduyJdRcnNu7RK8xfaYpqZXbUJgjQ8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nzyg46ZPuN114wx6Sq7eXcHA2DuS1qNkkymnznxwAb8a3uRV2w1Puv8s5hyA6162JYfpCf2vpEDDpYPB25LUZTB",
  "key1": "3jVynEpC7pt8AmnYh1Fo2ri6inAKEeXCHPeSoze6DZTM1GTGXNSn2AZacFwJtD1vj2JH759hEx5TWmpcoV3vYWbR",
  "key2": "DciHwniccTZfUgS7qnwaasJBBhmWuT6FUC3q69k1PU9nxEoiWm2bTumeKvN7Nuo3eSG5weC1BxvaCrSemVE3wkQ",
  "key3": "3UEH4yZx77LXsXk1tERxREwy99jAPtMQa894ucWBFBE9KDEn3pCS7aatWvLds9Yv4hPe8uNkp95JnoP1zG2njzuv",
  "key4": "25QhDQ5kNUW7VsmDRocR4fP8XbP1Yj3bDGRmx5j4yvMuf1mchuCnDRNrBGWfohkBjRagMHGFCVgU3zA2BDTQhKdL",
  "key5": "5vVujFzurD3orbtZ78XeJ6pSfKxjrfyuGpo4W3WUPPDnNhi1sRndPeaZop27CMAmSghT1CUdph6LvAeLZddRkhrY",
  "key6": "32K1Kihg1EBvhgzGHDTCZPbEmCbn2yKPmraHWy1Q9HuH8rK5CsDaem721RRfYWJbCUpeSye67kusnN784nTyDVdU",
  "key7": "44GmHMMTRzCa7pNNApzTfupTpEPrvcF9PygBgwsmcmf3jVGqVo6nL9bSwtVj4oivJpHWV9uh8DMepAHqnmsXVet7",
  "key8": "5TYfufH6DrCwB5EBRvMw4FoF1raQki4xsGuR6rDLReJPxFbAYateAaH6L8Y5Y4aF4uE5zogP8PyWQNM8mmSicXx1",
  "key9": "3ZsL81LvWnhbx17jUQZUbQGdvf1icvUBEvbRNLAtJUbDg3nznJXuyVy8J1uyUczDgmPsVwmSNa7WYVmnVdpf4iLU",
  "key10": "3hN2kDgCfbLoYrqa42RyZ2LXf98qVkicm9xsdGMCAwTCP5XmTEQ6drFhWtMPJB6FKf1qRnw5UBnna4noG7MdVsLQ",
  "key11": "33pA26dmBAUtLvZFKTR6UdbvjAUGeF5oF5iBR8nLVYm62yozjwwEEUVqSpq3Yk1haYf2k6NH8ymHp8BoucwkHdca",
  "key12": "2sHok9dC2Pcs6hazugY4YfPZyCtpmTPA2sNmFArXe7fhD6nJfprzz1BCa13GkUTdtx2yvathwPvGFUbjSpkb5XGd",
  "key13": "3MV2ZdaRj9bqHMu1Hf1HwYVHp5n9bqvwHyTPiX8riEQwB4vC3eEP7P4Z13bu6XGoYHCC1r9Q56pm64rHaP4u9P3L",
  "key14": "61fbQTegS8uXb7wMQ9URYNLfty9Ze3owTLCfVxzjBK7koaf3eZdq5tr2eBujnfHk97925Bkqsa5GeP6JLrmun3JB",
  "key15": "44y7pRqCYMbU2cjBUBYm8CamU942ts4ccXtLYjxbBR6hP7xWgjncL6J3KuFsws9CWasj6drxsFKvcY8ge7d26LaC",
  "key16": "fMDe3bPQBsyb9PARfKZb7zGEX6ceRt6AJiAiD9z5KWA4WKn8GazfvrTcY4p2WUhdcHztDZbsEyPez9q1b1bZm2Q",
  "key17": "2VVBhi99FeiRuijWvYDwY4KJFqNJYPFMah39w6K82BACmpZWH1exMmvDAsjjgmPhzpWD1GsMDD7JrXthcYS26v96",
  "key18": "4J3cRQZnA7Zi8yKtPnoH3FdU3mr5N6Fu55EiCamVyZyyWLd4wS484xvx5E2sSebwdejSJ278TtSxrdhC68v4iiAT",
  "key19": "4XhGhcBbzjYkCWPGouQnzNSgVsDtrjjcmwTDTSMRcqgG2KTARQrGNKYwq6n2wZ7GnsR5q7fivKNi31jeAGeoeoM8",
  "key20": "3FEK8LCmnV37pCvUT86AJgrYoit8BzUthNWjwrCivcX37nC5zvnzz6XeGhr5CsanVgjqNAQW9EiD7C128vnFHUFi",
  "key21": "2wjh19ak9igJWB8JsX9KG4JGxygWcV5mou3gVSNneZ2zyJ1EssD1zanYaeYEBFyYosdX8jUHV5BiFTvkJhZNsHfc",
  "key22": "L4BgjJ3j87vmUxQfi6X18BUvuU2jNGQV6WXgRAbfZKYy5pyekobscG7Ln3ip4sGTkLk7uR9xgS5qF4TBm5RjGEu",
  "key23": "3momNyLerp6QDpL1svw7M7aHBBY2LYTyGhkDL62wGVo98ZhphmmYkDdKfErWbUYJ6wyiSYWzdMcSJTL3Ku3w1fQh",
  "key24": "3xGx4bhrrk2ZZQkW4mN1GzxZ7tzv1kMaMxVjKsqjpNHzxNdXmzPeuDosBZ1cqpBcgkwPQU4uNgeVgjmc7saRbpqz",
  "key25": "375W8exGzvAmajzmSrbd8K9tAkxumhdvRX48HNBLKnAJUH2rJ7cK35ht4VKKgxfP5n6VDpJDhr8uBBtiVq6DtPP8"
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
