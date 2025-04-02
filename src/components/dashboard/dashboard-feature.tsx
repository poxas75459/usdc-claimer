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
    "2tpDVYhY9psZfJFxJDJQc8toVYSas2ArdWi3KSqDeMfA14ybLAjnSxNAADnFjGLFSCUQQHG9QvyqetZhqdhEA82L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z1RpyiNEfvydciHSyNJAhnFmr3YSUbiih7mYM1MqUShWFd2cCZAA9DByBEaLBNBqthKeDDHC4WZQ9ZeuCGRauMD",
  "key1": "2xtz2xBCAoVUbnR1dL8ySS9nc34rs24LL4985mrG4CLygXTBPQWePQuNq1uNbHCJ3MoP2GsdyTavzTNcQA2i5wpu",
  "key2": "3k9CkHucduPF1byefoesFcyoGqk2Y2dXMcHL2BDmT5JVs6eJgCPxngpCM7KcHkSwvd2NwGiSwZ7vStmXc95SZnHC",
  "key3": "4LYSYV16TU9dWRfCUoRMwvy6wn31KExW7Zaw1bQ7GtW1asuExgjGMhcoav9qjeHvEkX28LU1enxNncVHPdGyPuiA",
  "key4": "4kjRwQoYNgs7vjjDX7WU1Hxom111ky2MhPq43NL62gLCskjmvpB1mguiAfE39L9gYtpZxnwocf47LyFtXDcohQLq",
  "key5": "45gSQ1wV7kxzz7HCaph8W4kbH4aTBQgVN4pdnr3gqqAnTvCoFX4VD4MSsG3Yp8sD9Znu8RoCUoCsnUUr9WV5e1iM",
  "key6": "4AzhwNYd1JGraAnH3gz7dnuDUpCznmcqcsjJRZif6Uz5ZBTe1hC74ZNu3STD7TWpm67pye6AwBS7CVLGMsJnwQt",
  "key7": "vsXuyoqiyskGi3eHZZKWR9SdRP1ZcwBuKQq2aqzSUy5JqqoTGsLSpev7ip2nTQ9nPp4BHXvoqisPGHG3Gs2JF6V",
  "key8": "2vJY2HU4jSTwVFar7gs5cczwhkvfVVT5hoNsEQGJWWpu8ZzBZqHc3i1J5CbMCqk73Sz9GJEbFJ3LhCwqxNV9D8as",
  "key9": "krxMC6qQi7Nb6sLdNK8NgrNyK2yDiLatXnkGPr9LbuU49TfhEdcCqcdgP3zYsNN7qn16px6PXC1cz6tsD3sNv7a",
  "key10": "32TYcshCBbXeXr9rbyouxatzM2mq5SHFPnjNQ9bd3tfvXicUmATPamCrwi1FcJwxL8r7feFd7XWHxMJ9RSCcjNDd",
  "key11": "2AXo5Zmbx1ULxNc8HjBCxEAF2WycuEQJfMcwpp1KsXthc8QHLhTZPQtephW4qxxryqzrgqFFj4jvXGc21eJefWEx",
  "key12": "5k6nxq4mPpnAapRcKAR8kjh4jweKYJ6bQyENFkDVdt8bahNWqj5wgroN4h7t79aKqnuLTBY9CxcPHEBF688RkFUw",
  "key13": "51jXtnvqoPUH23LeghUDqTBkSLQXiH4swCyCAZBSyiWKzi6NKKmCLYuyghSaKu59h4g5AMdCewNJnmqH9ZVUFHPc",
  "key14": "4Yit3ERoKuif1YjTRBcapNu3o1MPa4ssJkfw4Y7oo4NsT4WMnfQeVHu5b97MPTSN5ZR9vUM6SXgeWszpP5qPSCpw",
  "key15": "2o6yeLyBQnLteKmb65NHgTh3H7G577DBsisMETYEtB1YjGn8WrA2E9MzxoWxYmtwRUjyNvvvJ2koGGYcenxVbD34",
  "key16": "5wcunnSp75ApVwzYobgbhKyzuCPQDWz5grec15N2hvNavDDJgRTF9ieq8XQTfpEFKmgRYQjxnBEBTa6PrShMDuBL",
  "key17": "2A17C4WH2R4AviFwk1K6sdZGx8W4DBscTxTbGocXugpNLxv4LC7194g8xC548E7WCEkhWAnLqFozSEWAHdecErY2",
  "key18": "anx3GrDbQw6KsKzCiSoRtBq9XoLUy7GGERhAphAH6qqc98JfgATQd6pxjPGG1BxxhdxcWT1nx7B7yqTjTwP6J9B",
  "key19": "3L9xtiM4GaaCmQusjiX1R4RAM9PqW8jWoEZ2aFDGMKtx2dyTDbftPhLCvDYNjANcHgqd4phEKGtZrrMRk9N74T71",
  "key20": "5sXoGGLZYEooFcZxtnb8nB1oHQKrwiStTARGskQCCaPTTu1t8fTiRfv3rXaBbKSxLGLvSwEMKqkEtCtLMygnWk78",
  "key21": "55skWVcVhr89h8syjSv9XhtSz1bfQAzxmM3qn5bYE5HiZ2tmcHu4mfJBLzXvaQXa2LBJnswVyXTzYzzisiMbJYpr",
  "key22": "28weUKrc2gwYLHsVTRNVQoPwUCjRwgjHSADg2Dqe2B18A1AKPnLnreDSJD4ifDc244E4AVT7CTyxyDWYLyHwuDx1",
  "key23": "5K28hK4gDAhAKu8snWxKa13ef7FQUDN9adHQ8Ej6hsFFUPxMoBciUpSE845G2j1YUczw9Qi5FFNeinCK2PoZC1Td",
  "key24": "3ebaujnVeK3Cw5AFdd2J216i82gYhFmuvmQb8yX1YMsJSg5HECFEftx6h6ssZcJkRzDowNpLywHrTNejUtBk8Ezm",
  "key25": "4FZCt9qxsSnQxYpC4AN4rCoRxJUk6VntBjmNcr56qMatbp8stw3jWjw7ZrgTGt431JfYJuudDP6qgFQ4bwVLzMH4"
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
