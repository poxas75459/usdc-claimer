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
    "3aRkWFrQ9264mgfDuQvTkJNFBAxXG7do1AB614iuFY34pWSeRciBkGS6ykjpHxBoTM9XRGLkux1zaf1pzCA9afxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iKfVMx4Xns7fv7EZ9WFHmTzAqqckmAGDdZP8bVFJJajPqGGoQYHXkbH8rs4GCvWBRNNGLTQqrJfR27h7XEwCabc",
  "key1": "iUUXAEBnjJeBxsdk63Fhh4uc9bEay2zuQKDmN3trak3zLd9rEtFtWk3vWZWrrRn7NNMf2Pg67ttGREScUkBhWgR",
  "key2": "2mVoY8nWnDAzgEDtBN1K4cQA27TWwZXCpC6Qg3Rp1DRbH6TT8auJ4srTEB3nZfJD4o4D372Zhei3quyo1gHPkntR",
  "key3": "4DTbk8yH9kLtQJBbQiTonmxzsAueMjxeSRSNZtERYTqxZv89t8EJe1ve8wiQLeuUaJfy561YmHKGLrnF4Ehv76cV",
  "key4": "4tDYzWHDi31KeEHB6TCc9rWrRGFYCUoY3srAmnwK88sXJp35QfWhb9NHBRQhSiRx8Lg7vAw7TjMrqF49iptYiK9m",
  "key5": "4EHertBfEiPzz2asWcNkwyKN2UzbFhjnUrS5ToxFnz4zYG4KtowgNUHovMwzcpcFdcoJfBpLSnXhEcHuXH9Tom6r",
  "key6": "5QKD2qKzK7amfC2QK2bG5DEt4sM6z15v4TTE1vcBxA8rZtNXiDFqtLNTnFBBTaVogK7BxqaM22bbY95CUPUdvDUa",
  "key7": "2B4foHABg7oXqFSf5ap4w9ScNhKf1cLoidaLpKpC7bLxxYTVgyAB3LSKeQxAA7qVistgoGy3UBEEiW5tydYxfnNC",
  "key8": "4WF2HP3Gb2WWJL7uDRruyU65XfGssg8QCnxRgZetSH9m1txC5jSas6DqkQAiobZPZ7bmCxMLCVNXKP7kguSkQV7u",
  "key9": "5j5enoE77A75HT9sKar6fkyTnjs4Dmw8BtCuFGfEdvrEGocg2sCh9trSjycYswChtxBS3Qh6bBTh4F3KJKhE1K42",
  "key10": "33tTMobUkzoMDM91oqCsKYrbm886cK4TAPNWBXPAtFcdipzCnCRKghXKzGrVSQxmoVGYhRLWx3yv7iWSZTKYzxrL",
  "key11": "5fr3Emo9wYHVvMEHfX8YtxbMWo4kN46SEpsoC1yZ1VtDCX6cen41C66jkNrpMsxRvqCW6nAcfh8mAyp4uvjrmGj6",
  "key12": "SozDDioXyf1CXibnvE1QCVjTut3pnKt38zKHsq89QEhFzbZBFaoEv71qc7Ue8zQKTzGq75ZRT7jtwSqKisBoD9u",
  "key13": "jQ2q6m3oXH9ANxCScEriHXqGbEF5A4aU4jvdZBEnYUhfE7ppAn4Ngomv2jgZ7qzs83GoS49fy59GTLinD6XRDAi",
  "key14": "58HbgKv5EFtRYCmQcjnNnzX3jpDXk9itRAKgYU41PLJiiniA2t9bszGe2Mqg6NdmQWvssynWQsP4Ueha2CBCKdzS",
  "key15": "XhyHhfVNAetMZtf8x8qG2HsoedWinRx25MtyD6QpXnojjthBx7dMdo9mFBKtNYdSNumiaFo9FAKWtziZ9SzLeZz",
  "key16": "5nUVVGmm8vFRtX7sq4dadFpFkSP9y62YhzKZoujr2t2Dqg95hpK8RBymC8tK4yXkTJEZe8KoZF2qJJsq69tio2Du",
  "key17": "3GZHN55hx5c1wG5ewq9depH7ZyCdqfzj7JxnLs7YNVVLB6J2hGDeSmjVLM1RvZQGFNcDbuJDpj8Ue9P1HJB9gYrw",
  "key18": "Mh5ZjnDnZbCwCcELpfcwQUehZqGbtzUUDvsBA59Ahtr4Zz8LvYbSHh6kebq77cPdst9M2t2EEHERmvDy5U7Za7r",
  "key19": "4U35LdfvgASGS3Cre1rN14BfbaSH2wvQ83txAAKt4LHcHqMZu8wHNMZeqHbD2m1vyAFGW88ZYJ9f8ZXGUwv6Lhfc",
  "key20": "4kbc4f7ijbenzV74oezH9JWefpuSnFebgqf9w79igRK2x2ao7JNBpdCmJrzMvFf9bqs4oQYBxpJzrN9aSTq31xsr",
  "key21": "4bbGXPR7H4HuHbN2G6gie9tur7xLETvvcbkhK7Zm9Kzt7wHGwdY5awo6kxxQgkeo1RhndmHgFMC8FLEGUumvYo88",
  "key22": "36PcApq86buVisXPeYQp73W6r4dFo2EcwaxAuniX6eai8LJEh2UpgVnx8X6JdvBofeqnPhtyp8ekGcGK5A5aBjuQ",
  "key23": "Bf7Ne4z77uySyGQeUt6RZ5cf6tXj8N5ZPaxFzyLRkF3Hk7ytcq8bqUCWjTjKbqw8kpjK3uMDuz9nExgwpMz2MmR",
  "key24": "gDnhVsfKtf6BTettomF5bWqSnnFaXCXQuSQ7RozYGvhokufrRAmcGw2Z2iSFhh6tekjWT75vjbjA7Fzg811A1WN",
  "key25": "3qZzBXMFd3z1JDKYZuUXjng4SJorXSw5sYFKRYndCmU4qrcEhDJSXeegYt1VMhLVhzESrQ7F14RWntTx8foeuXyL",
  "key26": "446xSrLQBUCcyur2YauP1gUjQQ3hrN3TekJ8T5XzvRFRWTJJ944WiPV1uADcjJpuZomcjLE5SUsQaeVWaWMsPSdH",
  "key27": "3XzPimyCXkSpLUs7muMS2PBYMHD1yauiB5PmPkSf8PYxhNnkBmzCzfpNfMUuhQisP2hJE2Vt1bp71cxpbC3b8kR2",
  "key28": "3eoXG6Cvgbf9uHtC61oYkouj6RuaPTAoAs5HM41m3K5e2BHKFyu3Fk3NnazVoQwEjgrYmo3sJK3LsnCowGsY63Dh",
  "key29": "4dRyNDn3Ma9GX1ayQCwrotpfKHaVjknb4SF5hpLhqgiLnFYAKFMzjcNNpRRhGkjQjP6n3BeeZymcGBR65pFqCCNU",
  "key30": "5xA2Yj4HsWPESYrFB9cHzTVZ7fiuY519r1mN5KE57CA8Ashaa215BhZftyNgxNU7CRRZLxTb27mobv2DcASfYb7L",
  "key31": "5PVexw229HiyuGUEbxYPRyXEoBK8RKRh6YyDRZvrD9oSYcBfStKFPH1DXb4zLSdgQPUZYTBnnwsc325E9kTDc9T9"
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
