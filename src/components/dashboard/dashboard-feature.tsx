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
    "3PppLqKUm3KRH8aGFhc4vLE7YAuhSN6cHDQ3pikAAh8b65sb1PjNneZpRHwZZ48fBrAAUq5pCJW4sHZToYUFrWXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7fDzr3Hu6JUANvooPtjEywGVg3gDUru3kMTNnakKuYLHC7SNYFEwLg4cYMkTAvRSzzCgsEkhTuBttKRFcwQJzG",
  "key1": "5xgrzwoBKdqCR1YXXV46ezcannAiFZR33sQRY5KAr7PxagJ3hQqpzjLWYE166rCk4XPH2hQMrxiGRQvpMGR7dvfG",
  "key2": "4FnkLgrsjpRgTzcVHHofgnmWCgZqwuKticR8PWrMoPnaRxM9xEUwF2smHDipeDeS2QDxoRuVKSttBwaDu9Ea5RrN",
  "key3": "2gpBMobBqNKDG4GEGWGoZaWVGzhhztvaienQDhxJkuuoGmWGySuyUB9cqTFoRe2LewAgWwLQ2i8QVe8sZsNG8QFP",
  "key4": "2spJ1jvPEmtneHoPc9GZTtVFaPFML3uvSFPQRC5ueA8g4k64ccpVaJsPuwkRgxcdkmdZVZVnnf4diU1cB8JyNhUB",
  "key5": "nyoLVEMrL8gyGbqCV4sSXgpiPRSB8FWGsqULqGqvkc768XEJM6vSbwfaRPXpT2TQdvusJHzd5QiQqUQSMu8DwYM",
  "key6": "3x7vJ2dy5yFDznFDioEbgyVzCwTMEZmctHtW3utAfNXBW9hgwJT8ptBXYwkRh8WjqcAnv5TxJSMC3fdiPuFA9FN9",
  "key7": "4sUDVb8rEAmUgGrHh8FDLb3LQKJ7cgc8XTKJiqQKSbqsPBPf1Z9jhZYzSip4hno7knYRN62ZCY71PzH1VsLpPtDf",
  "key8": "9ujRMTk9PAkxAxW17dfBjw5ppBKx2EWa1hBgSRqfx5uWeT5u1dSQAmohaW67hM6CTyoELQuvpJPssF9NR5sjfhc",
  "key9": "2aZQ8jbU5RutnaSQdmfeaxzP8YaZUEM5wBDXi7uisY19eXpBjDp95UnyfMfGUhM8ERGEYAE9ZYHod3oEwqwQ8eWb",
  "key10": "2AYpFSWLEj4oPd5VyXF4cFkufH7LJUU6qHnJAxJP5VXJLmRKfN6jncGSzjCA5qv3Uf3ioT2SALREmRKZms4FE79H",
  "key11": "2vFSaU529XmKEAtfR1nrucx8iGBWN4z7jK8HRH5pU8AytGhArFxP9yrd2r2FESwQU7S5Noj34chCwm8ccf8wPNDy",
  "key12": "3W8piQLf3VS4CMyzs6StrxNkdrk71PNnQRDUZJQAVyQFk92UNhb9gU2nB1jkVXUUHJ2EgrzoS4S9Ni2GXLoAMCwg",
  "key13": "3vMgcaxAD4P1XVysJBYvQZfvsNNHhsYe1YzUq6MmLeMQ3QmTPQHZBQZRjFyQL3rBZNdDvwrF76KyySDEevw6bH5E",
  "key14": "3xZAki6d9tG2yxCdrriKZ3BBpsR7BpPTiJAyi928697HLSkBgF3uFVFTBAVFK7gpkFSdJ1Vy2PfVXLmrHa5JscRt",
  "key15": "4VSE48USZgqjER8mtrKqmHCDXux6M3sny1vgbsPremcYdZ8fxXcaDde5K5WsHj1hGu52egc4Lp2vCNVz1n3jZgNx",
  "key16": "56B4GJZbSdEs8bd25KxGL6hqcbJybXXKGxJKhgppo9fV1K6Kq4Gz8Yb4TL4iYa5LxGX7ckM2j29MwmrDW1GhuCFF",
  "key17": "MVdMP2r7wtNgAx7XGW42hXJw7iiGhME8xjeiD1kFiZDkQFbHqGx8xEyoN2mryhEr7UdviUivizaiRw5XZGnoWw4",
  "key18": "2f6Bi6nvLrJwAzJFEPqRkhwzjPyEgmwMr4QpboQVAznqvxtWALT6FWyv8xENGBoJZ9nGnwcdSHFxRXw81H3shFo6",
  "key19": "3Pd8mrJ4zeYSXPc5ZhDz1gJY6vA1rpt2Lx38pumEajH2G9FNxmAZBGhnPBfYT4mxucdJERf6cnicM2Kg6pkr6SD6",
  "key20": "2Au1wnVqbE4PC3XnySgMdd1qQgXmioEstFMqinv2En4XUK6NY63mEyAV25ehGoWhWzGgJNb5TzwUZY4WJD69zx8Z",
  "key21": "3M7APSGb7jj6h4C4XSXrVowh9FD2s3v6hcD5eVe6fcsYzH4URzeaSZzwoZBHfNP9tHkw8Vp2jhLddAsGJcs5kizu",
  "key22": "2LVStjwLuRY42oFjA6xdVS6VJuQrQrSZ1AxTMw7dJsKSRx8eyGYZNCmdk6oXwtdtSBtiMoRvLaxDCiVZy5woy7Di",
  "key23": "4gh3TNRZA8TQrDhZ9ZGChxasPQtyW5mGiYLDH32jhXGuxRRz97WGfYRMcc8teMLhoTVGk1xSPV7XBRopF66qbmBF",
  "key24": "5ebHHxhJvRZGsoNdqmWdV1qSbQqKTpa3QuQt9KkmvjaZ5bmx33Tt8stbPQxX4GU7YXGuHqkBe2zYNFsSFiEghjsT",
  "key25": "5YqNWVBCArFRibAZBGN1kbqBzyx1FBwtvom1EtYS5YSwqWR79SrpAuk3VGyFBupSYytWsh9WaV56nFymwSnfwtj3",
  "key26": "3d5531AvyAhWKENuy7XN9BJ2fDFRTvKBbkCV1jRx4FG4J6YbdwVyFX5zj42gYcLfZCmHJerMawof8tsnupsDyJ2U",
  "key27": "46ZFgpLehmYzAQvBCrDdjhDq6Xxc33eXiU8AafqxCGFrj6gKcdDuJuk1Jgk9hafbxwa4vB8acGugmFgyQ4b6p1Hz",
  "key28": "599xLwpogLtf9Bc91aH22W7MPzRcLHyBfxHx3EdYgMwxc6bahxJvkGUxv1LRtpSCibKAJmKLxpCKuLMjVq947grh",
  "key29": "3NFioezi2BcVQBtENj84rB53pUQzESj6nn6ZBzgebj81ZoyfDHxxwXSPSATKn6jcyX8huGpg7LHPJ5e4McsaJTp6",
  "key30": "4akz6SXT5dUbHVJa3wgVsa2gyXFkugxoXJnMx5BLX5ew1bKq3pYtHBHyb7xWjhxWUMuDaxGrXG81rmjNBnSph68B",
  "key31": "5B8xSDwsLirmhWADeYqEa5JnN1QZxZwtGcTeR9CHjYPSiVTAZSsZxQ7hXTnMXZeaonfPRHcfPGGByLZzuhkkvQbf",
  "key32": "3rtyF7wzCECDqzEDbf1b3n29SMKpXg8CuqzcxRVWjvmQAgmk84cWV9jjudo9jzcesGncJkdwiUbF4kaxoKWMC1jM",
  "key33": "9XXq6QFy1FU7ipiqHJD2LmXoDkgB1kBHGK953qdoahgGrjS1eqBmznoVyB7Po9WprZCnVAk1snoPLwPK5oozhbM",
  "key34": "36ooqYNX1hbV5b3nLWLMrhFjmkfDqdoxw1KFRyZ3LhMHjdxMfbu1hTYVANkSjxrj2cQuyxauY86AjFjE4zdQSRe3",
  "key35": "4CXx7LgUHvaghrjKPuP6dFdfULUTsGLVwxB3sZf9aAi3h2tJPuXTDy4Z7E8YJipBN88Ba1cNKgTRsJP8jkjo9Xow",
  "key36": "2935Kg5BubTirvPmubnsSAYF4vwZivz89sQQuMZ4MJ1nEtMseeByYUnnZ3mQV1HpggnU6yunLYZzqQQMjn5J4mwy",
  "key37": "247w97xD8tTeFtpZL88gmYVCgVxCYp6hX1yTCSsazsqLF9HEmZhq5UdYXVD7XW3AHnhGZsUEPMBiAHxwHkMnUsTK",
  "key38": "4TWdLUS9C34Fwa1pPmpHAPXmqd73jbTRQ47DAjLocGw9ZyBF9Wqyggeh4XtPKveA5tjzie44zqeKcBf11AinY4ai",
  "key39": "5vd7kMQrW93rvcuRYATmdn8CRKDj8sehRbmANnjxbw3v7LJ1ozjWBodx4Y1AxakVyWtvuBPBSC8ib9gUd7eNs26g",
  "key40": "5FB6svuwHdRHK8SJoot2hhdGgc5t9H33w7E7tsDFFnnV44Pwi1vwRZS15cn77ttRMn1CaF9pU1PdmzBUKv93fyoj",
  "key41": "wAkJjaaFeUUodU1XD4Fd5XnRNwE1xNgwEhrTwMv48hXUtBb93q4hCRfdaCq8wMPntb199nuDueLRwj153vX7xnr"
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
