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
    "5mw9QLZpGXzuosh9HN8o4pC88JPqrjNPb9h6nVRuyRaWXvS1HcV6gG48Dw8aEimifAH8c3JGcZxaVFY75MkMhfpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zuBTXNQWHiiBDBqNDNRvRi9172jDeyjoULjpJ1aTigpgGLwCsAgudGvfi132b85eFZc6C5XEhMTQdy271r2Fkb",
  "key1": "5f7TfPEzYygAFMe6SZKhXhx9o51HjPH7HpYdBup6hKfkPyT8xq6xUG9Z3Lu57CGPRTjugPkF7rzW25yWVCkDnd6x",
  "key2": "2U9TpG9CswFqSgWESvx3cee67SB1ZVe54Fp6Jh4aA6sesLgpfgjMvCG4XtUoXYV24WP6UvV3ZLU5BviaiuvMeSAr",
  "key3": "Ddut6bcXqiXADNrgjPpnEoCE73TNTkbgyNJuyAcM65nhEMgHFbzy6Ay4MWKPYC13axEBRGrddsh53xbjXUhFLQS",
  "key4": "3xsYKF5vAuKh8ZcNLuGxva2CotYdRHVDK6oRaQgFrxVdcTkwS1dXFqKsgca13qJ7S2wwbimeRxZoHjppvg17EHSB",
  "key5": "5Kh8456YwGkBvs5LyJSnYpLjoiGXxyUZtU3bzqviTLp4jG2N8xwr382nLcebu2dfk1VQjLNae5P3ceX1CFhc99WE",
  "key6": "44sJbX8DRmLERBuAo3nf251YktTEfCwsGYBo7wbEqqYFJEXr1jFo1WJoxCEBdLEx4MtHGWeFHkXjprszdBziNWGh",
  "key7": "63fojDCRBo1b2Lw2ee7zdwbHFB3oB3pcEBK2pgUPohmHQSb1FkUCqb6vNdjoRGxL8MKK1CJ1dJQdxHRrZa5sCY9J",
  "key8": "YTU28cTFHv1d7m4MsBc3ejDNmDNSvf4g9tbja56bApNs8uTarkYhEH5UavSDqz8GT22p9vUuN52yiF9eazgrtN6",
  "key9": "4HbeJr3qgv28bdYi3Fn8pSmrBdik7GFdoMwT6273oVzBLerXfNDp7eqweZYibezqiLmCqHJKA4ztQGE4VWPy4znF",
  "key10": "53miv4qyY8twAgZvz9N6XurqXGGo66HrsdfmSeWMGMomdqeyAqQcS6zwv5DyM4wpacz4JRU4C6EufJtirsfo9T2o",
  "key11": "LEV5JG2ivqFVtGsq98KYEw2UG7ytDTqhpdkHAK38CAuuDb7PEYRxUcfb6JrsUsU3Va1ACvfbg9pcUtPSAw5GqR6",
  "key12": "2gYdWFRCgduhiBR4enLcq3GdpaCPK5oicmHwDkFz6h1F2U5MBtoEb3yEube6uQBs7rzCMpvmtgxtrrM5aRGcLriu",
  "key13": "5bhVsKMM9Srou4vDCBHwSt2ZGzohzwig2vpwvx2QLXcHjQAc15dqTUoUYuMnFKpsWccrPwX24dF68RvT83QKPQBF",
  "key14": "2APeHi76VmrKfKWBUN5RscnprAYEJHB4hNJ35mnY6NCod7LpguxWjhuJLXXCLHp67r9qpZmVWMm2jw9sDtWctS5P",
  "key15": "4gf6bZVDuhFjekVyAB2kk5isHNbPotmSH1nzd7p3eSzAEor8QQ65vy1N3htZAcCapH3XGGRCMKLb63cY4Z3jaVvq",
  "key16": "2BboivbZcLan1khKKwQreorKuStcXdrJRZ4cnEKERTZ11tBpgQKsPfS1vBVbicF6UMsscFnnhbJN4KPZ6Um3YxhD",
  "key17": "4Ju8CFTZiQkYHK5KiE5cKDbKPvDXPitRqmxR7xG1JfiyTP1wEUhCJcRRbPAy9uTU4RH1FSHushvLBFfp1eRYaVHw",
  "key18": "2uoF38byMbebjJKJtgwPtykZ5TVXxkugNEJLqjPcayZV7vjjVpJzVHzLQRkdmR3Lt1BPPitCaFvytR9VckMBc9T4",
  "key19": "3DvCKAqnFCdTrWXeYbbAepbKfXGsXtU7WDtrgLm7AUCSV8Bs75xgR7LXpdH5hzx1iGf2VgEKmPfFTtiFd2CoqMsh",
  "key20": "4RHsEZfJq6fYNiFKegjmiXv6HTQnqSBkUZLustbMwL7JqqmmRhfZM2B13AZK5rjkc11fRu3dxvjSu796bNZRmqu3",
  "key21": "4r5TdgbMLhHD2j9jfEfKEi18MArcDtuGZn2rwZVmFnnuLoffpYKhNmjJP72LtSRVuMEiyw5JqiQ3wFrvyvVJhEft",
  "key22": "3KAHmn4fvLkZ8W9CzpUap3pBeoEbRs795DCF2yjVzqmD7nQza65KXEYC47hRoojWgEXFmUx2niWNFk5ZTY4yuoHS",
  "key23": "647fiNdyDuNbqQ2A3yewrD6r7swNvjpqPsNKcrqi8P9SWVVDYxhSHNvCVtpFfwJXnZXopcFw8QYYhMnywPTJPTHE",
  "key24": "4BTPyTGm2Y1cpGHtx2hVbWsAYApKPWTgESQf3xAeePGNz9PKKbgkiqUw6V8G8MpGRxcB9tw8LyaAYmfoueTUM2rW",
  "key25": "2LgmXD3JJG9P5LnLYbBVYYM3xedUxBeEmNxkB9rmhx1xzTswsVNFaGMKjnTJY8EAQtAFVGMPA5QoSdN9ntW5pNwt",
  "key26": "3E7DXxsdtr6gXWrB5vrLsSNcd92P8JcbhJV1FrfHvgQrehKj23NpRPtA4MumetJSUeefDc6Srwp2cvWGQmry9jXe",
  "key27": "5GpC3ja1QrTJfZqWbPfVebJK4K4tntdS3AAXa8qLP9w7Rpwva2cLwi2U7rRqTAo5cvdsskUcqAN4r2yfd7XwQScZ",
  "key28": "62yf1muRp7n9cBusqFH2btbckeC2EdiyVMtxj5vowzwt4BAJNDePAP5qSpUVUc9r8EbrK7MJEcb4zD56wSJzJVvB",
  "key29": "5SgEkHbnPGWygfnbxSL44dya6kwinfacZGisV8C9LXy7MRCh5QHjpeVk1M8WkyzFAiaHvp9sU8fhUK7XHrJcUa6c",
  "key30": "dHwCcoQaFKPWSMNFspgk1LQiRa2C3ZW7YNA5Crr7KzzACoJ4UhGhtu61hSbAjfWdQwa4Tst11RojLzXXraZV7KN",
  "key31": "2LndBXguDCrp2yQmLu5UAVazZvzGEU2v7Tq9EYsd6ZDZ2WDKpBmziFjDK7nEe9aT8PJ3YyY7tn5ifikbpnkLuG89",
  "key32": "46V3DKuqJmRSBzceYPb4nNses6iwcKd7k4dAgHsNhmTtnNF2y8oJGY79Xim73vXLouSw3379zGPjE2SdVVQ6ZSKK",
  "key33": "7ZfEadhf4hCXgUaELBEU9zEtbR93B6c61HbtSsuMfBFgAnte937BfFC1EGYiBUBsfx9N6dVsAAhuMRZ4GGP8R5f",
  "key34": "4JjtjTWYwhUibpKBYxPuHjpWAoWPE32aoBAF4HDh48mG9e9jXZenEaVPX4qhbgZFqCrJ6R4AHgzzgEY7j5CLLF4p",
  "key35": "3dTvrbMPrZHGTcFe7div8w182y1yCHQZDd4CvQEpo4JLMxGS8uye9H2NPaV3yfAXyT5mTEFACbSNnmovBf3KceEi",
  "key36": "44Kmo5Zvf4Y3pTHrZyFUe9NaUDEPt139r19myvgDHvJpqpBWcaFgsYGBYggfMFxzbHVLBZGZYg47N7JwMzimFH11",
  "key37": "Bu2rjUK68XF1TmwpFYyJYFb1gUsLk3aGHDgTzMgJBgdYoFC6aoD5mKv1JukfT5hbVtXDCHXPraPnxiTCZYS89sm",
  "key38": "5hgogsKVarxzn1TMhd3VGXyrmqW89mi2JoEDdioR7eCjZUbC8i5EwRQbzXWxz5dedFb1R6UTzGgAEa3eGtHACUUx",
  "key39": "giacNBrdDB6H8Vo2pkGAjE983Ri7GsYrmUdfD2KGPZvXoX4HVZc6QuJofqg1Enu2UHMsA8r4EW4Xccu8wxkRcT5",
  "key40": "2h3HjvD1GvWZfXssS57Jn1zYX7E27wafMjGbrggSiQ3AP6jtffiRj2KBuwwhGH6tiwf28KGx2qtgtZzLWy5KRiGy"
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
