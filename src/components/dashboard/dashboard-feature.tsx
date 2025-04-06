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
    "bbB2KeyZLWsRuv66kGwB7embPF5gmFkBDsRRQfCYggHDnii1JwUQYtLwj7DG3oJezihHQWyiWj1Ur6FrWVWKzdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h6HFyK9J8pP1iirtzREndGArwusKDXuqJkaLZdDz1HS5E6oumh1A1syuNDhXYmUq2df1oBFxgHdXmbSZ3RTSHHS",
  "key1": "RxsK95BwimaxyCUsJyjisgbC68xmHpAv2FZESNCXDZrT7xsZL6LQSjMZMaXHxwjc1A5jvCh6NZDer8Pcfquogth",
  "key2": "5zH4cEvVirrcjr4gWYCb9tHtQxCxws67zGzQwK5ouECeNiqcZnGDkBLRoabc84EMXD18DPtqhdkbibWW7uZdD9Pk",
  "key3": "3rffRRXqacpwK8PfkaEiTCXYA6MHeQHjA9BCpBKwRBG9xGbJqTFG3c2Mc8fg4voGM5zGHc5LLxbqRt5zhFesz3rt",
  "key4": "3DomRU1G1mN6Am3y38AS5kx7f1UFKuxjdraujXikotfKnFVjBkuVfn2HX1ZzmvzzZ7aUPXVeAPx2eiN8pJE6Vq8D",
  "key5": "5BnbGrxMKrGLvcFipZrEgeBgnxJ6rJdiHerJGXvqNsJB5ZXCEiUaLcbjZdpr887uf1sPJNbrQ8PztwudSd4JKeq7",
  "key6": "2EgqQjAUGtP7tnqAMnn7AkgtTkEVbhx3EEfgApSEQ4Kj5RWDgWCbTREn5XhgPWp69Th3289eiSCVkncSyWbvMWdZ",
  "key7": "sG6ipTgiVxwQaEAM62hQiQqAuAJdc51x2Ys4SYyfYQzT13QNsnufQRcA7GTcYnkZ2LecqyjyGxfuJA7BsqNN5K2",
  "key8": "c1Lf9rDK9BkqkPktLhTjxZgDyJ5SS5j1qKhgse93peSDeqV9gSjhQoHJ9cVCY5k1BDy7XM2tTy8dkpiHnk6HC8P",
  "key9": "2kMDByfDJ5xWHq9hJLySHqWuuvRHNeq9w1BPpvszmdC5T2EftAa1NvLoXgj8zEJNZxDJtLtsXwWhCcquxVu9vrHq",
  "key10": "4ya6nhSUUbzaQR4gj9Wvm4E6ziHAFbMeTEqp6A5anW8WQYWtj5zjPW3gRXisJBDP1a4WcW5fM2qkFsiDiJtJMaPX",
  "key11": "eBfZP19gbto71yWwjxiVZc6BZt4fTX4zyMZbHEC5SCxCnq4nFkTFmajLpCyomZ8dk6n5GzG43QWNJwqZWpd19cb",
  "key12": "ChZSCkawKevb9hbRAkYbeA4fHi1zbMeDoFT6wHLkt3UDRTqfEgNVon18PMyaYZ6G1VPCYxXKrRM4b8MzKiH67sp",
  "key13": "59wesuvmSgErh6C7aa1Smb53AZa1guqDLPRfu3FqFou8Pw6HCiKkVsCF9XpJHHuprALZhYJAmo6FabQkBEAftTk8",
  "key14": "f33k1uQ7eLd5VccJPuAazFTUmmW1tQx7jobyeJm6gW9fUGjUcH1wgvppPfWciN1gcV8YNTZZDLbHjVseP2s6xFw",
  "key15": "MUrWhF1uFTqxe2FEicKBWEWqP6fjoxNcbUQfHRoyg7geU4RUzDdGwwN8jVeNMmrTaNQTg8Z2ZRPsCVJ6myfhX1b",
  "key16": "5VzFuhs3AANfnwcK8pnr8aEL326WDj4xgp2NfsAAkVyHaSgT8dMpo39uVxZbuXn26VV3qNVc26KNZRtpKm1CTnvP",
  "key17": "WMyWR6CWWZ1mdPGKaANybRY1C7RFB3MjSuDdn4xN2ZieR2Pbf6xhria88myFzH41G6P5x96soawNk1Sp8BcDnVR",
  "key18": "65pCdywiVxqXV9QMLByjrDd6C8YB8CEFvoXZFkwpFXbdBeSeHWrUydfmWJrGBnY4HLfC4RmVwA869dcoaVFM3Ptf",
  "key19": "5sQfzVhREt3TJ74RcJQhoyr5vhyT9ytzhEJ5BXAsc3vqXHPfm46R2CxDF7pumufQ6H8N2L5Z8KtiAUYXn4AJT2bL",
  "key20": "3ykL2Tn5SE29NmpSEgscZ4cG3Tq9ikVwkjp196CBEozHP1aQkJug23HhtbJAi1mumKHGUM4nHjdMcSrouaRjxMjf",
  "key21": "2nKnBy4FUwkf98uX5Arg5T4p1UY6PyXcZASGpipJRhwr8wZVwFrojNKsQJD9XWoFqxf9vT91jB8TL1cLALoYYA1h",
  "key22": "jsACecKFimm1NdSduqTc16pcii4aLYutUCqM6dxEaoUdZrZiHK6cjZ9ZyXDUatHhkRKYbKTNWSebXmz1oVtN14a",
  "key23": "3TZdzmjouwjedmZLXD2j4h5bJAkAo8xeKM3iuTCKxoSwcd1TFAVgSXnYYz2fGwPN6pGawxy4RsLPnZyKQGHSVECK",
  "key24": "4EfkiZ39VHwGi7ag9z8u5b1DnTcMJ1dbyLhuLmccN5hpxG9g5iYZ2hA3z5SpfFcy5mrXWd3dnUArcRuGxuVLrN2w",
  "key25": "2hpZg534B3yWwNNYUS17KoMpv6nokjMnjnLFrisvCprfdYG9r4u9V6n5egmRrHfaRUsAj2Rp5sajiaSC7xX81p6d",
  "key26": "ibxq2inBjShBNX2rf2HaCS3CLBiQQ63QXEAaNGEEm4j9XxBnXvkmV1KFxGZqKrRUPBuoMp99sEce2G7kZEGyLXJ"
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
