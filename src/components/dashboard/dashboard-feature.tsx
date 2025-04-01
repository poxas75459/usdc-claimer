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
    "5NuvgTYQuGLQ6S4CnwyymcZuQrSqyUUYRrNkagxGH7PNBoKYNCK58avSFzDskBSRFbZc4CBd4na5XKu4UEVr4gKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2bBLpZaB5Wx1sjgwGFwz25fWNqki11BoShci5CBve2Kz2PApqWuLy5yPVQwekmYjTYbx8BVz2BtzvF9UeiFCcT",
  "key1": "2BDR9qYMUCgUjvqdHLmJazvHga5SmEp2XnuoHv9eafPzXvZXnq5m32CRg32PTDtpaDApiJLdSiqsbgwjVxQQL9nH",
  "key2": "xfXmGCecMMMsZ16zB3GcDcMzR5dcoT5Ut6E7kNWYC466g4UxhT92LtyttKT7NLtz2uY2gtNHCh8VBF5fSFxTCWo",
  "key3": "5oYMAVJ5yHNLFMvwVFQ6iY9MpHvBRH4SFB8Zfquk9YoudyiqkD1XA89PUdUnWppzhm1DgBYXqgrnuHmZVuCdx8zw",
  "key4": "39aVTPFrB8xxGtp4f4qbRUn12BKnRdYAXbKBUpM6LVVCGRvSVQNYAZ3QaNvXr2SMcLrZaUTM86YJia1ztwyYc5bo",
  "key5": "5qQdPdUTpqFcxXZHWKvmoZ6XQh4z2i23MFm6o6sRrtJXtsbB4sKhEYE3wrQdPZ5Xp55h3KMW8Mo48hzozhk4Y96s",
  "key6": "5YE9fbtexrH69c5cmA1oquTfEmgc46v7f7hcKzLo4AUUAipeN3mivNGntFnY4XzchV3j4QGYNLwFCjaeCEbSLVfG",
  "key7": "4AsKENGjekJkcBPBrBspvqnFNKsqMd3FEYkiDVSmb1T9dRGjv9Hup6aHbp69xH1DMuoTVZVKnuT5KGdvCQb2j72s",
  "key8": "37mjFLcTio5ZSjSrWegMRvJpg5HAMWcQ6fjfzqqdLFiRg4eFjvk7phk5oQ9KA2ZduCvYDKc1mhaP48jWvQLvyZj4",
  "key9": "3fnzNj4grvZMPTGrMh1ST2H9YrNgxwBV4Xh7Ez7jmJDNaB9Abz25bzfUyiUoEwxC5dYhjWFiFWah5Bzwc9BZGtFQ",
  "key10": "vLbu8w6GLZ73o3vopc9gPPxs2JxmrHJnx4K3wWZqXqPU5KBP69CCKsWgAoVcKzYSo1StHcFzdirntzcZhZyPMF3",
  "key11": "5mjmvBjDrkQK5qsy5KL49xbba6QV37p4feXWokFS2EPKTby9eMwF5gpiCPsFzPvDfE3gZNnkttG8piz6e53Tsb7a",
  "key12": "3XBYZPumVP2HszW3n4mEM1GyLHoTtC3BGnDLBYhEtg5U4hiat3fpUjoLqF315xYMKuPRvfihaB6G7jiFHajdZYWo",
  "key13": "2auMom1qhmVdda2ZAsFtsFqC6rM8RHUWEWzJAs9gqsc3aJuHbG2GQKnJf81Rj4WnatGaszhQD6U2K5iTKcbAFEtn",
  "key14": "9FFoXTMTr8qqRCuvCzWL1VWy7vpPx7kyF2qrXDEYZLND1KKWsroVvYqyWZbXr8SfuSy18DMKqghSvRjjSWxndah",
  "key15": "4xyiKEL3FiSBRLc6wjtxphkZvSUokWZsjtXspGiReViSRWVeYpiWEY1Q4smY1Q1uTXaFYnonhYsijaEZ537J6yV",
  "key16": "4vnNh8AV4JQ7HobCMbezZzSFDusZtggDwKf148dgYunBeFoivAGB2WbpkUkivPLxTvJz7Nmh114hQU7jTCpfMzq6",
  "key17": "38Y8SFLTvvyKr4nLd7z6esCDvkkEsHGekW5KBD62mRkMun9eny6ourU8dwnB6paQB1u3pENHNoWRrRxLfNdV1gn4",
  "key18": "65NttzWJgVKiFR1AKFNBRZEskF3uY1gMX6YTF3ocJbHZdopPKL1Pp2sjEjqVws43uqwPPsACasoQZy9QTwRcFd6y",
  "key19": "44DWFsorFD3K9AKAPKFVzEYiFLefZ9qQoubQMSWFiRUVUpgcNtKizYcXsECXYKc8zaGkqDocn4jqu9ngdYCpXXXq",
  "key20": "2kHnHRK1q8Z6EB3CyCvQxqkpeZqG7KiCXuHtRtFEiYy4YjYGTB86NdHXh21USD9qdTHeaTgUDhpPAhHwQahdHU43",
  "key21": "4DasUEyirN6NLhdpwwF2nRADMGAbr47bPmV3LcDBznL32McBVi9jefaXMea2wCCA81gym2ntTnVDaPAhe5No394u",
  "key22": "2E1W1EYattvnPeJb3GqiokoqxRMQF2haxxcuQQQnACHpdBS9Tr2T57NfsW7RTks1qCNsJvyK3hVXCXwrjSB3ZcPt",
  "key23": "5kcVzoRSkiRQiwJ9Rbsbp2aM1cb4PMfhjzAYfeLQ8vNcUMHckatofNjBonMGGBvN2b1Nn6tMCMPouBX6bRWVwA93",
  "key24": "5F6H8uKiZbtprrjG3hSBpAVYYTK2X9RBF6yhMNDW7FF8CnQqGUit3NbKqHh8HdgYntHqY6qKDqRVy466qX5MDTTd"
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
