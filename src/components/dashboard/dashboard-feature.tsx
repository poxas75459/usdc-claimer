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
    "5HV14saQuy69C16aSed1F8Bu49CJo5fKrAowD7s7ofBXkEgUCKV8zMfywSGBZVpsQhFeNtkL6dfJwXkv327P5eHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axtcLfAvtxQBAb7iep4jU556KR8EgDcHDxLuecQNsAuC6uaWCn2VaF63MigNTAYXmHMaUF6AubZwH3xVaNCGqxk",
  "key1": "5BufMhzaDWbXHKZLXQUbXzkacoSxa3HNkowy8o9Sjcz5Lw3mG8D8P9scM87WX5HNBqF1RdApnBAB4CfkWKFC8ABL",
  "key2": "2utXgKRWc9jQQtDtHppqdPdH71WNEtZ5KVNGZoWEmp6khSoHE2ZvKh8dpy9qCozGk8J9GgBbYKWVhLdWVnJnQGLu",
  "key3": "4QQ7q9dFQHZLyqYVnL3ZaBWatSmDPQPNd9RTHjXF4idv5RyKPKHsbi6B74Pk72fXNH47DNoWuMbw6yHcC45GqzkW",
  "key4": "61QXcjNKDWKFoKcnkmnRLy8w2bhACr3uuUBfBdHsYXrPk9e9oyUuJJyrvLoiHoTsavAvHnfCxXHfr6Twc6nyqttQ",
  "key5": "4zmCMa1N75Qe9hJf65Svvnprt77siVMajWk8SveShM1AwnhFo9Up1vRkX2BmSQENgp2ECzVhdgD5pbSSsxKDT3zm",
  "key6": "gkkzddnpy7eNV3tuqn8VpdzVgW3sJV9TSvV6HctnPuj7tsUovTp3tJ5LujPGaiHPG4GvLN35hrmGShaMh2Qf2Yg",
  "key7": "3QSmiD4Qdb3Wry5WcogEF8fCKH8ZBsVMqfBUuTMupFN1WLeFT1gAvrT7Ja2m9PC8xDjgYt2tzvMtoJ7L6Qw7b7is",
  "key8": "5J6Fb3ssEn6n1c6VXJio4VK4773Hw7iYHK9P23ZULHwYe4q3hWK6rwDFvnouYsBvf9DX8cErbJ62c29PPN8mhVTU",
  "key9": "5wwAgYz5761kToV855L9Tq2JsZK6PbiyGyeypY2spJAS9Az8zr9BnaCLa3DMDWTKJRoP2YebSQkNkgefkvonTHds",
  "key10": "RDzK6ZVqmrBXMTTcLTZbUP9Z6Vp8c4fQFgV12DuWA9CghsnV2k4iyaBQU7rHEhGRbJxMDQmWB1vxa1sHbFXu2EK",
  "key11": "2rY61X7WrPZtDq3vQ5VyPohGEzoM8pL6pGQhXEoWsnoYp5WZcVHY72GpdxXeHyXYsgp1Yt8DNvdwExNA5akPZEvi",
  "key12": "5niymqt8kWYLTADmPnbDPQbxXWcp1jPP9FJcXFLg3snW5zDnxwUGVLUyKPfiYkmrqY4CWrsDJgvN3fVHcwZmbg75",
  "key13": "43dd6wkdUf4TH9o59jDJ7vDHMKNxM4NMQfWxQ3shFsrXmKAr7Qz5HCj3g1rRyYfzenqKtaTS5ckQxGREfa6uZg5W",
  "key14": "5kJiZPDToZbgdw5JTguHtih1mE5zREvDAHHBRAp8Ct89xD5GCaAwKMnYVjQxUBJzSKRPJ1g1SVZ8Rp9hM1V4Nv4g",
  "key15": "4wo5scrr4NLt6Egudjgv41s2LCdgVQ4AfW5iGEC1Vve2or1FsX8FvQonu39Fb9KqEdVuWJwJHZxec33JZpYUqh34",
  "key16": "5m61QfaNm5JegkyTSBKAJ6yW7PAFDfrg3Eh6VzZdJ2mn1aHCm8bsNYyh2w5AJjSy3BSsaHjdQAL7mtqnMTrCkEdC",
  "key17": "3ZMEM5bEt4dVqv1B2y4XS8Qc9uPyYbTkENbcKdPaMZSiqfGTv4UHa5BCBZgMtHqQ7hLknFkXLAjpUDZBVDw3tnQf",
  "key18": "5ExVSxBLSJz5LDpCbWqVZ7yEwnrJpyeJ2y3zghX6KNVz6wzsC3ZK6hiFECGUPsiq7umLaVJ7wJYrBDbPGoydfZDS",
  "key19": "63LPPKN3KY6ao3y2Mh8sPNpmLFcgugNUAZd2ENY2dDxhWeTXzkRdYfoovupiSeQfqeCdJQHQXSaJKmurJk6gcfaN",
  "key20": "5KCLzvQrsKFk1iMWrenzkY5utF3g3i17x2UaTWErD3Z3GQWjtfW6zYSUmEQrRGFkDPUyksfbD6uB1QGrCMeCURfh",
  "key21": "x3mMqyGhYeKm5bhFzAr5JT4MWwh9XBEtybPumk1XczAuQKtFebUsEnAk3Q2gQaoCEaRavgR9QRvq8HVb8Ks4hf5",
  "key22": "2opiTqnHuabYuozPU6oJqWNURCAmqpQwx1JPrqQbzqvatMxzT9QsdrwpaESgCdquzCSuYnFXV3nDb9sB4bsfEfzN",
  "key23": "2CHMLpcUtkC5ZJorT5NeviQHepBXsKVCqcFZwN17GgEhTYRoUbwzRkjbwzvyRj4jzt1Eo3zykr4FEDGZJDZ5jgzF",
  "key24": "4dxosxYYkegu5fWmGtPB31w37q9iMKaBFKiTpeitRjb9chsP1dS9iqqYK5uPMJb5VeW46SQ1wMy3MC3wTXxeaRua",
  "key25": "1BKLC332iuL9U58w774qaHpCydew28GPtsVXFjn7jdPJ4UBa4Bnfi5PUXe48thZts4QVoGks3S174UvVKJEAsAu",
  "key26": "38C5AjXpmvxV2beXcKbHa1BHYMwWhTQPXHrYNRWkGMWVVGfQFPPWikaRJCRjuZTS4Gf46LA1biHw9Aohcoao1oF9",
  "key27": "3JFmuWkCpEMDRfnQiamSvuEogLJFwb4guv3Cw69QodKwG4D3SG3uoPS76oDsJW6pFKVqL2GdeWSf7rk4y3rr6Szi",
  "key28": "2Vjj328JeQ5TQW9r68PKshVoWWpRF4jvhTABdzBSbPbFXZMjimfv1duagt9aPA7WnM2Zi89L9AgvMcT52NAGjQ5s",
  "key29": "dp6ddkavj9qAcj3hwMTakefvikTxNGPHJydjHBqE2YN2Qid4e5Ysu1ZfCwH2dJfuZbkZDJ4VbCNuN7u3m5oxPee",
  "key30": "GxsbeARLXSPXQzPfusFpPDXUDtxawpjpVghUgDzyw4nRy6YN3SZFD1q57VxNZXeXWAx9jF5c2Dw6bXKcHqLBPD6",
  "key31": "3hCZs9m9dKH5t2x6bTgy6GfYMDQfmVxbKs4nhrYyVqenM64WS571hJzvKFSsM6PQGjydzhn9KPFtP8ABAQHMiHg2",
  "key32": "5BtDmsSTDfaCfCzoBgbacnP2GZJ5j8jJzHBT3qpiUuqjYycxnNje8eQj1HaeJxVjgTWr95KjZvxamFfXjSWfcxcB",
  "key33": "5pGH1kx12HzwqFpWQ7CwecTfEhxvTE1rx7i6xg9T6FxVDSJN53PWVQcpCSawK2zoZLE9479d71g4oms8wSzNPkdV"
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
