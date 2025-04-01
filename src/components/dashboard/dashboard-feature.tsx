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
    "admdA7LNc8EUrp9ZMeZ5sPCwwwS2rKRxcgZUyKaTz8EDhKfcmnV3dWPS8idsbsat7Ub4omhBeYqQnNzYnHb1WMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ajCaSU95UrEK5yM5VafWRxJgqBwdSpAgfyDQa3NFC9PWSo4CPhKLCYFLoD7QuV8VCSq2waMeihh1eT6AgGxZMx",
  "key1": "63AcoYo3Eyhv2HDSBJ3Ur22WatPVVQETFRWGj6SWzhvvjF6HRGrYKjBMEb8WzA9NVdg6y4bmzimVDbT5EwNBBNH6",
  "key2": "3PsYcaJ5ShzEsE1cueH3EsgqH7eWJkNYDi5niHeh9BX2Gau4WHiq8EDDnkUahfb7KRaNScbMdYfcppu6UhDF2ToN",
  "key3": "5XY6KeQMw8LuKZVj9xgowuLTNBQchgF7gdKgfNVRPA4KM6F4QBcsCMtwmMtQaaGCBbCnqr4nekTsKScyt7LPjDQ7",
  "key4": "4ckeAVbGv3jzsak5X6LjjKE97ZniuBzhHpnemkygVodTDEwSc1yX7omd92MGPNyHZZmxV7ewEs3boQz2CsdeznGz",
  "key5": "5tGVSZK7dx1xwcwyW2kuFPg6Qpt9CSkFT8Wk3R6J6a6t3TwxgoMHdBpNRhmyLfVRwMrH7HdvqxwQmawfy5LrN62q",
  "key6": "3hDjNhSWQyB45TdC32fjttxQubWBu33cVNmCdvCSB4Ld6EwHeGEs3pY97fTrzLicZvbhD7XmBXagDX3CNgJUz5ut",
  "key7": "p2dvCPjfUkfxQAudZme5xzCVUVNA23VV5v6VPAegweHrWYvncju9cxqFbGPLH4696Bon4c17soTH5P4ZVni5Ghn",
  "key8": "kUGGGzDnUYYSzPmnmVGfUaNf4R2MoU4mrvbrRirWWM5ipULcMRUFvhT7Z3Y8sc7Q5EJbX8tmhjG6mmEVuZ4F7mj",
  "key9": "5dp8Jbh2UdBnbkh9NGEKXitGpxbmhMkT2jBinANw8tSvZqgJFTiffjPEM3ieLBr4PJya8VnSxSVTmZDbV1bhpXx9",
  "key10": "4T7BAuumWuHTaQW1unc8hGPFXBFJMjv1PNX3mhQxSAoS2hx2vwGnCK9WZqT3aNXVcPrknwEwUoetZJiyst1rUhDg",
  "key11": "zeMWexVxs4Pp92b9bmDSTyw7LkGXLvNkGqk3sqVTACTspsoUPKwbmbCXqbfrSkm3bQYB95UX59h9PxgqWWLkr6M",
  "key12": "4bSdCdZuL2Xr52i2VH59anRF3hPHWPrBx1PaY1wBAFq61YtUHtGgNYnPNkAv2FrwpARyuziaBH2oUaYGMihMRS14",
  "key13": "5RbAes9a6d4QpuMWVS1BZfHWyNXEtb7N2jfqGuhUXVZ2QxXqdhqYjk99u8ta8kCK9wtnDo8h2xx1R2Ss2ZYtut3S",
  "key14": "5ds3uKaaVZA6s4byYgbQDM3BrQjt9VGYXtqYWa19qyUmFCAAf9TK6KzVxSFdMLUwbv7MigvTQMsseS1JbyeeqZ3G",
  "key15": "2YwZd5VCvDvVSc6vmwKfKi9wrvWyENjx4KLu2WL1gGK9n377EXTsDNa27CgLyGD4QYND31YGjSzNqoj6isRs2o1s",
  "key16": "3U9em1jf7H5jMw1L99QsYBCJ3xTJbe73ahpG4kYkVgP4wwrXKUjTxme55ZTSoc8qcXSEgrU5z4isJ9H2Njc8wTJf",
  "key17": "BnwSg1gJwfgbe71oYp1PsRB43hfHXM2WtCCGyFppT6mgRmDZmPpBsgX2VWSGytirD8AErQamqBGZnFfSpaTziwu",
  "key18": "4qkuh3qJbnPYoCZz2nkKVqGNhEuavTCSVvrdWknTaLRQBJ2LoLbLf1G336JSxv88Cq7sUpoo9xxZeHHVu7TjUdCS",
  "key19": "2Xx8qpY3TA8fQfgizycedQfH7p9ct73VNnAaM52KT3StM9bHKAU8kQbuL2msbvVJusEgjPvvg3Y2EtyxQkRe6LQm",
  "key20": "4JRDzC1kwNcqNcEfsNV4hT4B2Gif2tjviAHCSMNc3iYbbS7BQuNLUfP4xntoxJfiuTjZygGgiU8oq8Jj9ZRhhPBA",
  "key21": "4K1HkSK3VwutqkupHRpUbFE4LgGWCY7md7add1fdmReuSP1ELR5UpeMjVwsttbASxxCvP3aJ6ZpAUdEF51Eoiqnh",
  "key22": "2sLmQJab9r9G91JNCcGGZSFd8uW72TAts74dSpC2537XbPYYn7pRiWA7DXKEV3FFHPC7WGjkUej6Wg1Wugsy81DQ",
  "key23": "2v24yYM7hbxj9Y9vSWXcjuD7GRJXD4xA7fQFt4iGzwVJTETUkiNw9QP56ujUbSuNySQ5kV4J2M7AmvJKW1XnV3BM",
  "key24": "5keGpm6x9y12xttZSLfghSr2of3uZryinruLunyiuvTf26aQnJ9V2xKw6Jg2A2mviQ1FfnFWEWCRAoVDad3RAVC6",
  "key25": "5Ectf7vu41iXEnwUqYtZqpSNjnfvKZfWhUPndJ7hPqgEMovtijXuJ5GHQ4VqQu2gvuct2WfVrWVssbJbXQwNn5MC",
  "key26": "2BBUHY2JkAJsKJrtJPT3pyB8UXgujjQom7pYmSRVzx3FJaqLCBUa3MvgPD5rtNzn6ZLZrkfMYPby1bWjTAdTeb42",
  "key27": "2BR5vhxDfXheZMjyDHN2aShaqamsbra95qE9f2pmsQBdwMQNKNw2J5mR39dQ2vQhMHL6J7QzvGRhT53uLu8ks1Z9",
  "key28": "24kcYuMWJf7uSSQJkZ2jgupieHQWM49dtqx3EstJWgioyiZhD4vzFBTwrHuEJK6D8fTEzM8pLe6dLoCr2McosNZc"
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
