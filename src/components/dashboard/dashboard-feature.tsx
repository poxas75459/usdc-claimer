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
    "xAT9zPiwuvvZvgdL1RmHhYiM6zAKa6BBC8jPiTdW5YwcB77SRtX9wSNDzQHGb3pwcigMsuqhhs8DsiX24GYfFqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWAaze4rPbpG4PxmgJAmZPUU9JG3FsgNr6FLZtcrAU8EUgkxyDBGMJKFc26yxsE5APUZgmcX2KgcW8fkr28qrBN",
  "key1": "3dUjL2Qh1Ju85Hp1iSMh6hJL5Ay6vFbCxiRUMiRnpzbdCfEjRiFZY37S2UmKjfJhfnMsXEn16oak4TFLzLG8UiWr",
  "key2": "2A5enDNXtMG1W6pP8f5zw72DsUNuNtjUTBQoUyuckDwzbsVueayR1j6Z3uKEPfR7eykjpvvTmesACxqFWxMZdNpP",
  "key3": "28DVit1iGLwBZjTbEM9eNCFczTT2eToKWBHM38WoNDR7MaK7EXpwbzRj165R4L2Me1h4KheBjyNH4EDPFHck1fRt",
  "key4": "WRkomVBD1VRqVTtraFCYLrQuh5kFJ5jAVECEWS51yC4j5u22WM4whRMufCyzbTShu9GvwC6GaAv8cscaR3WwVHu",
  "key5": "2UUxvRDB5V53YSJBFhX3P12wkGNWiPRB13PQFpEukFhxYAEPwsLKUTJUcNa635jo91bjE5Y3hnw7XDnufh38QuZx",
  "key6": "62a6152pELevgx7dKiPB3tWkpTRBZgkyvJd94seuv5TXGS4aeuK2W3tLhPB7wWTKxgQpwgBCYga6v2sYsP14kvLZ",
  "key7": "2syJYDG12AboFgNK9jwymyoctv8a8w8VeDeT51CbRYWWPbsasvykkxr6bsW41fbzEK6XiP5UWdNQVahd1v4BigwF",
  "key8": "2ZJMQLxtVsFXjSp5R6zMW9LKT6YykZXMnzsGUivypobrB4d73m7nyfH4HkqqkRyhZH8m8HydyWfy1zgZ8G4LR9Ti",
  "key9": "35ze4pG1nqhRQyuXu12u2X2P6rSYXJFxKvgdmkHaxYRsZkDx4CL7WbuUyu2vnxLjMTifCaxqxi9WgxX8kPs1MmYW",
  "key10": "5WtzmJEZBKQ3M33X9Y1xGipWohzp8c5baCvViiUVTzNRh1E3DjS2LzMgUcj8r5kceyHUqZ3Ddpb26NjSrfKNTeXt",
  "key11": "2XoVhPjwjhoPJg7sonyaDDkVZkRvHGyDgMApdZkEmwcKEgwwu9rjmgQxfZKSKnZCP5sJfTbW7EwggK9FHgyLjpcx",
  "key12": "D8uHwM7KsoKkJhcWgdUvj1fqv2MC6wXjwY1dn7y8u4G3ciTEcG32HNpK19cpjinZUCmFpzDucrcaxrT9vJm7jXb",
  "key13": "3bm9RJvN6rvZFW55NHKH1Cjjip6mxGUVBiFqRPwP96ZXumAHsFYpUbRswuUXvQQS4zJNnpRSYo5HtTz8HjYbPkbU",
  "key14": "2ocdsPojw5tZWU8paHUwPDakvpacw3wNEw7mF5NzBgDR3uVUaubj6Lhyf3WK5X8yW9qh4wu4KcS4DNqfkWoRyNrC",
  "key15": "5bv2XMpJEtqt9Qs1ZGzJTkHVfVHvQyY7jSQnzxpcJbjEhSSm7W4uZDh7EXS1FX3ZPdui85DsqdRaydJBQZakUDon",
  "key16": "41iys5BLEKCcmGupzWyFFRZN6k6rQE3y8Hu5ELzkHmdyEhbeoaFB8b3ynUmMVitoR3nKma3LpyX2SiCLo3J6YpfN",
  "key17": "58K9e4mxnz2CiWM1UpKcbRoan8PunvwyaohZQ7se3f48g32xy8LxW4S1jGN7wr6g4kfX7GDsMay8njXdquW3kqUw",
  "key18": "5LQEPfvn1MYvEeyw1ZUuLfTPR8yeS243vEFY7LTtizY3qefFasCouPFziG6CtU4U6C9VMdcHcBvh2Kxq25YL6oQb",
  "key19": "3Erwk3Rn3c79ztMpMWLsbacKNRkoNGY6XusE6bxUB5EqU9TbEKANTPsNao91NwfXcbQZTzypX9JrCywK7jYJ3geW",
  "key20": "23rnxak3uZB7mojpzUeVg4b1BnswnMtveY3MFA8PmdmHK84GG3aK7tVMbwepQZ6EXZpYPBGdrdxp2EBpM2Cj1QnJ",
  "key21": "X7T8ZiYWGpHRpkmGEgKvTAjFmTLoSbHnrCkngxN6Jqxr9bfA45y8Lvwop4Hy8dzYuFTHHZkdRHP4FigyskuAKRc",
  "key22": "23bRWco4airzLVPPjFCWD5cJhJvNDQyW6LHJ3AS71may4rnNXJYqRZscoQxzSQr2ujnWxrbas2xfdU2A3LDzZRLL",
  "key23": "5RWxUFk9Chk3XHFrw3pp3jSFgMnuyeqcZazaKTcjZ1h3wNJVs3DQmLHYfoQQSPNo6zHspXUVs4jhEueYqCBWE2rX",
  "key24": "zZ2TgJzuUmkjpiNuF5LYCbS4t4DnLDf6zaw91BbULrGxi1ZUbJ2yexkKAg9M8t1D9v3vpszijfSXnFAwvLhYTgp",
  "key25": "3iHKJTwLrrcSYarjChWYwZJmHiYNi5woxJKUeGe8A4y2Ca2LopEf8GXcbVBGEETTsDbqh4FuJodUHXgJfs6AEFkM",
  "key26": "4zhTWPpz3caDfB7uU6DvG6pWrhLcunTg7Y36amT6XAxWGjcJbxG7Aw7fxZSJc8swHwLBZ98yG1258Ki98X5rMMyT",
  "key27": "3vSPqPTnRYPsos8zFfKtMoxKsiWb9Lgzd1byEr5GiVQr7W3dTegV69C3yznwtGZmpEVLb7yDKByHQ7PiAFk8hboU",
  "key28": "3zEwmRcbFgoZUdZo2ntCagNHDe1ThHvM51J1AU36eJ1AjiAZB9drRwEKRPw7gAouV6YBBYPwWzNa5nouwD7iLWKj",
  "key29": "4QeqLeokqe6qsvncYipu8dqZJRD2eqx3eA2TyDoB7JVgdQtSVrjdQ3D5ATGnnDNpxptxhe7qVtD1vcnQzEaxQnZ",
  "key30": "4FSeMQ2cjUP5uK8EHeh8w72ybnR8Pdq52FcUz6QCcWmgdY68fsiKyK9aNgtqHKTPUkieaCcqweXtDzKPy4cnZqbd",
  "key31": "2Xb7hEnHSjXa4cqoBC7BRNoQL2ssLhSiSXa45ZJA78FKJJdgfKtMRbmzFGemDZB4WULYx48FKgQKNvVDVTbLr71Z",
  "key32": "2i81zvPGvEzFEPGmNovXSatSiVesccBEqx89WJy6i4GjLvR4XL6qXkVPXBuv6NsA7H4wz1T4cJbWX6KWUepEJS3d",
  "key33": "33AeUhuQ2iLNFmbHSnkmenHkcjoijxWATHW44uH9vCTVtSE8bgdWeGquDH1yXD4QwFGgA69uC6Asba8GML6RZHZM",
  "key34": "2sz28qg3EQot6JwdphBhHhY8RZb3WkPrXLxzXhQzXCPuxaTkCbeFid7X7zkPzYQJhCTVY9JB4hkrXTSF4XMwJ6Tq",
  "key35": "3gadmFJocDqNFxrd1hKkfpbts7L1C84dGscutbcGweNTA8GDRrAwMNsFvV577b23RkhQgkUsXdmjX3RpZ3As9dMe",
  "key36": "kYVmmzGyk9MLFGbHmN5kcV1ozcbGpg2mWUaHZ37QRWSuFAwweriRzmRfGm9fupDaRacumWJzvdKn2Gwi7C26zKs",
  "key37": "Vzk8c52WanwJU75wzV3eowh5QrwKg7b2p2GXfc1nkned7TvmqZXya8B6hWKVU8wrUSqZusuaBWMWWVo64Ct7WUs"
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
