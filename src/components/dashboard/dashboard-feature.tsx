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
    "58bzt2DNmCjXV314vuTT7tHXfKnKz4pahSoxmoX9B2H6jeqMtyNxGFXrC2VXHYBpFDwyBRPi9EDh6spvhXNYqcsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YACxvkoPwo6eRSVTFvAY49L133fzxmtMQx7wQVb74DzhTBo681M8qsjV1z2jFTN8Vh35u1ai6ckggCNbHJ7WHL",
  "key1": "52FgD4ixziEticvywGoBthsc6NYkXsq9HSBq4PkpiycPs31U6xL1XXyciuMJUdap7CjkPzPb1Q6VFj3DshmVFxcF",
  "key2": "5JosyjTsRFrCyV1DofyhaXZJ9s8dnVXm7nNFs4arSFcUWABMkWnuezb4fDDnAUBgRMFRzj6AruwN9qRuYFDFMi31",
  "key3": "4sjGYeqoKd4sxWw5ySp7mCTTFBRx2pWDbfYbJuJM85D6c1Jx87L9c56WQ6Y5rYzVdkP4UC1i1DU4HtBWgh928wRS",
  "key4": "2WK6dnffeXsSw3eyfU1pqxSNjgEEbNSByQbS5ERcVyYpppQBTRUaAfVZe8r5ayZRBngRt8hkkH4zkVNiQCaPXwfe",
  "key5": "4f6QsgxFU6SFb896JSFMpZSchpSFR2eXRbo8XKF5h8EpNzxsK6uPPJPXG7JfLYF6j4WYJFw1ioodCZUyw4Pm9Ws7",
  "key6": "vTTakuczeVcDLsNnRZXoJZ7NagpWxN1We8dDLzHiwnmhzvznkCddNxoxuwkw77xx9evqrbunF9ayG4H2pbV8UsU",
  "key7": "2eB24hHFrtQYVLW7LxJqSY3MiTe3Zk6Q36Lv9kEdW7miSaVTiNA7W34t9y6XAP89EfEhQKSKMpxtnyarC22txtG9",
  "key8": "3GrKkSbdVE8oL7qRYdu1iCftKjyLGYp4ezAnNFX4toNQ8by5rjBE2TRYEVXN3M8ZrcpVDm7QTMnNiBVJPs6YbdP7",
  "key9": "rHwce7TETwmwiQmytMTBq6n95vGWfJYZ5usWo3gPWadtXa2sWNMdpBD5uVLh5izb7AWKr64DT5dVnGLk6FioRuN",
  "key10": "2vJP2Zv9szuN5L54K41zjXt4syNpKztpd6nG8rtduJhWmWsLnpanJVFU2S7fsfrCJ6ZRbUPn8bFi6kFAgCPZbvER",
  "key11": "3LwKvngeR8jvGvgjCrXetnbDvi1QBYJLLGSsnL8mSBAM4y93qKhHyGi4nUv3K7EGoQGace8afqWVtZzfEP3VomMb",
  "key12": "EScVNrWaAurNhKbPQVrYWNMAn2ZCCptzwEa861tGA24osPefnskoxe5ep679nLLxqNrhvi1ePtfGXBKRePrHcBe",
  "key13": "3BpevDCUExoY2j6y3jpSHMg8yLNEa92LJHhnHv3h1gf8M8EKKbyoPrfmfQBCP7YKygEAMbr4FL7dm28S9sYz7KZa",
  "key14": "3UsmoY7o2bBLLyjH79heQHuRw5QwiDcxms6aHYRDhw3rDWpibNRDAAgWLUE1DKWY2xhLUZnBmp8kt5TWps2bfv6Q",
  "key15": "pfA861jpmZJ6E6WYaqy5raYexPkDvJnYytXjQqa11Nps3RUDo4HCABmDPvxf1bAdvtBoKMNGMVzJGYiMFZhzb9u",
  "key16": "46sq1QJDAdN1H7uNZ6DR5Xxem7iVm8u6e6SVYhceqvhDTNL7L4rhtpC7EajYNFQVfrsj7pjppGqUB6QoT6jMBzWA",
  "key17": "4B8b8CrFtn2145mu52GNY9EMKaxG3nVxYiJFTeot1PF18zwePqwjoSE1amcXCrY3NCicrNWsuuJBQtCbmcfEpFUz",
  "key18": "WYH3dGB3YE94okFRjiTKFEJxpCnmA63akcEuU6Xx3rnMKJYrCxfdhjW612AVbE9UXuHQcpidCsuoTSyyN548TXo",
  "key19": "3jNUQ5n64ZjmKf3tXmZXqCP2kXhRcM8dbJs9g2cPGG7iUJ8dgp9ypVyp4uRw27Ti9nudmu1wgq74Q4Rwei72SDS1",
  "key20": "5anfTGdPDSKZgNxrMQ2mVBDrcRzAeVdPBGA4bKycT1zLLeUwZnvQ5taiQtPwLnWBTBDrq6peYGEpqCrK4GVKAsYp",
  "key21": "5Eimj9RwV9w4Z4aNXvvGiKKQh73Tw5wi5ntnkWV7o7kd4YB4BQuXtVmaSWJfygQoJrDDz3LhRoJMymSHWEAPyFj7",
  "key22": "5yxMi4NtQcdVqff5Gb5vz75y5uxLBdtybNre8cuAbzYizPx9JDK7ABF81baqKhqZu6NfUHwTonL4W8xLPobn7FXU",
  "key23": "2S6v3kGZHFKu7Xg6xuUQytLRauk6rTWXxrpSAroRubmQF3ZzeWb3VA9SrutwxvqDSRJxbK3nVJL2g4ZzkpfuD3kL",
  "key24": "2zqspqZcyKY1T7RAsvncNZZJWRan94d5vZKgTMCpSLom4yQgzv7Mt42obbsFyJUwtrKuHm4atCUDgJ8MLXHZVnPn",
  "key25": "2QEafF5ptLHe5pWYL9pRtZYUMK7sMwAKyVdWtz2EtY946UL1ZJRtECvqYwrzwKLhwbXFvPhzFuD9SRK3P9bx9EqC",
  "key26": "RLJGUy4pVKnEwch7SdT4Mftoebm4dKURivQ7heqnbP2ajeX3wKPuN5ScekJbg78EY3XaQKCd7Xzi8zpv2FLEmgr",
  "key27": "2butyWKJWAHuXhmtnuM5vWxmy5NSzqyqJnSDzHty19E81UjY8P4xqmb2VptkRogYyiFKy1Ciex1n9Cg8aH2Bdo6d",
  "key28": "4HkXwVN6qayPdaED2Wmr4d8uPFBy6CW4FvU26bpYpSNsHuRMpq9nWir27EhAEsGXLR3gEUZCvaLfqmuVm8pF91gc",
  "key29": "2mFQMv58Cqw1PmjBPV8PDwBBeA1icuhp2BZ4jXL7Ht7jfFognPZc7R6txQ2b9TJ45DnvPvAxcaD27uCEtjXa271b",
  "key30": "2spqnfzMRgANirYUMibCWxErkP45vdMZUtwxppcdL3VdXo1HqRNXQGkUE4moMGShPVJMSTHaPCzCj12431jA5rtc",
  "key31": "3Nf1hzpQCXBZovt3Q5tzue4Jrb7T8rcJeGDMqQe4ZuAV6DQbfu5yMr5mqVEayVG6ZCACG31uFZMLNNJqBTjvw7nw",
  "key32": "5K2NCYYUtNFXYjyLf3P4GT4rdjyoC63A7XEthBAt33rcbCuNNDZtLU5uL3owSJLYM31XWGBxNYWUcg6YLhCcWp5N",
  "key33": "3BkxZX8AYr1CCucQLgSnX7am2FJrj6HFNjYQANMsgUyf9BczTC4efDzjk9BkAgBpc5raH3QEVGgzNDi5PBhqfkSs",
  "key34": "36dyj5EuJHHtH5Ewu8oJaaSFxx9MxGE3gNPYr1VBTXpsjiuwWnRNjCNjHxUYH34qDcxn1bzi1PoFVd5a6RoMq7BD",
  "key35": "58nNMgB4HuuZFxRcxnCcKR4nbJGbnHVj229ATzJPYSZQ4ydzdBJFkqJw3bGg3VsGRtfuvxrZTbU6TjUAvkecG8Y",
  "key36": "5bYcLtfrJzJp2zUKoPRZtjiUJnjUXMycGyVz182Z9yb4fm8MPaq28WKVQ4wQ2Jpwsbnr3Pi4L5r4a7vsx5UvauyA",
  "key37": "79y3sZmrZe47BFGupThdk22WXfF9VSZsjAoGExJy97RqX32A2TAZ2bSgnrYZs35Ry4Vazj5YfyZ3RUJ6EWwXh1G",
  "key38": "5Eg1MTgbQK4hqafGSY4vp2STeQPdxRCmPwoz5YkyjtCnRBEhTg2nn2jcAUTyytomWfmggT1k8CePgRu6K6gJur3t",
  "key39": "5qysJjYSHVdd3DMQgAUWjTn4LoGmHhTCRn9n8nDEJ5rkckgrcfhqQ8on9PxiiVeccpEHxUrgfkdGQuEmFyBrPuo3",
  "key40": "vckqZ33RhBoT71BKTmj2qvWSu36jnVN3WSWwzr7UHgro3PTu731bkyxnBZAPTRefE3X2TCZearged8XgLqxJVDy",
  "key41": "2KkdnhsuJ2WjGnjodyduTdXEDGzrqju9FSBZrXhahi6H8jKa5xoRQYBRRPNYk2XBijhmHgxVD64DnSrciWQprfH7",
  "key42": "sBsvMze1KABsiBU2Fb7EzFCf7LyGGAAbFUp6qUWmuCfp26YqzDdM1pezofNUw4SfEc5HKP6iche676LHwv43k1m",
  "key43": "4j9u7dsdVnr1vv8xu6f1iufA5ZJ9jN9bG2mD8qYPG6xj5zFddFrDAS62SVFi5jHQMGSgg593TPsEYC5yrEZwRWE9",
  "key44": "2gaWMu4mZpR1zGUJowzqWFXye1dBebuqDKTsiU4TNynPSP7pcyvJCgmXwwyPtDrTudfVuExhhJxyETLjWDBJ6cu9",
  "key45": "4Lr7X1kCyFscm5b7sCSiuVQmVYbcyeiNL2bQaCSqxv6XDA7FuRwimo1Ni2otB9LZG6FQhuwC6EWifv69cfHzMzxW",
  "key46": "2jnDGcADtyXbBXufsB2f2cvppnHG6J4fERmpmAzy1AZzTuKHxw9ZRS3f4op91eXnXk2Gw8fEy7RSRCUPwo8mGTk5",
  "key47": "UzSgb1kFhgECh1c5kshTU7kxC918pg5SmGgPfKqHmMUDz7WEdcKdbZT6RPRTrRkoQ1mrF6LXLzeAygdNUUGsPQk",
  "key48": "VHFF9WvFBHiHyenzXtoo3Q34BKHvJvp4xpfdq1TfVTGVigCLJcUKn6uzdMK14AXGybXvSidnTEYufYvMYJyka7X"
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
