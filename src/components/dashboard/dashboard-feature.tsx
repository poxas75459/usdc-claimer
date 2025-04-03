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
    "2puZ8CPkHMQzX4v29Z6bq1HM32U4ereF2kaSEqTdDja9Zi2NsfEs6BD24NJjaexCVbuWLz2nXRMZAePBwewHYr39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnmLC54wTRxunYRqLeTEudntg5e7NnJrS2MgzdkaAimrQPVntR1qinSYGLZUtmf67csPQCT78PoQirJadv7rxSG",
  "key1": "4yEbkMNjKaoSqeEjT51t6bQSHCMGqqmSkUg9w5msU9fu56So3MagWYABjUiConoi1XbWEFuPn9jdpZTXoWU2KeWi",
  "key2": "4m2mbvsXPq5faBChRWa71pFtNcnTdayQkMaYXWNMV6C8eUyJZ9KB8bKdZwmgxnfPH7mnKvynzAQZVwk2E36nabfT",
  "key3": "3r8DoWPUJFNQ7BAUwJBekN9SMa6DNyKFbNXCLrJ2rtNQ9yHmXGXU36FE4rQyTFUDTUYW6FCC5Gwfx31K8qw1txvZ",
  "key4": "5txGTiacbDT6CaWeYzgdRVAvWEyAJWf838ZDV3mMonSgvNQP2W3cQ1rXLjfFy8saJPXrBRZMQmDYkcpnxLoSvXnq",
  "key5": "24gLqW4mVUnb5T9AYm43VxKVKy6UGADxYBhwu5mHVwezaDzwcnjJjgKWnjv1p1nnaHjFZnSAdZD7Kvqs22Nzim9M",
  "key6": "hkuGXq6X8rKk27oh5oeEm6MUTDa9mrWgfaux2DNf5g7boTDCFmyBZ5YEjyhxsqrS4ccjDcsNUE65P3kdW9qxvxG",
  "key7": "4V2Chmf7Lv2u1eq7bYZHq9CtSN4UYkkMy8nVfa3AjKdM1JE5osCz56PLCkuWYZ4XwvBBr8HK7eHEG57aHAKtapms",
  "key8": "3shvpjb5y6VSkityr6hf2oGP1ktRYAcJuPaXe9u2RAubKUa6CgDtcJopUUUV15kreLCSKhGbba3j4aJMxs6LzURu",
  "key9": "jbPKBNEcq522Y8UVGoUnAJx17JBArw4HGeXeDoCTqWx81EyhbgX6SyedB3UeZUmhWp3347QVbp7ePTTPVrTA1y3",
  "key10": "5M8L2P7i8sP4MjoZWCXEJFYvgz35o2Noby7W6rU9oPT2m7SkoXzdYa2wvfb4VXh9eKWvmWucg3gXETDxagLDgPMg",
  "key11": "2sfZxbdWZFwxwU99JYXzvsUN1XWGTxnvznqqMi8uDDf4LeXxzDx1G8FAb837Z8FD27PywDmncr3Hb2QrEUPt3LBs",
  "key12": "63wduCpXZ7zWLf4UeE7iz5h94fFFAdtQ7Agfy6m6oBLuM6s4JRexEaQv9nZasD6CEB9gC5b81SrYj9Lb2efcerUE",
  "key13": "3KcejeccjFreqEZLtA9BYuvWZtoG5sKZHCJRLhpQxTvxcC9tKb2oFsw67jf4x6Hgh5ayKdRD4G8uRNP16YAHkBUa",
  "key14": "5faGsu4uqnQi3H99JVjBSKab2QhXNNLmbtxxVLSVxe8tETeQCLf9R7BXwAHvD91Rf1CEsGNMpyJRUBHThKCJkrVP",
  "key15": "4mHvbNZdLanGh1HLXAwNQaAXnzYS28t87RCGaHoHgBDS5CHgdcNqJTJWdWG1HMVkrATbhy4YD18ei8RiJhr2Gqr",
  "key16": "XhjV88WFbAu9dpQRZfiFEUF6V97B998G8tvitbGQJjiUvqwqujGTfTX4NpQCFXwPtPXkWXfXvhE7Ghq18Fx7QyB",
  "key17": "3EJMHc7dyGzrTHGS8QmPYDLFHCp12TTE2vVqTBcJqERPfmErvUJWTQJVJGfhmEtrShyhFCJqbj22rUPGeDhGvQ5a",
  "key18": "35rHzo5CFh11H2siSqFskr9PviqQX8PHiNBM1uFLfJtAr1Bj6TSEhN4NrPHH475MsHXYWWkXid7bntMz47sLQNot",
  "key19": "28tPrVVcRyfJgZ8mnTk4MoZDMCcib9ZunFwqQzPXGUbbx2ex7vicqkXSkBqLTTqqj5CsSnSd3z1Jeuqn275k3L5T",
  "key20": "2GA2fj8rPMTwuGknzmhUbCTodiCpQkRn8J4gJsJtsL81AKMQ2hzbvp7MZUddDazkicjxniT7exDGFuy9b5oDuV5e",
  "key21": "4FYyNMMHC6ooqWpzrpZrWjmY6ScNfVsMpagW34HSx5MX5Yz19yr7mEuiV22RpQqehDB6WHbbKsg3GqiR5CRWzV1x",
  "key22": "36gRYRyYNwvgWjEBSJm1t6NhW9YTjrnDReLuN2qbdB6Xp7yv4r4FMH3hotmE2LS9A1n4FGhHFZ1ekCNoeD9cCnqb",
  "key23": "XpYeGHFegBpFQvm8W7QZTjdNqEVw3tzYFpVWqNwBBgQyYkHnbxu8FLsV7KeNUn5Q6jUmY5dNFs6zQ4KPcddqHfx",
  "key24": "TseJJewr9re82NpiCAGoHGtsJXy63MDwiUHG2YhztqTHCza3aNkGbFD6ZWCYJPbgp8TthJp5y74akdzjituCJni",
  "key25": "368SqqCDyZFAEXMHHxvDRKZbHfysfeAW5DW422hVUSFADMgCqiKn3z114Wc3MdLQRuM31usnWgE9JcJUaBe1PBjW",
  "key26": "3bN8b4bVSNTxnP2ijQ5ry4p8ko27GUzE86njaVZpt8yiNorGVqiderEByfTvxrKj3WwdoAQkmBwquyDZzfEyLURK",
  "key27": "5XN8yN5H3gwbA8mL7eQcyeNomQJkhVmc4Zb8zHLh9yZxiHSNA6intPJ3BGhUKJjhYjNpiozgUQD6GN332LMZd415",
  "key28": "jFKhoY2dZHXKWETTHRrpc4UmVXcfd3rDfRHS81GVSKPMCWVf1yDQ4QG1rHjWgctMuMsZwtgQmE7AQwzbpzhBzLo",
  "key29": "5c3txhuw2zAfxdmQpeg1xchRAkyn5r74RYPhEGzHPo1hewAtERLNGVPbkX4Ezgju9557zKngbw24xQVYnRemm7q2",
  "key30": "3Ei4rottCxsz6cPY62uBYkZCR7ZrFFYa8h9u2oTLzKPNhatMudRiVAGN6NqJ1RdZHfX36xezkYuBnANopY6Feveo",
  "key31": "5YzuRFvNYQ1LKy2m5SkjJV8AzcfigmcoAHN3iJsLWY2AYddz8jL2cpmfW67UrpzbtxbXMn9UmjfmS5uLh9dHS5DV",
  "key32": "3RLTYbznA3cJf9SRsJ9TocETTKXGst9qpGAm6dtQU9BApptUabdj8jxzzNX3FbJLq32WA2ADegoATCbxoSBNbneR",
  "key33": "32Fqjo9uX3aqzGhhaxiy239A6yN8RoU9LgNqeSqo7btoPHRpzjV8NLRFErdqZ4hAftnKgGXR6sezaKQyu9KWBeBF",
  "key34": "3Tw7hL6vXAa7kyzacwqVqTLVGoGNruME6AmuS99aSKRRBCahcD4LF7YEfsFtPyiVo3WdSxNq58rw2ZvvkhAPMCWw",
  "key35": "65nvJVNcXh3rJKqSMjLqpJ8ZUreCPRL1oBqVQh1KAGrFyUiQECnAtK5C6Dr8U78JZKttd3TWqxS7iTYtss2zYiL9",
  "key36": "kYeo14H7GauUsTFf6bdZ2ZFLrfjHzUDgEaiiNWYV7tjopcyax6VLqE6gGW1aAseTt3Kj4dwZLLGxvhXwKz2dDfm",
  "key37": "4AB1KhXfrTAYN4eZ33iiGq6NP1uxa9HY4v6XTHgpN2hkcw6J4wHix3fzMNSWop3yreLx2CHmkFJYP8ktVJq6YeEc",
  "key38": "4Ht3SELHMunmAMCTej8atEy82rR1G8YX5cnFk2gUiHb5CeYhxArcqNxsZ4P86kMNoCZNEsgV1GdgJ9GiiHmp7TnT",
  "key39": "52EanJDRWe26hzKdAwTjkYNo46X9igg4hDj9qC3mcTc9pKg9gsb5Hs7f85Tg3Ej1esXFdqBhc5TsY5YBS3emSb12",
  "key40": "2vEG3QAqQGzwHX1EzmYW2qxCV4hSysWHD5cvsuYhAJ4L2oNRxvXweDnG8p4v6bb8aq2oxRzhLPHgXH54ccWoZmoJ",
  "key41": "w5KcgVdGeuGBYNa9LPHiCrw6ArvrJouy6ez8cWeLiFkQHfmdw5joyCrLzaHktEoCrj8z84iYVY7zxvXKo1RNKYT",
  "key42": "4P3tYEyxKK3p3P3JTFsy8ZjHfLjjrtM3ZmB4CpnyfVncQxiFko1d7oQqiu15CpB3aRAJaG3LnJst14ZffPR2sVtn",
  "key43": "4tmnCuNWcHf9UJue5i8JaTF4He7TyGBQzDjJaRpKFym3sA4eSTG72h1DxCqyYXu3NHLhBnX1TdKYG9VY6gB5XqAY"
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
