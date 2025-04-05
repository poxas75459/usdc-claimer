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
    "rWvYKobXU2REM9DfCdYqumL6n7Qd15FEJzqwUaSKgBZv9saJ1CXwwpmHFQWsSSRyprF8UvVxRSrPdXj9XFbSrbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6YjKaA27GoT55tnsvJz1dsA7fAz8wPv73QjMdCxxKB5Riq5zq6FoFKnWRBd15gSn7UsFV5AX3nrpYpzRzuLtQPR",
  "key1": "5XLmUzsjHbZaBGGsLeUVA5sXBFJ5CTvjQXMFwt5m6dEWTvKy8E1PxxkXNCZ4igqBmyi4nmab2FLw8MBuCkkChM1v",
  "key2": "3Adrwfc1c48j1J9Fea2EnZCVhE7zkkTZdoz1PqYBP8UibmdNwvierFSY714ro9ftvztcWa62QVtxeHrEDMiWAaZN",
  "key3": "A2CT3xWz6YE1HMsMZXW6Exoodc72eUttnuWKJohmmBQ5qfbRPNjJarbojrAkzomd83WMHrxKsfzjWZQUube7uk4",
  "key4": "2r49AzSbMTByqmbmSuRCCam5hzSjvGqQPEpSiVM19GRqjzMJnu9Hd6ShQyTJKY1zpmFVYC1X14XQxSUDHSF6GZez",
  "key5": "4V6Uvb5Lnim97aYZHZJZtk6cyUUNmm1UgJF86YVMn9DxrzYi4tCQA9xKEcKaGTUU7fXzusNX28ecXfvrcLF5DnEb",
  "key6": "3NTzWeajLjHPmS8EkciXnsJbXfzmmYZyRE6K3Pmt6HoSsX3XUNEMQsGGbFjxmqxJzj2Ez3G2fC1AunxSC8LfY9ir",
  "key7": "5PaFne9xG6YiCStTLRxu7H84ftMFNVhjXuaNuCSFsAr9ryKzZfhW14eeK2ee7FdZE1zskYtzzrtPbjckKDPi1ebx",
  "key8": "2CrTTzeP83VXngZNhvQVt25BoiHZqsYtBULD2P7jRWVYrnf8ip2CftBwHBrcXQ9z5n5gvf1EbjSpAEijWSKFBm1v",
  "key9": "5cvzB5N7Ef4M6nNNxvH4WiWgrJ8gEcKcZ4hv3qKoCLhoSMprUofoQnJYy2Qu7L9jNmTkY5F72aBkDGET6zbrnqiM",
  "key10": "3GcX6E99Kz1C45uw543hz9xW4HThtjXQohCpudrwgBctmAfN2rMhWso7wbHS1EbSGJwa6JqbSFKjaKdrt8AQGbBY",
  "key11": "25qqHqNyA1ZakDMCYxsFPQvJVnVGZfJfN9ysiCWVz814HJ4DE18o7VBYhn6KpAGHy5KwekWAPcaLfjGBAvZbrdy1",
  "key12": "2SxGiymEYG5s7nPoApizzsix4hQHP2LXTo8N9MAmSn1LH6Ptc6Pk6yKHQGw48X4Wfwecu5uS6bWL3rn43ptVbntC",
  "key13": "3uq4Zj2CKnt8ej1UwHsgUMf1FMxUKS7Gj1h9FJizMXZrBn1KRkTdmEpDg1MhYK3dNjQv5ACJ6iYiFzFsemZDaEf3",
  "key14": "3h43nLuNjXctQkS7NCbF2rdMDCwWM3mixoz16LGsRMNzcHa5Bvn7h2yAsu78ajsZEnReh1BWqEsaVMGDsjhooebg",
  "key15": "3ZfHJMLUnGLN4fp61jNEimpGy8aCkGiSUdsUYEk5ukSrQf6mLDXbssfhchcCKxRMmq6odebBknYUSsM4jCZcp6nj",
  "key16": "4er6fVF13rsARNBToSEid6VjuGgh6Jk5RXowhXwZSij5BkzhvhYKerYPynW9hSxAXoA8ZGXNZqVXtSAgdnCkyc2F",
  "key17": "zK7Pj7Ux9zGFTdM2rTmEyRNrezZZXTWpY5qsa2b3hb2imVf8BcbRih6NBg1tnrVghXYMoyj6XRZUzjPXUY55Acx",
  "key18": "42o5ubkA7dgWJDW3aE3XwcbYTthBYKDZMgKTSy86VRUdT8PTfoP1jwUWfLbNh7hM9aXKSEgrCQ5cTx9MYyx8JjRW",
  "key19": "3mZfD9y3RkmNdBbJVTgnkZCuaPGSCkVMNmGJimgZMsEtcfMjQDuH9NFEBvBr7yZpiqyZvHMPRX8aNvCs9FbpNDCL",
  "key20": "5XSbLtvXkwfDMKeimCCNQf4P2eBQG74rEekKxihnhWUvJNCswzLuyNbnLJu9i22CEdGb1ygR3QEwnXTrGebM1gZT",
  "key21": "4sNUknB6ibYrzX88AYSGLm6r49FFTa8v5FsPQ5spDLWoZTSsrCy2BEFWoffq6MKbumoCM3Hi84wohNFe9XH7TrAq",
  "key22": "btrdLapVfZBJcx5cnrkzX4nVKaNzuKNHwSqbUtqdpsZXKv1MRjapNzjvTBkKd1cn6fsidBqmKDAvqjf6KiLCn3t",
  "key23": "5szZAQs2hyi4TDSA8WTZxW1CEidyvxrBB2u9s6rs1WRpq5MzyXbTYoYVKbPyQ9DoS9s52NEnbuL6vwPT2MCBaCWa",
  "key24": "4CsFZbFaRzZgcEB8nu6zg7PmhaPsibuQN6qLHkGp1v8jU1w4MeZRnq31MruGn71dtVMCAPm4geFhLTTzNvMQvvNc",
  "key25": "2Po3Jz6PaSQ3EQ1bYvC4jNHYrkqbVCyZ6rFyfNYHYCDSrzwy13o8JUWGJRTM4uYRgygWzG2nf8hvwa3YYCuxNeq5",
  "key26": "SYRALmXmGTbTNmJCvBGvVb9xwJHyq6c7gkphzaXvvwbTcw3Q3gBtwD5u11PwE6yHipcNef2uBbGQXyE6ZJQgSD9",
  "key27": "4AQ1mNMMkSDk9g4adANdAV79kAG5Es6HRd5i9WLdCk5myfmLqDP26CYMCfhbwe38FdFiaQUCHEHSxugwKyiBbQ19",
  "key28": "4MHzRAhLAFW9PbAaDoYT698hF9MB8HoGd4VdhZpHxyV2Qegn4JLF5cyBJGVe2dwLjgKup1zzbntTnCfg7AMEDPS1"
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
