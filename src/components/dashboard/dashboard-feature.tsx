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
    "3oWH6bJqyY18SjTaVooDAuKU3i2aUgAZ73GTcxWb6fB8UspU7FqoaPxwNZfwkRnUDnMHNcoBJ393dnyYqbWnFdzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V6NrD9iZMj7Eju2gP7tvCw4xapDi9LAk4CEDs3LeGCTRbEAjreMqjL28C68MmD1fjnV63HL2VwUZjMPinhz1VmU",
  "key1": "3dyrW16th44HfLv8aTqBcNJVg6EaqYsA7a9JCRb6ox2PRNHzvYga1QbNNX1vjMdpNw69ox1Lf3WPeVJfx3F33uDg",
  "key2": "4CGkmkcpemRxj58cKcoc1BnqepYYuxzUkfNC8SshAfzoMUUWu48RJgYYCrPmUqPkyc1Wda4a2YHrt3f7RK2LkwmC",
  "key3": "2WdKyuEvdkv39B7mUvw2Pf7eZ7VGGNcZyRMWug4A8QKkeVF3yZ2Nasvzx9NawnzS2LsFupDwsaaeA1VUuFYG3F5y",
  "key4": "RE1qXDBemNEvYLhTs4sSnDonF7CsMMWM9W9ZdofvYwvWqbPvBKcmQr3K5FATsSZGZgjE3b7gbeT3BhSjnCGhoix",
  "key5": "5J5wweWRhpJcBQNgAkqB7kJMp7eUDwAaXasVG5ctW9LUQbwWLjWgBwKE14pfMeCrDvfnzafSWxHYFYhePWoCcyNc",
  "key6": "3GiFC6fL8VKLTNxm2oJQoRipBkLPoCzPJVwVxQNdAe5XoqDmnxtdudg6qic8pdRrbZy9N1f25Vu8sNrmGFrfkQDG",
  "key7": "3oiGPL9oB7n8REAqY76NRijiuJfw7LRyLK6T9EmNHCQcCk8uodvqmsdd9jMhm8EBFbS55hkSxqX5sk256UXSfi3o",
  "key8": "4HBUrcQVd6bUgFqgnKW4ddYaueW31tJvNTnaQvStMfT2jEXyNb5sh59KRKY7kT2WA8vnsWzETgkLLskWvmUqdvdc",
  "key9": "4WsQZE9M6u6437tN3px6xtjMYSwGXdGT9S6rxLDRdvQ648RAh1KA9Ha4GtgbQYdJ5KmyeCDSwnuzJctdtinw7z68",
  "key10": "5RtQbciA5UfPmkHtPWZJaArm53mEYyWj5Vtts9Hojt1jMmmYtXVeemP5JxrMmDVj89HbZGcz8NpgqGUqXMqkKHJP",
  "key11": "5HjUhWKb35GzBttzkqyw6eVa5rgg7jrgNe47DpwUidtKD4ecXXW5mKmtxMeMs59aBsTmQUSsKFA3ymqcuKW2grmR",
  "key12": "4nxCthZ3B8g3QhL7YbD6VCgeFpkYbhFLDedWLiVmJGXhzHMSmjTCkCNX96mQnwh5mGxeLgVaCMJvBvsnfheU1xme",
  "key13": "2oDC3iNiaqRhMwWR8fwpQn18W64C5mHiLMqphyiWUUgHFX6auUXcwoj3ZzzJzLuWQjPP3YBcoWzKvergixnU31vb",
  "key14": "59KSZGYtDLKSj7jbv5RvYMam31B4PFJMnrRdBB4XYKDZm2u2sZcmFVbJb3LxnVt3nJcpeKHwnrNC5FYA3qj36KXE",
  "key15": "3ntLrPXKhb8nzhEG3XznKJChTPEUzrnRcWMVrAsdQDNmNGCGfANC6Y2LXhHvZ1qrVGi3HWFcf4b8QMYnXkFkKnWe",
  "key16": "2sabVRKUycCBqKc5HZLUGKK4XewM6hvcx3Aw7rQ3xep6ybBK6MxKSRgtx447MPQ6zihMmyN7HQYJzNe5EPRSvhi9",
  "key17": "nVqyrADRkyER2znNjMiDuLDVrkMgdD2iASdKqgimXdc9fDhu8kimBKegRKZQnhT6bQhaggaYPS2RTuExhtPpQDG",
  "key18": "GouHBw5YhwJbuBxFTxe4R5QQip487kvRFA8rqyk5m636MY1fqQEauGzLGaBVJSMCty9eX9SKYu7SerxJdUnUvsG",
  "key19": "4YFkxmndf5BSMZVfHwjU1wpj2f8H7zPeYcygUGPx3jE5RTDrYr9z3JRvfzpZWqT99H5xHAgZNCpv65Z2uimfJiaL",
  "key20": "xE2RFT98Y54pu4jbKw7AnbaQBSKB5tG1F7aqzkQ94a78FU3BRSc32k26gwc56ZFjT6w8bJT6XJZhYgCtC9Peg2c",
  "key21": "frDe69ooVeV8ckUqAJvYToXdPYPvCJjNpZLU8zPwB9RYYDahEJU7dMRdPu9GZ9ijQ9Ym1AtpX2keLogq9eZh5sh",
  "key22": "9fr7rJey8USwgJ9ArQjkiw2XiTxBVdSkLJtc1KEgHJir5RD6QiPY8qEFjAp57hpN9gKBzVkTPDMJNM2KCskQzWh",
  "key23": "3Zqjb1fddzWysAasA2Px2teNhC5mxbnUSX2aGvY3Eo6KXc3S9h6ypyLr7vChMAapHYYq6w8GkxZ41dsP98Lh9p3Z",
  "key24": "3zR21NiNcqvnNqY28mKJojXF6A51QnDzesTMGkCviVTniyeqA8X3ns4AtbmSGPZ9ehSEy121cvgJLViSML6fZGEx",
  "key25": "5Q5qRN9vkkU3w2VSNyL1nsVTRx5KTRakC9dqaKbfGSLspQGcJbUmzedvk17oDWHxppdsbDKAxhmoQy83mSvoop6J",
  "key26": "4UVtpPxpGt8u8euy8RgntHZvbFT41YjcR2DFwfvmdQ1AyXVy2wKkTd6PabWgL8bCqMc4zKY8qTomiUpiUvEp6EmT",
  "key27": "4tRmyVFTKMRSz52sc9EpABbAcJc5vcaYKWDq5gZasoJxFKcnbJYviM5eLkKpYVDTRZeKqyKFmWFV9NrHXSbXhHuH",
  "key28": "5xUhJ527BgVrW77s91QSzopCimwPGAkPV26XnXFH6R5c77xe6YeA1jRdXD5ortJGKcofUaNiM23pb3kPxkWYH3Vq",
  "key29": "41btjQVqbUaeSVMh9X4Eua8saMxwCnYRfweJ5uXguUicHckVLioysv81DcUGGVziLS7i4VtCQrzR76tgUiDckSmt",
  "key30": "5hzsX5AeFZp9vBreUtu3CSDCGVoyTGfJerfbE8dPbRd9uyFapJfMtphDh3PQ3UpCiUzjySK4XAgW936GLNM3iKdm"
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
