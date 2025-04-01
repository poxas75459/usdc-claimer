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
    "5Nxa8FMDdsK45tEWdErPbBQguT1rDmBNSzsge12Hguc8eTX1AT1MyWsEGxr5RcxrzTHLFEnwxSZFSdCfdBnWohJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhGg4WkoWaDiB3sTBWuetou95d7bnvmExK6SsPkR5WfBubg2itm2XAVXN5WHv9aq7awK9da9ZStuxWhD1NQxL6U",
  "key1": "44tEP5HENKDDbQP5qKbWfJEDGsWhVPu3sZJ2pVpcCQwjoSbpu9xsB5iWgGYdmw2NzuN33gayH4sffrATyTCNogx1",
  "key2": "61wcy5Q5ep5MCpno16nZPhd7JRUvzZrgwV6whWywXKCHtTWtHJ5HxYYUGbjT7vsugyn1tEto6tTDfFh8NSDRuCBH",
  "key3": "2BhJ9xquL5k9t26rfeMpMCuXtsJgTV1pd7HLhKpERcB9rBwG1RvPk2dKwNt1SHLsUxhGFZ2Q91uSq32E62zmirLy",
  "key4": "4CZ9rY4SxG87AfbhFVfXEqiUm2LRs4DdJMy4qDz5FVZKtLM31mzgstwdQjFrZdapiTWgCssrr4NvkYAXVba8H6JK",
  "key5": "SU9s6zXN3bEdSobEYRPYnUkDGbZxRQkCBxid8g2Dc7Wm2Yhi5q4mL7PuMZ2qEzRfUS9Mzb5zncna1MjDQ34uQZV",
  "key6": "5HewLSs7hCMcRefLFNAPYHRxZLz7V749v31Miv4q1uF8YAqsvZ4scsPU6e3D8SMB1frEuGNhmr9iSYqqKj8E64S1",
  "key7": "4r6RwBjBtWthXoNEEc491oNYCPsLa51c7uKztpHdmpFNR7Qw5cSQUDqAd6QufXLzRitHCapeFKFYypXxD3ikpsJ3",
  "key8": "2KByvaeo642Pac4abBb157YunXF8Xk9CLU4ShZuPgNj9DQnEuTH7R7i2PH6thNeySadkKMxTQWUebaiJpZQLmPfm",
  "key9": "541pcq1abo9JCwucoWakJVpThzonuEKQfhgZyq8C1DL4xAMN8dyXw8Ftj7SRQ2cfYg7DoLS8JoGoa4SxhwhEKTRZ",
  "key10": "5qdJ1SXsDXw9ZhbmPrQ4C1CNVSAfaLsL5Ln5MbQ1xQx7rT8NZ7PmY3hKesNs8RckhkfrRmLiu9ftmLeX7DjPGfe5",
  "key11": "3W6N2qLVQAACGS53uQjQGyfB9F98FKQ2V475azi31P5DfJQzEYdAjqSok8RQjhhSHXWGLwB4wB1MpuSgiXHALpXe",
  "key12": "2aNrnHKAw68thbBjFm7rMN8cLRL8aT6AjnLsUyWEbQ2kfAehydJxJdfraSgXZjywefr974nooUog6qXJg8zGdiEd",
  "key13": "2gCmHgeyL8fTZwoFxvms6gH69etvMU8565aRLpquThVxJQjVsuxunHJ1JdEv4Yb3xZcPZqzo8HfxyrnjFXyNvrbL",
  "key14": "kz9N5ZAqp1XVVZViVrZTtktM4GB6uN4NsjM35Pfyb6HUA58b39WqvVUCni3d1gy5L27QeDWTvbQkFNxNmPCcVF3",
  "key15": "WVq4BLbk633sBHpwj6JaBC4aHXPUVkNPekaA9yiaEB6zenkzEDZnyeJWxTMKYS4CL25mqHrMoTeB3DrbLpZZxN8",
  "key16": "4oJkvkvUYMJWLqCkxzrNpR8sWywrQVQXbMZQbuDhwmRddUjhDD7Hhb1PfT1gCswETFXka1NcSATL9oUX4bKkJM9A",
  "key17": "XBxr78E2HohQrRBL8ycCuiuBdDK4udhiFxYEZ9wshoqmiX8efFXzqAP2p3jtxdtuKbnbDknKanMNHM6PWa3Egrp",
  "key18": "2LTAXYWW47GmQS6B8YvctDg5pXp6nrEhdyXR8HRaaEvxnKBFhdNTcENbghQaAVtKhFEcxywonVKmRmTG8JPJnfzP",
  "key19": "3Asp88ZUHAwgEFokQKcpQrw4j6N9qfDPgRkwmtjEdcxX1Zombq2RVPVzrgkoRYsH3aEB6CXR9ZxAjmw15Toy1NoJ",
  "key20": "5re8RPFBtpRFfoSJ8zb48ALSxMUSy2J5PMxUdA8scZLKJCA1zek8Ew7z8btjN9vh34zUJiDoXMFLU2umCmpqQQJU",
  "key21": "2ceHi74eKrm18pTnicnCbn23RBxQbvenFqXBTB7WDLsHK8mtXSTxjqSyvYjRwn12rEWjYwe1tqgKJyyUcvEwDMky",
  "key22": "2sQ2v3LC22JRJcN6g34kWi6QB6hmwozVdD8u8yZPX9MwuzbXMbR1rJfFJuTK6VHtJFQLAvkG3Eo7FSLEnurSsYZy",
  "key23": "3KsSVQKa7MLP6a5zkPPRKWVLfGviMHN5dkroHm8v9nEU43xDD9pYRczb9U5Ufmk5MG6suKZKtTbZ3MiR3eXz4fZZ",
  "key24": "2npmE9skLXpmpFkgjhvACvyEMYmRmYMopewY5PSyQrp5tqosmgiZLBRkgSm5bA6EykMF2Zfo9MBEvyWz4K5sarKk",
  "key25": "62Rj2fFUGxnDNoBmHa12dJpruN92fmgmZsDTxf5B3AzvwL7FSgi64JZLEtw5j9ixzyPJhAQyAsPFHTVRCXMd1feV",
  "key26": "395SPtHEVF49ALmDpX76rKhSM6G4zMnEFXqM3FStmPSqh75aTVaFrNihExv5kDS6ij8PnmRGebFbMe5kct5jBKyD",
  "key27": "3eFEpbnrxP51rspeoaXn68cPwCbGKNfHVcY5QGsbGf9d24VnV1JBbxMcDb12NMzAQGSvxxfLvvqX4YekzTjtAh4T",
  "key28": "5awK66PHaELfoxjxwJ7vhrbKFVB7BCe237tSTW3GeZcRKyPFkcFwLi4qbZHmw967ips3Pinuj4BVTFEZSaiFiwBD",
  "key29": "5U2V1Vgd53jhDzQDHSUJud2NAy79o1fujp3DSJRgNYnniDRCDURAaZH44au6E11akzx6Epg1fm1u8KTcpuLaXfKz",
  "key30": "gVyu8QFPUvn8hoNw9ek2PLTfL6DNQiwfNH8D1H8cvuHovvGXgkhJjLTSVFa8dVnEQTfMW8KCZyop5mftFeVkEV6",
  "key31": "5Jo6CywPbrPfULFd6LMZ9q6nqYFsSKfEhePu96aJsGJYzQiyN6wiKkXCKUqWcq3UyrK1ATSTfpfYu75RHeDbkG3i",
  "key32": "5MDjTwXZSMZwP9Bhch9ya11Bm91QvSsGm6oLMzo4C2hRt57UbGFKgm2mpLKYmThow818ndtbzfeKoA4zCoCvqHJB",
  "key33": "35YPGfXLtwAbCGxbWfw1uQLe6UyLkBaLkGirBrhGYSwzGxdwYHicqZCv9VjckuZ5ap86mMuhNo9nK4ArFbfRoAGw",
  "key34": "3Cz95diUpxymK6yGwspk6ShQg1mcGbV4Ruo9twRmwCfpc7CTMhoyXLbM4D55vurc4USTsxDJhwy7NEMq2qzFnK8C",
  "key35": "62DcoZJEJyimkkQ8wYdpTpNiu5T2VXrthvgp5VeneSXAjrJx5tdoLL9VUda7hdgWkecREJPu19Qqk1YRzjuMKa7k",
  "key36": "2VviYKaxu97whL1HhUSi9jgNjsjooqVEN4bzAUVFxzAwJiBhXqgVi8ivuZzj9Rp9vQSiCq7HGfKyvKd1yP6FghCr"
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
