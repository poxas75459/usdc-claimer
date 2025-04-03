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
    "3bZiQ5pYfzrMFZussLSt6uXagQKjkzcrykVriV5wZGcQzfzKNQ21JWa62Hrg8GcoAf65NWHUM7csZrUYwe54Gyr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JtpTKMGM9i66SRDJay7Jkjujz7gN1fv94YWKfZE7Pvx2ECXAdpNBB5rEc11t9gWB2tYPRdo7B96dfGez2yMLYq",
  "key1": "2QRqviswm8CW7x8Xa2SqrCbSCre2PTrLw8iNWmw21DEcEwcrjRZXoL2hz9jMMTxCAAdMiev82N2ERLfSD3825JGZ",
  "key2": "5GkDC3hbzp7nTzytj3kNG5XcxrKtxcN7vq9fQpUCsohrJh4UVWsKjegcGVCpzuqjUkryZPK9zP74FifA8gRumnpj",
  "key3": "4kqRSJQMgCzuGBaTThzCqw7Rgy8LKse7kkAgVCXfXHDUbRs46C3aoXYnQLWzN2pRrkgM71QHULuv2zpThnEghm8z",
  "key4": "HZYQJptKDHPZUmotcSkyfXtEPEVxFUUjUTMjPmzvdL61dyLLCM2n4h8r4yqML6mAQqD2LZDLSjCDEVBVDBeVFYu",
  "key5": "5BFfy8WKQgezQLpYemre7Z3yyiH55uybDe3LvuW4wqasyqCQ31HpbqKfPckryrQvH8Gmy8haCeRFUEno3tPbq15G",
  "key6": "5fZ6zwwqRsKJg79Xe1RwS6DPagNivXm5D4nwu5vLMBrXaWE1MHC4Qr1oAJLCuMR7PbmJtuvpD6C4k3WUEJ1Er36x",
  "key7": "EkNmHe39k6KCXp2YnPN9cF5dM8EWFHwA3ZwhkcWgzUZEW2Y125WFwwsgHwfV9NnFs6sBKcC8qJThTPLPRHM6mzA",
  "key8": "5o9J2irc79CJBJE3p7Gk8b41tRpLKi5g5pjkdHiUehsHQ1KuUXGnMjKCEr2jzanpmikd4EyqR9n998yEyCaudAbG",
  "key9": "2ZaiFTLFC8UeFYhhD91MsuQ9A1R8tnMMoevzC8ASMDvwkSbx7m3yzsiiNKyPevVe9w4huvWrn81PSpJcPxLDs6Gr",
  "key10": "3Vfo518wVvstzGra9L5vGsdeGnjM795YXixEkp9mYnd5vGVhSXY1U3LSEYR9GfoLCURfJH2hgygXigST5JqWtm2H",
  "key11": "4ECT6pzGcP4HTzbpX7FLiG5mxC1GYKN7uorGbPWzZfg2vxnu79GZBkBQojQzdvU5Sna64qh7TSMh2NmZBuDYtsbJ",
  "key12": "4aP7t9CkduBpSA4vN8CX1oriCDNaf35eTYSznvoQNVCZbmE5EFLKtcwC2GxjFqVjtAYwkF5k5u493iEMgSHeoE24",
  "key13": "3mZ3AmWVhG3biCJgZFcdLLE4wGrXk4nN9bPoJ9YUG2US52K6dSXshrrp9CfJ5YK5gyfrxv2EThiNPAL8Gm8RVX9x",
  "key14": "5beRb1RR6ZDucsTZPdF9jciQnyDy8f7LT4EmDfBcZZwDaAC1SV5A2rXwiXBTowYxK7deUmjNk67mZfb1t13BoBac",
  "key15": "3RdD2pFQHt5DMAnBJdNGo2pz5H7Qo8tZcRbPVWhwqFt9ndo7so5sfXP7oJMjjaQepwaZwnUJ2A6XNfum4TNmq728",
  "key16": "4pBp9sESUSwrjspYjW2BonzYPcRh2u4EzA8d44Pc31HjUtn1U1QZkZJW5EVrc4QPuMfhumNwgrFyrKGH1w4kugqp",
  "key17": "5wczmdTqbRqR6ohyoF6k6dRG1kDAWydxC3LYxtCrmJ32p7zwNUapjDuJSZbdNdeaMLfAhmbDvk9CYxmCqaSFupTW",
  "key18": "23WUPgzx23Q5HcfdLbonY8WKBLCcS62VPWWn1jeNEB74DR1KMtcv6JTvk8Mt1Gu6YDjPoXMgJ2FdugEr8j9LgVec",
  "key19": "5jhkfs3HgmvuH6xKBvwFxHySJ9mvGP18JpQK2FPMyJQqmxs2VX2nTZc1ptpdK6C3fgJZk2QsQxX4Kvw8YGYbwegN",
  "key20": "4ucDRLhpe7Xjnw5petr1HG3mgXRqxCVsVyY8mLHZqPVy8ujZPeiGq2XcJWL4nPoV8PsbeCrYegCbtBxuRhaqcCYz",
  "key21": "q5eDwdSwBvCGYNq6CxRdCbBezJxDB3XHbzPJtWV5WUqGsZuj8AtQqRJsWZwck7BfLiqxxY6DPphQL9ZmAqcex6d",
  "key22": "5okh7Fn5SfzVUaF7fsN5yffiPrrGxiUSDyp9CY4LmaD4t17pZfAZEz4wSvsqviBcotYJsWw6w9TNw6YAvAea9g48",
  "key23": "3Mr1fTaFHV53eMo2Vo131wGTV16VidZSbbfZ1gLNWSp5DEgh9FY4ETVsQXseiaZSvJS9mYQb1Ffj71tfp3GcytHs",
  "key24": "bN4GfAX8tZajCU5mCyvxY5YCmACx1sNDYSxUxPeeg8oBurwWgnYcdeYrJvDNSNfFWzZW4ssMHEmVoj44nCiAPPx",
  "key25": "5zDnseytLAzrZ5rRdoGUZxBJ5V7sUJytaTC7CozrGigSGjCnexeCqNWUokWZdonQaNzno9oiudZGYQLsJiGAuNRr"
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
