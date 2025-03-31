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
    "5qf8DG2kTadkyKLYMRPRQMBX3QAzSx1ZiCLefycTCPWzRJ891Fy8bySBfFDs8TtyRAYfAkSA2dmkJobpefn8tdKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zrKb8mUvLL1GqZpAWMymEHX3P6nFrR7sZ8A7wCZsevT86FoidbhMJwX933K5UYcvfZyeNU5fEy9674TcxWE9uxn",
  "key1": "3jxJRnWuvVwd7nurJF5oHYhpBQoKfmR5crbkFCX6wLkrNhX5SynAsknerSjhGquSyGXevGy2kAw7vk6rwX6AaHE8",
  "key2": "42RLVKAGXDDUh8J12MSoruJsp6LNnXvi5vxgpgHWRXxH64wrfsvMd2nkNY18XvvnYeJcdTRsVa3KAsH5cwJewiXk",
  "key3": "5wHnpnaz2mNkGaZcBRxXuwTYW9kFwVziFLMqE9rdvxPiJgPbFVdg9s45Er5WR6GjGEepFffeFFFfhg5TpRzSQ2s4",
  "key4": "4gVGjxFA1xbLB3CpjGib7jLNoZUy7kLRXC1WfkbZhgayXzoUcPFL4wKNQxz28p6MrMTrvwyhfFzvxVvAvDjk6LVf",
  "key5": "5xiFFF9dcXATjsEA8REEs4NuDXW7PceWMVBFSMfzTjEiuXGQfx9ndg9Z64M487E2H4Dn1LMQifJBga84Gs6bGxsP",
  "key6": "jtvmaNNrDkEUumebB5DXLtkghamS67BxE4YGVsC6gbNoewSmtcFxpJGsF8VvyYsq3gD1PxMoVj5G1bgeESFY3dQ",
  "key7": "2AysDkA2ih2Z3Gf8Rdbb1PAZ3y4eULSVzw3jSGeFhthsPhZAqh7WCRqHK27nPXhhUECdmgWVA3Z2FNXzx31xmpF3",
  "key8": "5tWLzWjmwcxYHCSWX7TMqJvZbZ6gJ7myymHYAQBTsGDsVcmadbLDPz5vCkYjyg2k8E8CpAjyEq7gy6H5LWuWwENP",
  "key9": "4DJfHAr42CkueZ81x2qxrRGt3HVmD8iMeADgywvbhU6QZDgCbGUtTY79TtTm7yBkgAEKd7aTJuGFqZhPHuq6ACik",
  "key10": "2yaoAvBPjVzAFPR3yZHR6HRbR3ZSuA1WLJ5i3qmpwFGdPdNfHGmRwrsDrmihGEKKay6HaD83qo9jeXTwRz7kVD1H",
  "key11": "2GP4MYD1SBWq3zMnBaJFUgUSUDLwfADENpBtaM8jjWPrGM51F8ie4rqPmrknEB8UT1fMULetpXnjgmsgVNQRQA77",
  "key12": "v3T33af9vCcHy7X4S15sR5NwbAT3M4UuzFQM66Ne4swAK8tYsLgwRfsgygSZD2Vpp45sfKgDhC1fMerz8VShPxf",
  "key13": "4RHUta7cv5i2JbQmXCPTrhrKQ4e67uUS37LFKgMarkMMFgXNyKZmGNeC96Zp1L8mPeFmd2JLXoHfBmSn9rNTqYka",
  "key14": "3SseXFDhXaHeNvayWfjtuFDGczEZMC8Nzao4mKxx8CeaRHEkfPmbVPwLuVoTZ37DVbDQBy5izAaCXyZHJRJhPiVs",
  "key15": "61Vs53Q7bssksCcwQruTgki7nTzufxjzd34UqihbApRhttR82zCfRMjUi9T2XCtieg6EG6Aw1dNLMRM1umvGkTeJ",
  "key16": "3xvqHWTNqbVv49gYSgeW33sScXqi68HpuA43cYjs49RcVTVLSot6uYWHxCnrbGJYbxh6U33PHrPuTjYyu7vyamjt",
  "key17": "5HHrLak8nLCrmUMCwcPK968ALu2PYXb1gga5odjuZxYLSm3LcYx8bwE9hfmNPtezBLsde56V2Puzg5KJRstgxikn",
  "key18": "4ViW4qcQmfwmCS9AYfubsmRP5JMbCNg6im6jSYiSgefJS5BDN2DscaAzMUhntBE4pAj5nP3oqrKtg3Qyj9gctpzg",
  "key19": "2vbsijaCVFdJfPjgZ4aWB83cjvjBKrGtKbRDyFGvHpZzrbfNPSBbWhP49bz9xwoAdqdqCD5Yfzdvg1UrvthCcBZF",
  "key20": "5PQbachX5B3HVeFnPBt13KQGR3tm3kjZEZAkdEJscPKAzcpYwXYHFkfSfwh4V7C4hRCkJwSzpz5WMkJj8gnYK8Sq",
  "key21": "3wRQN8Z2S1eKwnbNnJhK6TmVjtzpeWtbCERmhRsyKEUuY714pmDWe2g4Sk7WLjG85qQS5JqyDRoYeypxoBgmT7u6",
  "key22": "4GX6oGzBAUJoBo5Xt8mSENAe4jJfZeypdbq7QB7tZeewbpHJeH5TnSb3YVySkzntAjwaeeJrUo2HCKRDpM6s6Jva",
  "key23": "5w1EudLNnyYb7HuUncZpTTYWi6SbcK8MqaCiReX5m4V4Vw9mjwwjqNF1oQ8yoYLAFUbWtoNbYBckhZSsiydyxpcS",
  "key24": "5mWwd2pCBnHyofVzTxJCBvq9nmkw8JCCvoAjVDhKnq2J5rtzvKCnfXa3q15X5PpFH9yRXNeP4cdTmZEHw8CWavp7",
  "key25": "Zmp9hCy8aFxyVXaqcpzeZ5KSS8qrLSYn37exUgSm3GoQw54KjD7NtwWQdRchGiMLt2xa9nuGrGiEacUJyCMTrjz",
  "key26": "48gJU4HTD5qoqnfmHLnEZ4vhxJdUXBDKTYGbUXsvM9j71b89tHtfG7hQ7YZ6LQTRwbPzKafTxNyqQQf6qp1SogpV",
  "key27": "3KbfP6NWxJ8C4S3zT9xGRiM4PZ9yaQC5wgfjWWGZBuHBghKqvRD5BETQaQvnA3tCY2tkXnoDgDw52ahGbdspPENB",
  "key28": "56TMrq4dweF6Mp7F2CHykEK1GuyQPDzGNtKCpyfeKt8QyZN6y9h8KxgarDR4HtBiQeEgNm6wJjfcctzqPm8rGr32",
  "key29": "5dYjZ8oMon6oMQJSnJXGSsNoq8fpFQrXoMpHYqvKArPoJKZFuCko6ew2wQeQtYVUzH2sa44F4AhMfv8FxcKuEgcX",
  "key30": "4QUNZ5UQUcxUrLA33sJ6sQv7Hd3opztoGaAtbST2DQCD2SLGTPHyJJzhz47TipCe86KrwPTJ4YeKvnsyQ29ANQiL",
  "key31": "5W1qurB41797qkT2rQHNpf3BvFjeJAH6M3BZshhhBYeERNftsoo4BRTQydvooy85vL3PTrp9ycFupZD3vR2fvU2x",
  "key32": "dJievBHxjQV3MdbureBvuCLY3NHHfGUCinkeQ1M43hG7EpTX5oeRsKgCoskAPvWk62YpVoRQZxXKUsPwouar9C3",
  "key33": "2tLu6D4a62k3UpYUtL7vy8mo1yUraK72UKr1avT1Ghsy8MbyK3DRDzGvX34Bn9HReVpSfW6a9KjXh8PHumzWuE6W",
  "key34": "5ZwwKE2e2h3ov4Eyf4c1ZkTm9cy5QfaqDsmeXVQQ6pdMUFUjGB1fH7SizRVakivsEGxnN8Ed7nmo3zW4fd5KzJBY",
  "key35": "4Zuj41xLxukNERL7kVspfT1nSYwWwmcNU97dbWsg1M1VE1pge5MsQqViEY4PD1AB91SDGMiHqqv8MSZFPpQqFTxn",
  "key36": "5kP9czvi53Dp3XeseZfLqjLsTuiPFimE4VH1H84LgbeFcW7qCoGPn5Fkb8wFVRRe8CoNQsn49iGA2afDiWy62wgf",
  "key37": "3GgLKjccw4D14xfYv4H4d6Q1uyUhTiA8gTgdHR6kRDJXMa1MMvqhCW9iuNzUATiwvhVKUKceehrtYim7p3qaP1i3"
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
