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
    "4KAW85dVR8zfy9ZNBpPaKyvhyifsbrrPtNX6QEBtMbDRTeSeaJ5xv4uLeNMb4G8ZaGG8cvhQL2jb68TZwMvyYnxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skV3UB4z8M6TANPsPfSmf99qXdJoqddbMUYMHEM7bvVMBU8MnuQJRok31t3DvxqTtKGq63vX2jU325JTMF5k4bN",
  "key1": "yQsRdNMKjZCefpHSLmHGv1f6LxYzx66iwPmfs7Uhb295G3PvixmxJVWmo8kzZRNWcbiso7uaMw9vyxPUKGmqNrb",
  "key2": "61bSN3giJsCqQ2KU8LCXBJL3BMktouok4LnEMjNTkcd2W8nbmX8DyngaASgYGkm7YxmSEpBJFvqC6p3hfW6kMXZc",
  "key3": "66yuZUCSVkr3adEnnb2nrhPGQUZnB48KykUgqKRi3DnMU3vBW5QDTB6rtcnBgnVS5LJbraanMCdiUQYoTd59f8K2",
  "key4": "4KPeg5xYbXv4qmkHFnyvK1BNSSZMgcD8Rb8ssGfHTVSH8oWWutUSekfGGqAbWufbVr4kxTy8gatvTo4tmos2xruL",
  "key5": "3r3gCydP5Q81ib6VkKbP2c9i2WMXSFpveBiFKNmEPzUMW5WTBsSfZA4rQ8EdkQvMLMdoaznXpEvtjg5Umjnw9WjH",
  "key6": "299HVMZCzDB2uiuheBZg3mzvhy7oYS2DQ3gg721ep7NmDa8LwjwqWaxXbksRZ9W5oCQ2ki4EkvUCMWCKQJKBWCQ5",
  "key7": "455HpZdFfBA4c1t1p17RcV7SEcNiPrLH54Yv2FUo3AkkEqbKNRMxiGpLZD8TgyTnwkRL4dGeC4VtobA1DGvvED7d",
  "key8": "2hhySVad8M9maH5xnMzV6WiFbnbByNeL3auxpFTDfN8aDhAGX7npMLziRz1bU2shWzztXbJ8Num8m7SgsW8zHe3N",
  "key9": "5bpcjf9RrS72vaYxFd1L8CYyaTxXJdh4kCMNbQiYi7EoxSyLFEvK9zRXah5P1GqUBMstkF3UR7ostQ7Pu8261F1Z",
  "key10": "64jHvk79ntqVdrkF3ykfRAmRpN1Ux2KFXV8c35KRUsdfqvM1N5cJ1fNfBPia28LZfaaxvmVF926E7HjhzEgboDqs",
  "key11": "m7HfcyUHarrRzfjrawUS6ErLUkd1UqvS6uTopxfHV45mrPHRxBsp62sGGqH7bixtEUvm6ASJibmtFtQnCdUzSZp",
  "key12": "2Vv1gsM51cGiTHyyJnVgSB3y8pCshxDXXaBJcdYArAqmjPnk94pTj9S8KB1MRKKejFmA1ERmbuDoyzjpgfKTTtJa",
  "key13": "58QNgkuVzGf3MHxgBsAtYA6KqV18zY171X5db3AZDt5w21jZKAitBp2674wSfDiwBAvk5KtvxqrhPbdBiaR4yKq5",
  "key14": "vvWtnVLobVjp2ZJ4SKohzsL2hq326uKhZhNiXYnuJUocsJcETTo7bEkNKfEqyDeDhn6PHSoiyznkofuStRSZopM",
  "key15": "2ac2NBBMkbQjtnjJV31eRjw4ky7S6mKYo45krxzchnaVq3UhjtbwVw2XxWoYv5iCyj7T84b5xT3KSYG4B5SP8acJ",
  "key16": "5H6vrikdpdaLkE6EDyga3bfvuHkLZPPmGLyphoMnAafkZosw7ejHv6LvLtbQxcqkUb1q5Vcp6zLhNRDvz2QM9T7w",
  "key17": "2GktA2V23rXfMdSEH4MWqMXCt1rEronHYZKGZa5at9voHeN12Wb6EYRdq6w9XB5G5wwYXdt3xjZXFCZD86ZcBnLE",
  "key18": "4eSYTiBNvz1nh7jaJ7ncZE6UvXKnzVDSAiri9zVMZzYLs4vQVL4c2RAVVzNG6ptgoQ5YfS7HNp3cPGJSkkQWujwK",
  "key19": "5wiutLgVD6td2QwaAGrndvjHuqZV3NtV33CmopPPWe89uwCdgzFW44JJS2s9g6KPLquYKNhYmSVSC7AgPmvMEZPA",
  "key20": "32X9KH8TxHcrGmFEJRkxakaknUmXHn71H1X7UhjifL8UCceqWMkjeN41nHmGv9YNinDMpRomCrZMT5ZdiGhY4TAX",
  "key21": "2RNxq931aaXE8mWh5tTc7xcCEimxgq4KrL51qTSNYoSaSPdE41DrkErmHR5cy5Z9S8LzFVhFvQ3ctGeBPJJcyDB3",
  "key22": "2tJLpBxKga7efbCY8CiZfVh6cEUebQXxm8RrngrdM587WtqgX8xHTB7soix6jHEaC6fPoBT9SuukGSjjWe1KgHyk",
  "key23": "7GqYMMcUF78P2iiFkwXxjBpSF68j64ACK2Lm68MPETc1HqPc8FfFijbNf9SEiQyqyRHnFtqzzyafMX1AVGehcSK",
  "key24": "3Whi1QBGWJ7tC1imTNEmgEF3aaLyBqF7RCZthkzRzqJx1CewEKh8siNEEzVTgavrpxXsERAi7fazsYoWuxxikdTR",
  "key25": "2ZMKEhMNwx8WVQLNG1ox1U3gqsErWom6CdQ4oqoUHDeJhBCPn7wAZwKqTtNUfUByj4NCQDCxbdMzDSgAWfiERJ8F",
  "key26": "36NMuzso87vUeXPk8XzhWX27tetsYppsJcYr7xDuYL7umkvchX7XE62xh6bQ86RQ6DhBEF1ywByEpphvMQF9YDHY",
  "key27": "y573nns1y49J5se9YE3nTwPejy5idZ9P891EtTjvXrGuqBGzVv3WijVNEZm5HbkMpG5QM4iqkvcZLqCVksAYwvM",
  "key28": "pXEPnyWvmkRasd8Gvhe9GS6EDtuxq6ajBdJEPodVs4BEj8jymoTne6fgjJcYBSVF43BzxHRiiyDUKnzfRY2VUU6",
  "key29": "3APas27m4DxMJ3c8f78L9Tr3uYKyoXtp3UQZCB3BbU35ao82ZGwt7nvkexfDFqdPoqAkQwCueoFa1582MhPKneva",
  "key30": "55UDp4bCqfKLbTrfCeNhEdZQJQX8QBwuTnCXccCQiEb3d1MBfsxg15rXyiaUGs5bhHsf2rUEndtjRcoMYbGYTNHF",
  "key31": "5VPoRhYQw5xvdrgPPWWQGVm3NWfHPTGYoaXkvNMzCqZsDKVqAC1b8yqD8vt4NHqVi9517etFTyJY3Z5jsWzNGDMR",
  "key32": "2CD2wxhYaaizyvmNjyCuprp7gjKs182XVxigwrNDgRBTfZqxR4JPSgNb6h7jP8P5K6moCdNQ3dt9Wg3VqGjaPJHn",
  "key33": "fuod2MaVX5dagoxR8SmKMH1kuLC3hPTyurfM7syHd52C18byWisqF3EhyCRXZHS6VgkibJmDGpBvUHnkja8Nm1r",
  "key34": "2bpF2bzAhQ7NDAv4EBvos6e6TnFhhr2uNdudbXB8QqU436BjgsFtWkJhRqnQD4qYCXgkUzfZPbgLTaG7wAvMJCDs",
  "key35": "RSw5kA6M53ZnePHUD7x7rP7SBpyG6EYzkFPC4gWFAXSnpHPVGUhPT7APu4tKyq6AuxCV5gowaMyE2ioB8KzbDyU",
  "key36": "3eJHJ8KVHFygoemD2UvzdYpm2vDbUsLo1svqjYTBMv7nVZ5p1y4tZJW3y9gy6pP3UM8CfYjndbFo6o33BGm27QVb",
  "key37": "2oJfDcjeVwgQ7PRHQW22stsc6rcC3GSRvU1yd23hEsjTdfNb2Gn8uXeUVUFZXWxNCehgDyYMAEdChM135kPmHq8M",
  "key38": "4eorkVbLB37Tyx553E6GKqXbTDHFv3zgWbgXWbvB1wbntU5Y73fL7gCh6cwQuDqoGk3JKje8LQyFMP3tu4ejoeQV",
  "key39": "4f62mJuLMS4gbmy9Qee6QdemLtyJvKNKhriPZEGznGJH3LqWeDqMe746p8PaqitzYyt7zPGksNvn9ykfpWU7aVKs",
  "key40": "3idhpxygmyHopuEm3QrdkgoYtUayhZWTeHs8XyBbTUXteJ4gUzCGcbHBgmancH6SXKw4pcQGYveCxbPKqFZSw4ei",
  "key41": "2mSdSMK6kTtwcPcScEB91eNM7Hnziz3g4bwgr3kCd7rSzXZavxmjuhJSyT3Vuq6XdDQTeZxTLaouPcYEePnbm7kR",
  "key42": "hFSGUtjckVbFSk9ovf7AGpAUBm6EKWaPTnBtp55m2oxAgJMpwJ9z4Ac6huDDTahRZBLMXdkcQgFjQaTGW8Fb8b8",
  "key43": "4Ebo3JdBHhzqACdRcFW8PXXyK4Aez14FYoNwnMsTQPWz4WDpiMCs5DgV4JSjfoieGRmZPgxHQz7EmyM1PpqQEzXC",
  "key44": "2irPUFbeBirbSNNygwhSrSKnmCZNgKBHqpf54DcrgSa6DWNumjU7cZTZQKFLcTestksQPJiMcutH5UQXMdn2Lzxi",
  "key45": "5WTimMp2Nb22kn6Bx86efawiMtamhzotS9THhiKi6HoMzbPevXpHommT3NjvjmRec9z9mht7tqKQtvdtV6srvzVJ"
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
