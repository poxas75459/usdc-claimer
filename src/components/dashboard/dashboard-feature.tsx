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
    "2JUPkSP8NSWz2a3DAbGb5hnj55jaSjTDKt6T62HJJ2dpa8ijjGgrRFtgoGzwjJd6sf8z4ZZQHLFR1X8Wav3zebFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UpQXRNU73EngxQRS1rizfDGk6RP1pn96RGWMyhBCi5taybsqTxiRK4j8rs1jAvGJFY3fpD4JHcNbkk2xe6kZRT1",
  "key1": "4N69kCDQAoprZKGC5Rf22xfzoJCpMAxKS5jbPF1mz4jEpfSXzGSPjAtgD8EsGmgJGPx98vSpGDbc1eFD83u76kE8",
  "key2": "5MjxpzsTwnzjWdCvq1ucukqZB698C4AoUo8oT8pv9USwAdfYU2NxbcB22JuuFwn3VYTGFgps2LmWcyDiwZcAapdK",
  "key3": "JdsVafj2cPGMW56baaXizfbr2HqSFtKtpxxeVSUVZBwUYAh2nZxXYFFdBWs9MaXKhYnayEqgqTgnnQimr2PiQeE",
  "key4": "2iATzWyGsDh7JAHLWVFDV8ZXTRJK4P8FuSjxA19PhPRbcN7wWA23k2LYZuUittBkMLCyyaWiRzSsuomWLCvUcLee",
  "key5": "2gY1vSgiBgj9RDNSGJcmhddSA8du8J5nuRSGmnZN6r1pGv7Rhuzs1U6uByFicTxemyCM1X32sj6DwBHsXvYHkTMi",
  "key6": "6GygwT7PWnAnZdWt5GwmAezDXxntHp76vyZLzTopb5uFqkcYxfDbDDNoLfDQ9gNVje98knYjqbd5A9mWQroz7nz",
  "key7": "CTYUoG4q5aG233jRLdA6FwKpeEiRxi1JtW6Vw8qyQBkiCN9eJtSUAazrxEEpVzMU3K6oxR3gwDtN9D9zAJJKRFz",
  "key8": "5AQhitKqW56mZzSF37Wdp2vkGgynL7n88hSH95ees8YrpH1WDhTaTCnxtb7bgyPqDxm4vbsJXqoW5gmkABqYs5JP",
  "key9": "4UNfxAKDhE61AjSnNhFd24utvvmTsr6LBBBSvXdK36Bmy1ukQ5ris5pWRZ8fYfvf15eCQHoA5TMX8hV78wTao4nC",
  "key10": "5ugy2HXuFMDFwAHrHNCVFNu2wsePDCawfqf6Xbn6eZGzd4a5HufXuGCxauo78k7Go3Dy9fZRMTWP1WVNBFdgX9NV",
  "key11": "4ZP4iLGXZQPDtHSBt9ktTBe6iKNZttRTyhBKnBWgZNhcyfbcvKjtCNcAppQnBULEUsqfPZfpt7sMCyscJLsxEAWz",
  "key12": "5CoST2MnwE3ZwNdUEHkL4KyZq4g3yoe6f9NcFK47BTmG765m3MUBUvVAzJhYKrRJjXVyjKKJ1Wrg9wvoyeTfzeDD",
  "key13": "46cyWu4ESYyzsYh3283EaXqBA5FmaUmiM3ZpHX1qEr4YaxKooxVABdTJto3FDDXTCW1mKSGvzHfpUCpEvx3bkTFA",
  "key14": "NexfoEGFsuLwWwj2WTYtwu6t11Z5tME7QAWLmDLe4ATCygmiNnZaR6F4PkvDNx3BHS7RoW5i9CrJndDMWoFKfRr",
  "key15": "3a5fZJ9H4Gpqb6DDqi8PUXXT1VxnQn8t7eWvwr6NksDdHBedqnWC44wFaReEHPrWtiBEdAfjFKLqA1U6er1zLkHV",
  "key16": "ARvqqs38gMCZyxEaHbLrAyPAFfMi8Fda6wuqxaCvvpjreirX8rmJfosEsGhwM67ZaedjEmrGABvFXSxvGmVj6xc",
  "key17": "2tQbYfniLz61WqSNxXQeJpugcCwLEmzzorWn3aamUGhxC2YhwB7kPnyLjiEAbos3jhig4W16BkMhCY4yWZv98eT5",
  "key18": "zTc9q5CnRWq3bDdFeuNHhhCaJvx71t3ChywaoKwjyFey3dyCqXt77mhacQMt7TnRNe8GxMTdjhyBmLbU2rnkqX3",
  "key19": "3mioNDqCowpGXL8x9eL2aNjfeVvNQtVYVDD8SePNxvajrKwUASGG64jNy5Y6Jn1Um6C4uF75FYJqAmR2FVHGsXHT",
  "key20": "2a6XhDnEimPAeuS7FueYrJ7CwbpER3SfVnouktxr71YNR6ET5sAthYxVNeP51wvrm4CC2pXFZcJrpzJwjgZaTcjm",
  "key21": "5U8GFCdLTjLA9R6HqtH18gymwvqhSFgMGgjvSfoneW3g1fKxWDSpTHNpSasQ9gsAiTZvNmHXQGpWQrnftytFKSV1",
  "key22": "4Hoc3oNuWmWBbZzCqYG1LAuxfFoQKB6GBAVP3U2cwRG7Kt3ASBnuur5p5FrtS6Kj4amuJA4LLjPmxc1tCW8tLYTM",
  "key23": "56taMVUQXnixJ7A8PbfL6x5Y9PGiDtaiXaKrEvykb1rQjJRSoaNcYiTAFwbSLr3iMnerKtvV6Sd8MmPjNRzkeZpi",
  "key24": "9C6hKy43HR3hYGoa8EWKT9bo7BApYYjEVNrziJfUqXGJCtDSUUFoGLzqBssZNjAreaQkgTvS85zCwUaiDad8ves",
  "key25": "24284tXXkctEZbKRMEnHpQajes9oc4tSBiY4zyjXUZCbidGW5kxYyAdom9D4SCEWHiELEY5sGxH3Rkz9Vg566Qwa",
  "key26": "64KJ3cqKEJnuBBfLySSWXeGttt1M3uB4T8T5Bf59vdgn8P9Ud3G44AtBL2b3ArYEcZLUozkt3DMZdb3Cr9jL38jr",
  "key27": "2UeuvxtvH42WBBbQ38UiumzNa7Kd98H4zDAsEfRpWdTAq4fnQ5zqY4b4y1RjrogDpokV4dLy3tBqKB92CYrpXVpH",
  "key28": "2bHaD8YMXT96m3zZHcjUGj6yooxMsvbhwhop99J1tpUxzqRomM4mkjCtQpqAcRdVzNV2ZxS1rA1V3XJP144pqLYQ",
  "key29": "2sR8kW7fBFrJhgo3kpnPHsfvCbGkVEj9ra8gQ3toWMXc26uy8C2gcZmwRtheJ5DMjGTmw9Dei7PF9TSnhdGiANvf",
  "key30": "45qsDfArV7ho5Qx2jb6VWCq2rEojZ4reFkydnL7wGURr1jqVrw4bMYSx4L2wwnueTW38XwiBUn5QUG45QGbTCxM8",
  "key31": "62XTEQKAJHehfp3iqtuGoiiCCcTGtxHJgSFtUdQLMjHiJvcZWNyh7Vk8ec5YfdBpFR3UtRRJX35JzXtPGak399ka",
  "key32": "5dFK41SvsWJevQYYowRk8RQnUTtKrjS42UsxmcQAiZoKBse4A3Sg8duLmf8uK28fdfqDpbsmGtzxTTmnih6wKiEG",
  "key33": "6541obBmBFkzVtShfZrqktKq53HcFkvYzQqJYQWJJTnjvP5kzFixhoz961bA12ZBZ7FvydViap9w5E1QP5p1kJVX",
  "key34": "5M8q7tNtXLYqttq2su9nbQi7iXz2vPXmHkPKDUpJfZC1MUzwTeRmwvUcsHuVpyXxTQtWWGfEeutEPBMTKBsX564D",
  "key35": "2TgyFdVnmuiBcJUaBSV8YezdtwRUDHXTpGM2KEbSFGGuvCcG5yMWVm6oQowjf9FkqEc65LJTLKVGpiff8NmZqhrt",
  "key36": "36XmBk4zcpwbheBVM5LYaBES8QQ1Ymr2zHJ1VFZDRE57jFZqL3YuK729y3qrkgjd9XtdCze3VUepCfVLqnNKT6ta",
  "key37": "5Bk2wUZVwov8Ztz2KJCXYHZuyKGsAac1XZtuq3fUHnJsSfmY4nqvBTh9Ywin5qypxBXFh2WiXP771Kwqypeqg6WZ",
  "key38": "5eiMQ5hkyfSEgY53M2uq8SeT8j3y4VpPLRD84SVJtaNHLNgaq96wCQ12SfKFP1SMYoVxmMyPcchbyLpkkxLuY69",
  "key39": "3YGHydGjYy7adrhqGJynm9EzRWR1vrPN5CRpVNFEmv5Row7cu7gc5HhxUxwd5AmmcyYFmuybQfQky2BeHTQbtQ9q",
  "key40": "5fEUpJzpUhqTq5zrYdx6nJmzWAL7Gpoc9fW4Awqqjuc5nuV41qvegmoDkrazjpe8fEsTLxxbEVARua9B8m4uvR3n",
  "key41": "4kxtMoXfQoBxkTPBfprKqS1jpc9JHXtKNnp6QVkML99GEbx1DUA2c6rqfdSXLQKUT6vxw951XhcLMi4JsLu6PABe"
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
