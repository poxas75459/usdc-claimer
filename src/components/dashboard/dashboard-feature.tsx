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
    "56FHgEbov6HgbZxaCUkP31aQGBg7wV5mTDjq1omdq2Mqe4kJLtk7cLESfUrxJWEywB1fbEWVxLtquvQtwdStQNoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifF4irmGg3KLncdjXvALmXh2BE7szEbTTujTPo2Rd3WrGA2SQ8KYoVeT5Wx1gmoqFmaTFsUUAcBCR4R9qR4xFeg",
  "key1": "3kURPbFFZEGphCMk8EWNUB76YFiEdw7C94JJ4QaXMCxJeLMeyZZNYNzG5x4Ye1WrtFRNocFSrDQ3DTafNDQYpcfV",
  "key2": "2dBsDPYyk2oeHmiDaWFw11saoRJSUrWr4NykrBKrpo5JtotSqLmMW26zaw31jvAuERVJjLtjniYnn8o5herQGiLo",
  "key3": "5TKhPhx8FxfQHtgmvQpoJ1uWjgqpviK3ZAvppsesjH1nLt9eqJV6TgFAzpfrHjjKYAKyPvUiXZAr44FNvKHdR3Tx",
  "key4": "4RnzRrCXKHCo1Z5cQj4txASnaNqyEFJwrjuzysUt3zNuwXwwRAba4E7hafPTr7KQfUmb9ZAPX9fQtQ141vhz1MWw",
  "key5": "45WeehH3msQgazncoaJVHBW1mDSB1mUuviD7JFb4v2vEYA3ur1ZvG1krzi4kg3NWJkcpREtoSHtRZYxzs6saYy8i",
  "key6": "o2nN7n9uoczbNZirVTr1qnSTtEERdJ4HytrfSTgAVc1VLxYSzAuLjxjvga1BpYatT3ixHw8dvV5uMQq7sKNYJuo",
  "key7": "5wWLsGH36LXiGQpop7gzpKM7oQHKuenLsFN9VxCsAv2YuLi9kda8n51PvsJbaZ9eoQNvjM1V7TT6ncJBVE73Tkqf",
  "key8": "5KPsupKEzrXxPVwp7D5YyBW8NU5DRVXsyeHnuSWzsECEx3zJuRsy2Xq1h6cycGgPZq77FWL1146dcRbdCnWWuhAX",
  "key9": "4W7PhviezbrFf4j2VhTw2qb5DocgXgFRtcKMf1narfwi5kED7YvcEGgERZCQvnicMZCppwEALUyQJfPcW6hn4aYE",
  "key10": "2tvokkKF9EjiernTfVM5FN92Q45ch477d2rfVBuG2azZ6jKiZVqUiNsGM6paruZX5cnYAEkrwgnqZicg6cRG96Nq",
  "key11": "3RDw8VZddAiroGwEXjWadSuqPnjAt9qCfLAWjXbsqiFbz3Sktak8E2CzgcRm4yJKQ4ge8Nj3JgifiR9vVEikbJKW",
  "key12": "5cvX4CiMEGUA28vGGnYqRor31VFbx54Ca2ejX7z3WSvvTW9fEwt5vcZgxzU9ZW97bmjgzYcf6pZytz286FKaWs9S",
  "key13": "4T5FZ5HWip9rjaJ47JbPxgL5sFFPt2WAQN7LfLDLe1WjVSbVxvYsBz4Fy7AMJt9ty8jL3m7DXm9L4VmNMefsWJuv",
  "key14": "63cCkKwPUrZytAJR7TvHbo8BCfwCafKSoLYHx4u1vzu89V3yN5ywwFuHtWYGJMj6E2w73RJTeaCdUPzhShfDxhYH",
  "key15": "9VV9zrx6Z4RMaUBmKSQB469Q6FSiaEcTKJ5RizyfgsY1GdtwmD3gnLD3Uiud3c5HVPw7FK3KMs1VCYSVxvDyiTU",
  "key16": "3KLNDb4V2QAa3ZK5eYTph9zLK8MyQxgcp9YNmB4rvTQTVqkASh56KLaZtdodEqzuJdrcrZMoxtkVzQQyE9Jfzzhi",
  "key17": "61AUojmUXGWiEAJDJ5SBoXRBXrxGoS8XPBWvgfDouqk4RQ7RZwAeQHYLnZVejrbtKffvxCELtgd1Ga15QfKUGP2Z",
  "key18": "4DYRcNURWwnVt1wm25X6uuApmG2A97maooeg9CpwZhESMrZAxZRdp1wSxMTkjZaMpEgm1PPfCMwFUXZxnzk1GGHf",
  "key19": "62tgJuj7WbgbcuR6npKYmuEjiu4pj7p2Jwt5jiWHHNDC8TodUCUPMqmyn3zUMqvxdrVntwKSW53ZycE65VqA9Zfh",
  "key20": "5gLJKjUdPRtt1RmRNFKhSNRYzboJ7SWwi2EjYLY2q9sUzSZ3oSHjAagZmDdvvsVbvK5HBVk4TYxxT31ZrNiqKM9B",
  "key21": "2JGsgZYTWyH1BwoDjFvYiQkkQNG9euhLcrtbXSdiyiCHUg4Gq1MjUxjsaXB9TcvZhQkjqCpLrfxzSWhr6jwkf9UG",
  "key22": "2YLPAy1xKMjf6J6yzuU2yryDfM9uBYzcihUQXZhibGmvWv8PPUc9c78XA5ByxfKBbAk1JYCfmwPrhZ2VPtqW4V9Y",
  "key23": "3yFp1s448au26wtdFDG3nuwQc2W8wTNxWJdeETGq2yRT41maNprEPHiXHaKGGJ7UPgVZwb1smdwVphXQtmai7yGj",
  "key24": "YQwZJ14dtRrYMK9sCGrKZk3imZF2JoACHAio5jsWQMui7paLFio297fTHPuVNEWRWqE9mfabenfKWGQRkspekeY",
  "key25": "2g2CeUHLzbv6qFJfaDpyUe1u8YByvukDGmaYTMoQejjKTrcMuoYWD4sDx19zQCQEx2CfKmYLzQxUxHNUFqGWRt6D",
  "key26": "4EqHjmE91oYJfVtAPqgiQA7G2fs3oBBRcmGByB9JtNosgxqp3ySPcbTovU9ocruRtuxG2CX9MYDYtfD7ZM7G5tmj",
  "key27": "5Qc87MRz7KYRYFwwQPbBW9GmHNGf5SzkRf4qAcGAqtEDNAJXnz93Q3UqhbAXmsdGmdrZSjV3ivPEQfNZTRjFB8PR",
  "key28": "5J91DEMGLbQtMuGnN66FSKYxThA5DNxm6fqWGyAd4sZdt39bcZkuTx963c4yya9VAeWS9cCZnZTVDxogPNxnnWcx"
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
