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
    "gRj49s5sqdZEgc5iPebry9TQDw4M4oQP9oaxhZ5n94YCB9XMAvaC4qKxRPxkYeMGqqxyQJZm2vQ1kLT5Sdh7NrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zn7je2iApf7u34LT52CsN48VJZG5xPT1Qbk9tnKuW29xKkwZESdRVPw64Kh7Hkec22h2oTZYiDKvvBUrkeywssG",
  "key1": "4Jdhwbi5YrgEcxVamRwGixuiWw9zbgpeCYyoUEGhE8nEg6U4ipHGs7eQ3G6Bd6bp91DMdYghAs12fKXrpWWu4iZF",
  "key2": "3uARP2DGDgfFDvTi9LhXvFNebejdmDsv4AKwRvmzyyCHSshCjECoEYDZtNPGpjx96euEymkKcXZH9ZVTXfh5gciq",
  "key3": "3WLS3GD9gHDC9Gbnnz2mS7cRGE6L1MX3LHoJeiDZy2P5gHuTgb44NhbfKjsf8dfpPAan1wS4ufSRXDAHAk5S4zT1",
  "key4": "4tGuFBpnAoy8aWTRmUmKFmuWh9jqeS5cfAqdDqU6ZyVcyYtR81MT8cAKMSRDdyzwugCHhPih226notNVz9WbSE6k",
  "key5": "5E8s7PG4wzcxgDr8MBvQXd3ADHiaahohDEsaCBzk6RYVi299hMQNAcHADLEdSipkwF5dSphwHvQm4DwjdZRFmNS8",
  "key6": "714qo4MQoqcso8vxJWSwApEFiE7zFYPtTuBN6HdYjxDSdF5cHJeCCEdsLUYtC9CicJpwPPmt4rfGo4UUzZAdyED",
  "key7": "59cTprqefYhDjgQA9rkiJCscjT6kWDyLKT1AaKGeC8NEY1xCQiUTMSZ4Nirv61dMaxgEVSFrb9wdiRASkUy1E1Qj",
  "key8": "2bqkaKBn5SGkuaFuUBCv9ytu78BkgoJDZQJk7gjN7ARLHbfTiUQzzbZLb68MRLP9v5Y4Gp6qZD4bRZe53QZh3KSb",
  "key9": "5BUg6uUjDbZjGGMTaaSg9KoUbTr99KBe3XBzBSD4FQzDNrtJ8xKzMPfW6ZdHorXJuwmA6q5XLBjJ16BsBJxk1AL9",
  "key10": "2aunR6qwjrFRSaFweHTmVTCGkemExRvYndJLugA4M8rpu6M3esuqgPPhiYHDJG98su2k3fArrRF9UpGCjfUEEEwS",
  "key11": "3aPEqLJ9Gmyr1auSLsg1A6tGuGH3gzPR3eJFq7AD9h9mafDLyvJCPnQRFqQGfvFrr458qp45eTcsoL8ozux3bEBD",
  "key12": "3dg58dDkSVMcQgtfHhQBsk1Bkk3uA99o1x8WctUZkCMjxKJg4FuW6H6tHdJ47AGFfa7LX78ZfTE1MVz4AbUBC7Nw",
  "key13": "2CZauie9rxc8yV26YQcZfdu2BrRkdLvy4ds7Eqy8GKK9GPkHhWEA1mDMVj6eaAXH3zjZLFcaQz1Z4DLnDeeWtZjn",
  "key14": "5dvj1mu8MzVHEqq6gLPatU5f7NEe5CtDyWV84h1xPiL7SYo2YAsj8xipQAghYn3uR7XySmKaG2mxvwCQxPP6uh5K",
  "key15": "QkjgJ6n9yXGkcyukKcJKD96uXztUGAPWuURcS2NuFESozGebx62wwAb8A984ZFey35rWmJHL2gzcr63Sz1aJKiv",
  "key16": "44G1e4RmHEAh3qtPtVHCGMDTG1cjkYkcTAnoQPjjDyqdxJEr4U4U57rPs1Kd1BakqDve4g8DKM6zDTvHag5trUQi",
  "key17": "26tvtsTL9FmheDkdUVkRwdiDPUz6P7F7HkiuSCK5sQnzRce9YgpYbAKP5FgmQeem7sNmhbkwrQZbmiBGd4snNruG",
  "key18": "5T67J55eNC5CG7AUeLaMKo6pyxsdixNDmCEtfTm4gm1jMofwujAhLpETRMLdV5jhtE2S9sgkzYqCsSThTX56x48y",
  "key19": "39yR9XPGJy9ocCMNfdVdMVuukFFW2y1pgut3Lnzu6TJyTo9LMEABDbw1BLupk26HfRmRreTR6p5k99NWazYWPEGM",
  "key20": "3Z2p7xWWwLvnzYtJmgWnyrAhVjAnWBGftHUWZwhBr3ucPHrMZzvx6v7AN2mvcBSKmVkQpdesqihgVAQjZDYkYiD1",
  "key21": "V3j1CFJBrbYewZBvwGonpK7QM2vRYeqWDKZUP7qUpTf4ziFWRgBeBcRXUg2LqcfoQazr4tNo9Wb8D262pa4boSN",
  "key22": "26fe39zRHV8gpSxPeD1o3MYFACvGqYCSk3fnSPgKzLTPt2R5vrv4hWUC5X7kGVDvDpxh9bz84PLoJaZ52XhuLT1o",
  "key23": "4Rb65LyLF6qs7GXF2V84yCmtL9VkmB5Gqr2WzcPYrEh3y97oJ4GGx3Sk51cDJiRQUfnfzkXT4LZjuYxeP35oPnA4",
  "key24": "3ttAovntZANbaend6S54FdwH63UGTSkfdsRh3Mb6PdMrMFGJBMhcZMYTuVNcb7V2eznG2N5ajSSEuLRAKzzFEZCs",
  "key25": "2mxHkua6xasmjtdagejKPw8HDkqAxTRKWpqU8ufcnjrrtwbNUESxw2gzagLGAyQViNw1uoBzLC1DPfpv4m2tdc3F",
  "key26": "4UDPXxGdcQ1Uw789oGFwHne1zsgB6Z75HJVtfT5DQWjHvLmkvtipbsdVRB5e74trpLu7W2KXpZb89UUZ1sJ2cApW",
  "key27": "3awiiqgYBX8PuKoGvHyHt7yBQS5gkunk1dSGZcY1comBGeoGGqwSYtAox76uLeVecrsG6TN9z5J5WA7QWZJrfPdy",
  "key28": "4Vobn9gTC8M6bTN8JaLveBSYMBFUoiQrhHFABx8qx3KDHeVfiprmXAZadPipurdsJZWdiXa8UQhwkiuwWs8yyxiN",
  "key29": "2xHhpwiHaj6NjHPktKVDjuFgjrpdWtnsQaBTwaVbCQCpjGLK46VhX9RvQFFK2cUGNJSmmPxksd4roUwQJBi6eM1p",
  "key30": "5Q4xYUdtY7R3Cs6X3BLZESoCTcmUnecm3kC5x3QVuhu8is1446NBSY1hxRV2YRrBLPDpNa31LLHdZbBycaWAwjBZ",
  "key31": "aCYahFxVSdT7zWKTpantnFSATB5kszFz8RtoTBWYHrNPnYnCqRYkURevFfdYJ33bnrCyTa5eK5RrQX5ku9E8Ra5",
  "key32": "4jSskiz6dYpkU3WMLi1VN3m8ud3jjGmxBDdgwDsJqzH2ALEm5azuqd9sNj5tmrL9vQWF6DNt1ARTr8gHUtp4HvrU",
  "key33": "4z7UtsLx1ZbyL1eMyZqYQ2BzpDtJcQyRzZSWAxMZVJ7Bx4NNx7sZG3oHSqJczBApUT4rqFYeZRYqXPWpKB7w8DMb",
  "key34": "39hacbkTDsj5JxGMPNKqgbRrfZWiEiigT3jAHAux8wTDzPR4C5ZEiiW2AF12DLUUhSV31AAKaXShu4x9tPyiFdKt"
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
