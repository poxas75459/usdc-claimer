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
    "613iMrAvteQaThvBbnarPe3vFJqiFCD6QG97cjRJtw9JHRuDvwkPcgLtXTM6nbNbST9KarpfcUpz3SsBL14sLoGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqbnYjNSx2q1CQmVwRmxPfADT3qhTrk7N7KiV8biMGVtHZ2KUYA1k5KD81sAw3ADUdkZVJeDHyM3B89umsAEa3R",
  "key1": "2SkGDwERpBCdnbnMyLDXnR5eunHmw3TcraPMQwA719x8VC6ctBNTsodj43T9sGCzkfZDrD84coTqRZMr4MCC7qqQ",
  "key2": "5Ji5p56JwNxAVL6zLw3oQfCsBoai8j8hXwEETijZrT3c3kLqJz1YfcKbKmhq29cTwMcrNSyN3ifEL9viJByeAbz8",
  "key3": "J7t2jdLxTPX3cj8a8gjhddunRHdPMznLERa4thXqgiTuSms2FgkNaKPsWha8vWy1cfK4vJ7xLx7YQvFWbdGV2yj",
  "key4": "29AqF6HqcqesS1Hxmg9AXruE2RosKkCM1MifDBuPACnkFpiRqf6xTZU7a5hu7JbF1YsoLHJyNa3HkEKHzmAqhpbP",
  "key5": "cudmWGdJ2a4GboWtFNqx7u81NbUHHHaQeFAfPxFZwbhm6vJNNpHAzNREy3iariaQYymtnFGusVYdf6FQA7Z9AqH",
  "key6": "3vr3DLVBsaDW1PGX2scxe9x1E7QnUxxoLsgT7QRzcbVrsbJSXYyMXLCny6YHMLRLVx15nJvc8ev3BLYyLF9j6XLu",
  "key7": "5pERyAdrUzps6SNEu4tFQmGAqCLV96mXc5r8RV9PgqkNzTfXTTJy5dqsnCet6tqH6Aswt78oxj97TUmUgETRHaTt",
  "key8": "3GbFNjcoDwii4fNYjV9EKGnVNjr1ZRvR3XJk4hR3KXTYCJZMtFYywCkj2GxhoF9bmbFDBniZYqVQioP8VRUa5U6S",
  "key9": "5kAdxpmCJKXt5F1L1rXtfUJwQUm7x5N5ZzARNuKXcsiLqhZSLgLdJUYNRZWNoNpKH1HRs3827vi2S13mwRE2AULn",
  "key10": "4vgmWZbF7kHpAtQq31mQ41HQPCfrVD5CCjGPbyornw6XV9i5eAibJQLM5qzKVysQGGXbSbsTxMADY9hoM6k8TnHf",
  "key11": "5PBcFXLSKDPiadDWLUm7o8iK1j5phGT5L1mgpW2SM4NK3tWnyRMGcH46Sej1kadYejeTouSLxxgUboE2rDt5S3P",
  "key12": "mNHCRnGJpsERs6a6z3qmKqDzSwyBSdHN54ToQjuAjd42BLWzeF5s3qusttCwypaeN39w5UW1aFGzwcPCkMcBBJr",
  "key13": "454CKvphnybL7VA9XQEobNumrH6ctzEHhz6VWbt1rJiECqkkt17jK9kMtqNd64zVxhhd8kpY8mmBdthpUabRGvBv",
  "key14": "aXHHzFUSmfFmTwgtC5naGyR1mMkf2PgiKSEtxfxRMesavvye8RZdAzkSuqn7TNYomacWs7JdQMXxQudAF2vA3RF",
  "key15": "3j3jDcu3vd3Exthb3qHc97gzMVjMrse2TvrAcA5114EKb6TScnWezS5ksAoB9WmzRFaev71X918D13KYM4UbaMJ4",
  "key16": "HjAQVdmfj7ndYG7uL7zoafrRUTBkrgoxcRG1cpFuZxLDUSVbfDedJMJ2ut5FmBxLmTxe9rbNCfgVW52Q3QLQHJw",
  "key17": "4kamE9rPBks47vs1RELJS4FZS9iP9hQM7pKceVR3VnMbX57NjCrCg1FHvPzyUixgwe2JNGUifPJ4CgwJhcue4nTz",
  "key18": "2HDaiKwafVoCQirEpYo5Vsb8e22LZ4Z2ef6pFXrykv6KipC3Y2YrQoSxMwMCm2SQnCbH4siEfg22nyTXRSjTNGpm",
  "key19": "wcZQpf4fyKtaQ8s8jXALwJDpNKXNSbzBcEhHg3hwURzy63woDv5WVteTkGPiHrT9vbGu4XbfJqCHjpHxspGEDEz",
  "key20": "3Trs8PE6QBWZiH4NUPePUmuGzHhXiyrHfTQGb8VNF8WdFrAWbnagm8cB9uYYjtu2hG1KBcmQsdwiHa6UfKDfF9FX",
  "key21": "4Kj1PqzbZfo4s3oR5HX4GXwDKQ2RSmgveY523t7cynipZTb78MLDRHFyzSh7rmRkoNTgzZx9TcGvdw3B8zradFji",
  "key22": "2nU4uSnhXXEBdofsrkVYGx2AVJBhAA7eYKWjYDF77a1DzbZFUqmNDH2pQixEkrHPrWv9o3FgYJb7voNHQtUvfkQY",
  "key23": "35ny3XVr9GYgfT3CGN9ndEh2V5CfQiiCbcC4Ue9AVMxcFtRnmanzzYJaCJrUBAPRTHzNmoTbiTcHeJbA7bG81b7Y",
  "key24": "3u8vcyAGNahYwECzp6M22TpdiFUJYuAfJgQ6B7MpZAwaNvEUgZsRFv53BCZmsY6EMA9f2z63GRREKEcLKjb4N6UR",
  "key25": "xRwWvAon1sgtoaGZheh5iutfkSGM61cU3BygY4nmJMZgjDYvay79Uupgq25MfXgDK3oJ47SADo1C7XPrRK89Rx3"
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
