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
    "22tkajBh6qYvBtcdZv2d9JDEcjNJ1ceyZWYDARkTL9n8SSbXhniUbPGcSuLReX3CD39kdqBscZ6Ys85V2dBmPQvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z86ek6ykrGDg82MuNx6dF7jpSTp8vmMgMbs7UJPgvbMck92xRAj5NvB6i4jBMZ6kniW5MeAz6aDnyjrAjXLPHYq",
  "key1": "5LYMSr3Pe4djEs5YokrSa1Fh2Asj666RJ5jGdDzpab4AhkGzDP5wyP8M3gpBJvc98f9rjzzgjtajpWUtYLJ3zxsG",
  "key2": "v1iZc7KRMspAGB7C4hcySoHvQEJoHQELWYmKfE5maW3LLZ3zto9PZLUjRKNaMsj5unum3i2vuzFwJzU2dgpWBNp",
  "key3": "5No5aAP7P6gXF991TQMqCDJxFgwX5rN2r8y4BmdSkMvMEWoCsKC3zdfKDqaEF69F3rs9z59Mah2nnR7C8upeBT1g",
  "key4": "4ERz5Fn4CKxPaTXz72oeyEGBUPZz1og8na2c43Buv2HUiUhevH6hq5AEmNxhW1MqzoTSMarBBWQq5L3ELqYJnjxR",
  "key5": "gWtcyexrbJVyYRtgPLJha4Yt3GnuudKu1N3crSVyhSuS3fzfT32n2NrRazeFmhZ5FH4gMgfBfKVTfKZ9w9J85WW",
  "key6": "39fRjXdGAVi6pqQuxJa5WE1U1wV4o24CHWjPvitMKNaRBhA7v2LnC2K18o532ogLGEZxTPjbRngguhQ3xogt43MF",
  "key7": "3RGoo2P6EBvoQLbPUaV7MnDLns3tEZQibidyUF7QiNhUsbXMeiiVQRenwQTUTM93jRk3ZYTJ9mTMBB99nv7muJU",
  "key8": "3LSDLfoo2s8xUTUgonLS2JKHwE1q2BeHQq4eRLQqotKjKAuqLeCn39pWGaz227FgXTPrFCobMBr6Q3ZsrU13afeb",
  "key9": "2zGewqHeVWZiuFa4GEF6sPkT8heior9v8Bz81FzwmDHZpjakY44ZcBWafSiTZ2TGh5X6Fs9Mk58pesUW7ibmb2pL",
  "key10": "3zvhHN1M3PQjuz6UseW4R3mYzLJP1kvZBbJ9J8onB6owDujdLini3PMi7XWrLQhG4orL6bs7sTYYrr6fqTH7TYgm",
  "key11": "2StDPa39jdrHzRwpAmVAbQfYcQxJwukgzvkAPm1kmo8CGPiGAJAKtrmfEQkaPQjwiZFjYxKdeB7k6hAQtH5Vvvxy",
  "key12": "5xsghqdYwuXEc9T3jnFSk42zCJhXRKpxn7MoZW9nhZbLn5GjxLYqqkXXsWZUsxqTdZvhpYaS5YbbnewZrgmoeNT6",
  "key13": "5XxdrjxsjzFD53iBr1ZhN4xAPMBwWdgDdrTHEeWTTNLSCEQGkgaS7acvxW56q4tdQ7A5akxCdpzy3cvu1X97MZx3",
  "key14": "57wGHmBao94dAwXF2ndrrV2pJjGTejdmtmif39V4RX3R3onErhcn6huM3aQ1i3omSAuYeoELTFEo8ZvJY7yR8Lcv",
  "key15": "51HhxvgB4X7ppJEbJk5pDdsVKx2SgTPMjRqbMq5raDHVQPNuGEtpAX3zsJaust51rtRvB6HVWCpZZPkhKKSMrRtp",
  "key16": "RoebRPMEoEWdKyVcf9EuJDiR9mN8SJUaJLf17PZ9LptFSaFbGGHNqaH7Ha8ohBsDBFNjv42kf1Tqb1f3M1VgH2B",
  "key17": "4FS3wkjg5AAy9a7Q5ycH4q5yE6y98edYEoHUDyxmwvHBhqDiEXDJabFnYf3joURKVdWXsKPDBy6fkKPy21RR5ag9",
  "key18": "5o3S7cFBy5dv5U26EdUfJvgh4se5MFupRhNKqjZBFe6mEeLZgnFKwJRCNfcNMSaTYwVmCeNjBKNgbJRyW53iPgCZ",
  "key19": "2jVvuZWPUm6LYQ4LkFXiwuyiv7XtunzP9yT66zqvbirtiqCLZsoXScEYTk2Z5RacTUbT15mUW92bhUNPV6gF1ZPy",
  "key20": "4XTRWoEbbnsjGh68Mvteyw53zeF722arZMTaVEZ4EdnFxLQTLe1cW89FUFDo6G6WzF25GYmRGCm6CWsgtF8Srpot",
  "key21": "2B694hkbQ7fPVmqUJtsKVcp1vuNQxBDgv8bbdULgVaJfnSALBWSKZz9RPEB5j7brgJmJbgt3p4JPqTLccNPThQ9A",
  "key22": "4wgdFCoJbrVQWYq7oUpFiD5wrYtsymiCp7Zom6e7pm8fRvn71CtZ6vq6vAKDfqtQf6T6GtBYupCABnCFD9xTeNaU",
  "key23": "269tm73jn7sw7RbAUnZ8W1r3bREmZCeMKq6FNRZ7xL5oibh9maiijGiaEw9k93gktYopwDqhWQ6R43TyYVBbVfp4",
  "key24": "4zTeHjpzYeBGeZsZQxt349shHhSUMUAc6ybdTXQ34MBeZdxGbfanZvtKXfTmjxpRKJUkeyoCykeGRhKQ9rxoAp2N",
  "key25": "67n1nFNUiJUyNNXbJ4Ru33VYHgj6EbdjTnsJEqAsXfP33A6uWER5yo5e9hXiJz5Rrp8zNj6NjKWMTHbE4PQjMfQG",
  "key26": "231LypSQgg1aLxxUZ9QfbPUhPdWXbrcs1GWFjy8nqgLDHppcYmsSUjxNjn4kCoUqLbzZLXd7piwojCrRByDe2yza",
  "key27": "RDAkoU1KeFhWQs3wt5ZxrRw9dtcaYtjYR3p42GeuPU5UsU6MqPERG6pzieYC21F2Bf3XjGDuBGFkhezjBgiZZyL",
  "key28": "5JHzThsR93iYhiErS64szpymErEioNYBFM5cdZ7HjtPwCAwh8eyMXmrDhXRHH2hdjs9HVkeCyr4arQzDnoLqD6CY",
  "key29": "2rwD3ubHdnvkuLj53s2wNU2YMo1EHo71t8bcxjZj8mTkRQvsViPBQsVKTj7oHxVmhJwsj9PbzXg7DyxVUKzXebtU",
  "key30": "57prpQE2KpF3bTmZ11rEGrs4jwT7zP16Zq31FGaBETCKXD4JzXGhRuWBh2jncy8syVktpjh93pq1xfR8CENn9rm6",
  "key31": "5Ux9pnPk5zUgQdACspm6WqJ5oqST6TQhMJ1z3uruYPy5DHYJHetM5drnvE3AHWHVuXACmtZwxv7MfscLghwD9AvS"
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
