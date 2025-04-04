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
    "3kKMyZy5eYaPaJbcJoEZthkMxS6HEH6iYPF4Eh5cC3UdZk3bdsuZntJicPHQWADHpMouRuaQnq8BCwhbsRJ6RL5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVsjN1QXtB3RmNdJppPKDFmtbxMJP3jqYNw3ono9ttbidiP1SoaDM18JuWUrPbvURi4NepCiDhNrY8wcwMYzF9M",
  "key1": "c8KFKd5VEVZaz9oETT7oT5PdyroEVSzxAgtSBpYDHPXi79iaqoXzfT8FY4tqeAdjbXQxVC5uVmFSuRpiLneM8ai",
  "key2": "3onCewLqAtAzZm1qwSmggAadbCnyV2wzcNdFtF1jRGVQNRL8ivxo6ofHzQLrdD95crqMTRApRpYJHM4JMLihQk4k",
  "key3": "4htnd2u2RrKtAwv9xYT4TajepK7nN43Nyt7eAi2SLJwgWxSBdkYrco8jkSeJQ3EQvKehJXZrsY8q5cMsAaYmjMHs",
  "key4": "DwgBMsMSHKT2bn2KEYx5movq7DP2mYsUvQaeBd6hAKnj931wAUGbpu4Y59mdDZZSAUtXSJug3Jm1wTAZVwcXRQ6",
  "key5": "2wXYvhYg4uSbvTduaXMjrGopqtNaUP6EsatxQ1mjaeRQg3hKDnssJghTYopkUHRENJAKbZnkhAAJTk5zkqSaKKwv",
  "key6": "67WRGjRgggVzT4jaEB9ueVFSeeRee24yUv6zrGaHaLpQXi74ALvam4Jf53WzQNH3jQgZ9mcv9btienfXEZy4fkeV",
  "key7": "48ee2tZpJ4GmLukGDyvmPjNqaXDYWAigy8LTDXsatdE26dyV2R3ihNdx2Kbv6ec3xMpXQNVReye6spxnWcGdjecX",
  "key8": "2dPnKABWGSmCpUtAF75CLg6c9dDeT1jRXWzj4UW2HKLPyHKGY6cPT4NHxkGT529KzQo36ay8xixfQGDRQydJDyUq",
  "key9": "5CAQ4iXSUEvXJPNu8YjL35xjdy9WzU339ZKz4NX1thnUEqEGoNjWtjtgi9RYKr48JuTH7t6ZP9hFr3AVNZtoMYkS",
  "key10": "4HKbT6F4MoGkU5JHgLPmozLof8wvKf1bi7wRxXvJD1pcJX7aH3fEJshBX11Av6UM1uir8SVDNANoX9PaarnafM7G",
  "key11": "3AnbQYevUn8zD3KijXQ9WG7BWY67vsphuSMKrhWcy8bMQnD18mUsFjLyTeeZiBhdqEZiVJRTyx2PwqrgHLCcrfSr",
  "key12": "3nSaPVQFU4GTqUc9RSY7p5jXxQH6AaEFxtfaXjVsZhRyjC38daZT45UwzgUbFaqxWLPue43YQeRceQdc4Xs1WN93",
  "key13": "4eHBdYVHdgxGPRkWrgKBLPrBTCBKbggFDXVHBRGuGHfpZJJjBCRMK7BEWk6varvxnqB382bpKAykCRTq6LXGTML1",
  "key14": "2S2U2X64efA1mPvAq14fC9SMMWszwdUqug2Sjg4BEo1zt3HDUjw7Wo9cHiAHnJYtgcDxZAokmK37EkTmUEmT9gAK",
  "key15": "5eqQuchPWM4UZ6e3xstiowRLFryRDVHQJSeoPhrPhdnQKMG5rsrgiMkJnEwjxDKmiydVBix388xDzVBr6fdRuXj4",
  "key16": "4c1ua4got6zNwswSFHCWbn6ZjWiwLgF4ujENzoSsY7FYqth8udThrm78FyEy79M1nwskFpaRAnZSQR5HHKzEKcvh",
  "key17": "2bbTC92EUaLaPhhve97LmUELa9QnRwvzvqhxNc3eTSc5fDN4gpPRreFTA2URsKSVhjTgJPqm7gTaaiRUhozvNgbz",
  "key18": "4qAAEWNQPPJFqfHYjXSr9wT2nmpoDfAMPPdFZd65mxGJHXUmLAiost9LevTq9u1dsVztgeMudZtXihhrb1XjwzDq",
  "key19": "XjXn5NPBMAZoHZJyHhEy92abfyMboAu3zUdvdBYfzUGvP6pYDqrGrpCmGGchC5sEUKDr3HfPZbWDMBdRy5mMHR1",
  "key20": "DQW4Gfu3T6fy927Tw2XQGYiiCd7rwUY3RkbAR5NxP2tqRQ3sP8RRdVdeJBBQ5Uvhcbv5ZPr5o3YQACucHsRUakF",
  "key21": "3FADeAmajFCjmtV47Hj6eDx7mgZnAWqWqURuFiCziFUQ8B2oE1zSmUosshuHBTYbnstHhXzRNfEuiBDEpt8u8bzE",
  "key22": "3ABHKQPsLXnsftfXZH9vwZHe5E4XB3gqKDjmsrGpvHvzvYicmHmdZyqGEnfEB975UxxZbKYBGrQLUGXSssVdU8jm",
  "key23": "3QnEiPd9idqUCHS8gEAZRNmoZJNWbs2oM1CRPBRYaNaRvxWuBahLzi8D8Dnc7i7jaCm5iDcrxYghRWoPoAtxMtP8",
  "key24": "29zXeZ78Vx3iCmFLpECuFtYPivv59DaCmCxJA8TXrkwnxwsVQ2o8iCSSWoXdUNMtNAwhQy4LnyGjptVZvjXNHgir",
  "key25": "3iMSJWDuDpUAdqr4SwVNTDGu5jdjeesit5c9mBqcPPVbikDm33Agn457JitbEMVNFX9MxcmT5zXHCYATpskansj8",
  "key26": "2B2CyTGgC352n2P6FQoehmoipTaatXK9sPzHtXnPFxJngtJ418SXiDQpH12BwLRw8ZuYrb7ddRLCf2J8t8XXSWgD"
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
