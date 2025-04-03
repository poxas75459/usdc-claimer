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
    "2ANxfNmMPtemqMzxndTdWsjwqyfMQrLnWgSmQsPsutjyYcYZhPC1hk9nS49wiNi5REgjY2tNbWKrTdbiUhg3JY1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QvcMFmUpjDv6ffHbFUHMVL95u2vByCFaK48FC3W4CJoG23AZC4DHMSXWkSy5BFHJhvM3MSC9TKqUYxGysRwiYk",
  "key1": "5mNF3cD1xhtDK9hR9iwGsPQVhZewBDZ9ByAssyXn2mnjnozM7vYMLL7qm25pK4AEhzz97XjQ1aHq8x3FwdoyTYqs",
  "key2": "Ja3Q9BmtyHiNiJ384wBb9PXimpfEDmYfx7TAynYDcvg5trJXNHa9oEfb4iYyjqcpQBqTLiF2wrj8VLwKRiQ61N7",
  "key3": "5pReBG3TiRasFbREhMMANQxp424XDPC2WNAHEX1WjdjCymoYvUQf9ECYJkNA8UChAkfTZ1X5f3NFSshxDQWnksQ9",
  "key4": "E1ifwStt6LgHjNkTK9TN5PYAEcWYu6d3i7xN47yxqUUZ9WSQdMct3MDQ7QGKR3Jf9BSbbwMB7of4eA1okmaYGTx",
  "key5": "3V5c5yGdDwMtrt6ewkLpBuhMUeKupptKVaCBgedpLeXxRWQ9aq11kbaohBdFWsyDSpM1ENqG9CEbYYhdg2cW3tPp",
  "key6": "2b834rY5mfaHXZUtu5Aj21mdkoVc1biVX3aAHmbhGxZcEeHnEiX9KU3pupp2ZzypV2vtBCerKxmeFrgPr8vSXeBv",
  "key7": "4JiyUhnrjuXVSVAguns1rYMatLWhkeYKNQdfPXyk6bjg2DAa6itrFofwez9jG4w6mgkANfhPMfdD6HUVg5QY2Cdp",
  "key8": "4bqf73o62JmqfwKEy1Sj67A5A57aRcQQM1bwAByKx6g2fAFJtCEa8wrZHo5xCwzGEUxVaPD8EZdeutXTbEuHHDrm",
  "key9": "2RzQkHWAq8aVzyqnwfE2R24z37Mxvcw3YAWkSk1NGaNK7V4KbRz1ZVvj113wi3gtoK3wAcgWPqbTYf5omvsHjq7H",
  "key10": "2U81vdr1YxUG7tVqiMYNkeJmi5Mp4WQuD7UbWJYooyqpTFyfitHK7eR3UyzKWK6pQybaBsXPV9ZinPPAom5dC9Ey",
  "key11": "NfgxbZAm2gvQVucLiJZsrVdAyrdrkpjvL8f58uvZKDFgN91peDerFTJAsj7VnhrkiQpjLrvQvCKyrLNskgMsM6a",
  "key12": "3EUt4T3SseASDvvu8rCAZXvh5FXG5Q2o9XtoWApihGZjpXMnyc2nef4p24xc7xgaawo1ed3rERiRM1N6yznkUkNy",
  "key13": "59XEwR81Wpu3ES2GcA4eWqbJpbRtNspZNrtW2ZCTPuPc9Vj4AV63YEW9NQ4gXVYPnUPX1VS5xdYKKCiAZZ4Pw8t7",
  "key14": "3kNmEuuaYna9oUH3uTZ1BahBb7iS7XchdpkbXyRge2gdtuJ6qUFDg4SggEvm1N9pv2VqJbGMZFvvsz4q8TCRwwDa",
  "key15": "5n5wZuPTTd8QfB2xfNxU6NK5MjtQExF5YvSc2dybd3gSrvNmFi5Sj2RTmwZy1bWgRMYYnduG4bZUq6QGHNxyZfDk",
  "key16": "2G3TPM1MFDy4UGj3VmUnYEcUMuPJY3iS9Xq94YQgHMkUMU7WPUxrdrDEvH43Z21MaNwTypLPdEcF4NecAPsbpzRL",
  "key17": "3w3NqhkaGYxHAsQZXhxgieX33Bw6sCvjc5qCMXrwHaq5R6dN9ZepcctwuTQ1nsSS3xyr8CXYrtgJ8EX68UvLosp5",
  "key18": "5MF98G7k9z7BaeUaxVGzSZpdDVUfnxmJFbJNxBKuKPimh8CPRJYxBKLv1kjPFqDTPvyK9GGamGTXYGqdMwn6DCQU",
  "key19": "3WSq6pDKsy88kGE8KxeRPfFra5hmugXBKf4BrL69uoby4azeoyndo7vkZzY1vGYhrdmZEug1Qx79Q3ebkLnG7cx",
  "key20": "ViSwqFPqpoh1qAEGYnXMZgBoPiaWkYtGw6swkPWSxW3Kv9KgSniwamtYB4SnxWh3yCZAu7rN2NJ6vPxs5gCJqQN",
  "key21": "1HDzKseiD8QW5ZeVfrXVWsfjpci2spDNnxc49MyUu4eTvk4uYmhPoSk2oRP9dAKtmCG2Togqk6Ff3kUP8ZPVi4v",
  "key22": "5GKiptxBc78kFvvLZmq7ejiBUU11TUGdaRxJebPAgHmhAs1aXCgxs23rqEY5kDWbBMdwxfbtqr77zkKSzgDzbxqK",
  "key23": "4Yrt93zJBnJsRN3iudTbPxMdxYLHzidPPX6S3NSNpnadviGESvtvUNDgBkWXhcxXtn7QFNUbbUC32VurXSJpU149",
  "key24": "2m6Y5CC8bw8txqix2Xk9eFi4z2Zwjzyv8ZUHJGH8Qv3bsqh1dirDPi8zuyVUFVGZURrzLLnk25Ko2dL4rsFDn5TZ",
  "key25": "4rgB9RYy8x1hbrQ8hdnEWoecdEVsoGMsG3Xn8mySwjifxTicxsG7o1qFZiqfrwEfeJM2sZiURVN4fAJMpxdMpNGP",
  "key26": "ku1vYQ66nxRZ6DBJS3GeEkT7mJ3DGAyR8Zm4RKGWccjykgTMFvbqRkVutvyTgtVfG7VmuJBjWwRYVn5MQ6Ar1dr",
  "key27": "3PTkJu8Xwpr6uXa5W6DiRTuL4wGnJaeMDcchGAtyhdX4ut1bEt82cJ5ModD8n9eJGhuZvznYnMp2jjHAQqQzdGYs",
  "key28": "2Gn9X93x9HhwCtxELPUYSP2KEnCrxcjDQjgJWrkB5eYeUhKnXXUrz6j9EF487NZWX5x5ixzUWf7TP5nqFRMBYHF1",
  "key29": "LT4JaDBJqtAS2CxYzygNqxvqFTtBzMSWhxFd9EhGrKNKM2pucT1Gj7sq6PLpDUepoGXbppSXNdhB6uv7cEPfZpD",
  "key30": "2MdkAd2ZLyVHv41Cd3jSE8dUcfYFEzd3FtfVcfTtz8td7x15PoxPDtvSxRaB36MKo5SgKUhMYYu2PENa53sXk3xY",
  "key31": "3s5riVrt1zUkfZsxqHcGuLbhooZCrHqugmfsJk8Ku8fZPNib84FF8ev5JFTbE1WUTyLGeucPBBLSGh67pAttUM96",
  "key32": "5CLRdThyLVWTN25TG9vGojiQy8LnRmgJ5KEzNJGVSGU77aMXL2orNDyYP99Rfa28J2fa3qfJM7KGwH2VsiJFDLG7",
  "key33": "51F2pZAsgDKx9mFJgpJjf9SzBaNiKndDQX5nzXRGFmQL69knEqU24uvNgKVujFXDVWgiuB79mbnGn7qNQVZd5qQz",
  "key34": "5v3MCTswdmQjE3WHtk6mk3vkidtJsDFuvA6xRHVN7GR8oDJuQH14Wgniyjm9RBukPJKaskuLqU6JpE9VygK8wUAr",
  "key35": "3zQJJizvg5gwUwPUWn7v6xNFX9e83DetK8dwKb6ong9JyL1u4YQ7h2m1fHgTtijD9cvBsFaWS2Ac8EcBQE1oZQiW",
  "key36": "41Lzpxufpu5M6ZAnbFH1r7k32Lc4GV2pLAFJKeERexjqDfmhapQ6BPLWCscWEhj57w8NCFr9MEieCmtrVmeA65kM",
  "key37": "cN4FPH4VhtnY6GRFtYysDZc8p3fteXthHAWv6iYN2EdmmjsjfRRzcrAM7NxV4WQXh3yBsmTZ6wvnkChBBNMdB71",
  "key38": "23z8m3BT2oPMyS4otCsri2s1XZRmQ3CSk2H4LLCgpWndLr2iitcR114PKyKeFdxYaKM9B6cnWENts2KQkmfw1xtv",
  "key39": "26LZzjy7TYEnBC15dHk36Tsh7pRrbch6fVkDrbXQg7cdCkqhcVpLpZxmScPCLemsEijgSrV7QUNBUDUia9D8J46N",
  "key40": "5mUuLzA6wCDn3Kb5g5qMXsJpsG2cR3u9Bkj6YTcbU3DLvGL6XtUdYD5ZwdGT7euk1ASohNigyJ8qCWTHLWaXMm4H",
  "key41": "3jofnMYDfaPEENr4BNLWtdvCPbtfqD3mLMnnkAZH78CddERUT8cf5NfUaLfygL7aWHsbAxMfGbDv6f9qPLi9wFNo",
  "key42": "LMu2HjUsRQjJccRP8km1jPibPWqyTaEUw4A91xKoxpjf47sNC4A84UKsWduBdAgA8DusCMYAtCeK2uTcq4VMbrY",
  "key43": "d1W1gxagoJaKo4d9RcE2ViTn2Rgnj4HnPsXA2QMjprLTsNCEphe966TYrkXJaCKCeaYtccwbeCt24NoWD9sj8Ha",
  "key44": "3VrdnhESMneDfqFs281XYRzQ9acRpeWbesYWZwegzWb3ozPh5Z85nYwavugvWxBqPxDLpgZhZ6Rkq7SZK2JjoXGz",
  "key45": "5XmNihCAq1b5kTxKHz92kbnzDxXnMWAhpHggANLg8as9595opW5kdw4hhE5Dc16ttcdaV2GkBBdbx9FAnrCZFNsf",
  "key46": "5HWyBxvQPJv6JCtDnaVzpni66hEXQdN4dAhiF4yd13pSWDbDM11LQ7XtXASrDnkfiZS1WJDUEPri5RmW3KpMgeMQ",
  "key47": "62JxrbpEYQ659ZnfppCz9Cc7ZMVinUr5q62DD8ikm5ec9RYXDx9px5dPmhuGbWsX3kKuZz9S93r4v71tgBWWf4mm"
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
