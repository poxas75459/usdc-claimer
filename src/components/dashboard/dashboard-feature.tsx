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
    "4CgdAqJXtkhawDw3S36YU4326jCnUe9vZenYdCL5B61cPVMMwffFZgXGurjzpxkvQvwJye8C4UpGshte7FisfbzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3cJjommBmeQ2wXwTAHSPJuyoqHPpaaHZUqnbjCwBYn7a6BgvUKcgCzERJ3EUMRVsbgVH3DV9irJbRrjMffRJTc",
  "key1": "5WkrKfuUsZdbbuxg31h8taRWSTwMdYfk19H4Kjvod3weMzsfgCsQw8hvTWjTfwTviLptAHVWWEywrgA2h9raATsN",
  "key2": "4qEegmPrbtENqvwdAD4rHSqigyC3K3SACK2sC7hLgz2wPBq7oujgYQCjTMfVFUhdh3g9AEffDeNpDd7V6kwmfajA",
  "key3": "2CUpqUevP8yT18jJqYu4RJYUqrbk9csgnR5vs4RoSktm51utqwrh6y7mSUmpFguzkQDvBB34SXdh642qHdcW4hjp",
  "key4": "3Je4uK7pBo1cJnNUzaBfXmAQsqQi7pRP3ELMaC8139La9Uvo4f3QGi4VUz91FsKSboVX1ETWtUCYYoToDPctMxTN",
  "key5": "667up6YwYEdhsWcxeaM4gyHoYzzBfMtYaFbN8dBhQ8FMj4rmD3oRiRNqULKr4Sr2aDZvXH2iurrvrioHQQDMXmXY",
  "key6": "5ufLMSourNrfCfntfzQ3WvoMvbZfKSmvqtv8yFyByUv1vPaKegDAy4EuUA3J3uBKVhGUAncDWgiojSeCLYKWCzzF",
  "key7": "4tRv7HJNesng1PofRMhTb1DKkrwZ3wqRKccu9XEA4zkwVMfuSb92Yo29AeAigU7BS1JWTaTcPSNrm5ue45YmJdvn",
  "key8": "GpNgbQXtTTfc6xhYh1muPQuQDcTxwWjAxbi3RGuhw1eozK7Qo8XEFitSuryJaMb1YvVxHQFt7g3461eZWtPmrGL",
  "key9": "4CYCrdwGoWbPj2HjMP8xUM2yzcVdpKXWW4gxYdnvgmfFSKKGy68d7L538S6cMZCPH7yTHhLSy1AAwn9PgiUoJBex",
  "key10": "3Jvyz8AktmLD5qJ1jRnn1CC2TVcKhHq8JehVQyDHpbSUm15NzuoLQXpXbB8Yw1cpiuW22F4EqW3hHpU6aQVjU6Mq",
  "key11": "BTh329MGxpeRCub3hqFZYD38ruEcmGu7gUr7Y1Zg29TrKd4QF6XnDFb4uKamMrSyKsMaEV37gD8xHFA3iaxcL7A",
  "key12": "nPE3iaaVY1TNEADa8KiqPip5KYhjeijiYdMt5YGg6mbZGzinAcjFRfCActfyuGZmmgSUQCPiRPbFYYFRBkeVVm9",
  "key13": "26CcHZeeRSWxNiJaY5qxWohRx3NT8kR2Xvgr46SPDrjuogJWwD1zGxQ7jSzXhF9AuwjJ8jhJWDSHyV4MLGz4P8iH",
  "key14": "277VVmNFSVUJysRVfEiuqWghFSemTj4gwUwtTD265azyLi1nYPoUAmFa9karUju5R4fEvQqaKbLsjP7JZw7NKN4h",
  "key15": "3Sd3rokJCBV8mbUrAdcUjzinazpY3AuQQRfNSDqqJhvb6EbLuspgaTz3Up8GzFeciLZ9xH67ap4UnU7XyNxGFmro",
  "key16": "5fy6cagAxBrdfcuuWrwePxNjG15nzcLe2Y5JCvj6r4VpxYPRRnjkjA8NB97fqDbAivXXog26eHLZHLfaBVNJLDBs",
  "key17": "3BBxsR3WpzF4pEsnDwksHhDovYt3RQH5G26pTiSQGtUXSwqYDhrqCcXg1HLKGTWMWuyPQxM3ni5iYgnvuMqNp8YK",
  "key18": "3vEjU4PhpCjG84UhH2W8a278m5BtvXCAaevoun8WTLQSk3DvpnEpZ6TnUz6hS8Q9NrvcRvNpDqXtep3jDRjocpWp",
  "key19": "5BP3iPuRJFVzrp7gBVyCBrDJqdm2dx8EsTdPqoXMDzePJCuxSbsknPFLKZrKhhcJ5ZmRWSkJXn57eZjrDxqKbiH",
  "key20": "3vL36HPkZrhQBwQcL1zTP4KQuUAk77W3y2KisnQRSjsgCqV8UsX5FKuJ9v9S53bpQQpHrTx8GNSt5uqAQQiZL9GT",
  "key21": "2KPdSCefyNFeJ4bd68DaJNJrCXQZpRLXvr3aQvc1HgFZXftvW7s1vJNraeixn3wD6yqypk3uGPZBmoHcgDBQaGRH",
  "key22": "1yrPtzd6c61R3Y1VLEqNDkgWR5773kZJ2hPVqtguLaYbhFb2yrBur51UamxFKnaKVQ7fJnDma7tETMrEc345HuZ",
  "key23": "3vfBvbigVqCrYp6cL76sy6bs6h2ijLUK2U6tNFDyhiQyCjxzSvSAxVuJZ2uRz2GtPegQbYA19GvwN8HbwjvrS9hX",
  "key24": "4J3bRGtuYJiXB6ftM9Ni5wG61bqoD49cRgk8UAs1rKZASp42Wc9rPDu4v1K5Bs5SbnNCV3tSCu6k1PSGbNHV9rdw",
  "key25": "3yAy4qMxsj7RZwXRgKJbq14baR31k6bqW4YLE1ySnHFdcXN4QHjHvxvs44Um3RBaxCQ7UVAg2z8RKKXCNLyqtzgk",
  "key26": "3ujUFSV5YRzESdAHmjVuw5c6DRYBahmyx6pAZ7UEzhYx3VsVhWU3ZY6RubcHg82ZcX1fLtFageiN8GLs4AeMdrbi",
  "key27": "2DAf6FE18eT49PSVyFAZpfzqqiewZzCM3J8cabyCmyZui1bRxQGANzRmbpLbCyPFfoWbTUHMdm2LHHas38ouqCLQ",
  "key28": "5zmSU61k22GKcjoYiVo7QrjLh5qDAQT5WJjLs9tMycxT88qgZjL44yk5BfgPF1AhVm1f597sd1AfY3vi1B4sCpjY",
  "key29": "2eTpEXHZ8jkobCpFFbYLXwVB74Jrt74RLRpKiHSLCazAqSYzKmL3AW9Ezrb6xEoaNJgM4BKksqktCRM4qJF2bBKk",
  "key30": "37Ub9WbX23z4nUPczDJFUK7pCFzwsw9Aiy7Y8QyVqJW5qewT5L32FCzDeHiGwnccCeyhdBvmMJK7evHJvMkHQBc2",
  "key31": "TAupGXK1yg4VUeN8C5ZMWwf7ej3wKwQKA16UZ3RD3g5vu69wHuyynkSA5Yjn8Cak2pLGXpNtXCUg77FBeJXJ2hP",
  "key32": "Qw88SYCGmM3iLn3mqBpgyGaoCq9B7B39fSog1DWeec7kKR4YFVozDUrtf7mT9Hzy5n1CM8XL86MuZJxXKYRVudg",
  "key33": "5GNa2jepasCRzL8jYV6Cq34hNA5APw9m3DhQTfCyRr2SNqdcyBAB6UXUixkVB99Tge4SR4Huv9wa5go5eGfNkmwP",
  "key34": "4TpCbfYZvCpzSv5fJyNFnaQ8p9rBTmrVRgYfNNcRTnwazNrotnND2cfZZAN1RpV83TJMTmCcTebhuADU9aD1Pf5f",
  "key35": "e2fVRQNaWty7xvqzN2SzxaPDsWUPh7asoxZ5TMHeZgjSZ1WW6cciYybkbJoneS7ZZ3aMevB7ZHdLdpqxAhEHNUr",
  "key36": "3HidCJvSTGuQUpJr4GdHE4gDTzvLZNN2VjbRXR56TVD1E4Zwv6roQ9igNRe3TfybrSRR8AkH6UJrVAug9n7M5XK5",
  "key37": "5RDN1c3gxuT4hr4auKazWSesHGdsDe43PB3ojNvh2HyprHwWJKS1wgxX3bBXZb7JotjtkvTo8ebE2WP7nAb3CPit",
  "key38": "2WWGocUpsvgsUgJaL2FtFyYd1AhNMYiqxLTS1BsVtkA5Qg5TBxpANEs1Uo411zKEN7Ez4QrXovVwtXhkbxGHoMQL",
  "key39": "3JKAGJg3Nk6AEmfigasY4mvRKsgkYo1s9g8Qn7RD8H7sCkWiugrPJyqBgJ2ewv8HdWHspqADfshe7Y8yTBdZsVMY",
  "key40": "21Cok97NrosgR8iZnXX6XzSg567h42PWaFREj28HLTejm9K8YeuxxjMxXfLoHZgEMdioXd1L7mjjTbpuDFwqi91s",
  "key41": "3yqL3ogTPn5iBWaMPipYaRjRYip3cTueG6UzTUoGjoZTQzzo1FWd5j2LrUBgHtkx4FLDY3193te1xjMKZHFZssNf",
  "key42": "286hc9g7zbHt2S6Eu8YV4oSz3ci3DrMjMDZK3yx8oQpHjYBNjXyToDHZK1x5LLV9se757f71ZiBxq7RmqDYDxgFu",
  "key43": "5EncUsM2ukaXNrAAdpARXWMLTfZWPJk6fCm3uwXMqKWX7qeFfm9pvWH8CNToTF9co1LyJKiHvddt9HUEV822oPat"
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
