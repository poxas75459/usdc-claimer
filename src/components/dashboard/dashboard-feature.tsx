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
    "2kBtde35MJmyXn5aiG2TjGnKJUDP7T3rgpSVVuRZ6iyKAg3gCYipP3SqVuzbMTHR7tj7Cna6PiiZ1zZ2aUwPZM9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "stuaxuRAJpiYjakZuKFULpzcA3eev7UCyWgs38pcMVHzJ6jCi4ezAUKiSbHbJemLidTCfUZdbipqJKhg9S9BK9p",
  "key1": "3qrPdfZgnb7EJFw6nzEDcPAVFaidTMXyoha4VRsgoP4SaWfMV4rXb177Ks3iGgqiGZ4jhtvkgbMyTs7PswceGnHU",
  "key2": "2Qi5nKuZ34Bgg6RAp4a3pjrtoxrVA11PB9EUaBP98dd9HNs1eSdpDGp3WFfyN7YZpQ5oZ9DL2C452eXDk4fYHSqZ",
  "key3": "3VhnkVX4u8ShSTvUrTgpnCVotdYuiRUeVEHsWBDTYgnTsXeT2bn12orMD8X3YJQpoakJUFQsPystwRASZVptDZYC",
  "key4": "3isZHE1GKBwpDQq4m6nh38vQBSaoXth3ycbCSHyJufVsuM267DuesRTzb95CBvT9DkBYPtzSaS9p7JbSuds2HB9C",
  "key5": "hPgFHSPaMEZRQ2B6rVXTLNQbEptrE2i2V5UM1eZD9LKoaJyBHfhEqsjdQCJRoJnd66WMCW1FSuTzb9CEKfeg8Mt",
  "key6": "2okNPXzebmUvHaiRvPqLD8Y5kufxbQD8rZSn1Med2ap1zMPaeCtvpW9SY78ArnuYMAjGXhfypAEV2nh3vqzmNSh2",
  "key7": "2F5rufP1KXbAcdYJKaQQxzkX187E1n5aGT3w3qJABaifzK4fVybbqt6U9YygBghLbDjFxfi2EVjrYi8uNimaNtLG",
  "key8": "67o5mPnv2rYvLeKdVu1JK4r9XWemzeSgi3FiujULC9xkniFRc8F2HPp7JwNDxL7Y5HYg9ofW3YRCMGauehfgovkH",
  "key9": "43mTfi1cgTSzFCPZyx13GvT6wdtPusyLhzRdzmaMKsPG4hzFRn5kW1LaWasCNtsGxpqdne4xQz9D6WikDnamASsZ",
  "key10": "25KWKLeyPqZNfUQMideKY8hgao9cJuEGfsGKnCHYtuAy7CbJpoSxkvS2yk1V8y1kPC34tshiFAdZyzuUaAAyWQoB",
  "key11": "aBLazgFd9t3o5RcUhx4AMhYGXLCBuddHTT2EbA3WwgKvcvspN1twXGr8Y4LZYUnLS7m6sGfPeTqPaE6Ur4LPoUa",
  "key12": "3AYjja4pk8XxVq8Jzi2F5GA2TzQXSenvJrYN3grys8i7Z9MDp3N6BdLKRdKFd73m4N2cwXe9VZyNGF2aQtZAeefu",
  "key13": "4m8xb9zbzuSJ7vjzKTTmBVrwrAvAMwCFgAjM5xYAu5fMfX5KHztSNc17u6SaJEmJXrKud3CqgkAtma2pHuWFDymQ",
  "key14": "2D7v6JMgXZw4XY7THkTX8VkAqkkdNQY4gMsUKvzHED58oPCkx2iPrmck7A4W2E7PcWWYZiHmDkkr1Q9DSRTbqkpa",
  "key15": "4djupG8t5jvPrVkh1HeWEcjjPgQmzxAYeiHuitcsPxP63z6Crk29QsDEQSVKDcKC9ESCkAqxNjZreWjEwgzExPah",
  "key16": "2yByEVBjEbH948p66fb56JV2cfWg8WtGba7cqEWCE86EUbtTHATRSBj2YG5GCDXZZhfR1zgv9xu239NN5sqfM5NR",
  "key17": "4VyZGFLoFXXT27CuKA7WboWSmZN7JVuMDbic1rfx9LUpL8tmVMnaJXenskSUg5uXRGEPKUYNzncHs6NrYCHw84L6",
  "key18": "eowsdHcr24KKKPhznGAYNKKxPtMwDvxfNxNo6k4ybRkzUTPLfgCqzW55HgwyrdL2np1pmgoNZzfoX6nnZqp6ont",
  "key19": "5rUAowbSb8V6CQKiYVBYasniVJspXnidbThsocsJxy7CUgVaaqHJ8Uaewo1voc5X6qCcJamgfYWGYT8VKoQxKX75",
  "key20": "4BzEiYMHReNBqDBvytTZxArG1YeDRjJcyDMwXwTV9R9acmaLbmEVVhS6zr4uzPWJjM7DhUCieNUjaUz7LKLF89C6",
  "key21": "2vqTB21GijXQPAsA4hXuiL3BLmgnTr3ffURU9YatrTUDgDqarknHaD9FZZojWpiTtMudEMggsyWPJZPQdBo21zRm",
  "key22": "4Z2zV9wGEfXR1RYEnVtEqtzF8oiMqw9wgxG9DrLHQhHaMmytKEVerVdMQQRtwEhbokq1orsta3GwpNjAZaBoPEEN",
  "key23": "3dwDtDhdrAUWAN1ZUyC1TWAR2R4xZ99DVD5CWrjBWpgLhMZ7FQM5T41aNEb6VDSN1hpV3RqjTZPGj3gg83v7sH1S",
  "key24": "5M4pe1JEVACzE9s2xhujnBRP4rFd2Lg49FiVV9qfDba9W5j9bgGTFCaNovsNs7k7EFpmdBuqrbJkLmsJM2aX2ivt",
  "key25": "4RJk918m35YWVdoPauWiEWt5hc6NMM2YsR3Qnei5EjUeqprhUGHfT5TYGH9kGiE8fVAbsixLcQJao5ZoP9iyEShP",
  "key26": "sb2HLtc995rBNgUuz3XF6Z71ZRb3z4gx4ASsgAQ8HxcM8mjjmbhqc5UyxxQjQ7HWaaVM72dU8FCBMhiWXK7Q5kP",
  "key27": "37Qhpx99MXGSYjN12iutd5fjEkXnPyiwbVTGtNvdp8NvY6Snq6PFmL467zBbDczUN6NeagD6x7CeFWqhH4LoroGf",
  "key28": "2CZsDLCXjcc3XPKUArwdZmBsJVKriLmZSoYsKtZgjYPy53F1amjLBMF8J9qkmLPGj6YmoNUBTsV3ZkPLFNoxThcG",
  "key29": "5Q5jysdnZqKxucnPTKgBzUeSrnEg49Up3UHnHurxqFEaRDJczzJCCRFhT6nnJehnuTwr2651Wanabq1g46wmQNQV",
  "key30": "2ArTaW28zzTHbqbBLtpLKoVGfD1i6PVHDkEN5cpANxP4CVi8YuQiCMpTgqvKL6HHYv7ebwNQufDV2dnns46LgS4W",
  "key31": "HmvSKWF5CsTcMhASmznK2mB5jPYXV4TMNbyjjwVUqFxwSZqqZZbbF85UYAWW75dopQjjz5q5qMGwAbfFuvKSGcD",
  "key32": "3PKjrCAbMhwPPCoRmRVyCS6wjdTJBr2Z4ZvgAGrE5ZWFwUVdUPsJW3TpeoQnNEVvhWyvoVCcAczDi8PW1oEXSi5u",
  "key33": "3dcMNLAX7MFwoVf4M4tcgFa8gNNMB9bp7LAoap4F1wfdvuXNR5zckWimmHRFRMnpLbAAqLrZFfvxgBupFp6Gbnbz",
  "key34": "2JgVfCcuxsZnAQ6ks31mVJf4ovQnyN58Lk1Zjw625EQRm7HytKqchJA62XMmNT6GJVxDN1uCzFfmEtqArtwm4kDe",
  "key35": "X7ALMq6UkEZsgFK6nak7k9yRqNTKdj84pPuaJV5tGqeq5tL6JcyjwqMbqKewcZu3Ush5AperGfaoSX9CM2oVSBG",
  "key36": "5UgJFFMPrHkybK7jCQdWxRJS7Q48FUsN6jwhtiteiWYETzML5z44CyzoCunUKj73qgWdNe2XvhSJfSp8CGU9kH4W",
  "key37": "iJtvsvLsAQ1FEJBEBW5o38qHogB8U8orUTqnkRKL3LeYYEbQmxyxtenbp6YqRxTfQqtsAcfSWFL8cMe8e6iDtMs",
  "key38": "5qS1Dd1f7LyWZ7ZPvzq9DNZDfNetzcuTG2nmwQg3a27o1qgPYfXNLREA1PYviGUdMFywsFFMT9pEfApdXEM2gXh8",
  "key39": "HicR32hy5EjucEeACwF1kACE3hRMdoJEzjX5MMje78Baym6TaKWGakS1t8oqXgFrxwVneapwg4m6PKyosvvZVMZ",
  "key40": "4JBC8fWthagpmGosTLD7MJiNLQqzPPLXVnkkcJSKwvZ5utuPC3mny2FSqjWpZVUMjpHCcuAuz8NMaTerC9xBVCR1"
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
