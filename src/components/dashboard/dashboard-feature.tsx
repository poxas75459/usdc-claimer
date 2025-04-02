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
    "34dJj689dUedbU7pdVmaqW2CdCqmB4C9zwtvtvXrXNVrFVw1Z59bgRhZRG1pP6Zi7ufEYTRfKy8WaF386kuN1rMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34M592VBB83ex3TfojJ2xKA1S9mHRELUVHViam243groYv7wVKWNpsNVAXmZp4ue6yo1de7M2bnTx9EcQWrdoU4j",
  "key1": "3R9Ch4Hd8FnYx11CcEtpCvXT1YyMdo6AjDwupszYmRc1zuRRJz7jv9jQqwTFYPToCZWojmF8dVdsZhWmnJxWkntu",
  "key2": "27hbwGjhgQ53VVRpHe1ohsvhaQCsVaGxkp22HWwxutvvHwYuZ7Gd2n1LC9Dmgr9uujW4Qy8qgy1XAehtpsGWFDyf",
  "key3": "3D2EGEvxd1bZjztpSNPfKsnn3udH8UTaA9yojkvpPq6sjGCCv3dgktU157sTZE2Lq2SUFBufpD11dutcP3RUjXiq",
  "key4": "Rgv3xxs1rxWT2obSEsyXis3reLN2u9pqHbTvEywhafQFiRJXsJZ6pWA85EBq9pjmGmhGLfPFHaUzwBBF6qNPFcQ",
  "key5": "3cwgA3HrdVL9iQFBj5M42YwSLPeEs1nQ5ba417FcFnrbd6PkBY5Enw1d4sxFXCvVpwr34BUbpJq4iawdSBdDayXr",
  "key6": "2veL9ZQ9sKAEnc2ktfJQDu3cxwi66Bip76DPnnzL8MkaYtaQA6hD85iTb651UWfiutEHiA6EnpJXz39Vr5S9Rz6e",
  "key7": "5dBPh32npBEawAG2uUi5R5isdF4bXTQxmZypMuz1JGVoSdtb4pn7R3SMdK1TbWN3GhZZWAyYyVAFeAh3taALaNde",
  "key8": "3SaxzL881L1gUwGSksaLDGvmMNU1chPnV42FX3a9puNnEb6JTmmuc9WBMJ1bHRajzNmenpmrh7pdewDFGHz4ZAKQ",
  "key9": "44QoX6pc3rojDKWf3e8hAbJRXn53TtYiZTML7nJdqjLv3oaGRcPFYXdo7M4QGRrra6LDb2Ahg3USdDjh9THMq4Bx",
  "key10": "3TZKPwai7J4jrSBtD6Cyb7RRimPGtDgEwiYYng6sCrZbsd7fj3Dknsoa2KVvZtipncwFQM7v3nryEvx7r8sEc7oD",
  "key11": "28kuLSZcQLkU5m6rnjQ8Luh5w8P8duu2Aoi9qnLyqYyivyerE9Q9zScme5o2uwo9Tgmbv14m3yCgo3DtcEmYy6uD",
  "key12": "iLpcLxfZv3Ga2hDgPctsUs6codT4gCi8Tc74HSjZapbezEDcd6XeSTe6gTYeM68cyNkjPQGcquXkxBWeWCWpABa",
  "key13": "2UyPn4YwutzY194X9jJD7fgR2YGVEhjtpjBERTkPnBtfcExVmHr5bCMpfLuciNRBhvGMVhoW1ZfLGG5urXK2WHFL",
  "key14": "3XT2phz9Qnvkvtufj9oByp9FHZSGACCDLFqFvGzWwn9niebh7ipxXY6Vtw4yR6MgXPMGN9DPtyvweRUmniJxVzg8",
  "key15": "4JwxYmXPz2cbuZKiN4DDszMURhrccbTVejtoBCWSQGz59T6jTU7V5yy6xcnbXU8SoEpZRCZTAw5rSeeGU9dJbkzX",
  "key16": "4QFvELQiyDEWvSBAkXWonLWpEBttxrFqZKDdkRFceWtDfTgcwPRwSLVMuguP4zyG3BC4D6zV7PFpR8skSfPqfqaX",
  "key17": "4m4oyXCnbrArVPsfwcsfFf7LYSQy3Eu3ZaBuzTGKRDzoExNAUNERrjcJZaQPgPsifjpu9ej1peqGk9M2xrTTquR6",
  "key18": "4dB7AQ1iKe8PaVb2AzxTGdVTjvRek24pXKZchp8yofoHVZa2UoV8XmKCiEHaq2BPLtQu3kgjVGa35S6bfrz3XhnF",
  "key19": "4ZLHdqBeQ5kZVBBw8h5Nu8q6TagsF7gmxTSpEiesnwnPV1CQQyDybrAzPy2hfezYnh2a7YD9pRFe3AeHLdYSh1o",
  "key20": "45qMECi4oaSQchsha4G3V6NWYAAxZ3nE9zHhGUS5Lft7nwyZ8GTGj71zG6NVMDdDTfhm5McXiCHvvgiADugmag5P",
  "key21": "4vmC1mVjnSRJZiMDPZKmUQLD9LgJpNesePDNsrQoJAjUTJbLmFJReiUXYJ4ErwUrJ9DJFJESAraxoxjwxogaFYUz",
  "key22": "ChviN3PHqS8nna3G98dVgK1vnpvCY9VNUhkbaRvibUi5Ym1mZicRokXa8AnVsCAayhGRbetyxAnQg3thE5WzQsj",
  "key23": "5wPRf5ScNdKe6t1fjYUZ5D2rp8nMPbV9cJrXHkWs1mfiUZA6co8tmQsRuA4fpYFmnN5SWk7aFxrPnztbZrvw5qgY",
  "key24": "64NuDgxEhWY8X4PyDgWDwbofM12umRTA6C1dK2EC26BRr6FUGYkiBW5JKqoUPbn4ZuqKF1sxKKiuwrYydxxKc3Ef",
  "key25": "yLDmxsnT1YbPJ2XGEd53EnffgF7gicqocaKi7jQfpr29AUcmSaPQuDNxYfPSm23U3M6WZe2u7xkDEsfx9fUrrqD"
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
