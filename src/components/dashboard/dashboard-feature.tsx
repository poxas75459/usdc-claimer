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
    "2GNhSxyksUVFwQk8dhLeg3EUDyAywYQPwe4Ac66AcaZVgZibZqg9AR4SeEMDQYzcphLFCEzKEx8zs8KiYRH8vHCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhG3dTnxwX9ybDZ9P6utJrDhx8ukg3JPfvWVGmhc6dyLJ2ccHgmgckyrxUu1H69mDH2R1vTn83QJrzY88ZNkxNC",
  "key1": "5FZ3j4Jbgrgy7aS3m5Md4wHjFgToDosEbGyo8NmdWngXGoZ9bNtT457WA3Wg8byzny1CfAJMpmctiomj95NTrZJV",
  "key2": "2gMRXqoVY7FNMP5kAztUiVw4psraXgymvNWW3j2rpm8MCMVThVCkhQR9VhvgbxHQL2bko4BmvyU1MhGaooUK1FLP",
  "key3": "kyxXMxYH3Lx1jxsSQSyoFFMVn1Q7gkvxFWEwSuF6BauuGEDWAdp18nXVD6sGhc6UiW2hgDMzsWyyDuhVvW9noQ7",
  "key4": "5rxhq6ziisNWFvWKsECpudssETSNAvCi5DZnejnh1DMJpGJWRz5XMRTTbBQj33wxz9aUHi4qS9rrcUHn2ZmiHaQU",
  "key5": "JxTXaHnTDnePxJR6MnnCRoeTQFSxvMNuqVB7jqjWQ2nrSFG1JyuAqWTLDbxjn6SsiCrcQxMLCUSFtKhADWwUEWF",
  "key6": "4z3BJigrPGoaNoHKSFftcVirUab6w7gKZWWvXaRULC1SneVSs3ba42BwY6HWoio5TtssfgQf7QS99eLiDHQAN37U",
  "key7": "4h9N4bhuuwiRqck41UXYXTxgnhCr3AhLsGCiKSe1JeKj1UGYKSNh55JZP1y887fswkYbzUYaxPGuPFBaxVy4fuUo",
  "key8": "2qnVX4K6mTVeujc9kTKmQRxuhwxT8LiMLQw8ynMijpfNju7TpsicmVYuoqRRvMHvbeUd4sjZ74aG38sGHy75iihg",
  "key9": "oFmK5smDqtsP5FTppXZRr2RwtCBuGDn5Cy3eT4ir5QKjX8VoyJvt4whWXkTz9ZKDBeNQMgFrkUubtE16Z2KMm5W",
  "key10": "25JWbjHjE3uou4xaUDfXCZwDLvJfuLkVEaCQCiCJwAFQCnoKsDHpeE3tLCQZeqr5EFjcpFs4bwU1eika2pN6zKDr",
  "key11": "66nNJQKBptqkuwefLkfmXMa19SXRxEsEYts4fBnSuBVgmzDtyYkVAQRVb8UDee7B87dHQFtzXihg9jFXnyfVVe5d",
  "key12": "38KApADSQT4FUKLJ6VUS3ybLN3yvhLccspRs9RDgQFzLU771q9LwFDsA3kcp5NsJXdcHDdk2ByCWNDBVoV6JzoV9",
  "key13": "5dvTq2KD3SLFtf9gmjbRkwQ3nAf7n3CN85ANZNLRFqw2T3mD11xDuYcRDxB51GtiE8i56cH3MohiHHj3mxX12hPs",
  "key14": "3hTWQCjVxpJshUkYJnpdrCcifqD7dyWSoZwTPRDax2EZPjVtPtV4pmM5VmpCpzS1phKfkoU49bTrMUv7smvo2Lap",
  "key15": "2VnGgGGFA6J6VDGNcEvsjzcJXHrB5xDKHpHFWygAPnthEftpY2Q186edVcjEKVsPFtDeXgCWkqwPx2J4Sva7zwWU",
  "key16": "5E8KPCQzxocBGUSxSeNRZsMvJ6mELG8asPJyitp6vdEqHxRigHTWe9T2PVpHxLEh8g9DNu7xYsaRn6dXQBCBus1L",
  "key17": "4EkPoMvjyeDAeTQKi3oq9G9MT51MVVTVvW63uvNHhrtu14Kg3ySer73ETWEXXQpGYvZCCTrSGQFKzoTj1Z56LLyW",
  "key18": "5yHbaLXkDd2hWWsJ8ery4Y97JyYgSAmPuVRbW3hNQ3rhXT3DZW2QzmteUjA9f9PBPLaBgP5wgFN5NzHaahpMzdHj",
  "key19": "3fwbWX8WyuoP5KVAMLkgxeDmeB2VTd95ceBHgtS44deHa7QMbeFbgaL68dEd5GTXx6wi2x4Yf1ifjdTDnvXBEhCu",
  "key20": "eVNa49fT3FeyFptzWcaJkzqnafe4D1gR7KLHyffUESUgu1hzPSsprhACV5xrzYBGGXqtB8o8RcWexkDDowt542e",
  "key21": "5mEFSW9CGiPPvUm9tV6xoiYbKdHHZrxp84rFDJZL67dEbgTr57HfAoD49CgsmA5EeJhEZJu9NnxQi8n7dz74VZcY",
  "key22": "5JRoiJAxiNxSyinY1vZ7EsT7bGb7gmtwWp2T8bYGqZBKSxtym8EWswLA8Asx3oFx6gRsXt7Xun5PCTwk25bVb2eq",
  "key23": "5ngWE5Hu6iTkjb9gZ1KY6TLXtbLSFe3ZYxvD1Lp7RVsv2tYpKxoBU9J8nkodeLNhLijekG5zaU9H6pFXiSsMWzoE",
  "key24": "4hpkhgjwCKfpRsNziyQ4mGeHKd4xmCQBY4t696pK3o1Y61ZabLoLCfzRnM4jZjnL2ozbUBM2xeqb5uXB9NtkivML",
  "key25": "3SkkDEMN9wX5zRDwMTMkdravhNnWuUVYKnjDq6NHLNeWGsDfjRu8MTgP3g9y6Vo93ckpQ7oPbFqp7CXHCRGyfWsU",
  "key26": "BdmcF81JYKU9w2dZ1j5uf1txLv7HRceYM6j6fi5wWY3UthRTisj6S6uEKzZkiyzqogjU8mBUH41SxuvhtNV6TCM",
  "key27": "4UZkSxt3CHc5VG8euLCbxCeBdGDddQzyZCX1nmK9ZjyPjpiXku4RfBtw1xTBF8fL6LA4NYStEtVL4PhGM9sbLcdh",
  "key28": "2gZ8XmneaY3xiN7WR8vWyj9h6ETBgz2qWfCVzBByqUnBNdaRyqYe38GPgqcTLfUN7VG2FAtmKaAEPwWkCnfcg4tx",
  "key29": "4D9WVYPZ2AmUixZHtcNXfcmRyNnR2DG8Ja2jsV1XRA6jBc7S4w42ZSiAAcdzheG6G2pFwWZp1Fjv4ztm4CLaU3ZY",
  "key30": "2vUnC7hRpA2SMi25jeXNcSgKwxaZCvTxhzsm43fsAQY67YfA9QXVBtWAjELy9UQSFy7qPrzZV7mVkooGE3e6iz7A",
  "key31": "4LZAYDh5QAxjkCw5wnvBtyiQ5moLb5nNfueDcNnRcvdXjdnZgBTRk5FoHyQ1zToYec9vDwDXkuXQ76vjXosdSXHW",
  "key32": "3woVSXCcCSQ4rpJwtP5Pxsa9Uvjsr97onRf5UYKCnd6jJ6PZh6tCVBbSakzWnbYH8fx6haCBKAjgSiSU67o3BR8L",
  "key33": "3UYCQ78PxhgtvbR6ZkZfwxRBUeFHqCuuAS7jziHDEa8Ww5Ko1fKsQ382YDiW3Rphg7PRVfRSYUNyHh79fMqZCkzJ",
  "key34": "4yt8H9EfwYiu4iAPWFCwwT2QkBNCCAUjDeThBhoRdZXezqQ9TbF29MpHAxErWDkmyHoueCoJpMQ2b3Uv7sJz6nQ3"
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
