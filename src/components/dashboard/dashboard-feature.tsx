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
    "3L5sdyDVCeEQRY15hWTfLQ9NVivSMNAxTCTXWu51PUbRs7mKjsCAoUKJWPTLSaopsxCAV4LhM2p2S5bwQ9B3Sag7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZeCESdxqktzTyCBxDvHBy6QECh12Js6Nao4ovsP76xxCqkVkcF2i8BhKaFoRBxDfBZiMd8QcziQci6PGvouQnci",
  "key1": "5CfyA2F9dMmBCHcGqisKbY3b2uWcxcbUUBQRYiuW7spKWb2JAsdVDcNBPvrRCpGdRVUzW22FiutTJP8SjUzAys63",
  "key2": "44ePMeKBrVjEPQLBTwHMfTepRwR6uRufh8bpX4LmGB1djPjTPsumBpw1kC5VzTYaxSncYWoqHRjJt17R8r5r7N5s",
  "key3": "4gv8URzTTGk8VNE7jjScvXtWtVHkqrE33SZiBK3VEaSuZzvaAB2U7kxSfAJNSqD99vJiqzQtENuz4Sf98ePVbRwq",
  "key4": "4grdiMM4pTcJoJUWvx3Zw2rPsMFSeFoeRreY8T3CuRDvJCiC47ZCKy3ns3p4aJCE4WxKDoppdQUCvjWK6JSwmsQj",
  "key5": "5j8GVqP3XBCkgbZB5J9XGHTNmCyYoBZPxXUwvDfZ5xZfQp6M9GXDPwXssfS67fXVQjqoRqrqW7Li2uMHcXXDjB3p",
  "key6": "2UdNq4K2VZxiwcJKPbgEn7eDJAE5SDdGA2cpfCfu9bULGWgd6CmAtRPNNcPrXA5DAwJtsQ94ZVSE2JhS7umE2ubc",
  "key7": "312wbaHaErg9GLPXuduNFk48fsxRmmC3kPkhUxfuCEprFYdw4y4vBco5yhNRYxvpgczeUjF9roJkkQBMtoozNgx7",
  "key8": "3Li1k9Y8QqkJhBoRfH8KwrCqFuZN7uvrARtZ6MQnXxutBQT18pKnNS1kG4mqGNc6DL8ScvtqpR3xaAvSEk8gmJqP",
  "key9": "2sc8rTYz8YGbcZZaD5RLET9c61tjXkK3B9ZUMNgntnY6MgC9GLyT65gLULm4qJmX6ymozas1YDGK5uD32fkmwCqW",
  "key10": "23Vz88ECLpjGB73mxxzwtab1AvrodnX2yG5QdA1PE7RcKBZYzvVSC7pr5JAgnhqZBusyyUcpH2LDY1zCY5RYFDtT",
  "key11": "5YJgtPUpv4XtimbQEJeGm4uz6KNtwTyXxuaSmUUGFnQASWxsEqiTbfjZAr1P7dUHJsWiYnjBQNV6ydNJ2Gabvtuj",
  "key12": "5d6Sn6TyDSPN7byuqqMzchRBraKgZQA5XadNn5g5d5GnpZQZ7aaRjS9j4MgV29FoYkT7ye9uHtC6EDcew4qPaeJb",
  "key13": "59oYwguFzDZ3yghtNKtYeuuSqyttzrVyFeTSp42dBcz8aP2nxfri3H7ReF3oEoEbsi7cXkSuDrgYDShJ5B5uevR4",
  "key14": "2KTengrGSdPg3eyChxnACFWkMhbVteVqkv8zKMSPDqkTmUiDLLUh19cNPhtT1c53AHnzJcDNzm3YBQe8K3XHiDQH",
  "key15": "4mrUMwXaAVwiYxqXTReWVraVFERzdFiZHSbR5hbQfg47hF2y2LZ11bf6G6hs945rkCFbaPscTKdkanjJr1tp2mD5",
  "key16": "2aLcK81sx6CpXcvL3xCyTUQ9UgUgbknBxAZu44EugvnU5o3co9hFTbh8ZdW3sv2NXDWZ7bcHHMtEQ6YgvoiY9Wj5",
  "key17": "3LX5ogPJiGih1A783uqGQSWVScZKBSDUVCeVmeHznMYRMxbbrxHS4M4aQdwwoVd7NHTpRMoAYDJfji4zkcCbg8n",
  "key18": "AZFfA7VcpCVFkRTkLmeZnxEfaanwMd9kEcwKdh3LmGZFR5YYrgY1G5WvjkwXis49o3iUy6REnHfBWXiv2ZtuG9p",
  "key19": "359A1yq4huqjDavzGX96GQf9jDmvwBZL1Lp4dzXg6FbpJfktH7jSuQE2z8wmhDJd8WyfLUDyR79CCaMw2VCnn8iW",
  "key20": "3wCVeZ3rFsPKbYdd94w7r4XyEYyRuUc6sYQWiAX9xuJEzon53wSURDW972LgN9AvRCjLCgv1Fb3LZ47SJeWnnHqc",
  "key21": "2ZEViDBHzktCyDa2cLbjiF2k7ugd3tT5CWyWnePss5irWhBKbbzPDWR1p2GziBrDmzi4v68RtN2gW26cTjmYK1bQ",
  "key22": "124Z2cPryuD1oG137CkDxqtova4Y41qSrSDBjqWgF5zhy5pARjiHMxVYyJbsgDrBdske2VVZASWDkoTFHhXCVqux",
  "key23": "3MPhJd4C9aJNpD2fENdjqYp2i69LthrN8UJD1wmq6Z5MbbAN6AazBsgqfAbB1dh39RDMBijrdg5RnZrywXcfuRSJ",
  "key24": "33YNhNbrgE18E6PBuyUmRX8tdHv9C3RcwJ3bQAVoo6EUQ7oiLJi89Sayk2rFMxpyyZj1mRAXZuvuQ8RQzGLDs2qV",
  "key25": "5RxwfUH8e4DMXSShVWVk4R2qVLYguFY3oErQGAbkb4HtmN2uw2wWbc1mAKkLYWE3X2UJu7VUuexFMNAcg61WFH6X",
  "key26": "5Q8Ty2mF6QiSAcVEgACyQdPA8MJuGEhLWa7EnSBe7iVE4JfnE6yKUcPNNGKupV2t4yijrBsusuvaxt6FTW2z38kA",
  "key27": "2Q9CG1dUCKRoTwAUo1gbxLmepywRFmUWAun3ymiuAdv5Vz5Sxjg9uJTmgJZVvim47saBJ8bdS348Ku3UkqRLMr6X",
  "key28": "2vbMHCyiVH6J3vXXuP4TN6Q84BntN7zdiAjWCe98WuW4Lb6ofXf3g5bCr4GfSyjxxRyEmBhcYMm836FFLvW2yf1P",
  "key29": "33nsqoTttcAoCodvFWTAQTQdsdXe4eDcgLucDUkzTZmVTu3BXy4YRerxeVfe4SYouEExLRLxz8C5nR1U4QdFer6y",
  "key30": "3GyTXeqqVGutcbbVopUumkHuGVkih8cxroXHETS1a6jwmgiLTJXdzectUgm6oYchkZgkHbfEGyLN6F7kz275hNZH",
  "key31": "32SxUk6XTQQwTCrsGwiF1JFD3xJB2pCU3GGbhyAtRkxwAPrhvRHwRKL5wZuKcBKvgozn1z37w4BaF69QYDpTBFTZ",
  "key32": "2JyhajNJyWjZq9eLMmEcU8quY2GiDVYpCa1SMxi8hTatzBRLKEFvyM2DuRuikYDK9ZzeiePKFLgobFfbWsvJA4nt",
  "key33": "37LV3ejva11ujWx623922vyVGTVi3iS8RrjGrDyMYBi7k4Y9DQSrC5haH5kRtsSiQz5LLUZqchFLttwG25PGFr3M",
  "key34": "4M9ZFde1iEYWchbU6bQjd9XcKvY583t6Mn2UveYWNhPGGEYzazCgHsVPteU5rAhjhryHnT3qfzv3bGa2rqEbxS9a",
  "key35": "2dBnc158pw3P9P8nJ9NYefWWPURkC3PmndvRqZHre4PTZyX7FjL3nRLRjxFVoLjef9vCVb2S774977GjrvR5GcPY",
  "key36": "2KNQfcZzuUMzjSSPs5YuaUHz4jFCoyMcCRWNvoSb2gc3si2BromAWKSGewCViFJY6aGu4W9qoRkenNTzeofFEXZa",
  "key37": "4HQNGQ1v7sxQh2w92498ArtFuc962eiC6cpe5eePGJsMdqJxGGTDbo88W3CXs8EtQdiBEjR3JyRc9pnT7XiMSeES",
  "key38": "4jdgR6665iSgQvzQ5cLrvd1tMGVvuy7a6rFiCaaFZYFhNDrPtE2yagRFr4fPc2ovEKeWSJY3xkWiyXjavkLEKqQQ",
  "key39": "Che7unoRdH8xfwwoRQGXG2ySaUVGPhaxjVzCrRuxqEsDZL1dbUQGUoc2Kf24nEYxJGRiwBF4bSSJkie8D3BA4dr",
  "key40": "5wVBXsfY14UaSCbVFv6WyKANqGb5PAXrybxaLQNWPcb2XWpo7GXb4idBVcU7GLih5WCRZYkbE5XTTM1DtbkpATn6",
  "key41": "anszBFNhq4xbWZyJ22gQSHMNe3EHTxn5rqJLMLeVmCLpEnGwrRBDnbZszTDHVJPsV8hLThoQzy32bScuaVYSb1v",
  "key42": "rtk3dj6MqkUiDXEvxifsdRc9D8tF3ipGjxRySv8KvbBAULfDEfdf7mT98he1myhA7ZaydKNTK3PB8SnXpkeP5vm",
  "key43": "4Bw5pbzJkBmfZrbVxhBATg59vH6PPzXMLHp6cWMUSwafcJveymmvSJZzcXzJCgGgYBBmyBp4Yt2AazvnNhgCDyMJ",
  "key44": "342t16dD6RnL9jP15Ci3ps93erMtgiRzcyT3vjrYtsE88rz2baZcr6RCNdk2XikBRoDEduW7iSukcm3G3RDhytUo",
  "key45": "2kjN7eQk19YNTsrsUC527Gz3CxVWD1MDxkGAyubvSWcL1dfeaEPBYbHpFe39BMN8NksKt95sw7gs4FZgf4VU9u3s"
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
