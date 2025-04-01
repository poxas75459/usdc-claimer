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
    "4WBkBhLRsr7BP9oey1L2kxRR6gMasECgBTXTVX2DzKv3YTMy1x34B772dRLrccNQFPUgPbsuzJNQ4xhF2LbmtnWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xCzYR1rmU2tV2hUPr518SPRXGA7HVwJCmSL8xmzobGWHQ3w9mpMiEdau2KDRJKuRapX5hW2dwV32KYi7UVJGwuX",
  "key1": "37S8MmS9hYgqq5Y12jUJJJMwuCpPx9sWiAQQVuALnkdBWnxHmzn8pcZoq5rEw8ZSDGBA8f3HjhxPWxYwAXjSKMxB",
  "key2": "3D4E75NHQytQ6d4YoVgCzBA6jipcHYx2PNzC7U41BhijmaYU9Tp8MBmdqDKpkaKvLYwsx1DkMaQNA5FRFvBSKseK",
  "key3": "NtduyirtdujDp7rP9hjdsoRwiFFgppiP8yerRGeHpp6amw6bkCS7RHRVfN9eFykafRvMGQFB76ScxiozbEKRTvg",
  "key4": "43CSh6oV4TT3cZ35RGkqAM5GBUJPN9RRAyFfzdRCqCCRxYBqnZ9339KRHHNFvAdzVNtMMLtXcxQeu2RcuwdympPE",
  "key5": "NbZnnZHM9itMGZNYT5hS3Mjp9wsku8nWu3XBTGTJVp4NXgUbLzVXUYXUghhmYPqukQn2iHzMTwkveWoFWhdwucC",
  "key6": "52cHvFpZXBngGiQCMDRqarwURVHbmJyCJHacV28xJA8xJ34p2bstRW23gjpGsKdfmrginW4qQVta1ezmdgqWmLnS",
  "key7": "3Kbjv65hSh7TPwzMd617oJtSyryS4zNqVdk28hTDsVwWX7q4fAKwWnKbk74ovVrcePuSFENqMVVeresYc1FDLSh",
  "key8": "P3HU53ogjrjswjt782Acx7Rn9cYew8oV8hWcCxGL2xx4KJ5jrdMA8BiSmRSsUmJeqpc7ZNN4rtNcoeiLPypGUCW",
  "key9": "588czTbtS8F7bfVxLwvrmvjJJtrP9HQWSqSVkenxjQhE6QTMvha1TDnKL3PqF8D3L7oLnnh836VysWVKtpE9d7xm",
  "key10": "5qkBYZVNWJeng33NsLbRN99uwzzuyqVcNoNFe2GFnbTHFbLFq9C5kfNArhqvP6asEFAPwpwU2QotwB8mYG3C5gD9",
  "key11": "4eMRt1FodDmswjCirr7mFw5owjr8RT1HbjTvsiXa1LoRAHt35abZgi76cuwxFiSHZGW8x87m4Qf5QCvFHGf7WLc5",
  "key12": "4PYuXRtTLiYUEntF5Zqh9ccrDYh9b5nqSnA7ECe9QhK8sFJWhCPAWyUV21E6wKNwfnJWDrdpLd68VYXJm5nB7jQ1",
  "key13": "4q2a9K8bnkEHwXi8uYyVhPubRJ6BQDw2SdeFhuyuus7ouFeHfExQsUXYYazz5rdqkEwBs3VdaBtW2DfGHuHBrthn",
  "key14": "5N7zVPBUs1iPFf3Rs9AY76Uk5Y3dVDSUfGjAZLaxqa4yUf9STqt92jEdXSUwzLbinXbxsm4yiWo9pTpRV55EGTgp",
  "key15": "2oYKMmvpBv7t9jE629Te6EsEm9cCdbXi1TTk8z8g22ZtDmUAeTo9L3rzi9JCz6cwqnKrxEf42oNn1nucUEbCkWR3",
  "key16": "4uyq8ZkEMkVYuQCJYNc5YrX1sAfJGc3VXSF4Wc31HN74Hk8cnUsnthUoHRP5RcaoAGuWXm86vFpe2ZwJSsFo99T8",
  "key17": "4VSXyewfvRXQv9LqUnnZVKqvz1hfs8JwCrkhi3GaoBgNgYeHLwJSrt7ZZFFmYzGKGwKDMtjKtFbTMPrvJ6ujQfgu",
  "key18": "Jxn2vybppzDq4i4BwmjCKeBeKTcMKRYYjbkNbqPMQno7XJU2k4Mouw1ovaf5B35osFHm4xpGrjkLQJmjonY2aC5",
  "key19": "23bqpDbCt7vGCTBFHzPckaXZ6UKdG8q8qEXndn4gAfyGNb5yT82vXpLraHE3aWixMJ5PY8Z1evauCd45GKAoC1Kw",
  "key20": "5UxTNcFYFwjH6AV8xTNyeR4o2T7B7KYNbd65aEwRhqqPKMm59CjstT5Y6TM3CBiXxMcxYAi1FfF8uN14X8ofeJuj",
  "key21": "3mjji1cYiDWXzasqmc5rVqZuHrqSzpz5vbHjyGF2m3gq2zKN9S45WdpLFBoyTjoo2Ro8MKpUCbiZWJxr1bakc7o",
  "key22": "5UkHXim8zct5yzrgHmYUWWorT6xyYi2vjmcSYXPvG94TAisPji2YNdBT9AakeB8hRMGNM1s9wxNYwXoMeQrKw3eM",
  "key23": "2h6rPi2Fbrpa7kZpa9nkS9FWj9UtZMw1gLfLYa4VNbYix5GQoAVATF9bhVAaAr5VmGm9Dtmuruiiadb37Ab2addx",
  "key24": "3To8Hfxhm7xPmegUJpj6PQxjR61bJa3zb672Qo9tZvUe5zyXyqFec9FAttQ3V8JQgGUpcYaidEhpqpGNqKenjZxr"
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
