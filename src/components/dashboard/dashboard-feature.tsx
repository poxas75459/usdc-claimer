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
    "4oL4Dk1PSPk9jBW93PST63Sg7Sm2JuPtiUihfiVPKAL2rUgCi675KJ4zHmeE12YQDnAvGSMiAmAruxkQz5bQ9MuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCZzPbi8MhY5f8saxCdjKaPXF5bxJeWmpd56P6LXMYaBePCXxszbeiQyC2XWWV9wGN4oCxNn8PbEh4pGAzYRiy8",
  "key1": "TAV22ijFfdXMjU6sVrqTvEWQHzSwJ1fnAaa6hTVSL9V33DohPwJWfF2w3HXGuJqJTE5PpYoW3GDFmhWXSDMLoLE",
  "key2": "48e3SKBxCZsbHARUYRAVudgZTGBKfJHiBoK6DjfWwCn4nr3Rcg7iZdZ9NcmBRBb4gCkwnZiXSFZM1mJvZvHmwASC",
  "key3": "seZXuACquHdrscRDwWKUYQNCsdn1cvRVCxu9imtcZ3kEDNSE55uWoeRprREbpNX8MT25wBb4v9wgbvvq3buzWos",
  "key4": "2bwSbwT1jwgRDG2DFboxhjoQpX5kRUqyrzeXiuvyka2GrthYfPDQZbi4UcAJGfS45tN46dEEQES4f6K2BcsAoko5",
  "key5": "2zgZrf6BUm8qNyJE13Z4xbmtiEpZnitNTPQr9YoWNBKPyyZm1xw2aAVMhK4FaXKi4hpuLFBVrnY8zszSA4NRXVcV",
  "key6": "5W7AYmxkio58GTnHGGDmZukszUH98CKfdbWCKUPZMaudEio1CxX9Uo8dnMVWeBvYRRdU29q48DBiG1XMusnGHvNL",
  "key7": "4E4pnyb2r7K7mDNq7pVwedpvKuJt2PVwUffbXHiCRT6vMP1PNvwtFB3y52DFWR9KwwWintvpMov2vYBV5Wm74cGh",
  "key8": "5JRwBRppeTfimN4WJdcTVsvD1t9hKJfk4v1CaXz4hBqfhUcQFw3e9E5DCEoTcJtiLp25soyJXZmckThA9E389rVs",
  "key9": "zuGFc17YqddA2gR7EGL17Kn18GXDhArBufRG1kGWxjEJu5zecf9w5DrMXRrj1YpKeqLAq3bbD3m8M54NaiQCTqZ",
  "key10": "5WHD9zyx5UyWuCoEhvSH7fxEg51LoV5vBajw3KXSCjvEK32m4Ua6fkm6gqqKybAfbrJ8uDnLZyHZQZY7xtnRtiG6",
  "key11": "3rnQYyGXrfb68ukVDjXdKD2tLBUye8drWdCtZcnbpHH7nKhw3vELWnJhnFpeP9haVMgwncdwCWjoKmk7RVzcWFpi",
  "key12": "4BW3aq4Gu1njxkt8uf9SmQFcKYGT3t91CgQTxi6pp3zCfog2z46fQeQ27kpb4zutJ1pi1TFBBdLgh3eQATpCRZUs",
  "key13": "3SzXW4Tp4JpAC11vsoyLWtJsBBSZYY9f1YQisAu81cbqqZVMstQ79TVjqKx54P4KP2Js3efQEUrGZbP34RT9YhYJ",
  "key14": "3Kj2fEx87Z1Em393LLPgRufWf8ig7hGwYusdJszfzVyPQ86nbfCuHQthz8MWGcrXG2YedwP88tjqXmYSonEoajB9",
  "key15": "2ecNHTegBK2LqqbmRNyKASBXhDXMm5oVveLGTxwGFovSZsAWzrkT2dbna6K6xeABPbkJRv5ydTGZEEnFoPd6zsPf",
  "key16": "cxumkQcG16qbnWxtTJHs9XTt2uiNg14X6UYuYxF3V3m83QCdgdNiJgZYyjawEnurvq2f7cL4GaSCM9QRBjK58qS",
  "key17": "22Xm5SZ65s5EDi2Rkm1o53gbFrSQWVovDkzsTPwp3sWaVvaGZktWSAsW9wK7FqwL97YV5Scj2RnVwfmL5P9PKdCv",
  "key18": "5mQFQSAzfPSaUefTumnJK6WwiTUBpuSZwZhruo651BESEJnAXLeEALDP11XsVRq5iJf8KwkGFDvb2vFMi3fc1JxU",
  "key19": "2rE2irNt54PJtSUaSXWehxbteyXHWJAwaMkBGAkdMecytHUq7MyjhCA52nP9k12rkSZkRfRj8at3WBXfbTNpV67M",
  "key20": "3EiUXTXMnJo2E5gi9X6gmk6rsexAjpTu6avvf46sBsdYup8yU2NBKtSZeXyScUk8secGjX2k2gLRtbhRjgqekueK",
  "key21": "65NJvB8Hg6zzmBc8ANn4fwi2BtV6NxrPkpz4zP8RLtpNgEwWZ5gDW7i1kPn57khMXCwhhZFQb2tpWkXRRX8uGDSh",
  "key22": "dN8MH3ia1hGZC1rjesAAZubpS7hP9vbyxoo9HbqmLo384toDDkx6FGRr5KqGjsFRJCQo2aYZT9TdKhVTudHWMAa",
  "key23": "gwQZi2rY8FgaUtm5pxvjwVaz2UiiQMjihhPqQoWH3drELnW8x9mY2xcq1YghvFQDL5h9Y561SZk7k2zHFEjoKV1",
  "key24": "3BvvFMkqkVoAY77g7kJvSUwDY6amqPucqFJ6Bt5KzYeEmrCbL17bFKhk1HaW4Z38Z5QGf1nFxUoGNEtpVKXBZgxx",
  "key25": "3HazRR2r2N4VdhRKerspbWSCZAUJ8h7cThSr9jSqdJN3MsB5sXRTgbm1G7EqB9srVMi1a2iga29PL9rHrSq5UN1Q",
  "key26": "5iEW8aav7eg6tfRFRBVKRjHN69ifBS46taNACLRXXD6g3r4cM8Z9MphbNS5WFciJU7KmmkxcfrJVxoGyi8E9TUc3",
  "key27": "51WeQJqax2fuBBqRUMmFBwJXm6yNK49CK9dxcoEDc8n2mDQxtKcFevLSTmV7ZyrbnGL8fBXsvHUYuT9QuTajPASM",
  "key28": "34uJVyvmYryBGXYkeTnvTMK93A8DgdKF57aUPC3qaTdKnw2iXvW2wYojBdpvbfgZ4P45kVUzxe93GXF57ZoaCk7Z",
  "key29": "5Enr3MRti3G9xexftPbPytjcqwSEm6meHuzbaFB88nTAABaZM5MTM9ACsuNaoBs77FMGu3EQm8r7epARoXhDBibG",
  "key30": "5TdC7GLduJ7CCTibMURKvuvtArwLP9YT1U5JN91hXx924RGjdkiVCkgxR4WDe3Qjd8tDgHtwykV9bsNBRFPwputc",
  "key31": "5L3b5F3qzUAjEuoxxzifh39nn1xjtupcCVzZktqXDNb6n6xPXtBHjLKCBzEHnfn5om6QKGCzNV1jH6PznQmKGAhU",
  "key32": "Ztb92MKp2QJLAavtUgMyvC8ev5EdwNNtmn77djXV3u2dbuwsYAjWksoZ22Sj3Eodm5h1TwhAFR9GsDhcuhw7LSb",
  "key33": "5irSpfa9UR9dwmSiLFo1qTcNy7NCmhFZqkEe6AryMoqojwRJLU3sfFZ15ubnPNZqaeSBusP4QG3WdPcRdZDdmg8y",
  "key34": "5S9H8vSBqK1JPCDKuKpJyueU35LzKsd2xcVRcz8qH6poLDYCt6nRcXMmcRsCPs81m2kqLw3x2uTwwSxGz4ThkQcy",
  "key35": "SRJzC3vET8xE8XfpmiUhmDJV9HccSEdDE7x7iVMcxKBDpLpc5SCHnBnMHbRjVPYCV4PSxkWPaUpQaU7bHyVegfK",
  "key36": "t3BezSDiiW2vyxMaT2E6ZHcmvC1KyRy76BAXRBWDJedukJNihxHvq4rC2pwv7SToNJZVJdSV9mk254k6Qz1x5kC",
  "key37": "3hLchWX5S2WX9n2tRNQ1s3Lb9PtLH6UrdVfg4JY4QzbAFXcGBLLQApqaEss19sfWYHht6jCyrsqwWxG4eter3sc",
  "key38": "4HT1WXnxjGvEP7QtZr5ut182nhaaSVLtPvLBdkhZiF1AaXby9mJFhoeq6JFgK39qJt6929BAox5TPu2xAjZPbf8C",
  "key39": "5Xs8qowyxBHBTdhYDMtgmM5RPuyDYtSJpBSnFEVFooKAzG32EZqAXv2Xsvf6afJQ5c13u3miGf6msGkFTZF5dZtu",
  "key40": "4YNvGhnDLsZSnXCPhgMirJ1NW5q7x3iB6m6ogEJQ8DFHzbsXNAMK3qRoJwyv77cN7wHzkHFqGERCqWTmJc6QJw7e",
  "key41": "572rGHiYWooeHqMyYX7QjofX1SE3Xq2aSNxWxGs3PHotEqj2CKbZGCyRDBigjjVZssqkRrg9em6LMVWsN4k45QSf",
  "key42": "VoR19eQMfqDwsp9GrAJpqwoRPx1wQyeh2j4E8vSuxr8P55YCSKEmFzToPFZYtvTyPVMy4oV3kJGoffjAmZSX7jP"
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
