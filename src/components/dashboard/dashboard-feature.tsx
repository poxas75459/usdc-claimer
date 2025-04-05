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
    "2wBJCW53WNMrh1QAMg9LG1vMT1769zHddVY3MvEontBmBBTqCJPWQF9qWxvKn3Z1pJnescMRxNYfEEKMh4cyGvLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nqBG9idyi7QzQLEev6gSagq8WF99NhWxNAWMJptUPAwV8WUkh3ro2r8PrjiQry2TKp4mRCpELYkAmK6KHPtTbK",
  "key1": "3Fu3M6VN7xa4EuBF1uDzjaBff1LMt3JuntRQxPbp88pwPjLtrxRpgxsfXC3mocx79fWAnZ8iVkLKY51C4tj1dMpt",
  "key2": "3aViGf9YajHFGwEuFQtxmS7wR4Z6tovWhrCR4rwm63LfmrC4pEsWomzpMSZxs2PLDYkVMFerh2pz21jXLrZzBDoF",
  "key3": "QEKSYNxuEVxGXcTpgNSwND43XgtZHn4zeC1eaRKN6VQK26QnfaiwqYKJMwUX11BVCYgAwYWPNYjW2GNgzdAuGHb",
  "key4": "3Ms2R2cGkh1Sdpu4NVvohUgNGQJZjg4ztw4upViPrzXDXTqxcAHJsB6YY4bZDKVBWsCe7bWoytkJ7wREgz4Uj6nq",
  "key5": "4jb9CsZcYCCY4XiUGUzL87Y7U6gsYEyMRtdBgzHT1K6mav7stYyDLJvKMfN8hQUoxAMnE63g7wW5rSZFCw951mbd",
  "key6": "3WBcUK6SHpz2Geq6uojymsAe7jaX8ArxenKHLYRCPyHoFBGN3TBFWnxmbHGbVFm4E4udwUzCzZXMwq2LJANwpj3f",
  "key7": "4759gNTNWiojXEQ5MnzVDnRjnaLtuNb2Db7xKcY9eWWUSzTf3anQpLb17EABKHMDdrTwgQTJnjhDgszEjGMftvYf",
  "key8": "47BigPs9beY8EKeZJ3Ewn6bnNUWQshjn53VeC3ASv3is9dvLFMwtQUZW4MoQMxroTdH6y4Kj4C2zz3j24gHg3cFR",
  "key9": "G8Di2PmxzLqCV1gAK2BFPp3vBW3N4UaJu7s34TJFF41ddLxneT9TvFSWdCRdTRHXFuC2ZdoJf1UuqL2Nsz6c4tD",
  "key10": "4ydbPeKWQkiCnwygT6YSkrExDcrgthoh69t7yMaNCQYP2vPq6Gf1XeUCksNVd7639tgNLDmUj4gaSwPKsDVv16nR",
  "key11": "2esNF1NRE12yABAHkZkZzrcadrKjjA3osThosRWmZVj3475kGDvLMV5fJFgz3uVq9BA8ft3G6FdMAGNrP2aY9UM5",
  "key12": "32WA284q9UmGUH4CwjPGmcYv44dmw1LZokrzbGu6AyCmKwfT4MDrL6prJTgSbofwYsvoWFaHaaUV55ANfQUtvx67",
  "key13": "2zPL677mmwse9wnvJeLi93QJXXJ6fd5vAgdvSf5zkf9sz63F51cdRA8HidM4NhEiHW6ukDSE4pMedwUCSuL4rBEk",
  "key14": "rLmbcrUnw2cPkgssCJWv1VwAnGKJPw1sJh4KhrPpdBzKYDgijqK4BY4TyEZ83S2sMqjZ4DWDivmXVwqJJWtr53Y",
  "key15": "38Bn9ifGbZGha8jEg3myoPz6LsZLJpNBmymha8NwDpyB92xDhSN2qkisJRjL37gbrD2QGp5XMSc6GZjDB24JSKwT",
  "key16": "5jPALHoDKokxLXC67TWJrfRaxawTPkS6ZuWacR8vKykBPEdGfCWE6ZjRxRXAZeGT3KfALZNTMXKqfYHdxnBTwsKv",
  "key17": "2Th9jW8HcXiQDb4g61BR81UQ5ebntGcXLR2oyYtTen5BTwSUsBNeQudcnHo8C4xHsbiY2UenUxM3Pep7K4mNVtf",
  "key18": "35WGJVm8k7zqPuUtHpTkTY7NcFH37MB5fwJRnUQx8keX32HhxqwaTvyQyNSgF24bvXmj3cJpWupB5e67hxxzUt9q",
  "key19": "4s31zH9BVFZLxFkmv6x3vCQA7GmdsvdU5f6gyFAADbAhRSd75vsaAGLojKGeG1jwq8qjUcvbSsUjbeYtwDbMsmSi",
  "key20": "3CG47MV364htXuNNoboFDCyWj9xkFTAJFkJeWzCHmfcc76u7k9u5YkwyfD4sDbEnhe7XBwFe5HduRjVjWzgd84SW",
  "key21": "4121Qsq9d1x5UGcJTnqcAaNer1Ge5Xs97yzQMC34RtqaaNihJcaBg4wdgzgVhZchQYZRZApvoCFWVHrqh8rPGuAP",
  "key22": "2JEf7RqSmDmr5G7rrCZGNSCQWcoyxXwPPasajptuhhNeseXVTi1mCmXju31tRy6DDAkkKiVEnPimfadzbg1tL8Sw",
  "key23": "Qz59J8G75gMmzNUtifZgqxFhszZVPkTY8N2xa83rGyGTCgKWc5E37jzoLM4YJxdgCYxDCjKsxedGHmaD9NUYiwf",
  "key24": "52ahD6v2Xn6L7x547qvuLivVRmJhXJpcVAUxkqfgb1B4gT3VdWbTXsxRK1XKJtUahKGsYpQZ3JcM4SyJM37EnJ1L",
  "key25": "5w67t6djRkrEk3DTeAXSARJaawA9fvEMJ1y24NKUwnxCF6LmHWWiSpGRsxwT7G7wxoUPh1uvNyyUxgU1UXhX1AL3",
  "key26": "29GBpSAcudo4Qo2LWGoosFEW7czZWWKiciMd76aBDSBZy1ekQArCQr5PE2LVNnGAjeP725pi3VLjKUGfqbuF13Tf",
  "key27": "5jsp59Y3i8KHrBN9dEqPSUychmNBmUV6A8bneWPRHbQxwNvkdTKAoWHvcSo72eA89t638tnqgQHQEnRWLDdA4q2G",
  "key28": "3bwT6YsbkSjhAMzrGN4Pynboz1h6RkuuUaXEJ9m1nWyjwY3gcvihdzSYGGqNacYozNTKhzWf9sTX3a9PSRp955NG",
  "key29": "42xXbYPxfZXPzweYNyBRSmkvgmxENZo2W5zajoPjSp2e1hyBn4fSwsp73jeL1wV1STTxYiGwkGwa8heJmc3MKFXV",
  "key30": "2VTBV5a45K4dTMKkKKo7df3SEGfMAh2T4iShNcX1ygJJPKGgnxLZvaQmpJackrYkpUePmhR4nzsvwxfscBVXopC9",
  "key31": "4T7RvN8Pg8kspjszBHE4sXFnJoSjb52oBs6PaMTgbsZbdEZ4Cm5uR1BC2zQLdsTWAi7t9xekkBtH3n4w496UbsvW",
  "key32": "3UBJwcXLpNhZPAQM8PAcDucAQZMwLPcu4zgjNccGZ2PU2pfrdEXpMf5W5ix2wwumz19TtA7SrUojQjuRsBNGF6QJ",
  "key33": "5ndmfcpkkBL4obb8q2xVQ1pmMkyKiQcfSeAsEajSnbjzn8KE7GnnDh4qEmf7YAX6hNDp3kkxq1cNQKayzPJyMjCg",
  "key34": "4D7tqNbCVg1QPoCZdLsUwxp46yRGzyW5eZu1edUVSwKCoiC3vKYPNHSQuDMPgsMXbxqWaVSsXoHy56Pn85xY2HvS",
  "key35": "5MkjpzJ8dfYf3EVr2q6oVm1wd5GrKGDkWsAw8xs5QAQX5jzmDuhABwNQ2uk9ygy389icmLFRaEcZXvcc6MvNnmEU",
  "key36": "3Pk4RsieCcuYdeN9WGdPCjiuKdZx35dKJp9DzPSSzJfGtHckVFYb9t86UBynveaejuqyS7Uqqt87ykEe62CbVFsJ",
  "key37": "3BkhGMQQGkKYhkBDJ3JKVaRKxuW9T3toYuPWCvciP5DPqEfPGHV82oPCKMhryyURhUw29WQisqUTZN999CZr9QPW",
  "key38": "4AriTqoTcScFw4EuQJkj1uiePeC5CyjtyZgotXHxTJaCCwxSKkVjQRBjA1Jwoa5TWkd7tvYc3hYfBTTonJDnP67w",
  "key39": "3Rd4XqAJExzUZiWMvtrZmuFpVkMH9EzL1iAzZFnACVpLh4H4kRugEaY5WuR25FwbbU36jZDxm39VNawbq4yFoJWo",
  "key40": "3PZCUjbL8UAkKwUdpgDpjZ9EJ5o6zbDBgGviAyNaMczniqVYDaQhKneUKdHcMKi2YTVyqj2LX6xKA6v62jJ87T1B",
  "key41": "2n9YSk39pRuMnQFVXsXTn9eGFFpV7Q3nPmRBrJxMM7FDSaZWLdjybKoKy5apSdeCcGBeXKjkqbcyam1vhSUWjBXq"
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
