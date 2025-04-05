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
    "22Fkg7P1kMrdSRZXFeaJhWqh5Sq9atEkbmCKsqsmv17uvyjhRSJCMFvCFA9Ri499tw8pmG63SmdtJFPeF2tTxTog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gw1zBQyCkrfNGt26h2Cfenqj1kDnj4QJ4Nk9AfGu8YYr6zKQF3Rcf4aoq5Y1hDfmnkWt2QoDVrXvEYcUtnYXeYJ",
  "key1": "3LfiocoyQdJQa5qBZBJqS6qdFGHXRxoKj73YGVp34i1KLhLhY14ZacUwDFGdf9vJCuCTdieGbJbDcQwsquxPjLTE",
  "key2": "4wXjjphC7Sk2aHoNpivpwgc1jhDdZaJBdzQawGtsQZZoRyrcjSk3kFoAqKVSFkACHzTJ8DyDmG3zKTbGypXiCALT",
  "key3": "2g2dV782PYbmFrxkojn5M4SXoRvd25MkCBzdScbRvVwRLXUWd7SkuLzd8NC977qTYBYdhVUPPwZoY4PSFX13dj4W",
  "key4": "5wFDt9HubE9yM7BAncXiEqmGFQJvSJCNCu7EYbYJdCaUgDtbSrDekgDVbnbr9DNceZwc7MKqey6eVo3jP6SgbeWX",
  "key5": "2bSr8bb1KbS9g2H9BHxCnpDh4BA5EBt2cwUdZkbyzKfiuMNUxU6MdHYFPH9D1RpqCFGwtott4YQFuH8VbCxPBpUy",
  "key6": "y8doAhWUg39QZeQwtw9USiEfhYxtBwdn2sKZ2mMj44hqQbW6vXZcnryKLmBeCTBFyq9u6ARyYAqwriZvKdpfEK4",
  "key7": "C7sWNir4Xs4po3FgHnFLK616ex9EuaLckstpyn4UFPQMRJ5EMdK8mcqLTwKiMN6UhdwNjgscSLNTShjNKo1zb6t",
  "key8": "2myMfBJJw17XeffLdLWExyq7p1kWxbngL5Jq3sapYMEFtBXMRjGDzcx36a3Yw1JCQdArAsaQh5bhu37uc2Lzo8fr",
  "key9": "5xXWUVwzNAJFv6NjJucMqoUU7zDh46i6QCEDhrxjt253Ta2CwKXvDyvz311AfHAkXkDWHqs8NXvK8t5pp7hUM5NS",
  "key10": "Ujxs78uKcBjnMEC5dp6V876pgPd8gM4jz1omhPbhjVs6SREG3pLWC2ZKmhesXBeRA1Yywms6qZN3sXhqEA3j1Ms",
  "key11": "5EXWTpjKEktqFBUDCYnkjWFyeSLXNWLh8LxuBf7rzjoRK3Lhm5WhHUgFXtymwYEQgUcBnqHmQwwrH2RYxDToyiQJ",
  "key12": "5PPYsncGvrmzCMs8VVZZSGdVCK76CPwS6BpFBydX7xnxfDixUbV2SuSw1AonLQijBZpmPDsNaA5y5eq5e2yuzRNX",
  "key13": "4oyvqD1RHqMfhw35fMSaAnU6vPY92QkZyvzeSWJAuZ6nC38BnMF82CNqt3bi16tTaHSbQC3Zu87vzHNxka1QyDS9",
  "key14": "2dgGgbgHStU4AizVjjwhrCfxAwrJHfoWVdyjksxboJsoSQcXJtDtRfrdZ8MtGZXrGH7EhdYpz4DEA9as3tnr8TC1",
  "key15": "5HHoWJBoho91tXo8fKzSLBkErWT6mReHebbBs7piPi88toXxK7kyqqWBwysxed9dYdczBxzhjjG9ckMDPJ1DHrdo",
  "key16": "4wJNUmjQkc9Lemk9JeYSJimTaMPPZAjqCJxW9ny4j4KeQ7XZPqzHFHgxGY4uiZLx628KCXf5X4WpbEtDpV3iH9uj",
  "key17": "5LFdHvSvNPPXkWP1F366XpfqAUh8zvM6AY2fpySUCBr2hsHXqwS5oVKq3LiUD475bmtRRHj3nVJoDQJuZAovPidc",
  "key18": "v2pXFmak95e5y2j1rrm7hsCbmDSmHQMiLuwpok1xcgzhLQNPNVmHPQEwsaV4KVEtART65cJsfxGSjVWQdUzfTrG",
  "key19": "opWqf1pMQuW7g111USXJaF5e33AQEHCrA16nx831ykb5PEMNnEt2KYzubcvCkg4LTf3p5oP4SjHHiA1tkzHpYpR",
  "key20": "2h8knDB4T8ywZqGY3XCKz43AfLkmCmEMiHkzZWWPDJ2SyxV5CniCvGtmV7XCxS8w621nCSNtvU3seWPr6b22CmKm",
  "key21": "23BD1UJDdWz9JSbi85CZjHvSahnXeREfgU3pSMCYvKxdMEX7toLnBPEiH7VNViyELSoWpz7YN5sJ8Hdg12XR9FjG",
  "key22": "62F2BuHSu4yL4GzQqKSuUxCXCsjSiPHNZS9mtBmadWJJWLvyuZunXA3iCkJ5L7Lp9aZwoNFh7kUvNSLgfXK2hJ78",
  "key23": "YBFVxjaiFY41MagenywawyWF92BtTuqbMwFW88tgW7PYBW6VYNnGkDuWbY1dnGcmQBhyYUcWFaGheibTWBmtAGT",
  "key24": "2PpeLmgXTkz16bu6ZzKpoN7hkKnbUDT6ZYHA92ZUHiaeprCcN8ajdL7HsHLzyPtyUahaCM2wJfh5SuhE52FjiQgt",
  "key25": "3DbN4hWpxDLDAWAj5BK7ehdnuL16eiSk1RpCFADnj4cZ8qEjVnS15gpG9VSEhAksvZEZfSBPAkiKDytca7hFMPD2"
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
