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
    "ybeZwmEVwgKZWhUQ8XmwRaMadXDdDi82p7KkdcmEiGSRE2c4PRBSMyrBwmASTzffMsmVhDuh8uV1Ce9UUwK3aTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVMF1o9dmHrBTqdYaUNQTTtjQT3BUSA1iXgVuLkqv5KXduQn4w5a3yuR8tgbQMSU4mqgPHVfKdgsqQjuR8X8uSA",
  "key1": "4zg29nVarzZh9zPj4TpuVQ9M4fcfmC892DsV5sQJASRkk8YoJqzYErmYVmiAchupagxJAdyghbWzSJqXtLJJc1wQ",
  "key2": "5MqMTYiqX3G5xiQt8oVwyYVcfxSvFZ7Q7u1jTEvaybazGFujYXJKMURyTBAtWtm8v5KnoZkuadmNAJytYnNARWEg",
  "key3": "HbSvEvZV9dLT2zia9FGEnb1Mb5WNeoMaiLHj5v12eRegJGxkveuXHGKi7UP2fNfpj48ivME1xLsJNwPcvLpYpZZ",
  "key4": "iNfyVPKYjwX6o8dK28xGfZbiJBbt1o8HcQLxMWvUr5fk8orAJhAfqTpioQRWetCZKXz2dXacV1PDDTC4eLVy6Kk",
  "key5": "2RAYBumNqvqx6k9ytuyE3nceqrPyjSn3RpT7kwNQYz5rWdsUcfiwpdcZq16xCsCWdLrtYYWeMQbPg6Acj9QBJA7r",
  "key6": "3bi1BherKW4UNG51wXWPyF4bYSEpZMWJsPZUsS52s2kVdXkiksarcgtQeUquoCqofYtCkencMFwToTRyEWquyJ23",
  "key7": "598VGt8LCFURX7PN4AssS2exL4NM29KEsV6Pq6Vb95yMRWTShSmECw28U5B3M4CMm5moG6deiKFjyWYwHr26kV9S",
  "key8": "4kch348dvMFXKwcdqGiEtxsuduMZYbxXrxtjGdopjjQUkeNwrq2WDvz3BdxihJ8cpfnL5doxxHufum6yer8RDhSv",
  "key9": "2JvDpuoHd26QmD1X7F7v5yPbAbux72WhzMdJE5hn2kw2h9fhGz3MBi9t2pRAbCvfX7wkMcbgmuwKNujDiSssdbgW",
  "key10": "2uTXiXyGp7ERzxH8AEs4Kuvp2dNvAgek1mdy9sPgz2j79Wxj7eFLJYqY5aPDitT1JHvCx1DfKFirp8GuwiPrzqjH",
  "key11": "5FpujS7n9KDduS27x3GeMTQyFW43oXXwGsMeidA384X2NwxfEs4XEBL3Lqr5DyqhC8YA1RJcb8wecs67mUZSEM7a",
  "key12": "4W5K62vwZUUx26ThXQj2zoZa3kJP4iN7CAdZzQDgK7LBiZLrWwPj9VuVLJgYdLmKqwRzAqSXpEvLKUPiMch6Pq7S",
  "key13": "3URwzsv4wmqNwq2oSKXpeDqDhnRabqqcqbzx9KXEZTLKJGG3hsz9nX9S5J4JqjAw2GcNfqdcwhTCkcTLwdgKhqd7",
  "key14": "opDzryTHoKKk2xnT4D6zNHzK79AvDJVYHs8f7H21jXhouLmzK4RMNiMy7CHo8a9e5gco8mR4QKptvFpz2aZUCLD",
  "key15": "2thMyhqV2WYsNjRP45nrPFdhQ2oPx2SCL6H1VVR9ditRQ9SwfYJNep1WF3Ckt5EudFkNU9iW5xS5giGUzYG2daM",
  "key16": "sfN4uZcqLodVzrcg9EhkUiGd7jQU4ZRNNtLWcQ9fNvbhNaoYbU17QSoMbCkNLYPzHEDbmgSFPrvd5N6yuM5GtGb",
  "key17": "5WHB5Rnx5tLWheikxdoZQV5yoCoYhbci6Buhhk8nUkGvJnt2zxPTzzu8DAbZSsAZJdPKh3Rx9J46r442YrrNFvKD",
  "key18": "26qqvTHeB99dbjUcuXV7tKtvufmDQgBXJ8vZfPfd9gSSPKgmwL8L47fUUve9zW7STfHMMAmNCAoiNCnXs2ArGA1u",
  "key19": "4sxQNyRF8HBJuZxtxk4PEjXjv4xk1K89XqBcJ6fHN3Y9a6fgdJ6wajy57Swt7sUN4MNE4vcpCSwYn8GaagDmNkyD",
  "key20": "5JoUgHnjYbaaTHinZVkD9zDFg2bq7cFCiuXjcyYH1gbn5BnbtT6ngi3vaVFW8VzxEEc2aswZ7kRZmekkTA1t8nvR",
  "key21": "4BUEXJZJcYip99FAhrHhDMBtjU4B78ZwPVoAssZ498pLkfL1L1JkrU1UpqxudUWGDqAh74ijKscpiJnaStBBUBTE",
  "key22": "2btkFWawZxMdHW8VSaQytku4se8Py7LAJqW7FJQRByHpsjwj3m2Ddnma9DB3e7gZi4Gjag1rxiABoDxjNGZPHh3x",
  "key23": "RS9J7KTwxSMa55oAcACV3tmU4EYxNUkhMvxrfNepStJ9bKn5TDME2NbwoYGJRSbHRSmRdhizxm7xtUT2Jo1CJUW",
  "key24": "yLr7R2DtWZCyQKUusUxupRBwFa4QudM5MhJN4GEycKJiSCZ97bkujCVsvWa93862Z9br7d86LxLvzwqR4KYGPQU",
  "key25": "jSFhXdVNWC1MJF5HKsyBcrHyYNi3WFZn687jkdYvaZpCYkdH36rgjW2K16nmRR9epWWbMjfsumVCc7sU9hKPghB",
  "key26": "1HRFdndLMmPNWs2h2pKkbC8f9pwjTwBuq17sVvT24dNoTHDAAVaCEyaFD5R8yMLNyka4utcWu8tqoSaK5J3cn2t",
  "key27": "ZY3dVp36JmqrTxXMZVgqNddQucvQu76E95L6QL9WKhNtSmdurBnhhiTA6UNaoThjdMFsRaTxSfyjeZ21nQ287uZ",
  "key28": "4AnTos3VopJTSR1qSpxBz7Y19TjXg8JYvuSBjZ8B4KkYd8anRRUjwDLbkshtE3FHCKyX2ZDb8hZAssQKxJfa2iQw",
  "key29": "4fMRJRHEdmwVaVbe1PVvjsti72bnpSGqW5XHFV1YVuPDFxKgQRAjVQjuD4uhjDfxrfmx38KzzFLzKspDgjNAqrvK",
  "key30": "32ZWum5Bg35RM487wfZdQKLi6xVS1nij2Yv7UG1azzMHMqeDq5r9GnxgzF4QscFybsTT3ovJFqtn1US8iGDKCFvZ",
  "key31": "61oNYaMCcHPBAHoo7sdHGdg94Ss9TCQzRQ9WykU49XiiVVpdF4sRz8UV8Go1r9ELuTeyrieeuuxjeCKmeR2L6H1e"
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
