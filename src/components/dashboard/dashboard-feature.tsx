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
    "Kp67KYRM3fFdrbkraTS53kFhuTA4ph2gM1ATYUW4S4MdxLQa9Ne1LMznyBNV2947MN5Rd2s9nfErip9NNVtrv8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bp8fMUDjehHt5ZtheUWCXKw47aHW6JrNZYBQGRSPtsBfFLfrNF1moj8yYqNAWcJvo37bP8C9t8xSzsLCqw78wCx",
  "key1": "2f5usvZiC22ZR68etQwf84enu3tQLnR8bdBMDpxoerM81wniEi37EroJDck6b3D1VoM5MirFjqri6Z8eSYexBrpt",
  "key2": "5BXF79w6FJMqxjocJWqgGnrJ4b6NKsjWBxb7PotC2rsQYXp9jXnxFaSMkstirXXtyw37H1gdZtUcfm43KLPsMzM1",
  "key3": "Mr9GKwBti7cVKwvJ84wG6wkDjtrGudRr4mHW7PMoihKPZktXcxA18uh4gzvZqnhmuPcBX4RArrCtxYGWRzVe1Wp",
  "key4": "41ADeArfg3ZVvBxfb4dvNSZyYcgFX1EkmtHHhq66mx7BvhiuqHqdHzJggXK8oucNYPR9Pp5DvXUNN9NnzKJeJfr9",
  "key5": "XxKxCUYURVdUbBaS4kHopqkKzxijzPqK1fDqakDzubEUrqHhdcqMKfhXDqamRXGQ1sNxQ1dmc4L3TX7eqR5NfEL",
  "key6": "2uwqn55hy2y17A4ApZ5H73gxyPNboUbWEjxck56ous1FAaDeKSMbcGq5vVgVeoBsyYjoUeqhTu2MyEj2tBXB8iFJ",
  "key7": "4TpmdEHeSvx2nVRNimfRkjMaFmYS2S9JWJyPcRg8QjUzAHhSBJzbWTPkkNpGeYaUZD9AA5shd9Tkm7RnSrEsenWB",
  "key8": "4c5UAdZZezHB6753eu8UpU4Lk1BQQr5zJQUJz2BPmw54XFtZyrEqjuYKLFgzRQHUrqpsinkT2ntcYPoPmHcJ5EKj",
  "key9": "2i3TScEdw86Hi9UkUhyqrYCNvZVfV2Q6yJ9PZgYJH1zgMmKZFyYtf4QdU77ykbJUAYgdPDVQEdT5PRDezixRX3tC",
  "key10": "2RDsnM6GZeVjHf9iA4NDtXijn42uLV75uMHCnuMHxb19bfPFbpbexWhYSJgq3VtdHjsA4aqS5dnHhz7EK9BfqzHt",
  "key11": "56v111qzkrnotM5EofwRtZtNejiDLJzayg1SMxfDEWhNS1EBmtPK8gUdLFo3s3X5KA1MNUxAhUFsFku8wnHov7t9",
  "key12": "AB9mMJBZKXtZs2bY4Nhnuz68HimvDh3u6jbQoWhxCTtAnCze7WUcUqTFeVUapEJp9yczXiJe1DWzJPm1rGjvMp2",
  "key13": "5uyS2HDtj2TN1bxjQf7rWayqwj3pq7y4TmfzkDD1thekEwL3cikmHBXSXQuUNx2zzwHBq8pxEijfAVwPmvfzkU32",
  "key14": "56C36RUbDvfuyM7iuww2cWdXqDVgHaHVkpcTUgVebztebbsCoDCwPVLEtbEtpDeFTAPwGqcdC8V3SZxGqSj8qntu",
  "key15": "4fWMDDim9JSpB3bCZJD7sNUY2PXEE66EgZMXpSz6RDeYa9tjSABofXz3ApDaze3dWxsNiaMARpvXthuz1cysvBm4",
  "key16": "7bqcowtELUy5KD7FZoKKsXZTeHvEVetYDhMpmPYkRKJcHtkBSPcq9KroxsoQQqKyGGPUnfGJgeCdNQuFGmH79bK",
  "key17": "3FSB868HsnqMhzHNZQkzCvZy9p9MEcxrnvbEkWLBZdYsst6SwiZytGMuziUNhJ3QYd2uc1dEAzH6NnnkmscwdRge",
  "key18": "3P6ffgWRq5CzCpT5gpcgHJT2d5Q1nsYzMWz2vF8nqXvaaKSLerpx4SheYxPPmNzHdsyqEsC4WdK9FuQzVgVq5a8x",
  "key19": "2oqvyeaC5tr4bmhCouD4v3hXFsvAufwa82w49jkSBsvErsCDi3L4ozgA8MdQXiSLqNkzMfTnqrHQGxArAAjs3iqa",
  "key20": "66stuwDqkDopJBEQSD8wU45NTMTU1D2XmUfESEe2ZkhedX2d7vYqo5KSKxcP8P42uUChKP3LoauDRwHwYuwtKFAQ",
  "key21": "eK5Tf1csanJoXtXarorVM2Bj3MfAVp6sGviF1aCiiEPSpJKduAtyKPinW8MsuZwZRxYFvLzQZmYjSSwRuZxZvHw",
  "key22": "ZbtMkZodQ1M6K4VdikGzHJ7kgFikk3N4Bw7Xd8EeaaKfG7vCrkcwh9Hjj756qVbk53FjGBaATCqmum16j66sgEF",
  "key23": "hgo4VrPVwoP8Nw1theXQYVJkCfMafNP81uJgnyAPB4UvkJpTgEP69eDB6eDAq4J8Ss7K61GQLrWXJNhEPnQJPZj",
  "key24": "66Zbs7Vp6ajCMbZzRB4TV9epAHfBbA5rHTheCfTUW12UGkiHrtiMfSYBKsYUgAXncyG5GrU2geGPA6zp31BMgKzR",
  "key25": "2PxvTibjE2MykCzCw2EZ6yvpdMLkzC6fZcNJ1eWXSYvrEG6uciCCGvKFTNLEZZKYKxqQXwH7y7c5zav9zoWmL6aA",
  "key26": "67Awsr7t45YbanAJV34Qhb7S9hkCLwKNdFhS89yhCKR336rWYho797zxULqCyrvkR32etWaMxGemTWTc5pDTchmW",
  "key27": "2YuvpTKmbmkCcYd5L1sQSn8EvwhEjtZWzV57TfF1nBsNq2n9E5Dv5UcJmdFr8NhZyAxqN2rZab5tkvRubPXu3c6x",
  "key28": "4icq5UQ2LhMHY8LGn8cKC3ZLVvwfvTpXseDYc33fz4aee5Ry5ZB8KewUeMjhgcTbXFy4KJepLqjbv8bEkBMprqbm",
  "key29": "5tYPhSuKeb4PjwDiTVf9C2Z97aDz3XGLPLU2wWpZnBz8mgh8H6Yvk9ApzXSALNqLfET4SgmqzykmWepczDYdYVPb",
  "key30": "2qmv9og59hBswCeJupC7pHaH9TPyFMbbfSZjV5czogZdHdXJnknv6gsYsVEZsADgQqn1jLTKwfqVMov9wRiUdsLb",
  "key31": "4d1ccTY16EhBks4Pz1HjrbKZjDK3Z9adfBEygr21p5XYdaFxP8j3uFXJML5kqrGiFcogBGJazDUQ9sJrTYfZiZL5",
  "key32": "4CkQHSazGQcusFcuGZYrjQxetxMMSzhrkjvMmJB8SYSd292VfFrwn1D8d6n1XhzyGzJji29KR6igMvUxx37KAsFG",
  "key33": "jVopM91pVMoe2LD4g94gxsJ5CwV9UiLBhwBjjwtSax1kwcrqyahLL8uCJ7wMMjMEg84SD2DvB5FfpGFLMukCYNF",
  "key34": "9Xhim3gfnDZtPMr3p5DucGhmWXx3rdxiWiCdnoHDHtUtdEWG86DsBYk2FfRyaLPzUcr5ZZsiUvJjkmzbbKmF28b",
  "key35": "3BNUcDvf62Ghg34CTyrFNwYXFC7CE1HxsDu4fqn4ziSq1NynWbJ5Gg7UrCaViMm8o3T5ekaP7tg5ritTkrnQnWzr",
  "key36": "3HLhmFssbyksEy9T5LjMTwZ77GDiRMhGR6sfMz2VkXHQttHeit7SjB2k9RFAu79eTzXx9hD1u62LnSVie22aMBdY",
  "key37": "65mDRGD2yoTLPGzX2ydQoMRrKWVoUFagiqEkxRsKvFiUPZtCbz12dfTeQUbUHvwmxmREuaooVtNors4VCHiJGg1a",
  "key38": "2xHi5rbCvjntUBRz4AKykkcAvKdDB9eJswtdYttVvukmziTsdNDEKWiXRbxcxcmVJRSTv5BAaQS3Ezz2mtRMmoh",
  "key39": "3TXRyvAUkRTbnJEKz8TAhdo3YEGeobhUNrXABXC6U5Dx4dF7TFNzxRtoEjkrUg83Dvb8n9Dh7Y6Cf4jpF58rbiMJ",
  "key40": "5xG1tXy589pQcJ9vuiy3uKQri8uL89nHdYjU5aaZpbVbZfqeqzW7YUqgJiGEry1xC6Fhx5E9o9oG6vHNfcsyak5T",
  "key41": "3gRUupxCxj1MY4ZBV2VZ8Z54miqhZVjMC1GnCrgasUAfowWVAfpDXEZtmAmQXLpfVPrLnho3ZDHn5sphFMMa6hup",
  "key42": "3Bi7eZnjT45HgGsx3fnTgnn19kgMh3oSMyxG2ZdHRFfpUfobHahsobuKpJJ2jHVaXH3Pn79aDuDgWtHYRjajqf12",
  "key43": "4uCmfM6LfhEMyDUgatJpuUV6zWcFWRikyMJCNkX74uF8Qn3DT5wqWo2pozXDZaZiac6qBu2C4Qq7Spbbk855ab6t",
  "key44": "4P26xGRbHHiqn9wFv2RQ5Ljze1H5BC3LvGFctnuJKKEk5woC9pWz4VSt5EPMnEqT8DwrNp5QP5uFJwLneGxghCC9",
  "key45": "5UA3KafqA3bAza3MEEQTufFdWPF1dT7WZoU1pZ9ZLSUSApWHRrG2xYbGyemWsYgPSEr3tGhikNA4TgyEAgkqKXjP",
  "key46": "2kTtgen7uysGf6ofbnrB3cG3u8aCUBMNYhHv86ceqgG4ggJ2o1QiqwxthpMZDCkJ78BL3HA54Zwe2PMFpaGBKnGn",
  "key47": "92B29UAERRKbSzkjc4ECVSM9PjdWWpZBPCJ1c8R4ZXKTjUy9RyArDdYQ4yyeHHcUNELhWNyAY7kmALUP2tuS68c"
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
