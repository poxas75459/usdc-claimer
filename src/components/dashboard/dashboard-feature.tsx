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
    "5y7wwhNJYRKJGLaySP2vhMpWB5z2mvibLMahXi1u48cTe3Tt1W7QH75bPX4qceZ2iWPao7KCSTLRUjZDbUbP8of6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSk2aFXkzZNNryZSeLGTziHGTCyEKiWzE1GBK4zxur8epXA6YuTxsJqYokW15BeNLj6omm2kNdFD61EUAkBQJVh",
  "key1": "3inCvmh5VVkQDM9KqisMyKdYjQ4LHdBLY2wd8nvY5AqEFnzEm7jAf89yWE9Uxt4S5eDf4bCfBxUjMGdu1RpxBKza",
  "key2": "A4aCP8VMcvdAuN9k31QuknpZ6DJ9p14Ws1CEJ4oz59yi3AQkPVg3M4LiAqu4fmoDSxXeL9yqyd5qHhV1XpHQ2Ms",
  "key3": "EXDCwE3JoqP3mVogYz83hiwBjssJHMKUiLgGdmfCQrdJhsteM69PEMYFwbpSW5namkiQH1sPs2HTo71cZDx3hV1",
  "key4": "kkfCGEt5UqypDmYqcDEybp2jrG5c8BcjQDeSvBXQ16P8PYTreF9GCRnfDEwFXuBWw2dtR19eV5t76CXtkUqtXdN",
  "key5": "3NwG3myCEbD5db2LdVLLSCmLXjm4wYqTQPFBerye5itcZ7vbsy8wfJNDsd677yzVfdRJp3wKnrii6SSt8RYD6cL9",
  "key6": "48SsykuLuFmhdw6k8JJ2G9ySqcmprVaSXqdCibzH2uGes4gGQB4n1uJuy6rUdtgxH7MxwZ4YvF84eR5Wwsr2q16C",
  "key7": "4dJqAqde8Y21JRVeHbpS2NjSD75USs137ietUL23Fx5aSxhKhUdsazaZygFXHKc2ZLzAx5obbaoUq32AnzMHDD2E",
  "key8": "H8TFqX8fxXeosxxiTNjSRkMQhieBe1w5Qb1b6anfK83b1nzXLieak2FN66wbUSnKf7XTfR5Zpz5cTZiaDpdW5EU",
  "key9": "5GSoaBHmmRk3xdVRQSucFptX4D4GdEo9fkxjkcnVDxMEPM6S8jxiweQP9vYFtS2fcDjMM8F7QmRMrAGTbW9Q11cv",
  "key10": "52LKw1gaSGoCTZKBCL9KXeKypa3jywrnT2vy1fwFXiZspYTJWbZDnY6VdZjDYYB9JThbVQDP4BJjsEFa32kKhQjq",
  "key11": "3YfVqhHkZXPE18dmaG6cimfDxokgpKxXB4RYbHZo3QJYiHJcHhepXdr8Bq6p1giteE4aTBvikKmgqHkLjHcKJNvy",
  "key12": "3X6aAne4w9gZ33Y74ZYWr365cwVKd6pvDoL4eDgPSKynen9xRQHSY2HcXcyeAanNBMWaxk75uzLYkCPSsotwwFQR",
  "key13": "35nURiCz1mTnvqUy6NdmoNCMuavfuhiDtAr27KTACxbX3f7cjLujxVpyPaDoqBTSCbWXF5PgP7JU81WeM2wL8JFJ",
  "key14": "2NcGGe8adWfSf6vSf7Y2aJr3r37kfmU5yStRD1v2HzNxTGB2wKy7siCkVcQhbLd7muZe97FEy1KwdJdSPoggG9Np",
  "key15": "4ro5i1koo8sTvzDu6kXkZ9bEFbr3q8Jii3aAvBDjeU9MBC3fs1Hm34hRK4fgdQM8yz33FV19rYniKQkazhWjZ6q8",
  "key16": "dzamShFaxmUUYmSgTasfTghk9wER6RdMMhNUfgBViQzBTp29yfxcUkoJcczkbALgXZdQHbNkserQu2u9XPZx1RH",
  "key17": "3PtRkaHqFstYQ2n9typWXtV3NyUXKtFEwRFiUSAX84iR4YBMcdk1kah4nomrhUyHWoA32nQXxMUL6yVwCgUepCd",
  "key18": "TmvQER4rusUsxiCnxyDDwFKfUGLgoAeQZgZ6BWPuWJ9MUna7Rthvg3ECC9DbMgTkubw6zcZvACqjdWXMVXi5hry",
  "key19": "qnjzEuMEDxn1axxE6owiqiVEUbzXnqfuq8NEAks8vNZSYzGBDWm5fTHjxiz4r5nS9dH6uNBt34BHRmNzcPrjCq9",
  "key20": "6474oGAZXAsZx8P3GSMKeESm6NKBR18ac4mX5FMS5VfvpqtRKa3yfu7BHo1PEMiXwn2MQv2xaqezxvcvrtpJBDX1",
  "key21": "481z8qW3146inxuGPrfHqQcJ1avR8K5Sp8QbuhHGAqDS8SGtmrMHomMNA77febQ6qLnYqbgwiHwVYu23DD4gAqGP",
  "key22": "5rvCKw3Uo3ZMvSBCkrLEvZGRPcSeumJGkUPGCDMeyLoNbkzFq8Sm25BHxXsCW8agaSG9QTrGUiCA4tPMChF5ySpq",
  "key23": "2xZR4ZgDNoXp8uc7c8u9E2kmLDgTe3eDjBJgYqG9Cyp5b1W2szDecubeoKUqVgsyb8JHoLGd7DsWwb7iJoVzZwsy",
  "key24": "H5cLQV2HcbUMyisjWDhA12YmZyKpK6mgBhgjxkDsdg9ajuQHgjMq7VpYU2MiFEDzfwfxUBedvrTq6985wXmYaNn",
  "key25": "3MSokY2iWNUNPym9fVaDXFvLUNQqTtgzekGctJ85H4btoAAZPgS8ar5AHyA8hCHxtLLf8PxL2p8uVEwwYbT8Z16q",
  "key26": "23B2npTkT4E7JFJVJnrvTYmxxqLwDLQ8Jks2QBuJ2NjrFKR8EuhcFyWnessXK9bS9PLr1QmNP5QszhUL4VkdUJKr",
  "key27": "4bknMnHuvVDDPpiU868HBykRg3uX2tLd6ytFeeb5b5D3N5cgUjLKdDuRUq4j864qsUSgSdhpbBo9sSdnqdjfodBM",
  "key28": "2WvwBLCVXz6cVQUYjfDwrVsRKSBb2UwXmEkf84miWHcMptETtYfJSNbfX1NnBBBtq5SNs9NfQaUrJdnhi5YKNErY",
  "key29": "vWu3YDb7XQcLdeg8hQ9RTS3SvQzFDLMcuBhWBbgn1xqoRTrB99NPFzRSxKd6Suoy9y5HTD8jRcYK4KE5uqkPx7z",
  "key30": "5TWf2TPwbKDB9jF63znvccBypavjUNBECngYSocr9bxfQTFGa8W5XFUrJkyBmqVA7JLufJBLF8tktWLpcJxBnpiq"
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
