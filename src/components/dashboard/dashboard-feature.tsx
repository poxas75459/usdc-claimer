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
    "5XdqBvKexbHTwAtsjAKxSBFNaQHRxD7oYdrqT31Xz3EruAJtESztNmrJf1mc6DkKMtCpQb3WmJRdNyEpmZWmg4Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceUYpEA2TgiTyZdrGDeFQbdga37L9GVANht8sC2tM4zHHfic4WNmHtcYwzWavLUKoruvyQNL6tBKoNLEsEcsaYR",
  "key1": "5naEBZgz593x5bk7ZL8Vq3HaQ1KgNHMNrVAycsf97pxt81jajeTjth8Zwf2BhiVvmAghAXyfNqneja4ASnroLEPU",
  "key2": "3WfJ7cP9ZYA9oqYQmVscyp5RfjgkkAJM3N22t5Y6Xb6Z5EHRwCgkFs7qvXH1GThhQ2Cwr8HfMnysjEdQ7QoVW8R4",
  "key3": "yaBZ2yMMGGDbtRJNaXUao2gLBMWm8cJszaFUCujaU9m8c4PyXuPt1DKoq4L6nrohLkWkTZXJZVpuxMhrURu18At",
  "key4": "3Ua2GHLX9jy2Z25B5Da1nP8wa84UGZnWSW2Ed9N6h6YB9dg9N1fin6TQLmuTd2fD8CwyuN3JLDsscrHEArdbkcb3",
  "key5": "3oTL9VjjdGksiR7E64PTT1scJhYiq6ctgsuxfAp1f8rg6n3E4G4zd2HYGiZTZ33crUynfowhaMBo9bkavbDZKFcH",
  "key6": "53htMWx6cXDRzDTfZMY5ZEfvqQoLAeRP8dnrdaHgi7o1XHeML8KT4t8Eg5nqDZ19hRngBKvhqToQs5Q4AJug1FYN",
  "key7": "22t3WsykkpkMQNFKDo3Wjyn79GiBGFTdBXSxgdaXkz1arorr382Jv8xPwXCURqfhvy8GJ2t3bX643akKwxWXm1bi",
  "key8": "2CKR3VGyu5XMKTSJythNoU8oBKQtaWmGwU3EPRLzCm9EkJmCn6jzT9p89HswujiEgpvYV28iTohHFEGZwRJtbpgd",
  "key9": "3QjsbZUMpw12A6GXDUEHVCYQWn8biBZe72duxRw3TQ8T7wW71aWDtBmCCoJKZJeFhx75USUT7HZZSqNaGd8enUbY",
  "key10": "5Ka6KsvXCv1zJcr3iGYVfLFu3t1tXPaMY9tb232EjA7YGjUJa13cZURKmkZpEbRFojtHE4SKQHXbg1png16ddeWB",
  "key11": "53DtMXebYKuyB9DBoEdQwPt3bqTuDFreo2RmpjPnbN1vpgtWBj2Z3tH9U4gzSJ9kJ7Lnf4uK1z4cWtiRWjdeYT1u",
  "key12": "4qmoxP67Fpac1rTRuApYG5YS4inGbCtn5uDsqdpvKEzduygBSf8bDMSfGSE1JoKerUvAz9dBbt75xEEBMtEsxpyx",
  "key13": "2owfzFCuW8LGmFijD6z3dgMxWwGv4LVCaVFWMnNcLX4sy7z4bWUkZbmg2XPbgafuEBJ1rGVj7yGAnxUbHJj5CAUh",
  "key14": "3HfBD3Jwe1JNUD4eX9GmZpZZi237DwsVqoTuWsM3QDwSsveBu4SABpRAY2SpLjNe87NxmvEj9zPN2mExY65JRggd",
  "key15": "2X1da3ZDdVEg5uRSEcyrwzpvr5qS79SD2tvQJ4vYn6VGCE9kznRVWWBk3utdjZFKjNB2cnKzTgHwqchsp23wB71n",
  "key16": "4avjin87N544qy4AjAu26JEzY7srgAxtpptLosMWmdmQuBQYyY6WPmk7GvYBQuPxEGH4Q1vLzaNbjMmupvJu2zef",
  "key17": "47BtJakMMXyA1Bx5KReW6AaiUNWEtzeTY45f5qr8q9YBzQ1KLZmRVTXJ8kn631EEPppjd8m9huMLMGmMwk6yd5wf",
  "key18": "qRLTwFds8SeCiE9CYYFRvMt8AMZ8wVvRTqEfTeRNAj5UwcyPRm61eLEexvajcQK99vkdTgUTWsPdUgNHZhf9kG4",
  "key19": "2b4JYEZTkLU7z5XF7MGR2RpgJoSKCnXqmRa2Wym4JtUGbcyxnwGLxf6hB5jFMeZ5P5yUodUnKtoa3GcpWaU4ZG23",
  "key20": "2rbXdHhbciU3XXrYn6mvdWkwSLg9imQgmZuwjjAf13qEKkqV3hEpzNTzPvrYL3Ktt9t9UpNSA62s1j4iGeK5vRZE",
  "key21": "5PKvMvKAXJp3aKHRotF5fRnzNx44n7csDDrbtUUVMpwhgfPwWRAsgsAkVDXmdjKrR1c5qMd24sjoAEsZugtKaAm7",
  "key22": "3kgZc4MdaQmahoEahUVuo1DyeFop87UHr5MR2LNeiBVN7dyovJB63kLJgScg5aYAUZEu4JCkxavzpxXEdFt774Nh",
  "key23": "49pzU3vyLDehUURAy7fPWm8xSDr71rsrvfQPuwoFK4AiSUZZpi41JWZN1BNYtYhs2hnEvkArjG5xQvGDj6NayBUc",
  "key24": "5qGXoHabgDMezaF5Vp7fxn3hTH8qCKMMKJiaj1X3gZKMdcYTicSt4KshdjtziHyAne992SQxyhgKUh1ViTV4rtjB",
  "key25": "5SchjvyHtx5W7w8qNaJBLdnBy6XkQAVUtLn6VYu6gRj8oSQpkxDJpyz9ifQfPb4hNkgxNpqZd2HZSQD7y4BsvaDS",
  "key26": "29NtPsLTmeSqrz92geXn26e2k1xdt3tqxN3QLKeF8iUyYpHgdBUnAB2Z3KELWbhXCjo8mDH9xYSBXBSmg5bVR1nz",
  "key27": "3ZgAAQAryAeGTcR8ppB858xNDuimTsaSuJ811ybrPDqBtjd9yjmwtv1S39NZ6BWoj4GMz9NcSmJrHbQQUy1h3ssk",
  "key28": "2qAKoPm4o8L5VwnPZRnMJdxZB25SZtWFxXfGDt5JzfMAbibZabfBWMSJigD88zb6sHovtDRVXi655UrSaHPkt5ET",
  "key29": "4uBfTgGid2XKqcvKtfircb13wkLdnZNp9rwGDkYTNkUQBxAJ6q8Gypg591a8GWR9RErBWXpCoeeUzHYRqbboeq8M",
  "key30": "2sQzvyhTXKhCSzD3wAVHzszVvYs467XEzxNNfCRHAiEt46rAcNVzazT88CyGBDiCBwsYZcPdstsDzrACN6PMuziu",
  "key31": "UN4MJpdWLawS5MDE3mJMSevTMtQ5D9HF6LozbnJpuF1y5jwrwZDyGdupi4PsXUS4wQQGWHF347hMceuxP66sKYn",
  "key32": "5AoTb1aoHvCn2QfY2yaffEQKfxCvqnpxMhtUhcADsENJkCytrHkzeoVUBEht2Tnb9s86MR8KnZ4knDRrGUeaHhMY",
  "key33": "3dyMnHoY5f15XFpTLgv3khgq2uegZ8864qKJfXWQsVyXPcEuudCqW6RJsFHVPvNPBEvn6iRwc2gdbh1u5d39VJqf",
  "key34": "5Zw8R7rT62YcvHYDCvoYDFSdJm4bYftZQHoNL7qvxrK4t4RWiTrHzNiP9J79zj8gpGwzUJ8jT6ikwMrMUgxXasSj",
  "key35": "46CYEPWTj8w4VcuBSkEt4k38os8gEEXeCfx5YRPme1JtzP1ZHzxtfta83edoE5LXMbvqmMB6ffrfqVAgmWkXuEpq",
  "key36": "j8eas6DR31XivWFVwNHwXHVMh9JigHzQe83otgGzawxBMsm1P6ZeJTbPf2JQ1eu3TJ2yQ8Lvykg4qaJZxAsSr4n",
  "key37": "2LwHDtUHZHspyFYBN8xjYJQyc5RJ5JU6S2MLbH3CQzJVocBN4ZsDQYi3mmQ6azwXQqpkSWKPC6G8P6BNVHF7z87K",
  "key38": "3EmgWnYTePD51b8BCkUJp8AZDWVCJ53ZtsHoAUpqEHR2scSFFVfdMrA1vWMg4icxVnEpX23N58kDS4zDjsLtgFbW",
  "key39": "2rjGPk2ch8KL3256bouXTYZpPJ5RmJPssMAgp8Ht7oDCDo6oQoyNWQ8wULb3MW5RzG1zSCrYUgMPxfxmCKjeMxUf",
  "key40": "4P42UwzPJ43g9CFzMuFNpycbr3ovQDHKL19kmhsfLX1aUWfqKmZsnip7z7GSy7hdaiWKK6kdwhfFMjkFvzuJpMpf",
  "key41": "32JxdkLvpQKgFzZ3i6LQQLW3Cz6jskpiTgwMpDzEbcLFUXmP8ctppu1GqzMmwUNCWEGctQM6iHqGnjehtcWEo7EE",
  "key42": "4aNgS4Qpzxddcb9wS41ub91WxcDDmUs77mnoThezaCEN2VUa6MpvafACFyRnw9rHQhMeWGoKED3ZPSaTh7NydsSu",
  "key43": "4dnSPpygd9rTzkanqJ7yDaqmnUbAQqP3xHwQzSxDnPCL6LKgGNuws9ce1SksxCnYFyE8fzynsnBFiWHpkN48viL1",
  "key44": "2G1GJDVf9Cv9CxtRmc93XNeTqFWeugM17V5YYDKMGMhvHaAVukVdmF9yhTFUcbJ4hwJveo5kv2Rz6dpScfwZDjLG",
  "key45": "2ibZRpg58LFQdyvARADQTYqKJsnRKLDxLKRD6HPcWo3W3Pa2Apdud2irFURA5BwLzCQEdKtLiRwiBpGDxWUiEBZk",
  "key46": "2Sehh5X73cXqtvcbCzSfVo2MvyuT5tAQKfo8ZZ3KoR4yCpTGRe3XiZUY5i13N6qSYZvrBWptPFUVWrtCyVz2bMvq",
  "key47": "456CyeCBSKgtFr34jemyz2sJwucHWemNRTWAaT8yqw4ffZd6MvSKQj9YFrQg8cWD2cTwjDnURFNuPUPtefCJRKoB",
  "key48": "LZXZPUoXiPemtPzP5iuFZ7iHdRoA8UAxZ5ijSxBedU9LWnA8Cajm9s45qyPzoYmLXyKoAYc54c2f6Lu68uNiXiq",
  "key49": "4TqHFbtPNynr5FMhRv9aVXqXQuEhdTQCDVSryaqfE6Mjzq15ErQt4VBxFaZeQFwddi5H1viqfG5AMiuqhKaW7AcC"
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
