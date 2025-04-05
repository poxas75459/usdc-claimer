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
    "4yFhnHpihKWZoouAKfzC5k7jUSU959zfjv8DvjYnTTkzTM8Lgea8n6f2LFSeUoy6GTgc1gAaEBG9E1HEXbnrEUwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbhLxxf5MpujLxcMzreyMzgd2VbtBKc98R6qLmzwg6CGqnKcDXjWcuERdnS2TzqPtpaP3gwWjm1RqbnvtJ2kbnT",
  "key1": "3bdUpmYL31dawXg5pHxbbbybazqvnohsp3RtSZJjw1PNTgQSSiSKtDEPypHfqxcwPQxENcrTsMAABx7Cr9fdeir6",
  "key2": "3zyaUoe8YQt9Ngw2saGmerTjXLnYjeUUk6ncJD8JkmWfK8BAa8JcdPtznwss9S4Zhhbg63vPAAYCpwLjDiU6Zi8v",
  "key3": "2ZVNx8nz21vUvGMt3GSa1oY7G6bHcF1ZpYUhQYM5vS859HSnspYZJyFYAo1vfxsDcad5xRNuZACM3qn2zrNLehnu",
  "key4": "3kD1ukZaZU8RmvJrvyDUkyNCXW3Q5LLsuM5xaYKaMamkXcSWwJpYDvnNmstwiwdftEcLzb8mcUjebPcqJTGyAFvZ",
  "key5": "4FnCpyCRoqnLsZk6oZrFnU1zKYqw1XehqTitKV4cWaP4et2FtKiPh5LVGBzoAEBLjyccgVXnFcWvWhuJu7zQBZrR",
  "key6": "3PQgBzLXbMEzm2JuYYvQeK7LZVXtQJ9s5LvrVKuwGSJF5tRJDJMchzZ5RR1n1pbNFaMsSax5DJut1n7hKnGEjQM3",
  "key7": "5Wzb6Uv3nHz4WVhpUCAvWipYoRSoGpgDQgTcrFKNaeCN9LefBuwooxtUPbQiQ7YAqZrQ3R3JdVbsnne6biz1AWUa",
  "key8": "Qr43T8H57wCgg5cb2J2rW6MLKaxUycrvDXZbRGorHMCaVXqW1s7Cy7RwrnSvzeBgthHs3skWZGMdWSYHgibrhKP",
  "key9": "3aNqp1oKuPsmaS2W2yyyfnzgdngUKLen8vtjrzCKjkDg8Xo2LxopNkjsgoTmh8mUjtc1ArMsp92duGZ1A2bYnzT7",
  "key10": "3o7Qnw6zjnHcaq8SdpQfPDHMEcYQ38VTxFc27Me8ShcE8LuALmzpT2Agi3QNRMmXM6PfY3CWCousgD97y1gW35ou",
  "key11": "3PJ4GLiiP9wKosbdi9Kbs8dmWLvpkLtKJE35G57sWJ7VEVYgw4MWWBRd5f687A67d26xpErSAVD9Hyxrziwe8yWi",
  "key12": "5gbyjPQkndWW5jEFJqqmgyAeyUDCKCCASVqCoqnJhCeBJR46v9iJKQmLhxtVPyueWBNgeLeXzw7ofANxTnV4YM2z",
  "key13": "2SvUAyGRFjjWNfQSHfjKg7rTZXist4gnnhznnshSUAjQtJzJhUGTQxkRQ4n8inxydbeuMjq6CbCMfDa3T8utU1pU",
  "key14": "4tJCtMYqztBqdor9LyaMZZFSggXKPYKNop3KjsRMrvzhvhpuPrjkdnwTj6KahXa99gkHE6X8vvPgC1VUaNjidRCK",
  "key15": "21apvx4iXqqT2zXza8z6SgVUoenRxDXpGhf7yfcjUS4rznfjpaDMx8UVGEzDudcFwzkndPyurvWr82SuQCDn2HU9",
  "key16": "3cpJaAhXhiJLjS6kB6iQpqZPKDK5BiDx8VpwcH9Hn8Q17ZXEczumJ8vjp91VjgVbSxNkxFbnujUqnjssrXqDW3cw",
  "key17": "2RfpLpdm8yDrcawNCn8sdS9FUC2QtgtBveceGjLULysNgAWic8SqnvPwQDzRzsve2WX2VQnZDVEZJQhs7PHMG2dv",
  "key18": "4gKyXjxAm67J9krnwqhrqiQD6Sbbwz3r9kpZzybpnjxwTUTHLiqe7QNWwXxSebvRC3R3DPqXBys1FSQgXM6ocyMt",
  "key19": "PiVo3HSvAm4KXKDvSVe7VU5EVX8tVobfZF6aDUDobphKKZTdtgaRo7jsJsteXm1TQGezGb4o5xQsgxeYxai8r1Y",
  "key20": "2jXtrC7o9xmKmffrkG1J7jf3soAcFnJiVSEdxjv12YWd1nzeoQV9Dnwj7rmtwwKa2X8AXuvJW1ybUGNfDnmdhgd3",
  "key21": "4PJRetzcwS5c4xCirCyabuyCf98PqrJTt1HEzu5mc87SR43qZJbGNYUs8SKuKrBK1kTxovTKVHxPMXLbpjtiTPPc",
  "key22": "5NzNN3dLqUYy1xppynmgKHR3HRQ3hMxh6hsvfjfjTHja5pVW4n6fhnxNx3EZ69hH9SqujsVwkieubpfB9yGeaYug",
  "key23": "2VzLfFt2J2yo8csTxLPQ5vZmdduP9PzZR6ioYNs223yvkBd62d7ThsYbGaTZMDToQNfUvMEEc2GjVB5ejVyuKyie",
  "key24": "y93PtrxiKP9SvwGBRfUkhspndKzqGfUnLQaQTm2NXeHc1dpchdwr8VeRz7US4aDNoBH7e9haeDLWDJkmDY9G4n1",
  "key25": "4nVs58hqcnBWV8uzDiS9CqcXvYBg3yUHtdUqCqeV8jnjtFmEHMWNN3QToSfdPcbVRiuafZXaDHy2Rzt5XTYkYCmK",
  "key26": "rnXQPiv7RAFRFbrijGcr8yFjvthN6aJ7uBWdSujJEAaCJqMV1zceYWYh2BkofNUztDr4Z6Bd9hNr1MdiEQ1DgZU",
  "key27": "56dDJAWDaSmBm5D6BBizpCZZaNpj2E4QgXoPgq5qsMVU785g4TeRwnisUX5yAdSdHUPpfAVqhi5ttDDjbKPSVNCR",
  "key28": "3qJpSiRKySjd24Lcv5dnbgKLDnzChxQJ5GWTY3d1LNaWCewmtsu3ku711iS4Rv1kokQsaNjqrMfSn74SRHnwC9wT",
  "key29": "5YESVhRjRdYkWEpmvSpQaA8dAT5BndLmjZ8QSJovtT8NgDeg8E3tAt3oNU3oGtcpFBEHKunSfqAMdzWbhf5TPzRA",
  "key30": "6AC2LNVvKXmBqjgCJLiPvcxVZQdDNCXCEtkHz1dhXLWd2TQiAFt1fNdSxVHYKmXSfSKajWG4oCQVFrxV1u2jZBr",
  "key31": "2Qo2C9Q7tvufrN2hJs2sJ4qvXbfgYtYq1hhg86Do5Xb159gtetNaB9NsBBS9v2xeGNjgDyDg1GavwGAuTs3DZzNf",
  "key32": "5cTgxC224HuGwJ4HXE6EhU3QEsKKpJHEFBbDXLTFo5gGNnnYVB6pxdrCVShs9Eu4Zxr76BBoBCmYzMUNL45K3MMp",
  "key33": "2qkSuKiFF5gjAqSundKA5WR97SeKuMvSRVGyAXBv45qU59tNKVVX6RAcwBQQpFT1qeBTdko19tTePpBkKc3RwJtd",
  "key34": "5pYKobrU4zzuFJWYfUg2mptze6L8pY3FWzhURB1P8LCrr8Ka7GDWLN1rRH9JVbQFRHZ5FA8NmWf9tWkpRPgstPEA",
  "key35": "3QosVbY8fUknZ3YDQffPWXEZDvUr1RkmpWA3uazfVUhtFmQKenfd3iHj7EtEzyFUSnU8qnaD8YCxCWuZxZJVYtQj",
  "key36": "5C4B2gJMGgbnjnLRWT1tVwGGUAVxCpfQ79CR63ojRWUpEX2qVwSRy6fZYCLcARmYdfBdtaUe31uVs3miauSYbura"
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
