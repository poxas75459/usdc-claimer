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
    "2wUQHjWhXoxfLAQ98kYwWdA1uouPxMCj4bj8qy4VGiUWXr3C9uYS2ZCCCaJfsbBs7Gxq51v1DNwzFkzsHNRFq81h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zc2zXBWcn77WRbZT6GaEWcfjrvNuAqx2abpRn8KPzh6EhF4wRgwdNdVUDChbZ1rTEPbiHAMJGJtWsLodEcZt71k",
  "key1": "U5wMgrFqQsYZcXkb4AB8DVB1a2A1hWX2n1T3ex1psKcy6vqyKEcM6YT8FwW54dKTKFTm4WMKiDXuLoXGpBRZCff",
  "key2": "2tJYtor1yuZy9B7sQGSGT7FGipeEdy6wYSizoU6wpcVSdvpEiNFXKo1mSKj9sRPPXpBJxiHe1WHvxeGeVb9kPyWt",
  "key3": "58nx8xAqRqvfHYSkjGEXmNswgoG59we2zUqa28kzdhWEFnZFCY1674qpTrnKjBmxWKaNKhKofHAV9tTzgSVvqvpY",
  "key4": "2hAks1E7hcTk9NSRcXHd8BB95bV6GwkByYQXwm78y9SSd96bJ1b49upfLD7K4D7jknBHdHEHWb73t3Fdm5eFTeRY",
  "key5": "4CYxgeehcTh1g57aKLtGXSzzC8dWMwedQSYE7mh8WmxKHJUA2iAf5b8WvdgBKAqtDWeqCju2Th6f475j8cRgeiUr",
  "key6": "3TYkGQYxTXmHHDAR6jKu5coiNGA9kDJrKKJCHTWodV2F3DCvtVy5Ps3DSZZsvzxRqUz7juGHY9UFB1ZPfN8nzYt2",
  "key7": "3Z68JZ3wrabKnqtCUtUL4pNtAZNWdz89UKoG6r4biVdG3R9LV1ZYSApZitEqHpFLTCCgkQ6WS3xtQSV4qusDtk1S",
  "key8": "4LvK9ydAQ5SJphnBQVewNYEXffqFjm6Z2JbiHJWoNcWnRPoPM3rCUuDxSSWrRvUb4y7NQFb9RkJEGEWGGvreQ3Kp",
  "key9": "5DgU853iHXXWUK98r3qKBq8rhLfzZmnogNHsPUdH1vRp26SgYjSdfL6AyG1mbqQHABqvH9fJ9vBRwkvkmswdmrnn",
  "key10": "22aQUrgfXg4C1pcfi2hi8rkuv2iEv4a4JSq15AfsAY2DxkYRYbwWQSuNegeK2xLeEicZaxoWSMWjoyYA5Qw4t6vu",
  "key11": "34CSBD44FChW8qocprMQQB2Niw2XdNxUgSbAXvyDQvTQ7Ydj7yfFaY2pcWDV52nwnhpGDSkfS5cHCaTwzVijFyAG",
  "key12": "3iPB4UjoNu1J59XeEDXQzuXn6MP84mnK5BuMqr3ESWRenENKsBjCAkBkuMSKxTjmSrnmX5ZR7Hv4zZhidztqZEcH",
  "key13": "3NbKDBpeajGYbch7qR9BLtSpLjno4f9SEqdTcT9gvwQcGymexpAkKoA7FnEn7JPJh3ih9z2qg62JTsHgAke3ZF9a",
  "key14": "i6UD572NGKBVuNsWem5TBUES2rZpRVgDXqCr56npawT7fiFPgWRAZTpYQRyka8tkjvFC1w5PW7mZSq5Xyo8gVok",
  "key15": "3iLiU19LujSkKVpZuw5wrFooaThQQUbgd6LAQoY2DQS8VpQmMpJnuBjAYKdRX5DAKsee4jLcqwKqAys9E4kXroGJ",
  "key16": "4PhRdgKqYJ1pmTbe6WuBaGxbRXJoVvJYyE9bQw6t1g9Xh4bLJKdqkuzk9r53GzNt8Tjv8CbTZwNjSWoAUN58Lsug",
  "key17": "48fKivvfhdB9vrxZ4TztTtBu2eAEpCY4GWbyQTcw2n71X5osXhvhWipAdo8DhYZabWfBXML1bjzyVv5Rwn7JiXMg",
  "key18": "5eN4MP41cZVMFniXQELN577AyERiRepmgJ4wLpwSNLegijEENhp3GrmgYtGH7dqtfoamw6o1koo6zzMgCr9k8A1K",
  "key19": "2ButhPYYccifCuPe9D2TwhPgYc4Gou6RK1k2JMBgMftJ4NsaTZUSvUKjUE1mXDtCswDRDiL5czB8tF9yppzKrFbL",
  "key20": "3YK4NGBiBsmf7kog7uha38fMjkQRyvqEJaP53SRP9cJXkiZnNqsYTCidz3PoiWTxA86JfeXgMPWnNDLXfA8o2fNa",
  "key21": "5tM8LzbMyqWRUzXXKhrUDLzZrQfzgWnmHx4io4WkMb6Smox7nTNBmt2VocDZBZXP6Ph5KkRRbfcFvvmWHpzxQ8XA",
  "key22": "2ckTujpSqSgqXGyqm9pv8aaNWozVEfAgXXDaQubqqysAULFNcDLBaChnRxFAQzmKSQNhefYsHfi3YDxs2CFzXh5x",
  "key23": "2A6anuVFt1zkNgAKZighF6YfXb5yYB9pU6LoffUZF8KvMvGqSgQitvLUrLPJdA7YGf4JMxrs7Mj7w7M6PnyyBdHM",
  "key24": "3ezmxmSi1Yrik5eibVtikBFn8UUs8MJwg9uPn359V8GJmK6Vga1CxNjVwnxxuCHKYCv3ucpuypSRR9fhcRH4wc6M",
  "key25": "2aMURr86a5PSGpdcN8zAGpzwvgKprn3hEhVWhi7ZPiDKV47962hqZpAYGtxCiHMeBiygcckeEkkVTczm9vPc4U5b",
  "key26": "4kbwMt1z6r1uHP5Sfp2LBLWxDdgmPCeZBowHwFUtmgZgEuTo2f6DJeqnf4hBA2fGZfNEeuURoftDv4GNFp8Budvs",
  "key27": "4Wanv4iDghKcLL6VJnuipPUhrpcZN7toW8iCaH1Kzqs711sd7TpmshAhZkCuaEyHmnxRfDHMmvBu1U36KGNr8SVA",
  "key28": "5ePptkNNQAbUQTTUVzZPJgqZkqYSveaWEbNefLoPX1Tamvpbfkyj7rov4Q9rfvfHqkeaBp7dpHTXRdaM9i1DF5Q9",
  "key29": "5gUQLwG8T78m8pE8oktDKrHxBmqqKzahRujdVFSNqVnTt5yZXdtfhHbmdGuqfLx3neXTHSCmWBp7RQFYYd2FPa2i",
  "key30": "iaBa2UQkpKaadJsB3odbakdyjAgzkw7uD9qhTMkbZVLTdEBw6kAc1vZHCUgNySfC3UrGR2rE3ipyUi57a3vMmsP",
  "key31": "5pMThMeg3jUEn3zkMjmVhxEvR2tZJjekFhREJUMshB7UCQqZwGExaUcfk2eBkSr8YNVnXRfBrtCnBiHGwhbsdFFj",
  "key32": "CZCFGU83yg6EekTGkHK7QEa3rwo3UsG8d2YtiWrRputPrFDUK1CMhmtjxvWMt5DthGQgLMpFedGZ2Gr9KRDRQvj",
  "key33": "TMx2GBU37GJX3irvZJmYfTv8dL7w4azGS6m1nRjQLuQSnBX3aTHBd4t6RSNRK6C7rLFs6QGtohi8Bf16oec6fdC",
  "key34": "4qs7bEsUwwaTMwMvM6RWuRtosNWEkMvgbwcbXpoWkvmdBHYNtSp2euip9zPxRT9ASqicyB4XHpoCZgq3tXBmC5G3",
  "key35": "JDHarEv4pHZ1P4gAbkVNeXh1RYYWKKr6xhbGUBTxKoNJmMxBAMeZERZZ9fgcpzub9647P86LrSeoJ5zFRvKAkU8",
  "key36": "4SEumKVyh5esTF1SBb2etMh4BY2xvAETsK1DrbvozNdyryGFks6SwDuVpkNhWN4wxgHWhwBNuZ5B9FCmkDydgtHX",
  "key37": "3LvpSBQXMHZUw7mADqVtcPNgwTQwqNmmAi4XRfsKKagx9wtjfjcybJnQsxvniqmQBPohQhqz1WgXNAogRZYbsn5D",
  "key38": "2fCNRtmn5y6DDenSiLtErvbKh1vjhtJznsGLkDWYHPjxHRFEeCVP5HDgUmMR6xZ2xb3x87EvkNtpn9mpNjJwrtTq",
  "key39": "HaDJUzrWMA5Zi4Rp7fsCkBUzHvTiqmapBS6S3mr2LdXi1hyDNLd6jLzkb4kZcYyvXDyJ5NDZzvHYvCr8U1kpCkD",
  "key40": "2jhs258C4SvBZGBJiRuFHoGU4GLAq3UveszTLiAPx4RBLMA4k6R8zZqLn63pnRYbxF1mBviPSW4wzcqetYkqMWVi",
  "key41": "2RVFHxjukxvwEsqXQ5T8HCzQ1FA2jrFasqT2G72tCUhn3BFw4rsbvmJfHfbW3ywH8WqQYN424Z5cACpBdxKRU49A",
  "key42": "3HRnLYR7shukQ72bY97RWCMG8PcZc8BZBPp18BduCaw48wBmEqb4P9sVv5XPyM3DeBamSZf7E5rcaHZc41RXWNmk",
  "key43": "3KXjXyP9rgVx2pKZQ6DUh4jzCBkDoxSqMewm58XQzRNT1S54wXACoa2zSCSNm9rpMS9P3rWgBbugXa8Gcid2k1rk",
  "key44": "46qHhe7DfswTdZqTxkdoAGhmeuAxmKcpiCYtrwezL5sCj34K5yFWzGB1H3spmXNKRfdAsW2JCqeEpj3fJd8Fg9qf",
  "key45": "3ByuEdiCSfKQw83U52JuA4jEUedf74prC6wE16ENtJ8TFBsXdX73iABvpg5SiziAnUfQbbjBuPoQCK5gLkWeyKHh"
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
