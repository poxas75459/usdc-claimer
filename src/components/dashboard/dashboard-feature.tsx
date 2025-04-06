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
    "39hB62hRRpsY19Mzpn8nsEnCURwnvx2J9dmoizg3Gv9xehpQeDypRgxtCcvc4xD3eVWVP1UpqN4tpchQrFfYzdZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHres29s4SQVhaqLiThygSGUsPYXYVtobciEzW9hGuSpmDdUYNK9xzVS4Suzf623Vxh5TP1qxAjeCHrg1AQL8Ub",
  "key1": "XbKAxNTmmEfoanG8UYTXFcpUqUFupfTKWa1TH3BYXUQbzJYYTwD1Ai198U7C4rgTNaEwspJ6zSTbmBTzPUPSeHs",
  "key2": "2ceNXBqaRXc4gZAPypWSvdzy82Phyxp27DZbKekjajJwKdfppQ8USLnJmTma58kesJEHn5ErUVCLbwnhontkNS8h",
  "key3": "67PAkHkDpS9DTuDwWNzSRNDMvTb8bzstPJg5fdNZk3iYuX8ZXvMBvjStGxLpCFw363gSdHzrMzgDJ2VfpeL9QaC1",
  "key4": "4MHs6nqUwFnTmK14UYFqxYaEWYnsu1sm6b7YJrsxWFMk1iFAD4oVqujmDdqFSeWgw7vnRMaWi1LMzvV64vgx1qRz",
  "key5": "4FG5Gm7h8SxVM22zbi7YbFZzeNix77WQyrWR4xQ4bkq62Tmc6PbRm4uPvQT9mBGNbBC7Etux5bNybHnvAQfrtQuW",
  "key6": "3FCfNX5s8jwnNXPyD46dcHgA2VaRyQ1LvxtSqLCFpFP3vh5sEL6Hqt4by29Qr4VoN9hbMd86EZWvqQGnwDddgyok",
  "key7": "2LYxw4JkdZdtx6nXVJLhjzZgP1stc38QGbFjprsjFTicAZoWF858iRczaF9kGiyD75dhHrJn8NuHE1eGwmaxV42Z",
  "key8": "59iXoqQfZex7DGNFm5DXKjM4V2kxc5Vd6wPLQoEm2xTjQWCaneadyYQZiae2cgzyJgE3EJujwRYuANvPJ38LXKKr",
  "key9": "5qtK6gRUtbCRFayn67NaPq6uPqEcHLvynpS1BYC8CteSNP66Aey9YVFr3BWXYqM5jQj4McRV4EbWEcXv47Tc63cV",
  "key10": "4xfHWrpXRzzBUWEBd3Z4vAAgobLwW8x2846cNyPY1iQHhesYMYhdG47D2danVz7jUA29XZn9qWJK9c9A86655x44",
  "key11": "32UnXr6nC8CsVsxqFe9XH2mJYgn3iGfWvuMXhV5prtCjDd29pqkSoMBRUQMh3kt12Q8V1LfT1NhyHACimcGE3wb7",
  "key12": "ZXyF2hvsGREnYv3SdJca3wtznYRMWc7YNQhFv9E7bY1HxQmULittn2CErMoAxEi4prmNP5KnZuhX641coo9Joos",
  "key13": "3Sb5esdGG1Z4n6AW87JYhmRckDwCSU6B1puJgNZgzdMiF5axMtLoQbozNb5cZHTerxSKc9YvxoNYS75HjgBsX7Yv",
  "key14": "3iqYq5a3ccsVF9F8JnqE7Jhd1vQBstuBhEkN5aRmoFp7EsLmTMZL3FWEC1NdRssE7G9rrbQnMUisHWvkrHEEFYbC",
  "key15": "5bhxjGf2waAHeGtk86u4qVg2vekWQFF6LRuQzJ6dHpBPL2aWPfznvAWSkBESpPBWmns5mx7VtfvjUmFnkeC2g8b2",
  "key16": "2YdYd1ADXZeb4xxrqzVKpkboy9RemuMN4WRoSSYXPWdQikQBpim2Fb86fK9i3TwiXTYYJHZPgyTH7w4DCLDMr4V4",
  "key17": "E4LrHwWuBitozbAN6ybgsWG9HEC1QkpJ5C2kvvu4q1w25mvayytnEsjNrJMD8K7jsrjiJNCNthEZMEdbaF9DPRN",
  "key18": "5Rsu7VDK6JHqb3Vii5NJcVLDYMfkCd4wzraL9D8FybA8LAiVr6PwkuGht285XhPnbVCCaYS7fJ9koH3qkQMkiTZa",
  "key19": "3o25DPj9k82ktfPtpVu4qzNEK6dqM3aVUy2GLEs3udaipfyg8nCPEPDJqzxKSDH2Q6v5uregsmP4vVxvn4Wuq8sx",
  "key20": "5uPRM2vjDs8iYGW6N7C2RcMEMLqKvQtm8wPW2nzvW1D66AUMrZqaBthac1VVPQYnqhGK1ipDDfuGprFAbQUFmtQW",
  "key21": "4SvVe4eMkht5u56a1Uy5m9sZLYneYrwM8krVz5rrD1gYceMLu2oxcGfq2cC6TukBx8mitpMewtxhv1QL2cP4A7GP",
  "key22": "2RUqByccNo9ajMHisWz7gMG49JDKZfFiSDA3EBxfJsubUnNzjBMeeUk1nzyW73Ww6BJS4sLaMjsfRdv5sarrZdPr",
  "key23": "5YBcCAmtSmBvtcZbr8eCrzMrBN4mNwKF3V4NHwRDDy2jo8efvrLxFjdQVmmx7Deh9dY4KDfoo8eQrChZS2sP5gHG",
  "key24": "Rcw7BZneVv8tApSivtsp8FTrQeG85GHxMB7oVEt9pzow6d5DJu4i3q6dbyrUzk6CfKRwbLVMj1xMfkwU2HCYZxK",
  "key25": "4Dozko4p8BZ5FGS9LUVzLzBffro3A1cXPZWAoD9Mh3Q8PMCAjrFAMfKa7635vosw8yoQ3WNJ9snUN21GDVMPS1Zt",
  "key26": "2k8kZeBdAE2s2NnktdqTc5GBCqrG55Sg4GTEemBwr8fs7777sjzUFbHmF3PBXZrh2oc9M5zGFNnDsXHMpgFTEFaJ",
  "key27": "4vziYXPC8tWHtnrh2NVLNDY56rx8sHpet4C3Zk6CqqAZ7d63cvhrPZ1z9vENh6fUCWN2Qc5AocMCi6EjdRM9vxB",
  "key28": "3MFbkxzhhMsJiybC8WdvgQetZi8wDgPrXrveLivkZhBWrDJJdNH2fVVj5s5FKL4nWPd8xFMwKYZgfpD1kQmtzZX",
  "key29": "2NWAqVqg4j5bxhdJk3gzcUwfBtAjeQmjWgne4Wj6C6mQpyXjFbByP4RqpHRwrtyzPDZZaE2VjaaSW2H2p3mV3uma",
  "key30": "3qXGnaDxiKGVYuukLQ3ZQL2MzRKP67CAFFNA5CWVwrfikZzpLGQrY8AaWPShhPo5jgZtbkBuj25AdFgnegZ94o26",
  "key31": "3SojnKrQY5DZPkh7P4PyNzehmozwBdeC3DKFFhha6dvZtzemkGasjsYDJ5j5AwtXzTFdQU5DEVEveTN636JdokNT",
  "key32": "2nNwvNejLmr3Z3bvVeQSdCBK3tGBVbdvoX63TP82SupAv5fG8gX9Kb3VPPKvQc6uPScKrD1MaQDzcpLTWzLqEPWN",
  "key33": "jLpFYgW1hKUtNcEj1GSHtm1UZn7sAJvexrQvzVS9daWLsyjGX4vpEU9GLecDRuUetUw72sNFwtM2LCXtRsPpEbq",
  "key34": "3BhBzvTw13GKeoKpAKZiK24vVAd2RYkKZ4CemCH5qoTY8z7sJw8GSvQb6X6itfGAuWc6rWyn4LAzhZCjHVQ3Mexy",
  "key35": "3o9NchpHgrgJZtTdKDHkZA7U5LRr2EpjdoVnmQ5Yt66Lqfa6F17cJvUfCbAGR7FZB7Hiwh9fjqu6R1MQgqsyA6Xj",
  "key36": "2Xo3BEwg4z9gcfGvfNh4VwXZMirBvmXrGeBRHawoBVt6pVFSfZknMW5CK8LWNvXkTxZ4ecgEMSQy5gC6dcVKoph9",
  "key37": "2j8iq1GBVHv1wh5cJjCPRTwNzorGtthH65UaHyhSA65a1ASt8TQgffFWbC6TzxDA91ZfmEkQFESKAk9A68Jrai5H",
  "key38": "3sYpziQw6Uca8KURsRdp1WCqyv3M57a45523Hu7oNzyfKPcQPXDrrpAo5DDtjitxwFu9UL7XDKX2687AQvJwCScV",
  "key39": "2QCPVcTNtYgGExjxnmqPT3yps6qayZJnfz3To8JoiDVbCMvrWLb1X2mFKoBA1WXddwoKbCTkFeVxVMLSSBLoSzNh",
  "key40": "2nBYim1ScHqHD6ie5R7SFkmYar91um8N2z55bWPBAgbg37WGgbyUh1HSKa6vaJXGeL1ymVqY3zTy2zQ88CyBSFU4",
  "key41": "53T9ZaLETZwD8jhJhXjNYfWB7TibsWGWRAymEqSVsLmxyKNJeaYNY4mX96YhbCf1Vnjdm9XABNHUvVK45MBkaRN5",
  "key42": "tAGyw2Xq9xBajGjbAM4kon3Yzk9KY9Kr2sfuEaCLTmEk74N2ZyS1LXPrvmsJqGh7agq7qoKBoKnhFKwsk4vvEoF",
  "key43": "3EzxtNpo5EiUb4qL6gRLioPYeNZnwWNxUwWpFDnLLTEyQCbfQtXiDUq44tdyW9KPECURTPkCJwEHEkoEi8pnEG1P",
  "key44": "37yMRJfQR2iZR4TgdV4SEtBdk8maReaJJXYXxTPfZMkipaT1DsNgzGUwFkKMzcxCtBm9SZeecRDZELUKCrdPKTKK",
  "key45": "51GpMoKFKwQfVP594KRmnZoQgAMDm5qbc9Ldn8is3DkrHBaCAauBFNaj5eMUAMi525S9qBETeyiZiHnQmNBfiNP8",
  "key46": "3Yi5ErMSjVW7dC8Wj8QUqxdzRuApaVX55HaLNd1WpRd52VmHMNmGcVtKC1ZVJpyWhXwzWL5cw4Mpmbz8ZJwWJREN",
  "key47": "dMpRsFNbiJffcrrsZaRnah31E5MEB3eEfheDSPxCs2ZF5PKFAjCZujbgC5ScNy1fQveMRADTXptFfeo7NCBfaaV",
  "key48": "5qDsaBnh6dmTmza256WTkPTC6VKHa7KgAUzj97Dsxe64CM35F7fnk5DsW9DnHNGUkR2xJwdWftaCTAqpQrPMNQiG",
  "key49": "2rX3xUyvguLowfDSQBSmt27r4KNzeQooEvtrZPrR7YB7eBAQYF42KENFaUUSmKhtJdcgW6Fb5QCqoEezkeLJbmh6"
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
