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
    "5d712NgtK5dWcbJq4efnmmQhQxiFLGLLEGjSqHFytTxKYV5H6S5cnJDDuYkuN1FCc4DR1xkFKDf6PJqo5eaFsosW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKhiawZXN6DKf5FhRw68dBwHhKCs7jN8xFU6bVnY4FvcRUrzug5VD2LVomjGLCpTqx3DzT7cPpxHswbAzYTws2P",
  "key1": "41GZs8jM44DskMjceHEp2qjiuh4G6XDYnNbCoy4o7twHSErbPoCRJom4n4eL1PCM2j1cvmobpFajgJERR472zaE4",
  "key2": "2PfW5u3WETTegLyZyhvKu9SkCDL5kdk9KRLPmcDsNV77fNiC6uMMTWzogAXW4wMtAUY84GWCcZwdFHpsnp9hM1EL",
  "key3": "vwm5npHBjsGRY9tCwZABG6UVC32cQfQeCesszTctX4QAA1xgNvN3U4mpXdTbnVLanLWCKiSRU6dEg3bapJZzvuH",
  "key4": "3iYcyAgMFM9DJs8BNtrGYwQDyqGpaknkqTnVRmdyrNb3Rp3K1AQZuEpp7agn2A42v8JwFvJRUJABFbmFm1X5oSRc",
  "key5": "AzA94Dc8daJ3PCxJsyS4cr2uEGRfzMXUSiCZJs9nbAJcxpMgMV2awQmPrjXum5L3euRgHfFTaziEKjhMbDJfsCC",
  "key6": "314ajWkAnBZYEVRDwnwRLnARzdMdE51xcXK4sdWu4AxgBnAkh5UuZXEBCNNtPu8pfprGxKwS8BkSaM7UcyCRR2gQ",
  "key7": "3gXBGEaBwxGPTUrxvSDWYbmhLMPHVDNYZ1rdH1NwQPaUbS87mwthB9ZusrEV6XN56QCyEcKi88Aq9MMTYC7DuB3w",
  "key8": "F4nCmC5MirQ1dvTuy1dWUthBU62361gBopCDnc4fmF8UDMuUBk2ZgEZMGVg5XJZGhsoPH4Ln75eFfyt2iaNU1zn",
  "key9": "hthDgUe6rW9hNCdPxzi1jwFq5hZNCVwF97mHob65SW6NevG9qEwtxxV72zyhyYKmPEPWYQBRLQdpWkuRZwdqGKT",
  "key10": "3tH3t7hVVmgKvQQjjDGDY1HNp38EBSQH7jZcWxDyi2CBPGnLK2KFBvy6dATvqqbAHrDnNH8Bh2dnSrvsXjYNpjnq",
  "key11": "2cmnQuMTRiD6hxZ53BF417nexWMWZZA6MpMvyPCM1VKx34nmC9oJTPwYQ32CtEsZVHR9gfVYX2nCdnqN1ypRHoqt",
  "key12": "3imiFokAG1pk1wrr7c1VRyLLDi83ZC6ymXippKTq3BvrWVbpSUqhtimwQgZ2WySuDTv5ocQmt8TujDZrTUSdVH3g",
  "key13": "2ZpJfDuhL6Sq8Wab78wB7RS6vhNQsKBbDx8dLrrV7tHLNCjZiVgsfm51ewDuaM839355h7e4nxB1yBDrHoyX7Fk4",
  "key14": "zjedK5vcVHjDj4vtdaYAjYnXWjsLic6tN4T1vASPX5JnBkuWLNVc7Z3K2ZqmRGtnGt3HnP3Fs5xmneQ3gUonKzC",
  "key15": "673C6d5jdFhcFhE7jYUAmc45SxckktdUqZFrETjXU8oACRSQPdwKbb5S3wCWJVkZ6nxNWDhoGoPiibcv1C5SfjTQ",
  "key16": "4mBxVvFK1NYXpSnUoaEQDXTarQux7GAiY8H6wu87uuWbEZuCLMgPUEkTdaXCpP5o8QswMHDfbVPViQecDUqNEYRb",
  "key17": "4m6QGokLeaTgyVS7RBJZJ191o54CCJP189gc1BqQwD74GoLMpd9wHfdW3GGxTv2i3trk3njCZ2Snp9VRDjDi6ryF",
  "key18": "3CcP78bH1xKZ8d8ooVHWs2k6CDCd1Ag7hfmt4Sam8zayHF5uifd7ZVeDAR6VpaAgUjabe2izX4GAEhq1D5ZHkgUZ",
  "key19": "5mWjFG6BbZmiXQtmywNgMVrtHFAjH6i26qvAnSyLkCFvN8tZuR2K4BcHtuJmY751jytbiK7batWM1veniy8FbajX",
  "key20": "26zQ4tzofrnxVcRC7qPYufTDw7GsZSmE6MdkZC8XWEAgPehbDcNNdnp1r2DAqDdZuEG1wzm8GSXyMZ97EgG5pkZk",
  "key21": "34qBLeB558aTSM8ABzpWGh7NbbFksWGGufZDqdwAx1q2qKKHgbyjuJVkRKWjU1SKNyADdX49kG6GhSGwrJnNpYgy",
  "key22": "5VBmNSZKLq8kYTYbhc6dsPtgp7ojjsLbEVeksKz5zzStXDn364HE1ytjLvZn65ugfBffifDq971R8CGqV6jJpkDD",
  "key23": "5hJTywKrpxcekSe9d9aHBShe9puAcgfc1efuMSB7w8998eqUcuy5TngJawXvRCcXjdyoGdLypYn3uYoqb1jKkxW",
  "key24": "2CM1gJCNTCCPXVVsPS5c5pzxx91ejgcyPNvxNzQSzcj9MYHs7B4oPW1UKy2XX8b1fgcj9nzP3RXTjgMFLFM7SRqa",
  "key25": "5e3yQtJNRrgdKXksdni1QdgMyAgBL7zuvpTq68TwqAzkdphT9rqMtu1ZPnLktjuC7yE71AvNr5eaPSeNdbJfFU7a",
  "key26": "5P9y4wefo3N9QUZrmA3T7dEAyLukPEYpHEE9uDwJ4LhYHqGGn6WKZEMAvvWzgNxwCxh65qQZGKBxvFXDufDJhN2Z",
  "key27": "5QszwrwYhQKHbZuAHryhXgWA8Gpaq6TLQJ1BLxLvvHZm64EEts2hJDKEQCWckBzoVeJxN77azPxKxaqrtMSebc8D",
  "key28": "xpmrGjuBpUdJXZ9234KqDjF4zsKR5UUiTVr4sdu4NXKQPKJKmc2sVTMrMiqhVnszoVo3rTgrrJj4qoCJEotgiXQ",
  "key29": "4EamKj5p19FvHvNWRaZF3r7QQhiZqELQtqZeAUcW18VFu7D5ALXe5cxSjRFgKbqQg438YxEnxx6NMMRCj4De9r7m",
  "key30": "2YAueNqm2BmUrtzuuu6Ub5zwas5BkeQmkABku2QchjRcuqXaP2hKC8xFYy8nKruPv2VxrgfZZ1Xy4TPWjiFfZTEP",
  "key31": "AjTmWa1Wv5vu8KZ9zFCCFm16sJJy9FmGvHkZS8Hz88RyjCgsZo6Ra1HjoPijG9EXHgNj6jLy38GamnZAvMb7aVw",
  "key32": "CTsLdwT6xF94nrBfmGZ4FZKGkAVqCxgNauZhoDbneFa8QCidyN5vXMiHi9Bhn9f3ucJWfF2jGGwv8m7jUmGiMqP",
  "key33": "2W9uiUEkWQwBC7wrMf9rmp4rbzSSsutcvxHpaAV5v8HzzmANB6ahp2frcusifWBjXWafqhoVtgSRijvJMo5WoLbM",
  "key34": "64BynqHDRDonAz4nQt8UBoZnw7t7ddaqatD57BUU5y3S5WWBDh2XAhYp2jLZVifAM5L2RmNovQFE8UBNiFbsRba4",
  "key35": "kWmNTBwLuS6yWw5ePnXSNEsRfZPAYrwKewKsLK78ThfDdX61v4wC8zDZPPZP6eKbCT6tXtxBXkgLXbKb3Y6q9ef",
  "key36": "2wuTEDXTQdZNCgB9gZvGEmVZUAhBD5tisogHhPVEqXVvxp6esqJSoWZoKDRWRrTqLVzYNEAm2tAUrvMWbinRt3p2",
  "key37": "4JKutMFY9oXB52VqZMov2t5aAV5vPLAUj18B4LFUqcfB4L1msmkh3wtDdHSbUJnvNPMqFoTXEreNA9CBHWVXTqJu",
  "key38": "3iLTqtWX9BoRu1dyAKkm7ntQJzVTxxzMSJDvtsNFrQKcPXM8WhVhGwojCzdtxKautvSbKssPRnrd8SCPYwqXJthS",
  "key39": "3w67rbJztom2yFxPS1f9brQ1YbJ5tL5a6ymebd1Wvej1rfTRfreYdQvWdxMSuGZjYQBHUXnPvPobW6ic5yj8CGtk",
  "key40": "62BmY2d8WFox7TshvGWEwbP1rqHNFTnYQYakZKjCYcbS923Sg2kZW7nHMf1pnWwnEetfp88YmbdhjUndSkpaVrdA",
  "key41": "5PMMk2PbYBSWNpnvKLvyPt5qQiAHMVkZS563BGMVQELCC3HRjNrhXCaz4GHPXw8ZSVYDWfASg88HCF9Y4oRp61ab",
  "key42": "3iw9YcCd1p2euusFc1jwQw57e3P2W6is32sHTtnbf9RSiy8isYCUG7gau1bFcUty9isudx3tuDnY5UoXRhC3Kc8k",
  "key43": "5n89gqfKbRUxMJoR77W9yj5waHKm6bArURzs638pY5gdFp4aevGhvuDoqNxdEuWqcwxYaDtA78oGWsVWKyfz8jUY",
  "key44": "2AcfNKBmxNMEy7GS6nXkDCiS7DiQWFeqKwtJvG5VtveB4iyvvqBwn8Xrnq7Bw5fQEpsbxLvanmhedf9TZ2hhxEfk",
  "key45": "5BjiN6Dwyyy9BXj9T6gV3f7JtJqqYJjtuece5o4kzwwA2YV5NeMhS4vpW2YsQF8T1bxzwcdNQ6vqsVEuZTJyK1cp",
  "key46": "5P7YC28LaATCrvRNgVjcJnkJT7ajhxKwb3vCAjZkeBqDphE4AGkBsbJqVrBsjvP9bEwSE4GG48XjSwrw9qNSzZp7",
  "key47": "5ChEj9MT2uwW2wMR2YYPm8xfzXoPbHTUvnMUanRUNL2HM9ufkFAk5xcp9KU7YX1zZjHxTsw9qKrn3TZoBmYWQdmY",
  "key48": "4PhFgEusXuWJW4NuizkogcNvS53PuwBNdttsNLHVWozLNzKwevuBCx7QsMv9Bq7ciwNdQyCi8ZFKDQqqozGPVho9"
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
