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
    "5u9mTHrBoAUN2oTS6gG6GTiZQFytgiNKv56z5gJHfonaaNMYxXe1fhbaAZzrj5YPKedVJuehWu2jFkwneayac4jZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24prjTgjhrGxSRNoKYqToHxVCWkS9ahuCJ2B9Wf4ek3fNSc1rakmnKK1GEUeTQGjr2BYWNjQWtppRroqpytQQd8m",
  "key1": "2Rp7F66QyM2tAze7bPUk7eWpgR3YZfKEAP3yA8i1PSFpPJ8QJugsnY2afc4gvgZqEJwEpKcnsSxBC3m9HAAnFX8t",
  "key2": "5zmN6y9jDgWtY63q31G7qjwoajvnmPDFykWqxnLCG4WkouFKdSHgJaV2yaLsbUbQGS9BWoLNnQ3opNC9eC4kDwv3",
  "key3": "KicRLU3FaDEFXUfYQXHUKYfTBuVEjSavmfprEEYmnYndeWpU7Y8pnFZH4L82JruqSbmXD6KPyB1qtERZqWxaq9J",
  "key4": "cvGqgggMwrG92uHE3a97GA6A9bHz8y86KNjAVnPTJ8fKJW4RKRxuteEjmxawVtfRZxKEF57MTF4ZAMdC4mVd6Bu",
  "key5": "reTqAPrGvGYLK1H1AbBT1L3gY2pEvTcR3hwTbE6WNeFqVzcSnEiztxRD9roBckoREKaFf1k4PeoH4UeL9kmdKc2",
  "key6": "4FYEgfzGQ1Kkdjzryjw4h8F3rR9WobdquT7AbuRdp1gYhCe4eXUv9u2HwJjDbGsvMHR6xBmWYgc89Ev2Qb3RMud8",
  "key7": "55u2UhKtqixb9qiU4DjuVqfSLVASxtwmLQ3VybMRCZscSsKMeWwrM1NFrWf6RjemJPGduZ7T2CqwRRPYhXNaCPwU",
  "key8": "3TCYEDXgqLRaFqc9xYQJ8f4pAZRBLHf7USPqaPM2BuGK8cEkFhEVdccsvG8NDyyHaiGfSkhH9W3EEpGq3ugxGAHC",
  "key9": "2ABioBqP9t3UuweppPbDg7fx4nmsvLn88ggpE6A46peEEmiLm42CZPt7bG6Rm2cjiMzJ5Ms5kCC6w9kMYD5dKv5Y",
  "key10": "zXiiTttY48cKUmW9Z8Y1E9vgnWkWKwYa1kjXaSy57B2UrhgADdbQ8mPNfqGs8hozXvMXv2g3WeRj8XHiVBJ8xx5",
  "key11": "5x5NXk9hqE3bG72uLZXQ54nYd7EiuBsSUwQXhbF1aaxkeBaZsRtCwEPkKAECzqLgbduy9peg52wwcK7bUuYwPXwS",
  "key12": "3fkAkNLFjtsg7XDcmrMwLHviCQzF4YBpYESdzdZXwU3PmpePZ9cDJJL3sWMen9Ga6RwSWyacrHKgp3Rkjk8ArZew",
  "key13": "5bF54U6hmsgmc45r72ptAnZtpjqqhhZ8htybDkK9ie5dvhA34c3YrsTQnkhZuSKmBEGi6zHBvuHyDrzNaRdvedX4",
  "key14": "tWCq6irxi3H7pAf9Euhpsw74jKGgNXfwsNFtspnT4Dhiqg6Up2VD1QeNxCKjTtTaehE1BpG6WrBor31KLuZT95k",
  "key15": "6hqNR31MBj6GPTSW46iJkE7EuMwfXK2NKJPaCR2p4PoJzWhREySkgXPEU5wnNKntBRFdQR4TYFqooVLEiBwcpXN",
  "key16": "225inUG9DgcQ6vvzs6jPKGVMQUBtvoaQgQHw95rxYNwMbDXU2N3wnfVe9GhwnLdTPpeYgSaHysq6EeQCzFtgQtet",
  "key17": "5weYYTei8S2U2GyimVET4dhJFUV5BxA833QSYJEMMZUBUfTbatawAHSNPgAYqKKWcYHzJt5Bwgawbiyd7zMnq2kG",
  "key18": "5ZZPcrfBUgjx48SjJbhAz3m5Jayc9brBPdy5XqErRsfFKS4tLneZXWrq5H31fFcZ2fS2BWs3M4s8ukjF74C3zWDV",
  "key19": "3R9Yysc4UaGp8bnXXDvCQSM5XpSkbtuNWksomH9kHcSpfeww1eS3ZWYkaJ3uLkru2L3DfpUAj7E8uL5JNLS9QH7h",
  "key20": "5UvJWAV5e4hHY712XTc5Qgt1VYiNRi8EkE3f84EfzRnAX8A1XYgy6Yif7xtT7o1TB2bqxR3XmaufcbwHnwmyEo3i",
  "key21": "5kZg2a8nz5Tc4KvMBvgCEzry8Kpzv1T2pMm3kzuDX34Zi4AUN9SmzLWLBEmhvpMwaiJBcQWky3WUJk3B5gkYjrBR",
  "key22": "2DRGaz1Q6wKoaQaTFscqTcGskK5TKSZekdQ3Re7VrAS8SWQJoqHRQPznSpY5dTJ2E1ubiWGcpSZvaufCSrkyJ6ME",
  "key23": "27NkGx8KeHwYfj3ZzQH5BPX3Z8HP8rStmSP4MPzGHWqkMJiVUTBxpYTPJ9myNZk9SiTEYKykyQMZnsQhjttSx4Re",
  "key24": "5mZto4z9ydkyqHccojcXqZyj447VRg2PMzCFCEkSH3ChbDZnjHtscATZ8U2vR6S5nZZMFYNnFVb45mvGfoL92vMA",
  "key25": "4qQuicf2K8CQY3w8s2fwFKSzBdqPHx8kjb7Xm6p2pDjTosV8y1EKw5U3PGyxfBNeLBtLKcdYiMuPWfge9nJqKwiW",
  "key26": "4uNRa5kw4MPjDPkyUCVTcFRtogr2BKP5mR1nonHvTHKGDjDZjQ5GYBh5cSR5LWrm7DSsYGEr312S1o7YAnJZpunk",
  "key27": "21KV7jtByg3FHtNRNuC3jTqfT6vds47yGvMQcs8Wm8dpq7cfwFPjjxVTcGGxEbSb8qA2FoPDPqvimH1DbDaFFEmf",
  "key28": "1xGuJq3p8LHqexsBywFigDv3cTidiKEqZuFqupeSkzW1gpxc6nVhQZfXk8YjJBmPxsDfjYsfDHVdfx9VHPz7A8Q",
  "key29": "2Mq3YunhPyooT1waudiErCtoHY4dNuoAG8dFGooCBo3MKuL4nPPKCe8XvVZzXRCUD4ARN5SRuS1Ur21xtttVrm3z",
  "key30": "5gLuQ7NctQyDz9hfnpSZYNGUXJaGUMGSDtfG4zrthqWTdh2pb1EcKgA2XmZwaoDiyPD1XRZ2dD5wk8TPjhzm9vaG",
  "key31": "3u68WkiTA8qf9Cr76by7dGS7gQqaYaMyWxdUyXHTBLhwtskf6aS1Dg4CcPRtfbKd32HgAV1AxTf9pDBwLwQa64ne",
  "key32": "2mD1BbD2CWRw62PGPqnNdg58pcKCxTjRRtBtu4EY9UK3e9VypJEvMnUg3i7MoLGy2MFtQdUdMByyLNEVhQ8WRokW",
  "key33": "2usPNKpt3LxvqMNAEAVzLXuymeWYNxmdoBaa95kEaRpyKebAdXTSjuRJYLbqLnBZrXeobZ7NAogeKo3BfRHFdKd2",
  "key34": "AymuhCXPN5bwSZYXgqp4sMHm7S7kACQdfjw1nukp4KAgUWevRmF6NBFLDrFna7RhBRfoBgLFZhU22Kdz1qVcAWZ",
  "key35": "25RjmDY2bg6f6qYbsLSc3H7AftUWgFZ73Kj1ZhxtzwPiRmMN3Cjw8Uw8Nkyw5wepGHK9ujyPfiPgkmbCM1yPmBLK",
  "key36": "vXwunbB7udYrsw9jbZeLv7oWQACc9AeikUDfPNMNbD3EKJZHkqU4JECMZHzj1UpkAyB5WNFxK6iYJW9hyGxFxr8",
  "key37": "4GHDs5pt8D6S6TPQw36e6fjkeWxYktXpuLLvorn6J6rwxqqU2rZs4txh9bz586fRGGAMxn5DVdQNuGxrfVhoHxy3",
  "key38": "3XjoyewUUpVSrFx7cUtrAPAg1FBi2H2BQw4Z5Z4Az8Kt5vDMKyM2Gbb4NAHXBTjntFtBdnXweikrHX8HZg9BTUPX",
  "key39": "4JjuqJdKTy2uvnRLkRAft3bqp3QAXHNL6d3UMaJ26rdro4qu7tnF7MMSvJ8YgD9eawox97QgnJdzBN1GeysRygkN",
  "key40": "5s1GgzyMWgykMX3dX3Zb1ePQxBREVtJeVRXRRyx2Gzgu4Q5dPaqbvJ8FPephNQ1pmgLSVa3ykq1cTwJGio8So8XW",
  "key41": "CwecH7L3ue7VGjvK4A3pB319dCzMf1M7LwN3zVsVzbbJ26zvKuJ6hjV7oe9h6UuF2gaK8xwkxoSyvo3oQPnZ6sT",
  "key42": "2ZZmXb1eKtYRLuh3Agp99CqcjsbEmcs4Sp8vuKSACTbd1T9Rs7Cxz96umkDiL3ARSWBTEUDUAiP9FSrZwfX1HNKw",
  "key43": "koccYNeQB9jZnLitffUEWdDeFfoDLyMFPhN3nU7pcMYFESmyuWoT6m7ffE4Vcj4MACa3pyWnkYU5WVYuaA2KwCE",
  "key44": "2EdKSvy4Lfh3h4TE4AW1ZwtnxpxNq6MPKqjBY3uhc4ArBBioEHZgDA7tD7sJuR4zHesHZwEyVfSyA4HXtWsYgPak"
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
