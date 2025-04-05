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
    "4e3DNZXCnTg8FCM7EtYU4W1c2mAMAyKGNUu22YYdaKCz87dDTjLyKErVZkVFA5ZAdywigVcSbDWr3ZJrMNmwwujq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FqrCdT81fUJ7cGGBo7hE4dZob2VbFGyDx9CW49LdsJDp7VJciPAEqWQVaeYSv7ygJjRtEDSDYe7CF3nph5VbEGc",
  "key1": "2mNgBFQ262CcrZcKNbDuUjjVsnVqJEiUpmtWNPNTbque1M5bGSN99pwnFpn2vjHHjYaEChBF1bRD6bkCJne15duo",
  "key2": "2xwWA4wor17xGSwj85cjz99i7PxcX6Ja8huSuMhE2QSJ3izmLW2pRWiRy5FdpjnitK394G4gx5nZtoeonaPGCjAj",
  "key3": "3uuft7c2c7wczvHLyZQL86Hh3Xmp8o5kHzDXj85zXLb3AwQybGYBDznqhnj6h69wNjASUguMhsATbVJoUt5EiTLq",
  "key4": "4BBs9Kj5j8gYcDWZtTrifPJrmEZ6qAzFjRMVjBz9nReGoN15jU6T3EMA5cS8eqpsNUnxmZHh14yif4scUmDn4mjh",
  "key5": "MhZHecVfKezHjkgcnncytysCXX3H5h1ZidNecfxNopohfRGHKEVQuQd3pE22BDFcChYScpnNirQBMkUX7r2L6pb",
  "key6": "4GxXn9MYtwNLNj1Xw8htqdN2FnhzyYEEfHr5vVuGpKqkbYQA3n2uk6hMn932ydyEK5p5GfuBLSpH69oKDGEsFgi3",
  "key7": "yDbsMDdk1CwAEpfcX9YWJ9JH7zGAcMQ4adTh2aZ1wnfmT13KpifHSCJ5ajWs6onyNcPUow74mryk4YPSW1wWtk7",
  "key8": "5Labn8mNSobsLZocL8KQbou1Z8LGExze66TBKy4azW48qgGqeN2DGKhREYngXWsgASkwdJz8EMmQUyxf9rEcXfpM",
  "key9": "49xb68vW3rmBh59TF8H8zhyxQFMnexBwoHJaVuqry48T7TiW1eBhVePnN8Dxs3HHUfdPaxYFEeJXQLcQgK5hWQNJ",
  "key10": "k2E5DuTFQyTjp8Fzd4Q6CxVDM788rU1CXSWfuxpbQysuSQZDR42JJ4uYVyHawv7r52FDSJz8CVGeEJeCF73Zich",
  "key11": "2XA7Mi4tWqPbLRPuG8P8Qrqu56yJZP3GUyJDkDEhiRoMhzP2HTXpdwAmj1M9nU1TYVTnQuaSCVG3z74FxFBbAW6Q",
  "key12": "4EBXkQs1wRCowajNwmCfR1QKeKa46Lu9wZ8RVRpnDdDnkjpjtgJe9qdEiH1kjJ18WCFNmr4u3276tpaQ5zZnF38Y",
  "key13": "4XiEijRGu7A4EsWTmJ6Yt8H1EMySKxrJKaSoCR9ErEV6Gpo3aaPBJbdbRa9sXcwLS9gbkQMhahtYkas32F8phfHd",
  "key14": "5JP6fbdAZQxANjPPHd2PnLxRVpriPqJM64EsqoFD7wC17SjV2qfMGpR6etGKvFcBwu3otU6EFyVUCoYuEeXj2mAT",
  "key15": "2RpLbBMDjL8R4ny66t6iX14WapN42igpzv1c53aeaC81MoHdKmAYPCHAMFpYnfweDWwnqCZv4cgv9C3A6B6nLmDY",
  "key16": "4x9V9whKEDcn1w24TUMpaNe4VwiGhnnUJrQ5NzMjarQrmSpbHufjov6M6qR8UxQqZYnh3gjmA3zLANAep4k6p7Uh",
  "key17": "4qu3fREwBQvD3mc6ynNKdQajjsaJ4PQycRmdT5hUvAu4kDRdaHmtwHQ1muLVxPkDoqoS8fGYKwvcyuKpu5pKeSts",
  "key18": "4Atuw9Sv6Pf1c9QA7dSxQrhqYVqoJQ6a1ob2xcVT63HQLrFS7X3JpHWSQ6y3sEkTdyFY7DWf634pA6KJNt6YzPw3",
  "key19": "5VRjgXabU7oHTsSJiDJWLYEYUBZ4RKjoTEc3xfDNLd1rWZEE1o6AUXLh53HFCCVSTvHtFHfFRsghjnGQsR4zdp4y",
  "key20": "4DzUuFSoGrZBV3yCa89kjuWEoyjy7Hp7zkXKvhaaJvWR1CW6mu9DjBFyu1v42ri47RYGQjELvYktcveUMSSnggXh",
  "key21": "4jLrZnSn1ZLvSA4XNUTJPXEnuuhhEZhkUEx4bVF9NoUCCg3ttu2ujYR2sWAy6thxQVevYXJak9q5Ud7WMntpg75G",
  "key22": "3X1vRvgbtZNcvhMZHjbMFJvH9Szjtn2GAsAzQQUy2YDMHJNTsXxDMNEgi1Qo3i5PWodbwcfkg9Bdx73gtb8d24Pj",
  "key23": "5SLJzRMnmBLKvLjMZqqBvuV49HT7BNWz3UxtUu7v54DARtFXM15tCy5CRNoc3uK2Gs9a1p9xMy2qhvLmizJzseBf",
  "key24": "5aiLCwMnzVpRgARxVKDdESB2RswXm4tdKG4aBpzZLzujqaXiRUJmGRy63pUL82X9iFAkbgdHWTftN2z5U5XrvCkk",
  "key25": "3ZducLsG8RkEp2Ar7ij5pH9XFBAhidbcdHZB4UiXc6vXFvUUDKiyj95wfgqutCfrYmcg5e4EobaMGjfTYBmXJPc8",
  "key26": "HajyiCY2e7ZXqPC6XMJKmYnprAVDVhFqwyrLRm5wnK1aWHH3r2dhwErx9fCayNHweTAXyfS3dAb2HKWn7spBSbL"
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
