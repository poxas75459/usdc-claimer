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
    "3qRviAUNgSEzgSCVTiArsK6KAp3Bh5nXHHnJ35rLQvnm4MqHCGUfBbDbJhWzXDoZpJ8p1YQy2cavRghBgP94mJLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QDhtf5nMLsoAmkmJ9ZDAxL5ewv6aPvvRYT7Zt1g9s4WUQ83BR82HUEZGXAbHxVmeNpJ7dRW9CyV6VfeQiySEYQ9",
  "key1": "5pdYtezouQc2aVLH7kfJgmQDLxvVDPit8RTrjpAjhRVT5XBbwtCcQje5Gigx8RGsWwVaPhrdEyYZQGqLrcthYi2Q",
  "key2": "3VzGyMLvdU7HcpVTGwBx9h9QCU3Rxn7wLhThykL6YXtMXdF2BeZa3DRcxaAp3kxipasZpSpv5DQckyohK3xEgbCZ",
  "key3": "M7aB8m4KoNHq71PrnMoEsNSijYqVkoySXpBETXQkDVkeqZSWyp2oSeve4LsqZPzk2Rvzhb87CYysYNEkuFEQjHB",
  "key4": "422AT3PqV6tBzemPd7VXhxobiaykuojfhHQe4RbvauZnFPDVriswWAzr2XsJiUoBTYo3ucivYSpwDDukkvXRFaPe",
  "key5": "2QBNaKDxkWkz6GrQJmyoU9FALcbzgZTSy5UcB9hVXAkENtq1CQC5PfqeZb2mE9FE8C6AZbq7eUbTzwd8rqZz1YKP",
  "key6": "DfK6rj4f3mrtzKBSj8MeFA7M9nWTRxqxVY9VSfmVATfNoLeEHwZ23fXoqJ7aCAhL6y99cmbNRSUuZb8gEfCW8PR",
  "key7": "6yvoGBdn3D3AjyCTMT2RHh8CBpDrAM2HPJfm4wk1JwFqYa8rZUzPeLnoUtqX8sbGRrrLSRu4bbxUpcVt8DXZG8s",
  "key8": "j9i9ZQDwrvAdXbnv2zMLjV4WdkbW4Z681eYsxTJFYcwHAqNnB22QaxruQW6AmXx9wyynbbU7nBrhBtNtBwFeCgy",
  "key9": "5oUbvwTU9LePJjZZwUW3qdfuymVKy7KPmz19czwikf87nkKxwyXRAirkZp7ooxgu8j4HzJYXtnJ5y4f2u44kPEfu",
  "key10": "2hibxQZa8YaJkh2TYeB1sWVxCHUf8oxVnRPRsRjNs8PJ4UD9887fkkxUqL6TXBNtSjVb3b9YqUZaSaRQnmza6viF",
  "key11": "463YQ7dv1hFFS25d4ACCyTmoZWjLY3Txx9efcpVaJsnKBitv4BPuXA8XpadUmVhkJkDqeqxYNVyvApm6kWXTanjC",
  "key12": "3DZ9ib43EnyeRemc6bEn8eBBGkHVEcYo8B7tQMusU8YVYWtTocB1KTEQQXWVYZrGjFd3QbbpGGUf7aajtj62Afdd",
  "key13": "4R41HFB8oNKzTioFh9RqE5HwJmbWVevmPjCRo2xWXGdnHG9fwznpwx9KiD9us8iNSE9iqtUyCyZ6ZmLnixZUDLEU",
  "key14": "3AvELbnNecHe5UJLVFMAGXE87x7jy2vdvSGThrbkcyTrZU366Dt3WMEYRLWbew4Ctsjh88fwZhsvRhqYzsq2cBfY",
  "key15": "3wxaTS2smiKLnc9WVpKVL4cmWvPSvgDuwgCE2ktPhEHGGmx31Gu4tLHwep1EBjoVmvxiGQjLeC6DhRizGVYuPV2L",
  "key16": "5DdgeDDu3yYCQmGCTgrXXgJRAyjdnt75jgvGkoNs6yKN8YSWthCAcrdiAKLsEbKRf63jH844JHSHCagE6hGp7vgA",
  "key17": "5AvoxMhRf7mMzaLk5AMu6rs2ntzztXXtbezr6BSeN7yUTGLnJmTKNrhRvSuFFQfzvz5FAukCEF6fSaJGoP7fyx9s",
  "key18": "3zNXmL36bWr56bMAhyCd8dkQ7CKjA2nAAyTeYqVYeCThJKckPbsbsTDVtQC8Gx6VNC8tdYECyfvPc48xVB4duhks",
  "key19": "UwecnRoz2D1VXNawfjKtBwsGBy84P9N2TNvuSEa3sLcvMUKx6gXsM1HBM4wVhWy15KwXDN9hYHfm39zxmFmiprd",
  "key20": "26FPCavpfeDsWGJ3ABuZnKzn73oRFVmGLR4xExBvM4qDdzZZ43UYeYKcamsNy8wjmWeRUDwD4nYGD4KXSDqTLedz",
  "key21": "3N6XtL7Y9Yaq2stXRf5ykA5fEgdgM3tZ4tZyKFaaBtxTsbG1GkYCwasfSPdGseBdDHZXp5RTn3RYt9xS2qjJCgKe",
  "key22": "3atsWP1k3P1ttyBJ1JE6199kTZ5Cu2BbmKKWjUq5KKsgAJvSBkcTSFuMBk49TJYP3sUDDHZ2yPsePMeVH1rtPMSh",
  "key23": "22se8N2ZTUz1aouzmRwoE8xEwTsjx4yr4UR4U91ygJCJ9L1tpFDbfpBSvVcZBYX5vJSo849UeS59v7tKDa1pzifP",
  "key24": "nEWVv8Fc6nnXtae8XWxxo3DKeNMswAU5TrguZ4jjrJTJR7QH8ubgNwPrnVjKrEiCQYs4Uwie5ZPYW9PFovoM5VL",
  "key25": "2TC9mBNYgq9S5rkzjiPtsBczqgBfSJpx5eYnSfFnFPyQZW7GSa1ZhUFU1kHyVQtzuzGM35VH5WkCyzuFaRazwzpW",
  "key26": "FPrPHJNwZkKsAQuy7BwZYuf6geHU2cVpV366wwaQm9dWt26PnFwPahUGCQV84SriyTgf8fkhEkX8REUxVDku656",
  "key27": "4a4tHj7U3CELq8jxP5EqZeGS7LNMBbJPvtu9SyL1onH9m4ZJ5ekUaWPwLdfbFWZ82PACo1ytAR5xuwMz4NteZHtC",
  "key28": "2aQQNrZbh3Ts8EVqyVzLveq9j5XtTggxQFqRJkdaGc2TC8CaS7PXhbEtGcM7f9Rb5UFW1fQgjtTLWYLV8peyyHDX",
  "key29": "3SRdrw4jqkyQvgmyN5DVHt5yFA5TbEmxqxQxpjeKWZ2faKTps3aaayaJcyui8WKjv9Q6zQcP7fLPaA3h46os9sda",
  "key30": "kakmeH92fBXDzdAp1xha26kNVfkTJaU3q5e5J8KZeVWARcG2rR9bUNydu2EjG8cn11XpNkxS89sTKo3Cg3bo2UR",
  "key31": "3aagvumPBTufsVDFoCzZ2qAhBngJG9gF8eYvzQCj8ZLq5c9QCb62UwgtppPNEKCPR4ZdUV7KYsfGQQWT9LmR6Ycn",
  "key32": "46STVZUDUeVkDCNF5TrtkfFPSx7mduZmkZ5Bsh3eJNMC3fnSbYgn6NcFuW9toq6Z1qnnA5dtpm3V4QqfQg9BhPXm",
  "key33": "34TcvLwfmUvNUD3KghXdEvAFkbp4iLq137oHyFq78WBBJSU8WXtXcg9ZJDLY6UYFJWyod6XNJd5RcxQxT6rgHQKW",
  "key34": "4r4jWkXAr2Rpjx1YjNnPg79krsoWKtGpHLJcNY9bWJF5Sgqvafbv1rQhnBvjuzfvjPz8RdpyS3ztmf9WJixejR53",
  "key35": "2ynfQAfDdQRr28feE1sRKaWxgdpQMv3vyGCCPAs4UGjJcMPwn9uumPniHkHRZhhr4yZn6KC1nYsXS45KZuY215VC",
  "key36": "zRBZCUUJ4XdSQ2LDAbkBDYwYQCAVwo7KfCnq1zVUnmNuXyRQJbW5kQ9x7FguDWZ4AkWEiKG768Uc8xrEDYy7uz5",
  "key37": "2jHCuithdi1uGP6HeCQ2KoQGe3r5eqBpWJvvMbtAGvEiCAETdH1hSPUsLheGuLr15c5g4uQGPFsDHeWQ76NFvcgR",
  "key38": "5xUYhbR26Tu44iV9acBvTprhDJDWTMVWqDYeZMFAgtihtsW6ceNpnfZ85sMiWUfjdksVLuPn8cxtcHR2cMkJoHAs",
  "key39": "5CPbws1BoJiuzeRZPM3n8qcMPpoTAA153hrDXictgbDi24D6YNjoGVfwg6AKVsKBNFRhnqKbjboaLFaXTztjRF6k",
  "key40": "3qp7gZrMjAMHHgvWYyJiaRsrSN1CKMRFz1f3WvTe3gEfULs2698w9KcZbjneU35n2E8M3djxeKNLjypoyhLtUXjm",
  "key41": "5XBRxxQtWmoyc31Huje7fvRThrMC3n5ZcPEGzK4YXy2MwRZ1ae49uRNhu4PK5VvWjGX4fxDdpqNWGhsq23d4mbsU",
  "key42": "31Vc2BsgjB1BdJw9RWStbZ5U76ekPSiDaJMccnpsVBXxN3ndurtUepvBRUNfkR41EmYBrQNGJbpPDN1FzTcyCLLq"
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
