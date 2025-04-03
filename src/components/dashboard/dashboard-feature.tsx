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
    "7bCF8xyb1sCJDzhiQwzaZfzEig6JEDewG8eGVNQBmjXZYJ9Hf52AR9zVxERQYMWYKEqwwYSfv9VE7nyUp21yinF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e7HvqVkkm14Ra7rfo76KGQnQmb3edWNbU5H9vYZJ6Ubdi4ct3vNQoxFAeRNWXkwzu7iCBw11AWWyJHVTcgUTJyx",
  "key1": "FYFKztGv6ZT8G9Grk3PhyrFSNRnxN1Phjxs7yjQk52eoEkQf8rer5e94axZYoJgrCKurpNHqL7SZKAngzTQ5xAF",
  "key2": "3kh97rrmrgcjP8RRCznDw2BaMfgwVd87xpkZfTrPeittuM1whir1pxPbKUeZZDyDxbjtYCAvQ2e9hhrTTG2ZaYwM",
  "key3": "cgTZBLXpCywEJHLH14kf1Fyw3N4AMijtQFd7N9Ujinjhvajx3DMece1PMx8VshMk7f5G2yJdnbrGxKNWAyTvkWA",
  "key4": "5cQ1LhSn9nJJoiuncmUXSVwKJiqXiFRPg5UUbqVYCpxKon2aYQE69QVkLRUf9BhBHqV6wYXaCTfmV8DmpC4phPBw",
  "key5": "hLdKUYin5HjqhUXtBF1hrTajetooaspnQcFDEnucV97QXYJ16nb2rJkrpoHFratYnDPjhqRkKZZuMeqBefUQcrJ",
  "key6": "62EAVjw8FRhRZb6nXv8CKXrU5J3iJ86LmKxZuGUenJLwpmZtBoNzgRjHm48HBCuTiHio7fUDdPcw76JXveZ9rFry",
  "key7": "JxYmP61GHCBxsLRiSokVog9GemRxLpQjh9e5jg8AnqMeoSvKKyNvnWfgSNyFrCkc9DDYNCKECUuSJjdkDQNHetn",
  "key8": "4rbjKNjoSneit8KLKrWPd7p1wyYXJi52osBjGutMAkPbDdGpPshF4byC5PaGTE2Tx8ytonUFQ2EVi2gD2midw8qZ",
  "key9": "26xb3Pb4ZhYkBp5X6aJ4a8VCsx6rnbioZgQDQdDxjdBu52pXzLpTbPSDZbeo3WsWKyYFiuQHUq3RA9Cv7vfwtf44",
  "key10": "Bn7Cr68QdCs5StnoLbkXgu8ANbABqxgvL2cBYK6VKgHoxVRMmLnxrdkdDzWC43tJGPbbeHHrjajUgQqJzuCZPoE",
  "key11": "3Yxshk388cCbfzfeigrX9QMhXN4z5pnGRQMKwrL2g2gsa6hBH549ke7bMBAGC1nozSxJsMWPcP7vUBkitciRuSgi",
  "key12": "3Kx2sYJepL1547mDvCdZiUVyRY8Gim9ju5fPMsyW8zBZxsfi2NP2mBZA35vbx8n6B2GNR8deDaNjbPPN1y9TtggJ",
  "key13": "5p3yGLpjjQAWGo6kz4KvmxbwKgcevt2w78Cq58Aadd6Ep26sFdvjvxncp99y3TBSW7zn1EMUrE6dN9VmhuzLGyMV",
  "key14": "4xYQ4MdqeDXqfnQnXrzee7EDirAFtfURJBGmq3EhT3RuRGRtFXjvfR3Um5Ggw3ptoA5nKCF68EKvU7bzL4X7vfic",
  "key15": "5wEJ9wDF7mnNLyUoSsXSVi42e3P624LadDuPPZpSSQxJLaPc8u4cNK6RZintXcVHJyFGP6nTkmgG7UpN4QoJjkdN",
  "key16": "J4avkwBdhzGtpisa2T4HzsWrcf6vBqR8Z1Hj59LkaFHjS7ngQn6XLBbWfpssn5ywkzPioh5YrSFKE29EXMRqFbg",
  "key17": "5FmgsgS1xRAv2kyk8T4BLfREXr2nZHDKZEU5Jm31qVTWh22yTcQuxUJ1St3ajvZZQtcyKC3iaFvNsF7mKorUc6ga",
  "key18": "3bFpYPd3f34y6MG1gYb9D3JUyzEJV18U4P7gDNP4xcXkTLmm83cMEE2fhnDZCLdQVS3vtL7svDPY1LUJktBHHcSq",
  "key19": "WBShTiC49hmRx9dHwBzwwm2hebyy7FPniM5iSbBMM1kmgrEtDC83ZbiYVWHhQcjp45eTPQmg9kJXftGmj9V8D7V",
  "key20": "66PD6zFDSHHG9ciLpAMw2sM1GR3s4tdyipNHBQepe7JDJ61rhNv1NSdtjhPrq3fYEBDfdXPyKGVZbsX9gXPwWcRn",
  "key21": "4XvxH1EwbyVLoxMpxavviUSb1r3fHNenKz3q9qyfqTAw6xHtyz8zf3mVf1B5au4kYUeixHpN9urUqRr14N9kmQ3h",
  "key22": "GDkJSoeRZU721vfy3FNQnuvhuzFiBgLndv8LmT2VDnMtFcmp1LZvGGvtL3e1vY6a6wmiyLBUHobZekPsZtP5fYd",
  "key23": "5skuE5RkfCDmxXw3GqboWEjVCfa9prmxDhvTCiWvbPno53TcYYofV6teRfFhERHnRJemJjysTmRTVZiR6FE9rzZK",
  "key24": "2KDp7b8x8iTTxECH3h85B5PrbizPrBeF4iDLGQZn5r9Mwsb6wuK5v2u751a8GechpVCBoryHoRQHFhZ7TT3giH2p",
  "key25": "2N3bsW5LfJcg4qj8Bdnc18o9amefRqJjpbak7LE1u6JJQ4SAyaSpZB4uT6ginYu3kzq9Gpikg7fGWtTW1DB5pJPn",
  "key26": "bAqiCW7sgbg2ZCbWR8mnRatiMpnKJRKXahhShvPenHzffdp3AYmyNsqrXvUZA8cAWxEdTV4WcXspDjX5HfAK3yz",
  "key27": "5kiT5Z5H3ecTsDJrHwX8kbAib7HLQFC9SZs7UKFzQn5WR1PGJqxt6h8SQoJy4CaSWsg9LyFb3Yaucg6JCNpKBAAj",
  "key28": "4Yzc9X9KvdisdShbRJRwkgqqciHfXmFPaqyJefon3QE1x6ahUpDBp42j4hY6C7ZGeAETmZ96kqLFP1bT5avCy3CX",
  "key29": "dcCDywrNr6RPjQfXr9LDA2ZxmPtR2sySj3Z61LHYrL8zyCajrZ8D2TtSzGq6VnhThpWsntNEvVJeKBkBTYc3SAm",
  "key30": "fQBaMVMR1k7KarrhRQ2ukm9PbrR5xNucB2zmAXijEqZwSFQ1tLzQkUKViee8bRzxpsKqk5nHEWXXQoedPJmkYyD",
  "key31": "2Wpcc7aftwKdtfdbjzxwJDtBkA45iNDzQDaQ3Q5NwDBQ5VmA57d6MF2LYu6bczm4c5UtPHfCkbTQb22VTDZRHivr",
  "key32": "4SxFnLRCo2s5M46sNLsLFAS6RykG7R2htiZiA8RXF3qsaiZUfqCgVKyaC2vz8Jiavqq6DPpzcqBV8pxJdD53Ta7V",
  "key33": "aBM6QbtNJQtvv7ZzQe2nFHngVgPY4qpmjQ8Ggjnm2NzracMvfmuUpLdqdeJdzSGJGziMfYpNRk9EKRN1YKt2ErR",
  "key34": "2cTrWj3wYsRuq3icQCeQRA7JckaM9fK9ZAqhyZCfwWdp3TEdDAzYYgbvoMbbGUjgc6YJuo5NehD3e42TZWErUAmg",
  "key35": "H8z5ce9UN7eD8AmHv3NsLVZB1SRcsf4GA6fwvcge34iKPJiNyChjmuCeCsJXNxkrG8f5feQaWhGofpdkNVtCgH6",
  "key36": "HY8YUSkKMA7659PWi3Vb9Hba2M9Ja2rZnp5JQzqbAnfHQSCGzy84P5Fx7ec9THG3rmB5Z4BneaX6Xqzujt2Meur"
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
