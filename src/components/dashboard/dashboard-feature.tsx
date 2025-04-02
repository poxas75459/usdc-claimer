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
    "3atcANjBYnDnxbVdKBqrpkuEh9LLTDesXcYX22xE3mmGza8e3a8xGP6aS1xxiDE9PRn8MKqhrRicCeeiajrNTJss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38kKaw3Ru76QWgvZd9fZSjbVkcqKLev5fAq7ybjaxjvHi4LHpyRdQLgGccB9jrgjiBoz8zSczXGHyWXcp5yThYGd",
  "key1": "4ghHFtvaCa8w3ysftLJdMAyU1je3JtNgaVwE3Y8wtZwrFJXrbhPwiitsTULuknL6ixZfi7uLTw4qMYi6UcroUbN7",
  "key2": "QHARhErcZqK5thuavgWbeTM1LvRutapRrKwVfSj813nnPK7hAb8rFnTt7g4x2iBVzA8ZjeGffvLhoDaav5AcGdp",
  "key3": "4rYpKKLeScLdkPpF3Z4jDgkp67rhL2VNUbfB82NY9h1nK6CVeCMgFXHcGaZacYdoAAuFq2SNcLxbFERsFcGpR9tf",
  "key4": "2Eh4vgQBUBgRx2uw4uw4uvHMsDTLbM4FabyDne7QxGv8y2dj9TfWqfo5cXSQhsun8BKeTRzZyUFvEt1zCCb1Y8yX",
  "key5": "4B8EMydAYguxYZGgWYt32Zczb7hukdknya6vwaFmJ7iv9zb3pf6r6ZTv6D6kBN6suNhenK5gFTd81Nv6WaRZktc7",
  "key6": "2pEANSuzgVQ77urPytRJSyiRpTgHsr8UbjE9iiqW95oez1bATXKkmTYKckWALDoUGjVvC9NLkhSWdXpKNEvENz7V",
  "key7": "2TfNCxwBDoJz7GHGd3ZoeQNU4eRh7SQhnwj2Q6VxLJSQQG64rKPuonmji9AkvEk1QrmkiGUtMzFFSCuvA4DHqQsA",
  "key8": "5Mp6PoQ2tQxKgiBSRYoGFywniY4wpYWuNAKzwxNKCzAN5Xz1L3kv64d8dB7pBx16VmzkHe7YBV6NvhX3a33V4rJu",
  "key9": "3uoNU1quWjgHn8z9ArQKujiYobULAw3agZJAGWbX7FFJfmNyCHmnBGGWUY77WbB4ChJa3KVCeiGz8WHqHZcQfdfp",
  "key10": "5C5BXX71AuQ5Pjabecenhgah56hpk9XoEe3PW1rWqYy1HgGVJJSnmHaATxo7BU3ipdaDooshHfLbeRgheDaaob21",
  "key11": "4kTJpwurHc3GYXAEXBYKE7Fi4cf1CZyN1tzxXhiHVPskMHBdpWmUrC3pAiHE5dBFyWBA5sYr5Zkm8s3LEq3QQECu",
  "key12": "2vWUNAM7ymUDwctG38mouQwPk7nju9vVrb1fVxFoEbdpvzwiFqEty1YDV7SYqficKVooW43Y1DKvoMjd7y4ZHLGz",
  "key13": "3JRtJJCxRG3eZAHdv5LpBJkZdkgTShyWvd6o65t4sM3qm1GaNDoVwGREHR5QQGA5MHJg7LShtefGgiBwHatYHPo",
  "key14": "H52ZssKsboq7kzhHjPv4Jju8RnkDgLC4LZ2UuANxT11B1ziCuiUBuDXpY9W8xpEVczuXQV8QpAG6mEhqZWbqfvz",
  "key15": "ZcSvsvaAimoPhGnwyA21cMnhmLu24riyUzMv3PRuYu8LimbJG2qvB6dQZUczQCJRprocuW3Xfk46QQy384mLjfX",
  "key16": "4mbrtmE4NVdsa9XpZnKri3fa2qz1xQ3S78LQhBu2hViKiGkitb4r8cAgXDcUyYyH4msGeVZDwHDynyUGuufum1aY",
  "key17": "3KoGroA8d59N6ANkui1T4SToXBprfQuaEyhZo2wBqhPqwd2so14h5ZLVP5gvzBvkFLP714WnQL2m9ZZ1iseqpuBN",
  "key18": "ht98VM6ZD5X1K4Vg8K1S2ECj1vQZ6gtKKejnb8RhFY1Lo8gsPtexvrRqJ6xYktSCzavvAUaFAmXehkLf6Mm8WzU",
  "key19": "4SQ1RN34aujXq2tWKiK4JCXc2TyPwrJJjUqP6JKDKDb1ZTiC8UHSgHFiQDEDNQGZkunRoU8JWVfRP4YvTvn8FFjS",
  "key20": "44xhN4nocJzbp9wEn9yBJs5sUqWn4YvKXnicAjVTnBvg2KeKVyiho8gZVmXcFQ7rE8mf4jzzgyxCadtisizCEkXN",
  "key21": "5geSvKVVA3MHdog7P62RwinvWkkBcSxMZEdYhgfCWH7avterAUqsq4h7kFhFvmMENeZGn1B1pnLgLW841aUt8PRJ",
  "key22": "pjSv7HLX56bzdoqEfz5JH5cdGL3BEhTH7b5zxZcUiG6WoznAcMmAPVkCNe1CCMzPDj7diGGXiNK1yeVF2B98SKC",
  "key23": "zgazFGoSrymrAEA2P1ixMeuCZ2W9BLonGth7ecvRT2JYdFgHFdUcXs1SqE2DXVUkxM97k4fRMuPg6RKqkEoeGxW",
  "key24": "5PUbcFLFRbX6oBgitFWSBCbBzqvicVudUStigszi7ZpiEj6jo11kWyKLKrdTNcW8Ap1sqLpDXE2RoBcWmrZxpeKu",
  "key25": "jCLo8G8cKRhxgjU2WTeaKXnpmZq4EhXwxsJX7b4HR3xdbFGYQ5buGQqtMrh7KcKx1nUv6yGZEjeUXJkWh6EPvkH",
  "key26": "5nuuE4cnhCpnFcEJG4FAp1SykDjR3GzPF3CbQAHyoFQfKrdovKHyAevbb1UT6XeX4sBL3ok8gPGLDrf11sc4jwMz",
  "key27": "Vj4P3qk3U8Qc3G5Z4nbxp6xv1iDXUFAKMJGGDzfz6BJdEgf8UZEyQ4ce5LG1mneBLSNzcbco4jVdj6vj3aCuV6W",
  "key28": "vtTr6hYoKFCopR6SyL45zpWbXqKogCTtmxfGtf87kdev9fG94SGVBbxPAjVNAkMU5msM1SyY2FKcC7VPBjdqiUp",
  "key29": "2TazTLT7Q4E4eFUdrbYEa678UgHWfbi559F53zuGS1Sz1cYiLyLpGApscR5K9yvHG9Qp2MCoX5tGgJfXEF8mZQ5Q",
  "key30": "33JXCfdHNTg7GZCJnwGDsbtBkSBqqgsfgCFhC823gx5R1qCKiWTLoirrUwPq5K9mkR3yz6QSfz9j4R9GveccgL37",
  "key31": "2KCLGiFTvrhWztoUkCuKCUdkstQwXT39vH7wTLq2C1kMfiefuDwj56UNKLaFML6mcYJp8WLrcgvproJmGDtgN5Dw",
  "key32": "4ASpVUxrEFws9x36YaKxkt1rxMte4or9QG73bYRwcyPZW3y96gzWG9XYyBNCj9czaGWwrhf2bF3odrPvC1nUXvY8",
  "key33": "5KJKDHWr3gBDm2tmAaWcBcTESUXNpqF1LBie48a5HRGW7ybSFcHaSkLgkEwBHeXvw3N7jV5hoxAjE2c1RZosJV6Z",
  "key34": "2M4LZvXhERZQqH4eX6kRZGPXN6sbLZqatVvFnAepkB2bGzMP5mQSaRcfyM4rekfEKbwUyFWVgXQeqeJ3XLzpxhHw",
  "key35": "d5aqMBPMgpjb7vL8WD8AAXgtRfVmizCTvX5XvUEJpadrEkcQppbDzwCxqG8rtd8TLNxRHczknVkte46r7U4ptKC",
  "key36": "4apFrj37sZBMDJ1hLF3HgYCb34iMY8gyQpG93NBsaKTpQzweHW2hBi2n262CSbUEjuk55HS2SNacGhtYSh3S6gxW",
  "key37": "5erCK88tRdqBEJzuJdVTSFydFNLySeq4njt6vHCJCr5Kh4oKLXTLQjmXwf3Z7rFg85sKWDemEcUt2WdhVsN7CG7f",
  "key38": "3TdoN7f6P6ukjBATdjD82JAoG15Ax1nFfbD78MKyXpWPcwScQN7LQmh5MUhmUdacWiof14Vwc6PxkJRpE4VxfjRk",
  "key39": "4nqqMUj3dAo9XtTfdJDCs1p1NvvVPcgUY4f9p1mGYVV5oq24ZLT9ojdP3cGLAATem4YuM6rWekQvfurRsdcevUyG"
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
