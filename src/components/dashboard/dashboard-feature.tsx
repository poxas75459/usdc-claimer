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
    "4JtXyGJqPDHV99WQ4FHf1NaSNbFoQStPmDr4oYqa1EHjEki2asTV6WkdSKCdp8oRDTb4Nj3zvUCCDt9jF7pKp69D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uprbsAtpcw9qFMvE1yMRY8UF6E1oMojFbQjjQo4oJzx2Dq5itpcWBqPER9PH3JujUFXDgW4SwAHPr1yf84LZoXZ",
  "key1": "2FhBrqe49yKcGENRcee6JBHAnLrZXi9bhZKZtwLJLtoyQYQkmU7rFuUGZtJ2hdRr84VsafVobDc9kjEQBJMBxaDF",
  "key2": "wAYAUd3EFnMcFNPyKRMr8ej5KjRRisBmFrnje274kCJCEEk9CPhKE758i6f363yDRn6noESM9HBbzDoZ9aUe27g",
  "key3": "8aX6828MxujffTYyTFR9HXtmR7R5GALzZXL7XGHrynPKushTKP5jrrKsetBdmDFuFXhkwqvmuWjpdTXTCfxy9Yu",
  "key4": "5e8gzfiQr4hE6aeNpkEYT2oXY6p1xU2yAVLp3RK9Ux27wzfmMCsaUoukswxfYfKmxESjTfzfdRBiMSQFRpFcd4p",
  "key5": "5VrPSmwwgUxKm4YhtnqubLyqBQGz4HiTqubgV97qQ6f6EAFJBxrDLVZ2mqSQKHzquQoGoLuL1JzkkhLbt3ySXnAm",
  "key6": "5bHaecadZkAaJ4GcyxbVEDS7YxWU19gJ1htLEVsQTyDzyoQawxjq7UTJd6Hjy9QmpqvpoFCr42TpVk9nLqVmoSmG",
  "key7": "5qhd8fLhpcijus9XuqHERPRMKYRi2ynqY72aBF3dnJ2uFKV1mdEHfB5RH7j6hQECVX1JWgWt9rpKuUgNBL7tCQ31",
  "key8": "63u6gC78AX7KG1rj9BocBLFUBvcVnTayc4rz8BtP8GRt4wUDc88uuCgKVqNgUsjS9fZqyuGAo6oraLYg9dZEHLRL",
  "key9": "2FFXT8EHv7RX652FA9PNvZ5GgjfXpx64hcwx19qiEDHfxeWaWhw93hC97je7x425oQ6BY4gzJtpQ4AAJSbEAhATb",
  "key10": "2HALipVaAEXJbpnUwbttVPuYqiLjb9MiPY7tCWxvkeRMLdFERc68UoPH7sLzDxLAgeq2piSG2uKkY4iNsantCiEP",
  "key11": "5JGy92G1jNfrNm9g4CZAuVUqypjDKVRjWevL9bprpdW71ZHsj8jdESue4iJHDVjtHGrQr5kREta9knq4GvQzHtD6",
  "key12": "2wb9eLKMxqwYVN1bHJGLUvF7CoCjdhxhMXRiEXr3WKrtiWzhCZjRrXu2P2r6wyYGrc9tuvfat7Ze3xfNZ3RMZ4yJ",
  "key13": "4gjymYmVzKX81KNWv1FQbR5LWqDLLb1JAjzJuC2eXJVVkjpy2fubfmDuXvr9SVTXSit5rVkrsG595zNzFHLbLW7S",
  "key14": "32oBumvxL3RZ6JvivHHVhgHgYsmyRDFkyFxMirkvzd9es6n6AMUZmhKe4m6U5YjdEjqizVetMJr4xepLPCNe3yx3",
  "key15": "3EK5oni5kiYncQefq4QWTF628aV6jLrRkM62aiqLoiahxPCqg5tevJzLWDi2iTrZYwuMs576XujLckrX3W8Anubu",
  "key16": "3DkEyV3qWA19tNDG3kikbBD4KppxN5Gv4WTomhpDVMZQ8VxQMfH5pw4hE3epXxPkngRADQbXBMW3LQ8aURxxcrJF",
  "key17": "4xvqZHsrQNoohZHiSpzBhuz7srWhNfWAp7vzcc4AJikyLQ1JZjHJWgoG1ukJUPv3dmFoyziJVusBK9QbPYvCMjBq",
  "key18": "5U6s3gEAamDdBwbKYxYo2M3pX3qKG6LUTV7DmTWig31JDhiW75HPW7UYsjX2BoUPBGixRuLYn2QgEqEt7wkFszCt",
  "key19": "51K5cZWWPqbzqeUFGR2ZQz6rSLwK3YeGuRt88EhZ7cw876sXwfFGBxgxzsNHxT3CYyzQBPoUQ3gjncioCix1q1kv",
  "key20": "2A7h777A4B2EsPYFcsPX1LwDf3RPLj7uEQ2DCRjJRQAmdBZotoPRnzgDVjqnQnGaSDB8iu9gtsEsxTPZvgrgzSNz",
  "key21": "B4dPNyvRvr38HzNCfJP1sykm2sVzxPyGac8U3PbZWPNQvkBG2CVZf2jsdUw34jzgsqqzDNxL69k4q41ZU3rYTD5",
  "key22": "dyVzpmrvjj63bzatQ87k1M2gqQ2WrQr6Dvot3yHuxPtDPL9fbMtb7vD3328QeSz68TWEbTUV3yJfjS4UtLf3WnJ",
  "key23": "2xAS4xyaWSLGkx8NPzma9ywSmBkZJzoHfKi9WjsEweieTabv88Gwa4fAAtZ3ALaohATFKo7rm7x16NmdFneB8oCN",
  "key24": "4bzmSYFeLqemiibGi3L6yJVokLgZHKhauSukXPKj9DS6zYPPewVQLKw52mCqt9cTYcRvantLyscibrGxwFggGKcu",
  "key25": "3xGBqvcPkKwhTRLHPJ98shAszEsykcRSi2cGzsoU6nmzwPrLZySWfom5QKV4Xtpr3yR3aKYKPA6U82LBZatNJvho",
  "key26": "2U5nBLDkfM3jNqcJUEY7S44Ny1w4iPRvR1yQHy41mVyiGVjPg1GAJSp2UKL6Hob8vbPUC4SLM4rZQNqoDfqx4Jo4",
  "key27": "3uQPaDKccRWhR2jgeQPYx62pBJ7K3e4p7wLJmLAS59iyPMMJMiyDA155hspDWuqv8BBSj5WE7vo13uc4oD8GVQsN",
  "key28": "4wmV2RsoPDzokkdtVd8KDtZrE5NSzeAehHxPUJDepApTArPcpbNCcQ62AfMLU5bHCdG35TeaQ7qPfqf7xJ62qJ7j",
  "key29": "2bL772UdwFRXfBMsckZXLoJ6rZE6cweWrVPcrQyWzYaiD7pPEfkJcJsBKMxd9dYz9FyDNZfSb2mForKnWwMjF2bA",
  "key30": "2EaJwsti56UT7TT3wR1i9M3VDBERib1N4RUJXQM7rto47Vq4QzbSRZFfBvmvJA8MNPu5pVquw1SW5omjEuetkhxp",
  "key31": "2X8ypERpZC7jB4H4RiDDA6G2NuxLAqKeytQCfH3jT5fbJ14omsoJquSFaMsVyumG88fDHkCL9qeVRLHwY4pSaj6S",
  "key32": "66TKW9PWTtkT5mhcM5iCZxtrCUrBexyMxijCKPzHc79V6ELYKtLXNZvasS6xRchNacYbxbGNa4xkd5A1QBWZZzyu",
  "key33": "5oYhTFC7Kn8tJm86noHZhoAJ4HwMgJems37WQuxykxuV8s3n91exdjLTfeywC8FkEo63Jg5mu6NLLY6w7eH3H74T",
  "key34": "3kVcqi7MNSCoQpgdSm3jUhtcp5Zf9svEr9t9MUNwt15bAK23NSY2uwb2NCE8nTAVxfGgq8KJqw2hXo7hrmdHwEPf",
  "key35": "4M2kpHTdSqWx1xiTMzfP1hbggFqzqRRnbGnRd4AnKHSmZupM8X6B3yfCpD4m1UwBFUzGXjCPMAXCFLDwRzxNBStA",
  "key36": "5FTmBowiNURLFfd7jTuoEijKyBa9NopnzfDknYuzTMxSJu74Cf3iQU3cYegeRG8Uo2sLPcp4dxkR9jf3M4UzP5Hc"
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
