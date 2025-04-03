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
    "2ng5exKbp5CtZFviFr6MkJhXMG1LsyvjmkGzwy3eFeVXwiuLEu9fm8LsgkLdT55YZjqzzqwcp6ME1F82DsCgyj5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJePVbM27E12ZikVKJN52Wy9Uu13egWpeq261pS8SPqAZLcBxRNX7iL65F4AsQbNWreAyE1SjSN8tZUitQaviLe",
  "key1": "4iWWkLaUjWjApNqxMRqJKbCkFZfiFXAisMay3koXnQ3473E4nxTGw5DmG3FPAhbAn6vxQ2h9udhicK8kG8LcRWkq",
  "key2": "3ZDSECCRXdLK25CcrhJP7DBmfsFoTuHUEZ2MFLrzjWx4fBNHSwMw6dRu3ZENhXPKc1c6C64rXzup2g1NgYo7PWFg",
  "key3": "2vvkbRaoHt3byUjBvVqSueTczSo3fdT9ZH5mtd5EL5PwJaG5Z5MtRn8PFW9ebVQii8HMUdWZcqAWBddnU5Qfnv5X",
  "key4": "2Y7vvzQf1vKJD3jhSw3TgmXpKXy142H3afN3F4gQ7jcM3yDH6P5jBp24zNGJZV6WaX4em3M89CLabdrE7uD2xkgG",
  "key5": "DpoHDccvrFFq3RnJxkUqMVVcBx78GmaJ8x5zUizL9khXm1BXLEjUVoEJrBPhdgVBHycCQwCoWGb3qfYKSKxiZg2",
  "key6": "aDa6Y34UZcXgJwyrJzc6aNXLRnWRJ3L6wi1zxYDAc248SVG9NokxQKQQ8TwkdQRQzzvAWcnwQsf534sZr3VsjAg",
  "key7": "3YtLoPYDuPyCqKK1NNFDwa9ymMtNpguapbebrBModkqi4UrK5Leb62CNSEMy72ocT9mptmSWhVwe4N5T8DYrruVy",
  "key8": "5yWKz2MBghAkKfXSbRo1CX57qEx23JqovqkeVRzWMWvn53sqPCfXNkbeBt2SGQLq7MAMwLwWdpuitBdxSsMHF1cY",
  "key9": "5pjoGApKgLtbtjWPevgBPPRYbWyXEruRjkHjNzm9UHcpuRpBQVqYYuhrSq5jJTMDLdK1kW7vCF9TyiJ5APekuFmS",
  "key10": "29CQmiPPzTV6pSF1PY7tkSNPp1B2UAR1gCSZBQsym73xP3pBV4f9wuhgkf6WreevAHnYw4XxLcgWuRLWEW7ccj5G",
  "key11": "5JpaxkJFF6WjfeL79JY8xSmCyW32VRvyfjvdAqm7SKhCdMvLp7T7qV7gcvr2o7eGeNSjYNK61Zuyc5DGXkFFHsZS",
  "key12": "SfsjN5AVtQUCczvAELv7J86wXiEw8i1g7QtSMKsq17VLPAXcSTqMoSSePNkQVXA69Q6cHY2sjuGQs4hxBu8zS1m",
  "key13": "2UzxUMzNnrF6Ui2sAWFsZxj1aFFsoj6mqZq7cieDQgj99ShzVWnd4rMZchXN3t5cppXL4XCvwnfx48nLXHuki3zg",
  "key14": "5jPH8H8cVejZUXT77VtHHHq2paNXr4ZSQ2J42vXdYdFEs1PFrpLY4JQgaunWoYxRunuC9nvJDECrJ3htn1SgZskk",
  "key15": "YWK2gDfBphqTFbogQeahxhxLNQ3PtLGZPQcczsSnueaygvtHB24TQuucCqhe7GPaM292Pz1BcdZpee8Sqd6auMS",
  "key16": "xW9yXxCQGTkWsSWoFiY9qjT3eHbnRVPVh9eTE9YKNSKdst6JcooNSNdbvnEDzqAdwroeMgeP2hGmtU7bCDqQfKd",
  "key17": "3SXfnUcnnH3Fid2G518YGHnF55eFfrieCe7KmTYMrvwQsaYz3nmDEdFe647CkcbsqDVttd7CjWNm8Df33BNkrCie",
  "key18": "MuiL3xAYYu28MnQzeoDNcESDneMsnE63Tfx4HF2q295fFtr2X9crQWRhiWNco9T3BTXkTkrv5pBskPcUVAiBRY1",
  "key19": "4K5kirgGn2jQZhPidqxRz7o9zyDSYeSSerh1CrsnXFk2noaLNhqhfQDzram8gPexY2TvJa75kHZrCmzh79kbWgmj",
  "key20": "4vKzot3oPgYK8UxPjhiJFwr1axPRrLS62nLK7xhVAR73d1FuReJtqCjyL991dH1NAebGMfywxcNPAR4rvDHMk7QW",
  "key21": "3z4K7dnHPWKoe7i1oYaZsjaR4zcKgACx6ua7trVLw8Ut2Tj9oJmK24eWJ8kSX2x6iT3ncfcLCw32nsSXqmhFuavb",
  "key22": "4TNJQeh32DVurTT5aNKZ5paug4nobs1dGa4vaygnj6tFSketpG12sivzhjN4zhnraa4angwxSF4hbi2raaHSFJxN",
  "key23": "4QbDPDLAujNjY8dWmRJtUersH5wj3oBNG7FCYE7nV31C4K1vVqgAKov8sgeGzPB5g5Zm2dyg6cKLDAVJFheLqhPj",
  "key24": "2AniZ8PjVVaiQ9Y8W6npii9bCac2JPLrfQX5MfdiAAf6poe3yb1GzSq5uviUpSpeNuzV9hMXB6zsgWb2widNp5PM",
  "key25": "4MU4nRXFT8ZpQ3EJFqCeLnoMixiNk8RAzqYtc2tMZfoB2WtmxhbwJkPE9CkUk4NNZa4o8Xw6kT1Jmo1BqrGBDfkR",
  "key26": "bqcY63FWNt7dBqkDKbTXN7ByhucbLipFagij8WN8zC9pGkH4wzCcNLjgeqsM5oGnLMfSZPVrb1MMAQYzKWihGHt",
  "key27": "XrNezFASBHQpujXpu4r3FW9sMENHMhRoMk9hERTUJy666Je6Hw588RHPdQ3naUe4ehCgqReQFWHPCVoAnEnT7aJ",
  "key28": "4Zh4AKq6nhjpNgm3gTpQvFKNoTTsxK1eT8RzdmFj83X9uHDfRTGoMi2EW7gC9aaPhh4CvXwPbUMmc9P6nhYj87ZK"
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
