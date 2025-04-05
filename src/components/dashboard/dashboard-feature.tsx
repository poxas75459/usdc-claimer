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
    "5twkjXvangKiJgkUsBgftTN11Sy2RdHjwNYtPuuwABneo765hkyp2zsEHNBUun3qmRdxHB9CBR6X7r5qNCwCk29e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpFirbGEPiusdUnH6HN85HufLQH9rYyb6iJ2eT6nEtu8cJjiJxdTVMMpvRN5SPZMMVnws8iw5xsPafDhqYupg1h",
  "key1": "3BZ4G5xFqd1rwBWTs52jU4BAPHNY2eej1R1KPPzSyFCQcLt68PdoAiZGQF2AKKQEWNx8xeLJDEdFxQJSMM8gchuz",
  "key2": "3Np9NGATsN3CJKpJS26eh79gu3C1MH4UeRGakKYCt71c6NiyQNkCeVZdJJHoMombjLCi3e7otYJqKN9NP3RomHXA",
  "key3": "4Pvd4ZhNNSWbuJvVZHkokp4KeHJ97nvYaZfTpm7a5mB5rhM18Ddgshr52UawVnEYkNcDXoVRpL8b4WSTn6Y4UAYv",
  "key4": "58hHEHAr59E9YDQfzqLKJn2xd87vRrBTbmZ4a6YHAoC1cn2aaGGh5yGHDZ6FD9jv6T5tDAMUqcnnMjK3hr7dcY34",
  "key5": "25enz4mRDEW4SFeDk6kBQtQ9ZarrnHcCCE2LCjWqc2JMA2nMxVjiPb94d5yJgnCuiv9x9enPHhPhJuiC1g22vSyB",
  "key6": "4eCLwBPAh2x89PfQQ1yMCkAEPeC4MnVEAMt3FENEnducvTZ9ABpRMcgVxgmxzCyv4e2RRQe8i2ydJyk6ar5n7Mhf",
  "key7": "5c8bZbQp9ejCNDWLWvSSeMKidtXbTtkkXxooRmzDTr7edznPNfRRpE3pmfJmLJf8TUyZjcHTPhbdHaaW1TxwT3uV",
  "key8": "8BJwe4g2sUa5gwjU4yQRMHT13EmdnfBLxZGs1iK938V6UEbGabWPcYTp8zmnP3DmmpyWDitKEfWtKF2aEJUYK9z",
  "key9": "3h7qUWPaKYdysaWVGiLSvaUYnXgqz2haYeiVMAiQgNA1shHwLwd2xzUmu6opFQK9WBf29P1fDjfz2MHQJtUzBMZz",
  "key10": "4tMvTm3qjtqSnFTkqF2eytjV9QRRSZxREPFxoGTSLADrnUp1SErWoWR99HZUPwSia8Y34C5Jz9o3j534aKsJ6U6o",
  "key11": "5ucu6nsphkxABnjsHqKxLEyq8xm2CmmYNgaWftxjQMCRWdThLk8eNY7DjptDWEEewcfLzydLyzRBx4H5gHGNXFuC",
  "key12": "upvv6N26V59iC2PXoag3bbw44db9RJgrgNJ9KMUebDEdudRKwmA8n6ekYGwMKDQ6ieUX4LLTQHnQQECrJDihM6C",
  "key13": "5k9ao5zNwkxNVy26HQ29X9xwf87ieDhbVXcaFLgjsSxtdtp9JkfuZRazxgmqkmkvkMe44Bg5HiLgtCUT9sjJUxK4",
  "key14": "3QDeDChSfNnti3g7YpxLiLgFMekDF6RZsk1agEZCJPMQjafScroifH7Rtb6GAVWCwQRao16PtUy4gjMiPakrjHDS",
  "key15": "29B2S4yZmEBLipQwzn6pJsWzs9uKSXzc5FVGDgqNMAKQ5e9qEDnivF2EuwVNrh6DRBkJE6EQ73NaVGaTsS1NoDS6",
  "key16": "sxLUv7NLpXNV2JfS9mXtTjV1KSuxX5qAZxV39CdgfTMditdQUWbzNMyBHsgXq9DeYqZzddzhwGTXy1pi6kQDFpM",
  "key17": "2dAJEN1yFBpBMLR8p99J96xe4wum8WU8gqh3uyHNWKe1HeWaVFWYqcWUQNwJXc4ibEwFnBCmkF2LHb1BSQh3r4gL",
  "key18": "2UqaiQXbU45NkN2AR378e1jVppBUjHdBA1Ccn99cNq8KgLkbdySjFS811HSZW7F6QRZvny3UkpeioQLdQUYx2xfK",
  "key19": "2hrFP7o2YFePAfsTcrKJ9i7c9f96wFS8Fp9KGH8junQKHJ8dacDe516MxLNVVybVxW6J5jyYXtiJWuDDXrZcgBMk",
  "key20": "2eHxH6DhDTWjH6oN5Vsr52Cxoh66mJbonyNqLgtvjEXbeXNk8AhYCMxeLgRHsPdyXX6crRUyFpQEzX8AcTNW8edW",
  "key21": "5u3ieFZbk8Musd9VGEiycUhmt2r9C4WuPkBoxAzNALXfF9GAw6yZAkyDoqoT467WmyASXUGwVEWguV3vStNtuzRP",
  "key22": "k34trSyVCKBQR5T1vBGVBe6g4oRA6rxCZkwhV9DVS62yaBFH8VqMwEDUgaaoNJBUPDqkMJoD5Xhvt8Qimr9asw6",
  "key23": "jVr1qzTTPswN6SU7Z97TriKzb7s2Ck5o5xRaY4k8kSi9fqNJryM17t5uoBP2uBXRYhxZAvZUc5Lmxtz5gCJqpps",
  "key24": "5N82fZf1q7aG2hy2Cj2MsBdmJXCb6regzB785L4MXj29dNENC6bgP7YBvq95tbx6kAcsxTne3md6dT2KM7WJHATj",
  "key25": "5qc1L5Zr44J9swyHBXZxkJeJatNDUt3qXifE4MV76UdFHkjB7LvSfcuy1razs1wZXHA6sSTciS6gzyQdLqzd4bXV",
  "key26": "5LyXGVyNzA7d4yZHyc7b5B7zXSKBsCNxrCQwJW6ceWhTyhvA6aRjQm5N3jknVaAJatWbXX589avgwcK6ppRj7tZf",
  "key27": "5NvDVEnAk8bnJyx7uqYNwshRhbGqgQRPT8o3pUd8LXTnzTMJPxxMvHKEJYft3vZ5rSxAk2YjWyQs1CWZNdzSLWDW",
  "key28": "5iUFT7X5JBnXKmLp6nYDn7qbwdvGxtySj4rfZuCdJ9wkmAsQdKwZD9gJRKWAEija4HFHknenkMmaNP8hxqMCxFdg",
  "key29": "66ct35eoHWWzURCRqKdaJL5Gj8Qg9xCbh4fPBZ6UQonaRwJBQ93smAiJsGB6ZLiRCRiZfD5pydZ7LfKBUG4wVg4o",
  "key30": "62cM1BREcf66Yr8cpGpF9TkRQprgizwYmctaXsdxNDMg46XF5Yn1NTZ6ueiGzour9gRRVicd7wWGvWmsRPrzdQ7N",
  "key31": "vYJzrWSkCQ9wm9djnVUDt3rB8uy9YkW4Wvn8JGnu39vnaA8Rea66H73jF6AsNocozHzEBnv1F4NJKTkaHxVBFe4",
  "key32": "37s4XWQpu3LDLDs8o2VBEDQH5myTrS6kcRMEW8LmC7ByKf9Gc7iH2wzaZsBuUJx328tu6r89QUSEZWTfJyEPd9p4",
  "key33": "3ze6m7mUwk8M4Y3AeaUXpdVhoiYnanXxFuy3JnyWW17fyNmT9ztJRCnxaGufPK66KzBxVjy6Ry1o8hS7kRuB2nWr",
  "key34": "Kf6jmxkXmHmB8PYwSi49PiGGRM5tToSwvzfpSssuusQKomiqWxP8hXveE6JLRh6tNqbroCFA8jzBfqahJnEKk1T",
  "key35": "4ByxAkQUZukvpD4UbfhsLTj81MfR5zgSWWaScziSsp4mMXY53g1eBUJhbMQ573TjdUmhJJA3ewGp4cnGuJn5u9HG",
  "key36": "3nq52xeXfLCHSKgZYrzWJDGE6utovWnGHkEyHnsDgH7mMqyrFhwEK8y6fZC3s6b4o9VcLjdUYWeWH6vNY6H23X9c",
  "key37": "3nUT38CjeHXzMQrmfiSWQbkYq2fVnRT3eanaPdUezFCpSZnRJzpQawUS84U4xngW7E7X3FsQabFCHbB6cFBJMoST",
  "key38": "6nUnNtAtJSoL8amrBNo2Xdvmg5fJKySq2sgQgfXci14wSMDu4jd5TqoMnrTthVwwXXcnUvgf65bTbP7fgfNysdP",
  "key39": "2NmqaQst12Gp3TFFMHwWfGjnoiDL6K6cW96U1xxGgxt4vYbE95zQcSLkCTGmcqq7Epba9qhbbkRaS7sShwRqXpZb",
  "key40": "2hSMc35AuV1ESh3vRqaP2z2pgPubYVLpMiHZhTiB7knfqa89TgTeUoyzfXHnU17E8eRyfWmKahe9vpJCCV2wRHBM",
  "key41": "4oiK77gEdtfV4C5iEmoR3qQ1EwRL6uVCbrevSGoKxnid3B4obVuZZJXreECNh26R5H8KqtnpjwvwpyzLWkwHRK9J",
  "key42": "xeheGqc2bKZjrH97SPQBMnLBEYbj2Xjec8LpdEPNcoGJuyGerm3jEzRJuiTvaVGqggdr5mib1EPHSY6npoX2BLp",
  "key43": "4kGsMjNkMF4LCPXEMaUKGvB21HRF7TRvkFdxSQQTi9phPP3KGUma9V1CDwUxr3RRbowCJvgZ7kcK4mV1yYuhNFoc",
  "key44": "HkoMcDUzA7cUtZURcsCddqdcL9zevKqWMiKJRuZghwjoSCc4KR9P3cc8bKG1kR3smWFxRK4vSyHLh6Da2F9VUM5",
  "key45": "5478KyPTFgjquCbREEpunzH514CooozuKyqLTzivxuvJX9iTCjsfYSQMMtJM1Yzgt5t7yxDBWQA5it4qsKPjrUj",
  "key46": "26VZX7A1DZCctANojLLX5sahzkJv82uB6Htoscx38sYKvSkZLJSUPLvmqUauvrMDyK6VaJyV56Z1R3DwWeNgxxeb",
  "key47": "jhv1wM6j98HUAZ96Rp8T8Y1JVHEhnMBDHkkhGhRNsh3X28yDjGsfFSNwgbQm7urFUvx17XPoYeeTw5PfGeGQQrs",
  "key48": "zQN1znyMY5TPbP8Qsb5yoKheBDgbBNdLm6stkoguyd6Q9LQbHH7gTCUo3gz5JYMJQPZDeDbZ2aG9Ugm9fK7AN6q",
  "key49": "5gFqfrNrgPnoWDUp41KcCmHAS8vkgB49QjWQfggN4KjNKiEvmdsne3PvoZJ895yMn79zoXzXnijPhTkbQepSKWnh"
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
