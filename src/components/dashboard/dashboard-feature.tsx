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
    "5ik9i84LHNPowSYrugMX8F26rzTQTqssqnfFziDp2XFwDzCHgR4zhhEaQKhoEGezMWPxT4GxEP3GTtvFv5WkoSrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jPh4vggurgqoWiQDu4Nfymo3CdFZQqbRbSpGHfjV4twcmtFphQFWK8nwaHqvHNmLGn4xbw4vrxLJoNXyXvnPwSu",
  "key1": "1mPXMDK8bX2HFFG12JQjEuVgU8kLMvLvka7LDBE4JHbUt6ZcMgXFmUSdobt8BypECbGtwH61hWFUY82yaSjhEZR",
  "key2": "3JQ5X94vke7fWK4U8EyVng71MUTbgQHC7cHpiDKa51T6fyeXaYg8mkY6HVM8YQQpFZ4qrhecCeQEXJ8kUYw4TPKt",
  "key3": "qYXqohuQT7SBG7YH1gbxFz8Ka6L9RBEKC1N5qChLRG78cczHdfq4nCsHPfx4KjMyQPVXo3KcZzyisAKukTPq6Em",
  "key4": "oasaUzb96aGqJ21Y4EpmKcErbedXeGNaHGTJpU1RozRZKj9DbxWW5VTr9nAPpnQNUUwn5bC4mMeoM6Q2HAdK4Gu",
  "key5": "3LBodQxubfs1rbtuk1ra5cRGHK169dRpv8cwgyWUpaJYWfBP3eDp8tKfshCHDAX87GUFQqnzZY2s5GSNDT9XSxoA",
  "key6": "x2T7z2WwmpwNaDNnhpffwDEgDQVwsGNcqK2K88uY4DRyeWLKB6b494tiBfKBKqc9jXcgpnpsM7npkvmCMXLcTws",
  "key7": "2absr56kaBke8dQUNyKzraA3sGEVoJFc22aifLdjRm6GY8iFHC1ucMNJq5WDQMomp2PW989hcRSjWnqEVGpNuPnG",
  "key8": "5trUozEdvvVo94CHjbjtpAkeA72pruRW9v7ThAsU8m6AQeECmeTELNxMQHYZjqoDBHUzLJbPAyz2jgE37tY7rsmd",
  "key9": "51pajKXtjiTJHurRLzRhFe4G3xo6s6PWGsj8FxDaxnK6FFXWkv7qVNaz3cXHAgos9bGhEqcJQktf3wAFe3SZ4Jck",
  "key10": "3szGdVPApcwht1n42n1i7zjxRFqRJy3hwF5S33AsNhfeDyaPZBHcToGB7xCAmNuaBRBK7dnBMgfVhMQ6ZAxT9U4c",
  "key11": "558Lw7nLBnf3gxtf24qidshJvZk7BjvVhxQRoLyv4skAR7wiZwXH76HmaGFMDyaLJdPjbhfc3qiZw8yorFt7xMUX",
  "key12": "4Y42MCZWaUHJnuX9dPUb9uvMotarmHXVYwuiKPH9RoXh9zKK1EhDVsHwbrii17NHAd5X6Hj95RfnNnLLqmZqNE7R",
  "key13": "35D67BF3Gwi9bQ6wTGXSsxDsJ4iE5c1Dt7ZSzesaobhuF1vbfshHZuLHxHVy2BhkDnd92HZADfdz45V7uB7HnAbG",
  "key14": "2W6VLU47VjmqQbW45WVTZiuiEwNopda2TJ5MYgtZeNMbf2vafVK6RA1Ah6YQbeyvsx4UgxGW5w9xAYvwG7Bi4DDX",
  "key15": "5Wj9SZzd2uxnbvJDXBzXw4tXcJFhuErPchGLwKqnfaPf4arM9FWyyZ2JiAut12dpm5TY2ppE2wMxbcPTvQ6pR1h2",
  "key16": "9RZYyhTMMJNYUD45rv5hMcmrW7GDMf7EnsnC94VtnCUFKeXWJtvfDPMkMwPXicvgZhqqHkWfnPnYyNrPm85KoNW",
  "key17": "5rwXfjeFPCYBm7CwmNJv48CtvHRMD33kZBf9i7HanpX8yKCeQUT9iERF5iMdQAbQ1wqRvJ9wo8xqx3TXBaAcwCj5",
  "key18": "31Wsu1zmL7CRttZcdY2L75bPnuujoZqtAZyJQykNAr4dHdxEXFFvWQZpYubYZr3r8JfPVp7ERj9iAqHjeigwsGu6",
  "key19": "2sFsCGuQxq5LzXK24cM6qGSBvewdQXa8jXwP3bEz7rW7XRVTxE7gu1K7TsnVGV8PHp5J7p12216UxpEfpcx5G2bB",
  "key20": "4Di3v252LQx7hiBrgCRYY5GAby1g8rukRZvsut1TXGSR3NvQmbMvDLCS92A1uth5uwxSx61QNQZdAqrBTnL2rQee",
  "key21": "3vNyUcSy3sP6Mm6gLjpyCrgn264xwC3tHtzQ9aUEVQUngtYX13KUxMrgmVmd3xFTYyoPsQuZiUEwtS3JHqZzi2XW",
  "key22": "5954oYTS9zyumfrK1bWvK3ih4Qsq49swJCpcUZ5ntwoESqP5LcXR9EEKpgxQxbeDyEfRb5yPW68T2VbbiRy4VUEC",
  "key23": "4bx24Vo5Y9u5DLTmsa1RVGU3FUYQbva3faRLL8kQAhfZ7KVbrtfVSsp8h3wLokzWx7RsPYrR6bjZwCaQz9DNtaw5",
  "key24": "fRNYGnZa1vqehAFwZDvHjxrXbNCpVsR9YtmQvYYBz83H2PoP8DcsT7zf7jvL6TbLkeX81juzKzWZfEV3kA4K2qY",
  "key25": "8D8LgyGw8p7WHVX5jEo91jakzX7cC9YEbtk63kNmjQa2E6bMGbGid5s8y4Uu7Pc6dVEf9cr3QasDq58AyJz5P6f",
  "key26": "CqPmwXTgQVs9er3xpdJtTb7gGWADxsVwA1nPJ1r4TPkvRxeNm4UkctGd3Yg16fz6SpdkPTdMfbhLZSV4x1nB2VY",
  "key27": "53rxiPg1cuA2xc3btDGgNEUgirTrPsSeKjc6d7DgvBMsZoSKtLpPeXeCHnE6tzi8c4JQ3tWnpDMvRCtnmiZTQ9iG"
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
