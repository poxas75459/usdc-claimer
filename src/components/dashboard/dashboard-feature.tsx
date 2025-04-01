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
    "5HFZQeErVZy55PqUJA17nzkBQV3pQHWNnTU7zQ5XjYB6wWBWaCei1MLrxVuUwd8FJ1KW4MubsVciWDSvMKYfPjMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtv96ArQALaPM2c7JFFYYW6RjxzW2yTnDfT7Wn1rejc6jWbCExDw1vFkpsjhQHWpzwwxhQAjujGyN4SW5j6NYto",
  "key1": "5RAyaaDu7eXxxrZJ1VRtPKSDLo5vSEngzyo1XkRRRtBhrmQ7BdGos2AjPgMBkJaj2joajWp8tpdqgRBmGKzmdWuY",
  "key2": "2A7rcYxbmRkfs637rHPsX2gwvWwUWtrQtzopBxhfARSBu6E4DsM6zRnKvKmCwazWuuDrKaaWJcr4nSYEQdda3LHh",
  "key3": "5MmooTiFzEgc4HDo4cH3ZeUTnoyy5SRDZtu322MS4iESSTCXxs1mQB8ayQDjaGf2FmQXCQQmbmHt3EoQsC7YsQxv",
  "key4": "5bg1HkSabYck7o1z655AQpRbJQBQnBjV91GKqFtcHBxAMX6ZGWfMw2Nxh8PSTeLpdHZiUXTtNwG7kaVJHr9d2ECc",
  "key5": "GkSesNmZnqxviD533b2gxQ7MrZ7mimJrwardwYLk5ymKehc7n8btzFy4eGN1dRcS4B8ZVYba2QyPEw66wJ698A1",
  "key6": "2qQ7rhD88hd6b9pRgD1nJD6NEHkrP2fQz2nibdgDhHVmdDTCfWursVPsdix883hsXFv4SBzXtkzP6E4bHuqGtoTY",
  "key7": "3ERFKWaVxwHEnZREfzDvhPrJKMq2L9KYizxcqyojnDu4yumpoxT8L2S9aC4uXmjahb9bYhNt981ubN1c1jxBkmfj",
  "key8": "2guWmfSHbYqpQ4Anyn5DhfEY5RvpjdyN8CCHf1XD66YxqhMQsjsderADcLMA7QY9tg19YtehUaPKfwZwW4Kybgw6",
  "key9": "tgQ932zVppCJfEGksSx33iHdQPQcSeCtDp27iLMsDa5TBXfMGCZpRwr3p3cKjWXcjs3Xg36ivq6Yp5PN9K2J4wz",
  "key10": "4AULmj4qXPRj9F35f44p32J2mP2qKLfqLJM3JRzcK12kFVDn27wm4ex4yaaizgjPdhZt7wkp78AQo6i7EbWBAMba",
  "key11": "V33FDNDbRJ95oijYeaRPa1SNRCZ8foUNpQiMFfRFdQXCGuUV2vu8M7hddqCKMhGWu8b3TMZHYDiDsAyuQUXKmph",
  "key12": "2DRBWs1pHzvRMJU8LZGQwCX6ETqeGco84exLEmPE6hQ8RuwrLSM5CVEW2Q98N7oya9ctmW24YBzneDJzEHCQQCrL",
  "key13": "3c28DE7c57sEzSTSdcdYuGQmeey3wXK5kAuLpwvTXiXFPksneMdT8RuD21GgWgDGp4yHEwjK4Akx3dW8dH9sGDfD",
  "key14": "A69qMmbTdHu54MNZoThCS6zPYzHc3Ytr8gUYPYzNWURXWs1dr2SfTCt5Fyec57ZaYm1Md4v7MJLphHp3wwbEHcp",
  "key15": "qjqHgXMTFR4DJZ2qx7j9QwVGVcTdzYckM3nQA88mWCUfQyFPYY9fjbg4EZQ252d8UKWaZ696Lzmfvjswqz63GXP",
  "key16": "uwHoW6WJq2HEjmAeYBBpm4tT5YxFpSmwkpALtZUUGijKNbE95eAju1NRmX5rTSV2NBCxrSfwfU4cDDdopwhvS5h",
  "key17": "36vo4bMWMZNDQAb1gGD1XYVTeXH9jcLbgZADktdjQXvjxRXHkffPnTw74RYmapivZDmNt8hGHKL9BDxiDtFESxpy",
  "key18": "497ymPePwT31gGZFdqo3YjJ8WdzoVvz58M1zMotuKg9CScjQQz7gNpDuTWQwduJ6mqd5DvCxpmvvfmgXFJW99zpD",
  "key19": "4879LhfbTyxBbFZfRRyEdoez9jmpdquk3hyYvUXhm9xLtG1ta9fsww6DMpVYyktYHGicMaqMmnJz4xi1j45iJueg",
  "key20": "51RAbrAhwefRSLg9KNnY82hsGKTCcraaKhieWdBUc7EyvkaVYWA2dXawyKPVT4fQeNkPHa3fpzvCfvSTkfqwTpLr",
  "key21": "3n1SkskLmAnah9jMkLtmQ9fHfcoGEfUg3jyR1cgx6YKNFRpxgLfzzXHUwQVtkEzrqmSdsDxkm5wUNV8Me4srjq5e",
  "key22": "2ikVtt3P9fWaJZwcaP3MP5TdBBLZ7UbrLPvQrU3HvPFyXQwgZXDJkY92M954Ck9XK6jcdhSe4CAupmjLjK5En3xQ",
  "key23": "4u3kStK7VhDKEKZ6s8yHaR784AFQ8o3da18FKXVR2ktC4XQ4h2bi5vFPJouAUGoW5mg8pbn9PwZmHNS16sZ8x2vM",
  "key24": "51zjwGABe17qh9CDat6FRJd5R68mBEpegb3X9TewSzAd16a8WKWZozJMRaqwX2Ehf3cfEe87XGDDRiDUFGZoJfck",
  "key25": "5SHxhukEZda1VNZmB9RjjbcSfMFmUb5hoBqpZfRyyQxhFufFtobB8J58UrtnHnDdguQXre7GDA3N8atgwM1fa5u5",
  "key26": "2CHU4qb5TCPVxBVz8wQ5oMcaQ9BHW9zmMX1odRKpB3Ev2P2g3TdzYzr37brZWL5vam8i3Mc6woPLoViNWxJapSi2",
  "key27": "4ERsBXiywFBCRvLkmoKF9uxm2WZNix1RkwUfFm2zYH7zTAisEZUyVATKFayct7rKaDJeW1ACCjXzMSZesnvkoXWu",
  "key28": "38PyC7EokFoVFPd2eZEiA9Y4U9kwfXMyJTbD1bgmL7iduX7kjPVnFU7HRzxY5mA3Y6wpSw69y1f43xHb4AtrSLHi",
  "key29": "4sLp7X2UEeyCq8AqwRAhtQV2gc7k1EHr9Aj4BCHk3ex96DaiayJZHPNxnAotXpKDNjam6VxnSRTrTtFBEZgTvp5L"
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
