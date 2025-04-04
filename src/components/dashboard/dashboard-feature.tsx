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
    "2yjLPJvPKsUG4hug1UjZBWTBNKRdpEWdRTyMo1h4fLTVk6z1f98WNejQ7zHj4ggY1xoSjLt298pJmn2FGiH73qnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WydfC62AGRaSHXs5ui6UxHZwFL9FXg5nDEPiCPNADAtGfFDbf8ZQ2T8L1WLsqumxq7Q7ohzm2hyFERqm325wF6k",
  "key1": "2TtDqFzmx11MQ67AWtbsREtTNRhiAJMAsVTB7m79Wv8WYWHXfQ1H8NppndzBG8jaDUjZ66ucAvofzKLxHER9W3iG",
  "key2": "4DpxR32HP8UCRjDd2tUHJe9PbQdjokaEpXrXVzjqTFLPkvM4AGhrc8e1vSwo94KL2Mh9bGuqXSA8mTiXDFafjtuN",
  "key3": "5421KWK6pP9LJChahcCuDwxKP9qS8sumfQKAVfZ7PtniMJ8wwcogGcnr3TYUptSn5xBQtdzVgdYYqK1HqRnvgpvt",
  "key4": "5kqahNwd6n7v9fjhAV6QY4Jx35UPUUPZP9qb4cBgveERhnRSjJKUJUSUbU7spiAtXRwkTTq2f4EhNsdVWiSFiGAH",
  "key5": "31uDCvLeXnpuULneh56Q6vEJUCsBH6cFSKZDvdn1r5isx7zgHKBhb3FeoPmhyxtu9uuVf5rZNkTsNmY4JADam9bk",
  "key6": "kJD7ZCZrLTANJoj779GzZaVu2iieduRNmZfW9aXgGAp48jeJRNQqSCZXdz2uiiLNGVxVLuKEjxDdZwxkGRuydkg",
  "key7": "4N4LF3vBS4m8bVHcFogi2JP1pcZhzEAthALwC8239vFkVruWyRPmXYGoZVxJyhaBG4P888qw9B7QSrjXpevFwqKo",
  "key8": "5ogN7A9eLasu9dXYNvBstYCeocwSe4dZuz4fqUuFzPW9SeiHpR1AYuMfiLT48M5px9vCjMxR4WTyS9LSKDf9X1x7",
  "key9": "34yuP6zWF7ZSX3haNUhiCpKWnP2D7RGvofpLMbDBHeVZWB1DHZJsdigmqUHKBNxLvB1o1txqKT5R2UcXqLpCzHQM",
  "key10": "3nvEwahcSFViC4JXJoZZGaB8kDtgAgEf1n4CjNUTr6YsJo1P4xh5HLja1Pvun9L2G5ZaqNK78cLLTr3rHC32DwrV",
  "key11": "38J7RBboBuCqhKGqxrUvMxyzGGvch8ZzDYx44bUGrx57inN5LcUqM43erqbPZFXqWu8SYZGRx1rrzq2q8t2ikXkr",
  "key12": "3LhVkXuEq8dNGiDgZvWY3shj4SmXjwz5gXtc2FRz6ZjJVpJpoAcaH98oEGv1KyJXbboyM8twyoJt4PqPtdJBxGT",
  "key13": "43rAMnZPd4MdghGy5z9R1Zd6e4UAvbGQPdudWB95E6XEXVwpQWrm2NnWNAd8ebk1fZxRgB1BT3Pqc9KscdWyzmou",
  "key14": "2cR3bP27qSMAuL3bbumsYnMNaDs6ikEML3VCyHnYC9k6nNjZQCUnVUefwEuP6UBAvHYzm1GQKnPmrwycH2aw94U7",
  "key15": "EYkgnhhrQT6tZ3Sy4kPv34ejTZtH6xJPAdbehaKZAqoesRAtAoVXjGq9NENKcgP8AgkpYf4Laf6Sejuu6C9sTB9",
  "key16": "6cg9nMBBb1EsAHij31evAz32TFHhn4vYRxuu45vr3GwCm9kYzgcQTBKcYb23Cz6cjL2XS5njVUpcSgUWb1B6oSP",
  "key17": "3ecbF9Pp2wD9KSeTP8QfkiMDSYHZzJ7XRbuMkvpx1Bo89jd2zBMuZMYx6Mtj3pYqPRdT3i3gSAmW5rq7kFZ2KUrL",
  "key18": "2KFDnV4j3sf3mx6xkf44MdqDD3vLjoRNqGT87hDnshjP9ZA9RJSrBW4b25NLDdVmZ9CXVSeQbfX6U6Ssaw7Jao5G",
  "key19": "bqJKKU2XoBewCvk6uZfupRKAJrxxotdG7CYRCznts7yWrq469aEGmj1xxJQ4L96DU1gbXqHDtp7AqNLxuKhqMeW",
  "key20": "5HeKSoyBaqzfZZfmMEhq6sedng7QzNUNF9U32iArFmFKeZG4Ch3ti6QUCoAdHv5XiYHJuqotuYPJ5YB3SKEbqCxN",
  "key21": "5bj1SSjTe9BVhrDwEKyBLq19rSeN3gBLnNSfA11L5K8MvQXK1gXhibEJdZwGdvxddzxDdAZ7KH5gnk9nVBKSzdij",
  "key22": "cifpyQZi38y3ecSzZqsGEsfjokSEzsRQ3gJD9iqpq8WRRSnwQYxQmTV5zjSsuiv8wVj4nCzKFdGEZ46ojH23Rgb",
  "key23": "2ATxGwBW4cpAEkMMUFbSP7o8SfZ3dNtfPNVciNFAsUmf8J5ZpdUrDztP86fpjDGxUQi6fXNXJm4j79aL4x4Rz1kw",
  "key24": "3vT5S875qsqAZt4BaZGXBpfgW5o8Wjv63bK7reHpZPsHnBAtUtKFEtSffun1seDBYpfrzxXJdmStT3QumssFyzP8",
  "key25": "3w5yEWHbUDRKQcqcSoC2YQJpWYUVfkoPcUfr8UGiw5b3geb1LhYLzsbQEwXgzPTEJGThjWXXEGL5YcPoZni9uQth",
  "key26": "24LHAkyfgCHnzwmUbn4r8Ev5G5nvJRaF7EPazpHQHJYcRdsavW7WAopvKv5J5ns94iTSSZLRZx9UXEe8PNyj276n",
  "key27": "zoHF5qQ7GPcgAMVpj99vb2j2sPQPeTyzUGPQ9ZdQTbxHVmQmfDadXDg63spFRcoBPGhGJa5PHRrXkGjC9Sww6if",
  "key28": "1TjheztSCVbvZSqA6j1vYttQrJwa4U4k2iYYmJxUPcrqErb7p86Lich6sp1tJX3bLrJmFoqeSceS3rtW2sU5S5E",
  "key29": "5MwUggxSrbPNVGrM8uLbxF5GkYowDC5n5gccH6Gv8vmvC9siS5sq9SFbG9rCZLqrJM2HdU4CgSmpqzhDh6s1rTkp",
  "key30": "XZzGZAXazwL2DwubPYwqZnY9yujgxKLHQgfE6NLBFBJzooW6XsFGQPrQFfDzYSRCQn2NZ3KfYeXpoGbKJmdjJt5",
  "key31": "2PXYUBBKCtDSPzdQs3tucv2mY74dMGxJp4V9UTrATWdzcKWHVewJhSG43pyPdyeBGWuXEcVqCznC3R6swjnymhhD",
  "key32": "5RatqjGHTG3VVPmwrxUDgLEMPxt6ZpTwP9y7SD2BBnAnHyCy76jhvfQ4TJpiNW2BF9syWnfFbjmhTUb528TQrVd2"
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
