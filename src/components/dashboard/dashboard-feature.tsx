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
    "3MibiqTcUHfZ4umd7Fvbf3L4KPgdy4BtwJwiPKx8nn6iCNNwxTz44a8p39FUAMip6CVXGiT8cFG61yzvQmsYQkAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b3Z5rCDjAzcJDCSPLH36GjxLDdNcghBCNXGi6awga9YseXkSEN8aJMd1iPVvGiLYpmm6pDG11nHV5jXNzksAZ2L",
  "key1": "2VfCgeRugEGnjYFS8jNq6pU56TJTFHaDTSwBh9LnFUxQ6FkzHpY9SWnLfUELhsZQhFwGynSj8YL4qg3Do4UxJ1Xc",
  "key2": "3KhTHMKGNoY5zYtenFVv2tGJ2uuEqmVspNGLxHL1Ng919wS6tLBHjLcTEpKC56CXTiw8QpLunN2FjkRgcZ2wcAHN",
  "key3": "5dmeyVCLku6WJxATpERHxmXt3bdzGmnpR92bsSbJqsRkhURSgEXvXc2UdEMvKP7LvbWjVJ6KT9SNMqh7ycq1FxJA",
  "key4": "3QbdcxB5bdoU69gN2heNQKtRUyXgTiJg4556FBMT9X9hBCYToEDsYmQv1vrnAbUirfzqYaQPMqZ51nhWs1zXx8dV",
  "key5": "nDrK63yj4oPRNou3Z1s4DPNcKCVHRJAE2FvCkraYMHmhtUHMfodBBMP9ronf8eWoW2jui9U7ZPRVKPBL3nirJur",
  "key6": "h2NCa21LJYyoBfiTUVyFSso2zJiuAWiC7Djvcd1BHkj7bnJs5Q1MNmXRHUqwrXooWf5fSrN569cg59tApTomBR8",
  "key7": "KcMexhmMLuT21ZqVfRSGZj4KTXAKwNFi4pH2Xu6Am8aJaLEQWs4ApVVWpVSduDnjcaz8CvwXHhc8JF3r9EGH6gq",
  "key8": "2wwzg6TiHXS2SrfaiA1g1yJ11UPsrCXApJ4HpYJXD3JR6wq2nKyt8RAKLD87pL2ZRh82DsHmt7BGUQjDy9qNKoU1",
  "key9": "3NauTn83869C5Lw75jcs4ibBGwvsJ6C2ZRR71kVD2w5QRaU4uLEzDApvp33x3gZcdmRcYc6N8QNdMqbenoJW1kk3",
  "key10": "547YDWaZUSEnFC2TGZaHnnavpELSybPQj4qE1PkUEVsDAweGx8hRHJXaJvV1sQtSLcTSAEBe9vzYeUFVwMF7ed1V",
  "key11": "3Ex8wArop4KKictLQyok52bcrbXNpqbTNs6Yfei5NktXEEFWKCS4TrTTMFSanVwzRZiTmp4P4iWMU4SzSc55rCQJ",
  "key12": "46GRENbB76LLDmVu7Fz7CRKPwYtEkuUi2nfv8DRgBSNuQ4f6yGKAwwk8s9qS553TbTBTvfFtqbe7dN5J1j4V9kVm",
  "key13": "4sVtFtSZtbyY2VgN2JRjpZUTWMC35fRBUPuALAjkbdihXgk8tCPxyznm5NDwSQsNumMfLHKQYns3tXrhxWMz7pCv",
  "key14": "2EGMpxwbaKhiz5F8DL66MtV1pzJEEtN5XJeohXSY4QDTsKbGcW6uFt6efYDUMtmJG7WLCr4x9jfKwpEzMCxu9idM",
  "key15": "3AW8jnjyZ1qqsB4MEqux9aMCU3VFu3Gx2c7qinFzV5zPcAtfhrRuunbxuE13Nq1GQJN6Ti3FqSqLQhqz17Aox8H4",
  "key16": "43RMkeXBtZzxPbupDZq4x5ZoRqmRwgzGaaE8PkZxyJHqAU19Am7stVTJipDMSkcMMXn6iLLZAYBBj7dPPBw8sWPx",
  "key17": "3gqU34G8yH4rUz11BGVJZ8HUaZFNW5kQ434j2M9KynJV8houXzWqnQSUsCrbNnbKaDMEBDfdQjuaC3B3WWyhyYFV",
  "key18": "8NxyGzU7SjtVjV4kGURyPkDA5Q7D251Mw7ZsBsEHfNDGoz9ztcinb1f4Eyec4vtuJsiufoHGwtRK268KEwatyY1",
  "key19": "5KZjsKTVUqhb79EnD4itHV374x5x2CWz7oy2ix8SptSx3W68VFkFeePNY2wKeBQFMwAE9J4kQSR4RABNrHzeyn5j",
  "key20": "2U88nJGxEAs4yBNgCyGadEk37M1QCsPbmh4LiUdAqVMCQkzhQkojaCMMG3oXjYv2bGD9zRVnATPXddzi3xNE5PDU",
  "key21": "4fHXTWSb46kBNbSzufjhYTv7tgBfwLuPyjfHj22UphjcBHX1fWkn1CVAbriAeduF61K2jH6cwYSvvvFuUZshQNJJ",
  "key22": "4AjCAcuMd2es6X7XQbDsyvNt3dAR73p3r7eqcDtq77yyPj7zpr1bRqE51m2J63DB1oy16unzrmGfwTR53xCB2gN4",
  "key23": "n79vq4QMUz5HuKbkRnLaRGcLmreButkEzNYjTTc3jrVrnNgj7DgKDWtFZKv5MWT7XaUX5H6mEzxv5F9mbkyStNv",
  "key24": "5ss9Bq1YpK38NKXZngP5GhsFsBcRW3zqq5eGcU1yWz5vxUHRvSy7NoWjAbmfSUbLKvz7PbiSypdfaRLQ4h6UuJY5",
  "key25": "mon1A9CRVrbtEfnZMK82zyxkn9YWDAmd61iv287Xni7vfJZ6GZaaExAHvzTTj52wXyzfPfZGHUmZcA8pfwErLba",
  "key26": "2A1Xt31phhQJLKbvkaSgfkLLxrPviGQxWLU4KV5RFMH11Bky6TewwPaoFahiS5DcGWoPpqaAL7bFqwQdVYJm9wbG",
  "key27": "RFJT1cPuqn5g5jqJhobaoAYvSUo26Csp1eY8tZfEqAe55wNFjWBVDSk8FbmtArpgtxsY6PsaD6x8Jqu6meWtojT"
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
