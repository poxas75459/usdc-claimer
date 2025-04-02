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
    "2fC3xNbWRfjzcnzaViSXmj7j7Jr9FuhCCtqsKRhzoQZjKiSzMY5hvYZh129xqV6TrC9RrHccjcPuwVMtXgj43nMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCLjh74VX66ZrDQTQws4oZZSyqMgek2TnhuvBJUcPY4hvePMYptrpgqTvSeTJxrn8omevB53kHSaZipDS42APKm",
  "key1": "5AfL3E2AZ8gsUpKrxMdbmhSGmDxPSw62Y5ZEuDy45PhduzCaT1XxGK3VADvCuPS21Do3yQ5eN1uFkaQTaULaiwVN",
  "key2": "413P1W4A9BBZdfQAws65YCECLNdgrioVKMvLGdxDBfS3uQ9QQTJqgQhDQJmTtM1R8K8ku4FPwL2rB3uXhiCEYEnK",
  "key3": "3joyoEssQRwp2aeap5RwaV9jKFy4vyVaLMactZ4GphUACyXhsWJokvnH67EnEMUBrqmmV2XH45Z92x4e7o1cb4wY",
  "key4": "3BjmMkCiESiSJe4goPXyhAzqMTVn16ZtCBGWgvcCGUiPXfHwXwdbfiWLpwVPa5oDCXvMdALHk3aFEsVFkkHPemAp",
  "key5": "45K1DVrF2NmrPx3NrhUYVadRZ1wh6LKsHf4JjxmVDAkyx2jYk3RPihKPEn5JFuiyM94qWGv7idGaexjBsgDNHJ6k",
  "key6": "TrieqtdMLKdthdnkGe9fbS3UiFaZkGprnG4LtqALqMXCSvBxuFoFBXf342Fguhv5nRK9VALyEfJHe4643qh1HCX",
  "key7": "3QLh7j5HZvXxrDHySq9gdTfeL2YyC6GWntXdVyyT8ds8kDx5nhLabuTYrTRZGgiyCzew7sup4MzGXQCYDQ4huRRM",
  "key8": "3pidc1RLX5jhvs3ZrPzWqMMFXJXujoCN3E7FmFCYbU7H4fZ6Da9ctTJeDcQF1DtGVaqgA2VAidHy6J8bMVry4g3i",
  "key9": "4PjntGpZDSUQtfB7bgS3eoDb1diUteE1vQovnnaNLy4UnByVj6oCNwjrgRDJTWppPnEMd3qRxnK7KdoMjwZFUXJB",
  "key10": "2f2r4DxRe5earM2j3tj7imrMnCCTDA8yGVijy5DDMSSFeBBrWo2yrQoA1kJ8qe99v6AycWftkADnxkcqE5mo5t3",
  "key11": "5whHSxH4n85vwSi8xTv1K9V5Ux5rQZByUq2LLLA1Bg2qHw4z8xcaeYrE3FsZzgSpW67KfSxKCDc3qifxNS6Dm9LJ",
  "key12": "5WYyDzXfAqAsiDPY9sJnd2B1rTRir5k1LR5X9rbznkZPZxsBFEu6aVepYHeXtaECtgQs5on7EJVvUf2vGAzYBHQ9",
  "key13": "4BEFkXE477w1aVqdSCQ56B8yKNEFf62NawFHUXv9MjcP4rf1MFmH1Sc6nYEjUMoYf4Y8PZWMX3ToBGuWyxVKkhZQ",
  "key14": "4Aj6c1VcuB8ZKEbuThRkRxJBYwxWcagSveGVF8r88fRUjSfyjzPbPfATuWfRHPbc95SmHpbw6URRyHyP4zRTEUs8",
  "key15": "4aJTwEtm4cwhwKgUENMZZ3ijuUTEx3GJxCDtmiZt7dEyKP2hyHyGk5iwN9iAG1E3tXutgZHKSqTX2SqvVA7kZweT",
  "key16": "3mNfAorBraUy9sn9t8xNkKp63WqqmMEX8FpTffzaGAGie9c9Hm4aPxk8jrQ8X5qvQv8B6koivgqeuL8RBVB3foBd",
  "key17": "BAiUSQpmtEXBE4LoauQ3nvx4HSBb5VsZsRbnCzKDgbjLuq1Ctu7D7Wwk4kV6mUdVW9oXqDo8WnEEFyJGqw71eGb",
  "key18": "3SdQPk8HgXomN2dR4YQSAZ7TTaec5yVmx96HPQu3V9UvtN49KabD9xHPid8TDJoovcckWetrxgGmpLSfRdkdjnVT",
  "key19": "5EKiSFgLL15EswDBu7Tk5LE4RCvePXVQ4qQBD62vdxdfuxpboLMchRimFbbPjWTv3TcjQbHjs1xEndqeDueZfiLc",
  "key20": "3dKBXEkXWe3zYaB95DfXcLjkQ4Avz5keUgkUTutauP7TYHwgKPT5SwM7NqwgpzWz7W84hbSrTM3fGfxU1x35VQrJ",
  "key21": "5W3mKWZ3Ur1TyEpc557kE7z6AhMG8rkRgfhDGr4fFeFsixLnkpSwrH8Pi4HySCbWGNbKEhYKHEnLASMwScEKVgGx",
  "key22": "5ABcTeJKqiA6sVfV9Dr4atqN2YYVrDEjs61zDJ4Lco6UezfbotyPibuiry8i9UrxCrvohHmXPNsKsQP2XZWswGGZ",
  "key23": "5bxnZJ2qAA2xTcHPAQ4fmEcXhZ72gLk7P4XtrH3AcfQne1ayYe3yMkoZYRNjoJ8vznqeFzxqwsPeDJFrhC688Nyi",
  "key24": "AoiwEfgWF7ZhD7hBhZ7YweKN3we9mh33YHEq575NCaE2f8AfctTEGQcis1FtN3gD5dLkJffdTDzsPkmxBurYp7L",
  "key25": "KSg98JQgtGQ3HkCyoyJeYFLC47S29QHomzyMK4Gt8ZkCEMVb34NGESJYgGsimjcjos58BuGqbR61Sm73cvgkVUe",
  "key26": "pCFddtdbY38AMv2PUMVeaLDndYRxEqHQnx3D8hFBMcGC6ZWfm28uB3nqgjZGNTQVgJPzMDBwMASYGP5dgUCYoRh",
  "key27": "5mXkuSXfpuH4YFXtAgvTURfTxDi3mutv69bREW2Bx5UAUMH35oEg9BZxps5i7S2acbSrCCu8Csj1n88fc4RaGde3",
  "key28": "49N3r6JNtyHczsyR6afocHmqxeSMUcmb9bZoMvtBPggzPQkpX56qT2ppKqzszn1A4gJNWZxiLMy4uZMdVNA9Rq7H",
  "key29": "LidfyyevWm9nU1xrR5FCPAxMmE78q7VU9JXcdLH7CCN2ZCFPdSYwszuy5dKDmPezJPFQT4SY3vxA1hgV1SrpuM3",
  "key30": "28BtqMesfJzxh5twhJdJ7XBA2e92pKmekD8sv2QSwMNZQoPxBRZWMLypnPeTnAc4BJXodGn9uCkunw6XcQWwDFgh"
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
