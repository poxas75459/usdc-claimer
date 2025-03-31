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
    "2bVcEJdVnfgb2kHGsP5S49apnT8XQ4TyEBEv1UGYpB14TSibVd6DKqVMamBzSuAy8SB2UuMbBnMEUme2vdKZS79M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJQ6md4pruygCKNemWrfYL3MnPaGB7hQVsqCUYCF8LqX4sZSSctCjALtNTQVkHvVCssco4PpGj8kPQf3yeNmep4",
  "key1": "61QymmbmqYcPBHD3oK4mAQmWzGdrtMLWnwDRCzmuvo1qcPYyJnneFdpQSmU9a8hsP8tjvA6hL5kR3Y51e1UV7cZr",
  "key2": "3iG4jDnYwvKMk2aoZ4uzcefz5J1ub9LkD56t4x1pZvZuZAnGnG3XzvvCv5NbGUeqgWau7t4S5qipCsYNNq69bmGq",
  "key3": "2tULZD46HEUyPna5NFcTRSoKEfF1SJwyDXT8Ps826nXLWiGkz1uyv9MnRiqfmVXaPgS7pD8urNLTizTgdZP7yffg",
  "key4": "oUMWHSQeUAjhXxYkN8BGZJitaJ6XoPTriQbb97VQezB8gK7Zkw378Gxm4pts1vwkp8bB91oQ47GRXsp4GuiuTcc",
  "key5": "3t4wXMEmZCXA2LCiYdH2XyxV5rfrNkMNeDw2tioeYZzY5YcLXwkYpHAB5W7o5yhUcbhxGMafzvs61rAmAtmEXLHZ",
  "key6": "CAhtWAUARtRWXPCpagpazfRD8ccqce6321UNFqodhgj7ctWwUiBkvDaDwKCUoC4rBJkHDcfmHAZiArNU6WPdBfV",
  "key7": "2ZrbYhj911TZtWqCHrrrVHNkWLxX4PnaPy5KVVprho3aQSxwo6jrNkq6hnTSe9AJgmbZC4vjo6AXZ4UbC1AzvXAN",
  "key8": "66TCcutpX46gYijByB1Wk8zo7T3sp7msx9fCXGTKAqMzxy6QC2vM218G1xXhWjoX7Q5E3gJf8bBz7TUbZkgWNwGT",
  "key9": "5u1ogEqNSk8SnsywCiZVoRs4Xpw6hGZPmfGDgCx5RyEwqX3wNqqvqGaAwactAbnHAKiV3BU5NHSz6vE8feH6uRYa",
  "key10": "5Kxqufy8tJcrbuVcDJNAuboRCgjMWzDN4fAFVAbux6e3UJhmj5oMcqNoZKGDRoGWVbGjHEswDjCVKgtg9nRj9rhb",
  "key11": "4mgHo7gtrAALqTA6year4Q6Kt29rGysrQ4hMcbDecbYfuqKHSDZFxYEjbsDaXdrTszTpp7va9sreb2yT4pD4uxMx",
  "key12": "kJNhQr3pW9Dfkkbn335MbFhpTb34BPmoHi4zQsNmbynD2ZVMEZBoRCUycrQNmSq5cN2P5zbBoXcZ3cQ5B67TBCW",
  "key13": "3gwjuoyZEq8qw3fUkDgX753PUzBwktEGcpJvSvUQPtUdcA5PTPWgW9JkpU22A1eSX9KwB78dndLaD4xrfAgoXSr",
  "key14": "4fJGypF4u5ETtNrfTMAsah2fsg43Lzq4bKHAVFoWfXm2kSQqBqwk5Y8D5WK8S3VUzHeEZ2szD2GoeHkBB9L7mmHj",
  "key15": "RdAdd5sSLin4XndfnsS24F4CUVgeykHSeGvom12fsbtozdFEJSnbBTs87i4eemGLrgYYtair3LQzS7bWcEAqHTG",
  "key16": "4tCE7L8mavy6pL4gRscHYfVUVmpaNsMPUWPGwypzQMsjr5yCSGqGRTVbh4u4YzRFQ2hzwuKtLsRYNYSjU91f9Eeg",
  "key17": "4qsJZQnDGmu94aTk26JTZxzv2PckJGJ8fKj7v9xiGJXPXn6eiRhy93nCXfTZhvCXYBb1eNTCasSse9hnQoH2TwXP",
  "key18": "5ComF5LBeammaosrMoiDoZqYgEevTDKTrL4vcuu5u5tkwvkCvbLtzWGBQP1no5eBJXMVGJviJGFvR6yBJP9CF8GR",
  "key19": "eCPhd1yyUWVrnq3zw8ASW6PY8npkHyPvmLq9A4Kn5zTHSv4ipsAbCMYVgWHZHaTgDYwHrMXDEgZHJwCW9LhccPP",
  "key20": "278gCmsUXk6pHqMmMBU2jU5kH1pE6zE7TPZKCnkMneDk5G1EyLuNtpw8RzZyDaa5C1aKY8AcYQAf2oXkafm5fdpm",
  "key21": "twPpzDPpTCQapTYpYXiouiasMs7T9uJGZkDoddxvDM8ZyLE42ABpqnao2miZoc6nhAEdfA89BeXN54tboL378Jh",
  "key22": "5Vvib2CcWtpMLDg1byney4PmgBoJbUdMm5JeBDPUJWkXRc4V53eiPyvXAe522oM8BWxdwyPK63ijPFDECEzQXT34",
  "key23": "66kKmoDJjL19rjxW2omeV8AyVsiJZZ4rUDzfAnC38dc32ozY34xkq3yhz8YtaAR1keab8oGCYG6Sq4E8XdWMsVWJ",
  "key24": "4P9PXvP3qPpqT1MQibJqrokqM2NkE39UdQVfTbpPKWdjTruFXcHN53H5T1V48nWjokrJb9PexbRUSPQBWMx4oVet",
  "key25": "2ytz1582cDa4hoZgTVSN6zL64we5nHdBGV1TkGEjyAq7JW5o5NjjfNtPNn7S2UPHh1xjxjCDo19GZHHaLdqeGuet",
  "key26": "498FGnoteE3McWbdqQUSjG3HdkKzHKuK51KtqJTDmGrC2QDVbXgYgr6ofab9F8xkjgPfkiMv3J4uLD9nncyEDPXi",
  "key27": "3S2sjbhnCss31rfybioH5UJ9wenYyjPduy8ZLc7cyKPi9ppUAy7Q6iaQ3kEpSSAip3xXbXJLAvidwZYLH8on4t6L",
  "key28": "3PmDMCgjji3Xw3iBy1Yoi5imWdSTMt7yoBgtEpV4QCZmaAJyues6BvdggfRoZt6ay3AKReXZ1fgFUmCnzWfDS3As",
  "key29": "3xhEWvKcz5JdWFBMJa2Yw177yE42bcJbcrEc3SVmEATByfhABtM7gLoA91rtBc5rintF4mRFv5eyaXo3zraz1oQ2",
  "key30": "2r1N5GPUxA9ej8HB65DhrZ6WVvxwACjcGAVRCM591imzip1U7UpCq2RaCPmRSvogJPBgAvQBH5HJrseBPRvEZNSz",
  "key31": "6appusv3P6yacoxwx8R4P8mRfsGmvZkXDfRzt9iTmaVc87ik7Ey3XKzUanHRmC5EZ6iLMpJbfSBhPWScTyiPAqo",
  "key32": "2Y8bcMj5snNbKi83Qpv7mEBqYru7bMgM2W4pLGDit4k7CsQWcbJrPDE5wgrvZj1W1k4aYA188Wr2NBHsMKQekRAd",
  "key33": "4SyM9MYYMHsubo36VeAJxBavN3LQGT4quw3av5f7nkKyLD9y2Bh1cVFQkDiy2AK8pgkX55LwBKaNGWv76in67EE7",
  "key34": "5oDZpf8JnW9b882Y2wDvpmRRaz9yx1t351ALD67NhsSF1ycPzJyeYvvU8aXX8VGKXYZGiH9Zr6XBYgt6T2zBirKr",
  "key35": "2JceHHWvKgpYCuiBh1QRf2MJAuuhYpeNPVd2eyDFx4jecCV7wfh61YoMr1cL1kZbDeqKc5QdNtV3oMXEzLi6gsZj",
  "key36": "4UYwr8tdynis6a5JKErwygaTX5ehbd6o43hXKojwsUiwe5M9hdE2jQKtyGH2AGkyuEeFyeZrAEJccMxV3X1of2bw",
  "key37": "26L9MyWnit5tTZbgWZviSGDMKQWsfK1MHXb21JyDQVgCEganeFqZ1t8U3b3GT7L7sUL2Nrefpj6yGxgirmDfoLc1",
  "key38": "65dpfv9JnBJTcmWPx5Qv3KRXwppoyrrUgm1d8p7XFDmpf9J4PyRBGj6KHvCVsHwHpwAY3AJdQtEd62az2qAXG1oi",
  "key39": "3iHNJfEAxc2pskkoGaCoqKMAtgWUNdDayyUkamjXas6qX8fEK2MDk4f5bWyL8DcNqWjJ9E1LnMoFJSgjdZbuXTZd",
  "key40": "31XBJxWj9KFCs2Yuu5KhPYj6qyL164Wndtyg8NNtbuED9zrRxY8Njxx6AToaLhkgFYPXgGg6gsU1QfhNJMJTfvoi",
  "key41": "4hNver6chUsNhxGz3596rCqfFUULUTquTV6Jtc8Q2SiRFotuk69JYbEdPmzSeRPT9iNRF3vU8a82Y7z4XSe5bEZc",
  "key42": "SAHrm6j7Ne1iWVnyD91nj2vGRBazu2fMHZgvsHPAXEbtVgUwzk4puQgqMmUQ27R215jqwELD8dvqWiGVVpEJmwX",
  "key43": "eQBtpNJzadrt8XhRvDsZEEJe7PQrx9bCnixpbYzZsi5baP5RVyNgSSV9ybBFJq3d3Znp6Rm6KcZP4YjziNu4TJh",
  "key44": "4i3MSQMefBDcDFtngkLu9hYGPgBLWqQKgwUKZUoFas6e6sUcWBBnKwf3kTpnLrJG57NFTDsmVxnYQ3fLpNVyNdpJ"
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
