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
    "5dkVGaPrAPLK1JMn7VAyArttxBbooFoJE6G4g7NAyoKNMUoyZux5TSzo5inPVUiuQnAQhUUfbnjMEXR7uZ9X7vW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phUSPY6KMCX8DDAUTRdva4EPRtMt8Kt5HCHjvdXmexx6duS4wGazLGPnu1guUckmt9PByQf5BwjZGmXpDLoKy4u",
  "key1": "UhN6YnZdaMPWKPvrS9Zgq4Bp7UpruPJZsbjxnyGEmSfbWYwjYqrf33JQZEvMwLTdxRUDgEbXtoWQyApKj6akUtd",
  "key2": "21yNi8MsVuWBigDMYDqdLz7ARrmLEegkDoRQSsSLseY2wjSHNcMQnEYZ4PGTu53ZUPfW4kTDuDscU9oabyc8Pa7c",
  "key3": "5yHCQe94TuJzE1Us1TM1DJCsPN9DLfi2bMRSLpxk4Vq89WhAQysswTxprP8R3wT3uwmstErgxptKqfN895VD7WAw",
  "key4": "5cabDy2yjTBKBKX3toCWvgzNmQrkSeDBr6iPDw4KVt8p9QyY3Tys2pRAUSYRgVaGewTqbLMzsY7N1EU4oVzfTjto",
  "key5": "5tLwdvSGjtQiJ41PRuzB1Gr3uQ8CGNuGTiZrFwYZVoxBCXpNvLDvw3UeFTRqC2nCfaja5ktqzHUZc6ZtSLZbTJ2Q",
  "key6": "2kWTkjo4dnVkXQmWKpPgMkLi3eVDvBfzVfKbKpngfS5vAKEJaJ6G8wYCbQp1RmYXz9L2igjkhwF94MU6UnrdNLYm",
  "key7": "4KDwJpiY487x652hngwD7EgVjfbwwZZbCTL6PusZSfRFGkhyJxnhsFh9HeiAKHNcCL9tCL4YmhHugDZ5aQAicyC1",
  "key8": "8kgYxseVAXj835yUPnWCemyXLTEAvCLTBELdYWR3oDaSg1NUT4QMkTEWFmp75eGTe86SKKdsvMjumunHVMzn1bn",
  "key9": "47tvkNtmxYtv8q2TWhvHodZUAQ2N87ATKyKBk9ccrNZgiMeqkMDCt2wsXFrgkZ43UXtRv1LkT9aYh5kBdBbRnTiv",
  "key10": "2ARXzHqB2ReasHY4941jmAixaqrsP6m3ZQangBHVA8JMkfcEPQjJyz6wS5K2gzZV6eLtiJvD63ch6ifPrhSHGoiY",
  "key11": "Vy8w7Znm7z5NSaYiJRpWgvNrMcaPJebqANVMG56b3yn3DFfr4MUasZY91eqz4mjZjWfxXStYg8xJ9wJpYV6MxSt",
  "key12": "2oGjGrK8qc2xsXZwzCJjau5ZuytEXkcPDJwhEGpavsBQh5DRzjzCeT6JLA5HD3CxVpZc3NHJW6pS9RBKd8rqppTT",
  "key13": "5HsN8qCt1dX4MT1NJ9AWhTWDvieFCfT2VAgYKaZDpXUswpWrdf7PBXMqcc6dSXVXLzuACMvRFrCWRnm3XkZnoQ34",
  "key14": "3SbXWP3JBNgaNDF7nvnQXFQ61Wk6m6XbijWYaRTzo5kHzG2NHTtKnLq8SEHd1bY9qvrowYDLKqkQL1zCRQz1B1M8",
  "key15": "BrTs24vV2xYPHQya9s2EfyLzuPZm7iQvzhaKVfj5dSBNUXXg7GbadW39XaoGf6nme9nhGnJZXbWsH9TWp2mE6un",
  "key16": "s6g3jrgh1UbcP4iyasNcH8B9zH9d7df4prit8nYVygc2roo7QawQ2Snxi8LxfefSycKzPrqt21QKJxJv9tao11n",
  "key17": "4DfpX1FRyfkKnw4VcTgqtgSzyjS3En7Rth2AomcuqPB5NAozJYVJgJDHkg7WyEVck6eYxmJiiEz8R4oLnFrd58X",
  "key18": "5tT9zmuRvou1LbsAarS9TqneurRJAZ7qud75XRUaq9jZJ3YtDJYbRgvUKnfVNrSysGEoSurz4htd55fChH378iEa",
  "key19": "2WchZAtqmXURZvLcmRhXCYTwQjRn9mvhKHxwo6oAde6iGWc5F8mRqnj49uiKvf2GsSo82LkqHWXE1jv6fEw7NH88",
  "key20": "379gjNNEuHgBSVTBWYKGKrHSDVpZnCwSDc3odoDDodS2WaxXMufG379d9PRN2nxfUh5FKsTpCeS2RrmUmx88tDoo",
  "key21": "4J7PKkDju2fix5JywFTUxza38nt79joiNBqJgNGCbaTcABAyYbeYm1sFrXZJLN26RgQzdKdFaAw9FK2i3DZfFuBZ",
  "key22": "2hGMouE8R6EA2domm7LBnxuukAxqy7nQLCibgrRTE7uxizMcY5fVuY4oLnxEJCf4dTqWXvPvVXKUCsszskCrPbuR",
  "key23": "anGS7Xg37ZBmek6SpETPvga9xGp3mxceY8fdhNsCSiVubjeJfZyaz6YnpGHAYuJgfYTTLrTgvEGSnqUw2njMfy9",
  "key24": "226oyCHN3znqbJnBxNmUPMuc56zH5mJNAA47v7ArnjPewmpzfKpxW1MFuaaKuHSYTkHURS4rYHxFD7ehm2fvENMt",
  "key25": "4agXLy3tKHh71msfYdVCB7TitjvoPPgKPrJggPLdpfcypxkssrnJWe6cdyxZSqz2yWWqJf9TXa8zAsvVd2DCyzfN",
  "key26": "2Dk7jfzJ1udVEaduEzkGGnPPWimZogZW94x2V8fnbrZ3onBninAfbm3UFYoZtxH8Zb7sDYPJCbADNSbwwM7E51Kj",
  "key27": "L97awngBa3fa8GiiCwhRQ3iKqPW5Xf7JSVZAQq2EJjcaBjJTgNMpJ9pttaH3rciuVgi8VRpAqSEEQnEJaBTeADo",
  "key28": "2dhxf1cBCt3wtjrJZAVWDvozsRqY3kBed3XuZvt3fySB9MteNJDNPxXfZ5Nfzdc7XzsqjGYRyUscxjC7absMJ5r9",
  "key29": "UBBVA2gCbb29nwzE51A4znCADp8ft95ZZkeJ38ipDKTHof4hikm7UgL42PxXKNm9MBFwvrgdsPY4eGWJjKsSx1X"
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
