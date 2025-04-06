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
    "5yovXA8tyFCUxd7btQ2EE3RyjzYDd7x9kfmDU5XePBjd5BLY5JHcNarwYNeCDg1pnPfne9q8pzyLq7KasbhKJuVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmxWwvvfSiFuQV6GaZhTEzCp7r8HrroGUFDqwv7yquPthW2iMWw6cJBAXDs5j3VHdb2hDquHnNpQqBzNByeFrjr",
  "key1": "338AusGLDPCPA3nsvWi2BNMHVF6zyWgu5jaNutcXhSveMJofAk9T2x5p2DK12ZETC5yzevhH39ycjMqMJV43wdLu",
  "key2": "3jAomFFE9iViRB2FDohfa9qVjd3JH82MbeNZsdn7ndwPJiHKp999a6NAdp5SrhzorFSgBenjaAzYfN8p18trpvfs",
  "key3": "XJdrZt3jR267MnaySGdmj7F3KZvA8ujBPa5eUUoKTRzKWWdaJyVQMEd8bbiPdeiAn5fT3q4ykrAX6RRzQXk1Cro",
  "key4": "276o3Bafvg5rg3eao39eaaiSywfFzBFmJnwe9TmGg9vTd1MWwzM9g3ifujNwwFvg7pXoPiAGefFNyyzdxUV1LPvw",
  "key5": "67gyV3ip1QvdCaSMnieTSZ1YoxWPoFJN2aSj57b446iXFfGPfdgCEAzWaUXeMERL168PccD6Vvtghc7z8KGa83AT",
  "key6": "5R2LvuwknEkSVRFwVwJM8rs7hkwRKPoDDXjjSvxTitScKK8tXZsphoPJ53BzG4YKHg7LRLPUMUZB88rhNTq8ksTC",
  "key7": "43irhVtyS64yeEsGGJkRZtqsmD6RZi9jhzhwYFdgNCxJWYFZRnCbtc2yo6uZyfa8cUcgkgw9itB2u6RJV2Lx6Pw3",
  "key8": "3HxXcGdfX5bV6giPTcvLnGZgxwWk2RRsvXprHgPoVmCmK7B1f5kqSsd2o3CZTGWvNXVQrt5fVzEoriwZ2shFwUvJ",
  "key9": "4dtMXoBi9D1rQT6tQyzahCoP7S4bxhJ6j9zRXYb8hQYbUaa69YLwpbyphPGbjdVVkv5G6JBdpLCeq9juXYHSNXuw",
  "key10": "62Kfco76Vs7mMxyP4ZBktRGV5eumv4xV3nDV5AA2d38J3YP5QgMwD5Pr7fVy5F4X3eEugGnLvC1Mfi9AHzigVChx",
  "key11": "3pP5HqqgdMduvnbHYqhTbhhJ9PLDx6sFjJ6HCAYMRQwMf4Ra7uNE6UGAfd4AQKJQb1YR4n2jmMHSSCU18PAqXirB",
  "key12": "3C1HAQLVRh4RZCN3Nf26awNyvq1YbSh1qTPfeeokGrmce48MAtuppdxfBYKYTxVS7T17M97xkf3ToZFeLXKdo7sd",
  "key13": "3o4p5Wx3cw4SaYkpjefQan9HpD63C176nLMTBjh28nVs5yDk4DAEMuMJDm6w8cQxVwwDZ5MNToFzzNZE3SNHgyZY",
  "key14": "cmtZc7NHhv2SToDYt867CSUaFRqFNierJTNwabXZWc5QZoTLSG4brPf58tmpiDJ8qx76WSbCmhpbhuJDUrpWQLP",
  "key15": "2QuBkxFCgkcw3dDxzCL5e2FUMgWhc63NfRFKgepYyFX2ESUUu5u9EwX3AhgeUzyU7RMFvKJs2EsDXDpNQK4wzpVz",
  "key16": "2VUX4yrSoreiwvzVrg3DUp4e99Pkd9ePzqsherzuJacoZTJiRkyxRW8x2QMwUQ85Xy7BDA5wPvcn9PEm9UtyfCga",
  "key17": "CPST4F1E65mass88ACB3KHFkkY6GCANZ5oMAdwbR55xYTE9YUFNzQBvkyi7nzFdoUuwNij2TDzxdywjT7rNgAW7",
  "key18": "47gUCFcJpPbEjnHoUr6Uz5woACF33M2QgmcCHxET9sBwJV7JgJy1UsAe2edsGg7Afx1eMME9PAj6fVje6GFqBHrv",
  "key19": "BQyoV11cH7s59UzYasrcnEwfNFUJMHqsEPq2M1b62HYEBJRWkA4S171GmgF63NziNqxjUmXj2RH32ebgHdHXoXH",
  "key20": "3EYDRcQMcGjxbmf3kFv3EBXg6dX81NuXyyhP9TWiANQpfnCc93zDLE6cfhpg9qVC9FNrYUxPGk3nMKLB3zmUxWrm",
  "key21": "4YVZSABNh2zbDPmfDgcpUpWFRDedea5Fik7MpBV2PAuoVRCQHF7vTGksNXzjyCabL9bnbs2Ce34qbTm9KZZ6Vqm5",
  "key22": "4ZSaH793USWLcYE6c7LPma4Aa9QgmrRuBZh8D8p87HsGxaYyUJpg6vaiBDS3tPRkE9QvHrfvHnxrhh6x3wtymKhF",
  "key23": "Cj3ogETZ8W2z6H81gNBQDXMhHyPPXXxZT9Je7X1BcBj3SZaPFP9z3oUBxnumZUZiGBMvDcZuCahz5PdvyPGWYKR",
  "key24": "3zdgnj3nZ6XQXeNVmkqtRFA2SUsbnHyWsRNMn7UsjEuSqLBNYPtaGMRXfTbH8xY3bhMB2C9j1oX4PtVHYnVFBLQ2",
  "key25": "2BBwWLFo1XF6VE1Zk3w6YmeHTLcR1RueNatibq3wVzheCvk44CdS7oJwZ2Z4HVVZ2m3EDp5QffhGS4D7PEYb8BYB",
  "key26": "5KBuU7d3LS3xWY3fQh53VL8y5KVsPcte1Yc4Pd9DL4GvamukhToxxMw513yrDnFuUVLuVqSLUj4TDjiRX8AFub9n",
  "key27": "2f5dAtsWpVkghx7C1wwtqqnQP6eenoC5sP9dwHFhBNkUaigiJjajBbbMBsay4aEH7FA9SZbqnBAvPT9FMvsABSuK",
  "key28": "3vJBJk3SG9WBV5egjMp4mUukAZ3hmgQjino8k6eupxnK3J5rhWZswKgGsfGMH7TZXPswjSddGfR7CAJuwxHnqmDM",
  "key29": "3XNBUdWRcLKUPKGZZixrzYsKPkKizCdMGrxZkVDF3yQ4hig8CmLDHoe8cHqVu1kAJD47FKp4XjXRywNbw4KnKX3h",
  "key30": "5WpZTkSxmubcEnbkQ8Qz2vNL2PsC4M9YK2UzhdmHoJfBVNKCtjfeeCa1vC25xNGnwqb8Umix1USKGFCzP28stzSc",
  "key31": "3q6emu8kftC8KEin2Ag3D7ZsqXiQNduJWdNAf2r132oDzDyKKcXMdNR6GG6VHcgxCTm8Ugz6WkVbCgRCKd5UNCyx",
  "key32": "5Je27vS28PN9L6zuJvuEp8bfR88TuBhLAGrQwyPHxdnsoAswSAMxWKfK5V51Sqi7ijwYHXJ3zn3saKgJf9CZNHD",
  "key33": "2wxJoFtgDv851itA7H6Ahkebty9siwdZadLuF1HLLRRbV42yYpyaaAc1HUZzXoeho3DoeRDcU95eSwL2qwKfjCkk",
  "key34": "3VUzM7dn3TNW7mqQbq9eU2E4QjTbXP9bDFSfbtodmzka7LnF9y8EZuqiyoRbgNfWg7EDqPxJ6hKwo8MurpWiraDD",
  "key35": "4NMTFdnZr1eKUqxj8ESbMueZGUg4BA8AM4GKeE25Aak9ioqbJzkv7GZTdRQvY9tw8fQ2YrrWm7PK2cREjzmAwLsA",
  "key36": "2oVZHMwe3XHFEjhbproc9Mebw5UkeCTyRpzzP2D4mjCzBcxwnnZ8uTZhXRvKGXJgamQ2dSovi67m3Fcbiymqmr2n",
  "key37": "3NkiuvTJJr5P2uGBG3Z5JxZHt1ZAtQQUwCSwmt4rSATMUFVSGoCSCg79X621rSrH8bF1xXhrzKLJgD2sASDzmcm5",
  "key38": "58jBD1SW8LUcKUdh6XgNWDnNpFymrTa2cu8T9tTDgfuu4FwsDG9ZdJoXjqtyao3TY4mVE2iceQQp3sjubzuFZhW4",
  "key39": "YHSk6QNZMtsbcodFhZWUqgtPcJKRJF5fWhAczmxpZMRkiEmSiwePpTecseizn2BkxEoeooWtveMEv4Q1rczS5pA",
  "key40": "29Himh6DDXX8YoTdTgACM4oxKovFU2amj8iHHKWBVWMveeUBzGWVirp93BVNe4zbjcyLySymhqKJswpr2KdHZdpV",
  "key41": "3RLJuBHLMiMzA34B9WDPbCKYsYvz6xkiSVzWNupueUP318jL5ir94G2NhNtxC9zFHyfMbQfxCc7HeX74m2r3ucgp",
  "key42": "grq7CehcVXvNgtAyhwkk9C36k1FKVJipq4H7TC4xNCdPn7fsBsBoewyQRDGyssnGcQHZre7QQk4htbaxbYKsyUK",
  "key43": "4rTGJ5piHhMFqiUknWrECmszET9p7YBMU8ZhHVCcKncZmW2okd1MgR8KWVwheWuARpPrWmQzde5npbnF4FgVesdJ",
  "key44": "3su5rZM7drPo8iDP8GEzNMqRELQBHiUUwdpTxPKvNeTE8diEtFQ3uZvwwL49FW6FALkm3FtPNsyKtth4a7SnhzUz",
  "key45": "3YsaCSmWaqXQd1juVzSPiP5KwyQsFAggftcpWpfkKK9W3e7ExsKn8SpFs5V3nE9GcAsSDTezxtNBSTQ7U1zfagix"
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
