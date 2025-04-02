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
    "3cu4E5c1MMs2c9NAV9CjodypYcuJgmqthqRWwmUDVGzse2RLmms8jNaWVoWFbNKwHC2UZVeTsZbWtYevgJgMh7n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWnCMH9zNPLGj2c1TX2M4TxDXGtBXtdR3XwwGTKXGvtgFGnKCFBkLnBRp2qJ7tSjWKtj8vLehwMXriZQGuX1VU2",
  "key1": "61E8hMUx3e2deqgJ661yyUG2bfLfzsnqZK4q36ynNMWHFMFydE2aXnRpG9at37xBvv4pUome5uqSLXebNKDvP93R",
  "key2": "3D4vKU4XEpHMkaH1yKimwq6UL1W1ffZchEy7SidrgxRSuDWEcitVmDnDJsRDihcXznATsj4KcNm7zgx3zyriZEs3",
  "key3": "5uk3hEHWoxLDEELoJYp54w5RPoUrrsokkHAHCwMXktGcN1FPm7czTdFaDekbhf8VxKCz1Ccmzxp4UxdRSHLnRRWU",
  "key4": "3nQtj8kQ9k2fpao5y6nMaykE4evseapQQqmStVw69jLumisY4DzjzFg3dqug6Fnn1YGFrC1SypViiX7KGsxwYK6m",
  "key5": "224pK4LdRCAWKppQdB1CGqASgF3MPRLhvEDpg8J8UFxp58csFbgK8xxCArub3CcwwWw4adYhMrPeTJAyipzRND5Z",
  "key6": "5ETLL4inhhicAEjGVAbc7vrzYyfkbgWWB8h72H1nPvv855Wu3ZLM6mLAFfYSQfCJ3v38jKA86y9SgmTSejqGLMiD",
  "key7": "27xf2aJJVYX5YNeJmr71ANUapoeXESQfQuwkxDrroggaHhdE9pEkySvByueLT3HqdnMh4NzJhGFoFGw5keJ7gmEn",
  "key8": "detohZ8c8acvHkDtHsFeTNiqyNFsvEjwvUHvx4NAirdAHfCP7mC7DbGyLS2c2HYEC42jvQxgARJL986gTTigMmq",
  "key9": "31ka9SBJYZLng1TnTShLuLKmSkWszUnqbF8dcnF7nbpBPuaD6k8sgQrw7cidkbDVmyJAEESmEbDfjWu91JSynoPi",
  "key10": "8pYQGEDdZAdAqaoKacUuWVyys5XTC6Bi4Na5daJPckbfbM24yRBopCF6zVT4Ny2HEgzDFfuaSbbpof8Rxeyi5m9",
  "key11": "rJUzdh7Vqo1zQSdRzMy7e7fHYrcbUyvp9CRxvqcqUxKEp9jdAhhNKo1q8gLAwun8TTiRuqn6VzELyKmCBdgoj1A",
  "key12": "45VjJ9PRawMUYEdkDdDG5kouNSqbKE4r3dx6bNoDRZB1m6M3LuHFRWxWfvFDtHyXPdPcRe2CnQvUR6jT2eTpPYY7",
  "key13": "4nTXzSFEDokndqyBw6Ejd8g8ddRFNt725738mXXoq2r3SbybTjTfW5CDKqPqvAPDvAzfMmsrPJdCraPHWf6AkCnj",
  "key14": "33iSPZc2cXknGqSa52WAV2UU2S1yjVHKH7wAXcQPeBiHqwubqoXtAdsyKUA8W4sG5s9rTsC5M25whS6BjwY1rFkQ",
  "key15": "2HnorbHgBd5eVpcjaiXScc2MJL3MZNNx2vkYHy4mBLiUr46ZRT9D7kGQVW6fwZubSgYsqzne5oYSo2twrpiLa2ph",
  "key16": "HUxKkDCrhuyNQf9KKw42xPcqp4v6K4Pzz9pv1HHJCCBPUb21eV4HBqUV8pN76ZTvSjfM67qZ7bS5ymZLGWvbj9S",
  "key17": "5HK4XGSmpKX5C5BDi52dmv6dB471wimozhtrLorUyaBTKijfAUKwVBKVvNLh55UfvEqmQhu3ioPWx2sjHFuZrx3Y",
  "key18": "49RV4DcDUWVAc3jHfkPUaij9yhyRTLQvfy9SdZmwrWoqTC7EjoqvWP4EZz7eiFqyNcsd2YWVNrjhTPtH5g44sTrV",
  "key19": "4ZenQcPccZvRzAR5ZUtdgeHmAQd5WRb9TpExT5QDQXpC5deU46pY6qz47Jn3QP5Dy8gkrwLqbJVKrGP8pD2Pkthm",
  "key20": "3LqU4XMaejYyFGSE5amqG7Um38nyfhAm22bwPqMNDWDdLwa5rMDhuiFNQ63XZuUVotV4nufQCvbdZQuPgQQkgbb5",
  "key21": "2w92ee4S1SfrkRCiEpXsAAsEFCfQ9H8Be2SrLYd4XMnpzjmiB72AE7C5mssk6bxEmQe35YFKGT2HWWd6GmDbfxL2",
  "key22": "4ijTEgPtXxKq8YriPUpVZXDMskCQo7kteChM25PdCHhpLVndDG1g6VcTAsJ5mr3BAnQd3gWTzs9vHqfLbz3wk9eV",
  "key23": "4jpF8H9uWzvJnpU85dYUXyuQcmkigX1wN3VUW3Dke96ciizd1QAXoLADJRFp8CEsgBXrgfDEbSjFtRatUYNsEviv",
  "key24": "55LT6Vdzezv52Uq6CMhrqohjATn22p48PsuyNpjfrTSYmRbRqm8uLM1LyAkR51uDzQJ9HnnnXPVWmyEaggFrWQwj",
  "key25": "54j6tt6Zzp4pJHJXxxBWYSB3thQzfRkjAp6mx53X1TDxEMK7r9yKXDzmLJuLLYxMMW4MZP23U682oJFZwwDFHWW3",
  "key26": "4BZG33WWzCZmD3ZYTnenHRPS2DyBuXmDrXZr7hcTapZgRzGufiQjAWH8y8pzsJpXLh1TsMMNRt122jVHkmUdX6BM",
  "key27": "4buds4GQtFu6vjpik1ReMjpjWFQVWhw4AtHSDGStB8yKERjd984FedzHT2TBrDLk9G2i54DeWcw7gZpaSatcJuBg",
  "key28": "ubWqmocYkKfi5MNwKNnuLiihC9Z5YiyufxEyKVipgrAYXcJcTuNokimo63Yr3qvEQcwZpANRYFeJRuC8gJvcRma"
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
