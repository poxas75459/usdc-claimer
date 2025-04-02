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
    "4dHr7TWoNCRWQLRZ81dzZ4uAWoZxJ6mzwEtf421NYvVNQD8Dc4KvSSibukgr5VJWsHa2YBx87diZAyVAaDr5vwed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FaKSHTGJwyyBRRDXiWk1pUCHDUXGG5foYBXpwGLMkiRawX3zGruRYtrXmKG5c82a9k8fpahVEgHuEUffXdWqnPe",
  "key1": "4GoEFWAbo1ELMPSf2ros9C24FXbHZNNpCKy5Fn7FGCJuBixYvL9LDHqd2PgX9EyRzYtYj2fWEawb2Dxj6s99pgCR",
  "key2": "5Ye578rFAJZbxMbYrV3bTkUEAVh7f7JNXn2C5cpcju35CJn4kvzP5Pz3SCKrtFGau5m4knDCHWSgNtCp5j513Vg3",
  "key3": "43Kn28Tc85CM7KLJqYZxyja4GsRzyVqjg7SsNWgEvEeoUJLKdF8MW2YuM2boDsspfMUiNQWEGfMEoVRPTTGA94vr",
  "key4": "5TiHQWkis5kGrR21Xzv62f4cpALQ7gcu5NT37FMi7NamLcPi5aaaeoWmm7YJp7XB265qSYQnTE3WmTKcdDtevCFT",
  "key5": "op8LYNAUuJjWLe1vef27yn3WVBsJrKAU1pg82DWxTouaAgQf6jHu4hAFp3HJcc2spmrX61Biw8V7osEquXs2a8R",
  "key6": "2HkmnpFKzuRa1uH2gjoDKc39HEk96MYP62cQc3yZiRcp2vm86wDmfm1Vts4MPctkHg5DVy5CCrG2N8CHG4DVVr3e",
  "key7": "4ADRMGZLtRwexBbPQvzye6HzbCi1u3qZePZARid1f7vBrzQTPs8AfFm3UZYdTPZKSwxxKCfHnkkcAYWM7cin9kfB",
  "key8": "4fZ5uAfKMn9KJUEeJrszaB8moF6AFxuiduu2BKYZfbjxvP2SrZW58uAS33qmYKTnmpgiNLYqtU2rqqDgiHHADUgL",
  "key9": "3cFdAC6r9aJ5kfzz5Buy5mjZmJutk3Ye5tcYJT6HQ7GkNAT2pzCXDMQ4mgNDyjtUiNAhMrmZJHnC2ZspFcB6zzsG",
  "key10": "5YeY4S9Djo1dHRRdFXWka71WAt6kPPSAc3UGgP3CDbUDyRzjBNwcTqbFBgSwEqMUmhF54f9bvLorokw85GJVFr3d",
  "key11": "Tp3Jh6x2S9Ey8rJXnPKsdL8o8oJGNCuPGodT3pQzxsYnGiU3KW2uTeSZT3fiLhkpjoywbhnfK2FKj752ZWumxFZ",
  "key12": "3DeAt5RpnzPC9ApbEuuinTDGGDucC2SZXGXbWaeRBiD8nRtc1xXxkbJ9BHRQyRF6kTstx4nLJaKQG2x9XMAVcu3z",
  "key13": "2kCcdz2wRN1GiPZLQxwQTMZuJT9bi72PyzP3LWKbpqPS8x6mGaDQmjPxdpbv3udvqaA8gmUxUsPJm98RoJUxLnHQ",
  "key14": "ugzsXDNbRGhEW4jCc3d2ypqHW1r2qcnrAZ7L28Yvp33mzmLwvqnk6uyR65GhaUcXcUTRupvekto41P2Nfap6Xps",
  "key15": "21H8odzysUmKxBUqeJS5SMVFdFu61L1gUU66oB26zrBpAT9s5x2ZLHfd5d7GZaWKBADzAzLfKxVyQpkc58Q1xKpM",
  "key16": "48k46oVjXagLgFStF72d2QsXZEPJqCL8VDcVC6jWR5tyqPMcf31femmUTzKDxiN15hBz4BRMemcvV8SMrC8ahuG",
  "key17": "5D84DaabRaAJNyknrEGg4QpQ8otWStYL59KXpsRbpZ7hXmoSwv6Nspj8Yxq1Gm6r19HovHhv4169pXk3ndLiSa5m",
  "key18": "ci5hJ8UHQXrvxYbF2VsGQuKb2LE3ZQcGVxeu1Qint6vHFuao7JQczr9LkYmWjo1jQ2dsKZdEfWH5w1EP652Ncur",
  "key19": "VzRDpZFuxAxxLXbo4r1rAjTKtRZdJiJgU9FWp115qz6bRuwHbVUSEckjj561XPqKisStPj1qwMMprCon6U3H5tu",
  "key20": "42rzjAXXG8D1Dam3mY2NzgFztxjRkGF5WkxgkQ2D7DncMAJt9Ed8Y3FT9xXQhEPZm7U4LQrDUxYQcmWGuJG4F8A9",
  "key21": "36bKPJANehMwEzkU9Uk48fBdT7B2jkvddJWNxZqGBtXBDHzv5TD9eRU9VAyAHmwKak471LcGtyzB18gPXVnhpdDb",
  "key22": "kPP6An3MbxNGgHAvTLEP93vBMESsDCgZhxnPhk2uTcQx2mDYNJLwhh1NLBNtiA3JKZXooEtejB48zNp4G5APM99",
  "key23": "62jM9BAroesfmSxbhty6PqNpnfSNRJywyHyFxJEy5mAx24DwmZ6Nvy9evAhwirF9inc7TTEGivry2zhCeYU1NTLQ",
  "key24": "52zdjBgahRxK1ckCN98uoZXSzw7jj7yt9CrpwYfyJkX92LxWmavsVUmqZ9DqdhswXnCL6tWcnjMTmQqGoHDeNBsH",
  "key25": "2sNPXqgYmxNBUp49uwDQVQA8PmY2nSQZPLeSpPphbNJA4K2AWQGSNiVJe45WoSwGmchb1zUN8bEDgZDU6wUJDHzj",
  "key26": "5RYQXxsu5iuuvqjkTUxEU9rQydMLs4Fi4GQ5UgtKZnE28y9LjxP3V8onCwi2zmBUATrsrwrr6oVXJXS9wgtD25xd",
  "key27": "2QgrBpsGc2Q6HpVgXd5guxnob8CyQszLXpx69pCQFTegKhR2tUudAT1kMvkC3TsKBL9g6qyheGZifkF5kHspAgSg",
  "key28": "yU346UT3pVvxCpqZLkmT5avYeL6zZMW6FBdviKEK1fNGTdYUoJQyjhnEDbLU5pxUPvh3nZBRsvXgNvXMim1XRhF",
  "key29": "4a1LoFAnGU833MfnKSc3j8Q39U4rmBpgQ59p8n5oBvNXbPHW5GwzK3q87EDNLSEfL985DmVLYo7dgqP5YN9SuC85",
  "key30": "15Y6GWnCqTtRyDRygPfsXt8VHU3DTh1y5PHBZtCdw1kfnRfEDZG92CS4gTZ72ifXVE3NLGtFP5FF384arhGAZJT",
  "key31": "2W5KdgH25W3mrKbenfk8iNEd6Vi7GfXCqXwQoZ1ecxKRHedjYKVvQanCC8trC2cDKLR2TGxL4yeXLFbfZeYxGqj6",
  "key32": "3NfzsVQvvARKCUqy3Drc8sT9sTdRzCjRToSV2k4ycChb9AKF113oBKn8pDZUVm9szqrJ1mgk9A325K1t8YSLThTj",
  "key33": "WhmVYMQ2EJqRpGMLyXpLs9E1QSH3ZCtRMtpVBndQAWAwfPDNTEqFECyHg8sd9fqQdx5TECGH5bSWkJVRwNWZZW7",
  "key34": "9dL3Z6z4EwwC6L6GEykGmXVdCCWBM3cwEJU5W1coNCYbrhUNSWVTg8AcE6ovRwPumibM5YVrrmchFvX4pAjtira",
  "key35": "4UJBZKMJ9iEmf9mXAqR5CinRhKVMraQPzN3VtkzBfuu6zaUbdM45Qn4hxBGGT1rqoVJ1ue36kAUVqzqNPGc7dwSZ",
  "key36": "Y7HFVLhMs2kNZVDtbWtq1NNA16Vcfc3auwgvH2GQhyXUe1grsHc4mXchP735USmg9NVjhNbeD2VtanM9d3748wQ",
  "key37": "5iVUGSW99PMvVFHfUJf9b37dixarYMvWgJNSvkomnwUmXFvFzpAsKemhfSRQFGhBRNUkNGPfXeZknhQnLFiAtTcV",
  "key38": "31p4oXZSUx5EhhBZEvd6t15Yub1WwxyRd6SLMSQXML2uUpGvow72CF6YU6Gpk4avuY8HiDqdvQpNcZaGBMgxjkQR",
  "key39": "3StxMANCSSjCnkYszz9HtVKbDh9SJXiZA86HkJTvWHdkUT4i3JYTn2QnuGCmfEi3ZjP8PM9tv3QW2DNzMc5PFYrh"
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
