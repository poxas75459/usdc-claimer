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
    "2Yk6EsMdVdEwVyuMGW91vUwzjdsfWxamSez8ZkHJEd5pUQNDvLugEZ84tTTmw4R9ggqAfzVUR8HNeXrYjaLDVgdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKDXCfdSYNrXpZ7E5i6Z8CExH92izHCyB6J1dmnNf2facWpNJjoKqZ5h9FwYiC8QeWD6ZbsTazHPTQyYh7iwqgW",
  "key1": "XSE5pNeUUQYV9rSSZ2YSk9rLoFUztLM4MUGr8cBsz8qyWCiQPxN7hkN44f2F7C4PnVtPbbvcFyE8gB9gDgRr4cW",
  "key2": "3aw5B21DTV6ErgDdnfAeCze6w7NW7NE2iJEExkTg9uUAwLd6iPzeFqWpc3YKtPFh3wafZ8xiLyNJdngfnz7kGSYo",
  "key3": "wxAK1KaiFFTKxKyUVNosHc1HRckYu4MeXuFjXuNsnmXhvRm1p5cpAsK68oB2GKCVsWbXKGHQvM4GMu1oYchEpqK",
  "key4": "MK85hV5G66P5ZnURZC6f9q7BxBzzun7SPAVdzJL8ZJvzBcrYPtq8xCdiEGA72akjRXLmGqy1HmoXTa2GqD8wTac",
  "key5": "58nme4C6bcR47nKFyv94tuxZ9hiDhpxsAA55FWK9PmcDsrdLix4J5L29KoJt5FY2KEMYLFrKckqKjFNLFJcy9onQ",
  "key6": "3L1qGucfa4ehXVjP5PbPTTh6tJxAVmtS3HrwY1jMDYzurbnBDTmdfzPwDApLFSQy5MCLFHjvpfkQ3ApcudWFAE7Q",
  "key7": "4PNEXYrMwBjWPBLqjZPi3GEPuokQu13bnMokcm7HpSDH5stzkXG9KEgVxf5ezzmzMjbj6NhLqYtBoa64xNMcKEHV",
  "key8": "5S4SNsB1eimdKjhCaUMAnBPYAPPnUoarxqHrBdvAPQEyXVyWmbjReYQKP2Yy9SCYvSZqhHKxHUEhZFBH21jXYoMc",
  "key9": "2x9P9oPYZYWNW1sWRBB7usrzm4MF7hWMDrXZwxdvVgpn6CdfXqmcPZu9N19gTQCU8FpoQMQkd7HG1EaZ9gsejpzX",
  "key10": "4ugFpnYKdv7iSDSa2jXBdWEdnhqcTWj7GwyUYBiLLybWfzyzCrVrKNNfAMXQkeVAoZEsiEcft8sUMgsrEW6K1Lkb",
  "key11": "3ydWmb1nesmKjEQU2XYWaRjJ33W57J9GNjrAJi2TrhPdQZp33M9pGLZL3QMjGcPYwPs7bp1wKzxmDb44eSSrBhJ6",
  "key12": "5PA7yM5fkjfJa7f7EEpMotWFWQzc2nxiXoAS1QJyjcwbZ7yg5LbWxgtJyBeg3cmfKJ5NrsViEGRwB4dsAfeo6j97",
  "key13": "5FuKcqdiLHsbFx4tx7izQfmMaJM4bLu2aA6Hy2RWn1inmWQUgvb6bJDiKeHxTXpkMKssBttrxLFettqVqbHZ4ABg",
  "key14": "4eYekuEtDkrRyKohQTMy1xqbHDcCyEuzExXWypHCbqxn8iQ8BQmZHAp8XmkT9RK4FVTc2yKpKZhNigQWAy5tS3KR",
  "key15": "839PTUAT7LT2s9KiSqj3UkrCWzCyr1RmKYFUp2u9pKdXdmtK1WAxiwzhJHtPi7EqjhjBXTNrb9dzuug3TA6fmkv",
  "key16": "4xvLMJCYUcx3pgVgQnMv1PC4qFXzhQLRXUPRii2pQrV3b5H57NkTadugQdfHTLYBKEWwXwBAJGMgD6ga99u4mNoC",
  "key17": "YY4t5Qt6o7NUyVaSjyVSrGyzCrAFXv8Fe99HG9YY1fsZynQmnnCdhPU9dkitpsaMYHsgcsWysQDewpfV9gaJKmy",
  "key18": "Ea9gs4eEtYBYXZNdSYdzeFcthULTFnkHtxetLaMnAJBvKhhRhzANkaSWJdNMhSzW8CZ1RLSFFBTe55UeWpHe7kq",
  "key19": "4iQpHS4BDwsWF6q2biuh7yojk9qmt53V86EF13CUeWgJf7jFERHLS63MjhXDrfarBtsMrR6PDqhyMYTwmddeh23Q",
  "key20": "2VGKDsNoM3zsPZwXtZiwQxDWyuKh1f3KNj5WLCmkLasBjiMaQYutiq3cWwP253uTvKbcLqnWP7H9kQ2qhS7Tu9re",
  "key21": "4pnpH2iwhLVUgEfbuPGrkvFmKtvHBjteQG6qvLUQyQtY3Dn4vBDdsbkcX6MSoPtcmWZaG1Ng2gEGw2bMJ7Qt1Cy5",
  "key22": "2HdzDpyPrt3V1UhSYMwqV7UTJyxiamQyACWtK8hdMAPKPywkmn5yR2mR8AeqyYWBV8Loan7mmszo38MSdk4CruCq",
  "key23": "4w9uygAoiHHB8cEbChYu3SAbYg5BDbrysgtVquLNTXgTcYE8bLJXY5KtZk32ufDqQXrq1QY59CNuNTLETM2sfctJ",
  "key24": "3DhCRasCFJNBHNmW3pnGKCMua56Yc4whn1G9EtkH6pW8dhtfTNgo4Lf8zzGpW25kz1m8FGKPTsj9Bk4Jp6ptJSFH",
  "key25": "7F264DMk9R5Md3aPuPpyhbuxHpyfdv7HwZ19G85QZh6nbCfytzvUm6ivLpjx2c1ZvTVQ2D2Ciw1FjhghQBLEbtX",
  "key26": "rNELBz3D9MCxSMdNnLEMiRC8HJejS1jz8gHSdPmNqYP5qPnUtxQYkjoRiW4LxVfESb1CXQwt3WZMjHA7p9gSfPA",
  "key27": "5C1PHZuTugrtMRpajct46e1jcYx5RzhN6dxATXckmyxyJyvU7oMfPNuNb7288a2wcp1p26SLf5YZtuaRQjz6KyvZ",
  "key28": "2vBvFijT9j7KGqMNmhPuXgCckRiFYEvtkZp5Xt2bMV8AWya49HpGKgG4s2SFuWSW39CwpngHYZWRkKez8tNGmhBB",
  "key29": "ccQgVWUW5AuV1ZHHBKqmfDWtWcKymQZgkzsmtQ8pETNW9g7vaDdtag4mNEG5DTTn5Ej5JWX3pNpqsYkKdbd5dbb",
  "key30": "3c4K8Hz1vA8sdtzMKHeJZsShhAtxnLACVyw6i2NgaWmQVfR7V98rTFWdackebTNBFjud2BQsHKoJe119Qh3huBTk",
  "key31": "xd36LwniSqpaSWGPN4DKkvvzC9GB9N8M1CcVEwRMaXGkpw5QMuv2oC93M3sD8WC1Q89PwBm7doCm9XU1ZpL48g6",
  "key32": "5GFHj27wq5ozd6AE8UMVN3T9o5h3Yg9VR23gjEJedz446Ysy8ygkGU8u1gUSoA7fWipjZPgtYMbNtoswwX6ZCppY",
  "key33": "43W6eujc1BeydkQsLMipq47KsBsEjSSnFUR94M9XAQoE24ooXF9hj98oyx5kJYuLMDZXJDXRiFzZV4EV6h1hDDUh",
  "key34": "E3TaTR92mgQ1FmySiCP7AnaR2WVb8yLSt8pvRnEQLEHzf5y7yEoRaCxtuhQTvZSNioDfEfKBruGuvmPKCSvwVkb",
  "key35": "4gKtERSkHEkTGQN4LThCRVjSB21o9NQ4P1Wr3XziA6EbZ1dsQBe48NqeZ4yi7toWqiaxN11RCXYo4WEcyhBPaAqA",
  "key36": "3wvvkPwpStoYqxNhztMW2MC7VW6RwBUR91rWCYto9crGZGmR9hTQfZkasHcwb4CPQySBa3pNp1kJohHQUVWhAMRR",
  "key37": "5HPEX3GSrWRqUS84Foi1sVaqUS2rFXoWnrs1DmRbW4EL1WLm6UqvggNkECTiXa3swHfiMUH1MyrbnpYHVnBkemFP",
  "key38": "EUH1EGFVvkj7Jbcuo4TshN6QLBaTyT3zwN8qiNgCiyFZ8jbQwzMwdwkhLVB3crK5j3YB3x8LC3j1xoZRZ1yJvFs",
  "key39": "3jw6tceFRvtk86DebjdRrcmLm6kG88SY8eCMo3cMahuoifZaaGEQFBaw3QVXBjrDMnJeduGbNEBm1ibEiAFkhhuS",
  "key40": "64fii5KazQd9pLnpPryYAmTaj2PyibQzKUGkswxHMwnoAFVDUZcWZWKi9ioEaeEc8UzLTzV84Hs5FDKbhbJtsQgv",
  "key41": "2tHpuCbe4GmgpzodwzP19Gq24FRsx2k71W93onu8v81ZGkUXidi5BGCJGRtNYjPkhCt4pcjB1vLPT69mdK6K4vdq",
  "key42": "wEuRHUroLQtvo1o84LrYc2AxZvD94s3EJFzzCNgLGJ59nVXPjTh8Bi8seyYdkiBbNbSPTRmo59ZjeaM6eKBNYYt",
  "key43": "FQjUkpnhiC7y8YkJH4z5nq5QFtoHEtAsLFvcUi7PwTWQf9qhtiF7pxP3YumJAaZTHCEgM42nBR1EXQM5Gm97ALF",
  "key44": "fcZh21WVfqPu9y2e3M4tGmNq9YwLBjifi7miBMtBqfxhxQ6Qej8XwoyFz7pkbSikKR38bKNL5hCRu6ik8M1XCGG",
  "key45": "2gdnNHrG2aBtvDFet92eKuSyybph8JRV78Jg5BRFXu97m9j3o6Ur4sJpPsbbBrSNhhDHtkwDMbjYtF2uokW3mC5a",
  "key46": "5FucwohzLdQZfi432Jn1kiC8hcPhHsJp4Ej2jubmJ93SBgT2JXq7wpfymp7CmzqfDRTzDTDQkBZXdCoWkDLXmMzf",
  "key47": "5DDNzRZMbD7xRA2JneQqH41o9VfaZkH74TUFfAfmcPu6jUYDB9Fettf5VcgVFtYjv1PUK3xrYKQA5dGPAug6JbiY"
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
