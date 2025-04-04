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
    "ERTG6CnJUGsi3N7DrPcaGRdgWZD6ab9wjKwiPbEdAKHubLTfRcqjJPLMy2kNTY1Q6xEdXNrt4umM3b7cKDm8DL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a8bPCYw9oi17mgRjo9nSgkVsDYfbJAUwaDUptwzAyZcUTgeg1JyS7yQ9iav4Pe77SZ6miKQjmss8gkFF2mHKMBC",
  "key1": "xE4mLhZDp42SRD8BXvWNV1Anq4jLQX8xY2nyiFwj1sv8667F7p9XbFy2HzZhZCKrFLkRsuzer6SaX4iUG2P6peQ",
  "key2": "2HvJra2Kzz6tUJiG928inppo5MSKmg73f1MCBo7PhzjCSeDqtLPUkd2EpBVGeqayiimtQkTKZLx5DtRea8eySzVk",
  "key3": "5EWPnkKE8njyRgpCpFPZSPDrjeYHv8r5PHBeCK1C5ipaXd3Vqg4rRRR17LJspVCEXFmAUytufyfJCVT6XJdMNPy9",
  "key4": "5oa1EvkgzBn4AgyXJotEGVxUTdyQXoK2MhGCyYp4xFJE8xnYx1Zc7ShBNDNNZcqpax9b7PWE8nP1SMahtCgswrKD",
  "key5": "4n8ddgN4xVZhuKYq9tgnb47rZARvYvT832EXKTUYiaQ15BRosSjbRHQc5H9NvNg4MsyAtcRinjxE1c6VECuGCtVv",
  "key6": "5zVr52qgeFHsTThrDJ3NosCS973q43UGNkqshBPUWSAs4s4zZykH34X7aAr3kn3A7QFEtshdZ2zzn1Kw7ZxFhkYf",
  "key7": "aG32qVUgcjgkSXoCw4JhPs2BFs2aE69erMmUgkbjdBsTWQ6GfsxPsPnRmgrkhQLxLgHNHey1FiCVexynGLdYqX2",
  "key8": "3AHW3hBVZSBiiU15K1kydARRw7wthzCh98dFnNFLFo8wEWjnfsR12KKPpapJpLzN2PFYSFAuFGW8JBpM4jkgqnMs",
  "key9": "2w1Q9ykYyBaZGcS9Cx3RLdv41LQXtAEfexKPR5zrieR4h4WqqsEu6CYhPhooTtyLtUGCkY8UR6WcwXwaWMSGxeaS",
  "key10": "5kwiZYyrBmU7NRgMJacJFv283n7b6PK5E6ZJSi8hzXKntrQv8BNonKnX4U4AR8B46upog7PW34GhqLU3Q2JnziKW",
  "key11": "umuRgw7Si18Kg6Tk4d23Tm8Jk8MxdMWhSwkWrWtYEyFgR9NqTP1p8hxvNGZVyzSqmZqhC1E7mkkjMcwXtiQDpsR",
  "key12": "yJ4iMKQ3UV9nHNmyiy6guzAW8vhtMVM82S5znMCx3kcrrcjLfp9DHBzBPTD4a62zMzVSQX6yPx5FhvenbKegFpg",
  "key13": "5pFbNNzLqr2998UEoiD8ihNMA7idm7rWGynsiciaNLHjG4neboqw7gsshawsxo5BxuCHm6ASr5CZHLtpuRyrau3o",
  "key14": "brjbaVDzztG28wvS8fjnGm9gePbQ5ZMsHKLTdFTw8oKoBiBxffjw39uMC35KbrJeg1SN7wb9S8nuA3N8ZhAmhpc",
  "key15": "4DNU5VDWVJhUnx33YYMRdyufXmisBV1UxkNnLpZaSKUT4FBJXxLcnm4w6NmVv5EZxJugWXXKG2Zy5Q6UUbrdQf6J",
  "key16": "2LFPj9w5r2ApRN7MoDrcEzzkVgesfAUssigt7tDudurmAAPAy3Px2eWs6WC8iGKSUHa2YtMJBpnJ3j5Zrfrcagb8",
  "key17": "2QB2XqohT7NkqaS82atLQ13Yb7UiuDRBcJXVn3fNCGxWYQRRMXWeACn1jaC98wipANaZy19VhT1KLXb3Ez46pM83",
  "key18": "nHpfPWrMJWUB2SEobgsi4Z6gaNtgDkUUXgear9JGyFma1mkJpiA2k4tMieoVfZW9SyHWEeJN68nsgaAProEDw7c",
  "key19": "4wk9Nfi1cwXNLybeSRNifDAJcMWdCZQ9EgSz4eAMjK23izMqmo5AZKtHXErmDQa6kpisuFfrqFPT9EC9gNAiM2cY",
  "key20": "2eNdLa4ouz49jPgfxToCuz6gz32GktTTkg9R5rf11x9hNvbYxoaTtniXW1qyyNecK2kbkdXxLH7wigvi5fU7PF7T",
  "key21": "4bCjAitaQhkXfqgwXMJhzTUUag3P5cwrgXqpzDy2KizV6WeBsiycnuzNR1zhe2cm9XtiuWWuRR8K5FGU53ZkZPuP",
  "key22": "TzQiTiivukV8RcAC3zvgeof1fcxoJuoTvPb7ENDn9Np9D2poqZ4aCbsL1zQxmzQjmJfpdPcW5jrULZoAxBWmxuj",
  "key23": "4yg7VqErwxHASK4igsCq8iej9PjVHaWP5TFhPDTAiZazwgGjfaHV4pd5yWPEQ6ai6KLoj1hZbV8DHh8a1vcaD7Cv",
  "key24": "4GFkm2yRiWWh4Xe1f16Qjj2jCeufZBTNHAnDirKkqWD1vPkJ2LpCzQDyCdVXnBwgZnv5juT3rcLzUz4qUJZAxiR7",
  "key25": "5Ca22QTTgYKwk3X87R3Rsqb7aEj8BHuCxoqtBwXw29mUDjt4ijXu4TFeu24HUNP8QFhEdm3AkWzfnnZa8Uwqi767",
  "key26": "51XggjHqE9k2KHMyGBAu9qbmohrDLhHoeFr7pSLcLjyZN4rLYkAaMaThRheBRTrLemFQxnaR6oEk1TVsrhimnVon",
  "key27": "fiBLXLnMraVrTHtMPPQFWmcZjqoYMTYQthgpn6XFmjPMFiZ8cBwPsYPhf6ErEracc6Ka2zFXT1JoBgYuRvT1VL5"
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
