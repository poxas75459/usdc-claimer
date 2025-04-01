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
    "62yHYFdAVgzXmkK3B7iwcQNja6PbQJknGKgAiPePVz596rg1PMmByaviLz9HWQcmWQxXYu28VEXsYkk1QiSNdLG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYQU5vHcEkmaHn9SBwCeNdnDeqwDcp5d5JEKQS6xNHu7LSeGfVtDvg7j9LLFeVJWe4Gs1Dj1fEppxNLYeWniHb5",
  "key1": "4yq8G6MtzWvKyw7YRQZzEEQjqcLavuz9KHBtNe94kEaUS8TduWkyczb41aQLaekp3PLoT1SHDJm2riHgvGM3UeJy",
  "key2": "27ZmT7JiH4a327KdWC8eRFBVWQ385KDPYoyK76WuBtV43DkXRz6y175ZeiWkpaubxYkLtTsXn6xokQwPPjC5PyqP",
  "key3": "5bvwTPPZNm2NKoTMnzqwPeuBXXHiKmLDh5WBoygries9nZxaHXorUHaaTZRAasgVWhVGv8RVSyoMNj5srBPPw6BE",
  "key4": "5DAHjz8zKDjbqtntqFhCsg7e3uN5j4Z3youK2QqspErm1TT21sVzEm8rd8zxK1AtzRcHgUDiQurpaHcveFxyPUEe",
  "key5": "3wcgsYcxyRJXMdCbed2aYekKZt9X4wvcZDaSeAEvrufHQeK2KzGnLhFaTSUXdRqx2WitVZSJsCvf9aiKKqC8VnVH",
  "key6": "5cPrmEQV3ibTeMApNVCJ1RCPa4KDuPTPbMkrFoxGktzJsGj2gaqv8HjdaqXunEp68CV8yXEdEWkj9gWidWaMdyvA",
  "key7": "4BjMAs1ByvomA5cC543PDKN8sEfGDLmAgvWUUfDu4v7FZQnow27iNkUnJ8NRCwBjj1NV1eny3EMKVbD2oLUp5fiC",
  "key8": "3T6mN9vMc6U2uDX9pZY6WEpDN1o9YAJeS9b7Ar2EnS4aK8eNxGwk3TeJjS6DFiFnkCjyua5MUJeL1bZhNZDgSurL",
  "key9": "3ie4NztvsqyadETCNEmphcpANjRmrTjcr99jXBeB4jjq7PxRCpLTBQnX7hcrF33cWmbKyA3VUA4TmCT1TbDryYDE",
  "key10": "4KPx2EfbKzevnJ3Bf7LHdeYybWnUiwnWL2UAAtPvfAgMFmZSQNUCe8D6zfqWLdX3ovLympMAF6Lcmp4kcfpR2poR",
  "key11": "2RrSvGdtcfH47htWcu75uvzyaRXwJD5pB1jbHE2ZV4oxpBnJ27LZYYbENxiz48u3h752vaTVv9CRiTUzQtmcjfp6",
  "key12": "TK8hoWYiYHqDEvWwYpp2pJT4zSxUWTwhJQiDhvCqUoUgnNUqx2Tp4GodhzC5FddeJYape5hCeFePxzz1iW9tEAj",
  "key13": "4WWb3vuSuZ9v4sMPkSenrPc4qdquLJpybXBcghqiF3jkRCHwSnAuiDWspkz4ubBLvm3z41wujnMpBejBFj2NE5Mi",
  "key14": "4HbRVf4gURKzQSCKjUnE36PcEc68TSVkjC9TZr2dbu3PwBk9yoJuAwnFAnk4unSpd7GFGhFwGTR5ncJ5jsY5Ed4j",
  "key15": "2ASbeou4YqbFz9BNo1Ge4AVLS1cmseivhu8MTGQXuT7PXjitVvmcayu15A6DfZB1q1DhZXmZJs491ogmoZu5M2j3",
  "key16": "5Dwb943LH2StY347xing1TExrBEtRkeMjkWzczpHGt9no9xubUNa1jQ2QSN6CvRcHRJehjBL6nCGtCAyMRccfKkE",
  "key17": "2XnBg76zF2uSmxX23ufPgExCCtV5gEXyPoDcWxB3dMD5tbDu2HQYJqT4mxPpA2D3GsAwqXLBiUZKS4CX4hqchvz4",
  "key18": "66ws7Du4trJZVPa5ng6Tg8zENrYXyfyVQfDK87Q8HVEGxdwHZRobwX3GZ369qexai2pqicGKSn18PQpmSBoN7ydw",
  "key19": "3Cx39dAXy4iXFD9j3Ywvn2axRatK4oYv25fGdE7C3Nazk9Dv8JFFynML5b7i5HoWwPKwSDcM9ibUvWsG4JfrPDfd",
  "key20": "4wqRWQKMHkrmtccYh7myzxjAaLAsMGgUcdis46JWjYY9zUG88uv6fwk7vtR2K78ycGweUMmdzxrUdmMNKAUttBjo",
  "key21": "2Zwm2e5DsN9FXkJiu79PbjhYGM3mxwJygjTz9nmues5RzDvmcaZUPAJET3rpnsp1NRsiPyHkvTg3ejQhhrY5afwn",
  "key22": "2EuNjVV68QA886RseeBJDLfZhUom5KDbX7rga4xXDs75L1J65o3VweT45KunpXSi3tTeTeESBssQg8MEiyiPB7FE",
  "key23": "4dE3kE1kuHtALPgnKjECS1gJaEEdarnjUrQLW5RmGPReHSZkDnSkUfMdCQsW8JE9rFijmEjunaMThRd3inhuSQBG",
  "key24": "LH5m44tQ9jzKzqrMDJW1mz3njrrfwM7z2uask3SJqhMFCYQmmy2wXCiUvfYN556LMwUeA4NeWC25imNym39UNyw"
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
