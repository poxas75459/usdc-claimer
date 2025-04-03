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
    "29mVtAAgq2zUHaaeaNLHdkUvqrGLfa5CGTDfXRMtzjmnCLfXZBDzr3WsMx9qmCczTj56rDKYsn88F6ffwp7VXcuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjN8hgWkE5kMkNQLAz9pcPqdDW4vmwLRcYSfx1CHoWgfYTi4RYUG9dEkMhZ3rUKDq4vzLWoviTL47hw6L8hT5K4",
  "key1": "52TdU8gMAXBKcudzGAwXJrGV6Ni388N2cRFVLdmo9RBb7tv1cW1ibRX36JLTNTHR4FDTUe77xbjvx84XAyNBW8JV",
  "key2": "2NgVBA7myPkK6MdKvkF6VjtYyt9LJ4faPN1rWLHntf9sQ9yiAFTekuzQxUdWr4kxZaRCRYJfvesQyiYDQYiExvE9",
  "key3": "3kVyrYaTi1RJxUdyL6JiS4NyQfYkJU1bAdfqjoa6KVRAL4EuzHWfhWpN9QNyLMjccq8yimsqdjWa3GN58BpfUDrF",
  "key4": "4zN1sNpZtzHnKyxBGvgo7aP3UUnstd2DagaCi5gDrPkeoWVJB2Us729bxYPt1a9FWnyLnWQ4GcbP9x36ZbvBut82",
  "key5": "2DTm6a2pv8MFoYUGNLPCyMqtNwHULgvCaXfXS8UkWanhpAVhbkeyxL6EVfNypAwCuZvpeSMPnmYG6opapC1xac3P",
  "key6": "2kw7h8TV7mvDss5D1nM2P1vEs8x7Xh8Exvd1qafcWn2vsNZBTuuuhKaAfxQX6QweKP3LhyLXq45Xj8iGoqjhfgqE",
  "key7": "3HcbitQPkEbfB3kSCjSp5ZJLAZFTtUffGvtXPttFbtJkVZzhhEwB2MPpuQiPniJVMxuULtq4D4CzxeYZ6Uu5BnX",
  "key8": "UR9rXoi6R43ovbe1t6LPH46a9yfcM8mKEiYXDb1wrWxmD9jwjtjdM2gbxHYJzk1Yp4vLVjZpep1mpEVYkqJsDGN",
  "key9": "5Rwu7jaYLMYUmSXgGjoTnSNztCunxotSPUucUN19xP5CQKH4NRbKiY34DiEp3zeAmg6QTEQScVCeFkds3xw9siNt",
  "key10": "9WFUzYoW9mbL7syxxeYEPfe7jLqGC7avUci7YXZEJSmEDwDCPfrX6kPTVT5ycN2H6vwjM1zZVo9PgVtsHRnZhPJ",
  "key11": "5bE6E8YXyiNDyxpF5z6svdjRig24P64HMe365yTXUkFY1phPneSpTdNNsKYNojAFBJA2Pbgw79Ff3oHmmihtTrGx",
  "key12": "528JZu8xQjLt9BnwbgjgRfoSYWYy443zzCaYg1TdfmBnDVmTtP5ZFexiyjqZaYsXvcgRckjycMQe7CwFoQCVfmfY",
  "key13": "2vypLtswtaozWoHpk8W3Rz6YZXz6conHHCz65iipH1MUFqzUVPCkVnYXAFdBeYTrfX8A8D48ZnDxB9MWU74tk3L5",
  "key14": "5kb5auiTUD88R6XsfrAPoEFvNGstzA7N6C8fB3uaEVMfw8DiNT6p4M1j3LwqKWvUXzhwJivEMMt6f5fnDe85ELRF",
  "key15": "63fDPHEeHEF7t3agowsbCJhBLaEda4vGYDo8qp9hqweSHxFXmxVXWmz1a5ZuViiDeGTaZ4NsmqG9EKbVeksHSYv9",
  "key16": "3Y2qNk5r9ZNYznMk4gXH1BucXLzwDSAAcEGyuj3BnzRiW2i9uiqE23S5HANRa6FbVTS6VKGCrsMP2s4XtRmpcWLA",
  "key17": "5Y6dvtBz12ah7J964suapgsPNroXwb7Bd6s8ea9SbHTr8wjGDqu7icPbvEwbQnRPJhQjXUgSAEqqJWDQPcmnkQ3U",
  "key18": "2Cg346xHr98rTv7acjbL3Sh42H8dCXW2S2dhgZuA1SNt3ZNdTz5kgNcSiPk9qRLjhrApSYU8FR9sPkxNhjsBRK6h",
  "key19": "3x5na6Ccx1fKfNZExKJ6cMx6i3vjuXQ51cKGwnTRn6ybcdv5kRsQRRa4g4jFhpHoFpPnp3XELTfD6jNtMsUnHeSv",
  "key20": "KZTm3KYr2nRXpMikPApC7wM9NdEn6ihZVbUpg75aZmDsuy8g2hhqswUbTHgNyjdkT96us7dzfvsXhRFEUYg1YQn",
  "key21": "5xoeDHHckNLXhnJw3Hnqz1oGtsXAz1AZudnWT5zKhT8Bj6cwErnEK8kNKb73tzMwdDBkSKWwKJnQ5Y9yJjHsRkci",
  "key22": "aGyNUTriQV9CbVMLCcaRZJWq4uWh5v11f1iN8UFLfwx2YgBfms4nfxtxNAz1PFa9mgy4FR6vyeGAFiHPMWNcAwR",
  "key23": "3ZPs8x4adH5NMemvQwaFQD12P2iTTocGcaBPMnSFakN2RL3R4wYfhrEY1KfsTCmQz2uCBNPEHhjcCx4jyiRZPEDx",
  "key24": "2JkGqK1kr1fqfbGTJsfWUb4kMuGyCXJRJN6q5C7rj63ZnqPqw6ribFxVz6SJSy9ZWX6mwimi6a1LvDwgUNjkdy9S",
  "key25": "26niuzFF2NMLjv1GP1TYUH9mBsyRfPjaQB3AWh7ZCugKzmCcz1T6XQn2cDk2tDGBQqrED8ZzZYH15i9UHqhLDiDR",
  "key26": "dQbDTBF4CVFxqthLwWyox8CYg2LnYTtKY6cjLBxap2kdWJU4JACxomYC6XYzThxwoijX1pHbesuLM8nwQYtWYVo",
  "key27": "3cF3aM85dvUREV4YotgGfdQzKkNp9djTchGLG1UJamarjm9qagqxc4au53RLuP2RFN4VoSjtvNoTntSXFC7jyxj2",
  "key28": "5ZtUMjyZNTd5fvZBhX2rGWE4pwwpNgFGSHoui5tNP5wsHS2GACAFmGpVfyGFoJAmD6xbUDiVP3ngDrjxvGBKz3H",
  "key29": "46HxyjpKoGB8wjfdhvgX2FsKEK83642rjFTGGmGvaiV4isTfpkYVMpmqb5sQpuY2T94d7vqaqHfeNW9vF3xhE71k",
  "key30": "3mdvu5tNcG6ML6bzJTMLb9GaWSDkfH3k7TRfB6GAraPoU4rLoBcQq6HAvauVDSyJEfLKJXGyBfWdd7qmJ1NAgjzR",
  "key31": "4XWJmoHhB9RZQwx3pjCe5rwQ7YX2edcVA1rrctyeTf9u7JLnzqpcpjau2BqhdaiDy9YaV24dcBVC5CkAEH5c1RTf",
  "key32": "gjW5UE5xt36Beho5QNirdxXCzWy4tiHnbaeKHfXPAZbm5SDnwC71G3zPRJdQYjvsdTdT1N9VXsVqjER2nvp8V6P"
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
