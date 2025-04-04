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
    "5GUyuiSNXkQqxRxTaZuz3EnkWhHqFioUggnzj5hJzsrd7aNx8Y72PpUm5gWzcx3ed48epWTL2LXeeeu9H3ErTFFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMMT3najh7gG6cbr9UBcz6eob8PKR3i7Lrvz4prXkH2HXjaVfp37RFRCfRgugMST9fwmfbog1g58gHcyQBkNJ4G",
  "key1": "4mwUwE1wtwaxb15BTEmqphsbfJRsFirASoihhACXCzYxLmMLaVfko2TRPPFNUNFzwMMCzpeSUmVJR1YFWHonvChJ",
  "key2": "5taVgdaZEw5Cg2twNwzBKnibwtkk17BtWcHsX4wJHi2EFesGZ5ZWk6hyH7ujRxPDaS2nn3vUvttp2kRnXmumf7gM",
  "key3": "4XzmvvA8jYU7qMm8sjM2ES3CS37u2HDrL2vQQXTyLu7fKPBrVuy1eJvp7cqmbqUmyXRP9oEsBhpN3Yy21sr85tLt",
  "key4": "3TdifjaHobhQ1WURqbfpPswUA8eVZUinWa1cFcnsAcdbcsc9UwvWczWihWpKnVjdwaQ4ZBiCvn41bgWqcK5ir2kL",
  "key5": "3W2YVGzqJk1TwTcZ8aMVXKcdQ3jkH55DCqYxVRQJfVetSRB9gu8mdCsc98HRi1ScSfVb7YuE9Mjvk6eYaY9DefnP",
  "key6": "2Dk3jFDmytJ3pktRfGW1KNvQi8r3pMvjwmWngkKSua1YuFM1jcRnhSTCZB9RbZkERt8Nkn4FpAaNo7LBFRCxS1so",
  "key7": "3Tk7t4PE6h25sgse7Ta3Z7L6Nscz62tvrVqjvCFG3iCj7zbX5CweUAt5gYFogXXLuDLRyxhKhjE9VQhaPQiMABk9",
  "key8": "4DLWjoBFMP9hvd5aMZKXsJ8wSdJUsnUdPcRCbP2EBG7LCfnDCmLX9Lu4kgu9jX3n7kp84sSidC3Vz9n7nN25XEnk",
  "key9": "A3bvjAz8Ue93d4WxxFetc816arGpxAKkbpikJmzFAicgoM1hDxMRP2BmhQLCp6YoPUXVzFKk2A3HroDdno9kdNN",
  "key10": "3xPEKq28HtiFEik6BU2yHR98jzyN8ymYKnxJ9FTfP53u3bsaxcgCKMede2sGktExo9Ttn7XFVW5pjU5XtybCKyhJ",
  "key11": "3aqHwimDjYMso4YyCUBGyqRGt66dVqyJ88NkYqEhiC3AXhnzCFeH37ipYH2va4eRE1DPAXCEPYeTGNmxNWQuHrex",
  "key12": "4ve9DRxrxJwzgr9GJdHW6sCNWZ1LitTLtqkM1G1PMGSJw7NMXvqapM8L9SG3ucMkqdtQs4dkHmaVrm3A7YnMoVop",
  "key13": "5Nv6YicChxqqgawAUkyi3hJkgtVsvbjzbxSRoxRj3ZN3xEMopz87NFmgCP5q3TzrqicCDKXoAzuuEbFYzxZES7Bs",
  "key14": "26yby8Z5h7SSPQKNmrtQXoe5A39NE7ViMmejw75fKkqDUCtPTRWhXDvv5azNRgnVyhQNfDGaQ5FuMesN7CJ4YYZT",
  "key15": "XA2fYWevLV9J3Q5omayR1S927SDN1RsQNADgoyJ92kdL1Aq3h9A36wxHKNuALMG8oaHBv8rEfu5Uo4WsvdREXzz",
  "key16": "3gjzh9ToPyT6jqTUGp77qfusyFJM5xq9zGNgQnrgAsTDAK5UpsEzbXmgA7vkcHoyzduVNQP4rxPnZhT6LDfHfNVR",
  "key17": "5d1FsfkgZr99Gjz8nkHknNKuCFRRHPKtSw6nherYi2g59TiY82cK5V1SMHWPCf84FGtgDgrbeCaP2j5R1cwY4HDd",
  "key18": "66k8ZhRdf8v7NZFmWeBfBLrswWkusxmqt9o75P8cybw9ms4Huyev8THV4FmqhDFFvVcZDWLy7A2L776GsuS6PQnX",
  "key19": "3vNw7R6vb1WLzTne49LkcLbZ4TGfenGL3PCSK6JZ2QJqAGNRUaFHJ4msHZdavrzExEEy9XAWahsn5DqENe5msFq8",
  "key20": "54U5515onDTzengig1jdhX4TMhLRmPQcCNgNuycr24MDVjojBMAZvyxwu8zxveEumLenGAgc1AwTMXjBy2onTs4e",
  "key21": "5yZDhxHPPmtu5WirsaUhHLVG5yApMPciRpBcyzAA323Ca8iBRBCFfubL9LTco7PuJyJ5EJU5o85DCwTQZxSBjLBR",
  "key22": "F6pi8rxNKkEcBmZ2EJ1L2CQVFqUv6QjKBDq4Jcv4BBGw7NuJQYx3QM6YauCNQrmd1HhtPiKh2CfoX6UXdEoEXZC",
  "key23": "3F5e8BAvHCapNyCkmeiVCjYRXzVDAHUnajp6SsiVuBz2NPDpkwdJ1XpYwnXAeDocG9xcUc8kf7dNaFiRwyV72sxP",
  "key24": "3GAU2zvhxezPRaeCa9L6DZKntY6Ar5mZFyH1TEa6rXZnK5uborubNEVeXcnGLK26oSpS1piVc1HExLo239Kmcf8n",
  "key25": "5jFqqynf1RBSpMJnJAE8UdnFZRZxCz4UEXxJ6hhajaVMfkQxhWNP7DkmBmHDcBxNbNkSA1t8j8Lcum8v1A8G9zBJ",
  "key26": "oAXC5rXaJ3J9woi99nJgqniLSrXSxfAUvzWPqhVWn12WZoxKLr5mcFEErATwxfzkPvf6s9nv3j9wfQBgdgCCy8C",
  "key27": "3HVNriKYde8JswsfVQLSpLMJX1MXtsgnFq7BFA1TmjazHrKi7ppeWkiLGLj6jW3z7G3Rin6RLi4G5B7WoshWWnM8",
  "key28": "iGNn61bNn62VUnG7oRZJPCpXAMKvFcHZrqW9xvxXjeoKuD7GyETbGD5oMojynx149BHc41XmytBfGdxBhi9zNbo"
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
