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
    "2sjKjHx5T2N1mwb3rUdnX3LZRdGofni4STBJvpNexwn6iuSUicsjV8pNkKsPpWn89uNgg8Z6GUF8njHPrqyRRjkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGih5SD8kaoKCKs6hnba5UUJuEABtXn52qx7sQHxRRadorao9vr1VPnHg83Pon9yuGAj6zzdj4EBpFYFkvwDXSz",
  "key1": "oP3xEGnHkDwS3AMXojnLn95mNeKUYbXAnAKkmdQLJwDjVAKLE8gfEQvypuhPD8duSk1y13VLeBWjkQx6z5wKJ6g",
  "key2": "2ozcur4E13euPYBVJNoEgzH1jZwhkDDLh4v4oxF4T845zMVYkjzKzootkVHpfeYa39Er98Fst8Lum3LUHYsjsaWX",
  "key3": "LJWcvsntcqJ9TWMNMtXSScoGeCjadescWeW7KoUtek2a5onxiiU6GsgVX28Ap7w7iBuHYRMcKsFVLrxpryLFAPD",
  "key4": "31vudY2DUhwQkHVq5uSngoQhkhuR1gud6cuHWrTrSyetga71uvnL81Y1CM2NYrqFmzcudoQTuWi9v14NePVdmgcV",
  "key5": "4rWf3qEiR46E1j4ZM52XMs8sksk9UHjE9QFGNWo6xKvf4ZZcyQT5fHC8UxGc3hM732xBSzTT7pqn9vnbQoGVL8iZ",
  "key6": "rJX4SktAfFsrpr4i8MsHxH2bXz2J36S9DR1oK4euQ4eSrbzexjN6kyysUZKo8oAUKy1uyv5e4FeFNGBYzkWxV2a",
  "key7": "4uLAtitBzAwphAaABtVsU685v6szdtHUKwAye9PBc2LSCnQ4LxekpM7FEMrnwDJomRcP2TkacwmiH9xp2mrvYK1J",
  "key8": "3eju9npTXaa44LaygHQBjPu5L1piGiLK9cEjbit9MGLVXF4jBv7uswUuDxk6rBYFRYv7QTcZpkUboKDftKa2pKUA",
  "key9": "mBKsnWt6HMpbJjPF73uoTb58PcUiAFsiHGY6KiBnSsE6gXfLT2BHVABgsf1AqWC8Rb9xNuwchEjUdYExFu4VAgh",
  "key10": "3739Et5diuUrqvk1K6EMccoJKfAokTmTVdvvPzFPrTWg8zLFYu3ExvGvDAB3Ag9JHhQybnXPk2xSz2h6MAy1gfYX",
  "key11": "5UiA182AWh27MxDsDgRM3qbr4Wh486nAMfDCEUGdYrAsLrQ6KrrRhaEm7JiZwqsveErMyXA3DoEopzmHEr15EcYS",
  "key12": "3GwhRbQQcFvX6e7PoaWing13NDsAZE5F3FyUUGJqMwPcG4UgFreCTxkRDWrerZBDvZDy6wqGmDUVKQ7D2i635Kxw",
  "key13": "43gBcbXasyxQjajLgCtk8zhNJMMgKNGSyBhi1yYuD7Jm474gJVFc5k7kZohYLeu6BkpaXvUGurLAroSXPnUuQi8U",
  "key14": "LYB6N2NHxTSbs1YZ9hYa1xqyUyrWgia42CReDn2GZG4Xh9Qno8RnxxtqhTLhfeRn4UVTxPtSWemwjzrCnUUftHe",
  "key15": "5tuQEkgWuwNqjYXGqzNLD5FQbjTTkfV2Jw7DNTwrHgRMkTLxcnTj6VzypoTYutx8YbaQf4KPW6GExkD7s6isjH52",
  "key16": "riaGZJGJxDt37Z3FWZnoZRknmbrK86uyX1XaAWKS8aVjkZbXf3hE5uDsAE8SGjZ74kSPTeCgLLfT91TiQKicSzX",
  "key17": "5kg2cc84SwfaKxgMMxt7PzgA4ueuuVeqdqtSHWsyPBpcwjzcZPwRTBGKABgPmkURiC2oqVrfc9rGYod27jPNYx6e",
  "key18": "4xFpuGQkuK3Uw8Eauqqu7buii8v77LUZfARrxTkEVS1q8wsm6VnspkZvYNwCuZBcRiXA7d4ucJzAveDE6Ug8xh98",
  "key19": "63Angpr77B6GT2apyPYeSHHYddEgcQd4rWF5ztz2qfteCeenHYcsiYpoHP9kTd1zSFiJXPhbGQpB2TktuefrAeb9",
  "key20": "3fPtakHBsz2fQrNQSrZgvzS948H4eJvht2mSEq3vGFULR1Et1VTsqtsRs44cuPeWzM612K7tmDh6BShTpzgeWuAZ",
  "key21": "2DWscWrJwjK94FhggWZZScMHzHZZfRs1bJSTbxbWtH9pKp6kFGyaWUtJvG2PDudX2LeaegM9HPzL3Qpu129VJDNM",
  "key22": "kLmnCzcodHxHMPg42xAHdn228wQJPh7w4zCJfAYzV7wg5gPfC5nWP7HEy1xri8YG4LCRWjNJooAuPZ7YyYWMemk",
  "key23": "2vg8bEPneq8Jkv4hML5zCDFSFkSfbf9vvYx8QHqVN6enZBox2CDwYysubpN5o2DdW3Zdn5HVfUZgfZwgWMCnQZS4",
  "key24": "3i8JbZ2karHZUGNC9J1FAYJvPSnmf3KTmm1qss1br2LVvBJpzUUtn7h8B8KNmeeJAG72Hk2Adip6odjyCj6JimR4",
  "key25": "5LKa7eU8Yj5U1z4zvLJNBTtkAunJU5yVXiyxS3adAULqeWLqTQ22uyDjeyn7gASeCAzqzQR6tzxfFzuP4Pk4mvSU",
  "key26": "5MA7x9SNm1FPkHXS1b1ptJAvDoBhyPhpccJby7Ni5PfTmqEL13PQnt9ERjkm7w8Mhfa8NoXdGqCAo2j1oFC6Gdph",
  "key27": "rJaFo4AASP4GuxPUYMLJG3PJpJ3Y44HuF4mZr4X1Tmm8HbPbn3tLcsiceuXyNx4NFAiyCaYhYp7QwF1wHTTP9Li",
  "key28": "rMLYwJQtjqv7chTnN1S3qA8jSFqPFn5UbdS3sExUt52CADQprLVf1TGJ4h1RYMC5ccUJXKDBhdDKhphvx2KWFe9",
  "key29": "22f1JvuirVeYRtHidGu3ALfyjfXwfvp41xZqDaPm4JvMN5P8rHDLuf8xSvYQb14YPQ5uQHgpW1Lexexi7H5RPVjq",
  "key30": "jPukgU6Sh7KceJntin3EKK2jsuxthiasSencjJ6Uvq9txFv6StN6tow1NrHQcPFiTPFgmg8H8X2Stz57CusVkKi",
  "key31": "3HUciH9Z7oBw5o3nYyExaXNfQqnF16aHKmCrXApqSgEPy3YioouL84ADEkVSj91FKov5xodJh6AkCu6JScmKJYvU",
  "key32": "3Ahk3EgmL6FDYQb9VE32Mkdv8heAkreSSXSagX8ymKgGVi5CwJaKqV4a1gQpMnbkDjGLaW5cmDA5uxwGQrr7ptAu",
  "key33": "3wv1viydLRSs3ie3eRpctHVGDEfVJB4AR3SC5ygdMMUdgGRP4g53a1VmxeXXX4EjyjYr59tapScRcP4DWbPUPYZH",
  "key34": "3xpVpbvfADMwz2HwjreeG582ZkqMHXmNDsKo8RUH5uLy1cieS31NYL29tWzaUTeBLrx4WJv5gRcPrZedNwD5rMTN"
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
