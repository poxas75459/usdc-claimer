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
    "33XieP6i5Bmf1FaVH2uPZJNkVBBemQJQxf4Qeav7FiQxvE3nMuofWC6fqsWV8yGpmLfZ5zQJTn65esvsFiYHSTjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyYk7HD2Nquz42yBBRgRctnLxUQYtsWQUwNcdeF92QbrL7gx6rjKiG6gqvmFvCqJz1rrURG5z38bMgBiNwqzVg",
  "key1": "5bipECfqnewwB5bCcpmH1G743e8SYtLpkKqgo48Kd32i1d7vwhLXCAgqzTHx5zodVU1Ss8vVHNnPTUDbsDGX9vyH",
  "key2": "5FDzbrFxZvCRRXjS96AwPCk2ASBjBshfjQ1RRJrCi2svtfURyWvwxiBLvioU2vqT1rhQ3gpGC7M386u7m1KpYKgr",
  "key3": "REjWBpX7GVUrC5Tnkf7Exf61xYFDJ6HgLDPEMZ5AF8LCJRY1EyyMJckiCoSq2CnSoVgnjKCtAwPsJoHWZXsa1fn",
  "key4": "5xruoozDiCu98jMBqkU6Yhh2u4iSVaUfciYi5YHYwRXNBqXcJG69SXMQqgapPggb9AfhbD2Ct2vdHDLRgwDuAeuP",
  "key5": "2NRFLHuTQn9FkqF5EpQ1Vn6dQKvAZT4PQXRQJ4mc1gsxFyYrgoKNcCMJCw7XCyjfnyxPto8tZvKGyyL4mMbqRFiM",
  "key6": "4upsEn3eHE4DR2zsiprATJpykkft9WDSBG2af4bsiwVcm5oQLK8ofTETNkqAjnjkFNq8HfRFNtoCksvfUm5iyYUV",
  "key7": "3cAFBFx98jM7aLwmPWBjw6ReB17CuSeKpk4GgxoEuM6os2MEXDBFkMA8s5vxecb9JvBnHEik8HU62n6YTm4zEZ9P",
  "key8": "477udLnH5x4Tz63Q8wFCE6FhSqDYEZo3yJdccdTWvf2vfZoxNCrNYkUgt5Bu3LeuxcyrWv9PZs4cYEwneKQWqeq6",
  "key9": "3jRrMegiLNgyZHzevvCiKYzuM4cJ4WcaXJpshQBj7evfmg4Zkim7fNCGQrusKtZaR9eUuuxEkggr1WAN1ANYF8nQ",
  "key10": "5esBPB8RNKyUU6oZCyzRHM71qfU5Guu3gRm19JSHxBJQZQYFTDT2n98n1p6xoBL413yp9qCCrncNAjQCASAuF54q",
  "key11": "4UuWSRQ4dSkycvg1NGQw47vHLE1m8aDswHx49md49CQUPgqBM1V11syCTWXXNpxWgJkKdJtnAsxVjupX36V1mZQ3",
  "key12": "5oZJsz833ugJeV8pSTzA5sHnP3JxKHeyrL3F8me8S2dGS6iSyt57GPAkbDTLWwUJ8sFkLpWu9SxEGAmRBDYwPF8c",
  "key13": "3kVA39hUJTYP69rT9LttPL4W52KkfEN4NyvKVEz4iqpgj6CSt82nQwmeGQ95bUn9aBSVxEr4g2Ve5s24g1X8mJK5",
  "key14": "5EKoZ4n7egEuVdJL52a6qtXceo3HTBF8DiFWtEqooKc781gwYqqVzXNsCbsCTbPanuXFuY4ZMKdJbbyE3ViQGXH",
  "key15": "2XVE7YChNbLnzw4XGRfzVKRorRFQeJ9U6eqHnHiZQuu3pUTxtDL1KdHE8aMHyog33zUFkTJWkYWHbZJR9gdu4S87",
  "key16": "2dCgrhGWK3aTG6cAyRrFSTT799RB7ZYdoogRkZ2yfXTUxJSBtgXU6cWtwVMPMsjsHRd7PnYb4xNZVn8aKEbjRtRm",
  "key17": "65ASyuio3U8UjzMtSxNL7ktiJjCFkcdD7b6uozJdmnNw3jJJEHnWjNov75QSfD47MasB9JQrRPTpbiKynZBB7Z8",
  "key18": "4ZjxtGfmK6HYpb4nw1K4ycHPiZ6vYU2szBQEVAAe1DHknUDajKu62tXuwMPK9e1TcShvSSKjbBjYHX4FtH88Hptj",
  "key19": "4YatLNucYg4fnqxMQ9w5fPa8UcGA49SryZfCrPg7ytdz4SsQ4PfusY3NQcASg8sBu3xRX1deWgHFXTELRVeL6LVe",
  "key20": "qB7iXnf8Ux212rz2iiq7uS2DbDBG6ScjMEmoz47Kc2T15yTPRzF1rWMZJYCQ5e4TmxMPntpPTUrqqtmHpmKSsyP",
  "key21": "5dob1u7wNNUWCQ4Z5sKuXzXJ1GrG7iibaFW2sRpbeEVMW2aZnXHMcpYSdd87i2xVyypfbSePSx9dhYyg41WsCLT7",
  "key22": "2pPXYELAvXuN4SrxgN5Y2Jrq1MevTPGWHPhQG3LAwKkYqDppk63xAU8VjcSo5oMhwjWiiDtpqobWLCuyoHQyEyeq",
  "key23": "5PCAVYaFCTjeeW4M3MrfkB3S4wPWVH5QHyQYaajvyqqfSMVoh6ot9tNGr7At7cXdMUGsELfVqQLatjhYkRy78zqC",
  "key24": "hXa3WmGrnZ85rtAkPprsLDntHG7qCyTkiNqBusRQ8VfiGCyax3YgBAP7snrBJhu3xs7HHCPBe8S3gDgnTkmLCTp",
  "key25": "CLEmNcH2cxFW33BT5qvzRicBwiLZ4xhpxUndMwm79bK3cd97qWR5NgMnS9FJcQ3JuQ5SMv8hXmR1TwFrLRrsdas",
  "key26": "2axd5uUy6fk2ZMn96kRDHiNQfXtcUpqxnHDrqX9xpMPqaNxmC1hFqfGBm8eCQkpN8Gin8r7BDq93Ej3dt5eL8U4k",
  "key27": "2S8eMZvQWrY1a9ofutYsEyRThgiZ2JmRgpgydHM5c5Ap9w6LhAMWQSzZembvmJUzmTjcWw6YBmtj8kEHoRAi2g8H",
  "key28": "5L6Q5RsopQqJgAkp3RKbEGGoFZ391Q7Xyyjd1Nyje7CbeufNeHEaiZHuw73SV1CsjE1c8NeAAmSg9KSbHrTf23Zg",
  "key29": "5KmZq3SHFA5PvHqJKdDKncVbmAvqziFTF9CxaMpZmFM8KjRChGKT9V46G6DkpRW2KvxrWJha8FU7CfUHhkmhbHLi",
  "key30": "2zHpUWQCMDwxvq4sH8A3t6mDzQLbjRFRXCZKHWtjdW6M4DjYQuSLZpuZXQ1G12GS3bKHRiEGhuizgHg3M9idaVA4",
  "key31": "4gVeJx5nbBqnW6vsKVLDqwAtP6Zkxo3F1Sd8ugntd7g6M2vpCrUYJGM92pmjQVyXyoNafFmGTB8ajXwfSe2jVb1V",
  "key32": "3HNCVeYhVqyLwbC5mFaZYycirEXVprDsQhVapjBv3YVQxhio8zR3EH4r8yQDRBNM7HQcJ8BeZ6KHKRc9PYTqrR9o",
  "key33": "2MzuFZZ2jRXnhdP4FxaNhnrCthLumh1VCSCwkDFceNUKhjpw2zxKKLxG7Y6LBsir2JR12kmcMztym3hanVG4GQjm",
  "key34": "4G8sBBqn9t3MJXqQnfUFrDMzizRtVLWCkUyXNMwLehHm7qrcurMBFsKR4ZgFaLwbRm48GQ3WHab6sxQcELocEKXD",
  "key35": "4Rfc3PzuLZfEb5vxsYmUjifDtLszAfonDuUGBkAAmeUbPvYahNwnHj8eXCzyq3XEqfMDGgSPrJUYbzGZCXWhpR41",
  "key36": "3XmJqjdZjhvFaLGq8VboCT8GbZ2dih8LFaAmAbrjNVz9FjCCRaHmnSbWEKatYUMFQ6W5F1QuHdmLHNuCBNQSXxis",
  "key37": "3szfGwGX1cJ56Lj3YHRwFB6jrChqknd1V8RGSdywFRku3HHZeyaeRpu6kTRjbdNebHGzUM1cWkkrUBXDdTqZk65w"
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
