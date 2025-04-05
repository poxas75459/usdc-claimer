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
    "NKF5wnp5youaUwAc8nPus5Ei1f4syy2ko7ijjTeHcXRcQqkJCXx5sMe5ZxWXnfHtUUb56Uxe67tHygGb1ucoao8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnbvGYwzVdv5ET19cWkCSehfRJc3xFSuhbztSgW6USuoxPp1ssWsLdbEKwrciEyNZNLBgJyWJREX5ycRBjYJgm7",
  "key1": "3whp9epwenHamkeMzvgpY7nVDU5JX8SucuWFHZkhBeVgFCd49qXjd3pdnA9YZVKb3Cqm6iaeBHmCheQ5ey5yHh5G",
  "key2": "65MWjJeoJEe41o9gZXhkmxcqKf59CHiSVQqcpasYFT7FcE3o91Ug52xHHyvKwh497ZAcz98qNWDRUwgKrCzGzBtU",
  "key3": "tu6hh63o6bZu1VcWySnjUqbVgeeqt94QwCZ5EESrjHRxDQEuuUKXjvLVpvGTbsUcRz64MtmWcHJdE8RAP4Las2e",
  "key4": "2xqS75mTEobNbYwDS4zN64CGZBBkRB5NrCKY8Wm2xQoJd9D8ngutXAqmVifCf92pMvgDr9ttRkrxcaHo8eMX4is5",
  "key5": "4ji8E7fxB1RmeQq7ck4apq68XFbDF7qzd3du81UaSd9JcSBU1gVGm9hdP4w5rtTpKmGnDzKPpmkVLLxvcqYLvZR5",
  "key6": "2qGkpLShEvcup5FfcaNYL7bnU1WRDQz1NJ4MTWrdXzaLsZ3YhxhUktJHhhwckRLphhsJbW6WsNRMnS9oxRsK8jBS",
  "key7": "2sTV3hJDWfSp8TGq9zr7vvvM8D6zmkKYXEiLPFbmiyGgTZt9yqXzPZVZ4VxxKNK3f1NNBegxJs1qnHTFqgdYTkEB",
  "key8": "A8aurGUKkQnBT6E5eof9T4hSaH5wPDTiftGgwfpX5xhUenaaxiqok5YPtZH4TXw9is3QXDX4m3XKmFQxa26rEDD",
  "key9": "37T6bwxTaLHJ8f8GoCRsaKaS2hUtjkrELeyB2amHpi3ynrnVEa8j8T6QBAAdBSmn3iPVsdUb59wSYMMTaZidvG51",
  "key10": "2AfELigcEqrxwRAEdSDk6iVHbNbef89QknRWcjmNnEurFinLUmL49ZYrfg4nYQ4c5yEXzXbiPbNDpjRazyptMpvm",
  "key11": "4BPiSvseJeTm2e4L7ycVKBU8LPYSYjA9TSETPQ73Nw3NQbXfnK32bBJu4iiEmVhGJUNXmHiPDAzZ4vSNDwuZHb2s",
  "key12": "5HH86Q2L6V9EnvkierUDqWwQiWsnqVEYBu3SyC1Go4YXZicz7cGjDMLZkPjispMrUpBK5kpKwRfc3W5fXNojoeS7",
  "key13": "oNPvByVxiP7SkNxZudCVocYm2HQ3XEiZANmxjd5RJnfmWKyYZX3YJ3zoebCZFcjTRJUsw64zrcsvU3FkNCQxUiu",
  "key14": "4Vwgu3Jz354iopvit2jwHkajVavnqWFMyUnu31WZNv7sqCz6Cd557B6vt9UAasSdNhwwnQuAp5CCqYXWWcwdTbtq",
  "key15": "3F8xqQKNXxrQff8iZUeGqFoJy37CPpEynDS9JGD2PV1svj5LRtPhqxVCh5H6XDb2wi54uu5ug39LiSb48XzfRtoz",
  "key16": "t7753DBrjNcti7sqkGLbsu2jpFuCjcMmhwvub9GhRCPXXafUthQj4aC6q7BvcsAxg1X8cXQLrio7QRKDjh3ZmLj",
  "key17": "64W79ciC1gfEmFyaNVtJrst5yG8UCyK3bJN3NiVkATrsKjXg4d7hqAvFuFUuEphes44U4ZoDZRpD4u7si7zzxrpm",
  "key18": "3kPjW6sp28pxi7pGYmGEcXHdoK47v3MzSRgzJQErjsCT8titJDoAVZkKRXYKETCR1BysttpH94sdWfJgXZXSu9ks",
  "key19": "4dhrfnnUGTEHe5Dxmhvp3Cx5GZZWBJVSnKk7BmQwhgfBnyBTNkk7zBJDAPCkjUy1yVF1waJTM1mnAwkivBdK1KAj",
  "key20": "24wzkTGBe44y4oQMosMXxqvUqnX1spKdNgGNt5bA3eu3VpsDYBjsWLpEJk9sqkpi2NAtGWJbCPN4tMhmNUQSKt6D",
  "key21": "jqLt3PzdV4ecpGpnuHuiuQEVVwtQiHbHRFMau61wDUHsVd3KLaQateG63NuhdwvdukVGqLbc63euVAfeh62xtBt",
  "key22": "31NYRGuufMiuCLniUqV3NqxPHrexYbFmQM1GPV8RqDXyUWnqyt3d6tRyLz4PRyFCvFjAufut5gAgpPoi1pZiifRA",
  "key23": "3CnpKu7QAGMZE3AYEwMgovSXPvd5aheAnJNBpgPvo1aRG4nu2s1KPBeES1zXcVPPnQrVh3UmA9hEy8pKYtSKaMLb",
  "key24": "4DNeiYYqUGUAu6Y4LXpNdZpPJaLSTXUzXxzQPEDcpYfK6SZoAtzPSwdzhUtSt7BkUkGotiwBVN9YFoYYbcgMoMfz",
  "key25": "2nLsLJxgwoXhytVPoXvWdNPj9A6BnG72uJL2cYLL2CwMxRxWTucMK8zxSAEovgFdqauJqYbmZkahQFobYWVbknUP",
  "key26": "FQS6vjEe3435ZpHMfsKZk4gnhJ7mfSrf1A92VFUQEmNdnsaeKyBdi6igSA2MkN8nZPhSo19VFbinRXuoQDKRfjn",
  "key27": "2t8UDyyXR8Wzu4sn4JYHLfer8sgC139uJrmLsExnMFEx3hgkVpf581yqZd2LewgwhVScTo3Km2VmaRigQtUTQzMq",
  "key28": "4PKXHSzamdfsB9axcgRqAPYJT14SRXVsNrTzD1KiCC6TjccSL9XESyAJV5LdXGvoxj29vMWr6AFyaMB2aQQkPjU8",
  "key29": "322PvdCTPLYScDUKaqxTyyHBdaNauRV6jpU3D2MDPY7jUadhRTtuNebkrzAuz84UKWuV1pQRRVNtEip1zFAGKdy7",
  "key30": "3LHqZLtGcWgyPpdxhnBotDVg1QQ66C44DpJWjjHxe1zt6UwRwWj5GJrLUCR8vHHVi2x47CiGSbLRVQ32BeDoLFJH",
  "key31": "323JaHzDFGwu4dc8yxUUUHgbku88DjKRSHSVvE4fWRZJo8Ymr1NxNGjkS48kWy3isJDZmmnm8puLp5YGz91KQTao",
  "key32": "x17saf7csXZKv84AbfLmGnK1bDavBWd1HS4K1Jvg453CKz3h3XhDS8JbjXyPpPYB5NARimAn6uBbF291xUTcwNe",
  "key33": "pt1UnA12xryBtyACJx8UanJzVahUCrBia9WbVNLw48v8dNU4mrJRNJ6WqwQV5ayGuaTBAmyWjNqNC5hMa9oivnG",
  "key34": "2SncaZAVTn2Nyq6y9LGJ69awLGiMzB8sxgcFZncwXcZjA779WmRkAVmpW7b9Jn4qBrGwtoKAFm3e8DboCj7v7rmb"
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
