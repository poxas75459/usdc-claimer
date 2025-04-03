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
    "mAC5XXeGexe5tcBpFAKoqAVFsPah3x5w8Qe7ho9VmhsMSM8L9ANC7KUYhKcNZCHU7mHwpYxhX9PgCZUCUCiqjGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z3hfnPj94RCDTVgg4ZyqyrisLj7rGGMZPegJ356nrzg5e9M43abYRbWCMgw8iW1JqcbuqodVGPhC69Td282VLcF",
  "key1": "5qhKNWBZPsEHhwXGanjL9DQr5VVkVBXBDuTvBTUEC7qRGPwdgaNkycmdih5pPZHfBPj2dJccGVYEbjnHyb2goVFP",
  "key2": "5Aou9gWuSJEc6nv4Y13QvgRWcgEnSnd4FRVkKTr2TRc6JRGAnSpqpzkXEsLSDCFe71EddECGpdVnF8mFAm4XjJya",
  "key3": "5DhMddKuLRaEYZ2oRPz42NXiDfRThwBN2TGGok3ujs3QqqXRvJzLvn6QLtGhWLw8PebBGzwhukFE9EBwWTvAVHDD",
  "key4": "2vmzkLWdfJJDMyQR6KBVD4khbg2rgsoP5xSKqapaZvpp875z87ZnGxuz59qNPJzr6aFdiDtLMuXWWPoRYb9D8sWk",
  "key5": "4LJT6dzQUKCnUiZmtFpkTVowWy2eqNKJ2eFJig2vSTjA8gAbfUGKeXtMLXT4Rs6XZWFmkocHLDHSeU8M4X6wgY5F",
  "key6": "21svZS4Kj1boyKf4FAEyLUBap8WsaA2wPnSEEaBtE5K5nBuTP8uSeMdKRGSvyX9PN7ZnnaHmX3SaJcxA94zmFHQi",
  "key7": "38ZTGkUuXsDnKcAA4iwpFkubF1pGJFRMgG8kfvx9GnrByqvv42dYFqHoSEXFHdcUBxQTZGSQ5oe9P9LGNkFMAiV8",
  "key8": "5N7uJWiScBMAVoPctFx64YJcr1ZE9DDLwpKyA9aUVBeYePQt9hmVadudUN4bEfbPrvVDGpeh4Jzpi5apyDJBY3LM",
  "key9": "29cyC93hpRCLcBkbiMyMKPwzFMdXbJqbkWqYqxuMvBR7nUardjiB389utRdtkcWSQdnwnwtjMfKwJGHBHXhMiY6w",
  "key10": "2oL3csSzDvyqtXJutLjAX4iPGnfARURvKN2XRDeZQ2o6NVmFi6hdobS4MG123tQeez2agBAT3wRqQSTF8FTeCuUp",
  "key11": "52nFQ7P8HGxJEZ99g29UydzmE3Z2nb1Cyo9YTJFnMJTYbD5GSXWdJARcr7ZiyR7LxM6TngxNJ4cqAen5sfsViHvt",
  "key12": "4kR2sLAi4pa9FLzLTyjm7QB8V7XS423DocCs4WzcqE4fpn29BtZoxWVbN6KcBmZnRBcGmfZnGctWY1zLrKg5qDVa",
  "key13": "3wqmfgYfFC1DnPEyTJQzGJi5TA3HmkydHwYFeHtQRK3xTkbgEb4Gp7C9os2bAVHZRdqUwHkpKF2GKRikv3YEeUo3",
  "key14": "4r2RytGGhSbAQFZDEoJwVQ58asJBZ8xxqqtUhhAtAzELNgY1A1EuSLS1saCWF9REa7qaPYUQxFve2znLZd4LLnXd",
  "key15": "58NZjEkoipL17FDTPhZzzQQj294uPC269jpeJQHwJXpsiRSp4EKNCtsYa9Mfbg14x4iCBV3KnbPkmorRDBmhM3ea",
  "key16": "19XDbpkcDWWssYmsEb122gnpV3ZY6pACWnpN6qVcmtbUXdRPncuAsW8LNX5UZGWt8sRbtCbAHbmTr7ZGVW4DC4y",
  "key17": "2rRfU7WecZ9L8aRCU9idJY369dQjAhL6MzcB9En9VzKogX9aQiKC6kmanGzbnbEgE9GRPfXENrkKaS4sJqwKj3Ea",
  "key18": "44uS9h8Ksphe85sRkEEe8txRDxQkp1y4NrZivk8FNgZcnVe1PcABjysj3sCNmn8KN2efnhvpMTdPazsqy8qxHZqG",
  "key19": "2DDpNUyLt8FsegaFSF5wTFtoDLNKWm9sSi4VXNCToCowXBunaHk3v9CvFuQgme1MLgz5TYhkpFGYgCdYM24SSzKy",
  "key20": "5ygF5dFd77M7bc3hiVkUoHTd197dnviXw2fxwPF2g3m6YTXHhV6KhiNCWTunLwScvg7CkYAyuZ29VNX5pM9yhMks",
  "key21": "pJmddr5WXwSZNAkwsxCknGZ7aPdTpXWwCnN8GP8n5nWz2Fr9aXA5qEvpqSdECJggr3zPbabgEgZsxeNThiqJyxm",
  "key22": "PWGcnrPHP1JUfRA9pvF3dF1Rg4gkLh9WgqcKHWw8N4um4o1YSDni2Lj31enWzSee8LBoF4XoPGhU1q5RKYdxY4v",
  "key23": "8PTDPURtWyg4PQcjhyZQ9BwWyUGSuXsneXhCEAQH92miypeew7FieLpdMYabXqX2m4ta29kjm9CarowK4eJ9Rd9",
  "key24": "a5XvCrPmBRvTxtyi9QCQhaHFQcebR1swKsfzQFs5b6Wv7s18Bazu2Thuzi8RKhmrt7RBSvLvHprCqQoLBZcASfQ",
  "key25": "2cXLfS1n5QaHMYuyk6UL8KvnWRFogc8wo9jBwEUYiTuPHXuu1RShWWXLr1gXDkVTPiz9PEBa36cX9FEmHKtu4htN",
  "key26": "tU63jBVkcah3y52an32FRyxpqso8tmYrqcsQeZVyy1ztgAddquLqFWTZZjWzk9BdGinYqdqRcEkzjyxtG9HXWKv",
  "key27": "29G5VDC6VB3LJCRGD6Wn7nRr8Q7LYv4qxbHvqLpAxFoRsNUtkqJXG15Dv5mD34sWxFxKnUnjDTw3Qsw3rqGguk1u",
  "key28": "4i9XunvjaRpgd29Yp7fXDkL8p9Bp8qiPWWBbgEmeqi8FUe8kXeGJ5WNzkkHYCiGnJhNrDZtArY5rpzD2vsxbTvat",
  "key29": "3gbj9S1aqyk3cscDcj3sGainD5xbEnkc3haiHkGPiJTYCxGnSKhyRk2yVLJofuJzMye76CAA5d2dG3EZjrRUNSra",
  "key30": "AY82JfZdLuQqLboc4eh8zUpUMrKet22dE9MAKyyHfseNAmtdg6UB4Uzo64vcbSiMUB54Z6uACBoHhLyEwqBt5BH",
  "key31": "3vhPMsScZvKRuqG4XV5UHcSGjjACESQ3JW8sCFUasF86EJKmY5BfEFNRgJTmQaXkJzfjFC1wAyahwEfZBq8fiYk1",
  "key32": "5DDqA4JUMQjBoHLzE8sxU6rLp3tEy88bqdN9RDEMYd6E8Cr2e5bZ7U2konUvCK4C4BoSri9m9JcnGfkF1uwv2gYq",
  "key33": "Zr7jFPz81F5UoWSGGtcsBD98pxCqvNzQ8eyDxFcGmqAKRkxXB1dWcnt62JLAKckRzVD6QwatixUhvYmtgH2wnvo",
  "key34": "3qfznCpW7QhELrKLiopRNPFi7mx65kPWdk1Y3qPLUiUZU5g9focQy3pVdFpKNtt63fQrgoU812iVpDv6G4UxP6uk",
  "key35": "544we7vXRjMho7ahhr7bphjEPETJ3NEzLFCrh6JBsYpzT2wShbETECTNYmo9NnZ6hNKwT5XsWQ1RT2GUsKWfhDmr",
  "key36": "acBUMgKHA4jHGi23vYRdZMcLpb769MzvLxkwaDLNfLpjSePfRQqR3xGc8LW9zpshdV5HDUz1jH1kncUZfAHBo5d",
  "key37": "ofFFBx51b9jYpxGFQpZiZSYh1THUcGb8MbjKjWXxRnT9CrcwGZFprtxz6pMtgERdwWi3d7bzpqEXd34vFrfSoda"
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
