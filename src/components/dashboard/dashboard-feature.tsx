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
    "3LBT9ds6uKa9tSGHQQpWLmPJT4tuFe9xWPg5vZsJZpY6WAn1BN5At5ZZ593eTJ2bFjFSMUkJ3CAqkEh6ky8zQsPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCtYnm2df3EHom37iZyrcGXvwWMMzRedvrJmyz5Dkck7G66vrenUoGdkQV3asX9Bi5siGSZ2SY2ZLbozZ2sGh2o",
  "key1": "49kPaRQvyz5vZds7F6yZUeTwQwcqExhHiCakUhSmvSdUchi6SkzHNiAeJfLBLmTfr7YuY3ZFuVVt8D3t6ymKFuNV",
  "key2": "395RTPWRj7Yr3RitWbrMPsR372bSXLnVBKqZxMCGfKcpXZzaxCXkav1tow5okbYiNi8wtiLmqYBgekMbbmBGvgkg",
  "key3": "3rdLNJUvAy8GdTS1UbokoY8RTZRFwAfgbGHaoQwYpxtLUjXif4JFYj9MR9vX57hWTZBStvak2sEKveeWWDeX5jYx",
  "key4": "21VnPrmGRCom1vRVgpGWjB94qMw1xgfsgexZELMPajcCwWNBWjbdgcdEeHG1xP7F4ytmtWa7n858QTkX5YB7rJ7F",
  "key5": "2JrBotvfqfWwgL4Gqf3AVurAfew8nKZfJo8JoLsMHLrSd3iSPmScozAmz7BjK1Y6diroHoMK87RCeyZ5tgSv6WXy",
  "key6": "4i4wyb7oRg1a7XETyJQVvUu39QtUMSQTLcnezRR2Ge8esrLeKGMBT6MVGPhBNed6tTyJhor6RHhg9ppGzjaQrMvu",
  "key7": "4tygbpFLBHSc8Q9iZdvYRdiKwZK7VwKx9pcGLUN3Aopkqc9vy9HouhkZjsUXo8NZEqHmW3UQL3pWaWe2K3NFu8k3",
  "key8": "5e3XkmNoeM6fJm7AFiTzvvfTkjTVCX18N94HcbUY1GPy6UTz9CJBmHPCJrcqnD9ssL4FyJ5RMBZeEgkXDpKMTsB2",
  "key9": "3PwzpnfD57mRaXRoZpWnxHCjDtB9sHpPTvoU3DqZbG9URhbNjq8CN69ZLFp8AVBkDXjVRJUefZyNRDQPS8bvcKmG",
  "key10": "v7BAqfPWYC1HTBv2qPaBjXaTdckLmZhkZz6XjZNjP5P2GqYiW7jWc4od8kULGkP2hthxCxQrW7TXNPJc4vjwPD6",
  "key11": "CpLNvHzs4SerPadyfsDmz8TDA2LbDaT6MQ99pSpBuD9BihCfossqyUfe7q4dnXsiLuPAL6tuGwTBMJSdjQZWHcu",
  "key12": "4mwMQ4gme7HqcpU9xup1VCmmKapZY5pmUtmTrhVMUD94RaJuKdWW1qGTC6D5w6mqUu7jJBbLnyNFLg1hWHTGKe1Q",
  "key13": "4yJ2kW21v4VUH6gfp1YNEXnTcsj6TUHtEYq4NzBHWytsvmYZfnv87JeZLRo27E3DmLazi64YjwqkdaLRd66cvud3",
  "key14": "5GcLFWicftRxFra74gAibVw13gY5N9xQLhxNtLRPivbs7iajBdG2Ri1RSRkDng4R5oK4weobpxyaNoHTbxqmV9ys",
  "key15": "59FAvWCHUU4xCY3yD8yham5hVGdTuoHLpcnWBczLk5BvYyqjUm1czMwnGAzuxnVM4AYRUZSDekPDMzLySHwpfhdy",
  "key16": "5JXWMe7vdtkFZjYNhrNLJ9Vdiw8Vj9HVZjmgPT5Ys3pKK3QTviXkTyyxwF1fSb6U76EMaeovtu6u2Wcrsvk7TC7R",
  "key17": "5LUo7TXHvjkyiqESyQrw4JYSPWWNQYf5MEhabkAerFVBrhDD9dgHvjHrraffhTuf8ozghNLgoY1KmeoPE8xwNZ9i",
  "key18": "iJ4cQHsNzH5WWGckkbe2AwKfvhad2DhR2jHZbQX9YPZAxtoLSdH9Bz7qudfZRu6DH99waaus7UUGWnKqiKX7G4i",
  "key19": "JMyTYKJRDLiyAKA1CXgJCAZz2XvBEiPNN2R8wBaPj8RfbARnckvbgEQc4fmUGcLuaQ2hvJwptoVsCjiPwfwB7gR",
  "key20": "5u3BVs73bfavL9yUe9Y6TseKpCbDpNpYVUL8zFftSjgDyXqWC99RJXCkax6tmykYjnNPMabZ224nGpjJkqBazy6q",
  "key21": "32566iNBDoSKgRzyDgaqPkvAcL8GHqFpg1YxNLmDu4zr2N8M23eiouLnTJVnZm5wkdrtaC1EKwzj349WnjEdT3RU",
  "key22": "32xTFMUQfVp4GyTLXb2bka7Cb5Q4EYDAJCe3Ut9USaCtpDnvJRmrW2WNjchZYmuiiLU2FUdDFkAdjRY1LDwAEqvL",
  "key23": "2qz9Cw139wY7S4JpiodiPFZqFES9oDHSsm1AGwoFHSNQaH8DuzhFvvdMoMnpw6T144PtWMALoCms697RyXBoayTj",
  "key24": "46Ati1XE1An8G9YSBJsYeYBBt1LdxysHBbYvyGv9Jsy2toinLXg1EzcLUvJGMa6ShBueyngS7BKJSYQKj6KHrUpt",
  "key25": "34jQ4FrE5LQwZ8oUjiGy7NkvJva8mXrLiiNSFyWiaGaMk6jA1DxwsWE5nqiPPUR13BuMJ57ZwEYysUh2CZmJuq9d",
  "key26": "5HRu7P7ck1PZz6CJjMLfpK25u5me5z3eFPrKJxJBB4wgQGvNKkumLaCL16jdYVTB5B7wrqJiTPa7K4aijekkWg26",
  "key27": "3CWxzi9mxodEkXe1HWanCGJKiGMGsderhPZHkjth6b3wSgbyqTtxJFEGZV8Rz2nvVrvz1Zqj3X59n5SVtBufaWaW",
  "key28": "2bsmgUcLpYZ2BLdPqUrkj2FFr9bmCdb6xxnkesAvmEgv7BU5pcbUqhdT1wRfgFtqMKFbQmuvbHsEizuCwAweq1hR",
  "key29": "55XwPoSMnkpd7iYQ17mbPio78z8pu6PWZQojpDYehxA3A8MdxKHtV2UtsWyCQAvmuCeAqs2uaiyEPg684STGfPTu",
  "key30": "4cESpq9GQmHVhmzZPMehCfxRhrMcv5JpZJovrq7Lk1Fd9GSJ4tLFgEtBzj47S5rvbd9w11estVzx2Ao91pUHiXT4",
  "key31": "UF5FKoU3UmbMWngKSt54u9y3i2fZfdmwprXdbkqtZTM5qYJzWfuHTTuSMs3qwycQ2WT2AhZ6KPRxntfpXATg1My",
  "key32": "FfKk3RXn27mNEiRNWZUTSxD6R4csVakifJ3USLbn6hjaVmfkmGUwGwUFqM4xKNz2aRb67NxCEd5P3BAFxfdf8XM",
  "key33": "2VjFZNHYQ69K1LwiYmrfe9uraQoKu5xUrj1gb5x2fW2w1tC8zR8wh3qVYhLVZL6tn8uBvwPw3iw6nk8xGWUejjQr",
  "key34": "3DMBtBZmCg4jFWuxvH4KgA7iVEY3oboDpYbJZuA5JZAw8YVxu8TW8EJzAg7KvLh7fx8QuX1uCN4sn4JcSeyX77V",
  "key35": "5XNWoiPPjs6NZ52uRB5KgzRPxpcPoXcvfzH9AW3fhZEsDYATRXE2zfe3DAL2ryGADy7k2h5hyVmMvpaDRhdMZkGD",
  "key36": "48eQypY1ayk5ebD25LQJU8tTaqgxe9Ld7rV8vgGwu2pKn155pNRSARXL8e1G3Hi9icJDYZah1gtWbMm5zKgzBXfC",
  "key37": "2DJ7yaU18FsrWgmGK3CaEdk4EwnZ3rfz9QDJh9fRTgELC6n2U26ahTdTFVs8KGrbxtSd5uwGuHYrtVnbd1yhdFXu",
  "key38": "229nEJRcHydPUpu8pQN7CUuMTnVW1t4cczPu8pUTtBKFVDouBSk67ELuXMMU5jZ6p8XpkXREMb7ikBDn6ZFPad7V",
  "key39": "dg1CNqSpJFoEQRzv1Gpwx66c1RrpeCHzjHLxNNbkcZ14zh2DKnwrVz6iEFw9f4RxNGuD8o3kvrFP3wL8aL84BDD",
  "key40": "jBBr21LAwgxwYNDhkMushFHo5qkiX1axCpgV2APyFTpLfztrjg3QiZNSDet4e2GP3MYYSiXyhmnFbfmoeeh9yd7",
  "key41": "5rN47GSeR9FRtxfRK8sHgV6agkqx4Y52McaG2SxnDuJ3AxrbTGwiNMNPheCLDTxoVJiwYgbWhjz4yfnFWtkTF5ZU",
  "key42": "5gzvRrqAJpAmCUjLgqniRSQFx3FJZrowjqS8TeCjVAxaYipRWq1w32kWeF8UNBp2reGBcLpBd9rSGuuR8VdiKTaf"
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
