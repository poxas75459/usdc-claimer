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
    "HCdHFQtB4Wxn8SQWcLnMupLGGz1hQLDzhFhkNjK4vnWZKhoTRzNFojD1E1daiUqQ1JiT5jygWPsbbgi9vR7XSWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wbxg3KHuUMVDiMQW2SA7y6aaxw8iTUFsh64EeoP6UKTXUHTfc19vuTraGKn7NrwKH26LBF1Npb6eaHMQRQBvZF",
  "key1": "5k87DGbrtCdXi3aSWTfnqxn46NbeU7AdiuFpKTP3uksEmtgdeaKy1iLM1uJsqk9SCTN1KkdpsWfEppD1M5hrvq87",
  "key2": "FHhE8WcqBiy4Qxzn81ogoNsVJ6ECvJsE6bTdVfLRkibyzaoSVnMgF1oAdjJSrEdZrX22LubCusT5LfgFjqgX8v4",
  "key3": "2pGoGutgJjPgAMag4cG7xvycgAbG1TEW8reGJ5VLVrGncCo7Tgk2a46mbm7oFsiA2sQSE5edvqJiKV2mYBYbEjYS",
  "key4": "2HLw1CcghC4wYUC8d92UVLjUTHzqGjxbiUakV5GDNHMH5WbDN77FgwXGeq4ekgPU5QWGiWsB3jaS6AJS58LqMPiR",
  "key5": "2NKZYGrM3csAjY1hg3LV4TWKveVeSmsUdXs5r4aWYdjP9LcqtsYBPBascDg2R74qv8Ko11Bo5UP9dGJs7N1wzgf6",
  "key6": "2LQoqrogYkfEZLwxiqhrpuam6Cus46RSHrMXqi8thm4tdLdqw1d2FThMS5v6adsbJ5HQeDboffpmqcQFrEsD8Nec",
  "key7": "4G2F5EungvzTikixAkzvniG21CF7XzNAGwTJDKvo96drovsZo3UEzxyqMpsg8id3fxi4JiD7Xk7yWcKfnfZ4wRf2",
  "key8": "3YZvqReVCfKnMSpQn7HuMRaRL19wGDvH7RBBf97YuKvJhkbJgqEkVo639G4u3gj5EQdKjaWZKJVjyg4BkLTdnTPs",
  "key9": "2aPM9u8uz4drJ5WjcRq4LivenJRHY57PWGfEZzuQa2XbwBsjzHgA8yP3DjvST3NqfCwZaz8fzTGraHPqrGbW1iBX",
  "key10": "3jUjsaohV7f6SsTN14USBcky3qakRysFhGfHKsj92xhpbQqUEzefAzW1gGKkFiX8BpnYhD29UN5f3hCWrHZNSe4j",
  "key11": "2X2inFAvT77BvN9hdYH2soGCEtWAxPMmsDRhjoGeoYZshVEi7LbxnXLx3YYXvza9xAvhbFzfqZ5pqrCYRedmwVW9",
  "key12": "xJpu9TibfEXhzRfHjiLaDUyF75QRUbt65qcMKZjxm1e3s3n3rYmZosvaZkpKc5wqH1teU51LPLmXK8tKCd4e3RN",
  "key13": "5JubrjkX3iU7ZChieCMgH5sbYdZ5YsMwyK6m51urj6NS5YCtUzy8feM2AE6du1f6hjPubYip7jaipgeJxEhVobb8",
  "key14": "38HyRtLiKSZ68V9rxgsvc7ezcC1N2YRQqYJQ43QPSetqghsv1yH7wdFjr9noHyRHsGA1BhqmATvBA1mxzCLhzvEi",
  "key15": "23LPprwC84nbmVCCAWs7idRGQxNoFbGaS1913Vv9zy17r2RkzugcwSZKvQtTrQ9FevNmcrBZnpLwf7dsgiDEtrpj",
  "key16": "3e62f6L4cDGN1XAxbt1q7Rm4F59Gnw5J7jxGuhBF42u7gBWd6ze9iJYeR8payJvnwCaKoyhBzoWTq1Vdi8DdWZGA",
  "key17": "4ts1TsxogPw47ZurrsGZbZiH84rnf1E8HkhzaK3P684asz67qbhhm2pic5sxjVdzHtKRYr1hUMiGYZGrTmCTPwM6",
  "key18": "4XLYbJtQcbf8iBRPjkTS9QPXwGdVTNZpraJAiL2J6E2ARUFxAZY4z71inTpjn3cZtXTduBP7dsfDrEJd4i8t5zQJ",
  "key19": "31QRbsXGbizdafAWToSmqHGu92N7i32hxXgKvUtLsxxg4Cpy5jxkg1KqK2CDRcsur7ErsoscWveoxafHwsW9ZEc9",
  "key20": "4ncT1LJCtVr4wNBDmQY4P7vmQhYvnHLshzwG1L9txQNRRdvAM5XeUKBiSx8JnCEP1cHGvkf5njeVZ8kbvHRmuAq8",
  "key21": "2q8gTdj6TyHoXxU1v7FgjgBGdaqYeLCXqnt2wQWBV69ytFs46fK9zFLUSN9fQR6DTYvBfvoh7AVsxqukbN1eaUKE",
  "key22": "5ykvqtkFvFmqQXexmcysTX92UTGvTtQCdnMkoWVbijQ79gc2f5JRWantuwzdBGms5SWXAJAr48cbfK237QSecJ3N",
  "key23": "NFKFyXzw1XWqu32zMKJ4DUaUHayrF1CC7NPNfGDF5Z3bBy4kedvCon5rApAHApmP4UsTHqSCwk9L2NpfakGR6xV",
  "key24": "4BYhHZxsmAH8Eed53f4zqTh8yS73XzTC8i7KXdgxHsFYy7RTjGXKN1dD21pKJex5yDur6kPJwji9RXqoZK13z377",
  "key25": "2pDg6NoN3BAEN83Wb3T2XneNEVEnPbDMb8Ceki9ALuq3J85TQqxzJ1VcStM5RNmjn6KqsgZ5DYnhGDwPk2XLXbi",
  "key26": "5Y7ZUUUyg7ZewFbpkF1i9iRRGoqcDFBjRAQhcH9H9V524A2KKYZ7HwDbmMDUDhPttANqHFYm34YCgJU2WVChBUJm"
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
