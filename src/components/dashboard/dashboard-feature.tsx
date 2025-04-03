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
    "63iYU4NyXMTDTxkgSXpj6uMeSrEHPtNdWBm2SHkD4UvVtfnMYTVX2tzcsSnyjEv8nSwqCxGcBJe2vMBSmd4rWbAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCpCyidPAcxDivnqMACnT7T239QjmgjacycEaHpkj3rQwCcjk51rWXNZE3hxEDWuNpmUJB8cqBz7hHv4VqYY8tS",
  "key1": "4d8S5Se4pUMBnV6jh3syqQAZtNqCghiXpc3hyThWTvVxnYuGr7WfRqR6ByaNDTJsbURfGSymfGF5vVq9EXjJ3ifu",
  "key2": "3ULgdCBzR7Nun3zPxYFNmaNNhy8RtGyXFVv79am4Pd67Zpo6wrwJLKbTVMBfi1tuudsG3sn7ZdUiQ2djn8SKjgW8",
  "key3": "rfaPARNqampGgDW12SVRX1yxNMZTgN4iCty6Wan5emg4sMFZCUgRWw4iJscanD67gBydtfxGPiTZhWMC7uKk8cQ",
  "key4": "54WFPXkwx8V4kD8dec5NhynoZaT5zpZfUKQUvak2E2Nz9gX1Nnva4FFKAW5cHLEvRgabCHPSAr8cSVJiPopL554U",
  "key5": "4ToDAZR7Xaa99qe2ZUMSP8HnA27AJg8pBTNsj8fb8kG4giA4fJEE82ThvTNihZDgtnjn7vgCXbTvcDJAFXdkQX8c",
  "key6": "3M2FdKrjHduZbTA1h72ohpou7MMd7BTot1vvUPkNz8jUn4j6wu4W3k4mbcjAaTzBb53QMThTUrEmoBSMU9aVxZPn",
  "key7": "2asr3Pfye32ZFDYdnrsByBGaza5Y3mcuNnc5aDmTuUJfLQsYAfX7U9Km2eiwLiVjnXYP8duY2okUo4Ha2o7WrZhC",
  "key8": "2GGTn9xhLdiWH8XpteagPdj7kH5xXeijsxxxKixsfdeCt73XXe7Dr72KgzoHdEUfYXCXYXiLL94wx2iUs5M2zqJ2",
  "key9": "5wsyHsyBcy7hPnVJcZ42FxrB6ZQ5mYYjMRw9kCBJzHttN4mLXXFKAu1yQzWhnk6Nxrw2rMUKeos9hZZ9iQAV54Rj",
  "key10": "5z9YZZh8sNibqr33eBLwek28pXUxWT6pwAMsao6tYCdThH3ereKxs9etN5FLx5ucSsEs6wS9XDXuR2uJq5m6zJAW",
  "key11": "rkRpzKp183GgyoP4quPTwAt7bB99DA2ksaUAsBQpPBmckRexpksC36ro3QfxRzrvJwKWhN6vv9M2nJ9FihJvEuw",
  "key12": "4GrRRsK3QJg8Cpx3uTHA2M7CED8awdPQ41Lxz8aqYWTCLsWhLsw8h9i3Hstu31exQo6xAFfyegqppY8QBmeCTqWz",
  "key13": "3PUxH7Q9sn3mEW1j5QR211VP33QYc19cSTLhoVBFjGL9tyWTUzZiSFJb3cHhmENDcaLDPHVWUw9z6TGSw3NPWtXB",
  "key14": "PBPGKWfXSqMdY8E4Aso2Vnfp2EfZdJm1hsbYt9jJ5JtuGrhZ9pgRUZRaQ1eaFsQf9WtWQpjNSmfv5pDjH8A7toZ",
  "key15": "44tmpp8wDQhxBf128EvvcSWJzUbrCt7gA7Q1tYysSYStywFu2iQJKkhTqQjSEuuhFY85UKKtn9YBrT2erYv1GNHM",
  "key16": "5NUqARhCJLYm6mqhFFe5FNMrUPMcRnHCjKe7K99eZ2UEHXHH4N3yeSZCjdGymTkJS4gpXaQfeotrbQB8hFPoApbV",
  "key17": "2LkusASqdU1ouQYSnDdnsDeSAhqK3fZBpfiE847AJHZjvUssHBJoKHAXHHwirRYB8mgiFjK7Ubbs9mQsrJiQRARJ",
  "key18": "MKpsYTyhR5BuTULsnrvu4ixyuK7aasRvRsnJQvbDBWpSbaN88MQaLP2yTqr3oh8H6cEqum3bxZmHH1aKP6Grrm5",
  "key19": "4Uj5od1ZRFCM9hXBGsqTWErm3bxVTax9VZE33x3GraWBqjPUGpcJXnz5eW6H1y8F9oRofLBTrP9QTtHxDZxCKPom",
  "key20": "318nS3JD9hYknmu8beH3ozTP6FhDiKdmwyVcKT8ccGvmrjkcwyVgndEMpyP1czFbtmFiwUWuwaYw14McTcXMUf7i",
  "key21": "4Hn22xPCU2xYibUeTNhUwh5hYFnJuNbSiyJiEErpwPsy8q1KX4RGEWmt3u1jyJTDoyrUqMZvGtsiEVgZrePfggY",
  "key22": "5JaZdb23JqJXWwP13xofcLAenjHwnoe494Lh1r53qK4cENb6ZV2esKpy3BsNZ1Xt8ojNGpwyqNHg2ZhgJXTKLNVe",
  "key23": "4HcdR3qCdvSc4bNyhwr7PV1vfs8kivKjXQt2AGKvpphmsaA1URd4bfnWBakyJyKeyL4bbMnvZPNzSLhQS1PegVkA",
  "key24": "25YbCvuxMU8jrJN7gWrAqrEv8ou3PfzMSkz5iKDqsSkFcgfrp8Rvx2n5quhEcf8Ngd3dtbcYkFKZ6CdrzYDEgb3c",
  "key25": "354rq111Ba4i81H8nR5YtBhvztytgUqj6fgyxCerk3bwK1dSt1uZJ1XyRu8m76LS2ypmkYEWoSF5SrYidxzYrtjv",
  "key26": "UA6SHN1yUKWm768io42ee3mdgEZoKssvy8ePvD2cbtoFQGDBCiWykhFWfWtgqFEFKKyVRkmhubq9nZ1tcviNy1E",
  "key27": "2C9iV1XrD7yT1DaLxKeZpfh28F2n2UA2jMmoPfygYoQDGGURVVvd1NwKajKzYsZT3dq74RHLR3bLPyA197JLuqAV",
  "key28": "4K1bFS8T6LWVAxGpFFQ2fTWsNQoKvzfbpjsWrkX2j3HZXJo94LosftTqbxai5yzbC4vhj4PYyVnUBX9rME4dJD44",
  "key29": "Urjyju1LkMzQmAmQRzkjXAJXeErNKmVSAh62faHfSuHAM7Z3gerbw1EUjGtM8bKkVpVyjbRSa2ifWdWJmF6zeD3",
  "key30": "sengVRU8i3rZzALhvhbg9LMwM61nwUPLK5SRiHh32iy7p8pWtuDbpteCxnriyZ6Mf4joP1ik9XCoFdPsmf4T1W2",
  "key31": "4fM2X8mNeeeD2kVaUc7SeFwmzfHhKnzW2jAMbeKCeNctsGzZh6WEw6iVQrXGnYnAZnkcb56C7AbwFQJP4fbXpUDt",
  "key32": "4oKsConGuithwYnVvSgLCx5sgnKvHnZ8dFekLhYbfVS8rm8uSQTVYagExmeQiaDK7UK6vLGsofqJihtx4zgTnwPz",
  "key33": "3q7fY52YqRFW78DhSYWLamGqbAo2QXEPwrBML4W2axVNYftYMfF3Gg5zR4kEudR6QCDvHs6ErwWs4fASeMvFaiT2",
  "key34": "2E7S11uCighwGs5z6Uwy7kQW7J2DXqAzVpi7KWRYEfF9n4bFBsEHh9LxgLNjzta3G9NeazW1Cou8NfUqG9DQmUv2",
  "key35": "4We5yivGez1dy1Htd4kfLbFH396VU5VCgiGTntUjCuevgtqvRmQBjBqnGsZaZLAvHbeXUwr6k1xwFi35irLfpjkT",
  "key36": "4SV7dH7dNvsSTHiES9qizG5A7uzdmz99PdmymCdLSdzBYjUg47ibbaU2n12tr2GRFpNcc8LWxnGxCibVJbkirPtV",
  "key37": "UJBvduY7HMci6q8adpGdL8WaegfmEpMwr83MGskds6w9yDCVr1m3s8b5XqzD4xzaqPvFjAhBHajsJKo2PrjuNch",
  "key38": "3JLBJ5tgXgTV1t9DVDmTkPpnWLPqg795izs8AjJxo9X3yNS8SJqqM1x8Un6qNDzLCtDk29wqyf3KTHm16er721fG",
  "key39": "4cWmDhCMMYerSbme4mxSbjVAcLfQRj83UcK6pgtJZKg8QWuUaktHR1zAvbjPUsW88fncVyqNpEy8Xivd4QJinU2b",
  "key40": "2q7qs1Ar9PrGbRmjNZ6wc2n8CYvUdprgmMgQi8mxdiHNUV3yTqntxuthJkMJswnzwQWFeQW6Yxi8DBLc2y8U9J6z",
  "key41": "EYvHBvvumbocPvpEBSm43atZuF78LsPgJZS5SiaUpi9KCE15fmC4rq9Lq6KYdxgYFbMLQYXiPnsaU3JfiUk4Vur",
  "key42": "2DHRSpma9N8eaVQYrn9r5w71UjMgJRFAsF3jLSXQwSqjKcPDZpTqaZy13Dk11mCwCkN1PEigYXCCSeYd4cFFEtrT",
  "key43": "5rcHKG9paVvxhnhjBQ4joLfHBqbVJNqEq54NB9morTHJhTVagVEL9yVgGMDdXxBufVipgHchM6kWS9mNnBBnpBsS",
  "key44": "7bnKB4CoLyoYQQ7aTDz4D2EjPvLL6Fntjdmbpt4EVB7yaLv5A1yWq2LVWtJZsFKx4ecWBLZwwQGfjQf5VhP4jup",
  "key45": "53B7dzEAFAWgeZEr6vBD8iceL2QnV75qxoWGWTBc6sMJqJLw2kGPdSRTo7ZRb7zScroarQue2WwELEBHGadRXVSt",
  "key46": "4zGyGgVEKh7p9JgDayZJEvQkGMh9JM2dxQrnW3sYamS6eEpb1saH1r11R6GJS3aJH7WMEbenJdPkoYDxP1BpJt5d",
  "key47": "4AfWCxJsqYJDaYmDC357oLwZc9uf7WcSMJwLHMXj2kCTJjdT88mRgzTcjQDTXE4TQuFMdA44vLxrN3ZzyB9hqfUM"
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
