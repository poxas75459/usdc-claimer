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
    "5i3W5RgaBHtpXQn73GB6w398hgrkB3C2yGy3vwENg54qJx59aRSiDsafzYdJuZLSQQUxFLE6A46z5KxfLiKjA1gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uc8iiGDSCaRvWz9bbaBWo5vGuncqznz2RmP7Rtruc8psFuEeBdH53oTDicrTdxwB7JnXNJuf2EPHwvbmsowAook",
  "key1": "5ehbYgXgNNpjRVFAAuviqoJr2SeRsHiT8duYJCUj6GzDLbudT7S2Jf1mWSzVLgFqXdKZkxHKmAnwNQBd2Aha1gX1",
  "key2": "62aa6WG78EuD2Renb3H3XpoNerQkz29y2Xj2PVQrumpb91rDoPKNErCiFG7bQT35YiXM9uqXmDq2yEMY5xsoTHbC",
  "key3": "2ZYEMDfv8jNsC6udJtxatoS8Y7ByNVYDAvvc31DcVgCyXVmbjbT2KyXAfPwPBFpbqyRu2QnPb8NhDST2HDbcmaT2",
  "key4": "Yxvfe6VhF43N7TbuYbbpdxrC5nrFCxu7Ss4ULNkBFdPpfadZ6JijGVdRAtdpNJJpFoSbmxP59dcea1oixRByMnK",
  "key5": "2gQz4uw2fpzWGKQSK9KXUyPupmDQt4QrGdAzqyT6zqpGjczpYSYvs7R4Djo5ivkidLZVxfrec32z31ZZ8Ymkfv24",
  "key6": "2aLDvoBMRebcgfjBKdaSwuUfLvJTjGWNYU52waFNmZ1FG99V1yLLPc2EYTLexHFRbKGw8PcviVxthdPLtVp6tRua",
  "key7": "2cJHPtswGXW3E6uunrBhCdRaFNzfP2mpmQVmRJ8JGwqn7df53tBSARfmtCCSjQ31BjApSTGThrTJrU7jZC9dfhjd",
  "key8": "4Ca6GPydvzGJ2GpUozh5KMNLsRcZAAoa17ajU27W9Ce78E7xKDcZUeErtTMsLV7uVqk4tSAtfJZiuqQXcGXUogcA",
  "key9": "3krkYHiRNLg3smyqQRfm8cDahStfZ45cvzDpPo5ss2t5ARUAN521GBuUJGrMH2LPcavRmiafd77KNMA9hSuK1qSF",
  "key10": "3TVMxBgRuXPtxR1Qw1WqtwKFaMPeVHf9cUUtPgbqA8ZXqYqVf632DCpidXeLu7De9VMnabueexcZ41ZxZQkmB5X4",
  "key11": "43jAhQZhae2q84CMpZ1L2ByXzBUL3r6Ue6wFKqTwktBF6m7dbR7oPwmz6CRLE4HSH2WpYUgy9NcCXDq8hLNNPRnz",
  "key12": "3H2hxrnUBrSXYxaxVncVLhM99t5jBVxZ8qK9zPZKVbDwmjp3eNPn3Jo61nckko3TyQ8NSVVVPiQmYzgStWieCJEa",
  "key13": "34whnJ9rJq8uVpemqsk6GE7g6MHHrBmDbahpZRQ9QLtz3Uh4DLP86hJ97cpA7TX9DkLXXdEXEiXcAhZQDfrGNTsw",
  "key14": "21uNQ6axNJ221paXB5QZ4ZwLdmgnBbMRT1X6PPQZVLo8G4FdQ23Lfds5Zhm2VSJsVb2A4jhSUjUz3vsLEns32ia4",
  "key15": "4evgg5M3nHsuHnUtJrm2emU5XwNayrvsZKridkvMQL43whCdTTPWnyccJ8Aia4pfH963yaMpFFxLa3tJqgL89szB",
  "key16": "3tfEAwuMbjArQZLMwSKjTotAmD29bFXkPTHtemuniY8PBNcVrV7eiSbrFdvH9sizEph5whwGf1xoWPPdQc8Cezwu",
  "key17": "5wFyz7gkDfbf5fVbfQFB98eiNYZpmeKanKVZJvG5YpEbN7SWwC95LgL4q8ZDL3fGHPmGJ8afaX8dWsvmk1EnBrRR",
  "key18": "57rSXdqKHsYUzeLKNTikfm67UeFMPVR7QHpvKC4X3RsMq4PCft4nZt66koVjPzmg2vbCimSCUTBLF1TWGT11tM8y",
  "key19": "AcqBgHy4RnpCiZJZF9N23cMrkhygNomez6nDruNSnNEspy6yEKXJC6atHdVmEHyXXKKNzWbhyay7pmdpgPmCRja",
  "key20": "5mnEQoXynTQ4yKqUV3Aw2Kjeupxjnq9v8DVs66gEyiLSvshyuvAMLY4F5Xe3AUXpVZ1GGWfxz8kbHdqnqj2tVRar",
  "key21": "yK35YNbor1Ep8wE4ohdJaAzHB5cj6Qk276WqsBUQZNBaAgc5eFNqHXRyUNeeQMovTjEYhihaLPqen6QJL2LnHQz",
  "key22": "3cgwzyvS5r6i9RBiFU6CRmMns6dpyNvSxqXY8w5TJSBzAmufAT3bKVPrSKUWE1eN5EoAQkPKcCr4e32XgvyUbAtR",
  "key23": "5nyHVyEjSpFWUrDz5Tw9eYwfZybtAG8oS3JunZAznSvrskBWowUN3iPzhkYbzX1zerL2wZEXeLFcbPMWwykD8s1X",
  "key24": "b6uxnf8ufXjBWVPdTWQGqfZBpizjgPbh6h5YQAeHZ8WXuR8iVMmNYvFNKoN3AypTRLvx6eEbPwuHxNKbGth7H9e",
  "key25": "62ArBmNmf2TnfvGWYPb8ggzeYdfKGKVewB53UMQ5Vtih88P1WMuS7qxvvPnyVF6AnyseiHrmSSXbYJqmFfZyUCo",
  "key26": "3a1c61JryrrHMqLxHd7PyRvZv6DSB8eti1pdgkhrjk4df3kumaQSkLkaiREMAVcqvbjhCYAx7JfuT8ZGCBSp3M1X",
  "key27": "2Gdj38FaytWWvNTzaR8DA91uJtQAuftQDVCQokibhPFNvYvePHo5344v3ckDiEEjrgdTFK9CbJcUPbzRtRPdrwPv",
  "key28": "51NpZLDoZzHKBms3QPKugoHEWeaGdcJS2hmNUQPVGwLWyVXvnjtAPe45sdktstod6rkAyUFQTA9uNVhcGZd1JHom",
  "key29": "2AjxCuUBCFu78HWtLGn5vX3SVDdBpajdQ2otfSX1mduJGEsSVKvh3LtVuM1eVQRw7iS9c6zBQkgwdppPuQjxuRMa",
  "key30": "4wNZpjod83eXnpoG9CFNdHYEVN1RaXmgktazqK4hgv7rRGhZ82CX8JemiY5DAcrmW4dHNp3nnCWQxt9AVsUMN1ru",
  "key31": "2QNrLNDLcokUe7prAEtjnQK5c3zkZ8os9pBi6mmQdCqH6Gsisc87WEbd7F8gdsqRrgkabGEZ6ntXD7wDLxVzZWpQ",
  "key32": "3MxvFiDEUHjBJz7mks7rMfjAvyRWJqEcXd4UZYnTKhyAGC1TqhTg2fGKKk4sp9ziV7MVvrMpGNQN8qpPvstSxCbZ",
  "key33": "4bDVQUxgYK4Sf85P74dhVfgRajNamRgb4W6PR2hXoE1iCr9CFWaCoLfPyZrRLnf28HfMtf6JULFJiWPhGxtyHEKn",
  "key34": "2QqVTZKy5JxB1P7zwjr2DJoXf42seMURjfESnNxUH46DZRj43dWiCGaM5nQ7DPtnYXNbomsLc98AJDS79EjP14P5",
  "key35": "FEZFmRQBdkC154xmLLjYykKghbDKn6fpC3Gch7e8xdR4hjnxoiU4uXpoomeY8Ep6rTvmr7T9gZTwyzUhnhbz7sz",
  "key36": "5o9r3mJocyhkN7XrS9C7j5V4XxvmmXkXrmVWKjd9Q1prCPZEoj9rBq7oAM8pQN877NagU9yc8WzvKcsM3xhR5XxT",
  "key37": "2RTXB2e1L4zNznBbeLyAfsCr1WvZET9qpUP2eKePmrBE1NWdMZnPrxhFC6PPGHE7ewzp991GhVaB4c8v1h1zCAY2",
  "key38": "3JUFt2cpTeWQhL8CR1ttTGWQnEYwXPtLashuiBjqFBMZEPaAdopy8R5L6w6Cpg8aS7LMan1b17Zeob9iNpvJx3CZ",
  "key39": "2EEGdBXNJiKAS2uaHkj4Qw7evPPSwgCqrvXJktLWkhLrj73r7Sec9vLQFamRG9BkmicT1qhouC2GVZqnUkRTkqQx",
  "key40": "2eDXhaKhoRe9ST6LpMtTbaBCxWUyPJGGWoNiTDrQKuv3WdXzvCmoALhAEb4outYygwhV2bHnmfGY5abx6ASUwvKy",
  "key41": "a57cAA4f5VxmXnUnH7EbWAvPnihiC7xwJ2YNecGkNJpmCU2DLXvtajZScJ38fhqgEWGsuY3Nv4hJEXjr5Rg1VY7",
  "key42": "5NZu9WjkygJbPnwByEx78XXew1HsJrDXxuu7SUZxPDa5pDpuUdup3q1ku9gTCpFWTgSqiFJ434TARaRA71PK3bqo",
  "key43": "4Wa92vCg5DJfpFx6eEgqdswo7oPoDSvXvTNPsJSYNXnX2wKgfDi3rkh3iraRrkyJUX8e5Yfsi15uTeXZVPYAF5EC",
  "key44": "4iuD1YFMDDmZyemQsCGPS82G6cj3N1TZXvXn7MWeVngHfvUp83MrHZGf2gns9RPDMP1weqif3gwDxaw5Nd12pY7d",
  "key45": "327zvMLiXDACrKWgF3R6EpTmoxnw9JgkPMVST6T6nGDUmbC5PQrLvfKrMarWSGpwfVxbAJ29dNuurTVaoPrdz5nq",
  "key46": "6ubXycxG5UxBEFxESZHBmtGojLhH4gTTw7SvfCC84QeUT6qw34Z4kXsUnDXcf8iSuDWtnKFq1RWxFUXzM8pyFjo",
  "key47": "S9UdqEAuHdSu45qejvAL8EqyedwPLh8XDRWpVYEABvc4nua7HD9SHiSBNPW5dp8vKzgkRjgKhudpfLWDTqKAmxt"
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
