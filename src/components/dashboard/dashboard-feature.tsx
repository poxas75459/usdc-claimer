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
    "3VKJuj9kHWaDKsUGRMCwPv4dYgkBdSC84dRBZ7vxHt7bWjyiwtaV65otYDDMyD8qMKMg6MgSP5jhMcWKJQc4ffRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwhecjJ83ie1uWsx4nPohMBRSxbVSKnpFB7FwmwkcRULFkc9RJdErnUZpoXkyrZaHXA8Yc15e72U18HPQMRaaif",
  "key1": "5FBhATXyFPnPRVy287yNy2MGwKaSEpB8t9nswA95E18tjrreVUCtcyvKmspT9huaokbEyVz72CZELEVfSi3cPxh6",
  "key2": "2id4Yzf5Kd5V4jj9aBVjUkN2zwUgsguccDDWWaM5it9TPQg6FXYUJquzqMA78CQGj3LS2cRySGbDJkBVs9T6tePz",
  "key3": "4xBL9kFSpUVwkausHiFcgBZXax9sM3dg5iLtBaKToAbeFko3iLaMMEbxarQPw54nQt1c3aric93SqoZbozhpf8tF",
  "key4": "3XphYwujkdF9RLGDGBTg2Atb9ikTqxoBt6gUPAQ1j1ErX4M7sGU4p3r7a8Wo9N8XB4DNhxTUQTLahbfURYzjNhFV",
  "key5": "2wQss4vmCfwZ2vJN35R1Y2yaZL6nCGevMiQ7Qfnm8jyN1NSHvezNqYmC2Jie9P6NkTkZe65cZmDHNjcdodcRSfRx",
  "key6": "5GCZoFPiEsD9wCu3mZRTCkBSJGLfpJWcAGKnSzv15RrSB9t9LELsAfMshcyEGPd6fK3h89wM8vNvoNYHscmbGNqv",
  "key7": "4bdj1BzNNwNdY9bB6ivY27kA228VcMKeuFDDf9RcfT7F9pCxe3Cg36f8Sk2NboYtrQ1v7BzvVNNewkuEa3MGgUQK",
  "key8": "2H56RiLfkbofrbQ2PMM6g8RqgufuuBE5CHqeyEVG7h9JZ12RkA3smjkVoigeT25W4bgS5BQKHM3wxtxKHURUe9cB",
  "key9": "44RbhwxDCEJ914ipSwQstY1on9VSUGx1hMJtgw3977AzM8avxQqSBcmzexVFw4Rt2U15DrzgctYyEqEBebgar75i",
  "key10": "F5iyUYUy8sqvyfhevHWYjzhyGWL4RsR3vNE9MVnFvrBScydicz88E2zQ9DmKNexmRjuL7ZUYCieNBmNz1wLACAA",
  "key11": "2KRANpEDGiWeivKn1S8zC3Ck4KjJDeT7GLv2e8i2dnLQgJ2JctNgq4sYu675PWwnCkV2YvKX67sMP7aXAQ3gdfKT",
  "key12": "4kJLdt9jScXuCqjPeTXHKMVg6zYrvWWwLUUDzHvVC8W7TTBKpAoM962PfqmDKGbC8FPH3nv11v9DgDfNY8nzaGpi",
  "key13": "uD2rZANqrYXsfifmwjrWYuhTFhr5YqGBzcoWt45jqberqQCFF55dLMRFE8yy8kYhbSEfkpcjDUkHBAwRqfUe8tn",
  "key14": "5RGHsQ9nwr1TwLa7JiamcpXe1vqZYMGAY4GszKUbSkVfwvVtvv2b17kyfPbYaKstfAQRgaD8rDmszb7QCcP9hJr1",
  "key15": "3xrP2hJBhN9gBnS5QM1fmowLphX3xoxz5qSRiLRvj9JfKex7HDWByqPDAyDCeFKWxNfPB4n3qd7NvjGb5MoWKTQm",
  "key16": "3wmxrWaNkHXCk1qP2MeB4nFAuT86YQKcdbrE4mwW46SM35z2rAFYLjjZYCZyKsj59YoWzgTZ5kwtu16G4ocYzWLs",
  "key17": "5N7chJ897S6CtqEuiFvToLeMzNkqRDYNkVjN59vgCVmraWj6R5UNhccBbFHRo1mVMbdhPZNqy6FGq83hPzkAE9Qn",
  "key18": "4NcE6xd4vhg2HMgw2o9QjJfAUJDJgKV4KDvzXLQm6weVunWkdnPGvfLCgxZcgaW2nAFzvd4td6rYAYjARzgKGgsb",
  "key19": "FTeMxea8fhTrkoq9VxkPZRRZ5NZayTNHet8WVDYdqwV9PYRsPJ5h2yYn3zVQXd6HpMCHpxvH9Ur5U6a9xXHLs8G",
  "key20": "5cpnD19WiT9yiY4mbes5auiTqKfYBCrYeNXAt7pj6NdmJE4zjiv2nJEQcC8iViPwk4ExqKqGxNFwsoMPYJKWaW3N",
  "key21": "2ZMzq9xYBS5VMVwWmai49BAyJCfWPYEFPk3hVEcjy7GpuwGRpx7xKDw9f71vju8pTwnnjMyJuiSCvfRTgZ9KjJGA",
  "key22": "QHaoKK52trq4YQqYFxm7X7SHPKQ1XHKLPE5fdwSYn3oyVqGqRkDpcsQ3H8EYWvFZcB9vTRvec1AJ5xQCamQTM6a",
  "key23": "5cZjimfinSasgu1h9Qc7snSYECF7oSp1Gzy1zHEJ9BM7R5wDMZ72g9pKujNb8HFfFaFmCiTRFajr2vyy1Anay3Si",
  "key24": "471QRTqyg8nEwiNrkTH79F77iGUcCejtuvqeUFLYTf1pBLWvD5wjChVbEQugGADd8xpW2wz26HXAhQTBQKGooZHF",
  "key25": "24hm2mLQLqrAGxK4qhAqNvByRmuLCf33RbAJmppkrdjrug2tsN7AB9PW9cnacBiGYiiorUnmppCe2Y3tak2SptP2",
  "key26": "4MF2dY3qAoK4aD3M3FZdk5nNQc2U26rMVGUm39NLsaSU5di5FSycMmj78xGjGTsNmB4rxinvfmcCt7Tm1fc4YssC",
  "key27": "dtVZxMeqBGB1SQg2zJRQx5wMYrSnLrDfiTnpNum4m1Pkd9Yt1tEJ1BgjqVZXxpSg1Zpqkh1vGNqH5vPx3LnZjh8",
  "key28": "4wnS7yqUy3oYKavXSGgSJdDNMh97mmuTHNMroFKQsEM1wLP6DwDUc5o2bZfcbCQTNBhUSNJT1CK5vot2WucnJ1fe",
  "key29": "34TpyCBk3ZJabPzFUDdKfjRSHWuw5UdtKxkL4VRe9G91A8YqLFEzcnyFENkrFg9i2zY3pY5RYuRM3bScxjaEiaFJ",
  "key30": "65fNDPNpXZxMGQzRLqdihuU5Qo3RpAtXZ4GSr9XEADLbrSnA2BekSfHggyto8KvLysT4ieWUFHDTdB6mTMBRmtBp"
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
