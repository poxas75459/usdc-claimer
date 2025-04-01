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
    "38WRARuzjY7mAVkEwe9PTwcxBfxSGMFyPG5zJVsdpMbn9fWFsMob8h7EWN9UnmV2bHxRr1hihXSamoeosbcjUwgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxBxCQxQJzfL9ZKuUke5LNNysJweXsk9ghpYSYLxeidKs8DULQAwcxqbyAYmUBrxq2fvY5Z4ufxcDf29THnMmW9",
  "key1": "2J7qJovLxHNfrGRGYeTg4YbMQ4NarCpq2i59D82JUcjW3bgK5Z9SnsrjSSySR2fL4LLuyTSgSz8zpi9BsPUSjcRX",
  "key2": "4e1wTzPDxHbxZ5sN1Sa83G4SkWM8xmBVNFW3mveCf7QVvPQ9EGjdSvecbaVGv2QSYPhArabSMXyFhEw9TMHinWm1",
  "key3": "3C62uT4ru6Z1d5jtFq9j23hmr7Ffmsff1vQuN8EjWQoPc7TspyubDJRJCKXK54gbViPJWrVUq9ehjG7xVKTN5zQ9",
  "key4": "5UzRtN2p1irrjVjESkygLCrLqgkkXnqNtZ6mkapxtDRAGLmTUU4hmVpcWGmueQynX83EPYnY56ru2WrdJFBaNRRE",
  "key5": "2jnFNpQryo6TFbFi7pRqNtYWqKE2AxuPat9WV6fD68maHApDXdUyj63gBue25111m7G7DgwSo7nzfQr1yU1ZNUd",
  "key6": "3wUPuFXuXD37Fg7zabh9WxuqdBgPPX9WsaaGuBAFrV1PR9b15NSY3WEKfWrMm2Cg3ij3ePgqaBKA2TiE4HY6HMNx",
  "key7": "5xLsN64erW6hrnAgjA9Ed4nEUuzPWYLQfnkuNiFfX7XYv1RzfpwWBY5CxmAAHXZD7CBYkBMux62aNDTfaTaTqt2m",
  "key8": "53BV1nTUVZcRpRcXJQpinzPdkGQyN8eavk9VRUqmxWCp8Gjy73fyYVQJAcM54XyMcY4qHeffSyEDSFHqEZpURyLX",
  "key9": "5kNr7ZB1hHor47TZB2VLToX6iWJMDRhbRPMk8EyH4vxkHMrRjFXKuWeUTfJPrebuBDUSPRXPn8YkduWNikYrwfmJ",
  "key10": "3ELQMtysksaStQy2zkZiF2t3urNdcasUHU8oaTi4BHZdpw5WyqWrFUSnQVz8WGKDBQq3s6EhkswBuoMgTYmquG7Y",
  "key11": "ENcfv5EmCJQ1uq7hWPHJj5jaWDtP7oWeqJzwMWueSYeNL1jteL8fK81JGh4aP4q1SuYY4jPRJoaRr7vXtaio3pF",
  "key12": "41hFARcst9Zzuj5ZbGRYnrk3JL3WT7JsJdU8kdPUW1zwqjv8b7DNJmHUEYiKUJzVXDJd3Z3g1oFmqQeXReVwvzYE",
  "key13": "5kYiUTHUeQBJzRuTE3EHG9u7Z9xpnP14vbdWEWgNaTRR7vq68EgUpaXfj5EAFg57wiNU5bfPCP6RfCaMw55Z9PZ3",
  "key14": "4QSx8qz2wipL2PjTsLiGYGaxFKZPte7AdwqqdZaeUuYu5dSrkfEwdy7t5SqrkQitJwYu8SnUgg1Dk8WEbrNLCyJg",
  "key15": "4ji2s2xR3xhwt3qxYaiHXb8EVcHEoqE7DTgZ4QEJycDSQ16kUL3mTw12VSpEZRrEtfqy8HhpMHVT173vo54N8cKR",
  "key16": "215gyP11NT8VqsNKTKPWbBnzrBSUP35obd1RUiJvLVKdQNrQCucwiGcxzXeDc7N7dYPR6Niht7gqy1sCX7oEDjiN",
  "key17": "37skRAoLWttNViRMpc6Ct3LKf5xHe5AyVvpCmpicWMCCFGNQ4dDBqHQcyMfmvKQnRuHniXv9YiEVL8s41PUyDL7E",
  "key18": "3UULu3SE5rc5y3gv78TyC6Uq8vm6jPCc6rjW9gFQmU3srPLoKqyJTFCvrk8NEhJzVnyJFeH5feGRzwcAt2a1QfcU",
  "key19": "nrCbBmp5jaXu1SMvgxRju5xQDkyVN6dQ2kkBf6mvrcuPRYcdxLRCxGfkCfF1YoKVy8ep5ah3kat3mAQorW6EeM1",
  "key20": "4ygQzNG3U4QL2R2kLRADJCV6dkBsgcuvNVG4o9nrjLdf5xziGYxr7Rrp6UAghBRFVHpAow2Uv2FpGQwkR2dHh78h",
  "key21": "51XgTkawi1LvXFJh7fvG8a2kBWJq11iVxdwiJtiEKYH9J2es3jC3GbiRncPMCLVRBkazNWizvBJvdimd2VzxGPgo",
  "key22": "66vGK5qRXkiyLm3FPyQHu8A5cbaVbdeoFtuGRQ2mEpLBwLGTiUMx74p57GCLiU5qobTsSyQYWU5A5mCsFRM8SQgx",
  "key23": "e7UystKuhJ9KUoxHsa9hrc9jDr7AwTzDJP3YdLoAhF7MzPM7kJ5maz55Yh5aeJRknDJrEkURoA1zqNmEdQF7yZk",
  "key24": "3Pd36q5ppTYpgpL7RRinR3iJSwamKmY6DZjDnvQVAHXHpzeRQWkAQELneTiCPKqXQXWXURah5taL5RaHkHs1Rty6",
  "key25": "4WMF9P4t2ChumX6QxCgXdcZT2rYwscjJVuYEGFEhdxHqVU9xpe2ic4AYbeNUz9g8FNxWZnFoKqrwQE8y2xxMtPeq",
  "key26": "5GoUjPs44j63m234ZKDnxU2GQcKuhqRYEqPQQo4saorijNUWzJ4tLZKCzGURqWtA1VhkDNGr7LgmYSdboREQUoNx",
  "key27": "5qEWDbHijPYA184QPtA9Ku27SyhCiyoR53uMHRkTHHkXEZPfnrxvds4rKN1m3En1mBf8fJdyGYirB6ZEXkwxW9KN",
  "key28": "4NchrHiPbD7ph9yowUB8rmE1yDGYNqU7VdZBmUX5t8wzb6DNQVAwu5b6hcMzUNXrrugGFsZbySZfUqKrUiGzA7TE",
  "key29": "KGAc69i7KuWxdKuXqgwGoxnyR3whdKsSvY73nrnvY6ayRZcZd1CSY9B57oKdYbsvH5pkPbWVRKFWMSgi7ZcfKv7",
  "key30": "4q1EqW4RYmRr9N2B9R4zuHBHT56HMYzAGZmMkdas3UnYKQZgEiNW4Sv6DQvGXeW5BgpRDMvH8nNq9PvARrRKwTdC",
  "key31": "3JDqvAM625uzNU6SNWLhTyghW2EDGddhgt7GEfYLmvQWqfPUz3YqnhWBadao7svesz5nWHqQLN9YnMU5UrwhkKXL",
  "key32": "4PSURW911MLhea12K8dpxQkHQSRotFRRgi67sbZ4iCJKvYc9DveBp9hJuGn7FzkWC1r381CkfJHAqNRE92LLyrNr"
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
