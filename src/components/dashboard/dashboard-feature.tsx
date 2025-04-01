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
    "67PBhK2N1Do3s8dSYPY7Xe2XZrZ3LgbU2rJf3t8aaohe5U7jFbQ7677QeGpDXri3F1P4VqjVuz6CvZcHvHW2PhHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWwvmctHYg85TmVeBVma4fkLJ9bXvgP5d5TgbFGowvGDHhQKbK65g94cxwyBHqJc27JVQSEKCBZS6X9CT35oWCS",
  "key1": "2kmeavy2nmFyxwpCPSTRZPaYb4NgkHHfR2qZUpVXzzPq7J7hDJQdw3aC2LHZPj2cXtKDqbJryu4gyrbTANsxchf8",
  "key2": "3sbzyitrwDJk1F5bMcBhn7irq2fZUgKNwdTfzwJkjFR4wFLs7D32R1CJrPSBg3dAULnEt5cYwzG16nrbfKv5dPBh",
  "key3": "3wJV7e3hnRqptdBs8EW3uxEgpavvhjStnUCKeFq5QmVEQcmGMBPL2haoqDzzVZ5bgiYqVxpWU8mEvCP3CYGKHUwc",
  "key4": "poVekENjuiPDkbop6nrxVScCNza3mU9MDReygy7GPLNAR1ecZepx6wBJgVDC4MvB1KRLCwypHc1Vr2EagUpeWkr",
  "key5": "4AfSvrh2YW942oBDFsFWJjhPduBTQjUPCezYmaKPq7q2JDSgPw3aR5C6JwhALXbFfqUP433C2ez5R53Bh4f4Hu37",
  "key6": "61KXHPnrf3Ekzwu6RnKaq1xPPptbTtmZXg5xRBrbqskMtGxwuedGTg9YaH5xaNVCLk4BWyxwAuUbPHDDvYf9445U",
  "key7": "GQAcz6MNfYXag9rHH5qjJQK8JgwuU2caynQUPBnq3C5HznQKQD8ZqnV92GqdVkQE7oaAapKFMS3vwHxb7Nc1BUu",
  "key8": "2J7xd9tCWjyCQBpXgGAYYrGwHNhrQzoSwfymgc1TWq6a3GyVFHdCV3tZxxkSyk9D7ofWsfBjonWY6z6wjDMn4qL",
  "key9": "5ck8U4g1t2KT84h65eeAEmUTQHipDv5aVue6haAzEFNscmb4NeCoDVcd9CZxHmyjX1vAjvdHdTeAu4dHvjXqFCH2",
  "key10": "3xfs58wYMLyzvv21vg6MWqK4shS6jR4N2ZzS4s34CUyBMsofdysnb7Nn188ifYXfNe4E58jXCWahRGGFshUXLfLG",
  "key11": "3utMf46C6KhyzqJVFu7iDqwQmqfiKYCtsj11S9CJ47t3fRUXNEqPcVtC6Bv7SENRni234orN2q9Ha7dia9G27itT",
  "key12": "4EgaAdAF5sbtQGsXr7SLqS6wqkhKU6F6fXM2zr89mwzWGnLcp6nFXSHNJ6aDmt7zJP7HA2mf7bZcYiCGKEZVVZnX",
  "key13": "55GpTGeoeqmKuJpXJghB8bgcwDKYTm2hjA5gvZy81BwZ8R5kXxqa29jrNPgefcqNL4rJWoF565LwKRUTUnEzSe2n",
  "key14": "2HwvWFbHWLCCsaTihTVGA5p3vmmUm2EuRWmD369PVnvY4U7wXaPiULTCRR37J3DWjvy5CV2iQwmftP6iuu1gfai2",
  "key15": "4JkxDpdBgxAZof7xDgGeyVRgb93gXoik5gsrL4bhWbFed22yLL6cdrArD3nJgTwbxU9pV1wjFrtwA28oDqZvu2yy",
  "key16": "NCvRrFjkwNwMEArmfLpwzU7g4LQR7uvAAT44o7pySrj7GyAra6pJXKCNZeqYJhXnQqNrsP9idyD8NcsDQqJCt1e",
  "key17": "3pxHLqMCZwM67Gmhk8eZe9dMRv2mpT68pHZtAUGkzUjAheM4Wsx472dqjzL6eqphXtbgcwRoKonrebLq2UTfpEaf",
  "key18": "3h4QM28QVb69QSv7S5N8HDJso4s7A6zja3QJApRc3HbJvsuKbui5YPU1wtCYAWp6ahYHLViw399cYa9wxXwiGGiA",
  "key19": "49KWKc4C7kme83EuyLhH6Z5GDqE3w6FTv3gofYXrKoFqcedhMyEgs4m6PsEyAHGBWSPgvfDqg8Xm8sc4H5ThxZpD",
  "key20": "3wneJRR4npjPdhStbUQGzXep6nfiLBKsH19dkwTL9FFHKvjRhUwgaMotkaFbLD4ZvdmCxan19mHVHPGCqExfVRf2",
  "key21": "4pv38s8zCtTe8C5vAiyyEnbeCS6y5ouosV1Q7HQwW2mMVXJKwsVzvNzX2V6fjdHE6h6jynxneBVcKXcUmQvizNWa",
  "key22": "5PdB6Tvn8CBAc3KWoauLXmds8gttV3w5WbCAJZnb3aAv4SMScsBBzjFwWwEDQFQBdDLUe72qyo5GV5n4mJyMvvtK",
  "key23": "4z2VgESH4KxFJw3GyqUQmWVb34U6BL5yPJdvZrzzsGqwy2ri6w9jwsWFekZRV4ANrQ8BM3FZQ4BhE1ceryUQCijb",
  "key24": "2MtWayuf4816LaFFtdoewWh9PLszFfS93QB2tEoDJcmy4HoryWx8Z5ucVXbCjDLfqR19HCrX919PwSH73Eo9W5Rv",
  "key25": "4VpHaTYFBgdpBt3WWEk6zHNxo9sAkgvHwiEKtCx34azdqyVeXiaoJpvdj2g7nKSjvvsKKk5fNCBvcPT3tJNVcFek",
  "key26": "2HJjsNvAWxoR6Ji82RUhtRGwQGgMqTEzZmyuoha5uEshbc7PdXdot2NwdQwMSXC1wAn4NSMfpqYojs2evZ2FGzom",
  "key27": "2HFZ2mNFa62jhNkswvyF8uUSnWNwediBHwWeQ7Z3UF6wtZ5HRpy6shu4KE85vBYu8Uyok8HUT693VCfEFLP1Zqo1",
  "key28": "3eY72qWioL7Mkn9hM74oznbZXmjVXz1Be8Zhmh4Bu3g7aUT8kNGxavP2cWNZfR6ucbRUZzqnSH7PpWeDE3tiWGMA",
  "key29": "2ZLbVnbXQnt5qbH2s7VMxY1jjBsoLMXZzM8dKuScYn9tBXM7y37sAbVAJbbi95xi4Sv2kgr4a2uzXE8HC4os3RvW",
  "key30": "4hKfGDi65xsCmeNMPFMPDTcigU3oNmEoQrpxS3SXwzLkmjjzvL8BUzeW7jYqz2V9qHQ5qFPN4sHfToiUrPViyGEc",
  "key31": "4CETNrUt5o756yiA8joMJoTK9HJjt6d3DPXj4KHggkZQQzvQ4KSj2SVvCVaLgNJKFwWycAECUfXuE4greZQo9Gzk",
  "key32": "h5e4nAY3Z5GmWvBNjU94BWouRTh9ZfWmpiPGtQF5ac8zzumudGMGMNd3WnDTxLUgSb4puMeAdVxeeBvU5n2wrAU",
  "key33": "5fZDMf6WNR1i5Ra9s9ZyU9wmYmgKSFmYqqFNtdwma2kbnLQHnMj7UjT6QnHLWxrbgFPoyvxEWzArQNQQszJ9NiDY",
  "key34": "53V8C3gjkMFE7oZSbxSPSKzJ638jWrbRw19CMpZNMQjZZpAjH7PU68fNj6DmC37XgSFeSiq48xoTzavngw8C9vSZ",
  "key35": "3SRu1uWrBenNc2T4oL4w18RSVCCoFmwLB9Hm4PY6KNGq6sw1FWJ1aVh4sn3A8m5L5cjXDn4VqaiLH8KSxTGL8mQN",
  "key36": "Gckv5YvN8cE1qALmhpAtcT9HPbgiE5wneTo6p9rKsTJK7WhWVP79egibzoM1Bek91NyerJxhomwuYHftDwdTogW",
  "key37": "2W51SJ5eG8ESToW4b4qGnyvXKBL9MngsUt5JDZ7xuAWyAabxc91Ba4gjLQrxDwrri1rWW3S2FwAC2U2dqMvxD9Jw",
  "key38": "xYfJzzKVxMFX3vdhMGoDup5gPWvk64Q5Xmd2K6hdCLjn4H98iomCTgPU8pYXdJsSV4uuVbfuCedde9TbbWYzQyt",
  "key39": "21opk9pXAmV8EJJwbLsZY8FsRXukSsNY2Q9sqvCeUVKkVHx3ybHJwduTVkbKQaj34Px9RxLghBjzSbz8H47ehjvK",
  "key40": "54vLkiKhaeEFdvxaM2w15EVNiW5kK2qm4RTH7MLWQp2C83EeqRgEppWScUG7FVtDnDQYNFts7YX1sd9XDrsUcDtn",
  "key41": "3WRo6uM7PuZp3BL8uX74aKs4kWTUgYgiMQRUUkpkycdjUyZQb2H8Qzq4yrovUnQrVy7D5VgbbL4Aw7EYxQtHPiCv",
  "key42": "3ivHA4dmZbPNGHgCp7dBXgNctK41Fg2mNEG6QyN6cw8oUmNxaPcS14YbtPsZCTuVX1acMZ9v5DokktEhVoueSrna",
  "key43": "gmUSebCAcuVWgZf9f8aak3cVX9r5rhn4eB1xyNB1PZTZWpT1RD6a6NXHPJBeEwEoUNs5mkWL5BWRZjReBP2wZNN",
  "key44": "3hBvw38sbgayMLrQUq4WjTPmLxWa53tGU5tRKSLoxqhV2BXF4B4nvHhi8VXfVyGExpxxYZmfzQ9eger6GF5gaYf7"
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
