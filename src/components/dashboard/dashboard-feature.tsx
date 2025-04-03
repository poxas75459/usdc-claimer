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
    "35tHUbE5rqRzAAWmJZAG6e7gLDDE9vwffDPSiqYQkchWjZBbuyt254HrfuYoB3QL7gMAbFNUr7e81mqvy59r7f4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ku19qGN77uExD1AsGBLW6XHh9iQAKSxJxJJk3VrjrmVwNP5sVbsKLxh8vrDSA6e7tSJA3RrckStUnMY8eDkTQjS",
  "key1": "5AWMaJPshGm1qvuRp7zVianT8ESP64dU2Tzio9L8w3ifsaRgYyZgDhE5pr2Wtwh8f7iVDk3YuPeyCjX4aRHW41Kc",
  "key2": "38ShcaAVzUhc8kgH1aHCxLn8Y6hu9ponuTRRJcmjrj2TcXcVmBerreMhwZfWGqMnB7ESqDnjFAB2dzeU6mBCgmzQ",
  "key3": "3jGpZ4EcvHsyLwjhV9JySH71Qio2G9skA8kKGqG2tjS4awXW6FrzLfHXvAApLfPSr4LBJYwq66XeZ3hR9PKkyC7n",
  "key4": "2pjj7mH6ii8fDXGGEaZvs5qVK3wvEQZHN8D2bE5mSFKbcoQ5mxqUoqLnk47LYp5ti46aHiywzLJbukkPU9y4VaRA",
  "key5": "pp6K7BhTiqsCtaX3t5Tz8EoRs1izsRZQLntaHpBKndKVw1VwJRBALmq3kqhd26zbxc1iuFSKGYGodMjYX7aDiBh",
  "key6": "3nDVsuP94djcDYNJbF9mHS2JFzmC4huEeS4fSGPk6JS8MUstLnkcuDFwfutzSdQUzWybEAturUzPvxZYkqN2fa6N",
  "key7": "46PFf9dLKeu2ph2oNhMz1vWsLYpQZqZz6W8VvoavFzbzxTM9RXwT9N1B1ryBBTUspLGmi4hRniho6W6oerzXEFLa",
  "key8": "4P2z37NyaXuLQhPimYAdnYoAg2sK9qP5S3UifgmPdt2tjMgVpxNSwVfymKUHCd8Xqza88scLMYBgCHS7nMhrShMF",
  "key9": "2dLpmmvidTZPoh4bdgFoS19VRm34doqELHKcaZPNbYp2Qbd7JpHMp4XUbWMxjGnhVyoivTGFjviYzncdEJmf6gL2",
  "key10": "21yTn9uauwYrwHNMXUCpaxT9uEGfBE6GR4zdMn5ww79SHuwMnT57Mk6GWACWn6G5MNXbt9t1De9wabc8cK3qh8QQ",
  "key11": "qhATrs99gF4FQwcKWYfGwLbp1yMJs2wUsW6NiUj2wGgJwrA2CXTjwigBNq8jUdF4YcjTkZ9XB4uaS59SVButE9V",
  "key12": "3b1whRsibwYWxpiaLfZGgpHmQ9NKPDtQMY3vzFz8L7wQn2ybvf6guca2esZLwpFQc1BPxCXgfuSQQSqN22QgRuiT",
  "key13": "5YbAoErZdUSQbVT2YoNT5YNxHNn1GazJLWDTc7n27EGNWEJooxu7Hrek15FSQHTqdMFamarZbhFjeZjLpD3v2sxm",
  "key14": "4MGzrGZeFRZpppJ8YG3hjN4jmKgmFGufp4rxbjVwptTxWUQ4F72Qv1tmv58aCApK6k1oYhESsEW2v5eN6LcAxhU4",
  "key15": "3NH9AkZM1xVpcf5nxqZR2qhuPH4muLv29kK3KwGEgieaKihWyKXrRGE6pbmxT1P1seEGwxhqsRKEXXih18cbkxyd",
  "key16": "3yj2t7JTZPphgncHeXUUA3xwmZ6mpFZhXBmDJZJSPuSjDHYoc9wBLFKHSHkXtEUNFszVtEYDE17ogAei9C3sYMoj",
  "key17": "5AZkHsnjLiivxwCQkLFCATBSXZkuLS3Ki4LLKWihATRqDjxW9CwUrhzmLY2ZJwtAD2hfEa9Rm7quHfhJjCGjsE94",
  "key18": "2eKHH4zdo5JyxwQAbwhmLnJayQQMwtA4mh7TUz79JQ65fzaDZsxXPU1PUHKq8w5651PnBw2qDfeZYR5JxtAhTsuk",
  "key19": "3fdzoQ2exAGidzgRRXBxTrDJjFSQcceAkvwSsG4XYmT8gNojoerSoneiKmf8mgR4chGY1Ben7vB1sFiDnc1Hiq6P",
  "key20": "5m8fjiyRFb3A4NbXzrTrFBBDQ7pUPKbqfHkkr5oDdA4JQEHAKoMZVRVvFoJeY5C19TBfGCm8GdPFUaqV1PP2pLqJ",
  "key21": "3ckuG24ajfz95hHTfy3e9m44GoNpMtCC3r46hEjFp7mvTgjnfSBoW8kSoBQQrkEQ8auPjNsg3N7NDcRRNBGphRYL",
  "key22": "3UzBospwMu3DjgmdLFim9g7LLsg3VCjhAzoHNPCHJsGSuABSgWk4558cRUQp4yV3iq51Do92pB27Kr6E8SzzdV5t",
  "key23": "3eNUFcbbmExYZW6ZXq816SHAzPQKy9L7DRrj2xTNreesr19iHQ4a7caZy6mmNh4F5c1xAnvzH4KQkzbMNh4F3Dr",
  "key24": "QpA4YtVmQdzgV8UcKQHpmWARad7DMui9KjW9Bj7uELzgmbv1BeU6B5BqSbWn945UkeDarCPkEnM1E97bNpPoG87",
  "key25": "5a1MEYUhJCNG53ZYVV4dVCG7JtPxU4isdL7HnBMKSHVpDDPGrHM5Ma7cbnbh7BPWS7LT5az6Gf2NC1PKFLCLsxQ9",
  "key26": "5Bg9E3NtBUA6r4M2FCGGJqjhdGipR8yvJMPRNZU4RvJTRUnjenexmGRdNnLwA7bDLoErco7ykVDFqzcL1fGZNT2E",
  "key27": "2QsUASituTtYBejazdgQ3PdxpfHvsp2c76e3Smty32do3vzWtCKpEsBn3tgR1Nk8X6BMZtRjzxPJqBnR6HGfRy7z",
  "key28": "4FV7tGtaU9paBHwMGqQJ3FTAzDe6Qi3CEKMhq1L4xxAT37Z4KHwkoyGDPKCKVk2owvRYKPNsUgJMfZTu5fniNDkR",
  "key29": "2pjHihf2C8um4XjBARfTBJCDHfyjaCZ6n4orcYnj4Su4uQhhUn3Kb2ngsZXBCQNXe2Aqa3RmpB694nuimDvotEWV",
  "key30": "4XpRVYR4KZEMkL6vSBHJZWb9B7cRg8EDdLwZwT2znpQ55bNqzxuZS48A2wTz1g68pStNmy3r5hZywP4mke6WUGWN",
  "key31": "3HZX9CLnG4dxNzdkFVKLnD2rSmsQgKtJ2fzpDaiRNCTmPmqEuKSTTQKyPnF2Ryd1FShq7yLfTWNi3KwZwu13dr9Y",
  "key32": "ekNPmo78uEoXdjwHFBye1GeV1BHownczxTPUdaEy3pVVru726vnD7qXdrGkA5UQo7z6xcjLFvSBpQkH4zzEebZ7",
  "key33": "4YueQdaafUs7kkgcwfimdaWXWckyynmxMBqM8DgufBGVwusUFXgULtHjQwntJHRXnB27cWGuqwefRjp5TQ8CkozA",
  "key34": "zrCng7z5YwuqytgnbVfnhTGT5RkyWdcuV3TLGmzuVTSoGTMRN4qhJBCgYqdYaFUGaRpPbi8BBqRxVNwuoLtpukG",
  "key35": "QBg3js5dKnyxXcGwzafbUpgqPXPucSKRRzh5xf7GkvjWtEPHsbCvTgBbfuSS3CG1NMnxxhjPfPhnJPyV8GPeN5J",
  "key36": "3Bbbap46PSH1EJw4ATrxNGcm1rMLtfojt8D1v7ZFBWvD6d8xJXp1PLdeVJLYjmqVzbo3dbuqTRajvYUeLgF9dZjT",
  "key37": "55SUVj36MoUSkeJwsAdo11DbB88uByVcRZAjQNcAHSYT9nDgf3w9kTiTL1mAgiYkLcezvKkFZHiVZcJ9VKzQDYQz",
  "key38": "3GksTqchyYBBttjo2Quyz4CWS9ko1m9yL7rQCQqR2ETu3Ma55jAXQwkyYJHicDugXnFYhYf7vVq4yfoxSCQzFGZi",
  "key39": "2kU7mZBh4YxMdwc9aUPgnUqq81AUzPMwqZd4zxFsoGwbYb1nwn2FtSYPwdVGLrnuRB6REA5s5hi7DjwjpPtG5zFa",
  "key40": "2wfQqTVYwTaKoimr7tBEsgt9bggJ5K3ocAykzb4p3GTctkTNDAAfHti9i9kEatvHQYssxYQ3czYpRY58HaPGeP5Q",
  "key41": "2ScofERXtasnpDztFjsCXL4VxSymFhfjK5i2p1YxmMVRZGWXKdhhV9NUxwRbi3WsSNB8Bp4tdvTS8YSQ7TePStpz",
  "key42": "5k78GpeMipUSqcm46HTNxDMDwRpWMs82H6UADg47mVLtrAdGRgZkS8XMMsCygWLbswPyf8CiNTEYQ2qk1cbQ6Qfu"
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
