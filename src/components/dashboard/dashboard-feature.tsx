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
    "4fM5kEbCARU8FS961YXigFHkkiDck83Kjr4rsq5Q13bnSF35QwA59XdjoB6nLXnUtuFPy8VNtDwG2SZ9oUdhimt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jeV4eG8d6f9aEK4hGkiSdvHoGGAKeBr4DVGgpn2FtSn6VqHdWDiCTZsG726VLJRtyLdFnLnaQK1jdWMhkKcD77G",
  "key1": "Sof6ramjLpKZxzMt1fw5y1r82XBcqLKrXbADt3ZyFe5cY6hM8Uims6T8vdaSvxW8ao4G4LRMc67MPEgQEieTnrs",
  "key2": "2BZCErhSPW9Vz4CdpjeQ4PZATh19THBnqWHeFc8d4dQLCcyzTCXgWN1e57jyhwDHikSemgrqhA1UrJTDDobo4CLK",
  "key3": "2v1FffoPxe2LaoPbzrorsrUdE7nMGCcD8oVFmpHpuagCBXjqmr2uzjQx36cgZ6bmqGwBVmHyQhqXngGKWWW1BDN7",
  "key4": "3WSigUNPpAgS8WQGcVi8stGkfhwyjcPvqaz4tiiiJqceWPwb26AAZEmbJYg6QZGCwKJhzBuXkLQNX4mtyr9qkZCg",
  "key5": "5EC7BmxLTV4YehtBo7rHWhHrkKU46BLiRMCJ1gcMtW2cwTbDmcRsrxiqMtkFrHKSuCh2aVjp7tLzZXfDcEh5ZvFc",
  "key6": "xvegyFKYbkTRnUQrKuJ1UGGk3aLWNo6PMpP5FXzarTrUWhNxvmDAwSQo3z6QVkNo1WGjV1uyQpApo5TRo2cXBQg",
  "key7": "46DYaNjJj6gihreEcWe1uQrmBJKPD1aNQXgBpSfh3GESYdN2AC8GkijKLaTHDBHZwHm62cgu6fjMpeomKniwWF1b",
  "key8": "42SM6yj4juQzHZPWhMf9AqGvuiJpHLag86bcTJ3UfAnM1jnTw7WP4RmLz9a98NYSc3DxP1ywr1pS1xPfDqAhYxGN",
  "key9": "3BoEyqPvgp2CvJjuxuaCjZk5rwRLojMFj1hqtetT1ixGeZG94otYsUmMwdPZGdF5vzkwTEUWjSfoDTcgtsbd3g1k",
  "key10": "38hXiBQGZjkwVrH1kb9RXwwLofojfAU5YMQgEeEoGaK5Q3a7bZrfeAJo7GhSdXG2CFdrU5fBfaVQtRq9x5qbouCU",
  "key11": "42VBNB3Gsr2JUVPFMais2uq6EyWBph6za8qqC9zGtsgCH1ciiqNZHACp4uRt3ZjjsKYbTWxPib7FbBQiXe738Vcb",
  "key12": "rMtRd8y4HKXAMBUkdx4Eun1y8gzb8LbgjYDx9VeTu6LaqqbjG7szPgK9NT8Jd3oiT9H6fkY28mxrpuMcCWoMp8L",
  "key13": "5uJ4ZGz5JEGb4UvRJwJPdKNDhTSykjkMDcRn4EGF2mUggqwy3RFEQ4ymBzzLiqcayrJMMK9wZHVVNmrfcCWPUYKf",
  "key14": "4cNbxiogLVjeUm6vBxXTwVnnEzMCPJ7FNhwLzGq27P5NNWM8GkVosGMDawnJdSUR11QPmnxGvrT2ATfPT2EZ9hGC",
  "key15": "p1iQxUrxK24oPNdBtZQSu5w9yY2YcZVLb1BnopiQFNP8G62beHmhUg7som2PRYYauWyS6u6wW4kXoj3TeR2hj4p",
  "key16": "3yZxE9bG6SW7ZvdBKhZerSiAJjLKsgWLqQxJFhaHUuYgtcpiwPts97g73vxjFP29byzMvvmtXzQmvitp4w3TjAXa",
  "key17": "24oyShiopfELFFYNkJEWDXJxQxoTAfgKMHFTqBjRchk9L2rdow5jbjSZfzX5nb86eAwLGgpLU4xSFPJRGXaYNX4j",
  "key18": "5BuFk6XSnb91i3KaCEpZmmrF788nwGadeqFcuGCQYFrb8DtU8fgJcpq6jRqVGACvN7x2gTrRKEXXwrQUHUPEhDtM",
  "key19": "4DFu7Num8RjkHRm2weLUabdtWmEybxRworwFqTzcatJKRfomwTC7A8HHRFZeuagw93ZkkGHmp9R5b18HGX2Phoqn",
  "key20": "5ZVvfV2oS2XqHhBcQQRpgsCU8p1HygbFFuzMQ5rHrVQbwx23BXJutuR5JirgPmwogXDqgD1ncdtEkUrQ1EXuzddD",
  "key21": "3Kh4CdrnXqLJNqUDZLRBe3JafdZWgqLmsfbRDR7rGZw9gYLHnzP6vA3e34J5iAg42HD71F7DBUx7qKYtTmHJXRup",
  "key22": "3a5jk94iCQ16v3AotVpyMzVYgDRjZ3xxyVrqnCSqLh88R7fDjJWUpXhYZtbn4jGJZT5h5M8xKnkadZ6sJVFp73Pf",
  "key23": "ZPuRoWAijrgkKeFZmzqrVmBDdAZLQsw5E5gYuMYp9dMykd4WdgttaGrxHstrsUqokSQQmiabUc1XTAwPsT4WEtS",
  "key24": "2f96CMQoYqKU5eYKzH84CqMJD1HfCkCD38cwJuP8QSgi6L12xNNxz66KLD49cN7HPAcL1XK1VUkr1U2MmJW3zibS",
  "key25": "474uxbvYBRidHnrE7cK16RarApLQSiNWfTwTzAMxjQM17K6bbvyomFs1pvPQYzHQUh8LSzF2XfxnGC5iYojebxDx",
  "key26": "45sNGgGpxBLGK3duRyWJ5KwmU59z6AuLiyRbjLWSk8NpqDchh7zZ8k2sMxPq27Rpi44iRvfsfYtbPgokjL2YfZjX",
  "key27": "2nNt9dvgB3ekDTa7SoTBybfnbMKURaFoWB11twnb4xQdL5qQmvMsYhRPQgYxjy44GnzJuvd3AZdpZhWGkxbHXSqT",
  "key28": "668LhCz4QzzqVoGB16vYxoCve5W54oj2fPapnCLHj11sQFfKw1ykaru986fxLXtALjveUG4bxW7CHh9gGrPJXWhv",
  "key29": "2TotG2YNHV2gxtZCM76j8C87BVgLvNME6mFfemMGQgxTgrkiQSNak6fbYYCD6bvVesEHqghjEZ2RiZTCMTmMwMGp",
  "key30": "gRN2M8bo3LvMyW8pYs7H6JuXqBBtT1N9wDidf6AawfFYBxMf8ibTcDmhKc9j3ut26NYDCCTBx8RbutQxawg7Fch",
  "key31": "65f2FdLw5PFrZkiTiewbkXxLmgWiuvix6CpJcgsqkFtpoKThoVY34nW9i8q5XKS9W7Hay7AyjSyim1mUp5FWa4fP",
  "key32": "bnKwwXrS49hr947WZaBC7LA3qAs77MamjXJ4WYzK1ch4AQ2FrgvieqJw2zp3itt1TZeomqeYubAoPbhufDZjRum",
  "key33": "WHwXGuCpJNRGCezZVzkTUF5TR42ud5JHjGHbyGquVs2fNgQ8v4h9Hbn2oGKAcVyVkr9xxmaiLD6BViZFRkedn4x",
  "key34": "uYECxHUhdCugZWuH2DuQEPMxseFgvQ5fbTWJqDRnWx7zkfdPJytNQ5RjKVhoC22FDyaMaZPXnHzSqaf6std1Bio",
  "key35": "3tdheAoJMvjga7ZV8wrPuduGW5KrWAacuqG3JuhFdmvRVP4QGesCxcscYRUPmBmaYfKBJP4ta7u46ufpsDUxyyZg",
  "key36": "5VwydYXE5n2FgGVJhizHUx16Wdtq2JAEToW7Wa8U6ULno9deoDGMSNXJHzF5mQt8R7NBTT9uRNaN1eRewtaXcE1W",
  "key37": "2rpXm4DsYRSBrw9HqqapahMo6rj5Px1U6n7CoQStgAUZTmWaY6RuWr6xmzbmzL7KW5iGecvz422bPE4CzStNfbXn",
  "key38": "Phsu87D9miG6pyM1BkWwEvtHe299PebF15zXzrcKQ6kT6NGmS1XaKbueYozhmgooR2UndCabMhDmdBrvVoLLWNF",
  "key39": "5yGSsrqCd4kof6N3AEXkkyXLXi5snhnozvpFYieE8ihKM8KVVBEctyUXGSJyct5nFskaKsF9f6JunYLWUsjbXT5j",
  "key40": "5zGxN72nVmhy3PPHBPUFzx4UXoTP4VB2p2q1gbEYFSzb1WXZN1Ayh7hfFrebGLKcJbUoZk6wSHEj5poSmCEgSERF",
  "key41": "3pKR46N8sojPUiyJ7fCZzw1b1eUM4Y4xEe2ZPGZJ6g8zfKt1kNQ6FGvrpqQGUiGginobsffcKkAhYmevrAvBmP5r",
  "key42": "2QqpVLe1HGxQjg1LQztpkxLJm6z26LzfoMTZGVdnRUZZH4cvPDnFEzjZfbuku57xTUTPyKX92Ya7f551uoES5ErG",
  "key43": "HT6iz5dMaDuLUivPwWahxXnrd2FSPmXXuqcM9ENU4Ec3YeU7ei2544ySXraniQ3fe43qaPtmo8w9kBCpirbJ6qU",
  "key44": "4VuicFB9uog5VFAUdbHrBKqbAFxH87w3y9ggEWiHLpVGYsupnM7NdT2jYDWt85k58FQXezmsZvFZr6rejPGCD5Rg",
  "key45": "5kzWZt96vhn78j6prKvzqq3eGjpN2VrtPKWY4dQk8NJeWJy4ykzoEQozKuMXCdPJH6Q8avDhLRsf3qpAan6rp4it"
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
