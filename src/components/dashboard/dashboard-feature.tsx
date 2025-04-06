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
    "4HeSC7BxNxUhkajKQmAAZttUKnS62xx9LotGbvhyRmJv4haQ7MqHAFZedEBTA16YiQbsELJDpgyVVQHBoPXzMyMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhZW2DgnjbbVTwYcWxnUn6zd4z3f2L5ckQXXjAg3ADrWYna6dfBVCnGWWftF7piVzPozqTNNKPvzz2cnpeEked9",
  "key1": "5vKjVB7HV292j79tZi2WZ4CZrt1AqWvoyWG1cg8gqedWX7dvj1hf6u3nspGx2bay8W1J4LJA6uVJSJsQHTen3fDx",
  "key2": "3d21s8b3CBqPciX17JM1PqtCXi4bMQLjpop9BP3dqvcJnzy6TGYDADxCuynpYBbz8YAw8Bzzb3Aeif9psmWrHUvq",
  "key3": "31j4M2WsNGArDgD5D4FKJ4gY4k55qwy7UbGvvgb7vA7MvhxsMWaeCz8cPNgR3Kdd7YSvUNtrn1q8AMdx2Pd3yiep",
  "key4": "2EqvEXhabR2kXSB7iuz3mKRMkptFMerpZWLnAWPHBY7mFSwHP3PwD7AZKhVngEUXzcRrBzAtUEeWEGRCApAMzdVm",
  "key5": "53nn51kVtA9avyCbFv2zELJnBFZZseLTksUwUPGN9yqzbEvp92DgEJKUzLLjxUrcRaLqS7V3m5VSdppnNCXaXXJ1",
  "key6": "2yjCZbHDjDSa8dH6ZZtNgiYC2B88mJ4XgmVmavyoCz9a4RABDpWEsunwTDGNkTP72jqd8Tp7BhrZTKY8GXFAo1VW",
  "key7": "4zuPA3CXtg62pbfyQXjswQWxQF4YUm2yRsrVLZpbK3roNkSoxAZYzJbQbeZLW7Kz2iYsRsk6UtQ8zeA5eNZghFo5",
  "key8": "4YoymBiMvTBHiGrKrphUHMf6VbT6Uj9CcjeeedHSz2F6bCNdHJjh3Y3vzAtGWmP7RtMgMCCa9F43ri1Kwzsm2mby",
  "key9": "547i7PJj4eXB1tRyHmCVVvhehsEeHncdUCqUBigRKiX9YBDyjkywTPap32y4iEyVPEYQxcfqiicPd96j7s4Db1DH",
  "key10": "3PLwcCqd9vEx9xpYDpBNkbAKq3Xmnpk422MHE92u8jMmwTBBLsKBUYZrU2sA8hPdKKcB7DqGJ29yKUxGxVwJbNh9",
  "key11": "2NUb4vem1YyUpjc8JVoi4LTTe65QKs6F9Ag1QFyN8z9upSjiCZJaRNupzKajJULvF2vrsjvsmXs4vtdqMCGEsUv4",
  "key12": "3eTdQ4GAcBsLkZwUsSaVYMPWFdMiu2SR99cZGbA4ngPpaMc8fPVzXGd3zQsPiUzpd5AxWZQefdorpSn8XJjMc2WL",
  "key13": "2MypEvoYjLS9jciyZPygSLSQogbjJ634JgnZ5dt4oPs4G5iu2E11KUKV3MmgMm4jH2g2YRveWyCBhahPAJeJnQBF",
  "key14": "3xfbv9ZNUpicBtH8XTrDZ6kL6MotNJyVf8Tc18FQ7zH94mP8r1Jky2DjyUm2TrJQE3bViNkRUa9oiZbtYYa91ck5",
  "key15": "JS5AXm3JmKNH6sybVTC95sxQumAcaSf2mRA4MizeuXhPn718naSRMSuofuEt3ibRWXdxPnv8UR9vH7pFZiqFbH1",
  "key16": "2BQgNugyJuDfzefKfBuyAWMqKkdX7o7Hdvhm3PuXxN97uHGj9uUXtqSTeaNPaUJwUhBtJMDqQgiNNwnnqCwBTfyo",
  "key17": "3DvesQV3ATd9XPAh6FSSnrF6Q4d7MSDrdTmuWbRoCkiyudNqu88epKkMYngDDL5ArBNjbTZGDeRKCLbysesGXu4V",
  "key18": "3qTjwPM87Vxnk4MqY3JJxq9gstoYFHUeYJbHpYxWp1WRXbmjjzyd7iKGrSg6LHgM81XEb3QwHPRVGKA2FUT8MRCv",
  "key19": "4WwFbxNqPXrgv3g6T1R7BdPTKzec3QQuvCsTeZSWg8MDBooNucmyNpgwBGGWkyfuctFYGLdjRAkVZFeddxom6ChW",
  "key20": "2prYfEgACorqrmP7qKAPf4z3LwqE6Cw15PHbd8sBq684xAmxrPQ7bc57hA3c3L2YNYL6ivWdMz8x8WV4RCwesEQW",
  "key21": "4TuynJPCVZX49XRaaSQimRitSwZvFuH7jEmWPevkqKnNmjWxJfZdoenCWfEFtpzfQmKHGM4k8hS5TKmuY7f29F3A",
  "key22": "2TREusQiE5JnFjMT3XEp5eZAfAFR2uAf6RU4UxM3XoubCSkU88wwbtn99fvq36thJ9dtQ5GtCX94MzffC71E8c3F",
  "key23": "2rfG9oQ36n4DYTfRtJejPFyxrKCPxheZybN7DQ9udn7zwynQjWdqaAgBR1keeQhWBckhpEx3cTZQRmNUxWHXXV3j",
  "key24": "3tdw98ZGmABwsyHtpdTydrXSVkofiSsyQZzMJuzrruJSReDSQz5Apmuf3EhAWHvGikgcnCJum2zg2cEGXz6jnZj3"
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
