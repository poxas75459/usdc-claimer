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
    "55kNhRCZSUcL47UeDDHnJ5PXyp44xr72YvheX88HU7vDNCfLeajoJBQhyC1c38CZu7z4FkqArAXzHxELJZyst2CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZEyNDFSM5q77AQRrGeiAhAT3KDWiHRbQQj4iHiEAkmNw15f3UvRNBW5M6Gbyyq4gjiQnowRM6gsf7EYdPzxQxM",
  "key1": "ApZVNMidbFa2s9R21AeBuBWaBN8hSWcsRFXaw5meB95LHLFfPy1AuhMtYngzLokcR9v2wQAbgfiPp6WfcrrnsRe",
  "key2": "J4xqfjANsj4pMaivMSeeZvy6kYBGDaBswbHvWGWKMfb5WMRx5Cgx32udGamxDNWVJsvDReGPgpuHnhHf196jRXJ",
  "key3": "YJLAbyncZV5znbznTJa5JXcZ93voFJr4GLow4AQxZdzpRWU2MLV5pkMbb7JwSVVcze52VBEdryaq8Y3HUUUvKLv",
  "key4": "5esNEKu8NcEVzqAKvNNPA3LSjwm1ffMzHdgbyBreDJqFhVx4tPJwW79JiJPiWe7mHxvaUdtR9T4nYJZLeH7nqpX3",
  "key5": "5xMpu6g94FwUJFH7hbZYGf6ETt1S43ZsHFujCmq6GLdqZtZHqSuQeBrcrgar97QrFpC8yW6LhkkouWbwSGH4jUDN",
  "key6": "NXBpv7Rk5REon6HaRw3i2zpKekGaL1pQoiKw5nTtr5Cg1yDWS7xaWsJLRYy7hhHnEb7Fv8C5cBfReFxrqh4xMDw",
  "key7": "4cgnQRfjLzVmDmmT8Lo9FrW3gNvbNs2jmq4NtqkxU44we4pQ2eSVgSVazSLrEdZ3FibjjRrFwevfxZSSmGYxnuns",
  "key8": "ffpaVUfy2gSoVriNoSb8bu9x5B2H6pqW2aZgoMs8biWyH1NFgkPQxib98BH12CtHaYNu3t5fgMigdu5fftMxMbX",
  "key9": "5CuvfcGAKikMSW2XfGPXHwJxzyyhJ9tcXGUxZjQoaZm7K2nkUMcGf3TfVny3tch4inB7RN1sXwV2GS2wnETbkMWz",
  "key10": "VAFALXxhy85KQ5PfjCSw3aGyn8nDhouRmVESVYeKe3CUtVxCphcyR27c7g2X4YWCnsze7dRzGvSDM85Q5erV9fm",
  "key11": "4MHb36XAEbyCkTDLG2odchhJzH29yjaDRcAJ3HQrUW8bRbrcpWgWZdwUMKHUf8THSHjjwmP4amEj9sLwqQ6pGHGp",
  "key12": "2ddGADBrwug5Bmww9iMnh7MLRnEiyJBAKUwMs8i4cP2jPwSXCihq728QxrPpwVAxy5biHRX4vbcyZdm8J1RXsYag",
  "key13": "5iNdB6Jwcz9spgjnjQmuTVcfqXWSdxDJsPGfxu23M8gqweqyQjwGZh8SRHqsVjVy6eKkoW5S6vcfYCKWLVG3E97x",
  "key14": "2ciAA6Cy5uS7TnuDpnHCZnPu8RrdBde2GBrtDR8pawpncrupBh7wp1MV9mvAL3scXGPtpSG7uTr5fbce421cSbtY",
  "key15": "rC3U8XLtr1CmUULGBgsXBVyPTLpbLJkgbez1KAak9CUWPcGKFwjPHTk5Q6omAW6BYFCoqV7hCnBiXgsTdJpBbYc",
  "key16": "5cEk89VNECsEDknYEYUaVKQ3B58xwydhERdCJ2YfXuXoqbS8RRRFv7CVHQs6jGJaVSdG1QqRGAiKiFBKbL3Zv42R",
  "key17": "59ZpKCRjkvMzvNdJT8qRJSkJYAUfV6Szy9D5MCMYhSmShVvPHa1YGcAKSFWtR7qpEkfdaTnKBzCU7768yw2gR6pW",
  "key18": "GSuKHX61fKX8aAgtR44bSargtoABFB6LH2P9tG1cChGcHj9uTqPt78iiydS622dEbK2Akihx4xAxk8ejW7GTXnJ",
  "key19": "2HSULP8b87aGjMbyXB9ocmvQwszuodqUPPoNsW3rhgrQ8Y3uKWRumuHB5TSz82S8WS94QmYhRQ6ahRe5FaNS12JR",
  "key20": "absTSusZWQMQNSuWDXNjM5j61qLeqaZnrTw8mQJCYBYXyqAzr8R7ydgw4sqMTxvV7GKuimkCtWMoA6dgcjrYu47",
  "key21": "2MShCBmY62FP1tb6JTMHDdtvgnQpxhoewyLWCeTC93wsePBEMSBxf36wb89uo9dSYTGQH9mV9ShdbTqFMawBMimF",
  "key22": "42PoFBgq2wDFVCJDMyHr9u1iVAyGN8538uEW3MHv5YJ3q8tUVkbidJTxDLXUtsXaBmkpcijamCcpUSsTsn1oNsqs",
  "key23": "2W4w1XE5tFqV7mg9NFBitsiu9wq5mvWMUD6sicQpaDAG29p87sTHcXvw2XYjShR6saTzsmM5MN3nnAFv67bCwZxM",
  "key24": "HcQkhMCtSm2fK7LyVJnEi9VrfsqT667ZcmqNnAdZo6Jw9DmX6quhj9ApkeVE3Ls46CKaZNexue6rdWVujPT2AaK",
  "key25": "2gaJ6kyWcqvrsWEVYX3PVbkm51ZVm7k2gRkWh5Dm2F7Zer9FU1j7c57aNcTx6g9GEsSH6dkPQnBp3BtkJH4qbvFa",
  "key26": "65DpztFED5ETcb96V7JfSHf7Ca2siu8pLtVaYJZxLvLQrAS7iwGK1aqMhacnaAWfiPAPHYP1PGtog4eQSdrjm3Lk",
  "key27": "mD3NsS1mDMeKcJ5rU6yih5PujSi8ZQY71MudY7fnA2MczGvAg3CvrhrcNid82nSE4UYy3rrqrTRyax1fpqF5PhK",
  "key28": "2ZdQ1PPZQwVq3GYV3mQwCzfUAuLUwLcgzd2gBgbAtMfWm3ukhLGt2k1ZbCskbrhZz645MPnVL44WrMijRqmT68i9",
  "key29": "3SFPCiVtV6KXxgjutsthpM44Dz4hnhRhruw928aZ1hgXwyZxwpyE98opGrRLjWNgArFLKkBwrmB9sZbjYt4QYMYm",
  "key30": "iKxioJib8mJ9GuBsDhmjHdg2xxFLtenq6mfdtP3PSjYrsZeSUuYQgWPq83WT4jmaiusnBkms9fhv9JY46jfUGLr",
  "key31": "5YAFNqLHychZio5AnhPyRdA7kJ48RGS7ZpiC7Gj9tSTnsnCUcfoWPpwSnsFQbweKLZknTSYFRjH5fq6AYaSc4J73",
  "key32": "EFMGM4jXtFA7xK76Mc2KvkagvddU4dmY6BopVib5VNpeNRCc8LDaGQ5cdWM4oBeGw4Y39LomHLs2jv3nchJjxzk",
  "key33": "37gG79PqFiWhXLEfcWwN6EqaMq3GpBhEpu2VBeuv1BUCegkv9N9f1ZytVwEKoqUAAK84g8HuM5m53irAnnCpLZ33",
  "key34": "3SgVL7gy6Cvy7ZwwSZ5B1nnYbDbr6yPBR6tcCXakREL9SR9pfcCtbVTnB8sBqk9hTu3zmuKDspunT7wNpFVq1PmG",
  "key35": "xpwvSu49W4uSn3Ywx1ezk47HNJAnToPEZBwBwDdrjBXKosTEZBukSwRxcKVMB4kuPH491zMq8TWtCSHnrpeRRPV",
  "key36": "2iCpkUpnUy3VvpJXg8bSeG6mM7H7vXX477EhsmEkMhLwoi9E7TurzxbcViDS9HkL2vR89e6Uqe4HBsn68RWeJ9W8",
  "key37": "4Ex7BXTXpdrm89xQqnkcWwNw2iBjYWcWx8oKwk5KYwDvwTkj5US77G2W7QyEsqstnM9jBBwF88KDVZNdhsBMzki5",
  "key38": "5x98sYZo4zSsRrHMVBxshWi65GXLsMvr4sbMwj6xWuWaidud43RyhRs9cmVA9Pxjtq6NP7K25JEoigQBAUFsq5F4",
  "key39": "3C4y67uL1EGmLYGqWfD6u3pCkgNFkJAEin8ouWPMq1Rp3rND4QcF8kRMMAvUe3KBbxwbQVRKSDA9zkVcaBGQ42gg",
  "key40": "BxHQyEPUCztPerkH8evL19oL8C2fRmteZAB2i3EbW5fkTVKeSZ973J91NH4djXH8SjzxfMX1abVQMWngyg1qTEb",
  "key41": "2XmdEfrMjXpA3kD8otZXJREPyBDbwgkYtmCb7jcN6kE7qMMyHY7uKBuGHP92f7JctwZeT71F1jaV8DxdVMFqTXQX",
  "key42": "2qNFuuNU6vddeNqJSWQexCLmNFnyPKeqDSCyxZYGqYB4gQPMcuEtU5wdMy2Qxu1FiBNbLu8wDFkVvkkdh69dPTUp",
  "key43": "4YqdViLKnnLt2uJNpiDdR1tWEoNNW7YkgYKaM8F2RKbt2uRCS9vwH7ACoPQxaMdWFDLmbgk9FDFcgXm8CQ55qtw7"
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
