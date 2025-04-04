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
    "5UCA4Wsp8wP39q5DPZa6bHwoq4kMGWEf6es3npksSQowE1bxJrKQQuUkkPXE7hjYokesyKdtLrAYhb4pspGHtR7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52u71VLEd72yVd3bHzsn67VVEUgYmtFRdbghkpPYPoVVQkjH3Q9ZAhAcqk28dGF52R3oQvtR3uyMw4idh76fK7ei",
  "key1": "3apEgi5ASisrGa4aFWXBbPGex8ciUmtLy6u3aogtLdzXUyWWbxHLA9rkivWtgpAzxyUSUwjNgWaBngX3tFjTq5Rq",
  "key2": "GehVmDniVoUTEKxeegXWQv2qBVmqHpHnZKbodB8putwGf6cbNDTFEX74XifUnf11Uzx4twTmCwBviSW3PFnR2Nh",
  "key3": "9v8MDHsyr7mu11JzbBjGbGfVYnBCCbXRBTs9c35SwXxiJR8njH4ECc1vN2szYRruzCRb59PZ1AgbAcKcjnMaC9k",
  "key4": "5Jxd3p9YhCDC28GVQpqsCwAHBFjypBz4xtrdVx7z6UKY94jbQtzA49HzQFJTj61Q59m3R17kVLL7YDNuhgb9XCB6",
  "key5": "33VC1ty9EBfL7pwioMQwebstTCiuUjrjHt1WP6ARteaDQsMc1aPobH1Hhm8HL844PY1ATv25hvELzjHdmYS3FxwB",
  "key6": "fwgCVtzfgPy3cjSCDGzWzQyUnNXDqAW8jMFuANE3qfP49kFrE2Zg2uFmvsbY1JEeh23KYd9zFGhWpkL13MRY6PP",
  "key7": "4eZvNdBYeJRgyhgW8eaEQFm56Kq4pV3yVzpp5YAS6ZZNob39AFDSeHHMpYyj1mvg23D8K7qfpM9fo8fmT8Ss3u1i",
  "key8": "4usjiXSCpnYAWw2huUuaobMS7AivsABTeuzAQc5NHg2vro8B6bbCzdtKQdsxhChWXusNngfhK8R4RiBztcq5vQJp",
  "key9": "41seYBoUSyGXFwZq71vwYmWuj2oQ8QeghHy19i6bmUDJfagEFeBTzvzoMRg1Ze1gcAjeyTtNgbUnxnRmjNWDtfgw",
  "key10": "2F3eRUUs1kxRHpTSDAXPgx5orzsc9dAZnMZAR434T2c84cdVUXmPcwX2bNN3FhQY6nMeMxuyh2Q1VPbGPvwzo58k",
  "key11": "5tcqByA3sFsVuamsYD5a93ZuhndYKfRrDohDfn1PjKmjcDf5gvP8TGUm95C8qkHKr6ffBKDEAxGYAiXcTq7bAWYr",
  "key12": "LvRL1DmRXZrXFK4qAdqzU1soXTmVhWnVgee6fKp2M6rKjNUe1BXddsdtm5nShXHzCc2xDBGJtYEGSUKWj47GmmU",
  "key13": "5C6FzzSbrBrh1nftPphxh7EPpNoBRhGwKWzdi9y1xh8cvvXjfsei6QoS3bJR9nMZia4jEpZrRYQhUEVWguXSj7dD",
  "key14": "W7YXpEz4sk1QQdQnztdtJ72wvuoH1UeWyazgFhV3FU35E6h5xCLgELzBXBaLeZG2Ym6WnZQ4RRs3B4wc6GosJM7",
  "key15": "3RpZk1mHuoWpTEEvTJ8JhaPSuYJH3vZaEBzRRLCg9apv6sTmTZTR34jEjg7evuvUc5iUQrwUNuQqfqWFpwu9Yu33",
  "key16": "3ZxBuGwEbXPB5UzVJduuaMGGUcVXPiem71utfaTeE2Qua8FF1gDpVCbksDGDtYUTszP1VAEpbxrzXZUKswe3AEZs",
  "key17": "2J4GdbxzXHJtLU2NfNeEWEj3bhi1VAaergnoRfi8U31WbjfahrbTTCrj6dTihpLbqnaN2fuVzmcDkushuPGoDDcz",
  "key18": "65P9Vxytjbr3Lk8nwUiuomWr9Cv9pgv11SU6hFDWffq3dJPwYuchgt9LABsK3eCQB39rBLjfAyBAmXfn8o49yquk",
  "key19": "3LdiziWz17hz7pkP6tXK8iT9qBAMgfSxuQYFq3ZTKxscTtPpBmBCGdXhEUrVedPGKAq5GmkBNugUfoRWTPwCRx1c",
  "key20": "5JN8m9Bt14dswWNbcZvveXarYzVpKgJE36WHRY4eWiMzRMV5dL1aPksUHXmuPgHhPCnapyt5JwJKN8mbVCS52usZ",
  "key21": "41dK9V8vk5mDZaVn4Wvg9VLnEgXoVEogRVdrZVdWAUV6jvc2R8aEJ7SxVk1DrBVB5UFccVVgBBc63SiokH3L1rfB",
  "key22": "2ySTfoXk7nc8A6JYVoZeh2n24vyKHUcFsnSMvLRQApnMrWHoHtFzjaSQgEXRdDrCJaxYsF8YhXpdCwdoJz7VpqTT",
  "key23": "mGe3ZPRuU1K9XKpbKseMenBF5juCWKtrh25f7NmTcN6npW8P18vW1kbfMbWaMawHx21dSrwgdRfw2vEHQtmW1C3",
  "key24": "3HQtAfPxjXQdLYaUETeW8gunGXGxH6GUpU9TEEK7RJZLfgdqvv3HXTLp5QsTUFBM4ULCnuJFQaWdnhLeGE2NfnLj",
  "key25": "3dQewNypgMoQookeFPAHyxbzy3XBgJPFMpEXzSdW6rwLsLTaxDkYPan1rjXvq646166DpsuxMM9t6vopUfzSYN3n",
  "key26": "51s2anB2qmjPkikSs6gCXpe3urqfsVPX6kdvDe2aTUiuGpLQva913gQYsVGT3A4JqLUNNY43u8G8XuiUSGJ6Z2vf",
  "key27": "2vknN4BSrZxFJnPHzg1Mt1pR1879AbALGehxxSXxqFqrMNyipvDxWocWD7AAdPKYvcCYJZqfSPwDezV1jP2gX6gy",
  "key28": "3xBZE5eEmnjRuj3tVJw5b2e5DPvEgUfoWWZ8mkwxZimf4ewai7KyMnJQm7aErp5oeoN7m9ZFkxBTNDWb1YQ7WEYw",
  "key29": "3HjNZ1gH88U5nRsu244dvsU7gYFcsEptPbfhwoE7BfXkt2N2angc2ZyisBxnrdXfkbx4x5Paxef4TiN7anDzBaht",
  "key30": "XAsmWrBEV5EwVyLuEm8KXgYBp7WC3hQUAXwPqYYHM8VRXi2jeMUP5USEVK2sD6RBMuB8w95po59nsQ4QkLHRRPH",
  "key31": "23ihfc7ParKk43ZSomkFfdR9bukYUuSjtGNMPDiTqT2UMpY9Z2VLBApb7J8sHuGEHU6R2yAjv34fwTQtC72dy5Sq",
  "key32": "5jB7MyGeZGMYmsZaajXwr9EJyySR956cWVLvYs75t2zuTNRA6vJC86XP3jTYtbsEjJ2jSKG4e9ihxJnMKYx6Juvy",
  "key33": "4M8gaqHvmtoijFBg8upcLkVcgc57of8Wp5ZPQ4deNZLfshAJAkDeQHqgs95XQRHA7AuCkwZwo2UjDBR8CkVzLjR3",
  "key34": "4bBegbHUJgDUETjcvLppfYHfCXGZnNGG6HSRsvyxF35STqd2xkYWEWLWHoqmxr4tVQwDF8nXk9VpsWvrrtYvXHF5",
  "key35": "ijPwnXQjJB15MgutEjf21xZJMFCfmio1JWXmQMXBftQbB4PpCXL9vJjzyRcNTLXrHXzv7GsZ8cCanqQdppi3XEc",
  "key36": "49S1qk2Htr13UCgkqG2dximx8NVWixLRx5dZitACWhwfYrWMNDExM2w7vrkZnHT8vx2WRr5D7wCsmtob5HN4zdA3",
  "key37": "48dwsYd2Xg2n7LW1UkYmUHW3s5nfDmPBrvZQ8JNcsKfmggCYvSt9447edAe66eVpnSeQs2vmY6AdtpKBT1SXTZZn",
  "key38": "37jWnjCTMJs7ipkZ7rV686n21aPAETX3GxeNDQPYL2wiAyKyamFjUi34LsWMAFcu5qjS5BnHmmcAf3ifjCYPPL7b"
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
