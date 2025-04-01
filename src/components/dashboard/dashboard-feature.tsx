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
    "4fuefH7qEv43fKhmr75GbaxMgMWHg5P5TRfBQ5XdB2J6tfwjqVaxBoTaqEffMFu7bkwtfefAnGBh4qpNifRJPQV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWVjb6ryoP3Xmds7JtqyGL8dyyndGwosH81oXn3JgmkVcbBypHYR5Ws12kebDaBYKBimpNrJdyoenPo9caWTP5x",
  "key1": "3cBEtauEqdpWjKH8AxxpeQvMQLiTLUv5wTvJbfvzikShzTfsV3A2U6uJ4Pom5CYHi3oTBnoHB6sGFEQRmNsbjbYz",
  "key2": "bPxAnNuzkNvgWnyDHQGscNqJeR42kYyLaCYLnywMNecq8NdRGZkfmNXb8h8WFVcTATk1VF8DBSuFMS6odTf7NWx",
  "key3": "4a9MHaLBdvjdd6y2hfJTBQDCyDL5Md8R7khxUVH2JHj6AoV44UUnvN8bSdHZa8mcDvmkxWf8ACBpV35zAzFJn4CN",
  "key4": "3si3rgZwuyMgvPHNf9fEoubwKn3LhGt5HJV3W69jfuht4hoqtvYnZmk7GEpitmufhrrGbyEd8TuHQkvzjdwmepYG",
  "key5": "4dUhrkiMMNMg4otxmdjWqkMLTvGuEcXGEwzRXM5Z2WU3eJoxhPKdRQdYRiVc9nPwzq5k2F41mRcP9Z4DZPWu1Hgt",
  "key6": "3hk3ZoH7mNpzbxB1Fib9J8B9fNZoCQiCmUhjKh8xx2e76P8evBswYZXKbqcnNwz5XGJe725P6vt4As8Tf6LhdmyX",
  "key7": "3pdPbd76UnRp7h1ziChpzWGFs6wJEEbKRA4NeTRy6f9AAvskPSaVch3cYYVQtgTM3n3zfDw22PkSox7quVWoiehN",
  "key8": "237JQTAk9vzVighUFQWzC4BVsF5PuyEH2VLoERjVXWRq1ocfHA1tPSEsNDYAV5hpoVYpwo2fbZU3AkP5My6ErKME",
  "key9": "5rri9RXPGmQ9ZjbdawqgTtKuszzMLSZGyDtNkDPz6FurWAQsxi8vUmZfnAuLE88wXfWCCBZJLvJTRD39oqf1QJjB",
  "key10": "4KFJcH1HPEC5uQz387y5Dpi5Tx5Kc2qfs2XMKLmwHuepFD8VAE3EaDBURiGpx4vkBD7DNeqUJP9Fc9b9Td1nA1sT",
  "key11": "5xwft4VBZzWCUV6xcSkMatmmxnEYX752ufLK1N2rv37cmWM6Nbk5ue4VeRDJ3wWYYZXZ9S9qAb432XvaHqbMh5k1",
  "key12": "3oKPtHKMd6oPLzTUQoXgvdEF8egsubTpTqd5vS96LHUW6h73jszxvdABqRaiq2i6JoScETsiaAgxj97M3fAtBa1q",
  "key13": "4X5xzxBzAYdTbyZiAWpXpRaToNWjtthXudryZn7iegPC1yiaAtF2FWQBNSmUt12w28vYr6gRNzuiTRM68rodwYqf",
  "key14": "3r6ZTChqRWU9XM6ZYvJD6KtBGn1nkGMSM2RCvqXFxtm1LRTYi2MXjzRLT9HxM4W2Qtcf7zoYmHouraZRDZ5TZehH",
  "key15": "5mQcJLL1iMb9i6TL55W7FoqgUULNcvrpimSDrWRkq4bEUnQtxtmUn7JwwPzrML37kCWvnjKzSfc7Ag6Gt48am3GD",
  "key16": "3ESvFoEZjzwpAeLTxa5H26niurh2g59deMm4Aady8A8XvH6RLCqHsxjKYCWettFxvDhNxt4x2csbNxAE5YPheeQX",
  "key17": "2Qb499mvo5QukNbFDVRMRVZfzQev7ftoEsn6q3k1bT3rnrTGuDfbjfjbWswDJHyBydR1R8RmhdLbR5pZJTt7SRF",
  "key18": "4hGGUEdkc1ikfpig1KGXj65HhGFK1MLRhFu4wFc61vjwS9P6f3Mqkfe6X6fEhzt3mup2roKDiTo5S5XpzEH57WD6",
  "key19": "m9KtEqvWG73gur9WCYK7ZiFU5UpuyQgZJX5tVK6Kfyo5fgc3FfpnQ4vTPmsQ8bqBqgfhKFB3nWogxiJAA5f8EdQ",
  "key20": "4TVCWStbJnMTL7ZC6YMYyezpeTvfGVprmFMcH5HynCbKYyEWkqt4KkkR1sW9NvwWr7rKjit3Gz9LbXzB55G6qKb4",
  "key21": "2eDqdWukhWQHUkCNm87F6xbmENa2vTwqpfw4azK6JTgJFF1XJZckmYCmHUkUaJv8R3k6SDEs7WqyrJpmbsQ7Fwd3",
  "key22": "hNqzzXkxhRjJq2afXE28eeSVu5NYzEzycAA38BQVaGfRALq8e5LuQxCnKyukA2tkJhhjaRLzDD2BELQ8fFadPdj",
  "key23": "qWoTDd74xXEJDq1SmN8Wb2Cr49LSFfdsp67vjiGEADm2RhFW7eybvwxAVTjCgn9nhGfUdmzL4XC7gdYVTuC7t2r",
  "key24": "4Usw9uBwB2He1jaQf9RU8PzNVi7gpHbaskLRwzmqxxfcuqNgbJ7s8bwxQ4vKaG4Gbp62AakmRuFYCdk2vYPKLSGP",
  "key25": "fpNCNHygqmHre6kmath1Euj8Uih5bNTVNDHnubyu78vCjYy1d8ZAzVBbBfzG1oTWAoNWxST2McEHUeSxmVgKLbc",
  "key26": "2xDyXg5GWQgKiZM4RfqbhwwHmBYsHj3kbYr9uKTe9LQBu49TU7pSkaLs4aj86xbVmSMXjUaKH1BvpZDKTwq9FAZt",
  "key27": "4oH1R83Cq3JVCErgVhx6uEED3zZnSPurdsUL48R9d7esZd96TBgnw33uYMLConFaNGUuj6Qkvrn8XYcDDeB8dnV2",
  "key28": "2HYJQjHifX2kXrouGYirEzkrUmbaqRRTMHVGgSbyzgEu5u9xuT7HexXZVZcY2SVHxC5mhmykZV8a72tVvzbM7Crh",
  "key29": "2RKmnSaNaWfaWn7vh2pdjn2pydHpEPNUaLXpnAxTKQ42Ms3Nbg31bAzHWJ51Xk2jioK772frBaanRCXCxz2ehYp",
  "key30": "AEP2NUUMNs5TyfnqCNQcoeMPtcrMExUKHLmPJiPCucppK92b2w8mxYjwZkFiHF3nRAhFkdZUEJ1PZvSYRcXq3Dr",
  "key31": "o12LXmDjwe5PMzFm41TzF8XabDtVtnJATQ3ScyPJ1zEmopZXrbMabcB3x2owcVXxVKdyUCEC2z9Xdx8NhLqDdCe",
  "key32": "5dSq1UcrWatR9EmWwLr95LhLRyxNtsBAEiJJsD4whnDGegfjMggh6C68TuNZ4K2DRw5TeWQJDWnZRkTcG465gNtN",
  "key33": "5tFkiYGcSqbLgxXMoDUs195dYAAvYrs1Nt3d727qTWq6v4rjgKKkJFZ8fNKxe5kZeX4iBCaChkvZwkcUgMUqs41s",
  "key34": "8fD7wW8FMs8WtV6JkKPkLDgvUYjrPrVwXBrYPFFUxjv1sk4aiknYZVgBGJJHettw9P4Eiwx2Q353DXn5GbiCuhe",
  "key35": "5D4bWnDtQE5Wzgbcz88t1utz6v1eqTm4nJhHj71UYXPmcCHqRGSAt1bFDjKwvbg5y7xAbqQPjnrqEyPBKfVQkkbk",
  "key36": "27QThXtsFTCwkiKgZ6uxPomCwZzxqViVxawQfZ2fZKb22b7hsabg2yF5864JBkv8UPzunum9D3cs8gXkrdeUzkKp",
  "key37": "467eyKgUjzyBgNf6i6vAkMzLb54FpvSYNYvnCFgrgvMcrSFLcYS3bL99TqhLRX8M2x8cKmNYC76ystAT3TBCZewn",
  "key38": "2jeCRHGFh7ggRXVqSov3nVDS1uEoLixs6ZwNheviJHPwzCaQpnrL3TR8YtRAKk9yxiKg4UarBWGvjGqTxhk3hHC6",
  "key39": "3A9rEtWd19kBoUenmdPFJwjSFg25jiR89gQtwLFkm9TAGmebYbndFdPKrJ9HuR5rW4misWLj1A7BkSZc1jtuLYjo",
  "key40": "3iYNRET9EMBcFVepfrauj7K2kA2auaVk6MsNSqrp9VXxRMwUChaMx4P9CtTRCkX8pqdm6dj8WzosFgCuaBXQG21h",
  "key41": "4BCk7oQSvw21LNfp1a9ddVgrc42tWczJhyyXwrDN5FRf6UyLRhQ4tRy1BMcDAqGkCCbo3rCNwxUan5B9nmRYcUN8",
  "key42": "4LNZJS7JTnmkecqXRjuLFFGUNsNL2FtAny8hJ6U6e9E57U3pZJG9Pb8Wok1KUxysKonf9UGx3SEbxdiomvRHDMTL",
  "key43": "5wq4CBou39ijoqANAAeUbZyMujrgoRSFuckHiXGo3uyKaHp18MLw4PAjd3yNUp3qjnnJLik6DhVp6cNn96Pxh9c3",
  "key44": "3EkagNjwUJ7587LKFrvkcpocsKBVAbZzH4eSEKA3E5wC7avgGFyVhjUh4gSqKFjLQSMNucLUK1pYx4CVvzHuhp5x",
  "key45": "4VFXEgwc2crYfxVTL56SkdmyMMncdQqkXidMMueqHyf2eeGzYN99b8UeU5tz2rmx4sSTzmBsRNtHJEDX1XUp6AS8",
  "key46": "2ZUKPq8N8zQ8LwkXwo7aUo5HjZxraDzhxR1TP5T5d7Koj2cSkDjXesS2awJ62QSyMXmz4mYdcziLvuFrjpWrGdrZ",
  "key47": "CvQt16FdganfYtt6pvQ3PXr6PP67U95bYTu57ev8FFQyVqMWsWGwtfzLyFVaUbstJHxRyqiuE96Xtc6XTevsaig",
  "key48": "3ugu49MYtdYgidALiZXigrkoCzX9MweyCsixJUifNtiUrV1vNSKKujJCCH1sSpzs1qtK63QyMz6PM7ybqSiyv13e"
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
