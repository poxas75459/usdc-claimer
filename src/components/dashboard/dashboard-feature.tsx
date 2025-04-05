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
    "2o88a9LUoKW6iBCKogiv1EBFF35pfjTeqcspuzcswgfBMWPeDbxdYg8wrDspa4yqW2EKFVQndsGbEDo1vje1CzCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PSkTUVC98mV758d1CEPn6StheayvvaaiAKZ4MrVNooQbgiqmJgcVaMuSmWkn3Zq2H5zBGdKrxKnZVYbaAPfRb8T",
  "key1": "3JuosatuCMfwmvonBrdn6ZT7Soqd425Z8TBgHzxZVTLgUJpSfAdvrbRhSeWpm96WmUHsDioJNY6bX35nqcABifmZ",
  "key2": "27K2gcjvxX5HC9TeBAtunJEBTcLSgUKDDFgFHuNTruiHz6nHuMU91QGC5fQtEp9oWRzT4Q7V67uEt3859eGUT4wR",
  "key3": "5TFUzZY8dpATohyUusrmLXT58weUzzNLpYMDYmcMkHvydKUttBuiy3xNJ3upDW1CfGiPxiwuxmKPajqGzS3qophe",
  "key4": "53eV2NypBfM1bRt4op9oT81n9WUb9kSrwgqV2cCpBiS9Di1JXaVnm7jGpiWBE8oFDKWX7sAXo6cXfsLLa46ZQpos",
  "key5": "4urX8hAxDytPSxm2buQVBzqSiNqBSm3ST6woKtpC7PeAsALf9TBYHAouRU4JuH23123BhiFPxg76PJU9VsgKqVX7",
  "key6": "4DtjYzU5hhbWMYNQZwRre3v3ZxFGaLvdU69sfTi8VmfgUNukT5u1rDx4TLm7Q3AmihMZhmLgXs7qJ2wj88MpdYmB",
  "key7": "2tPAkhjqUKwo4mVMJDahpL5r8VfEkcvdM9ue4Njger4XBeCp1qKQiKjj1W24dH7BG9yCcLK5zv1nWmWnJ7UKvKZr",
  "key8": "5pTp8pyD5gn3MEPM6SAsHehboYkELCe5ugqy1uM9v6QpjjfGA8RoaWrqiKoZXJNWKN7E4YFgDweadeKTsokWWLFH",
  "key9": "uZkjixocUUwfZeorKnGmNjEXYY1qESVeZq6ZvFy5oUfS2YbfmabV1rRtonFaph5fTsM3gLJt94VFpGnz5sHexNT",
  "key10": "57eoRiDgErdP94AUFpmJTJ3PPRSfb8PKK9MNDaqGA3r6DrRcLSrt58A3QL59aX8d44bnP3YPWppbs9N1nEhBJ9Dv",
  "key11": "58ZUJ4eQGV16wKk96QrTmKt78NUaJvzXvis9Mn4a2ojb38QuNLQChcZW2mAXgorBgDjuS99B3BgFBr3jTzYMPLVb",
  "key12": "5RSJ5xofvez7yXxe1mYC2T6nVuk8ZMHEPmYfYkUKxpAUsFGKFcn1Vrax8HveybjkUma9yNqnkVgWncVfa2PZN2VQ",
  "key13": "5DE21Mvabxuoobip3HAu2Eo6BrZEpEkCSFpV23n86thtVArrnwK7YAyTtb3VJxM3MJhiub1k9Ni92dQHjTnjcVwf",
  "key14": "47CH5XZSEH9eDPVb4Zga8kjFMYxEw6cb1Z54kLZyJg1vM5wgGu7UVydSCJuEam31y2WzeGDME5fdqxtM8giTHV1G",
  "key15": "obYYDEgQYJ8P3wBnAeuWaax9WJhsMTkTutowHdYKBFUq3FGCu37PVEcoYMBqYgHTnDbSJygdjoAY5ULCqTVGhmG",
  "key16": "5kt1V77XhZiufcVZeyGpR14b49717i9AcN3RVE4VYKG4QNZHXH51qxr8VcY8TknKzSGL89Hu4h5qkbJtHZ2zs1x",
  "key17": "4TKH733q8Um2grS2BbpuvWaipUhLQu8dHHNo5oPUH6jb5NrXRw3uUBNoYi1X5Z4AbNcXJ43JtpHWSFEKU8Z8fTeZ",
  "key18": "59xxjNwwhwABfpoGXtkoKQ5MbKJUruDJ8naPjnoBskW4fwyjyiH2JWjA9ibD1BuU9jYLbgMyNniAe6nbDTFw8BG8",
  "key19": "3uraTAduXJsYMDiSbMM8FaPvpXmNxvBUL35mFtPf8dhTv8ewDoGbPb4gkegJB9VYt4iphSNjrXVqq8vgScSWGvQ",
  "key20": "eiKnJbfFQwXdmUfLfGHwXU58QZ7DQqvo8AfPRg4SbRa3GHdAzJJNzrgjzrYgDhWXZGKgHwBFngReS4ZLiRmmJC9",
  "key21": "2XctASYCrFDYmjTJtnWwmBbj7Ss5gzH7k4HaD5JZqNKSN7e2jnX8zh61zWZNXV5m56NDKUrawG7vhAzyVjj7Yr1e",
  "key22": "4SYmsNPFnqkBCdP2BCV6qKo83iHJ3DwTg7nZo2xSkJBXzpASVZgms4LPw5abCeMLQseyh4DN1UTzyW8ZeUL4ZSqn",
  "key23": "5BgKAmQCdTpjoXHQgfJQZzy4sxE5oWFWUtm3bCGmDWp83TXPm5jgv8rbjef8oeo9qUMnm7Vg3nAeyHRpyysh7Jzy",
  "key24": "2ArGDReQb2KTibvc78Cua1sne7dEpyiGJnRGQXAxrnucmb4bFepqmswQZg6dAuuZSf4NuioeAGmYSDa5ypnVZRgv",
  "key25": "LKVZaTWRfXi7wb1kNzPfiSUkaY1XTPF4dtAtajFrpWSiTusb1xB6sdHmoYQiVhqhbMwERAHXmcRG7uAdgo12JWN",
  "key26": "3QKcsuudDky85YYE2AvYBJMWYHfysNbnk5KGhazyU2CdrnDH7n5nifMBnKUvXrFEwuUwxhLdNwgG869YB9xsPT9f",
  "key27": "2ebUqfM5qRCNQbS6tzdQqAHwNegFU2tm77v59WBteSkui9Hc9DyZ3N8sE732iwXinzfegRTZ82yb5UKuAaa2PRQd",
  "key28": "5St2mS8SUMkJSWLRu54yJFrA3qxwhPDsnmdJWiVBdsGATmQzyncqED2z5QKRFfQRRYUAXe5D2VsdeFkrYXSfdb3V",
  "key29": "4YYVUuxyd3w6J4jdKjmk7yLwuBxfizXHnkTP7ZEA28ULtk1iGARfNCnZMDiT2FwdQ8xWCMSbQH98rMLkRQeQKUtk",
  "key30": "5WeHac99jmDr52r4HRoW8vSyWuh5LCEBo4kXrQnAW3w13zUmwesiQiSDXrhUrDNRnvZty9Tw8ycFGwugrWmkx1qP",
  "key31": "2iPDDjHtvHtD4fLqgj7RUEww2vAjzWUx8mz89RG5agobEzFL69qyU5scpBCBMvuUGQBbheY6iVzx9LwamEuyfdoj",
  "key32": "4e7iKfVC3576aC34dXq8yeaiLmtbycu5SgZE5bonw9YNrFrhqpJSGhuiyJe5JArd7eqfQFY53aAskoqtszPjY1C9",
  "key33": "SkTT6Rbc3qkxB74xvufC7z2ZwWn9oQLS6eK8sCMpKeDBU7HvTssexhEE4cqCbEF4L2ryLbTsGnashyFGjBdE6iy"
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
