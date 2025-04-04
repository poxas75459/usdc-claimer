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
    "3Q7rhmjsGF78qPc7bZBuoEXDiHQVxwT4prpHChtTzdGD5pz1XLisggnqFMqTnfGbvDNW6XW9yfGnmzMmFobGiNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8qx8W5wH2KHFPSECExKjMttxEuam2SnLbYEMuYzceMRiTceUwXfUQpb52H9iq2Mg4eTMdGNGyY5TTnzYLyEQnj",
  "key1": "617Uews3MKErR4yaiR5uxwu28WzToVzvvgRnvMoj553LuduPgsuTeEyaHXWmmkS1tAJ1ohYZhHh7oCB4RDA4Ke5d",
  "key2": "5LzohicyK5jy1PynUkxxEC32dD6RewycDVZpDSNydh4MTKzi6ckUgDxy2bGkRpA8kKzmsXPHRT3LyeZD4fh7yNrq",
  "key3": "31Lb8AERuvbXiZuxEXANibdN9ewomhuArwkzbbxii96LYngpH2dp16ttfspMJSUUZznxJUAkFsQPBfY28FfBiNMK",
  "key4": "4EWBnFPkChVZqwGHUqfnwZNq1jETZfnSmzVHjYCPXDy5S356wvevAg2DKXngTVDzSGVL3PcERN32UDJfNVabA8sg",
  "key5": "2dsvDGN4N6Bq5EBL5wdGQbqezdsqwCexg832QYPoJepYfpd3TVodvPqav6Xca6HpmPqQEyrHU7Zpibt9zeGNH9MM",
  "key6": "5DvFFtF9tobwoRdPt7o54QfFNVa5kWJbJGPkyPwTNJKxW3yaT3QE75J8KHqXRREphfz6BEL4c6mGjoJVoVkuajZ5",
  "key7": "2gWFhSGtgLyyVc6oDcqqfKwChfEYzZ4HxaasHFh6rrb5RiZzTf9bHVfe5hPDjJx7UbrG1749bWwAc7Dp6FGKpRqE",
  "key8": "ntyCstUMaW1vEvysSD7TWMtUn5A6DcQ4FNaebNnCG5WyYjmX9fhhQsnzjsqbgmU1ZtHdrRJYAW39mdoT31vPRQH",
  "key9": "5Ea7QXJxgD7oTuBWbxNgMa6jZSM78MW7jrkTB5haRYCVaTViEyeAWfpj3cyQgs4p9fxF8RVYKY8EaqkUnQJt7kb",
  "key10": "5h1gfLSpfnjA8qiWVTAoPskdmh1ZpBNxZFge4T3BCmMdSyQy6KLtB5wiEbWbW1AfVuCT63mFPP2nFxEoNPVwzpHS",
  "key11": "4vyBb1TFQEn72KsrUubnbn8YuUSpKVpM75jNp5gw6eA95yiBZvZF6qPtYoo1w5S3vspmLCsh7tcVEvsti7rMVCtm",
  "key12": "h9Ja9d1cKNAHT9oo3pymck7AsNyaWQJ4AFVhhPQivzk5FgYrT82tbzEA1U9wCaPDE8J9pdWkw4e4fnXt4KSyTJg",
  "key13": "iWV3jLoPpjHXiKxHWxcFpETGN9nmDEbt5yYDQXLAKXr1zzHPYojFpZyYcSrxcPdumoUG2mKav9xRMbn2skrMgWH",
  "key14": "3gMgUTvoPkidZ1FUn2V2eigLzvoYvrBzR9iboWvor2u1mwN6A81jh8sLxeYCgReg1Kgm4x59QFt8JEot7LXsSisd",
  "key15": "UD9mKcLS3A1rkboJSnPqZQyjwH2ScXNxhN66Na6SHdJ1opn8QfTk7ykgGQxZsc4jgSwmoRooGiaJis1nc2Jo9si",
  "key16": "3AUrq3DekVikCCSxz2uu2R13GHvQ3YfHyidnL34EoUsuzsiau9LEVmarGmQaodr9XDRE5uTqYxMMZvtWhXUrA6hJ",
  "key17": "5rVYzQVPbFZbPgeQsXpMqxg9jX3qhzgLwTcwmiGdSdwscauB9jZTxSNExsgPTWmgbYCtetyyVRsgrbPCUmtyJthG",
  "key18": "3sEuaq3JPx2bRfv4Kd3awvqiJk4kZR1zSATzHrPcVkyErJYuaZ3KVVGQXLsrRCQBoZbzJFWppR6ifWACgaX55izF",
  "key19": "3YyzHmpEcyd5TX5qfGsshVaCiW9v6rtzUY5WPaHKwNDBbqkCXruvzEmFEgANVT3iAqW3cWn7QXcFzffaYAPzdDKy",
  "key20": "5tbGCoiFAVA1MG2mykbGRJUoY8aAkxKBFQvpiJL86rPfnF251x7aBn2uGjmxiuAzfMKvksfV7upg48pkQ9ckpC7o",
  "key21": "29SAUj9EUiYMBEFaM1nkDtpv81rUZ7Ei9BDgjwV7n38gYJaZsdP7R9r7CBKQrMaZDayadYbQNRgz2KFvjxstegaM",
  "key22": "3wFqzB1jtHN2RUm63dFzMkhFaDCXV5d2LpBgMj5cJLzrib6J8teugvcdKG9RsefcnYpgLQrMvXqfdcYAnoBLp32s",
  "key23": "WrBUt4VZQhC3kmgNHJ2Mv5CrcnCw8CLbg3frD9CrmZxcWFUMuw6XFmfMwHXwLWbLr1pzb1pxepMNgSVnsH4vexY",
  "key24": "4CW2hykGnwjRUekJSyRVYNbibhxXnVy16MMEce6tHCu1oDvdigvmuWqggQMqkL6ZLEaTJvr7qmxvA8o3xzUw1gNe",
  "key25": "4fGxVPZ3911iSRjRh89kQqT2PJNZ3DE6HBSKZMiL7VEQ87H8pbW759m45p5UhtcGyeyYtH2UnfpetqiaNzQwyiH9",
  "key26": "5sBCjxyVpU6Ts3rjbjJFwEXCSqEsXWTxpiqRYs2GFtvgampQjSzkxrxhVHZAYL3jMhM7fMk9XTwWsXW98mHx8gnq",
  "key27": "2vAKzgXPtAc7YNfZ98c8TqXJMnjxCTZZkjqXfeDEdy7nwhsBRkmCM5ATvz24oj47zhSrndVtLD7Mv8oc5viZp4JP",
  "key28": "2j1eNEmAwwLMGY46ih4A275fPEE7zECyUHVxnSvyX21RNfd9d5TfbzgyvwChrb3xPAcAz4UQRkQGPPu8hhRbgSZh",
  "key29": "64bwENJvFPN8gEYiCruuwgYbuT9PUX2mG1zDhwea4pPXTKro5phvHQFqpgij2BQHJHsKSx2U99ZE74uc9ywKgncp",
  "key30": "3iYMxWtzfiQD4qRALhBUFUQfQEQpJtSPFA2EGeSZrJng5F1aRZfbwxAJ4qkEzvqyYxCTQTtz9uwpss1wtywW8z1k",
  "key31": "QEXVvxak6BYVBPRrMkm8VeFz5WUdMACUHQqaDoF24ok6WQtrxK8cJ5NndjeNXVpXxN6h6oDwdwwFt51QA6FB8LP",
  "key32": "4VKfj7t6zbJ2FnBynVgaKrehc7ZdpVcpggTPKh9hB2SLDkG2kbppGnKiaGeEeN6mwR8CyJS3dx8mMs7ZrzzZUBot",
  "key33": "3xWoe2BdQdVANGmHjppPvY13EdL7jW9NqvUaozgAktt7MXcJFMXhRe4HUHsK8Zj4SPNjGfkoUp9Usi4pErX9Hv7K",
  "key34": "gf9WP2w2kRpWfKDrWFQAbgbqaQEtdBo2yuH2rKvus19dZks2UsaZpJjWKqveNFQeroiZi333e7E5Nchsg3T8MNZ"
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
