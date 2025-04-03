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
    "2xxKcK8a1kMi784bZsuhyRvtorF6GxDVSjfBEemChWpz5BEwXkxHLKw9FXb2uxR1HRKAji38uw1jDgbCnXneYWhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zibwJtrLaYNAURjBjNd65a35LtXctrqnTMrt3wa4inLTJrPU8UTiVUVkKpvzyeEYY1fgfGuuHQ7uMtaT1jAFyzG",
  "key1": "31PyVPvB5FFoQ6dNWbndrjq4BRY9wHhQ3zUnih18Sb1th91Sn8n4VKDFsdqCB8y3p6UjP18V7iHj9w12osWj3mDP",
  "key2": "4qY7ybxxPoZBkqXSWk61Hwr2ckaVrw4TMTStcAMk4F2ot3hkno9u9LMhYzh7W68Md9Zwy92HY1D7gbUr4oHU7kWK",
  "key3": "5NsKSJRj1WrEAcgSG33CaivELKnGNpvKesfQz6gzMLe1vi5jEFvgQKVoiSGwedsFSWYk6UCeUZub1ENnwiZSfcDQ",
  "key4": "5iY2vgF9P9fWNZW4eZ9Jhy5bsAG8j2nEh2wtPNN2mQH5cWp3UfXeJyboEJcFAj6CrxpNzRsKnGavntgjK3GtDhxH",
  "key5": "2UboZFueSUa4K6NnJSnGpaXJb85NH4jWunZvAtAyQQetS8ctE5GMN4dCuNQqBdHWT1YqG82iWozUH3eYHn9jL2K6",
  "key6": "5ZZoPepdnPFNC3w9QSDfkGrDGVoSoCAe2KJWD7m4csFaQsPagQCCG9su8raSaT5j7LSSMD6BJ6s9x7E6T31Zarvs",
  "key7": "5DezdfXAFQHkJbBSwiVRj68FGa6z3QyaLnkLvMKC1vdCRfYhck6jnuVxUMu9kUsJyNHCK3uvdUbWzZCPAjqKDQzp",
  "key8": "5TdFcmuzPC3xjqNjVZXJobPkMWKXqf81bHBcyr5Xg1D1GPTcRoBP1NUXg41PXSqQ5iYfaB8AHFzTXy7tmAdiHsEd",
  "key9": "46a1yV1dPPQBU9nWPsvQHezKm58wbNwL8jNN9Kj64TUKkoEDoDY3BB45s4dm49hXEG7DRRD8NZu1kXVZSbNs5Wih",
  "key10": "458DRGtHtUZ8Y3FDrrFJdGNvNyjiPczVLLbf4jF332UTi1CWXUT6TLHCVqNP3tkESnqqAejyQgcuHQfU9M3GUrYp",
  "key11": "3G853BSVsJLGD5XZzmhELpp21eekpuYb8TqNJDnB3j11tBDGzj4FgfqS1EBqxkQayiey3uLngh2ZAEjuw6rX4TpS",
  "key12": "546pLKkxsdrREswZVQnSpQ5sHyhvYS6QhdtptQk6ffzSq6E5ofrrfHyrZ5TKDYm7AiFXH1SWiUy4X9giQQoszXnM",
  "key13": "qA14uu9mNGeMzQmMJDXsnZ6GZxzgbsU83AUjFY8tX12J2fmg9r5fbFULriSLPwfiuuSDgw41u2Ao2FW9H6efAgA",
  "key14": "UyG4V1vvS25r5r6N4bFJpFHdxciwdkJAyAN8zsqkfeRwpr8Vrs3GjqxE8mmQ3uwZ69ZMGhUi6WaunyVRcP7aG5X",
  "key15": "2ZWoYm6wyDhwyXvVKYMcPJiV4kzH5YWf9dA8wuP8rgSGdV94YAadFju4ndZ7FYikkuGG2BwbphbDeyDNTJzj1Ake",
  "key16": "67bSLBkXcAk71SiP6tvZMZhAHbbYxGF12idKwm6ziD1kjXB5GQ16oCuwuRYUFHax1ksAiJkj38c6KrfNgZeU9TDu",
  "key17": "4C7EV4AFiuDmSpjML7LTXwgQAUmQuStP4mGF4qWv4Ey9PbPppRZH1JQYm7Hpc7cBo9N3tR8oiW322oeQB6nYDk5P",
  "key18": "2xtNNqGFMvHXhjqkyUSH6bWfcGkvbK4TdUriWkVMXiXGoQ2KuXPSfVZCcCRLWKi6QACyWnXEy7Vgo91Xm3rX4bEM",
  "key19": "4aVnXmA8pot5smvDGsgsJLcAQj18DqEqSTCUwn8Rr1Fod8YQfr6bZ4RVa2kVr4c1zzU5jNPaQySkdsaSgxD7ssdo",
  "key20": "4SFTAqKcp3RYJRAq1XdM45HMDaSG8GZmpXNbhLpvpcgyrjb245W5G4N12YPQvcqdbF4p6jGhYipNu3H11XNUrgKw",
  "key21": "vohpzndxphCqTY8TuQEPxAy3A45nvnXhe2CHqKD5p3HnfZ9sYNCpBynwMWbgJtScEphvwanAeEPwzhMwkPJ2YxC",
  "key22": "3kZYGZSKZU6fJyZPav5LT231HLuv5CNjMEw9G6MvqhiZEUhJbcLYvNTF3B4RwssnMZEthEKiwgtCumhrLmGtgxmK",
  "key23": "2EPgFFvKoTTfpys4auznsQqU9Eb9YPYraFXWXXKQvuVotR2VDLynwHyYViWHh3SRxMFfWij7cNdMDLhchmZ2ndRe",
  "key24": "4a226GM36ZPoX8RfXMfVQxaK2gn3zQzWrJUHnudv5kakaFuPU49KVk7WKzpPRSd3eejaV2cg5Pp24q7hcXHBvhuN",
  "key25": "2NftW1SZ5xPwKhgeMQhxsWCNo6EQJZm5yfKSJV2rb5VddDDgkf17QqSFiRv5LJEXTTBaWpGRkhFGsU9r5EkFmAN4",
  "key26": "sYKKNoWuaohyRyWSszQn1wYK1TTV1C1aRLpuaV9N5Vhg6YouddPAiHowWq4kE7LiQnpr2QKBUP6BrvFBYfuYpRf"
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
