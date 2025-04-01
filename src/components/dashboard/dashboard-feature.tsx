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
    "2tmhKgYcpULoAGiV1MxUmQ1KsVBiLLrbE6wX7hPpmPiK8tZdnMSHMF5ccDdchp3W64k2xH3be6TfEyXMTDcHdnWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413HtenXoWJARB3xuhPNLYQfPL5gc6UNAcS9EDQ5MVAQt3fUaXGXtgB8CQ3i9Ew5unApqPRPd4uv1gBUtaYrgXw4",
  "key1": "48oM152Kh9v2vvxQ8ki7kfESvi7nFbMUHJ1uKinBF9amViiohgXic79LHkikXb38QqWcLJjQ6pWbgiCjSoibVEFU",
  "key2": "4BpRvupSL5PGx7HWDLsaQWpPfPcqvzvJcWJWWCcjL7uhhmLm427hrsgsjFJ61t74ReM5YGompBf6rqoJREHinrvs",
  "key3": "3GyaWB58c6ikEcujTvLhqEJPVAhymVqWyhkm11LjePM5gZgfjFALicnUUEDTsoMAz86hxyoe6azoXKUxaQiQ17wC",
  "key4": "3AuVbdwy1HY8SZTQuPug1FC5mrn2G318WRbnLHhrr6bMdY4Rz9pwEiJYQtAqTC85dT1QjGyfKPtiUUc4vAgzDEsC",
  "key5": "33BZVQKSuDQcpTQ2MJrjhjaNMNoK7boL2XcdWrqn9ZytPVgPzDY8DiwVD1AGr5fyVFw5HJVStBMni4wE4xvwxhkc",
  "key6": "2ZdPsCgoASywRYHk1P5BCbpdzpiN3dEd4WTmv2ThQSAtTewkq4GP4ACXVhFHyLAfLT8wDiga1tEZjQXGMTsoxm55",
  "key7": "2AxgacuragK767rYb7iKeYfDWyeN4dD6AJqbzbDLPFx3ceDWkVUXYn7wDniPgBkuub2khTpDthsDkL4FYQYoV5T4",
  "key8": "3ViNAXK6m2xZdDogWVqkqzB44QLszwnTtMLX7q64KL3j6jtJpk1iNRPMFSrxzeSRf4teYHR3QY9qp4aqKce6VobR",
  "key9": "2yh7oGJWhEPdUfd1oMeaDAAipf6qjzSCMaHf8CGR7uW7hkinkJFgxCCTyq53zGUwQg3Wwi6diZMyG5Lfu7orwyUk",
  "key10": "2SjDQri2JtajAkt4fsgafJaowuazfggydvxnjELcMvs1sT9h8XAmDCRYuxRRWBiZaFXW8KN5ZUPWqzVfudWY4dvt",
  "key11": "4aRFJ5NjNbJPkrY5e1Sjq3Nkr1RW5QKS7z1VwRhAUxx8bdskGqVkr4tE7ELY3T4TrrCPsoCR2AnXRdZsUQuhaR3a",
  "key12": "UHoSNg1gffC7xgbKzgquRidUVGYp9NfpHtciH1XbWFsHkvK1QXxvRLmX9adQa4MeCohaKShNpZEuXahS3jNCjPB",
  "key13": "3WNuyvFJfNFoN2nYNJgCezBWNoG8Ea1qfBNu8W95PkRz4oyW7TQKgWU5DZQxUqkr69qF8foYeef1PcPwvntVxhN",
  "key14": "4GbZqPbWKTn4TQFH5QStkLtwk9bz5VPqkZiSp4ApnfYJq1fUDpQh9kXeiq54dJmRanT19pWHBeMrJVPUnYmbKRgL",
  "key15": "52eASFsEBfE6ag8gcjnQ5mBEkNho2XzyHMfNXACcvR9u3asX4DKYiifq8at549PGy16gGCL8d2WW2NN2jYLaDEnc",
  "key16": "3AVG6qtVhsxxhiAEU6bhxu16TF5mPwvsMD4HCGPCzqoGFjJpHcfMKTxvZLnVCcnYFBp6peCnJvbVdpkFApC2hjUn",
  "key17": "mBtyPMJrAPXcREmUnwU2fP3HoUtphS6ggzKyZUbwZ6MRLo3Ydgyn4NVTm1k9V1QkfqKLaCauEGBfAVQnmXdF2HS",
  "key18": "4oVgf12wPeu67sFEs7w7CfpjmjxVWJ7JFkL8xp9kKEW7U4NYyp3MoHkH7L7SvSAWrakF64u9GRjiT1pKUh2n3u1a",
  "key19": "5r5atooodNUHs5hHXuj85f4y6zZkA83arAPfhoVQqj3xEZ78NGAVgkVC6TW78uM6nmoXwFxaLZ3fQ9pCj6YDkZVK",
  "key20": "AXRfDLeLX4h7SNVGCQrSymStnJbouhD5D1vYm4jbk3XBMUXqEZhBPGjXowxDMrJWrDRbqjHnEdVw5XmUGePiRLR",
  "key21": "2UkkhVnFgYQARtcLxhJU8VYW578nCPdVEokhE2RCRHXCTsaLM3TKpJEYW5fZ2UdgQkRa3eSpMM4U4U9Z9rMgcRNz",
  "key22": "42T87GxmhmJcu7KeKrLbqwGJKZ2sKw6nuTYveUhJVUkpNUjAQfjZN4eiAxKsmb1Pk7GNEupahS1uRZbisTqDryVT",
  "key23": "4KBvNMSijHjQew9ia6GceGtFoum4prxzGDdMxTxCTsQiSTZPy674FyHyV1TEzAtEVnVXZWcv1TmkgwuzwiAAZw3U",
  "key24": "4m19AEzBkEu6oB27bNM5mcgdZvsBrCS81L7WP1bCbXFnsETGtmcXHZrPmsXhWNnMimGdF5uEeWbFK5UrzpoHKXNP",
  "key25": "52w5UsVfmkrrZUa4kNvuMbkVr1ZyE5781Fr5t3g5fQbpQqqRizyoNNRnhKEfTvzpBtNYQMAhq7GneY6wa83prTNe",
  "key26": "5UrWWJEYQwFuoAhhZJXtyffJtez2bECFC1Y4vqu8ktX6dZxz5hYythJvccSLHkt2KQFE99yYpLy9nDhSZ5rtcikN",
  "key27": "36Whqtn11BnHi8bYQEF5MJExvpVHejYVV6xK1Nd6P4Qpke528TAZqGHEcu6zfFP2mZokymW6eQDgzBxPKyY2UdGT",
  "key28": "5kUj1yzgDUNngV8ccv1BzTmLn9N6TdgnU5QeTmncfZHb15QN65mpLKtVKwKEvkvVyVVAWzXyCPqB59Y3u3i5y5Qg",
  "key29": "2xLgRtvtytUVcpdKueug4Rmp8fxEb55RnrcdbytLZDwzEUdbm6B4fuX9yMLdaJbTYKiMcrben58uPbkn7TYw3fzB",
  "key30": "3zu8GNN1AK4qgpnrwK5epaM3XrUUqPmT4Xzk5UqJn8Mg2dy7VxCH2f6A4qdepFmWvkF5wBVVzbNnceD99E71ZBJw",
  "key31": "4yVNhySsqYKfuCLWdLDLqVtNshsDxLwq1zvmUST4rzEvhV6v5Eh9Py5FZhvj19Xcc3bKAoNvAvQqBUt66CyFz37K",
  "key32": "5B59Xtq8qmxK4J7fHYksgz6Pic4PXouhxN4Zviqh6jqHQ9unEDP54CfZKDwswXbAxj3kFJ2JUPJHLnsQKRqExHSk",
  "key33": "4696jouKiXQzRQMekD4XkDKGK1dJdoGC1Y2u61anjeQ6CjXXxwSGuBig1KdLz57oQw1ZSBSX1G1QAqWGtL1foSGU"
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
