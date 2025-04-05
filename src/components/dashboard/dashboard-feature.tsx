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
    "2JHCYyGLZByvL3VybpAn3c8yi9qGeFsBMhQKdkvkzZc6Pejem6g8UEtEiGQ41GRMcj5NXShuESgRmv9bB85GJoc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iA3xKRVCn4atZZ3jtR4pXduHof8HqJ97zyv6eK7bCNXehSomEejA3b4EGCiizS1oYaFy1CcP3GhbaFdvYy6gwX6",
  "key1": "B4vVhkZrSdydvscx13xod5qoCbNjoNAeVhqEZTnPrsZV2YDG6f4fK5HaxpL9nVEHBBJ6SYySV2F1TVXEZoQFB8r",
  "key2": "2Vb8vPL9WNtwAC8W3tNozC4nBc9z4HCaSYk7q6SuhsGW54nBtAXxD2q5wMpy8HFezqmtf5ahFhxUNG4oPgrgA8Rz",
  "key3": "XUR5XWXqEAm3kM2uJTxQwBhag2YWR7F1r85TkcGFs4DbKJQ8wNh6z6Vg1wTwRdfeRqbmrGuvr6y8XJmb4FBKCxy",
  "key4": "4eHnmVnoJnDfNpDVSNZRzszkkeT8NmoqpfuRXkLne4e6yidcTqYpc8HDcNRMJ26qcvZ6X1ZHj9pTD5khJrfwXAEP",
  "key5": "SCPubM8dXnc28rdNU4NJ8h96tiMaPNuHojqeh841TbVU3EFRwXo8TGgpS1mRFd7gk85pxkSG4azKAzRiEsXCnQi",
  "key6": "25UYpfHdQkw9Au75MRTCqM3xj5xMfxV9rPHPwikvMVSDssRmwL6hC4XT35prjhkm7fqNurpnK9dpUoMmFEuNkLPk",
  "key7": "3eVgnUZg72HVYWhKmmiU1MNZszx51tT45uc1EWd2DGVQXvv3cb8q8DkcZVNuLdB75fBtxFweETMkpk3eRqPqGbVM",
  "key8": "88G7eXqgdcEWCHz7RYzpZqbvuS6Q1Ai35XNoxzyjhGczqGG53RvA2u7wyP9CGj4zLkspX5k5CPNWBRUuSpMEXyn",
  "key9": "494kJvnni2sMx46XebR6zSWVbBqLY1hQGJjRpWo8VBtknm7xay1KEAJEpaVrvxP1rCzbiGdRBLARB2Y7FFAgcuWx",
  "key10": "2Jzch11LQe6iuJ4qtyPXdi5kAsRhVYU72xTp655Dxc2ajrFuDuHQJUJtECusFxrWg9iuX2erks7NCfXjtaZUpbT",
  "key11": "4ia5SBwMkGXenFn17qSXbztRDNqHbZj7ma8XWMqtkZkDHacQ9pqRV3uJ1BEVSYw4MSpZCfWW4fMgJCf3v3hzJKFd",
  "key12": "5LjbBiBh6tZUGk3hXhaKbRtXMi5qfjGdLyCqUxctC28cvNUZ6tjRKERgAqQKTf87C8pk69FtjF6QQncp3zWKmwMY",
  "key13": "43jPCGi3JaPmXwNuokJB9igEdFXNMTHq9Z3oGRs8aHX9E5yqaaLxn96pvrU2DUnJpK6dEeSM7C7mvfQ5qERVTaJb",
  "key14": "5uV7xVuTmKRY7dCVFRiaUYvYMxFZv8rmwV1HAjcrjVebYmMP8Uv9fYY59gAoYqdBuKfbcmRyA5zN5y3ZfRPLWE5s",
  "key15": "4QHAiEPRvd652HLeVpnLKtJz4CtKb57Ry9jMg9QG1T36E67e2Nu1aPRYyG2wb6dajjnCkSj3LVgEVGN11QMLg9H7",
  "key16": "55mA6CKowJFG9dujUWnFhZGZ8YNqPJaoLBPK9yGjn1DrQgL5ZKkfKrZRSNa7qbNQxqoXCJ8N1DNM8DYGuyhHmfSj",
  "key17": "4ekbKd5XA9Wh8s5FGdcRduksZgytdGNnPg4uaQFDnGAjzpDaTHtYDNKogBEVpw27LhZXiBA9rR8NwqYqZALDECYa",
  "key18": "C2Y55o3KgMfsdgLGN4fwH6EjSQEUSYR3dL7DsTGMaQoMzSzE5m77pj9pudikAjG3WagSzFbAyzkTzhHpmS985P9",
  "key19": "2XpGUHvJ5EdgJG1ZYj1cgaYt7ZuzCj49TZHGLDDsZry4FaXC56DRLuk1AG5UgA11HytZiRA7aTUVxwioy47L2oqP",
  "key20": "3nedF4XRUSFn4XFjDY3HHi1JcPHyLCsDEnCJpvtYzSyTuagpVifk1Rj6c7kZw1MQyAzcorSnCkw8EkVBQi6Bk6Et",
  "key21": "34473K6H2QDs693zjeRwVWWx928M5ir7znHnD2XVJXQ5mMi2emWocPXUuuuu5YDi6PT69XAiSupahtMNCNHx4aE4",
  "key22": "2mvYgPSmudakwbMu1yLsB1emrtyV1o1iKRo2VxqbsSnaJLk5vpTrBg24cHtXm1sEfW2fA1fgpZhLGei33aVWj6or",
  "key23": "5HPtKuZBQDckkUcAHDnZGvQaT5FEFrzJEH1s1dTa9AutDXBVQnid4ih7DzjCqy1cNhjccDvxqSM53nQF2iKLWguX",
  "key24": "43MhFzSbQQq2pGuCYtTiGS2EHzepARLB12BNFMdnNeEqaT4TMo5bHppNTBTA7ZymKYBZfyooEVdxd6Cnoe7L8N6S",
  "key25": "23ootbNRNc1JQMEUoAD4b7FF1MZb9d9NNkMVZ5znEGoTuMNncEUGAi8unYe6FAVgr6NqCnsgZXbNdyduokQvdaU4",
  "key26": "4eFLiJ1eNJTgv7nacBx12cEMYmevpD3GmUzRTRKEU16egjNXMUBv5Ljrk16o5GhMESeCnK7HLttPcKVz81zJ9g92",
  "key27": "3uctnfue1QmBAs21ZdbxVuZCWJwRwT1nJetnF4TxP3ykKKtP2rfr5WisQsdSgouubjMNHUA2NAcG77jchqzdpoEj",
  "key28": "4DRVmaT2JsVJb6Sjzfz2RarriKWhaXmzuEJGkQyitDsHese7atV2rFyW3UjdHV8b6iTTafWsZsRtDcRndssHMAsB",
  "key29": "cfFf4VND3NhmjgNShxUZQ8QirSwfFyJBy6MpbDAbSkuxrDTm6XdYuyoojYTNyxgW1VozHUjfynKRA8f6cqxp7Gw",
  "key30": "4AXZgPKSWoNQiS15kQ6KasxNFGB6RMAVnM1NtP5zVVbdi8Fe4B6QAwuQzEhHP6FMSGGUgdinPXxWysP9LrqW3m3p",
  "key31": "3Bjx6g9dqzKg5Kmsb411PAuPVwjdELudKcMsysySVuGTs72yAEoDi18K1vL2KntugWEkgxqnyn8PD2sxmeMP5SxC",
  "key32": "4ppMQtNvjJzC4sJf57PW61R6xjV9gokLSvcF4hWX2cV77BVNa2EW5Xvr2YMdqkHJ28jfEGZwtcZtHUBiHLAmuhqo",
  "key33": "4NAcVvKB5PBxqGo2rpUMiQKt2xFM59WeNLw3rgYEFL1xrfoKGQtEquM5GpfFUZ27hjzZpqvCYdGKzDwXThLKYeLr",
  "key34": "5WvckRVLad531rgXmXUce9hLTgd1Pi7YcfqTnmCbSs5dCVqz5sMY5kme4acsGBfFwty3ZnKRECYo8NmuyVLtDp4K",
  "key35": "hnViB4kkTHK2CMEfNZkJh3YkopXMgPGiBfAZCFyi44b7Q166ns4icQew3wiaEp6EcRochNBHacNCQ86RuqTf7jG",
  "key36": "7dYiVrqXsJzCgmj4UDamHQDnsXeVP8gYaBWaKHPRgVwvwSGabvnLkJjYp2K5jCdcsW1X7nLewPzG5J9X2F7FQ11",
  "key37": "5WBvco8TdKcz3wYbHCVJkZrmqmBseqEEyoEwiLuQT72PTXJyDU91E7bBD3yJgiwoKULiUqMdfzA8H4QugWztMEu8",
  "key38": "4p3J78n2XfF7PwVWmy6A9gxNoVucxkuW9zLT11m8NbUsiPkV6bJge2WemFYKUeffW4NTK2D4eiJzXbFNeEzLCD7w",
  "key39": "4ozY7uMcePwW7dbNaQuvXYPDWqD2GxuPWYVHsQtCndStDpu5L8CsYtt12z6y8JVACyJwoT3EAwgFkK3ujEyP2ADw",
  "key40": "4vRz3igj8BNYicbZaibokUfZg6kSdyv1ZGdj26Lx7HDhsRuRMa52XySiSPeCmZtUhUq2nTUxtD2MHdeSVEFgN5rP",
  "key41": "4sp2afdAE79JG47HxWfMFoBcrJ9XYngucFuEZjxArjjg1ZSPansLsFk8P7wN2x15RkwjegA4yje6tjoqPP1qZjSZ",
  "key42": "3TFEG8HPJLaJzc1RsQfJkajeSnaTaCvYBCNVLAgsU6kHounKTGU5XNhsUcQYGkS4z5PrerJ2iVK5r89zhj7WccUj",
  "key43": "4JXAohg2KNce7P47rdVY4KvQg59ztak45ABAGLMkLZeY2NKjnZRkxADKyMoFn1ekvpNCGEVGC8jHo5JgKYRsqpQY",
  "key44": "2QYmK1jB41vhQ4WwGhQews5GAF7VB4dWCKWbMGyc6BYChkjTiNcqwjjs5w9yqNjLZjJ3acxNnRXwCdAp72LAiXPs",
  "key45": "3jeVh9WC7GPZHTbbjpijgi5MoiAWXPPXnmcmUtNz3nLChdw8DWDXoTmd4jg5n9zeV1FV5Kziw5ayuyK98YMXS98G",
  "key46": "3iFQSnrNEmjX7dHKY5WTFURA9HQCPBgFvyx1Ft6gextL4dHze5umKmaCYDkWKomYVZqBHzQXSZxzSHRYzW5Z9nqm",
  "key47": "3BDy2ssf3BEotvtLvQvGiF2MWj1a5R8d9tx6neq2aLDFGXedRp6s1oPPf9i45UQXSzsb9RtBnD8ZQWZVL8JyajEy",
  "key48": "5SjTrLuYXnnFLEcHAUUT9VvScfz5zAvSKhyrAtFmDacmpAvLYGjtaP4qbq3vZx3qi3jvqm3duwbr3DiD8tfK5Npz"
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
