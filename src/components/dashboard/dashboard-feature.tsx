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
    "2THMrBYu47dAcwHPk8U6LGjBbQNfn2PSDDCEY2Zg7vaWYmRL6zM929diTnYSous3ifPqckza6zeKwK2sZ9DrTfLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RMpDQd8qpV9Le5tDh1C7uJ5TxrtZeF4ii7teSSTRfFr2HcUovtK3TnsiKU9fehgRZPHcMgqpqBwuTG6TW8vUZk",
  "key1": "63XqLmTw927iNLR8FkFcsBcdU9VnwMZwTMeDXLxWpmSsKKMV5sEboGDmLwhc2ScMJ2CXKKJ7M6U2fBh9nhtrKHDt",
  "key2": "2sJi5LMV879chxFFzgnCW2cFUvrZJ6SXmjyMtLgdxPx41LDpj98STY7tgHagZnnt9df9TXFkxpNfhQgda63nfqd",
  "key3": "2eTW1MYmMu1D6CXHRy5oD5EJLFUvUoyBfhCsUMqu85csYTtaUMkUBf2egeFXGbzT9HK12ou7U78bWfmNC6sdFVG3",
  "key4": "SY52qxaM6ETZ9RCf7y9aAcJNM65eH5stgLJdTH34hfnmgvru1CsEdjtzVFam4KMRrkjSwP56rxzXRWJUciEggQh",
  "key5": "25SpTBKr649A7p8ugND21wqMqbFKdSRW8c5mYPBLLeKYLt7TyoUzGhc8gAShGWccCBkTXYb4CZDELDsfrsq7zdAA",
  "key6": "3D4WCpNXGQefhhgsFYNof29qs53sUWieUdirYK6N6S7iW2jjbJomEtLLvV6emwmq2xj57SgKSmYv4ra926qDvJSG",
  "key7": "4q372uiZzMMiQoZWhyrJQ8UcKgQeSzZg2qrE3ysKdxMh6TKjGJWeE9c4QmFovUJHdr2fKMbmCw5C3on9kp4kMY6k",
  "key8": "4VGrtc9wADWRqvgu6fEa7Yzac6QuPqsd7QN2CLP5moPxSeZJ3JZyGztP393FnAmzY14u8Z3niaPVNaijeoeAxp8Q",
  "key9": "4KjrYeKmw7ioNSWDjv4mG2rjehXYaf4UtHiFM7euwfbMxbMdyexz2fqi9vchgsH2UEaKhUu9UY4uSXT3omXNqDA2",
  "key10": "2rRNZHpJyYXm51hV9V1U1qiGQUkDQUAbE78VXyWU2kh4FJ17XW2M2gd3i7CMwRDTfxxWFqyE5Seumxtjhcer7ycr",
  "key11": "3NfQiohHiTkE7b3V8RqMqPsWHUoJ36DJtcPLRZeZwVEx83nE3ZThJEiKhVA3wYLGwwAGHpLhQToXKpTiZSEqnNHy",
  "key12": "2UdwrEq8GpcK93bNkQmYT6zEcWhb5uZPHRhfqZGSk5NBaedVMP8E7QuXefYq8UsEAGggpHfwijrVwBE14fZmtPGx",
  "key13": "nftU9xbjSvXhqcyLsNFRKeZFhiDf3ar1pKvFyLQUCMu8B2pxMyYyzoYAc9kekNWnPQnkdsCrBr2p8RLtg2PdPpZ",
  "key14": "2AsvQi2YZDCKSgXmEfMzCF5wxiF6HKwBf6JQryeu6BZy2gx8De5byWMREiiAgzimpvkCBCw9AaoSkbW29q86FoSm",
  "key15": "5PaqNishY7Dn5y4W8f3csFpZLo72JEZT7B2Ghzt9NEinSZhffgdi7gK5e7gfGuhjN6bK3K4jyPCEwXvhNhUKDV4x",
  "key16": "3uGCUZsTyPTCXDiZStWGgr6dvoyi5BFhZ4LwGXTafsurvDsAPzxCY8DN23KfQ2EyyLLu2KgyZaC7GbKiN2qoFz2N",
  "key17": "2aEpU69Kxgiqin4FBGimBM5jaqom2AAdSo6FYGuXaoRXVQFmANjcgpgDXyNJKQHZzdPBLzEeY1SZ11DMQRNDHF1s",
  "key18": "4jSA7SikRwAt2bEsLpjyjEmy1Z3ScMTVQyqsaoDpmxAHmPHjb4NjNhVyqqMSBNu1cHk6ubxzRv9jiYeRG37tHrRN",
  "key19": "36yuoS7xgYTZECtXXKbqAhpPGUYcjRACJ39HGfAu9rGS83veca1meozkbWa9fL5Gdv44JFdSZmh8BPZbv85NnJKx",
  "key20": "4viL5VYkstkLMQodYaUTorTagniKgxqHCotRAYqRn46b16CG2hEgn1maahkkrHny7A7c17PVbwgGdMFGhjCdZWZY",
  "key21": "8XFRsHpFpEt5i56EFTV6iqBa5jqa4RKPnr5NrRBRrLiZWfhro3qLNyAxcF4Ca5nxn3T3wugEcRvpC7drX9ydU2z",
  "key22": "3Xxaq2GdkvD66rK5YE8TZLajmrx6eEfxJMVi42f2P5AEEUfjxHcif8AN3UipAoZ2nydGPQiPSdVrjnsjNVKdkxio",
  "key23": "MbYQ5MLUDQN6iqynnNyHujiVmdgCzFceUrYdUitnCn81qpJ5PqNLGb126Hwt29gpxbe1VtEEFKsMdRv5Qfq1NmF",
  "key24": "47TgAboiawvypKvfPE16WKZtoNCKB8C1BUNbvfaNQxenRdxKjLMbfdggGbs7tThEKuDaNF7yzRYFFjw8iLYGdZJQ",
  "key25": "2eFumVJahrJcnDJoHVJbYdVCvwgxhpy4xuT1WSRRsYAzQA23K2EJkcCeFqNMNH47heStTUmUSDKbBsx4axDgHXNg",
  "key26": "3ZQABovgiaNN2ep434AvGV1FmPs6E227yGDQKfgLA6X8SKqySsiuVUToLmtXMUGdYzAwFuiy5Xpte3svLVSP4zH7",
  "key27": "2Kmr6bU6EiGjCJhBNUFuB2w4mA2g9AsfNa1EmknKwbJ2MpaqwQvrwPmtfVAKcRkX8hT1QuFnWiMz9uuqWDd6bxy4",
  "key28": "3oztqzRTRBaxHHPkrUaHZux5JycRyzRfwvPYwcFMzv3Khm9oUPC5YJ31T5bJ8Cmw1Ru4xsG5CbjA9TexEhB9gaSQ",
  "key29": "5pAMbCZK1DjQFUouq15tSbiHx5N5GSNFWTJMorkNRznrHTfRrzf147VEAbvYwUPGL5JStDtJvpFJMAdQDFN8evuV",
  "key30": "nn272i4Bs5oaoLXL4ZHrhbApJNsThGgCxJGmWqombLW9VpMz9uchuA5nxeqP6o45BTmwT527pBinf15A3udn7gz",
  "key31": "4oeGsbJt3PnQTDA1Y7qSGzwi3YzsCgQSiE5LTUwMUkxnQDyv91v593EWRGo3pDRpXao9JfmXB71vpanvH827nho8",
  "key32": "2s8r9Y6DmJLdpqqqPcjmcKPUVL7ndHUdR2FCh9nQoiJ6Cyh3H6CQTsv2ctztkA98PrMBG77c39g1PJVsBA3M42iU",
  "key33": "37LTh7qfAZZKqd6ePoXENKoBjuCrf3q78Q79d9zStxBdLZCqa4E34wDKNJ43XUYTxKgU6yzEjErh9a33Pa4GHNCs",
  "key34": "2UsPg6WNSp1p1MLVQuZ37qA5chXRBBG427XSDwcGBrS6FJmHVbkpNcY8eAeNPsikp1VE9988CHLQjq8dvHwcfcb7",
  "key35": "2YMp5DSPL76jBqpRudh1c3qv7yC2jDHrcpehGku9sN2tuzWxjDqsVsrkHSGGAdDozMbSeezuLDYov1XARGrov7Uf",
  "key36": "JxtCyaEoE2f1Svv9oSupZLosW8pZt6B64Axo91nWyJ6aknEYzvoe6W2ZP1R1m2FQz9S8J238SEV4cSZkmzLtpvB",
  "key37": "51XeFzhrtovq5zZRpPiqepJ9FWLai7SddqTR6EhuYeQredjQcwiuc3YNr167wLu2vheM6p2sU4TrLSMw5BnrVHuz",
  "key38": "473t2qbEb1zDN7EKhkYU65kHyk4pssadqY5qwGPGyREDTPd1w5Kbmv2z3gTDfdgman8vRfdN7iT34cGxRNGaPtt5",
  "key39": "4EN2aCFNij8SFFUCjzkRFNaQJwhpSNRLZ1vaFtbGq1hNhMbmqA5iKFQLrBTDCNHCeYYJxXKYCGqaDjPT3wFwsYLD",
  "key40": "4LcASn63FTFhYssJCYBdQ61Z5v7rGb6YYbBrHyeUMDeRnN858B74JcnZ6LMhM6CQUmgjMPBzQUWjgADNvifDJcbR",
  "key41": "GVrciyBC9cQdknFWfjZ3n4XLXrt6fR2ukcWv1mhLAPRqFe7c8gr3RLeYYkwtRrNbfLLv9UhG4MXe4eKqauPeJj5",
  "key42": "4ZZ1CTcZmPmBAFAqCcq8mn5HyupzrFjwGiGZHz5HihQmQkLFgWa8Zh8YgKWSUtLLLsADwuWk9yQwx6fcDEKEJRaD",
  "key43": "PLtJ12f6QRJmY8DmvKRF2i44uYZGya6JSuN4joVcz9USh5dsdcoZVhCR11FU66uBnLq6sivgq2EAJhYqBofx1oD",
  "key44": "3vmsWWQUDgZphWr8tHHy6sCgnoUj58wC1Dz398gVXMqzAHMhqQBFKoFz7ea9UqpULRNA6Yh8h6uhk3SWWSDjSgED",
  "key45": "2NMme2uHvgpSrvgTbDhR253A6GmLYMSjx4mWoEBHpb74mCkPeoNLMnLrssUGZ36ZbfYy45711KUz8WLNm32oHD6Z"
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
