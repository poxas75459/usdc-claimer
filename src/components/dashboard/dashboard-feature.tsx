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
    "2BCrvKk3ma1NEqqttsQbS2LcGF1yCVu6GE1hM8YWuiKZUU2ni9KQ8XfMUodKw6xxoNHAzAws26fx4gitdmgSxnkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KgWrK4otMcr6y4itt9oHGmyY2uUtYGk8gk7yLZXwHXfAx9UjzsRP2YRvX5ccBLCdapPBbJBmnfE8Ed4fJDU21oc",
  "key1": "5z35wVMN5yoFsrXJEEH9hNXHn9G3rDqv9FankCkZKgaCBq2uVL1ogoMdScjG9EYbkrT2tSJMFqCuGN3itA4SdNaL",
  "key2": "25SNZPZaDez4CKCq38hkwFLUkrpexMzQ9ZQpcL61GSiWn1jGQpG8uYtt6WdrrRY9wedCXMWr2hhDGTVaCHDo13Tg",
  "key3": "64og1oFkrUGBwGdhW7mpNm9HyLYAsjpBytootvvhMUbos8AMBgkkESMgVx2Jgo6BnQstwsgXEBPEtHK8wMJih4xT",
  "key4": "2SN3ACTfWg1sRnGRDwfS7Nd6NBPXmRxpQyMabBAZnqF9UgZ1rzfUpN1xcKiCt6hjANAeMrKuYSbHesV4ArRkRhcC",
  "key5": "4AjB1nLKqHwT9JoYv29wnU4QwvXKxBDMtSShC55b2Ui4g4ECysoGVzsm9D6pkTjzQFMSzzCxLA1LWgzVVy7Hg6W9",
  "key6": "4v1xFXKL4dveBHEq4f5AKiiUDHNE7QZp6GhhBav8r2yeDQgGYELFySgUivtgzZ5JoWBs4Kw6jtRLfWbgnEseM2pS",
  "key7": "3nFRjTUMkG5PNchyGfA1N3poX5CzUJkFwiEf4yFYqNFagwSyHuseqL2rJWFvZL34hiEPAYQ382VyjtEd1xAYDVdC",
  "key8": "PYQKjS9L1m8pJSizXqPCYDV4CXZTZtgTXLx2knCfWdN7T9vukUM9o7ba2CrW6S2hkGaPwq7u5xpAEHMQRnVFNVg",
  "key9": "49LRGvsYUjwb2qjcyjs1mnbz6TKn6mCdeCZU3Ldgu3nrdCxCS4bjXZB7eenqyRi7eRCRBULYYNHEuMKjSUXJ5EM4",
  "key10": "4uCbzYZZbt5tmQZ1dUUDBQEmgKTfPBEsGM1WNt1hk5UBCp6PNj6CUyZd7mBWno3ruuhGhftxkQRhivP6ggCTXUEa",
  "key11": "4uhSaePUjL2NTVuzavX4tNhRiEpLPfKwPLPM7FV3evkhV4F89j8taK3ruo39xgPvSk1ejGvK2VEpQuD8BT769DR5",
  "key12": "3YvdRd4Zc8PbrBcxRwn3bJnxfNh9QVaHocJ9jPELYFMA9Wp5mUnpyG6eCkegAJmdrps2CLSRNkrubUxVwe1iCH7Y",
  "key13": "3WVmfTKh921mghL75A4osxjxucsunKUGkxH11fWnEvZsZNL5J4y348HnZ2G1MwAEbUTUhB5pagkFWJH3kyXRot46",
  "key14": "3dNVTk2kGmkR6nkBYrF7ZKDz4GEBJGZKQfjyoKat6orkNn7oZky8eWSVJeZzhRLF22CiDqjsKv8Cb6wfNAosL1LZ",
  "key15": "RHDR9A8Vw9aW8jTYQ2mpwQNHrxHPR4qzZoAmzaVPqyyDXDtiLWbeTK4ojZfK92rkkkHAbCoq7qdthedhyigqreV",
  "key16": "5LBas7mXNKACmYQvMeCie6oA34TLoeKJup2yWgo8ubdrg1DFEXbmpxRvkz91PfxbTuAehPgTPhh5ygptX4thjChB",
  "key17": "4xkURR3YvwkGo1Y66JmiMMCZwBfKu7m4EUec8LWhd7NtivUMCkXDjRwSqpTjb8BMTQvxbV62Nd2Frk8hbUHjsEa2",
  "key18": "UD542QDQJvbG5NisbrGvtwG8Cwj3hKrvfWdVAgGVD2t8psoya8M26RdLUUc5bePPXtbizfnj15V7CTWidptCEsy",
  "key19": "5q6yXQtUbUbJRe2Fw8tVt2e9h7EcziFnQU36vwCY8SgePiDebC2zJYP1Hdx4UdkPGDSuYpyEMjYfDazpLCk4R3nk",
  "key20": "2tuYz64Twst8jv4yeWYbgVhtkSrczprWarm8KiWsmaPBNFQ9EnSSDyG1tuiWZUdmVcdsBb1iSjsM7yuF12hBwwue",
  "key21": "zNJXZDemc2DnkSrEkj7nKvDmL4VhWXsqwjCknSnbDS7fAaGUprAH53ZfFzfv5y2JHyEfbBRWSw1vUHfZyRP98ei",
  "key22": "3wCLYsjAZK9MMCMmpTczaz7qjzTRLywd94JWW7WH62ddqHxDpvH9EpHZg4LyR11vzU8DDDRwgRCgXJm41EXNLqwJ",
  "key23": "Pxh4PHsZDfE98NjQGhrD9bjhcZsJ36Db7fgFcDMRedcNCXWbSTyW532WBDdUuBBtkF5MFHNt4jshoGEzXZxRz7g",
  "key24": "3SRvMKA1iAGaVnt45AwqhVekmxW1HLP2TLr8cc1xJga8AzbRdbTFi7RZYaBAVVYdf66ZTVGZ8UYKWxVnSCVc2eAv",
  "key25": "2VGVcLoyG4GrFeD531NEWhFRvdj8Ba9UC7qHT1tkx4bT3tQ759FTy4R441HSb1mQhKDQjZAxQVtWAT64WqENVnXg",
  "key26": "35CmZDZj6NvVLex3AGE9JygMnX3n25h2as8UK2vUcrAbYs7zEX18zt6XeH6K8xPSrJwZNfZd8ireS61NBpRugBN7",
  "key27": "3ZU9tZxeF4fyP2ebghNfteWknri9WTsBfDabsnZFWXqFDjwSpJWVcbrnwKisyzaVambj7gYNX64MNXy4WHzMeiGZ",
  "key28": "5dqhxsR6sey4GbPP4az75Rm5n635dgscV8fVTjtCqvRQduyMw5fUSwma3mB6PXGrkBdmdB5iRZAneUGDL6x8qLnb",
  "key29": "583AktF9oHAC7aCQa7K3Ezw7M2TmSzEnniqyEfbbbUtasSbMsfuafC34jjmm1YNYA7fSX351hbb8wwf5MTPuQjuV",
  "key30": "5dY875maziN8a13AtvtAUTmnvkc9LkjhqojFU1QpTP7QuDy4NKtcDDNVisEx9inZDDMuP93mnvYpLLTcuzmUjZBL",
  "key31": "5nZdnh7G1ce46BCqkG3hzmgkLPvh295VkbeXbPPSDewD7JaHxFP7gXv9p4EZJrAbKhnvpMkaKULsf9FkDtutykQW",
  "key32": "5h46MWH6CUd2Zvk7TGS8xiWzNYWdQccRbEBCTgpQX71CyobGiDxkUkqdG173R5Z7t7RaSLzrwEEEA9ye4wJW4gzG"
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
