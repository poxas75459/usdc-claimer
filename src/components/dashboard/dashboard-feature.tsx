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
    "63PSZUcFkBb5VKLDd8Egd5ij2wG2x2fWAEvMUHuVaXy5VkreiqxayK6DQfAzgcfRQerCEaqrnygMHjw5NgT6RPn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6ukMxKwkVUXMC4qrKPHsFew3ovbAZ7zbYskvftzkudFJvjof9b9CnLMPfYnc1LM69d7TKdZeSEDmSMqLqPwtWG",
  "key1": "3yacYJL4Zus8TmjU4fuxULVSA8FqyBQwgQYoSNGLQHDZLD3Mjrj3ZuSNTjvUkPwQsR7iHPMzd1mq1TdfbxNx9LGA",
  "key2": "6385QQ9rnD5ea4xcrp7gNEt6pCBFdD1cG8Qjcej4wsjaNwPktdC5sYQNTevQnPSkKTVSi8gEU7VHogxz21urs65j",
  "key3": "67Cbft8U2X3BKkz4tCYcxbqPV5y2B7E2i8Gy3dCVvaX7hgT9UBaLE4SfRUrDXJhSyxGQboyyqeRH3bPcTjp1xJYe",
  "key4": "4iUrBhDjMTAfYjHnLn1wKTsjeMStwZAogMGvWgMMoUfdseY5oiwTKyDHfi4emSJAcetE21irPKr5JWohhpnymzpQ",
  "key5": "5pGfWfS3Cmiscy2uL8evk7sD3FjvfuYRiCGoBX17apjaHdCdmHK77QaQyAKYPoGdDCsimzpBGSukaAaQhjqHnvss",
  "key6": "3HdGGx9nDKKXY9kym3opGaUhoDRsTTRGZSaVgSXwNm33PG4ZEnQ5rmHM2tJhT5GiwgzxiE7nb14NBYvVHqh6DqT9",
  "key7": "4B2QEytnysaGjS1Js3uEV4xjoTUgCCFBAKsKGfe8SUbZHFK3MuELPCTub7BeFySdZdq6CepJXuFUkw7v2n73mLkA",
  "key8": "RZTcYKTNNwgG8yQSKwW8bEPioAfW7G5RtGgYVmfsRfYUXp3QqG4AMHcLcBEma93GnJjKNdxojyRnoeogxyVEPGf",
  "key9": "5XcKPquxyDpWzHWgQdtgp8KH5yrzC27uxNr6YeRHHphSdr5gLAkV6xZhTxx6rU8rRCnePfeKv1mv9er14WsFqsE2",
  "key10": "5GkS9vvLxBeBobWWJQ8JnRddyqNpQXSacua8DFY9gubMeroBJcbwS4duw3Anu9ToYkMCmRv3ZwEcq87AkSJiEhXb",
  "key11": "3TGNmoXbapHEavG8WL5bVHPEEQHemkFZ8PGZDxgxPfRw9pgGfpHhfFnBF5yY17TZzaTnyMcNjm7uS9Xwscpxummf",
  "key12": "5cyJk4qBjVKyqEbsNkg5PtcE5tz4rRDBnugg99m66n8sY931uxT8PnQ78wad4WyHMrxxMoTzT4z99gLQkfNVz7DK",
  "key13": "oGynvpaD7h4ABcHLNBKAf8jaEmWv8PDoQqZnGX41HCvGXM4WXy4FiK24wCtWB8o3ZD79bqBiikQD9VNgxq75hHY",
  "key14": "5cJLA8u33ebmQi2yHDL2Ss9L5U9A9LMRV1sohCRDDkXSB3GeYt16aiep4VBiyCeFqxJKGwyzpJYvGUqAgkrSR9qx",
  "key15": "3ydXPJSRmdC2DS4Xzgm58bjr2unW6travA85vKDeot4W3sNTiVCR3xEzAGA4EdR12pvK2ZYWmQtzJcL2WjUJ4y3h",
  "key16": "QVw2PKancTq92Chxx43xAorcyh6611zQg6sbzVv4vH5aCn5S4uLmv5Haac8r147aRbcHNKhkWpFWaK5w4SNCrDM",
  "key17": "ZKyMwTmYrRQGSCzP3P6jxBSU374nUTJma6tHBECdsYej2kRnnsVRX86jkPH2jGNCWobas7QTBJaipNRGnpxtEYK",
  "key18": "43J9QAUJ1RQsz1yPrCAagAZCRmA2e82q42cWbxQHc4nUcoXQXWuxd4ijX7Fij78dd9im2iuPpiARf7LnPKZLkMqR",
  "key19": "4UQFmGxEviT4LuZTpNJazQZNZVkwTBmjYXM5mT7erkf7QY7T5ofyvNGELYM2eQC6b4hpmp3kysmTM9FSeR1yHJsr",
  "key20": "4CQbAt3VtETp2SrYiMYSE4YacBeGoePfdhoubTug7oRHFaoWRYDJtYyjFLEXQAyoEyEMuqtLL2kihJhKixn5WF4u",
  "key21": "8cbQNTCxHQYdQiG8uumvYUK9WQkVQaaj9QFtJaWeum4oKadm3yuLc8AN6oTtz5jdYyQ57Fk1hFbHBB9tTk4NYEg",
  "key22": "43W1FmU4tjuPuw61MYQz5V57aaPuH5zmSKHLTetYXoNFFhQx8adWe24tDys6kgtCu8pQhsd4EV4mdveybh91VGdk",
  "key23": "4PTCjzC5jvQA7s2R6kEkrxUkX3A6DJjshMgqRa9QoxNCkhBmBCgK55txH8vCVsGBbxf1oQpCbyssTpmDbxL865Ss",
  "key24": "cuTpuy88e9Vwg48xttgpjm6oFG5b66MiJMjxcfZ1yhvipt2DWhraA5AM8Yya7CcgmxoPeVJii81yyCa2mroXN9g",
  "key25": "5fjfkfwLtF2XuD8BcMu4PNh7YJ2n6kHoy5wXPRHc8A3Le9Tv48z7BWiSG5PMDMHVqVv4U69gFcAS9Q9hct842BBF",
  "key26": "4ZqbTC7jYhWRzhftNS8gXj2kXkhWDgxVzAUUxwkCLQeUAHgNoThNvEYSq3BETHUWbqKHXPFEzbeaanUsZFpAntse",
  "key27": "4FqfB1LYJupTAo5eEq5prAXWowp8yiv8H3u5L7BFmgjFYey9auNDCwrxA7DxcsrDywiU5ajLef14ZzYaJJMAKbFQ",
  "key28": "2juGxMcCYgSPok8Q9iy1BM1b1y8E3EzPXSMraAQjuXxoMh6ycYo2tKNqzxvF7iky9qtMGFePb2vRjbGVfJu3kVuR",
  "key29": "2YuRZjFtSZcwtsRi6RitkM3MntyTsT2svcBZhaCWwc2Ergsqu23GubKjfpBww6BMwo1QxLXWL9Dcva3f7pCdDS5Q",
  "key30": "5i5XSYhn7MGqhTTHR9Ba1UHiDEH5kZ4UWLjqroQnH4w54gNBeJPqUY292cX62GNXPzhNkkd6nyh9gGMVmRnJB4Bo",
  "key31": "5QJyH2on8Eo8kekoSsdyv9xwHCU7xzj1rKq6Qf1XmSYtjfw8EWmMzBUkvSCiLXdMUfaZtUUgDAQ9wKdV8qmwYsYh",
  "key32": "R4JpWoWPU6Vv4hca8bKJCTohM5wa2dKTdTk2sVY79ep2Aa1NH1e6GXo3hZ6KAvaUb9DcdpowXMok1Z8JBFzhD4E",
  "key33": "BXQjSiNuCzpqEZeM6qC3dnvTRr3DxQjcxeRobouyLEgVuEciMuBHyqiTummqsvkNwgHHcc73i1KaCR7LUWAUavL"
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
