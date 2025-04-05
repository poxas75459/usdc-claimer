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
    "4K8eqtBbS5bTppj2YgpMzbAVyMCNLa4UMXvrzEAuwpmQ3XL44JjZhwX3fwA8vY5PxMUPvuSviXYQAScXWgRkiEw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anhCDNPnrvuHQZxPnAJuq48bfGRtbfdjZ9NZr8FGuYjeNHKu1GKGYCS28BzBV14KhHBrb6nxP41M5MqJTfDuMn2",
  "key1": "mqzKKRjgwqJ2Mke2ypdjvMjMw5K9NamLP6SGmH8BNjZqDcGQMW1wccvmLfkc9pn4N782g5X7WRERFdsPcvYsWwj",
  "key2": "R2wwguvsGLz1gWepoCfJj37eoeZSJJJz8hV2o3Q1N5q2yYENV6VXRPD3mapQDuZKy9EGQWUEGfSw6Q8BKugxFab",
  "key3": "5Aa4bfXGU8xjsQHXi3KwnJgLTr5KGwGx5VeXuCbnCUhHKuv8XWz25kYTt7QsC8HKaSeVoZRHK8yMy9z8cytD3r5s",
  "key4": "5GgnQwcryx21pY9JVayHTnRWCPRgx3uS6CoVKVRuTm32Bbd7NWSPCiVtwNzc5oH6Y5xxwFhP9i3nmzrMZrxWDgGN",
  "key5": "ZChe7Y6ETU2s4haitXebU4299SWfHBcJUX3VcUiykCKYr5dMwtEnib85fAv2t34d8ku3mTkw7nWU1AKZpiBj6Ah",
  "key6": "3ZfLf5uUHnJDFHS2D2TJagSfPiivEyMAKv4nVeWJja3hu1BBqmDbHTxxkXjmB41WCCuUrtC647UnwqFpFS3TCMjm",
  "key7": "3GPbkyKtHmHS9L8DymoLZ3HciSh5QV8itbU4vv8u7uFp1zMTzJ77RSExa3DdgbgiHn1wvYrKKi8XTMpwQpvxwiks",
  "key8": "5qBKLxdeG7fDygk3gZPqwqAnd8qtzw2HQsGJ5RAExo6bfSHmhsg5Qvfo2qBUsVn45sf2hAre74tXCEucP7ZV1T4n",
  "key9": "4HxtjMZ6EFasPwQqYEaYNUCpaNraRaoy2ZY6G8DjuL8mKHk7r9WmPZXAP9Zn989MPsn8prxij9pt5Ke9EwipcnNE",
  "key10": "5eLcxYdRNxAUiNq2PtAJVgN3PRZ42w2eL3m3eveH91nKGRnWUYQNAdeyA1rKecDoCwd15jdtVz1M9PEWydgPZSne",
  "key11": "21fKLC4XocmVBa9TEtRdh5mbZBKnZQfH2iNPo4SVeYJWojJvyokEKsLJuSN2JPKPEiP1cTQbYWuwoAvrw5pHsgFV",
  "key12": "3nX9ZetLq21h2FW4KLQL76AuBueCVc6awN2oZ5h3kLp7oUSvKduSck6gNDzLhggmsoEk4fZqzzjUgVV9gDAgm1JG",
  "key13": "5pofpPkhiWe7Uce6SVJiQKomREg6jGpw3UAVyPmMBug547Ae5WQsh3tiZrGJMbdvQATLu3XyVcLpgJcenvhUjrc",
  "key14": "5cgvSi7EwjuLCYVZMCgk7WqSfD163W4TEvzRfcE98LELp42FgFxgYM2zedTRue9g5uU9ACBUGw3VmY2mU2nxu9Wq",
  "key15": "WKpsgqHQdwXnJXf4XvbNLkosJiPrwbaCCvvqXLKosmroN4qCmQfCfXeP9DDX4baH3VHUXMZkzgJXXnBSAECmBFQ",
  "key16": "5g9CgVyq42w8hSMgfWej5Y5DnvXSHkZcVQoifKZ8DKLEGQdNsEtA47xYcXQpiunfDz1f41DnixmnRDma8vN4za8m",
  "key17": "3YnURPwHAq1tbPZbH2kN7NCvn3vPvCcf3x7WfyRBfxcTxfaqHFUnBioc53ndnmLbi9sq6FjVQ5H19BPLnAqBrMZN",
  "key18": "5Shf8mvoJ2w9eje1DGw3Xz5gnvhfwaNubkWk2cGeZPxLG6uQ1DyjbTfu7d1K8PfRFQvkngyya7424ptHTxQN5iUC",
  "key19": "2HaVgaXavwbmgX92nnWfR6t9n3ApJx8sibuhPpq9fSJi2YJnWHGZMwL5Pd28Dy6mgCChQszKPPMyDc6V4RU7DD7H",
  "key20": "37VkpXyKZq5Gz15EEuwxq2LZULdfjFXaVXgYkqbNkp9PH9uVyzm4drP73iMXr5cKgVzPwAhgW585cjmqqSTHqmxT",
  "key21": "5yZEExP65RbytjUxswu7B3mD9Zd5CYomsY2cDg7PgTQjkZTwKaaxKrZ69qe2ZaVmjEsWwgT2BhNBweKhJQfeUKr2",
  "key22": "CvntVoja7dGW4ovKJPw87ioCumzyPq3yuHUmxM6dMh47EnAk35RByiywUGFMY57rNVrzDm1dx6MC5DdMQtYTGuY",
  "key23": "4K5HkRnaBoahhPZ9aaGvKoSosqhtMMe2BxePhYjTioJKdFb4NjLoHg6mug9Nc23xVvHS7BEUtaQWVq2TGgKHaZo5",
  "key24": "4w8UQc3esNMV7FhZ3inL6R2bKRJSqkT9YG2hH5ZmR6xDvu2CmYciR9DrCSHvHSZKJkKdRnCMb3Q4TsNrZeyYLKTd",
  "key25": "2NTqzVU7SvKEhixbimc1reNaVXp1y6naCMcgNE8fMJzcMAP9NnQbu5HWxrJcGwX9KemH6exPGmx4jTNPaAmJFGU9",
  "key26": "5NuEi2dGpyFEQqw3dwqS8UeTvJEyDQDhuES3R1oPJHtqE1tJY6JEryjgJxnZxVdYSYvHMGv7kA8Vdx8zdTFwWRS8",
  "key27": "RQqjbNWLEz82xt4MLxyFJmrVE98oCqHGf2SU8DtSyvnrxu9qbuQyn8nZwtiFjiGsuJCvoeZy44xBQ3rVvzNVfCi",
  "key28": "3B1Bos3nViTprn5LTnjan9WC5Ztb8rx4zbHwtHGKTVuP6d9rfaYFfz3xeFxFzMoii5NMmthqVm1uBpKqkgKTSt1d",
  "key29": "65S6ekB8cMNapV2eURvnvsQXFesArPsMDE4Soe98iNDz5zpDr85c8k8egqRqFJZGdz87r3EWz4fzvaAPi8FnoB5U",
  "key30": "64c561kpBRQidaj6D6QCdb9SpVEzkSStn2iiQ4XAJwD3oopCaSsVM5A12aRiw9RAutNpMaQ2vSo6pJSeV96VT622",
  "key31": "51ywQ1gkDQnL6Afae5fBqQZosDmAgjZ9zmvhKsN8F4ruxvWeCxPj1eJ5WcpUz6i8uhunaQKQ1xizs7voofoqDrJY",
  "key32": "4Xu56u8yFdFvxue3vMVe9qMFx7WffCg8KpwvLifsDCqxyPkqJYf3HkF7HHAjy1ujfgFMiieusctdGGvf5gR5SVNv",
  "key33": "YY9B4EkrH842CcJnNABuoh63Bp6GbF88irRPUPMJFrpPjhJZkkkjVRy9zzhscBNBDGGiqdanLdUidD24hHAkyT1",
  "key34": "Ab15sMe3PGQBydvrZf3zVWxfUjqfejdtsH1HV5Syc8frp7Ppgu9u4Ruo5fXwdx8uQiqoYaNdKTehwPCPkrqr4v1",
  "key35": "3jjbmE7fTF3sBaMLha1b6hMYZfJpoDxHJVrgZmEMWFhdvBphNpQJF8K3RvvaDW24ZYHEtpHnAustd6EAsCJkwLbs",
  "key36": "43aEeXbh4v43vYMUzpxe3vNSjPApJDDVbqssuvuhe8AtC6D622LV2PdMAeyfAqNKofAUG4M4iDZrrKheThTfoS4c",
  "key37": "5QvvTpZ1CgTK3gsBug9kFpsJ963E9LAd2Ndhe9mxQirdAjCfbSmpjq2tvzmATShCj57XQjfEnVzkVxLJDtwDBN15",
  "key38": "4dsCDBjY3RsBPFJtQCvt1JpTZ1vrQqRVpQe38W1Wy74p1p1hdsXZ6P9uegZ7Fwy1BXqq3ULHzyXW2d89d1jEQt7A",
  "key39": "63btU4dzdfRVbkmNFogQjtBMGYteeu6SzZxUALA5Y8bTvJdQgXEdfVgnAoVecRuQpTsE8k1NiNamj787E1P66rsm",
  "key40": "n3m5RG6B8dzVcY6UTRVYqMQDod6uNs6CX8cCTs8YeSDLHGn3xJQuEER8L8bbGAvxPGz7bshUaPPhLuH4fM5JeDJ",
  "key41": "56JmvBhpw878S6k3TSYCykFsfbRHuFyqGf7djCnAeTLhR1Rt3z5jvmLFUTm6xE57qMsCiqUrqdYeJo3maaYZ9m8r",
  "key42": "4CWrDfK849EXcLR5zDfo54BtHNatSnEQbeR8qbqY9PUUbTkEu5eoyeGN3cexXFfJV48SpB9iwAgkLCUWsDC3oRNv"
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
