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
    "5zUwPcd32uWTbdumTAQAXuci5w9aHt7ZGT7sxMwAT7HvThsPjkXrtjMvVuKTAF2rtLFnAtaCUq6CsdASa5mtLGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTHY6YdR6ck9Hi2K4hzbZEUUWWQZHmTHanjnJBheVxpcFqx9vKLYWgQfSnW4EieBJa3PydvCSaupJncyfHnr6F3",
  "key1": "5MXC5ozjHY7eBdQiU2zs8Tw4uMXotncJVCKQqTxbh6nGCnTeYmRmxFmwxVu3d42DTKdLYuykMvaGLUd125AGWHjT",
  "key2": "FTsjBHr7MD8qVFK75kzuCd8rqecXdCbQrShy164cnSji77ToMWCRCGN8xM2pa3Gw2wLaoE8sjhfGUZHh8yqJopg",
  "key3": "5No7QTzd4qpVTLqiiDi28yRuqcFra8MDGJZu5DpepZpGMNjrzDKSzKZHjSWWmSVB6PFn7V2uAg4G8LBizcjEppUs",
  "key4": "5q53NzFgNALWUwH2FKjFk5hFjoKL3RKWz6bpu2Xyf5cKKFTYaosJqNYnjWHRXpjpSZZZthCgyV7kjom8pomEM9Rj",
  "key5": "3vU7FY8ozy1PA72nw2pvLdipEw9dd32F8v9qB6jdv6Sg3ZPRPcqUxzaRHLYimCfaFapm6ravkCHL1Exxh7TMPk5h",
  "key6": "4LKJSNfz6jfkgCZ2qx8kmVCRLV9GLeNaYxtcRmRDpGTg8kNby9GxBa3avWpLACmZSTeh5kRxh3euxcVFWG3mhHir",
  "key7": "32534qqobRXDh8CZkqtpawmRhe8AodaffLUpEkKhNFwNMWbtsF8cvuxFo9wvCDHwGU4WnpMq7P6MfbHpUAWtwVkY",
  "key8": "2dAMA5wMyPdGzMhkLykoQgegowg3mf8KqtAn7Um45kjHxFjcmX6D74N6vXXw1FB5nVCPKfDACvmwAgsAxZqx9A8",
  "key9": "3HHuLzFnW1Bq6xufnewRDXUHz2KsiknzVhGu143UD79GW4AQ4GJRkbYLtg9NLMRYjZxYKwBYQfRQNWFT9UhRYrt4",
  "key10": "647AsvRhQS575JNn43UkeJYFMw8aHHV337iXmq3sBAjGJqMpjUxtPnj16Shz4eTuEer8pfnHwxc6mXGBvo3HE1Wx",
  "key11": "4ymJFt8WgsyWLwShdRzAdu4tp4FUDJVnaEojXS8JpPMLfCFhVWUus6CgaRrgnBzh7jubAUD6EFuLd3PY6aatePa6",
  "key12": "58CY4z3f417htVRZUyBYw4V6UQt9hwXZABv8Da7VHfpPZLxpT2N5hBLAZQfrPqHWmmHBkjDA7rpAUndYpfHogkJp",
  "key13": "3Z5jMbYdcKmsJZnmeaz6sK2ioo3pbDya6yu86FfumrLME2n9yRPYqCpHPWTmf57ASvJPAvSBupNrSg8Hb4BxLbjF",
  "key14": "s86yKW1XvGSL7dN3ziYh79W1ktJuVXQQzVW4Eivf98uMsrC7VhDeUGEgABzLVYKR2NuyiDsfN2pQp3BP61hjLnL",
  "key15": "4zS9B4dvBXjnLv9rf7UKP1SXfYFxspP4AjjuLKhYs4ETA1Xptf3kdePBzA1ntjcDLzwtNYUMc6JcTkqSi81nu24G",
  "key16": "4YJKP6r17tK9HBiwPKzGEJrfRuW6Xe5SqrZEcRGJpwjXPpXNp1kDKYXHWQGHsesKjjwBVe56LkDakngC3Rzm6rpa",
  "key17": "LwtmQ1sFYVccuvVV6K467TEyCAx3ETY3eataAYv2Wg8xvp6ZSaemfJJTdyEBF4y1AyHRtbnT72JFxoyhuxhwMvL",
  "key18": "3FtjRZNhZe9UwKMDEFLDL8KVAVUqVEx8yD6LEPsKjPWUPBoK7ZZAN4sotik1uuZUos9irKNGdZ1JtXHaYLSxBMpZ",
  "key19": "K2LeBt5dqKkYH9cyZ3dTLy73iRGmPxicDUMgoAQpEHGpLHY9T7ZWPqrMCtd7e25914pb3NgPUti2Cag9teVd55Z",
  "key20": "4gWtYKDThiH7oLhnbd2f6fY2mXvKVJNMSXriS9zYYhCSKMoSgwMXXrCCWF1auG4fhLrkN25j6n3Bdu65i2NXHvyP",
  "key21": "3FywnjgRegd3Qw1k97fjxRisN8YbaePAw7tgA8xk3znEEbVva24NEdmdkNBWMBBhC3TVubddfh2jT5djfyyuqNpH",
  "key22": "564UJsMMPW4QmeFm9FjGsWA6mrQieYq19cijjsnpVL2SnF8Ers2BhLiixEJ4NtkTjeWpFFx3x32B1Vo3fCzuvhi2",
  "key23": "4wh8vLvxBBCZ7MpqUrxt5EZSa4nQMHX3EMmBpmHyJSJR6wa6tpEpA75sNPHkQoQdokrcdmtnTg4eUDGNMWpkNZzo",
  "key24": "br5uNkCnd5RseUdNkKRKfgQE1v3JnTP5Pu1LFenNhva68zSjNHSzTrjWo5JgabJQXxU43n1wePVafYAWvNTLddw",
  "key25": "QdDKSsDgPE424wEPpRgfUg5Q8gcFE7sT8DTnMzs5kNztRy1BmhPKqz6jJxdJSHDkFVFkoDZt5NLspzGvhUxTyNL",
  "key26": "66NCAzjHS3Keiy9ChoKyFKXm468Nd1gW1g5ATwaHZeL9SbTzEooG5yxS2q6zKjt93FFSfJMVt9FQd2Vso3xK9A8h",
  "key27": "3JUcGGRDFrGhcjucyTLngtSSFHGgYiZUofFH3H2zaaK8PNghz6whanNCgnHRHic5fEyoDiM2HyrP3hJuZCwbh6rX",
  "key28": "2GZfENer1DwSbWy5fNEeoGhTh2k9wTT1jsBZpQezCeGtgyWpnfBArtPkTLpq4zEEKWkF6fX6QYxBPDdGJ99rL5ab",
  "key29": "5aH1a6JRhdDuevSm7PGpV4TTwtppSp2c48FR3KAGWijgySba3YiMcrGSjRSXVkcrbVYwXnsG5bnZN5Qs8sAFsDJB",
  "key30": "4796ovMwS2yXWUm1CnJy5mHXMQAETycTfqdnp2ok7xWrd9gb1AaTXRTnwz5RQuVjuwGSuNyJHJWSvmn7T8bKvHb9",
  "key31": "5PFnB9n4V5L5XyPRwkiUHm1uRJaFCncHSRiyTe2fbG9SwmkKjzdrTWm7TPaw427iCt3GFE99Tv7LTKyk6ZStgVnw",
  "key32": "3eG9Mbj8a4KgeEkSwNeQPXGBGeBQ6XhCYM5pT7fapY1PFaeeUfUs531ZNyadsWBgFcdy931JirWnwryocv4BogvB",
  "key33": "5Zoy5EfBuwAJJXodkHTdjRcUdnvVfcMeMu6FdEVxVdSbs6WQfjWZ43uifdkJfDT5hPPVvorsHZFSeUsmMbWXZNV3",
  "key34": "4GtPnxFZHQbvQUPHGtEx7vu8XzqCRLXr8NHXoE9H6CSfagTr39ueaehHEMX2WjqJ41f5BEANLtX9rWGKxX5y2qAH",
  "key35": "BV6Nxkcoym1iu4tHsRFaCrQxNDJBHkfhUTBQNzBqoYRUoR7rgUff6w6JxqsTvD8t6m5gURstsDV2M3ibqKiePda",
  "key36": "4x9zKX63yaPKwxAaDq1PE3LELUSciJg7RiRQPamXzXSNNyGGSbGEys4oy6AyL4DbCBVseV6t4u7GTgGza3fXppt3",
  "key37": "87b3wfV1QghBT89VFVXvfTrpAc35MD1Hxtmd7kc7PHrZUzY4neguvxg52r8YFWFRdAjTMrm63MteiYEzVjSEhJ2",
  "key38": "5kN87YBfqaZmMLtVK1EfuCQwpvDquRDHsgkmcBDyhxqe2dEcRbFQ4qXa2pncdhvv8rqeQpvTys6wbpUDo7aE8r4b",
  "key39": "62bDRMk4eqCAqwgwFskdF5k6CoemR77B2NrysYnDUmMQ4a5Hj76JdoJon9Zne6toL5KqaCHAUdqsBFgFdrsXDCdK",
  "key40": "YKSdteC8i2xURF85wvcJDSTLbwJdvFcCf6uYinjML9a5JYq38cTaGDqbcgyvfHyHo4Ln5Ba7Frnc3A9gk2w8TdJ",
  "key41": "5eS3SDfcUU2raTsTLLJk9HC5boR4JBzUeU6XP72iqreqb3UseFzW5bwAwnVwS2jXMnGQs832X1a32R2Ap7goFF5z",
  "key42": "3S5NAyEB6DEXHfETH2Zu3Wn8iXPRe6AWQk3P6S9Aguz9zrmC1sRHwXFfmqNL5u8hRBiSmTzf2oQLryFybPSSi1j4",
  "key43": "3X1YkecAbDtxT6BTajYmGuA5Fo3wz8nREsCjj1oS8m55YDaQBBzGvZ1Zd14m6ow3tP1Vp1r11RhrEtzw2mzVBirD",
  "key44": "3HNpJWsxveNbZfAid9u3jEuk2y2RNi96fat6swfMUyFar6YJqPeTygqUVAcnbYXpvaHLJzQGAVVTRDrDe1zzZydW"
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
