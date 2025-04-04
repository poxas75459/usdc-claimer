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
    "5DjnvHmks2DxxwRkNx4aMFMAay4U63MWVNW8DbDJwK5U7cCYKDWPxPEWphgT3DNaVDjcChVw3ALuRxKc7Xr8YiqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kr1yNshtr2fHcp4VVSn9jFqkJWFmaNh7fXcF1tWnCJ1yaWzaSikGoVBbPpNnadi8RDeCZ9vnR6ax6SpJXx5j8Nd",
  "key1": "EmuVTtFxAtavQKW1Eyr3w1XSmfFpCD8HjL2xWuC3hdzQsSKhAdWn5EQ91BhkvrDRD2nH33x512WNG2G384Dy5kB",
  "key2": "67griZZTFpJZwE9QyZjyrf9651ahBLoJHVNqV6nDJrFdSaWDLEPach9UARkY6pdKTRvZwe5YBCLeskSE63qEMvCB",
  "key3": "YnMcQH3Sz3QW4yDZ4AyVw65xrjFuWraJsaVtyhLj1kbevdwQQ7KAXBSX4dCR6HWJ44FoUxeMZLZhoxZTQZPc9kt",
  "key4": "535frsFQWR238jgpcksSHyofDBboyNu1ji4nwkaJztg3odC4CxJuodnaHwwEh79VdHsNsg1pRzt216FDurXTi5vP",
  "key5": "53oGXdLy7qQRkpxYoQvFGuPhig2VNEtfuH5Hcpuod14nuiydPSUJRx2quKRs76xh2Z9ZGamnHP7g22ght1zaqPqy",
  "key6": "vgMpGBeEYhS9GEw767CnHAL2mFezTA4iT5ncK1iANkPGeDaQatEm4ZH26ETgM8ez2bK441cGCVkidKaS2Ep7JV2",
  "key7": "56zDuSPRTsRHfb3SX49YGffd3FhkQbgR8JQrG6aEbWgH2AGWt5NaYJ1QTpY1cdva8MVDH7qBuT5nrZzNJ8gjipFU",
  "key8": "grgnAYkRYes4LhrXVL1HFW5ExRgYjxkCqh8Q9ys71NZgYGHacZWMFi9VGrHgf9eMF7sXprNzSAvor7hTEaqMP1H",
  "key9": "4goc7aVVbcLojYRW9XiM6DgjXVKv6tijuvpGdFbFhtfCMPPuKaFPeDH2oa9vvSSv4DkFnzXoB6ZjdyxCEfPjQunj",
  "key10": "4PLRjfDkCzhBP2zxNwuxVmt6jtyTXyFyx1Y9QZ7jDza6zTfaeZP1EaUEFA3ane8pYGQ3vQSHF93onqWVzD62SwbD",
  "key11": "jMr3Koxf2X65LBeDrJzySCrnUWSojF2wTbE6FRwTh4mrRXTsZmAE27b58mgpoonTUZ78QgNWTazSUGduDMLkxqT",
  "key12": "3SbHw1GVYhBas3ijot1i26yB4c7SPEWEcwQ7hSv4hxSrHDhF1sGxgYPxZsbRNcyxQ7T336SvNbUnpgWJ2aHn2814",
  "key13": "3YFrVka6YqoxBTqnFPFkTvB2M9otn7zUzyiWmjMedM9fWU73o1UrTErTdJGiWoUNwXXksmUmpgLzeSoDu5C6QtSW",
  "key14": "5eHuNKKcgbAeGzX2oCaKK7BURsy1WjrgYBiKCk7pHEkUftnLVedDk94kZwyuj6bB5NL4QSerFzaGtDZGu7n1n6pL",
  "key15": "5ZXYaiFvSBfz3yEhF4Mbqg9kM9aX5moQb1cDdCf56TPDcgUoCKFBMdt63x3q9Jo4PY1JVdgjvas19oA33g2GbSTW",
  "key16": "2gZtft5GAuCeeeLeuz7bYfY68PG3Jya5kYUsDX55Ucphj59zGmDFqasSpb3R92EbvoWYpKFJnHHT88buWNF2WLzm",
  "key17": "117jjxHydwhVTxcSa9Vp6JFHjeR9orP7LmAki7uK6oqanAnpEa4g1cstgGa83z343C9ASRwd6VwoXJuGKDWgK4m",
  "key18": "5DaWYrVmcVtuoWyBskeqDFBr6hysGdBzcQFuMWzy8C3E9RNq4wXY4vmaCyTgcZYgCaTRips3XBzsJstbVFktajrt",
  "key19": "67NaEPdtK5fcctSF5DzYdoqWmJSvGYfkJCjY7FBXXvAwnDQpEqs18U1e56obwYWV4Ci1L2Ced9qxE5jMibgPPh97",
  "key20": "4Eho67WF38P29kRofp9NA9qAaZ4G6tvr1TF68xZbzhZtS4WrCzy6Uw7vajCFtLJusEC3SHtAjPRsYP8Vec22GeUN",
  "key21": "2WnttaWjPRhfCBtd5hW4V1vzW2JJ1EWwRqFmkix7L54TtJSSHx1kFtAQ9GdUWbXWWY78VHCfQmC5E6e7fAN9TLVg",
  "key22": "zVvavEjRsPCWDQK3j3Q8g8BYm7mHoMbph4SzFimnNESiR8jX5tSN1FDK1EPfRG6pUhJE1B3ozTafsn6HqVmAsZe",
  "key23": "448xhEtJecPDpvfEA1HbdfEAiwx96u1zH32VQi9L522EUvgPF21b4BF7KKtzbAagK4rMjb4v7EEvv8RmBWp3xcsC",
  "key24": "y6i6c7RPpiqELbqMhM5xzQXioZWAXpukRN6sctPSiykkZNkkjun1qU8wAV1EskWqQ6uSAtv66UudmMrdzDThqhq",
  "key25": "569tbpLexBB1xzr7Z5pNuzM2v268YMY7ajpH9crxiQJxtgczcTcXCm4wFGfatTMgpMW62BxTFw6vNCZW73ybQgm8"
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
