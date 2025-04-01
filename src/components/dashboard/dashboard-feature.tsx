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
    "3EstUpJsaFJrSDeENjE1Hqhtc3SCpRNvQgV5bjsv2b1spDVY9WyRzApj2oFRKGxMbg8R92mMhVG4kckfxn7Tojq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhsuauBcumJeapCLjEzxSdiwxx5wMYRV6Wvavkfts4sxDNAg1kcvUuksEf7bNNpxHjEREYuCSLKkR99WcAVbWVD",
  "key1": "4JzgBaKKjuWa6PfoJx7Ry3MKLpZm91pA6xp16heJAnnbzT933BDQZzrHFJoy3We5iS8yUudxgoU7XWaFSkZyZP4Z",
  "key2": "3h3czsyecVqAgC9uEN7STE7nr5BhPwZGwvH5Rzi21NU9ysX3SsbwUsqqekRiboiWf7fVSjPHL6JzogYirUDuDQ2X",
  "key3": "28VRt1SJs7Svh958z1u5ovoftVATGNhH7hweqGYK2w1JRFxSxKth8kKC2U8FJvuv9RxyNNcuoYhr4nR4tzt42eiV",
  "key4": "3Bjfu8Su2gaVJAFPwBwAyiVySxcQdPx194sGjvFYSDoGKykpEhdz4xwy1SwGQEgPVHT7LU7wmJhKf2iUZudhpPHU",
  "key5": "4g8b7zyymDRwU3cGuzJJKdDmuozBsY8qXvS5bjxHE1TymieTHjat5aRPk42JvWbBkcaPhu1EMEjcnEjPtYtXU63Z",
  "key6": "XQLe8iA5PNdEESTia3B7eijG96uEyjMZbdfPHmqHtyUQn5xDBD9DQca5jZfjbxwHsYAVmid1dsg2BMYc6qDXVBU",
  "key7": "t2dQc9AF6yEpBGb1QsDEJNPXupgcwvdxcGQo7nfUwUsZ44exSV1QLKcwxA5STD3tNAUUgtEiFosJbNd2W2dWs5S",
  "key8": "4M9TbjsxMk2G9ptRo9upHEB3JF8Q7mmpQyzdBKQLkRcvZJehVs9okkba3sgGuiNrnHNiWC9H7MRDhhptB8RwSkKw",
  "key9": "5cbUhNZAExXbo4VYBNmgt8dUkPWRPRxsbjS44CwQxMj7QadY4MQHpwasKgiS6er5Q2HxX9DrSLFzPvbBmcskYUt5",
  "key10": "qRUx51C3FAmhFSihJeybkcxKzu5HvCfqEd5LrCHeX5QHwMaAHVA7h2o9Qzp4buN7kaTu6wjG2YzmQn86Gn3ebhq",
  "key11": "4QNvtHociKNwunDnxanFKdR4y7qUKUi9xRVFpdkc88i3vGWBs8Jh7FV3vK7gmHzWmFEcy1SH9gP2ctxcWtSwv43N",
  "key12": "5KeQaHy7yyUkaFcwfhDPD1SsD1JEabz8xoaBUCthFZTUPUZQqRn8XnAKU8PqGWDo36VFFRrLGj7GUmUmJ7WcTe4g",
  "key13": "4aWx1TkGmWfNWZgxxqU9X75CkfrfF9cfLxNmetcinu8kUzdWz26PHxUnVd8Mxyoh2k93hSvukpHp499wGYkpchW",
  "key14": "KSNyg8H2Ss5u2dfPobSFrvVMQZvKJwNkmrzv3qqtmiyBW71qfuSQADXxkXvx9gDa7RD5u6F8qYoAcsBFJaToyBM",
  "key15": "5SUZfb3pwDTkdisMfhxrTVABcBxB3UvhGeFU1jSk5uvqC3qYgUvNvfZDJFbcTfee2cCMZaVEJ7BZZ3p8edaufk6n",
  "key16": "22uRVLRyQyTd265SuF6q8N8X35pCejDTbh2CaxXQr46k7gEzhzMv8BCfM8NzVYT3Bj1YHjBw7QQWJe8gBmqAm181",
  "key17": "BNxqn16r3qkqbPErkH27azyWKGdbcw1ZACUQLa5TngM2qs4p3xT6YcGhFoiijfvQVnLxPN5HuV1Cyia5UytjbDK",
  "key18": "4GFRsTMTZsL2U66gAx1VLgok1U6sfSsCt6Cei7s4kkYQBY7DMB5vnYNVsBGp6Ry3874BtZd5Ck1sA9k2j2K8hiVG",
  "key19": "2rxY773HvyzWSB9Z3tPp9BJp5miqckaKQS4ocQFeGVf23MnQsyUsBVNipTr4WdVnQkNdM62MZq8y2gXAuFXP2v16",
  "key20": "4RgdPcavN7noQZQNof38zRjpepkTgikhz5TdB8EVeoMz7TjuDSg5Z8uJ23ejJEJfG6iXT31heE233m8zwGCfjs6Y",
  "key21": "3GcUEi1FeGG7m6ssfPuQUXHYXUVobo1RzEKcdm6s78rijpFxxUoQjutAQYxJ6Eb3oTGX8rZ5gTMCGCFqzkbfyZ7u",
  "key22": "hBtfNp8wtZc67wvXdekakbpnm9TBSvmXdg3gaxfogEvfePeRw91DaoPPFY1js2nwu1YXVcoaDNcu73x8VcNw5HX",
  "key23": "3X1tbXoksepSPnAF7yYSuEfxggybbFCj4adCXW3iF6ZcUJgD5dsUUQjSJ2pLiXrp3AGUM21F45PRMGGCTrS9PcAh",
  "key24": "vbysKg4Dm6rHV6uyKH3ShvnaKB78cxQHNetarUyAyzCtnkRgfACckSF1tzVrnxUHKeo6NM7KQi6n9VYSS1RiPMZ",
  "key25": "3PVfN8pg34MtHiudrLrnbJQyJG5hg3Wtk4pXPZn8g34WCm2twEzqTyz3yS72edpbWHTA23w8DzjdcjSg82eBjYn9",
  "key26": "5M48iVBzYwXwzzMEKpNaChuRwZth3pXR9cKhwickJ6TnNvSZzu9scb7UA6xt1icTwyVtqiDCxmoZPukW3BKbQGm1",
  "key27": "2pzykJsCmKKWxPvuTimHLiBfogdbXu8mo2vq816XWCZD4QDMjyEJ8SzrUtCRC4UVNdry4D9MGy4KbppaAo5G7D7q",
  "key28": "3mPvNTRhkXnohcJwq31vydozb5sfCA42L9rgnJ9bHQCacQavBXTwBQDoXdGTiXPVs5a7rJ9VvGk81feKbyd5ro4p",
  "key29": "3MmtPjL8rTLXTP3EMTfqBe85y6hMofnaS82wNwYoyPw9uW86gYGeBJ7sCgyfpec2nfSPYUud5tY9fGm1dh93bDjR",
  "key30": "28qSuAihv2kQ8aq5Qwe9JaSXasikeSztMrH3DEYzs74F3F31Bmws7p8EPmKyo9Mjb1WsiGPift76x6PMTdcRPyHc",
  "key31": "4o7zUCrB1DmNBwUsLb4Mj9xgbeHoGrpmhMPTSGWRhn9ohCsEcmG7UjmvSXAaeErBqfDLAu2tqidFKXobx254FaDc",
  "key32": "2M4NUgNshp4M7iqbUNCEQhGwEjVnfvK391pw3mQU2gQwb3QKn7XXW3z9uKELNKmUYRwcPQefnwCyVg5UJu53ymmn",
  "key33": "2QFApgMiCMmchNohMpjCmdyMBbPvnMfKUANNWXJNko5LH2zFrMKfSY7YGyNHLRuiKiAUkwhY9qw7oyMWta1sGX24",
  "key34": "2GjY5UENqCcU2pBtHhYBKZ7cvv4Ef8yFU1SyypckJaJBpvdWBwnheo3vwpayGVYATuF4HUZuKcUf2qGMYhVYtsR4",
  "key35": "HnqKD745ZkfAwpSwjcNGbStpmUgeQ2U55ek2EKPATJeC31GGqfh2YL2CkFjCHGhsrhfjbXghA87rGQdtJgyPgEW",
  "key36": "s2LgWuowyGanEXuYBko1RCVY9QSqfrsANFktm21zeLuLCEg22fZVgirL8AVpEQ9p68C8rrv315xm2GwWGJNL8Fb",
  "key37": "4UZcFPRT5in4kfG85p3FwgE1z3HcgfbKVachjER7ehGQhEFjf1uPg8w9RkXjQ6WYqki4Cyu2AkqmbeJoSsTBNMLX",
  "key38": "3A25JCBqr8kpZe8uwkcTRQ2GFUsyMZUV6sY2HM53FLH5hvPuerQ256tPWmHt98qQeiAA1K7eVp2TtXxs3yZdrgNz",
  "key39": "2oQ1t7nGGTffh9avR9woxM4FbQ8uXD8dmhdm4drDk8QpLXoJS77N3eTjeagBDztCcFcFxCwj97bW2FvSBH3GPFFV",
  "key40": "2ma8z6McPbQbuc6taKQ6LVRuMHT7UDAbAe8v7ZU8ZmeHqsiGBMrVTML2UHKgzt8nXh8d1FJREsG8xZLFPbLU2NbD"
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
