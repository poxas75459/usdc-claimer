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
    "45XXbrKUaeYvr3VtzrT75PyXYYDkwcRku9LxXuAbH3LjVqdiXXpTLpKXPcJdoPNTBSzdJ7XKxzhko4HfnN8i8y4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHwtbNSwGvZh32JFX6Z4VXyZEdmec6V7Lh9nd6ppmQeXm3ThtbG9kJhmHqa2pbcsEjoSY1epNSnWt82oJhry3tv",
  "key1": "4R2h1Vt6ctMZyujHoVWGcXtpZ32D4cvJ2FQFaV4ktu1sTz78iE6oHntVqLbwJfhYdwgcWNLNrkZu1e5hBtSHKGTg",
  "key2": "51jt3K8kfkMgFQCamWcdzoKRjHJGqRTRXP6y2ucdvDyQhB3f8qAncCo1Ute3aFkKdPJYgEJSBtDWkW1aiDa2kNrQ",
  "key3": "5G5F6ArbwwQWEYuppxu7t17tu2CwPSg7qV7JhXuDTGH6A6n5ZzxSc9qvHH8ztzM3cCxW5gsJ2sMfQspZr27UZHit",
  "key4": "GHPYsmZcPLjCJMm329nBM9LYneXJu6r4qWWsDNAvrjeVYSRxN23Z1dY6FAcbHGe3xt1N7Yk1748hWXejNTM5uzm",
  "key5": "22E6ffXqhBUJNarmDPgExTLQkdYrFLMVgChxqFnjEMFeciS1ZE9LfoZzRpby5Hejy585XLVRBhz13RNZbHHJExLH",
  "key6": "4eB5VsQYGJGdTkpRZV8qYqFCFqGKivmRFALVfqWzkhtnegT8KQr48pBnfFn9JJsrsT5QnVaVrCoBpNYGfjyWPUaa",
  "key7": "7s4YMxHoa5T7WhiJ3ohpuW85fcc4zpj9LKZhXNkMGcuax6W4CDu9Y2sJJpzsmqHBmTx67ohU8be19h6afs1cWtm",
  "key8": "z96NgDDQJ5o64STexR4Wp4REUWTfNFmhUjPuyrB9CrvQbF9TCUzuJeF57uBJxuCVDNucTNGGiAHW38zxzr8b3vy",
  "key9": "2uz8ghrFUQXYn7pzeJNx92VtfMm9mhrWj9ATPY3h4AiTGZBe4RyPo8bnhuDBcNCMJwtjJHcuSF3Y4HCScdjppXzL",
  "key10": "2xuNTedo376NnoYcHfJvp8rDqkG4aDBBqHnpdkL8ZY77NoRiMuuuT3XDyTmhAnuCd6yHEmfsqHMP7nJgnNNwuAzm",
  "key11": "2Xc6jZpyXtPCXvAwLVm6oHpEhGfo2bcE9H1o7E6m8YwymifLbJSCiff88bZVTwVnSyRfj9DAdv8TsNscpCZ78EMf",
  "key12": "pSAUx4qLhdWZ5mFEF5YJGpozgXJMZ6cH1PNwHjSyuDY3GB21jg9bYYuJtPc16YGrYdRvVUPCNoh3qqJwuXPceSD",
  "key13": "4gBecbGtUtQYsQ7eeD5pEmHqizJXejfzhFQ7n4hi12M4uGkVCMAQirgQ7LAqJFC1ephQDz7PHTHUMQ5wQZeHD1M7",
  "key14": "4SbC7oKxmxUkdEnnXe3pk2ddgDNi6R7C8gsJY8LUJn8fHBZorVzy3pqbKPEmeWo5ExpfK9eChHc7aEimsmMEGcim",
  "key15": "2xT7dBSRo9nTzTU8vDYVmcBupR6DU54vepQvNDiRx268frhiSjYSgGBwhqeQ2yzY959EZdjUidnPY4dnwMgmzwS5",
  "key16": "5NvtSo91GKJXE6uXbD1mCY1NiutZG68gvZkFBb19ZHHDP2s9qhpY8L6dkRGbeHa79NGtDdBfnbHyciQmLgF2GGPH",
  "key17": "5BhYQWLJSUFLseT5up1daqJmz6dpthPAG5XoxJLVyqe6Aeuq7iVfVSsutpnaZcJLHqAeVwrYnzRoG6KDX3Y3PErf",
  "key18": "pMH6pP9gXWWz1rv6weDYSTswubwYFREdaSQnbMDgd5HVB2kAZBvtsXmJH56DFJShaurjvHbqaR5vfQ48qtoJ4FN",
  "key19": "5zEkxmTnEiMMrkW6o6aVAbjNLh42eDtouK7qrvpA85Vh9YbQWJtxv3jtPHHpRQ6WB2Ky1uvyoXpm5xr6dVW7SrWV",
  "key20": "5XbYFee8eq676UQvCVMDzLvq42z4JuULD3uJT3T3uG6e12fpfs2CmXB9H96CDKt3tZwDPD4gezyuueppAAjaXAxg",
  "key21": "4sagiGNWhuf8bh9Fzu1zJSQQYsNYcFA8xTxsVorb2hz8kMqdmt4MnBrg9PLKvTLVpBAywCuSviBPQ1nM984wXtLq",
  "key22": "544uEfzJfD7KaotMEumxjqzRBX5Cf9sHYbquKGEyLkGVFpBZPUGgrLF61VKHPjk4747sRZaogiMFf5uiguiKY2pd",
  "key23": "3Y84pQ5fc2LgRng6UGT1H6J3QKuptLDofnCsZ5ympekzZdd1DTbxuX9UAZVe68xCYoMFfrwXQVRW9UAFxn1exeoD",
  "key24": "kbp7wWLohEi3o89HMeCLBF8A2jQiX252aBFht4U5Fr3PEZyMx2RXP2igaKsKBTnLkWarCYGByafc8Ezh6QZ922V",
  "key25": "4jSSNxMifUCFpmZ4PoYwr3EyJxYAV23PDW5SUSGPRkTdGgfyqqprxhtJPwmVVMUrCTarVhBRzKGPRcg8DfyXYGuw",
  "key26": "26d8xYJuaapuph5XQeF78fqT9AUJoRGYqEnSGqb6vwGEDVQZvimbQTVNwa81ukkJsjMSteC8x2iwqRXQBk5YnPqF",
  "key27": "39kswYrbGLANVgWyGMDag2uiAZ7ssKjzu6QxAyytmSfHbdcTG8HfHQLorX7QSCmzt2t5RMKPicozky2ZJEJNZ6CV",
  "key28": "5jF6GifNGtSnixYVYdfh9PAofbdoRBvdEXcxAWqPyTZ8pYGnhXCp1HFJEh9oZ6hxcK76UUqu34wcLtKpwL2666Z5",
  "key29": "8tRuKvjbmfRTdAfyU6hWE7Kk8MsnWsG5eRaXdHAuKH6n1FoR37ZHM3ZijWoTSZuaNFmxLWuuUwS8KX1pAceyDmQ",
  "key30": "C4jc11VtswpSNXQuH6F9925Une8DzqtarftoE8pWzFASKG6NYEz7Bi3k2GwMcAFb3UTZ3REi3iERtXLeEFWYq7n",
  "key31": "52fyMN7drGi8RQmSKqqiQ2z7EK1jtjjbMWwSpc82ng5gQCK2ZYHpMkzwnTUds2YVLhTwLiNqFotcaZDuov4zvroM",
  "key32": "639XFxDzBZnvZiJyoN7JALF4DwFQ1sDrZbQLV1RpGxEnSizwsPJwucjJ3j4LE3QPXgE2sXY2UmkXGEegMrHoQtbH",
  "key33": "333aUX5X8ZaAyJdQr4n4s1E9ZHYkbCJMuQw61pYhBtGWYXGYp9FT4i6HX7iQWLu12Nhax2BnevRsm7iMzdcYnw3q",
  "key34": "QiMpo9McA6gU7TNjSRLWWui6fVomCPtVKuyANH9jooJHpNkWY4UVNX71tr2dvVQ1SKD6NnoaaoEBeRooqEzWrTC",
  "key35": "MUE5XJz1D8zbdnXm4JJLqWfXcAkdRvHCURM7eoGXCrShNgD6cWd3Vg6eCAAfLwQN7qBiSV7Sx9bievNtpo9FX43"
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
