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
    "4V89BMU3Wd2mqf5b1pg3STiftAxhHRUhvUGChqpGpnBv28uwbyU3UM24NrL7yDnoVt79HX6QpNc3UwUf8JkCdCTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PcSjReHwcxkK4jsdXyBN9VAQeUiSP4LHTUAq659sqLiuLXAKenuD5hkZndRu8Bs2sBwf5HbidfNXEkVAG8rRWx",
  "key1": "2QYzUstUhsSkSHkceb6PemNXuMxTTct8v5NBijtFn2r1SQcZAqNWUsS32dri2hpgpP339oLywy7SMgK3guMfbNwQ",
  "key2": "5ju4zEUzhp1GR5fQS1zwNrqeXPfpux7GyiQK8PmnEtvkS7rKGSVSgLMfwTAkeKBLStXbVrcZZFoXMWKZosyoVTMS",
  "key3": "4BZQk4dFNEEQFwEngxvjEFv74ygNaJfbHQPrn7SoBrbRLGirLAPbkijAWquSfNkDcPhdSWGQ81dnyyAcLaTREAAM",
  "key4": "54Gwz7rt8VwmAebk9NhfV79q9Vec3vmHSmCKYgrBq8EgXajyQDkSsrZsTR4T6hDzy9oAAJGwDT4vMDpLjyVYZyKo",
  "key5": "5DDS2mWUxPRJ9sgzSAEj9ADsKRfZBiqECZdfHWiio9HFoEfoED5wX3jmAiYDAmYpRBmASZJxUiZ8xFVt5p7BJM27",
  "key6": "4TtQpiCvd3BY3asMDVZmu4tDU4QtyCHPyhoWXKtuLxJggmkJDyG5ZpkNqdmmobay3vWiu8AyGq33wY65UkSD9JRz",
  "key7": "Ud4iUU9ctPiJ8cXpn4aNvRvDxpwXSbohRsQEPDc894yYiyLb7QDTwG1i8mJWn4QtSNR7oRESwJMrnnbLJnUGiMF",
  "key8": "55ytZEeoJYgNgCmPsxGrdAXFoAVWL8VYauyaDs1At6ExfMZwZpiooJbEhLprPjZwpSMxeTriNmhvp3jdFeRAX8mw",
  "key9": "32T14mE3JXYHFkLsxJgfRN6DN2LKznTfY3KamHWhgCkkd2PJ4nQrx6WHVPonqK9B4R3e3muku6xJ7wfzrs8gfTy1",
  "key10": "3v3ugfBW57S7eReXj3JpU7eaEa655jSkiTeoeeMNUuFU4CTHiVfme1UJxBbVsKnSxbfJhU82XxALBjvXXkBj2JL6",
  "key11": "3VUVYLSst6KiLTVwVkeG4vTWwTvr2reQxvxW6y4kd6KnndKL9cpaZkmtuNgff4h5FGn2vUJ9Jpgx65GNkDUPnZq7",
  "key12": "44gXMY3uNH1XgxiNQJu5DUULA9he8Xwor39Ky99mMDQHqqNEv7ngYkrMdFze3aSA21NbkF8yvg8bq98kziiU86ba",
  "key13": "2Z8L4RgJzzg9jCuNjKDrKWYH7x2zTsHsaZ9i1WuJbXPujoA5LeR7FxomfqSurVRxYKZLnR8PXwzunfV2rotpuBvM",
  "key14": "4nQRqT8R2ojJBomjbUUU9WfM9NsDR3KbP9ZWbJ9z1CHi4FjZgcVTkk19wVWDkVxm6FzWBrExcGyfEF1TFwZYHDPp",
  "key15": "3utNJyUaN3pzuj9nry9Hj1miBANZZcnBEkKTVktTDLjcoSQzmi3rKgwhi6NF2VMS5yTpTfeRF9Usqc4Ec8EKcG9j",
  "key16": "2n4832sSQUSM9gaSbEhtczwQMKcvRSujVzuuDoi11MYry9ZLhh1fmAYYM6oFVaiC5365RKFtocoVNpGeog96db3H",
  "key17": "h5zNzPd7ne1Kr9FRc4Wp51t9i5m6V7VMDLznxPzzigG7HcUH9gZuG4RpC1iRZ1qoCfRndhkifmQteDR1iHrDvnq",
  "key18": "VoY5G6kdWRxREiqiQpc7cGyruqZkkfMJvnwsY5D6npN5EXxaK5NEFBXVVTdJrV9SaSaHBzYVWuhZmg8MFBWg2mm",
  "key19": "2XbPaJVWdpYBo93rBrxSnxHFMebLDNj5VtkG7rHekheqcmiJ6W4demPmRNjDsr2s7a2iudBRHLXQvhxBSTzYVXY6",
  "key20": "2Z7rrjpHhe4oFWe5Gk4jJ6BySpdtKoX75cD8Xa3mYhhJAzmsdo2Q28BNHw1nEFq6dLz34sbXaJsYUsYs5Lt3QgLe",
  "key21": "N2MGw4f97X8VFfkHZaiUWbJSrwfaqZkEAx2q6uCYyerZ6QjFQSizqneEBK5tddsSkUfmu57KDcxAabzTDsPKqDV",
  "key22": "4gHY6GKshTC4jX82VeSneW5YrNFL5CiDsdbjC6WGeXoCfD9wsepyrcAyrt3R9TBgqGQnnFBR4sjV7jZL7TLHJxoJ",
  "key23": "4RjJnXpT69Yu7FsYqc5Eaq9Y2bTzu79QauJzB39DrRmSf9B4dmuaa1BVLbqtmhz2NCJK2pHmNURM83Qevke5FqtG",
  "key24": "4y7ptVTdK6iuEDComFMUezaiVSVfy36C8harMxZd1uRJBni1sXzzvhwYBaGjJoZCvSTejX6TjEgVk64xko5bpNhx",
  "key25": "5Aq4NBVcBeKuZAmF9fHR3CEwd52rSjyKBhYKBdFS5bXSbZotwYrQNtiNepm74rb3hzSarEL6UHrLf72LZEA5eHNn"
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
