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
    "37nER7h31pxfktGiaue4FjtEHVURYAxAjJGr7Qw8c5Y1A9UGnXe9MYd5wJeX2uLn1ZJR6vDcMHWKaRnGvQYk49gs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYrhn7VGyceTzURbVwcKwiXwAynVhANTV4J15j1hWdFBXBWnXb3TjujNYwBgbt5diGnMYgb7uPt1a87jRcqCJWz",
  "key1": "4vD6Ctxe4FpUvNNUGk1afiogKH8iJP8MG2Bjkw18SSn7CuenQxfdSuGCdGR5fpV2BiqrbnHRLKgwCNP5uFBijh3p",
  "key2": "4svEpU94BVPpiCU8XxuCse57RW8U6nquMgykhyzKup1p3KKPja1Gtbb2Ai45m2n9k9muHJpYXiPGkZsh7DTziEEA",
  "key3": "3cLEhv9Q2Hs4wHsG9FHRhbeNV58RF1VvWLpBMhV1TpaUDRDhcKwEYezthdjzEL6t141UA7hpheHjfRr11uWR2qRc",
  "key4": "44MoWiWciAAiUFvpbss7vx5aMFPNQDSYnMU8e17EkWzsAivgBdufAviRdRQHmHLMemFUq2NUVYS4duGntMWkVznT",
  "key5": "TRbKgqpRLs1og7VrDACpVbhHY8YcFHdLszW83tvwph1kVMQpU95rx2xpgUSdFVN2QVNYHhDNCn3abhuCN6rFDZh",
  "key6": "52Yk2NHm1QDZmfsTJd9cNWwtcrByCzR9jCDfjCbx8ygZgDSiTLQAHkznzEKgzPm1HDBPjZF3kbdZ56nzD5jt8Pwx",
  "key7": "2u3wHV9w9HkwHeDH7LUQPd1WKBP8FassAeZPHBavS3UHSuRiNeNCS6t9DjYPrzZax1atjAnuTYEgf7vnqW2owgJ",
  "key8": "2Z2487J4VnW9WPgdPfL8yUVvTgGt1YW9abEerotrwe3E5yLRfsjdmZYe46e2kNKx5aWPei63ZnvWGPMHzttjYRfN",
  "key9": "ZjTvR7L6SccB328zprgacvC6QNGGnskWJ3nSZgk7chfh7EvpLTtDzZBa2KXAHy75T63rxcqoPoGuse4eDyxtSP4",
  "key10": "q2kn3mp9y2cfiDA1sC453VjVLfgJ1N2bUVvxsBffJaMkEAMCVkox5xnqDZYCEintHdyberq8XWEYKx6zg2GRg3F",
  "key11": "59GZBenvZjn3QHxMgh5nD44Qd9VApkdD7rYEK39yLVmob3tVB2iXQbdgs9Y3hK7MAM1gGYmZMraMEfhRGHzrxbpV",
  "key12": "PBgsADs5heQb9kTzC7bzEag35TCfbTjTyermLeNXczZ5pVggGX2hNXf8Zdm3EGG2ohVdosK1CCP4MeYdBchYSTR",
  "key13": "2JTBCWhmETAU92RJAAPDBzxEnGJrNHs49NqjFii7rBWaLzAfx4a3Bujd6MopKbpzdnHQEPFaDpYcRhXfpfAY3wAp",
  "key14": "5Qds3RGS3z42faFXnsqmxP1VYYxU7FDvT6txhBp9oaNb9hwRMFWPytYqwK6Kj6XrNVsjaQuLR9LmSyN3XXGpWiKh",
  "key15": "67TvwGUqKEeZC9Hbj7jwKbcvbQV7cDt8e75JLzguVzmHxSRfsPovGRrgzjyLHbb7u1yLZ9LeRsHH4UnC3q1JWHFx",
  "key16": "39E4EavpVyZ9EKUZuEfRB1tQqohoc1zYEbWxxmgMirANCUFLn7kQKcKgE4W3uzL4EbCVH9icPNpNqauQPSrrWEHm",
  "key17": "3DTmh1s1fANby2uzNA5YhHSaoGsyroq2V6o8qud7jtAtCkT5bWC6SbvvPAo5LvVhaUi2iHNNXCbkFYQLqXrDu5NF",
  "key18": "29s8Tkq3j36whKPpKM2f6PKEZUspG85iixJRf3cYWPYvFJSyrkjAAvRTjxB4WHqXTuebyMV1RpRbZcdXv3USPeFe",
  "key19": "5uz9ngyWaVaRaguDbgyf57ouC1KERd6yR7oAfXLCpuZhqfWApQubG1FotStMfcWjCS6Lp63N85zUSePQ1SDgRVw2",
  "key20": "3UEuaqveuutQpEkkxnV2vynVf9FKjHBQLKgQsWdymPXLDfhk8J6GJBuXNZdNSnf9aiMVjT7HBGn3QRKhyUZnV4e9",
  "key21": "66XtkCtNmmaW9WrePYecmvoegdPmdFAu6tnKTv37AqAsVgTjUuLyEh6TuZEk1kWk8LzWJ3fGU8kyEx4u5N8KtTTV",
  "key22": "5usxyVp1LtQ5HfRfT732xEcwrn3kyPHDwiK7KyejNJnLEsJjainm2w6J4haRzL8nTgAi8fwfHctA51ixXaXAenF5",
  "key23": "2MKYxpH8PucS2iWvby6vweDyHQW4Rd3SkbsXaHDi4h1wrVYwCkkzPWVPBjxZVeqQuwagfZyZBm1BHLxLLUDpGq15",
  "key24": "QaJy87w1yt1f1pijN5BUyX8jGzv4Ue2V4wWQQrRc2hCL4UrwZ9Qnp9z2DpDoLmhWTGqXWt84XSTZBAiciiXNsAt",
  "key25": "5VBqMukTSJtnbjrd9uLuv46dRSeNc9LABcYe25Ur5cQKRD72LcDxcTiEFRykH41xS3dS6SLGbdRMQFHv43K1ret",
  "key26": "3MipzRkbidXamzTW4uLpFnWKcutabCBjbUCaAgH3pBypRxv5yNbRPe2EwyD81j35nFvknQSeuKkzKY3tByViaBYV",
  "key27": "3o5fnpbdE6FdRZMbfzyZSHjCRFsF3RNwSqy7AimBJqfwFog3cYE3xZgmrkMmuVzb9XMDnNEDwJ2enBEm4eKEo6AH",
  "key28": "2zrzyDXfpD2aSTiP8oZPUHi3qutJwQBdGFt3KPuJDLyUue84bMyJGkVziQbeiPjJHSRwEhrT81dBxTXeRHYpM1FZ",
  "key29": "5KezPM7T82x1WaSqY1JNooZXHj5BQTtxq17L6raHxWEtwuDwqxreqQERSiVDxKAMWdFyA7r8m8aX7tcQtvjgW2zW"
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
