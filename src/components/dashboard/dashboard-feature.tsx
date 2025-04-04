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
    "yMqvzHNGueY6GhvQiEFeHnbbpcJ9d5GFm3UUMSArsrA4Cis6rMecfjCj3FdKeMRiRxVka45BY2nu47EMen9i9wW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSVYo4QcezfKuUFmzivZSw9tZKaAGzNyomsdBoMCysYbBRnxXryPAasMM3xYREzZc72QtTbem82r8TRRpqqjncv",
  "key1": "5p77pDZdeA2DLMcN6zVziim9RfJJ6YvZCxjtTMUVSSdu4GzeYqS5JpzWrA7eo2c3FGbyvfi5owrzLyLUZJwZ96yk",
  "key2": "8nGRNMHJBsYLsnxuV8thdsboHjehThxaoKkFrhTNu6pnaacfi8V48DWeohbLrcfgeb3M1Tt5hwyuGe4X6E3qmW2",
  "key3": "4bnaNDZxmtw4PcRb6iv2NbyaxmNcWd2vPdPfRFNvTuPLENsUvVed2NH3rQQ24MEeVjfecN1ggjipCjBbCfCeRnPP",
  "key4": "2f8o6RysaUkJ984A571nUQXgSJcLXAxp8rjMhfaPvPEygfGhshCMk95dc3kYmrfXhmT98K175jnVsxhKKckqsfM3",
  "key5": "5BeYWcmUkwxkqpkmyGznotdJWMQFkstKZvTztHevu1YcVA5kQpNrWjkq9dtXz2qQJX7xtFMSR3HNEJFdENb76r8v",
  "key6": "4cShPUh3KKz2Yqup2ZHc47HRWjnvcTbqXeUB3tPu1sSeyiWL2C8yhjuXbaZdA81Y8LsA9UsiUbsC1tv2AogX37Eu",
  "key7": "5zJm6MWfAV5vG1hafhc9ESy81UGBHt3McMkgGKmBTeBhPrq4RCTBMaQtdTPQ7rsgAuyFaY8CrHaGxFfNuhohGdZH",
  "key8": "3qS9kf5VVfopPLiFTkfKBQSKAaKAuuidDrueEfU51MRBkUP2GFAizHA5zX8mWNM6YBYn9p9QyBsV6TAaeTXiKDoi",
  "key9": "2T5iM5yJYyLdbt27tG69UMmsCFkfzroqGe98mVQLZSWZaa3kKC3FgMnzzh35fS5nzxZehwce3QznwBUqjK8euaqU",
  "key10": "5qq2vrD1tcJaY1ePs3NcazrRyA9Eaejat9Hxh42TgV4v8CsxJwfq8V454KuXEJb48BYnpFFFg6vaN2VWKpDC8CQi",
  "key11": "2bb2DaZrJoJVjeg1ky5n8ajQsjdseiHcr7iXBUbWPp4pDhSDGYj4ZYLgeXPv9qd9WWUJz2cL3iKZhXzANngmxFJY",
  "key12": "3wgjP6hvLzWxZUtvWyG1x8jPZpigrHdEJDajCZKdneFsGvpmsCtPQmCecsi1vw5ZeuVzLHNatMujdJTacw2Y1UYe",
  "key13": "4H75TTZvPmrdgvYtQvbci5TPjvMBiCVciV8KvKRL4rEwqacR4dVYyXdjdD99Ur7XnREg97BgQQgJavCUeNjTCWip",
  "key14": "sqVmru5p4B2bgRQLqd6fsRDMRLkPggnW99sbewPkknupD7KzBqXRZGPXvKdfdDs7G3AiEPawskvnD8jpvFDAt4X",
  "key15": "5xEga1jrRNqW5qmBxZsas6ifpm7eMrtRuemSPuYEwCw8EQ1EG3AjjqvzGwbvXjYi8zXb4E3cKMTeGy7eM56nCiqd",
  "key16": "3FCiPdoHA3ncbhDjfDjwwKhVhjr6JpKv4pb2wjymyPPsrzyvcS7cXRcGv39TC51TnyiKkuQj6HFum9zAQna34VFx",
  "key17": "524F7oqLNAeKXUBZGp9eAUzUnREvMiFALbZzjNH96qhekmyz5vLsFs2F4DwceaC9vMMDDxriuygWvXdDAcfN1Rma",
  "key18": "425J714hwqxDCLCXLmcvF34JZtESVoFbfWDPzcTTB14QUHmA59HuTjgQS8WfXHKHxBHvpkU7dE5BNBmNSAuum8i2",
  "key19": "3g2vKkS9Ee4LgzbVmjBgfqdRPed9WDfUnZtgfYoWXJQL7999zswADz2JjHfD4qpAwEBBytoeuDb4UzCLxRmqMPjt",
  "key20": "LvqPz2zfuCCaZK5UEr1XpEuQpv9Mvac66Xdc1whZ6cGMzLWJZmDJzAmLUvFW9eHivgw1y5MAyTTQAhLkajbgTxb",
  "key21": "2P3CYoRTCxQREgvsc7D7EY4tReFkjWyNbegMNPhtDejyXkhefrUr5CW1GLwFVRLdA7ebGRiWRyd2uWEJ7NCtimrY",
  "key22": "5dXp5tiNBrFC6EvmuvLBqf4WVgAo2WRBoEqDdQao2LfheCQpzb5ZqMw9coqnPpfdmoHV9cmcdtSBWaGKwmsC36d7",
  "key23": "4AGUYSJCK5gCdn5WwRuUk2wcX3AJynXPMVrrW4KN4SpEtVZQNBjduPNnaP8PdChD8tVb1AfzDDfcb7JgYUkUG26X",
  "key24": "4jG9KPDebsCuu14HmioZMYxs8uXw8vM9xKMQTKcHH6ipLiAAi46cvYX53wMrz7eE9i4FxeEhWgzJNb3p6LjEUHch",
  "key25": "5BUSCUdnLcGja4myjwUXGs67JMNLX2HT8AaWpXfFhzj877xxkLbDGzEQqBrvEnnXBn4hWCUFHcSoUaEeY6yAigdu",
  "key26": "vGHXZzCWjU1i784qhMfPaeFb2Ao74m2itLedybY3E4sSgJTGNd3syxUY86PBCovsMUMzpvRMmwET6ssU19aBrnL",
  "key27": "5ZUsQvHdncoG9T53YbcjhjBNTt8CBWJFNzxeVbgMdF7mv87V1xW1YWV8REKDZo7FVDdsWaCC9Ld1TCCZYA3tNzaU",
  "key28": "4GXppH2DR9F3WwKQsGiRzuhkUiu6jSGBc5ZHsK2ooRx8zUC7zLsmpPRRAH1jEkvrY53P4YRxoCEkZBUktzrwANk7",
  "key29": "5hgD2zRLCdehVAhhHaQ5H5Np7zET5jNCVGChH3sBPhjJhbUZTUh2zNaFhu1MMfGsvnYRCbbFtMwzpHMSPt7b59kj",
  "key30": "5h3MZNMVKMrShr66dNYKEA3jwPkbZJnLApUFipgTqGwX73YZkxDReZ4MgKtgPGvv1AyREgDxGiqtXrUrZxHb5Ctj",
  "key31": "2J5j5uD77BJqkpXFLAVTTp7TLegoxenZ5Kyf1LJi6CpDUrqhWcpQsdr7AxM8RQzC2ke11WuXA3c88Y4uxpscJhhX",
  "key32": "4FQ1u2VLJ1C8tkTLynrdD1nH9p44D8C1hhCWTK3HWWk25BfoGpfiFySm4daYmXDRYCihDo9i6xeTPuo78jHVEntZ",
  "key33": "5b8D6GyiQf3u1dc9h45ptrRVKo4BEdzHvR5dadQV5tjhSvqg14ZoxfGX6sScq8NX8MZGPn3w6YHqUfnCGrGPDLCa",
  "key34": "533GXLihZw3d8ekrCoUSmDv4oZdi2BWDDBMwZewiQ6krvQiAQ9TiVGcnLEJd95AWFKqwgNXEyBtmMRhuYb8AtAfK",
  "key35": "5eMxp9wSkLGpqn31Y1Vu1HqTMzp29gCkCFCXcrVAXCqndkJU1CfaqEee7v9FYbBF7eaAqzF3h919hPWfadL9wkzm",
  "key36": "mEnCqYGF8hXjFFnjBa4wpw8F36Fp6wBm2hYSxaMNwqrMkw9VxEMnYRxHiYL8yonvyEMcvTgps9nwj5ZfoCQVNiy",
  "key37": "5FwPPMKHKbejon2XjqBvePoawTPVf7ss5WtPhvchu4HeaG7Mmgs24Jmy5uGT3XXwxMN9ry8mVd8atBTyJZAk6Cqo",
  "key38": "3bRbWwCcoKPrJdiD5FWmDurd3ao1mb1dgZKdecCNebJWwS3cRv3gz4Sjs3PNMMb49fuZTbjio1F9RhXxVtkbKDd4"
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
