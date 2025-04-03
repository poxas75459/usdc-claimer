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
    "3snZf7oSfNUUfCunQ33JSeunVSMhLdMxRxzgEhLWrwg6ZJEeCj6ZPBf4fgPCCgyDu1S24KxGUNKD3ur2gGaaq5b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bCqceCRve3cyaZT2xGx8mxqgHHaumcnJAE7HFitSXAwsoHi45D9EuEFjpeXZx8BAHEN3VAGg5SgAAVYeb53dow",
  "key1": "2w6GoZjiVX9ByMm5K2ttswjFwHyvzm3KgqdT1kk1Uc1uBPSN6s7Hjgz2iE6CXb3dZFvT5HqZU1ttrHxjV1ZbuB95",
  "key2": "4LGUaSj2EucuCY2A2uboJ6WBbgRFMQTYeVcQX79AAs7bGDqCKxZ94VwnLCTwDTHjXWtSxvJQvndGQvM2BbSYbqa3",
  "key3": "HojuoR2fzt1LBETB2sbnXfKtS1LCoVrDTb27Eunx6YHMNuZm2hMBddj8JQSimGCgy2pzcQVQtuoiDzMZNsbjjmc",
  "key4": "5TSX69BpodW55QKPu5LxvdSrZa8teAJfdLb5fx1gkT9SjYxDB9H41FYSMXLrJSPzV2omrKps1KfTnxsZzt6UbfPs",
  "key5": "4EVgpT3E18nnhXEndEavMxJxsMU3dWW8TAncuuTv9mXoewRdUMG4WcCSqepGPizfGPt8Cjh9aZcWGnQCN2MEpv9V",
  "key6": "Yu9ZGZmBZu6wooSnkeUa1aeJAsQqmtxGrfBywMX2m8AxQVm1JkVK3XXSHTqKj5kyq2zBSzv3iuaFo4mhXpa9s55",
  "key7": "3LzeV3FMzVnfieBGjGPwgXVwvfqFMiTkA2VMs8Nqqt9owTfAfE5k34bV74bS9NkxMYQzbamDRkdbEdA7SvcmjEUf",
  "key8": "2TeB37u2VjgtyKKmn3XhWu9gLEkkXi6QgYRzPaAwaLVPGR1zyFgw8FwiwG291WXygeSrD64yic3MxqcncMeg2KWQ",
  "key9": "3NgHD8cNwSV1TPgnxQrhTFXAZdkXtDWzoJDUPrzXPwY8YwChBhETmVtkeKASfLM22WjYH1Qcnb5ZmVWpzNbLaovJ",
  "key10": "46eV35ErdJ6mVpgAjW7HY8zJgrGm7tq3QHXhY9gBgHKhcozYPHBL2h376CJDhximGvYxiy5PrrkKnZNKSC5Sa4j3",
  "key11": "4MS6muUZGU8BQY9HQvmFtyhmkBtNiSJfdY66b6bJ2KPfYt8Dvdi2FT9DSPkh2w3CS8quKeVtrD4QhxuDNwP1C363",
  "key12": "5TNwk2kM7o6VwcVQ6o1NVf7m15p13KK2vK2ncu7v3Yzdoccytn5fDzYe12fru9CiZTn9swuzgE8YfZDNZi3EhQua",
  "key13": "4LZH7rZQ2AsTLsn55pU7Vux1kdFMGaLW8m39kev1vnAEtwsAH74sixKmq4vSTSRJsP3hu3WXy5Jf8D3XQUaxxK85",
  "key14": "5o4s4MwtyM2tsFwHHdn7sVrpoAk8xR1A9FZhc9LNXehTD11Fgj2aRB4iX24zvwYD41zpe7GZMYaCgsjxrc3WgM5P",
  "key15": "4SMA7rXHf43xSX7cUX6tycbssnLZJd8qWTaUGP7VCb9vgQVzvStCtwc2efEwuxpehK9ZreFep541CJfyvqDrgEYp",
  "key16": "C6g7viyM6KSdxZ9DrRPzRc3qic3xRyBZde2o3a9wELEkZpizXXgAv5qz1Fg8hf61xfe4S9FNHYKZ7oGLVNNoiWa",
  "key17": "2ocpSCN8318KvgyxJGzhHL4n48sKP1oVfXeLbUtfsbWdaynthazEBbDfhqMrmWDYxQZhDc7mH6jjrh7MkxSqaLiv",
  "key18": "3DoipRk2gV6WWgUsy4uRCtjjirAWuaBhw4Qtrh2q65isx6wQbwbYUEht9qBhUxKFe1HN8b5UPhuRRj9xLur1yhfB",
  "key19": "5DYVkkrifkPabsXkgBxh3xgzyTdHB3sXHGGnWvuQy2c2h55BmsxnxaaWSW4BUUfXphMYJuKRxw2oXMiZLRRPWD9v",
  "key20": "2D97guuEphbr8pWaEdYrpUJ6bgrsTzcXFxgPm4SDyLmMYPJ56CeYmzuqEfJh3EWk695yNELh2yYRoTxrqGotnMWK",
  "key21": "3wut7QoN9NY6HiDNp7fp87ZmAaQkx2otnLycU3TLrWR9WCS9EXd9pq41yKUPPrmxJmmxKijFkbSLUnMjRevX9ysa",
  "key22": "2RknXxuLme2UwgepwfW6Tkezis1TmqzKyP33v53QSF2781pbjyn6NeLG4NgWqZipB1sq7sEk8YaoetCMY6y1suP8",
  "key23": "2L1TadorZZ6hJMPqxJfe2JMvi1jig3tQk6g9sTpycAJ1SVDbUfg5C6yRzzkuSU84PbUuBF4thGCUeXgZdsd2TGDU",
  "key24": "2NehHib4K4sm1xQiXVML3tKamUkPyZeBp4h9WupCyV4PFiu5eJeVFMN4oBTAtoJZSeCK2URYHLswZkb9bjkb3KAW",
  "key25": "3SzE5RXxsDHQbiXn5JRoTsf858DzgB72yDGJ17MGL8EToUorCGZ2C5oFXyu7bJQeBTAZtz9QXtC36AHLCMVMcEtB",
  "key26": "2sbBJt145EBcQBpNEDggFYj4mbqPA13FT8tpEasujqAvd2B2GFkNbemZNCAhiXv4yJ68pyR6L61DFVsqHYxE96as",
  "key27": "3jP8RxxVR9sLc5oceDvCpYPpjqPKL1UE9fV98onWGwfF1igYBRHKZJNcoPv7UNGdTmvjaaYPToXZ9DrcJouXEyRi",
  "key28": "5AUv8vdmfBsg33Z4JZZD5SgDd27fmRDN6JAsnuzogxYQVymAJbeMYLiksAP18Vdjfcw9XhXsTVtRRNdnPuMsMo5N",
  "key29": "5rTkiAs69ivqPMwq88tBwcScvmPSboDVe5bPkFHns7fax8KvrCLsNUSi2LEhGzQMsiyeXTfz1B3H5xDBeTT8JxmB",
  "key30": "2QmouryrTNRV11o2wCYCgUwkdpQsE9ZnCvqizcx9xTei8zkxRMJYogYrzzKHfcCCrCy2KGx9MQbXeQ99sXnKuzjM",
  "key31": "5eKAkiEvAckSc6XNRNVEZDqioV1rXpbrFBev11TKS7qtzeqJjXj6dHYqAaxwYwxSejzXyVTdrHKPbq9jdUKJHBAK",
  "key32": "2u7y8NdL2H4c8t4WgjfdX55KKnnkAjyPf3jgjF8cQruQ3DQW5mdFQQa3MsdKwWn2kx5wojPQATxmekP53Gr9pWKe",
  "key33": "4X7Pc8ENQnusJsrW4bbkWMbv62TekucairDKGxw6UjPmUa8cDmk8xjkSvhpp9v1kkpJNnVjRhWWAwc9XvBzYjdjW",
  "key34": "4v2qVHiU9o2ooXqxdvtG5FLb5MbQne8ZFQTwJ5HUrNkk2SfUJHz17oYj436s85TMbzDptP2zpqCXq9xgnRPneXqB",
  "key35": "5S9cacFtw2kwUpY6MdbP57Cn5AU4gXHWzYVN61W2VSjeByraSjXNbKE1jbT7LRKmAuMApvq7jwsYy86JKtuqHT8T",
  "key36": "hy7quwzAVAqxRhom8gr3BW1JCsEeMdCMY6j9Mdy9p16taQ7pXrpobMRfb3KcU4o8BistjX19eoNuQ8vAwtoLUsB",
  "key37": "EnZA2MerZESFkofzqfXfmFEkZ2g3k98YCkEZWLZwevQ2K83m5pbmgCZo13Ud62QJrjKDHF6YX2QWddAep96EMt3"
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
