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
    "3TdqTdAQigVEoKtEbWmWMnRhKdu6XVYdqWzyzTxPrVAy6CAUgGiZGMi5P3YNCgtdYGp7GVBMd6jpgL2RyTvkKRjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQsZxwNoM1vQihvYxpMrQQqCfDeW2hBrpHbgcyPkvRAEg2ZdWJUQg4hVKkwapQB5fh8QFp9HQBgUik9UW1tjSpo",
  "key1": "5Acju2CnjRyXcLmGqXn18HkVVTiSTYrtUDoCfhmQmufggDCQTr7nVs3S25KkgBDySfgu5NihPBEtAHAPgafmAgRi",
  "key2": "4RG7YN6KkroADQdBDShP5AdkFrjkASxWDJuEeaPTZk6rX5LJxAoLsnAcG3DiMQnrBRXkZwW4CTfcjDQNQgHoZgBT",
  "key3": "3hV9CQDaGrqH9MiUeqLSynNKKBGrYtRFGYH427XiZc4Z9j3c7hMrmzuaVUvJNdwJuJo9jJXFF2pQcpDEhP25nzRr",
  "key4": "g3Yfkmn5mSM99ejARzUCBsUyrZaqV9X9RZ4vJof7uW6Q2ztWm6HvnwijJJenHbrTEMr5xeZfp18htjTeSwq39Ck",
  "key5": "5Wa21AW5kAGLqzF8wdBc5X2DbyfqViwtVgfi3mghHcqHQRMPVDza4yqwSJ5AroRMHrt162s9fnBzKG6WD3ZEfiU6",
  "key6": "2eXubGR12U6rbRMZZpxqvhGHH8KRBd288z6jFDcGVkZjag2aL2YReohbbi67u6QNdGKExk7Y1Qghqx4V43UxwBrf",
  "key7": "2hS7CUECVwrtGDDLB4DsBedbAXS3UHYRvPs1ZS6FtBGK6CBiisqufkXav7C1gJYRkgJTkQzRsStkoJZcJhBYLzwu",
  "key8": "4JuFDLiW7tdBJzTqhvgxc2inQ5u2XV1hGnwarAMiSVu53LvzFYhHVDqi425rCG4LbbDsG5HMD3Fq8Qp8yvzmWNWU",
  "key9": "3FTQwFRF7Pru8Sje5YPxDnoV6nJR1Ri2uYWcPk4xtXY6L7bzaxcTtroKvZNingrCEDHUzv8vvqHTdEwQFzALuqtA",
  "key10": "3XU518ZduB6xcun3eHkW1mJRYL92vMaDurdzL3iHpqXryLLHXrGdEfEKVWbevoZ9vSYqicchjAXHg5CgjY1496ut",
  "key11": "4Gq1VW2jcYUZExLbSrHrN3CD9T3Mo6cwRgtALj1W64KqSjpvBSEY39tU1SRGpKdMMUTZcyqH2rax7hK92No9KCp",
  "key12": "5ef3KvgMtUnTdi4wmAvhmRA1VerddaXZ7feYQkQemuungG7HNnMEMMeGop6RELXPpvmTtzuoTxHsccSbC5yyWx3J",
  "key13": "4YWutLdRPyaocKzZ4UimXG6pYDQmZpX4n1VK7gAnDNLpJVahoDDg7BTzXayZCgKUoxCx3hsvYQn4ULV43YGnniib",
  "key14": "2FAohtLnkB6imttyfmtYkcw1cS2QBUaxRYddQboHyEDqjG8cYZqMDWRUKiP457vgH48EuP8TC7krM2nsH4enCzuP",
  "key15": "4dV5etkdLmoNW4zJNsdgfNXcdaJChWXq7uTzGbvw7quAnCK7xZmVjqwef4cxMDtx3FddQEHg7aGTzTFK9FNfha8x",
  "key16": "5DTQSbmhy7NzRtF8cWTJ69YBdmyznfTjeZPDKp3b3e6om1Fo7B54NiPqwgTWkcc4upiXYo1E5cuz8ybhz543NsmX",
  "key17": "2S6scCHg8xfJSDdCY9gwg5Gm71oUa7bhoqGcF4p6uahdrVG2oQ8sFZv8XigdYYXNZ7Wwm5QWXzxS8pfbN4TJHaUz",
  "key18": "5dCYa68c4rgpHu3VwvgNwe5X4o3yBAdmS5M74ihoA2xbrhx1XRxz6szSnssurmvpWLYG3BZ16mQAaZu81fj7gihQ",
  "key19": "4KpiRNN16EUu85CwW4SLL53Fi3f7BPDVgT9Q7rBcuWDDzSaFwBKgQERWgaxENXB1TfbKbhy6U2EvsTf2CRem9Pv6",
  "key20": "2BEBhX9NNkPQGT3URN42BqG89z1MhH6wydVztwq4BbDEucKDhys7UYUZrtGRRVnzkyu5PGf4KVThDpRMamxMvasx",
  "key21": "4VV6Axttvwh1Hd38xKhPb61UjCiQRYBWqAuf8NQrmtK3xhxntpjvY7yQEerqv37WXburgHetDX9bPiKPAK7QreGt",
  "key22": "4B1kgH2dK4Si4EkukTB5BkN5pwMNoMgzxNXLmDMq5YX7HMguGFyfhC3SEC3XzwLo3Ekk87bmTd8dWN71Bp19rZHp",
  "key23": "3Qwx43K9mfCrFJTYrS25m4FFY4B7RNGsiXgTn4F6JzSvuHoAGvtw2oBhDVcjhWBUhW82XRmjWk8ez9ZZwHvzTp4K",
  "key24": "3BwQCKKjdYsHUFtubQNpkRSkuYG2qZLXrYqQrAF6shPDWiCyc87nnWT7EiHRgo9TezvNXhnY8scwntRcckmNLibw",
  "key25": "5g5N2PTnuQ1WoYhSomGSpvXUmc9vUHMfsjdvGmWZcucp5XkcLJ7gjP1Bsq6CCgAfYcbk6MTGDmnqf8suEMfWrzwp",
  "key26": "4RiAnSpfwKvs67dEMg8jWvYMiUiaBrDFUJcSpzbkiqFkRg1Cuw9P8THEoayH8LvidV8JV5Cqoxp5Mjo4EqptURUB",
  "key27": "TpDbP6PafaAKUb9apiRtuBQKJnyNvB5UzkS9vCSvfuR5ZVv66myR1FSBEdRakCbPRomsENt1Naw3FQfn6VFUt5V",
  "key28": "5JYi15yxoEeUL9qDJ3F452GFN6uCeSW86NYEHQMSgeDCuSaqiMkGJNU4kU1GSGnE88ENxojY5BVWrHdtJV9VRaWV",
  "key29": "4W4diAVR94KdGwxKM5URUNHU4CqomRDB9AmvfXbWCfzwdJp58WgNkmRRymrzsDSobMHCiPmcrHc9rXhUbEWBBsxT",
  "key30": "3zDV47rqpNv5J5JTGJ9XbzFNzAKbbsfsxsqEg6pkZZTaUA8zzBCgRHkRaVgpmKqX9yK3dyB7UMPAD85CJdXmH1rn",
  "key31": "5LaqdcooyYqhrFs9QEVfq292gsEffMfUevd6MfjqFho7ZXqEdU9YxYWP6Zrubdk73ScDUnukAgkpJaNRcUonEg4P",
  "key32": "4Vnq4kkX9dUCFxJVokonB1rDtRFmpNVXNxTHF9UasMB7JRsPQ6J2pu8Fr6PKVvPTzHQhA5hqk1gvjafM7m5vt6N8",
  "key33": "2M3RaNfHb42AK23FpEc2hfe2sYn423rECBPX1heK3Ny5anbvejRzzYq8Bixnq2Sc3L9oqt7xqkuvySWJ24RdxNWG",
  "key34": "2xyevr6Qc7pPQSYs5sk1FMuZ7PAQfR1G54Vo9TT2mmKn2hbxkrMjVVPx76oYYnxTvBBGGtjStqYndSUmMogCqeyj",
  "key35": "5S4wZb3psxXWEh9mvmD82o3GyVH9L95NuXeCLxL67JBWHk5FT9iASRLNNwiCVpUY5tLNmVvin22wq3tcgv5ppJip",
  "key36": "5Amr6hLybCSdguTTrbreNeR4oiHgf1NWcoH3JyKgBJaFmGthZWZRzxSjh1aHVTize11LkCTK8QLmcgiyLWQwJwZG",
  "key37": "4yKTwYvhYumLpeD9VNmoTDfCcj4Zf5BV2iGwEph7up8ZRireNZWh68hLCT53PrHLm9MZWsBF4QWkh7YSTg5rkRzN",
  "key38": "53xcwV8WsDpkF6srkFXeb8cgrPB2eytL51ud7kiQcALcZNzzy9jPV4xebDo6pLsuhApZLexcVutc9KcHkhKuKP1r",
  "key39": "4n7VS9ydEyZq7tuhYg9wPHhSk6pqWGszRhsKoy1pduRJ6JrVcdPNvXCo8uyZ5b5B4xFw5e6WGhqBikpRCsHpXNAh",
  "key40": "247etAv1U2n7L2BhTx3oEfFYAbRW7NH3yFqiEUY1saMBYKtthEVNqsHepMpmgkGcgtoQW1fzr86CLcgNeaD3P9EQ",
  "key41": "6eusnsRTVHpqfyrWQA8nNtNrwAyLDrSNUZSB3WK1zVxP1La64qH22dH9r22R54eTTnSphycDLTH8Ja8dVxPn1Eq"
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
