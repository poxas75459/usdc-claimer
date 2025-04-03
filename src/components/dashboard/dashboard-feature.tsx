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
    "65bKFSEWuL5U4dP5QrAxzMvAyCfj4wQurwVAoH9Pz3z8gxKxTp9Gq7swgeY7HwqvJ6RPCt3tddp4hFkTxmU3vATJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oR7zhHracspFBWGYxpRTkbvVo2uUW4UZqKmEDL3cPMQR8SJjVynEvgJtDSL2yTdd2b6WXPHdq3P5tbVPaMxBdL",
  "key1": "3YmGNJBJAfhVKkgLSNyTkoXoMnWK5Xi2iCskAcxFzVwM1pdUg4t2ESZV8Bm4m7GbPWPYFkPDNPGaLFYSyAeXNeKu",
  "key2": "2inmvVFpg7oTkRLSxhn7Jxf94Y5XSddphpUXnjy4xA6pKpGSG55EabNth6TbRsXwkSNbuxeiue5oXnm2C9CbxniA",
  "key3": "2Q8Fb3KNApDgMsnXgZ8SDd5xnUaF9yTTnMDbECbhTk4ef4ryY94t4SApYZw6u4fQyYhR5S7CMDBSXq1VjzBTPBAj",
  "key4": "22DH8MUcFUa2D6ktg95Vvf6fYhg4bVFdtnizHL3FD5k3Ug3E2VxYxPeFXnf5TwENgGcjiTjwSGaUGnQzd2hDzYqC",
  "key5": "49N9kqTUC4JKSDEsnGzyBVW3Qd1jMhWmJm43X1LqPUu8NXEa4sKX49dX6HRym4m5Tq88E6yPN16tX7H8d2qsovLQ",
  "key6": "5EBWQKL7sVhVGdgcx7jrxQvA8SSiAUSFtcVh5EGjU7L3tA35Xy6HjwhL9Wf7sN34CUNiKzkSWs77ZJi6RgMQhHsC",
  "key7": "3nRT1sJqKXD8GSZXfSdVCU8ndezSx7qwQijQsFNc4QswzeaiyHCF27GBCqQWthLVcRuyJgXsTNAeU1oSrzaJogi1",
  "key8": "5tv4uZdZga3C7N74v3czkp5tDq9vxkNwNNU1CeKe8eStLnvex6y4Qti3HGtfosrdC1sjpgH8VzsZuRxv4KhvQDs7",
  "key9": "4ynKBDuYttMDaKnrWStjW5xiJChkZ8nKtFuqCMeCnTPXdpdUgWhEhXiK5wL6ByB7WvPSiczrBwiLgiMEtjXokWL1",
  "key10": "2hNEb8mm2esscx7JBtaxfjntRfpr75rrzsimjQVEvzXcuKTZFrXkxUJHDhCWHG26D9kgpGdTcdhRDJyXNAEUcPRP",
  "key11": "2pELa2XUaoZvuz7mxfpWNqZdkpPkVMVSfyU6T85SJ8eEv9MxWxFqXXW2FoAEyjj6yysp9EMvnnKaq8iZtV17zY9h",
  "key12": "4nmKqQZcgVTNBkjJhToBtkNtEKSFk7jZEEchZtzvsubGZhk8aWaQ3pTVitWAmYkV9acJz6Sh8rSsxeiocaE1T9tQ",
  "key13": "3jWzhPqk9BWCuRDCBxCn9CYnFGZfVHsD6NfdWaYFbQsSQbGLsUnmRpMP5B78rTQ1DMcyiPJCpS35pWZB8SHAchrj",
  "key14": "3aAKL9B9qQSv12CREQL6iKFwoop8Ao3WC3E1sPDuJg7W3FJvn4X7ktJRheAVVfHBunkqumBCPfihsCkj1R4rS6qt",
  "key15": "3xMdcwcbkXUdPqTz9FBwXF5FGdZKX24CJWKnp3wh5SJvfa8qhMXkXzonF3tYQfKtXehexjXuC3Ui2A1xirpwXnZ",
  "key16": "3EK3oartZzzHHe8LLyqv8kNBA5XkEZoe6U66iVBkcoXMNkXewhUwULa9yTXXEMqR13VpmhdkyfiNDh9XZuHBSQac",
  "key17": "4CqhZC5Qj5bdci3mUKhrLGW5erJi9SLnvTE31NQmCFTmgg483cVmPUmTqehkWumxJcs6gWbYaTE8Tmu3JzVhwWj",
  "key18": "5jcf33FFhxLDK2qUmjYfRpng8xTTVr28AHNmBHZBB9Upt7SmYBWW11f1Vgk96gwhPTd8fr2fL5KjBZB79hvMEAgC",
  "key19": "5Sz82DS1XJko61FU9mfC2kfibNLJ8tm4Cwcpvp8wVcaxb1BfdUbULSSNiiaWozTAUiazLuT42C2FkxSAP2JB9n6w",
  "key20": "3xNHouQrRrRBKxd3K3LzuRqExUqy5qcXFWdtixuZLpTqvgqVM6MyjWkMLvLT4zwXAUhLx9EL4JUQ1FijkT2K8TBt",
  "key21": "5gjf3HZAbRaAUEKeVx8C5EpiVQnVqRpCiqCLqqZVehPjS1Azf1dxef18zupgwJ4qRDLCvhoUFubZR4QGmfF9HeVX",
  "key22": "538tbyfRMZCksUN6HbK4769B9p5mECB7yBzjusjummbR5SSniu4UADLrGbQCaWXnFroKkwDzvKxga2jHdcx2LdKP",
  "key23": "2EJJ1EqVgc5DKpUuQNjSRw4Cny2zgQPWp8ixTBmdkg8t6YzweFZdNrZKEuYF9X8ArccN2hu2uPvZ3ohK5jfQ3ksw",
  "key24": "3ptLTofD64HPRnAwy7yBCRGWcmRdYsKGJfyPRQ4g9XjBJPzb2FaFZWL8hF9MZwwAMDvgaeee8qGCBvn1b6uLxze2",
  "key25": "2uS17KFACDs5wpirWQic5Q3zb5kEeua9pQy9cX6yDkeGL66Aj2b8rs3LiBLJwrMh53B4WfRfa4Ah3wfVWNbiehje",
  "key26": "WHcbJpQySVAY7GSntYxAyxAAzbW5AbLhh46JoxKwbuD3LvEX7d9CERvj2aSkcw8h4FLSzmdnBbjtVyXPSng6ZTR",
  "key27": "ZqcrtwRb6wmn2jhwihNCJLzyWcDNeMTndxQR8CWfBvg6TSgYer27b6EPcfEbytmcfLWZ4Y99JHQv516eUSnTAbK",
  "key28": "2Re4kauA8EEdbARgmwq3g6xjmaLc6SHDpjkmfpuncDDd5SBPaP7nJeNNGh6RVe5gDMyAntXatar6rcZsWZC1D98o",
  "key29": "2YhcnBKdfiXWdQwytML9BNpmxp41o7dZR6vhwg2EYdeqgsqapA4ziSFfFfx2qqnnC5c2i8Ywg7vcvLutfQ6HwwfM",
  "key30": "yXXfa1uBTkCvzAsuFCxauH43Aep4XV9ZzmJh8qSA4HyNaMLgd78EmknGWfQSVQrWA6eADEGdgFvpPqoEbkGyPea",
  "key31": "4TPCRZrcNhg3spA9jSt33p2WqLsvqytr2CzMz5GF2h3XUXHEEonjkHSD4HS3TVGhbU5UtPomAfT7cnXRP7xYWbuk",
  "key32": "3d1d4rjK9EqihMToNTkG3uuSfNXfiPDiKoWqipQdoJqrsXsEoW7KQuuHwEhT7PbguxH26a4VaHhkBGbLVtLZhHha"
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
