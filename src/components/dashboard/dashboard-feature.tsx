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
    "2T1A23ityQVVJsmGRQVziKU4FfpATd2F2UYBQb7Rcj1BsitFFxaWmy5saywD4oojrrnDAUdMamcbKW1LJjuRekjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ay8Qp1ChjPJZ3ULa3Sxqfw41k41jTcFeHQtY3UmG1WAN2yD56yunFU12hcBJCpHZ5MdZzVA5YP9ebeTuw32gaeH",
  "key1": "5E5ggTtWeWLmnF4RUxNbj26TLWcp4s2boywcGnpcrL9iwet2vuoNdJCAzh6Y239MArA8BNvLudvkYni5tNHLHqC",
  "key2": "WmXNirumrj6znzJ6GEdKpVcLtQTkyKrHDGKZxrMtpHF323UrpPPK7SBE8DWhBugJWaDbDbR6QvJNgZNWDPrn9iE",
  "key3": "2AG4LLNeXaCDgpAKKGQnaWWrtFGvPWKMkQLvDK3KdmCh4w3j3q4zogEAbNZ76LajUhANKZbFPWGCSSxbrioFjcz5",
  "key4": "aW9tb6R1QHGeEv4KNaYmwPNnPmNCRPqanNEk7RcXpdKBXWKxQ1sxpshNUhtih7sm67EEstE72p56EJsdGjNSZjN",
  "key5": "3RSB7MRyCXWz6Cw9SQVPipLKZHBTLGsZwbsqPuvcipdQRuwAvJqavBSj234USYmZ4dr7KZrtgwGzUqpcaU6CG4y4",
  "key6": "2gWPdghppaYsambEe79uJK5yP6MvRkzZBuKcLQ5YBkR94dUQAA1FgNBHm3ahHGi1B1hhC8FmT31v5uxgPyUZxoqX",
  "key7": "2sw6ccWJGqz53vViZY2YpThCnonDprMV2DswjoTmsUBzoD66VGtWJtr4cjdz1XQ5PgMPeALvXeDf5fKS4sUXxVbL",
  "key8": "5Pn87pzpSRC4qvfiHYFNZCm58fYu6tCJYmVyNFP4NdCDap6U328CbKf21duJQodR7WmDv7RBnS5c2LL9UNEBWQ6H",
  "key9": "42shwWabWvA3ss4KiTgSSkKrtqViLnFpc35sAXtuP2RZWd8LfrhAhaoFA6A81cL8AEDfZzPua8caXC12tMGdGrix",
  "key10": "2KLXAc9w8xwi6STsijoTF3hHeLSdd4FEmtpDDrgpwPbR1qji8mvpHSh1MiCCxMQHj5feqjkkg9StZyh8G9dhDeoZ",
  "key11": "5ZzY2fgxZbQubvARtUqVHALFuymfFsVrcry48jFuRCCp48PAo78iEsgMBuKdj2PbofQABcBQPU8yqdAGk8hEJCdt",
  "key12": "2UDm4d1gYDdM6VQn2rTUjMGJzmvMLe6mLeUmGAdnDFSmWtE2KNSpGGNKrsgyWjVnmTG55rVZ1P3XsBquBwf8Krvh",
  "key13": "mCjLw2WUwUmaqUVbVxEYHGWez21evVWApLDYHHCk95eBReA7WKxSfusDrFBNiRsGUxcUisk7JxEUFS2UwPRUzm1",
  "key14": "2x4P5SbWViiUfF3Ju8MVVMWiFngEWPXde6A6gDj6vp1MWXNX2jg2NYsKcMd97JyxGoHRx9btMbfCQFskkMqHtrKi",
  "key15": "TckNZkDvcJuViXTfRyD2uq1fT2odknatYHsoBtvBQp2vQNV3SudAd5P7F7dfWr2vVPkgXZTw5AENTm1r5XDGVs4",
  "key16": "65AF8P4U1wwaXA4EJZSHjy3WtztUmSefZo6bQx3kGpZ8TMAMtm4Cv14AZBAmZJi669E4153j6P2CKqd4JuXuCH3o",
  "key17": "4bQzpkCHBYBmnT4BfopiX2LanfPxT1nsA7ih2LzS7BXeAgB1j4vMqeJFB6Gwpr23Wedb67UAAp1LxL7nbWeah3Bb",
  "key18": "5mEKPp7Bwe9doNZhzmw6Zm1k2Rb8xzLsP8Z3oBgYrdUqe2DseT2WXXEe8YrMFifanZGWPxvXkDuhUMkU7CvuKkDH",
  "key19": "5uVSf9Pe2d4V79T8oHjvAeSAegqVZWuZdyh2U8D62zbdTaSZc9z5VcJrTDJpNyAJMS4o2qmSG843umKqstv757Pa",
  "key20": "gJfQxFwUmGHEjiLEMes2qsJxBpUmTzTwVg4R8XWuToqExk1bGuPTqR6Wzgv28ESiZBhShDWkJCb62nPSteemzQN",
  "key21": "631FFmKrcbbQtA9hwcHuQjzH1ugKT1ZbQ8LkPxzTzRt9E5sinJafAJCjb4qg6MKADXZEb4w7xpbYDgJRHsnfwFTL",
  "key22": "3du34sKKTN2tMM5SCqZ5bcAAWtbJu5WiKHvA4dXDwHUHT6Tc4xvDEMNmzAiyt3XrTzThdhyZacGSH1PR66AmtXDA",
  "key23": "3SK5Y11ksHfzxiAuB9STSUDzbSzUzGogUC3xPrNQFiYjSYncowot5SkLhLbqPCaxXE6SV18gv1k5NPxJzRqUFndw",
  "key24": "4N8mVpTEBwskrTgSdnjnZikfuKtuEjJHjSUfPrcR7eCkSt7faypGqZ45Rg6hPRuzhwqDwRt9W6SPUA5bTcBhn3Ve",
  "key25": "5CmoPST1rQgfwg4sx7HrABnihVZFbAojFRkc2Sv6pT1NDsPgcHZ5TZqTX8uRAMBDUE4oAst9E5ZR7fo81J6FGR1k",
  "key26": "4LVkc7P5thWwBCPr2b2WS8kFJDnXznJdzGU2Mq82dYaTThXhK3fmsoYR1iZhSohE3HNkh3Gs9AiaEuihPuzXhqS1",
  "key27": "semCvvRp9fy5YmWNGiNx7nETMHvWnzM8PfXuY3j6QHuG7GvcEQ7M7NikByJFow2T8Emd7s3XALVudiCUJVhnm7X",
  "key28": "55orrw2iAFza1xJcTrcH8nxnPqe3HKN58aXPhvpyJSQ5Ebhgga8hoSQqUeihNYtG54vu7pxbDQz23pMhEb6XGmfY",
  "key29": "4xkL2dbfC7YTXA8bzbHMcQCE1V2dCPG3EfmPZ9RUTNXaX6w9KR8sEo8WpR3jrRiSL3UnUdTbuXaAkg3ej57UCfL8"
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
