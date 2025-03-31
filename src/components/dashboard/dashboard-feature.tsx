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
    "3eow6HRPk3cmfKTyhgSk3Qt3cspG8THFnXapkxPkMnobVY6NS73qbcYpmtyvhK8rA9PYbje28MtW25cQJm7sKTx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTCCZJxwoJ7JgbkJCAteLHEfdyq3K7UyWAUkiqayXaFPZamKNtPt1XAhtYjsG7fwaq4bbTf7k4c9QzABu94oPvG",
  "key1": "4EJ6tsLiUq4iG1Kz4xzoyXMoZPouvNJSh6Aj39hcopWbzb9aKpQfSQbbt2qds9pSLJVFh4YfpT3k383wikPMrV86",
  "key2": "2hqHXEKyA1PLT2cwc9jwt8e8RMt7iyQrMLnmX5PAezBynNvyLuddWRBMdS9yenFXxEGdXV5PLX5o3xrBjusQFVk4",
  "key3": "3hd7zRHBguTx6FMXPbPzpN41DcZ74cmGBcnizmgKWqRNVYR7vff53zbnV1WqTDCchMhaK4vpTfnFdPcq86uH6egf",
  "key4": "mkQ2ii5Y1MRaxPNCygxQEC6cairdRsAJkVzDNj1FavrEgtJLf2YoZU1SM5CUojfThF1KQ5dghA8sjNruXBc6Q6V",
  "key5": "GaKVcE4DFkPT1t24iQtWpZAPBfko1fw5iKJUsaKQYjhkbCdkhvrfgGvYDMK5qUBQt8pqUA8P3ghThpnwyEsr7V3",
  "key6": "uXXoQbxRDy6BoC2todeuPYpsUYy4ujqSZESvcj1SxHy3P3Qham6BYD6Ghyv2CwPjkuXh9LjenhjBkD4Diopft7y",
  "key7": "5L8fjZDEW8Jh5bkjdecxY9bzSovJjE6CSDXh3iyZFR6npgYtQpfubEaPbNKkgeg8SGYsni1FsehRpQU4gKev9jha",
  "key8": "3t8i6WsX2A7JfqHR68K1mNak3QkDpyYjXM9gEbPADYNtKJzs4m1apJwJdAwp6RoLBkMtZB8Eca4c9pERgamqUHsw",
  "key9": "43UDso7qWGYfhKSURdYQsj4qfpMoNt2fitirEsS3BSw4QQqUMurg4dJJrzb3HqJGBRn2UdBL7BNtD4BTurvGEu2a",
  "key10": "4UBzZX96pBHQNKSxvk89khe55F2bticoPPzSVEFddfEFXLzKXuSG1SWqFV4Q2AJ9G1usP719FiMn5cbJeKTjYWm",
  "key11": "2Q4ePBPdFzxXgrdjRy3p9D8kmf8JiPDF7qhJ8vzKHmhSKbHiLdtKxujmaUMGqJ34fSMuTFu9f9cNvWZVPpX52bpc",
  "key12": "2BMX3KkyMxSPcSXd68MuZ26DTjXLhekGzhnykXdhcFyuZt7MKogwXnpU3rSpHrKhDtN6gsqtnWWoVNRT9Eu3vpmt",
  "key13": "2a4ct3dVdtPngiXnrufDFNTiDbA2jmajGqrv9axQtLtDR6jynQTwDmeK77kibzkHz1ACxS68mjG4ggAh6HhkdEMH",
  "key14": "663Tk2j6cxLT4KxLgaXL8ewGdhbYSGUvtn8dBPUpGHvqbe9xMw8uFg5bQL4M1HkB9MSEWwfhBoC9ezQjMr8MK9Mv",
  "key15": "2JC7m3mUus3GMc3jCk9XpD3DV59t5sGkh2wozpjjgkBuyNY1FvekJpYCTTi4HnSHFLqcS8B4PDDFnKqCaF1u5gWU",
  "key16": "3eP7u7T72hmnmG7iouDdciHCUJJnZetKPFhtutkwVkTxHhXKBfx9khhjyvdrNF5rJSkReH7enkpumvNf72ZD5Qkv",
  "key17": "49HWr9HX1suQH6BNMsXc6NkpM7AarUW6RWCuLXN8z8r8LkM4wxg5Uzo7jF15NzxL3xsbRPgDrgVhZNQfKQgoQx6n",
  "key18": "3BPjnerhi2tnXQbXVtp384yUzyvugZhnqEVaSyMTQeQXgFErY5FCCm81RWwCPBETr7uAxvNi6FSRfb6mqSFMoNRB",
  "key19": "ZmL7DNtLECDHRiZHUh9ACGqjhBY5X2psayNAyXuonJn4VS7DmV76p5qfjCLWbkzBv7jkCcnkJKDvLdtyFmKPdjJ",
  "key20": "rXyGzDAp1F79eBLNQyPx2UTa2dnbDTvBw7g1w5mZoje71kQnnywbiQj4hKyUZZioa8eFfcwa4TJN1SzUaHg7zaW",
  "key21": "5WFT6M2VJbCf384a13xzLz2HKtB2bZyZASH2yQCvF7Lg3hYMtaoFd4TsFBZ5b4U5cmALKNBGsDy1cvXmFBZ7gMkx",
  "key22": "2bca9wJDKmvSt487Cp5MQthTRz2GC4bmgHZ3ZKNGtyh9gFB4YUSXCETfGEssWckoaniLGPFE71igC9CQTCuf9GEa",
  "key23": "4pzdG5x4S6e9TM6brWMJJwGbgf5P8B3reTWfK9b6zjoQsrFsVjykZuvXvsjjtayeNSG8marTrca2jGBmR1dBJ4VP",
  "key24": "3MiEsMNHJgKrNGbwNpP5uptNPCkAcpt7krPtpyjyScYK6HyARsrN1znLFM54JFdtCWukjWXTRHiMw4kb2zAKY45d",
  "key25": "5kM9F1oNUdNCK8h763os2mwyyuFt7ALAQGKjNArf1z1Q86qkQco4c1JXYNSzxyoW9k4ssSiA1zAoUQPPjCb89sap",
  "key26": "2k1tprUbotVoh8nKEmbzZQgYGTMFGC9VQLkAMbDrQkze7ai1z2u6ujGSfJ8uWAZqdAXpwpQeK14H1BBkTiPmgKuB",
  "key27": "3NntVeeSFuigfi4ZWDT5ji7HUA8nuLkNMvDrqArFBcaQv96GwXVfPuyLNJgucp4A9T54CSaCr2Srfo8YXvtparF6",
  "key28": "aDkp1iTQDJP34eFTBkGCt88eaDa1M18tuKK992ekfa6khfavCF59R844MUfUCrrBg3hJ7T1UVBsxBJUMb2vjJoc",
  "key29": "4M3jJ9XsH5Bd4ZvFgJFMuNXUniMP2uywBjTRrb1845PrUuQxqf48onMYxYZFCGKSiPikvKvQQTiggpC1EuJ78BRz",
  "key30": "5gW1JQRB8VcsvKWRqPjhCEaGKbxVV2zuEPqyB8zgr8viCHB2EC3teiz4NbQmNW74BkVgTNvmo22S4kW92oCeEax5",
  "key31": "4aMCBT66nKwGdp7NSgN9j5Mm85veYMY5wvEtrpqkunCE92Hf3GCbeNEnp6qysfrZifb48s6yqGWH5RACsyHRwS5",
  "key32": "Kw5Jnyok2a9PtbYbAJLhmDXNXxLoWpLpDMCEGgADKYUqWgJJT44s3PWUPMZcoYQ8PcZ4UsEZmDk8YRVkfHgpoD5",
  "key33": "4cfDSiehjuPQ4aQVoCQ1ksAfHbQqoh4EgSUCbxeSaaAGqatDxvrX9ULBPYChmNnKyeUQsDZdYnY8dfPDDGVsbTuE",
  "key34": "9sbNpEVoHiYckMqMGcRnPfeX47Rs4tLmPoaJ4YH6iJPBSyg3sACGNm3znjwsviZC9DuCTLkC6RJzxdmJaCepMYQ",
  "key35": "31CqEFTQPtGFgwmoc5aYi7Y3pTiCwkk24rXhtrT7fppiPJ37DHRJUr71cRV99Vo2tAM3ioY4HFmU2uoKVh85GtAJ",
  "key36": "4QaXKhWX8kRC5cd5ZHcbw5xg3J7iynm1GEJxuTfRqpEntK68nsBGNKzBD8tA5dS4Ck9RErMrjLU4MXHaeHN7o66C",
  "key37": "rqJmz8yVVTr3ov3gcYFqpBjbRFpVtY39kkobHtujqxLTGiBatsgLL35f7aRAr9cPctS4HC8dYsX3n4nkf2szFvd",
  "key38": "3YVCbbDSDSZQyvgphzPZn4Dm2WpZ3gWzc6yUBpbGPekYLwyiFAZX97y9vvfxfKcRCmHWSrAKLeUNm3kkefvjHEBu",
  "key39": "2L7Vj4jxTu8VhcTjAkJpAx7i4khwuX6UapzzR2Z75182pHAt3oJ6zMfx15JHL7ceRNdZHEyaQ1igXkH7QoWfBb1K",
  "key40": "5qTeTM5EuCYugsUzQeAYUreNBJ5fs1BjoR1P4so5VScsz192QDUeiHQCDYcXMU1jotbRCCLZAT9X7jHKX1CqbE1W",
  "key41": "3cDkXi3doVeD1fthA11ygSnvpbZUPQniEsPBzEwgQ67Gbhbfb8rh27rz7ZYHCsDUqtiSWayFP4tKYpXuMmNcpign",
  "key42": "2TiKCy9ME5kcaqYnsPcmsNpFcefXkx3UDTdntnEwQc6jkhDb8kjzUEAf7DEM2pVucPGHUfcnY9FKN8mgxaNNtXxx",
  "key43": "Psz82sivjAHfvAWo7Leym1ciWWGwZJDvUCew5ipMX5tzHuQYCPwuyEoFMJqa238BfjmH6vYLM1Xg3CgdUQbQHu9"
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
