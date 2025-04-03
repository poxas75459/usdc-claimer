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
    "B3fPVV3CL241L8fJQgs7pdvDsbNKMxtgfa44ULNovQSvTYEX2dQYXRfzZAeqPMrdTCjGwaZXsp3WC1BzRovyw4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jyE6AYFdMBByxmbmMXxcG1Ag61hAoQ9KH4oNXNXMf89f6sYjuPQcsdp2K7zwCwbd5t6LUCCQsoiGA57zo73xiGU",
  "key1": "3p5dATYJTrb8nGFCLKAWoa6F3SKB37ms7Q6Dmco6nvfGAe9zdAN8Ep33PviXgozqkbKrnVQP9gzJty5exbintX6T",
  "key2": "5jjwWugAwecFoWmV15mWghBH54nziZ6Xx5riJUqss8mETH4A13t6w8o14qe7JDTDdRgLdvA8wUceiMcEkJmPQEhi",
  "key3": "4UCVXdcQnSedhnCRLAgm3E2aVyaVU3MvGMYSLr13DEdmbynL9rQ69Y7UU6QeK87ocPxa7UD1KsMqcTyMMyUCR5p7",
  "key4": "3sa6Dd6UaLcNcjnHyCRx6us1sm74c6kJmDcqvgDGhvnyP8jNDTY1DFaSakJmnRk2Nsx566PTomzfzCKRhAiEGa8c",
  "key5": "5j96b6zt57UvAbLYx72UKW9YMKQwMwq8TBeQjE4JufmRd18HD9NEWfpMMGCL9iipQBJpoNCb7N2YbiD1DEBgF8Xb",
  "key6": "4RuGzAB134Y5FKMxK8JNH9SFhM5JQJ2CnwapvQdoN9o8SwXiMPfUBYW6WjgNs2RKcxu9trgiBrCZsMU6UC1nmTZ8",
  "key7": "2UehKzq3Eoktzz5m9N7pAg3DxtyovNC9g3fzQm9RDRgWYw3JaaceGpUBTyrb6USgM8HQzV7hvTPhxWSeqLKnvYPS",
  "key8": "4tQSdPvC1YNnekkCYFGenqFkikokJ6YgvBe8t53nhLgZysym1YdnpoBSGTQZKJDseCDkSfzFX4aRhmkcHfiRat5x",
  "key9": "228UGfwRuRRuBtKxgNLYBHrcG1weKKvrmRw9nB1jTcgEfxKDkYd9kiJb6mMVEfQybo6ovPHQrdDKemjjYmEiXYcz",
  "key10": "3WJGNVQiPPVgRQ9sNbG5E5sHRy6RX6Pv9d34PtTA3M3bAqrjc1EH5ajysNo12FitCxy4CyzushPgtpQ8pEuffG42",
  "key11": "2PodZdZMgYoESkst2xpa3tCKr4C61ssixpvvLUAvXr8E3jvFczEV6fJSF4L1gpPYvni9jeuAXc1JKDkCYuCyffL8",
  "key12": "4g7QSqpitCjeinhycuCEn5DpqEm4vdGfpDHmQPr7R2fuKjD4pAboh6JSAq2aqErxbi2UWiCUWYpp6KANLymmsXJJ",
  "key13": "5WViqXLAx7MAToUsi6Cp2qyTAMM5rJMU72fUkQzv6EJ1GgNCbPdmeanSBvtUjJBCKHxtLDwW7kWXtBWWJbqhAq22",
  "key14": "426peD4tSTvPDzsYdAocw4qh5eZ3zPjRvaqLQ5YY9iNCA1hxaiCwVuWHTMAsvpdTjkQ6XuEsMPneeonGrUMAJ9EC",
  "key15": "2cKP76RtDN4EksrgzqZoM78JG3UygsmMnxCr7rWHZR6ZDtrXKWEdDf8gR8BM2K1aSw6xWhsRCqsPhsftGus5Aqo",
  "key16": "3xHeAxxvMcAexdMprPGXnmr8nrGxkGFbpieRo3gePhMp6U1Wmma5JDVHYGA1dx8BayPT758ep2s35E8gGsmL6m7e",
  "key17": "74WZVwtAj8kvFDVZMotrofHNRCH3CRQYCG4MGr7eTdyTu4RbwnpgnNPv3bfUDvCaG8DR7btiUbBZQo6MVqWwCYE",
  "key18": "51kyx6eV6uuReMwEcSnW7vLN4ydtnQNL2E9NvPSkjZztoBJiatebVHg9SghQkBdHQ3stmzFMpkhwH4Q6eMRFdS29",
  "key19": "2GQDEHCCTG5ymtpihqm47fyjUXeQPCxaU7fh3Qs8SDRrnR5R8UCkanYvqF6k99TSWugiY5NRHDYnP8stuo9JAjr3",
  "key20": "szr3YaiD7ZnYBJK1jSXm3taGANZ358tTCtDMqUFvyZYNHEZxVJRtyzdQM9uCpoixAhBYCBJ7ubYGQYXVu2Xm4DV",
  "key21": "2oDNTf764NewQyurvDeQ1F8LG3mjJwCyjkm3jJ2WZw7XctPSDUDdkguHyCtUTPsXRJtsC9rR5ZcpeCKTP1vGRD6e",
  "key22": "WLZ2xXYevcm2iz63RuN7RKYByJ5tYf92qowWonxb69JSvoajx9oSqSBk2kVjVPQBoHjYokHBQe7qYA5tVdbeyAE",
  "key23": "47zkZU7otZakkbL3La3F6ZrwFRD1kVLur4qbsnziZTNRJXpxt5XoACEJTKtdLF1xjD3a8BWVttF16SHcd4WZ7dJp",
  "key24": "5Vvdw3uGM3kQLPap3RgmQBKvjHZh7dbKkBsCaAa2C9yR6cpYaDze1JmM8fd7EtJZorgJfxZ5ketTymNMTvk7rJRP",
  "key25": "4M8ggwTC9oPPHBFmg1gtSR5eMHRPfdxq2kAtEKxA5wB3WnmbtAJdYFaVFewoqWAkN6Uz2UPkMTG6m5TVR2r6YMyT",
  "key26": "4MujnokycvwTuBeMpE8nj7E8nikg2N8jnhSWLrL23bimYKSv3jSkgNVTNxyuTGj8k2qfMr892fhjoy4eZdJthLuq"
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
