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
    "3ajFBLYp2qXagryLxDN1eFRyAufJi5EUPCVRsbUX81eKi1vAZGgEgt1nYEJ1SXcVj1G5ZTiGDzakX2EXfFc751qE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APwuowZswzFAqpEYmRjxshz5SWVHF8ZRPVDnW9q48Xq3D7AhtajssUot1NwDDUpnnBvFkcmXg2x42edXjrzY5ko",
  "key1": "3GuHYb83YyxisWrgAFKEZGc6fQes6jfVFpNo5yjaLpCS4NcHApFMhoTMuFtL4KwhA6euHoVJAEkA51vtxBB3XJke",
  "key2": "3XFFQkxH2D62LVDXw1uizaSXoJ3WKYgh7eSJASfxk9sGSSTRTQ6HFwKKuT2ztVKiHVgahJmwXXHJKrWMmUoSQLJA",
  "key3": "3h81xFRs4ctNea1apzytyNWVEZcTDnQb8ukcdcj6U4vi4QSc9zz5y8KBUdBeGvJqNUwQVZnkct9xUFRk9UTx2rdC",
  "key4": "2nNLtdRFynzZYr2QQvCs9WcUVcmrsx2b1mnKVFmQe75LTC1QjGpYdBwV5hz1UkGw7GkvSc1QkyFuq4sYDEN6pUhc",
  "key5": "33yZgZooTAL2nA6E8VREksygpr239HpEhjRDdBfkcgHYAViJsfe7nT1cHK8mvQMo6UiNGx61dkgukFsxEhtwe7xT",
  "key6": "u4p83d666aitwDsnSjqmZneqeQb4msZiFt2bgJYr28EFE5Cxcz5MNvWRJvZbcH2r3yd5CHBakzQPBZUrPxhtf8L",
  "key7": "NwnLAgU6Y8UCoY3PkHtK2R42FSarg9BaHALLtsdkFroG6eUokuDZhDwTF78tRNuyGw1PyqC1QcWuqTg6hZQSsXw",
  "key8": "5TbjPzXgfQCMMfXZuNFfqC1koFk8c7qaGs9ZmDHNVzoZrtvp276GEms5Ai1DN2VjZ1zCtEz43SGwanZtLnyn6Dvj",
  "key9": "5txEugTNyp7RwFhQVRvuofiEZwqMosX75i8LgobgKAqLKkpSVprbVME3C48Zge3X2c6gGzc4gJxASDXcNBqbfmVA",
  "key10": "53xPdFtUNuDJH2PaJuhFBXpzvTGiYwRrgerouyr1gtksFqy9tQ8KYwhuHu7HQVigVQSu8cHDrakJVfUMGXHvvXL2",
  "key11": "4cYmQfFrmcR621KxZKPjcoabRzjWBVajzM9yZJqTx3KDxdzNLfuT14a8umTXrRNMiNarovWttbfxjBA467oZPwpT",
  "key12": "T73e1Kubofn9fRhUsGnGjukcGsmnLRR8CYtrCvquyGiTBacdb1tLzUPSNbT5SE6BoRrPfZM7LoaLLg3k2zAPy6T",
  "key13": "484pcdTaMKUdTndpXywTowhE2ZgCT5Qe35koZT6uZgSqggPKVkBY4Sx1Hzqdrx3a6ns3auYZyBoeCkn41jHJ2xU5",
  "key14": "4Su25HvfVc4BQ6XSkKwQ9L8d4zZ9uBt2KKMTtV4WeFsHKWFmN9dMhSxeQ3KDFcZ9YtogTM3U8bSTUTTykDKdLUZn",
  "key15": "51msGna4WjPa6AT6outK2k8ii99S2AzD9S5juNz66ayG34YB7LjkgUyBNTmMgmfYdMBa82DDsYi6UFSbwXB229fA",
  "key16": "2B7FKMM58Rd2NS3SePQ4sG2AoGG66wPA1pKagCFR9XBzEhCKSbKGyEbiSDdpP5eE5JbsZgwSuSTEnvv3JqBH2h3U",
  "key17": "4jLFuKZTMQRtQEk8Lh3vrTXKA1ThUJCttoq2wvKrrXGGfF3usxKiFTN9CW5yyJ2JXrhuH3LQ7RBfqHfadq9EpHzA",
  "key18": "2iEx4ekAsigrvNrRZgxM3D8GShefBV4gXEgMqcbqA1ccgLTccJAw7sbVFGnPFD6kJhD6HcXHyDsCNEjcYsNq7NTA",
  "key19": "Ucz7uzmnxPxa75JG87Jenmx1Y6DBzkiVEBG54NKmwxqmEdVjMGwjVRKm1b6ybPYGErHbueYZBW3AUv7SuecYE5s",
  "key20": "4DHHyd8mKmYbkcq6PQFcACwe8JfTxUwqhoWs4hCdopd1n7qLV8JtegXMboCb5nWcL2NyFGshhYSfPNx7XbiU8YYr",
  "key21": "TimtNXi2CqdaCWRutQpgzuaJatVpWQeYQgPBQn7aFmq1zjtiFKdPtSKcdG1Jxb2YLtoS4XdYbFPFShTRxWNdkNJ",
  "key22": "5cPU1wE3e6t6CBYcUsD2qMEUyRnMi6bZGqkzZYs59TsCTeRZcp9p3tkc9iaVMwkYqw5zBkAqwpcazqx9nuUuQEDY",
  "key23": "616wSGR3fJm2BJLmBoKzuQ1J34PRB4H9tzzV5c8dvesJ6X4CFK3qVjJnJpDwJTBLZDGUo35XDMnBHwxrjRDF7AtM",
  "key24": "4Np3KacRLFh1FcdGSDiwwKAn6CeXvV37aL6Xa2PcUxHQfTaRNUtt8NzensNbyh1ZFC9ah2xdpJ3XUj38Edh4VWoz",
  "key25": "245UPA1BEbUwi7rHdU6xb3iRB31wwGanxPdtDHXRGXNHHNvzQZyFoXA3iwuw3iFrz68kzVh9FYfvu9FFRsmvFTPd",
  "key26": "uxWnD2xTVppmg8ngB1E5soZKJkXmGuuwkTSGtKF8ELBWAoMk2tCoFcmg1BfjqXxiFu1U5P8ERQ5Ys8edjVLapoB",
  "key27": "5Mm9jiwXqeZg5L51NDqxUZJ5TaVzwBA8E2TvweQASsvgxLL4at9fPQEGNPjGeX4DhbsBtYPxwahaLbGDX3jtszfm",
  "key28": "3mvEcDqyHRTVYW7v8s88STjYNJvKujwfAT97kLfTRUqu2u5bR8uMCeRHWoioBBFWzeY8ehjvLBLxsVuM8CUV6HPM",
  "key29": "45iAPfJYKBSzWWX4H9cP4mgMYc3URjGeqzocFCHYwyiDi9AH59ioMAaN5nwcHDXan6djAifHMaFyKHoihKerfcie",
  "key30": "Qfxuf8dD2dVvWSXJKz7WNYoZvgTwGGcPNzJwXteJmP5tpb69NJZH9bxk2TJj52j6bEq92JA3JocPsxJiRWq5gN3",
  "key31": "4gN2CqQq4mwLiwRp2mPdPNPVhTKbYowXXar8wYzk6Eu39enCMN9Fqjzf3Wmbifcc8hBpBn66biPqFSWSN3yptPQ9",
  "key32": "3rZgN9cyvMNS5EJqqhH3YVEJ8vkTreksZsA2NPDLJwZSBz79bg6PLNkzy1Z1RxPCRMdD2EM1C2AFGhcbYqsyVu3",
  "key33": "5oukXJVGZwAMeYYkyazAPrHv3xDeq4WjzUShGbNDmqdqito1kQQMmejQzhawT43g8Nm9WxWtotqtdqLC4Kqzxwsv",
  "key34": "4bJnmfh7d5UB3XSF7fijFyu5GwehhrUzCAb7wnZeUxc5xzHQNnPQRk25WjnvcJVtNWbFSP8WTJcug9fnWscYrzuk",
  "key35": "pXkubXrgdBWCfhcz7LWnxqLSqGnkyy8BmUXneYvbrjHZqxPGn7PajEdCXNsvR718M25vYGhcfWcxMdXpeYwQQnq",
  "key36": "3Y9t2HgoG8TFWiwGykFBrVuADstVsZfrUpA9Tm35tMzrEeC99K5Mx7Tj3ubat9ghvicr12UidiEARJ8m6TD9TiXS",
  "key37": "3FpqaTVCfwHdMXxgqYWoE6aGk1Eb892cHitA62RyYeAXwTPgroMh2roCoiG7ifM73842dTTbPdrzHsdCMBHwsGY9",
  "key38": "24T1eu7o1of1DuNG2vtypGYC8PdKge48FnoomgoFRc6d22LyQYPeipyUz8P4fPFZ8QTGBPtdqCQFsHXCdRDyyZp7"
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
