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
    "4VgEPpkhY6DkP5yRZ4ErxGMoPqySD1csgoNUtoq3P9Fzi298o4fcC9AkTKXJwoNKvXBpE3Tw76tTA2MndEy1sFnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hfcDu4XhY7UuJKvRXhMCSkgKXYMqoqcLTiTVQLzCCpLHDN4QJ9oZTyCangCs3c1G7jPn6Vkm8Gg434BFpcBjVVU",
  "key1": "7CQZ2Ju5xHqMwb17dPV71XmEDkehiz148V3Ka69mkwEVgyGwDKNGyBWdax4rNywWMbi1ZCchykEGLs9HpUioba2",
  "key2": "4ovoA7UG6QxTa1mpBiX4xJx9t9mbqCqkptGYEgGLsMKn7uG8bYgVEThv6Rqm7eJresV543sYRwiv3hzUBiNYSDCd",
  "key3": "2JeDDwNqbrzDtyG8wXhGAgZH2sj4AQ6KnGjYPo62mEQJe2VPQcJMCDWeHomXhSdCCxdbgEjTNsws6NQ2sFPzmSrk",
  "key4": "5e8Wi9LFCtGGSZfdDjenywJZdPtVXG4ufxFd4dJCfbZCQHRqNbDX4fxXkr4wjhM7ETfdg4PV6YS1xzJefkyM3BCn",
  "key5": "2DEwG5KFcksUFp6uyFmAaaVqMGJKQFNKxf3F1SFMq3rjn4m2icnfMDzrS2ErwQL34r7VQNaNkE29ciPhQggh3xuB",
  "key6": "3iwtxCwXWrxZxFNS9qXerCYmJ5VpU6JMFUNDzpf9AxKHDbwpEedZXoJSwkhPxbb3c9ACUumii2TWypqByB8gd6Lc",
  "key7": "84co3EgRaZjNJ9JRiCdxfbwChVAdtUuarCRMSLJMvPSYDSVFd13F8GnPdQWsgQj3rakQ3BxqxsAjAJHQgphFqQP",
  "key8": "4nnVWfknYdToQapZ7DucbUey5pRQGhsXoNE6kSFn3qRtv2ngGFMUz5G59fWVL9tT2vbpnLgL2Qqbg9yXWsQxaLXo",
  "key9": "5zcmoe5XtRarsUefC7SEnX2D4urNszJfS1AwUKTQCAwGsLMJE1kQMfKa5eXe8ctaMkuhg6nhZtgmR29hTa1AceJ9",
  "key10": "3RPzLNHheb29YWgujosKCthcn8CcZUwg8MwiLUx8J6QZ7fK1mt1z3kSQEgrYFYtDMjquRPo8pareYJEZHPnSnbc5",
  "key11": "P2Q8xXZ6fBNhdK1af75386L5NtWjXNdGBDYZ1Mzyk5hWbUk4j9c9QGC4Aruh73PzVW8aHS8rbHMQHwJ4amsuZMQ",
  "key12": "42vnyXPJ12KfJjTGvhMzv5rYhCs2iDouFp7WNNzMoYQtypBY9fr6ASPHHWj2CYP58LLKTPiDm9UN2FCZjU4Mahy3",
  "key13": "tkW33GwtRyQH2zcozThY8nJvTRwpGpsYfuU3hjmnFisD8hnsN9vNHiwswZXWbqa7dxERny2P799vNXT5CWWZbJW",
  "key14": "2eaCyVBE48PZCd5xxvsLU5oGxWUmn4a376NPqDR2zDB46Uo7UqMrff3DwyTyPdchRoGLyBnwq2UmoqQYNCWeLrRe",
  "key15": "2g2CzEo7ANAHtfqymdikTiNaJtBG5R9JbiqBid7dY6qHdNRBf74XvDuJ5rxvNDrH2sdduoNKEFgqyWNJ7BNjoW86",
  "key16": "326S2sDf964RsCjm55RPGFd2LQuEjCv43sfHbGHsaGPSTTpbQZpFCzoBWjyi2wpbX3cduEHuFeTS9wc3QHFUiBYt",
  "key17": "45FH6dkQGqaJ1MW3KryyjQ3X9CX8HoPYrpXCC4VoAoghUCfEfXmC7p8VybA4LNfihUZyw3o33uSW7qrFN7QNoAjK",
  "key18": "3PdnAzbTSUfM1UccxxprttFewfYMHQts9rtoA1t7kQJLuKL1hRP8TuAUaMhc5ewXCeBcMRcRwk3CLcr5TDNhKieM",
  "key19": "4btKVYSsVFVVgv8qrRnRyqrgCk7ECMYeNQkV62rvt7w5C4hJWchFYruscCBqTrcRK7cmQYumhQMzi5ttm6JqK3p5",
  "key20": "Ey1DUvXVgYashyCEiqfd1geL8c2iW9MhpYrhteJgAaSWqtpQGFoCtSidggBNQBqs26pgmDr5QBssjNSX6hqX9Qf",
  "key21": "4tbke4GifeCFZJF6kC2EgLCPdmnmRCKJwy6NSvBmLKyqQqGHfEJE1vEJ6tAFESDv3fQNGA9xwdZVHE78E2pib3Tp",
  "key22": "5YDoaRLFy8nEUgzB5e81f9gU7dsSCwpoHH4yMjXXZ7quphkZixc7MUAbvFAuViiGXxtfNxzVwq2Kb3Fhisgoe9hd",
  "key23": "5eMpA4PqZJMYQ3Cgmnu1woWW977CdiGNfHmcfhKomd2cZjFHbQUNvDEzDCaP6gXgtAmue22nFRy32pj58dmz4gGM",
  "key24": "2Husmspw7aMtTKpHn72bzbxhMa6eKoM3edbSfq5L5uhe8V9ocAi9h74UNm2wa98cAoYM9HdorFG9TRFTKYbroL1C",
  "key25": "2XTnYraWohwM57TxgeKwFUUx8bW4J5Az4XDwVHiuwdKV7BneFrWBENEBHXoRhoNai49uDB4WAXWUezcm8QZf3AmS",
  "key26": "5jSDvgqdqUrbADyNNXe1NKkaNeJQVdQQfLftQ7NuYddiapSQ5gx3yLSyw6pTwYVNR1kqoXdf92Gbz6jx9pnCRvs1",
  "key27": "43ng6m3LTpy4FFM1mNUD11LvLHxd6i7skoTCobBXgriKPyMxYMLnUhLrYBi1saPPzcMFcoXU2mJDqtojxKrimyBS",
  "key28": "2C7sWqzjMMZaygj3RLtBNtsLesPLG8goN5JgBBu25be8UDbzeiQZKquAePkVaa4XF5XGnTL6iDsZreTAckAKsZiM",
  "key29": "34fRpYsceCBtAHHbouXmzmj86oPFTkE7iuRgVFoaYKBRv3bpxauBFonpabHeApd7p25HoXALMzr8pwBgA45sfocC",
  "key30": "3DLXcXjPyW2bNyYkXR84zkYd2gQkVe1FeuNBbQvvxGLKdmxVLJ2X9rAy3mU9fKJyEbkWJkKdsP6rrJz1JAsrSj6r",
  "key31": "2cg9g1gjPXHxJjKoYNsbiPaQgU7vURVRMNFyV95AZEnrKMxaNGUuwWxKjpxFzQE9yvW4QsuWAhpRWJKQY92BXTrr",
  "key32": "5pKsA7GHS15pkcFK2msdoGbz1fhimWKcmKJX1JcJpUCipXqDsqikan9FiDSAGnZZ9NVzpLZ5n4QciAt1Mz8nhC71",
  "key33": "5WLyKDdCV4QJsXRkdTZXyGtrbKytiJcuaXenxcvtwTVE5pupXThKaQEozYNVRanqM2wJfDT4c3eU2tqzB7LtS6A2",
  "key34": "uaAk8ie1w3TzLW8QpWZsZVyqPZRVFhzCqQdoEYkMhSonFjSJwuUsp6os8ySsk1K5NZjcHcbNbBvY64q7WFQ3zMN",
  "key35": "3YKusdcYNyDAz8hbSX8aq1HwcZbTzsrVLVHAmR3KTS13ibMXx6BQdCSYKzHZSGf2XhHvVejKiemfDnueXG582C1i",
  "key36": "J1qXMnrGzqG32uyqQdcSq5A8sSv7JK4VHx2Cr2WMYU8ocqPW1hUg8TH7VwFNW9HqwiUdsscXCkiuq7qBrJAWC9Z",
  "key37": "4U6kMMoWXj5xvidQPsveJjAddJvKniQvRrXszzkjFnqeKkLtZdavVkkCGUmNkajUaqzN5YdzM9pUKW9aJM8foDGD",
  "key38": "65rACpTor2N7FuuCzZGWchv3ba7eXnkyhNPrxjHJ2hKhBk4kt3u3s1TPp9UP415p7kgK71wAoAViMnZjSmMicVZ9",
  "key39": "3fzFFevZS6MD8hc2Jf9EudJd3ZB6VVKd7JThanCtx7SHmpTHck8oAWyGgbJZUcfzjapBymXHK5kXhrzLFNVHVtYZ",
  "key40": "2NifoUbkSpisYLb9WVcwfTmmukm7DoBqzvn4fDgWBo7yJi6RdXmfX1MoX7paZNZnVWebrn9sdFjEkhAPEtfzvKFz",
  "key41": "3BJWShhHmG239KLjyod3XoDFiwAkiuf4HCY8vncsC2a95iYBJSigU4PzoaXMvi8zyRZFpdenZDxoZxfNLnfr4Xb9",
  "key42": "5nuh4TvsRidDMXH3sxgth2ZKV7WjH2udqQkLXTzxJBRsAGsB7rXeMy7PHESW1UDrzTwosYcW3EdCLPQ2jSpXayKQ",
  "key43": "21zs87xnCbGbykyrJeuQ1hBAyyikMfoeTUAU6d9gBidqPjFCTxux1hFTfkLDyKRdesDt5GqSPLR8U8mf11X6QuPk",
  "key44": "4rNJNWuah6gjLX48a3wW9GGE2SerTkFXFQNMNvMyqMxT4h59TyufhtqYorhRJQmacS7iA7A57X3WMvh5ccNSXLbg",
  "key45": "4sVyRRmTV1Tn7HqBhcDvYDqvosFmf6AbBQz8vHS2j9LfKkGwqfhDi5fByqdNVc3GF7n7Zt2w9b3YsXZKr3qBZ9f",
  "key46": "Lw87YettYe5y9URV2QXj2VbPQFXD5nDiFhJfyiEdF2uqD2YMg8q5NU2968J2Y6PVSESzurZ3P13S8vEPAXWH7GE",
  "key47": "4CQ2y1Tce7EbLHrtUWFRQHN7JtHEekt4EvAkraZqDggLf9zGQHR3RbsrwW46hVU44VfYDX8MkzvwWej8sJkxg5Rp",
  "key48": "2GWjtXMc9WbEFTrWvmXWLP6pa5aqXMFxBDTDBwu3PY64SgBNeE9Dc3zmx6nmFSkFS2Dnir6BoBZkGbWT8ACdV6kn",
  "key49": "9Fgab3xJBf9WosRQEP2vyYyLeBpPPdToJSvCAytcP1u8tqmz9jrMGHXCfMxAepsPKxrjAzDAXCwCptnGGRyoed6"
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
