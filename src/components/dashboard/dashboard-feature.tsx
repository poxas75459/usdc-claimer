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
    "2bfzsvevXKbiWuX1YUBqZFw7v2s3vofpniHgmgWsCEKc4RMCsHfjUG9qrkzL5RRYgKrwSkpm4cUrQmpy5QbNPQdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3ke1NBo67GYQdrppDhN8vVZ8rwWs9BJF8TCMh6fdXQhgnvnJR626eWV3bcwF2VoGT51MeWjP4QLizLLAf5AgGp",
  "key1": "4AzMEkVnjzhYn2FqvLsdMSjBpxmxBr1Zqr5UC9xKft9hLJ4JZzsAF3eUYbj6rWKeUu8hBkMydGzZHiv5YcLy7Gwb",
  "key2": "2nqukpaWqigbDFgJZMbbBRXUGotYC5azPNmvrharg62E8gUMvcbSjKkFVpHYQUsbY7AadWYFwA2GVTkNuMEbgvgN",
  "key3": "4asak1SgAb4c7gCi8fiKiQnN3vQhiqi2gp1iguXYEPx5csroCQsc6Z7nY1iCGZojb5rnntK9wyam44ViMQxLQGzJ",
  "key4": "3NFzrDRq6CTvVRzFpfQjX748RDfJddcVxiRRPtFHn8LCamWFhGNjeihJpo1SDQpJck1SKrcRJcWBJNpLW7hLL1TA",
  "key5": "3hYrEkJc8EqF7LL7YWEZamAaxEsEzyxUHoZhWbkKBM4yHdz9d6SxNxY1GfXkfbp62Hs5y82CpdgvAFUvmiwjiJA2",
  "key6": "2UZu1HTRy3cYDSxhNy1jn4mXCTd7znYcckvHSunENKxozaCvzuNELQxeyZ3mionYDE1iqHMWhrFMC5RS6JxnNGXq",
  "key7": "oW5krgp5UpjHL7s1Xn9wnisMyiKkBcwytbgT9jMaUupZ45eM4o6C3Z8PT4skHSHF8vaiF12baQNiam7RpHdGEsm",
  "key8": "2m4iuEF5F8dTYofgn8RyrWmzEHzjyngPTfaSqgw6wwZthgmrQ2okjutU8Tj8aCfSY9G5b8U1vm521kd4g6Rzt6pR",
  "key9": "3SHt1iuzyB9GxkkdoHTeT1fWKZSHfTaecChNRGnsWC3VLdqvgSWAGEHcyUUnn4T47ANActvV1rAqfFcGjhBzSBAj",
  "key10": "HFZKcgSzud3k8x7zhimZuSLsLRKmCRNmu9eLeJdWqw4LM6dxcvfrU3SJhdamVYmMfvhAqmg3PPyFhjkLLBZfGUL",
  "key11": "1hx8BcrvejRiZWFsndzQLXt2XMe8awx51g9uCrSCFucvtHkj1LvRAwgXwidbPxUTagzH5mkNZttVcyE9bckEts8",
  "key12": "7xQeYJrXUmdDFG8HeDAf8veAH5BhqPFMGfFEL6vdGkPbG2K3UPLwJ9hrAgaFWagF1t8J5ujiVgnrwTMSH1B2ha3",
  "key13": "2deXn8MmTaTDyVcdTZB5gtmyVYK4H2ps4Ae5e8Ln2s6tESbpm3ALjuFDhtY15pshGgJEdVk5v7QF3n4U3ZiqWuMB",
  "key14": "3SYJ49WxbcRKhJq9F5nnHuQimmE9V22aZURq9bz6Wke4kLFPumRjBtY7ggqb8DWXML4GXisE4FncBeXMnCdqD9jv",
  "key15": "go72MWgmYH8i6T5TYdWXEB4Wj6jRcEvHUyG2wshDwN2SRdtPTPegN4KHXZPHgkTWD22MfbNjQ2PzG8cop9fCALJ",
  "key16": "2KQ71qT413XcQamY86VjGm7rQoDvz5mhuxi4agSys26gteRf8jrywCxWkXtQi5wfDafokZFa4FY9G6rGCEJtT3GM",
  "key17": "5dGRHyD2jUbLV6jiVdVtuBU87eRpwoYoyBwDc3yXKxcxdUQHGTyvitFDUCjUcei8hpjFhh6PCSy6jP4MXQYqG3r6",
  "key18": "4cJC6q2vUnScYm35anNmneen3b1ig6K1SNwKpxtGGp3irMNHw611iPou85ar1ipRoyc9QrwakzAFPMQFpK51ho39",
  "key19": "5kEWD5sL7v5gQhUwfxWiAro56GPerQN612e8u6RbrN1sQnQpeNEgPjjrDEGFyicCXtyw4tDEVfacvUc8N9oV4nux",
  "key20": "2iEzeuYaVs5btiBNN3sjFVGnma6HUDwspAkMFY6syDLhjz3s1qE18pcbJR6SyRsQG66kVfnhDvuMXEMofQx2uxaU",
  "key21": "gZRPPRUhwLjtoecZTshkcwhRY5HJBfLKoyjJinLEZoSFDqQC25k2SpfjL3aarzfJUzCJCMyKg2SpVRRtnzs9esV",
  "key22": "3etqxz5gPfTH3FW3rThKxNjpdibPjF9Q65M7RRk1YB39521EfjNfLNoJkqMy4BgcUuruuqrJL1U33zwbDRydz218",
  "key23": "317DN4YrNAVrVYu7jejA6S7v79L3PKmHdjP73igLAqV2mR1W2cr5dk7G7rpY92YwbWsxHhhwDyvPtCcQnYA1X3ze",
  "key24": "3No5o1HLkQPorkHkG7yo4DNBoaPmPSnqh2xwWLk3TXmo2ZaF6Q39rBMXkEvEBJKqGtE9wCBBTfxqMKsYgnBktdx8",
  "key25": "53ZK6pML67AAiQSfPMWoFt7mcanq59H4SoMA18ko9vSa9hfu45q93firaF4DVKxW8bUbP6TVZgpKKwRPEPNZmTWq",
  "key26": "27711bBv6UQnBmW6BJ8dKQyKjhC4Wps6LxkTrYXFby4TtvnJNGnakFQXnzaEZyzxFwUykULQA5oydk4YWVqxEQAE",
  "key27": "2jNkrhhhuYfReWXbjCwFjKo8rNhtwBhn3d3biLVavCnSQ8qBY9oiLs29dPGtX6c4moHhZfYJ2nawtuLkyXtzwbeE",
  "key28": "5cXHVWcvgoBiUJ5PQLPg84T8YRULyABk32ZDL5C1dGTPdvemXBhCiMGBvekRzk5BFq2eiXKmizvGXDtb2mqZAhWB",
  "key29": "5kyj1PP24cK1y4xPjtkp9YbKYTsmUUxhLu8WzGJ21H898YuyG1P7HmyPQvmoXgxpqzBmHL3YnWryTRmxAwCwGNaT",
  "key30": "XzaKanmMXWxiiGVrWwhvBQsYHJ7cjpr9UHQGw1dAHQb5dZjvjaERi2JrvAQVqbCDQLMEXK2Ykin7pgi4819QmqF",
  "key31": "2KeU3a1jkea5M1BmYHVWHRkQ3ceUSMdVBHhpvUjqrsB2a8oeXsb8ZExG7Sxcrd6LEJC55fyaGWbGLd2SnKSmrPeQ",
  "key32": "24Bz1v1vp5DeFDwu4KHcM9VEyCi8UdFTPN92nJoU9iohvEyrExBGX3kpCSKRJQAGPmsWFLgzKmJZUbVpU7f7txrq",
  "key33": "5jGXYWJQ8813JJkLpatoZkAMLf5g2ZC9q512WqQhWx8adcJnyLtpbhaVWcPq5z5YzCeSgNc2ad7CdcZVCxBe3HQx"
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
