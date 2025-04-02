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
    "2ZuqaBw3ohyeLqdDp9n7eTU4ip8haWV2if3Bw8Ybog4wwZNYFqSLjxPt5hoTrmSMLsGZgMP3sTphh8oa2y7VyzBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLEr1QnwMSsnQ9TxWQkJgwL194hnDgDDqqzWygpJUUJtKAvJJjYNsPN1NF3JD2MkBZLVgQiRjciqRqij948XnsA",
  "key1": "5bDBvTKP6HCDX18iZvMCRDmJmt6iCTCXYgHyoJGz6kCYMufQ7kYfTaF3qiQKbbxTNfwndQowmmArnVBkQ5BPoiUi",
  "key2": "45fgA9RJ3LSb4sKEHnWtSedUPAnFTn75kv8nBHiyR3GAXNvu9ygqKPugCuU1fw4daeQKLLiZXDcRen31qH7wdkvF",
  "key3": "4H8mJxpkPfDAnFJqmSosgiZ6ixWtGwdYbvXVX3yLBQEYdAjJN77NeGVPv5fw4kYbFxNsyQdBn49M9JpawhiyGE1q",
  "key4": "3vyb2z9ebhcWPXGiLACCmqZrC5eAMun42DvYW6g6oThwWNXMXhoRnV3QtJ7EL9hyUFm5VJZMCsa6YYBFrZNujAhD",
  "key5": "5ddNkS9Vss3tvDwFcVALfRvu3NZQ317K2XMGXH4RAhbPVXUh5QXQ8R6mgg6QkhnhsbeokWrmuBPibR9tQhXLxsti",
  "key6": "382z1zY6tkKVoEc5pMbCkd4JaSdHzZYKn338q8MAeQLcvi3vm96LbjHkLehfV93HTy3H2P56ZpEkMoevKBAPGY2S",
  "key7": "634p6FEnMmHqJbyeHYBJCuzAJXBeLS6PPe1GK2w1Av82AL38QLT6zks6ZrqYtSLcSFhxjQFNwVdbhA1wS77GrGGW",
  "key8": "5KNQyn7ZYNFs6CdxVfHzpDooQwzTHGTATuG3b74YHqS1BcG7dZkBg7vF7YxKNgp3MnLJxSnBcm9NmHa5Q44SY3ne",
  "key9": "2uiNHMuaKNKvLXUWg3fCGN3oDBDuHxUL2FNqc7x1nubdc8GqkroM3FGQ61ohVsJ4WV1NQfx6hcsh5hDrET2SRH7Z",
  "key10": "4skMoaGhPZ6RJTqfSm37MegY6fSK1msHmPXfviuedyDaCLM6oq9V6xxPFVKJaYaJeKq6QUpveeR1C2eQZ1C2XEed",
  "key11": "5LJuv9bAghdS59Gn5ceN1kSTFcDPfvHBEbUKQx4C1RqEbxpEHAfYu3QLtmcPsaXvSQHwUGxryNXVomja7YwnGepf",
  "key12": "2YdC9pTksVYE6bjEPEv2rkW7oLvbUWrxtZJx51m3KJs5sFeikuFj7v1ttupEefuTGR3ExfJWmsupDz8vuR9uuMyb",
  "key13": "51pT5uQpCr4THVTTU4BipeQ3uirpz81neFiNaDhDETRqiWxWsGYspYvv41GU6g4divvhGie67qMydeidwnXSAizU",
  "key14": "413J3DanpUvV6JWwd82CzMNifHDmQMy5YUFieUpE52TwQYPLqM4gutFqpSTGdMcD3Sjkha6DYZW1sZYeNHzJcCox",
  "key15": "22uPKWGcktiedYQhnc9fimUnLXsDRppcxxXTEQiNC4Nte2tZXQMkQjLWj8q9ytYMfjUBYpy9pYaEjJAhA7igq1x8",
  "key16": "3GvcwR4apzJcUexRJT2zAKWSanvnDL8FTgy6xR4AKQzt98t1SfGu2cM9XPdJ4BC8NRxwX4VuJhYzFVhbTssYGNBv",
  "key17": "3DXVKycnAM1AcKAViA6yLi4nnFXPk7xujKjAHPWjWEjPBS6hRnyRzj1ME9EhVo11feVfANDdyJPUo9UV8NwR3hKc",
  "key18": "373vcx1KjRFpUiPvrQoBUQ4YLiaR48M5XpF4F98784LMFAS2wkotN6jiuZUgmmF5Q2QSiQQCePcyWrRNRCzrtiGV",
  "key19": "34PLUjCVkcGtP4j8hQvgMpPEbuNEUNvdotmT63zzGtMy1nEAGFGJCSGrEnRFY9vKEtxoE2tygYNoRWnv57QvA5LG",
  "key20": "3zXh64u8gJnhLfwrtqpnjmM74SJ1S2jgAU4E3tdxWg8QUkFS9UJWReyuxvJ1ReyqtxV9DfK2Q6a9YfrwN18dneZy",
  "key21": "nfJV96eADEJQSeksL5ihLiePyGrU1h1UF2E1crdhECSakf5A5SqaedwCzVLn1T68ZXfFo3Ayw9Sxvtsd7t5d5Ja",
  "key22": "4qhrZ2VQ9KrNmzmTxGHreFXB1HLfWkuogh5zWmVpASB3sV1CfwvNnPvc4zQT5ffvpXUXesENuuZaZY4sr1QyNTF9",
  "key23": "aWzaqfZTQ9fw9feMZyk2A8q4P9P7WqAcw4T3kET54EjKRUbkKrDMWyfALzNQUxidxNUdhmbNX5W2ZyA4dgfAdaq",
  "key24": "5r8WaDqHRYNT7psHypBUtMQT1BnxnL5uTqqW5aanKEFeqSrgPe3KehLSgmfN5GRwDbXp8fctNUbgimzQgasVAjKM",
  "key25": "66mB3XXJY5EVXcWraZWYN52GUVRiUD4C6Nz2EY9rrniRWqdcpEatRwz1YwRApA4tATGwnCMQkyUasMM2eFeXECu6",
  "key26": "63DfX3nALonA6niS4gERkLraxtdcNt2tFY7i6TuVom58R1iUGj8fpZu6L9BRUC5YQmRLK2jdozEbfrUtksSnhc3p",
  "key27": "cJWyZHhwqn6GKYbqrkgumU24cXanm19KGuf5cM47xg11xs1ePbY1tRdJrwS3jJyT94dVHrieuoKL42EqUjwuu5f",
  "key28": "3krdVF8uPtUFnipy64UTPF57ANEFsHNvTNYnERjX2qXoqrRE6pCRQ7a7QvPiXMGa9yE4637dtpiNfBjGAnb3U6Fr",
  "key29": "3u6Sv1K8oAJA5unSGDv1bf68y8H89sXHNBKYHQq2KTLNpP6T8WYpCuMM2dUQSsPShWK2iMCDzuH8wtCZYUfYgdFA",
  "key30": "5RagM2jSgh1z1yq5ZWkhufKKY6qmMsgR2KVYUQ5MrTY6gjPSyxiTQcKzjthcXJWhhJKzJmoAd1LDcCFWBMJYAcs6",
  "key31": "4QeJ7phXFg16FBMqNr9Aug8xyjrksvrkhk2dRbfsyi3bPjpbgrxE8G3gNuyDb3iZkfgzyYMPSwhm6biBxZQ3Gvt5",
  "key32": "3rD42MB2Vqsui5Agno7tesVzhsWubcZCNMTmoYnF9cmiy7dxz9bavDcj3dn71Vcw4dtd29iQoM8kSWDFmAQ53NPM",
  "key33": "2RimCznmD5Se9QUzDp7rNvcqz7WZUYj5zAQ1iTRNnhxKxK1DBkPjATcattFMxhNo8g9hACkuCzKX8TDqrphPZ2TD",
  "key34": "NvJaSzHfsLjxBZeR82JTuZQNMHTBK7WLriJHiGpGXj1ArfC9wzB85iKQwNfaoTaFpPeTvHskxAjbvQVWMRaRiDv",
  "key35": "ZF9vfvvw85H5nz2WWetBiMtfQ2rc1NpU13nf21CpaL1P1c4vjGNPoMXQzjQpAWC3cPomjysy6yAGN5XAmDXkDYi",
  "key36": "5kwkHfU5YWYaxu7d8QUqZHSt8daVMZJRs5pT2Hya1fenJCTjYD98tN7rgNhrhCvRxSKP2Kk5vZG2hkA7Vq7YASj3",
  "key37": "V8sTAFrSryKR92QGZ2jRKqf7H1cBsdqeYSXK5xrB8TrhbWwq1WvUa67zANGYVE1zkuUjBVJAHPK9oPJcwNe7orL",
  "key38": "434h2V4XcMHNcfaBvvSunHvsa1M5eCrAFFU8Q7ym9VSTxVGRXed2HSMe2hSvrmLvpWtxk5WoK1WAD8L2dEba4S5Z"
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
