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
    "28wuF7PLEzkKCrGQjxJvPQa7wxrZwmhgokayWSR42RzvjgK4AhB1dYBZ9F8ivJbNc98pCoT7EVuwcpwiW3nG7nzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EeYDazeSxXNAziDyb6iyZBh2iUMzKo3AZMUqXyreCu2rjKqbLtQX2kVahCPgcHqoTLUft9oMejRV225641wF3gp",
  "key1": "3NRWLxKH9hEX7UQhpFeU9w59b2WZLiAhUqsSaUzcCKZUNnrYdJJMtEFsdwsemCYsJ1MDkiax8YeVLS6yHpLgJ5LS",
  "key2": "5f7pXxx5tiYwmzYdsJsNkU31bd1MwePyuHLWhxCAbYpJL8UVJnF9B6Hz6DGvMbAemC7vSySUf9si9R5joHkVzEzy",
  "key3": "2KFBfQz3jb5zfkhYaSeF97tsQJPAdNaQjxrD5bvs6twwfnQPuWRijSbKNzjW5UGhuj5uRdpUvBwBtPkcCcnM8ZFf",
  "key4": "3fXNBmDCipWroNBHzKNWJHWavgNPT5Ex3ZQBead5cGukeBA8pqR3fvo4yzwdr6z5iUNmH6SsK4UuBSmHRYuc5Kg6",
  "key5": "xJSxnhDscs84Zu346aL9uNYKiLZUmyLV8c6JLfmgCBLXGAG62QuVrT8g6iKzZPV23nyWSZRmQofXwpKP9i3DtA4",
  "key6": "4SbfeFXyMVkXNeA3KvC6sdLxJpUTec1Zkvt7AEciDAhZ891mpo6FrrCenN7F8AzzsL1x8yjURV3qZXbhHh7TYb6G",
  "key7": "3Lrdfkv8y3Qsc3GKyfxyyvuAoj2nQX36NCK4XS2YDGdtLMu21uE5tbkNMWterPnHbSKhyocEEiEHiE3znr8zy96S",
  "key8": "2KbVU8p9xYv56u2udf78QoNuAUNM7hHwnJLx38GjTW4VH6Dv1nV51NwYwrkRvX69tzvbnzzyoMW4cocyCVhPcK4z",
  "key9": "3VBaLcsXParwpDpP8ydCTS24WK3idBCjSyJsa8VVw18MLLYPgDwqunk5eZxEuSG2ZHjonBG1TXZfVZyhhndKymLU",
  "key10": "2tmz27oNQeXxZ6Ud9z445VvHqpwsqTARbkZH79W2yNsG1qi5b4GjcjmqrWHfJA8sPmUkDDgN7d5d3BDvkqG26k6c",
  "key11": "36ZqZLKwGTYXh5eLSMJpaBddVVRDYvBJkECNiTEQtTLGZWHLtukTCeyuYTfjTh22xuMzxtoxtbafvP9XZ1Tm3Zm5",
  "key12": "3jahfTBi5c34NoSfeoXHG97AymNVCHLhx2WAtGYPoiBMcjsJ7tmGuKMgRZmWuv8ycHT79sw6r1X1M2xAtSFJVb3q",
  "key13": "5hJ8GxuAwMX5YqKwhCJqnepX6VwQKKSm6pZSNydedUrzeRTbdGKRNArQ2ZTGhNb5773WQCQnRHWXE7WVjubcuCpX",
  "key14": "3xjqAy612TJK8ZvMXSXPpb1huaGyCJUjRGGQfNsMXUzv86VPWKfRj1vvomeCJQHGbNhxNaNsmUBU4FEHaBqVmfJA",
  "key15": "5iz3mQgTZQqo1w3fdFTyQksXRkAEKM3FKRTXMg1JwtKQnr9DGLVWp6n5QHKhWFG16DJhYjETqjZu7dWGFYazxsDe",
  "key16": "A2EwrXsd26WCf82QwSFH18Xvhvw6SrWYtUNXS6e4y4p9SLnWKfQV55wQpHEMyvxhdR1mVa2HrBuNK2uAZmdTZBN",
  "key17": "3DJmBvaT3KZoXXtrbLZD3A6Ynr98iWXaEkTKtQCDv4nW6LeMqPWcHtw3wXSZNzGV7ijZVowMzZSbqET9qWdwtmnw",
  "key18": "4raKXRhJvp9Gfmo8DtvVzYyf8Mj2UJSFxt5TFJXPH2q1jo7mkE7NC4TUEbvuzhwJruSUwoVwANGMQrda1YPfsKVw",
  "key19": "2SASqvxHbw4ASgGGTSgKqzb2AFitzbeyDudzq7uFXig2wY6XJw9DR74jtF2DxXaeq6TrtBqysdixAqnQ7Xx4jPWY",
  "key20": "4SyHJNjRzxrfw6GeCezuLh7oy56tgEL8rL3kTTHLAPMUpMwzj5Z1y6Z3YQrYnwrRNbD3GmUAj44hSP4BktPXMUXh",
  "key21": "3USrExSSpCuTFNL9sqYBjXgGddUKAPczFWcRukW73KzVRM7hLcNu2KLniMVh3Ds5WfYL8ZaiqsdykAtUatPZgP1z",
  "key22": "3hqrGL77GRLKef7MgDBa2BjuC2rh6fxNN6khLnVoEubU3v2wzxntEFp2NqfKL1reZWhuUfLefevZ3tehWybCW1HX",
  "key23": "5ug7txL8SmXBFHKwNTZbo9xiUay5d3NgSFiboLB2tfRsjQornjxnfKsnW5GhHihuQqewnuiSYzJJHjh17GjG8BLn",
  "key24": "6ay88fxwX7VmsYLVkuvt7Jdcch2ep677jvEvuVAuV9ry6oL6TCroK7Qso6cnJCLgryZAoqJnRJTLgaGna95nUJ1",
  "key25": "2oYv6prC5qjrLfGkdbsDJyPtiem3REDuq8PhjZYJwp9V8PmUvwgBvSxH6fcLF5zJxVNfLFmhrjhXi4wCGr4Gvkj6",
  "key26": "5wqwSeSsWmM9ut8HXT5p6TgeiaVmxYcupPJ2oea5Nfv1CE86PLV2rVkMuXSE4TTtGhajiYCbzpCEHGs3xe8AooTJ",
  "key27": "bSTyiV2nbwTLruGjurcLZL15X6dJfrUEywLn23RvGdwTBmGqw9dgFdMvWCjtMLZdqyWadqivLTLxvpLa5ykMwox",
  "key28": "3vqfYJLT3Uo4nDdekLx9XDnqDAzxtYoBtBKLAgoMZB8EBTdRbK1SBmWUJVXHr9VbSmdCcnvRY9ajkxGixiJXZPFi",
  "key29": "4NkLL5ZsNAT67wXMj6Q1Y4z782NfKTQeTbnJXYKVzkWS9miBN4fqr8B9pEZhCpRbBGNk1NsJuhSSMwxsYN1jDFSR",
  "key30": "4wTvGQ58DHv4Vc8zemKY2TbBbqYY5u5rXiHZbyRbwoJpr8G7snK2H5rZH9wTebJZ6K4UswRX3HmiQgCXbNdYMGrU",
  "key31": "4nofUhUAujYWFWN4LenVmpEC4R9JpsQBgpptMxUWW1JMBnBHVBhmX67JfViNE8rQMMftgSpjHSj9WF9P59F7VFLy",
  "key32": "2s4FKLbpnxgmp5s76kfLgtVumhig4VJZ3oURWTDtezXmfhK5FZskrEoSmvGZSNT2pzkBta1oVKy3oLkTZo12N1G6",
  "key33": "3bgUWq6VKqnav5pK9b5Wd1K2XD31uU5osL5JtghcXuGn4uCRtF8gpqDMipbhMfiWkzy82He3BqxDFNsbTmuqsN2W",
  "key34": "5aEeA44LNBPxqDBbZX3qWD5HsFaayFB7aNvf6TMzwRWaqiMhWtaLzB2AyxaUj4C6rf4bXTrLPFvPvnCSKB8WQ9j5",
  "key35": "4cmVwCYLMwnm9P81wsHh36epQW7Biur8v6RUqdy1QbNd9vdfmkzmKRNbD48dncAMn8b1Aq862QpVkCxTpL2ieaJy"
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
