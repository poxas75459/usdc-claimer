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
    "2ddni2HJuTzfpz5tETTAJQGGEsaWnZurHsyea7n8yZAgxFg6DSWSwDLL5D8gFAef1NpPCnk8CfqUtLoKCTuvpEhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZexwiPzQE53jAFWVQztTzwTussNszcJQzexFw5skz9SxveUL8rPZKdg7Sb5xWgr4yRyoPN3QYAzBzJV1tF7Lxu",
  "key1": "nr2e8gumRLrNnoMi25sRYi5BujcizVwtFWS5SoSTigPQw2qFKButdsda9grvxbQX7BubzYbUe4v22LjZd75V2JH",
  "key2": "4wYVGqbMwbzRi92SxK9FgaSyyYb1tS8Pjoc6J3Z8ZZBac2xsS7L6msPBYtcjBE1CJUDpc6Pkf6RqFCaVvsbnLRAY",
  "key3": "3skDF1hmNW4prfopQQRoCmtdU9j2AaCyFAUmg5SRisD6f6BdGtUHXHZiUYbCTLoBhjF7cLxxjbFLsL7CiPUttZeV",
  "key4": "2VYo1hiVchwadybzf76qS9XpnTSLA81Qg6KUvtj5hB7ReNaqTGfWguE5fv3x1S6Q6zFfSGG8PUNzyXfFbNZDobye",
  "key5": "Dwfu43FiM2vEJ7fSGasoXdXQZ4qBKEBNkdAYf4v367sQqonSfjucZnKpS9CssY8Dd9A2937bDJH2hN65BvYUSNN",
  "key6": "3VpNtWfcQz1Ghf7AdULLS6DdbgXcGVLeHy4SeQRydmChPhfzmE253rFGeZzYoSt6bR66BNSmYgesV3rmKxoFneor",
  "key7": "4jQjeZxiSYVWCrw2rYtRbFVRkt4JYBScxxbQnTbkzD43qKS9qBB7VcfNDcCYvESj8t7pBhUghXSR9YvH2T6q4Y26",
  "key8": "57SYEM6TmXmFGP1cHtqfeujPn2qksuLGzKhMYGLyMPh7RUCUh47xYZ8c7sinujvHHJv3cBBF9sxtNbn1dqXqS1ZU",
  "key9": "5w6zxDs8bGR3muJJkH6UBVe7AYHREh1jxV5FWUZnTrAq4ZpPGRTrxStJq1Mgum3M7H8ytjs3bPQ57pejwV4JkvAB",
  "key10": "5gZpt3UiN36eZMuSSMLDqRhaG6Bfg8qL1DgZnauqL6EWfpAkMjvbVwTkbNFUnohyx6zYB1UAy8pC8KrGJa8pkcph",
  "key11": "4pamm7oq9DWKnnMBAeBoWUEKyBmybNxut7xM9SeXE35xNV9SvUtE5uSZMgQr8mZeDN2Pew7f2roPMz8LdS4odY3C",
  "key12": "26i278inU8TGTt7WnYtXN1auyD24ZaVpv7eG7ZQuXCMSbHDd1BZvgYKQAuauyoMj6H4WzwoCwxZxT6LHRvfHeq83",
  "key13": "5Vg81TQWju3im9LvTYzJfA7dWtNQd2eN9reBx8KK4TRdreHGvA9QnSNUkCwMXLzb9xsNndpAqzFEg9UUvmu4pmqv",
  "key14": "5cjeHSL3zCSMNtdEUB9WjAXidUMcxi9u9FvSduL26pLhHumFxemxWejRab84hZTfMBjUw5nNdJ6WbZKbE9V2p9PS",
  "key15": "QvdZMGNft6WWUbbwBFN8cvurGRf94wX955rjGWEhKqcgmotSLz9aqWVEpZgDndHgPgN4t6jp7WCzdoUhPQH8zfx",
  "key16": "4aT3RokGSzLtdNBsBzxzs8ABtSCTSDa257rbmCt8fqH1DWsZKqLpRq9VS4VD3aBSqTkEim86NHDaiDntSbzgPBNw",
  "key17": "5V3VCYXMwJFb28JkjmWPNSi6xGKoow9GXnfokgEmH2MPbE1C7b6z3bBjv3qVR2WuYk9bbZbdpBzJGwaEYj8ehCQk",
  "key18": "3G2CTFv8ET7tKALZdsQGU2Y8TwGE1h6Q6Yy49G3e14ZLYHs1AxXRvNtuVN3PwLQATThUakjrjuDBFQwxpvd4s9xZ",
  "key19": "5yESYUKvfoNr8datEJeCBzNMfFZbGXZxwq9YxrdWcHEiUYvXmu7PHSci8TyxUbHnS12wntbNuadq4u8ycr8fZHW1",
  "key20": "3ekAWPZXAcWpJuNvw3WLfhLCpcnVQMZSwB4iAXDM5Xt5TortED6ZJYGAKtZA9KuWAnSLSmoNw8gxGLX19GsK6ExJ",
  "key21": "5HgWSxQrSXYS6v6g1yZ1kdCDwpvycbrSRx6h5RcJvmZECEKSqZrJKDBxPpC3u8ZbqGBVWHYVytVz6gUcx81Yq8s2",
  "key22": "4i1bxQCn8DNamEazJVhqGSRb6y9eqZBzMwawN6F3RicELbyqX6rXNEczjS6bamGBtJRpjVHTSbPGQAkJgj8CiGku",
  "key23": "4HLncbasE9pzDTfbjdv1MZ7QyZUChx3ZvZYf51mL2yotfLFcYzE9mqA2vQzqxoBmpq7CFNoC5BSHPhGsHBXsjJfw",
  "key24": "4QsUc7iHN3zhEYSkk622gKVdrUHaisso3g4EzaNDJGr5jwcZhXupwzLrCYVTNrbDarNivVbTXvCTVnP4wVjPHoaH",
  "key25": "5oZDC4PHW9CSyA2SmMXTan2yqe9E34QTU3e583hWJRzkUpit5jaT5goauWNvFCcPfEqJTyjzbAUMqk65rfmRkFyF",
  "key26": "2Ji7fNo7JwA1671u3Ho3d456kqw3F4Xq4yQtz9PdQARFQMUuQoxuMM8i4taxJY5zKjYbrCMUCWVyRVLbLaJuTvac",
  "key27": "34KkA98UkewKnfPqP5k1iGDCX1yLdPg9Tn3Qpd4GpwmBbTM7GZYGCceCXVwiPMAjZKz93X6tHEbUrqB4wjzrdDUn",
  "key28": "2RonRGvgPuEiER9A6AioUBjc59hopVnvvh4z7SewDe4bEnc8TFBJ3Tw6opnYFVNJ2JwUXUp6oNdeftsvcCsAX9XT",
  "key29": "5vQAJK5cb7sDASEPac6uyoPbAdswdkvh7JEcUE1tHNvWhF36GAEcjX5HZKiShquvNUyB5e2T6MwX85ADqpB239sf",
  "key30": "2EBA3kzWNmwW3AZSmqevRofwWobkM48oYjjeSs3YMNCkVLeBVVSnCMs3WGKvvS3zXJRA4KL8uXfEb4aZTDPqQVcY",
  "key31": "28AiJqfBY1gv3HkA6Aa58z7xmn3YfyozEEGUsWoSTxev15bqvMB7GHyjrVx55FAyTJam1tTX3dWRDxFHbppWjzRW",
  "key32": "2MxnowPhi648YQken3EwmZuEFmdXssVac2KoyX6qETZ9jpYgoLk2AmXKg23PVD4eTeXCYHzjZ6ccUSVa34cfjnuV",
  "key33": "62r8Yy9tds7rjq5Z6GnLZuCyza4Nu6M4ZbCGV9PHAHebDMbFWYZQavvmQMecQxNNijzveUZefwR8yA94FexFq5d8",
  "key34": "9asxuzzfXB3z3vrjCiXm971dDLwSmLJPtQMvCY6agioEMdDKvEp7tJ2jqiYbS2xpq2tZBVJCZkGgnKfy5JYe4Ny",
  "key35": "5Co2xLc1QoCQwHDZ7K6Q5NTo4ARBPg6yTYzGeBPG6h74Wk7a3H5x7cV6KmGka4fEXXBXXFxy75ZT4LMDirz7prEg",
  "key36": "5JRuR6PnXhrMV2NAXqW8tdZPYFH8Rkd39tYB7J1voxqg85VRXFePx43wMnWtmfaQUM7MRoMtE7J37e44BqTguRfy",
  "key37": "3r1Cm1XU4cxZpm77cG6zmfFZgmQE6DAsCWSfwSkzeGBd8YcsXMUq94EouLhyuWGQrExhaDZtK3HV2hRX8mdLfhL",
  "key38": "5AhW6JbbEwKtM8PWkcAaoX7CReYzb5LguGs2zsENeNRBjN5hRWGkMjJA27VHZdfwpshBTVJ4Phnti44JZxaVYQqK",
  "key39": "26ad8baWKKaU9pMM7ugWPj83FfVC3NQV7hVS3AzgdcXzRjHx7HbYgdMyQUAPo4Cggr7nw62FMzbUn4zbZUwnmjE8",
  "key40": "3FJVcNuNt2tKSyXYYmXsAUuoBUXwhJvtoHxKRVuf8XS2aAdk6KaHY41SrKT3P9NfkFDHq9noNPDCG8m1RVaj6F5W"
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
