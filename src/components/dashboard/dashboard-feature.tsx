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
    "3JQb9sWRpqtGMFNWnhQSuPGtmxLGuQ3U2RNwgVJ38kPZSwxc8Dgx8RaaXJwJnk2voHk7P35ufVn2icxeihvQB3D5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zfy3qB17pZfGrkcfsQMCrewzuP32iyJMiQzdryNagLQXj7LimFXyGyamXpLrxe7ZBv6QsgGBiMJEmYQ1QuTaFL9",
  "key1": "34CzkbrY7TGE2wKqzXhiPMxjpqkK3KbwwteXAoTaXi47eyUNnYfahmfzbU1VSXDbhVyUWV7UqHdtU6wqZbEr5K2p",
  "key2": "5LsB8bKgKjFDbQYZtAimKxMVaBwBnBax5stPLqnBQPnEhZw9pC8JwHU5YYxAFSfKPhRdNWZv2RcxA9PLY5bEFUCH",
  "key3": "d6XkXYois736aTXzDHjeythmhFHJwvQFBFRUsQjVD9cMZj9txbLNQQDzMs1Zkrz3PW2muoGaMR9hkuebn2CnwsP",
  "key4": "kKhKozQVuHCV1efmA6rov5Ui9cWD4hdM237UNkKu9hewdPjTPzusCppYFaZTobVGv3L9RV8tzLPtUAzFHH5hja1",
  "key5": "3RtEVDBbCKavP75ecPf1rwcVHMqQNzSbNBuzZg642KQ4tSJxYRAFw3sLtExLXUkCyGuRngmtobCbW96fXYnQDG2t",
  "key6": "3RQ4Sf9kHtg17nq7VcaW12GWwqaHfVLWFqM19mvtVPzPYPnrk7XGHWjSSyZZ3AdmFjAx7UmMcaCsAZGpkNFhCLdT",
  "key7": "4WGR1RXVHSbTqSNGEZaEH1n9Mn6BRvTsB95udCfWCrqSXtX4pRFoyGYGG2p3Soyqo7YUpd1kMKQ986cvehpzPdob",
  "key8": "26qhq9P96zBRSUFBAzTMWEtsDjH8AsXESFvCxwSHCqqKSt5HMgCPN5wGRqmcpczerKopYSiUdpYL9Eyvbca3uh9S",
  "key9": "77n4xMHDp2vMja2uMDwAB8Ncre3hA92CL2GdPzKS4oPMsQcyofyZMEwQXrarntNRzft5jX5rBxp7zTCBsbnPDtv",
  "key10": "3v1HG9rUQWXAVeCb4R65hzodUwfEtdy5k3SiVLRFVAZkETzFssmc2BgPCUUhUDheYUpE5EsqRtbuxWYwe1uj9k45",
  "key11": "GBEBMMDzVxKXWEW4ACkY68h1amPDnWpf6YDuYYGVZ94HQUrQDAULYqraRTKyZpZvEAMgELJ1hJqtdCEW3yHaaZs",
  "key12": "36Xku86AjcUHJywShef3XAcbKg4AuQeQkUEBsL4mLqKox23So8zaV2VswV8c2een92fTeU9qeo3GCXzDgu5CoDUZ",
  "key13": "UJX8jrDy4XZcyjB1fphAGQ8ffv6jhFM5ugmCEahaUWcbeadQ9kKY15MUspUXK1Vn7fKW1AYU8g9Qsm3vHGoL7GA",
  "key14": "39w2zKriqtn8Fh4ndSf96RdbBd8G2yK22QCG6o3CtaDxe2KFQD9fmUk6BWSgiX1MQk5tA1UnPzEnU8GpvnkGfBTd",
  "key15": "2HhHor7re5FEaEDBDAa8uJx3erhxzRcuyzDsLoUAe2ZYfqQveVSZBeA4GGC2ELGQFuM5e3Wxify3aKyq735qugB3",
  "key16": "126NfnfwZJ1xCN1ynayBs4rYyuZZViKRvQw8YiE7pFkN3yR8yfUf8WFnG8rhbudKBda5xMKFK7Ut8G4ixpdrZhjA",
  "key17": "25o6vYwaji46iEKWiT1xvoFS5uX5bXnoe9GuLaKKMYu92UaQJFLsUvANWXXjbrmoGAtMFZB58ZztgDXivwvPgPeP",
  "key18": "64yrVTxycQgyxqRN4WnWZagymsCh21aQ68T3t6yrjW9jUCsW4tijhezjzjnW9qnxLEebQHweqermFd7PveTyS67c",
  "key19": "3FCvN64VaL1bCPtCx3Bb5WLoZKdUjEtxDFj2khFWQfpX9hoGibAMWtok16h2d3defYDdMBxtxPg7k97Sp8DxdJiQ",
  "key20": "4cbLFA4ewoN7sDGExdYbNHRxJBX64DX1TxKdguQBCK9Wn5NojUXirH1LRxExVCPiWNHzgpfA32bt4ALsMFVBNHd3",
  "key21": "39GHqjXBwpKv7yQ4Uy3eu2RmKJtTkJHvGDChbNTKnQEakzjExtM5Xr4cTVVYxohm12euvFQqHR1Vu82EDtJCv5XC",
  "key22": "3iW2wUEtzbaCpNJk36bvTNdL9PsQVr8ErZegE4PULUpVzZ8VpRBomUqUZgrF98bHLoverFoT9rYhcmkdx99NWyqY",
  "key23": "35FXCdw2nXYMtsVn1HYxrnJ3TYURp6rnzWwR8PBfyfyCtxmM92eqQpc9UbcQ1as9vhoFmRKjyWFgyyj5ZW6XPuWC",
  "key24": "ZvMgCbuHjuicTVmSGgWEsMLdjMNuujrgnyeTQHAB3Zy9Kd5xaYshTkCbXHtQb975jvA8m19Q4oSoNhv2tXK8vbj"
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
