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
    "22yPEeGyNcQoqJEPZRJ6rGmE8MimUFssuPUtz2TAThi4CMZhFswBbacWRVf7YYbEBRtydgwUfrMn4xVrmjaqTtue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39odaf2WxFcYfVUEx4ZtCxgVCtbc7J4heuwRphWxkcp8PhoFTwNuEqyEMiQtdo85vyF5AkZB3k34F83aY1yRtxkh",
  "key1": "57qDkfAV3zJ7DpJCZciBr2As13Mi2TX2ZhRTAaqv3kFnkPfqwcYun8bpZuacL7oENKLPsoWepyEqXh2aUnBkkyes",
  "key2": "3CNpzZJV6c2Zqxhg4cZ9RveMULoozgUZYR1Hkhv7ftmZHk6MyGDoZ5aPwgkcsXJFeXJeu1WKEZ1FChGfVmmjHoaD",
  "key3": "8KtS7FxGaNx6hUgoSFNQbwsd6UTKYzaVLMqe5QZ8rjnqg6zFrEBMRYwrV6vx4eVoTyTJtEGshtSxDHuj7rTwN4X",
  "key4": "5fXCsGCVQtj6n3PRgBKULUPBtbw2mhpzEtLLpSkYgnZjYmmZ3q9qdUooph4kT1wyaWGhGdhmwYotzF3rQKaWh8GZ",
  "key5": "8HC1gsrpUZr1Vh8u97MScWuycWBALXJq6P6PXPBtxADXbuGRVwfkVSUof7A8QW99LLPBdFRp84W2mDJTwMfk56A",
  "key6": "gEBL8KxjGEKQKasGJZSAH5sw1dAcZduk3QHkPZPDc4RYn2YZBpVs79E8QhRZetcEvjrty8d9ioRV2Eh29yJS8e3",
  "key7": "4mXSNzuddd12CFgtgWdC5fjkwNT8BfFcA38AMaPuhEywYC8KM7aN3ij1vArLshPARrCn5UxaN2Yjtg8whD1DwQvt",
  "key8": "4arGwPuonAAnbBV39yxc7HWFx5nFsBvMYHUqReAkfL4g3fWHKJD1yWUvpMoD7orHbhAAgAPPDzEkKBFckfxSDj2D",
  "key9": "YQ62hmmixmvHaCn5s2okbknCNsCAH61zviDSefswhXaR5N2vwNU2ytUq8TgnpJcQht4fTyQ7c4ZHJbg8mSX3YKB",
  "key10": "4Q2Vuo2yAeePK17hXJdGmy2u8pi8wJDbf1yJNo79uny9vxXxDcBzzPfi1HH1yHptDJTVK6PwTeqyph3a4exoreah",
  "key11": "51QcZxEXtcFzJpsFo9rKy26wwajd9XGXRvq9C5Egw4FrXbaYb7U2FM7Y2ZonH2QFPzcC65krCJyS8sAuPdXP4f38",
  "key12": "566kngwVhjBbDUC6A1DSfFkzP38DYGEx98HBK1M6UYZ9Df5MEgwZ8ik4ZdLXUr3rb4WGmrQLLdqDQpGwvijJzTKT",
  "key13": "3tAEyKWN8BSfpWK1ugBcKHRGFdXMJvd7NFDFc8KFCvSRBATtbKwFuCCs7BqrcEE2g4rwfzrwuRURqigunREGLMKH",
  "key14": "5djwGPoD3tnYgXexqGBP4JADt17FGSrxzvEarSVHa26osjjCH7XEzfdXwcrBgbg5nceUnbidApyMvN5ve9EVgreN",
  "key15": "5dcjyoMrp7Ga2cBdbm3TnxmATQpJmKjZDSzfA4QGA7cmYMdbM6FkV6AGdSoSGtDedgpiq2DJ4D7UDgcNC6m248Zz",
  "key16": "2mRpdnCXiBVed2dm5v5cET4EsBdNZgcEcyWXtrazyicRoJPwwqqhgp3cBnDzc6K9YnqJ1QjThCmHryww5KHN2q19",
  "key17": "ZbsNRTfxbsG1L1a4ngjDAeCjfzFETUdsRTQGEzGR3J5UsMWp15wwopLPWE39mojo1sdwapULD3k4ND2aLZGoNmZ",
  "key18": "5J9e3kidWRkvNwWxDksohfHhnBk8e7q5bCXh9VpsrounCGsEqLhmmXWZSTk8maLndnkBLMntvgqWq5NpGNCfMre6",
  "key19": "3Sds3MfyBGEzxKRjndgL6y9j9ZRP2MvxJB39bJ2FCWs3JDRLX5o4FyMwFFzw9nnGZ9iEej68WP1mZAKbkkT9mrR6",
  "key20": "2qkFFTkAvozU1eBGFDM5u961QXmSHabNrqhyqa2B9iijHbGGGm2kbQP6TMyDsnepcdhVVHSsHH83qH26aFnt5Y6V",
  "key21": "57ypUEvSy5JdP7ruNqK4Ft3HAJoJfHcAZitHywjJBSuuUUb5UB5kuuYUV1LfKapacY9hsuNoRUouKai7a6yvqWN6",
  "key22": "wtrtuTKxxfyX33PFGMSVDDDGQKn4Qo7s29mk6xDWpDXFiJFUoFre5btKm9nWKMocwo88ReoxZY8ARgJeBq7rYo3",
  "key23": "4XJ5P8NKgEU2MzkM6fCxdkfgwNeEZLRpWC7R7iPNw3Lu8qnQJCKqFZDf1SSxdHT3H2gxz6W3KfRguyBgWUxFZCQ3",
  "key24": "5ppv64mpUsQx1yD6HtybbAGBb6mh2fsoRf9oTcuSaTWRVRiXbgVcFX8XnzYdVA6gysbLQTJuUAe7s5rvKmDnFdGV",
  "key25": "3nfGExEjeS6DhJU3MWTiGCPZ978vCyApfzsfSNBDwwnjtgv65m7t3Yt5MUG1nxz8VtWo4EaPBGV7wPkUp2iBhnuw"
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
