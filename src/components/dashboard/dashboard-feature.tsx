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
    "4JGoxagL9Z7ucJ4QXtqQFnLMxFHiHYz5uvkkiEKAszjVccLtUxjPVHn2xwFjh8byZKaQiw8SPKNGa9EYwAyuprCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yu7XLctryjqR8T8ugiBdWwgALwDyPa6Yb22ra9wNsGr5jBSCgWG92AFbUiqW4RkibswtW5NSjNnCaELBUva3iHo",
  "key1": "3ZSYSsnZ5YbZVYrtvxKHpJhrJEHdCHmTTze1rvUeAuiX3wGQ6JzLAvKtR6FksQuzbJp42L3LvaBuuDd5GUBmH3F",
  "key2": "5rf6SxfB67qbuFZaMpjLKGM8VVTAby5SchGAKqGu5rYsPmkCzjtoFB7Ld99x36XZwitmVCpgUkT3u8XRxkswmMsM",
  "key3": "2cn8Vit9Qa1E8R6ps6qFA6xKiDE6UtggcM99nYAkPCStZWsyKjoYdBgyMEm1r63js81hLnH9WYpB5E4F9REB5N7Q",
  "key4": "4fdXwBG7H4QrSwheqJ2LW9N1ecZpz1nxXrtbjrmB9rqHuVm8LCVXLyDUxiqt3eoBmLZ18KJVW97pSfrh2MmR9oiQ",
  "key5": "4nczCttJRjPHhHvPu2p6PSeSaBECqaawco25DUqk7qnqRxHX3cdSm7SSt6uWX1h9XF82ZswCZPvYnyW52xH8mvnN",
  "key6": "5YHGEmiAQ3WdNiJRgpHwfUcqG83x6cLQoh5dbcrBEw5P7nm2kL4k4wxJ2wtmn9P81q5p1ztVokyPzrDRuV2GgoDn",
  "key7": "56NtT61QJCND95cbnFRH2RV3qjrUzwaeZzv5bVUQCEMfZi2FPHUTSMTBgZvmrpy6cW9BYcTiFjZgqxRNfpzh3rJB",
  "key8": "39bSSZsnHn2Kg5aSYBumZdQH3d6G1q8KW4DCtjqjKAUyjHF3yPknptYyrtdeEPmHfdyf2NDeDtPHRdZn2rfktw3k",
  "key9": "22WcAzQj9BfaN47UpARs7sL9d9QhSQx8SSyE7Jp9vo3k5NfdLp9zowJgdDbURB1FSpyDHN3oVohuZjafynBW1ymU",
  "key10": "5Q9Dd2z44bzFJZUeR3cZpVf7Asfni4xScijYaUgKNSkWkdoCwVHJw2aQRGrYuf7kc5mt1R3UQVeJ5XaMPNUg9ZsF",
  "key11": "2C8Bd9SwqUNEQ6B1bFnNrhyJkjaEBsmNGyHL7fhfJoG6SKuUak5ZzCJd8Wgd7aFwyWgyiKLkoXVvCeK2dKNRzZVC",
  "key12": "2mwuMjYizqRM1dK2KsHg3WUjRPCk4CcUnxP6k6SpEK6QPtgUPhmNanXHQBjnpGTF33Urx9UJHs67P3rP1ePeY3BQ",
  "key13": "4jbg6QNDyHznwADe9eyd6wvt3QnWsKxwyM1KzmY2tgsTCSA4PD2je72msjP94RVfDdsyybFuNsHXj5PejLnW5FEy",
  "key14": "4i49GcnqjBmYSAE4c68gCsRSwXnQxVdRCjTJ2cZ8qRJ1WH9iv6H5P7jQrwVebVbMsfKWPfVNLGUT7NBA83HfEN5r",
  "key15": "3rFCsG62K8Tj1KGwahib8M4impvnUPdUuJYJBjapFVbqr3ywfhD9YDApSd2LttKcoZBRLBw6NpzmHqQThnAvkvPM",
  "key16": "5TjsAiz8KdgCP32uphjWsysxEjnZhZUJxqZDzaw6DTpSzer78eymk3cT95KzzFWBCgdcxBvC26vrmuzBq2Qi379t",
  "key17": "4fzpDmWpm8t7HLLqJB5PeGfKqibiCGACnWdXJGAfMDR8HkF1C1FtjAcJhGdnG1QaJjim3wg8j4q5cyajCcdrrB6S",
  "key18": "2aBtLDgeP3VZa1GYF36aFbTthAZDCZ3A6npZtjtwdLPJBYLTa48sdz8TG65Gkws7dCRN9j6uq9UUsnGda4Vw8Sjk",
  "key19": "54s3R1quEpJ9JZMDYeDEcVxU6Ch5GXygEiWdC3YFjBQqJcax3cL6QhAoswCtW9BrqScS31AFsV2MxtiS5BZ1yVJX",
  "key20": "4pnDVKCtRUdCJZzqGkA1uakZ3gcfTVKRpWtB3g4dyHycQmPNHyZbjaaBuzbob5Fh2shVCpWni3jZ3zqZssvhvnuV",
  "key21": "2CmTTW3SofiFXDTd4j9yJmWVrYyHoSyDMGZiUi5MCMv9rNJqmgwgU7gYUKxmcNTE6e554W3HaXVKKSBTKPy8B4ut",
  "key22": "4PyhrrEgeuU7z5Vozv4XuhWAAD1JqKaLWod5jbPeoi6yUcnE4g5U88rGCNvNsQvZ1ejqigqjjpTABNZN5K9yNHBV",
  "key23": "ktu7niDjse11ZrKXhdmS7KW5V7Ua9FNU3HUZQUAqGhE7FbYGpYk7uZc7MS2mriNwJhvYKh6aUxHqYSTsQidgRTS",
  "key24": "25sCwVKYMAcYsjZ5k2py78mnDNqhFZ16qDhAfQwhe6hsAM6NrLrDvgghvWceeRWiF1LXyGXbF4yoMDZ8vrV1Uiqv",
  "key25": "p5S4bkH5aEMyU65kraAK3RTSDY3HfEvCpXuohq51HJXPFXykZ6Srmv7ifquRAS1k9iqzPEwiw1p5U7yJmU68VUs",
  "key26": "3n5FUjpZo87yPzMAN29ueZdbyNRS4eLn7aRivCvzUHveyfPw9VshYTyoKeV4fKEfC5HXrhC2jGgRh631mRiwo6uZ",
  "key27": "f3SbVSbWvLj2sWFGfEgA2hNKuTRDNETHFbZePmeS74vr7Fy7TdE9S7yydF2JFjGJGFz1Y2eg1hgf87DfZUVzSqB",
  "key28": "WjVgMhQxBKUvz27vFCPVWTBZZfPs1JaVmvDdXgirZzjCTsjzwD3qHNX2R3dScnc39XnpiU6xUzyVayHatHPTJwL",
  "key29": "4tTPAf88w51FEpRyNA7PfKbsxNzs9kkM6MdtL1EgvLypNZzKvbWUc8SeMZE3b2RVVz3t4TNoL7HNMpwpnNkuLUxZ",
  "key30": "3YkfyvkRUKayBHaGs8MnAszePnQ3HrLwty9mRQCUpfNy4DNdkmfbtMxteYvmrJSd8kAFGdoBjEDhbpFN6R2nt27w",
  "key31": "24E1if4fyT4j9ZDT96tvwgsdU8pi8m1z6cbRy1wNRQker43VAzT5ziEKixNErTrmzYeu9RcDeduYAZJM9SaJH3rc",
  "key32": "5Sop1M6H5w4xvxnreyq1ymKCtjhzWKV71iXSpi4xFTLrp2mg9PXa6GSPvYhrTJ6E5P8rChVEPEiaWEBLQr8P9jwS",
  "key33": "3wiVdQrghk9KvQpFMh95EsknywQwL26xU8JsMidVn6DobFKs6oAKzrXspaCdJ5e8yfUxzTiRfgm5KJf4J79xCj1o",
  "key34": "2sngzf4fhqqMfLQiYgNmHpUVvwSP1k2zv1effathxqKvFqpn7EiF2ZCyf6QkEgHHYCjk8JG416L9xZv5Yza39Uuu",
  "key35": "45LyXdUxrhg2c2WWiUhMK25KtwhV44z9cfxP924AT8ymE8c7j2k6eFqxxaXRZ61D98zjouSfectDxsdda4p4MCRE",
  "key36": "2a32X7qFX7k1iv9BQpTGeaE7APfB2gga1kNohK9kRr8JC9GpV7ySsvD4WHjXdxyFifMvFdNzJXu9UzhKoYjKfS35",
  "key37": "3WtrjPrwcLdSph56bEAvtxkHuhdG3wccfYppEw3iEGxsWnjU328UNKnRcmKg3nkLTyiKy9SUai69GQ1fB3x8CHR5",
  "key38": "3SmopMCKiEgaCZBuT4a9WzAkNLwvZwc9kD6dWHrpb2XDdQLePgf9BF6bNzguwWLraWpfcSL3ukCmmm6SFQCr4wY5"
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
