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
    "4ZvVrGyfBFAZFndF441uiytChcAuRr7GV6CbiG6WDrx1Kajnz5zwsbee6qVH14Ra4EBzbZYgti83mVuiENtpgdM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C7zNJwaLzJSqHQuTgLQ3GPy2vTFN3n1BMBbSp9RksWbeQXs8igGXAq7rzCnLYFYyYFnUqLNHNR2kExijdPAoTas",
  "key1": "4dSWj2agJNfYzuEmHCrRVVkkccxDhwd9wD9d4KLMgoD1RKcc4oDohuih81WJRzrgtUjumwiWnp8yK8HMYauVyfF9",
  "key2": "5cvei9YxyGJz5bkG83ecFbR6oKdq6v3QBmAVm3MdtZqC6cn9r7v29xZVwWVJjyLp1Bubmu6esaeUupMvmz7XcNbS",
  "key3": "2unRrw9EEV3X4ppNXBKCgAqyT7eQ4rpPjxTTLt2asCFgSiAZPUMuw2uwuW7z1yeF8KX67K3jddEWUE8du3tHdwd4",
  "key4": "3wKub6gSiipRcSKBR1xb2k5GWUe3YayxaJ8Yvt2obDvRQXj19gXNSyDCs6bcJmcm48uqz5orR1jcJ3ky47ca8pZj",
  "key5": "3GKNP5g2pkf3JSBc7MuCNjhBV1RZPKxCqb71waTZnSNrBtKQ8VAVqNnrScaX5YaYVzyhT7jWRdvRrVD21otX6ThF",
  "key6": "2coG3Ug1S7831oEEdHvqMwqpeHkvYxZLH6GiTL7NMCSXw9kw2nN7stM68dfZzEFCUiG6QfiGTXTakXtpoUK8ZXSy",
  "key7": "3WyJpbmZqCiueEhh4uxuBE8aLgrWSGtUdeF8rcCBDeYzBVWf5o5qtyPhaeNsJEog35dPeF7uhjHarxGBGTMQtk6t",
  "key8": "4uAxQ88z3qQPjWZkNv3dsaLJsioYboXs6GoaNAzWYSUwF9dDUmg2JDFMLLBA55Xwme7kDmccPQcvguL8R8kHGNtP",
  "key9": "673mc7W95ZwnrLxw2EEiFGUtp8AZQhVt6yX4tMey2mioQMSu4FD2aFqrBFHqHZJ3nnX6aBdt32PX4wZxzE6krRBp",
  "key10": "TetYueQMN44s1Yh5pTF7R8pnbXG5Tk8SpeEcQReFhVECDSWVtUCc6Ay8vHRgsKubWMw26CgJtoxno5z18bn4Bhg",
  "key11": "29HaiEsJnvSuWAzZWMUvFyHXzmDaxVX4xZqchE22vc6VzTkuDm7SUDRfxKwSz26QhBYFqXctVk2CnaPdU9hhXU9S",
  "key12": "4VcWzDjLB1Wig5JSaz1mbsMtEvepu1gJspA9gcjSxYTkm3QYDakA6XGNJXKwEB7c1GoscFQRPFQziAtx6h3LMBdG",
  "key13": "41RfFrBEh7mHGf3BicNyTvLh9Q72NPaPymGk4xo6pntmP4f8tXuDm5wvEo4Ujq6xBhMEs4BJoRALxcgJMHxe9Rgg",
  "key14": "4zC59ecoWb9qsqQ2gxXcoWzxnFp7PPWSLAqtZQqKAL3tcRsGmPnsbQ11GtkMgdr3xj8Ta2DT8kpSqD4MuDxVL81z",
  "key15": "4iXi7f15hACT4V8mc1YFUYUd89TNVvN5onAPveXM8KtFQDgauj8oHbt5v5E1VwhKSeiDnqu97AoY576SnD5QYTdW",
  "key16": "4WgtBsuWrQ5KDhhDkCFMRhuTZXXKSXQhZTJgVCh13KkQ1GR91chLp153vsHHC3jtwJ3R3B2Du6SxcQg45DVckFCy",
  "key17": "yS4CP1koKxJccC3tdLba6Ez6w1nghZphdYAh4E1RrMkh8UqaegUXLrc1wwcFPMXHBPb8MCBfHrgxNN3EPKR5We8",
  "key18": "3DR3kubaruHkEMKWxB1KSUGyt8YRjQhKJnM3CbRSBQVPiyS73NFsJRur73LyTc6WvxYi9sHRFwkLQEpyQWHwrMoi",
  "key19": "6x35JbJj6yVMia6U6YkkKbq3Pbd7UVpCmBbMHtjvm2rpz9gu1UJKPGx7xh8B6Ta1UKXuQP3f335QgcTVmZheec6",
  "key20": "3GLf1dYyevon1QPjkS4VCQMN5hST2wCQkL469vc9tidD31cbtH94sxf9RBnsVntBwBCUFAg7FiDHxCAvwrYjNkMb",
  "key21": "5XqvPYGrZGc5GJW7BYQyiChkBpkpr5Rdg9ThHtUTwcMgFTeEzomUUag1weMcFZLL7s4PSZGV1nExQh4hCJZxdxJ6",
  "key22": "5J6JTVeGYNiCTb6pRnwuR2XwHz3Q2H4uaK4n3XqXySAEKNPfWo8VRQATnKZK5kEiSDLMVJS3bvbEKye7wJtcMqGn",
  "key23": "vgZwYj8rdam1MRpPbB21fLpyoMdKfTmhVkrayK9NDQ33cgtYuTz5Qr96YqiECvJ81acu74UGsdM78Uab64pb5vE",
  "key24": "3NuKKifJmgSnJqLU8iqf9AUDrR8NaYHFEp2jBuMVDkxKH1bj47hpp7JGXnHhvokSNyJE251aPSieegvDazC7eBzP",
  "key25": "2QxpXJvHGat7HmWuycDZUZ1CMfDJv5kuPjaW93zLePfRhJudzC6pnQ8X6Za5zP5c7A77VqQn5BwKaqePRvkCJeNM"
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
