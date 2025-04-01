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
    "4t2ZqA3PxthPuSUsxXXjK2bQc1uX3SbC2ARxMWD26CwQ1W332RCTATtqJRbhGFdB2zpGb7VCi5cgqwtcNRBZZjSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JokRC36kFk1ahYik6cL3S97vxEarZ7gAtKB3aEGEX8QkbYyt4SqxiN9cxYE95ETAChXB74WuULg2EeDAaz4Eq1X",
  "key1": "4s4Ekd3kSE66WCkKMJ76KnBmxHofgtxm27PjsPXRR7Sius28gpC5uWXcHbVGWmycaxgBF8qrE5HnokieTuknNbsR",
  "key2": "x9JQJEwpmxDxBgPn9UXjhDwuLsKNzM4z9S8D39PudCyRoAPK4mqSwqchL4RgxiRv621zxurCqgSwM4DmaKfKoGD",
  "key3": "oFSCC2hP7aEsSaqEgjNYh2uiibFfrrRDNw4iEBbNRfCxZgCLwXyhJDqrNySPkLyF5DjvALjsmpsAx3Y1fbcBdEq",
  "key4": "4Mo48vEfQ1xNeCuZFxo8V3ZMHCexeipyWxpFFBw8NxFutTVpdCMR1hKVQo6AZ2kxfHrkB4BqtjBKBPWGXhKXSbo7",
  "key5": "24TSVmornj6KqTcuCLD3UB8UWJfNxnHiFJa6v5sFLYF7X4TethCNnUA3AXJBQpy26rB4BCXKmjEQPJ3P5Mm2MkBz",
  "key6": "2FMjCfoaguVNW2bH2vvEiDHg2pC3h1Cm41gwTBYBKBZrSXpkLkJJLPmKKSjqB9siqJ8KkG8VpG65c1mPwrnTnMRS",
  "key7": "E63YRhEZbsQCetZ16N5Srdo4dRBnkqwhHHeLuV7BJvMJu38FR4CbHviSfQVazVtBtLnCsfEdjt3FW7GZH3a5N7e",
  "key8": "5jKsPkBbajo5svtXSDArMVHDezuUBE6zTLmkCUyjD3JhvSQZE8b3pYPFkzon7tudhoj5FNmioZXDz2CeRYrC2mTB",
  "key9": "4hy6CfDbNQ3ads2PqJc7oLqt5pioP6YFSdaSRFfSmZpXNfmVnBV5gaecAa2UDfxWtkuwQmYHYt4SNzyXnoFMzKFw",
  "key10": "3thVzqNpuJmK2pNTfHvdHHQ62gDJWRuJuTdVDvsubZaAfvjKAW3bMacMaiRr2h96QJYaob2T1TS9s2ga8aC3T9Ji",
  "key11": "44YJydcdVBDtHFhKXaZebceix13egNSKPcFaYp8mPmMT961ASN1o44psAxoJtGfEAayqYZvD2dyGKrHF2nowd1C2",
  "key12": "4BtgiX5EPjwL6cEtxoUx391P2NSnVo25ZpdTnzTN62YLpAzhwq6NT9jaEpKwXSafo92wJVTgzysQFVrCn8Jropuz",
  "key13": "Xwzc9qs4t9DCLM3NjhiDEPuMqeBaVErFmR53P65ZiMP8afTudwBsYVM31WBYJpM6S7GaF35AkZvvMdbovUqkPGH",
  "key14": "2RVLCSZQaY1VxLkRJMhuNi3X1p99Yd7idSu9PHm11d5RdAHEQqfiAf31ozSpUonHFMpE5M369STmif1oEuFLSmDV",
  "key15": "4Yf5cacDNYh1xXVyzH7nPaMnpn11z6CZLxh7ADua5Ejt7mchRZdxUAaK6firQYY2utML46kd2Rc1XFFz6kbLRgjV",
  "key16": "2evgzvxPL1sVx9zbUL2hC5J5swd8TBe885Xjf2hJgba5NFK4RDhuZMpvZ3ywXEbGEQVpv9REbm4MxTHazRcu4DMV",
  "key17": "3vzvDASKUFbuJTV4D5rtXPigc47Hg6BMMS6BuwHPjbTQSHMYTXBQDujMC4gDzFaQrxsU3h3xjdckAyreQBwAiKuz",
  "key18": "5bKoD8gRzsxr7yeU9kfpvfeYKeZPjTDJYpnZW4AiucUg67fSbLBep2caqhhStwa9XG5PhVE1vhadhzpoGqi8CmmR",
  "key19": "3vtN5783196ieZBGJL7uD81Fs5w6pN3XXWj8YTd1s7eAQHRksjF6aexb6NfixCFWtfdgNZAGbNTxoMk9URRyU8ES",
  "key20": "BNcdqPt3j2EPk39fCoFWQqXjLrdDwDuxXjnZuyHnZNW8sSWUEkZn9syHzC5nTo9khUzxKXUfP53ghxi54KRZm8T",
  "key21": "5b6A4GPGhJCMHEGDddXNtqjn3PXEBndYtunF76LSfYGoXdjt7DLmGvK5mZGA7MJSH1op87R48eYgyoudEJ6CSGpb",
  "key22": "2u4isKAeEcQhXSrUuDFAqEKTdf7u9B2rpiYDXeN3V8QWhwqXzyj5gXmxyD8JYPYrHVHqRNRAUkV5tKNq7XoTKiyH",
  "key23": "3YRHU1Mg8zEgmKQkvBGqwbqYNGoKxQqvxADQt7YX6rcfQkULWW6SA9nZccvztWCEzBpgv82uifz7ejycNLfwxSzW",
  "key24": "5FMvFcU337xk5hoEcoSZuc46GXSU1es597Sm7S7oSzSUD4TbJqkhvCRmgW7u6oeoQ9LrG1WKiKoTZnUGAYz5LtZz",
  "key25": "2VhH9JptpGWrZfzQJaeyKHm1Q378EuotS45GdikgQj6TpGer8MrXBPrnjuY1SZ6f8LrC7Bew9VsyQG79rAYfqYSF",
  "key26": "319ZKVUEeHkphosWJLr1L7grVSCwn3NZC3AGWBSUiZetWQm6HW4ZrMsedg6AF4ihRNaVrWGLpGgE5AguuMpUmL8z",
  "key27": "3kAL5gxg6nauPH52Fx7bygmqbYn9U21zEh2NMaqjBuTMoTWPJi3rCu1mqeFSZ58vcDRzPj9MB33GREHRYZcodwsN",
  "key28": "5odGcim5WX5prWPA9ni7dh4hcYyHtFocyrnuKyL2xXiDaJtcj8omDZYpqFPfvdB7wQ29aReTnXRLrsBgRUAdoeaN",
  "key29": "5Q4nnMmj5nqK24xQtzmAGfdYmNsNp6SwMKfymgfudu7KXGYtuCCqucjSSFj5PM3TMpSLiAESES9PXRd1mrGCSM7c",
  "key30": "3HLYbUxMHvBCtfPrY51RCDSJnbg5BtrEXLh53HPWUPbEjrnZivHaXX6jjhoN6kvQ6w486KuomjeZxFVatVj3WSCT",
  "key31": "5mVxyjRgwoHdfLuzr8if7NSejpYPxJBNkiMpnxScpLwwrXfDvXmSGBFdZ3owWNcrF9PayZjPojxq2oFUaGJsbgx",
  "key32": "2pX729sZmsQ5tJBYgXpxxVYtWtTcCEBQ541mxwqP1xGwdKpxHubAmkneqFQSVmGqjvcDqCjDLo1ZPCtzU4ss6ANU",
  "key33": "5TSZWJRkMvtjWRhQZjzYvZusQELt8bMUw5jGAVgUdHhhY98fUqr6xtEPAw41uYQVSs1mK1ZdErYDNe3cwinX44Ho",
  "key34": "5MZ46Q4wq2ySXRpEFWAVXVqESzySGWNhQuWHRgMy1iTRHLi3AdyEHTeLjmfDano9ZWDGjdaMimN6SFa1BzeLCiPz",
  "key35": "44xLLELKLrgJPECfShUeHp1gmkXkyooXRY5S7Dfw4m4nePfv5JoE3FoMf9cRTx7H5ow6gqTn7h4inAvwjXYvWkRY",
  "key36": "4WQAMmtYRzKxMkuMMheoYQw9xxrT4i3TUxpoyKScP5H9AVpQ2sGw7k3UFNoWL25v4mkpgWMqKaRQqhNBP1UHqeJR",
  "key37": "2rWz1zvgT4JWhw8ckvusniKhaTurbtAZQRvE7x7awJ1cBtpx7uM6inZG5R8MGFgegPkN9tU7Pg3bnvxAKbxAxCRX",
  "key38": "4qvjcUvpCu9EdyJtzoqYWXLmj2PqFbWQd4Go9px2smheXezADPgKPpkRxsxyx56GEYCPNPy1P8VZj7bVCyssDG7t",
  "key39": "2LX1vUTukSyEZKpKHeXnfxpuk2ZzF36gJUzRjFmEe1qtRXzM16iQpYmVqdNGLJrZvDkGHGhFpRoFv2xQdsUZyeha",
  "key40": "2fN5KeEr8tV8H2qjx5YKeMKm3mTQEuaPkNu6AuCDZT13uAJUrdknRbqYWUjbssD8MTCEeQwhwWLYz16FEBL2kMXZ",
  "key41": "TJKRQuJX2CbDBwD6xGRZNa3eFRJxiXc3KumpyQmL3t3nMV1uZ1KVKX4pQTz33fsqHdiV8f4m7tZjsCsBUP2cQod",
  "key42": "3SVSMGrregCfybMe9YkaZ1Sd6ixMe2GMYPTVBhJoL5G7S47sBgnmdNaENVsMLa9Bji4mEDAThnMQCYWU4z7wunpP",
  "key43": "PurTrvumHDzkkuiwnRjjb4LPGcUfgrDDaZN43GPfD4vRPwfAwKW2sR2CtJbLWWhLMwHELJA3Zsb3sYBbEoLWXGP",
  "key44": "4TWsAWNbJQoE9hya7URW5THq3GKMxfh9U4y2yp1gwS81yjyZz6BqNC6UecNveqCDUbJ5MYYLPrhd3y9gKpjHKH2X",
  "key45": "v9az6f9ZAdCmf2LtGNt3bWVsNStTpHWBcntJSrvU4HoM8Q9Q9SReZ33eYy2szurMKSe9Fy3Zu8bTihgzc52gsS2",
  "key46": "5CdrVuNTECj4wQX1mpkmqyK56Gswiyq666i7ZSLzggRXdzz3RwCbmCZqBeRnke2KwVAGANbZ6juz6uvDxWTcmT71",
  "key47": "36JfqPHnBUWN2dcNHeKKcYcS1pRQfaoUMFokkHUBbRyPTTMydJAh8XbyAZL8N4tyfssSP6wmbGgXQn9oJexXrPys",
  "key48": "2C4unaroL6Xh4wyAHZ7EFTKNLfUbsk8dak7mq3GhFSUCLt7Kk6ASkRCf85BLf3uxbZwDSviwERTDBawqu6HhtqXu"
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
