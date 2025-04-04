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
    "5i3PqknTszw8HRpU8C45BtzL8M8UPTN38w6fXcT6ApFTVz9KkN53UFU9D9n92Jm5xEE9Ezx4ZexWXAiiHYNKDgkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sakcqUywViLZjV9sTu2HhhEwf3thzXxQHNE13w3LVcToDWAkwWtH3hNiWRtujJCgKAaJdDchcTpxm44QP2swuwh",
  "key1": "4kzMNEVu1PhqMjZT8pUy2p7bRSWU6twdcsFGxRZWhaTJb64FE7pNvjiQ7CSRdUYf9rrgWP7cAdMQmr1GauBBB8bW",
  "key2": "3WVtQ3SXjCK7yxGZj95hEUDYBKxApCHfSp8hwY8Eq5P7j3rmKoNwY8iXkcCQumJVpTjZh4BPse1YZKhz1tiMax2o",
  "key3": "28heN16ZZGe6LCy7fNZmtR8Ms8uQADp9QDADHpYX1xh81FZY75UsCiJ9sxB8b5fUda3dGtnKTDjqz7pZmMhZcp7E",
  "key4": "3etmir9svJnjNLjHonbAQVoPaqzKmGrTbA4qQyHHCQqsS6drFCKNq7AvG1J38sxpgprMGX53wkxhLuV6B3Hg4F9S",
  "key5": "j4DdnxJ7VjT1mW3XBuY5GUbHsby29gLEuoUtHaszpzi1JUqSfFgAoLTPCEskcp4yd9a15bzM923p4mCYyWUK7pz",
  "key6": "48gB1299HDbQT9YR717ePGFLpkELbbSfTZoAwxYbv9DUs3GABVLL6uqD8RyFeibbbcwBhNiq8GSmtnUxj512QYo2",
  "key7": "3Lcg75fo2G2ucZBzhu9auAN69LoV4S8BeVesEKJNwfMesWCEPvWvdmDkA9x8cQMuWrHaTAF3UtqkrkkrcjyEG2fk",
  "key8": "4rWzDTnwbQTVWLTC1E3rR2HScDFcyAQJjE5QeGDFofvxuE9emjXiYMTTjV4reFchDunhai19B9SGNMjiHTLAmx2K",
  "key9": "63vaDCi9svE9bKArcmW9CxoKtUJdAyeaLC57cmyoTtarpPEUhLjE9zi1wiKfYSfWrifhtAkyDYCRUXUA1yovGCkJ",
  "key10": "2ggXccW4T4WakQiVQohYz8RNJ7FQBkgNaebWXpMAPm7kn2GRZxqnNGuYpux3PYHFNRbdNu9FtHt6kCoem6YBUTab",
  "key11": "66nF12gdTtJqC9AWRWPv82iYgf9iRc8zcUmXTvzEeeVnoMWMYXYP3MVQHXWr3NUDiDU24LTuPT7U3D7TL39PXEzw",
  "key12": "4FacMpx9X5Qr4CByGD8RVbyS4A67b3xhDGkQ4dyK9CZ9Ua6RJxaJYzW7yoJ47xSGWNCAUSWwrTHymr2BEjUMuEoC",
  "key13": "E4n6dbMsdM5ZRaaYmkdrUT4EAhUzmSSoiDGphBosNconCkvA9PWSUgJzPyyRVmvSsEn53EyFP7z76oTJMdfgApv",
  "key14": "3wC6vgqKSBNAx1HkTDdcyE737aiqvQxvteUSr6Ysi5VnRribbKqiQ5TsuSzCnL1grY566cBjh8zEcmd79JppeQVK",
  "key15": "5bZBKWYmc7YTipFmfuqqeS1wYm94dYy2YjZkLaBEgDXfJADfMeS6xNaNHh249rzaXZEc8b8kxTovSBphRKusSFLF",
  "key16": "2RoPzgW65PA8y7PGkPYvoBVZeH5B7G6f5pf1ZuDSvUX1CbCUuzW9dRUAtaV5T9sqnKgyKyjmGREZqobZMuYpoGqG",
  "key17": "5N8w9vnR9zzXRvWGpS2pVdPvjvknqkHHj2V8eLTjNN6MbvupqgVnN4cuhPwZuUZKfRqNtfqL2ogAftkbUZadhduj",
  "key18": "61fkAJLxR1bFep3FDgsaonpLxN6XsP3Xjz7eS79TSVyRoKjHgw63mpEjqnh2DyUeJwE9AX61ub8gnWwwuN3iqDzj",
  "key19": "5RDBw1iKJVQtCcBsJN2ZCRaFWUX7Rf9DXgNkj8YbYkDRzT3pyfxVXJUWaKZqboX7jXynKGpm1rH81W1B2gp5vGZe",
  "key20": "2VkpEdQAUUYbsH9kw8PSf72J1Jgrqgi2NUp5VTGoB5P1EGqQ2i8g6gN68fh9ECyjuGMkng9dTZpZkQqwHuFk8QP2",
  "key21": "3hdZK3DU7PkiXVwHzQCXuoMqfPzHnJzrJ62KkBt286APSWD4eeNrpPzxsHPbde7mveXNWuTuMiCt9s1QMQWSooLt",
  "key22": "BoRBBt2g5AyEcQgMvMCjGywizvZyzzF3BzK3PWPC2udomdVHVuRW9k69C3YhfsxgLtDD5365r9ypdL5MeGd7sWr",
  "key23": "4nnMoFxVUEy2keShGUZ3pJDLi2FAtbNrPidyisaaDNwWQUE1GfYd6b79x27zkxXbui9GRBrWvP2jnRVMuT1kYhBk",
  "key24": "3yFPxoiGqDb6z8Q2rPNtWvuGNoRRdbvqyiczeTDDebT9YKxmUDjfTyt4LRpdy3mrEWnP4D1LVPxqrALnXL8wvLj8",
  "key25": "6AmJy5QBSUe4W8oJsp81BrcGSbFbNHfBj2BMt5RnDX69gXWzGnzftKBuymKsuh1w22Hf3jB5Z3uSAkdnesv2Mzg"
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
