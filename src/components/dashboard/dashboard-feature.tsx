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
    "29Mou1Aa9bpyrkvevUvHNC46NsyqKkSsHF1zKqN2F5tEPWgd6oCSi1DQ6iRW4fxB4qjj3HpnMHpbozhUdQ3wfkxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NP62gM3CYjMh2N5ooojrDQfNG1SPpmbAqEZPrW21fSuKobvVr4uY6ghmeUaUHbKExRQeSfiC7xo5qgN9QaXinTt",
  "key1": "31JVFuzRiP8vPbYGoiJPHzuGQrMFHMt1rVWF3LFqNs3EdZvpcXyaVXC5GfTrfR3izjXNxU1UQkMJCgHshLrZM6VP",
  "key2": "2Dy3i87q4upK7Bv25Tbmwyx75QmLAW2T9je3E6Dkya6beYKDwgFi8vKNNR3WJ2nc5VV2e8T4RkAjc7KgQa68hTzQ",
  "key3": "62pKY7qUCkWSjFgJ8nZgTQF2oQcJDqZ64mbLgPRygofkr4h325PpPwBwJfzXXksj5hxTao1Z63Bqx7tsEt17Cjii",
  "key4": "34ZdDLVJ5rHsxEU2X8YS7NzKjemmUF8hUvWWPQBJyDds2FxpvXZWXNvYNHNMhFCtkL1UdTqQmR7FEJvfoTVKQ7Hk",
  "key5": "4ueDsJXUqj1zwHPNknEK9yTfs62rXU92KuFp7XaJuNM5zPZnM21GZEV9CVz3Jg47RHRKMaHfn2ReX2b9EqPpECwk",
  "key6": "2eNqUujdnzeBq2ZVpVXTecxFyrAJQ6N2DAbjdU8oFnzqmWBgLDC3w5aiP1hCWTz6A3ujeAHC4Ce8AXdghgqu7syt",
  "key7": "3kimuQuezkWLkrGHKjEjF5goVbYJfYyx8Gm3JpnoFaJaT5eVPy93ric5NB2zPuDzCDpt8JoKqyKZaTqJ2c6bhz7v",
  "key8": "pBP4gS5TFCQ1VgzZwiD7YyCQXCjCHsPJTLgYJ9BqV7Us6yGAx4VF1kX5N1RUM2d53fg3j6NncfMH4KgCFUgbrd7",
  "key9": "5k4TKK4WdCxoBuJZCLmoMJaqz8Yk6JcVALN5ma2aW1EVvAJFi3cvRrFaUXK4CuM8audTDwvrUwTXjgKwwwrCqQ2w",
  "key10": "6caKZ3mtyeBgknRdK899aQSmopTu63xMU5nRxGujTivWKEs5yQyYuoVvaecfE8Wo2TGFVCZuDDhj2k38PBS59dw",
  "key11": "31daXxXkSE1RFJYPShrxC4BFv86anLXar1nuS6uV6vE3NQidHzpozkcaUK6GxhnRNMhXjRTwoXrX8vd4b6626NGP",
  "key12": "r2E8CQ1DQr99X3j2EawcY2DxEsjNmer7mkXkFYwhL5zJP5uz5UPryagPgobsgj53PnUvdenwHYwXh1a4fPEJqzu",
  "key13": "3nJmDKFqwSgMLPpkpP236eGiocjVLLCmBWsWWW4e2bsH2pmJnjjY1sAbWGb75WTBEHSymBddon6wMHSFtd6qVjeh",
  "key14": "31Vc6PfrzGMrJhtVRCXhcWxW8eTz2KuzMoB1sPDVaXR7AUjnZWqj156B1gegwWuoCmvuoF1HhTTVMrr773jUzXYz",
  "key15": "5YZEWaWm5HQm6yGKFgi2SyjMggnmnA9Lnb39mPzuHg6yyGeKaZp7nrhPni2b3mFcECegEso7H7NPu1w1BEkNfWhx",
  "key16": "5om5jeurwoB9ApHseN8NnSf8Zm9P1mkUGCTaDX5KdfUMaEkjRbBjm9MUWVcWHxowFzZd3bnE9WBPhhscPzTGrkLA",
  "key17": "4mURypCAeDpfKK4PgDkdpPhEHjStj2a9z23eukmaTCT87epMhV186U6psz2U5NYJKS3g9r1wrPT4DV7NjSFCWrfq",
  "key18": "hUpQ7H2tTbw1gGB5mfzsvN8FHgFgvHd9S4e1FNCUPShM5cdifE1kieLE83o46u3DqMZ7CwSamVr1w5seqvSaRzN",
  "key19": "3N9aSQXUCnBGNazh72Npyzi4wyXj2UyJavNH9bbw1ERpGPM89L83MHoESo9ZmuPHnNn8hb7EwGfgRHXayawW95kr",
  "key20": "24M1SVBp8k3HAfrBkPfQEuD5Cqb1bnqnbL5jrsE5avFfDKcuBWcYqCYnhcZbby4ZNeDFvj4Sz45gJaVXARNz9Y4W",
  "key21": "22BnndSjq5iFSJKiBQpx8FAFQodEPxDXKkHp3GQmG6FDuH1nrKG38h1kFv3X5FdC99zQouuSFkMSuA1La7dKS8Lz",
  "key22": "35amsJpGDSBqMkXDrnffYkY15FCSmtK26ZSktLMPRRrFBgUzsqSHBSfwZFtJgneGQBiRE7GfhZ2No8aWRPwtVrMM",
  "key23": "3eiPfqUtD8rraRnsbiDumZMzPJQ3a1XXgUUYjW27eNg94r15var1KPZXmUTHwQnikEsbTmjenpw7TLvbgBCmhFYk",
  "key24": "mdCtVgfffWxwadRCYSK17yDncExxjYmEuQAoHVzcfQEJkzHstZMceHC74BdMpdaW74UXpjRMLHFL4jNbyHTtyo4",
  "key25": "5CogYQX21DP3niZiNRUQjuwom322L2bTBB3LdkV7uqDUa8Rg562ECFWvq2LKoVQNaSBwTC5GkbSQPEw2SrGp16SD",
  "key26": "BNuMALHNdnrSU3E83AtVRXayerKoJ9JLF1hsipYceopx3KzsuZwj77JThZWQG9XHv66pep77SVUQ6GNUKPPpiX3",
  "key27": "57LJTNKQgCpPTr6LxNQv8u3afoPFzcQpLYmSwogHCE2xrgF8LzbvtmUAcJPAeMGRNKNAAiGbjnkSr83Mjx6Wz4QD"
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
