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
    "4cNWhZ74QVEwSVLYhgBwittUPDJRwwVFZKtkRjgD512ZNS5fPpZsHyZVL1zmS8ZJMpCGBhYpAgxmKnu78Dp1wWVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dqj9wH42yhMHNtzGbM3gQLboAVrMrSnV3rGDkyx6KEeZLLtiEz5c7DbwdRTQHxieaby3aif257fooMGwn6WKba",
  "key1": "452N1o23dG2UPqAHDNvKYCZVewA5vTdNAqGGrw1b2tgkGjntaYbuaamVzG7gxxA9ucwGj5ZvRvwbrAoFzaEeqXFF",
  "key2": "X7QTeYCtGC524fP3FgHbAmR7VYZ9rqufHR78wm2D4faF1ScSgHL8ViiL8By98gYY1BeJ2bBS3qwdzeoRx1RgSvg",
  "key3": "BEsEHF1612SLQtdEvRN8ZTrjnNJ1H5b41eYFqZVqEHYqWgiiTEj5mPekJbuYxkG6s7TagLWvcAdCYNHxEh6gMWr",
  "key4": "4r17yMcuTXxFf1o9EbqfTcxj2NWPQ71KnGjhNQZbcmzAhzdn6LQB136ZLmSpibK3hZtgTpdp7EBuey5G9W4bYcXY",
  "key5": "5gBS8fwxBUh7sYjV4tuF36KESkv5WPege7EEc89U5L13QvCfJ9KKFZ2EoYSWbQKtmzJRYCfewYdfAgfgD1X3NxeE",
  "key6": "5k1u2cGpLk9zSVYcjTRpdjcsokhMx6YruwaLeHBy2EXXGdUGR4aknp1VkSi85WWTpwvheMz7nYHbzXBq8W8uFdyq",
  "key7": "qG7CjkxaHwqHE1dCmiEYiBFLFpV92uhroqv3cdmZrTdZsXg69rMqGxZf4QHghnQX76YNfsEsF6bm8M5MffaXWtC",
  "key8": "57hegx6iuMVxMduc5GV4BMsqKhMZMFFVSYPNUyPjvWsyoqtqSn461EmBbh9mutgMih5WvCWucQZTpk7Dx5edKD2q",
  "key9": "66FwtX3he13TaEz5LCfngJ6Fuw97k3VTyeqBrHfWpCP9ZSogcFE7VrkT3AJsJCybsfFWWuFqtdzDY8Mz3NsFnJVE",
  "key10": "53ZM3WW6ZDZAXCxPxiD8Dz3nenjzqWJZtE9dNZaHYmkQxm3oJGwsgVvcf9WesxHB8A6RSGkuVGSH9PrvFhvQ5xSr",
  "key11": "3KkEBCuE2rpuRoHzxEMMQw6MGjUdYLHLsx4F6wR9pRW3YUvnDZGaDZscZ3RYMtVGueRotvbAcUehf32FLhZpPB76",
  "key12": "4sanLnFekjsdGuynwxSE11xuzTxPiEo4G3rBNUQRfGqvXPVLt6A2Zj95rtt1GVYQSDyVJtwB1zSLVAKW4rFa134j",
  "key13": "2Vmf34CtMRw8d4CWPXPyZXxJAVxsGZbUhUEgoibo6oLZZwCuGgd9LH4y5SYfK7zRXwdJjAzrvkjt7zyHAMWEhXM9",
  "key14": "57zV9emqpi53SzED8xupyxLqH1V7ytiyPsptdGuEMvZyV7VKrsJeuSqYXhpQpDBaHFRfawEq5dqwHpd3WrSg1Hj8",
  "key15": "4gZxHfx766KKp51cVkJifXRhbFBW1oAgqB6TbHh6ZyDBpeoWiL89aRaWw4KMfZZoSQwXTsCSNgWbf2vDbFhkrh7v",
  "key16": "tAi4g1ZK12Gqzvqejva8PRcRJceHsbAjAEzX5HSR9A7WiXifCVXPyhp2bZy1gYJEuQThfyiwpW2Le58D9DMjtRE",
  "key17": "67Y1ispxpQikvNQZK11gw8NbpyuJ7tfpRmxFpRiaMCZi2Ly7kM9Qixg4oMbZT6RzjtGQGSN5nmJsdjf89DNgCPsF",
  "key18": "5JcLAVnWPxt2D351ehqtQpY6wqVkCbcu3eYA8xSz5t2qj1VxBHhaGqwdYXDX9dj2qi9xwtu38gpNDLj65hJPkU1E",
  "key19": "4PByvTftJvkzVLvbU51HrzEuY5QS6bLsm3UbVBYFSTYHTvnYy7itn5kKyhRNhQ6wGVcbfY4taxj3sNms8uFNTwg6",
  "key20": "51TaqpJkJDRXBbKcVvoQjkM3LUtuahjPcBZ7x1Fbz3rko8WaPZeJ9vQKyPkTCy9Yjhfhga88wRocxoScU82YcWXH",
  "key21": "3XyR4cbG4vLbyj8nzwiqnzzUnXNBrtdY21Gq41MaqMWR6jyMNVxCi8Lj1BBzP1eSNtJ7MupDbjBcR9LtdePycKdz",
  "key22": "v5XMVmsYkKkv7R9Y3x7udcHSKdnig5RkSs974tHruxxxo4qEeCDW7Q4XyQwQqS8QQ5UUgPawQuupJNqFP2oztBP",
  "key23": "4MWS49Dk1q9QYepAr5kRR5sujGXqjffJkKzLZXGRktfBiF6wkLp8jS2meV5zMz1W9wrQb4MgpgCgbCczWHQrhJRL",
  "key24": "3izDRWPx9ZKA5C1cvHq9Bg3JoyDc6qJ9JRDd6Ew5N9QLqKL3SvK1t5r17YRREQkbToGHAbAHF5H7i7fpkyAvVxbb",
  "key25": "2S29A6cEFKJwqt777kVdrfEV4Fys2Aokm4BWcC4Mfwnb4s7WxGUcfBPyjEnexLYmQ4ePYeetY6ALv4utJ2p4uNdK",
  "key26": "44XnqbDkFMoWqYFXhZdP4LhSizSSPdLodAYHmuaBLvDipp1YztqmU575eMU7gLrBzJx33EnTbyvEG7CPmf7ip8vE",
  "key27": "3nmeeXxEZJ4NWeB6pmTC9i1ZwXr2RSWEB5g614gZMuEqC7xd18zBXrH13w6pqSMsL8KwGdBHMBQS8y5CBCQEJsA6"
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
