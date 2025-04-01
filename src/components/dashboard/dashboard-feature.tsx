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
    "3EwMtUJTQe4gvQHAgvAq6wZW9Jp2Zo5GXDACSRwTo9uXKMiaEvRmCFtZi17x26ozWu3byp5wyMSqTcCUAAPiFmce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dvS59Nswt47aHBKThVWxTZMKzUXCq6aSGe11iTV61gWEsfTGWipGGAxAMPnuNofHtcgXn83bemanPqk225RWDz",
  "key1": "2Pjt7L5FSfTMxV14npnGjx7JtMp6oTtM8RwV5Ds8TgqLHNJnSHbqF4KtrLJ8j3QXcmemZPwhEkUcspYRBQSdgC5P",
  "key2": "3dWjHVWTc3cY6YcFJfsHFb7wKdqYzPFesMY4fnVrf5WG4AkgN7V4gtHS4ctofHfVJAyY2R8vSp4fSiriEXMgtdfY",
  "key3": "5WdosJoJmemRZPkfkru82aLx8VTTaw8y1DSjiTCJUPSHZaia4AGckgTsYStCfF2cS8VgDd7fjX8chFrXHqWxBrGP",
  "key4": "22JygxjLobwoqmD3pyB7H2G13iVyqCKF3mWbGVmiiyRfTvcqfQh5r28bmmGMuyYiNAVdcFTVzi6CJrj7H6LAWnY1",
  "key5": "5PHXvJMmSPVHyHC6484ncVVFSFUVGNnZ1pRFQwh5n4KLXZDkpFXTfUUAuLGNzg6z9yvxP17zuxuNGKxUDeBhAvh1",
  "key6": "2MEpXRFhuJChPZyngTcK3w9myNneiGDgNS2J55zjXsJMaCSu9gBc5bztD4Dfmau1Trbbkud6qscqTsoUcrj22PKT",
  "key7": "5RpLSSYNnua8RridnTrqYnBkNRVPwo4nW7mhiDcM7pRiNsSti3jHJnyUJmXseACfrPgunqgA7WxNjvtfshcU2bzy",
  "key8": "bZsrnv3kk4ddiNqVKAnyBYYFLGSEY9NJDeXQqb3Ebu2fGvwREgApV9U1kdVtMqmqPtho5nHyLVP1HVtdJvs7So3",
  "key9": "22cvH9ZRg5gKkk8vFJoiF87W7LmHfFdqF6eqe7LvpDheCsKmrVtZZXRidmys9UjRHRoHcc2FLNEWm6VoQHPC61qk",
  "key10": "63nSgkg4vLm7cByL6g5TvYwpwm6vuw2xy3uZE2MbVuA8vqTEHCyPEh1AqkMfcU9hiRTPkBXNyDmR6qc7QS2eNqhn",
  "key11": "4X5iVBhw1YqiJVudDn6VcLJxV957gJ1pqAePL9spQWxVfTbsbMjGbwQxPoerRc6ckKgoh6kwUidP4Ecm9p7agvuV",
  "key12": "5ehATP3tfoAQ4WfNKn4SJLaYRPndAEb4RZACk5difYmDZGY6YzWRRR8sLMGnQ5nCWgpNVf61x3dzwuAiUtjtZioB",
  "key13": "G4jAJbvscMVPUstRMeCHcx6s4ppAAr7EQzpuzUdcH3X7xaxcjwHHGtaKkKuAiWqxGu5ifa3zQXhzSobUMssrRjT",
  "key14": "3q7XfWT2m2rFDd68VrdXSd13zWww1DmTCMi1kG71QxVxSUvYh94pS7UT52qsw2BtrLdcZhyFbqwpQecDGSwam1J3",
  "key15": "4M8UseTrV6vVN6d2rNKSC8iQo5feKRiEFoSN1KKiMfFzqvJfDY4RXZJm3XkH7oGzx5KGtRBpTNguNkdZZb297NTz",
  "key16": "m3mX63pJczQ9ixXnGPFAh3847DzX9SpEzfWTnvk9MyeGS9J3WUojMYZCSPz7rwJgX2K2HAJ9rgtSqMxNccAP4Zt",
  "key17": "5otVfvGAktBvoDwxmFy2uk4JTttEw38uEBEuGAEGojEztZCMgNC5MLsccHFsMLcW5o8TqDxEkLdSED6HsxxVrh84",
  "key18": "22MLuAPuJcEPAZtRWBkRS9DHfujht6DHJijXLYVZk9ZGyueL9RMDG78o5iGowDnBBve3Apeabm562R6RVJm6Nka5",
  "key19": "4TA9bbq294C72FikTjsupfqCUcFWxYAEYRqcs7TaJwYHHKWTQwBw417p2vZxjSUbsaeVtLcAy4uB8xuU4riAtWSw",
  "key20": "2W6CC7Rb3ApRpuhZY8uLVLsF9vDA6dbUo7arw6mmq6vYEC4Mw2ZKLxgAZw9YAePXCMQG2UbQzA9f9hzVYqHaYuKa",
  "key21": "3EwKEaB7YwNTfzBpZk6Zm1yCTFB7enDvcPtqp8GATL761LmiijjRzvNfxDhtBWPF97FHjtfHFg6L5BrfpH1jcSRL",
  "key22": "v4pVev9y6qvScQYyHnLHyjavUihqVQP72GbT1kenAkcMVdSSatgivwpk4nJpmtWxommjzDcKKGcEBePzeXgfWNS",
  "key23": "67aYCeGNe7ZUSmy8gCR26cHsrH125tRWYzcbBbfNCVu1oN2XRLU8ZALAwBcE5kNcVAKWmZ11BZ5zLkTwmMzU2GSi",
  "key24": "5CNCjKk9SFb4NwFXoC4AvMhjME2nZnFw42CH4Ypa53Trt5UuZGqEPirvkNnfQhgpjW2tk9wA1yy24WSL1v7UCyFk",
  "key25": "7YKGU2mnGZ7tvC1U4NV3yucNiGnBJAWS2sVVSSSpJP6UzetjN7QYnMMH9yrygBDN6mN9koMLC8DqEfzJrnyAoh6"
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
