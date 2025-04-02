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
    "3JSX3y5SAQwU9TzWJfCFavSRsjADZ6jLB1PRT8jCwagz3bSFxfxxJXVTpJNcHm3UR77LnBJgfgmTgjN2iGt6bv7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqcVtfe9n5wBM5jMBzcLgBxdp6J8DGN5UYhazxWMZoKjQAdRRj28JXpTyFjXwWspUmAktrCsGaWWESpbuYxzsXp",
  "key1": "5pJSDSFa4A9dh4aSYWS7H5LrdK6G1W1nhw4m9xcM3yRxh2fNaABYKKqan1epcc9pdW35baeYXUN4DZiNy5246h9G",
  "key2": "2kyRyre9xGXZ8VtqVHDEZCiARij7NoEmk1eznYZmeWJG3pEei44cHJkxaF1m6Ykur2gLeRkRbNj25U7tapQGQp88",
  "key3": "5c4xfF5AtWqyaH5fQ3Pnin18xVKaNCdpZWe2f7n7aPErxmTsbMzjiuT2uwmkoStB9eJF3e3geQUK8az5QTGeDpxu",
  "key4": "5mVhHoN5HBb4tuA68FjGuKyrpGGWLCsaryeQ3GdoCvVjdeWp51Tp1pAP9eoVYD8Nf3SeybRz3sPDkMz9orWAEuam",
  "key5": "F6keTKQXCZYoBWLdCaAPp8y8HmLLgiupHbReEiuVM1FVmX6BdzGKnGTR8Z4SyuvM8xnEFddGxzgZJxeduoZZNhj",
  "key6": "5zQpNWDLHWJP6EsfCwFwVr35PwW7huFTYDZhBiuthNHhKUzAee36uwSxiTpRBhExy7Vk3HZ9sGqtz7Hmn5Q9tc2T",
  "key7": "4Pf7vnh9M9UdyiTo9KfKNT1KXN7jZUmEtmp9X6emghu94khf5kPofWY8GqYZKEK57UtjyojknU5mScqBM2tPVrM3",
  "key8": "3t9kykmTYP6zV4o9GuzD3yoFBFnzZWXptfBfnakCpqds9siEdXqPXewoY4wVoRvGauHu1RYtNgrAzJ9SoXAvgee2",
  "key9": "5Y77h47pwswuCzM4DVUWQcLLkM7tAV5Qw8MhtbDZVdqwDv6Lb2V1q1jeayuRmLjwG56ymwzJKrjT2VYjgXhaHqAq",
  "key10": "ZJBmRHcf3t5k7aHBUe1bRuhZNNCmNgr8Jvb9bbc1dALn4SryYiuCpETcpgHLFMUeTzxwELjbmwWTgNq6wKi9AX5",
  "key11": "4pSint6mgSRsd3ngJRih2PepjCkR4pmm9MmjtA973ET6to7VMhPzTbNxp85pCWUfnsJP4ty7WAzZEVJXzKepBid6",
  "key12": "2UqyG9R4y6w3N3dbUigV3VrQhj8HdkWqc4PjsosRyqQyBrDFUYS6r39qu4dykgNzpYmhHpUYn775SZjLXu1rTsME",
  "key13": "2sERgSdfJMU6zkzN5endJJzg4fkHGSbTZKt8xDobtknKWbHzNKLVpj1X8xDDMLL4TtdsebZd5CbYC1PoqiwsdsSz",
  "key14": "4WzH4TuZRTzFGRXXTPpFYoub59NzcFR1o4YwLafnLxqAgTu13ue8Tik2REHmtCx6MqZXQ9rbyjdXXUdXUGQftjkR",
  "key15": "wfMZXEvavGs3ZBoV2arFL2riiychtoGDFneiC4Do3mp27jdXuR1mbdHm4L1Yau1XeVkZ1VN168Cs6zYKQhRTEy5",
  "key16": "4y8CAyxrzAqdfQn7aUKroZQNnJXB6ZvuRQ9gwvfN1G49BwcgCSNCMMhLXjQVcLwT6pD4WaTELAKSWmAVGgWEsjiN",
  "key17": "5mpZGuzQAJX1FcmKNaLAREaSEbBjLD48PE38W3vrPznTQmJYTgnvALMmKbabQothpkRvSQGu4ap2B6jrBXuHq6xU",
  "key18": "5ory4H3unPMbVaRwJRsBmiiysCdZDabtRqiSpSPHmG1j588MFXB1fF1BNQe7xhGMU7GnS9s3MdnLcM99TrFdBxMg",
  "key19": "5TWdpUFTu77fct4giJJhx12Lyzau9yFoqcECaHFMbDyq3DpULYqd9vyGb29Bo8ysaumenJ4qTqMFMescoQwj3Z92",
  "key20": "x6s42BAj7Q1EA4KyTw4kQiynDAvd8QQbs3b86WkgtyboZzABNJW5X8PvrCqJBiAuRRVYaYvcr7PEeRAMFmUKJ42",
  "key21": "58xKGtosfbUyad3o3eauZS12YJmjr92FxH73j5jT7f17YB8jg7kPQYV69uTwF8CWyrtmKuxxAyWhTAXdr26cR6kJ",
  "key22": "2stGQKbh8h4jdZ6ZP1Hecm5KZLzC7xd5Bd85tVM71NDcGM5RadAmrqPiZNaw5HXCu5f5Nn4h5af5y956bhWS9Bhw",
  "key23": "55yT7TcL3yutPK1mRHEMsTkWe6NB7jK3VyTLAyHLcKXHzHLrBD9efgrqkehGcsLiwZnz4V2CwZCMiUegEZaa7SyH",
  "key24": "394ufm27Mmwzka1K1ZT7okwKENWtj5dp4Nwpb5qJf2GgbrS9buFMjsgAeBxhUeakHGr2hoaYFqzESQyHoUfyNEYt",
  "key25": "4E9CFJuTwr1HXmNhVGn4QLV85S3fC926iez9GybofwJV1tRqrsrush8jiMMcQBgvdwSzzSGhkXmGaRiXNB3STD2y",
  "key26": "39jGeNCTNF5XDVHKfEPcxw4NVFPZzMGagcMEyzacxXduWgoymsERWkxZLpWQWwkt5z8x9TLgC6oF2FvCmoczxLHs",
  "key27": "2MpUQfC9piMgfjz5vF8rU98kFM61T8kFMbAYBYcFci79iMXa6y3tzoAVpHFzpC2ixyPWRMf12yru16rb9VYPAH7D",
  "key28": "4hpwhx4Ao4H9N77Jeu3HqjbC9tTcVQf8fitTE8kH2mcSeDAX6n65oPLVcH7vTDU1umKcGCri4ite15d1y5pCQpsN",
  "key29": "2e1CB2u8n9sqnnfqRmNCk9qVRBZ8utcgGzWsXkUSWk4xucezo5MeXAWUic76F7EGMkbYkd7JJvtMkocGtypXkKXR",
  "key30": "67iFayWPafRZyze4nE4QjmPM5FqwZQ9NPVnrSqBhHM58zqcLNcxddxcAHQkx8ourRewfcELurYos2zn2Ahn9h9m2",
  "key31": "3GKxRAKyXyXqc1sKcU5YvNaHSq633AFJWEd99QSTh9u3vJL7vqTnfTGnJif9aEr7tWw6dfKqgqiUMsfQQCboTZg7",
  "key32": "4id644PmtGRFwWZdWpUK8DfAeaJDQvjRu6MwYBiDhoZgLbGDSEJwycve2mtFToLXJD9VE2o26zEhp9jwnjBURT6w",
  "key33": "23HG4hkNVEGHW4eS3RozGFueKyNdmhM5mzFwLuUG3THgGJuiToDy9LdUAfycHHiDfAx7ktKedH5jrXXvkVnXte3X",
  "key34": "5Wnhj2VzLHjPLrTFsQipyJeUTK74t6spj2VsNvaM2nWM55uqNH5jRmLjUcpoem44rpg2N8cY47TgrzaA9Cy3fPr2",
  "key35": "5NfTBqEFfhmfPn5hPthaA9YZvL7Xv7QeaAKYbWpkhDR162MsTCPZQ2zQ1L2t5aHvSTv4CMAsqxyWxhuQ3AWri8Li"
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
