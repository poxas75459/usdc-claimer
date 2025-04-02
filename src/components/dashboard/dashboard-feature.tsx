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
    "2xwXzpsgQiZLk1upJSmsYo9pkPLPjEuEwumPNagkY96RYuGY5uY9ARCmzBq4TxsHgXZvLW4iPcHmivpdRYc4xykD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2b1RLRLof4gD4KrBLbsbt47emvavnrtscwDbYELzcoNSadLbXzEgj76LZMC7cDMfJoMn2Kge6ntVTDdRcG12AU",
  "key1": "4XEKMvE3pBfVqtdgoaZvBepeocLf8xpVx2rJ5X4AJWxkqBfnuQADtV4srRMNsgxg4AsFZH3ZMBofiFDNyVg7Gfa4",
  "key2": "5LNMD9kMkffjQZocnYXS9C9EqQVNtcsmowZ4rtLGmxR2CjbB1vw2oBw4bw3YrGHETqTSeHBmtsFTHseYq4tES6V3",
  "key3": "4ZL6V6MUnHvfxg1b6otkw5HggcyCZsM7794nTb5TzRUGdXac88CGsXWgrHjksTwnUhXXaxscix75gS8DsfNLc3Gb",
  "key4": "qUFkYy6X7X5uAbUU6eMjDFkce2FkTUJ3qy2LScz1tMbaeXZcqy8Q47HzZMRB44868f68Dx1VKBNL491whtDmWya",
  "key5": "3aQM59p86iDEqoCgMUjtquTDtRDtD2Ee2eKzvFQ2x43evywcpD7Q2qTguSACvPAnvKwtXGYC3idHgGomAQt6V89Z",
  "key6": "kBNejieSN8iWD3UubFdk2bxJoRWfJNbxXsWC6gVwmVNtri7kt9fyB4sGwybBxgHzBy9dvoWRP6pRdj8kCxf7H7S",
  "key7": "2EDgnhhkzeKzyBpvnmgXvnRz1gheSj4XxwCzReJNrA8CJ32ugocsHPCH2tZvksqjmHiq16WZLWHxjac6gEy85aiU",
  "key8": "2Ez8qo9cLhXrv92fAmok2CgXN9fFTvYcWNcjd7ASUr27KCfWrDrCEi1RFjwqFzx5ym4p4UtnNWZ2BZ5aicfM4pNL",
  "key9": "4fH1pguHikkqXqDJmbA1CZoS8pTFqQyrL8563iAJaCprEA3nLr3oSeMeGz2R95A9grfTHzwsjKZiCeY5xRGCpYVw",
  "key10": "DqPfUbuS4sPvximk5W2ySiCSmxQNHvxeqQBoE1rjXXj2Fo675ikyvvquZEAAFasJXG6uB8bJFgR9SoA9GXgtm3n",
  "key11": "Nw2dkqHytMHrBFzTraUEjsxJor4tK63vQfvpuo4rQKxdWk19GyMgq4gvDqMdYRKFpqT5hFeucPhTnpQ8dC9i3Uy",
  "key12": "2mnxySooZoDoWM6sb7mLK35fefDiFRsUdnucc8ghe15zWxTZoQZkuC9JsK58F34P6gW6QDf5SCQzEDCHW6PSENiW",
  "key13": "3iWgmbbm7VwXRRhiwrgS3eZNPxwEtvXAjusLTBrhAwCxMj8hHp76CBotWoeARxc2gCnaboYzzQqSsdHRzw2quxnX",
  "key14": "4DaWYEUrMzfGFCL6LF6BTMym8pZampQoL362GwBAQkHvyyDBSgf6ALGuzgN3EUDrUVvdZHiHwzWsrGbu3XvQ2CLT",
  "key15": "5K68VDhW2PrEYZWBiNjCsGFVjEdg4uPpdXV7hitXNUV2Mkm14kK1eC9gKbsjG4WDGNjxuTKqfwGtrWxVhMQbjJ9L",
  "key16": "29REZfwgR6NfDu9dtjJodpLo7km4LqnMfMJLp1Mn7HUGcQougSz7WENLwpvfYa7hHwmj6ywFWoLUCAnZ5oR8PUfH",
  "key17": "UgmqYzZU95w81VGHvsb6ery7Gav5W6aGB9BjNo1JLwx45jNQMdsdx3t1f2irbALadQym2Rcd5AnVnKmaQv72b27",
  "key18": "jrPFt79w7CaPxBq4tZ39dQhwTc9vxkLqLgJzre92J5Wqy8kcfdetFkuyuBwJg7dRXETUfPLNmeSDH9xULqmMuB3",
  "key19": "5tviXU4rZsCMez8JQhnrEXqvrdyUPaG2NnFp951vEAuJZPrsxBVRFTai6U5BZ7hEHcYwD1Hwid3Dog2DUCjhwAgS",
  "key20": "2yVz7FJHzJ1i8mFFw4yEpqFTsjqn4K4CuX4ugpAxtG45NU8Q5GDudtTM3e6QHbQ1aXKM1yJFGRMfzKXZhc5859GN",
  "key21": "2sd7PqrVDRt2RVyZNREwXCrAZ7kZycSjeEC52KMo8L6DpCfyzyq1GYUzKnM8r8Tkx2WQMeNjnyVruf1Hpvs8wzV6",
  "key22": "4E7M2kiVmfB119b5TPrehv82ESaJW1uSYJFSDwGbFXwrbFMRxGisAdnkPRdGQND7nfVAjuJ17w2QvNM9yPCaMGYS",
  "key23": "dSAyaCNRJgRq22cuR1EtmPj1ud1NeC34RRKD1oxa5p2DAw84ZwbTFKHYdQBTCP872EKWQ5YRixzGrRWtAqVKsVg",
  "key24": "vy4wnHYxhoK4fsDp6tyX69p3QUrZVNy26HgkSHvootHWcFDguxcncMXzu1bPRkbUL92zpWVmaqVHc9QGa51417A",
  "key25": "39MkbbAm1af8yxGp9qrRkuXPmhaAJiCxeugaMpqbGvJWXbhjWVJHr7xaKUXFxbnYekeCbuzCdVp6mdCZ73s9mjeN",
  "key26": "3C8QtrptpTARTDpopcFerZHvaM1eFy3mk7Wjipeo6CtUmafLyfgS2q76hLJPkV5heAxKSBV1JA2mgsBgz9SD4siL",
  "key27": "4DN9oyuamyFpMwJmx5Utznc9KDXaT2gZ3N9kbwJqr9naNtpaPJqA3ZxyrekGhQ3v1SghyJDc9K1UUy96aDN2HyQ7",
  "key28": "5pNGewpcMM8rKGc84pfp6NBf7VjSuovxGuYhgkSoy8coPYSKz2UPmZzBTVjiALLLt6UXKGHq4FaJfp3bWXabkA1Z",
  "key29": "2BDH2qSxBmbzWkSWevQy5SfHu2rrGvueLqVrVAStosrAe2eBkjb6ZopeyqYE8tVaUu4miRwfrPfTkpAyRDk1R7vk",
  "key30": "5ZLN2ev6GnW5qLAWsRBx22Sjd8MDgwDbtNcWRqxZadpdkyd3WM3bT6oFu6caXnG7aYWxW2RyeqXjDQNYiyzriamh",
  "key31": "X1N4BXDvtVAbU16TveRJuNrPGJeoW2CX5qJfgxMnV8kiq7Xe12riF3pwNuieFRHQWT9LBnqinYZZVJccLEtpBdJ",
  "key32": "45ag9LkFiFJxapBpo9g6FWYc4xpuVoANvFGU1LFatVwUJonkCLrU31WtY89cDG8qvt4iZLCctMbGyLbShE73EK1N",
  "key33": "3T9LYBzwbd1DtGwu1ERieCTELUxuic7RRLGVdk4n6kgNkYKChXW215iTk5smwjmMF7HUA77Fv2DSWjdmfKddQHAt",
  "key34": "2Nq1QQ618fNxmegYNEPzse2HDyQ9DnoJKB9qyY5BK2LE8RnsabztT7fubpfAWbBHi7XYS4rqw3idHDm6H5E4dAKh",
  "key35": "4YV2WB2CTymzMXjZ5YyyDZRX7AskpzTKNioZrQGTuffz5PCLJwUgKiNhSjEHL8xFooZgaZdN11W8qMHrf8uZ3EZb",
  "key36": "5b7LGTPiRkoFwjmfZA4J2yLFg3suXQ5RM5zehjwpRGE1QWpjqqvt3jht24opvSm5NLySPVcNVtodTDZDZHdT7y5i",
  "key37": "2g59MdK8Mx791DjooWPoDKGrFToUfGRxk5b5rrAhJEXBDsgrk9BrtYVXeM8L8eW8ASdmtmfeaQj7qrCVbC6388ND",
  "key38": "3Fgm2WtcY6KCEXTYTQxUEorvk3fcSyeUXJUrbTi6vvESwa9nYru2ZuqBs11C9BXJvtryX6CGMu1XXNkRkL5XuDrT",
  "key39": "5mSB3JhVtRoMeV7PnzhbtQ9q3TPBCRxMjgcngq7FwKNVC9ZgnEKfQ5Bchh94Sx3qGw394WbQVo8gumCMboZVCUux",
  "key40": "3uznPxaokquUKmhwS9zLCd24pvNHaBwqtwHkSXtT6DvvBJqJvpujwqUVnnygoBm1hs3oXPpahghkBYjx7JMDYxWu"
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
