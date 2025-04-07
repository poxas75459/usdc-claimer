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
    "BZGbQUzEwyr7Lzyu6DWfbhX5mGv3hN6JcPbfmqrYDggZFD77XsyK2WPoqrTNa5BgNU36LoRfVh5kyoa8ttjWFA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NM4cV4ognzJawF5mT7jLbEDUmoMeRrgxGCRSM99PHLsJYAoVyJBQC8zzEE9kteZexSFAzLMVmh1hjyUUHivD6RQ",
  "key1": "FiepSc3XJGRsTpnT1z7XhwATi39RtHgwdF2eBUrraWGdP4TvW1w69WL5iEqz3g7X5gW1gByRqWacN1kAkJZaK1H",
  "key2": "4PZAw8VkZRubgZ6Srw1J6ohMgqhb8xyY3cwwp2fEVhoYSXLPcmjnZq2NgPxAZwqvqrnnPfjQSBzRUrBYrPqRBpKm",
  "key3": "43NSgNfjbTTZHvxXGgFf7GFskekfLcnwHo1cbaXHK7fpqd54bdVGL4NSP9xnQP9vpdaGqtMKFgkVLrs6oohqP9j4",
  "key4": "5M7Udfj3EQ9hxsqvCj7x6ipiRbTFeidLjiv4f74ahsRVLy7ncG2BVArGJ9AcRMM1GKQ1gpHU4S1Nnt4tyxc3cgvr",
  "key5": "3acQ2iPeT5Xb59hzXsUd78gR9WSaaCmWRWM3kaRGkYkgrdPVJqiZfBYQB4vVRZzNaG6qfAanQ3T55f2ZQYNYamjF",
  "key6": "4HS1RauShvBhCTDUpTY6prjWfuxXdZuunwPWntdLHEG3bFHRakSA4Wonap319vqtU5ik5w779i3kPbyhBhuvWUvV",
  "key7": "3nXCJZ1bVjgqVGTvX3bC5h7rvfcyd5F94s4NWver45Vg9EpFqef2cTSd5qZ6YHixyN9AMWYVA9ibrxPRyPwCoHKX",
  "key8": "3CHqn2JjtXB1B71TMCEokoYhAcxwM2KNd3ioQKL4WeJmo7vxxPPgaD7Tq5eLaDuyzmkDQ3mH4uUuZwaPQVzi6QjD",
  "key9": "54okbiFToJ5nr8wEnQAPhRadhjrSok7NYUqYr6CegDrnT2WAZRX5N2E95dWDHfGjsxJ3SSQvn25jp9JqvY2W9dp1",
  "key10": "3Rhtw4X3QKpZqC4dpKSaH2cHbUdgasz2yLxbvMJ3ZQtJBe3S1TrKeoupXdu62ayC8v7nwRCHFfhfe2iNwA9s5eec",
  "key11": "5xYGwpyemycof3jUP9Cqf1gUN9KS81BaMXzAJDaMrTnVaQApPQXjwmitmCf1Dboy3LorDhUpJLvYGarz4wYUfPdT",
  "key12": "BdCsjc7fETNSeEvnxZ79Dy8hctbhrj9VnH64aJHJqhJKm8KPWJy1LJqHvbSVmykGia6FRo8W3fjULHUu6p784w7",
  "key13": "4z6X6nZ57cWrXUypD7Bdtw5u8yuHVaHiV1TqRtp4QzrdkynosZfeKVukjPsnWj2zpQ8WLZQYoPPsgdAEKHpxeQYZ",
  "key14": "3pgEszw3SGpgDjpUVdJw8aqkR9wGAGUfGWb4TontBLXZJq1Y3ubpk8TrhYTXADfGN5Vv3HGatuJb8jettRw14UGP",
  "key15": "3svJ5khCr5Xhm4th4LX6P33mhGfYWtwiubaEParA7DbTnjxLyPgLeTmndnXkQaw831wyXvRZRq516ZvPrSeZktnp",
  "key16": "5SoMCCisKVr6nfEzuqGpu3V9cKNwm1tZsPcmWCTFhaHpspciovtJNfpPp3Liu2b3MqBrDjh7p5zxVVe323EcgMzn",
  "key17": "whGD4jecNbzMhFKbJ15MuDgSxWVjuo8vP5VdWX4MFUGnxxkQjDPNQGKxLjTeDEdUCYtdZamuxfeHMTkPe8hE3Hd",
  "key18": "6GbjuAF2PaSjekvYWHCa5F1D7SZBSe9yGc8Ef6m8o9LFMT5LPyjAdPh2VTAPyanniX6u4isNA9kDubS2v9BV6GC",
  "key19": "3uhqeCK79d3ndhPZowfs1anv5Py4qMfA4ouvU9ajEqWARAXmRV9SprCCyatSVAwkE4vc2SKfJ2iCdnHnRzrmsWBS",
  "key20": "2cC1CXeEsQdXnzUbWPbUKXLzEss8UqLxrvX8Wwn5rr454bpG8GQWWcVjCkZMEbNjaMjrcDGedREpJyq2aY7i74Ys",
  "key21": "2U1umev2PNr3fcaL3b2sKxJ3GaDPi4X1YWzkrJoJ9ULK7535Lcp5rGGLd6xmPK8ZpdAU7mxBW4aSBDYgP7oTXnmE",
  "key22": "5Lg3RWcid6cPHdy5HPWMwQniBQo9GzDsSqMiHfmuHbmQzYvPKW5DaKiVwTE624EaS98TmSFRyfGb69xaDMuAVHLh",
  "key23": "2ZyX5VaCga35JMMhq4woyjzehrvzmdRQRLG8LyuNoM2Zcy9BU5UxLgiw2t7x2hkFvVDZnyHFKzPXXsU78h28wCdT",
  "key24": "2iMyPCSL85suQSeTn3o2hZ6k69UZprsXcPFj7ndoWKUh6uW9MdmjjJKBhw9Zk71Es5wYELUZhTskwwmFQfhtoiyN",
  "key25": "23LRGBbYSwycvGGPnUqYnMbGnuhShHb51pf2oSggdwbHxVoPzFgXiyyYL1XHpQnxvyjiyhhhuPf4wfFmXWwdojaZ",
  "key26": "J6Eq1KtbHdPrMbq6YkbmMPG9Ha1cKFhUJcE9pqW5hk5VD1NsxufrggYvW1pi8LJAzkHz8anbzjSWxMVwbB7r8c5",
  "key27": "43GZjXV8q8JVxZvuQ1LfyxSgFwnRo8wML4aQCnL279L8Rsa1BYLcCUKWkELC3t6nLddVyJX5U8PmNQrCn4eBaebp",
  "key28": "3HisoyRqhaPYUAjjVEqHJd7AixMwDnPnK2VoumH3X3LWvQV8tGP81gobJat8ZZYGPRGyTvrSd3WE7cmwdVxYiBfW",
  "key29": "3owHcrnho6PGjkkfwRiTz5wKbQfJ85vRmgrpzQ7aFZn6N82jY2TT7kxhfkN1MzVKLLJaojf7r2v94kGn2Nzbe59T",
  "key30": "eDLYG4EtjYNDu1QXHS94BVzttDKqfsiiCLctDnv9sdZXXJtnndmyhXRMV6B4dLaLy5m923isV1c5xrTnUosdcQC",
  "key31": "3BR5WNf3fgt8cfnJ7GAS3d6MJWyiQUx5supYMsK6EJpVADkvKGHpJvPEsx1yk3Qoi1svjJqoFoSSsqWiaytZf2Ch",
  "key32": "2bb6rQbfTDGkbYCLDKQ3So5em7zcw9SfmhvTGawkUqGKDg4BHnATSk2wiAkVEKbNV48DzujZAmcvajr7jbcSgZA",
  "key33": "37EDn5zKdG1eFNaQnM71GBfKU2LnfUJsvAFUSbj3dWgD8ntJC5hhYGaUhFz77ftiVSchJrANBq4ADeyz4UXeYpXk",
  "key34": "4Pj4N3xvC4XfoVZEBLJDNem6VbqPHyXq1KfMqGdriXFJ9mEfTQy75vW13pu2jZ9rU8UfPgij2HyBGTmn9Y6j4o9z",
  "key35": "54gtSeR88k2uWBA2fFPKkizMZXhKCsmLFMXcnmnKcGa8oUg3G5x1QwG1CavbQ8VE5HcH1h8Sd6nVNNFvD7wUJ6Yn"
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
