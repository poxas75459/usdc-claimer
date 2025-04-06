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
    "UumQcLgX5FSH17B8fT5KaqSLhvDT59MED67aJhPJRUb4Ji7vMWH3bex3gQqpsyRX8N55R1BNBS9fvPUfNpMCAp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iUs4tQToWoSudyZMYyfG6XUC8VGoRRyJ9NJCKiU9kLLiy12rchKPq8fniTGb9NdB4eKGp9ZrftrmaXWxRfKA5Ba",
  "key1": "RHx6bXcCHRjg3BvdMoMBDSCg5yYZmA5gQZ2S7vQ9FEtdky1Ws5D6aDKxVwbUmQMgeAuypS3L51DajZizKz1rpBm",
  "key2": "4cEZYnQEzd55jWgTZwPhtXQBYVmkiT96Ff9eeGHEuxpsXRKMf4CytzeBHL1KUCoM4bapCnaYtpfBpekT2bDycohD",
  "key3": "4QyKFhTrdrA4gaT6L4o1qa8H9D5BdiriwPaRsnDX6iNfyWNrZ4MgEXRAtf1jwK6mr6JZztcqveusuPBJLa9yU5uW",
  "key4": "24ndZrVzA3VqWvHBZUYkXKaGm1bqpa8rb48vG9UbMLXrGFvJFnvWEz6YcL4aS4wmnraH3QghBpErSTkHfDy9eQMN",
  "key5": "3soHxpDCoUGWzmYkKs72woJMPV4oRhEa9odBfJDaDJng71s3FYGjUCPPGX9vf9WJeiGf29dvPuTjvH499kheTsqG",
  "key6": "UhhLVmkvxCFNxbikRw5hWEFRvk4A82tqHgvBt7PRwLuE8CjtWjjK9gcFkpNET7ZLVoTF9JecWMNTKr9ZxTg7VYL",
  "key7": "4h8v542xfvMDTubGFWUPQKDk6g3dv3ETu7edtNgtzbrzks94tdYDKp4hpwkDhk2uL3bvKabmHTn4dZwv6DLVXhFP",
  "key8": "FgbZX7hhr5Hm6zvbPYkDxWo2exqihMWdHUWsXKyRoy4LUDN6Brj9noA74QfgpXJg32QGsNwqj9f42Gaxc6TeeHS",
  "key9": "5UcAq2MX193cvANFXee6NvoN5UP1J3HGmciDJqyBAZvzRSXkaGDUYK8bdPohUmBzfK4B8Zg8M2oskvRRQWPvubxt",
  "key10": "28eJct1T9MraQaTLbxPmHgz6Ss7Am1ZNKRg9PDd65PQrE2HXWFTVctSfZ5bUytXCZvVmsfkauuQM6DoPn55Txdjd",
  "key11": "3iwq4Nm2sHt3tSbz3U2xu83wmj7MUJYpNxavT3Swf8Sxtc4ccnRtGfR4zjhpJT2zF2HLSkus5EADFrQMqMPYdeZk",
  "key12": "5EpNBgg3VNG7FtrCEtyh72wWMzx5oBhMsrgfm66Kr3TLhanzxZowosQZ5PPkiRJxSTt8DoWCid5qhzzf7c31smfn",
  "key13": "4m4DoGKwQtWN6h2xrVr5LYP35Z6Hiez3tRt2nhATDCwDSL4kyQDCc932c2ZeRkNekMneaAXiev8hyWKt7WdBGe8F",
  "key14": "38WUAhAY1s1xTLeV3PCMwW4zNkRkQsYxAozKjGxBeiaaNPt8pzCatqoGJ3j9TmHKSmEh34HactyC6dYbiSanRKqR",
  "key15": "58WyGAk3uuhzwzQ8pBYPk8qexNLrGTKD4LgPbXBmGueLsDEFTQZtW1Hg56ErxVAHxSi8fvZvQjKgFJDEH1HbTT4a",
  "key16": "4M2YUajzmjj4b4KFi44e4JsiPdf24EaRAYkMSMLzjUR3p4LkMeqN6bYYLrdrjSrDVCzUAj1JTTfVL1oTBH6HFGmW",
  "key17": "4Evm4Q1aqmtKGpJ8LcjUhHff8qXWJnGmszx26RWZBuJXdzwGjNSHC5rzEWSSiwFCYSntM3S3YzvUpZot9itk9Xhy",
  "key18": "4VQpAqqRQeFCsnmiirSoQvZ2NJ6f2wWEb8xfTZuE4ZdVCmz3y7VMw4rzYYRX3jn73j6h7A5fpLbEKYAwRswQqfsk",
  "key19": "5tXnSA5pEntxtDBWLZMVxzwY42bAHwY7Z6Hic967oSbz4Vufyj2frSCpe8Li1dYXmc23URYSxHKhVUcMrmBbajmw",
  "key20": "3V55urkzQW9niRWCeQLwSSWi6rxt1j1rBx9zkTx8tyjD4pTaijNN4U4LJ1xTYsXGPgAGqunXDNGBXR5hF6Bh2BBt",
  "key21": "5wuNgFS8d3EK2ZZuYdi3GEsGmwL76WsSVueN8hshwLbWYPMTHEjeM9HhpHfkeHGVDKxEwvKzaqzQS8JW7hCneqzz",
  "key22": "4MpkF3UQiXuYW8t2FtGRUd56MfhuoJuAVJ8sDi4HddGa2wiiUnVdaBM3gDckyR6DLaJyPAP5mThzQi2TGnM8Ex6U",
  "key23": "31VKZi49W9uSgiRiN3ziQP69YZcQ6XkVpwnAhnpNG34Q6r281bcP4Sw8E8HBNXc2tASKWpL6sQhxkpaMDZjMGCZC",
  "key24": "59ZwSPzMKtAuXuvsVcYQCbMW6DBDU2BPwwZFikYTkLfhxKhAomhnSJEzFfYf1PdAvnyt3NeymZjCQNBKD3kDwzFa",
  "key25": "oQrse8xbNdDWUJXUSmKUgNCwa6fWbvaMJfQ35aG99c8rVzSTM4w3JcQm2rF8tXagCYHhyR5qaoC8viJe7CJe1Qz",
  "key26": "41GAaWJSCqryXG6W92NQaPkAmLACNWyVdYAabsdw1ivHCzKaXuxpjVafWZ4o1yPKZpkUz97b3JaJBUwWtYVCHieQ",
  "key27": "2A1VUkSJwRi5mbU8jfXuHACQr6RF4jx6zKTUqffQZvSbqsrhRA4yxyfurdtGQz5Xj5Eu3MQwbmu19WcNnkgt629r",
  "key28": "qFTU7XafU5Bgp2Uq7mnij3LhZmEE9eLQUAXa7VgRKWCGjKhe1nf26BpjbniSTqgLPpkLn363kLRhwNbiK6jteAQ",
  "key29": "4aPyrRJDtAHtMUJGxpwuMJYXTrMJWJGvcWEkDuuN2zT5ZuM5oE819fDcbZLkYJNC4CJCtvAF6KUg5zJqXAEn31ne",
  "key30": "5onkqV2Df5F3YL5mbVuBvriRcuw72KWWZ4LnRLJeo4tBtPGbg9JzURWfXpomUKBNCi8UVZqE8Pg8ExsBwnm2BW6H",
  "key31": "5F67MSCczRXbNCavGXszgEBWk8SPNFL9HZBfgMi21tfF9Leq9YcLZe5HUhcKy4WgyCpHjaAnnDh9DwvGWbdZdfnG",
  "key32": "4t2k1tWW1NVy4mrwXbUKVdVL2aym5xvDBCH7KcMW5obWt45Sv9TPdU13B4q9sTUxWdSQBfyrnm1kRfaZwnv4rxpN",
  "key33": "3Q6zuL4XyjTnKpuDrspypceSgfSBXcNweJ9jW76ieNSHKaM9yVN34Y4ZG2MDcmMa1KLDRZ6UdfUyjmPneXB6RRBS",
  "key34": "4ik3B1i7hUJ9MwDhxkMCwTGHb9Bpzf8W6yZoUYiDXNFzDeBF8gsswQ43FtvGX2vxeg4DUqgs8gwgx9nn6hzv256z",
  "key35": "3c5VVDXukEDCix36nHqz4SaSyJfh4UQLwb8B3WnVQWvyc28uZAErtWjVXPoYuvohRe7jhx6jovQBxt6Gxe1SZnzH",
  "key36": "3pPuRzyyYoSsvivyfLU7guP2EP5U25XyQZHeL4Sny6FrBpMJfweBmVAGtbASActmoJvQMy2QFumMNRryjWSFg4EJ"
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
