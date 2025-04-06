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
    "2YccvnsFaKHjf6fpwQ4vKWcHKQU1pGe5M9mqho7JSw1tAsPooMyyp8jqeD37z4ak9LkAdLhSRbs34oxxjzyNQpdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmCZ6cBLuGdTGMB2LaRsc4tJf5zoUbjwQoU4vcHcHhHq84Rva3uiWpuvccy6bDrCf9MneWV92CGdZx3EP3WziYq",
  "key1": "5SF2ARqRhuJA38bk7nCEJ4EJXV5u9aLQLJkuFRGAFpdd3NtS51PTYkQaNgE2ZhiTzSNf69XerUPKa86KJhWSABBj",
  "key2": "51LE6HFThW3g3GbNC8cPVaHz4GGPBKVAX7LjHxZY9q9ShytTCRSZZhs7e74ediuUXUP39sNdWb3pSrK1sMPKxnwR",
  "key3": "4owqEBebh5pTRRbKYqScYDYQcDEGpYGr7adCpbkFhp3Ttck6yM7iTL7HwKSXKRfzsVb6yBieni2gV7p8HpU5DFVG",
  "key4": "XncEXrKGzzK2HbtiwCWF81d9raBvPT3qiweew87igVVmyRX3HuuQL2DrdA7jZUGX772ymVLhV84g6pHCAezJAkT",
  "key5": "3LA2FsyvLfEYuZoQ6X3Lt6puhyQLnMy66ri37jSMjBdbiVoi2Fg61pt19bV5zN22nUN6SdnkSCuys5HbR5eXya47",
  "key6": "2ehFusdCWdq5sv1RPZUZ42Fv9TgXHj44Beg2eMwQ6DEh8mobSVhN6ArqJWD6WWD5VmgWoo2aGdsDUer7aQWWHGpr",
  "key7": "hCMPwZzjUSgFMhgVbfaRDw5AnKp2iGm1NMe39SneGH791yfF7sV45HizfV19QW7pgRpUT52yb1SdCmJ2ECbmzYQ",
  "key8": "3KtEcsPjMAcNXZHzpYB6XqS5A9qiJCZANCQt1S35iW11tCKyFfvcFjELdGs8C2LMJyQicJDz2g3R71wZ32S9JzYx",
  "key9": "5c3GxLzyYGCR72FBP7LE9J4ytti87qJRBkfFwk1AZxH4AyRgiDowNvedxUsJ4e1oZTrnuCePH2LCuekqx4Eo2491",
  "key10": "2b7xbv1kvRBG1qvRjnZjg8QMoWBweu5f5qxGU8cKoMcQMc4TQ788RyuSEoRgr7HFiXvBfnVRz8pp87QJ8yAyzMBi",
  "key11": "44Ap5KWvq3cNmPnyKYQKMcK9vcu8W6LPocUEzPaMGm4Moy3JmRCYxXKyWHHxZkL6MfRvUGerD9L96jgRdYpfMMZJ",
  "key12": "2eVrPW2P45tsDwyJtgW1qDhNkDQjvYVWjHGakgKSuEHsbxQniUS6RRUbwsyodxLGAhRgF1BygYrxra2CgwwKes9u",
  "key13": "3jCmG4AbJZV6VKSMHTCEqoVnAM7fpRkxy5uKKezyeB4Hf9T2QyZmAfNL6mdF3EFgm8yL1Z32dhGoW9F1sUW54YHq",
  "key14": "5KANGe4Xc4jxFQmGu6XeFC6DvJqph3i6aSfKUkAv5YWxv6Y3Qi3XaogWY8UWfEUPwTYqoGNCXFqhu92nWpJBoW4k",
  "key15": "3awDuUepo8SX2abNgPzq8s2Rauy5Puji5JdNG9yoVz5fW6aKJtKSVdnKgD6No2RfHiPdh9ndXcvh98CqWbL7xtXt",
  "key16": "42z1ym8PmGkEPdgFwyQkTLxvpRACSaD765skPC9bAnyD95iDnr3YzNLP7jhKez5KyDxzyRxmashDobLiNL6fAYUt",
  "key17": "3sc6RX9x87WDPbQdVmX5vC3nKDNh7zF3hG4yAdTMdxEu4tapotjNK1MEBGN6BEwpqYEZxvnqckYpzHutE5yrg86p",
  "key18": "5J3XTU6bmudZ7U4G9kMBVceFEtQb5jBCm9BSst221Nge7QATvAj9jfMPg99Y37HVb5Pdoc6f2oS7SukhUzG3hmVV",
  "key19": "2L6PLC5wigUNgW2sLVUmLb5aGgWC6KPYZ99U7seMyetv7kuJ5opoRg2iCnw79hLbiKqJE6khVnxTSq6xNSpW7YJj",
  "key20": "4mQsoh4zdpDuqJCEG2K3pBP5XDY73N2qtQMjxFwwGe2GxqRud9nU9VnedGpmtfY5GLuWxokfi3kkh3sbWTKXM9d9",
  "key21": "22YuSkgoDwGpAAa3Y7ShU8qm86Muj3i9anzVnPsY1a6XK2WyTr33cHvckKZYxd4d9DngFg8J93A9MVDm8dYyGrvo",
  "key22": "4h7q383Y5RTCx344SfPohyaQcTPzYGAhMTMEXJZ1493umFGTDQrTaefUGjF2f78Q9AgLt52WPkSre5FfQpo6ij6Y",
  "key23": "5gFxuJQD9LN9FkNxnW9N1Z7TaqZGhiZiCy1BYSpmHceYWTxt5Q9c6qttEXKpEtZxEqXzLrMgY2UGuaMRpQBAsgTp",
  "key24": "5rTS4bGhfo7Q24aLRid6AgKejZcXJTTrDoE7SaYqV5zYu54SwuA4MwpebDQUjbwkhAggMtfRgCAEKEeCzugpeB8a",
  "key25": "5gTCKYykLfUFjBepGCd32HatSzSruruXVzgbArrVdk9Uoo9L5CtJVGkwwYXuueqQjdDNakSuGuR8Af2ZXAHE5RM5",
  "key26": "5foSZJpynf5RgNNLL7rMgawX4sBT3LSzXnJqrCgiY2XpiDvjCi9LiZWJHiQ9cvMQmAo6oxgNHE1RjctWPNhaE6in",
  "key27": "5NUmiDcSUqhKE33iEiaprg5kgG5tSQZzZjZd4Xu6EhnHHEJMueJGy2LJ6W5qiZH46CuF4Y6JXu1NhgoYiY3bR2Lg",
  "key28": "5WzpvXuGKE1AFCby1ZkfthSdjZXEmav5gdLiRAVaL4bMRaHfrgvAXiYSULJHgg9Hpvdchhbu29zaziTm8KPiG6go",
  "key29": "38RDweSXiQq46bdFjhZvZw4JTCyWAQDFdbmBsmjSzLrQ5HPyPcHaPvSLdB5R26TMSkdkdzp1Wv73kinNv6z9MmV",
  "key30": "2t83PB2MQt7q5zfx9JYvmBMvmCnM3PMBstX5UWy2sCwti6kY6cSN132aKsUfrpAEbJKKLrz16Gyri7WQb8AVez9S"
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
