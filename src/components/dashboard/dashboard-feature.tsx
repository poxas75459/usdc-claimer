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
    "3GhTsBHF4ZysqMuw48SFByr8MDZfDu8pJHYNFgohvWpMMkpm3Mh8RSCMUpXHvWSEmn1eo9xMqUviMBsGr9sLUkzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442tjK1WE21X64kjKGGm9Mf62BQ21XSoMekKQzDz42FSUEv7CZM9Kb3BzPc8WajVixjSmus9GxhireKiGkUZqmzV",
  "key1": "4quuyqRdyktk2rDcprSiuAjs3idriPi7mUCDTTCSESUKkYFEQBL2DLrbUX1ku8pYpHgwnS42zR1AFghd1isnouez",
  "key2": "23kPCSFoD4wQgs6SjLsxpuexNsootFY7XVUpCmfMGx54Wo2oAEyUk6dc8JouXCCangGaWcqLtMtrWLqmM7wJMRWn",
  "key3": "2kePQvvGw7wNGb1cgR8S933tAex954xXUjn6YRoG5kbjqhCxZCr6kLbrwTAZ4v4EgfZZ3hXAuAjYkZehK1MXCdTE",
  "key4": "3EtWgVQJzq7uVvEqTQiKL3H1UMJefCE8qSkeVpYBdyd3HyNaDj5G6nm7nhxRXggPqzur5kXEqm8QtW5eCVNLb5en",
  "key5": "3wPPm8bMZEawHtSsbhUxLYpSQoPnrA6JXHSnaVeccJEZYMpAnau1EPxJeM3fqaVFDnZhDzGdVRsvjadSuwvc4VS9",
  "key6": "kKTk6FnmyAZRjorFXQQJMuJuoLicWPeQnA6FUxcJdQStZDKyLbTEihbAqWLJgXuh1aY54hnpAZNfGyw16Lweszv",
  "key7": "LZy5Bkxpq1Di4nqTK6LgsogXWxfHZLhuAZYmvEqC6HHvrbE8MHdukLsjFpkRu1WMN6ay3GagtndQ9aRfafPvHGn",
  "key8": "B5VUJ7AUwfG2k8kQZUu73qtanWC9BfCMVKYdBrtXVAxHqJQo1NN58JwTYEmpLNzw2P27ywBzjbsuZnW9Z6DfA38",
  "key9": "5f6ZDvXT3ZwE1ffVT4KLQdeXnQhKxdXxCwr5XX332SqvVXVtaXBDfsph6Dz2wBTGhYW2HKrusRZQ56uVbWn9X5nm",
  "key10": "5MJBvVgX8g5SWqxKab83tszjUADrqPiQKF1a3LmRn2FCeRuLhwALrXe8hm1V5x55kHyyYAuuPj8Sa6MYP2xM75fZ",
  "key11": "2izZWLL6mubB1jTZpvXCjHxq8ofB2cq2fgi9Cnbzx84h3PAVmjSizDLfA4k1ioG7uqhdJahwqX6yVF4wwnE93LkU",
  "key12": "2GXEC8w6XRu3JqjNCPrBhrFhicTRVhpSZEo3VKYRuQJ7kxv8UDLrRZCeEXWYmvNBK7yj9Xuv5x1MuRdKjW5AB7yu",
  "key13": "kJMU4tqkikEF4cN51kNiLLwbiXPjQdQjf2M2PTqZchkAgnUaCsEK3fKtYsDX4V3ywMja3W5m7cDYkrWEHJJ5bkg",
  "key14": "5b2a2rcLvxmSEEw3NBiZisvQBk27muXg5Lsw85gw2M5S4bz4sW3o9EMnFp2dgbuNZzPbmveJNg2xV9bFK8mHtW9J",
  "key15": "3A2om3Ayz3HaiJRacoW8soVoY4JULQY1BKCPrMpRF9xSFv7akEnQPZ8aa3hbkaXLVpwgdvrr1Yq8r8CAwVzfj5kw",
  "key16": "4TtiUQPX59FdNULnXRfiK9V1VsouqUqK38ckWoZhkwhpu3DHQ5XkSrNykMShJw5Ttimdd2vRxVoSs6Brx9H1ut7H",
  "key17": "4kZ27EYStHquagnGzCxkp9v79b1aq7gnEabsYV9GsagCvpjrUw6ZJMvFp9G8b557MkMhZKxbwsXXhWeEjQLFjCDB",
  "key18": "4VeZJLsVVbdtP3qtEkx46E2d1oKQrg3rFwMTKgx12egQE3AXz4N1hUDPG1VdsuVCXXx3ku5mVu4hdoSvHqkoFnuM",
  "key19": "5a9wLXcDCUiNXxgFAq5fqD6719MJDhepjt1Gxtj7GvLskgs2TEcv325H3iaboTEW5NwPs6YZRh7udzCoXj8xkz5n",
  "key20": "51Z1UmGArT3jWG4R1yk34sWmPLLGXTdASJeJaxzxgZK1KSeJkJiLxDas9Na1EnR3ezKukJFCNCoccCzirrENzPf2",
  "key21": "4v3ZykTarRRu6xeeDCzd298nnuqcVcbwmyE84nSxzSCA33gGeaNcW5rNQUfa5y9QQ9bWvqMVkkHPHvf16PrSG9My",
  "key22": "2orqiLt4omfmstUwMvRjAbkua7uk5VS8kmzQM7wKYX4YekirECpXhYaoR7UjSUWp6ez4YPcRZeu2hp77isEGMAaa",
  "key23": "5ZCPDGhuP9H5TKiz37XSHhJ7JgFhnhr269GAU1aDEE6wnK9keFgZex1cywBsYwdzQpDLup3esy9gKdP9Tr2apLjq",
  "key24": "45roAna7G9Uv9eVNNTW2v49vYxcPNx4e5wfeV5Y6STtDoAkNWE8AAnBubP7SdNEaXYFzQmd1XjrdMLZeTmKkdmU5",
  "key25": "667kGG7kqQ11h56FESH63A8LJuP6yKoyhwbydkLUN2eKWJ1xjpNCgyyyuegYpCbQPPRHYLPJnPJBDp6JxSta6eAV",
  "key26": "4Rimrd1A2xw41J2tSHyZgFNeP9hubk5x1W5z9JowxPeD58FasrxSpVUt6svsWQWHbtj5xcKZNvLnKKjzzetFRYFQ",
  "key27": "FUcyy5DoYtzTqqQosHSFuVrfDbzYNWE98WNeTHGJrkziPatwphpNyawVuEBSYeiSsV8cduc8Xxoud5b4NTWGb9Z",
  "key28": "5vVieqPkXFtYbAzYdtAYatZcWZKxBfWMKgvnCQzWp3ZbiMdLH7iZU1Eff2oEVMmwLVwhnncy7Urx1JE9BTKYX3fW",
  "key29": "4N94FeghTgAFTmacuHXL5wS3W9vwjvjrtabwUt4ZWh8TciHduTXTn1EiAJXDY2o9ZHDnxLcvpRcF9L31ErBbmYAN",
  "key30": "T1odTg7RvyTXuqKg6ieTQpy8DTWHCcm9AyTZyBmy4bbGmbN87t24oP17c1mXnwNrrjcNEVNTnF2JmmKXENH7zS8",
  "key31": "2ytBVa4R1SJWa3Su73Umpu7nMheFjZnPBVT1nnP9sDBGEPvPQeyNQHvS55MH3jhgn7oPz6MB3Wwrx7QuULy88MWU"
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
