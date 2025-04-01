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
    "25W3FXYTg5rJfwpRfRHPmCxM1jSQrFUt5Q4LGvRiweVyJ1mgfjRMAFK1zA5iJf8yz2iHMs9fJsUzHfQHsKTFzoKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHsUrXzuTZH9hGHbuVHdPopuqsJ38fKcoe4Z4mb1hpJns3FNmteHL5NJyKusY1Sgg1sicBP3Ux38y9L9L5oEZRd",
  "key1": "5d5yMkeDGp13brstg6owdVKVPYVzhU8XeW2EUE2YHvcRzQ6FREUCTxiK52P5NX9kzcygMPqFRFAXWK7LPJZT5DMH",
  "key2": "3t6z9r8tfMy8kUA8gWSki7TqnvpWwgvzY5x7UsCpMCWBSqucC8Me27jPfkeooi7j3ekwCNFE3iDFUAvm22G1mLpp",
  "key3": "4ymyCuaBzee38pDpPMafP9nRJ3eAW3cjsAkDKJUSwEuj3VrZhKLw2qbtvwm5DF8dRbiEpZJj4WgRsSB8V3fdn7MT",
  "key4": "2ZHG6zoS6vhoFLGPhVFwasYE9QBJjZxXNWT7VC8MhpZ7g98q9W65FdKa2PEXE2NLRmgV22sThaByuDmJNbEGNgN5",
  "key5": "GzL6JhQxk7CyJzKuktVanzqhwirp7Piik4fbtA5e9cpnKcScfjhvXsM7rYSZmjGYrR8mApKCx7kBawzxMvospRT",
  "key6": "5rQpivRXZ88xkt3UCPuPMuvYhFYcaLgQbmco1Ac8RP9V7ybkwvSveDSMiBkCqPw1TLh3KDhAE8Mq5Mm7Q1VLLkMY",
  "key7": "3eghQSDXBoA4GdGhAaaXyT4vo7DxdUF2RGqDRrXczWjXnAvtAQt2WZ3uhiNF1QhjKoTESkjqnA9EnDhVSGmtAbCD",
  "key8": "2ZLHLGBAh8uhMAzAZeqMPxhWyEW3DMs3r71dBk6a2zL6vbCEHgpP92mAcWDtKtUFKeAeR1paB6DfVPMcTcgdpjfm",
  "key9": "4ux2AWCMsevVUAkjxcEr4qLztxJeMTKk2Br8sMFY2rcPdnZX2bRNxDApYTziCbXadPdRwzt5W7BeN87Faam45Zxi",
  "key10": "WEHVwc4kDnvp8d9VAtoxM6DUUudZcQcVRZ2DiWgwpqqd9W3MhmBAKLhAHvJASDZGAQXNrdBBfmJbCWbeFdgY2Hh",
  "key11": "4Jv6SJ3Tq7wwdAY7TxWXYGvSP1UEpxJboWP5npBwU1fZ9gUNpuQFxbXJSqPzw6vQodHoGbJD94aeJA9GaZe6UMYp",
  "key12": "4t84zVAcJadZzsWnxjkHUna75xW2GvCdSUceFU8n8241xYYKfKRYEMNh5xcprrAyYkwRDyjbCgHGPffXQCtewWjv",
  "key13": "4akdSHWah1ZLAERPD2RQME3KQ3Jo8iuWnFdXvTJ1jzpdBvTjTs8NxnijZn1N7PZxvjdJcdbo2Ti9DorVJsu7Anyn",
  "key14": "4utzasCysdCwPV16A2NqnEtd5BVLUr2qUP5t7xaogvqT5Q1iZatiDbAVgEMeNBQBCa8s5dUw2Lj5rqb6PTMGuDnV",
  "key15": "3MpVdwNaa6ci6fnsJ7MkTAFsf4UCJRkYs7rySBPuUybSxyDvNUjCs2Wet3jWPoto7exUQYEGjoBWWCjqy3NEkYjE",
  "key16": "5d4x6bqSkaByNoTVBpmHDhaxDe8s8mvsbuy219G6yuAXebrLM1a7zTwX9VHxxWzv6hVCw5PGNgtFG9NCP3N7eftw",
  "key17": "4zv8bXUSZKmrhhCAW6Jy9R88vdbKEq9bVuKKto6Vjh7aLcDGULfAn2BgKnYRrsxRZgcQ8pPvuqAHndiyQuQAcmGT",
  "key18": "3tXRmiZGvmqDmWVZNRPYVaiGXCyiuoJAkudNWCxHYeuP752EcFim9k7X4cYdPMBZPB9KcAqez7j9oGKQfBd2Ddo9",
  "key19": "2gZvc3ViPf8TJR5mQVadYG4ekKP8XaJAydadBnKoP7FMhgPn59LBkTrUMD39Pvmih9FTttUeKu5irrTcMDApJ6S3",
  "key20": "2gsZZgH2FcpSxb7gHSWXoGvGzeP1BUScnTCDATsFmQwsCDyztwUPSr2392z9dPFQu8sU9sFHMtxz7gppi5CDB3vJ",
  "key21": "puCMP5QG5DDZLP3Yqi3JNzVdESMojvsxxaUaFBmEiQ88JxrVEpxbj1PcQa86qK5VWY376WrZmMccR5Vdfp9hFsG",
  "key22": "3TAgxPqdYu6CbTKXne1RBsYbNE5kW7YuMbwWStCvSEvbHKyuSHCnMTC62ts1KeWZCLRupEJdzsQ8D28nqY8T57tj",
  "key23": "2jR4DFYzMBQ9afqqsB3E58QqzRWC9ryPnnvgegPoofj5eiR4m8qyhNuwS5bg5g3PU2oH9hQ752xQG3FtP45uvWZ7",
  "key24": "3DD9YRJ4kTpdUt7uEf2ikhRZ3uUnshDTNXkYHcbJcuyeLLReiSCiCAP8iwTg2XVakZC2Z2cVuotA7q9TE2FTn1oW",
  "key25": "28ER352KAD22PRxp2BqFBdEcWv1apckJM17gUvUf71ETaVh1zG59S9rqhq6KWUJocUNshTeXgLHR1YUZqRk9qSnW",
  "key26": "375R4LZKBnUpnFgrom5ftQDKbgJtwnhiKYdHMZc2Cz9B19LiihJkmwP99FxXXTo47qB85jcEJzEHvQoLDMAjom3o",
  "key27": "52NtA9gES88gYaFEsqhLvczcpMV92rXW2N81cRAH7Vk1SJSdP2jqMDEQgQV4Kd5iHWSDKZTk1hHR5dtopfV1VqpS",
  "key28": "6C3PVDJLuGafAhevgFsma4wFwgxNXz9EMtJNYBQLDxu1p1kVwjnKWwFy1cHsYAJ8mqS6rKEVaJTZVGDWhsVSF1C",
  "key29": "3BFgX4a7ppbWfSnEYTHKSVntzjRENHAFLmGPFEYvMaFkgyEqUkdVuqoeNCkdUdTTvNgnZ6yntDQaASeW3n7cL2v1",
  "key30": "4uJDJt6MDyuWNnjHobaX9ranmwr6skcXsM1nTjwsTqjUMmP65oyoNwjfvP9HCzMeaH8cDsnTBhkeLchDcxdZDNjg",
  "key31": "5kTxiLQYSvdaXu8e2bUJV3Fxm6JwbGpP9Sa5YdvYTj4srDV8UAzH6EXrqm9HGN8sRhhbabPHJwBZyE1UiH6QVJwU",
  "key32": "jB4CQvBru8FEWvbYrLPLozfrnyvDtsxyJsTHmmgn6smR5cQuXiqMQEXX5JYGT9WyTT3TLnoLKMcNDKFRbgNQcya"
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
