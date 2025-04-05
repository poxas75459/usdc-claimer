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
    "RqwyYroj898pyhE2kyWKCMFL38nsoA4CmzBjkqgiGS9m2xbMoZYBsjaHab3ZdF59zhsr5zX7K7kR9y9Jk9goTFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNFDboUQXQVCLcMjzNrGaXxygmYsPXeqxW414QKuS9xYCgQx7YkdL1gbBQbNnu4po26HVwALXAxRMVW7z72qBUz",
  "key1": "57EiJ58uA2RpdF7f3yX7VZWTVsWx7apcLdmqu1Bj1dTXtNWHUySZrq8Nfj1FS5KvAKi4WcaRxVJcYmy4uV9ktaNh",
  "key2": "4k75dRWDBUnpta2H93Z5Tq64KpYBLaU69mvxkW4HTz2V743BtLmCstN8nxt1eHNXWt4kEgjMLxP4hcVri2F9sfjV",
  "key3": "4RH54ReYuoUucAZ27Avfg48HeqcTvFUHDgZMvbUdvV5ip7TJYQWaHLx8KuZufCWfaXM48CPCvh7tyyhqqUYZRks6",
  "key4": "3PsBGt12NmUSQYuZDkDMzJrv6KdhEiR3fRSqKxnR7TfXY61uuMGW4GFKRsr7MGQ99FGgxNdzcgjw3gnJhhVfe1tv",
  "key5": "4QYm9TbcknabNxW3x5t8ozsujHbbC9j9UJo8qjG1kNa4LVnXDS9Ee8U8o8vLQKNB2Ao6sSEiNtTcv6NyMTxDKC24",
  "key6": "5UmwZ49dg7V5gCCyy3bqaQZ8vm4LXnWP5ZKMyxAmJoMaAKbtPDby3seimpvPwKQGLHDXKAGGPaJxXjVEAxVCMRty",
  "key7": "2Etq6rFHhELQBUT6e4cE5ky3Y5JCpZybRnAqw5UScgDiN4g4q3g5gjY3iXmpMVFxwsYtJVVeHgdnmvgAaZaRjTZE",
  "key8": "2a91D8X9SMsm8ekiMNWv8sZaUA1DyUxJLa3XjJ9Mpgb772ZAzhnWfP2vsLdbZFyLRBvJSfZ2SG6XWdFCjmZd2Wry",
  "key9": "5PRqonsfuC5zeUfTFy5P482pMKPQpdfSVVToSybQXcPDeEVRxj1MPasbu7DfBt5e7Hi4haLL3XEMYy3iAN4v2dfp",
  "key10": "5UKLmL6LPwTeB36t4g9muYx7NdtoBUtmAVzqcsPAReiC3ma54NyTVya6vQHUjAxB9dHBit41tuiL13d6x3p1qDdh",
  "key11": "3mbqtb6jMue7f5NWBeyKaLCuwhKKroKjN7EZQuDvpCoAFHpzySiNEpRuJBvtbPM74Tqwi5qV12muDpJGmHNaknR9",
  "key12": "5WKVXRLPgynmNAYgnt6zgqdAgxqUnoNHNNVWmBwZUSJoEGQb5jhzhcFnuQo4HxmSAfAHYN5FXQBavHXdnJfzYNrU",
  "key13": "UXaU4MjhxAhzqd4UiYt8tpCww8z11xCqXHcP8cMeatd8ytqDWayyvyLzsKKwjhBW9FV1b1BZz2rqEgt7U8ZBbxC",
  "key14": "2Ne7CAp4vBNyk6cyqKwpQGkWe3PFMLjwF7Qs1hyYanPmezrRET9ADiJBugaPArx3SDBwTbvQEhtXGrMMTDaCAeBt",
  "key15": "xNPFfWi4TzsisecvKi8Yep2A1vk6N5pW5sGVsgJvPnAKR5DhkozHWKtsuHt5WbFDZqsMtDEo32JhJE9ZmYyMc2P",
  "key16": "yZttM9UZJA4B5uPm48w3pudCbgUwB5kxNbjQi4XG7m92tNPPM7tQEqrHoWCwxqHL5FJnyTYDQEwxe7o6EpuZ2Wa",
  "key17": "4nGdtDKDTu7y1v6F26AKXCBQNxf2MszqZvz2jseubG9A8aHc34iCnoDDY3DTi3Lus7e1XoJUZzKuuzTxdnbj6zsH",
  "key18": "7anaKx9qCHSs5PFCw5kiuGvo7MpQFNiPETppapoMWtr1gyFTgqsUFSBKDLN4d8oQfsuQxJ6D6kHGC8mudEtKKrM",
  "key19": "3qg4UFpf2zXPBSPEMzRgWnHByKZT4YZ26XYnpAAsAZLfB6uVg5cfeUbxqboXs1K2Y1eZxxCAevbNA4XPdVCVY4b8",
  "key20": "2jRvvS11C49tSaGai5n7EKK5asut5pAyJn91Ng6fRgS1hxDRNbyRtYwQT5ryGouqAp8LTMnthEGWT5Ad4netndf6",
  "key21": "5LXpKYquC453R7ruQ7ExVEgMkgbaPFyouYTUFfTP69feoeUnXLUUQK8GDwPHMeVDR2wv85avvhnbNaXFn1nbrYjn",
  "key22": "4coNzrWzUPrQ6XH4cWdy6rEuP9qSL7RUyaZTjtU4hafHhN6PVUGHPBoQ7HiBSYo77jZ7RszRWBB9bYXUFD4p9NS9",
  "key23": "2GujRguKAtVGD77QLfeawDX99EpuUvvXLDbt6orpjL3wA3PwZgABzbhRb92dzmKwhXWrGrCMVnzmJByoP663mXsJ",
  "key24": "4s626nt5Z2rfQ8yBoWogciNgkXVhKUwYiPHmYMjEuoKzKufSu5wB7eLxqETzZ842nywG4QBeLSCxdrEq7NS7AMiq",
  "key25": "2NCkBFAmt2UkAXvaNpHtnimfFdiacL5KF3rzmFQ3yBUJ26JhfysmKgmgdBbZmridgsPBcgVJuzVA7WVdsgWigpjD",
  "key26": "2xoiLC1YhoYZf9KAVvCE6j41SbwyDi8QtrjW5iG4etuDdAiPUKNarF99L1sS3CFhvtLsqxih7rrYZ8K337aYjLgZ",
  "key27": "3hSAwsoU22rQskDQuiTEv7fij6LXqd2TH4EKPDxKAuXaUUEwLpnyV75pHc2VnYfeuzAiaiF1p1Wbv59JJ2ju8mpi",
  "key28": "2mA56xDrhzwPJswAHEyyxfya9i1VRhStPVo1vc2CDSisjoE6R5E9cRzCVJaQ57oiEsU9dAN5s5mYbc2D3RbuUsLG",
  "key29": "27HcwTfz8RQZ7hUvmm4qTdHv89e2mqMtt9SSiSyA1rqBxPAYZYVtiTMbcfUDF9pdBRJfbXsbABYixsAtnKW1oHhw",
  "key30": "3jhtQEVhyxefRFGq6L1tTtkZUhyavyNUEvuSDKWZKHsx2uZTZ6PTQ7QFaaHKZMVufYdhp3PUmMcrKkLMoPuTUfrM",
  "key31": "5sjNQHtXQjiiGaBXK2WFP6XtHxuBZg1Xu3ADxVJxqXTg8sXByruLFrZEvf5L9YScEzDRpERpBr8qMjU7M2RNtt8k",
  "key32": "4s48iP7XVm4Lv2B3BP31tDhi8JZ6g9KWNPaabbmZyjfZ6k25A2SAp1WZTRQDjKXdJmLut6TpK4VCT8h1puvZa2TV",
  "key33": "4DC8fYYWD2apNCnPiZufga8hfwXfMfjgPcBmsStPCz1ZJYeQpPMGJa1RCavNzQJnKAC1STuUcy9tbuXjaHmpABLU"
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
