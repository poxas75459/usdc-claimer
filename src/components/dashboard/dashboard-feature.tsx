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
    "4ajALfhuyUk5PDFadwt1W7n7iwn6ef1ZRGc6dZkscRCbYXb9QK17z6SPkwc8NVMZwTSCZWm2aw3K5fKQi4N5w7hQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgVzdESt3tk9kRpLmC4sQq1ayZNGd8tfvH6WT96XMPgbgz3LcX6UUHpzGqsM8L2Ma7EyzqWmszf3PLGPtNE74mX",
  "key1": "QmNkdszG7vN4SCtyPpM9WP8su6yUfUEeyysjJwkSNARXhy2xptReLWUpqRuwGsuUb4dziAn1NGLtiL6vAieRUWU",
  "key2": "iNahSvEdQsQU1EwaYoLHAt4w76oYNB6bonbwBSvtuh8xvP8hLFcqQ3oUj752MpNGuJianbZswGrJ1xd8Hd74u8h",
  "key3": "5xsmKnchUUxfVBSmvMPaXDUBBpVJXtTCvHmKM4k8mcquFtVWVucDEyeYkM3WDjUokSTH66icDHL4Js6i77FSa74V",
  "key4": "3dV8eAPZ5gvkYmGbaaJfTpAM2ubKAU13csaTNdhwALVibUy4vJwbqSxBsQ67WgFmcJsKWTyS1o86V6P48RWPsEFn",
  "key5": "4bGHX5KvWfr1Fnm6pZ9Ta3xckqmR1edxQ4yiBCdt5UxwBCXMiRVZfaPz6YTJUUvzqNWgRwaWiGopxRFcxaAZ19sc",
  "key6": "vdfSTs7mifWWQ6CoyvASCVqmSmy5erSofpQAKgCbbeExBroAbsCxfHZyBKg34sJRzsaiG6QTMQGAfaQN35iNmyz",
  "key7": "5uYWYXuUHZgj4pwaN8uweDr3g65PLYbPR3PZiieS1sdcez7ZFWqx6GSJJ48CaxZWqZfmVAsmgVmiLYtrXimghWAy",
  "key8": "2UybeqwV46VWpHmnodxk4QMuVcxtk8fMLPGiuxBDZWrMzM3ZVd8p3MEPKenxZPTop1LdGrq5bsqPLqCSNFtPzurv",
  "key9": "5Rx8X7wEnoWXcvXL1WeCxNndAMWpPmywSGT47e8rCKUoTc7D7thVPZFynr4kZPpHos3yBw1H7qTSiuyvdJNnxyGX",
  "key10": "4e9jEwdresxurvfFxyrrnTurFmhCtwDuxeRAmznATTkDfzm359yLbvVm4mVbT8eLkJE1Z72eLTDSr5TY2CnJGaGd",
  "key11": "5JbWx5Mk1epdmaQFY49FNwLLv2eH693ut1aUsWRRYtd7UH8PVzpateX4PSnbdebBerTCfvaJPCvwBKFXz72iZhB4",
  "key12": "4e2hPkDdn4SssqMTLG8sg6vbWKM8uSzWATf5UcscgpJB5Z5ajuHwFEFipHvBeojmWmWQzS5pCZkQJQiC49aMyMzF",
  "key13": "2nUX47qCRU6JZrVQnffPiLhzMbwYXsKjco6d97M1iyAHQx12dAmbdnfuGNYDwxrD2G869Z2WamMo1ALC9m4qcNgV",
  "key14": "DvuBLy2tpGDVnzujFAtwa4FudmPZj9spjVR5i3mbjuMitfxoV7n1XLR6yMAP2qDNkaDYtiehyKNTfU5h4gcHAnt",
  "key15": "2NPriCa5dYNid57gTTeedbDEmi2CCuErCQrexi7rgqyFZL5K6cyQ1Ajd8wGWXwaMQ3zLJUPJRSfRGZsELUCxhPwh",
  "key16": "5TUo9ivjS6EmvzY5ACtowYWbYYVCgLpCBRm88vLDySyqxyFi2Sy8MCJFTNpYDpTH4QDc5TnPBF28RHZvBg5EzbWa",
  "key17": "kzP9cDKifp798YcCjJNzEux57FjQ9iuBp9CQguvN9SWEwfMLhheZnn6RWTFBjseMhYjPXwHMdSd4Jn88dR6v93V",
  "key18": "2qWvESuH2c9Buc7E19h2ErQwT8L3jcitunpmf9KwvjeTpCzzzTET1vTDvc1tYd5dQTYxUVyKFU6p7FR3NSqqHewM",
  "key19": "4ePzkyE3Kw71GZRKkmc7Pevx51WFmvdYJnmEMUyBEJ3uHJ3YFhrzyTCSGzRCBP14Am5dcRdZXVqvDvi8oktUWkh4",
  "key20": "451hkVPC6twkBAkF9HEtua2a66SxtdKwuAQuTJo2tZXyc49NEr7uSsBVSbYvTJf7QXhYae3TZzVBhETsXwBMQeo3",
  "key21": "4YajnjbxxMMFjeZdQ5JzcjXkBDFECum611dGrArjBEXRVhYfUDnDY4JrhvxFgDsBVxz8c3g7KXdMdRteyG3HWcBt",
  "key22": "4iyJp4CxmRnpp1uvLaY1HZRN1LmKTGkQtCwva6oPRt5SPzK8xwn9auGeAsp7zLYMZspgS4S336cRdi3mEMRJmhXi",
  "key23": "5FpFhuvExo2QsEDLsfhgUSo3yFy5vEgnvQ9KysTKuBf4h2a1PMAN8YhTEpbJ8oZFC226LWJjGHfzKGQvNSyyxqGg",
  "key24": "aQzCSbhoNyZs8DKqWq5iRQEFdLpLPMEzRHRKt8CxKBsZoR7VP4FLLpyuSwGPBHPcm7iJAAQFNV7pJdFAv7dWWQ6",
  "key25": "aSWHzKXFapkdZPVsdgygH9ZoTFEzWc45HQAu3sQrdvC3FCHzBnbBEcPvsHNATgBLeiCtFHeBJifnu3J9Q2jupjk",
  "key26": "5PzC2a8PjqxjnAUkvva2DePqDU8yuaJcXyHnQpMXaBcM1aQDFCqRHqsGgfa3sQLJ6MADVMo2A7EJdcyUd1EC6eKJ",
  "key27": "2poYeNpScefMxHYPZfdswD4CwxMXXbCyH75PciRepKNS9UaFy4jxcs5vpE4VJGPURiVjKdYLdnWREAoXmKdLPSvZ",
  "key28": "3DRZczoEX8TPvCbqhzmAKV45wpBVwUtvz9DmRbFguUYkhAqvHH6JH6TxsZLuFsFrfkLLqSZ9NdYa52bAHsPefru2",
  "key29": "5LC49CFqPjSQM1UrgFUajHxcV5NsV18vmo2BAte1yCBsSjVofzF1cmhDtnqNyW3E3M52cbVZbRoEH2GPh48yw1dt",
  "key30": "5JSjwcqNmp1aig74WBbYuYiPewoAqeDDQvS19w49beWnodSonY8hL1BJ6JskFU8VWVKt13yEJe4Nys3HZ27DsyQ",
  "key31": "5nbt8s7cM8rm6hdk8h6T57YT7MToc1BEBwfbaSsCK6UsHoujNyxGwVaUHPANocNuay5DtPJcmTXA3yhHnn8fMmm",
  "key32": "4Mev3EN8crNF35UkvqqvYR9ftQiBpt2nCySExmdY4xPMCVaiV3ebkDkFU1kxWBgjxNVUhaVy99Yrh4r9DzyWo3JT",
  "key33": "2gmw3ccjLyyM2rRhUE9CZTnmuKbBiCmkHFDs7GTPsH3CdjUKXF7TGwN64ben9r2jbdYtcT6VztdT2Av4rRbsegHn",
  "key34": "3dVhCvTU7H2oSrqNP55iabEzw784rPfMeabMAjPME7AZYsBCXnudnuatXCfSFTqhU5tT95mp6J3p1upm3PrsmtwE",
  "key35": "4RZttd7AHNc18GzVXhcx9VSaKauMcut9fAyfvpNgj5DcQezX4A63vo3KDojbH2hED31AazZnPmkiPWwQ4AMrvcwq",
  "key36": "29GMBrr9pTVpUfLb1J8MkRKG3gekt8FyBvUS8f6RvTJLh2P8ikJtM4C1KnXoPBG2noRdak5fkWSFevx2Q2YGwxvk",
  "key37": "5a7sYTQrN4XPi1Lwh8bz9zwK9p3i4vVazhWjpr549Fb5FD8p1uL1qd1tbK3NBgMwEyW44RRw937K4d9hvdCGsjdr",
  "key38": "5nmBSLtfRhncii1KmvZdZt4Bby13YxgpGizfAQgX7vzSk8ijGdNy6Yn3RbGrxhYuh98EPgwt38tgvQSk6UXk9ydJ",
  "key39": "iU2WyRFx8CeXq8cnqki9RDpGXDM4jK5Cgcw6bzN7Vs34QEcKSdjXAggiovW36hzr8VNqjKzPDivQGP1GYtty9JF"
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
