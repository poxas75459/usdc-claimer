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
    "cJMc6c2SMMZZ6fN3EGJHnUdo8DtWPZPfiuyjECVryX5nQf9ah9myhDdBhiUELqyypru6zacHyoE4EZVyy6Mi9kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsax5XwK8CgLYpPyHpkzcE76GsgoqWQP5mjQ91ke2zidRzptCzD97jTK73poZjG78QXjWQTDzgD6FzUf1dERRPj",
  "key1": "5nWAkxSnHtXeLhSHWAxXm7Xce4jwx6Mgut132SNgBHpER51PdRbrLUm8nSAtioFA1WV9bCMLGurAgZwNehrD7y8B",
  "key2": "5wXNR9wWc7Rnh4XPu9kqZSA1jfNapY1ZVeJ9dJmZw5vdKZcbHEoJiXVG4Hcxj2DJLgwkhdjATeehJUxSAkf5mJSk",
  "key3": "3UUKs4WwjmtXDi4tgXEsredUHL1CcdEqYNuAZFUavJKFotgr4ZzB83bj9c9DntxPj5kszKoAWpvH5Y4Q2dGSgojD",
  "key4": "24J3eq5W7rDuz8v36R3aJR8zzhSsEKy41UzTpqpj32GB5xiuQgLBBRpdiWMcTchBNv6Cky5Zqf4ZFgw66Wb4EkFV",
  "key5": "5gmEE4fukKkvQZSSG2Rktg4R6uhEttH6pdKwLbnoiurectCymzuvJCzH2MbGCMZoSn8fwwzeMjTRohoEMWPXHaHj",
  "key6": "5YqcTki1GrdeWbZwL1vH8Er9mzjLjhKHgeqn4MbXWq7j9mjsyQwkizuQQm1GXSaUbYkaSNcBZyccppYiZrsTBpz1",
  "key7": "C5cBeC1x5scvnJ62NuwjPaG6JZzSW8zAXcXCWoGxCbS4TTS4LuCzbfmuFs43Qh3DEm9jAQ8Fj6iYXdyoVzCdiLk",
  "key8": "41YwpAerL3Z5apTkyTxVigw649VZQsRY6FNVSf5mKRAqNiiWr2SCRhPNtPEefznxFELpbH6gyxoRG5Xgi7qYptoa",
  "key9": "5FRKYHzTRKq7M5zKgLSoyqHQFaa9SwNddAn9AiLp8jpdP4dXTNjTZLxeLMoa4cQy3hAefgu2HJ7acULQpyWnTqoN",
  "key10": "29VCaKVpnCVUJfms3SpU5dLuxNqzpZEYAxLFrc2kjBKo8Xu19hRB7PEpQLpuccYe6K7st5VSMSmxqvbAnm8XHcwy",
  "key11": "R7fc6dMt5r5wwKVh7QKn5kJX1Z7b73tnYbCymdUz8sK99tmTmPvx4KfEC7dDKLSNGKijRPi8SgUwgT8dy1wcpEH",
  "key12": "33NB2Effg4F7iGVbF35YoNf4Dchaq7189Wjh8qaAHFnfQHtdg1AL12uFbubeSN2tx7uSn9kzn5CD4KKFjGH3Hcuw",
  "key13": "2zQjxw2kCmxMwaPHid1cdWFP76F6n5iQrFBGMXy7EJhyzhZH6yqa4bkAC1J1x4bS7FP38oijzJUZmL2tZbzao4Dj",
  "key14": "3LZMYaDCr96h9mNWpjYwzusoAiKwAsJdz16TQPagUV5TbJ8eaK9dwQwQhcrTDPguEwkM1vZLiPa6kQwq6DMqoCZu",
  "key15": "5scFuz6FCn4uT7pU2SJKrsVXU3Y5zzVLRDgXGMC5VCrVtfZK5oSWCJvcizp6ARiM97CsXXkJuX6oupgMzzy5HTUK",
  "key16": "958ss2D9eGKTCsaNVSdEtTK4w2rDeKqQukkLkBZLFBaYRXN8secyYorPXVkZwuLssXhTBPAcD5WLsEp9111w7dA",
  "key17": "5i9cmH5tPbnJ95E79oL3PiQCLkZg6Cf9KaePELrL9MdM6hSH3vyEfUzVXZaT856Lye5eu8buU2955bkfWnAd8H7P",
  "key18": "2dCC5qv56sd5LJ9VY9dzsnnHCaoM64jL1DztmaSp52xHkuKYUJ8fmprk88tK1vvhsdpZP9UNWWDiPk9CTfY7BysY",
  "key19": "5xVaKHoNXfkDtdes7C2RSj815cWEQUFmDVWP9rMtKr3DpaU7PkKgUNY6JdSBgUihXxujQ1Bjodg3HcJRTihhpAcJ",
  "key20": "A8ZHbvoWyCwsj4PENPm25Kjo1hx1VYkyb5BvAepsCptskbmnmsBL1DkjoDzJNQq8YzzeZEKNR43jmhGowNs6sVk",
  "key21": "5S3bDTGAoHktZ5TTU8XmgrTD4YchXf4T5en3Dco2nqYaWBub8XJFopBYg7dYRdqeR2Q57Bt7RNHUREfgnPgcWmwx",
  "key22": "2SoTf6zrX47TLmdru9Gs59ttTbRFDKgVzDvYVS7Rmfru6r45rq8VEwcGfpJYYF1P7jbxST9M6N1eCmiGLocWg4P4",
  "key23": "3sV3PrQpha1Hg1W1P8jDsNqjhb2n2zxdDubvAhGcCufw6KeMpCvPQPaHjZg5UEUx6YCDHPLuzURA1VchGHTanm4k",
  "key24": "4WzSKPiyJL5r8yHFjm2ctYrHfA8SGQUiyzYaJbZeLEMFPVELVbMQVdgjB1gHjtryDp1QDFvTBxrMraYGbt3BeKB2",
  "key25": "2JoLBSmJjNTRcqnFfEZZN3ohHdNhGUViBzoXG7FsSXzpT9tnVGWZemHVj7ybnnJ4cR6j7pfdUDqKhhCQMAKb5HSN",
  "key26": "2mM1scfuFNd8B1YpJDs7sijLkKXM3qSuV14epkzYRfpaS6uBKxw9N9ccihkkkoEU5Sqj5kh7RKmByWTNtogTTe3W",
  "key27": "5gPFw5ypbBJz9chC2tYcLwJfuE4fbpDetJquhRGAazyDi5wwdzGG8inpRrJaojDbwmVZoKasPvFdwsvxfLyQiajY",
  "key28": "41tKFYyRb9wAJXjh9ckLabMLZ56r9mPxsUUvVpnbQiqJ9xrhzp5we3132yVtLfwCZMGksimABTBvWvfJGMLophUD",
  "key29": "5qka5LFf6K7XPszB78Ky6GcZ1Si4uC8rk7TNBX17kDBfVyw6HgxpfEDTXtVs9iGJWL8B5snx5QoFbD31o1kPcmQS",
  "key30": "2LJNvfCzzCpbPxR4VHuTVmXDJf46vrCW72vBU4UFZnKjC4anbfC8GhgC4fjvztNxTaHhkqUbzXZC4EgDcvQtoN99",
  "key31": "2gKDMNysUQj1yCLesTDLMmjwkdnX9Uw21WpefmwbubpodKqcw9rv1xXLNJ2EkVNSJ2EoErtFfho78QGJKyyFytcs",
  "key32": "356jHFhCodCTFoVgWYX4wD1gan6CtsvPkaz7kvLWkohVrDbWLxwzKHHLMBsKZ8z3R7tiuRmAjdWcxvuJdgLuBgbF",
  "key33": "3vf9AoUufHucN8dbB1Yj1jrVKmxQz4hVEhjrvbaGkwtSyeCNgyTPJYXFFxZW8JKPWRWb3h1tm1daQXazD33sCgnZ",
  "key34": "5mmoJcTPHeJBaStDpWhdQZ62m6ddpLcKgY9PeNQyDpVLGHcAXQgGQVsmCUt8JVKpprpqvKm4hZa6EmJGB6f7PJWd",
  "key35": "59m5c2X2dJdRrJUNuNggqynFEXFkxMXRUkD3JUEBeVeNRjaqeQrJtiUcJezTWstNxkyr5bBEpgGNFUTysTPM1xTb",
  "key36": "3tK1vRCuru86WrXmqCND26QU4sEPzwtC8nUcG6GeZ53dcGNmJnRfck1nT36Ua4dofzGzSPvUDDYBzt7CD2oMXtMz",
  "key37": "3jK8aJ6khShF5SxwCn3hWzHBXVB1ne63T3uhGhRJyLp3hqsU7xqGJYejyhHYv61iNvTVXKkrVJjpoiSMydfJsrxZ",
  "key38": "3FXoWmnJTvzGu9EiwxsR4ZGqU23Lkp8fGCrqSHyamSs53kjZa69kM4eNpyHBJBd2GrGC1DJkGM9wFHY6PDxPG4Lp",
  "key39": "2s6skW5CyusY3Fs2kfguje2MJPpixVxzD4diattkaLYnLzanK4pKgGSW86pprxL6Qtt5E6RbhzmSLyfbMLboU9Cm",
  "key40": "5S4N54xPGXrzeQxuCNkk9TgCNNqqF4oGKHb2mjXBeHa9yCRNQ8xCfPmBLJ1YrZMmfMHW8xTrUE7fTPSR3gEVR8yB",
  "key41": "Z1K7ErnFMzpsMMHQZkSsM526rJ78iNFVUGzcx4fHqEeEF7VTxs8tFbhJN3mLzJemqXHYLXDjxpoHYj6tLqnAMZ1",
  "key42": "3EkBUonhB4MyFGn7KNzRKx46EKi58yERzDEsoXKE1smsRTPxf3MWUP5y36YgVDVNPYM9yGo6g7n3j4mZrF7deevv",
  "key43": "5Sv7N3ffRbir9CnZkafgx2fnWh9cMLyeMZLTfSBc46rEms6VDAFnpxvXarjcdsJxpwFYoSqKcdxCZpVtEcUtoQyf",
  "key44": "4kruPRz8ddknFzABxzT8f8QCGKSePYbjEogPb6PbqnqnKeFVm1z29x9wR7aXG4Gt9jD2jJvBaPqUQZYey4EdpVHX",
  "key45": "4gSURYT75PG73EuxgjzkZmB4XZxCaBdF4qpmCvfbJXisPTkJXWk2A895w5sv7pstZtGtzc5nCB3eJC7jHw5afVSp"
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
