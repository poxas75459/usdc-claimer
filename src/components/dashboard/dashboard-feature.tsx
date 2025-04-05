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
    "226MsBkRUYKkHtxRfT82QDgvsKJx2ynFwcH4TVY1cL9d1ADC4jkmXrgKnTaXfxJmACvdaDAptcf8j7Cgh8NNogFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJJawmeXQCLjnr3CABdCsF64EdPabeTHjKFpTGidSfPXee3iLwToGW89uFkn13bqLUtViHuCqJxKsYwYHrSoq5D",
  "key1": "2XF2Egd8KcVJZKERo7KLJneDuD3X9gg29cNubbF1BWEkcgjeEKJJPkNyoF6cvTBtzmLn5AMWFn4YUfvdn6XCRDMZ",
  "key2": "23K2qcdz7tGWDmSd3kxyusrDaqYAmh4K1Ui7cYGy6R3HGwFqAVAHubMMscGY9Z3cykHr5rbjKsRshHKLDiiDTvFj",
  "key3": "3MjJQiCQtQjW8HnAQ8PCJR2d1YhdZgNw6pDiWcQsADyNeVx7PSqh5PG6NDq5MHE6ACmj5zU4z2tNKpvVBfdaKWa7",
  "key4": "W1TpzPGCd8iL5nA2FjhadPEa7nsG5vjCfMZnY4rukX1RjeTqk8Y69yx3KuDpzcjYJAnhjYsHVtPiEtBcXbKJPzP",
  "key5": "2AYVw4j9eXxn1txEYm5N15JDXjmKDdeQxEMGyowzpHxMgVMWYs9ygpa9Ye8f6E3JjVAJg7928gKMNpHULZyUUkcj",
  "key6": "5AN2PYBAP3LiazYaSPcXBzYHwhCT81TCgaSVHux9ShWGP4NZsr1GvWbvPYMgijgyuAD8qWeCNP47vRFPiBcWVvhk",
  "key7": "5NBHPwYYhK66o79heg6dojC6PHk539F9dnEZNBSi1ettd4BHnpSu7LCxEpv7pPXLWvjii5eaxMDmc7w6pAJW3s7M",
  "key8": "BUfoWJZ8Hyy3rTkvuADBSP6X6pqvYZBsT1WjDX4vZG3uMzWWynusUiwGsV7aqhGdXkVT7trkHZiHT74kMjfG31y",
  "key9": "4zAbvurJEEwLMepRroU5UsQXWdhUAzxe3yuPHsSSti6zY2VSyGPM5akoH8v8D9vZxXJq4QnPMLMfTtj1KodiNbCS",
  "key10": "5xPP91i5GfQsDPNN6dUDNFPFu6mJKG35WxT4wdHBL8yNfzx9H4ow1g3nemKaedRD8awYHV7SqbJUzEMKYejeJpZc",
  "key11": "rjbwmA3LHuAjf4Wdt9vdExyTWM5Ni27FUayav3MpqSu9mn16DAvrquykEPR1r8k1oFTj4v6BbKwqRkECxnzCDAq",
  "key12": "BcqaFRu6k1AJED5usUNnLfTMjqJmREHYC8u8gP9AQSv9XhcdjqVJxTvZSgsj1Bta7gLRbQQWAQzSV4SkWAnBDhz",
  "key13": "QKi4FS6TzhfLwBQJqegpNCo2enqiDP7tE2PtGG64DcU15NVPBA1m7pDnQn1fu8mQuxJchteUPVWCvdBkDqKSq9i",
  "key14": "5BocpgMBsNDWEfv6qER138SJPrbAghgohxWfrMmBgTzxhviePx9X7zGFGMpuSQG8uXZzm1a2eVgu3UKR7mUg7DGH",
  "key15": "2wm5PurKsfcdQwWGdwogRiTq4XsfMrmL4GU93DZKgWapNK71HH81baEwu3R1ewwMgfDMpC2GhoXSGQiZVhRPSks5",
  "key16": "2tBXLadMMH8X9NysmXxU3CBGwYr3JVvjPGg9tu47KhtDpv2oPbpwQMH36yjbZg7SDArcvzU963YMvZuVtzaiLcxW",
  "key17": "5eqDcn21UJuEGqbkymcaohgMqSsCkZsVkB4HJ45bkdRy4GsqympQp9FnG6CChWLWx6GFwiGeStHNSHkBsaVjefJV",
  "key18": "3hoqSAevG7rec2XENEFX6Ns927DWZ5HmAKZrW4qENgdyf7qsFm2bGWi2HCFa57dXvSWXoKoPWyKeBNCrgfRZe8vZ",
  "key19": "9g5m2zCBdj79TD4VtpPJpGh9jB5vXM2TTsvdcHAJ8yQoiRNpqweAmDj9vFBkyp8PULST4Y4xFpD9KSwEfcJykG4",
  "key20": "422xz8eHCDesWuBd8EwpA5w8tNctUAKSqJb1hw2cgjVZjd8e41nFpUXeVbbURZCi5XhpAd4YUThMUKsoFnQ7gu2d",
  "key21": "5cesXcgGjdqFbc6KpnroPksMVWVmERoBP1hq3rdG7bg8hMnFbmkvciQN1M9Dm3tXUetWQYNYNdieTM5Xt8eD78UG",
  "key22": "4XbNRTG8r6BFZB2Pach9ZQxSciJca1xwDNvcEyq3zXBHksJyNqNc6HVTtkQ6217tYuDuWmDQeRCJv7epUnxWULwq",
  "key23": "3b3cNj4adD3CBeprPgtLWSSn8ETRogabAXj85H22s8oDjBpUTg6628CfeRHmk8mU3KoactB2KkCMvceyAfPTCn3j",
  "key24": "27DX6DTPc6a1MFdZReQrnMERhfehdEKNyCamb9xLe1UetLnor6eRP5STUHgVm9QuMhWKxCadMtA2enLcG6CtfEwV",
  "key25": "2czEiT3sstdapqc5ah7VRD9SJHHWg4QUk33gdLRMkwfXGJoCaNJdAy7WdMpx2PmyjoVoZfZDwXeJvn6EyEECfzih",
  "key26": "33HXNYJAv3QbLpbTJDXhyskn7LuLaFVAxW3FZEtvssG5RvM6d1rhysNf8LtZWomENV5K9mr4SJeK7HNMykbaRYRp",
  "key27": "39oQW4jRZ9u9FU7aNj4JbygV7PC5mTF4mMGvqwaB52iEGRDZBmBvcq83WaU1yVxMuhNcFt9cGAH96VqeJvTHtrBT",
  "key28": "2iCWbQRmccQNmthxyvXggaRK6kTQoUomrPfWmuvp5kaYoqyrpxXYLoFjQHkf9qxutMubr7PE12DwBco3bugyPaLR",
  "key29": "XtwhgNbH3Noimg77YxSVvtisWKAunPDyXedHMMizjEaJdigtz4ZDfKkQwggASFVZKdTK1KFdsjzsgZetKP73CEK",
  "key30": "5dkYuW9mRBuWSQm5JPRKC1ZUdv2kLohCXf99dtBpC7LyBe6T122EKS8s2iweMsHcYWNzKtXxY5MXtUJ4Gseeag9B",
  "key31": "3cnscUoAChZ5E2HEUwm5toagYCTmQSYdbBTTHr2p3nsYKdg6hpoeKKVhVhHLM85hFyUiyFuyvQ5Gkj8shGjopKZL",
  "key32": "VnBNsuDanSx8xrSXi8rmShDn6vAJ3brRzEKWpbvUBxjFHvwbKBMHNuwFDN2UaXni1VP5WUcRnfQeLCcCp2mpkHQ",
  "key33": "3kcvetsjMqLKQPd9SMCcJK4C9nYtnyhRvmiYEkj3jKC5y7BLnsJhS11GyLF3mkG8nzqJaFtLtHcm6odNFt8UdJeZ",
  "key34": "3SDVRh7EkqgmKr58E2P5Y3bcMZ8KFDJEypzUTx5zdbvbfePaofFXBD1EqQthLVbyxzyduDce1n1R7U21uMvcvcJh",
  "key35": "4NS5kzQfSJbV1drUs6YdCNGrcxdf5D7cNnsremK33ziLzzdqCBq7CwhDPidThcgvE7vD7F5p8JKADY1fN4M6uBnf",
  "key36": "4hGPJqDGvHKU1FixXcEqk5SLEHSgGi51WZXyQPgao69KaqqT17JnwC1EhaVv7DZ2Uzmt6JgNLCG4Xp1X5G4UfTnY",
  "key37": "nu6tajEazjFXiexGh71hohjCffEMTeUJJmPRYe9xDgkx5EjWJeMdiN6QxvFmaarxqMR1Eq8suq3EMLr4jJUN48Y",
  "key38": "4HqHRUwsfh8hWdRnJaqWHFBC4vog54HG5QrTVJkT9PKLKLegC4oMatoBsPNcT86TWoEeQfbiXAwrNECHwrgYyWYf",
  "key39": "hbk6s3FmG5Wkz5B9mRkRyhujEAgprMrQtT2zsKDXhZgwgBmXddJXkPtuGCEwb6iJveKmGi6VoyVRjV5jX4xbAR9",
  "key40": "59Fuudm7ruvVyVm8QUdE8PQKu8tdAHLcBZx3ZWuB9B5LCF223GCFw3hR3TgYFsvXvak6ZZjByLkbXaBJ6864XHaF",
  "key41": "5xfkYpZa4FA4CXCxnScoDmFNvZnLqsHZnP5A92QNNbM6q2qfTRCQTmkvZnE7Xvst9EMtjnMz9eeZRdwMKd2gugSJ",
  "key42": "58CEtQcEepTSu6v4MKA7MDo7eq6pLidCyb67HHq9pdYttZpw7hW8anNdwcJrVUhJCKuwiSHpssSe4ZYng6rxvcao"
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
