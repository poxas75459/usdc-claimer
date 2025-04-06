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
    "5zNpiVmcyooAZ8gmbaZzfiQG5DG3gPYgmvgApwmkz9ksWkyn6bGPx4buXzppnpouYVkhzBxpEnynFNGcysboB8U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32YXVz2Ajdav64V2wNwSAofWSGACMkcT55mJHuamaghJhk9RPKaAKTSWz593F17BQ7unXZia9xjv7YSYZXKaio5g",
  "key1": "2eTZBUoHCgADwCVHMHfApQsbANaSKxkUJwoCuRLXLfRxFK554Z3kjMMWMzyAV2cxZTAiUytviKmL5ezoVATsTYeN",
  "key2": "7ph1BujnhfKryDD5CnK1Nd3JttfK9W7TrRGWwjgXeFoBLptjtR5omiLsfsHJ5sNgAQpU69PsTxxp3gASm1usMva",
  "key3": "2Bohw8bY3pDXzV5SoBZ8vDuRzMajJqvG1SNek3VhqMfiBMDPmAjv8EUKA6Csbyz9vnZ7GXyMibPmup48C2BqK4pE",
  "key4": "FTZmEF6eL7Lxj9CKwjRazbWVPFpfb514tyS5P7sz4KkSxU8igVmgWY8KNmHa5WE7qL6XGEmwTLUtykJRUyLzAxK",
  "key5": "3p55nTpZKsGbNSzBH2zSQxE6oMB8hKNqbwEqWkiDbMLHogga9mjaeHEd2FRdQKJ5KWzqfzxU7jJUhg648U4csWVk",
  "key6": "59SEsqPqhEVYyC3zFeHEqGmwzUQbKoGWdoaot4cR4E9aczGjWwMnvpMZ9DWYGza5paN5MffeTSqYi83THuqkTVux",
  "key7": "CMAPq29eQcNmbL45CVJYgd4Xmwb5krGmTVTtP6yZjpz72uJjrFWNvEo2o4ebb6RP9HMzQ34QnijxAHHiAY5b2ps",
  "key8": "qAmJyyouAbF5LFd7JjFoP5AJifpXjjLFWbF8sVZgm6zcai1wLwe9XnQZ23FN3xZTQXKzm7WMWeGfy6kCFo5k2SX",
  "key9": "bpNqtR7W6YkRYCYZFv3uojtedvQ32hS71xZUNAbrR4uFQN914TfcQPbMDg1QzvDK29CwjnFbAvKcS9mWfjPj9bh",
  "key10": "4PbxoMtHZsk9yxMEaGsYEjWtqykCaiXhASspMBegGeiqMXiLC3hfUaYb61Khr9DqmT1KJ54cTcNnf1DACPbLfGqG",
  "key11": "4zVN1CTdo9iWaZhMs5vRGajHkEE9QZBYKRHuch83wvMmF7U5B2wBjXaRQdrj5C7UdqhU5BpXHzNrzRQz7ju6Zxsb",
  "key12": "2kseLbt8xbWBYr9iC2o27k1bfCL1f2dTKmkHfNrXDFUnp6Wuayx49WvaNsCMp7VVwkitCtzigYN9WkdPQ34NW2Li",
  "key13": "4Qr8Tnt5Tm7xAqUWir5rHZgo2uev3BeVT3ZJnGVFsoxNcmWcv1SwRsUuEMCxF5PjW7GJb7et2pZrCwN81G9EPMv6",
  "key14": "58Bv1ZWUwhrUpYpAa2tyro1FDPC89G1Na2m6reUMvB6mQNA1htKwBoo2JL5pMSFMPtAdBZF6zZskR7nERsnpTaDX",
  "key15": "2W7hLnLrtSMh4XCMPgoWRrcSiVYVsn6zpHjvb9jdyiwSk6WobvYUZvbyNSopBXpmRB1MpvrDPFpz7Mb6WYRJWuTK",
  "key16": "526rxmfzNRQgeuqfKtZM5JvqFvPiHJY9HqvpanhSMJXdgQwGco9rkQyq3K4T3YEFWac2fJ4vinkRxEysMLXtm8j6",
  "key17": "3jFMzun8FNGGYDBCHvQYmP42Fz5PyAa8mAyBvuTZfwr6VErT3PPhR6EfJkibfGKHhWiuPaUGD8F3SxzG8U3jg2C",
  "key18": "kY2p3NPdXUX9LtCaCbLdue7J1fsaBikGtoQvSerQnDBtuXAz2E1pc7urzYtFr3WywPM952DvowTFoCvqBaJCzA6",
  "key19": "746oQecyGuQ7tF8f4CrE52pC9au5H7dcqDaceHcLugY97n7uBVqHCG7UwWJrm3gnWUHKhq1PsEFKmvzBH1VVvwx",
  "key20": "3cQRTRkvZYRF4MpmYsvVWHKpg2FFXkxGfswndniyfSXF4FytSkGT2GRKnRLteXM3jn5hH1Rk9BU7nN4PfNoBE3Mz",
  "key21": "3eVZEAvrNujR2SXP5tskRiKiHEx7vpjzUtKerP4NTZZZoZnMMqaMSya2WX3VeUzC4pdUASXmRo5NfACHVQvLvAAo",
  "key22": "2jJ7SmUAZBJPkQJquucVM13MsPxALas8nYncKp5korMEMULVw155BGp7VirzWzKgifd3qqFdPXUfHY57qBHWBV4e",
  "key23": "2NW75heqGgbnguGs37EWj2pwxe3qNnKqzsERbRns8yg1oXeK4B5tzWz6sus11bRzfKDy4rJucMmMADZvv1dQGc1",
  "key24": "gdZwzpYn1MSvUDbiHuPr99usxJGNeaeBS2KyabVBAyTG29eKwYa6cpAES1rTTV8QzMNR4rqZPdSdL6BUhLn8594",
  "key25": "9M4jsShTzHqFm74beBcPDzGcVXPULz5dUDpu7DfepsagsHegdVXLiCpYJi93sRHDqZf9kEjgc7joFSgpMADkZFp",
  "key26": "3v9tsSuZ7pihUF2B3hszvk5z8wAs5EkgwHP4ui8aDzQrfYwgcYKBe5rPkPxf3AtvUubdL35sSaxDDkZGLKPv71P8",
  "key27": "5xWaXVptT5LPmYs6XCBUmU1JJiuqn9ecgTqyaHHWd3yCjz6Fwuw1xLWCeT6PfCqp5MofpY1vrz4wAv799BhfShYv",
  "key28": "2FUxJdzLyDeYzXe8ErstKPSZCyP54o8tF2W765jWdP3MVmP9kZhnReTYMoB3B8yeda9myDm1wzLWAeVV1CJcCd7T",
  "key29": "5KPBXwXWAhH238mw2ZUWvhSjxcuQ1M3GZBYjt6RgUYYNENSTkAtzz2mHJnwwVMFwDg6y4n9fBwt8feFiZJhzFhTg",
  "key30": "5JkzAaWWTTUvcU39ChcktEzxKskzV8f3WiAfmDvekzyGde1PifPYMxoNZm6QH4ELNJtmPBnPfBy1u8BqkVwNJjTF",
  "key31": "5Q3SkXLg97FQw2v4k8xBFTWuySmoKu9MT9v5LefLvUswK4oLgvJK5cgpRLnrLowyupTBwSoRPs9gf8WA73B3oCMA",
  "key32": "3ve4uKBaDA4mKkF7nDN6aog3QemHufBhrvhcgvPNMVH6D7NSQSZXREp78j5VCx1Sm242SyJs1xf8Cv4WwwdWnPR9",
  "key33": "5btBgBwGvj7kFP3hvizZE9NAvs4vafbCaRPUTVhthotNzbScBR4AHPq35bK2ua5W9BC1uXtVKzPgYKxo7JGmBNvZ",
  "key34": "3LRGZcd7cPT5XchXdMpXSfHA4j3UGzyhp3GHbV2eG7raroa7XA7SxbDs7kQYAiXWxuia3TKH7s4tMuAZwrcQTQ72"
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
