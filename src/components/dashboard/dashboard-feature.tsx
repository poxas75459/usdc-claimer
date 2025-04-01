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
    "4KUQHMUTXAr6ki2pkVkFTmPC6Xx9vaJspJSnRod5eTzWQiz56rKes6ynXaWGCktpjaS4zakRFd3d83GWoXCNpxUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AsejByqVTGWfrq169h3mAfgc5msVhLbiCZ1hT7EMzekRJcdvCbUWLbuNfyqQYpAZ1pNktT8ct9e7LYKjQa6po6z",
  "key1": "PEtWfBJpwq3pCVan6z3nmsPKkJs1dzBv7Yr8zu3sYQGkaaJUW7WdXUM4RULAsAPpB9Ro7WSru2LuZpuSDRWoVbt",
  "key2": "61xW71HfiCBsyVDWxAWVQsEQfdT8NCzXXB6QKmktyuvEjd4mDsZK16kmrjQXiftYVnZ1Q7f9DWi3USndNgHBnGAw",
  "key3": "bDqqBfaTCiTeSbMsRqBPA8MYdo294x5DgGb6R4XmeRtYWWY5VznSC26n3Beu5B2yMUCmudYaDKGk1DMAL4JqFm7",
  "key4": "4AkE75UzXFFxck3VAH4J3uA9emDLV8AejAi4Rc1uGCyKkHx7Ua5cfDMmEFWbMFHaue3t9jceW2EbEtKomutHfVhd",
  "key5": "2e6jhuAH4qwqNAnKMQAenSpy7xWcwV5rGyysREpwFM43ixSWKbwn9rzLeHZ6SoUmX6zqQqoFZAFV7TdeTioYF5aG",
  "key6": "649djgX8MywaXGVu4Y3HVpv9Mmd5hUukwDJgiSQD4abjdeN4bcZ3wqaPLMvA7Tg1tjjfBgHA7kr16eVyLvLwbLPS",
  "key7": "2AZp7nbXCy55jAVo3Tsq6FkNKxDn7NkRwtu1fNMLh3vEKFhwyzJ1BUZtQSUnFXfncS8ugETHGedyvacwHJQhLWDQ",
  "key8": "4VDTBHTAskYuXypFVEEip6FyxG2AmRqF8T6Uy97bwpi9B7CrAW6vFEHFWQoXNNYPj4X3a9xaqEtyF1KG9yxHUHfd",
  "key9": "5JGAByUUVLr4gmU6U2p9vwpcjMfk1kZiAJoQpMV6fJRfsPfnANBukHVcTUGCZRoq8S6DWt33EphdAK2N7BcxtLFb",
  "key10": "5vJaKrV4ZhcXQGovW5swjJWuMpckmv14zcquKvTz8t1A2ew9GKz8j7FGJhUBF4iyRcyQpYYCYkKKxmQGtit5LVK",
  "key11": "5TEw3Lwc1v9NYbeKdY1cK1Seef84z9d4jmcxAB5MMBogkexShMFVLPiTHdSrsgTmmgLY77SEFwNWJxj5FvFifLhh",
  "key12": "21iRPEr3f66ymshVz9EGuwFXskd14NSsVjGkM5pJHQwGLTsSdFEriGXe312PpkoS5CPJfhRForzeSnN4hqmDsvcx",
  "key13": "FtKMHtFp4GycJWgvocfmgsmk8hkjTmBre5zJSwJZK6uCKFprqCjc5ZPDtd2u8HiXBq9xw7rhXEMcjAXRdXeiawT",
  "key14": "3Z3Rr2tda3CTbLmvtLfoAikrkkXBk4SJrHDQRAbMLx5JZnSAUsw765gcpFa8Nykorj9yqPuc5TWLpA5eWAjhS9t8",
  "key15": "44sJgoKqKhcmVN9vjrk5UkiM98SFYYgHbkc5xdqk59UjMtGjGgWd51xLYKbtfGFoYf2MAykobJjCKm8CDfDs7roV",
  "key16": "2kBZ61CwbeKWByvXfQ5mTsRx3gXTZoAQ3dV1CgTtx8P4XbjpRDP6K73q1hxAnv9B4KBD1tss5Xs2VD91Y5XHWN4V",
  "key17": "tf1LsLRn1Mer5yfKpffvkGh4FE6VgHWkVrELS5jTVY8aanFmL3Lr5gSjEG7tyE7buQQSgz6qmQ6u8R86Laq56aq",
  "key18": "3tiF7KmW1FCai8iS47v4wNvABLvHxhbvEwkKieCNj5ndES2kEG1LyvqVEf8VmrtEbEcUPiKNZWi4hJyrVxKKAz9j",
  "key19": "3Z6BDSpwcMyvdeD11qhrwgwTiynwuNYFGBrk4jwZmEC4ybcvntdKAqvHjuTwLosgARE97e35z1WEgjW7LVUyNcyD",
  "key20": "2cKWFuQ1yZ8E3E7tR4uHVpoWCS2qZ9dhrT6avnnFFCxWr8C86H8hxPWF39Zc1Mjf3mhhpG2bGzrvdn6cuYigc5gB",
  "key21": "3KigBAxujvSK93y6oZ9kbA7NQNXanBSsL9YSrPPNVptZQHZVUMy7YCnsbvJxe5ZD353doZNQ2vdpXxdt4oaHaVAw",
  "key22": "3ujN9KjRNvC78d3NSoBcDV5y3rA4Z4zBtTKX4T35TGpkoL5fKtg8NmjWHBHfrQii4ekG1kV6DvqFQdGjjUsraXNi",
  "key23": "3JpX7FtQpKD1QorCf5wVCKsoceqU1itFaD7f5AzPfPxm7nzqqygf2w8j98BqHe6MgH2BjUcyDTbN1DvsaM7j6P7a",
  "key24": "2o9puFxpo4ZnD1mcnGBwwBXo9Z1BN2xJKF2c4BBxv8VT7JKEtU9aFmABG8VCA5gxiJFyKy2u8dWVjaQNVTCHFxNd",
  "key25": "3vpmHFWtRW8Q1FXEyU9XXpeAX9eeNcrJtDvMo2TBkkSCUsa54bGxcjBuEPMZMqjurarzZvSdy4SKa7Rv9UFm5NZD",
  "key26": "5zarvtqeWwXVNHQovXJFcuiY8rvLYqmPirqx9FrqAN49TJ5zkPxuMzDT52aLZqgDPEZL34XM4314eEFXpfoECrTK",
  "key27": "3bAaZxENB96zd4nPRBSAQjKvtFTjZEbhdetwdmb72yG9VpWvX2C5i1L9FhR8NuKp2PY4UMCsxeRqp5nFV1xSQvpa",
  "key28": "UgKND9H6YiG8aC1fzLEGhYBjgr3sU1Cqk6VKrxkFxcoUd6FiQ3BAqimJG4se4qHiHa8CmfKrAKMkpeNxXkvVmJV",
  "key29": "dczWxkcRjjhbzeY4phvYWAfS8RXLL7oyRsuFvcGugCJjBNJh5HiNujMwGrVk4vZ24MaLgZvRjKtAWD2uGZ5SsfE",
  "key30": "2pQxTFeukWaEyRv38sxp7WFot75vmZ9VnmX4uRxe3Kfz6FuehQ8dpyvSnwdAvZrST79RKWVK4EHrqEm8sTjKoMKW",
  "key31": "2RF4syya99fpFkA1aRKKQzuuK1RTDyzGsBJukf6nAAXFR9MixtpLp2oXk2TTgAkq9KN3H4pAexo7rFQzCsyVDd1m",
  "key32": "3YqehMcSgAAZTNP4DGrF8uegSRXhrG3p6n9F2F5L9d3b4om1VhmbFyX1yWxyp16bwzYJfEB6vT4yi34jnysZf9NA",
  "key33": "32MUs77moNMiNKUWYvjknpYphG468agZd5qSX4ZGtv9Ccn5XDD18snt2VQLcv1xqHrLvs3Cf4Xb9vVby4HpKH3eX",
  "key34": "3qXP1U2ETUSzcK8AXc17djpMR99sKt66uLFYWLz6rmE6CF4aBHkT9mkE2fHbDBvW8TqTEsj463MNFuedtAyUAygu"
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
