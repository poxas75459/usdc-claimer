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
    "2wZzgEY7MFStp4it2Bz7D1SWPo6VrZvUBpWMrjygaRkHeNfvZByWbF8knFkccRearDyHdwkFoMH4rNqXrCQk7BVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xg44f5j6NRZyqQtSuW7m63kpfGXhPmbtXT8r9MAW7bD3BeFpp1oBaYi8XP6KH1wzYgPCqSaQW596wKwcgkG4NXb",
  "key1": "8MnX9DWgAHTwYJFu3PSKenqq7G4MkmrcES7sixtYZa8jhjEBseVt9i88erxDa6ZBDCgMkaRcTBT8TWtKxCTzs4f",
  "key2": "3aDHSa9XUgLdEEquiK35b53xBypr5Fsyj65E4p3qwUDrbfrMhkQNaz719LjBkgQtxNJP8HDG6va7H5AyGAmJvq4Q",
  "key3": "65xMzAYPJhK8ETpYyg6881NG3MNtX4nPbcpSE4ZLNg91FbyAJDpitRiqYesNNrGWgyq2mXJy2bBpaLapXnMXUgj3",
  "key4": "519iTvNWzEP8Wr5S4wSQ5ec3nWwLVwa4hjTQ2UpySXnha6psfo7hGr5CxR7oGriUgEznbygXrx2ESSkYh7UKvQre",
  "key5": "5Neb1GZ7maG7KLKQtgHZ2yaoJmGsAaoUFowUb58srHAs2Wo7BsY3wdhGGedEnwyJb5ie7sWRK7md6HVVQPthhrZD",
  "key6": "29NXEy9ZBgoT6qo6gTibGZYygx1VBqx4ShA1bW1rcuSBmJS2vbc6u8nKsH8xaRZQnkHp12CYvgaBVYNdYWRJzYii",
  "key7": "42TzYZF572D9g9mNU2HyZrav3syPaFUpVCjgLWGqxrddWH28TNmb1UKdBo4hg3QsisS8LufKAfzQhzeLHV6irG1t",
  "key8": "35MaUTEWFmiGJxhMDYvW5CpFqnXmPuV49Fx8tZe3CVygwnrusaQ4JrpbaHedqtWie89DA3f7EXMeMN1n7suSxqJi",
  "key9": "3ZjgfoD8ZPNhXVBik3EqjSRfkjPSNKSjtGYdomtwNu4iHZmZdJM4ssFwpUfNexZqsLue4iiXiCrY28SNcXgC7jaE",
  "key10": "4qhhipGEdgwSLYN67WbzZq1emSoFX27yxodG62ZdxG8BXKsne3Fh8mVPkv6WpCCYuT7xXPKbNNSKjErLnGJaMJ8P",
  "key11": "5EDGSfs8MtMdn1wwXcLyHyTmbpq9qW4rsw5PQkD1b2iWr96hYFG7zC9gEVGLSnmLoq1kWC3BpnHdMUKU6ivt4BrD",
  "key12": "53ERnNjoZjEuVo8Cv5TBXtX585FAVQa1GeMmZn3GAT7Hm6vhJ41dmoopaBuLff8uNwvaw8yzxqex8xfTt8XTw9Bq",
  "key13": "5m4yaWfFEq4AQxhmaY654of35zMtxu6wnwpARJmpYh8PtHyu96AfABmqFYriDzC4vDUSyNqqFQC5qh17qv2twfT",
  "key14": "2htumNNVJcLSEuZDuE62MYD6DWEkep9mK9JrjvgzeSUFTeDSR2rvk7YZHgQwzLorfBbgJTzjYK3wzVRGDFsewQEk",
  "key15": "6io2uNet1rT1ceQxuwvwrFiFxuPzi4N1S1gyc2vxFVqdzgzYJqVMPxbHTTaVwuBfpS6An7YP8egFjqCTsWoU2ie",
  "key16": "5DbNGtCDaXKxaU5Y1u2wTJbz45uj1JADVfhPoVsDvNgnMHEVqvuUxqKb8g2pVmNkVJhXGnBFfvXKBvhqVwTPCYDi",
  "key17": "2LBkmWASqwtpAunqChfwwa3p7jR2tnpw6XFhPte4EDXxT2miYNVTpU85pe14tref3LbGcGssReAqRpb4XBk962N2",
  "key18": "V55jFq6aE29idWj7UCGzuPACP3oKzB3rQCBMzjdi1rPooDLWAEXSr56hJmk4TeumWwSiCFmznu7x42mUoC7AzGo",
  "key19": "4ng3eMjjHyV5wd5bFwjjo5snZBPwtwHjNMwm5r64sXCJ6UcfkLS7ZPxhURyiJfMFDNTkuLeNuF7udBrbF7JinS6",
  "key20": "25Am44ZRhErDKquUW8gzM4YXJZrc8CHYSK1e6fuGTnruzjq43pf6mCD1QdFJxyv9VwPaYMRx2e1ZG4Gb1DkUfnuV",
  "key21": "4bRxj6PHeL6h3gAF7ZmCHgwjhBmchBe696P3RNBaanPqncNuvPttLUdjCpBePBXpzrHGMGktWCikhrsU4DvJ3uR8",
  "key22": "5Nx8bWwNcqVb1KiBJMR6euvVumRb4ELB8kmVfVPmCobZt2uEzvuFWsNKZ2cMbSMwp9YLT7BhEHiTK2PY7tm7VzNd",
  "key23": "3AsvtpnN7pMEBUTqdCb1y4VjiCQaWqrdsb5nJxbsFS9Vz9TiQCMWMsPYzuovxHmaPRkPzzC4En6NuE3aEzHZ6Psp",
  "key24": "3mH4JUwsyA75Riz46yYm8ttUph6vdhd3RTt4BonsXWZ9yywirergLqoouxd8B3nLoj4R3ih8hcxNwktdoCtZXWP4",
  "key25": "yHeUjT4uj2thzBwdLLfZFQFBq52yJyks4QizsNmRsYZDauSG9oBQ9yeuPxTszLmh2uuRzbKdn32yTKFWqJ5EihG",
  "key26": "3z2rFNfWyNfYYE5bss3n6rieADMcCqsyBpWnNss8edncAY7wnYdY4PQ7Uj9Q3ttTP6DeqoLz5S8ot4bxZ7d5k5qJ",
  "key27": "4omNXb5pXQH6PUAJNp8AjA7k5BazGyTkS7pmpNxiihwaQzm6FS83DGxgmvcbwoG2tAxFKmKTqvd1iqi8bvjZjNvm",
  "key28": "5KkXFpdmQbKci3yhezxRn2crmqNbRxVoxYFsLMMpF1T3VcHfCA2RfFnTpLLSKQwUkhzcEpmKvanz4PCnXFscZEQq",
  "key29": "M8dmZpNm1mUx4FMf7d9aEfoz7rRcuJhxH7Fm9dbGthHLBVzEveosBZnKKVhrJCVCy7kxS4Ho84ndKQhV6iyWopr",
  "key30": "558jrqJ1UG94fKPTLsofxhwQ8PuQoBjvPtsc1NEomA4gmyCg9mvRucnEXYnGRnZzk8PtEKKU96ptwKtMP1D3Bncb",
  "key31": "xGxtJWZKE64T5j2i3rF7Vp4Ld3H9s7kTvGJ9ZsHYaK7pRo8msBSgJQtBTNyLyg5obQ1Xe6nT1dQBUzMQ4hekQKa",
  "key32": "5vAMqQWPpFTTjAu9YvYkwVShKWfT53cVTMEK5LoZrr1sAAx88bMWj1Bei8WJS2frecZf9u5gsy4qsdsWafVnUQ3d",
  "key33": "58wUipTNEFNiHhEcYyVPenDBKmWtKY4AEjrbdBXZ4iYdCWYTiZLmbftVENv3jNZ3kUk9456Wbc4Q1cc9vaoM8cds",
  "key34": "72hcxPmeAMi6JybJNZqRvSZ13bwb6w4QvuH5ygnUP5CRw7TDb4FVBToYNJx6Kxw3k17oqcQ1ztPud6x8hhWprZD"
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
