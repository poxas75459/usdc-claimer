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
    "66oPJYcRtBkbz5KAUYE7UZpbfwgKsgZeEhexTs7szZ1UCEdhXJA3CTcSBMHyHDJC4FA6R6Jh9FUEqyD6VfCs9sUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbjKaFduRpNyWNqJUF1VCULY6R9eEcpjfmfonKxb1SuqW5RyT9QTn62aRyTa1nms95bU3mf4SMMXyS8zQN6G9J8",
  "key1": "2grP86yDMWiYCemQKTdMDD66bCfRq1i4rfXVnwFhDouXycMG11nGea9NZTh9U7uRu7ZiFGdEgbsMoFnWMWjdNzG",
  "key2": "5Hzex2jCkqV5wTNh2VgdPLKqbguQhxmLEkp5g95ptqngUza8M9pYCUv61eAsXae4koij8SvfKcXCMr27cEzLAmon",
  "key3": "33556hxMZotNuvwfDow9dGh5vZRLULPogEvgwyKZUhusMfc1it2mkvrVsnM58R7YXFEG63dd6gg9QUtwL8Tp4aNT",
  "key4": "si7kSfGCVWZLtu8EJimk92adwm1DT5LS53hta4iqypPwcNyh2d5eXNCVpGPTddnNGtHfwjX8rGtHRor57kdJKjq",
  "key5": "2qKVCkCz5brW2tbwjUtxccG5DbE3fgUrC3uQuHGEQtQvGbD6vLdEtjH7htS9tLowB5nq3iB6J2R1neMRihnojG48",
  "key6": "2Ubb59VVXEZWdwaHxbg21h9ndP7j1AyzHp42oWovPU17gmodep8zEeSNo9i9Q6MtEQ7kwbV6ZWL183YLANmNemMC",
  "key7": "4zbHwoVYiHfcquPCbk7DgiqjZMMZ7GoypKbHYVVqv1ZCa4uFiSy1W8XYXwnv9bPb47zKvkFoTRpb54R58TcWBREB",
  "key8": "5AsEpYmo45ityNB5tYHKPauEruxNan5WtCkhnPSYnKofdbqLzF38MmYofuKjdWGQmAUgE2grAFGwAwrYR4KGwDGH",
  "key9": "5MtEXPij9GJyj2E1eRDHSiiQcLTnzp9EzS451bdRaMh4pCUHAdJ6iPTXxdM3S4WPKDsWiok7gEHDP6GgrdJTJgUf",
  "key10": "258dUcaZain8ALCzDzkHBLKxVGaKE3kUTfYonCcY9Uim7KwGAnSxbuweDuvahWEBFoRWfZjc5wNLEEYLWhfQ4Jnb",
  "key11": "56gHBnNNrrn6PQWcC1UutoecfxgxnNFsd1LU8UYZxPsi87WbX36ww6grT5VH9YpzUVfh7tKbEShiABXzV7ZP7EkV",
  "key12": "5SssUjJm7J2C5oigkEGc5EgejPehiJLLFAcMRGQuYGppa2K2jYjEJbwkoMNpxVm7oRvfvavpBvFtdthBrZdvTXqw",
  "key13": "48Qpx4UnU89gYSDvg1YpLnfJfZubkyf4tQXk5o1Zvbda2eNCZ8zKknLpQ8QFn7YMKyCGG7EcQatQLLMqDUUNGVPU",
  "key14": "PHfBeg3Kx978UdJ7ZGdzw5LJX42BtbVcjPoRAqCP2cfgyEmEffGjqPPQeeEezAuKiHmn5cVKnKSG6YesJ376TSB",
  "key15": "4hyAkCsX3NiKXwoktfBd9FKZYA5RNwm8VtewPEiu32tzyHJEyAKB4afwDKvNpy821CXtzVBDiD61XXvnP53TfKkQ",
  "key16": "2U2VjbYhxL2omhSt2gDxms5fPCNsWoFnKygRnvwJwf7nUuUbVjF7wYWzWJvHTuZfNwwLQn6MhefT3fxge8aEmuAK",
  "key17": "5bix8AfZBq5E5cyEX5sMPGV3m4hHoUpkMEwbgX5PSYo2JkbvTiHzjNGiYqa66jY4KejJoiYpCUW4qFJqXuxnmQ2i",
  "key18": "4vLaP6JAYDbkB8n2GvmpvAUzwUKrmgRceZeW9GvW54enf9Tk82RDSTZoCNPKqGU35tunAHp7qdgQbH5HSH9BR8w1",
  "key19": "3Vb7wXfwSkt3kcM5oqCdjecSsZwEtFYPjLmgHKkD2sq5HfFTi892ZGJTpn332854EXBbmLrSoQb5hwhv5Js1u9Ez",
  "key20": "4Wp6FVK5mTu2naHxv4nex3yHx1XKtx2jRSUBroV2j7EqnB8j9i4neD89GWewHPXAVeq2t2t27RbgdcPxnfyMcwth",
  "key21": "3QC1V7JcQyVH1w1WqzNURAdMcxcjMQ21xVZn93qssKtsunXSLSXJfUwoV2R1sN9aXfeMDZ83GFzT6iSWadj2dk3C",
  "key22": "3Y4wqpz7VjzUvcQBczUmjdT4VzVaqQ55SMD2DTqYMyM9jpEPu1QxuY7tZhowfhMDJQ8nVKLWfZj55Povsf3vjy7Y",
  "key23": "2cr13c8F76yv75XKAfWkqwH5MGYypEwot3uruZM3ZjoW7BSTF2thpfyLbFw6CTdHtKB1j2GAnv8Pi1C5MUtHtHJH",
  "key24": "4axnW6BMnqLbN6KNwfPxbQs4Q2YXGTV6pefeUUYefDt67bh4E2qLq5tkY2Qn5QDEchksZL7ZnCx1r4iMTJo7yLtr",
  "key25": "2ib1j5rDJYPbyZGWpGx6fy9E91gC3iFcTMv33geJYsdH9xShZ2pnqgvU2wyrHT6GPA5Af1Y2Fi2eUgrGjjMubY8n"
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
