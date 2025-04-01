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
    "2tPfCCBd1eWKBz5iqX6jhHmrHsd7n8Qu9EuEPfS1CtQc77JoqPgFu9vJFqhoVf8GgvmrcGsrimK8zEgRCi1gd45h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHNTAfYT7kidnozmQepLANQAqUAvA2Gm48ZCVD4KVTxmvt68Y3au4LtCw1kzmz5VPumDEoZokHyQqNdMxqJ6qeo",
  "key1": "2ScEKGz7rYpmLcZezwtGvKP6LNprUCY5YMD7rQVHymYycTNBPdW9GMZC3Ceax6KwT1LxwJxCTSZtVmoUctE9QJoa",
  "key2": "5tzHBeRE6FqfYv7Z7vjQSKo383fDeGSHjdNy3QA9CDhJbc74RhYyCYU276KBH6xA94J6AqM6rf3K3j77kkqGN848",
  "key3": "5Z3La485Asdn4Ccfnk2VGcjbhqJyMcrWwDWv2kEtf3X52EQ88GhPzNmuKjEwCdToNqi8SYg466un8JCXKRbqMRt1",
  "key4": "2eDgJ3nx483twCTbgBD2tf8RetudhY7ToAMQyndjGTBdipD7YRr3aSP5xg6CTTvxQqe8sDKksXrtnHT5mQdse8Pp",
  "key5": "27RRBu7dtA764epzVnTT7eKe8SDxNLn6V9BAydDZ525mGyDdqAZNE7imsSmQivBcKPaNkHDnkrKYGAFCYB97ME4g",
  "key6": "3XYeSfFNStmdcj3xHyQrxBUuauuTXmgRJnFSyNiHYtLk1KSWab5JqGPyAjZhF5dZuiKom6WKHXdhAtaU33zUYJSJ",
  "key7": "59mFsoBdUA2cXy3TJtPEvMa6DLBN4pymTW8BeJmCsoCUoW6bxjhvUm6THWvDJJLaAbjXHJkpbHYPhwtk64818jim",
  "key8": "5RT7mY5gyMfu7XR8tFTVp1GoYFAw3XowWTMH1sVEfytN3zMkxuNGcBYdQ4B1pTavYxvGCfHqtTwG7tQsDFCgb2ra",
  "key9": "4oUS5JxDvnezP1pTBngEMcbWZJD4o1CGMBhRCRCbRyPrRAF9vqLDdvNi9HPh8a5gyXHavtuZKt3VH8NS5HqWqv9s",
  "key10": "5gc1Pgy6F19spRN7XeTSGi9fPUzpH5owUrnfrWdcphv3i6F3zZnGGqmeBpk9ezx3HZbJ2V7MnMvY7VjqekXbXpfJ",
  "key11": "4rkv7WR3jm15t6orgBdeg8c7Rz2SENPTfXDsugcwKTbnXt9tEiypDB54uEYRwvPd4V1PxTF7bHP3ZpGuD574ZKUk",
  "key12": "39MqnndQwSAU1MxjpguzaAc5nnS85W91RkUhcMZZvJra3VmoVLpZSHnjc3qBe7iZVhieZwTU4QiCDWz2gUrvon1h",
  "key13": "J2bUYHQczmefC7GzG4NfRPwMnmzKZbcMZ2DodioszTbUjXR91bh8rdSLr3cQ3yrDX3jg2Z9GEVmX5azAbM3qfCc",
  "key14": "2Y2avecYLDnBDVhRmCBkpMJsH1D3fBsQwL82wNaxB8tHzdqqEoSsejFgtU7KbRB1covZCSoCfCH7cdJJnx4hVAop",
  "key15": "ts5a51ATovy76g8PeRrAbU4sXn3DwPZ8dMii1qHmGMFDLFyRPziEqEyBfkNuxChbGWC6ag2sojB6pB9xE2cnyva",
  "key16": "3jTdHBresaaSf8YC3gJBYUJWMKSKVLuucaDD1HvB4zJXjwSenj7NWS2RZ5XyeFYLCqiLRHAWwpKjcsspU44rzbQh",
  "key17": "5z9SVaLt4DhkUWZjK8SbQ94JNdgXFJNLcPdTQdLpZHNA5GvkRNjDeMggzYN4BGR6MW6v63y8MGfqkemWDbrPD7f8",
  "key18": "2MzmgjT5QeMJMs9EiPWqPhfAs9PCM5WDBiNDWqd5yS2F6T2GDaL25PHS3itd9DBQ57asuk6JZtGNtKfGcm1SsDcR",
  "key19": "8WBfdpyvHsjJTrRipuJhskChHe5mXRpwgfebCjC8wM8Do4va1DKQU4agW9retJ6B84A2zwyczpHprnFiFVMFMbo",
  "key20": "35wUP5uyacqrFyrEERg9qGXamdDJxDk4SMjc6miEuiJt6SzGmUyZFgMwHaJiVZPWgW7LpHbKhJByG6ETqUixGqNc",
  "key21": "3R7GRiwFK53yx26FRtWLhWJFf9KPG4muhsBHSBLzwWDwK5zhTiREi4RdGEPwvjzvdTpQhK6SerzAA1zEdauPT8vf",
  "key22": "33szoJf4JdDHhJsmTw5kASfffLayPnuNZ8HyAjzjp2UResNUF8ohLneXUtfF1t6jHwp89ssDMJmVN4iDbpotwoN5",
  "key23": "hfTsSnWNEeKJiCUpEjFVHFvNT31HofJPxmh3FWrvXB1jTjWHTgDSPY2VeL7Jqa6Rdc8WAirAm5reG7kBQqKedYy",
  "key24": "3CAtDqsu5WG8tyLEHq3dHaLxPGwJ3fSWHP51TTGEkZusZxwz21Cgx7XfYx47uWQLTk917xwoEMoUAbCLG4SBXhGu",
  "key25": "3ZiX8dyEQCFmq3zzfJZiUD9SySRzY4SM4xGCNJgQV5dQf1Tb4ZzWATPHeMmT5Ceta3r5daHicpjrYgWUMXZ6EAgY",
  "key26": "2crqmdTBXXarC7tNvm2Qw4RT2cFQXAvNP9tLXkNByrvypaiQpy9fgWxs1XHgFYyH3ZoujZDfLg2ZJpbKJjbqypa1",
  "key27": "5Tq71eeDSfT7Medu5bDNGij1WEpXi8PijEspPPiyMwW9Agqx14WM58cv5Dg9Hq7WX2aBtoahLjrVAcvDEhp6h8PZ",
  "key28": "52aaJaV2gZTnLK6ehsWCE667kBVgBeZU7xCG2VwYYBhFAqCNZuYTS8jejriAjXskh3haD7ZfzSEoNYEykaj11bTN",
  "key29": "51QnGzhEi1bnBHLrSCEmMVW9N13QgfZoJ1ymbrLAu6xnjsvgFtkrNaV6zvUVASLoJt7162Ah2XrnKDm19PWWhLmi",
  "key30": "2SumL36Pu76osjfFmYuHknvuvk2erzQSHJz416EaxHYTdWYypufUD5kGXNVDdWWeep28Zwn9kprKLzsToCefKD8q",
  "key31": "2HEtCZsNUrBDpN62UBcDbUQPXjdQpfaui2xqo5XH6Jj9H7veDn1XQ7EHuTW3f8knGcGrXwn5w5B4Ej6LmLLFxYNS",
  "key32": "4ToHPC5RZfjevE1gBeE3cvCm7AGYZYN5cYtWZqfqnGgL5daPfC1ShRsQ4RzQAyF1tB56VRfBG2pzPy7HXkEzbeHn",
  "key33": "5MgjoqV99nQnAHq3eJUCGzJK9mhU1ADf3LQSGKfAd6atmt4acPfWr8XELWogjej2cPzpipnUgdGwDdtpoEsAQ3P7",
  "key34": "3q5maBKDZN9grPkPQo2VRwBG2Ax19reZuUeiN4pYYfFfRKQq2AeGVwWMP4svWchmUJhsFZZm8hJ8EQ3VRBqTYw5z",
  "key35": "5EYSVqHvdbeTueSS86wcja5iqWj5iyesi2Rg6vk4eadrkePh8V2jccMjDGfQe7iwcj8Pjoa4yBqoEVCzFvquj9m2"
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
