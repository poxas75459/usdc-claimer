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
    "p6dYk8x2TLGFMDRNZojWx9fraTeEWLZGYQURWBkAVeoApS3rhB75AjXw95MwU7JCJTvSNb9igcwoqWC2pUw2fLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLMDXxdhrCeavu4Dk9NZwqAEeLoXfRpuW8YGWV8ENiJAcNZkWtPowoWKVK6ASABemNSdP6QPCm3RkwH3CgJL8sg",
  "key1": "58WRcVmVwVNUNHHknUn4ykq7m6iHhbDP1KxmoVNAaFtTyX2vesgRGNS3A1tDupXpDpkckQ1NTDjxzzzZNpAfUr7i",
  "key2": "5ZRo984vjm3ZGCRRYoHMie6wcgA5mwZNxez99dhmbFQ2gKMGj6yRmMdN9xjMkw42SmbGTMj7dWKPnM87RSpwxG3u",
  "key3": "4cxFZ9BLEQ6NgPfKzoT8nevh118wYhu1zoexGotd5cZJ6AHQveaQBqeJBZegRN2WRMTFNB6Z4WGZrw8pZDVDDFsr",
  "key4": "4yLni5fWMeAk14fYw7BGHRaSnWLmDYDWohadui8nSBzZSUS9Xi2yEGfnRstVnxBobZ4oN1az5CbKz2gZnmXxJwxf",
  "key5": "2z2AeXf5P8RR6qyUFV3uaLVYibn3rxPS191iE98gs7GfFP6Qs9bsuaS9CAsvLQ4FmquQJgmv4YJqgmiezRFY5dLu",
  "key6": "hFyFza8ssffqDiMhBWWP27HzGCRAuoDn9aJvoV6JhGDSLpuKDUyn5QH8vnx5h3Rq8aC6EbYcdrFMBaaYx2zdCpB",
  "key7": "2FCvBjVCZnjvBDMWhg6BRmZ18Xn7cBJ4z62hpaS7kHQhUDQYVPrXHk4rH89HpAXUwPveLiwWHw8Kt7KZsNkw8yh3",
  "key8": "3TBTA5bDy9dpR17qLWKkdavKif5sqSC43da8ZNn6tJNyvZ1P99phdfdAsYsgUL7saV43mxghYjPnKBrZFxC2w8Qw",
  "key9": "3BNoFWDRGMp9VHEpqWmtve2jrfdjKHBQxo5AxADefkiA34VnV2t6PhQqFMcd2gT8N6Fr355ffHourJTirx9zm6x4",
  "key10": "5GfnV2hFMeMDrKSpC2HvVamu5F9BZS2gofLNHMHsHqZzM8eiy9Bb8uKYitVeQmKKqRF2utBumgowuu2dAJxSCxC",
  "key11": "4jFSitX8ZBXFKULsnQbFDFMqvba9E2dcZ4EhT2LWsSzfZ7846o7Xp3AbCWCrTRdEi4WYkaMTKhaBynAYAqwcvhEW",
  "key12": "28PPsHaffVBCTALswy9citEQvErVwVEDHbgyXGstbDjo9nk4kPZJNoqUudE1hMZxa5Y4FCk7EuSJC61jxJKCmuTw",
  "key13": "4SJSpMDHaADtjVAgXE7Ewut4AgzhooRUVus9gXwQdtg7AqfKE2Rm2Sy7cuZbi1wbk27HzQ3HuFuie4sVWTSBrzSS",
  "key14": "a8LA8vwf7v576dgEbGmCT3pofK5yhBhYJ8HhNaqYGdNkPjF1VSJM7FSUmXCnL5wu8pPspRJSuGzPXjVoaiGjYsa",
  "key15": "5bPJLSRWwwxcDh75MgBz2uzaQPQd8AHMigxi3xq2PmpDNeRAbmY81agBeqc9kW3tqAFSCzLnpjW1ktPJrPRu1PTR",
  "key16": "2ZLvuMx2NnHy77wQ1sf3xHR8fVeeK42YDFdKqzDR7qJeWTx1EXt9edQoySXqHcyuuCXhVEeZnjrKrkazUWNTCXpV",
  "key17": "XwW75StN3Tk2hnWRPNjg3rn8X74WiVZjothJNqVSr4zcDpsZiHLLo8kHzC9twdpGoS49FtyD7FhTy3e2wNpPaSi",
  "key18": "3uAEKJuHQuVBCM8ezSfkrkamFmc5GsAVna3g55Co8aNM8r72DJTMSTPg2w6NHSpNsqac2tuXPnpHQqw1SkVvynt5",
  "key19": "2vXWZKsrrY2CN7NStxQ3GmB5cXN7pBMZZAPwjvJzEnheYG55Je5T7FdHV7XWCJSD49n6cS4y2YUmGufKYUP1RDd",
  "key20": "3xKDPm4RwYUCoGiRmwTxdTHCWxHXLiZGb4pipeZw7LBHA5WuNWT5hFvr2RmsK11JXUEV3FWcmFTjiYq55Gb2ge72",
  "key21": "5K2A51RqqJUiH2HRQuCN5JWBgi3axkiKirJdvLtLCveSEcT6mp9BTJqhw81u23rk5bPWzdbUtM2YnU6kfGuZJYkj",
  "key22": "2sSQjASN7BJHkeA4s5eXdWWkYE1JoUHqXu47tKTkAcs9W6xJHJYavvGGDMs8iTtnXYL9n5ePNAWMAPYxAeMvt3Qb",
  "key23": "3JAYjfCXccnuugYAaQbr92D3TY2z3g6T47SAehewyprse2QUk9ARWy7Ee1yEnqwoQaLCMfDgtin3HSd1c1TvxEx5",
  "key24": "3baag2MVVM3SZpYWyBuU2UmDcxSNTVj3eCHY3BiuzpmnsZunaULUFZdA7o7FZCMWgL92pBqixKWo2H1qDZhnoi4V",
  "key25": "5SnFc9X3fQY3Y7VpW9buUAhKfJSkiZmkuz1qgWdVkTq9Tpd6dRmJfHiVNpQut4cycFYTJpuU7K21zU9uAVFbsoWZ",
  "key26": "3WSa2jxbjGD2gFRbn7EQDvwfDHiswcSdahTPCEwYLjnrE6xew8eZ8RTguLMYpBqg76EKHiMJ3LfFz3Vpvh14cNHe",
  "key27": "4effcji3LUiYyo5Q7eiwFfuzykNPVXDyt5zNFFJncjMfy3897DzU2ZoicW8iYXFziZjHK47PDeee7TvryzX84RDn",
  "key28": "5StTi8FF5hhxMpEtkhLr2Ak8zimn719kMBB7RAkzs3ECrQ9K7J2o1eiRMmxzRVbffukabpB5S47YhyyrtueUaRV3",
  "key29": "21WtMoM1zPixqrLv4gDi8T9TeXENikYf1ma18ERDt7D44WTUwySUYqYaVH23D8kH4Pk8sCeHbWHGcVdTeREuVouD"
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
