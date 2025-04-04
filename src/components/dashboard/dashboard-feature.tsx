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
    "3mbhUyAXLCvXDcwDG24Ni7pUBCdyYZmC4tRvaWSbMRFpYMEXvqJ5SyCvcagKaWnAQ8P28JnU4SrpvC4qyVmiPkPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agXbpiVfN4mm8aZzVESmWVegsmxfRrvMgW8hr2rhk8iCES91NE1Y6sVHzt1Gd5fDuEcvu69zzQtFMSbysTveqFC",
  "key1": "61cQbPtoPprMoQXLa179VzVpZSKTn9P7DyW6KnLjvhPHYddwoG1pZiE22upuQPF77wBkEW4VPUiEpHghT1p2d2BT",
  "key2": "w1TLbW2EapByf9N5R7xtgTXxRprV2oXnauLPUjPnG6qPt29L2Vg4FU5j3nViKHwDmhEMsLUqu9E4HJiUMHkLtaC",
  "key3": "Z22XFXFESF7SM6jrvmxpZ12aYkSmeEVfr2mVrikTK5AnJKdPJjjKZe5EZaxozYvARGxeFH9dvQka5TmhEKXvWGG",
  "key4": "4AC9U7zHLTCQ9mjmkqVzB9NppPmaKnVTspeThmbNLxxGA6wLHJokdie1raUVUfHzJxUb77iYQb55oPSeUP7vxvj6",
  "key5": "4yfxjMdiPLNnYrq3Ve7U8gRuChXW4uaGJkZMBtAzbVnZn3v1XnEPeb6XZuwtGAin5UnJzkaovkNQh5VTQarBrj2T",
  "key6": "5zZpmTK1z9dZtWyDRaBfaNhSPkkqJt2hG74WmJry9WvookC7mo2vgk864CSZ5iNjeiF8ukYhmDtV8ZN9E13xAReb",
  "key7": "5kKzfCKkwWkGdUKHwtFTSnaSh3x82Y17FEsxtYAJTNQLGt51QWm5CMrQcz3N6vs5YDjUccKxNpp29woxPPQTizEs",
  "key8": "4aWzNDKHHyZqvgg6DdoXwKg5rXt5GSLgktgHfnJq8qTnrwoP4HWVDnRQUXeie61t2g7caFV3YotQAwhbSLKWJXL8",
  "key9": "591wGmceHP5qVCPDwbgAnz93TU5HZL8HBoCiFSF2kPpHEvR1EUjM67btdS4DjpdPWqCU5XjEKz7mkzYumorkhGcZ",
  "key10": "4kXgPg16psvUysGQSCreoYFwFQShMsdd5bTv4GbVVayT1WEjfvxSWPxSzdkVBcbf8io6aj335h8WjXMU4dYsKi9b",
  "key11": "5B4Sm2TrRh2a8PoH56ZLAYKhr7ycWQndexJ1wS2un7kaPaPrdzJ1BafKL8ofbvf8jTbfgAnXGDegsonf5fghzipj",
  "key12": "4mqm98jAS2ZXvx7fwAPQ9iZGnahm6zXsTbWR3uSoVG16AdhWDqMEZHAx8QCZaopzAgyzuE5GyvE9vTNdamnhS2aJ",
  "key13": "5Nipy7SL8MYa3ZxiUsBUq2nZP7g4ac3Er3k32r3a1Qj44guhjtLXTw3N7cVkxfobvaeTPg6PqcBoxmSLVJatnECA",
  "key14": "3USAWQgQ2bdHRx5TK7mYVuhS9G4vREgZgke77P7V4JQvg4Qw6otKbxDuNxKwfdRDgVEdPJxV4xNz45N8Xwsj9GnV",
  "key15": "3B3njYiMA45T9m11xhaT2d32wNd5sY7yaYQ7EAEij6HQhjk1P7zhTjgvWAzwtsDbWd7NW7fgAqensAJkD8C2YJaX",
  "key16": "4fdQFypoooywqLP63LE4LfJK16G435j9ig846CKtVoR3sc73sasNKp3z3rULWJCP8naZSRuWrZEpMP718gNSQWWZ",
  "key17": "5pCYd63GXm7yMfG3ffsDi45PuN7A6MPaVnv8N2vveqKMhMmHrytGCmh1qQXtq6CCXXcTgbns7DEyUX33nmGZJPUp",
  "key18": "3uivWykBpPqQsLBnoPqRVxP8Be3VatcvgCkutw5VUpfgty2uXtQ8XMgfna871B2iUUBepewmfk3Wet2N3VTyGpVK",
  "key19": "55h7DYnLjffE9ScyJ1XeFNHJudTHv7LabBCefG8cTojjyRkeKN49GEMNzqhLAsTPFphKrMX9bNeMLo7GHWhA7HWg",
  "key20": "5pqYdK1v8a74HXQR9tTJKAnYMNjpWFZ5EcwMYMxTzHUFQS9kQghL6urpecxcRd4xM22UjgvqnNum8dHyem4jDNPN",
  "key21": "66RjPR1uNWNxkEKND3bjqm6FGxAQjFb2UGTkWaoeEjwFRe4QxSyrRnPyuYr53MqvWa16YgDtSgSEvWsy22DNGcdP",
  "key22": "2DKawjYkmKBJxXBR25wKjXqho1QbpK94VWkwLSjuUw7sE1oskdGwTZ4kEM3jppMX2X3acF79bTWc9Kzpya4bGYrS",
  "key23": "2zuWQqy7YP6RSR9YzsSNdkUaGZSZ8psn8PgfTTWNaqxXxMYsUoxrnRMD7PwFApUtiPxdbDvTc2ZduND5ZzWfh7uc",
  "key24": "4oADwLXic9fmWtAt7bDS288jY3qVTCrCaXEXtcQE5aUXk3jJJxpX9RVhhDSakLV6BungqXSnJPnRDXG7n61tQdFT",
  "key25": "Cukgo8v2Z2AXV8agAzhVsRi5DXRYKhLcpNC9rjoh94vyqBzKtR5H5Fi92beiXrnHK7drsPiK7FpvAVJt1Q4TZXr",
  "key26": "41P3iDxvBo3BjM9kDaRvMFTj57Q9VNe3RSXgCPEfnif5ZyZ6f9TvbQaHWGJ29uSwKu2PJ87NDn9eSJWsm1ajq3Hu",
  "key27": "4za5AzjwfLZr3JhYMKVPLMse3zdh3ZhUaf8drpbSZ3qP7EP3aC8er5GL27WmvV3oW5XrFGKMBnkuF4Wf7WiCphsA",
  "key28": "5uYRCXfvGnMGsRLd3WNJLwp7jV9j8YXcsCS532zE5dpuM1sBGvFnwhKsBg5GQSEExgN3VhTiDCveg5ptxurEjQ3T",
  "key29": "3iwVVXxyZwuZKKN7Eu4H4FZNx8ZZJioAVwVc1LnqW4f3fNt6oWX8P7576szPydKiFjkHw9dYbdwWNwtxcLigEagY",
  "key30": "2Euw88EXPThj67brT6Vv7oN87zZ8yZquKZxBpXsAMnYdyxj5DXgjag1KDKqkCJyMRRUdx1UtrL7hzTqdcuikKiSs",
  "key31": "e4my6GqC3K3uoa8LvddiYhVn99hVUtiKsUQemq8Ri1mjwt1vX3YPDNmpocFsttwmmJu328kzCXDvvKnFc2Jy3Ku",
  "key32": "5vNQbde6p4Ye1iNPN2wKkU4Aoa7r9Qx2CKovVWdo8jEjAY1MJm5VXuBKgAAPMz8gB14uAfJWpeS4d8uie1d45UK5",
  "key33": "5KzjWYxZ1Etok2whQwkUCZjHVSvSmvBXaWvRtSyAcCR78SefHoku7gZ3eSVfwj3iQscMxiZU17KC7S5YEPXtqVNe",
  "key34": "2CWfUDaewqPA32xnGuBNqLoy9Qwc9JS4ZD4fYdaJw52P2CRHvSpNBLNg814cRW9CdVgZkzWzs89C3UdSgip17M2p",
  "key35": "EbefykWmYnXWcJ7UmoKQYFfWFHQkWnwQqFM71o43QCBJFpKXaWZcjBjfGh32yfdbeFoJeoTwAZtL4mApZbj2Agc",
  "key36": "2THx3PDhDxw1Wvz2JzWtFjV9Qnv89uS8np6v9TftngdGvWvVALua32dQuNPAykHLkAveDbqkMaqDCU8YKd8nRWpU",
  "key37": "5UvEKyN6upZcsZXyLv5jSdCThD3tP4SqTqDJ1tcNrLAHWrWwK6X7bw1LsbqueTJFqmGLkahtozDuUSju9cZFHnFd",
  "key38": "CCPGXumRzsjHEmUr3tiZMTKhWAtmmR3ygWpGFuvBQ2AERm9Xpi75D75HrV5DhWXUicFHN6Jz9K1Td2fp3L7sSc7",
  "key39": "2LT3NHC3wTxCMojCyHNPzY7q4eDEMkuRm818jL26QLJ8vUwniB6m6aWWKbsdZiqgexLYRoBTA84aJN3btfyvrfRE",
  "key40": "5WpRTbZLyv1pHdqEuZG2R7XfgDmifgdBWsBGqgSZzCLYHaW7SsaMwaHCbGUWQDWXkZwMSkTTyy9PetrcTH5R5HuL",
  "key41": "1TZBLHNBJCYcN1TiGjv9UoJRhh4Hto5QCpxZGvcLQpxvq7xZftCSjCMsGF4ZXQgQj4SBEAFhdfkHmLja3N8EmNq",
  "key42": "SZqMtALtmxYMSHKs1ZKTT1pHtVfJUwErt6xdm9efFQmvRjcPx9bHKRmRHbxzrWZEJiacMq8KQytY6BwoBcVgTgz",
  "key43": "2SpmMAZNx2cgK1xq7q78Z8wgUFpLd3eioTxg2sQjRNyYmoZCitNCSwUoWFfkM7V14boe64Co8dqC6JnC4sNXJi3f",
  "key44": "SUZ8ABnifHzgqSScvMz8eGKXDhg5svFbHtwSZKCJQyZnaQwtxTa18AKKFsMZAF4P66yfCDx958RfHr5v7bLB6sj",
  "key45": "2ytyNGiUY2KLgLn1J9rxdnag1zz2MnDC5B6VM75Uhopxg4ovyZGVqDNyicxNMM6TYwZJDVjYzzWXC4vEp5P74scw",
  "key46": "223GKzoZZfEbpWaimKZJxKxBDZU1UswvniET1cb7sPHoVwPFStjheJ5yuEwK6qyYgbHjLvk8TSNayGKNkVKGHPuF",
  "key47": "58o1YqpA3PH35g5QHNNMECDK7b354MSrmPjefFPnwXeEWBjrgUHx8dS9noqcZ41tEoCNrpTMVywvhmVrnE6iRM3F"
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
