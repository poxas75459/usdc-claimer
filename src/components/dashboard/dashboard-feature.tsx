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
    "4RJdcctL8coDmrxqEiBMa9vYahTcLxjuGucRvetFWRrsxegwvAMA4xtPn6Yjv7LVYzYJDms4ciJthxQo4mt4KRkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgvk5XJ99MuDjLyXTjJGyLGBx3JU7H9Bj2ttMAKtS1m3XYSmwzpLLvsxeZZmmpwg2JDH72hjZvBmzBoRM5JqLKX",
  "key1": "5Eh6x5WLJ1DAvD9i6veDpBM4mzg78SUpHzv2dz5YSt3ugCpj6kAVasBYC7D88YbM7TF1WEtH5vR36umJx2frsFzk",
  "key2": "4h1QXMRYwAXfCjyMvgE7gcvtP8GLSQb39uk4bgphadiKRLUuyCz4v5a935RHdRGDokWabn52EVAcvjPbK4Whs5vg",
  "key3": "2ePckJYmKuvZ4vJGpuLgGfvKc8GNJ5RtPnGc1ZQH5HX3F1DQ817jz3C1gW8L1DU2N7k6BgeKcVptiy5efqhJSq5V",
  "key4": "51HGRJnJTiSpei97oSGWKZbDtfwkkizapLtAZRmknfoSbQLctdGE6aq2sVVwbe8tWpJqqn9WMzX6T34Kzpwm9S1j",
  "key5": "5JSSBcCeXr3wWHNRg1CQpdQqD8aJ7SmSjMTJ4rqtYHxfd6SoXoXeUof41Nt5VvWiMcKc2fPkRufR38pCdJEjKVpK",
  "key6": "5eAzDc4DTSgquzrHCaspZ4DHmfdHinzmNkcoDTHgjr6VWgMDrb58bsUXvgSsJ6dZDSD7o9fsj3BGdqi5kFe95giP",
  "key7": "2GnPvNaZ8UYi4qgoLkj5uUXDcKQAPwVPRBU1kHGRTcTYrCNMCh6v8GrVZCvXL1JmiFstrZB9n552zHHw3J381Lue",
  "key8": "4Ur9u4JRCpEr6oo2xeui5wwMSmVjCiBiZJ2xp6nVZvEgBEabRV5BihBuHoRWa4anU1nVNMvPegci19npzWFWedd9",
  "key9": "4DoBkDT4SbjKDA2HMETo2PBGWJLisjcSStqfoWUy9nxcdN5dRHZLxqJirAyDJ4sXy1HXBy7EYdt7aUJqXaPX2kK8",
  "key10": "3gMHgkZduDftfzd8o32vHPXwfE3xgK8ebQXJeYAeGAQ3rCTuVcUbAnJsCxo4wprtrE4XjnyS9fQwj8UYNaEpvdWh",
  "key11": "4HRBUjsm9jV3HtTPjaB6hLiDY7Hf5Z4qi2MZtoNF5qYXeqCbAHgcenPiT5LjVvSQUooKWUYSFFtix77Mx4qphRR4",
  "key12": "4eteQuigNfkBWE1UH6VFRen9GhynwiegZXST6U4tuYq1n2kvzzV7ieJiaSpZturT5GZJToWieLZJUNxw6nhbpwex",
  "key13": "3BDhfzAMWBW4TbacfVnYPGAgWLBrkMEcGbeNJhMbT5Qjpyj4omHYgfcK9PgArWN71f3unSWoXkV5DVMVnbGNYrFE",
  "key14": "2SuQLvpGfFUJEtcwJW1WVGTPqPETkHF9muKyLhzEx6ixNYpMdmk5QudmZ3Pk8BcZQBk2jBFqe22qCn5hR5SRyPr4",
  "key15": "3XcJSkPZNcFpaz4rJRqiARvrwwRaEp9BdandmvVpGU77XjALNEhW743WnSiGvsuBHwqAx8DyfWbfFs1gnvGyzZHN",
  "key16": "2RZrjTC4a7ntinCE9bfp31B1TdGEsdAJkJaGRqYsVTNAgAsorBqcyxC27xFmWfCSVDiaruSJ7pxjcveruRUV7u42",
  "key17": "5ZziRMXn9PfFMUXVSabXCNAwM6LPs6TaGixHnj6eWEoWvxEe9xLHAGHn3mHGPQg5fxE652DoiaQgRuLaoaXDNi7s",
  "key18": "5pGHZ75Tad6sUSUukRY5U9rSp6WCdL1eDpKCfxSqF5vPUhAQFqdFr8Z5eWGwZvM5WirzcfamNq93SD8SjPVHGaBL",
  "key19": "45kBBEMoLfEbVgzDRS1qW3PEPycbUZo42cLyt7q6o5xpUG7sXf9uFqh9U9tSKJvfKT8Vvm6NbCYqd4sGaMox2vAT",
  "key20": "3BQjiUcYQLiaWqdqbpLuEZ9UuBY15DwKAvV1ovWexG6Ttpaz6xqVY2csv3dXg51EVe4oYqmqvKGRKh1ddrsWUhUZ",
  "key21": "exyqq3PTVVeyTP6mBzKwckg1KdD8JL8AEMCygi5DQN1psfdHHHwHGaV2FwxjV45NCX14oRAkCy6JdLSehohyRnX",
  "key22": "3jcYobrp9cN3oYVRz9t7T4a3qsrVFG9YqN2U7BS7ZS9FHafVVBngZPyLzKbAa2vZaDsTZWvkf39xQRuy46pRyzK7",
  "key23": "4CcyosvzDxyk9t9rekKNhuFWZBsrJBXPRuDT6dHzK8WYYAkC6zG89SRGf7ggRY7qMJRRu31FBbEQgzq7bdoBwUCW",
  "key24": "27mqRqRvGnzVFhhfTeFyZaTsWZBv4693pJ5BvjPniCmmczAP2Ba29cvpp8d84td2X3t1GrP7qf57md47Vf4cAevw",
  "key25": "4ujJRd9mzuBeWeGR2ia36DQhJ1kK99HBhVUPrULuPb14B7ZAZhxcvJuBd2ZtJCzhV9yMAH4VUkTJMp2D4YEimN16",
  "key26": "3DdR3Q8vei9HdxqnVyBZ3DqVcVUnPAcSt7QBuo4cTJgfgKXPtau5LSTdGTAN94axEbzHZVwcmng4nFDB2mhoou5x",
  "key27": "5jx6o1nWDszFrSg8Sq3YYpi45YsMDwqQQ7qQ6WoHZgHDDDKfLRmf9V5AEFk6GbtcbNavaMDB9n5uduAZME4c53hi",
  "key28": "57yjPi7Hov57zRx4dywVqWyn43Lzi69J34RdwaWrjkBCFNFDKGvEQTeezndeChucB1hXMkMmfJ2U8njRsF11CNwe",
  "key29": "2HoPrUsRNNRtkCXoCaLhhLb13aUDR6m9vttkEJQ9xQANm65afv6xXgyyWVejDegTEh3uv8NpAyTv3H2gi98Dnbi8",
  "key30": "38JBgL2p7BhX5WhBf6QJQALeZHbPp3ceGTVPrDdrnW5puPwRTagHzJ2bRcrb5Z1ki87oQcTD6ebGN19xqwbB6EtP",
  "key31": "rfKriR3wQFzQBGCy2dQXN1sqSAbiZZcSGNYuKwd6Q2hfVE1jvsYjotw8yhWj8hFbnGxvsghTSRezwKzY1KK1UHE",
  "key32": "v3Bs4jDEnyWdf7fA2cYz52e2KAsmJE5FJ8563XYHUJfeMAcN4GhXk4ZUSMoSzpzkmLAHNw4bUa613FVvL2PFedb",
  "key33": "4rPbm3BTLK5awxVhaLLuwx8KRzyPZLoDPk8zeTPnrAH9afe81WDBe9TG9t1bSGNK8uYV3ttNgyvQDjGHRo6Pw1zn",
  "key34": "67LG4P1WwexdNmwyysuNLmjsX6iQgMw1ngZMxjnM7pb4d3MEKdu2RDU1KnFuxgksmDcEThmEwGQV9PQB4sVxFd65",
  "key35": "mpcYoozeQRmYbKNTySAHzocsKs9FR79x87uLGQGam9iKoPmUqrgcPqNrporjrw73MwELGK7z9WqFUbQ6XxbgTq4",
  "key36": "4Z2u2fzDzteQpvmbMUN77EeZ5p9EAP1HtJ4TQYNvfcs4q6pzT13PJuCUhymude8Y4DHCcAr1DQu7gEusXUrayp94",
  "key37": "3v2A9qdwXhDswFYJQtvTvQc1PEjrPe31Z6xnnryWx8AkF33RrRYfhKzqVvWZDQ1Zrbg6XMXCbnN54Djge5xkHDkF",
  "key38": "4tJ98uS5AvAkQv7o5pUQXj4UEYybh6CC3seUTXKTvgstUSz1hoyTD5UvyPrTpL6pHXW4r5CAg27MbdeKzkZHGGhY",
  "key39": "24XzXWnC68wmRg5b92BbrboZ2xgrDgoawHi1WR4Gj3WooeVbqS1t5tKMDG98GemaCQZ993KVRzRUAj71MCHPGN48"
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
