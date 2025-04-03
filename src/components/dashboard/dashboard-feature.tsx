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
    "PHu8DvaJPXbu7138F6UspiZyfwZ57cYJtTU844rHiPGjr4R5ZfyBnjR9uj7FjCyj6HMuPPgCnbkKCV89XCYK8uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhaVhLFKxY34gfD42nMRFNiSTWf7wmFt3XbTBHpdUjehAMg1aR3UrMH4gDYdryGKd7cJdtybBPJ3t1gEsLiTVpt",
  "key1": "4zCkCwkL2Lw1KGzGor6r72RbAD5H6QhUUXgorZGifynKB68rNg1errsAcCKXLSJzMUjoqoqMFi3R55JTXXWCJotW",
  "key2": "62SyyC24G6znbVFRYUKxGnkm8tWWc8XQCC4BEmQW597aCWP1GxUwAfkoCkQCP8AiR7Qnfzh5fnnkrGqgEBEKniF1",
  "key3": "5PuJghi3EXAjKuxhSQTHbpicbiSJaryjjq6ki2HbYLKDUrpGyoNg2Fn2FFeDTQnkLHMYvnDgVTE7ZTyxhrh56k57",
  "key4": "5y7KbWDKGz6GcFmg4FBNhMnh77gVWmwKJo3tJHjJFHdGoVdfj4HAhYmNFADKtvDBcr2DmG1YCr7DHBCSzZ18NHed",
  "key5": "2wMoJzM9tNy1pfH9mJzmGYHRz69p3zTReAcNgxH45LvhGMt3zt5B7RPjqXVXvDwTGJbTP8HopZB588Nraegzeqvk",
  "key6": "4Q3SaDZmLk4qkNA4UdQgqXtCiyp5U42DxuyLaVskbYResKSfh7RTJ8ZAZZYcbWeCawMKvQBVf7BdEjk6nEg6AnF7",
  "key7": "2YW7VtbvoTT9ugUAC3sRq42LykPEraisk2XGZQJ1npqxZFyTT6R7ow8epbJnLAva4S5LfwkTy5aiBLEHiSSzAgXJ",
  "key8": "2WmhRw6KzpNTwjKbPCd7d4gBseSVs2pT6iqDwLzC5RY4jxJkaGp7JYozi9DK8XNSQBUJmzecDr31XhWFxJYD367s",
  "key9": "64EXjnuSYpkitQ4PrRWwUAhJNzfnsrpe16HcyyiZSAotWcykf5LUCcmf2XayaJhV8Mi35PNJExCyByveDMBVrFn2",
  "key10": "28BgcN5FnAFESz5G4HSyqf69WnWYwDArFdwqWfwLHKsdnqWQvSp7c6eV93SthZzB46rfj7qwDKKurQWsJRpx6JyS",
  "key11": "2zhLASUVszcEqTMxZop62aNYVwELaqkWETCTDzqesJ8rFC3DT99MS3uYoevDVLxtz9x9ZLgMXCC5byCDCGCR8uWx",
  "key12": "4VoZC9Dqz3ps5J7XothAzgk23f23CowqViG2b2Gz4Xk9YpEDcg4FTaaL3nF9GW1yhDCdB5mkFUa644rEnTtXoYK1",
  "key13": "LkqCFYCtVirerNYGV5nfH8EAA2TYWVdyDygURtbfq5Zq1LtZHPTKM8ufvH7W5sjF4KMCWQ3jaBKVDRNT9ZQ8Yry",
  "key14": "NkKgEubM7pA36c5isTzYBbcSiZMcf4VTZEWD5JXSaRhvfWLDbTqQTaRzdXH5LbK979uSyRjQGqgaXEWeKPULjNH",
  "key15": "vz2q7TeFcCzBvdDVrvbSsoz3FJft2adpKufE6uPCXraceKPThDhg1rCo3uq5f9MSueEL4Rz4fsd2Qh9BydHpP2s",
  "key16": "KEbWtB8R7Mxi8ZTJ6FqFbFgJ3UhTD44G29iUqCAZ6UCe24Z63zePTWCybwFPkju81d5UW8Q29sgXVDnvv58K1H9",
  "key17": "3m18ViorMmTxvsrwGiskmsueNDSmCboEfq4566H5UEuxawUKb76pjVPvZ1ciSowmAasCzo8Vw1DorUtMCD57oxNV",
  "key18": "2C8FyjoMnhBQQmuvZw2MWZVjhouhy9pg7QhYLS2E3B59eFFxidrgodU5rpGfhSgRFekKd6oq43RBST1t9gpMnxLM",
  "key19": "4dwqWCbmMmvFvnDNK6SmqKUUKBJzz2f67xHysQaaKU2CgCJYhJCnHGRy91kanj8X7rt6UMo1F5HgLDwKDF5Y9Qgi",
  "key20": "aQrHNHxyjYtJDA672gnRyawN64VnxTA2Jbf1cP5YHqHDWeVNkyMZu48Pv42wAnYkVVZceLHVtT64M2M9rAhMdv8",
  "key21": "24CTvisPRhuUvPziVQfxTGyJURRhB9SwtyFoHath3PQxUtGNFD5fdSmpC7YGr1GdrirsdCFwaT4xELvhEzgPnhgy",
  "key22": "669J9kYX54LVN3vjGZMyzQi7ujaPdF4gNyAfi1v63BncQjoRqrUt6cCnZ2zP49jWT3yHgifibKjmo7JJEechsuDo",
  "key23": "4QgF4GJ16hJMoYRKcFP45y3AXy2uYNhGKjDZHLhqTuwLLQNbEMmAzKGq8FgETG9nxmyKan6THtLs48Ms3whMMmNg",
  "key24": "3xkbxb2qhBvPAqqnMSDkFHaWhsESFHkPNeEj8bVoW3ktNkCQZS3tpkk8t85Bc4FYdUCpHtF8XT9osuceaajQbrWd",
  "key25": "4VJ2wGLGEXvr4aoqdXtCAPxjxmSYNngXWBPZKNsC4kYioC7MUU27UB8KH17DxWHjtUEJyt4zwzaupbo1YC3SZSPx",
  "key26": "3K7fp5Jfy5Vj5q5MFrzUCoMhBuQ77r1dHesucApLqu7Sgc6cbBr4DVsgMn4nEZeMXTpM1xYAsFWxjX4SHPpnhJgx",
  "key27": "5uWiF9nMytocELXXWAFzLDEq1A9Ns3A9dJnLBQPrwDjzrGjkw6gQWH5SiQa9LVmoe62aB3u2NmFtmD5XtwRutFza",
  "key28": "wbv6ihHSdVpQrjMxxhUUTtVqpid5n2F3H7ui8Kxz4xumzNRGyQjts2XGyhvu4arcwkRZCcekk4TVLXdpc6ffX9x",
  "key29": "NpXwBymF43AdiYgpnYHPAoDtEwqYUCyW83u4BkNaFMFPhpkpRXn6Eu26tebZknHxi7yjFrn9PF3CohtUviaFmGs",
  "key30": "3aeZ7VE679UBMSMdbNCrj6v8WXiXXCaeCVoonGgNBvhPGJqc9f3NVj6sJn3ghUuTfhei7p8b9ZV414pJofCZrxb",
  "key31": "3adX8K2PcWJ5MhGuJo142EATue3A1zwzYfsHXEWkKaYYSsJr6mzuDwVBkb3Rrj7Eg5Ykdgfdew2xhyMgLpS5x1jw",
  "key32": "3iRZBFfXQyieYvXQJqb5Nr9Nk89LD8f7H4SPz9cyBkvnLVcHR5DHTzt2LrtWegkVZNtkRDpJ5cPcMdpdSV2Am9rZ",
  "key33": "6317L7EQYfHcft7a8pa1iSyzGeCCkvgbx6D1J1oTBFTyivhoyQyqVgK2obuQZ9r5d4XE2drhzxPLuyuJxm2D1Wmu",
  "key34": "5qChcbVKUCX33oZjZsRVqg99W668itKZMX8ad9Mr5UCbwExsd8eqXGTgi7jadqxKjWZvjWjuSRrqaTDM8Em7MbzX",
  "key35": "2gJPi1pBw8q8hmSQRmwNAJh8vSZRDWQjxboJsr6sTBM2msSrcdhCR3JoUbqsWYX9VdVE4QmXxfk7y2w56PatbjqM",
  "key36": "37GNRqFJuUYWuqwruW7PqvypEuCwoKcnJ6N7d4uz74fv9ojVmmyd51MUvfLaGPGLXdofSq6L88kempMXJHAioChY",
  "key37": "7As95iHFiESRnpFy9mAaib2W6bZcfvmhyFA6fNxvwpU1UzUR78Ln6uhLtarha7ZHRHs6grX4Qf3wx8KvuN5EeMn",
  "key38": "Z94nJ2pg2DKhu2cceYj41w582pYWCyn6TSLcUFAV2f7vW3NpoExXs4hi4fpUyWi3qxcqaBJ8uzUX3VC8Hg41yH7",
  "key39": "45B9CpFioDC5FUAoPJsoiDVqwAi1iwBVbbbQWb7QYSi7FFmZHEyQeZbBwhokA5EYRTJzg7WFsLbootCiLtyJLn88",
  "key40": "FsLsZBmEhH9phwnNAy7VwT6bqxojaSZZoG8x8FSdmufgky3BRjUTNbUUT78JVvn7mjrUJcPiCQZLTs2tWAG6cG9",
  "key41": "2D7vXKJC1LTMjpouiWHQrL63jTS9CVfJ22Hypb7XkBJ7uz4vS6qxncxuZwaz9buyEpszp7Wkv46b9WwUQe6Jjq58",
  "key42": "3GQZ8p2LEUHSkYucSdCnJuunNjbi5byP7MdyUP5ZPaxiaDkvVg1yUxT7DBfswqAhdHkefdZN9aL43FJj5nwh8HsW",
  "key43": "3gmBusGCPkw4WYTz1xFbUuuw9Pgh9oRrmkVbYfqGU5BFLt2MVUqfkSisYvPWYsveNUKw9kYebAroEPtbpLkYVxgg",
  "key44": "DYBVxCoEaLhSRe2pWmGY4m9CVmatDUAskepzdgtxMBMF1DeWNCKiUu37wEj2HDRAnwv8UXEzxccAsqun6BjwwWs",
  "key45": "5fSbjM9yVTEijLi54v6HnGJDTyYgHvBCaUALfD3M7iu3TZQDikyd4AaPAqDdGq3pgSG5hNuQHFByGNmHFD4GEiLr",
  "key46": "3yZik1LeSuriwSpvnv9gqh3kn5buRZWRAGmRiuCwGhrPag65nvERjyJhCJtD3oTCsXidAWsv3gS6MGD2g8U5zp4Y"
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
