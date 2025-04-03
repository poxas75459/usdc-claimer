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
    "3AdwNuUBXUWDWP6YvDibj4jsADVmNP3FTZXYrkpC5SguT1ArGQgRHkS245orqg3ZtnuLJNQZaidUFTd8iAW36d6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxMFwKDLoAas3B4rWYLhVk61RuSVsfzrcFf8M4wbBsipBitJqjDomrHUqfRuq9ezLg88q1Y7T5Ev8Zynx2FfwdS",
  "key1": "5Lk9qnyAkimK1xtPFZXKCNe9gZMJzQv7Hy6wLL4tS8yktdWhsdb1rW6nHZE7kGqqfwPTRMvqag6pv3Hz8rvy3ykw",
  "key2": "2y7hcfdSFHoE1PWVCKUfFFaW2m3utkqx6BdrKj7BfmTzrDpNtmAbCHpDppjFyr4eqHeQWbPH1H4R2AeAqqcnvumq",
  "key3": "4wKiHEoRHhu9Er6jjHXJNVd37ocnLjSHCmBDmU63usxYFSMQCAujsbVPHG9bV1PMAnpYTNPTFURcbjChhhr62hX1",
  "key4": "5DNZQeiW7YNAvzd2C4TWYoHRtDusnAeawy9f6hGyvFtPsiFxQQeLztWvyTD5XSbNN25S9TaZCkbn28WGbHSkCco5",
  "key5": "26Ar4jK6gCKdC8fB562sztQrXhtephYuUkbHRxJV8vRT5PbM2m6ACtmKFWHidy58zjuVX5QPc494x1oXBHV7UtsS",
  "key6": "5LzhGT14wseU7o2WdmQCdm9fXGoNBY6qRfmb9Vwkr5ikwbEraXiCuFmvPUUjXJGRLDiSVjEPaKDQdP7vsJbjJv1",
  "key7": "2ty3fUFQNA2fcYZB8EuapUJ87wqcd2otaW85i5MBcjqXHvpZwdNPNQ341ENFwx3PSzJV7BBx9MeT4rXkZxf33bKd",
  "key8": "56HWk6rZiWP1dPHt2GQS32jbu8XLqZxVmc1M2Xcn5syw1Dd7cHixFrpd5z7TVgS92j9qAQQWdKBokBJWFLgnhYsJ",
  "key9": "4VdYaFRjJgv9j5QTgBoswAJ3UKhHyT2K2jmMvVd5whYM1wSwie4nXE8sGg1D3PjefsNWvNdrpzCEA8YW213DBSy3",
  "key10": "4TecS2bgfHT9N3CxabSAryMrLYRWQf2n8tPUhD51Jx6C8vmLYyBTTTwdbg4D6NTLoWeeqsiQE8BRUn8Qrq4KMoEQ",
  "key11": "YNwcTrYCZGHK8VMXuEUGfeT2FYnv8a8tKPRRmoDGrsA6jhHyv6cyYcrvo7pCgE16TPTueA68oteCBfa9d19Tu7v",
  "key12": "5neRZZGNKtvCt4kPCXi33Z4Fos7xrmFjFaHFR3nV663vzQsr3TCSbENwex5i3Cv9pD9PpohsTafS8ot7e9GRa2EZ",
  "key13": "4Ffjw6x63vjjvcKTMhxyniZ8LHheAA4DfAmDvZDrB66fe7X2EdquYwsA1ZCXrfkjJD6SqbzMgd3rmxqcNzjTkrjr",
  "key14": "3ofZwp67o3mmA7PtKecc4wZjAxgkXC1dATpDUjynXacoBcEQcxfcbGH5W1dUf93NV8ZDAaXdFF6kLwze2xn8ee5i",
  "key15": "5i2YgsUgYxFw1xBhh5XiaXXUNc1y2VLDNyLSeNQwJnQhE689LUREE29Q5e6oQUhYtKGeXAQCuyEvpPfVmNCFBLN6",
  "key16": "5J7ieD4dquWTGcstS5onYzjybF7H5nokUK7TN6fCYx174MuUb57oRTrumA7MpiCdN4ZQxxgxbhJu8a8kpc35q1ot",
  "key17": "5ceG1QP9wDZy4588pmpXsA48RCJoTqRRRe72XMAz4tnMLbVCBMRbUrrh6Z9mkEAq4n7uGEK6pn6jqafRUP3mYNSw",
  "key18": "3eJ79TsdFzbqGSPPtvdQNfG5ozaaHAuU1zcUfoDHM2FFzvVXFBxBDJCFCLhsZMNaAJqeSPc1NjYHxMgqSGczVCaA",
  "key19": "A4oh9taWPBUpvjMBgUPNgFMTR69V1nS7Td4vgsBoyaZbewaV4KXoSJu3L9kGb99ZxZtzYcnCpaAKya19EqtSPSj",
  "key20": "5pKbk6Jj7NMVNLZmrax7PGJHUmQu9A9Gjx1mAMWYuSFjhQ7Q4ALJtSFY12NyDEYbMwdfjKQQvSvGNsebu45TaZb5",
  "key21": "4wyXfq6WBjWzJ4As8HJDzhUsWecsgkXFjNHeqKQ7WJvSsBcHe7X9cXAPPw5Qe8DZ9sGJiev6TCf74vrrPk4nxZdH",
  "key22": "2fJX36H6joKUukCZAHS8HWouhqgjyqeovrdhQszKwftgb7v8ynpRsXqLvk8h8W4WZAkcdDBXdzCw5zMbm8EuYQF8",
  "key23": "Hr4Zf8fDkCJnj3mk5nfKYhTx77jQUMuQe6rexqxuCYzpsmFJ46w9Zo8KCGSncwUhVmkPfjEjoeM74nwp9MGVJZq",
  "key24": "QUqyzwmfJZv1ZSsbMkESpR45vYbEmU7A4gYGfCPn1bZMyc5MMN63f2qL1VQU515N6jk1SAfrMdt2wMe5JwhMc6E",
  "key25": "4eESNWqSHyUreVMpuMY14BTG3y5BhoPyt2hVzwPADEjVqx7JFwhPd6ChSyWafLpgWFt64W3u9F7dHY1QS7xE3cHC",
  "key26": "54iKnMQZCC63NRYMkiih7wYzN2457cJg9u2xmiNMnGa6ieyGBBHw8beAcgLdxV9GoeDpoWyTpLTEgYgGPvi1Z5qy",
  "key27": "mqtHMZvdC2nVogLfcHcrvwBJQ4AW6gxfEcB6SUv1ZaVWQAhCEBNed8oKQTqrL3T9eZ4C4o3cSEgZdMdp28iFUFH",
  "key28": "KRa19tbsUJ8YdZJR68XpRYSrF1rj3Kapchkw7arpBFi22om24oB9AxJD8fFHdCZ6RSkDiEsvkpvs939Smfxj8VD",
  "key29": "5G53nPLP6sNaDkdYvNHjL8aA3bAZwyoXftLei9jmvPotmvaw5LEU4u4DQCNBDPbcxKH2QwFErmQdQWuyEU9VV1jq",
  "key30": "2vPnHTEo8BVGHxuWcfvjjFhLXp3L9YGRivXZuLux2ZpVxcLKWMKndKpQAUmjxSpzZz4JFgB8AFTFac47L2UwtfTq",
  "key31": "5EEuMe1XshaCaCimg6psFWo3mbNoXBGSaKasG2LkcwEGd9BmP4pR6rRACvomJheZCb72VbqCKiPpMCtFLLRMdF7y",
  "key32": "5ma5hW71gSp9qHpWYq82B3MCj6Vf8Z9AXXmfSL1s1LF5XRFYLKgVsr32QEy6m5HvdsG27mfjzZmbiazeSbWBTyrr",
  "key33": "7UWxuRoQ1p8uEkcAhzr6278DUmTUNo9n7RoWETxX2cMThK7J7dGddthP7U3QAcvdHyjyh9nCypxNb7D2hL4rhZs",
  "key34": "4uJZeQVCuUqPq1SCh8xqnihEAMaGviaqS6QK4vqSuWnr6hdM67UiAsFMPciEiSrdhLdauxNd8CYYJ1js5kiRWPCC",
  "key35": "5UM6KE2mUo3QpVR1BUkC7KDpuqNj1tYko8ZScrB7hiWbv83KtSNfHBufaZN9s4PFUktMud63LayvTZ4rdcK2CeRq",
  "key36": "YnGuA6W6boMCBo4PYFnvisXCQzXpm8aE1hKV1U2y3L5ih7Yz314tk6d91PzYREFhQT8hDastE9bxuahqr4VyBXu",
  "key37": "5yZujDnTvcrYWyfAqmkwPtNbig4d72NCVZ1GTAdTpdRkvcAsXuJJ72QvJp9R41yLUc8WEqQBVqTfbPYKZHzvYg5e",
  "key38": "4ZYWWpNpZ2i1LP1dg6tWWPYX8fzUozBeaipe3GdcQrMSNEbCWPHREFCqwEmf8wsXH1fAWdwbcwSmRZwWkAsTji4b",
  "key39": "3jhPyWe4TypCjEKgyjUQ9mMsJ8GJJ8DDMCaDYGs1duV513Yxutv2Y3SNbApG2ero1Ce3dxAUJNDs1Ef7eiBDYwVz",
  "key40": "4KsDjzBBJ5VW3mqXopVAN1neVwSrBjCkEDR1X671XoF9mN7EEWxcBmsm8ghVmYqQacExY4WFF7qEcpbSF25oduMw",
  "key41": "3JQMTpon171ZVVjLGATkX3z6XcmfKKc93HkkRmjjcU2ck864HCrv73mfAnxxajGLjRRg5R1bNXdwF2rQdyHf13fR",
  "key42": "4PQZZhhKWSht3ffZZGhctQ5SEoH41jzsBzZ5qXeDi63nLAci4f6Kaz6TmKEgKaQcvM197BvK7LGi1NK4XLLfE1ec",
  "key43": "3eABRwbwZq4YkTiJT3woVDDNKJ7HXGfCyPG8c6emN35Y7VQHJSaj4dE4tcdm2hryjoosqsEhc4o3dCqcpEJm54Ww",
  "key44": "2ko1XYUq5UmVfNveEZcJmCPzxDYMdWDesNEkAbv3Pqy6ctNcYEMjKfehskM1e2R9DkvuNed9k74vzsjhFynRfb3F",
  "key45": "55we5W2uEuVgu6Z97xC4VCvmCB5XyeneVh3nrRMn9rT81HdPpfVit3rnFceRaZm9MKgZeepVPAa2V8Qki5GUA9CT",
  "key46": "2kgQQKLwqMqjyyTGFBrEtzPQD8YkAjDXfVzNXbHVcrqs7wjjazfbD2cP2E1cg5JWoYwtLvXivi4QvhHnFCz44TGZ",
  "key47": "51iRCQLRf491joUZXVSKTzjpkwDfXVqngcTbXF2mtnVrcBW5rJwfkpD6oj78nAjamkff7iyMAR2V2ecS8xeqqkZq",
  "key48": "5MPc3xtfMUKfZ1ZtUrkVk4TMN4u5hLbiHgDzYQYYkH5HCCA3bvxLTiaYVLFFm88MmnJq5D5ruy4yenKQ6mKeydmX",
  "key49": "tfJDHyV6gBEZFncQm24ak9Fkvto3LEpcQZayw9je3Cnwpv6qhwgDtaKGLMQbNhdFDxAt8ykocnw8A7RjM9T6gu1"
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
