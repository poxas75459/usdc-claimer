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
    "T4qnmqzGL2jdL1ApK3ZkhK85yNsFMx6tH6q4GJLAwiBm8vKsv83aiTSrrfd1Nom4jGcykMg82YPaAaVdEzuxyUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TeEaFUJUvGrZeasrGvBrLBrbxHXzCE92PEbFMjfshFXFRRa1zb43QZCQNVrv3a1Jr9RMVE49b9sNVEds1j9gova",
  "key1": "5ztz8MoTNLNnaQ9QSGa3pD7GFx5kE77foeZDft8f2VMrVZnhF4ro5aYhYrT6G88teU8PjfENW3uE7C6zG72mbj2v",
  "key2": "2Y3N6vA3ggjeg7XvMrSzFJdVwgs3H2LKPW3rc49noErQdjhGikXtyW7f877xe2rLsqrnNFRZrWHoPe1zcNGmCiLr",
  "key3": "abqTd4Q1Ro1hC471FhYgWTxtMpyM6gVofXxak7weT7Yo3F7NofAHUUhVrcZEWFJmzoes3iGHQ2BFWYACPYSM1wE",
  "key4": "54WDRhH6WpbMS51sMgSSS1rnYhcLmdtmt6XDQJHTnMgr1thUQJhh2ZT9yR1mFNGiykn88pRcbpG12scbLGoGmv25",
  "key5": "3yriSuY2gJiuT84XsnJsACVQPwYTZ4V4ENn6zAHqqwmf9EcdfJFkyYkmqTdk1J2s4EHVZSbkNLqKPNwjDHHAL64L",
  "key6": "4FgoujGA3CnGGhLXiwnFNC2VzJR15GjQNAuzbrAKVPjFQ5KDxUPV99GjyzTmCLS3qPiASWQ11fUbvETzkFkNdhkA",
  "key7": "2B3ziDV38aeTGjb3gVgMnYNdHiBkriTfz8rLYGhUJNDQecqyTiFkaEY3e2Q41rJ6ZS56z1iso4GnkrQ3fWwp5vpS",
  "key8": "4QqyEZUVTGv7b98wseEaRayYnYadUnn2EDnZP69Fgt39VSsQsREgsrUcbhnUcbsGtik9Qb1HjVcnfDQhSc8Vc3AB",
  "key9": "7HjLTzqtxnoaC6rx4kw1MzSFFs24Kia4ipK432u356k5hA5zmh5UfYPsLvhB9VFWkL9NjJ4m6u6VwJhwnb1frHY",
  "key10": "5niRtqrtUeGeqFabUC2wmhMWueZ4PAksTjhT9TrcF73Kq1mH75PSus1vngwPFMaFdynhEuvmV4NqoPumohr3KpLF",
  "key11": "4vR5dGtMaFEn6pTmW7E24MfPquadh2xBVsY5cJz46VxzxZBn6UzaH8KDCMxAZTFtNXFaHS6wa6vkdiTRrzHLjhWy",
  "key12": "356cysNezYaZwEs5LiTeby3YAwmDY8xDQNbTmog9BtZKLNQgDUb8jAaAKcw8vCiJxLrKe2wt7XJx1CAf6t9cjThf",
  "key13": "4hGUXUqoaUGzHFoa3PTdAxrgTiAgouqLxN8axLEL6Hg4QbrJMjeNWDhkbidJDAYGkCx9P2ALvYQyaRga9y3MLwyu",
  "key14": "uV2s3hjKPocH7aMvyo2rrzDwjaTZLFYXsN8Qr9gzp3Co64g7C4PhsG6NSbYg7B8jHFtdgc7yPtiGCqnScCjb8dj",
  "key15": "yh16m5q6UQFWSmi5R1QHRS4TmJUyxwumft39h8dVxivyWCdPjH2f91Moo5KSHyJjrxn5TKTbCN1NdeibLeRtaNi",
  "key16": "4DdrpWQm6Y5KupsGUoLxFf6nztWmkCq9QFWdChesG3uHsJcc5Kfv3XZwidx5pdr9e2Qm4tebWJPFfhTndn6yyjvK",
  "key17": "5uvJPrJ6vK9gehqUzXU8h98cJGMxdTW9zw3rkpf8N5RS5XqAtG895qZL8fCdhftP1RrjiNLTy689SPLSpQm7EBM5",
  "key18": "4QM9jWrGbBmEJ78yYXeuqpNXo5eviKNUen7LaDTB1dxPeRhZYQFNq3SKzN8ZZEHMd48EDsEFtMiTgGZDbhu14U4m",
  "key19": "47P5fyvL2hpVrY9q8szWFStJHrseUZxNMi4p5XWZ76DYgWmRi28MRD5rHyZPiCotAdnkbdpQcSzHdb7ETKbcFF1D",
  "key20": "2eSappyKNA7TaUcNxy616BYRXZNSWQJ1n9mWzpmdqhhCru3JqAY4Znu1nVuPNCKhZ9z8Mw5D3NQN6dKsvMBFZ6LE",
  "key21": "4oLjDZHFLjAd4e3f2Tykb5ae9hrFNJ5LQ8oBqpYfXrrFAezkQ44vaXXyiNnaLg8SM7XzXNWKXyNzNuj2yJxZ6UHw",
  "key22": "1C8DcnUVmG3DJFR93Dx5eEEQcyeoZieBEpzqb6m5q2q2dDCNxEUJTxjP7FtiKrUDcZR3QaY2v3ZGmSmkAZZgAE5",
  "key23": "4Ccqt7UnPAQtPnDpoV6Bq62YaSP7BvX73bbBDsmKbcGHANnmxkXSZXwe2MTfVoqaJwSyNRimawgaDPK2fnwXaRhZ",
  "key24": "3w3B98rFapqjRfmUEjxAYaXgiQZynn2aBRaPis8SwjdtgZniGQkfjfaJQJzaoHkQN5Rb2R1TQP54Z3bP3aeAnZsv",
  "key25": "2BqEXjno3QEKTLCDB8N3hz8eN4oDuqnnWEan6a3cCSBmJHz6Gis12kQhFZPJiy1LqqMPz6A1SvS99KsikKrkbGN8",
  "key26": "65jSrtjzRbSHfVFJWouPqtqRKJ9qaYUXr3ZedtSTxrDUgyRKyzXNx8q9PCgZQRzK2QF8sJkMUXF8E4mHxj762s5R",
  "key27": "3n88fYNdxcP5CcJPtnjY2o59Zxfaf4V39PiMggApiygWM4yw6ufvHGf9hZqbVcguWo4Aidp9tYTR13cJqsdJRESh",
  "key28": "4Jge3UHop1CscFkKTB8AxnrHN4uL2LZKhYLpweBfP78M4dG1NNjJdnFdb3xd6AnBvyctdh516tc5YdtP7NxbofrQ",
  "key29": "5ZJuVbRyoFUaikQF2ptQGH9jKP4kVCXBRNpAD4QefpW5WF1TJ41FyHz9AH976Hc8axMEccDz35CWrq8qs7HM1D16",
  "key30": "T1eEC4EE9UDMvgMmfcsJ8eRRt9EtbB73ZbH1wnnqrDna4STiyf6fqD6uvsx5LDM3jNw7MF71B4qquVF9Mv8fws1",
  "key31": "28RyHqKSMJNkKNSA2DmFbMVjpibg74ayUeXKaCfGgaYQGJ7JaQ1BEaJ7jdmLRKsZoQyweV9xGqks7LF6CzM5Ko8s",
  "key32": "2DyG5K52sS4zBFqAPnp7ixWAAax4m177B1pFCJ5gh6X62jRKtQSrkTc5uowBK8HzaS3bPpCeCyngFscwLj9v5oBY",
  "key33": "C7BYLd5PQnugHeYJ6ENtKBmWqhHH3PfXobCapJaS42TN3MTf5Lt3ZoFiSdtPWQkToXvWwNKHqG3ZLcjwWnSHRwB",
  "key34": "5sP1nfzyxQXhjpavup8pupyRMH7r6qdoE2tXbzQc2a8ya7aKgHGSBz1QbuHe22ceSnNx41HykkKGJLi6quD9UQ6M",
  "key35": "3VK4Vs8DBrnAxDFvxP6rP41U1iJBGQT7DCayDZat9tQmvnLUfJgJybHzb3L4njdxEyw48HQJyyshg65hGzFT6mFo",
  "key36": "Jed6sd6L87PuH8K1UPFgnU9T8YtUVXQCY4y56K2MqebpcRyPukX88SMHgtEi1j6HAKqVADvawnzZVCE3XxLiPh4",
  "key37": "5nwitCkXq67GMnm9aKZm6DKo4NEdHPxSFPZ2GLkewTok6GNmjVibu8JkGKvd87CvgDndRfA9efp34tJTr1PKVuxp",
  "key38": "4z7dCRiqAzYRDmhMKiFT2Zu4QsiB1CSXaJZL4ieLMHoRHZuGBiPx4DVWCF2YnktoGr3NfAH6CiHs9yRbBXrjQ8rZ",
  "key39": "dhrZysPWPt7DPyivg7WSenkLCxoDNsy4BqZTS9gryVYUHpHWyjBR6TjAc1HxX3guWixwSgL2uJ6B2ev7trm44MK",
  "key40": "5sp6r3Lj4n8SUFASoLkU2Qgd7nsCmVbqj69reWMYTE3XbSVqpy5ZjKx3agYg7DWsqFrpYDWywEd2L66WtTis1RE8",
  "key41": "3JmKs3dUs6mhnh1S2MjtJECsYxq6t7C2VxbWtN3k2wg32JjyKTRbp71Zr2CqA6HAfBFAi5Xwjj6ENpReKf6Vdmzm",
  "key42": "4vKofr2ZNCWDDFon81E4zNmR9NHRZcPUzHHzKZHbgpz74KMkmpoc1Ps9Wvncb9fBFE7hLZvmLBNGf5S5izozXGtq",
  "key43": "3qRosyQGSAPQR1e83hahWintJxSN6vPcahMMYP7hW8WaaWNXq72UggqFvrMnTqLUAJzZJJTy3gP8aB2mWj8yiNJJ",
  "key44": "38EsgCKYQHiotmhLpF4KLiMBJNiaVeDZdVM3hQvcohqknsoXRmcQxjo6NVwp4hbvv2GXLgBfauUyEHtpXwDwvwrj"
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
