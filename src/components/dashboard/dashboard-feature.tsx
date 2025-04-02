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
    "4LRP1gwUMLwvRrzvQqacE38HURsnLLJaX1MFcK2vtyG92RL2ChjaqekamFnGcBHKqpLLWHmKdmJ5nT6LjYZ3npH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XXYGhtcYeGq78b3QkQQ3XEkJoBfwC6CEv47yUZ7FEVgMMDwD8hWsceTPqeZJZnGKpKtc54q5ccKg4pYDtxzjffc",
  "key1": "szonp7dtF1VaMJG33E8MZKha14qhxn6tS1hkpusPjQHnaCLyoKrGS8qHt4e3WuJb9XusMkE6aidauXT6QtoB8ko",
  "key2": "Fkb9giZrRaUSxtb5jsqfFb9cECobSyFuTxSUT4os28VfcwRqxBmLQG9jyQUcU5dckLfijWQ8iDFAvkE2vwC4YYe",
  "key3": "NrVoFjoKvG5m1ah5MkCut1J4cqRtGAgyjVAy9RmQMyGG2nQFeJx5iquSnqY1dx9TdyVTk2q6FcbBtT9KDkkDk1q",
  "key4": "2DfRkvuD3KVZhT4KJp2X8zFHUMMcW4hH46go1oidUbe9FBBuw3EtL2ywaBxTyFeNScyZNKSWpdP6K6Wtmpobkznn",
  "key5": "5412bircX2dn62nnT28cB6Cxp6uUeZQH89ejYHVkfB2U8m9sRZFcdfcb9C46tHZWu2qx4Z5K5AiFD3VuRHRtaeCy",
  "key6": "3BTdsCx6roi64Few1MDthmWaj43sjN3aTubw4bYowPDNAQg2TQ5G8uDjRW3AEXehr7Qkjc1Y2qYfHCCT239iVHTr",
  "key7": "3cqhmtjrwXSYd7hReanA1FoQi7QQwGcUNGM1bYRrdka5eLvv9AiWp1ziKNviTVG79ZXy2bFUVethL2xYUJzeF6kp",
  "key8": "EhCKhutN4vnoGTxREJhvd2UBwbM1WxbhJKaNQgJLxfUXpq64XXPddQk6s4fGZho9maXp99HznAbxNAxaczZgE9V",
  "key9": "3XjSgj9U2wTp8VfQ5wurocyvey1T3AaWDbXav1MuEGp3RFs3LF9QLtVVF3Nm6ZJA4tf9bW5fwPahbb9WRhiYzSEK",
  "key10": "5NukbWaHfnDKNfbR882Rw58zizppGKDGHp8xL2DU7tmmtAScmWcSV1dcuZsHq7KqdceNgWCryiUpxjepJ2BoXgot",
  "key11": "TT1LgRd6x7zzLQFVGgiUCC4fjmt1Yom5AqxBgFtPWzDeR3RB7uURWSUXh22DmwzCbUhpAgNV5ox4bfMxJoFEU3t",
  "key12": "3HkNP4vCmDJA8QHccKoWiJZXmAHusZJ7pbbRqfgwkLhKLvMsjSGP1Hxd8mAcVbxPQzHPkqwNkbo1X48N5gGKC4f9",
  "key13": "2N1f8hfaXDFrgtsQrBLpteZwwTdB7YR6UsbPsHSJrhCbvWvxPgNtCtQpzafYpsa5gYFeKBz9EbnZFvFtyx8qBw6H",
  "key14": "5bBQFHAyfgpadqRFsPuhx84QU3cUGVpQtFpVjcH37RCxxxQw8UVkaz554DoKjkhVVhLokNeGRnNatUyqDdsdA8wE",
  "key15": "3UFoJeiKRdbX1dxpf9hJ3Jo6qLfVkn7UhDC8WrgT4tMhxFSUjkazwU7qyPS5m9JQZD71PJgyTh34XBvpzt6VMzyV",
  "key16": "BrxD8eL7cAnmQa6NrPqVp6YVkVbVLQCDJkNVFUCqxAyUE1ce7S2AbupGUPsT7DaaUzny7AZrtsvauK3ieJZ8Xpq",
  "key17": "2Cs2LT9gTRrzpgfzMw2drTfD9r7aaBhK1RKDaHieUbrdmKTHvsT9djuFXewFbj823W7Hhs6MAmgdpesTNa9Z8L5n",
  "key18": "oBTZWeffWgmXYtLG5ZUWQuU3679wDncLuSxMLBT2TDtzxJgjAjHkpWsGmdbs7yP4dJ7oGS9yyvVbUUK6w59F6AD",
  "key19": "eYM4TmCNDjHRtBxuvxFmRT2HVALUx2DTrEetCgSkCRPR8V2nMKYqhJ8Dkfk2ghtKNzhdzx1EGJahL6WnC42Nsd3",
  "key20": "ktYtHp5DMU8W2Z9YppB8iQWcRz7oreTu49i2oZEwK6o5QWHJpxCoTHtRjng7gg6zhJYkihKKexre1R1fS1VWswK",
  "key21": "T6i59k2F4ZKamqtkRs2VwJfdV38nGS4dgkvLaNJV3mHXcNw3KaZRtb8mf9HRLhG2UemdET4qrSZ14sbwmQfrHqb",
  "key22": "3hAvatxMMos5qCj7fEq2qnNkyRwBeFfV8Ur1TScnCwHYVgnXekfF5y3h6U5X29cVXyWmExyrNJzbMesg79PDsZie",
  "key23": "577LaM8nLKK1dAWYKJSu6XcRTAMKfVFWHE5k9ZJUFcypguS8EVSwUnoaqP9gvJ5c8CpD6PNgzxMK6rFwfXNFmTAb",
  "key24": "3iMMXPpu9ZfJqSDvVLbMyrq8FHt8fh2pc2T3Z6E1nDDccDFbEeCY7gQD11X7UBvPWR3BWziYSkCRmSBkL6gNAmzu",
  "key25": "K5N8SfdYBmRdFEq4fuuUC67my6oHgsDBMqXDpGYhYqeQbQj9AMss1zcEsE1poRrnoCoP6PDpDnPmyq4nDYnR5nU",
  "key26": "FZavFHvjCKoMfL1MEarFtSVVUcsd8h586u9zgysgwx9drrHVCHPLeMVhijNEwC1JNxrduY9bVRMUBfhNdz8aAYY",
  "key27": "3QdGMLA2whND3hckTpiEr5FgyTh1mrmg5pmxURmT1PpqAdmCcGRre8RJaiJqP1ufzTCbyveWQp5nXKhLU4i6rF2S",
  "key28": "7kkthyryXC6bSS8Ke4m1f3kQWQJtx9FDd9dNtA1QF8J1LUs7nzFAyVPzd5by5xnckHRQYPc1KgatMKmBBiR3e3P",
  "key29": "2QseP1Y3inJRXCsQxQW3t91io7SZsQ6Cou9fo6GvGfFEycRu5RrDwbB1GvcfKChPT2LWaNf6ti7QCDRcCnkd1VLs",
  "key30": "2KZKLCsdyce8yfiddB4Ry42qqBrYdvNF9eeKuCjXA9VjXdLUnNEHZ1w2TctSzYkNSrou2fQcGadJTzUpzujQNVrV"
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
