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
    "4Jw2Y5C322qtevfdnBknkjiuNTsSzQQ5JvgaBeWGUS78eVqc3nwvic4qqxpuoeTKpM2WW8D89uGwg53MYrtVLLJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZKXkwasMmNx2xjQwb5YG7VywraTxRK47wBamMctb3uGTNRaDkFsTNsfvy71An5AGw9mCQ5YhNLrYJZwB8tAPqJ",
  "key1": "4qk5C6JNqWA8WXr47zCwmsrufojpD7tJtjD6pTSMLEfEPj9TmDmn48Ft63mybyL5RUKJNEj9kiJ3QpMLbpt3N6ZE",
  "key2": "2EHfwUNjutJcpZhsCNZSMP4KAypTxqQrGyzVQZv1GRqHa5NA5C5r6cre4pgaDig3F75nDqobjPzmto4vZpztsqec",
  "key3": "5V7ZC6NXAqM2YMU96tA83ugW3DgAUDiBqyPxBcjwfy2W4aUwBBfDiZ5XBmZpPDR7DD278X4Z7XWmaTcaDR968VUR",
  "key4": "q7ZhZjAKNTdWMGotySswKg3ge5GUpJs1YaScBcD6jzuz3QYhMdyf5K5tnYE5Mq7m6DHEaZ52JymziGGMmjPstKz",
  "key5": "55nYjMj9MkEM5LTLy5LYzhJ7b1gHnwVGzdRFf542vgVv52scrvKyqaN6gsezft2yihsgFyVviB95juLs7Ka48rkA",
  "key6": "8bEMwJoowAbdxAVUWashrTAhnSACsGUQ2GWMHszPfPScgmN7FZGJV1Y7z6Y8G58oModzgdgYDK13jg7nDrNegNR",
  "key7": "yRfSbdHarTatLrEHxCxmCXbCJzchr4UF6iqEbooo6s1AZp6b2pzapv3LCDDNiAbZMqAtyKc1iWLdTmodqjVYYwG",
  "key8": "Jdo66Tx9vry8xgeSuSRosYBE2JgmHwHc7sLmyWL1mRGzjYWPk5NNwdz8AfyKW5HiqG6ms7GNtMAbG4nS3DNrNE4",
  "key9": "3NgiBRe7L1YMT7f1hTZW5TMQakha5JYjjxe74hLcskUD3ruX4QsAC757K3wTPGsmzDUZKBYwQaAeMCpk1x4xfYCB",
  "key10": "3KP7V7svkRCrv7pm4QZ9x2mCEE8m6qvmUQCdz7hD2WmdNcyd6i4SzfG2Ek5vaUNdgTo8z44AU9pZsV2Zfdj2GKeX",
  "key11": "5ESaCbUGr7EuXci1jBipD34gC4yCvGV4Aw5gAffXxJ81bCN85aZ8tFW5qj87cmiiSRGEgna3CaXMb89eG7MX3jHS",
  "key12": "42MmHUYToe3iSyHEk3Q1rJSgWX1kpGs6BRHXxxtBmSWNqr2yxeKp38wrZracf6gFtn45JgYwxWi57W7NKx5GoUrB",
  "key13": "58ctyKnRVnmj6iqvMo74hEHQWFf3EZsApEMdeAhnrzt6dLiPGbFJ9WKYmpNoExVNnNpwNMTPXoXwUoyoiV61bNV2",
  "key14": "3pH4rtVSsmBpJM1wSP4MNFbcJ7RQ8FPxYs5i86DHY1d9K8HHkyDqbxXtXF1zP8VTF38YoAqLvn4eiJXDzCT5Jjdx",
  "key15": "3nfYhYhXFwVTwjWX1jhhym3tEEyq5yyBcqieu8kq5MX5n7fs5fPraKEHWbHoFABypfYrk6QunW8nKjXGACPEtYiJ",
  "key16": "4y64DXMGJFP8cPgS5mLTDUXgHGJnptBTFodJZxZDb6RAo656PHjedheaCiLG1A2Y5HQqE2BaFMoLZgBUMeC3wKvv",
  "key17": "yeL5UcWPneetCViEQZZnH8v4o4ezMBEMBPzLakWuGvRbfix2yiGi9eNwXvqBAmiFwLNNuMV4AEV5JKVdNDQuUdX",
  "key18": "4Ke91Mr83RZH4BDxVQmRTZJQ4PGNj2yG8wHAU7MH9x8yAs74TXNiwUBkWbHCR11TBMcYmK37CCFXDnnTHYKWNpRC",
  "key19": "5MiuiMz4eoqnnqexjARxy6Mdabb2hDEUcGH42KTGUmavzLnqUkABiBiAqbmuKqXk22pSXPzqbUAC1i2Pqdj5z3AS",
  "key20": "6U4AaUDDRKc3LbgjH7zTKmb1SfLAeb1kpHXKZQoEyeoA467SRGHzjnjAsXcYtNTzkcAKYdiRbmuXfYUtu18k8rP",
  "key21": "4a1Lb9dTudpjtw8VNT9bpih11BSZXpop9eq4n8niv3WevajADuZT4iETpYusmFwV2vht2H3t3Md3CKew6djUsPZB",
  "key22": "2L69tRPR3X4f17qzdM7vSNf8BjguZKbnWTFU87Vk512dxgykEjjQkH5QZaxumhp3L5iiD2ctQdryg8hLbhoCXRYa",
  "key23": "2Gs7we91FFp42W1c96vhkPX55xU9FuB6YRGE3vGYn4L4fKDH9Gb5HBZiS42kgukzoYc3TxNZGqw2oBUnf81aNWRe",
  "key24": "2Y9BPbhMQCztgwLjnJZgWADX6Y9cmJrE1qSmcJ5TGBd5xs7DGMSoJDaXyqiAPtmEUdaSo2C9jnWxiF7wVnLrz9pM",
  "key25": "5t6NbDzPT6e3nMZvugWyUNu89Fhvs9yxviSQM6otWxxhmDhBVHUPR7TS8obWZ646Z9yNYZbvkVTwiKXxvtLaXXqi",
  "key26": "4k5s6Fxretssm5dWz6ZsdHoeCo5DtSaexd2Pb4LGXTTzvyrsFBwwZLfaNATN8SYZY754c8DiVxYtw6aCYDfUqP5Y",
  "key27": "5CVYxLuRLeHRgADvC6C5cCdrkBp8BxHnZqjtGNgKyX1XCkhWtg6dnX7YpuY3s9bSo6bGsdqos63f9SNLS9FkHa38",
  "key28": "3ZY4rqykUnAzogZGJRu5R396PJAbSKra5RSRLqjKTVXtGuhFP4RJuYqvxsUMszLFeCp9HBy2qL7UryYjBqeQRMPM",
  "key29": "4v5XCefmMGW4DSHdD4n7vmETe5tVn3ykKmXpYBeTT9FA2ny7CQxLMBakHzjMT3MAeKYbmCwBhrru57He4w6rmEHk",
  "key30": "3ePxa3g2zP6AMXtuDaAXuRcNQJTY7eG3cz34qwoeLeudLYf4vAZFbkJUAKFS8JdJCX6EwSHPtRJh8gWVDx6j4eLr",
  "key31": "44KNDj2orcYspYyECD21SPSPHcGNtsqXHy2UEqRFo7fkPjpSiggUAwPGVnvrc8SxSGK2PHCoC1x6kH85qzx2KfMo",
  "key32": "2ekkpqGzKrMAAdkomzaRj3piX4Bzn4Zx4M68dfctU8xd3L93V8jERAKj3hAfGY3qZWpvEfoSh6Ks95JW42nmBGTQ",
  "key33": "5QeKDgxTeMCu5KqLpVE69M8HPVFzUxVPVNScGv6U4Y27wm671yxuwA2cN13jYwCGmukaYSFbkQnzPnX14taHNwZ4",
  "key34": "3xU7U5FnorQD4Jy9tZDEQLE9BPcEvfoC1pSpPXYWz3oL1XNZD6AXuzBx8F8FstBJYhX6FB15nan9jxyqx1FdTEJi",
  "key35": "3SJrUKQPNPpz5ACUFWqvp46Pvfjr4B3YYauTMh4fRD3VMfzSdGFGMJJDNf5oiU1GUhUnouDPjjCMk6oXRipmD7cG",
  "key36": "3FnzcDirezGXujegobwQa5F8Ck5uuVzpqNdigoR8ED7FGNZ2mcEVBXDEzRy9dXdk5aKtSZsDVpxGRRYbeRKEBV5z",
  "key37": "YKosTYZcr2A628o44x32UGGTR4wVXy2GzbZJweC3VttfWgFY5NBwnxCvnbidRUBxqAEvPKEQuk8HP9GQj4GV8WG",
  "key38": "dZAuDhTDzsoB67qyhubLwjEJDKUjR6TVpfXUBCsSVUaY7KBSammb3j3cLiyhWkni8W1sxEmtMmj7MwHcdcRYgck",
  "key39": "4SVRV4sLmSL1Lgkz9EhbgS9dt9h4ZhiD9xJYLVyx4kAreyQJGBei8u8MwARjtuVMX2Sp6zpbr3oQENabzyE2w4L8",
  "key40": "5dE8BZznqdYXa8faawXg2cjbPUfqPxeD7rjb3UDREAWGUR7VhDmAdzVxmHnSo92evyxRdBZCdGPE72wCqjtJtAHq"
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
