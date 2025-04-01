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
    "3QSmZYy7EVnSwApgzMX3p61anDYyd5VsYZ7NnWxKAjqpTaewV9RE9Rbi9CS8MHxBFWtGRTD6dVLXWxMq4PdC3Yf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzscZJ8uA2b84Wj3733KFZ3ECNhHL68xWxstttwkHAonCexnyTQntwDGUDFzjbGM9NdJ9okvqesYvoU94EdFcCB",
  "key1": "59iQ7JF5XhijULZEqk61w14oWaLVAB7aBNBdGFVsCaqHV72xtrrP6hCAPqeozaaSycbSSJr97heQ5EHC6Z4KqBET",
  "key2": "3VYdbBgk7wrLfVWEbJ8UQzP58aeomHe5sDvTTxb37gq46LVnaKuhga8pfSvwqP1Hc5kxAMDCsWhTEBXJ5mfcBs34",
  "key3": "33msdoEbdQXSdwzxFCBRPtVxpH8N9hRQtDwqU1DVE7qCJj1b6ecM6tszZYMKmxGNU8dWrBFuZiNR4e3n6wEvpqS4",
  "key4": "5VqchdD5SyfTPAuXi3p7nvNbNMo97FXEXVFej9ixzw1QopxoJti1GWNR27x89QY5Dvv45ZCJUPC4JoWbPRwZUQfo",
  "key5": "5ebGPuRBo798Qkcfj8GxGYGcEMWwQ5FTWbbxDUiSb9BmBURo2KEEGkbSwMsj6H14QdAC4dtRxYouzDsiUgNDPsAA",
  "key6": "2iQ7YtyJ8GPwdCP7rL69H9rBjowrCczJ3yjQSA6MypF4XnRnaufrzcvQU9uQoNpxndvySCjGEoaCtrofEy7YzuRd",
  "key7": "5p3oh96SuCvWXfPgqT6SXrMvDoGbbaSAKFXvGLxREWNyPYyTfjiEreA8dMPn8ZaT7w8uaAsm16bPCEuf9NumXkT3",
  "key8": "2J6qMx9u5ZFbqPpEUPTQ5AJw5CGLid46dgYcNAinfw9LmpReSjesAHMQTYgqm4WkX9SAY6T89JB7WAgbqBzPyDak",
  "key9": "3qam3JyQhMdw1VGXKAspZydQ2wPMmTNyzaaBF96m7LgtaiywhMtNDQL78B1Rnp78945MnBfr3MUcNz86SbLETDr",
  "key10": "3GvS8ev8XnzKumpdwqakzJMddVASKhxMJ8KwHQx7TcnqCgQRRsraWYEGF79nPahuPa9Z1oGmkm3RKQwvJCykWy2o",
  "key11": "5JesuYMXHr7h3W6sJkPxgGNAP5fQPnut7tqh4sMdBs59otxa68DWTC65F4GzZq834TX4UjdgW25Xsz4A9eDHaDtA",
  "key12": "2bXiuKV6sA14GUvRn5rp9TFJHJbgJWAUJH8LTvLZWt4fJ7GokBhxDmSZK5THCVewvbdtn5oGNHNyuZyxNUaWXMjy",
  "key13": "38MmHYQ2YjHbVpFjTFDkTjEXzK7C9vEhmgy4dAnoSkzSjTt73icJHye5WisbetZyNZossZFLvzfRvwXyT78TDnWz",
  "key14": "2bv2UqV92wVBsmQPfDpANnehkkFg2eeoeGjYp5MrPPsEZztaXx1Xi1yJiXCgizfXetodAf9RGFiYaSEZtZWJDEU1",
  "key15": "22KAVe2PsLny5As2Y3CT3XddsrPLWhvn4LcmHyDmFdmmP31wo9T7Aeo9yNWeaKDnmx5foFqPN8JVorwW6tPLkx4h",
  "key16": "2c3hXnqsoaKfRfc24MURRtP7u4jRnZUYYszzkavRQpdGF15mo1mbtvZdBJcrbuawqzK1vYPBAb5kTv4rDkcGfqoK",
  "key17": "5xY24DRe7UeMwwJKPuBhpjZPDxTg3Cu2tC6EebNk7Ag5Up17vYbmhHEnNWd36UGzCAPHue8y7oL9VNReA4W1Ri6X",
  "key18": "35PVTApCFSXAhCeyoPCwnM8Y6Zd3LCSWBwFSWgN2gEH65ta8RQSqn4DFhvHkBDAwN1fE3pu8vdvjb2PT2eVCvxTm",
  "key19": "4XhqYcRxnAv1ReRU1jhw828kcLqAFQApEQ64yt3cwG3NjAmFMMnYQMK4ZNMUkTLPMYGsQmqRpadkPp82m64KYLND",
  "key20": "4EgzQVpTPCUUxwf6d6SPVAWeyCURugnWH6EimfKbfTQbVK1ADAs3rkpGksU2SEFbr9qXVr7hs3qBh5DrAdhzDnpg",
  "key21": "La4Dh6xGYC5xcRQCDthb9Ysc2YpnW1EwHtvhsNNeyaq1JoGQg3LWPCAGLfjvCzV1sSeQkJHR4vjiF4aowmMXZna",
  "key22": "7sySRurafTfwarjF9NEmgVzKEAvbSYCVCUAu4W1g8f4tuSjPVFHChwsq1qbBQWjiLsKo5F2jb6GSpinWgY8fvKr",
  "key23": "3a43V1NB6mnczSHHxQCnTXtVUXBAKyXkGAhUgKa9MSrwtikCk9ZVYtgRYf73pk5Pa2E4XrXKVpjUqeunr78GAYTY",
  "key24": "CgCsubMysqELHujouZ8sdhPVBKSCVdHbhW2bAxwhKPEVgwU3SKvovokof2J6RZG2698KbBpDQa93APK6RKZXHRE",
  "key25": "3h32nokBxcUE4aCpYZaEd9bzTqYRQBvjDk4gXKqnjoaPKghG91W5RY13KbvTj1sjxCDCvRmYd366M2wfj434QDQJ",
  "key26": "2uzUNJXPk9CLJoqhdZUu75NT85Au1Uw34Mr4gKNzzuRt6uKKnzwchePet6FHDSsZfRE3k5DK4V6AdthcBaYp2RJg",
  "key27": "sLnHYRUKA8NSRpacZBFojanpmDtXPc6QCn66HchaumAoDnCUWtmVEKzedTL8wnnnrcYy2oXUQNULtyr55NQarCY",
  "key28": "5XRL3t5h4WpM5t6eSKeonAvfGaCgNoEFKM4GSQNUjXnfpZAQrnURg5ZbawDrGNPs7emFYQKAPNymNCWAT2cfq6bt",
  "key29": "4175rC7G8FNDjpAAxpZG7wzDZMvMhF88VyeYGbHPMLtEuHYPCpSTtE7Rdsk3dfkz7ZcemFmtHadyGxSsNtghaqqW",
  "key30": "2RVvh4dcQWi1uic2j3qKenGb74HPRgDAEsmyccmd3RLLddEYtYEgGRmbmUfbYratUiSbQM66Pk6Pm3CcjBpy5GdA",
  "key31": "2HFLQG4dQQ8zfKpDGAVm5oVm4fLaKf9VcqP8PzTpWjYGmF2bfWT2A5sk7RRkdPtZXhSndMrLacNLQFunbXVAtMCc",
  "key32": "4W4kPBsn1ye195LXuufC3wqipFTf5fkcwwnLAoYzCzcdpJyDNFVqJDN7xUXRqNofBdMBRL91H8y3iWZvVFawS4GK",
  "key33": "vifHBTDZEjMRkKn71TwVkqGhGtVx3PHrXWa3U8esPc1oh2JMdPYJZv3yexb5xmWndNNjh2ch4AMrnooFQcyE3RE",
  "key34": "4zUSVTsU3yTDzqMxsuBCPweRatuGoSigjPLeX32W1aJCtLg3yehzb5EUGDgHuVqP5dFw648xjJriKxjdHr7XfR8n",
  "key35": "2YeiyojcAwvrwpTKLUP4MXenPGMnPPdfvNo3U4zXQMtWPPbTj7h2sZcLkD5TrzvsGmjTNhXU6wSYiP8CxtxMZ498",
  "key36": "tmY6DKDnXtEHKBHKCUcugXSRNUWe2yA6t5EtY156vggBXHv2UBfQu5rvqScEZvzL3XAJ3XEdgnPYYkDj6kWVDPC",
  "key37": "42u92KivoR8HgHkUqQ4satXNVzQULrH5vKHWLEkSA4yhFWmVYX149aujGQ6GvdnQSzEFU3Vb2BWfH3CvYchk898o",
  "key38": "4iH5f7d9qeefxhDnV66T1WMNpbJRUmE2H3UKrjdEufHeFFBMWMPq7cebD4E95jWjqu7xfSFYdJchSsYz8bPA8jxK",
  "key39": "2JX7Fq2ctc4qWmeVaZGyqN36JDq9YpRVrSfnJDFu7VhdcUWNZzXiYsJ1MZccvzHc8eL2VP5HwDGf7RgqW33Y4Wpc"
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
