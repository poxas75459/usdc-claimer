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
    "5ayFiBEoeiisn4maQBSfcxJwXMm54aTbtRta35Vh8SSJTgKMrYz1ZjPK7KEbxfUkBB7UhXpfM1qvMmBzDxcx3Lc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X733dSgZtrwb8azGmxz8NxFytbGRfhJLm9w93gDqzfMuSnJBxoHas5yUXjmk5pSSkK7JkXSh38jBzEjyVCF5WMf",
  "key1": "5W34UNEBM2DqJcpovFvqsXK6ad2Z37tt8vABBE5d925T4YEVFX8ueREtbE9Zw9mvg1ghXLBtE76qg6ioG5NQjeQk",
  "key2": "3sBJKoc4joohqcAL9MGQ9G9TMrcWcP8aNf6iVNYrgJXpRyHop67jhxHQ6SM72DTfcrDwGRyLjVJaPyjTKp3X8gWb",
  "key3": "2TWBeiWYgTdq1GX4HUAm4wgXgGodv5QYN5TDSSqp419NJegWZsW2R3Gcntyub8qVKiaop5cryhzrRqAmWx3LAQAK",
  "key4": "3ib96F4iL39Lq3ogX1u4zgAt2RvyBRhYjZtWTgK4dEh2mqzCdhki2AYMSdx1GHgBBdZKAhsUXptEgyg5tobqpNvm",
  "key5": "5wvxR1XQZckzhXFNpVr3K3uJ1JHTP36pTCYdhmMTEm98JkPtCUKKjwGeVnN1MLCrWPAusevdjSyuCjQxTyU1ezzq",
  "key6": "wLjP6vdjKKL5La2RFBTm3Vn2dLudeRnSzTYDc5D51hvXnWiYULbVFufnpUhqr9zSNDUpcSLM4ZzJtvVzmzJhjBa",
  "key7": "5AjznDjrqHgYnUoqjdMiFwPKQcizHg4pkL5Ndbt8uvsTABKHTiahv68M8QgHjXZ8hSxSW2g78DuR3K6sagV72dRT",
  "key8": "PNCEWWPj1iDD3boXFvyVN5mukTP9uFSaJvVtLFG8JyP4mHigUyJBoznC45Ug1oNgi868r9jywqJsMNtYsp1bMWt",
  "key9": "4qK3m5Rope4c4rssx9SgyxtyhJAikV5SUBrTHa65f7RHDR23uS35qKCyrNEZCunfxyXHSY1hedyam8go8tM8Zxbi",
  "key10": "5j3HxX1MA945sAxSMkq3AEkFSPC3zwGE4gJaV4NYHJmB53j6r32XVUF4ViXiUxtjnq8TakGM2JjgkrwEkSUGzm7J",
  "key11": "5NLdPC2uQ8r6tAf7Ef1f95LJhz8DsEgNRcLtU3wLC8teJo8p7TS4feStFdECwuoEWunPpmpSwHeDw62mCMqVXUF6",
  "key12": "39zmctquaz9h9mrUwbVbAh7Gk9VsE9MYrGdn7aoXZ5nPW3UugPJG35JrcKq1Ks3KfcskJs9KHqfunPAmCJnCa17e",
  "key13": "G3aquh8fxWHXLcCxcYjALLPiaAQToPfnubpaW3wgfUh5GEobRpjqp63fmgQBP1RviD7f1cKksmESjCdVnxEnwiz",
  "key14": "xjBnJincewvbCdaWW5yG3sAoYUY83XbHaTspZi6iNqWX7qDRXVXPXVpdMu2sKfXEh1XT4Afe6wwaBF8vkMzGeb7",
  "key15": "e7aZuheTof2hbDjmgK6BCGSYr41QpRPun3UwL9ELWVAYXVnU7YFWWvX2bc4wEhLJeWDGxQXyNdzUcnBw9CYmA8Q",
  "key16": "3QxQR4uH5Y6Hs6DWwFqn6EgKwJGzJV6baoK8UXbCv8mAh4kCSvDhUvUmQxH6aimP29K9QvzQyrGMyNYKXQk7irtp",
  "key17": "2V6hXi37pBzpCX7wsx9SAVxJ6QRWvuZ8AEvzFjqqxiwmtRYoJJyrkMjJWkKLpSErZV5TWahpJhMPVysAotdCg4f",
  "key18": "3mYEP8Xfge4DW8d2u92QFAjahensuncKS1ZCBquaLYU7qcEAgoBXQX4fY3C3DGcAmPEg7uJj4mCDJbsKNhJxy12M",
  "key19": "21bzDXmBD3wMwxKGUmYQFHkiFyKRExkwcVxLw478h15ui2X3AZmCrx3RSREoAF2riiZHmG97J58Z1Uri8G6P8Crt",
  "key20": "4THGWTfajHCm93PhPxz2JwcGJuH3iDrSGwAazYtZvDFaLCG2TkGAi8rxKJpEwtnaZXVXnLWYfB5UCziPkzLw8c2o",
  "key21": "3QXoVyxMLMhbz8Vi2vTemead7oQUeNyHbErdo4cZFHJijs57tkFyr4UB9Gc7iNasC8Q54PkxuBoo98kUjVNrqMxJ",
  "key22": "45CNnkvLxNhFbyLENzQjApApBctbY3toHM8hbmYKnf7YjAqRVLm4PGUnmnoaqqjghWzyZP7qv5YrExvRx4Y4HATo",
  "key23": "2cz7f7DW6e76RLBbg2uyGfVqEvtDF1o755CJ6aKgFvTqQsqoRoqkx5XfPC3aCUcj7LnyZRdUtRD2kf1Ne9bdAqna",
  "key24": "28fCvU8MPDFcszjuz6LYnUrYD9QGBaDUWBiB9PHSttsHoRvV9PyeLhDe87on5szC1FsSwpYNh8kbg2pWoX3MiDgv",
  "key25": "4sFy1MaZf5JjQLz342cLR4xnSCBPbA1Voa6yWbdqMXxjGwWuafwaTHszD4hhRzjn8kFaPadXKb8DjsboCa4LdYx3",
  "key26": "4G4oG1cZGRvFo4tgvjtsxiefEbZaYjXN8uxSb6c5JsWkJq4E38GDJc194gm8Zb9HkdLZ2k59s97Kv3v4zCzk8Mzq",
  "key27": "44vKJCqj2tiUXxvAE56tH5gB5uQLV6Tv7Kcehp2j45Vv11Cx2oUY4eVsQG3ZyaYzB3SithT57Tir3paJXc3rus1w",
  "key28": "YvsEAEEmFDuMPf5nNLvK3e7c4jdrM96eZzopWVWK3GKzgmGGyGWJscfYo42G7dH2xhvXmEt7vhLm2B8gzedhsqd",
  "key29": "3YrWcrQsbPX4A1xWU7U8nA484p4iLyT3vMBCVHRUqdNxe2YJ5sTpWZscPe676pnsF5NazNGMnqNAx8CY2XTrRisN",
  "key30": "3dz3cpp6oADSiaFEJGT9V5jz92c4ZEdUUPCmpoToM25Qc1MSejAbt6uzYRtvemiRkboHUyhmm2nuK3JbhdbEoXuL",
  "key31": "MBnrUDb4VGY5xtSYeEcZxanLFwxCy3uFAvfMrmx1S7tCUkLBW4WbtTYBPtPQvKSdPo4grEmpnoyv8v8vASFQvaQ",
  "key32": "5RAUPFz81mgweWyzG4KkconT1mAewSfeZAGHoJcd2Yio69TfSfuw7GUivfCmD3AavnkEDPQ7HYfuybEVDYeScecF",
  "key33": "u5akmXk3dDia9LejfwJ7Hhd3iCzbc4vpvAArZ46ztse8UiF7chd4xvJwEPJfXdwEjSmeC9CvVNBJzi72dZnLmQZ",
  "key34": "5fhpqQFFeFz2y9Rzy5fdni2qwFfqD5KafzDqLAoDB683nQghhkHtWPsswRQ49tDJ1ov2FqnyrTY2uCq6uNNHzVfG",
  "key35": "52RLN8piPALBxX7znu77SFTXMnPDChNr1RW8DhMnxh9fBcZKSHGqWo7y9dymhqN5pzdPH9gZ2NHJCudQLiYMHkyX",
  "key36": "4mgaSqRdvtwtGHde7LksAuV1SCeszHcArpZyRoF4tJ54g5gnbMu9QupLcmzFhesVo8fGxAh8Zm6qqpxgQVioEuRL",
  "key37": "5d7R5Do7F7YHq7HaekCQ8gEtycFLqpve4u3D8rXeDX3ii7c9RenTsaKj1GhoDv7RXWbNWRA9xsXcTXipXRv7pUP4",
  "key38": "NbyiJ6QgRLBAYZSjKzqMxYAX6YDUJeLZ6nqNPKBU5yjCyxuXxzaMD6mpXj98PohjbjoAmseCgY6bTx5SLhL66ym",
  "key39": "4TUA1pMiKSHbW7E6vZAY56ENF2sja71v8HdhUCVuDRsh2hKLFjehgfbaxjzVTsQsgKiHD69nF3tA5D98jVYA7znM",
  "key40": "VpvKUJiRsRnVFUhWEWskDBkDLnbYJZjNoPdtXiSbxe4CyPXtYayU5whYiKxVbmABa9dQM3b9EDX41gjviDizkWf",
  "key41": "2CD4BjwcSeeBHvTujYVXsRycpeENfcZ6ayLkNV4UFWRpxZMwTchsddZr7n7tcxFvW2XnTkpK8Vu2Nxgu3KXpZbqL",
  "key42": "5BGtDSZj34KdSpeZNybg8uRTexraAEyGwfLwy4DBBnq85fJJ5iaf2d5fUso8t11r5d9cpmhNkG2W7zd4J11vdVhe"
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
