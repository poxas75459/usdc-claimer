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
    "3mjAbgyeC7w9fvoitSkMHvBDndM8GDDjKfVszAnPJ3A3ToVkC8j9VmGGFK13SCCxXFMr5gZwkZuhZHFmWsZEXVUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPX2jQ6GPvdNeiZtStje1cC9wJdtkz7zhujHKVEZEr7zRbJWSj5R5p1vbqAjsoD8hKyHFykVmjuGNhzZouqusMw",
  "key1": "2VFdJB8RmjkA4E18mjmSdEPVTNCCu5rCLQ1fDoUzBTQsPVx7RE4cvp6d27VpgLM6irT8udyLufvzGMhQ23uXY89N",
  "key2": "2N81PQV8oAx5zTqByw2Nzr2fNZhpo7HQLXzvSbxM8bzEt97fKE8aPQzdFFWUYGdYmqLumvdcHc2oSeauyMfxBzfu",
  "key3": "2SN2C4KCq155BfUXhb5kkmUawLjTij4S2khxYtVqLFgiGJgaSwufK9ZpBxnf41iLsY5s4iPjXDmW5WCVWGjbcpLj",
  "key4": "cFeffQJMpExjznZiaEEZGMEvxygiWMb7tZ4sPsRmowsEjY6WfdHbxuRUpJpq4qHUYnaRF9C7Kc74YZtUhpjPfeg",
  "key5": "34jcgZLrTUgszPGJNiXJq7ijCe583r5ceNpnHUqYvDKnZGGbs3Z2JZVQyniytk77yTu9eMKw2Wt89My3G3EvBfNL",
  "key6": "31KXcTCRCjpPrTmcMSjJhDwhpYu9yJPLfPwkypnwkjP9zzY84nhYF1ktE7eTinkgv1DutWJMXU569a6F1BSgYGM6",
  "key7": "3GAPwcTs6XT5HchQ2wc5VgR69wnhJkcmRxjsQJtdKCtzSHsrhBZNGP4NR65MihtYh5o4mfto171Pp7MH2VrDaq8o",
  "key8": "41Xq5KfskFc7BfNgyYhSipiwzj5kqkHPQ6YW8q8kWi6Tuyo28aVdWCfzz7z9BUbauGJLCj98arKYWE6msg56NYi6",
  "key9": "1BVBkbT941mGRBZvNc2GjWJ5QNUphvYJuSoJ5KRuTKrnFFeU9niGsYNcXRcFqNwUZE8hU51YYchkrwDcRMHWBqG",
  "key10": "og55kzRZkvQt1wzUiABcS629tYuzUooHt7u6HjFkYmT2ocfuKAJ28NnjbcyUcj3soU2SfTAsUCuhNeSbYdAfRCE",
  "key11": "3etFZDjjVDXayHBUa7kuYzYvCo86MaYcmdn4k1jZ3GeMaGq4THN4CSvr7RAEeDXpc4Q5MfooNabQ3UrCRVVb67CC",
  "key12": "27BAHJM5ewzXTQ9XN84m2yarCDq4cnam6rppktTE9SM7uaJepvwaUuWF4vcrgTD38HEe7yPPrRVQP61H5g6onSwL",
  "key13": "2e6fziZfNiAFFHxBspDh8SSdLEVbkUcFCc9QPjPRHXhbL722AsBzEaYCFNfQGZk5HqnJHQ13xAnHxpy3GuMcd3rL",
  "key14": "5ZuSap1kLPNaJvhmWZHNSHqs5bDFY15TiQvCUxnbRGDsjMUaNPfD3aQVjynCDryRD8TfPC9xocyKv8NHD6gL4C33",
  "key15": "3sHKYdbFQL9EUXwxTwJhyjxNvVorFMqyerGAkZ5x2K9MePh9EAeD4APj5icpfohkYFdbPz6nNkFTvE3RDqDSSt9Q",
  "key16": "yQ1kHikg3YEc7fdUa3U1QDsFwQBJRNaLFMFwWTV2YEikiPnxFXGTq1qGEmtivfYppkJjbuxRd6woRStGXARrxJQ",
  "key17": "5tKp868ryMcNm5mdPSi9A8PYqG5GVQmAdqkVDDaDAS5VULqv5EwCx4pYddRhGrrDKn43CrFqQmsKSKdnEoqpzM3D",
  "key18": "VmT9BH5kJzH8EABsmrWiTK8dx4LkPKSGxt2jaPaq2CRt1DfnujxTJbxAFmpebjMvHXixmejqEMLCTmiKa5FyWrs",
  "key19": "Q75xJE73mTyS5ZZnKy1fsEYcCc9TPsSQwUHvYdzq1chwNsEDBBXmUinXu1px32ajLcxyPaPetARdAuJEHCzDGmt",
  "key20": "BfTqngnTwkBg9iMN2Wa3wYgPM7CP9aHFHMQ4nME1wWQbGShzxPiB9nBTdLaWCyZmRCfydHfXuboVeudeypvCy6F",
  "key21": "4yYtjQgiB1VqLrkwyArQtSukBDPWAoXWsuG5kiRruBayyncEFNjnBU5KqiYvmQbzb9wiNMgkJX4QmWHWCD1DqQbx",
  "key22": "3K7XSE1SLkveB6BmxxDZgJgnZ2kpJ5MWpwDcD6uC3pPgJPPtGAw9BCFDssLB5kMjzkoAuBDxCMKmB5YNKyoSVjun",
  "key23": "5QpQBA2hRNsX51GA8xyfxiFiEgZ6cYBc7p3SX1tixDxyYobpVNUkYiK8Ro7pnzN2pfZ4d1Ju7bz24ELQYQQh9Emr",
  "key24": "245ATKdXQWaRtw5YFPJbtsyrRPD4xvJswzptMU4dLPVPz1p53NgQ5S5zPuxvxHJNnrTwJT9hdWgZ8knJBuBZ2zm3",
  "key25": "3fYbbJKFJ3BZoCMH1AuEScrEe5sQgjYVKNVbVQtPGXK6dRBd8zoneE6Nh5h3PMBKr6W8HJH3VyMnzMsewRkbrV3V",
  "key26": "4sNPFS6wKr3WnCRjSEMLCy48vnSmdxw8FAYd4awtA8RxuvKacRXpbRguDjDnBcQnhzpK6L5UezAQwhxD93kkmPRP",
  "key27": "kknJSBEhA8dFrxA4amzJi5rXMkVVPcbBZpdw4V2NAYu6RpTcqKeSNXCQj6W31F3VHLJvCge6LgG3ZEi1eJJB4zw"
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
