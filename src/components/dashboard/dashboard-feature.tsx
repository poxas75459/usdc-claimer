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
    "66xboW7esZbcnXbYQ9HFrXkh9yJnM26hd4ofzUymLBz7eoUDYhfuPzFeVWVQsivozhXzzobsDd4StefeoUiXgfF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYBZVoSwnRBDdr9A4s9s3Q6Nab1EgADA2cHJeqrSY8zysubnh2g2CTXWUj6BvsQndYYpPGxVb5ku8DWKkQNafgU",
  "key1": "57rie4ErqGxQ4QSNyoyj3WCEvRvgvRHC5oKAWfSQiwP76afdBoYoWCKfVDaAkWxz4u8CtseHW8Df5gEvjA3kSdFU",
  "key2": "6VuXSa9yjtg6BhXuJtizqxm32U8f13VHk5c8gtX8XAyitgsDUTVYxF6ySK9gDtGLHswsAkVi5QR6XDvYtR24rsz",
  "key3": "3Q5bJVMSRuXXUxMUm7c8JySWyA5Y9Ry1nTE14dtdRv7a6odWhTx4RjxGVBmLvxvJuK4u2Bw6Zg2rPori7Ah5ktxQ",
  "key4": "5PC7qzTV7shD7KuQGMY1ZppRpbRi5w6YiKshb8eabkUnYz4x8xYoofrZz5wqHif7PEGXCs1Wr1sJcWosdNVPhb2i",
  "key5": "3BuEuKxzBWJi6frVrNGfXFHukcsCB8teutPG1avXMJRvyo2Lv8eeXrd27FwwanJ8fKXqViMhqBY6BKYGGWG5Sbp6",
  "key6": "4FkukPBrLSdrKxn8po27guJH5ryvN82VvLnxKsKESJXFN6X8mYK5d94v348qR8d6Jf2BvvBkfyUfRqncuprty5z7",
  "key7": "44oovcAERQeT6qasdxqWmM8aKTzP1YBZ7fdnT83eXDwVjdC4UYLgcgNTEinFPziGv2FfaxrwmcQ81kdV3s9EP5Hu",
  "key8": "huQZAL9XWrmpwZRPA8EQLqKEsQ5G32kqfCRa5JHbBQc3PGuUZJ6cVWvSiRup5DjEt43gYBDhN5WnC4KcrrA7f9h",
  "key9": "34adRaFfmCM2nKPvzKjvZwVeP7fEVwBeArj21p4dc1Jggo1KYoLfmmmLc8DUpDkNURvpwsZo2eaMVjick43ZxShu",
  "key10": "VvzesBCYpiSpzvpWbb51NUKAGH6tQtQkYgythPHgkUiDHcaxLAM8UEbSbiELenBXbSz65VAkezTKvJ8E9PTxwZw",
  "key11": "4YXyPhKes5nSn9ymU7urE83aTHkju1PNqXyBuMkQA8onHMdc3qWERAcUZaKTNTfiTQSWHUNLUzQLEYAGNrR6eWqK",
  "key12": "4pAH8SPKuv96iUuzwZ333KDmi7aaEH7TBYcA8CAzCu5K2PtDPJQFP4dqJRivTyetzGZxd6skxU6rEU6p3wQBePUg",
  "key13": "2cJUXUwH5KoXx5tRGEiPPE6cCuhyVUdrAFH8Q8sdfsPXHbcW3QjK6z3uRPu7GzCSHLpzXGkPwiiLnUPTUw4cbTbA",
  "key14": "5dJ3ZuAHqqZsEQ64eUDJEmP4kVgzk9jGxroqfNySMrotyk2avNapxp6DhoHSP5yNpAVFqcdS2ydJ6W7sD9CCSLbk",
  "key15": "46AiQnRV4p967tAhxpmVpm62E4JfqyVJEEjxcn99RAfDpvzmA3h16jGRGR72pxKup4Xvpm2GYddNVejZGzBKsAKc",
  "key16": "41dxBrUXut8HhdVK4ayJVcXfBAKrUF5GRncTcMRWwykAFvjjNW89MGyzyocyqXBXRRxwQVivTvpGySDEJBYrS4RW",
  "key17": "5NHTm7SxCP1Aiu1Czxn3S1hjP2ej2rzu1JTGYR13SUFgBua4eUyRnc3sgScRuo4jZxuCKgpzYawDhBCDusrb8yDk",
  "key18": "3sRErny7eTYpLAhT3tD712owPEyWse7KWof2oviFoZf7m2wZwtz1iHtJyHRXcUpM8zAApKhQTN4TfzdK9pw4x6qg",
  "key19": "528keRrKbrz19VaHjPJmQemz8Yjmcz9DHQvwELmduie9G6J7DCtTWNuhc6tqLqeCHXioCXQZ3gAT6EtdKA4e3PsT",
  "key20": "3da3ppx4UeUggYReokhtTYAkX7WrEepJU3fY3xeCMswxojMKhsNJXhvHMvFwhbuc3JmTo5GDHoDnKjV2fkq1caVK",
  "key21": "5taHUBbbqrA35CfPzdXkyWfwuFVBUzxL5WsJ9i6KcxaMeJLqaHjR9zPV3zLzqHoDg8M4vGrVrYM5y6PtJXiffp6v",
  "key22": "3vztEev5p9XNJwGbDeD4DPRc699ZtD7HxJtrDQXbd1AdCxvnfAruM8R6tKKaJGCdzPVsft7UqVSAssHRdPPYEqrv",
  "key23": "2rk6GVQrjJ2MrWX5E4LGcNsWQ16LmgyGbYosdUeDrUGMD2qJqdmrSSqhpqaZVDDuXwQYnzVaZn7F28gonSi9fEEH",
  "key24": "5Wd8qwU8LDbavRuDhLnGSDeMp9gKJBz3b6dRDaZbTeTGhytAK18WkUn37eHEP4nd9RFCi5cHzF8354yvHJgNy353",
  "key25": "bEWmqGmBmy7p2Mv4NWaquP5uEgs2g7AZy5bXSka3vpLb9qDxE5w38TEdJ522ebpR5mjjuTjK9MyRdqgeHYgwuoz",
  "key26": "5Hx46HMzgRDKNpfU47v68zgfrh552Q1TtWtDqwPChXvEp6tcq9wYVWM2jVxTcHiWBZ2G6b5aFXAdrc8E9hohFiYb",
  "key27": "3RgSsxVzv7tY94GpEohrcPXeypAM51hfVgCwo4t778EqfnkdFPRGPGAMUnrjPxjYPEHAEekzRV5edX324w6QvoZg",
  "key28": "5U1N2mFjWD82a6z4atC6P1adRgBdrNz5DtQrr3iGH5UJKSGUy2e9eqMWVKb1yiNKHKX3XssHEYAn1M2E3Me24n9c",
  "key29": "44PEuoFEgs2NbBtbQ66oMsxc5bCpLeD1pfh1XdR1efArBKsxHA8YkTH6j8Pcm8dUkbJtTNHmwtxHjG618Yoo4WGK",
  "key30": "2EFhfC7kbdyx9EDRHo3yBqe3ChPZ279rNuHVZeWfekBUQ4RtCaW6Af1T8ycz14Ldg4MyreLZWzYqwmp4Vut49mHX",
  "key31": "4sck1Zn7czZnTbEGp1ck26F3qKiDzUE4LQU5bJhC7W3teozs69nXEvHJijAfC3pDgRNMJSAEMG647FS9SAisctbn",
  "key32": "35dVy4a85cWVVPWfJn21La7cvcVjHMoJEAAJ4cU8kGTebaQsicf5KngS7UVjhEiPee97dnX4CKysExswHcVsZjY5",
  "key33": "3rEoUdwgmXJDvCsPyHvjTvPKy1zC7N4nKAyDasfBgUUxLubuWne1HuX941aVZ4ccEsWku396VEFTTHT3dmUNA823",
  "key34": "5iAHZkrvwbPNsJxboVSnsCGqyvhKkTHupzHRFpVfw19EgErctcBxoyqyAx2Uh77BxM4i7F18Ec1aUm6xctu7otYJ",
  "key35": "4X3tHcjtbgzSUdiU9rPtsNnAN4E4fupQBvFpTbgkm5ejgAKU9QsViXzmLrJyskbdwnbQZa6fEUN1FRvHHpwz7LN1"
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
