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
    "4Wtn96kRUECxDXSevAPwhQRKDvW6etXvivqtQiBfx4mBpSmDbzCt1EbacupZRyFF5jLjCGhzBhJJanS1vm6EEyew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMvFqmkVe3UL9DtUTFt5AWhSTYXTWmqPuZQn3oWWimAvtNKvDGGBQ6bJpGuvmbhotRmiL9uzvniQqP5FXcMf81X",
  "key1": "sychQws92MG2o2ovnahFfT77mcJ1vYXhEk74akfucvfCX3tPfvH15WVDrJzHuBWa2bNFkQDQmphdttimQGtR3zM",
  "key2": "5n6GKNarWT2NgZNrqm4nWUddrcDJGD5kKDcdmcEjbVV2ES3GTapcsA19AYE68CcWaEQEUqeUaPwSTXUiS8CYt9Cr",
  "key3": "4PzrSj71j3trtpYgAjwSSL73U7iVXT2SnPatY5voaWV8tLxyrt7TGn1HfwwKQGHauyJr2sC7NQBqakeiaLR48wvP",
  "key4": "4xmb7zevakxw7FjJcKpaKXyVEU4CRuXcC2TRSy9V7c45kV5WZTHazsA7nC5AvdexMFSZ48iZzH8WMo53gNGuRFBT",
  "key5": "4FAjqjU2iTUUfzfkkGQFXR3teGXrKfWMUbQ6s7YBDspomzEzoY3D8LtQarNoXLXP2PnLgGoCa17zRGSiohkcZdSP",
  "key6": "33a9DyPXVohc1RgQiWZKT1p8BZ1hYByvDpkUdUMN1RnDXZ3Gjwq2kHZZvNbqXjia3jYXPx6134VS2UsgsXNP6DE",
  "key7": "Xhy25q5UsfcQkNdCG2BvrawXYoLtZdcqxjhrzQBznS4CqWEPWcE6FH9sBERUQATxew1SeopRg8a4Z6xye4Jfg2f",
  "key8": "VHPDX3dKwa3Cho81y6KgXVAFkFz9jdbUikbNYnfTrYbTRqJFVQo5JfJ3C4SckdULJTwv3uzBXAtYDzentS1gPbK",
  "key9": "3p19nNpxoZMArcR8csP9kEvPbEUyvSR3627Xw4z7BVAVtimtqzJ4DTE8DZG5yYUPXKhLQLS6d1m6Qjasygdh6dze",
  "key10": "3QmxjQBd2JR39tRxXk7cm2ETBE4LWm1zSc1DwF7uvvudctX83EJW9hscY3EcEzNk7Tx3WiwryVJXCXaPFvMBia9g",
  "key11": "25txkwDrURjSsxL27kV5DbAmDMVSBWUwh8w4ahe9KY1CQAXvwQaYYejdhN4wNVNHBVSWiZoHNfftv2XG2Y7H6c8N",
  "key12": "2sTHN7Y1mhakJ6preBX7btoPPJtwfxSKCr8UvVxEvzbYfgURay66GmoNHvR76RgfK2RsVBhA7Ms4j6V5xSqiaRhZ",
  "key13": "2NzGZ2fC5FusVMAQ2Mb4uAimn9Cf5EkzQD2AU59Bt8iY3uaPCFGxs5578JkNbtNSieSGa8vjvqen21ZqcC6pNFog",
  "key14": "4dUkwDzTPjBmfZxWMkwdDeVqXNaoUKKpg41k498PNQ6cTbcMNGgN7LRkasBudthKL3vuXBLXtBW4Qhdva1Y3ooRQ",
  "key15": "57MtTqWAhKbaubh3kmSytvNoknonRTSRA1NZTL73wZNCf7L4p49Ei6NN9miNd7sTZqZ9GYcm2YBxGMmsqKuRxMpT",
  "key16": "2STihsmE69sZNYXCjwAyrxkf7uvMgtcqUweFiQZnTwFJR3Kj7NrQR61g7wp4WvxXeREzjgxmhRwwhPFVj2C8yuXt",
  "key17": "4vrpVPxeC2wdBPFpfa99H6cTnukkPtks9vxuBpxDTG4hy53RrvW7nmqpSxKn78Y18FQxehDmknqSC5WB2iD6vmMX",
  "key18": "56jfJFWr4gsmiUoNdsB62mvSQa8cR99DLwh14kK1Z9bxtjwDueP5rdJJZ21hTm1Ciw1NQ1CgLXTgw4h3BjVJr2zp",
  "key19": "2inQoGiiqq7M7sqgKfHmB784gWUyiZVXMKvnpRzZJu6kPR5KRbFAiKzCNtpsRs6MHLDasStXTnd74Y3e9eH5jTaC",
  "key20": "5Sd5Tyg3idq23NZMsvtGbxr7ZYfsX25o6vYKwfp2nFBnqi8JNNZvvY6fVUBMdMCiQhDVExN1HoJMCqR9aQmrgpyR",
  "key21": "23titUazCeKWjwfEe3Ycsns32hXTbLxv7cCckrBWmY6jMMqWvkpWDCAR9n1durKmh178gpGUcuBNqd1p61T2dgpa",
  "key22": "KJUuvQ7BcAo7KZgVFYQHQBjuRZFbW5tzBHRqTuymEKCMpMDnmVxGk4mnrYWwanzs8ct3Mi2USq1FjxWjWq1aUDf",
  "key23": "4HaGHML2r8xtvc4tkuQBvKfNvQGd4serXwt5uPQ4NnvCWnfY4Tu6cMvHWWj6EV8hYgG17qYgG2TU11Z4TVVQiU13",
  "key24": "2MyFowfqZbvkp2Q9xaEkUuKXzq6fU4Krv14RdhXpSh4C4rcmJrpxgdmLpmy5hmAwSJ2AjzkNdCCVoq8Dar5vwHjE",
  "key25": "2Y9mPi8jwFHWwsXQw6LrghQv2uqVPcnJepNnfq5QckSDs9QMwBhntgxvdNgoLodf6SvzG23rMSEX4dqK72edcdDH",
  "key26": "4fDjAcUXmTsaPM2P3i6DPfdrLBXHBYuNq1YqPLodnPaokyVHZh4gD2aM3qYU4PZmLGWQPcS6e9rzbSBfdLTRP7A",
  "key27": "4payE9XheB97Uzcghcc4PejNtKFKoqcrEYsJkJ1Rt659wD51XmYXqVEWhZBGcRFwoDxYi1PZS4w2n54smiajz9JN",
  "key28": "3dNPPkkbZRqp3bMaDjJkQAW68FXNQoMDsU3MptruJZ1dkaFTtvgSRsGs5UCge6y1aCtt6RevXARWtuXm1FYfJHee",
  "key29": "4ECF3gjKgcRoQaYvKAQpuKRZPChCVJFkMSUQKgLB86YQADGALrYZ6nyxffF6DHypcrsCFsrgLF7kzgi3ChfPk8qs",
  "key30": "2XWixZvRfz8bgt3kmLRhTkZiXTtRJW4Ni9rGGQiDHLNea1xUbKJfASAJPh5pRcP91kTLposSsPtVD3BZtSQH1i22",
  "key31": "2VYuyXXZx1QHjP1rQ4BQKGT9CdXKh8tEnff4h5jKDWeGmm22hVdgrjaPWJ4oSdBnfjivz2yeGiHn26KjE7oysxT1",
  "key32": "64eCR8FvivrVS37SEBWyBec7FMoctjWqWfeUGnZLqvTX3PcDaAMWGEJsz7PTyNtTZmfTe4ZhHTDBKaXZHmy8hfNZ",
  "key33": "52aQtUW2fp6GRroFQd4B5gVjQ3xyXSpqPXm9jkePdBGZx13ArE4fEvtZwQ5ZSKRQaCY9BKHZj6idEZ9Lf7797vF9",
  "key34": "3sDF6YJPi9sZHvpdrESvPnW3DdG2rZ4SPmraEyjG47CXetwgERWbTcoMvZxsHMQQzLfRHHWvQ7ND1KMuN2Bhi86Y",
  "key35": "42Wy2PTNK4Jy4BFvUGYh45vbtUUEL8uLtoo8GAww5BD5UQ1CR6ozJvkCeWLjp1DKKj2fReD9px7ywfBmAwVsrnJg",
  "key36": "2DKjXau6EdRKN82uQiVhGyf14PZ9r7Y3Yhk8vLa9rxCgD9aLKMzMamBe2KpqGAKcTmMdSbSptFiijaBouqVuV4Ps",
  "key37": "3NDhq9RQn3F1moQv8SiP9zxCH1FeWCPDHgHdtfeVioLgSkYvYdPPx4Rta7BFUDBGKm3x2yqSQF8QnCsXMiksnDoU",
  "key38": "hDZWfg1SU9ientYaEp7W6jrh9GqQgQsjUNc8YMe5T5Zt7MA3drpMXj3wbDvA3nRbGPxe6bgyUGqhHVkNW9ofrLB",
  "key39": "49nZFwYatd7AxhBQUPGvYNJWsF5bkGYrjMPe622yiPxeshg6xF2KoSWc9JWYckNCiWbRRdYuGpfzCRAvLeTeyjq6",
  "key40": "2Jbr5Jzg1HS7kmMMCRs1AVjXWDw2qopRDWXiiE151QQwGzeshpHfc4xbJbDpCeuq8p672F4YiCbAgEGwdUE8xucZ",
  "key41": "5yMExazLLr5W2nUKAZRjyHjVatEoNTQ1rNCHUioSM3uQ4LjyeQFchPn8kBsyspEjL6XCFvx93cWeuv4vpEZ5nbG4"
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
