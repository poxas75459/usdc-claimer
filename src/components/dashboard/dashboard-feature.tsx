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
    "3mDsq56DEEaZHEoy62GPpdTQEXRZEEo35fKgr3vFuvqwpjF8UhLPew3CzrT59drGDUzrrrRY7WwZmDcpii3XReET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Li4WQ8HgZoiw4iBq5THDgwnwx6aU3xNW59bRKj8eWswFj2TgAJeXpGfbyiHeevwiHxLCj54yp1GedmVdeNT9fFT",
  "key1": "NcKj4tjaGtAYPDvtjw1H8jPXun81zyvvsvgNNL6sSNioDazjYfuxFkh2mK3Vvh4bHnx7apLrVLdtt8hUCUDmSas",
  "key2": "45U4MsLFafmF3Winm7Yr4xFYZGg8fMzyPJejBJAtak73gWHx1ZoY3LN5yPAwRtNUZDXkMitXVPSEBqk3FeQqfap4",
  "key3": "3zf8Xi46MeyhH3fC9ACHdAsW9YchfjUhQBsLbJpWfUJbZKKpQpuJfTmFWTtSPWJEXWvwsXzJzJx7sR2rqrHC4FNh",
  "key4": "2WnrsCiwZVgPs5kKauQyryN7ykCdxG6v8axnESz3f9WSFimYEc3TgefM9ykYDvY5ntQMvafHYVteHULhpmqzMRge",
  "key5": "22zoLLsfhoERCSRPfQcWHZoKZRzM2eDWSM8YWHcNNqRsLKTB3riMvSz14A1QryHVrraMC7EfoVMGsHFKM9SaPG82",
  "key6": "5NoYgxwKQqTvsAcD3gWvxavjzpZjVe5FE4cpPWWLz3oAJzykWeJtcB8hwodrba5bNDn3pJMtkpPdFLG5NJ3wp4Vg",
  "key7": "5g4NVLTX2Y3BMYzqQPL97aYQRrcXYRk24Y5cudSq9zXDyYCgRaeUwRxqNKNzFKHJqww3CeU82xYTecvvBxDvyC3o",
  "key8": "3mg37v1FFCYvRmdAjNSFihvwGaBxwPb2DM5WBDMqFgrpVaCcZ1bfnHASQuK9x5T2Hauugd7Nm7mVW3iqFSWCVQEr",
  "key9": "213HJobw6naxntVTpeXQgwMk1qMbHVx829Wkb82idvaJ2BYJUXi5X6sheyH8BLboZUwHwvz6jPDK4JA7cVMayyCP",
  "key10": "2PiUdJxC4PEZguDEfhJTAvQvb81g3nagaXrP5JVs4u6aBAx6VKVJYmGfZ3xeCpETdcKuiHWA2JT1sSet4YYmN15E",
  "key11": "2RbExSWLDey19b14fcG4oY2DSj7qwX3hzJe23K2bQhuYZx7DynnU6LTT4FLtP5SXioGHxY1FyScuWYAC5G1niEqH",
  "key12": "zPHMd6jgx73KnttKBdFHzqRpAoH9VFULpYbTUa8M4vL6LUideSzube4qZjbkXhMvnnhd51NAwi9ZNrBAg4wv2Zq",
  "key13": "5dSebJwKdKrBKCpckM8SN3yKxxmPRvASwvv6oL3h9hbPFxmgc5sZX519x6d3KA6mM6XJWWc5cynSQRKqnkqjmcxp",
  "key14": "Y2FBxGNaVwRTrSQTxHyReuyzds53pDzBpcsabCEPVHss6vbnvBWyvRHWGoz4MATVtar1CjfU9KMVmYfGVMbU2s7",
  "key15": "4QsZsxiHVhTYySRrYureoavcoHGEEXPHp9WAeXR8AHwcn6KzFqNnUAjSYyTt6fKitCti3MuDa2q7jyRyfQdP3mYD",
  "key16": "auAeCpy1fFd3goBwKgwPwaAD2eGJ3uQmtnnmjqM8GuvSEiY17uGGx2fDzSJSzjpDQCmosCzuv18jsAjCoDh8bYT",
  "key17": "4XraeafrUfyJDP3ewNAspfKcbGQ3zYQnbsifDY5ADbrVvSNgf9PXJi5yGdZDrH86idRVcZJgzYukFkw2zxpHgZfS",
  "key18": "61Wp85PNbDhbECKhoAupU5x3P91Ch4bRCBaCDV4XdnCNKXDVcmgu7JEqxfA2abGJjCDEb58JmtXRR4qgAChSXTR",
  "key19": "5A2V4d9DYqxdPTVhJjQ9qaN1Gczt6SWq7Yn6KbC32aSPu4QiPPohNLQvYesC8JuGwSRZ4fEKSNwmk5oeFxeNeiiY",
  "key20": "32q46SuUjrkQPaWR4VXihWtkcjCyM3xVZmLh4UNu7DG5Z8RkUNkzSUFs5dsWn3MLAB88ywSauwDqirM9D5pnpVav",
  "key21": "5BPNin8aXdW5FdefYr3P7Zsc1duTDjgoinMWCDuGraahg5N1NE47vEQzxnb4xcRaUHiqSfcVjrj1CpG6i2ZYnP7z",
  "key22": "4wjFTsLFrc6AKiYh6M3766UrmkEFrqb9Ekj9BzoENtBFZ9Ua4UjHAZ3YsR5Z89sP9bANQ3wHV8gohZEDBMKtnTPg",
  "key23": "5LF57FWKpx4mJvESGd1iwDZDZPKEu5kE9vcxHMSUqaR1c7EuJU8DogL7JQb83s3n7YgxMg3S2ezXc4MYi5jZM7WA",
  "key24": "3jBrvWNQGZEw4TVk9nes7y7zqRZpjXjNgwBfEA4M5euCXm9CW4aTDKV93G3fEELdjrQ9E4QhT2hyHwLVtcbcAMHg",
  "key25": "RgAgSMYEZo3uEHKQJBQ1ah7YWbgw1wUturZVimaKErW1aGoguXzDSxSmbsq8y4kYcApFqVWexMt8aJuNAtuL7nJ",
  "key26": "2ipyapq7D2t8cypAjtceFfVZK93S1YZkicoDDoNVypqfdptdhqwY7dYNA4dKFo9Xxmc7fcozYihzNeUWXZE8cqQR",
  "key27": "2kqdq6UsUe7q8J2F71tRFuk8p7dJdefNe4sEqYGUyWGr7E4UbchZnNvKVobuTn61Stcoshqq3Pv2nE1HCjYTMvqG",
  "key28": "5pojEmXDCVJMhK3FkoMPdRwgqs6ig89YLp9ECYhTbzW76k9YPWEAzQFSbNJT2ei84ea6hQdcMtX8Lf63VSc93GHY",
  "key29": "4aZWU8auaZu3Fa2TimfmYh4Q2kp77vQ3fdzVb5tcPuoU9N59fKnQHnrKFDzEL5nTUMbiJ4s2wD9iDDArYQxiJXxk",
  "key30": "33rt6bCNy17QWcgnsFkp6m51wrW5YMfw8XzmFrgN5uhSNZhki2UsMeXbPW88R4jq3CubQwnATVfka2JvCwt9gbC7",
  "key31": "5sLsJZ6uHYgy99uvdeWRGF6t8rhDEyLkw5DNT97ZLnGpxMuARJR4YPfRYi1vzshQSfeojewi1YV8C5fSfX9Ftdun",
  "key32": "5AqTD1ky8LGUkzCpByra18159t8iuvCU6WcSKENtKbCAwa5WC5ih9Z5U6fo7MZxh9nJp2gVa8SJo7tArZtVjQGY2",
  "key33": "4cpmGybFzZjKSK56GVojo9m437wbMNo4WYMEx3a7kian5QfMyiyzHX35yoLERTVodeBjAfihZwxgDAbE368gsfSR",
  "key34": "2gpuuiQN1rB4kkKocwkCC7FQpNZHENgdNExEzmYzx8dvy5xKZc1B6DXcUv7SnNRchd6oVfujhNS7NxbKEsAcRAu8",
  "key35": "VLbRfo4nPsWAaRS2Wn5jRhiJxPpG8bQeTd4n921KXstBSUmcrVree3f5EmRtTDWu2v1KjFF5VQebkrH1vr8yWzK",
  "key36": "2AABPYJxna2G99uURK9CLS8WDUpiwJgCxPhpkjZUABtJAqi27iFyzdRquac2RfgVveYCdx5mJDtaCexU7zYEmD4M",
  "key37": "2axpnCXRKYWNRAJHBqrJvBxYssd9UQoDRbaCvWxg5upZ13Su15Uw8vjiC8v4W4gFNruNaefkziSBAZjuWrQ8XVGH",
  "key38": "qc1TRnCQAscs4po57nTv2chdGX6LY5Ex5fGC54rAUEuqcv2BMji9uXPT9V5GGxFKXb9buBAFktnZRhmgLGGzUU1",
  "key39": "2LNxAVPwLdqBenwsqyw8phNKBz4ytcpuC8jKzByAcj5yXwCxFCQzczh9bjvsE8Xvrk5euBamRVY1Mahpdx7pkZRG",
  "key40": "2ERApvBXG4Vxg41w4YTMjXRVw8cH342XggYD7gSfPEXHhMzUUwcXEMBtE4HFbPQf9qHeJTrVBbYzsV2HYiNkpQx7",
  "key41": "CbFwpnLKAoNvkbydK4Hre19AqitGa7JUPqv3k4ttu8tBFCc56dr5PrmtXkAvKTjvdz4f8PzW1VaSAqQDkhogMEL",
  "key42": "5USuTM7LJbits2Fw3QcKFxS6SWKmCVLafKAN3RfSur7ptYyeTFjQAVQa92Yf4yYLTu9UVd6RQvqZmxySj5a5atUQ",
  "key43": "3xtEtew3MNwm9TxVBqkixqprRfsqB5jgfSefGyjEmrDmrdCpWK1KmmTuTd2KgWNuwQ27Uc79BGE1q2QUPzMbW5ME",
  "key44": "5dHdJnJ6qanfMQv9gNbtr6geAYWhJzQuQr7rmN4P6GSiPjeDurhr2Tx43UThvM4yahJWKyozCvFKxWx6TZKtmWDp",
  "key45": "4DgvbXTARRtik8gK75MzWDdp9mhkVut4hk9NqL1hhgmf19ji1zEgLFpXbunE6ynwCFNjavPz1dq9KFFiqm3ux2Fi",
  "key46": "29iuomTV6ccfEFA5qYw9fpQASjVFLsG7uft7YxVKHx4RUFdstQiqca4GZwUxgiQBGvFrtJyx2HW5PqgnoUT1KKUZ",
  "key47": "5tEofiy5FAuHKXUUPWcJm71rXHCBXYfXuQ7UkD5ANbj3r9gxLdC7sCdHffhfCzvbESM8f5biR3BBorGzkhZecJD1",
  "key48": "5hVwbaBBAoYFmacpBU1wpeUf3PXRpKExxNMwikGLxvbFGrtGqkz2iD7aLKMmtRZ5JcCyuA9FgMUJQBpPux8jaNq6",
  "key49": "5eMBw6ja7nkUiR2siZiAP5QbFu2QN3eVQBhyGknjSqfZi1ek9b91C4zP6aFvZ2oiSFZfQhX41B5orrGbvy1SV5rC"
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
