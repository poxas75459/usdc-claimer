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
    "3WkCWntTM7RHKs9ZEZxRTPYVKutjmx7kL117GB1oX8TREMLd1vYveUFXVmEURW8YFsRqPjaPjoou6ryAAMJugpHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qp8LQjwSb9KvtvFB6An5PDe5sdLG8WqAtysgXrbGJrP4nbUeG3styCtTnQZnhgKw39yXYKoWGVQjvP3Zj8CTXyq",
  "key1": "s4WjobS5ZtPx3wjFBVLZtAQ2F9sLDkHK7T2A2D5xJGHwAC3VBALp7ZMWMgW7mXTm8JtMMZTCfA1HHzXpGgk37wq",
  "key2": "3uuHQfMWLNbsFXnHeLM1RZ6ppx4kForV7j2CfMVPFDgmu8aKboJzuTyPgg3ANGySSLZstyn1JGXxGRBpTTnP21UQ",
  "key3": "5FXFNhcMiLRSLqRvj2YjaLCKiHyduFv9DQMYP7QZN3XSvWWnKAfjR3qj4gZJfJ2LrMMxJueVG8TGPu84MdN39yjg",
  "key4": "4DusAMAfwAwRxqENZkJ2kaDSMYkHV6p6HsdSzHeZt6tdBgUauuVh1hRrhRnwmkFcrgAzu8ZMYRkKXGbyPxp3TZxB",
  "key5": "5HiHLtcUFmv3THMuaM1x52c3hBuqjysXMmBnxZ8acgEeof3m4zDj1dvL3F9v8hUPK1tYqQDZri5ndcJxY8zXPpqR",
  "key6": "4Mm4i5RojMAE2Qjemf55fJ5HGcmFjs47gSNcQjsLMBp6kGvHQPfZV2oYoJd5GmaTNAVopCzGytg4HbEWJUBejpM3",
  "key7": "61JvLkwDutDqmfEpsbEPzBhuTgBHy1QFLE5kAbVNvWKLMFAQH1SDAPz1YJNob6R43LFP7QaXJ8UomWZ6Mz4WED6Z",
  "key8": "2ePnVMbZQ9GjnPxatnnuS8Fpc4yT12nFSe9YU8SSbcjnUxu5U9YPCc3g7tnbZkLkH6cc9N4VPt7DZFXLB8wfNFT2",
  "key9": "jcwcsTN8H8jsae8Mi2mBaBz7Eg9xtS6rY5nW5dn4J6WSKLxFaMq4jLGUSgLrPMPkG7dr5UvhAmD6JTsRpqg2sbf",
  "key10": "2VfnUgbpPUWctZTyiN2XE967qGoRNxKzVEXdokNb7Uva4Ef8R4jdVeMJER57BeXdwnDuGdXwfmvC33Y3mquB7J4N",
  "key11": "91n2YrQMqbG3rxWn6JqnbxVxq4KNLodehnfXVwS1nDGq6gHCeKVnTuxmD3JyaX47MzdEZsEHEp8gQ5R3UVxChT7",
  "key12": "4UrbNLeT7ofJkgRz5UoZCqj6RdSP4azEvYLgCtUeCsraSpBj7n5k4ds2cAVTcthQULJfSVFZ7Rg52uRNhMxh784R",
  "key13": "f1XnEtqSidJr5ootrSarsYiiHjKJZp7BCwSmQu5VKo2f9ABr84uhZGYEyUCQv2mwUzK9tXywU48WGC6t7EGkD8o",
  "key14": "2Nv93tLuZyjGYpLuHjuMWWGvqUnx8K4isaCKZpSm9pcAVwWKYSrKc9MDnUPCPak2dMY29yKhSf2sHHmT9cqJqjHA",
  "key15": "2gP5nu7bCu9LnAcNc1oLpcQ38qMv8EAvwkXaC9jtKWMFkCXRetS38rYbWPzJVaA8kmUTzZvUEroSZuwpx7XDzVZC",
  "key16": "4UCSTwaTp56rQDwqmBHQCVRiDznzT9py1wYYBTyEmPohmxcEYvGXYjQs8AH686crVAsw1SZXv4qtG19St3p6dYaf",
  "key17": "5GQwL4omurNvi5FcYCm8PnMKL1d3Q3TdFHRi6DbBAP9z7AqBrPQ4j5XpDkRnRb23f36WXRiwCazN1CcJvYzY5FND",
  "key18": "tHXih3prG4kjz4PSnLWdNPzmEQsNX84tU2oKuTXRPYYY3fsgZ8fAUSvShPoGSfCVEoL48BxVgyP6su35tDUryto",
  "key19": "4enTu4pL6dDV3DKoVFNFHcXnaXd64WJBkdJQVovG2KPeNn1XgKqrzeZb4NbhFqx8ZFNMKGFiYDYjcqK8RHEiHmMT",
  "key20": "3kEyL5UK4tVr3gHPQXqe29Vqk4s8MZMJq5J6mYwvhFoiM7wMBp5cLfyqgdDkTYyWWXxqLPChQpPZhwJ5CZrLzcmw",
  "key21": "3CLnJ4o1NXW1WbE5o9CZztqPmJ9nkqYL7MYKWZUyA5xjqFJvKSkowsa1uFz8qo6nB7wsvCMrVMgT91fGUwgySScL",
  "key22": "3z56aXNieBdvooDYFauYCz2dGHgqXFhPAyTWVe2besMsY7NAcXG23XUkmRnu32QeC6sGeTDfr96oU5683zePsED2",
  "key23": "47QjWKkDefn9WF5iPQiyjqrdrYxnhW2Y9WFdeFBtFQCHZCdY1DikZ7dicqQHW2CeGmunCZjwSFwJMR6MaGyKTJdP",
  "key24": "3GxfdycrmtMfquUVsRSgtiVM1DXCfEJmQX2Ax6Jt2Yjdm98xReKfHxEbJQ9LrpuaJQ1bE2KrYn3VVxGQTiJy6XXa",
  "key25": "59u9GyTxaFgppsokvG4bky6E4hhw8N1muuAnbrRCPj2P3dGuiecJRJrrJCYWz1o85Bwr7JfZF6Pjn3ghrbmXdxhA",
  "key26": "3D3VTwXDSuWTeL8jXfgttrVfwaQtw7Zf6Q7gVEj1gqgetjH7SQDRU2HC2qvoyEggvtiG4uLZTuYAQvFzmZdsvojr",
  "key27": "L36bjNxfuwQtEDjg2MiBuVCg8z8wovCvkyMwXbYM89bMzkmDLpAocyZCE27V5FQRvhE6QxYAcEW8cXDfUaXhxB9",
  "key28": "3QA8UwHJSFqoHyc8QGiq2pxceD2dhszBKxKoPTVVCQeN1wn1TEkF99ndbwK985pcyKWcqgARjnZFof4fK57qrG6E",
  "key29": "3jbCozSggRLkt5aaZfHSGvcXQ8nSLEQmWycpsxexnebG32vQJBoMufQbwXRmbX1qEeuAhVkDw89A9SAkx2xBapQN",
  "key30": "zZjq2ZLapfRuriUrhjEGyFE2W7ptwVYxVqFTqKWSpXTKLKZ3ZzHqdQPSWiRkYAgZzhPtWqk47esUZ9J5gaXa7pe",
  "key31": "7DH41HKj5588uXpRofvTJqb8QRsd5j7GLvuTuaAkVLzjBUnhRCqPfmUhPbEG2DsTs5nttJWuow7A6DLzzqptV19",
  "key32": "zif7x32eiDV4QbAQn1murwiihPh8MrBFEK3tHsQH6UfXA1i6trsxnWQTYadL1p31jEKFaf5tUsHVqxgwTENHstM",
  "key33": "2eAho8nGF58WVd6kLa2WcxaKEQPnhJQ6stWUfhar9RYjHE74GginXo2SMr4qckdTwqBBuRbwyiCYAQrEhFt62XmU",
  "key34": "4Hs9seNwKnafuQMyPVQKA73oB6hpqBbfqy7TQSrtuMGgJqNQo3zNAZxoMikrM8mTqsT8hKzGy5sNsaQ8LyV9Nj3D",
  "key35": "yTfXrfKpYyRBahKUcLfzaXDATAjw5ve3s1ge1JfVzQnWMiRbccjLopzrR6X1oMPfMBK6sNGhdNMHfSYBkrbC9UD",
  "key36": "2DsNHKYc9Qf9dafgd2hKqz3h6FZJw41u8xjq2kUDyecsbfmghKe2zG1RNQe7srpmTEKugAn4AYN4Ayn9PDewFVyV",
  "key37": "F8KUFnDkZbaSBc7EZzoRWdu2uN1ZUVnMnyND7JC9C1ofFQnBE4BCQd6M4o4vDun8qmaaB94PEGt5QwnJeLhsM53",
  "key38": "5XCTxdzJvsRFxczJZHS5YdmhJjndn2RUVitfsVyrfSKbhRyoQSYsij7hNwaP1e2jCUuCniwKMmxr1fBXv3pCvRXV",
  "key39": "WGwzmk85HN9GWHKjdzBm3XtuZJSzmv32hrHHw1Z2ym4NXKJ3uGT9jYE3L9CFCTsuDyWpjQgek1R32ZZBx9iDYnV",
  "key40": "5hzn6omM9UCGF4Wq16CJmkx7ja934pp5vk7cLnAj5nx7CsmbDerCjLp1jCh3HQqhKUpHNFrUShnBMSfTQfsLTMYi",
  "key41": "NTchGQ9CFNifebKRkscX9qCKCFHratsZqTGDBenWe7foAae2KgrF1raoU2hCvtuRzgMGAN1RSspCkAhb7ke5xdV",
  "key42": "51qCgUc7rDfyH5GdxhBhPrRaQPe2T2jj6rhe6eVRtqFuzRmAAzN4BTu7mKKqZVuNy3YxvTg1cnzeaNuY6Y5qtmg5",
  "key43": "AniiDDZm4wsviQ9zP6zmCH8nARsuXPd5q7Q96h9qG4jJ6TmVQVtoBVhyerQtQKkrePFiq5kk94CNniRrDJUohfp"
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
