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
    "4Wzqt4MXbYSm3DvuDfX3H5Z8f8c5SuRGebLgqzSXQqFsC8HKTBBD2GpNNfHRtMJHUkZaobmBDmM1nfRnn2LDhHv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSgVEYCF3pbd2iRHxsYv1dtsbMwsZXXrh6S2uMNKhbVGpECZG731ShkFgzjQ8JV5fYaWGUViVLWw3A1coCPCSH3",
  "key1": "4wnQnuTFRvXzqjP3gLQyjThFs2Ykk2A7a2aUJJfGiCz2PRKD8fm2NZRgDpCWFHrZ1KBdPHekK4n1VEfLMvWT8rNm",
  "key2": "fA82SEGkPDWe3uYEuQqcThFiRsf7S8pQsoAANt9kKyHZnN7EBqhaQWqKYeRV6vBC1YrhESJgohEGgUrhYcXqRiX",
  "key3": "26LHz9DjNi5AoToR3KY4kiWEGY7yurMJXzxtfg85RmDAx3e2ZAHYsBmdSvAn9tXfWSmTsauP2uw99wKTKK93k5eP",
  "key4": "2cTEH9xYE52KEkAW76FtePqALv4XP5xEybDnrj2pAdy6wnTMo9sdRDhJzcM35fvMAogs3Kwmn7kbXFRYDnY9KWcE",
  "key5": "YDZLCipU6XC4GaSnBy4ZHF1UTkLLChVPvskgqGsYiFKJQrfGsm7qhWaXF1UoyibyGr3BPLMGBfZyZKXYkmaaMPv",
  "key6": "AUKei2Mzvxk1xR2BUUEh5HfTAgKxCdgwCmnzTpBbhDepoeVkr8ru7shZxXEfaqhRHqGK2CWS2pQ2dGtNry9N228",
  "key7": "2itHUEVNpurhkEX3k6nq3LNehAW8aoxdPUS65ybSTXW1mGhZ3xMBcL3czipZrR822NAGDsi4kya9bsgpCpvHx2Uj",
  "key8": "5hA7D8myfKqVAZnXRqRxvzeR4SBGAzhTHV14H7cP9DzQ2KebgnQgHrJhzQ6TAQr28QE7XjR8zeXXCcnzpakZmLoq",
  "key9": "3aRjx2dttyEvcXADhdpnmBwQBScVhivDjfdbCs6BaRrUGJU6QiDhUAkPX4f817yDHkSjfUYoBqopLiGPCHNgv58C",
  "key10": "24q7J7ep5XC55LkEp3M9CCnAMW7MNgYYbxXVbWaHakkh47Rp8kqyFoyqh3Y8SA6Szg8b4XTSimT6Uik9Ubha75rK",
  "key11": "2GBLruo5BRwH7J2R7vVuxPJLwXpEoZtoSvKPoD8FsadNKvr34JSm2of8KGB9U4bK8dexNd1V2Ay6mZwt56HsqosK",
  "key12": "2PvMSa3vG4RpYGobCHs33YAi3oAtASxVmvsBxN9pJXhVhMFTXxS6u2qsEiapQxHZxxDs4RrmcUsvk8c6S1KDsvjt",
  "key13": "2jM97NKzNzyGjMFvGopCWJVaKyPKGSMbBtHVWYfwGoggZQs9WFRJJ6UCjCermMuXW27ocCzi28UFV4g5B72HNw1L",
  "key14": "32Yr8mW12beSDZBmE8v5CFCpGNtTyGKqLupzfmXGHuapgCdbSQCd5T2G2KF1ANs6zREXJHzB8xssgpJH3wSb8UEj",
  "key15": "58cnn71tsfXrF6AzMQMg83Kdo5D36FVWU7ptgktS8TDRWQek3uLxYb5C7M9yiybkvVbS5s6JxihDUsb8vmELgEwk",
  "key16": "4HNC5ngYofsZUunN4HZCSqeN5aT2wTTfwaP5mLFZeJtgk29eAgG6pMVBerJnxoZLZKhyzh4Ym3WTYCXcxqPvrpGL",
  "key17": "3nrWwy11s3k3J8hKRqwGiKm32xCHXr73LRuQWe11N6vGYuFVS3ZGpWJiGuYrRFHjo26wtR4ocTXPnPCwxoEKev6f",
  "key18": "5DB1zNAJBTo9VezTeqyAov5iHyMznTFm2HfGjSpS2A9HRGyzmkxngiTCj84PFzxAsMYWzv9GXgSVwypowsgrpfwR",
  "key19": "966FEQemY8Bq8kz9BzShQ9wWAq4hwo1YmeMPGQbLEUMp1dG9Me2P8CK5WeAAyMDpZkuxNniFgKepbeWeqdwyHci",
  "key20": "xWiDYRCjuoVagzJHVNNA5Hk3DSkwbd1QDVxUWzdgqy2ezBkBQFZG5Gboa7mFfcYBXLY1i8DQbuNy7nQmcwtteVi",
  "key21": "3Wq2wfavJanVMNe1fmrWVY8mydBZMGp5hB1ZaDdZDqyAG9NBtK234Sea7bke6smjRmSKZZnHW8SCe4UzzDu1m2oU",
  "key22": "2u7YomxJLn7jKEYvM9EDfKF7HayazyP9g8sBMJu8fBdi4wxHXhUQZAfZRnRHejG3zPEEHcu92KmhV71JinS1FNjk",
  "key23": "3UceVt5G7CNy63bSnrF32gE5JrC4edySbv2rh6NLUtZ6Ss6ZoXFoc93JYNdtgJNoW6inWMQJwmYxFRevJK2nwubm",
  "key24": "ZBLaLkbF4GQt82LruENiwkYg7a1tb8ogW6Ynrp98E2sJdBcHaqXsYS3Jv9XwdL9mAG86TPVVjB4mdTyZefRKJdA",
  "key25": "2Vhqy6g5nujVXUHXYmNq67opRmB3xjhGufeAJXtBHEGcYWMfWCRHucyL1N2PHg2CSmRAzDs6AMe8iKAaFkgNvGcT",
  "key26": "38coWZjYAQq44pxqfK4VKmXsTd1kVeCEvnxqMD1ZgaDt73HsWehiVLrDiA4jxJ6kmM8ZuYAWBsSgZvx9XG7ReC1R",
  "key27": "35UbyQBqyvEEUAf3iFFRgSjX4SYg5u6wpvVxXvMwwVFTriEaDgU1Qgry69HUyvwE7k7x3fLpitZKN9C4SQeLCAFS",
  "key28": "2RnnFTrwrrew8NkJchNjsdtw5V18WJ4pJimSjpZaZUjQMUV7n4e9WtAL9vhP7a2Cdf22WSFb77yn94XdUnyJNAyr",
  "key29": "zpLBcfxygcGdxbMbpWjDryb4MMxvR24AYRXziCZGY3SZCr76ebDB6et3Mhv5LmBATMSAy3EA3jt2BJsEZjQvEsj",
  "key30": "5ejnWyshMGEDCTTNrGF3GnkEyPDKNg31H4RwJtvqwX3P6Fy2JFjWBkDydp4518byxSVgzR1LuoxkwzUgg5K6wEpD",
  "key31": "4LjERiLPDA6CHoDq1DR7zq4ye45148SrwR8gUd7YqtvGhRT4zWQWadtbVTGZuDvRX6A88CTXq117oa9vTbebq9Jh"
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
