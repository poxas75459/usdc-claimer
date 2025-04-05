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
    "4Bb9AJ7bhBUqgZggK1iQkjFRLc9aM8KyXds6MiPfauR3E4cYBqUCm3SujwM5Uk4TeJgWZwrhgTDAK18yFEjgVpjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMv36eBMfCxhPjqJqYEyK8b39CMhY3RPxBvCWnofyZWH9n7nMb7wpPZeGbY6Lnvt2Gs11d5GM7Wc8Yy3YJ2rTRD",
  "key1": "56fEDWQZR4DZy7dMZs8UgU3Em9DJHALT17X7EeVgBdmPJG4AmfHeCQ8Gi3KFtmVbvt4nK93oy3zWVGfjzSQT9veY",
  "key2": "3WuJTNbsq75AHWEAPmupVVVhfP2tdV7JCEbY2vR9LewpHAYBkqqiRzEti48UujebTwGYiwGT8sFm5BDKo4dV486T",
  "key3": "6TnfBVv8cjeip6LDSZEYrNVHKPgRUTDZgD9V6Uivjv9sJEPvS8uGzHTzvRSWCrQYds476abXQUTu3faNKdj8y2t",
  "key4": "5Fa3qDX9u7TaRXsHH4RrgBBTY5fwStJmF7DZ1RtyH6AFjDEiSRNpEBYDX3sGq78CWXw61JopptP62NDSygugbiwQ",
  "key5": "xnkXqf9YE6AcEPFR3eNc4J8K1P8sJiU6xyU8hLgXHUH5XpReRiPthfhTB1WzRTWEnKg8a23KwasGeD4hBBk7SVj",
  "key6": "4kzpyxHDnXfbr4bqV3hPegbgWkXdAxKKrvTgZRbVmwKG6dehxtFUiVCCuvdRiN8nND7FoiyTarSZjwHkXaTB7moJ",
  "key7": "2LJ9UXtH11DAsPwyU9pcRYftJ9yYUTh9xuvmbSTNSPhXJWJ2xHzfidGC39UhbeCNYXAYAfjL2TWrJWqzuf2iWYi3",
  "key8": "rj3xAUfYx737oe2EuzRHgxoc6DEPHyJ3GkwKSx6cJHCSxXRL3Rn9mVdTmxqoy9Y7Lr3cs5bB3WbhLWRxYCAdCgD",
  "key9": "2e4AekwMAUHNMCRFjJWBmxrScdZTsDCgtNMz3gaE6MvGEYASz1L7eZwoSKMX6yMi7k1qi4eZGYxEb2UVsE5uVysD",
  "key10": "Wxrj8mttbTwLomUuudUkFqRYUtteGTFoFqARFnHxgpYPdWX4JXf1C79SQCc6nNBffT2UZsKf5GQMXuLmjK8Ynb2",
  "key11": "2P7Ttjae7fvGX9yg37ncAzUwMgZybiXPdWw4t3z5oMH9uYJHimcpYDE1TkRSF71Lv3RTarn2D5bWvbZMCYjygbgi",
  "key12": "34TurjCaRjGFS12qhnzf7wsnj383ek5zu4SmYhSfFRzzVxMiQq1nPR8NzEgtCPrMY6YwLd1aveV3WfeCFPYXgS5y",
  "key13": "i1pCWuR5NBEoJFFErri1DwtbZgE29RigC8o5QfSiphDLnSQNTyTpwQgqNAGpVpyrLenAbzsCcRQoCNDBKfyAm3V",
  "key14": "rvjerQpViUrmpCfwVfjo5nqd2zJeuaJzrk36hPv8XpNk4VKeJNXf46nC1dXQstQyLkv51VjThLvVVyj5hiTU3un",
  "key15": "KPnEGyXbhxnFbsYKjvg9B2BfgfK5QSNd5K2k4vyAMMzpqcn8YLCagXNxUDvTCJLQTk2JKBhLMmWqUvFnxtZkDT9",
  "key16": "L5V1N9HADe1YMYg8qtSVkT1oPFfDG7zARsCEqbMPrmaWiZaoKa5f9vCgCpYBUdgiWbrbTc2B6iZYSfnboKZMpSn",
  "key17": "5tch1Uq51dqeom13hiFHVFj38WuMJ2T1Muc9HyM8MichGwoh7MS1pN1z2Nr52AsWS1UAkdCeXWdauMXddRvB5HYF",
  "key18": "8k7ofdHkgegS431G2vq4jrymwf8Yo1yz3PuovrhWUUyWQ1xG8ADjkkRhvabSWZxM1pF8udXy5yoZdHzKcoJwqYt",
  "key19": "47tpKrRe28qtySHg16PvpLjKGbNfmDn4AXXCJQ5U7Ht1RHsKmhoYaPF9kA6uSL19K8puU8r8ZCmg6cqtvnVCcB6G",
  "key20": "4mqnUmM2MgfcC5yp8qrzANST3QpJAxpQkzXpBrvCui4LYNr3NJzjhUZpLy4MbGKGpjb5uMLtzxzvyXCb3aPzYsdb",
  "key21": "4GWkhPmmvz8Fnrxnjo3FRiTpbG5HmRc1yVr2qfcRRWut8fVvfN4ZgVSkQwqMMEYPjHVxZzLeXNoXTTJHmya2hNGS",
  "key22": "4poF35bZsQtg9hKJbYURNkQ96pBX3ZJ7TcxYjnqRmPaicAEnEWaeYY4rbsd9pcYZ89ztwUXmmSoqC8TtY6WhMqGk",
  "key23": "4ZFRQugwFCF4xztPj8vB3aXRLD4MvcUBXqUHgc7CYmdqwnTM9LNZbgtySfYooxe2QEXMZGENSH9JfJa198tpWVX1",
  "key24": "3hgg3HDftXa7fL1PzfADmMsdwa67bSCQyjAMUo8XZ9vKnfZBK3m73x4TE7EioCFLENv2hZV4YvBmDyvcjryuNnXA",
  "key25": "6YDfKURC5C1oGC5u1cF1V1SmoTnccXPZbVVLzE8deJimEChahMxHhNcg53T14K1RYSy1jkEKG3FgaKVB7jVC4iF",
  "key26": "5jm4WziFjGBCPQHzATDgoTc2umEmKoFft2DhiWXUBZ8LF9oYMjQenFsA4YPSo6jrDtuEonMVvk3roYikPgR3MD3J",
  "key27": "3xoSrJiSe5PkWiagM4Z8D8SwVamMhbFRBP2jotyU4cZmp5HsTmA9wLpQeJTdgg6zK8r3Wb5kvM2BrvNZqrscRDqY",
  "key28": "47612Hjau2zcSoySAAbBKbEEQZkNcwFGwmVYmrPrGS35HisaXpZuS8Eg4z3xdH7PSZYwAmsWV8Z6iRKXeTufL3by",
  "key29": "5a9YdN3ZQMKbRBVxFfeJYLwNWGsggJcsTKfGUAd3Y7pMsNjUVX7we2Nz4CRa2BS8yEA39nbFEGZ6REdPofMfvd5H",
  "key30": "22JGanK3sY2Cm84BbUSwAWVSGBheCr4vuP1hJMtFKvh2NvacSRFuiC8by3bRHyobiFp62uh5N8zmD6mooU4a5npn"
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
