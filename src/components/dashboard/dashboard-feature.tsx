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
    "5fRvzPwp3myrmaKEq6VV8Zw4oMnzW1bnoV92AFrakCrtyZ64W3ew523uqXMLPc2SZwgKCtke3SHrdycgdaGN4CMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5as3VKwkRBtKUpsX4QFJGZMH4V54LyKNDmiewQXMKerKeuhixp2dcpRWQ82hWEmxMch9J6ZcdG2xFPjHHtEtqAh5",
  "key1": "g3kFn3q8VkzBDD6PsqXuhCBSpR6naoofoMqxdhfEBm1SZfiHdYhVBipE6gBpXejTDncmUwwatGDzzJWz2x6hxBW",
  "key2": "4q9zoLQvECK9LCfhav4eAT7XVugATcfsqjVwRmAbwWiSNYTrhAHGR4fhSiaXujRXtUBTqD4PaBeK36TVtcL1jxmZ",
  "key3": "h9cAwrHGshhdU5L7KeDepZ1JPqxB2Pbaa1hUR7NE52DhwUdxzTDRgHRb9q2CQKCa2uNvRpmAkzdNHrgrQSur8N2",
  "key4": "5TQRsqc94GKF9Nx8U1Fixvn8PgcAqvZ1DBjKer3YtFaHtJz863Q9nLmRT1kRg52EpdNhRKVfvtShctu9yokv1tXe",
  "key5": "4Ak2bZMeWz2664AYxCHbkVwsB2m2rhtbw5gtELggbWwVajHHkdSNRaXGVDcvbvfVdKRw7PTg9BAVs79ukqKBeD7d",
  "key6": "gVi6eBJdbM3B7BAqNXyEEE96SwfjJhwpPwgMXv4AAmAH9gmyLKHMw63VC31J1btgd7jjbnd3ccMTZVT98dxBxdU",
  "key7": "21Vpf8t3Rju2YPuhwritcBGP26pm2oC9QDSUNqjg6JwHfz4DUt3Y9HAHvhHWogrTb4NK1Uee4mhiRMKEc22PLpZ1",
  "key8": "4RELuf3xbQbQfeCfiBYttJPd9NqDSUhy5MsQ1k6td8w79xuSRhN3hrAUhJo4CvtPeDLJbgfG7bhUfL1Pk24Awvoa",
  "key9": "WzGGTTB48rm6K8ekiBVeCVYNREKxFECnrsdnKVGeBhpeHMUuDjyfiLBDUubUSmHuZszYXARJTMKHi4Sph8tXbW3",
  "key10": "54AuXmiDeBW2Te6bzsgBftodWxjjDbaPTmZFhV5ou8PYu8g1DqckDVJQgRi57zdPGdjB6WL5TL13my4baZ4AJQLq",
  "key11": "3VzqsAztzzFTaHuaGF8YLggD7CJcbpjWErqLnZ2W8zNjhmRFBETFzobEH3rpCyTjTpHvpd4iHN7viJMykxhWDSbn",
  "key12": "3uaDUc3veDAxTzqRBcEn1PRJsZ22sn9MxxpLz1SLk77z6qYubc24g24RP7tbQyhFocCnBmK2QZmir7G1jStPH7DM",
  "key13": "3vAK257B9UeUBhxxLpnoojKm3UnkPhye7JMaxQNfvv4Jbeiu2gZnDskgbf7P9r1mwu8dXAbcVgdDKmk4nB5q5wTg",
  "key14": "5Mkp7LBHsjwY8ChjD3tGSViKrCViynhwv8NbxWMTaGkUDmZGHzrR3Az3w4fyRsy68dEHQUr2shpBmb8gxahGKcZL",
  "key15": "554eVLUJAWM3BrtcuB1QbeGZS9h4WrbqjEgEdKbDrUw2iGNx6B4T8a7T9JjYbZPsmrGyxqSBm94gPK5caCksRCbj",
  "key16": "5keSmkwjqeQphaFdcZ76b1fKwvLQMcStM2LtuEPGSmKmvUDsCb3HoJoP3ijEwJmUGFdrALPdswgrArgHLfZUmhZ2",
  "key17": "5G44aS4u6PBt8AXTEGz4DsvNKa9GBBbVinmECBLAS7LjBg2EQd5en7PjcjaRLEYeJnbfC4twUmB7K6wH32Kj41Hq",
  "key18": "3BVP9Tm2bXjMM9F6Jz4ygge2HAvZz7t2f5FDvZdGdcAZx469pUMk5VcznMoD16sZpadxKMSoBNTe3Lrn8tBBnrg3",
  "key19": "2KwDafD489p5NQv4M7HJXoJGNwZ6mU1D859UoTjcQG56CdXBJ1CoCKjceMjirFQJJKXE6ixgaMh97zooQqkJp1Qt",
  "key20": "HFgNYSvRG6LqMyk5UjjtCPByfsNftRyt989kGNz6dBeyfa1ggPSuzds5MyYeWfnX2spYjfZZVCwwJbwGbswdTe3",
  "key21": "39deNJB9WmS5x7txuhDyLBRNWZn1fLNqvtLXjN9PjhoQywsN37a38DbnPum1EPtZ1FLQKNWVp1CKrHPXwAEYZyGr",
  "key22": "38BujjdpxKJWovcsyYvsHDUCRLjAFxdwQEm53X82uWzkxmuvy5uBGiUzQiccUTmVhsKZcYQKX3c1YhnEwJpgqVVC",
  "key23": "45ipSD59B7aqMuf6XA9N9X9XL3uNcjGKXdeHYdHpQtPyip86NoCfRHqL9tFpZ7qy7hfKNpKZZ4NS8Ztdq9Vi1YcN",
  "key24": "4SZGmL4VtUUL2KfWKYsu3dZdiVMZ1zcoBCuKJeN1LNQ27uHmgePXnZdrtRgzzNYnUZurgyy2FsubtCBKkZ8akpV3",
  "key25": "4skCSodUWaL4isWc9reo3HoruwRQNUu9V2iSgk7QF5X3eCfvzKTJmyGWNx4tLFiPRiGk8Bas5vBRud1xD7Q5miow",
  "key26": "1cdj6u2oyfZHdUbY4JrvKifR74BnxSbtGecjsACP8Y24ngQerrSyMvdyFjz3HFRnDRYUkPCPQfdjfLk6ZPUXTeD",
  "key27": "3UgYLFzPHgDHhAPD3MEktyq7qX2zgcpu8E2sNnHjqCLCNnqU8iPnih3bWzAHv5iwxm86q2roUcjNdddbEHzZvngK",
  "key28": "dZtSYaBQbBwaW2TrWsExoqrLiX9bL8QwxreorRKmKH1zWYHinUMyovwsFA2MwuafqYiy6UtGDpMLmjjwoQvAdsm",
  "key29": "Dox28tM1zAACJ8fCtTDpe351cywrEk73rr7CK8issiaM5J878kgesWv3NG44DDkhA65AoYKwcNPk7rEJKixkTfj",
  "key30": "3CW8MHnzC1sTWJ1JjJij4CWrjsEHYGRACH88gnp8zgSDVyNfrG5EM7suHQL4TAGgFwoVoWPXiiHP8WTNAmvQh2x1",
  "key31": "53GqAdfyxJVw2ieZotab7VvoEmye531NGnFbxx2Uh7igp9efzAKFRw4y3DnTUCXhd8g3XAWyxPUgCXpEq1S1s8S6"
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
