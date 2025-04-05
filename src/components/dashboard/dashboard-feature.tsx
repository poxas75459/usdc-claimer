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
    "PLhdiYXBHnWs5GcXeZgP5LMvwV7vNSnHGcZs7t63Mwt7ag6SkBfy6XWuZDqvbdKH2jxNYozGU2VP496YCBg389q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXR9se9NrMdvupZ2Ec8WAcwN5CEN7BNUBS6ShooRxT7zdBPpmNS3fVLX2Azyc2wdoPjGJEvzu8v3GACejAbqmGC",
  "key1": "39xwWzDPk1ehmwCjJqn14thGzAY4GcWgJ2LjGcvozQahhrrmibJXfCueveYNYDHkCfrJb3TKYt23QZmdAffoA5DG",
  "key2": "4YaxdDFavZ7VGNHaQgpKR1X9iJpuxyE6Yz8oC77mnrWnQKGimoXageNi8zam1ZZUEc44Jcy2XhzLf3Ps84KKbzqz",
  "key3": "27FRMXWoricjuHLsAgq58X7ixMehKqo3XsVnVPFqnbpwSWvJWFPQmisvryAX9xEbozJVihoBzXP3E7jwbY7N7VTC",
  "key4": "37NZqyw75hhQuVj32vzMVE9817Q26myzCDnRgBmKGkhAJiApVDGVWvtkLk61xMcyxfu2uWDyM1Y5drqdrhnxEf14",
  "key5": "VUuKZRybQvsMmXQWFHQAWMzM1M8mMka5q1kBX1xDJfBE3Rke2SaL1XQS3P4V8qd7ckF8DSk41NHKQVKmv3z1xnv",
  "key6": "44HCWYWecjdcLppGVaWad1TsJK5Nj2pG73WPaUTdk66DMg4U7BwHTeZdyX9UqJTSZLBETaJVkt8YWPBhHs6KQsPp",
  "key7": "3nwXqPAuNpw5okYVKd4Xo9WdZdGy5fc6qDMFBitivBBeAScLJ8pvmv6NL75UN4zwtNzwHHxn6sVQ6twgNSgou6kc",
  "key8": "4ZG1tiMbAZg1sDaGAMnmJERCzoHZEm2w9sWX8vAt6QwV4PRJUy1gAtjJah3PEruYstCc6dwvqNbj5BY716yQaz58",
  "key9": "5qwv8XuuKKBRJUTnGnijhTz8ACAx7e1HMnkpG3j9sbvq2akMDkA8myFLMTmvPXwA2SHwonXE7LzkbBuBc4kvHdxu",
  "key10": "58vVUd4tZokw8FGKRZhcZ791vMBcG4HCSyuKp5Xcx8EXKh2gmYTHXbF2GdGMrRKzqUgi4B5uJoo3hN6xjAyuXmKp",
  "key11": "3CsQDQ6whocFfYQcMPQ1qTpCbv3RpB6xK1hvV1BS3yz6QJsDzu9A8imRzrjw5pn5qbhaVeu8sufCi54Br3F88d6T",
  "key12": "4oMac9S3yu26gG2T1FFGFQbS3Zo47sZg7WAaUVMSrv6NYHmZLPMd2qsjVYxeboTZmT8RjBiNVpuAGXqPizoYqNH2",
  "key13": "ANG4Gr69pGMFvUshrqgyq6tinZigzBghLvimsmzqmVziLEk4HQp7X3h5k69vSDzAzdLr5nzZwqTBn7NM6qWAwxG",
  "key14": "4SCydCykEdDuU2CyjYVzm5Wqi8TziaUq98ukVGPUgS3VdrTzpUffNZ4rVJGwDq2jXo8evc7kLrGRuB5R8siB2MoJ",
  "key15": "4De5gXhkfc8EAJV3g6cvJDUsWmi1kZQ9gfYCh8Z1KxNLbU9rnVV2BccWoHJB4gHnGC5qqnVPGzr7qk3YsBcpMX5P",
  "key16": "2LVd37pLKZdt5LkLh8UyBtjsBjJt6mW14iDDQmbGWD8ufZxXPyAsTchxmQ2EY3T8jMLvfZQt4QsPRRhCCb4mLsGL",
  "key17": "5K215Rg5NUe3PdmpmjXRD96JLVr5kCF47PWcaqa9Mb2GvAKPUos3qBjnHM8QJz7GJ6h3aVh1jzBvy4b3aQAbgT26",
  "key18": "5uVcbzUi3oWtdudcJUc4z7cvqRSuUSToFdAwXbbT2tepRrmxbn4Dj3fa6w2Hg8MCrJ4ADjBnBDXLhXqc39hQ1pD6",
  "key19": "kEuyomB9kM6yHSFJ4hSh6wTQcx7DGDRDXTbsHWaRGZNPKKy84V4YiqXay3Yb3cnfuWyRt7nPRNUQ4B6tJVPKLNN",
  "key20": "3sY1aqzqgYFGhgQWaGzdrUi6iin1znZSCk7ttLrAbBqXtBKYz1CRk8ZVaHbvLQUcWuzibGGhPwVXRRqA6X9jYi2E",
  "key21": "2wVTLjCBHJRARo5bF5LxQcbqiKfsot6EdNyjEtSgNCtpV7BkWRcCfSYUdqpbSayC88SMhPv4fWsVvHZKhkuPh44e",
  "key22": "2mS7dTG5iR9XJbPeqvj5eJAdFbvevpXRiq8Q5Jc2nipwmNZrXRXcRcwXRzvEuC4HHjxdT88U95AauGVuHNs4aLLt",
  "key23": "5ZUhCyqHXRjQcZgCVYVahjx9CzjdYo9oH7Ea6rSqV46M7oy74HB5JFfgSB1RTqudAJ2abeUPyvsPCLp9Q6ZA5Jg8",
  "key24": "3DwCPfuEzMA83opzxTLtvK7FNbcDAzzVaAjQmUqdxqSuNMYnUJFs4RCZ7cEjg78qdTtbWEKcrBaKeuKwyvyC3jEL",
  "key25": "5irsLus1dUr1utZZtqZMYTv81o2zGjQCMcvNK7ghw9XGXXs5Pjus5Uk6fW9zc3uy6yZnvLQEdkbTfkfGfXktEnBr",
  "key26": "2HkeHQGGjRbPV8B6o8XnTdArpMCWUzdADLMddbQjaCVLaDDh8s4QS8BpuT9XFRKgqbQQPa9xJhHJM7t47RCPfHYR",
  "key27": "3rfGbU8jG7hr8iWnqAUTnesPV2uDuCxQCtotGJzeS41K2WpUi3ogkobDDPeFpyGm2eLMLNQQDM2Mx3HTjEEjTD2C",
  "key28": "2gJjW5tBxPjpapum1nSBeDujZ9FhkcqHRrxTgG7TzfBU9y3ce7toTGkzpRrroyFXvd9yYrZRBTtEDwmAx2RJxzS4",
  "key29": "fCsccaE8LvEBxTC78G6ixU7s5M6c6f7DrgyKwtcoEWCRhcH7NrCvybdSEZKKEAAY4H7Hz5mvqB9X22G6REfEhpu",
  "key30": "x1MXkemwaR33gj6rVoxx9KGVy97AjX78K9QUtcXQ4oDjHLWJUNx2jL141fFFvtdouywY88oqk84gLDpxM1AWb3c",
  "key31": "31xJP3bMsFiga1VvvQgi1JhQLD8h3ajmYfN6DjT42pdQE1H2xedNnCz78WGhdv6r2SFCJ6AYnAuDvnqxesNTzttw",
  "key32": "34EpF43wZVxcRnFDhtM5PCESExrhEeCDujwLrAsVtpqt4vrRDt8xy4BksedArk5yRWRxBm44JvZPmsk5ihufyX21",
  "key33": "5CVTSJ8eUG5wSx5zkBA7ScC67zdRxD3TUHcgdbqwDCZoHC3TFdCWbi8iv56BeGyAJJGj2QDiRsAcKGr5vMdBZSdv",
  "key34": "nh7R4hU1oAYV2TeRzKwdmpDzHFhrmEDTxFFstmfF5ZrF7LBWYyXPDbxgqGWeLa6K5pDt8wycQqa5tcESDmvxJZF",
  "key35": "5SRCyYdCxiizetwG1LttiHki91PJT3Zq7ghBwU2gHbkdcDbmJo7gvdtKqgCFqTeUc6JExjQezFkkz4XePMaactZ7",
  "key36": "5AzhkeABUtB2c9FBugVbugAbM4EfjfthRrdZP921tbiQ58iDWfA5WeauEfjJsLvhBvS4h93ckpEQ8hkAdkAmnm9E",
  "key37": "3J1Dj8epYhPUPGK5gmka6MnodQso4UDr12z5W2BgG3GRzzo1YUxvR26uyr398FPPNaAQ7tofcssEBsCNAeQJbGeK",
  "key38": "57cuSn3iiHLz2F6SSKZ2ynswrZdkp9wyngtKkm2MVsSSEoBoCV91SLnt4xVRxtAzz4Wnib7k3VJxcKsfGuVxYXTV",
  "key39": "2B7A82R6J6aMCkbSNZjvCzd989dAspiwexgigeVR5qxtWibu9YtUfux44YthPdRGcZMcdr3PLtTYBfLfXQfeYPTS"
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
