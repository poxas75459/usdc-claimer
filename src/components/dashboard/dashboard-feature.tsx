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
    "5AViKGW2kPrUf5iMJhXJUooAgXBLPZQYYLFmvn3z2UBwfJ6KVrMXcLiH35HBani9Qura7sGGjr5Vm3Xw7qrbjbNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263ZHKodvVAU8rFuMGKimPQPzw6Sn1VPRSszDuJppa4bAFEL9brGurbxoKz4oCGCsPX3EfM24udaHUAXeiQEDfUG",
  "key1": "248sms3xeV9jH58vWMXLXmwqvdThKwqxYhFFfeNNd1ubuHX41f6yPTedxBtVYo9Y9FtgNRbGv9SUidPonDvw7n8T",
  "key2": "561ejCNZQLnVC5KTP7xpS6c5eJB2PRgESfNENUyjNgtmR6vfkhFFrVVtyRaUa769P64A3tZEWXEjkFsBQ8TMWb6C",
  "key3": "64e4XXsVbxomZeMhVmtAWNukGWjNEmNpF2hy1bCxscyqWbRAhPXr9q1BoRXmoJoYEYuPkBvghQy72LT3E2jPvm5R",
  "key4": "4TFahmp2NaFjhhk6vMo6P6zngFdxAKpN9xRoT6rMEV2UMP6L9eR3hGNh1HVRphS3Pngo2omyFVZoaGBGs2HM3WRV",
  "key5": "3NynbVG12VnggP4XrigtRh2WgLXQC42Mc7jfgaS6WXps2dbqXUYtQyS4kgx1TDKG4eDY6Tp2XUw8WVMPz1YN8K6X",
  "key6": "3cT4bkEgjwkhkxTVsUVRqysf1E4MRTiHjE7awevcjJEJK8me6k9i4gTXpRt8oY9RjXTngMkGXDnSC5SgXGWp4BQZ",
  "key7": "3Q1KtruUqqC87ct5n5uWzRcVcXXveFn94vN6oeTAGXqzV9ia4CjQRJBfAy8Z9MHJMBVRhgm6BwXPa9ZTjDSKjmEW",
  "key8": "2RaDwTW1ywNc6tZjWvxEXy4xY5LnaV6vrNZzygf5rJiKGfLe5NMaJsyPvwnRLSFrNPqK9f88uqAc1xr5nTBoa2NF",
  "key9": "3tKWzaw1nQjD6oqNERKHGmSveLNxSnf8RJD5HdppXtC3ne8zDi35azSWB1R3jKeuHYs6EX8vmXCo3x1mbLwtbV63",
  "key10": "4H13NUatrLC6QRyhV6RxbJHwhsb7Xtj8BwQb15AjqzxHwu9prVZ4ccTZCnyty3AcNzWgiXyBDFQnNmuBorhHeX4A",
  "key11": "5ZAkPBFJUh825AwQxPKYC4r3rHHMsLqgmELB1HKbiwA6hvQeKnXqEmhGkD62vUzsTc1zvtnVVfmMN1jLBQZ7PTkC",
  "key12": "2xpNftxR2qKNQ9HnBZHUnZKTxtPLLQTC2hiDKmgpdsPHP7VSyDsXe6SF2BMegEU6yeXzecJDx36MvcjFoEg22gni",
  "key13": "24UNp9xsbsCey67qpooSwHN4yobnh8FZQtJ4NXwEwkMzHbLHEKE1rqnK3KojRJESVhG1x9smNStv82vRRzWQttvB",
  "key14": "4L6qmcnuEMpWuDRZBNT7pDkHFHwbL4tjYNBzbesXfrbf6eusg9WviSEuJb5SPFSi7GG1LprVqhNTsRmcMzp1Y4nw",
  "key15": "44piHbfBXdM4SpRhCLEEQsRokqzKjTTSv28Uspnhq9EQWUPJPeFpDEjogKDN9xGeAEyoouvj1zRCw9KxQN6fG7jz",
  "key16": "2GccsVUQTxDkukeRNQt8yx9m1gwAAFCpj888mH9Jxcr3gBbehQL6yVg5AcyRKuv3qpHPJArNi9Ef9foG5ZRciK6E",
  "key17": "3PsfiE7cFYYHYher5SuqyD9tKd2ukBeBhX2Wu9W3BCcxvYcJQ9yTMBMRSrunv6AoykarZDNxt9GCsnkNQr3gejEY",
  "key18": "4qzXqxPHz6AH4vQsFHx3XTd1cx2W72JewEUhhhd4jHp4V5UDpx7aFicvuwStxpAR6qHZWNLfjP4MDmHUANqnSWan",
  "key19": "63fPivi8yJ43Gse19t4JmAZkWpmaDWnw7qAJo22V84mrw2JzgyUjCyxERutyxN8QqCMsbKePf9KHBJUfZbGPY32n",
  "key20": "5xaEK1xp9axsxb9jMr2sA6i9qtJiV3PdSFa4BJezFUqhGsR3Z4wUP8J2QMC9a3GPW1hNYLERSsQ1Nnx7CkE8Ks4Z",
  "key21": "3nCM5LQHNYYCoUXxtowX4XxdCMVPhHa1KnMK9QZbb5fNsC9KPo6Gfo5TQsp3iEFLiavfqVFkpGk6CdnsBZXzg9dU",
  "key22": "EFCaoe4aTuKGKFFXG7M32LP3vwaGNfYxAiaGa3gpo6yF3LVJWCTbeaFy44dHQqjY5sBFEeFeyx8cBBQ2K4hcvpA",
  "key23": "3utTuCzi6wawejPVBsybKGDYcTwoPh9aNSsW5Sa5fizgKZaXFzRGv4s6hFvey5QenWoudzrAYX8BGnfAdiVQK3L",
  "key24": "4LnWXDGBU3cg4K9pyz7t11L8sJsEkrDfSiyCLQbGTh47hwRxqBpUyXQgdQvabe7HUZCoAu3P5NihVA2Vb8i1W83d",
  "key25": "3ZxqAFuagTAeAsRPfYpw7mfHu1rrakhmxA8q3C13fCybH397VbNyt5L6ECTJ3o4742VYsgPhUMWzYx27qhrR9Lhq",
  "key26": "2qVTiZPEpnUAJNxUZCwg5YNDwU2EeKQPyHJmx223RCkhRf5Es4iDrgdmiv4GnmJCT3pgtpnpaqPms9py15Amdive"
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
