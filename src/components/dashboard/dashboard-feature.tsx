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
    "2wV6SeM77ZpW9xfnww34QpTynqJ3iZyskzcsmDvyMefvsy88H62YuqehZm2uJfMCJeRWNPMaTPCpKcfocZjEuBaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNMvdZV4WQE2Xz6wJdo3tppfjw7jKsAy9TUyqPsRE8emttf8d5nBjdiaUuE5FCK17DaxzMHfFtgc8VpHAfUaeii",
  "key1": "4jWFoExRSPdKPVMcvwMiruepo5UZgio9JNBcChjP9oKhtJEDPHkvCbbAdFfLTfA75UGgEPfEsmH3ckEAD2uVb1FA",
  "key2": "5CzHBYifarxPvyP4afHQqNw4KofSHNUUrBVkM5vMd15Z65g6y78GaRUFiieXzq94P3DG98VhmRUBDwUZJa4xDqnD",
  "key3": "5n3r95qKcsCuQZrKp9Dbt99w1ssWhf75iSYz6xYsfW5w6rh3KftUdENgRH6GC3YB8CmcuVLMCcH5ijBZJsoZCAx4",
  "key4": "26rY65djbDMW3WVKDKyDaZJWLXbm4QT2CiM9yx2tcPkoLs4oW2rSJVcGDzbSjxh15ZBc1iTCtRSYUHRTkpcB3pj2",
  "key5": "4xfysSSec4AwSBgeFckhisz3b4AFE3kji6oYynwoMFmYjqLPHw7RDmNAXY7wgKftemKfJ6RzTjtVHXXjqDmDgD7P",
  "key6": "3DqKTx2k1ZmCRsGirZC1sVjgeDQMfinLaVJAHWGLtR4a5mSoPZExs396Dg6zbhqSdCXK2LeGNBEKKyCq3WP8XVnV",
  "key7": "3Pcx9qvnKvNBm1sCFQaDmVaLonCkSepGvoLEEk6GuFnbRdyCzEtwzqUZewaXo1zvytQBZRJKv3JEFmBc2HdgD62p",
  "key8": "37BQenStwoi8DiSgBG9S7XmAK4DGt9RSN3LsLpR8s6JULyabNFQW9mxLA8SFgR2ncQVi321bAFbcbhzgwwBWXnkt",
  "key9": "295GsQfnJuSjr82TLXP14XA4aCphzUWnDMkm6EL1RzoL3PpHYCEPGAH852fbtuPA5iRVkx6HaETgJ43xoexhiauF",
  "key10": "4jHwFSy4YB1vdf44P3qPc5RtRkTzuVmsUERMPP3D51Fxnf38wpWUkkNggDofgqzrYxnyF3yfPamA8mYDsue9UCEJ",
  "key11": "3roVewUtkSdJfxP18G9diwM9JQUiLsYHcLP2f1ahH31kQDNM4eFMUuyZhj1etN2j9hToAkjJNrgKmPrR31QLviFo",
  "key12": "5h8B5JcZQbP8LTd1tGHEzFwTrPrJRrS7WnXpSRjADM7PZjx5cKW7kFPc5Ju6tGCKxwkg2WiuxwFWfKDaafygnmbj",
  "key13": "32n5n9PihR1t72z6sXh7DCBcAxsRL2xzqebEWbR4tXouJcrnrRochFgvGGY8a9fQPMXVFDFBR2PDsZHpE77GU574",
  "key14": "2SJuT9g4FQxvEcF7zdB9Anwm3fxvHaSzWDsc5GyHddByjvhGuet5vzCAjPLJu2td2QEyPgzbuvHuWdFfhjX2PULN",
  "key15": "2WZXCaqa5PAundYz3STWcvADirEV1PsZB53XzrZoh9a82kLdgrjQw9KkGoQDHJ8WGTReYfHvGnNwJueHmio4nQR7",
  "key16": "2nYUx5RpeKXzrRyP5iuLi5jNdow1myT8iajsSeeyL4mBTBqPYSPemZCj9NrByGwnTGyB3NmxnCgLVtgjKzPJTLMN",
  "key17": "3hodtT4M6HbThAvxLHSaMPU5pMQKgP7JWD947TWJsEgA41avLLN4Qh6JqFCVM7QueWQ68uB9v6CLns3QZ4W1KFnY",
  "key18": "53esNC7QHNQ7bJGngKcyrfGog4UPCJTYB8ctwZ1JjPkKDfdMNgduecysy7dtpAC7zrjyoiJWmFt3CjjXfosZQD6o",
  "key19": "2taq6vHWrcbeEgKKR4eiZHL29yzNSahCMrMJsGCTPqHdPungeWzFqZoK7QweiCVK9y7AJrDhrRNQurmsmXxjUNn7",
  "key20": "4q2SqjVBppBro2iNm5vq8DvUjttuzcDNPkM6XfZ8mmBJf55F1xR79FJbfGKAsDoboYNYRgNKAdnzPSfVEX4dDfuW",
  "key21": "3csyeJNj6NVn6VemFA2DiXCJ4gqoLhhA1WbtC6W1whhzeR67p8XSpT37c2Cym4wDzqzAuNGtAkSxJ1iyqrobJULN",
  "key22": "3SMmoGaMX9juAMbnDKcmsYPx98wtFL1TX1Ww5SuF7qYkwBTykP2h1566ThuKx4SAENN9AEAm6awe57k5iJdufNoq",
  "key23": "4Po92D9E1HfUrY6azPnAMUduab3TFhsu7kLaaLLTqPB9NcYbRgR6a53mbEsWaKD65kJLfypfnySDoKaxhPCrKbVj",
  "key24": "YNUyhdeokCMq1kGNGoaDH8Md1rZekCdZ9fBnukRorYvjRH4LYGb6FBGYVQAjmDmYao8QBMNYkX642dNKfurTfie",
  "key25": "MdYXuByTvtSssxiYatDkg9Pw1MfdeUmVMVXjaJtCXqtjS3utgtUgmdTWVDvRGyJLVyvBPUthvkxd3mZMurDCwiU",
  "key26": "quuTurLbiFotCCfBkwDeB4NonLFWFZPd65wpkmQqtBe6FiBLeTYEVoPYYnjJjenzhZnjJGtg6e4Xrc6bxq1u4yv",
  "key27": "51vW7hkZi42kPsefzrVjqTRgBfDDzr2g6wtuqyTER6wTZ8e4kpDFapaHMEqzNgNBnRUHkHEp2F3qkcBx7gKAg4Hz",
  "key28": "5nNcnsTEBUrptAzzVUEy4CvQYLV382ge6SLxiaadJb7QkA1vo5AgSBmhG2nQCAn2attnTQE234cAjoJEq8N1Sgqo",
  "key29": "2hLsp1pSEKnBYeSeckteM2u27rhovPBcDRkuEDLuAv5uJGaUP3GQ11vWFy4SvUsg4FFXH7MEX1gXFgQGFd2RFfp2",
  "key30": "3eMqySgvNP9derQz7xHYeQYDxVDQjoT3S76zoxHmGUWGzPJkEExvmFVkZMCyNeUtPDM7mgwCfZQN1A5CsS571BMS",
  "key31": "2DQZfThp9LftAFs8H2PkhhA8VQ9G4hNLf5qDhtbX2BBGv2GqMf5jwE9Y3WXJTztWBp7WTQpdmqLJpPdea9FAsEL8",
  "key32": "2NV26tAuBApdatenuvPCuU3x32YJ1o2RMxpf32FyHE7yCmmAtbqc4x7Uhyp5LG22ir9QhiTbsWhG2ZdARRhquXGW",
  "key33": "vjUydHiWaSBSryGkn1e7PVubkYxsr4WjJbbfr6AyXYDofMZtqTRNjhEqQyWHWrGzHNzFR33LgYZXUbPAPytZVNu",
  "key34": "5BYa2VNzL2qm3BmMmW21qQyapkBnUscAuM4e791eneLrG1N3uwux41Z754s237L2bdzkKvoRneS6S4r84F6vGkyg",
  "key35": "fQwYLYaxsE3gWXSCR8Q6yAmStn4J39KdRHVKCpPU1unh6o233v59E3YKBy3wkhLhWXk3v4SenX2kLx9EUbyoNz9",
  "key36": "ttMsVbtPZ53BVuXPRUCHyaaKnP5pML1qjGYDZBy4nX5J2Y6rz7qotHBRTunGgmsbeqBBoJvkin6Epc3MhSwxmbP",
  "key37": "frpyCiUdbdvpetPH5yFo4oKvd9mQhL2Vwcc9KwTCWXJSyuB6dcVBsTecaAcHBfXyDS4Re84Hwci6U9YNbenKU84",
  "key38": "4Q1P3cGN4SRc7JEztqK6ougu4dPa9B7MGhfGVpA2WfW6LvdwLFESaPuFgJkYj7uaaZSi5nS3P4Xp5Rn6cdpKRWB4",
  "key39": "52ktiWNvDbVUTckbZ65QK2TbwZiSo4mXm2AHgQjkM4SXzxGWQtu7xEtbeU9Nv9q6VNYWEcEjdPsXe1F55JGgg4rE",
  "key40": "qCpLcVr8uPZ8gBj8VsNh5DZacTgLVgGXJdnp7kKexGjJqj3EELpLQvhYzWubgEJc7hxDwYs23PEfwD1MX3fv55t",
  "key41": "4mS7WLBDvWpRuetDJZkgs8Ay4Jqr9B5iiHwzXkaRZYBxdKJwdzbTf7HXbhDsUZmePU9nggtVKedqEBygfZye3TfB",
  "key42": "4BTYKgiGmFpRLwLPMNkTWBcaKxHwXgMdLN3SmH9ETn93GJzNZmp6MAstR7r75wV2Gfb3ScdcmPQreZs8BqLe4Zij",
  "key43": "2AT6B3X7ncY9uKcQkaK91FatM7gHtsHXZAmtoSBVTzkEf6KAygYGjq9v2RTwDZuip834sbEeK8nbQickMn8Re1VY",
  "key44": "3HGPCZGscLrSn2QQ4SvqAzWxTs8F2e5LXqcpLNPUvhfHw9svAe3PF7iLTBnJZMzZ6wtWLdB8BfqwkgKdSJFzj17h",
  "key45": "2nWaubQpBYxehkDRbRFx4YA3vBoVmyPR1QNmFbtDdbdpuzcCWbAaPwMhbMQg8X6R5iZSBG4LXmrwHsq4EFz9vYgy",
  "key46": "3RB2pFy2WXJBtatoTvd8nfoXqrSY47SVTDNJU3dSWyNahhr5NbMrgRXVvPozvo6m8D9LbsZ7Hi7gvaYt8mgEzXyN",
  "key47": "5TLc5vuwavXZqcJasHrz4KH6fAusqMqnyFqrHs5i8KfvGnbqTwMEEauHQYuaPGJwwJYKpsEaw25A9FujkTWN7EVB",
  "key48": "67Nu2Yeizqi2ecBeSUhAvtDKZFZKHKjfbEio1ki5pM4HBE8zNyu1FhFAyZDGBXQNVGuCcuTsRu3hyq2HcEJHsYnU"
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
