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
    "4WfpgfxdySc9x7jSJCDdtrQTo1AMxwRcoSRpQ3MQVViJQCtaZubf9VQFwu5oF3EfLXW1X5TJQRgKwPg6SwYbi54L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywmB95QuTUBSt1SiFTMVvj5NUiarGKfHi2wcBoMd6btvUi4wqHquB1p6Bck4rzBkMV9oZY9uo2WEBQxaKgveBn3",
  "key1": "wKUBRj3QwSoucLcqwp8DHteM6ZosHjjdd6vFmyhoBFUXThMAaFQYsjc2hwJwQbEikdF4ywBEXWpRSUtCShyLFo7",
  "key2": "J25mAF4oxBZDzVVMcU9s3EeVg5jj9eDhDsPpxzrrUTgMZiCZNpL8om47twRzcZpN79fCXKg96RHQTHeC5tz1czd",
  "key3": "5uz5Jp2SPvzJnTWuSdx8MXqbfNf7U7D1xcabrp9LpewTWBa5BSozZGCTbZkDTpnF1FckDhiXXeXHyNp4yCWZ2yFJ",
  "key4": "57WfvinW8VsK4nixsdHNVCoKuxLkA7GDyTk8EhnTMz9dkCMct2XwEFBYdVXGJZ8KmCa71k2RpC1Dxu6Jfn3a5JJm",
  "key5": "W8SuJkQhLZsnNow5ePCeZBNjwzCz9wgumwtgRiMWzbk7fmJgYGkv1du3XPNi8Kb1Xqc6owNj85Fh3dX2W3UXZNv",
  "key6": "ZP5ii85opevBgc5GTww4Csv9npArpzrgFqpNK98xMHxw2r8ckF2jGyuHUYoUVAbQqtZW92wE9CmvNSsMgs8tYY8",
  "key7": "5HCfPpDo3r2sm2SGfvtf33uUAhvDSiPBY9r6q5aygYa6VMpSm5iPU253icYN75urWfCK4vvq7xhUYvwNRbSTPjjQ",
  "key8": "FQBD3ex1iTVVH3jvDUUifTengtzA95ytHT3E3gyci7kJSKfd4i79aWKMdMmrN4rCSP5xZA4wghNPoH8zv16eHcS",
  "key9": "3cyLca8kvakGwiVkv13QKfBF8ke6piTsofD25gEqw5bBnLmKbQeBvW2izxo8MchfZimRg8oBQMtVuhxNj4HBfi9C",
  "key10": "26DcuToXJPzuqwL37NvrRfkHh7moHkQyJ5q8hJBZV4cgoWnneu4uqMLFaFfJajTEfPfyqTXCU3j8E7x6vCwUrbnh",
  "key11": "VPsUSPtXgkUeSPnPFCKaKX8aw6faREuYFC81qHTGkGwAWFahPdak4QUje1GbntdRzKTnLW1XNDirpyK56aFiiox",
  "key12": "FTnTR31HfffW9CpYtkczpaw29FGqWPmfbte4fYS2v3soPQWAEXUQZrKMzEpHvzCKSm9ej5YinTFmNHduWD77aAL",
  "key13": "2cN1DVgKXuXErNFjAtnZvBmDNZ6pbnZB4DG1CgpC8caTdc2SkN8X7hAijDwK8rYUdiHy9J17JSeanm77U9VcPh45",
  "key14": "5fgYuN1pC43LV7FjstdD6TZFBSRP2dxYYYgXm9bxN1T1pDtuxFMQhLPuMjMKMFa1M1i9KSmtwW2KwbJETcaCPWdW",
  "key15": "5iE4wkRHQzVZBVYax12afGx41mGWGEfVprmoFeGSrMZfB7vFfwpWHYS7eUYr7A8CdpeY6rYAAMHVi2dwt4Tvu3U6",
  "key16": "2C2TPbSjbRoNRzGt7kRAyYyH7MK8fCsFpo4aSStf6C1jXAzTgJ4QyYwwCydHb3mNpfg7kbDEJpXkvMBrgjuS7eNe",
  "key17": "3b1gWUQyuhMrmAG2KBjbTU5yxL8if9ximtgT6Y5mKJWdThGxFRhiXs1itE155iXtaBhedEZjxnPYUpi1dJNDNVhh",
  "key18": "64FW7TyYbvdY82C8ZeWKkQkFUSVjcKd6F7w2irY4ZjFvRssoWkSPuK6BUsxTFdorcLAtyXsKKpk72ZFASRa33Nor",
  "key19": "5eUjVi3cVLtbLe3h1D2hzM9cPSQ7Ma9XbbNBFAzeXy5k8GZrbqzggokXLfJkNMD6jfNJh7hiRw7u6jtGmXDkrxqi",
  "key20": "2uAMP2Mbuo9d7Z5XHHF8iGEcjCMdoemQFUvGmEqX4WYrSQ7ELsRot3qUASSv4KmWroE9TJaek53b55NZN66rdQM9",
  "key21": "3339dsSqtCK1EQGqPzbkK9MAECWNYaKSiUVtZ6Cv2fTUbNLJiuwTzCFrUDk6kXy99j8ZR2ZyLFB2ZnwHoodP1voL",
  "key22": "52z6HWvSZa88nzz3KwkSPjZCobHkfunJESBjSzvojRgSd5edWMniimfj2JF6WqgSf7QcvQiammL9XpN8hHCHUh9B",
  "key23": "2ssaRg7LsV9VWPPS6QhoJzU3pG9x2EkpVf7HPtH31AeigVuaYiQoGL27eXnLfMevRPvfKzrmXoM7EMvyfWJmfBot",
  "key24": "47mxtYf95YuSxQ22dD2HxgaqmRRFFrSei3LMw4YWXqyKJtGAj6r7q96Luhws3zTbNAdkadhADGEY2v8PYwWTLbnm",
  "key25": "4hXdwbNbzxLzSBFks35np8ANMCTHShgzip1CoM3smpFnajF1DnXEPVBdxFVn9c9vRTWHrsbzU1aCeBokhxW3fuya",
  "key26": "4qy92iKZZU6PQB6j9zx4p89xQJgEXuP9JpctieanW6GJruw4CQ9fodKW53FwmKuqbnhM4PkKAbNgFVsyDPfFf2hk",
  "key27": "4RbEXGe9Y1LWt42Yupzikq5YopNyBeaygdC1JGjreCJbrbqsgQm6ii4E47nERbYppP3Ewaf8grFYgqjXXvEWk6ot",
  "key28": "41P818ACxiNqzaVUMNWVkntjBaAn4JkuVjkput4NgxMPB5q5PUzeqBwykvSHa2rfc5SB2jwAWv3EDVodDHprn8Na",
  "key29": "2tEEReZSTD9PLceTyNRMnEHnrYGgfM9d6dov3AchmpteopXari2MtnVA8q7QHyS8ABRAnyidtWosPwY5cborngAS",
  "key30": "3p5mnJU5AXMVmiPG87p63xCi8rV3nW3tTCYcvHJiT1UWA7tLBrhyka52amCMno8NoNzg2zsu9qtEuhPwp3Rvtwga",
  "key31": "3fToT5viqAWeMenx8L5Y3v8ngbCi8m3AbJHo2Bnb7bVdj9WaX3b6juJFuG7DoHGSrK5w8fXdqGnQnz7TcfweNY5P",
  "key32": "2YM8W4Y3WK3SsRqkYi5GgTYcqaK9VCxdxTQJxAEnp5uoFdNwykdNdeS2SqT4ZXQ9btNyJwBz872RQSY6tmC1UFcW",
  "key33": "4kbemam92SEU2RcyvmkqjSY74EoGT5FMTg8ktRjEqaLBUFrJG3CTBzPfjTAR7q8NoptuVnRbuWkcuFDkPZ9wp9oR",
  "key34": "nbxi1zCgprMGwkrx1tDk68PzSN56k9obyYXdUTrZBCwbLaytfpEmyDHdUJsdMVL4PgQ4dKs4JJjPZPF5EVXDmb2",
  "key35": "2jmpUFkVCwuCRhMBJveweV14w8X6TfqkqHiksx28t2mLSurrwm6Tcjug1ztGhvwVGKCwFXsUau5umCJ4Dtzsh1aR",
  "key36": "3V8oyEg5GiRwjcimWK2Kgegg3SUkd961Dz6GFT2MNhNBiakaBK7b6Cuaud52WoByTfpzjgzLBTEfbhTedgpiTPvU",
  "key37": "S2FjeaXZcVA4v4P2bdzbsSxkfGpmijZ9ENsBgYWnhx6FpKTA5vo3h2CTyTdrc8kfjqbXqesDGvovmfDD11v4iMn",
  "key38": "3oyNtjbomrt3jN4ZVrNj4GqsBYT6EcW9MrHBSwWhejwn9VYju3aEtw8dP2DH4EeoLSz5MgqXWdj3owQro2J9a3LA",
  "key39": "nWjFY38FGLNFZtV7wnpanZ5JWVVvV5aB2RzrbBsT8YDUJRnbMFERBxXbjScWaxNaRe9EhCktaqcS1BxvL7ZFWYC",
  "key40": "5RGz4qcXYmB1htiCDHetWKD5c9ggDcWdCCDPzXBiBkbyDu7x1Fx1HYtcZPpG3gDK3vnNprrr774kRe4hMcD4yCfY",
  "key41": "2kWVYLnuLGiyjCCUeBtqZPxAHn74KCdaGoMA4KbXm3C7cnxWBpUp1tYmvN6M65A6xW9EbCd1Eume5oNfpfN9ZYTE",
  "key42": "d5fjDsb2iHfUNqkRq65WcwoFkLF3x9DPSV39TnxrygqvTthDBzvPGuJsBC1Sxee7hEw6sRuUDoUaEqhKifszD3f"
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
