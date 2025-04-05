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
    "47LDhpkZzmkmkvBSXQB5dg2YMEm7itkMjMDbsVxfKrvCN69vAb6EauAmcohJBKkrScvZT2RMPuhRNhAATQV4wbUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Khut8oYmjUkfTmSgTzbRnxo6XE4iewuhKXbAThGA9gAQ54xBtyG4V1RR6uiHK8EAZjo92DA1C219bk72a2o4e6B",
  "key1": "3LxLnPRrvAoTEvw2vHxMAAVFPEZnRSynakFNfVALHEEkz3CCcgguDUB1aL2QgRCWQDEpfXJuk3FmPdGqFgpKjM9L",
  "key2": "rK1VcMTmgyBLhzVAzHZ1s7sz4E81wwYigurnemsBYKUbudhn3V6tzXcTWQNsaPWjvruBqsMfdm8BxCrJtK67ZXS",
  "key3": "36JMsr8ToBmAA5RTAY8Jt2v3zSRp9XoyHWDchoWHeARMEFDJYJ6Fty2RqzdYsKWPpjEba7n2QC6FUpefGzzZFDwv",
  "key4": "3KPWsYVyTE19SfEv7QaUuj4socaSd3qP7WnB72UEWvKSkUvf9Z7XAs7BDp4ryue2voCa2Nzw7NDb8ZidKSK2cnoU",
  "key5": "3LtsvdPZEZBjNDGYiHAibks1ZhdMybkeUNAmwRd2YSHwd1RBv4NVFNYn835pc1FLbemkCAj1mpe9ofp2pMBQzvdC",
  "key6": "5AA6haAnLKqhRGL7avFKtaoeMwz7v6Jc8Am5bXLiZEdBWWJPGXovoiwHX8KKmggyiwKEcuj3YN62hk1gsBv4PcL3",
  "key7": "3D5xfrpD8ehaBKJ127HoacdUSEEzykZy7jkjAYerjWYJ64y2yT46hYoDAxw6KMGWze5cHQHbiY3kbigYibeyNrhu",
  "key8": "28MAV4yh7VUf1Kbw7TmzAUCDGqG5mMHMzjRANzbdXHkqDoh7HkABERW6XM8hxGM2ZpiiUbExjfViRvJjSy5qvJxz",
  "key9": "51NYBWsag9oj4pFwr6odQJDZXhZH1km3PHdSnVZVuX7YWZuXmMuvHQ5EbVb2YFziwWnQzoGNKhwBg791SdpDxHKn",
  "key10": "45RTcpD5TAxKVn1WXWD52oaxsUHN2H6UyQqU3EKC6rtxvy5rqkyxyyMEHbDbP5Am8JBivc4PKzyLF2maoEYgZsEB",
  "key11": "5K1JkNwzq4ZohA4SC2mDbikC9po6Jyy6ges5j83eHNi6uA3J6fKCWMM98fSj2y4Bed3tYRPF9cWJmeyQDHKpQ7k3",
  "key12": "fSpqZRcAZ9cfs1grHeZSZzFQdB1v6PQcxNXrLDVuwQytBwZ6cTokSaNPjErQ5GTTeAozFqM1g5XdLzEwD2YQEdm",
  "key13": "5QRxuh272WxnCPcawdPkLA1FwdYBQCwRXSE27CzR1ewe3ZSvqd1o6KsozF9kL9GKVUAJ14Dz7GSw61SERkcdEZ8H",
  "key14": "2i4nznfX3ZJ3X9tEkj7rrXbnV8wuvXRmm46iP34hSYSBoupSqgVDKg5GYi29CKEPzQdLxYQc8ousdz97CRuNPHv1",
  "key15": "5u4xmxMkMczQatwRG7q6XxQrwE26AY4nV96m8uQ58Uv8xELrk3qxkMbAVWM4uQBv8u48FJkbyuyuQzLWqHdtviRv",
  "key16": "4dsahQwvFNtPekdxUto81b1CbVsBnccUDuLiNn6tPG2EE6u4MUHvCgE1eV2Ff1ZX3tmiRQ4W6Gey69fk5pwL9KFA",
  "key17": "VyhZoPLvjZdZ2j8o5duhWKGUxrPKaDJZbnk3kH4wtNyiJe7fnzzm4w9r2Zp5YjKJCLZtXJPBootAGKQWvPnLzPS",
  "key18": "2MJF4GYsJsX7n2CC6ZTqiaXt7yHnLbYJzGvfgfMWG8x5rxYF5TRoysirKRzEp8EH4ZVdn8fH5w4N4cguRtEFDhJb",
  "key19": "4yE32nsxEaoFG5gp9MJryCgCxdsVLXQnJB4zcC73qDKJzud7P14qagmuEwad8FFRdbFLs2GZeYFd1fiXaWyZBT6g",
  "key20": "vTxW5FuNeacrRYsa36MEZg83wa7BANvTsz2ciBeN389yeVGPqHfqHJyASRwdKmUMVBRA3C9cefwyAMeZJkKLkaf",
  "key21": "5uDj9kGHycnpRjjtScA5aUsvdUfWr4Luw4R2fBeAUsKQPhnFDnz69BzPoewei9MpHt3cG41sWpdwYWTEjZqejwKu",
  "key22": "23A77W6Se4WiJiD9dhYFFKvmA54QgDRZzEbvABbnLiCSvkTgjZNrtsRjWv7B5Xj5322rWGbZE9EFMXf82XpFBygp",
  "key23": "5dvUBkEEQyUmawF5dP2sKmLeE2aApcwm7oo8BbdkaXFFofPUphuVXsujafHJtp5pbYbqhvbcxaWNDrK6KfVz3njt",
  "key24": "4mCjFYbLsUUopgPbk89Zt1j1x4pQsXMByxUaqYAg71EHM6uWrWUKs8dCSwVW3bxwZtp7WShzor1sJriYCHkwgsqR",
  "key25": "5SKe86f2qpETK6ybcHDygmqbU69D7Fh2NyN9dMz6dvLiFnUQm9WrWixn7uSbny6YgfR4WnxViwAtyV57PzYKmVBr",
  "key26": "59AG35AqH4E8mY6XqrdDkNaerSuDPJ925JHZ2TJZcwemR9tHkYb6KCrx8CM2qva2w7v23Pp3jqxnhrizb5KvbT43",
  "key27": "2Pnz5FNxY41AaJE7A3nkL8nLHannzrFCVmboi1zDjPeQhftQ6UgLu45wCtouPHt66551HR7WP69XcLn8HuWg7RSm",
  "key28": "4tzenQu9hYAVDwsKYzJAa5KQ6yhQeaVo7DcqCnTxKDEq1JaeBd4Zoc5feARB5gb989UTiKHu8ZrSVV8dgTHVQ18Q",
  "key29": "2qVBegyaqyqXzRm3ShqwEvJcj2DL21spEGdbB1AV8SmkQX8W2ndxedgh2PXG5bD56xvHS8uNgUj8zaqz69usheKf",
  "key30": "3pwvYZo54oyn3KCenHWQ4Nz7zyu5aypW3cWWFm4AQvZuYJMhYVhccMzEyJ36tXkYjFVjcnMWuuWJwkbfHkM4sbZJ",
  "key31": "35iAs49CHQ7GjucS7t2VV67qgb9kVxfnNHRuUf81XkNbaJ6YAwdTRd8eabLJhngEUjSejyrfpUoDW88A2CWkzPga",
  "key32": "4qKW6e3g2tYWZo1t33vRG7T8Sx36iR96nafFPuG4tRGqwPYhFtCFL52AqsTfSowQnRQiHGYH3eT7ghXwnUfVueYz",
  "key33": "45RG4Pxk2omVU95Nf3ow8yzv9d8XcufimXMYkrKhR1H3xHHwoZxg6vmkYeSxwL8cDbfHztLHiWxkjAx1kkTTrcsi",
  "key34": "GHHTyxXHfC7ccvm3hewuvHo9mt4i4yaMFEZ9UG8aoUgoyTb9tdfZkYEFeAimT1E3VJQKrULYqDX6Jb3cc5KjytT",
  "key35": "4TGPFR5ABPZQBjeUMXuy6prXrYkg6R8j1g2EpUEeektdJ6HYizU4xa8rRADYZwV3fStsHBEDCGaMJQEGNBPb9jDU",
  "key36": "3R8G7iVci7XpcGtP18uEvvHHkk1beCQa742z92KLYN8HcPjDNqtiun19t87rnjqPay2Y7vr2UjtvoktWyrJ9qur3",
  "key37": "4mYKZ5CP4SHus2CCLiXmEpuExwbEkemFdLZUkQsa7QBjGwGd6sUJF2S2ec8JBUkETCZAvwBtqph3MJ7Xdn2W4shj",
  "key38": "39rc9KyrqqmPdwubvqpxnxeY9JVPe4EauFj2K5MLvGUxaXtmFqygApN1R7YH8cQBThuoUccqbCvFbfv3M3V9TFvb",
  "key39": "UspQaxnHLbgT3vHVQ8WCWBcKNRHMPaXgMgQPoUwVsjufu5685Rt4QBTyJzxYiQ4iYphz6upSFpJCAnTEcFrXE1j",
  "key40": "3YF9hqHPEG4tU2KJjzTBTHkbiH83xqo1cmTXw9ZCftF5VJ62XNsK6dgWjW8TB9zJd2ohXQks7qDGhg1d62cppRhU",
  "key41": "bc8c4ShwVoguvhiCtE1MhtMTkr3VFwkgtNuvryqDQrJAS1o1PkCUYgYqrRfFHgXdNF37pEk674aMHWKQLvbWVtt",
  "key42": "3qGBL74BhJ69hamM3eaucXgaLu2oojkfcGszKkdZoWKmCwSY2zmfTxsndrrbKGTrzttfXmZaha3yhNEbG96qhEPc",
  "key43": "8Huajqqbp5Rj18W87CxJGUMGw6BMiVhbxP42G5E4xgVksFKk461GWRXQceVzmZV3M3pDEu9Kp5Mbcdi8CWKTD1t",
  "key44": "2o3cNVzp6Ez2mukTDBpyWwKks8frqhH9p9Qp2cEitc5eF93Q83bksnw1SqmZ2gxkF6uR7Lny45T6HnyGvfVB2Pxf",
  "key45": "4FEM9LXAjCQYT5NfeyUUKZd4vvR5iwWTy9XBNFWJjUymbdaSJvcQEWCjFzg5Gw2tbNqhuWdWYFjs2jMLkpQpfZqj",
  "key46": "JrDUeLNaKkvHWA3gjHEpq8fM45VQckx1LPVJGNSPvX2pMhfHt3vdEkcpAYt5ymENfcMpyQDhf8f8FWU2F1D69qR",
  "key47": "b12rbB7j1FzYHGPSTu7qeTMRpW7EZEKc9Hhr9wKazDNJ2Bw6Z2bn93kNpt7fbZwZs1C9Ptu6BdUDETXHV34866U"
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
