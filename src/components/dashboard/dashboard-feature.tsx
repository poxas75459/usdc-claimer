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
    "5xR8MTE9gX8EkWn3EJHETDjWATbgKoxD6x2pXn536vNmY5YCwS9TAbwc43f3kaxyCUcp3fW1QAHft7FJs31S5Jji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NSzEA4dwX3Pb8rZ1qkVqpaJPL1Jw8iy7c9g1Ntbrega8U8SpFJYUXNyqRKjUibGJ32d25wphv9kWdvxeV5x3TL5",
  "key1": "2WfJTWqtG2ZEXe4aDe2WSsLNjckfgx9GcBfaoSM5Z288KbjiV2odUCFPBhJUkZBqBgAbqfMryhFRTxS4CGsT3es8",
  "key2": "5mSiUbBTmusTFiLkDjDat8QePgZNN1TBR5fmVeoCe9E8EoJXAVS9TwriF3QkKKBgncjffcuVBRT4hqXzsueXx5M7",
  "key3": "5eD81UAf7QdzZQESrgDaZ5aXwBs4kr3toRJ93gXEkfXWCoCbVJTEAP9b29vtmyzxbGokGyqyTdkVh7aeszT8Sp4V",
  "key4": "32nPhgQwTMTWpnFpWBv7KmURakyafyY1S6HhuFZ6eVkFjdsHHiYPWXWsgfp84gCKAGTnSi3PqtfskUrPkNimHugV",
  "key5": "2R7DATSQEfiSk7fu2yscyN4ccrcbSut79VSr7qzMarQn2TQbchACL77wRDfM3mbjSgVZ4udxTXx84LAykKvBBNnu",
  "key6": "2U18uuDZ6649nMj2NA8h5Son3xMM9H3efARQ8YrXB1tCPLLZhphtoMZarDVAZvteY2wpT4qeyTZmu3mKtVqZsRfV",
  "key7": "43SUt1Gwh5msL2EvSDy7MnZq6wYwRCfvoWtPRqkBRUxm11qgCjHqiJCjVk5RfYobu4wk9qmdrW3noLwQuM9yosaU",
  "key8": "27f8rAhzbcqmzuNVhzx2TD3jmWvv8GyrWZDCywETWSYdxPiYrwk5ajPZDUXDYWoyy5taEtqgnuFb34KrZvNZ4AjD",
  "key9": "2bsHWitWbfUtNEnH7dr34d1i1ogwizo9mUYSpas5Ej1Px1d8BM6ycM7AX2TuX3S5yt8T7t6VeSwDXA9L4PCSSkz9",
  "key10": "2vpHiupMCQJVNaXdPsxYwHd3bL3HuTjQdyBegCXV6Rd9CT89XC1Gs7SLWVbnCeSbgGWNFiSAzPaq6DhtURtcQjfm",
  "key11": "4mjpmTMry6kQEsZ8QRjvxFE3Hsu45uxTsp6Ps2nYArKQvHLY5qhvsmnJhhzDE352fAynR2b7U2fchS9qTmuXBpGP",
  "key12": "3Aiw33KyvmopanhvADtXo7USezRZQQVzWCKG42Pb1rzMNRbDLQsbBTuA6FWLbDsm4mNNpfHZM4hvCiD6br9xMd1M",
  "key13": "4YyFwmaBZEwZA2oR4WSsntLKxaQAjW2FEKEWbZ5KvS51ew6jqTekE4Lcw3WuBtGDXP7fyTCk1c2qnWj8ya1tgGqc",
  "key14": "2u8etazbo6JJXMkd7cT45JLJDLbikh5YC1YX2YP6G4DSTcbkuz66yZB7DoU2DptdkL11qWRR3M6o24YcqWkgSEZs",
  "key15": "dNJc93oafZNatoS5Z2749zkpYipWWGrS8x4vYBd71tjcrUo7rCoNUV2zDmDgH2FJoejSQuVRmscH17j2DkJEmD6",
  "key16": "3HA9dL6GJgvG3xJBNSuXxuZmnX55LWZ1gFjWcevbvbQ81B8Nz4jzf7ZFY2a17QuobEckbUg7q1TP8HsB8uzVKBSY",
  "key17": "3T9kWmYzcKNv5gTpspN518Qx3smL5M7cezBXknu8LQyUdBWToreQ5i6oxJjHuNDnc7iXNKDqkbw9vMm8U2EZg5TG",
  "key18": "jcuABoHieKHLFdrQ2EihdA5DbhJLAcsEQQ1gffHp5HD4CHTySWnoSrAGb5PXg1MsrTGzTHhd7ZZZrixN51oYRYn",
  "key19": "42tocwV1pKYJuBnBsAw72ttQGHpGeXNv7wP8C9MexVPXqGfpkD3xGBLERPjdJ23WQeMUJY5WwXVLY9P9XmLUyZuT",
  "key20": "5fJ1rNsZx5VPtwyMxPLvocnLScHMWgcz2SjZzNvDkiigVsLaweVUwDfQbkWhGz18Tbx98edALCz3EqhbZvGXasxm",
  "key21": "2LFgPbtjdcCfLkM68f7hGhPRjgq6LAAd1E4cnbM6TPsgP35FiToBxmsFrjRfNHA5GswZQScCaQ7RX2wyFZvuCjHp",
  "key22": "fxbKpNDD8dQjqqGMyvfTy45TH2Le1QHxSYgepWVpx1HPpkZWp7LWKuRPpxWxtxEGAKZdpKibptJwnwovZUQEDmq",
  "key23": "qgFqyv7G8MfhuBugTbqGJXymGa5CNDHYVod1UdJiQZhskZQ6mLEsECtKFz19joLVS4p19a4anHGt3sV2GpCn3nP",
  "key24": "4JWivNzDcLdvRT8xAHurW1KETa5rEE3NMTgVFL2TkU6n2aH1dMAoTn2wFaqGRX7yvyk8pBRN4atbZ2iJm9f79Zny",
  "key25": "4FFiWfRZZYUgnK49jUk4QYhaMenNyfqEHrfmUXyHcuD22EBYpoWU94YiRUSXSbTgDud2aFFLkdNHRpyRLug1Ki3h",
  "key26": "4THuLRC8feNZZwRXjBFej3LF4UhwcVZW2mMrjUEpUtt51hB9scdDWgmnXh5RoQUXG2UBTxSbbPsWgkE1b7G9p7XY",
  "key27": "57TkrYptoKXMWoxUv6E4NnmNajCktbdXAGow92TQaKU4zGP1kGYzB7mUjwqToKpwFeWZ7ZejZTp8QzZHpMoqNGao",
  "key28": "4kRNHMYMTRDS4ctGDw8VRBoJtD4WufHD8HgyaqrBhFBwmkd7sQXnui2taAJ1hpEa2V3FYiLbQB7feJPgQPn1ymGq",
  "key29": "5mEPr8kcA3mAc6iHjhHNGACWKSusXRtgTVCRzEiHJ3PLGXWTcKaYCo6XoK2nYEie8sVKN8iNXX82PFWyRtwpQyWY",
  "key30": "3vFyBWKoSgbn38Lcz5LEVSL6f6GugUi8t3RD6pJ98Xs4Exw7xMxRKQf4U54eoSeXPuY4fhbgai9wbPUaiExobjxU",
  "key31": "k2CVtnQvwLypAQrEiiATyUH64VB4gtnRKpo5zQ2TbaokrTN99ANJdKt6r4JUgguaSSD1h6EBH31HkWNVmYRD3pc",
  "key32": "5qtxWad66RSLS4Mynzd3Eb9A9mRdLHggjnDBkKsC9Au9duyqjsK4frm6njzihPSxyu8S7pCJi67jProSRgdAxxYi",
  "key33": "4WNdCkc4KhjedHaDNa6JiyE49MrTg5Zgbrmvx7fDzoVqD9vDihyXdpLnErcbGhmU1oNbAhfQ1p4xCXsYUSPgpWgC",
  "key34": "4oFURxgEZwGNYnWJnEmtrCfFWxZbR8uBKckivqhqtY4RVJQiBMyYN6tzZ5GkbWccKpmLK2yDQNr5tzjfMtdWuigq",
  "key35": "4CxMV7sZPQB3aVUs8qTjXbEsmn1QA1nvsFtASqa6ZX7XYfZk96MFK44FkfsLryRTUBXJt4fAngBYVz4Q8gsJDugg",
  "key36": "CG3oNCRbrgvMCDFtFwUN1E9f5LGbfPE56P93T5f43zhdu4fMpkhSZNBvtxP5LAVeKJnD48skbtWdNhBXzQgT7jy",
  "key37": "3EK57vwLKRQPfAFmfFFuH7xGsZz3XhadQ1izmpDRkZLbJNp97v6rivSsibJNTic7BpnkxUFNqqJBzikTmiu7TbWv",
  "key38": "Ubz7KqYc6KDHJ2BN7sxwRdBP1Y52gx6FCUw7tbJSDxWUhjTkwftn9Z8Sbpb2RiGUyLUBZFqo7LHdDDCfm4W9Crh",
  "key39": "3mhNqt5gwQ9Pgtr93F24dg342SX9ZjXqsvQ4HWg7eUNpKrsTE2p1U9nSCRcXib9FPy5PuPAQAuvirv1drVob9XLV",
  "key40": "64DvzHPdu9Quwgj8MY7Mh3JTgpg7VqFVXFct9gEsUxtcsV4NQhMK5Futn4xtbVN3AWuuLB8evgtz1Hbg7SwFJmYq",
  "key41": "2pTnLLE1qCD1hTMnyYoQ8XLTzs2STchoyDkv16UdWi7HvSHnhTko2XtukTNnwW49BySrCQx9P3JrXeYYrsj8K4t9",
  "key42": "3UrpZdFMz3nPHnaKwP1rfXtPxoQyqnokb6YF6KR5Vz3RUmnJnp91dywKjmNS5i2a4HZrwkfKcDuVDHicc5poxQDu",
  "key43": "4aaSrRZ1wuMnuScbCvfPMbjmuJMkARbPKNSStqiqCs2oEVBN51qXNr24GUJUuM8ASYznX6SP1MdnmyXuQkePRPCD",
  "key44": "5d5AMFUWewVeGNLqEwhDu1bcorNjoJEwkYdLaXqSJmqb6nf7saCYSyS4PGbB1HfXSZgmXhX7GNap29nBnDX7VtzJ",
  "key45": "5dKru5dbq8WS3AMBpH4FKvKhagKb8ps8w2T1qCkPsNUaRSt6vNpdknoDMdFa3oeEyc6UTDxsanNvbqBG7pCSyTDL",
  "key46": "4RVRiADqxF49j4Z64TeTABUycZgjNdQvefXNCR3BgaGqsgQDUxANfR3rj4S13BxYYQWe6drs4tETueRxkm6EFhcH",
  "key47": "5a1qtvSsUxkrwUPs9A8iUVfEFZnZBZGcVfg9LoJqyGuiXj6Y84eRPhiFsoeYLNMgFH3TXAdmVEbZG11LqVyLHUQu",
  "key48": "5CtPwfpUx6AcS8YbwvTVVUQrV49qZ3McBVjfyYygeg84pAdwvmdBvTW3Ay2ef17FXiYsh3MBZbNpjqMf78PZyv4C"
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
