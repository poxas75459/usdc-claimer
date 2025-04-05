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
    "5NDUBnfygGNXuenX21GmmhYLBhLASkfEd6TRkkfdEP2dwX6JQhbJAnMw5d8DJpwNvc1YiJ29KLND6LzCKEY9yg4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBSCGMoJxmC7gskbvfT2rvkvb1ShCwayfrVKw5ELBGx9eVv8dL1HvMn898Qzq4BNDDtVA9CGFMX9Mvo1U1Vg8kx",
  "key1": "ddM8Jyw6Cf2vmKA2AdRtkrWrDpm5Z7uCzCU85c5xAw8wuNWA9JLsjK4AhCret76fMHkSaNvCuvQyoEMCDwb6U7m",
  "key2": "5bVXvSuXhLKVgaSRzhcNR9YGXDDPaiUqohYFrGB7LEEFpsKksfFAEwtPG64p7nA7GKRBk36CK6xLXsj5TzmVE1so",
  "key3": "3qAj4Fd8Fw2rUBsgRmHyU7gmzQ86Y95AGEgmmtAQqXdkwXTYi8c3wrtdG4hfNjT2UrXiVJkiLkNTTbF1LLawiVpu",
  "key4": "2S7AswCzWppRKbzyvE6fsGgCEpMkKqR2faUQqfcuZzGcQnU66VXhGw61wGzXjK4zibv21nBzY6HxiKPhJjHnNscB",
  "key5": "4xKapLM6FxtE8SSwJMmtj66sBnbS876rqU3wdNQV82aezXJjbkDQBA8zUWPUJq9XyRaj8XfMFQKx58XS28yZXekv",
  "key6": "37LkgMSLLKfDXrwWtdsJtDVCtixTcMNQWbnjyLK4UR2Kvx57wCtNA5DbQyrwPhxa4HYN2jx3n59GU286mLcekDkQ",
  "key7": "2s2X7BKpV8H8jyZuNBcpeqnvKyxhtaL3oTRomAxdEZ6DUhQa1UxrDGBUDME85uM1QkoBnhZTCUjXgjz3b1XFhVLK",
  "key8": "3qyZK8Qtat3eDvDU8wUZUsU2xeKU8sS87fDAPF1YUELx4ceXuzgbe2ABRipiyaS5FnWwJrDq8F7uHpYoPeW28pKJ",
  "key9": "2wL9nvCkz66zUW4dUPFapMG99PYi9y49inPWxwDy3L8bycdxGS1iLxQvZy4HFekhSZziJNJXkwbTAkq132dbWM2y",
  "key10": "26H4ro8c3TX4uSrg1BpUfppqbfMnRRUtSY6hRP1ePksg6fKqz4nVkXAkQqiiXF6mwYH3ZWkzPQ5YQf7HVimLEBJ7",
  "key11": "4FTYYTCZMCeuPgVUbkVwp7gyb2wf65jxhfok6SZuiegCdirD3xAtwR8LBBGYqSW8hBFZboeQU5Z1WTqNdFQLzCHq",
  "key12": "5FvJs2je7sByuP16NvofT7S8iHEuUzRuwyF7tj7ce8VBmx6sHnWBEfe6tKDpwBgPd1mTMTDdxarskeg6h3UrXBCp",
  "key13": "5M3fnhkekC1J7mW1gSYrwEf4FyPVjjqqk2V7gtEAPxUd19s7LquTskR7t8GRMFVHVeGeK2k8PgGzU9vnMq5D5QiE",
  "key14": "4hz1T1verpWsifqz4zQ8mkMZq38QygqQ1h7Hp4YJkntSENLx6zDvjeXQm1NMsuFq2hgpeommMq6XzkYbZACZY1Jj",
  "key15": "32GhnexhdxPo6JJwwWYzwwAAVQroRhjmanhDtE2B8jSXqGhrVKT9jv4kDJeHS3ahpVgQKvr6R1yC5Wn1rx4gNW38",
  "key16": "QDXp2KU8UjrhWAb6vxs3bdVdSisLYk1Km8gbd3PYtv9GCGLCoU2Bdz5eHzpUabsyu3HGRw6oenCKh4kiVnn38DK",
  "key17": "4XT6JaSKzZV8DR5TSWB38tJx3bDk7QVEyj2ymY4HRR4ZaY4C6Wps9pAEvUuZbBUqCz4CVdQdid68k8oRfiJcSDLx",
  "key18": "4vaC9AYeU7uumZPdDen2mY5yya3AGakeMSv3kFAXkARgHmrHvBpdxgXzdGToFdMmxFyYK6HXvDB4oHKjPzgxpzqa",
  "key19": "3CadfuJe18i6YnkZXxZ3VUtS4pCTsZc72K7iDgiMERr9gjqRxxhWBdbc9MJZqC7nVJmQg596siw18h7uJXPAtsPS",
  "key20": "wWSgAasrJMPbbrLXPfFcPUJMXXFQoBe9psYWm2Zc9xZ2kcnDtMQxQJtqgGDq2ywDwKmBdQbfQb8yUNNwR2LL6J8",
  "key21": "3mKTsKDC5d3cGuNopV5HSLxV5TmW4SQ8Xp2jFMR5fqdzr9j3j95wUUb2r9gyyo7VhZiPHgmAntEA2qfTvabbKHT9",
  "key22": "kRxyKpfJwFdqqmXWPDLaoeZ4QwFiKuyDCKoKrJHM9EnWkPXhqBQkUQjTXZADp5YmGQ9s34baQQqp24eG2jAmG2a",
  "key23": "38QM47NjhXVWJLHYAAt9UwqRzYizFN6TXCxS5MFMWtrQjv2YTqXkedx1VKMhsfGruo1q3DjK2cz4Y6JbEkeSfTPz",
  "key24": "sQL6DmwCP4Vr8gMH7kGxwqGaTBHjXMxK5R1MaW4zqWc3vdZqy5oVnh9o1MJ2kJS6tvv5LAZV9KW678PzE5AX9ss",
  "key25": "n2PcNTL4fUeH7764XuTkNpRVDonhpTaNaFFX1GyuQMZM71YaqMDMAQUZPwbtZN2osMe7wzZfsxZzGxAQTDBBRtX",
  "key26": "WTfLJgM17vvLjD77W4JDSBpKniK8DT9Uw7r5o6W4zM2PwTopM1hyqfb4HtDAsjYNczMVnR4J22n6tATbeXaw75z",
  "key27": "31MnHB245BK9S89BKvqXnyBia81YyznH9CHdLkBXdkZrhfbeZUp6RQDTrxeQe3qjkkBp9SakJu5TU5b21KNnWUSp",
  "key28": "72PUJQ1jCKejU1pS6yrwRqtACiCHyt9pFHYr6vkct2Pjkt7M83p1X4wi4AUan1bsNgqpARAfUnBWMHLYwDUWtBA",
  "key29": "3Rypks1yb1YEK8cuUmzuZ1UNsHXXZ9T6Rp7y465hCt5z2SybYZ7Ljk2Wqp23rusA8qoa9wcDinzC9QiEL5GRKoSK",
  "key30": "4jc6n2GaxaMhiJFSPjWxEfVtbZY3vzmgwc8XTpJqbgSfKyAaK5whzTGgdodMwMZqbAo2T9VdxgmgqL8A5VMy5VQY",
  "key31": "udQWnsFNoZQBMZEUdBLMRLMRUqE8asq9ZKgqT4NUVqNnkiRiD63bYMGYKpzRrX1LWXi4G7bt47vuVnhNnNr2395",
  "key32": "JydUSzWs9ETjpyKzALkhsJkNo2ioFXBo6jV2cx6C4VaVoX8HLtkV6Kp7wkZTAB16tWWPZ3DDhiQhcjFEDpBTBVH",
  "key33": "5idTjqDQSabkEQbpj4CCTdaWNk5SurSd8isLWyhvsY66QvvBx3MCDkLPqtpbSeGkmFfUqynET4EpAYKy8WUtcmv",
  "key34": "2GRRjmQMzYDSeM1WaxHge4qfmKVioMLkFWW46Sz5tZncb98GvdRLpBmMJTvipRbGSWTJ2V5Uud1gQbAVZFL1gLxz",
  "key35": "3S6Pmd4N2UCk265BzHpPFc74kitG8mte2yPqgnavt259H3K5ZPsBwC2ugvz9egES8vH7McakbpVq9ksQ4zhqyS7k",
  "key36": "3Y4XQ4zXET21TkEgW5nqgb47mkWViTgDPcwVkHBKE3y7o1z8a7GhYMUQ4yZsVAy18nmYtDf1Q9jwLtwqUpe5EZGw"
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
