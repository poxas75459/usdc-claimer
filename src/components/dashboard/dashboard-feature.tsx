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
    "5yrbEdKg31V6ae9JEctK9h1nbU6JaH2FDDmUJ39ApTHUtWo29VWD5h8gxVceZB8UMemRRy4sDxBsnERmLGJQXYP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHguUAtBuEJQJxvMAYuf8TK9cf7bFktEbP4jw57wd1oiwaw9aCbnF9Mwyzm6EQXaGtbjY7YFh6KjZvEcKAUZGVZ",
  "key1": "3Jw16iuxLKCDHmfmkf2AVyE6gj4URLtVuQpNBnjuCz1TfHWS5QxS5TUHqXLyqXcHgVbmVS9rYpfDfbhzfnYEVbgR",
  "key2": "2BRSZ7k6i6SC4GfQmFAvJn77if2bVPtMCXzCr76rdCaG3LWkpttjsFQqzNspexfn5D8iJ1xTwqRUcBcr3GJm9mKB",
  "key3": "4QBtbmU4CziqLE8jiNg8EmrLP3z9AP3qm4WdcSxTHMnvRs2ghpphXvHDxVvWtYLbckCwknH37UZ2zDHvTHahH9vo",
  "key4": "5yDMRn2h3BTJb6YvRqBBp8EHZMBmkREqSDRCZMHiK5u68oUWYMjsnNxtoSABUi2fnsLPtgy5bmvLNBw9nQEVuicb",
  "key5": "4zDwFHTmCqgVErMiFJXkt6Z5Eafcwszexo6Ncadm6mKweYF4GfGvxqW6qz8psUsGXtz7RpxT7U9VyD46GdpBPAKq",
  "key6": "4r7UNcUT5bCpdPDLeDunXUy2j52GpRYBpHSdbDRgjDg9hZvUhmJe2pHdgsgT3JaQnvd3ZWoxdW1SzszLGySdrcNS",
  "key7": "5PHozQnHw1m2njvUBF2hjEXM3CWMRjGPsWRg7inwCErdAYmkmcpE65TDM6WKbWeih8gGkz8SAdEgws3zBtZwE2jp",
  "key8": "4Xgcy2Mo25xSDshdXKNyHFJyvn7XgYx3XADwmfyqUp2WVgzY9ifEEzpwwQm8RM5W5denpj9s58CGm9vABpBYK9iu",
  "key9": "3hQzXY6P6fufSEtGed7S742jregFxFdz2MssWeynjJWkurekLJnPPRhYdgUDADqkjjutbVMnJE9iiwshaZRd1CZa",
  "key10": "4oHJnZVcJvo3WHX1p2GFXtKgoHkFQstk3NKY77jjCpryLH71mGzmz3keyPk7pju2DurSkBW5Mbg8KQUXbQ6EqxkZ",
  "key11": "aR7PscujjLuF8x2qPHkZCUPHCxXqDYSKe4QLXGTY2Whxv3hyb8Wp8xiquR6EEm5gaVB4eLgrJt4SS14AfLwsdt6",
  "key12": "2tpDxfrqkSbSgTza7ofS6i9LH4HZbHHXo4nnDGY88Xs81K353HHrv3eYm8CGWpMS12Bo9jUjhaEcr7JaYDZgK6TL",
  "key13": "4yQ6t6rA9mbEpRz235gsLoTW84LJBmiERKzaJwkWzn5B7EpXnzEkoHfQRUvWbWugbuduioHmAJ7jBWXhteYJ2GrU",
  "key14": "5bu26P1aWJEcwUTkL5HxgiRDDhyTcPv1uNFhHeAPD7GBtVXLDkxNypWnZ1oafsEmFj1bfEqeSssfzJLDkBV3MxpY",
  "key15": "33EeB1iAJySzoBgNLSPy7YGG7yE7H4ut8rXhRhM2GrdfjTGEdU7fgjNeM8qaZyJxxCgQwxeyx3YpUYHGBQPPER7Y",
  "key16": "4UifmQ4E4QKFZJtYuJFiNFkir99iZN2tCDYq942YdbUEayqoU4A1PV4ND6YDJ9RhoLJYQvRKNHHMV1Z4Ju4AG6ki",
  "key17": "3tZkXMCckTCdmMCximSS86dUocoZnKyWEVbAT5YwaXf7ztTjuuQBt3teDgCjK93hWngMM6Rm2SK1aXjPLiRyLu3P",
  "key18": "2RgqAf9tVxz7EgpkQY6ZCV3nJ68tgeXwSKH8ySiN2qXbv6czz7hyVT1Tg1K9tEDG3RJNLWkbFTeQvXFLcX9H1fmV",
  "key19": "362R3C8yB2dbrfRvxBHjzidTnZScdh7DEUKM96GVBC4n3e1cyw7na6CqqdDeHJVz2NtmEh73QFs98yfNAHvEyexH",
  "key20": "62bcmgKoL8Zet99ygWticKCCU5ckUqYudu875UAtYswc2eiiFAWQcqemK4Eex5FGgiFFK5aFT8yzCd9cRsZRM9k7",
  "key21": "4cbLkooyACqnZnHmJJ9pK7SrFzA3KRVemGBeWKECdAfPxEWDKjDaCiBF9v5humVywDk4JTK2M1LFngrfgGTbb5MB",
  "key22": "4FNPqBMUwPanHnwdKfspmFYcgoQFdujmyy62kWkAJXbusMXC9R977sHwt1LBXjbHFaqrJZASnPMLaqE6cJDVwcH5",
  "key23": "mnmCkhuLHDtDwS5t2sixCFcsJw8f6khM5PPBL2SasuBf4egsYs4v1fFGg1YjvePrh6B2iwc2PwrrUrup3GgsZTq",
  "key24": "mfAdU17VJQtusuFeu4nkj6XGaLTVnno8tYggePTTcsjYJJihSa89PW4MLMruhJ7g39tauYdM7q8Qt6msJB4hmm4",
  "key25": "593otCRmBKTKvVFx4sehifZE5LDVhtkdhgcVSG88w5tGWt8msPVEf5HT8Leku2YjokXV2wFPABxWDMSAwfd7p2wc",
  "key26": "4M4fCgyzGEnuid8ow9iThMcnUwZFSv8ckBU5j74D1tddq243k58jprZsrWM1SqysrQRKo2q1p5PL7Gb1MSxgrnha",
  "key27": "2yh543WBe7iRM6K37pkcUa1CEY6NMbnjYPtRnswXnQcLv8aFDGH2pGaAtM5PnhNeCJd8vxuMbh3tNb7MtN6vTQNX",
  "key28": "5ReRhxzCBjWQH4uftUm61aPSAMzEhb6NPE4e1cSbFri5RU1e7XezvA5PDkhxzqkfAPe9hiQjveTBE5BWwZBoQMTm",
  "key29": "63Ur2KLbV5qdSG3kDv6iWRQVc4CWDE19EmPpAfHLkxANryq78e3Ch4v9f5bDMZDwrsMUcFKAG21rGXmLDEzijDSR"
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
