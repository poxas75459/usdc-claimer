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
    "4582zRJhLMXdEfZoBYQK9dyWyBWgMQRBgsVtiJHr8vEBpT9mDXQjdum8swPNec5nsiJKh1ogiBTAzprvMz5K1sXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQivpX7iszb3dbvzYvBFtWursUHuBxm5LwknzSUbua9gFsPkvdzWgWUyVAxkA5Z1BURrmqWAh3CqLzezH4uTACc",
  "key1": "5bWjMD3wktZum2A3ZBSYRC7yiakVgzQaCXXSPwZJUL7ZyoLhqNS5jyRpWjKepL1S1NWWhGuEDnMGv6nh6xaiQQiW",
  "key2": "2FbPAnu6zHSxLVGburJdDbwAx4Dk9QVUEdkVeT7A9tcuzxPXxHiMvm6Fpn5wXHykFoTtAsr7xtdnnVcaDp8BSirG",
  "key3": "5ZbzkdByYwkZqGdDTEY8zQZq9WJThMvKi6xgUKheAfvtH6uqhk9fnPGPY3qaYJAMf7sCnDvgpJYp3UACBfqU24bF",
  "key4": "4NxChYEEY3o1KJQDuNe5apEDxwHMuMHd9QJDnPxVHMUcoPfS1GAfb36xHFiAHMcuCLL9xunhZtkZ2VCxi7CduGVU",
  "key5": "snnYw1jwmgJ7N4Ved5bw8VcTeqnXGnjwFKoaPU78yAJJzZMzbjtP3YQpsdg6e9E2aYPed5Ukgwzw6UM3ou5sowm",
  "key6": "4y4y1dYnNTqFdvyDBLi1Wz31UKBN7Y85mQznktFxM3EwcRbYVfasAQbHNQFBhJd623B2Cmo71m1dCJYfsnqAMWoa",
  "key7": "4THXosSckGXV4ain5BT9EH1Cq7n1WwAQcLgxaSiwSQ1fT23tXP36kq7rUoSUWh6z8dZabtt7qhPh2e8VFwbR6KE7",
  "key8": "54ga3WV7rG7L7yFwWS1xUj3hGNQHzWAaDZqa7rwY4zFgtTN4NuksyyU7uAtjb2s9WmWZxVC7zqe9vjRbV7QUpxR2",
  "key9": "bebk8eVmK2eT7kzKbVUWA17iWhC9Wuvc3PdaKvT9Pijy1ECS5W5oWxwo82c8n1QZcdcaXWH8ZEgaUW8Bb2Z1Btp",
  "key10": "64UD7iUwvm9SpggxCz5xusXJhgJVtihJQyZeiJKDJCCTzJ5hUZ23c929Uw7MbMGum4M8bQsfdJFD1jdmphvyvxsu",
  "key11": "2AcQs7zJ9KugtnGrSdtPu53oKr1V7z9ioqbTHVztnnYkYEokpeXEiKKHT9KRMdRKuyvQsaXgdoxhVZcpJDEXWPP8",
  "key12": "5y5S4Yp8CRftSTnKZGEGgarjWySZnyVkGmHe4e6qa21CYXX1tjgUaHaCeWdEuzbeqXsN8CjRBfxU4s2BW6sewkQh",
  "key13": "2uPzLTLMn9CzdJWGkvYs3su2oitJZGLewy1qEC2nHMJoAPa4K9kpRqbcKRPj29Df5hud4gRrQRBxV6jjNjPLphgH",
  "key14": "3PUzC72z7BjvJvNWBnC4xv9uGHdfCiCu28YiaV8xpZNaV3YyKZCK7KBukdERGYYnevziUcvJ2fhcFYve2yvNKzjd",
  "key15": "2XRHYVzC75A5ykGAu2HiwDzopP8FJjNmLVWWRLscmm46jCvURsPZzKHtWgVAet3qtnb72WibYDhyzfiF1Cd41s5Z",
  "key16": "5e3qCxN9yVcRteDU7mTdwCYWSnNCiaUF7wDzk64UGy6LNwdjNaHZbaCenUd7S9axX82WfU5ishuEQXtdPNkW9MFf",
  "key17": "4LMttCy7LQF7x8yZiQeyEqJANKKy3AAWHsmt3evszFnGPt3DCaxsHf7iRYqPE9YCPtKLTJQcDa8Qf5dxTpHU2fso",
  "key18": "3E9aTdwpHyVmemx7cRzKkGq5XZmPTDT657JrwDKMF2cR6wMXzvoZSAuojfPXbpEgR7CXqVe2PaJvBvDPbEYru5Se",
  "key19": "KfcBWGUTRa62kmh3U7XUP3uNvAPMyLYFD4mgPHpTM3AyguSomXfFFju1uz63cDhroLMMnYA3ccMB8KX3muPspKa",
  "key20": "2Aj5L1YgoQDX1kx1vcGf3ZxWdiGuWrToE8buDaCabZaeBi4K34rN3L7SvD7YtHCxGLRKyNdFceNXb43JprkWqtTV",
  "key21": "2xW1DRDhixz5wcut8EayqqLzcuZN5ShKiwU6RmP17Hh5sqgB9o4C7kv7dBTesA3mCXsqhYZ53tdG7iVzCykxD3Qg",
  "key22": "4bbSxxwbGNTThPHRUzmahvBTEvS4odScvptxARYtPcDjsW4zGTiEek2Gtmb78D2AunzfAzM8ByxE9AWYCTNremMw",
  "key23": "mod1WLhXG1NTxJpPBpyrbnTVkYMcfaRXq9GjDr9BzmiZkBG96EsL7FGK9dzSU46SaLAnFv3vGeCLZjJP6j4geY2",
  "key24": "5xtVS8nSycGfKF5WVpr8a7MMRnunNuNTuRYuiggm1v7wHtZ5Ta54kHXEfG5NAMBUoyydaCYirtCdLcHXXWEib54y",
  "key25": "2p8Z93q2duvFR3VTSKekp3NmvF5muEhiMxsp6haSxwBNBGY94RvA1HVhLQbJxbBKF3UjfJgqugfiCkwUKtY6suPX",
  "key26": "2yFEQBKCL6BU5iM8rGSS4GVhPTPK1QFMawQHoYMGFo21hfRpGTHhR24U8mLga17RsRGjwwJMxqnNdiZ8cAEd5CqG",
  "key27": "38ertdD1wMT4zzVWb6CKTJwge6iCBoZdbAjs7v6CbkyzjhqA9369ENSHQci8aZrnqQyNsSYUoT9EitgotHnrwgfb",
  "key28": "4BbhuDNTFom1WQPfRFhxeKivbdvH8GFZNsXsAuJuczFJ68dJafF8YCmeBji9Cq1H4sWJkqNia7xbkC9ATdAavovv",
  "key29": "32BSvk9ShSuqXsU1rKU5QqyvzYsBw5i2J6VhsM8kWyjwmd2QwPKdHccThX3c2BMh27Xk5VkaA8UTb6qbErZTaUWf",
  "key30": "4SGp26EEFfZom9sAEcddptiKUs9KEDmMZxSnw3M7KcNoC9fTzEDiA1WwtX65QhJzWCdnCJB1hmTgts9QJ4n6B2V8",
  "key31": "2t68ZSRhhaXBhB3DzUEXPBAX1eYN64MdXHKtDV8ruGo2VatpppRxzhxu1e7SBbfGDQND5MbViMrE1NFM5r76RmMa",
  "key32": "2jVVYuTENg24puK8HdaNnhedBMY9Da7xRnvs97qQATLGaD67xBd1uCpE4mRYq1zoh9dZannYVkLB9GDeS3PmAjY2",
  "key33": "5Ea4Z6zfh2GfkkYGkf5bajH5V3ofJcmacGc7ZcmoyUi9apTjQDnjQL8ykLzr2ZUxkg2C8bfMK43RwEv9TTZL3w18",
  "key34": "4effw42bXt8diVeAThdESj7Jxdh2y1yf2rw9SjPogKcqc3tJWZxnmWHw6atkTDMqfhcVbWava4i3kJw4YTwzN7tc",
  "key35": "2vch6eMkAbbs6TwbzSvWsGCfWwRtnooYvdT29WQHzs1Au2Wn8xxUXmCWPAYGYnUUQe14FFVaQiD9Cw1HEVg1Vexj"
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
