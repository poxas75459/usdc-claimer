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
    "35GQWzi5Q44Mm9CVVjc2vN6RjPBfEgHeYYMtzJroWzEd9QjbYkadFuPVrnGeJvRvX1Yci6q6YDwdprBuhvsDMiMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DGyC8k3oZnjRRfzcq9FJkAeCrKywGDW1Aw4wcH8xLX1UXsjYTEruE3R4JiYMnsVEmVxAd425vAqZ4PmCSiyXdJF",
  "key1": "5UD2iLihGHigEZcZno5ZEcjQT73Q3EWorryJNsPgXB9tPk7SWwbPeyDT328jSnocA1DJK8FqU3GsdEFgrstGwtd9",
  "key2": "Jfo7WDDsjVzYhBK5DrC3zo6bu2R2Lm8YPQQK1pb6sq1imQo21ur4vdksR9da59hbN6sjXpcs97ehzK9iWJj1uZF",
  "key3": "4osDScWx8YzXBku9JJUWiTbQ8K1YVJw9rgH2ZZoz2MMACCgVTFzis3Vn69Q2eJ6PjjL5HVeboKtSpb3CEwxzrANT",
  "key4": "5aGDhvidXaEEp4NM1ZsGr3wxZh9Y2tDrsgyvF9T3cKAfMVCM1LMzJ3quVQERMh8DoGDUbjrkNL2StTiH4FWeatZm",
  "key5": "5CBKA123DRcWUQ55x9HZ329wJLKhnrM9ypz7gSSrbvAKZVXdULYGgkJZoMdfBHbBMmjcNTPU3pJYNk3bQFnEHjHL",
  "key6": "4zyhfNxBkV9CQg9wRFFhtPiUxMQEhBbCPt5DaXWSSg7N72aPLSut9c4xTNNt7p1wMBx5UPHrB29SdVKopm6Bmrdw",
  "key7": "3p5onpeYZ4AcHhPBeiGijVXL8KWaEoaVeYZstZfEmj94P8UvdUS7GmRShgvErSDRWSeMy3Bz4DjpYuHYHGSRN8mg",
  "key8": "JSy3LLfgZxQVTZ7zMLLQ5ca3Mj298j3B89CMEwtJin7QhW2LmxyHDAVAeghTdQ8mWi1HMm3VSLaRkcVvgMNfj2Z",
  "key9": "4ssLEH6KQoPHQF16WMkJtStwNAkEF7JKFzenq8dC3uNvHYZEFtPRDts5e8t87FaMZxjjW2qHQCyG6A3EufR32h1s",
  "key10": "pPvwSiHiWoTvykK31cDXKDXtkQV43XKYAb6eHZuWUhRJNjAV7qorE99yD57BffJWay8EuDkf5ddxyGur2LmsugM",
  "key11": "4uzv1wmMYEPh2WYVRcYqHwCEZFPnuw71ccirFYjdcE4uRdkQMkXyNHDQZuXjJNzRqnTrFg8wirYAUMxV7BKwASw2",
  "key12": "66hT5vkkiMKTtGcWczD4A7Zcw7H9PPAyxBmXNN6nrQzSEDKPyE3jgtD777ofXK6RzPzxGz6r1FVqU7WVV9J17s1k",
  "key13": "5LzuGL49NpU6TpyKBvTCmUqCK9VAPbQKBgTChdadtke3QVwjQBk4C5JQHC4TDVMr4rACBTfjhVM81Pb1wArL81fm",
  "key14": "4xPrxAA9cYBzCZgSFnzseiXdSyYe2yanzfZi2xu81ABNpbQR6noHnRsXbuT4bH4ApZT3buwn5uAp9VBnoDuu8Ukv",
  "key15": "5Us2MUsBbQhZYTPYEn3d3Xoemg13zEDPJh5Go1zEP9XXGz1NArjmRzddXrWJhC1SHYGWDnLqNc8J7WYC7VP4modQ",
  "key16": "3rG8ggzGKdLr947znGitA9aRGjqVk3cshAjuVfMitdUSimRWagEpeyyawfEe3mH6cPB5bFUwJSdN1c6wNXQ2FGqN",
  "key17": "iGeCzjBhoMAofcwVWXA41fLqSz8qRD9zmFfZ5PPWfXCgrMEUPLaXgY54urehNs5ahJPcmxRbp2yEfG2mVdjvRGF",
  "key18": "5eL8UtomHrpPtkXwCKPqFg24BBqJ49PiUhu3RSa8UcMDLQiuiy5EVNjy54CJE9shM1PZjGMWV7KWwFdfNn5EJ7Z5",
  "key19": "45RxjcoPsa2tTVyMk6nhMiZLC1creq2JheLoeim2Z85Y9SUVLTR2jK5KZvY8xbi9Zya7u1ZUTGv9Wv618yjWSfDE",
  "key20": "5GnvksxmUwoJ3jJwYbbUDnDtTEH1UJbNT6M4hrhrSwYKHfX938yHHCYXvA19f4GzZbeuRvBPrsbGDHceut5QZvyY",
  "key21": "2mHJvKTWo5hFVKFhQyu8NvMw7qjKscFY8FgBdk11QGYStYWSiSsg5YnwU2GFA6h41jQTjf1dVHMkr4TRfCGxVpJ5",
  "key22": "5kGoijZbcPjTs3Sr2L7r17ixP5WFP8L7F3Ci3X6BvAkiC41aZAbA7TKyiSpFt8Mu8TyqnJzMru3i21rnkYTEV956",
  "key23": "3z53sDmkCdARgHm6Aq78hgNdaqN59EpZHYUidke3AMvSectngaXWbFsaLKdtusrsfcWAs4q6BDXAvNNkqKzzVz6R",
  "key24": "52vRJYfSQo3BMfuW21UBW5ruopiqyT7HJRgaGsL9DW93vnwaqZ8wdmTxYBN4c2VEJ48Gc4nDNJZr1RV3xZvitx62"
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
