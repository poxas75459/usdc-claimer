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
    "6GvXQHN8VW1CDUPgRQ3L8R1qq2Su3MYZxCcbEJXKx4QQbs9QF1U4Z2pq5vT2mHetrGjTwaDWpaKQqKnJWTd9Z8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YqNWNPy99i8R6na34ttgWYh1HCXPjhKfv6eL7VZ3Y49rcUPGkrjB5ESGXSEGsRkSAFpEQq2hpfgNxxszP6knLi",
  "key1": "4tDwJ3pUHAycp63KmAqGLrQpaxwSnkAZhEe1iP47ACYpYhip9CKbpaaHNsxG6KFt5idwVev2osGvnH48ucGST8v7",
  "key2": "314zXsrYR67kSVp82jXFJb99CYrZVsLfXhHCkfQSY8wdcDkt7SRTFv91RvKNN34UcHrojrV9xRSDbXpCnX4Sg1EU",
  "key3": "2zixL15hPZ16eSMME3CfsGeaW8RD2B1ipzNu2WBC8HoVeoikJQJSW6U2MU3WaLXWYWX1awtr92LjtWvrqjFxXNY5",
  "key4": "5zShtNP88f2tuLAS7PoHAuW5iTkL1iEefHFrjuNgQW6eTk3YkV8USRe8JhL5JYUvr6iF2JB2nhCkb6XgXLDUsMf3",
  "key5": "4zzhXFsxh19xcU4AdscwRo7eRWXmYH1NrMo6ZrBrtWJyCaGKr7oQVsqMwi9syfYnJX3EddFbZnLu92gEiQR4PWAm",
  "key6": "4tYYKNj1yKsjNNZeeNEgKryR6JSw9WUNKYhdr1eqXExSxrEbmfaLMbQ6mJ5qt8BC5YpDxMzpXASNrEDkLUbvAmE9",
  "key7": "3xUTa4F3VsvofB31wwFJi5nyvitSoTWcd7QJjr4dSPk9Cc5uWvXLFHhdV3tti5UH9Q9ke6tHCiumxRKfGVoUN6ST",
  "key8": "2wubU1SbGQJFmcpUhXEjEknxLmYTYpwt99duLXBJbyiY4oKmyX8a3mhiRyKX3AQporLcZb6fR6L4zUtFqTtCsu4E",
  "key9": "3UDdtWSUSCjQTyN3rEVf5u8pEg4DnjoTuwk5DZskCrXtt11XztEDfkj7T2zj5AbMEy1FJxqniY7cT17sRKS2N7aF",
  "key10": "224HA12qtQcJEk3HarvgTPE45YA51m8sD8DWkqnYqknWozwoY5c3WmqChUTHjYa6idGyyWpfQwy7ZFsXBQwrpMBQ",
  "key11": "3BSHRgN7EdFoJeDvSdJgP2d84tMWUdXqA91QhdR8yExmeFjX4SmEuTiKsygCnK7MZiPi6gVhDtec9MV9M7UBtn4E",
  "key12": "4nMFXF9pHqU8Bm8r9zum8M7azGRiyc1K5J9axND4y9nTJbomFaxA58fxUF9mrGj4Hm4LtpcZRaBqe3csDNw3NFgg",
  "key13": "5oJY9tnRWXoUoyJ7YxU1t9pmJoH9xmWxJqSULTKWg6yj4AvggbKw7yAbe6SRR4w57YrcWtK8APC9i6MSxqAbj57X",
  "key14": "34NgfHWFGi7VVNcb7fxjNoM46uDHpS1W7KNYVyJSM8WPiFZJuKCKmbjiWyxMHATZaqbQLvWBFov3KZXSz1fcSxFn",
  "key15": "5MEyoUkYiM6fspk3aKuWdbrZz1TSUAjQK1aDKM5qvEG3KMC5paFDb8Uu3qTNctFgc7LH7t4gmgVeTyXcDcZH5SxL",
  "key16": "58VK5gi8TqG7kFEnCWWPjfyiQkvoFE86RdhvTYDEF2BhPEfQxSV2kbvxHo9BZGVBunbH5qxx4adeQscKPgj3wjsa",
  "key17": "3yVZFRFXi5Tr2yvwNx8eqnrcJU8Xe76Pukj34zM1vvU79RsswGkWN2WaEVsmdfZ7NGHLFVfarPqaCQtHboNGkknk",
  "key18": "3tciW3dFrCoMVRVMu7CTz8DjyQV6BiUkUrLJhhNE9qF3DMQ1xCM5Rg6bP7A5K3hs3gLbS4DQDJAbxoQZSr6NM6d5",
  "key19": "5u2RJSwxz7K2hntFfcXrm24kB74CxApkjnuUW6JCwhgDVBnjdWbi7qQppXBcEfpCpmwSmbuewwtV85oKMdSWr795",
  "key20": "5F6CYHHUYCXZqFDBn8Sofegw5gWFF2nyTKNUkaThcuFNP2vBUpPRosjAvpBRNKjWWPjXLxYcJ8DjNpcjVZUoNaDo",
  "key21": "N1nBdfEvgv9oyBGjBS3zwjdoMtiu8whpfsCFFUQk147w49nb5Vi4Sdpnh3TfWK3WNbm2rRnrxTKTQZRfRDYqtKS",
  "key22": "Fbceq2jyAmwRy4MDoGsf2YadBQJrLNMrWXsVbqQsE5NCUwkN6qKAmonjUbAyyfkf6U5V4yfDCxUJAScVnvCKYJX",
  "key23": "5x5cEEfcCqSyj4AZurXg2W5S5HTkuU1pptbkr5d9JSx1fSsR8tp2hx3beypJTi3nSGdsYYv59VZPgK63kSmSNoFE",
  "key24": "2r8mZWnHAwh2YSxeKLTMR9xBkezbDZf597GE68C8erpeJ4xHyJpK8URuZSaH6X7S89urA6CdVPNHYVmkiGcKApjt"
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
