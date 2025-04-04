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
    "5XPPJZxn8KDiAR7gX3pDMCp15vxDSCazPeVvCPzHLkWM6BK4VquWgeZFeoUAd7xKhiqpfheqFBXsQVWzrJM484v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGRZrUeruzXYnfQFwfpCNuQ4soouMMwa9miFyebW4xG2nViiEVD9AYPAsCzmbgGkriofXt86oeKsdmu3arca9zR",
  "key1": "4d3FdtN4fVtVc2aL1sX53BdpDHm5hkUHAse9R1mtvHPqf7kDonwAaz4RuYi4ShpaCyWwNRieBbipz51aUGAdCo1N",
  "key2": "4SPti61PTjzs13Q5UzAWNrYzndZbHpw6CcvVFxsaCaRBKokv8cgJPmPt9LUVaQYWo7SgjrHU58eEEQ9rmfSBbhwZ",
  "key3": "4nMqS6GVEwjTm9KrqvgkVVinhLzN3c1HFT693j5Xn85oPFhvBduV6RooieKhZF7xm2v27bcuaADjRKEDM8APQ2RA",
  "key4": "24doAk1H17PTuJ5kRniLhcgnPYBkBjAKJkyr6sSj5r5Q5Dh1n2Rk6RwtJnyAnJWCvnZdFccsXVXUwSe9LWphDcaH",
  "key5": "oBPbjQ2wqW5o22Eohr8zMAjVD4h7u5Nadk7uXbt26b1paZt14PqSv8epX7zL2LU3fNqHyWhGrSMQC8bXYs6qt8v",
  "key6": "3KbmsqBfdVMbo3cgToQuhwooF4FT3vdvbuFmuY1Yank42tnYG8Ri9iXGXvF1jSfwJeeA9fDg5o1je7u3ZVffzt2S",
  "key7": "4cPpDCU8ubWqiNTxpv8A9hiFxiYiVHbeNkptuHSEVNSQYZCgbJQ4thoZBBfvFmAJCUBuE9FLjY4tCxcZmBN5cZxj",
  "key8": "fMv7XGNzftALkKqmZTG7FFcWkMvdkXRttdhq8uFMKK3PCpuYTJHHkheXnwd9vgnvwB8eB7gP6zFFLHoQ4NkCJpU",
  "key9": "5ZNS6fv8EDwM1QN4FpeJTyGfa3kANsjxnbsudSsp3pfpEyyKhxHKZAjaEQGgex3op6BWqVoySpLTbh1QALZfDVdz",
  "key10": "xFnonWSCimCdr5eFGFLk39mDWfGQ5H67wThnhTMxqu5a3jiFkEVKS1S4KG4QkRzfuBWZJtUwq2nzb6brgTNr67u",
  "key11": "61DAuc2nx8dtzF3YFk5LpFBx2DhZiSxoo989gv3Z8KE4ztaSgiXGm6gBPdNKMrkRik5RgsnTsWjLeWt2Wqx9qvM8",
  "key12": "3AmyBEomk4Q2xhFcjbhSmxiXFfvJF2uqm3DaMhSicfRzSuNQZJL3rW2uCAzjJrGYgvZBJNashVuL5fqptAY9tQu3",
  "key13": "5FYozqfJycZasVZ31tkPUeHV2ifHEZKomF9sQrFfj6Lnf1icYvjxq8RQdwyJQPEFnXKXerTWEKLzgYgGEdWthcY4",
  "key14": "41ZWeyspCaKGWP55xcKdDNwxPUWEXdMVtCWwx8DaFoG3L8poiBP7PPPMvKX7c7wJgGLuUrJYgSeTB8RptnKbw6XX",
  "key15": "3dhP7t4nEDB2LDnvvq3oExhbs9AhZQniicdC2H9SAUMEoeEC5DDpSZ5kANP644cD3ssUR2Nv9t4amJZaUh6NKgCh",
  "key16": "5HSzS6XJuUxng4L4NuNPdmofm4TstReZi4yENC8JieaNUa9hXAXSjprtkgKb7Vqn7AqRs7MkgGiqnVeukcy6TzFa",
  "key17": "2DreYRtyy7Ry9oXpYDJmWpFMbvHd9FvdehhmWSvXoR3wTVvrQXbECeY7RA27nSpUXLxHn5XojqpmiFJS8w6Mwsu6",
  "key18": "2hZBGchBPSQ5awVsBRuEz7Xtec5aDc8tMzLYMsfRapkFK1mfSyF4BefiHWawywWo3LUxLr4jKxyXT8LuKUX6m8bd",
  "key19": "4JGjpkqi7UXysWoRmcX2rkLVSQNpJJEzZj1Sx2W2369whfESrNx6e5UfHAgA2rtCBQGniKgBqVdb5SiyeUz7Ygo",
  "key20": "5h1KfLjHem564YrSDggN2LieMGm18Uxrpcpuw4akv4RZvqzhnHfHVjC3pGtEYqwuQgyCmdTLky35CvDQ4tWZGfAm",
  "key21": "5rfiUjv9bXekAcEgExVHKs7RkLkwF4ygTD6iZvgDJyDLk15BXQyuY69cWBeF67WY2FspQ2CtQd9EobxVNi8mvHGh",
  "key22": "55A7Zz8WyHYSDbzRTCVLS8emPGrnJSYcd3sPNm8znowB4G9mXcRVmMV9pLG7D7SHoUkddFMWGzmZ83Wkfzo9sAz",
  "key23": "5Cx76HKEypwqyCt6Kdz1JdFDbUM18yAAo9oan68p8Lj1kA8c6bbRS9sxs3repwg1CD3YWHQkzW2wLLGaGfitweQf",
  "key24": "42gJEQheharhcc3DssRAnKGrABAnWQexNZNxvMfYjHc3Kwcijzj2zYUAZKe5hxc1LctjaBaVvZiqijg7XRpTnnmG",
  "key25": "5fKkffnfTBho3ghoYn7EoC5wC6NJAVYaU2BtQKZfKxiztosvBCNtayBgrmnX1aPChk9h7fFsWhdTwjWj6Dujsk9C",
  "key26": "2o3Hat3HJP8E7sd7hs6KT6z6SmvMy8mp8Q7pZ15tiTkMYDivswSv31oH5CtqtD4eDUk5ZA944ZkvS6XYZzWXuaKT",
  "key27": "3MdhKuycKKvXjbr1KbnPYb4NpbVmc5RuUzdXf8c3vMUBbNGaXyZGEKDizFXskLeMiDVLgPdtgZFi74tNpyWEBHcB",
  "key28": "3VnZL3q8fFHFQVXxu2cwBGcoeZ8W8N8jcebZDUR3SLLivHtj8ofmMngmREyov8LXdF4Ug6EUT4i8drtZqnZiQ6bP",
  "key29": "5SXrK7mnyJzyK9JwkcFxQPxJYLAA79oUapVXZUPhq5KPRTwoVKRXuh61nEkgUTevFfdn9SNvJtsfFtGX75GMDQT2"
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
