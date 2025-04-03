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
    "4f12aU2GDehak1ZnMfEZXESUNdSqRf1NYWiD2BLUvuL1AjtNyywo4Znq7p4cm3qUfV9sjykZ3xcGbHAHDanoNjRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WePC8sktx1RpaxgTm582ecFD63nEaWeidLdz9NB8mLk6YDHgiE1qAo9Tp1YqoxtqbT1GSDPhsjdzrdGG9JCbix3",
  "key1": "33GMsDzc2csukW8CZfdvqsHkm3kZsmzAxtWN1zj3GUtBt9ttdNbfnGfJ53RSaV6UBu6Eou8cxgZs3T7fjoQq9aA2",
  "key2": "65y1ochLGCa2BVDT8RjpCjz8PtEVFFLC7U2V4XpMD1YPAUjVS5ryR4eVRBBxgbx3nztK8UJxfkgdsTBGo4LJkeZ7",
  "key3": "3rKWr5Gz4R9mmeztGtxSQWcJXFZf8mrb9ckc34T62w3aNcvzBEDNSCA3GtxZRdQTySZ1sr2eKUQcJL2grVvK74oG",
  "key4": "7VYfMNEpvW2z6ftEeu7YJSTSSahr8wjGLZGpjPP6PRyhLCnk9necyg6LDuqobngyp5pXyMQqqyBaLHb6DR2FVQw",
  "key5": "4RpZhAtLfTjcQzzN1aCoMwDzTRc8DchrbrUzMowjJ6rQYaoJveRAT5Ei2T2BRDCXDhGCMsJ3BqfAReauoTgSRaMZ",
  "key6": "2oEbVQdME8i5VefDzuwx1zL8b7tRwWtFHWk8gQHJDiPtfw9iGLiehyPjqpNiheyU6oukukiLYP7h4QidxUtxThbP",
  "key7": "4AH92MmFzmG8RpwZF2kUX2H5GgnV8ywCZdSkqQ93koVpL2X8sUjRTkq5vKpcKrecU4DenUUh3DP85xnzeqPYPR8",
  "key8": "5BKMdRPZWwpu4RQGskUCzNU6pdRw3RZLsKds3RKbeacVxmZfh3FTwpo7Yo8WhEqV9kEXKynjEmZ6Gk6CR9RPogxW",
  "key9": "3zoqNJD7XTHSeco3v2SmPLxYcF6mTEtdKxoevxWsB2cEAW9Cw9Hn7jcQhs97qYkxLcwyAx3cXNrNRCpuZxFqoGpL",
  "key10": "RruKUD6cTJhNQuPJEMVzMDJdCs3xApVBPWyWUCaxHCyx894cEp5d6de2FTxM38cDkgpNgMWbuCWAPWg8H4VGPhG",
  "key11": "3f1QS5eCADjW2HTdp2nTTs1qWbkcLkCWeFrtiLRBmq9y57McJNcJa7UfLXWQ3xtcZu4V2UhYJ9FEgi6DA3VdQED9",
  "key12": "3kWjPoQKMKbjPY7M85nLLLScNnp1htd7bVixJy8ion4ZfRUAjeYoG4WoRV6UF4TTAJ21tuwUtRPUkbxxmJBJW4E2",
  "key13": "2896DZWAJHMMh6gC9VwTFLZDUWDJZqBA55C3DAT3D6d6GdJA7HREF6WJ6e17pw9g5w2arUZDBRJXAzRxuEGoexiH",
  "key14": "64AWqdCGiedA8TxE4x5KbG3iEFAdpuEJK5nLu1QuTNdwAf3oY2byLw3tA7cDfdXh3Uw72rwM4iQLH8aTWHUDA5LL",
  "key15": "3kUnEp7peAXYAMsEeKW4aAhc9RDVNrpSuyJMVtPf4gcYyjKSBSLAwGrUfnDuRC34DKLjHTUJEFEP8HJNypuZGSFz",
  "key16": "3XfFGtxpwKQD8VLc93g2aYnkLD6UeUQQwLqx5CzneoJAbAYgAaJ2ajJsfce2MzRd1KCDbyRM5TtUBCrJNQFr2GV",
  "key17": "2NuBeWc2yr97Wg4qpBqLZDDsHmu7oBZVGRrwpr7A7R6h5auYXCmkuxYak2NhcdpQbU4aJMsVeEuqQ14jQZdRYTCo",
  "key18": "49fAT1seErU7UAybCwGhut4hyhUB5T9X2nJoLHWK22UxBhgGmnNJUMS6Qr1MzAEVbf9ooSrFBeNh2xzuQjkYdLyc",
  "key19": "t21hr1PWqDTpmdfC46K6DUW1xU9c5Kn8suRQfYVnsonq6Wo1fDwQWFTtSczR7fxSF6FRbZocha8euQw93vga52b",
  "key20": "3CZRbP6amY5P4ndCX1K6jRyBrCfBK8u5z1gcAdUiECvxh4nHLD8Mmmtksqksbjxq3pG3RTJ8gAatoW9z7ucTkEPc",
  "key21": "xdN9jVuBVaDmHRkxtDtTLPPEThrpDc5emaGR45kYSYFJkHKPL5G2ETznGtzZ4LXZNTqxuJnbTiNudyyxx9e9pPV",
  "key22": "3joiW8DUyqvSMxeqFW7rtBohcHd6UN8Wa8qTP1pDBAvCwVzNqY2K5vicNUReeCavgidQpyKA46araCw89hgWGA7V",
  "key23": "4C2GQFYcNWoHxRoy9ddtYhDYYiz9BqvaFMz1sboFBWbgKvqRppbNq9BT9z2V7UwRiccs2j2QvNryYNkUkgpxghGc",
  "key24": "3SW7fV1oDJidAyKw1SHCYRdE3jXYLVv6ogjxZHCDkhB4oqEH4QTaQYx8mQzY2tcTrApF8VHF7ex1YZfNuoLkyHkd",
  "key25": "2kDP8yt4R9EWTQd9jhJ3VGULKHRFQ7BNHG2hg9DP5DC528pEtWkGrf1yeP1fzkQkiNALFx2KnpwkcZLAfwnHLJ8o",
  "key26": "5t8J914qjCEWWnDJtJgQ8U8wmey3oyiTKdR9PVR4TqyZfA3pX4JiEkHts3PR97u4ojyw9H2Jo52oMfkrnsgGeJG3",
  "key27": "4RCLfdcEwTi13JeQoi97j3BBTg9WusxEEgJLoPLGoMaJxRMgqnH1z7mL9k85YVeY8rGQkfJS8e1vCtk4TmCbbWry",
  "key28": "4oWGiD6UZuc6dADW1AgLWDCmMa1Ry3j368RgkaGFqLkcP467gyjKaH66RXgnQc5xkmKafZCunyYczyunbouVxRvX",
  "key29": "2RAj3MMDpqYhkqn7EtKsc2ouiYKoxNsqLvNVpNLU93Bq64yxR653v9Ct4kz76mP2LVCFZPqzHPqRBvKSU1crb9gS",
  "key30": "2mvQGDD8YwmQj4DLTuuWR54dMJ62HTc3orfasxXWDt65sd8nJobdDE5dAKtpuEjs9hS9hC6PTWqbjDefNdJo8DFV",
  "key31": "2FDHeEL6qqF2ra5E1xwFDYfnoroFqCAJHxkFWkCGEqJb7MPcGAzcVJsfnzdEZzn9WonSA3dFufKaeZAvKEHoAdoE",
  "key32": "zJaZY6AAidudAAk92KiRzXyjFEnjQzEW81zbyd9H75y4LmJT8pXAt3CEWKELwzuW3kjzGvATwFiKH7DaKq2SJK7",
  "key33": "5VNB2rk6ho5v1mwpcH6cciW8WL4bJBa4NRPkYMYuDcd7oRKA8iykFwqas6NTV1x5H7kW7FBf76YUgdxo1bsAhdZf"
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
