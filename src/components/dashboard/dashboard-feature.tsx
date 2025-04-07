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
    "7bYaUqvMQu5nbzqeAPv5vLXffHtemb8SmYQsts1QjyJk5Y2N6hnm3dnFjhfnJ6QaL7tnKbzrEYiwGHm3jeLW9Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFCWfDbngfjANHejXpmRdBjhDRz7qp8PFsoMhhDiWpfoqAMJiaKrEvCMbyTaRg8BnTik8eRVHUYvSRz2G9M9Z8q",
  "key1": "3nxwPzttPPZjxtzYZgEi9gwzcN73YTEguydoAS1y6N3yGFHkaomjXYrnjy6XDQ6bXq11TxRKki7Ej5FMW7c8S2je",
  "key2": "2c21dRj7JGXTfQgCQNn8ePeWzEhm8GqaF9PLEfL8TiNBh19npz5H8wCSpP3gqcRySJCxqXghwKQQGmg1NjKKzExC",
  "key3": "yPY5fHvLN5mF4X7aDeu3PBqLhXHP6i6mE6QjGikf5wWHstDNKPzAHqFmsgkhEVTUX54ypYb31VyvLLTsRFhFMC2",
  "key4": "49PEadZWyFfw7DwQfJrBCsSgovfbiDwA42k12U1feSHVbfyiyy3re9gvNRTNomhvpVcDaa8byu7X4ECCbK9QEWMS",
  "key5": "ZX5ufwVhrK8rhfQjbtSkQvpEenB4fponQR6nsPdCV7rnatQTNnD1JfHcXFAjgw2R5yQhKEUDVcj7PsiG43cCQav",
  "key6": "o2CxmxqiL8VJxg6HiaMof56exDdND8rr6LZxwiqt8tMRJ3fo1xi2h9gMsd61qP3phEm8c41dGhVxxNjkUusm87d",
  "key7": "3XshoepLcda4BdNRTAZ1XT2MfFJxDvZcHkMfENQoBaLeFcU9YfrZCKYsLvX8XcEeJQmSb3tubPZH43J8sGiJFB9N",
  "key8": "67DHaEVJaXqhd6w8bthLBa4XE9NEP4APQUg5cDsWZKwWyXu6jUXCAP7skFonYmtHwd3t6mpPhczcviTgGYwqbfe",
  "key9": "61m5T9NVBnupajEU3prTcFEVQKgNCRwjAZu5S11xLDGEnHVXSxW4EB56ZvCJoZqvCr9YFnT8yn2SCdJYnWWhjDDa",
  "key10": "4soEuR5XKxHRns8Ac5BoAVvXMhZJwMD9wacgkBN96A99sPbcbDqVYwGH7fi5d39Cecag2cC2L9cowMqQkMpHbEdM",
  "key11": "4Bbzm424KJkAp5XYkrNUFji1r5okb2hMwBTgzjfBUQSFuj6R972AzhwgW3XYboETVJ8a8JiJmSC4WrxFJpMbgsA2",
  "key12": "5pwSWHDqxhNwZTHJWmvoGGGyPGuKjPkCMGcNv1drseje59BajEmcRi1kt7hqziZCwWwBvE3uSnByPv3TP5qteSXB",
  "key13": "4AxPS5rwJwCqQHNS2cXncJTxLA7oxHfCiBggkrs84CT2d6ncuyfcfd2p9LtYspropKN28jJFk9wetjmHGhcsqG7L",
  "key14": "5wFh2VCYhooch88KpdCF2PHH4jAybP9fpaFYgejSEVU2e6NvvJuvKLg7usgQJDosHpruzJe6wqY2xRJVZsxRa9fP",
  "key15": "btiVzuZvhSdLVBKukN6U9BbeRXJ3cYKQqQjDYizncecLcSsSvr3CFh2kgAwxbR7an2bzLRgCztYCsDrLGcUzzuD",
  "key16": "3ixg9Hn7iUQDB8JEMWqquArNZbi19fbMwzVot6QKrv7kAdmgwTCr6LCyKXLZqyB7FHpKUAy73PU8WfenahbeY5X3",
  "key17": "555nEAzY4iVs9Bejyd57LBoubokNpNffRA4JyCmQ71VHVEefW99DSasVMVToqYqAptK6o5r7vcGadXdZiaB6TCK4",
  "key18": "48WJEMq66bEd9qGssK7LtbA4vuz8SjVuRJ26LkVNNk9i7ib6Y74JDEBAH1YRo8E32bWbSRKEr9zdnpPAXDfcZvNB",
  "key19": "3ckjHMja5LpyYHoQJAtdR3eMqCMcskrKVPWqv12Wizpsev7KN3jnsiA8wc7jnx3QXMfCwicYuApRWMTnL6LePoJV",
  "key20": "3k1NrkzMjC7EcFf6q61vESknSPL8zjSp2VPnogE6vSShEGm9jnm31pkDkwrutSHJmmyWwZ8nkbJcCou9oo7PLdZ8",
  "key21": "3UL4q9BfsbzCMYFVwcqsMihUvaMcPirg5RKDL54aa5bc1JSr6wHiGjv9M21E5dyt7Gtp4hzQ2hxLoGEzhE1YrNeP",
  "key22": "2s66SY4jKtti8uuePa2VEZMfb92UeJvEQ5xK5QEW4kVCpvvnhmzAyDcYgnhGG6KhZsoocdrCzAhBTz3PnaoHWZCg",
  "key23": "4dGjtzPBfjn7NDA2itnMM2QPw6QCFJvEpP2MVWPuno1U4XmmidwKZxkZwMBm3p9q1EFXcLus5zdvtWPHgnovYsx2",
  "key24": "wNLZLVoqumQCaxZhfm4QhoF2pnqgrgBG3cFWoMppmcVZ3TW6B3xV5QtxDuZy9S2RNg6Txcqz8YLq1N3BxJeW7cF",
  "key25": "1BtXTZeYJfAsYoAQPUX395u5Kxb9ti515madUbeRgQbvZCgpynBUaAPKt9EGb2JWSHzAZvRa66AAXDXPgGARh4K",
  "key26": "3BjibuivqSoE14Wp4YCkEqrRVtWrJjt1ka7jhci2SegzWP75UaRApm6qt9DFuWbqsMDA1T3FitmjkriYZc98r1eT",
  "key27": "4cprtKWxY9nPbJCTLHHX7HB6b3oERbWETNy9YszfPCif3XfGK8s8iUK4KkAQZnrqYCnTMdf66ToZ237EZtCwsiD",
  "key28": "5F6rd3Rne1v7pDr2YcraSoy9M3GR3VfbNcxiFdZCz6gBCjspRjDmHkJNz6VC2cE8jXwjdeL41PN5i5LVjgSvxMuS",
  "key29": "r3Zc8gz33N3udNBXhq91r73UQuDLSbQVMoNNCr1pYU9X2R84WTWpMPVW1tgSAMRnpGY5ZanUZPaqaw3xNB36d8b",
  "key30": "4KwswRmgwukqcECA2AGvTchMWYwEiRqqm9duFkJg79d5GKLkFbqAe27YPYD2WvLQburV5gWiWhxwTUZBbGgwsuH2",
  "key31": "2Bitk9XE4vNz6jS86y2Ze3QmCBRYpvXJW1GUkC6RzYR5rSZgu5j6rsGg3EcMHMqKzj4A6eZx9VM8frHRHThBR3HZ"
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
