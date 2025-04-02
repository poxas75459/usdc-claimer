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
    "67ADZVdzTmmpmsDN6S6X3TFjSnV9JFnMmk4dph6GNsnz3St9BxuzUDHC8Ybr9DKVw1MwqBJre86eppzBDaTDvrvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mChAXpH2xcK2e7LoXzfwTjpdUCc5CDMjHA2wNZi2kLu8wuyjbc22muzzrq91F9UhpbSUSaKcF2isgFZLkB4Ew4J",
  "key1": "5N2KT66XennwWAtS6t1k86fGMWbDmsAChDcpWGvANu5bqiHuUqGUW9wWdQLaK5ei2L1t544uDn28bdzV1zS8Z9QS",
  "key2": "8LR72xdc3ytahuh1FMbZ1cqvhhgdJbfpPttrzYiFqrg3BGuEpFTcdFefP5TNMdzCndYZYmLDVnqYuyFENxzhN2a",
  "key3": "4wzCLvK92ewmFpAjmw7qJj7zVPLFPFequuzf8XVM9k1oQn5wnsgqyKb8WamkYpHeMUmH3B9UM6scx4ijNs3s6Mgx",
  "key4": "3aJ4smADVCHkicQzBC1PRswnUkQgPpf2VDwDtm476FKEisZW2z957DRifpUo2obqoWEvokNci1t3og5Y7MiRV6TE",
  "key5": "3mXNXN8pfGtYRksmvNW6Y3FnpVTp6qjjegExdsxV1WQ3uWDscRVFWf31DB5Q9SRih3EzFfatZ6ehZhJgZFwK3EzU",
  "key6": "5ZAge9qw53JuamhCWX91A3jk4z9WVxxPdhkcLyanH7KjbDrrgNhM3BkK8JZ4qHUVxEArtVAnyZDQewBAX3dvaB6i",
  "key7": "5yRjYuGUCcwtXabd8AaZQeEk5mEx1HgqJYTei9z17gQQtbgafPgwRsCqwLAfw1c3jLVEk5dv7qA4NMXLRAdTMRgZ",
  "key8": "4gFhvsWdGgSHKB9QsjX5XsEDd5YS1hM7hDikkmmgSsAuEYiF1ayJuVkx85UK82QduFGvgM1wMopWaK3rfUZA3uQu",
  "key9": "4DXKNgYpfP5wMztMAREgn8Xp3fLDe8PozvwR3eXm6P14yrypYGCHKcJVxMuaevSPa3eFqX22i1kqtcAGAfUokQAS",
  "key10": "UdJgP7kGpEUW6GSuE2sGLed11CBJD2ZT3cu5JkrTMtDXm8HwFzmWcwf4SsXV4oyFskmQkuSh5SLKVKgN8AqebWh",
  "key11": "5Jw1LQq5Lz6tEYWz94jNBWm7y152NmKd9TGPczDcnpd4SPNgcvS83tJ2EEBNgiU9HT84L424t58eYxcFQBL6tEaw",
  "key12": "3wCvtmrdfh6S94QWkrhjEs4zKMxAckpREzjRx91hKsF98SP2E8eJJAua922rncXuRqkq17kyHEEGA27f4xMwtbPJ",
  "key13": "4ADEi9nQKvJZaLkvBnJdnd5Lx7bLRxiLBvsjUEK3ZtS7yeWb532j7rWdNapfmjvj5W5Ur7xgPVALBbaN1LZcELu8",
  "key14": "3VomXGDTv5zWR54DzFoiedoU84iK8MiPKRC4orP8XTnXjAKnbYhb99z9qpjYwvoj73A1Ab33FwXwZ8vJFvun4ADv",
  "key15": "4TzZx3ctSFk1BbSLQpFGjchGofrnb7cttP7Uu6WbKRVLiG4rHqybv9K8MELoefqJaEcsFZJg79jeXPJk1qB1xk7B",
  "key16": "5BVoifULfNJkA3pwEpigbGX8feDvW52NypzSiXqEshtAPiN9qSi8LKDsL7aUWYxqKJsMGWSWPSos9UReCuvZwdyn",
  "key17": "3w22Ryo16d6UL7v9V3XWdSDZr1yFxBB4n9xTD41Z69WhvqToamab5ihFHcScEX9JTE7HdSGJLZfMh12Ytz8wHUVF",
  "key18": "4rykxirqfHMVWHr8k26KXg9YZXJARnPtYNxzeDMwhc1ab2hV8dG32AjdF4eeQiqoebqt6mCLjTaPnFmBzNban34M",
  "key19": "47YRzzuuRaPw1j1cxmAtQnUFbqqDYRGXh25QRT35t7dJFa4GWDfpMJazR7NPUC8tQBF9RjAVyt8WQnffQhzec3HQ",
  "key20": "3Poft9UXgBcTC8tid993RDWADX7nyjXhDy9uFKourNE86ZGvTGDik6AsKJNw2YQCsHSySEXTADktpY26PmuJD5Ui",
  "key21": "5TWG39Y3eAzKwcN5gwWZRKSuUQrUoE4Dbkzy6VTk2QHTLdVyyWy7p5YDznBL96FYor5WL1HRaFHhGEDBMRnpzRKB",
  "key22": "4zVXwH47nhPHPAXks2MfgS2r7yJsceXBjkye6qVUAvCtkJt3okSXBfAzXtn3qV68MbJJqEJ4hBa1i9FdECiEEBdf",
  "key23": "63MerpGorgLsCf9WVErB8cvWZPGBkEPVLDzrorv2vQje6Fsqef91ePMY6pBGV6kPztJK9LqvedarrcwgV58UMFn3",
  "key24": "4cVwXxhrPGTnwthWWGYtRT1yB2VVrNpVEWPkZcPywrUNgomCyaAo9zc8STxidaMZ5WKES6E6kVcLxMLeMhWKrMty",
  "key25": "3KEAT2Z2eCi4noddMBhm6DqiyWYYgFAomA5TrVGEx6X7BRtYg77MLJinQdPupCtUaPQAhU1puuYmKyDBjaQEBjU9",
  "key26": "5FTYTsYuvzJyTSRBUU2oHdGiQvQGBD6jEaKSf5Hyy7nqevHW2ZsuFVSWR6ZJp64zFQim8Aev1qCbjeCxL7Wxbz1x",
  "key27": "5bViEP73qEPsBbHDzjUQrcBMRqwTKe8hfyKNRMg4jaXRrj4ZijdNiZvCfwcCL4csJTdkyYzvFvfLUe5Y8rWh2ycj",
  "key28": "2LiX96Nc7jb9n5zQuRpwd9peAD8f7nbgqP1paPafXTWiB6MJNhJS9EXDkHxnhqxUaQ4PMU66n1TSh9gXdiH4NMLk",
  "key29": "3rCgYdYYwoUdG6Dh7iucB7mn8HzkbwmFpPefmRTbRjPWMRMMY7pEZZV52PX9dHgMYpuHn59PtrBJBdFxSWdAoXok"
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
