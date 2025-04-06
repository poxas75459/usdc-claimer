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
    "7zxn6XmWTYu6wVRj7QJjHsiYZ4jxQrBKo6idppXUSHY33NdhobV15oahf3h8YBH2YehkJSttH3GrUUSGTS8fyr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mN44FkgujU1Vnk7DxXz1zmhfaxeupmzHKKH1WjGqpK9mp5BgWRP4k62hPsmJYV8A2KseyAPJmKdf2dPZfr1GKy9",
  "key1": "5vqtrwsU1MdCdwQVgJNWgBEfKYCk3oM43QifgTnH1Kj5zQQhGmZLRREgbxSmvn8DWyZT7fVqdDmxt6ieBkNiermL",
  "key2": "44FWDo4iU7CczwX5e6M1RkxBLSx31KQuScyjPaPbLEXr2n54eSHCMXGNjTzLpXtm74sabT9SAmdnvDxZMiFF4JKA",
  "key3": "27RNzPzuq7S6XTU3j7fYu466o5rnJjyfcc5V6hVW2hj78NeceybiqEE2ZpxpSmsZjVHDRr4ELYENqSRSDZsFSYBq",
  "key4": "3KhTetiPsscLn6bGuUJM2iTZXtMZzBSBBeRnQ5RsytgzRisMcd6v3kisTMbnkUM2KxxKgQb7Lyn9E78QwNFiQanM",
  "key5": "4yGaHLi2mALCNg13BLdjF7bWCSsttgNzqUgRZqYXyRrAP9K7G2AJLvsxhNiTCMZ8FPwnF8tyqdhANpGcjHyRqp9V",
  "key6": "5nu8bkdUjmCKw6AEjwpCVVUpAQD8nfHaPNc38jB84HEt7DqZ5uTdEqAPqGcQiwKZiFKnsKsKrmGdc8EmwqbG3WKc",
  "key7": "3RUWn8sui4x8qhFTnXhTkwrWjvPWTgVPH87yNcBiMBVi5Kjx5rcpwtLUrUTPGNwCmkDZUvB4YtuUiSkUcuov6jKW",
  "key8": "3mFJhpACGR1jPCqzX5oLUCid73YvhFoAjMUW7T2QM2TuFWotGpSbUvNGn8wLndJBtKsZP417ZVtTWEksjm7ka4yU",
  "key9": "qt7wJ9EBicXjuwFoqsrxxhVwsYnXkXw4eotQ1sZzB8nwtLb8pCjP2XKsYCh7ofgFhMMBP9XHM7zmNV9LLSWp8R3",
  "key10": "4isP6Jxy5WmX659K77LqnAjE44ouVisQznVGkm3tdpForXDPwUkDQToVzb4UiR5rf4Vhad7LUzJC5KbNyzkA6Ngw",
  "key11": "jGrZ5kmzD4sLeM8uKXezMxt1ktrLY8NS7c3PcTFyG1EasGqis4UhPgGevsJt1iHjYRKXJaAAgdjCrmNtXaEoTa8",
  "key12": "3LCpzsH4tk4qz2pA1ZdtxAcpvXpLdkfXwXDrZx4q1BwAruRk944kfRDuouvM4mCbaLzvLTXaDwF5ZDv3uGFTneWt",
  "key13": "47g4r3KFsqerdTCe9njXsxyC2zbSbQoQzhwix6gNtohdpp9FtooT2WeUdusDPRZ4y52kK7ZYzrCZQDCyncv87oyG",
  "key14": "3S87iZiF6ZWqUBoYbtTNS69YKKxdh4DVNWmsgksaS8tFkEqoiVQ73w8UTUFuV3Ty2mCkDLFDPh8xxg4kmLmQ1emY",
  "key15": "3Z9VgxrVQhJth7WKu3ABhUJaeBtX7oaFYFjyQyBqgFjdbHUB5GwhosUkMESkgVqXkFPt1qpRa92irAGug9zrdKCh",
  "key16": "5b1vtp8BByxY31ogiZnprjbsubFaGQQigNozFzighhEzEZMdpC7rGFSUTRR76n3mV4p743W2pqxpP4pphC8HqDV6",
  "key17": "4Df6x3R6irgnqFQGGG8Rn3trYwaSCyMuJS95kxybsd2Rto3mNsi6vt1tGbk2tYo7W4KwLwnQehJeHvyz9GVXN6M5",
  "key18": "BjfGoBzH3CrQWhaEFWfXNrVaUSFDF3c2hztH1vjZ1Q5FbAoKJ6wRv3ZoCoKK5V9piryJPUZotQiWbGA9kg1rbPU",
  "key19": "K9J5b8A9iopT9n5iGB858zzzVjBo6ykJaqeSLP3F6eTfd2UVvtT36viT9RKRWnQ1Fm5E67ePYcEmx6k9JSppFBR",
  "key20": "26DFZrEJEW4DTMbokfQT5reka2G8JBz7zPyKQJ8Yvs1j4ehhPDVZCYpmK8WovcSEt1FKVniXPGgWNEC8tZTcEbAu",
  "key21": "4QSKogP7KXUSRAMg6cbWBeHgnJ91RkaMzRBp1AggCGzeWR8XC5wFEtPP1JiSqWPJUKmCfvEtM2dvwZ248VtVPHbU",
  "key22": "2AgdDdsKZ3wWkZvyVz7Ra7uKtX2M5wa1jfXKprL3ui3BcA9Bbgx8PVctHJ5ovr6MhQPv3FzqAGkEwQtGSxAJjccs",
  "key23": "2E4tXcVfaVXJFW3Qj7qjBevbX6uJSXFViU3K31h4uPekTpBxqgcqwwYo2x1qzaFDLBtcwfgzL5wLjEJYkeWUax1j",
  "key24": "3ncj22L9BCqMf6Fydgb7aWvNfYB3FTF46NASriVGYENKv8PKfaoLgppcF7tjD7WFVnTc67JK4cwiyZG5JbU3y9uh",
  "key25": "2UtuGfcWaHjRXEmaEdeBG1VWV1Z4UhBh6D7ViKVzjb7ecEfT7XBYFTLRfKE7q6CNPCuYqApKmaF1r7RUhoGDxU8A",
  "key26": "3ViDSM2wcUwDDuWguGHRv7fjtYzh53f5j27frGA3xYvgwJfJzvmWArY2AtWaWKomqYaZHqxFcuui9RN9XUZtUGPs",
  "key27": "4WfTT519N5EPane4R7a5EkFMJonpzmQvfFLuECLnkVhg4tDQpWUXPxy1Lbw22noL3Nmhu4N92M1eyytVptuRQcdH",
  "key28": "2n4tqUCsPf4hqmrE4FXoUkDEg5QzB92de5X9E34hV11RAcSxNBDApStncZVeNyPrArCt9JHfXsaPMEG3w59DueKr",
  "key29": "5mJ4CsMXvHtETF6ASDLvbRpdFCcwhHgNtzUrYb8HokL35jHxvTfkm8yCo9pYABBeFcgyrQksVK3wFGD1CHAy28Yx",
  "key30": "z9Sy4EyKVFMXvz341MSHtv72qtSVGdsnDUBJvFtps1VDm1iGu7eQkoFFnrwgfwDiAhGon1ZFHfvGLE9s8brtc4a",
  "key31": "4VxkqyG3H9kGSF9MUSCrJUGjSNBxrYJzr5ccmmroBqTm9wTFVSy1vfEqbPvouotPvH3wEXbSxaJJW24djQNGEPD2",
  "key32": "46RZuuRZWC3Jn7oWNTrVAVw3bLbb8TGC4KJyJY4pG5eeAuxdL1CxuCLMuc8rTL23rE6e86682peBgaQQnHSpePnT",
  "key33": "5tXyKPSeJX9AaUPLEz2BMVywB5B8FgfCRPXRxHNLq5mo2bs8bZTXntsm13n1z6q8y4opE1PoiUiBem4zwyjfodjV",
  "key34": "zY97o7zCucxuVUMqQd1DoZVXQaosQbnzjHr7PWJYf5QwYW3aEyHmmc6rCb3S4dBEX3q25byrBVmM8WUbEneSj33",
  "key35": "zwf57BH4s27TbJhvBymq1Wpz5kAAwfa9SMWzxRb1ao4WM7yfAFJG2AYbRuDEBK5Cs4KpGbzBTCouoHH6oR4u8sh",
  "key36": "4KNa8qeqSmomkNnmccTyP9qvGkGw7xLk4gJhtq1qWfNUZzyatZ8Yuy3yWqMP8uR5BJUgwTwY4xQifsFupANKHvin",
  "key37": "3x4PVikB2S3kWe6gKg4p47PKi3Gxf8v21YM3bg3yPTAbjppJsDmDaaxtkKnKEfRNt8oMqvb6mvyzqyQFkebdg2SC",
  "key38": "2c4J9icUVRULTksDY9NAuaS3FwVEkutUvTLCXqfzRD15sCm6L4aRmioChTQENUfHrSWzzPVhoHdMdv1Wm5Lamzxk",
  "key39": "5UxQFPJG4hXhLrhN7oEphCEvonqg4kYABbE8DpK1irh1vpovq9paF5r7qNmLB7wiRnyzk8f62Xsw9nZij8ib1NPT",
  "key40": "3qf94SCYwZeNvsfmCjRPdST6a6w5LhwLBceySvjoTmXFFwtmeYXy15J35TazMVCGya99f3SdtJ5Cw1r2A7f9u4JU",
  "key41": "JzDuyEU7ChKVZxCCpawQNodFQpT3urByLS2yjXxsY7sLwr8k9NAwWZzcXvcjJJvWihAwThEK9H4eTyoxmQZxMJK",
  "key42": "5jvTQTPXymKjp4xHy4dfXUFmQEVG8bmn1PhKfQKQdH9HdpQoZpr8M3xfnxHXEJqQezwStgtjF1oCf5Wz3vysEvx4"
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
