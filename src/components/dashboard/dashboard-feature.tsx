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
    "bQuDugjNKTZVyqBK39J2VyNnPwTgM4fgjD2ho9tozLprkbef8nwLJhZAvHyUCmYVvVGu6kPRPXiGRW1tRpKP6w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uURPLHQJobsSBsNW3a3DZCPdFdKxy1ZbdbZL4pUqQm1P3HaPppBysdrPLsNwRCsv9CBoc31xA2EBbyjqwMxu5Jg",
  "key1": "2K4x2f7mFB7hHcYunDa3pDvwykvFzvEMAizsy2VLPw4YGczBRCqFpTRVVvjRFcLQshYAQfFbL6916UxToNhEC2yx",
  "key2": "5ckjmDkrLAzDQHdJg34SjS9QSjPKuQaYtDb3BcKueM4XXmeNKYdmpRraTrJLGhNLZQk3oNJHbMJmPU9kQUTZcjHV",
  "key3": "2LnnN5V65svFpitBH5n8BxYfX9xmAH3QXXQ4oigteQBvdAqecyk1DUyvZjxbYA9D7BZxsWpdc8Qs1N7NSRbk9E65",
  "key4": "3fE8mKTfwVmunWWPzrP4ari3mesrM2axcZK9xjx9fk5uYcfmVfGt2bBGfKhNocp6f13LFmmtkGU5mRZwLfxTK8N4",
  "key5": "3DxLvnKBsah53mFuWoJzZ9ApNTuTfBa5ujU8GtWpCDD12GFY9Y7tKGAtpBRvgrntJkhH2xu8dLBRUbKtmnA3Ztxq",
  "key6": "3SPGdPhvAEtptDmPiJegbAWWXYNeGdJm5tvCpbvfyrJtNfENto4QTizxL5RkRw1DmciRHRJ5MSRQD42o7qgmJbhk",
  "key7": "37U3LSyT4MPecqHLzQcZh2VGPmgm1AvwiSJE3K2GaHbYv1d48MxiBDMJoAhq2JLfZnaZDgFQxLorSbjSE6fnqBg4",
  "key8": "2k1EGav7ZMnCNfGvew1bPAPLFiuQHaK7oSCBAnGhwjGuv5ExSiJcw3VPGQ7Q8XSwg4iQwCR3B2PYBEbSkZx6yFMd",
  "key9": "5szcdpCqYdfyYpksush2JypGvnQn6KjYgd1V6cY5fAKasNDokmGFBDszKi6h5A7NPbtyKQCzBsuXkT76FYsrdXUk",
  "key10": "dDcc1wjFkHrscVFaxR3JEuzfXmHwemE2jKZKLeZ1sCpyiQdALPHtWoFdVJzU2Ln9PFxSjvzUMpoCUcbXHMj4bti",
  "key11": "gNHUYieYyQP3zvv6sdLpG2dLeHjvx69iVLwKbtLT5NcrBQQAyScjxZrTVRycrq4GBFRpUmRtPHvibKKBYuWEe56",
  "key12": "e3hPh9G7EDJ5Qx1yvz9nzz5HQ2e7jRuNhdazYEw5KCC3TPe6HQGfLdiWoPndsdy11aTuoTRSbH7pFFYkbM6QRnA",
  "key13": "2hyiXPJzh86nnwqhKiU1XcpAniY1EyL1H1MGQ3ijZbs5qrnSUAAsn1k7UtxPDEnGRUhtS3PS3RkxwB6bvy7xYAQh",
  "key14": "2tguY8FEUy8n71F3MnZ97FYc99RHtUMt9vYVBkdkP2kxYsAoAB6aT8rrGLUABuTXfpd5LTEadvgYogZqkk6pJrgs",
  "key15": "33VXjEGzG8upumfkU1sujYxsFfqawVpRuYWEASykP9kAmHGVdwZUBDkt9PUvq8cSWGhSTEGeTSkHHppRPwxbwPZ1",
  "key16": "YhqSQoHUF6CtrKmZ8aCcTPEK4NorTSKQyC5nPdDaquXmMpBGMbuN7JoaX8ccx7FqmqkajzxE5DMv9npCeVs6dox",
  "key17": "4nAH3Quaff7t4aVCu2iy4XfS181SPWhuA2k1qp8A9eT2W77dviTbPUaEvVDMeEwe4Xs1cYPHsWDmqM3s5vHVRBVq",
  "key18": "5FqG9uRUtSWHuwibdMU1rzGVGLU2CnjnQw81ezmt72u1Yy65ZQFeZEcHN5pS5j7TGCxdwJ5K1scUx67NACC6T4rp",
  "key19": "mUiSnmcNpKWuqsdGNDUM28c8nQQax7rcGVu7YXWpqeU2c7UqUrqPUoXUFi3xW3UVPp46cd8o1xmyKirdGGb3F7V",
  "key20": "5PVPb6cWD4nMv25FSMdAb3mrY3CwGAAdRdiHKbTxDiAZaSYN9DisKtSXA8oaVeZPfVdM3xr2rw6adicUweXy7CqW",
  "key21": "3XGDTSKpcN5nVrJ2EghbcEMPb8DeRaP4gkEFgqquZQFvdNCHu4zCNCYMA89tbd4EEQdsc6G7777zRBgerRRdBrCx",
  "key22": "3wpf9es62gECEqob3mqPMQdvDVN9ST9YAAky1uEr6iNMPMDwEvSTpE4omsfUMBdGnkcnEJzasoWTwnzyxVYRDpcn",
  "key23": "2QjVJkWM9MLtfQuJSivu4ozd5HdXSMaua6RkvAoWEyyAKvQeJrxqszHxb6wt1ZB9Ucs9QhJkfqAa6jFkQhLVqFR6",
  "key24": "RCz7dE5zYXaLmcoQmC3bNM9hqPmr7GqMiEvoLpd2pq2DLQG8xFZvoRjYTiSFfaeGVTNWu7Gd3qhCKJwqXq5wsEZ",
  "key25": "594fJL6k8GS3w8sT6XwmE5cr4FHJhnjVyjmjepsF8eSaVdMMaKozYVTWhFGh48UKnmF6i2swzaPejmZ2PKvBZ5Sw",
  "key26": "4jBvK86jLcutwS4rhFPuapdheUq53MR54Pr3XeEH69npkccM8QXp2Whoa6Dzx5FjTfBhRULceZzXDRjTRPv7Cxsv",
  "key27": "48uMvFSFiRsRon9mPknmrzzMBfam3q5XmuGZfDaugRmDFD5vR6CZwmLFihfRAEyxBHQWGtKf2xoFLNu3osZ4eMvn",
  "key28": "HEmWCEC9H5DMDdBxvMNaGCQLG6b7JVVEDBSz1ybHFjFRvnKQzNDDjxGK2bMU5JEzWJLSi55LQq1uFP5BoVGwC5Z",
  "key29": "4qM7feqyfX9nNP1ao6YYRTPQXYruW7b45cm6dE7VYUM1ik7KNmy69LwGZE5hZW95uj5rtvdTFvUuCv8tQQrJZSuK",
  "key30": "2Y5vqrErPWLFDLkr9CKDeyywRkaRoy9N1Dy1QXkQUWVGC3Ldp1KR7GoJJj3GQibGPfc2jRBUYA39yL1Ng778D83p",
  "key31": "Uo3BEuM71q4q5Cm7sRPcusHq1mt2mdGzsbrTFQKMUzVuG8ToiB4dYQf2H4F6mZme8KBHteKVtYRx3DBBjVeQCG7",
  "key32": "3Vyx2rWtWrHz5N6N5WXZ5WFN3LTLDhYv4Ydj1CGJYjkc1DyNzFPbAY3CKDtz5SPrjUUP1Z1AcQ6MnSAT1nM5wguR",
  "key33": "5nc3B6NrnvzRPcfW7Au2n2e6qy7sPqTpmye4mZDUNQqKzg96weusuUydS6T4Vhg7RzJd6TGR3suxAMRUcg6yg5Xi",
  "key34": "2WLbppXxpvgqrQqagMvbrJTmn8juWRTNMk5eDW2Lenv6PBidHA5oBsorC3agwCdzZmZ2dR93yAuR7p6KYBbotVC2",
  "key35": "4r1NRaGkGxDaAbUvA1wj3DPa4k9NRzxg3Xyd58Cp2jBnH1YeBRZoaxMLofKfe6AUeFZyAqBAyyPRYhoQpoJGMoUZ",
  "key36": "2N7FXYsve4HGruuCM5WZjnUAonoT7DEEMnxobyyaNX7nq6T6jnyo6qLxsFynCnYeXyTsh1Uo4jnoxCHFeybcDnU6",
  "key37": "51WC4nrT7uHLVktr1V9HzJGK5u8EAh6i8JsvfvosgHPLy7Pi2coGNXotLmvzSpAqzfQbw8Vhfvr6ijF38ATtwMVL"
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
