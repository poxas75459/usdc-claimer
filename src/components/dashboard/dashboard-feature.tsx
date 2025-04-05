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
    "4r5HjRvQ2gp2AxKCqvXpzcwLsyRRVVyqv2hpygXRA1rp3scttPqi7dqRwor71Mdentevepy27y6qpTgN1wDofb5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AaKSth9YCz67jgg4mBHwiucAiHKnqN5Zfbvm9d8veZ3KmnTReh61i21W2Gd6Rssf3rmEPGj4FrmtQPhZyDrE6St",
  "key1": "4Saun89gfZw468HtfA7YDMKbCCm6nTb2bayUd12k8J3qrXdX8CHLaYEh6dsL4PmNMVYRhH4Gp4yvXsc3iqKJzPHn",
  "key2": "3UWrXuMN2nDdWTdbBemDnmCnHsMKA79wdgKmRxVgEvgDBS7Y1wd4fbgsPZvkdbxyu2fYPiU3zUNzA2qCeTqZ3HXv",
  "key3": "5maaV5hN2aQdXwDYirp4TTNVK8UkpAbzN9F5dZhA1zfuWF3t1pnKFnNuncrZg8sPzxdi5orGjTK9vuxdwbboFgAx",
  "key4": "DC5c3R1TebV6tU3q8MadzUoR72NY9svjx1pUJ61NyBs5RaRFW8z2QMuAXpw6bXPpDMtp6KhnQZmkHPvrwFCHUJ6",
  "key5": "4GtswnvefiL9qy2fa4GBDM8V5A4BcByzJtBRmm7xodwCMBoU4FRsCFB3SznzQvaxtkWAkM8eogfUT3jBBQWmBccJ",
  "key6": "5r42VmiPPvXrnv2fYLFRRqXmPhjZ8QSB8JBydWunScVkiNRCyVPFVCx9MnAo86xU2Ms1uHwtav4ftAAHSFrcdpJt",
  "key7": "2sTvW7V8T7tU6o3QoWE6h5c4VCL2hFAHkxvqaBksimqurtjsgyWdzp4Njvt5izFfoWGxBVpN4AkJnJFhCpZh8Qhz",
  "key8": "2P6uoXfrh16SU9CsCaTgWRZyrB4gfkBXe2b6maqrRj6wSxwP3djVg3nHBvftqGKWN4UXs9wDRrDJ3AvRWBtEaqEv",
  "key9": "4x3FrGa6YhojkwTtViM2afKRM9fA6yoCNPT4WgZrK4aLa5ReyKVzs3BChk6StTp4dYzr56thZj1q6CBwERPhAjUC",
  "key10": "36mVj4kP2DkyyFPQcekNLXCr11526fQz8Ew2pNQcun3QELyZ7DQHZZS9BrFcooSR1fwr1PfmLXayMj7h1xsxXs3G",
  "key11": "4dqZ5g8pDzwoN39ejX5XVSfVZciFwytgCeozcaXSGCodJKKZAqH5965Y1HA2asXUQhNrsv3sG89M1iVdfoacj38",
  "key12": "67nvUSnADbjdRzE9QuEednnmVX4dqQYmVj7c2PED1R4pYTdNpqdVvP6GQAJuXVnLqRcAtPPwpg1QPuRRhNYSwNxQ",
  "key13": "4HLHrUgT6oG8iCB6tVaP9ZxxQCAPxo5n1jDG3cw3kQSHSbn2GLjcpRhzLSrBeUN7x4XLNDPWW84FmJQ2fGmB1fUG",
  "key14": "Na29ggeiS8JzKjAVSV9Twxb7tYe3trtAfdrF88XqiYh68B6mZ9m2MK9oiAjGzWvQXJmfDAwfadNibwzjTE79Scy",
  "key15": "2Q1THSEdKpUwm6EhUG9hENzpkZ1qBG6cNie8ABzvadZdT9fcmmJP6SRitdwQe6D38cnbvjzegZZu4vToQr55iRar",
  "key16": "vJw4Si5Y3ugy4Fn9BCBqQaDHzwLvNSUcKcvV1M1rHP1bd1Jkx5Y5x9rL6NUyMK2EZv13JNQdnzm7CumREQVoYzH",
  "key17": "49c6R2dhSi1SdS9LsiC8WffaeRf7WBL6B4BrHdVXJP44MHPzYg8J7rePDjomWMYBPAdd56vRxbpddcmwQX7SW4GF",
  "key18": "g6Kr4XAWZUkKwyPg64uiZtji42ctqXNEdbXq6pgfGmn2Gq8cH2F17qa3PHmZ9mhDwjZsbu6xDKJBWqLHax2QzQR",
  "key19": "4wjkgG3LRCdeQbx5NPZJUzYeR8kaPGLPgZi9pTEwFGp6VHiAmPB8dF53a5NVoMsx6QCxKmvjk8oGti4qZxGzUoDE",
  "key20": "2Nfrdqo5T53H4mChqnwUdCZTg5zy9TrGxHsmU5VWmjSyU3cKVbFeiMVV4eKY78LLhS1vU391dRwmMUXX2zrVb6Cb",
  "key21": "485YEXShZUCk6Gm9DgFrAd7Qde1td2RvqKMt1mWHbe1VrVaj2zdV1oazgtj3vvzuDAwgtMgYKRRLTvb8ZCugT3Vx",
  "key22": "5467W8bEwrGTkgUEx62DoXhwQo7mdLXGmNuAZfYqsfABrE6ZMSLBg3vzVzsvFJNz85TtRZaPiDRbWyPSs5BX2tk1",
  "key23": "34uX9xaTdQn3pcaZEL5v9DAmJqFXkeW3By8yzPEU7wpU1rt7ZhebYcsiEGhzcLiw1Uy5D8nSMkM6ffmCmFDUhkkc",
  "key24": "5qwZd7xY5P42dG8J28rU1q2g5sockvjzZHRCk4DZciv9VSMRabivsLPoHaW6QpyFtYgNYVfMyJR1hDGX6tvMeJeL",
  "key25": "586betdkBP7w8uB338Tvn4KAiRGS4fRCpeeRR2nELvS8RgwMbCcKhTmJSc9d5AkPXKxzooJcqbXiBihfDVHWeejD",
  "key26": "2eCGhub2QLZ9X8H54J5w446LHwqF8ax1nvXrEhwQ9DudSyu9FB4k7qxiufC2K8cybjDqa2g6gqhFuGfZ2jb4REti"
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
