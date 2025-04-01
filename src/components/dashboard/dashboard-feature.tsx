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
    "3UnyZ7v5Mi9s8TRzynpkp498U37D9BWX9DQjar3BAtQVuiP92BXwNETUKqbeJyeRQAx5U7FBSdWhrAFjWjgSzRcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qj8qZWL24Xk3XMrzj4YDTXFvxn9wB5zi1R2hDi16a5dJsTBsEcbgjLvKkxdteHBthRJoSJEBDWRjEbBEpegCDp",
  "key1": "2iNA1xQgJa1DgHfjDnbUe2ToFJpEBWn7oAgNE1gB2MhPyfNwHe1hEK63EzS5b9Jw73KRQzCiPbjNZFKXCg6pyT86",
  "key2": "43TcmSmkWSvu7nF19ZhYDUy9jUFbCiLeoX74ffZMjgo8c9ysQSzfYRBpq5ukmWbrUkfxo4Z7NRqY7PSbtDRQ7ZXu",
  "key3": "3Kc1yNR7vdAS27q3b5nGezt3oMC4q3tspwh9z7VdUGSxN5cTzwjrf99iRVhVw9fhEwPHro4hyB8josr2udDyNvof",
  "key4": "5KX7ik6VALS4Cnsi56HG1LutacHPVyjb2U6foFvh3ak9K5uTpBzYhYEew5NTQvBCYfC9Y1Z2t9ebT2DDGumBHmox",
  "key5": "5C6B5YjeCarM9Rn41Dwzkhv3NhN9mx35jf8VTNTqCARju3rCpGoyvqX9tx57TzmefEnWrV6b5bSVJwRYrDxaAWNC",
  "key6": "486FwqFrTLP7oZWdTjYEj5ZsTswFpn1v6PRs8U6pd2K6DPbCM1Jw8pekP9hvjHqr3CVnGNNhfSGp86dRaLm5732r",
  "key7": "3idaQ1hzwfgraA83zsVABzmFVmAS9yj7DEdESquTHkA4FzrTdoQfLaWinziQUzwy8TASip9JThV1SurTuF9apUH9",
  "key8": "3G8Tj76EeDD77ANDfwxDAmAWd8dtRHxjTRyWNDHXL4u2N2nTeyQwhqbc958J6RfGvvrNgWTwQFCE5vERPDq2kgXM",
  "key9": "26QvZE87tiVP8UvoxParrqkD6pebdXXXUCEQ6gNq2yxEdL25oVKCnhVF2eLopvcUKNyvFkhG9BGvDJFU5WGBv9xb",
  "key10": "2mdw76L39qZfgvr7E8xwPepqDt3zqnJxYBHSZGLKmirA4uCtN4agfKkrpnbkmk6gi2JcxmbSMhHVr7ApjMK3Raty",
  "key11": "56o8nmWwroFgxU7WESJWUaDbwJbqs4iiC59d2cgdRKS4SaXqiB29wLq9HwpJzgPH9mzP3e2AjFzpVNQhg2ufG2r3",
  "key12": "YXWiAxdSDftputwnc3Qg3TTVfmgtG4TnKXPdQKK8dBGXgtP6XuJdYDe96UvqvXWuSmE276hAcHyp3ZsL8guf7TC",
  "key13": "2u1xZ7asbkXei4uZVXEVbjN89oT8KxrYF68bFexhUwu71T1gDKZX6eEtSM4VzjpvA7VzvY9p55ZmPBFbgaEgy5Qk",
  "key14": "BWxEThxVFZE52wVivgdSPqLYb6RojbUEdpodH5orLU2SRqpXCk6WR9hwwDuEpsb1YmCnwFyNiM2biSmpb7tg9Lf",
  "key15": "2b9Z3Zgg5GuVFB6qJSfQmhzMo1taex7KueYeXDZux1vxGqsgWzm1Je4bBF1x2GKkctgMAngziX7SvAusf9HnfZNz",
  "key16": "3nDZrMg46Biye3ttrEuM37xk6fQyFp1nXsHacb6JRCwTAC7bvWXkAYoS8xdWYadhnrGmsQ184nHfSiP72AjgfFHq",
  "key17": "2WGVukXfXF35BRjYid8UF9JZTqgJwaCTwXfufk9XjiAnAwsTgTgpJ2x1Ee9NzGfDgHFCGE7JGYSs7sQL6zwkBswz",
  "key18": "45Sv9SQXkiyzXufwTZzcBTyZ8YTjJxjkyn6zUKDb6w9Y8hB3WAyYo7pkncBGK3AiZohFxRNUGbfuSRekTWDYnigy",
  "key19": "3azHKE8rDJUF3JccszGr7sbSmc4Y8d2d3UwyHMspjGtoQnzgf9wP9Rh8GCKCUV19ZFdA61MtYcbW5g41QcmfEsrc",
  "key20": "5SaCp78QhLH9wRH49DCfkq8Bqt1YDuKSwaiy6stebp4AEtrFjGRHkgvX6Ydd9coaNGjZouQ7LuhtEWsXdVMwdNDm",
  "key21": "3QegX7BCg2VEx9nxmeqjx7C9DjveLccranKWvnHBQeJUfn3DBCfi9JYFPP9bkgwpMMTd2aAhvWzZeEw9FfJEmQ1R",
  "key22": "nj5vuUPLLfFAjaFXJeUnYUF2tVvW2bZuCqaiFJ8MexHq3A32Yp2FMdc7upvdp8F5YshsyHJgaxK42DPdR4V1pcW",
  "key23": "2kjCooTB8NYiY9WwgmQ4mc4ATTqUr2eTsySkdmKRGhKq2qzdnkaEoPVP2JrpDM9P21BnxSmRHxfx4mQxWB1kuJ2f",
  "key24": "2BRji3z9eaSeSLdXeBX5Rtm4ER5tb1GagihTgURBHfaFQnstXHMjGSzq3iLxtpPEUVmfbYC9Rsnvaae3Yq9GSsze"
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
