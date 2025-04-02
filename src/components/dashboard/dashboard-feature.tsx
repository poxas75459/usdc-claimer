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
    "3YZb8BTtaysNnMWL5SUkxdQFjTy2QpeeGHJbwHF2PSYCXfMn5H6PGut75Y32Ab32gVd9GPrhD1NryhtXsNaUXgCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPhxjoLEuiZ6bcrE8gbpf2AbeHspmaSFmEkAs6UfwbA3EWjm4hX6vUd6A9tANAXY4nUqTSEbFA484iUMvGavxuF",
  "key1": "3pAPwn7MefNpqzH7EshkNc7AgEundbQd988k3Vg86P5eYssv71sNB1sA4iSZTyejy2VLP3iVG58H5e4Zq4cMcHfC",
  "key2": "5QRHX6na9kLZoXXsruPur1G4ULoDahbDqT5JnJUreYsTSrDzhvzReMaEio2NDV6NJWUyNJX1E559nfGM6LX4eVse",
  "key3": "5zN1ejNKzwFx25zmkWRY2WxiirBGWbLfYfomppjhd6DEGDEStxvu6jabe5P8hzYBJyBAg8ddfzzjfMz4KzrR8E3j",
  "key4": "2nkj69zupT7WJxrHqNoVt545HwTq7aYJ5p2mE8FYMptArumg1ArC4QwiZEZSBaD9VLnuZsmYPWVkFqsfwS16Xdch",
  "key5": "AxdTQuXZckGJbPdQUSoEHcqg2Tampi5u9BCw9sA4FhfjBUX9kagCGJSMaVrG6notMWJdtASzvectGdgS6o2KzB8",
  "key6": "5qweGfuq9SN1GYdqUFbpgXRN2bqeit5YBKEd426JMymzV3gKUPZ9ZTH8jK3UpgQkk88ohPUeZkzCUpkpAExn6jVy",
  "key7": "5nNQzvMiNw1BPHDY1ApvKHHYFFBVoSYoaPmdVbnPcUEoD1AahmpUPVYiPN6SjJ8VENAt6BzFv5MibNukJqF6BuwC",
  "key8": "2kfGm1yCrYRNfwTUSNPxKgV9UQNbeenfZBbrmVCZaXCscU8tL2APisS5EWz5BcgNZjLbpkHDZ2dNAvDQmqJ1tsK6",
  "key9": "Jvr61eeuFe1jvwjfVoK9RCTRM7vvt1bjVciL93dq2ipMkRjctT9rK76rwTSdYuo7ofcdc8PhKsHW3hrCsqP89uY",
  "key10": "2ueHVdjE4d36zVKuQF8Cnu8b4jJD9DaKAkke9KwpKjnCjc7wMpfLK6wUgJHBySgxLgMwmEo2GrWTRvnmmUGvjBAw",
  "key11": "jUGTR8mJjPTTtrKP3Mzj5wCbnbBUKeMJzwvcqvK8dPvWWV8GuSnvzUYLj6cWBTX7opUe19vpzaoSLJk6SA2nUgK",
  "key12": "328kHkcmpJSXQLJwFr97XdHn1EAG1PUjfm4H9ibwKsQbmgwb7qfG4oYYs4sBBYXZ6KokTcoLypDerzhGjiYZg2Ee",
  "key13": "2711MT9W6oAYYiiCod5YHZj7Ea1QnJ8ZpaWvPLg78AAMcivrzpvgN5s15z3gowNmjt2MYPA8LmjJwBuCbLqYPV7W",
  "key14": "4QCRGGFNLxJa32GbZpSQKvWxMSTyuaZBdAuv5wVWuTyDFVKJwXi6H6gvG2s3hmHXpQWZnU3AMWRZrjbdoinipZhJ",
  "key15": "uhPs2gnEVs1KvecTsx7THDs4Fy1wPSwuqVcrVgfXxjEHcJ9Ucfigmd5SU862RwbXwubeUdowN8v5SUszMAJuhSw",
  "key16": "4P3b8pCpp8y7F83PRbT19A67vESyuu2i1YS5H9QeoufvADeMTUy5uyWC5LKdCwytvA6BzTuSDsUAk9298WpMq6Xr",
  "key17": "22AuSQzxYpHP7vR4dFAekufoYYWCSPU7VCN8w37ThPYywWNLpppsXDD9mC1sv9b1ujJoAtYXspHFsQ4pybwhBaLT",
  "key18": "5H4HWTfZPE28hBbxUwpgeWon6b6CKvzc95shvChLLA3Diwt4qj2AUPsLPhAUVY3hNhWsRv6RELw6Yh4VyUaXAR3S",
  "key19": "5h3DzGXRkBjixGebugxu3unHUMeWZGsD4QBxQABfdAjGBJxVzZ2TtNEgMWzVG88bBZsVaLqQDv3wPFYMKrWKcdyi",
  "key20": "4bbc7XCVtxyBavjdbqtu1Jq6T64KPacYJ4oj4w5N9bboWP5WwfbxyQkmr9WFWT6dJ2DyzMpQcYmXvRDFAggvYJVZ",
  "key21": "3uE59YgAjAxEERZPM44eL176JN1oUvByZMQHuCtZwyCJ3r2C2xAwk47fkDbNmuj3fWH3Te4erivjd6VBqzyzByV",
  "key22": "64KGgW4q6Ga5KMCxVsKZ8ege2AR2om1XFmTqnSRXouNscqHaFMAyDDWTmFwkVLfKy5TNbGgwBUcgtz82kjWWKzkB",
  "key23": "2TWtgApornUSa2WKVLRsMEGfs5wFqq3bURj95dMbRJkw4F7uoU7DVR2PWDfnsiFSVu22zBhTgYN8snirV9gr5x4w",
  "key24": "4etC2B4zPK19bhHZbcgHckzrjPZD9gdY8BF23QSsUNbZmRLy27e52huVjH541EMuNsKacjsGyeEsQYS2pBocAb5P",
  "key25": "2DMCDWnxvRhnGbY4wcaheNvNZgMgnjWQHxSgJvJcoKA5mJs3wvqWrDSpe6tLBtPGtQgeFUFAf9sk662xakZi9q3t",
  "key26": "UgujehgawYhXWEoCfHiGYt36R3bdqxvBRqeC36fwZbsckuUauYRfxzr3PTvFvYhqvpQ2u8PbGo2AeQSFyJZ4nsZ",
  "key27": "4FcYLFGMByeWvXCyHjV8ndqrp5YTV8DCx6CtNHRYgQfEsZVs1PoFXM8cQMkL4kkv1mTZbzzwzYSaocv7VMvKoEZr",
  "key28": "ZtKWc2mwsVwPKXwyokAkPPJBDUgRLFqdspYe2SJYdm5hPrFTLDQhJLCA9MSKu7WcbusrRSU2YtBAFVVMko5Nq7f",
  "key29": "2QXiqdEKo1jxaAyiMzG7nn9TVnai1WiQEQiKkorNGK8Hw8nttF7Hf1oUFuQTxZCf34Lyah6hV7R8LBpz4ZupZ1uv",
  "key30": "5srSQBZLiaRbb3UpBzveSDHyRjvNNsJSVcquzBE5fvoPd25AYQjx4ajDncNsgSJPBGfRRV3qWF3ifmtzUmyJiPoZ",
  "key31": "ZGkS1PPCHydiXzGQPJ9FzNcR5kdtTM5oDAW2YbiQHamCcsJ4JNsVy3f4gfuJckpaKtH3n8xMbFLg7KwdgvZzSEy",
  "key32": "3wdWLh8zpXry8Pc5rA3X4B43SqqNJBjgz2LTNvAV1uKs3Z2XQt3XdMFjxdevmpjWah8arCotuNDy9RRMW4TbsB3Q",
  "key33": "3h9cCYAUSaWmsdyf7mwCoDiasDv4cJW19JhrkwuNnEgCXPhUi1KEea2vGbQACJChuP5G9Hbo1K2rnT26MmJWudFC",
  "key34": "2KzyRiVd1sms9FDBqN6oToVKWtYQgoZp66YhSZwqbyvY98Ujf9XtzFUfUZHRxoLas4439ULXTtYD2z7CpWCmDpsa",
  "key35": "3B1UWyrWHaxxUKCzLesJCr4sWwGywqVyYwSxsQcoVYm9sxxihkYm4w1vrPcW798vTjnDnwndBtuDGr7kVmz7Aa83",
  "key36": "4jpsEhBS2JEWP97BxL1kzY7NL6q1YqxELXiDMESZd7X8vw8xLYQ6uihcPqFMhY82j4RFg6CGqeKE2FK6aoC5FNJU",
  "key37": "qrfWNAZfE6EjmtSy9FU4WwEU5f1AD2ycP8hw67M7daJqqQ5fShjwAdUSXroZKwYFNfyXvsXVdsJUDDXobcuK9Lo",
  "key38": "64AVdGhaPPXCu7A12cphWgHeS2DSkqZAPNHpXp1mXAe52P71LKhc1xkhhM5vRbNvEh2iuEpNmM5YWyiW4WU71uF8",
  "key39": "RabHw6HT1okVUVsHAdjAugvAN6pwYvZs5vUyx9h8CwE3GRZXP2TS71M6LEp4iben5HfQnY4qotpjTutsgE5KojQ",
  "key40": "4W3Zzqi1ynQsBiTEppgqDyefSJ6kR3k9CXeGJtnvs5cMTPUQf1VMeBf1XCnEsLG36KCzCVBSudUfkTjmabUdWzt2"
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
