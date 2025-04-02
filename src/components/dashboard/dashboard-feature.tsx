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
    "4cn3GcxDJvGVtL7sCGPnYpKQmJrM17L1Hfp4QNjn956amiDU9DbHpDJwkhaPB1UnqSMP2zy64W4zrarW5YcxqhXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4aMnSX46ovZRRuArextzpaXUFBC8JbUgJwSQE9SmKBPxehHkcc3u3FFYfkaKayDJwBq6CysyrzTgJkTe6dUBNZ",
  "key1": "29wp1AmWEzFBp8eXRui5PYZgmovZDHJjkztFKfAHepG6HgNbh4b6vExbM5xcWBJHLa6m86jJkToWeb81o7m3f7ki",
  "key2": "41Ht9RDvSoRgCcJpuxq7RNUkSh6b7EgezHegiJzoyq4UcGQdVynNro8MLHfzSxjVFnfQSBPhyBgGgjCeYRMNRzYC",
  "key3": "616Azpduzcj4HCU6D73zRE5QwhgBZL19vF4Qysyd6rFHnnDc9N7PReJE7xXP52qaypDdzQSph4UNukhYVUGH4DbK",
  "key4": "33Svque4r1waFrj1oqCoJijeTLmAxb1mdUVWGgQrbZ9usXV7Z79bcu1vX6ARKHvvhp18UiGmgjByovNsdPpeMr7G",
  "key5": "41RreVH17CTM63Yn9VNFPCbqcAcyA1xyNAx8EHsBsJ4kBhGnNx31z7rY7UAhE2cEnE8ii2P7niGAqisSzRSYRmWs",
  "key6": "5JQGnPTGNWGxmb7ryFJxCeovbMHPVuqGkL6dRX5G2wGTktEjTC3nHVJYBkv5SwMCHT34qyVaRPdpVEw5WXmMFoXW",
  "key7": "M7Vf43LzDKis47q4UWzfFhNneZdanqwn624UcJTN87YrKnS9A9EpMzitq9U14cRQMJ42jixDbsK2BXF6ES8rXfh",
  "key8": "3MnsHsWRW2Kinh2a7cvSzpewsesvYfcJxjdnzKs8a2P788Lgzy8sjrc6CtGYq3yq3u4iwiQn3grC34fdQg2c18P5",
  "key9": "3N7N241YSMFUnuWDDj91sypadjfzUaM4cCn1MGXQ9wCUL16epit8SqpayZz8dnXAGuGVMXyw5tsHQgtJrLaG1N9p",
  "key10": "2LX7yFWmmh4exv4i1DxksqB45eWbiZxNnrH3KTvdmHxccwyDCF5zFN5oc6HgqJquwySZJyMCnAzLbavpikdZkjXz",
  "key11": "5bZNJKipzKRBtXYoJYt3PjdUD5Khj3qY4qs6mLmudLo4C2qK5mW1A5x9NuyJhfLNnUVD3yconjosxrXtzNZkQ1ep",
  "key12": "2GMWgnPgurfQxmV63FikyEcCUWzLskkk7Leq593t5djm9ne99P7RW1uM1Ru9DU3XGTKUVTRNTkZdL7p2hwDAM67J",
  "key13": "wkSa6eNA6Pbm1prGzemBAsPjAJ3RJLnTsxxkvfZYvkm2P3inMd9WnxPzeaibpUcW5L3cmLFdL4CR9SWSpGiYGoe",
  "key14": "3TiNc9quts8LkTUjGFCj6doUP4M9AhiMccp57p9tr1FQ1jD42bwKv5tiufZPhk7xth8DXX5K15DMDrVnp6W7Jk98",
  "key15": "3GrSwFYjS23FKHnUEKCcB1ie5bXGtyCvqQp12N9iEJs4fGGkkscCkF8HTuR6rXfpPBujFhuMszRVieMNuCoiVZvx",
  "key16": "4B9sBpApjwbphrt2opnha3xRHguixKzmUKBKu8m6q9UdCAdWiVRFKYm1AkfJncZWuBHNm7An11RagAaKzjQEh3hf",
  "key17": "5ApHQKty74fzEVPDXwCw7txijEJQC3BprVu737bxp2JqWHevHv9SXBRthrbGXvCSMmihz6CG6rth1VYPdrTCncb7",
  "key18": "27PFchmrqRdC7GkyPjD6Bd46Rxxt34BHpKnLMmkHSBPg6aDNV79WWBNfrKt75e22VYyB6fuky677smUYHBPjbYfU",
  "key19": "2J94vazFAEMzhsd3My3xGniML8iHd2Kz3g5mjux3EJve8vpoT29qZHWGNhbZywznD9HDC63U3MEFzrPF3PVLdB9K",
  "key20": "2n1EZ7VYQa2FQsvMqpq8x9naXjXJA31mSWGnzqUk7Cm5itnn648vnr2WbeSUN38hmyXwDG9LrZhqopHKdePQd35G",
  "key21": "5cL2K5fjaCxwAi6MGbXDw2nwrAMEEzpY3o8F4bUC3bpM4gp4w69SGXR8JypNvSgvEkeiKN5caa3tMpQJHM1rr4xX",
  "key22": "5NMmZ2qLbnAQ487NFkMwqHusrTgdB7XSQh77G9MZG723ABnZ1M8ipDX4ZMHkLvXsYUv1X3uSjA6TakrmuHaSXBT8",
  "key23": "5xHCUAKu2ncBgoHvKxtnJc2Cv7vrSdFvvQjbdNvBauiTJySmfexsrsXuX4KVmQiaNE1K9VcpnZM6qgLGnsLquTCn",
  "key24": "qyykQY4j88snX1TqCNnN9PyMbsMZNVVLuRiiXSvaHXtfn8169upALgGDKjK4Sq7vPuBBzuUXMZkfzigLHvkLCCp",
  "key25": "2YJ2ZdMaXZFSgVCAztZfctXzRVop3Q7Pg7SssGL4mh3Mvgsp2nfySBrqiUZTFy9UEdtJ9CgQq3EKUiQMYdA4nTRo",
  "key26": "3cVNUreA3EraaBV4kp72mMsf2gFGcAtJEaMaT3W4qji9Ad7Rv9ZaJn4VgQxRW4avudLr6jJD3RFv5M5qJdWFDFKS",
  "key27": "4acngMfRL3oCLkzvXtfqR92YeVo2oYLoP7iGcCRpyEb46nhrdHM9ZYJgFpanSpLmZTG5YtvkvMwaeZ86z6g1vK4x",
  "key28": "3x3mtHzXHstavPQvoEm7XDNeYe8cEW5fJftBWEsC3Ejai9iJdXjjs2Z8cM7mGxqEtq2DFyxmyBm3J4kPjfRMgHQ7",
  "key29": "YDCxBKHxekKj9vEQKRq7n5KsLhLDto2cX7M6qYJGJwZzphk6dtMkqy3sxEj4UoPbYuAD7xjHuDoKMFBoyerEfNS",
  "key30": "4hL7MeW9krbngyPUyjf1MDDEUQpXrbhDYzQLnQKAsCEGnYTSuGUJZ7YEe8LekeDp1AtTsYEaFj28EcDGVbFWvLtV",
  "key31": "3bzXDAwzAs7i4WrcLnuULGbjrkw8hLbk2THxHdWmqJd7FFqW9aQQT3mpbfPedbNWXMK2DKu3y1FJzoQFdgDGnfBh",
  "key32": "5x56X6pSUb4hhZV9gjKhBqL46x8ZiXdDKawBYR91wjAVF4a5tqTLLtuh9TFiLJc9PRmWjwpmcRNRqy6dn7pTFW5T",
  "key33": "5ZLKW1zNhYByPFpkL867s9XaQztFp4fFQtXZ5hKrEFiGo3yNAuZMCbiQtRYTBgPPo2wc9iZcKpNUcFTwwMHmd1Ud",
  "key34": "47TpCkzLQz2rHpQKh4UmXe8ViyLvtochexdw1QwYsRmXNo7XXvasMwQ4EbdBrTqYPLCmmaPq6kx7yaPNViv6Raba",
  "key35": "pLNd8wJCRQT8UQqkhjjhCa2hrYcA8VmVqCM8xzbxQh4JcqdRufddoUTPAS1xVz5upRnjPZiyxHGPCMtU9ZqeS1s",
  "key36": "4s6him56q97vM5X7hbmBLvCXhjQFUhSkzUcqFXmjq6mxDkn2xeazTbRjjPCeLUDWoNLwnGU4o6rW2pqcBHhsKFF2",
  "key37": "5u3eW6iTPkf3ZYLhaD9nT16oyyt1UrsjPgpii25YEtR4eijMT5ohU4nCNMKhm3dKnkqDnx4M13vcgRP8fCJpQh8z",
  "key38": "5ujzLLYcWJBjCqiiRP7YGQQJUrsv2sRnHKVo6jSDvgbjka5s3ZMfXvSsqVMWk7hQ7xBF2dANvHPnEM5ANMHTAaFr",
  "key39": "23fkDm5qahRbjeguWed8mj3VLCbdP4oVB46PLTmJvyw7ntQCBig1CAiFXPv6o27d8GgukqbwrT6j865dvFcuiJVJ",
  "key40": "2LCLQT48YFn63UtnwUTPDxXrzNWH1oAa6bwE22ND5WBzbsMxeMEv9iKKh7g9A2KNGmRrNiuKiKPiaRhpZiLjA4rq",
  "key41": "wCyW9nodAfvQpedPdfKnFN26KHfsTCviT4mNN85z8zyPRma96eCT5RmJbVCropM8xyRmQWdXywTJcyAD1uFb4yD",
  "key42": "5LGKWQYenespxmyfGDDUThkfntDn6dDKJ3AL1yjDDV6XbGjo5LVsDCpGTUY3SgAgKRMaRi12akiLFX4FendHUJHJ",
  "key43": "3ERHdNoxazU4cCdrUNX6D6J59XX1LPfekyo86zh1sQPVQ6nwhTBAFyQVV3seuzao4RpmsVVPwkkFTzVwqsFL75V4",
  "key44": "YMxRB4E7S7z4w65Dv18KNYEQPGiuY15WyqjVWESnWL7TSjNDt4tZTbHjxyALoDpmoEVwn4F89tQUxqRphQ6bEXb",
  "key45": "3ZyNQRXGab17cgdDP6xa4tgAhRhf3Ck4uH9jcqkqq6uVeXTM5JDpDF9jXA6gBAhjWYy1P3GVNX3X3TgTCWS5uUDM",
  "key46": "2qACfdZR91VsbbCLTX1gkRaaRmpL7ZobTKkbpBF4w5q62J9UrMmMwvC7M4wWexaWCgi5W7p7oeu4xexUqwZSZkjw",
  "key47": "2GRi3oW8MDefMNjiq7fcbGTp3bZut1kXQZNqtSiNqtz5dSJyp4LnoWXcYLk3sj8zJVySyzMvnGg91Cq439wc1jcG"
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
