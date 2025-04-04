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
    "2gpc3PCgXcWnwBmifSWPrMSx2d7VAyg1YP7XcEeY3onkDdvETL6Jg1XMfF5GixUhTnfWARHDbfoNzPeWYMxa3bzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKyEwxTnG3LXbzhVmGCBR647wg34DQggsNeESpQmvKkNQ9TXd98oFShtXaV94BMrQhVb3tUCJj7P3H6JF9YXhLi",
  "key1": "5U3WV4XTUkFDJfXNN97Rv9wvFS8L3sQNURzLXr7gAPAW4U15BzNLKw9GSCECVuFX7raANxabcZujhARJbttoaBpG",
  "key2": "5aKfdGQvTWhfiYW5G7FooUjfi4yUcuAQ2ghQVZgEyiNXuq1YiqjRr1og3TUZT4kdvPdUUGw763XFnXbsjRHgDdVo",
  "key3": "4yAZRZcYp24cXHu55YtvVd3cfc13jnakSt9bRK17HhnUBzesLDgKC4HkD1UmP8XLYipsaHPWPxyEXXvb76mhSjXn",
  "key4": "gpGcybyVRjSPS8vtWgdDzRH2RmPYaJGbhgGdAadLTcsNxsi38Fvebnz8mLY9SbkbitpeEt7vryg7tAY6ruQzGED",
  "key5": "5HhVktQSRbeF6TCTcPszmfYwBcct3H5TgJrYZTejiSsWbff1Z9QTFM8B8VGi3g1C1NPj5mpyGVopdrxcX99P6ETP",
  "key6": "65dg4FKFKZkmYM8FENdLLLwFMXSGyru43GSDyFzjTUpdU1GqJVirznDJJEXgC5WqDs2BYCgpLAyZ9MofUAnn18Pi",
  "key7": "5UZR9YoaPp6ET3JUCkLayCpLKturmLTQ2uua9s5dbk22EoorXchu67J78LfW5yWiX9QmH4AUhc6hgjxf9cbVVTEY",
  "key8": "UHoB1Sw3LdzkcpLdZyFDMPvk8o1a5ABTUw9LRisQ4aBuuXxrUULkpU4dAsnQioy1sYV2jrseMK8XmNnMcNE3G2u",
  "key9": "4WCUYBKGqKNikxXp5bzMZ3u2vVVFV3LfNZjryTf8dCEsCJiFQ7QxUPCaFe9uCpJH8kW5xYdd2XpHYJoZKGTaCdu",
  "key10": "2LCgBUdG5F3Ef9344PWnEpPX97uyPsLDuHjXSvPJezqo71VujXqG8rsDjguUvdgS6N7rJ7WEDroUjew2dM7Vu3Fn",
  "key11": "5HiHsJXCQRYfTmrgfjYWkwTpac17EJ5K6KPAMoYc2W3f81GoCH6tuwZPjr34f5ym2fhEv9rTsX1DkG9TDvYrSwRs",
  "key12": "5dt8DrRaZ9CXSb2jjmZBpKyxDhVau2HPzc9oW3vn8V3s5pRitYMb7LC8z9JsJtq74ovRyc3k5bqH2j9wF16V6YdQ",
  "key13": "5PcHroSzDhqVKJwQJWt4Wgt2cQAhTAZ4pYzZSxbgL43UYBAAv7ibURaxBK2aJc7XE3YoywuFJNMvkYsryYRDeAnk",
  "key14": "5na78MUSRTeq5SmkR41Ziv1KEXsC78HJ6gurzRqi71q9pPN2bzgsC5LSo1R7EdiENvMoNfrH64eHtriyLhpgW7MX",
  "key15": "4na6smHH8zpSkjd5trymHChAVkdJM36gdtye99U2WH9dupcGLfPMkHsvGEAnZm7k598FLAAgFhYRauHGvfiQzAai",
  "key16": "4ZqiSWkkkrr4ZfmuGESgh3oge4zjBeRRTGsdUfsKFAfDrkUxS9LJ4zRbAYMptnJjWModarLjkTcyFiS5RPny5NDq",
  "key17": "jD5i7sRq4F6pofDsiGNt4GtyR2m2So738vRdkNUSQbM1JJR5wKjgfHz7LDvywRbM4NZ1hUPHyog3AyXy54oePxc",
  "key18": "4gwUGvB7StW43NC3JJtWsaQtmyhpXfcMwDEQSr7xyj9K69j4rJcaye3Sgc1kKiXV21cKNj7Fc1C6dbgi3EhUV7Tv",
  "key19": "2vzn96FZMvguyKt8DTRcRdqw7dHxScbEdFF3s2mqG28trwV2sveHEGEhXHD3UVrfkQyLGAX9k4HUh75ZDAr9LMAE",
  "key20": "TWrdXQs11dp6y5PMz1wtS771PwLG78UfgPGVmqeTnfqy55ihDFP17SB8vjpz6cDQtVy4YoHrQHYi5FHaivhBvPq",
  "key21": "3CaDZ7ZUEFnHTimucQXJrUi5i2M6N7hUC34eL96qHuSvxDLPDo2L7Trwfic7wEgNP1rkw9XevSGodo9JkqySbfSP",
  "key22": "3RzmiFFu1Sti9t1tFoRndnontxQXf9MRYAWsv89dAsvRc4UBqTbjrQvJPcPmXDaMKARyLAMQwPTfDWvVtC6smeAo",
  "key23": "2S9qWcKJoiGWGct5fsg4b5yqbbLy8RVfMTHUWSbQQHUboMNenPPeFzmMFjUZknhmipzKzTtK5FTeFpv5Wnbp4BwE",
  "key24": "3mPJaRPUdpXN4rgmwCE9yHp7rgCQMAYQr67ihdj4eKKSEkZJXdyrJqCsJNag4PGaxkhUHfvDog2qUzpEf2BzMcQf",
  "key25": "3eZFARiftiX1WkjmqMFYiGtHGSHXtxSCVobMyzM4eH2MyuvfyyepZS7nC7oYnUEMdWRuzCszH1MmrvaffpYoTi5h",
  "key26": "2u4P2HHTMDi5v7w9o4P88PESbrqKL2Myc9gdK66STCkGbxpEyioKLn5jNgSvfuo5qyjzG4d3zH7DFiErdaZm7TWH"
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
