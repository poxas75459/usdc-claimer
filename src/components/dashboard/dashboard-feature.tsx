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
    "26RBga9hXgMpKB98dxPhLFxgGXBB5G1oR1EBDLNLBdTPscgGW212kskP2VpVahJBQQZFW8h5RZ3yJN6NkAAhATwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uon6SAYuk4SBdtwkgBVySDk7tCYVc2PfpPTiq33vQ8gvXd69mRhYnHt2y8SEi3mdzzGoXHyKvvhXeQuRyamBZ5G",
  "key1": "5Jc7vtBVcX23VXXhJRHkMPh5NxsmcC7FspJ1FQYYxKdHPdnmR3rJFCGMM1fkhSDpu8E63oLGtf4uMt1khHbgxhp7",
  "key2": "4cE5WBUDKTY9s9mdJM1tSF2UsiACRjFcz95WJ1zKawFySXt3b8vcWug4BTJE4zHgAu4xFTzrrRUMxJ9yoSw2L99r",
  "key3": "39CB5GXuHpwfpws6MxzkntQ32RiJR9VAdZNGZia97YsET1xvm4h9FmzcmjNVY3eVTvmVMrn16GhLmiLUYhW96sTo",
  "key4": "2G298dYZGP5xP3rjxT36Tdx2KfNtJsxBoe97aEifBN6oteruCzy8mSsv9AFrBF9P8cWPnrS9vfYhM9DUJtQydzDJ",
  "key5": "2RrX5ratsBL3wETNgvM9qFjDco45Wv4r8FzTih6wj9ks2qzLuGufKiU4ZrH2QQMwwVcZ6RAX3zkFvvFdE631YjXe",
  "key6": "3ddhkuyXHnDxSJBkWdv9xEhn3Ydv5JuP2tbnvQgDtpG1zHWBwsLSD2svHh4ricFZPuRHZyGrELjTNa67S5kBaknn",
  "key7": "3SzSQY8Sdk7QtRffbPXtDuRwWdPMvVVhKCviuqnCAuujVUK38bkJe2HRxUqyUDbNmVYqsRKMvRE46DJSXb1XgRL6",
  "key8": "4ePDvvJbvrA9ut3siPGEsurrPVt9obcVeidsR5dV8iSPnGsyK3kVQsaUiFdwVGZUYAbWE5j3oPwDXV2mDnNMgECF",
  "key9": "57gT3NYDEyxqzqfuoc9PH326fEdEVzsswhZrARYYfkJYFcCoppkphh6LyX2e8qukH9rh4kXVmRu3uaRHLVzHkHMj",
  "key10": "4TuiPthcSgMGN8SwVhyFze4Y9G7JGCG8FAGP6bu45Xc3V5G5qTmD5BviLhcSCgjUQRdNq9uvdpetNabKCQjDifDc",
  "key11": "MVQqf7HJ6Vzb7hEHZMFH7fKETVHoKw6mVKMNkW2ef28n2x8a8YmBWur9RepuQkfhBAYdgofnnRvp6zhqVE9xCSx",
  "key12": "2jhauyDCzJQcXk38S2aYEs8oaDMVYEyUu8mFToj1y9HFxhG9ewwjoGcuxo7TYKZMZyV8vZ8hxthrWF6mYQ1ixvW7",
  "key13": "64TeGn4BhFuwBqq1mDpwdhHQFF1rAPXdgRwpakT3zUtow7JjZ4cPRCnc68a4dc3nuVXhrs7ygKqGxYj1pgnp8ywN",
  "key14": "4d9qecQbP9pRogDuYJHwqneiKsdPiApyKLGxQrF9iN4WLnjeVE6TppGfsjgQypHHUkfEkJk11Ddk4Yi3mGioWTgT",
  "key15": "3oYQnTiRnVoAqRQYNYtb1aZStPE8b1nRTQezYSm1fruVDof9juSDEhcNQSuK9KEU6MzQc3d5BMjwQkuBwMgtVvEo",
  "key16": "5R9qt7ysDvezGL6dxPAyeeQqYvctpjWiUS8mN1CkgZJcu3D5vLXirGDkxD2kGCCJwHd7pxiqw9zgXKPrDD7fGPtQ",
  "key17": "5N4Srj15Cge2YvuXHYVKjcTsjBne9c9rYayWUXcs8rjhsYCAh6WW3Ybdymva7Yt65Z63TWbEunfjrpcMq4mWQ2Pj",
  "key18": "3BY1RLYWYMtmwRku5tp7i97Er5mtdXeeHbUqzDXpYfihtFNea1jWywdApHuGZQcMfYGPLhxTF1rAoo4zF1f2H8ok",
  "key19": "3ZYgkC4Wjx8oXKdc162PbxSnJfB42xW8RrG5zERJQ6jWKfxzLJyGLnkXpamcADkgcCD9KBsPHgVT6EqmiyneLkT3",
  "key20": "389us4mnTGEWcg3A8p8sYAoNgViBK1G4GyTge792FHvozvbFyKXEHBRZA7kVdPJSGHgyeMN5VfkE5caCTH97eeK",
  "key21": "4SN6tt25WTf2khkFdfLrHXgecXWS43MtyV2RJmEGdw3mHVfbYuNjwVFFvFxiFv85DGsBUbEhg7qWtj4UMu4n7SRY",
  "key22": "5GW2aT3JjpA9cBam7kBbegUhuaTnMxH2G4ucStcszsSF1We3GpcdHnnSzCNhb3x1smfuk73BQCDxuUZP6nXjNNAp",
  "key23": "2cPbZvtbQtduys84NrwCf11QKxoTv5tBeJz66AD4DuuDKn2Hyo95YgqMPx4kAeoEhiKGbzgQCync4PCPJqFkJ9vS",
  "key24": "377dYjrt6a1BCPdJXuXD5rAuNLf2EExe4NgME91t14kFVoLC8EPmZFRE1NaMPedVfVaeHdAhjrQe6gwULczKMpb3",
  "key25": "GLdFQJmffrBo9tZxQAguUENcbunnuW5BCo4jgduQmmc9v4j9VQ2jU2GL5FS16Fyozo4VACu8FqLvFoEziLpvSqJ",
  "key26": "5LWmb7Goe9D9bJYn9wUz27D5AXjw3XTfWYcQge7DrdruanBpn2kU98HDGREH4xPjuJRD2MWc2ePbCKD2gUkrdMFs",
  "key27": "2t9GbLVZgbVVGpknkcmpQZzZ7njsfGkmJzboLk5rk46tKgTzTGKewD9zwbMK8ovK3P2XM1tBKmPUW3Gd4z98YkbM",
  "key28": "4bMz7uEAKjf2fbb1PQcguDH38QKcygYLa3CorD4LfpCFvXiUzSUKTR48U2jCKg4kee1pGzCuhbJoA6YZ2shYp75a",
  "key29": "5PqfVC6YrzK1cwhCdzMdUMfdHpSQax7xgYAvn6xHNmDPRa8jPp8qbeekFgV6satpaunQuK6DfGPuudsESACeFW9o",
  "key30": "h54GNLdJvkCmxhVvuimvN2ETA8iF7LdHtZbWgLw9GVvY1Tyu5Y2NKZfoMZEpnkxNFkpj4XfRDPJsbtbc9ptmfmj",
  "key31": "2WjcyhMyCxtkbgwrTncWZ3si7HWDWn5Z1xfoJYQ3gSep8e3rpwLdxnkMXxnvssB3g262Ee2jzxBghYPZo4yvdntH",
  "key32": "13RbbtHRVKauzwacXpMMYpDbvP5SJtboqdm8b3KAwocd1x5Wu1P8ofHQem6jhCZaPTttGsv6zPq5UDrMTZUzyhy",
  "key33": "wRduGEAAQB7XXgeYASveD8LitARHZSeex94U2Xo6uFbSaCagboqEqja7zd85qww8k16h3gnS4MftSqGVwZ85R9B",
  "key34": "4Zsn5aCmKHKvFACPrGhLTmQwn2gnpFBs2VZrqToVkMKvSyrizZ48afeJjSRgGnVMtGwMXvGtvyGneVeePGDGzGhv",
  "key35": "KSEE9uSK8aJACkffHCLXv8TLVzwRtyYXyY2yTNH696U9QyMPphazrCtBXuQdsy9Y7HHiZrQmPx1nxGReKw17kNq",
  "key36": "2vLza8kaTwxWV899BSyGAKfybRgFPuKN47a1eWqtSECJuEYzXUgNNnwatNSKdAJr9GaWMR2zUMc7sa859jJjqU9W",
  "key37": "SqWZSubZUsx65Q1DUoH8Pcs3AB7f5n4dG7ZYfnv6ESBrxFzhMCW63psXzdkQpqpqwQGrbBofdXSrN325BBV8Jb3",
  "key38": "3HDr3rNK8rHRYet5Zn48ojQDbEsuqit5PFLpsJjHb8stCpzwFD6Aqq15aNj9KnZio3LD2ESaycPc8GYfGTzRYyfr",
  "key39": "3xxRwDukMK8qPnH7EdmL1JsbFteHQZGVPZns8XAbxSXUPvQAtQXv8PjarEnkiH11QK4QfXpKNDpXFtGgo9uwb1TY",
  "key40": "5xjyAgMdtyKhnS9NrgefMjDpmJZSKA8coL7hAFbD46Cw1ZcDs8xFipizFREUCkqnK3xaYYKyhU1467aycUvuuTXy",
  "key41": "3EBjHvL2EQvfCTc2Vh4tdTHYMidUHvJTihDAJF8mGB2BJLvccdK7YRUVkyq2gzRVjKpcFEkGsTZFg6LikKqLjJEn",
  "key42": "2mrNiJsAaKjUNsgyL8eci97XS2kHk75hhgECnGY4HZHDeDnbM34MJ3z68jgqKi5gef5VB2owwag1ZFKh5HtSnnk8",
  "key43": "5zeDeFciTztzumpzEeTC9iQqdav18Dfw46jQJW8y62p5ypy4LAcNK5AHJhc61KYWYoPdf74BJFGtNXPETpmTUzem",
  "key44": "4zbhPTGez2zRwEDr7fgxGSe5dBZ1koBiMVhoDGLjs7VxdkGSqKGZiKArog8zh7N97BHVJVdRypMQvNiPrbbWviPd",
  "key45": "4nqaoGGTftwnfX1DJpmoQWfhSNAx26p4hKJw8cttsSJYJ7utuj3qeGPRwAwpimuhTFSFCSFypChitQSWmQKYLrmg",
  "key46": "3fTUE6PivnDE2HB9zEyfpYNaAa6u9yGVxG2zCsfGsDHB15BCxfuYfL4yxTM8ynF2vgDRedxnqby1pDCnqjCRwgKa",
  "key47": "3VAQ8CgyKKKjoaAKxiUZBE6gaWJVaHXuVcJLdyew4biGqoGQydHRBHuK3kXnS2AwVzdBiCkh252P5cu11PQUKe1A",
  "key48": "5GcZMPUPvAjBG75VDQpyuBNZ8VVf6ZEcw5wRLbnZnQjpTQQ4uWMLEDz3x5mrkpQ1ZGftEDjF79EJyf3AyjPHx2Rw"
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
