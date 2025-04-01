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
    "3ZR6jCqdTTE2U3ndQicctbwcPSQi6ctCayQquJYPoaibDKeW8TViFiWhfBQKS7juhtXR7JWUJhrhiX6LmHxqKXs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ur3GP6XXRHat31eUjyaU1CEtpRKivyxnHrcpBk5eVgbcqPg9aaedEEwj9b1V3AL5hMVcHTsYdekC5q57fvxBaK",
  "key1": "2kCj8VvGHFjwik2HNq5MxnyenwyoBpXMn6DASybt1GYDMC8XmTSUdmti8KoW8z9UGvfZQkhtnjMwaHDwJYSuLyhA",
  "key2": "5VUqi4eePYuyyFxwioacBHWs5Jif8r1kJgomLKh1DbodoVL5DSdEiVF3WmGuRTgeQxvSWMR7tG83yfYU3RnLE8mU",
  "key3": "4uGXZnLsTtWCeUoh1PhD1g21KJnE7oTGXxjrCekbQwjCj8vXeq5wPeWgd4JqCdi6jLk6S8w6kchQXoJ55a7NCyzb",
  "key4": "3Pwza9m7UpGKUDeXUUrmuoLz51uqGo8U4erDzZ1LRGeobZL9g2fCjzd78ZBZzzw4mdFgXYh32tzJzMVduJKkbT65",
  "key5": "2f2x1AJQkdZMgSoBCSNRsDqpwPHHzaTnc8AUNN4PENr4H8ML5k9ea36xXSJeYegyDAVzX7yXHLVjC7RGo4QadFud",
  "key6": "56MVPgFdxWFkpY9arMU8S3ik1keV4ZW5SdqmghpNzw4JAsxRkuTF6hy1Sfa2RFGfK19BED9y35wiNpgEHMHw7fMC",
  "key7": "PwuaCPEF46mQrwTym5DZNq9mVJ9q6CHPAtzBwYYmZ6BvntqdoYQo784EQ3JLBKQSDAufi7EDgzcjLKD4rinUAd3",
  "key8": "33VqvdsojJsnEErquYtHM18hnL16WEuLTyZ1riqfZmUJQpGuTFgpuFDzDeDPeavEEHvJ1HX4zi6sGYAQn4Hi6f7h",
  "key9": "2pPAEhcGkYTDuDB9jndK2NVyQxrpPnM9CVJETheDWU3nKa6GUXpSmmrL3kjefURujawnt5Eyy8DGggbVgYLGi2HG",
  "key10": "2hpmHCmF415rC6JuT7Ddxy2nSVwKwdXNkt1xGc2dTFS6sPvheMFteTHG1XPBGgqmFm8Btiz8oZLhbYMEKZTxxyXi",
  "key11": "2PaD8AsWzFaj6YZj8NCR5qfFCTcpKBxBFKQVt1M4oF6c3SzCK5ZbssJCJwCHGcdFJf69ZnPTVu2r3BzCj7drAvpM",
  "key12": "wm4uvJ6iLHypdpXKGzkwHkPP8W3h1NxoibhiJfhYBGftpAXMazgfwUVRzotN1CpmuqzYvjUZ7Cb5n9VwGaPt9Ue",
  "key13": "5kyvU7H6KSujYfUurLXsKndhK8rC6bqAV6DEk82FPmyhNPPH5QPev8iW1UZ2ZSdRSKvXKPRiWMCLNnCDdVohk8TZ",
  "key14": "4cCWr2TfPd5HWwF63Q9jw5FiaQ9F3iBHLR3R93bUU6FYUKfaLuU1u2EWgMwuqKDNKnkwX1aNP5dJXCjiQ635391W",
  "key15": "3BGEf5DHWKocfuuaHjjHVki3ttpxw7WmEVPnWkDKjRv3WETa6Ekx9dgBNjg7aRfRJKYeinSkdk988HkhbPU8waHY",
  "key16": "48HYZTnMeH81KecpC7Ngn4QpyUsWYkkgHwxxW9BuGEFtP69H9aghdRtM9rYrrTDXjupY4i7Xa9cgqyFd6Ls3w9hg",
  "key17": "3JTeTWmVdqNXosntdpe2Nd3jhRjEJAaESWskEswcKvb73VVwYukcdRkX1TwBmVZYhrqz7cgcnAMAgvXJJHYtEA8P",
  "key18": "Ua4uBU6CdUVL4ESZPvpriNAU82jsm4fv3pRzwTGPLZK8419Cmpbodm2UPxD8XkHZSJetbPeADZKjM7CoAEuAMbD",
  "key19": "4sc55uQdDmMH1e1zaRissAcofsDEkyL4axCKGKcwXP6Q94czPAHWdaE2MA6EuVp2e69JJMkT5WoJX1mJy6hNHSAc",
  "key20": "8xBbudqZwPPpFAXEmyt8tuBLN2GtRJSNMt8kmL8zicuv2qy4uNCJP2MjMHVMgVKQRnCYaSRDHCRWHNW8dmy1Tpt",
  "key21": "4BqwLnSfiJTjiddSZV9bV2pNDBGEJhRbreU3BpDvBFBAK1haA7uyXPd9eBvuWG9tpNGamzNbiMxhq4UGkBMWb2Eq",
  "key22": "2BSs9uZysM3iCFUf6q55hBgDRnhpUZcM3CbQPyUpf5EKwpEwJKuEepbsE1rfb8kmPWQzANx629injCijXvX182AF",
  "key23": "3u8MDd8RSN79AdVTn2tZAntgpGFpSbGtCGpHDowMwkGUzQgX4Y1UcMuyGemQpjUw41cQXxf31WWEahsLZsNJtMvV",
  "key24": "5wd7rD5tgi5LgZQkVNmPJ1R4QeXEHdLWSSw1tc9QrwbHpxYpYiDeuMcw8cEZWePJFJMPZZ9Ss3aXFZCnRMLiYQWn",
  "key25": "4WSzJSiBxRi1pFaRwThpMXkVipJyaaH5an1ExkxQsyXkD45Qu561mdvRHmEuFmnKkGvs9gmKyff3FTF7R5A9bUXd",
  "key26": "4stNsNeajwY5JwuUpySNfABwsJey8YWcELTnpKe55Pdi72ZPuLdDnrueH7zicCx2KVXBPuXHAb9Udvvn2Bv43pV",
  "key27": "3y7i2k3LmmamMpZR7VYEQPymtZtpL7jgU6yRCUjs7wjNaYk62c5WvyUJtV812uSwFrQwVecGJLzTRtnZ8AG1MV5V",
  "key28": "tB5Na2qt26JqhynJp5AVeExS1qivYoJWtCgyw7dwQ3xp68Bi4LzHKM9we47t9wyLLXJx5tJzyo3aMizcjhWvhUH",
  "key29": "5px6CEy7QehTANy3PGEwoaZ3cVmCqPZiADyJy3avZw6yd377e74iqWGkuSuSk56KoMLzh88kNdwpRQaYymsC6Tt1"
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
