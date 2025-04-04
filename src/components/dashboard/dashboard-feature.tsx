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
    "2QoVsa1VCjNJeHN2RLchfA3sxo8515qiSiwgkw7RVraBgtMFkwoDdf6xrL8SaNVph6H2Qmyy5pSm63rJtZYg8ZxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5WpqUN1prCJivB617cz6SacbzhJmrLbQRPJYxkeTmcsk9sVdmfUk6dBLDhJZRdNbiu64veDN7CxoVKjXcktmpG",
  "key1": "wDoQLTUZ1bUAk9VFKkcsZRHAW2MtZ2o9RfshaPn2cMHsqDiXyzDo9WrZD3kxWbyJWSQWEhgsLyysQV4xyvYwpiz",
  "key2": "5ujLtnhKR1kBWEkBuz4AcNLH9uEhvqmsy8jD1Nx9bDQwFp6nyxhBp1xVANAyGnYTjAQ7o9bMdMgpWnMC1PZUdXii",
  "key3": "37BFYPftraXcBzaNQz4XUt6NsxYggYjSCaRPqGmFayFbrvN5c7NWdtjPjLtJ1iNCkjWkUJWVnDvbezVXRaehAvcg",
  "key4": "4PbzaWoPkfY4KeWPDi4Htd72fiFFenHVGBjPvsfcDudoWacDFBmSf5KchH7bMXExbmgE2KBVtU8KzGTLtBW8A592",
  "key5": "2JNWprYvZ1QCLw6mAjews6geofanFViWwYb6CzfnaJBwfkZXe7JDQF7EoZCbepxH7KvUEqqwDRAJKeustwb4oXPv",
  "key6": "2aYV8BRVgJctYCrRWg569Yd2AxGYxrHfhJyv6bcQCKM5dxxi66vGCeLFVCGvZib1QjTX3C4RGTuBHYdLmqVcv4RM",
  "key7": "2C5sY4x5zurAv5Vg3G33vPSd2MU5c4Pw3eF36raVAxaWDRLjHvERzFgcqYRcnF4XzdTgTQLQ4qekRwpvXtW17quX",
  "key8": "5EH27z7x74xck7R1GkK1bMGpqs86EZjYuM9ubeo8KQ2APdrVW4fVjoVWyZBgh2bwcRPneqZL3TgQ2gfjUhhKexS3",
  "key9": "5edhxwBiZ6eb2UgtzWCTCg3XA9CgGn2miKTyAQHDdTAN9dSC6PRUpsotjQALCKbMZfnDeUzcgKRrG7ew7MYX1W92",
  "key10": "5WMvSaGKjVq1DQqTw8vtFfMsGrPBDUWmS5Sm12mN5hSAHNYfJijijkiUbjzxXDHRveSDrt2jZyF2E184v2pvd1SV",
  "key11": "48eXeM9aiSKW88FWRc5G1xQjo4tzU9PmrKoV3iJYLd8acsHUDRCYmiQu2U4hEcAmPscyGQGieurBEAEqd73N3ahT",
  "key12": "3hGCKzSq4bRtCWeqZBHrmaWdW9t29uNkbhVGq2e9TrVMJBjQnuGRrbwwreXsMmL64AfXNztPcYx7tLdFC55HEDDx",
  "key13": "3YaTiAjQ1B8owv3UWorEgJwJFrmW2jMax4q8ntbtqqB13yQbFYkNpbzpw7VQ8J8pBrTtBTRbHJacbv4Royva28xp",
  "key14": "QfGKCXGtT11BkE7ZYJYmRQUYkwsHEMZmSw1t9FQXLtBPB2gRFPDKwfGr3ebw1vHjNBF42nUSTdriQt5UFPw4LQg",
  "key15": "4HpXQRvp6SSVEoGyE3RBteM2Q7FXFy4tjRDxyfRUKL9yRRRaJxJ7UjCRtrzMyx7nbbjs9SstuvRJxEXQ6sreLFwm",
  "key16": "4KR7PYMzL9e9Uc7PN7TNuM1Yh8RYY68bohZnyc4q1Cr8pYJ79AookczwcPRb4Nv9NrQjDuLZyiGmRnHdR54qLsGL",
  "key17": "32y2JqKU9cdS1ta3RBkRCFU5a5cWHt1G3YKg89Fp9AHsC28piKqxmMSdQrrbMuPWyqD21amnwxs7YzBiAdLqUoHS",
  "key18": "4smfcLqQ3BgXQMmaty446biMFqMbn2JtWzhSx72KXDWnXAiMpYokC8XHXrcPLkWcJHbVYrWadz51Rfpm6FsXwhVE",
  "key19": "3xT1eq6QB7CZHiQFua4vT4muiJxiXxTEK5kiLz3bsEk3cUvsmRwaXnsed13bYr1XokwzBdg6cBRhLRvrQduwLNfX",
  "key20": "29yKEDniR9qmaf484T2hhrcmZxbT7JFPNEdSYYGTZQi8eVdBJdYVwVpnEgYUnAfQxYjc9FM2U8UJvfHNss1sHpcq",
  "key21": "5vmfG3yTpXNMYGSTa7LAmS3sbGkTv25kEKBti9ZGBJDE5yaaWx2QFU9BGH3nsTwqGWn5h49D2pJK4oMbMwn3jKRi",
  "key22": "2MaBRhib6uxTYYfqJxdepwJfKcbLg3xxiPPZkkPJ4GzFLy5ZR1Agiif3V4KXWt1vutx3ehRAVBfC7HMc8eJCjkc6",
  "key23": "4rvtDtLUTJBTfpJakd3qSUPzJnDvjYCck9CvK8pYP8uYRiXhGobF6gASvGuK1RFiqAmvQoLLPasa3wGurvbS2FA9",
  "key24": "5AEZcicqsF68YC8RtyqtadNa5BKtqCDDSFjsaMMYXbvGYi7roEQPedC8KXqXQM5sKRwszkKxmqtDSknDuU261trh",
  "key25": "66ggp1odM7xVbjdMozSmE85JYju9TfGib7XDtdZzGLpYthLePvxWWypCXd7zoi4Eyx9k6V3mm5gEdY7Qii1V9ENx",
  "key26": "5tySEYSuFVtCxnAYqWFoU2e5uwwhd5sTPqPUU35q919hNq1pHDWNdNQ3ZM1aGfg5dhipU5REo5913KNnhc8weyKX",
  "key27": "3uid4De7hSNbsdTuDdBGGJ58bptEVtv75Z5drL4akVzrJxqwL918rmz9Rajxu5Si9AZyXnVHkLC5AXD8UaARfzgL",
  "key28": "AQM2f2HSAgTzJNS5HWf4xvFDafZekGkLSQr7ufWKDiX2bjZFh7soQeYYGMAgGHbkE5rjCBkrdmdE6epsdoPXHbN",
  "key29": "4gQH8gKtoJwbVWWrYKUseCmQQHXScGMhuVRJp1iLZZ85MkQmRM1z8AETc3Nf3Cbb9yCjW6BbWQVSMqYV7gLwnXWp",
  "key30": "39bBL8WQ62bk4D7XiWavSv6DfU5TUcSqvuiKKeSV6CxgfLhPVKJDVau9MqPbCtWVCWsoTR8hFBb5iq5hw7LXaJd2",
  "key31": "4Erek3ZA1CAJdmgYqzHY2Yodkx9zqDZ8Rc85gaAKFjCVJJkDCna2eXDJzg1gMkHvnrKWgFdegefb9zfQBaD32Hw",
  "key32": "2kNs1Ex8onEZKuEZXQbBVWRmN7ZN7r2LtCQ3JYqiteTxSAchHivAxdhNuAXuR8ay6F6CG76kVqC8Aznk8ooVgZV9",
  "key33": "B5NCxrc9HGRRFDdZevbMPF7ktpk1hSSfbPdDWfeKgUHWd7FNRJEk6skNHbhB8iq4AsM8eVexoWeB46dDuRZrRB5",
  "key34": "4YL6f85azqhqtbDZTvQxQSEvn6Mw71pNMKjnn1kb63tsnnjFjCBYH2mY8FUcecc9PznmRRdiJu8HGsXBC6eaawki",
  "key35": "5u1RSqeLTEXzAeZ3jeZ6auAdwVHFFsGJSdinRxM3C23L9qQ1Sh2QZ3kN79LyhD3ehP9SjHfEpLtGDh4w6MiZLsG1",
  "key36": "3pCihUSMH59K1iQbYt6ZUyiPADu71xZEh2R9XAkbLevqyhfjE1JiYF125msB96VZPmERuopTvgfXW3w8GwNBQ5aK",
  "key37": "jJvpPYm9n5HthujvNJCtaJcTMwh1g7yjM2XFyXtfyGcCP7QShdzesxKM3FTvmSkJK8PqtPcTfytWGyJTZaZ2Xyv",
  "key38": "4LbyofhWdcywj92FjtXqV4sVKWVP9g2BsGpCZCS5tLF1KTs7W15GxRqrT5RaMBHBUW6VK1Ye5izEfDV4Ysauy61e",
  "key39": "5QDMeNtT4b1WEBx9pC7B3LYuubJPPN3pjeuuXsUecvSQXKnavFZcmYJVcar7PRhPWeAUwxD9R1WW82M7WkLVufo",
  "key40": "2TR9JcksB1X3JQjjzbGrFoymWPUzgt71ajbwHjprgxUNEesuNmZopJuRRXoLztDKkwUtgbdjrjtPk3V1g4dGupnu",
  "key41": "Jimjas9to7VXR5M6YcatESRboExbiC419Bhb5asnbqBjChbACAMpTXwhaMzL16vKHTZYmaiXKUFWKbNChcjgu6e",
  "key42": "4eyzZ2PAEiWqpC4aMXDv7Jv9Xq8BGNxm4Tmth1vHGTNsz31zsWemesEbPBmQ5poyxxkZZKwvxQKGBc8mjqUFY1Fz",
  "key43": "3jfU3m8npiLpenG9kkioCLrrh9t2TmkC4jJxN6u6uVTHUhv3EVF7Leb5x9YSPMNfiB1QRBG2CWAMULvJAQ39PAvN",
  "key44": "23sv4p8EtedrLFLmTLBdH9pxhBjKsYUX3d6EqQv9goEFQu6FoAjKMDWzTEeTehnmuJfFbzaDhmSs3oPwRwo4MAme",
  "key45": "5wt3iQvCfupuiichdFwKJfVGtYXXQLZj18yGXiDCENPgYfFoXhRTi8ccfnpBX1w9i2ksPwnKoKUTKXfoBtEq4LWC",
  "key46": "2iRKpMV5kNNEQk3H3dVH67ykTjGofWetKKbUjoYAiwbncG76ukGayUBCexLze1KqsFCBsVwmScz18CbpYfNYAJYj"
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
