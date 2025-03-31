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
    "imM3ubgvYVQqKsTDiFqZ6tGLAtg3Fw8gx3z6ZMMJJ1ZVjPCoHZJ4XPyNzcJL5grxvqJGrkLK9P2fs7dvWBUTobD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PB7DP7o61xTzJaEsRKtEL2gf2xveR7MjkhcZ5hYzu9UvhUR2pCN9RUnJYaDJe9ygDhciALQ2DTsw35Qy1DNqZKy",
  "key1": "3TtBRnGfDmkFkiM8ZHCUto3FWHmYqK7u9AdkUJiPZcLj5876gEaZ7KA8b1otpsLeG42r2e9M2iK21zsTFXFSjuLS",
  "key2": "33q1H2Npv14fB3qSuHq25SKRV2SjQVzrNZyGvAnY5XHMGYgLZ4tc1eN8CdZj5X7yFMEFbcJJV9kBMUG6Vzd2yGoh",
  "key3": "3AwZDFNj9cSBxUxNb2uKpjW1SvQv9NdfXJcuFBZQKia8Ecd3XBY4BknfhxZbx32vRusMX7iHMa6sApdKZKDCW9sg",
  "key4": "52CnnT5by3ZL5MCg8LCGkp3gf6gA6PAcWnEp8wnmsG52ioHY3Kvbzs8KibddSxFBJJgciS4tDNSh2je89o7Mcqfj",
  "key5": "2RLiDyydhw3cuMMyzVNvskN28t6MVTxZibMh1XFNrtjNkncbi7LXk2Cn699oCFUKtaXqK5NuJxsLkncP9rBEtipR",
  "key6": "2sKFhDWpz2VuSDdRPTnREHmGd2cpF8F7g96RbQq27q7WaP74atyXuK88ezQK4Yad95AR3zPcXCDmUPyZysVhGBo3",
  "key7": "qcHDVZGSGEjcgTqncMonEicCgdhzXjhCjk7UFvsj2oyEAHAJ7qTLYYbJRDvkYHbPMbaknF4aTHnJXf2fHx2ACYa",
  "key8": "2tauP7FLyFMBbErXtVmaupqsPdQ2S1tJ2WtVASM34JNH1FjSfvU1S7oDegTCDHQpMzapd8nKpYGT4Y7Z8xFVKdLf",
  "key9": "3i8vk7SZothH6TwuUVcyRyesTrJJHG2xXYQKrPxuEm1dSugjwyQ4qh9zWh23xopV9QpvYDFr3ozyLbR7UkeQQX9D",
  "key10": "3LCZyY83b4XjaruWPVAxkDBAWhvXNTuzDMoZjwqE2ERxnzAXKrzKKfuckHx1BWcD4hx52cRn9qJG7bXt64GB1813",
  "key11": "ht3bEptXGH4i97VF9TxQ1Dhz2dj69UDWqB1v4FvByHNzKQxHt5UR9kfkTH3JPihYuCKYoAuUR1R12n6ZxrtLW9g",
  "key12": "3jwAZQKX3CLKmStSYFjorR65p7ZFHWQQU3uv9nJWG9fcR9hVNQKww5dhqKPXcphXx6WwC4sMeWSaecUysVvRX2Rr",
  "key13": "9Yaqwb3zETehUHXc7xabQAcvERuzvzPXgGAcKeqZQan68mLXhzmvhSH3ZUDk5W1y5VwEARvDJgRpjgGCFhe1Wjs",
  "key14": "5oHhSVqC2HmK9RyNom7vfHmdiF13QH7aqpJ2PLLWfgV6YSW4wDpaUbsQKDSYTu1CGV1hJoRQkH4u1rTuM5tS8sav",
  "key15": "MSCL1fEF1QAyvH2TkopiLzoJjQ7EeyNy6qS4piFE9eFRn5GaKnc6kcpsotdLUGBMokC92DNsEzNs2QHLHYQSKjy",
  "key16": "2XVUCq9jPvVvWxkpkSGTwybWJ6y9XHyv1T6j9ar26JjohknFwgXm7pXuu68y9htEFK4wnFEniT4CfwBD8Wtqd5bD",
  "key17": "4myvjYWxfjLXJiJLfUpQuykNFEu2w1SZr4ay6PSdkKt49iXauX928MANyR4psDhuxvyCwms7xvYPimTGetjKorqL",
  "key18": "3ARtRsmgmhqi8roUUHq7zndpDnMAfPAHTAPVsU19EbHdTdeibjosNM4CbD4edkpZNvmCsfgqR7Hfaj3inYvuWg3G",
  "key19": "57baKaMsSDvJiTQrPcEp6Hx1dEfuHdHfxtnRHSpK3FK5pHBRRBDvKpdWHURP69GqNas6iWDboYXrGjC9ubiopN8o",
  "key20": "ZcezGzi8PQx154Ykc53Vn5oVY1oUjLn4egXRZX8d73BW4HrRK8ePZoo3spoQX8iA5KsoMLDCckQdaGyX29vJi5q",
  "key21": "2p5Qs54ixkGMwTPoQs1MYdpGXv4fLS178rc6c4GyYphVTCwZDqmpksDhdNBkPWhQNqQcsp91CB2qRvEo6daXLnre",
  "key22": "36EgChFzRy2ppYkBGjkiSZYTNsRCZzv6o5CdMi9qrjcUpvJPNFMW4mdPmBsUsE9cscgxPYCtSgmakMev5uXLmKB8",
  "key23": "4GJYNKWVSaPp34fo4cWJLscb5rosudx7qkp1kVmRde5mKNxYRNpNBwrp2CGrHKxbP3BHQ6MQD887qG5GgmuHvGjN",
  "key24": "EpmEDM8ZFcdnuqsPxLfv9TT6HY2VV7DjBTLrT3xBDUH7sBHGhPuckgm9jaAGJP6VU15qBSKtJAFrjG9QL5DMZkb",
  "key25": "4woJDe4FtTmteAEPG9LPnzm769p942NGG7cTFbpLFW8dYwL1hFK1YEddQ1yxjDgNGSRnfUMoM6TLMN4FLqMRCwEX",
  "key26": "3qHnr6VPZMGhT8MirVs5L7cKjAZxTYxkCBAmxcc18qnoKpZWX9XQDGzFERS5QZGYTZ2uP9w2ZYHfEmynX7ES7LWa",
  "key27": "3kX89opghojJ2k4zbGXhfz3SE4qkWUUWgtZQygUCPx4RHMzKvBM2fnrDjhE99rdc9FCGHa3y5NzfbkJX44y7CGik",
  "key28": "GLiWth48FGYerLYZq2HYqMQ3iAddZngeuHRstbwY4Pe9iRYxZwYkBxAChRaW1Ry7VsukQvDvu6fr1tuGnspLACJ",
  "key29": "4FP7A9e2GUyqbiSJKLRkwJo7LT5B9swg4tVy8dfeWuH12xhzWmmVMgBSnwxds6MqRGTWZwgTi5ecNN6LKYzzSAXf",
  "key30": "2WMNaa1f5uef6XrZHKULsvZMY1bXZcuHLoKJf1NU8CzBzGnMCMpvxfqSW1GuZ3Z4fRFaUEcJCggwSDviCZdGNhUX"
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
