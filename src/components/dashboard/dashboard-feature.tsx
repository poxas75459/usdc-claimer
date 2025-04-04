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
    "3k4MXhp3ffB4RUQoEP2WnFLpqZr2PzBPWBBV9NkcCLqogU6Sc366fNQ3ro7JAbZ9gVF78shctubeGmQX4CtwD67w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UPuwTMAaEgxbdiaMgbkaKg25ekZrXAVPTbnEo3UYo34a8WeTr2v9KunQB4u3zxvfubQQaT1QE6Q1SYG14i7tNk5",
  "key1": "uHFvyNZdw7hZFmkgXa7G3jJ5WeZQKpRHZ2qfg3cT3NQrgotKSWhrCKURU79Uy6qdtVXLqrvJoyJkWe1hWoWPbPb",
  "key2": "2iwzupZWBgFgRZn1ZhQV57Q4ox57MSf4WdxhDazwXs7vXkzwCfVcabRS1WuF8gBAdYGt1qttrocjd2WknisDupuy",
  "key3": "53ZMBjvaFYY1kdJpPKotYeJfB8ftbGVNGa4qAde76zVZH7c97qxynDk79t8S52MMatxqK9QBJ82QSsEKsRdmUDx2",
  "key4": "4yY9L4WGPkojX8nuciM7U9REWBLw569FnGKvTyvmBToUmpPY2VpsyGqvpVLoTCTQ9KVucCBZJDkUytS2N4aon5JM",
  "key5": "kUWCN1vBmXq9xrZCJDntU7eCN9jSSdHXfjeVg1D66N2zgVMSngLEj25MB1Z6JYopH8WEuPmsNnUToNHm3G89Kpq",
  "key6": "4t5pezrGY9nJU6KHEzNVSUdYkerkMZjFs9tZVsnSVrg3ciE1jj9RvDzjraJBFkNsNavDVPjS5dfZyS2wEkEwvhWm",
  "key7": "2MiRDFhXiMhcXjA5SjuaZ3bgk7dBgESyUr1DEsm7HJ2UnczjWWyfKm56xAjytUfVhyDiozkATc1zvTg12MXZzqLz",
  "key8": "4svNNP78EcA87Q1dw3nBvKaHpsGE3QXiCjrrGHemEovUzajjCBMpbHStcpHAMXt1iTPmc11pprHLJBgr2uDu4Yq5",
  "key9": "2oRDir5NAdRKrHvRhuMYEZZiAfC8xN2aEqqHAMgv4zn4kjaqL2EnzU2A1gXJShA6aCZEhmzHaHApYzRZ7USWJmxu",
  "key10": "VT8nZgK8cphK7gzXZXh2BLmp1t9UZ67TLUMKBKnTjJJFwD4fHLaCyU6P91Yw8AbcZmt2DMLoi3v9f1pUJoQgHCh",
  "key11": "2hGe2rB7NxAuro6pCJV8i9g7FJUrDPFEfmR99MmwokoJE63G6fVa993mGYnbAn7vfT3KcYazi6sk6xZabg8HuTTA",
  "key12": "5Q5Mw7T8XCZukVmnYmyvpzyRCgemCtc2DD26ZkQ1RuAVRqy129d8fheyCTXDCKmqz5VCKZcnEnu12jZhj2uYEWZ3",
  "key13": "2RvGXDQeSGD21nWAfrysekBDcVbe75LqSqSQfowSL4F2DbwFCq2uKzbziYCaJMRr4r75Aj9TGCNQ5YnqL2HGwhSf",
  "key14": "LHJrX9isXuYucPDwvDpmSYMVayUSLow5KXS2ojLWZZqKD5ivn8MD6ciXv4g2gDrJygSJWGwSMEHZ1QvuND2zgXa",
  "key15": "2CTCgW1J8zaL7BNhdtRDbUrFbFwLYzJnpHgNegakYj8aA274usBT9JBPJoq62Xi2VGGHUG2zgygkWoTygCQdV8oq",
  "key16": "6An9Rqj9rqnLmo2R72gcQkp2a1Aw52rJQsD9J8bQNvUsi3gzmqZ6bNBczgQcDWosB7fLFGyQ5U2cuL4nSxqY5EH",
  "key17": "PdbfoBwTFv96VcKa49y5vMCnVFRqNezL9Xa6NgQfbTbAo13ykjamwmKMpB86k7RFH5PjGmoR261iKTsPDSHBBWt",
  "key18": "5XcT6DckBMay5kBXBxiGu7JNU34Qarjn4r5bvNA9L4cUqftU1MZMyRyJRk52GdBYuJaCpUqpwxUM84NxNBFKuCRn",
  "key19": "4PJKAofqdPRcYkpdaNW2KS8YNUJUnjvXhf21UR2kfrFT9Yn93Nafr6M65nYajF3vNCGghajJgwims7AJBb1fH6bt",
  "key20": "2UJ1zf7NGezWGWDbWcHwdAjwv9SqC7tuyneKBfSeAjy2Z86PW1KRc7JopcmDe2JBy2C3e7xeBRQm8K898hZRtvi",
  "key21": "3feB24skBWnB5AMhfN4hT2yJzzttz8vSxaxBQDGeKhtx5dmM62MQQnp4VEZwTkvribfqcSXKk7jxyp84Q9KbcibK",
  "key22": "3gDq42jGNh8mNxcDY59dNptQj1cz8ySiubTPeo1oCNXWmgyeKveEZN3Szas1xZVLNt9FAiJmoFR1UjeavkVwiQct",
  "key23": "3RuTkWXeR3AC2y2rTyWbgApUyUL3ufTBVt5aU2L5gPu2THhFDnpV2C5Td826g7kbKY1iga7XuPBYo8hgE1eZjEak",
  "key24": "UbjcDbnWjN3VyFHmtkn6uWaQtmTvkzGc19q66B39Kdgzk3Lnj59C1KGQJqgPUTcd7JsBLjrLJBEyFVa1zuNS1Mz",
  "key25": "67KvwzndG5jBpGbhzynF2jy66JuvZVTGpLyBHgxJ5f6p4btwA9DQqpy4deBfch9d3vMCEDrB3nXAnxfVfgUHqkoJ",
  "key26": "2sdSK95xx9TemTM4CyiNkU6MfNW4v2gtaPfzCJ9QvP3VBtHPfFccYZVhHwLmf8gCe8TkuDTw1qLL6SatUYPG9pgY",
  "key27": "2VLryj6UZdhn5o3PN6mcSkNnbBd7rbPBF8qA73qtWjcoinNAX6ZWkfFJNpXiwPa9VsFy84odB5dcUC1W62mWWYMf",
  "key28": "62jqkkVfAEM4NNNx9XmetgG4gLzH4ypSG844gZewqegMVGG6k9Z44JYRi2rSPbsi7ni6rYa3qtEPQhZo9PNaSgW5",
  "key29": "3RzdWZ9ztobrKS9NLdCZTjZu3wn1AaJVkKyzHazJL4w9Fm9hVgEW2jFjrhnfxwArrGNPZsx66nM1xCm1TUPG1BYu",
  "key30": "5SgsiT7FRESoayM9B3qWrZGfdZQLuza1VuAB9uA9nQeh4f81SegY21j5icy1dKKtXAg4f1snHEHBRTkN9Emz8UBG",
  "key31": "7pXbWvZURhX7eAKN3iCr7doj2vWUj2nfTvf8m2b7CYTBSRF42pftKtvrAkWq3yJMhF5VLXriwm5KwWtLEgK3kDW",
  "key32": "Gn6mcyQdbDsPaKTSfW6VPQWxsqRjZXCfM8gJH79Rvy1fiRecCNhBzfzAeiAGzduB4hgT3dckX3DBjnfStBX32Rt",
  "key33": "5U3rzXzQPANtdX93HZQadJiWsT3qRqrrju2HW7aoVGkUzcVUsYacKPwjmfPzWUpQe5PqjvDdQo7MKC2LLsXxsboq",
  "key34": "5qvq6Svgrhd23TcBBJSoojZT4kdRabdjvjBgehAiFCgkZur593vJ8BEmFvSFg9EyRn2J4edxK3M2Bqic3GdvucLZ",
  "key35": "2vhM7WtTfrqeJU3i2bJmjHpcH56wE3ehUk3CBw95mSgEFM8JdkB8sYmNc2Z1A9fnniiHXQC3X76ucacnTZScuDvb",
  "key36": "Vn23gXH1TijZKymC6A3ZzBJ4g9eRWYy9C8zxK7g6A7og5VdmCrQLraQ12mUM9AAWWNDLrUJFaGFwBtoFToPEruy",
  "key37": "3mzKyUVWRjTHCC1iTqiEztYn76TCPdhv5cpo6XPd1YmL31e6f5zRJpNPCRR6RkPtSb2P9Wpe5wEBug7fp7c4y3Vk",
  "key38": "2RN9A25pykypTA1ubqSpgVzxR54xwPoqFJonXcJBZPzXTAaQSGzVGe7ctxAFsP6ttyXLhSc4STgape3TepNoa5cS",
  "key39": "47fkaqz9G66CWK4UPkG4hM9QPY2X52hU81zwhvuLgctshWNkr3teN3aDt8vr4qYUfHoNZw43UzxaxrUGTHdFJChV",
  "key40": "xVpZeBT85nvPEtSxJFw5qa9XRxCKqmv7nN3CgcnhjND7eJJ7pK8cWt1fwFSAxFQq8qXGYGeFtbXNTsbzQftcrBZ",
  "key41": "2R7P2x6gT3FQSEqbK35it4BhLkDExND96TUf4HyduTKBJKXXcjYHpcJm4AdUZWvQH67T6rzitxQJME8YfiePkTGx",
  "key42": "4hLD7fFLWxqEXn28bWDE41BqsqxahQveDAGv5d6NmGpHcRQoEY1gnkFgVmqeUaiKjXeFss9vWNNcidCnUbwRDg2L"
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
