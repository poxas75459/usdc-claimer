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
    "4PqC25ePbfushUH5XxcbuCpT4VCpSeY3z8ANBCNeVukM6MrDWLYLr1CoipKczb9r1Su8EsxECWN7ZK9j3Et1PxjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Upzp5qCKWnCAHr5k6F6rcbXNbMoH4ScLQ1AptJoeyzwB6jvY26GkaTeYyb4LfB9saFD89FeVDiegegrBvbicG3u",
  "key1": "2qqBcUscVjQgfzUPqPa6Gy3j7BaaweCRL8DiNgnFc4N4qYKkocC7xjYBQLEQETZLyXKLJNctgcUszrhshgBTwXSp",
  "key2": "37Rms6UAznNFapepkTXStUJuNRKMdPcyLHR1Vk4Qsr7X9z6GS96YXKxXrPhLBUic9zkkKZNdKAq1WtqYeGG7fyqM",
  "key3": "65xQxE8wk5szdTAcJDiwQpcmYF8coiSE3PZp9afVZumj9ep6tg6HvVfxUzHbrqqXswir5JAFchy532RpkH6pYPZJ",
  "key4": "4yDb76G4f5RcjxTMTwjA1yt8U8zDYUkpvy9VPjwBE8mXUCDPjRPESAc4YQJcSHtvuQHDyizzpoyL9NLowhCaTFbu",
  "key5": "2HJCWLcqXWEwunGVfyFupSdVp2Zbo6CECWH7HBrowD7zNFmkj4t8h4qYSCwmH6J1ecrhsK3ktVLoNH7Ep3qopE6y",
  "key6": "3bNJFLZ2rWmDNaDxqzcNzhxcC2YkUvHQZvDsCHff42awb15fgVfKrABkvUKxrxDVeYkF9e7f8qWqDPMPNsty2agG",
  "key7": "3k9U5Pvmx7d5RCcaKKXF9QrZgCX9togA1nLimUtpBXiByayfJAahNiW7YBhpwwGj2HCBZEf5XJcCy3SB3gVuZcaL",
  "key8": "5vVvYsNb8FieHfxPtJ7V3UoqBzsZj3o1Udfc8WbjEAWo3effk3fatfXfPF3ANfXaJThEiDcJEdFgAtHHx8YNFU3F",
  "key9": "2pMrwHKfejpjbiv8BJ71pMJAv7pvwmNmwLhQr5vW4Ry67TVjWdjD76cya9JKmH1KuHz6k1RbEPEVg3vpABTUYD6V",
  "key10": "2qe9zyfdkT6fEqB2d6eBnb67B1AFkh5itqc1Z1UG8H7nkJVqWDx56DNaDasD1z1eBnLy61AQMnXd3GXMErNn9ZMM",
  "key11": "5rSFPC3NxAyiVq3JpAtQXr8quf5Cp4Atfam72sqM9dYouVZpSSgjGiZcxR1iotLA7Vt6VgZXuukBZvnTfwhNahQk",
  "key12": "61ZsqiboMChuhe5g6RBcb5P1WxcXTARaZrLWwmoPmvBvwsEfZjVoAAxKCWc3LrGyJZUeTbbSuDzeWn7FNnxF1BU8",
  "key13": "y767eKNhggsmdk3mtUDkFQfQ7rCXM44k6QvrKkVTy6XYRRYfB7jRcfQg8KJTT2k7S2cGEMiAWiKMYaDwA73zuyJ",
  "key14": "2QpQh7vRgUvPBg1BHHb1HKsNh18PTQZMgb9tGjkZKf8Lwetud6sqnyWYn1YZrGLhUz3JXWVgpwgmN6taJkMP6FUE",
  "key15": "4MFdTgu2Rkd9tgH3s2iSBPXAJ7bYjPENfGciLKHBT2ixoh3gR8TXWkxDyMwaiQpWdNbAuBesJMaRPaKmPN9cHGFy",
  "key16": "5KUcWtPDFHcYSUkZ3fVm9GRda4zsiYbsXL19TPKYQZTeHLeYKeidMAqmX65NnW1otLJKvBSCny8pTULHSB6M6KFj",
  "key17": "3sZno9k9m8AssrhQSYgE4ZjsA6L55YKG4duh9L5oZJBWhUuy9Ega2UYv8qFpvwo8h59pQwoDbe5DHenWfPxuzJMc",
  "key18": "4FacSG7H322QCP5WCBrj7Um374y4S2YHnBWgFbfBNR1FTuuu7wCTu3AxRE2UgVWLKXVxFJnpaS35xLCe9j2r99aT",
  "key19": "64W6ppvRMEVdavCXuH55NdukRRx2sS98NFnc7QE4juGnmnYv2MNvWyBRTLrnv1EtjVyHoGrYSu6VtS6QdkxHtJ3p",
  "key20": "4hf5bx7Cg4mesuvtUU4aGWGuYsAbb6fqEUA9owRi9bNmkoFhCHTwTRMkN9wJ4P963Hw45yYAeocgxNDsC9pzjcZN",
  "key21": "4xxd66ghn1KRDymBJUGSmACvhwx1ScKMmyrij5PxbFfxrM5Wsr3WkqWroggh6xeApVLiWnYr81f4pJwCuHMktYhK",
  "key22": "xQ7fnm3qjhwttbaRmv6VdcysFVWazNFgu8HrgGmpHhGLdA9sv4YuSqggKRxV6N2ftmuZCg8hQCCWwiyRqEvL21V",
  "key23": "41bfVcDiyj3TdgHbzS1oqSiuMpZ2Pd5BQGzfUNpviF9nxsHeBUTFcV3MJNBqvPi5PrqE7nud3oUBXVrqqCBKZMzF",
  "key24": "LNfRWJow2dMP7AzVUxgPYjEyu6j4v5rXpQidGETfAhVGcHenpeUjXuGnkWWaCoyn2iQhdE7CHrWLYZve23GLXgy",
  "key25": "GvskzAKend9gS9nkuZ1zpDrsGXjJZNEzNvD9JkVjREpNBVH1ysuo9eopsT9JpoPL9Aw5ntEeCVte8e5rau6QQ9t",
  "key26": "5tDqr8W3R5MHhBGsJx13aJEFE4qjuQv1agtbUKAb4iQkyq9oA9idbvTRppHLCekS7gEGR1Q5oNG5n8uatqgLyXR2",
  "key27": "4dcW1r9SaTs9pJ4MFbbV5tNi4ALtzHKENJoU6zTK2q73VMqNrM9Y2WMYiiFTtaJxvUdeFUnjAUDWLQxA1riWKPKt",
  "key28": "41NHkDCppD2qZj6Mux6zi9vGHTBT57CEDU6PWJDxD6QEmNe43FnBhkbryxMMfFtzsfczRMc6FxPSRTDgkscNm9Ky",
  "key29": "2J5kWFv1gZhkVXCyena6bgi3C2d99cPCxKu99tuaAcRL9o7BhsB9ssANXKSriLqreBhGhaw5wGJUbWTX7dRc1Htu",
  "key30": "2hivmMHrDJxRgetMZ2AWe8E8hX5x8VRePYqaUyjxvxLKq8z6g2fN1LhUNMzqybrdCjohXMSYznAhivUiaFjZsrWo",
  "key31": "2f69Fhco5ZsPG5RAJX6W8aSrANdKwmSnnnes8GeDbHisPsMtnVmXWjEKJZ7p7G1hWQgnbiZEXbFDTbPVhkSMbweA",
  "key32": "pwyBncScNoSYiaYYSMBgA1tJk5UNeXc5udMraQ7ozhUzkYD8sN7QTf5s3VKkLoByfXee81oZLsLmLpy5A11SWWB",
  "key33": "4YW7N7fKmf8y3Sduu51Huz4fVQXg9L5s7dxrf6aCqzdVvR2p4Ta9XrRcyVrrRqrmQgSfShaJjFmsvtwUd9ye6qaj"
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
