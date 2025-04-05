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
    "5fBiW45Z31cVmdYyWXaFbf5akig9nLWaSE9TvEEexC1GcDD7TUKgQ5UxTrxnVffZsdnquVmykRVdCjeCviDhPvS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65tRvvPusDd5YSSM3DnztjvUkvRXhpdgBvzeLCJqbJquPg6UPAsnoQM9WBznhafZPq58UVHNPUWrmAraHbHfgSM",
  "key1": "4WVM2JH5pNk7Fr5jAqgjwuuGok43Eoop469UQF6mHvSnRjRSpGASSzr9UEX1gbKU1iygjJXmK8mM1kwuj2BkfP7c",
  "key2": "3JBTaaaLQFukEe3sQS4upsr3kStGArFhy5Ve5FtYKvvstTz16Vy7QznDdQpDRLRDTBHwH1S6ZcGZRH4XkdUV9zmA",
  "key3": "ybTqCk3QQcJfF5sZyxnbQtmeKx6sbg1q8mestHGGShUWy8NDFkD2vLr8uttVGHuLMNETgJwq3934uAp8ARsaXdi",
  "key4": "4rKovpsVoJUB5nF4dMFZSVcnYTL23JK9hHaCdBBhsTX7UkRr4DmSHtkKggnoWzYVR6Mzx8q3tm4qRHeJUZjeZsHR",
  "key5": "5DocL2q7RMXftyZc1hVhE5qJKGYogLPHvSBu9441o9Q2SAju1L5hLZbBhjnYQftKJvnS4593gcKzzSwwYthFoLvQ",
  "key6": "628rGwUJ7n6Bt4BqRnGBihJD3QYaGjT1xcZ34J7qoiZdov9sEJFSXddAqVxuq9Nq3pKE6MH8ddzj4UUdpmqorQGf",
  "key7": "3Wrj6ofHgDXZeqCrFTibv2Z5PPQ9DNJtEaubrXs9hh2RB1uyQDQVM5AkGMbuZo3CQiwsA9b6YfrgJfyB1CDnLnhY",
  "key8": "WUWsX84i83hpe2mN8gEFctZxk1feWC4bEe9mCjxUtmQ6SRTWLjYJzqWxRAfM9rGam881zAGk1cRXo71WWbzUJ7c",
  "key9": "44wsc73AKfmm7ixK484CdCgnuMtEkRun9YP8oFdsdBbjmkPvJnMoNkdwmuG3UNLP1puurqqLKpEHiKW9kJBTE3DU",
  "key10": "5m5LVPtamZv336wv7LxVh4DKtMnmUzghzwUi21p4VC6Lio5pyq45LGoBSCuj8324hjEQSmgmtVpVPqtKeF2eeqQa",
  "key11": "3CyjiAi249uNSiBTW2yytsW3kj9i3Snu4xaWYCHj13Nss2f6EszAdVWDk1ePat6oiwqRZqz5epjkBS4HSQKcHywp",
  "key12": "2APEuuRDy4A9YQtC7qVVeptLo5z2U39XKYTitZ1QxhMqTq9txWQa8U1g9osCzFT66a3AgQxxfmhXPsSAp7jALn3X",
  "key13": "4Wy6YSHdZjDm25HU8ED4ggr2VzuhauAS3Jbk4aGtvwbVhhzeNpTnSqSdbeBKPQn4omxnrNgQwqG5LWPSJ1VoMWtL",
  "key14": "2Sca57Xs8oKzpKtup7au6pnhAVQhScPuXt3zKXjbGhKAEK9PXBoBM5aHV8r8S9iXD9845qnkA5NLAnSWLgRJgomx",
  "key15": "47J9FUxrF94teomFHZ6857uSYcprNgpAuw8TVwdGN4mS5WK3YnjqeJ1uP5iUQzi723N7vsytdTJEPmRixjC6z8Nu",
  "key16": "vTyuNb9QjXp5yRr9qBPj3jvQR3cvKf5KoXbzArX5PS2TFNd7dPjd8pS6kkh6hGAWou7zKzpZGJhrnFzu7zgP14P",
  "key17": "4aUTu8TVnTdaEBNSsBDtrLZoZWrWBWz9sf8hkNM6M3zTpPYhBQb46fyuMSp1yEqt2XXZcgYwUJ31dUmZeW2dY39r",
  "key18": "4ndk5sRHrQyh13yvLjrQYwUNhAqBgZJq39GhEUsfDyqMvxiscTYcxgYP2kJi4Enxy7tEmoA3b5Tj3oXXYzF11Jd6",
  "key19": "5p8Dh5Vy42yR7s4hL7a4MCyRKTKvEQBjH9Qc2pcPQcznCQwoeWsMzvHF6tWkvvrMs2edXk9H8hDAWZDK52x5ERqx",
  "key20": "VNLe1q4tRietbsJSWZtssYXvL4VKzAk46r5NFSP9iZb6JEi8B4CwyCei8Nnc51dRZ8vqTrPNmELQ4PGm1dwbsHG",
  "key21": "3Lp5C7dnRWEAfDjAEcjndweQKLHvqnU3yPEJpLy3rwvDykJgZ5coBY6rA7tiky75cEDo45XZvWVDMGPFZp9uxYqy",
  "key22": "5hTEGgaR6mZyzLbjSVJfi63eG1XPykbrMy2GESDQbdBomKCkZSTVFUVZDhLUxLzdHKX6eACiSc5w1CP9FY9q3Pvf",
  "key23": "3Jvg77VLW4PFj6pTGCpRdaN6FCQU1ptVtiyeRwR9mgNA2rqs8fStAG2gjgpJoJGVA6pfNXEkd23zmhNy817sQAQQ",
  "key24": "5bf2etBh4SmzUy75bUZebvm57aVVcqk1UCwAhfsdP3eCpZbhP6KqdNMzLuFrURbPZm9PTEti9ii6b2Cmsq4c64u8",
  "key25": "sqho9gcF6TArzAW7GtzaCpfq1G4jnLn3x1TevWkGQvEDUGGZG5tkbfnUnUPATGFzSDuzfxmsk8rcZ3zmGqwvQ3a",
  "key26": "5qVSXm74d9Fd9j8puPp1sjSLq7nidzWa5sDhemTKfTSrUGuK3jQQGuxkeMLrPrP8Dd2whmEKL6WeEJHk14Qb7H6V",
  "key27": "3XvoqauBXtKzbSijv4DTwp6u2txwqXJUdvAFyqLBtiBjrB1wt13JUrgAtoFYsbQ71vWeojdqEHt8sm6iGbZVDdo8",
  "key28": "5VBUuAnSVA7ryeDWrLUhsGw53dr1n4Mm5nfNSBVASqZAs9PoJCMJmsBmeuVH4He9jvW5ZHzjpApSdtdCJcxhnDNK",
  "key29": "5Bq2s4mig1YPhkPnUZrg3yAdoJRjjHK8GKJUcLoEUUTtQzLaFHhShX6D2o86vWRNW344ntfsDbaUncPSk8XvMEt",
  "key30": "AKBQKDjJWmi7sMEj1Dh2unJq7m5ANFeKnVj1UgKmVbzC9UQV2zpSzpy4EKi5uATjfPvzGS1WhQATLz4RbvzKRKY",
  "key31": "66wNKfXxyMX5PMn8dUycwhHxgFaN9Eyp7Tk8ix4rEZYDRqobh6hi3VebEuiukpwkSdvRw2bzFPBGSkm8Ygxqb8L6"
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
