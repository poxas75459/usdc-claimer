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
    "2SDDArPfFsZ5VPpJWjnAaA3apqLwAVCnu97TuGs9pGQFEo2LFrHFrXWx41mxRHWhGBuDdPpG3d8qwyvyJHczcvPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8JdMygbwK2JGLT4KgwhVvjQaPMKopRaTsxim834tdLwRoHE1bE4ewDwEGUqFEnwgy3FRsBKuuiiK6GX7gJ7RCo",
  "key1": "Q1mHmZrELM1h7yLuknRgnpAPmBjG15CxaDfDvAas1SmipLgtU6oy3i9JjKAp4qSRNF8CpzVod734vrVyWD5CevV",
  "key2": "3MRpQetkhDopvqM2s1GnDxRj95mPXvuVvHygyo3RVohiZ7HzmDr5rW4aRTg1Cf6ianbJzKd5p1k4fQEsod1RZSEr",
  "key3": "59w23JjJjE4NarxhYG4mu5eX8SmBh5SBRzgaJb6XFns1pvDwByEjYCMrwhf1gJ8EaKMspd4mPdvfFTiNHSBzVhP5",
  "key4": "2ebfMZKW2XGUybfFSzdGCjE6N9bkji8t5z3F9CbH5EANeBdwTrZ8dZH7tdbK2p3gLBuMjnqsCEbnxR4tAd8JF4PD",
  "key5": "5H2jBD2F7KaEYdUCvUZqs73NZQjUBZsAUVjnrmXmAXS14koYsTYhqwzJDLkK91tbdcBYJDcvMk7fLThp1zxAjr4r",
  "key6": "cyMCUcyA2isWoeM1tCgGciVeXAUKaEsMEZWMu1LSGf6tsv92y4vm2S9Hsdz3RL6gw8BfX5SZ5iURintSgafPazy",
  "key7": "4fscTGWQNsfhUnFqXVCdt9BqjZ29Q1gLP5E6mpoZjcfcJs6HEeqqhxbY5NJTP8uMirjJVXzGqrzECeKzDjWYwt9Z",
  "key8": "5SKTQRwSPcHZbNitfeCgQ5X3jTs6WtxcBxcSbsJunNTYtHAgBaeV37h698tFPrirr5TPYq4QvLzxGhVw7vbGY7GF",
  "key9": "2FoDdUkWnNGg4Je6Nz1ZaPHqYnRH7mmmDpz5idapyKxPixTvLLEHBsfdHT8Q2Tp2ko4DiqGJtWg3CzbDAUkpdUUT",
  "key10": "ubA27vFQ7y8hc898ZtsNNP6zmsmUdKDqTZ4NRzKVkuomJJRp3mmqCXPtdeuC2MRkFMcqYx9n35bZazFNRtEZtHF",
  "key11": "5kw4uFsPKMHN9YdytpAbBm93jFXTdamiwB61mXr1ZGca5jxwH4jyHK517MnsqbEF2F2PNcfjF4uom8Vip6kxoqXH",
  "key12": "4WLhJajA9PMMZsfpbkk6n4uSa3T1NwVK6XUPstHUhCSqveGfFwij2wqVQCLaFTx8QRsoAc2MqdR4i8MCK5p7PhyP",
  "key13": "5dAkB2SdqDc34keC9nLBhtKHt72va4Bo6CQsh1faCc9rUsvPE31qqnPq11wie2HsJ9Lm8fURpxXnvrMjsRsYLG87",
  "key14": "35a2cfJN47Pg1n1kuX42Xuh5FQQT2VMAL2dgKK23juJceQARQqXf8aKGLmxjNFDtCWo9gbVLdiuFyaYuWGyUGUt5",
  "key15": "WUPbiRTxoEfhJT78ey4dmg8CpKTCoyoRyD6YDMqTLf2uZXL9yV9ejqz7C2jZAUoa7UVRpRkS5UjDTz9qBAtkg5s",
  "key16": "1qMJCZJ6JmvZGYquLVXbZZy8HjLB6635YE3sFd3WaAEmTn6T7mvwMFaAjs2fBLnyEj1zwg1j84dFHqoveu9prD",
  "key17": "2rJmYrkc4QANS6C9227yPjx3z9PZCn2z2UcEKr9Ke9wEM8VoWAcN1TaRtWCp9DvjpNk1BPLazvBkvdx7PV2VwhKR",
  "key18": "49ZzbfwaT2shEnceMsoCuSKMidAuvcBp7gFQZMSpWVbFzcHg6aSwh1WP3TEiazs7zzsxxp9cNtLjHUuAsFjc54YS",
  "key19": "5TwqMFZ43MgRhZzQacidQMT3i9doGxL4dcXambcs14WSpdG8oGDx3L4C4y75Gf9CRgS8CsbDmEDwxcBzQmkN88vr",
  "key20": "woA2T2yG61ZrJsZqZa5chpDdhMDJLdRoH6rHpCb2wT4Z46KCboAwQUMhagUBSBESCKSJa7yVZ7cwbj4VGAox8ix",
  "key21": "5qig7FvHgaaohepT4TJkuVAE5BARMU6GZM8fGVt8Yzf9b6FT6V5JWGGtrP4hExUuANgkSpbWrDY2A4TBBWz1p1mP",
  "key22": "4kkKXMMHnhob58WeEhmScnS6CNcHZR3EAsBRkA4eUbBD6b1qJ5ACRha75onqWehpjpmuD2DtEaPVK9mj3r11b8Y5",
  "key23": "QVscyJ5KDaCsJDoA99bgFkgdcjCbgjdDxjmxdJd3Ya6sGDxYSu7igqC2HWCYSZaJoxv2NhujRqPGEjq6CYWHAHg",
  "key24": "X9cA72v5x5RufHvYQVNAnbo68bHJVrRwhqsJaufmoGupQHL622NP1exNEVaVgbMEXxLtLGTKiX8E3SM7ABtrmtg",
  "key25": "2AKRpgajtvLMEFSMszqb5NTYVFsPoJotZ8LLEV4HYKB7tCKgEca3roynse7Dox6jgUn6LuT4kByEh53sn1yddZXe",
  "key26": "2W5Yqjf6rPHQZ3ZuqN7heNnrNBkZFn7DNruczHt2kAJr5uPHaTEpudFwo7NwPrMTiaRqj2VaLdo9muFjNJfWaqoM",
  "key27": "4tHsDxB4Bhqw9Jjd5p8Y2VbSF9ZfyBfvQ3dvy4S8UjETaBFBqoLiuhxE2oo6iuwQiBXgJMNm4cRpexizHk1qQmK3",
  "key28": "3annGZmoFtZhCV6q4ktydfdWdmMDFPK4jfTWEfrG4rwoBJaaAPJK23E8BzKTqtzTMrNJnricTLVhU4Dd4TCFJwfx",
  "key29": "4KEr8YrexzenUEBmnHrZxyMUF3aJDTVDTcDGGmcYP6ikm6MXh1TJ3R1T5YLwsiUBjm3xmCSxsssN3uGMTCrM22Dw",
  "key30": "4xVU4jfwyv49LvHpoLTgRkuZXK1SHhhCycdL8Cf3fRbUsu9tPM4X8AQ8tnPBudr5Ns2K93fxQKmDAYh7hFjGEm5N",
  "key31": "3EqjXZ6yaHfGnQTWD6Ja385UqgNUg3vQnfBkfFZbR2CY3TeUx4i8emLNhb8oMiPYmWHaxJ6SPaWQmyLX3GDGJn4Z",
  "key32": "3CHMH5iJnaNJ2KZGHTmVHYvS3ZEg1fhhM3Ubxjz5rCzb35pwWsSLx4ZQuQfB5aGtct6SjEYeQkLUnY32voNHf2vn",
  "key33": "4EqhsFpfJqwMHzN2fN1ZYC3AmQ2C6BSzEuRzS6MmVyF58XK1tJ5KuziR22HCncfnaDUsjQ7pwdqacMQrZBcaSFL7",
  "key34": "tnAT3awFG4JSoCYAGaGx88NVJ3B69C7VPETn58QtanKp7hPX21jvz8TbSdD5mMYZyMiJqvu273vjFM56PXLNL69",
  "key35": "5gHPp5ngPphepZtcqJJ68hDAFa1VQYhnnm7bTEcyZjz43wnbshnxyj993Bo4YzEpgnjX6UKiYdowpNpgCRvr8ioK",
  "key36": "4UhY5UP2WY2Pv43CeedxU2rDUHDeuXN4J6Mf4RHsMmsRMgf8cSXf66S7RdRvRHXi8ur8HfyZudAF3dVmBTP9tyqu",
  "key37": "2peSvtL3PE93j4XaHdLLSgz6tupK3zgco3JPijU3KgSFHL6RQAtNRey5y7BcNa45fCR7WgtoXZ5vYZmUACSdexhS",
  "key38": "3EmDXH7RvFxH3sFjK968s4aErA24c8VYy6dBYzXrQo7JkMKcxYxp9i47yQmLMhP5g1C5iEqTThvsWmwGMvbacLoH",
  "key39": "owGxvm8svkRdXGDMAJuXhdPr49TiAWmecDTkM7FoiS7QPMQXqun7qoB6mCZgP6wkvUDzfCwq6ELTFpThwxgXmKt",
  "key40": "2BjLQu44J8NZtwDveCj6y9daF4wXm7BmQMzdwXZzve9q6FEHZ9pAkZNssHv1UynNa4knkHPFFSKj4z2MjTbx4B8s",
  "key41": "4HFnYkYoLbt8T86RGgyXFVpMAYwCmeGVgLkJcDneQPd95QxvrqEnSNg8kYUVMBjJia8xwK2S1yM7kMcde6KfoR8A",
  "key42": "5vAZbYVcczWcFmo4HFnhhBwgNAxrgr1wjPEgN9BojdGQLU67JRYBqkidU5EEQVWWEXQnkH9Xzy9kEfxP1V3eTpGP"
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
