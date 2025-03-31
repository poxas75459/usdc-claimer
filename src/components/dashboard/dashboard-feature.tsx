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
    "HXYt4YqJhXE9mXC9BVEYEqabx1PZ4Knt9fJUH5NvFFMaeG4tiS8cHjhaRNb7uHyXcxqUvcrxa6W9zaosUMoQ8B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTkgnfHHnWNKGvSXs6o3QsT6putsk5j7FQEM4VLeW2AhTadGS3P4Mckbf25Zdn9GqoNy6p6b4Kb8irzk3rXoudy",
  "key1": "71mKSysyMWQ9ndsrUmRseqReDH7RAX7EQy41jfgLnb2nYza6JBePo7k7che3dWvhQPo6c7U8jHXpXGSj2wMVDGt",
  "key2": "2PkaJ6td65hDBuGVNYwJ4Y3MxiXTmsbzv9KnqKnGYA5C2ptcoD962UWb1W6dnwqvNHaMZteb8kBrxKobeifnY5Jx",
  "key3": "2jW1XA33p97m63nTQQvCH7cTAMVvm3rD5VKc1rPh63zKwLtGF5pdCCDiehGA89JNgPK8qSY6JEvKfNoqJiwai2RE",
  "key4": "4kgTUYpCuShgm7Aiyueyh9z3wmVEkAB6LVjbWLywjq9WtAnj4GjYLDvjgyTHWiQsshPdfBa1Xz2vEkz36DmEPUPF",
  "key5": "fFw9Hz47nH4UxdPFcj89UrGMEANfNHgnnzqsZHwynkRUAiLTj5YQrZFcLuZEKZdKkb4hyu33SeWkFFm5apdfiSG",
  "key6": "3QdJGFGuya94grYeku11LsCR1LExz6utthWaGULnrFZqXdsw3ehqypxXDBWvuysys2UaoD2jmv8N1VSgx427gEVV",
  "key7": "53HQ3najbBcppS7WZmwYayDxBSw2K1rtvfvx7Vjp9PbSK5LCt5xEVESYWMoGvBqJXkApD5KWYRoFthLSHZSG4CAM",
  "key8": "3spioqCuGS9BFgTEESeJ2JXDG5tozhFq27YGuw6ghwZYM7MPLZ1johqyZdDWrKTraxGU1ZztheP2hrj8uKFGJHff",
  "key9": "Dy6MRJceAaYeUjDDSLRE1ibonsio2oh3jpbMps7eMcRtTDRCy717K2bwD7RgHwTNjfDgbmTGYKYY91RRvt4k3t9",
  "key10": "2sctwEvo9VKjBRCozsfkqL2rNqFqNtSRkqL7bCwpoGWi1QmQA5PsNU4StCzJFNYn91XqcGcbEutXScfwicHoV99E",
  "key11": "5GB6KGtBnPNoVJVNFF23U5TwMX7PXob9rdTmcDyrq7RbUSsAPAV6LPcJwjrr5d2GCtYK9z6zLBjtawz8X6YbMNkg",
  "key12": "9gu9zyPMXn3JRWvwRm3QZ7Jtx95J8N5y2rGcoNadx32PpPKaKBtuw57nZHZDVem7yGjDWuUTv11MT7kCt4RqbK6",
  "key13": "3BwKWdmjMk7DtKEy8NFNh8AdZ7i988T5FRMwsJZJzdsvGpJUd56ALTzGKTm2bCDNM9cvp9s9PmHD68q3wDPjgbqn",
  "key14": "2RFtrG7fysvL1VpWNBiujJDVHc36GqBJqNGK98zutbuz7ASQdRyALks4NTfxjSez84U2CtJ3z7Y6CVNg23rUBo8H",
  "key15": "aoCsSDMtZGAYmVpXzopuJ455rbxiLT6bkWe2CumfEMHYmpWc7QGUSnD1bjWzXgDzXZ8wW8z1YUDW9PtUJA6NvYG",
  "key16": "3ignfsC2BpSn1qqwvb4RqkQoWjm76edWosm216pikATtaKd9oCw3Tbem4r9BDSPBz1rrVdcYbG82jNLwsxAGJkSK",
  "key17": "8ipPCz7FN2n71zDAuvoP3VbMSuFNrtxHHERqF7N6byswxNpXTL2iXQzwtQxKKwLYVeFcvuQcABbaz8jYpn7qQtc",
  "key18": "5ZS9ezY4kaShvfC5okmFvS79yekyRYjWrZQRSMb2bhrSvQJfC4KQyBzCgRsYQrQrz6qJBt3V4NGPcMiwCnBfZA2F",
  "key19": "3UGoKno3n1pYj9qEjMi6jg9VURWAtSMjDqHXaaf9qH5aKBDqkXdRg2Q9VD6EJJZnRrwpoacHRWNQZP1GgbKAM8B2",
  "key20": "2hYZcwwP7t3FVUhdDa31JNagyiMHk4pToS5EnTs7WAs1TcAs5E5iRDFzjamJWoeYa5yCPM7hTgVsqhAb9fCs9UVW",
  "key21": "3YL6ZmqSGeTM45L5pSry4bWFpxk2qumLw5dF5wvjH6nS1NRgXpRJwjqZWGBG3JkGeoTbjWdfkxQWJE4Nuz87unLp",
  "key22": "28ygp8XXqjd8uzkBFaff2xM6zzpDXSRHmxaLmAAL1R9xj7YsZ71HWcZGwniYjpj5fGmSpWoGpsbQifhy25Hxv4gD",
  "key23": "62YzoX3bcaGmKZFvxrTh8BionbwffyefVbNje7hDbrBVCeLsfgn4pZ82yLQm8FyScK9fae823DhzGmrp8buCPvJ1",
  "key24": "3n8hpXQXxdNUiBctu61i564nDfLhTgaRTPBYPt8BkC5wDCBPNpETv7sSM7jbosd7oNYCKbWG1qnhJs76Tvp7mdU8",
  "key25": "FdUmTb9fTqVP2TP4a482iZkoKnsyS9UtqA7F8hTVHLPjP8KKoe1bv3PW3xBJ3Tq3FgrMddW6azJhrXHDwtHz8Ck",
  "key26": "2Jo7EVNHbjQuF3ex8QiSua1svzXT6LtSSbZ2QGhVnS7LdZyv5uUmMzxF69SvFBBuncUe2AGrJHkF8bGUKYXENiA",
  "key27": "EtTbHvncCX5xeb6msURWcxcfeQtzsfweRxF1uJfZ4wenLp8knjT6aNeAZwZQXKLJeEc12dz9gqRZEh2A3y2MF4c",
  "key28": "67nPmopyWqkPVh25BnMgwAxnhnfvnwu6RzNBwLbnixvXbAaoecrSKrrsCSUFbJcEzL7xoukAyXrGySriyMKKenHK",
  "key29": "2trtjr8aqCGtgUyCnS8JekLQLHvm3wNrVFzDcviuCiN6N4Gv8RbTxsXDaA1xsS4HBrVpfsNuW56yzMu66SqyEj7L",
  "key30": "5Jr9K845x6GfwJKQD72kgMgRVK1ZvYa1aDWiuyv19QwVjEiKLYmTtrpPYRYix6g5AUTJCtaRk9K4CpEoyY855BLt"
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
