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
    "3qdXnUDX7YiGzosDSSddTTrCbhv3HNvwSg1zjhM9T4UMdVEHk6UxU2JPhRrnEGsFa9NPTwSReTNGJ5efzarQ8jhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnhkqARZ8tFPYwGZm4pbQCRL7XHDfubfgr6XcQEXRdksLqiGS89uuckkBSxWHLhK61Y86V5k2Rs6cs51oqtxbdi",
  "key1": "2nVaF35zy1imZV2KBsSdUnZDGqyWUTNf9Ded4GgPKCGaz4jQhoeJugwgJ2XNuhQqe4XvRTPVDiLrwDJ5cb6ZMDgj",
  "key2": "YnNhJMKcQ1CguyFpvxV6JZifnKd4nTEuMTefrynnbjTV8MDskfpKK5g34E5eKwvcqufrwdq42Afe912C7eAfURU",
  "key3": "2GJZ3bPDEUguwXSZVuNaSooRMKrsokM4befCHHTPykFtRD55xr2DrB93pKFWSi6kCCCcep1HF8p9399k96we35ep",
  "key4": "5GUGc9mHRVL3fg6jUp3zRsXmKbDJYCvPSapFNwxkaXfKd72D1HY5sguVXqjdMVifjbJeQyPQfXPMVzykZParoQ9v",
  "key5": "2vTRioAdbatBWc4FxfUR2yguXf8so7pRMAkNQnAMxPkazGSRFPrnK5SdsN6HrYhxF8McuvM9chRoQ3TtFCduZkkg",
  "key6": "VJ7546aNtQ5aarSx8xbmAiszUSkFQSHU491fCkafBGVQhXhMdZ2B5jPUFNXiowH4uCeTdctcWFXxifaJ7nhd9Fw",
  "key7": "2PufWuiG1GpzCfjYGyGQSZNgx4YR3Kr1h3oDaewP4XcMw8ZmT43dNREg3wWgavUMjnzdY5KFRRcPWDGFSqmt5442",
  "key8": "NgDf4TUnpxxoV4NiSnVAmuR1dHHzvgsjpVRUYeEkrUN3sEGL1mNPNNv5s5sBbez2abznSpZw4BpCmCEpfR7YTDp",
  "key9": "2goyuMYHeSsarwTmnciZzHyCmgRtSc3QY5BRckJF4hC4RD9C6hid8V4qWM7sBHWAXWj3TkHPGj6WeJ6N9mqnVgec",
  "key10": "dYTGA8qrPtyekhQe2GApStPEieoM43j6tVPPCasWk5ChSvvRaWxFtTgnW1RkbwcsQB7ovKSDTvyXRuZ7ZzMt4q4",
  "key11": "3JBDAiZbWv2TfQZP4c9AkHmHn61GBbWcMxnAtjSt5HttWq1cDzrBh2uEk7sUJjPvbSXbwvQ24jRWcteQBWHXiEyE",
  "key12": "Q8BHbJsWMNBU1kBDDoW8A7m9Y2XY5BMonxqR4fUV2QC7T8RxYovASzqCQcNDjDLRdSwcRQ8ghYUcmg1f7pf7jfx",
  "key13": "4P476ijeCt8RVaLvFK3EwvQPZrZoN5bUWfB3XTx379gmu2HAWqzeK9zZJc8GkUwmYk1bchKGhhv9hQtQfk1SiwR6",
  "key14": "4LwEKj5v1xze1jKimhSParH5pzrpuQoaSEoT2uXPZy4rFKRypAYmCR6QJoa9PTJMmruDS3u1QyHdWHKtzeGL59g8",
  "key15": "5Qz2FAM7uXsum6o94KP3W6bqXzKvVxc6mcnsvXa6UBAjtYh3tPyPJ5dyY85FXdtfnEhJmp7SpDqDhQW6JEvGbrgX",
  "key16": "4BwNJDsGkPP7CQZC9iVVZCdTJsN2nJWsLiBRsnu43HdVvysswQn5BXpeUbkS6ssktPd9iNiuqhGiUwYi5HPCVqVd",
  "key17": "2GKPYXUKZHCdGQWLaLw8CeA31sGW8N2Jg88ZaK3ZX4uAGpmYFRYjHU8cyzsU5W9a5M3pQ33pgG763bnJt2AAVSmh",
  "key18": "3iDRszwxKEfojSL7WeYkCvS6QyQjaHWvSZnR6pqvbXKRmnXD5nqqtYGaFnBCRR9gjKqQA9goojsTL9SxR8kd5hHJ",
  "key19": "62EpV9g1nd1kNVJEgSKucVLPg4TC4PXcAc8KMTYdxRLMC9arFp8qRAGSmvri32yAG8RZVeLDBhguAMg8XcgsJZN4",
  "key20": "5cJ9cD4C4r7YpWx9xRgzYojvNVJdWaREbK5rAiYi2itrgcFyejwqbjj9WzWGcvDX1WvncRnQnx3jSDy4LFq4ZceV",
  "key21": "63jS7WBVSHp8nuMqGTBfhJaYPwiNEqP24Pr7aS3ndwBnhqCnqWXZAvr55XHgpnxvxSRJKXUzaL4cq34tBGhGjCez",
  "key22": "21PUVM1nx3xJX4CKNqUjiRvERJqamuC5bdEyKcehRNQ7AuApHYQVSG1iH27m8EJr9onWP3kWwm4A1WyBK4Rbkg3n",
  "key23": "5wtCQqc68pyDKK7FGAKL5QWEjG8BeHJX1BsGKhtXgcijegzUwLv7su1nivwEbrmuBvsWBdVs3VyNhpSah61Jm7Fn",
  "key24": "4CefSt4gJgyxnGFSrHXqG1JsPa3jPvtuqfXRiHY8u28hCNxVEQV9aAKGfEonrss9gEHV6ozW1R8WhPSjtG8U6Cvt",
  "key25": "2WoVYq3M23EtdyFeQBh7jWFgNXr6nDnPCjapFKGNic9PFa7oDvoTqKTMEuofxCBCGVTefgpybYEFkJSVc62wqrCU",
  "key26": "22fG5EuJ4nrx57Wnjt22ZM7ND84BMTKMCRDvJfovWdpMRtFQLzjA9KikLzAS475QmgrniQLYXTe4QErCuyad2P4Z",
  "key27": "3kVr7oceRuE9hQniu7JwToLcGSf8czEJaUd968LrBvVryde4EHNYWtaJhGzgy8z4kcZ9vMSJfCmZU1hvEMJz8eky",
  "key28": "5LmDdrT2SiQHp9mpkt12PtUc4CJBHnafhfH2onx8HnkJ6T2Y4o3yNGKCWQRea4mnpbEaGaSf65MXQnoaHrYRDjw4",
  "key29": "5BVCb7uK2hvf7kWDkLeqsKw7VZF2ehdy5RVTRDkHJxk5tbz2Lhb4Jcc6NAh6TMK7nv8pNrVitaw6au4NZX77eDyZ",
  "key30": "5u4mtZ6M1TndeiYatBJbniqFMZx88SJxQEuhyTLi4wdkNbDC29QErxcFRABsvfucY7RJswqC9mQvX3agtxxjVVu5",
  "key31": "5KyjQAfLf8WQkVRRqxC8ure4WDS3JRr4ky6GibdqyDhi9jHNnvivMps98Y55nj6yMM3CyZQLeBUgQkUefkLZ5cRn",
  "key32": "Zipc1jqHaMwtdVz9oF2Vc2sYBjrLdh4VNZSy6Vk6pHQQ3ocPUuhupkrkMyyekvYsPECFzbyNs5TK5nXoeB7qxXF",
  "key33": "3y797bwbwgosn1LLpUe45sD72qUzBcRwVwtek2Qu23d3Q1jGH1Ga7LKvFRY2Cbus118NLRLTRoEwK4AR9fdE8ZJX",
  "key34": "3hKeRgTyzm5gcBXX7r9FEJn7fcdGiA9R5RqK2hUAcos7gSvch8fbEzwJf97mhdWcxqBT3Hsb3F5fEcpmEonEC3DG",
  "key35": "3AHZpJMgKmiE3zozfZiHyQ46RpVsKtwc6BgicUvHXhBZWyPse3z3JHGAMB1XTEse9BEze89JcWAti3AY5MwRHy5n",
  "key36": "63NGzGW9fEbGZ3hqGnYvNUVX2hT4hWHmsPMoS4tgL3jbGe7Xt59xWYHMyqSyZWBWD8eDsVE8tiLbosprT37tft67",
  "key37": "2jGVz9mbfddEDLp9yhgG7WnyZpQ8W68zJUXvgkGqpxPNDvNCKCf6GoMFUMnSdoeSdzAYGYtCU9PSdQ16w39xJzus",
  "key38": "4arcLQkBfcfqsJPoyiX5JBMM73kKSFofjYkC9ehb82LVhRqFCKH3djrYwJTiJi4JRucUmSosHVWMzG8aQaLxSXDx",
  "key39": "3yBZxav8pn1VCCiEJzTCCTrwbxv1rjwZCWpXmke8199hYjuF7Sx5z9AATgpSbC6ek4XHp7vdmX6i5dbVcFBU1Edm",
  "key40": "2ai2FtxqERUH38QjaXe5vMiKVk72nwBpbWLFMdH6pceiYyuPzSV9YUyzZe8vqhhpc3jbUv661XYJdD8SJf2Zcyz5",
  "key41": "3U63wYWDzuVD1zYD8HPR3uZqBAyBoyAS8Tj9txWmNJcNu3Pz2mRNsBRWige1s2ty3G6bobZHa7uXnGf61y5ksSnk",
  "key42": "4d7DBXG6x9NikJepeLR6UWgzTbxjQeYtwivoHaMvTPEUmhya4kGFMQuAbydrjcJyb4UXRPLhPdpKakaYj273fxw4",
  "key43": "297yF2NVrpbeNLA7qVCBBry5Vi1Kjmxt1DHHT2vGzawSX2JP1Zp7FpahaiNxHvdf4HAhbWkJeEnSzTP1qk58CtDE",
  "key44": "5zXLX7nHdnaUTotZ1CwxMk8HL4Ez2Mzqrypdmdd46G2RW6jz26ftpQwFHieyhtt3o56C4CPESDVo7inaiPekJkv5",
  "key45": "3A85HDADWpBeDtfZYhz6MZGkkrq5efxJDMff21Wk9MN7DP4YRFemHNkhXUSEP2XvDKh15AKjwn3XZNggpwF7b9PZ",
  "key46": "qUcgjrRcVBrgnRxAi5vojTbxWR43FZh8SVkW7wTygzdudfrxND8G29BrrjZn88DVnkghwRdv2FpggH8hhdKYDc5",
  "key47": "5su4wvx6n8h3RfaukjHTKGEZsw5kJ8jsbx81PodN6fdppMM2AyKKY9QrZ4Gtfm9PrKxxwjQkiD1NeyZAQVxF18Rx",
  "key48": "3XbigjwFBheWwa3ZsZjbuv7kSom5TTUgXvuyEBf37fwtpRWas1ErCdFNpjjX91W2HNeERKLBKNzi2Z8nTZz6xnov",
  "key49": "5xyfLHmEct4bhZVbsFLff8T9CffucGRRdnhzPP5hbyYtnPw2NVvc7GicEJy9GqbUgTYwUtPdh91gEYCQ7EEWEWu7"
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
