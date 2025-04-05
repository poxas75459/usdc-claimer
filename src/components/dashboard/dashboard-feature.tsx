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
    "3EdWmVcR9SMXVVQH8WB4o5r1aGkpxfb5PGCHXe3hdag9bhQLMDtQ5X7UtiW2WWqGsr7QDDnAXDwB8E8QDzQmAu2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42iNvV5gfvqSQfhAF5bHukoQXn43LEUZ7rb8nF588MXPcKMHaqtghnAyqwVJMyfsagKNCLXbA7qHXLYBRQaJH4ic",
  "key1": "6341MWTJUmgFmKSMkmWcHWhcLNhmmRjFZ6fwJ6ocY9Sj1iurft6SXdApm7DY9W1EsSoBL7w36irS8iR2vxTaS5wm",
  "key2": "3T6ahJfs8PuJznZdHSCR3WGsTQB49MzjfC3yQSnJE68XH6eUGC6UzxUjyWJy2fTRuk4oE1E9PbfMT129nuqGVUrS",
  "key3": "67HjtGKb9b8TYHvgLE2aAVQDJvk172RgEkQjmVLz1UPno713cQVGoHQhwXaMREaTfwk6JK8xywf5AGctaBs8Uz8z",
  "key4": "3M1SNWBM3UivBuUJtUXFzAkxTUt9m7zM3LmBzdcYnYqXyudvEgTDZa5yP8wGwCFAMi7uzWLtLsgyBf9C4FE84aip",
  "key5": "3Sf8SHNR1SVgkmZN2nFu6vcCznPYJgrBrUamsoqXxy7PkwAVPnHSuFwpEL3468uskmgHSCjFAN1GmjUkeSEKXMHf",
  "key6": "3CKfASrxoGPeqbeCJwDudGZrNjSbphn443KutwpjvvUHj92NLogVfehizn6sGHb6hXmkzsH2ybvFdyF1iahF5Lvq",
  "key7": "2jnR5AUXNSZha7aag8ZvHdi4xzgDbCfGHsGiyztEg68EsodiRuD7RfMYA66imbhDqpjz46XUihuUn9vUsVNpFRpW",
  "key8": "41jtBK48Eh7nyMF7MffVVVwJETeXptdphnrQk8L42AkM5ALLNn8qcUCfi8J4bADQh4ac8hfbsriorgbRRcgFGy3F",
  "key9": "4iYmEB6XKv1EHQgEEwzfJggqNKCArEhjK5Egf1Dn1fsGG2wpHj422K4xCoJEXXaiayWoP2U7moE69LwH7JAnzMEf",
  "key10": "4rn2PPC3pBW8pBzYzKN94HjC9Tw3die9Mw221GkgGh1z1wSGesc89sRyMHekB3SmMps1Ga33t9LcBJVRRBtw8y5F",
  "key11": "4Jfch3v4B3AD5nDuEvgC359KYQgkot2Jr5tZ6ziNrz3qCJSh7FicuMroLT4vt5BpZFCF1JEW5Ph7LZZmJDeyngSg",
  "key12": "5jp5pgW1zZ6tK87YKLPr3NpAEFqSDdpmz5VkELRovH4vK7Dntq7jGtRQbBW8TeqFebzRJbMaFdyFdEko82DY4orS",
  "key13": "5iLcanaGseR8Jkk8LkqfHCo6PB4c3dPADtVFmWo8Kpjw8Xfe6bAxkrc5UmsEYCC9BJbRUUttgUeusAdSzH8gjJvr",
  "key14": "5cTmS1uRys6T5J8k5A8FRSE9BpodVWPPR17M82Ffusnzq7Q9RBtxLRB56Z3rTF1iQnnjvLJNRZ18DPKiNwXHR3TU",
  "key15": "4x6rhGgyo7WiBXGgko334UUe9FmnWgg1nSdw5WfyvxkJroi4RU3esB1hsm8b1iuATQuLJomFTFBw6k2QJYgCMvDN",
  "key16": "2u7JUipm3MV5rCu9mhLeP33NSMxBTZojBfkmthym452kk13nPdVwSmAVNAJzvkGvE6gytHXXmkWTa1hLes8dJVHF",
  "key17": "4mEtZDiJYfskSFVuyXVA88nnkynU65etGRo3HcDQW27mDLezZYxr4CwHLWER16nu6J4c2RysfdmD9A2LBFfJWSSC",
  "key18": "ikb3sqjXBAiDythcriueLYJYEEiH8V4DZgwokUa5HxWRukaKYEZ1mcYbJfTAoYNUYkVaHc3QphDQjDb51MkDhP6",
  "key19": "3cHUvbH9k3fVKQR8HSEyQGYpKjtf3e7UN6eCh3rNLhQHYotPRoqQweqehQXGuC1h1qReEyfLvbpv27AfAcuqonYs",
  "key20": "5yLLZh4jVaPtEKt6rv1vo6NiQK1ekyxGydPizJamLZ6XXZcyZjqsBboZc8bqgqN8CYjUUCxUueAyti1ek6eFmBcP",
  "key21": "5TmZUFR3FNLkFfRXaRfytWmzyQGM7DkT6tTzxxS6qaNZPYAxeV8z4Kb6eKB7RXscsHtBQhXqopuqd3WjfRbgsqZB",
  "key22": "gU9fq1aFJzcYj618izFT39jXJon7jrFG7BXbgAF9H6fdtkWD38TdZkanShEFobzohktci6bs743CqH5kCEBpVVA",
  "key23": "3EMMm2Ha9dSjzTT8zFHT2WcrSBnmQgU1JqNFmwBokKd3tKoXkGamvrMdfJsWaMehbiJGiDicxwaxpZPy2hMep6km",
  "key24": "25wmY9bEpLxd71YvSaxPrr2YYnnYes7mzz7f6zbQdsqSudj6cuKjxVarCcSy5xusGvL6BJeKKXpWXktwFPvhQf4q",
  "key25": "4Lbp6vGzxAmPTxQvCdLMf4ErgURXYrrSNUJ3hCcqwfRfXax2JxoSCnZuxAWSRmuVBV45Xfu9uhkmCzo23zbRFebZ",
  "key26": "VZnMkZv2S8R8z6BKysoNRNk185watkVrFZY6hicz3C8nn1BTzHUHXThKCJszAhXVZ3KvPXUz15dwHqetajoWn1Q",
  "key27": "5mCGdwpLcXij6crsJifSQV6txxPMa8iXyVRPii8rhX1Loia1xDKqpkTzfszenbeJnCoFPUMpS7cxfXvFUXZo5TPH",
  "key28": "pVhhyMsGFYhGyi9zsJwiPmhq9QXkCBYXzUmiHMmfauHV8D7WBPnFskH5Ey1mCGdNGYrXtPuLtp8rtuFsfB5hfUp",
  "key29": "5jP6HbPoCanrZYLyVz46in7jpnKCRHzRePAnFGJo8ufJtCVDrqNXAHpV2QcLxF9GU9dpgSSLqJy9NdNB29LdwecC",
  "key30": "2ANd6tfmEDJv7WxsTfGd6aGjXsPw45omQUEEkK6iXECstJkGt6rpqrBNtiewsD62BvBC2bsaQP9iBzhqXge4rwoy",
  "key31": "dzGaV5N5e7b5S8XjPgQrkMkcPqpsVDyUCZXCzVpLGzDxje6tRmttpbaQk8CtQ6P4pT19WVNk3uTNFsR69wqpkXC",
  "key32": "2gVeFvqEAeSJSSPUmgPuR8GQsU9YPqNJnAx5PihHB7r34SRwuBV7YgmhbxnCSiZ52aDZp4k9TXAKGtX1UDn6shaa",
  "key33": "2KBUo7H7sDRd3mwJ9aVFU9c1aDrvsiJdzst6fERgdYaeQnTvBLc4PXreVt5oWDkPvboC63W163z3YcE7QSEboexd",
  "key34": "5ewKWtfURsVpbQgpFdR97e6sZXMKYp6sAGNJASVmHY4CvWPpRpHWA99Krpy6KT9f6TMaG8VzdyNw3NLXDAmkAmgw",
  "key35": "3dBo2Af36BZGoUNSjMNAL44bMAFSdfpEYY7JspGTNy6DDVbzheyMyw7MXcWTn1wjuMqtHJZmS9kYsgwzn3HzQ9eJ",
  "key36": "4gB2fCZLzFFQPu5qbfTwk1L8P2rEJkuFuaMTLevryegus2cgmbt7LUbt5PYMUuDzrCed8mCKBbo3viBryuEfs4Ev",
  "key37": "4nCBiGnhVPZqsckRY3bUuatFXtTQVfbfmScqnvLPri12jMgcf2GXvowVjKPWMUhM6fAHAhJNwQjPpxV122yY7CPx",
  "key38": "2sKypcqoL9W2xLNHzZuLnk8YE7yPoKzYEDPhXF92XUsrXCZupySRFS4HnnfmB13fZrxayr9noNBy6KEmQdJBAqfP",
  "key39": "3PanNhTqY5xtgXHLSaPVp5JkediDnLzQSPZxT7GLuKc6yHLVPpMNGAUr56zF4Y2DGNKzSJFx8hQ2WTB7gq6xZmCb",
  "key40": "4egxUdqw8uu3hTXYftCbrggGsYPSeUockshB1N2tajMMcjouXgVootKmR6tysqhdmeHC3Bpjy31aruQnrQd6HtqL",
  "key41": "3CguHYevrdAa35AYdMCWHPdm2L5axNxmRRcemzj8pywWuy5jocVXH7PcWG7ixWjcCmqRFAPWDBm3k3uQCiPNMC74",
  "key42": "58Gsnfjo8HdPaYumoM88TMBs3Vv2MP4xELqBGqtiRHnDsv36fEPRWCaHaPTg7vMvoCQVVV5qTJsbPqQjtyegPSrF",
  "key43": "48Sa6AeULakWDnbzLq4GZSjXDFcuLToxdaPViF3i899ad7RkYmdS3oF7S1rfGDuSTL63rRMjX2cUzP7CwtAyaezx"
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
