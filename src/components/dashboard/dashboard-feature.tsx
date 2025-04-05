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
    "52Y7FPftcngm2ot922GrmpU2bU2695yYVhbJeM9bV9sh2JTrs1GayGT2ZFvrUjTStCxujccJLTRnbzS8A13jLPs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axZHtr9HDdW3kJND5f2ibZbRXRp9z2PhAqf9Nc6dbfVREUUFm6RNvJ6n8ewqURHsubfqehBdrXC5gy1u3J4qdC5",
  "key1": "2udCRW6wfvMQQj9R1zc462p7jsZGSWJWkqrQTRCSDjrbf37fa9NSUgnYUcaHvfN9WwD2v6TAjhNvzsqJ5YKNR2D4",
  "key2": "GwVY8p8P8VikMHnKVjJscjKTutQL64gD3bQSFSW7SrH4Wxvu13ESMRXGRMiskgQaVasa9CRcAr5XyNkhkVhCMiQ",
  "key3": "4MSXwbSZGXY1SLYRDJNuqqdzzKWYMS5KMzVMmaLwTKoahxVR26athznkbV7gD2FdX2Fgad9BX81b7jstpprkQZtd",
  "key4": "4MMhvHwLhVM7HwQmcXbkQpADdkuLqGKrPrjbNV8rXc2wNYySmLczyFQo6UNp9o2kuKyuG6J46rjumqMMhCbrX1tY",
  "key5": "2NLKunYgrBXnhNcDKh7k6Tk6NvWi4nM3wziD2URdXTQ6Bd3n1EusAtTDELdCChnB32M22BRzEJEXKDk12ABpickL",
  "key6": "kLwfTPmMYBf3Us2sukLLGDyxZWwY6Q3GU95C1hdgtB6q79DY6bM44EbwkpP8wpjYxMgAgnZAL9Hg3HhpErxrAbw",
  "key7": "mTsoXeTaXBNhvSCqiafziP7TTDc3TKoexyZxfgUFNQ1Ezkkdk3xXCtz6AaJewbYrPgxhA9L1AVi2L3TVg6RhVoW",
  "key8": "5k8NYWwSwyNyRjM8rshwwwh12bSVTv4RJrpiLbm6pRqLT4gdYDNycrzUt8gWu1UA3inguV4hYPNXsSpJXMN6n1fS",
  "key9": "5sFDzrDJqnzWheDTa32V1qJPFXhYt5sfaRQfMPTy3jqdVwyUuZ6mRjWGb563W1VpgoxH8L3eS8uM2SBMTsfrUQvi",
  "key10": "2qhnMwtdF1zu4PmsuG36XRFkZR5ftWm17zQQPdHnv8bfmM6jyUQpz7hCugHfpKAjJaQbowim21FFLZhgTWgb4YEN",
  "key11": "43pYKzytevC84cex5N543Y5Nkmg58FrFRaJmURVgcJw8Xixs4ZHFNXkAqeYJE32Qy6ZVtrmKv9iEffr3xX1WhCyW",
  "key12": "4hkbvZAeJa8m2eyj6d8q94PQ2akGaCvhRDszDWJgUKKkhKWAH6BBKcXmdYrjje2g642HsshfmxL7whkpH14xfVBm",
  "key13": "3V16YLvMHnyiNFe2VynJZiRGwnxYNjJpNng1YqSK8XRAPb2he3Bpr8iXG6cgCjEyLvnnZTyXcePs3Ecugy4v6mDV",
  "key14": "5n64sbBeY4LuAG7dUTUaAmgv9McAMfZUt9ZLsR1Mxe5Bkqa95kL3jTDbfsjyATm6jqkvfrrzykVvuae9w8RoSq4v",
  "key15": "27Rqo4AE67TXEnF6kyNfrVP8rgoQPAd1XcKpX1h3MdoPAUjG2FEn6EfqkGdYoheFK9aNRFWoW4GNRyKq7XCHV1cv",
  "key16": "4BKMZGsSskPSnHdd9AnEsARocGZ7QtZ5xm9o9hvzrcAf4tyfzpkz9hZeq7YGp4ewMbRm3UtzU7yLZXgpvfbU5Xt2",
  "key17": "3RAcPGQmzJqmcrS37LoNCR6Q7x77NZLGjho6FWPiHQw19wn4AoW2e8i5WWZHvq9o2vsSFrXeGtj7DTEoHUqxFqP2",
  "key18": "QqEb7LrZDcH4zbaqUFZi7vFU8Mdz6mSZAWnf1aLCj44KYGAKpfXvn9T5JPBXL4nehZVqzn4kNMqku9GYJuXsUKP",
  "key19": "5b1GLv7Uj4kwWXbYBDvrha5LrjhcdVJqoWMLddcTfH6QQZ7SpzMaZud9rwMqaHAoFMWPpmF5XQfCoSmUta1aFc48",
  "key20": "8ni5vRwziP6mXHdVoi9cekwifQfQDZiYEmhB9hWcoxNDyifErPUHUu3EPhK8F6LoSyTyPizb3ctZrnD9mVhoUxW",
  "key21": "2CRPeuYLgHZ89ipLjriTiwKuMtw91TaaAdi6po1q1vDhUL6FHnowaDcoDj3bvvCeZRbJSKRrvUDL3dFASShdKvaw",
  "key22": "3WmkDpc8xNWCv6e9cEGvYohHpyE41CCeAAdhzLyyK1HK1mwtP4UTmznqWSZY1RZbbzi87ZxRVBt5AyGaTy6CEA2C",
  "key23": "4p3X61CuzARkBix65rH2LUE7wwkyxs4pvL33QRjzGWpCcfo7N2zLo96w1UwYaiwzRrFXn32AHqzQRYEDYj8uXkx1",
  "key24": "dDQ95J3hLceXe7JVY5wguaWjmosy9EhXyVsnYYJ92vcY4stgYrmWC6tgk3ZVKZBPwhznseZN9KDYUaWjcESbXKs",
  "key25": "2n4a6PfDaLyFKHtm5Wig6UajhAJixTXiLJQFChucnfyLnaqDXiedMiKUAv5XY2FqS8xLhnqTcvM58TbEuF9srSFu"
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
