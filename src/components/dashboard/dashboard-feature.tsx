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
    "2mLGpBB18AFdc3rKNeJxts8tng3mADZBFRHKixUeZgWgwf9bKEBR3aJvxaFeFMoP7uf11GjExDoaDFZawknf2V3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tvazwDB6ikR8DDosRW4hyKeaC6pnZjVmBXR61dcadEASipb9GasLYQxRtnS9u2mLFWgfoDkcjiQkLuDaRPRthp5",
  "key1": "2CVRJAdx6dy8vTiCjEX7F5ciX3di1tPiReJEP6qGoZTgWWvTRkWp3fE794MBpgKMD6yX8DBm9QPZNe4ztA6z3MKc",
  "key2": "5Y5tpNu2dVKN5FLtrUbjZNaoikB3z3zSfZtuzXeUZ1eukyQzm6zssVXe13sY8deJ3sskDBdJiaHcWQr8TaeddA4t",
  "key3": "5ViTT4kos2PaCfBvrT7b4A3dmfh1MbteKdUFYTZJ24srNbAR1GSaeEnYtSG7u5LYTmPEr46ZoZzvCxR7em93EizD",
  "key4": "29gg3aYmfhk7N4nvaMmkkFBaSXSVzJVHqaA9tjMZUjHoS1fnBRUKY2cHHSu9n3FSdaMY3XQBbvqykLnvTfmPhHmk",
  "key5": "2VoWbvZGw8Q1jdYtVWtkh8FGhiCroM7bgGdhqyn4smT3W1rj98fwYXDWZZsTj93Gs1KeK1pZFYX9YxyF6JKezXap",
  "key6": "4Sr3DcLp2Mdu8ZZjbQFcbQeCG9HDhHEKrHzmdMtDyxGydwW9eHKaRToF9cU1YLoU9jqon3W1S9VM6FrSVyag3QnM",
  "key7": "3kWg15cvz1UFHmTrRWMgsrHG44V9UsNLfV19etpj8sDPBFX3FBPW5hzYEKjoDMCzBSQ6bNLwi24yP18HauJcyoYe",
  "key8": "W2buXGqNLS7ZWSHnDoevMTCwrTdzBgAsHoj4htELMx7Kk5JVYkJMAJLUqPmX4G2QQv9aGJD1Y6H66VfC3Wpn56k",
  "key9": "64N1KtAzYEuigWf8ChH3q8cLeWHfgYvm5u3Moz6Pd7j1bvjPxMytM8cWAz1Q2xYJ9YDLTUGpG24oC3jfQ6eSXbfP",
  "key10": "5FFd3EmKx3Hi3KJwoQ6EkmAwBZu8N1rDmfSGZYts9QzFnkEvWvo3BM1vpuL46Pk3QAt8N5hR8b8Ea2RTTRFAaPDG",
  "key11": "uX6GH1kybTiAkZrKShGs4fQPY3HbFcRg1kVgScMua4DB5uToJFdRQvRTFtQFPYwz9stXSz81aECBFNM4xcqNa1h",
  "key12": "3uyDJ3ETBYeUrgbAbZcQBZo14GGQEUEwCwXTrMyqAAEm3boXMJDNVCSqtWJYEdiHXAZAyEwsuy5dtKVNFt1b8nW",
  "key13": "2yzpJetMqsygGGQgPmreq3sUhuj75QfA17gcNgTt4h6vjTDsoFXrZk9Q1qtouTZR4icU7UhW9A8aDwpNcYYmy29f",
  "key14": "h2VNzkPhLxLdkPp3qrp6ZJoQxUscfJf6fx9nVhJYqpTbiAf4mhsk4ThZJe3Kgc31FP43zp6bXTYgPCKWLKL4FQM",
  "key15": "4jdzx4DbvjKoWuU7Ytz7JP7b1Wb9FaN6wwMzqroUFYRnn3EChNjvNjErHwTM261qNP3HoaQkGsErN27wfXu7MZmf",
  "key16": "3Ac4bnTg6V4dXCuimP8t8MQi5PGhqX2hHXidzoyEhtdCzykJEo5s8ebEheGsRL3nZSCkCrLWa6MAKUKRg5ZQtYkf",
  "key17": "iHYuKEtDbrnZ2uoNCYtA9DtQTYZDhn6Bt7ZvEfsLsm2TmEgM1q4droKYjaw4hBSaZAHVw2L3gWnrWE4k1uLzKx2",
  "key18": "na2HBymoLCefKKRTVWLjESfb9SRPiYa1Fuo7LghwFmXRumXZMXf46vGSNnCfLADEZnKnBfSEcLAqzxnhXZBwtdS",
  "key19": "2ksiwkm74NS43rRY8E7UcdFNKyK3DHC94pi1RVtuN9Ko5ARFo5ZRo2TTRQzQ71iEvsy5WrAo8iYyXU61UNVPGFbE",
  "key20": "2fsAXvZFdtSsaDeRUNv8QzHga9vqjdVqUCZT1BoKTLHKCoK4UoegV9wgCMyhmcde8Na8cJobR2VQQA9swjE5n4Kx",
  "key21": "hDdrLwYMsGSHkEkhjkDvSwNE4ymh6jTUEMYUwYxUA9jmhx59hCvjWM8H5vDP2nGDYyHEn1TTKFgHkuadAg61wBM",
  "key22": "2c8hKKeV5MN9xVbvNQQwJmPq8ZDV6kt6Cfir8Uj8DvH7PPZda1cRdCUFNNQFSQMMpQrRrmoJDnbjvyyDx1dH5ZkW",
  "key23": "2gNb8z8gqCsGNHgtL6xZYV7Y9rmbrCYD9JTRXA6iWivj74x4kRiRaDdjCj4qzdHuXNSC8UuSZigsrZKEFhU8bbgx",
  "key24": "4z6JRbaxwVpwavg88uxWNPV1mdsiJcWonwbkPu7QfEo48NsY4iaSGjqrPjqyHHdKYr6QmBBYqqqehQnRzBALFmRR",
  "key25": "5veg3wsDmpKKnzV2RhaP1Uozo2gsgmrJ1yLajBsaot6nsj5gPK1FufvZzzvPwqnjHEC1dkNh1EfUD6M1CkaA3LPM",
  "key26": "5D9iCgm4pEKNrWbXXXRVrABRsJqAJovYLZmSHC9bCQfXkEgWJFWodcQGXHmG3V3cUdC8LvG7cexab2NebVvBZ7Ar",
  "key27": "28q4vyhFb53UPCZ7Cmnh4EMEXfKSVjoGjXvMjGg5WRbS3TSXT9r3qQNDZU79HW7Q2rDo8cab7mmq1TNe1xXD32wa",
  "key28": "3mFakhWVWUgmVsQdf5eRTtWCNpdrtrVBvDXdEBD7b4XQwAjZ746po8pfVjmoz1k6ane7h12VCZuE4ALv2rEM9aem",
  "key29": "2eHXZqZuwHp7A8Q6mUXCaMBk2mKHzvzeUmiEL1n9godjKfGQX9LCqV7cGQTsbbojLVzfRbzsAhJaV1M6wkbyDqpF",
  "key30": "2DYg8n5nxSxgJi59N7Dt7KYyoE5kYWNDzJ2yjgCzuFQ8tKuEfvLdVQqaVxPf8s3ZfJ3PuLVgW4RbtFrmagMtkYpi",
  "key31": "4BiQXfnLBGvhHNccqhCaZsBCpYjcguCTGzDtL6VfyniuXEw8oUKVH4YEFWPYGu7QpZMkfuBS9TTrmJkjJmeTKNFq",
  "key32": "TgoHi92cCNe8bFnRKdoXJj3oWkHCwK5WMnLgtFvGgFSXKk7rfvMLYek3CnJ6Su7fWtWJERcUH15FJcLQpVLFfUR",
  "key33": "52ZFk6ZA6NQ5FZsc8RYP3CBhfTxcEioiUSRj1ZPxHt1ZQaXRLhTwPkz7GV5HsFTPSUuXByVpJdb1FxtEMefeAQb5",
  "key34": "5RmwoDd4P19jySZetee3r2ShWubVQPNGvBcwPkaj1zJmu6Jb58TVE9GsnF3N3BV7tVQSZkijw2U2zKgT7xY9guyL",
  "key35": "4snk4ryhyZ2FxYo3oUJdYNi3cGdsDA4KYAjyeHHgbewSLmaemKwsvKKG5Lhb4hb3mBMbepdLkoFw7FZNVfDuswH6",
  "key36": "5cTYsJPkK4D9aAquCLAeKUeXYqKhjgPn3GVdymQngijfr2DBw5Nk2uoeeHHkn8fadpbEHhXbj6MUMFCvk7wv6GNP",
  "key37": "5E5c3N2Zw4fxiAhuPk3nciupEaNJ6g8J6SvUkJA67i4cUprnX8s4zfeMNqZSyE3Z2Dj6fXM37dfFactdoBpLyLr6",
  "key38": "2gJPqoyi8gg5sxwDKZZWNJ8RQjfGVDC3N3wGyNRD5dVmWzxNQL1dBrrooSnLcWDkWLPvVfBZEtMurJKuDJytJTm5",
  "key39": "339vnmbfhzrc6EqGgwcu5uRqGimjKWkVQXvtg4aShWWofPXCqxJJEsNbrpYCySVCmkpmBsCGoAc5pQ7sZFizETh4",
  "key40": "56z1ytvaJHczSoNDcrvNkzDRimfHwh57R1RbsRvWNX5SMxcnhEpt2Y3mAygVLtp8UGGWPvyAS7cHp7my4pfX4ctg",
  "key41": "281VcrGDimzdLHKmpm1tYAYCUvXV8V5pgrMcAQTDcFWR6MvwvZx11C2RcH2nXWtHpsi8JXVT79KgNJXaVCBD7wGg"
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
