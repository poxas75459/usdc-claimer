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
    "2BcPmzViNAgT1a6DhhgpLMRnHe6p7xSCb8wAy2Ht5A6tcKLR83Ej9D7txmH8yTxoSnZpeDz8sBurJLYpgEJ8iCUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kFBLLzKgugTyRcwYhGtLxbbPrLDcAAziWewp7AUWQ5hwhx4qHxFA1migpd9frCC9wDcTAwqEvVVfD44ARrTRxwK",
  "key1": "3XVwbFGnjeDZ9XhivRLSnJPgmUfoCaWXPCyVpKm2ZsvMqqy3acXMTFhaFRAe5gHdbakiQ6VabkRVQYvYRzyjx3r4",
  "key2": "4LjfEbo61Wb5fGJfGLT5aa9GzZiXcHHvmsawPTiYgNermrK9Wkrwk3RLhmVeWyNupDdGzJxgKTqWMq1Gr4B7x1pZ",
  "key3": "mEHvRsuxT2CGY4UhS9fRRKdG7cGzg1FYAdu2DiCxfNHebfhxhQNoZc9aFwRtCpUmbbMJqbkKfYdHdiVVZvVT58c",
  "key4": "5wHWoihWgWd3mXCEt2gb86tadTsDpnKUFzSyvJiWvbzFkwShXMt9uUQGTEexEs1QxYEiNhckuB2SQXR6emWiQaP9",
  "key5": "fZAzTEX9fykLWiQHAjnwRoB1BgffkgZm1mjTr4L2GiowKLBXyWtnjdcCweXoN7Aj4LEkrqkcdvKBamBmvPJ7nUn",
  "key6": "AzxCiduaWKKf2bP4vnp48rqZXoeWavceEgTdukkB8RqkpNhGiVuVAFP61Scx7d12XNkhVLktq1dMLhnJ2N5GTPD",
  "key7": "AsGtZ2yhoFnRxRuUBfzBA7neZpm9d5iseLUT2HMnLsu5p5d3nWzQbK1tyQ4zZ36ntNNjnmVj5PJ6ZneRdwRHSH8",
  "key8": "LBvSPitfEmiaHAnS5ZuezK9XSKSXhJjszvCw5BPESXPhb8XJUi6kd1SiCqXgfWeJy2mr2zZSswYkybnnBgKTbhb",
  "key9": "3v3six21udfXTqJFRBWUPfcfEDu7sSRyvVLVb7bi1gXqF67oBB2rr746A8U1QSdfKCkGegif6V8L1fWMg3gMReAu",
  "key10": "5txqb4P2Kw5m9gBLWx5vrNLAsQ5g9wX9iWQVea75ynfxQ5uvaUC6erns2AvUh9FGubTeemtUaLU5nP6oyea65uRV",
  "key11": "5qSfJAEd9SMkcjVkjUVcwopUAdPoH4mBBXykxPpj5YFT4r9xfw86K4bKgtuBXYydtf5ujrHucqZqQrD8htgV1zzL",
  "key12": "3iCp13HDAi4ELbboxW3S19zyjkuVdm9Cyrs6JDd6BcBw2HFoLHbTvKyKMKhcobzUGhTtVUNrPny3q4iguiyqzu5A",
  "key13": "5tpBDjH8spFa3ZBcAXNBvsQs2LhV41da71kp16zTHGWrXbwnbGkVMyUNuUxZUad6Mmgd59BJXPSVTX4ytK8CYpRV",
  "key14": "3AemabX13n6uw4Csrbm9MgayBy48jRuUKyzo5VUVv8UjjNjQDnEHqpkwamCrNnLdAv8682enySHE7tTZVszMq9Vj",
  "key15": "5Hw1SXVrUdX7sZjzP4TwC788XJggLyQecxdWaw5C4vGRn94oZ7Gc7JCLVSaq4aYG9ZpTENC5DnF5mWT8xsgS8WpC",
  "key16": "4TSa4YfyCVRHaUpJo8fJfAeNVwZZLkodf5FbZEkaHNLigDVHa37amRSKpzNZZ3Jyx2XGyftMcnRRxeegDmLg2Gw4",
  "key17": "341miqEFd8Xs3L4bi5RGvv42G1FPGiWdfhzMKnnAkP6eFjquNLKvh6xvB9VwtbH4h2kB9cMVeKr9qDg39heGsv8Z",
  "key18": "5eDVU9i7YiHMUTYVAX4MVTnKAk5PanLu4Se2N8TUYmR1AUaArp6N5uQX4W3qiky6Lvkh5FdkNUn1W32vqkQgWBri",
  "key19": "4oVq298Ub6afxfsX7zicMLKhq517p3T9Yqc92swkLzY88Co7aNgzUPdZUhE7nVLt2Cs2oCMgBPaUNdXUEya57cMR",
  "key20": "27RK7upjKm22BxhNgAziQfQdtnMuCmuzQwuRF8XHMnkmK3CN5MSa1C2GoYTHPicPnH8gu9tTC7wwtWu1eqc9ghfk",
  "key21": "3i7y99PCKCBZQqMDETcFfatBjZ2agqfDz89CVnz4ZkvaX8nfUCn6hHbH42NwuCFU7zKWUirg289SCcaESNh6FkrA",
  "key22": "24HzAZZrsPyGiPg6FYgGKncWG97Pr6JYUq4APQ8bvq1sjHVXaFin8XA8NQqMjVUt1HPjhc4A7QU5XHJoJThGHktB",
  "key23": "LrEcSraaZvLnLptQxcmECVStZkRUjbVHgU8orniLgtJeo3zH1SJ5BEtHXHSMHzdodHexA2eCKNn11CcnVyN1pP2",
  "key24": "3LyjxYmsJ36c4mpfGQAbsuLKZM3FxfZ9QJGDsBX85AaNdptFRMfziXDLv3dfkPkbbvbeAPAU8k4igHaNmNQ7CErv",
  "key25": "3xdx2JQCTxo6u8QhJoHCsj5ijXn5PaPvYPwwuHSYmok8Fis6neDCqm5RZ5Yb6wVrN14cV4vmZpf73FohvskB3VA4",
  "key26": "ETYKxetwK2EiaziVd9m27us9NWpnDbL8fFVxm3BqqPJVi1cLK4whrF85aHMLqhgxdJHVKaa6NXitxLzgGdSYKW7",
  "key27": "jyeM4JBUYmmpPoyd1JiUXrtkUnVy7wGWyhA7EyAsenmVeRtPpEt6bXFQXuCngxZ3Z6E6MpsSxJr3v3H3zF1k1qg",
  "key28": "5AqXwgDabAdTqS1csrJJTEqTAprJfYfTcaShWk9ktqBq9MyyRVVCHVWJJG6xQYAM5YnvQk1FhJNEzf4syMZjbzq5",
  "key29": "3su42j6ZM8omo52Juf1LzQ4cmXKX7Q3rEdi5dTowfsmvgYhxC5LkYoTjXFHFDjvu2XBhmM1FznW2LngSRUfXas6m",
  "key30": "4zjknZ9gzyB1HZ6DwQutDgSotqTWHb2sPMhUnekhescutfrpzBfNjdhKULWHkRkHTor8Wb2XXmq4evTML734Msqo",
  "key31": "2uxE9JisDEbn7HTxFCEcU72H3hURZHsBVSDQm7wjPmpgx2LE4SehA6J8MrHpwFKPwdc4Pyd33ZvfyyYcaksCrMG4",
  "key32": "4BUMJQimRoCND2PwSBRzbzDiojs1XqPDeXNakG6M24mp4LrBEmLsR8UpNhKzn1QWFd7LNNjwCGVuqRPtyZH4G6M1",
  "key33": "2EzmS7MTLCpnudWP72T5m8dbJYbzUGjtKsWiva88oBsS3u96d1wXto7eBMVu7AuaGXviVjG55QnuHYGfTY9tWfE8",
  "key34": "Fm6rHmTnUmT9RWtcyLmLd8eN3ofJ2aoK7YfnWXcFXF1atpLZfdtTzM38QCTnZmP1YiDnymKM8XkWnjazCPADNJB",
  "key35": "5jamq5iLjmzSMzsADKftuYjuSe37JmzcTwyUhYy9T9h3eh2p3L3bGfoUqxjid6DKvv9a8zvPD8UqFeihyQWxffzU",
  "key36": "SXC4w3GKdak11uLgkTdckf31i1fvCPXKdK2ssa7nLSQgW5vLpvbqaxftYbor7cQtjnxAFGJdXRQ4Y3JYy7PpbrP",
  "key37": "23RakDGk74qfYUAV1sQm4mqjK7PTYMFDqKJa54w1oHmM1wqZTJfSqFEFr3tSZkoYroTL5BhsXs1LfHzwXJrWzaR4",
  "key38": "24pLUsj6L2jMcgxuxy4PKTn18Xa45B99ADLJXJm21xCL8JRFb7Xqe5weX29Q76TbxFdRFXUf32xhrX7gPEUiL8C5",
  "key39": "24qv3WX7BtKhwKr52WufZ4eERLYT6Yp9fNFbrQJqZ6qTemu3Asu44JV5JtB1bLc6FYSw2rSy7qK1TVbAJKYLw3LV",
  "key40": "24ASinV3aKQVrX6q8XfF4PLTurPmgfHBa7hMJKBFLdrnYnfSK8Wh368fZavRxDvRT2bvDbQdo2uxK6p3kdPfkfvD",
  "key41": "5vVNC3oNRCfrNv4hkX1hWLv5miomvMxNUMQ2q4djMjCtdyRoXyUMvFqcmRB4TYx67mMVDGU37y9QTjgznPDvCXf",
  "key42": "2m4xiPv6vP27kmq3AsMQT5gh98kBsvLLADHtcHqtUVpYz25iMxdWziqpBRfQsPySYmBuNWyVSzWpRZQphmHnq9FZ",
  "key43": "a9mTRVFPYkfBqbbkGQnyy5j9UD6dkcFr1QpmTsEfbbVRDAmMvAL6VNYxDBChNjgSqSgF96MmJaAuYGCHaf9wpZg",
  "key44": "2Rw7smawGgih89Apg5YVsF6WktKdDm4dozPuVCU3zEn6GLKvLoLdSrMTiJYV2DqWKrkMkXp9ngqxBAabMX78Y455"
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
