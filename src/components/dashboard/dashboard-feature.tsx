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
    "4eFWtW1vLAf3oc8jYcQZSET7jUPg1u42T5wJGY9L8EQKE9C7eRyC8kW19qHeBeUvTxz1LGmJLec2k9HWZ2224h4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpvcvofz6yg8JwKB1gZrTcNu24NBJykYgTMUeXWFbpqcXZ2KAWNfrTaFAZLkY8VVTBLDBQvv9H8Ae4vf9ne9EMR",
  "key1": "5H4KWWqF4CEdE8nFmota4kGDX7SGM9tmkmndSdwwcKjgmTUpB1Po6S6Cj2XpWscmd8hh5JZxwPnbjVg39xFYzS5A",
  "key2": "2rX5XsSwrsw3xsJgR61217gu2hnEQfu2QsLfZi3LhLVPfwGV9bq8zqFCJhRrQGzB5jjajJKyjvvoxB7aQBA6EawR",
  "key3": "2BWaeHL4rDKstJHJbKTWAUr2ck2Lj8f5uJBtxKopx4ubeUWfSheWqXrGCnYz27LfaLiC7zdDg8jcKacXDcZpYjYd",
  "key4": "4gqTx6spWGGSqoDB5x7gWQA6bFLGCzPALioj3KEF4JKanq66cHXEoWQYsNWFUpjfUCSAfT7M6xqJ7hgcrVkmu9HQ",
  "key5": "3MHZjYdGVUikVH3GouW8XLQuHgPCs97X2n6byEegGqUs1msJKpBvwD2SHveXuVVY7WTDrWDg9jzSg1XXvGjfHxRb",
  "key6": "nKEMT8d7SXmBcmi35qRHr5XtKRUaRJaiqbAmQNA9oA6LpU23Hsg9wpNaDGLJoW6RK8ZfETnpPEgtFTMmcDXLCfz",
  "key7": "hwaWuN4ug8QTVGFtNASwMU7zuypUMmDtrB5BSzCNupvZs5ir7CagdLmSWzruk4UqYM8dB7gmkiRs4sJSfWJPx9W",
  "key8": "dTAYgdax9Kj6bbpTgcjCZ8K4bxwANjycc2C9qjGvjTzjqwWZbx4b9oHy8T2R21MGTtQtDxJpCkbGWzViHw3LCK1",
  "key9": "2JqEHSoB32coQfrVMbyi4EQnNqP8C4P68RDBD6AwjuNxoMiUt6oktTsUwR7hZc1eTqNzt4SRk4ZXEPgUGoaj5eXG",
  "key10": "48qRGTWiDkjU6PwKLKzF7bnLpVNTPnSdF2HL9KbdfmcFQRoXrLREymHCKrwmSo5bgozzDfMgbcS7yg4WXZGSoQeo",
  "key11": "3f633CcdeVXTrcHLGKpgY8VJPjga83h91HWZc1w3U1rzFmqx2hvUkdoEHaPuUW1voGFbFqav42DiMRgdrwngJb9u",
  "key12": "3qQ2dEtFFsLYAjuJo2WYvnGvnHCb9oHBFQuHxDT4P2TkWjiXL2bFVq4Z1x9dGxwjmGDeNEguZ76TD7p9kP7mArtf",
  "key13": "5tw3fA2k2G86wEcotJhfEF8CgiCENgFSaG74wjaNGV3kYKHayVxsiFe88mRacPTvCXBewD4z6R4EGmonBr6emeQs",
  "key14": "5bVbtuEU5Nx65b8o2QBzCS4YjpMG7tkDmR6NRPs3Fd5smui14i9B1dBwEu5FiC1asnEsKUBfCg3NQy1jrdP1LKeS",
  "key15": "BEVRLD5HLokqMbmBsmk71Ao7uWyBRg77D8Z7YUC99VLKnmnu1xwtGNiJYhEzXwk3mQKn4GyMSg5xg52zyxsK3m9",
  "key16": "39mmcbvvBwvsaSJSg9XFxAcr4JsTEa1jFJwGbifocRA412dBQYNeZ8xXbmSqW12mYPqSeMKD3ZfZUtAdzxL5vgmS",
  "key17": "3diYBxnGCBWrSX3fa8i17pq1cUR2QnZAZo24wtTwCyoVyizgTHDCyGfvvyAPEnjbpfDikdVzEwFmAhMHqvw7Fcg2",
  "key18": "5imR5YFtnSmbo4RDbNCBSCake7QjBokJepKmWWuUXkfmJmyHofzt6CV6CeGkvBuX6uRXDByU7Yxtwer8YpfhT33n",
  "key19": "LjeAAu8gDKsTTerJpCX49YtnZrVjkks6fjQqqybyA8QDPVeMvuPgs6ckHVy5dPfnScvSZvJMDEqSTY9Scq3ghvM",
  "key20": "4htyPsa6kBsz461GqoQohPm4QFf2mX95DC6ZneLFiky2yTzmnVZrgcbxJZXDk2Pf76kuSGM1PyLs3ZdnEJpeqsa5",
  "key21": "3y5MpKa2wYXLnE2y5HZzt8wfUarpTWMiMAkSPLsbaWYsYYnPC7Cw2ttPvCa6rLRApcd2XUEDcaJ5bBhQXM9g4rj3",
  "key22": "2ekbzzdETQ9RScWM6sdffkLjZiGfQPPCabydfuvBs6WYXTaVpooNkVjSs9eUHZUrHTdPAkhpoUU2TgYwkCnGhaDL",
  "key23": "4aufKunaZMhnCjatj5Jry2tJ1veDWKg3y5tFKk4DeJgv6YvBJ6Us6Hvwhujfx8tABt8UQoETp5Lju81CUarpJB1W",
  "key24": "5pSc84DYXCV4RJN6SFbSWo1nKbH5LANbZrdCkY26HMtBnwRyrnLoWEXpJTTCqaPEvwzo4AnTRvNwExSEVTGYQrpi",
  "key25": "5uyLis9tL9UCBvHxHZZTCQuhg67of2NQmCF8EcnatDhHNq68f1Z7UrQWvzNRVvRcDw7e3socqX2YSAGHGocHQrba",
  "key26": "EkEjt3GwGzBaRtMPMXsuvNBcC3VfFBrFjRqeDn72XUM1nMdoYSGJ4VXdN6ZpmsRgYKUZ6iCwQMFbUNQzp1Gge5r",
  "key27": "5BKMxKCVcWcNzPesQuxTx25KCHYC7b5xANHEsZ6LTatahZxVc8j3H993Xn9Q798fcetmqRPP9cayR6gZotVM1zRs",
  "key28": "sDt8J65gehGYtGvymDcKSFq8tKouH1sSEjRmpkmW72arLMdeeTy97JhBhzeTEEhTrJZnJPGzYYH9m5VcUyLvbnx",
  "key29": "npf1v6H6aAKfBsurtBdFRaPwHdwbw3DoVJ3DZ4Kf3JdFkfQfwKs6TxuBD4fzE7Pin75njpTWXNW5a4mK3NEAyoe",
  "key30": "31dR56X83YShX5JDeKqmGzcEcoR2CMrPi58emVVFZfENn37m5M6qiUDWDeokTPdiBA6RVXMrjbzQ6kWoir5tXxZj",
  "key31": "57rqdMntXzdAkXfUfyYTuLh7hcRo1LxfHLTDH5Mrb1bGWirM7jTv7XSZ5U6mypzcNAJYhNqwiC2BxtbDL7fL7B35",
  "key32": "2jLvyef5t2uBjXevxrMpyARXhW1TKKpvtU3ecNhrG1UdUAZGp9z7vXPNA4M3vmPSym5hkAYH47h8TXGb6NqwQ4E3",
  "key33": "5m2oibiqrpuiQRJFu9mqNmhHZrUtctezKABDTJx92WGvT7y7gcg885tU347hNDJ8j5H8TgxNwVzETKJ4tV8wHExR",
  "key34": "3zhaKqWmMNCns8Yp9RYhU6Xnr6cEW4yaugdJbdeiY6eq5UgCC9QWcpy5bGzA283LuL7HJYsdd5gxTWkSH64VUar9",
  "key35": "53yBrZ4nqtpSSc8Q22KJwr5dNgzCoTEYtjiy6jkk3tQJrCWmbEBcgtxc3V8AoJvDpbJyB69etjSAstw5vyGG4p81",
  "key36": "2dDN4ATrRexf386nTZU77zAWKN4QDfHDai4fN1qKHCYFtk7GFnwFusAb2yyXX7mhjNL8dAC5xJV5SK1abXMUuNB6",
  "key37": "mpXfnPpy33sEHpEVpVMDTpsB8VTpbN6WPouGXx16qoWXQxg7jgQPYNvrcXYrjsGSTgsq7PpHkyFQ5XCxnM9PfGb",
  "key38": "5FPSKq56xxj7BmxNUEAQ3rSXcYBNfNmKvpmUxdo9zE5Ty7CNW3iF8EMjwhq8Us57w4CHjezrUEGkpjzgzrW9GqX",
  "key39": "2iwYS1R4pU3HYTJdZBpUJByqgRDGc4ErqsCxvnErE2LtEikaZS8YzUZLEuCQG4KAK3qHiwhKNCibtAzr77ztXgiY",
  "key40": "4mVXznqS4efqeusM87UyQdAjkHHskCu3EpTy81oqcEsDLnBN35HtyBRn44iYi5PAAnNzdpEH2ZWJkTksTPiXHph",
  "key41": "4ZgeAm3RamxMuNyTNrDuzvi22kvczBRxhrBYvP7gMSuaFrikb8wu9wLZSbsGHkvDKn9g7tSFcq9jU6vWiVLseDaG",
  "key42": "eNGMYzTRBLRiNnfmooKtXDsdJnZctPvrDDyYQYmhUUELyvkB1mo4QrCvLGe8A3Qy8y48kiyfkGfPp8R19W1ZyHV"
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
