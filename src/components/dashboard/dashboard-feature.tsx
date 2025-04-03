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
    "22uFC6wnCzugpaQJaoPm9V2Wzcin4V5RQKyozMP44jhXfbh1orqk1kVaHHQQQazSRUZxPoqcnWvBy1Yjp15c7FGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSR3swHvvf2AjgwyuSahC5gAnZwtG6mPFb9ewsDg4pyQJGXyPKKc4kn6ik8NHPWyrgKMS5piZNDgSxTx2K8bo66",
  "key1": "b9cubUf8LNBaEPr1mQS8DSmjNBFSwsUPQneUagSWWuvkE5j2YZ8kerrmTvBLiTjDfo9FsbEsJe7SXomgf3FqLx4",
  "key2": "1iEFXpdnHmTESjQ9xNHoW9Hq4SgmxNS7dYj4ja2Zw5gCSeek1taxTuuhWPnsU9ZMbMnJw59S3KgTSDwKMDMwtDQ",
  "key3": "fNfGykBD8h5qE7uWKm3DmzsfsCXFQTpRC5yxajSh1WTtkscM6FZijSgs49Dxmm2S6KysM3xcZDqztBWRZhLnAN9",
  "key4": "38b9TLYXNN91stj5LhCp7TA59AyVB6nEkGSXnCrfvqNRUchiMCQ6QLDjPbHokRBD2R8RVztPH1pkAhN8SKSLPWpu",
  "key5": "3NAYBeYLyD4ufAox86jTTstnBrS9mwSJQ7XTfSYoMoSE99vcDUFooQX3p5vZEa5fwE8KwmeBC1joT2p47LMt3uQk",
  "key6": "YXjjRGJRWWwQdvznd4d39mt4VX5cPTsDGHzi29TJFavt2k3BAnudZVibu7TsiW5Pjxa3312rCT8os2Lx8sgSDG4",
  "key7": "rhiF1WJZ5FuEyL6UgAmX7sw5uzgA1HJMPcmoB1pa3JQ3SydDzywYNHu9133pyvdx1sZowzsmrzmwft5k8uTKtZa",
  "key8": "4ZW7nmggWNEcL3Ev2KegyZaDLUgJEhpiRGwKTJgsQGfqRsSLBpyLiWrHey2gCe8vpXPCDJ4eDcXqPtdRNBjN8JRR",
  "key9": "yexj7K9o4BVFbTYojDapXwbTK6ETPbXUrk9oCegWvtToyWtPsHbC354cRqTTG5TrZgnQPkL2nrjLJixmZfDf44E",
  "key10": "5KouYMTmbDgfKdK77wvakX5XRnbLXbziDeqTokfogyJqK6xSKMJ6FXQLDUXhxLybU6vQETywxZ5DZBchEpd7eJjk",
  "key11": "QK9NHeef1PT4v17nKVa6btzEguFmCJwUq6d4amUgZiHvqfwTmKm27t7QMQMqHNWsupiYuDRgmvxKD25Z38AB34c",
  "key12": "2t2ey7kZ7kXE7Sr8NRYx39D7yTXTwqTkJZ6qKaKLELJACcJjxQU7LtyewgZVuTP3L7yyEmp4ZyMX27ZYFFnfWHyj",
  "key13": "rEhLK2nXP751HABEFqn1i4UpHDPd8ZkR6pe8CWE9EXQPd6jAq5H7TVeAuXyJdidFHCCqfsuzWRJpCbv5GKkaQob",
  "key14": "2P1aFw7eEp8ozYNXoi5H29LFobC9BoeEoPJbrh1joPzzJAjviMYbsThUoxkyqCrFZuwhF2ELV6m6sf6shxDKT8uo",
  "key15": "4fhd7vmtYvViEMHKh6RWNdkE4Lsvvd9k3yyTbrDXcSSyUw7dxVfRNuW8MoA8dUB5n4zCohuCUFFzPka3EHhbYucb",
  "key16": "5srYo6d21ZnZfCB66PNchyaqJiFoUW7SuH7gqXw9hRN3pKwdovUdtGNqbSr7fR1nbPCtjAoj6sCXc3fDY26kZFsx",
  "key17": "5jy1yaRuCLqR7bJytaHv9xzax8PeHVABnkGjQTx2wWvnV5M295dtvua5bbqzcVhL6Q1nVNyN8QaK64RA5eSAMJ4h",
  "key18": "2KjvccKv2QQGn4Q4o7EGDUxKkh6RrmZEe3mP4WbedhTDNSLegqVMW82azcNwoSVK1tAY7YiHF8H2hN1n72cwaDhX",
  "key19": "5MdY2ng93SVRz5VFwknWvn8bNXcTkSBN9cAALMKMhSCXAVjYk5S7LojixZ67gN6DLbh1LqiBoXr8LAfu37rY7PrU",
  "key20": "2w9WWQDeu8iuQiXWKcikjq5SLqQoM3FYmraYR7JRauA4gRbNUYUbGdMcjPaHUfsCpFBc1SECetD3HSb9Gw8Wy7YK",
  "key21": "3QeEeDvFbhWhRW2vjDkDXbT8bhXQWXjYX2pTBuvX34hMh4yUQScXjhRaymFa36AiAKBvrV8gK88pge7GmPwigt3p",
  "key22": "3jjg37z4vKCkRxqzQW9f6Yg3HPDvQx4JC1srAPF9nv8RP8K5ta34GEi9hSkmzLFexLpNU5XKoqbY3c9PGqn9j1At",
  "key23": "WUsmSYuSNZasaJhWTg6DH9xvfSG92c1R942EFMYgbpQpcgU3ivWdCA31kn9Ms4LDKpaCSQENkWJXskv1meVXZSX",
  "key24": "3aAt1GZeLZDGojRyCe2iYV7Qm3BNXN3a3UiXSN42zJaSsWWJitkigPciowt9Ydo15n8N5oPXPrdhXZ5xDFRYdLnR",
  "key25": "46PC83HmRtqoyKPzeKYbGExtUXd2AkEQxiA4AuY5TRj31hFDSTxCYhzsytf7N5wQrsqVEwPpvYog454Z1QDXAHiy",
  "key26": "3cAE43AKCRiXwkoENPWepn2WmkWE4q7Tyk5baAbW3fMFDA4ALkbzRVqTnwRgXH6SLSMd8CGQ9dST6zqu4CBoDgLX",
  "key27": "SBJax4PZRaHopZcgCJkFW9eDv9E5g7jR8AS9xRUBcmXgrzQYm93fQfWjeqWcGFGbLWnhyPUV3wVGDC3926jH6v1",
  "key28": "4Sxf3Zbd4YiwzVqtdKw2h4uFdS8BXrh1r1Bhkvh4FwwHBCqEKiejsuD73cPPUGEAGSvvXJ7u7EB6gbfTY1HD2GLy",
  "key29": "4PbKWDCbBtTdE85mfDVvyuf422pHGcXa4qREG2cgoa6iTLAGpj7ZrwYcR6rXXVPxtPrZ8CN89LWJLyB7pn58ozB9",
  "key30": "XBv7MqcDKwsXQttDC8Tx6WN5RPeVTNwUC4jTU1T7avPPi3ysxT7QeRu1BLEe4sHqjYrEgUXFLtp1VXiBUipA3ju",
  "key31": "3akUydNu5baCPHLqy64BuPnno9tWM5s5itS71xJHHKpXKTm8qQS3mSP5zwcNsK4fjoMgEK4MjvuogZfmA8FwMWbR",
  "key32": "3hhAqxKFtDBKca6mU9GMbNXcVopZHRi17qx3Xeji4J1PcaJenovbbLaiBRtK9a8C4GnPQuUd9vp2yH5yMvVBCvnz",
  "key33": "CNcQETJSZ11N5XcqBxEx5axAXXqszEhN65dHF2rL8UqkE9EVwuNN8gJBiYzFukwf4chEEa3Ltym7e84kS7cyvZA",
  "key34": "67mEgTCbbqR29YJqZS6ptQ35VfL4kRuZVKRqr9nZbceejVS5kjHaJsZA2N7vtZ2jdXafkbt2LNHsAXJhwTjUu3r6",
  "key35": "oJydMabrWcwLHbNfAzvwwBYJ4h59rZkrjat2XXM2Pd1W1dfH72x3eW75cnDFXGNJzKcJKxh2kSrzphFf8GFSpqM",
  "key36": "3BX4CKkXoEkMPkfhuQNA6TVEaEWGdVamjJQCz1vdhhJafZibPjbMZeqWTwk3XhKypvewfkvnfxzUd7dX4NxZ3fHF",
  "key37": "2aAnVPuaE67xk5wWbTDkv4gy63vuurYqoLSgfyYiGbdtgQujefgYhwYrZqGy5CyNgqsARNB72JZdABbQzuqXRarY",
  "key38": "cuWcBEhXHHsqLBRXkTp4P7Qawqfu64gtaerVia18TU9NzxHrNR3YYzWTHB6fp2YBpXS1HCwSdhrSyaPHgKaDecH",
  "key39": "QPieAQGzvyFrF6xweyYGMDFNRfhnfRef594zyf4FSKWDqzW9o2as9LfG3fjfjX2Sz3k2pCbpBxEdjkj3uqyp55A",
  "key40": "WrDY9ZhxUNYw1TN1huAVXCzFUMyCcuJkW5SHoEroxz4ejiGiwXdemqwkyaX71t3MbnKGymdw2ZF2arkvNC3UADv",
  "key41": "4dnuJrcdP957boCNN3WzmiQWZxz3PkKNEdK15aMBgDDepDVg81RumyzWjbqvLTMy7RjizEuVuwToRW7oeSMhm5Ls",
  "key42": "3F7QE6TRxQrpSQttcz5am9E5JdnN3WRHCk9f77H4T5CwpoCzGXPWxFPoAuTnmjYsUPHF4w1dLyGAiBmWT97zuTQ5",
  "key43": "n8cdKhYhMYmdo26JSKdgPCaKRcQpXnYZYFhyEf7cG5PRX3R9hhYTRKxzaTbAEAuAQtX7Mtrxeg4sPjkHPvh9RNP",
  "key44": "WBg66RJTYMF268mGdHZ5bW8G2jaVzhkCekA39S6JX8uPweyKQ3uAdQF7MWhJHVycWtFDR6udVETZ6c9RfpCQTac",
  "key45": "4y1xSwV9dwRVApKfpg86s2eXPGCB5PpQUVsW1QJ1BYYmzEhLda7x6RbZyGv9NFgZ8wFBKsek6AJPbMEzwVqioQJ1",
  "key46": "5ktP5Lq8AcLcyYxAGLaC9hju2U4QLuCFSAi8yTdQvffKdrX89KGnnKgpAX5P2z2gJ5qNpJCstmzJ9b39CbndDfqr",
  "key47": "63m3F33GSuv3LhKPB4dw5ZR3eFnKRtxch9VqPdwxdCYHeQiUyKYrH4Pvy4ZhpJoHv67wjqfEKPtZBc5KdKivvqSB",
  "key48": "2jnu6Q39BwZeA2BAGRb8mYX4MmTh48k7b3Vs3isY5fN2sbtDAwQV9zgY9ugsfniB8qMeX7T56CabLBj9d2sRAsMA",
  "key49": "2dKnr6ZnX3RoWNY2koGpHJKGQpQunDXfVzHGM58jvDx8Z8BiX3wt1KtXmvfQbACqSp37H9h3adgJAjEW4b7FdNT1"
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
