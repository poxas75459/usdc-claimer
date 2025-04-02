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
    "5GMwHPaCbhc6o9obQ36qgcPAjRvGB32SwARbkaRDfm5Ds8h9Y5uNbJUfebcsL8PbKvAgcqeGJw8CjSTMdYMrQPrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R8nXruptmydfVNsk9vJQNXVPCM63CrPAvPdLT8juEBa7LFt7HX5sxN75Fc2QjLr5bWNQKrusbk5xrPsP6AQ6NMT",
  "key1": "2H71XB9W82ZCyULKkCnrXyYsdne38yWUopobZsHgUuTCdjfYwhPn25qKskYGZQ4vSbvoHK28p1yAjVcGXPfDWnak",
  "key2": "XZxAEfzLbbgAtVh73ByojyQsuYUAVfZfSeHfCAoNzc6nDdzjQxMpKRd5zjhWeyHbMxs3qLHWhoXUYtHR8zfLcFx",
  "key3": "4D8ERQuiMcKKd6uNdBif7VqtXmm41o2xusKfWx7ucfSrVSaZ55U8bN2KXUB1prq5Jm8TVtjqdKH9b9XymsufULqh",
  "key4": "67GUvWW564aXW9vuy4weUuRXD2VepB1iyvkfqCSvdLcL3PzCxXTCTf2C9T6HU9zxjSCZA6vpAjZ2pqCefNZhh99M",
  "key5": "3fwemA3iBJXcJGomVaa59pvr6VmRAjbym69EucG1sYkCLHCn511MckMnfHEK7bf5LxWgN2b2UMoT7TsbwUBPoWAz",
  "key6": "45kSue1xmg7WeJ3YiwjCSgzPVTCkz3oFC81q7KT6USzsVqx9TrtmafLMWXLMb6ALBDxrKRdXga8TULvbPgY9KiZT",
  "key7": "4FFm1r1XFqcVcQDaZpgq6ythqqEZPQijt4hu7zVxBJ2yrfZf3nTxHUpvJb5E2nox95hn6yv7JenuE2SjeiWv2npc",
  "key8": "3bChqLVKiheqsoWFjtaJJtzRAKdfKMZDbV43XY6hK5sJddP9cEHoyHQrW2HzFD11DCwStR9mHqjBS5UxytBaGG4s",
  "key9": "4GPWvtaX4cjEXxY9yZde6PH9CwsDadcfshbFEU5HABJdPRxT7PnMUH56QVVb8R2h8XhsSchdrG7vebMKCNbKp89",
  "key10": "2FrQhz8kTsGwGGmnNkv6733ouX8WkuHCoHyjUSr8PQKtWXAWYN6E1DNSFKsrrDysuTF7jxwYo8ivyyssP1aumc2e",
  "key11": "32QdbjDMj2Ue353SZH1LxJTo7ZqKG2j7APsDUTgL5C5CYMML7Kpi1CnCd5dnuED2wrUTZoiy4h7cqQbS5fKQJkk",
  "key12": "2sNmWgsfwD2M2bM3qpT5VgYLsSo4g2LrC2qM3PhUuaaf4QdyNeKgYe9M9dvNLM2xxBCDovxVvU5PMfxqjhiucgTb",
  "key13": "L3zk6nbiomjLa7kaoBcvpfEkeqFMPdSkwtJcb1rFXuy3WhneVG71389gKP8UGuhnuKMcsw65xSxh2se8JMWB8aK",
  "key14": "5KhRFFB1mbuqd9QSbimhjcwM8xWNDgTPfyGimsM8WqKEMX5ZncTuoNgERVouwNdNGcqrUFzrAAuGrv8LzB6k221o",
  "key15": "43Dus81Eu2e1UrYeRowG6Qmo8m2WRJQt34KWdeRz2AfLdfdZeYehFYwXruNKJ6fhDjXkjMFKWQsFVL1dZmJ3vi7g",
  "key16": "4kuqEy1gHrnHBJBbbZSaBP6xmapuLfzwg2EKQsNVSNBYwxTY299tbAMvNFMbYJ3beRS8m7yuFKBzWXJnzjHZZDst",
  "key17": "vQRgj8kXmDYiioxWnBnnkAVWQyyhBjbADUwtgZPSKo132XTAowye1X7RQZ2XAj56GKcyxYUhv9iTRoH5cq45FTm",
  "key18": "5NJ7a72pLYn76zsmtxTBxtVuvkLvu7Dssvj3NCEjoS1Wo4Gt31jhwMCXYZzk4pNJqcr3sBQLY4ZCfQD6B7TrHQNn",
  "key19": "4DqBGz1PNbqMu7rZUYy1VHuwLJw9mQSTCwbFPhGdk95HGNuecBPssGAKnCh1Kv927Em2UyBBSFrJvQAcJUrGyCBV",
  "key20": "5sNrgfMw4jmLUR5Hbo75aLsp5AUdwYFrz4EzdmTbxsetg39ucnQyMR6SRPnErpwyiutiDYwfPxgXVLTCRXrS5MMX",
  "key21": "4Mfcntv5UetbNvPSQnbxetkcCHCbg6QCsN6H5KYQf4GagLgep19V8BqMQC8kesrMTmj2mwgikXNNSYG8B7D7epRe",
  "key22": "2ZKNXPDFfstbWmVjnqbiN3pzhxhBdH4zagndUpGNwLqu8EwoFdkCgq9DSKZDcVV6etQR6ziKkkJ133q8v7VG8s78",
  "key23": "3wQCwTFZmKeUktCUnw8SSeLDoQkbYwoRomt3BRbWvceQfkbgBraqNzgfUgteFSAckbDSZDfzcM4YJq83ic74WUuR",
  "key24": "iobkq4fY3Eb8PT3T4b8Z5wDnXaf4BAVdvWhKPRb2BW5EKFP6dpqe4DW277FuzjJqZEZqEJqJQinqbYGAMXjNzzN",
  "key25": "2NtUakRrabDB9gHnr96BPWaKwRi6hXxfkJebqEnYEngXtdcTbM27pC6pFBqVivCEfTcwnEPq493Fgu3nCnCFrkCW",
  "key26": "2v432UZGRXNxa3svbQen3AQUq78gj9N74hTvwa4zkNFfTAauFhxKjtwDQVAXR5CN1DEzA3Df8TBA1wSFYKkSkyQX",
  "key27": "5MjodbsUZnc6osSPFqG6FkXFut2fyeSCEq528dr97i4RngF9ayxpGnT5GdcBiMAzQ5p3uo4oSNPcBLyQMYJKACMb",
  "key28": "2NFp51B5ytAE6TW94oSb8QX54tpeotT2fXt4PTRGkWoET1UugxLm1tY5HqpAhsS16ofLsKPffJEsfCtFD4zEgx1P",
  "key29": "5Jw1vGH8zxrLGcLa32JeujFdAsDRrzqnqgobdsWHSTC93G9j5SUD52MJPV8wCYm2zjQkSx9mkSkabhhUekCAAMto",
  "key30": "4MM4rUFZhfLRDhAfrsinQjgyLTCHPRSS1aQoKcHJFJQh2uU7vvGF5rzP59ch85pJCixZRdGzKWZR2wamsXh2QU4p",
  "key31": "5yC4YNqswagPYbk61dgLWH7v57CeATHEjkn1rTkWsLF9sGkNr3k5uug2a2VVtXbZPExFjNsfnJLvZvDMVkjD2gVH",
  "key32": "5bNTGT1fWVmXWATNDAGRL4uWGSdBmNW8gUjHtJJtwXjsnHjh9qEW5WGUQ1fRuWxTRx8KyWA5dufALyP5w4KVKtSN"
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
