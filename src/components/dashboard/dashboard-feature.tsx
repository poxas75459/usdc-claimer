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
    "59bemc7ENQt1MtC51ThWjmXQ7mQANYn3gmygVqJeBm493NHQgbAoMP8XhFZcJrkd9gyecqtcTwsc1RA2Zt4CZWLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32jRWKNnVi7vBewaTKorc2MbAgCMKDNwLVbSE6QJmKG86XafY9FeLsRteSfhPyhBLGQ1Fs4Q4SdWkFFFUuxLivrX",
  "key1": "uTSWebow1uZ9LSheyPwvmcDXbKzSupv83zpL4CgqPH39u51FiB86LuvbJLsfnNKhnnCFXz3i9YqFjmVEHJxAKGj",
  "key2": "2L3Ecr8sDngcVGoHdh7DkfLQ92bEYvWq9Dp4AzCzB9v9YD1EzyRxHXrskTS7Bb4VniaMDHskPB1om8RrQuZbEdsY",
  "key3": "3UsvVd3vjWgMq1MAoajAp54PSCzAHaDX6L97Abuy8Zktjr28rYRebGUPdbVEyBcFJFuXuc1bv5qGybWc9tkEzEUD",
  "key4": "31LMboXhuESy5sCQrRAdDLjtr3KwQ4Gw7BnGGBpbCEGJFX6TU7LyGYhEVAJR1DNnLwNqG5e3BuFMBiZrz83r6yqw",
  "key5": "2ACZXSqwUjcVcrfctotK68xN3YSGsuHXAEAhNqNzkQghdmXLQzKJNJUD1t7B82BefxqpTwULU45KCo8JgWkWi9Dq",
  "key6": "2JR6GCqmajDbaL7fCc8mAdwQEhi9tpfrz5t4yACWzRfqHAPezQVkgpvSQYd1ghewabueJYy7tch2Q1AToTriGwRE",
  "key7": "5JcDayDpcpZtyD5uQb7Wm44Quak2guzz124oxX53fX9kppMaWDyGUDTDSWuchY6RFZwe8nFPTaK3sCVscAk4gxyP",
  "key8": "2uCjJfPdWjP3bYMPNTEkS17SDe4ntjq6wnR1YTodpDHMfAzcQwYkjiwAvAqARvrzZqUtA44VS49PxNGsmNMibzJR",
  "key9": "4pPLrfVwbdW8sWqS9CnUJmbLacKPvEnchoC7SYB6qgp897tg5sxaGe8nee1Sunn2R8Ed1dpUUcLca73L9R2F6mEz",
  "key10": "4Be5VbBCdAcPsD9BAretdn3BYgPRAcLBg1iJTtRzhJMjNDrBs2jQqa2FdVQQ8UbAx4kGTmjbkGBSsxLhGeWYyMyV",
  "key11": "2kSXAPPgsWgbkcDwzHLP2znwbauuPrRwWfbhPPVVbZ3wnu5b3dBrNdY9k2NwkGaNQBA6ocM3qP9FkCaLwTCgm48W",
  "key12": "3HwaxT3m1AQRg8SGK5VwiHHT9DQuqBSqnzucBocx1G8fYG1j6MG1Aq7Jv39gmJU3FiRMjZL2V6kr2svEMYhjZKea",
  "key13": "3tBhPmUiAmbiiv25SNkppFvxumY2gf4D9zcD2BhrMp8HyyaTwzk4uUL7WgQypZrK2SivfsDLS2KiirKtR6cTbkki",
  "key14": "21JcNu79AM3KpV4BHJTczommgFgkVMikPpAa1z4i85AoyZqgsqT4Fho3PAYW4RgvVZSTV9tyvE3Yn4LHBoYt4sAJ",
  "key15": "2ZXaFPGM9beGrGYbZmNdcswwvYWDc8AgKrxxXsEQMpTES6iQ28rfaqnFfSNZYtnzSwRt4aQMBeTHSxiBoT236xGM",
  "key16": "3CwyEhNXY25f3F6rM6cVze4Sf7cqjN7kZy3FkFm78p1nae5CvvNnV92xGX7h82zUCvPreSRbVvKsLo8w7FDpcta4",
  "key17": "4iVrAtvTKBqkwHdeu4p1yiZd2kPfTVuJwb31i3n5zU3beroPjiLNnzsAnYGViwfJytDeNLjrcmGHaTuHtJAZYiwh",
  "key18": "3cpDAxDzTAt9oQjTtVp8aGsw3yHADtUW2F5jxF8eU3c268nnFTLBswihP9RwwgZdN4EPVis44VNLX5hYS5wstPgg",
  "key19": "28zQ9FZ8vzdz4dR7aF9x5kLCfadtDbCQwPtv4pDQkHvAgu5qzeAn4s9QLQCnHi1rAQoTsKQXVYybLaFVE83Uh177",
  "key20": "J75R7DV4zQ1SzZqdjDwoZ68ThWBdBapWkjhPFBqfyWEXJRxGfq1AWrjeRWkBUSee2xtJ9U26BGq971GCBFiK6TC",
  "key21": "275FopMxDfKZP1FFEUoxXWiX1MTX1k2J4HgLLN5DM3p7E8m12nCS9GEbh5qvSK5SzTyUj2nyzBfJijUbPHjVknmo",
  "key22": "3YaTxNvMfsqPwKszNAWLPURrZ9PJagxXRLNXQU4jLVm8uKdozd5kEE9fP1fJzGV17xjZ3uSc3ctRHAwxBxeW3Q2U",
  "key23": "2oNQxgswfAnvx2gWssncB9VbNVCCnTEhWaAYt45e7YU8TZZDMKAH1663MYJ52kYMEurSCJEiPhePLCDaD1pyKQak",
  "key24": "3jZsmULy19zpyqKN5Fesqd6J43BqkceWBuTm2QcbZ1bXXLZMKPJRjgvGcB5Apw1x5mxPPgWavR3ADiiKXivypgyn",
  "key25": "5bcGGtq4gVLR5LSwAVgtTkHmvcBD3CMKh1UEyA2rbgSAcmNZUNBbeprGRGRxWbKuqGG2SJMQBLZFJHeXaF9zbL7h",
  "key26": "3txGb6RB96jKbWuRU1myvYjQBtTpP27Ng8B9ccH2PAucmUuD9hHnRwGrjR4ojLv6Ny6wmzVEPnTpezHDFHoqmce",
  "key27": "rR5AWF3CuyigSGGQHr8hHd8QT76mt8yErj1f9PNQp4GzSaYt7zUV9QMsoXpvi3UcF2Z1M6Bbh6JJ7chkxnbna1v",
  "key28": "5zCES18rfunjwc76cPJLNK1Pf7AbQTG8dBuvA9CNGAKfJ7dRU6nXUr2FGpptTdyfmSdKL4QRgz7y9cAaAYQqQx5Y",
  "key29": "4JFPxMN1SVbhMEKMiSnYCtbjGbMkpWhwcTPnhepKQ7R6BouKTjcyHJX3pEt9yYgbEkFFwpWYBAAScX4F69zVu7Lw",
  "key30": "4pE269UmuQg4tGvrPk5b6VUb2nkxMb2T8bCzjVLXfq1yXzn4MovrxTs2uy4cRw2LyYTPxHzZ1doCxg5dyfxoEueL",
  "key31": "5Pdjv9PVwUdDbhfGVbUSvLTtLcVvfqG1BTymfkCFgabnEf17XPdrtcGXD7kHX4GB5nrMFvh97tkn9BDHubEN98yo",
  "key32": "2nw9ib38EyxgTDWF1Weo7dYUPTTvgkyaQEoGx9X7EF1gugaracxNFUBk3UWqRTRK9YeRa6gsTBRGXUtFvPM5iGRJ",
  "key33": "2PEk9wkKWb44Vb2FpeicbfCxFkZNG4FnL2aLHwDFWDjD6wLcvcYMayzxHYwpdxD3mMBrhXcHCgHJYCvcdQpKhg9D",
  "key34": "4z7U5LgUr8bq9XZVWyuJrxma3AiKsHsVSFrXKzE3pP6afA3SvsvB3jPwpGY6TcQ38euywd7d1t6RYeYhRZcAR9TD",
  "key35": "3SRhwKKnSMJVEoPXPbjDPX68mq1Uu2xEu3YLvAFTAYQLzseN9358jhizsJxYgqfBNEHBgxkyBimDyZSh3zZqwf79",
  "key36": "2r7betQTCPttRVzinyARKYWhR9bCt3C9i6TKmuRrtus3kFzS7zWrktZiVfCqhk319kooxnRuKjYZ86zhCh7zpRLQ",
  "key37": "62KMqYRXUNGa8hZufEFPsFVT1ZVZZq2hmLurr9npzECGAT1eXS925HrkXJLbePYEMg53FY2Ho1qb9RX6vyUEeNbA",
  "key38": "5qPvfXGhteT5yNQ2TmARGyV8Mgz4L5RsdV5wHmg3jC27j1JJk33pe5Pcm8Cv2fuW9h9kHDGsRrriLmjdMxzaheWp",
  "key39": "4Y8iTJqFUimW9sQJp7W7g2U4eTaZRUGJQ2zgXoVgh4MKUWGq4fEohstd9ferTc1hP5npPGkp5AxYm2Z4mJU2Rk8M",
  "key40": "3Sryxc4izZCYsvEfFdbX1HWFufi17t1sPKwE9f8WshSWveYdrpK3zaQ7EZ3w8uC5GR23qTHFCoTSanC5Eo29TFXg",
  "key41": "4xGX8WsC1tVehiysKt1yqPJvLSqz8nds8GPUjzGj9sWF8Sa6bcd86o6FYnhNpEimWaywXanqfWndfcMB9RXBPuDD"
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
