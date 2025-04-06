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
    "3KjseeuN8GqoHNQSzw3NqmimJazrXfa3Z9oVC94Js7hr66ysQUvgwYJa55C7jPHeRYtHBhP1pQGDomZ9joYc1Ew8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTub7hDn1DA6qk6xfLf9Duae5LdjZTHTkRS49V5vYS515AwBQynHoX34LhagkogWxysWFTGJS3YhEPSmBnA9b24",
  "key1": "51Zc7tJNFnXAd7BJDgnrPdGxoEcCJBjwGs2Yf3fm8c2qQjWbS7SgVoLUyNMtYPCZUf3GogfiHTF3eF4FnD6RYg3q",
  "key2": "2fcRQduPSPnxGap5q6eihPrRXuUNDBfZ4g8fJhJTPVZVdaH5keGnWToANGPszZTDAgfzLrbgCS3JHY2Q5s4F6kSi",
  "key3": "2UmEmPnsYrFF3Cz1cTrDWzxhtrPUpMFErtnjUq1gA4duKTSGEFqKLGc3JUNaGpn72bLsgUTnkg7wDZq1JgPthxCs",
  "key4": "4CrzF2z4BAKgT7nDnZXoMpANUWiEquG2D2uLqCSifkL5N84WKZAae2kxVUzUDfPSQujuNZy6ckryq9SGi2xUBPD9",
  "key5": "5voU8W2wArnfymrQ6C76fNgWo4AketeEXMEynGbDBGD7PdLZ9Eav4hTkZEcKwRSDakjhFL7WY4JxMFafgddt3BiG",
  "key6": "5Qsw4BrRPFNrXsQjNADdr1sugeoxP7BiJmDo35yw8UkagzPfuP2JKVf1ABe5GvwgCsNFiu8iVnnLDS98YGXk1nBJ",
  "key7": "3p8aKade1LoygbDe5ytfgVzPcL5wN6LuqTFFNUgfVxfPJmmCV8AGHGecDEdzEecYuyqCULYGNUSa7B5fQSJfmNEV",
  "key8": "28M5YWHwyuz2euCVRmhnnq5ebKUYXEzthu9ALAseLWkW51oV9ias6Zd7vZCwKHwyhvnTMtWsH4zciYR5YmL5w2nG",
  "key9": "5ARA2cCrDgG3Wy4y5eNbmPQUZ6TCJXmisib1Sk7gzrQkSJUK9sUM8p5kzDnLRAT38Q412eCuHWeJYd87C1MLo1uL",
  "key10": "417v52nHwQoYFfioDziKrFPFbFhQUJDrt5DdWkcABDs6bDTSPURyevKthskhyBwjRbu6J8eWwbgsF84uaa1YC8ZL",
  "key11": "2Epjdmcy4KYU8776eXozAg876jckhDToMz8awFAGeNPFTknY2s8cxGJoi6qxd62d4VEtovGSnz5cYbGMcyu4ePxK",
  "key12": "2hmznQDhaLBMST4YetykBAewRMvKy9mLokmAHpBmyhAizQ5e3yibLwJCb6tpPokGgjrMhJWgQB1ZNJP5oi3Wzdcz",
  "key13": "pa7uGFLmnn5TZGenTx3MtJ1goyoYANXNRnP2pQguAWQdm9oBFhpuWhB9E2spEjRE2TkKP4zWLjRgc2BCbnw4PSJ",
  "key14": "3KQY1k6DU6iE3YyYQwREX8GcBxsj4JyAtCZ5ZqpM9MKDqbFdJpgPgx7YqA33W7d4fMgso6G6bWzth4Jp1GL6QfkX",
  "key15": "4Nttcme3Cs9WmCq3XUdYZRnJYPDoSEwrWMCqf5nit9GDL456bR4myScwbp1tnvJDu7NZECLb86toiKRSpTgypPpU",
  "key16": "Df6VH5csf3GXeUbL5JmGA1VpHsc7EPmUa8sHH4sxqKh6QcRHsHcK1EFjKMbxMTN6xUrTbthccGQp8APVV5e91QW",
  "key17": "63JQTAUPqHVNqGTqCTSjMxyhbSBfhSbMN2FJEXWjifFcB4pD8dCSTwwFNcxvDfMuHzyT47keXdoZLaZn8R9DWQwL",
  "key18": "4VUYq92cJQ24tvHm6wg9YadwhMzcbyXJiydocBMrcQ8RcxAX82SqHcHYjHjQKj1Vy26msRamJbGrAZReHSmdPLSS",
  "key19": "2vhFzss1dta755g7qhtVS7otdbswH746CP9rVWSpAvtLLPLTz3C2jvWTTZx4jbHtcfr7tzj2BaGYSXCxnBnuU26E",
  "key20": "3sUsx1gXENWmbayJZtFTBMujvv6Eth36G5WpVNqYFaJzA7224xhsahWCZEs7EGyS9EEW8V2pEriLVGNb1a72y4aP",
  "key21": "3W95ceeMhma7Dq3YqrYXewBsZ72pJPNuTnGLp82Zy1x4rJCakNAGjtEifFYpA8REiZVdCHV87iWF9QSDeqiqpsTi",
  "key22": "QMN3B1oQjLAmxV1Cuvd8mbkhxVdjd78crE5Ezq4ftB5gLLqEmNE6GX7NEoJx5FcDMoR1rDQgGutPTfGQGChLciN",
  "key23": "C2YYXV8prPoKPC8s3hwJQ3MW8tfCeuGyC9WJ7eQPUNz511U1Cv5fowoKrKF5bfWAkgeTUr4mAvtHuGP1PQTyisf",
  "key24": "55oK49WtubPFhRk2CfP2tDvBoERxkbPrqmXNW8WKkqELPpwkfmhXeBJinDaFMpfpHmUQjEeK1p5N1YJ64Bzerg2K"
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
