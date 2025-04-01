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
    "5aH6kpu859HoDvLnHufpsvaADB91rXBmd1MTu9jDYVtKFNi2WDXdj174hNuwhFW8nAncsTtvkqs4JAHMb6jWqZCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A53F96GzbbDHq4xVkSJcACUPqgj1fs9qJsuYk1Ly6U6Uz2s3La2nkURswamdzf4F1TBW3Ltdj6a1NmL92bF16ir",
  "key1": "4iQhFiZ3zL3w2GrhRc24nR8KUYBvQ13TVHg73y2fxMd1e4jje1gtHbRM68rToQCyDNPVb1eanATvobeKuv5eqeAH",
  "key2": "2xqZYcUyHjXdMtmaCvvWZRH3s89Ruu5SYyY7hVnn3UFzchD6FuqWvDg7hjEdPCz3utJFLHoVY5dTEyZd82f3RKMF",
  "key3": "XmSZ5LES9fT5H5jJvTSAHeUz69gqY4A13Yu8svkdsWWzLP3fbz5TNT1C464DGaM2N7fP8i73LM5hFo8isshRJAT",
  "key4": "7DrQ7UtX8Z3BqKY2Hqv1oSTFGZzZVFBRk54uPLLahbJcimtPsUozbg4FBpuYHGpbZbJ5LM26zC92GUvAiDkCYRm",
  "key5": "Gg9RkktyJjH7FK6xuMo29LXHFErxbWrPN1TvJUejKpKG7zZLBqnjsXkPkj8jKFto54ViXzvx2kPE6YLSuWwXNcS",
  "key6": "2hPgBtwKcjS4gtLGVwT5Md44T23ddxazhjxKg6jxyCt2zsNiEvsk9fRdLugv45byvLHgcjTsYwysPpWmtn3eYkUS",
  "key7": "3cvVGGqQbiWVYPkfMJKvAtF4emT7zsnbD4vUaWPBmpB9sizdJU4WrpX2E4ziEcGQKSyd88A7AUPVVDZ6YYBMPr5r",
  "key8": "5sECPXsBw9SZ4FxVNnfR95PiHzx75s5og7rb1CNHWAL1gkSj29UFCN7PWBPBpbHj86ancA4kuYYszS7mk4xKCsKf",
  "key9": "5mNL6iq5Hp5iBRCmG31b91hgPiUxJgUkHp6tAkD4YM2SrZRWCVupGxmAy8xKV35bG8B5s7L6vDSqinzyNgrCWzFU",
  "key10": "4xesAf5Wb9vA4BoDHtNTWuusyZHtEdtRH75K3mRawea4nZpKNmo4rP7uafx8kfYvKQ1zwmi9pqtdTJRHCdBvFMwp",
  "key11": "mxSb9AinMU7WQEi8ybqr3w4a4gk7qUM8nr64Q4bhVwfLgtbEWYLhr6nM4mrHUzX1hUZsCXRSXPFZeJESecx1CS1",
  "key12": "3bea4m61te9sJsSd9nJVDzhow1XSNcHwNXs2arxKgHYEy27ZsTgBBHM5s8cNUxiwkUVuta2cgAXE3KvcwcZjmgbt",
  "key13": "2UgcgBAcZ8BGB1WRJaP8LNgmKyUB1NF39mJj9PMiDWDSRJNTpnfAFnHtvyFNkaGmncQHPyicP89Bi8xqyMundt3k",
  "key14": "2tpRVjwivTRkAvTEcUWrRtKq8FqgbVrbmpK78AuMFbvtmmtiyAXutHvxYVWkyN4PGiSq9TJoDcfVtXrocB8JngPu",
  "key15": "38wtKuyH24PawXFuutWCWcdxWkG5PKJcrFGZAQgY3mosyZLSiMZqhiNYvtrY9voSahs8nUGLqjRdTPncAMp8mwLL",
  "key16": "2E6r89h86rWvi7nBPMWkmpdtQJRRp19JvUNTBXFA7kgAKcYVdZiPeFSKyiJYGqJKhKesHYoK99W7DCoS7pd3bTsP",
  "key17": "5AbYGWdZkHx88o81VgkCVMXCqqsobAMwJ1ZtTgEG6v4NTSUVhVWS4UF4VgzcuPjuCu1HeN5jjeTpNjGrixQViKr6",
  "key18": "FswnNtPGc8Ag3VXSvQ9gk1uXGm1saa3yK2wE2hqXsBPCWjVya3Fburj2i13z4LA4m42DkiZf9GN1WoCixMo1zpG",
  "key19": "4ARnCAhrUg2hVpUVufvMCoFFs82t6YhsooH54CfTEgs7LcyGY4ouHBzMAukSVZ9YvCfG5hMLnNVHJE1paLVdcDXX",
  "key20": "4PoDT95wWdRVS4zq3ADfu34EDMredhaoBTTeKXrrsfAKqRdWJjdwauauEVCKBT3QxDUV2LEgUXWdPSdDaBW9XdtV",
  "key21": "5dmzgQiMGwbmKrA4koGJXRSntaZXRZ5WMBZz8AJ32scXmqb6QSWj4QdxGCF9TMjN98wDPxv2Dnpp4mvtuR3cHSeg",
  "key22": "4p2T5a52EmaeHVrJFR84UVwgAEHrADorXcUqP9Xy7nrjaqAXxYbmJxUez1SxReKFuo4r78vH5GMoo2XkgviUTMoC",
  "key23": "2rFidYDsE1FLXejiDLy6gJ4YyvhCj5agX3UWPpSYmFZHiEqxMXtTpLHb259ixihmCgvykFq26exHgon6i4Z2Yqmn",
  "key24": "5oJj8TSQZRVo3stmHHQ2i212ZJCfQxodxnfDyGCqh8vtC3pzgTM6ZHjRSXcyU6fcVV1WJfWtZ4psGA6tWAKar3et",
  "key25": "8FFL8k7gP4hhbNV3N6it1j7uFQ7dMZwY7dFw75NxT5adYFMvCFiYAkyd8JnZDVHZwpHBrmN1JVJZjW4Lf6vKrHa",
  "key26": "5WiWDAaBX4KTGBfo1nXaRNZtCj3LHToXQfEfFCag2YgGyzFNBzHM6HBRrZgoEETxRE6tshZ6m2FC5UMSnMKLsn2X"
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
