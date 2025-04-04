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
    "5eJ2pxvoZ9b4UQyfzMVAtaphpSguBqmDgRrpddPRKQPMrvZQsyMY2xSUK3umBf9FAXkRsoMWifcTVBsZw8gyijC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCxFF1avmjam3Gk3x5pm1dK52wz9YZcp6L18pEXfN1kuroCJAzfLiFHmYHQDicD3tmpTmuy9sCQdqr8Vr8Ac43z",
  "key1": "669k5TdzWL9wq2HZiX4PnR9UXntn5RhHSxfaY5p4c2kN4LLhpmUBPmoARqE37cX84qAgMZrZjYoX9c8P1Vs1r2dA",
  "key2": "5ucvjcP8YNvsekaPgXgSqKpoSgB5m8UmfSLUq6kMR18iWS4CmCfTBDrzBetTui5vyPyvTG3E6JqrzDTpDJCoX6hF",
  "key3": "Kufed27SUEbb259yzyJvZzaTXNxBFySp3dY79HRpexGdrmCjQYCYRx7UURgrQ64FEPnfpEBRAzyWXyDrVcXcYAr",
  "key4": "5vfHcGxq9n6hnCp9mNp5GVvS7PCukN5JicEMzYEttXevCJKHVFrxw4BJXa6tBMKbmHzG8bYSKA2XKyXSFJjUMGHC",
  "key5": "gktPQ1nt2CZXzMihb6EPi45HE4fcFLaEFe4vejyz84g19NqNxuGPygFk8DG7Fn7qtFnUeKD59bMHWUdcBT1Uk9U",
  "key6": "2pD79ajjCKpHyq2NfqDA99cKkhEvAqWRkLMiCW8qG4Y4QLQzeZYpU3eUDtbRGY2Tm6B9svwBqTK8Z3Cx8PYwtXJV",
  "key7": "22KoNob87xvFuo3AwKosysQATv4enZWGv4syQba3Doa3LUmbEkNFnHN16usUrLQknM745bEKwxnPqMArCZQ1iaoL",
  "key8": "2RM4ZF4tu6J7AViaMvMGRyQhSiat9GzavCBTK9EyNtGbtF4wUoTKDbS5UTD7KfGSJKXhiu7FbSyUHBDxD9TNYYmi",
  "key9": "3wSYr3ZXERoBdYMpFYzbHi6J4PPvv7waCt3bxn5su1xykyGSiXNCi3558FHkfar6ZJc4zBLPLPZqGMFLsTx8e3Yy",
  "key10": "EarYd4dapctPtQAY6fgh7Ve1ZaTaUsx5Smj7UFwCLwzyLe8GsKe3bpT1hXHco22cJfbuYnRE4cHg7qTqW3VdNmq",
  "key11": "TeSCAnXTUqYWHZsuVoExmiaT3GkGQcH9NRHpS2RhgCwV2Zgbds4h328PwcPS1ugeuBCqWkTPWrrZM9kB2rTzRkz",
  "key12": "2QV7bSnDhpBmW4RgMNRpAoKyoXQaLXhHiTNwPc4zGfQQpM5bkYU7GGw516dzSjxUeam9L4LRNs3wWb5gUsWxh6Lk",
  "key13": "5QmBUHYeNcm1ezSj8vymHuos8RJqAeWp8QbNymLVwYRb2GZkfedobnq6G4bYeueVqj9MZ6qZDLrrf89tCMC596kN",
  "key14": "2pW13wMNq9jbz2iQKNyDDmaKG64CpTp8a1NZRaXPPBsyD12AT1Mi3FJdx53nk5tpc1j629xyhMLyMMEovgJHS2eu",
  "key15": "2wE9xyyMg1nJ7PmcRwdFjwRjkDwBLo3tQfPoKja4URiLybLo18mfGMuNoagxrv7bigP3RmQnAQxjUVaA4RqVpxMP",
  "key16": "5v8X9U8vEKfacyUB57Y1h7iNiLdh3biUTwsxZi5ZqiX9dScWJ8nLddKXxXmbUXi9adLLa65td6FahY3SPJW38Ax",
  "key17": "6oAoKZ3nkr5gW6USu87Y2vCb6MRA6NGj97vHn1a1iePRcK5Acoj4T1n4DtENSw3ENcXj9SRq3QajscuTakNcHR4",
  "key18": "5bgmcQVywJfNsswEWvLrceJq8t5XrRxzdsZe8YFv6bwijPPTtZrhDpokoi3PhZDZbBg8uL6DFN14boYXShF3Mmi9",
  "key19": "3aAmXUAZKcpaMKLWVq9At2CLxyGmJ9qEKWf72qQrBakBYn1GWHGbbradtcs7YYGfpCUtMSFe8UxCe4F2v8RANYfL",
  "key20": "5EFKwHw896XjaVPiKvhnNs4yqWgGsKPTj985ejfRFMfb5NmyRHFELHn92N82xtWDRoiyL4QvzjLe5f3aHJDeKT1H",
  "key21": "4EXhayAM6HcDeqqgTvPm5PkmFgxMq2LkDgwvobC63k8UA1czPWaxEHR9Rs4sUso4roY4dQnVmF5FKCZ6HjJLEeeJ",
  "key22": "4e3ED2bynZYdEQoHhwEXChVixhjjDHUJ3UKaNnNvDR1DK6d9rjg5yxXN6LXNgLL1j46391dAcC4j1UyJsdT8DaVA",
  "key23": "4P88TdLZ6wALRE8c9mfp8tLzrHBhgTEcqUTtEtkJx4fBzmgnQmQr6ukh4kyDT8WKpLrn9nNwsSgwJaxBwwrpqtdW",
  "key24": "4CDq9MFudp1ETcXASrPsJJCkVYHxNRQyMvn9xjChiqvSfc6Lo7J7QX7epadbcTwiTgvFmxYGmwc1by3KQTA8cxuJ",
  "key25": "5i1eQhj6744123bRQQ78UJgSA59ABwkTyoPd2qE4FcxnsHAFJZfHREua5z7uvWujvYTe5SKXgMLEJvCtw5FEmTQ3",
  "key26": "4hSn4bxAAHqibuAYgGdfCZyFKtYoSUFrhidVXxzdovHMTVFRHPhPZottWg2v9tZzAJznM4VvjKGojX1qYUrA8U6F",
  "key27": "52FV6Cz7G1SUS3h5zpjqQFxoZmn8wS2kKAyXcDwFwqgtqPxcuom113UKJF3jJDtEa7ndjiaqqBDyVqGV1Xazw67v",
  "key28": "4MRo5stQJ9K7nVHmKUyvwyT5pz55pC5Rkb9w4Cy9JuedbUhrxcrs8XebMgpN5MqxjeoPm7sGkZFAXevpRgAjTGE9",
  "key29": "25D1yv7eN4gziMwmge4dGZH9MNQeLGvSbdy5HEAoHsqb9QDtzV1pi15HAeMevgXJZKYu3X8Za3h5mJZcgnduxZeH",
  "key30": "4iLpfG9AP4CVxfFmQ8n5t2tYqKhFCbpFyitJFWXFvzxqnoY5eaZQHJqLdv8CmFiE4MpohvFdvm8v6SSUzEij17v8",
  "key31": "34HRAytn8nYDDaa84QA3m789kcJjFuJnjHnLVsMFHFmynjrVgA8LxNUaFhaUEdJMLk31mwpHP9p4YQpE1fdGQBrX",
  "key32": "5dKPnERDjrefGd7hYti9s4iRNDbPAVN65TGAiRfXDKhrYCzZH4yDZ4ZmJVYr51iusnkZDon1ozpeexqzhye7xSDQ",
  "key33": "4bzWNEAjT9NmMAW9E5Tb3tSXZVTjvetjaBZ2Xsd7LmkNcUnYibHT3ARVWjv11YoHBCznPvXsJTDSBoooEoA9Vxza"
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
