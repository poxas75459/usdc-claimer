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
    "2svSNmkuEmSScPTLzSPUtrtvToFaT16FMrfgnJfNSBwZn9sSsephy2ciznxjkNyzHrwSxaynLQDLBcD4JuNDWKUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuoVcG81hZ7VaSvUhu664gNTXRziDQS25neVJ4UrRnZMADLjH2QUjac8rNAkEL1M9KbV2QCJxZZfh7LbkS7N1oA",
  "key1": "2TT9xNvRop36DzzeuRKAsLRbSCRLZ8gnVe9orDV7KLF3xkVtcM8XrYVYKECZHxk63qk8LdhQQ5qPxfN1xgY13WfP",
  "key2": "3hpgV3qcf4MCUteqTfRpWYMb8NawipXtW7e1JdNxW8JJZJzZQbg26x9qUNyDrHK8mdt528GN8o6cnjyZwy5RHzm5",
  "key3": "2DxZELrZ5pvRzzGcCReZ4Ud95JDJmwACCqrjvSESdat8Hsg1ENUY8DHQsnCjRggqugSwD3WoSvRyJoeJBaAyF5ff",
  "key4": "5HuYeTztM7KJtc2UrUUd8H7TouVEXPEnQpZGmnzTcpZRY8Vps1vsJv1njjP6da4uPbympSei4N8YL6ZBC9zfkZhv",
  "key5": "2pVwHjvuR7DnUDz7YHy9UsMpQn4bvFtSkDrupJrvX4bxDJ4CmsJ4ExRxfzBDC5dG8pJha2rXQ4zYJTtXCgAXETJt",
  "key6": "2wqGYrJNkPQmrfQBgHztZabWUwGwp8YHsRGT8KTEW1Ct4Ba2qXEeTDeD3GGGZeqCB4jUNThnWucZvD6NGox2VP1W",
  "key7": "5oFPXsTLpv2fR6J8VkZ4jZozk6EJaTpAAv6Ec6XeuZZjHuC4PKM84mrTudE6bNfzgbbVJ2wDzAGxzmzuxPw4p97i",
  "key8": "4s9gwZD16FEqsyERyWJm6uzVsuQMU6Zgz78ghzKRBAdAg6BhRPgAbMbADVubmRwWq1T4idvTxfKHjhknQeJQk1kp",
  "key9": "2G9TxZF176XddSGymSfzesssTBoBpWsCyaT9gnnDXDPAM8B3dKdHUxzWMf5Lh5e6rvA4eAqu6pZb5TLo1vkz2fMX",
  "key10": "4vFKN7Qk3fyJrPHGEyL4q8neQtFfL4EsLpjPs63XcfYtssGc3zpx9vuREj4rhJcFuL9fRcL3Fm2Zs4ggxehQ43gb",
  "key11": "4LLAh5abkEXjPZGMDasZe2GNYyKVTdSMdx38RXSoB5kp8ey7bJM2LPcQjY8SaXoNPp2VWJkwRAMXDMfYhSPr2D8W",
  "key12": "5JkrGFWPcHmDwsCzUJgpBGAgmexNTRFhsEeYoWtPFimByJS6UvLTU5dhtZMNX5V4s2af8euKEGw98rm7krbvBTZS",
  "key13": "37eR5TvijtrMf5yCrLg2VsuyQcwAVJkkf6GsHZrhPwfizcedomLSXhifPGKwvULXXmKHyS3JhyoSkk3Fi57qoQdF",
  "key14": "oKVcRFzVFRHjNJoB9Q8X9F3cEvM7rvskadhqWDmwfqQPN7KXoeK6AYCp7zDXsWSmRqe1LCW26zqmyFZDtNgpvqT",
  "key15": "5YzRYasyMVrtvPPVwXM9cQ62eiJRPvCF5pz9bUX1H5i8gnvmXXNX64gaBMzS6dwGrNGx8q5xzTE3bsqRoQAQJ456",
  "key16": "4BocpPawEBL1CfiQdqPkhfs7DtdqRQvmCWn6W8drwUBiBdDPJt4Fyc33RjVZ61HgmMYHcVRwNqoEchZPQvg7fwX7",
  "key17": "5jx2fSmHSDN1WWUfQmJGFox1tzN6kJowNBpRKp5eRQRa9R9mAPE5mwVBhF7Q48dzt7gBK8URm6AipGYk9MFsMarS",
  "key18": "22njqLWm7CKR4RSCTzWhkRu3i5TWBDtAFNMMWXmgUbNjXxgXBEXpRcBXVPXsdkVZMonXat9V5gJ9dUEmEEwECVad",
  "key19": "34mr1HqcDje5H98ju7XTHTHFDQLmxrf3pr5uuE6h8Jvcr5yrTYMpMCFFxuwRYr4gWdjfu7rqVyxASSAEew9S4Kdg",
  "key20": "5oHcXb5DvR8jzbEwWtURwawxM5pwEj8U8naVnCmVW7YutoiwkVvY575X5s8C6eDFdD8EmQQ1EVbsho24wZbr8BNN",
  "key21": "hVeMVkaMtXEnajA6C5HhhU7YLnQbtSQsLep5tUQXZiwsWgb4SQgmByw4GzDLydGQywJTbfDKeb5UZDy7fE7Aq7b",
  "key22": "2sC4HeWj2sBXG2fRosUpVz3mMpTN3WHhbcbinmh1mS6WB5rkK8C3FzkXgBv9kBKpEYGXaCWFFQ9ChFo4FpRPgrTs",
  "key23": "3UzWnrNiJiykSkbMZNDtL5f13aMjKXGXZ1ziqjmKWpVckGtVQGDRfeF5Va4FimFH8JmJWrD6FBhbnu9VkqsUSCbG",
  "key24": "4wpRb3TVb1aXC3oVmGbjo521Yv7y6a4i12odQBMeN5onPgGUTjWfnisYHH3fETRmQCyJSeXt1mdCUnWYqgvaAui8",
  "key25": "49VFnV9xQi9E622hxyyF3PEtRNVDvLibyPwbRLvbtMFRSKKyWSSMYexdpAvqnBAH7MYMKU5G49JZbLwbSq9ebEa2",
  "key26": "3e3hkd8EBDXtW1CLavpu53VSkm5VMGz9Y19M9MnPUfdzQ33yrkiF41fXE7Jzx3ndj1hDsQTAfZ7WPaCxGH6nx1q5",
  "key27": "8WK6JBzs2w9zySRXfFji7sFqcENqxKfrGVy7h762sL3NMbR2HV5rJq2Z3rqMELM3TMXmPYikL2hBBqRDnAikusa",
  "key28": "yEKhtkdgnkjHaYfVk2hL7cJctaUZcNSzNAdxVKpz5wwYKPPAJc7VaqeoddwspCp2DmQXW5stsJA4iBsU4C5C1Hs",
  "key29": "w4o6KCkDGcJJPhvXq7ubhPw46KDwXExfWfnQ5nZw7u9bv1cWoPjSLydtYrBusidsVXG1E4fkdH2NJ5iQQx7JQRj",
  "key30": "2uem4TKkVc5S89fZ6GsqCpSLmHJM2Eut13pffMRxMqj7Scf66fn9gcGhgKCHsPrsFvJa9P6fhaGnT9o8BhYKEQcg",
  "key31": "2wUyTC23D8DmdoYA3wdCS9aizLPgBehowwZKWxcQVsDU3AnU951tWaXYDGk4uysXkPEKyaTq92NBkEka7A7Jr32R",
  "key32": "A8apZ33Ts2rpWnfHxqSKWggHBPK6i2crjUEMR9HBTQpGQ4zGUDzsfvNz9Pc1m18PSCqykkVsrwmFMXhjtbcXXxD",
  "key33": "2wi3EthzDpCG93we9XSRxuSCkQQPnqhGa6fvGTzHaSBdTyNJonmkjjwY9NwEoRtP64kfm7F2G9WeMjbycqaEyP7s",
  "key34": "5SaQR6SnS1zHCkRMFk4fvwmnG1rv8vvqkirpcE73Ek7oeiHY6htsv4Ecreov9TZgTRQFTDog6UJmbE8cZ8ZmctLq",
  "key35": "3mrVs1fbEo2CzhJjWPemLswPoTd5sJQvDZ7bedZB3s7rTGvgAFTfQC7dZEjFhPa7i9wLzSKfgEBUi7AbnibbmkGN",
  "key36": "4FDJNToLtxxuyEJzq3UwmV8s2LaxaLdxqWwBMGnDXM5ECU8EL7Hs6Eorzwip2CTFc86UQLoD1JmTD4mPw8SfTszy",
  "key37": "4Ud6KFbie7AaonsYCWxzggtiDgd65DCrRuhazfX3kNQFX5FxtqdSYv4ipfSLoFZYZ5UPJxgBdSb3wfnETCPpGLVy"
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
