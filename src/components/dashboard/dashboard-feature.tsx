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
    "4XQM3SRNC7epZLraFAsj1qi5DLgnC5qKAS2BSXAPH4T7kutdFqJrqMKMeMvakRkRr3VT4uxyznp5Mh6ZL2ZtvMyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qEcz3p9YRTfXWFFTbsNMYGDgLhqXKTx1X8joDmed3RHnL5fq4W66hLcLLEFYdmhRYC1xKELdAXsgR8v7yKTkYQu",
  "key1": "2NMUzbpb131EAwaN5vc7jPufqAsdFB41WPCg1GnzN16JMe81h25ktf81aBdSVvb1vPM6EeJv1XfSDF1h2zk8WKHH",
  "key2": "4EwdhS8Z4ivMwWr4YMF7B2r91vhctjx8XrrmjDSeYyepmDk7xFser5se4vBbCB9q2zL9PexLKyhgkqkSvNd1bckj",
  "key3": "G8QNZGWEqa5SHm41xLy7XwSXuSybqDw9BNwNEZCqwCa3KSZaMKUoKxZrWBxfUr5KatcpmBcVeutcbT2c84TSk82",
  "key4": "dZfJ3Xnfoa2PAZu88hcXoKScmJ3AJXjsBEwpY3nvFR3LmcEgd8jaMsAmnCGHVr4LBjqmxoKQ7ggt8BBZkPqzawS",
  "key5": "3UNajUawHHNvD6BVXxAzC3extNTN3hzNj5mc5sEdJsncq3iFm7As7EFBTcxFJZbEygs5WsrXJhJzwVPwRPShDsDi",
  "key6": "2YMTtf1SJT6eTcg4birxjekw5sbueZYHAmvUtvasyywNJPhRYBv4mUNT9tiMiSeYFLAj8eZeiRoQoHZdEJEywxL5",
  "key7": "9Du53T7sQPJDmuBcjPXJmXzQPE5zSztnouB24NtVt8GaRpKgxdaRjmQXX5sfupLsDTravQnAPr4SXKJNd4Vzzqu",
  "key8": "1qt3rkLVtHdcp7jrN8yM23mmuLeudPehj6a3jTSUuLDMQ7iwGzFtQ9UMAYgtkcYTT1ECBp4UyXFf1x7XSTsLQ7z",
  "key9": "4WvLwaojoUUu8Sv5ZoDafXiY9fLGFaUGvooWcY9WfyG1kHuUMd1uKoGbaBezxxngk2rR7tSmS5JkyZ3B3ZhhNr9w",
  "key10": "4GLDiYacemVJ51mazUcfC68oG86amZBGVRA2BF678smRuweax1LFX6Ujq9wQUqNWGiKoeELfES2nb5ta6VT63GWg",
  "key11": "3qTUrF5JmpLGgfRsJqG7ECvmG3iLkUV8ZKMPUS4dxfq1v6Rmtcwpnixz91oBQnoVYEniWydAAZ4E2UCVZ9jRhcUL",
  "key12": "2xM7yYo8RB1U2bfEAmkVhU72CWiwetxBbA33Shs3ZDKwWaZFVE9F1d6n4m75cwKZYdUqd7fpTNAdBFcN1rFsbUyx",
  "key13": "xTn9HADC27xUmDYxN1HdSxd8PAp67KU89H8veCBwJvyQwwpCtAD9RQhEbSn4zxPos93CpvfGRcQGYJu5FA9xCAk",
  "key14": "5BY7skjUjYH1xZmsUstccKo2XtQ3Nc4ZiPEDUWKS7DfYsAtuoBkyerwFtwf1q5NZEtig3va3ccpaMA4AAcdPLFvc",
  "key15": "4GeqLcykMxpxM8RfoGA9W1yLXp94uCNmK35M7deMX6jDvR1BLnFkBrYjubfxQWWXFRXNM2gtV2rWaCEVF8nR2LPn",
  "key16": "4ASpjHowbyWtzmoWZmt1ZR6js1mJwDzt8gAUU2wU2ULbuveDb6R1MyVCS7yYP2YszW9mTxW2qS8LjmqUShCvBavw",
  "key17": "3LcaEySyd7SJXwcPpozoT6yRsjMdKQfbv4g16MvxqAqFFnbqdkop2rRyNoJxapvCA4igXPndVg67GeRt8D5B289h",
  "key18": "2YmCjQ3DkhN1KDmtdyqTVCejnBrwsYAHSjfdhCQKCHD3WirVcr2ecYJUsQ4ippqmryHcNmrRNbweqmn6EZ6MkGWW",
  "key19": "FAoWgm4GjADG1qqfkWj3hgUKkmRC1iHqALJwdv6BuiqKwjtkaR4NiA65nBwuY2RX8B1cdckWNFXdMYrh3sWuUPd",
  "key20": "5dN3irUgLeguAfzrworbRhK6EaqE773dNK9UsDQpTKmpioaxUHohncrvrqzLyjJeGCiTpyfrR1sD9ezNzKpbGwwo",
  "key21": "5v3uqLrA6xhWVaZcQmaa36b7PRMtvDXdGY4n7kELzdkBCDnLW55sepF4AdeHmCiUcKiTM4XYn2CFFZck1kf6AxEm",
  "key22": "2R7kcuCv97gns8EQ7p2GUVA7YpE6MsrjF5swSw2ytRC5vyqLmEWDf86r1Ah4p1H6HmLAKGtMuw6z9VMmyxn35Pfn",
  "key23": "4ZySeDWBJWzr54Mo9nqe3QLYT9GfyGgKc5qZYaKYf5QpTCUyZS1tWmHuKSWa4UnbJNkQKpeFJ7yLTfwPGYCGhTo6",
  "key24": "47WPax6RjFQ1c42eYYcX5iRj4tW17ZZ79whDXqrbcLRigiNifGNgeZbh3YChYxgq168iiShLoTcADSefjUPd9AeG"
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
