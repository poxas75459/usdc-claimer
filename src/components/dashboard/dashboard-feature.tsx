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
    "aS4tVbCVQJchc5VgQFn9xV2s9WDcqNP6UHnipK8zNgMFec6g3wGoRww7hVbuizrMZzRmUsZJRjGa8ptUQu3BU1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7hX4u2X6e8nEEkTLxxzmxGm9GG9JGLA1VHDM7z6ecY7s71Y32rKjfm4kJSQt3T7mSvnLTZ95FieCCALZEXytJU",
  "key1": "2i1PqFL6hdkUxTNhUk9MHTnjF8dJZ2xcAnMMdqRwHaX3ufsnGqisiMX71Ywy4v6pnkq5nkKHUfCMSaUaekA3tSKL",
  "key2": "4pDtbSZSNSJ4ZrQmdJFWwjYgDKVUePTNsfHbQeKoHkMoAujy3v3bYH4hRu3PDrNpzesfkKADGtsCRVZggcWssPLy",
  "key3": "2vicZKqK9vwaneDaMksXXRdpNEM2YDbfGJKxhEAWxy9DwhWUF8VF2eAWiv3A3zTsmGxn5aHQCiGVW3DnkGme6uWp",
  "key4": "2wTDx3V6a47yFYkZfdrB3fTx4mfE7XcD1N5Jqpx3wUGHK6LEwCqmtkzqSC9Pp2hauKKmR15L1eHJyjCHvMKR5okB",
  "key5": "5xaU81Aicyv91rsuf6xe6RAhRWhRX7tURsKenUs68FjgdLbxYHN9mP2g2qb1v2Ls6XsZ3k37QcTKxkbHG8THcKTT",
  "key6": "4oefU2gUNCa8ej2LrdF7BcRMQMn9edtfZPQpovE4FdDBxRtsmCz8a28RxmuTno1RpHrjMLjiHBRDhyZoC5e7rqp3",
  "key7": "4W4y1JadL15xoLNRgR8aQfHfxsvaUuKrQnDGLDuWS1BTZEji8oqi2C5PwY43bGdLNmSpd47h16xBqZN94RDaKtZE",
  "key8": "4R3EoF71VTbdLT2Vz2RkR9i6gkghMH1nYDwAEbv7PCFtbkZmhvER4FxaB9JsDcuMFDBFrTyBU7EgXhaivSacQQdc",
  "key9": "5tbJtn924itUh6ff5TfjcrR1JZQz5zwapzmPtfdBUWve73uRLYP86DMruwUrUi1ZkfC2KUde1ZivGWVeygYSHqTs",
  "key10": "23r9NyXaAj86t7g6i8BbZw5dVvEzpNeiaqvvb1NoagFApD7Cq3yzcPKmdT3zfF3gEQDVoqm9Dipgbb6dMDUbsSJp",
  "key11": "2stkou69XhopwEedzTGEJJQKMS668HmSUF6MMjvJBvgjEEEsajeDw1aFNsJRyhgBfUsJVbGep2mth24Vu22rMBVx",
  "key12": "zeG87nqjFTJTCz4EJhL8Qa8wE4QCiRxoTd43Chz89YKbjv5EL23X4dJNtiyQF6AFFjDSaxGNLJoEs83Y6qtgeSq",
  "key13": "5N9n3jvwPmTiDqSjuWp6uh28bD3ZQE8CRmPefHAAAg7JoK3dhLErCug4UsV4ogJQByv8kd5pJgVbd8Gqx85H9qTg",
  "key14": "49rfKpN8Y9rF6soCXUTMFt7LDJJb3vFNBen7Tqn2sApArYP1uMfeQnmHQuNTdHQJ2WMpSUjFNHETWjPq77ddtuZ1",
  "key15": "59qV6eQmJzSPEFfeCUT9BSRe83Fs2KWJaopauLYFPHGC7n5Xy3ka5pbFR9rQuYJjh2aE95kcd4tRkCLkXTmnDT1p",
  "key16": "vDdyER16s2bmcjvk8ChckLbSPB2uYKMionbN88LH6vsyZ8C4Q81FjMmxDV7gvpLTdQgdvMgVCAvLexkjJXs488x",
  "key17": "PNyekc5AeeF8xsRyuMaLkjNDQVkzMxhararoPp2FYgdntJ7LXMagwVZpbiiQExYwvRPSLqyRTxLhWATBGvarzRv",
  "key18": "3zFMZdMwxQPpkNdz172anpfok9xaQkMsMuJP8TpvBesroA2kuBog67x9ASmTNSwf4PQuBSfYK3nitkbw7ZjwvsGc",
  "key19": "4buHVM1RQQafA3mcg5cKVbbi1eq15povQ2ZPqKf7kQiLeHQBnRgpJx4qszLZzcmVDamV9uRRNue3KkvLbB4s9Sg6",
  "key20": "3Ngim3RuxJizDqbAMChcT5bUt2MCUgrMun5bmABxiaqbPBi6qugrCVR9QftEYnrGDhuFqJwscB5swZmg1E99BDup",
  "key21": "3smQ9SexqAVU8CJtC3X2eLX9ghJMu6RJ976YfQZVbNuDpAKzSzpdRmgzkM4tKxQiaxu9nkxt6eYvz1ruNZmXNDmi",
  "key22": "2rEsiFaBudf1s5BpSXTx1rxvBBv9F7YLz4LWEGJLYf2BrydCUC9nCPF6HgTEDt5WAWqkB2n5STR4kvZpTQ5C72EU",
  "key23": "54fyed9yS29jYZGrp3KEntML6v12JNrEtsd63iipZxh39MAxZ2zyUzroA6ce1sPEwDqqm4rJj9UN32yFekUmuBHz",
  "key24": "4sPFv3ogz2jL2Z5WC6uRvVqiftUsNdSHoCdDreA4SZ4pGA7XFjtKkZPY2VJz2FTcHdhwVcT6CwaRZtCovmGYYYXh",
  "key25": "5eDoNpQ6odWdJ7jLz73pvpQAWejyeZf5ziKHS8ro4ynv2KqLDvs7PVqe5FPdiSyVLv2dRe45DGi3WZYnGRGVuq5c",
  "key26": "3CG6tcm1bsJzFmw5Se7fkZKw5KxKbEoUYqeDBf2BUX7kzYLM2MbHmfxrUQuTEVXuMrEdysJXG8gE2PqAZx43FdHU",
  "key27": "5XwMFitK5p9tMsMyZvcyUER7jL3gfT2MK2RHuH4rxrevNwej5SSgV3dRHEqY9eVQq8VT4nodtM4CUkgMkxr5pD1B",
  "key28": "2YE4HJ23ircEdsZeh4Qr5BUEQT2gMfY9xP7M18SYqRNQCdRo29tQh6UZtfDCgek3tewRx9qkPgiDzYFc8fgvfm1f",
  "key29": "4HWhoy9n6Xbt7chbJUmCzrewTtfRvk5148BHoTVS3wKGizMTDM6BfKo1NYhnjGXwCvYeE27ADmb7QVhaq15X4hF2",
  "key30": "3ct5ZSAZHMMqS7UntrLLufpipkFVDSvv3dG78kJf3pyrWoaFhJMqqSvGUEZTvphuvgj9QHevHfvof49ddj3i2p2C",
  "key31": "3cJkUrXfXjY2trDopwZ6rgaPnuLJiJPeYKfapjscc46LFZWGcb8F6QVexatY2FSrxBVPxenrJCz6PQfgfZ7HQTFY",
  "key32": "5qdkXqAyUjyaqoJQi9fQvECeRaZavNQUmx821vxqnsuMyCAKeJzCdV9g9NzpeX9vGCwSVi7n5eGc1BEc67TwPut9",
  "key33": "2XyHq3XJDXJq3EbUVqRJw4p9Fn4cP7UzWamGBPixXKWTVkQbku9eot7Kv5ui9f6Qu7K6RXJ3qxmP8CP4k2NmF2JA",
  "key34": "5mHE2FKdT6st24K9NQvLPXNWhhGZr6ZMongir9Z1qDkF3AjeqFPEz8zepvWtPUQwG15ysGQBjhKL35uQjmtDpAab",
  "key35": "5NteUJb1vwxaonJttU9e1ZMoxWhdEFZCmJiDSZYWDDAsAvyb56cxuieywdf4R7RKGg6tcvRMp4gNrhGzaBpWH5Hc",
  "key36": "wozt3giWMxDKHZkZVSDU7ayprMvkEDnBYAqkymb6yv4LQPKSmuuqGTRL7HquHnSXnfFMojwSvahQR2Ewmg3AUMy",
  "key37": "311M9cmGqcxVnxvpgWhGXNQLJbMcjUfVsJkxGqvZmTsPxD9CXoL5Vchftfe9FkvK5n3M7GGvsZjvoUtxyuCGT9Nc",
  "key38": "4TsTzXX6ZuXPCEriuJoJWHoDGm4HNZk1HeUPskEKp4V9C2mAuDVX5ADCKXPmUJ8NmaLYZjVUQmGtht6D1R4BPEXe",
  "key39": "5pKfUB3zHxbgfDhArpVs1j4Yp3PNpeWpmeY2PKvJu7C7eTMg9Kx28edjSyXS51fC9Qi1f33mh7N94tnurKAtQq4d",
  "key40": "3GH7XTtyPkMkea7w76HDGMQ3RGFfR6J2Q2a3f9GKrcxruVkBzMwC1TD7ZJ5K7pb8R3AzJF4YCjUknNa8fpUdnHFH"
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
