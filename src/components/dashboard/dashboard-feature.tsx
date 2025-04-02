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
    "3kQZued5AmTwKamPnQ9pnQAUPMD75dF3w2PJLzP6PjB446g8hmN4YgK7DAZ2eVueSQzy3vmAbGD8KHqz4svz8kuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZcEd2qXpnYDMMPdvRyB5nfATS7tAGtj3KpqLdHX1qxtiUYiVDohznBBpR1PzZNjZb6CYGPTc5aMfQBaKbd8Lws",
  "key1": "5ZSUGmEoQGP9SqHvKdGmwGZpP3AWa7Z54GZmAZTWcXhJTQUVg4QKntaztG8s4adkusEY1D9hbCFEjfVyMtxiGMtw",
  "key2": "2yhFic1iFvnChDxWwExEGexEhWRiZ1AoAyKtdD5jkxPasY5jHsJqTiJAUbf6os9TCErAsYVz8yLg24cCTpvt45Sa",
  "key3": "eyT2FKapi6enpczLVmBjKcK4X1bhXPipw4qDPbrq9FWtasZfNy6xpzGjH8bdtFb9BvvbW23RiDRkfMPQyvQV8JL",
  "key4": "91jzNeD2Q9zqh5o3Ny11auHn1g7Uw9rNjR9pEjyB8tw9SjrhZ8AV7ezsgmnazpZDxTevPeonbt4Nb3EtQB8CH1A",
  "key5": "3BZ8b1GXQjLFjUjrFPov5ht7fR2bHCw6anDPgBZeUDxLfs3TkGBshehniVqirFGcQtD35sq4reBS4yi426B9WTrf",
  "key6": "2dXBsnbWnxjc64BmkkuqxAFzvXpi6utn7sVRYn7KTnpu9g7e4JtRC4tnxYqYBapeoE7j8uN9jbpt5vPtJbeNZYfT",
  "key7": "4M1CE86BsodpotBt4ajKquRfUi8M6Eai286SHRU9WaSw4nfcrpqgVGhA52T2Z8L5zsTRqimeYaMAnktVevZhy3MC",
  "key8": "4eSBMnXAEfkNVmqM3ihV2i54gEN3y84VMsqyzBqFznQ5oAkATTASq2QjTBUm2vBN5QMc2HRn6dV6NEeXVdsTVNZM",
  "key9": "4LV2j54uRaGqQGJZ9jJ35CfUVEc11mCUJhfC4nHM4pLJanBbdgeAnZVe642EsP5F3AgJa2S5QoQhSYU1Yskj7z3i",
  "key10": "23Aa4ynhY31iMieNpuLXfT1T4GmU1zBGbtXtipa42XWJAxdT5yoXY9Xp9UULBseEXp2iL2vGtycevwWarZrULQoy",
  "key11": "2UQhAtoE3LaWj5VUKWWaqsZi5fTpsn3wef3NYFM4J6ZARkSB9sRujnDVgEFQ2ec5uMdoxAASTYNNmfr5wgnt8ymz",
  "key12": "3wrGr9krVpBYaqegrb7mP3KfJWk6Aok6TrVp6dybVPfWRWvcwhFUzcAeQexk6AUgfdvYF456zASSo6xJUnhcE6dr",
  "key13": "5h2yHewpcsadqtgBr81ECzE7VzupqdERhYRnRsL1jNn1NZL2taeP9BnP5H2vdjQci4bSqYdNchCTFGVFKWDiFv2F",
  "key14": "5sDSaJYiLUFJC9bEy2K3qyoSTxw4cSBNAUi2ca1PMToWJEN1wjKH9C2bT9uk6Pu2KCkVxy14CcS5riRj7ZgfnNgo",
  "key15": "kp6gepqwgNntScd8bx9wfDsvLjmxppt4EdMEqngYPAg1RoS3AAVkLk7Vqc7H4nHfTYDRsvHLQDMgHVA9nUusVMP",
  "key16": "3yhQL66RL9xsnWhv1eS8N9Z89hVMAiLRsDVkvn8wgJYWRJCrYWfQykWZ7CsmzFLD2swLcAceL4tkcvfNJnM37m3C",
  "key17": "5XT66po6omhNtwBywLUUqKNipcYSv71q8ujaMaUUfFeYiu2uyGhVvob3XCUv6sNvR46ksxEbp79fsjBp2Q4yYYvB",
  "key18": "4squgRNuiVLQWkipSwZZBER7YYr8wPFXwhYxaz3zGx2PEbQE7ctQHbwwy7KdzhLjX2b76sBqD2Uwj6Gn63ZTZesN",
  "key19": "5os3Q8TZMEJM9r4BWxCaSEECe2UwiLA77rbjKhriv6r5DaE6Ehg1vSQrvcTSgcJCa2vQFmduGyNexnKwaKoSgaXu",
  "key20": "4aDSs71kejS9t8W1tK8c7NKfN5zEwDTGkietmA6vYvq6VMjJMvEWTPta6zrHGDmvFopD9Jz1J5LdzcuBTcYDGQ9k",
  "key21": "5KD67GjrGWp2pUgSGQyyyRogco9v9w4U7CdfNH645fCJY4dHAmyrEjoqioSse1XyKZKafo3PX2trecjvRuXv8dEH",
  "key22": "Md9qcf5pMwaLFricCeMgNL6Wh8P7oihm9NJriFhBFjfkf1QfSnwLrNnUwtCUS5HErhyKFsk9keTVSPPUaLakB7S",
  "key23": "5nQ28wtfS3LvGz326bF824d3F32fXbGL1PCBggBDsrwquj2aT7VL95EcSsFyciDtvG9BNkN2x7DkNGNkM8fHgS9H",
  "key24": "4Jz11AU8HEk4vqVqHuhKVpAvKyFaufkbwSFfr3kr7Mu8U8u9N4fn25fMgBu8vZ3xtpR1AfL1PsSdQ642J4PKGVQi",
  "key25": "SztH4ERG7JHyCzHpBxy26hztekuQ87U9XK6xEnkXTvia9gyrzcyDKSAA8edybKaJEYR2gGUBQfCRZJGAJHHFLS8",
  "key26": "mHMH6zWuLZdx5gT8WGKSnLH1sJpqZtwfPqj9tcHNbK1N9MQ3MzjHfMXuiKpGWaQihSBMJpmK2JvanYHSN7maxpE",
  "key27": "cJme1FBkkYyjDkH94Qn5dtvGE53frRvg4YYzssyBRYxS2YPM9iz3PoShZDJrxZMRxsQRx3FVtLBgGyTLrM1CrRN",
  "key28": "46ECakSexG7gKZpgBRzSSG6H2wzx74AybdXYn3RWfVHgRMYvL5hxj6vkvcF9wnoqx1EiHzPgryyxyngXjPP5tK6S",
  "key29": "5DLkGwy7E2srKhjafvak5nz2eAkm5MRNyLb9cvcV7eauw5fQ2NVnCcQtt9EVi7vxoiPYX1moRN4HKZmu44nPhQGS",
  "key30": "2FLeXC14waFXTJJ8ZojDQUmjQXhZsgdE3sVGFfeKFEWMRvoyPrwcvvyMp4YHdXUMfdUuW4PQsNHjyYEpyAuMSo73",
  "key31": "jEjHfaxQKkSMhxBfjvfELsvKafNuhZrXSi9QoHJqaRfVz8d9XARXYfVMQ6VtnZQDaCVprZMuEbEins9XdP8TRtc",
  "key32": "2eWtak3jUgNhfHCMJBEK9pT8sEENpwwh7vBR4TfMVdMzkRNtxa6XveFk7aGX2a3m5kYP5uSGrkmgqzMaYv7Pi4G1",
  "key33": "3CnDauLQ2ZuNcGoFNEcusww3RqQw6CJYHHH95GtzFsLsJVhf6Lw1zfwRrSSC3iwHEAwqmAPAq45C5axnTrwMSTt5",
  "key34": "25mciTJGfq8wAVb78aYn5cxt9tQLECD1qGzZEffzd4dyhbPJ6QQ3vtQc1EFjjhndE7XzV4G1xt5LhmA54svNwt7N"
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
