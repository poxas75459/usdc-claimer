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
    "3fQU28xAey5dfgjRkiA2T8QypMEV9WKLyEfZ6jZPpXrW2yeURsHcCHWhnKhbM29cfU78oZ4puJbcbaP3BTBZyuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ozpcmhedLYoUs4Rf6aVdiaxbCaf1iNx9EgKayL2xGgqvjD6Y86CWzvv7ykLsRG7i3nRLfiztW4oUoaYiVWabtJU",
  "key1": "4mQP8GnCjn5sMLm9gx8Wczk4VS6vNKV71aR66WsJt2q5SvQkF2KBodZzamBus8WsnW6oVoSxv7zzErmj2HxnyjXb",
  "key2": "2Avy3JVMziUd7Q5Ho11Nxv9taTyHdDxgvbGsYdkn5K7JDvGzSSy41YsZttMXEXtngERmjuJE8i1JBYx6RYnTAreH",
  "key3": "2G8a7KbFQyhcPzCAQovuyaE57qNuhHzQY3HbmCAeGiaeK9dfWQNtKfMke96enR2wKjN9j7KHXeMWimFwsuYBSNJE",
  "key4": "3C9RWuzSA6JU1ev1joy7DZXxbmUuGk3hHCmqtvJfPzRvXDPcMn5Xr6LqfBJoJ9WGPKNNwAVBDU558XfoHH9hmDdy",
  "key5": "3vMy4qckKLS3yzABvRCATGDZJDVg2qKsyUTGyiqWFmsjPR1N7ecF2EhqvJMy9YuVNPVzvkmakD3JaYx6ESzkdw2G",
  "key6": "2cFgr6eVhaGN9oohWgdF581cGsGwDsM9D9eAfp2Uu8tdBubLJk8rKih6Y2RxtHTHFcYjDBQCpWKsCtTDGubaudYX",
  "key7": "3nmFYyDFfJPULAmfgifAUjbMxdgW3w5q4ofUU9p6QCH6ArzGzvu9Y8EQSGE9ZAoTiu4EPAEm4RV8e5tFbH6q79FP",
  "key8": "4oQ22qwXv2yJmWmF3buGznv8eP6gRgMcFZrHS1Xn15YbgH58zcXpuBB8DqFpTdgakyowgudtwzjxNDrrL1XdM9hu",
  "key9": "2mmGapS4mS6Rd7JVnrJvn3QmGT6vTJTUEt5RgWiDy4VumtqVm6MALmQ1juJ55u5X5KBaAcJgjndhESfe3gpZRvEw",
  "key10": "PgCegQXqaSGTqPaeLCDW2A6as1vWPeJGSUi5cc8RhxNqBJi89bYLattB8FNR2mzHanCabkVGj5nrDAxSXL9HgXN",
  "key11": "4XsH8YjXpBHZGMXvJ4iKT9VdwbivTFfRka7oBwQZDmPfVtS9iiTMyH5SP3yhqC2dLFBC7dmeYSp6wCZ91j45UxQy",
  "key12": "4mamP5spg8iL4KmogcKEiKPecjt2wGDjg5G3bJzkE9aYt2eQKi3x1PTeFT2pLTjuetHr8wKYm6xbWhWAwiqTij9h",
  "key13": "2o2X2DnHxpRMx2Y8bkxHLwAguAgn9nzW9tcUNTJ46fFtKvx6PwN3RG3S3rutQYy3gvtiHV4iBm7aesPJPE4LXtBm",
  "key14": "4RyukWHrMoRqatM6DdVzygKkZsEGyUC9PTc96q9kJrDKZ5gB1sqnjKZGU755qmCfXwLuCuWpqaVMq6gYy89BFEf8",
  "key15": "48AgmuEvEPuHnv4QkuEuG4E1gGwdrfx4U6hKKGZ4rNDKXcepyqYGqwmfTTeZDnE7KE8psZRL8az4eMFpX8uFTUje",
  "key16": "3MTEUGpigbfu8MgG2LURwWrBaBTjkqqNnc8RpnoReNXYSSCCnw5ojGmUZdqG4Lxvxpkdy9Biuo9KtzrHiRC94y7w",
  "key17": "2zMYFod45pYt1JP6SE48xzAFBip6YSBidb5wAYn2fKN5vqx79B4XcL3ELago3dBH8zge7Gi83KHNcMprf6fsP47J",
  "key18": "2mTfEJepjczd8HDvFsgwkdx3WMXkZcH7wmopUvSrWJ8yhU9he8r6o4q7uMjnamuV7yQJRUGx2miAFWpj6evJxM9q",
  "key19": "BgcWRxo8M4DwJXuCdV27pvMePAANUGqfiaDFMUB4GBTVZJfxV93aWxyokx94MC63PMPCknZj44Yi5oQzp4dri2J",
  "key20": "5egqbDjayNHLgGwSqMNjxkoN99nNXYRmTA2vbbo7rjHzRs3cgykYGEcdrwteuAF7BKrbE4dooGp3aLnHHnyExSGS",
  "key21": "3EwiLJHkfh2rcKW5KuyaCHxALNiE6BEDbgwjr3ksJFRJCVnwYZbJr4aZGXTJB3cvaK14A9p87tVNx1NsdtPq6PZW",
  "key22": "46rzF7Zzc3viVPKYDQ2NtWyBbP6yPHttxL7zoCSSnfJaLUhxkjTmQnPQEePzC87L94TUXNpWQGfQYGUrQTWAEh9x",
  "key23": "5QMdnA7rViUHkTEH6ozsySwA5ss4FbpdsNwtVafdqnqg5qJfxojPCzK8jQhdWdXhEnZAB1c4GcJqR68um1modUdJ",
  "key24": "2Z7gXDD5ZMR2N8ti669ci8iUZucnSh3L7NBwZ56HYJKGbLehu4mjAys1jmF1hvTJqLT2chdepeQdZ3SFtbW3scaP",
  "key25": "2fVFEa7LBzX2eVciu64ZpmLFZ89VCetmAzqVWrWkK67CCzP1MazXjzuNCup26eHPvkpZtqZPvG4QCh66wwP9BYKR",
  "key26": "2hv5RibszLiQiNKNYf7x4zEb1aQtUBbMERApszVNxY2WNQNvCYL5rH2d2sqCVZaFDFtMr5xeXZ2msRP7Fqi6trw2",
  "key27": "256QTP13Yv1iw4bmETtZFeu3rSgW3eegMmg7FdTVD9BqPcjH1DwWF9PypkTxF58iKjsBdw2TZ7U5V27vindSLoC9",
  "key28": "4R8wnxRUsRuHuLzaeJKj5pPV6aHxGUKthPoEneqWdWopKh5HCJy9HwfXea5viEqwuV44cR5w6nyiLnbL1Rok9Tk5",
  "key29": "4dNrxK25ZZawUh1mh9bovC2ZeZSw72wMTVA5Nxo9XQniHQVnPa3Hhtoh96Y6vTPF3MV8Y3jeADkbzRzPqdDQ72e6",
  "key30": "4BnMH5v9WqfZy4hcsxhJWG9P1MoN2b8junugMgmyx5tVtgZ7YvKuSweMbViGn6GCHtUkTnfkduLpcTRvwDayS98R",
  "key31": "36aVn6Vhp7EJKg44aaayF53BCaJyULeoaM9HrwZEifoWwpcx3vTq1Wrnsyv4JZrT2jRx63UbzjCj6gFm8YKkfX7e",
  "key32": "4KPRXmcp2MzNc9i1kabAVXyEdqbffjra361CGu25VBHLVRpoWAPpXD3CHsxM2RtcnWH4J5f3HXRuc9PnHT3fkYsD",
  "key33": "yftYVwRH1vy2kuc1tSFtP2VBKfpEmKyiJzFxvG5mPJuBD4bJoWBZnaPjUXBxhEnFR2JgvZWZ6hus7x2nrdNuYC2",
  "key34": "37UN63jjGQZWHX5fGPGnF42Cbhfbp42PKRUSuHCcj2A1Des5g56J7gpQczzY24fqARmFqoxCabKXEnqxdrAWeMF9",
  "key35": "5NeFV352Noi3ZW4EFKBjAVgbymuNRe82jjbrDdqDthEiJEVzWCL57AQJHmavtFnBYW1o6afxDMz7BU6Tn7PZMJQC",
  "key36": "3huTCzVVoGkVmHmMpd2BVkP77oUJVpMpbLfsCQL57T3g1QCyTmgv9t1ciLi1JR86d4QKUGkX3xuUrCJciEjun2fp",
  "key37": "dzyatt1vUviinU4tN8ppzKfVXZJgCqQd8YESGK47rJV1pmxnhwGCt7RUPtcd38L5r9VDy1vZTqFwB9ei3kbbTi3"
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
