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
    "5nNFff5SebSfZADry4wCmj9kB8G7A9jTNYVu2YGsD36CMjNHWKBBCoEahcNbBgTtqG1cPSezcw38X5G65rDJymFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMA8ik94BmBSftcnFfaYRhNMxGWYd4ewkCqBNzy1yDYbpzoqvhmHpUNKxGAsiC5YdWAjsXLAjPu1jnuT7hFC8Uv",
  "key1": "5KHMVkXDzqXbqisDgnng3gmCzE3SjsjmaHsRqdmKLyNKksuAjJkvby7KEi52VRPq8oeJQzGRnCZgxLznqZVXFjHd",
  "key2": "61kzN1Js6Hewuc1viC4EZ8yGXV2yNFunWtam6LUFTTtM8BVjsaTgddr2oAyKZ5pCgMEmJrC9HGeJ88FMxZZj5Wrr",
  "key3": "4mVhv6UXaABAKziN7JZEDFwQyH1Vn8pvnaYA9rvsqMvhD4tVWAWoMUroksyDms1BRmANyMooLCoSnNndMbhnXquD",
  "key4": "2XtCQs9w5P5tVGbDNEyoPmvSJktmc7RX4Gx3Won4E6RjoM5mfodfanKyQ91Xu836621a78BihzSa3KCQ98XRMiXZ",
  "key5": "HzR3UQh6U8HiX2dDLAmUCdqFrvRDXL1gWPXJmJyz8Rms5QCiMJhbvCmEdpoJrSAHQrMaxNmTiaLVC7qMCE2TQrj",
  "key6": "51aDzmFodgG939eYiPd1ZpW4cQpADEMqqKEU1hwXcU8bFoMDPgd8UXYmZUrj9k8eMHAVbMf9VRKJvKCm2gyPGfBe",
  "key7": "5YusT12Mjv19SG8yQHQuXxzriVVx1uheweZHhJEoikMKf5CcpQokjPjWdb9LxXjswRdpKZhULSmVWruD4TA3VSYw",
  "key8": "YPSNckGPvitjdDmGB22wPsJ8ze4QtRY9Sqd83bVXcfmJTbrDvCf6mFCPE9iad8ciwLKttHfaYGn5fCL2szGc3VH",
  "key9": "32RSHAYaPhFwjdt8tZymE6CEqqRrS8QDEdfy53ZYeUfsmMTJQhpUff3DSFWz6mMdpzdSKmGLBHKVdbhrv7GmxBPg",
  "key10": "556qBEmqFpHtoNGjZnfuHHPpweUtzNjkBgmqiS9GR4eAiJA6SfBbqwHUr3CmzPnt3UnkSQcF2JXpL5FPkg4LVYj8",
  "key11": "2DiLPVJ9a14BHFLKpEjaeBnSPrYYNKAYpb1suWqEHkAv245TEc7JEHC5Cr9wzSopxs4x2HDNaGKssZnZ94BbDn4Z",
  "key12": "3XL5dMjPKRgkDt67VeTbSsEPyhJRJEYM8RYmniGBsLdmCgZR4NxooWkiXeCg1DBTARBNKpVucG541D5Nk3qwAX5W",
  "key13": "NnX48RwajFosmeYpZFDJG6yrCEvMYksrznn9NywnMRp1x9Y2jaqEACwLrh3DZZkhbkoMFmpbC6E8iDXtre8N1qY",
  "key14": "3TS4eNYBxRpunLPqhVpgSSAxfMRZp28QRFhuhMn2fu9XRvsvhsmfs92dRvanDe5mc9km2eWKjYJUQ2yoLpBrSdSX",
  "key15": "5M3wEFMMMLiHUtRid6pB1F6iMqnoVnoZyXBESzq6JGa5MRzKV7gdFpVbdEK8KQU4TSDSuSzPiMBsPKucfegtDZCs",
  "key16": "2gRx4mR5kBuF1tXrfupHtRvEC3WjcL4fSXEcTACD9paGznUVAbeYD6KWuVG8qAHR15M9MrjRVFF8pEosYbdC7Ufv",
  "key17": "jeC8yF6F48uQQBjBAcokCufSchYxjLi8f1fciMaH33Z7rscqPQbkZRYzMUKdSRdneJnFidpriFpByNnM8Q67zQz",
  "key18": "4ftUKHhNNSkbUgSZpzeNzLvo39fAMEgafMi4oDnXH1h8BwwwTsQSzPrskTttTVarA7Rkk31ZJnkaq6tAoDuBNuFu",
  "key19": "4RfQUBtmDRAWHUAASYxxkk7i9MTjcyMhPVjjRdY41iwMsqRSaqwC8iimiu9h9Wf4VbXRCgxqTw1HwDURQ834GbsF",
  "key20": "5bNMrJS7i2EKYLg9oPUNj5x3eGzTdRmhDUUYtq3qSbsCGxjPm89GUzHEUuMcZVYxfVYNjDTtY4Rzpw5oeTzCtpKF",
  "key21": "4fNgw86VqnVMdzGx9NUs44PKuVj7dqhe9gkYn3ZQyYWGJqu8V1KCmjyqcmWnCstdcJF8iwuFGYc4T5K3mi8rzsQH",
  "key22": "awuQwApxmJsajx4J8PjRoqncjtURQWAw2ZaNJsACwZtkppiwWFouAUczdnVsC7Qe7Kz2YyL9k36y6NUP6cFx7Ps",
  "key23": "4y7ZPtgPA2GdrC1YcUKF1oCbpjFS8w7pL7DFJM6R7zYRXxB1wcVnYmnYCrJ4MxLGqbfwDhnsnLogDN8UuSoNRq6S",
  "key24": "57RKj6wFtT68sYkSvap5brYvHrFn2uSpgeFoLQt3vXWzzq6t18d8RCyyvmKMdM5Ws9bheCffx7WpcZcWo1rfzTQm",
  "key25": "2pXUwMb2m6ZAdmxHdrKE6gdnXw8Kqafizd3Z4TQwKVK3nfbT5Za2284SZEsZdrN9SfEEmf3fN3EMp5n9hwfYnYhA",
  "key26": "59Frgdtcb5DtPUfd6TCQrLFxNHZywxQ2TEGoEkB5eegpf7ekN5sQmBpxmTqTX2Y699LWR6ge1Y6kaWB6if7aA4RN",
  "key27": "5ciTgtsChSsp5r7XE8DPmAdd1ii2syPTFaNWTF4jhG7cz7YjsmUta16LEgf11fWfa7scE7cyJgssY7XT9JvVzPXe",
  "key28": "35SmC5HFMZqqxocwpDae3x3PhRDL9KWdeZyrsu2BHb15A3BaoJZZeTAHwrXpFykraChv5EAcDVm6MAABcfYHAMH4",
  "key29": "26kBVu13Ad4c1p7J1wpSvsYwKEgk6aaUp6cm2VcWsVgvWDJ6m4UpYHe2epmoTA9eHc3oX3Mnn1Qtzra1VeXCRas5",
  "key30": "22eSiAHuLPznFssZBx61pt6eQnYtKxSoKsJfdxzD7dvKkG2pKBQsqgRhG8j5vS1TFzK1EH9wSfa6HVhAqPd4wbBp",
  "key31": "3baWhKqT5hd9yT9Lqm94VVsQt5eFwhKgGUyNAokuDEHBs29x22u516f742Xji6ogw6NuxMxetwnisK4aTpBbZcEx"
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
