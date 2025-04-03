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
    "5QEgKdLi4Rmc2Jx7mf4gTjuhmwbmwYMvtUj2yU6npWfv8ZSKfQK5G8ZhY6s7oS3C9A1PoeVi8hHZFabNypJQJF24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCxtyKkDFwP3Gsu7n98Hke5iZ5shhipdkbrhK1uEZGSJ1GgMHXEndT4fmpRmCKkPTDbUmpYc2kxV44uq6zMYWag",
  "key1": "4AAVdPxffMMHvqBWjDUWvHR7Px5UDXycKMgjgrjPFQALLZJgAvrMFJVqercH7zv3ywamssmjaSaSXc5AYNYgrcN6",
  "key2": "hZECmW4CjqwhAZZZT2TeBCUaFuhDq15p5wfW1Tkj6xM8sxwt7U3yxXQEjebmE4RHw98jZif5gHfwccFFXjFN3KD",
  "key3": "35aX1DzVw2ovquLFNAnL8RR99BjvT22tsNmE2PVqwtufobNvGNBsDyK5rPKi2Dny8h6nMv1MNykWUfpga43G1T8A",
  "key4": "ZwhWiYBpKFGMGdJUuFT4DkWGVHoBQemnJqYVMrAhWYC7DjT3cUrMsn24qYb4swQM25y4p3bJcj1ezyg63LF3W4x",
  "key5": "xyfFZ8C68YreocNE81sPUVfQM2Fqs3WgQnKLNa6xXRRgUaALxZJ9PDKX8R5KnvrxF2w6tBPcZKYq9c2BzAMV92R",
  "key6": "3Bhp82bcF1Y5aZiZqXkzMohLANX8y7amZWTBjdnxxCJUFSe44S5ZPSZWbhonxMYykUuZuB9znGwzGvhfugDtNZAv",
  "key7": "fzX4etYid2duMKNxY2mMyCo8WFrFd8Abd2oMmAK5JpqVwcNGt1Y23f4f4F42W2yF1fTt4aBrtSeY2AcTwLCuyrc",
  "key8": "B8SgupYK4u4ZALWSFG2wMJZctERL5TCWoWMbXH1gHKewAtUs8UDbhRQoQT78V4GBryYM7sNRNtyQwC1kZ9yHa2e",
  "key9": "5VGaw2PRTT17shPdyn6DiYArY6gYoLuJTAAys6sFv95Wm3oCawhJDTQkaa2kSg9PxwWw81gQzAJUknwsivLwdYG",
  "key10": "4iVzv3SaeQsE6VT9EWafQgQG3dTEbSXDACPG1TPGmPZNNVVoz57CAMgVGmMiAVjg7JtJLeKudiLJf5WsXcHp7x8f",
  "key11": "4f4mUjNUQBg8E32S6eTrtebreb5jQAgE5JPN1hdKCJvH69LydHBj5dtXR9mH2i2YtuqezGV92yQox5FhUPrxBe6c",
  "key12": "5bNa2gTb4Cvq4vRkJX2eCPcXDQmbyh6NGFn9cadfqYRfCrVZ7hA6So9McwwkA3qhfn3xR93AebY64H8w8gHFgCMF",
  "key13": "b5NdsVnsuQHshXe3gsMRuskyqzFmmkCXowp4aFj4sMWWASjAqshJ6STAwRJPxFL5mX5UwRTCij9t1P8SpK4G2D4",
  "key14": "3XwpFXfgvrgBPyHzkGpLLJTYFsNZq8tJjyewawcSBRkWMev3Q697rtkeXWxG99NNnMzWLKQaw9fpXPRdsbG9uRtP",
  "key15": "4QAhbn7vAbekppMUgb6StMM88BaCBqFc1ik99ysETNxw7Nv4u8xJMonjAtrVQMkLSXRrcPyEqrgWk8oVjNw2zKxR",
  "key16": "3BcMcbwaBo5bJFdfS1cLiU1bD32xh9561a47gBE78cBqdE5xt1G31QVMkYUHqthznczWgcd1AyUkR6qeAQwR15C9",
  "key17": "4ryQvJgxxih7t5QVgnfBjnsRBXQSdHxKM5DaLvqsYatTqyPAKN127DUf8UBFGh9YJiwMw6CVswAVxxqc49dXDaw",
  "key18": "4W7MqTwbpi6WkFpm5cf3xiQDc84VqmzAKHxuJd3xdkqBXWCtg6x1txGE3XvHUSdc3saReSqnn2VamgQp9jxy27yE",
  "key19": "499RMBWjMN5mgLMd1j68uwLKJWoudXtc3F6fpYuZeq8Lqi5j7tCv3hsLL4yit8zjKUdiLbkzesdVGTtNFrqEXLxE",
  "key20": "XVCvsqYBQqFXNWDRrsX1EY2Shw1HGPUZjG8Np8Z8GfmTvdGrjghnaAKCg9n7KYLimzxZ31jhv4c1eDBquhv3Nwg",
  "key21": "UejFmnwTQX4LS4Pq6esckRb8Lj9UHCGYF2KkVVekUUL8unueZzAZh7f4nobR42bvMQzSdpT1t8Fu2dvQX94UsvN",
  "key22": "4MSBq3BXJpTBvMJoTfwY2EBvZa2LUVWk3x1sLTrYiGn4yxPCKW6a68juE7owwiEH7jyMLHVDDX4B3rF48Pp2e4mi",
  "key23": "jyAXAAvQ8tZ6pwLUcpZAgUSPZgm3QcNdixqbr98sVAwinB9hgQ6hHFwSx3UMkG4FG9yd2fESHh6DsB3v85UNHTy",
  "key24": "2ZKvQP6NxuyCUoqHMnK6ojyEWMxf4ug1yPRvyNmrBF9RSR7PRiheHQDDWNZU94eyeDfVfvZfqdRH1NpfqtpKqjUx",
  "key25": "3mPDTRFQhVBXQchNQqNPyqTPWdq7NjEqLsrSWydoEHtPzjYuJMC2VovtELrjeLiLfS1FZv7WNuRA7ScLHgZjfdJE",
  "key26": "oApXDCiMzhxRRq8sFa4DqPn9cqP97cCsQCbiEccftFsNkReRa2YJJCJbMyZyQr4iWNJmnhSPCgJuc3tfDX4y4gx",
  "key27": "3QWtFwcnVNtiE6ggqAearhQjbTdn76WiPXo7RPdcLFemuYgeBJvYgNg8nGoxCzXQ5GF3XU6v1JRFbTC3tcoWZ425",
  "key28": "54SFmivFSjoH5B7faTnDGHNUPd7Ay8jv2Wj2GcztmRAMQeyxCd1zY6Et7EmWvVcH9fuqc1LLFrwGpT2VVTVZTW6y",
  "key29": "2dRaZmABvMxcZrJjb5ZcsSZNsd37zgiPdG2tmdWMk8gZjX64vaMQNcfksrSbuQtmUNEDZQkP237wKq3YmHczM9CH",
  "key30": "4cG7reKocevNCsqqPVQzyJpDABe66DxDtCcE6mytBWQYVGUYnZF78KwkcYw3odZ7mbbq5J6vj9cVZRcWG2w91utU",
  "key31": "4htJHmL4yQQHi2xKtfCK5jMHmJ7i4BtEouuFMZFVgKgGwRoWrspY7j5aXv1QSCWuPiHittQ5AGS4yMuTkus8YXJ7",
  "key32": "2sPNU7QEw6b9cZhva8vKQcF5SejC2f4Kk2DQKuRPXRK7cFMfm4Dm56aFrTQD3UR2WzMCn8DuYLRG6DFKMxNz1FJo"
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
