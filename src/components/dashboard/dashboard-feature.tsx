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
    "5ThsedaRhrxA1crq3PxbrJXuhWuDvr1ZKHQQJ4WnxxjnGqWNydjQSBcSyoUMAQG5YeUVTAR3Y1tSGZwoBrBET9jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dvn1XBEmXNCRFNiL6X6BpJ4X2jBFvXW4aFCQWa29vizTjRcdodW3GWVTaP1GfDgqstNyDkmCMCnB7A69zsgzznB",
  "key1": "27QqDFjadynMsRTbwa5Zpp6RiosT976u5F4xyKj45jAC1KTqsRmRXaET1aCpTnDPShosK11m4dxpXpioCzs5GnTM",
  "key2": "4iTjPGdAwwLeVQHjHhTLofQEnCDRZFLWiTkmd7L4yEsABGDYsAprtWsrfuuFcQmPoGhdEBKhLsuTHcT6ahZKFxx1",
  "key3": "DTn3oY1W3AwGBmr1PjW7SLLaR7WekwKwTLm2qUCtc5qr8QwPRN6h2rgMxaDizsZMhkFoijhDivZCeckMkZwUJqk",
  "key4": "5oNeCzJHst2L3BWvwRr7fXPs6wFwVUF71xQb1ZdsXGqmgtWb3LYXxHFzSHPBdQkRy8zpEEnj1WSoyuPfrbULQGmp",
  "key5": "sxtH6DpCxpAEDhaosmKNVCSiNJ1aKzBPVmF95gVpUWYn9yo1XoSKQxi7P75egXq1ZPHVtKuEETACmxH4BKZdEH5",
  "key6": "cJu6nXScwdZnNZfu5hKGQbo5LNnT3ngaoFFJcuuZTQD9uvF57ghy2DTud5ArxZj9AUKctXmFeR6ipF6WXWofHJA",
  "key7": "3icEuVjNG2Z1eFCgFRBf8xNAUurXSjXen42Cf25WnE4UvAq5sh7kBCsPSyXCDBAmwS5oABFpFJcNDxFeEEZZTBW7",
  "key8": "5176zFT6eL2uePxLZAxrpBcr77jGBmYXkiFPY1c2PAJh26XUoi3eX1SCwwRpEGfeSoGQsVEHgEJSNGKJU2UVRkSy",
  "key9": "2ZbgUzSQD9y5UG424m4hgNsuJns3uKYHsMEh6gNoz7iirH1CKhhQN4L7QKsyQvwqFJVkhQ4jZZbPMvNGhcmx6hC1",
  "key10": "m8h6TsVdTojsvzk3Nt6GHqu4E5LzZzMhU4gU4aran6SSTQ8XFKjpj61wepDevGyeDxnUBhPBPpfyStRFPwm6VMV",
  "key11": "3Kbpn2dfSe3A9hSL4soJGxLGPQ7dDVRhAQRa6ERu8vXB4dtMxDvAp3RrFNBhLTVSB8aDMz1oKDk5xre1kdDYhQrR",
  "key12": "5b4pPu6brUHLeKzCVaYzTGLAFXKGkiLBkUnoTBnwo59yH7hH9VTqzgjcqfLtSudKyZtRZG6nferpzcRrzn75HsYg",
  "key13": "CndZpB5mVEE5ZKfx4cwxetd81DKQceH4Ekkg6bE9rBk8mhXQgPFivAgFTdHTiRWdoygQqwrawDaDo6iYQRmBeku",
  "key14": "3dC9GnBWszHvLkYsRNfmFmPC3R6NqDfNeRqSrtxJ9HGfFi9JgtZ4LwGEmnffQDJcnxkjkEHhqbKxx2M1YkjnoHvs",
  "key15": "5v7NNTdEzDJD8AjyK4skSGu9nUPR3hMVTzdnAUn7zgorBMW9SxiWWk8yzKsM85GAq3ZwbuYJDnT7rYBCa4r5ekC9",
  "key16": "5M4W99sigmNTVYPuoPq5ToWAz6wUSBhGW2YjuwekZo9Ej1wRwP6isxrpLmoFMgQxw8QJsG1tvKhq1VKZydP2ofeD",
  "key17": "2CmnXp2fMiJUMH8th8QorwUMPUSccJbsdPoPto8ymJ9WWLWqqZWrAxmX8rF3RbkfomSsMQoSmXpDc49QFjagZSan",
  "key18": "3YCaw6oNv3DheNgCaszsPbsY7n8zgAjPAW9MfzTFYHrqatcD3cXkzGfGkeUkaD8hubeJcic1XcAD27BksbdTeVrw",
  "key19": "hMB2wARADV1T6EVwYft5DUN2FVPYrN1YACM17zt9WdreHexV7heH9sUACKAUyDujsNfx2X98Giic77Qdv7jB9eh",
  "key20": "4Wbt65XbkbXsvNFe9rKxRinmdJdAD9SpmBQy5Pqw35Dy233o81wKZWZYuGrZhHh8BT3TvNY68fuC5DaSMwTJVwQg",
  "key21": "2DiwgwpNo1yRpChWLGorg8qB3eonHP54DJtCQ9H4maHswnZHfcQjrTVjLcJmSRV2BNK5ALYxDKMR6eR7TotXZVki",
  "key22": "3DDshg69irw2qspWE4qPUyQUjRrJDxqT5K8dtYBRqkSH2igQWwmEskRz65XVLCm2okRyDSVpkyavVTst56BKSceg",
  "key23": "2UnTitNdcHZRbWcd9m4xA1MGQnhVVJ731K3ANdN3LcsSYuYnaXtZKj1Jo6eWabjm1ChkR53MxH3g4v3sZoc2APRo",
  "key24": "3D3bp6BCo8WcyGG5paezj3xutLSimPkdmXqCyxWRwU8jxajPTbxj8tnS5gWLHQRWyPY91wAbfqWq1ih22gdmySvv",
  "key25": "5hqfTcerGTwfaVe884RkJh7Z56EEytB7s3uVRxRfLAh3bSH7LDZSP5kik6a79MQRMBbExRnjuSKgbYJHXMNjWwDn",
  "key26": "BxbpraJjXVpHT1KKb7ukg4xEXEgo4j6BnqNx599JJy55mqyZXLj471LXE2Y1T569iVHXZjNkGsLSXKiVxH9e1TJ",
  "key27": "5gDtn8B7noMDKm5rEB6NwhDm136hyL4Ntq9dKggiXkhB1oU5kkeZLmu6ViGPsudwdAAKYHRQGXm9M45B49bXfcS5",
  "key28": "5FGZYy1jcupb5nZUsBBAjMVBJmRMXfeTLyUh2x3NqogwcrLEBjQRKaWfAybDWnULyf6AdGEEoiH261fmd85pLGTT",
  "key29": "RouHECyoYyxdBq6Egcmk4Rc4LQq3KCsa7BK52vXopP758Gx5Ze8MWMiEfWPwvcYNMBPaweDpLNUXycgXAsk3c6A",
  "key30": "2x12zPswoB6cbmzqe1Ys5zg8wccvfgM4FJs7d939hx825vVgnAEmtToPjJ99fj1gdwZvnXgWGLG1Ad58A9S18fzy",
  "key31": "2RwD2GA2XgtGVpoVq7X9Bc92XttYLE3dTu4K6HLpo3txQwWA124unVvAGzp74tKXoiUuYBxCGmzsHCdY7VmQPYj5",
  "key32": "4oYVnuWbaPfVL1mDNkuLeEXDPu72hfakRSUSyXibHNj1N65tPtL1C6VnreySuQpsHALB6Hrfo8ufx4CgkRTANxki",
  "key33": "4iiD7NyPNcVFRSeDJMEjnUUHwDfWqKBbWQE35Yk6NL3DipLuntpxAamuSZb59yJBpMRGGmqgQ3iqUcLf9thixi2p",
  "key34": "PEuBEXHb9QzstrznSW6XkjRToxzWbpc4F5RymX1vLdr2Psu5uXLpepHPGRFC7nL5c4L3yjXPvrZMxjZ3mgaWaUL",
  "key35": "4fhuLEE7ZRJMHknFTHNJn9C5UuwRww6Xh7mfswDNSUJX7z3eLQwS7vqTtn9TxLdSHY1HcfjXop2AEGSD6EmtgTEe"
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
