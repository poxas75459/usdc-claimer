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
    "3uU5jbAHfTdreub1WsSmwa1VX5h1awpnX5SZnNciiaahcJEzCWdCQLPDhU35Us1dMWnAbggXHeJVZstscaDj7nWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XzjYpmvDLgbqaeLqn88DdPWSddA2veKgwamJC4DgU4hxLr5ZwtLWJSyV1yAsytExHJMQb6dM19BAuJRudTdY3S3",
  "key1": "51fBXyuNhrV33qZNiTdr3nxEVYpNo3GswYaUu85Z5JVaEMLaNZqF1zna6JmatWu8ij4QT7FQgKp5iwPyKAQBPmrs",
  "key2": "4dJ2vfrFcLTK6uX7jAuNRBf7TvA8HUSZeeLtL9MK2Zaz1ctaxeRnEj6JvZoGDdofJqjG97gQTdkUiRDdHJT8tLk4",
  "key3": "2FEnFMB8fzosPCL1iqkSH8zT3NzjvVE2uqkdnv8XDEZJDA1PRNron3kauoBi49dM7aqAmANQLd9PyJLCLHMvJwbT",
  "key4": "2vejXT6xR1fD6F72p7mQT9dF83LUY6u7tgCLYhZMPe1Vuzrn4Jvff8ZcDVwTKdYCZ2MytAQocYstx9cHWNkusLCT",
  "key5": "2gAcPhXxcg5fqed86bgfodPds4RwrBq8RcDMmoCx37frTs8qZojXwtJ9VPUeVpY821sorA8Bo1cNQjGDpMwKLQnv",
  "key6": "QvnoqJE6dCx1xFfHQ4aFxQu9sjRRjKX1mDdZnMWJ7dV9QnTiM7YWFrWXMnAsJNfHVz59zwWuzGJpaYSCPh3WH2Z",
  "key7": "4RvcizHE1sDXC89dH69XFvUvMJmC7Y169KuLbxCSiVDAUHMLvd96HfCEqksv4qYzfq9EVHcnMNbTohJNspzVyd73",
  "key8": "knZYpKLVXpuEYMwXao3CobHLyt6g7mQF4ju9rxKDofTCShFgjP5qxMWkxrFeiKV2H9MZT4NU4H4Z2F7S6aBCojp",
  "key9": "2thJUfCAZn4fpkpYt3XoFACyUwfaQ22Fbahqbb15jhWxDBRHQDoaP6Avj6cQFLwdLtV6tZDPvTKneKe7zrtzNkGL",
  "key10": "jXyFzbKWnNDDLK4LKMvGLySPQnyStMxGMwZ2h4qwhdd2jBAWjbhDxmX5aY1umRKYq9oK2o3S3uGoLpLZ31Dz7TW",
  "key11": "3gebct23okzPeph1CkCp4fr2rWCMmK1NNY7p8JiaasuniRKrovY242ZBQFrf4whukAcHVdPZ1ZqF9i7kfyUuCux1",
  "key12": "53NMwhDjQkQvq2XKsqznoLh6pCPw6wzQQrPzHMBcmcmYtGuMemfrZpXrzpnnG8X22AJphrZiaQFWDf5gVzwLtZre",
  "key13": "5nHU6A4C4g748iQsZkrTFUygyMwqBD4TjonhmTDDoKrZ5G9TuqjtzoHUPUeAdau3L6E1dfF9RnUWP2dKkyzBVATD",
  "key14": "4HzaB5X3mvoqpvGTq4p3KJPv3WNP8SUrGB4jXMgDJJXwRyApZnAGbdSr5rz6Z6RzxbMc2qQdYJ86mKNPETHRY9cT",
  "key15": "4632SW4wJfCa7r5Ze58xGT72tSheWP3CzfVEFfytuKXHPAea3WsABhoDDXgnzWQXYy7jisU1mZSpVjFeG8WWG5gD",
  "key16": "3V2DzREf3EiDsCKmf5vEdk9Y4eoQn8Wi9eyD73oiL7VrCnuBMUvYCPRtp8EAqmN4viB9ZXyaAYecW5r4F6uTADKv",
  "key17": "GNb7JSTpfojmMk8E5NThRwhh5CaP9DQE1rHCL94tiiVMM5azUEGkUncgnti4TE2dUNXhQ3jy5QmrJTTR9x7tTGN",
  "key18": "4Tf7QmTgrhgUiztox4Wr2cHYexFyWtaW8krpXgeB9UU6jAPbeGazRV6ZaBpwShPepazkFaX17ygRSdVUTpp1jkF8",
  "key19": "4Q6bwE6ZmYD272Z8DPJGjzYFGmQSsTyTsQ4JfohAVi2K4Sk4wQaekyhnLZ88TTSSwdbbre7HxG4rJLPwTKNgFmhW",
  "key20": "3DUaAZnSQQc5QARcbjuk2MVGuxarejvUhAmRZF8922VcL8zMsj3AgpPkEJr2pXL3NHTsbKQUQsC4mvCbkbHzJLCa",
  "key21": "2pCgB7esgLuNK44FdmJyVtm3e4LuiuneTER6nvAR3C2dmaknxt9dbbTR7B2FqJ9BndFLynz9Lv2sRVBR3f3gN6d2",
  "key22": "2DmAjsVxK37oenTftu77DSTF6zimoofjk5osmmMchyeXQYnztqtLpiHVpjoxrrwUgnVwVEy3dMNfzyZTjwq6BAUi",
  "key23": "5sn6g7iBbULi7ppmJMVTD1usAu6Us7GNMFfrVpZeA36oJFpVpiSqLEhxt9ywPUG8SLac54wS7oa2cGDcfwd32Er9",
  "key24": "2MMiJxBgWXDP2AtAsauRDYRc8MqTynd3vn4c3BR8msDMCjw9kxnsSGoXF3zzKJA2MwZph9qq14uQVhQA15BqsB3x",
  "key25": "3HwDaqKYaGUjckcsy1ec6nnuTiuPwfAhdNw6ZoR15sbXwP8McciCtRDivC6r8g2eLhtNgMdkBzZbuqX7pTeoCT5n",
  "key26": "3uj5McCKfVJopcGPbune744x6hiXTcACRxdD4tVoAsGVZN2jFLTDZbWwV5U55GAS7eTbYjo68bcGVW1yMUV4Gtt6",
  "key27": "3qJqiQQ6kBK9Kn2pknede1bZ4RGPRSvp1UYRshmJaMfU62HhsaSMB1snKc2vMq12bJYQRRcff6Yx41BLdneM53hu",
  "key28": "mQbiC8MGBqjBRuY68nutEvJucrAtee5tEikgGax8t5G9QThkkE8AkbPXRgpG6BVs44DPYGf2HzbMgYUS6kbHq7y",
  "key29": "4robKu3794VrTxwhFEGRsQp5gQMCmb828ssES82iRn8tD3neQJNZn9tTNUVVP6rKsC83Dp4YLrD9ck6YCf1MfeBq",
  "key30": "5sG9aWutWgsKHckEVJhbe1ennVqY734LsAqtABF3onYNsVJ8cAYtSjX3n2AWtwmDFhzs9H2uxtfDhXPE5fCStkwW",
  "key31": "3j2qYVTWEa6RVQkorYcb2BofKVHqFZtdRbuYizcaMNKZCHjMpxc6vhxgJR2UyknLj3Z8nRFfa9tY5ujXidhXDmJs",
  "key32": "5M2qWHo7QddoZryjBron9QFQHrBdo4NpDY6Vqpbzi8bBenut1PCYkQB5YJ57r2MaZ1JMKDACAZouZtZJsiBuySGd",
  "key33": "5pNiF1x9RCerrbF4oCHymFGEgoyG3927aZXFnjTzApS84gk2ZexRoT3PXvjaREnQkuKQNGpBsMChb1ZB3sx4tFgp",
  "key34": "4yBdsb5J71Y6pKLx9qLUndvpsPLLWQF43qaSePoXqUnSQv7u62Ed7h7UrjNUtDyDTbozbnHhkV8LJR8omToHAoH6",
  "key35": "3hKkov4Ydq1cEXHUxKVeDYa2RpFLHasSDgdfsimTtpG4vVCo8wCMffNTQxHqmGE4YvgRdua67q826CgYT8ALGfx",
  "key36": "2Z2afgoRXAcepNPKTPkhkbiPGLN4ehsirDqTvdPoXBLktE8ezSokCpwhQDw7ZaGbR5Z3AbFsMy8SPHjWmfzKJ49x",
  "key37": "5YswxswLcuczcoE3shjTJnMqTd4dGiVee6SJMDCnY6QGPgLdoYLGMP2W3dvzudSikBjCmmN1rUJRtTfpJ26gJ4ER",
  "key38": "39AbzVq9t4icYN5YUrQhPME28wcQ2LGxi41AmakBqrSsntAPymqJbso4CuaG5fRjVoLqoQkF79WJ29VtbcH26QJj",
  "key39": "4XVwMzaNyKqtFpMQpPpC4j6FocmRm12DDfhG1kDBfw9s9Uyso4gLWdYhFkZEsSWb4aQoRGx7tb56zM3HKGwaFHkT",
  "key40": "3ZnJiVrnAwUwDVVg1fCKKAjWeRsv946V5W6HXUTFn4Q5Ji1XMH6aLsHToTFSjSJWa4VFtqbz9Tc8SWfjf3sC38C7",
  "key41": "4DJm7kmqprrpfFX4ghWWdenUKn1c4w7pgFEj4BEqhrUHYLNKkLM86tAEHtEcr546i26eUpbqUyAf6VG5Kc6oGyLy",
  "key42": "a8tMrf1xszDZ8WNgkFh8fXyHJQzpPMeY5JAduDfrkGWgEW6LrYQqxYMsQCiKMQgFmtJb5QZMNccnCY46ewjeLHX"
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
