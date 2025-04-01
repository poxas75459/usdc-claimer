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
    "2DnMS2FWG4evTJtTxEZgLBy2qy7kzbGXNpGFivXjdkcWYjsuCJvgoe632nt7X6FBpeAkSysJ8x6c1umYqTrPwzX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYYeZBHvDe6an5uVxR22m6MJyJaAPBLPRdfLrr7DW8JuP4dgmHNhEkouspZ8d7dC57DVds8WU857fs7XyQdTFYr",
  "key1": "4xkQ66kvvA7WR82MZ6EzJWwUispPDUS3VakbpmWjXnmLs9MNMYDcJtJZyZTsWwW6Qe87BD8yf1nSJvGXJ6wGPjsC",
  "key2": "4wGqUV7TDMY3MZ6MVprTdArGxdtDJT4hC5ax438oxR1APRjjp8P8YWhc11UkrWuWKW79J4qgeqPhFRV2AEt26j15",
  "key3": "29jrUMwyU4dgt36nCXp2ernwve8FLh6jPzcKwgVrfeductE9wGWXvp2sNgo4oQmiUf5zkexhnbjmw9zjJkGQL3GB",
  "key4": "3bRwGZnMA1TkzeWBZBePhyUA5rzYtyjLywfADLEev2fi8SkDb3Gu8MEKhzYvSJQZmhNLcGGKT4tDGygous9L2t31",
  "key5": "5yoiXCu757SEH2sEPKyG8Z6WCY9ooxx7CruYb9qfWkhuSf9Cs1bdSBmw3aN89VjZ8MSP9PEJ16L3RahBHMhnR27P",
  "key6": "4JwUMeCZ9fkzyDgk7QYRFxyQGFGbpezXmfjb5HqBTpDs8Ppjiiq4sfyFKhEPNfxLC1Ncv7z94kLvEoZbBKo8crVk",
  "key7": "5HHtjNq7RbwQ6bd5QmLiqthDLmndtFvXBbdo7wpFZq1jr2kzYM7naQpHVFggWSNdaSZ2cgHLkqibyWAuNxSuPJVV",
  "key8": "2BnnsoWfJ8DHVFiJuWTQyh67iU85m1z5EVCa2tzpg1uomUY3heRf2sirGwLCiDNnQ7dXk2WhASXKZDsakJCLFA3A",
  "key9": "3VKf2gHkecGWPTLTfuaLHpYfRpCNbBteQ1UxMZHPwE4kPNRy3jfCcasKFGhn4NaghWShNyUiRGSZ7YyhUfPGVuAi",
  "key10": "5994fujnA5sXKs2TtDb1YBALsK3So6Km4cBEmfKgbEdDh9WQqahsMaUNL2TA68e7hu4xhh21iozg42DEAVY2XbPL",
  "key11": "4ZwU3bqhkvSpmviE3cYmyR6G36XU2F5fXdwnff6nvzDwaNQDZHJD1g3t4CtGApikeMtjSyKW53hDvqpby7sC3Avp",
  "key12": "4QLVDDSM4Tgea248rFqaeW9A3KGeB36ZK488VmXm8w798YXndMPgrLYGJ432bmUB77eZU2x38dX5gKRhkRAVJ18j",
  "key13": "65rpxC5v8qGLGac6RhB49vfmZfEufJRiM3zZQhfzbZTkm54kdw5tdamuh1LeSXCqiY4Ch4M9Gku2Zrv9aVQk8ZFV",
  "key14": "gt35DvmiX1U3d77YN6jjBx1RW7yaYVcWmcHYjJ7t8snmTibrX2RvTuNhiVi7hfNigQWS4kU1gv5c958kPf6HfpA",
  "key15": "2NcwPX8sUrT4Y32QLUL65cWg45qqBxBKUGqoCytEkqbzXMFvTtWaHdGsqziDRqxnPeFZayfJ9XVXATKnrpW5g91N",
  "key16": "2AhQuBnNxkZsANAjkWETMffm1GUe6EXDRDKDabiFwzkVQRPhXxSKp9f6ni3AsY4u1mYR4cNtBa71QerDhgsbnvRC",
  "key17": "2XxMxVYQ35hHxMpvZXQcsXoh5rJuH7iqTjVMvz6zJB9X1pj3X6FM12FuCd3HM5KQM8b1xCwDVSPYMpRTW2zUVP6Q",
  "key18": "7vsWBWmvHUdcauBjXK5RD9UqWjUFFWj6VzYS6PvJj3x5yUEddjhgD6Rva1Ei4CAwdpybYgMqmozZDkjMVU9ixEH",
  "key19": "itLrSEuHmAuNeyVveuaTZqdZe75wCf8oyTQZarcLUybhBhetCqTN1bSof5QfhY9xKFvKc6XnU4F3NwMegiB14nb",
  "key20": "5EZjR8knacTJWDobSjo8Vorgj38RstLENs6nGr4z9g4viJmFp9gGRMFRAS7fpxnrsVrPpxzitLxNdoEPSp1G7f6j",
  "key21": "FhbjDXBLQjQt4LkiQtBfirXiRRmAbujYaqMoeVg7UVvobCHbkxtSkwnPRkMG5tJYzkV5f43ZM5LqibvTnwcvfPi",
  "key22": "65QcsXSk9R4QrJLTu9jSvgeQqcRyJcj3qaZnHhzBFwT48RRdGxkXpaPe49qCY1daSDeHkGWEpzXvTdHdgFYjKeNw",
  "key23": "2Y98jGqyxvywy4tqVpGt3dqnAiqzQgFinkdF2YzPpasndumvyC3FT1FPzxD35hf8udGg7URfsFCkrq47WXTLsBXx",
  "key24": "36XU6twz6CewpAqUBZVjhtc9qmY3nZfjYEJi4TTmBTUhCSg9T1A7ZesVgpy2QUR2rFujSDHT6a1xERWNmRRxgPfp",
  "key25": "5z9dXJFQn8jUPS5VwqrQFYDKyGr9eNrrMmMEijR9sWpceZa2M4bXyMrAKnx1jkDntZYRG77yLohhXycxThxpaw8Q",
  "key26": "4bqoihn7gDiB6LYYa6L3uGVFRUACKynrNNgHtcANPFLtugPKGk3ZkM3WKQzkWLvmeCJN3nBq8VCvniruShUveiqJ",
  "key27": "5rAcW76KfNfumW3bASBD3um1zsSm3xXaCcP7Pge6kzmCGEohBiFVTmoN6YVqA7BAZfx9BFiFKGFvCJrt58idhdTT",
  "key28": "5ykShrakPvd2byM7bK5nGNnoWtcJeGr7vUxDPKfttSDrLvNgUaw6dJr1pL38FFtWReQ6UQM6KGuD8Wg6wSEN86gY",
  "key29": "5BxXwhm3iRXe93pAyt51WjJxR715GmVHmutAFx2qvo3bphWkwqoHcyKnWoCUXgHwwN4T63BSFpRtnzMCjiAAEoxj",
  "key30": "iZwNNPdNF7QrJTgZp7w5U91enBDEDWjefePeBPBRnLQNCsCCsN35D1qVDgUtt2gMD9SSS1YvYfwZ7od36y82pSr",
  "key31": "2kivXJpwGAVrzjkx1TDWTQE9vb3kAoTj1hSKjPDDkjgwrY2jT1aACkK1L2VdynhYy2Y6h76bZE5VeAW8HLxoWWQZ",
  "key32": "5LZ2uVyXDBYNXdbGKgjaKcxh6nfTwfdyKsDM7QvM23mucf96q1o3fuvVQPztVYsGdZSSMHguscCgERrX3CAyBs39",
  "key33": "519myGaeHiaCJ39sKPjd6ntWYh4sQFbN6q4BBrfC3sut2Qyb1SbqMQ4rXq4sWYco64oNVRU57Foz1LzXPudtiaB1",
  "key34": "5RnYxNgRPPpByFeKLem4Y1Z3nunVBCgBjhEuoeyjyTEkVvTczThUZXX9jAwxUM8hjRz4TmquunXiCAUtQ8FyWkcd",
  "key35": "4wDWCteVQDm1hANeV2BbAvcYVCm6n9eQ1d6LxJ7J5qnPHRYsp7Xv7kQ5EJzMwUTYzFyy5PtADN9d6bqoSNJi5rV8",
  "key36": "5DA6ANtebrxGVyND4M12iuuJYBswPpE7bPKwv5rMjBubLbf9mikP4rtAgknBRymUAREFkgfZxLWJmcpuAWatxiE6",
  "key37": "4Qy9K9EP5jnZwtVUpwKP4xHN9SiX2JxBXygLKquGuHMR6WABKbzSMvJGuVMB9ZJPZjwzfGYnA49WFnc2YE3byYP9",
  "key38": "5U4Yw3osseHJJzm6x2LE16GQQHDLA8ozYpfK5rgNiCo9Z5SDRXpRcid4R4szYqvxwv5RoyC6a7sW6KFZRLBupDWK",
  "key39": "5pJ9MWqZm8MWRWz4WAdM3NUUQk6SVuxsC2ttzJuCJWjUkuM11t8wxJUMcNqJeHN8nCrP5RxBMpYKiXWZpQUdTqx1",
  "key40": "5NSbc3nMDfaYugyBTs1uHEp24KTVivyeo3M7C4S2zUBapH6G5mS2aLhpsL5vgeE6Tcw6pwHGQ9aSHqveFZaRGvWq",
  "key41": "2LSKKRxtcwH16hu3QJwCS5e7a5jEnnKi2RvwfRrn3NL4sjGxJ8AfGZ7zMeBM9aCAmLbfqnCFkmN19Jna2E7p7pMC",
  "key42": "3oe2kK1HjsenbMRY3AJFzugPCwcCUCB6tGPQQkEKiswnHjSdzZwEAnLEpnLL7996ciEYKssEephGexs2peaZFh1D",
  "key43": "2qotjsxNKGabx6Z65brueu9FJtPYBWQLGggehnzfykKW8MjGFuLuG2oKqHGKNjBokQiW3cnxNLBaH6pqZbAg5r5N",
  "key44": "3x75hGfDACWRLAoNeNMCCweduqzWEmiKB7HuVGxawdawfoLA5ThgEgzEU6F46UM112p6ZbYbjnUFbYuShRghZMkG"
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
