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
    "2bVgZx3vAQQZ4EhUxVpHMHDs69cX9AGB4XBp1dH8Y6S2SaMX8Rk9cq5kxWzfYW8PGXmKpCsX7nYyT9DLvAWm6bRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsJxxVtmJY5mbpZMhRHvNNKV4W8GLreWUj9W9ZpKNEPqmvyh3HpRypBCJrWKzdh4zvLn77hchKgq3XXUDx1DAVg",
  "key1": "2crMSbs9wBuBWnPbQQyt5WWQjbwBqq164mPxzVKZ4X9vwY1SVzgX4fySbiRgZyYw2Xyz6fHdeTLXyDtvug7Ky8Qe",
  "key2": "3MHagB7tJtnWBtp9xK4r16APmoXatFySFwoFeckjcvFPPjKC2sp4QQLFfpXirnghMpGe8tzsEE1qcrC5QHVxXXii",
  "key3": "5oqvDp6TpZg1LY1xBDjnsyc713bCztCYdY15UN5LAbJPtfzSaLLZ2DVd6j12nVCSa7MLSeveDguMsyXAHKriRecU",
  "key4": "22GPqjedHp2huEGAgNGNSunUqeNyJuX2xJU1z4ZjHi9Rf9vSTrZTUjor5dnDVko5H6xG8kv74DU4yT5inkzFAiCt",
  "key5": "2mdioF5hbj184uPavuocCidbTunxonP9TiuQLrjtaLj4Fak571jvkvMaixXRJ5H6RshfhXNuKWuDGqkAYY8eJPr9",
  "key6": "2prNwnHpL5Ju8HDTobkp1PCxFXFUTytx25UdUkYPVGUhWgt8AccbGKXm5owiSW2iyKe2NBUJ5MSvZ6SMt7DRBQib",
  "key7": "vcRiHMDKvYt29yDcgwFUN8efw5GZEpqYNHYRjM2Qem4j9BKtoxa6rnK7dS6a5L6ub2EJTBG36oN7sJPqh6fd1mT",
  "key8": "3DiqrhWzcFVNGnZFkCouLgCPcC6okmkabEzdrwpmPfjMyYuTFEu3sYMcaiUNnghu6JAmCYfkDpRYZEHd6P7shQ8n",
  "key9": "596esMCwECYhDJJYct6ck4Zub1tQXmeadEATHRSjHd5DiTvBjKrSmks7sANt8H7Kq11nDDUXdN1suYmMX8gQFupU",
  "key10": "5j3yAEXLfPYRXRBRCz9EdhmX2BEg1yt7ntWUBhkjViqQNgHCVg4HGVjBnEA4gjjyvZtNuEjUMBC1fyN1WqEdbLR4",
  "key11": "3FrzSR57sMQh4X9KmxXLyYs5jq2Akk5egqCf5WEZeTTRHRgpPdvvDL6Yz6wEArZqUQHy8xjn6T3PgP4AweaYvQJj",
  "key12": "q14LgtZnWGc7RYu97JM38x5Fv6bLFq4Cfi1KaF1X5KpBkvXfKzdJCsQZYcZyr4SZW1Dq51SQffAKvZbRVXfNxw9",
  "key13": "V6nk49TSRzwfa92WgPU6V7U2zRJfXDD9U8WaapKnFP9NUU4QRNPgGcDjKuFjGLdQkaArMuuADrVmCM1e9maqcsr",
  "key14": "4EpdmRoUYbtzmrUh1FMbGfEqex3PmdZ44v3FDetTJWKLDv5DHHiuC8vxGdj4jRGxVbb1nCCfLoN4kcYWmY7Bt1qS",
  "key15": "45m9abzvm3RWUb7KBqAY69vExVZDiY49UMRcjKavH4X4C2gNoA3H8C8FhvsUvo9HmXM8GuPaDTnTBNhEGDeSh5Jd",
  "key16": "65ipU19NwGzuG8XfswQwSdjaBpa6GJVERbD33D8EPSjgZDSxqUvPmPFJTq2915sYuQYE39gku17DdYPX5BWv6goS",
  "key17": "5Q9MZbdafHgm95vaY5AxVPCj1pTGHNPF5sSi15cr3nyMybR9UEv59akwPe2R1votauhCh5VnYDacVNX3EhbtgA5c",
  "key18": "5YKLSMa2caQ2v4M8uY7uZP98r84U7iTpNER7HGZ1a5UvAh42GqS31GpCNUxHCYEAyzi25y6RNj5gR9eRcrrh2vup",
  "key19": "3ybY877dUAdu6wbUy4g5EnNbLQh3uzEaqDTYFddnPAWUWmPmqHjaqysnYo6rN5MsP7gCc1XQxbpD35FKEfCugiK7",
  "key20": "JgmQrVeaLMc787JdaeYEtrAuzcVwNET1HK7DXbdQxhCkmKmkku2H1iCQPK3mmnVgZLsi4jGFiqzPpW2piGTm9EZ",
  "key21": "25CJe16y31w6YK3EhnTVbF92XdxzqfiNW8QUJQYD8RQmrGtaWSDd3rRUQUDvuSA6xRsZZGPPN7Xc312SZidSu7BP",
  "key22": "47uiHR99CBdHz5JFVViW1XtfGCHzdhBNuSuqn7MsbFmqLqeM41Xdggv9eTXstPKVrg5pvDH4zk6czPPnksZ7Yn6D",
  "key23": "46ngTB4Mh63pFdRnqQy7U1pKBBWmtVErxTHueE9QoTD7tgcLuj4CihBRm3y3kEB95tXV2Yn3wjRC2JZVBo9tev2G",
  "key24": "48eQwMpWEmdPcQ3UHXTzBJxH4s2nHzEj9Hk53Xgm874prnsfwU3mgp71scjsi1zVeE1BRZ6oWPaNDMpjECm6aDUS",
  "key25": "5L1ym5mKwYV4CuzGaarNvcqzsUj9SUr2BLMb25ScTgZoSpPfTdzuiAdndCZdSeZ6AWCzeqzbciPMKbsXcuc9m4yk",
  "key26": "mf3SeNEWWmKL7JcUogUFQTDXH56SZuvNR3aPLdaG4chqrNwihZiiigmgujEf1XD8urFqhARsN2MKDi6uKaJEph7",
  "key27": "LbRsEJxGif9ahuHgzsziW8831y53dtpy7rgEqtd5srH9MP62icJdjqsPWifuJLFhf64wymvTTzC1RYBSnig876k",
  "key28": "5ZcFZ8ARsuxHMs7bmdytuCYQVa5xjrDtaZoUrCXjwLSm4xU7uh4mRGH1kzH4r8ah4Y9BrweUFN6UTVgAui7YcziV",
  "key29": "238AijrAyqpGfbnzFjFAffpNgXcBctyBN6hTxvwX3e6QFA8Vu8HU3K69Kpok9z3CDHxkNguRDkK9mzFJoQvv3JTy",
  "key30": "4zCjrZt7oeVMskFB1V8XudY9k12GsQdyLdVMCHE6bBeyD5VJxfFA9yj4VpQjcjd54Z9GiSrwtoFojVisqcce9fWh",
  "key31": "3b2wgCnPJygh9zn4fBPgczE2DeF5BShhYD9QgC316gwVYLDM6nuQsxsrf7E6uiF2Scm3c6mzgUbYZcmwDQagWxtu"
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
