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
    "8d2RyeWiBUtkwTmnJJazt2S9i1muvgLV8BimBpedBSRY1Bw6WnShgzVooo125e4A1BxRseK8FmUUddfQotpyRTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZe97Pa5aX2wnZfUDK7CoMWF44Q4Ma29Vz2XWH3HK4nZ2YtbMbFrdSoYzj43r6Lom8L5ykpEcUWxyMP2KCJjhUc",
  "key1": "5TQqgYUcp7QvDtymQbhkCbWVSe7N7ruUgHbSUt3r87iXWKP5ifogLCrY4zGYHrbme7nm32GM4cJhSwhPzxhXoShb",
  "key2": "27aWGKUp6NcS7JDntymno62Cq2FUAw2vTtCbi6SGd6pVy26TdxguSMDr6K8Bur5WdsrnL9xoWsx4DZBATfEXxzjE",
  "key3": "C7TSor8pjue9TjK4YMYSSa4iZ6eQH4q7uoyTiVGF9j8Bxr2vRMiLNYGruTxSxzpQZ7ug7QhVtSLAkn6HTPuZz2Q",
  "key4": "2ZmYiMQWcAj2knuYLh5YV7r5vFr2CCfQRe6DEL2Kk2rp8ucw1LmZkj2UKmhxvtH6MmBVZCQ9dSezpxQdhzTvzDXN",
  "key5": "4KiRUBWSCpurivkhwPsCyXg8PTA61rEVc3fFPh21bsT6sNKKuQztN6a8xjTJHTNN5MNUYmUMDLbEC6UQiKfR5G53",
  "key6": "ckcxUQrFyC91NyqxssHzsn65choUfzfYXapFf5J99F725wn3MrJ3S4W7UGTjhsjE7earDBh3TavmNPTqiBWNCh6",
  "key7": "5ypCn7H3odxjXz6PVFCkmdQB3L276c4X2uppL1cytMRzsBV7dLpbTA7ehPJ8QbBrXWQZpWfmFeQCc3ceFhaso4Yf",
  "key8": "5E3aCeg2qf8NnQdMZNPhhs8PYdCWPPPAHbcKWP54Uv7MV8fViXvZDgfRJ3Xj2sgmpuSRGsGfCbqqSeCuKjP3WctV",
  "key9": "2Ytbbx1tzuRhCFc3evgdWKMQ9dox4GpnHoWeaL9FzHo7GCwNq4rn3fsVayetyjrF3uPLX5GT3tf4xmDSspQecaqn",
  "key10": "43GkhYj4yVGqbjwD27oqk9gAUDtPfgn7j21auTDjo57Pk1A9ezfWrdyrnc6HQnJJvEtTLyNAontDzNr4UmTD8nSb",
  "key11": "5V3er9cpZDMYYovJE8vEKhMMsHMtj8g6KhALsQLYHQ2hpMJPFPZ312D9dLTtqQHVhQ7sTJ1T6V9eLG49UicB6u8f",
  "key12": "56TuS2S5NAVfDxDTWYuNJWRRGqkDsQ2sAGgs1BoouSRY9rTPz493o7nQYnhapjbGXKpRnc14NoRiQ7RHPq64aLfH",
  "key13": "ULxnaD7zUW72eX3V7EVPLd7S7PH3q3V7EXQt51UCdY2weaPjpSBY77SnkPiaTGajUeEyeAp5QnPZRyLsHGh45YN",
  "key14": "4ngQsbUA4SKiNf2QV6LGr8bRbU6JYLvk64bTi4TBhqzABEBoGVViNCtyZFNU99sYbBmhL74dBr7ryGcafK51rMZZ",
  "key15": "4x5H6yvzBj8Tyn4qFfqV9StdEbMgSs44y9aUzN3pHJDrksTGEptLb3mM8cjx6zeFsNhdXLmrYmjD4RXXRvCxBF5",
  "key16": "MobNQkLn9857yjX95nvjrmWocr5aeRZw86hAuaq6uS4DrNHzan7szxK2SXCcTLZhQ9kqghERfr3yyLgSjuecayz",
  "key17": "3yhz9qycGmy6v1Ai6oQ4zAdxqNks1YvVCC1c13fs93eC83XqALepcxMXbHbo15sUnk4WGJFGaiAMNSWSV4Laniyn",
  "key18": "2fFDZr95Z9oPqRFf6yJDhhBpVttU6xXwfT1vXCYhG542wPoHFsVomWpd6AXKfsyZC7eKZY9N5SdS3TrsDFUzMYYg",
  "key19": "JrjBkJb3LSDj5hg76AZdpgk473VfKS59tEt2CgsBbfSZ28TKJARy4ropminugvtbY4UFbmHgxJUKgdMCTGFgeYk",
  "key20": "2cBpM2Sx3qpUDTgmmYeTxfCbAGQgCSErg24qEcntMqQqvFR1x8ZWpWXFPxXs2aiptKW7tLfJdpD7NSnoK4jEFiDw",
  "key21": "38D8kUerUrRGgwWtksSwJQjuFK6DLmK2VMe41oAinp19FsnE6QeFT9a8isaiRuhoWrpEhMiA3hPMfLZGu9BdvqZ8",
  "key22": "3SWsaniamyEavxQpHp3ThckGLXc6T5YYH7TQqviMCTKHp1HKCr4QEzhKzPM34TVmffi1tjLPFxi2NwB1LPVNDs1y",
  "key23": "3k5WVH3zska3d8d77cjM2w7rAGAFLW68dQf6S32GdRrRoRNbeK3kRBoexnDpPu51SaSXNXo12UVVSCQnjGJSoFaz",
  "key24": "5QcuBNp8ckcXUU6UBXhFsKtQKhnBbAe2JARijgw11JQiGVS15BTCmYPMfhgwRT25SsfZgFDdGL6J8qwhwaY5Nt3x",
  "key25": "2NRRz9bDRtpPfGb852yvRWLxhAMoJaVKXcCHBAw4Rmuo7jCBqDDhhHKzTwAXysPD1A8KNPAA2RDRdKJA59twM1Vb",
  "key26": "3j6sA78fwmhTrZvU1vF8Ry5njVo5dMuVeMqViytksjQ5Y6cxbYAfLK3SeHD6z6CEkmLx27QjY4kRMDuBXBoPC41j",
  "key27": "6gsQx7UbkxP4d9bbX7JQeHtihKU4TRh5cbc7hhXEK8Ebo5BxUCneWhnoWkRRid1V6AsHpGGptBeEQrxbtKrEmdQ",
  "key28": "sYU1qBTgsLESQvE1b5enmJFJVEA1rfnDw37FVEBhgFxwAFRpxcLFGhyKV871MZGrje7Bsry5LZCmJgh3BgY6ADF",
  "key29": "4yms3dUXggYVaPJ9LgQ7mynmutUmMX8sKdkBPEdfubgzg1L6phftYozsa3y6XbcRZEjJVQWW4QAoEoyHYMxZb21d",
  "key30": "3bSFHMxRjFShvvYFzNXswzmNoKhB8sJcWZRygwfb3XLhScqo9YNEXPTVLy6qZmGK9z6T1xv6WEgimRFViAb9AU1",
  "key31": "4anhBQSbfWGYgdSZJi7cNdvU1g2BVzqLMEkixaFaF9ntCkBCMsbiSPYffMPM3QSKbWr68be2aCrqPXHYGMCQeL66",
  "key32": "He55nerMz8EheZ6EMjkvTymU8YdiDPBhSBMD4ybFJDfHqjvGgxcaKXaBe8FyPxPwcejpMUFfxin6giKNEvsokXu",
  "key33": "3nx6Fiw7eVWFhrXNP28TqaH4DC6XZo8ygGnBtmDNtUfR3hXba4NX1oaMdNDg4tASxfm1dPmbJQtnpcR2UjraaUQJ",
  "key34": "26hfy7kFWRFGJseoHYz3kVfhxj2KKAGpL1azPE6pgNP8M5AxJMgtgWcsGoTpkhmCTGKvyE9p2HV2a57YiwGtTJE1",
  "key35": "46voxkzGBRUCSJCG5oD637BXEmVYgu9wJDXcE49RKUCT5vzrphXuFiX5WysnEJc81mTYYXibPDuTZarj8PmNpULn"
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
