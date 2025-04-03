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
    "3ve2Vzm7HcjGABJTHJQ314H1egpQx43z941Yz49zywHAmEmVjvQstSNqKN5CMieqTqrFeozUBXRsBzHXG9sCGdui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2TSyfqtk8BwGbybkKaoqKmZRz2JmKDsDG7Frn1uagtWpEKgk4Qe96BPHrmDc2kwq2DK12fYY28JhEHo4Dq67ft",
  "key1": "QjzhK3AtMYXEYeWFrdL2CWwyos2KDQokP1DYbSBrhoogoBiQgLS4R2bTU1isqqCtyQZu3ozgUvkhnqtziTbVBba",
  "key2": "3WjiXK5A9ZGZmTqQuvEYFLxTGXfNhU9VubKVrCkbMRMcRTR7fut4hhpZqixTLGU2mLofF4JP7CcKJ84dtutzyb6u",
  "key3": "5dYMCDfqgHCn17mpFLEWpSDwZv6Ad4Byv8Si93fDjvkCEPpYPdcDPrY7ExYAvnbHN43rnNtxqUsAwgLpUq9gzMDs",
  "key4": "2Fxc4ymFBUZBxjRENvs88FKG2zmPxznc7Smkr9KMAUpVkB67VkWTf1pEHhMs9evaiHrs2Rix5bi3AnGcbHusNDpd",
  "key5": "2kxERpECr8oL3cAqJaT74haMUhUSX5CvM99VVuu1xgnnJLYrwzbai6uPai85MshCXUVmBu7oBevXAyRav9bU6u6F",
  "key6": "3B9xKPTTXoXfRK4yAckBbsbLL1mbbHQ7DDknHLkVS3MZLCGRFX2SWcUW7njFXuzUxKa9u7SvSSscfj6zea5Gqqpv",
  "key7": "4o68dp3yvPUFoRMxP9AuLQvsZfP3YPj7TU4oQ2q2Qrh6mnCLEmFvmjDgxUBcgZ7BymZ9psqhmR5rvefyjsxyzurK",
  "key8": "3aieByHwYYBhCEHXRqpJJLcWXwgEncCXRq8zdYeXmtTKF7Btn97v1JvM7HcmwXF9S1Eh794n8yQ88mvWhpdWKFSv",
  "key9": "2dXUYKFsQY9Us8ijGwtBZqr4wYLWmWpibuAhsGeVKZyWRCvKCkgSeMFzFgJfZRDtS2Eh181SMziM4h4s9ypBRP2S",
  "key10": "7CeyMs2umo4QQ4G8caXARGL4C8RYntz5MtJN3vnpYzVRGvCbvgPiVe5uNd52Pnz6gSsBgevB1fcmJjkViBvXBgj",
  "key11": "3eSsjiepmNswqw1QtihTXCy7qLA3XUXmTquD3eh6oxQ8qsVRq4tV7yaPzx8ddHUJmcBVEZH8pQAJR8FTDbXBjU4s",
  "key12": "5eHJdAjFJ8G4MmGLJqKoiu3sGs7uo7dpanzKruyZQ7a3iuqMiT1L5ZSz6MTLkPk9ttAbwzTerYaQ7szh6aEqZCa3",
  "key13": "4iBoqwAt79ChH4jJnWdFa6C3pmR66u99C8nktiFt5jYHqzzfqjZX2WsJkGZvHiDTK1dGcv6MJUPkuLWPVFQ8Cjjh",
  "key14": "4sR3KEPbgn414soe5an9Gij4dMUWjcTaz9ekPGqy1K9iXBjdWkm9XkGxGwMUotB8fjaCP7GDGCXEC137NkKDr5Lr",
  "key15": "5P5ohqEaQvSF4AGqcnYjsboHaSm86BoQhhdDiE1KKuV7BrtPUZbsiEBvXDRQ5p2HBUetwinVjWms9aKrwdP6rQDx",
  "key16": "5XFpqop5a98axfTGkETbAkRu4b9cshQFfZKrC57ELEDpUtY8m1MQXNpHXomVP1B7YNJTkZFamYD1YnSkr9v7MF5Q",
  "key17": "2BvDT7awxbk5jz6zCXTvNS1y5hQkvZpExe7AoruHx7zv5BY1qG79oLHzyhwnFXk8FXaKjb3MVLHKsKas1ggTFuXR",
  "key18": "3LJdJDh4dhB1sjvtFeSzs9ZKy8ZMCY1niJJhty2GqCKJwX5r1RrXZG9HeEHzXdfVefjW7hRcXe7LundR1uHXDSXx",
  "key19": "4Vvqnbz8i4CYDeAVi1ggCLhAKyPMLvXy6FybCdszFJWMJT1AehW4nH1WeaY16E9XeYioQ8jX4cC6FAQT1TPAXiM5",
  "key20": "3sAnn4skhtqyMSVyiZ66iwx2gixcFupigLWDSK83pstiJyafuQwwKHkSP3E5eakDTVXw54BVULXAGZ92Hk19GgpD",
  "key21": "1Pc2XFkn6yGhPmcaakd9gVVkoJUwokYZi3vf7VAVF8fnr7PwNarw3wU5u1kgdz2FMfkE6NFCvhnqtrZ8us77pUH",
  "key22": "4obuY572odCECwWzowyERdePhihAVqpyh1H4dF8EfsrviAZnVoGzDF3K4LSa8mVhubEC67Pb6AoqPQbC5V4ZuAqD",
  "key23": "3jDBwwoJX5gcJ1NtT8t6fDCwqfcJJZSLSXZVknd7Tk6WfZnKqLQyA7iKXWwYdk6nEqYuMvYhNhgmY8Ar252TK11X",
  "key24": "2C6ju3R9AC7gokztSczhUNGGWFSJa4vek5isCKDRyJgTA4RH5wijHxYRPpWrF9pWbz8y8mTdNBzWMWfCaL7ckMan",
  "key25": "2B646DvAw63YyHDaFGRCMuJhch7SzTFNCbJts2LupfizQN53Fx1kv2kviQDDiGDpve9wRMj3UFYBh1Kx3TLNS83",
  "key26": "34nkyfknEmjVY95pJa5zusYnitbVk9sNujhb9YsF5SpvRzH131pQiSGAYwLoDDUbWQ8cnWEbRTqFbLxoKkJVw839",
  "key27": "c4NZ9UseDpnt1Bg3s4aBCvymVCHL36Mzf83sjHxgduL3nat1rscwMgB1Pmau4v3ioSPL7782RzF6TdyEJd4g9Wp",
  "key28": "5QBgXtb5NwefCXz7n8QwVoqDt6FxuN3uN5dQuhucuwTcJwb7918uWQqqYQMpS5ZLDHFVGLF8r7BtNFzwnWvwhtHe",
  "key29": "1v6ADafGTfX9jvL1XSPfiWvcotYZVH7QhuxQhEDd931eALvTBBHeqPYX95RrbPHrMTjLo3Yk7tcbxQdc15XMG9X",
  "key30": "5R6iaRNCN7V7sbmNVa18BzHkwMwsg9HLiZma55fLRnzX2hyaFayGK7ZrtFSLotKBiyP4FiZbbfw4KUGe6K6hoMi5",
  "key31": "31KqsQrx5Z2FLp7FseSjRrvdGm2iweJXm4APGkEYpi8NZXpc9FLXLbJhPogxmTXa7tMAk8cYZmme6XxC7baRWgnu",
  "key32": "5WPNBko6bLso8TX9aEnL1doQKq55ycpmxGMFQwtXAA2j3JugVpmBBwohiwSoCC8TavnTrKyoX7PPdQKh6cFBs521",
  "key33": "45oCP48AN5uRJHhrwL3KT8wEzSLxhroo4LTDDmfFzioFDnJVkgB4FA7hNV8Jo94bhfqqDp2BHrCoMQC4piUdfTXV",
  "key34": "55iuxRg1NKBro6tx2aLQLHVr5tQnSA7dFZPT8k6232fiwDPQznBc6Cd9FG1n7TWGaX6pchqg74AoJXJeX5W5hnGc",
  "key35": "5LFjPB4FXzYwH4CLn8copy2f5yZr7EUZVSBWfX9Cs3479JUFKbDHcw3JdwsoPgBhxGG8w4AoTHauqNfL73dxypBo",
  "key36": "5JYdXfVQ1AgUtUTqtBDuM5St6E8BKNH5dSX4zZSWzrARsVkJadko2oe32AGvyNnNDm6ybsLJs7Aqq73hAxmtNcpw",
  "key37": "5ZukiEYbV7Y3bn8DtQw5d2kwhXGxXCb7bnS1z7XE9MLgcTcJTctvSnP633CENf8ivhkDFARoPP3Nv39NH3NdNabF",
  "key38": "3oReeLWbayBNGnp3oohvJ2sH8gx9L6EUBWtusR5QkmnwkoMPvQaSvVcCzCoL2LZFXcsKGgeKR1Je7uTpRvo5PNt2",
  "key39": "5crksxe1jcb2Ea4F4v6DKEQpCqyXoGBjXvkLyDxtygro4Ho5vUo5WJFjxLXGVj9PX61L4vLGsEnpxQwM2wcfPSDy",
  "key40": "4xsFBoLeratXGWohvRyusx7bQGdd727j2CBpV8XbHqNNuuZ52bFQnev4Ee9Hs3rPg29PPjxEUVQw6nMMT6kyxJfq",
  "key41": "3B3o1H4ty71HCFqpCtBUT86quPSgap7uMAvRcgLGyrxF8mmueQ3MUwD1sfH8qQ5sjqNxKnPU3RJxMyriaj3RZKJQ",
  "key42": "xLEDJiADGyuMVvBgfVJwRNpCHnwrnG65T3XC36hgHHdfdwcSMmyPxpE8Wjk2gtvYh7amzK8qYVQhKSfk9hVM7LB",
  "key43": "BPUPHQBu3kMQBgeDJ6bwq9CRe5RE2wdD7w76hfVAXBGu3XwYaiVdAgvbkazp3sD2qmMBfvL8nhJuL3QmbR5bZvo",
  "key44": "qF6vJVzx6jrxmHrLGdJbevapE22U5bztT34s73x1TQB6NaS6j4DnkgV78X63iE6u98D1VZJSkQom86Za7oB7R36",
  "key45": "2JsxcKii4MTBvg5BvcdCUbbCjND8jPCJ9JVsNerLPzab1b3DjiMw1yh85S1KowPnF74QD2MZxV7cfehaQpSc1nov",
  "key46": "3L9QJtHpfFfaSBxafnzuwKQ2u2RQVuEU9jVYqY7DibpYgotsRHX1bAVC6JPMstoAAFBhHtzfA83LStU6Jush85qD",
  "key47": "44FbXtevCLxuUBxtD8E6wHFgC2MYi49qGiDbeuMPNR9HVE4B6GciUnUvifma13pEmqXa3tyEAF5eVddmMQ3RKafS",
  "key48": "3n3Myxe5xn783zT69LjnU9aMZxgANJsTn5EF7EgviEeK16EDUer8UYe8BhRiopCrQc1SSwV4JzHDqhi4aMwR5Bjb"
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
