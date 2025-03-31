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
    "2Jc8JJbNQimJqcLjSZcMDpeovjkqTXCVU6q516NxNv7F3iUCnHuc2GdrjzhvWQ6tGSUcer6tdbjyZBVzR6AXSac5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNNV2Zh7UFFt4YkhzCv7df3TgPYjTo29kH8VBnVf6fXNd5fTaTQS7uFPqT7sfyV4kSccdwetpXETemfWRvyJ6U4",
  "key1": "rJkb8MahH4uSyxj7bzX64emqivAToswd9xZnMnmyYzKu3gfymPbEJPuPXqm5z8HA2Zg3bB2CSmeJJr3dHz5CYE7",
  "key2": "5ubmbiTVp79Kcq1dz34tbq5LNbv6NWomBL6FqTi2iuBHMt43ydTS18YwMctfPFq1dRD4ZjE94UdUAPcFeQjEtYvT",
  "key3": "WskaeAHWFRepkvXyDc5D3WT1i7JFnF3fECyoH9HvV7TkMywV2xKoN4LdehQMgZp8b6XQerx56ge4JcLFk7xSjDF",
  "key4": "56TfDz3aAM4nwHQMQtncLWzZGL2dh2jWGbmqkuK1RtxaY8UtNUWSBQ4ijGvkh4qKwmGuGeAefwuvM4huvAZXQnse",
  "key5": "DWB1bEtyDY4hokLTDZBLYt8YopnsVDtYrN2YocPy4BebjtTi7FvqASPfnp7vsAKmWvxGdTi9zJbxqzgGRH6diCd",
  "key6": "3vqb6g6GcHczaTY1mEADBU3JMaMptya6kvBwvkKFSHquiPJiCccQKr1GrKWZ5FcDqZgAKdisKKGwFRNp1dzoRKdu",
  "key7": "2sXjgjTwUjhqP9JCDuYLYUWfgX4hQLpAF5yj2wxuDzrE9EY7yxHc4FtYKjsvmW9jbs2Qt6Rdw3zQGBwwkYtewVpT",
  "key8": "319gsZxen3xnVQkULmEUXbBThQL7v8yu29vGct1QxG1smZ92ek7jHNeEPyDgMu6H3UxhntA9gr21wWkUvqsk5bVq",
  "key9": "2n3b6bj4762cZgimoHbFrgxvLFbr3iLc797PWxvNcbANXQ52tkMmbXE6pVuGK2mpTFBqwbtU1BMofNUmgfs4Dk1e",
  "key10": "qYVWSVRwC34pcnCDgYfkxuFuCegfo9NMqhPPiPzHK7byijsAJU7YzdEoAGuuGYt8M7pwxM58ph78dq4oUN164TX",
  "key11": "2s6YG69sKCxpbmhpyRLp2hGNhoCov4EXajSspwBe1q5c4jA54BkUDfqMmQw8QpAwEnKijFNaNenv8VsznUeuXRFb",
  "key12": "iPeHcjrcwqr55URSTwfS3NzZcYNtS6YAgAEVYVY2KQeLHafnUqtnEYeZJ1LQ9khMnZzpPAFJunU1Svd3QtRf5sz",
  "key13": "5K4zajhnESPa14KrnHdprdNd1kKfPp8deb8hVft2nRbheV8NBzoUjVVVYM6qVo172DBLXtE3B4JSXvvFvz1SpDHS",
  "key14": "jg3b8gjzetxcdtMLAxVztGWzngRKbSmaT6wxRCEFnUQrn6Lbb67ksVypXxUK76dVNFAoRquEumo524mLknScNMz",
  "key15": "4TKbrXqh3BsbGqefKJGRZ9KJNpJXDyjEwt7abFuyj3JSYnFbiCBZtcJFbgML3L4nNejTDZFQ3bSTW64Ncp1eyiRq",
  "key16": "5ou38UU43G24A2wV2H9j4SChXccUtYeEbaJSjXiJtS4jE4qnbmufVH18eYKqvaRbfvQaH9xKw4wpFLFKp7qQa578",
  "key17": "2g5nMK6mF784SBT1UoJyMeAGf7sDckyvhiap48kesAC76ghfu4yMrdFHiPMKFGSC31jQoHwasAFXdYcZ6nCEVHN3",
  "key18": "5wwarSK9SvKEmAJHXGuXRmMRXUdpiF71LNUM9dWEQrDBGtrErVz1jhEizgh8jhyU2pB2wr34kmfeqry29XvHQQeD",
  "key19": "pUWAdyDXaHkJSQicmHTa7fyJCcZqEHL37pGZ87ZBaiFGTkgacpFoFhWd7xLcid3KBhWvWNThtcqBczxfCZo3urp",
  "key20": "3RHmYYkdPvqmEeUxkHRs2KhkD6LjUjTtBgNSzeMLweHq85e2dehJ7ti5vciJbyF9oRnBGFzWT4rtcexhcKPCwqLk",
  "key21": "2SRJP8zjwoXC8H1uEytSR7gAL8nAHjUVAdQmj9MmVoG246dZz2M2bzv6pgEZz4oxAVo4rM7RWCWABSBs36W1A2jM",
  "key22": "2B9Pg2vmYLt8UniW4vZx7NWzwoT7PC9g3YAh26Htc9hAaeLuL9PZhSPYR8azBu8LBmztKzUTSAXSihHHYjCKXdzW",
  "key23": "zSpcUnRcuiKtmezQivw1oBp8fdii7DTctHWNRHQ9pUGmEWGibxTW782UZ59hkdfnhpMUE78WgeMM8Ecvya4drNY",
  "key24": "4RCFKXEDtjeQBBvu8MFzvu78RU6ynucE7c1j7oCfuvDFXJis1UjtBnr6kgesm3gLK3UcnE2qbrUEsZWwvQ1Y8gV",
  "key25": "4GJEVbZhEtFiCF12DHijkgVqzcuuTTYKU3sx7aCSHm97sYZMd5SFthxG1HYGM2aZo4vUMdsZJi6tfsTDGSS5gTGt",
  "key26": "37SnaSpaF6Mf7g6LbGrbJV3BETHNfpsEuzPMiYWYSUcmC1K8WPQcrUB52WPBiCurgKHNQ1Kbhn2gsZqQFgBrgPKj",
  "key27": "6ZQ1cCM62rU2QijXhgUocF28rmUsQyXTuW6iYTxpdCDGexCuaGjPTGAZpBoRhJv2QpvkTd6hDSBkCDFpnijvxZ2",
  "key28": "5hBMniz9RUnEo3U58SYjRLsZwCb5rdnUwUrWktsBvuPL1x8v96TKcpuLZPNHjuvipX5wgUcwDzNq45ySytausJ1W",
  "key29": "64a47rct1y3TNRFbLCXwAYRqQivxo5E5FHu4JAxFPafrLXTzQVsurH7QoNqN2RKtDFPL1XKNMouTpbTQ6HH24cQT",
  "key30": "oH6DPKgJX3EUSGfHAxkyktMmdJH6udhvrpKKCVayqhPCXEhQZ92fCCYVKL21s7Xa8WzqgfQ1uh1LLKTvCiiNDMg",
  "key31": "3Rb4wDNV7T85prU3CkT9ce6jEMTaQXfD5yutKRbZ7a1Dp1vSfTHu389HBd6ufbV8VYpuB6spZkhuij6ANSSJwRrP",
  "key32": "2FmLUxaXqpgwGE2FbwQ46i2BgUW6oQN8Y4KFgUY9YXE31mWVueFEXwcVzhA6YfPAS5LDejTzJBwL5mC5aw7Yum7F",
  "key33": "wgwWwQ3iusknPy6MGBVoucEfWDNZfwXVtCPvZDMBDdLwTyAfBZtnGrNcZoZDVdAm746UvudXWEU9GyTDNUsjHQx",
  "key34": "5YC13yd7thepV8Gw6WjQxe29U6ruoZpYKxbjqfNmiBmtJdSJTGVTYgYYt3PBSBtjL7VKWnXwcPiupoRFCs61myY8",
  "key35": "3hSJA1221VfFaoRzevYMtuavkEQPAvz5koopF27adXZWjcvy7YbJgkvoGMafBBGmnC45yU23tGWE3QydrEhC9KEh",
  "key36": "4mBpeUoJ8rfRL2DgEJEvgrHxKrsrPJmBDLxv1TxVFWrf3MfjdGbb8ZtFNrsu5QU7HFrUCNL9XDvtnrJKi1AHwQoH",
  "key37": "4uU8uV4Dcn6hNtcnSqZ5BucJKYGYPSaThVqfNGZg6RHNwHJmp5SrAfM1byUTizLjm736KaNtPE5xK6oesYJg7grD",
  "key38": "qYthVZs7TKxxR4EpQicT61FGzVA7vxCa41kS6pZ3f1aKZUPCYw8uEVgwbXuvQG2L2HjguWLfCzWSq6uZ6rhZiXs",
  "key39": "622E3AhCWf6UeJuWnw1uMM9vfqoLejZDcBoxjeVzrJT4BgFadiyHLhaNPaDimQWdfNRomoUJ2FchpQNWptY6EAD8"
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
