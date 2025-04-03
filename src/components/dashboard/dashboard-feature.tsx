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
    "57E7v15YDt75SY4ymH6pYJekkcM2jTfWiiZwFwmTUQQzR3hetMAXKuM7c4LZ5Jss48YEcmdm22nFCpDiEYbfS3jG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PykrgZiCk2gMWDkC2skxQzGUEB1QokSCQS1ZDspdUkQfgSajYtAjNvYB4hv4ppekUjNe9MmZWH58UkS3LWaq63S",
  "key1": "47oQpCTEaXd34JchsxX22ZcXzi4yuLxPtMyBuJxgV6z4DZB7dVC3TMW3gFcv4ukVBBLjzhmmP7BRsPj8jxUwaeNx",
  "key2": "LNPnmgaDdRVpvM2nBPEnrCfifxwtofudEC2rkQVcVkNSZrxVd4DjGsVsDgyRAAKuvEJMLQvHNc4HBrCag79qg25",
  "key3": "4Z9sqs8jKf94H2uuzJTexwcgT85PEZPsdmAgcjUQ8nkX3L1NRNy6VZdFhSZpQQe9YmpKZx32DPZF5rZVUsS9JWoL",
  "key4": "wobfVJQJtY5e8m1zTPboN4n8LEKeoqyZC4UNNfm9MmqH7euS4ZAp7YnPsYh1FWSRic7c9z9dVyx6FzFxs47Vrbw",
  "key5": "5mHqB4U6hVngduPS8kN12sDvtRNqDPCh94YR2DgbGseDCAjdrdPX1W76o36xwseqbn7UTWMUtnPh6cbeuXx67cPS",
  "key6": "2S9GkANhn9fhMx7frgaeWWhPGKWVF23jzQ3dMVBZAhGFQND94fKC4czG4qtH3mt2vhtXzkaP7fZfB4WENx2Z629k",
  "key7": "EUUWz72igv2acPGcW2sYbXwgjckx7qFCzxfvDoyeoc5ZaEyWEJfRSgkvLEnxwSorvoza2bhPukSEpNSqKep5aFq",
  "key8": "21Gc7La24UapD6yzrLe7yeE7RuphsxYPktjVifaEsNWJtsB9gt9qzjyzKvRm8ZvVnQQDFvpBZcxDX1Z5xoFhZ9AF",
  "key9": "4kyQVjvdi37doUEQfh8mJt6fySLPqTfZxbRjMBp8D858d9reiSk74tmVe8c78dsyaLbBHSGrQJqzRxtWTD1xd2ev",
  "key10": "5Qeps7eLsKGXWvCt1r1NJ3kQx1AEjy3HVoy5uo6hQigY5cNBLVMYh9cyTur46Kx3ZAJnL5s7Lwqsdi7uMXgtiDP",
  "key11": "nec3tv89j9h14msiV97MYyskaPt5jf2SjJ1t4XBGa7EXRdP9hK31eMvnasiikVyqpzGFiLitYP2v6rkNxmEh9hv",
  "key12": "56mvqrE7YEQ3Mi1wp9ezYNhpq6Pj8bunXRaMvdmnvm4xcx6NTaz185XohASMamLiVFmi4djZ7ckKkAM3VoxchJe5",
  "key13": "2rZhPbXzFXcBn7EA3WSipoRJ6pR7VrZjk79nBoRtkT7ngcbUx1ditxUCUbjjfWKmy9TyiBMn3uXctPq1fXeLPZ9n",
  "key14": "4NYzpArjZGv4hDgS9rswCm9yGnFJpTWHb5BeDVaMB5ZkkW5GAweBnwUYdqaPf5zjnSc1dpfcxmVATaJLjrjcAqCC",
  "key15": "tJtgq7iptMCsaRx2Nttw4jW9hdLqfFyPPJp1rvovuTSymqbRq6CnSJQCkJzMwuM8nnZqJvKkLYxpJoepPAcVXVj",
  "key16": "2W9rRoEkYxq2RcxBfqjyRSKASKRUF2w4uprC1y1HJvZJeNyMUn58LEEC4yn9cUPzidGmFSDVGuTTCYE58spax5uu",
  "key17": "4ZggFyGMkU37jNDeWh1bEP95fh6g1yevvXYKkZh1bfAs9bfX9V8XbGZA9YcFuJZiMiNqoHebhTymyNhdc3Hjwkxd",
  "key18": "3NPZ22WjHDoHFkuaAZyjo22JV3DYkMbitsAioPkFSWEyZuWVG6iXvLacqoTfazNUEYKNrCKebRH7o27JBHf8xjtQ",
  "key19": "4DPe4b9HbaQur3rceeoQtJ1X1hMH71pgvY6HNLoVZMU8tR9cXsEJhqTAguabuCRn9oN25zt3a9AiPVSByqopB8Pj",
  "key20": "4dvsRFUSRnDwLVTa1TgCeySPNPPeSoCUMVV4DnC18YVqZDC3ugW7sfV3P3wQhtZuNFGxZFACEW1cA9gBUzVwRjPo",
  "key21": "22Fb3qw3UoZQM5UC2xnxVMyU36pNdVRkWT9bV8zbxVJpsov8LFGPajf8kJLzKC9v9MynKmbRbEnbwZGYCfUNmE9x",
  "key22": "3JLH7SfJcYmSetgL3LKrdWRy1fQb3TpVo16xLz9hQ6CHtnN2zFmxnZdt64FGzMWwXfQ96uXZ6RMmNHRXxTh6LY9x",
  "key23": "4Bneb6wKh8gPkUrzdtJsKybbLDcJHg6yaSqE3AKcfAdcc1iAe96NYnLtZSTMBH5amHaTRhTzJ7kc3YWd69nSXUGF",
  "key24": "5f4TPSEbvLaF12GbtNrNiAsgrV5J3yMuLUjATZoHSAGkYZbj7dMeTjutvhnzXeoUzUgJPUnqXT1pkfNPTqceWmZ5",
  "key25": "4H4PW6E12AbAmfLSkzi7K4pKay1YprErYCvugCqE4Bt55TvDotbH1czdwDPUYrM3iRpGTJ1YCDJRjxbUhdt2Liz4",
  "key26": "4LcDLPukrLur2u7GajZqL3YXvUUefRfkgvRegVP8csUbijXscpSJaEPJ1MP2uNhLY3yCExhVJM1rhKQZfdfpRc5a",
  "key27": "4RT2W7aWccXqpRE2Ur2HBWbYBhgFSLbbszpYeY61RowfxjYjDLeTZ1EUsvdqZBG6h23ADex5BBu9yBXh7tD7Zuv8",
  "key28": "3qpbiLzYzARx1Q6eqVZUbPGc8XBi2A9PeLutstkheGQYHWE3dwknXKQgJ5FpD4jYX6YmJtk2NSNPpMjnBBBeRbUw",
  "key29": "Z2BW98k7qoPMfqeYiNgzd58Q9ifcL9XSFRixrXUAbseoLpxZ9ZgXBcMv4ryfzm383ESgb3uiQfn3gqn4pke1rj7",
  "key30": "491uTStwfetThdrvH1EHz43d5VqSAj5XyV5PELePnXSEAWktWMwAmMC7pD4UF7Mq8CJPgkKEhuPRzF3iZqnvPkPR",
  "key31": "3jdQZiAxabxT5MSeFAxaQfm6QnK9tMtQVgPkHQvUKVxxM9P371w6PtTYwjAFp1oazJgRNooPmFzq7TsLHJEsyUF6",
  "key32": "hXpmEPzMotktyxyhR1UzGNCCZpR2a1JhMJRCTehomZ2cs9cBFJFs1C8H1vcGVoxhqDtzcg8BJgjX24Mb5t3uSLC",
  "key33": "3fk2cgjoKNkimToryimL2RdwcYjuxvEqkHxNaoZ9mhs7JJNBgtfHQfca4cS7t7Vkpx92jifvWkVu6EjoKwzH1Lam",
  "key34": "2FCrogiEuQsuc1DjrHHN9SMDeToYJeDfwHENhuwBfLyeR8z6uYXRghmBggQQ6eZazcUxQiBwRjMk48KJ8knnjgzt",
  "key35": "3bCEc5JAeo3ZnHF4iPcHkJ9sqBF8sNEtq4KBKsBd1GRj9etWXx7czAUHSUDQbBhzZtzKNwPZL8LBviLEVuqRSNix",
  "key36": "xh3ueTKcx9cSuLz2RN7Sh5nfXQT3bgvhRvKSLsPPjMr32kkuhvLnqMXdS9LXd4LTY2SnTGYPjxpw84yEGqRHNPQ",
  "key37": "2bsLwyha8nCyJUreFPVqq4DKkGHNxDLx2ZAeFzCgV9B2xGaJKGpEZfm1g9w9Hv74WHwLP5t2WjyY6VgWTKQ6nCiM",
  "key38": "3JqYUubTNsEG6dUHcpcBG4z8zhbZfXwbNB8jGGcH2GCF76XpU9J3ctWEEW3whn1udedb3XdfTvcNB7E4wUSRtxKr"
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
