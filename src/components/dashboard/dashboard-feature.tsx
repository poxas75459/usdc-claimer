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
    "6jckn8m5pWQX2bTkLvAUadftaDGBSx2LAnLG7vUHnXyBjgBWXVKj9faZ1kC8ozPpQMYpQ5QnvRD2Gc1oD44n8Na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1bxoch7vmdqN6CviZw1UqsdF1VJWVdAs3afBzbicMncunH6c5SsWLRogSbEKQCDzVpReYz2iNdNp6B8z43hzxw",
  "key1": "35qomr3rDuYPDgqw6GjANzqdRTP6rjUTSqHX3tMZmkFeftZkukx1Z3tdEsmraM8ApC2jE9pk2amSwf5TLE2h9KQv",
  "key2": "4vKVBxMSYjC8ADgPwri6VmGaJJhpiAfTUFCRsSm922Cn5ZShs7D4XGJeKxmKkrjtEoypWKVZ8sjSfyWNY2roHV7m",
  "key3": "2QEK9Tnr7SPjuhQjka4UeE9gGqXa4g4NheUeQcnXxsK7sUgQG51rWbpbakyMAVJ3Q92GeCuPiAUfuacRuEAZ7AsY",
  "key4": "2Caw3nbq7AWHKWJWEE2KSvVuchFs9mcNEHYEm19YJeEmtYbv6vidSSG17h7mpHRJbM47uePWPt3w8jbN6B3CsG9V",
  "key5": "oNoApiJhY5QSPYBxeKr7gTYNcVLE9KzSiYwjCV67JNALQqaCPcXfyUaHwu5rLsyqYrA2KVHqsU7Zpa9dTmxvU9J",
  "key6": "D8eJHjCmGiY8ysbf48Znc6HQZ1pyiP9qCosyyfuQ287yk8Ddbono9wrvekjah5zVTQv6PsNMb2E4t1GrDD58ziX",
  "key7": "2jQ9HJPhB7RLgzMA23HXsoB3MGddfCDS7pooTtwc2CbBoAo2U775Afw3tDMdPSTd8VjtvQRL5EJJfGRfBd2Vhijj",
  "key8": "3M12mxkJBfxYCcT6t8SfmPPAY8ode5AacqhCnNPiUH2eFKpspE6RKvsjTQWQKLK9oqQTCfJZtutSNZpFSiP3Ne8K",
  "key9": "5M6hBuxMhnCfum759BrudEtUkq7fbCjUz12nA2uHLD3zuLyR1TDN2aEtnMWo3xfY2dKrKgdwaBRMTLMa4WUb16WN",
  "key10": "2AmjEKjHNnj3jpNaZE3KRWUivBtQxqEP26bVHEzA5HZyvasDnyt49oJeZs3p3PvysgdQ2vvTHZVS6J4B54d7uBEr",
  "key11": "3U8rWjLbfKWSoYurUECognLuxWXi9MDMPeyuyVAQmV2jjJdSeX6KmtDU4yHL6zUpEqErzvH8xeJUbq69jTDEaFib",
  "key12": "51Be2xrwh58c15EKrKTH2GPQxixN27wW1cWk42Tp5hFcqsKDgiEjpVocDaiB6bsvohRUuSfaNzw8ARpPk6hCfgEA",
  "key13": "1QPGwRVCLkaFHB3HPtdfFGsvTLwmQieeLem5u1nf3Ga5mYbFfFBc1S5zYhguDgbu8ZDoDw9SJh3ewbAa1bjBpCF",
  "key14": "3XynKHQcpnk5RV6HpQgq6Y4VoXSCgLMV28Hvtw9m614AYhXDCs6JznkJNAJwKejYw7eXY4UtcgcZAzneYvj1UXMs",
  "key15": "4ZoAk7nDpJwhq1HazCKT8JUT3eSbi3gUeLLDFaadF7zmsqrQuTW7W5GyrEGw3yMFcoq1hsg1oZUHqLzuh155a79s",
  "key16": "2AmErMm13J9yFDTApP7VpBGsoSWAwQkca26zZ29JCryMsQPVixQQVfzncc1F9vvvj2VRkek5KEACGG7ptvURNNii",
  "key17": "4ReyBjBuxmYEShBf3DbCV5SRwXWvrEXTtNgRNV38eYrWWQvXQFJSaPhoE197mcMs8oYXh8iGjSv6p8MYreweC1Ch",
  "key18": "2Ctuy4zUG9F6rNFimobLpfcfTAchA4NFs8cFU6GB8bUenusvbwauiWNtjt2BocqtZf3X5nLtHjbfoZ21NCsF3SbM",
  "key19": "2vqttNSD2nmYv5xqK9HuQj3krrs4mquQUVxo4wZudTrwSEMzxUDVscfSkzMQJ2tXJuzrzpNqkxPopRg6QtEAcqjw",
  "key20": "2mURgo8h8x2cKsxDHFxXwj3M5J2GcEBpKYYFCp359R6yuYyPJv4jLZuDYwHhBYC1qxEX82knuwymXaypjtcGLXx7",
  "key21": "5R8xTmoQhGdzF5tNHMZZnp65PXK1CcSs8W8CsAJK83XSdyAVjbbjiwhbr6AZJKkTWMGF4E7nZMEUKDK1Szop7n5z",
  "key22": "2RzUTrWdceDwJ8E46pSxgVdsD24NUzyKjEt5ebzCHLoaoanfuR8FaZMFYRoWuuru2GLRyYNQdyvTFyyGgf8zGgsj",
  "key23": "pASFSczQWze8Lq9w84wShmAV1SQN11meDt7MCAJW8ywfCvCnAPU3c6oTABgs7q3YN3xfcVvyc6CR56z9EHJMXAQ",
  "key24": "4CKMPVfD2oDfeGZwt98QqsrdEe8KMMSoY5i3v8xBMZrx2Xy2BoLrieahML6uRz8ZuBWMRJ9WkKQ7BeNmXRpX6aMT",
  "key25": "5tcRERMX3STr8UQYY1JnDs2jpLFE7Kht2v6pYJsQZT63E7SZodCmF5wZmuZgZm2oVUMiYsoXAAiTbY25Pjs44xq2",
  "key26": "4MskJQuZB8LhXzws2NQrQgkFtTn8GZBW9zj22V2P33iWDLkiGCLf46xtafrJNnaX5i1gngk2bXokigZ4imjYEMmS",
  "key27": "45XWWJkiwzjQoAr1gBbyyypgaz3oaRdjphDVCUsqFHTrDyK9W9z6A8Fmq87h6HpdnPDTnssYGfjpWmN1A1hspFax",
  "key28": "4CG4s18jAF9DQFypKkbqWMEHKkpixa93UVawAaGgwwK5PYxLBhwyCR7bGBt5djB46qiWC1J7YbmKZUZRjPvepZtn",
  "key29": "fx6NfzPPcc3JZ8xQq8YNspVqLPvH2Z7wndxWZKFfQDnXdTyPPmKVm7yAiwBLm3A9LbkxeXfGpjcsZis96fDuUWQ",
  "key30": "5UNA6CEAjMFAjBsTD3amsrVQwkphvd4ZuUm32UmPgMyKMN4n8pMuYy4YAVanhf8cgfTrkgwPXGNuRv8cqoeWCZ5N",
  "key31": "wsM9yecGj5fNCnzDQH8EFB6cWffLSbshGWmxiF8YNHWzqzgNv14tVteXHTzKS2xx2LwT38iSiqiNHkVskAMG3Rb",
  "key32": "2MWeXPAeJgcaFZqeGBJXe1uiVFaEk8zP2Lfzs93b1pMKFWuRBhGQdsjoBKNtyehNDq8ESDridjBgf2baNTPQy5cw",
  "key33": "p5rmPHAbH9vifCoxtD9ADFP6oHf7EP6pvB2ab7SRSgUX3Tjo47NTP6w8ZroFQemWp4xXUoPCFY2BhpgYJaYp8qk",
  "key34": "F1WK9tWhMGhXfUMuf2iy54kfKodakzSyAfxGWmcY9vjCdHfe3DZmyvxGT8QqCmReqMA9EJGmsWEd5F62tYFFrrp",
  "key35": "5m68b52gsovP2rFfjvgU4eEbMBGLdmvmKJEAxSLGzvt8DoxqouWm8Emssu3Za6MTYpfqidKL8vF6fc1qaNwTZonZ",
  "key36": "EcdeyE8zMEfuvHEJ4B7J9ZSnL8dfmdXzjHzAQ7pMB4d4e3HEh7zYWg1WMpeXTbchw6UnvrZGNU1aYVje2DtTZhk",
  "key37": "WFFjEW5p7d23jP9vFwKxkPAAx8nCBZnWo7vEAjHbni6tnrJ7BUWX6BcZ5CzMLzMksmnFFRUQYzf1KrBi8h6zMCd",
  "key38": "3ZTf84oJ8WbXR19rrmzVedtcYtjjJkP8eMvnx4FrwX1FSxyyuSxcERbKeNPtFK16R18SGkBR6z5fWmpSK2oHC6vu",
  "key39": "UenRSXfknPi4D8dgs9f5nfXjsmu3jHR1nfBNCRaXwNJeyt57x4fLVwNR3syLNDLn1cCHeQL9Tc5V548gh5zXAoq",
  "key40": "2m2hanQ5x87iCzvK94LUJ4DAmnPvc1dVX6twA1YLe1LvUHLZSgZgugYnd9QnwbBXNgqRbH71XwbqAueaSCd6QHad",
  "key41": "4RD8A7hAHNL57fM8ev3fDiEVXzh5L8jpPi8zaTQ5db9ucgGrGBjTnkvsVjPkEgn2rHG81pwj5GkqdQrU1pgtd6GN",
  "key42": "hWafPtA7GeSR1vFcsMiEKinD22b2enbU4YUvcXsaMM2q8HzDW2RxAX8Z1JCzXKXTgrqgDecmoToDfkqJHtUjExe"
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
