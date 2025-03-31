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
    "42jo8u7cac6o75oHuREvSo4mcaVG6q6jvA1Lm5wmHhSHtYoSV1WvoFoUfM6ey756fiVTgfy8NrC5j1UxKYRC1Dcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FT4NPiZ6A2BsFPURxs5ZKKT4Lx2Avjb1nYJZfvuFExQWmG1WHQC4vGLXvAKwafogHMd2NYsEjADpZaEXhKJgz2f",
  "key1": "44UTv4bxBNFTM9Y6t8ignFPga41jceQc8znfcrfBJvFLKugpqRpvYtrtk6kE3PSjcJ5tiwSAm7hfMBZ3yX2FCQMr",
  "key2": "2qMoAFmmAU836dKivmpqAhuKaxBcS1VZ547wT2N1ejQHcMVRFnuzHRwuMRgg1ah9RgujmUjHgAdxKSgYdyB47FFP",
  "key3": "2jDT88Vb6sZtJcmo8A5ze236nfmjkgNkAZVbeqs3Gm7B2ZXy5y8yNMuG1DSUs9uJDuo7fafvCKrZEo66vQpUkzJ",
  "key4": "J1wD7HznAscbURCRxdFf6JKZigcmHdwSrSNzkSdtw8M5XfvtGivtNMLazWoL2XVTSysJajJdY6aJh6DMVGKgzmX",
  "key5": "3kpvAM6VWzu1b4gHoYymPZCVCaBCLpwbEKivrjhmSHh8GQF7dYtUwVDy4EWvLpHQ9eyxWLDvq8q54LUvHXsTgfGy",
  "key6": "SDBqzVWCSHhhzG5d2Yivc4dsptMadGGbtsxC5gRtjP32LgF3cxaheeq1xcuMsK7G2h9JAtxXJAnnXBAiLA8mxr9",
  "key7": "2XbVUB7zkFbVZSmCrGBpAgiNXkTW346ioifQNNFGks4wNKhQJeDok5wKu8Vcy9qFx7y4dPiNBJfq7pdPqRo9C8mF",
  "key8": "4xQaZa73K6YRi3zbGBQyeDnN2LRW8PRPimkg2RoMqZYdyoCmwATN54Mq8z1V9JJna5bRiVzUrGsvXRaUB3D1fEyJ",
  "key9": "eznbeJ4RP7XQ3iaQdMFkR6D5LKJS1EBa27ki3m4guu5ufaTe3m8uHA4yauE7Y8fF88ktSEuzbRCqVXCVQLBbeXN",
  "key10": "HEHWDpjcLMaYAsUxubR4yUSx36MvvexEsDvz9mwB1V5934sbkXtfwNsGMxneT8LwKB8qJmqNjHxjCf5Aj3SB4th",
  "key11": "5Qdm9xMPS9r5Gx8W94wAFFQ3QTeEmQjLCV68kUM9n5Avq3pyn8SE2Y2SrhfVB1RdQZAb74QtVM4hiWAvNz4FPY4A",
  "key12": "3n2QNPJQcnzYnZCTj93o2ojBcoLUu2G1GfkgtLFpuf9ffBGtWjc3vP31RxK7By1aQW2jc2pXQZFLTYW2kQYiTZi9",
  "key13": "2wEnEbn2xYgFYxmhvWcA47zKtjTctUdobGjBZQFikxwzYvPQStMfzpPvtKMRHx7T582sy3fDq5WGNeL16cjdAsNQ",
  "key14": "46geborRktiEUCn1XTdDbVNvffj7VbCaKyLSL82CnGAHbEAas29dEmYFWgLT6Cjmb6y1gjWwXh4XFiymMBokLm1v",
  "key15": "4Vv7evNoeghF2GgTZ9DARM6nXUBWhXZR8Qf39R3XRQLsdUN8VGGoUtTopms4PrebTWaZxzvHfTz4jLmfFaY3DhR5",
  "key16": "58ctAqY7VppXQykoGu3k9GMQsAAotXgAzAE3CrkjQtnf5BYDo3XJCRjESBsPMath1iSBWVsXnmwcnCwdVZJRiyLU",
  "key17": "5YTQUWu4Reqk4HaxYCX89dswbr6dar5tx2po9DgVZMroju6g2vHjw6dgkLYWketmoQVkjbxP9GEMEhNGT9tEWJ5F",
  "key18": "2nQz61aMNvEQiZRW9Xg37aGRCbFUBX8neiULAyJsye9XEXm9NGMDK7Df8uvc3XupFXwo4kWaLdH83pFLyVAB5WZL",
  "key19": "2LJYm2yUYc8goZtRxQpLTp2g4ZSaLxEVhZLWy679xr4CXbpGt1YxTFtP4rZpP7A2NVdz3gjmzGFarj36gkS4PQFT",
  "key20": "5uf6Tec8ZdMNxcXoPZnsQJr7pcLVSi52vUQhiP96pzzVBZRteFqvnzPGFk4VCtd1ihkK7dMkL2EbKK3Lykv2z5SQ",
  "key21": "4KASf5nnd1uifab7eKdGXZHjNTdSf9ZmFomUWMUD8cBn7waZTE4keUiZhTFHiTpvSeUksQ7tik4GCTXwUKxFLD9",
  "key22": "3WRdDUqba1gxiFNtEfMDbqwm2PA6mRwKnnDBZRruwPqu3vSSGEVDKiSMqtrEygs45Q9ZfX5HPVS5snMbLLxXDxsB",
  "key23": "2HtyJRDu1TY9KeFXku1CnRPF6Bm7pjfpUfBXs5mjK5HbahCrb6pHoRRL6uns9hoKq9S7uBit2rN5ccbgrhmcutkD",
  "key24": "5fxnq4BW75M18UPJpGbEpKSpJEPNFpFrJj37rkN48NRMWt3BstWir6h5Puwn9Rxa9vXrS4MkBURsRztAVfW7Mn2o",
  "key25": "4n1fAdtgz4cQsSxUtivgeKDFwLNXd75ByUUUfBP3RPYf3GBrGcf8YkJ1TZVutqoePTZofjzgvtZJMatMeVTqG3L5",
  "key26": "5ngruXeDJ9Jk68qDCQ4hFQKtJSBgb4QfCLUBuBKzs8SnoUebUtJBJKT8DuZtGZAgY57a4GvLbo1TNw8ToXAwLpt2",
  "key27": "4Uv851cdqTZxrPjxj18wS6qqX8wLHaxDF8sjWQDjxj6dnafPbz98xWij9uiBnQAKDK9pkMK8UrLt2cJQGRbwAUhC",
  "key28": "2ZEiHogedpaM5GBZRtCGwcg4a9Rh8skYhB7nw55PMSFZceegdHuQgNcSsC3WwgQi47skTRAauRKTQCcwmzvAkGEz",
  "key29": "327YzX7mu7BznbrnEeoXiYypUNGse7ybQUUTkZa813pdhby1XUqmr4TJLYavF5C8oALzXxYdCuJtm1jsjspMAWdZ",
  "key30": "2tZPEZaPjAZKi2sUWpkGvoWmywhKbnNYkgALtUBUtUuMfPSmovVoUB2oubcXSunEvMbTQDzLcbbQhDx7iKFn57pY",
  "key31": "5bcR7APVDC2mRfZfo1qH9QTAbKAV25xtXM79Di1QtWc8dG7Q818oHCAGNbuNPZehatGUfp8PLBL7LgwnBqUCpk8J",
  "key32": "3jEPBbohvohrDQ7px1BR6XHY3EwvCUnpw8GcbNMgkVXULFyi1nNnKk42ZngU85sHAZwXxSRB1VJcnfKxWLNUCedw",
  "key33": "3a53umvwAzCa6iVnQoVJWyBZSEULZJoXievX3T1CdNdWGYBDCSwzEwxGKPAHYWXJ57wrZomVktQ5BS2Afp6maCn7",
  "key34": "45eEe1xR9K1Nyb2K1MRbibdrbytTUvRPcAgakz1NdzhgRvbbKX4sSfzc6LnC2hAnJU4r2SQ5r8VtQBnxGkfMTz87",
  "key35": "3vhyiVGhKSx4JhQMsHwqtwS56KdrbyZu4b9GWfKW7sb4wwpcEkRfTNPdLBSNQgWFPcZ5bnnqKkYrCxTPQYHbNQLs",
  "key36": "4cpYtdeYiSTgzEBaPRaAYGbyHAQNm3n75T8nndqoFj1cHiaVsaoDm4EJNYNxZRUWLjRH9csFT6ZfQdr2xD3M5vyL"
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
