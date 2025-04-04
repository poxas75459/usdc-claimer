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
    "4jtJozVgKRNy3LbAi4QfopiAgWCzx7dxafx9jhR8Vu1dyiBaUR9efBjHLKHK5K8nUJKx7LzoqaRaki54VnQHmbJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1JrrgEe2NLHN1mTxH5JNRkLsAEU697xruVVrUuXKoTeg46mveVnJ9KaLR93vRXxv2yFxLgkWKFRCju7voUNLtL",
  "key1": "3J7PRagoxYCu3dHJGnCL6YFQapebq6pVHk66W11aRgjB5hGS7Lc6Y5DEvGSWXmLrQLhYWJKdruMBo3oBfjvSLqRr",
  "key2": "LvcPmTz81vr8MhLgGjUxV7vDXpUzuxYkZXnjxUgaLXp6DRx1fDActkdpkM7potws9Xaihy9wtt3ubfEjN2Qet9R",
  "key3": "3aenNbwaod5R4tb5FHLvjn9pToAVbJ1tKf32RWaFoGnDhCcsCfm6wJLHWv8hj3wzwUoQxPSghXsU6cr4DTf7NpHX",
  "key4": "5YshDdFfbxyPDkWXfSAzj942LrQMJ3VEvyjp3BEETXG81T2xjeJBvUdGgWvRixNxEZ6nU1hTWaUvkH1Z5bvMojSb",
  "key5": "2Ug5JPLjHeBybJeGa6nX9ZAoh88BMf3PFpB6BuoD81p8sxDv9bqhnFVuYBseuksbmhakqUymV1nd5EPVKW46knkf",
  "key6": "39PxxK8yRRFn6wqkE64uQMeUPLD8wbbQPC45W3ufGgSat3Dwh8EeWRURaj2oa41wVmaNWw7fJH6Uqva7v581EEV4",
  "key7": "5X1BV71FkxXUsgGpeLZ9FAdP4xPAz6HFkSdMiaL9qSvYuy1yEnQEBTAa2oqaSp4tLRmdCyzT9Fz8oBW5oaJAaBTG",
  "key8": "zQDFzYcZFydypp82QfP8D8PmEZKJZBSkUh6e2KNkAdXHvyvKhzK1PGHMAT1EhACg9JwCjrwzqcEAw7gjW9RGTwk",
  "key9": "4kfxFxxbTnQVNjiGa3jkgFRJwEqogPWixehLCYecfLtYDWvZTdifK8NLfVbtUj7Q1kPytb91VapP8qAHnbqxsSS5",
  "key10": "4AT3jiqxhgCSL6XwLy5gexLucsw18Put24oMDXSubz8fkzobJAGAoCeP824iC279VJDYiX7GopJvsfYQtbNWTGgJ",
  "key11": "JgKf4Ay7A1f3xa52RxVFn8PV4J1iXifktWDqewgMVTfc92ApnzgwLcSEzFsVkUvVWMqpmFzjZGef7BS6ygsepkt",
  "key12": "4CzC3yZGq2jXFAKexvsJic8DiwpQCZi8PVYYWTGi7ZeasESuiG7DGVR4KC34Zn3hzFr6bzTvZ2gN8FLMTvx1nKvB",
  "key13": "61p4e69xJ9yj3n6eYK8PQYWE8aEb3QxCx59VCdpUbJgbbBAmfJbRwXizr7jPGmFJU3rC7axVQaFk2Gttx8AFvKqK",
  "key14": "v3dpQNvLAxDZB3XjbzpVcmwY1F3zUjfmMwMoWxHcEvPXa5ZmTbAP8wxLkupCXmTcWYphVJFFh5tHbMD6vno3shG",
  "key15": "5fHKn9JFQiMEkqADkpreV4zH5ZgexfW33c4XMd4yMRtwG5YfaubyJqbMDUqBBvSP5t8NStK1J8K1b8ZNp5p4WJFg",
  "key16": "4QemEPRX1s9YGSVkZaGPQfUC8FiEaRQjEwFjzLYqoy4JRBbnUBapyCQEiyMM3fcRt3SzFYnDnWXN7CmgmmhANaXG",
  "key17": "5KiGRnFA2T5bbk77JWkNGKbrs3rFtXX71bTpRgt7cSbhUSfbSUeAdPQyCECVFCBSw49L9wdXpU385JwmjDdZ5NzR",
  "key18": "5VDSAkiZhTBrmxpTyE3btgY3g51ZZpQJJCpAYPyHq6NGFiswTHbxAQXXsVcYJ7zr12AyMzQW44tMZv7TVbDMPFuB",
  "key19": "zXuBnTjw92hFR65LXifCanYDJtTNRRcbo6xBiARXBXNj7DSfNwaktYEcXf265jxmmkSgTZnHNCMXPHecAdYAj2S",
  "key20": "3FhmqKYvz2253xgVRMBeCwtMebjEz5hPWDHaRi6ZL9Hdea8aWPyXfqfrh6WWqxs8aFswxobr5V2fqZ6SMathsVKD",
  "key21": "2J6xD1fUFTXgYbVFLPgVRZiJg4fAgjN8KQd5ZcZNYSrrXK7uRBmYHHQBRhc5bMXiwbL5KtBJpiGThK79rAcTweyA",
  "key22": "3Wz6BUU31KEcGwAAWHYNVyHw6oSWKcPftpWQDWKgwy3UB2JrHCwUAPdk3tJfWuvULDF9yEcDSkksokbf43aVKT1K",
  "key23": "2ABumnJ3xkNNHVv62xrfSKZBqWFbQL8TLxmiySnejGD6zjZf4iMHDR5iwNgA48taoNCW6Bi99TKWJmzUtjXMGae3",
  "key24": "2PBatXa6eYAUWgAzCRNGdJWsxDjxcfueYjQdpL6XZNCGUeV2trU2Q8h5TTP3nRcQvJ3yTTt5jSUg8fJfr3vQjqTc",
  "key25": "ccwTEKYrjVktT9M1kThFfrJDLgbbC2vaEZYSoVMcxMZZVNHoqjEKXfzZ9F5criW7rwvCY8SgH6vpPz2FXhBzggq",
  "key26": "3Grvm4DUsTLLzP8UKmFESZAwdmHoyLNpH1hqxfT6tvRVRJtR5dVKkiLuMN2y2cozbarkcBjHfdL2dEcjh5SAwzf9",
  "key27": "4mdUo5XNsv8QghonfDWGF5LNjKZPgV99Na97e5k7kiETYuRSBZfTx3ndFq6uDroLwwrQ8wFReCSQRdTpyMVsmRXL",
  "key28": "5TVtaiBGxqL9KjHjpi4vwrvSVPhrpZKkcKSiFGtEdsMXCaqb28YEp92aZMUGEM8qyVVvmmECi6eciBucA15nRwus",
  "key29": "26YoEGGAZ6Ta5zcQRTLP3B1mDcKTabpwQGW1NFWHreiM1qNUPCQHA8qKZJnLdo9N1QZz6HGXqD6iHg6GhN6mdzHc",
  "key30": "qW9o7H1AwzU5XURvXQhEhQ6Q61PRvw6Y7BH1euw4b2Z949nfyfwqtG77BrdqMgm6z9UEAw6cRjJB7Asrc46Fbjd",
  "key31": "4Gf4WNFX9ZkigrszpRvEovopVxuUFyf9L8uzMJ16MrbwCUuExWJcodVMrg9BfDBzfY23DXBhpK73bR3QwRMUfwLU",
  "key32": "4RYMnaGZv24sRDJf5apfTosqcB2MixwFBB73FMKav54i5EQ2DnqpVP1hFh4oDtghYsJanBnS7F1j6zDwM82kM8zZ",
  "key33": "5eWGk2ARqdBG53BVPcrV3ZAto7MxBEpE95fiYbLru8srkUGtM6RmnpBNnKiLUocoXBvFHzw8MA1UvtgfkJLP1EGS",
  "key34": "4hBX2yqpMQKva82JsQz5AMgaXmsNZi7321LknpFYGj8EyMsaupTsrXz5Jvznpf2Fk6fkZ3pmTMCoVzDUD8QC7JRJ",
  "key35": "3GHpZzXPwvwKg3wkKs4MosELCDETmKWBV1dKnrbnqDYiXKBAHdEgwwsDS5rFUR7t5BjrKACEJee2t7ZC36ga2LWU"
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
