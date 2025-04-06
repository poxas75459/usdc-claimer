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
    "4X1PT93RunqHfyWsfLWyZEEqon98rpLzbsoHcFuQfqYEJnZ7GtPC46nBT4z7byu5uE2vZf22wZ257aFycvaAzx1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rg3bPRGPBZUVBA2YB8gJeirerS7gqtRTZRCL9VMYZb6wiPFhRSpmP9BQBkF1Tb9kQDAWMtYBgnSGmCstLmBW29r",
  "key1": "64LZ6TFvw7FJ7iB4RNyVaJrFUwZRMQbnDsfm3UcmZa9GV6YwyghSiWPZUZJrvetkb274F4gafrY6rghjtu3iRhd3",
  "key2": "3X13dRHexsvww7fX55RN6GkLQT1idretRKqSW578FR9UMoG8AiG3Bhw5YWBMPJkmzJa1jM39EiEQP9pvRVdMED75",
  "key3": "3kduzbjJU1XHQLAUpXFViSZJ2Hk9sfp2Ugbu2vDWpBjmoEpFyygPo1d5yVxzFGjkrHewZMXdkZz85nFT9b9NRxhy",
  "key4": "4cSfWTMyNPPTinc75oL693NZZ6aCqH853KJu9SutnJyf6cdsHusnE9yoJZ4RKbX3741B8DBysEc7ZB9HqAQ5K4un",
  "key5": "59JAxdnq8VZxQaaiH3fMvEVsVzSrFCrHgUCrxgFHgBLjWjF8wdApb6SfFELs81Qxxxvctqfx6ycJbGkBRYJdTWHL",
  "key6": "3AhVqQrDNjDc1jvU9RVcjcq9xviEDDAZURMwBFrjWysStFa7aS4WVSLY1vxDyh5p6hBrQALDFHUXtDxWhHqzptsa",
  "key7": "4HRNVReysQtX78rL26PDBe1fvKSoDBJvvKvmRK6omMs5wwS5YNvt31SHJRvTzboDs2EkLtyUKcarqdSq8RWMwrJ8",
  "key8": "5HRXkrhTKpfv4JUieJhJ4JoDex67zwUpJZQNnK2W8UDckEtoGWUnrmDyQ1icanqg25iMyaTbrAdPB5sGsg8GTaEY",
  "key9": "5dWv693UtiaaHrCyE6w6rjpfNwma6PPPCnX1ABy5yHG5EvjRBHwFyMSKLXkfvFj9P1yef733fPQfGNJPEbgpfUE2",
  "key10": "25ogt8r8vy5BX7zqpu8f2X32Rsott4dSrsxkb9utCn1k8M49YyKG4zcPRbTK2zcUFiefX1XEFVZzmWGPEyS6HHnq",
  "key11": "2djhitxGk5FqniKreZNDLHpBAsTty82BDRSRuG8K5BPz3NeMSXUseuCPDc4SwRwb84T3aTmh2zF5zqEHN4utF8bx",
  "key12": "3Um3takwz4TGH4oGmWcgWyfihwpkLzxgUycZ9Ywwp3NjEkeGYiJbvuZZpz7A588KkzJW7Xrh7QqesjvbJLSsve66",
  "key13": "5VKcVkdzzs6MMmceuaqhbJD7oxCSK1qwkxnGFDxMixNU1z4g1NtbfcCEjsf5xZmovV8eiUUaYioUwb46T4vdzC2N",
  "key14": "4t6mgXcCT1vnD6CgkZN4RjqKHwHv7dnEaCLnzrvMi7XGEXE3bDpib5rKJ7PxwXrbzjMChTpx7jGCkLoq9Xhd5kdh",
  "key15": "5fe8dy4Q5AEaR1WbzhQvb7zsX8RHwsB1pMdiscA2gathH8VTdD5T812QN3Zq7JeSu7X41ArhW2i7F6HfW7eh84xu",
  "key16": "35dzPBS8BGLS1DFtsGycthEcrvgYVQoFYvSe8v4etvAVkL5CPRSeJEvMoVUeJVQ197tZmvtz4Zm3iAFZEB85Nzx6",
  "key17": "2vEFaxDdXtLY44RVJVPp1Yd986oWhntqNb2MMXbFhppgHPdyDhweednHdcUxojZAS2Wv8K4tkhqrhuqx2uTK5UKh",
  "key18": "2iEzKdK33Mub8Wey6Ro8Qqww7Atj4EoyPJkZPhKbEBMwPPkwU3AM5acE1iqpqfkffYyiXPTAZ4SQa9JieZqD1v8i",
  "key19": "5PqKo5vLxstgHbiX4ThDgxdCKhgmBR73p8kXpQ3zGycGQR4hhghf1MSMu88JTZXi418nk6rKPXAWMw6x21Z3Cnfe",
  "key20": "vD5FA6YCwQntwyrSrtg26xwVoizsR8JDfjCWmtyzjCLNsCLudrN1FiLXNjzXd6eSEH7bkftyxW6L5z7sQvf3R6a",
  "key21": "5LCibiKxGjNnNMYqfmepDdDaNb4cmiYCcmNivHFoSfjc2M1LGu1bheMtoFD3rH2xr8w5rSFAWJXTvSyVK1yQxd1T",
  "key22": "5xgn9RachePdKTfTQnyGrQe58XbQSkY6rfxTPfPFeJpNEZ9JBDF4djR66jUyp2gPh7xLUK8mJfhnr3rXjNNxZzDi",
  "key23": "46HTu4yn2sfQjykRZpdh7TcR2KE9UfTu3rx1EPRQU59jZ42whcE8YKHr9Mk9hLVBvswq7BPgFzoi1zpxHYVvyiLn",
  "key24": "5nBReceiHLW8W5NBVWxdSzumMzb3BPthmzMEe9KsUKwSHjb1KG9Cun5hjYgZ82yKz6KuHD3b9YSdkNPncuR589PV",
  "key25": "4nTRMfxTEjf5bvjrGrf2kffGYZEdekBsa4eM1VgsjaKxgDxCkHK5tFXaY1BDa5SMSE15iW5q6o4osnRHGw93KW6a",
  "key26": "5pGKrCoQqc2mChrxtcYTRYXBQ8WX5obUTXqxJZQxhsLRc589LawW5UjCECDob8DDvBSLM29X2q1N4XrXvq3fMsSB",
  "key27": "4PTeHm5RznNWJDv7LzZTnLyQCLn4MWhRhZkWAVkCk7eg9kqzKnio4u4ApCfzpAHZFQxUTidyNFVo9RuAMJtobv64",
  "key28": "3pjfzWGUJJuTeibT8Gkhragxw2GdAyfNCYfNvxeR4vQsS6XreGcMfaQLN8d629tioywTFHUWvvfqUQ1uzxMTziRe",
  "key29": "4MEkdyovcpzSZAPSqzfth97uxsPzQkvckkLbmH4gCr4YgE6CQkeVen7gDHHRFzsZzeAhhb7Xaxvjw7smCAXrJATm",
  "key30": "5vQNAr5y7tHESgYsj6CJhzJgyWpyyZVxboBtnvTidTZmKTMghBSegxZizdwpanXpaZ2Kbwfu4NZjdv4RWZkcBCAS",
  "key31": "4x1aAasdXfPSQYuTPp4WyE5xAR8T9K6A2LpukpN4zBKiTyz2VJb7LXxsbehiu7JHgQKc6rgJMe7zmxmnRvkbZHcb"
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
