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
    "65WQFqxVuhSQi75kvUfnM6mzUpxEaDPwA1SgwSa755MrLjuza9wKyhDPbcX4Ds2i54D4UrtWcyjK7sdjVcxpqpok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bCJs4GPrPbpzDPPMckZPuEHcbB2BA45nY6S3uP3Cm9nYCFjJdREw23Cp82VuLPhHPwRc8TsxpEPGhnGxpKtggKv",
  "key1": "2no2iA4GZbCPfqXctHezjsSK4m2pcmgAWKo8tkrsEqdtYmWVVtHBVv9JuLGymLxA8y2cxqn3gfEh2KNP3cDTar1q",
  "key2": "3APpVY7V93FMCUR7oVXCZy7y6RtQQpumgnJRNoGfCoxA4q8KBxjGHKokqtEwoAZWM1NeftrULyTctWBcZp9FYVSk",
  "key3": "129tYZ5itRVaWmT7GEwsDUxKTVh37jgiVkUvmqd4311cbh7NBfBq1GQsupxmEjKs2Rg2naB3m6GjgzwY5xtcZo4u",
  "key4": "3kY7BCsA2BKH4zhbp7WmqT1bzu9yFHj9YsM5BvJhUGnFoEdYudrL9TSYVJf8FWDYAkyM7fiWE6fND4DCx4FpwU81",
  "key5": "3qdnVfTMFsUmUGsh2YThwmhvC6mkXP8XJNpfpit2xERo9AwamzLFUW1YHHvkzbkUzz86ffYwcVDn9Vv9FWWHASLp",
  "key6": "3E1MDThnUAhpBHPa9uSyBAayCL2fkWmsPWbsyTMBGDEXWsb52VKijbqFgrqRJyaJXGXgeJweB8mjQ8c5hCbeRjUT",
  "key7": "4fV3i8jqWDdwBp9SkMN13ZVxdXcNfUx4Qk5QNhUi4VoZqg6hqbpXe1tyurCZyLitzr6fSZvXFoWg2JiZDSQVa36w",
  "key8": "4ZWgMb86Hs9ku2D6wxUnkwo6otfEAv2QAW9mvJmK4PCVCVyecxE2vyoq3Vsi8n7XVyQBWX43fZP9pgDM6yuLSetM",
  "key9": "666662WS88mP5qQwQwoHuQsczQjUGsgDGYRrx4hKRoTdoJnSu5GRmsxbRhXKeqME6U4djyMu8P54unGnV1uFCjn7",
  "key10": "QHToAvF6FVC5UNM1EFTNhzEGorzkF75Gqwu6TML4QoqZNxQzGJNPRjkRd1codDoRRvTMAA8Ti5zF2AFFoqJsaMZ",
  "key11": "3BxiPujj7WmX3rbLUQ5L2vnsemaGitFfZha43fh9Lj4CMMjiAnCTDhwHR8PhRctXgAfT8BfCLQnbFH6TWad1vc1h",
  "key12": "WBycSo2oLbB5eTCuC13zmQ4dCjE1jULqy6FfRk6HvkVtDo2dpU5pNQVJJTJ7V1cADJ9xqFGtFxtc9hKTZ6GDsbk",
  "key13": "2NfXNccx4X6Gfnpa77dU7YMVgbXA5Fmp4xk8a3QNuWntiE9KVJMoKqLaF2WbeAMuokTzRnSauQasEMASQQENczuV",
  "key14": "tYPhnmrYN2V7Ac7RfEbSHoe5NGTxubi4pXr3ZqsDRebuGgStWTyx8iqWbi8bkEWvcPvkMUG1NyozVKa3FiBM9km",
  "key15": "3Yrr7eeuAtZRGqEtXqSh9jV1e1EyrDSzaG6D5ErN2s5rWeawU9Fhs72LcpaK2o7x9oaCu1HykZwTVdPebk3MEXQ6",
  "key16": "4zExSUwGvC4NKyBXknfiZEgwPjhzRbYr17L7YQN78SDNpiPLfG1MCwEtDA1iiWtPK9mVyQiAmxKqtTyJci6nm3aZ",
  "key17": "2skQk2BuMNLW2ewDuYxLZ1tetBFJexaMPP622t3i6D6TqZnr9LGRdgHWU8dZGmaQ287fYGB9vLL873kxxASmi4Wg",
  "key18": "4waNU1KrTRxss7JBdSXWew1Ee8JBVX922UHg5ynMdyEPyxRWgTLAEddxDe7CnsTxKwZFNFEhhKfLPX6FjGdA7VKv",
  "key19": "38XaExQkRvayHe9R6VJhzpghHTzTMPhFoL3G5uuiqLrkFbX25f6sLsp5infwGJt4N4pAzrmBxkDEe3kyeQZ1Srx5",
  "key20": "37b1HWaF6go2J4UsYptjwRXFnRc8qCzFwko9DedpTHXuL62UuQfKrvrCb2W2V5aSYXC2N39V14a5BKvvc2gTWsHF",
  "key21": "2yq32LQ9L2ahySrmQNKbfdXmC8AecLPC8ZogLh6W41RoFpN4A69A2CP4uZ7EnDFEUySRrR8siRu7BWnTgV7Q8Gff",
  "key22": "2f1dH4dsD1SYudLo3RoviBiRzufxqmVsqxfrQYpFWytFKAk9RefeRpt2Kvd1maan7yj5azq2LR7jbJDve3TRo4nT",
  "key23": "5xUpXqnA7h45GVxvnyCAYkSdz5HUkSMDmoMt4o1gzV8jaTTChnfGxa3CvWx8h8THZ3VTPDpXNcGoGPgoj7HQdcEL",
  "key24": "3ZifHU4pDFJ5izo3tmKpw9Qrt5jPTgXcdn5v4VPkmk9zPtgYa7VGBZP23bjYYszKYVGsNQNCPirvKmwQBDVbJk3z",
  "key25": "3mAkQF8y2bBNxNrhDnVct6cfkc9m6WJaJ7E3oBZEE3opTwrTrkxFHoTT28XpsPNSigNuk8suXu4CmW6RBsU7XWQS",
  "key26": "31rFuPrpZk7V8RUzWTLymwEqpxoCPvFXGatYbFDDY7sHLVbjfnjq73UqAnbh1zvQwhttMPvsT63x2ahD7ZCznrmt",
  "key27": "4hjs6tZwfAaYug55zAqtTwNxsR584rRUrrKq2aNZGX1MMS92UfF9LaZypP49FqYTrykFKjBTQhME7YxY77Wh1jo5",
  "key28": "4PYpyTgZ9Se5G2gcvH1QryYxz3CG5qowYjwNb8LEizEC44mTQibu3pjEYYpKberqnpUCFN6xWF546QiDqetjnFnY",
  "key29": "3deA9bV8mgioNWWTCfKb5oe1wZzczXsesvMhSfso7n4jBRcon4UEeUcmHtDqUgLGzpYwxL4eNfcsKMu8zvevNy5m",
  "key30": "4nJ3CjSHFQwvXtn7H9w3ay2HrwLXZzfTP53urRdjNr1TYg7PJY3K3eDYaf5NFb8Ce4TC3a7TokYUdDeRsQnFnuY2",
  "key31": "PBckfChbVk68qr75dyUbvFhi27bNyZRhFmoR7hTGH9YxDazr3JJDqPTvP3hPAfWn7HyYophq9Vh14GUMCLrz1jV"
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
