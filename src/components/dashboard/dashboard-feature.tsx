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
    "434Ktw86ryXLX4e6qWbnpyDr861EiEJUYStdRat1oz8bzFW7aiEEehLqHZPjsUCSorsYJN19V2LV6FBpeXakCnEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cTvawFhQ1QgUEEM7tEzt7bNxwtBtv1r4pDsaQKkDUKUR6KxJq95i5juzYieM2DJ91oVxzhDHFQxTPhZj1TQj249",
  "key1": "4wBpLrKgLUpjq8wT73cWd4v93LL6r3DGj8VnxHQ2ZM15VuBs8LWoGiGgaNEJAKyPEeazumfHu9C5R69MbdgNeqpP",
  "key2": "7mtywQYN8bp3u4t7jUCQt9GcCZeADZp5dosLbaoRh5wAPcVDza8nk3VGcS2HxuPedc7NdfS1X5TGFS6s1RpGGnu",
  "key3": "392D7kftc24JpfzbTqh2n33oqViCjtVJ9C4YVsPwtAEfwNygajqkVuKbFdaf9ZCiqwWCGVo4y9EVE3RXrJDrHbp3",
  "key4": "iYgyyr2w6Be9fvw2qnXvLsndXe9xbUu5k4RoYURdgaKa3YwJfvzqinsoUCZMhWU15o6dZfjEyEoLJ2baHPXh2SF",
  "key5": "5A44PM7mjKDRU75Lx5G4945F4Bxvgax7YSGXNgUEjkQrhKFumTHxSqkRwtUkLbbktXS3R3XJukYqdpctiCTWy8AR",
  "key6": "5APyxc9geRoXGZWaV1G98cqKkwgjpSuAEERCHt2xa3iPGymPYM85movbuzQ8v5DieGkbhgbNgCZcZEkgVxoabAtZ",
  "key7": "4xUu2LJMnHbJngUtFmt31Y5VToAK3J4vBVU25qSApSuHusjJ6CauHXTfqQPiyXcdg5dxj5rMMR3o1Rfjv2omRg4R",
  "key8": "2sYo59RZ2eLtqxMthtEs1cHTFTU156K7vJSKvU19j4cH4dBwv5whqd8G43WYvW2otmw58x16KBPyK8TjdBmddwNs",
  "key9": "4wQEuMVGZvq28UtZHga5guksKKBWn8Gzi9b4fQ9Q1SW4XAqEPiijm471myYhLw81uPyca8ZeSSMWN3fnq5gXy5QW",
  "key10": "8tewNVYK9J5r3vqWADzFNCkMpKgWLksjJLhcU2PoRERKSsftX1txAVDv2dWWHowxr9P5xKv77pKLsQjJFMWFeSU",
  "key11": "2SF1q4SuUcfJDCbrVdaxwCEp7sKeTXtLJkJJvzrte1bUZo28p9ZLDNXbFAniKAAoT1MU6uXnK6eK7hzTB9x2orAM",
  "key12": "5J2G9wdesNnTH1bFL1AxgLcV4zzSUGsbUVo9ih6aqD1bWPhB4G8fsTYbvtB4ZEeduMSKw6T5Nmihg7RvvjTEKzeW",
  "key13": "5TnCZFp8ydmrjCaRzRhxqFnzdVziSvVK2MybgyP7isLeF9QtTnKKmV6GjngZbn78YrJgQaNV2rwQ5eCd3a4LYZib",
  "key14": "jGW9vkgTPLyS7zfxsr8gq6ZZ4XAteDtPQzgymVkcRPi87PmzACWe7hhX7mMRpBPsRhPcf81wopZFUznJn8j3C4p",
  "key15": "3LM7n9Bu37ucHTQne1o7zfmX3HXD67o4CsMvXcuA2sXcrjSJsM3Mf5weJNnYmftJ7UK24X9ueDX3Eeu4hwxFkWvP",
  "key16": "nuywctszV7EXtQKnpJjRtNqpkDTeTU5CPdXAjjpWNhuFCDZ1ZGGuYCQMHD8SRg62kTYYGvDYV5oMpnev51SVaeR",
  "key17": "4DB1BHRqqL6birEHfQ6jT2jAY4MKiDpzMjgcLdg9FqAd173Wqqqsw7z91EmNGachQEw8x9oecjyTAR2tW2EzX1Hv",
  "key18": "3fbVWuq9869eT4PVNDKrWYsYe3M4XoSwjdnDRzMSwrZFYio5dGsbC9PAi6VMZvuJ9EFgMaTQCwcdjJoiHpEuPW3X",
  "key19": "Ftm5ACgESN4QaPgmKArVasCRTGd8gwuBZdujg95WEXjLQyijxbAMHqx83q3smBFzL8enfjsqmfWrgvMYmSqp1bi",
  "key20": "5jFRbUAzG8o2hYqAnd8ECdMCC6edre5KQVguS357Ck1wkq6ExoWqF234SWCYzLGwR3TnaQ1xWrYW7BBoJnJggopY",
  "key21": "4wLkXuGNuWRKyn352wycVfcxVMkerbkjsYbKg21RGgU6RgwmieZentBgVuiLJuM4KJCZa6qnEmf8tTFZB3XNvaKj",
  "key22": "4c6bB2HrDcwg3ac7fMSeLYngdnHDBcWvNZay7z4BqXjPPAR5TG2FJoLbHE7VjXtZu23Tam1sarbLJp8cMf2EryyR",
  "key23": "3HW8BFfeVoFUnVQnFEEmscjuXH4gvK6Hp8SqpfSu4imawme91oP71pqZ4kJctd8ZrdKkfLGVRHWi6igUkx3AbrPn",
  "key24": "2Uwk4znwcjJ6fcRiVcR4FLwXSAU46AJHzbSW8gxpir586LGCTpEJiEhgkDpPWtt1GF7mA2n5ezABMHNEU7viPWts",
  "key25": "4K78rmMzGgu9RoqT6JQ4dh3QyJFJNUHWx5mXAAr1HfcKDqiwe9ekswQUHivqYgYJ3dBoDDmgarBQLVX21tYWzxzJ",
  "key26": "28V7N5dXZaswf7YcMFipmS2xGA3JWh5Hxri7ioMJfEgNXJyvssKjZzXxq6fvVUseTSvLzrNU6kN77uyYK7juscY3",
  "key27": "2xss73Mbq8UVxeEeWpbK7WGeQ9CbJJGio1urtCyB2kMvLAAJSFyfx3gKrzyZrHKooReUcwV6Z3AUucDD6Y8GsfV1",
  "key28": "48RqevUDj6ZiGVCcbGaCmTAGFHBfPrQYMwgHdFjrsmmdFdWpV6fuoyJSpqfx9M5vHDZP9WXMsBfUQmGtnPJUktWV",
  "key29": "4u4xY8z4EeiL4dBBgUf5pFBNZaPah9zCd7huPMLoL6JWMPh3VZNVFWyPyWHGfoXycVyoYNT9FjMUNRY3btVximJn",
  "key30": "34iXm3tLdxaEU6eHR95ZqKdicaTSpvHPsnpUpwxm7wwxJSXFJ5oPBG36MeWiwtXMWSwqGGfhxBJAT7oLzJy9hcZk",
  "key31": "uMaiKqHM7rs7A1ERX5qLgDZErH1UQi8p1D2bJ81EyBb7Qk4TXQwP73m4tg1iSJpmkGK7mK2MEa2BzibEegTUHvC",
  "key32": "2EpdQtBducXhqmjhez7iM6ENP8sQCGCDHmHrbXYy82sT5gwMV9zE1gEjpCjJ3aqnEcXogoHxA6Vzf5FCD556zBQN"
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
