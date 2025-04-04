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
    "5DgmUhPZcfiEdvrUAwLJcXT1Q7SjhRVdrSENMW6YoJeZkdL7Bc65zytp7JJrZU7BRbwtu6JtdRhgVhFy7y4FEZkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPXa5Vr9pUiHKzns9es4df23F7Zagy44MDkqLpM3uBXWZrdMrkzsofwoSPyqSoF2SPUzJJs5VhQGoH1cMC5jAM5",
  "key1": "5QPCwtDrxQ7q5WSqfuVdmU5dStFMZbyfcTF15VqnGLM4cbQAXbbayoNQbryAwSTFg64wBRENKSs2JXXagpFpe13K",
  "key2": "4vD2ZQnZamZYQcMVbiRATeZ5ohC2HWZPwQFU9ZPig2GA95rRyu84JsFcGBL6CmSZtjXZ9oMqrJrV77etWg488msC",
  "key3": "4Dn7K72zsNBddM26NinQaoUiW887vJGiyAwEXran9wDVAh891KG3xBbePaBeiWsxRokByCb7gHa67QbhFBUhFShc",
  "key4": "4jEiD7baH2zHqkWGTwjhfSi3gSUZi3kF5KNC5vLv6n9ocjq49VYCNYuVBLdztGLHt6jWRsttWXKnJeHAxs17SPss",
  "key5": "5T3e2Nu6ZgnCvjRiSi14fxZPfzd8ndns1X9EwAWxTrgt8Mhws4GVji9QuLiDypKGS9sN4iQi9oymZH3qPRumzJ16",
  "key6": "4t7aAbTSo3eH2kiXBddWs3CxhLo641Nh6B6VX5toZxU6ow5QgEygig8g8udbniFNyMjFnopCwMaACpoH74tFBrtR",
  "key7": "4c98mUqpkszV7Xy82YpLBdP3y6DBFBfpukqWmUtqbvckuwYFeyF7utNqswiPQEG8F5UPDGCpsT13mSVcqSrSBDqL",
  "key8": "zYAw8c2CkqBBLzL9zQtUJ32ZuPUererDaFuuuxWmyB6PTxxJCzejY2gNL4aUxRtSoSNSgSjMCutXHXkRg4Ngadu",
  "key9": "4r1bLNaNbnVtDRDZhcoUoyEUpJA2My3DyZj4wYcjRZLEB1CveqtvkiTh1sQp1gMspsx1R7iEsZAZWdqzR1J8jm3",
  "key10": "2JiBJi5ZThMXa89m9La4RTJjNufkG7jPYDjgio9w4wAugUpMmegM7LAoLRYrZXcjRcSvQDd2Sasg5cywhTgLqTbN",
  "key11": "5u2tp9DNfriw6VCbMakpfWdJPxW4ygivbRb2T5y8W4QVnUfzNPs4EfetLzegqf7rSF6sQYs8t4fQeqmQKYGfv1m7",
  "key12": "2PpeTram8GjRGE25VYBYMXzMifxtojk5HKwdBvBjCG2C98pnu3QbJJZTAKdy9YMFC6AgkGKq5LsqRLHaMDqNVEon",
  "key13": "W2Ue3gG8FmtDcr2veGDWRzYUnbANLYWrpFTykae5PPC266txFHZ33ovJ5C21ryUfT3b8J9g8BSpGN8jjygSyXs2",
  "key14": "PpHxx9pLQ5ALm3RLCoYKiCXPjBfcH1ifUHaCKwnJsD8XJSbMmbGBWMAyYARRffYgHEbtxuftXAoP6v4RXg6nxFe",
  "key15": "4gRsCThodE3FYtrgZ2otSJGatuxDpwG9fuRKMdrRTSmHcTayzqULq8SDbgB4b4LQNLQaRLHCTz1LMt4eurf2DrJj",
  "key16": "5Eff7mfRjr8YEBn89iAVQEaMEbGW4TxCxSXZMHZStHikxA3XbQQX8fBAQF9D5ps4S8mfDJxFJCoGNTgLQ52TRwsp",
  "key17": "3Tb5QzHmKQxcSkvNy8q7wVKYX29JgJM14Dch9tUqjGoeM6h6G3u7kHXJYJNVmThppdmVukCnEf9Q1JrWSsTfv62P",
  "key18": "3iatXHFJwkT43p5Yc9NKztRdVLyKySyiAPg9xGKAPv5HP1hu14cuseoCmnPqZL34VbuaQg1ggu8vTCY1xMgtM34",
  "key19": "51ZgTBypDdyPRpwhWJvUkkSfPfLRTLnHa72dMN7B9bL6h6SoqbhGYjQhGjxpkuCJAzyTW2e4HaystFywFE2yU6nx",
  "key20": "5sibvWs96Re3dEEpKUD1UjMbBT61JRBav7qt7LnjpAx5GgmmKhdjhPmp9r9kWtyoVuE33BhvMJbjkc5fjmFWW8Fp",
  "key21": "2dg2tHKtHADNxkLV9AanV2M5jU4EX3qqacZzk6P1RPSzWgpuqp6KFQmhmsMALrFvQpa7cQMCU3dg8Ad1tJPAozfH",
  "key22": "5a2jvPZmqBxRBzjzZskSq7WdVL9B1fbG93gAX11X3SCfUHbsKFiVyRJYzyBhdeogmaqfEiMXWrJuumWgxyVt674E",
  "key23": "62jRhiHyWqJWGDPJ3ATsFo4RgoUo8C3U5KsPtEKMSdvA9jXpHfkN1TCPe4jeRMxNoYqsxpmr81vEVvEC1z22eBbD",
  "key24": "Nw2rezQTvc6H5DjYpN3WUdMLJpwKQvDBeNYyeaKc6HbP95TF874WDvF546oprqBGD2tr9f8YCWDsL3Yhak4QeX7",
  "key25": "5EeMJ9Wb3aXBk887H5eD9a6U5k1bh862fpGjjcea2Nd87Go1gs2YKEHQzh5n2BLbNQi7AWf5HdcNE1MDiguQ6k7Q",
  "key26": "4Pk8y1fxw77QcbiMeDw16bFd1ZNEA3j29tD5HGA61jNsihqvqiGwPxq8tPALjdTREK7QbTusnBZeZRfTbsp3KEhi",
  "key27": "2np7PwMv56atf3EYa845tiEu3KFQnrUr5EPvR3jB1vA6Lw4qMWrMPJ77qq53qqjTZ27j9TtximZbx36qpNdDoCoP",
  "key28": "4kfhGj6h9xYXeTU4MvMLQsVrejLdDDkuMbQkNJC5Wh2ZhThEioBRkcijffXK1JrkJW6X9o71JoNk4vUwCcREPCoU",
  "key29": "pzLt8spZUrRGzAbC7nb9xnzGsEDTPyu12HthTJZEPZ3ioh2g2ZkGi3npQ79bWR1bzo48nN3MNXLHQPf2LEsUc3m",
  "key30": "4zN2DfjqXwTkkoGMVftvy5qyvffNRoSBhuvk6vV4Dxiiq1gjMZPfF9P7FiE9D14t9fUa6URhBpupEeUa3JL9LvNp",
  "key31": "4aqCKy177ibZ5aNCR8FREYu3DiEi7nF1bqEbhggHLAGvk7ccUny6jRyS7Vvk8XVuc5PndPLryQTS9jtXAM2RdDcb",
  "key32": "2aM158qLKVepLJzdjp3qxvoYGDaSqDYL1UBhtvgMJuMB6ZADBLSQd1Y2WHG41JuqSXoAT1YTLzcAuxRpiYLuKnE8",
  "key33": "5bXNmXBanfC8SZgKodiu2Re4edx27mhN73vTD9Tam8D1tgicEnvTCGAWNrzPihueMCStAzcnbqELfm5C7U1TPm2o",
  "key34": "4S946km7iebvcAf2UMhLdiVfnH3nhQYCeigTGQDfWmrrZ8Rwj98oHmM5BhZoTMxPqRhKfzJuFwF7Ht8EAWcRB6ur",
  "key35": "4N28fqHQA5npHjcA9XaKtLQu4B3UmLTcWFw59vwyevGrdexP1KQsQbP1sdgRFHsHa1qHfctSrNqumo6vvqn6G33w",
  "key36": "61kyNKS7QsndjMRfcB9LGaQ8bC3kHsi2qQKmhy2ESUcYAGw2NFS4UHtbqcmJwSoX87emKbxw7m9z6wKWbxJimutA",
  "key37": "KXWCEQitiGCek1qNfdgRUcNVJrrpiraCo4JtFrvwPWQmHAtQF2ydqAEDrgHQaVRQ5JUh1iZKHptsgD3ATXTABTj",
  "key38": "2Q3UY8mbzBKtwKXaAJjtYqYsiUEfeFgrJPwBNbzv1Eozcgt8xUz7jTA578SNxTYN5qk2GAS9NmmQFt6NPNGgrmsL",
  "key39": "5Sy7AgQ25rMQPkbQEb7tJwJD3RKCMjdpTYBwrH5U2mzmeiqz1xvHCb9qrnKD1iHfMNrWgEuJ9bnamyMTHio8aZzj",
  "key40": "2XJL4sprrFcphXTDZ7upBBPRVosFautodUCRki8nN4ggHXDUQUo7krGzT4cffyEu6VAVHPiMjwSkqYywvLExPGtL",
  "key41": "3QyrEeFKywDyr8oTFE8iTj9y8rqjFRN5WmJ6w81yHJWUxnJMMvniELe7DHT25MKS6i6iH3kqKVtPdzBTjaux7Z5x",
  "key42": "4mmuNqMqXYLKTQS5sdJoczw8eZvGxDuT8rXZg5YkCp3KSEa2LUAoTTGv69Zid2ATsnTrJqhgvdnUH7FjgyHcmot3"
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
