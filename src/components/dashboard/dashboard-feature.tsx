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
    "2vCUF8s3ppwD6VfEQifGEwN7Huevns6UoQW7F2m3usq85vXkXsMo2YFBKx2tF9t8mZCUdPhqYxUQprw3jHbdnuQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvQTu2kPTASdBLmAjfijxZdJ44jadbdfqeBGpzxiMeBqnJWbJFjaZ5D3ifwq7BSSoNeRwheMB2BUCggwdF555Tu",
  "key1": "62uXa73aEDcBzZhmYuttWLmm7exLXgzXbrk5mnt3H5ikNrJAZomQnEToCcN24YjzFAtT9FoJs7pSf8b7tRnz2QE5",
  "key2": "4f4DhYYeVUBpjcJ4tN2GLPhgKAjXfiPZzGe2zWj6G8ME37dW3wA3i6K9LgrdQWe5VipRMGvdJ1XdqQfZAcGBDytn",
  "key3": "3MjhFPqqE3Wa8MH8v8eXW3hKdwgojRhiRoMUneBuS59d55dVpDJotA8jkgk7pt9sU3G8sg7R1xEMEn3khj1wzmRS",
  "key4": "3vaeDKLcUDLzaaKEExdjVjt7w5pedHgYveqtsJcEXnSxk26VzXT4dbi1B1bEjdYjpGHeTa7unxTibJYXitpsRSBQ",
  "key5": "8rGPnJ6zycFuTmVGRRtn4cPNEhdratqYtxt6uZPMUAxWumu1NUXkxP2fqHrBu2jctqUMUmB7pe1DD8dcGWYcpPn",
  "key6": "2GQQ7pQ2XEgkfXT1R8pLauYiEwcNL63LE9eDuT7Ar1nJ8RGm9gKboaJWJPgD5FPq9JJ8JFxeMzE467qCVYkreAih",
  "key7": "4HwmjeeXuwq634nr74rNwwMFtEdCynBRVNrzRsRm8rmiq34HC2na3LiPtwRQug9DNEwMChNKtq8PgA8BwzXmHpLY",
  "key8": "3gNeXUbbUUMSzowHPpq7Mb1b9screKMwQowx3JhYuwAM8BoPwRyBMt71YEv7RMaBB6gQhpE4f5Eeho3WRQDBDfQw",
  "key9": "tEM5ogEgPS1gAjKQnT9GKZRPT8jmjsRk75DwDRJZ6ecNFzZXsJyaDyvDdf5ndt4FoqYKm21hEHdVWeDd5VX4w2H",
  "key10": "25jaZuwHg8eWZaZAbp3n9WXX46ejsbZ2BtK9jSitkhdx3CxiTsqPVugwTj7vmv8CafFRCENpSJJUgQyqEWEKjNiR",
  "key11": "29kvny73zVbAdWxffnujyiJ2U7iTGPxBPg6R6capnpCHWzF4fP9skHSRajyzgMhXnWhzmJtGHVvg9vv9DNSa5vmV",
  "key12": "4xHcKtWDLogP279oqyKS8EfhftFQM8KiasMAtN8HF3Ee7Z94PFD9KqwQwHX3d3pf6wuNVSRJVmQ5K6GYnpLjQHuT",
  "key13": "4VfHyJVKdmcCySeb7qni96BR7U3iwGRv6gR6rKfGnBw14VehYd6rMWhZyFSw9GRX4Mbyg8dSVt7AdqXAHaTcvHAL",
  "key14": "3z3QR43QHaq41iLbeYtgskqUJgDd34dJozJL698SVypuPGHvip26UwueFJYMjA7efxaQ3yQFeSPPPBMa82Ck3Eso",
  "key15": "3wDxqioCjzLFzMazGmoo2m4DxFi4vLKuTNTf2Kmr6dNyd8DDEah5EnmuMEi4NhpoWG5DqeM6aQpecjVdiBWL2etN",
  "key16": "5gaGv8XiPpen2iKwizASBSsmDi4chUuzSaWHzounH7FdqMkM252erL5We8pP1u87fah3qak1nAE4aW4UeAMYqBRU",
  "key17": "3K6GUguDEi7LsaGniyJZLqY5sRJTfkR3EFT8d4TdMvCo9Wiu2wtV1gs2gFiVfEEi5fAs35sHuLmyDnJgnnzYHfwA",
  "key18": "281R8L11WPHwSBpPVvdGmhunNj1YEvHX9aoWk8Bj17Anbo5h2x8WGcUsATMoQTqcX7zvT1Wd1LEohitbobwYr2h4",
  "key19": "5KmBYCcSNVe6kKHMFCT5ABH788NVRkVLY2wsZkGaRvzkVUU6NHUmS2gFTANSw2ZTcqEg2H45i74EtCVCLfEnWoyW",
  "key20": "4UyY5YLU7xe361xswNh9zBLjETLwXoW7TW9UVGAsh8QPQPLr2RsYt1Vyt4EhtCwqyKcV1cqmXsXe14jhDeePEQPo",
  "key21": "2n1h4Dc6Nezzr5LYVaDFdh45jRmQEhM9z4VkgCm7Bc8d1zm9SSgSAKCnW95p4teiAdYaWcZGmQciLTunLKgq4Nrf",
  "key22": "EmxUypdm9zfBkNjKTxpZB3P65Akt5mHWKj5gfTwshbg6EMYUYy5ftTP3xLcrE97JBC3LEh59qsvTfjYBZTXYsi4",
  "key23": "4fN8uidbquitRVkkfPehtgznWgooEsPSAMLiso1fjqkcFHPzXWXFsHX6BhgedqKBxjcigjkdBUXGtxjffbVM7A5C",
  "key24": "3j1Kc2PYkovYKqiV1SckZ85eizsaJkcJZT3mGZeu2xCJk3ALwwJto8uJTfZYPEWQCRQWMPN7e4qUXmrAbuavYt5N",
  "key25": "d3PD4dWKPdTLnLWBzkvfHf93Ry8DU3YEpurUU7SAPEzC4fpcoBmstwxBS5twwNX7T1Q6k5DJJhLYZUZgrPwzc7z",
  "key26": "2r5YTN2YptGq6z4b6dcXHiD8X3Ee6UmNv4M6bNBwTYGnZMra4fMwijGUKrdFSbmkPGd99MEMG3skJxa9Qc4yE3GG",
  "key27": "5ritL35tjn7HAN6rP8hdCQ9Jc9ey57Hz8WTc4Kr6NvkUavf1nohxYxKsYn3xzV8GaRF9pjsMMGbU8A63feEXFBze"
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
