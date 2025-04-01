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
    "4U87pZbJAg1DbAUNj7MREd81ScejQdVFSoptBHS8DnsMuRMLGz3FoyZWXp3PvPeDdmrVd3AMfY9J94Kj3CaDJLh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ar8rNmg1GV1GWYuqkBUFJjnS2sZdyGWFNFJiqBjML9ncjSKJF7Ym8RLZ9ahEuLpTr4f6cGsDmEb5kN1kRpKsPLZ",
  "key1": "3NhPERm4ZTn9VPKSz6wo7ivScv7XbP5Rn1RJYeYyp9BFdckSfHnpgEqT6hHsWkyjcb15f4bg47mtWPkZ6sBFFdau",
  "key2": "38pq49UDJX5juzuNZgX72Fa21wMTiw3oiVHzaRHGketnuJnJZV8dGPAQNKsxEvRYzkG4YgJpzU28iR6SRqt6ePcr",
  "key3": "2FurNomLi7f6a15M8FbhmMQkZyfTyFswV1yjaKjm5kC5e3FUhxA7qNqWqgM6kpoTn8jJypQTSVsnjRqNmkmgvte8",
  "key4": "4KZQMwKXBJiDusGzTztpB4K7uRrWzc85UQCxtrbk3MFWCbEhAUF3iMdyEzZUxFr3VjJRPwL71sv3aYA2TXwKWWPa",
  "key5": "29R7VxEGRt27BsJ5tcuCCYzhKNSgkRHbwhV6LZURLzjRn4zBt3wuFM6UkxzUy8krpzAetRnoMNVFcNA6oPQgXWcH",
  "key6": "25cu6rPhNavkytTD8thXRgREEB2h4GA77vMfnfV4y7jPw99ow1neZKXeEsWCVwwaknJsubdEnanZjEcvTTdAa3dF",
  "key7": "2fHZ1218tX8d146tDxxKD4hqTQmQWUzrADxNLSEhd22USjvjZNRrwNXzWB4oWiwyp6W5KmJ8YZxa3fwiX92ch86L",
  "key8": "weUbNVz5pqKiVTWLWyU6zJdeSRYWC28QmX3mUPLSuLFx3fZp8vsjstzPyUJJb2mijvtiwoFFFno6Pf2whgQgfVK",
  "key9": "4t8NDm7UyHdoxmnAwLKdavN7S8y6oTZHyHDoLwiPuMwNu16uca2DAsFfFyWNQtcaVfUD9rxpvofxHksCgr4424Nr",
  "key10": "2PGoK3rc3dsBo5bULNQtAUwTiSGM82dVSZGA4eoCX8DLHQZBaouaEMMK7aUJmLfdGksqHvpfcX81pbh5xfdE11Lb",
  "key11": "4Cn6aFYQHpYAPQn8rgfszTPkLskpBWzmg6koKCuuZWHzycZ6iWou2qJvZfi9asq6SRfD8TupiEJ4uF7XVFnRycLG",
  "key12": "3AUr3hhtgEfA9r2gZP6sZBWU3KSFFEFqjx9fea5RTxaqB2Gz9jbr6UYELazdWugwebutHF4pDfRjXkLh7ZUHJvW",
  "key13": "5uCD5Upgxodr7qMwD8kRZ37pPmNsDxApYxipMrHNxcpLAqc44ujJhkJNnW6WFNb7JYEoBRoSdhvAJy788reAQuZn",
  "key14": "53yEfWfm19TFqxasnjq2BwCBUnu48KE74jqBdsrhh5uTVsgbBqWPcEYFTc1c87sJSb1VKjcBTLYvthMZNK9uofCZ",
  "key15": "2Lw26bUkgnAqKTYj9nYTY5NJFkefCic8gJcMenBaMvN19eeR7VFrTnzBBaDLhCPoRnstvmW7VnPu2eQMRbUgAF25",
  "key16": "bzsHcLgqUtYMhyHHKL6bxNm8wCt89M6FLDUBmUWaZsdT2K98BeZK5eSx7AVjd5ymQkcUCU9z9yYtSrHwQYsfgVX",
  "key17": "4dgqgdB327vQtNAqWfYMQGgcmgJ7udVAnkTbSrYYNKp6fchs1NGMmi2QtKN6PPRUrbzX4CR1cBpqeJfTubL4q18v",
  "key18": "sf2u2eVrFQ1EVbFkDCgtDPFuoTryVSwPfryLxxCHBdUk5DLzWdZyM1goaYKAJRBidWV6PGYe4VBqa1JqQHij1e2",
  "key19": "N2ZNwPNxtor2qjbSFCfFKZfuAQPq9JS1qeEUDo8NdkGgUiPyqxvMS8vHBk4viPn27P54z1cTtUE6HSAwxsCrH5G",
  "key20": "3vrHjmBx33Yqs4W88vhvFapxnGbToDS99K1Vxd2coeyRTuYiE6LWxoWn6SpXfENoSdepkG8PNjVTaBEvdf1T3Woi",
  "key21": "3aGH3jWjueRpj994g3w8eGYdRxS68LcV1FC6Ga7ip3htYQDYMH3H7XcmW1tmRfzxmGnbQgF2ei2j2uTzh3DKj26J",
  "key22": "YCrZzCP9TzEgfovj9rKhqG56BVLCPRQZr5pKezfZXtwZeCwdsb99i5BStUErxTA6scEgESSj1G3NTtNEVRvZeKM",
  "key23": "4pQzwWsuxT8t7gZRKfMqDL7omEn1siprkwpjQUNoRRh5w7hKDAhsnZJmxaTwNimrZY6KcF13G3R9y4pYU7BiJzDC",
  "key24": "4FG54LwNTymizSMXTziiuxmhBVsfpQiNftDs3b3wHPgzynJebePdyrFNQvGy2idiugZ6kp9C4P6qqZELFEsWP78i",
  "key25": "5k58rDFCdnUgh1k1SDnpvdHoX8heb5jVJaGy6efNNmJme87BurAuq9BJPqQoFC3hZwvzWLoeEx51yoPUCty1EgfM",
  "key26": "34yL8xSGaDC7auheyXMKP99VzETegBHxnhyEKFN9z4nUz7969JefiDB8jYLq7KEys8FNgre5sxLPLPDsCvMDdd5w",
  "key27": "2ymDYmJk8uodBpL5jKp12KAqCYSQv12C7hfBqKdXerZGg2U58S6ScFzrpSQo6HqSDhHSehwAc93zwyDu2cH723H8",
  "key28": "XZy14nTftAWEfbkebjckWVNmKRrxEJ8V95akapk9ECQV3tqf5tE15wFt1SjxNxctAN2G8PFFTi4TMAPzhThDKZo",
  "key29": "2DqdNj3TCfHWPfYvJNgZArpKSn6VAdGc8DoVRRn7nhR4W4ZHkrUY7YimTGKW4SRYsksUr8FZfRnTW5f7Uo4Xx5HL",
  "key30": "5CyLYF5kygtWrHdD3dWFiXZ6PerZecbKFiduscznRyzFa3NAdSedom9Lcy3NbEqqhAwxbaWgs7cSWdPkEp1kYdmm",
  "key31": "5vGFU27RPHn4dKQRwtZnea1NxrTcP72FCLj8uGaLVi5S4Ghxj428sLR7DdqLvmtzEMLYRCeD5VQEYfQN5qTwaQB7",
  "key32": "2L8fXP8o8YbqsioZ5zvBvoUVgg77UsARfC66Fc3qf5FQaq2KBYUFK9kxt6oZJm1uvnGSJ8r8u63AMLLe183otuao",
  "key33": "5L9N9zDw2R1URhorhEPqb3nNi8Q9i1HUDCH6wPZFkTLMBpnTUSbkKMCoSoYiT2PpkLeCsuWNw3ykfP8T1j4fP6CB",
  "key34": "mmkvy9nRNx8Mb7vKTjpMYmCqAzoT8gZYEZeU3tLZHNbh86QkQ8KNfgSQtbgf4p2XNWoKujFR6MkSuDnJjFYF4zE",
  "key35": "4RcYwN8sJ6TmyTs6rZMHPoSuMZxvCdT9DWksHwtVBf1exAQJNdALtAjupYLb191XJp3pRTrSqY6tFs9x1z5oeRNe"
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
