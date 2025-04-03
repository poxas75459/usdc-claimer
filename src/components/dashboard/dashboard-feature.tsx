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
    "5z7Hvq4b13dDtL74Vth1hJ8TqCE7Bv6tQYpEn9FYA8cKwgEr5wNzCvMDZyiuGMXJasKwhdidCUEGoGhcoJiX8Krn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5hjvZMsopTpgwguF2Uz37nrzUiEckwfbmLHRQPNkH4SMUZwoDkeRUU2D8un1TnmiN8W318oKros1MK7V1eTrhu",
  "key1": "PfTdBR8iKFJ5jpTyr7fdEYZB8siEVpBjwM8pUksjss5pefGHwLaVnePAGVEWc9D8pr5SSqMxnDsjUXGHMUN9uVD",
  "key2": "3zrys6cULGCMF5TKXMGvxNHRdcd2qKKarnszLHWMun9LpaNnPu5DHiVX1FYf45A2KTy4AWeVUzrg4reBa6i2q9ge",
  "key3": "z5SgcF7TVWCnjfZg7JT7DYKKfamN9vQk2dwM3QKXYZvRzF4QgvKHQ3U2VRYC253rBL29FzRhRTF5mkMnFpapXbA",
  "key4": "njxP9ZYK3VyGYF2ZD35q64T9EjzCWZxVEnCGLVY3cHRuCV2LbEXLKCW1yY8Ji5EaUm7ATbL8jp1dAGQ5Kq2Burn",
  "key5": "nMvU1isWVmdnvHHRGtNfauNFXB7V1tcZuxRoqSgubMLsRYHys7q497XQLB2X96ZgUbgVEce73BqGVPJKGA8Xr7c",
  "key6": "3cFmsAzmNR4jEt3sqb5VZWfdmtqFn6Hmbk34uyLL4d9P3J4A477vxyAAnrys5A7fahcrBDXs5sxLen6XdjSwbsup",
  "key7": "A1Qt2SiuvJ8vQv34MB2AGsK1NsYk3xBbd1hGPLkkLeQrDheWLFocmRSYygyEkijqpZQ86RX7Zdpx75YKfDtg3KQ",
  "key8": "33RMzXv6vovua3Q9fpcmcLvz881jHpNzQDwTuNVnwApxnSmmuUgn921Ui9q4ig6WAdWNn1S79a91Q9tQYm6AJJWn",
  "key9": "3gnUmSfm5pekj7EpoKEgBhrS1FPmyEoNWpZTK57dHy58kMuiCiV55TLuwYe3ZU58RkumWrtdqPiTuwRR7MZM1qkQ",
  "key10": "2CN2XoayKeawyXWr3ZFdyWkj8176p5DHERxz4XxZGoYm7J2mzEFU6z15tdy1pBbnMmaSDcZBytetwjQG2egbScwa",
  "key11": "675BaUuU59csjhvJWqQarMCQica9QjSXkaXAj7aAY7CgkYerAus7z7t9UxJ8FDKPtXV3nqMcuuDnxEjScaje3Jbv",
  "key12": "3aGj3qpBXEiDCxutb65ms4BanHunSSscHj21bTHLqbdanTX6Az7KbWUKwcgy2wRx8Lx1YovAeX6gYm4uUoRY6t9g",
  "key13": "zYMj9sLruUgPMoUY7bVN6681Xg8cPt4HKyVjawkqUdmuoVYvYY7Eq63fveAtBhhkY2xvfXWJDp35763e2RnFLgw",
  "key14": "4B63mVPQNZqW4MGLLSjinPcuCP45K5AnkXVe3snH5FhHKDBSkg49AXuGMFY1fDkxwf7Bc1wcMKUXYAq63VCHE617",
  "key15": "5yjq9zCp6CC4yiZ8CmbHemivN5vULQ3bdeKKFMR4Ak3q53Zue4vzqcHvp7Ly2FpPDqR6yYXv4kHaygz4R6NzmbCr",
  "key16": "4Ls8j7w4goFdiuEDge3TtZSYrv8FGaBK25zAvCmAokkjvpSthX6MZM4K6kxcRuKVNF7Xygfs2jshrhnvoVZSj9oo",
  "key17": "2TbSf6ahpfvefhEhBXiikipiumo21Y4Vtwk8KL5GL46YvGNRTHUPwEMf6tWG334gNkvtPGLopTDxXgLoMZxUMg3h",
  "key18": "1QyCfMC95mVYQ3bUFbBhSP6c5W3Lk1M6Pbe1bkCHWUq1p5osb6TjXhJRGxn6xMjkWNSfdjdxVRH6DvBZEWcymUu",
  "key19": "3cEpLc79coefLjP2PsS5iMBkgGZqudpJfFdhaQpVYweFseWxSWqNw2GsEHbq5Ahea7vy3jfE4WJa5u17RNZwdtRT",
  "key20": "5caFM4A4HuhNsMyCnYHxqmpWP8ooxZx8LbkWhEPBtj2DxgYZG6KVENeEyTbJgELVL1myidNPrXwmSC8rKRAxJX52",
  "key21": "DgRh9fxKnwpTWJLKb663QvDixoWtHiD4WRkVGzARxWisDefcuCp6q9N8gabWFJDd6ok6UzKs8wSeJshgt6Zhu5G",
  "key22": "2X15EDQDbp1FQFuF5NRff4paJvmBVQuedYqGoiCRoiXWdXjz3QNbaMLhL1WwTNYEonLtVfqJ1FCjjv9wm9DhjJXj",
  "key23": "61KADkQQfrxeEvbYrVasQ9aAyNZR3Ves2xRXFAHzJebkBKE9CFMn2pxVmAGMgCH5WJYczM34r6bGxPdtQqVgswVT",
  "key24": "4pGT9NxrQr93ejii24Sm9c3RoTfKB7nuK2rWyvcRprMhguXCFt8WAHZoV7DyPUfbp5mVW756C4nh4Wroz2g11FZm",
  "key25": "5b8h8dsV7K3LEme4kdAjY2EqWGNPxScCxD8UwAACmqM2UoB4pRDSen4KFnBadS52mCayUpm8FEcwDWbXBw32VpCD",
  "key26": "6c8zKZbSVNR5gRgDUMZCP4NYuh7SHYrLoTESa2v7VFHTceoJ4pqRk3DjtvdVjRSmp7uksx9KDnKhwKGf5UaQU8r",
  "key27": "WF9SbAyVwxAEYPP1duAW2sAg33E1UE8JQznT7bogHosHTdwzAtKQ5LBmYEwVUpktMps9Rs7Jbg1xS79BuFBGQDf",
  "key28": "5eU7wSvSt7ycq882K7S8zEoEK2qKGdYjDAC74vt93jCeqcmV7DCvECtf3ounD1udcGgwdDd8sYKkwmoJgj3EZYbR",
  "key29": "Se2cmsh5zmPPu6ti1BgojjbVEjBz5CRWfp9UjJRVPMzWuLfBEn6oHwKWn7URHUGB9hcUssqDrMuKSwwi2E8GyRq",
  "key30": "DvQY2NK5JxSy66Q7gTyY1JTYjjQoP45mutHh6PhWpjBYcrLRrhHrGohHWwCkiQZxJ5XPV6qc1ntStKpkiaREuYM",
  "key31": "4ER7zAgQUFaz1yWUJM5eHhNJbFBsR5hc2xP8s77ve1ZUs1qUo2EpF7L4b3DJi7VWeXvWiz7M4FUwAqhvXp3dhaJu",
  "key32": "NAcoqGjDPr8bG71Lwb3h9wALTtNhEtFQKhDNmnFrdNDYaFUCj7NENmfVbNERg1oRNdHLTm7c6fzy1yULDSH3D5P",
  "key33": "5mdM5h6Pw3Xy8wzeygiQBoQLEGy3kgCHBgw2Gd4cTKMycJwqK7ncAQS5WtMn9Goq65m8hxuGASp1ycCrD1H9XJeA",
  "key34": "2CvPGzYjhCd95w1dizAoohjdXxJpzTjku27oPWGWsBmhprubtNBsvKuQGMcprSGvr3nsDcofLTGE9zQGrDoPdM5c",
  "key35": "Df8fMmGjvBp4H7dGbSy2T5P5xsnsQCnfrTRoipvaU61kjhXWt49b4q5vN4i145ZsvsMski6Y3LveExARLhwc6zu",
  "key36": "3aPTLkAtpphncis3cGd6JAucbJJBYCn5mYZDYFYDomkMbMghtYqfGpUFYUdbbFbfQtUJC2Myfwss96m6zNDRFVCo",
  "key37": "2mbWPtNQpAJ92chbDNKniJ5xKQyeepJTfLYCaHLXEK28cALh5va3UcaUonLAcKUvcVsMxEjBRALfvZ8YTa4RDh7k",
  "key38": "4GU4fixFcjTdfkbLa8nXShwTbDPN4PH5SJqG7ZgBdg2vJyGKirAeXD82VfHX5LjSLvwrPfTtANhok3nrj5A2oLxa",
  "key39": "2xijWy1ogm7tQHkFwhr3wTLL7UrBR8V2NPoHQ93Atk2EPxMyUe11umESNW8ZVikBx5vmWzxX5vgRsEWrm4A2UYU5",
  "key40": "Xx1qNCe4fRK9xbmWtQPHKNtD6pLLQKMroYxfBSxumziFeBELi6GndcPjdcrmJpSYy8uZpqpmZaM2yRirfDGZxp8",
  "key41": "D51MW1VzKJ171qQf8vR3gv4nRXcznAvJaeArLd9SU9ghmu1TMs2n2iz2wHayMaTSJobFx2FbYCAaZBocTnXk6vZ"
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
