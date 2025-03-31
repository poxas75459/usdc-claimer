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
    "3LQ4rLgNSSsrDJhUp1xaEWjNh7d6kvCRHo9HXYtRyyWkLkpNc7pb55sVsrRZRVQBzQKjM2bjbpQrqEoL9JTesrQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2AKP5gQfLBBZT7HTXwDJ5tYVU6NPzLFFVwGxHE7Ls1JkXdmLRTAqk7313mQ64jAsPhM2DsAapyAusK8zscP1XW",
  "key1": "iV5zgpNxkhAVaWrroLcJFEwwzSkg8g165z2mWfGGxjjVqvtLJSTYcXLqgpQx7ktX1dQjLmuwbtsvTd6meLCbYGo",
  "key2": "4kZNgRjUGkpQ7A66P4poBaoGbzi1r8YBzNkLbvDi8WgsKs9ekb6VEPqBngCj7SUkxhcdtMEUjJ7vvZzGdQCWJqXy",
  "key3": "4WomtZ1S4oPCLzr3eCdtiNqoE42p45LtFa2G7jHcXNzzNGvv79eBvXMSCjMLoL8CcjPxrzrzpwUuNnJbs1bdeADb",
  "key4": "4y5o2PUh825y7XuF3BfJpnKhuzokEZsmrzi6H6xL5GLhJ3V8GLiZ3tESRxfSa9z9bgU2U3kH9ycmt3C8qAUaWP19",
  "key5": "N3e5G2BBVL6Yfi9zMDQbEXcqb2aUz9ASehKxm6VSjSL7nDP3jk1ByaTk6x6X5dWSdpJCbHZR72syQtKWdCB2iF9",
  "key6": "2DJpmQ8dRSAiJsBRnRg4HAQtryD7DoVkwyo13qPMVxsCihjJJqdJavxWpmA59gBQ9odbrV3RzqDDtrQKdXHqnKgi",
  "key7": "2ypXLgNAD5obxfr2QdRYJnLyNzW41JEG2GhDgJWq4auQa655RKBVNLnNBdQFvmBGJmNyn25jJPhDQb8h8UDor1Zq",
  "key8": "5hUBpQLkYrt4L78CcSVqDvRKcthAMt9jVmxUVEzSRiML84HbzgrmyEM1m8jGqRXVBhtcoBL3ipNJxrHthavZEGn1",
  "key9": "2k155KUVCHcsAQJt2JTfs9whJNaiAKFTHK7Y2ur498sUHuvMGgNPHhanDfTLf7BaAi6qZJTnhMaSXbNX2mqav9bH",
  "key10": "2LqjnR5pdGWohvRcfMEZdD6yTMZZJ7cEBZJqp3AyrQJYF5Tm8oHwoQ2p9DRE5zUiDFdKLtFaSN66Xt9KJYioMzxV",
  "key11": "jEymmRDaT4aPwgRFQYvPk6Zm57HJ7jDb3DkoqAx6fRCwUuMsLTVEtTHBedkqLNSFD4npePfnac5N4ExoQoPB3ZM",
  "key12": "3VHyitQuj5GdWmkyfi8F5onVot4ptWAxwtdnwoVAYVpMVQRSiba5ZzGWPnpQnRBeHR7o8cS2jDx9MYU7gBcmtib2",
  "key13": "gikdLwtnMxkJXitEaox67rtXpYkuc2SKF4paz1rndcuoxffAcnN2vwU8KwRC4E8xMoDhYUxJQ3b22hjgos6Teib",
  "key14": "4P7KpyF2WQsiz5YTUgWWqRze3JnEyESvUxLHUsZAkUnH8R5551tbKe9mv3umjr83rFXTu1umozkGeK1GkbBAefjJ",
  "key15": "67hcQtcCTK3wL4JYUmhPP41oXMgf5s2ioztrtp9mswjS9xUwqGsyxGYH6iNRi44iBdR6ap3MecU7D1LwKbqVnA9g",
  "key16": "4PzrDZcG41nCJX3H1QXFPbDsGdXK8mjLWEhHCTYcw5p8bnApZQ2LAARcssr6a81dEZZ4T3v2LBdF4jDjj8YwMsJC",
  "key17": "2VgrPiz6hWzryQyssrUzzfTV7uNa24dtZeDTUFJ7NPUGRBQq51LkQ6EPdMftZwyj67DRXGFnt9ciipJpYde6V7UK",
  "key18": "5xb71sB1sufBaAP5BZnEPvHqAmKPQN3MzuQzJxdCWGmLsXUvJTkqfUB1cUgQA5MXHg4tCh8Y1G5Hwotek6C37hgh",
  "key19": "5TDuKoufdTMb9RnncWhYX8G7EtKzgP5NDEDhM1pfTBSW744YE7MwVY2VveyUPTpssuPfQUKL4UqKjaZNwpPtDBFK",
  "key20": "5GGNBN2NzFzSRbkc3Qxmd4QFMAu8AyRsj1o2nkQ8oTz6vN4DmpkvjHiS9Qg4ZDoLtivsGRVCduSFPsdTjGxxYA41",
  "key21": "4UpEX6hBatYZFbrMWZtwbJsBfSZumgSD8x9a9ANBVhJqK174huLK25syJ3AFW97C2XJfrrNRFBuGb8PW4Exw5nWB",
  "key22": "4dAs8KvDPY3kU43myo49ub79SNzfLwSQpQuU8m2cau23MK1EqWLvHceqL2sTnBqUE79SVUczFW26hz4GFPAHRVPM",
  "key23": "8Yt3ECieRJccCpds6G4R1xUSNShbiQPRK9dNx2rMDASgUWbZDDQYDmx7tEs6LB63MZFjbUq8SndMshWY71aC5sJ",
  "key24": "5H1pA9b5PWigDBdZ1kaVoMdx2GRdG5g5JqRZrD4KZnNxeaNCjS9XLSDCJQUeq97jmdwGiwe38tfiX6eLWahViHcJ",
  "key25": "4CQMYYko812fwEH7uGA1VxzzKvtTZUa3YSXDGVkFo5n2wVsu7VwZjsX47Ywx7q5V4cmC18gzsv8bUxBxUuSQdsH7",
  "key26": "2AejxJHxwMuvQeKUeuMc9B7r7Py5cDp7uh8yMvPSfYsAgbktJrnk2PjB2x45oRk5aBzDVuUhDHYHJCQqerRKtzar",
  "key27": "5YJme8wU5jnN5YY7CPRoWP6RHobGeAu2PzVDWN6DQyqcGcdbxze51wmf3qMbQQqjUHkMtsmzTGDDGqFSRGMtDUEC",
  "key28": "2QrYNHNurVyGQB5RPwEh29MkWtMbSV3Nbn98fTfnM82Hh33bmHsmWVb9uLAkckEA3PSbNnGDWr4qiuZcbWaMYvHv",
  "key29": "5XJ1gJCqXGLDtT71ErtFxWU13gqUyd83wmqXBTVaAqagkdeN1xBgsa6t96GfWbmqCUox7z5rh5aiQFhX2N4kC7Gp"
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
