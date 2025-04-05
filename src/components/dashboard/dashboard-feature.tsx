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
    "3DNxJanHWzE5bTfzfGzMYqsKCxh1bKUMt3NnyBBKCJwnvRnRpneRWJSHVR1zitkHh3hF6bzqYx2L9tt9obgWErUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyFwhpGVfi7yCCVPJ24L3ZwGMivGanChLzM9oU1NJQefr4ztdjvqXxRL9p7Bv5VP2gPUZu37sxcraRaPhvUTUw5",
  "key1": "3qKJd8R8aeLxWuVSznSz6bSc8aGR35skApfDRTK1C32seRs1EvftLUxjh6yWTAbsFSNSvcAeXca2ATEgnFLutFkn",
  "key2": "3CTdu5KbHAMgeauArY7hH3P3wvZHV8V8MgJKTvdT1RxmuhZ7ZrMGrd3c2EGXJkTZs9gfVgZz2JHp6v7fvFma8dMh",
  "key3": "4XFVrJpwU8kvTJqse1JtqGjhAenSSyS6N4L2eYa9z9zmbKNZ8R7uSp9Fq1MFojiTusWiyNaqwbQYZq5vks4pmgVn",
  "key4": "4AVCC4rnH2HRt1iU6mFqkJD4sV5u5UroxqkiJA9fV3F19S2pGBNTEqVTJXgAfbtVCRytrhrtSuNUw58AzZq2XrqB",
  "key5": "2Dm9vyNKrbqfxEacqZirr9F34iwQ9hTLfu6vxht3MLbHtFPAhYf8kh47K16MihGGymowTCz4MzuBjWFykat8Hsmq",
  "key6": "4gMFcMEAXCDiDMagSSGTRxnRWrmiT2cRzVdbUEE8Bp3cSqcHydHdHPGEPRAHThWeacZiSoQaMKspE9GfQhPDVyib",
  "key7": "5ESVeZ7WLdsY2anK6AxQnDEKegc9HzkYNU28upMpGCisGUakELDTMntjYiqh1DyVhCowxXdwiAxDPqNhP65oSd6e",
  "key8": "5456aPfosZwSw2NdiAVScfBae7RowrjLLx5rGaNaGrAjTq5V8txEjuTxaNfztU3p1sJjRA8jMZyruA86jWpYxXKR",
  "key9": "F1PynK33cBZd5W4KXWHcRMEqCv4sDwmNwcr5GSQtsmWeQk8Q6RLGqaHnEeyMBvhqDxV4t3VR8xf7ZNJSqvmz1HV",
  "key10": "4aJEBB6431fvE8hWQcSKbBc83Z54tUiaq7EvAnuWniRTRQry3rwztsyfZfWpSJbYHZPL7JGPjeHLkkyjA68WFdav",
  "key11": "zspGqT2mAVmMEbN5VfcJJZbbdLL454Gr8neR2EAAJZVraMuetxyRcrajngHdge5u7mhLtT8Uu3RsdgySJkyGfF9",
  "key12": "3vymNQRjDAaBpkuuHiDu9P4SgKnHMK2Spt8e9dGURFZpWQY7nEA5RsxHTmJqh942QE3D4yTfrumNHgyYGVAND7v3",
  "key13": "5wdTPtkXaNjN3URJ8svwg3hSggGpnwu8XXuH9bJGdPGsFJG8mrA4dbhuPyyqMaknsmvvNeiEJ6gdboSSa8qcevCv",
  "key14": "ttm4U9icW539AS5Yz9f25HT5XKAXwcVKe6mRzZhCAeudFb6BpG1MuokqMSVFNhdtS3Fh8xME3FBLgtCNTQXgkxY",
  "key15": "5DuppZFoRRi3L8Vi5PrEWTkRYcW68dTkLEbZe3RuvzFFf6ZBoPZaQ3kDw2kh3RuC5Sm3BgJpuDxoFJPxeiWv7u9p",
  "key16": "HAmt283niBdZG4Vhog3npCjmuBmAYuTqDDK4SXaa69Hfda9znba6p3G6beiZ9yuUcrubCH2U8c6fMMtbNDRw723",
  "key17": "5tERtDX4TBeTfUX7CoVbhJnkN4GhzE9CEsrSDCKQ4PR4xAArwgEUVqPUSWcEniqJ2qeLhbtZUGS4NjANkW9sZThA",
  "key18": "4pDNHRAsy5r4Qgz55rp3PFAC8UuUzmLeHc3ydP4fPbvv7dWaANKHhxG54HRySUqQJRugLsA6Q9az1xWXsNd1Dt7s",
  "key19": "5ycoSG974NWQDTbzn3qBwGRUT87eW9BWUytvCGvpZEKAhVTEQxgKbDZK8wkNaKKrqcaCNN5spQKMCkReMBWHp7ug",
  "key20": "45jFG42CS4csnVjDATHerAcGnPSePGku496mZyb3KAB251JP9zeeapzhMjp5ajyg31fepAzJKocfr2RLE3LPvngo",
  "key21": "JCLts8g5nDYQEu2wzzAVpFP6Z5tAGXXrDP7KhTuMNJkctgm19yg7DyVxPGemeKERG5h6o2ePRfzmRjV4dkDXcsp",
  "key22": "nzFFxuAtJcxUfwxF68wCuJzkXKrGBoXd1AGLykfHPaCAq2xUScAfRX1PzwXi4eUXqemKTdPTCtoAUVHvDgVHQj4",
  "key23": "bxs5Dzy79UFk1wYGXXBXUbFnbNvReAkgaSm53xkKMFEkdDQwL7uSe8qwSPMHXAZfko3ezVTYVSGaryZ1gZgwNVy",
  "key24": "5rKZP5vgBN1Sy3JXtDK3dXhCGbYuFAVpJyUZH4PpWPvUv3ST1ibG1UpwbwPKRXXr23ZisvQFiXXvokCNRrkft5m6",
  "key25": "2BxqwT8gtDrPq6f4QbMQsSRPUSqpgHq2au5LjUm2KWqsPmoWzWnDfddJ8PfqqJ973bBhwY8aiTcWce1WoDUKv56L",
  "key26": "2TZE1PQE4mTtcjwcrrivwij7LGaU4uJAFkThkqwyhAzMJh1dxzUkworbU3t2qeES1FM5U7CmcqTuxT7Qa8taR1sA",
  "key27": "45LiUfsS4h2CGjbuYZ1k1PhCtkTcTeNiRGsX73fPmem8dFEFnrCeL2ze2GbyDAtwDsCVKu6UkvWcqasQaCTVFJqW",
  "key28": "2TfsJosGoji3cgeKBaumUTSUWRpK24vaFm5YhCbgY8gSV1Beha7CdMgEKpgdacLuuEL1ZsosT45JR6GqJgraVWRF",
  "key29": "3toY2y5vE1B3ryrkYL6vLX27MUe5urGUFfTQJDqJ1am2D4SojnLyYNNFCfaaEpNDBHmN1H1UatWHry2AN9FihyiL",
  "key30": "4NSJizfaAdatuWoAu3ADNuFU8ubE52FWcjwX7hD9DGr2fuk3yDocaq74jfNzL9qGnpEReAw3xr4DQn6eTqqs5hww",
  "key31": "3orZ3a9k5jiHeAkqpHakkt6F44aQgH8sUgjAY9ukmwbNQxe5TpMmXQQ6D1evVUdmeLz6FeyXiM2RALnpMHsHKsq1"
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
