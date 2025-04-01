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
    "4UuDDAJ1dzePKNLiifxAtrNXaaZmPMH34J3heSgHuyQz6cGhHpt5Vd9xS2jVKDsieLDCGNSXiCh2dhtxbBw7f9a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uNJJMkj7AFajN7jzbv23tDtCctTaYwFEYR8mxnRGdogk35BosxS7ujVMHR4dUSRLTvhgmHMEgrcCdJXitK79yxv",
  "key1": "5ja2cvWwu7jtYQniwzGDFgWSujZrCGg58SWNu1GhSbs3cq7KhSUBeSfqGiBLj3yUETMaHE9V8fM3pcA8LVkMW5q6",
  "key2": "xrA6YGfr3K85Yj1rLwDGf822CtuZpuPmoibZPgo4pxfgTytTAWQ81vNVZNbfe32MXNiY14PpTbbYa69H3y8AGGw",
  "key3": "QWhZroxGH1WiniX9BxUhT9i8q8Zen9a1HebgemQMdXR71MVnBA7od2zbPcRc2VNAWcAzCX4P4nGJpFgx8S21qhM",
  "key4": "BzkXFaQenALteLtHWnQdbZ4LcEzDXPerr2E1ES9hiX4Pp4bUcBcMQ9pZLP385KjNapF7FFfoa8uyqXEmKeWwFv5",
  "key5": "64EjEPeFQsQeG11zpbp3VHccmzTkrAHWZPQ7kXUw6umVB2v3WhufMGYg8N559PMZKMzyT2kNPx1dDMHMDKAchRT6",
  "key6": "GLbSoc8jN4Q1UNSeYbe3VRv9quq6RnjrLPRjMM4B5knJnF2fQP8NFqQ3iGBB1bCnARx8uCs97ViXfvuY6NWxRE8",
  "key7": "5fjJndDnCupy81n4dTqntRwXtpH7Aaua3SDEotEHAjwUPSnonWHZgJ64nVMZyGdMckoLY3pbsdrJuAxiGnsz2X83",
  "key8": "263CKgjpbPnFA5M1RWVaurwi4swL3H5RDWygWyeUQtX65RFMS7rm6qvkEWGP58oirHAW5ti59yi5RZH9fWAZszRf",
  "key9": "2gFSc8cBAeaM161c2Yzp63LggAJHgWu6MqsVX3BGAxDDgsLG6HnPZZH9n9iQjz2gzjcKJs9sPbzEPHLjcybcwN1c",
  "key10": "5JbMxQXMuV7GtYgXiQz15azDGUD89ohW5F6FhtKfQFFARmrsA3ZL1WXEo9JW4TR2m3CyxNNQW1eNukG4wRDpMs4K",
  "key11": "4rw2ddJV6TAfhS7DXPvy2iz6iGzkDdYrsHMACaG5aXqaXzVPWT1239E8evQhybkSN3esvqpWpXE97x3wCYyxoYPX",
  "key12": "4u3kftwukfCo8VckjiLxAKnq3WgFo9VnPzLf2S8Un98n5VEHEjnovWXqgDfyxbZn532Ji2G2v9y2F2sF1UvsmPTg",
  "key13": "51rekwgsFiPRkbEoEB2EFTfhZYRAjgKtA445j94spkzVmgr5XiPHbZDTrYrWN8UFYGVFia4vUsHTot4YjtMZK19B",
  "key14": "R8EHWH7XuYXP5qLj7gxkrttndUHstgK1v1xmbXbM2KiyxsvK5S7bAX2ZvvAyyfWpWdhPowfhKwSMt7fWxUyWfbo",
  "key15": "3P7Q4R5aD9SbW2iakbNXamd4wKuJAf6RtGSakAkAmWQSBxudiuDngD5W3ro5kAdunZjkvCyRvuDFKemQEQWwpzTB",
  "key16": "4qTrLDoD3xqrCn5eQVrdgY3ZqBtvae8FKU6mKHUxjJhiuEb3cLquAPhkJLAxLjU68P2bJpY8vkQQhoFw86KWYMEm",
  "key17": "2t7JznohFJjL71vL2pCzViYqkmjeUQ7Uyp81pVqVz4cHK8Y2aTCSTHoSLY9PqXacSVyyhC42gYH47D1218JHtUDd",
  "key18": "3Rd4npcGza1P7J9NwRHD1N4Z4w9eaG6Jm5gyaMzxXr5f692c1aoxk7URJiZvVo8ZoLHJm4WEzH6E4wG1QHZ8jTw2",
  "key19": "2e4roEDd1ygxArkAQ4a9N4bpMd9FUpdhD1i4SNV1YFLrbaiYYWLNHFFr4YdMoH3ia1BEN5CJ3RE5bkK6JKAcCLLv",
  "key20": "3JCR7rSzcnWA6hB7bzEVt7CCZCU1tf4ij9V5PyUiF3uT3cMqCq2jLBuiAQJvXvBKXLLRrbqmC7zkagsKQygYtyhw",
  "key21": "45X9cSUeKSMabBEgrRRZKYioRXTRLMKooucik9ah3G3X6iQDVCx7szHdLTGNoyfHSYv3MbyvUVjcnW2vm7hffZEm",
  "key22": "45Hqqtkefh7iHkWbv9ScTFBfGwfyoqoLQTSMj1pwc73MxKZMRP9xgk4ED134NsAqLJz8mZwdtU8xU8v8BJoDNXGV",
  "key23": "2LD3mq7ohqDZFyLxM2TvwU76sqZmHY5xqGiE42RqsNJZtPLXrAYf4GQKug2gYVg93Pn3CmbJUBMrQEWyLuGHykqK",
  "key24": "4vhZqwCB8JrWRZgGaRY2x8a9BxiYxTeV73Uh9PoNF31MAXStadgzQe8EfMmYHi1YqEM5GHZH43TBDJeUtVYomRpU",
  "key25": "pxCMbys4idzi1AswjuZSdwRrYuXCWzyP2nPv48KgsxYPti5ng5XqhZ4AMLRENUj9LQhKhoXeizp3S96K1sFECnw",
  "key26": "2D1jwbM9HE9281PasU8X1Fiajoj5aNVCH9Nrin8WUaHqKWEvVaJHusH5gHkRr55bpzjgDPnBuHqLa6e5Uwishj6Z",
  "key27": "4XXkzZqK4rKNcVWctbHjCMN7J1ccqfMvMfGb3wQ26bS1NDVRVTgKWdGRTds22T3FGEAfRvMwmrxdmbXmHWpbn1WT",
  "key28": "2WT21dYZc4EZZdbavqrEMfTCwDHb2VSQew3n27W3AHj1cDH8nhBaE4X4XAaGgvE6yyqCQq315DdWZFvEBgoqEnSe",
  "key29": "5pE5uGjEkM9YoV3Wc7eCH5FDL6dJvHBtMigkjRrCGLANuJmcGXD7JeuZNgFaa2WQ6PAJco2BuCqpzF8ijhdwjato",
  "key30": "2UuV24xdfsBtsd6fdGEf7NiScjB8GYaE16FEuuddkpZ2EuMANYCEPUW2kYXUH6v6f6wJZxid4bxPUWFUs2zRfSqg",
  "key31": "25ZS3txU3JgbA22ThG8SweFzMMJqiL525GF7U7yKZ3VMFWLndVu1SvEheMgaP9zR1QUzK1nMbKMds3sG3LEJffJ2",
  "key32": "eJy6ALHhztSXo9RTgREwPP929GDFBVRAM3fYUi98pKkL8ZyzuzpBZe7ZWN3kpuTM4PkRkZRMQDdQ2EhrP3jZtmd",
  "key33": "4tvsX5Y5uC2c41rUqPpgnAcRcetKoNnaw8953P9BSDKzyUZ5viqtvQiQmzFPjaQXPp3m9H2eKy6yXQGMwrQyeHpZ",
  "key34": "2aSPdB8b5HAZ38gM1EnZPYyMFW6EymLkGekoxg7RdHzmVzSCbEsUdWqAcSzuvsDyTmWSgbzwNXR7j6jS7mXonBBM",
  "key35": "3bTzHqMFo5G7NtzHLvJNWL5vUs9PpwMGFgXAqKrCUGytoKC5soURjf2d5CVQQirqj6BigvYtH6NPrmGHy2FxrA3s",
  "key36": "4iWmNY6ENf8CdMDTtkN3WNdntdBBpHDgZJFzfTJVgSEJNJtpMvSUbtidTjktK4Hrvfo4NorpsCqYWdxKw5cWdtWr",
  "key37": "4xPNUvMQxdfKPR66KBKyfrnZUvpUd7AehFMSDCLTeYL1RfQYWqdgtB4G5KX345pXTDjyZUAnTLeMgWo8RMe1mzcE",
  "key38": "61gSEQArqVPSfKGKbMYuzCXiJGrhKJQubEaiZ3gSdRqmdWZyRNbiNTAkkCq3K7gC2AdRGchbYPHYK1Fr55ttB173",
  "key39": "HCG9sonHCWjvoAgZPq9eqcVpVfBuCZwa2r1zjZyHrTwD6QsaDtYVQc7iTFPf49XxLiwwAJEX39ZG1YqidWTZjr4",
  "key40": "64wQHMPUtKWY5E3cSdtZVX4w2wXGY9oig4vQNBdr12h7fGjAgUFTWhY8qirDZZTzSfE17EyP6149TXhaNXX2SqE2",
  "key41": "3tAzFHq7NykZcw4x78AU1xAG1D71knTiSTms6t7fozJTnMppAHjdBBZcWnksvNf2Sq7AdjTV5rnNva21Pq2CjZGH",
  "key42": "5GoPKvo9EZ3ai1oofSdYkio1bziywvxLBVp2jmkfymhHMhdMouMYCQkdR6scw9cAhhJd4TKNa8suJY4kma8sgLpE",
  "key43": "24YYZ56w8UpCHXhucnMGDSWCFiFDXppbvgVXNwNhHfyvwra4E32TinTQzjsFJ9ZciXrE17AhDfYgBmG5zmrJ6GVr",
  "key44": "oP6WYLUkkmZzzyBxXnzWu1xh3pp8X6ZNHepkz36bYehReW9s9P3TgJjnHTL4cXGBaYzca1zWKTfR8YhcFEuxGJL",
  "key45": "3a4VassL4z4izG63sBA67ZcCALkj66cspCa1vR7KeeJfobzptD6Aq6pgyeow3XMebsNydx6iAKNAJXn5C7zkStVi",
  "key46": "M422N5zVhzU675rTbvFxq3MPxAGbtbYd4xtGDyzqrzNUso2QoXbCQ3LSYqX2MDnpRDkZ1U54P3NVBNjF2dZoQHt",
  "key47": "26vqCpy1MjPhvvct7aPKBauEeiX4xs5rDEM3kfGHixRarjv8iaernjAD3882oSzZRLHvo1Rcit1sQVYmPNh2rdX7"
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
