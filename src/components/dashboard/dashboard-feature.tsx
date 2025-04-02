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
    "5WrTT8EHkwu5JcFknBgmAnycJWsL5odXvBwDVU27ZqARsjAGoJP2U22BJdT5iz3HeU2h69ytpLVqQcqUaqEQoEYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvevjTzQHodnNT7wv5K9rstE25PFJAme3cz2iDFHnLwSTXjiqkm94CxHeL2yvNPELCLNSoAiADVVaNRnYRmQQuE",
  "key1": "4JmgQyrxFtuTDCGkhkmGdrfEvDQcK7SzHFQEdaaVXxY5idu4JrcJGscv7rpufwwDRj4C9FENJiskxRP8WY3NCwJZ",
  "key2": "322M2NvSxLjRKpMQxhMqgv8hhD6D5MwdRqstru4eKpStMqrkeqKBwsrZLmmYLm3XrXnNU8eXd6jaJzJn2pnqpeme",
  "key3": "3gu5evrw5nhXJFyWqzW381ikqPKshn33v2i86zCX81wmueZ9585f4LHuanRHE1phoUQeLk5CpLyY5ZZTxPqTAffq",
  "key4": "3mJXxa35du4u99DH4pADsGoKsxeqz7Y2BUxfEgxSQyjF4do9awswc4tkkqWpim6amYqm4fuVbyd4Ybd211mx3azx",
  "key5": "3LEfBfvV2NZ2BmKzve9GGHZAaw8Ezb4T5x9MXCbb65gGkt3eJvjYFYpfaeG8FA3j4Z8EBc8JKnPffDvGpR99J8Ym",
  "key6": "CtiPdaL3s9NWaQhmUmaZX22D29KgkajYMaZwT4kANbwNJWoEHUjjS5fAttB6FimoCLbotc2aEEN8zqLsejZBE6h",
  "key7": "3Bt7FQF7r7E7jKLyK13LuKQAcDsBBBGbobjmz8MVhrNu4LFUtEwVR14RRVrsEa3FR8BfScBhB8VtcxiAq3namMkf",
  "key8": "5BBynfywDgaiExbScYqaRgGH2gJXV9iDXqKg9jcFMXkm1UfXWJw97GQeEqPJ5LJ98UEi9ZFTWsxDWrPHM5WTxdBT",
  "key9": "3HLhAdUFuJhKFp2EXxkCSD2U5fZMyBvWUi1YtYmWEkyNy979F4kngJvzYJSzQcTjDgVdPHG9BFALdGFGURvjeBrN",
  "key10": "2nZ6DsEoTqxj8psPqdQnq52vFbpUHwrufxkqNY4679aSbdmcSh3GEpWVT35pccHnjxav4JAWMJkXb53TvSX1GqrH",
  "key11": "3FFUCMcysCjh2YZmBwCErG1AVrV3aW4vWJukadE8Txgm6hPTuEo9J7TcTmUBnJ4X38eGN9shWeNeHXmJFToGjdH8",
  "key12": "5aSWv1nN6kFuYWtuBVzmAiLWQjZ3TAfzvWEcf5Vh1LJo5GhpJYgais1999V1YAnWGcVusLJV4g2MSAH5iLcF21MJ",
  "key13": "5eVj27shz5oGp3HFUCXJzw2rkoVKCLnPuBsZrX37y4DNMrruykzCNApZFoqzJwUZMqk7svBaNpobSay7hFvZ767g",
  "key14": "65TUNRPDb4wLyzNahcXrok72ce4d7miucjnCdRqeJGJLZK27Sf7aWNbJVzVKvK8TvqHxfJoRQkRDfhmDNKGQgG7L",
  "key15": "3RskDiJiVYwXmXVa3JM3DwEswQfMzHMHo8h5JH1L8MZbiPvZGy7ZK5RpNw21VAWij2MRbRj8GpfQGtXAJd3SpuP",
  "key16": "252Azyjb6vqEiKK6P5sS6b34PYAPS22EzT5wbvSgDt87WVo7vZZM1vafbamzHqS7WM11Y1pc4DthszQCYpsWNAd6",
  "key17": "2RVTtyYyJLAvu3tpdoQdegJseTvzJPMHGoQDcFw1pJKCFkb2s1X35U5XKDZjkrPeh3tJqenvDqZgx8BvPMAGDKGj",
  "key18": "5wfmdWaeUaCNw26kTH14pT8Cm7wpRmVLdEpqaQHtyees4mPXQxbc9pqcWBELVqrzu9wLJZg69C7rVTQecFvR34Us",
  "key19": "4wCs2CN1xBKvu3GmmNTP8PN8nFXAoqd5j6yt9FBgSfkP7KTMizvhcUjk8p7Q75i62cmYTm3KgxcT4ePGKg91zU1L",
  "key20": "ta1xNXfd8cujShKrntts289Q6N5KGXqXfEnBw7LSYUkEa9EXSQib2VcHV2chh9kf74SGV43NVELpVX3JqV5mm1z",
  "key21": "4Vq45HoL1ke9ey6emPw4P9nL4EDLLEtYMyUv2KoMiC6oEPeQnvS49wPeMwirfio21X5MYSS4JGnJV9rpu6wCkvQw",
  "key22": "42V94Fip9w3eEr9FEnmv23PcLCnHwqtyhpjVPZfacdkU3iuC6MTJYSCcHzLoopDkemy97u5exxZ4kcueQEWv3vY3",
  "key23": "5pKLGxSCNY7cXp6hUsgPvgGyQVynuFpWkfRPbQmHLyWENgZvkE3k3y7VxwXhir7sMFqbmEY3NWxVt6AKbj3795AJ",
  "key24": "V1Mf5AxJkvBR5VAoF6UDMrMuf5GNgqE2JrH3SMeHquAsTmECfQbmFgV3PRRxAPLeapBR58mw3SLpbSgG4J2eNU9",
  "key25": "j2oRnHktEp9yisDvRuffesGA927JzTNSdQGGPFDuPVwXF2qSSL4RkE5R7iy4448ejyoMDvDnhNkd76PAP7nW6S2",
  "key26": "3AM8ygSg8qoMPR4LwQt1rzw8RLk2wuZdyK56GbmN4KueUX7SSP5ZQK3andkwEKe8Y8smKeUJjpsR7f85LHHT2NXa"
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
