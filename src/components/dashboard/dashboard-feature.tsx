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
    "4VyA1qENCfA43NFNfdw1Urf9CdefLbfjLX2Yt63X3itu16SCSrDCHsjqq4Pex5VvqBDFeDS6vCobqeN3MxLevSXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxAWJQQLbkWjSLXNsugprrmQh6X4GqNzwYxrJQmf3t8318Va86gW6BLyUUcXMF2oBhu2QAAz1eqHVKnGgAwyesa",
  "key1": "5WzNrt5XyiBdueiHwwVW7658b8FT6gJs7bp8r2NMbEKjpUDFhokNLtrWPekCoBGNZLfPJe4RiiNUaUHkNs2qCT8a",
  "key2": "2rsDizZEG9Z5oSwSaGoyjKkm63a3sgNwbrm245b5mnjFXoGXSjbatPRWjWp7DLfcndJczApfQgRBwZbtBctd7vdE",
  "key3": "29QLBCXMRYNNtPYQC7xRshYhuKTMJMnSqXMVr7EASbNhFTpD8Nk2hzoxRXMtrYySuUbxhgChTfqFrERVTbWQRBzK",
  "key4": "3s8DuGmv9j7ekpE5ykXN6f31hPiV46vgC4AAJb5Apr2b81dhvJMnibTZW6VbTMWY4Qu1SyCX7FwJdF34LPpWDSjc",
  "key5": "4rnZSkFhr1h9YcvcBaehCoNPMK37vVAMYj9zHbo6wtd2f3fuSR78Lmy3UZrBpP1Ew8m1RTREFShqNfrU2jHCCwzX",
  "key6": "5DTFNaSJrsJt8ekdtsNtZXY1YcToCrVBi54NYL2kxgskVksaiA2i8MSY7TqX6HbMQpfzgibR8yfrbmsdPB6jcykm",
  "key7": "LFEDZXrtB72QAWfwdCVeBKpanYwwDKk4ypJ6PUXCBxBmkyRM1czGoEPxNEVa1YqY2zPtAgTwqw9RHtPaNpjYFAr",
  "key8": "3PLw7PswieREFnmegHfu6mafMYaUQfF21nqW6DJMokxoy55QXQT2PYXWvNhi6MMnmwFdAcQdayAHAiwnRiks46xk",
  "key9": "3UBSso2dtzT5hnvdtr3gTaExmA1DoydNZchegeypxZuRGNcwDbZgZ1WvFy29i6tLZSCEHUY8ZMyBDispbEm8RPLN",
  "key10": "5sLS4xNMid6wBoaE8qKoG6ddxtYx8sk9atBZj52LebYCdELSfFhP1CeoAK5YHArSFqZZSjFPVSrVR5MNXNp1miZL",
  "key11": "4yvLmWPA23Qw4M8zdcaXAWKrXZFWL3P44EW9Jd7aKnpuXByyk9EoBEf1CsUbsy9GmWFEbBGkrJNw8egh746CeVtL",
  "key12": "Dwbj798LzKPHmmPqwGhQ4mT5ygWrVnyopj2qAGoBR1hbB6LdddZ6gFACHxjWy9sP2z7eicKqpS8gxDQdfdLxe2N",
  "key13": "YMVRzchcTRDTgM4Vxg6uMcCtin9i2FMHHLc6NXmjgsac6aorPH527SM8s1R9DxwTRU9TMFVW6t4fT3LzQQuivZp",
  "key14": "3v4zTmhCZaL2M2TVqgVPVM4NFDhpHyqgJo3X7v8AkyboJ1tV1tpajuFfsdPsdxJsiotz2tAbobwQ4oCPwkHoUcjT",
  "key15": "33GhWRfxGPFHobHQqANyo1aJwiK81J1t8d6pspWTNTxfC9NfNediZcf3HyrhrG2KkFoTBvEYeXN5FyQd3yfG8thS",
  "key16": "4bWNGU5HsFFw19LJ3HLUSbriP4PE82spS2g19dp2pMPnNDcCJakSTuBMoCjHev38KjLMNqyuJLbYL4QSm5dL28LW",
  "key17": "3foY3LGny1dV1ap3WJGEQS27gosjXXu5QkKziRoLDkjKuCA3uWPiZuTw77sUJ83v3CkkfopBfRydhdiYQTXfMCee",
  "key18": "39XgCP6kKFv9WX5ekBDDYzJjvdJKkGPFvUekiZ5niHbFpZWFvt3LKXTccwBPmtrWgdjoxWpisZ3GtY2UQHftoKpe",
  "key19": "5tt51vKxCzUYsSXXNrGx4AA1BueM4RedLoCCqJuEp1nZkwE9kuyKyv4X3BxtuNt1ogn2gfwtK5GB69gXymet6pbQ",
  "key20": "6bgJaydqJmNJRAM7WmsxTu9AynP8ewJ4pPsdsmiekMWCri5o9EBx95SV5Bko5Dt2n4NEtjy9GtKoMRmLKicUX1e",
  "key21": "5C8MktbD2wehpxDXJoyneDMVL96G4KoDvQuSN3RenC4ZQnUkMTsBYeYx75B8SVkM71zXWBFX6CJ6EgVZiquFBmKo",
  "key22": "faG1cqtm4GSKVmYLom64Gr6qZSzWiwbiCWCYGgcLRwQH4qMuGhHGwUGSuxMZvPpT3pmaQrR1hYQnFnSq2cG7vBk",
  "key23": "49y3xL9dGSqEjNeyynS3ZvhFN4iqU5qstLG4WegrrdZdoLUxhjjsdfD8s4fC72QE8anzuMfjXbMLkhFxUK2WTZCF",
  "key24": "4Epy9Txy2dpUgppdyA12tXCdu7D5zsqC1vZhghqFW75vUi8Zzw9mikyEQZjK5HkrGmYc2om1AsjjJPQJVx71eqSt",
  "key25": "37mRMwreGjmXTYcSnyn7s2manrQDpioNRnXFH9EufBdrpkVpQgAPXMBEs1S8hKSXsKigRiQUkqHtXpR8KRaYzVUm"
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
