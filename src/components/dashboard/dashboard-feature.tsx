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
    "3rBH86sREM7svSuEYmxwXz6EqTvkQBdTt5aM17XDa6BXdn5VZ7u17FPytY3DUyLX53234Vqw8oiZ79QFSKanwTpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TABDyN5YJFcKFJAmAZY7VHWSK5QaCSJkHqCPE5sYhW4k5QSrVNB4VowAT9kBAuFeU76SwM2r5U3Br4rFkTWsf4s",
  "key1": "FzvnifZ6d9DQu5nQ8Lp5gwpQvLNvnv6tgyQiW4z8XzLEJydrT98DvVcq6UtsrYLLS3CVwWPtGrYfx4YwXFz5dK4",
  "key2": "3iz3FAda7Kt7uyGdahejuXz6Ctxvb6vaTXhqkLQ1hmzgFi4vvSQazQ2EQznSeLdFqFTQ275C1WWsBsdVHChDGg23",
  "key3": "4fboGJL33ag7PhqFq9YswfLg1imM8yFsooBJ1HtLQ1VVAryuhrtAkEqBKiWBbBMKv4KYFhi78RDpHFQjx6tCu83v",
  "key4": "3cnKLgbgLjRqKGWAeTEo8QgP66UWsjTX24bT4pYsvf9kXUnoN7JrHjfujJoVwGaZVXy6sKA8iPxGnjMZTrUyQapz",
  "key5": "63igPvQtg2CU5Js57Li4nH7wycMZjrzif8znLXEfnHVVDeSzozRX3rHB1Div8sa2oF8i5Nq77b2PZ9KtupGdaYVj",
  "key6": "xnqpEehy2uL52gWtnx5XRVtdh4RDDM13rVGhzXy3Gk1LuSTTyQUyscqZjLjNC9QB8VQNoRzXAFUEDgRXKXRGE6u",
  "key7": "bKC75doGf9aiqSwNFbARAuBCrx81YBcMhEgNPTta6X88L5E4pzbYEVwjagKr6hSNsE5yb3muCiUv2uJP9kY2H6A",
  "key8": "2tth93ZUQHL27aMqWovJsEY9UAG99R9RFcWp5pYUe2Bm4fpQcREJrtoY1qjjAA6SxdNnqMTFr8gB2of5o3ujcQ9P",
  "key9": "4cCHQukbY3UyzakpstSr5MEUPjAobjawfcGDb6TyHUkxJUf7rcJ9BuDVxPYqXAs6kvdo2x1REJKUDiK7C4FhtUeu",
  "key10": "4WBHEVqLudsoMamcSTcjwFRUJuj77PzQUehPajm1aEijaDRaJRk1NJgHxt97nxSPdFamdd6eFiYTAsfFERbNarMA",
  "key11": "2URp2w6QDsaB5oqsi4y8uY1ZVN1mRZMgFqDaGQJD26UuZH6abx8tXwCiZgewPPDJrv4nzGjHVi2UvenRvpcpo7W2",
  "key12": "5a1x4Wijnbo8xVK9xo4qFrK2x9inWcVZ8uUEMMoU9Gu1nA9eTFYJy4rfA4JHHFYkbjHsyVPo3YX5wRE8mekY5DWZ",
  "key13": "3irWpX332U93p2mUeTcZWU7otDLFy1TuZ248ZP66QanahaGM4KFbFDSRmnK719ZRPNhuVsR4QtzUv32dLMoqoobn",
  "key14": "4hZbXypTxhmM8SyfzhPCqSVd6D6sNkAxRjsKyq66dJhGP7ybYU2jbDVyaxns1N4LNujxXWrbBWBmCCg355U44xUD",
  "key15": "c4uYXz6ZA8HVu5vQxqnKj4esJFVMMhf8FyM4ibXL7kXFKMUMrqLhcQSmMDvcXFHrVubw6k8BEojoU1p7y7SHkLP",
  "key16": "5LjDRotcsc155UmP2FVe3KneGAVyftzcAdGe65WaLyisa5uD35UjzDW4Y61nk35JwwRnhZ4srKZoyzHjpAKSN7wL",
  "key17": "PqEb7o9Srb9vqRNMxPkMMCvYCyJUNwoTwWWXTBrptKxX4ffxUzJbyXNfJq52tEVDVPEqF4NJAPxJt185CbknE2M",
  "key18": "27k8BRy3FMw5FYFCWNE5DJXu5JqUcWhRmPcKE6Z1psoRzNDxfZEWJE1Q73AnCLkxqcXf396DEwnyz3u48h4BrKQj",
  "key19": "4setPGLN3DpT9fZRZFrALwqtHM9rdC7ryG5HyEn1ciTAZAdFheGNADJyNasRCRGpkTzuGRQbjUXUSyXr1yTbLT9W",
  "key20": "43YPLE9uJ8PqaEzUvM4PfZKYPvYFNHbmPpTHSWNfbNhR3ktK8cHSf377fVaUFsvn4CYyMaasbYFLyniu9gpyvyU8",
  "key21": "2BynEeGzGYPKmg87Dk5rhG1Fk7VkZKSRoULCt3F9e4BMtkynHPkHi8pQKEX88eii6kyXSaaSMEPv9YYjnsH2KeLv",
  "key22": "3jtKTcdEV6Kvds1q3BZPoz7C53ct6kbivXCE8Bxm3kvrNTUyMeSDLW3Tfe6hjYVbrHyTRnS3tscgX5AxXEs6K219",
  "key23": "3KDTvvrBpzBmRS5i38dpfbVLKPCk7iB3c5b5w6AvsSCQkY1jZKCCU894RCXM6Pj1MWb3uSouZD3NqnJzg6wG1TKi",
  "key24": "2NRynLVWmWLdPEZ3s65wc9n3HFrpaDpbicJNgCPRY4WPymwmqoUDzKRjButcaSTAZ49QtGuLntr2DS35XzMDxaQs",
  "key25": "4h3qRiDeNr9D1Fzzuwp3Xr5AfUHkoK4HA3K22fecuznbkeq4FC9QCRwPYVMBQjTKry1aGEC8mKHxtBfm21dz6UY7",
  "key26": "3iXLbmi1gSyeSqecNzzhY7FGvfxNpRbyrSpN1kXCZGqusty1HSzRiC7JXkKX8zbrKUYcokyzPS3GXFFn1izoFgVt",
  "key27": "678hdHRpUJEBThH8jSF2iak8VPc9vm3fgB5Znbbo4x9ywgenjyADLuNWxV4AEH8cdAzHNLxg5un6rmFLHBQ5d5Tk",
  "key28": "4rNmnRdZYonr5iDFh3hYgh8VFcLbxzNDEhPyysPoLSMS1nkNM7tFQLgtDyapuazvgj8rSyUK5VdtYtvVVrNQBeyP",
  "key29": "4HsWSahNv1hwoP7amyaL4qM3ey6KbBLoY1EsN22KGEVW8ZzxLrm4V85Boj8FcwhsnGRBeaiomYGZZtxbsM6nwYj4",
  "key30": "3YLFKY6ygjznnkSa5PTLFSAqatcFJNo1sedp4casTiZ1uZQXQgzuD35esYUL4EZ2CnGs4uPcoYeBuEqQspFLoz5k",
  "key31": "3rftwj1wY1bqPzC71mHicyTxbW6AKvEpmiv3j24rZsHzK4KTtfw8eCBYZFDX2TNrqLWc7E2mL6MDLaDBLu7agaPs",
  "key32": "48w1ENWbqrL6FubKw494V17mJC6AsKHBHZEuufy4eBQpacRMhgARGX9aQWRgHW6h9H7MMDUF4ziJz8P2eX9wZdoR",
  "key33": "28QfXkGZQx8oEYKVE34hiYgibs45f9UiKaZK8PjstZALxWPrnjCYs4nX7Yj6gRsSGLyaVy8hvLBDDSHEMhaGA3H7"
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
