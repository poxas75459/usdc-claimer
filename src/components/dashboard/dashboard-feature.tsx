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
    "5bgRJn2SmknP6797TNzRwcUJX2o3yQ9ANazL2mVcQuHj3aRxpdYMZRVhzN4HuMZnT8tV84iS3DcLg8mzCHK481hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUiS79c2ucXk9SuSxPAVnB6iNsDEEFPiUptYho7D3ebxU68isNmVHymxP6LPgMWWrfNXn3UrRWV37vsxMJKZZSb",
  "key1": "3za8y5TmAjt2HUZswzCwZyiYMiwdMYkAeA6xRWaxLrPF6idH8nKTXs6iRP7HFViSEKpMcgaVMCyfQuJnD8omVjz6",
  "key2": "4QsXWSRjLYeBfhCDQqdUTEJNpEM75zuh2JJLYgjtCWSQwkam5nP8tyG4rNzcM3evW49rptnjp9ZpLZ8TJWatwec8",
  "key3": "2XzY2xpD32A2GSb2yA1vTwTxaJ5BMgN53xz1cLNGDw6ciSeD53Qv9LEJy2S1muHRLMoPak1CbspZ67qzpTfVSwKx",
  "key4": "fWj2N5W3ytuJmtEU7pjjbf5TQk4t7GLUaMWnhsAgMobuhBoN9n7jYwNXW9JFYrB6iApRmVDFV1KedjmgTGjfEiQ",
  "key5": "2LK7igsPagi16eR8kPESaQMFG8uHcSRSaBzuUGJFqAXkkbUXJgX1c8KPHcNYDmA6zYeY8xS86FMnmnwdFmF2aegw",
  "key6": "RYNwiiR9ddRMTSwBNoEzb5jrgK5gW6NaA2ap8WFFKoozdycUJXi8XSMGQz8cwYxCEBwuFhsFxF1hYPtZYgEyYkG",
  "key7": "26Bgon6pNTqfK7TuJcWazdDurDaDV1ArFMgyztmaHzG4gheV26Ybk4b5GLZBaM4bUEbhzpfpHxewcN7CAnkY7rhS",
  "key8": "398yycXK4MRXED9bzizqjFsRVnjNKPLLv7bzzCqeD4oya1gBT1mQz8Dy87WQHwmGyRe3Z8kcUNoQRP3Lr7Mwq4cp",
  "key9": "3FDvZMaZbMiZ87Hgv4xu9oNfTetqEqotE58awn1yM5WQjvjQYbHtrky3eRn13S5LW7DjSsxuBZiSrXQ73dMkCJox",
  "key10": "4izqcJECTpxTUk98e1gju61A2A5SV8FwKp6zsYZX1LFfQv4LZc8QEYpB3XDyLThhMLcTjh6aLhWiUxfDsncnSuEp",
  "key11": "5QXFQUw9GXouDv1gj2mdkbTjU6GKMKPk3vZcWLykFribgMh1RwurCYMLDJWePfyc3TYkrSWFto2JaxRLdUL35RPq",
  "key12": "nH522Ki1GgUuKM7oCEqoTdiGt2u1bem6UtDbhwPMuCeP3UWAEAfJUVEn9bUiKoY5MjbMXoAmgYhUGNKM9QN4fEy",
  "key13": "2MveqcFoSFvNGUxtsUdeR2ovJSNFwMmEf33xMXNZ9PjcBvS25n3t5UeHDPsqvFodCFkEp4Q7BVdWXaT2XWHtE4Ay",
  "key14": "cS3FCtFob1afnGP15v9D4UJkDjoKx4Uz7xfgkZPRCKvrfzV58RwMwVRzUsY1LQFiMDpa1m5AirLt6xZvG9S2xC4",
  "key15": "2PgQbMET9VcDE3dGFSD7UbN612NSHR25ALRW21Kh5KWf6cxCucJZ4aqCh2C4bLkspioeqZeyoQSn2CvcHKmrtFtN",
  "key16": "pop1QhsRtQosvgyDYJATx9nJNLZwayBb17BSbWEnQKX7uoXmwfkzLaxbEUnKRMgBXWU9EoX6cCdBvrvvgaY6Z1T",
  "key17": "2LJp6G98fuokJDpPRw541rfU1QRJ3pQX3bdTakaNfLHDW3oHnt55z7R2qmraSJeERQnmP3w1ZZU7pwFhdQwPko3S",
  "key18": "2Eh9NFESRJRxmwTrp26D7FSdPRoDbs4LxraUeBgDZbkyvEGkUewYqZpaXNSKY4uKs3PX5nasLCi7CyZHe9E7tiCc",
  "key19": "2tfoPzS3A3AC6WxrTS8vV2q1xvnc4YXoYZHxQbSkCZTvRWdgSYu6pR38kCYWqGaMbsPQ53vKMKJf41TnbhwDv8Jn",
  "key20": "x2PEaqJYZ2sp8rkGkAAQ1JpKiMPNXNzSF7SNiGUV3zgeam2Whbmod2Tv5oEUV8ux7AL29mZhkt11jRDn1h5mNvU",
  "key21": "673SF3P2EuCrrBqVdWGU8ugyGLA5fozq16mWE8cCKsJMBe4UHSY1pgf6Cgfixh6qWY7YN7B2kSpMLSPD8BJ7jDqi",
  "key22": "3wCjwop2ffvRKmTQQxfrYQH9ZduvNK2YjcvQRjp1E7EuT1n5ALRJebrLfJ13gHw5Zu4AnknWgwoGpcor7m4ZNxo2",
  "key23": "2ueSXFAb7MfipucDiwZCPcTcqEAswZ9EfHbkqjG7B6xGV93LyvEkBjAoJbuZj1jnKeCvqeV5CKJjXMUp8x7qjoYj",
  "key24": "2Aepv5MSkhg1g2sGVGbcVUnyLGS3ujC7GC6kWDPPobyUZErqxwmQ4MdMP2WrNB54YzzNEvM6Q5vdxRHkEwuRRbmo",
  "key25": "ZK5ySiKRLLBBK6sthNLSrh3y6MQzs4xxnygZfBMe2hJpm9Ui8X8oiKDCssz5MTtKLuQgTUgfXij4CDNATvnjNCT",
  "key26": "52t12LM8q2eh9oSgNWesM8uXQq71mUgRUq8XWd8DVzGNCVi8Zc8cvETUGGZAqDfYvk9YwHiGMR5cfYEfz3HcnaCL",
  "key27": "2kfuKzpThCU6FN7LGxgbTPagUjy5SdiQS5yoMoM9gSLdG11XLGuRZMLahnoCUKQmChSCWezTiCUzfUEbTqaNkYEo",
  "key28": "2MBXzdyDoJH418UXRTuftdEoMwy9s8UwWvECAw2he9KYJ69KwMgMVhLk8rT9Rh2CGdgTqxrsGFrqG9HHAYLmnQrm",
  "key29": "3yyJ2E3zbyNUmmTqyLyzQC8cQGb9xkhhxstHEFZXMnqxHmzBaKpy8vXhjCVPigwLvo5v7uFzHvVEpzcB5ss1DMwP",
  "key30": "1Yn25KzqhQVrLvVkpBYMPLZghqdkaNwaZeRgcLnvNDfwcWKrQSjdn9QNGS3fg13XRFvoFKvr53jvcmR7jK9cxBM",
  "key31": "661h4xnU7jjDpfRfX2yi3eK3cMVQGv6WuFHn8fdMYqDbkrAyfYYZQz9zD2VfZKbm56NWdMA57KQdZqQ1JWomRh9d",
  "key32": "4GhRUT5i774MP27uNCRqyE7agRDHu9u6sSoXtiKdAZxqLuBnqpexjnkcGrUrRjLBbzp4YKfD8wgXx1oB4TBpNBnn",
  "key33": "2uSCMdUnuzBXYtpT46nVrMYNo5H7u3eWHLvMMbhXmyrMRAXH4p9sdXCqbGFFkjZv9YML1gqgrUYcJs3j1CcpPenR",
  "key34": "56WN3xxTbY8KTZm3QjEaok1mh9pTzkh9GoxBHAX9Vxi8KZyHzuqDREioc9c2xYSoFru7eoDXdw4eVMpwkKqfBT8A",
  "key35": "5t7ep5aGqXe8bp1WhaiX4u41G4s9q7DqozGWvkHkCnhEWXQ4Uhmp5WbkVqG3UJ7KYZEVH94ntsxKQ8Gnn8Yxiwov",
  "key36": "32Kse6aX8jeC4WakG14f2UWr5j9ZfTNw6HVUeEC4PP3jeS85TMHcx7oWrZAezcH93h953mNAgCN2ki6m5kT2JrSe",
  "key37": "4vpisuVjBHSjCGS3UFMdb1nFbzsZdzQXprnGwpkpqKqNwnzSGDDhD4BX943NMYaLmY5jsoYwq4kpUz7R8oWBTaeY",
  "key38": "2evMC1aeCBMmvCdQAd632D45NNPETNxjei1cHg8S6Se6PsF1G7P22tTV6WDF8WTTxTNPbvyPPUrfiFYHmTnqpoE7",
  "key39": "1ahzrng23sovQ7X5tMiCZhhF82CdynC2agEsTNT26ksFMW5tWDMP1jHtARUdAwKtqwpiQBmaMckcGTVXgPTrjf6",
  "key40": "3wTppzTm5E9nRinsKXCEAYxt71wX2xDiKSsHeW28tsgTrR5vEfhyhtY68PL7LMaaCrTCKt5ZRie3TcXFnp1SxPCG",
  "key41": "4QZbPkJcf9fsUmHVhifwDkwRwca8C7PXu4GGUZhNDxHTVruUyguqRpSFSMytgifEjPGw37F2gjYGQK3W8GoqCf2D",
  "key42": "5i3FB1X8DhutgMoXCAztswU55ZMe5tKwBBLDyLhYKgY9CDyKxCwgj21Mr8JcnSkdoi7WG5q46MLsjNgKyVBxrjHq",
  "key43": "4PPcrLDLqVoZxmRZbd1KJ95mFLzykDpVLApRYnKBiyeDFdyxK8hxpzn13X4jEqkGkYTFxjJKcMT6N5TrUcrtp2Mi",
  "key44": "DMumuVv862KQVGfAdLyb9nkW7BJkVvHDht4YQEYeiseyPCyoDYR5GMbVDgZ6PyUz5psnmnCJCHuraAYguTr7iAz",
  "key45": "57XijYkGdEKux31Qe6i9uWrnmjyTABDtmziwbfH7zFZUPDX41opocKubJz6V46YhJLDewPbwZgtUhnMo4rpSwBmD"
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
