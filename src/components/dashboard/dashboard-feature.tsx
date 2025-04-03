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
    "3Hkr4rHR1yv725wa3VKRU2fYTaFN1A7ZRVEsKbAzGCUMydyV2uiZaZzNiXedmnvtQFMAvLYPvcZgRJDxBqahWuas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dXxTggN7fcW5iqNLdroyMZqY8xg4cXQBAHpdbyguCzRQaZatCLtuq13toWVLfAKpoczFKejsxacjd8HaVVp8XmB",
  "key1": "3J8v3owgs91gsc3F5VDs1kkz7CEaWYcDKLdZrTxNLrsF8f6KtCWKFMkBio5hvhwGhmJzNMHr92ytJAyp6giduSsT",
  "key2": "36WSUnRFYVgj5LxmWif5QzacTqQYtkU1yV9vY4EFysSDCXMNZJXrri2RLp5x8CKK7MuYC1LzRhStkb49ZwNR8VLZ",
  "key3": "5oYhF4X4fx3yDRmNaycMRQDYWrt6zULfT1cSdAvMUAYCRt7uWiFx4TyZFAQVTLdTjMAFfv6tmuBd28xmH8ZSjVnJ",
  "key4": "2XgKA3DQLgMPEMADErhGDj6mTRqATez7hujwK2chWVmabLcdyUNmCZTLw1NAU7daYwXNqxiYrobstWL8LznStXcz",
  "key5": "4kF8QEmZPtbfxUAJEfiwodQpjcKathUSPD7Nwc4pMoo15m74m5GiaFb57hXuFVYCDZSvHo6hdgBMg6aJmTwunoo5",
  "key6": "4ttnbiV1wU733E6zprxn3ew6Ho7hy7YVioxQkbjB33zLMHJVNFWhK6dFTqkSTLRBHWaw7a5opr1NMDJ7FGtP8A5J",
  "key7": "42c1vHAA5sn57d784hWGNKUxLpaof3dQpfAWEd5Zj6g6QMcn65GF3YsCDHQsLbYadAbTv6FmfnMJZ7fpJ3K6JBkx",
  "key8": "4zJq61kCjwBodDABTA3faqAMbHPEE7P9q5h14K5rTKKtiLwYh3z1EN6iCcimfNHkKMkqYTYj7qBgnpSeLYdS2xyu",
  "key9": "5mRTMcorFbUzq2aYywRDwETghhrsJTJuawXQxM9q1Y7GSfG8419sHW7nbwCU5qmpKeoN229bkAmzN87Qf2KtNMRK",
  "key10": "4n6oY7dMxzUZ9z2VMDWBD7pW9pt3deZGn3c2awKSkbu1CMn38pXv4d5D5yRtUqswjzJWLwoqGixJC38CpfBCNW89",
  "key11": "47TMniLaJMT2vFZrTvypFZKqQQ4U3cqYojNLcbpqHeUN3mEiTRWhouNeVDuxzWuv21aaTsb4MqeguJBp4gPK1mFr",
  "key12": "2Ds4aLWca7ChUFa5TuthYhD7fP9n19v1DAgm83mFuCt2SPBf79vRVwUybiQXS5yvau6GStAaf3qxTNg7bkygV6Wf",
  "key13": "3gMj5JjvsxcNopyu4PqoVLHdoTNarfmm6bqdxzFAc3YsUAvqmi7zdbUn7diiepvEV89MoLagRkDwwVPgChQdSCfn",
  "key14": "5WzovJkWNvjkE6Fqs9BnF6SAZt8Vc84pjN4FmAswGndEe5dQu6MfaDxmuCAYqnieQ7jeBAU5GtYxeDq88PaEjZYG",
  "key15": "233SmnGQaCqoBXdU82gMAZG6fAoRWp7A6q2QWCxTXLDbTqkBhoSJqjV37pPpfCs6DHsM2ived7Jo7ci5yjRWG46T",
  "key16": "MvVGpfQiVb1Nmp9RyyrG3Ze9pcXLe2b1uDHsCPFU5MGLaCwMDYmMBzgRnDPvWXRgfZjp9oJpiuqX5tMEbQCqVGi",
  "key17": "35tLauG3CTJKPfp6Rnb9zTaZ5sXt2xzJQDf9BPcitj6TQoc4utJm5fL2QpXsqTbmDJBPVDNQZ1KWJVQxN24Vjxc7",
  "key18": "3TDWWNh679yYmemZ8FQMsNfHf1UxZF7huczE5yewoXCnwFeUSjwE4AmV4EkrK8KDAL5niGTSZMmAdiFyso5yZt3A",
  "key19": "4viu8JjAhEbVrFzP5mEpz9xiNiZC2TXAqeuaZuqN1iNuEQW8PvCxk1azKqH2b364ZsrWiYmBpXkYUFiJxJhsrWBb",
  "key20": "4VoWZEXjpUVxQnxfs7iP7kMGjHPoegdAEEJEWwPSGUH7tSnM776zFMKYStxMiVhhJpNMTQz56bv6Qc6YK71AjgPo",
  "key21": "3kx3PpjEznQdM2YMs4Aqy3YhXfvXymSGwhP5vRPdT4uSRMQhUesBkU9GTbEDu2w4C1zQzzaj3eEjMzzGyYvrFoNP",
  "key22": "bhBcVBzeZcNMVoK1NDvvtTm4kDTsmUX22ADdGgNDgWsuYiZNDBpfuFkFTcAd2D6keXRKWVnJ4ncwBCy8awPve6Y",
  "key23": "biasWTY7BJfKoB7cNA7EfgRGMNZmpaLrjNdzVmqn8LLUd5MVd6t4dv8QiLo2gcaTXcodMUtdgvCDTV49tF66RRT",
  "key24": "Wt6QaUGoEL89VCcYdMPqwMNWgxqwzJHz5vffpcPGkkVZBehffCPYswhs5pC3tSXBV9HU2v1crS6soB1WyCjFUbJ",
  "key25": "3dcfEQ7v92hj7ZyrRDGX5QCtrVBoTQJv2W2ERMTCVPNfgPA6LXmeBLuFCN9Z8P3i7g3TAozkDW7BkXcirSBB1ym3",
  "key26": "668qvAKiA9nxkqJ7oJNndKCBYWk841m7athF3cwQNKZ7HLtSfGtVHY5JdkP8KiX9VbkYw926LEHfCwVyuesLWsKe",
  "key27": "4tf6VbnthxvaSyCxPqiTVwqPNhBPVB8iJp4vRgJ3YcWowUPv9GTdgJSiFH6NQtGAcpy7YBijDGGUBZ1zwDmVM1VF",
  "key28": "2GuzJXKj5BbKAqNaU2US88bmZL1XoDLt5edfEbWcqdkFp8whNYEWyx3aAcAu6V4UbwhH2HA2Y6bokPW61hrFCJgg",
  "key29": "4zsNY8Twr5EWaYu2snGGmVNGAvywwE9zCf29228YWJACRKMKmbBWqKTiWKvUCMeybnDu9v7vgKt1VTS9ksZLs7hB",
  "key30": "5tgSS7Mdm47XcDuvfc11wKfa98MBkUj8HpybKcM2U7hHLcnoWNGtEBitcJ1gYGA4gFVacrrYjLHVkCPFeCopxRUo",
  "key31": "5rE5kQnqSBDDv44e8Uymf5CUgEU6uj1AT8GRJ8pDizzxNbukXURyCYMCzNPbtSm47cqoATBSmhQsoNCqcNTcNwnj"
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
