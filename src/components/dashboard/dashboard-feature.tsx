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
    "JthQnxKgVtnTAKiCovSeobNwCbWoCgj6W2MhZKMqB9Qzr53jtvaPFfXf5k3SDjen2DwB3m5uFcSqfHkVvQaVf44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENqQfaLkg6LZqcuhTHoBnFJckBxz7t7ysrvvvuuSUdHyYQp8XJ4snADjpjU1QZR2BUaAhSp2gqbnKP6cGadaWEw",
  "key1": "42ZY7wJR2LADakudLPJ7o33LNaHPUXFk73kRrvJnWpTfXXfhaiH8eHJMoF3w9oeDUuYVTx9uMT6AXV7ybv55Akju",
  "key2": "4GTYTz3YwchbJRFJC1NYip8d2w4Uh8XZxpaidojqcsUKsC6wfs3ghuS9JSbcqeqStXWD5S2NcEjFNkr6fHWwJvik",
  "key3": "5NqbeBze9dE2iQBGYNxA6rUcwtbo9HST8BQ3iqUi3T7A6MtKMnhteuJwSwnBGFCyv5LU9XpzsNQe7kx4nDJi2vB5",
  "key4": "ATsnbEUdaiG6HizTX3WK8Tg92YZDrSkzjRayf231gecnZyuRTaBztUBnyBvR8oH8r8oBvoQcxMDQNrByTNdLM81",
  "key5": "UnLTdibZeM6rnMnRRyMyPj3HeP5LPJTfxS5dpyc8bhRfUdqiQ4f2xoDskWT4aLqfXWJnJxK79acJDhuqoUQgMzZ",
  "key6": "2VaeiGTQLxqvcdLRX3ecVvAvYbaEredVgdqEmDgoztZhfR6DrgyZBweRpfqKoMvQgT65AtkDwAKWdHVEHApTx7Ya",
  "key7": "2VusfF6hxyevmvkjSHrmoBCiEKjYsrSfqcpvFDaAwge5dXms4iKVGLQkpP96CWt5vTfbgkWF6hPdoY2w6DRTHZi",
  "key8": "tsNWTDB353wxsKp2TPBevcHMqjJHc1umngy38WG3J1zwRRGbUDCRdpSxoZGY65abor9znkwiGdYsNzHBr7m5oYe",
  "key9": "37pgM4kyELwiquN3oWKooN4u8PgemqqZwAMFSJmiwY1A2SdqzhF8gpvFMpSC4ohNXmHoZx7yj2gUTSXZi9Rrcstx",
  "key10": "43i9AgmHxymKiozLuoyHVn7pkipc1sYJp9ZzWHwe1wg1iEuuZ2oYP4iBPeXPEXfwTXwg8m7mMZLcRip84cdFB4kZ",
  "key11": "51esZzJGM29xemL3AShwdHbdWfhCdXRAzGxrG88DRbYK3P9MYt269kqDoHLFuQhBpfVjpXwjGGW1z7ouq5dJtqdd",
  "key12": "638AcieTosNedcpGYDszzhkFEAGKaswkddLDAeYAkVhTK6DMTq5C11Zn2QeGaNxWsvfVh5qMpdEbJP9srf8DA2NP",
  "key13": "5FibLxGYwjgC1LB9z19rPuxPM4UmANCxgb8rLzpPecWRMHRceKkhhAphotwNnVfzij2vC6JJjyQY95jsUNKmCnxE",
  "key14": "5bDEo8kZY5xXtBwAG4rtc5sCK3JtDkJBGFVfWCNcwWwh2ptN34Qp5oYqgpamh673McVYeYVZv48UWGECa3x5U7Mz",
  "key15": "28AUzBzVdbgeVJ5Dui7TESv2mDRgFutydDvwwDCVJQ9ZncUL8ZXtfBTRHnXsBXrZ7umGAB3SMg68FLdzsWN16Dxd",
  "key16": "3c52eMSb4BCie2F7f5L3qXSUpkLeemAbPngBnYw6ABJMF6K3ZHNbXrqoNTCSkLFzd5euKAZUVaJD4ypQCDLdpcpk",
  "key17": "3Ny3LLbqZZ5ghoPjbhs3vrQ3ek9zVAo2zQ5b2DJ1GGxeWp3gFe4xwxvdiPVnMrVpa6fdBa2SoH2hrp1jWLNRWE6C",
  "key18": "5XuH1KCTAUecb4ecDwNG5L7v7q1NuUXQjGYPvvSdQkJuo8KbzQbuRGVvGN2CfS6Ju5kSWk8gCgwZhVpcXPJHZFsH",
  "key19": "4WtA434qQRB5BVZDd3fDM7imkoeS58UYTBYbVxVsUNRiYL6W5dVv5Gm76LLRHafoUxts5wQhQb6B5beWyvaM5SNh",
  "key20": "1V3rtvXYHYfEqEZXDM8zcsMEAPuvkJBeRyHJ7KzGiLNBryfQdnCi18WS69frmSm2k78qMmdmM9tzdZrSrQnjeGC",
  "key21": "WK96r7eJjHLLGbPdYzrqADs1zcixptB7xwNwzQp4Cc3KGNZUf8PaT2qbn2wtssVK7sY8QioogRLTK11w3A3hLUE",
  "key22": "j9AnVAQAgBAecFT2TJXKMJ77S7cFsK9pCZoKjKZAxz9WioSioAwiZbksV44diH8mY9ZohFrur7fz4DJLqXyVbKu",
  "key23": "4sHD9WV9eMHNXbYjDUNLo1ByzhXjHNB2fA4biMnhUeUGGX5xaknWDckL9G4opwgTrmyzeEBf6m1qrU2pQpuJW2c7",
  "key24": "3wtqjHUycFayZZ9fQZGfGyXEtphcpTKBHCaaZ636ZVk94tgxFZWiWBZNZvrUqZFf321aaomusPX8Cq7bEShSDVzS",
  "key25": "3oPpxLbDPXNX98u4VvBXBbAKsT4ggU6agdmr4ZQawHQ7eqz3Z6siVU8DYiRFZQZ9tTcRtUjDsSQF8U6m4Qajdt1w",
  "key26": "25DQv7TuN9Ubd78DKhtmfs8dvvmvGSq5KnbMv6k8WEMNq6dQgbWozXZyBFb5had3eD3Cy8RhfzBdEBg5P1YgtNVv",
  "key27": "94J2UzhXCxdjSnLuWRa8Dqh4fUd5tMBJeHSHfTWSB4zkCsK1WsBzTRtdBdGEgy1dCtKeCwZZuU1Zyr9P8hqNTyU",
  "key28": "3aSaeNSrg1rVh2PVzgQTKQVwByZmjJwWK9yLMSBKPgbjmAHKZQ2eFjQvxfcLgSpYjXdvhQ14aUygW4BCZb89KWHQ",
  "key29": "2zwCu6pfhvqaL6G1NoF1it7JRgRN2ax7jKb7eHQAiFBL7bP66GNiZjhhVXS2efugkZDf2fzXExn6in4HCAu2yi1f",
  "key30": "5B2tW6QuAsSsNUk1rBtAmL5V9Efk3iRve1hzKN5mLTcSbR6KMusnPdxoNzmGGu3okTNjn3aays8obMJXr7ZS5SDJ",
  "key31": "5uScSz6Buvd31C9rAMadJEBayCZACV9EuMLLt2HUVtLP2EUQ31o24oui3DswdeJsd9tJEu7yfUUZH2kB3u5FdBco",
  "key32": "2N2ZwkV6U94te3NXW74WxhKbk8vWuwJjC5zNEWQGBRcNyK72GtYvZGH1DSfZM6CAwT8eQt4hWAqktXw2jxD1N2Ph",
  "key33": "2VTqa7ktsQjaVPH6EWH3VMBSEn95B68TXZFY3j1pjuq1AzKqRgFZPdoPCYxDUVeXLtFxsYa75iJortYkh64fFckt",
  "key34": "nAye7AMa47edp7vu4bEDUM77MmFXQmVs6pjQrHTjZjbdaG8EgQNFKn5ezSHp4iLDXyVaxeEyKzQEkys6FfZW5Fe",
  "key35": "47WWbgLuA7MsRLDAuLtVQThwLVhSZx99T7goZhLkuC4MGLpr8F1ce96SKFBgR38abUR2hVwc21A8t8MXkT4kTJWZ",
  "key36": "52QtM7DddipqfDyHE2mUYjaxvrVyXjiA3hWPFcqSjpxMPWMFD9A5vjngAQTHbM9jYoMyzv9JainkjWggNmUAR6kp",
  "key37": "4Qe9uKTTGZo75MJ7LwuQthWxTKwhtKkwrzcYNe29WPZ2vmh7EWrEsK5ntD3HMwpk9pPGajmQ5poMjj3fHYtLUx1b",
  "key38": "4t7miL9yXQviyRZTrEnWbEE4q8RK7dghfYRFfmmKrfThdu9rgfkKR5WENiMxQ14Hjqn2M94GAg9cFBubnCnW5291",
  "key39": "3gkrKhk5T8NxgrpG52Emz2kYgAmL93cgDjCCoYLWWYYZerNx4c1ErLHwZoVied1pnp5Aiy6K6ADdTcAZsdQLLGyP",
  "key40": "3oQnxEuVAcP5rEnxRJ1XzuAFtVDLHGrjqkNyC8JBPsz23r1S6wC1jMcSqWJH8KThB7RbMsTM9mBB1vYyn5jFifN7",
  "key41": "3evLkg8CUpu7H4gXiMCq4TvBkEV6vybDNE887A9gZtQoMjWdodyjYnaXR2Ed4nyo1aoKJbmJSF7ZF8j1Qmrft2XE",
  "key42": "2QcSWRuEE4mAgMkaz47d6ksJHt8zyieUijnmEqnQpKzbXxTD4i58Bs7obzhKUkUJuxacr7QEJpNh644pnZdsS9Hj",
  "key43": "2gwrRT4C9CByk38HiXqcE3U9CXPraKPzSWM6rnsAvo9qKparVGq1GudqooPZr6ZvUU2opNs1RDqpaXhyf5D4aZwi",
  "key44": "4T8GS9BH6vyCkdMGmMmqyuQSC6eoZcR4cWFykWRwWQ6GPTay58jry2zSrYqzbEgtyUAJXSM6UYBoBh99xYinciGC",
  "key45": "3UbUUwGAUz4tESL3qjoXShZgChxQC8mKMWD18uF2bnUVzt7xmmTQtQtqaN9K94wtwo7fGeP3CVZ83J9hYYgEBRxu",
  "key46": "2jtPU3N4FqbbuSx68LVRjZVvCyHTmYLeBjUcEdYCMAgSJ1XAv7b1gMauv41KAEyTMi4Y83DoArCTZBHmhRJEkYP4",
  "key47": "3kY4DcFetDBFqMTTvJJuGL9TEgsRN7D4v2hWRXNC1gUUb5HMn5ohxGSnFzxnJkuQGzQN7HEqGhZZkMD1RtKLiX94",
  "key48": "5Ln5nkxDysUeewa1rYX4czXM5PnRdv7zJfctWYCHTiaYnao2xwhHoSbG5tp4on5jyicmLfByy159K5CUpoLF9SU3"
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
