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
    "3tLjAmS2mtHfjTSvSv4BZCkTZKLuuoBKHatst4ov2vNHCZUC4J5NNe3v85vuc4LwNr3RFWa8RUdNEfXt7CHvtvzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aMKcYZ99KEzZCTrqJuDu5PS3ATjtYEVLHQV6CHYzq64u6UmMkz82KfwhENNxaAoWoTJdh21C9nuRZNhR6C7ELb",
  "key1": "6pJaiibp6tYiRy5rHvz1WNEkGZjPNdvnaSfQjcUBHKmy5Z7qQjDv6Jy8oCGfRGaKzhx6bMxVatmr5CAxaNYhmaF",
  "key2": "4NFquGUNm6dMmhsMCRJmidPCoViUSsPCoSc8tj9QBMTipsEYzHrQ9GMq98AXSHoAVSSNzeH1iwqWJtaDp5dLk7GP",
  "key3": "zMjD16ucg9RkJ18FC9SaSKWoojgikaBzLrTPHahg3mPMjPnu4rqvZSD43omNvvjufLeVq3NCgRQgJvLuKvPGRxa",
  "key4": "3g19mhddUaGXjExDqyArfVFbeqmkHDVXXwmTnDRrAB2JX4vhjnVggP9f821WP7bNa1hDWdsME9DxETv7qPV8Ju9n",
  "key5": "2uyKVBstJKmVKg4LHpD7gS7twzVWQmn3PKJ5NnTjmQMUePSco9Hip6LFb9wJDgBwsp3pUBBqGtoQsLqibDCbEEXr",
  "key6": "4jUyVVzTpnkzPKLeUW2f8nYE9VJHM4R5FhmCMdnP3z1wJFuQCSeYkNRYPxZcANbZwcxFmRuiP1Q85MPURpRsSsgL",
  "key7": "2WJ33DKhkfjRiMEUiXbg8xZ4VPCAngnjLquTo24HvWcTNjPgmy55S25YsH1fTdEU3mFkDf7mG48sTgG2Ga9HsdHe",
  "key8": "CBAvcgLm5GA2iY91cauzaUtF2NhkoV4rxUj3FE1EiTSYhrwWEHFxQdRxory2VLVWHNTfzbdtmKWi6fR72qHqL2n",
  "key9": "5cKN4sm2xaRg3pSZHMYsjgabJLf4hse47spRTgwPX8ctWfn7ExK6yvyk2MBjDchBmWpPfeQ5RBcSgUjJ1kPSgmSQ",
  "key10": "586Uaxv9izSsK2hQfFsryb2gk4W2jPnpaGRTMpsBQUJpAUzET2yKAnQk11vwSSUeeC4RZSyKLEuirMPKEMjh9wK5",
  "key11": "y3eRpRJ8Fvg9y5n1LnwVXMWC1dkvBkY4ToHmeWHXkjHUDTURcFACJcaYSMprLhrHF8e4j8xRTmTY93ZMBGRmKec",
  "key12": "5a3GvUBqL4Jkk3K4BtCCU7nMx1ZZx7DnU3gGiNY4zp6HJsE46rRRPRfA9ovzMP4YdHCUPpQSkjrPawWpr4jR96CE",
  "key13": "52fRqPbFAHJHWtffFyvCexegLYVAnDphE44fcgm3pGDzaSLcBfexQMe96fqnBXDVb3jVv9i4w3QjeXNkw81eFayN",
  "key14": "3Qgb5mVMj9VdamNYHdhSKG9YwyjyeWWsuNPKwEyydinEshzekTrZSJL812xSh3iEDTNdKAWiNAPd3Ae41k7RTGqN",
  "key15": "5jU5aM9QfxPZ9ddde59SguatHZhScqeLryGjTdRpWi6w9Ccr9nTUaH5hMZjmQuWBN54DFWAedWhEXuvcHNWj3pXc",
  "key16": "63jfxwuwZP8aZNUcU8uLB6bKSDJZCamMSX7AAHXYTmfeFiQtn2bGsz2GDxPSspaCFYqhQkVC4SeSMTvnVek2W9Ay",
  "key17": "WXPPzAmer8uMeL7yqnpaCzGJGZr548CfaXr9y8swinRNPndSRaq83QMasgoqWrcYRXiv8ymX9Nay2cwGUGbtHtz",
  "key18": "3D8tdUoVUp1eV54WUHAXqLUbJvaJwmBZy5gKhh79pUuDApBk3Mubznn6fV7x38FaghSRidgj3Nacec9vRspRvo4L",
  "key19": "3DVsArsXL5Q4fnNnDG8zTJQj2U6VXx1LV3NzjUTJxjVTv9sehFE1voX1bWue1bbH8WNBKstriqnMnKsYCc38ceYr",
  "key20": "4ioMB7n4xUQfZ62uHYZfkXGBJohGpzEpx2Sca1ULRfQa4bxtbyM9H2fbEpGkHXntaXzteoDvwqnucUC1b8vi67jQ",
  "key21": "4G27wig48ZhznAwELG7vKjSssSkydH1yBD6inpSS2BmNsp5X2rg5UqduvDHM6jLx2aSBzvQTCigQf6QuKaoi5beu",
  "key22": "iB5aLQJdY4hotau3uJrZTf19yEVUjSCXKyD2bwdk8pP9Nm71PHVkLJ8ocnHZ9qrZAwAWKJkT5A6JUziJQVVApe3",
  "key23": "4shRAJTeNf3JJWDmq3iA5CyA92mQJYvydfxfCZxRYAS72hWhHEZjxfAntEFEKVDvcFQQs5xyMdNNGdH7kvt56PEL",
  "key24": "2tTdtMgpZz1rKdVNXYnAqYXwCsw9mGDJDa5sfRfG1sqFZvdSbVK6s7otqFJPnmX8Qj276vRiog2Aw9wY7GoiwPZC",
  "key25": "RxBhEQHgWiM3ZY8vPrChUvMegaTdjQF2erYV4RJq6AVvqyk9vq7vet5GxYJqe7kPRNNBkFKjhqYHjLy22TKXqT2",
  "key26": "dYg4Hah7xCnVEwZndn1cz9GS4oS2Ukd9qhxbg9biJnUsnVu7g2da6xyK9XjQv48r9mjZ1KoMxHhe9MrDmjX5cUT",
  "key27": "2vj2Chx2Fgew1w2ircYX5TXRCV3mQx383vqBQH1ZCa5VG6oh6dNJmcoUY9wqnK13D9b4YRkK6AQ4kf82Ra9RycYX",
  "key28": "2jqonJshEGPbkZM5D7m8sVxMgVfYcyihdPcHJJxjEnWwS8Ro3uAeZyzrxL4GYtWkHP8Xq3dhAvaqAbgn7XuU5C1Y"
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
