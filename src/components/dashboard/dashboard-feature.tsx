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
    "5VeY34FREekkL4xV7B5HpWhmioS5ufRgej8CvpQ5DduHjuboqCGrtbRLyZcfJNZbQ2AtQboVLY1gK4yoNA4wbT1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JwgMVFkeUDyMk7BNfcZRZi4euJY2xWPtY3n67NhBnQu8jwsAC35vD7uyc2YKGD7dGWryHHA3NcyKqDUgZTPcNCU",
  "key1": "4kBh8JkoUVb4JQevxBi4vjif4HXEL1esL9HjK9zJFrdyjFz1UpAmJm5wFgQf7nsJxep3QBGzBhW1NTJBaVymkwj2",
  "key2": "KBvrgBmzCjLUEMbpnEu9iMvKyBsrD1EMb9pFZCSsyDqhHkNSQpyase9xB5eof7X4Xj71CPhQUNgVZEmhFyxTX7Q",
  "key3": "4YhpSRfAh1pznK2apWZmJ1u4i2e6DW7V8mHkVjbBbrVFzsKWJ5qfEDgNisfERzXMuYf9iFLzoq3so9nGHySsPnEA",
  "key4": "4nNLVsQCjuU9pmU6UxvzwjUUvBcLPUzx338oyhGYyyHz9jxrZ5wH7dbs7irSZbeyyev5d6HcFmJ63mPCmnLh4iNa",
  "key5": "2tPC6xdqjqDW4GMBkeHHuCvkfVuWSZQ8HELgRRpoycb67XG3ZoUuebuJnpuSA73gAb8dCFoQiRDzRSvA2dhpifeW",
  "key6": "2NPqF2vvUgSyYmHdf936F3A4NPMnxHskk4CiiotUpwQyev7szMgvsHfsnZ1aFzoWd6Y21Azr1NwDvQtMAXzegbpU",
  "key7": "McWyBPs6MzfRCAyBpikx6ukQoHXJuPSmxjSELEZq9irkC19K6qJGGasodex3aMpA8PYWdV5rgqNdRdGwho9WSGU",
  "key8": "4eXZD7nGKVn85vKSFeGEhjaL1kYog8hSVGtiBZs8hd8G9SrbeeU91AsJic3svcG7VGzfz8Cfqtu5vkJiKjAvoezJ",
  "key9": "4KYtt1DC3VKhNp8KARPkVEpR5CWEQUguX1cmKzKqfTB8n1LGmvxUwx7WDM8f4cq8Gzcs8zUSA9M4SrbKuryLfpMS",
  "key10": "AReLJLZisFMwnY8yBkGqaLFZrmos3H8fbkQVQgey7KkyDzFoeUbWLBXxRHTwFx4Ed9wSfenhMWyLHyFXWYjtrb1",
  "key11": "5b6G13VNCthv1iGkFXgHcrWNSejVBN49v49bYxsTuKcNn9y2jynWLw7WgWDfEnh8We5ZSBSdEeWFt4ztWcbCjuER",
  "key12": "4EeYWRZkYg3monmZVUJgzMbRNU7i3BLqG8SSb7cwoNLmpMgohfpJrEnekwr28TwL3h2AXs3Wx1MuQdGcP94AUTsF",
  "key13": "2ZCR5fNjpM1xfz8VkBYAyxm4cj6tuTXiVmSC234KU67ugh5FqeQyacqiRMY9CmS51eGWNey7QH2Hq1kJqK3vS2kp",
  "key14": "3xpXoyEwNyHH8Lwp7DZahsmxJqvTQxHqjkpgYcUCYgGWKkvuBjEFPhfekSkggRVzwKrG4Ae2bJfxc2bhUmQ6GED6",
  "key15": "4KwUTJGg5sZtzyPKPha1uCeUUyNonUdrxUD3ZTsWkxnHRTC84yKKjEPr4Uga9myQaZkquuL5WKTPMvA9rp4JFccE",
  "key16": "3HevJZkpSGc6SMK6bVfHJjbWqheKpuUMxMMj3CS42jPW9P2GowL2EcfxNRNSXzqnceuXLQqARvuA1UVdJqJcAz4g",
  "key17": "5E1b2qUJjnrbtJELxtTjndMqQSfwk3rmBWELxKd59SpCb1rwLif9UYCXw39F5HsBC9qom7rrKbGU4VvQYXXmiiJZ",
  "key18": "vdLia7he6XsuD19SudRDyuX5AXMxRahz9JFKtomEHthZ1ApC2NoZShSxPumat7JjawidL2Jzr9EV5kmWAWSHuP2",
  "key19": "4QNgQcqSsZVMwr1LvSRkhdodGe5HAHWb9X4y3uedrTbqAmeuYfqczSYkyqCrysyCj1e9Rm3oBiVCdcPoQUQpwsE3",
  "key20": "vioyoXLuRahgqfD9n2ueZ2DWvNFFUfwPpnFwnFVydm2imr9LAQnmN39s4pccCXGFHGHYpMPBHvqfqGV7AEqS83J",
  "key21": "4jSFdyXbRbugHZXJxf3NuTea47DseZd92F7kiGG4hb7kWi6RoucLfbEh8PfeDcYfTZh1VubZH8gxV24KUDGN62ZA",
  "key22": "4FcZ93uYCLAn9qSh6pkg1qWGTRvwf8jDS92ShfFDzPZnVtD8827tFKXC3tgkyVBAaaVG6CYKSZoeF5QVuNafXmFq",
  "key23": "2N2rw3u3CpzEh81y265AZi4hoyFTq6t8k6m4ozKZ3nGZnQmT4ScTwNhLf8n1gCXXyvTFokagcrvCFnn6KcG2denp",
  "key24": "zDtc8V8tgV9VeM1k5vDhEG2JzZTSrafpYf4rhihP6PMguAbeADE65YsxPp3YexaMbbjCAWj1c8tRNpTUkdgg3fu",
  "key25": "5RrV5hcAcxZZ4qsqchhCoaJVVqv2VHCdMS624r4MG2cF6pwitrfo6itaF8NwBYwQzoW4WoFQADpcEM6G6RbiCZGn",
  "key26": "4PbVqwYMH5UCVjwyL11TBRHERPSG3TogeMUAGcMFTpwFqzpZYSvb67EdFSSHio8gq6RGuy3cgzThffiZEfuJPwbT",
  "key27": "2N1FByXQpXcAm43mniamXVhbf32md17V4SRXrSqKLsqKE1vuCnqb7f9pJf3NrdZGM8HgKfH2DwRhovB8PDnWBEya",
  "key28": "2Ea5L9M2RPNYNjdebKnuBLTSKSukYNijGJXXejKhekh2DCbQMxP3aebJDwhbZwCPMQtmWBkueQC1Xpuf5L3zsTcN"
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
