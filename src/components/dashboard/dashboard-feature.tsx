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
    "vGTWnixHpg8eR8aEjkM97fQEPWJpWejNWaVM3LYAVMGyE7DfUkzrsTLi2NbKBZsuKxwEAWzup99b4DcfTziLszH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36g1Tauc9uZgvZ4eS4oJFKNqqoPr16b6hL3TQk9vu6By5r9fM3jxYKsEP8Jxv1bnweZM9vrfqhY8qfB46hk5Bw8q",
  "key1": "zQqnTKz1gsXv618Z8NHnUxEyidLioTG5dYLzH2GRAsw14nmeuaj2jFwtv5xED3S2dzPgPRjiFUytBaCPm1MnXrS",
  "key2": "4CYRxowxDYJv7nWWmHEHKDGwjWxSjDnaF4USJgjzw1gB13Q91EN77WELuyRjg61HYhhKNW3LMZByueq72Bd3tKzj",
  "key3": "E5VYDLvhCtnoDvsVDquu1gY95zo4B7vv4ehkpuVNbRWF1ndePxvHUkkWU9UKmHcxEfL7AWDGVs1qbj8mJzUa2qk",
  "key4": "4yoK6C3LJeRZYmbV4Ftgu3BAisZFVgyoxEwFtWbkxXajc5Uh8qbBgiV1uA38uEgJ62C6EYMVCd7vTGehFzyKySpC",
  "key5": "phDYEaYiFZKfT5deSpj9L45aiGWNRrNWZEqStyfzAry97FQLBLJEm9rHzKUCwCK6Zbyvz5Fb8xfQL7YtMtMkeHV",
  "key6": "2HZz6CE7k8Xv4HUkSeRQRZP8A41pfF6Mwq96ScKq9F5yjBquJehBDiPo4JYmzZHT4hoKiHJbz1YrJPutANWzbv9g",
  "key7": "3wP8gYrR2jLM8yTEfpyR3NfXykvktBPkwStR1HQQvwKzX2hfXU635DjD15SHP1Grv118s3C4NfrfqrGqxcKEidtq",
  "key8": "1dvXq59Mjqk6KXFhEkqVWmYQzcniVZXdkoAYJkuT5L1js51KfYHbBjYtpxwL3XiV9BSxjTRy9qhHuhqXZCY4coe",
  "key9": "414LaQhKvJQ28P6SMhRbJGj7agsyQZW53mj8D8zSt7Ps4htyiPrCr66qiT6mWsiFG3xeUCK4FvbZG11EzWzndCwj",
  "key10": "3q3okSkBLoqYTmghm3AqsTUBSZ9ZyvcQ4hkVEm5moSAZycJhjmAS3Yr36arfwBV8Zw4Zizz8mNdFhnCrGVFsc7ZB",
  "key11": "5hphbDeyEzxUuQg2CcFN8VFoQjZFRGwo2fhRKAgWgWw33gpQodnX6ovfNWb4mTgvZfc4r4yxRr4mWAcJeH319AzM",
  "key12": "5LguvcwPMF5pzDYzW8UCKCZPuEHzSAo28e6fnkqRxtHByNmFSmVERXKsYSDmXAyGB9xB1hvXQqe9w3JqjWmZttAL",
  "key13": "kxsmva6zRX4jn2QNss2konV17Bt1Suekw6FnebyDJDCeWLCAuMcx64kyey84A5QewL9sbLMUakGwpNGmRVX9gc3",
  "key14": "3ENjsjy6s9rUjXe14vs9VKqQ6cpgq26uW4QkzwHgiiKrmDH2SPj1Lu8WcZvxXhdwujpvMDEZphc2RfL3oMPetVJa",
  "key15": "5oAp5EjWLTHsxJsiEoSDJehyo46nEQpLM4V4EtrzorejgoTFXJC1YTBuVksURXzVvWXhexryfnWydgQRJFYB2ecV",
  "key16": "4sNJJMPZiejpyicXQvdtabrYNCWUKb4fmkAU4jyXx933vrxnCKac9ZPYhUypPN4M3SamzL8yAHn1Hh9ouSASNv61",
  "key17": "3Mfoo8Tk1JsQh2niwKEFv5CGpWfag5Ah1yQ1duBSpgs6wXNLpvDf2xZnMSNqK69nwKs5popxeyYxpZHY1mhBEuLf",
  "key18": "dJ4oK3VfunRg4tBwAxQ8o8153XP2gJAnnFfnoK5jDYi18iYJeFzzBzoFssTF4y6t3S6HFsddq1Yx7QfE7oZvPPe",
  "key19": "5w2UsHCum5uyFvorRnNSAEmXSfozUd9c67EahvsiGAG4MdkvmuZrUbMngHAUR4kSsMDqaYMHUw5DbrHFHWFJCqqq",
  "key20": "2nJK2oDHM98fkwMkQGeYoHCQvoTjXXbGpLgLx6nqkXeM5iThBdgZZrYBxemTHCZJbEv85h6uATRAKsjLmQUEbC3N",
  "key21": "3FMP6x2vR6pGvgTfpoBnFF9MiptcXmq3VhcWReBzbd6f47BgiUa6jZrLrN675kAPjXHg7sJbPaaVRFAWg7X66sUH",
  "key22": "tRsRdyydV9cnsHovFtAHZdgyt8iFsoFrNyWiojgTx4VCVgzyz2Z2ReJUKQmubwUxhGGkopYEumXg9xxYZGVMLVe",
  "key23": "66TJjZUDi96qdV4VAmCV6dXCKwCtuY2HpvpB3veVd2NVnrpr2D2fKoPd7N9xik918nCwKnYMxfLVWd4Uq2q3YmFp",
  "key24": "5uyVriqAE9snEojopUyerYxpnyonALjcga1yrUwCqWrRSeQRirdu8AkKbkTXFNpBY4xJoXf3hQrKCcJA7dy3JUbS",
  "key25": "3x3XwFEXk3tQSmGooXhwTqpD4eyT3rEmYBJ6439tTHdYEBUa8oe6gsEdLzKRUp6WMUKci2FhQHU8KyVB3WCBbSNg",
  "key26": "3fJaihsGrwEh7xQpH6386wPqHJRNCduCv5jygPrx9GBvHRJsrH5xydxEZcGPnQNoej1v2dovnBBA2Hcjvx1kEHgC",
  "key27": "4dXuBz6wVr68b7MYYQA7dGwVupKNeosZGL2m5Mrf7j4frVB553X9XGqzBwgEkRZQ5rCjeHWfwY9TYeESGHQ22VrY",
  "key28": "2DAn7ki6XiE8QwSpmaspkdrRf11tAwUSGxU5kKTsG2znWh4U2gMHZZJ7kXNMbEnBHQ3b5RDZkpv1RPh43LegBPCx",
  "key29": "4NKd66WVhShid6ihTjzmM8CX34XuYjRoCqkn2wEq2hh9XqK9y4nvvmpgVkTHrCqqtJS5FKFCumrZ6iYm7cNM4J6D",
  "key30": "fXxR3B1uGwksdYeywyNrmBBfuCtiRdNCBdZVBUXaQTppRk5CVpyXtkaitCkqSvb2oZ75dH6W58kffaj3Uo9sLtw",
  "key31": "5jJgkeSu765pxMv3WhqvN7h7ZcucjPSp2zmAg85Qi26zrfuSAAByJGgVvFbtRHrjZJZwyycSHyTwYYKHtaF7hhAE",
  "key32": "3YizT6wa7BHoGy7YtQC79vRwdq2vRSS26e71AmuYGdFaMZvrtwXb21uE86bPZV1eTjdiUHPt3QabWxH1tXRHYbTw",
  "key33": "2BzzRKHvzSGFGfMeFBifs6jDwmRbZrRq4KT47UdLyNLDTMKMy1GVPh2doH8iazn8uaAem48TbVffr7HnE6iEEs77",
  "key34": "3Z9RHdymX56i2VCwo2H5K4X6Fi3Rudz1LDMoEPW4mmxBynjnbYrzKsbtu4uTEPTCr2Y4eaa516pDpZQ4jP2CkTGY",
  "key35": "5YkfY9Q5PZnbooYd5GvivDtL7YHriZBv9DMaYU1vTRtY4pnjhsJBKwW7oBAeuh7VfrTfR3LVuWiC8ZUG9661bKpM",
  "key36": "4eyyn84gSoocVy8MdNXjGdKzWFqu3NWeN4P947bahjmukaok3gMduMXRC3us9RbD6HQdVxAXFiwFeTMdKnnyiHe9",
  "key37": "4GJK6npmbE4tjsbhp4m4M4MSrMFXS4HVhNt1R4v82yxJ7BL5aAjtK23fia5rqKpRxosqt4ZgVxALGdhAqjJdiZf2",
  "key38": "3JcZKHsS2d79PkTVFBT4BmFFZPmb457KgmZGcj4wVR4Mji9t64nv8mEoMiFH2HE9PjwFGNPXdLjsNZnr2s2KjqGn"
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
