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
    "mWuYDPi9wK5cLhjwGNaGbTnmb4e3UMSTZrSKQ39sb8t3N4MoDh1B2uVf6YHD7RE1fwT1vEaxiLYJLu6WZTj8fvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XUvzk4G7EhwUHm3Lnuh4KbKNwp8EY3B2YBzDvrFNLmbp5BaxxuuCmvDrCj8LyosaELdZAD8SC4xwg5cKtZQ13h",
  "key1": "5wfFP2QPM14tqBW6uut3Ex9b2KtATp35jbkHyHcL3kh6Tew6vzMcye8oFDkbSNJCWmeHiexaQdE8PZq68Fqrbq4y",
  "key2": "4yKX1pyd7vjuuL3Qww7n5gBMWzgXrkFphERzCSMec9283pexKcMS7KaYNwfLRM3vhyRr4rsGURX9b8caQM8BCq2g",
  "key3": "2gDEoQzD7RpLd5NWFYb4NA5pW69WsytR8gRPmdqjuWGgdpmL832BewjJ9u5mBWTD9WWWC6EudcLtyBFULo3NB1sa",
  "key4": "2Xa6GJMp9zFz86RZ7FXu3a9oNK92U72qA3iLsNjsuaNMAh6FL4fkdjqMyxyadWRpeuNwNLzeugg3iZcCR7sm1c5t",
  "key5": "2AyqFMoqh1SKYm4MfGbNY7ndpwzGTFzZjua6gUsomsRLvYko5f4gi3nGZFaLzGxt1ufSFNmo7ArsY6Jey36hd5pr",
  "key6": "3EnJqGjGr8gjhyHfGfMJs8NZLhFCPKBAr9hP2UqdZQPurQ9jXTg8TaxGtAGpXuCPnY68zwW4whYxSgphJXRyrAxV",
  "key7": "3F7uVnnyYrx6Hne7kiH9UUW7g2dj4ytADswmdnnDC9SooodQeL9XCHKBPjPCt2URCrmYqUQmGEZjc4UyaLdFyTiU",
  "key8": "5iAqnpXgzdKiwDnokchry9fvZCuMcLUE9QrqxT7iyg9K8rbVxhp5HokX5UJQUS5tA66tdMGn4vAQ7iaBGHEQitdZ",
  "key9": "4A4ebfHRBGaH5xk6kERTQwVMyyiRJ5gTXc1jt1q2XTpC1caNLyR9goHn4TUYV4CBEfquekM25sD8s1TrdAAAd46v",
  "key10": "HA7qZNLvnPtwfKSdngrT8PioCLrHueqL5WZzKfq3rrZEJLymJrSJS83nxWv95yjTDzvEHK4PnJtomXeFA8tXFDc",
  "key11": "2b1VLQxgbumgfhqH6Cru6H5n7VkYaqT4T1QijFvcWZdreaPd4DtA5xMnq6XsAuKAH1AxbJ9wDDzrvQiEfzmvQo47",
  "key12": "Nwhhg4tzPPooHiz9ec7fDNKEiY21TCZu7WaAdewvEQbuV3H2tPwkt9sgESFUzVciHZ1LRMGvcnQN4FD2X6XrFqF",
  "key13": "4X7xuT1T22rMGWUjabafRikjzB3ANP4b7JKWVdRDo8VEu56yShZTggGcFzyD4YyvWvCisUyQZA5qF8EgwCkPPuvz",
  "key14": "3UWpaYFsbp595WpiS5Fb1srqbRZtbUtxn3No7DU2VVdgtzGnwutLsraALbNmiPRuuN3Prwv5mR8zDmh522wUDjAt",
  "key15": "52TLV1rBhCdWP3AZ8Hq3KM8gM6tND7EAYGtTdr2Jm6r6q5kRbHJmR2jomSwrrXUiiGgt35xxrMrGzKcMWigZAd7o",
  "key16": "9frpoh6esaowcpyqLkk1b1G5tZLRNnqsbPW9n8ZDVq9zKBah8Hox5eeExQ1X89foruzeASmMjSSzJzSMXrswzbP",
  "key17": "2KYHKy4FYFEsXHdSktFZ6CRsu1iTmVnULfCWauXrHeuija6cCaoeZcvSJiwyQJW9aegK8ypgdeQLey5SqoenYpQC",
  "key18": "4dzd5GxaM7bAQre5b3gmfTsGMv3YQ6GcpvACVSH3pHXXuGAv7JUot8FGyQ4XTVJ1R6JygTjWqRX8Ffzm36jqge9X",
  "key19": "5gN1SuLamVpQDiQTgHdsMMFCA2hkDiCKWBbyMLTuySHP8aekM2TCx3vqgaucDDL6MmquWBdGiZr7yMktGEUDR43A",
  "key20": "3TXCgGjhc9gEzaAM1NwNRkJzk29xaziEKRscmVPVAeBh1Q5B1r72T3tJ4yhqbYHAdCvR7kTAU8pKgQrfxHfMS2Fj",
  "key21": "2ckE7QMiXjaiVoEKVSRfYcsHpayYeUc7kUtMeCmyuqG8SkKDP3jPTihJEzKBYMyeU7qRzKGAM25Ku3gN6uGNbWc9",
  "key22": "4hRjNPBA46Kd8KMLXkEGYfyb5UfhVc1tFS9N6boFy7vEwJc94QNr3V7wMaQZ7mydtEMer1t57oazb3GWHHXow3eV",
  "key23": "4zEuZvvuxcv3Kodt25dxRTaNjVCeb9ciqZYCCi3jKFTXAqaaTiqoRTS4R71stwXy2PU8B6wNXWVCqxTCN2ibPfBq",
  "key24": "4BVhdA3eaDuZUDcjZJUaAVJt4SQ1GRXiF1k24TRLuD8sBZ6D1wcyAJcY2fAi9849TsmRvS1XdDSRXyyEkP7bzz3q",
  "key25": "3z2Wz6yUQE2LNTKHaWZBTuMYVBsHo2ttDDBqE4kY8XU1bkF9SZmGyKVivY8tJ1quQ8EJRum7Y9b6K2rCwXDSGRf4",
  "key26": "3e4NTHVoyPLBaQ1MdoysbMhaF31era6otwQTFsitTMwPFMt8J1p8GsFHMLJeaRuWVX8HkpsmMwDrimQHdZJptbYU",
  "key27": "235P4HM4Bofxc6LPq8d2UrMSinxdj9F33fwe5JJFTzKqCB4A3vw8PkrFMGUHTpfX1h8qGurEWwKLUFjWsHM5oyWn",
  "key28": "4U4VTfYpWU94yMAnYPR93zUJaappPwMgQbV4iTFv79Z2m6ryyPx3XRPuhPSQAqwPJJjTpxzgT15e2VfWCoeyR5dE",
  "key29": "627K1DR42ig2n8hf6iWQ3ZGijXkCwBQ3t8M7a9hUtNNwWZBCwxWvGtLKPtkRusQt7c2Jn2MpzdvWHEodRbCp2bxN",
  "key30": "52XerYd8YDQDCmBoLcKsjVJu4sCivDNtSm1kQRPTTYdxNv7SEVDKnS63hNa8BPYAM3Qnn3PWKhyN4b3RoazZsPqV",
  "key31": "Q3DoYwzAAYKjhFCeKGhnGWMFDTfh7bgn5cnnjSc8NZa9LXMcFBVCe7DJZovKgAerFRrZakqzygQthgCfLZhdsVL",
  "key32": "547o8szhKNcwLovuaWaRUYU4qwrKpM6GEBekEFkZWjZEeoz7fPhwrS8eiz1D18d1y9y7qAk3EfmuX51CZJZ4c5g8",
  "key33": "3u3cgp7uSZm3q2e4o1MFJhhq1o6oMcmREGMD4FFtU449medUgx5FAHSqjw7rvncn3bmohrwmPGeZbeoP6CTjpLKJ",
  "key34": "4zDvoYZ6ZdYD8y6Cjucjab8Kcxzi2ZPC4xnRPKNPRpaW4q1uHfRWenM5rdoPSP6WwKN2dg5qEgwKu4CkVUcyzmj2",
  "key35": "219m2PSUsfNNurUA1kKCcZShby6pZAMVcpAd9bbvMouud86bhHQAizH8kcog8jGju2Qvp9GYBo3S5FcgL1oTr9YD",
  "key36": "5qFxVgMfGNo8CGcHvzaoZHEfiD2Rf4nHfVPm8S57NxXU5vPR5BcJYA4coZJNvF9N5r31JsCsXM9XwiG8tpaaSDGP",
  "key37": "2rhjRuXLM8y63MGw98ZWL2pfcSUwDLxNAUPxJczC8tfsaa3w9mPZb1iWu9rt9MdyQ88dBJHDvyHxGkMw5jtwUABv",
  "key38": "2L9FB3DYDrkwaN5NzMQ9493MnSqGUXSsW9WtWCyeyRTL1jmp8Rqdkdtq536tHUXh2N8ooU29vTmjHsVRweEmoWtG",
  "key39": "3Cs9szdt4gtKwagmeZnJhe7HEzDBE7kEy1xwDJGbnatLKDER9ytbZinyQLFt41J6XhN8fRd8dSJu69CAbxzpCCz3",
  "key40": "2asRDgXYtpbwgoGHi9CkG6RgTvqr6Sy8KUUYKDtAzKsuN2ZfPGm9fijthLG6dL2m99dG79YdwiKeExN79roKio1U",
  "key41": "2d66F1WCeYg1yh2mj5JUqygVmUxA9x2k9fW5RkrgnddqeY5ahyiB77VC1y4fZYUpqg8L94x7AmZztB3MDNPXxd14",
  "key42": "8xv4kmcLBubknYc8866kXSjgSqBqxtpN7VdAX5wrNJmUpWtHUKsyziem4JDivqaQQyugNph4qqBSvihVtY3geGy",
  "key43": "G1vWKQSLpJaxtJ4rTbKLimQdapvSeAS4eMaNQWzDdi3NfBoJ38P6McppTZApXA249nCsdMMRF1ag1ZKsTidtHPi",
  "key44": "5GCfR65jL2k8AmwKiXSjRzKFYVZi4fHibbGGc3T36DTMT6ntBmZ4Cuqdmg79jWkSibr3wJxd6SdE1KvSZf1mSzH2",
  "key45": "5FTi4wH8jXupAr7hzEe8o78UQ8q4iUUp6VbpwvSoLNWhQsmdVdksWysxL8wH9K1jYPDqmG22n4gTjzMJSzsFXJyx",
  "key46": "75nKjMxDXTQN2ubdA5Cmde2ghPUGQ43u4xBBK5rFmGGjLxsUjh5ZzaT5Jd4uYz9gmkj36xNkUYm1fpm4ZxixDKt",
  "key47": "2TmvtqpYx3e4ASAUGW3ohtNXd52qCmuDnH3bFPBppX8LNQCutXE7vmPWh5aeQakJqgLEdJaam76SCcVVjF3Bf2sy",
  "key48": "5anwnMNMpVhR3i7n9FtJieCSQx6wHrNT1feudAxMLscfTJXkQE2TEkq2GPsBjgfHBybRPySeNkdSwHAFRqYRzH6"
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
