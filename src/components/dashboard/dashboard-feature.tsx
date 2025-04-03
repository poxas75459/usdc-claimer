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
    "4HJS1B67SsKds48PGkvcLCXG6bHXNwt5yNcvCDfeUso1vjWnyNys7rWx5eNrdPcvR8icy32wSfsACK9XzGK6aeX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHfEpefQZCKWs54BRTygxjF5xzD9o4nxXpjD7QpbJDAEPafC7bsDXEg9kY1Ywucr32JqqnpY7yGtvDLvTxt69qS",
  "key1": "1qUK6dxUzoisWEAEn3D1P2Qf5KpN7M1V4JcYVWb11TPvC8nReCmK8f55NtPp1UvnViBkdfCAXNdopQJSeoHNTWo",
  "key2": "3JkEwaAFAbHmvh6bnSWBQ77pKuDmCr4wCgHd6LMecZ4QqaeXyGf4us4CebavNixue2VA2VxCFLV6CdFJwz1MDAqb",
  "key3": "587aSzUWxE8W9nx42Ai6WL1Xic3VEH1PJ1yaT8X7xnNAn57pE2c7H2q6ZcffbG1SUZkUZJBkQzqccUz78VLX5UQw",
  "key4": "44xwz6C3hSUsgutPyAJALwY74Zz21v9DjqzZ5br7rKmsHWiDazU6EhntBgCsGimA9NRx6hKHgJXqhxRuzfzFyUEi",
  "key5": "3ssi955wRTovwdqSQEJ253tmceFHjBzMKLoSfKU8V6eJtZmceyC1MLdC8eitqifN8TWqiYw6hUEroyKRoGj9L1zM",
  "key6": "2hpCZb39VTWBqJzPoKH9Ruo3nQV2aJkPPK3pKhfcy2d4Fw4yS8ih826wUFhaCWYZtvc7Ze1wrVNjQE1M4bV2K9PC",
  "key7": "4LzMxpUcwoUtg8tABU8DhcVaJc4fhCFAwv9x66XfReEhFK96Zb6d53dUqwy3Tf6ZVY7LpjQ2qjEQHPKdNMVSjzDr",
  "key8": "4N95qK3uTVNPmqSCdSnGEnHm1uDa1AHq9GSifWq85KFG3xZ72yLWWw1zbi7gD4qkR9ApepZmN62WFjrjwDyBmXQq",
  "key9": "HQQPW1xVjkaaRGmqS6dE7tyCGi3pKZdUZRFPWAGDTcmVGdfnqJUbx5JXnMFQqwKKr5ZviMigDwBVSCNdqNYWnwZ",
  "key10": "3tPK5g9VJiF1ircr3MiHr5HwEdsQSs1upDwgZwAVnXkcEmXAnyamqB3Bq2YP6gwE7PWupdyGqVuDsDz2U4zSnYaW",
  "key11": "485s5qev8hF3iqoEgzARP6CpttzqNn9DQwuRE4d9vbN5na5TufJvgjDEFDCqSC5X3TJzwN7iFz7gxnqZLxnMRf8t",
  "key12": "2H7mKM6RzhLB4opERLnc8i7d95L3qnfhUaDjMHkyLC3CUqoz8NfpvnRNtdZuz9V3fMJeAQV2P8zErmShCZhAdWCm",
  "key13": "4mtarr22iHpUC5hqutvcqSkdvvC98bGXYfJmdTp3cg5MV6tz44ZgNGgCwxSVadh6YimzUGnV3DfeqqMp1g2iXd8L",
  "key14": "21ffFUkxsM9Vu9ewdV9s6vkZRKBCSRm5bHkoWLGKmsvZEihRez3bEJ9dsoyktFqmS5XKGM5tNLZ9b7hxYbHTMyyX",
  "key15": "2L67JDfx89hfMHaUNpQmg9tQX34CWo9h5NWZMgpurcYX325TApvn8St4wsADu5cfysPiv9Nj7gcfCjd3Kir1rJPY",
  "key16": "uNcMiSLa2AQXDJSfnPSgQESJ98PryGAoxTsm2wvgS9uFMUXE6vU45DyPo6nWiNYGbGAd3WqFz11KHZZ2cKbvdN1",
  "key17": "ysNWjcee7vS6sK6EwKszVqAo3dBWGN3pR81GwdvDnigSfwwnk7x9ma8aWTL69BaEEtiAEfq8tno2TSo9jcdksiJ",
  "key18": "4vgBjGm6ZfJSF3yXX3aKWL5ukoYk5cA2R75GeG3gmkYuoY2NaML22ciqWRUwcYJnzqfF1SDLuDkzyAx2ah9svojb",
  "key19": "3YYWXPrRFFYmXsh4qNPBJE94DZYMTV1WB25zaHF4ZDA3dWE1JDaL7ZcCSpWaXjoA8AEofwb29rE97LM3H6AGjumz",
  "key20": "2AbN9KLpjbEhEr6gVCrLBgJxS6CN8MFZTE5wVij8T4YQLuzXofNhvvYMLm7jZEYRdYQbQzyCBMPFFWwFjhngmj9N",
  "key21": "3cqjUiKKahzHecug3PApwKD9SaMxff9FrbKpsHdDKnCPgKrF275nqw3SCmUp7fVx3JXe1RNCswD7TkzUNKsFrGcU",
  "key22": "2w9v9UHVKvsAWUSQwFKNuNTAJMGaSMXHHG1urkgJVoHg3szGAU6iwNznmEmGQeVaQasQf7253ZZdZE8Gr3iNW9ng",
  "key23": "3beyW79efrZxyNh7wu8qUDGaeiZVCHeLjA7PHHBBEAaT6cw9VEc3Tzabc5eYR5Te1Wki7FrzqUEkwzX7FqSnrX9b",
  "key24": "3yY5AgvBFEmtGLrZS1UcSm4Hw3yLDrFwvx4L1fd4uwctF6y93e6z49agNy55N5Rr25WUiY9VDUd68tBWFwc8XWdW"
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
