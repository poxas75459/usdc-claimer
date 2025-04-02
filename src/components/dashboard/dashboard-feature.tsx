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
    "5juZwYz1s2kwsTYe7cLq4ZnJXnHJ2yfpKf4zaewDwmFkc91c3m6AvtsBHAK7mwMaBnxSwHqBHVZEtgJ3h1y1WN7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJkNa7ZFFFQvDaeSH3GwcnPmBbFUY2ZwGicgksnfpBCVoS5LRYYfnXw1LE26SzsHkksMZAMGkSd918HpnDUA88j",
  "key1": "5mM2HdvtNZzyW3eDRzuC62QrES2W7EqJxzWhyHb5Yt3HX5SEFRvq5cadR8xZ35JpViUVtfQ3ndRrvjhL4kdWWJ1u",
  "key2": "5S7oKw2Z8c6P4etY9nT1gXWEGXuF2Zx379EJaRXRwGsueXHPevtEaQREam5qN5WVDNF5ZkWhqorPEKfECGSWD9rD",
  "key3": "53gAVLy7EpAM2DoCBtJbbP92uG4VB8TctHAeanLskombVfjhN41bkZNYksmhCw9mb8MdgkZ2ZryTQjZSKoYxoYh1",
  "key4": "2bFih2c4ZN8wNLrJuQFyAf7UjLeCTMA3ttdGRzzQufXaSBmoyPyxpZ4MJgh1CwQhC6TZ9K6C6mSbGDWkTtb945Et",
  "key5": "3WMHq2ybkXDBCcaMYztyVr5u3jQtNqCnRviHx1PzRpUV2wTEwpSzo9zfHJGrPLjkhSXsG69vgyhybKziDp4DpLLF",
  "key6": "m9UE47kYsQmFbT5ae1dZqVooeYwKiuMXijFMKSeNe4bnzm4mTkzVTa4FUBqRq2vs9kniZ8KE7Vw5a4fGzdYHgiq",
  "key7": "2zXbtFyohDdLhvuAK6GpzxCz2GeekQaqNZZpjVhL1wEGvGTvYuWek8Qd24Vn6VaHX599JFxQSkTEa7FHU2RTinka",
  "key8": "PDu3gg3vZwi7JMohvYYSbydYcF4Ws47uuRHmmUvnF56URp7MkxYZeLVoeFLoz9FhnRdgHUX1jNwJYuJThmRZGcx",
  "key9": "3sWJq2vWYBasEfJhN9VYcUzQf8PjeDHsftsfLddTN2gK1YUCM5hqCv2ATmzG9fcNRDcfGrq4CY1u69BGKuyuZCfP",
  "key10": "2fgcRKmkNRgp3dAG4dKq41BaY8e4oLgrBKy2788yvVQjeiQDdkEyfkMwe4vQNaB8Md55WmZbzf8czWhE9ctrSL13",
  "key11": "4Cez4STqNoF3WWdHiohm9GDXRF4VBZKpU1Syn3y6aE5GAGonXvdZdRseXCfVx55YVywmNMNvFuWeiKUWo5gELsX9",
  "key12": "HmGKjfwUr9scwcmVeymGpdTUPEB8FF6bBVwyQpG7W5pymmgN8wEfz3z2JkGaSdp6AM9xC3REtXVoLzcqttYvWUQ",
  "key13": "5ADBFxewBnGWSktBkqFdRSSKS17svHh4eCsQjYBTLLFMUgRsMbjuynvKXmNuH14dNSYpU8aGTf9P1aE9bvEBYPWe",
  "key14": "2xvEtNzvtkYUzwMoNa4We2KFs2nJT4eUrTxTNytY7yiX2qJdvvoMtC3JDds7o81w85SSbK34ZAWxR8iTeZHPhUCc",
  "key15": "5KizhrJ9TuawGb2y51ixcnYAbi2Lqbbg7WzdvQV8PuqtdYqisxnGFSxve3hkpqs1NPPCuFcpx6Ebwk2hUdyC4riW",
  "key16": "3ymQZxsT2mEN1z5XEy5x1Bg6EPihXYMNznnGipwHL9euHPnCuzKdF9HsJkXmbdBhminU85Stboj7KjukPRLFgbyu",
  "key17": "3ZcNBMC3wx7BssQVv3FEXvHcdvSRRTk9fHfjDpaxQR4SH4EYpDSDEHjGXq1JC9a2WQatQSBB3KFdaedBSexGn9bm",
  "key18": "2tsgTV9n8dpQb4VYHnJABX19K6U4vC8aDuzuVeLh6wesv5nTQF7W64teufeJ426ufEnwtp56TZjzUWwA9RBekMJ",
  "key19": "323cfeCaaXqX6T8U4SCSyVSwVreYwKtDmTehsrjVptmiVN3pPscJa7Qyt6kTcqtkutGjbqGx6DWX1pRaRghDa2oX",
  "key20": "287vBwCTJtaX2ZRguNATTEbD9jKdCPDA8tLYsiCDDMvQWrT8bCpZBiQW6cNxsnRHPrjAu4JJegnZvt92qkxKatfA",
  "key21": "314wWd543owTXMLBa3CNz1FZqaRnSZxJ5o5BmM7nnk1ewu1AKdsX9RMDxSosLF2htgJdpA2YwQ9srGqG9Df9TH6n",
  "key22": "5AQBKAEoaZ1FrFNTEcZfajMrQvzwfoiNSLb9EBzjPJKJEvjocKgi1sDHgCzqW32YLGTbFeuxm6CGuf4Xn9fDauUc",
  "key23": "Lunj8p81LogKWKXwiMw16DmnVVt2Zusm5bB97cyc92SKwkoF7QsJ6VRhrRGkeEHzhtmPrSiMAgbniErLNMUK3MF",
  "key24": "4GPCHutFGdXZp9gh8LrwpviwP4TcRXpLNg3ZkZNBj2UuMk7q36cqPa2FUN8XvUtTU825JfD2rQ7DCqAZWKsUd8yn",
  "key25": "CnnQr1NsxDMEf98LoNTpGBsAWV5a4hG7D5CfaHWGP87NLDfV89tqpEfZvGScLj651rVUDoE78pFGcUhcKfAiuzQ",
  "key26": "4srWzgQeuUomMCYArFpp2YoNVhUVnUSqTxrpNqSBbdVYSFFFGa7ywZwP8QENYWBRVGu79tmv97rE54DRghohZ5s3",
  "key27": "49EBQ2MSp8ZtxU9yLq7ZZBbdXPiPrMSzndrp6VBDQFKws5o4gdysKxhWphfFFDaW4Ahk6uw8E7Ekwo9R6Ncr1B1K"
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
