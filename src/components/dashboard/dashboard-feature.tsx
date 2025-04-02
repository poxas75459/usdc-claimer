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
    "khZrhMgC3RU8A5rHie7NPsYr9vzotsEV37gmabNGzHaSZv3EbcT9sLidCJUeEKypzzhEsMywnUHGSoBJpZN6p3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Fzo5qXKBxBXhRhRp6eHpWaAqmoPmjAv9LA1hFksNU43m9gh9xbAHnFHcgeRk5Q2YSFn1dCPTMG3HrkrLrfWndV",
  "key1": "5mEhGaZtxpeqnryvoLxRyDWMs8351meWDZeLXERis8KdvEj4u5hTZ1d6pSV1Pct6axMhZuCvqWNjVvMnJp2EW5s8",
  "key2": "2cs1MFzUsiKup9uKVzjna5s1iwEtJE8Uyd5jhroAi375eYc8J6uvqt7RTPTgkXGprzkBNF5tmg67GMNCcxSa7ibj",
  "key3": "2XmYRdSH9KqKTfQ8Npb21Lb94dvgabi5txsK8T2tKWiBrxdEAPg9w4NtGuKAqZzLvnTf7A37YBQn5ydMCqH8r8h5",
  "key4": "GYGmW3jCoJKFq1efMNfgfTnnGyapHU2u7jEGcqNjkhY9rrpjCfGSA9uGifzcAGt8orGe44YcmMtqoqpBFdXJK8R",
  "key5": "61oBMA5CXTcr666WC2pq7EkhkMVJDiZotgNnV76yEWWAumF8mArGm8ypHtV6BE3W4Xc2FzHXC1XXjishdMJyJAmL",
  "key6": "KDiEyXveLJm5FiVVqX9YYgNFZehipVrGGcQsvfajtNEMnCzckSJMrBcrufAtUuCVEKn1j7vmK98w1tTNTuxzUEa",
  "key7": "4RHC4kCSHk3dgqGkPf2APzpvddbfvsufb3WzvsK3sqAbPNWq7YLF7jLMQNoVQnrFMpXu7auVHJ5Uk9N1wD6UtW6G",
  "key8": "5ewgb9AiVK8FZfX6dC3867uFfc1PezhHQVCuvdRqEsg63jUe7qA3pLBA9wVn6bn1T7HTafcNidwS8bYBURPbhcz8",
  "key9": "65tVgZEBinHje44b2mbAw3iuoh4am7fcKZago4SRjzTktUS8Qffr7cGYWJWHpnvLSEDwws5sjfFf8uYX2jRiaA7w",
  "key10": "325xbRp7WF3GzhuMe3K9W1MW7NP12Vp1QqbKkCnL4VLhPmUKRX6DcfUioLDqfNT8t67N7yrYhjZNjLPpNXFjxtCj",
  "key11": "4TefcNG13RSGpeypCTbUbTMpNmahrpruS5E6boecqZskYSQwr9wuZC74eHEPJqyEdiNhcQ62WVWxUJ4nLdWJjA1t",
  "key12": "4mn5dETBvtUr6toe222WGDnZNU9YXdYUMGgaFY6C8wD61r4VVXX4KrbtUVNQR5uFHHTfMDmWDU79cTKBNjkzZrHH",
  "key13": "2qragH3NUgJ1Yp1tjXTDPzWSG8wxZdQxtQujoaybfev2mzdkfhXfPBUk17PmJhb1yoWJvzGdVn6ds5yJfhh65JHU",
  "key14": "3hs3adVqz8jXi51nCyb73uqGmYaWEPWc7Zxq77YRHhSX73rKuUsmp4dRxqZoZA2JMgeAqwMob8QLLkAozw1F2Bnw",
  "key15": "5ybByRqvfKpQrddNYKBDuU894VB3jzR9gWBSuYoirmXydCAxsjK7jqnCNpcdAo8BCTncF3LLRXE4NinJVUFxea8Y",
  "key16": "62zgzaUgtWEpB4776QrmL5R2SHM36fiYALoQwQMCrDSCA5g5aLdNT8j82cLJvWwK7Kn8rtcEu5SYjgGPiXthRHGL",
  "key17": "2ZW7tBq4PmDfj6sFFrqkCiNLbLQdPqnaQkBdGXgrg3yfRxzaR63fNRk9nBWbvxi6xDugNt3H5SQhxwtTipCfrfTc",
  "key18": "3apJZP9J5bvNxZot5gQrcfwinBqqFf5wWMFwJmEd8oKWHBisurfDgBY2vnXRmXwvEUKH1d5RMXRixQ5qxpnrvyrW",
  "key19": "5Q9W74jT9tkgVSUUXUjbdBUKbTHh7eqy4HBrkbxkaf1brT6679NtgggdSwky8Jgrzn9i7hUGgCzJoApY9VwKmSMT",
  "key20": "QAB3cvNb24C8jbx4jJK1xQm2ruao3iw3erm2RqRdQCo1pokVUcqDnNeQRPRt5optrHbvKUp2DPgaCoW9DvwBSpd",
  "key21": "2itBmpXrJLTvvcEWoWP8M24sMhh1AQxuFGyGttcQqW3j8xko9qwL4LZAzmCrqwRWdaLeV2md52on5tmuvAfPHXto",
  "key22": "2nQUpV3XCCaXGkY62GKs7c5p13fkaj2FuoAG2jijVzsNVkiorq22oeHEyguh9sHk49btSYUwGGvMBvTJFLbTwmmM",
  "key23": "5qGGj861kD2kP7MdGnudrBEjLNVmb2fCmd2VG4NGa7aZGQLo3yk7UYeQd1NaGJYxxfDXyqaitXoL5RsrekDtvvBq",
  "key24": "63wEpw6MhfxucyYpGyhF9SEsYhkUNhM5pCfkmqX2juH1ydF1X4dEsvvoTCwHCT5pbmi7ABhwiGu2sDYF2XpZone1",
  "key25": "3SnCEEm3MQTG4zLHHhVA2ws74KQbBWDWHRb8SZb2jVmHS2H2QGBu94L9GmE7Aq2yFbyfnrNu7EfNBkMY4wuPiBhz",
  "key26": "2sUcTPZRxL6uWGdNsBj4bd3my5JteYbyUQ2GyCAhZ5pwgkuRksa6zFRkJ1Rxkk2GGd1RJXVrCiSHd7XPZEzm5gB8",
  "key27": "3zQvnvr4uega9HbyVB8chNJajPVNrc7uxZY97AghFd6mrVaukB4gnwEncn2J9mRLmhDck5PeFJDtA9N4tRzzb8zV"
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
