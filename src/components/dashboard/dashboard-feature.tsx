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
    "4Qd7SnByMPthY2PtkWNerg1spivGMMFKyvmXmcUs82Djg3KtbLCo7ie1hzRUaYHufoESsDWfa21EdrSWE58KTtme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNXHuyYqfBWBXiFqDfbiskhHSKdZrGSZ96mGroJgMJAMVigtfPqetkhgJteHtTByyhxuQsSdNGavHxJU829rCYL",
  "key1": "5nXLCd8NdNf96gVBEzvfLoJabJiQkEEftwEzS12A9kMNEPXvGAgg7siEjVWLkTSawCj3RGezhrErt7wMEFe2otvV",
  "key2": "3cbf4v1eKfLHVsSqEFookuAotk9SwzaUPBBQxK9fLjnSz5B33B82RA22yMUPAEXcr2eR2cdz7ixcchi2qrZh8Nuy",
  "key3": "2etYofXae8TDueLhoEosdGvkPfUyRZXbimNhe6Pjjc7prNZXhBYkLR8Z1EHBWp5yNpH3TqEbQkoThDVSnJwwxHED",
  "key4": "5pZRrc2XK8UAHu1o9sVENvfjEUtqH1Q6SJueX4ByGNPcfPWfCxLBULdjDDkz8qMG6B4PMxgrXPC2BkB7B41DbcVz",
  "key5": "5GKq1avHHMof76M97va2Sju5W1yABCbq91fYQMHzvcKhEMXhwK9X78BTxwBDbThGWWCyK3ckK6BkpT7cUTuDMAij",
  "key6": "2oioKKrDHmkWBGH5YRJ31zJrnKrHyxVBJBfTMKAhDf5yqP9MkqY8nySvrc4i4gw4jD99WmjtU4WYcThcWw54Lmx4",
  "key7": "3fcBn2yA6w1ZUcydt1LrubaaRDRwGWH7NgNXSsXuGqbhRYqtqpfHCZvphBrNeGU9ZruXJtywntB9cnrfMgFPDT18",
  "key8": "4yy1LXJMW6wMzwuMXgXEo5R92tTPsvCNBcnHQrXhS1GR9wZAAeUZKpQgkZJGdmZEUsSfhNA7d5T519JrpR2WFdKQ",
  "key9": "2n47x7HCB7F2c78cnBfB2HQhRyMBDBNjQxmasqLDDemGxRUfEdMYV6QPpZbyJJraPVcHCjeLEkK7wxaoJ9X6tSv5",
  "key10": "2pkdwFutHpbsFfkj2Aa5KZoGRVm5n5JturEbmActsKxD3kSmkyGdtvXpCPcC9w5M3pKTAc4u2ruXYSQPnt3d1qEC",
  "key11": "5ixwMWLXZ6tNe4aTEaSZrP5TCA9R4qPL4zUKW1WBEMi54ybZ1ruoVBGADsXhGDAmZsb78vgT6zLU6zXpKfrfU9rw",
  "key12": "FZrXrtyZ88NTqFcm7MahUatWjc3BwseJ5cJBszTfmYKTuqjW17wfmHu99t732HNa9E1aTgtBtt7KcB1KHpXYLxa",
  "key13": "2Hq1CvkvyapUitCo5eAndMLjm4EowYovi9NXA59ghVwRJPDNWJePxKhtnftZtVMyNpgArMj7sZ5iGRF1dDwgftEk",
  "key14": "551hzQS9vnnpXpT9zzUKTEyiA53Z5Yzqu4ozjd5PECv9vnVDPkBgEVtAg3F1S7EtcTvj12JJW8DS8SG2YQw8DRYV",
  "key15": "GaSYC9eEq9X9i1XtMpYmTHYuaemWYk19aSS92KLARBeSpevzQftFdk4sNybzRgmZwdUbbvU6tMNMBF8B6Z6WznU",
  "key16": "5VTLJmHqaBK7eAjDn9VdyopejihuWvRuMWbtWchXoJBQogKcftAB56y3Bg25o16TixPnMdo5zFb44B1Ccmtmjdbv",
  "key17": "53d1YcTpuW5Mh6pjCtDvhwbecvXywZsP3sWnQnrHZiWdba3EseeGjAUguMNnUXkcPWf1PhnKUN66kRYSfGQFhN8H",
  "key18": "3fAmCMeFZbEtei3FLFowTsESVWdkEwjbYPYY6idyNHAeEUcWBcABkh4bj7fzpQu2Fu7M8GYquaWaMd6EsKt6xHBn",
  "key19": "4d3keBDCNAENWTbAL9bR1YUaBYLQhB5V4rpK2xJEPnPMmaibbouM1pkRwyVQ9xmfxfnWb8MhUePLdrX9QtBYWfbe",
  "key20": "3o7Y723jPzE49tUYcBUiTEVXPAZwSJkeCqXGcw7YZ59KhDqCDpybV1RQwgAGWJoCu8TgzpgcKyYdBJKznn4ZYbWU",
  "key21": "3fvVoruP8bLnKRmrgUEd6wtKhimH7tzzHskE25AVPWRz8pdyoEDNffwvPKtArc7JmVEUp6Fk7NsomopyVC5E9m4D",
  "key22": "2jjTzeJcKox4LHz9jYnpjjkJshekeecygZuigY7RkguHWtZgDjcPaKRZjUhMjvJMhSt5bfDGTV8X6s83NgM2XQ8Y",
  "key23": "JrrBmZ4KoobVF72rsfGn5rQGir28kaHuN9UazCVBuQvAK6VP7zv1HjNpRDhEEmvKP5kNriJWbTwSxf59Rr1Xgj3",
  "key24": "5761GecR21UD7xpEwnwmUSJVUv2RnGDouHsnRvnhAPrptBZvq4VNragckcHgVwB37gq5eD9BKNNTBh4okGd5CM8M",
  "key25": "6By51Vz8TRh7dB5R7QG17tsUAnQ8wg6KJfA6XNZqHgXbkkfkYfha3ENnLBUXXvNUibwPyapXfNFGKyw76F3LH47",
  "key26": "4KK9vaNSK32k271t4zrJYKzGTaX5142Vrz8cRGqRUt8eUU41PrucoAY8eiuQPU8KK7DJYEk8dL8ZR3qUpjYuHjvG",
  "key27": "4AhJexchApusPRTH3Hz58XCLDZdhtVbFsij2RXw4NdmqgiYkgmB27jYTycLzDchKcVCryr5yXdQ2G2rPm6mYTQ9k",
  "key28": "4eHPuRc6WkX6Az1rZFnAjhqTNsc5Fypt65jmLToV62WtkyXwAcvpDniD8iHK6xfR3DpZmZyg6mpTe4hqt9QpVbws",
  "key29": "5ZQuoCVJAnzDjxAj3qrLUEocHjBzBf8qENNCTTeGnCZD6yES4cfRNhX745t3fL22Ui13mv1UVU11tb4mYG3bodz6",
  "key30": "4NxvgJYopuMdHt9m6xQbuLW6G3RrEb4r6ST7BaNGmowA6muTtj1btEWNjFZ4JAbVjZc2ZhMdy1ph4kAtXL5NCLFT",
  "key31": "5LGc5TjjDUhyx51nBCzE3fxxbU8hVdUDb84T2DJNsYeGGpnhRsaJqKsi3v6MR4xSysbUPS9ygVUfqZaRaK8AnkPw",
  "key32": "5dVzm8sUvSwZJexrq292MFXnUuFGL41fhLU71U2MQbbPNM8Z3BxFvk5knAzL3k8ePxTAZgzrDXBY4jDKyNEF7Eg"
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
