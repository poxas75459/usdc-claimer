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
    "5iub6WkvRXuyMbHCY9FCyxcUVBeJkDWJhut5HUt9uBXDRT1F8siy8SPn84PG89PYw4weoiqwGcSNosGohTHGqyDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WmUrzyDdzE1hieRK6zVPqhaK4NeVBv11P2jvGcLy72qsMkGQ5uoYTVL5tebhSCdVqypsiR9yF24VEiKCFKiF92t",
  "key1": "5A6cejiR9Aw7haWxNuSEvrKd5G2hr9TUXXGWRMEmt6bRjzgMaYN22XLoVD7xcK9zyevTii3dASH1RgDd97cNCzxp",
  "key2": "wRXbiD4vYAkotDk2jJdZJ3DHTYE4U7nihP6G6R973wH1Denf5jmwz6qbbFYiFi1gZiHjsdkDojN2s2k9pozRLmm",
  "key3": "5rZt2G7rV7keJjBanXVrHBjwSnKKmLTmjiUqpBfpUQHqQy8RqV93HtmgeXN98r4rAkDe8mBNweW8nHdgXJ1asP5M",
  "key4": "4qrYPygypLn6SkxVMtX1ZQaZGN9Fvb5W29f2o2U72gBaqBad7mM7uqPpdjsNZwNxadQa6TVLpNqbR71zTPb7utMr",
  "key5": "3CN4mfuak4DiYK6zoXrfiARicHPWqUaKKvGkqDsCuyACKE1uwk9VnLMconMkA9L4LVrsEawsT48j9SXUkPLeChLf",
  "key6": "58Wc4N7pHqVmPstnDAGNceMPGsztypS6d8VV3NiWM8e667qLSD8kqVnnbWSUVodLNhXchTBEfVtrrAw4nWdw2JNj",
  "key7": "4hLWiMuc9hAz6MTUhacZTJMwG1G5Z7oYxJNbbon4dJ34Rogk1AZiFRAXB751KdJMe3at7ttS6xW6dA7ykC82nUKK",
  "key8": "2ndHnA5Z9LXsXUEFC7Pvs3StAsPtUGwLCT9Rt4eAByT7sPP8kzg2QseowTyNNBqk2uhSYP1CJaqBTJvvhZ9c9Pog",
  "key9": "2GZgXG46h17X2LBaGRRVnzzB6ZfHRiMmEW9WRxnd12muBFazXRzA1dbRiomrh2cfEi6CTbEeYfAPELN7z4TSkxEb",
  "key10": "2EmHaD6QvkZGkia2ft2kDoNaHcQD145FpEhHsBQDHfx2NKQdEAZbDVc2K2djGLoQQ5kmnS8DWwXcSjAuKVc7SNeT",
  "key11": "4nAPa3FhpjR41omtQaUUncW6QgbfsDzqYtbhQzmDgMaxrVEmyWygWpdvfUZmaFxEG9NLy4XJJSnMjNNzGxN5Kzna",
  "key12": "Qv3y43YMoZf9BaXnc8LRt6hwqZc731fp2QjQJuChuwfYVwQ3vjNcY9bBJsdMFF533bKzPFgR2F72zAK9sqJa3De",
  "key13": "3uHsonNXEXHNa6aYCpNj1yUnVihWSKUgBqD7xvkfVAH7C5Lz93kbam7M7Afw8j5UNuJqSqdYJq6knHgKQ7HpU3Z2",
  "key14": "2Jgr4ds1LR1Fgew1Y9jeGgJs8kULqAEJ6uQmkyX1CQjDkNvUNq5PWZ9bL8gfwkC5HNCCrmRzQQor7HX2CLPkPh16",
  "key15": "4nxtmUyPCeZu9scHezZ13AuW65yMGCaSxip6myXXPz7DXmncwhMuz3XeJzjbPHG1h9PqCze1fQ2ZDrbh7z4oGFRn",
  "key16": "62FVh4bWDFj1ApFZaGZBREFrmdT3UjGkE8kBXisgPNifhQEARoUdeQfvLpq7FURrbThMCh29SJjuCNk1N7bYDHzv",
  "key17": "674PYpXX9Q1iNMoustkvTLAWnYujtmHDzm7kt1nvDz7KfR2T6XK1SPmP3uxwAnpTYLyPD9EoNn99RXyiR5QtrhtB",
  "key18": "2L4fyNRQjjTo9freEo7PeGGnihVnD8tiXdTRURLnsJS58KAS5TrZWNuTUvyxtGHcxJGNsUgXewdPwNHYJeq3jCLD",
  "key19": "3MXtXQ8P2UH5YQuvw5t83LZ5oVKLUFgZdEG4PhKqcwV4c1rvRt7TBPhdQxn5WiRfqD3tbjMFZydYubeS6mJvZFxK",
  "key20": "61cDEszT5kZcV9zNgjr9APQdTeWiSWbtR8YhK1iHGbJocZZ5eaAcHRCXP7CYYEyTAXMPGk2EjiNVFnXd1izyiHUF",
  "key21": "qfushxMbKqZaFBsmH8pcJVVcmqYGmDShHpyDw4FxZzDs5VD2htks2sGusJ3RkZZ1r7bbMUUiqAXajViBzHAYct6",
  "key22": "5A4C3tRPF8tcn7Mok9p7TJd11BVczi3q71pRxpZiFP4Dc3CJ1rQYQGDree7xnE2qAGzSio9PZhpZEW1RdnkKfVrU",
  "key23": "2UxuLhzosr6iGoH29F5NAK2z1Zp1urB7cP1x8sEcyDj79qFJeBnoUPgBWxyHNGp3bqtbpeePnaThiYNcR4ScBPMF",
  "key24": "5t8h7gB7sdETQXXEuYzUZ5w2TsRQkxSUNTA7WcKRmkMd4uw6SEju29HgHaMgYsRQRLYHLw4zMvUgPaew37ZviMkf",
  "key25": "ihWnPD1iS38Y8y6uNaa6ugVY9QCs1bgGdVcrZBPZs3mDvw4DWg569UBD8uzcFJw2Yzfb9EvdjUXqr3mfA2Gh5kc",
  "key26": "3Fs3fuVR8jaeXbqXVSAvHR5noXAENZriwa7VwHoHdHfohgizPhfJoook5xTY11NiEjc2HzwFkw5fvY33Zh4rwXcB",
  "key27": "2GDb4qAnUoSytNTniyH3EDxM6VmdqSBnQmKobWLGaPjNa7BydUDwe8vLmog7C4dqBgptUWxz3PcRCKtZmRT6CQh7",
  "key28": "61SwZWqh9zJVvrHZ1EjboUzURBMmbpM7mB6oFEkSoCjMVeJN2TxGwB99fMTdxXGqKqcwF6w2JpCAdbJUWDULUT5P",
  "key29": "ioHnxLAdRXFkDStHBriq2eVPp37gynrDXT4Nv4TzTt3cKLjp3N3KJGxBhxsdvQyg9Q4Tzz4KghPepHPQDjQiwpx",
  "key30": "1gpn9NboDUdp37BuSQjeGKGkBsunEBK4HGzw52zsQ68TQUQ4sKxcHGq37HepRT5fiDjUSb7qSD1GuNA3DgJzFt6",
  "key31": "oFDoR9nwEzxeguL9Wq47wduQ4jZjh1Z6rFSWRkvp1J7GMr1CTKh1Y8KjmLY7PL6cSmzhNRTT66WCyi6gVxQu5oG",
  "key32": "3b7PzjYonotDR86UQVtvCLWK1g5emoAF8XyvZvyCKiocgbX9q2EFYDoJvftNWTnAn5yM943tihK21wcaZNbaKDEN",
  "key33": "8d8UYmcYcAKUDm85q14Qnd95o759CAUPmMnGReX2nATTzPzTPFme4cw5v2htMY7PPJGmirX3wbYCEJ4GwB85sk4"
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
