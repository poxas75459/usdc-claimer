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
    "4wqSA8XqzeLiTrRRmzPyRsPXvpqcLSzcpBLEKwyJzhHvtCkHtUrLyM6rzDb9QYTNm9oCj9TSrxPi1AWSKutB27g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7EWfTPZ5U7HDtV5vKc9vpSUmmwd5NzM15RsNvoQr5XcavWK1UFdKhoD1dMVL6GTRboEY2HXGL1d6ioUmp3VuyS",
  "key1": "2NUfU59AhBaz19NVLJ1VEVYyNyz5jgkpG31oMMjyNQgyhyQs54h9dqsrLGGShzRUBhKoX9CDevm6oacMFevcnzEk",
  "key2": "NEzToSKmcQdPGiL8SWhykYEUpmqJivfzJCCDhw7D3hk8yG6s1viZzjjMWcP4Tvra5LuEtAfgizP8WzKux47niuf",
  "key3": "2fTs8baJD4tQs1QzfNC8VMtocgPUkpyE8fsooaFA9Hcth8FMPQ9NyYPJBrsn2pMNHhJgpZnK3yko1fXhrNfBs3oa",
  "key4": "47FuKnMdRdmiQ4E2UD5TPPVxt3fBr8a1kyXXJC63pYHY1Yx2Rh8x4botQwKueEGDMTfWuCsWkhJ1Hmn2jJFrFcqo",
  "key5": "3oDjjkTyabcCx1pt93RMd3k6xusdDgtUhLUw54QvCfnMiicHnhyvJKkWuWuGdEyADCMeqCUgj9Lnc6NkQChs62cJ",
  "key6": "RwrDwnuk5fGRqxy9T56PBhVFFrrscoA9udqjnVgqY1xP8JqYYPbqxR6frj4TVWdSYpfTf6uF4nbW4n1y45TRM2g",
  "key7": "2S2tcccRiZSrJWADe43j51zpCx4aNhiQtK3SXLrowf4rQv3sU5RSwSeXkzHTpLL26fWp42JqKTjSxMancWkvXJ69",
  "key8": "585VZRBJWNG8EN3X2CVswgJ8jix3Ac1urKJ3uKbAiyTg4ioyqW29gkNTxPzKxmvPtLhSdKuGq8QLD95TTfXx8TAx",
  "key9": "YTPyXW9Zmeu6LhHmbBVYpJsHJCZQP7htXJKTqqgt3bZuJEgjSDqanpamwtWCRcyckEhw66XNoCRrDAwAAu5dKey",
  "key10": "3W8HVUXP1Qp3dxcMLbSPhdNYnjruGnaxftzrroc8YzMGVbFs8YDoDBXDmYrfKhgBjW2atKpaptzRkDJRUxYxr1a8",
  "key11": "267fPG8M2XxNjk8RBV6Y253m6cT8kaq4rrQRUBUjNQS1o1A7hiCfsHA2ySj6REiWigxSR7Q6oQmYc9LFA6dQ1HBK",
  "key12": "3scBD31Tat2L32Htz5q1km1rdvv3Qzj332Y2wYb3Rtkq13qPn9rQm8PfpYFzhuG41ne84CzVG3T3K6xjsqRfUSVS",
  "key13": "ipAQUvzJVaWtFYavfxQGkjkybFSGz7twxtmiirKVwX3DUqtQR6qNFGBPog1RNjtENrzyPnnkvh6ncVZeV4dJUHE",
  "key14": "4f7RECxeSRfYpJm7iC4XT1tcDTjN6xHwcvAsjV1F7v9BkZZ5tK2M6MNzvZxUz6WkDSadmq8Q5t8w4QeTs4i33VS6",
  "key15": "5tu4sFaCxQXcmvymdLDBM8uPEcoRJvYmrrRouTNbs9toj5ERPDKuhQV5xXWHU8zkHvXdhFZg5GjyLMugKfh7SLoq",
  "key16": "4us6p8U4qhZ9qL9Cn8CoYTHXKYFe9ftg6aymA8h2Wf6WWCVpCC2gwEbGX3YHtevtq9GYa8BWcUZ52SDuhuF88hJW",
  "key17": "52gVDCPum1oCyW4PqyKrgYhpyyZFHRmWFXNFX1bAXVJ3N1H5cF46uu52QZ4fFU34EkCwpRA4Xi5cNybiPcvDYXEW",
  "key18": "TvSUKMRMFK8NTrusJuZsPBUbWV28zg9q36pPcstM4WCfgwkePGQ1d4pwaytG45PmAKAFkV1T7JjwDY2P5Z2nyAN",
  "key19": "gvqENGnmHkHDNJi4XwVPUhJsEToJqbRnLEfUsksrB3kcWy4B5F9CtsJxsU1FgC4TghWiWQpRpHPCpgM3TjavWNd",
  "key20": "2otZeugN9uJKgopMCJRP1NRTiC8f1tC8xf1T8BzZv9rH8yk1eXyxXuHiR2MSoCjDZRJ2MbmE5pqyZod8JjNpJWBb",
  "key21": "4P6WWpQXTUXFsPB4PTkax4p2NF15dbe8x8kaNsAAj4WLWexKqx8Z5TfAp5sZ76bPFzR58kcZNcQTxPKUfCwtmDBG",
  "key22": "2kKJMSMDa6EbvVbUaT8mJgAWhJRz1vih1V78rXZNXRF5aUq7AzkDSmi7n6G7jhxApvT1kQzbvHoMGaBMLKrXCXDL",
  "key23": "3ExLvcgzkZhk7oXioGWDC7WnUMa78kvw9CeSbaEGhBbHML4GKAa6WVp8bLNk1CpysX92twF1476k93WYdyFwXj5K",
  "key24": "5GJFLc7KvMx2h1RAsm8EVenJFCZmzqYYB8ddqxMt9wxAv3sQ5i3ZAZgPWckFfrsMZdV5oxguyZkWtmT7mK7bSMFQ",
  "key25": "4naCMzhP2bbR8DeVQTfbnpyeCfH3njumfJ2g6QNyNBAPMC1nAB7x4VQxw4XhaUxwLX23isLYGAaf7oPHeZq3sQjc",
  "key26": "2tp9hsjvd96YjehWSuoHR1nv5RVRiqmB1vUCGY2dBdep8uin1LNxZhHtVSE1Sj3i5WiJkFBFh5fPK5kzmQ1Npjqn",
  "key27": "32gj3MCe8xg6y9vZUdnR2YjCjUfwrnfnxYJzSWfbdy7aZd7mHf8yBVbPDfgSyS21iwejWUPCkUYer2BTRDy55YcJ",
  "key28": "RzimZr1ib2htdzs6keE3YujdHBcwEs4tEojwVPL59odNwgsZq2PgBYCYxWTqevGwC8TRFjAVotijBNbPk5QBhEg",
  "key29": "uUmnJQUDeyFPXsEQca8zuQgYWG5YhbAkWGD9X9PRBrV2EFBPLhZeqo7tTKmsZ8u9ZbhUFk48arXumHfX2HnKnXY"
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
