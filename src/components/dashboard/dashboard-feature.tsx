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
    "5mKegrBiTCXzFhk2onGy9w7C1a2XVsFBNHMKxu2jTKErcbLtiBNFEDDeMQzteSzJLvjJkTVAQViND199LH2P1uDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMCkpRdYZrtZBAb2ZmhvUk3VyJxXiDK4E7B2jrdAwbmywfY7q1H6M8hoRzuLAarTQehDCsYXpua6NMxpGDNavS4",
  "key1": "4dzZn2kdzUXgGBp3tY45EAvW55EtTGUKz9BHPztUyn1rqfVHibku9pq5mFcbdKJRRuhPgPcY1ibKU5TNw2VeTjKg",
  "key2": "53wRPsNQPWWLGKHTxZRzhjDzDG5SxSNhFZ5TP6s9M9KwU3gKDUiRFGzv7YNVPR2orYAgKgv7sno8NPdjh2Svm16K",
  "key3": "4oBExnuiSMCcNWzXLVk5vTXrfD2Q6G23TvRCUej879j99Pgw74XHU5NWCFKr2HcsMT23WMraJBkivCsmFnkUAgZL",
  "key4": "4USMV5k644wRaAC3TppRaJrkbogorkFS8skZ7mDmy2ZoiieKScWm1zEgeWWDD5VaYCqx3DARdiLXPHASuVdjUL9N",
  "key5": "4DCVxC1zzVL8vFnHFMZ9rFgDvYxePKKrsyyZoJVcYSG9SK9TVuPCcseP2WpHcEeSy1exRkJm4qbWyrQk4JZYj53i",
  "key6": "4dLmkhd4JrEUfeQKdhBAQPQd2rUEqx73xu12X7z6E2C1MXr78neZhMZuo4RmNRXagoNapDDu4kxevjDcUyeesjFY",
  "key7": "24P4DKQmkaFYqc4WU8ZSQh5qhS4gx2A9QiHjSzPoc59Ef3a9k9ABx8FyuXbZRfWCbFhHQVMUSycCUgS1U1Q94pDu",
  "key8": "4d6EYwNzX2L1ebugSWoQ9Ng5P28hSDHPtTh1UofVDEWaprm9zTceEkQQKSgXv6KGbqt7H63Sm6iQEQG3xRZqSsYf",
  "key9": "MGPiyxweB83q9mWxAuGRK7mf5736NqfuVCiVJYV6brizV1oHSqv871cHAtVw26BDpkMQeDJcciFADmCrURr6Lik",
  "key10": "34z6XGuon7XdFM7Y2giDSR3se5DS2AvBYArRBPPZNnEdwgeAWBTT6Bu3KdT57yfbsJmsWG9s4yFvH8U4FKL4rvY3",
  "key11": "3xQKuwkiBhePN86vEgVa4oijh6kVSr78bTvoPbxGnuK8xdG2XPeiyStZ9RKnDHNwNwttE2kXGSJJem92uTmbGxGt",
  "key12": "41rZdbBtH41YeaLX5547awHvtHoY53bGiKJXLXsCm9PTbSx8H7LPLdZGs2X4Gk5wsYAiRvBtp1ScLv3nt9TWFeEo",
  "key13": "62nCwV6jkHftvucW3ZtAwdughcLhAvDpQQVuQPzWzHU4VADdSKen392N6P5jRbRHxNsLiAGds1MkQ2K2RALigCZ",
  "key14": "YcVPhhUcm6yXLm6AjP5Vc1UbpxtWfwcVgQPY2R9hKkb4jZJpSt7RTNzuDFqo1W4n3dfL1A8piP5JepjEdQ7H2TX",
  "key15": "oMnBWQ8Z2TaWU3c9sn6izgra9ux6XKv2NqJGpfDTda5M2DPzMhkbGjZ7SqdjFdGdW9CvStF1ETsWXCX7KkA7e27",
  "key16": "2QBuQNiY1CaE3Wt6npy6DCQZXBukX5LXjwzUfbxknZWX9c7Pov7dJ3KwkF4y626y4RahGi82LJKru6fLPKfTHj7g",
  "key17": "3Xvp5KhNeZBo5dJzhsPTbrqAr8CbW2NwnuqophvQmA4sqEsi5UeQ16T9uGxep8tE8m5CJsnzinxWB2g6ZnH8PoAq",
  "key18": "4NM5hczjUCueCbg7ak1y2cF4scbfQYqEb9x6525CPoq1otkG577zHX1P72Y2UoZNQYoxDWCuoYF1FDMnVPdSH2EJ",
  "key19": "5jspbmTyxZUahuCXSoak5P3i8y6kbxzXqx2SfrkZYBs7fMgc1WiB8VT4ruC23WpSfa7htzNhiuotRYii2AEfVNYB",
  "key20": "5TiKrAbK6McE8fufTK2kiPKVaFn7VYVsqgTNCDH4716C6bUm7azBeieStW84qW352Dm6TSiHEvmSkNQk99cMDL5s",
  "key21": "eNP4jeDDBBj1EdgDrKDLQEKRqPH8qdzWcFaG5uGrtg8pmS9MFfxWKeh8H6m1AGeFGGmLaNyfrvNiZL7bpmmyPN5",
  "key22": "UnpYx2UF47VELrYzsM7W2SfCKfvCPFYkNnNMy5u66V3RgJsuL8w8sP76CexgLUTvhoe9W54PHKmWttsiVx69oR1",
  "key23": "62xxmCx5rYzp3J8m8CG6jYLwrukfHcpXBaZjSTi7XC7bwXJtDAoZ21M4PFCsmUDw2gdYksA9sLVNKBxZvDRpt2s8",
  "key24": "5UDSLPjtA2iA6HEmZWjPCC38mCwVhREE6Z1pipRd9xy6qyuH9nfh8p5b6L1VsYrcse6Hic629645J43ye6rVtYp1",
  "key25": "3YbMV7JZFfd8hME7DN9j4NPfMYbcn378XgbwZANVhoFAmnRdnpAmHCrrko6N7kp2FsjoMRPDUks6RtZVVWNYAkm1",
  "key26": "iawkyWEyAXZyi4ZkLJaXBzDDQ4bQKte7c8ApXvc98i1bMpw43ip2DLkgW4ELghJQwmihbd6RRuyUNSr2ZNdm7o1",
  "key27": "48yem8vysotbFmbi6m4KRcHNreB1QVhHA2oPBB2V1PrHGc5vKxA5RjETHeuKZug4cdRk4WESfW1BNXzwh8UAXb4M",
  "key28": "Hq3XVNjiqJkb8jEWK47vWASNy9Nrq9VRDd3UY3HU7xUW9mH7VBCLS6qe5BRDMgESdQHXjJdQbLNZVokkTTUdBDU",
  "key29": "3KHjzykFXj6BGM6EYKenJNuNCFt4GraeKfeWFCrXjS3RvuYecqxMZmCnN7c7AcVQL8ffQzzmwGKrt6PYDSUZD7c3",
  "key30": "3DWSWkze2S77Zs7wNERXioVq76ZBceCswpVBvJkQNhUVQLKC7ZJqgBuasST4tYKVibSjFtGAQtm9jR8PwBWFxmR5",
  "key31": "6oM9ipry5jcPFEoTDpdUjsHigAEYremM3CiXfASsvFjpUqFwDXCRQcTXxMLH3K5ZKVMLuXi28gfdzYnQPLEgPnR",
  "key32": "4C4PwB267D4KRjqLrztHbUEzVuCPPQRZPQNWEJQF5UR49aKR6atkWXhMAY2A9XNQFa16uzHf6rYBaQYtxPwNzkdK",
  "key33": "4YhXauEeHrfMfsjfbURK9sr43VkdMxY7tqFAbQNxG9gQpaxpXnqdYK5xQtaJTo3e9JieHh3X1hyB33zyBCJ2Pixh",
  "key34": "5y2NHWYhGmgDUhwtxfzRXTFNd5H9u8GxnsrDK6t4EHtS6Nb6YiMmvvJzWtKboVvV1wrNW4wQ7VTAnVyNjyK9qmpa",
  "key35": "mSat7b9LfPawZarnP6oJaNUY2cxXabkRKohVhuvFT3XXdhFAf9hiAnVbT6aiavFdAZ6GVHHNQmzNXjoBbZPAGhn",
  "key36": "5A7BveF7ktrgXjjbjbxmryVnAe8mEsoXE94dVS4USotb6GLkcLg5fjtqXmC8x1p43wjNUGgmziuAiTR5XxVCrgxC",
  "key37": "52djmeJn6rRSPz9jC5eM9CpgCj1wnvBRYh9XToffPapX7JbAoopNm6ftXrhXdam3xViPUHjxom8fjFYyJMCDhcwU",
  "key38": "4cqT6qCBNziUi9C1QgDwMjiuPk6KgmoXxKEsCtdx4BmBZvR5WBgLxrXggnLNU1tpv5qsEdu5z9pFyix4NdedPEsk",
  "key39": "2vtMXuE24MeoNNNqQy4kTcMvKm1ykmkZ2KPWz4yJyGTVmiXNm1n3gcqDRA3yJKwjAXRCMCstB2xcLWNUHhL4Fo1q",
  "key40": "59ChjXy11JMkqAJ8UpwRBR7D1SoJxrbKNaA5h4HMYLPfGUcN7ZXtVNcVNk8WDqkJdbkohCuXWsQ2ii446c6LJKxw",
  "key41": "5Bse76oYgDSzcRTiSL9jvNgYRn6U8ntTxEdL9ur1KjWJYxpvx7uNkdc4uzoS24nzr2QAkcTc181bTwwH1RwUNcQc",
  "key42": "3jtWiLUNdFe7z7PsmwCn8wzV4ghBAh8SgrSWGmjnSkdpN7DR6Kojy3PGmWyiJYTYuumPuEpTLq75NE31roTkpkSu",
  "key43": "28ww3WXobMiQxrytgEcZGkrmReuaaMkYcEkLG1dtGVyXZjdT49qemde7R9sLz9cntzhb9zmsih9mopcDJvsnHnwD"
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
