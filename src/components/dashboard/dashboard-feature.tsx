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
    "5FwRi1hLngCgkDqeq2VvsJLaKB3Q7TLQdRaYhWGHAQJt7PBPC3XPVnc8EFqBSZp4HGUeFk5i8LSkhMM9UpHXTUKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXv4zoe5bZE7UfveSiYFVaRCw6m9TGoDex23iMBDZqdcXwCwJzJNJ3ds4MdJUfKCiVbYJ5994ZetHkd9hLnwXpd",
  "key1": "4Kr5KbdpyMoozxjg1ACZx2fFruzGr895J3CsCJRGABbWC9uXZuS3Fd9CWqekRAxv5Vh9Zxy6K2UdTRhydB7Qxo7L",
  "key2": "22jkFQUT5aNAqxWCLm5A1T68jU5fBaAFqAL34ZgTcFB1AC44jvR4PndhMTgRym4GdgUc8DAoNWsnPCGVModJ5TT4",
  "key3": "5ZpAHRAudjqPRuKYeRn18KCTGL5i31S8r7pB29gQSqWwopKKKVUMdAN3UTBoJGjSNtrobTDGcN9r4ZgcReBQzbLW",
  "key4": "BuHJB4Rzc8vuTfmFAcgkWboTr33tbgqgkPfaQkry7oDdQuv8TRrv1hXxjDLAE2NRxRAWQ72f57bj2pMLZB1BoUN",
  "key5": "4iwZzeEKywVWqhwhYAmYXt32zPTMc26mrkFBuMNZf9j1odCVK5RMWCjypxj3eDss1sEPDZ4ECrLJe2n7A1rUpuB7",
  "key6": "JGE93k64XtduZYBYRdYvR3EUESyz7ktKcASQGLe3SSkg7CbnDYEgBzdf6V7YC6oED8aparGxdTouany8s8ayt8u",
  "key7": "4tyFj7fuqERpjovX5rwucZFXjtuxM7dC8eRSSdZ9gYY1YuU5RJhfd5ijkUat1TxtXuzyesCX2wQsStdBEt3XTiVz",
  "key8": "5xtZVKfTuN1pw2j5RDcW1WcuJZYzgd5SWoyQZb7BA8W8gwLQzEGMKSbNh7kUDxB5eRh3mwstraj6jtv1w6pe3EAp",
  "key9": "3GaVGqDyLMAzpCZpNJ8ZwMsTDE1SPcsKTYTQR1DyvyvmHxb1sXq2MYJpk2oCojzJVxPncXYiQBPVyExUztLjT6nB",
  "key10": "34zfXVDqTBZvJxka1PdyGgooWuqLs3fTNwqubuCDDiRBa9Sk5JujxbQqxjsh1Z1s4mK1h6NVoXtkWfLj1CZW61uE",
  "key11": "4jL8jsgicBVA9T7m3wCZ8NxZA7zd3xBBjRRJE1Udc5hQUeziYHq51Z6GeCMCoodGrabCPrV6RrDBAustB2dedpia",
  "key12": "5G28rujqyCyF8fSgZSzro7RdQtp32TcLmZaT5MuoKMmw55kZKmfBHDppGrnk7KQ5UPiLC18oZ6R4dp48BttWHZ1c",
  "key13": "4RZDx9F5XjNre4wuhg9eGuw3EdimHRDuuHde7esrkVM3ptJKhFtwFSF4BmVJwAWjVJdPX8qYhTJuoxBMLLRr6Hgs",
  "key14": "3T7w7Aezn7PwBz9aCaofw8mr6VgkqtAC7aHwR1eeMaMiTPztmduSzrnK16K3c88Hp1KfdP1eDKLxtoWrvA7mwXN7",
  "key15": "3UjdQUhCb2GF18ookKCe5MZ5bZoLKH9WBRTiP6dsL9quUBTzXPyp3qvCRqbgPAjTFshay8EZVpogtYF7ezyvjZTQ",
  "key16": "4PuBimY2RbSSTffQwbzcG6D7qcNhUNSLUPn4HVgPEn1vonSPmqp52LjpATiAx9fRNAp1Gu7LMREm6fCUiCyfehvq",
  "key17": "2dByr6osVMyPwf6bgV2QWRfWZUddKKu1AbxwCxvpohkSerGpaLzrXcweSBMqeQq65stXhi67y11dvHFbbn3DzmQM",
  "key18": "4Y1n831W2zpybR7qAaRU3dPBq8YNiJrUpnXCmzhKnJngkEMnyzSToJ7UaiVgpbG1GBEKyg4qG7LSKXRUuRhW5mq1",
  "key19": "r3CNKVvi82b3NBctgqP34FAJtf7zP1qFc9Kjvz1gZMvGkUwxEZmzWALbbJqCgz6DJY8swtLqzvQhNAs6bqMe6cQ",
  "key20": "4HwPs6HEXohaoUB3KX1WwPh6QHRpY6u6jntXPJmib2FB9ZuBjYUtr9feAVza7z4L8n3bnmrRz2zZfDB7PvK7GeVB",
  "key21": "5G5tiXXsaJ7DEXCk6At11MRmyTPCRruc5uQWfddU5A6sYnepyhsvU1G6cPWfNuhDXcHcrgs6sHj2k2uBY8CEs1h1",
  "key22": "4VXtWZpNqG5Zk9qmamJGw5MeeW9fV8ddkaagAxAgLvbTQPyjfak8XPz251SHnrZKLZh8M9ZDzspT48rMbUWUunmL",
  "key23": "4zcsZg3iwCsB47TKFsEzREpeW2DGkbukJ1vaN6pi2MiS792bwpFB1YrnqLvmEzAU4CTdNcixNvYPFAHfmQDtwBZH",
  "key24": "2wosixe7VrvdyfJVPoV7EowrL8jCfihbtpZW8zkJ4e1xwEJu5aUNM7S43ZodaLnWPy9hubTxSkxEiRiav8jSc3XP",
  "key25": "3ESwhj9HLxXdGwXAFYSwiT8arDdWheSyVvJnnKPsmZNvmT5UhY26hEWZdfGvrszaWbfDkvq7yiMMWTvW1aGKSHoY",
  "key26": "3BVC9ZQA3pG6PZVAqmXoQth64qbS7EunmQQ1Vb2cJGubsyCkWB2Uirg7rXx51fMYGVtR93fYzPXBADcqDzxgpnw3",
  "key27": "4FKJkFcE7M5LZjzDVkKjgHtDS3tyXHtNhyganVq1L6BSUEgNaDGyLb5b7GgvvLiUVDhDg8s1DUw2VmYPx51JBVRr",
  "key28": "5eP41uxqiWo4XAgLkCjq3fTktyfGYGzSnizDMeUFzMc91gx9QJiM6iqaDhfuxE3gB6A2U1EN7LuCXr2ZpmMtMVV7",
  "key29": "5gpTY21X7fpsj37tQn3x8KbXES3iz79ihjg1KnShLHj4N3Bio2Zak8axJLxBkWQ9ggzsFP6wnyi7qaHuJzPArBUe",
  "key30": "44T1xnyxnL4NRTimayXmGw8Sp1KuNvBRAaDsBAfoK1JthatPaNz2ArjctyMrKXi85Xti3QyNWymtpTjdJFyT9n4D",
  "key31": "4QttA8e1mTjfVRKxHVHP4RLtX9oruYeNGuaJxxn17xGeT79Cf6kjfQZYGBfAxDRSU5STZETgBfRZ5GS6b3jJcTfF",
  "key32": "3riwWArLhaRdp2L89rREo37Zc541FWsAvoZybMMqC3JNSSKfbhQoS8d6FPPE3QHoGa7uUzD9SM1dg35Dud7sGEgb",
  "key33": "4JnzLNv8cJwnz7ThJUAxNVujQnasPqyzWYgeL9mLG7fZ8G5UAjsnPURQtJuVa7xxPFBPSusCf2ukYLdV6B4PLr2K",
  "key34": "2fDXSraCtxgrzCiFoCApAHVN93ywAtgZCXbb92iBGVhDjYroNUoMuVoUM2jcvQGyGEqRbhNWeXWFSZufzgXKjyPL",
  "key35": "ort3e1zJVhUvouMgMKkYe2BTmSsCgAisTbbMgszc6BoLDEu6TTS4qjtRxLgfuse3HBUQCquzdFmw4em69w8kHGp",
  "key36": "3s6SzbrJiqG5dxXWk1tqRp22fDycJ33ycZ9xCm2SqjibuUzS9h7J6GftTQGMUk8FAQjJbhzcGPWfa6Jn7hD6zAnc"
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
