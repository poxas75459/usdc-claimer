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
    "2ije5VGdn9Ph3wUibwPi3635krhzEKc2RVTzVeQvpHQuHAfyypjpMwiz7a7vXC2qWHRSACJMWsru5XebHGYmjGVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vTri6NbmH9HQJ9Pmd3KwTu68hEjaZxgFmgQzCd1wnzcHwzs3fknRRakitrtk1RNmibmdeDfs4ykms5LJtDGsWpL",
  "key1": "317iMaPKKkhYiYoTAjdayWfEe4Jku9GfA1QtogirkxQciDLRBwXupg3hPXR2DdajzCLYwe9NeVyjscKfrW4F8Nui",
  "key2": "5QbWYJmWmgzB7aXKgHVDcGHnFQUYkEXSDnntiXkDbK3tRaYtV371SdX1keXnS5rAib3HtZU6V3W93x8uN7GAEUhL",
  "key3": "5yUVQ5wznQBDZGkm7A951cCawZMKMUsngKy5ZugcGvZiFA2NAL3UxWxmAFf6kKWN435G31GcVdwMg5YZfxaQM9UU",
  "key4": "2Ye3pxi3yyuTdJgNMWAZyMEtXv1Ds8YSgLGRMpSBSRLNDHnDdJXDrvN73mvoQmgXJtEKG2oomjDsH8FR228ELGz7",
  "key5": "2TT6gG7qYyDkFkjapgGNBLJETaJ9WQ8owEzbJW9SwJbtSo4SJzybvcvw9aHefLG95fdAVXTxNR2wn6yUtvHg1v1U",
  "key6": "vgEt2VKMXQ1BeBWhFMDoCiKe92oyYZ3uXiSX7tVcY8pbPBf5Y2JsHoSbM7D7dQ2X1on2gMNYPzaW3irr7NDfUtP",
  "key7": "4dKj3TBrucn1dsGq5rHsNS3SWnSS95KUoZ7WULWsjycDcZxDj8dQKdGQib76dA4xRZ3RWhGkHqb7eLH7NbbLkXPc",
  "key8": "dK6yzLEtpN3UZBptAp3hWsT2Ffvbgjdq4abqj87q1NdAtmUXPPJFsp2RN3PuY8tc5FQA9YX4RgNw7mpNiYXYjee",
  "key9": "66jvcMFbeRVKmsf9JePUaP9qr9WiX4kNXqsZ2ozPCTA3axYDfkJCgb2Bn3Qb7a2yt1cNx6dL637AHLzC5nPyenTa",
  "key10": "5o6CBsgKgzY8iZMK2h5Rm3FTbfdeXUTMoBSecsNcC9eHYGimrbF2Pqm1xCGYDYrHCZqTTxaM8AG7EZ7iocPvaJGy",
  "key11": "Pu4UxDYxFtzzTnozb6rwVooWACWfi88Ctp6boxeF3Q17xUmKfeafibSXTpQmr7aNXBG8oJ4XehCcxr2BLHtsHRz",
  "key12": "3NynPcJq9TzHiRoyXRgSSxo9UJXdD1HkCmdMaL85pnvhsB5XSnmfNSuZuPw1oHbQwMAWnTkG2JpSUFYcWVuHFKWQ",
  "key13": "49MaBxcVnBmSZMN9mD913ZhtycfqYVtcpbn4ehBY5sxGd7Zoq3xi5Jyd6HMF49jH9YB5ga7drob1wCQgoubp2NoD",
  "key14": "5MeaagbHq3bBFSbAuXV9Ss3qEGcHih7CiE225zFTZqNTFTznprGxYPZXMX9mbubHjjXi5BErVBLDckEQNuKH9cFv",
  "key15": "KsevXRJjZugmuQQbXZg97v2P94Pcg29p4MGgXzdwttwbwY8LoaeA8MZXfdGVSGn9CLRAcva6JhWggQgkLJnFh2Y",
  "key16": "2CLGSJVmrCWGecg5WeHrCegXHcPGTAhvGjG2hD5N2haqZJhvpYniHarxDgDnamZW9hP2ZH1cKUptwyKQQxWgfLU5",
  "key17": "3nLwmp8aVBajzKti1XacahQkn7bDGzQfau2YubTQkHQ4DQVSFDZrNBKBEa59Qge5Fp6ZvwpVPimAKUGYF1vwX3EM",
  "key18": "4NCkbQhmJ6pHuk26ZYpA7h6YTXZJKFjyvKfJAMCFVmy8WSzXsA2Q3FHfSUxoJxP9A1e1aQcnPXWD8fPnapm4Bsvz",
  "key19": "mXizrSeDnw6Ab1XvVvQQKndpaR4FHe8d2msdtBCUic2ApX5Mgrcei3Tyj2CNBzhiLNpMSFjkdr2a89ijVcebSiM",
  "key20": "4NqBvLwbfC1KkrBYj886hdmfqW4YDSdXq5KeeeR5QEfEqPrAojw7AGN2HtjKEYp5JxL8koAjx8wr6L5wNW9Nsen8",
  "key21": "2UtBZJhACV2vZnyxwi3FoJ7mGGXuou44mb6iXG85Kszf4Bhg1qGDpT9En8yG5pu1AyNz6z8ZzV3tKksxPY9rfVZL",
  "key22": "3RqeEyU2a6Zzk2xv7eWBCtGRL1wZ9anyMiaZL3QtLGvQcvT3RHpXonKxqZ2RHa2BRemN7M3MiVqoZVF3rwphhoCj",
  "key23": "3VYCNPh1zPYY5RRDQtqPqkRqssZxNcHDvTrswmXdJkk7ENEc6xM1R7TrBu3Fg479yxwMRpgh22eScSCf52Hao5MV",
  "key24": "SFZc5ZEfrgaWPjBhwZjhkvjW8LkSve6oJ3jVN3M7YAqYjpp74KdzNnH5gXXQoi2JSV2SqU7PBn2uLuuHLuujk6Y",
  "key25": "5X1k9s2LbNgYmngR5ySdGvbkyjt5SKQ16iMzz1jD6DpWyHsc56N22mzvZAfR63BHTDKPt6nWYCf8q1TLrppABdmR",
  "key26": "2BYqtpAw6rTGxwBxgkdWWxR5hCEvwG6Fy3jm2rkufkFDWgYCAFozVj14dvmzMbsxN3DcQEYfXtnGvcKwA9HdNwka",
  "key27": "5PvmpSjLidSz2CkVcDKANFyjDw6SopPwv2aHgoyf7XBwYpGn3oeX7W1ria5sHrLeXhjW3H9cjxytuSmBihfTg8Kt",
  "key28": "5fxJMbZZtJbNUpp2hPazBLPa3mrpacXS6LFQPgnAfYLnBupmT2p1QRJkd4ciE8o9vsBdmj7HjCmDSsrWcAUTVWdr",
  "key29": "469zkK792jsNZErsWR8mNfuLT6y7ZHB1y58uxpc2Emhq6yoA3vP4dB27vWvxSxrzGgQaEJnDkpYp4H51MbzuyhH"
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
