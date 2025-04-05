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
    "uRDS1xHkRmo9RrWSfrfR6CT2MwUeKEXubnLDQbgnWiycjRrZ9uG98fWT7V3R8ZtxMrwd74imnompRYcsZbHMCCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SpnexYkQo6zFXpTLeJqREDUWoirvgA2snCQDgp6rCskWfJshnFHBEwvDxkZXxp3eHoZMwcaVFtoyLwnLRMFQv6c",
  "key1": "4wPjSsW9ChoVz1b1x1RRi3oNUhQCpKhETTWS2LtQ4dcxaYidD1Xkd1oyGLtn2kVEtR7kXeiwF7HfzpXP1ejU7u86",
  "key2": "3co4xXt7pmeiGXjHN6r15oo5BNvcWdqrkC8ZWcXbWAEGdjqnpqvYEuc4JA5ZJ8ACsZBvPqhEJX4Eh6sNLE7dnP9j",
  "key3": "3KzawNUvBwzzM11BuV5NEhZ31tYtMPxdziRk5HzZbMUC99Pwi82xipxt14xZ18UZAtTUM8Qah1etqqJKWYHaNkME",
  "key4": "28QosSbteNeHEU3mgaA2LRw8FPeogpfsZVwbBNETj5GCjzGV2gRinwtRARMVgsSp1DBVraH5F8BEX5XRptMqMmXL",
  "key5": "22gL6Hk86gcK9bTebDyVKdo5ZoM7Y78zsZoGdNS3b1i1YxS6QAG9iTcymgBT4Rpnsog9hdogZNq1hrWDjy3YRikP",
  "key6": "46ybELTkMevGZ8ex3QvHNs2VaG2s5KJfDZHK2RkAtk3ZwSsnHh89n6MvFdRxwXFP2tdDnPaYzidKkhFViRpdxKxb",
  "key7": "3gJVsES1WKisYgMrT7rCMMEZ3pWRBpNoE3i6asJBAc7DMdFLFR3RRRXKSR457JsdespWJhAYnGrSEXG53iXefWzD",
  "key8": "4tTjk8RoSJTSsCWdKeE6vPDGv1xRphgw3mGiN4E9JTr9UP2qAooUFw9YL65RKZmCowAbkxyREpzjRAq6srC1pUV",
  "key9": "3PoJTAXDEqGppzxFUurp7X4jt6sunrBg6BnCEayTw4PWwm8V1yk8LuSX3ZqxLQFGXe6KTdvvSaDjKCVYtVnoA9wj",
  "key10": "JV8WvYDLzAR6wrTky7yYqHzcArThVydxXu3z9u3jkjCn4Kz4HadAciKi7dWNczvUdpsfZFw3GRd4Vg3JouFhsWh",
  "key11": "59UDgQbQC1JCGnNP8BBnwD4sLDQA3m58Y9jkkLKNFiLEN7WCRATTJfd9oTfGXJbdcqJTfg8UnWrdrPmECeMzrjJV",
  "key12": "2NH96Lq4VwVNnkkMjDQQzkroMnQ8uKfcT8HnVbCj7rsJEaau8cdNhQwWyr9aAtnFyzoaF5sdp9vPWfFsm3ZErMHN",
  "key13": "5zsZ7tUd8BdGrxMVvzpVEqcipiSiHRPNcEekc4D5xRsy7kbjNBpivZnk4HWfLeALsG7ba8ybG9ZkehxFP8x5CY66",
  "key14": "M27dXRWrxrpe3DAdyE7pLYo3DudqNQV4uPB9i2Zji9qgxVYbW2AxfHjYJkofVcoXpktxC5SScrVrnZUPivCnd2p",
  "key15": "3R5kDx8NuM9zx3uWJcvWqPee6YGavpjHznbdmZFu2uQpzFpGWDuCBs6w57iMWYzm5XbfCXkvprkvfVLm8DRirzvQ",
  "key16": "31Pdi6R4tfzWxdG7rayyrii53E6nBAzXYrLDJhkoGRYYyhAMsWHJtptg8FDzZWHPkiEG21u9D4Cmhsnw6ci7LqP7",
  "key17": "kHMfeJMJJgr9VwJJhP65FYRFiTup58SExxC4AUeEBxAgswcnkznEBC4EP2ucZk2DxFgNNDJbp8hwbgR2cN8eff5",
  "key18": "2AMK2Y4EMhJRR256XVcoN5p86Mv9PkhFeQyvbZvpwN4hmo5KQVssnbuyDb6YxzxA1qEyXrxyyLPAFRxTioUUXmci",
  "key19": "4G9YdsZRXL6NhVfk5wLtccNV48aHnbXF8JKkUtUvry28dcGimK4vVK1iW3m3rU7Eroo141epaLKBW9Y3hpMhbuSE",
  "key20": "3G9ZJm1g7zHZE8syDmkbqAnmDLZ3psUUQg6vVZtpYg2xaDX8z1aeBmbkbQiKNH7G3PPrTCrEFf2GJKcmHuoZuNnP",
  "key21": "7vbpGohjsgAQJGdNTATconfrW2dFcPKtZmSjV7Y5Yzsmno575XfLYbLi73jRDYmjDjZy2nas8iaAGDKCbSKktfG",
  "key22": "2GAgrDLtfWgWegXkRTYnnBrb5KV89q1gMAdJ15fW7Fj4H6AkMn99mAg5Ms9CY26nfdiMW5aRvzb6j2vHJxdwy8mt",
  "key23": "5J8wrudUsHEXZHNgEAg2B8dzw8pyPVMrPGFQouXct31bDdADB46qXeF9RRPtheekyNczhP3YccgVHYqCsebfDD94",
  "key24": "gRHX5KKFBkLsBByxNRfqF8ZRbhUMWAx5xpYA4u9xBWMDddpDu4Gr6acbx1Ma7hqXmh8d4iMhHRMYRHpVvXNBiUc",
  "key25": "4jwhCUj7zubKrmvG838ytyvwFphWYo1faD3Zk1VntzA4nqRR8TejvqQdvXM8mjRRyFUAoC4QtjN1XzvUNqL69ti9",
  "key26": "3v3hCp2PPp6GG9zuJnbZ8GapKsiFnM8SEZQTaUmVLcY7UrcC4evdfYsBgnafbKgABR3RN1HBc6tokrzqYa4ZNsia",
  "key27": "2BZ2Pwrdjd1XqpXJxHTWBWbp3uBAKcjUoRfrxFBQ6cuAExQCnU44Duqpx4VnSerMjQiCETCLs5UKtdBLwwczUReQ",
  "key28": "46BK3U7ggSikc5dpguJ7heeMz6p7nJsd3M5NAE5ZH7u6TpVSL16w9euWWxokEHGvcLtnLiQ2ESB4ntwjTNyVDMfz"
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
