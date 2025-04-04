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
    "ndxUR4bpkekE5kGcChenYKeizwrHNprdchuTGwPPfmHbWBqNUNzUoPi3WpQJ5JrihQsiH1tXhwu9KYm2w9sbHZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AspePhB34TkvKRg8KMFGST8offuS8aPyt8TDpHc8zopx1ci4MpyJ7Md7uA2WudVBcs95TCrZPVPXpM9BL178Nm4",
  "key1": "TBt74w8X5LHrQHnbapFoW4ynbhADvLacYakceNJGWSAvFYj4LdRECYyRdn6pPE5tjDxNbxtpa9L33Viq8WVpGqD",
  "key2": "3R4ZpT4PUGBRHFAJCN4DPvNxdxUvJnova4nQjES6RREK8o25TFPxbq23oXTCWd4hNWu9GzMaa56RDZXVtqNRVimt",
  "key3": "2tu7tDLsxTEBWmFj7BNDsAsTHPpc2ZJiWKcsqkYngGFgLar2bmQ1MacxV89DnbhxzC5dDB2fyMtNrZsZ6MtBv38U",
  "key4": "5faMPbiAJu39RzKch2G8SoW9GY7wAmj5bJ6LuKonUPoTYCgpLk9kjrMBwDaY4aMEL77LvH9Ru29z9fTXwt5mCJzf",
  "key5": "643BEqnLSpBRHUGc49yoF41wmFh2pXcZFvtHfz2unnyuKSrq5YaCCUYzryhT8bCngjY2ppqDAzXkuq6ugYY4nwkL",
  "key6": "3PBmhYFNijWaKkyRKP6MuHFjuPtJWN6b9aXXNqdFQ9k8oocsXHNE2HxEQh8LEj7Rd3G5p9gEKWw5UM81JcUzDp4U",
  "key7": "49xHPv9Yv2yoRRWd9ZKa71c8aM1RZVEwXkBcXgNMzSRRsvqH9ErGwsgN6gHDUtTgEViNgbf6EfndPyesJaBVJcxH",
  "key8": "61mTtGxkxS4gX8BJn62wkud44wjL6PPe5vUgqYYz5eXC2wMNwCDGeAMRQQocRKmup87ij6QkJ9rxKHTH6dCZwRWM",
  "key9": "2r4bryRoJpe3duZhQdKx1sAEpEHGea6UhofuwCt6D63WRnF8tLAoqLEDwp82FdTm9wmKVS4LWGvrCecfMpGqtPH6",
  "key10": "Pzgv2PXES3NktfAGc87xE3qSkoBaMCMZN36U3WZBv5s8DR5bVoMGzrGgadH59N3m1RCEcdKf9eHooPMhTA21NdM",
  "key11": "5o3V99Pfw1hLQJYdpnQZCsJMzpYcWSiw2YrVDQGazCG77x2JtGQKn4ZXzJuv1L3q3eYFwVC7XDK6R3oGENcqxS8P",
  "key12": "4CAwZHLftz3Vj6eiQQiDo2AMSc3djPLYNGhwRRa5LuUAnNJFBM7wYyigtuRCkaBdJv3Hzp4jy1CxZuBTq7NyNf4v",
  "key13": "RJLmMnpfZPRaaeMYgA6uASwFKL4tQfe1ydfbbCMKSRdEF5PVsKQuGsZ4KiSnj1qWxm5Fg9xAFVPWEby1tPuhe1D",
  "key14": "2bvsT2C1q5Zc9Growq942CPZNF618eykSYio7ZsJ9tDatbs1LuiUEagxzfKhej6bG5grqAVbzm7v9BmpTXZ8wFum",
  "key15": "44PtE2fmBNd27NpoFV9Ct8SG4gctBZYG9MKwecvxcbH8VDGXEK61V9veGqWC9ZNzoNaZ4oStp3Xrd6LYWGjYhz56",
  "key16": "4M1rHFrmXWqWcchVMp5v35QX5dRo9Lkh68X8Xg5BbZZgVRJu53BrewnispdCbAknFvNwoJxbviCg1BDvT1tfzjMG",
  "key17": "5w3u8eDw98DfVHS6o4YGxjmpk81RKzUbCyaLSejkriQzkDcz8eg4hn16HoapTd7CsPWGoKcaMyvA1Gd8whuZLLQg",
  "key18": "3M7XPR8B6akFxVHHehNkveKXyC169wH2ytfrwQvnMJ7m2G82eYTBXuqYit5CdkdM6PAghYN36firWJgmVpjcgbUD",
  "key19": "uZBHeAPKjgCwuLXD5sTXk7RnhYuASL7Uzu8qtbzdVaZt8DNkQ7kNq6AKkCioXBkBApgF36QWcx1T7bh1EGcW43F",
  "key20": "63pbAoFfa3TGPzG3pKBYdDxCphoA2J8CSyEGM6io4YKwAzGD4SddZg9khaNQLCMvZpm5vJYbLArwRrKxD49wpbnq",
  "key21": "37gFWHpVB86HMFH4NsytBgLj9kXLkBvDaJcMYfWYwdvuXvoqJGCewq6fnM6k4dyuQNkfcL2DmSA2F1nYcB94gB3Z",
  "key22": "2gX9pbPzv7Lm3prpZd4AQ1mbL7AZiLH5y98pUVDd9r344gkso2yrxkpeKMso3yD3xBGWPgCsh7EoyksZKFcMtxR5",
  "key23": "5uZ8n11bpBsDXD5EspLjuSXirymbajcBvxvgg1oNqFEdWoSg2FjNguAexUiEnbRE2mudwLac65XnTBDZ1pkL7wkM",
  "key24": "m2Rda24cZnCSeQfiL9buSPAMdWxNK4iAYVq6qdVXJUj26Zn6JU7MCAxE9Qr8KNRY4ep9UU1mc3Y4AKk2RdCVtWw",
  "key25": "3fKoaC8VqRJLojC9AWABBj6pSe8NhoVGpXQUSkixeoYPjpXyLPFjES51WUrYbfXoZTAe5HHPf1NG9nhW7zmhV6fq",
  "key26": "4pyReCnpZRZbbEqNXYdwrGkYpnprnfi6sW8dzkY9Wj6J9CqCjwtum52TvHjexxkkmRVDrE3aY9Eb6sjN9SbVPu1Z",
  "key27": "4LteKKCfLZ8AE931y8d5dvnevy73x7PUY2y2ZmhJdgwmK7DSTBS9Re2tgAX51m3XWVhsjEBkZitJG3oeHGnxeFfY",
  "key28": "VF8E1DhRGoGwk8LCxN9jApkLtxyxXB75YBtyBJ77A3dzXMZPTsiRCEq7tyx2Ws9KBszobeSEhnMhykQkVH7QG4U",
  "key29": "64ZmcegE7Pn94RYWn5U65KgUaSryHEGQx4zoNbDkgm8DiB184c6xmTrzCrpiFA16UqzXsbshTBdPi3tbxQRdMVzo",
  "key30": "oWqiB1iQPPLiT2v5SEATKev666vy6q3ytPTfjw5RwcSqBNfm5zx8KRUziP1DQ3gXkx93SSsGVuxjFfmHC3MJLJF",
  "key31": "5bSW6buKJiow7YvTPXgZfEYTND6DMw65euMRB2wZTzjyvwxos3Uj6M4PNHecvm7wqZEJK1zuRhJNDnZjtMszkGNR",
  "key32": "pCf8Sk14UkedsB3TueyLxhFBoJtXZ3Z1DyJPvoqbhkodF6VcSyK14FqwaFetcGpWtHffo8GasHZ58dgWkyjnSWE",
  "key33": "2tTQ9ewXokTnv5tpwE4vojc74KtT64DM5cZZ4X7UUNPmvPwsFvNTW5yFYCsLfyRxVnFggsQrW2L6BFiKADeD9z4b",
  "key34": "4ns8d2Bkj8V7mbtWPN41DfMJ1E9WVeDGjsLzeCnHLnvqKtPBddVpqQ7wChxADBjBF4yiVvALUm1qdmqS1Q3ZmA1k"
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
