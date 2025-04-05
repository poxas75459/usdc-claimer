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
    "4NNr4WFwvbZvNoRHJAA8dVLpCe8aKLnCjxYQWSgpkP5ZXZwUuD17gBjtveseM4h3qupheWtwqXYoyMeWb16r2GE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Fi1fEHhgNdKJD1ibj7CC9XDZ3CXiy7xueGJwWy79zhKgzkcxq1r7fDHMooshDZ6XLfFcX7guPuQf7bgoL1gWVY",
  "key1": "2sBYwGNE8cwubkaaDhSKbikF5P7J953n4yAKMBTt8YKJu9HqfjwVWmHrwPQjDYmPAYALbma2wQxrfhjfbMwUQcm9",
  "key2": "42gYBr6WjqEg2tdjC5EXghJXNTwkz2riV2EXfMugtA1F7SUbNvGeX2CHkNdVbk6vk2PWUksQhf7GBRNTivnotjsv",
  "key3": "3PvR49MnEe2YKYhF5rfomanYKeTjYvZqMr5vdvhwvxf8PfLKWFgEB4cdN2zUd2BquuBKdhjmsScfKymo8PPPHorc",
  "key4": "2TW9HZqC57J29bnDV6wJsTkq2cTQb2s6UiwK1qi8CT3DoRTAwkyChDg61VpTyPtswnvCgUZY9UXA653gDfPC75o4",
  "key5": "3NyYgbE7uV4bF2wXLQAdipTxsKKkZbxsyjvrcfhEM8KkkpC7V2ZDPyL65GMP2SYkMzZVBmLm1UM9SyMxocgammKH",
  "key6": "2kYZfB5CK4MJJw2t85d8CnjfXQfcwdF9geCnNpDyrNtabs7VT39ooqzq5Ewq2EA8cnkpYezi2ZHaejGiNMUXyvGA",
  "key7": "2R5bT5f9SS9nEi8iqG7i9rT8xYMe8LUHDSuenbj69DsgMFHkGM5XMBg4EUo58fUgnzeHbpLUmthNQC9aPUiHwi7Q",
  "key8": "meobvsSG95UXgAxmi3F2V2bQa2GA6bf4KWPXAD78RpBXmmTNLsQLem7EdhfdHks83Ag9munf82EP3K8NnrMdRb6",
  "key9": "5AV3TqfgCexdDywRYtctmadeZitqGuup8fh9FpoABWJ8utyrSox1FkimXaZhgqF7SQA7S8zHridQWKsLpmqBUMeM",
  "key10": "3YAoCZitRXVLvhcbE9yqRe438K4Amj8RX4B8LcT9syrPRN1G9CUo5Mmwtye9ERTgGLshHFfyF1ojVwoAzxkKeWgb",
  "key11": "RJawW5QQQbqDfxdQnjtL6HuY9zyQH1dpnx6wBxGnxHcMK9dkJJc3H2Ee9khNQpV1ybeB1Jc3trwzM7PKEUz2DTZ",
  "key12": "3PiNPzb3dSuGk3SfusBYK5HBmJRQcirVhXGDPtxExgQ89ahf9NvyYLmbDNfusSWuHFqLbLeFu2PWoq9Sh27vpJ2W",
  "key13": "4WNUpnkyaAcEhGFU9QQoSTHhPhktNDeu1qyvukaomhZ3dSo9ai1EWBYyKMcVQwxvp2e8SwAkmRqnjuyN4X1NNNrU",
  "key14": "4w3PaNiH2RbtBpLnpDZDMUJ9JXAEqCdvNzmYaRYPHVVhtkgCTcpKXTMNrB4NtzevJQG9T95xmTRzEAFU5ebmQzfC",
  "key15": "2uwr71MzPLtAs5T4ywz4enW7EZnj4wde3JnzKy7KKrG9H2PqV4eUV2oGogtm6Eo91zQfFwv5fsjFs2LS4qKqzzuS",
  "key16": "3Rn22e6y2wCSGraWtciLK4FbnCTbUMVDNEzezBS8tuSnCcSLRmLjjK4ubvAFqRBGo4t8Hwpw3gmgxJKeHP1EPxd6",
  "key17": "3RETJBi8C8CWr4gDr81xvyBtK347KkTrNemCon9Jmqmm8dnPdx4ffCziW8bWG1QbuQyUGypvmnwX8BCWSyGiBrqy",
  "key18": "3166VfX49aJE1FmJNGBbMWyJRo8TQcnqRmVRkZHDjHQxZLRK8dpHnsUe3GDF5PSmj9JS2PpYwPPff9aoV9HiEXRk",
  "key19": "4V5iuHNdubNbBHjnhgnzY9Mz8e8qX9YaYq2462VKU37nm4pWMQM9HMtZsT2f1xdeZZobsGchLK3HGkt3QenJ44F8",
  "key20": "4wnRYp5HHGz4mzStMRFcfoRa2p6AiJgAs7yw2cwikc2ZJisY7a5gf61nhvUhfacNuhbZzE4fC9EgS1gJD9gKTkqm",
  "key21": "X18bNxt2324aapos9VFgtyDt8krRE6jqKMUbhptgQQJR8UxMHsoWDfdyhEdXkJE5HjEECa1PTVccWWYGBWAAAPT",
  "key22": "7xqaivdMz12UV6v2KYkCCMaNyir2QBUzTEXvzVB5bEKirm58w2hVp96ggJTQQ25mAYCZyrEVzHk1Z6dM254DhxA",
  "key23": "21P5vWiPPtWnxkU9goPQcawrffsZxhhTAruRg6A9NZaqKELbJbMZbw4vXW18yBkb4tcjukZo9o6LBshEDUFpcuoj",
  "key24": "YJwzxnfpfEBRr2znhbojQBsP7zNz558iGxo5RURRCC5UdWYPeF16quKEknghFNYriU9i3S4kMPhEfHfttVihytW",
  "key25": "5Z7HiyzA3ceUa2vxJLiiE9JSQm87qetgcKpH3acg72rwo7NLve6mfH1oqvA9ua9uGoJUx7ELuQziH2xYDT63dT9z",
  "key26": "3tS7UDjit29DCKHGuY82FwqJERN7rbPYoXUW6982gEY49bstTgpAF95WjyBifqxi6ygg8oS1mpF142PUpD7XFAGy",
  "key27": "2LQAnzJK8Gnm3ht5EtQ6qp6TAcSw43s3jPx1Y7uEEuMwoJTG3skhPvRTP2o6t79Zw5m8dSUysnFGucCCz1HuwNSD",
  "key28": "45fy7EmTPPxDT4RvYmjQrzDzd1XV1JyXavp9vEA5W1qQKAZqoduhj25ztKtkqbKiaHaSAZtNoosYMyNDGQPvzjAR",
  "key29": "4jdNAfFvxD5cK69fCVWi3DNCfFXE2sr96C4iqSmq3dgBUsHbxXec96rRLpfmGmq65dWH7qgoivN8emMHTuTjA9pr",
  "key30": "3Cf9MbBnqjoLDahr8No3TbChre5utfDvZm3J6kEuGY6KDd12epxXxwRPccCRxfgzfEAQAHDdbTV2oJjPcRiKyBLi"
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
