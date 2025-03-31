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
    "4LhkzuFRhGj3U2Vt5DT71QpCANqZpLKWU7CmJqWzWfLALVKUMoErZhED2BuMCYP1ywcZAyd5TJVEnHa2DXK4tHSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hQrY2Xp29xteuUJJ4uXVLmXpkttqXc2sfTuNiE7SRFzDpWE2d68Ly7BNG2sNFkopHW1BgAcKWr7riUqGAjREtp",
  "key1": "4K8D8snKuFCqvPrSmV1KLc1weon2jhrZMZoR55iZkcTCLQ9FeBEgSBQZK2PS7ufTFigXbpb3cRzq6Q9JaTDw6wFp",
  "key2": "5we9qUFS7Gmgk2U4VamjFP1rxJna8ZbkY2WqiuXdGRDaMSMTAdoE7bG5gh1sBcz5X9Y85gjggHCTMiQSbMV4iWSR",
  "key3": "NSULVQBWJKsUYoNY7u32NAv9bEa755wdgJTqbLLpnKSEXjNh2pWooijcb3x26gfE32UGfDa4L83SjrGSVVgU62w",
  "key4": "2PLrB8NX7n8xtAJXSvZfz5Nc27k7wVj3SphcemmFEeM4YdgRN7qhoZa9io6b7yfYL25znNMLKXLYy1HfjXan7y6r",
  "key5": "3CsetLsPYViY88RynK2dZorZqRsma8SzutJN7Q8TrBxZfoU1bQ9J43P5n5jKPGrnDaqw2BHLwBQDFMpVFpKuknVq",
  "key6": "3zW67hoPwM4uYSzHRUcFKyzkWS6N1JN5ZGCidHptGSNEunu7EvgvMdJhjDdBbdjTHvpHa551vGzq7DwwqyKyNXVZ",
  "key7": "5g7NAmYxKwAF8i5ZM8dRP3TsESjZfaG2fFqTX9NpSKrrNYZ1XrWDV6pB6y31Ek53kDDK1aSzLqAXVZvhgFVW4C9G",
  "key8": "5U4MWLr3LQkFRuVDrP5CcmFFadXyZHvvG8K8hKk1Q6CN4odrE4TfQcEg3fdvjVucR4nAbXjdPiyN52YVjpPJozKa",
  "key9": "2E87dYo1HmUNmxNnvQKrzTDNA73voCGmAijpSq9pbsvprkp21MGopGfuPpQDkTzrQ7NFMgZ6Mhoca9m7HVuDc4ZQ",
  "key10": "48aui2pGRxCYcTSNwSFjMxu3ZNmHGixwMTWQHUm9WzqjSSMez3Nw46APapPGnmktXdmuqGpZWLPeTcWKSysN9ymM",
  "key11": "4FPZz8nZkkY7EiZGu5wvme7iBbWfvduW3FzeFH42G3gHju4VMFhv6C9Xg5s2zyoyHEE7cLiQTCuwVLNMhZk8gedN",
  "key12": "38cjuBuBYFS3nMJUK97RewN3N3YXi7sU2KDF3g6nCj2is3syDEpRRHnaUw88GjmFaX6hAUy3exYfpyGpEBAsaMfc",
  "key13": "318KavKe9CsERVSaA7GL9458rpEe7HpGXNPZT38t6DraoT2U2RvAK5rZxDRspZoYMwQSCFPXyZRyijDbtoBguhTS",
  "key14": "PPnReGMcPEGPeBbwWnYfAqHTCPWWducCZaJkdToNP8TnUAWNFkQ8UvxAx3FAQfGeRkhBXZFoCVsFLELRLn14de4",
  "key15": "3qwUrcZFSMKHdebFz7kwQSxzGMPSdonPzXvKjJbyWCpZZfEBKEHYCVRopZsDEEs2Wi2CjR7poaSdqPsrSgM2SiVJ",
  "key16": "3A8nNBH4PCuKQUrHhrqHHBZeZyF8Hnm41x3VcRWV65Y4GJfV1Tz3JDPgGJcgFFxZK4BogCTXs1bzEZb1uZsruDJz",
  "key17": "61WoPiA9w8xWqLTNKYAsvGoRu2oFUzQyzBFGn9uRGe19T3mnU5VAasEakEzq4Bx622uotEYX8fTn9p4CizD3QQHc",
  "key18": "2UtkEGkLYtNe3FWxk9PpDrRxd2PVFoNYwm4uNTCpoaK5k8kU5QdBa7ugKnCDoum2wssawRU97VDBB2ZfYbeQHnqd",
  "key19": "4BNS1U1m32JLduY52J6GPcqZ8hVv9ArQmd9yBN8F2Zcv9owpnf7HxAm7o3McCdN3PL3WdkoEYbmcNMjSRUnpJJBJ",
  "key20": "5BUFmvb1pDjvGiBg7ZzX3EsHkEDTxAXYvmzLaQUTFPet5pvYrXDAKsPbAzDgcGJZf8Gt6y9pfuf1CKxS7pKpPUGZ",
  "key21": "4NuG7onRBHaZP6QYwjxGFkUsLxpPCMf6kjfNBj4Rr7qAYr4cV6tg4DRJNLv3p7VWc7P33jo1QdmQb7JMrHdHnVaq",
  "key22": "5Y47qJnF8YTPMZkEaEJFeU5xyL72k5hK1cy2MncMkp69CLC2PeNRm3o1Jj5oQ2ixwH6RduFP2VvoYmJYCYP3efLe",
  "key23": "3iMgmCqAJCcPNj6WwQacfbb6Dy6s5LyRhEQLsvJK5f4B5QTTXuV7F4L6ixdzo4ZkHDEJ78DqwHsv1zqXf18jo8mS",
  "key24": "2RNfobex9jAnA1q75spF7c4eJHdEhGHgzosYDHXzqeL5TLNoLkAwqqtwae11f2Au8wcbGqkQt8GLZv7FAo1YT7DW",
  "key25": "h4yKShx5fY8yZoTAz5xuwhrKCEjVtzvLoRos9U3WW7T42fYf3Hs1rtt76vvboDuAGTp6mgVrUTdYW8FCoyUNCBb",
  "key26": "M1b77B1cvbuNwYHz5M5JUEN8cmqTW8tuQhTWkXc55PPTQXFQ8CLvrSFqvGPUJBYSVQPFb5JrEDiTtAzStqFXG5L",
  "key27": "5vN1pcRMyGoiFrJz5KRjbmZR4y9FrAhw5cybCGFjom9mNp1DdndArxQfqLszmzcPU9koKXeJnnrL3VM2tGvR2fC4",
  "key28": "2KEy4cTSJA42Mcq6JXLGuvJeVuYEoQPKGYwK9nvLY6kZw4nKA3uGq7CsFUBi91UMapVjzDMbjpRsSUQ75VVuhuyK",
  "key29": "22v9Aifx99g77QecivJEzCNpe7oL6sHfqz4XbLkPkQCS9BjcU3J5jaHZxEtBvEui85Z9L3He9XEzmpwW7pmRwXWg",
  "key30": "3bA4Z2fyZZcNkMDfuxWXvG7Nb75jGP6LPu18aGeJKCfDWvtPQGws7EjvX8AHj7Cqw9vxn9dJJoDcKkrNF28JWjbw",
  "key31": "2k4VGsMFHp7VUNof64VWKxnkAd6AzyjW8ig5cweoPH3Tu3J1u9M9wT5PC9sPVSgaafEVxt9aCA9PeSYrUM4KgTY4",
  "key32": "4HqUXpmb5DPjxqk3bBiGF2KLH6Ys5uXiiGiS9roMqcdhiMSU9qBmKnBQCiG6ErrDbszyKJnxugNY7pT6prdAiwF",
  "key33": "5sBnFwdLFuuFYBHj2oBi2yKE8eG8MX9Bqhr68nz7JawYwEVwrt1H7Ucsi158AzwNyEcp3H5JhvDt5LvcNLTwpxpy",
  "key34": "Fje5nAWkRpC6ApM5Zg6eHkoMPCEyEGAMuGmWXkaq2XBBDrXT4utBd88LMWoCBqvJWG6fmGstVKgiATYLqai1zBA",
  "key35": "LL67Mnmp79eaPEMSVw4hLnZKPxSFtpcvPpEpSibtRiAqAfv2sia7tXraYRDAgYgpeZ1eZdJVc8Lga9DVFXtqMHP",
  "key36": "AD3KCSaGCvezzrmeEeCakaUTd369sEArNuGRnTj32E3GRAtdPEeDwyFLR6fTb47hArUpgiwNBPfDLpYMj9SfLCu",
  "key37": "3fL5V6WhPpcpmMPNcRarH3rb9HpfWNQX5V8WDff4VUVLTqpFcDAZyLvJFNUg3UwH4rAtbE2iXkV9drV9WAAVLf9c",
  "key38": "38m1uQetcMRm6RWkhQxCiywBzrtDMzLPX38BTgZxF9Pn9z2HHPdjb5YrH9AEj28VDtaCSthbdBTTGMaoF481z12Z",
  "key39": "31hhvKUeQGBYg6hSE68bw2ebHX7hG7xbguiMbHf8UHK3rVgF3q7bPD6LxxChUD7nvUnMKjFsSR6bkz5nsqPJZun2",
  "key40": "5MkXWpmejTrm5Z4uLs3BGK4KrMeRM9rgvZDZvbZ5Ad9re1pWBBJ9xHrXrfAF8H3RxmZM82LTqW1eftnw7rHU2Gi6",
  "key41": "2dziZarBd1B5h2HfkFANQ4SiUjESiRtVRRB1NXYD8ykiUsKWwjv1HSt5AoNb26Xg98cpJDXqRDttY4Fue63jrCPU",
  "key42": "2MD98jxuJCoqZpqAdtxj5GyJ26x2TDoArjxgkdjfMcJKCG7dkus65rxPVgvaLqApxWey4SsMaSymhisx8m5RgAVq",
  "key43": "3dcgSnnCUWFVGwTgKyRM7yNkfFdXWMoB4jdwzQ9bBtui9BzSmVMQxZGGEY3hzhx6p3pciL57PkXeS5QW8TRg5395"
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
