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
    "4zS6izt4fPmPSQhF8TYvB2CnKhaPFhKs6ARqc1TMyVRSwa7bHwsqXXSMWeNGxqbkmJLJvBGPnTq2Uz3UgBz9P3fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3i8T3RUonaYeEspcTv9jAWa8E9iFa5ZM7X981TmRihgRg1p9JbguGoRTJfB1JtPpt9etiYZjcTe37S1mBhwA4K",
  "key1": "3DA9VPfsd2f79Y3259KmsCVZ32GAGBq6AZyNFnTuow3B6RXwKRS6e7gWrypqUGiNgtUWgjZLSRETYdYRFjF3s4W8",
  "key2": "4EmNSYCtiZRopnqtAPHKodLHLsZTciKySecCz36sczv4zRbUvRVMieiCbdced4WwRNfj5Weso1SS7HhoBWdLZFpV",
  "key3": "2vhu7vM994nRdjVx2v5Ur8Eyvqh462SNdCXn7EVcp88EHcBTGbPfDfTYQdLo869aHXEX99dHFegPD73eC8DT5hU2",
  "key4": "3kzLwMY3W4h8TYQhBazowLYqXSF2ztYz6qfAqfv7s3WXAAi13B9qsuprx43WLhmwYAen6971C4ZQTfJy62SpTZLn",
  "key5": "2W2cqCpnURW2nffmnoXTpZV7J1U75GFsPMHVoy6r9aCyHgdu41aj8o9Lf2nuT8CS75D28NWR8UPdAFYQT28M5Vnk",
  "key6": "5Jmx53rTEL2QDkqoM8eMT1DcBmowSiA9SuQwV8WpsNK4rXfSQBTRwbPaPtVhiMmJtxKptLDEejM4Lb63LnHPn95J",
  "key7": "3DgBe6EeSC9x2AoSViW66Ef3xdN4mmk6SQ9kG7uGTLiixMFkUPwViJC8UEhkc1VpCuNuTByWaxyAe6nysSRgNyyW",
  "key8": "4xD99CP2wjz4tzAvzEachoszKYbZpm7qpGg49CixNuhDLzifrAGPUS6k72yQ11wAafsChhrpSo86cAGWDxWuQjCj",
  "key9": "4nr95PkWvn7TokmnGRC5WiyubCPwYvW55JCa8BKnE5XbS8AyEpuGYryPhKfv84XiKwqpcgXbikfVegxMESHyxHZ4",
  "key10": "3EL9T6ZYqZGqUCbJQy8B86kmiVBxbm2QJ9rJgYvGXPtej7X7At3ppExj8mbLXUnhRcwdNFsnPyf3KpWpghqtbvuh",
  "key11": "2Wv8iWvxB1GEPBsTBenBniiZfc4yF8Nh7zRMjKX1fuajPhNxt2qtDdxqcmS7Tj6NZE4bocSCMFHcMKSVnxF6yJst",
  "key12": "j7whiNNqQyvCAJM3J3fnNQpHeAeGXokHNN8CfD7cd8GTCqXxip5oCxZoZpJvLzhhtAH5PFaAwkiGRwBZZJQJue7",
  "key13": "3sBf4X3WE3odHb37iyUR3kw3Lor8186UtZhrUkcy8wAqq71DxXQGNqZYJExN7mPcvenXr5gPuTBPQTkQaHf7Aweo",
  "key14": "4WZtvVxHBqEwqesEpVoKb5GS841KDYmMNrnnJwqBGHHcaJ51RnD2Q9Cw6ZDAkHzp8N4tKv9d1KCV6yB3EKKvS9Sx",
  "key15": "5MrNqJbUHUZYcFkVFFUTCmHPnRubJB14xnEmQmFkYr1xGmYG3MnNZvYoNKBn8DRC3jtEuT55N93vrFBwxRoW9VnX",
  "key16": "2CaqCr81uw8KGSMYPCpQM8DcZhreAkgqUhXrsZAK97CFgLar4p17XQyzKcKMLG6o5mdcw7VQKQDbs6ua1mgRVK5",
  "key17": "3zppvmbVYeCpizBsuA3w7LGoe2HNT8eHhhPKJp2EM5V7SNt7tWjmr7WDuGcsRdLfYtwVfMexg5wWpREDsyueU72D",
  "key18": "3PiVadvpqcscoWgm5R1zcKBjJyaKsQ3SebE5DvsLiZweLhcXnfG7iYzBBQkoHMZMvFykMctW7cmxacqP4g7Xsyki",
  "key19": "5QCA19MVybPLaWdWyRa5QLQz9u5t1AwuukswfVQAHkoBh7qUAi75qnxAwLt7WSCMeVA4oRqAccgRhGAzeTJMBbDb",
  "key20": "3BVvwfQPTPz4Z24E6sGub6jnqtxBX6FcKhtaU3qnL55Jno8uQd24xtByZP7SVbcWY1hSZHuX8rGJ55bgtXCbMGn6",
  "key21": "4cn3rhNetYE7SpRpYRaBVbSUNCLqFXNcdVa5GyFqGagWQx8P7XcMPLTReqBZGpTvkuYCXpGmBgfnwzcHZGtWFoQ4",
  "key22": "4bkwvT1MCKsKYKyEkDUTWt4VEa9gioEPGQFtExiLQA7Zjd8n8LwDHqDNqYMspjX2zQHsCMbGNAGQri7fh74EtF6N",
  "key23": "4nrscaBxsuvtVbJRYDKN4V2GLe6EEcVMveKNiQjriuA4Z21AXz4YDbDjL6fJAyboYvmdP29LMg8aNQZ1MQx6F9zz",
  "key24": "jkWezgwcm3Z8GeYEgP8JHi2pdSKRXFUvcVfvPYB9HgyiwQF2Ep5ynmsdMddPELNJExF61efUezRq9tDturi7WL7",
  "key25": "PPdMp14r9v1rZcVnmr6SZzX8BQnNxkknSms4Jy3KS9HWer8ZJEaDbCrxrTonzUDvQ7B3hsrGNjgzoYKBSZLvLaJ",
  "key26": "2dtRy32DRRPmowuHdjzH7E89fg4CdMPTyKxGSyZUPpawN6K9AErcKiaCUDgDaa9uwxreR18vNwkPgEweFmB8BFbP",
  "key27": "UivuW27suMtTGX72SohK7VegBJHZmrwMkXKwaZYj6SBtfM6RwkEXcwTHhQwQVbCnKSHgfDXxaEZpAiNyp8Sz3Uf",
  "key28": "3fhYzgtzDmKhXHFfWbdWEJERD8y9oCpRaUVfpTJZp2TT94orBEJTJBnbDY8c2bHgzcjUFSfQH4hEZVCKxkGARxn6",
  "key29": "2kAcCdtu9KunwW8cAYSsvt7TsZNSd9j8PUw7RrvrCa6bL8aFDpdpYuzw7qQ2xFKiKsC28A2td4mpU4DZxHndzLMr",
  "key30": "3evqQjEzEkdYh5ZHVYRb9fwEXCYDzRrrKWM42F2KY3etSx4tCaBer2NsGCthnuteQGhhgNaDEuHoC8EcMx4UqakE",
  "key31": "5mUzZRidYW66CuRRRUAt6XtMoe9JmxQj9NJG1JT4BNjzkVTFo499LxAH2FUuxEeW4J9jTPmcj7JQdViWY3sH8ZoU"
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
