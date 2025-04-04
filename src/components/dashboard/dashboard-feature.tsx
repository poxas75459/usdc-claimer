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
    "3RYHMSd777hrxPW4Mu9KvYPp36MVV3fAUm4MrpNGVbTpGmziVBdjsg1PwHMAipufBj8NUk69uJVx9VMYCSPhihc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64FDiwHCcX9vLNPiEUT2qd1Z7w4gXrDoQSTdc9ZkNhwXjLPsY719QaPE2SHpHTFgaevFZuL79M4KdDWw21Vqfn1d",
  "key1": "2tCqChfuLxtFWFud5uD3icQpAtKBW96GNVqzdrkML2M1SV44qDrUdov5iLSusBhTj9TQD4VaUd8eyTNTc5Fd1tbS",
  "key2": "2ZjqWU8sr1wPhiFUQNUs8w9P9A45vpHWT2TmHzm6GGwUsfwYU8vza8QHpdDe4RwvWwTA1NAkyRZeYKkTTihdGTxh",
  "key3": "FqfAFyP9mQsHVGxbqtW184LJCYfXpWKVCSopX8tuQAxdm55Gg3riay6kUwKytft3EjQ5eQhgeLpCaAwD9cWicVg",
  "key4": "2f4zzb7CGjrJe7vcedgo8aX8naxVQw7qWusVypThnZsEyoCNCRmrWWZGQGP1Wf7R9e86zSYjnAesE4eDKomrSJjm",
  "key5": "62eFvCpEt3g8R72i7atMVpP1BAXtaeLG1ce14NmXsVo7ZJJVMcaQzBMhnJhCqsWMe3cjjGnYZZb2Cx3io7Rqu6bK",
  "key6": "4abQfQfb8yuiQYJVcWWqCEwhDFHwx1Bkr4K3eLxWiA5Ks9BYcTMwjCPFMzNjaeUARDaAs9T5fVTXp4A5Ww1kyLqA",
  "key7": "477CzVgWYoUjsoeJ3CpAD2RXzggggYDZU2grC24GP327GsHn3eULVV2TRsw59jaozpYp4pWCMyQcW64hXmZSXVNz",
  "key8": "3SoRcu2mvA8muQyFqceDrExAcbTQHUMmcSCtVChtGG3xQb9yRGSkD8mxsLzvKJp6si4FtScudgD9kafxrSRS9XLe",
  "key9": "5KhghKPNwhGBNUUswDHFjaDfrsh8L2PDTnF6mPLR8Tv8a3paL6TT91y1LaNpkd4wG4sWUvWhhNjUFKWMbcraLHvZ",
  "key10": "3th3TNANt7qkNEwN5gxT8j7UNu218gp1mLwNpoe3awTkxU3Bfyyj4d9CkVtP9eji8gtwurpV1bSWVQw3Btc4qb83",
  "key11": "Jz1Yi6XuVkz9YpdDmmMMHbF5xBkscrVa7u3eHs8qp7aDehYQxpHPkYYJMWkojkwTpiB2CpbgZoiTvmndCJiiZTE",
  "key12": "8Qd4ACqZs4wiAzq5V13skgCyzSbJEbfx1n35gDuKuaJvVn1cUbpNnx1UyX4npLKR8TXRF4tqZLPtXyf9QQHaoth",
  "key13": "4GhZ4oDMG262gyqCotUr2QH1sHs72DHDnxGyVb7gz6FwpiiPq4yDbJH43vne4ufd8tnN7TpqmUECEtHbNaFK1vzz",
  "key14": "4vT5eHtJHRwpmHcrRsTgmoEHtsuFMuvsWdvbW6dLhDBwL3W5V694RjeTvwK11G2qavpkNN43rJ7SYFSyv1umdHTY",
  "key15": "5tKnurU2GLKCca7vwN8jFgmT6EeXVvcvff9JbVD7T61298ewqGa59rfJZiFfR6juKbM4ysVif9jmrhjMdKUt7wiD",
  "key16": "w5XvLXrexouJ9ek4uksz3MAGgeQYaiiAPKf3fEEd8xJafHb9LScbrAp4BW8LdUWY8Coz7PhRZ1DWqyBuXSQnYKg",
  "key17": "hnu3UwFn3yFwZDRQrJetkh2zjBbfrZWQjonw5RZpdwuXaG5kMxZUnavT4DmebbyzHypdnp4PUVKUwh5yoYgj3Lz",
  "key18": "2iwj4pL7qzJYqzi9mz4VHKuWcVPJzDa2j6W2wfwCMLF6VAUEz9xsod3x8ZAh9NM9xkoCsSBU9oMs6FTVLyBLpgga",
  "key19": "4uwNPsWUFYyWbQAq3jypXPDfU6rWdxGX5XM3Z7r45okvmgpaWxqg3PvU1XeQJNZaFmpimoCxsAceqr8bZdJtk9Gd",
  "key20": "2Zhc1H29P6DRrCZqgge5GCj9S7byjC75d856mpdCcYVWiDz1TBQeUbZdL91sNoyupHHcajjBMShW3zoEKm3dphpf",
  "key21": "124k5wCinzzoghZat9YKSV15asyFfRR6R18tN4UtBvmVACkmwby4diYkTcFsiaMMAnsSwWhpCtyxqFnNyR5UDp7h",
  "key22": "LV6aY5NvvqjqJi5MSkMhYaBjN8odBZEMV242ju6jh8D4GiMDcz6CEwG7dj8zpcRCcn4towvTBwvq9HawyjWYyvQ",
  "key23": "57w13AxgJ7VfKDUFTWxXGiB4iN88vvJzDNuEdNr9Bj5K9gHfwPMsKMgPEvdhVfaPqVUPnSniKAEKvixddSfyuYGd",
  "key24": "5WsmHCTrkGhr226rgE7hK92xADvCjquBnTAYgCsyqD4DvBfJDK52iMWi9Mx52cmfKDDUuVM78ViAajubPcXrUwn1"
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
