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
    "3pxCAM22bw6BXPmpHEzJUGsacn1wcw4T6iPjJCV9GJagMFqRvdRb6yVM6ripf5ky1vDzkJdfE8pSbeELcChK2uUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LtGZKV6fKgqaGBcv9Vmddw8kZdQoksVMydcqkajYomUCWjXtR8M3iciJra56iMwffE3sH1zGiSdnVJsPrSP3Xg",
  "key1": "3CKi1VxTbHmyuXr2sKEuY6gMi69EXXAPrei46eEdGwdjJKUCuW64Kpgc8E3HCBghcJZEmcsccSdim7mUR6V7QMF9",
  "key2": "4u1ez7XCvgTzyQTGyR1fpTBaTu4rLMYMEiMR6X2zhu6exRtk3bdCe5AkxtaTrqsenuxYKKrxsyckpsw5DHATq4mR",
  "key3": "HXepf4CyttFDUsKEdV6LM2jPNZ544zier2AoCNTwQWQM3DnpopRP76eGEYTpoGwS6w1DYZtNswNZPNmQLoyCFHx",
  "key4": "4FAGp9WGRCBNYY24JLx9NEYrfmkCHptJWt31Zppxq9ai896JsepYqm68vjZpWjP9WZjUZcE8nr2rqXNbdPdTC41C",
  "key5": "23ZDFzzD34t3NV4cMWoojw4cCUYwJKD5mdf6CSuqbWMEjnCQdKzDgmg81LkF3gPLEi6thLnWHiQsALddV6p7TyCB",
  "key6": "4xyDjDVeyx2KsejSQmUBZKjCSUSSFKVqBUZvo7orjVeuDRAwrbCnmbnpCLn25Med1C5DB3G7G9nvgaB6n8fB6mtn",
  "key7": "dpyH16jzAZT3UFcAxKW7yH371XW6QHzQbGXGfRvYGhTtArcQ7vPV6NNAbTsF3dZKcwDkHq5iakPBXXCiV21c9YQ",
  "key8": "4m1HwuYiDL7qQPcmCU5X54ufagXNU9xj1kJcpreMcCNFxCPg4RDmGo3w5cHc2dsr2TV7nKGcLwwjbsy4dfDoCtZw",
  "key9": "62R1GA1hpDuZcvQGctxab9M64Wy8ESRmohv7dTkacPUQY5aBaBQzcXZXdSxde3Sb8eRSj45EsWr27B55CNhfYT7H",
  "key10": "3cVQimNtUP2XJPzbGpd7Q95PSrSfEWyz87JT2iDjXvmxb1rsUX5HxTSaAh7WkNkR7BZEUGPRSD1weJ33zHhcrpwX",
  "key11": "5dwS7coFhHdL236p3sbUbLbnPq1ygFjBupEhqNe61KXbDQLBh3i6KaiH1S2TMMM8psLnbZ3K5BWFcmEvKK4ZKmMm",
  "key12": "FZBMM7W4strZk5MFCaSFZ2emXKxDNKp3mRryibd2uR3Kn2fBbSESr1gH31r4nY1T1kCt4oCbe59bpKAoAZCmCpN",
  "key13": "2Cs1hSieTmxzRPQM856wzGTu3PU43P4EUJTtiyzAph6sm1osJXhy6ZNu9cebdkwMmE1nhdoumATvKbeUYDKiyaKG",
  "key14": "2rbpuCpcDqaGcfW67aYyJWF2aPcSQuA1qw2XGLtiWJVGhtWAEMuvQs9iFabGZk2LSooLnw7qgDcVqj8mAZ4i3bL1",
  "key15": "4RFGMfa5pYV1WXofccKd5kvkWJwCCdFZKWhTZFq9oP655Xa9JmBFbEoUJvdLMwQ3e8S3nb3khGnAciBNYJiHMweV",
  "key16": "43t6jzcJfYYZdbJc1LyRzekSoHCkn1qhSKGQB8AiXa2MNA2MBd7N7y7pfbUvWyeBVXsjAEzXcBKZUY3spqAmLCCH",
  "key17": "5VqRptWpgEnoT3UrjoyjxJUYBnyby1C5cs2SaPj8rDsmFim5AGHN1JgoZsNyvdRkhWgFq8ArtGrRzMPTJFDLHrFa",
  "key18": "XXUF6jYFzkaobDS7Tc2foABfDT6hgZogTcqCgKaRMBsQtQx4bVgp43RGp55VaQhfUXBA7tvsUX31qJnLh44tPpM",
  "key19": "32pj2rfkhZcu4jZnvtH84A63JA4yLmBZMtu1y5PDdYF2DTFWr9tLCihTpx5hWK53KiGPyVfvjTU3SaLX8iSa243F",
  "key20": "4ndKH2vihYKa2hr3zEzDK7sFC9wArzMtckYwUMcobHpcqmGd92eacEvnqRSwRmHXi5VAhpfh6K1hHGm2P8bSvqEa",
  "key21": "2Egecg9U3kZZGFQWDYoYLCENDHXpTkumGPZiUsWeoxjn5k17DUo365AD3yWBU6VuLghBpH7TxbeY98JvtUzEBmt1",
  "key22": "QgMV7UNTsBmSKyCqZMqo1AR77sWJ9QmLAW1tDK5jw43idLY2xceh81xXrjPvLp1VMz2z25Tp7yC6NxhGqgcJ37C",
  "key23": "MuerAuq7pFm7k5KRPQ7APMB7W3p8SuDKtB9i5HKT83v8Gggp6E7x4JHWtdT6nibeMmeFfxHmqKkyEqsZmrXSA3s",
  "key24": "3JdvvKga5rxG5EMbf2CUXNDbai2Xiy9W72KM4SW8jPdC4ePdcUqvwNXqdPQAghipVbS55HrbFFh62me7bnCzv5J7",
  "key25": "4tcUsZg1M9t4Nufr7Kw2k3ZjMdcSmVM3LVUWZqZaHjLeD4BYc4Xpbij29Hgt35GMfkPS7XHk8ME2X5W1kBBt7NLL",
  "key26": "4u16E9RXYfEWJFbf4QHZmKdsmDUgjjyJpucDhnJUj8yefLuUkHw71phMqxrJzqTwwsLAS7wZngFWgrWBFXdLTamH",
  "key27": "2Rx2BS7z4urvWQkrmPFgHJmqMxRRKjhWUa5mnncVga9ZDTSgTxPV2xnB2Voxggpbc2SKFhv1gEwwjoMN9Cp4vBKT"
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
