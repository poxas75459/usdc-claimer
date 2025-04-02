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
    "2Eq6CC9QSKtQ6pMeFkgsWCX8tApV12PjnC1SpixfL4U7RxHmXf1exYKmKAJFVAscFWYNHUHgbXEE7sTY9kVoUPiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672KLoqRpAC4FWEA8S16f2Dha2MQqzbdbZsMD48vGirSqsX1cbQVmLgMVEiL2eXL12LqkTgNA2w4w1km7BrDP3Rv",
  "key1": "59eu825Np6WZ4U2nKxRTMSnV1iZ5oH54RCq76ixdUwrDziTmGdMwYBwfHmUGMNnbZEZVXTahWRpJohhVPo8PeY2k",
  "key2": "29jev5dwZHZKwmK9djdsGJwR1S84YXEvA5vw4jza9y98r5m76q9afJTMoCB4haMpdXGadb7VEd3gJgJU3tGYJC3p",
  "key3": "3dpCzLfZZFv7jvxBDo4usneLaqntg44sN3vQKkrXReYidyDd9ScXZNNgUkuEVjUVoRaj9zENU8BKfzDaRH1gDiwq",
  "key4": "3XSbSBXJkmdsm3gM1qhkboQokTFXvdnSQ19711KVjRGkQZi9wKiFp5ysi8p89TZWPuSpZikfjUW66fu3DULptAHf",
  "key5": "4GbWjYgN5CcBH9HJFfF2ZW1q9Uxo9sJFm88ukMt1hVQXxgsXf2D3N5qksKQm2VpW5TcoRv6AaodFgeF8XLUc1Nw6",
  "key6": "4Rm3ktgWrtSnBLPsNReC9CYNuSPfytAfQwLTJS3GXUR6vCGV84FahVuahj6jjLiGZ7hMgcu6po96wvd2ugAXUQvf",
  "key7": "PEvREPspNnoygf53EEhi2L6i1xijuWmVWmovZQ4yPqSADxWmpEUQ3DToQSQLuf5oGxMQ2w8XXaUo9QVyx4dZ1ZV",
  "key8": "5ins8Ly3x3QJ7jb9YMxTEbzAKVMQwDwox4Htw2tDhQbfJDBVRjfYK2ttq4VisDjVTJuFqJSeUzFvWD9pS1akL5FG",
  "key9": "2Kv1cLAfNt68ozrkrLYVnyTNdWtSgJYYrKD5RUZngxHnF91iiuPWWrQ43QP4SSkTLPFYSg9GebUD1jC9DGJkbaSy",
  "key10": "4b8M7koxGkd4huLrM1FGLeC3dgGtG8Lte3xQmQdFivHVtQBEtXquxWoVwyTJki9pghgyMo3EtRWrAERsGUK9Nb5G",
  "key11": "DB6fA1Ch1o7PVtwtsyCRDjcDTKknVAp1w8tqsEZ7bWGbx9Xg9UHKcSHPcWB2oEXQCQWb45niaZRcAJLDuRRUsRr",
  "key12": "4cyUGHBi1fRMD1FFVvQacjZgbYq1beqGLRfqbyU83bbRCt9xvt2jCKHhzh8LX3TrvH4VUSVYaLgvxW3AzREUYCCC",
  "key13": "5Pe6SYSeR3BwdUJ7D9tWEHRx6TnPSWnvwLgJ9rxyBzKVEaHeTLwGoKNoDrymxFQcuPengwD8jxGMj1T5at5MgVib",
  "key14": "3Bra3X61oUEMLCFpyz2VEfiW62X36DXEzwT3UkcYqcm6vCuzEyiayqt48wj6cjCgpMLAv1YrtiQBKb2bTQtnkz5B",
  "key15": "5UJDid11E6wf8QXmzNxUSL6tbCwgSjvPaCtS1XujsUNZWJPi3RHg4ZdZsbLwLLnQgutbfBanxZrdzDV7BL4F1iQk",
  "key16": "5wHiZ39xRcWrn63Lgmsz913RtnCXTpd8wjERKkJtJRs7WoqQ1994U3nvhXW4sAZDC5hGaC1wF6rV2jf9tAiPYZan",
  "key17": "maYxqjnH3oRwEcXxRWe25NjyTPuNwakQkPgqCr2cugeuubQbJAzxcVyz9x1CM3QJi3GvgtZJJc52MD1vyty48Nx",
  "key18": "A3ALjLtLj6JdTDFAdgmJHkYnr4U5tgqSwQavZkTxs651jvt2cpv1UTJRyxVD6rpcZtMpR8HnGLVHRZNfJaEruss",
  "key19": "LQBqWRjVALVpgH63rLStVnPXa4seKeKJYWyN2aKXBHu9zorEvqppqvm8KccnyYduUV156iN3ELBhNkEaDknkwP6",
  "key20": "3ahwzqHqkUNPYdnR8LpJHQX67VwiG8NpnyDsA3ipCvRkKYhScz875EyCydoBgAFG3NC9BsFVzfstzyFHz4q552YL",
  "key21": "3ELa94PjBxAPRWCzVDR5YKZRbrm49eL9mZ8yg6zsxWaFS6i9kUGcpqk4Urj1FzTX9ZTrNAmtDr7TvTcKHEjKmptm",
  "key22": "2vsmXivqkrjvo7Xt6Sk7L3cFKgzEgDvbMXMtKUabZnhzwccBmWDkgasjTQH8m6yNc2J1LXpVYudxp6sbdfezGC1m",
  "key23": "vh7dtoygAnzVCGNejuLx89VqbEQCTgX5mAVUzK4yWV6Ck3GeVBeyDZFWXYPp2gCW6ogYVb6H5B3GmKhFjG8fzcz",
  "key24": "56v7ch1QQ2jdfkxR3RBTRgR9gbQeBUNkBaRpAuadgqM1YhYSWzyUWat3aPEKDwY96vTmTXP9oW8vxdFpWXfdfjpV",
  "key25": "4TnQTsgYAsViGjZMpnGYAZotjN2hXgtqKoXaxhorfrZ3mx6nmNE8jyKFb6F5ZXf55LntyTX4h8U32KC3U2wnQmoV",
  "key26": "2gLoQf6wtU4Jf4W1gVbGJKnJ1drvNQwZtExHCp2kevK14wk8CNp1V5rhwhN6kyQZp7SuHG8qQFoAeKuGakPXqoaX",
  "key27": "2u7CnkeSfkzEsUXj3pPTABHSwrq97Mz7nYwiCtUX6kwUEuGzMSpuecHRgEdWNFoSAa8w2ugGhZGLihJ63KwVXD6t",
  "key28": "2fbSbRLkJXXxPn5jAZVxfxCUYVNUJYRVUfZBaYoFXyGZbr8THVCxYmEUoZPayCgSdX5kZi3NFsT8RbMzAEXACGEJ",
  "key29": "3EQaKfKLBw6w5CVXo5iUUvdhfeg4XFeNzWp1eNB6kQQS3AXopjgxWnwuSxBQpKUBTaMW1Y4dNs29iiJd6tzZTBtP",
  "key30": "4YHKd6JgzB4cPcjUByxDL96WgFF3CXqeZfQr79qBVtXFaE9q7sMocGqSCygv7PEZMt4Um6Riso6ZuV8Kkhjqgmsy",
  "key31": "4vQkvxrntq8k8KTXUVvGwRwcUcxNUDm1GARzaGbQS6twwjvpj3GWQKFWRNvESPhnSp2hxchAPWLwEXUVru9SqeLG",
  "key32": "4Sqt1Pd9xaAeyXezc5mn5pp2E22pTjvnRicfczNy95YPHSoBJXaaxkArePwxGzjtafQWCoEqDAb31pkivwUhSVaw",
  "key33": "45hYwdDaF41JP55rGu7RMhKDgJf8V3mVg4jTgv3Ftzqc2oEb59RpDnU1Anyu4e1cU4gEuickSiZuBTj23wiuu8tk",
  "key34": "3XuKiVTQjSkcuy5fRaCXwEisBSw92YPSKWHJimvugetsvHjehofSVKwr3pT2P8g16D5DrCwNTnb5Wy8DcBhNTUvN",
  "key35": "67nfYmDH6CETsfArkGggP1rXQ9r3stTZVW2Q8VWPMWnBtfdY3zFyhb11x8dVeDzQq4zCyjaqwp4F3kVQ6gr3nyXu"
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
