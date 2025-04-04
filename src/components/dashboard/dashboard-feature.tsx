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
    "4ptpT6gipSRwBDnXWnLywDrNca3KnS2D71zApct3riUEodbwcqZAEpGYEmzbUXcCtk3LBywP5d3BPyXtocXm8uXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEXiG4qzyDyC9g788gAVLJkeCj55aee9Ac5a8TyD7MWNVP1pKcj5m9txsBuKNZiJw5vdrbBhNXnFbeW1ThCfbcz",
  "key1": "3nvubHqcPY5yESrRp6QCezbfMceEWYJWVVob8GwT8NCy13hDBwYdLo7CQ1jhjomYR5SSCiw6iJ3BPjaK5Ed7Ph2X",
  "key2": "ntQdUSAoe8vWLesNb2UcqK26T5wERMhjxoAHzBwjHTqyciNjkDZPUEJ9LMH8gxK9E9vxq2MkejTEGyT3nt81LjL",
  "key3": "vyT2o7sd3SP99FC2U6bdxFn4JCPZiwbBSz12BK67RcW8P2Q7KSEoWn1qwxkECG5xj8T9W7bFs9CjPhR77TGwy2L",
  "key4": "5LDnM5x34K4R17L2TzJEmtEUiYWSvrRcq6Q6c5zJ3eFGK3Z9Y66nugqjARhVvQtFyYM1tfPRAanU8cqHLQh1A5cz",
  "key5": "34a1WuMiLuyvd5wKN3k4dpetAVn1uKj358ShFraxnUrjcrtx2zwuokTBb3tjLgrzd1PiF9ZnPpHzVFFUcjg4Q7hV",
  "key6": "4L4iSJ8VU7KfkcXGELXGpSNvf6qSP7JKNjjLWSYK32PyDePHnB4HdCiRyYgSzFb8Bzaky9eJypP7SCTpLgLz4jqa",
  "key7": "31WJyg8JxecgF9kwrvi1DcEPZGTd1LUcRnpY1Gw2MsYqTCAyXXKTPCkFQyTRaN7eAuLvD9RmicS2EXQMQMAGSMbo",
  "key8": "4uevtqPGreWANgetk2MiqHhdtTz44qEMkvb366puHXAuoKjaiPCqLXDoR93cNhJXTqp2AyaNmanzE7QyyuS4skSr",
  "key9": "5rh1zipRDr4YrsYfGC6dXxTNoCSFm72ygeAazYQXbcLeSJ13Eip599gQJdxwuaY7kYtP7bxPCDaDxadPRU4fjciv",
  "key10": "2uAompstnnhraDwGgocdy1C7jkH2PNkrxcz1xgeEzBcFDGnDt36JquaSVcg5URWiFLA2WcXRRek2ymKgHAikScxJ",
  "key11": "2n3L9dDZsLBMg81E6kNbWKhUVGxfz6vmWoXhe9rU2XM8EWHds9bEoQZTeCr5UZ2NCk3cQhNWez9HtSz7eMsmE8xk",
  "key12": "3HsZ5w2V499T5eVLQY6LRj6mkNdiEDjiDAUZjiZFFNcm4KW76z4Gxw2nEu2QW4su1R13gznDUV3MCuhrnqEXkFbZ",
  "key13": "5zPTCntQzucBMtgSDqu79xvdk6wWj5m3SE4Beydsd6g139j8NCueakTxh4opwWM7gDHcLgS5eGKGh797Anmjqd1L",
  "key14": "3CwgkbGGKQrx2ti4KoPhecmu1fQNyo6QJzGaU9bixqKYNJcvmvGWgUaNxXH7KrRUjj3Rw9qLh42bADqJgX2CAEwm",
  "key15": "2tbZGFFCGUHXMcZK45EJ3Ak7j18KxVHXgn3Z48aRcwAf1da4wGCph5vBPSZvpTVrr8FMCZG9Dy2gEgXAjsiSdE7F",
  "key16": "4MU8oYCBHVnuKmQRACjup8TVcExGappG9b8TxqSRmCWtdqETxaaJRsAKgqqv1uHxqq14wpV2mTm6BBv7HgJajSvD",
  "key17": "2kep2dxe87DS996RmG5NcDcQmjjPmioPQcD1NRXvEbRUCFriKxaLr8NYVtH7rUD5S1B4YyPGAUwotFEgUDkf6FRj",
  "key18": "4DN5vXxfRQeKBaFF9mFYqmbKQWt6QBQvDRgEe5YGwLzp61vWqgSmkWZWbJSXSt42v2RqisDzrFVV92BWfNPpqsbb",
  "key19": "4oHbX7ZuHDHCSGhFNdDTccqTj9L8NWMpKNrbnK2Teg9UU7xHCvewM37KYd9Ku3AwPbRvm1284bc3jrmqhuGKNqWX",
  "key20": "5U4Rrs4fkBuXRoh9JNtBBtoveVZMrU2AjYpwaeDs8ZUG3L27y3JQ5KwFH5VcdfYNXCCLPTWDC22XmzxWczxxncZn",
  "key21": "2zY3sANwmLtmTEG3GsHLjCBJqp9df1TYrCGbnN3MkvE8EXM1CQbkxy1qvtecUDRcPzQthSpx5aPukLtDTWvr73Hn",
  "key22": "56zWssfYb1iKNE2Se6towr6Pr2jRwNEZThAnGhvGcr6qRAdnqkEP9eSupcS8SVPRkzahQUjxDVMsQPuhdMpL3tH2",
  "key23": "2uyHurk9qGcHEt14HGk9P6cf2pbf4qD9C9UstbKAnfhteJypemKJuLkgR4S3cYn1qyw7pL8zsKD4zaKsiVoP613U",
  "key24": "5qx2EhnipgzY13qaTEC21hKsWFyM4jjrioh65L6PNbpLuYrQTpgr7gYF6c8kxxdeAxxxMYNbMt3LJoPaDN86n2fx",
  "key25": "3se2JFS5EveWLZbaTm5ALCmR2Gp6BS9EujPB1miHVAc25mXweWdteWBML8mos58inn39Hk8z76R1DRUMmZCgheiF",
  "key26": "jf4mEQYykaGjKi3dJnz67cM91rS7kh8gQ1TrN8MCBtR1vNsnrJhBvbxiqJ4VugMGDJH4NjZKpMwuxMo22qi8Ukb",
  "key27": "4HbyJU4XY3YqSfodWS5dasEVP5KKAY9Mh5EzmoZ55qT6ojyppVojWrX4jv1zqeh4v9AAQmREovcKBHCTiRweLLNU"
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
