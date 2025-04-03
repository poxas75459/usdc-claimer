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
    "4zBRPioc9Edr7iPB4bLTfNB3DxuM3JBQEsXEZC7kzVNdy7gu8pmEPajumwZ2Wgh88c52LuQ6vMbPbmpCjZfhyhMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMwgvwhzxKugEFcXXdfrfkWsEyh1ht5zp3GKb2EXprC7ZMwnWKnGSNF61Td7G7SAAHLXBSKxGKadt72kgfoVkfu",
  "key1": "ht6jy7xi4H4dGNcAG8BonJ3LRPXzW8RGt9kUVo2btKtGbo5fKoU8G6RaxeUVFBhRWwXWdveYxTPQZM8Bh1tisyd",
  "key2": "ZcyRfYMbHVZyhaaY16APn98pf4ogo3B4e4JwoNmXSP9XaxeP8VRLtCQQmWkH9aww4MTTGhy84xiwKKTcEZ8oZ4z",
  "key3": "3cZgjMw8pSGMLvBreR9aiUNxU4DVADajRtp33AFREfTB5Tu66cV1riw2gP9GX1YNo44fHmKYZpkWix1qtkV5G834",
  "key4": "459d98GdXuA9qqHJYyvM1pSqBUe3CuwXvPXeLBxQyvd2yy6evRbqWydfFmvkcAjfpBmRpF13Yo3GUN1t4JYDFGXZ",
  "key5": "5s8hzQersj5zRBjrnt9pFDP68ac31w6McS1CwxjCVbsMuGwz8onqiGicxheXVggbsHGE2ApAsG4EHHYHf65ssRCD",
  "key6": "AcKji2vB3qdnntLRGFxcg1LXCuyU3NcCHMmgH9jZ8hzYMnVQfJ2t7gVcozWWYu6G3XiBKYaYndRPFQVbte8DDs4",
  "key7": "5whCTg5qnJc5a1m9Dc9ixY1AVWkGc6CG9qFgbJhshMPoB9eupihVXxz5m6BTvAdW3hFF5GzBndY1sQcpgdV8qDws",
  "key8": "3FVGi8PLwttMrUtatbsrRCHbmDag9MHipcC7Nzj21RDt59ximy5MdSFi6Ku4JQPwefhTBqaeBybvuXQhAnCoZJct",
  "key9": "3P7nS2D4Wb1PHAWgGLTJRe2YbrGxPpMLs8r2Vz19eS4QySTrhCJX5nr5R1GoVj7RoStH9pFGEgBDokLaCdSakgDE",
  "key10": "mFM5HpdsT2YN8zNpffqdwurC7xt5DR99p921DZD7inMBzxbN24FoVQ4hzVamyUShb8bmNhvgZwChPkmxnv74dWL",
  "key11": "3y1184NHmoPLZwhqNXzon8yQtN4q4yezvwCZf38YMZJCwdVKw7AogJ3WY52K77Zn2yFRTPzuqc1aSHkPBDwp8W6b",
  "key12": "4jmRe6zJn14ASeQcvs5TncYXBEh7ULNT4MtaFAarZHwLaqCzJ3LhU37Kr8nPiCpSttbXyH1cQwLt2Swv53hCSPy9",
  "key13": "2Z4WWwLbX4ooPT7RWnHkvqGt9b4Pg98KokK8JMaxVkghexHrapS19T5EhkMPTBRsW5owF3mYqRWnTHB3tXwAL2pp",
  "key14": "2noxxGU1RvXZyd5EssStsyv6apxd9ZeSAEseaNYRBTPCy75rHjWsFYoBuVeW6SAVRayjcBDPu5Qn1nQa4GRaQsLp",
  "key15": "5nYnkwgQg75oMvt6uBugUYaaY25oYnHb3WwdWX43kBbicYQrdPTsxVBPx7bxSUZj31CouYn4YD8pAnk6hLXy8mF1",
  "key16": "4aFct2vZBKpJxFP3KJw8h4vgYhEi811P4Q1VxyRVuniqDe7bAdEUfgmLNcVHs3LcWSHYuuNs54KNfou97HHGCdB8",
  "key17": "4fq5sKnZ4wLWtowTweGza9NYLtdHYbTv1UNK2w6sUNBTuEtQsz5Xqo2W4NpcU61FjzAZS8wwW4H9XqakQTGQGinX",
  "key18": "2ApfrxnQ3H6oq76m3d88gwiZA4vXWmy9mSz5AzCWGeSKgAkHsKYkxbxfZUmtcjURNyjG9xA4nC7vqHpP8bu4VMPF",
  "key19": "5dQKZ6amfi6VHT2kKjfS1p91shqBgVJWQYKEeqvFaYjRR8fU6ESmTujFuTTMRAbsyUttKhtomUBEPTqTasPGxayn",
  "key20": "5QvQAMrpcZqosU41T6ZE53TC1a59tzHLHPjdsrVSS2QQ6tvbWpU4DgyedcMPz2CscwEjhMQDE2bp22e2FzRcg5L8",
  "key21": "5vEhB2xSJjLGQrpKTk8XLSPTqyXAGzTwHo8LzN4utoCLyz57Yc32LxCj7rycTK7uHBMM1pJvyMwMErtDkGCz4nAH",
  "key22": "4abD6rkmXEfCNr4xHR1XRXdZH6GBus7YAxthg8Jp7tbBb8iQmtjmD1vVG2c5M7aENDAR8cM7KcAi6cWhiuBwH554",
  "key23": "46imYPr6Uyz6EMC2AGbHtg1cG2Vb5RJq3NZnN6aqZ3PDTjx9TgPhkPA5Wcj8isKJFJDL3hoQdMMFnT2it9g9e27z",
  "key24": "3WwBdBwiBE6N9hJVWxE2KxfqH2XmreKdW1wj4pD2AdpcHDgr8iSUHLQNTyw9xXAMphvz2rp6r7QFQhdn9rZ1ptPo",
  "key25": "4DXMA1SJ2jzMbbW47i6h9o5xXS5xzNvWJSEpXuR7fcRtNFMrwVMFkLP8cTW4hUSSq1gzcsZ2F8cPNN8qieLCDinR",
  "key26": "6XgefTsf2LAHQZYH36CVQ3ETxDKkq8d826J4wWpEdpsRDNjchbu7YJcTAbum43VtxDj8RuzLALGr3kvB4rqysjt",
  "key27": "xVmoCDkwUghiFiTP7JnmstEprnmQt6c97KQH16NZZT2qYJYAzjLv1FyNGvjFaNZ7LckXw7aovb1mS37vsfaQgKQ",
  "key28": "3a18bNfmf2TeTXDP5zd6WvTwNcdxhAcihbuMCachTUHzgxDJBJ3LmjkMM95HCaXLN9zNLpFg9SmpgvREYAeVDptN",
  "key29": "5jJwgusH6KH2qCLXuwNQM8KmvWHX4wow6FHMkJize2E5cazyV5PYGRJV1Ab5BfRrgBykhg8N3HnPCMAzUiiJNiJr",
  "key30": "659zNQVL8Ns8sVyGxfVgwMmDGW19krzeox7sLegb1JHCRWayGCn4zG9fPafHocYZrRoKjCLZRdcUX32finSBrub",
  "key31": "5UQWdojpxA89pSLg4Emg2T5Hjr5BdfHkvUUHicYnGVNyfVxxpTyN13DkSgRyoyU2U6wL48F9BXmFitiNLAE21cRR",
  "key32": "5NfRvzNYAosvndXXhbetKQ81gqfv3VEpqUjBC5764wfg6ApyvhEitV7uBAEETR9eseywL7ANfur5aE89AXi6Xh5z",
  "key33": "5AN9bwJdw9sWeRCrTSGeRzsRR3sDWBewYnHR392XQGSrrXbW8iFUXHeAnDz17xGtZnxhs4PXJ9mngZWBqKBb9Uza",
  "key34": "4TeXsTyC45SNYLvyzzsS5NccFrGFhQavkwgcCFKRJDF4wiUVdmkuPduHcAfnCqKgCyAqf43CAQvpGacNVyZN7E3V",
  "key35": "2EduvmiwpH9Km3GvtatpR1W1yB6YiCVTddikhyQtKp7w4CsQVzfY6k2UWVBfy2a8wGYNM72qBPhrHUh5EdaALDdL",
  "key36": "c7MGRKA1hf7HCWaV8dhV3nxbREUJ3gMyarFBA1hshcMn4AngcE629ZzfdkjTAaikagb9YecebkpdPK95WUVN969",
  "key37": "5FHH45YYsM3ELvV9Tx9VE6j7QK9YoTy5b6m3BGLy4SrpQ2dSNs4Geakb5Bw7cfaftbUJpLeA5YG8cxV2EJeU4SFg",
  "key38": "34wjQwCrSnn23UWokLaZoVQrboHTdSJz2N1XCWV7wtQDMGx5gqiJNWhzB2zh3qKZRdn7cknypvvYbdJNUb8WLq3k",
  "key39": "5DNqhTE4hMKYB5VhyNpq5ZaRC7H7R2Z9MNRocUc7hVJdQtuRREU41aMPmHuDmzL6xwuSFmRtWR6dpkEh5YKmcCWp",
  "key40": "3E8krYrJubiHRphQ5WY13zukahQ9pP7bTE6YfvCv1fku9nghaGpeEkgpJRtbb5bFHTquZkbfTwLVEWMfXzaeCq7N"
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
