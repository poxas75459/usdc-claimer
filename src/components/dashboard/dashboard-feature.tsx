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
    "34ECdJjUVXn2NmUpKWKYvCUraAbUKni3x9cqECqCw8WZUa22qN6nxyEWWwAptvxZVZCkzbuRSyQxmVig5QRrscxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5gW9QGvj9pmyHwMuVUENhG9gcggmbsgrg4pGhN2CcGxkw23L7zHbNXcTFKBjJqZp5Cv4yscix8rdHww9cpTUgA",
  "key1": "3nCF7xvC15HtrfYgRnYusDBAtWCtTiahLGikpS8vHTEt7akcCkyMfejnbPDXwJm3eDQQBf2x3mE1dsvLLsZ4ssrq",
  "key2": "4qxRRGysiBDeY77pJt4aJZPU9mNue9sGK2mMCsqpfDBsbeiQkX4RWwbrQ1oeURsPvN6vxwgyHt7jb3qRYMB5bz2a",
  "key3": "3mJkFZgNPgwyoujXeErytLq5dMQjaoCkjku5mVVrZWGMv1KHG3UDv54TkLM9T7q3HvSJp6diSBsTrv6EHkdcoXxB",
  "key4": "4tsW7FVwNbGTgono1YaxihQprLvNjMKK355Gj4fXPD1U8eVGmWLSL772EDf4KJD1PZfYrwVQbWR4LBsLa6Kq8qdg",
  "key5": "5ALMBkEWJNayTUw98KYVPfGoySjfyywVG3nDvrBbF3CUDwG3L4mVbPTS1UnnrgDpTvzVE5PPUh5ummBtAB3ExY2b",
  "key6": "4ERkrF4fkrSq8jr3wWGcwM9n7WxPXsYDvC8NzSyYs8ojbEtRUPMGBU5b4e4jjpnm69jNQ37cWAGjnx53PwPbDEFS",
  "key7": "5rpsfFW9xHimypxzCeCCq32spqGXLqFhcC1mYmHT6E7P98bYA7qeXsT2iEDat2SDuap6Q6BqQny8snzJMX3GPrjN",
  "key8": "5R4GJkFEszsoDQkPZoSFhmMZw2WbfriUtRZbp22Wmv7HHAPZqkmMG9bgyGPxHq9jZznyUWQdrutjKTP1mdCFmQv7",
  "key9": "2kAtnwrfG8hUng3bGShgTbNf36FQDmwk64cLXJYRXt5U3SP47gDDgSXhQcoB5V1ix9oqGo6JXb9uEVPd9yaFKzCq",
  "key10": "5hfQodqCQSGVhabJ2oDTpV4Sx1GcSbnsRSXpW8BrNBr5WJLq3cE1WoYiwaTRTDp3iGPCR7sCokUBMiidWXfDqfN4",
  "key11": "5pQnHsBpwnND5LU1xxh5oesEzD5qws5rxcyuQUL6y13QJNufqKeg3SBhniZv1zU7E3ivsMpqGZ52H3bgprYgBmz7",
  "key12": "k26h1shJWb22FjUavdHFX2vVAEdcY8gKX24B7VCYJ2RrCe77FGvQWECEpLm8x93P5Qz4HZWyRKSCHrphTxWWgw4",
  "key13": "5rsn1Pn8ntUUNiCxjEgWddniv2QfeZfwfZyPR8MsBHY981GdjQtVdWsAstKA6sUQuSxrnbxhGjxjdxRLR3BkifwF",
  "key14": "564s5rtUc8iWcbkbNRX3E4iCqWzw6a9QCVzkHGBRQs8LyKZCvEx1YVMprdTvR2dEgdcN2AVViwSfi5jDs5X7T1ZB",
  "key15": "3VgDzPhz47gBrxyXavK6MXekprSBUpXJFxcuk58iTKxxLtbHbEsq9jwmBDXVhJQcUfGWakE24K4qY142KHmrYB7t",
  "key16": "4yr6dHDE2qpdvwx7YTVrso3dBwuyE9YkseHFTPyP46YJ8RDf65KuiVnj1bbsSzKrkthMni44hLEhSZTU9nBU1u3n",
  "key17": "2S7aJdz4tvwTPnPN3niGZjQZAWkXp33NJE9kQ2RCuyfxrhPo4fPytHMi6ZKH5subzzAvs8F7a2fx2oB1LKB7kczj",
  "key18": "4kYvqRdYUCEKUjPvWUsyK6fwfoCvWDc4sTMNMX1t6ToX6HJdxwxghUnd3uoaDhp3D6knPEvDc7eMyAq1Ys1D2c3Q",
  "key19": "66tZp1kNBQ6vt9VpdeJ2AHzyMnAzkW1i5SNTU2KZAXqV4vAFpkEJH3RfYN1Zsmi6EQ3pR2JsurAXm3c7nhkGvPpy",
  "key20": "3A4MoqUM7Mw4VTWZsZNDNvEXorrk5nM6o39CN7hohiGZ2c3hfqQVmem8CW3V9SwgnTR45cmpzmp9BxyjQfcRshWU",
  "key21": "5VqvDamR3BasAwFFqF6ieanDazgmt7zrrNhsqBa2EYCiUc1vLVYizB4wfhts1qtDot35XeTiRgkzZY3g2wdjZGGe",
  "key22": "5mJh58L4rZwgcnkN3UEegy2X2VZ82YkdwL2qiZmjAkBmGxSnqjDTyLcSqgmFf2Tp3JB1B1pg6McY4X4P7fiwGqzL",
  "key23": "4qo61cxUSJmU7rkpUuX4DbnX8WR4LvDK5idbVujkRoVf1nW37dFHaj3WvtehusLQzsebGpsCQegvcYJzWi3cYZms",
  "key24": "58DFtgH9Pvd5nZq6dhLvbKGWVtVdhY1s7yW3Qdg4WF6hajuY6LR3rK12GWDxqvXQbMeegi5HcPdecB8aWAnoQhEN",
  "key25": "66TkLJ18PFDBirnWEcnSu7d9kAf6JaieZjDA2NaE317FMj5HfotbDiyS3txcUSVpXjrDsCz6up9aV3irpGnQKrwm",
  "key26": "2mCM8hrNA5CTwBRi3BEzLvrBLfjnmHGq4rd86PFng2Jccp4VjgmmV2FUzeThx3B8JmSb9ya1RVZk1BqmSjW32H8c",
  "key27": "4A6dpBAE6YgBLZr6UsgQy8hgKKNeH32gmdqSukeT2zuWaLKSJ3PmMSv1zoAQUFBeA2ACxqDuVuDni3KJShnLPZ64",
  "key28": "2FeY5mRjSuUx7b71eBx1wTDzQeXZp7XXKijhPc4it3P9idCaP6LpM87a6r2Cxn9yGM1sDFjXKsgDWudLn9Szo4jk",
  "key29": "5yi7fCGFNFYFGsGoF1YXw12jTeErFskzwq1qRdH8U1JuDXwwVASieUSBBc84XgXywssfhRFP32F91LnwWVaWYpGr",
  "key30": "4GyY4kbE1LnWp44i9CMK5GhbyTA8594pQ2HfrJC6yqmufBXn9VPmi6pqLHTNbZUszn2v4gyyQ3V5toGPSfpNHQFX"
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
