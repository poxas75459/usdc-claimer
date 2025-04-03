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
    "36LCpcpiTYw3iLeQLL6kEhrwx5f6RReYoBTgFCyooTn4PBdf9DoWpZrK2fvbKAQ88XRcMG1erLp7ZnYxCFePJzfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9uhxx3yq5B5codohRiRYD6oZPcUnAGwoPVcrPFkhzwQ2binrckMFcwWFXeVgHx4gVCPB7LAsD2tiB5ydEmzGWt",
  "key1": "3YmGv6aCW7Nzdr1t9TAVd4oEE9Fkanu7oS71HFL9Ct6ShNhW5ehhNMbJ2yrxitt4QBzFfdjowaNK6hdxQjbGi8f3",
  "key2": "Y1jbnZd37stHMT16uEvm9ZnDcKHeDWkAXAjV9AtNiqaa9F6ScunNTA99bWsQbKpy3t1dLHtYEqZ8r6xusfJ2qFC",
  "key3": "2jV7JvqzQ8qAgRbgYFmBxjXydnYGFFpnvPdyLWkTifTTsJL7J9gW6mAtZ1NGRuNVDAtvjwHG4u9GPkaum86XSATQ",
  "key4": "4w9KdZnb6idy4hrQom3rpdY2FRoK5THqKMPFB24Q7N3gLehADkxE3DQd6MekbBPtpv4PC2x8NEVwCnp78DHgPXFe",
  "key5": "2wijBQJ7jtECyXP3Lz6rnvQD9CbmB9YRJD4ijRvFzSVXSvN3R4tWpRy9rSgvJrhDdjZyzPmGSBJwg6YHgaf3ovbT",
  "key6": "7ytjEQcMmQtgP73bm7a7XeD2889Z3U4DMPFpB2qPvaVxf9fDkGL5WFQNcDVYdG3Bxs9ghuVHZSAEfGjMBMtaP3B",
  "key7": "3eVQLcepJE58LtxeGn4ZLJnLvVwk66hXa9dyz3MLfLU9q2xkBVHDjnLUiYda6tbpzuTcPmE6KhkmCDn6YWbVFYLT",
  "key8": "obCwCF9VjMs4EDyHdFZ9LGamm5xWUL1mtjovLJ5q3dGnsp4B5Y9JAcGhZyNV6dyyu3RVDcqdoVdoJi4rvjq537Q",
  "key9": "4V2aRCv9LxxFX8CaJDVg7VUxFfh9NjdnuLyNgFcRaJE6ZBJHniVCPV96EUbAG7aQxvkJr3q3p4ZsjzFaduk2BhQJ",
  "key10": "2WaFodgWB4zG9pSy67XKPDuxafDJZHtvxKjJzxRha7uByNu43b4dGSgWovhxKtdo89LMCGLpnTGjwVatoRdbnrS5",
  "key11": "2di7yAKGic8an6Vg6THSAEgUEkckzUsCnf5wU7qMoPVmD3QWxX3w897bjzVMDYio32Qfi7qsjzB3DM2UqcQGVt4w",
  "key12": "4Q13KzRiCpgvt9x9re5djj2MMRJLoonMF3UMFnzN352MY13z7Y9XaYZ5PiJrL6wXaKCg6dZjpqPaLPUwmkXujw5E",
  "key13": "5ikYA8kYbUWWssrxrgfFQ9ymdJX3n9XdXqpHbJUxBozt9AD4nAHSURPB6iX95t5cAkiA2JZWUoWi2i8iVB7vHmWT",
  "key14": "38jonyKBcc7YczF5XgKKpLECaqXRg3ek7RszGNACNnPFNawp5wSPCt63ZEGEW4hhErowhvKEYceuo7fkF21kbQof",
  "key15": "3aiw1havzFDgc6WsTGahvmbVc4P56DTCXqs5Q7axBrQS9tXzcnUuDoyB32kCYt1ngzf6uFBhek5zTtLWCW3oj4tq",
  "key16": "4CZze9ivuBQ8S7Xr5sDSo9FM6yrfcjF36oyk2gFyKJpRy3HBezQoBJDnEtHkrsXBVu4vypLyuuiGuRzqm5cKsa6j",
  "key17": "2mmUn7JNLAq8zUhhJUwi9SXQ6oDszFbemHicHjdG3UeXZRxBFSMZWJYvpGGgxxLpTx88HPHcmd58rRLo8qZujn63",
  "key18": "stjTYYBTarSer27crAAWxBjzJmzXGRUcPc6iocS23dczNkky4tBWxqCqJfLhzehRxhMRCDUzrJfTAFyZUXFMtMF",
  "key19": "2sMmvAp3CUzh6SypFF1S4G7tQkYdY9iuMVD3P9AQhf2o7T5L7iQRzeZxPcRK26NPi4nCn1RZR4Fst9uTZkC5U73B",
  "key20": "56ufWiL9cBruuTdFvQEYpyCozADqhARh8Jft17Dx5cASP3d6t9A37Mr6YpHUbDc8SFajUwTxdvE7MbCSVhW5mTia",
  "key21": "bLCGocPB6L3ASUe1EbCyP6Gm4jMroqfqPU6JfoMjHY1KEVEfABXCA1zqcGjM2De2jZ3obnz46DZSZEC6R5eXYay",
  "key22": "47THQyCN9nbQNUXWu7EYctpBDp8iBNhzccpTHVCeYuqVpNbyn4xt9SJ5xnS8YEZjPouPEVPEc5B8MTA2a9FeKp65",
  "key23": "DHr1GjwCL7w2Cef4VT7aQpSASJsdKVeiy4Yg7EHgZBwAj7BevH9pgVVEMZtqXewMKCSnbt3vFJZHtYP68cbQ5wu",
  "key24": "3e5esAHAiXQ4JZ8sXvCKM2NwhzSJNvQzEnjoEQtSHj2skdRHndcWj9GgBsCCrRFZawAXSmSKT6PtxrfTVK5mBgYa",
  "key25": "4Ly7fkhwRta2bdvQUAStaXZYdtXUpXKZuVziX1RobijhXac5KXHGDiXH365poG8P9LFpCh1vndarMTfqn4uKnwxA"
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
