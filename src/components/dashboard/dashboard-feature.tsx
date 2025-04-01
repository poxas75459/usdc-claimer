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
    "UAvwRpwZKz3PHdTLaJ3NcfdSxf3zzvFm83rjfv9E9R7bmWYDiuroMkRP8B3SZQnrixufP3TQbxKqjUw47AVV1iW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45XGYPaUyg4q37CX1d4xQ2anaqCMhYS7TznuyifNVx9Qp6KZdB4gEoV12VcqVk4T8tDWFKgTHEAHc73JUXZeutDP",
  "key1": "4KoZdxmwRn6s5kC2m4p6PWtf6szW8kafjbrBxTCjA6c1EmFXUWEBfvoqGen5uWZrNDd7nmM9YV7YTb2oBJXDTGmM",
  "key2": "4t7BCvqQKB42cJxpcRF2BSBxttVt6si6nYoDoqzihUk71ZGJGdR3e6bNYmTMyFwYi35PWroanwD7vS3vMKj7vGXH",
  "key3": "4DLwpgeu8hjnzNSpooWZCFqXenAyyiAW56LUx6vnvk3LkmZBLiMqEeoy5Ke8EgGSKDWCE6L3pC5ttcfJ8vircjCn",
  "key4": "5ckz1gqtzbfgWS4yiYDX6dsZGrUdQntrEKCuwpJgJnd6g9WBJ2cfw52rJcyK68yMHeahJ7HkmoCq2Mp3SfbjFMUr",
  "key5": "3pSuLzEd3dhkwEh8ezeunjKjZpKpo6v4LViFVz8Az3zqeCvejQuPSEdXdWxpt78CprGL93vvTLhPdhKqiEadnq5d",
  "key6": "59V1R1aSB2eyN52jmomsG7AhiEZoGiaRqYXZNGPGhMGyLERzNyXek4Rf7A4Tk8yijhygMG7r5kyLaU2fQkGGvT46",
  "key7": "4XLbuRXptKepGbFskQXjmoStfQicy142zgjJXUmYNb7WDuyxjboovQr6H5d9CLTHXfWrTWGu5Nndj2JEQUsKuroc",
  "key8": "vmtPp4EujDDYdzMDtVVZQ3kAZHVgJZzhkWMomc9RiKi5YvMGTz1ZHL3HqcRe9yDsNxjLzj3ReQQqxQUfcoF9GnP",
  "key9": "369sKvp7xNTDVy8W4S4buWvVgvGXs1z5oCg2iBN84LzW4zSnvLiKsZPQrRHnt1oKJTCR5ZHbTisLg71Q54UEdPEp",
  "key10": "5LYdJo9c6NUSQs1QPYMatvnkiPMEUFbh12C7YncRYRHL33iPxi2v7CVXP5hi5EHGjkLjm1YgX7gqdzfuYR7YiQMo",
  "key11": "378V3fNfchNT3UA1ry3tczfNp1c9drTFVBRUyaB9RMZiwjrngUfGBh7xVHzbvG1KW19qVWNHWZJxMZNDDrKCGA2N",
  "key12": "51tDEqsxMYVNx5JsSvuktNQt16Wgi2MXmXqCm1UFPSDzDUP58KJVP7NFmkMLqKg3j4tYRoVGLGadhf6bxPmVQK8s",
  "key13": "7kbVAksvryD6eGgy6zEv8GyGfCvNmVdmQR8BiCSmJLTShezx6W3wHB8dxK6iMpsruF1gmrA6g1pt8re2TUcc9ie",
  "key14": "4u9EQ4uCoM5icLtPogJzK5h5aw6Urz78oFTx8kFCvtiUaFrbts4dHnSyVoqmcBptjrWvi6zvvBkM4K72HA6hizRQ",
  "key15": "2ivpJBquBysxMRwPnkZUwU2YH7JyqfYJMsYbZTwBwfBws6w5g4ArrTxGxgbDSENZa6ioswJkH4ztXq5q5QH784dH",
  "key16": "3U4obExKq7h5f7PPXWLL3NDbvhBYrFC2fFCLTCGrq547vfb3miJEJMmnC4Y8gTus2MLhWz1QTKQiFvh3hEdz4hBS",
  "key17": "nVa7EjSwHeKpnScLhuwr7H5UXeEiCWgbdnnpZNUnpojHNGcR935aGMrUM1JCJKCLHTzde7wzR4TAuRCPGdpctBt",
  "key18": "3amqtv4gJoTNgLSzfdYc1Ymr5wp11FzzEAC349zeKwAHqcEjbSE7bA54JR8bxdSpBu7ADeaA83wUSWd7ELRvCGoc",
  "key19": "2SDeVq9drbkcjUWMbN9PAR3QUt44K44mD5QAwdAxBaq3hvgd9opLctia4w4n1vFGQ9oysLdz3Vp5cCP9rpjjACpv",
  "key20": "5avbkvxiHaULf7uZbMGwqbRLhHVG3FmRQbCQDNvQ1p3Y5gKyNSQ2BaYNui1KHDDkSVFsZMPMtkAK6JgB2BGBWtdG",
  "key21": "54gA1EjT5CzmmBVRbC9oDPvxVpgGtfKyyPgLDZGWpvX1vTBU38XC4zAhua5tXhTDxgsw2WeAJxtU5TLsLsLaBiHc",
  "key22": "3obmdua3EZjZejzmima1duVKum6L28yDsJvciNkJQX6Xwtw18c3MhoZcjyoaC3LoiGT41qoABJ5CbrypshDThBiT",
  "key23": "5p1dFUnemYqQxZ76cf8ibyKogMA7ZFYAhaYcKcMjRYvRp4S28asEJsfHVNPBPprHmVQ1dooQTJqsEN5BSLQBwGB",
  "key24": "5y3kstr9amXTXVTLn12yp4GoRMvSD4H9dGNnYcZPFRusanKrAGkuTMuAsvUDwKRYCAndmmuDJtPVriPRGukHcHjo",
  "key25": "57agksqmdBea3jJsaFUVvxRm6AmdYwFQHcPJ7AxnkdZSqM1FA8bKy4XWkofBGeP6paqUUCcFHb4FF8zwcPmKK9j8",
  "key26": "eiDMBvbCYhjb2N434YCzMaLfu4GyhyrFqdC7Ro9qWUjjQQa5ibEPWMmjt5TJcig6RTAUXcm64yTtcwPtQz7MUXw",
  "key27": "24RvEXbj7ppv9zBPh1Dp2Ab2PQzHerwtMSUzyHKkbigpbjnGQqUaJj5geNPFNZYf4jEHBRtsqGcRiSdwggrMDvUi",
  "key28": "49ySa6nVcgtTh7GQaRHqLAVcWQHbvfx3tN6bVQ8DHPHGLMH1eMhyuwJGVRFC61EAHsrYuU4aLB3HD2fEnGru6EQZ",
  "key29": "sSJJo5ERCUN8xoHLuDqRTewe2SCChfyw28L4VJggMMUCd6Zfcmgpsf2HeGZo1JyZsBsjPVv9q9JXTK8Pa9hXmv3",
  "key30": "2CRVwHKES28HhJV3Kmo3FfywV1cXXMKzRmc9yGnJfv3VT2UAJbSrLe391cNbGXFLMULwxNJJ9rD8QvHutfXg7u5q",
  "key31": "3pDAXYL712zGsxPCjFgPWfpot7VeB1NSoYQUknukaJm2S7BhEHKcpdzWaSmuFxiqZfGLv2anRJkgnSzLE48u49KG",
  "key32": "5XQhz18F8G93NPvgZFavBJ3YysGatQdqCxcZmFM641NwvEHtf5gFgpa4CvKQgmmRZD4EsxwVwFzVnb2AENdmYAra",
  "key33": "5xGcJ8gUQ5gB9ZBxTtwd3fA1C8hU7S8jgTwdavJkfpyxApcGHTcv1VxSBAdtm6ygj1qnAZMrmBU2RNvSNevsHgai",
  "key34": "ZsKGneHijYsXuMfn2Yo5wpyULMV8wQHF3d4D9T6AZzQf3Jt9H7TNWriJxFZ74YWTRFzYGm7vvyByKrCZSVyF6cx",
  "key35": "LqVkFYF5BYTmkqCDiwJL9CRVeizhxERBt4bQbyRxiVPH45GhZiG3bf1e6fPxWwDr55H8pCntVaQfeeNhUWjNcBc",
  "key36": "1hgZBkSvszcw45N2Sb1Nn7ajLsnXKsYBBh7KZoGp9eYrtvrdEG9kizSFy6mpDCVUUpotXfDMWx8DtK3ETAtpsUP",
  "key37": "4fSakHbxQz1V9fpruJLBQP9jL9AKKENdNhvkPpbxNVPsgkRVcUWHTWkL8WieqepnjnMq9CHxsFY8QXWxWMu2GSXt",
  "key38": "edk5ZFkfsXCnndfpjTaMMLmZNxzYweKjcyd46rqrX3HjfmWFkGUFZj4awpKtwbx4ubkAkVDYK5PuwBY1iqdRLiu",
  "key39": "3AAsfd5crpPjKB2gYvMs33rrEe9FJusKhC8vkQbDZ5gdjjDzq8MbZARCP32NHfkf6h2iHXRMfD4tvkLFhjeUCHJH",
  "key40": "2dmgrwFkwuBGuBMo8Kxo4G522Y98SSC3FzUvwFTNJSTczA3WAhjtwJnXGfV1pGR6Kz14kyf7PtUSim45RXg4Fy17",
  "key41": "5n2pGeUUtPy45mPM3K7L6V15Na8uTJM23pKDMsP67v5jukLp2XWyy4XGpMuS8rP8w8MRf4FCK3vvnsxc38fDRhfX",
  "key42": "4wMNtCQGQTDruoF4ZbraokBb8q5Fzrz8uTAnjq1jAnhkF6j3EUAqGsDQbF4ydGba1DGaqAu6vTozSLSPPfkJhiVJ",
  "key43": "4KebYsrDfSRScyEd4zYQe73XzYnGRvg5QwC2U21YUfeQ5QXE8PMUF9atez3j5zTHxF1b5j5bNEPxSp61maN7TmQP",
  "key44": "4oBfpEybiUXoFTGRQzsH5AMCqamRh5bWw1Lg4Yn2BR2u2Gy17LHXHf8sjSikH22SWwYzeQMZ7poLjuyqKojUoxSy",
  "key45": "5at4QG9xL98rBTrjTtxmxB27z463MGqxxuJoJeWxNV7psV2YawwcnDm2UcmAkKkPzAusTRnKaDfSHfFHD3PMcpx6",
  "key46": "6vBW3bGawWVFeeLd8Kau4Qta4GQL5mSJnpFh3piJjHhkJRSzUU3qoG7yw9drScxCGcXeP169xkuE9dFzD3PgsAC",
  "key47": "ffbNKqt9atbSvQ64ao8LzcV8uSCmitxLXou8twLUBXQ9qTJEhHpbsVvSuz9nKeB3Lw8FBiAv2gGxfYNruAcxLqT",
  "key48": "2zC6hUfVkxokpTeUkWrPh1dRPGN5ew719qzRVxfPTMQ5gogobP9suFGThAzBggvXUVrPfEF3sL9ZXLexHEihcUnv",
  "key49": "4FzcsdavJ9SvR2Y9zib2QZ4mQNfqKumRFfX5yyqcWupP3eTpqnx2eic8BTnM9xUmCbG7nVYBmUJgjCvTwbKZ2zti"
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
