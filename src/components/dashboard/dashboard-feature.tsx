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
    "52AGukLNNknbvebQcV5ERnVqHFsNctaL9GRq2RQc3JLKMY1xymQXiKx8PULz3ue476xq845a5oRrv6zGFdYLz6eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hXsYnsDVtrCgBYzJvBfXYV6j668sBexvXbshTu1rJ6g35BRTiZ1NMWaWBwsS9ZhKbP6jaJ7GQmqyxV4zUh7nwMt",
  "key1": "3xa7ca7MLbUkoiaz5bbQrMv99XmNsYk1cJ7op67sciqv9Zpgu4EtVT2kvYxDdmH9hPwSBnxiMcjQc2z9HVRBLm4N",
  "key2": "61FehWpcyYv4iPwKghhyD1vH7q2Y9qMawEFER6KW1DvY8j1riNGpVyjFmfKMumXZmsa4UJssNEWKJ676vPfxySc2",
  "key3": "2rg9fCyu8eSkQQKAnhEsAgyecAQ4XnXDKoi7CJu9hEm5HWStGt25r61JESRzDrXymvC4t5GMZxE183eAWztaByC2",
  "key4": "oko2DVK4vcj83k5sVZcWSJvDaPPcVHYDo3aNDbnn1o2ZsP3ibgUE7Jg3YNG3VDxjzFpWz5LgYRADz5Qk4avdisU",
  "key5": "3tBxGDz6UHQsA7gxyTRs18kap3JFSiRxiTk26LWF1WjeXyak7LUh3J51UiMnbTTPCPEjnmHkXeUzW9MCbAZTCyJE",
  "key6": "2BvoP2DdE3bdZkf5yxNPryTyRvgHEJZKmCRtGSkG2ThmQt5Hb9MYHjYdazP61ixKTkKpxVGNs29FZ9Nfm1243JzK",
  "key7": "5BKC1pwgDHwRMjjNgX7aLeV2G5VSyptBY96gsdzgUhRGNSxc5Swivmiu632fXFk5KzkQfbA13VGqsB4freWeaXy9",
  "key8": "42vSbGjpaJCeNib9MN7coKmx8fw5Qw9wt6DiBi3aQYeMwSMxDfg5pW9bmm9kiktZ3wvAgrVaE9yxrkWmCZi8435c",
  "key9": "5Mzy1xrVcUU4X7vbtN41uoopsosyn3JLFKxNj7u2XzP7Cwk6TGnKj2jbkoDu7ZCXUS2nV26DJtWtCXMH9M5sdFqN",
  "key10": "KKdW2xtdVX6bos4cDTUJGAPXSxSi89siubFnuvqjGgMxxVbcUWF5HFDy4vBw9ep21hP71YK4qnbZXQpjSC7ftTZ",
  "key11": "657WL2y5Wts3KPrnAjwfjpKQmUVg6GD67WihAc6eEvPk7dkRAyESn83Sr9pcVHbpLMv7XCm5nGsPKkurYkZed2fb",
  "key12": "38rhFRShWHv21dHJXQqXzvjndaWoD3Ch5S6MhMAUnU8jtsPwLgKakS8A59KimkmyU4cCXJLPckTB1osq7pPuCsmP",
  "key13": "3UrvHDxaLFUoUGhBVqj4Nt8c8chNJL6tVWfoE5m6a9e3Nkx8kJnqwkuA1eYrNtqY2dvLCYZbYt5cvo5M2Gx6fkRd",
  "key14": "3rcR5TVQv97oAZuQgH9kJ5LdrBSUYT8NGAYnNzwN7v55i2njMh1N9r2cMBYkbsETRauBYk4uMDWffrxSHzKM5RnS",
  "key15": "4XtgERXABqJULFemhyuVunoAPPsv7MrdZVBQ84d6pZa6RTt4uV541hiiQCkVFKhaXUyUwE148NgmiwrL93JZfWe9",
  "key16": "PEutiLZY1xykDGcBQaxhP693WHDJQuPDNuWyt8DqSLefDY1G7v2SzgdJeWgC54QsXwUkBhdPyQhQ8pWGsLRa9PM",
  "key17": "59VHprMEeS65uCP1GE1cteHq8vFYd55bgEGsaPKoF27k6AqZ141JJeW5BMARpKnh6YFybfaXBBbwhehdPrHWgW6G",
  "key18": "26Ad1a3zC4AYWZQKzJAGjwShJryNvcbepTWFWqbis2rPtB7nF5qpx7vRre35whkX5ZAoi4rzaTPegJRoL1pLmPhQ",
  "key19": "479zHE1oY5sY7jstrK5t7a9KbvvQkuW47LGWvcbbB7dhi7qAUpeWVxxH3o7eCWf8n8VpwtSYtHj8kcpTAt2CxwYi",
  "key20": "4P7XCbZs5ierHbsVrrSudcJLkRKcvDB4S2D5vDhoUx4aT8amEpuYCqAVw2SvF36SvjPL8n97pSF7WMj3v4gCFfqf",
  "key21": "2zwdb6qmPNrnv6g7kFmVcbyPUnKjDoM5dVh1fFJWCfkcGRTTPHoWh3WmP3SPUNQtMX3PcrY6gcaeELit9qawqAVd",
  "key22": "5qzxgHcrmiPv5C6YoPqAMUieDnYy5EpeL637MxpZ3Pr6FGBDnuachbx55evLiF7X858vQt3zNtb2ca2xAvdoiBYM",
  "key23": "23Lefipw72GgxZH2kzAqGiruJA1E8qBv3PZHpBD95AmDrEmkjvYe8uU3JjbvYJ978YjHxAAJAjUZcmRacHfbQkG2",
  "key24": "2duuBFf9YKrG5yPeskeUSpyfLNXhBGTGTbg2ka1anAeDYSa3jw33HCbbL6vwmVA4TPPT3ZxjAyY1VtUPxTtd6TqB",
  "key25": "42R8WBNHnFQ9pSUpKFwUj9qFkNzNmAFHFBKSvXbXRv8tfB8Ed2uh4UasVUKZHx52nyXLFm3ZKHNN4Nz4QuT915m1",
  "key26": "3M2VkS2YRAgKi5ezE5w3KUopAw6r4y6pQz9MxDbNQuUxmQahcgJCDn26SjvqqTuZGGdnpkYBiVPKoSJ6xunXHdXk",
  "key27": "4t3hxtYvrXF6QFCSowGRMdjfeo1tMEp5T1T5oLsjQ2hevXVqppUUErKcjRpkf9wBimMzeTW61NCTBpdVayQNf5KC"
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
