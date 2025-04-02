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
    "3HDu3FBn9rAkfKTTqGh3txgKQHFhkYYVigG3sorrcwaR1fpUDAHgLiJevAkqhyH2jqTFSaoE7n3P6nNgiLiGEoxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzTaxhfqe5BcY27V1uCa1T2roeFVjsgFdJ4monHWQgPaSPJffKSy71bxf47cZE3zeZZHeBuqEfnRmXEsH8NFaw6",
  "key1": "4PQm5YFEwqwwDQmkZvJF1aeL4wddUKY13iNbLhj9My6BzZaKdrvNCg7LrN3YzRhZUWxPpzdJKm9kKaey9Gt4jGTi",
  "key2": "4ac2v8ggACmJXeNW9GBfP6uSZpC9B6FUjX2NzfMkkvKmKgikqgCgx2wS86eo6SQgh3bwLcEqiaTXH4dwoG4aMr1w",
  "key3": "5deMJaq7SWDTJzi4KYQczay3y2RWB1Gm5DJqkBq5LThL5SciMrEBW1X1KMHRuHv224APjL71cd3EujyGaBYiHhkA",
  "key4": "4tQG9EwqsiCm6XqzntepV3goSd9NyzFgydLXHx11Mirtm5Sv3Lqdp4ACuubYfkhqGaoJHXXrZsiWUfKK4YMK2H2E",
  "key5": "3Msb1XyjwaxTsZQJN3saNMyQdhTBNkuueapBnSgiYhSqn3BEWHXSf88kzF5tzUMWGa75TQDgWJddPUr1vHPr46qK",
  "key6": "2WodnncQWyKHh6cYb6KWQBf9U9NKAzTPPpL2E827kgqXEwVo5tgnaHNc8cH3EV6QgY9GChnLXjEZ2Xoeo4CLhofj",
  "key7": "2tz7AwqRhnP9869wvZqzoW38CrqJ1A4f8ALAfvUTEdjQH67UckhZ2L1PzBZesnhk7ZQEZiL6f4goLCobQqLTHQSf",
  "key8": "2qqiTMJKye7c3gJeUaTuNoybmUPpaoCHWVbGfswnvk6VN5ZngSZDmWGXsVJK6iVsX998W5PpRn3VeRvPUaExMYR7",
  "key9": "3C7FU2ejMjB4RKEtTr4qRKEkBwXQrRzr93cZkQfmKsTqVi7rL3z8uGJ5jXFDpEG8HHyn6b5h6iH16PkQKujwSuf8",
  "key10": "5oKKVgKPkUpRam2W4JuQMuqRXEBKixWBvZfmdBrNBk5WjdUWvcf9rCRtjbMs7zFDBoYmzhRi1NkkNejTk8wWPeRn",
  "key11": "5NEjMhZdSCTgqnh6uVTP5MqBmqcNSTXZe47V4qCRKhSgDvfY6SYUsDTduKvNBKvyUpnQyf2hHMwe1Jw6iNpHspBS",
  "key12": "vHnGuffHEsXdg2DC4o2jSbjJCXCnxf8neGp4jWkXKhDekDTbRW68KaPMNN6BbH6GfxcY56iFPiASRXm4hULaSL3",
  "key13": "YsecRvEf1NekVrskgu9zpumhNeBzvHA17pejCcmiWbxtmbgrDJtB9WedG7vpbYyKHVvCCi3NgFJLujoZpTguwBe",
  "key14": "4EQVAaJx6eqcmBAS6JscjrqDWXZW2aLrwBarXsofbhCLx9CDhZ6dTEKrUTNXiN1LKU7Rd331nFpucE52TgsdYRd1",
  "key15": "4bveS32XANi55eJyLRF1CUCL7uUsg7t5WBkTtqrXL434a1MJN7hu7Mb281rEgSuUKeqp9a6gb6TJezWvCpBH8SFm",
  "key16": "46EsX9SaRA88XqeaPUXwkcVUyha8aoxQXyAMhjxRkbQxwt7zzxShJB6ftfZ2SfLTzpLXtogNFTgYLKrRQHYyK6mE",
  "key17": "3FLn1t8VXhHFrUuBNBkGM7uKxjMypAXNg6dJP9qJytwf2D27vdQDDTsZjHFHanHzTVCvJgFpXaHVmsBHo6HsjVTV",
  "key18": "4jg2rKcTGdwHnmJFneDbLiQw5rn6EhBGDvBfskB8hybmDhuSLEjGuj3By8H3rhMiUMVKpXZspMT7E5cK4wnKpTqY",
  "key19": "62ykNrKL8ZAAHY8d55WB1MNRc9vTgKhVP4kNvNUY9wLfJ5SqNw7G7mamSebXgJLe46errRyhSf5EBQXinKMzCAo6",
  "key20": "2hgt3DN7mpCgJ94HRQAfnw7hdCGScfty5r9RFPnH3a8fZkpvraLN6LrgzM9NTv8B1GQwSsQLRh39VzwFGcBL6Sys",
  "key21": "5XQxBkUgikywXhJQ8pAnLGZvv8LVeu72Xj3hcZuBFVT1iD7djTrDRPHevib5YpUHf1hPp4LLgfi612Qfy5zZAoo2",
  "key22": "4chpoYTuVqEBxfj5LUd5uT2Yw8tAKezhffsAGV9r3XoEYV1LBcZrxReCfstFnH4inLKUBc3ZyMpiUSEz9VCQxksp",
  "key23": "25S1DWWtLEEV7i8iWRr1socbjJBzURsCyKFw1LUkNHhfCAA341y42HfvxSnrpzBed7GnDnJGuGY3JU56T5MAqxH8",
  "key24": "2K89SggzBPtmfM4ddME5iuqhq5ZzUQudnrRughu85GFmB1Gqf7HW8bcbz6Ez5sc39mp4uBt1t5TgvVYJQD6dGUHJ",
  "key25": "3VCaFUwjUSe2puxmmcvM6RBqzN3kQ4WV5XQJzbCKfmbn5wGQ7S3oM45T16v5zGpsU5R1oUDtP5Vs3E5QLir8RTXm",
  "key26": "3kgt91pvJAbxr8aBxUWYbCYLGZUKU4NiXMKGwEriWxgr19eyMpW5r4bz39EAqJi83scCKXmAsNbccu2PR6rh2GTf",
  "key27": "Yb4jAhwYjnvmRpPQtDkcLbECS2WiozxJf84C5uTV5BGS6A1poA1wKLCYpqw4rTA3tVP3FYq8wk99dSSRJsXrLfg",
  "key28": "36hY6ez2buxj54QpU2FmXerZLF9igKRyagxWbBZ9VeKUCYFex5tFK9RgcwTpJepun7j9kZQPvsGoAhYUffzgz2pc",
  "key29": "5WiUtVK6WT27UN43xFQHPGogRZ45g4tbHBB16TaTmG38LdGKDSUM4xRWiZyEEKhFFGjGhLcUvMxgkAuXKyzBUTSG",
  "key30": "2NXfwz1Vto4qFLTHBpBejGWEyqmFNze4R3rr6CMo3GJ2EsTe26PSBV5rBwqadLPAzQbhQSGE4tnsV2xFztsn9JQt",
  "key31": "2NPMvZbwQL2x1tpuCTJbuvoCksefB9z6KtfEjVetGnbk4nfbPyfrWhdPnwU25ee7HLnnURxh82NfLmtj7h3tGvVG",
  "key32": "4GPweTxjbmSYmqDg4U7v4sBHxiNrJngVU4xCV3EGqGgmB8tWgGxSdLnanhm4ni1Zy1uqcBKTeyhV4tAAFh4yKPCS",
  "key33": "3dfbt3xm8jeaDfDHSF4jQ4cai2hAgj2Q6Gj7UrpTASDqFoCB8DM2pHsmLDFC4cTj4jsD8yam8JCcc3UdNJt7eKvW",
  "key34": "5MV9KdNg65xQHBYSsoniTXqwME2BSpZA32wnGNFoN2vJDS1yQhQiuNHpb1fsmewfGyJF9sSkCd9deDXQXTy3QSXz"
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
