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
    "2VN5Kmf8PEQ3Xy6jJdkK4VVdnizAGXQdQ8HBDWZUdoV8eLKtkem9a2q1SURouBdDzbLTiEB8kj62c5TGdaLKw4VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXSZxJq3T2Vr7JKUnXjkryoXqoGYCEMF2NkRnUZ3MurDrKqQDwpazRpjhBpvxZMaTNiohEcVQ8VMUtfJTLK6E6e",
  "key1": "42xhwE1i6JFpXEbwvScp2EqLftdUizxkzkx7D5u83QNRUzB2yk4bmPXAWZneRU1j558P2miZRKTSQ19XSKDrV94M",
  "key2": "3oP788zDH44EHTEFR2WKwFXKQf9VeWnoS261YbxX8zuhEhGUf4JZBhhucnNspMMQBVZ2NcWm8njKNcyB5gdQmKUJ",
  "key3": "AqvoDYDo5nW7bGqeB5JLp6f2xKF9SJWRk8im5N9DJNwK9DREoJockdD8Pad3FonaCDA79UeqiDVFDMvp6YG75Cr",
  "key4": "1jGxUxaVheAg1ygT2LN6tgjU3c51Rb2W6YQFAsP4fip4NsN2wvKZUbe5kpwqkCEXgWx587vjjh4N3bB8SYfUnam",
  "key5": "3YS4Y6JE5bpmYawuDv4uD6mAUt3dpRoLYM4MgSDtERTAkHLmeRAModChekVzC3EiSZfGLhzJm2fCeMp1Kf4J8KtE",
  "key6": "2sbGJphBz6qF9TPJZBEKufom3dZ62dNKFjvFqsAeRRUiPLy8Si4TEPySVqABPW81R9g1TLYVwJ6gKAnkn77JSZmb",
  "key7": "3huNRwGPbiWPQQSQa4uK93rx3RQPJiGg9RY1GLGMso9RV1E5qD4v4XDdFvdHJ4GisJTuu7ANAaoxJJzt1nUjaCZz",
  "key8": "DahRXawVSGftB8auDz7kbUgv4HdxPBgUL9CLBVfovRCVj2vq1CBRmG9dTczbrghYzjpZU8A8oiVh3conoAz2pj2",
  "key9": "5NoJboCrp8e1x65nUryPVhp8hPL29Lpr52AD1Mqoyk6nZju7Gdm5LEV9uoqAjjXxSmqHXC1a62KKf3xvf4PvhJW1",
  "key10": "5utnk8fvu5bavgYUwGVnpRi6BiKNgLr9kTS7JYCRBwjokHbcKwEsrSpSUnb7v6EbtDfNjgLCdgGNVu6jSY3KPx5Y",
  "key11": "3HDGESo6KJHT5CEJgSAwHR6E9yTb76MNv2wfCCtiuk5pTpLAxpuBHt5X8XDRcSf72isa5YHm4gZSjKQdQS7QsTbt",
  "key12": "5d455tBcNVCs3sG9fpUAUMN12TWiywTrGM8KLfRWYZ5ZvuzK5urDjBTfU9xvf96HgaVW7m6gstyrYTLLA32BdtLs",
  "key13": "5oMWgoPa6A3uzVzgtkAgbeLmnJ2rgtTt4MhKps8ev89CMGPnssBPFZnMdzbRzFJtfRAjQGx5ZD2QcFhRBREoQAt5",
  "key14": "5URZFGXoLZRBcCuZDSM6yZ23a2X3gWphGMXrtYoeevcXG7Z8jY3rVNUn18NLcACUNA5d5RMLAM5rAxvw4sP3jBhh",
  "key15": "5AcLAzvoZ8jVJdpvkni3fV9LVdnUL3FVrczEsdXQLRaaYFdPpqiHLsRurtU29fK4bs6bK4Gzaj7fNhxv6GuhdiAw",
  "key16": "uhmKHw5bAKKQ35FYRGt34NerKS16dM7jJ9CowfgVg19jHzjXajTKeCpbzu2NQ94W94L5YqYeVGeKtRZijD574c4",
  "key17": "5Cz7UeCThQW9yD5mjCF6yuq7GHHqvopN2mLfXjvXp4t3z9Y59KfBpoFaGZK8Siox9nq1aNxNHT9GYWQwaQGCqHDE",
  "key18": "5SmU2FDBqt5157FwKpWoQpKTcuzs1BpGGpNNjY2Uu7KmnKHR9meuuHSdryAsSpUWA4megnA5XkXDCecfoUXVCeWU",
  "key19": "4iocQuetqEgPBXWfuYhwZNmc7DpuUDb6gY5a6Xjzq3HVBnuBhRXj27yxgHTdHyZrj2PdAoVZWvQiQBtDTsZckQH1",
  "key20": "3M1WdjA2Y2qRt6rnbj8nhR8xucvvke4zEH6xF9V7t2Ds1wKBBW37mwxvpeeib5N85YUmQNoMiGboDDedjhfWLm9Q",
  "key21": "nDGeHKLTUrgwZvZjFkdz92w3J5heU7WQk3YC87448Fnt1zhfTcUosimrSWao9By94zuB9q7Pkq6yjt16sDrwg29",
  "key22": "57C3AdMaS6iz1SF5TYSMxjTkVeDi9MewBaihQATKAbbmgXSMcaMTJCAf5YLwhQhg1nZgBSPKJKCk7xYN1r9mFBhS",
  "key23": "4yXVSAWCVuUukjz5xo5ncjW8W7YvYd5mBKGihAyx1VvPRWpMjaNj5uDBz2GC9sNsUUXy7o8Gw6ANLYULYowfLsDJ",
  "key24": "5GPxUc8XCqjnAijGywkoQXTTziW7j5JJeaaMuSBambkKrvnx9Z3Jjr43wBEKfJqxnk85Hhx9MQBVmGcfr8yLcfey",
  "key25": "2q5vwb5BkgXa2HEGbfHim6HTMEF5fWmx2GWNFEXBLP3mdmpTAtHdzTGKoP2SFaKzZVRqXiR7vWuLKCTNL7cDR7VP",
  "key26": "5t6qaHz2SdFgMM1XMCeqPQuVKrwqJCpN5V1nXTQeKVKCfihsVQUdPSfYRZVHUSsbLTyXCnxQMkgy7Ssh7S4TkowX",
  "key27": "3EiFGBvge9LgmLM2X93Arbh6qUBCKLjRMaW9VVYRj7LztEX1h3FV7EJzZpoLeNDUSZgdbpnAzpSCxPBWfCYe3cYx",
  "key28": "5PPCyyT2vGDqdos5huVRQexVhv3wLFyq2J8r83HLbMAd7LRyiXemXXugEzBAyhEG7FSXPDzh1BGJe7kZU2z7NJ1D",
  "key29": "61bTiN77vDjyKyG4K2kkcaNg3tQxEiB1s7D3Euwz5fB9oM2fFRoX44deQABCk6m7QpjF4o5AgoVPLGemd5tVnkZM",
  "key30": "4vpmKYVWrworNE3E7Cu7xQKSrZ7xY1ZnwkakfE5K48QwmBZ8ysJj8rE6M2f5AgrEcfjbwPPcR2zqvJzXhAi9YgPX",
  "key31": "38YxrYF51je6dRCzk7yXYk5U712onUK8vtbzbk1RxSELts2QLPqrrcqfDr2uKTR1mnDFNmTmoWLNAFey4fPfhYks",
  "key32": "3LtARZtU4wB1WmHJuFLD6BVxyoCcbJ9y5ePa3C3QZcESFZzkiVyBzMr4RcQ41o8WTDQBfCzy8tY79SynvDuqMvie",
  "key33": "3VjWa4uxGx6ouVhspkmqb9bXFUcdbZRGQoJ4G9mRwx4mV3oqogXhxFZRw9gnsjJc7HPqGKbqBePdjGFponTrew8e",
  "key34": "3Kn9rmpuqzWHu2812tJcQckziAKc8uivPaMazzK4BCd2bSvKAcnvLbVPLsdschG8bZbkcLrQH45f29xHYPFo68XA",
  "key35": "27jSwYQfXGVEuhwzq7ufvyUA2DwYwoa2WiWvd3sQzbvus2QA49DRWYSqe31Cwj7VePTvdfymmmJoke56kKdAgUMy",
  "key36": "58XW8st6NRnZ92aY1t6nhe5MsFhhGka4ps12cDGKHKtDXwWjeNVUMKsPRXK1K1CC5c5kjJNzbxP7Wdz7DRBg9trE",
  "key37": "2aWsWY9yQfpFyKQX6oiQgcqV4ZfEURta9GMFLA3aDS7aE5LQQNjHz7jQ6HNbCuRK3XJWfggkoYk3bM197hAkVtUz",
  "key38": "2qYMJkKKhN9NF9CqJNE1MMQ8TL625BzJeUDoCjwbwPafJ8i7iHy6rdWv1KVL1XkVUnmT4Mw5UxrX14ftQ96ijbkj",
  "key39": "2SKZz1xB8hKrb1kmAkzxn2eQ734rth8Seaxwk3GgNpfGESC4CsVSg5SXCCfknEzBQjWed4cWbHEVZGN5WR5GJy1Y",
  "key40": "5FKJaj8bw9jSkQe9QUEM6uXexUKuA17cm7f3FUG8PDRJYaTv56xTBvKSdcHrNXw2v8DAnXxQoFfRCfCoJb9NgV4n",
  "key41": "42URDiZxRJy2V9nTsDFg3XnwxjK31VzwvrSvM4Zy7udfsbTAMhPpCyNeiwwNQGezPX7QrMh7qpnXAZCyA8R7eW2y",
  "key42": "2PxiKyPnhY8Tnx3uJuJnCWqdkRdrvrCRa16cSX6fKAARDEgmyhUmErnLKME7iSDAXsVY3ZiuWaWo1NG8FeX9fv25",
  "key43": "4DxJGhCLU8geqtQQ9dgryDyhScJaWhFZrMVN8hvrfmPWstz6SgfoD7efTZngXfpu5WYSED3QFNqm2bveX1QViswx",
  "key44": "4kEXmZYdCgfEFKBx7heSQ44TC6KYxyCD6rwoaH88Ab6C4t7nNkp1LhjN6uSto7J5bDiH7QS8vjm7sFoDuEG1tpej",
  "key45": "3vP8YrvuzmZVLXSZ6efoYcoUei397V1DU95LMEHdKb5hzN3tJcrU34koDwsQhn8x7Huye639jUMUnhFhZBPgmRMZ",
  "key46": "rmiffPT16fakJbC1PwLrBb5KWjpkZxKSzmk8qEei2FtH5FNXByS4YgsJXvAFR2sL6S5MYZAB87GPWqErm5GvGDe",
  "key47": "4znMZfRaTTeAnG619hZiDXLMgoTBF9txVNT2Zst1JG6kqUSu3H7fWbvSmjkcwHTQvPvEKrg4hwaLY3iUz4mZhbHB",
  "key48": "VJgsNEAYF2RG4wB1QdEWLPx9YkyfUFMFP3xVb2awse3awZKGhTxoRtxNJahDnrZPUukbbqhZZujxs2AVyXKfEfT",
  "key49": "3hptiFJS8DqDgckZcG3d9Z3VbQGAYxT81DBBXXJf7HpzkuD7NzPK8BPP8kPpkstLMZG56Ey1SFcpHRAPtZnWDRgb"
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
