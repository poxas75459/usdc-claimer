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
    "3BHHhiEGUcHeMqQqVDjNRHYyrRYopGV27XkSmzJcwpmCy5HuF2KT2sTaPNERV1xHbTNNitmhMA4cyZKv5rfaHvX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdyoSnitPdg7fgD9HRb8kLJcmG4HUhNPyZdczQhx4y4bJh95iyJgpUF3ta4QghyxESKEas4EcQjyMNtFtCdxwi",
  "key1": "hKMbc1mCQZSRHahA9RQ4Rx95zpGBkHE87cPkjeL3hVGtALERf659hwQzg2KGLYUjqMRyRyBQ1tsVLqk5HYwkUzC",
  "key2": "29cWkfDgzm9oQ3SSEU7D9jup7YbtjS4ar827vua8rYCaWdunS6tjs86X9oCokEAyf1TEFwR1mdD3u3KSzujZPjbL",
  "key3": "5AMnkiKhLgH8yTxvbMpttrAMHp2x4WBRdqgCB6f8gJV2pQzvUuLfurgtiCm8EL8oWYpJR525LvSsAhQGruKsbR48",
  "key4": "4WzoQFaEhSLx7vJuYXhxYrY9CqrzFJKPGb9feX7kBhXvdcT3ZBYkBtmx1XSmZKvZNzmRdHzBe8GFQE7GrL5ipKNv",
  "key5": "2sVanxnx8LLmN1eNUY6WFxefMsP1fwQbgwixfvhFZUgKLzYvvWNEchAZnYZUo36TbVvL7cowty6qD3RYdqDkogsH",
  "key6": "5kSq7bEHxcPbBNUxUY7fAiP1yPLdDJGdm9qGpLM1UNd3g78dkFG1xQYp92RZdtJvcEKPqMzCfNfe2Tq2QdgoTc5n",
  "key7": "2bMBQ3WMTy5sN4j4tcLZAHPRZJPE4RuYSvpEY1CpApoxat5R8rXkpXMkz9T6T422qFcPp9RJsQxKkPeFmAedMXRK",
  "key8": "2E8c3bveHqzUWVhxqFNr15GWBbUzf7MtisZnXAKwaqDKaSozYVrbfwVm8MoVu3UPgCUXvb2F3kK1JCBmCJGNHVpf",
  "key9": "2QeqazJfZQhzJnmt5xwd5mdFDUDvCNTBuyJoCTMTQSyHgBGL8v1DoJMS2RQ33gP6U15ndMjRsS3f8XHT5mTtoGSH",
  "key10": "65kdFJGr3rs8o8863ETPffGazqwx2s2JFHgcc4yv8w1PbmWjDap4ZyvdpP5qaTG2yxxZDoXgy3azC8A8yv53E5QH",
  "key11": "yiYi5NfpQDUokTQnNKdtmaYg264n7zVU39Xj9U4vNbpNVjPagDhbGSsQDQ9PkYNqvZAsNeDXBaKLiL6Lhvb75kV",
  "key12": "2L15i16rzJC1KJhATybcrpH2DB4HxNq7gpA6vniPK4LW4J9YV75x1qbSB8QT6m7jwxJL2Qcrmr2LhMcxs5tYzCzG",
  "key13": "6QPjYiL7QhkFqbYxscRmDpLqkrj5g8ttb5gNFrcFcHLnV5ZYXiWBkPvAuMUob8UtPAnAwzkyK9fPGCYpgZQKbUy",
  "key14": "4EU443cf9Uq5u7SVGbmRmCQWPuSMUDo67sDup8HkekKCgfuHj8f13xtBZXHtnhuwJCsUzksDbUxjqMJtjKfPEGoJ",
  "key15": "5Af3afmc8zq2wq88Tq9Q54apFAdadxRSzMYv5xFH5iVog1jMPqfDJF2aQEdkaZkGjS8XH7hPsNzy2gaV3T3Tr3pE",
  "key16": "dJtvFrD9i2HQjn1QYsHBRFYkGbvEHP1LGDYvNTjttQ6EkF2Y6ptGNKyU9nsDMPd77KPUKpYatGpDgsHXVQKAJ4g",
  "key17": "2aHfZdmGGJm2saYECZzLP5Fzn6S1ZZ18b2XtyKD5q91LDMZi54W8x4erNmfJ49q2t8aRBSZ8QABomYwH7za8wTCB",
  "key18": "5WuU66KnNJj9kwWbcp1F88yJY32TtjFe9wmqnKtGWiWgUi37gBUbgf7KEW9abDaTJjUsaYTJXT43a1yHAALzGsK9",
  "key19": "Bvyta94jnF46XSfHqafYEXLAqsEW8bi6Q9MrwWJFVoMoQStqsnoyxfgSwPjYE6Vc5y8DRhaiA7uKpsFbfoGtYk1",
  "key20": "45P8funyS9yci6CZYTTGf75PRYTzaKySH236LdUjQcnmN1Wo7nm6kjMK9inmCWBuEgowKz6cHG3m2Har52qxa9rh",
  "key21": "5QwJ7To5hxv9pyWErSoZwMBrB14knnuPpvRWDxTMukZitdgrHTCTD3vbMvUZA4HPtjCPDfyE1tfumGoE4ctc9GPG",
  "key22": "2u9nR9STorb5oFbELGvhoRa2in5vgpGwWMyFGy91V7TbWjPRHtjtrfe3RS7bjD5x8fpUHbURMp6cU5GLWiTc17t1",
  "key23": "4NwFKTFaksxM5ymKwoKaKQwHrJDrMYMiXjyTqTrJEQJJb8A2qimPdysE1iqzmamqQixPnx1UcwMTjX6qR6Uh8oPz",
  "key24": "63Ru5Tx1FS3jM3R1Kdw3xCHwS6KfrKh26CmqELCbST6USsVbxSAV8to1ADsRga8NPSsqHUj19NT8BHq8J2c1cTNs",
  "key25": "2pjRSkPwq15ixcQrHgRKsEN7m1CzKuQcY1czLJnWbiXuDKayKko6NGdL4wP51PVZXbJQG3GwxMFtLgFcasjgDb7H",
  "key26": "xdTCN5BNxX2GtaeugctxqrMjobjQjpYfpjiF6kYW4oxo9zkmFJrqzMsxN8DPQLFHHprSJ8NZa1KY6V2S5Sfxx8L",
  "key27": "3yjznwmx9SDxydYwD2QENkazU9ENyMvAz6wF3Vi8R6P3iDXAoEZpYkgybvPpK1fUP78akDbtDanyHHa8LrVRpYBy",
  "key28": "32ez4Hf2otUpYC9FwsCNf4r5tzDvYSqjvn9wCD7QzQkyHE99CsdUDHKeN2GmUNX1gUUttCa4tofvggv6x5SA8oEM",
  "key29": "5fpruDkJS4aJHoiF5VJhmeaLNYQLyk5Etx1V36KuGWGCyJiVoyYzG97rLvWnJH3q5gtQcuv4Apt7RWfP39bzSTam",
  "key30": "3RDyenkU2Jn3w9qe6Z18CA5VEJxF9umYZwZ3RU2jSWHRwVXNS4m4ShF6SPUgGnkdXn6JpzXjaXBtRPnQrg4ZyKeG",
  "key31": "4Bb3TrxHSHg5nf6M7NnaWoqtmJTvVV4VCy15FLXMQW845N6RUgGQGxVoj4SrccPbWBG5xVyyCCUdCvoqG8xtk2CS",
  "key32": "4fYvdpXK6qgXMNACfcdM6vjVHrMqzeLArD6ssE8ngkiuhuYiJrvhEpLFbC1GSZyHTus1uZ7gBBe8N5jVJFhzka5d",
  "key33": "W6LqH2X4aXELtzYkqMjeeEPEcmJnTJu85MDRzD1YBbWC7XNBWJBMryKAWxRjKqAK9bnWVR6t7Rgn15m3RbQBerU",
  "key34": "UetP8WjuCHxbq3pZroRPxF2n5QqSVAwCDjdpT1t5QjBZneHE6wcpvekM8xu25YMQyLQjsELp7J5WU9A4N7dAsUE",
  "key35": "esfsNiRWWbrM8Kvy748Jn65EsriDyust5EW2rkT6ChURT8rX4XjckVfLBUHCPYC7GRWAvkAkQvpyd2t7NjrbZy1",
  "key36": "2C5rYazQrwSHMrk9gocYFY5FMn64b539aPZa78eo51eirTot86hBNJgLbU7R9oLF38pG3zZuHmvf5eiARrndUAjK",
  "key37": "2Xczg1boqdssMN48pDvAiwauDex2ALVZPoSwKviTsCNBgk8MsXKNdC6p1ES8kRUX5EmFwWBBMo9SwRrv29zcfP6d",
  "key38": "23cEnnbi9ba6oxVFhYFQzwMELxvPRJipNkmxWx3AUGntjXnAS18AQ3QcY5Smnyxhz6Dfy2rV4h2qSTxwVRBrbWib",
  "key39": "3fwBjHK9Nj9biJKDX8ybaVrcFfzMaGm3pNiMfNzcCtYG1fFLk7KwBoPYkvgswHmyj2csWAXQZmeYBudoDJck535q",
  "key40": "4FDrW3taB8YSUj9RnYda5KZySorRmaYdNv9f8YDFgSQMktvAWH34epBRabFmT6s21ALLtAVt29RjE1xA2ftVVDxt",
  "key41": "5es83G9sbWRrNGihXgfBt5Tx6xwx1wBAj1Mt4UJfyyVf32KEUxRGMYYGXf9fDF6ivgUgZfvD5WqezMDhka9vAYhx",
  "key42": "3sU7ggS4vJ3awney13jnyfqRxEdaxEHRFtdwvjT1g27ZqU9HEuDRAAPJ4x4WNceR3jQ6NJWSucGXQtAWxwRAUdk9",
  "key43": "5MufgbHFJ4q9DjuyUPRJ8RahJvjfJr6HNHRPCrQBTrt5W5McJVmtycW1PoJm2aife9iy4K4xHwm6C5sFTQrFLfkd",
  "key44": "27PA6juaGfAmcgyBRJHru7WnZMkYjYY7Qm61x6MkrfqzjZejsrQKEMpU8QkU9WyV9zSn5rpeBKFp68BKXLYGN6WW",
  "key45": "2kPiC6pi265PL1h5j2tsooz5KSLooibyJ9D1YS2fCy1DMn4PLpJ5TJsmKriRvkTCXa3owxYvUPKwgTchzUVS2Dph",
  "key46": "3zm2YGW5iV4CGhyG3escPXPNmnozFLHC6AsHX6STyXWobo1yhF8MvogSXJiSthqBjUFJdEaEh6pTqr6gHdVxL3Aj",
  "key47": "64qzkidxn9KTnCcf8c1KjGZzCM3Tr9bdbqPLqT4Tf2itBvomVGP6MMKry92vyoFViFhJMNADCEKuAqYftsVU6Lxg"
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
