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
    "3YZENFCk3RF6brughB9iJDQ3JFCroGXrHCtjv4U83ipStQ1MHorF6P14GfwYGdXcaF2YihPRCCSgWhRw71xfNwhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGZchvxhpiqjzr8jZnSc8EexjD5R4rdgAkgAnA4WpDidgqYTdC5kDyhKtawCDh34sv9VYi348XGxxB9syFWUjvP",
  "key1": "5TGRADaB2x2VEXeD3tP2wSjVkwFPwRfZaBZ8wn7ir77axjD29xhRnEnbbUTwzFAtfU4ckTpeqHbFZxDh4Gv1fYpd",
  "key2": "4T4d5rprK7AKmsWPaPYqS9Mn7Kc1uRPqXMwf2P7YFkwjh5kd46revg2CBZjhe27hLbHUFVEG3PQUrg4he2qVWsRC",
  "key3": "5HzdeVWb3sdp42TyDkAYWCStam32Jj2NF2gQh77fKiKMbYwWkDtbbTWicbech2jfhv85obur6rg7hM8CsibEkycd",
  "key4": "69fspxFWzdoMq4dpBt9F4Kpf6EgtwUBYqQC8Mspt7yBA6ERYrKo6Vo5AjG6tgaFaCn4HcjwP2wdn2EkVbAXWCfW",
  "key5": "57UCCXDiJ4HgbVBxRnHe5e8BpbWQQxXiLEyWffAa7bNuVQwXRV9bqCLX5B4arBEonPm3ZVo56tseFoBpCyDY6bb",
  "key6": "3qQMtXpKU8CgtJFLU3hg82yhv4343c8D1x4CGfW8agAPUywCBBnjACFjbsnssF93Fdr6coC9KhujM3nF9WiShas8",
  "key7": "2UuKvBaTouCC8sX2pthY4PQiDnAAKRY75aYfakT7eosVgSMP7xb5oxt1nFDcUp4atXWnR4pJRtKxigoZhhi9GRQk",
  "key8": "3N393PWVPQhPckPtcDnhjET4g1o62hwVMwKkSGucps4ZCkay2Pj5WbTt3FGPMCzG24NL6X8dejrM7F3XTZm4sn9t",
  "key9": "3G1CWRivR3jfD7vJWTXPPU62kYNiuHkwnD7Jge581FDWUvMVSNZcMgjeYTcB81bVzqeMSpcBfN4Dn62AuvE9bbgg",
  "key10": "4Yo2SVY4iZX47phZkK4fLBPWRbdv4yqgwhAXEs9CsUqVV89SRyezoUFapnVa9e3Q7Dxrd7tMpaQmvWwVdV8tytRr",
  "key11": "62Ks7XieVsWetcx8hPtK3Za6sdJtDj7UGTxvx4x6sKKgWyNriqxC62maCCaQiVX1vKuQ3mTbpxbJ1EGg9KDBGNcU",
  "key12": "hKVcDSNxjCw2kqytBQhD3C3tcRRYavb3kqqoKqB2vtwJHuPGKwVWoSH9rDyDcfkiMTxkCsBJbAXeAdGiwkkET6x",
  "key13": "2a27qWtdavq7m1UBP92hLyzCzVvsHKz6sEWMGuDnsxx5UZX86FvEBq4tSi2xgNe2xJ7nyiXFHULgKBrNuGYCx8Ea",
  "key14": "4dFcACpvKMFQMafHkJjtZnJ2vaJpKQH3d9AY5fNUD8hy8ceQxHWSs7v7DxEjcafBsaGBpt41akufjgm4vUoQH7oX",
  "key15": "2uhhTf8KNneoXxugKRHaiDuc1h5UYGoo8ws3JY1u9mAnruYQTcaRDP7Jibu1Hjzb8JzHYqbiQekUZfpjo1jcBid4",
  "key16": "4ABZsC2SKi3u4GMDEGZfmWDfpPsSg2Ki2ioSfAVKnMn5QGYewNJywUGFHY6NkndtLub725WmXczHvCFi2YMWM2R",
  "key17": "5hGbaGZsButYtRA9TEeKKs2aCwZ8wVv2ANzTxzvnrnBkaLJ9giUCvSN7kc2avTSmyBFQvLEHVZrtVtTmxLTNnKaV",
  "key18": "2ngr3ArMhaL5YyoRivKoFjZDRcSxE7HFswmaBPrDvVNSMGruGbgNgrUqMn9ooQRYy7WnVKbW9sARFeGV8XgXoTNm",
  "key19": "PghP6Wm5vjs7KMCqhwCXaCGUAxQDc13Upfu2bmnetwGs2yE9VA4UHzjCSRwSVqJTTZc6KKGADyJd8iyKK91wBHh",
  "key20": "2ofF4qnbbENyR7WBN2btsE8htjTqv1QVUy2GaUaxxoZPFbFSgub1snEYmoLvu3DCpApuRvSnmFHFppydRwn75SDi",
  "key21": "25a54aLZC2uKQZpDht2pKnuU3nJwxrYVFC4sNdYvz8itafwpKVYutVgEiRkJRWp6paT2DPQH7bgahbJHG83e5hTR",
  "key22": "2GSoRCTM7kyqMfB4AtXUP3ErR78RMkV85DzW8UsoRm2g7oGsmMG768s4wqtJwvtvinwy3QLERKzHTzfwAE3CiDSY",
  "key23": "PMjiK1Dj9EkoDp22r89rnMMAxZ9ZW1weH6ZE6EniviMm4csnXH1bbVkWyjUH8gd4dLEST3eDr5dbucsCG32njvR",
  "key24": "3AFKvhmNGfAD3X6VpqYJsQozPucEb7TcCmi7V1WueaEodQNe9yg6pkjRmzqWHJSpq6dukjEhDy4dTnyKoaUp1hxf",
  "key25": "4vF1zvDooy1naKtJgvJj6HA1UMzSmLRj7qMze9PzB3BRqzPXkxHFHkcowxcnDa4krKdKookJDnD6dKfr7HV1nQAF",
  "key26": "5Dwu1pwx5gtajVUCQnqeEbsY6QisvZ1yFLRJVtC5JH2EucFEm8NznRw6GftDuxyGgNRYM7KgANcaQ3uMZpK1ypWA",
  "key27": "nrAmdZZbV3Eua5a6ge9VPCLM6nYbaNDiJJxLUpBamJinHFKXwMPLfJXtNkuC5TQvMcx4JTtjymELByNSsbmBMBj",
  "key28": "4VgKH1f8zH3VotLJKKRkX8i2MXZGoCA3UitgLTvkEZC8BHT1sPCwcemG58zfoDX8vqzFX1D2PSB371WR3aPu8k52",
  "key29": "52eGVwp6HfmENZnhEmRdNuZEy2sQqyYzHUSsNvyuAjZmsWtMSq2Wrn4zuPbHeh2J1t1kspUwyYxyQDBVbrhxWvSo",
  "key30": "58hXmUxDvABeek7Y6ZyfFwPZP1A42ELBF55J6QkcDgtNTnSTVV61AvF9PJm28mqkuzGE8NtKDMc4p52Ft2GP4aA1",
  "key31": "4rte6rB5YJpsmgBnVneHPPkYC1esApeU2ydvrKWfq5cEtth8JbvYKoQt4VeCDPyeHX3rtHZMeYAKiiQArVy4xv33",
  "key32": "4vsQMPT6dCkAChcjrZm2AhqsxjQFYKxrQyNVYkamkc2ZbgoBXPTc8nTpgs25BsoDCj9bvEqou9vK6zZL9JTQbvKX",
  "key33": "3BFx3EpwcTQhqkCD9R2Bc7L9adqEkg5swBVEuZu7zVUHYvtHyBxsnZz4qoiZxQTuUdYX3QMSAzfh2zXk35xunr91"
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
