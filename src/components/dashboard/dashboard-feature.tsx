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
    "325UFYxgjXFE8Ap2qUC9n1aBeSjras5nKN6U7hApFBEjne4tZXs2WC7cHkaotwQR3ShiHb15D2EfxB6v4T9JGLzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33r2BPAvf85MMp4Kj8UYtuzyPpbNu8QRNq1gWbtVkVJZcKPa9RoYGTJ3GBAptnYdR48NnzswKJqzLVYJsFfwmgo6",
  "key1": "t1jBJQh2Hmvbk9xYS9GDjPouUiYiAMmR7qi3HtfhLfD1dSFGd26ko8fT4sYaKTtdvy5UW88xKqjargWUGKggzQ9",
  "key2": "4NKe29RSFdhe8cfPWRR9abmpXWw6hkyK6cwtnwnv8aTU47eXeQKkYCieDSS2WirNteStw1CBZHktpvgGRcTFzhcV",
  "key3": "NifrbgSpsMNBwrVRTdh3WCEK9nkdc9pvdeoJpzBDZx64919UTrs3UGJjjs1SfZfwWnTB5S1CjMDpDwkyhb1DcQi",
  "key4": "ondD3BifrtM1ikdwLn6RuwEs5wpNTxPx3v1BU9cBekFgsA1xis3SscQ7gEwMBURVff7CFjp8poVu16oPmbyZMzU",
  "key5": "55L6zVuoACMGY4VtLK4PzVuNF4JzfV11GLUR3mKBxm2U1nQjy7fcVSRC7q8FWfBQ2pU9SWxZYFQ3GbLYXBdv82Y1",
  "key6": "4fbYW7WPq8uKVj3ikEiALeEiQRQj1i7FSrMzHHkL8z58RW9UpoknmM1X7DAL1DFxEZPctPMDt3FMJKADxAvzagEX",
  "key7": "TYBFmNkKwxhRcKpD1VusBTc3B3SHCwZp7CDef1GeZoySj8tr1Gu6ic6PxXAoXrvL7LxKBavyrXAdUsgRzB4h1db",
  "key8": "3MmXcN1HV5tnG3LT8XZWW2iHepvsSPUE9hej7mkPMeEFh4idQCjiMmZDDcPcFyAwA9qBwJJ2NRrUbQeareKu7EZq",
  "key9": "5N5apDbK5pMAtp3DbHrXSSxAcbBwe3ZnDq6VaWmyDk4vrouGfZMmdxKWgdd9yJwmdZJ2hhzoBtWY5DVxJCnWWkeq",
  "key10": "4gq1QbYz1191MNKE9W4GwCCb4FBAvbACh8YMYja9uDL9jGAfNTJGenjHCsbCXu4qnwXDp8b859BtphhHz84dC27U",
  "key11": "HodGhTvGVyQjd7ZfWmZT9oS1evZfb4sxHAP2QbbQhqEvFhRF8Xp5dYmNcuZHjwC2whkJs9uT633MLJs453mX1zF",
  "key12": "4sKeBidjkx7VDNDrtKxx5sgKELc8PYsWYSi4TYufV83poDoWQaTNVdEfnWGg8UFjbpUeBmz9vwzm6GiJJaNbXgkB",
  "key13": "2CxP3H89ufdFK8Wxgftt78SS2iNwK1HCgHn5dRV8KgPZpbfF1npDA8TZyrYkjSAm973nh7XisF5qfRwARo6EuDJ5",
  "key14": "5SYFsumXzQQXjrpZwsmEmAMteUSMG3cZMJQUvZe9Htzx7DEr281DouRLocDH5DvnvAK8jezPogYPxUhPCDuPsW6v",
  "key15": "3sbPiCHHXd4VCjy9QwymzBakU91d7GDf6bNYPbybcSSEQK5J2LdTvWqXaqQDycMpL2HzZHp1jtUgiGctRBWiB5N3",
  "key16": "Ca2CU5RX15qYpa3L8jGmp7JXDGfNdWwfUewg2ZekA51PDxANmmUK93GH1ev1Vb3LGMurUoivpjPcjrqbViSdeQ3",
  "key17": "625742WMSRuTSX3JHHma3DGWzkeZpFwSkZ5vZ9uFehkffyjUHZ5813YDWJZUVE8bZT68QsdLrnGXRYQY6WaqpoDC",
  "key18": "3M4nsEWaB7wo8N36N4x2zkNYWzRr7HCvUcmcrpwBwB9aVUvL3oBMFXBsbtbrqomfdBQjx2snuJ3Z28f5iEXvjbQN",
  "key19": "67MX8hkVc2PLfxGczpV61Refv7npcZ3hG3LGY8iQ8uzQirEAPaQ1BVFC9VH5a8wTkYbU3o5TNQS62JyyUTUEGcQv",
  "key20": "3shCbvGVTVCLmy19PaDWuh3cojr7hCv2L54U1cxGF38LNNyuTJ7a7j9Jp8JiqwSEtdYT7Zfu2Gbr7HpfHT6SW1iD",
  "key21": "5vYdcKhuc8yyEHJpihRq7pJ23jFUHyK82e5uvJQsMPemFdtmS3zRJzVoWnRVy4PSb1Sytzi9z2yqY2mGQ4EsLHNv",
  "key22": "5GKdWdNo9EQosVSosv55mii1rsXS7qBNXgjNA5w8ocWaA7kfy9tx7teNUSd8mqtKh5qd1bgN2pE9MiSRyCjnKuzh",
  "key23": "5wrBT9zun1ndBDPsBd93qdqDgJvFar6yKmpbaWv6cyLskesX9woXuDneH1yYa3v1tuS7xdFq5xDtzKTmbBoh31Cj",
  "key24": "4X3RRohLDuNLfpdk44DPYkQB5qzyYxkbBhNsN4n1n3nPoJfSmiR7iwDR78eLkwme5hmBECF3poGFZU7fQsjwKgoW",
  "key25": "p99E5TRtJmRo5NaFefZ1Uzde35yLHsbFzxCGdxdxr4Z7nP75FuRK4f2h5H9DJAZsZFzgHgh5VTHoxwhprwDnkfm",
  "key26": "4xALYVDtszUtERV46qSWUzK5sMgqxYkUBmMc328H1KLgszx1MdkrZDBqq4A4HRBUZJUjreW4RW5kbFeeYWC9dgCE",
  "key27": "3f6Nn143H9sRz1yZoH1m9Mk1E3bxw24ocUwFYG7LoC3yQQ2khW4SD3E7XDMMqwc4wzhRB7u1X9jAZkZzJgnM6mAE",
  "key28": "3k3cewPvvhDQGfBQ8JKJMcZn41b3eSH54ZpGSkoBJhoA5NRRPvQZBvLxCxRdSgNTdsvoXbb3jxCFys81cNGsUgKZ",
  "key29": "3mXmqDkNHhfaQv1Kn9VGRL5SDsgejoTvVMZxoEQxRqdxeWYUqicPwVbf6AkzZNE6MohC1QAZoNBX54vB9AwSMXHr",
  "key30": "5JWLzHa5nzkprkrL6RKddY2mi5h4SqJ32SscUaERugDWmESNZYL3hFBmzCqt6cfD9cHJHyqugAX78bxyZM3EY5Rs",
  "key31": "3ubw9LqowsscKTHuFBcay1CFJSTQQCZ7VgaDSo87vei8TgBzyUP7jy9ar2bG3n96m6RDcH2hucDRknoEBsufHmSL",
  "key32": "5HvuMXn6wdo6WXqK6ZgXZqSQ4h7i1Qyf7GrFytLdWuRusz9D9rZuzDUZNjbsReyN1ocZwnAncmKVf9nVYYX3Q6zT",
  "key33": "CiD43HPYAA2CgWWSxYuW4bAUmGphwGD6W3rFFy5wh6s8psNCCVtaFkPRGvZLjmgBw9UZvRRJ1djfg5wogZFazKY",
  "key34": "32a68pSBevC5QVL1g3fuV1QNPb26EU5tueVBY18gnYgyocTLsxykt2QMVC7h7fUXUf7SMFM1AA1i5qFx8TvQWY32",
  "key35": "2CwV1jJEqaZ9M3a1EXcQZNXH75HMBJTWUyUwmKPbbJtU24daGR6HgdF9uhbJpDiiNK5C5SpCz1hAAwBjwVArutmi",
  "key36": "LwHkiphXy7Md1arGsz54LYwcqkzoAUt7Gmccdd7gkyBuyuua7jk5kTuDBwnyMvNsBbCwtVN8fCNFXJNVATEH7uy",
  "key37": "5uEgupavqG4JQzuLv3ASTh6mwgqHj9mA98Fwp9NL3d3JQFWGdsFv42CpAAdVaEaWUnXxRcZnYJ9LCnkoBcY8BSee",
  "key38": "4LwmxfjuwTvzQrDc4MTELbu8oEEBAarjuZmWFvVRcpaiYBExuo3K75i5B8fRgJHcKy3PncvJ6J4raWoKtPgi5XXu",
  "key39": "2TuQVPX5k4NpCQgTBfn7CFKmo1b9uYU2mm3vhRYzTHLFgFjQwkztXGMzbxC4CBk5TRNP1FfXMTgm2BmjbKVmz7mp",
  "key40": "TtcvSvJ4EwgBDpYzAQ4niPYDBBEgA2TngEMZx7CM7au8yVZ9VbUof4UKCzXRQ3mdqpM9NmbmxkgaEnVRxfMNjBH",
  "key41": "3SNDb2N3hCWb2mGYRyqWU9WfsgcdqtWb4jRYKkeEBggW6SyWPBULH4Ak1FMMTkHpFsXTFfbj5ZDDFTHDbdxgwPsz",
  "key42": "2g8tC7oAHpyYkGcEvDLTs7SW3wru7SVHmgP6wbvJogPVjo94AudNHhXJvQxxRyLee87fbx2JAuWccgYQsUvUY1bB",
  "key43": "yH4jZ9rBRxMR1siTUEkosbTVj88T2eBvxPnkfiREtByD7WeDTghYkNUXEwTF7aAw6Nx1tAxPMLAWGgztniKPVdb",
  "key44": "4MEGu5fsLWUZaSdjPkg5Qq9wZmsRgdQwmQZGnqoH1hkP3LP28nwv7aEB62TCHYeUC2uCCsVdFyAAKaki2yrH8JJa",
  "key45": "2Zy8pRUJeQhgy7vPHwxSap7wXYR4af94uxaM5ZcyGi8fr5Qzi5xcikygnbfUghc8KVUJxaQUv24bJNibvQmSNqpP"
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
