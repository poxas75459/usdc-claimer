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
    "oNAuMVpEs8vPkQ8Sr55bgtNuNz646dCtfe98dguHrvQWUrHcmHqoKe1f9sexizjbTqNjp3Utt6eRqMxthWH5VWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gDJKdAGph1muBx9YVwQv6fcizFY4dZxfxbiUtMsr1oRCUJ1wFFEqAbhTaHvRAxhz6RXH1Ae7xMDuYEoLgpdABg",
  "key1": "VeDg84vGFK9PNv3CGZ5VD9JbUVWkwSo75Ls2yaGTy4sSTd5xZfDJ6ZWm3pDqQKdTgEvrtcq2bCDfc3eaKMQxqG4",
  "key2": "4tyQzj77T1BZw3hRjbLWNe3c1BLd46FfudEYVg9LoNTGgwnBh36hKWskoF8rKRLeVjzCTcXyRjW9pd4seyFThEuN",
  "key3": "4N3BxpPqXVc2bjoTWSk9M2YqyJVUzFtSrxmruEstrkciEXHK5esmZA85uKD4bAyG8kr8NYS2J4E9g5CPBojGb9V6",
  "key4": "myNHXdACuo39TcXyFC8smXktfEvdRU5WEnnjT81xT5CHADrHe8b3Pnqcjs3pP6EvwJ69mcSxoeDhanQDukgResK",
  "key5": "3VmNhBC1MkkQucYHzP4mn29AoMiqLVQdoTe9h41AjRVR3Rm4yJRHf3PDDitWw5fan84nQGE8fPoFL2xcZQG5dUDC",
  "key6": "5Esc2QNBCo3aabC2r5WopMxdoXHiYdtXtYhTWEBCPbFtPv1Ci13d4X3yqKkcfEvE5TA8fa4KM2sPSgZqp1Nfzd4C",
  "key7": "3oP1RuKz9hJK6h8YUAmTDqSTJ1wqWzVXg78JHCBMkLsZvJa9kFfkqgmPSXMbUctQYJCTgvEVti4GPDnfMdGTTnB8",
  "key8": "2cFcMxXh1LvWXkRgui1aoajZEd6FwM5hUWYAnyz38yydJum1qYDd9aNtvSFrDNGBdeQdcawXNeYMmSBVqnychFBM",
  "key9": "33FU9M1UbnyqiDsDSrK8QgdkFqFH9TsXK4LJvUDwqxbLP62dxnYYqy53NV3CwMz1YjxUW7Nyue6qjUeDRqHRxA52",
  "key10": "3NWsASr64J8aDMVSh26ot2zBQU8hoD4Sazch1T8PcaVUdtNLyAXsW6BVDFVSCY9g2R4BSt1sS4smvXpHvQPicb6E",
  "key11": "2uJjqBGrTM4JYFao3rJQRbtCJkk4XkTLfdtrm19GN1GjnyJjoNy36N168jfPDQWpqpoENhRMaSLh9GSchCpFZiTZ",
  "key12": "Z8p7tmQZcMCYcVehZYiPJ9pQsnKDgwRyNu43oEnhYYw3XKD7Ks5Mm2Ej1PYSpFWuzdZj8DkNWUBTRKPCbf13ZR6",
  "key13": "5UHkw5ED4a8r53og4iRo7kxgfvxWQrnf2owitdbJnjmn8nDBdbHLHMR9qGg4z2Xp8t1JbN3fFjTPP7W81m9rVhyb",
  "key14": "25CkE6oU2nwvXxK61WZxEoaisEfKESk4vVrj4mEzFytGJ5KKRHCBnSQhDMqEQSrREFGgPq73PwWzEKuXFnGmeHp9",
  "key15": "262kS1JjsEjJZEdUUp1fNmegx7MwcCRsAtATENQYg58PS4hLvaMihsSR7HZWRwNefXVU6wDHEJQBnyNZ7NdLnSLv",
  "key16": "3ARaa5wmS4guaWD2Dd5ubdjn34euuqNNoofEQQFbrNEBZhVx22uTwAvrKtEpPskhQFD1CC23Esiw1ZuR16ifXzYC",
  "key17": "9DRjEc2PP2QfTfDwobyuKQoBs5TsoLPmW3r666HkDddvyrXCLGhpaiUevMV9qumob1yS4bFcxyfRhdZpL1US6se",
  "key18": "65xhZTNtTUV9TGiDwoEYffY39sFWZypvvkpRLCuYn3WEKWSzfS6Ac7h4HBE4TV2xwGKUYGx5Jr8ZVcvSckWyLJGZ",
  "key19": "oPXWPiUhsKEBsEaduc717F223cU2D5ZP4LSuChin15Gpus2gMuLMWVxZpQiw1opr1DSFsyASQDrfBbVZ2DWRGEP",
  "key20": "5UhCofXyiycB55cicBEwfa6vkNmbUrkfRPETo1zNrzUZqT59f8vnPB14GLRtGLqXF7GL2YcjFLEnRBT2RyZqNCM5",
  "key21": "SyFwauc1QEDtjqge2v14zfTyw8GyXM5rHuNpt3vFu5chjGZnR5oeCYcWvm3C2utBr6em7YjU6KeotzxXK7g3hdp",
  "key22": "5huP2ZQNSt34zXiFtnbpJt5pxc9AUV1mCqoiFhvRp8yp3u6hCmvVU279zMAP2XmAGFzFYojUC6NnJX6z4Zz9yi3y",
  "key23": "7Wy8jzzj1pb7axnNZw1ruBXnYfqvNkMDFMNT8QZ1ZLgCUVTc3rujq4jGQyY3HG7BGApmLKphRpqEwmhhSCnrPba",
  "key24": "yzR8bBA8ifPaGRfXvVeXqAptqeHyugxd6KDGJnFau3VJzkPKJuHjK9HuZwzfvM8gwkVJWRdyAD1znvjTHxxMnXM",
  "key25": "5HLxowooqzfCz2J7b3PnL7YkMwyyKpaazdeh7rV1Wz8wkwiwrStUzxwUFYqTNwGUgg2KoxU1eWjVMbP1DQL9VLL1",
  "key26": "2xErHnPK2VrYZhYhfFne8goxrR4imNrydLnQw9aXkDcjv1qgi7mrPeBg2gryXfzVBaRaW3svxeb9uS4JcNsirkZL",
  "key27": "3fVdkRZb5kaeXsgXuHeHXcrbpmLvt66vSCvfX7zLVrN6hTXpjfdG1srRPWrdnXYxKcS6yWGiKTZaCkCXSs8hwv9H",
  "key28": "49Yj7qyTr9AGuczRaxY5K5JU8ryvYY3V1AEKutNZxN6Agvp7trgVWXYHVTPwrKA1ffi2LPHps2x5QheYYmaYDx15",
  "key29": "2hBbbeJgTaxpUREVt37Kd9SRRFha3suZJbdGK6LCfRyTeNSQsTREmaHhRDNumLFgpmmd3csoqKnYQaMpJKfRy2zc",
  "key30": "3DMVSJxZMD9WeQCmF1zgd8AKz2z69pvpAQXz8wQTVDje8Sm6KoE89KBqJ5F62vWqiAdpsHAXtoPnRQnYYpC7XSJ8",
  "key31": "tiAueLYzGHsZjpjBDB71a6xY5eAdSMnTPXPJFz8RzGePz8kvSDgVNKRJxKyk4ZaMPeNt8Lf2Zg4qUarxZCWyQeZ",
  "key32": "4k2y443arfXqwKWHHVavSTf1HZm2CvzFdK6i79VZ23avXSNcjbjXGht7XXQHJ7FA9TzvfLVxP6Hn58YtJMqgAWsE",
  "key33": "2VWSZTDKJy1j3CWUb7RFQn6zdvAyCBe44FGZE1PipVJDkciuUMmn1zmMewSXAJkpS6f92rco5FuQ4w6WJjmZfQqe",
  "key34": "Q9NygBjkjQqzcVqkWaVz1yPMrxisZYtyyf71uCWzdtJpMXtp8WoksV3Zr2hfSkaYeszWFmbXFzCpkz8nZtfgw1c",
  "key35": "2rjnP4HDHtLPYNZNJrpA7QJ41tiVDhqE4Hy39w6UL6Vw5mPzKDTpkiLUjTucMjqQDUeN2LiGEv6Dbj9Hc5zZBesh",
  "key36": "Lzf25FL7HkszmnpMino7pUxHD2qExkwZ9Y4jYJy8QvCTD7UDFg4JxFjEFYbUt6JvKZjj44RXvUdFo6yWHwfHAyD",
  "key37": "5nLiyi6yV5B5ZPZou7m6FNXYxAwG8tJbND3wn2Pk4okS6hrmJuGYzUVyTKxWhstfXrb1pSsVV4LXykEKQVRQPkJW",
  "key38": "3a2qPkBR9cpiQhSZ4ffgAn9Y1gxVDxbDBWynwMND1XHQb9K2Yir4hjBgaRv7k8tvD2rFMdPUJZtfGN1kxccAMpT9",
  "key39": "3bcdKHb1eYPXhg1JPabaM4dCY6iSNHVjt8KnvByeQgeXHwKa1XyVZWcYyhGWjBP2vLZmYgGiDVJ1QEiGneb8nyxb",
  "key40": "2xd7SvyRPnVibM7R3GmdTNseyVGJDFri86pfRDDku3fHdsg6N3vmbqspdkdegaHD1Yaurkye5q2pSzMeDEZY8rWc",
  "key41": "n1nFz6tttmCh96EhB4jzxitXCU6RbeMwv5mrvSFpp5KwWBvyDXBhmPi4Jo3xfSCmsbjgpobWAmvb4gMWTwJr9Ub",
  "key42": "3wVHF9Lz4r9CNYCazJDD1XNH2a2FU2GBHRGMcakfSf6Kg2Wp3mDBdis2HdVTM8ZSCQh2HkLKYgr6tZg77WkUcxmV",
  "key43": "4asJZFP9auvL2LGAhWey9JBP84i7MVrHX8Ht9GbeUUKCLqAneuKtERUqiazKczr1sujvBpqWGX41CDpu8gZAzcpL",
  "key44": "8xgUYQ8cNcxGpV5TbykYJVLyyzisZvdbRQjM2vS5LuGbHm5iFc3x8TbxCwHZtpEsFERK6dJVi62r653r92a7nv1",
  "key45": "3Nuc7xd6kE22ZuuBapMRDGFrvtqFVoKMkkPXnWjCbGKtymwz8njR2fMdN7yobRLYDAjRG58c2re362jtChcEmfmX",
  "key46": "5uYC5brzWG56DaZq8Sq1uCjmF4ge5draKnBJSi5eyNixQLYhERDdHPa1XQstbPK1g5jznYbsaHKdLMgnFKW1NLoJ",
  "key47": "cdiAoLMgqTdkLnCWqmSsNwHJ6Ts3ZVtUYRFF5G2YAbwgTQkvFkemuqp9s9dAFwHDB5WAYkqjafKYsQ2dGU9s2mf",
  "key48": "3pwbaFG54dZCqkUY2SsTPFq7ffziQNg5WjQgrtS8dXLyHyyKAUqoNgR6XcskkpT6BKz5eRag6ETB9S8197472fyz",
  "key49": "3rdnkC7D196SYVqzvXVxMHvDyASWBjMDTp7xYJhZ3Qhjm2aNJ8GJx3pziFeECBtrZj56M1CUPAPNtRqWYi3jufBm"
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
