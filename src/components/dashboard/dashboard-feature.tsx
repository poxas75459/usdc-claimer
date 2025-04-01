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
    "2xCzBwvDxafS7BFBXNeDqUkvYs77SMJ4rnB9h8ypaDRYMK7ksXRPnUm4qVf4G9VHaLj2KsqY8tpH6DzyCS7scDKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jv4TR7R5s2x4GaenYU1JL1rn2j5Kxi6GdDfyboacYp3P2XWCgU5FycQLEyeVv7UYNmFegrv3dBypVtDRHukokgJ",
  "key1": "5Wi6JBCKHQvDEaBt6NcFxtxhWce1ApXPmhLwpiCUVJpQLPzcXKFy2caUDJJPF1csbtCVDYAx5ZpkBuixr6zsggQG",
  "key2": "5wgD6LcSPhz4agPWzCHYyiNCrDd5KSSCkhAcKVhKughzoyzk28ALzmkVGyfXeX3QmSCCd3YBuDs1SE8m2ppmqTM9",
  "key3": "5sDjgRuA845nP3ZDzeSqNcRg4TSZE2MvNfWAfG8GLGhwY5jFUxipBF2bii3f8waCqKrgPwhnzdNKoX3B2ekE8CX3",
  "key4": "2nQAYTbmyyyKnLdztcu1vxWA6ANLrrQrBoqv6M6CMcf6aHkgZv7V8XXCjUxiJf4EEN2sD4xGZqhwFB21UaKTJF7K",
  "key5": "43ns5ego9h9DZJ4H7gtyoG9FXYbXtjYEeA5PTkQLJvRXFyuuEZMkKjT2dCmHuHd8WSRkirr3FMoN1JVPxSV8CX7Z",
  "key6": "FNTdtdh9rkGhqA4Juwzpr52AWMqVG8Sc7RCMVh14xbnLsRX8GrXFxAjyz8snBDqukHcw2HHGyi3KJ39NLFAowCR",
  "key7": "CFvii2PZCgQUaiibHHkCFpW483cXjqEzMh7Nj6CBS6bArPBceKXrLYpjodHYfLpf1uP1mZDbpefU4oZKEPuMnjd",
  "key8": "jRtyy4iRpsYfq8KzwXmji3wSbFe5siiaMYmcxaBgRcRyErpoXbz577aGELmN5zEFXqynbhaUSmABxgXEKAFTJou",
  "key9": "26bWKBE7QeTaStP9uq2QgH21AoS7PimwwjHCfkjZP8PmXQb6zsG3koYVhyguRzUKTcG3vSJ8TFRUhwAuG62Hg2fs",
  "key10": "4gs1pqjtxCNQVp1gAZLA7oWr6x7kWsiBEkL3E9rBH2DicSVAecEy9CiNShM3UxQKC7ReuEx1g6iz6pbNz5Fo2GCD",
  "key11": "3NarjcBT6ncn1iBBTiMyQ1bFfchcnj5TVZSuWm6ydiHxpzENEqe6ju4niSaqXoyDC5ocT8ED9RwpMsX7GheNxDV5",
  "key12": "2GBuypfAo1WXu3rLN95CkETkSuSsrYiQvhU8JR83BqXPGnX8tmMcpj18J2U9NdMiDZrqSfmKf4RHNYjqd53G7Mo4",
  "key13": "2MPJUqJN7GHaqUdjKkLEJCRt5Eh8PijbZSpggobiwSKSdebYACMtBCGjPW4MuKDoG9WKxpRvSzwtWH9x896b9e6D",
  "key14": "rrQpD8eM3czmVJq7po5MCWsrhCoRaqABX3mR5dd5sRJPNkp6ApjCmUGYs1ohurmDdQ1yvRky4WkygwvsAb42BCS",
  "key15": "rfmGRgGm3Pq4eHuHb8uadiP9FXZ89FcuidK5TW2Ti8aR72FkdxxwibZ9XPvz16DsCWz7FjtpeeYyntk8Pu9pjV8",
  "key16": "YHMSgP2sG9HaEnjAx511UNLLEyL8Eoim2GSrj6H7yC8EwLwZgjKeFbAt19NYk7PZVs4XbJvmEeCcKwKYR1FBVsP",
  "key17": "4A6JfYs2TcRAZGfA4R113f8fBtbWjHL29Efyh8ks8koyYWhvngjFapHy3byCeZ58eGsgcS2w7brQNqQy6DeM8BWA",
  "key18": "5qvoeuxNHWX3imzx1tm7rHiSMm8gVj8gGvhvQyAqPA6Ns5azG9fimtN4ijSawbeE6gYiuhS6PFUgw5BdGN1ZTiwk",
  "key19": "5VrLdJTEN14j5Fpy3onqvgXGYMMaH9uDhS9MXVhsxokciq11H33XPkK6fuzQhFZMwPmt7VdzGBBWwjmiR1QtXLdA",
  "key20": "5HaBjtM9WBfX6VPC2GGdWF6T9cZGDyzrDfTh5GLE25LGKDDRwY7y7FqzQ5sLF1J276XeA1P5DcfFm3Vs64QNKeCQ",
  "key21": "CD8ZPVwAiUZ129X21U2Ld35rV5Yf8EAq8kZTXR1bgSUiruNx65vaGJqPCRkAUwH8w3Db3i6vDaFvx1tGoSgs7JZ",
  "key22": "5F7yvQmGsNLFgeYnv8f97FxysXBc98iNdzdLmF8NfUKKQPtthqrA6StF8FVtdDNPpCQk6fJQXQG94wWz5vzE59UW",
  "key23": "4sYPhM2byjr8LfpzCmHGEpE9Xh4ct45TgFMhFHMBqW79mc2Dp2Rb6b4HdXds86LveuTqroiK2LqRzk8bekyVxM7C",
  "key24": "3VdvTfZYGKWFUZ9g9Lntzk3Geah66VBrEkshUa895JvEo1o5mY45i9DSQqMmNeYdGG3ctuPWFH87SUzJcRTraE5S",
  "key25": "3aRPvhZeizQi3JSxszDnvLZijXerocr1gbeMMrGR2wETXsjhHQtEsc6iimVaJQHL7WiczPp8yHpurrfFQwuVUgpB",
  "key26": "3Hd88eYxDVdoGWSJVom918Z8nKiHQb85yYvZ9cvBk5sRUS78wMWeE2jJjsntyJ4nK4uRUKKNSPMQA5NTbGiDheaV",
  "key27": "3X2LtyL8dSVqAdeSiCjKDJJbHhqtjPpQZfDvkU1MpeowqBmGJUbC4r1VtGsMPkADfXrD2gcWKyVtCWBQ7REhVMB6",
  "key28": "5MLWPHeoTnCRuU553g1Z6weGNhjZajfJpGfR9CbJeCWLeeqvtVNuoBwhtueENrAZXefHTQxoNkYP5BcbgfDob3Nb",
  "key29": "3afZFZh86vJYL7Hh25mMz2r2JNKfhp9kD6DiVHh2p34mHUV4sdKfUTtAKNYYFjHDgZ7zw1D4RKRsdgFwr72L9xog",
  "key30": "5yF7BK2NQovsY3ofSesdufxmofvk9YnFYiXtDMYN4RnVTbMeoTHkSAQBEX2jj7WmqCWu8FC5fgqiCDy8BSMXTEiw",
  "key31": "2XxZtUmWDYYm2TWiZJCEMLZ1EisjBmXEEcRtVoWov5FHEPf22euap37XTKVhyVtey6f4NqxS2fkCyGSWKccYpbMv",
  "key32": "474Wh8Jx3jnGHm1U2RSgVxLrnKhNwtVhUChdB9hW3DXvPinBwYpPfEP51ERaHbbDfRHuXo3NLwyP7a8kyGKTQVXN",
  "key33": "xfBr7EnhwqtCpnYzZ7jHUcjfLjvy3fGMhsTPYcZWnPqBL4kXJgzZ7B5M3YCfd9Hv6Rn1eXBXvzhyHj397Yk28ey",
  "key34": "6AE65Q4sfRNm7D61Jo9LNW7fQMQ9R61F39XiLr48SmkZoeWJRCXwDFT6g9eTqSF2S4kQ1UyoUyRpPdHdDQm4zM9"
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
