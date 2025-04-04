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
    "4fZ8aC6EwR73VY2Z62jMo2rUotfBeCqpWyD2E6YiL6fz7GaVnWayhPEUCVr2fWoN2TbRDgPQMCufLN34tx8BUgQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kDcnzkDgfVTT8EBDXieLCbN6D4ptVYTCTsuESJ51jY7wHQ6gVWWpW8pRChphUeFPGFGHx7RDCdpzPp2vq9uLwgF",
  "key1": "31rhfp5rQvPS6E9Cuq9fa6yxb5uGwFgaMSSGqFmvcj4ptM5zZDePhJNHccfrieyD3zvgxHRGTjPuE9infaFKMnRL",
  "key2": "3ooSGyFZpkbSwg4FaRztNvVQHLKEGAX1S2j9tGftfrBzVsEwtxRLmPTNP8XJUdryAgK2ecCeHEhirTkZWLAuDmc8",
  "key3": "MCgQjc16w6G1UGA9wm9sdGtxWrFEfQ87EoUnnb7CAUenZ3irhqZPZw5xcrR7fVkkrfgNHuuucLNJ24SvwC4cZvH",
  "key4": "2K1ksqRTf6ArDG1LQ7S2KCce3ogmWSyJkccE51gG5X8z3yErbRbCWbKD1QZ752LNQooczFDnzm7ZH8jBdgDUW9Gm",
  "key5": "9V6CMRdKta7jd124RQhcBW8PokvResuz9euPAp4jcphqCKRQEfKCk7SVbdcwUTAKhneaBYJ1ri83hMd92B3s1YE",
  "key6": "5Qfd9RbaHkRPhwDDXNVPszkoykFkjMAjxaDGyprXztQGEYQMM2iiBzMorR68ysivnf53T4snngUgfAuCaQfwdcoh",
  "key7": "2KDFkt8QVyPsWVuRYYnMR6CH8aUKXWqDaXsK4SCUnh8YjM9Ecb28FKKgThSUF5xqWPkeuN3jDfT1Y1JwgzCEzQcK",
  "key8": "5iRPnQBML6fuGsu6ki59mzA7jn8cd2kaJJLweJHHtHVkbo9tfyMLPkauigPB12Z7CmJA37MLtzcyfQ2QB5ELKk1o",
  "key9": "2oBWjjuteNxWYJnsWNqYUiTsioixtfwSb2FrArAkbqLjNwP4QfGJBE2TtrBuw8jCzhL1uyyXJz8nnMK89AbXpt5b",
  "key10": "4KFinSBa4ZpDV3WdM7bnyqEafVszjuyvmJMqo8L2VkmEuCzL5Wbvxui9puakyjZTM5oThCaeM3vsdfH6stXtKoXV",
  "key11": "Tmb4Yy3aQWPuLKq4385cosmPm4FcsivrMVMYeG6jAUEb3jreDg5k1Y1LiF644snW72fiNnmpCi3P6ZcS2qntazk",
  "key12": "5FK2u6XxEKHwAHY8EArPJveaxyGikGhvrvqqbBQRCngvsDCNWwf5UrdqEZe1h5jbiGYyAZ3KhyRFZDsTkFw5iKGh",
  "key13": "3RJ74UGLWFeoRk7nsFVDKe5NTdngpHdWzkykyi9R834QNzBNfJBHKe2gmSEABjpGg4JCKNh5PLxwGi8Rno2G2dt8",
  "key14": "5i8qSesM9uyHySWz6DF7Nkj9kPFobpoTZUSvEceS26ageX1sq37cuAREQWeX632y1BkrfWUMh3eLpe14YBEAp6tV",
  "key15": "4X8dfe5LRdqdBmUyUpcycdrSFcLrhXVyFkuB8xvkSJrN2bvxfHxwdySKQj8SvDJH8ajnB6RNbZvZEhAfeepyS7KD",
  "key16": "5NeJ42vw1wtDmxYx6LrVTkYjXqbjfy1EJaV96RiQzB7z9u4Y7XVT2g8MpSsnivVjxbVFSUK9ywoHcRrmpgFHviQp",
  "key17": "2oTFAp7o9sdEmpYViAb82GELz7jFqDJEym6XziJbYDaQRHwcLHKwZ4DpB1TTY9YrZDZ5GGwCtD3vdEkDdezXWnSy",
  "key18": "22soGasJ2Ya4skRQ8cXtzfpNe3uHSs4M2QBr6qgWAjszE3nhMycDehBX5kae2f1QUWwGLb4mFK3YZHUMcKegy631",
  "key19": "2Dq6QSJxPaCZJ5WDmwimpp6FCMY6AURmfnmEojfbLcLw1W9gh1ybUwURzfEVa8vTZZgMxrbRPUqcWiwg19BPPcF3",
  "key20": "3Fxj6RcTawLRsGc9eo8YxeVBMSNh1Fg34UNLtbr8XF7hbNWw4NZyPz4Jce1wcBwWL1phJtM4snFfjq1nKN63j31N",
  "key21": "4yCJLtuar5zi1nr7KKkHrTLGh73AvzSip1bERqMeZtxL8SMh3Rku7CicjcvBNmW4pnm5tpNeveUWSaDCBwauw6G6",
  "key22": "3zaCSnyEHmv7pA1BsMCShCxi42AmvxVVKuDQ775rEaZTke5UhmLhokR5WG4MxKVWPhTjNYMb3s5uBMH2NDxyZs5w",
  "key23": "DKyvDNWHGtm2ZG4DeMDcJ8PDL3eKz5w1zsZ9a49Dpmr2KFsqrp2nwZMcz9q78d8bnTfjARPGL9oFXNHnAr7nu3V",
  "key24": "BrB7Qt6EtEj8eNzovekiLHRY3ZZZpBkosFfFrYBizcihjenXpmXgiTddHgtajoQa7QiUay8WCj8iWePPzaw9jbj",
  "key25": "4nLxktVfZDqmrd3G2Wfdqi24wTjKTv5Kh2uCUmqsNuq2nX31enACAYY2EJRRsHeoRajiGzQtyHd1X9QDJ2DNE11Z",
  "key26": "wvX9o6SUQHkcYavBkoPF7L5n7DsFfoGvZZeudadcEVfqeruzv28Leky7ZR8M6LdjF776gUeKuKrHUywmoNmwbYu",
  "key27": "3mKosDVbwBWPGqHeEGJySofxgjW2VZUa9amcy3EuPbgcuuH8PqUsPgawiTA9FzbyriE6h559w1VQnk9JXsHK8yFi",
  "key28": "sxJ5vxKZyxqVby8yVugRNPvxdysiekgnTuetVa5RNB4QdTB3YaVTRxw2bZ2umNqrJdyHDuuXTPXMu6k5vvrz3iJ",
  "key29": "EVciGwQXD3kesKFAHYKFcNRCtAf4q6itUaJU5S3BkoSdagehechG3SbNHCd1zdjMfxrizXMezzmr56BXBqKTL1n",
  "key30": "y7Pnsgw8gJdwjT8KhKzQHbpMJtgaQYi4w3FXHGCPUiznmBcijAsS2V75KUEToYSbg9vgnpjDJ5N6U1orXcNFC21",
  "key31": "2vdVNTiUyb2wT5VHtzWKdBVo5rD2XsXYa3cpsyF66uvHEvQsspHS5QJDVzpehN7k9AGxy4FsD6JgkywmPyYX2Wa6",
  "key32": "2XiSMLNncprV1jEejELkj4x2joZEi83GKJzUjju8VgHbXsnNBFPj6uR84jVa43nfJxETB8ak72aA1G5sRkqwVnc3"
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
