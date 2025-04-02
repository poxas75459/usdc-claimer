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
    "5p1EgHLEEXruScdiFdQU4z29obRFzUwpYbo2qvhxkuUtCzd5DL6RCQ97mx9gapGRnzSmzkzsE21wBKWpznKvKLUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h18Hpcz54xY3se9vr9boygucMAmxbwY4dksJwXGuDw98dAy3FKhByL1yAMnfEkkzTaa99zuRDvPXEk8CWxLGt98",
  "key1": "49P3VDuyeNkvf8pcyidowCrMbkcr3tqgUb6QXmvCXDaWvpS78sRTniN1HTwoszbjDBc3dLasGc4WWqmGv9HtwAas",
  "key2": "64hqtchmg1Mm88aEFSGBW28AjkV2e6YHBVWLY28TSBN3P8VKudsgKj8JmxHm9x7qijpB5PRUZyU3e6Eap6r2dD1K",
  "key3": "QsWJogjwuDvXecNjEWgdSUQZkNoyGkVfVcjvJPVMCmHpRQp32xV9rbRPfS9aWCRLmF9c2EknCaUzX3BZihHN7vq",
  "key4": "Bui4Dwh8RdzhVqjNVfHSF1PyVubMVQRVfP56k7WdrMupbzbRPGAXmD1FUGX2vkk1dfzodibode4KRW7AgYEbhNV",
  "key5": "h82ki8r4tgU52r4tKjMpfn1ZJaoVJswmXBVMLqGH65mTcn4z8RFM4m9fR5LCNt2GXFaqWtkSDsBNsEAHhkUeCku",
  "key6": "22tdVu6fZyvnxYcSbdEie5PJpJ8TCFTYb4JErT7xRS11zRLYQVskeoox16AzhE81HSD5hPXRcmiTbbt6cJrdwQwj",
  "key7": "5vTzNniv47coesyWjoMTFKxXABLPbYzDhJxAdVM8wekrdLMjZ7RLC1VjzVvPzfdorVt3dduipQxjTuxEE9j43gG",
  "key8": "26DvpNG2Z2kupPnCZUPEwW5wDjLNYcZHtdKrciAa8GA41hqrJSTm7Y1E6TfT66TPs3Fzu3uisPzkZMq8tNH9qjT5",
  "key9": "3D78diT98oWw3zbbxpddBHQ6n3hBHtnJUuNgphxLHdzCz7yywWRzDRNnNKKQtG16HhF2uqeDnuK1UwCeismBnbdj",
  "key10": "5nPxxUE9XNmexexhrhpunzxbMELimiR3LANKosrevZKDUSSuQbWUs6meSYFYHBR58x97KCVvRNqkSufLBas6NjMj",
  "key11": "U36u3GBPnwHJyZBsJWjaCx221wsgUqNcxSv2C1hegbMDbzJxaCAGPFVQRFyUjSJCKzwRPwRwAGUNVKAh5d1RmGT",
  "key12": "4RubWK8ihrqJSDbpBfrmo1vACmSF4BGkbZA2gzgvXB5Brkvt5fLjWcWoD1worDZC8LXbX6k5TUURjoohJi8B3PnE",
  "key13": "4ttyfvQ7TQ7PXbYPoenHqJjTcQVCJwQDwwD5BhJDFFVyMEARu9PutRAm7JjX2wqeV4fBepVt5ipoiu49C8ApoUh1",
  "key14": "3e1MuRtEWrZFdFPcujHP3v7xFFC9bU4JsEs9pd8ZCWBFxwbDjwL8XfA3Yh1wJZ1nLTGFdm5JGaQ47hrd21eqRSfW",
  "key15": "2mmEKo65JojySxqRnLEhcHLwr4CiA4R72CkaushXBdnCvvcDKfQHd7HyGV3MzJ7kruGxoPYADEZeDDUvmGu17ynv",
  "key16": "3wSgGxUqBK5n85sM3UHGaZGRDUzQQMoijs3WH56u2qLVg6iwM2JkbNg1WeSU7MMjcd3uJvtEAxymzMLAK7h5gvk",
  "key17": "YNL98McfED7GS3VeiVFjVGrGkCjj72LeZVaFbwr9GyWcNDpLXWTFZHHDNbyXNxHGh2ojc7bYMBG9pmTAchraEw7",
  "key18": "3aq8JjsbgbJUd47taxY4ynTRM4ivpxfe6LNkuk2Zd2ANJLPMFHpCGnp2MeB6UVovuHByMWapj3LRsM7JEBr1hScT",
  "key19": "4sf547cxY5Q4YUeHhdX92zmPa6nS8oSTgUdsrhVt9qus19UN7fQqizQnTtuDHcMoyzP8qceeFKnNMEfZvUFudyVG",
  "key20": "2VLqNkKVTJh4Rwzd8w3uHszEnDP7W8ZCZytFJ8o7dmNkLsvKEHT83kDjyXzRTGPTao1xT3cLz5XP4Ldoc6ho1vQT",
  "key21": "hVp7VNg32kmxSXx3YGccDzhNzU2uiLzVt5BRhaBBRKQUJebovpBQWRZvvahncYRWbtncU6x3P3ypFMX2tde2axY",
  "key22": "jVeJ9DWRxXFvZMfRVLLSpeHLNSK7K9FABjfpwXYcCiSUDKDjD62xcuDKNaSu3TjRPQMNPTWoEn5xy537eoahfoo",
  "key23": "5JeuJhphj19ux97tq4CzFk7k6LrcxYGJhPqBFdabTmdKMdyFkTm6QXU2w65NibhcwP18z5RE23ynADcEtDvXqmjT",
  "key24": "27F3fZyr6xHTUAwcvfDZPExt5EGP64vTYadxuXtYwgy9fYe2icNgCfD8Shibi8A1HbSFbhBcM2hR1SmbM4mrrGqh",
  "key25": "3UQhYJ4yFMTBGQ1AgAV5DDV2kmanwhaeQRUr68oxrWr15dwMDfUbqdcnsXzWjC4LuP7Ee8PQm2B9HSvcy3pistph",
  "key26": "394vuG4qCvWELnpPDxiXxRjJfy9aiHkegyYSeUYwrAjChrG6L249kEy4PfExAHsrU3u36L7uCqk8JXcMaPpgbyC6",
  "key27": "2SwLCdj4E4d2PUs7cafx6objAxqJikgKwkxPB5mkJEctbKNojgNRHmCm24A3gEaBJhGpcPg2U2r1UpyHwM5ojQ1C",
  "key28": "4UvXveZ43bLReVypTNbvPsL9izwtmD2CgdybxE1T9gT3YunLCuz19K3cyUrFE8eFfMi5VCz2nxSHYxCmPYLfdGHi",
  "key29": "2oP8KZbTVkeyeAuzRBKofkNsuc7UBcUymRMACxX6hRn6GBBFiThwaxhxTDBsj2EL6RQgWWcy1ZJqnzRdtUf2aoZf",
  "key30": "9XmdkyVzVnLvk4vzyKYugquadNE41QWgjMupPE8hVXnvLeXQ57D2LcVdniqDoBo27xfrBw4dCNpXSUM1HpyMipY",
  "key31": "2iKoBsLAmX9xXFzxxjYfXXCYaAG2NvEPxfKwZUYA2wa6yzQKwohqsag88r49P5UZV4C9fJFCAgK6TCcPTVk9PA4U",
  "key32": "5yqpU4PGTWPbhTL53b8RFdspHJTUybVGFw5h16YcyksAxFRGmcoUHnaJ5LpPXGe8cSnyYKdxqrY9wFC35qgtzYro",
  "key33": "3MvrFHAM8unXrHUhDmaRDiAeLS4nVz9Li1RWNJgWzy8e2hCn299TVRRvYgxWauCFT22ujn9BR4HibPaCBvDLBYg4",
  "key34": "2sJKZW8zqJ24aasS8f4q4Cr2K5R9kaVzsUqmpA95WjNeWEuwGGMDCmaWNUhT86dUdpGxWvAayenDdD7sxcKHFaAJ",
  "key35": "TrS7mJaFpodd1vEgeXsTvuo6SYEqrSsdB4yi4pCPWNqt13qpfGFvMWruBBy6AaY74gcRkuqDvtgrT7r1cC1stYW",
  "key36": "3mADpRsfwzoWu3tUHhCjt7T1X8V8nQxfBUbUkikmMPTUqQuWxYDqAsodhVxUVyJhrj4iVnnJocc5BaCew25VVhUy",
  "key37": "39MdDZGT1dTMrHks56C3YpsKRpg2o3jZKVayH9pK28LjSyc6YqGhNznAMzFQg19KU832gdWabZ73BBLUhEUw8B3A",
  "key38": "3GiCiVdSnu1xxD3VUyR8KToQFYQjPoofV3WDehqjEoUZBir1nKt8ZHDuEDHdTN72gXWrph7zHvSBnEcqqi51kH8h",
  "key39": "Pyd6dbHfg7gHjye5iL3P4ovpyuD5PZgfbJX5wRMheVFEmv4qLxCdRgioY4VEhjMfKF5z18oyYYFDb2brNbVYzc3",
  "key40": "Qb3Jtjsipy1NZWR8sCcVLS4wL5D2dWybXoqtnDaGYxtfS7MrfHQYgZPY4Wdb9knkLXYE518nJPGePjhj81GrdRp",
  "key41": "59uV4vog8dtnmEfke8nVhM3q9gh6jYYxLREGSHVQ4cdndiqUpn87YND7F11TLCb7PNPjN2J129uoeWASmqH5A33q",
  "key42": "5ALvZ2KJAEB45HZR5JsMdpk2s4sDop7TebNNVUvuvJPLLGXdMqDyVAR312zXNPE8DAXZcE6K3NpQ3zKE6ZNcStVx"
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
