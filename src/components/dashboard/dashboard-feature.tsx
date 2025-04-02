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
    "5EbhYwXcQadtEqQVUSf4SrpAF38HjPRco5Mh5GYJkJhEkikc1kTK8mCbWiV7sZCfAJ2m8iDuoX2WxPwe67hpNTfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwUb6Ji2ua73J8az8SzkxVNdkUsbNDUmwTM1YFfxiZo2W8bgTM6eSWQdy8BwAa7EH4a9GXTD1bXLvk6fyHEAusi",
  "key1": "3qdZNFarkhxQ8q6AmhuppyfL7Kjdwmkc4s2ymRumnJzDE99W65Mg2qWEbMgrNvDxDGv3yyFuxopd5mCrWt8mpEih",
  "key2": "3ttyi1Nj2rYh4F7AXYqEsdHyfuoVDt2Tws8VXcN7YWFUdNazjTyopBeLjn2akRDvy8t63UovkfWasAzpHjXxQfHB",
  "key3": "4vS57FVV1cgmQvdW8cz8tYefSR4jw8HNzQK8Bz7EYxyWvZ5SMykvygLpjCo13CPcbnr6uEyWTurhhgcPjhmxoYrK",
  "key4": "3pw3ipcGQMRN3iRzTBiprBwXjdgmVzfpDxysmydorq1aBT2DjXarcFKD8AartuKH4jtqM5PNs5zXHd2AptBxZ1Py",
  "key5": "2qjyHK3ZPfRrcexDZ9j5wwp5NVTpHremaRS9kMzsg7PnXGPJXRChSYUxKWEUtZwRqknobBrbD9EDMcbhBXKN3Px6",
  "key6": "pE2FNAHGm1YAFjTVYfJxcF7rr9uCQGDQPZG8L2jZXXWBciVHpLMpkqfapuDhBjsd94aqrDCZswpnyb4DrBjTsJb",
  "key7": "2ChbiixPhpGUVcbDMbByvCfQFGPmMpAWyTCpahKAyDKqwcdN4eeaTZZvizcQ9sZsfJqAzRPMiFEjNKZRpRccQ2gD",
  "key8": "26pJZQYTetTnWe9byYEDQBBa4odfa4kshWnixJ5ru21HKEvW787gQHn7dkVL8V7kenVmKD5T6feqVWF2EJMR4pko",
  "key9": "AFZQiqpWYnVaUSsW4iUYxuhRZE9qC1ejaJzRbJcBnXzSnLo6QyzRTK3btUncH8YVurnDz3UvNRBLJbbHCRd2whn",
  "key10": "58e3cKr6KQoGAuPdSYLbGUiMEc7g4nUJjxEoydVrgKBLtacxFzk8gDeuHyESozWqGujr2reYgPNXTSe6424UgNjq",
  "key11": "3tskPVyNwh6xbNtjf8jXuQ6zF4cTq3XsTogYk38VEHK6NDr1t6iApJACxvsuh7Sxw3YtKssaPutqE69LL1Lwrrwx",
  "key12": "5o2RWeUPRsj9RzD8WCVVa5Y1kNV1fLr3gxVYzJfuMqEUopr46r1XAqoaXnRwTpBpQ8GkDTv8F1utLKvXuWNzCKqV",
  "key13": "4fYD1rcrAeKz51dVFwg5Eq43LyEEwg4asKacfv7NWJpmXDq45AqaicjUETdFLV83LoBb3TgRnbpihHLi7mRJyiqR",
  "key14": "fEWJLJ9vjezBfDoXTZzeFMd1Bpp8gMXaH2novAjA5mQNFxWZqwmC2oMS1xC97sAjBgBF37HDmWYpL6AYK4VExx6",
  "key15": "2AT19NQVnL5DBamLas1hqAA7DATZGsNZCe51is5ToVg8z5k1p6dahwhFnPdjWmQsRNzx5rRwW2e4BYq1w7h8KykB",
  "key16": "QSaZrfDs37o226QZ2vWxvNLE1AUTCc3ZG6Si5sXd69PqdqDqxaF6W8aLeXa3mW1Yk4iJGPE9i345nY7YuMbyh5C",
  "key17": "4EaNVeoMFgqCNgk5MaFCFVM2Uz8uEaVLhriRQKWfi8YnrK6aqFMKHNV1ud8DGWVuXKTh2etGNVsVEPdodGmLEbh7",
  "key18": "bdBsSWEwYHMtL2z6KYtAmfPNHktG9RrCGMfiuLqohaT36z3Far29FYVeaJxHWBdhe2BRCBCLKxdF1nw9cNGicZ9",
  "key19": "Ni2SBqowV7hcJ3prMoku4n8DJndSqPyZasHE6kyFwadSX9rcRK4xf72K1hqmC4BAzhvPqEczp6u4RfuitagpicK",
  "key20": "psH38rsxc4XTxUA2gJZMaLTgPSzjHY17vUGz9jnwQTFLiMfeXheLfY7FELuumxQstWjg57FCC8NECiTX4Hfw38g",
  "key21": "5srTd8BpxA1mQDwJRinQatPTMAUGJwZgHcamzEKL2SPA1WrqeiX6fT787QeQ226CjVWngpnJ4QCQquBJBwBievoi",
  "key22": "D2KBNiSD1hQsBcrXaqMj79cXxhZ2vnVUsVpzVrfJJMaxVM3x72wkomZaJ5Lvg3RxXv3d6kUZpbdLCMQga75tDMz",
  "key23": "5Ldmp9cuK5w41KowzDrib84ctiyqjD9ubMbBmmpmj64x2x3N8h4BJhkmx2LUZDtUfYycLrmzumtvHMHz2GNuX4U4",
  "key24": "2arv5QRJLQDZWZKABAXdq4b33FPQnhD4kdRAARCoTnxGk8dDKu9bMbv2DhdCwC7yFUqsneLtVVYHcE1b91pDmARL",
  "key25": "2qachrymxq3oNCFnpt88QNkkWDUS6Q3enA3q7EfQFbqS9GeqvTrYLr1RvWnwoixSWHsWsesU5kAydGrux6ibGKtc",
  "key26": "4kLH4FSpFZdRmReiuiRvfm4Q5JQ1P5eZXqNGAisWbgAPxxcvRmejLW9ZWiYpth7zwmzEZg3v94aZjSNwi9R3cUeF",
  "key27": "5vm3f8x1yyaDQkf59EbacCYpvcUzY7AJJo46cbCACc7UAnWZG7n7FVHnWJYMcSyBZbNpZ7oNaygzh1tV3FSauFEv",
  "key28": "5sD1UtfULgGbgDNiyA6xyyiWfPo2VSK1dUpc4gGTD8tRGRrk54mxWZVYQMBf2MVhFeBrc8SHkkNj9Zs17jAd8mUu",
  "key29": "5zDXZqH5N9hpk826Q1ueiRAWzhum6DDPTNJzmkvQCBKzTKenbt6A1CqqmhahnxRcEu7fk2oX8gLyJDZ9n9SrjzHy",
  "key30": "59PJg9JxUJN4KGJHbmFg3P7nXMUo5JF7B328n7d3bva7Gn1bmwZrUQCxYgdJApp9Jd7s3zUNGi4b5nPr2TP5wDbB",
  "key31": "3re3CdpKbY5Wy3oGYzugfWeBZuS4Cdhue1vw81EXd55X3GYDN6ptKmCyhLr1TrPzm9uS6hXeH377KQRodcqNrop1",
  "key32": "3hvR8RZ3aLmi2VzRsqz3zW93D4bQaWsCXH9HuW6jmwkNFtTAweyJ74znW4xL1kjVxwS5wpt4rUocefxG5bg27NqU",
  "key33": "3HhbBjZSCrCP8nzPz8hQiTJoEpMtHNFwvzbWj9xePQSPegLYDAnhHFF3wvRodVYKnadc1QfuNnysXbaWs8dxG2Yd",
  "key34": "4Lijy4WyXj8m25DQgrLF93E12tDH6XXLPmcZ5vc7ZpfPSuy4ryGM6h8i7X9MwotYEbqhEcLaBC8GHtX3CZ47u8LA",
  "key35": "5X1v8ES68AuvqVdN8RrxFVHxgpumgQmtKRK3Uk4UfXLvTsKrHGAox3d6r1TbjnbuZPzv55EK6jUyB8ww5hDZmsiU",
  "key36": "3cu84yDoZjpmRNnT4sEUKrmzqZ7JWFkwnodn8y311fJciyf5qo77uGmSqkLxHHAhtkpBS8k2PkWKVxRBZYZzTEFn",
  "key37": "2aRgo8MXaio8jsXP3ocVZeSw7VXLUkmsc6JLExv7XdqxoUuo5svrMvY6FR8uyqeXD7kXpDw3wD8TiRQPMNyQf8Cf",
  "key38": "3rfssH86BD9Uj5BMJg7nvPeqxGjY9ssksn5hnzNQTJDPS6MbEBGS8CKJKrCmqJD1faNShW9KxSsGLSdBFWLZTcoU",
  "key39": "5MbB1DzfAwuoRCDztNTYMBkR1o2W8czsEUZFrcyZQDvTCU8hZdgWV5PtNxFPphEYbZfWALvHv616T6VjT7676qjj",
  "key40": "4Uty8wFYjveJWKebcvSXttwapFT2HTeaJJMBRqjxrSRCCYgkJGBkoAhikPGgExJbdxVjn5H1FqQwD7o6K3HmrPbJ",
  "key41": "5HtSefPkugjEzXQnyN7XALFQ7zt4RQrU5yWHpj2H33MgjZuLEgDTfKk5gQCnGPgCuJLhxejQAtw7rg4BGa6Dq2nE",
  "key42": "4ELpY9sTZXZCFKHnA9X51LkUP4zMUG1JKNSj3P46T1JYGtzY67nUwis77JUqTPY8uLWQwr1irvYf3CDAvQqY8nKV",
  "key43": "42Nv9uG5SDV6a4yuikxoQ1YZ5C9X1NqjQxL8y58N1KZixzWZ2uRzv5RCXESZvm5f2J8ssLo3H9WJJZq76fbfWctK",
  "key44": "oZvFqb5bJM4CKRKhRdr3wju2pvwRxwV4dfaQfTcH5awvi1pNfxAYdpiYjQ4hwsdFxiTMcqJ3DVySZUvkynijuzc",
  "key45": "39R9siNkKDrcEBK7xVAdVvBghmfXtYmX4pxcLF4wXBRWSEEe2VWzdeJgg9LioF89ZV6Q5iwvc3f6cqcqZffDska",
  "key46": "2yx5a5ahTAkqL5484dTEFmZ7CbSciFnCJFQPabQjy1nEADdoFQh9somi83zSgaZvcxuuCmgcFBLUL5iCNYWnytBK"
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
