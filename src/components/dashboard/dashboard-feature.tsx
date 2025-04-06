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
    "3ZTb4qk7PtNcQRXagokcYGoFovwDYqK4C9is8TfMGdnimHNBcawcJR9h8JiAVKGMQMDW7wWNuX554CrQ6Zep1o8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejPi1x5kHvCzFykEpZAuEfDraWCVBCWSeVB49RMaLEMRqJbgNo7FJedjxH6BBgB9deskTbXk26pzF54ATG1S7f9",
  "key1": "4iMaJEAxeuVAr5GGZgq9tYuzcA4w9bs5urabb72KJ6EE9q97W41n48AbkXhwmUcPvskhFTdBJ62jATtKQ47w9nH2",
  "key2": "4dM5cUncLQLXpd2ir1AUm8YSUMFJZE2yEEH4cdcxkkFizanhqXUCMYBsMTysKbfprrUE9vSSiLCmSoCZFLSRg6Ue",
  "key3": "5zyARP2AvwYE1QbJ91orZMmWf6xfycyPmdBDcTPUQsd1MScoSoGVAqErB6VWRmrqaykhrh2GosTk9Ek8spGHHBR7",
  "key4": "J6ddEufr6jD6PbmZkosDp13Z9jGbhZ4CW4XSGc66xDaQwU3f3kWMMHC3e1Ejtb95YkqqsFk1JPcGwGuxD11p26B",
  "key5": "58GWx7eAfcZoGaLt3xvdiBUbeR5rdkygoRaRif5evPkhmhguwmVj4X3RpriiB9gdqQV8tKShAwgt2h8rQayCGoxF",
  "key6": "66oPLrSPtvpmS5iCdK7BfxMCDHsyE4BHPiqSKytFwhEzQuj2uX3ckP49aWZuqe5nE5A7PBYb6QaNfUe5WkrJcAcV",
  "key7": "H4QZVQDchRdH4B96ZfpVRCsE6q9qQizCiSBXXQgSqXAy7jd86f9uVHSGw1ANhfkHRpfVXfTSd1QT8i7pJtB8rUq",
  "key8": "H5o6ERNxAcBDDNKMf6zhBaq9n9jXScZfbgT6zeBLuttja5ZUvw1XD6rwWTzcuDJvx4dMcXrzMVuT4iyhti2NoEH",
  "key9": "bkxcDTvefvinHno3G6Cgv8fvcVGE3XiFY2mr4fJyLeFoZpxnrsHBoJd86dD5CBeh2y1Brq6g3jE2xP9msxLprfG",
  "key10": "yt59f3RHzWQE5seKCmZf4BS8gwSd13c1ASm5ppjKxnrXrXZuJ2PZDpasKSbsSjZjqt8UGuGvzi8BUcVZsS3pKug",
  "key11": "4VgHTG6KhFMExhgGfzbhMuoKkTvavb9FQVevCW8c2x31nFJT42G15b7DpAU9mSNAzczNuGFtcNg51mDVL8iHMwqn",
  "key12": "39XxNBqaUz18b2RM3TkBuLjCaBFtTF5qUTPU5KTvouFkvxFz4JDv1yxAZ4QHzAwvpxPciQfsxQuBJLbeDcMSFfJa",
  "key13": "5ugvZA99FAKv2gdGpHT5FWd1CXgNWZNRnFxM7dvLxMBP29Zvx6mZqzG3EiTxKCQMZ8BHZzzAya3a1KJ3ARAKw2uB",
  "key14": "47mYVck6ykLMDeCXUw1DwwwDG4HoZyfaZApFY6VL1qRFFkFMqXcA6Q92SKTiu9YoTrn5UYx84rXzKbK2Lfqw9eqP",
  "key15": "3in7dBZJ65d9JqgYaNV3vdTBQwkdtG8wgLGfeVG1shnPKgbbeHP2xR6NGwHpMv3x9kHEnXALPEHxrS2uz91he3A",
  "key16": "48285JaAa3KxDFkNVCpGWAARX6HspaAP6b9dvm39wmoXKuh9YRW9Xwt1kbTeYbRLEwuNERLxT2c5d7MYKPH1B7Me",
  "key17": "3UmRb56o1bBHNA7ydwV9psKPGVPXj8mLXgyh8buEcdf8DWyWBGbfqvv6D5PHdaqa8ycEcxx3BjWUAD3bjVYvW9Xr",
  "key18": "5vtPXVhUyG39TkH9GQLnwayXY27L1P3dQVEmsEYL9HwsMdvFkeVwW1HzW7PQ5SKMNHp819riaDjECWkEEs5tKi1m",
  "key19": "3e2sZG4cZCzjZNA8JceURmD2fGgPnq6gv1LQJRo92wpk71oYK8JujHBewWjKnMCxMKgvLHtqyfBExTHgUqMwmZVB",
  "key20": "3Yt77gHEE4JnKHAhjSAR4Zse3gCmBv3A7v8phKJUwbDTGgN3KegAuNFUh1BR8MksSoCJZqoEpMGAMM8hma4ovHkF",
  "key21": "43875HEf754e6BvGRtwh5ndgA3D461ZP7exaju8hGycYEgn9vZaRrhRCageHFz6WhuhET8diQrKWY8ShnD8vMaU9",
  "key22": "4SE1zZvJzxJDeCWmwxibQosi8hMSvsWCC4bC5wDBk2YMViMQjdVHi5qsbKnAVH5hQCQoFwQppn9A5fCKZT2zSgyq",
  "key23": "5YuVfAZNQMUX9GKkNA1yMwRJmXWPVHt7hMchsoMKVyJy5Y6Zky454CtzNYqHrJUdL93RMfqZoyhd4rCA9zDphdLt",
  "key24": "4sXTRPTcYUDkK7FUyn7SsjrRfaYasYoM2hCYMZ74MbhsuZ3H1jQvSL5K8ybN4as9w4NwkxnoZVv8SescBZdmmPFx",
  "key25": "2Z9XMpe3RHKEBP1SrCSiQ4FThcYg1DyvXeGNMmkxZGbffn6VrF2vXE8v3mTX3fqoGDNxchP7uyNAPqHAY2fuCmyt",
  "key26": "3XuQe3ZZZewBhTtgPFNyswgGNV6VGranULsFvPPfxGB9NjdYpgwUknDrc7BDwjnDwSBNgvJpq1Z1jFcD8bNSY1wB",
  "key27": "5WFWBhM8k5iA23mRtgk4UowDYZJ858dQzbVmfwjQ6NcoSbSz1eNB42W1NZL2m6LAT44fMfGf5LC5V7NF5KKk1Ufa",
  "key28": "UW1VmLDSA6U5oJrUSLz72uU1cwyVuDeHVkKyxLnsFt7YaY9hELaTdVU2oB7ST8M23frjA4rnbHJG7g2xrrJNNoZ",
  "key29": "5ceKPHd33mAX21UksM3XALFLXHUL9RpZ4PRW1cAJqLBFd39hUyQCwxSRvbHbHiE2hQNxPna6sfuXq5sCq9V6F5F9",
  "key30": "cyNakzMXKWXg1ZsE3ktnHBU9E6chKoxGrsNDAbT8CNhzPWBJ31mt79YGTFUmV9TKRHBFSd5dMMLvndBPtBDp5ta",
  "key31": "4idxiBXVhKQKvfyXWL6qcB5fVyeWSjzaxeoUKGzVXqp4ztP3HKzi2KBzkeUKi8LpWpsXoab1x396gBBfFmzUHNHh",
  "key32": "5b7Gn1ooh4EVZQtPaJAw1jrkAG9xr7LBu69UYjxL9jZcHvn9yp956d6EpGjWsKpr8e3Cokiis6zuZjk1wZqd1uzd",
  "key33": "2oueh1b6qmMjtFeLYcMGZon2sCbu8pUY9ypPSTcx7Gh8oJF1s18yH6EfvMoKEqXQXhPi5eaoVvptCH7hdiL9qBaj",
  "key34": "3vGfpaAUecH9FT2ngicCeYXR743wcUP5x6bGzaEbCAsYf6iV2AstshjGYXKfQww7haxf4p57JZRDXQopAgXXCuEa",
  "key35": "2Wr1UF7muXCNcWKSvBqrJjHUb7QtEXYk6CzpVXyb7LDWDpFdUrrnM6BXt2Lfd7kqkLs8TJUN8WQRTbJy6LGrxpFk",
  "key36": "4GTzTPP9K2Wz4vXuGg45J6ZQLigsywBjwC44rZTdR2vRfLKfhsn3WAnbRetdoWKxqCPVqiZCtrUoAz7DPx7g9tEN",
  "key37": "4nrwcQD1zeoPYTMReyh2BvLJbLZLjovrMVpvFktPW6rdzg8fdxTQHfdQa6CGuJe63a6EPrxyhLnfP7oDuWdYjBtq",
  "key38": "53TSh59ux2PwumuXTv7y8rYUvWMZwkt7ZPckE7Exje76HTPRKzPWWtS7A6sAZTG9BYcEwZ4hDAHQwAGQY47aWebc",
  "key39": "4pzWwxFAeDySLfBqPaU2aVWe77kuLcNSL4TTqHhxNj2ALgE7ffUmJCQsFUpyUgFRqRxybKmrzN3ceLNWc54m3KnH",
  "key40": "4G34YygALeY7KJ5gNDGSYJyZnv6nYSwM6fgHXw245aPVSpw311JyVpM6y8EKy7v753L3js4p8oZtTkW94DTNSiPK",
  "key41": "3FiiWb6diatyfVYWHWv5rUa9Vo65PvVASqAMvpF8aTAC3PVv6CXnahqgUar9wgXXYc2qEuB9Z4FsSCT4uZtgfyoV",
  "key42": "5fxVMMSUAse9YQsrBwdqakDuoZH8PZPs5PhghC7G4H3zHpAVzeNZj3PRWKcKtEJKzacATTvHaiahMLK2ppfm7gS8",
  "key43": "wk8t7prCwMBFkKJ2cEBy28rXrHtunZrqWcX7WAEqnNXroVcAVT2haFvCD4CUgLzZ5BUtpuC3zDWVNVspdK9ZFkj",
  "key44": "3joZEoV5FwRewwkp1FPixUx4jAtRyujuq1Pa8YYS99DgCePa14dCVv77xWYCmoKt1r8ZSyWPALtpW1FuaJh7jG51",
  "key45": "3ks4KSvkq8iGQ2qQdFfRpDwzkaPdZfgBvAbdAvHEapQbe2sriKfb17iSo5utXrz4Ruyuk7s9PaRb5nzUswPHFewG"
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
