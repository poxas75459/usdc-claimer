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
    "5JWujcUVVSzQkAtMn577MSeP1yWv9sFypwARVcup123bLchwRa3FUwT2PtxM96a6ha3pt5ssEbT7EAy29ZJkhWJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nt7P6z12JNpQTJoaqfjbQJDitFxMGyYRkK29VFn3P1fUQSzqF6MbV9MLXPf5TWMSokqqAnoNSue5V4BLaeXsB1k",
  "key1": "4LJTdaGjnr16TgZZXV62MTfRTeeuZGEAoFUASm1UCVU39uFAQ5iUbMsUANmLyFiwEuP2RoX7esc5c15BRuZeNrSz",
  "key2": "4r92MCQYudnr69qVFLKAdNf3iaynrCZfuuQDTn28CMN481yrCq3ErgFtLku37749DF6VD8SZ2hKF4648u8PBQ9AJ",
  "key3": "5vkFmxncok2TGRcuueAXdN3ih3xqHinkznGqNJcUzrNu1tqZ3QwGp3xdUjUBRCMehNWWhP7Nhbx77cSYNXscEPzg",
  "key4": "5csS84TqyueoccXWpwKXe3kvqVmbXxcRE2DQjkjrXcfQ49EiUENvNTe7TtmB5BSSfA7o2jDE23r9DNn6JWCW8Kk4",
  "key5": "2cvVZvGGCE9gAfRUh5ZcuDWMnLMTtf5oQMiazFJSvvZqa73LxbbdPdXtwpCShGKaA672FYGbDmJxmtEvooviwYzo",
  "key6": "45gnJDzYXVom8veMT78Pz4mZhEMKbzSD71puQyBVyY65RQRqfzYrnNdmt1B6hdQnszuZ5GubwhRAwmSJGkFFpTVa",
  "key7": "66NW7USpyR2B4bcFWfsmU4cQYLsJZyWHRdh7TksddAJJnM7sTxhSKWdaNmP3qVJXayw6YqxU3NzFxM7FAHrwPsDn",
  "key8": "3wKZVufgzgJ7q6xQHSoFbPMe4qvCjJpx2mCvavZtdcMsQjfsFnoyEXEy2d8vH6LGhk21Q6VbZMLCK2f7yYviBazZ",
  "key9": "5UfekviWReKcuqCXtKFyrNUhBkebsbMeCEasF4XuCFRTZ64b8SmYxPF1CQBfiJUXcCvcSjXmtV1F8PTv9bK5DVim",
  "key10": "4XwnWy63CDfgoY3uED1N4PF5qmt2Swdu9U8LubuQFMw57KBsDbibAzbekEUSFW66Q1feChKhgrf2MdFAPzVduCKE",
  "key11": "5AsFmt5aWy9WGYQKZoXiZRtd2fCygGyErzY8xKHk2yFV6t2bvv6tCM4yVgmZzUbVukeA7mHAj7iiQha7Dtm6LppQ",
  "key12": "AVPbH3UL9Do49x7AYupkNKCRgBViEvUkGGnjSCAgfD17oEqZiNRRYrexSpg9KYkZN41x4tJnbvFkLtfieCfdoLh",
  "key13": "3QTDmjoUz5bZok1w8us4WNX91Zwz5BVhQgSSRMu6nw3QEW2gHGqEF3h5vhEYKUpZBmpuuaXAHUv1d7BNDEQEzb3x",
  "key14": "2nwsfVkjzschrG1tVC8xenA8ebRU3XnRvmbrAjk884BuMpzA288dfMPKu8RUruCqQoUzmg735trjGAbk962VAAYn",
  "key15": "67k8Hwj32qYeKHBZ4DBs4bfCXcpJnngqAHLfpinuZRSPzvuByd3BKoWdezscLX7A4uC6JQsYzyGx7vYcnnVkQ9Rz",
  "key16": "5x7CufHHejGgE26NoZkb7W4LqhDsbc7P1XyNTRWyXzxhTGg9BBrCtLLZUtXfrwKdd6Xe1ZDrcHY6nf17GRxcgywA",
  "key17": "3T5ZFZ5v5wna7gtNPWvpxnWt7rkL6AxQGAgZ4g2ie47XAQDYqUVzBVica8vPZpvonYinr6D6xZSEH7tuYsKC56zh",
  "key18": "4fHvhA861rvMH1D6UdEc2VevmygNqRtbxvu6Vk8ehhFyZVVCnGYY4rwDCwnRBzbjSvz6Su3Da6VRKUQTr8UEFM5G",
  "key19": "5UnHKD5iRpFbKBqwE2h5X8bNwcr8jHwEV84ceTESbgHuZ5oHcTgZnLhT2T69Zxsqn7V5e7aLCSeWG5j2G9XSDAPo",
  "key20": "373anLyYbc7T4ePJVcQfcDkEjbya4aQ1B7Js4BFyRMj27CCMkN2RHVycXSZ7zSByt9BHwUXBf3teRBK8W6Awco7K",
  "key21": "4VWHBd52aRZmnikF2eueoLMBJA2amkhZssLZvhx4nnXM5KFrBcF971hut9kRT5UhHvr7hRrso2RszpBX7YFadcPd",
  "key22": "4CjpHRYVue8hGRiLUHHwZfyPexrzTZzeytTViSWR4ajRTjycEkHrvaD5poRmpwem1xbqXGw2RFyeXBLrvbwkmP9F",
  "key23": "5NVz4A1WA1cgb5vSqTY8Sv6KYqCUNdkAVqfJWV3GneCxqMNPsF9Q5w2SjqZe3kVDHJ9guiHtdSnTKHwznaz5zq5E",
  "key24": "3zVhtNY9js4H6KLo3Hpnpz7J5AnWWWySkoLjAFQUL97JQEAhcFieQ7NbHfUJW8tokhgUHvzY5ZrXc8f7c8x7s8fh",
  "key25": "bVLzBeM6Pz47EezTUHhiMjNRY8WrSA9HUTCHFsZ6VQpBTU2TXcPi4C47tMwta7hrYFaM6CW3ofTGsxy4jHpgVWJ",
  "key26": "2E2TLybJfwg1KxSXHKUwiVWfzGtHrYbjG4dFvuNsEQn6PncM9ei23KTGkD2u9aFnHaX81jsoEfojNgAHHrKaZs6j",
  "key27": "3bUCYDHkrTAe5tVnNu6qEBGG9kpEQZxbLH26udEwWzq1QdXnuircvyxjxZxdctXAUJfn3mNbMM5Whomkv4GPwGmK",
  "key28": "55Nbi22dTWd7EWVny8hH1BBQXKpnjiQfS2TSvheLswoRbBAZw2smw9V2YVfdCzQKQko8AU8cj2xroAqYpm9dfnXn"
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
