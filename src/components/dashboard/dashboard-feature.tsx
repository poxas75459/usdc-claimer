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
    "62hmJLcgrXCaTV7NFurvimwTMfgEZ8PHVMnRNfvw23HtYp1hAmTHdh3GJJoPXKhx4oDFhhijoH1AMTp7SAHEVpVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFxoURFmQqDcwfR1THQAY7DRpoAyMYpaj6RK91f58BQ5xJpL4VE8J8wxEtxrMc3RTmhUqrrvzxg14TX7jXZtMTT",
  "key1": "GSpJ6kuiR6jCof66CfSmM9ccS1FSBEqimps6vt6RoxAasonSN67YDZQQVSoFcWTMpMBLiJEn5yJAPKfhb68qv3i",
  "key2": "3dJCUgzSPgUhAE1HwktSWq4s8WHAc5PocXAekUrzepHLnZ6nEfpZ8ARyQgr1K6xPRA9fWLKtarSJqGm4DLXq2zXN",
  "key3": "5kMArWivfDbB3UYbkaqU7s4YxxcbneNjSF9pqjehUWjwJ2TRDrPFJzTuxz6WF3VhrfbmjoJqGXGmR8mUNUHMDiTZ",
  "key4": "3EuRiyGn7RDpZWQyhok5pR32cnhGbmM6ctkqNuivinFrbtbkPpQvNmGVM1Dzt9eX8pQoyj7uWQevuJc734AUST83",
  "key5": "4huckpn888CfjmbaF2AmLhuoLEAPicttBcbmjJFYga94wPgbLPPHpuo693R3CjFJLbXU9Rkc1n4UgdF49f5YwnLq",
  "key6": "3M7FNEbNSLxSihyLfeNDhysNLpRWK4JpqEJ7HM7sBE6XztHZVP9c4KJ6qVrEnsWVaD7KtYdrSFRteDsGgRMex2Fs",
  "key7": "297Jg3J81zZDEr7HuPsUjvEQoQL5BMHZVJka7463ANZ6YTogws9kz9W79Bg9zZGHaVizNVoTtM3qKBcnyT6k5Cxs",
  "key8": "5DSEHmpN9JVLuzhB5Prd8gkV4GqZGkmTg5Uib7yysLz5HBmKzLZ184xeonE4NJTSzMaJo7ecp9yhXemU2SKReSg9",
  "key9": "3vpdjajrsxG4svN98wKsS1chtF25xtU5fMgY2rt3uhC7oaFYDAEXkdPVPvv88pjL2gisfQJ2x1oKoek6yKVLLsJc",
  "key10": "5Q1GbzW7iQ1TfEf7keYo9SerNs5oRcPfGJETMVxseSbvqZQJrjjiK7MquWxNA8fstcJqrmQin216HWYAxjBfkLwc",
  "key11": "38KjYXaQZNym6RwaEwrTZYzGPM45EDppPnGYF75NvCMm9MMedANEfmE162D8Cm4ZEv8gxbuMckBk7dPGJksETDqf",
  "key12": "HMBvmdQG4RTdj64QgEdwDLJHo4ndMWsqqJV7qHuF1ukVpQQo7rYgMfAYdYf6xktZghwEuzbYhvJtQY1uFSKEDGv",
  "key13": "432hWEAD86HFfYhPvzfj3qRDcFXAo1gNzdhFSAdQRcvx6tMQbv6HmfzdaaqVWVU3dgLYvgviLYHMPXHLMjkaHdso",
  "key14": "67h4udofcuKG3UwUCVQEARQCLTebJUjrpmFDnv5ksrH8SFejeRQufcXZZsL4Ykiy24bkY3VQKH9sbJGe6P44SBCK",
  "key15": "42e85dsB67RsbfLJJzFziafJuW7fJjnzAezJtWT2gt4YMnpZofRcqLxhVBLTvqdWro4w5J5CHQZa7mmfivK9cDB1",
  "key16": "2NgZnUEk81CEgKuNgxmbksPFJV6gCDgNYdcrXQg156wd2owQoEWbNWyKFZhkuw9C91pvMEXs2B8yBwBERxWJSWZ5",
  "key17": "27MzXt6ZTz5oQrbyAuD87uiT7aotPUZcpro6jfdLY9XdQ7t5cRTeWjZTT6x49BBks2Q5A9dCLn2ptTnf4mitgQM5",
  "key18": "3RhTUBTGfwWqZey2pYpeRPJvVzNecW4heE2oDCDZaLsXcQETTgjfEcVjfxoCeT5VrxA7xt72Hx9TisadhproyoGE",
  "key19": "23kxamTv5XzcSE8ZUkAdUTCB5EdVcSm9cgsG5pjWpipYSny5iuUPLqfgCS2GVx5CDimmNU9wH9iFGbudEio9L2zR",
  "key20": "4zjjEu5iHiPrApm8LYwEqbgz2c3dADSBAkmLGUBmiHx9pbPDXfaewfdZJLBAp7Q771CueTMSeugFZ4dFjsmd71qu",
  "key21": "58d7fy92rLMESF8GztHrSCWZq1gn1ARFPrtHu9Er7BtxhCfjUhPbkwvjN5dpYdpAKZYt8yFRSThdm9815Htj49ZK",
  "key22": "3UzeUS2Ewc1ZpzzkA4pGA1SWa7pg9mw19S5jQmRG4pTXZeLjCngtUNxQQMU6ZuPpWwBVSkAatZB1o9jG6HapGtm2",
  "key23": "41MbSUQumtX6iDXJNG416Do5oc22zF6aJ9ySearQYWPf4DFsQVeaTnxEicE86PDWzrXAtkqikbpYFEm6eouMEyKW",
  "key24": "5qSbufyxHwXnqj9r9DSCVYE5ytyQBoxid2o3XSGLa5hAcQYcP2TyHRZksUcGy2ZYE6N7zugfiqiNrEQm89Ew9Z98",
  "key25": "5G7Yz9wF4G1kf3GHetsKWxex4RCA92joPtxBds6kqn84CCEUn8LaWj9Kyr6XE28s9E7X9dWaj3dyE55GkCvJiHJ5",
  "key26": "2ozLYxaeELTzrAaNnnR9JSxT8ipN5K8MTrQq63pndekeeTdgqrTNzJxPm5xZHtWb4nkpKBYy2rNwZC4ZYtVzuWkZ"
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
