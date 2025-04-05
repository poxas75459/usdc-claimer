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
    "AFDrcRYUpaxSCyFxHyJqPpP5duAS7JQjMfqdcoD8iup3k32ufCpGX3dDcPmF5r5DBQha7dxpv3VPXQuN6hTDqqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ME8NFLUSiQi8ooA8VnvbGZ5oGBiVmufFkUdavXsTZe4n4P9qTaYM6jqnEs6sqPswTNUrtR1cHAqkRqB6waCRRnH",
  "key1": "2Vvehfi87zUoKdVJJtAjAcAFdbfXEWsB8MGN2iNEF7xV86y1uzwdYPWCo7kYztu1iPDCWVzZnM1LTYE83g7ACjfc",
  "key2": "5C2X5B7v6pzGeNzU48ey66T6sSKvRWefbCnSnR28VySDUncmKy9TbQWbeTnTssExnTfm8GrrUjKVy8ze2P9EZgeD",
  "key3": "2a7z78bZQotq4UUUy8ctwv9kJ8Si9QYQikywvAPNQfzKN258peMhTq174gb2AqbWAdgoXt6yKR3EGNRvoUbqzS4Q",
  "key4": "4Y5zi4iLWTxatZgBLRBaRATiDkepGArvJHiZ2k31yKbwY5CeuNf2JfhdfLiV67LkLbGHoQWncB9j2qpNaa91sqrh",
  "key5": "59dsZrcsQWzDUErmgvfqMDqKEKomRHyxV63b1ggn6v2f789rqApJvV5CpyLArUvsHaPCLdqt81siH2aJmWE9WWpf",
  "key6": "3mETbMxdJjr9VJXKXotbnSrgitXXrx4EfbYqXVsWcrYgBQKMKDmHjGY12r2pnHVENiJhR1ef9ckpfZ6nMhMhq4Yo",
  "key7": "5XJq9GYYZPMGkmWaW5nj91bPcJFvpENzzKwuAhSE5fCiaXuVg6kuW4fdyRAZDrkkecZP9C5Ar9rVkLFM98DviT7d",
  "key8": "4ifAqEZJrgqAdbKK6xvbAFePWD4QVRQFLRQiJVTcbUGtfsng4L5RV9RHNQeWhedzL48igAZc8qsggtSrxKta4CUA",
  "key9": "3Dk1uKQX6sUUN6obf1aXETKsPviscGFHJnNwyPHBRnSE7y8JrUwT2y2j7p6JQN6ydfVYfdnZpX6PGez7Tdbsj9z3",
  "key10": "ypiUyJyU6KkzbLJZBUZK2oyARXeKJv1vW4DWfbgGVGG4YRNYTnoWPBJ1VatuXmum9ifPXnePJeeYwSF2KegvMMd",
  "key11": "imqz48UyRcMkfXfMSoepXzRvGrxRU6KmG4FuRkcdkRPCAupBr1m1MtsCbd2fVz41Z9KPT4XiV7Sa6f1CNQip9cz",
  "key12": "2uutrxyKAyi3BwMmhHCUGqAti1ND3gENFS3K3oY7jFZyh3MvinerET7XdomCQU2aR8vBRyg5vLwcZHypu7AuELmJ",
  "key13": "49TzsKWFdSGJHVpxRdnhjvAsgyAYsmbCw4nYCt6kPHyp1X4qbWjs62CqXN8kKessSTndYW6yjEMufF3PekvVJ3mt",
  "key14": "5xjQmEaNu9VWLzcFnqMwE1gNbiH8dNQoKPAYcc92EbNkKhaTcesEK3nRJuDD43qy6smLhC2tAXsvvg81vKVgEMMM",
  "key15": "5UYeEgBibELfaer7R5szgNjqmgnDgbRwVFPwp6HAYdXSTEAvPEGxuAcCTB9wFFM2mrjQ7GUoVVGEiKBTJ2fUqMDM",
  "key16": "52SLDNcLGfC9vBQfsTE83SZDjSjysRo4U4riYwXzh865vRGzkt4EWyeapPeDGA5pSFZukyLM2VhRNw5PLX3KT4ht",
  "key17": "Be9hmVsR9abeRm177b4XnJ3QGFwmccY9g6sk5G1E26UndvdN7adLrcHo37Mbc3zahBpr6WkE5zYjkfyHU8fCXMB",
  "key18": "AyKkqecMMcV5ELffVEqPquZbf6fcvGwzJ9M84TYHRyrPL3f81qkHrJQbwYW5zYryqVupEVCHVYuVDDBLstHgARr",
  "key19": "3Ndvd5nFL9mGZXfH4At89ukick6SbrTHELdniZFxi41j9UMy1Yn85rcxrtRCKapZLsozAurKBcarWhdYoFyq5xA9",
  "key20": "2afJ1GWt9ZF66FcupmZMLwHN4kTSCJj9EHccH9aDkQmbmibwtafVqJ5XSRgXKxEL1rEVhT7aWNihhzCKG7E1jCJQ",
  "key21": "36JY23fgj5BXP7ZetKnJjrqbmsoqzw9Ufww6dyNAEGXxgvKaCoqSvwkzaXwidRzWmwt9fQjvKkfkDwVnFJYZttpV",
  "key22": "2D8FFckZpj1H3W5S7xpVKCJn4ZktVXVZZVB8x8486mY44BTZfDML3FzMYyAwMjhKuvzmUFBeQmNi8KEvSHaf7XQv",
  "key23": "5ZmtHqGQBC1MUE7duzTaKm7tJaA12jij6d1mGyit7ouM3pvWDMHX4u19q5xxdwtXrWP63AQsU5z9mmpuYAZkcjTu",
  "key24": "4CjLM4TCALo6CNDpxr2m3JbGvA7CoMdMNhr7GfrKJaE24TK7GSaezoBk7kvVpLwRVHxF9cNTY21jzW1QqmpzY35B",
  "key25": "36VJ8Eeu1CwcKKCweRNo969vRpzZpXpEqacgncQRkCsd418FAitfQonXDihj7QttREFNZ6urpnCc7QpAxY2z7Vkd",
  "key26": "3FstxRyPwdW6WFjkjWDeYAp3cAigkhmQvmK72H3L3SDV2iyrdZErAFoGJNbvknShxYytxigDhbmDihVeKRBzPbtx",
  "key27": "5WDBEW35a3vjhfAtqBRN8WjPTESkdNdQPXM87PZUqda9ajK5vek3eveGHqQFF7yLMoLiHTF8cWgKx67aWw7CFiN6",
  "key28": "JFW6BgwsPVYjmpJLUxCxt88HKuYYKvw6BQxbamyNQt6SZ9vaie5KPBaMhLztuzqynqzUE7fptkShu9BJSqzTiS7",
  "key29": "5JUWZjCnfF1Tiu6B4EZUpvWBMEXcp1qFa6goLStyyxTBGN8n9BUKTH4Eoibgf3swVYgL3NoVWeeG5gf2jevVQ6kd",
  "key30": "35mxawWcuCgLYQdYQgNrGo8hFSEdjYxypRaLqH1cLwxpepUNfwF1HuL7eUnD7MFK3i9ZQ9SrW9iWicGcy7Qq3SHG",
  "key31": "2Q49r3vSLDpEM3QvhSTHwEdkGtJV7E15Th9mFNxcfZJofvJXTbDjGu5i36dmnbkLBs1h6ZJ1bv66gmnpN1AmtonT",
  "key32": "QJ7qG7ckpEzbLJVrNdbEP9C2mqRsTKh5GcwhywDV5uoG6zqwnhkCmBcd2SPRPp1tSX3xqJvhB4mHYjgYgQnzE41",
  "key33": "kHkdxPPtB7VMfVNk7HrYvAusyg6VGUkqGkub92kyx3xXeqAwkxYyk3fuaxEMztfyLugRxQXAtsmMCswMWuxnr2t",
  "key34": "5kfk7onKjaNqWfHizwksrC94EHPi7VcYuVsJfk8tnWHicPXRuZp8xHNkSA35uYRdwfSJt4wchsyVDUTWLA6dLyEA",
  "key35": "4BLkoUQvfac6B18cavu7FtvbNevr7KZQF2yKZw9F4Q6djESvqAHANoRvopEn5LA7patMrYRc3hbWQho3LQRVuvQJ",
  "key36": "5KJzhyVErCQbN8fXpqvxs1dkFuMiu9HHzSrNo5rEXo7G7fQ9LpB9TtXkguZZ8kT71KVCvRbFHfujs9QLBoUmVcoL",
  "key37": "5vkGzFrc4T5WsUKdoYJEaes6KTJzqp4ipePHH6CD79geTitQ5drYuy4t17HrhaLUXo7KNgj5oYdPghtiAmKPVMFY",
  "key38": "SoeoPrBmcDAUPir4NrfKJmadBRYk4BjrB1g53xCCP2bbtfMeJ7KFJCqV2BnDdqLFicmiS3ZXNhFJKaJ3NaqQ4AD",
  "key39": "5ypUbTGwunz1gooRdTb49yZzSbxE8BCZ1JBgCvwpZLJq4LWPXb55JvxHS197RAt8qCY8rbBPjpYSgDXgUd8xD5Q8",
  "key40": "2ATejrQPyaUkKnaKNQBqDRJmm7Zr8PkRD5Fa4kxeDT537EnsupVqpX2tJRSh14EK2Z61Ky18qo58ooBJjTHyNmh9",
  "key41": "3v8BX6cCC2W8g9EMgsPvbeheqie1S8aBTfA8e6H7AmwLAES833vHcCReo219mWJEqRuWbDnMH1darDD1mPZmzNT3",
  "key42": "3Q97v1rZKKAs6cri3qD7LWLR1LUYs3GpS7wBx7E5Z2cKoHuWC1SdRqGja37ozvJqvLQphrNq3HzfxDpnvZM1uhrj",
  "key43": "5jSEkEP9zfX71DYfyHP5AFgPqXxGqH1XBuRg237MWLopqwX8K8GZv7ogfBz2q1eqKe39csrguvLfeEngZgLHFvt8",
  "key44": "UcHmxejGGzHYxje2ottHXGP5B79tdoJASUfqF7wMdTj2PpYJineaWzyXn2DuDVss2kKFSfWMTpc4QX719NrYr85",
  "key45": "4zRmcqd7K1ztZMX9FXSWbWY55sBr1jJuVaDMJsDtBiTZmgH1QPCdXuz4dW2iJBj98terDaq838G3bxa6vgDK8qv2",
  "key46": "3rM4jkwFAhTqYXes9z9wzPRzEJEn8upXqpTPhEXeEt1VmiKaVfafuPVZmo3uy6B2k8Y9ErjR7s2HN75cspUCtHav",
  "key47": "5gd1LoZouKSEtWgEmcYqUuypsUsxHS5PASM3yvtPWKoGbU5XPyzNdX1fgfCaLvaAxd2o9aH7aV3XzXuFzrWHpFoT",
  "key48": "52A1GrzDRP71SX5Fs53zznPzM5zidcXwL8fJfrPCmFgUQn7UstoPKHf2ovWiyzADSBJccwHmTUoPwFyN9jWUGWDY"
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
