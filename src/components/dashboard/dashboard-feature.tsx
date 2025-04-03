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
    "3Cg9WsPZRni56huw8Cfn9rTecfJZLojKEU3etaum5thx3uoP9qtwDiQYjaR84YHaxHPi7wd54eRHDhTM1WcSfRTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEvy7trFq8JL8tY1HV7xNeLJb8TcWRqWwqVGje8JD2TeCER7PkfBoWFgJWt9hJFBj3v8X1eXBpqrPWYpJ3m1X8W",
  "key1": "2jeEFRNrEronAL932TWeDHyrVFVKkUGrS7ive49qkbQEDfPnYqjxnFzATo9uHBik25NutKXE2gjFVPQoCCQ6CVM8",
  "key2": "2t2NGdXp4ZoocRaL1ijQhGnhM6w17hHq3h216FrE7UvkNzEA92XuaK4aWkyaB4nkLSqdMRR3bjaJRTV7yi9aV6iV",
  "key3": "4y32dpmg7E4776k57LT6DSBmKbjj4B6pgvfFKSCDpYYBZKLQP84v6gXoyncVZ3psew1Nubj61k3QgpJZP78reW8K",
  "key4": "2Y1VBp1HHAoH8E8dnJxXzrLRBwcC3EFWCVPCswZfBRRGNDT8nhdxZijoiSpRZq9Kg94wYCJWGVTqfSJ9fgRBwzZ3",
  "key5": "kJ3Ccigs863wSTW5brsrm6rduaNgZCFHikkXx4s7tSiLv4KkH4JnWmBEznxtvSJHupcJdLmuLuJeEuwK9qpi5UR",
  "key6": "5zidwzmLSnHx2RvHm46f4LyTQFVrwb48Eqn1rUNk5QoaCMGUu3skVJRykyYxf2YVum7q1F3pQyCA7XaUxmjG6TBV",
  "key7": "2Y68Hwypq45UygEEtrgRC997gVxovowSPwsQJKwbd7x5WxQRDyG1dB4PcwiQB382KHcGYDFZexivzck5Ko7YqHYh",
  "key8": "mni9G65v6J8Swmp3FFHsdZvJmTfd9LWZAP4CLwaotgwTfSLZLqdW9gW8b1h8jPEhaRZTsv3ViGVc8hQ5uwxeNcW",
  "key9": "npoqfiqx3py9jcow37UzYKGWtBArktcqo35T9XiSqFsxDpf42gG85VsmFM2xBusGoii1ZcPGqZxnhXJWmcibniZ",
  "key10": "BEtXMDkEnnRdJ5i6j6cvb3dTz8XMYTAyTF9WcbmEmsAqwmrbe2jwjgquknsPH5UeFipXDbgntfzDUnmrNgG8iUY",
  "key11": "3JFyVCKHC4oPv6NJsgrv9t5eTohEy2KUnqhWi6hg9b2nMHcjmh7WpEyiQbmGimUx162AHPD2CEqR1SsnY5htNbis",
  "key12": "64RZL5srgWpNa8WX64TXPL3npffGEGV8zoVg2BnP9ok6jHDtUqgiHLHskZ13xrE2YCJJALc3KTDXsY4TGD1ePZS5",
  "key13": "4WW2hHC2a34CTh4bEKK5FFea9eoyZXmeExxoZA7XrD1udAt3f6H4ynKQcwhh1YrfHQYZ7avxhGwk71BiBqNnPuV4",
  "key14": "3YBHS7NTNXbz6BfFc5icqpZDVNa8EddvvMZuX3wXFEK9xKVwkaBeuPqWKTYwaeJw5SCkSifD6s6hcGSUe6UoB5bk",
  "key15": "3QS82SLsVYYpLwLh8XkrBZzmFwMh9pjCd8AfNvZkBbpLG8pZmqSQq3Ct3qZ2SYx1CCAbFtLXGoVb6CPtdB72gHLV",
  "key16": "6KvFAYKx4ij9RVrvZeC5qyKJYpeiaAYu9o5tVTDnsntcCnRzsyDCKTaeL4vPf4RjL1bhmt4zcSBDXnGtRiZct1a",
  "key17": "2DgHT7f4AkBNyNdx6LQStBREvFRgbUh6SEic54HKZ4DptMBTZKtY6NyHQJfFQpBfvrDbeoWJE2zjE8c7dYdJYwA7",
  "key18": "pcbHYmud78Y6VKurRjSV1BJ3JBcAxq9mZQpAGQDgJ92oW5Pj3xDaGRT3BhbCVFwyqwZxcW2g8jzrYGJSYpaXyU4",
  "key19": "2ieeEs3DXXdF4qEETXHBDdLyJ6MK48xgCbGkh5ntqy8xK7GbmdhVEna3YqNuaucmoQECUrTYPWjxkkyzzRsBa4jR",
  "key20": "4pxyaDsyM7rMqVzEDmVJwtMBMhm9bWmmeD1Yx6wjzBXGjf8Powe16yxnCiza78hk3u2LrqPoSNWDDeHeTET1YT2k",
  "key21": "3WFULw6mF223co81Wr7bjNraUkyzZx2Ngdmp2su9r18m1SnijkrK9CywUHFN3fQ2tF2Juw4DCKgKw6rgKok2fdUx",
  "key22": "56gSVxgxVAzdbky87ZssD8yVrBuC4EqZi3eJC7MZg4CWrD6jXDX4Bq44MnNNiQapT3xgHaGsR1vkMKPQC2DgkApc",
  "key23": "2prDmNTgvWEHyDVeVAn3okowLsN7PDTvR9fdLhucdNWxym9iLrz1ZkuXy48hEeFUhg7Y3zk9WzjW97ZDSKQkEwaH",
  "key24": "3nUjEG2s6xemVmHziAM9oyQASgXu2zjcFEdTNVqsVxKuBVLmbufAxx8JCRE7i22CRjsVXfKBmZfeodZEtd233mx6",
  "key25": "38WN8n1p3aQUHr3sDQy5RQ5B2Ua2EtiZSpsLDBetowKXQiRxDXmnGf91C7iqdxTNQtmiNSsHbFSoewakgz1HVobU",
  "key26": "24CNhy4iPNwz7BM5HutESEvp5LBcqBSWGFFCVJ4VmV6LupM9sGonHXAdfYTquSBUWutx28nfPHvtZgjRKwJMqBhF",
  "key27": "2ribEa5Yt3cghX6nsR9JQP9gDEXBfocXBXTM9pBXz6CYAjZTXzeCudRxGJsAQmtvQipG6FDNVtgEJYY1LsXtfkEQ",
  "key28": "2ahJaeLbLHHmSG7WXrxXwuDSHaRWtwio677smGvknhpa5mdexmPPPJaPaTv58Ry4mP9MAjSYWXQ8PKGHvw2Qw68S",
  "key29": "4gxvHaVqZAhxNiAgK4NcpLGgbZcLSYZEz2TBXGimXKVhH1fgpmSkJoWhgfVBfpNFP3HZKdVdGm1XUxtu1aUPNz7X",
  "key30": "3ZVT2wGTFRBUtWFETT6uvhS5QbzirZSL59tz5M3td73bPpAmi6uH4rwKRpUbihdLfMdcVrKum83er3MaFBdxBrUu",
  "key31": "3nkztsrwewZeY3KGA8yX7wfgxN4XKdTgCvDA4XCeqLhLXkLrLdDaXKNzCrcuf5RKf3J6dwPBMtFf9JxLKiQQS5xt",
  "key32": "3L4w4HQhkJ8qezZ2P5hVJNcse8mYt9H3VLJmRnsHtu7trDCR2gtM8hr7MzwPmN24wiqszUECzGRHBZnAN24nDBA7",
  "key33": "4yZteNpM5YkjugSvXLBzrsB5Li3Nw7Z2MG8gvvLiVCGShKXokv1JGwyq3xnSML2Q5msVtTAAyWZGDDwmN2VgbDPW",
  "key34": "2EHJXSfELKfdttH8gfZ3XxsCLukdCw5pR6E66mfh28sBxuF9iSSrc9pGZb7ik2gaC1qHYVTjexsHVJHgE48xzDUg",
  "key35": "2383qKFUXtHjrLLJiLdy5zn1ZTu88d1dQvY7q5uLkaE2U5VxsCdX2k5VKbt6bCmovsuMjMB3o97boHGbaXgtHBQM",
  "key36": "2i9ZY1dmLgALP3jb24DUstbnEKRtm1e5b7gRSKKUMLyfKRrTQjGUwCtrz9bzdnUHks9QNo1eLu2z2DgzZaNHBDQX",
  "key37": "351J493NpzCW7VF9gT2PeXHpjBVNk25Vd8mCTSSqZyAHBMKUApAVriSf1uVRiSoDZcFYZjJnR9YZemCrRwGNwKyB",
  "key38": "5pbh67UAkeuupFfczWWPaQ7wR1mJF2bfnRsj7s9aprDRiH1HhJsqZ4TkxXsyCgDoD5kDBf3iuobWyf6NZM5jr15k"
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
