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
    "AP2pkTvz5jHjr8pxWEjFPeUmrk5JNeQE37qtx6D9VMZsyZLbdxcUvQRG5RZAai4fgMysAJpGmZXiGaG73CE7EPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTpSgSvMxW6JWJhSQuCNsaaXa41TqgMvq8RFNqMfKq5gxMWUkXxNfQfazGxJddUMibMuhBANfEKVLthD3Eb4aob",
  "key1": "3pfJAJ3V5a9KYSfS2koQxnRfoFQS97xuN2L7P6HTZJxdgrgcXoGkCSK3UYbTMffpeYKmL8SDDoxmxriLYLrNZozQ",
  "key2": "3ZVAxd7PUZLr8MR8yKUoperZ9rC19B7tryDNa5xTQ68GAqspZ7F3D4B1YBhaVeKejEfKy6LNmbK7Mbu88yE3yP27",
  "key3": "3S53rU86vvT3Q9JqHqrmqi5paDFrybG58uEtkX3Jm23RHPbVzycY6DTYVfp5SGEjU785nHmUQUFx9hHr1i2QjWsh",
  "key4": "25q3wUqQ1hSaJGunPEBGqRD83y6rTUjWARQ9dCJweekgi4tyXdFrhCngfWgKWBL8JCAA1TGQT5WcCccKgPe2fnnK",
  "key5": "3X6YE2ZvHnukDtYnHtDqyzqgCf6TSktTzb74kxzdhp8jTtNx4wqRTSqLEiT5BdnayfhuATz1uoJmCkXwujanF3Vm",
  "key6": "4nHoqFurND1Q2WBiWehd8TtFE71FQvirvXVCoKBmKVfksp7MDuwfa5zugotT3GdjLYdPd2GULXCWWoJjBGUzyaj5",
  "key7": "4T3vb6XQjVraJst7ugCNWZPBj2QrbGScbg8u6DmdYyg2HipKzf2zpdP9PqQgCpFWD83XY4PGSzdvBhFJxw8EJqaY",
  "key8": "59251NRjRExSt4eHa6KWHURGmzqXDEQT9mtVYqME1BZaKNJmD38KWV8idam9p1WWoipjNVQHp5WRZUEzpr7n1JBC",
  "key9": "vkGT7YF7nk6gzuXVkabuM17gPy75xyAiuUrNcXRtysNpiDUscYPYV4bKA3wVde4bKjwRNAR5rdnD9VrrZDns4DY",
  "key10": "2VDK5bjrfcUV3QtygNgamnU5HGkuFRHSEtyMspeDf2cnS89EiHobswEeAtkx3vvisShGFV1XLvzVYpen93rwg1L4",
  "key11": "CZsVpa4sxEeigLFFdr5DF7CYueNDrNmHzNcNikcfNZUuSvgidPBqN8Bo7eBB9ZX9WsqX6CmWxdfSzNGsHfPqfY2",
  "key12": "3FWsbookLyG1VgVV1qR46BxmUmcKouMz5tXUoibTsjuVXgUu4bNz3XKgeDDhhSFHN5TuyFcswS2tzFvAVutJPfEU",
  "key13": "3uQXZ1CzNKcqjX6LhD8VHSp1UDDeLZFRWuraFGfL1LvEFmYTn1jVQbiujeziDFdLPq8y9B5ReSRQbTFMdaCxDATL",
  "key14": "DAnJSWcpB7gzMKsrmHAv21L76EHEDQHTBTM3TmnfzBsbfGikr9fm34348pYBwvNQEjrnwXvmBfAxTCmpyY7eF4G",
  "key15": "8wPAYrX8RMj6AVb4H6basZASWEwwAs8tGQYbittx9VSheJC6TE2dZ6owTiGAEWsC9S6ZaFvVz1nzHGhHUpW7fwn",
  "key16": "3fBK4eX5kq74c6obwvxy62cZej1qeRxgjH7iv9jc3PpFucDK2sUXe7k3yxzh6i1huHMMMwr6et5PP4mznqVL1Gre",
  "key17": "5cdpLjnpAXVT3d955fVpBtc5Wxyxsrz4TTEvsDxQhKAAhGzw7qijYRSkp6C3WWdd3VeZ38zjWXnEdicip6ZXvF6F",
  "key18": "UrzXYXys6g9hNg7EHwNyNctrJp5cCpvX2XfwfWtAHqm3kRGn8cFfexuPq3iukQGBsidj7SVmgus3sn2cBt9M8NW",
  "key19": "bSXeatf54Pa9FGYqKYPmNg52qhb7J4yp7beBrmsnHMSXNMa1SoT7PefwTsErmncA44s8GgHnTQ8WfkCfRHqkjWG",
  "key20": "3gDSkczUddMnZL9GDKy3jZpkvEeZce3DFs8qBXzCvE9Rw7g4js73vhQTDqt6qZ4K7YdSqhHpJsh1xJMVht7erFHb",
  "key21": "4UcNc9daWxiy5VfYRK3AxtLmxBSXmE2M4KfQz6igXnq7dwaDx6A5bTcfBVVkeemUAckax8XqPLAnEHm3GqKbRXt",
  "key22": "3WjQvvZkP9ZNW2M86Ge43yWEAZ2QAsn6vb7N4W4FE6Et7Z2adELzDw4MiEqb9pgUjCPAqwfRvtmTnGWw6en4WnwM",
  "key23": "3ub68QsggF3J5BoQ5CA2U8quRsPZ5LcykfDsA75ezvpuUTGxg6vvSum6gghpd1YLZB8XkCneDYe2yZSAyf9Pmu1A",
  "key24": "3EYLeZCvYZS8JKcD3NYz61jWzdvA1D36AbcNzmuRXu3Qg92rGdSpTG26sYCqoqr5JSG148T65pcBGFyF8EV6NTe2",
  "key25": "5e9rioURk1vkdABL2n2TEefupQCGRa8ey13mDdoPVMHYBidzaxujLkQQeLkPkJVGb2JTjtQYBiSD8CZqysQLyMyv",
  "key26": "3y7v3FmBADtUFrF7na7ki1n9aC1g2e2X9Yc8mQY5YHNgAHnjZeWzs23Bukjd9h8QUY4WxxW6T8VmfNmgQrzRRTcM",
  "key27": "CQ3isxkMPap4YyquTdKZZGdmXzyyzYpMPc7snv3pY3fVLAsq2mUib7DuWV984C2x4MboonAWjST8zF7N3JgjD6q",
  "key28": "3H1PpKynNAcw8VRM29JxGZrUmj5ULW3h5r6Cbo55WotejsDAeN9a4GA21jegDRTiNNCsaH75wo83rFrEwGi1L6iY",
  "key29": "3KedQ7sbVdNV52PPUnSZLHuXu5FBv4XojxZKm1ywa7SjbWt5w7smfWfdY6Ge6w91SeSiu2KXQeikHJyoXxDRgcau"
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
