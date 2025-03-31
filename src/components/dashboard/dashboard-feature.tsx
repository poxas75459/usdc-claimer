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
    "3C1L94AKjFyBSSx4gz1xkRBDg6pGeZxt1cmfFrGcDoyMQ1c3wPYif1wPDTfsNeD9d9aHwFMT7xjnn4c8bUR5rnmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9zDvv81HXgxgPyVnocYtTmvMx9ZN3UJuvUavUDqpFEjpVKftntbjWW1dr2SakaHfNVmyEGGqbC1RYmw6nAmLCc",
  "key1": "48vmUJMoUy4JfX2Pd7VzTLwhbKzJZBCbnPB881B2URqusb9Ltkfk2axVqQvEx1RaYy5dMGw694WNPowAdwPyjL8R",
  "key2": "fxhsixHh4sxrGzPJc2cdCUE8tJtYTcEtWdGLGiAqsJ68AE73YmyLuThgerqPmJezeDXD683AQ2UbsUnA1jNEUQE",
  "key3": "k4AURxK1qtY3Rjpom2upsRmP5hKeps6JnZhAviwBAztHGCjiGAbyfDGPn445J9dTyiyy3S1a7MuaVHiETJBCkVP",
  "key4": "3eMdYMB6atcR8va7Y98qJmaoU73UezfJ8nxNWZNSvcA8RAxwJNzDaBp1ygf4ZrmaVcDJ1Px1qCfkwqfC5h9nfGSn",
  "key5": "57awZ8FXihLx12RRiQfVKENnoDepYP8k6EpZ67Y7yAYs4SbPY19kKGFPSwKoddxC9uqNHqKp2DagtuiaauRfxCAz",
  "key6": "635TZYvJ6Yf9fJupHfk3rQS1CoGVwPwDcaKcfAGmm6gPEFHwNoS1VaH7h9ziLpSonrePRGCYux4WgiUwuVw11DjZ",
  "key7": "2dR754WtwBvdmd9K5549GmymWFe3DHvp7xUou5dha2WsKfrr7UpmtCb76JCBZWbHrUJxQZ8Hg4vhQ3GkYTkzfHQK",
  "key8": "2WwMpDrm2sWLnaAfX4vMQQwkrH8bNgejZk2kmfjD8sv1N6ZWydQVU8Bf5VAxH5m7NmJC98hgMeGmPR7SCcyKy1Uj",
  "key9": "2ytQhnJvMQ8kJK37BaPU4ENCbCrgj5Fis3bVu33b1dxADHkPNuypxxHMiYuSPnyjhoKzAw3zAcyTFeMwEhkWqjYi",
  "key10": "chPHGJqgMhdnYPSubvDFAe13bTFq31iMidBPQhyiy7HD41Rds1sVzNsFqVj5pwYbhevvtfM7birgDP7fFHK3Wex",
  "key11": "qBdM2a5ef6hyz2uboBV3wpQHrDfUAefCDQNYSTwt7g4LpUiXj7M5eMgZbGhEjTzF8iGWpuDBWBnvzFtYuzwWgnF",
  "key12": "3a3N9U8GPpw5AmKhYb5uQ4p6L9Vt8Q2dvx4ftYvY6qWthKqS8CPQLfhrmozPhZ8s3mzj8kdmUmsRA41V3LTW3jHh",
  "key13": "5ZT2aSh9md5LMq2P9DDTGakgYS5sP7Lw4WbrK4xeJJCprjVQ5eFpQivZZAdFqaLDaFdjLMDWg7QuouEJC97AScU",
  "key14": "2TsW1bdzVUsXT8kCZ8e3Awb2nsaR2hTWzNvRqnvF989QrakLB6mefGt7GiCDBdE7Sa6JDGdj7wNxmAe1rXQ52f2e",
  "key15": "3MpBNFJp5uMKjaWjjMLsL9epuoCwnb7BdEppw35mcgPe2Xrhk1gSuGSd9wAQxXXT5wiEJBeCfFYhx8m6sXgQRDm7",
  "key16": "2dLELBfbm9PhQCc1Y82FPK9vTTQMxSBTFQgnFXs7ZvRq6dxkfNeAusfyHLP7DTie1aDHrQwC9XZVpK1DNfayMkbt",
  "key17": "3kBAivxr1Gojrno5rdcMTLbvKcKCWh4JHSJXrEduUCgqcWjRyRyA4QTvjkJa1FsJSehiuaN67peGh4DusMZ8Rhhs",
  "key18": "2QAPQtXQtMHKiWwsqvia8Q1bHLQBDeB43gUa28rH4kEGoNjDX2XDXBzq4vAD6ZdRcG59SHrXUGvwBwRquMVYMoCD",
  "key19": "z1HuhF75pN5j117oxUsWcLRPzZqsf9e438wXWmYW3HmJB3CrxmnAfNhWTPnoEa5X3DNnzGKyDEw6QuanT9qoKpk",
  "key20": "3tR782AwhZtJnjq1a2qEMjM9RjdRiHEUCK3zeZ71x4KYtkq3J6RMswruJGjnvjcroqyytAZXhakp1yio28Jq3LVH",
  "key21": "4bnMFFTvVNUxpaa9d6uETMS3yFQMxgKZMfejSx9kB2V4rZSfajF76b2X9sBcuNW8rzRdXKUvvRGZVWwEhhjcyrMx",
  "key22": "49VxL5eWunPjETY75iW7tXQktVXSkrakanXzFnogivZtLcrvZ1KqbJruvkpDFSepMe4tSowTpwyFsCXoyBg9ak8m",
  "key23": "62556oc27kQkRz5uEPsjMA8XiHuaMziHe36vj4mj8uqdAMkDmhyH5oXHtHhyHCTcGZaf8GWFnuyK61LCDsCGEZ8x",
  "key24": "CgXVAxNuMiuuZDxZHenUv4JzEqZeKGvWm7m5gsdJ15edLHxuWigqjyWrnCCiYbpDLYrCsrYZ4JEQqS2fqtuDmki"
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
