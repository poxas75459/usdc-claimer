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
    "2cj6Ykhku2Pwbx5rzA1HwBZrfawURAR5P9uxiUyGLcAwws8kAbD1MTJ6pGbULMdEJi3Hk79L9P2fQfZAz3JnTcpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kiRc2UZz4AGPADbetK8GHBNVKN4Y1kCx91rnTyzPSkhjgBpjmbV2aBadH7cMYch5kC3nvTYEAiqkno58YdCwfRJ",
  "key1": "4jfkpSuBH26Wr32c7y7Ruf2phctXXmPXpaEmWi3CbSwng3u6yNJM1QZo1H2KJYLV6cnKFv7QpsL82kmvsDiSKjsb",
  "key2": "3knB37MojpPYTHG4gyXmPjCcwzckwasZz2bTD1mQhV4RJRwCBG8zYgRfv5F7Lppbhfyaiu9KtZMEyWY1ZS95g896",
  "key3": "2GU7HRpuY5u8vvgQrp4FqCoD6SkwApLb9n6fiGfKbznJTHm561A1zo4cT5rztf5oeKw3H6RqmZmS2hwUsDHziEty",
  "key4": "5t2zqU2xbp4P21zRwt5KdKxhsiNDMQPpTYvu6PYdc5QuUMZaeenZVF76CqKzwPd63orBqhFHx7grMJuanMv4JDnj",
  "key5": "Wftaah2YVP2k3pd7Ef8oJJtFM66Pe8FtViQ1o2KnPQ4Ckkr2DJpvSpzkXEJCx9CR2bsGqzaYX8n3Zdan3PufUEk",
  "key6": "25UPaoDgvyekeU8XZ2MiwGYWV9cpHx5BVNfReghznDG63FFPZZSXjwLZpJoZ67ENEuVeyZc5kaHrKxSvNF1Fzwds",
  "key7": "2wvTKrHT3QBWRVQNjDehmHoKtiNn8tF6CSJNcEHym8kZDyfJuV5NSRPZXgdnALCwK7R2FcwVcoNaAiTx61ZwghGr",
  "key8": "Pxy5ymZdmEfk2PvB37gq3SPPNMeaZmJwAXWVJbRq4gGaNAYb8CUyhX4nXp6NALegwoFRWQmXc8dBQ7vYoD2nesd",
  "key9": "nAGhTFrQByP96BTtjcB27ERpjuiVyPrYR7wCewjkBnQFeDibLHFfF1837CqHYSbM916K1KA7g6mQ55mJMRNeHds",
  "key10": "5zhsPKrMgXpXikgrAdNjp48XLzYHRSTboLhituf7UPDgJXQEmRHThSD6VFTXqCQWVSxvZxVtYjSWwYSRoiKdGdvX",
  "key11": "52Wf5TF1ZUA9RfaKece3aaKfhhEKrQ2mA74NCRECXEQVKZSnGDJ3NZM27LNprAZmY4zo7bScCFdWSTEYDdLBAbVq",
  "key12": "V6ETa5FnNHRBUViJsSoySV1paaXHxPyRSuAyT2K2bidbDxmGsD5RBu7d2dHnqYes6QWMseN3i3xKrZi5pPgTdnu",
  "key13": "sADzJ6LgTP8WnEjqKE2dfsLwPJpECTUmpXxidukQJUBeZKBwpxvKpaQxs5JuQUDD1VS1B7NHttehfdHKFttN8W8",
  "key14": "57g8Mmmq9wV5hq9GvypR7PeornKeyFz9ceztYqBsBKuFmvviiuHc8ShbusmSQfYCP1r4sax18w2WNUWzTn9GYtfF",
  "key15": "QiU4Bapbpk8T156kqKgdjhpwGp1bL4VAFE2Wn8gLnxR9VLt8x4VtuNBhrTXSJtHhxbUrSQXjD44N7f2TyuGdhgz",
  "key16": "25pBDoy6J262aqkVs4dCKbUfr54JERxgn9U3jKE7tyS5sngx8ZFkbYL1kqcFy4HoM26nfg4etVbsh8ZtbJby4wrh",
  "key17": "3Xt4oZQew3E4oQpPbftHkGsK5zSEEJwtCmhfovFs9r8tUi594MV5ja4iaZzb6Q9ptZ1ksRFksB5C2qChmsiBZDEf",
  "key18": "5ynqq3W6d4Rx7wDwafAhdP2gxYEgoyZasD8vWT8SCbPDFPhimyJ7UXEkGW2wM62PWCsSgvrqcuHKNAGaCxxfuDuY",
  "key19": "46raBiAr2thwX5655vU72XVVzwzKTfPyzoYB5TqN9C2T2kPKfGZvxAoU55ESvg1Ys4xhi1pKoVXnP3aUFk55Cckc",
  "key20": "6dtSEtRSMgnYc8waeEvMjyPKGqnD7SjMGUBsLe6yfzG31zBDPKuwdkRttqMDB8uPigim1HDUkGepV3BWwhrwXPp",
  "key21": "4NggQPMizmND7sHxmpbKHM8NgMJL722VkUFTh6zWE2striiKAm7TZn1DkAvoPcXeHRvLx18p79YvouhPcCZrjmVf",
  "key22": "2bqcHQjJTZ8Sc1uw62AzP261VbrAogLx2aZ7ruMNrFULrZKNszFij77iV8Zwv2umG8vroz9efuEiqhbp8rbB8NmN",
  "key23": "34gJWoLmXqiHQY81NCSaM57dJ2zbpVfGSS28oDZYTH7vjSR7wb8Mrv4NeHXCkJ9oqxu2AqNbhUL85fVvCRhtvtRW",
  "key24": "dyYUixgnMiAu3E6gJq9dzAPT1s2i1pzELRmb3EaLb6S9ib6vZDQ7T3bWtyzGo41wKFFpTmy1PE3DFV26ANbK9RZ",
  "key25": "4bXyucVtLWsBuTUowCKDaWAJ4tMtyp57U7P7ACPALrpDXUH3nm9aqM1eS7abJ7pag3i32uMuhn61t9Uo2sgeCzGq",
  "key26": "4hYXjyz1LriehQM2YN8oZ4bHcrBTExUas3PCSkfaSnA8MU81eBoN7rWbV6CerS5JLivLqbRRL2A1Do5jGZzzCh6k",
  "key27": "2RnEXhqoXWAzSQYLoqCjLTF6j4HP29HDL2iJXCw6CLyRtT3LiVFegWonhb7XMBUi4v4jFQaMzA8WVUQNy1Kwet9D",
  "key28": "RSnkCbBcPZDzo4dw9WBX9xU9s8TsQaGMv98jXmuvRPrddU1MmZfszrNoHYGxotXhFLPa1WxWzwSHbQMwVqJndjS",
  "key29": "cZHvLZC21UYiTW474DRYEn6TwJSTTVnL8yRci4EFqHbLiKVkxzp3JsifD32AoNifwtEYsoSGSio5VDR7ZcgjDrg",
  "key30": "2UR3JXF9MjzuWFQtw1duvQkpfN8wxniEeKwNaDeERyHWX8bjUKm2xXvCg5PhQfaxd7uupjFr1PB8B6GvKQ9X3LNS",
  "key31": "4iZsxrzAwtAxx56dFQkn8iJxgU519DaaJWS6yhs4n4yn9NNbNdcGsuNjuYkVf49mMSbwghkyaA6up1qk92F2yck3",
  "key32": "5WEmSLKy3BkXfT6G5pA8G3WLhAFs78Wsv9MK6urXTTCybMGu99FMogRkuLkYqswtDngsEhrL33ZgLPFwYjgD4UVX",
  "key33": "3a1kJvwHuyExuqfgo2AbiJ4Y28LY56DZYkV8fA7YzBUUDfRPreMw6JfG4QvzsZoxYR7FZjGRKgVDtp1e89qYxfoL",
  "key34": "43feELzbdLzSWcuPeYAPVHG2FPoSbR8y81P2oQvTn3CzdF5LFSgRkVzaGzMwbq3aR8dEQ87pEybWinAPrt4ugpvY"
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
