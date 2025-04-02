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
    "4rgTh4t4YZRyBfzxhJHZqZXmVD1Q7AGkdrtpq5RmLRtgiCNwZioZS2BJDeLix974bAWj2XKDEjjvEo7HZGgX3GYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BonLVoZqrzkvnyXDNg3MxAMMj4L3ovdH1Z9FCAndzj1xxvv7NZ569iiHd1dfdVmHNvw7opEXdBpsFADNTAiAiBz",
  "key1": "2JBKBdWv6o4a5hm7djzm2Xj7pMh1xZ77svpXwbANef4CdPNPaZqc17AKkXpPhD15dF49SLC1JbUW1oL8x3VXMxnE",
  "key2": "3rGVoeRXTwvfJRYhgJWrtKErS1S31B3F4uXLHdyNjBobZ7G8GYmJvmS6eWmbU6tjX9iTiCymsLJUeXSQQxozGEkL",
  "key3": "s848pZPhs58SkYnMjbX1gH1UvrvtMpEF8YAAuDteKjDQvcAE2cPvozLwzCmUzpPLVBcDG3Yfa761yRDwqxcRCy5",
  "key4": "4LENibyGGTA1ct5XoUa3o81twXDcaY5PZjg1iKq8JQ8HVokbMegHPNPCyKw1wqHseUyJHLQoHdscz1LxKdVUnHBg",
  "key5": "3FLH9dRJm72v3ipxJYW94YJAi2XAkAW7x8WtY5Kbi62JGWWJ7MarpMUbuWUyr2oS4u2NYhYnHHzdTauaBVCEvJ9E",
  "key6": "41bCw78spLYF84QSdQQ5XYFD9ATu2HSHn1dpFneSgJZGoy8g92M2qmV1Me52LfHk6vcsSBDCpfxifqZqB7RRY9CH",
  "key7": "5w22Z3PXKTWmnSQrJJubQnAPHWox2Hwnqc6J4Ti9yEtnfzZxJ2iUm544z2HSYvxvuXb7iHMt1R29XRLaVXv4ubYc",
  "key8": "2vTerZJ7xN3B73vhQx3iZykpXZDLv1QXQSySPRE795eUC5uUrHc7y9izsEUXgV4iXwnmm3NMY37RK5ErquMk7Dqd",
  "key9": "RNSxASkYroci89UxhFpb1sx3S2bq5sPBXCwPBizuQUypcmJuSob7pp2b2FQqUVrUJ4DvupL47fzJKqZZivvJB92",
  "key10": "4QkvXsZSV94MLvVNH39tZibtSjHrngLGLQ4CRUAJYuBiYWMEGUPJv7tYujF3vB6yBu5rRFxLH8em11NYyHLh1AvR",
  "key11": "9G2p5G8DGRbcio3FEaKxGdhVrr2ceeJfD5EqFc8BP7xsozo1p87XNMhTCoW613vNMryv2UppaiLFKJnN7U9SNkf",
  "key12": "3fEr7DFb62xCVytN3E4wknjd9bxGvZFUXup3XHdBZ1PTLx1yfSHVmXLNihK2mCAuexxPhVGgFq2gQ22ZLL9rKw7w",
  "key13": "3LE36H7wxPg5JMkaW6rNoT73FRCTBAM81u3n9Yc5Gkzq8TSTqyGnSDCYidYoP9m8pBTBYyXvHz6AmuHvG7sjaEu6",
  "key14": "YdLPFPWRXYSQF8ru6o8F61YBxzmKTjJs6rKohriZxTgenicuvtAk7nKtUBfNtXqKgXvB8tjVS7zHoH7spS9rgtc",
  "key15": "4oVtsaVyRBs2YjRyoeFttCcmQFmW48gJXZrdepjRTsDb6ey66RfN1csQePR9stq4qQn37Fs29tRFeeS19CvuaCXt",
  "key16": "2xfwWynHPNaHNP65yWU5V7T3Uu8ZYGY6UamCeniJVzrFcqW3vymgWMPz5ippGcYRVoQPJrrbhW1KPJQtAaPC5ToD",
  "key17": "2kRCoTqE2rU2bkb6qohivB1xZ7kFtDJyZvekD71CpsZiQyZ4aQS6DmveWg5x11eawDNkHesXwUqBoLp296xPLdqx",
  "key18": "2yEV2y6qGW9D6yXoukVdgPwRmYgCquxf3dKErUyg7Q79cvPvRRX3swP5VzwEfBNioKn6EahN3Kyu5cp5a77jwn2o",
  "key19": "48tftQEPoCB7YoWnF5AnoGgzeQLKi6e1Am3BMFsQR7mZyvFcNieH9ePHN4wKk862oqUCmciN8xqkZ9Q8PjJyJY3a",
  "key20": "4bDBHyfbwEVEx3c9UVrvMojGMWS23pAQv1okFoKszDSWRSMJEZLQ41zcZJo7WMcam3oKChgHME5kDAYL4xAkU1uL",
  "key21": "2GarcDDku29RM5JYvxJxMVprJHhwg9wjTwjSNxrrW9jZMiYX8GsFQF3HTom4wn2mVTu8KbJ9sXcWdQgi8DcurJ1C",
  "key22": "24o7dBFrNTd2i3WscVmbuiEWPHDUhDnD8tvM6jCZfXyUCLwvgsSyP9XcugpconRSQ2J1qs2GmQoGZudpfaQHANZx",
  "key23": "26YU1jDnom7FXDcNhBVev3zyREsvfFX7S3s7S8uogsLsxvLUg1gbnRqGWFd1WAcraYNyyY9GxKCg2SdL1PbDXX6i",
  "key24": "3reQrfnmxJnR1dd2G3zU8Z1p9EPxQqhYqq2PAqQ7dEGudBhjJnqc4QCnei3nQ4uJrLgWE5UZqwbg2ByYqL4J6TkJ",
  "key25": "3dmwA3WXXRxrhsuP27ednHKs1A98xGFsHFA5Nh9mCffonyWCEV7fN9v2X5MKJTYc2k32kLKGJ5EHnf7rg1o8vUFn",
  "key26": "4F8v1uGz3HzqVM5nWovAkMh6hr7XxpdpymU3UJ5hoHviAG4RhLVJbGWGshm1prg1o31MvbFKwrBYgNQnsfTzT7Lr",
  "key27": "3zut2kxsWQ2EkCU8TUR2CoY7vvps3hEvKdwmzYjLKv3oF6XJXGLn2VZm5yRuWX1E1niyisMzf9jf4bBPYYBe3vLF",
  "key28": "4JWL3gryvCDUvtNmWFqjAiPpjGtUxfERRm9ZnTqjYEALKVU6SxiZ6hRbxKdysvmUU8dXwzXyfUewmzP7TsMNMxB1",
  "key29": "4xjThRX5fkQGqbbSipDuUF9P6otZjhRhGUPYkgMQaSieVcPFXFyBBiPSRvJ3BgKjmmFuVsym9TkwuEB6gJKwD2Hf",
  "key30": "27X9Ho2fVXmfd5JtmkiSnuwUiyzowYbw74BbdnKZBWNtxh55MGxjVKxWpvwumHpHTqsQsteDFuGKt5L5HkSWoZsg",
  "key31": "446WtyFeC4zR7hqg38FaXijPE96gaxc54osdpp3PDEmwQKfZhitHUP5xudEqkqXrNdRPsWiZBdFC3RPVUQwQP1WC",
  "key32": "3sVQjeRKWTFJv55Bz1pU3b6apLCQKkjAdL4hTGCvGDq3NWDxLqYWZkwfgqkmStqzXBbvN1fLwxAP1PG77HMiPUYM",
  "key33": "PscGyR3N4ibuVwRnAArVP5PEspYJnsuzco43XnzTNYgYzqfyxKdFC99YM4jrjTQiuuWpX5XHj2NeR22dktAXSE7",
  "key34": "3t2bfoaCZfFyenHA8eNzZnYY4Ror3KbX5aQh31QUQ8P6pSVzhZtqR6kQ38SDJeAxhRrg1xHUFWgawbMEosfoXUVz",
  "key35": "4ijEcfCouwjP7fLm2dFc12MLxw4SciFQ3L3nMNRWzejkEH4mXP6ro8KTuPuyhMXMvsV56Rs2MJUQByQrrc1k34Fy",
  "key36": "uoNRewuhfTeEowR1NrKrvE3YnoxVshWVFb8RQNoKKq1toZ1A5acfkZByE66r9FHG4LinBToZrMubZefZJnkw2ix",
  "key37": "3M59oQkmkUTdFcmnfivmcYjyhRdLaBif4bYB5TWq8Ti59gqbcmb72qhs3udAQEGesJcFsD4sd5FVpgYQC2avoqUw",
  "key38": "46wkXaoM97ZCs4wYwFJmEKRZyuaMM7agk3DRjRRa9HFFhDjkKQGAk3W8uWQZEQ48rWcNaBQVCFVFx6SvZeoKdox6",
  "key39": "5ces6owre1ver6Eiw65kEVTquhXSd18QjwHUEXWX8yRkg4gErWmVtZMe7V9qayoQ3fHHrCwVKMpF3rse6eJDxi3c",
  "key40": "H2pC2Kmzbd1GJvWMoRCEpwYHfav4UGjwYJZTo6LTkDk6gbhQvjktKGo9aTqyq6pDVJU1gMPmSGwxsrFAGhcBLrt",
  "key41": "1mhD7WD1XxU6yiScNHxVs8VDLeed9tp9MDzLvUuCA9ERVdbcGP4EiCQfNs64UGHmqs2VPHSyrVMmq2b91V28SLE",
  "key42": "2wBbs15FjXAjWEBjLCjYAq6h6CQ1eNoSzr5xjUsjFiQdyd4pCRYQag7eN5tDqW8ALByiA5kfuCNuBD8339JikmVA",
  "key43": "gGXNoFQtxU457ZkS2QHJYVCYJzC5oBZc9UuLz6bmfUajeqz3wiTSLFZXTSyGFoqDSaR6iHTWBwuQ5p9Tx7izjDH",
  "key44": "4hiCZpJT3LNWKzSBej9c8kkQk6nnFNGCcqsfXnGdykCtjkB5kgFbwcvoHZ48jES54qDytjMC4To1bNK4QaZyYsEk",
  "key45": "45joJ69y4CntovgFGYhzhHKK6w47yivLy4apPtY3uMvLqXHCWaAtDKXkwEDjXAqWUvy27QJdowAuPTHHPZgxNkVr",
  "key46": "4pBn3LeZMDKW1dPPXopRNHrQif4MPzQ5wwCuAtWPwmm1bSBecAxwHX4bu4CvyHg2Mxe2t5cgLrWAHkLMxvNjcRcp",
  "key47": "3aVKrNsWvErEKy8Ww8DT6yGRwkrAEn8z59KKZAhUypuACGq5tSqJZgiTLRrHAoUxkbqoRCihdyD87bmyMAskboHZ"
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
