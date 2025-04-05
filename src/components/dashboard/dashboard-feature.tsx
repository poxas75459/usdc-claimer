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
    "2uew2esThTNr3zVgwRXGACbh23a33N9h6BQv9B5BkrpYH19eevHJKi3rEk41xGcH2z2yACZNTPCXGF4DMj8ExbRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwZ63x3GkhxHS41bX4aXam524uizJihEKNxrhiNPvnfTW3ie9bSjg9552UdMM8La712MMGhmoXbVRAJtyf8MmCE",
  "key1": "2GmZFFgJuainLMRk2EVxPptAD7xBR9hxty5gXoyyaCzVxgSYQq6uzPBDx6F8nYv6CLmLzU3zi3omfe3GswhbFCnN",
  "key2": "5eBstwZUxKiLtL2ghES1Qr8ufXG3J2mY7iMA4qxmoYwjBhjz1HvPqgAQRGTFreXxtDrgJucLLmAaSh84uhpejrzq",
  "key3": "hpd7eRLJEMbqjCTKx9vYT3NTyc6YudKFtxwidL1WxhHt8NPR61pPsp1sAS31Gmq4KUEHeCQw3DTX4VGDpjuP6Sk",
  "key4": "66ZjQVnxhrvcJB4nnSMkdFVd6w7NnbN8Feq4wraLYRxTHDFUfpC46jUgMrdGKvByAyLPaba81ZiV6ZZ42AkDAPMv",
  "key5": "27hpzKWBvAUW4oCwnxL528anyePXgRBKNknxJxiec3vGp4JZn21APHuGmSjzYZtQ3fh61pKtNhu9aUH3KQRV2oTu",
  "key6": "TTRAYEesLnYpcKS2bVWnNjY3YGnRxbUfjkBSHiyQPfbQwnmzmUkT23BEbvBDMskyZ6VWkiAzZ4Ni4BuKWg7Ak6e",
  "key7": "4pHUBTeXo22wZKGDTM7YJ9uWmNnqSCGV5Zcb3Qcxkcg64JvseCTtNtzerRAerNL2YvD737z3Pk8uvL2kXAdJGW2a",
  "key8": "2jL1HvNdHYCzJQMJAcqLjKRbhAMawsxyxYFYwV79nv355QkW7p429dNhMDR2YB6TjT1gpM6ZgDt5pZdgbi7G6YCd",
  "key9": "641HW1e2zH1bWZHPYqEywprTmN8pC4AwCzcfBvv1g4FrSBcwprT1S7y69J2vz2dHQwxWPWYPzwEmxgUfaTzMFEdE",
  "key10": "5kwiL3M1rru5PbNskPbkVVxGNZsJstYsn6c1RLGLMkG46mFrwmjwuzkF3TTnSsvWXr4oPK2ZN6XxBPLkr1L55Tuz",
  "key11": "5P8o4SYFjVGqBwgB4hzbtGoNYpNPkzZrLt3xmpWUnvbb4bYMt6BCGui3N8zzqtewP6ECRer1T5godEfVcpq34szm",
  "key12": "53nqqxsvM32JJw9X92GZoxhsTSnL2vyXRf3tpfzNCTfC15FfQuDEWDZPd5qjAFxdVK7jVEJ8xZMBcMZLYDPeq4d4",
  "key13": "5XGZwZ11Gs3Yh6uyx53EQxmxHFLyjvHMJ2YCX3mvNC5SZpx1gMMDEtg39KD1S3YCeC9ntGjjTqgunSqTmTjoCkGw",
  "key14": "5hKFXUiDR2j7aK8z7ij4P6c1Pg4F5oVZDc7itwNjTESNQRvZnYp6MZHAwMqrxYusJnoDFikcuX865JEo5rS9CRfa",
  "key15": "3Ys4PGERG2w9Gg9wtJJHHiWVaZcf6RuRe4EJqGnzSZSVi81ivN1gwKiAgKyGcLKWgRMUsmdQBqW16hMtatbz5FJM",
  "key16": "549vwzq1VgC6wAWBzp57da4Sok8fqBcULR7DAVedZbyU5kHaHd9BRGz1JxCkSZ1rMDBStA3huYc6mkDvdFWMqkF8",
  "key17": "2S4DUPhRg1pKTyAa5ASYVYvjBg4k4p6FyCknWwfpigWkpYYLiExvx3hkVQwVzt7jmVboMtwnQAcCKfEtwGf9t5PP",
  "key18": "4MZCr4q6u4bJBYDQMqznmXgQxiVbpN4ZALn2tw4jmR1T82RxKrxGhC3nKgb8y1UyfBhkeNFx1dJJQGnrwjedTLUF",
  "key19": "4UKLuFG4fGcNE1rp5fPJYFSfGawzDQLoAjVrWn7AzmU2DFy4ditsnSTxM7mjy1DHYpAEMcXewbEBP8CRiBS4HfrB",
  "key20": "2y76ezR4dm5YyHnzHFEAidHYFZrffjLS1ENNwBMQC3WMf3Yn38pvuUUz3UScPfUNJG12v6swUpKrm3qnZFg2PmRa",
  "key21": "3rr6NB3BS1erU7aQtW6UTmzYugnGK7GhBCzoHmHBapGVnY4TH8tGAr4UacvZiqdX47RChUDbyfP5vCUDZFSFyt4F",
  "key22": "4PyGADKLoXDLszLPg2qk3aqZa1Q1QGzmVh51fTssPtQzX9Qinpu1jsZJFvGGbwmA8nw9KreKWr6xzadyPttKDobj",
  "key23": "UEZjLab97MP4aEDj87xmg3BbfG5Ed7b13xto62aVziuUZReovtCYuQEC7eSWqjsUH6KA9LhBpBytdGbVTvDTYFX",
  "key24": "5LszW7YqEYuquaV1gNGztH2pN93kWGWqBEyh8yddJF7J6Uy8eDt7Ks1H1MLa8xmMM6QNmrHP6e8tWoP3AkVzsKdt",
  "key25": "4yMVbESADu4qoqyqS1nR2CTGv3T5bvsq5dn1VLA5ZWk2R9J2YgnKC1LzpVEaZYf242fY41NkbEUZpmsjsNVzZ6kb",
  "key26": "4eZViPRdYPGxPDyrS1RDpWitrLVvWgHLnRTCP6qTrxfVYWpp1ztc92pyP8m9ZJGQ6DFZqCSPKaFeNGfpDxdAQv8g",
  "key27": "4hjdxt5phAMLBcxptqrfkUJRNhgjNRfkhuWva3NjBWPwhTGncufMJvez4ccf4sHX5SnSF9yXQvoDBugetUekyrL7",
  "key28": "2WjyovfsQKaUurEJ2RtR6FJ5VfUm5Pz54YQh55CQxxgqdVruHk5EqsijRp71ArREcWDf2fsuMytS7mpQrRmMpr56",
  "key29": "5dT3EvVV7Lterhx7sCQ8qcjiDu4Qbiz7AZhc1zi4zZkNo8qHZCwdUbKGiQkcGWVVxiaf8pUnkyR1q4vQ7uj1eU8j",
  "key30": "GetDjRShmGwJAE4sBtQzaJp76urRENr99X3d11jHMMNoX8a28dsnmCxjGKZz6Vx3k2sykEegn6KBe9cbwXft3oy",
  "key31": "3evGhF5MupCzgCeg5gpwWQTiHuHsffTFAs6WNGnLexEPViG9f12WGkzPPJh5Grgg3weQk4ty3NLFFLec44b77MVJ",
  "key32": "2fxPSLwVfPCKPcbjAmP3xxLZkySSdmSZ2uJVK5zHrBYJn6q7u5LxHb3DJaRViud3JrxqAppsPCjFtxBwr8zo4wKe",
  "key33": "4dh1HRTR4ubcA9dQtp9Ui7wn9NScNcMAyB6hMorfoWmaprY5vAazPu623WUkLHufDNfBgav5XZcEx18CXC4qeyQf",
  "key34": "5SyW4kELA6jRZXffENeQGyf3LsQSGxkj71odRqLkjhirfMy33kSALeQpnjUbLpVERp6WEtm4v4aVmVx2q9oPeMZD",
  "key35": "5TGe3z5Yac3FjCgX98oLSXCaJBoUgJazfxe9Arsxd6uT1NDx56gD5snPqexWk3DkBFJMjnQRu8a3jprCswXnPaNA",
  "key36": "B8GZMCa6u9DJxiH4hnnEgpyyVUZff9tD4oQp27Xun4Bi3ups1WfRnU54KLN3iW6f8D8QGXQawMvjPWkFnMEDRGj",
  "key37": "4hhuEQToAaBoVkxuA4RkY88LobP5tEXQTfSTCYtNt9kpMw66kijsWx1j2i8hZomMNqELzRH36M9C3tAiBuSnWfzb",
  "key38": "5cVh4MqR3gkSeRGRFQdgZ826iYXbWY1m3vAYetkcAVzXG7xQB2jGfBWWyCWF3vnii59YyAbpBbbhQzMpCbCiojRS",
  "key39": "5DAPdCM2EG6xLZ4Cn1s66jcnuPGUo27Q9UsjtxbLvmBmU37TRmzhTeLMG2u3eFUf8nzrTCEthYFajHmt9skAJZDt",
  "key40": "5HAkYDyboaEZDxZqqreAkUbRCWDEfSPKK8PYWseBmzES4igYAAWw9KoZKLiBjP3jetCHMdNktV6Jk2qrdBYU96qp",
  "key41": "4PCoveM1Wr21M86odMxdjjs1tefa3YanXq4uP6DBhk5ZdwXUYMJX1YtiWrhyQBwLEBygTSpjYjYvmZR92STBzqak",
  "key42": "owKemmJHmUU63KpTsqUg93W2vZWhrN1y8RkH6W2rq6p8wsEs4VnNiBw8b3gjCrsVEaaXYDEWd653WchQGWYibK7",
  "key43": "o17MVrVCyTGfFThYePYGjJ2mUu82xbUqmmLcY6KhuY2TzVKaoxfw7FvDCfSmypEc8fYMpPsvEnqYk3SLUSK5mrF",
  "key44": "2wN2sJBD1yeC5wSEyHkWJ5SVvGY3W1C3fAs7rQVTji7bFTdyc9JURqZaAxm8Fyqw8RRbAS9MhrQzS3oewiUX7xAc",
  "key45": "5GjP7VYTBDN86W7PRYmcyUR7bdMJckAUH38MJZfkpTHyP6qSBvXxPsbF6DcvMSbyPfXLTYBGr3tzF3iXkQqUBhFw",
  "key46": "5d6eVdeYEAueUbzZW2H5q4u6RrzUXzc4YFLVUFSYj5SyPCN1BZsMvQgGS3XpoHZSQtXoa38SRCAP6ap4ooKh1cCn",
  "key47": "5AQhbMe49AV3pAQp6xFqiFADjWU77MnzZcQirqXoVU5p1aEj3W52YN3UZNx7a45gVgGfRYUGEh5i5GLBho3rBJAM",
  "key48": "3AVt6BZRHvyCzxc2L7GnmN2TmRDvnWxSDGDW7hEJBN7TGJRuDSGs97ZfKXJ29h3QxRpRjUcWHMQZDQWNQfUDYbGm"
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
