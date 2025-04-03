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
    "3rj6uNVXkEKe4AUeFfksRkvkWkJgCXVHkGFg3M3TpAXMQ45NN4F4d6hjS8aZBmkdPbf612XGjsc49y1GxqsNVvLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63eJ9zzEphU9MEGm33uTVV6LtSWCvxw5vrQLEqK3jcLDuukgR2nrG3YTvrTx6dgmXAHcgCGzTgmzh1zouyFQh9Jv",
  "key1": "Uxf6u7aiGRQ4PxYryPosQXmRSGf9MMfnYuvJfoKFxdSYNSLWqyNud4fMj5hM6njbZYbB3o6P1roFcbMNFpdeF1W",
  "key2": "2C1x5pwwjSG5c4ced9UcXNRVMxPjNHYr6FKX2XbErTADPNH9bPVAmMT6WFugqS1z24kduCLGnsPPt52KxuNoTzic",
  "key3": "4kWf7Mi3qEdKDAJTkbXGpHNw6DkX15iyrVE2PGYSo1arSaK4kXsesKJYomyVrit2dVZxnBmMAjWcGSepcEgNC6ha",
  "key4": "74gpEp5FjGcrjMk7HpTNKhpaHzLgzL8xJ19D1xWZUfc4BAd4Ru7N2sjth7FSymsWPizzHXvfPt5gbp8B3yRovJw",
  "key5": "2H7LDNuFxaPwrZpNuft8ghKxAw79iKwAguewgW8eAejVW18MLxu6x9jCGQjonkjdmGUczJUgHQXhRNH89ziUYv9m",
  "key6": "vCgfx9z2L9F3WVUnkV3AscSmHeV4Jd6rVVZrcKJe9A3HMdV9wEg4zNmAb8P35B8hCLQ18SsTPMsyoxGmXBVaVmV",
  "key7": "2RKuRutUFCUgS6SZ5B9c2dENxcqugyy2YMLge3s2QyGVN2nxpvYudmhKkhtZPL5R6YqgzP3e9d8j3k2AKhmpMmQY",
  "key8": "4MTKKHmtcxJqjSqqwfwdMM21gT4ZJKscKGeecXS5Whcr4haxWHdNJGbmDDWEN9ftHYP7AfE7p58fqBNYkouCxuPr",
  "key9": "4k3vpouv9fTDQG2jYkUk65xuHi2gpC5JDn8bBGVJLguLARTseFPpLKWvNZboua9ZSmwoEL6hLoPgJ3Mu4GGiUeMA",
  "key10": "pc54Vs5p1fXNTLvp6j9QdWLRonZ3ngHp36ER5Z47yHeNi6miV1PwyUqQjcfWvqHQ4zq6kBJdQq87c7p9BGQq9h3",
  "key11": "3ELkmEpvuDEkRYAEDFmsE5Ac2qAYyS5mqfWPbc1o5mERZn4WMexDHFPuErv3U26PSqDxKgid126yUoftGk9yCx1J",
  "key12": "55SBFxSd226CYLp8Y6zZQ26YJojFAMX9cZhuH2eKeVXMA3MAvvs954JAXty8V7bY9SVuzjXQPQK9xN6U584LGNzF",
  "key13": "4JVDdBNhmhqmtz9GcFzDfcbkCix54kCBNxdzago1VzwsRyjBtfTc5JBcGwFDkD8juE4CGKeULN78A9hgtxqwZK4J",
  "key14": "5AzoWfYxjVr9Xn6FSdfvu7u24zgVkaHXcfpz11GuFru6ZqGVJf141pXz57sNac7ZhHfxvRYTXp6JZEENCvbYsqA6",
  "key15": "3bUSAHLDSFsbcWwtngAf2r3e7ysjrun5LPBqtoLd8Ckm463FSpzcrBc3zk1RxzHmxEaUaL3XpnkubYkEtTrNphaS",
  "key16": "28M9XC25uyMHvhXDsJLueV9WNRYJED6WFNnnMn89JTvykQemxsmFk51h86MKQ2qaKEDSREdw3LdxNbzCGXsdQawz",
  "key17": "4vpYDgrzc2wrvyzCfE7zSW2Agg1kD8bBM5uUxVGxi6QEPuU3GWTAZ7E1TCbg4GPdbepYSc6DVSUJQNpcPYTJfam7",
  "key18": "56cnALftLXjqp7ceeawAF4BPZDhUhnBCzrmCt2gXnsyRXScJfeGaMKKzpfWTA4DndErk2UZRx6oDEz5ouokVacGj",
  "key19": "4UnHkg11mwtNnPje34ruNxarwa9Cs4FP17UYCYCtrd5Y2jNVhE8jgwPgBL5hLa9HFDznM9sgdQkugiaVQAf5CAcV",
  "key20": "2jmxzgidpb2R48SNfmiNz2EH6LsRiT8FhHNP2hM1p7HaJMhMWHxsedszuSJZHpKid6kFB84TcT6Lrkx7cTtCbRtP",
  "key21": "2S4H1Z4nJ45ubcqAfCZu7BGuXD96JxjeL9Qgyvri1TAh2aBmjLnimpV5pdw8BPo4BEct5LjCef6NqG3ZU5wam3Sv",
  "key22": "2pjYdDGSvHUfBZbJAjDdUZyYRtSmT1p1qC6KRcvQrWpe85sxh8BTrR4L1HY3SPyEG8efB68FxX2QogJi1S5Kc2Cm",
  "key23": "25cnvYpyb4H6PNLnwsEjFt5AiDjJ1jmSWKdoVHTG8ApuudUYZr7cWGzGp56CuZU9P5GirePLF9fvqCh8Hg8ytJkD",
  "key24": "24Hs5oZXvHG1wKCD2e1eXkmqaKeCQLBsRGSm5rSNJf1ot9nJTKyhkodR7UqPie6wF67YBsvzELFejrTkzdPZKeUs",
  "key25": "gG9vrceqHvuLgqzSMteiYUz18zA3ZpdeTDKqoiNcHM3n1fgtvASzPoi1HU29FbtWeLTNVnq3hKkfpyKHSxQF2tu",
  "key26": "4mMU24KNiAco7XU65g39WiorcgXmaVKj74AtYjtWbCF3iQ7guVM9JpA1okNJ3qt78cJYGzryWgJEEHbY4HNy637u",
  "key27": "x5cJC2kqCRfM18RaSBvU4DbAEwKgocKYoopyTGoptq96mDPBkWJujtxZztGuwq94UuWeohD6Ky325T1pmWWCXsK",
  "key28": "EaVt6yxAcfpjbfWf7DWG2vHwAzCjx5gy4GpVhXf4nyLN3TAGTFcfH2MyJPAaGKvx2aTR6tnELchLUkzjxjAWdWT",
  "key29": "3Bju7SHdKtDWB2y5HwdYKUDPZNNmnaoMNmrD4qmtqKyzZug2cqwDZZMzv2w21YquuR9svVUHtpvjYt1AsQ4HMCkm",
  "key30": "3Ryf7tbhUdJAukGy8SVUcJBHAUztGLacNjJCagcMU5baWyVNHF8PRnk6psAG2595cDKfF7u7hk8ikDjqoM8umrJA",
  "key31": "LtMMiaLh4XQeW2W6SLK48ULoN9xLk66QxMoKZFq1feqfTV84rPeBC5jhVWcb3Sp471aXTKCAw4m39isr9EcyEYY",
  "key32": "Ft9MLGVQ2zD7NtbEJy635nKeojdMCSBaSP64q4QcPPZtCrS9WBeDggEcMrbwRPHbf12DrP7Caa9TBqbM87pakuZ",
  "key33": "5tF6dpQW1EyMgsboSt56eGwhqz2WKxSUcymwNdqmLrwnUBAqb1P51koGc17ibbqSMoXJqfZMbCD4zqGToSSJewk9",
  "key34": "42HTgNaxiwNZ7cViBtCGJ7CgeCZRktEYuPs2HJuBSLAcp3pApyC6GPufjXXnsyfK7TS4gMm47SUhS9Mrik9DVJ5h"
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
