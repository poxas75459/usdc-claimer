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
    "3HbB4NGykhmGsDvRSRMmLNU8W9uA9N2ZaJH6mAFzpKSULVPh6mmBU7uX9Qj4hdhwqBSTKHTS9nEDBBCCFcBTZN7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGe417LYJAxqUERCmfPDnfNBv4TMuKLiZCfyPx6ioQe2m1hR7K8jYmo7eGmsBwkyAayMtDMCdbUxXdEuismKBxF",
  "key1": "3yb5m1HEPAGXpk3gLQejHe6TvGvcAT3dj5mzHyN84q4skoRA6MoCqZ2SuxfRgbF9XcyGnLNhj6HigmdJapUsCY5S",
  "key2": "pq5BPLaVEwTQiMFbFgSiAFi4ESEDRYhE4pJoaFMBujRHrMXejBM96kMVYKbzorZJJgsG8i97ZJg7z9wDJsn2c6V",
  "key3": "5fZssGMuipGybDQ2MWiincFmYjTjP3oMDUJ5qtSDfibKfkci8NxmGqkZ1Z5WfQ6UzrE6vJ5yqcdaYCCbyWwg2AT6",
  "key4": "4McHpXXSug6PnpV86oi2ZPoNCCDkvKwUN1bGWPTzQK5FexnJkVw5DWTRXfMTC4Mqz426gjLJkwauYHVQELJZEqF6",
  "key5": "5J63rnvDyVMcwSiWDaKBhwqFeukxsnhBBhr49Krxst6KTha9VgrK7ma1PXQVq7BigEUJmGUBhW3REH47tQD3uRHd",
  "key6": "21RfnK9CGTxTcipkuyWLwiZySciC8ZBc3CiLvaTPK27fhCTKMfBzcSqhne4cTnNYhj9Zd1SdqigRE5XKTRucDNpC",
  "key7": "4Y26nukDso9vzzqeQwS4keFj3iC4piZdFfpivpMarGVNo7zmiMF9vxHwYyYZTnTXujE3xL4TGbMhz9nmWjMxw4cB",
  "key8": "5t2PE8SqNLmsdyNtoiAbwSA8Z6H3enQBU3dfHh5GfQqsJRskUqKT4e3wjWWNkaGeihnveFJfpRUWc6YYNDvRSEDY",
  "key9": "5Vnyo5m1U9rHkac26RJRs9TsnUzvr88pZJZMQez57zn2cV5gSoXEpSRJUQYcQzHUdYS8KoY8489wsgk3cG64eh9b",
  "key10": "3kyWhncBc8FSVdhW33CLmQxKL2VAHde3RWFJ6B2WPtHWCPKDRqwyLeqXGLnmaPFaw76rAzD5tUD99S9WZ1LmvmUL",
  "key11": "3v7Q3rHafGxwMY1kX56w6A3tB4RUf4vXoiJ9TBhHxsaobDGEh5WXRAYDWpgGNJQwtdNcX6B9sPgnnNWQJj7jTNSY",
  "key12": "3c4cXtbUwgujqNkp3BxicmoxX2YA37ihjYTuQFmt4Rw7QjnLcCZuEYrR1FadAJXhWoLsZuB1bioUWCt1Rkvy3PKY",
  "key13": "szusSZdg5UMZeE5VMruF51xTJZUqdmE4Rf5X8Ufc3vqrU3SenvUQ2zTsyZSFSVGbSmXtwiPSh3KKxoChVjpT2LY",
  "key14": "ZiDjuvraz6KBiGvAaRY7nvUizZuRbn4C7ZCDGnLVncpKD5cADvUMzwBkvwxiG89nqkHSafGatpdC8K8A5C1w4B2",
  "key15": "55Mb3p4Gybw6unmM34BGM8yKwmM2p4HLjdY3Z3zpRAwotNEsyhJdHJU6cHFbC67psRG3Tsq5GzdioDZNjKo8w3gQ",
  "key16": "2epjxXtbr3cGw9uq59Uby7JqyrxCPrfRZ2Gec9jgZLt1Ychf6VFtEnE5m4jWh7F6HJSVuqSWVJ1KbqNHg4UCKAeE",
  "key17": "5yVP7fna95UwepGxS6q31YwZqxLvLY1pAKso5GqzNbJChP38dhBCWknYvNjRHxUrvsauvJyHD8dBvBBzFHfQAJ27",
  "key18": "3VoSsByUr3LRuDN7Dwp3tz8DrgTWgK7ug1TQeaDXhgv1gGn7hjiBJvfzx2GvGekWhJkMnhES8Utrpm47viLkvDJw",
  "key19": "oXEM7Ni5WHro1yLFLtrzKawYzLLi7mi95z2jr2p5LjGczftJfYgkcVQPTccKMUKHbDkKVZpN9jJ1ECqbzpNfGUj",
  "key20": "5Ecf673L2n4MkyGoZZeGTGRWXtDgCHJikSa42NDHzg8jFU2k1kX7e1WqphpVRVovaPu3DNxrrN2i9jp8bj8D5r3m",
  "key21": "4DSdC56sADwkU91vVRbUdfMqNrKwPkGUjHPkexUjiPpmAFDqF5Y24X7zAvr43ufq1hB6gVgAFQj8WB6CJpCtfiMN",
  "key22": "VFoCSE5nN6qCkRue6bviHUKupZCMMQW47VQn8s3eRqGJasjVetqVydd1LzALJpy3vrDDGZCLr4fmR39zPrE9Ngs",
  "key23": "33NvghVR9mXvrP2zKf1XimTM6bDvR6dUxMbwqm9NoSn6bwRHysodJckfib6i1zqEjGdkjxsAQCgjH4bB9KkgSuTT",
  "key24": "NxjJiZUdEhrgFHMSF5TSJuWwTP6z32KiTxZnBU6aymd7RzE1j7V4U7kPTMaunii1Q4sJzysbkSdgecDngiCG7E6",
  "key25": "3TpyEQup9S5y1TAhg2Q8zXGvpHy41Xbx6fjkF9tzy5ztvgyY4pVD7Y4bfECcJJXSANBEE2UErsPPMqQPPpvTfQhk",
  "key26": "2Nc3acS2XqCKw3z6LXRetz7zWC6tw4TLgvPn5q2BZSo8uk6BosnKUUaieXvGRJcKpgur2nmoAMF4FtSFYtRNdDBo",
  "key27": "3bL1ottEPMZkvfTnLKSTkPvSW1wyQ9nwnSRoC1r6bn8aggm6P8PCMPNoytVtiakGDe6zzCh4QSwmb1ukPvpv9NBw"
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
