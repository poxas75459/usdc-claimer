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
    "2Mtct7Gr3rDM6ajUcQsPSMm72VzR4NjErWsRm62RNg5Xuj6XjwWw9TWPnDK7d1T6mFzaKJQdMqT1wRLaQvYBKLtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xfVZ9Bf3eRLNrL9hM7eSBHKvZSr4SHLZGZU6htBDrDeiuxDF9Yd8MjMDGFSgxgbyVcA1dEVgfbC63uVVPYnquLZ",
  "key1": "5rbiW1gLB3SMzcSUrbS25y9MJ8cv8WyRkytcWQJakjy7dwKKRbiWthwk9RqRESHSzmRWmCAwvEd5wiAHjA5pLseJ",
  "key2": "nrLLUdum2P7k2yrr18JoHwFCwn3RNAgLLx43cbytamCow7qLftnQFcJY5qjVRV1XpJbmchTnE652PwmSArYLHRS",
  "key3": "5zioJUQmnZhcbjRhppJeTb9vYGpHVWnwQTewy2Nz1q5qdwM91bEVxUBUtGrGkdVoNqwNfiEU57sMjiHbyAawEHTP",
  "key4": "3dPB2NREEg1LPZx8WCiWPqurL3trnjEm7isZediUZExcyh3XcsdBjVpji4y2cqTDQPEGYfS123eM62adJCmBDjh",
  "key5": "52cemdtj8azFhMpwyJEsUUcfdBuR69Pg73nBmnLxEXFsfNiMN5LtQEH96cAsiBGADCorjSPG5ucg1KCgcrTr1byH",
  "key6": "3cedNbBkdrCK2zifhNEw2gtCqBuQWepyUyutZJa2jYEMWMe3Rf58bu2V1pn5v3Z3ba8zoCJPPxLbe9ZBqfFNieFP",
  "key7": "sKeVSnFq1tpnFio2G63gnaPjPtQmtXikkYtQa3T8MQTtqWkmcBmGbFwPSLKLw9v3PKfVvtm98V38aiaRqyhA4KN",
  "key8": "CTkeugbMdTxPFPUJD6kx6D2WD32wYon27yFEu21jhRbnD3iET3KmPvVh9KyT7zQxAwG2Hw2YigmgssbVLbjXRji",
  "key9": "4pH9dwUjVe9YJ1KsEw1AHRv57KQ5Hw3ZPDf9iSV2fX9BWaTshHxHAhnzw7EPGqTBiTkUaUWpZ5DTUWMMG5fd8CwL",
  "key10": "4NACs5fN3EBpmQno3uo6RRPGLkh7JuCm7uhvKMPCbjky2gev2EUEHkoW1MpqchgDW4cESixTCjkvqXR7fvqTVX4X",
  "key11": "2sGvrivL6RPP1bXSyikfjTbJm8yNAekLNYhtnGMMszCXcNz8HFMNc29n9zQeecFzuuqMAM6kSGH5oya6TpNsSkur",
  "key12": "5JdGRRMHr2dYgp9kouJ2PJZ3AdXuduoxT4PzHU4HZxk9qj1xkLPVWe9Fxnem4ZRV4GG6P4qezBgw9CDfw4tntkfA",
  "key13": "362BmhoJA46jMPG8eLd7PxLqDoMaRocyWB6Uw6pNZZc5snDVBK5sUeFXUNg5F7Y38eCCdxczdpy8LDBsfjAb8r64",
  "key14": "CzEXuLxrxpjRironcDU7YLQqAs9vHdmxK4B6Yt5GBkrM5bVLujUNDHiqwcYWtD5Cwse6YxJHpPESE8DNSGWTKWt",
  "key15": "4BK2c1LqkBgV4uQL1NDcsScrooy24jSpX7aRd6uByQiEZvsrUnUxBP4n9FVWnZbx6ubLQh8tqNCrWdgaPpgfQS2U",
  "key16": "2MPNMqDRfvYxSa8L9EggTEfkqA5JxDmmBUrfyB839zN8kELwNniUWhUXLVjJsv9xHdm1Ha7vBaWNKCAHHAgsL2GX",
  "key17": "64DLH37Km4zwE6GRjiD2Fwhq1mscPsDkQubUvZktRAALG6iVMzBipBSWDtEF65Vg5vkt1Setv7rREWBWxzyxmZuQ",
  "key18": "4DySSZMxBB3spf93DhybCrgdTqFsx3ePhHCkh1vPoFUJVntmCXzvwfuTnL1sXQz4aGW65aVvsbFWLYmqTHYGqAnr",
  "key19": "GDCoK6V77CEvwvu9Wsxj8uthgiuMg6TPMwQmFcjz4qoHivou4QFjsM3Xvfth6FxCXBfsZJFyRCZ6hej7QrzvjE7",
  "key20": "4f2WQXi4DJa1eLAG79hfHBbAHxs3XAwxHq48nQGdCdQWaZ1Jb7HYEjCtKX3arcKwLU1wTuMea6TQYa3S8RiesBHv",
  "key21": "59z45xDiDGTN1ofURwHJ7jXYXtg9fUdxFwMy6EUVisyM9EwRVCBUQ9u773JCqPwnbtW5dPYoDkv6jsBiW6Hh7feF",
  "key22": "5w5MhctNJsvqLi39wMhowzvxmr25NAo3Z4u8V9aEAZfrfyDjGpuRi61bzreFDDxJk4RwUwY83ghrDwpruZpV14m",
  "key23": "WjpB7PsomqJ3yH6tDoXrWgXAtoBrES43qaktJoFX4vKRALPbJKMgJUR5yrJhcQdbsKe8DHeMoNPtpztY36zvVRp",
  "key24": "5CRW4MHgetzgzteVxevMpPy41rBVhkbqy8i5Z1P11fVkamMPBwS5fJDDGhJ7eNfVYMjENTwez7NYSPHHBPhPfigf",
  "key25": "37rJxADirkYHKf7CXhBnLa9cG1bazH4uUyVxKXiRDULZbC43f6S7j93kzEsein83zRQjaG4mAfUz9zD1yVj6mKeR",
  "key26": "5a9yLnb27ABwTp8oWN5XXuCSRAkXNUqAGaUncRipPfk3jf862oe95zANESxEdsq1u12LtoZf9oJU6YqiRPtCmg4",
  "key27": "3yYdvfD1jW56Ankz7xjYscMKoTCeNTWr3QRSvSsDX6ycQSH83q8bS5a9T8wpYQnk37muBhRfchw8VJ71DtvwZENm",
  "key28": "4pSG4CcMGoz17EGE3d4Y6aakmxLibzK1P3mPfC8MdPA6qJzKtmATCF2GJopt9C5SAJ6GjuFku31yCFuroz6addmt",
  "key29": "5TBXoJweyYowzqHczdfJ9eKDZzY6Zo5qxT32XNYwAXBmHCB7X2NYHfxr1ecGSWNSoLXDXDjtFiiH3PGL6pf9guSb",
  "key30": "5iRhbJatn6vqbfF8nycZMxZdeaCcFUwPTdw5F2sakGZhSDTSgcdpRodV7ceZ1STBPJ63Fen3XQE1PAaAnwwhVzKL",
  "key31": "4aVZLd8njAyFUoaou8zpDKjHQ8Mm6aMtnaxBSTHDAPuKyhJxmWozVAYWoEZsxUqCiYVBrqGZBMt8CjVgih1EUUv4",
  "key32": "4fXxekmXCqhHcKrLJ1NzLzdaySTpZmqmjGkTkcZDPdSfDzxq6gVQtPgv9bEUE6LEzWvTbrGAfGSQvTE829weqNUG",
  "key33": "5tvriAuS5hqYdiELBCcBudMExx9uRhXY3WDUPpjKRkA8pxnwLngbt9CmRBJLxMVsUoxKR1rdxw771ybEKapExPQb",
  "key34": "3rtGPAmSnKfDdWngSVGFYkByTxhzCNKeTjSLPDrgzan1yK24LnCbGRXrVcLRUxDefYNYC89UnQ9dxYG3oN6Hg3z8",
  "key35": "2JJ7nFaSXgENgKm28a19HDFiFqokspdvRHMqTD7oEDBe9CLqE9QisGi3XJwVdTgPNrJDDvCLRNj8SAzTC3C4uzd6"
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
