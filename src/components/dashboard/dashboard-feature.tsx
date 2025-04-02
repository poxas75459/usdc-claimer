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
    "4QVjnYDXuWxhwUWhFWCgoyp37tsQePwzxdnMz5EZyG5VVtMkKCfHctSVZ7Q7tp4Bompj1K8DVtNh7zyFE8dyrdWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pXCWb8rWyv9DdCXmUfdShRWBJPeJUKPZLQSupLAVpDYbCJHukiKZjHeSukbwgdhS6zuDduxSvXQ3wpsUVbyftrh",
  "key1": "4SbdqLPju5162Gn7q6BWwwL8h5ktPFt8i3rrayobVWEYuiV8UdvesWWTtccoZwFBjRJzHyMgAw5QKgrzCVEsnMRU",
  "key2": "4ybcdeECsK7nMFyCEFfJBzChYraWgDNLv4QNyy6MTJBfmkxEtmHHRgUki9dLuTjyNJ8p1LiaBaX28M22FwPWmj75",
  "key3": "476yaSwRbWMh9TKN6U7G8L4vCixf3mY5o3cTdC2oLt44hZCw1xnNhY8zAKcgAG4a8meAxUqDbe2sobZCM5PZ4bbM",
  "key4": "5uCDWbXykYvL6DnEKfzDox1JiTwfappYoHK2YXYW3wZwhn1LTC5rEUri8RybPjbkgkX79DiGzTpXpH9NTyL2UV99",
  "key5": "5YbVPTjaMyJbL2P9DFL69ZNKFoLtLLUxGTZVSbipphehXhJ67tRS72VwtFm6v3iGn4MADmiX7Vc3c2eqLneeAgNL",
  "key6": "2UNq1crUcsGz6FZUhqNnH11336bSYGDxSDwCe5uJ2a2w72pVg8fkFGCVuF8KseHW9iuucbzE5Q6M1MYyCM223LpL",
  "key7": "2RePPN8SFHMjktY9QE7D3QDhGwa2YXtuJmv425aSsvQLYZtx5skigVQTkhv61NGopYQxAhDP16egSmB7TQPjdtqY",
  "key8": "67miKrRFzmx9pd5o7Q4n2nhzKqg8ir8cEKGDMU3qPtqovqVf1NFpbjbYNmtq7aTmPzcDUoau2ZPhvjbgUCAxxnh6",
  "key9": "aT9YTSSQTvQYHPXujcyJMFjXRWMzsbpupuW3bEw7HYC6mDJo1r8jTjJDHUDrxYHCJYJxbkqtWaCZaeWbryGw54h",
  "key10": "26upYrxbcFRtDh9y3UPkSasNdbsrmkNUMjRvrTojvG7ejHaCRHNMnxZPyMYBJkFDwmH8q24ZCbZeM4pyPdtuQtVf",
  "key11": "2BdRZSZYPNTzAjxY5GNZ3fxmEKVtAyHBu4y5BfdYEfXQZqsyJzqdo6kzCon3saKScDMo7XHvVRbX1P1BPKvysztT",
  "key12": "3uUnbg45Lk1LYesKPVQoEtdndN9hwQNFZk4h2L7ZbXWTwtdZkAoYGS6kydxabLXkzeHoQbMYGCqRvC6JrVEggRNC",
  "key13": "2RJbDoM5TeHeJG7acBnye2fUjA1GyBH5bmoYqD3P8vHSkHpzuMEzuajbQjbaYe8vVajgPgHkevaKXu8LLbPU1W5r",
  "key14": "3kDc4BLWGKuqWsnZjLBMgUSRjNZ9z697TBQaZGYvHo5ngwuR7ttoB8JFLjz39aXw2XeADAqLFWHeLAEFCPRgtATj",
  "key15": "3VSRtjWBL1Y9nnBLAbmhNYhPRFkerAkSwNSd9tbkLB29t9otxS8myf5rqBAScTXw7JvvyQUUWcWgNjATuFiVWgnk",
  "key16": "64MA6tA6WZeJyky1Lkzwf8jU5UYjheQNcT5k7m3Rxzc6ctv9n3piidqU3BKjUpED8LmKe86U2wbTjTFHtr5367KX",
  "key17": "5t63NzkzpRGC5v5ESq2UX4geYR8w2F4cfGzCxWrET3ZE7RKPbTRAkfem1sir4LaiRbtH2xSj2eVtLgJMpRJhnvez",
  "key18": "5HQ8PdxDuiv8vL6k62dqfo59vyzEYmHjGeaRDuLp8PPN3qYKRHJJLwCAXYYDyTQCbgs6241hRGJgZ3BFLbQfNPFX",
  "key19": "5sHvSx1bG21n7oBLoAXhmjH9siCDSq1sMRMtrWtQwBMADqNyqReH3N3SbPHFavdqqmcrFrzdmXNLvTUh1jQjE5nw",
  "key20": "4E3zmCCKnBm9SZZLTW81pkz1rDbvSfuYC9YT7kCeo3J86PmHA3rWcmkpTbmvfek2fRVjf5uLpzPx9qE7s31DECs9",
  "key21": "5MmNNENCZLJeTzYs8gYkUod3PhUoA7SN7obT7wqgc5HuWc372WszZFiUU8qjc5TSruuX7Nk62FrmDpR1TWbYBw1d",
  "key22": "5MxArL5ergJnJRXwLaziRoh4DeiQNstCbWQ1rPET5DFSMRMzCER2cqG5pcJrcGy6S6nbPXe7fhimbvee4tYovsMM",
  "key23": "4zfi4WVnQo91itkz2jdBT3WcneQFZhnb5fn2xMFwN1M63tcFBBWT8yF6Xqbij3P3uYQhQctTqbZ8roY2gd1K9WK2",
  "key24": "4XjDQ71rsYDBwPTN9PnhdNNqj1dBoBLRWWoywdwwEUFKtEYBvDVUX154RX6m9xSpBL24xFzeuKBTUVcpbaeKmscS",
  "key25": "xGfjL2ezkE3BLPqqseJX7BuTXqhJdowHveSKMWPS63U3KfpzJASDe4BfYNxyKCV84LkXwyS69Uh5CYCaWCfqcRE",
  "key26": "2EWr6ZkLYP7cRZkzq4i4XC2DYxR361oi3Nc6dVxwpCM6ThYAUELVnuVvhRgoMEAQpx9HeJirr9GynUh35pbnyb5e",
  "key27": "3HShjoE2ehCTDRuiuFCCgYoRVhCyRG8objC55grzfbPD32YGnKBbgPXQUxpBSd53r8g27QcMUmNEraErDMbyacP9",
  "key28": "2GezyDbnJoTkSbPaMQwErRZQUj3BP8dudCBiSkpHcFfqSCfcAAZWB6amv74UXk61muNULTyfJdvCrkWqbRDimHn4",
  "key29": "5LGLZCeQzV964fqeBWF6nDyrEmW6pMEUFyUoEhWJd3Wjt2ybvw6czEHTV6EUYAWbUYEZJrsC3Kh5GRMzQ7w7YHPc",
  "key30": "348juy47TFmE6ApwFrQ8J9fa76iHGYMiL913ex8rQpvaC72uaHGqbCkjrLHBs5PoKdUH7tGxTJ3d6KGFkPzTBXKj",
  "key31": "2ZMZj91yUWazzFoU5SY9aHw9oPMdRFBkpNrA861yuZ2NwYpGdLiYrbd2e6Ayh3SqmT3BxnJBzjRXtXX2nUdaPF66",
  "key32": "3QUZ5dRuV6ME1Y4VRvYHPQhjCbhPUEfNAMpsSGJEJxVPYMeihZPHjz3x9t4kjbsrsBiaUnV8RqUrZDrVzC4fHTF",
  "key33": "2DKaYw4APfiqErnULV5nYJFutyjUM2mbpJ84iy1t7dNGsNSYQ9b1EKfX7ePLkpKQNmTMZavB6twut3hrjjLcuqya",
  "key34": "TAE836pzh3wZsNZUCXE4S5Bgsfd72Wu95FKkYVXKiYAireQ3nwt4NFrGAGrJxEsFo9gCSSf9tmLmiqs2gBnefdP",
  "key35": "3qR6eeU3oec6zopovsxqQ4LKrtrEUb3JWeYZjcQhDZJMgrfeGo6KWyZRmc5Jy2UpaAGcnADNfeniWt8zKf2M2rNz",
  "key36": "41McUFW5joDT6ufJw36QdX7iKmuSXwA8vnKDvSyZc2qrfNRLPxhGFMNkiF3pPkUSVLFi74fL7AzpyT3387ccjcDb",
  "key37": "4tLbg59K2estvCBjSLbpdRom3q55znExbxVGaftrCN8MAh5nRS3UwcZLFksM7eTmNHzFZKrMNwwnE3GjdKMWCnfy",
  "key38": "3bC5wsSUHpQ66DuYRDNBdciUwWPtGVE7W274vdjbUG9hZYnmDGW8ZFhUePwv5D83kewHk1oGNx6r1mSuf6k8ENjx",
  "key39": "5u4tK9bXRpWzJQ7juaSKCAefDRxJm8SXifJgeuRpaLKzzFWX1x1uf1mpsMAMupPJSURSNXx2GXyZvJDThZxxrMu8",
  "key40": "3MdTcTmFTdoCqbWns5S89dfZxRofasfSGU2pkwmHRNjHSiqDPJtgJSZuBASyK8R9cBhPgBPA4LnAZne6n4zb3MoR",
  "key41": "pEvjEmHcr6CtAGQky7gHvXUwY6H9e3RquQkT1EgvwR5iGj19HXQdn2PdySeg2BWVXCMx2DEdpvai3TBtNYZMehP"
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
