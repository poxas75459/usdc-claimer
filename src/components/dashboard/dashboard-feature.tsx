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
    "3uopb157gSV3pnfaxU8ma3bRNc3eFGi5rdJHLM9a7xd3Gb1YjkqCbBWGA1NmvLoySoVw29LHJrmTXCtNsvn67Brq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3e9rUBSuCTZBYQYseaV2TJec6ksQJPiLTRxQSRNeKUmZdcUm5sBFABPH28U4tSpHKevmTvssA74pfWZYb9vnNa",
  "key1": "2nNW5Y4CLMphppLHgRC1Rod7D9bQQPk1PBCtcTimR4CttV6BZACudUMGBs68hBSaEFFpaQWVMcPNN7WNeH8zhMB7",
  "key2": "4jzDARQYrDnRf7JcGhh7A7SEjBXNsAHKSbo4jnGTVgYCn1w83Se7tyQ51DxBgaLDnMrrHhwDL6bUFAyUJ7FQLan8",
  "key3": "2h7xam6jJb5BYvL1KdhtCemYNKNq4nASb3jkCH4ZQccFZwGXd7XhqP4UaDgoqmsMJArfqWGz8zRZAxHHdufNJmYq",
  "key4": "2PDWk4vbdA9p2gmQ3pY4tukF5ztVL4QUc3KwQg8ZLtmeWGaPqGcMnpN3o9x8sjeG8SARp7guEKBXebPiKTUMKNpc",
  "key5": "5EswdUci877CsSXijD2uGxCYsRYFuEzVLTd4snRoHs9UNKoE4v7FZTmtPnVrRybeemcCDNxDjay8yRfjV9eoSVWY",
  "key6": "qPkWEoXxQyWFw9WcDzJ1mhN4jei84zsmxb2rzkpmQEAsX25euYKzxECGQFwnZw2YGP3LepeEyoXDWygEqjkK3DQ",
  "key7": "2LkguC3f2QLwCjXp5tptCJ5SSkVZmxobYfzzas4N3aiPgB8CmqD7oJ3wQ5DntCGU79zsY6iuuaJgxsKFvBrQ483T",
  "key8": "4TvUqiHzxSmeFuSHjqXk3Gm8WDcxpgEgRheyxyJYpWbpozukzcz1c8BuvEb3VAYGW6CJuNRDsG1E3xEbFijis5no",
  "key9": "2XgyCCijtgtoh7ttqcFT76SmoEFjSkkQHBMmqLhuoavwwm4bkYc2KqhotNBfZucKZSkmQM8A9XPRrwyekou3CuWj",
  "key10": "2Xf2e5hUqYJkaBfrka2L2nhs7BZz4HjejPnV3eqpE2u9beyP9zqStaDuTcPNhGJWnvx9huPjnf7trfQaYsENtg5k",
  "key11": "4mwFnw9nqpRpUZDHKCXEEsxvHBS3hEsB6oBk3MonakfyNeQux8PCJ28zkfmkkpuyEfu5sswJisnRsqa5wKfdR2cv",
  "key12": "5bZomfbbiQexBrF4kBTUqsUndNx57QrWS43FLGwPJdCWAq8zdoeLYQFEGcLRgYEjGFtX2qfG8TV7TBXaCSXejsRc",
  "key13": "493b9eU7jAGaWAJyghibfLqz4CqJZ6M1AnPEB2jTvhvX3nQhm3VepcGZAvGfugEtWS4fW3UzmFfswwohtYMgC1hH",
  "key14": "3Hy3rmLnKtC3ngYmekKw2r2HPREFHk7Ndx5JSAiXU2HJniML8SnTconR5TMdApncoCcUHnbJSrnPZGajxSUee8gS",
  "key15": "9nWcjxBXiWv3moNjDDfwZPVamhYef2AAXA7h6j8qrVZsgNnAk6AwjMXiyG9XfCourwNDpQq6BS7UEA1Mhu4jVmo",
  "key16": "4249dG4o2T5BYUth9JogYkUT9kQRT1QKdRVB8MthWFXtaCQXq2kr8Yxt5razqjsREe9PSRdd6tPhCuR7XeRRH2h3",
  "key17": "4VNQZCk14tdDL9FEMGoT6EwA72m5YHTRTJemvTwCpsjcKNk7XLEztVDjHD3RDAJtRJphA7PTw3KxNjZwfRqK8HLU",
  "key18": "2XCL4EonCwmqp2u9iuAhUx9fTSHerJtnRSc2iE8DUrkfQNmeaVMipFCHjLZWLBzuwvF6WiuxthM3wRdRocFXQoWP",
  "key19": "LjEDgKXv7noP8SaNzVq6azUEt7eoUrXWP9nxTGWnrtkCmup4z1bjbGw18B5WG7b3Mzfa8o8Nh1KdeBjXV2eCb6a",
  "key20": "TV85SUrcjvumNfDxmp4pQjk6scwdgPnwBr3KFzWVnoPLhfGpyCGwoRP1VWs7it6wwEns6TtpLd4VU8DXfuud5XP",
  "key21": "5tHwgNSy8bye1m7MjGHKEsfaUPZM5FNakKQQq7rLhX7aJncfKsED1Z2VmmsZapuFGU7aVSYoyQ8NV529GR1TUGp7",
  "key22": "4pQioL5KGFgDYH1FakVmudrX8kk5AribHKXYkCWWnWEn9vpt2gJcjpNqoxq2ymP1Gia6DwL5oy4usWTj5etMMaHW",
  "key23": "55huEHGrXiDFDRpDihwTHgQy1boTgGM3RfDo1V1EowwA7PFiXtL3XotUaByMsQu3kGt7tbyqX7PCXA2LAZCRZBUe",
  "key24": "383qKtNkB4Krfyzg7h38PBcoeZi4SBeccYY316fbDzCXx3WsAdt96ACHeftPdqXP2R7M2xSG8gKQD9ZEt5HRZRVc",
  "key25": "67Em6ciJXPM7J8n4KrsorvDqX4GDJxPpgsoQhbE6RsLnC7Y4LsFBmLbRqvR4hsLKXUdHj1y7qv2rTdfmMoGUr5HD",
  "key26": "3L1PABxZpBr5LWQzTxTFmMdUEoRABE5tBqvxXepZ4ne2Rt6WED8ztnor9fRroo3ceAAqAeqFtWSZwtqRFZ6KCVxb",
  "key27": "2NUvEMoLnmbRYwioCpvHsqAgxU9uH81dFzfU1CCmjixp3k8jzZirXth2PDSmyFid3enSLW1ADWA2PPBZ82Bs9A1f",
  "key28": "2MYEQpcTTcgZD1M6dtQ8RmYnMPx2QTcj3qy5jzkjNkcXMixba3bVJvHMozANnBukQf8YmJWkVzFTS4yQ4WbAWgKa",
  "key29": "3Q4N1J6dPRRjETJ5p28zLYFhLuUi7cDdRMje5JjBpo4qGYkbjxf2sReKvydD461H7dC1DWNppxqF1wsKUWyskEiV",
  "key30": "5sZxMZnitgWagdTA86c6J5NA24KP71CcYk2D54gpbuDXcE28LSFPdcKgoQduKWjB6uCzs1sjrCFwUEzFfk8rSWpz",
  "key31": "YDXXRFfTBN547Ee77g27JM3SyxZF2SPkp1gBRt97pgUSrjUwNR9mLC1oNRwayJErjbWCMg8mZ8eQ8GPxfKHeJFN",
  "key32": "2LW9RSHeL6ov5DJ5z6bHP2CKVx8r1Nc3L8CQLvxS7efAsBuqUSk2oPrn1ysmJFiydnQSg5LGC91Eb2s1qBWRxjYy",
  "key33": "5L2F8T7y3c51XfNrCvCJhmgK3SmGjPe3ZocCsKR9JymW5bbtnjBzdF4zMCoBAWHxxNphQkpsBHg8o6h6zjdDSrY1",
  "key34": "4wWwHL2qpsd9vAQdPcpxB8DJwDWDo5ezbaxt1dvidcp14njsTN6fhzoRJVL6ZSuGcTkJX6Ewi84krBLrvtr43Zgr",
  "key35": "4rn9k9wDCa2bYRmr8MTcyDK5KthUc9QKvM62AgsDdkjnPpUS451JJuFAwxRSKQyD3AxJ2mkGNAbb22wZTHkFWzFs",
  "key36": "4Ve4RKauCYRtGUwou63RZWo4W8FhsbJbfdHiKyYz3rfQD5JTLU5h57o71ywxsGL2v2Pw4CoQfuYDULNKcLaEeCfn",
  "key37": "4zpqfavbxZvK8jgef7pXvpUanzzxX86EcPyx9GTNB85GSX697PrfkCeKRoEdGZcJgdEtbDvT3LEbNptngw3wyX6a",
  "key38": "5TTcyaTQ6ENc1zX4EvbuMzvHzkatXTNxt7id3feCsgCCdujwtuLtTSDBLK74DWF7de4XY7X9yc7H49WGrn1DmsZg",
  "key39": "2pEMTwZSFUL8Qi5cVnyndcbs3LXmBgLd17TbnhckbzmSSZUCYTca7yg8y4HJNXnNdsbCJsedXadurEeBiHcgfKEd",
  "key40": "5v1sF49yJdngMFZmpC17EudHnAZSJC3i1w7H4wKfDARd4qkprHvLyXyHKUujbCb2K9HG3rt52AkbF7676JySgRwQ"
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
