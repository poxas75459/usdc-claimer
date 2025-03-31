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
    "33bcgunmVVkHcaqo4aaSDd7uGecRB8YSexuw8V8QCLJa9ypDxrd3nQnLhtc8JLoCrSMhkkAmxKpCTroZWwKvqU2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pK3YaZ7hhkSLwWz38mSruAyNhPz63maxAF8r6NXm3tYB67J1EJfF9F5dy9DLGQpXDChhZTCRhuanKroBJoeemA4",
  "key1": "34AHsh1SBZDivAqFuver5SzmHNnXjSY3xP1z1VYeRPSgV64bbvxp1zKNCGQmbXYHSjiEc1mQJnPMSf1DZYSoH9KY",
  "key2": "3VJ3BoYnMnZiui5yS9LKtJZurJTNom8YqtrihCguuiix7xqKV7mY1w21DQ2qFNuHsHeGdUsvGcZkhqdkUqHw8fHG",
  "key3": "3KxmafUJjaiBhbTyaUa12yfrHiwZ3iGCK8rpVvgDkuCnBQZTZdciGLXzHazcrVgNrFhDqpUDXZjn9g6QMbXJNVdJ",
  "key4": "So7LUnj7Y1YWbC4zApBduTGrNVGhRZX451ga1JY8GamoGfx4nNprqJSikYVdX38iYfyEV3pmZWrkoBNz4dL4Z3A",
  "key5": "4YwwwmuMREkdBQoMfnoipdRT4ieLrcyTf1ku5GJBYdyFe7PNRM1PErSN9RoDGUCyi9aLX3d2Z5fUg7u9FobXZrqd",
  "key6": "59QpTcZDin5keYJPm2SizKEfTGTKrJcACbGtHscDZdHd7JciG91hSLtaxZX4AyfRfHbgwKwvSPYtCxaTtXQ2tW7H",
  "key7": "4Q13bKU5mU4eCVqu6rd4ar15hj72hyeThmsPCDqgZ6RR5Hd2epiVpaBXGWy4baUEZ6gLMLbMLUxCDrHALSqV11eP",
  "key8": "oea6D5KEzs9W8ESDb4uprcHF6WHNejprb5hSH6bnQ1nUR7srA96WxpLu4XN4idxabvBDdHMLSokN6FDvnakAXE6",
  "key9": "3Aw1nup8WpftkF7qm4LTc9GX3Pmbupk8ZHvaheqiZVqekUEuELd9xRhFgaVx87XCXBgpLwAuuRqztjQnudp3FUAu",
  "key10": "5uMZPuvRxVCbm6DcUfKTHbSsdmSEqCcyeKBMXnNuh1MqrteZcYoxnMTfnVMC3baQideEAVYK5x9BoNFGuWiH2ziS",
  "key11": "2ffgMhhhtJh6KuvkNHcCjQjjzGm6bjcfRgMj4uWYcxnNHDHgpbBgGR8biak3Tg9kc1edAy7tbjx7QNVZs75TBWRA",
  "key12": "4N1iFGDxKU7Muad6cXmiGEadKEgy55J6wM65zaH6myjDMzGbWu2KaH1Psxb3NKKVHn4PFjqLecpm6jAWtYajtxDt",
  "key13": "SwFbzp2g9FYFbUx35BqSXqVNLiLQnTzkdGbBufRTK3Qp4feC7aN8Po5uTvuucAQYzbX6Nv9QpYGPQo5hv4cxYUr",
  "key14": "4AQj763uxWHNa4iumLpiGNuh59FpmMvVQnJ29nttGui3cTtHhnKWpnMHvy1tvAS1u9jRGN6a6GCb9p5ivFPJ6pPp",
  "key15": "5HKPnoXcZadYMNSb5d61j64PJ1t5VCCcSgJ36pRzA3kWph7C5LRmDx4tGi1EcDvd3ACR8fjS56782m3jCHhwNdEi",
  "key16": "4ZabjGgZBA6JUL5etPK3jSdAokAsUFn9FdPhkzLoyzxCnAiVaqeD5YES1DAVtmokpcAvF7a4aLG3C7kneE5KqsfX",
  "key17": "4BJVBeRN3TWTEBjraWSTp3FrV3iZenj4bq3FqBJDyAFCbqNkeBH8YeStanpXNiEepfrFwXJSAPbTX2BLYV2qjEBu",
  "key18": "29Rx2HpdcYVc7uWYVoSzgQP7wQkXqzdZqk9K3d9fB1aevuTLKThebEUKU4UGZX1VFrU84i4XQyFF4bHJ7pfuJu2w",
  "key19": "8VxQAQiuEWLahow31hbd7wjuVzua3DEhFGVzp5JSfgXjanoXcs2kqm3hq1t4xuTwC1phz7XfRG53rZLfABqw8Vy",
  "key20": "3qKeFFtoQWVmNKxenmy5XQVC5wLGqGruBBcZDdTBjwsbzH78FHqzUbcWcxjcYuTSyCHCYopG4Sdpj9ftMTDYPpcR",
  "key21": "i6hL5WzJWJq6Qa4s8vvWasqpMmVL3NZxq9VA58ywfj68u76NRTHSe72GExt9bWEYNfCouZ6kDacQtUTmxRtUVqC",
  "key22": "2WZTzPmT475Qm6iGiNtjN2WRJeGxt99k966yk9tmoo3VvBtfx7m4NsuNHTcmQgUt66zJ53JFFSppjb9CkXg5qtbB",
  "key23": "2PSLqkaZMSYdhXs22p1XYRM3kZFkmNAuKWRWpgtQVeKgknUY32ABYhhTCjbXru7uJPGAmrTVkyffgmKfbiayGxuu",
  "key24": "2cmVitGu7Mg836dNq7kHXFUvBBYA9FXDZtRp2fsZJqsRMdrFg1NhC4pTLFpaSdVWYbJy2SMXuHEh9W7LYhvGxDBa",
  "key25": "2FPvvvtAU4nC8UVA4TfGkyJgQcDBqnUZ9u3ZufHcrkF85anUe3UocmPzRqN88i5AqhGBLidxYpGZf6eayKT5Sdjf",
  "key26": "RtSZthieU9YfzirNcWMpu6e8H8xGnS2c5jvycAkgF2fk8edZmyDKfATkMw2KnP4couHUQAfYSH7xdMvMm2AynaK"
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
