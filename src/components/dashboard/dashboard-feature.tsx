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
    "5LXcwVGstv6mrFPWurEiYTHCT7zznBZFctGdoACXwUSzRh7JamYAHgTYMBucsxUvQFBhF2xuXwpJHkqYJoMqnv8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qikv9AHs624K6aqgSCqwJG4iQCKHfYCAfSA7Ho9aJQk7ZiRkMYKXn4Sq5UK3fS1acW1BRZtZW85sVj7ew8sFY8D",
  "key1": "5KsgJ7EQaxpKC6wothvK7ctGc1i3AG1omDdDUyQoCpzPAMjcNCiWnZdxYLfjHxpbD9C9TRK2izx148tGTehZDy3W",
  "key2": "4H4Ac7UjawEuonnXEvX1bHn1dmgknqLyVAxauW3gcRkoG6WufQPxNkRDDXrgvr1ruFvYMYw49koRG8UVCLemBc7e",
  "key3": "21tJX2PebQuTkGTqhe18wPbpewsJQA8bFECSMEa7B42KWgWMn2sshVyjEXKsas5f8AHL6W8TUkqy7n7z6KUcG8Kk",
  "key4": "2oHzMrnUX94RM3VdZcgfSbgdCKMm7mutn2niHzqry4PG8ouryfUzmMaCYN3XHvocujWWz3v3hvqGRsSeSyXgHxzV",
  "key5": "sq3vYUrBtBZhAMaQigumvrquMr5AD8FtyxbDDZa2RnYLV6wTLRH5VWL2S8tQ6p7VYT619JFJYZSu5gB35uCxt1w",
  "key6": "2N45tYctF66pQdBVzsqvpVnm6JpCGywNAHvig6WuSdfc2BRvAYdKLbLa5M8uPABNqB9anGoWv6U2PHPPaSCFaLde",
  "key7": "33RNbAUSn5YgJaac2Z81KpRXCoEeAffwLF5N5egNLxZh4zn4Myp66gVAVjbKZR5xFKu3S43gYjkY5gDQ9bqGuxML",
  "key8": "3UsMfK8vAgsNPNiw6dkCJYTWxVmqKDqXTupjtPyjeGQpmUTXh1UQkx2YsC9Ne6CfZjUrLgKFM7f8schvWJCRPgKJ",
  "key9": "aH4AC5pnZ2F1DqcP71uS2RLUQ7LwGnSecbJon1vnTh3CYvrL4NHx4cRx4CXvsUrmDQk62EK4eRAzToHQiuTABCN",
  "key10": "41Prz5KsBKxVYHNn6WEkcSFsbheraV4Mwbq1bpdmsfMvMeAS449YYzA8UUWmJyGiZciqcdsZQT2CqBM7j2xS6jv3",
  "key11": "5172i7QMabUEncYp4jdbmsznQ5chPPXeyLGmJ1ocYpSRN5fQBZ8SfXJpRvojio3cg397EXqrRKtCvPa1SF67yyY6",
  "key12": "3JT6SE3dwDgkKyP9z6GjHmUAjDPPd8Y58qX17RgwyDS5QTBcFwYrBaGFrJEvJ5dopkb8pdAgHqMfrGnRW4ThVg9V",
  "key13": "kcTvRug3FvwbngyLbbFSVRUjdAHYurEToQyqQn5RrWv1mnEg2XmrREQTUBDiSkaDU1dnkiw3Gfk8QCQ1KCQcnv7",
  "key14": "4iy8tQK7rG3DSdxtaU6ogr1TZHoLb2p1zMYBqf84yi2pFT5DZa1cVsq8AEx8VRUDDnCawKSxdJMzv8tbiBQ2itma",
  "key15": "4C9Lw4u3CXFwEo9TSoradGfzVvBjUctptEBvRJTPt643fZUV11cW9mhFrEHtYFYj1aQDpt6D7Bmdg7vqiSP2iE9c",
  "key16": "BhTKJHZx5sZXc9MbnZ3BWZgpj5R2ovcydp5aNseuRwVPv3ji8CUFtrNv5QrYnZQFfjZmd5xpZfSni8MuvfwCpy8",
  "key17": "5fz9PF93WVjySHfmo8pQHLrQr12t6nsxxa5rhqn7ueDyxEQwYo6vgSPf62Ea9whSPmtyQTTEgfKF4WuV4qa5P9si",
  "key18": "3R7DjoPGL9cAGDXgN2JUta4P6BbZN3KZEZPFPHy2SJkqLucdSDStHpUkYmiZfBHBy11chevCbdc7ER55Sb8SYt4M",
  "key19": "2bvYjo5ZEojfw5VkxXTt5i3brrwqt1bUK1jiGXVDmZfTucabaeeWAnk28YqtEym8ynyh1vzfZGfpmm8yma7bXCkp",
  "key20": "3Lquro6L2CNiKnkciBp7aCg5C4KkYPxYHfaot2icZAfJNruK5c7JTZv31zfqdY4pn9igv2DWkpcFcwBCBRpYpgEL",
  "key21": "4cB3oJjsHmUuAyaS5NYA1zREbbrV34VnNNh9g4W3oRFcLtiw2J7men42WEz1ETkLSxvcKqYEt9o8eonQmxdPqEdr",
  "key22": "5PJwr22umw2hEb2sVMGWxJMbzo1mVu3WrtCunpP3QCvWxEAj3iVDH4sx32PEPswVKjj6j9kDaMZuRkeTDMhJD1Zn",
  "key23": "572sQmPB5o1bmKSKFzt8ycZRBstvPXScpqWDfjJZfvgpWV4GeLHxHPPaX9qegU3ujsJLHafDgsmT8Y64sVynNA3P",
  "key24": "5H1MJP2WU8biNMeurpjke44673VWmmMXpQ2nd8sKhT2N8XhQuCngtfacHgK5tdgo4YBzBXP9yPHeotZZiePJ5hfn",
  "key25": "wreZkFkpK9QTFDJjkKfbQeeMbSs4R1M5z84MhBxzwWW8YLXsPiZxW2q66YaXtqSp9GPjxbeoMYhoVNMjiuEdXM9",
  "key26": "5GyPHsCmvtx842rnBra5Py3cBUJfDcUEVE4oJzYnCPUUR8zdgKuwiYhTj5Vm49jVqmCtEAP6pBdciAdaeQMqGqZu",
  "key27": "4EiHVk5pBjuiti3YY3R93bb7AqKWzLPGcaxujNhZn54JyfSwxSe3yEc8dTDsSoiPi3fGfr45XL1m8VuMv1fV2dcD",
  "key28": "4V7dDHdmRJehvVu9ywGAqYBArosvSAmhT3ojRTEjnDuhhy5fJ1QCfAB2kApYr9pueQwTWA9sZ2PNnsVKWHS2wbx4",
  "key29": "2mnDWKmneS4cULGM8iWDWLf2vhJU9wuTXvNgTpd9cVMwZu1wSKYBTFcLGxdfCNHkkL9FkeHgigv6kie6AuZz4hyM",
  "key30": "5Pm5fJPQQzukXTNJ2aBy5DsYNtmyUo67V7QKSjedpgTp5jfgbYn4XcuA1QmhQco3mAgagfj8H2ufeEw7NnkKRf7q",
  "key31": "2gjjkHcQ2ADpxiZYxz3sC6rJ6q5kaEuy1deez3waPXTNuuuQ8r29WKNKKqBaRn2f1ivgyZKS2GJSuDZpg5jZ34qD",
  "key32": "5nuDVSbfQ9C1AMbGdaqErPNd3BnFLAbfezMiDkvoE97Ko6GeeXV18HjmjQ85rNmhts2Bvahn9jD31QHsr7538Xia",
  "key33": "4B9KmxHrBi7KZWqcZVCV3fJ6dKLRQ8z3dQofWSze4nbAmQa4VMXU1486JQmc6nMaohC4E7VC8ucAmYE2MvjmF3Xa",
  "key34": "37Mt9eWeKea1GLXAwjahdxLSjd1cHt9GfzJfayN8QQqSKZoZzU9wTTn4GR8HDuqekPaeGrKaUooxVuekspJr95Za",
  "key35": "3a3SqUxSWYDa8QWdSo1DkCereHnn49vMzwzikE1nzkWuCVQXMLFKutx6NTvbFVS4yutusgBgpgpv6GRD7j95KtLP",
  "key36": "2fpF4xQ8giduY8YCVqaDZd6zwuNehiDn2CR6zHxAXP1VkFR92bFspahsDCFtg2fbHhLdfHmDQU6nUphswg9FDo53",
  "key37": "2QZ8c5UGQoQwRgTswmDxX9hNYQ569UHhFxy5jyhk5D4tjyDXVn6uDvVyXJTxCmM8QDcet2JErY2ezQrNWAUmWABx",
  "key38": "4xp4DFvPkhtYFa12w1mARXk9zLPUDeoz1zvLttnJ5NMtUdjUUPvntQXxXHuh6jZSpJ41LRy7NvWRDSSYkcghnh3Q",
  "key39": "2LTersRLvoyyJPpYursST6PmmJAEAu6eLR8Z1EkBf3Ufr18eA5fztSwv1bHmabANhnyZWDe81mzjK2QwRwMHbenx",
  "key40": "3GFfUBYefJb4GeCYTKCaXzBwRDmfcRYN5AfStywAEU4K8euW8UEW5UpyUUegvcXub2nWiwLdF7xsQYBWh2zCZCLp",
  "key41": "38MjiqrCeBdxrk8WUCzDfk7jXztJtSsZBa8jGEkxyho5YrJthJwQAMtgBKdeQQxsZoyo2kEp9hNZufAyvjN3bhNv",
  "key42": "3L8jren6KoBYsJtATn4TAaeQwYViSvJRheMStbeQjNmHHu5nHq4ZhiyvgC9iSSD13kjsJ3V3Ue5sJNSxrf4MzNSd",
  "key43": "5Z5Xhr5S3iHxQwo8jwYRUteRgR68kcP7iPiGJPMEnu2aDvf411rEncEJ387yzn4uLo8KnKSYD26vTndkKrVpzC48",
  "key44": "5jxYijVDL79f4SmeEnB3Y3qF2CMQrsnA2QNrbz4btGWxXgfCV4GdAvQ497GyxGcSTQrK5iLVPmuF9jN5Bgn7886H",
  "key45": "2RfAkU6vBHMmCEQ4nWtwU7pYven9nUDCpq1areB7QovcVSnabCStajWH7QjX3N9oDiZJu8ZU54zFuGSGL4ygo6Fr",
  "key46": "3PepkbpotJSt8GzvJ2ukiHmNXMk6Uqf6gNbVumUKLLNRgXToCpGgR9S3WxLCSSYtVMhv4HFxNGbRxxBmKG5PEPv2",
  "key47": "4p1gpNCAjtxHhsrDTaNjMFDtMSZgfdipef9mriXMydNnRV9wvEuhUYdwowYdAotShZ6yuDAbAMyjCswfFvNcWUjJ"
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
