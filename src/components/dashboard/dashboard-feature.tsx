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
    "48s2RZ4s7uJ4QYPkTK6P5fbzgUQFnKUaPfdHsx8bcw3Th3HqtXVrB4JkEp18XddfnnWMz8SQy8gqHnUbRDpZJoEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EReEVDTKcpykjjf5n9aWM8MAVa1iRoKF8xH8CMJukA5bH7uLRLikyVAK9AXrEefpdfEygsQ4gGVah7xEbvpqNAx",
  "key1": "4J1ADary9Q5oTgkejRBgGWknpR1noZMBagMVPm4vTTp8cAZ4fCPfLhpehrjEgyx4PWQaEnWerJAugDqnnn3Fqyzp",
  "key2": "318VEG1T4PNvm57XSv4hS6ZYpkTNtCn8Py9tRwLhhaSRq2SeQRwCKawMWdYs7dfWrnn44NxPXZ93dQR2HMSaZDYh",
  "key3": "2DjaXEY4EPLrCZwWMGuTqYHWAKriqmmTMN9jMmTLEjo4mi6cqJgEe1rnf1hVCqktAMDwtQwC5kXJnCvPYUbBpkPc",
  "key4": "4kJHA4GR3FpuXgEc8TdXWMGxAJ8HFYx7dNF1Y5UjT3aSmj2zqcwxJ4J4Kn1QyyvRoGKyHcsebPxwJaQLuFVZJD1a",
  "key5": "23tAjKe7KcSdjNEhPCEXAgmhT1VCKtmHuB9WhnUnNoNSHP14RGrqYVEFDVogLMydQbkkpmowSLD4A7re97qboqSR",
  "key6": "5J69D86Pb3pVSSDMM8Ko3djcYTYrXUhyeFvSMs7ZrJ7KNwXGPMMnmJg5nMbmysrvLxsTfb1xGRGLCmFXXTCsYu1V",
  "key7": "4LtqFFEJdcxbmENdd1D1ZQgP5vSZFwiFdy95qWUmN7RUF9ugGfBXxSWsgp27CbTLY1ZvGRGyRtSfv4PUaV6TamQw",
  "key8": "4vJkSik7g4hRbkhct4EP1ass82L1Kd7id4KWnC7MD7NuMke7zeEgFvnyanynunDqTkibRupeFke2NzEs61nSYLHb",
  "key9": "2Fm1e3kSw5B8XhuAqEqPxBHoFmw2XojGDPApX3YmZx5szmXeBTTbwnwM1JbjQ64HBeuJNPPcqh23G4N97VYY41cQ",
  "key10": "4LPGBCK1YXsHqnpuDMv4DTtn7aPTeUc1uxKCHA8XJfstb8Tf4foNjsXgm6nVVbpZJmGQ5EacQVR1kQMRt6fmcA3S",
  "key11": "2XRMhDYMipQt6qW2kKpGcixxJnnKJPTZLio9mafnAZpZCRMERdGGKq8DUhb5HXFiPPCEJCFijbmUxZHgWorC85Xf",
  "key12": "4Nt8jfii5BQzarB14c1UyxSxhqqZtbA3EBBUYLZoE2t1chzAYk4xQVrovCjvkXbzSzrvWnCiy7D8B8JJhCjKcer5",
  "key13": "3sY8drss2aXnUtvVa5LDe7V5vJTcFX6DcQxMJhw4WTTUMpLF94YEuUUVaK8h8eDH7qLDSeFTjE12TDEabFBAfLfH",
  "key14": "yte6JLUJfuRXfy5wkHvdpjwLWCU6Ps7heXoyrSDWn7xf8are8Z5A6tMDBUrLN2UjjYULWhNLhSa6bfqXY8Y9X32",
  "key15": "5drT35ugNgYid1hQxz7papUZUtHomm7acuVqajacbfkgkb8vPeZtQYptVoWQYdaGiKWK77Enx4Duvh3uuWgevn9v",
  "key16": "4N2vwxrBCZWNn612k461ssvmjenKgqh33CoS8k6FGsZbckwBDYxce7TBt3bdmgxsdJ2CinKc3yqNdbxffuWcLpmA",
  "key17": "5hWZwDXKHSQkBtsQByo4Hw5vCixNaz2cLWdLxGAADFDjwTjFSQMXs72X25RRGFSUMiTfJ5RTVtY3xHTfAMCx8zNt",
  "key18": "21LcvCN18JzwycBWfMHfdo8z3PubRz7GusokSpim9BDprcCcAdXjES6tED2qhFvZUteGq4sSW8gnMwaXRBuh39So",
  "key19": "2CH9iKSiVQKDK97Gdo9BuKwGgVC4xLSYHVwmJy5Y6DzsT9Tj9NS3QsMsriKJEATUWfMNhA7Qp37L6pCCjttQbWBa",
  "key20": "vAjuHjtQyr1B65KZFBdcokJbY4mF9fVHP5YH9M314i8kkCn13iSGJeWuJx7nhgeXyFuTb3d6Lf5c1xYF9y63DqG",
  "key21": "5NvwsmbqS5FwCt5Df1388Npmefd21xTLziKPsPKSfkLJ5Gj7gp3ypdCgyH1Bv3rBiz4G3k56CDSZKCzrixhVDd1x",
  "key22": "3TAxXnkstBcfRyyPB1qHiBKMBn52UaZ89TB8RD3mBS5archsRwvnDoJC3bhqxX6EuCYeJBg1LsqrgZakQV4F7JAV",
  "key23": "5izGtHVa4SqMDgjELogxkwY79z7QZarJyvJwuzVA7rRpyTh3o7TedkxrpBQTwZtowVVKCpmCmHmYk3nPXKcaJHcT",
  "key24": "5MvqsakeWe432QGS9N51dgkudxb3w3JvcvKaX9pk9x886LViESJt8fakDQNbzNjALunpSSpVVfaA6jf6QHFNdFRk"
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
