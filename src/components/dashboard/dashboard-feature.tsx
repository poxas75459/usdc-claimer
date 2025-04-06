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
    "2f1qzKTDqcVzZkzF6iCueNAsBv5zP1FNAJss1LFcvUKZEcK29MTZRi5ZKvUMBGcMYwmkrkzF3X3vVmVzU4sz2ebY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gTngJugiGSQa2SGM7zaksX6ceBWUUowtkMnwr874UinxXYvDC5wNRJt6JFQkgUbkHhVknvRk5rZy2MmnbU6WVcr",
  "key1": "4hzGC7Hj8qiMXpGSpadCo3HS6iseuqYRZEDqZvJLndwjSZMqLgS6y6q4Bf7py4JkC1fqzUoat7ZEjEZ3meEmKCQk",
  "key2": "2vJjuQ3hafrTx1rEx2aCuKqqCXHua6pzWpUhWoCfuDXbVyPimSoPtjZxgReChEbcGA3BeTL5MzNWDYxBn5oUczGi",
  "key3": "rcfLCQdTsiXZBCG5x8BCzjeuhDUgzQKfXn6nLmd8cGGgNDuvAE1hguKBMZRWz6CAeuYyetStYQ5MWpHwx5YJFNE",
  "key4": "4rzwDpnzhWifkW7i6NuiDKt9d1YbjwdvSa2SMyFM9X5YtZaM811XaZMK8uVFoh1ihjSVUpL85jLbYoiP4UsUTETT",
  "key5": "4JsWGUwoyaHTucfDngZa3rQZgFtCiLvAMsS7PcBTKXNXbwehrnLjfRc5U8UAfL3dMDHZa5jQJrEr8y2v19oZgdSJ",
  "key6": "rcs271zrBEAiEtNXDsBaJ8kTYwhTSKFGTmbfetcyCG8NdtHhxLdbdZhfQLjUVm8ahq7cMbbZTYGNJmoP1KBPbrZ",
  "key7": "5AF1hYRyzxTUVzt6jPdTzabFDCeLvDzvWdGMGMiJJE2QNdJsMoZkLQ67VcCzNiaRbDqkttpjaJMtbRqJSkPSMCQF",
  "key8": "5vurKjrVVssBhqWJuQ3sWdKQEveTDqB6d2fPBF9n6k6mqzbczt9eNHy5p3Y4wDCUTgHrWeAVTSBND6MgGaWkjk3U",
  "key9": "4d8dqjtsRfh7Krk76a7cq96nQ1yp97CPuWN7T6Ldroo2xSTaykJz2cCmEKSGvn9vVRyxYc87qJFScejFa4D6GmL1",
  "key10": "4CBiuH23Q9tHFmGDq2J1RjDtU2dzdp5wkduK7BY81sPWonF7mf9g7JDJ1Xx9zVUGboSHQfe1w3Ggix44dmTb5YGU",
  "key11": "5cMepTU5Ckg6UthPzey3HopepB5LwfqxokR9G6ynxtYDb24mPcgvRqdjJC7aNnpfwJ93H43neYHVio8zStcz8bPg",
  "key12": "vDTPG59MWHzHfUxiHXBLXsDS2RTZsHAVwBvhEuYFBmepNuiQXHu5AY6eW8JQcPUvTqXLcc2q1SetqGjTpdrncSt",
  "key13": "4uZDTjiwgdCm4vabLQ1WGdw9Pbw7eeAYcJo9rhnFj75Lc2F2PxZUF4JFAS6VkUuKZSYtCV3AcMsgkVteGuLWjoaq",
  "key14": "3oZcFW8EhEKmwQFEbeU18QxakrPPcQJgr9BcwKZQXRSJK4mR9URAsVCjV6ZZZ15uzynEDsRF2UzPi4c66To6QEQT",
  "key15": "2WYVQiit41KNXBh7WktCr3X4jkMyXCeo3TRZMsMiLCWfvCgHXRyZ2oVyohGHRVdwKbXrPV3uxzYUUakr25BdkNFs",
  "key16": "VHS3hL1UuiVKDgsbqQU2A3ATD5MFecCZcJ8hebxS4QPaFuVCRHsCxi9ESa8TWjn6JbT6YDi8XZHTMrvLux8GAAx",
  "key17": "2wXodCiKrqd3d12WXFR9vEyDXBFdwQLULv52nxuJGgAQGfjsaozJouDu84doGA9R91mFtQhDXjagKEBdN2waNN7E",
  "key18": "gM3xYLNQe971UuZ8T2s8ksKEPxHYkaPbcikGjgzdL6AmoLdAAe2jFwtcyun9N7z7abXa66TFoX9FAzNWnraT7Cb",
  "key19": "rwdok9u4pkj1zhckm6h6aTTRiGn6kV9ioXoruqjmSFsi9LCxG7oJUg7YjpQVHpSDCorbgvRRSYWsR78BzMXWVht",
  "key20": "c6dXAhvSu7e4FYPeFULvPCnWAesNfKRXXQnGqnQRBQ9uhGVNFouWDqCiGjYtwL2yWt8AQokVGRgzqi4UCuPjKuv",
  "key21": "2KJECyJ9WwU5CZHjG6MynLB2kfMSR5pncG39MdkgtRWu4YQdhi1ALpm2FeSZSyDnGxVEmpAbEvtSeHKLx39xAw92",
  "key22": "2Ar9FCLHGrcSjbrgxrabo38LdMedBMVcTuCTqFoPcptfrPG3UKxEzHS8feKNXawJYH4ShgLHeBrs542LmP5KAXik",
  "key23": "2zrxGuFk3CXr5EpjTFEDKZqtzaywWugXPMvFURqiyCQD31Rg81GZcfUQGtdqT7DzKsRAapviYtZMCgyJ48w1sbpt",
  "key24": "2Y5JqgSR6ktWMSu5hguvyAsYXyNhSBsuVnRzJDvuvJ1L5qSx95MmVTTn8YyviGW9m8yz8Jy4dSAT6S3jZfofgnRk",
  "key25": "2fCe8PJweo6DCnFspjnDe8X2zWWwgJs6ruhbBB5FKR51jQhRLnLkr1kkkkrU2osSfHubchVA2pUToqbDT4vGK7nC",
  "key26": "5VsGK3wgGC84PR2GCVTSJaQj6k1pnnyV6nkPXzJXwyARNJq3RaYXUok9MCfuC9rmjxnKg6C5canySRHzZSdptFwM",
  "key27": "3h3Ep7iu3S8sSku1rn3AZe6V4PkntpAMAxjEVpH7oWZkqeKbveKni1CNjpjNZgVM7po7oecDGyoDWmqjGSN5F9HT",
  "key28": "42DPzcXx1poPxGtcwtxmt7jgZCtRh6ZaExfaTgRNBULravDd829W9hQHtqNMymyBFXNZ4nesNvpUknR1GY1JjtiT",
  "key29": "4skfvufmgmAUfyyNr4KC2ub6wDqxZDSxpYFX4qickw2vyEbUXbhzccSLmm2jmMCQoSA6kpKR8fsghkUFQMWsVXWe",
  "key30": "5fbqegXnRRgy268ZMbDvVjTHwawZpmcFVnMorGJvUu9xvGoDthQfqyHsRUYvQDTJa6EUgETkevGnzVSV2kRQ7ogV",
  "key31": "2uUi46Fb94soCqbayzvvGoSA64S9Z8gsP8KQHuausggH5bpKFZcxo5Ph2iSbeCNUpu7GTPg2qXcyKd5aZfgccMGn",
  "key32": "5eWonS4FQAfX4LsDbwyYc1t6da6aseT7woqurhky7p12bYGeSYdzHSktLC2yGTMRUQGedbvGgaGYagU4Si8Vrfd1",
  "key33": "4HnG5YUdpjY85y7cKNsLErGFF8koUUFVDP3zCiD4HfCNdJWFNaihFF29qkBK5dqpqsf9tvHEXE7HmuNK7MpgEauW",
  "key34": "eacPARCjXB4vmgiFPu8AFoY6iJobUitE7xeRSXDtQdHB5raduFeVhZP3rg8ccR3VYW9VYU57jCHkhnmoctkDcCG",
  "key35": "tKh2iEb3HTsoCLPMEqaCaC1tK5JAco4f3SQuakVWMH6pPP3As4mzC3WhC2KKk67cHnMsM8RWVyHyEwhLx8ZBcWB",
  "key36": "4UNab1bkgSNeipWK6Fy5CV465RM6EBEKjNaVNV4RHb691oU3khaqSW5WozjWawpVCj72ctwAYuScKSQcm32ZGy2H",
  "key37": "5YyTQ4es8mcXTQQeAkB47LxC1d13yCELZasd2U3BUstPKrLXz5gNqictBoC7CRffJg3TN5V4hqWqJEoS3YJ3TrLC",
  "key38": "XqTEjmDFhM3BAj36Jv6CWyi3pTNidb9k8tH2usrG4b8cXM4qfTF91MkkUfSqCKhTNNPKxFaAY3dWKZs1SFzYxjs",
  "key39": "n71RZtpyAVe3bnAUrxN7tiKeLV3uubLgzCL36dY6THx8uY6JUYV8mPqmGavigjcMVFpd5VgXtayhwcxQghGpHns"
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
