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
    "3GdqqkGadHuj89SewKpYcMQ7TYzixPmpv2eRf4MSGZHgyZhC9239rFn7syzSYbChoMzfqzyJDoCy6EpkYADfjhT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9FN6TQ3XixrS4oJ7mDi5FbKAfqv6eJChdGP3XE47QxfftThF85sDwj1rHZSxRT1kLNASKuHxwmLRmqxJnDXZxU",
  "key1": "pZ7pW9vifVguEWZT52rEMC7XahNn6yD2uaSW9DnAVRT5BmwcqxuM3BdAbWHxK9eV3hHzeSZojxg9hdbbn4keAzW",
  "key2": "3SniAmLa744n1WQGQTJNDwsxCNw56AHrDmPY5oHEPgYFsAy3bd9XPi8zSdyPY73Vb7jP36WPK2QYyZTVwF3aJCn2",
  "key3": "51ZW4eyS4GfRcjL6vnUHfWdHkvWGaY7SxcnNW3vXtQbSoVGxqW77XAiS3KPMwQfXXgkudFgyDm6KoBcaEryvp65C",
  "key4": "5uRq7Sm8x5gGDAfxAAJePKQFvWjJmv2A7SqBNNT9Up4EtWXGBe6xPZP9dXru5mv9XMySZcqgtP386xjeYWE2Ktj1",
  "key5": "5yXNm9Ap45kpG6tkAFsgUHzoc24qtMTZgWjNtCduDFf152ZpzCw48uMhb6A18vFzugnX8cZydbqdSvm5hNW6NpTx",
  "key6": "4DyA2VHHwQ8fJ3PaFPUqaVsmm9YjQ2J6v7ZpGWdLdvWqVnBmNkH1ofnbtfHz6USSJV5A5sQM7LaJ3pKaCJ7uXaFk",
  "key7": "A1pjyRshZv9vd8bqu6Vm7itwJ164DnJ8hbHNLRqsYUtmoBu6iyRtPBcGSVMW5TN5tpEWZudEnBLSJ2C54ZfeBd8",
  "key8": "4d1jjhnmSSvF62LHa3N1bZaGGmSMatpmpqkxAZCxGaHa5o6dPtPHKNmU5QwpKtctT5bD7QVm2WhU2fLnnA5p6xCz",
  "key9": "4BKQmUmF1sqpr3xQhfuNSnZDcuPBksKwAHmXSvi4g75C1hDssfqSLXgfWrVTziZEky6iHaVmaHyuy3EemDsRrbks",
  "key10": "24RrDFkYNHmewqvaMuzv3otgBwR9PJszAV1o81GVRao5MsDUNT4suqMfdLA3S1DxEgDjD4PmiFnAKibfV3MGtRih",
  "key11": "GLQ1es3Ai7seqg8Y3GThGuUgrDYM1vcUQCqjSBGpZrn3PxB3k5XkUbjAydcE8kumL5E4wgV3sb7mMhAwexveouY",
  "key12": "3jHpoT3KSVNW6YAcBE6brSwwjjCTWtYchVdJDDYdDiuotQ8oJWa741p7EwZTqyzh9Goyo4BxzQbiX1w25MSSsSob",
  "key13": "2oaVD2nv2Ah326KPfuUfMmg1NMZQLaE345yMnXS8PiczhfdTM6evpr3CbCKnDMTbvJqXS5S3ZYdZ1w9yZcCXgmBt",
  "key14": "21Nx6s3RQ3qacPi5WGNEKB3d2ZQz2jHdcu9UUUCy5ZJMksSF8L8Q3EV8G7xQCudKakTsonAUb2naKwNiwJ6NxLvq",
  "key15": "5GGu5ofEiACQFkJq28dtDkJREiWGSSJw7cJW6PdNYtbxUhuTfkXRLQY4JaXvUQLnym2qyakUTKTR354augggRHtk",
  "key16": "2586XHooQC43MKT7Zzc1rQP7TderTF88E8A3xvWtB93CqfZ4Xe7k5VJJJipCo4sYKnkXG8XpRN2uU4DiVqzhyd26",
  "key17": "NvcsoKHj2tAntAj1HSm3objQYaK7fYbbWFvxzpPL3ZFnuUqD3oq5gpoBQD4rvSBKHtPSapvHKwrsmgEuyHzeS7K",
  "key18": "558Sa11wwcP4pU6xQvx3r691WCj6wA3YcRTzBR8GUXL9dnQQeqF8QSBKJtsLQdqgQ9M5E4k7oCENwv3R4WStqCiE",
  "key19": "3dtAsnBDTimWpfcgCCx65ijA7oeHdxwCGzYE9mrQLd4nxxs5YY4AUwexfWi3cmKp9NuCbxGYCJAthcgvCkNguSB",
  "key20": "4hrmYfBA6WbpR6nNJ62rvqE8x6kx4Q2bmKziLLENKBvL5z2Fx1d6yyjZcMGbmj9mtqEt2YPSUt77J9vqEbmPsx6c",
  "key21": "2CeBn5cNsMRG5hZHg3B21Hfz6SVeaqLnitbzPc7j9tzQK1FVovCyLf7WrFBuvzdkmgyZ55PVfuzPuTSyNJ3a3bZr",
  "key22": "5wjYDXU9eES8ngwdhtfW3DUkrk7SEyCdA74cJjANsyigPBr998JE2gpDigAp7oJJjRLiYXceec96ZKe1J9Yff5U1",
  "key23": "5iX6VZc8t6ago7bbqX8hmhXdY5c9uWpub8vZzMitLcTQDhqA8RTmvzu6gLPWSAr22wSopou1dSZMANAWNKhz7ATL",
  "key24": "35oJ7eCZrjtgnn8g22FRQf5iooZvfxie8r8pfkJ7QZ2gjhj84ZKSs3JBZs2pTfgxguEhSAEVLCWP13vuQ5pyx2jv",
  "key25": "5q79xoy2W5X9pq55yCwsdErQqqXCMQteXBS1k5oTFtC3kwtU1jMStdtwV1ngMFL44TD5Hzy1f3gxH7xhW9ck4KQk",
  "key26": "4tA4qujKEkptW3HMH2iGhPJVeP4w7qxUMLrk4eqcshzXhwrpYaAhDtRAnqQ9SECEpWn89oEu2Adc2GKNix1mNYoD",
  "key27": "62WMtW9ZuGjPhese4pTztGW7aK3ghyyB95vYq4tooBpd5884BhGecyynaVgBK2PM2JaaYAbyEDos3fG3mbFz6r1n",
  "key28": "2qyenVjDubA2xwZAVW11oZZ5JgXxNkDCA1J8nMkzKa641n7UY7SxxECVmA4kNqdugvNfrmEtXMqsnWhHVP6k3Scm",
  "key29": "fukhMPtuoVdrzFcciNGQjSe6dgS6nojP6HC68Kx7HsgBXHz4so3wnMTprtJqRf2tv1dtr6D2k7xaatZz746npAN",
  "key30": "654fBoUcnUw3qHSMrCsaL8wazad2g6ME5bEA3qbXHX9p3261bc8G9JigEEMJn3yLjW7avyaaxRJf4can7hB3MtBF"
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
