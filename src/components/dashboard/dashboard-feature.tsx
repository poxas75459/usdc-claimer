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
    "3FiXfik86AyLdv1fFAgCqamMgHP1b8KjQnjLW9SCevfoK7kCZSNACN7Q8a8KwjY2a6NZvzibGrGDBfYwMZKagUZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvnHH8iPnFm4gwhK37SQk1Hzuh5Y2oZxKa7SGmwQufBHhyb1PnHYkarjFRM8GwofQmYszqcNGWa31JcKNxL3TF6",
  "key1": "hmMwLixp5tV97LX8eeksFUuuEMnv8zj6Q7MZXZ3qwurHkmxBDYDhaSuhVWjuHJjmmsJhEHMVY1BNjKxdAJCHieB",
  "key2": "4w99CKyo3mbnRdpY4DFbGNPM35AtT2R2pQMENekQNEp2gMHymdAJNMnE6m28ykqgZKSBQCQyUMtbH7PT8Ba2Jf8i",
  "key3": "YgZZUTdjJpVJhNVWHq5YeCJ6DbJ2pXjZn58dawT3YLAPCWKMCvnwJJg9dVzE1RBvRSc25ysfcbtv8XYfYiUm6RY",
  "key4": "3s3kmQSKHSqgDfNDMYJthmcZ8wawXmC4t45E5nf2popzb8xsTfSAGgPhRB4cJDof93ru2aivXDFVnn7aB7nmyKS5",
  "key5": "S2ddhGr9anGD2brrvbCccEiFp2umrWqEMjoRHVo53pZCaAkTZWsiQfcKWbiQde3XikpvuupL6ruAinvjuAsQqxZ",
  "key6": "2rWXhfyqj9R3JaNJzARpDzenJauafrhJJkfk1cDe8eBaLXRcts5fAHnf8jYuNhFP2bQ5bqfih3qgbyR3XFEoXTNt",
  "key7": "3hiavUFezutySpVywCTn3eMWGsoghaBYbPeC9Hh13TS9SPFHoAusCA5PA4YzSEYn1yoNKPRrzvR2JDgsJ52z1rum",
  "key8": "4aHMYJAZMk97PW2zBkYiW21CCpABYE6b7nejxxP9NH98r3jPn3FGU2ntt75CDRV35gKpMgqLz8v4t8cbUngu26ZP",
  "key9": "5NobU2hfFhR8otreEQnwCro44E6g3FzKhNQR2ttVop9bgQdFX2pTiWTUtp6EWQGyDP2h1iHjWscR1iW35XW2mTsx",
  "key10": "2ahMxgahHE8mWH3Dk2msrucbxaXQSQK2tMiHL2CddUFvsmCu63mkENieBkvsXZE9hLwxz4WTF92uhV1JirGhtZhL",
  "key11": "3LJkXK41yi5ASUaCb5FoiEhp6S7n4Pyv2CJ9n9Q24pERtVZC4iNFVi9VtAGy8NKYuqDJB3xirWarhewdrzftR6rx",
  "key12": "4ugVRgYNExvH3xRSDpMDdnNUaFZBAGgYSz4PxbgHiJiabduqxEQSTYGUaewC7KTCgk9CWvicCDdoEsbJmf8SeCep",
  "key13": "PTFBeuv55onEoboiKjYAjbB9ZiKMTuzLN4nMGNxJYvbmqvZRfr4Chokw5jYu1BKi7ckvFXUVZMiGKW5ZRUCXrSa",
  "key14": "2FbCreXJs5pEo5HYrt2x7Tvn98ZWyoUdXjFC4x9aBGH1RgoRSJ87eZSgL9tqRBy1rZd4fNVRRvEZF6j95LEoSNE6",
  "key15": "2dGaWDE31P7MpufCDDBFP9PY5Gd2cmLCBC26JkRJqcUL9ZPzn48ydsVeoPZipzkV4LpYatknhVCmUrqy3mcgbaPV",
  "key16": "3MrkGd5VBAzh6q4tMY3nmrUwGtfkmQzM1SShnaZiiLZsptPUL59iTiaKkpQUap5Fds7RQQRhJoGKEqvyA9w9kdB1",
  "key17": "2FPmHhNbECbEFod6pUTj1Cam9vvkzK9Ti9t9VNHiAdUHfryHKHTTMACom5YtGAgvXB3towhYXLjtDW8VQetuwkKo",
  "key18": "4jYNbi9FxuYhTvd3X4HQE3Z5DDKHCiAqedH5BLfAA5jut7qhpv3CLGfeARRSMMarpLDzLLSX7CkWf1UhNVoDqmqh",
  "key19": "sbDcJPHfgeCDDcqNQQrKYCWKSvs7Vyo9xEWch8Q7HccMBNGgL4X1mmR2XiCjeYmaPjLcL1pncip5bWXU3F3iVSf",
  "key20": "4oreYxEGpuxP7Vdnam81jFkRidMa5FWc5cGtChf563ut4Uqdy4X5BjgrTDn9c7mLxMjeJMExwdwMVaV4nEiA6jdW",
  "key21": "64T86h9Bxe6YcAZ8GreeTNKRrciZZPZrRYYUdM9oPZLqmw1QUvEQs6VfKcUM93X2Eqv2SSgJKkSJgjop31saYpfr",
  "key22": "4DMPCLmoB21XL3s29c1DADng5g52cfg6MN7FristSZKkEdvhr2KcdMmgfUuXYC7Z4QHMUNpmbn3VsgG5ZfxdTcqL",
  "key23": "4b5epoEMaQFYLNDzu88maUUAosRwTxD8o1278PePrD4si3abZi3ewmCA3ggtzT25MNmRPHVzdjX5BxxHSSPH9spT",
  "key24": "5WBjKjRg8tDLPEHcqctV6FresJ2MafkfvhK8vkUFTvXZN16v4bsreqFThCtB7oz7HDaK94s1CeuWUZzD316P1AZ5",
  "key25": "51o9t2HTwnLzU6sHHFWEwJFneqTzujGumYsMxffRZuLg51UGJaiYhCMPoznX5ZBqwmad89g17nr3sLZSJGD91opU",
  "key26": "Ha7dFz9CJ1w73UYvqHFoArKyfScpBRkqTHytb6ku77A1pTajCvqmtnQZoiaTR799XyyRw6dJeeGQh7fefnzHUYi",
  "key27": "2i7gWem5PmAePssNjZNjWK2EkyhQCw6P3aPmzimz7YUj24ZP1KVDJqJGwuv9ktFSDUYrqSvheCcAFxCRUTFT9vxa"
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
