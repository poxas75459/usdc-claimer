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
    "t5JZskiHhcSQBW6VLc7118GskD8CAi8XfTGWbj59QbFbM1zr4J8wJKf6Tz5AFVphm4NVP589QGhQcWaNBLNrGx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdMGX4VCpPAKUqofZZBE972VtFsX9o4VWoWXWXYvUoaigqquaS7kJkK7SKzxSFJZ6mwxfoYgL3ayLfczjV52tTd",
  "key1": "5cYDCqhAZ9We1wnxLr8Rw3Dgizq56TH2C45x9Pt4LGYnn9pn8jeVJapqUBS8e2cV6yNGWxxZE1L24ytWJSrUd6P4",
  "key2": "4dwEWfW8Ejq28fyoP4t4v7fevjgT3kHQHa99hQq6pGnVN7y3sxwbH83uNHN96X7zSokNRTcdYEUUNV7mw6GVrTDt",
  "key3": "nVQnrPuKhd3Y5KQBNHdwEj51pWSPNr8yxpGobxMFey1HfToP1Zu6QpakkMhCnc8nd4dr1S3tKpQXoPQRPvccv3k",
  "key4": "4skrdQiQSqtLF9LL4Pv5TVFMjmBSfLawFGVRmZ6oen9Fp3ZrWfMXYHxumiDcSQeuVdaij3TdegvkzQD81dzeXbf5",
  "key5": "4kJdMzW6YJQHDJQmGEEHvCWCCdw89NQghw9czrL7CVSvtbNzD7xQx9tgigBfT1VgHYHk6WWY2qp86fHYZz1N14Kg",
  "key6": "5dVFthVMWQFzNxbbUAwXb9vqVz1TeVA5EiXixvwQDUpk4uJaUrNhqEEh1GSZA1NZjA3G2uzBKVphbCtx55QJPnxU",
  "key7": "2AdMv7sMHM4Mdgs6rEHU1uvV1DCoCNPyrNLfigCPD2TW6PoQ4uTfzvR8Vm3Rg8m8uxn3sGEJ4hPK1Z5hy8p2eznR",
  "key8": "7ViuKzpa2adqVZZ5sZE5Gek1foLcF9P3xAULxeJ1eoazsPmWwd52qaaGL7uZoBwGk69FVhZE3UMYgBsK7xKWi2J",
  "key9": "2D3WMx9bax5siv66P2C6DW94oW6QKjVjat9zzyBcB1v3DS3WHyyV6ucB4wCxGr9kiPyPtRSCkqoBBigtu4qCj3rj",
  "key10": "3EkNQkJq82WpnkxKeR7m1RNKqi15SWmquAFaPycGGaH4tbc8j2NQ7QuHeP6endQvAznBfEeSjn3b8PPLnyYCZJ9M",
  "key11": "24AyuMCG28rUAHmwuv71H5S9zjLXdRV9Tti66CWLfZjFifqspMNVfddvgpuMkvPG4jtxDRpuAgg9aJLVu5Pmxr8i",
  "key12": "WrAFWett7mprWVCUcDBgeiUDuKbfJeHJLvRD928z4a1VYpqJv8iZi8RNQwKiib78TDS7UxQFPUfCMeKsnNNzx4F",
  "key13": "pf7ZUpu4tkZYD5i51GPBZzhFmigtzskiDfe3Zrhgwu35sXyzM1YmmJx2nSLnbdQ9dFeGPanz9LpMn9Wdzkj3gE8",
  "key14": "4V9T7mESqNNPCVFD4zkVpTbiZ4q1FiKrtHPymUpQeXGMgHQijwE3W5tzW2sMQ82GDD4pq5CeYZMx2vA11tERud19",
  "key15": "2Ju6cPbdbWkEJFXwF2BDEgBpTK1GZ8Mw1VWv9QZdhkYY4AxZWFEnW6At6aY6hDe1xoGdprfdWTsdur96JuuaTCfT",
  "key16": "5qooYj97JC3cnuMTcUuiNJLGE2XdXsnkNstnF758uttGmqWcftLwicxdFhs2q9eLPtMoT1X2NaypkKNS33gL64vM",
  "key17": "52fSLXuFRPfcamLqcbvVvii2SkNLXyTmqxwWTF6ubArQzNE77ec5A7zGNh8e8SdutDbtrmyb8tXvAroPsVWP2ioc",
  "key18": "2UfzBcBLFTqgVLBDwyoXpzibk2GHL5Ax65ZUzukBbdxHNJkFmhXUG4XaUSGj39ij3HU2FZMXJBYZ79jrqkkRvmqz",
  "key19": "3KXqbWwgx1sSL88d7j3tuQJv6Aq7PeMUjAxWt7r6qT7WJuvgW1JRupZ4Jw2RwEs14PSBiSdgm7f4Zrmx6fyiWGLC",
  "key20": "5M1CgMWLtzKBEBKr4kBtwpnVrcV8Za1BZirJH1qGzkAjxn461H9u6sKJQy4qA6RWoiCCudkD3UmpqrMfA8BeyJtn",
  "key21": "UV6gMsim33QJyYABSMS1so7EQTCHarFjcAJQfXTr4ESXGTp2SybtEeeZzQ6X32PdtZeQZMapNLuzYcKL5vzuAZz",
  "key22": "59htY1a3PJeHQSaSKuxULnYXfCZZVJ7reTQE2UXwnRTdjJaE1vJce999icvuUvey2xufibH5o6e2BQxd3HfNtiBo",
  "key23": "2wraGCnkdGXYtYxvQ7SccZeurhod9v7X257YQyZFkoKXCM2RCUbZvpsKtHfXyytNz2QMginRPS3MhiTV4Pnp4NsT",
  "key24": "5YLaBP34NZGTXCTEp9fYVZwMBKXKVFJFrZpv7zBr82wrj4Tedf45UENeSS8BoaWA28fVZp1JNPEoic4JmxTUAaPu",
  "key25": "315gLjA9cHfCEwwZt4RVfhEsfbMXNfDqStGF9w9nRmgE6675pxfPRz4J23DbKTDFQJs257gnymj1YWiRgYiebt8R",
  "key26": "2XpDYe9tr1wXXiNbqbuTxcQFkv3vy62eWcpDCCGKbZHivShwUiRoa5BtX19DwWj13nkX2guwr3ynWMPwHyQbHFN5",
  "key27": "4hLD51q9PoJirTgpnNt9837wmkw7wbAdDq2WnJaN4shm9QdMx3hie2vLdg6EPEARdHNTuu3BuPujd5WmzHCd9Uzg",
  "key28": "4noWAjBYh61aNeWj4iy2Nu1hroMpAndss7FDGrAYSsxpPGLTGRByFZpe8wH2pzRji9Y4s1ue6FHKsrRYxfqEWnXK"
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
