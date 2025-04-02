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
    "5gRZaWWy7eFTuqorMopikBFQwa1grGooJ72fRAbyCgyKgGWwAG1iR1U5JgDBVPjb8Mo8ECKxqtURwi1Um8xQ1ssw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MgyCPPFJs1iMLP3cAwxeprHtfcg34r3hw6G99Dt6BypuLoMvnFnnRiDtuQwmVstYktyX6iD9W4gKLcvdjdsZ2PN",
  "key1": "3gq5r87PoPwJMosYrnDkJSXVNH92f8M2o1JeDpqtnJ9DWZgRn15E4whXNPYcWPHXWCoubMhdKGnWuNNDT2J8XErE",
  "key2": "5C5xNwnuot37WyGPThS8qaVxLLswwyWfa35PEMUxSBfmjumNeWz52kVCNNB8zEMahatkyHP7ZY67MtsPYxXZ8JVY",
  "key3": "5Uey7xP4rgan6VcASDhiWWizBJz7X16fczzfDDXAYmsLYAaG4yKoqJFvmg8fKSKQfcFq7DyB79xpD62yfbdGirct",
  "key4": "36EvNNB7TZQswHaTekZrQee3kvRWzzvvaHsefdgt2mEJvBp2nTeZzcU3psFLwM8ZutBHg7T3RGMWhNS3VYpGvAyf",
  "key5": "2wfjBFc1aJEzovkhXWWqBWQvCZ5cyJtR9yaVL3vmbq1guYZG3bsHJ4dKC57SaYTYn38gnjc3pxsnTursdTPMYhJv",
  "key6": "FtXZbQ1SUUCLbcXJTWGfJ8QHtMjWqte2EN4EzVjsAhQ6oynVuMBk2aDtucdjKxvXem17wULqN11PyZv9z1wAj19",
  "key7": "3NsnJv7pr4QLYfuHNdnFMgPZjjNjAadcH3woCPxnavzHmeyaz5dhvGbfzRdyhNtbUSz6LWQ6ZVkndfUUhpfkm2pp",
  "key8": "2SQZSfKqrDtxfD3TQgpsujrJoSpbPpnCipWakykfa7u2ozX7VcJNy4qQmHMqxdrbu5nELa87eskM4NDUUdEZEBWp",
  "key9": "123j7fJ3FsHPMVWVGsuuCPoMXieeVh71EhAP3vP15WaLbfVXg1WMpVeHqADS3ySUGV4RyN29KtS3vNNKfZ8BFJ2n",
  "key10": "4fZPEdeHPQQcHrQeuHVZ1CpruXpU1qyf8XYbFj93X5ho5RrwPmdYdLnJ8Sj1w81k5fgr6546vhTsGFui6R2cosQa",
  "key11": "4G1QPqnn8MPN2AuZTaD2t7aqVtErhnRY4bYN2hPdkQsRDoCSG4irguAsNUGjwhgSrQaajtXb24PQCjSetjLLbrqp",
  "key12": "52o2AEFR3qHaj8jBFs2rXbTamPRuQVxXYbqQ8Czq3p6BvCoarspv2xWtfLbqkM7uxsJwsPZx9ajKaxJfNoxH7AkZ",
  "key13": "4BscgARKWmBESZwzHskTxvS7XTUKqYtZuvtEA63XwUbRVnL1PBjrUVoz11vPe2aFZyXTncj2PNtDLJWxM532MqCf",
  "key14": "4kVQGDm9Dq2HApmELQGQp6Pvo24hDsnsjKcra8JGRKKb7tF6xrU6DmmxET6AUuPaMNSeUFPZBRGPrgDtoy1EAb2b",
  "key15": "2BnnhD3Nsk5RTexgFbX1YMNGtRHNEZe7p9yXKwBV9WfehW9cvUCvZzjJt6ZApNJGcuDK3jiUrC29hK9vLKDa78of",
  "key16": "5YwzkzEm48MoPjFp19aR3KJHdaQxoiwTvxPLj9FJKh9Bxe6v5CvPSjStJQVusmwNt31WPSKtFQx1LxFXCYFJyH9Z",
  "key17": "7CcGnt4HmRVcGCYJLVZxakdnLDMMhQt6LCqgZ36prxutXHgk33tVZHP42bBxYWp6nPdFDzp4XBJnPoLToauPmMF",
  "key18": "3jASFYkHpZQHfthzmSmeuqpZePBWxcrZYafTEGXfMhFMcJZumpPey9nBCFCucCtZLWptRNB1f37pAixEa5BLJ1b3",
  "key19": "g3y4bU56KxNYVDGQXKBTJVySG5bBgYwJQ3uvkH7RLS2uhYq6DDuVdhebvWZYNVrqcfN1dL8oDQ7VuARmxSPbf3M",
  "key20": "3QQEqysVgKizzdbFjipZiozBkVDHigm1XeEUSX54uiu74V1ra81J4bUq8EavskQMqWmBP2rTAvWRTEioqfiRjTzJ",
  "key21": "2sCeCny3DsxJJtHkZDWbZB2EpWSUF8Pt4kezscYYxDnP1ARkZW7BX7PrELRUADNGRbeuY2reZhLikAY9SEFW4A6G",
  "key22": "4pSGzhhy4DDt6QkDoKNGmMbmLPhyQq47ZDqqxDzLtZC3DCMTBy67vL2cb1tqjz8BvsSPDp1UtxZXkRTobmBQi6HJ",
  "key23": "59Me3xEht8WZHBoVjGTBf5upvrUfbFTcELG7XQgWupC4w7JNqqc3osrF3LydUWaQmrJJd7Pgh6wuFfJ67y5p5z7z",
  "key24": "4KssEvWfNYN48NfQyBteBEzS6CVH5uRZoBC4TxA2PXUUNiwQhfWa22AHas2ejDRBXVrqBzSUUvPg1b9Wg6akahYa",
  "key25": "2vtSAL2tgo9e5Cz7h3yc96Ze4FE1ZQu9eqWGWYoAcpoFxgENsQLf6pmXUMGzLEtLhnnV9SoDBMeXA8iT8eFjhMew",
  "key26": "3fWaTQzHcsU3vKygRLjzvLV3tutHyU6VZLJrdg1yQBJyufGWSejZP5nF6UxyCct7YNcnPNWNiWsUweqrcgqubpwu",
  "key27": "kwB2eg1yJtNFrDdWkGH4Qi9mV4tZpuGGuf3YUNo4196JMKgZbedLZZLAiTmPzp32Cw6cw2QbB8rfA7U6ga3YXTM",
  "key28": "5FrV3AFns7CfMHDErQZLYRwzihiVzrx7rGm3Z2zfifW9Vy8z2ryMLEVbfvgrvPRyDrCtxMsGzHszkSy8mVegspo1",
  "key29": "PsULExnzrhqKC8tUGhDmiV1GgLbcvx8yoEZbsKPtFzQWLEr7FvPtdkPHS1LfwZSex9QtwNP6QtdkA3EyvTZk9QL",
  "key30": "4gyFKnNsWXycpYo67wtWHaDwRYbdnbNb92WtVnUjJeKToKHLuayvJFHH4FvrBYJKBK1dSnwZ8S7kLKUDvnoy9Cbi",
  "key31": "57jrsPeszaTVB3wis6CLtyUWnJiyDqKSALuFo156roJLwkszjqB1iunRetKvnAEWaQ1HPuCE597yM4meMG8iZUk6",
  "key32": "4THgpWDEdU3PcL8oQExYaN8F1NhMbLrJpSHmBDoifjgTmbL8JMdbeg19KAPbds2enFRD28uDRazEoC5XVsEmwkmy",
  "key33": "52UBdQfQcXM43DV5ft2bN3uqSGvoqX7REowe9KgTKF7ZyESW9hS1DhuexpvJJ9b2ipKMM4nwPmXsRhZpSAFXnqd2",
  "key34": "vQ67sci9wYYEhGcu7WFBR4HiXa29K8KP2Zbg5S65ffSHXfE3UJCNVRDXgJj7QXZp4vvB1KJ7xjAtixsQ4ZhiTLS",
  "key35": "NFcK4ywbauJWr8pFLvtkD7Lm9QQRrkoZCzRWQeogKWD3CunN7PWZw6eCKdGKPi1nLemEXjX9WndmUcZDPa6TbSc"
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
