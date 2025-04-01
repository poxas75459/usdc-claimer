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
    "5eLNkuHtWhnmd5zV1rmXte2k48mk6gBebBEPvSKjKx1j7MVkQTJyv3Bfxa6TrssfAmfx3wSDFEPzKVJ1Ze1KSFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNPbBY3KcBiS8McXx6gnct9BDbRwiJtDRxNCmteWuvCEwMfVLmiHz9YJSJv2p93KFMqGvkCfdHe5JQeqypyxjb",
  "key1": "38QMjr1dryUmyxx9ncnBk6zxKAZcvb2SWiVZNyQvmbrQnifBGg5pcciMUWgXaXHXynuz97zRo3y94wct6yDLwvrD",
  "key2": "2puTajybjvNAkk7AhGZcu2LKfDC7hjsm7BvEbEJomCq5nxwZnxPvDcpuDV4zxEcWEoKQmfxXupDRyi2Fqk5ee1wK",
  "key3": "NRGR7NwbJvtBoFdPLHsAav7z469PhBTSxcppxKec4FeTkTjMBahTgkRmGMkqk4q2JpcyDJ5H9fP6hQ447fwa25z",
  "key4": "sExsGnvpN5ogFexe9z3aNbd7mdXgj2mSVt3DUPJ6ufND2arhpZQ73MFYtHdWx6QtZ1NUZh4oUhSaGrpgYtL8cgK",
  "key5": "5B1oiLxCczqkgDxmxVg86Em5sHoZDQpxsbhpCVPqkWk3cWbWms2hHjXLdRQUc2Eep1UTGqj72PdosWQ33eo3bKJJ",
  "key6": "4HyhDS5ds7UtTz46wqZSNNoktshA14wJFnzkWpoZu81WvkCCuMQJAHJYkvRWBBiaLSr9wQNwRBvp2eWrJBVvubXf",
  "key7": "4kukhcG6QCsAen1XXqayJtiS1D14f3d4HhGpLDGp6fJw9FkeL56zPSUJS7n6xZvz11kLZhYSBVs8w4qBnmcoNBXJ",
  "key8": "2CotnB7eU2hifXYKvenf2LdQxXNBhkEhuEzSk2Fy4XwcAv9w6bzg27aYFP8L3cvdkVheHUrvb2yttGi6c9HffwsR",
  "key9": "5nSEL9VxNzGgVGQF3nvYVG1EiP2W2D4FmwX9YeAtJ3ge86LknSMVosSw33TtWy7BkY9agkaKBjHVY1Kgz6gVKz9M",
  "key10": "3jjNg6WGDS4mwxYDxVVj266rX6b97oAmTw66Zn7wQiGnRCPLzW1hitR2FnUtrfJ4XVWCKnGtRNqrQ5ta7raKJT6v",
  "key11": "56wKQvSucsTBNyg3hwgVmgTYReb18W5PFouvr9Ww7NBig24jp2gMxhsBxdnMt6kGxZUnvtwTsMvE9vaUMWqrbTwo",
  "key12": "5HuSScRd9Q2BB8JH58TgfN8Co7mFqhDRV3hwuZpWQ9DJdssXaxEa3MYXYS2VunPtTHQdnEc1dmUgmLtcwT2ERmCH",
  "key13": "2285ufw4zK2U5jKP47i8ojCB3NZasaeBpZGRZrBn4neijMBDTWScjbqyGBs3JKNFfXyDWVBkp6QhJTz8iaRWZVRS",
  "key14": "49vgAeAAGkCPEzsjGYTP7f2J8sdKNJ2arrejUq799Tjg9F6CuLSKb26WVMHzooweW53se2iQen63zeBU2a4cLxBc",
  "key15": "2kCdkA9auhTZYHeex6UNMS75yYiRmhbAPb8LwbRTQtrrYJwRBSfeBC44xq921hJqmDa3Ueasy86ggAuENx4E68mm",
  "key16": "2eSZ5USwqMND5rKa8mARENUF9wJApXv5EWEtPQ6WCQAFmhrJkmAsEfVaPxLQe2dCr8V83UgEuRFCghXdQZGACgGU",
  "key17": "4hzNW7mhhUQd8Hp1aNGBi3S9uoga5BPbvGVMG9DSkFmb7sKvksqwdvTq5447LTrJoEPjTYPe7sDkyL26VAqKEovE",
  "key18": "5UrerE7fKu4Z6abPxwqCfpDde3p6nyJuTecrZu9BCQTrTggXrTngKPV87tvtfiV3u7K1zFxD3Q7aifgp4my7tdE8",
  "key19": "2w8fakiVF6niz1Fptmv1sYbpFLdQmfZMZVDaxeGojBrsHYrPvpCNzRq1mXymcKLoQLe75MSUeNswEciBeJR8n1pY",
  "key20": "4RbsRwSEBck8JQVGQSba8Ya8JCiinqKkDXs62iEXaM7iygbtPgG1KkMQGCgytr4AXwAVye5UtAEbRDRbayokgBHA",
  "key21": "4gp1kfwTqy5CjcxDQGJb6k586zQdP38ha9JQpVix7iYCEh9RbNrKfhJYK51Nb4pkVnLeqtVs6ZoW6mSxXp2pP9f7",
  "key22": "2ABFsrxUyK7uSf4PurUKk5wojb2QecKpSzZ752xWzYYnrfBnDujZSJxGZyts6pMNcPBmaxiy88LaSNuhApSvYe8Y",
  "key23": "4tE8F3n8DXcZAxAC954HsrKJ81zvKpovzAbsqCSQq1ATQ25RrWHbnBCwMkp84rD46vZssZhsdf81s8EtCumff6E7",
  "key24": "515nLsoHMVDwp7qnkzTY2htmwH4MmopC3CRAMEvNy2BWfE8B9KzioJtDGWBzg6bYURb4aPxuyPdMtKC4cHustxq4",
  "key25": "drY7Cm4UPTSgAKyuihsNLhYJxKprdKe7YDSsQNoanTSw5x2QRza5EqhswD2ZNrGvDbzWbRT2q54hQWaiqDm631w",
  "key26": "PVDkg4bGBdSZpwPRWRoaxgo83EUhVo83QFDkF4Ar3xGUvn6Ggczc4FABdPWjQ88vEjio4X7viYk4v1PUEKhSX7e",
  "key27": "qfG8KJUp38rWHk5Y3V5sofeFRziEwrcRQnUBnvcP6Nc3yr1Doj5HzRgyQdCDiwU81gfbUNareJCVRsXMryQGU7f",
  "key28": "4c5gyGMnaLvjz7TXYs8wLE4YwCJs2dg1oU2Z1vpKJ9WLLND8XhPTz4a675DBEqoPTXDJVhmDTeXHtTroe4qAoCUf",
  "key29": "BPGrz71An8D1T5aNojq6CJa2CTXr2GaCQ4xeiW6h3vhZUcaGhrYwDWC3g6EtkB9jja5zaJsf4AbmdqZYk11JPyv",
  "key30": "3GWSV48FLCZ6fkJosaodhGhH9KkULSigKP4hL9jd9VqDt2JVgUMzmFKDWFXCYPHvaVmudPHRtJcTStF8cuzJ2krB",
  "key31": "3ZDD7uQytDhTHrYVqfoN6VxtGC7umhMbXN6knmWZGAx1zQLt9AJaVy6YGkdqKCZgRFmPdWgrF4J7AvxPteQrmgCc",
  "key32": "3ZhyAWX91dMRBfsGhsWPgaumo9HvyQ1zLYdJnpaatKN8BRFggzXR7N5u1NGGZTUXiFhBhr1X4Ed2wgy1MBAnc2HE",
  "key33": "3nRAqHt8KdoM72M7FFRe2D63Sei7Y8dZ6q1t8Pp7BMaKQYRd36psETqL7dxar4XNZe9bJFajc7DDjRyLjH9J8tjz",
  "key34": "2KuqqrKuPhHShfeUr5T4b9Wwkvw3QbL2hUY4fU1BwRmyegxHtWJhiWheaY4L1ZMPErDJBVpphsdALUyeovsnYsvd",
  "key35": "3NSphRgYTb9QkwRh56LLgYSMMPQUB2U3ZUvmD4KDcN1sNDrRhQSELyd31mL2EKeU664m9KfRF338zbBDXjE8ygb8",
  "key36": "3AbfYSsM7XF4V8o6vH4yhZywLbskJ9AGhzggMFpmm3Ej4VqBokTWXXSc2HPFHHF1hRXriDXrE5Fk46VTxTTXLvjj",
  "key37": "2tE52VH9S1gnbMVshDWJa9HwS5iC6X8NDzxAPSnGFBWid7vBi3PBcutQhYFHfN8zhWc6nS3FgL5eMFZcCQGCZS4C"
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
