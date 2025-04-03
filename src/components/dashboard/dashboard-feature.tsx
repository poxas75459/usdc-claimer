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
    "5vZ8jGSfiKVGnGuYqYtW5FCxMq81NZRptW277wZU3tkqxWBSK2WM2EqE42rn5aF63h4LQkxcb8uwTdSrtCKaFQjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5FGasg8qkJxd48RLbxMkh79DYHtD78R3Smyzyo66AfZPyxYgcSZDxTvzdvieZnhnJ6zpSeEJPqwZsx7Ec8rGEV",
  "key1": "31LrpaN9XohW2BJ8MVW8J5HTWdTuRK5nP6PK1KCunfbuGr3jq7ywBjVBbviYCugsm9NzPZVf2TMQD2RnzbpRZHVP",
  "key2": "1krWtZj1DsuAVcNVPRZeQBtzJwzM34kwdDeiAf8SDtBzf2vnJC7nigJsJyrvzonLNrZDDVVddXW6HMyJj5f33gd",
  "key3": "eaUnWkS2xiLi2sB2WNvuoETnUzPHNiAByLWk4x4bfsTdwcmg3Y3ajqecDa7TriA2JhvmRwKtA619FKaABQx7fBp",
  "key4": "411TmmfWwu23oxX7KYUpLr29jNnaCSMLQuTaHmTrwUSRjZomycKP8iuaQbrPozhQa77sGThh11p7XZ3H5Sx3PHhz",
  "key5": "496nQeA65HD7u1wf9Cd1WYEmQJQh13RF8RDMv16pns3T1Ktg3555zeBcWLktgHxPP5neLALb8X4XRfhtiHgAAsdo",
  "key6": "5LQDLeNTSRvCQWW6X2H4bofM7et4B6rCt2sk81YyRjJPVAbGp748uc3WsmsanyR5jNjjbEwTy8YzoXLVANQeKMuF",
  "key7": "28B7Tj9xJJ8SyynSENQynRZkzQooPKrWqTBPZ6nJxbeu5rC8qJibfJzhc4pxeW8hYt1iohKm5DQxA7xfXuVsNEcA",
  "key8": "3ETmoVbyZ274BNd1HAjhu6DabbUYuUS86fjYMsX5BcizJwZV4b6VyY9HMfaXPQdnM7cR7NH4YkEb55WgW7sfvGuL",
  "key9": "3iWAQ8JkmDgLnXkRHkorirGpPhb7w53wBopAiwT5YG4Zcc2Av2KF1W2mZ5uSJnvfNHZLhaPbQLH7R39F4hE2aZcP",
  "key10": "5ooqz7NqGMGCfK2wAqvK2dZNoTdispNw38bLVrqTYebCsYYuMT5bGixjVKZYgxoyDBb7NW781qRPz7wVCXFo2MLt",
  "key11": "4D3Pi4m1YdZUSYAWBitSjgCtyJnNzCZAWd8byamVq7PMbgwMPqwzNUHRHsqCccZvD7EwZ8QacR4mHxj9sJKjvjhX",
  "key12": "4KxoY6gzmVQUhKCtNek4fVQwuUm83xwK9pDrDMTbPyGkeU3qqAfcNtp3MUN3HVEmgKN5FwmVdt6Aty7gVjUVQrVs",
  "key13": "HK1hovoJgo17hFJdzdiVK97HKmsVWoqCGomwxGcuAD3bTVSk52wLJC7f5ruT1MZKoJpec7Uz8Zx6KjeuBN54cbL",
  "key14": "65rtco7fU17D59a4sMPHS7gjPYUcvQM63Uc5N1t94XVTkHpaS7wYjioiUJ7J9eCAQGAWprrCGUfeSaS2sN3US9ke",
  "key15": "2L2QJ49Wtik2HfC8fw4c3ZZFtrs3qaChqvfDb9tfm6wcraoMppLSujXyAPnJymYjQoS1JH6CUeCuXWGgVSqXJ3VJ",
  "key16": "3SKz5m2tmHPCiRvJr7PRzw8nTjz2qTBRNKQgj15XEnsiU9B8W2HgkuKLDx49Uu7U5r5DG6epKhocGxDe1bcHpvBK",
  "key17": "44aDAc6JFrWMppGeEV6gMY7tto6cQn8dEwUpiXFbt35fM3atcRxtUARqsEo5SwWLAYMtfn9x3vGuGSAVDqcGdsKf",
  "key18": "bEWuQxk5RWNwyJnoPEBrigDWCYoCM3nQHN8dWGZN5Sz2JFzDD2vfwE1bCCCWzGTTfESEGBExcLxdkbYzx26VUNP",
  "key19": "3cpgsB9jHyrBJxLPwSABtUgckcxVNVEs8QF3zsTdchwCMr4PazV5QhTfLgsbFX4bb9Ho9yfUJ2cBkJypvdAv656Z",
  "key20": "5KDs2G8sbvmtZzXniXGQ7LobRct138iht2qphW9YQaqV7h5bBFupEGyQw98PyCbW3XyWZzUTXUmjd7oG2e8dGttN",
  "key21": "MphfCXghVeKLWTAHnNVz6qx65KdGpD4LYNFYfeCCxZYGLPyiQBgesFyMhMvXQjNrxD39BMVFthXF6XVSYUBStpP",
  "key22": "5wRwNFbTTMjU3D3TcjyMfZyLdBfkJmPNpMeyQwX9Qk4MYwoDeQchmru4BNXRG2RD4M4abTGYFG4Qu9Sivd3SLoEU",
  "key23": "3cUEqWwQPxbrSDFr4uPj5CXNQFJCPEnEC71fP2QErAvvDHUNbQxy6jyQU2Nmw933CaPbs4c2KofoGeYVLQ9NgxMr",
  "key24": "e9qA6p1bgXjK3yyJJ6TW5o4PJeJdkaie3oEg9nx9r3VLwrLas7UeHdxPctH9WtTVJAS8pByis8Cku9W5ADX9SDq",
  "key25": "3KrRw2G7EAeh2LKoe7FqBu9fhXdRU8CMkinJJn8PCVDXVFvugUTncmhbhWoo9ZaouxeNqtex5NXMbqXH9Kp4EUZT",
  "key26": "2ymiFwbwMhkVe7xsQ433eD2fnsMz956TYaXtgDEq7ompFNpoZvEbGb6wNxZomZWcsTSPtd1BobjMSrjScqs8zv7",
  "key27": "3gZWE8exHDwhMkn4hkdhmQ8xVvkfCan4aMQAJ157QDzW6RAmXpS61qSyjGTSCER95T2hPKNsyvt97mNAq1AxLEh9",
  "key28": "5RgkyZFTygJn3YCWRJk6Ba7zt4rQgEagSbL4M4mQ4aCu32iFKU6CBPgxCuMuhJ18pWu2BPCZ1LigUV1cJssFFqXB",
  "key29": "41wUvGg9a3ZkZuUb5VT3aiDN2jH8uuDPhDusfEvHfjhfhYhCc6tnbxR6iZtVBegErUryYDyuQq4B1d2QmynQpgd5",
  "key30": "3rCjF6qnnLcEF3SgDfejgfbqrNs338kG2mYshpEQNydU5hmYm3yM6eb8DXzck8bcZtvjd5dGTUca6VRAqEM9daD4",
  "key31": "4tHHCwxBU3Lo9WRUu7XWocHxoWjsc4RnajvrAvkXjWAhUQ1xWaVgfSGLYNhRnHt9XH3QkKyezvnuEFqweGNEzJLe",
  "key32": "gfwCTLiGxFLnwZcGgmtmLa1Q7idy2ki6vFhxEE8oe37Jjvd8G2y1fbnPbLwFu7c7QnnKhED3kcj6oCmfaW1E7VX",
  "key33": "6jYnaSi7fy2hzz238hwHmWx582TAHixh7eWiD6TCcZ9BDPDHCUwXiSo75SWUEaJn9T94jR7tWAB5tdgjYAkkFNo",
  "key34": "3FdzoFXdTf35bZJQjuRqXA9AuZ8fDB5brxtLP4nEALJFgp4ZwNxnMvbxn3U1WDqi9n8kyy5zkMXuhSx7YYpcpvF9",
  "key35": "3dXqKUyt66Lub2KfzuQ6cxqHbtayHvMDDAjsjEJvZLmqGk3WPbL9FRNxhr53cQpPYFii7ueK3UZgvQAGEx4fyjvY",
  "key36": "NUnDiYxMzHk5Z8T6Mc5LxmBbCaaAeWatc3ky9vM8YWeRb4mWpJ6xPcGqmBY5Wmq8ALZmDLfp7LJ8oKQ6WpNqmun",
  "key37": "2Lb9cdwk3puR8FyqJJ1viNHDPQWnXKbkDLnDoU9jQCjMqGrDabN57wg9NQN11RPJ8f6JD89PPzeX3BdXYdRSJqBW",
  "key38": "4i7qGRdt3cATvUcTRQzU7Ce2fSYxtyAqcNo7m9YMU15qPaQH41UFBKSNhQmZ7oKgeJXWmvoFCwq3tgr6CPPpdUyn",
  "key39": "5evLEWxitqeWfatP35zavLzCdye94m9oMrVTiXPTwd3Pctnj8JK6A87hJJAs4h9BdyzsHCnLsmsGmTQmFFEP469E",
  "key40": "2MM6E1cKvz5mpSWWM5LAzDvTwHGWuphYaAdUjvCqsiMHoE1iKXqf1aoBocCrSgnwR74s7fZFchQBbpMGxzWgFsWV",
  "key41": "4TRR9iA35ZLM72oDK9KNZG4qVD95aHpBDDNHY8upf5XvZt2VTtz4NCDUVezshn7ALZwVrJswwbJJPtr7dCP4sztH",
  "key42": "2p94zYN1Kvcno6BWGwfiFsnbcVeft1C6WR9KoGLYSZakYwACCtgKPTk53qvYnf7mhChCs7E8ykADXC9cmSZUY1bR"
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
