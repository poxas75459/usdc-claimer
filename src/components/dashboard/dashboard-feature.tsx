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
    "3KmobiHVSwJ54iX4oqzsU6TCcz5xzen8MNas6q4k4jk33XjBPzDvbe7ftfPGvoEfG72L8dBLmMLkxfJdN2rTnWwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWKjSxd6aVNauWYEBQLU8mCKXL1Aih6JTCTogHpJieq3f8JeJ1aVQu2dG39pCkPXHVWJmYEqrkPFZ5jLuhNHS5e",
  "key1": "4xAAJrqVGawue8iP38tZ6h6mKuu5zyXJzvD58tfxZWTHTVDvnyfkJH1zez1toMZ1A1qepSj2ppBtWquLYw5CUiNZ",
  "key2": "2BqtapMk896i97iqXYgQLTxPgykuP9GErze78rVgjgjvourFwG62Aiu7h7CKhAgboduqfcZbgMxGVCuGdRfAkP25",
  "key3": "2y15W8WYab3LZs1yuPAr8xYg8cUHVgouSs7jrD1tfncbDQvaWNpzc1AN4SyQ5hommribXj97Kx7xNvXHLD8irM9u",
  "key4": "5Ba4AFqVs54J1Pk8RoFzgZgjsNh1VKyaEdWJJcw9VGZfsDQX7XJHggxb8zjfJ4EtmNnYDd71XviT9CMvM49f8g56",
  "key5": "sLJWuEHeEcf6u3seZuGj3k3dJvhBQ1s3unjf2iYzSckxioPFNrscnfQKcw187CZuBJ4bhc4438UqEBuDt59DhAc",
  "key6": "4dbG89KVktrzpYe5H5QDpMFdkPoS6kh6wLxdq26yiWk4eXQYSraGBCRy5nPRQ3qA4ZiAknMS7qpu7eCMfn6Zzz1p",
  "key7": "2EUTAwtjAJ949zbvSYSpcMGNEZuFEs8aMFSZzqZSZjPKSWKUueFT65WCkzEKSBPEZqis8hUcSFA1d5QW2pKEXtK6",
  "key8": "6czbbiew9Km64fJGVKR2ExNNnDkRWgDqhcwQtyPGCwvD9iSjMo92UXSzREdengJ4CjnUR5SaqQz8i9xzgUxvt4N",
  "key9": "5CmH2CZPCwqPHuYz3JgyPgp1LxYeiivV32XVKi3EahRJh36YBbx4MNZDjAcHF9d6tCcLe1Rk1ooyh2fBQEnrUebC",
  "key10": "4M6wckEi47q91bxegYFtbShtXQkEf3KoRh1ApksHNfTct77xwAYFrnAb9zm4QFjqJsVPgiUjMWWaHGhGXWD5zdXh",
  "key11": "2zNrEbtvxfWDtuZRvtf2bwNoCtHDJfopnmjvpGKzSW43oYQ9znQCSwa3uZL1Hp9hbiRx6mNBhZ5in8JpxLMQj3Uh",
  "key12": "zENc6sTbjCbQBu2Zow4VUbXzpySsMdc1DdC2MvsdZbFjGXBMEZD1aFBbY3XHw4bRxtqSsGNd5Lu5ywhktFmmtht",
  "key13": "vMYREqDwCWPBd9hZxPabTuk9nNE4kG6ixgdd7e5YCGQaaHFkcaJttAMiRn5WEmUfnrDFZ7ePSdGDMYdB8NqVT4e",
  "key14": "hUu1y82gbYgpX7FnDtyoXLy4A6eUHPAsZN8EAvW5WYuief4y3w6AUBFbhAAaHxk62J5MxNstKgRwtVzfvfyAjen",
  "key15": "bNYzngDjXkEiPESKrVsk2tdF2k7ijCk4rz1ZKSf59RagPeJuC644zHXmP8EsiKoSq4cRisURJFNtRFYGtqdpzMU",
  "key16": "4S6Ux3zZs9rcyyFWAkPY3EFFEwwabviDYmWtyz19Dw44SBnBvWiHohgrJcp99ZY2AM3VrVj5S1jTCkBtB4dxyLGy",
  "key17": "5LaJ438A1xiVAbQSwxy3iYraxpp9S7vFZzvHyrPgDLthcZaE5xxuRCStciJHzBweah12Lth3NEK7TqRXc9NpDem2",
  "key18": "4Z9fDeecmp8v3gsxjyPXhwuQEkg74CifBxSujiFoJXTu8TM3ce3cixZwejourB5i7WL7JWBuWW8vuPXD6aNZnrAD",
  "key19": "3vXzGBZzkrKhAfr3Hf4jExJ1sPXRZUtUw1cKptRYWqRFXqAA8GGTvzdjqV2AwyECtYJDPU7Pr8j6scGaNheaEshs",
  "key20": "53CX5aGBg8DuQUzscBSRcDyVh9ncLiUijY7vEiC7Zx5QPfbr29iZBobCzHMwvoWLN7ceg5YHwcGzAYjSqYtcSqNw",
  "key21": "7PDq7FbkPRYEyrT8B4FKynHBHazUhnVjFXwaw2itmBKKuHjbb3aHjWKnF3Q7oyVWauUnR9XGArrAtHUz3ZvBSAN",
  "key22": "3YwaCuSdU7wJQnQxFTYAmJLetRpbu5MhfMFywXoLSEnZuUjCS3HTiN6GD2JKkGrR2xAomNK3bShzNszLVAKd2o1J",
  "key23": "BaZnZxQoLdMbsX7TGKL5bBDhnGWYnD7uZAqYrccxxd1KtCosCiBvprvoTyaXVGGVJHmUPhffxW5qPn3WALL1NFq",
  "key24": "Djae4668pFcfspk1L6qKAfEm6yqvoVNbGzuvgVbdZ2YwTTjNY7wHh8n9ga4j9cncbVfWwfqFnf2JHSBpaRFufiQ",
  "key25": "Nx3xkmZvcwEYHYEo4v38NonSPf6kTAUP7XDjeFFNwMLS1a2A8r7UhLY7fjE2KzmxxNcHyCEkPvfEvhcdPNG6GiP",
  "key26": "2cA3ArVx8Suo9jS2Xj2eJti64trwEv1MpP8jKRDuv8hD47sZGbKGiQYiYmqufKbNA6GTUXyA51XL5RmEbnzepy6V",
  "key27": "5J59EHwzYdT4fqgtLquxbmQZ3V61NGB5KQRqkxBkE1b5TwsuhGHR9kuRsRw2uKDDEAG3b1YxFEy2YHc7LDejwBRx",
  "key28": "2q5cWhQcCnTuh6zU5NN2SuxJ77nRRM7JmfWvSjuhgCAuosa3UdDXekf1wyKVd765Hmb1TmBEk6dfhCNGCVtC1N6t",
  "key29": "4jnMXSM1yxANQrrjRK3kSu3Q4mDTB1uEScwPX4cTW76gSdpdtdVQ4xmp4YFHH7H2Gj1xMPyKwYQBJdqF7xAKvxcj",
  "key30": "53EGuuo2msE1Zx2UWsFKNmeuD1ZTUa8U43K5vaskFBZxi1eJHSzfy2piTPBZM75URzVtio3DZHcZMrDBKdH1ECfZ",
  "key31": "3hHK9Gda6dseSXtR5Dt5SWaNBLadNV9Njp1rHTf6HSe6JsRReqThrzugvfcBYskGCdxv1x8DNeHyTHdTEiphz4re",
  "key32": "54k34pHz1c8d9nJW2knXE1Jop56G5BS6jvoMerLYk3pghjaedp9ThMerqbcgwFX5qpAQd1SqzgzafBAT4SrdckdN",
  "key33": "4hcziCJxasyEsoarZMWzRUjqBT6HAVUT27Di2UxKgusJDAcwpdhMKJTAGMpQVBuwctXb9A3N8FUSWucB8NtTFwiG",
  "key34": "3JcPYNz1esFiMrHScSC1ZLrB8uGQG8va18haLFgW3dwXrDMJ5vmfBWMuZBtVKSjU543ZEq34snFWTi3HZ4TwzfJ5",
  "key35": "3NfELh3Y8ebvGSHH7rreTDE8eisD1zPTihSXw5HJKpYZSMxyzom442tVvC4KvJxVWfaZjNQQDNpzWtwzTAMsHQEK",
  "key36": "TAa9D2xfcQGvLGX8QSWdnr8H3jxDVcY61vDYmdedzim6chYc4VM8rkmcvLVEZot21ULVsMDAV1AjNSz1DwQmj8p",
  "key37": "2hP58XJ6zARffDdJq6xFuSjoGf8NarjaYhggkHKXE7ez84HLq8J9y5LgXGZbm3czrGJPTBcjD1ywRRihhDGzYCA",
  "key38": "2L1Z8xZyR1ErJYHDT1Yamwh41LYZjnCHHuGMXB9U8HWuMFndBNJPhpJN2gmU6iXzhNr24YHUwsyA6JxhKudboubj",
  "key39": "4exeS9ZtTTsASxNU4eYXLvVXudUa3bhwyopgmHnMNYV2MYXkrsjxnQUoy1GNt4hTbENQNqRXMbpVK51NGJnhUEiV",
  "key40": "PiEvWJb8vuRMozeCzaM6fnnNFSctnxApAZ5iCQoHQ79kS6csptiPH8gv2QodSpWW1g3a3Bs9L7x9paE4qL3N71n",
  "key41": "4acg9dmpR7E3uTdjjQpkawDNF5HgwTJSaFmdvqrM3aiRL3xjLGgMMeHxNNPVDZ6rFWSpGCeV2uUK9GJ78tUZqqwq",
  "key42": "4xhNxsi11R1mgXVmUimAYVwBessbs7N4xeSNfw87eCtn44njnb4zSgKE9g3bvAGmcyw3hQpaEs4jurtjDrUaSNDK",
  "key43": "65J31mWAVTipDXoTbHsxmauZSKJHiPNnjWf33goea2QGz1uQcVbtCZrGmTavhBbpP79Aj7sFh41joWyr8kHz4KAC",
  "key44": "adWwKQW45ZdsCF2fYTFNnWPqqswhua5Ye3MVQtSPAPsDjvmw6w4PsccUVkU4zibJQueRgJVP4xtgfnmrCfT9epT",
  "key45": "5mSDvAfBujWL1gUGy4vZhWGifeRTkkhy4714RQhACa8n2NdVJVWvVoTfrXeAUt7jCdTjfmqrasJnGgkGm3KBijju",
  "key46": "5N7HcZQnyHT1VdAKobGCmdWoVQBR6iFeDo1kNoJNDjQmDtydvSQPcm2mjJtcToUeheBcxFM8r4mRmjdJMmNB975V"
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
