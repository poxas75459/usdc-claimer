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
    "4mh7HJPdALx2XM9V4bR7KrqrJ87W3T8UKEhe4Vwh1cx9zn21E4rjY28Mu2cvh4E5Hh52nK1YobdNzNCAf3zLbdae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U7KyzmdNPFLG5pgEWMp2Yb4vBew1CFoh9SHKCH6fnc9Yidm4bDHxiCWj7s9cJcHCgvvs5tgKVc4NHt6Ez1773Q9",
  "key1": "2NjsDe91DDAb1gK8BfsqDpaBt82XvqkPa3ka7MzrjNdzCnU9yowebhrFn3P7rEM7gMUPYaageCijCN27vyqMyNnv",
  "key2": "2sr6nWudRWbs9rEVivUy2uLCvtj9wZvPdGdZYrkyY7Xn4fH4R8TmgCQSKWRpqmMTYXKXBVei56vys5kCXYe8T2LG",
  "key3": "3bmu2FdY5FAzcnYtWypd6n426sC5AAjG5bifN41G7g2CRhXjh5Qa7w3a13sE2C79W4ZrtfRYNGv6jkqb2CdWDVWz",
  "key4": "LbDsg1DfhWquc6FzH2iVeTyzED2x1qUa5BHvsQKk2L4injs2Ruza9GR7p2xGbXB7WxmYUs7BUM2jUQnEKopBf5Q",
  "key5": "57ZfRVaJmUaSKikc8uVVZtjzEoS2Fk6VpqbsMa6d8xyRoN45GZqQCmLjEJfe3vQR9tEmAbnqUXbRRdan1prjcFFg",
  "key6": "XJDEKgjTfaLhkyGonMmtbhpwLPGDML6HKyuHEAjScMAP9psrmnunfnEepdji2WEWKGPhViKwNfxzDoUwLeF1tRe",
  "key7": "4hjczHqe918UUzTSkNhiN7XXtun8Xhr2qw7CSkA66G2viCyZwkpyrP8ufqLjymrcED35TrvqeunmiHVqxhndw6SX",
  "key8": "54WZubNia18FjxedRMp8g6eD9iNarEJCeXQYbkL74dPba45YMv85iidJY9FnjcSbrdZ2Xqqbm1hccrbT4vXpCn2a",
  "key9": "hJYvSmcTfAFfsi3s4xunNKe85xwcdQjkavZsuipzinH9jvZyWhjw1hm4kLWZ7koLrtX3ysRsPEgr9VWUgfVHS3t",
  "key10": "vE4kEq74zdzB3WUrWQT3gvRvTNVUwbWSZmeX36WPJBjY9QKpxHaZGRkJ4xvJdUCyuSsAj8khqSzXpURtgWEw2eH",
  "key11": "46BrXbdd6h1Ls4PrjpP6oHjcdRogpNwY1W72fHZ9XisQQ2RUWGUjPokr9PqmnLZVem6K3Cndeiq4c79YmcDwFCRB",
  "key12": "347wK7Kt1oVUhAYuruG1Gn6tt5oJ9dPrC7CLp19Ho9jqL177ugSgta7Bna2G1qpFrcsikx2FBZASwtXeT86gvhC",
  "key13": "4uUFa1CK4X9QAyWHhZKZScfhjUYgfZuWEpwcevSNp8oFM8AAneQCDGgUU7WWkGatHMt9qRZBCiMuQj6VQD42K5SX",
  "key14": "5BbKearb1r4jJajzJqv21r4uizuqsUCWNLaYKgWMFSmhHtZdVAbLJZrCoRgRMWn9L5LgdMCGrhp2jhm2stA7RqyK",
  "key15": "238G1yS4Z2Ag3TuJWgTVwvd2aLcBGCNs2MD58fDkgu8b1y5Jqz1gWhFE3wxSzLBsEQoPwDzrRrA17StZ3PjM9h5z",
  "key16": "2bHfvLTnFHmZdh3B8xLPqk6SBSpNepyi8eMLw73jAQhwazt2TRiMyu3VNQHCyrsSf9PXibKSrzfVKULaGiW7ADxL",
  "key17": "4EsyYiqbJRxU77ZxnrSgjxNKbkPUZRV721oLAeDhqFihZrmWe7iCW5ADns68um7ER368g2v7rNVt4Uq3LNXwsH6S",
  "key18": "4GKFFL9UdLdrG7ya9Y6VUvXVnhEcDZBcQWKjz1sWB7khGr1jkinuXAogUM8AdKZW2ZmZgSfus4RRCHqfqaVEQjqQ",
  "key19": "2X4Tpv5gF1UHiRikm1ghYQ7Dz8HAjfmCLjfKG3K1CoZifBVoCcZyEQyKqVA6vxPTn7pVbx3ejXg6rgcUAxiPSzJg",
  "key20": "4oyjRpYsj44S4GJ1JtQicjtuQuNN2ToQZZjo8E8Xj5kf8etmo9gAdmkg5HUFUUDdaR76SPVTYFP8x3quGdRUuP2e",
  "key21": "6uXgwEuN6uHsfvovfEU9mXnkaiGqN3q3pdAfsj3rT5wUsPdmdX3RsuAPG6VJno5eARw9woUwST9p5egWJtzMkqi",
  "key22": "zGGBsfuUxa6Rx9xBjPJMSCSatonPopHmS1Jkjqx4q26scJKcbdurt3kU9kYx3rghnh7eaM58FL75ZVFo7ZN5JX7",
  "key23": "2m94vjaWTHaMGMWUSLwN988bwd3sZxfFY5wYc7JZWLMyyWaN6feZ9eA1e4vdXPF3JRmjvHpbXPeqwVrhYcuCAAwx",
  "key24": "488vborLUauUgshxVy1cwx6snxFp5Yje2WtW3uM2kLDV6yFESqVFU9njvubmqifLasgEBgG5MfTkoj3kq9ifJnBr",
  "key25": "5KX5EybsXFdU8g4tVQa4sqt75Lwu31Uscci5wQMWMK8gxJrrxYPDAr11AE5sDNuvWShC9XkmomSGLZAnKgHGZUag",
  "key26": "2vktY43o7YvJ3C7JtdVLwMqc3xRMLAYGQsTH83J6TNc9hgZZtZKHPwMkyw3YsvtZaJ1uUHvfdRgfMYmULpErB9St",
  "key27": "2eUt7d2wVzVvWeURDhjDWLyQ2sHfG8By4ZSum8zwrSatFoCrPY1MHtwRRGnnXZkJEERPQKr6fBXSFTXy6pL5sETD",
  "key28": "2DEeDuFnXXivKWQHBCuog8mZkgyakngWH6UeG9AkMACxtiWm6X38uNAJxWQY49Z8M8bsuYdRrq5amWvsoDxMMCnj",
  "key29": "3CNe5vhben7YqFaF1LsnJ9aBJ5s11CTQidCxZowAwceKxjA9Tn44UZpCrfoeQM81xSntjio3XypEiRD1mjCwmAVw",
  "key30": "zZf87sKYdPEikP2vJATiVtaaPqCVWyhVTZe9ftGGkY18qCrHLvVoMckvWqxq4xCFaisFpLWYK4gpEt19Aq8bykS",
  "key31": "vNU4FdTDbDdiV4Q1cFpgBFFcqx5Hr1ryR6QEMktoB7fZ9GyfyuMG2XSUzKq1N514pPsLstguGAPZ3aLpuW41atc",
  "key32": "3T3MxPABFWL31cawJv2hr9cBi88ZRHdfF2j99QKxiHP1UuP7yr1cb8UdPegQx7WsQdjY2hBKECJSYZSoc9h1R5qk",
  "key33": "4SqqgF666jr4ED8TWpYwQiJF2og3ZhUYTZ4vfZJ1RDAqrkBmmYfQtAmWJqAQFtaL2tej7NaBH9cmt3xgGmsmkBGQ",
  "key34": "D5mfr9aSjfngQNcPYa7fbgsneb8DiEqGK2H9vvENQ2enBGCN35equpNbY523Hkc2STs8jsj6jdz6V7af9Y3E2Lp",
  "key35": "bKhowcUEwKQR2BfmWeeapY9ZEgnUX89xiNd7YGdn2uQ8j4X7v6qbYWGBixy7RYsZWwq5XgKS6mW1AMjAsZnTAPm",
  "key36": "3k3PQqv5b87bNa81VUGvM1xVGJwjAhqeWw2T9CLEkYAqra2e1wGhpfYzBE3idmu6aJ2CnqsjtZbY46HpEUHeScFV",
  "key37": "4z96V8sMGSiWxuPgdMjMMpCBbFSL29aKqgT26TFtnRr7PqV8myxw4X7EN2PyV7zcnodjDaBWu4tFWoE1LvbJoaXr",
  "key38": "RHUQ2Enw6NDV8cZt4eQJgPodmRjVKbFhPqKAkrUaVFa6zp9Y36CgGkk8LgTEQceJ9fSFYQzvw2sGR3x5qupagyp",
  "key39": "3ULgaZXHV8DDzsh7e3vs3xb3wR6ET2PYAdXuoeNEmmkFLWkUxWTFTczD7qHbG3g9Xmc3yzar4gTpsspe5kM9Yq8o",
  "key40": "5UcRQLvJe843xLg19UsrcPM7qr2SouqHE6ZDy3dBfS9pKbTaGVP1hd9yj48s6xDgeua3DhGET2VuoyVCAVDQigwU",
  "key41": "3fhUAjf6YU87hmGLcAP4NB9BUvcC9TbiNmKGfJ7GoBf2mbHd9BnfS2YKXjMsEF79wPQtVo9Nd2EVHgoCmqxPKTCs",
  "key42": "2eX51rjp8D3Q7Fa28jttGQBmJ6akpiH31F1AWjHL1XKt7Xn5CpjT3AQMd8Y6bXy8q4DGaGyvZom8bxNyWtqyaWV",
  "key43": "29vKw1ZEswJn8ZMpM3Kq51To6NZHBGR1VSQ7jDwa5cAbDR5EwzarraDrwszJTFVhUDNbszqnD8SL2AtFide4w46a",
  "key44": "5vjCQpHvhNVshJduEq5GG1T3uJ5bL7CacYzpSChMXXEPgCp1W8Vbm6Pcd84pYLAipDaRiB4PY8fNmXbxCg4Dxppw",
  "key45": "2ChtAwi1wgosYe18ZsNJfCvt85ADnomonVZSdGJ2iS22FNqexszHHDHGhHRM2YpNcmxYR8EPC1WdK2Q3HGPoGdfU",
  "key46": "c6yNhJ7tewPL6sDp1QYqnY1q6TDmoiTeJmLMFRdVq3oRUxdgLfecHZqdbiQMihinova3vqiw3MCMiDpX8Dpxqx8",
  "key47": "2tWrj2mYDwybTSfWF7uVC2L6SA9R6XCtQj93eezCGaG6TfuLX8BBpaKcFqnawtC81gvdsBZqVZ6MeEsq1Q5ApCcP",
  "key48": "Yzpno5FoSWLyq7KNaKCKrB2biQ6HApcmkd7BDn6iDUm4ZYDeC7AvzgvZD6Vm3w3QPad2jipPkEaNJCybqYLoCUr"
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
