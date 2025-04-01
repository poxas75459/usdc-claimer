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
    "3np8kpFWVdpbG8YzyoX7vmN3p3qc9dU4s6aHtocKWoQeNvUC1U8X4SVueWvcH7paLh91xCAF5FgWSN2zT9XD7Rag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMd5V2GFFFpzkHHiHNfcuwyuBksJasZqnQNMEzDSYQwXu8NtLwTeWX97eot37f2U5UQWttNPb9jtya8eBBM7ukr",
  "key1": "2sAbqdeQRY52KdwhS4cPiD64SBXkiQ2c5ipgwmL52pyF1hZdzLh1ibXYuouXhgHurLvoDufBJXdi2S4ZJXpTebBE",
  "key2": "3oXagiwdGqXC6gAB52bd3kgXz81P7UUKYwSsj8Hj333oTsAZjFnoZFHbagCGMWxQPgNj7VjWuPHofbw6RVopii5G",
  "key3": "4yGCNEDDwNxV2C2UzzdsbF49VF1Wjn55nHGYhCFpcQCwQdC3D5u74P527uVjKGigf5TViQ5deDjUaeRxurUHsVnW",
  "key4": "5vbZ7ijvJYEEs8KJrUTjKZXwxBoNPmgZHDmdjUZAr4RDNrqa7VwgtNQSyaQtLnrPv3ptFFqc3ueMX9kWERgdfnLE",
  "key5": "5ZC6AW4zbd843s9QJYF5E4rgSTiTTChTRbn9a1Jatg4wgZcmPLRM3SdHKLDn6jk8Hd47C2PRLK7dZTQUnpF4M6cL",
  "key6": "34aCaG3rHrspY9Fcvf5PJ4C6pzmNkscggFqkafnrghJfgdUtSZD1WY6svW84x3LGuJ7pAuX4n49NuoaxYBMKjQDJ",
  "key7": "2tgm7YmJHQViJoN6BFX2yJWJufvScd9v5hAVdYJbdTrEzGEWwkZbr2TdjVTC1aGzsq5zyoNRerzFy1hMSiHdw7UR",
  "key8": "2eUrWnRqUpiSvEEox7PizTYkeSZRhRtn765rnX6tuhktu6roNVervHynnhPAhXiz3AeQcSmJSSNwcixGGGor5xAW",
  "key9": "h2bByNwjQLyTZohTZaEBT77K6e5DxHYYzoHLNrR115GVPT99kcdPXDq9bWMBazzAoxAg3ft78NVWMU5VT4okMyT",
  "key10": "2wAhVCXtJ33QFYm2u3nLKJJR9vB913Vcc4R5h1jPwQkVKcKY9wGgR9w1mcWazEYEy73mVFrkysX7JENmjN4WF3Pe",
  "key11": "3pBo6cMURuboNgKFbr9AtAinxLHejWKAsJHgiPf8mLRBG8b5jYPqDTAkiG9bEQTrq7rAdBneCzRGdP7tfcymLZqT",
  "key12": "44yBV4MX8TDwtokAqB4NMJHV5X9kL26QQ4xgdRnX7b37nKkTELPbNKsraShsgTEBNspJ4gjFZWaYbXcC3avWwjAs",
  "key13": "4S529wRPUvdLixzhQ5TURZeEFeb9aJCH6qGkCWcLwMKiiWgTF1SP19opACU5yrqVNiW1ZehTWNHtJhsUbxsa3VGy",
  "key14": "2722wwca4DvHxm9yw7Fgydm7y8LruxHgN5jfqKbMxp6TCpMDte8BDtqYw5xz39z5dq24iCnMkEwmMNBerNbq5GEx",
  "key15": "3JFPnu4aPeoWjU6Vb5f2VK1QbHmLykcDNse7ex25YEBpdUjJ5zeCRC9ZDzDWEXsbUhbBMnsjW8GZgUGR5iqqMUv1",
  "key16": "4f1Ja85CgzE8xtiHVNWfFh17kwhbkrbSwEbCEzjxtrvJ6Vs7gSeU5Bo1yMUX96PqVfX7DyrF4dReULF9Z5qkjUrv",
  "key17": "2PR4wXLJ75qsx8YG8Fs6tpNJRiuRTv3VfQfSQGHxx1GFeWW2hVmqEtAkGzKu8EBqxB1WRZz4jChoM8orD3vCWwxA",
  "key18": "4BjgrivrHM4ZSyYyWBTyDzu6Bw3sd65QEWe434F8djhua2VoAkpBACBZP6MqQkVTAY4uwgHTXi1P1Cg1AxMCdXpS",
  "key19": "1R8EgJ2UurHhYe5x4T24nDtZzqgjgN9nnPX2JREhe6hiTnBXHTB39JMqAPbSNg3xigQtZbTVEgvCA7zu8C9Gxiy",
  "key20": "3CqTmnufUWTz3ZT6Nd4KDc8mYjqCowvY3taMAqZLYQHYXPrTLQ5DM2fLE6HHbbgsE6kimSgG86ymyaDUuDYfg8yJ",
  "key21": "5u1ujkTUHboEdwiGDNXWmgDHgHxeYQuAA79WC261LHbvsYS8Uscbztx1jyNBWbkV31ohbnQk5AQvyoMctxTi5TqK",
  "key22": "4BmFxop5vXLFkd4PmmecEpqqDfcyttPS58nnHK1wCroABym1SALaP3nFTPfx7fhNahWyteq3Supdz1etgMe5Tftj",
  "key23": "5BdvSMLuHtYMXupJz31p8gpZgqZDtDLvWWrpwie2H8v1cBNSa4NLFbDVqa734giN9U8i8ZsEk3VMfiAFpVrJhkww",
  "key24": "2L3fKuB8Bf2oyLjCn8hJMorKst2XLBjxMiSuQ5SGERJDtqnFYS5eugx8Y6KcVHnvoY9mq3DrPiD7YwVuVDfJp5fa",
  "key25": "fYbMkizz3kK3RoLVX4X4M3yvy2jMcncC7mwbjqNPxbtjCfu8DnCjPmvL2ZrsJdKK4sQF1yQsvb4edJczsxwxyoG"
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
