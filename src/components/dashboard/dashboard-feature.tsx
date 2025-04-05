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
    "3tkBcgTUKoAnh9LGmoSwAWBTyY59F9UYHTemqaMGs9mNovYzmyCjLvMuHiwZ9eWrg5TuEieBAme7awdjzqFt9guA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pbym1YLTkBqqmTbKTAj7qqYpRUJkNK3YW3bMuYe874hGunt3Bcfk5KyPhRr5ZtYDDK72N2GHdy3rNZi16mNVShu",
  "key1": "3yRZekDtZXoG2WQqmN1YdWu8VnPvXiV2y1MX4Nrs26L7VriZ7xP2LUgfFdYXqY48mPWoLokF6S5Qu4wfypeM7qm3",
  "key2": "5RYYUfSPLpxuwt4cWc4QWwfVHNgXpgQYy6WM14fPWSDZrEdvDvTso2ZW4DaiuckASxcD7YUBsS28XYTv2VADaPvq",
  "key3": "4yXwUJDsoDxf3ZDcVXT3u512JvwiHL1ryT3J1rg9wgoB2DK6fViGDdKE4Jy2BKCssDaYPxJ2fFCkHtyjb5iTY5P5",
  "key4": "5EV4FSiGoqc8Gp5qQxgs54wZJ1Ybxrhj8sw9HKqVwpYDQ1czF9biSg7GfVZWSbAEomATEFNbS6i8yyvjj4GfZDTh",
  "key5": "5BFXfRV1NSXrK5qyEVj3t51j7gJzJkFnyLF9SHKK6vmTfKEvTSkctGnPYWSnUN5L5ogKW8Qo2yMGVifvnh3gdg7G",
  "key6": "3Ge4Y86ZEvZ2825rAZTniXErAWefgrPVFur4Va74eHQ3HZ87x3UdaDzaCofeYKF9zGEWYCepLULFCJrLTjKsUH7Z",
  "key7": "F3FxUSvBYyJNFmAtJ93dRPgcrJawkxrpKg212TvdQdK8n58hs6xnZ9cBbfgSa8vzaF6PWYapLEUKiRskXsWuVYc",
  "key8": "PppBhgmDQKXe3yoM7Ygp5TwcQzY4cdrHNQSJ2jgsrQPezsPGFG1q8oTY85LBG34DmaVFy7xzwv96quCzGHJS4GV",
  "key9": "4cAXxge9az3nX2d6PHWnYZtvGtmsQPxUtXng25DrrZFRp5DL8VLBBTmYKCuHxWYSRFSXjXyPY21fxRrCuH8ULfeQ",
  "key10": "iphDA86qYtA1ALr2G2XuTfyBNZML6v1nnvcRS7e3WmvU8Eoi6U5Rezcc91SoZ3576xRXogQaHiKv87c1SSm2aer",
  "key11": "5gEaosfXH95wJ2frY9Gx5Z5Pm1RqtmKUQz5G8ugPqN21PBLrCshLLRLUByZs7rvoBr21PQccAfwFkf5aNbJkG58F",
  "key12": "2aQGkKQKXT6vbEf9yyfHSshKLyqaxRDN5AohMcXp8rbwDYSX1MepAPmxqt4hrFFFhotDkJyYfiNn8DP625x6zk7L",
  "key13": "3euBHz78yLNm8eoBRFKfu8ZHYYnB28gvcrvmVjZ3T1AeXiGb8id4otoKP83PmchS1J5nEkFm5bB8Nf69YJEtZmVr",
  "key14": "3oNjhscWDoUrpZe3tiPeEQNzawKbJU7gRew4zdetDdyuMPB5JpLhQZtfrkNHps4pjTsRf21Hv76riScjy8SBbX6w",
  "key15": "4PzssJEcBhiq7rjVZp6NhChaRoXPK18UCVFq9yCKYP4SMXCTZfERMqiqUXiLjWjYHqu5aMo5BeWStuYC7uaCFYPt",
  "key16": "F3v52VJcJuSz5UNYGWmiGuPuBU3q8ECPFqAyhRKimh7PZhMziGDsjBSC4ZP3bmcDgy7Lwk5DzFqnAiNiKRCvFeK",
  "key17": "zwEhREqchUccjc3w7dkz2QpjbebQrNJEqqEomUsY4YK1ZwWU26HJwrmgsyyncv6N2fYPhtioZokenu7upK1Nore",
  "key18": "4WnsSWUFNm7CVsNqFw7e3Ab1GeHgt9nCef518hgcsuZaLBFRdcyVmGKXPB4Nn2dbLXjDxwo3sf4EuGGffjJDkESm",
  "key19": "4T77dUFHM2WUNfPuzDBcUWtcVJv3CXT2HQjiJi3DwgAkErdWhVBG5d1D976XHXtMdtGUhSiq5PnvHeVDgDV21eGa",
  "key20": "ziRwzbeenm6fSKyyMxEgcXV9bhbqVHY4vLbiwiEcij8eU5HLgUBWyFcr2Zn2VVwrXUjiQP7HJdb29yBn6ucD8N3",
  "key21": "5MQRxS94LKSFyw53i1zM2w6AfwngM525YudcKzEfr8GyaExwL2enFbYAgz2jxagsehq5d3GbJ95o2kTMypFz5sei",
  "key22": "2kgbQyAT4rKaJgiU7VbUrEU35MmXetLtnD63itTT5DzzbzrMWZPwGhpgWyX617RYFFSZpWVf3s9CkibYFrqa5WuR",
  "key23": "3qp6hGDak93j3uyU5W2mN22LZA2SEfuhCzmZ29DDAfFMUgV5z3SAQXhoDRV5npA7v9jJenXUCkbgMMTmDHzXpJ5S",
  "key24": "oJdz4xKKA1g7pYbWQ1p46KAH8XHrodQVtLPs4d7WbwZegYWKvn2ixkTq6SgYs9cPMcryRYNsFpY8FunpFKvHZDZ",
  "key25": "CGZzmvT1vwNeq1m9XEokFptYqqe9zp6Kq4N8CNVS4kfJxY32B1oY76S6mD8keGacxLHQKUWAYVu4NZ2R33RCAKm",
  "key26": "3N7CiAV78RGMHvFc28tRcYsTnntknrYiUViTzmnipwBN1X3sVw4LJMcumh9uuSauGE3JN7bRLdTX8Weaf66ANEzA",
  "key27": "2RMjExcH7Xnsgc6KBypLeBdMpjsS616TTBVTci84C8pQ6W2pQuHh9h6SMHx7QwXj6tBsTUKPsLd1xyvCHMDu9CQk",
  "key28": "3yfMeUbugPDVbUbTn4GkFYW4YbvDiqs9TiBjG9j2BEhZyAHz9AtKqHjLPrQsgwtcyBQ5VufArCcZmjGYgUt5jJCt",
  "key29": "57i3phVfuPj8ntm4cmCKef7JX3swogNjWaHhP3nNgGnWMysyttqej5sqP9uf5w9gq1WmscrDhSNV415Do4FHqPEx",
  "key30": "5iH59YVq8kUkQGAwi7svezXHYTWKtcZZnFcTGtC8YsJiBK5eQQaDTi2HzkEPjnoZuYHgf1TjcsiAGNA4jyT7cQJw",
  "key31": "4zaxYxY3vdRBfgw83hvYZFdsnaKQ2YCNDrtA74f4W5UkE5mhFeU5RCDw61zg6rwSK3UCcSqXF37wiYonRgY1uifK",
  "key32": "ZNoVkxYMzVGNaVBkno9Am1uyjpPhKNDNDNgPG6v35b6jrPk13w6DZzfns2BccWZFyHJxmPw2B953GTzA7oh3wiH"
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
