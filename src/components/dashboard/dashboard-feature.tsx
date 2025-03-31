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
    "7FTPhmvUpyDWQwHq2XGYNiGpuizSkqGxGtaJ4yo6NDVcVMAyb1oJBy2VBWDt5qiUpD8Wn2C2zhNzzXWW41eLVv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEuTX7tWkH7bvWLxKuA2NEesq43khxfDFczBJdoX3CTgekTspeARA9fKTdTz7bc9z2NWhsUB9HKCRboV8ZjY6mr",
  "key1": "3qAeAhY45xiCn9RXbFFm6Hib8MitCRL4GwZuprx8mxcSrShLyfcJkLLpsBN4bYNyXZzeNVeD3GFTLPvyekAGqrNw",
  "key2": "61R9oDxcToEmzgJ9iAyrMNDGAdv3mP7j4Kg16zqPTc3hnwZk6xUJrZ4DT8cXLnTM4UTemChZSrkT9ZJJVAoM4wjQ",
  "key3": "4wZRDkRuDTsin4hFxdSnoU5RBeMAML9onbW4Q1Nheid7caRATvBNchqNfZywnkugMCusMS4QbZxZRSK6Gummg1Yk",
  "key4": "2FEW1QAUfnkfSoG6TncY8HQ4927LFmUMNmsFz8jeUCrGRr8XEP94DF4GyU8Fks1HkEUXrpM7hgR8TD13M73KqPbu",
  "key5": "3Sk8QddGRnSyjktPZgKjAUmKgpsJLEXhvN187cSw92E3SRDXEV1DgfbQNYEpi1Wk1x3njkZWR8vdF3AKE6T6DCm2",
  "key6": "4cj3xdKKcT2Dom4ZKceYqmLHFxRj1H2TAE9qTDuGmEDDJsmwhPKtmdS3TUM41vHYtUmbDT1x8kBq6jb9KDvBPsx3",
  "key7": "5BeG5cyTAGYx1uat8eHivRXbJjRtBmNtRhQGkzstLSN7JTsfu3rGx2f7NXt56dZ4mNs934vq1mwY6QXdpPbnthF9",
  "key8": "446bdGhzWH5C4vsPpvhkvN3g3zhFYJCGqpWVLfps33dS619MDocQL1G3g9Kf4cw3VehpknSDDKMHoCBrZ5mbmw2q",
  "key9": "5vutAWud1yvcQgmcTfk6454chkhhX9zcmaquZJCCDNsLJgLSJJjWvsWuU3aQMp3VWo68nncStd8BFRi4D14D83Ey",
  "key10": "5pGRuwzijm9s1bFQd8VHYGkj9awU3DeEEGfemJ3uGU7ybTJfFAsuP9nQbdH9Nr243kp69iLCXGuNrXgozWt37o4t",
  "key11": "4ZfpMyZ5TgFV1Li4cZAMjUkpJ1BWnTB33wRqi2gmkFeCy9n9bSgvHjVQQatxWyjPFHFJ23V8YTfLgmdKdrABdSrH",
  "key12": "2zUSF3LjgBA3qrgj1gE62zTSgee27PNYJXCWb73JqZyESb12fmRTkh5xH623ncLagMDzA7QQw5Ug1gVbDB3jigKn",
  "key13": "2kDBzNheAWGGiKJu7FLy58JY12znTLF742kMrgagk8sFeFjeS5vrbpr2vi4AHSRPNrdRpXFKxGcVnGkMBbuz23sB",
  "key14": "32L15dwv112DWS3pcCj8sjxFREQajKXeeAeY4a4dJXDyEso9kMSSSURP4ZUeQGQ3mLEWb8d4EfDcVwjbH3grE23G",
  "key15": "2LkhZJd8ZnmwbsT6mW9L37Q396JaqkUgeFxWSuXcL2TK5KkqeynPoXePQeEqjTcBZWENCbQhbefxKNcwnVFqaybQ",
  "key16": "3CSbnmtNxZSP7Xy9X6LAhqiefLGcvUVwgNDhYqCQVEFnJszrcmye6sjcJ8BPcqXEfYGr3QG2MjwE25vbpaftWc1S",
  "key17": "2b1KdxS1LeEKEyBeYNoKmomCrNq1c2jq8UhBFpmZB2LLmzCLkcGfkkXzH1EH1QgYk48fA3kUZJUxdypVvkMeDAVq",
  "key18": "3YkDj3VRQuyZ5z3XzkWKcigv1KoiEhLVVP32u2hHkugmc1FSNVT9GCcvUVeSGeJpeqfvTdUC5kfHrjnpD8rEuL6k",
  "key19": "3YUrHg9sXLoYCrEajMXNfvfwATZ2CgVUWNA6c1uMuDw6g8ucjii53RZ17Kt7Y6F2tHWB2Y4326ExpwQNQsrjzf1N",
  "key20": "2Z66PBMxNw9c7DXe1W7Mqpfb1UhMPiKFjsohkbS5c7VYaSHuc6AgcdKkHnzmbghdN4o9uErRNAfeACRDAFNjmTr7",
  "key21": "4cgijTUbyLXAZHwBJMtRYv3ocLJHNyxPeqQYyGMNxNQQtQypuS9aCLMqVaRRKxfyg9uNwdHvhai8gyRLFjxkBTQq",
  "key22": "GRnBDzuoTNt2zQmycNrbjZb1XxizsNruAWR1HKYdk4XQ2UcvJZ6GXWufyfbQdgwkMQruSC9ZQb9u4AAYhrRWXv7",
  "key23": "2wr96jyyFGNmbVsCDbhN1TZKsh7Jvptgsz1ybzfJtjqJQhZEMYK4WQWVDf9m4NfoAN8KM7NsEguhKf9Wxd8rmZc8",
  "key24": "4Vgd1FmegumBDbWqrARn56PUc6bFP9KH5xNXFeaz3fRCwnoobawEsU3uvdHgsGGYTUuH7oJLd3axEZd9dZw2YLYw",
  "key25": "5hqygYjFGAi34UUPsYn2WQMh49rG31wTnMsF1QENa9b3ZuNJ7uD22VHTM9uDUeAA1b6FN9383w9UqznDqBw8UAGq",
  "key26": "4BoJ8pVfgVeXc2Kh54dSBKTE3rqqc35TFYgV1LXcdvGeMYWu3DpE61tkyrtLjMND9MukHkr2jGAhE7XeuVg5cE6X",
  "key27": "MtkdbchGZafQnKN6kLj8LTjQLUv1eTJFNCnDJCki6JdtScLP8hK5VvcShq9Meuob8tSxtSnkqnayeDhvsT6CGTV",
  "key28": "3QdudzEyPP4SRZZmJgMYzHQ4NpAUcmbRfNQfRWWduszDystMf7SXQDQv4frMADbKdoG7BoCiAkaaLnsKyhZ1bSFa",
  "key29": "3zpVmofbiKxiKmGhZ3MVNd5qH4Bsv2GoL3p1EedPpvPMkcAsv61UVCupKmfJbC6g8nY2vkofew621uPGGTDJJadm",
  "key30": "2HWtnPDkZg5hbFUsFcRXqD4ovdjydXTtkCovFM3yNpxQ5b3CAiEnu6zcJBJmtJtiJ2zVwJiBmxnBo4Ne98mHhqz8",
  "key31": "hgdAyfmxyLSGLEMdsS3RtBWf7aDSuCGJNLefuq259wSARq1JaDyPVuG5dXH6RWsy9RswD5wcF5Nn42zbYA4J4MK",
  "key32": "5Lvr4R5nxEzYR7SuAbDVLaXx9XamrssG5Epsb96YVw4MCLrR8noEnmXo1vATtnGdbG5kLXs5oqF61ybWgXk8AKQJ",
  "key33": "2J3C1jtWLVJHxBxs89eMrAhJVuZLXS7SjFsBsrcSZQ5tWKfixi5i68K6Qzy8WJhEYQd7k7w1JLNPJSUPbgmmCARh",
  "key34": "4mvkBRvYcBsYBCd6EKCmzwUo9ZMX9Sqbgzg2K5NeC3d25tqZnoYdjzMozmqCm4TVgc5ut3KHGb8Mov6bKYsyWh2i",
  "key35": "dpukinDHrPwtRf94pm2tZ7pZR7XEWQi3vWRo12dJxgDeTvZWvRDXzJbB7jNedPJYgDsiMg2A1jJ1CmowFmmuaQK",
  "key36": "4xNiyk2LpLYWX6CAV48ABeoa753VRFyty3URLunACNFX1aWKpFbCGLYuuMwv6a8qFSSG5rid9zcgSZ6vVomiDw6h",
  "key37": "4CTd2njyFFTgFiXCaLoHmDHKYvQ7V9yTUnmiQVt5rQa6ue8F4WWXHtbsQiieGZB6WPAybzACqUMeePoMpFEsCbxM",
  "key38": "4wuLCtjAHxAJQZa9ys7z3uTjZzF1jGMvtSZZ4giw6P7nRBaqU4HfJTPRE9AMDBQzn6cKoP99xBVTNFUkE8jrPBg5",
  "key39": "21uxrLNi27DwzHWTjupYC2MQcWENQJyTVrGXQMDfFKeGrE8RXPHi8vcGVqzFwzXhquChNfwp85JggAFqUJvhd1sP",
  "key40": "2Y7X86g9KbLtkfj6EcUfxZ6eQbxMoUoTXGFJxDAwykfhYPSpuSX8UgaMcokcoeZsSVNRqyGUw6bAZsfvoVorkqCo",
  "key41": "5qGgufpgYY2QoABe7BgnbPtiDG51dCLn1zd9TP6SukZYv1oFSaScKiYWg4xkjqVuEw6ipTqorVqVFNBBkBEUTbgm",
  "key42": "4KhnGsppqxMTHYuwvpLvWaoWVkqHP9gViYUHWi2uHrKEEqMDgYp5uzLURLTbyFyLvZBg1AY6iHkTEa7GWrSW6w5b",
  "key43": "4S3rCrAAC6CMenorYLmHYdx73BdFWJ293D7yErjDk7c12VF9bLetrtPSv4KtWjQnDnEN6eLe8xr9iycdBDkUWgv1",
  "key44": "3tCyCDVrgnaQhdfhEAeUuujHdAQ8edDK8RVXa4bNUPydj3iUKW5cyEHMDes7Vbi1czPZqndUr8Zk2526KkFkHhKc",
  "key45": "3gBohj2dPW1BWH4ykXzpAZm4RRnHU584eZtfwchHfArd51mGUQwagDEBpszoQKbQv2cqJLABchVcrHsM6Vc5AoVA",
  "key46": "32b19catsVbBJht1pkAZhy2V9QcHnTPrL35cPoCWZgAZFzSQ5HCgn9NFNJfHgyUsc9ha2K12MSVQcFgSgFfYcceH",
  "key47": "63inV3bc7RMdSpNiZwctqkRQZYTefUfvT2EtTFoc1sp5s4UmkJEFLguwzs5jysKvfXLtxzGmyWUV6uyuLjN3UEYs",
  "key48": "jAgnivXniVzwnbrm7Mn2eLrDr3abnkSATGy5euqLgaYECs3oebmHAvmSQSR3RYo2FKr7FSDH2YDi5gdDScqByxp",
  "key49": "4oUJ23mKxYZUasBatcGBTNxYRHDPTCCXUkMDUBqfqw5g68gQ2XNFJHBA9bssDQ6f5C7RkcPd3rsgz7237kVA2b6R"
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
