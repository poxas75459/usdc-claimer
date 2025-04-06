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
    "2YTkfEuvRzMF5N5KRtYf35QutibBDazT3hsT41Ahi6Digr2S4xaZ8bMMVRYDkdfJetGn89P7y7y3B1R7RnpN7sr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjmXMYW8PPdY8zzkd1diy1iLJiuUoxRC3CJ4B2d2R2UXjfLK7wuZsLb7k8UXPmoamewSL87gPWWT331hZnGBPJK",
  "key1": "3oHoujerAYQAm87A9dSqdpPXu9auT6AUvSAzxVaQYYvVvv3N5VDgFbpmgd8kCVqBM1DGiKyMhJ5wPtHqY8nGSdeN",
  "key2": "bzZ19cgHVYdSn67wsE25nbNTwfCGYJaVJRF3bB9BemiJdMRKqXdfgc4M7kk6sTdf1DFCcEcJfr3ftM5DnxzS75F",
  "key3": "32BSnJQpJiJ8zER3ETZvxJNvYtSxuS7AvwhKYCk1miigXa9ebgTDm9YT6sAtZJeAG8TZpP2oA6j5MPvKBmZb98gB",
  "key4": "Js8g6HYXhrdyxk44Mw15bXRad45BTaRqhd7jLEqtgcfLwnrJqZvVJ9C1mdgCcUWVc24ZFq9KeafZxhd1qqXWvm9",
  "key5": "KXBeLRT3HZdwFg8P1Vm2T77zSiW9z8HU9a2Cfx3JKhV2ZxBftd2cBTAghQmE6tSAixa9sWDzAMc8pTiddXzeopU",
  "key6": "62UCTN76gHG7DKHSaYKPKAVwTgy1jpTsqCooTj7XRWHoay85kb2uEYVdnaRStWig4ZwvZaVMEtdEK7M7R7THcXVT",
  "key7": "hCkajs5iGmf7StiAXvAEVFkEXf4K8HbmVyVFP3Hq4VkFxmg2oYJXxJg1jGFNKUxwqphyJPnEbqsvULVGaBMVNKw",
  "key8": "43FoXTR4fmZnkgnorQaEx8Rj8q2vAdbpWjv2cVSgLgbzwRB7CMsBebWzhzkcSvnjJTXyxbqp27MGZvUpJuw7wvf5",
  "key9": "1qM7326DkvVFT1YhCphBkv7CnuTS3npt2RW6s1GGt8ZYk9xozA6edxMbcZeAhuV8oxd6UGmJnvYH1yu51ntXbPn",
  "key10": "gw9hFoDo7Rm458t7WbtPchZsqeiZZzF1Ufs3EpEYwNyCGLHPmvgq1TxKcCGbWV7YqxJYWud77oia7w9AHfcjG5w",
  "key11": "35E6fDpW2QR7uJqwwV5ksP2hr8q2V32i9HXF3mTEGBDwHp64iNrCodAXZv8M5C1Vxri3tBH6sPDACocdKwuKDSoT",
  "key12": "3tuFK7Frhhek7omPVkaZBT4VP9LxLJ52YzL7RdnU5GrNsX4HRSYJ6CyzyonUXbnF4FV9dQqVQSvFSRx8wQNSb3yN",
  "key13": "5FgQGMDGhLFgQoS7FHkEwCMTwJvKMYgbPNJvz971WLLWf5FFpGnMJQvVTFTWyEQbTivuMjNC7fCyShmAXhnFgNgR",
  "key14": "5qEDKWGYsf6VXmsQJGMMziQB8vV2eWgkDXzrqMfaJ7Fk4txNWFacNfH5RqAGCB5VDzUe565m2EabkqF4DA7HPWP8",
  "key15": "PfEcExwzRKxSMMA1Nka3bn781CsZ5tEpgPRWgWkgqZScQJC9Un6YLGAUbt5FnTjGyKtXBBpPcUTSoo1uwQzvAD3",
  "key16": "4DwBdubbb65RRdzd25a7rfnrD5CrNrgYvyj9KpmMEYzQSHVXjFgQaARxkUyA8WWuW3edj9SmgXxubbJVd9vgXHsX",
  "key17": "JQ7zHtDvKPuDyEtSZF6fBkanyvhyB6R3yjiFEosUx9AaJN4kYcR2Mp8vDCqTAiA1QqvV7odjuduTMvKVuWvwrEv",
  "key18": "2YzipB3ABtRoZWFq1aJLqtkkTE1eZ7iRzHsG4kcEYXS4NiYAVq6JfHrhonYRtUv6knmL7xEbyLvFj1LUbVDM4Zgj",
  "key19": "2kHaEj9Sopo1hYR5wnnjD4b12Xzk3THmdbL9buL7Yeaa8gNSoz4TeAGoM4eq9s2UAvAfQTRTeLNww6tKhMTZcby5",
  "key20": "2BsDaStYeQwx2NQq595NX8tP5XGvnuYSP6goy5TRAwfr7rDbErDdmtWyay1mHatoJUQFDciZyWpBE1Bfo1WkgWD",
  "key21": "3yz6prsS31rEDq6ifGYaKrANAGwN5cN1QUZ4sQhGXhAu5sNXDzL5G8r8AB1kjvtszBVP8raC3dDFsaVkxtcwD4Kh",
  "key22": "4uneiY2qrAP4SXLddP1nqE3okpdErhoUxyAxUhiSbAjKXAcXD2FphA6QE9mcDnCPV1dKro3Kry9gPzt8JtCf3dWB",
  "key23": "3PYxKhEGKRpeVQnkqV2QRx3631R5tfXx16YYLEHmzrVhQMGFjTF8EeyXS7QyQEhfH4feqr6wMWp8v7MreWUAp4FW",
  "key24": "66PLaVWdBsj1JaFMydLpUvPCP6P3nJ7migvfAv52qQQYCkg4sdkeComaBRHC8LWgrDuaeWgtfREiU9WAhy8xB1uc",
  "key25": "pidwsiDNnFQaYChWS1qDzzK3PcDWVVsnYfN3wUnugcuDAovA1XdWrZRcPh2U7a2ZvVtFHoDMpFhUpsZhLXAW5o6",
  "key26": "UxH3SQ25HStFsi7y2MCvYhnQVWVYdmAJKAgFjjS3LknJMR3ZmDL9RNyvXEJmPHEg3fkd2ykEdRDG7oNz2H3wdK8",
  "key27": "3rBcsyJa296jcMLqqxYVtqerrVBMyA3j54oU6uDhQXK9ud6Xqw1RmQ1c5d5WDMpTHP8DfMTGSU2XvHxstJbhCXbd",
  "key28": "VGZgENaY79dR5BRnuLwQ2xABm4eaRhyqu8Je9XTzWPBWo5zP9N4HPpvJAU7So5PBY8LSSUTuWs22fd4cUAHLqQr",
  "key29": "4mawYLFyHobd7rBHo992oY9nTva3NsjcaEDdH7cGRjpvjc6dzyENPkhRdrB7zuDLXGxaUabt5ZinGbVxAYPGX55b",
  "key30": "5yiNK8ArGUYADavgBDPFz9Svzivs4YAYXHpyqyCoYYMjoJBcuRPfQnUXPj78eW3Y2HjxoJt85c6SX37faBFof7Kv",
  "key31": "5mbRvsYS9ZV1Rc9JK3BfyRo9rtvPb1nEyPdkBFgBEaq5C7mBK1nBH8y5ycqHbAQBYcBgsPmPfwce4skF8mapZc17",
  "key32": "4Nc9eFvaauPQEkvPV98inu4MwFmamhLrZHJTu8VE41bAn9MbXyuvh6j96zXqNRtWPjkZbPUZeDsBjLs2rQ6PHDxi",
  "key33": "LTQhHVHXYcVZVyrmS4B7KR6XHodf2gSFDYEex4sC9Nq5BudzHSZBjRi3XaWabDpkyYpHTCv15GyhBNteSAfApDe",
  "key34": "2B2Dcafcx7b6JqApCDpVpebSsLdJotPy9pbUuoxybhZM7jUy6UyEuGR5bxZG4ukBjyM9vtsGWZb3iN1PaPmUhD9V",
  "key35": "FGASv89Aep2xTrLHJYjtTk2E9cyAtJrDik3ty4inqzLLFAGsJRE6mLrVpN87mFLJ8SAjvuFNokNTtKj4AoWLXgr",
  "key36": "2uw7pEieyk5tDgyccvYAYg778wxHw63GhqbMbC5JeQXoyZE3Rq5e5Fb4ZD4Ji3wDVT3JhTsybY9MJ2hE1PAY8B2Y",
  "key37": "2a5Zz7M8gv6kd85Np497FfcMXDCn4mMTBh5wKVHBDVofsUJJh5fF8xaQyrhxTHewiRfk4uWKbimGjJ4tpj3GvQNh",
  "key38": "3NAzqYWTrdW3bQmpgLFNFdpCDkiBAEKLssq9GZb9bwwgrGJtJGn71dfYAQAFHNYu6gNfASiScKVP3b6sn6qw7RTc",
  "key39": "CDXxzfE4SB3TYULZffx4JXD3Dc8rDgXF1JDjzo4dvQ49rYJCm3neXDxjKyvMAPGsMdy7KKPb7ZKpquRaCget2ux",
  "key40": "5tQdNcwRdqGfX64iqs5rrK5NGb2cckB2KFY5iU6MKfUpZVbjbjLsswcnyPjoZoKoge9LD6F29Etn3PitKdzbj3Q6"
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
