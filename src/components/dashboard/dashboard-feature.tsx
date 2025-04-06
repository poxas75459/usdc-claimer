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
    "4kgMVB5f7ZzZxeL5njBbxN1WSrreMC9G14WdZYzWXuHQUP6n5RmDaN6v8Y7TfqKQpNyb1XBKgf1G6mkqk8NQrfax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47epzZnr7iHy7MHHhj26E3PvjNpdasUMhAu9ZG8LgvB1HU1dg2pHuNBQtfZCMFRVLNMsmfQWomMFUvkFVhQt9jm",
  "key1": "2kjAV4JfNanEM16oBESmpcDCJk8YCx9tBskqxxv4bwuDaVTe6eM1VciJSziKvRPMauK5obuqpyvcKfoJuWG94dwb",
  "key2": "5YR6WwJRS2FZ9HaJRo5eHchXBAQrKPBbknKo6zSgR6rS3QwhRn9pbq78HMCKP6ukEuNQAjVpstgHXNgijDh75jZp",
  "key3": "rdiNYpJn7iW4kGe441rK1ZxwCGJdfMzcQiL1Q9rRhbMbV6goZan8ku3br1sQx1misziVHUrLH3Kakj6gKueen9J",
  "key4": "2S1A8UEuHY33nCNvackdLiucGPjVU6jR6HmbF9vbHUjzrcjTM5MZqEGpm83ubApLCEhEqLENR4whtN72jVhy11Un",
  "key5": "5RgkvX3kMRtJF5ToRYpphrriud8mabgJgcqyn8A2xJVxub7kVSxzizRBmJERQh2cNuQNremXLSY1LKq9B6VGpdu1",
  "key6": "3bqa3QvQZCJEAtYJ2GGtFXKto7JL2xVWRjsJvMrkNYdw55bAbWmPnQ1RjDDy9dLCJfafqLbLgg4imfngLL5qzT5V",
  "key7": "4ww17gNFSkeZXhNHmfPeRiEFJBdZBgnT9ApaQrkg4E7fmLUeRbqW9DtJM3LCRNrkJpFo7N7ztdewTDPdPaWt31SP",
  "key8": "kfF9Y1UXMK1PEXVXHL5CfLKrz6U9m6kK1PdPaF6dc9sQTV6sSWepLSYPBkndNNmDsToysNFZYcesLL5QCfa9p31",
  "key9": "3g1gRm358aXd8vYPWUF3NPNkrzrSoSuxneZjBMGxp1daec6JuiFSSabEJgjMn55voJvnJ4DvDZKZqDc1zsWFSCo2",
  "key10": "2wnjssyEUWcHK3wZe3qw3seYKo58npL4fnox5xjYvs6WyLkhxXSubgUNuSgoeYTDRBYXRvqHAXWDztZ8VKPjEeiL",
  "key11": "3mpc6RMjT2HaF7UrfGMaYWgu5f934QJyQqntGfeExNmyMXtRTiVZqdm1R3bnhTWfgJmp4f5HaUcn2j3mmmDNA1MX",
  "key12": "4Rc1WDhFR1DpEGRtVmBnzhwnes6irNUBmtnmZvBFEgHA175y1RSFWN5qnyR8QAN83sffPPYmbF7jjnHCAnnaX9pL",
  "key13": "P2zE5r4GxFeXQL2pyUSKwYzCVYYzqQ5kHsVfTTW2i658651GEmvVzJ2SWZWHrLfZZxixBzcERAnCGstGTrukyvh",
  "key14": "5Qq6NjZQk1vfEm8HxPiXoPvuKX96Yz81yFWmo4cYANgNc6addJMym7JFv8n9BTFssaQrgQguMRBf27xFMVhJTy6V",
  "key15": "22tg2MUgmKzy1fhtaStSfd1UDSMhaiuviufF4kKxWKwdUHHrh4w8o7TquZ91GJDKhjnYUguzMkGLQN7X9VLuFLya",
  "key16": "x73zLFyiC2AgKiYRYtAYE1ZZEVap1W4xASejVNoLkQQaWrXWDF5kKpFRGJ5TzRF6N7NAGRt4N8eURcUY75t5hkz",
  "key17": "4rYX1T5J3T1ECZfKUmMGGZUt9dv3Dx9Cn5WoyZhSQqwDcsd3dozRm4drB46WFvAvFtDTFyZJRAwStW5Y5zWR28B2",
  "key18": "4Z56TqPaNffxSej3S1CeVi6x9ZJKLLFQE3RgQHtUfUEhEwrSTmunYaXj8VT1LAB2NZMgiVu64Uui64MB6E37Uhzk",
  "key19": "2DVdddSWNJsPL43s2onxZVL79vdbCsGXbeX6GZ3mrmcGnxt7VYW4o2oqRVBLAAKeTCfviZMx8jr25W6SiSHBsa9t",
  "key20": "2ka5QuRN9N7u5rE3YwdcoPTCr3LjfPPKXhBKZqtJ7tbAZnkaYqBPVLJjdmnD9THAP2AKsgG5Vago4zjZrjKCjeR5",
  "key21": "V6753gELqBpBbu2TwSLc2d5LBdM9KaBtPBsLxWiTGSpXYVpkeqxsGfceoaaGCLia68RsFKnt6YtrLha9Jg3yNoK",
  "key22": "aNutjRG5TbEo4aSgFirJESE4Yt6yHHvbJKs8LtVncbmMZ6k6J71X8CqBJ5TBBHkkfSC6JT5UJfpZ6wLMU7c2TAR",
  "key23": "3mDZYnY2f639o6JjbncAiiJQ5nrYGpaqCp8RwDDDA36wc4xwadKFyQWJ9RZi9JENBfWy9NNHVvf9V96pZAGXjaQo",
  "key24": "gts1CWvevwhQvcJU8sUdXLMyfLcFq2t6HzxymK8Bj8fAcNmGSyR37oVoG1DXQYzWoE6bYBjerEXbQis8Ewya7bh",
  "key25": "4o3fjJzdpFLQ2tezU21KqgQyZAsVuWZ8FBw6M2geFtnhoZgTPXsYTjDeM9RFP3cdsLzdz1j4uaBUqf8QyPz8iXjH",
  "key26": "4dMi1pkGSbKGJACi7xQLwjQU8cKvV2yLJgcGoFdNLYRBfQnijE7ipuw3CBULrZH3ZMvM636GcaKdQ1T9GQXSQXN4",
  "key27": "2rUwpU9JHqZtPMQocnTX4gE5M7AgVFKysJppJBRPas9BJYThfudq5SEyukFgRGhTMJXa7tVxhspsttW9oPJ7SEvv",
  "key28": "3RNbzT8C7bW3KR2KFvD9o51QPEEgWGxdSRUpg4w9sDgU8qB7i89xRNESUqUpjUw7b5ipCR8f944tQFVGTqJ2s86N",
  "key29": "21vzRoyZvcnt5FRzwFSCKMTA8FJnpeMj6XTVshvgu8RpV5to6kbFTsRwSCNrkQtMBy7pz7KEvjQsBvz2oMpE9T1z",
  "key30": "2ECoQogcxmYo2MvyTt6iV1FyHDrEfhFSj8TZufPvwRx6WyG9w6hNCCbeeQaworCVwpLB192zVTJxgqXMnPDgfr2y",
  "key31": "L3otnwYLaispAgndEzzzfbeKQ6CKNG75hEQ1DJEVsM9jEWeH9fwhJ4qEhtDGGzFDtqYZ6B45w9cs1vUjoYSS4Gk",
  "key32": "5TafTVNCi99PZhQks5XVMU4iQHfswnNLUa5qZm1NzDN1QhrTjgKnf8Uo7DWfXJ4VJYjdUMkLB5BbVeb12uTWqUgc",
  "key33": "4K92SgQHo6sQCDMHEM272j4ddKhqgpn5z5M3jNh3sZQ5YeCpg8uzoD8k2CbbCs15YR9yXeSZxSxBPEvZg4fFouzK",
  "key34": "4na5pZKcJDYFpT3ggY7oLmhwivBRW4F63KkVenc5M97QaBtqBjKtebvxVp1nWXkoaAGuxJxY4FLwnjTVphX2VAij",
  "key35": "21x2E7mRRca9vYZGznrQE4zqvMAVcFPBFoLQXm3UEaLwt7CfGNWiazMnxyY5FLuFSKkHdYgzVkhP1dEVnmTCp1CT",
  "key36": "4E5Txoi5VRrpVavDMQ4iLaXNWtPXnWb1g8gBpL58JaM9NGPZyFxDKDUBTGqNckquUrpiDr9tEZyBezRarHF8Guic",
  "key37": "2R7vdzL4oLfWRHsSquSWdEzyhCHVD66Xu9MV2pwUXMWXVzejnAMnsLHanTzXM8JmCozcUKn6yxB9F7S3Ef1vNTmh",
  "key38": "3N5vhUYxxEmABEbkvBsc2MCJDkueNPYiQDGkHq4K9sGdi1guzprGCg8cwEjuujbVSi4Qo9GjQbNZCgTcPvXWFFR8",
  "key39": "webtRuBxtTard6XFbLL7WJcWLEMjKTLLxSCLWkB2T5mko5vh6aCc2Zp9u4jioVxB7pGhQfps1xwAhKeqKkcCSWe",
  "key40": "2dXnCqppn4busUJa4nL2Y391VZgaFxFvw1advc7LHd9rJT6FTx3y5tgP9d4wBT6xsFdkDN9tREcUaztsU8wkUVDP",
  "key41": "4kSK6TbgpU9ULQpUnBjBCiAAErvjc27hPnQ4Qonze5JuZaC1XYACjgcxGP646JsgghwvFX6XJfWn44oKg7YPxfTj",
  "key42": "22JRd9fBABFuyK4FjGgbWuMQDaajP8K4rJYiRPnGYSCCmukSMX86dRDCTCWz7YYR4gFbne79DZHBZrmAvFcGGo2T",
  "key43": "y6rPA9HekLyvNg8NwuK2fEvCsZWQgsuAKc9wEBgc6QohVkEc4E4ts3RaF9hBg5dqK4TKBFnfSPGQ3GofeyxAKie",
  "key44": "2u9PCMgAs1YsNHRdimFmcmeApC7vm8HcJdXr96ACWBrGi1sUNLxNqidUFY7om2vUHgZB1q9cXmiZL5KregXrdS5X",
  "key45": "4U1aUo3aN7cxg7Xdb7gS6g8YbJ54gXKHaTX1rAayvGuZP5BgdiexgBMRvWoKWMhKuesA4FCgsMP6MWu1C95GByfu",
  "key46": "3umL96n3WzA8tAYThe9BY2VatYrMCpBQTEN52DzY5UTf844vrmiH8LGfo5KRwwFf2ZCCCrHkmicRVxk187AwTr25"
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
