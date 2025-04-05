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
    "2SFnSD8JufTzBpPstrbnUmuJZ5QR5JYvSAuNxeRJbLBivVvu1fRBdQPwLRWQqmAbxM12jxUX5vz19yu21tghgGYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Djw5DmbSRiRB6uLt8oBKZVTXX8qFZNLRa1mVEUn5xQmkCqhea4JkMRrurzhwzNySUqoZVP9YbzwNokj4Y84pkn9",
  "key1": "5P6QTWVtvuLxnnmx3A91bc45m9bQKtWLtSRd1AEqt9rscfdaBRn52UJ4htLidpegqRsignt4Nv6ecW3cu2jiX2J1",
  "key2": "4SKDwh2EVRYhqN4Vh6GmEty3eLRTULffYWegpzeyWHSjJLWMnco4SzzmY6Jd9bL7GNqRyk7Cjhxwqzc9VJksma7h",
  "key3": "5Poq5Aozj99szP7deg1zkGbnv99eBbh3dG85BevgdVpN13BKkkBSKFFKGfCRVVK83nJhaaJyBmNMP6899E2Hbm7x",
  "key4": "59T2z5KGWikcYfs3wWUFJNgFzkHEHqoqwXNdezpZLxgxdJ2AWc7wJMrzZSquhXtmkFoBhkwMR4M5hgRcvTzmgyt5",
  "key5": "56VNTYNyP3NNeG1yDZKzSxRoprGbDMuFzberTSc36kwTZLdzGwckS1D8rfkys1gzKtD8Y8E96WdMZdP7eTwo1vx3",
  "key6": "2XGowVLYAApqLsKxmdYKx1Gu1GpzLuY88LSh3Ed4Sw8YMVdNnAaySMHkK7DgiqGnHQa584WKHYB1AnY6t8pX5K9F",
  "key7": "5XbSuWEePjZzjSzxwMM7nwPXxzGBYx75X5wsVfLJxgskxY3J76d8Ui7K36s8Gum5Nh8EPe9xSFtFjGJQ21EyQCYS",
  "key8": "636tN9SicWvA6mri5mGKMSQsbC98CDiwfQXzAd3PFXezn3tkW7TefcaqhAP9GMNFpjtxvr3L8sozsGtHFFzZzncL",
  "key9": "2ZwE5k8Hhse1pt7J1duijJjpYr15PUT9rrif9nHcZgUsjm6dWxhSwhoSS9HGLeQSLvuUZ47rqZsGUEG7m7JK8Yzk",
  "key10": "4uaUS4Cbq2X68uq8FXHY3G6og99KeaYuN3x4WZP5acznYKPa9JXMtJ7YHs8cxF3DryXfAc1TfMwepoCfXtFJTSyn",
  "key11": "4uk44eD9xJLX7hk5637PJbiUWim3x6hJRZVhsnuhmcNtDLqd9kYQpaypcF1kS7wxEZr395NVnGTAx69Do1SbkghC",
  "key12": "2kphbK6LiNPFAKG6YCYiNqhteTKSxVcu9aVKFUNY3LticTts3kLrNcfndhoQQ8biaCNa8WwR7JfiG7CaxynvYzpH",
  "key13": "3W4mn8eqwP7JokiQWLeyN1W2LSUyE2nkc1vP2DN6vauEm3Gy82EDfh2pukoBbHs1TmwqRpowpki3Z5u8aTcjsZHi",
  "key14": "5AAbvvur8VygGrDfeKBYQ4rEQrxu64KAyU5YN1u3EYBFYsi7UCX7snMpHT76wkV1WXrHFZUo4ZzeoDEt2spGEgCW",
  "key15": "3uWoKZHKckZoLwGEkXydGZ4U3XaY3AnAt7AJdnxhLgyQqxm7izLxgYhQgZqBUdKG4nT1QSpeyYJTvQZcQsJCgeZj",
  "key16": "duxm9CDGFe6VpKfSGQ66zGwrHXwUzGqcHC5QSd3M1nCU5oxhEAjxxyGA6twg7rLAB2GjHLSAG417bAqtY2qyRs7",
  "key17": "5yZ1CVsczH8NJkkcjdSGxX4noVBDFH1vbv3M3vsJUVrdyhRDyCSKf1gwZbXKmoqHQGQpwi3QuVzNUyJtQu9GumwH",
  "key18": "46Xura9EJTiq8gWFkngQt9n5o4vv8C9Tc1s6X5dfG9diNAE3aRQqvxWxY53JtPSJoxC83EUGttHZdxqBjBGryA95",
  "key19": "3zEkZvRMrm2QyznxC2NffajKDRo5HZYAwpu6g4BWhgvRzr7e6Wm6URSZ2PQT9i9jHvpTcyygNBHeJ1X4SEDHEqUS",
  "key20": "25PTb7drYusQoZvWxh9djeK64ATs3vRRnZAvfDV2n6owRdCu6dQtraPMZTkXkwoBoxCRHe8K4WjxX9oEb33DRija",
  "key21": "1JmjiZXwUT481zTuj7simjrLVJSR3dzavnvjWYKvfnjhDMrf15fx2eVFpM1VDzSc8qyxkzcDrKGHSnGSDzH6618",
  "key22": "2CppTRXpsip4XCyuXne1CZHLGaAWSLFG6yyAUZVLsJUcbTyAoPp3Pw7CiEo2DPp5QeantcdFCB66Qtb8mx9Cm5Q2",
  "key23": "2oUUi2K7fzUACNtQpCncUJvwAVSM4saiTVkjX2CrY195S3z4yFXRRzhJFmETbZgxzybCzASZDYkEEUJEuP1ahAsb",
  "key24": "3JmmAasr8cMACPEA7GrDTkQDXRWkv3tGGT3AS1Rgarsg8q1boBMGS6D7urm2iG8QBPsxcD3o1T2j61jJ8TyewKMW",
  "key25": "2eCYpwEnBVPhoEtdwFDmxWX24aaHxwzH4gHfGUNTFiWzdLC7bQCNBTTdRHidKAUzNVdEKo163AXBhkz9JXohK64Q",
  "key26": "2uuey4A9Y98UGnVAMdVZgoWTByqmG8W6kUDC8GQ7ZpTYJiJTtGGp5rSPGhz924Goh9gRjrTvbg5QC5fhd4T6fMWH",
  "key27": "EWhMebuXp7WtfEe6k8nxgcyS3JqPnGZNpgDdmB1nVAzxfjMNoYet6ntEQejUV2d57oGo7eqVnuLrMm5C6Tu5BSH",
  "key28": "5wZeUNpmynU4FWbHv4uVNrVibac87SzELyfouTGohyKRefh3EAhJAuWof9GWzKLiYoNZQtSgP6hrJuGhFRjwPccQ",
  "key29": "3K5SB5pjMz7ovMLuYspqjME96ShG5Z8Meh7YPL8n4SYRtY7zDviDEVPH3rmqGphZb71A6zya5sxzDWxdzi1MWUHL",
  "key30": "f2ZvWoVQbY7J8WqqdRn6VG2kRGfxcoyv8YUY3ik1tMTR3zf2bJp429tyCuuyJvdKfZhHz5eVGCJcWJLhepPFLQt",
  "key31": "3oXYUHYZc1FFSzjUjpemmLXHNR3PSBBrTAbNSK5aeeUDtjYDh42ztpsWv5sRhJsC66RCjK81F2mCxjoZZZsxfm7u",
  "key32": "4mek42LUQGYvGz2j3BqjPm98spxn1tCY4K8w5VGDpPSJHtwCEyCviQM3QPv1HjCYSkZM5ZW4f4dkgjhz8vP8WUzn",
  "key33": "xJ9zSFTavUsWoXdoc6fC886piV3Z9FQcsh6ifH9ZYhoVYL8RsceksnjLxZ1fXGifmCHsvUiu1qjqZkhK3iRJkkN"
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
