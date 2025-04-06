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
    "2DztwwHBEFtLBZrKJAeFyDep316NsJBhfYtqLu7kikuuE5dGzQbGnT5cCZKpHAfUYKU77UR1m34fwRhBcx2cwjaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRpQSZ7NegzbfycQ3GVvMNho6B5u7uyW1qNCVBNmarmcWvoCKqNnNWRAF4arkvi3x2Xo6HT6gs6em3BFxdeisYb",
  "key1": "4ZfkcdYuEGMjajcc6P41xjq5qqggYKpqD4A94wMZxchgdkuRGhpWcZY974YZUiJAALBbeP7VYAg9Chi54kcQiDUu",
  "key2": "3v46YovdLCnzjARfKKnGftLdY58uQi4s52TLARpGGhmY54iiNetuD9tYeh3fQro4hJmuScnfCKHcWKDJxAu5v9ME",
  "key3": "2wueR7x7mtUTS8jDnMQ2qeJKbUGavK8m8Z9z81NfRMUYciqc3oShKMhYtPjEveQmi971drYmesiPFhwAQnzPkriw",
  "key4": "Zi7vJTbD4twisp2uyDwqae7Rd3YMjYTATLofq5on3k2idiZu6rcNhAR4wsLJixMKLW5BxCM8GuYbuEbgJ8vUcAj",
  "key5": "5JKhs2wbawjmYHxPG5EhKckPNcFJYSp6QDXhPbPuVyzTdVm5XTUR3NXX5L4qt4dSK3DV5VEtQ4W7DPo8A9jRVg2e",
  "key6": "3wpGDvskUe3ouKjhfoiAJZghpD6MCCMLiRdW8MqG8foB5mBwzkUD7yo3WLgvYEmn8q9s9314LMYyYVWLcfcbrmBC",
  "key7": "5CjG2SYNDJq5scwGUdsBGxPzDugXAdYLcJatwWDVZVQetXHxfqoGGgJAUkn8MydMLPfMb3magERSCFYzuDYmVjME",
  "key8": "4Rg9gCYAhbcgkL2CxTGL3sU9nadBoeHhyPVWqKFLbYd4joLV6hzyEvCKVvAm2MzUaTBZMqXKxiviWpGTZ664Xdby",
  "key9": "5sWXRcYZ4HpxbtreAYGi3Fyps6P4hBB9UNG9FwDD2JQ6LQ1RiwPQpDVWYnXBdTfHix8SUbAiVThDmi3G8PKeHe2S",
  "key10": "3v3zu46DscVJAtJr8e8SMWxD1yRSNiQM4Gg6KMDALGAxgM9bWPK54TynnMzR817cbTsk3XPFcgY7iuhojkTazDgU",
  "key11": "3PSmJQ1A8TjA4zRKRerRakE5i8ce1Ht6vL5FoceF6FRQ5agbE4BpZbuwiUrN6vb8TwxQCRvqXEM24hJUNHabDmEu",
  "key12": "4KkHnySKsspVJL4Mu75bwKHqxubtSyFAfJZMLigqhLSiMw6bcfmRirYPyje7J9ihR9TWmJ1xbXnnTUEFSrZ9JHkL",
  "key13": "3acNLY5aFsA6ceFTLX1n5y9eugUY3RPhBNVELytG6ooWgeswVpBF1HVFt4hVFHBwW69mDaRq1CwrnhojWTPDMTNg",
  "key14": "5GpCBUL6xy4hxwJVi4sbYxKkFA8KE9hgCNXX6PocLDze2aPdJSGZN7nBEaKJdp5afNHCgBqh2ALMTeb3g37uToaN",
  "key15": "3b1gW8YmXyvzBZW1yBrrCkybiCTtfwz5aHLn8pKRzfth9wbVSCjuuX9RLYoavEyTvoYfsdvCy25atmrLyEYwVBS6",
  "key16": "4oApj49kkfzvxK2V37a6AHe3cXER8R789Fk3gVA7j7G42ez9LGWuw4QZntTm7wb5qK3e4hHCVuWN3ALdKtj1sN5b",
  "key17": "5oj2bPvvEk82iJe5YGActWEoG4JiF3E9mNFi1JufGFS9hvQPAN8i78o8ZBomzZgPjeJdUgHRFVk887MN6PTDBSok",
  "key18": "2sdAmnxp8NRKgiu78qeUpecdw4imXEd1cEgERMq2tAwZFyYchrakRcZY1QTUiHDRHQZ6PT3PrKKvLrosPF9XSxfh",
  "key19": "5qDeBqfSrJwMriR3eo25TipkSCHX33tTUKhfjgJR7sHAhbDpczNH3qjUzso79LFfw5xu3p79CdYhpc2kCrSuCC8R",
  "key20": "64y11JeW1oAwESqzSuQxipNNemoKq2PadFZ8DoYB8Em25QVh6LQf68YYbcZn1B6bQpbfgvhMwYSziBd8G8SrBKJj",
  "key21": "4XkiuEJMt6RHoJYZA3UHsB26ytvs6Ny3z6P65EJb5ZkkmSWoJU52NnV1pBgrdD1cs2kHNsR5KNs2gRyeaugt4KBv",
  "key22": "NXutMnu9WyUp6QdJW9bSQNqWyxo83ARUiRCA6URQVfd249TeYnGLJrCt8bSZj9ft8LXkJDKrBfMyizYB4pfdyhj",
  "key23": "5nTNCihR87er98gGar6NE94qpR3pdryGo6zcyn31NfuxswLFbhi153gkMuXd7TWFBtpZX28mXcMYArnDziDBpPdS",
  "key24": "3Pznj8DcuF9FxwJxY628JrCx2VhaeGhTSYmvhJ27inrAUxZJQQDvZvcao1gy7p2EW334pWk7Rbz8g71awxeoLkkc",
  "key25": "5xbJ8DdPyJ1oGzjqdsTSqrabSTUbVExq5RQbPUuENpYZszxiCmk2fJjzTE84ZhGr2v5uEdKEq7msMjivcvHLuDAN",
  "key26": "2nuTSBUxmuLgB7jAnPEfpRs2QckvqzdPHLk1zxqCffDN9KJH661q5gmJSw8CCTGC6eJGorEXNBrQFj1QB9aA3E5W",
  "key27": "3huWTDVhQ7jzi4pe4JKMiB1PpciPJVaAL5e3bJ4bjyC9byKJ5PQxL5yQ1VxC2cnpxpzG1r7rJBx7pSwnzQT99jzf",
  "key28": "ynznYHv3sYdbvnxkKdLDaj3m3HMei9tMMvaq8qK2FGv2UJyXuZdxM5fhSm5k3gy2VVQrF6B8n5f8L2yXaFhpK5J",
  "key29": "5qNG9HNBh3ijUsXkpcGDjrP414sYfGtYKvVU9Bu1Hr9urbrnvJpcmtWFsw1vgcWAz976HQFGoaCSn3jr1Zf7ZzER",
  "key30": "65AXwdduyJqmPPheuwuschMkLyCxNGSTLjcKLBTd3k1MkngcSGbVrQFRJCPksPcX3jLWkXRzCzvniXJwtYsV33M7",
  "key31": "5hczvg5pePPVt2QtPfgYzCjKoXef3SsaCitn52ABiKtFNRm1YeFcmGeR8pcnh9PqTiePHcRuvs6rJXVE2tDQdMtz",
  "key32": "4iceFXvBvKbqhJsyuzHcLAMU6jAuAnh4jq9pMzTAi9ayQuVHMPfqsZxoX6rxbDs69YM5nwjmtBCADJkXYZ2UUKpb",
  "key33": "5X5j6Dt9nSvEcckdc9m4ZJEDJXjYaffkUvqYrM5GpxZUmVgWm9v9LBNPBZFBZwJafuNPW8hAGae89fwXvibgHkRB",
  "key34": "NLHnfZYh6S1xaDzWhvMeqXBBr55kbAEzDb4w1X1qtyY4jwvpFS9EfkCypF1gEW9df6oVoLkKdN7Qf6RZgDgDJsp",
  "key35": "5fXRqERpDtYE2KfSLhkqvrJBspWthFaFMdmsZpRnciPSEnWw4XuvKtz6VDY98J8bNvR8nKkqjbg2UzkwByuRbeMq",
  "key36": "4ujQ6wGnG9uTQmyZ4gnm1WYhsjSZrVayKcuJ5zHxKYhQJhS8N4jtT81UTR9eW8iBTrycru5tcskw2Bd83MAgL7hr",
  "key37": "4FBvp1vPoSkrJotFtqe1xHhLH29cw9pf2L2wCWWCXrVmek6JZwBgNxGjMmBbooj35dnUeHwpsSYP3ab4FyS87VxC"
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
