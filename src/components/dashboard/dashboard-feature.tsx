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
    "5wU841GGUCNqkGkQSmFygK8ZnqSHrMbxtckBDx16pxwudYte72h1NKHj4KiQnEovNVenSrtECgZAbEui2Vxrp52U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UUVnMacyhE4Hih15LZyU1NMQTcgRzkD9BKiGayDovzVj5i1PSxp7JXd3su5iZsy9fzaW5acEbJfQVqjkQo9Z9j",
  "key1": "3HnSjt8uneLfsRK29bnidZiKT83Bfu5xLZHT9KTFirvj3bA9nU2ngFHpVHTLMoyCqLVu2ipQvEJmWaoUVvWjJeE",
  "key2": "2ipJLMDQhbJy2U53ocef9mVgrZ6iJ95AoSTUhX6rtXcs4k8MRzKbYxCwKSdnu4ZdU5hRFC5xLEAKZsCscTudCTpG",
  "key3": "3HAR58g4ibqZ2JJL1kGvzyYvfLxaKuF43kP6T6DNLRdtub3tHPtHXVbw4DGiKAGAy8R5CX3zfByoTV2uY1M9YwqF",
  "key4": "4UGKmYfuaWUHcCtCLEQCBr5taqkrr1W6v5mdtPLDaFgNmWp8dciyrvDJRjtr6bFeH8QAfS97vEaMnTqZ1MrBYTgh",
  "key5": "ZsEDxNNy34ZN8dNgyTqV2RNjMTRSX6yWtuwFXsGLWdgVHQLq7tzxTuEadgWkUMhrq1zqwC63sXcFRDCmuNqdJ5Q",
  "key6": "rUpRRZet7yWTUX1yvNv71DfFqDL7CWkL9umYV8jqp497Pcd2FcbTY5pPmtRjZaoD1VBFVPkJEeo1R7t36DhkVkb",
  "key7": "3peVcWgteV6yAz6zYXAUtgKRAqtESgjcYaHViuJkybHKghTnkbS3ZYH3RVLuKSCjpfkXt4tyJGbbWgzR5G91B5kf",
  "key8": "3DNbu5kdTUpm3eFs2TCBdjkpP3gppFcPSnx9VjgCrM4ZYUo8YHcmHsSwdFsLXZmN2vqcn2GApqw7ip1QGaVa64sU",
  "key9": "5a9bAkroFTZnGQHcJnvu7Jrm1epbiZrh4iwJ7zjRAuaMXu8PXkmjHqGaQV52YUqzudhvfnLsPXmM7m46k4qFPPzP",
  "key10": "B84kcR4M8hVS9Hmi9XcH7XKXUaEheYZotve7xGkWVksrwUymE8ajfPzUjmmhFkPBdNzV8ZgRM9Zjy82FuKR5AiW",
  "key11": "2kCXMr8fpK58X7mLpD4TSYBao74Etih6KGEYTomjs8S8nVNC2dEKz5WTwoCDBB5J7MA9Lk6S6DQ1Zied5kSvhBDX",
  "key12": "4wjxno8ZmQ1twuWkpchsGHznkigfqXq9U27TQLZLDDZCE86oSED7s2WiETC91bTv35WbrcHQS7bTqD4VghTE7kJ3",
  "key13": "5eStyPVPnbgLLmotiHow6Cycy7NVqmBD9ojZYRdV6QJN7s7viQoWoJRgCGpvoKLHKvYFrB9Yv37WZgdDz8KRXcvJ",
  "key14": "2kz4pMAewScdbdYEwNFPkzeJ26VReCvkB6MbWwoUaxEDmpB1yUtDQhyAC2mnKySdV3gynrJtZY1Q6vxP8w58jjHY",
  "key15": "41jLB6jMfzMxg4CzpAfjX5CJ6hMZQq6WyCTn4zGTamHh5zarjLvS9d3xZRiqAm5PDbDVV1rsENdEJuFu7qcuNiWt",
  "key16": "2F93BoYQ5ejvGD4e3ijczJLHVjjcp79TYpVkmnoXJJWgScpDcftqNcvLmETSSbgwWPbCSkMqFADbapE19smkA22D",
  "key17": "5zEZTR2R1boYDpdMgTZo6xhjsi9qA3HZnd1v5eBm4mCowQpKMCgnueu5apordxrJcj8vBR69qxaoiXxNkY7bRTV9",
  "key18": "51mDTCdYkRMnYJQLjYJn6HUz2CvhKn3LQT3XRLZ23FgFYRNVqkq8E4BJGpapWLMAMaW7kbS1nbzu8wzFEdGAiNke",
  "key19": "5tLWxYLkixcosC27GTBvSp5MhVJD7hn722WXnnyEPkqfyMDe7TiUA99w9Ehvmeawvh8FsSzjAwFpHgmnShaQTtEu",
  "key20": "64mJBGh5Yh6CLCeGDv6fgzyzijxeuuCxySRSvpUFyqhu8QLtmpdi6sJTstKKaoasUQcEwS7kvvXB9SFkR8EenRPy",
  "key21": "5wYHmQNb1g21LcHjaPmT6v56ax8pmYNtqttUJkHRo3LCkTiqRxbqvQ65ZueCUEYpEEfThsUdprK3dFXD4jNc7fvR",
  "key22": "4GGZyse8oTurBtZxwADdQgBUzXtwNP1mJeHPvi5eBnkDmfJt7kmtNod5J9HDG1HZv9YU4hcTZdNpj4yNw4ZfkjdY",
  "key23": "5QkgmnWxjVi2mbovW9WuXKq55rHvVfH8JF6T6oPaMA8Cr6KGzMbsdUq4pnXrfhEzxeTpwDQy89ewuetY4sA3uhs6",
  "key24": "kfLbHkixi5HXj4cpXhKTezC1PCCXU67FGkb5WR49KnjvXpGXQX1ndisFFtEuzzdvGwYyBPqtttzCrLP8HV22iUq",
  "key25": "2938zwDbZdejC7qBarsQquoEKxeYW14hCpXqAeeSrPWsL5bHorKrpuMdubngK86oKoHiFPaYcj2rRDkoWEbMf7L9",
  "key26": "kNTCap4Gsjsz5ynf7XrEfjEjQdnFF6JcgijuEPDZDeqZBwobLp1xdDeQaiAHxrD1XpRRJdvXLCCgAZ8Q9C61DZp",
  "key27": "61gMGiyn6vCkFXT1eNjZycQV8baWu6hLfXTFRY9v1vjuLK4UgvdNymJ8Xju7ZQ6RQfhFKDwm46mGF148JxEhpro9",
  "key28": "tKFkhbRy4Kwj3uuUBAxZ2QyLTkrQ26oFD3F9yfMTWDjwDwaryW9zw3FEjvhAtNwjMv78WVZRAg6SRxVmFGLzMEM",
  "key29": "31rK76y3mihAhpo9wZgr5GkbhEX3c47yAcLZZwTXT18xCqdHXAqiaK9SoyDe2j42M7RqfAKWeNjxinLFo8SN1ekC",
  "key30": "5ULaX3cJqt9BzryDdB2NwUKqenpXVvkVibL7b16nngcN9VXioCP448rJ9Qch9DNmdWxjJnJcCkZUVBhJ1nE5v64E",
  "key31": "3KZqjXpuSrx1rNhEk4vQ3NLDCRQkzVjQja2anLvqTjq5Eme92E84retvazXFkw3RKLD9U3u5RvJv4u4MpGrxfpVy",
  "key32": "yeMV5fW3QfiRLCKvUQeSwvmxujpuZf4A9sXYwzPRpccrnmEUsMJYadJvv1TV3am8yYHQ7yAVjrcKHELB3V3BzXZ",
  "key33": "2MkbPmFt4x5DufA2JZxtRz5BW5M6Her6KifruGnLsCG1cBeSgfJ3F88JegvAPou4ogbzFt7UyY6S8itNECtQuCx7",
  "key34": "5Pcu3NL582UNHwkNkRZzM21XvFKoXQ867WvDvHFPCRYBRuUjodnBstjYAHkgiTn3bFCWn1rC9uTEmV1fds86UitR",
  "key35": "VNBuFB9maSHG7FRjGLUyGfx4ktdNHjNuSPWqycPpNgiAXFJ7AcxgBXaZ22NjY3qD7jnmi4QGJEBmbF8T8TP473o",
  "key36": "Z6ZUW1KXEdEKYFcfLjGr1ouPs6BQA313JMTJYFVdDgN4uUXwGGYQnEzgRwYC2a7VjmXSbKqdy1yT1h3yEWo4ZaL"
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
