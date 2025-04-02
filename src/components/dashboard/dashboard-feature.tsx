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
    "3mtEhn29Uu45uWkE5wN5ydfVuhN4u11wf5qzGTWr7joNwVBdzeFs9y3fwxpkmrrekU8LPoH85FWS9LtW6z4LhMdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rcDAZpoGNVBbwhFCmKvzKgRu7bqysHN67muPJ4J8UAg64ujwcEmkgYzLmHo1RiCnroUkSaH62U1F5deDjNuSaBM",
  "key1": "pP5m4LaXtGbXSPKpJisapsAQqeGRxL72csk6GQmd5dLrMsFgUiSJRUPxfZTRmygiRxz3opduG2xeC9Edow15rZH",
  "key2": "3myFC7w8yfSmmmZ47aW8DoC2eLEdGbFeEKbCdWjjhnHsk5iUNFhnLaVh82TTAeVZ8mfswm5mTucFL5qx8td2DxNc",
  "key3": "58icSfk6ZzMD5rrSpBffkqzKNtJfmhFKhVVmshT2oy6gSyeiWFefCDXDLSNobBmBFJNCpsqrrsapqdzxziFk7hTp",
  "key4": "FSpQx1XYY92vRR1Sgk8H5yEm8MVJimMD5rNKgiq3S2jasy876saD65WXE6keqCtuUbHKB2dRe39fZgoK8So8ini",
  "key5": "5wScViws3zbrwciWc8tU5PyEYMjHJ4MsTKA8e5u68a8uZx2Sh4rgRthbRhW7pijqSYeJEPjY4hhEJKAVufwnQBMr",
  "key6": "3LQVaLxe2pQyWVH76YkFyPDLxWyqMfEd5S68BRzNr1yBc9bA1acWvRNNCW4b5Na4jMvXvmLWPxmYn4dzjWLHvMeh",
  "key7": "yMQyE1f58incFbsjk3ujbzRMv1JBKUMzmoQm7M4ykaeURTVUR52GS4BgLrLejwupPdRS8LMDj2BkgxgF8RP7wst",
  "key8": "3FsHtnK9G3j1Z2dREm5SGfuqkGXd976GTNecMG3j1whT7aCNkYpzyyerMHD449xN8Hepc5f961CuBdbSea7C4Bsd",
  "key9": "2QMmut62iJb13Grq4HbQeYkh717MS6ApFR3N8H2A6TwbffJTjES4fzyuNyXWb6K1qdbUJZrxQdx5byKVPXB62pRA",
  "key10": "2TDY7VnDh1SGDsfvEtRDUG2tGLDDWGUF8Cfrcj3guWYCaAhVwZW69N5Acbgfy6PzM5k6adF9Q9J7AFe6JxSnLff",
  "key11": "49oP6bHm1VTK74YQzbrx7EGREs4oGqr3FFg517HgJiKVWSHPBTzqqvi9ag2vVK81miZpu4azg1xXYgeTveF7V23k",
  "key12": "3vb2rQ2yhUdv8AHvtCephrnkev1rARij5a3oSVzstSJZvsdsEYnp8A8vdB4DhV9rdFGFwrsvpthgUTRHpR7R1w8z",
  "key13": "52Bf1cLKDdFaTKEPoQps1xTfS7gPKwByFqffstdAMatAEJFakRAmFSVznyCyheViZboVtA6LEhXR1Rx5ZkX9kfVN",
  "key14": "2pFRsQPY6PztvQ3s6bRLBEnmKjw6rsUQ2AP31yh1b247pmgFtzRmf5EE7dnvNgnTva851zeogk7Vf9nA9yN5ivdj",
  "key15": "2sibkJWsUB3bm9u4971KbVY25sZdE9Eooc2CcjGE3dZ3h2viXFfgLFPuNzEqAqLVNGyT1aG3irg7ukgLyJcnzvnH",
  "key16": "4uMtgwWXrmJdqqXdBCadDzwCjfM89MBozGj9A5AQYU8woMAHF4nhAnD2a5FiCNe1fXv2G3L6WKiokBCaJojDmohV",
  "key17": "3EHix3bAqqvcG8SAKgC11riXhLiFuR6WzKdwtfxgBmAbU4GH2BzLkTQvoFGkzebn9Rvf8w8SiFACnYfyc3wbC6S5",
  "key18": "2tEPQtS9AARjhGFMtP4CkisiG5ZmWtrdJ8x9Ri92WGkNPK1ANUmMfPL9E5Cf1GVN8T9EQcjQpkeaZx6LqUgmqTZj",
  "key19": "4pbfuf1xa1Q3NtoQPJjgP9Zir6yXCAstLd4uSL47BNTVQvHa8kEMQDYe2XrxmZWfYv6NnyeHn8CjHo8Pod77WaJh",
  "key20": "39SmQtCUoZJexdkuqFZSotehohUivK1WauocKLX7mRxjTzRXRJCotgDv9Rp7V5JyC2qMM19YWrPS9qnnvA5gZrhV",
  "key21": "559R17KfuvzF97NDaYwccFUaf5AnoiEhvTjSRE1VsFFzdwCkNTmCbSnSQMdy3RXUDN7sQF497HQgPjyJYbiroGFP",
  "key22": "2gZkfMwXkevLVUQFpzCLPoew7EXmBGb57aKVTcw6Lmka9gW81poug1e8zaJB3ZZNh7bwKL5cqy2en4UmQVVsasGP",
  "key23": "4nAu6j96LXwhMaMWRvu8grTtvCDoYLCs8Qh1vvT24onUNHrT5qn4muLDbokL4eTWSeshHzGvKoHEAvKCzLNvPocC",
  "key24": "3JazX9fm4VAeQKcBnRjAGrXthQoezK51TpExm2xuddeE9CFvKp3cJAZdSTEbNW9NLoQbNWFonkHXpfjyAanwkKhx",
  "key25": "4U1uqCu9VJiXrP4BGAepFLH2DUwMRNPCZtVPdZ1MbUtkccsidU9FDwuz94mKfPUNmvK8w6TEaJzYQwTRx1zcRgxQ",
  "key26": "PVVmKoJm6CtckvTbtL6iG9vKsZzCah4u27gNz1CyVB4GDDYBvPjKML8FU8yojV3NyUnPYt9zr6Yfg2q4cmgHJ24",
  "key27": "47K1g582uf945DAgEkCTR98PcTXZ5eG1kqRZHDpgjUmi27juSadFXJKFxw7dFt3VaNPJU3dehLBzrYFR6RiFHGuP",
  "key28": "2UA4Q7YjBYAqRWW84x7juKTiDyoKvNbUbwuV9A1vwK9ruXKqiEk8VMKdiZgLVQ2nyBW3aoAndEDhNQxPX4wGhjH8",
  "key29": "23JrpG7Q6J1VMeLMDPJRroHMd5MpZuuSNKcgeKQjLAW5NnNjdqxtTUsx3pxuEKhQma86xncfLMQG3PQMaqSzmw41",
  "key30": "4o8yKVkaLxR7GpySWntzrk9EAq6h5LjF46nBuEa3RKozesgdQj7aBo4sWiCS7fkGtz1pw7q1dau1bvCoynavFfkD",
  "key31": "2G9XV98hsGLQaSpjTj8windbw4Wd15sbxUsTJaBmHg3vfwoFyVvLgETjYZaLrFqgvTdYRjp7iTjwCTkJXKMp2s6Q",
  "key32": "3RGqJg74NM3WJUCH68EAEYrt8GFMxZfYPav39xTykvgNMs484CoorbmTqRgMYvu5gdth61E7C7M6rt8ybDPkzbB1",
  "key33": "4uR3JKiRCQyQ2x5MxMhTG3ndPQxafjupdUnVoutD8CGPFZMrw3mbzVukrEQ15iUQtiLd1seSJbKMc8wMQkTePss2",
  "key34": "2E2qxYkbWeoH4zvZf8gLoRhu6Ju8vJMC2CunFuQq2biTuG5Bv3UhjLzhuTXKF4EF19APTRqTWWHhmEDX9zF3s9bf",
  "key35": "37tBe1An1LUFmRRq8hZdd8YJQ7ZjGXFJQ2VrjwD9HZxYzycPfbvD8SpT2LAiRS6cuqew2mcPgJnbaYfSg82Mjn9F",
  "key36": "4nXxUMsaC7t9z8LzXuFwrpENuvZamAemLsrJr1kPDMFbMUeC1ZSsGHkQiCxggR3kviaC6xf1dFpUdUt2zKwMpVMC",
  "key37": "5BohDHpdyLAPQkJZDnQTXyTdFxLxDMMeeQTJqozx7VdoPMLk7A3N55DQwPhJjYcFr3sF3Nz3rNKUAXTrxTZvJQDC",
  "key38": "5obpxemJymQgRxw6LWsfnNez96sxi7dxD82s2FYZNy8kBBCGWmDMhGzBedDeg1tPfKS6RVEajoJb3oWn5gnmj6h",
  "key39": "5KNWAQZb8U82a5mN3AYWVpWi2kKvHifeUqpn96PsZYQpG4pZUrnmHY3z1EZ8rEsXxxnumJdMbeFSMp6tAjDD9Rib",
  "key40": "FjiW379rsrQP84b38YS2jbLXoMNZkUaAq6iRVoV9TftpTEBkJqg61htAVMcPHzNcBt7g75KEg4LDzNW7DFXbnME",
  "key41": "MaadHtwgurqNbspC6oSByRTUd55eAUZ727Kyf3vdUBcAza5hwbBZ2v5FWi8AWtsTWzjmUCzCeYX1FRsVT44JTbK",
  "key42": "3XGswdhGHDBH9KcBYSfkkaDntxtRcaYMHrDZyTYfntUWDfRMD4oXqXkkGAsWegePDu2aSPDSaC1y9S6NurDfNTuf",
  "key43": "42trybebacsjhkHFxnXu1nFhjveQv1LcfcXDMgaXX1tKzo5Ch7ZVGcWDqm7rJyV6yYSBimxx2uMbiGqyzdxjN2xQ",
  "key44": "5yrR7oNFS3DfPeRcmrXaAkw88Fxc8Vnxo2swMS6f1ndvWT7WVKewTFxXePWZew3ZkeZQmyoeVyCoxVPD3ANDjdYg",
  "key45": "2x7rzRJE5hUvPcms5U2tapHjJ1Uu3kKKaX4TawhQMhFmd7QcZdcrdh2zrXwnDchP2rb31uxfC3ADiUexz1cmFYbu",
  "key46": "4fuqcKm6LYfbiPnwXkwSsZezb36Zgjd8M6N9LczWRidBqx92x7i3bfLUXDAfkdXsipMscBQq7LExPqrvzjnLX67X",
  "key47": "dYz4o6sTbz4dLJcgUVDtWaSuZnrnaJjQZpnt39Snwwdiqx6Eeud5aGkHdnmy5GAAvrp2ESKiT8a4vZTUyXY8oeR"
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
