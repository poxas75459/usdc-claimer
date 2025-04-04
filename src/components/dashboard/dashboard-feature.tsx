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
    "TBgkSFVxfpwMFjUmEiUSSaeqkqKVfCek2vDeR1S9MWinszZSPh5pBK4zkNgrHwmm55YNtGLZmZtuydQmsSeNay1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VLChzR8cECqWgsMFNqDh6GzisvRM4okJEdFxtZuiHMRPLtdqM2tBtrK8C1Am8zqtFXrQzRiDabTYeebL15CRK6d",
  "key1": "2ZKViF2fWVJ1kpLogf7x4LcRPpYjnEA1EF6ysEh6U97Xy3pwtky45gf15TotLL22a7GpqGpXguT4o6cpwseYummg",
  "key2": "3axkiJeVnKeTMpoZx8e6bsYcNKJ6yCfAk4qdwz5yrrXSHa55s2d1BS8DRxmRem9KiXQdBKUPSsPUSnmJgQjkaxgK",
  "key3": "2YHBhpr7XeSH7SUaa44zr8aX6ct7WoK557o8HFudZqCMRT66Uv5LJpiyRSZNt5WybaZSPXHnhAKWLMZfpninHobw",
  "key4": "YP6d62QgpPCvwkjbHYoCa5oQg6YmY35fCUmnoQyGiQTyrjgUqFiFGZBGWgaYBTHpNPbz7p9YAYdbYaoxX4dJPyK",
  "key5": "5yYHBYPEeKFKAJ5GcikXcqioVYV6cbu22GmrV6KGZYDj69gA1bfY3H9LsET6Shu8aoFJwoMtq1qbtLe4kNmWif6R",
  "key6": "3qAXtbCW4mv1PjvvnarNs5tKVAMxRAsjHQ3Hdi2pCiSrS8nwxUMMkgciU2gf23KnHTrNTaw1F9SVYobWVbXozLG4",
  "key7": "5RMBzTytogrwZ5KxWg5keouUjtzcvoSXFHir9TrC9CsFeV8wXyF7dC6z2QwGD5bVTskUP39zfm4B37nx7cfHWWDM",
  "key8": "6C3k12emhrBYYDKQT4zpwvLrW4sYRDg6xa1nexEUFdyvU2NFB7WaNe2ks2CBD7qrC3rHhUVSniwUQMdFsmTi66u",
  "key9": "5dHvPyQYReNqXER9LgnUHkv7WAUyiMksoz8DQW9aiXhKqygvxK1Jx6rspKuBDpB8zGsmZmtR4SVaAoLPXdisdXKq",
  "key10": "2Bch8Jnx9Ha6sd7w1Dvw4C648y9o4S8eytcGWbpGsX3Rko1ept4tU2wq8ShXGndU5hhAum4aUCgff4Zk8k1MaFL6",
  "key11": "4z83aG5JQNFjvNbRmaSZXbA5tkbWKFhA3xkigSRsXf3EsVx2msydhr2ygaVLGXWqgZ7LhERfigMxf7ZqwXVbodCx",
  "key12": "4koKynY8XwENfZdisDjT9PFciUDkhMEzLaYtMVHXENCj9FGA7hPbgM2tqxxCnnJQuSM4BZZZ5EkYDg18t9CBTCBj",
  "key13": "us2rDoPn91q8BcQGy1PtaAKnz72ZEnq16HTXLuvFVxttPoMXqq84dv4f5cf8Xe3Kt3vZ8XJjiPC87vLLj7A15Au",
  "key14": "3Z723P9XSh3SYo4ytmmfXxbqhoW4kTuYAuiNaf7ZymMQQZ3ZRujyCT6vtANcjQNrqkjho3R1LK3k1v7Avn5BKn1a",
  "key15": "53WyqXQncTMFa8PEEpqfEuEBbikVUAJk1HvonkBTMCTkXNkR7upB9zEv6cDXTBk5oPHYA45hUZbF3kjLjWfyPTrj",
  "key16": "knRSoihkXi7T9YrywjJEWWiyngXwVrJvjJwskvmo1iV1dsnYAK7Tv1pbr8yToJYfi6EYpB6yFz3e6eBjR7zh4aW",
  "key17": "26GionYQeUjozwz9qmRQRLPKYfLbdGh8HFTUzcnYWBnvVv7n184PTbfcx4oUF6G9xUMAjNK3s2NkrPMsYiwFMWV2",
  "key18": "gNGJDhE6ySXyPyJbQaXtqHZQpf5FuQXAKbtXJxWStyuM441jGCBPL6ySkZcAjH8uj6yFjSiDX7oHy6mM4AtcKmV",
  "key19": "2XHcxFewXkY8TRNPY6YVwsPqMcbVdCpXjRhBvtjqrXuMiXmSMKVEi2GsRBkLwiyt73PFEtzPjGyasGoZ42kqGNq5",
  "key20": "2eLoJgNdCoGxozG5U2xWrSC84yY5r2UBfssvnSGWwaWQ5bkxEcHmvFxaUSskEKcNDRijC3LQo7MVUUrNLrhDDxJ1",
  "key21": "3GqrZchh1b7dy4geTxEvu428cxJ1henj4dnrwfekuMasN9nGbAjRKMyHKJPJ9xc3Ez8ps1J6W54JPb5gTQkTRZen",
  "key22": "3g29py6hwACx33foBwCim51pHmNF1BokSUPh4AYpMyd9TGWgi7zHnM59VfSseor7qARFyJJWTCFZZdb83SNeHD52",
  "key23": "3V3znBfYMXggQwFcfKZLMBWsocjjFVzmPaZP9b3PpmLGYyKBdVz8R237hCn8Qjdpti9BDAr2haP1PhmScfFiQ2DF",
  "key24": "4CXFRc1M62EKwHS2Kcbtezk8ByiyozN6PMG3k5FsofDGrgDcNTw2Wdm1JrdKYQVHGkdSAJTeQxAE5LxnJP4GKuGx",
  "key25": "1tQ1Dh4FEmZw8SeQcQDg7SyzwRqHaiiNEb8Hm5DzD2YTJiJrWBePLgzFrkoYEbEANx7xc8frReheh2c225Q6YT5",
  "key26": "2CLcWpQ2AWcis7VAFojVJ5r5ugzPDsjrKzTb5bJownDMvW7TLFg4E2eeNpeTRUhztS2Lmu9WBuFDkzs21sM3NGQj",
  "key27": "3wnW2U17iuZb3M6uDyQS4AYJCDBmVgsdQxawvyD4PwxxjvJs6B3gZ3uAEDj8JmTzb3uhV4PRYEi72KruXh1PcSFY",
  "key28": "5K1J2wqVREqj12imCFUY318sqBkRGmGWJu9Yr6MNQ7rkLb93LFa1fUPc6WANvHPyUTjmJB6s2rZF8JLZYEr8kkGy",
  "key29": "2xrr9WZCpDrVMzCHQhnP7YQjMaFsdiY62z3m6SLaymMuxu1JR3o72BpxUQj83RSn5y5uEuqcUyi4mE2zPZkUMkSZ",
  "key30": "JAnz4GSJnrySEUQtXDh7im9pzbT3a6RaaLyRhgw7wP3quss4gDHwxD9f2QkuVqaqPxyoooFQB2zPcjpFY6uz1c5",
  "key31": "3FWUQ7pLxHUYokSWSTs9QgsdUMFbE7Q1d4sXyWsZdNT23cW8Fu77EDJfFbT2vPcmCsmeQs4xcKMyE1YzTJTBjvE7",
  "key32": "2grU8p7PqcWpjpPfwkt97bD5bSA5iZ4YvJoAKZwviDUuKRxMs167sqqW7N8HLuejQHL34g81UK6VDc3VzLEMMtkP",
  "key33": "5j6Gw4zMt4rfDKaLM5x3w3AphNL7rEvLRh5GepM4yZDtX8t9WNLhkw1vRw9MMDFU1HyasknzK8cfRpDbaadxug9E",
  "key34": "2sAMJXKSPrrS6rzBDaH5Tf7G7Ts5aXtXJyDrqq8vjuSp8ATKAJEK9etntWzNfA8koa38E2oSg8Qa4Xro1ggze4B1",
  "key35": "636SAGMVVq9Y3ShaBGLDLvHTZiAPzyAM6idF6wzyhNLDqpV2WDqxg58NSJzo2D9JJCDZPkDH7MKRU5faRvHPxTBG",
  "key36": "5h8nKYX1MJ2ugTgbh7vsWxLyQvcH1TNdLMx8t8rpeMfuuLa5uzqVFyH5vvPRDV2M2MoBFHybehnHcM3aC7P3Vfs6",
  "key37": "5TKq14RjiRF5DhcSeTDtKBGeKY2eawDAnrncnvL7uATrCsRcQCNG1T17bWs5Rd8fBqoB2pPqftdLzUw8D4MHBG9k",
  "key38": "3fyWs4LvF9cwvmbopJZJ7LPZzbJ3GxZQbjC5YdJUPk1Ubc5q9Z5KXWLpC56mSaghcQMRUEgQuTNYYmU2nVGLMi7w",
  "key39": "5YM3U9DNLMfrZijWvjLo196rxZRzHioHryGZNVxWDEzXdjjXRopMX4FKQbrTLG7ukzNfKbE6SnSz1jtn68zodb8g",
  "key40": "5QhFkcftBkZU331MN93Q4LsdEYaswRGwDSaZZmCPuFmbqK365xp6QcK6NMqj8oSRMobKN1qwzWHWe5JzyzzUUDiH",
  "key41": "2RTaeWCJBhv5ksQH1m3Z4pjdGWjeQap2LEgFKc9wCjyQxckXddPhzBrYfmiWXcRfVaG9vnKYC3HiK8AVJBKsvVBt",
  "key42": "4zbZrHGiszZLndDzbtyxmm9ko2sdaAsJDxMxv5vNkyHmmyahf7Vmfkzake1ntzFLQZ8zCFDktMh27ALQRqUEH3vW"
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
