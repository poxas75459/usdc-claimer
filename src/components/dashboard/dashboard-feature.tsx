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
    "2CpwhajyMNoXpsVr5ZGv611JiLChskjC5xKyKARKzvCn7ys6fPs5qZUarrnkSk32AJ2iyFM7Qj2teHFopcAhMvPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qK464j8uR61xguT56YfcvSByfF2mhXvgmCntfjFruwcsSB1oXzoyPf8cE7HXY4TExBrtHhutueZTTtQfr9isvJq",
  "key1": "4cCYCnqdCPydiXbc9dNp7GB1qv1gsNuZgzfFiD8Lc7DRJ8eGrc124DG7MxovQS1m89WL2TUXTiLofFhGrgZyR8sk",
  "key2": "2WN3Cz6esMK3Ggt49FaKRe7AVQow2Cuzr46j1C1GC4NyZfv9dfk5qxG9NRaTUfNQb6KF46oNg1bma5SJb12Xrcog",
  "key3": "2AKVjaeLuqwrSxLU6BwwtrCnGE5EQZRDyajT5SV8Fa8dZreV1gAhQp1iQfFBW1869kK6LoshBpS4pFsgtsJgws2c",
  "key4": "DiZB7vyN8kBEoSWmu2wu6JoJeusKSbHPCfTkDQq1NkuT5SgujrniU1pkYhCSZmebYVV2SRcp72q3ALg45ZL3DyD",
  "key5": "5XwhsqoG3jXeq6LKjpqcxhQcPotjUhyv7qtVqgcTB3t8k7N9hvUGqp9Jc5MrMJ6ZdB8eJyzWukQn4pdGKgDa9Rwt",
  "key6": "2dTRpa4y1QMwqEj2MVqv18eYNu88zTZZ36rp5fpR3L7hU1eQHDzzWHaFxN5WzoXiWqxMWXyKiBw4j2MyJGwbzPdM",
  "key7": "51C5EmvVKcJfCN35WXrLNaM9E6cufeLpaBMYW8JZhue7KkF43RT13948RFKXxpKaJDKoaSX1F6ptnaymcd32Zfqr",
  "key8": "2tJKQ29CqPDsxt1VcwJxz9voE5dhr2RUonfvoWpmKsPnFJ8ZaBkKhemK27XV37HPUv8XXx2VfSgConH8Si46trx7",
  "key9": "4fdYwtiH58sSV5SMK2YRuTWE6m3c6VdKFcQXqreP8FjbgHbV2VT1ThPuBPfVAgDnwHa4dHQvhPnF4nYnxD1PHu7X",
  "key10": "2MGhYF3o693XEyzuiMzrRozPKkgasMvD3ZC1LDaBT8Xmv5RvBeoWp9JyRTdZ5GB6CA1s7Dd72x2v6TfunaVPRMuX",
  "key11": "AxonnvNa3GcnEos3Si7fxSLuBph5TVu4bjKz8h4kQjDGMf2HZimTvYL6ZoAyKWXfJLNrGz6mULCaYBzjswAcjSj",
  "key12": "2iZqREvTCMz5zKyPMkYeCvMeXAZzsMjFAEQ6U2f1Ng1e3Ys9E4DMCpj2G9D4Czn3W12R9Ey9YpnRgFQSW3NDa8k7",
  "key13": "3TDkbee7zzyGy3Lg17zmtUgyai5stntPRkMfgXPd68EZa84j7NTWLB882FpaKrxBLSVxe869GRTaWRG6YAb2V5Vc",
  "key14": "5rPRT7CMHgUbjYDDYz1kcC662GWH5R5dMMRgLi2nwh8tpedod9thsc7fnvQcVMywMF47Dn66uQfiGhbMCyGqFksc",
  "key15": "aVx7Hasod8n4QREnm3hEC6MCJ5YpTCZL4NnGG4ZqFBfsSvW7MMaxFRDy3cv1NqaHv2RuWoh6PpCQ7cB1ibHGVdY",
  "key16": "3xVX1MLHN4xCMXzBcdFiM7Mds6QoARXJcs9sz7uCaiE1jBQGc8Taun5SHaC7BPXeS9wyRdSq8pRA2rNKf6SWf69",
  "key17": "5fcpKNRMMMCFGhojy5SF74AuTAzWgaszwEuY2vGZ8HprN5j6Ds15UnBb7zFcyhFrUwZ8pAKRqaJU3gWJJae2Xb3R",
  "key18": "VfJMSt4CrNHPmerncnrnxyYkD1TdqMj9RpvnjvB1j2TTDkfMfiF4cuThgbMLReqkA1nssWp8uB1ZpNaWNBYNNwP",
  "key19": "3QGvhmoxS1yCoVrh9arj4Rig37sf8V1cN7QyopZa5hebA7JsSM6FPWQ6tW3ycMY47i3Ym9fnKfxr3mAxrAwFJ5m3",
  "key20": "3xYnahZycw8kusVkvqZ78tugGWaUQt2jKAXLw6qMyfCHP29T6nrnxFVDLZ4T9LmGbHohPSanV4FDM1JN3K46AcpQ",
  "key21": "5GW8nkBMfkubsMvudEo6ET8dAsXYJSgEnZaAJBWL6V524c3pWmRg6VRGgR94zo1ZWBATGW6854BTfoqjRXnKPtFg",
  "key22": "5B4mUEkx3SmEqjs8Wv55DpMwCa6zPeEzoFqk5XNAvWxjYyVnkfAtE2Xjgm4wkDhTTvj2yqMEWVA1od43mydUL9jk",
  "key23": "312SwTqgM4VvhCZxgnETcV1r7F1mkbSmDiR1aevUpAn5h9NuuppCx9D2u3VEhWRMmYG9qUJ721saan4S69Dxv9g9",
  "key24": "3d2eMx9EGykiDWtRbzjhcQbH94Cjp3op3hpyXcCpg7yxegbMqMePSindaQsBFJYRLV4wqoBHALXieBANPoH7ggs8",
  "key25": "k8BwdhZuxzLoU67X8wbpJK41Xfphp7BARiacWLhBzW4NkcbHgh9gGTuUQ1aZfFpThzo1Tq1Dcbq9o3yghbApExQ",
  "key26": "3dqbHWSsCHh4yMcEYabKHkMMq9PTSCKAAbEetj98LKhbVYvsuygTVmavu24FXaSFcPRQ1ppAj11qbPPKHoXRQ1Kq",
  "key27": "5okP3dMJVpjJZ3scrjFsXR1SjfJCjbTqPDyX4eudEUjgKbPtiSozwHo59R8BsPxrhKm1Z9wVTQzSdxHUNqAzkCuZ",
  "key28": "458gJB7a1n6zDqMjspuRTBExoT2xi48gE9WcThWPdUJsPydMQQ59ERAESbKoAJZg5wKjQkG5b5dzWrqoUeDnqw6N",
  "key29": "67NuQr8pH7KM9A2Uw4x6Q2X6TbBawa3WmMEZG47mJxV1nvd2EHWU4MhRdowdYXCL767UqqbqQ6ozLpWRsQVUmMKi",
  "key30": "5dpmA9SwBvxkj5eMBCni6fT9sYQfv68ABU7nDyE728ZTYAyqWhvW1uAMcn1wmbg6DbtsZmnmrkjwDKhaJzGQzbHn",
  "key31": "noyAmKptb2SBeBTfiCnYCtZJRjVecd5PjwZWhYEjPnpEgiaRythVWthzTqsnYR2aTyAMeDhmTfxLb59jUNtaHV4",
  "key32": "5sAGzZRb5iaemUDctEEVWLyX8ifDut7FEZdJ7mXRppp2bcudCqd4TBHPuHDFCvYedHoo9R4sLWhjtveVqf9vihev",
  "key33": "3KAi4s76eJHwtFpHLP2oDeTuZvc21CM68YEbxqmsCgbGVcYJHBHbasjx5Zi4W7HebByLNtiXN9C1MfFjaD9tBU7m",
  "key34": "UDYNTAgDBhc9v4amuawNRTV6gKyrh2bEHfxxJ4zUtJpW1tRsYpNJ4mhYfy2jUdWTVpHWTNxgsKHCFyzRYw8J5T4",
  "key35": "45e5XLtS4gTrLx7pLMoFKxBXFHp1p6K2qnxHHKJPVNVkQ7nZhAXYoeNPZvMAqt245CTx98BBbog5TmM3wzFtK94S",
  "key36": "46C9tamTF5jC5euVNRiLd6fcpsjuvDLeBQj6NTPzPZAWuAwFQkTQeLVdcLt32vXufxD2cBsvxSCrZmTAtuB6RkCd",
  "key37": "j3L4PmmReCsfL3aBKYb5kwnMUjq2W9pUBoncXdGwDsP9U3v5YSB6fqsZ6RxEyBTHeVut5qeXyfZn7Bh28EBh28C"
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
