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
    "REWsAStgtAv4PyFEVNe7YyXyXUXeDwbZ5Ao5T3UuKdsrtSKYh5iVscVrXdvKNEj6c5VC1zbmSPCLVbhVUBRyNk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EXm4gYjm4sT6dMcVXLdocC27f7RFWB2RzLYgYkxGNsqTvfpAJQwv19rPhhLfyMRqLxchGiAjjx1dhmjMZUbyCV",
  "key1": "54wG7stqad4LvTH3VNpEhbp395bCJ9aD2szBVz5BP69M9FHkgz8AxFCHgCLk21JNNHpfSbYSGmEcPQGyTkaCBbd9",
  "key2": "5AhUNXMHyYSjTXnrJWhuJ86iEsmvXsupSaPWYXs37pA8S3M2eboQokyveE4ULksCkoBZEFGECh5WuWzbKA6MxfUD",
  "key3": "2fF8QvavWrQ9jrkgZt3vs6kGiCzMvgHXZJR2Gc3Jz1JpeXPGbdgyyvHAv3HUP6p5h9rhPXoHTxG4oeskKJQfNytG",
  "key4": "5gZpyCJ4Uru3bmX3CLXvKZHvMzyrogkG31EU3UPcZuVkzMe4VNxoJmVkj1RcuSJWCDNabCE4gYqXqbAXw12XDi8G",
  "key5": "5sA88ND8mAey2fD1bUgFABbqat7A47UGLXk3tF9EkQPx4QFdUTMJybkhcCQB2rCJYo8hwHa5L67vxnoicDAqA9S4",
  "key6": "2iSrCyXyQzTbVTx7eKpUuF4R3szoRc6FSGzULKknDuqs4GdW93sjLywPzbkXqc12BPr25dijVh46Lebq2sg9q3yd",
  "key7": "3GKuCPAA7UxuFK5b2tQf5nFmV9XeJYJoXAGMpbgPpanwgBvYvaoA3Fq25dEBYrwskTcptKnF7HCwQPiqPrjJzshP",
  "key8": "52wkU9sVY5BCmgXfCZy71U7LjQtheD68A8Hz2pjF6wE1ugA66yG5sugSLDAe3M3SN8e7Qne4QugpVuhgtbfkqdBU",
  "key9": "3Yvh9uranJhEgQo5LBuHqetdQCHpqNX55j4gntbDELUhDfxexBFAi3vv3PJQW3Vakz29pEK4ShsQd4D6hJ1oE1ag",
  "key10": "3YrwMD7XscjgKCTmi5Bdf4C1TFbksDFHx7UNqMCrUm1acArWsvM77fwaziyEdxNghJgPaZAoYSiZ55WF8TokmTBG",
  "key11": "5BtHumDsDZoffvfCZTGY7QKEx6sxnCZ1HwtHPQ9UiTujRALYYLmR1DL3s4YV2Dqt5WM565Vv1rhDSMZ2xuc7DnKb",
  "key12": "5Z5JtkBCh5N9BDahaR94CCi6eoETJQUBNgkxj5DqfWhpPhYyiLo8gi296duKtDJcRARYqDMdNXZnj4HqfxwsDiQ2",
  "key13": "U3apHXUwj1V3UY7aBJXvJtAzRTnZJFKHEaoocM9nLEGhdQZF7swE8uopfpkyj2c1a9E9LNHXA4CxUBxyVKiQuxM",
  "key14": "F95VpqJb6BprRCJmjoRKb1qETkKSzEP3XtHV1Mv9N5LDzPyoTEWi9XwVUy9rJkdi5RMSXSzvyqE7MihrzfSfFUv",
  "key15": "2dJLrjZCrc94h2rZmQ7kCDrjBHPEZoKKnqfY82eJKPx9AHTER4GQZ9xKgA8cZZphUVTFXFpnArXSgFFR71inmQUZ",
  "key16": "4YVaKXW8SgJHK2rKkB6BVPtFqh6BJrB7vw9R1qsw1qHpUmCY98Rfu2ZHYqkHEE5XC8ekrbDSsKbSKZcXimaJx4AB",
  "key17": "BGG6EAU8MkA89cNFf2oarbwD9tXB34bd25p94hypeNJ91o621ffAzip59jRDFXyttyanDoeu86jniDZqVYn93hi",
  "key18": "3rvUACAKNphZWcPmmpSkWcnxGSaWQQTZYQag6vnttDyT4J569XKaACsQ4KhgqdNR6F45F3DBXPnizZkTMwqaKfYe",
  "key19": "srHwksjd88TtyVnk7Bi2ZwycEfpCRooqqodxWd6s7DYCkTm6e2FXuNJsTQg855JmLTGqXHrkv3VU7gTWyxRMS1k",
  "key20": "5Cxr8hMug9NwhHMzW1whhGrCdgWN7hcNJegJqJw66nn6xxcz67JeMwL5yqnip5YkqnYGGERRjWy9fZSrN7PkYFRz",
  "key21": "5EvaGdHK7ZBPNrU8y464BX8WXVi6741aDUHoHRAYZNKCQhs5vAgLxRJUgpcjPeZd2svdWdabqtFF8pfM8phkzba8",
  "key22": "4SUNmgGhaLdAk6LmPC2CJABqSHyDhtvP7SQ14CbnoxBTRp47DbSh6No2p66UR4SAqJEmyaFVAsqo9JB3GqAuXnA8",
  "key23": "4Wcdx5rQ8iLSaaQo8maX7gTqbMf488jG6p2koLthsNquSJz5Jt8Vp6pLRCH1TyFDMxxuSiGV7pYJ61rUAsA7XACa",
  "key24": "4ndgTFASBL45oqoim8UUmhAwSG9xjpkHYi6oGfF1N74yZZ2pw4pMbG41psauFB9vJPAVM4hJMRZeb6jLuLde17SB",
  "key25": "RkbN2CEf1x6ojXzipkwRNJgZcWh3azWDzz9zMLtqCkQKoKpczLzM2LUESnbXck1e2H6FVyNQK6LTVFwds86twRy",
  "key26": "5LKtjki733TbHJERbbFwZzAfKQc2YMtnutGXD4CsJJWfiwZ5pKx3XroyRv9tKyfdtHwrz5PmqDt86S2t7y9yhYfj",
  "key27": "kaiw4VkaQiDtPkY3iueKeoPi3duhZ5TEAYsAYk485PU9DNcEu9KefZWgnDhMYc2nwvs32hopGkaoCC645dwKWU9",
  "key28": "4EqaqNvjQ2EniaThWjvvLZ8d75AmycPHT5nyQzXPRnhVZ8oFevcXg1bYaPCfzu8NrasWzTidMMQDb2vauVZZ2N1C",
  "key29": "46XzYu3op5TEGCu6RPrQVPm36uwLmckop9cb8qYBFm6yahhyeepznCwjuvPcEFJ9hQo118vzCETRyXeZrRjPabdt",
  "key30": "rGvWwgEQWrWdbnF9513RoWECoMeea8NdrE9mdQGPKRv5pdcy7ou3xCNKpTBTptqd9tTQuX3nRGTJ4Yyd2piU24N",
  "key31": "HKjZ9wJ6kbzszPZBdhbru3mnz5vtmTTpraBBhtDoDFgCnYozap9VyG6CsEsqmL1BhLSNYJaQ2xjZULnp1wKuEMQ"
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
