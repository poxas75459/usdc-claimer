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
    "5HBwrpMFHBae2iozeUCLM3SJt9YSYfWP62zNnhVjVFQ8ubvYr8LzkXfm6q87S7JjVuPwg4bYzSyi3zq2T4yn526n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qc3bzi5votdsHGYCJz1UL6bpbts6nbQUgzWcQKu1bep9fnJge631zgj8LPZkSkJLoG6iArx9qf2VWiQwVGVv2N",
  "key1": "2PhCZigthk5GjHb8UzheFgpP2thUr99yfaPXZRxjKQfUS5TXrsXQRkRL6BajyEbqg87hLifxt7x3RBFJPF7UcjYh",
  "key2": "nBuufRhATwjbrEBb2y37YSse21tPLLsj9bABXG7Spz6nZoubDeiFuNf6WzbienRgBnyu9d4rcMBVMHnpjZoFQJ4",
  "key3": "366SaMGLfrhkwZ4pBCXYt2nmiVobW9FUz2qjjTehN221CtHGfmKSL7CwVr7eWEnKp53qA3oPsH18W1TD7PbZiQVP",
  "key4": "TvkuYBTgm2VkRuDvze4PK6fSofh57Mtu5ivg4V2pdobQmzVHoB7jFQMXe4GD6WfKJcppFLmfTqnMinc4zwHjhcB",
  "key5": "JY9TDAXsa6seYHpyhp9B1rRs62Y2beW2Ei2jMqfXy8hZ94qjVaT3CVpSwF2dWjspHsuy24CEUQF1QntmEk2cKEc",
  "key6": "ViNkfaeL62XEKfEtXnS9AqdcMZRu5LzsgFAGZkMcEK5WNVSEvpS8k3vmUE25bsv1XjqGwV9eHrkKJxWZPmV1rNE",
  "key7": "5fUrrQnHQr6iHwTYKkpaN397jxjwyLiBZVFDnKeUvtbe3m2n8pYpodQZ8vFHWCYT53HzahmxnjupkRPueq3UtEaM",
  "key8": "i3cQRu9zavEz8NmT8jAkQRz4WBoMJKNN3UP7xEd77cgCcBFgt2bhFUKR7J2uJNmZfKBaLD3AG1mimFFHi9n9UVr",
  "key9": "wBAgSnQwsDWY72hJkr1hh9Z4C1X7sPi1k2QtxEJQdWsGQicavNFwCg8eUA9KTxa46PCZ6ECtWXX6DoKoS1ARrVw",
  "key10": "4Ka39ErU91q44GfD8ZABh7FbiQhrpbstKQYXJtnWjrP1Sbsj239KDDFi5Rg7BgpvXAPA6vdm4PftfQehZ15397zR",
  "key11": "8amkguumTrttdBSPqnPEGDpZZLLdJSDPYHHb5Y2WogGhTWBbqvoroy5Govy47gPXKvu96s1BMg1jMR9Em5YHRma",
  "key12": "2S3MAnL9fJLXytFcQkTfCfkuBSY4WirYq3YsHxQq5g3VzhDzr4RkzyYKZaEinwfNCDPwfWMNumNARB7HwXVjjV38",
  "key13": "3ohkw5EzgxgTwV7pUoXbMwn2qQLS3o7kDLo2yZSUMQbjFRNjpEFsbqKaN2F9UoLzcrd1oB2PHHTKXJdm2X8gFX3c",
  "key14": "tjhLKNRXcfp5kHhq3uevZcHbYeTgB6ED3hD92ei8FBWqQXFhoNrzcMKj9yUsKoaPA9jAwMrJ6D34opZEVRo83Yt",
  "key15": "2vkMJE3a1PSLfZfFeC8ze9RdJVRPVQTVfxwAEnSmP8KDGwpxiH9sevRDHXEozBKyhEBoe1aRyzrNZfE8BAm9LGK1",
  "key16": "4sm5JEZvtiwan5RDkm4kB9upx7YCTY1koongoe41vP7Z56wdYMZ6iC3fCsUnKhsAaZ1ch6e3e9p5woKGiFLPVBo9",
  "key17": "46Pjs8cMLVwsmw4D3Lz5D1GUs6U1grHKRLAsz7JHbWx5Fb5m4hcvhtgnnt8PW8PxLCLHSjnbnBw2Km4ENUvrPF4R",
  "key18": "2XCwqWr6xSQHncUjikuyB6EnQiK2e6dybcVNaJExVnGrfZf3HLXxwvotiJdER4oHDwhZWoDbgKjSNiP7A7s7NLYM",
  "key19": "Yq5YU7MJndMHZ9MAqnrgmWxfGH2ah6782qCX6vspZvkhYULjoKMGBFh9ix9kFtkCFknYmtHDpAiwqkN5YGDxkJF",
  "key20": "3FcQTmLtShcJBsCHwfSYR6nrSCUjKVKJJXYUoJnb4pSaS17sWv6VqD1bm2uGJBkqTy37x1MUU8Xh68Wpx7DCRaqJ",
  "key21": "2HDVWBKcojd2Kwm7M2et7jA55oVsEMht82Q1qCSiNDqtzCaTAt3R1DVmPH8sQ3QkXR34xdhJgNFmWZ8E7r7PnQgD",
  "key22": "5u8oqaBemShYLa5vrvFN1aQzbHugJjwfdy699yweFuck72R4zETNd6BiSvDgqgKq6UeqEb8fkmp9WupnYRbMFcfQ",
  "key23": "anZEyNqwnzPD4c3GveVyQxBrdT6qSbs3mDNUfVMw2hk1eGM2sVPgswnDug273Mo8NtztjhXyNGCF3DxYzhrw4aU",
  "key24": "jEc3YFba3w7nQg9aJJoKfqBr736wP1uuErEVbyBW8GPMpgFQehQePmM7dTU612yAW966dz52D6c8HoGRW21Mauw",
  "key25": "NFfNRyU8wBjB5GdYBuuR7EwBBPVoU6GXMaZGnQvfJ5ncw3HxebDdwXvK7qTb3gFTFnNmdACQP7KSkpb7xXwRmhn",
  "key26": "3Csea6WBLds6jUdV1fE4z9d8KdBWSy9HmAGiw7cbqb8Rssgxa5bsQSiAcXxuJwNiXb3xwidjvMy9fnotzCVXG3Xq",
  "key27": "4Mqt5pP3HqDqWZcLPYBqSr7innZd4UxaFbtV9koPTmHNxpKJVdKCThKU1uxKAgaJ3vAPWVCGDG9JbqBHYn5Rj16J",
  "key28": "JkNqQ7V4ttPFYe1ptNDZs6bhwJQEr8ZqiVFY3Xtxy1iK4rZfXobK939m2Pu2E5AsxU5Rx6w7e7QrjEoVjesLDxD",
  "key29": "4iFSz5fQaC3ebz723zqpQ5QGCHAwLNrkDFrHP5EAetSjrJsh4UWSLt7B1uFHfefbFS3MGtvpa5RN3hsbQY1sMkHA",
  "key30": "4egfuso4FuRdVMFLaNiUPxDfQKt65fjy5h9YH5qDT4GYfyWYA8tJDHoPd3CfxxTvVUwCVhx7NZg82PdV4w5QphpQ",
  "key31": "5Tv7M2kYEradvQwx5xLFDMSZKS82CLTLXxYStVW1kSpVrwuywmmrVfR5RQUooxrCu6owNaF4FSeAqPtznLPpHxDC",
  "key32": "2mSxqz3BGFxz25DaFXUieaZyWXrLM7DsJHuDszUMx9UnJ5W8nF8tdrgcJF4x3No8SKd2aBEwyMdYUKDRQYcT3ens",
  "key33": "2AgUQKMbUX8nwqvXDneabne5qXCMckku4VVjE4ZCqmCJMg481bUhshP9gVKhgfqXWMrvdrY8YJCn4Zb7BnEMxUrr",
  "key34": "4iY6shX58wjTuRm9NqovPYusu3yDXeHZo5M3wYBNRfzyGUmydGe7xjnnw3ta3mRQgc27vQyDAskunZxry3BaK8eH",
  "key35": "sfvDxaeDSg62AqNMRVYz6YS38vjGugRWML9s3sp3M7EXbdBDiB3ahFq4aCfFoRhd7zGabJS3UZFBphnpeScJZPM",
  "key36": "caXN2AK6zhYbX1MRRxJ4CBPJKaxDkZAgGxi4Bsx7Xs8aM7VLQRukT6EF81vdECA7rbBkwt7wrxJtuoU76JYTG2b",
  "key37": "4cTDYaSbDnB7VKe9LK5JpGDugLuRkTBqtiHWNW7WwLVnNbngFwdLi5QYirLfa9THfMuBeVkApSRcpQ62E4rcJH1d",
  "key38": "2A2Mwxg7cxXg3aXLRuuSdLgPK6kpbD4rpNbbfweVwjJc2ckKmW3bAj5ZwHbxqBLcpWzGcznMKvtBowovApr1VCW5",
  "key39": "4mRg1Uryi1eE8A3irkQ6iLQZ3oN5N3ftZ6f3mMJSSwAyP3DiVvw5uhgVcxeuK9PfNTVbN44pfzCbRYBigXtnCvds",
  "key40": "2XQJu9ZGEbKWqTu4yiv7Mzott8WfvPcK47ii2Yb3BW1GkQdwsh22xb72CfwtHxHiPHx4dFpHZfZAEnohy7FCtDoM",
  "key41": "3HtrE4EpckM27NaDwGWxUXqKFWCoGuWxHJhfQkGc7QdTCeX1aVCVtgRAVTPGPWEyPYMZ7CTRwYorDMRWxvjS5EGC",
  "key42": "WAipVYkRMRsJBiwu5xosMDtk5w8Z3DULpE7JmvNwSfvMDYQDVtE4RuQRiQ6KHGAuyxdR5iiMozMEHP7HQizaGEt",
  "key43": "5FfCCDiNW7TJqJM5bbUkdD5mAn2VtTzg6VkVKohupYLiX9ujznwC9nRHHzj8JPmoEqTNigDstNeMN4dGHS5MkWRx",
  "key44": "5UtWNVwi2zEr7qBSmfMXRGUsbdFMqt2rXxhC75QGaNoYqMRTHiyiQgBPNWE1QRfkJVjZxLbndgwdXjbh1zSCG1ro",
  "key45": "3AQS84bZhu7rZjPmvA19zRRecFx8SqHYu3jSfgTFhY9LJ8EAebPaZpRCDrStXqNBPyCkrEaWyfHZd1UN9QbJhwCf",
  "key46": "5EvLCVd7NMUVAwyAn5e8dJKp6t9MMDgxqebgPMmA5cCDFLDUJtSQhiXAnPGyfK1Hofg2Ska1tGdmjJw6h8XJhhdp",
  "key47": "4hh8AagWp3NTD5F79MWMFqUuMLAJABYGbsvQqAZAqjNG5AKFKuRJkUuejNZkSKyoDfTgw4P7NkGcZqew6WUEYz9C",
  "key48": "2QrcAvAqs5BXoGydhqymi1NB5BYc9dBrNnU4Cx8CCo24RJBjLfAG72sgpgwcyzzCvLDJptRyBasiP4VrVp8Df9JL"
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
