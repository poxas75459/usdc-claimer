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
    "4adz8NSRGG5cpWpDmSn14ZhVRDjNz567pRjUquhBM1xVKXRtxr5bDkHzmRokNY6WDX1QfUwPmXbhxXdDxVPusn8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuGofP3ymGfraT3TEJtVGrVL9E3Ms52jbKGqDyGSAtcpscBE8rPFR53oDXZi5o3nThDCxbZWqebdEjdg6wywJ7F",
  "key1": "2jegS6nCXs2x11wvHrThNddrADWQspATF1sqzXK6pjhcC5bMUVMXxnidZnfYNBzD2PNUs1c6NSV7mgu7Sjg8L8W7",
  "key2": "28QoZVDYeHJLgocgiUkpcb1utoKNAjVxx6Eip7z1kq7iquQ2CMnDb6Xk8xH9bNTTDUCzXEbJKQcJ4wLsyUB49Bxx",
  "key3": "38VbXvAknWkzTYovNCnSzmA2THS4TC2RYPvzdaLkyiyrCcDn38AfDKCfbZzrcKKSh9xjbNqKDPD7wcLBJ7dmosLc",
  "key4": "5QLs9KsnpXjVq3BbeskW7h8L1ym9kBMHv1oQHTwnQGXNgXyhYATk1Qh6AqxTxyZhL7KRogomFBGGLb2ek6pKBn1G",
  "key5": "Pc8Z9G9HAGkbjtErbJH4JoKVsxVTpZnAbCs7GeMX1vN31TcJZPpu27GbnqoFqwWJyzQBKr7XWvMuwtK8PHF6XTk",
  "key6": "4mmTosqWoFcz9sM2rS1T5vuSfZCzyhEfoKNtL7wDK3kzEEpnHc6PCZSk2rVGWpKdi2JXjF52Q8zmvYLUodcFNzt",
  "key7": "6Z3GnByncv6ZCGyChk6kSD2jD94sZmgrT4rxi2RdYKRLAk3jA2PyPyGgZBjM3M3vSj6o3xys6Ppx7E1A2NBztta",
  "key8": "259Nq9gfQrGtHRKZgU7WycR9r89sDqfk7ZYCtiMwSft9npEWehnaQHZuHTGNGdvG48A352YQUikzcJGNdfJ3zJJE",
  "key9": "33tj7W9dJY2hWSC6NRQDLotzs7dgbizUMHKDn4Sv7ZUbag8LaWmCp5oymAYXmMdBdPhdgigC8DPAoZFFNdBYqLx7",
  "key10": "451rra85mJZuhnfJgjnhmXJ1LSo91uEPDeZjYThjsUAquXoacKRVk7GuJJUJ73Zq266T3x6V3W8XDpHedpwfitsB",
  "key11": "rXsctAC7WwGRkvbiC1XepvFXc7HsHGRdtzDx4YPhqMTA4S4dwruqbfq3CdtfWYaC1CVSxFu8nymW5Qh9PRMDUTX",
  "key12": "5yR41bQBAmgsSSR5z8SGWeazKsQBRhEXdvBCAnpL4NQx6rzSacqhbGhWXBYvtFGKBL9XJh9WBCPEtn4HQbUbfaYf",
  "key13": "23j41WGiFLCUwXZjdZ7s91NjApBAAKDsQ8vzT3eaaaUoGLUap6w43fFYArRe9TBPeMv9fE9M1qjvUZTGBwWz8utG",
  "key14": "5QV6n2oG8Kj8Td4hKBSocTXDQFNYsMAsWdbMGTQsEuZUyLA5dBnMXbeFnMguLg7sArdvNTRYNiYaXVSgj4XMpZKz",
  "key15": "3gX4vttJg6oGgRGro9w5rvWjuPfXyEgB41S4i237BCP8k6jxPVoh7Fj7up3SxvhEUCAYSiRFcFTwzgbq71gX4HPn",
  "key16": "uDm7ckw6dmN5M69xW9NLaqvdKFNeX6Zgf7dV8B9aTM8oiPxKPQRPurPNqpnQ2zRTdzjGbTgyBENYwW4kQgLnkMa",
  "key17": "oewfj4SgZSVNX4SbZek45vGWrHGXd6UKcadqzZd5vAXAEsgSWNCe43mipofhHdjDnn1gYygYMy4n7FtFE2wyGTo",
  "key18": "jUjExRS4yK8JMNjghsbyUYKAHoRcF3HrEpGrLTAoN652n55RUkJdxfofg43xYnqz8Jjy35D7bCXZsNhwP6TMq3K",
  "key19": "4VTSHUJLtxL9dJsoH2Q6pujGkD2xc68Pvo9f3KFW5qihGRwH1zSVSVnce82APVGtkJWg2P2eCRjuDZ1mPh4dgum2",
  "key20": "35rL2p7tKkBucLLQf8ma4hFDvwjRehnPC9rXy8Nhdf7EZ8wJu6q4AfuUYSSGSiahK7CUjyHqkeZdrjVFEWmxmBD9",
  "key21": "2XU1gVKVuPYErPwbyte8TGzJ8ETyNQY6K8knzAY2Xkn3ifwZjKCtXKAnBZS6KXRKeymzrKvoYAekas34aYaXHSi4",
  "key22": "3q7D1HmRggY5KYFdG7JGN7fqP7DyBm5hv6rKVBapXtuL3G9jypd7KFS85QggtPkygC6nV4JStUAxfaptKDKNnxc3",
  "key23": "38ZPczQXDd4TtoDJHkY9dAHx6AcBBkijTQSpsVaGLtBfH4keNPaKwApU1v4d7cm7N9yKsocSQJBd1gm91pRGrcj6",
  "key24": "ntEqQEaVMRFGiChBBSWYpaJqWek3xE1nAvAjPh5trfivGvdfwbgomU6WD8zd21cyjuyjiPmp9oGJWA9FvEBH5HW",
  "key25": "36HUaJQu92z1SHKmMerj33158Hq8kbzY6uo6cfYk1gUcWZKUZwi1ENDk7YkgnWDeZ2Qhf7Za8HPZ6ZecnRaYk4rD",
  "key26": "3cVDeMWnDxG1zmA7W7HbJYUB5yk4RcCuHRA9DU7qJskBzkjYDu8d4kpEiPEfE8E5sQQn18gjnGm2rRUdKcnxpbx",
  "key27": "2e3a7Vo2tdo6UvJqtno5j1cnrF75fe4qXLKD3szy3saEG74Wgah2S21q2GvVXyiCApaWekJAseeonpe5WTz5k6Wj",
  "key28": "4z1ARYoWg28RXqwkdjSJRnXyxWKEjHZWJSnQxZjmJmeqc96QMuu1KWEswtT2AZXzTKhepAMY2XAKLHbLXnegxX1T",
  "key29": "2MKjAdPH1Kmzx8zjTpA8chDoxzCXWLg1yNExgzZ9BshGMECyvdNkkvV21V32EKAN4n2cFmhVPX9pCE6Th9k8wbqi",
  "key30": "123X5Nn6w9z828855unbpYAuMvuBW1Hw2V1CGkt4qeZVyHFLxR4reTn3zWNKR1TBTRgXewrjE9C9xPcZfu1gJEMu",
  "key31": "8Xart6e3RCsTeR297cF8BprakEVFDLumpGa1poN5na9czF3tS1zvekHNpMrhCvkQs6ZzysrNT5mdin9RBLF2bSa",
  "key32": "4y9mocaDRTtfdiKeSx42i3WQMgg7K7bhoZxXdAZkeWuA1s6G8WkKhi6i4wCS64nGcZ5K39C1yrzveX5iqkpXq38j",
  "key33": "HhGSsxJiTDjjmrY3TSx5Y2UN9KDp4GPQaNEvCvC57Fbz59SbSBmEvnuZWbj2BPQnkQ9z45qyahTykkkxhgd3wd8",
  "key34": "5dyGKXkzGTfrydanfUcZY4fm84C3r8ACbiGF5tgW6kw4u5ogBogkUDYVtev7Umkn2GDpVvmpKZRnQJvVbSPfWzoD",
  "key35": "65crLNEm5mNXD3F8RzrrnCw8ZWSjDWGX4XvvcQsybM6M5CrodRKUNrpjPCRfDuUDq5xZsu4oJmCdm8HvCmQi2Jrj",
  "key36": "32xLE34P8i6Y85L7n8THet853tdCmFmTzcYAucYbXDLSUutpDarpQyExmELiEKteP2b2zk2XUGxL13TCLGZZ3YYw",
  "key37": "22wAcueHa2BF5GLmGGUn2nn515iFZ98igQsmSYgHEhGg113b4Cd18M21v9yJP8RzVB88rjW15ALrfMRUJEvP3p3C",
  "key38": "3M39TLaJLzbg33X28txCrDxS8wcG7tPpbFkSvp7qDYsAvPvQpfFUcLR6BaxNstp8mPdWxhK1mcTxLkqCmvF37ABv",
  "key39": "54bTAx9oyo6FEmKNDLAUpwUfYbe7KWXdCwxkRhzxGBk6JqwcZwpH72rKwiyEr5YTyuYRYf58vXHYtuCRe9hDsx9z",
  "key40": "3CtJ7t2GFZvpG4o129QHfTpju5o6fuGJeDWZSTraciM4ar89k9fZYCDroMRpe2aSP6GTtLf8JVGv3e9ZirteEAFo",
  "key41": "43WECG1VA6naxcY7nY6sMubpVxVCfXQjLsCcpjNrUn12w7Uk9t12jdFZD2GMdJ5rPLQa56Q1Pn1vM3KuPn8MW3J4"
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
