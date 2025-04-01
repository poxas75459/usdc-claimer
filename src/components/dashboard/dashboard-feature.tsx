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
    "5KnnPjwhQQQqfRBY8FL8LCEXZMD2M2CNxgPeSvQzyxrgkPpCETtV8gY4KRCv8g7MNgnt24nfz35BUTV4VYrpf98W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGbo2xSgVvQTUFcQvdJKPqxdsdrZgf1y72fQbJ1fARpW8gp7vrFe4v1Ww7jspH1weeAX7eBCNDKB6KU4oBqdcDU",
  "key1": "3sAM4yRFdDViNW9HG3nzVTs8DL3R2GXH3uB2BkpSZhMZfi7jJr9wibwJ4y6X6qk6dj2ejKLAAJBNNg53FRKzFyQn",
  "key2": "fQkBPPsB2HgpUZ8gvxYeXZ5gkNG3s8A8xqBwHgvRED1FdK9zvjCSX2EX8jwbmN3eEaF2si5RjktMG6ubczy7h2J",
  "key3": "3d4uKWxQadSuTH6UwZTagJMwXsFdNK5oWmsp7iYY3BKeQ3VPp5ahxYemr35cCYDU2avirnXZdq5UNWRqzsWSP9fT",
  "key4": "9atohxbzoKn7Kh3nB6r4hANWxTqiqU2fQDE2EHmFU1rop5LsUt3yf6W9ps8VP2c8cwqXYARhr62LPSS1YXenyyf",
  "key5": "4BsLi7zoBVTj1tC94BjZdiakhT3oHQzyuARZD3TJtW2gfvN73uYZpRtDd23c9DLL5Hutt5afV7GBUSb1Dq26xKxo",
  "key6": "JuNskEmkRQn3i7auVPZkui3ESKAuLFJ4aVBNv7YsotWJAkbcFBvTitm2g2nagw9KXz8nUfTbp3CxoqyWXFjsWz6",
  "key7": "2EgXuvm3Ps83sSwwe6YmHW6e4Z7kc5HqLvW3kXFtdeU64YaCM1huNqx7xqzn9rx8mSTQr1SK5Y7jgm14KusQg6Ru",
  "key8": "4tE1r4wyESa3eSKKrnFyZ6vfxkMFKFAviHTnxPshTHRjBu5rUdECFoxkRPZKiqRegWVbkRAxkKM1aovhxDaFa3vn",
  "key9": "29hB1VBgFktbRv66QtNbDVLDbsW6AGvLSF4Rsf4didottnQA5iHyS7PbAutgMMi7SnYMyuctyR7frGXy7p45Zrao",
  "key10": "2nHN2UFidiMpV7Q9KfnCrqde6PVhjYX37i19wHtbJ7uPARCt5n4gjFXuChy2YSxd2bJSA2D4969qzMnvqzPkQo6j",
  "key11": "5mweegPWu6Tj6LNhCYda6GfYi1pVT6dH54nYy1uzD15Cm4bYKEQmvDR3u8E4pivWtsBvf9RSgW3LLnVhpe77meXA",
  "key12": "4mTYrD1oe7JU6TfCG8q3pxFS3ih9wLy2cQKquxx2zEhAKD5rYNvFD1dF1pghRx57aCFPHNSgc2qqgPvUPRP8G6qT",
  "key13": "8AfP1kexrqmafT9rTEtnmmHmmWS5NFid1t8eNHm3Fubi3WTDEkNX9WQTrgXtM6LtWzHLwWCYRDuk1VKfarLVGPW",
  "key14": "FR1aZQwevXCs8c4bFyXw8qJTXAQW6BpDE885JpKxZmYdvE62H3a9yjAM9JwinS1k5hXX9A5m9FF96dRNS3bWsdW",
  "key15": "5xSKXSFXmTY4xXqgzqoA3YqcoD6ifK59MqXkeFawXdZ8chMmb1FaSHQmTLaGgay3gSBQvNgLTbdwf3WysLSYbRAg",
  "key16": "R3UsqGgpcifugqs7ccqU2MdWnqSvQsPXmA1CCuin7nNP7ke8W2WHvRLHQb4wZznLH48BHkdz3JXPFJRJYNQZDZe",
  "key17": "3KLrBzK14Pd9KtnSj7XnM2oLHcQHDTx8Ar2VRhGaBnH1nYm5wRQkYaGVLyYuGRHjSeropPkNHnsKkmydSRLManxj",
  "key18": "2GDdsaqqBskKCgXY2y8qevZ9Y1VXpPrPiT5e378FGemqCZqRznt2fmbb6ErYqaonCZ7KeyMKZ2BUvB83FNeZusFt",
  "key19": "3M4TiZVLuiNniNuF69CxDUwd2KZNB1gFQSoCqsajbAR1NpXxyi1pem1KRmmiaaduRfMB5KSwjoeeKnfqYcnv6Ywq",
  "key20": "2sRn4yRvS7Pqsqz5UPcKkzPRhvMCpH2CBUibaKDpfAmcpfdhVkqcygrwgjdPwBqom7KsLU1pbsm6aosMZVbsnKa9",
  "key21": "281PqEmPhXEwPtzVhf7kJVqYeBMzCX54px9juuZHUZE8CQwx9RCYdsNbYmJv8s1FKmMMDMhNoowS6AehkrCDevFs",
  "key22": "5Zsb216P2C8VXFvuiNfDbXWfRgeRV6gCnaXCMop8HH1UMVSRRWNoHQnfWgKg5knAipdUByT4bPQGoKJmCUZCd7eT",
  "key23": "4kWwLkrw8zgu3zs8vrGtVaNLRdSwBEi59BeN9KVd2rS18wGDvnF5RWgcvirJFwReB7c26NGgcaYBG8irPAciyJWS",
  "key24": "4fnzqe2YAYPBEf6eJ9jboLJqp3GkonpYuaZoVoD489NxbdoiJLo3LCaWwnT4iYEMApA2h34vBvspAj7oK3QANwb4",
  "key25": "2rA4n7evYrnXZpPVE6ZcPKhyVM8PRLJqAr1goo3vRuzDGTC78M8dvWg5vFGzdcZcN2Vyqp2oa1fgJwZNaY7kvGP5",
  "key26": "3DN32mW1ZEK16yY8UVi8Q1e4NuTatA1LSTNMvqwZZJnsD5MWgAZftTFGCXrDGTm9HxecBsdbh7ZSy27pyx8Z4Erh",
  "key27": "3LfRT5aTfSEXyCpy5EoAcRf27W1kERj3v78BbwyXWazF6vijsWaiFFX536FrkTiqLAuQhA96Ytyyf6i3fMy1WHwM",
  "key28": "3HouhcaKdsCFKAbcrFL5fJunNxhcAgceRDJ7FtfL2kiGy4Ek388qs8rMCBHj8eDtPkDoDrZm2dMKYCbckBCM8Khw",
  "key29": "5MmQtW1xXk82d3b1MpZ5BrGsbDQ3VJ2n9nxti6DXXusHXZVp1hFXrwZpbn1xBFkkFyXf3WouRsyybQpbb4V5U6cg",
  "key30": "4d6PM4nLpVWh8HiHQSfGPGzUZHXgTtNyC6Nzq54f7Lk5a47bMJzQXfMiNxbHThUJAFXN8DZBaKcxtqSaYNRh2r9a",
  "key31": "2pJmbAXm3BzM6EaEfNq1WVqkuvuM1ec2v1UFhxwgUwGQLYnQUt6w47intPiJFKythdCNYLHyvsnjMgjVKzH3DEka",
  "key32": "4j6Czmq9ogTKKS91J1ei4xioYibsCBWSwzKg7vXDH9jWHPkayg1wpTEN9QuLVX2Pice1DRxadMxNWTxBm4iNuYca",
  "key33": "2G1rrXpyxBQV4NCzMYTbHPjhVBqY9cEBewusFEJk8WNdEpDJnV59E7PxRoGtkKQ4S57jaxVccmvHEPdedL1xwuGT",
  "key34": "2TZ9D3Bcih9YTSr1gJL5UR91og6ERLg452zJVjDq6VBKHmPmm55Q2RCFPhZZ1kg7hjQY3wNSyJK8j2Y9ZftR8XCQ",
  "key35": "5BEeH126noySugSfs4gnuqEsst6oeote5FfR1hdYEgWYTsnz38rMgg9DGgRjhc9BWKZzQhGY2hW4KXDDPCjA1PZZ",
  "key36": "5rDp3kB1KHwaoeMHMAGQHs4R8zwd5yDfSM7yz8cxw2HuC5DCHQ4hGWwZoxe2gbCVnGcdXhRtcYAPtTAfUubdogdX",
  "key37": "5MkodsGwxatvL5fsPFb2tZmMHgm117tvSgFMB8ESpv6p78Psji7H9nHhGbTWarpwf8uuaE3P511JVz6QPi3AAVdf",
  "key38": "kDWeftfr4zPZLopMfKSgEVA2fC1x1LcpyW6FqzpjUj29vt68eDDS41E92uEJR5zcwJqHzH6ncXTJr1EBLJtv6Xh"
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
