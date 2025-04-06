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
    "zAuTFQnD4qu2r5ShXKRGPmbDg3iez9zFoeKJzRUKhU9dowFoMrL2WsY5SF7kyaoTkPmsymV2TweYZEWA5aqXiv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EiiXXRh19xyKDbDdqEuisknT5sEHzCu2F58DyFPCEHKHN7ht2MdvxFNNEKSf8JinFqArundQjHdrnuxsPRpzv6R",
  "key1": "5HrctLuY87zrcYmhZZEdS41L7MHg6krTjPBEoe4C6WKdsJhKBGVcTxSACBgVGn8JmPaJAJikEeMRLcxaM5iPMmgq",
  "key2": "5CGR8soZjHzuGquMYKxiEKRg4wuqc67wUTBJLT9usBxivXeUgpFcbw6F6Vcka6h7j1dmmk3yYbbpP85qk4DP7Jqg",
  "key3": "46ZKZtcUyPCr5Xxpqk5AuhVQkMhnZ6fcorxWoTFRRhcTeLbCNymub6aYbu2EALkMYoLdf1YvsP1kgaTPgkyaC5hh",
  "key4": "2psWcrrL8FTm32nDEyvnvNiv8yaj5r4QYMYNdCJx4HmtXaEGHbew8fRJHP9UJKWLqBhgXJrJsfD1YGkdS8hwM985",
  "key5": "5AkQZxTAaSyJGjfiPfDsqUALT2sTMGbhschJZLLtV7trYBf3TpD4nAzfGdufPkivZ1UhXwHjieQoDXSiJMRUBERj",
  "key6": "eU36xkXVX4ohScqVbhaqzT2gHUVb9C5CJDZgNgFsAhQzLPHEnL1SYmm1wtDssA5T32iHkQCgcs8M6iy46HsXhNr",
  "key7": "onbfCi72XpwHA3YekQ9pWXgwfYoxTu1niArtJPwkxAoxrVgrR4AHs3ekYPF8y1r7oMpjg3VfF1kuRsnddRyDq2s",
  "key8": "byDwBQrLELtCmtbAJFFF2tptYEXT4hCYF26Nt5CcpiPhLMVBACFMniYe3KxuX1A3ro3xpK14JyPej2KjyQUrYUw",
  "key9": "5NUrmCRwCErLA7YQLDcR6nwer2LT3aFf7dnofpc8fYYeACqvk7aEiRGChC6rq6qtg9LHSQxyc4L8V9iL619FKPGy",
  "key10": "3iAHmQ1msxPwneaAFu7FxvXdnKW8rP6JZCib6iiqhpQZxuf2uRdGkC6ZSJJ9CswJb8w7iFwkdV4TCa71VEVgNrvM",
  "key11": "3x25611UE1cXsGiHPhLSoX2iF9Md8DbrsnCPL51ie9WRQZRpcV19wmUxq5QCqQ8MiwU2kNoa8spXmZ4pNtoJGAPT",
  "key12": "iZjuDBS7YEmk7UNZtLqyr4Tm8zBrYybsyF7ro4Pi4p1vW8XStdwZiFuhhTtmUFoUVLpphVVvrFdAJN4d8eciKfx",
  "key13": "3nBL8FhHukdc9snqvgpDMav6bZDgKZJpknzncN1jDDqB8qz2J4FhziZCopRfX5NMm3yCicFum1CYot5Y1q3rsSxV",
  "key14": "uVAmBGbzWks1ZPrWLTEKDQTXxZrGWED7ckHQumBA9um4D1FKDKEiARaaN9bb7pRemiiZwPY1MLMLhkftB4ZdHci",
  "key15": "2kY9fkAc9775hRpWbW87GAtz3vDhF6DYrwP9BVcJBRd4AYEiH13QNsyHdGB3ooVYoTCWbvqgPBV95fSoGPPWxe5y",
  "key16": "226E8riUjvjscKgKq6RREqTCE9EXLoMzgRmaimj1fz6zwmeCoHBvHGJAyc2mVMy8Da8RFZPFJqdVzjV9KK93WXGP",
  "key17": "3sjZpTbLoZgxYtwYacxs7XwkwGyN7Q483M8hYn5YjBtVEBUYndHz5DSx6wNVXv62DN4xqhZSJzm5aHTiEP1Rb4xV",
  "key18": "5cxpBeo3eTanhS8Ufsjycor8ykqQuf3BxnB3CSasghoMM7obqi3WabZXrqJ5uFfo9wfEhjCKYR6oeQ2GYm5ejLfn",
  "key19": "5EzFTPMfg4TVPtNxXGLiXypiXcXpj3xEX2h7JEFz6eVf6UTWvvmwiqV9Yonw1fHihvDhr7NpuHmhHwS9WJw3n2Sc",
  "key20": "xor2hdpJK5hcDvH39Bv7fNVyVjhcxcZUHXHx6YYwaipXxwdYjPBsKNDp25QyM4VTXKx4k1EqaG49B3msaETGVg5",
  "key21": "3QmGsTgHjk5JFVsd8jqKgMdei1zzc4PjwK2fsT5ojT1o51xVDn7oo9ZQEYv2ETdAVnkV14XmodJEjWzvPVC47SQX",
  "key22": "4sQm2rrmRiLETQ9VC5i6SCfmmYpYsURJ1T5ADE5um4HibcNRHjpTak3RkjxWtCvac2PrEcf7xv4ZxszMgpxEc3nc",
  "key23": "3o8gT5eLyzUYgckJdRyCJ87YkA5QQwqYCAVJsGM28MTG5pCCyeUgoMCc5zeif7bc2bfUNmVPVmixQGmFPtRt8EE2",
  "key24": "2m2b2mMuLo5zCFtZRVUMt1MiqDMWH5TkGUUTs6VQSaQXD2dZ84frKdmuD1apFcbx65dQb1AZdBy9Ymb6LW4Qiw4j",
  "key25": "3g2qqe4bGjDSXX1jW6yEMukn64KTZskrYQPHbnsnLU2hcHKJCyzKmTqqBszKgTDC5yBYuzSdvwNmhUkQXptxTBYP",
  "key26": "2xPzsq8PGqbQyf3cThNRi4rCwSp8yne1YbDNK87diugN94NmCu4AxH4o55ZQeZ4LxUXWNZusDBggZ75XVSE7T7Ap",
  "key27": "4aaa2qcsCCUhRFRnPHiXsU2YTJ7qoRRtmyg55EFEeoxoCTzNw1oFh1eFu3wryrU7tY8yyZigWBMvaSq4hwmynsep",
  "key28": "3NNmoP1pFXJfxHajKtHyE7USCduoffKifKQPHsSqviJMmNCtPq6DhjDvJ6kbJVV69nzngH5wJZuFFhgUxrStYEDc",
  "key29": "oGZfBTF4B54Le1xGhSe48WA3Ei2di9Af3TQh6TWsAfxKB8mkxoANfbY1SonHjyxuHn68LsJTxfQbX7t561Dfvyc",
  "key30": "2f8xbNWYX36aBc6fgQwsvHjsZYv5zJAgFQ2ZGErHqqtBQW7XYfHmeKyGxedsLT8xW3BJeDFuQ3bUFFm5rMVfKKKT",
  "key31": "2ryHZ6pd8KmBxH4mrEE2fS5ZvYa2tcRAX2TptgkQdk2GjZRmp83UuxWBcQchK1w1x5QYCYZthAV93UbSyGKa4F8w",
  "key32": "4wDZoHFbP4VGBpBFmN5kGnp2dmybN8ggXzE9CWXZW8h34SEupFJ6vmD3Lq4STQKEU79fTrLJ13PWbGkQHb8k3y9T",
  "key33": "7Bt3KAHt3m88SnCtbj55K1NFwjniQh3UacQ76wAiFPwfJYbVAGgbcYRKV2ciaVpzFLYCic5AYafnQPHYXtYAGHV",
  "key34": "5rgEHJqNzLneXuZy3UTGoS3eWhpnvVFr27nfNkSz3YcoVWb9mzED9Umf9WLXWR6QUbQ4JhEM3ExvhR8vHtGxG2LH",
  "key35": "5rYcp8H4jJhgjB5EeUdFLBFRq7czU9BmT6U4S8eeefBJvGBeAi7zLMff3XUea4TTSA3yUU8m5PEQ6jQvhtnsfic2",
  "key36": "4LXCnfLHpWYse9BN5RioUoWveKyQa1PxSLb6euyz4GUkpi835cD4Eh9iAdP9sBz9WmL8ABRr7Gg9M2F2Zm4q13Lw",
  "key37": "3vudKf936iMUJrbuaCcU1EE7opo9zYH3yfALto96caJMQQVgLKR1jZhfkmSgMdPTqyrT6dEZWFJ4LXnQ1oUZpkcb",
  "key38": "35m53ydeRHxfcWWJWTxWYFi8ZU1KDPSK2ARQeFY7fNuUfMuWsbtfXtLfkLTUCWKKTMDgA6KokaYicqpjgrgttU2K",
  "key39": "5npv7r4gzPHd8THXayr8YmqEuNGxGFL4pdpwXj7ewSDRG1GT3ivDDKiuuNsVZXEohHvV5XbhDi49yfHPUAEz2ezp"
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
