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
    "3jJhaFGanXddVAeo9tUFQ1CgtYSU3Sgp7y8z1v8eDvGsKoQbLH1Wts4iq4XCeKJoUm86cr7BZSYyMPrtKBw9a7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZdScnDxe6sQhrJ27BwU1Vo2TPHRqVZHcomFGJoCwrLYx9Lbp1StCDdjUKdaHQMQ5sDwWL927QMy2iQUz7An8GJ",
  "key1": "3DLCGHkbcXufexFeAaKYLBvmWPnPbS9VMhxwDdPg58bxa9r9u1c5SSmS98ZvEVeY4RHnNPRjh34nQ7CP7GfqLYHX",
  "key2": "4xEEtfHSYYpMBnPqqzfdgGvPV8gumPjZPxoNJmFiRvSkTuPsPjrFUhUTW3deboyLDNjF7RsKCapTfWZYMEHoLU7Z",
  "key3": "5MBJy4cEHE7XQurcdKoZCJaKnptvQjqYGeeWyBNAoiWFomGKvaNvhmG32xZuX46PA569WygkcSHwSzxQLzV1EaKo",
  "key4": "4piZ6rt1vXjuJkpm4yEg8YkvocMGmaHPfFSoKSb83K214gvu8a86xw4DvYi77EbYPXi4sifsr2u1jGc9UMsGnd1F",
  "key5": "2ujrh4yVfwaxqXUgn9bPMmAWziJEUA4iTHV7q4w5muwc5bQFvy8pxeVdoNKRvgZsds1iXKr8Nvr9LMgbfzBVbH4r",
  "key6": "66imhPx49j5fyKAqiRaWFgHp3EG9LAYemDeBfVzjoCrLihnNP9vKzpUVHChABkuMNSNUPixJ4YmZSKdTFaxTQuWk",
  "key7": "47JnDVXTvE1c9v1g9P79nQu59EumkBXHEky5CYHpD4ACnqaWdbcyagEB8YBLqH9fdnMNMy6c26B8aLmgsfDM7wnF",
  "key8": "wySkcZcGSPGgS3RHCm7oYV7TCVFGmtao8ZFr57NTcKRPAEoRf8ekfFW1STvxG1XbrsSCVjqdvK9XukHgTXJCsjA",
  "key9": "4QM5yasoxbgSg6RAQG18Rv2bptxmXwGxUFVc2QGaCaKP6URxnbjbbVoZoaPXbEmP4fRJTSGdkNKx1Y274BU7Xmij",
  "key10": "5sZ941UT2Kw2XENgDsZ6DBYoNDYa6XdvU2BFAFFRS3U4aQ9WH8byCcSTMgXtVzRnejjYeTySxYXRMjqAH9JKW8Fe",
  "key11": "3BmgeTBxddufpiR3Mk7rvGC1dekRHC9T7jHARAbp6nrfEGe45GortfyfaswtXHxGdA297EPYHm3KbZGhxGUgwoe",
  "key12": "u8LMEvZFMYMTtCiLsCw4iiXczczK2Gfr3vLokaCAXeAkKp7uFgh6yHLnXHs7aKfpcdS3VtgWAykspvmuMJQKNbK",
  "key13": "5HJWBwDE1bnjKa4fbhdFVormojtU1eR3xJcBxeG7BgdTWbDTxozXgatVWTAPek1gF6z5WMPwkjqDRvwCcZrK8ayr",
  "key14": "iw7qVmECZ5krTkKfku66QmR2BZSazc7bqkbPAbe9mc9BuqThFcAozMUTifKHZJTAAJScoXTTPh2P2mYGTijaphY",
  "key15": "52sE4Zpg8fx5gmytTuFQkoodtuWbpegvp4C6BTyP7xaoAVsDH7yLQn7LfjC9skm8Xfjkstpd5ZmgTHu9LXcKwFX2",
  "key16": "53tyvKSnX1V7Tbwn8pezab3vidvCF6h26ppLn1YuBG4wi6avtFxwiLUKkWxzApvdzQHJLL85ktbgZXAMkhxYyTfC",
  "key17": "44A9BNkVcBZSrwtdMMtnUKRAUvpHXM9zNKhCXU1tw5ffDbys4fci84z7hNBcZwaEn3NcRDD6eiqGe37a5t5WJv2i",
  "key18": "2ESXY14f4iHjuiUot6ecA4EmBT7nDEmKWMGyNSfEEHqCd2XoW5YiU9NeeJU7647cR9yNFfcaBNEbx82vwmZFkFoN",
  "key19": "5Xyujb5WUfKm7MCdn6yc8Mt3qa7K9dvriMUJqDPTQJp5GBSFxEbvRREe55zV7mzREtHibiLQcFeMPzphJzewVcjt",
  "key20": "2rnEovTpHEwRpcPGeB4YFXxtYt7JddajbL2HD5vBVFDKQkGmpTNbaef8C4JK7zUWaGcwggEtAvcVTHmQU2QWwLRg",
  "key21": "4AMgiZHzRPaHv71kNq8Jkc6ZjPDyNQbNeBaSkzepp42eXA1yzqG5FkLib5P7rp5HmpAqqC95ysXkcsweGd84trJE",
  "key22": "2jVCHWK8uPETa74bc6y29nWjcLacfrR4ysgjWz7UzeEozWCeSrLd7QECDVL2WFPzbV1VAcmewhWuwgWCrxEEQBo8",
  "key23": "QsBvzwpnppDCHczidQWjZW2xb4RPDY91KXYCyQ5Pj6xhmBUhcoXMX9mfVwVxh3u7zpWeaUywAsMV6pRnkWedcbU",
  "key24": "mZ24uggKP2fpZ3z6mA2oy5ihQ75HyhgZxshaoQzkHQ9K5H2uebwVYF1yCD6D9fyHHc81iEhPUJ6NCdsi2ncMDiE",
  "key25": "2WyFnzmfwkZQHbTTf1nLnZ85iSPFGXKS74WsHJpH58sNTgU1ayFps68uuRR27vYBW8RLo5U9kiSsmmnE3u8Nokag",
  "key26": "4vTuD1hZcDSn5kCKhbbT1FUY83aC5dvTYedKPw4kDYMqQKb9Wp3mXuW1TAkGHe877KnwpbhXrCyfNSDsWhgTwczM",
  "key27": "3GZX6wQtmhHKVUCKTEMnvHb54821JcrVQ3nm6GRetWWSopkUsQ4UE9jBz6FQvHdxjcC83opqJD6EdT8y8kEStJfn",
  "key28": "5fWXmVVtiPpWGkpMst9isDRtKDGrYE2WkX46cxHwZJExS9UvyFz1YfCh9Jw8eMQRhBjd8P9fGNT8phpCnPVwbuZL",
  "key29": "2mKUQdxERrYMuwsHRd9h5BHUdu3fWgvc6aYHi92egVgxQKBNd6RNyymdmPtFcfnF14EhobK6e5pmsXZAE2hwBM8Y",
  "key30": "3FrjWTp6p8iUDyU6DgWJaBPaDidreDVm1XJeXFLXkmo5JepvorF4FD2WrauisKPTwCCtetiTdtWE5SxAHkVBuMRt",
  "key31": "wRAsWf2PyiLGRqry2fX5QCzgKa7QasrD44p85ZApAEDwbn7ujj777eRwrKghnbwKKwAHXoBtnV19W1TcaH4KSEy",
  "key32": "3FHD5JMzthJko6YAeLBZyGDoHJZrrtSs6uEQLJ9RHpsszuJxL8ErDFMetwR5jZMtvn7Dx4aBvmS33ooJtu22jj3j",
  "key33": "3nASBC2fNybYSAi3hBvcCZDUg8xYVgbziVcz4TpwH9jXQZWbYaDwQkAfuRwgCwceGFPSP2sFK1WCYEFdivP8dfSf",
  "key34": "2n6CLssmPeWxRLws9ZsCWA5x4Ue4VfN7RNdYMzD9TVYbrnH1sorAU2nmTDfQFUznsRzQjAcVHp5W6ERpxrvBX46H",
  "key35": "c6A86bvFB5cBTzpW2hECBW6xMRf34fMkJCa42a7U4jm8sV8Zd4dFnfquht7Ux5j9YaFyqgjopHG5kUgkf2jnAfM",
  "key36": "2UH1dUYEUKmVBDkMfKjAAzZ6hWKDu4VNdy7uVkQr7XoorRkC3RfCRJLjAQKvza9PS6p4YKXk7AnTzyHxfJHxEjGt",
  "key37": "4Nm5o5AFWFJKYYvJrKH2ZV44m9iWYRKPz4RZzL46dunE2jUYP2EZoSdUeL5HibM9D5RNCZusNjAz41EMKkfqPWsn",
  "key38": "51sFXAWWe39ZkSBzDCEVBLJmKdHxtQ8wnhfrcSYYeNMfkgYbvPpq77d5gU5qpYCL2THD1hLSVUBhgRHxiT4GzX38",
  "key39": "4pmLKgdMC3ay7k5Q9PZV44buysSzt2mytjiVsH41edscML1TwqLXho4SipTwiJgoPSgp9xAEVv46YgqPihX8UGin",
  "key40": "4oSv1ojmoqTAph9AeiyvNDrPn27SGrki1CpA5oQakuM1TPY6aJ4ZL3C69z6n1c6YpxT7Epg3RDFzwckzAGgeR9TN",
  "key41": "2pAVkre1DM45WjfT7tJWohZK4hcRRS26hM4ADw9ABiC5tB75hyRHKXkeDFegAjYDnsXSxDqfVgB9R2MfShuokTMy",
  "key42": "4GhdCqBaRjyairokypa7u5jfx33JtZNBvjooheUP6Luo1cvHgCgbhLmescA52T4r2vzK3MdgAomeKDtoDDD9CgZX",
  "key43": "3jCWvSAUYh3rYYd3EhRHzES8u5dUybTczGNsSDVeQkTgCKohJ18em7MFoer3SBbC3K2jvfA94o9b3LZJcGYni5uR",
  "key44": "FwVCnXRNW5MiD6dwJn51uYRdQmeZKEGq3Q3k7qWUasRBtc4sPs5Q6eUAbvA3UGTRSmn2PgQzfi5b9L6Rdx5xBj7"
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
