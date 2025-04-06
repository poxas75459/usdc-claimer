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
    "3pumauiw7tzibBsXdn6UjinLJLQnrvnpUUavAWBap8kHtFc6Usbnv9R7fNuZNQT6SFUNHvJMJkYjpyuqxNzow7XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CeVU5PMxSHtUQPYPxdsJFg7BMCx9NX3Twjmak4uWoL8kGmh2SYcHuv1fKtdULBmgczn4waEsoXVLG25TbtEGEVc",
  "key1": "234ZM7po9KYuQHXa8Dk8pFXGVgJoKS7bxaGKnwnjSdq9jdFenCdb6JCBoFKDHVjovJgQea8BzRYYWGHMMu66eEop",
  "key2": "5QJfxPtk636ga8M4aHChLQfqwHbQtBQ7ZvetXgxicqzynsPP9j7QW9b8td5jVXRQsaBDHBamKzywLsETscmC2r3f",
  "key3": "Mq21Cuyi1iVUuyMcgZjxZuYTiWWk3PbK8VEbc5hwdK6XRT4Qh82VouXQEPxaEb2TD6vYawUrvv3iWTev9sR2VKq",
  "key4": "3SUndM588ad3zpt1EmdEwySCSF9LDag5ZAmBPDVN3afnLtBC99BCUJw5fNER7Av1tTi5WeJAwUBks16n2p4fn1B8",
  "key5": "4YWEXvbEDPK8kbbqhFmsNGWDsZqGMwkXRUDvLp8nWyx35b8UawTLbxJNochf8i1GePQWbucHJNEECko8eS5vdYzC",
  "key6": "ScBS4w7dc7d3ATynXGHnDxrf27NrUH9BjC2M65HDdwnLqygipf481Pja1rJRBDaogsfPUnGM5jM1o8vgDZ4aHiB",
  "key7": "5v1jkeTfoBU7rzH5ErEbF6gMxFPTgmf6urH589bURxPmYRrWwTfS6f98JDH898QrLKSWyFwaKu1XT91nNkttr4da",
  "key8": "zkdNTTrq2vDmtUityn157yAubxzc6xzdu17aWPvszVz96nCddb1w73ZJHHV8ZfUo4pYANpi6j5uWnxmxoj8kie6",
  "key9": "2oUbYreFUkHecHWSTczGKnCzCsiScZbC2uGZLDXdWcj42vWfVy8Nqswf6efVTJ1WYyysvyZhLrBCLnkKieT6orQj",
  "key10": "5gPqi3JugvQVDDeQkYUe77c3bhNNPBKtAx8GFZxPSLqmKdsXS7WvVNuqgUUJAbQZVSmRwjiQ41VYp1MHANFvnWX5",
  "key11": "4HrLEqY42FFcUWMGc3NnzuSyRWvTnooFy4TrCic76sfiY7qfAjYL6PssdCgjYE8xDMYkuqya9oH9rAinneNq6gFj",
  "key12": "4tGRShAuUuR9yAFAd8KKazc5sezASNZFzauLhuHz2L48aVd7gisRZJU6Ju75ofCZj1Nhn3FxNqS2FtYesGyTp99Q",
  "key13": "ycmxYai7SnDjG7ZubZ9TzK7nNHTSJEnbs1demYKAoFcKTqhu32GRWoJmCSzx8opjtpqdFEeFCAqzLh8fnPYRXSM",
  "key14": "3NABdSb9EXMxGDfyHejKoDbBdh5dgwwWvchBYF5KaK7fURUySaxnZwDuS7saLXnUsTkDZmUazuSAkmkwNREoqYR8",
  "key15": "5oMZ6Xnsah81mDUY4muSzwbznk3MexcooYNJ7c6dPmw1CbL9Pj9gwGvrj9RQRcmUQmDMieGLFkh9fR8ge9WCF73Z",
  "key16": "2DfPDapex6HkKpRGDT76sWSaZmHWVD4cbgDpzy1DEbZtbnPZMzc6ZF3TtrcCsY2oyWdCjs2WJKWjkDofbthspZHU",
  "key17": "4K9181CrTPYHZiYpA1CxfkAUiZvyFFHmsmfdzzHYHPdDJAtXJN9CW1QLwwqZD2vx1vhESbLAFqZjPYRShB94GnLH",
  "key18": "zpo4voSWsvLpHTTJcWqe4fMmWismEiD3wtmSZCVYhyocYcqcEuk1m6wtWjgCLsrXBVuTqpGNWszKaUC4PttQCeC",
  "key19": "3a7huRe1idv4fk8hSjxYwJJtoSzssf2CvBYetTcDzy9xQuP2sUfVdBAwFrHj8pCJpFCZAzNG3LREDuRzqPCKKFyJ",
  "key20": "4KABXnaGNWrwJ7SRFbmVr6cR4HDzi9uGXhZcmQyKb7kMp5bMdHEvaXeyqvDvTBkxhhDCmdagNLBPuwJsE4ihKZg9",
  "key21": "2HxT2jtsFD9EpCrhpsryvXLjGdcmWut7GUk86YTvNx8LJRauR7L2wH6cVjxcd8GqdteFf8QcZrd45JizZjdzGMWK",
  "key22": "2mUot78kjXbB9CKPxu2ztwyTnxCPBBgeXWihhbdds3hcpYwnZcQdWBQGNnA7zVATgAPYmUXrJZru2Y694efE5NuZ",
  "key23": "4hpJU5gK7soATf51o3dNemFjZScapAnz12LUdYpJuKByZkPur99heKimDhmb7MxYuCv8BmncFVxbCoqkCAaTyxhx",
  "key24": "2BhVQYyDEyWjN1hFnfnyZ1dZPNaS5en7Y67AU6XWX3yEvPxcbw5xVoe5GUtgJopdaUnvpT27xqqvNBXdizK67GXF",
  "key25": "55pJvxPKj92iJNryPiLkncktaSs3HPbKjYmT8fK18MmszxGUUyWidhZLsAYvRt4w8NQfhTkszkfmXyubPkV1fyMu",
  "key26": "4BTzpXvzTuMvcffiAQQK9YwV9YpzSq5udVkdQrkoX6oRVSKz7TkhmDKbxCXWhnaWEQWgev89ZYchyWuUk7QxvYqY",
  "key27": "4wTywo8vLTjdMumjK7Jffs1te4PGxznHFYFhLDwqqNsKuSqwAyRUYhA3GjSzmnqgrJ9AgQdvdP2FUmU2ozDMVVkr",
  "key28": "3T42whAw7VuLoTXwioruRdRaMUVzwPuqNGnP4rv6uXen5oJAcRSuBbjpEJnAByJEkSqrnrfS2ytQSHKKzEQATQqC"
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
