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
    "46CQmy4ayvc2SPiUuyABsunazDn8HZLTgtptHRQHQvgSWkzkp78gWsofukTghXnKDC17SYaC5ho3PzJaH7MvYuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5xMRW5VT5jpD8vThM2qNusEGWawpJWGtfxZQ2uCfEj6GArv2y7GnBaiWMjRk1ZJWrkKUbPbzvKvbwui56aZS6K",
  "key1": "3HcCwmYPJ1BNKJTDEMBDct9HM2ceYTFu2HDcAMt54tEwPkEL3LW5x5PgjaUWaEK7Q3UmCrFNtZ3xwXbQPYEPBd4j",
  "key2": "3LE58vLcUJnc2fZbvpcFUDcti1XmmBBrGjvTnDgWU387XCFX6S1pZFia9foSXW898WiWE6A8uYQd2UVE7n823xRJ",
  "key3": "5ZxaP6HJppcPzpwHo5njudxVucbWEWVXF9Jyb9svzUcLVRawn7HwhAhk3ZQdLynuDYTCbhbMngsNVue9NSGFAMNp",
  "key4": "4bPSPS2yZVpHtsFovyFct9fCotqsDih5NovXdxBu24L4kWdNtUqZ84cLo9SZeGrmufc2qK4Nu4EUyCb8KivSwd9N",
  "key5": "217Nd7SofV5X9LCMC7HY5JLqsRwcbnuTL7F7rqcvcNL3RLnV61cYzWLRkH1w2fgWSUJSRmeYvnVMhtYMmZgFbAij",
  "key6": "48MtwpBxJZ1rvhzRun71jCWDGhQFTvxVaAKgx3TUwDMTiW1VBiQcb9AP9KZ31TbsdwsA7N3YtR2zUr7SdRYuBNLV",
  "key7": "WoYXW9xKHEhWYti5VXiUoZMC4YWMPYEBAHCrXGhQrXsjncxtaNYasjUWHt12ydsyvRtQ8vMoP97bGsRqL3gxrGQ",
  "key8": "wd6REM45RQFqkEyCXwoSgYvH9pQwJZSxv42so3x3A1YvbWfiba7E7NUZrwnZGDdFV8Zbd7gn8orby5PEyge8Y3A",
  "key9": "3VtQZvupBCtGVCgGLf5sSvq2X8dNq4kB1nQ65AL3BF8866GfbLjpWxSujGUhgroHMg3pUvNhGQDd6qkbQFrR18Sp",
  "key10": "3pCLHrWHtfTrT4EM3EioR5pwBga8zcW8oLcrm4qDtidWgGVpviuJF6fPSvMLaSCVE7bUWYLDJDsFrGce9fhv7uE9",
  "key11": "afVvZgQsgXVncYPXXqWAowc7zjJakUtWGFTuB6faX6YrqYcMWPLQkygXqtB2bJ5iE9ui3rjSBWpEYrk9Q2ZCY3J",
  "key12": "yG25aPkztUFRiGNMihmcurHuVVZcyQPmdYwpohU6BUqfX5LtE4mzwWinnKj9ruDA6SqhjsjfZMV3f34wfVpavqt",
  "key13": "4Q5Pgec1TACuBBmFdwDnxhRqD2jszNpCBgnp64LemYHj1PBG73RZ6UKySucbDNNKtGKakKUCPxBmKyAmS6v5uuk",
  "key14": "4p6jbDr7zvRHyQGsk1FbmzpE5zePJndXreu5imQYeHf44HxWU2NiumvYbbKYw7HMoatrr9Lyem2eUFBSjcfymEUm",
  "key15": "23C5mNbp34Ftfu5x5GJpDcRedgn8173rJuPW7uX9jLNm6bgJqW2s3vVyzoQw9eq5XEJn2Rvs6qT5nPt1d82DCfNq",
  "key16": "36xTGGzCCv3nVMV84pnFEfx7rUmWiah1V6bcNHvbBKWmF4XyYx21GSVgDxWHeUHrEQETqdfcZHLKbmrJfswUj1qF",
  "key17": "4CkpUmuFHuSkwrsKF7fFPMG97gZe9MjMmWbFUdm1mQNY3mRRV3snJowGNm7wwsSMTX2m4wTbBovk6Bn52EdWV1Qj",
  "key18": "hfNNaMCutonV54RoxJmBoZo45yQrf9LtpooN2pCiyDdHveUk4w7Krk8pxUmNBrpcVWXhsqqK8gED47eQeUba4sq",
  "key19": "2MrNAjrg15hykGCvK8zMwHiDBtewyKaXX8kYv7fCSNtwNttttrCmjDAQp2sPZchmjosAbLimfWQBTte6XmjcuyV6",
  "key20": "TPgAFmD9JgdtqATrzxpeXsxej3aFMeG7H3NQx15sExAPVSW3gk6U1uR79EZQn4D7j8WnnyTosef3xd5Ge3SERuQ",
  "key21": "5R22x3MTQeVT3pGKk7cwQS5QTsgtAxWRiVKHeJe4R6cVe9nhQZBEUWFfRXmRxZ8r3dQTiFmsqk5PyPExZSxWaxUq",
  "key22": "2bMo6bFo6JgE89BuM8hTTnxGhaD5H2DjpQK1HkJVG5Cjx1oG2Rk9bppYwRZfkFPxNfMSKoxyneVVgQVVAFtY7iLq",
  "key23": "2uruFPD9nHxChMZ67NKuR8c1ax9ehbhen2SUU4nKgN9iApr9Eqgr1diBfQb7iSW9Msew1zrCLdEGT9RryeaChqKs",
  "key24": "2LiuT6SS8fXb1Z63FKEDS8cL1uWu3nnbvQAaAjDVPPKZ47fvtHSfibXDdF9Fu1fPMU17JyCBVZJT4yuEHD5nbqKo",
  "key25": "3xcDGaJY22XG1VUXTxBc94L6FZ6kNeWJ9fiCndcmvyuGrBwVmCQt9WsmwyxZJ23H3jcbEWUHxxRfJ9sti37Qyw9w",
  "key26": "3o4DgLgkiznDD7thhz3kRYQga9HC2a3RTXhPdYpYqftkQhgAiu6q2sDWsFaQHSXdSaUa5spcykpeDPF9vojBMRvf",
  "key27": "62JZT4JMAFoAK2Z2wNcQJayqbwf6ZcZvJn8KGMiGXqs78DWmb9MfAP4F6Bz7V48JsFtZX3r2wWFXH4T8RJHHWztv",
  "key28": "5csfTYuBUWxM2jnoRGoFr6PzzwG8RnbU6sca4Q1YV1bURe2WG2EM78gCLAjsNGJub7nrBfKBudqn2fqFj1vrM2ke",
  "key29": "4rCSZYgNrtt9yhqk1TqyND7cvXZGnVfw3LYdbimKBChi6VwxMLDWTWkdKRUtAGkf6MartzXeNEmqu3F8zMrZR5iH",
  "key30": "3zBtm7E6Y3KSQ2VQwyuh5Zom3uTM4vWjAw5nBo28W58ZMuvbmcguoweP9cHCVxrmJYezpQswJsydCuoRCCjRR1Pu",
  "key31": "3EgQ5kgNN2tfrCofzHBADymqucLiPWywHwU1JoSNquN9BXzcGahW1kqHi2J5QapNrU2M5n33v4gUo6rPHMYmv8aG",
  "key32": "4gEVSWvTjfEjFaiKDCqSyFHBwR4ZG24NPXieMq6zchvC1dZKSjwy3VNphp9r9ebQ1b6yQoHJcKZnKSJo5EJu7k9M",
  "key33": "46ark3XkXrNLx53kK4eyJNNqKGjRZUiy8pw5NyNRmqzF5F2616jWbVo73kRnLSpWtPjiwek5CuWkD5zGUbru7rGc",
  "key34": "523Un6GpSzcWtNniYVWcxBQVdx19QTa4QF4W6TVTsAmUhLbHH2ViSwr6uqWTrBgisocMHSNS2GoUC57fkixp43gp",
  "key35": "3xbSAM7vPmhsk43REkDa4c4W8gLeNdTX15Jub2GS3uYaYRgD73MMYfjEiRMQ9qJEz1XAX6wZXPn4ppyQqRemZ1P8",
  "key36": "4qmnGTdYaJqZuPxpMSqBn4VxJ9aNhCGhSDZrURDv6YYsVAKTJXCERQpntQfYV2mTgiiFAEwGvXvUWhW6ufxWk3oN",
  "key37": "4dw9uvPiMdGdiSwAPHap6i7oiVEYfFvTiBPfR4ajAomS8pojCq83UoGVEq7iYWf41iSXomfye6Y72Vi1RsPazM6S",
  "key38": "3xMwjfzW6zErvCS6ubeB1QFUU3p11A8qA3yKoyamm4y9u5Foq8opJvvXDNTiTwYgrNqFa6yiPA3JRMjKfJr5t9W7",
  "key39": "5XtF7FH96DFVWqoLgLwRHy5xTGgWE9Q4iaF1kAejq2dpyek7KnoVma1YNoo64jxLxDJ5vNputkRNE3XSdaoVnG3j",
  "key40": "4fZGpLVKfB9zpPbgfCsZXfPafYAXUXvzzjBuC8tgCZKdhMjvqEweJi5He6VoY2YyLtFRBxajmJiXoDBRQAHJyQZS",
  "key41": "3kXWxxwkjutypx4mqqkMVg5o3mnEFurGmixjFjM2qrA9T51Fn7g2nt1MET2N7KrEQHsU1kpHLAAb6JVPn5MAcaky",
  "key42": "aSTCQbiTDLgbgLrpPFYWRPPcr5kq71fuBibtBcTRLDiC1wDXBzeZaFDv7USo6Lamc7aMwmkBf4cApStzCgqvBBM",
  "key43": "5DbaiAjhrWiTojYZGPrbJ2Xi2asYzLdGFozkyBvgKVrWvhE5ePppzoURjFkz5UzfwWWQ4W9ri2HTBSbWnuPLRcuo",
  "key44": "4tnBY2HooTVa57kCcFML1NvPNFAh53x6uxQEewntGhoAUc6FJGFzrMoWBJuPeLi89ZT1P29etxwoLYuW832uRciv"
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
