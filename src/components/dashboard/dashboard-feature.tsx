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
    "3WmtqohFSWv8mhKhkkRmkvmJo4kqTohqgjDThpHpKxaVJDwQP8ZsafNNS8qt7azvS4b4f4uc3vYhbB9ZsCEoas6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhXDjDry5aGwbYrRB9maAb79yjHu7ZyDpxjZJVNmw6dMovuGt2UNja7jk9HthyFD67RQVSEtTGuXRgGatyRdmtn",
  "key1": "3V2QkgS2xcJRi1LQxC9RkCgYjgkf3mZBJ7Rkam4gxdLu5pskxRfYydx4dqFFLie4RkNdTPwx9bFu7LSgBRhv2Zm8",
  "key2": "3p4Y1rnPE8YgqpijjyZGtiHAmKsWsKGBMWQCs3VyGkzjL3LqP6MAhxmfDhspxXyptMNHkxPaWvpt2JetzgnihKcN",
  "key3": "27GZUo956karBCqishrNd5sh1WwX437S5gLmRtPRQcXFW3ZFqM2WHsYZzzv9UZdLLQxfk62GtNiMeEaRxAFi4FbE",
  "key4": "4iDufzpgwWDMjRoGWxaaKP97msqJwttEGFduP9opqxhymQnZ3xcUa9Zo6aDw95mP4zE3QrJDgnDxhpcHMLiC9BnL",
  "key5": "52D7AasTQiqTXrbZegZhJXNywY3s687zzLrDod26pgjPiRzwBkkFU8SoJgD4UTZafGG7MxUNDCxTvABtaYpHAoj",
  "key6": "5e7cnbwgJS5YFMfdDsJwtpUyp9A3fJH8E8ZyMTYJHKtDiDPKFXbLNwSGbGFHDxGoufcdxBbY55vvbv2omNYK4DeS",
  "key7": "51mzANZKCSVkKqJrSQjkX1KjyE1E4wwXdBoU11nFwT4U3MaWe2cWqrbFNRPwmvTzGC9MapgwngdXixKMSynpoDuk",
  "key8": "4tSeT7DuzrRh7s5YugwawKcs2DLamvZyeTHkWCNeUAoySjhedwajhb4ns9ZRnZ3Xgi3snty7ceumAk3aYiLzPZFx",
  "key9": "4hzdM5E66R6MmiP3CJcMSFFdiF53LETF215gaA6argcV5RxeS4hfJFXpXsuYuGJxPScqyzYuUeMm3R5fT6kXBW4D",
  "key10": "aHS68VFuJ6BKMyiBXUrpXL4y3fHZuwJya9dgYQHVqEYHaQzGREasq5yuLQ4MWzxYCtEkgPgTfpiLe6rKZwonuyk",
  "key11": "45tQR654nkWhBD9SrFzukmhVT6gLmgwZzgpZDU8dofMbvfAv72mtD66VUhgyyjAQFegnD93BKM3vGCQnYgMfe8Bg",
  "key12": "5vo77E8Pd4MQ3RmcfhQJFoSAF35NCk8aexmVahCDWoD5ggdz6Q4b7L8K9gv4mfngNp7zAxGgwXbMZsEzEhSpEpyr",
  "key13": "2GbFMtYUczNjxVpfGTsZ5qpohNkRoi6raA3ucq4v5Spz3mHgYAcReSerDWtUNwtMoyXuUrmLJcjGjhMcqhKTwkGM",
  "key14": "5G32Vh9jShEBCcp5xVxJANXjyVtLfTohgNkqnew7KfF17jWFWdpA9R61Dn2nzTaA216GWuU6jdvm2jVpYVgkmMnD",
  "key15": "3yJ7KSpSVfbdyNtWVemHBkzZkMd7sSMvsTtfQUh5A2q2eRiSUCkrYaGMEgZ5BsCrdHxyQiVp8fYq71HURaKEyuXW",
  "key16": "3sPSemaaFRW4PkseXW3b5677AzLqp339uHaJktgz5m6zXW1UqTSVGZu6sBPC4AYfBXjdnSr2N5ZkAKbwQxDhmBEa",
  "key17": "HujmeGu3H7B1rvFSiyXSfp34pPsVgTkx3i8z2XEqQSnZYZHE1ojBrKW2EqfSvyfm1H6tmbGZ5ijwVygYjmQ9i1N",
  "key18": "VxMJjTF97NaC6ozdkbaMrYaMgoefXpeJ4Ki1zZvcm3egDZoTf65psRNTViM8Eoa2evbZvrXCuSTo1UfYpj6tMWX",
  "key19": "4rYiFNBsYuU3CAErwfmiTA7Hcrt2V2d2TJD2bKHYiLUVQMeENkUQwdDhmouvtyB6aeyvDsrxPaTB9WTh1MsieTXc",
  "key20": "3bQuzg8ysn9yAYTu4PXomK2T4gnEiu49GJN7fBbbzpKpR7EY83kgSaHxYpbK7FzsaikJnWpodEcuffq5iFDHnR39",
  "key21": "3CmRUY9fsz64pdZrTEMPwtt6WWrCtPQktvxKacseGjWXgKpTxER4eeiwjKkjCzgMudsBZ63dRbMZQXqV6jbxtCze",
  "key22": "5zHvNNCHFSUTCwALdHKVU6wtCkynBURaghQDVZYShed3wjBEMvs75SucrK6EUtDyL3zt9XzMZpdoNJJk5B2W6noT",
  "key23": "5YsVccumm9JHD7d5ajdWGbo2dDNkunmtzwKsjU2K5BbacsxyfXQ648iEXrHARHzbV4MngMcSBucGwAchWUhXFdG4",
  "key24": "3sasQyucioYcjsjau9NrjgwCtGXPeH9Nk98cb1FYn5664rcC1NKfPTnrXAyvnzyb97Q2L7E9nN3tEJodwqMJbTDc",
  "key25": "2VHnLTrSHNDYodCSCFxWGHPpVr6aac3iy112XdqoWMGmkN6p6Hm3aiipCGop2JwKL6kg9vNKpWyVNcyevZ4Ye9TE",
  "key26": "zuBuNyrtq25QcmdWvX22K5Crw1RQiFYPphhb3gVxxquQRhwPnW1V5HVkej5Nj36ADX6NusSmtTHVBDQnUX7YgYE",
  "key27": "2KdBSs2xXNuk2XZGzyDAv3cY9iGxMA3ZJBfasWgDKrfHrSi3F3edh7MZMkK8Ukyok1QAQ6AQ2v1Vd36TYDx4kwuB",
  "key28": "4BVHc5zo7wFPPwvq7oEXWAY7KV894MbXa233qPBQb5TA1Y3Z6MJQdkDaHgZnazyvUbQw3fQ1wX7qS5uCYis3ZcBU",
  "key29": "5deYdmFDqaapHo5wWnH4pfxsfuEp9naihTXp66Gt7o1EHPB9v5XKSn7RYA5k5cCSCXReXTUhZhihHH21hsrmCwyB",
  "key30": "aYZ1EdHyYBa8GFxjBC3qTAX4VSdKsqfbquNmc5dfHyZ7mzhS9gcnJzs6ZP9uDgEdB48MV1dNeH5PdEf4hexoWhv",
  "key31": "5DawBcfYi4Emr8XUSsP5GjjMi4QnWhpXHK1fsh8RxpC8uDM8aZgTfHs2vEWqGjBDcCbVWVwVPH5xj3Jd5oTYR94y",
  "key32": "32Rkkq57FEmA1817T1wzhdmTNkZXZxcewcLZX65EqEeBRMoixLPP19FtQnnfGXbpavdtEs6Xy4Zn14QXDdRUmHCr",
  "key33": "2JHwoJNuUgB3StbRNx74GMSUF3vkAXatdQAhNTcWBVMbCQ7cnLnZdCQ6DmauqH6bow7jjPXDu4yxv1SqBu3oJdnv",
  "key34": "24eUBb1MpZ3EVJToCHZ5gadkqpWfVXBBYe2xf1z8RHx8qDrEVx24fkvaLNeLbJ4K9ZCGjDxJznW2iybWdj2bTE5g"
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
