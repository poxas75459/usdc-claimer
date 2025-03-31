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
    "5DrcxVVxqX7nJiCAaKBX87bBECxT76B2i8ZgcS4ABs1q6gUYwHrRJVXQMk9LKweyoEQVPhULWvPdwGQVZXrwYf8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSa34Pj4Yx1xAx4EtkyymDRrAehPbz46B4DyUXKpFh7A7ERwXBjSdne5DzGiftudZ2EN2VVm8B8VwN5n3yU1Ann",
  "key1": "47U54ec3U5fJFiwjmGuD2moZgNk5iuXsHY2xgeVzkH1BA75tzfjqnT1jq2hPqezMiFYfd1JwYfb7eUaJbznX3vXN",
  "key2": "qRkdQEXdHW27SWH4JfGoaA4veSHJrdUKM8ouKFrG9wfqzqGJDZkNJsP5BcyktRcWVALMfMJwY6QwmepYUemBRvF",
  "key3": "3W2dkH2KqmqbNm5Rs4FeoAiC5W71c4aYysAWkmDTKFnP6vMq3KDczzXthprD3XFVeQKLVfMPkmtn4opLGNGRFY42",
  "key4": "m1D8WkASmpaZELDAAELENmfpt5dtgsf6mU8Pa5ZBdtQEj6PtADE4MSvEb4hWySReu75KNmTpPHMeJMEfm5kNP7Q",
  "key5": "5N2p3BX2rTCxhfkqjzF5h9fGm8HtjjWpvgs7UpJccJRbFoapnRJdZ2WpCXicCLG2LpgD8pdF6ptucYC8hgyWJJVZ",
  "key6": "3bJaSLX65K1ywLJgfwVqdCLtySC61BdXFUx2bVfxnxxNJZij1dVX7jjgZLniDHTFvQiiASVGErTEru3mr9vHr3w3",
  "key7": "4b5bVN29SmChzxGJRChUsy5WNZdAiRnzEj4AL5yKvMdLz5k7TmQZJnkvm1xdZVCuowNkJnGaUb5ANZ8p6hCrBSwn",
  "key8": "4YgYfU8cVgavUDFGY2Go4cfiwgGTy1VFE2kDnYpbwUKj9h4ykcASeAn2EC8h4GEmcRytU3sYQc9mHWS4SeNn7Zhy",
  "key9": "5Kba9JWn91asFCtNopHxgMkciQXXiT5B3YAjupLG982UHu2ovHkvEUMcBE1eDpi7d7jDHFZsu6bSgJHbzWLB3VKj",
  "key10": "grbDcZ84uj4Jz7AAbztgvQi458jJkse2GL2b2VH1AceNAbsXga1BKHhoUQiuT3rycoC7GoP132WKxtFtV5L6FSZ",
  "key11": "3Dynjz1vKQr1zdZo49iKbjqdMHrzBu3bJPviUUgKyDcZRFK1mYFW9r28FcjFNr5rzoR88yyRGNsudKnm6yn6aoEB",
  "key12": "46vfWRYhsDuMN2MVRaTvVg9KSC3PxqePS1QUXENK8eoeN4szuarpVzXqsRCrJxj62KQ1YE98iNbd2MNesudp5e1h",
  "key13": "3wdv9LVFXiTgTauS3qaxhWWK7u716t74ykNT26tkMoAJJbp1gyMfbJa67L5mZCFgMGVqGzJNoAAsC87RLoTL243w",
  "key14": "3XWZvFUSN8MwpeJoUrn2MitzSENBr2enpf5pAF3heKLKfUrKrz71tnMQdPembYBCYRMHUQc9uqYsqxQhnyojxV6D",
  "key15": "4wRoG7VLWLGsUk8f9dr9bD7eXJbnyEHNczwoCYYp1koCAAGfrQP9UtviuYL1QXSDxYzZJc82qD6jACVtpneXBbAX",
  "key16": "2rBGfVoR8rg8HAmHBXUViajbxT7EoNUFnYw8fVDzkPHpsWzBpLeyMr2gZX4b1kJZisLb3CxeCtbVU8XxvYGMy3FP",
  "key17": "3W6sPQCaKw2gpcGq8tJjjA6xq9bMdd3rdSRARUzh5htjUAYj7QzHE8wKv5W9hHeXmBwW4LH33rJy4uEodqHNkWFE",
  "key18": "4bpUyajMJChUrR7ogFhee5fmECFFjkHDtvFksEEtG3Rqadjqb7k2RqwkV79mLZjwMKWBKeRZaUG85RnoaZrPejnz",
  "key19": "4WMRPS9SYaRK3DobHCgWCPCmuxbQkweuS1ZXWCMxFVaEQQw821hoPRAt794uV68a34Wh3A78zvToPxtdMXLDCeUT",
  "key20": "2oLfebLRzwYvnbzEDR5KwcNwrRpVfCvaNLGegHgx841W7M9ktTMhHH2Fpmms8fyMzCBMxsJhru6C6LgZdrRgbmTe",
  "key21": "3uFTtfpkUgLwmBTGthB1oL9TMcrvWkA59z86TmAm61u4AkM12DWQH4Jt4a6HXQQwwAWu2SWE7vDvGcPNesJdTXeQ",
  "key22": "3VegWMg1uRq3qvSm6ohwrmTa3t92hfhsoKZwFdj3NtQ1wnCrNVrkesicXVTc92c4VRxAAVcVkA4xJdWjNbLZVn2L",
  "key23": "4nd5QAtJ7G3Rsozae9sT2V3PnRjX1zRPUXzKiHYDteN24qfzE9cpBmzCjLYvxXbs5ERFCtNntnZr4r2xxbTYxje8",
  "key24": "4mbnawLiXr4HTpnMBfsZJERi9Qo3Ro3te3eFNzEjKMfgSwi732CjY1u99EeJsPJipz3jz2ebKZy2nG8oWQzsBjyP",
  "key25": "3jnDhUS2gGvdwzBberExNg3maSC3BRUydSQfheGUwmwmTEgACwSEhAhjKfihZsf9kjaAuiBeJmN7AyZRLWzxnTfN",
  "key26": "4R8DPYBLgyoSHn1QUFVdeCy5ExuPErwyANu9PBhUzYzUd9WHmLFpyMK2U2VwM8765fJ4r3hYaKTrDeKjKyyoZDb7",
  "key27": "4wtyBt5bpGDX3rZYEoE4QFe1VMX11MAksftCv5ZrBa5VY8hA6fmfZgqs8c9iGrcmdbaqbzUkcD5R3eu8ihEPdZ4r",
  "key28": "4BY4QXEXAAKQDAfoJzvkypU7cnoCyzmeZkFwnQmX2V4btdo4bVNrErcGKDV2YNTidaTpCMg1KnKuWk5RthWm8Wr4",
  "key29": "2KVLnmzYQyzFQdQ4nTyU61BryK6DbLZ6azrYGck1aVumMiarebEWKaC2jentAQYTo5eNj6MFdhAbHJih7QTn8qxX",
  "key30": "5iiQyBNK5QfHe3UCEG6KZ26HkgRg3p1hbpgsJKyLqeSgDWiL1dg1zy7xLTFbyyZzp7Mk8A5qvaWsp5Zr8iZQwKpb",
  "key31": "5KR8o4aZJgzQ7MYrUQFVzgQGQiVVHqidKrHYEPjJ5mcsDNE5RdcTuTFDWrWfU1SQCPvvH6ATJBMSnxXTewB5NbPD",
  "key32": "2qUGh5ABsXm9obbwW4Lb36tkQUPa6WSxQzZBpDBmh2wcJ2JxxPc9xcZGc26zUwKrm9wKCxQSfPeFBiVDjXCzh5yG",
  "key33": "2miduYw33SzqFtKnhg1dLgCdwZNZoqXT1tvzNU3bxVtBgFe3YfxkLWqnr4SuHuwnrdDC9DuhfrmjiVqcVSAGrRJP",
  "key34": "5HDfZozQXdQDEYECA353kM4FsqXToz4vWWARhVK2agnZZb1VLdLQ8Gb8HBTn8j7GVRg7C9DBHpgW1j8QZpq27Uux",
  "key35": "5KV2BCZytfgxm9Db2JTgSkiV5xv7VKq1srDk7wCuLYL9XGzV98izFzBrdcWHqm4kJ4MX1PVTcQ4kWEry7CsjWw19",
  "key36": "4wjTEgT5K8EX836u6jX14edm5VQcHLAfFG8zNiPuZ8zhSDH5zP4XndhKWyKA9UFEkggPSRwHzW2JpzTag3mmojMb",
  "key37": "59muwSMCq9MNhG1hWmEXWb2hUMretwssj3Hxd86624Xa87hGHs9BeKAJ891fqntPQjiab3QrB8cnGSkRDuuYM9ab",
  "key38": "2wA9Bu6QYCHaouDUh7XRuigjfurVgkrFQncVQwjxhwLeT8Sedc9uDy88nPw7g5vuy7inAQYuQwusqyavG4VfVz1e",
  "key39": "3rpESK6TJVqFagRcaFQzXuWaf5pU6bn5MAP6wrEJmuva2pbDGAZHvXqgs4qvooFErypbVJV9wXzcc2JZdBvcWL7k",
  "key40": "12kkZwySisxnuekZdrntrWZ4F41jwTAYkGt58VQDTYKEXZmUx9ZPN266jiAtYEUwbzSFugH9GeT5Do2T2Vjd2XF",
  "key41": "5a7ycqBapvDi2RVyBQTJkmyjmUfiKfReWSzpsHjVkTNxHiQCt7p49uX3qJf75oLrh37DgeygZqKM3PCrHZYf3qMV",
  "key42": "4RVA5oeJnGL44CEAUWcGP9GJEHDE7k5Mn2JdSDuCWjuwDheMUFLkgX4Dx1xaKo7U7SsseXTce1uN2Dy99A5qn2kb",
  "key43": "qSg32xdhF688ap3Qry7tNBfex3MPvTZJdctkZKCyMkR9HyypjDVu4fd3829dDhm43aqD4XSsvxHCTYD4xsqjAFX",
  "key44": "2Rsv1hVsn7Vc7spLHAyezghrQGE2kEZE6gUfGMoHhTyAPM7U9EMAitvgQ6qQeeedfSve1Jy4SJYH2nE9D3HRY6A3"
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
