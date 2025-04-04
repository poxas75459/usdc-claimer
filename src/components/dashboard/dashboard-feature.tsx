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
    "2UKAn7KaSeEbcMLNUQGjfWSnrVG6EERfDiHSKKX3tzjNm5nDDCDXEgJM7LYF51KHWDkwfSf5XCBF5FNmXgF69KUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRBhiuD5Hs2w6rqXhmLpUgvDSgepDcHxsPEQv4jidsHGCendX8kkzRR2zXkuV697bkwBVPuQpXgPNxgrVw6HssK",
  "key1": "5LUA4ZBky82iEzxHYTEbhYuwQ4LAii5DRb8DLyAAhHKzS8q7mNp5v7MY6UUNsNBbNzbE1cdijVNsQAPNxR2jaHDE",
  "key2": "ATQD6ceuwtpL3DpGpAqpEnjk1ebM2Q4NDXALWrnc2iXxBJT9QvNWVnXXERaALCCmHgY2SpgTt7WtWNpxhXh43VM",
  "key3": "2h4ykvfuwgPtNZ7nMtK344SkgkXZFcegR1EdY675264UjG8cmpKG8b5bmyPGnHSgCxmpbG4QJHFJUDLP6u6Hbe1w",
  "key4": "569XzgVFaMeDAzK2DTC18Dq4RP2MiGuPW3wUTNVk6qfVdqt1Do3BoHwYFAFyXQCubiNr3xtLK7t5hCB37smXkH5W",
  "key5": "4eCL6skdBmcnmfS6ZfPdtzgJLAQshKsq1B3irr6U2x4UMeK4PR2BmXakCLrYP2DnLTR4VcGF89KUdjUCj2J2BYgT",
  "key6": "5VfsgpX6XKa3RDaoccrNQ6tMSmW7CAFzHJqTxYtK4aKDTnTBSpWN3ZuCBQRDWb1DZQwn4mwYhE3nT719JcT5adib",
  "key7": "2eW7fMxQ1FMNKSYvjiubSMGQPu5qSN4i32oEKFCGHna5SpEd3ydNXFTMU4T8EJoodJk4EjfaraHv8z42NZm9chjh",
  "key8": "2kWJ5euVsavUhhWpFZ6BWzddGhgLqFWYuoUMcSmVwyAFXXT3sqPDjjC9vnGkVYg1z2VYwoSSaE6oC7SPb8tJaaPX",
  "key9": "3RZjQ3fVfX9MTN787eQW6Q2gWAkW5vzCeqJ47iT9wKMbhBJ6MkqJJEmGi1er8ZE3rfz6x7iXDUXQV3hs3eXoTjHJ",
  "key10": "5gZP4kdNJtR7oV7u99WvFHV9LW7bJrGNRmuKVLcWP5X6kmLKGLkrqnAgKfSHL4uwSrRgmTEPDHWk19LNtuyQpRud",
  "key11": "XEQcVxMXMXQscfPRcqoVFSpB4kfWL3NtbFqMgYu56JKHnPLzGCaYNHvEJzDQ5kqAcmET8MyRyhyWfRkUbLapWPR",
  "key12": "4bSTrJtiTBq7VQ9QqpuSa5GWwDE7XfrfvPHKX3DxWGtz4HZ6mGqPdEVNP2dxZLP7ND8kr9VvEf36ocfJMQtVFyVK",
  "key13": "hKTHQpctCoSa84SVRkPdHKWkF6oFcPuGSuaMh8YVQ54xEZJXci2MXAFvawh8Je67CVqgvtEuma3kvCVuMdeVK1r",
  "key14": "4Yo6fs6P8A6Vs7t6Tyr5dPuLHTGc1miELBxE7oMmq86nqDy6gT3M1f54ABEJ6B2oLcZEeo33KHcLQyx2kxhMxKzT",
  "key15": "aHjS63jNeSGPAgDaoMpdk8dF8c8uDJGcKxeCBAhFHtdPhhwp76rK9tiF2zkDD8BuMotjtHEq1kmYXfJH3voh5tL",
  "key16": "4JjYwhX5JjiZfYXsgkfpnFueo9eECH99XadofXHq7augx7N9Ew72zyD92YonpVd7nRcSVswEhmPEuo7tP8m4Z3iM",
  "key17": "2URbn95AMEc1i988TUffGCindkREHKfwup9JoTtY1vi42YsPMsTxDtuJQwTi98sPcfakigCgnjDpsf77pnpDzmEU",
  "key18": "4uXVUFGn3xdH2PVHP8rbBNcT81QBMsTZt36srZ57GsEgV47mHLRm3MQ12YoafRHDmy3USAZSGZEWE2NAHn89ZEd9",
  "key19": "4ZgHyYM2kooP62XavDDmZpSLaSQoVyjKER3LLxYpfSPJu43Y7mQJt6VyK4wrsH1QHx4bCyrxwyTEQYho8jScZL6D",
  "key20": "31W4kfeSQL1hB2rdKMrC6Aq4aJQZ3dns5QfrhjMxLZYk4YFjntedbaGPcGzEAWgrzMg57W5wzPyXox4rQ5Xh2Tf2",
  "key21": "4wCP2NfaWwq89Ctn3xqDWEyEJTczbzFXia1onBixRhTU8untHX45nT2CwSZUn8UYWynbSyMSPArXrwtzYLcoVZBm",
  "key22": "62uEwZZCSchpaUWqTvkvRyAGRPfbyCtHoEJzMJHwp22gBcwh2GVnLdrgojFKy368e43CB1rjYApyWGYWmy6VA4f4",
  "key23": "BrrZfEEfuk8CYuXojvdHtpkG5jUSMpR2kWV1vD33KT6maLdQ3yXAAcXxZn81E2L6MkhW5xuK9zfaRuuihqMQ6hd",
  "key24": "2hDmeVgNp2QTkNqZpjS7LmtndFzF7zUVSrShQykLoPqEmi9xQuZa74r7x5RjVuD97nKUirK7DskkZK4mFPFnX4FV",
  "key25": "3BQHdtgSUd5TDiuq9Zj4mTDNJZNAKpXGGAigmeSBiFmz1U8GSmQVcupJzEAuNiqBpbKxamSpxEPTRAMvJVXoueZ9",
  "key26": "2QDY5tEZnAVyGdEHajM2S6pnPCf9BDfq2vXu1bZ1kuDTUYN5jUoGihf8ZQXhTu4xA5hW6GKbDmF467DHjcrAFv9L",
  "key27": "6ovNj1uT3CEaErXF6w1q1FuVxNcwNts85rNhkv8mJr1tYsfFxnsHXkFzvP3JfMtZKJVvyKrAST2NyQzqbq7EXco"
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
