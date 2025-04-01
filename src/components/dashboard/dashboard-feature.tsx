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
    "2D8WjwXXVi1YDg5BysYYjy421DWhXANszGhmXxive7jeQqLa9Tu4J1egszLEagmfChrtG3WgYDmCZCKKbrexQAjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cjsEcH1H8DN9a1jWfcQTzRaTAqEy4PKXvfNdpZqxiqwaykV4gDPctpfZZTNHE5SzR9C5SkZVrouLsBJz1cKrpY",
  "key1": "2kCX7eo4N7VL4LqisPwuH8PcB5yLhSC6fHLTfn4QG3U3qKDtsZ44WWa7J9yD3SDGJfmZQwgRtrHPT7eAUx5kNdVr",
  "key2": "1cMaQS9ARrhaqyofdudMuv9wAWB3Qc1VGq3Dp3iain4NryDb9bDaBQCEsdxFuNBRCRCn93bac2LAG97zKenDdPk",
  "key3": "2Hbim5DoCwMvQ5WYdjmAVS9JyExUwXZQiaYHUvWCQV63eXubqCaLomgZrr8QVhVQVkY1G5tHaS7JgTXBejqw7xWu",
  "key4": "2ysC6RXXxRmukwJvq7doCzHszsGrtzgb7RceNzjqMXG7TboPQ1ZcLHCDkhPRPaUykdTu3y91WizTucH1KaiSGDhu",
  "key5": "5xjxXW2veMMUMYJYsJsnPppAB5C5yB5hW46N2JS5pCzUvNiysqAZC1fb7nADHuT1c8NcmrTgbEzUSR6mS23jZGBb",
  "key6": "5pz8JLf1UtKEf34HLrh74rXB7NVrjtQVMsdRtoniophMX8ovhiNpY367xmnGaeCUFnmh2dmcBYDGh9eJE1uucPqu",
  "key7": "2hh1FnskW7V64JsBAgWAbVast4M7cc5Q8kFWbctHhrcJTkWNvdakztwd1zzXu7KGtPT4JqUQmHMujogV6VXefmKD",
  "key8": "5ieFQpwxh9a9FdSMa9VFkSBQ74YaEJnECz2KPoiJrj3abSKWrFpw3AL5QpjwnM4EQyvSjfdLHDZ1gMsZwZvd1MtZ",
  "key9": "4qptH3HSp3yCkF3nG88gAdXuUf8UPkRZ7eXLRuMQyZcg1sHPbZxwBGMnhQsRJHTVGYzzThYjDjKfB3EREpzUTNZ6",
  "key10": "3WS5hTALbXnjQALpd4sEYXhNddNKAjahR6wPQjUFcwktWPNLNHL515k5X8s2LmkFSxZuXAsvt9fHqMeuWcorDrL7",
  "key11": "32wjnm5dPsEdiT1MvNiyaDVYjtc9QjyWrKD9eG1cjbYis5nxG9fFTb8Skya4Fv7uRvPG1xJ1hF2Tdd8VQckMLG2Z",
  "key12": "4RTjaHq9TUozQueHjSu2xr3phcD36cqXenomg7ogSAvUefuZ8JPU97WETPKQqWHHHKyBXqDawEAPEkFjXnm8b5qU",
  "key13": "m58qY27arjhNjPNyune1wUrZHrB5hjrr9iXGAsF8BuN3G7MzwcNoTm1R8evgcu1uvf1D7n9ieQ9pmS228qWHmdc",
  "key14": "wYfkdYTRvX86o5uL8ygFTnxYUmbyfpFXyNetKwE4d8hBLG6em7JcUgtuaNkCWgnK9jPgoWGK4vcTmEG2LtTVMvq",
  "key15": "38RAgS2KqSXAcYeh4dL9Tm59uxYstJyjGvU6FrHcpDPa97dkt1Jo93c3KUPEeNdBfSxHigXqpSoSQ6TuePWLQ8s1",
  "key16": "2etKnMvsPkG74KThE7RyqcZaJrGPYMD6fj8PzMRnWx2zLu9RrdRerdGFWV2BRZQ1HVt84ebuwW281cWWu51VTuo6",
  "key17": "3dsPfKAmW8sWYmk7AA8USMtxnGNRgpR2wTjgDWEVpMgATUbabWNzbsJ68CgcoNXEmmG9vtCnLaJSCM7PJUyvsGNi",
  "key18": "ph58h6a6twyz6LJjukm68RzbAm9ER7CKhaxYtWhojyGjkHDnn5hHADL5N2jgFTJP5s7AMEqWJtUPB4QLCMQGar1",
  "key19": "2uYLWyJ38ZjHQX2W5YzyrDta5Uq3eWzJ74nJTonfixrxSkeJPPS6rZDzRKfBDsV4UDoJnc3sGAzWkVcsyBoRVw4u",
  "key20": "3vZpnNA6GWmCRX25bcuyUJ4kwSk5R3WFNmuFUkQ3DC2trA5p8wusNq28LLNFmYtgA1ei6ryVgFZvic7uHndKB47X",
  "key21": "2JKCZz7wDxCuYkvrjj1qUiRxZyxbEpApjsmeijf3KNNXbjVuZXFsNikzLZdeLZeujAZ3vAqC2ejHG1yhyZBi6sSW",
  "key22": "5GmnapJUmH8RJgHKpMwMjeJi959HrvMovypUGjGWbQfQKTFqoSKjLwYixPEUzMpHwnWgNLzkgiynfsCWxb36Mx2Z",
  "key23": "2mkkzpZsXout3ifeVEd1EVpeP8hNzxkoZKf8iPT6zkRTdT6DDyCtjmPpyxdLuV6hPAo5dDovYqf4m2ugWcjsBX2L",
  "key24": "5f6zc73F5UxVZygKeDSAuSsV25ZFRoUSFdNj1E1JDiAnS84n62Zi69G7xccYhc97GMqvgjEQV6qyG1AJZkCdNCC5",
  "key25": "31uPop64q67R34YunHMgAcyeY9tUobcfQPXTKuhhnDqUwg3qUdC6U9VH4aptuAo5nXUshtowJSe5DhBwdKYSM7bS",
  "key26": "QCngitHdMasfzGMeS5sJCjgTd5Vm5QGPzRnVCfme3KesDx2ZjZnxbobQ3fgcSrEhWBghH27cTLtdpQ3nPXiXFtS",
  "key27": "4JXxD2TjfdyyMw2rNRQkEdFHXdNqmM7HZVMmbjgL4UDQKuHhWrAXuTM4ErfDR7oFZ1mGy9JNZmKANFThjZ88p77E",
  "key28": "5QngECHt8x7mvENscfGRfBjRYarpKvTTWD4oMvbnnx9uKmcxi6eQZz4BLvMAcJTw7iBnWEc79ZFWsgdHNNZoqUAT",
  "key29": "4AXGqAjYvzDt4EC1krEmsJkthu8EtGgh9VrNtry6MbQxkFTyqhzx7Y7qGnoQpdA14fLpEg92b73n9gYFymD6rvu4",
  "key30": "FSsdWhPGi3RugyKEyRHrD1jZLDDxW3fFLibVddkn8nvwPGeaTaP6bCg9ymMeRrfRocYz8SEnaT8pmyeQS8ZCWkS",
  "key31": "63sa5fWMoAeUb1zRs9Xhqho52x88B6QZEwyJnxhtXGQ4gF1AyELzvjBJ12JMRbBNXrvbUitJPP1k9WLBgc1NeKd8",
  "key32": "4o7XF1WeGkDdkjUw4FnozoCHVmZpb9suYyVJUKbMdgLrdeK8sihsMkoMpyj5LuzdoKC7MRoRqkjHmFctjhehBwWg",
  "key33": "66wAEN6zWL5C5sfSCWXh8LSMmoH6SyjN1c7mNUJvQehciXvpWowk8KqyHu5rbFZSbiEV3mUUwGm4XVCCYZm2U6Nn",
  "key34": "3jwNPxiBq27uR72UVtummkcWM8E1vu3hPgJXfiqFqFcWPKK9vQ2LbndhcHjUg4T8y3ZcxfXwvQn3U58vjwtkPp7F",
  "key35": "2y6S4bMviEDVQGkjs982MAH7KjuXsX51EChnmUAYPYhh7f6KZzjY4JB25M9aoj3wXpZWEGaESPCRvKU8zq6CSUJa",
  "key36": "4ksk4uuafFFVFks5hex7jGaVBSxVJHdw2yhnaV26XvsmpuedrAKQjvCbSd5t7rSacqM4eE1DizEPmkhXP6N4xK2y",
  "key37": "2oEhxewTY4YGbrUtbVC5jJfbBtnkjNV5u6eHVdxr3cTasavCGjw92A9ywtSveKwm6XnHhE1poa8xVjQQQEZPejdg",
  "key38": "nQc2NJxUQTtiXPoqXLDfyqmWsTmhpJbahFVp591UGq9RtwiPA69RTGZNojhpdLcwqZjCMSsfKzNUrWmUP24JUaX",
  "key39": "3Cn6hTy4hyr1vAgcpXXs9jFjAY4im2RjbRLAVfCWUJ3MDujViRyA56C9JtVnJV24qP6hKc3TiohP5xqeSV9xg7om"
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
