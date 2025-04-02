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
    "5yFqCT6Ap4iNgeqN7AZHu9i47o5VSBiuzYSEyyZVSW5c5pifDvbhMiSoYLgweMkYeNDfrwQSqPH6Y9yrkGz2C84q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RK5PNoTiKhGaNaZN435gxofB6P2rnc9ari5tFh9NY17bLqtviEQTSQ9FbSjFtpNjqW8YNvjnHHPErw5KqUq1BcH",
  "key1": "2UGvGQuKiHakjF5Z3z5WBozvfDN4Ci8UKxydcDxtQgys1pbbr1NLPWEGuat68ws8a7iPUviZ7nSoM75sjSzXK3gU",
  "key2": "5Le8vYKXubaywtSUPHzgt15PZLw8MHN5gtiXW9EzjE1GDghPUoTGxPh2SopVkGuX6P4y6xVtS8LAQLPFMQUZGgWL",
  "key3": "5UmawxsHna2ZnKexpewLcQynD2tJQhPtLSfAD9SwXhfsSiGpZt3xjA54z8nmCP8k1DAt8HVRgGZBkP2LbVGnYUxQ",
  "key4": "fK3qLeETd1Ru1YFGdtpYYSU1NM4JBuE2teczNzc5xycmrbGx8EtRomqFKrqHZjgpzDCd8wNTtymbGrm3QCvSuDt",
  "key5": "4CDon5scCoqKBqQ8uxtSgTGWhKHgJYbsLAewomr82UBwx2NmAZq95aiFT3V6MtipHnkNArXLCLmJybLu3ePyiP1m",
  "key6": "2CDKKBgaB8J9qn3GV7anZxWNx8seS3jn9yVcET6FuqG78evX2pe3wB1CdqdzCP3kwB9bK8fd1A1TjwAPZpzmRRE",
  "key7": "2RRdAYSt3PWJy3FaFCgDTu75EMR19LWTsvkvBLmNqRDHwaG3zNEvxQsozaz3w1FRcPpRUZ74TKZrRJxCHcJXUz9f",
  "key8": "GdSLUVRo5QyfG9jHYkVR4HMBqtVpcD2wu6LTyANx4QfvfLkgFV65KetrjrQSzNLc5FNQdzCD2QTuiZ1jYjoLEvv",
  "key9": "5SgSMfWZbM29jKDPd7pY1h7ud5SPqUbh7kyGKF2PBUj8dmy1cuNTxY76Jri9rZyoT2vvA4Zdm3vEwS8kj5hNxoS3",
  "key10": "62vn5bMPRqEpAWNqb4bLJoz18LyW1LNskJZ1ZUeYLWz6s2XWyyrUN9XjCt9Ldqg5pfQNBaU5TWsjEPxkCVfcS5qi",
  "key11": "57ykZtgg6KDDwnjwQVfst1wgmSqHd3SsPEVigh9Bk4PgSy86eBKFytCoW3dPZWoFTsU7CSVvjKTDD5opeeSkuydS",
  "key12": "4qvzmBdmTNfvF1rdtjJgact8McdwwSMuoGCzPinkWR9bcn7bGNT6y1g6FSwLSgHQEyCT21TcvQpTBJq9qqtcuT7N",
  "key13": "3f15Htp24DG9J2RLibmYAxVG25Adb6QHMZduYmAibUJUggGqRrkez4Fob4CLDdaVRj4cp1mLsJ6RZcWtuBPvQvcu",
  "key14": "56WEugihyS2hSR2861givs7VULRcZ1qudMG9ARpdeHNjqLUWEVQX695L8UqUZQjw9sdqm7m9Z9vLHDbqwEh7YR28",
  "key15": "emRTKpTpiKzHFBBVjiaPwuDwrH8MFnWcdgqnDP7VgRjGZbounHB7NW7htcS4aUzorYNTvNvNQxvEVovcBFMJjRN",
  "key16": "3UFHcqwDXeNywnScZCKAVWZJ971jfPVgHEkst3pDKh5r9oqfH29kmrwTGFRXhhWkY96DYCAqk9KYrdysBjNEZ7mq",
  "key17": "2ds8HijGrVwkej1qab5Ry942v9jQJDtAmmRfZt4PUb7sVNbuwjoL3y3enFHZyGDeN6A3sdm9FhKsxmSkfPMYYB8m",
  "key18": "21jpnoEkrvsC9EyuvHJq5q8NspET2XvSKosd7pBk65Q9dMGFCGUhYZMHhaWMAkysmarfsQveMEbgQqryzg7QHqdT",
  "key19": "3FkfUWGopix9Fq4gwk7riX3ia79YLci5EvhHcFcQg3GfsLm5K2M1dp1NmHDRhwNEyFE6DdmAqdqdeMubvKM77hTZ",
  "key20": "2oXJZDXBmSNStx6dZfWfcMuHGX4ucdZ7rJDcsVe2FjS3nZYEeAvuWeDNj6EZkvP5utLmzKZ4t1PbVviuTRkD2BFh",
  "key21": "3MmzjmvgY9xtrRH78iWATcoSHphjhj4Xs8dUtvntWyHpMemTpuNo5iRmPAFeyei3rzfp2DcPD4PU3P53troTSvk7",
  "key22": "36LH9ywGakBdT2BjRtwfiWqzM9go7uyvq1S22J4HjXYoXnKBD5Nqf5eLy3vYtnGEn4VMcjiAYu9EaVrLMbNxC6iK",
  "key23": "2EprUerYeiv2dDcbFxvJCrwz1Ffe2YAJJ3xtntyYycAGVzC832wP7b9m7oaWNVxRBfjmrbdjdE6JhDmHFgBeKaKg",
  "key24": "2pPtH1Vpth3UfQWRty3g1k63z8C2y54mtkuiND8X2EWEhuu1Hfp7FYNFiWJqeWE4Sf5FXjPCMKeyBUvoNyVHwVxK",
  "key25": "4Ajg6qBtx63326aLF4GGkWL7dZVSJnXfNZEQLX9d5ASTQ727gyzoFcztvPFqHpioaTYvzVftwrP8KRWRNByTK8cT",
  "key26": "2T6Czn3sGkQySbfRZUDRMtjzzL5h3Xq4PS3RxATLucmv9ucwpotnY7p8EUddddUHay39MQDNaKJZXqzWiwTM3W8R",
  "key27": "wJK4eqCp54yXWdERX1gDg4xPsMfepDXjNeqK6KNhY9viQ8Moo2qJQX9r1YBDmNN2k8kWdhbjLZPKuCNF76wPVX4",
  "key28": "3XDX39cCne65VB3Xj3C6wJq1FeFA8CGAErC2gkX1mjTcDdawmdGe9DzQfwortZAkUFMqzF3xD7GmQHJx4YAetZt",
  "key29": "33REQLn1BH5ifenBxirw72iGRR6DjJ7REgKtkpB7BMQxpLESwD4zvH9PpzVzmkHNvLTqVFduiRwPCGdEDtvwb2bq",
  "key30": "2xG7cAwEdRqDAvENeg8CGiXDCLXrC7mpXNzPHddhy44VxRSYLszA8nfXPC61JW84ZgVKTN91cDNEzqdC8d7XXDvM",
  "key31": "4XgSrkvgVoCiHK448Z6rPQPmAxkSg2HQeGDz2zXV4eVw83z3kssMciynah44dgSp2QpfnKSgXUKJ3msL9YwXaRM3",
  "key32": "4w5NmKgoyrbV3HW6QHrsEyfsqAWKPtmb4X4xEV1TC7GkwgFmrp8ytSmbRSRrcsL61zA66s9ipyfosmyxggKpm491",
  "key33": "2EuhvEx1SqVogQm7S4zZUdt4dSxVYDHAFajRe16wN151p37Ykcqe1nWGxPbnLaFyn5t5vXCLasiidkrU7BYTPswc"
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
