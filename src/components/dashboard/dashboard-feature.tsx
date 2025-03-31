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
    "2UUmiTLUE6RStxya7SoZCfDp5J7Q44sQotbjiznezp1Lj4fJtNUZPBij4JdwJkGUdtJP3XNoatLm8e1FLG6RVBuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RPcdrXufSdLX8bBeqGhYyhtdAs39157iNtYdMrjcxRfzRdc7oSoKojCwNJPZDaRW9rhLXJq3tFQMykSCSSsBxE",
  "key1": "2osJFwyYWupQBWpqaY3KCDEtRf6oQLCdF7F19tuU7HGBqBcPB9W1F1DZ6iyygzMnaW3gH7h8se6m2g9ynH4fY2j8",
  "key2": "3TYjYSUboW9amqCw8cDDAXnVSDEWTuFMtAuvRniRD1gP6CabexsiHNNJEkG9PpsQg53Un3zWtTkUt85M7PBBo193",
  "key3": "zCeUX8vFBPv194xu5WKiarwHjF84dge2Z3Z871X1kyWQ22jvWW9oKHFGmxxC3iqCUDZx6Pvqien41kNNP3CaioD",
  "key4": "5DQjpoUWBKkhU4ZwujzfVPaLQ36FMDBj3zg5YS5t4wwK1A5LbjMmBRgHDwga5fy4ce2wpqEZ36S3wxznrZB2mS2x",
  "key5": "4iqEPcETLyiM7wPwtoE7Pnv6ZqNrnSiqxRwtYN9uJB3q46JdPkUCLzjKJCvtrEJXsCrD9oi2xdckhGNiBZsGCkuu",
  "key6": "2HWqM12HerX9mxMb7PdbB2rCZ3JdxggizLWpbBy4hHgpKSDmEciayXFX6nrPPDLxu69nVQiKnXDdiTKqiosbkYgm",
  "key7": "WgEBgpJ7ezgLk5drC92YgxQger8ypJgmxv9o7pbkejq3N2KX7hDmjfXh46Pz5oxL9p8KEaZffBdHTtzpTvfDYfH",
  "key8": "4PGuwNs28FvKAje5yBW2RPnF1b9nyUvHjXhsxa83Kfq9916PwbkayBszYHmckjgeNf1HLmpWyn5uAHFfNifPLsNZ",
  "key9": "4SZGQP2JqPvZ7vieyLyNZQMvvof5uiEnBZYmJaVQoVa8iWVZNnDKkg4cbffNDFeSZ3dsxY8sivwgcQRDG3YemtUy",
  "key10": "LK638ujbg1eza7UHzXRdgv61sRTpH15EUcJ31xVZziJcgH3peXTKRR4ot2Z1sR3GZYhEncyfMaz8GCKp2f3LRpQ",
  "key11": "2Qjn8FPUHTF3MLUQ1g9VsPJXF7QMGxYgVfNpq6uxB9CnGvbgx6K1MqLenCJfsQoA8XJ5jrhB1XPwPNjFWyg2oMp6",
  "key12": "2d6K7ZjVRZkKZ4wpwUsoWRfPmrkUw2ZpcMj1q49LVyPwe7ffAHyc7Q7WFunfvfxHU7V9xPGBjeu5DgGrZxu2wbiF",
  "key13": "4S18sCpp2X4JHLzgmkraSdm5G94VHdKv8on44xYtcds7wPfEYW8GbjPyG4KMb6jpdm6s2exYZfQppQzUyxJ4XgGt",
  "key14": "VUKKWQy9FbmVNELneJyAkTMP1HosoYtyU4N94x5YPQv34oUgfGKwCWNp3LRaV4MYiuT4UFVXW8b4rG3CmDmFw8Z",
  "key15": "3fr2xy1sd7sojCfToSCbr1zZPFSrS4bsrjaBRRE1aKxJxrb6yiwoWtFtY1qum4JpXZf6TQGkJpCcoLBAnj9mVuNh",
  "key16": "2d4qX3dE4kFfGhzfk13KgVHfSyZDs6Ag1wP7Y9udyhf8SY4GNQSRN3STvNfVoZAQ7hsJLxsiWsx6qEkhpswBrbZZ",
  "key17": "5EQC9Vm3ERyTiju4vHyZhLQqmwjCciHBRuWLLokCw8PCQoC6nEZFzTbBjKXXyKbZXGxX9DPP8UaJtYstJQaLHiMK",
  "key18": "TBndQcc7QKkm8ffXmD4qNPi1WNPQXJfqPvUG7MRXkpwTxnnKEsP3zdvoYDp7gpNbwS6jDHvzWkWoqGnGrQU9b6E",
  "key19": "5cx1ugiK9UyoLETSAP25mywzLBLWMXvAzfepw2Pu5obM77ECmyUwVHw2h4LNY4Le6xbeJdT2qNPmu3VvDmzUTP4S",
  "key20": "3ic9ekEyzU9Ny8vZ9AAR3NLAZMQuzt4MjvtL2bzQXRNiAtPyn1W1DmFqeZnyxoUuUs9phoTT6UpVBa14htsKThdX",
  "key21": "2kKkf1SEppaD3reFiTrKQ3VQ4pBWEfdaiYAsC92XcpJue9FxJ7qZZBgvT9PfQcrdg1E8griYDpSQs4GzoRcuvdTc",
  "key22": "2UuaYWyUvQDD1Q7WHmt6he3m1rtgZbEUR4vZEh7935HZiBUkMYRryGRgsyxL2wyWiD1twgJsoUC5n6ri4zUDnYAq",
  "key23": "4Tn9U11pWckdHZSJJpBVCRTRXavpgX3iEdGRUkst2FBbBKNTJEaxZm181B5o4n3XaunkRJYS4Eimw2A1unz3vmq2",
  "key24": "29HXJ8tLwAiiy5pCHWQhsSwW9pJRX4HrqoV2V3DvAsnqJ1VjLENsJM5ywZCAPjY7aM5m4uGGZrycmikx8V3iMYuZ",
  "key25": "4gsXmAxPrpoDCYc1quyYtDWHhE9WvKpvgTd8uKRmf7BR451J3QWMaHV1rRtTdqFgDRW8peQF2ADzp2TipHB2xgN7",
  "key26": "ySFQSNdPD7bwagW3Trp6FwPUujy6qU9FhatXsTzYVpfBLD9BFpJU52jQUzzUcDLzTGVEHoKbUy7RDgrzR4F6dkU",
  "key27": "5dCAsazRTp7yiNQVJgmiKnpQXPg1xTpkyTYf1KKFMtqFKCnCMiySgcn2s1WP78uR8jEoEWYxd77mH5VcgvRnDEkd",
  "key28": "3UgFMeioHY6nU2LqiegMnQX9dCsHPSHiiqUX6TXqAaBuvo644xQHh9hijjfrUwkZ1r81XUvGMSfRYXBNehFPsgAH",
  "key29": "2vNr8bdr1Nrac4j5612TVFbcwfsRvD9E7Y75NE6NMonNwK1pnjjs4YhjDZy6HrYcZqigj6oFUedotFBam7tPEeWr",
  "key30": "4nmVcu6XLp2uZVwVef4teFApeCrdgDmwD4HJzH12ZF9Pu2ETLgA4JoVwR1hW9g9LkdZ1YA6jVLt3pV69MRRkBYUi",
  "key31": "5wJBGMu5akVj72ihMgTLNuHrcqnEpssHF3Y2q2wreFwCNcUVD4TowYzFYH17hEt8n5xMD9et4tGH7qS1prqud9Ae",
  "key32": "qPbqeKr2UXkjqahpcaAxMFGMbkakCdnkAknBHKrEg3akqMFfRiToaYSdAJ1LCAEAecU6YHWzSXCidmn7sutAEAd",
  "key33": "neYrm1TdJT3XQGr2FfqsCXfFiQ8PcAq1htZj5wLSYunCJStk8cLJEsDVjHFc1LUedbJoHduUMCEo9eUNYgx5tVd",
  "key34": "2SEbzH1DUDjPpfm8zPe1V2nfY754DJZNx1rdaYFzmAVDmkM2tocePdBzkgK3ktFsrzUn5LtskkMUuttCNLCjqdrD"
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
