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
    "fC4ntshJh9iTWE5N24a2LrMkffw6gSD6jDUxNoUV1iWorYjuBw3Eu3U6c6jqCNqntPpbBnwnE9aDz8jU3m6KUSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vURDEEcBzJrXyBCGDKK2SC2eoyMcqmnpS1aaDVPgPiYJuDASaEtUmArbKho3sUz6kPxVa81de4kP7QkAbRcWAz",
  "key1": "2AZQLxByUGy9cvg12N5WGjF7Q1dZyjqks12e5AAkDuiVAPoPaNihpHSFiiHL4nPGhR5UMUiVProH9bpaeMNr6v2K",
  "key2": "5Xv9CMPZK4A35tScTj1iWv4TarHNUz1kD2k47CGmz4vTA7BiRLke6GsUKo1FKkgW1gDKj6DTF88cN1fvwkYE143L",
  "key3": "5XBKNY5EE2tau9GQrgv9KpwsxdJHrNKCvCrbFjeiuP43rVGmSSpnRR5swpKyCot1Swo8NPnLkSJ6Mn3feP41fmzY",
  "key4": "3M2WoTrqVYATcD97HopUSx3t8rGT7hCSsD716iLC2G7LSdEfRhe7wwa6oapPmf5J94XeKqQBKmrYonCDfh7fpCx8",
  "key5": "4VoYxRduqn2tNvfqsCCS5sU3puTvG6VmL4pDeQriUJ4Jhdb6PAPLomSAaumraLdHM34UcikNjpw3ccaCRk32fnau",
  "key6": "2e7xzmLN2grVGyLDbwpGTfdbEFAWZTzyup5g4WkuYjBx8XAaGiZT8fuQkfcdLr5zuVMC1NvkbHkE5fq3DTfz44Qu",
  "key7": "3SrbgXKzbmZG5SsiEgrooRtSiS1sbs9TB5y5nzi5d7DnegHoyDu1NGC9mmUjSni15ZUTEWrob7HgNgJYxh2eBf1p",
  "key8": "63PDJjRhusNkPkQUWrrKR4smMHF3DwhdPqp5TEF2fcMZGqrAAR4DQ4xqbVxYiFZokWbKTCQmZuEvnGnDJeVw4A6B",
  "key9": "49MjJJypm1g899BfNHxD7L3UpvfX2Bz4TvHvBtmfeK3zwEcYaVyVeZCpSDGxiVeh5j5JY25jvB6MYnpbN1L4mPP5",
  "key10": "3RdnrG4LPCsuo7jdFbgFqdjjNazgDuxCeFreLTXw8gDDuETGjRTHK3sBSCmoRfGmfnytqq7zZ1AGviSFohdBsnh8",
  "key11": "5DShFGTC5S8itHcEepU7bggvv2D1LdiZ1XC7DXAmMVia5CPLxFUZa4WmLQcuqh6T7xzKqFUoqTZ2CPR4H87UKy5L",
  "key12": "8X7KfyWbR6gWLMrfH4JGB1JPMWaf1Ubbw3sq9MhvaN5c9WyE1MUY6T2kzWajaGNLbMxsRRVgGdK9xM6hLD8sVGr",
  "key13": "4PRDb9fSwyEpb62bkSgfLp5weTkJUGTr51issjXejwZ7hoiLXxaYMmJykeSwbiPidnuaXDGUhTsvXGxM2cCr1VuY",
  "key14": "nSh4o8q4MPt6JEhNzKyYhBWvm4R9QAsxDoYUaNYrqWHGewPRBaEnFqr5xefRy9vg12EMd2rYyqKnwyjHU5LLYfn",
  "key15": "24NS493rY5gX4eDgPcc1QAVpqjJxUg47BgzAutyB1WiP1AMTLEh8YQ54mYZYZ78KRGnregYxAWiT4XYMAo9gm9eE",
  "key16": "5dmx7h35uSMa4bTLoa2UPDG1da5QTFTCLHKD2FpXrf87DmxQdYCKq5JkhoVbEyquC4PMJso6pTZVMLfza4eyDTDN",
  "key17": "qvRD4TZJDRnGBCui3APBgPXDTKkrJHXLnFmXuwKrqvsDgMUm14RJzwPXr3pzRDTr86riosrP14jPatuFf64V4Pe",
  "key18": "3RokkEXtMgCnSmgStFg1UciSuxANKsdnVoQMunpqPBYycuEdBdUPbHnrK7522uKHaQwwHwdELsyu4PuQuKxqan3F",
  "key19": "httW99K6zmHCKwUtJbQTDvPVAt8Exy5b44aEQVKGfZdu27HWnFmf4EcidfK1xuBDQyL5fJWVniuSrUXQV7rnhKM",
  "key20": "2b5i46c3nAws9qUcqgTTE75bHAJ8tbQYBkbYkLrvAvXZa6caG4wDCTfqzWA4kViEpVE1bc4GPSVUprBydBXf3uGL",
  "key21": "4ukhrfQE3SKjr1MHyw9KMyjFai5eCSvsw1piXsqqydGtajvBzokxuBhHEqj9ZmLnzndeFYxR54eVt1jGwHB5uaZc",
  "key22": "4BZJEvtajaAKvCL8gZpBQikZmVby91CgJofvYvjNUwdVqjBD7D5hFxGQgx2YS4igVTCrVvbV3TJkymtXeDDsB72H",
  "key23": "4LatLZSTqFQEfnGupfgbkm37txFYdkanHDhD7GETu2KwPonaE5PK1hZh96MNNWqRS47CJZWdtEjrNGvTPYPJmmK4",
  "key24": "4NZPSyG7oXRQcYGbVJkbTCxAZQkUGkxXmuB4wAdcZQfX1jkeYpMa2F5bKPa659Ufo51xDFhdgRya7EG846zmM7FM",
  "key25": "D7zXqBmJdZmbzSAZoX78dSfLqd5yCvbvmjuCCibgTdGge7KtNZoYuktmzBP1wEgsDBTsvZdVw5AV6dM34JCR34h",
  "key26": "2z1xVyqAN1SR238a3KvtEiMFbbZr3MvdNX8mmq572rhpR9bMrPP9btndER7BxSB5bRdp69c7AqJrigwCtPizpv6Z",
  "key27": "39oLZU7Jvva66emNwMYbroE3r7zozg7z3nAXB46ogzZCg556YVDaMnaVeVfv9o6sUp5MSNCevJDjATZXmsedGZao",
  "key28": "5noJNiUHwpN2Q3eHFX2k36qqb794UjZQsZDy1Uug5gWUqZxNSbfq6RUaaGgvrFg3o6bnqx2ouDUqc5qk7LAb9JFE",
  "key29": "2fvZLyMEig9vnnQjTGxB8FkbmzwA5xG4Y9q9wWiFevxwSLUy282A7nT9d9h4sw6CGQW15T6LXzn8vnGmw9u1TAmQ",
  "key30": "5pe8iGBhcunECF71kDLap8jukZgKGYG4PShKarzhuw6EHKFNrgLNtSUQKyAQxQATgbK6hVH41osk4apgWdcSoDqD",
  "key31": "FWzQnsTzcdQPjSomsW3CUHj1cbNFrqf2vj3VssQNPicj956ocgRL31wPug73wkJf7LSg3zbitg2xKFmFMZUBF1A",
  "key32": "3B2XDWzsxEuobYzaixNuTckC6nhkh7pMfheErmaNNTf2629dvQnufmf1poXNZDReoTGA1qteoqewqmGqfLBpL4vx",
  "key33": "4uc2PPXjQPjz4PcZJ4esF4aZHiKA2uUa5b3JDqqEQcVdcY31u8gzLDnmxRCML76zubconLNceFMXaHgBX5bYNCn3",
  "key34": "5iCUaKmef9AAyHVYQrQjdsWFUSTNUuZ8tai6r5ogRgAe3BTpPJCxApXwjJvjqurUvzv86L7qQ8nSjw5Rzmd7Qiyt",
  "key35": "5oaMLDEqYxnqaScKh5QdTA6BpjNW5BRT8pwKiP6V8T868e4JB5LVJRyKJPAtdNm1LuRLoW5hipGsvVXet6Kcu6GJ",
  "key36": "GqQYboX3d2iShZJ8nJpUE8An1spEJBd4Uuz1fJaEeDvAqhh57usU68FRfP2UVUgspckyfX6rKmpUQBBP5Rc4g52",
  "key37": "27rfbxahie4NwvYUfd3S69h9abr87Mne5dEpskPn3tcMnyh7G9aFKfzj1CPvgkZ7zKwYFR1rZoLbmpZpVJ3XQDxw",
  "key38": "5GUMqbVFgkgcBrGTNYNpr9v5kE7uypnHdZdp4wZqsS3QjomZ8EyZAR4nKea9FEKM1H77MYmSmfDsHLdbTfkG6yq8",
  "key39": "31GdSHrRjQh4LMA7F6hd5v3gPjUxUKpctFoKjnxZ11e2xNtoK7e6DKCH6ZwEMstetcfrzej7Svd3FZCLV6heEtX1",
  "key40": "Dj9ydb3RArjAxrX4eqykFFK4o4TmzxA3Kvpj828NV8NuuQeLaepmNRMELnorK48CMkVMz7GPMVoVhG7eZYDybee",
  "key41": "2HavfLW33xKj9uLEsF4KDrqit9AM3TKn1US1NevCUXe2yefZDigpZF865DyHJUc9PQ1dYUf6ua29wYtYbwKHZTg9"
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
