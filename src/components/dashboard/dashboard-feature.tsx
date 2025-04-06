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
    "vhEusemCKFDMR9cdPt76mWA9J9dMLGZm48jTX2dr7xcAvgURWxdgBZwb2U48AnTVNLxhwf8BhCit7yCx8sr7z1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CehxzHw9ZqubgYUqZQ4LRkPU7HT4MSCrjaQsVKmCZtu9xcQkHQv8tjTnMo4bpjrTe16huekpfA8kTUkt2yHJb28",
  "key1": "t39Kvjwxv9pzTU8AUJpqDDuwRxZjTWfKhNHnUBbjcZR5Ho7HBi48T9ZHvJEHv4ghNeyPidXVAjw3Ph6dNhTuMqu",
  "key2": "54Q2S1BeCzYdyAK5WdZFNV3ZdzasX3qZCAhTWnxHpZJkKMYABDhTNXPKc3x78SxFDHRqQLFhcNtD3xrwn3ac5UPi",
  "key3": "4TbdMeu3wuAKGtrnLUj57mvV31uu5nt3BpPGiXPJK1aPSy1Gp9cqMBGtnnAwc2XUSuUxS3LYRJbco6uWEC9cYAnx",
  "key4": "3qYM28VzVEkbr7YEwxAJvQwsdkfVSjWbNH2rmMDx848xxiiFCkRcSBcfbvEtUz5yVjMW4tfJt5g48ghTBiw8sCeD",
  "key5": "3gWYnkb6JfZn5zYX8FVYbk7kcwX5mzGH7TBhXzUbrvge1u3W59vAJEdjMPjovcPZCQVXZbRi8G5z6WE64wRg8ZsX",
  "key6": "4H7BdToMbzsCtAQgVQeiooWWEafe4cSNirPE6QcbB5Kesf6BbWBxKm5675oPd3nqAo8xWRgXFnwoub34BvzMucr3",
  "key7": "2n53QcaJb6WfaTwdP3ZxRs5fcafa28xS9EKssNXB1vVEgwwf7VCr51psb4ucpys4Lw4TyHoMqRhHTaUHfem4mv6n",
  "key8": "LcRGySYvDyyF3jeTJtyLiu1WdB1DuoEyUY5zXn2k941MpGDivXKUosYxBPYTEkMrbhUjpMBKN97fX4JBBriZWJk",
  "key9": "5Fasrbs9dFgwGXQD4e9NE9sYHBY53WNwAMJAdnhsa1FJ2TEvF4xQ2E2HQTUvxBmDDred8B5gRHLsZSx8UNixoyY3",
  "key10": "3EM9wVrLVKMpU1Ui82QJeJ7CDXinURKXcj2gUPhp3LrPufbSBbeBninknLUxaQzb2hLtjpTaDxf9J3GKjPPrSkwq",
  "key11": "21oGChzBj2wedLAYu1bwSMiSTv5cAtpSv2Psq28SUYLj1PswLNwQL7mq8F3eX4tt29tv8kDztQpQowtwkYpThsGJ",
  "key12": "2k9ai2iu2zzxH9hcyAfjQQkEepvBPhL1VqzJKmkJSDvZY5YZDLRDnJRSKMtc5w9LBE2fN9A2faLDuKnTTorpw1xX",
  "key13": "5DQMVL4RAxNwSimWpkkNadMm14HsZxx9aZr4r2ZTu4SZVyBG5H4oDn7BNhit4Gj3s1UMCnTWJ5MRgszyXcrWjJ9D",
  "key14": "72UGRFGmDNNM16k4ChNCfeaDnCgLkdjo6Mz298aWDqoXEzgXCyXb8uCirXQLPLeyR4s9A47LAS1CYVSN2PyvBL6",
  "key15": "4HTCaNX5hgGabNyQeZbjCBVqZahHuQGfuYWhCxK1cx7hVjakCNx2SvPxh6UXWdTrgKZ1QZnB2YsuzE4m3gaajBEV",
  "key16": "3HiKP7YojpKDKs8v6M1y8oVEEMjVz1nbxiy81HG3QwKZ1JEZJF7zDTAhvbtrtyHmekEk4qErGpYsnC1BHJ2XFwcG",
  "key17": "3Tk7ufAC66vmuymzGmGPmYAf6ogqDm1HtxNNcW6mUBUPk4KznZhZf8V37MhbUhXz9eAZT3LV5LGZ4vCsBpcsdXG5",
  "key18": "5LyRmxmJtVrjkH2wSnTRkvSuM5XhcVLrmy5T9oXi28Yn1mSqk5882KDfCr7jrGMxax3SpAyi3ZqZt3nxwWEEHCYU",
  "key19": "2W44KyL6JyWydNrXa44BxsHa1MLP4ZnMZVabcbETHamKTzpY6YMppExrABPuvV2dPsojoiWEvPXdG4KVSf4mgfLF",
  "key20": "2tJakHwfBAo1UpXBJFRYBnB8LyatuKwK6Fa24Ptm7n3zTd7xbYziWwxmGvPWSBBtvTUNNY6n1wvE9G6dLc7xH2D",
  "key21": "5pBpSK1ipPz7TAt8z5RJL7LqQWNHupkw5GGvbfS9jVDC6D96DFzQgGfi5HwjVRTvpFEm8HLDYqDToNqycXmCd6k2",
  "key22": "4RfYVYSrosHx1zN6dLh6DTYGXpMy439wpJ8FME9vH9GfKjhsQT4ZvcNxSR1RkyhkLVLqm6CfkQNfVMn58HkLTxfG",
  "key23": "3AycEZRSQvQ2LaX99oB5wUQPwXDrUbzwY4hgRiEfgWk8LGwhFA4D3pTUoVgeLbtEuq6wYcPow3tVVXYhHsQUxwbh",
  "key24": "3FsHLSjo6QbMLj15T1srci2NR9szVApArJ1DACkCXLFicB7BMAv34Sw9Eh7xpLGJpCxK2zgEz3rcSvXAUrEYyb4g",
  "key25": "3buLVfJQYBkUgWRH1u1zh37VheJsWDUFL1gMNJJoFzQfciCCoE9MPpHUdExTooLS5GrXqec3bx8fNQTdTMNJkg4n",
  "key26": "5GWBxAJuZyVMudPMn9F9RxorEEdgEieTXyRBjVLLvzMEZ1cT2pTom5VdrMKn4i2W75AxCLZzbjmEH7p6wpYJSK65",
  "key27": "5NV4GFHcZkQUxHEq6UJ1kiZ3TtqCQSpB8KLWtYp4uKHRDFeJHmhxHzV7XRxW3dRAv7BgmryeowGCGyDYvtWKfzCV",
  "key28": "4iJwDe49dH7jhwYWLb7HuRoFqfHtBdTy6d1Xh7CF6xKQMSwUHTCqLi2hTDnSWkYrhzUcnVYukwtvyQBKbwP24dEK"
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
