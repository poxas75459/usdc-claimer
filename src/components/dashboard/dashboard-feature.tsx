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
    "4ffa6zGDNqSdMGdLoFWPEqWXaWJZANF2YgS2m2ocztxDpk5ccYoiBynzyB6SkRQdxeRkedUcDbPvvy7oAFHuw7Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XC14Uv7WEbGuAPZ5P4P7jmcmm6frV6yT8UJ4nXZudWk3yQsc8A5ezZHC9Ea8U45MWYzSZdi419gQWR2qKeGw6QX",
  "key1": "4TJKnVGiBnFow8q3khfgzqgAFFZSF4TWtJUoPchdANtvm2L7bnQCKZGioTUUfDkDiymS23PKXfBFTYBACoKworRy",
  "key2": "zytFykmT2rDfAShejC5S6pE2nfgd35vHVrfG6zmqVe84fW8uZEMMU15CT4q6bbyrDykDp5fxERujkj8dkeBYb1t",
  "key3": "2ajD7t3jebNwfj49mZ9naRK3CBfhynsy3DjP42PCHZj5GpvENBcbkBQt3uBAMzm7mmHjfsfTLTfBS7My8bbbMFo1",
  "key4": "4ctFJ2xM32XWpD2C25KA41cJaW2puFauzFdHCtt1fwAsbb2KmNKFtmoxtttm362fAScpCiQ94EDriuXgHsbHbizz",
  "key5": "3yoUHauSyrDLEo42Jj5MiKKaADv747WvnnVcdBRX4B5RRJ72fUGBza8fq5i1z8sFXvfDEixpBk7dbZ1z95GrQDHa",
  "key6": "63L4oxG4QA5RG6LKVvREBBCAfAWygX2F1z5HmB4sXn4Rwjec1qm7xTLurkqdJvLmRKjvXbxVN91toX16ZpnGgD2c",
  "key7": "3hQEBSqtzkV3ssGC8cfuwPKjGyutCMnXKZRsxB5LJdWSsf1hroZrerpPtuTKPcVs38zAou5tGjsbUoLqKAztW94R",
  "key8": "49uCFCnqD1SV1BMKp3U13oxfQwKiFNFCh9bnjsioVf6nU2rH5qukXE97pgtmpiX62HHVNYc18rj4WVWcjMThVmEX",
  "key9": "3SEeCqYoeUJis4tbuChv4WH51pTJkVEGMozf7gGwSe2vJuqfJVkyEoDeVD3QoyN1vs7fRhGBEAzDTUDEFvdjep8W",
  "key10": "3E7VYvJrkhGpHpW1Ds8U5DLtoDwCAmGzaqHb3RYfZ2ZR1jxWSprKnsHdQuMFDo6gKxmDNm9EicP3TGyHV6MuC3Et",
  "key11": "1jArQBvhmg16Rz3gojgjXdUhko9VTxnhnML4XUnah1Wb1Ke7TCmdouiptVNgGQDqmLmpQWqK4EWrbpC7W6jVvJk",
  "key12": "J6o15c3Xn9YfiGogY15YEh9FXVxTVSvf8QhnreuD62mvSmXfLQAn3PKpojPuy8hNWbbeKCvmWTWt5wobwKBK6z3",
  "key13": "5NeJsiL5NwxnJ6sZW3bHfyS9aZV77ASW2csPb7jdgxhYtu7dXzHDCnKDRbh8XFgmnSJbjbFEgJhkBCeWFATK5hNw",
  "key14": "2Kci3kt6aSz9otcqVNCN3dQfVgMDKwKdbcUdY29fwDZx7G1n9WvbWd4aHEVmy4eqhwWDfsjp1EkP2pFt2WzG311s",
  "key15": "5erJ2RqA9k7zQCnbNmvgctUPXXsd5pdeqkRLQbbHdm69f4bs5vWudjqEJGiDULaRY5HXxqWwCWAhmshbGjdDuFWV",
  "key16": "5LeafFNExUtjoJzeXrB5XR1R61cbBQ3kxR4gsnGSBMzcRULujGnpQEMSyTr3QGCyvSp5tJ5kcoTFSANZB1iJ7gTM",
  "key17": "P9ngAnrUnzBco9XhWT6QHAd8GGGRgYhYgdWX9aWGF74xxpAVDDC8U96kUJrTdrPVppzigYrqPNoQdFbq4ERawyh",
  "key18": "4dpBMdi2iFE2roZ6Sr13vV4WBkfYo7xYHWhX4F7whx3rZ5NcuuqLo1bLydFcUGasKy11V9fJLnJ7M63vC28hxFLf",
  "key19": "3bjyn8xRMoRRGyPjbi6QoTf6yk1eWvDg3xYiFmL98BDBpQTUuX3NoqorJgCoPGFGVvmQbvR9BJmCU3anbxXdg7Uo",
  "key20": "4X7Kk31cfvjDfQWdKs4gJJGGzDFxJ6wFskdveLE2cc29CCoUGHRMBxxyx36i5pyMZ4AAiX3Cb83UNU8fCKnBwNXY",
  "key21": "SV5StyuFjG64BMcqp9nzBBf6d9ghXPGY8MGaFSBkZ8GJmw1MwKoBJ3iMJLJRLH24vu81YaCDxABKXhPLBW4bcFj",
  "key22": "5euEBYxYs7AKbM5kZWonrW7mTdjhrYyzs1qLueGiSv6wzHP41o5DcBbwcCwuJZ65XLrdtSs6gvGvuK9VDiYUgqsH",
  "key23": "62hKEG6DFeeRaUqCzfaS5dj3KUf3D9kd2zbFvbbfpZfC8Wy81ieneJ4PiozvqPvob4QhxXyWJVNEeDsn7szRCjtH",
  "key24": "3JT9Dtf4jsdfSpC5ghnrat5MPdVB3MurYUaFDbQsGiTrn3Cj7E97s2x1vqLtEEQUAFJjtED3Mi43a5fvhFYMnYH5",
  "key25": "56NMhJN3hjbJTTh1va73yuf2hLbUQnvTCWidGr7UuC5rnePY1TcTvQ24MiPTJ8X1KuL5rhXxzFNxov8vjpRxVoKP",
  "key26": "5bsg9dFwdGY22BYCmkccoYcbo6TosqgaKorQpMYP3NonyNUuiZPc7BkWwofJxZ3wzVqybLN4p9nVTLwZvUFGSALx",
  "key27": "5PmVww6oijEmsUM9NzfcpfwHso3NRtrsfV2rnCs2CsfX2SKmTya3pdH7bhn7FP9bLiLk85ZcQYS8BmaP4fXaM4CG",
  "key28": "3PLEXscZfYBUwEaKtqiXaXx4UHmpizsU19q99SQDiGMZDAkGzH5SQJPSpucf2x2DA6VeJnykDkK7VLWXUMdUFHV",
  "key29": "3jMqPa2idYkYdnueqHLqeDGPdRSGBVoaDceKut6EVQeDra494s2Syuft99bD6EzvRrVVsSQyztoj88qQiuaoD3QD",
  "key30": "5amb8WWtbtewVTe7w7FDN6nfCE6vLkmXZX8AQbRaUDTvMASv5iN9AiSqD93BZPSoN9vmDf2rfkBAfRECiWdmap38",
  "key31": "645mxKJ3WJJAijQKECeNVxGJNWeXPvBSCVy7S6Szrrbqn6dobFh9SK82Ej3MMwFUWxbR3LmHD4E1VLR4LmhqD4Pm",
  "key32": "oihBm5qTCVf8Lrtm14RzFZ2Q9FfiAuxMyi92fxjcMQYfKQ52iSmpejJ4TFWzFvSN7g6SNa91zhNw3ATs7NoPZji",
  "key33": "5JqxmucDHkQgUFxySMWLcN3sXTzadwGFQ8YTDW1F96JMjecmpQLrwoCNiJorHAsxxAvrexYVxVQwwpXpG9kc3Cmp"
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
