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
    "4sxfLLnJYhh9JtMpTqegv2ThdskELgacraRoJ9ZtJBAgjTfVzQ1h9TnR546rPAmyVbfRtuFFgFXmpJAxLGFV2Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXAPPEKiZiTPXFwoDPMLtrSBivQEXZMqbuGgfd4523LWYTTSU81saiyZ4GsPqCsQLcpze9CEZxiKUztBUpretjG",
  "key1": "BdHXe3QP6wDE6jeCcDQUDUkAFqXUh1ULLtmUq6A4LN17Xr2GJjbMueZVZ6z48zZy9DBMBe6KH2DwEe8uC5PWyWj",
  "key2": "5Uu4gvTm7Uy53TY3YwWVKeoP669qyrHvK3TwAjppVwApHA5v6j1obbwoTJnQSJatjue4gr9BXKefktN72dsJmfMm",
  "key3": "TWfH2pd7V3pgZ4rhUrQwysSi6QPnVCNJBQAUGcdTjrUw6cnWWdh3PcAKeCDG6WEJPrU3d8qsRo29sZDKDAHgo8M",
  "key4": "2Lh3DqCvCRGr5FwmzxV8tYsMYqJLEeAQXNdrHfx1xDR6kfoVw5JYW4p6xrypHghv2coNnzTq6YcfhFQoLa6EkvBM",
  "key5": "Xh6W8rrmddcGJDXGVTTRYNHvNun2RnSKU7roGYCV3tfYeuotFAJUGPSiypvWS1RqMFNY2dje4Tr8pRULhNKHgYs",
  "key6": "2DPZTk81zhkeMp7memNjWykctxzGjPHEXG3auVZjhDWbq2bx61m3DKBi2wJvirPY16KvqBeFMwspA7sQ5pzSKL7h",
  "key7": "47vu863g4724LuYE5eZncnyQN4nC138fmXRMKZP1beKFuAhJwPKRstBrtsoAdZt6LXnCgJQC46amz9zEs2NrfhX9",
  "key8": "4b3cFxsENq8V7ZiwBCV3MBSLPu2cRFVN8tsbqbpqT8Jm8z2AHeMVEDLLMvKKC5yeZoGfyZPPi9yiogWCknjscRK7",
  "key9": "2nDxa4rBRjP9SzieSEMu99tu7PkjzDh6yPGdmT6FDhcZQZTCVbQHbwccethn3a7xSTN6bb6pjqKnq1mkYhm6QHa8",
  "key10": "ZRQVSSUGhBXDFYX6CxSZj7yHFZANasQxuJJi1goHhtA7V1W3cCfBkNy8nC5s4vR5YAjobge4umHxTaHzzSWVue4",
  "key11": "4nqm22NZUCTXH7thQuB1HDe7PEhvSKYUPQGnQo7REjRDqdX62xQdbL1itfvGPLVASAjhaMFmcF28KfaCViRob1To",
  "key12": "3vCwrUNPYqJi2CJcHPRaCrr9AGJQgBqd88m6VfDbpJTdZcQMosviKeeyTNTTiPurZYEM71xceXCtTjGTuECiVgep",
  "key13": "USoKDXV4uZuWXtKPtmkzx1up691C9zESXtShqDfYYQVa2gXuaA2r1oLXbRaDGnqJPZKuxAKuzFUveg4Ftdq1QiR",
  "key14": "2NWLARDcDLnqmYCsoJrVXQta9xL7iHQb1M1dtDYZ6Voaj1Nr5xfkgEWCQVoH3X4sHEx2C3hPb3UUDSNwPEmisCH8",
  "key15": "2R7AxdA1fMxWj3XbxgJsQjUa1jJcQg7sT4xCuA5RwsHDH5Y3MiFM8qbB9We8ZUTo62JrMRdN1SHywLmCmos6J7ni",
  "key16": "55ZJfPdLZTkxCEUnGAVxZfjCp8gUcjW3xBo8mgYhUeea4FyskuZ6dAqDf6YyxJXWqhBKd1eMMV5uQ2bb2yPsX42q",
  "key17": "2kTgd53U5bf4kHCP5sEp6QvFSTEiAYquMg2NgVdyFYfm4FRs1CGzuMMsKzSyzvr2PkenmgpxmoA6D5xfMoRfYvwE",
  "key18": "2YGEZfTWqUNGuRCLhf6PCRLBtgwxYjoqtD7EpvnQxnRCYw12xehNRMEYviGQMZ4xCJhAAfPX6FX9oJtVDERVV3A",
  "key19": "59bCwfwEEz4QEqRfj459phPJ6TwKfTBpgWsYZcdmhH61xTtYcpMD1xuehFK5gLK4ce5niGxyeL6ub1Vm5YyYMSNh",
  "key20": "38xNfNL8N6ygFNi3ZHJdjqdLKaHhuaWpQ95iVJtuxNKWCSqfqbUUhHo2RWPH9pt9miFBnitmTJ54Wjqw3mc2hnvy",
  "key21": "2nF5iPCzyZgtKYcPqAx4fGsLGK6oy5udLMgYKoN81yQTs1Gb5nFnPzHRJgScj6ArqRA7EH1EnoBdBtRWaiY3p1iK",
  "key22": "5JEN8iusxXYJ1XG4hz57iLK7xfHZJDxX5oxUvSeSG1u1MBxhVnzawpDVz71769L81jXGdGe4vu2R5nZSsT4JdDuD",
  "key23": "3ADQjunr3uVQbXwPmiet4XjNmL3yhS7HfResVUzDVyNg3x94w7QFpAEoMtgBJrWMnGjooVkWanBnSWQwQmQ5S3WW",
  "key24": "4gHBnRihoEBcNciDwEHNkvuJSehNPy6jFS1NLMDRkcLFyFUcsvdsndfvaPLN9CWRM3HLhyadsRV31fod23yURvjs",
  "key25": "61c6ZiqFGEZWJhBE6v2xWEC2zEaxm3wQvdANhnzi7ASkaW6TudtgDkMWU6Lf9JTENw7chX9VoGFnEoS2p7CjSEqS",
  "key26": "3mbffh7jrRgnSadxGUPxhemGSmu9T34rfCAMSEHCPqHXjdU5eSzjkkc3p96zLgw8RQAgda8xePQEutEx31DRfJob",
  "key27": "5iHRzBoDmjXh2fqV3UmNCzckNrVerJ858C8nSk6FqV5uh1gLdfR2t9nDwL7LPaWSZCZJXiSv4d8JiGhz1cwnFwMb",
  "key28": "mVdWcB6dFeQ5Sp4jzs9cEQtsdkD5URZcbXdhf8WhB8Z3fiYVYUgByZykN2Nsc3TsyTfnFUBoszkBYadhxDsVgGX",
  "key29": "5paZ64o5YWCL6AYvSAerNCCkFzfUxRJD2DhVoXRdwwFkSpiQNEHGq6GxHtKU3NW5TcmCNtkmhmD9ngE4rW4TQp2g",
  "key30": "2AAGpu9FbWwzCbNNNPyXBTeV4aUbovRzWQLzT3ZHdxbg44PgAMvh3u99sWBDXK9JACfkNmRv9tKcxrfk396kTsYm",
  "key31": "5x3Phc2qNa3LUbadYKp8mfR1ViQhc6iEPDrHczCvZu6CHiDH3hNUMs6CXX863ggsSyxfpWejyqdwXFG9fm188HNC",
  "key32": "47cm6kpopXNytdkMRvZjLuZa4qpfV3BFJ5VLXk7yK63AKXjp7tk418qqRT2TZCV7w6hBxdtab4aSbZZ8ZsWd5Yh3",
  "key33": "5pPRmKSgUZS5rKWi2H3Y2HD36P15PqCmsSSGioPdqN1CrAxuzJguoqPYVW9GikYxNJ4WVcuarwafVU8tApAnk3rt"
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
