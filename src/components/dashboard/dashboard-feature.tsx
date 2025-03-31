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
    "2jL1DnW8VRrnjHp2vs1oMGmXogSDjc6QDgTddNTb2qhBAawdTKZzS6XBWS4qb6AZyvFABcqGLVYRJnKETzX1jPPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qz9GHrctBmf1YeUdpzZz89cs62B55hxTudGDVZFQYskorRKMuSYEAtEGvDu1Vep9cdr4q9S4nXSibHQRsMTFbQt",
  "key1": "62xLRb1cSjjzMGFUEDnmAbbVu1G7CFuLbjzpt8oUi8Jga8ctZMocNAuN1b6FBQfFMAJCgfriFNCdECnwA9SNHeEb",
  "key2": "2MsE8vzYptoAQ68FHjzx35cyeihYugS4PKxCtwqhBpj4h7hoRqXba4a1zffCyYaQwvzY2m6FyEhSieredUjttkn6",
  "key3": "41W8qPmyXKMf8fABAeHB7YHVumfbfaSoZ4YpfNEhvCxbvVwd9vbjYMFvoBsTbon7BoCwicWxLnd4vjch5vrKgzqk",
  "key4": "3kLT2kSbVkaQqDZxg6H38tAt6JLUTMvwnAs1iCtft6vBzVPxQ5w96bWv8vkanFXKoNbv7hqqaQ2wgNj8DYqstQcR",
  "key5": "4hdQiWpcwRtyGP5BbMTu2GaAVqXvaSiuVAWU9jLJVKNhisM6qpbPUZDkUnj3HuBgBDvdqpdDfnxHiWhpjM3dRgW3",
  "key6": "3kXmQ1Au3vLFDUeWSpTN45F4NMRWKorQ2HqTTXkooAMPHyMC4iJ7TTStiFtXJAXD6oULwheHGQvjXbU12KGX54Gb",
  "key7": "3Spc1ZihscU7r9ww7thQfEtKbUgyjefX5wx4McLAMXdxu7vvDKTWb5TFbmL5qfqUVrKz8wf3rwkTLdv3hmSKeLeh",
  "key8": "4bitCiYN8ju3Qm2LadJLu7R64E7Xq8QykdWJoP7QUtKeNqvfg2u32A6s3h4PQTGCE85wct826VYgYjfw8rMTMvbe",
  "key9": "2QqiPLxki8dVzGwojvFe3vJZEWYeX3DZ64nCEuoznQUWGKDcfh97VMUDV7BGEwCGVdMeypq7BtNCwvJrqmX7cziF",
  "key10": "4L9GjZHS5iaBYryzkJDguiAogZ77WTM2F62SdUomsLRQsDeNxvoxrhHGrsinFTxeips5z2CFdEfBBTZVZKU9H8iu",
  "key11": "4kU1V8Q7KgnAeev8KTKHTM4ceKKuXZwKvgzZJssAwa9UvoxTTCxuNSMLG9EZbcd2wXcrtGBtgbPZdMA1Rn5M1nD5",
  "key12": "3248dW9dQ7TE9k4qTy3FkDQak46BjaJhrV8iWm2goKqqqaqXnqQSt8MojWyGPNKGX2otEvm4Kv7exj3sBujCDSQn",
  "key13": "EjEP51QWoorpSrhBJUt2r5JPKBzSRzZKgqvR7fF5XYavaDxMsJgDUJYxYLocMssMgqHQXLdc6pDnd5mVTXqoaEE",
  "key14": "4jK5Rs5YAinGiyEbwat6wbrVsDKbUMEU3mm3VSucw1ftLnfHjgirAKwu9DS9dnkeSgE1gyieuZKStCAeePnPoUPe",
  "key15": "egSicyMd97ESPdGFmzMbV4YFLL8gGyAQ9q5kXrXjM21Y3RuqxHeuP7RZKKSQxxQuo8JEU4WfdAnGMZCLEZjuP8a",
  "key16": "4mKWJTADuDWCSPS1v9gLDn9NV7Wzv4eJpEXw3cjfXuunHz4ii6cDU769WJ3y4ijN1qxGQVPt6ksMUnD1wzCpE7sD",
  "key17": "46KVDYfB5GVBiXG8s2X9bWFhv148ErFgisK1tkxGGpKdRzSonoh3qnKmXC8VQBCNDVYMdkCBT3aRt4c6CZH7h1sB",
  "key18": "3YTw9Ne1Stt7xHmLPfXunYwCezyrabF4DTJsbAPcgHQHqVUoZ1TLqrhWCZSarR7Mi1z9GBAeDeZ5fwvPeNLhASGV",
  "key19": "utZqBwKNtSsDc1UswP6CAeEHK7JxDBznzRwQU3ZXig3ihLRARmwvsGYaLhnSf8zT3mwAx5oYNmZ6q449kd1AWJH",
  "key20": "52vesPjai7pYV2XNMHDfxBNp9oUsyRM19hnFS2c5CXdrAbC1gD2SxtNAp81pEdjay9hQwT4F2HUGLUyuWfc45U7c",
  "key21": "mLgVry7MDX9dgHpk2XXPqsEzGaZHRXxvYXyiPZj6Fdwu1o79LyUcnJ8VBnonexw1cbJ7MQxv3QgHmdWHEeubJ3U",
  "key22": "3jrorvGxcdG7mAxB4JCLSr37QvHmUs96UErUUEFN8REcWs4f68NySvY9q1NzfRgJNofSTk8K5KW5VShxe4uShegP",
  "key23": "5tPhgiErwNwZ5qAbsaxTZjyCBCLuL3Gs25hmGZ18SHMF6H1M4XbqgSSnniURRSRAB7W3y8q1kphRWA2kDTgB1chD",
  "key24": "24Sw7zKxd2sim6CTCWLW6Co3CGGbAN7sZcMEnufH9WLQFrxAoZFhsrhpRuRmUHrWJJ4ibm3EcU2MXrYChrfXbC2T",
  "key25": "5pQWdAPRfEX8Wo18EGaAFKMecqoPQtFruMAwF2buStJmmDbDoTMa6AMePnsX6AmYtC9q7SLp5VN56Y7fJBANhpfS"
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
