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
    "3MYyZU8kTAso7KzujMb4gG5xzcnsob5H9eQqo8yvpauaabCYpsSwLQgLnvhR7v35qzJu7JUC9trRmQ5ZAnkLhSwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBJcJkJwMpgrpXr9S2GdBAsNZybtXuChmSPr7Ygis5PkjjBcHNvUJBdBQj9Uc1D66xbXayJv5uS9EPwARPsS7Cr",
  "key1": "5CK6Z3yReks68PqffMz45Jt8Hdty4dsMzMpMXYbtgsWg3D2mY8sqkUKAbEw8R8YYL544BNYVLtJuPxkmf9S6F1y9",
  "key2": "2w1B1uaJbAgD8MPqY2QdgaiYEz4WoMCMeAubmLAYBiV5Km9Y4UrDNfwErP5XaLuvRKGWTvTkbZqCa2WS2waS9x3W",
  "key3": "4xP9LCMSgzTCk5kBgJdr1QPfHojhRcDUveBwiPtEQy4nddQTbvndseAYPYLMSxBCHvrSVfkLqJa7HGAu7yWBdyHW",
  "key4": "cqV6TBW68Xi8a7NWtsoZ2odSEWvKgE5srJGT4jnFHbk9TCp9b7ABfEqpruSEYfLN93P6VfreGFB1vHwCsge4E2T",
  "key5": "3FoxnCBBKwjuwv1toE5YVYimsv2ee8fbPqieDUG4tseXsB2mWMbG8Yz57Mydut98LrSPLCviG2ZM5sZcaqLw3iVp",
  "key6": "NbiQchGRqkvK8brhU5GqfkXG92zvWCAFG6ZUrWW1F5NrLHV7z6SJxDmBNJ52DjTh6jKRfbFtVL7MH7QEbewHPvE",
  "key7": "5vPxtG6JRBtrWEZ3stS79FpchWhqkZaAYnmaErzPQr91rReTPxtdHE6Eyzeh8QVzrLeobKrf9yieDczhBzPKm7VK",
  "key8": "5taHyfdZPpcqSLSCr48qdhX3Z2AsDaBtMgeqEpdRadbQDQu15LMgCohwzeoQvKYVdZpKNUwEmA2acVLHrunz4wZT",
  "key9": "KWxSuRsqzmauytEQKYFKms15PFia87QRMq66Rz5HeP2YrwNCWu7yoUoKgKGpd5Hn71tcabGeqhVK8GA7xSPAHTC",
  "key10": "257go7EbJFf7d3kaDK8RvPobogfYHCyjN6HgYj79ZwhsEn1HuEQ8DJu6qiv5VEQwm6GrU2DrRSm8e7Ui9hBBYfkc",
  "key11": "2iQvQWK5HTFworvL7XT6wJjppRUEcEedH7Zgc9ChWkimgT7nAXjh7Mbtmgam3dLk8P5kh876E5tkZNH9oioRpUXr",
  "key12": "2xRzkGozcwZuwyE9UxSsDVkmqKMy54s8TudoMcYbAnvga9wCV524qpMqcQGvysuZKYbJygsRSgPaSJCVtRwJRQ1v",
  "key13": "5epQsdgpY9oEegjMwAcTpKH5mwR1mwXWrey3WDsxQbWAe4W5Uo1SgCfbfEekuF7QpGMCXLzThX5mMZcPRMZMYgp9",
  "key14": "qAGgHzttYQVkjKKgik5BWPVV4fLYQTVALCdddkR4tN3XNi7aTmk9FEnadzsbB8B79Aigc6XJrhes2Z2NpYFXLVN",
  "key15": "3ii81HpUBqtR3ZuNPF14GQ9BvddxHEvxx3nbQkEr4XB3s2PbRUdnQjvrWFWhuJfj5fLzzjgP9ss8irZZtvcte4ce",
  "key16": "2q1viuAPwwYgGMUpAwU3VBfaCXW6n23D4A4JRpqKY9c2LZfLyTKrC7pkHjCCBY7kn6Ea1o5x5TL1WXbMm5rrfKFP",
  "key17": "5iknbbawUqFB2MKpKXvwE1Wc8ez8Zdn6im9vRC4KQ8qYxrEGQMc8iW2nnY7AbvCeNdeQLKWpsaivzAEWFteyWTtW",
  "key18": "48T1FYQMULipTU8T2FJRWA5NU2LYX5VWd4muqjqMDe2gXCB1U8Pn6Co1egGaVRiBKMbx7h2ZfBcH5roQx2PzPPge",
  "key19": "uvu2qJTgP8Z4N9H9siWQtqaGyFpBi7DM2qXztaMFxPEse65RXyJ3g6UR1tQgjG5a1dmEjtYx1aW4vqpAUytUqWx",
  "key20": "8Ab9LATHYnzhNk4EAM42icKefhDbHe5LVcJ5aD7WeBisPhfU1kP73MEihpKraxQTQbrzo8u9XFADRteA4Lf8dg1",
  "key21": "2zsQn6PEVmZuCHeAmbyFivbB7upwsdfp6gWDDiDKzKHzrshkwC4wPrMRVMgNNjAVPSL3Vsebf3utfuWimh99kBwU",
  "key22": "2Rmf11jjFnjvnA6AXjXo6v2KNo79V9unAfKcj9ZrQVAMCEtHg1N3YTnQ1oon6SKGmF2gJ7N6pi2U6aPuY7UAgmcQ",
  "key23": "49QiGBWzFueDJShhrm5TJ2HSsgQRFduzuJAgeRUh3mCXZtfGweN3nUGJNwFsUbsuTttFh189NmyWLbCMd1Kv1W6Y",
  "key24": "4jTcvEhuFa3zFUHkm7RCdr5DnPHCVeHmUvW1DseBYjpzQ8KQx5S8En23ViSa5gqr48zG1p1n1BYSM7L5fN9aW6gy",
  "key25": "3sQB5mgsfyqJr6V4HYXstP9ydEx1orzJGtpRrPvj1MMuAkJqc59mu1NH8cpaRiYGU3RpjeCH2tyXMpME8ZMpmspi",
  "key26": "3XXapKn9YddEihGnrKsFDxHNPuKoiupFjnyoGRnQ2CjzJ4yEorv358Xga2aEhnbMLcZAyXQPp2R6Do3ofk8eoTaZ",
  "key27": "3EnrCC8uUWC4qhe8q9un6YhH2waV9JT4K55oXEor3HEqaEFJkXhQ2pJzmpn5gXsjha2vkPiYRMqEMzDUU2wTucRP",
  "key28": "hhQStkMC7feSgGCoqE4q216mqjL1AY48dm3JzfJ7BfeESUgnrm5jEoLMAYQxgtqEf2i9LPuVQFyMxfCgzmYRB3t",
  "key29": "5ZD8w2jQBJaqnbeiqPjt6zyd7gJ1U21WNPJzrq3YR4gRSzg8gWBcS3gJo6qZQLAeZ8K69d4Wcz3NWyY99eHx6AH4",
  "key30": "2Jn9sSZ8kxCAsUpXbPVA3NwtwHv4VF7n4EXX9bfkFH2kShXdrAHbyKjjzHJVhEDmRfj9mzV81M2AYizXcVrzTkn8",
  "key31": "5px6JVmFjPgQuoD9H5uB3G6zpDggnrmUSoCf8o7Mnwg45euFf1wtHWTjqfheAWC2Xf5xPK35YjftgSrbKVid4hrf",
  "key32": "4DhHT841sW82dV82ToJuknh5qS7knYMzrzjSrEdKuV7o81CghAB8h3SDZpgr31w5aGLVPTDqrzdMM5yfemA7DCJe",
  "key33": "2QFt6msLMgpbfMrFBKNFgZbvQ6C7maH8RuELieJZzDcRrmq5quceczPXs156YmhZUz57Bsh4J6YrscyefCpixvw8",
  "key34": "XazFA2e4J6wHMgmPBnNn9uYkSkQ7nYyJMvgzb6rAUXUozj2DQd5Uv2kSrQaAQosSQ1hjrzatgwUkWP2yGmzJcT8",
  "key35": "5jE6hX2CbkA3VpD6qvGHV3jzpLxhAms8TRYc4iBPQw8G3Pbzc8E52bKiixSr28vzkgLtQ9sPGNax2UFjA5uCyqXq",
  "key36": "ccGJGgB51cnv6V9iAQYh8G6qmG5NN4EXHtyVwk97KdTyXGqLKyNhnm7amHiZ54JR62bf1V6tEwVeQtaSPdiwy6N",
  "key37": "5187VuCUCV9wWPKiEYQTXsyZMWtDBWz1fTkzuSt55oCqPkj3KnZLnDtWczX8LHH5j2Y2gBXAN2waPQSyoCpk5nW"
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
