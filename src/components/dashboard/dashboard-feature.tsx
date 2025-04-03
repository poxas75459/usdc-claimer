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
    "3o2JSWhCVfqK1MvCri8r7eSQ18BschH83ddNbmpXmsgQfWNDSDGkFYwNheCZcLULYEYCkr4gb8wTHXZ9xjzGiXpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRdkp52BDt9SgBzE494RGj783rpq9r6zvAiJEaF6uxayqMP3hKNvT7NjgWi3ZiJXJFLtfGbtoHEzNcPVMEqv2mG",
  "key1": "44vLAmcwogwgdcXaNqY9bdSGAmTdweDcesMHdfiDsScG6Ufz3nphnGvk3k6xXnkdbMiFcm5Z8eAwQDzbYB5mUGek",
  "key2": "zq3f3M55WVuXJEmqMdKbjsoXEi88HFsjTZaoJcmD2kv1R8UJxVbU183taWb4JnJuRnkcEdDAJwiPV9u9FmUuBVn",
  "key3": "3MXg7jCA11NQXCHHMM6UeF3nhsYubZHgL3pgoyXsdRsJ7PHH2Bj4jAhQEBGy9H7Wx3Aj83EU4N9GboPUNqT76bbq",
  "key4": "M6ovLgY3iVUWhMK4CkQLYVFmadqGDtvSYzNuboCqYM2gBgrRe6gmMkyr1qUzm5SBEtju1j4dgfKwu9ooyRbpNha",
  "key5": "44bN2NgM2ukC3UqWFDbjLieb3WfAvxc2cNokyB8GEwTG88YazWF8puD3c2ZpbLBnN9zs6yRjE5fzf766LxxXdzie",
  "key6": "9z8Ek9ZSDKweZjGhEZny4dMo5sJsF8A1NeQbsX4FZsGpkMU5CGAzNxj4AiD1EPWmShmYt8VLoQK8CtNMtnfTFbT",
  "key7": "RKZhWnXjpY382QEJSLoUzKuMgan3w2ssfrtHm4ba7XHaZewBF9mh8prh2L3jTVvJrzfRcQAVhcLzdyREUChEgfj",
  "key8": "dXoAPEJ8p7h8z7tjNUc18WKqifTauRifHaPjPBKtjRYcr7aQEiFUTE6GzuFi2xQv6b63NALJYcdkRxiFfsdAnaH",
  "key9": "3dbNdGbLPiJ8ytPmJwpQKG2j1qzDQ9ZPrdWs7edha6Yqvqk97jKymTmMrdaUWBrxQJ3HN9jcbx3Wjj1Zu2DrKB3k",
  "key10": "2gptfhQ3GAkq8hSLE71Ero3ZmbiF8ypW1yQcPZD3on2mTLbUH2WWrBFJ7NCp7Q6YLGrvsyhYgCsSqunpEEEXKWyQ",
  "key11": "gBL3Ltb233hyNCEuFWjpJVhqq8JrkQoVQRTzcxVWtQipjuArTbMgvUDTDwNQoKLH7ErtNxw7Cjdhsg8iX7CZ3Ad",
  "key12": "sfkPweB2nM4iMUZTPitGx7Ne2g8zvHZ2wmsEhASQHb318JCrFtoGugLYC252zJKAvZ7D1GwBpxm2uYseLeAe9px",
  "key13": "5xPXSoMPDgYkCzpqz7ujka1Gdyb3gS3yX4cCxxNH1Qgb5gPif6jfZgZYBT3kwaTTt4qwbWoimgvBtrsZ9Ltb7Cj1",
  "key14": "wiD5xCybBsNN2qnW7w4XWpoG59vFKuNfoNSbtLpJPvA7brmMKyspiszSiyLYZhGHMxNReAWPF6oKRdKzvCWZeP2",
  "key15": "4x94jWgW4rV72mijbbbBKZzfiKEvmrs8R4pQf5NSqn32YdpSu8onFiUzWVoQ4yVihet4S1KeztCvodNQmirMd7qQ",
  "key16": "4APnHJVEkMgkMcvNwncGAXtJjzxwJUkkwBPLaT6F8XBBZofn8c4pYDj4KHM8kVzGNVKEHtMqDydxT2mX2RVjY9C6",
  "key17": "4nvAghPzw8uNQMq6anfFA9mzQmkBXr1x26eAHABV3mdkU9VNZYec12c4vodpM3cpVj4gzsiRBYGzqTVjN9ziBGJ7",
  "key18": "24K9YSsgoA5gTsdf4UxjfVe1218pMnMpP1EJ579H9sZZdMMA88ZT3mwweKzRNFFjk2DXuwsRtrWPoT7Q2hH2Hb7B",
  "key19": "4jVM1jUaJX6ZkdvHTHLnBDztAXWXCa5DUfKZsXorHV3VzgRdeus6JACDY4zU1r44DvUSncGPNnkywYrbE8uvhPMj",
  "key20": "4MctfbEt2HQKBpeMZt2xRfeGWWCn44nyXLkxDvYKKjjvCtsPr4Rta5Uqc1cdbjDUqdHsZHn1yoc5TyjJQzkak8T7",
  "key21": "26az6gQRdNHodGGZWK6HRksagvZZmuCEJyT1rqGcQXnvPpbpdhhib18id5Wfb8LGdrcYpYwypew1sHrNwpMHZ9Ps",
  "key22": "2C9qgZBzw5mWqkdu72vpTj9wyLa8PGoDJaB7T5tEfrZ3YxygM9HWN56cJPhv1XMpfijmS88TAWgD4QBLY4Ebotjn",
  "key23": "5TUPknVKTtpFHeD467C7Xhox8zSUjXYM89XD89bQVYqDy59PyMYLL8LQQpirMQkvWaWBbQQ1YfLQv59yozRAP5Fb",
  "key24": "3DX2NZirvWJVHcAMetbRJ9vELtnRBs3frdkwC3oQJW4jAxaXauEK7K9NvPGBRFgpj3xCtn5hWbdbVhUEX7JnXPAv",
  "key25": "57PkQ6v7uhNva2PUALt49rqN5eEtETyociCnYgep1oRWyuW4xvTiqWZSw2KGgzv3DH9RckMxtWvbjjfS217b375f",
  "key26": "4u92igsGAKzgAUeogsjYjKkXpnC7QubWtUcDdZDBjLvn9i6sg97k5jAZfvbwWW9af8ZPnjNppF3tnJKTPeXVAicU",
  "key27": "4Pw8d2yVmAgcFbfZahPY8e2Vj9xzZE4z4F7eBGhHnb61joM3rF7CyawUYZhpoPd8vjr5jGU5fJmsnHGCqMHWXujV",
  "key28": "5Nsg92cLvAaPZtk9rN7BezgYsjAGThoMWNSiGw6AotZajZB3tDjmkTSycj2THbuQHQdZ9q6mXoG8KjLLQpVmyKXb",
  "key29": "4sMgR59ZrxKb1WasqdMdo6QDY6m3Nzbn8cb2CBLJDtySVU88mLMxs3gPF8z7JD85GQXP3HwCLpMWoyv1oyw6Dgug",
  "key30": "CraN2hyTwssjdhDgNrZ6YYjyPVtBZJs7mDiErY6kpP7VasWEPrK7zKfksmZz4AwT9aADy7vbJ8uFB7hHMjs85xo",
  "key31": "mYLdYNBYuoXYTcS6wn7Xhs9PRYCJGnFkTS9afmtzSiE9sDyPNT4nyH9tSdaiJAyceNdELAnndTrWu2VNRjoewi1"
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
