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
    "4QFZ4zh9sJxDHhXjmkcTARHEzSbD1fp3V3f68bzPkMpaFu8rx3WuhM1r55hWhWzKHys6xMXWSUTn5uxrAhaqtDkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6MHBSjFmsDghe1RkE7Ji9w6RyXM4kWmjEUZcHbaVSYzc6oUDqan7KaFk65gatAhirpH5JPYBgpi65Vem1LQMcW",
  "key1": "2QXyvGq7esVt3AwkKNqb7FjZh9G2W3KdnCTAb4tTjqkHNxZph6zfuM4NS3R6cw4vivFxwPRohCNW6mF1v4mnrj9K",
  "key2": "5dKW4JFARoyQstq3waythoLefw4AL9gsXF53kUY9dLG5do3a78qPqJUCoLYACmtAGjV6yK7mwVp18WRYwVPxJtrH",
  "key3": "2RYsR7UnDG82YvSHfK29ijeW4dg66aBwAzK3v6auLrL6hdzAhDEA7G6Gvwnf438RYTPGvL3g8UAMzaXuB1RzdxQj",
  "key4": "3EdmzoEwJJNAgcZf8WpnLfetuiA2tpSh4EhrYm3TSy75McSFXxBMQNX6DKPEx2Bn3vzNtDRG2eLmht5Gmw86cc1o",
  "key5": "3U5dmqwqMT5NMH9kEVCj3VMtnGCcxpUEKz5WLv2WvUi8s3XZ7SRunVQfuD4b51ayNVHZzkTRZicWHv4vBeoR6qLQ",
  "key6": "3g9PofWYabumHTKQR5Pwy661qqeft5msE223cEnia7ZDEehYmtXoL328PGYF38LxrAjN2QC2oHCjjT8De9VXC4CQ",
  "key7": "5YfxAj6U2sCRgj6xoJcLfzbVdoKqcFZmzHoszt8u2pAkQzCgmoTHoQWurasnsZv1X8sHkFs1fyLzYCiheAtd5B6j",
  "key8": "ex32X7UxgaVVei4gFYis1zGDdJpfrA3n6E5r72VVfjv27GfZQySaiP7DBqo3f98BrH54ayAYQhnGYeGJWAHRzTa",
  "key9": "5urpHbKmxs2qHt7jUu5nUtamFNryiqAKyVJE7bV6teAiib7xQAtL36pgWW9dkAw7VaDLL4rSAjbGqccVyd91eDk7",
  "key10": "3ZVmds256VX85bGjNwHcxrTC1HtWAHHwMix91ZMdnLq2REWpqJvVbwdX8CuhkDmoBLgrtkqgheCin1tDo9GDXADp",
  "key11": "3Z5CeF6TMSa8FqgU5WogMv7XHSbNfKUa3kidvXUkLHidsKbkpmWWoPPtktQY4xgSxa1Lm2CcbQgwmy9hLT97CbB3",
  "key12": "3Ln7i7Wmx7ntaBwHajqST1KET3uTQTFtRWqdhcTcN8CrUCAGAW6yfVoeiLV3XzkgE6X7ViacHxcWgpU4xHaty4er",
  "key13": "5Cs5zjjD6uy4JeEk4nTN436KrQvQdV4F2MdvzMSgn9MwidZCPdJHsu9uNBnv8J9GRAyzJC4is5LjDsGikxLz2x2d",
  "key14": "G1fBuxxx1nAhsUgtRLxKSzNt5DEoT3sDHG5VCvBkcBaQV8P5vRQy5v2LFRy7nyVDku9PFmgiRBHKi51rBuAqMgs",
  "key15": "4L1SZTqr2fNySJT5u7ZjXt2BXGrZUkbgoJK5sKUnbzjMaVYeQcMzTLd2GuhuoMDRBXTUUpbznAVSxyiwaV9zF8e4",
  "key16": "5Jhic9EqvmokxNk8yLiWQFLYXGoV9dz7Ps6wzva5RsjUA2MzKJXDWDyqpHgXAi53WwXGDCaNoLrKnkEzVGoLPivv",
  "key17": "2T1MtnjgU3R4zLsHGb8d5rGSTBNX9nhHiFzZzos1XDPN7vZqzk6yBnHoyLnNx2cdL6DyR32VQV7ZHCvEoQL3jQ3H",
  "key18": "45v8fpuGBGbsmxgSMUMyFr9UDimgWWMVbw2QbKxUPL61a7y7dVdL6x4AHo9P8kc36yzJNpQnqgDLJ6o5QgufGpV",
  "key19": "3QBK4wwoHz7C2dC8JBDa9RWbRxe44KnWiBZvEV9mLMfQBqD1fdZ97TEYdwL2zaUQyQiTkdgogVXEJDDuSGtTDof3",
  "key20": "4bGc4UogYkQU4N581j52sG5j4a2xKJto97zasvq2LftbS2mTAKpvkuBJAeiCT6MQWTgQWLwSbZwBSModW9NS6EQG",
  "key21": "2SKkbcBqCtQ9UM4gZB6Szkf1Axu8bMnzaVyw85szFEsnoALWLbtdEHQ2yJPQaUyW6MrHmwZUkNrjk6cRQLtGKpDs",
  "key22": "4bAYDQvnnqCU4AUuydwiA9GXJG5HoXCrABV3CUahtdHqps3Yadw9aMtdK4wA4t5kgw8ka8fvob3u1JdKatn667ke",
  "key23": "4ggSRd26CupZYGgqroU3RUuusoV9uNorFeUwzJDCdhnRHQHEj7A83J8DCexCtkcgm2LfA5ZjiQXhrpH3AAc1KbJo",
  "key24": "nTixQUEo4wBaBjzXdpSd4GE853xL4tpjEFmkqTEE2ZGJN6nEfcGgaLiADD7c2E6NWHa4gaPBRMBAjE3YRL91fkB",
  "key25": "4zz1JnxCmd5nRhe7Dnn9K7xb55ic5sMUBpEbUThcrr3SjNSyy29Z1qgDNPkToCskKWpvpeE5QJHbCjmx2kNt1Hm2",
  "key26": "3dCRem9HDihUBF7ThFWpUb7fbLFnKK68Sjinim9mJdnRvxVrrkFUJhNSy2CW62zFsn1BArUmcEuaQFKFRnpgesFF",
  "key27": "XJNjwL5cJRsdKHagaeZqA6reHyjDnfM7h6T6Hj29tPM6WrbJcMcDunrvMgbh2KcmDEgAis9geF6vEBgzcZeCfky",
  "key28": "3uyH3DcaYjDyFkUp1LT54uzV8SCUmMJ5rQFwMg1nRTKhzz9j3w1CiUNpaLHfSe4cExwAn3jkFnj7a9TPY3pkGamQ",
  "key29": "cEzgTj6aff44ANvFmgdCsuPr8aYc1yAyeWTy9QvemKgRf8CAQisze31BNxNx1YqaJNkrhueLwi7weq1L4tmqs1f",
  "key30": "3Y5eXzDy45RegyeuTyX7HaCatZTNtpy92y8AbisL5uXd2Vs7Fe7vRGSJscLJ3ywryuSuPsUDnLbrYnYS3NVVFetY",
  "key31": "4NTuTkDXPFGKbd7urcQmLC6VMyZ5PpRrcXXfmW3WkUmFF751A2tFHfBj5w6pN2rSfBEMDHFBt5upXB79w2isyfib",
  "key32": "2PxDVvLr1XCUZ28VsNKAuHMJkrzTwkBmScfPw71AMnHfMTsmBc4q6kst9KXif9wA9WEMyQQvadxGf9X5izeBuFpo"
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
