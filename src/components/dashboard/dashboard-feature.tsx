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
    "3QazABc8VFjkPwZaEh7cLgz5yaAbdVxH8XkwQnQrVgju8ZHPdXz2N8ymDoQVoV6NqxJqAXa4cT8GKnT5KaH65cc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eihVhbXEt5VVAqSt9YLpsjdT1apE3QNcAvzrLxmjDiJ4q6m27RohwLoTDkyEnkja3GrfU6rdbwstAWXKrMshc3h",
  "key1": "5bafmBHuojaFRZTE6kQhg393kbuoTBRiPcZbGgn1yKeFPVPgws84EePrpZmdeEDBRbCRwBnFrGncCFHsiZFr8y27",
  "key2": "2kkXi787iz8m6gidrhDV2yzSHsux1cURFWVyzgmqsfk5hiuQLVANsqJuYddCw1sz1JZgB1F5LkroVAKjAMb5reDx",
  "key3": "wnzbiJp1BsmdREPuwubea9ZigDmBo5ropBLS466nyvm9W8hCkGrusp9Hpypa351hknPYoZmD6oiP6EUzFps3xrm",
  "key4": "m8wQ9XMCQHJtLzePAUErmUmLYFpRhzttHR8mc31FQ8Vqa98YeEy82eKKLyJWKHQC65Tq4vWmmTiAB6zE4FaDkoy",
  "key5": "5um1QdVG3qEYakP9j9925MVoY4b71y1Tkt8RPQWQN5FWsWi5KJJ3rFvdrssdGMJd4y1QHzt4QFNjaLRbwu9dipG5",
  "key6": "5STxVyr1Hw8g1RvcetuAGftXjgX6NdkowKRhkntKv24TW5FL3KCouuVxzvLfyEga5VkUwpL2KdVkCpFsZ2K1X83o",
  "key7": "65bufQjTNjJwsE3CEwReY6YKWYtB57UFZwxUqcB3tHMnQF6pZBYV6ho4tfa7GS2Mzm4SEfJwFJJELp47hgQbwFfr",
  "key8": "3TdePRvC4hdcF8CWu9ogsgyH3BhiGBTjqQ4kXRGb1S1EpionXTmS6DU73sxX72np8AVZLddvwMSGQUUDsUVNYPNu",
  "key9": "3W7nCCcD5PQtRmtoWjgXAfsqJaadnzJUJhnLF6e51XRk6jcX7X22xsDTXkJtLKd36ZPdM58Ys9pLqLvrDcrSNnaY",
  "key10": "2zs3sVtjLCTqHh5TYyo1nfzGZdgo3JCPQysxs4rVWK3VfiTPxuWUEQg3riGfHsPsMUNoqCrEmHLStGuWZ8oY2pWy",
  "key11": "3Q1ZU7YVMXahnFsQNmMhq5vtgD6tqz6RjxKBQ4mE7hNEdpFTGRUgVWQcJyUWckcWLoNfdjd7fztsV85GETnbnfr5",
  "key12": "zuxu7vdHYN4fhe72EcC1CzEcVpBkvpjdpaay44JARxtXNTyGpQsVvmhiqBoNPEcJNWVZ4M9mW1msUbFbByFGx3Y",
  "key13": "3mMLCZ36xM8C85LYBh5NGrL7JuDodzGniS6REvKH33FDjWofP16UHrpQy1YiHzY2qse6bRnsg9z2QPtBaszQF6jm",
  "key14": "4y8pRmaZsmJPaCX8SHrnikL6zofMVwpqTQJsnJeYSrxZpgMqYnyDjGUo3s4Y3Y2utXNPQdJy2CSV3P3SNM2osQNT",
  "key15": "4g7rczWzVk7vdpXUMLkZeTbSaT6MktCQBBTD92LPKcv1DfodeKr3gLhKsm8n6iMgEmyH3isNQkaZztJ1opwpA8MY",
  "key16": "2rrgvTvPCdxn79mxS16XVZrw1dMs1o2j693hSQKRztmVZzt3yP1iEqqNiS1nMyNspm3SdQAieE1NKyKgXyFvLA5s",
  "key17": "5DdefMPVWcyEHXX4pG4rMMgFGmMcxn2Mdqp7m25K2WPR86W3dGusKLM8MGHnP2z61Bzhf6vGPxWzNchCCumB5DTL",
  "key18": "5v5M6wpAsS3xmJVsTFQBEyUSYTXmYurpa6U19NRHyuvAny467nD5EmyqdMjMWraahXWqiBp3zTjghj115o8eewaY",
  "key19": "4SS48W7JDC9p8EwwHGSk3aKqiWwNktdHR8vuLR6zhxqH9cYtUn6eVEqG5Y1t7bMMmzAmVafGJXiGiif7gws59Ejg",
  "key20": "5jZ4aReTUp8GbnxWkuBc6g1cxJ3mkdoNoUUq6kTq4ekLWvxXSCUvM6PRPpJHG47cboPemDMiSCPRvYAFmAQhHqf5",
  "key21": "24p2DUCRbn25bfssNrpnG1mpmCUEVWbg7K7zG2PA3LuV41ausCNYN23XDHKd31SeNjW68LSzBFQUu27H6TYpmk9A",
  "key22": "3bWHdozxcAMtuYjW2y6m6q36yooEJCagP54GXhfRtoaAHn8fY1bLrm8GjJBwfdFGXULoiriWxcdy1cf5GymneP8K",
  "key23": "4rEBcAuGTDAAXbc7qeoCu5YqMw9zMYpZgh5cZZyjXMhWXCSicaegcqERsBUSkgG9GuFcC1rxyitEewSLToZq4QaM",
  "key24": "4ucgZP7GQBqLpyJEgxmweyGZuD6LMfFKs6z6gCzK5j1nWqama7ydnBDfyseua3C44RbHv9MSvsb99Jgp5MXTVVwP",
  "key25": "5i9ENXgMiQt4Qvc5KRRXcrgL7ffEzuAHA2nTjtiRomUe5FcuD1v2d74hkfW2uR4ry97a4VwyJmfe7EQ3vkUiYgtZ",
  "key26": "8zonN9obNRfSRu7ho61JxnbUf3o1VF6gmPcvGZ2aEoBVBa1WBxj35XhLtwME5GVtsSBoYAozSogSQb7zZbSJ8XA",
  "key27": "3KXNfWsLySLv4wsKzxktZgPVEGrGYkFmNz4PyDF878Mxv5sv8FFe5gVBVDhjY5ZqbHrDckBGPuJW14thcotvf9YS"
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
