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
    "b2gT1i3hij1NCwJ4M1ppPHyMi9TcvWG8XKjT5sktdCVokrArGuSGDcVrvaw3hDDd6BLsNm4ysGx299RiArwrA99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363oQD22BuDbZDjLxSptKHgguihYWVcqwtxR8CPPYgHo7x8xmkTEki41yPxcu2Fe6862Dt4dEh2KUxQinxaYbdeh",
  "key1": "RrCySNqXHXWQpg1pg5mMKHDbgSftL24E4ShUH2eqnXLH3DAVBdwZuMFwmUZJHpvfk7j2Q68Au5uAja5n3aHAnwA",
  "key2": "m3xiRKhdyDKME21yb1MMDLtBPkgA2kATZid286jWUQq8yXXiMsgFWQhYesSXm9CeaVYDKUU1BPeVaDPnAhAqQhy",
  "key3": "2RAywvydDH7tS6C16jTnZBgK6doB2G9WKvBh6uVLdVrFXop6nTV1KxgyKgbwepkuC5u2ELi7zGasntd5qi414cPV",
  "key4": "3Lugt96yLJxshQtSWJpjDLaE9WKqL3EcWWKrLobhHSnNPGcuTBz8WMDuK3PQSKzVz77wvZGQXKVMTtaeMhkzSULr",
  "key5": "21eYmfLKCsq8Df4LpLPwihfxZdsTQZzCY86NG4aF2swcPF64BRW5CaSMqZDxjp3nnuxg6EcbaVKd3ePWtqahy4Ty",
  "key6": "3KD8WRV9c6mKAkZDwAc7VendyhfRB5wd9BqBqtRWKpzGmByiWyKd4prwTodxcAgVgNqSb7yLDbxzpa9xBstRMUtG",
  "key7": "4ydbeMEuPdj2wcmZcLGDmBUYAeUQ4vykk35szxdMns81UrMs4GKDqKMqBmiVzAuQgx2n9KwHvohnuA9zE3RpEsHh",
  "key8": "45qoFGpHTxE4fmbrMdoUkzJoMocxUnd6Bv1BVzHQWiysmY4QKwrCb5Baaujjtna2PduXVbcBfyiCuAxLS54d87Lf",
  "key9": "3iqSr5hdNXAEHpcEtq8xsmtbSaZYizy3WHPAwyi39NXoMqroqpR475qaTbCZP6eMdXTozrPbXspAbZkCqHBcsdXS",
  "key10": "2mYHeCXdGqphtFuUbJtgBL4fuaDAUJa2b1H3J7h5j5a2z11rUwqGgP3Xzx6ktuo6FmDV6aot6oFiRmegNMXHMKA2",
  "key11": "2jMDmbFr6nFwAYyVzLY3eNQynAHwcGipoZDqA4uPXN772bSNhLkYbG2Anhs9gaTa4oxa4xY7VvwFvMr8FA1QH1nE",
  "key12": "2ABkphy1EcfE4LQghCjTyoe9xQ9S7KAsHNz6uFoGdTs7otRgwNKZ6oN3pyD4vASVMe2FmP1S8L2kKgPimTtY689b",
  "key13": "27CNFc3fGiCAcZ1trSzZNYqxwiSGdf4R1D6tRjuTnRyGSoEqp4wnPhL2s58SkCpfcPnwN6wB6KJhHfFo4QANep2L",
  "key14": "WCWQtFX2xo2pXvjDWeqDGkpkGxE5vy2BscXaMdrmucXfvkEicMfio3KR5tnCdGbWgAKeTKsi4JChdg5pAH5qrXR",
  "key15": "5KVAZazrqNuwzFqWb16Q7FgeU4hUb8PaozLRiTwHyuYHD5GPbiDJqoQu7ke9nU9EfqEVeDfUq6kxS2BJRuJTCU3p",
  "key16": "5m7JGvyCKf2ziExfcCn1HcyicVD35yhZCWoMv21Fu9q8zQHzasYPQ5DLd2YjRucH2SJubsHAs2SaAu1nN36jUR8Q",
  "key17": "5ykGPDei4jG1tbYTyYWBcaixnftd1BJ6brWbX2tAtNWSBSvfLoVNPt9U7wtyxkT5kVa9oxb8GPgsRoE1fN6yvgbs",
  "key18": "4s9GgZr1GskcwB6wmkNhRihGdk52E7AK3kMHwJMzUBK5NaPuQzYVVamqNytDm7r6c613YL7MdjapmANYUEheLNFR",
  "key19": "56avZQ5LdpyR6zU1Fp9NdkzR6H6mfRD2DqJ6hECQfQBRwCb4pVvuC9M63Wz8sJGwsrMHBxdNiGu8Ww5Fg7JVoChu",
  "key20": "3Qf19orEeFiAvq5mFbAz9ZbHAAgYzNcqosqi8dtA541BERQtQtFD2QWV48Un8ED5oJRdSxh4RrjrGeCVVENmVDLu",
  "key21": "6vvYFqmEMJs1ar3r2MfMiWBg2tsShJeeVd1Wq2KgusknyNJn93JFRoFi3ttBcRjtCM8Zo3R8AYmZUHQmQoK9SUA",
  "key22": "xAZdWU54zCv3h1QnRJEA1fXH6jwfgiugzCto93b5NxMroE3ZjLR17YFBPQa51vQQcQY61ispPBDvzYXypuXAo1t",
  "key23": "4ryvCTs638mUgw5tMnF14gkjXQZpWjvDCyA5HuT5YcyBGtY1u1x5zpzcfE3zjh48HfyBgTTUKWLFYjzb67eC9aZ1",
  "key24": "cLo413oecR3fLxKUfA2ZpA39max3RWafBS293D3Hiutky7uwKMVFYjRc7NNDPiUKLydvKdEd7tUB5ozagiv66eG",
  "key25": "49XvAYHseQZqJj36bjNPko2xVzfzKK41Atf3dAuBUfqnVau5mYzare31cDD4jZvcZXqtLNYu7fEoJ4j6F5pdcvHc",
  "key26": "2qaqFMkbXaXSiabZxPbwoWVorB6wF6heWFJ6b81akCrVcA96PQPnpHSVRN2uskTPxocsfo5xhbEPnLvEM2S4zmf"
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
