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
    "hH2Lcmc2JXQNnfrtj6ut7WGad7uVjkNe82ecYm9qZFEzNqN7Bu7CakruEK99f79FdnwvqUhQspmh1RxEExsFUdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUx1QK72URokxRJqoycNNNm5xaxEBn69bWqDzE3TrT8BgwR6rL5heVhgq89LRtZzXQ6tL39ZVojkTcyRyK14pza",
  "key1": "nENeg32DSYRoBxjLWQna5KUZ8ScakgtJaTHHDLPYP1ZRX3QbAM6FJ7ZoQJxwccY58V6657uBDh6o5ZdKXMLcFws",
  "key2": "4saeF9Mn57ecv5jsSGnPjqEvmbpenwK2YxaDBiDSggpGb66Q51xdADhrucPvDrFkh1HkA57NYyw7x4fDYyyLJz9P",
  "key3": "572nVJCwBc4C526WCyeWByGZyNKda6DF7PJZ9s6y73SFPvBV1XPyZDztqHWvxdbZSPAi7XgwdAXuai51qktiEbUE",
  "key4": "2mr6Tp8JxFr68PhByBVtHC1qHiJZvistpiKuqksX2h1hQkyVdKdNvE5mRBdi3bXUq5Gg8cHtgBuqxMNYFPC8Pzui",
  "key5": "pRfSkxZZs81d6rgQvz4RWTw1xWcboyDfNsTfs1LfX8EsFHvPc99RshDcZqzv2ZLL6esXhnqPhoDSMC88qGcmnWQ",
  "key6": "3hvNN1xSm4E7NUeeH8P8deH5bv38PhYcHLGFfGKgM1qFMBgpuXZn7GsLr9YudFSUGewRHPFCU4vRi3WnufhTvt5e",
  "key7": "4VWkQdLir6h8FKCHz7AjNhFqsKQM35CDQQTQfEwdPu7aL7RokUbQccuf1giSz7YD4Sf68o4Cii5RXdPHsFkkDGS7",
  "key8": "2vzrPjZgTcBa2xBjnNDhxmNeWF5uC7rx2eNUgnURMxVqatBMpm4R6nSRi3HpmDQKj212kjsGeUYGTHCDDMbLhRWR",
  "key9": "35Z5h6HtdvSKbv7zr1XY9SJP6ma8T9b1yUuXDsQLzNwZfk98Y2xaCd6tE2GaPFnzUfB3EVj5sbPmme3nqVmyrM63",
  "key10": "tpfXD2nBNMYg7p8JX1t5CEBDXmrfx5uxyPSHfVxEmXx5F6Tjh9PQXcHqxuayJfR1HBzXdg76yh3ukQ8qqbPJ9oV",
  "key11": "34BW9CNTvcZdAnD8fhheNh7BVnuQwNatLFfi4nYRYpVYixZyUkVHBy9U81DZWBWJ3jR4FucMcErLg4cZexmYw4NV",
  "key12": "67nV3uummRAARPiGdkxb4E6qJa1ToUTJ1DPA75oXgSwqZwTPEYEfs7YFVHVpTy5bF5RyyMNhA422F7uFJUnL55Yb",
  "key13": "23BhiPMJzh1XtDMcqYKD89mXv5UpfybEzqVe92C8JhcPoZkSLpFQ7NTEojGA53nATHEqZfR4X4iLL7arHPCGqP7w",
  "key14": "3D6g3s7AS8PLonRqZyuse5xVTqskVBw35QMCjZ63oaC2er29V9HGVDDsn4XwMANd4WWvjBU1bnSMS7jbaTFUgXYb",
  "key15": "tmTo3XXRPeTimjVeVVySeqaWb8gajEZs76mVDfyvFZj8ZUKqotMp8FFP4Zr54ddxW86U9S2xyYpNnmaKzcnhpCz",
  "key16": "2Z6p2XHKJPHH869kUUZ4k3TE4LPPtXFgDbaULCRmTgbJ6uW993yu7YKyoeXLUVhs4RwTG3aAZKELF9rQDCPRWmmw",
  "key17": "4uFbMCiKjqJGUdsGh9xumMR4oXVKE44XZmtpAUfEHcXpgZVBaDYJLcDLAXcGGjhiGMa3BVxuQdWLqDG1B2sNBS2U",
  "key18": "V3M9SVafBzKBwsbRxSRvhVPpufT3Cv2LSRuosQCwc8A4QH22fFLNGaEmeJRz92gfZxQn1LReQDxqab9tjcXNaET",
  "key19": "2UdEocGqYZ7hbetpCJKbaymixGM15mwvhH7z4CxHobUo5Gk9z1MS9zZ2HHp345QPD2eBVaiGcRVfTSH5UibBi1hN",
  "key20": "6574oj1vueyv7hXqcCf9V4fyTN67CVzXBVgwQzqmYZBDGFALoV1QNfirZaaJQ1mEtcRdqb4vzygu4LP34p6iLyAR",
  "key21": "LQSTGy2FZyrKTzLiNVtsG7v3dPz7h3XmLmHVBdF47aZhjFXdNgPWudyGVsxvYUA7GTSZzGQSeeS69Ev1DQjhf2R",
  "key22": "5YjLKx2nrdxhCW9k8LUuAJHzhGyyrTqdzcaDXKuQ9JGAvF8PA1PDA4PG49Whtiq6iWHXwN7AJKxGaEB1eLxpwxmY",
  "key23": "5z7JSedaPPiFKbpGNPCXBq9WYZztxLsbAkszZyrRX8SqvGbxrygk1gCdHrFetqbxZq8aced7619EnksMzMnzfgUC",
  "key24": "36Z45ZUjCtDtZPRmzmfnzxCkMNQGFX89ZNo8mNMW9m9Wdfvv4azp37sp6MyvrMp8zPHnhF1Afm3cnLrtM6xfAqmp",
  "key25": "5yt3tuF7LmMWbuaBLKvPjWrogGZ6ooi34xoY6ZB7cNuQnyJWVwGp39PgsjwAJNSKumkY9eoc4dPUXCG5NpZ7R1SG",
  "key26": "37pLVrZ22zBgxR7S5J7EHVe9gLpo6odpGBrSjpydPWU28EXXk5zY5X7FwjwJt7vG59RniBZ656eXVvuzSEM4HZx",
  "key27": "iJFusfQWgSEdvRfqmdxHedtbivBwjgfp8L1ujkVege1SfYgc6UAA75R7peNKwEupa7SiVAPzJYa8fzqKt46SR9H",
  "key28": "9AMaKe8jGC9jHumgqTX77RrPgPcy5cRC7eEwjbyKufNT4gvoMnPvvVPHLg8JzWJG31SqF781GwsF4fDXSstYrbJ",
  "key29": "36X9a7B68UygxNvHQf6PvFEBjCiSHF2szeTXJ63hd6nhnZAwPBoJftk33dN8vbGnaDLokiQf2o1Se4xyfVPP1rm3",
  "key30": "4S9QuWM7ai6rGmysPhUYKsCH7vsq1t5kejQHNc7rdZeS65AwiqPqjAEx8s3vRFToEaRECNhY4iFzqtvLTCcvLneB",
  "key31": "5B6Wi1ET6c45P9QhkcggYrcivv6rEmqXsbxBQmcK3RPc6HawV9Px1gfB1PCVXbWqyeDqHuyPB66gcPaRnbMcP1ZW",
  "key32": "5jip7T4DQAAGWUUPb9wp85FNW32TJHZ9E5QDhYwRW522W26hhJyaNbep7gRdKoKRoV7DrYEZnEEhqv5pxdjrAYMJ",
  "key33": "551zdJpZbfJtBUEZc6DeBBT7wMaL8oudMuaHhv9VtkUt18TMvY7DkZgHeHdySS76Hc2kNoNDsyWDuxveabwmHfvX",
  "key34": "webVEF2BMQ3Pno7uBHQgruagJpqQK2Stc3EwtJHih5Kiif3wiCyvSUUgnuSXKqgp1jDsejpbfpAnbusVABcSoth",
  "key35": "2Y6hVpWmRCNHefKuz96vAbBJ24HDbJLiaBSDrYyo3vWuMiNfwzDLyUJSvE1QbkgaTyQwZbYYhmv21RA5SG6Jds9Y",
  "key36": "5Bsf1mqibrS7YDyDJhVzz7oSsdemXEETShre4HCNX76n45X6tSvBrmrbB4UBtSKnGfvH6gxbuFXU2ByU15cqDXxi",
  "key37": "2KbvDGMpmFa9nNrfA6G4FRBNQ2fQ7coUhUZbiaNo8MaauUNiqHGnkKq3syY388KS6EpEJLrXrcz5SCGaK7V44pMD",
  "key38": "5FtRVuioBQhKZkcztzGUyTgWLrHFSq92D96bLmS3pPDwoLZVyN4rbP6ifK88uLCoRYeXjFVyhiJojFbGhQMBMhmt",
  "key39": "5jQghef1reNKGq5D8spVvug8uH8XWJyW2pzmuejx2TWLVeQk8ePuPFCNfZaF7WsJXr3CzNjRz7LyKcUpmp5tEMmf",
  "key40": "53a94AEjcpjPsCwtYyWmLZoUsWijcAFshoSPGcT6sA4XPHCyTsZjeAq4zPvRVETvDu7BVeb2hKZGuwqJmt2ujoad",
  "key41": "5rUc2gyGP7NyvLchhbihZFW9fyUdFUXLCrZ2tF68qojyov7nEm55UDCgwHSZy9vudRYPAmUC723tw3cXzQwoTtSs",
  "key42": "4TYLayxnccnuygCco1eH5f7fVWVtrGhsn7tTfMrMf4uXCwKfRXpwgTuCjbWGm5mUB3bAYwmVZERJiGsm85Edgx23",
  "key43": "2GTHQ2Tr119U1uqNiGUb7tCUh3r2HEzA4X3M4YKngHKs46PCpmZD7eVGH8eFaDcSpmfrwwFXf3U25QRQBf6kanbq",
  "key44": "4j3K6iu8pVVXd7SvBuhM3XhJJrCgVYzmBiXanL25v9xoTqHo64HYojYkzRrigxTEzH4pCTCeHvDLdAt2SAGQ5m3q",
  "key45": "3yrsopU2ECGn6TMcFPjHt1TfW8WiGQY7yR4XjyQ59pKAQJoBnqgCUKTeCsf9zUZ8rc7ptTVWCMPrDiVoNQN5uFzF",
  "key46": "2fhDPHxVUKaxtcrATTwWRM29tXSMS6mBcmHtWQpTwWKC2vs2DzmSpnikkmb96wgiZkdQaks66cMtpA8wm3LhHSK6",
  "key47": "49T9ceg4Jyedv4SnLMKjWEpCAU5EHXKBmj1ySbiurvW8Xk2PoT7Evyn7XAeWZdt1TaRDchaATMMQdFgBigdRquNC"
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
