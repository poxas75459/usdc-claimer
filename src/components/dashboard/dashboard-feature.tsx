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
    "5dmpSJzpYBPwsWzh46vLUKZGQzZfNF8nxMUX7EKmWMfVZhPNbkVE3rumgRGzbmNVkFDm6CjqPpWFRwazp2AcW1WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHfJh6v9K4qRm5L9Ac6epc3GSsLTQLqsp8TGNLTyzTjT2uBjvAe3twWDMUb8L9DDyDLGrWeexjfvSa6dyzsAqPQ",
  "key1": "2ws5DdLe15EuhepfztsmuooSyqftg9aWB2tLEezauTKsjmxLz1yiKwei1w2JHLQGgeW2hJAoMnReaJKhzJzJTTCC",
  "key2": "iKoSh8sUuiQzpSWrui3tkEHA8QNJJjkDzgwy6E78sfzJQmM1ndup6vHx4hNvEQK9mUAwP3dimGxciHAaaZrrbFC",
  "key3": "32t4RDur1zopoApGac6k95oaLrbnrDwv8KiTGkm3Zk5MdqrhZA3nMyZKmPHPe1onr3wuyrDAyNoP6mufgeSHEgV",
  "key4": "5f3KiC9ygMnWaszwKikGQNq96uNFAKiFECysedMKAZ5bLSjAtQZgqnfkSJg58tbsLMSEcyXSQg4rH98XBK6tJGM5",
  "key5": "5D1EBD6hfApJwekWcaGafTrU14Ypb2KNoqs6Ln2BDaVzu3hXKqsjduuqEhTGefdW9qW4menMyAX9wAsNpJR2jh84",
  "key6": "3Aqk3pK3RU4q8ugghzV8wCh2ndwxfSAJr9kWLMWnwoyvoWSiafjQJDk45YCVBX9mrtEYFABoaXYSidhTxUWB5FBP",
  "key7": "5J35sPTzPHbaPqhjDLMkL1mwoPFXPRtky7DFVvV8RNukFjbq9QQ8dSKtKNbkte2tT92ikXiav29JtDDtjYyGGzBd",
  "key8": "5f7x36ZAj7xKsvhpkYTCnCqsAYfq55qpxGR3gYwkteva9Doan5nhkApgMu5hykBZeTcDtojnThWdeb9i2CotDkSZ",
  "key9": "5ZyG9MXCpumf2uAcHMKhQLCufuHziGw4J46c851W1aegT42S3hEPLLyvUnxXyEaaRtdSHCR8kLgoMbrRjBYvaED",
  "key10": "3CdTkMPJEvdQf1UhweTJ7No7e74x6HoBMm3ZjwAEyzSjJFdvkDw1DB1Eex6dNGJdjFnDhSGg5fnvjmdsCBhUr3jZ",
  "key11": "2xRZp3bNApUQfsDbFvjzWSoWvzdn3RHhBBjRDe2815hkLSPJ97nCDRC7E5EQyBKk9NJvGfGmkkMt7edog3hgTjFW",
  "key12": "umxHHMDgyHt1aPbnRxfoBn1Q5bcxaWV4QTebaM5iybSYqCDNc9byYUAkFDZv946bcaqqEXJ2Hu9aWi7MxhBrChi",
  "key13": "4EUFzaVRaiPRJFvwnfykC2ozNcUp2Sto75Z1eu3gLsFmL46Y78Y39HCLAeXLrHS61Qw31R1ytPK14RYAVbh52KH5",
  "key14": "3J8AwY3JtdcdYpb3LdSkw4nKTtsn8MVtzZridHzWW1n4rEKpMpAUDD2Fupx27noio85RQo4MRniA1f9GDkj8tmac",
  "key15": "23Hq7rL9RJLu9nkXtymvPMVxk7cjdQdoEfUJEcVVtWMv4sKpvi5Qfdh6ynNX4ZYnmfwpafH1iAjQwpuG8P5MYFsK",
  "key16": "2AJfHsf2QNS5Mf2y7XEMSWHAVhyEdoPkjQKAkmxcduRpJsNJyvQBC67q5avLk7VDv6ZUyCyUFUaSn6kT2c5LQtB6",
  "key17": "2duVmATicpfhFV5yEqePHdsGoBRys3KMxgtFEnDBMbfVFsHFisBSKEqMiW1u6tdAcdYsnoaUZUywnjMfgCNZWdjS",
  "key18": "5xJ978ev3A7VUKDGAQEDwYwasiioKiaeH36kQ2xFnXvcwxp9iHbhmk42as8kkf11an9H4FkjR35ys1RoHU59HcKm",
  "key19": "221a3Wa2hSWDCYSa6MHL44ZR3rdH4wqAw9txpDTomfMDMQqidz1Ausyb8yHC6AsYdAkV7guuRWtMeDHcaPcV4rtB",
  "key20": "Ez42V54f47Cm2iwSngBv9SyMNMhtFcvzwAnkuYBzekBNv15jTgA2meVWUpfF7dLWxHQhbjFQamvw3mbAkM6Pgno",
  "key21": "2JYC48oEkCpA3XJwEMBGXMzjiXsaBq5jXWcT2LvXY6qJz4eXzVhKo8tEkDL5bbquRT1ZrNz1pFGEJnV4EUSeSL33",
  "key22": "41eTiUD5YnMFnEsjp7CZqyhjctvXbQpSZzJLVvJQDuXwvBZy6twkfVHqm87J2YhnEadSMZrq48HG73p7vcbLLjJZ",
  "key23": "4GkrH9WPMFGmT7MQQaxGGXGp3nPE8U1kc6JHshZouAoVDETsENFbsy2z1pBTGqFrXyWTyNmB3qVMTAGaPPnpEwih",
  "key24": "5V9frTarreuhvjCT45Ab1PKV4rkn8geG9J7w9EUJfbVYFTcUJ7wkZptochE5gWepDu2yKKkFwmXPfvYAkWVeHR5w",
  "key25": "37qP7s1MV8qiWe8gPh3h2S6A5pQZyJJb4q68iMAfzUfhHLZHDdgtE5kGZa6cwrF3FMRXzULVdqBwo871re2LGqsj",
  "key26": "UoLAJvMyB1Ee8UGEZxZx6SFtbm9bq4cTytVW1UBDyHSmB8rjQdGPQnf7n6KryXt9yDqFcH5jNZhD5gJwcuQmU4R",
  "key27": "2iUwGTwJfC7ku2xizq1LjY71Gbb2WYrs7DGmFqwgtSAajTkUBpeRa5abeVbpFQ7BfCMyo3xeegB62FN5jyVpYyjH",
  "key28": "2f67VwfaokapqTY3NfExWCRjky2wDjqWwaBTTcRcUeSi9eSJ4BVioLCGHA8ZnpG94MrV7fLij8JuiobVvxruuEN5",
  "key29": "2G7PsSw4tDdpfZCc2jePHhAZ4h1iLhv9tVPztD9s6351BDP6xekK6Wr6BTSiFra626SQYKK5TPinmZ6Lyb8HDKPW",
  "key30": "4mt8tEhkpmWy2GUMCikb6Kw2BCRfuECKDBqaC5hdVGrXpQerpxmkm3XxLpX9vpMLs92JFkaZaH3BQhfWQkHXHUcF",
  "key31": "479AuH1ReScc99wQoiGwTFhaB6VhLLwonxgWJuQLiBo5vkowFX8dU2rByzExhJ8fWVNkCqiFJtnbWbbyiiRridsf",
  "key32": "29PtaDcqbhFk13rzfJ1L3P6GLchEwarA6eFzSCV99Wa5shETereiCsLJmXFoftocAqHxEQpHjqtv2zJYSRKfPPrZ",
  "key33": "4zpgAxeFZshLAXnkU2HcgRoVDPV1XFpAntoyd4w6Xn7BaywzZ6mo87t2MG6EyBtXj2JqWthGqPhcLiiKYYmNoM3n",
  "key34": "3ej2vkwstmu3ULqhdE9GJ7JsmN1bm9XgAs7GfVUCNt9CNGt57LgNWFierjykndfcMviZtgH1VmAg6dmcBoob22ca",
  "key35": "Lje9UFAZRXrtq5JmHLKiCCCvsxe8nYBvpQi1i2Rks89LEYHhEMYWNbQ7CTJR4XNuAGmWVD7K1MRSUBqDEgD9aZc",
  "key36": "34fPYVRKwwnrkXM83eZdRCzzs8KMeZGAGY5UE6w96VHhseCuBUJe3v9nhHipU1SSEo3qLWHRyLKwKjfhQbyr5HAh",
  "key37": "5RkRzApgevtNYWdhUriEVEPnoZbLdSQGhLFyRZm5p8DRWHf247kB7vHt7bz1mD5Uei1E4eeZ2BWj44SgMKjUCRqs",
  "key38": "3iaZiiA7gfzww5oxumVWwkd5AQJC6xPTumydx1AuACMEZFfjiwjDzapgMGxEvW7tRpEUcuNRyhCcMjfqAvNzGXQY",
  "key39": "5gJUCRmJkw8hMPwqbYi4Gmk7KDVPrj1MkEcD2LLgirsC1rTW567c3c3tZPwuouJvgg3P1DvXbRtM63RketTRGWgZ",
  "key40": "hb813F6TuajqTGXRqGFeVrgRnWaMLP4BsJLgkNFYfY447zMTDAGgiEQS3Rd7ASXAaWeHieGfDwX8VdVmenoqYXk",
  "key41": "54g2TnRWxwdDJ7pXuREJTA5sCWnSgULjEv9XuQisZDKCBfeYKmKpqr6yhW3XBiaapiC3kkwNoKeo6btCfkqSnwuc",
  "key42": "KT1K2dcPceN6usi2FkK3UrJEVVrx1FH7bdQFjcswr95w6wzxz6gKYSYEF4UKpzGgJyNNX87wTViBxVJYDTTv68K",
  "key43": "61q6q7Y1STAbSP5vPkwTyB7PorJG9LZzzGJ1d2CTPyTxHx4YUucxwCWThArRS84YshoC79CxQuc5nuJBx8f8P9v6"
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
