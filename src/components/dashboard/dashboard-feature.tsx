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
    "5AcyA2jHkgoVKqaVdZuSRboJfPNJJoDwmnvKrxibtCyk3rAJYJFcxf7LoWDCFonCHNBuRPPr7WeKfPwQgvYKjdAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYbj4wC68mfKHt1q427EwaGYCqinwvGiyhRJCPZj3p9msxFVKF3Byxk1qgN5oReTHdWeF6LuAEE69kFhRaag2eu",
  "key1": "9U381APUj9ebZZAT4s236V9AJ87Y3LxkSgbJCWovxZbnUZnJbYE3tN8CgVUP3QoFYhaNMyXMyUV4oWTPFBrgRfr",
  "key2": "5qkLSqc9xxWWpvBCnppd2VoYYXREGWJsPQZk3EE8fTXmGgTNuS6FDDnAPezH43RGXtqczUiopaeCZTHTdzj8owwW",
  "key3": "22XPqSGJnvfpebkF6cZk6ELyRU8GUUDNxNcivj6mnxTwEFDwUHmgKsu7g7GXFKPmUwbei51sXizLQmqCvHzDkDpp",
  "key4": "kqUKW4qeEX6B3utXKS75tX4RHR9mdsFeDVKeknyb22Gq32Njo72Houiw5kLtzDQiqws44WF1mt2TMje7xX64fMK",
  "key5": "27qArp77vgcse6NGg8UGzmRkbzwqkzzxDnp3er1XRpcqcM9WwKdfctAmLt93v2i6QWYPrdRbwucX6QnPznPjqgb9",
  "key6": "63jgpAqxfg9A55PBioDaJK9CrPE5hdyr2KrwCYuJyyVhK2ervo8PNZNuGBFUyiUAJK9HUD9Zsoyx87rVVM23qttL",
  "key7": "qYQqaiUdz47y7xgVaQMe2vAF9NggQDSJ7thvek6WxHsR4XQ6vwbQuCXKoFKGCBzJqpN4okMPVNpscS6MaJ15Qj1",
  "key8": "bnxfcdGTGDfkQ1d5uUkmtEDTqXov3uX69zXtuF1RAtGgjU7n5NPFqca26n2TF2dJ9t93Dwe39gSCDktRUcwPzeZ",
  "key9": "LC9tsGvFAQAUeyfA83sStqj7Cx9owVeNmTSGteaMvaGpBd9yQP6L7VUvrAez3K6u4S8XvbALUXXgR9RPoQaEzDN",
  "key10": "2iuqKBjPNSatijd8DaR95caoXH2A2EAXZnQfE5oLp3cbwiu1cm4kSoT9Dhn4v6MbBsW1LNETz99ypGAx6VM7EBEU",
  "key11": "2hscY16weBWfVmeXxGVKsQzE6ZY9693HTbE8idxASzxjbpK5EG7LZug1eNP2LEyqaxnVhUNYMpiKPyfZY9G2Fugv",
  "key12": "2oxCfNpawNH1KbwLYydoihXTuECH55EqYijViATzk6jPqahw6H5qxnK911sp5xV4TEREEaLKie1cbUbwKssNsA3T",
  "key13": "67kKdEHQaJartSspr1ofNvfSEN1TJeDL2FyPQqqGqCGRRzdrzCZamU5kjjqEUhfC6dER8V61yqaCT6ijhXBRUKWN",
  "key14": "4p2Gzf3tWgUU2Mie9LtZgK4R284TKUjYtUM6qkU4Te3igLMWXdCehGcdyBnhckfzVg6k8Zq25vAC69D1HrpbLE2p",
  "key15": "4dyHcYgMDbnJBKc9eUSVRNoykqDs7dtbfvunJXs31jpkcWSUzmaJ5CzTn7mZnKaUdobzWWDGAg5QR3FTmDxeatFq",
  "key16": "Kpzt8rxRb3J3uAkDpQbLzrxhVzVkLzrBKsnQzoTN5WmvCFeyKkA9ERvKcQBVAy29SV9edK2p6XY6GLiQHkWkNPb",
  "key17": "GKt4ULjvD5u8gkoojsbs65ZYvoo7ddN6TQbSw4zT7x6MUoEDMRyHACrd9adJdAUL8v7eqC9bPh1bSLX4r9gVQwr",
  "key18": "5NKECYfTtNVXMBsxv7MAFzny4ozRGrB3MjRb8Au56SLYvSTw8npZMoN46LC2h1wc2QSHxrnxVeHSSt5u8EXZQnhA",
  "key19": "4BY1yp8jTTUvk2y1WbzxRBNXvWjgXZbRb72Tt67dKrMaMKbkE7ANzEcWsyJCQc11QaRn1oUuXrzrEvbg9GLtnPtM",
  "key20": "htfEyJDpieAnesAEYNFcZ13fbQCS6YPKgJVgvi7qiote7fQmGwiRXcYcgvMDrt8bHN3KeAGq6ig3GQxfzetfUiF",
  "key21": "4Lzr8m7KfDrMmxs3XPEjVqGQNpqKwyccELhGEhAPvgJLAeCRJBiaiQtGaqSsCb17YjMsDJdDzFBTbFinDajkdQam",
  "key22": "6RHaLXMpgVx4PsnKNLizGtBKa6qtjXhq9GJ3PSPCXwh35wg35kzMNwE8DRoyYyB5Jq5AmpXhuwrkiS5pBydmgot",
  "key23": "2u3JntdyoG2sWP1emjAf8tYm2AhBqwKYRiTgSt7WPP85dPfMpDA862w5hG93HCVW2nZSZYy3bA47c9GyeoeneXbd",
  "key24": "64LF6kJKPX3dfCyPTAeSmUFkoiiSBLZ4a2XSVwoxQ75WbPCtAiL1CR6CKdsidRHtbTczuiDsepu5PAhBNncL8Ukg",
  "key25": "hE7BSJA7r3y4AjJPusvkunV3289oXr8Lb5RxwMbJLfWbLm6ocd9h29byfYUadgcgS2rYQuHyAHhWontQkCraisA",
  "key26": "t4vPFDGkJmzJqFWRchne4GQCUMMFSFjyA1v1PDPCfrd1BeKgs9zwwt5DokWL2H2Akus7aeoStwDrnAnx2mWugbt",
  "key27": "8fCGAXKrUFzY2GpoobgYsfmhcDVwRKmQvRmQmUfqmB84Z7H7QDm7tsR8ikB4hZYB7xgvfLQJ46cmjN7WYoi2DYg",
  "key28": "3tDrgkh4rtXP8Z2WD4V8N7PbtUV32VYNsm8jvEDFounGREdsxfzMYLauuJc9m2W529yYytqNVKMhyg9xnKQeMvbB",
  "key29": "66tqCXxdiD8ZC28tpZffFcNHWQeE24i6ioTkvgAuKrwr2VoVjosaeVzSuSBk4FB2qT3gWfgFhjhvTD1HGKQf5msF",
  "key30": "4NSaQMoVRyoYrsrGoBgmbbyoynaTpxd38dD39B2VVrbB9thT1ohcjkEzzSxz4x9Ci43AqzjMpxqH2tvTjf1nBFvg",
  "key31": "3FPHg5bSgpuq4eR4dfcuoNDUofB9fCz7MDssTFJJgdnc7UxYRHH16ot9pyfkyckJKUstu8MUkAN6JzEPmKJTb934",
  "key32": "JBwfUViVYcBbPBzB92jmEmvK4tajsS51CMZiahVNPimy4SzG2QspxV1gyv6o73v9WE1L2aAm3r6B1cFdnvffPyd",
  "key33": "2eDqG9yUaeGyAHEAArKSbyyYmqwkcbqQW5MznnAfB1XHSF1fnxmb9RdTbVqwjN6ip3EycebqM2GfzdSKLaJVr21P",
  "key34": "3wYgRwk1VcTCrEz6ZEZRocuZGwLNQDwgXs4FJQXz77pLgP3Rsf1v22huABApvk23uqJYPQXvNSNRnnr7mGdnj4TV",
  "key35": "3Am7Yktnq3GcP4cuPAGcThjoF5re9m5uKSQPHZotZNG1VEHZwebidLqFZsmQSN7Npp3xH4XGwhCsNbNfK1Cq7Ye7",
  "key36": "wtFHkcCPbBGcK3rwrYdpxrWwrP6LE9FJSZFATtufa2d7wZ3iUend6DXK54zkJaQ2ji67ze5y4Gvz9dJhgFGD1bj",
  "key37": "34xrkapv6YYFuyKjyGqfuzci9LGEXg48kbTuv2h8LfJhjgLDLm9MPzYU7FoYiwPzLV5qPhi9v7VHRQz3BftxvMN6",
  "key38": "4VVGhWZhWBZG33xbSdjJ7z7gMDjU5KcNaTZBf9oh8LMSjc25jqC9LVPbpBFqfD1HuukeJcDWYqNh5WwfjbfH8z8J",
  "key39": "5Tc1xxBSinxnxPDH4Lz5s3rdpSXXgsgejLp68Sf4j6eaGSyt9exP7vDoQ657W3wPqLpA9QjkDx9LewNPKoQcDD3Z",
  "key40": "88937BxKj2yjjenSMzvVxf9Puhpva5SAB4q2TPn3KxwA74WnMd3ppddekShthH6b9BPetrwRYGmKdeukdrRLvxX",
  "key41": "3KqY4w9g4zShKWY9vPASRLp1kpo3XLwHKYs3Ao4NvN7T3coXbu97K5N6r3YJjYzuLvTA4Mium2aSMjcyBeU6snf6",
  "key42": "3t5WvJXC4dFofwu9hkJ78WzMcSaeD3v8hcTdeZisPe1u4QT9feXrjVpLtK3BirZCpdY7GvQR9keAuQF2YhDcRoEA"
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
