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
    "3T9V3MFtLFGbNQNHnHUTXVzZxQop8wvqmqZnrRf4XfPZDMw31DgVxYVTfZ2Ez2mAfdzBXCCimh727vywQCEFZfK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "snJ3AdMhXPGvep3EktzFwUmbKMsewc6ojbHxqVuKtoee2ZvGqeoDZqVkDHc5pM8GQfj5gQnWo1oMT4oyWarnFAX",
  "key1": "9QJmRSRa5x3LET51Qzsyw3LqpCEdMFMZGh8hoKSJhf2n4EHDTC78mguhgqRxdpzrsZqS7RttQz32LVjSJou16H4",
  "key2": "2Hro28Vgnp1nKid4Cf72qZvCbFevJxdy7iyce9CZ4rnh8JddBaFgLTnWo3FwVNcYXW81LX8Jhx5FBpYwYaxduCdB",
  "key3": "4pMmMnGWycauZWgJJJGSinS1HShTxFrfmuiABcQAx5w2HrhuU7jt1fWQakDQTux5rEBtF3KjKBzXYnfaJGZeEoxX",
  "key4": "2FRi1qirKuiGHS3RKWbtZeUUoE5rJ7MKVSAAbHyPSzMPBajvkXYddBXH19ugvaLxiMLJwHzFd1tKrXtsr9Y4ND5z",
  "key5": "4v8FYUQZyUr3NjAEXD6RpqPGDq8B3Hs3upRJEWnVjPXMxGsEKxvuXybEfeSY29dvoZp22qwNUrf8WAbsyhDTRjdH",
  "key6": "2RwyU2kWwdWZuvJiZCvt5A5j713FDP7DT2npoHhZLP1w5hfo2gjeVUAY1k2hKfudFFbmHYb6XQGJg4KTmFDhagc8",
  "key7": "5WsovTFyByyV4PqVPhK9arERygz5QcgvBdZ7aniNvn8Z9F3R9wbujAVF7GqE7gnHLbzMT38E7oLw8WEEZmZF3yL2",
  "key8": "455HFsV4XMierYbsAv3jFJh2jhHu4Bb7JNRakJNUvbtp1qpDdX43sh25abG1AKBeoALxjFTDv1ezPnH2c7iS3P2g",
  "key9": "2qbCDpmEy7Xzm7oXBP66CAdMxa7H1Xvfko9HW4BFFXKx56BYupQuZJQX4AwhnAFMNwSWVR2zHoG3rqTLwXLYKEFx",
  "key10": "3BVjaGr1DzCezqEqGkKyAL7TsWYs4pwbKu1W5QCg7MYMBYEgmN9Pf2bR3Nck4qV27UYQVfuV3BEhtvcL2rMtTe5G",
  "key11": "3cDRbH57ZUak9gyam7KCiFYdsNrdcMgW8HFtwQqaZvMEAM57LPPS16f8Qxd1BzGb2zyX8Ldm1i6mj7BGDbBfTNst",
  "key12": "62uB8tY5YJFf7BWdrGp5yQVC31n4RYafvuCmyYUZ5PfQv31ZBaBu3q8eZnju6CU3XAWm1MPX3XrbBSuKX1FfHESB",
  "key13": "2Rot5d85oouK6TVts8JnCdMVa6STaNg4t5tckJVoLCfs9kU1RkKapREwmpPhKCgprpjktJJmviKv3P2qchVh25uR",
  "key14": "2RoY95cXCazchqC6nbnJyR8M18eAwaJZKfPKFrCYAMLBBaptQuWd1E5ek1HrRHffe8DY2jRoUfck3tDJSYRoEjZ",
  "key15": "21bqEah1hUPpU67rnaXQ9ey3FLDPXWDWUy44euvKiuYAPMKE3wf7jWpLVAhpyfVKtSriqH7y3gu97MAjFaDnqeDe",
  "key16": "t3Gu3s4M3zqN86DSqfE3AzeWExeDgnvvfeffcGihcpWUP8PwJpKhnXC9S4wbykDwM6yBuL88Monfr93uURePddf",
  "key17": "5mK7NysdmNkhqGwhifeC8fw4HgkkWkZ31YoAxNTsAGRKnJrngSFeT89edg3LcKHadcUwTSepQz6XWFWzd2GZL27a",
  "key18": "4LEyoCMud7vFiGATNkWUZmzYdz72t6K66zZbrM6RYnauWqdXCzDY9njbmZWpEa5dpAzxDYrXUr8juHGcNB4DiJcN",
  "key19": "45gUQqpGVLx2Aja5XG8mxKMAmXsdjmYcMCCegQEdRayxxeq3b96zbHu9BApxdop4zy3FcSzqJx1JHwDucyQ6sG8h",
  "key20": "Z9fFQmtSAwsukcHfwDppmEwgbXpDN6dN1va2gi4zbGkUkEsmSLzYJydAiz1FjeB9VtSfr2LACucG2HugQUXiiZG",
  "key21": "4tKPKmEWpv1EzjPV6Vd8EHTrpWw66RQzf1poXkqtZNwGojGFYV8sVEkgLrXucBwufhQ5NFS5LWBTt3SUCGKF725a",
  "key22": "4wUXFH5WdrhQay1BAtoXCSMKJvUitCrwi9ngYPYPkK7HQHLcN1dmuDkMpQhFZubHEyzPQNFJTyvmJ8WgCXuXcQoW",
  "key23": "213FpUDREVbLLKkdFJ16sJUN3KCnmjufRPdA2mVpYraKsvakbjnLnSmd3LxTEvuvSve8o72aRRotGGcdP1jJfTDj",
  "key24": "3sndSECnZkSfzw58PM4TdhMSqX3yLXSGphCafnYWidSWLQMYofX4T3KMUjMecBDi5YDisR7svrQjG2KiMWJCDkww",
  "key25": "3CWXZMU5hsf4MN36KovspgkXTZsPvrdSUUih95wizbmCwPKrCBKA37qagwRk8JRDPqmV8H6dSYjZA9hgXpDoRU5M"
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
