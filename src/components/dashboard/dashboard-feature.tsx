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
    "3FeURcpLLTmxKNJYvfF8XciKaUFfRJ4bFETB7qUTAegeq3UhZNmcLyc1b6bJUH1Xdg8bmMATLExPHuaj3x3haH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CSp9wzkGYhfEKEfJ3WGqWdjcoXqSMTKgjuLiMaLuXaft4GDU1o2H952hSq6QXAVQ3dy1Y265B2NevxMMfo99Gi",
  "key1": "4QWHZdR3avomYDwyKrufxVFn6fMWbXZzhD1BcC2XZWNANDQwzSiXUX78w59AUiKVo8NHDESB6q2hLKRiwuBtnEte",
  "key2": "3HAXAd3Eo3Fq2LjU1qwu5bFNmBRgfd8BZ5k6vn2DQKTeipLoUoVLtaTWTxMnWJTyhSc6swAiScFpY2SPPVc5fHt1",
  "key3": "JXZFy122pvfj127MNo4kskkLDa8E46tjLryjSDgamAJ3A5ANXHU95Wti1opCMeeYe5nUX2YtE85WXLo9PqouC9S",
  "key4": "2dQDmbvKRsyyUT5PEd2Wo9r1Kac1mvgSdtVVHN4ni4H36PpzN9oMFzix5DUeTFx17Pd2WgpWHG6K3kgYTeGWWsvA",
  "key5": "4Z6ZJWMZLUo8NNPeMbxUewbcBcQZoxkRQEy2mtP4GmzHJdo9g6fJiWyEjxnv356FhDPq197BtVMwjt7Nu6nZAt2c",
  "key6": "2G5mY3pWxiPAhXxncZfRJHezF1P6NB8UJFKvfSjxYjk2tmaWbVoeGmycFpavufY894JeepVBpMW7jZ2VNcuqaMp2",
  "key7": "UpFJ5CKXwxKtdbougNQR44csEZLbiRuBLTvWAz3fb9E2jtMimg8TxGR9WXrcw4CKuUwyw417xokqwfnmJ6FEZjh",
  "key8": "YfASNJeWg2ZFb1b75FiTUUmn89aq1iPcXT2E8CKM7pv3sssgoC732hoKmmMVfe6ZZNHPfQo4gXp44LoWKpUamXE",
  "key9": "CeFP9jv9Y5rMJNWRSbG46YYmRXRYcuwpyhn5ZjrgVv56ERDEYSdgJ73SdgPpnx5hYLRMWiaMwibfY4umxua4N1c",
  "key10": "2SpJmQpNydRXKq9v6MV4NtyLKvNu1A9kGT728mTYooNZQPUFuQFL4W5GeJmBJSjft3d1914ixtq5cFW5D4Fw1bsW",
  "key11": "4Xz1LxuUYVwNiHmrdfftgfyqt7zxB2k8SztuUEy4Pxs7xo8fuZTQZzyaDzwTeB4oyvdJnQ9BCnEZzXJCgk7fyog6",
  "key12": "3Yug7auw5J6utfsA4P3aayNNuxiri3YHpV3uecdjHcjvuQ6G7DCs9zWp2Vee1DfaAaiPzDJiQMa6nwgjVF3dkkDt",
  "key13": "PpUxnozaBuTJRf8nuLduGQKsLSfKwxxJWRv9EpNHtbP8EouzeazTY8qxE9TwRiMT5JHqmXASXjeQgVZNFrb7ccV",
  "key14": "5mSNfwRa2Yx9dSqUV2odg6DBjDTAn7Sg5hBkrg3veX7M6pNvL12L7uijs8B154LtN8BjoTwMXDLN485meW7AdXLj",
  "key15": "PbAJhXGtwCLhkdchZwyY2ubVupr4EPm7hgDmrXM2BU2ePpzdFsRyagZLz8xwtHN5V4dPBmD4zo82unh3xDyhk86",
  "key16": "3mZZjUVdww8VgaczMkBcsmcngxGqKfD96GW81L6E5dH2RPDrxJE1ocvtzsGxxT7kimXYfhEoFotdeaoAcJam2NR9",
  "key17": "wqi4VtRrehgRPF198YZ8WpaJcvhy5wDcwCVLnY388ChppBmS93uD6o9TVqrqJVjpDYThVYCXAHrV3j3U9YY8svm",
  "key18": "3Zea7k7BRApmNhdWb6zMxL3k5zo6NRK2ks4rKq2axHkRkS162iHCBnjGyesgZ6SbsVNjF6SHQwAHn4AMGyhaCxGA",
  "key19": "2zn4K3tPtJYZxxjBUG67v1Ey3w9tVxeetxFeUqZ7CmcsL98bkP2ttzFzsvMS88Fe9WNehhBy8hztdxnT2jHo5u7W",
  "key20": "4Wo6Lbb75hqTYuTK21zNmWqk4PkmSE1hZRwqpFZKWWNY2d1bYepXqkRasiQgpZjAFnunY53CWtSNufbCzu1Nef73",
  "key21": "2c76e3KWyF3cpLJpybcBL8Rh3dd2FQEobSmL8PYzr6xTNxipSPkVn72Q5uGGASBzXx69x9dSQgNrrnxUHWewNMed",
  "key22": "2VofDZw75B9NgR7DkqmbBgP2xcFn9CihtdLjTUsFc3L7Hqe6Hai9aPT2zWmDNnqUZeDcRzRmH8375PFwkGbVnKCy",
  "key23": "55M2rmfCLHa35Lg5tG4nRfV1MPQum31pkYweh7FSyc961ExvQDJLnyCjM1jBpRm5gzVrSC6K8wuvX6RxXwPuGw6d",
  "key24": "5t3XUhR1dbHFYdMWc7Muwzn8a91FPUhx2nbgXujcZaXZBFsMRjEfcMisdD6CkJ12cqicRVMUMkZr6h6B5QhgMK3M",
  "key25": "5c8c97L3AqYJbid7JaiTp679qtEkRFAyCEXx6VrrVVxdhgcz3T5oWDsHSHTmHWooxyYy8dfYkT8r8TnSu2d2Ys4X",
  "key26": "3YR74xW329qaKAxzBQqrVwNN31v2rjwuEZpxBSjin1Mcd2nNUdHn3PPcgMxPiE5JXvuJFsLqQ41sQJwa62hoHDo6",
  "key27": "CWuZvQaU9dS7zAquqiJ1UNSEQt3iJp9oZ9JqXg55Q5HnmMdsKHZR9gRAz1bS7UegwtkxP9YQEDLGCSmpZ5xY5w3",
  "key28": "YPbbRN5w5UwEYeH63uM3nb7T6RCWdYHizepdMZU122UPkd4f23hUSAfvHb3jbShHNM3MVtQv2J8Mo9pFtnwz7ak",
  "key29": "2MPD3Sta61eyNSEcv89jRS5GnEWNW2h5B2A8wi3GHN4TRVaeCQGHRHdMBDhKkGRkaWFJ2sZ8Qyph5kBFnUHwTU3o",
  "key30": "2R3dyicwRUUQuuyj1i1zPrhPmckHfyjugRaVML54XEptkH7V3a9E31wFdZamE3VAmCbykMPu8oMSR7FnuWtVdV93",
  "key31": "cQfPXUw1ofQJvFwTSorzXR7E7gHXLzkQ53kHszhdbWNuHnK8iXP4rrJ477hGKpbY4TCYpsXjPLaikx5CGsCaERt",
  "key32": "4v8LwCwdkwFjkqB4amtCuxbBa1XAhb2ucwibM17LxSW6KeUJDQWtXKsEPm7wxzbUqwJBAqhqEippWfeP2iSaT2d",
  "key33": "2YuJ8WiWBPmQyDFeiTvK6M2egBAg2ECw8tuoGCHYEbRcSFFQq4154FDMVCXuEuWhhCmVJ46tjj1zmc6Va8LMZt9N",
  "key34": "2gU8BHQKQBkvxxMmbH5zW6dmL9YM9KrtWoux5YHo1pqFJgbY36AaaKYJT3xUmmictEu6iTGmvcyzTSWDTUkZUFAZ",
  "key35": "51rcA4vcTgFxf2xaXkY3TGGjXFqoEN3dLHFy3CPzUSrWGv1S4maV3dLj3U7LFzWDx7wperxC7S5F6WuTw1Tixpyu",
  "key36": "5YqWXEJDYVDU62bsiUEeQn85eYrYD6ByKHTVmDPdhDERkc4GDptGyyT6GVsH8FCDg2ULWUEkMkjuQRCp4Nw7jp3d",
  "key37": "pzoCQdsTLq2rdZ8HVy6BkdvWjGm4aBSwsTLwm5fNZWPAD4Vy3dC62uMy75RowngV9RVjFKD4CHWUfYkCdhaRWND",
  "key38": "WVUvUvT4RZYWMXGmMVWAMb1VGrcVkRqaUWF29Msh7joxoofyf3NzbKiwv4KJ5a6R2VuayUKMkKPN1NNQgHA5LPn",
  "key39": "5P5kGvnSKHjNdMdYSW3j5BL3E2tnCWkhuTswSzu7kWujzTN8Eph178gS3NvHYtq9o79Vhg3rJAySmB6B7GS27pxe",
  "key40": "NrR7uwsnMFgaSuoNcZ31ow9qp1JqpC51FLKVuuXbcYAWjx12xpUFfv4AUfmLDccSWFzKEaj5kgfWyJVxPZjKBf2",
  "key41": "3s5BBbtSJmCRKSQmy7De8jMr92pzcGVsNUsM3djYEBBsjaXXkUsE7BuQjrPamZKJUgzNtfQqGvypGP3uRx6LKWbH",
  "key42": "5rKNueDMjoCUQxmESg3UTSua9bhMWPvatN5v6DgifGgoVApxuTi4sB61MTCAgF639vYnL8day5pgLHfzoESDNBpJ",
  "key43": "VEyP9TiZkGkhEUvYnc2a21ZFx9ZMdCkJqbDQ8BNgzBAhzcmSsivNnHaxMFcnScYRuwHWumf2yvvMZBJfdjxitDj",
  "key44": "3SZLso8eSqV8tV9hUz2xNsmG4JTNAiEv2XFbFFcDzW2ocYuYJxPGmp8tShPESNFE8Qcdwde63847xTGvjeWUq8BL",
  "key45": "5wr3DRyukX9hxQvdjiHp2hkcdWko4miBzYtQXbQvnesZ9uKN9tguKpiRJXMLJwwBvhvnhAZuxUtSaJKFMaqDhCPj",
  "key46": "4wU5cNQ7WwsYmhcZnxWqnKG78fN26LkbMGrVELZW1XwygtWhJdU7sHKTC5Liev8f4NWLRdREGYSzz7pF2DTnWeVp",
  "key47": "29uSQM8t3Mc49Yu6nR98wRT7KHFBTwDtp6eECArqBfV59uCPSiA1ZCHJyChjaFHwogAXh11qc3KdpaXV2qGALGDQ",
  "key48": "4zcCweYvGehzaMvrgVAymouQiHrTjWWQmRmz6ziGy9eCVgpJqAfQnHRSk6UkZ8LjwShBMf5VfHNqL9UECgwBL6LU",
  "key49": "29PckUoVudrjLeRhkc2Vj2fBL8PEjEJKodGCdweUXEEFjPWcQH6rJqneywi3dZkANuB6fNXMYn2m3SFTzpKBucDL"
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
