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
    "24iknF5eN3urE7ps23Z9F7P7Emt2kJdfw4mZBXQWntGmYZVwPsvUgCRTxyS6Q6gs466bkjEFFrMezJ8ytbAmRWFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYobKgbtxKbUpoMMZrWUwrfEnn3BoyHTMEqPe3QrEaKjHX9LL4eAJkkBq6f3ec4z68r5M48LcdCvuuLX3V6et5x",
  "key1": "5foHfNeq8Eira2NdkG32v5nSFDD7pE1VGtBSN3GMP953uk2WfUP4V2zuUWhRmFVBL1M5Dh8A22TbBcfAjqFumdnK",
  "key2": "6FU4SiWuJYR8PMzJLqGcaE8VUfYgASo1PqayLxJMdiHftRNYQZn6iS34J9NNXnkJirkDminmhx9gb1itvvFW7hW",
  "key3": "5C9afm2boVuaYibzGHpR1ta6nZt6AteFgDFsn9GmDQk1HW3aQaBRRKoNpwDFUNDKkPRUBW49FjwcpNn7VXt1695A",
  "key4": "4xZkQEL2t3Uc59UPfSmFYoLEtxpa7WnJJGRFzw7j21Bo742BVGakB3nBBMgho4nXCDZzUEAYqzGVTbMWGKCMCcNC",
  "key5": "4Mf9cycHafx3LvbtoWAmU8RhjGPWUT9ig268afBp69abhk73UyByedt3DBHVgC9NQxqLjAbqiVWCjPbNavtrXyTa",
  "key6": "4TRsK6sQeD8Q9cHz8qQQH4EASQ7CQDpKWhQwcqTvMVVZBhKqacy958z4wnsNmcU7iVd2KdnVopGpGatwc8Hcj2ga",
  "key7": "7dQYq6REPUVu3WtAhuoVM76zwz8z5vs3Hp961UWKuDRLat7UYBiirTfLH5WGDjNfbFRnywPrWqu1ewyYf5ofPuG",
  "key8": "2z8g68uQFiy5v9awmJgRhUmVapo2VmLpmuB8SfH9idD2jyVcaahtwvDNMJgZRQwbmcSnmwzCLzcwjbtgu6d5AhxP",
  "key9": "24urvCFKY49XWsNygD21PUXizptmM6x9ykW5W3YSUa5ybSZy2WgVmiSfLS1hVppUvsZwXD5ZLYYrYhncbtpZacXX",
  "key10": "53d8tYaKwKZcPcUmA2TVGyBDrFqGxES5wbK2KcDoC4xmepTgV1JZdQXEhBNtXwmogqmoDX1egCxbK8xUKXvRxmk3",
  "key11": "2Vtm4QRBCs3QT7u37spFGgaMLWmbA2WuGrCiribS7FwHSEjaakecAN5rSCmuScbmz3DhsFvbigNsFPsiPCdscJdB",
  "key12": "CPb1RkgSkVxxstfqeEaw2bvvxz3Ph1NkacrvY1NqYLm9VkFqnKKVZfmkHKQEUnFqxCcmKD48hAjmDNeCpQWg5RH",
  "key13": "5BopVJrtfCSqzmuSZ2HcT5BDyxaFDYSrGvZCvjWejnCZ5rfddiCFSvWdoX2w1pJhfbR3ReiU8eeqGzFoUbf1Jfok",
  "key14": "DSL8BuMV4yx4W6HTykhzW2UC3fBYSRtzC58WSpX1d5suPnNgNCxQJCVGBUArkkSXDHFW3QXJkM7tFRLy9tq2pqe",
  "key15": "5gfEPZyUA66C7VUR3bHcqj3vn27VqyG9M8KsNzajsE5kPVFnJuNoivee9yqbdHxgGYTQAjj9WCtRAMPvzF3gAbB5",
  "key16": "3efstmfF9GAwfqSRbGgJQn6jCMDMz7aA75SPXrs8nfqRvtxoVqRcj1TCkRwR1AxwMG4V69L4VGf9ngMATdPUoCPJ",
  "key17": "3dWoQXiVwmrj3LNBQR2SZySZjpHGyNrVoNPKs6BZggRaRtYzUcsbbYyozN6GVLsVzQVJFMD49jpNqrVp57yeT4Fo",
  "key18": "5junwBUSzYV4dpFuD5v4yUy35ZdZuaeAh8H78Evnz8yPTync3TtoEPYnD6jn9RrGzRCDckekJhLrE4M4Ahu3niV9",
  "key19": "26DxUWjgDoAHQCdVV59a4eH2mTLT1Ketz6nTVcucaUpqR1gJWwS4AB1jdjd3Xu8Sox9DUxCRPBxSduFo89ycnJpQ",
  "key20": "4KAghCfoqPnoFfuVDD81A7tWnmXDye9GKQ24pZ7hCG8JfhwxAYaeVGV1UViGJworNsCzDg6kTkco8fwchWjwPgqi",
  "key21": "3HyapHw3SKrbtZGZ39CJe9MKKoh5Y23sLAaZLNXhu45t1EE6HDcMqd8vSo2zyQLTcbuV4QdcadRMTbmZyXWtqB3o",
  "key22": "25q9ntanitDvUFSHr7iGMcaed7YzqdS1d37SNGi1hTuU9eLs8VmMucpxHPXHdndHYvW3ctSJyBDyQRkhUhCr6RVW",
  "key23": "3ms6zs5cDKn7Zw6BnQjMNCowPZ9hiHqWik2HwPXuUM9p2it5eXauRYRjygw7kFsvFFB9aZ8WbuLyji2vRizued15",
  "key24": "3fqKLkbi8g43wcgvoYAG8txfUaFYVH3aufrBMuoK71wSA21NcZzcvm2XWY9eSPTuvjrF4eTXSpK9tg3nTZZVZMbh",
  "key25": "bnd1GzKd7pxY4CdtDksXEdhfMDBYDezaRa3uMNpfAxRWR9zaQuRPdQR983fS8HrBoCKpCq92YBdQZqu47jc2roG"
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
