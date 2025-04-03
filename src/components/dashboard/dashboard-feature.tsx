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
    "2ssdWraRhsk7VbVRB7KNZ8oDxextYxXyWtNHusgmsT82RZNEVpNTnj7fpkV6CBFLo8BU12TBL9c6Y78Lr8y9kjXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YQL6QxtDaALje8dcqnpfTGJYVNJicvqbWwvdC4NBH2JSPzhS2Jr4ZpaydQtNMtuhPpwvkptg9G6emkRViTT89h",
  "key1": "3eKcMDH9LjFcWiwVHWvSa2k5nWyp2m65uVztZtKwppdsmxjyxhBNVNvSBSy9PVbSMBXxJbpkzTxP9TX4vx2SGSNT",
  "key2": "3Kctk1gafGDRLC44rx4QpDg6yenchjPShMdQGJ3wfsra54nmQ8i8woT8z1Rw7Maz4NBMiYhuqZzSVdXWrdP3hqmT",
  "key3": "2LQPQTgNzPi1tikpXQUcFEA7JguPTpX824bdmMZcsac6u93Nf1hyP51nBmutkWcVVJHNCk26Z2XRix1qFcLNxr5k",
  "key4": "4z47nLTBhAC95e5NEgXzG19B3Qu2kD9cbekRfH9vGhySonkACtGch4gr3ULKdUEsVtGAkZEDuo3Ej3owU3y8FFRS",
  "key5": "VYssVXewBnkUBvdHvdwTNnSBGP9tSv2nV8UKCKn66dszzKWz4WGiy5Mbqusp7aJLtAyByHyqNQwAberiAEhjW8Z",
  "key6": "5dovBFA4bVmk42M87eSt1XwrFSzg1BLRmrx8GddmtZ5xPZZsy8LQ5AP7qetnD43QTCZftBWveQWXi3cj8wZAuKBS",
  "key7": "56iU1uLteKBSimtwt6CZD6YDx8V6hB1pbxMz9QGDsUXipbtrVXtXyhm5KRyChwDwNcEww4j9pB4XuA18mujqPHh1",
  "key8": "34S2PishZH6gTJfYhp9wGSFo7kxQHcGtukBC9qMrwEpoPqddHGjJzZQ4XSEc19JsSr7LmeW6q86MBZtaS57y4owb",
  "key9": "F64dTLWU5Ckfm8oCcotYBzpVMPq9YWcMVDZ9CqDQhiYyYmLScna7n5Q2eBDGVUwSbuDR3TZPsXaveQdPWv5jqib",
  "key10": "QiZS2J83Hdxs2kwafubADX6G5FXT7X7SQZhHV9ZBhTh9eoiRT9dPWGcthdpJMfM15gFgayf9ySZqqBC1jg64Xj6",
  "key11": "2MMK1c5xkPJgMHSDTdYvhxmB2RFjMuFkoV3vvqn2wSyYfRM6VyTeHN2xMGj5NYjzbM81cTU4Gz7utHrvKQM8jvUS",
  "key12": "2DBwzY2KKhjEzbGAkGctqjkbP6CfVQW8RkV4nF5vfpkEkJRmfqJsdtPYqHptmWC3ADyY9cnSeyqzaySj5Zkx4XTR",
  "key13": "3wpVbAhgLySn2rnpqxdydPtfzi5kZ18xHBmdVngHoysU5c7mZtEJsmya3s52p6HrFvtotVLbQBf27HEWowNM1usi",
  "key14": "VLTrQBX7Nroun5gs6zjY3Bz1yYNEgXdRc4QKoHTgF2FP2txmxrDhPc5b51y3wYf3TjSv4rkx6d1rt49jhJ1kDca",
  "key15": "5SFCXLygxGCCV4Rj1denwu7ai1xSnqkqH15N29JLXEzaiozi6Byn9pjK2BX2CXTUbvgtJqjsK2C333Hj9ALQZgCp",
  "key16": "4f24FLWLbNXaqWJ5VMKxuASko4wPs7PGv8t9pTyhThEcudPr14P3jpMDw27LdbS4vFmcDgeGkeNLjijvn35HgYYE",
  "key17": "2TfuFyeERNp6cUTdSZvkGjBnYG7P4rQUvqGZgB51yfmQaum4bDgUZhPoWybaicimHzwe37xT8BqqfFRZbQKx96vA",
  "key18": "nQn8ZzLjd5G41Y19z8jXTp4PuQCZUR7KxutooY1kapxax2VABg3Ki8g8ckggtGHRwuDot9BYp6FdPdHZC1zQsST",
  "key19": "3pbXtHMejWHAnhw4ajSnVk6hoTK4mXzeEkgAHjrSD7j3FFYQGEdNL7Aee7W8htvxTSuRXYzpyPmX9DmWFwavnXUL",
  "key20": "31qxKxTYMxqjrsND8Z7oHm4v5WqnKNzsJmQV8oygDxggF8GHP61pvubmfLqoZydMvGq6EnKSSuhnp3UPwbRJWayM",
  "key21": "vq6ULxBGiVQBDzpi4ddX9ST29oRNSHyTT5VT6PERCHnUpZy7RiUo3AK4QqL5uT2d2k12bk9RYWML7QiRWLXxg1t",
  "key22": "2Kuty1JmqVNUb1q6M1LiLiZ9YhziPBmk3xgdYLUhKk38QctpV6C53Gv6g3hDxRyFvKkNG2Lxfyq9NoZ2y5gkGa2h",
  "key23": "2nx5yVPZFtnzUm6zHZz4uZBfmqN8TYewcYTL5UmZ3yfUCX4kMmoqTqWNYQo7eYhykzpRayNCVEHH9kEjyxE7dqet",
  "key24": "3yFXbaYgXWzqGZJLqwqQhNiKjYzcLEnv8jAWBvwFqpj7Latji8G1VtP76tmbAfj4nubjZD7j58sURbxiwVo26E9t",
  "key25": "56qTvZ6EuMcvx1Ub5WkeXcXKqZsuRUon6ApBN5UQV8tKmiZm7WemNC9gpzbRXT5YUdAArWrSvvFz3GLahAeTM9U8",
  "key26": "23bRGadk76A4vrxQpu7cK9B4SughGNAUsrmFhFPhQXN9M7CEt9txhQwFs52KBqAVPjfux2aFzvAzAiRGTbkaGDHp",
  "key27": "4NyMTVbZGmPLHAVhtvPbgmH5zzTrzac8JhfM5ZAndyJcmBZRXuYc1vsRM51FzSESWwSSYDoRcg2h3odyyQsJvJZc",
  "key28": "2sHD6w7MsHt3AXf56yX2jPcFbbHDe8rAjRKmUoGo7unyGXcgfr5BFvV4AtsZ2AuA383Ty9k6NsB4wjT5DkzJvGCH",
  "key29": "48QHxPDpTqTVuuf38QcQotvPkMXBoyjfSYBqFsHf8dLBpbAk953Tp5T5mPKAv9C9QULYZMydg5uf9J3bKZxLzT4d",
  "key30": "3EhzkfCx8ceeh8AtvjRiLzbPc2Ly9UT9Jd4S4PFisWRqKL86sJuCZfJky5MFjEoxxfosPVBwFYJXBzAtVVWrf2bh",
  "key31": "4XE8BBNjBR4A3aCKqktgJPS7Bkb1y4tBV2kECULNyFHqGmEzeGGyWZ4iBUEZF7sxH8ybnosWfJMGyinirPr7yTF9",
  "key32": "67gh822f6kZKqSmgdoAS8CM6seCHfR4qN5fw9Tw9jMuVBeV98j7XWG4SjPyTTdBmQWAVYpfBGbrtchQJkSmCPi1z"
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
