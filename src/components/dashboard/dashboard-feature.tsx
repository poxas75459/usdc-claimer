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
    "qhBA3TL3FF1WVKAnbMBqqLHgPkUneUVTfkMSPMxLCYfBQhmLipATmZwNN1LjA9tnn8LPzegLcgxbt2Y7mcjwvbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HmHnCskLZ6Q1bbXsLuspWJG78uuhb1MU1ZsxC73JgGMPG7x4dZuKPG9P9nmP2JjjJA1JTjAXfRr7HWW3fZA6H6u",
  "key1": "Uwrv6hongNB5khHQphRvSEuhbXvF8ESHBAZp993E7EqadDCuazme8ypG7GhchjPHsDovgWBqHuveAfgvc8Vann7",
  "key2": "3JH93zxdDufPhrSkuacrVcwDbuABmcXQdq98LP5RUrHJehNu5KXYtQ4NZ1Acn6har545dibtQgf2KbPdsaFkZVWT",
  "key3": "WxjipEXfeAyFQHD7TncALqv2WUWtHddKu8q9eJRBeXrm5QgSGcEBbTBwx7JeDive57dekLxbN5snwHoa46pGUka",
  "key4": "iTS1ZWLfMwPs26x8D3fEPgvuktHA7x6xZtKRucVzq2Nw1zFSoKYdauzLpFZTiEPjMsD1TuTcLWFZpEuUHiEHkeN",
  "key5": "4RhCAVgAYFQg4xtDjd5BXkik9GHyAmA3zazeXnxWUbqDLmR3tsRiXJmUwhYLpuneAQoPm7TgNdNbUQEAnsPV4jdc",
  "key6": "5uZmg1SexjsdqbbRRAMMJSVbSuNisLV6ngucQobTWwDxKxUzi3RwaSuAz72uw8pZQ7XWoT4RSxLubsKYuEqAyGEz",
  "key7": "ZiHZoK4s36Ym6CKZdpfbrZaHFCrjkXTQRUTcH24t198kNcPZgjv4bnURvqQQ3MehjMKhvkvyxrqtmDQXJEidvdg",
  "key8": "3qYjyCXnjyKqsLeaQ92wbrwsyTZAMQMxQVBPdyRVMuhfL62PKoS4F2mEx7AmWJ4uB9d32tHCj8c4XpMJZsv8wGG1",
  "key9": "yoBQULBZBghqibCvgh7PVZyKNxFLTe3NYyEtXkxEjqwLhHzfUTUvD6umP8jEo3ySqngf8QuAx83u6zBtx1L5FdL",
  "key10": "47bpphXZ9wfMLGiBkfi1s3VbPMdEroAf3TRBG5NHSCCiXNzK71bUBt27tPgAP9aPaaVT5uc8MU8Ref7Ehc4TqTLa",
  "key11": "4LbDUvgkkpYNwpTpKQRVCGME97fqSpQqsxP5h6fciNy8wU5X55bwn8Np6P48bR7yvim6J81erHrJ9oS1ZST65kXz",
  "key12": "2M5t6JmZp3MnEXAbKkHnLSJpnp8bRDQVosZqJ22HnhSsWxMt2rvKQCzPyySVQCvoaHLtGZfGUBeDUnUjSYH85qih",
  "key13": "3gDiaE8i1X2QYNhyWsGTErEfzFtWroESuMJCzoe9zYjYuWDrFwzxGx3G3AaNAtqwQ2fX6SpW4aEsGNK4t2GcxYJq",
  "key14": "zP2rqoZocMPHRVdF7sgCkbaHkFUdLJk8THRcK2b7wDFdESAUBPXEnCeH3tSsi94MrjNADc5j8fCehSD8eJ72HGu",
  "key15": "4YCn2kiQ75U7J4TY9f7JHnzkvXFQRoKmHkVL5azfKfBVnCwSWQhBJrgysSLqLL3Cha7Q2XApSyBqWTmDV3jSTcAq",
  "key16": "5ebeMzKaWS18LaMB7LgPNeJaGgvXHtsy8AsBecEgYxDmScx6M77FykcfTnQZUSzfZ3Sp7dKAbdUpHbtHRVf2i5RB",
  "key17": "5ESFgqGNtSP3eeKyhZ9S1ZAd6PSFceyVHW6SigEJyzPxg9A2EuJ3Dm2EeGUQ6kBMazzfTwXvKh89miFUP7HgomLJ",
  "key18": "4uaWaUXdtc6Bya8KwTmTzWkJPoArqjZQhcBYyAmsTkF8dCcXBRHjtUmz5VKtR4pByS3gwzdRvBAx255nu8WMrm3d",
  "key19": "5nTc8efR1SCrFRkBunJNsTNcPoQP2PVQuQmUqBNLe9aaLajLFeh4yy8juWKh4fYePCs4mc14DKujiqHUGQXoJU6Q",
  "key20": "3xG8YfkdUvH9JeX3NpzqrqnRa2nPP1CXGBmHDppsZ8w8hx1CFY3uq7SfRkP41zsmU6G7zU3VLBMwS73ZXxwDoAjF",
  "key21": "2HtSEtnubQo1VipM5cgvFJ2T84TmbMsa7qbsxYPFKyVa4fyXT2rJJy57UNSYd4xD3665WN6DcoYBnjSSzHeBNjLJ",
  "key22": "2c54QMFxeRDGPxkMNQ1L1YrbWL3eBhFXoQ58Jn16LrrBQfWkJF8whuyJT7vmX1n1tPdmwziJ6NWtM8bdW4qEqhrS",
  "key23": "DWYt5BMRhmVcECoho3SFkn4s5p36nt1RRoRtYHtXS8MsirECvGm5NZdHbHxjkXNPEY6oyscECJ8WeaSXaZzeTG7",
  "key24": "3gtEbBYYoU9Wiv81cMkEVByCJF8FKZw6J9Rs4xKUN6gQHfA2iwXfPYc3EK6RNovxkBis8yrTKMrFi1mU8a9nrH1V",
  "key25": "2NXbyUXLAj3MG4SQbADsF5PnQy8mzfBmbJt2YyHANsk8i6ChSNq4kKbCu7ZHGBe4hWcztarzAQcv98UjtwpV8eRP",
  "key26": "2CeGnu9L91XF7CMxs38zXh5pV6AHKBKNu5qt664w6xspT3o9bPgBZdUa9YYrTM8d9eBMTeS937M2XcZ4sME8vzWj",
  "key27": "33uu85dmCjidvqYD2qWwKSXG3ByBhSip8uL6NtpTQVRU5e2o1vEzRwsb5X7meM5WvieHeRiyMa2onwEKjuFbMART",
  "key28": "eL6r6GiZbmVsG3uciDgpVPMtNRrUa5fKMNAfJXmiVRj54THyesP17WBC6wEzaYxhQUe3PZDYp6Nk2maTUhSsfv7"
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
