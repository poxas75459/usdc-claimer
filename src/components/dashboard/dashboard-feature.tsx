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
    "579EWqHwBiWSHYnpRf2pBjf9K3gaGW43SUgZKGb238rZ9e6GpACzXc1t1UarsaVBsCxT2DM6CTEwz2KAkDmq6Z77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zDYV5ZQ2cXJuzWPm66Ki5DsoHJNX1tt9FwEhAYe6C5J65Ch7MwdqtjNqTCqYegkDmZHTxryCxxBedJYSx18McRj",
  "key1": "3BL3CCPLZgNq9tL63BmYhZ6s4JGp3sp3mVbDwpzPzkYyoPA5XsQSib54TS3bSNnH7XMfoUeK9aJMHUKargte5Vdx",
  "key2": "3NvUW73H4DthrHbPCpF9hN5AGXYVGP5LQ5UWhxbmdQWp8YB1PMsGN7U2mAVsKMjmx9Na2eJthxkdvzmM4R9bRjsN",
  "key3": "3oKu6d9TbBnRfBb4bDqsi6X7vSVfVBHERs3FmTzQ5AJXjWbd4TG86XRggxSeRFQqPc2m7a7WYYEgWx3tdeiZhmfw",
  "key4": "3Cqx9zB8sbnD7mUWrcfXWXP5Fyi6DxNWzphWEf7ys655JRo2szsxZzrYwGonrtdXQrKtA9HMZH9xjZbKBN8WgRXj",
  "key5": "4HnjsR9X2GByzioHHu8acid6WYvpVC5Va22TGcCtjNrAzhPMDhF7vsCWR5etmy9sBjYwKid24FSDcN4vcXoxYgte",
  "key6": "47L88xSxoTu1Unp918EUHvUA3QkpYVfpEZ7AFdHXdSrWuxoyZkmRpVwQiKUWP6npzH2GxQYLNHsRU8a5JUM7M6Ra",
  "key7": "2nP5bNt64a3vSW1hxLf4WMNWZtKYaMFWn7j3srTr4ip486aiuKJkc46DASeiwmX5DgVAqBjA5tEDaezZRSXwYYmf",
  "key8": "3ekPSLTyjThvE5HF5JmyigL7eAqJQ8VvQarcRXJr4PuVPERrCFimXSoiB4c9Xs1979UYSHVNkuV3UoSWpKx5kprJ",
  "key9": "xGYv5JTGRzyJq8uKuCCEFgXavEYs5J5RsyWN95GtAAvvbTsxK1MQU6f2ACb211UqGH97X5bjYZCe79PJTZFBoMt",
  "key10": "5ZJCN27TxFy2dZ1WPd5Y2DDfqnWvG5rgzKKt2B6aL1uzj4NiFSfvPoMUS2qxBcGtQdXfCXLkqx5DTMwV7bkgrRGJ",
  "key11": "3k8sLDE3j5AthdG7LAjGWupTpmF7YpGUozyUfDriVcr8DT5XBWWDbf739xPNMdY674Wq48BNQ1J99uroiQRumCqw",
  "key12": "2Ncfajp2TNYg1Jw1qr3U3hUfn1V2khiyBG8cvVGf6Ng5hjTgpXoHT1JkWnrXJqC14drtMiyJRzqT5AhaFD7YwmUZ",
  "key13": "4yeEtTVqvCDJ2FMXnUYSmzuUW2K2Q6r7M6UDVFxXZfybFbqr12euzqeV98YW9VgzcB7xn1H4WaYdqpEkG32Qpzc",
  "key14": "DqsTPGCBseWULbQRTHeBt1wNrRE5TgGFFLyPw6s4wyEoox69gUEQA2vGi9PNxfABxTkLq8y7LAczfGCgTX3A3XG",
  "key15": "qePausgJGjxwpT1aBurCxLEgvdfYsmpPjPVPjT5j7gu9Lrg5xBTELf9271nDVYyxRTFqmZ5CFdECP4QnKbzXCWv",
  "key16": "yF7vKP2PnF7F3zWmaJ2abbMxbC1ZY21CcdeTudVLC2m4EpGKSRE68tgg6Uy9i4taqMBGaWYGtGvJL6VBCi8YrQB",
  "key17": "4tmS15LkNN64eBc2QP4cf4d6SUSRUCh8Xp1aJDeDL3kgDUTeJTZ6rRbfUV9brsGHHk2r8HkkzZP1BvG4XAG1yXUD",
  "key18": "3biFPq7uDTBtdz2f5GB9m7TkQtWkGHAgXfMqECPsSnMcfrPGHbNKy9Vz7wjwspPzsBhrWCmHq8EeNMsDwZhLhuqM",
  "key19": "5w63RSDvgRpqR5WyUumgQaQ5GUtw3quD2AR7objsuh1TZfmYGDXnSbLNZ81DVgG89pkgtcy843jBES3niLzCBNnY",
  "key20": "2A4G3Xu5wTJWhZmNPPGzQhQopuRMifS2nnGJ4MmfULifGq2ru72UjhmuZaKpuDJkatp3kYAVfdrCDPtUrDw3cjx1",
  "key21": "5Sp88h2P3N7RznNpgZZbBKFQ8UW8sRxGbDbvdWxpRijUKUbL9kxHrqWjjdKt6fnezm9TsRJozsBRMmuDJTfZVNg9",
  "key22": "56N6PTfndFddDeRQBiBagzR9oVvmB2zG2sJksrSs669SuUtMCK4V4PwLJKkkLtf1v68yLzza3NBwUcTD9xhTqe6p",
  "key23": "23CBVvEkoPuq63cGxbRfoH3SEopiVieTC8Aw9bwCPLhShCA3RgVpNXjWDxLthJkcfg2fz96oAzzsDiYYtRyFj5iX",
  "key24": "258M7SizjbFBFgMg1EbuxSWzAPANFBqjDKbiKTcF4bQELJ1AqRNq4jG5g1EeFeZqH5imvU4F5DJouph6r8JHW2Qy",
  "key25": "5CR5srKdUvHFdDFh4GfBjJdEpH4DfB2uGHRtHQXfD5ez9vysAoUhzWDh1HYbXNsy2ZZ2pUdiebZuS7J57gRjZbAL",
  "key26": "4KmmS4rieoWtGDaEgNcHXeRrYypZz8d23Cw2oopkrpnCSKuYN1DZha1Ht57ENC1dpseBea9eSXWRwBQLkXAT4T6F",
  "key27": "5LfzFhYsw85kFYWZcvbtgksBHni9YiCkKBBYTTXege82mZPHJnPQsjwsaWhBzGgbqMtjkWcxMNg5qx63P5DTNJWs",
  "key28": "4dYW1qeiYkAzeCTCCgfhsm2b4v2383intoB2BM4QBRVwx1DV3Z8RniuNkU2U117Lt4LkxMssPVZU6MiZGYT8GzJg",
  "key29": "4cMrfwQVVLmZNYQeWeNtkUA1PCCP3ghWP4xL8oNenMxwhH1AquSatBggphSk2XLU2RnQZu83egTRbyv8F37zzPGJ",
  "key30": "2eG5mszcnrevKhd3pavee1X1etpMso92UKv8sGnTUJUT1CFFvXrDNaVZzc26egtxhtNUgTiZSDmnxVtQj9VNuPt7",
  "key31": "2NiLnE2AarbP6mgGDvpvVeLUidTKYNgtNetKumv7zWLrX4GHjRJybSk29YRLtyu17hWVhK8twsAfZzn8rvPArHFq"
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
