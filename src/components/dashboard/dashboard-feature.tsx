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
    "3achUgoFpzMHWqcnjjvQ9g4G2jYpvFwbhUHMc1Sy4ZwMWN7M5Po5UsFBWcC5Ap65Up4Si9Y8q71WupPfUGh4eSrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UZbvgWRs4t7tHEmCjJPk6wQLSuDbmcp9ECkBvLzYEifoZWZdjJWn6LfJ1XoVTyJd8UhX24HZnPinmiRufj4Bnfx",
  "key1": "3w8ersLz18aspZzTiwoNkvd4vSm9RwYPMPV6AfuwRwRFmJG2WMv7DWyb1tPxXSXW9cWYLUSwyKEtoyLDJwNX84xu",
  "key2": "2Mn88posNkXMryQ56hGnWuHSzkTQinAmQNPi2uSTgSoZfcxHZFp5yN6QqJH9URZceGRkycBbSjvdZ57bW5CQRb8x",
  "key3": "4b1ugQMsiaEwbGnBfk6ktkMM63oyJdU1JVkS4H5FLSKdRfFF5hqMVTfxmEM6Ci4dUhUKBRySR6jBd3W27rpQH2Ae",
  "key4": "cCFdcQnZ583WGkyJfToLoNiVVLk1pNnqfovc4vHc7i1MufHN3rJNzGkGXy4zvzX6oyteGJaZxvPuDjqympdZPpF",
  "key5": "3ymGWEUrq5Focom1D3vfeCwZLfuCvRWpAzgKzhUu5sgbg2BfdGeYqSrcRF5mZtMUbd4s9ADfiC4wTbSUfpdfM5jP",
  "key6": "4pQsRdc9MxZ67AowdPDykbSfphYtGU34qjDvtAQkMhrmxsMv1y7jwCxp3GHLa7WVMAjVzqoqJAuJTcGMRuUMX4zC",
  "key7": "36HGHfPBYYdr4uiT8hKBoZxfCSwjv6UzLBsCq6nbiEn5Ju6nGoB2ELsC2fP1wakvvjNDHggW4St2ZiGmyspPZJq6",
  "key8": "3YGfs3a33XgCXim5xR2SpXvw5myjgq255vFACxxSqkK8Mxd8q3jo9R5tWfZK3XvT3Sv94Nvjy2gzW4SXuKbxSTm9",
  "key9": "2di7q4bsYTYURTPNWtj6dFiycHLH1YD9WsqmXBGgjZMpoUPRN9PDoDJsKQSPr4SbucdTX8xumaZQ675eeFKqBV5J",
  "key10": "2h8XA9bHM2oun6J1utcQXYU4oX6Ng3sfWzpCx31MtnRLrPMTiq3PUuAorHvMtbvxBuh8TU6iRwEEQMP81PLrb3m3",
  "key11": "34bR1HSX6dU2H2BW3oR1xN31MCpdJjtHXacykGgRkLz7dRdhzzmvXotMFB1QP2BqRrq2ZC2v6VJ991JfoEgm7fvp",
  "key12": "BaUWra19784cCZYFYqMjN9uDr5AnmwEZUkk8PgLmuPTPc4oWLFbsWBZhhsHyA4VtVYPa6GKPk4DwAs4dSc5KD1E",
  "key13": "3waWpbN3Dg5LJTnuwQbF12HwBBTzdEVbKWJJYg66A7iJnWWYiUGHEJtK6UCJwVReZzkgceD5srAE4LbenSNkn4Qn",
  "key14": "KZq7DQV2kBdAJS2KqXL4tsfe6UHd1FgAXjGwHLpFqN7jrmP77bTHGJKWJBxQqF9hckx7sz1RxfTfJZzu63fu9GJ",
  "key15": "5gX9i2bM2tNavnSZyY2q6EfYjmiBeeGQYCAK45q3Ym8yavTS8BR6twMnJD7qBuJ2XQoajWUqwQkvyh2rucrWeKLs",
  "key16": "q1ZfqCoXftNgUKTDVfPxHHhZYmunGLsRxdc7B8u34jerf9145skg1dg6B5Qe6XofTQY9bd5JTLUgXEUP4egj2CW",
  "key17": "2tY56tVgHsvifjTRgVsbUp6ms84gtzK9CNt1rJeHkpkjgC4wZEVAaUqPApr29stF8qzgdLtzticGE4HbQwKrttRS",
  "key18": "26oJG4AUCr2UZU8rwDtJygSkU9Drv1j3i5bcsArFduBAxmQhnyNkeRWAc9HcpEcpfPdhkMUrtHnKoVRtr99u62Z8",
  "key19": "4566hhHcnQoT13S1w9z1PAAqKJu1bGuksg2AfaPgoQYocwhzRugZiBdkZj9pmZ5dawSrwkW8ekKdJXg65KkW66hN",
  "key20": "kkaYL9Ndm8VQWbzHLa8vKLuJMaAh9apE9Q31xqX2T3fcVRQPUPWems9So4SB7h2dWms6BuYdBZ4AdB7mEnLa7mk",
  "key21": "wSU8VHtnRCBAPXezZdJXx7vJzVRud8xUqLnh923FAs1Ch2UDbewu7wpecYADpNU5u3yD1B7o5DN93mbfoSLiZye",
  "key22": "3uLBJrZ3RZ2ZVnzFHGoBJ7Nj4trRZBHAn6KD8P1QqkJxw5haQAKotG8qXQsM7EUSP2kn8ZAXp545EgaAMT6XH9sf",
  "key23": "4vBSaX9vyZAbGi3hTxLs3whCd9JygGReWmpw7vY9eVe5EPHZ5k7zbeRG6Bj6BMnXMjxoKYyVMaxNZg9zWWKRgSQL",
  "key24": "NcTdCXkn7fPTXEE9ia38aUVomfaDKEXaupN1f5k5Tj9WBoDdZKtND8Jzx3NdCpCf2UN8ZPdGora7Qgj9HLcz5BA",
  "key25": "5e5fBdscuYWp4uSrubF6kVB8N5rFqkhC3ZFrRzFbRoxs1AFeD2AHL3mkbU4eV5vHgeKk8pfziWemKK6rpP3mXM8m",
  "key26": "3Q757nBG2AizNPmyTnqzXYyJjcsbYaKgswe9nPuobCjnHze8FWQBkf5k33RqP7uKfxXpUf9NXZJ2ivPWjLjAzAM2",
  "key27": "2Pss1rZzCjKxYTqEBFTsGCmdhjNXJt9YZBurBnNt5truW67UZXf6NVrrVjcg1PKmUJwMatYM3xhK5XBx5K9CEte",
  "key28": "224ZpaJNRWhc6rbeHMdwkLDEK5cYLA6y9xwgKLnJKXpGY4tHjPv6TFw77ppb6Yh4GVoE6cexcxvnFw37XCUutzbh",
  "key29": "5nvwvbAmTupXip2Uwii5CFGzTLvWy5ipT4H8RgP4g9S25vMtYy6dqHPUCY5cscFiTovuLdxXrGagDQjK2uM3Uhtj",
  "key30": "5vu8hPjcwH7ozX7ws7sscTLznc69F1xBrHZF9pGDuNruqFk3tB4SqduqbSte92fhwK7SbitkTit5AvaJXTn2Cwhp",
  "key31": "91XY3mtk5B6kFnz84ZrgfNzZJNLmWSKPaPbMTU6RGaraicLyw7UN53do5P7AcPRUERewdp2pXk6NBdo1QXLQnEN",
  "key32": "oeoqgoLbSxHKRAPe5M1Quc9oCkgRXqsVP7y6ZkvQYiSrB9mHBfNWoL2EMEBbNnJivfpWhUznC2HvbouspGmYSug",
  "key33": "35bNUCfBFL3P8viYustBt2AwE1K4q1ytCveSDCDy2rVj71oD1gC6VpinS5J5KXnGCj7Xhh77kTQyg6gHnJfMxtPu",
  "key34": "7kuJyMq3TiqXsw8Dw6VhkLCWc994kJgX5KhsZG2ErZ9FK5bymVZPiEw4UpRVtxCBUpSsTUfrmqGtpszGms4QgVh",
  "key35": "5RwfQwXEJbdyYz6zErS8swGk1NJWvf51jt4Jo6QzPYW2VsfQH9RxjTWkUNX87im3SHHZNeJHXzYe6pQrXaUr2yyu"
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
