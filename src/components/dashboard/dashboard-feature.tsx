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
    "3xAp2s1aR7GoLozjLTDNfVGQsbs5wGeigcx2GuAQ2ofuaku7VNzJKtQWnV4xatceFGvp9Ep2QXUjFN9PNq6RXj6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjPUVcehr3jfE7vV5gWQssBRY8UVv9G4ki7K21hY6yVcrmrX4dtutZeB1pquPsQAZSuThBeP5p9XkjFZyzuT2LX",
  "key1": "ni1RGCnPTiL6syXES38kwqaFwjiixmtctn6UDESC4edfZUPev9y3aFV7AWsnSEq44KWFcW7HhxLpPMDyvmnAefP",
  "key2": "62gDugX3GWLBqmC3bFtYkkvkNF7KDasGo9Dkij8TAQVAGcyyZMsTjwwxjgQQgfC5MmZpZJPLqVN1WUGjKbE6EwZn",
  "key3": "5t2h3hiejz4tZXiSqaHTSxhhSxUZU6iuYrLi59zumHWnFc2FwBm8nygbbGD22r98MRURDNxEmzDwxEgV6Gi8n5BB",
  "key4": "3V2RHCfkTDKoXY4dGFCWJBUwCThSFhieG38bPAUDSxJRdvHQ1M5khZQ2hmGQXgwBvpqijnzaw5cq3tGaRF11QiLg",
  "key5": "sTFb1cHHxwkEHbUiHdbrWi8eR1NeYDkcz89sQ3KN3QJD5smhVHoW6ovgEzsm8tp3Hy6VTTYet7hVExbrQNGbX5Y",
  "key6": "3s1Mc4ageZY28EuCXp1i79dxb3hkM6QjuHbcMkUvLBwUTmutgdHCd2nEq5wGFg4KegwMYrF3eyKyMC98sSgGL6Tq",
  "key7": "4bo5u76SFsxH2MhPW59BBKozbYtZxj7y3LsBSJJnbHYFpvxLhqAZkBSVHFsVDiWAW61w2iyXLmB57bCNeFaJpCqW",
  "key8": "3grWURh4SNePdBHngpRaA1fgzwc4DsFSKgNB86zxohUeZZMcTaB22RCum9SiWsEKGdAoeXaQhf1vneKrqxA8QLjA",
  "key9": "5qPHEh1ZonttphH67oWZ4ZfWLrCyR12oiNnWU1AcS6hpqpN1x62VPeRaZMn5CUpbWpcf6TRu6vAchR5zmksd2pqK",
  "key10": "2JJENXW7CzvN2af5E2u9reDJNEN4eKbTCRmQpsn1sbPQBNyM4J5FYhoRqAX1gA8sYJwhvDDrku4wAtN2H1gH9Ejc",
  "key11": "259hwKERDXRmtikcrduGCn55r9Wcz74yPR5URFfRE913L5rnJsNcdTrRDKuiHQYHFsEyjM5MZqQ3udtnrwTuPmRE",
  "key12": "38Z1QmYVpLQU6QhTmdix88uueRGULt4bJGheNDL2Eyomza5brNbh9KC215UAMwhPgAecJgTFqTdgRLJZDLbirv1f",
  "key13": "UzVqyg2FbM2reBdPUvs6NiuQ18HhSHCLSnXkhiBmsJ8MzbiKTdzqHbHwFUWe6iAdLpYk2mBuGszBJRNFwgUBwGB",
  "key14": "3Yj8pdWiG2fEr4L2Csr3qiGTcZVMAaLPU5wVwxC3435hPw4Lsp921C2TCGQa9JYy3SQKLMFqMvScQEoa5YDrq91D",
  "key15": "BWVE7yWenwWUppa5EFjWiJKpiXNi748G1o2aXJL2zy1x8Reo1honzSpJqZiFh5KyRP9jLNT4jo3BuREXV3BwWTf",
  "key16": "2VuDo75VNNUKDrQ3qsNfz61Hkdimk9HJAZvcKtVzSdbyrXv8DdDRzQfgiZzZaWVCN4XYRnQFAmnpjC3KzwPeKHsj",
  "key17": "3S26X2UbbznJjkjCD1jsp6ZJkBDMzqc8LRXghTFeSGWwvyGgQjirnzAdaXuw7FbatCzjjNoTk7cse6npa7oTbAdp",
  "key18": "3GgkjhUaRhDZRAxPxZ4wXuJwrxTmPi83ow9iQwcH2y9Q7CnV3WTaE48seaj6bEaJvMamuCgSRZtYHm952q3x8hbW",
  "key19": "4a6w8YacgHER6t22WVeQuUnGiXEDH8VVLQrLfS22tqqb2ABLkoTeJk5gs3Ck55bTKvGtTviVRMJ5wKf4eKoBjPKk",
  "key20": "2p9wjazJGkJLYCz6CumpkroGW3Px41JdgCGeuYCa92hvC6C3vFphrkXiNZdQzimzTrPgKCHXgtwX2pZvYvhUNfmx",
  "key21": "Lniz8BsFH19khPX1MFdQKCMd95Jp2jhVCxUdoStBXZAEK3jsZE8auUkmtrfzhZ12QZoHe23Uyvh36maiUJNNHGz",
  "key22": "nvAYSfVL5JaA3hfJ8YBrV6NaTsGdaK6maLJeykVN57CNa3vqQZfZBVcyWymTgsmReaE2UN8C8PZFJPMbp22suMP",
  "key23": "3wMSPQ9eXkDN2Eunx2VJCNosYGChvStNEE8SvbEHk1ehNcEzzgRLveWHwSEyo32ihRY6Pz7Hf7mxd8423e9P11Sk",
  "key24": "2L8FGDgjBFym5A88giWNebQCmkzBGc9jFz1pdcdCqHs4Wz6J9ZuBDyYQpBSjkssvzcKX3n5wVxis16ZmaS31A15q",
  "key25": "TKFgTU1YUKsYgcUfDq2artDY9Hry46BoXqp3KGb9znbL41r12NDYQYSiFq8YAqi7vJe5YZ2k4f3X2uwugm528nU",
  "key26": "5CBmQAG9SK9LL9vmCvZ9vvbwpcG3qhAq8Bpk66HYgqdZzvGuBszdw58qeQ34aPNrQEWeU15G1WCfVtWhQLcT5aJH",
  "key27": "5erQYLGA8dBiR4A9HDQqxwChiU231m3JFzZPCcVGpvf87tadsTtRWryqSMTZ6x5pyNBQsxG6XcaKWLa2LVvXkkth",
  "key28": "3Kme8NW9gTzSFBi43VGjr5kqiw9begMUFEZq7mHX9yrfGuzVGubMN41vctZQtAiw9PbVMWhkNQ4F6iruf2APMCpg",
  "key29": "sFq3NxkzwzFfAsJLmwSvG5BnaxJwcdaeu1YJ2JSxMYakszyzMnbDue1vFJywEZPAwvf7cPBpC3bDapdqDiNtaoJ",
  "key30": "uvPmbiCEKMEb6mCRS56JMsMnf2tPqKDxk4tcC9B9F48Q9hYs3QSrggaGdxWpnFWjkLGdbGt6vqbXW4z2twYp6Ci",
  "key31": "3kJBBzchFZ5pLKKGkvFXLX8LMvhs9dUe5PyA5Zv2X9jmstPtKccm4TV9DqbsMFAYZCXi5iGisKDL7janmb114iZp",
  "key32": "5ayxvxCYGdTheQv2RH2enG6SRbmFWrCfQu7AYxcYxdWwiJtbj1ksrjip31RJpte67mHxWRKjx5i5aAq11aGSX7TX",
  "key33": "3eKdRKAXDL1hBbRdpUNwB9i5dhLYGLuWju6m3S9Mjm8kSodFHbQr5rbkfSt2cWxtqvUVomhzHahGgTxNiTjK6Jes",
  "key34": "42dqm4BoMYLPx7S4rtKQmksiwfnG9DsPLXSj53hkqEesSw3kBeecdV8qzLpMhvprmL72H5jQBUwt2E47knL82btk",
  "key35": "4qSQWSz7CkvMdZHpuwKTSD7PHwEwD1ZvodZHexk1nCGtTpCQNi7eMbyga7NTpRcgubSj6yLi2aCzuzdiiy1Tkm3P",
  "key36": "4gZyXwKjAbep1AxDn4TxbmVmvCaeyez9nhu1gEosEFZzoMT7k25miiAsTXX6157UU3pUkcqHr12aqqQqL2qn2aRK",
  "key37": "3CyveoL3gMw69WenTGJBDCndpvhPGiKTyuYJb1RnhEcnLC7oDWn22prrUNXVPUD2CmL8gsdUhZyG13ifKanVUcQy",
  "key38": "2jUcptR2uhnnhC9HNggzKnVvJADtAxZimWxobwHVLvyc4q54VxXFnLf28zW1aMo9HnqBUdsKoydSv2HBnyLvyxBC",
  "key39": "3EGstCpU7FmSTkbmau9aWnXZ9AXYNNyKqCJ6UdmMnk9UJtEjkjkKzLCiJKJuiE3DqtfcZM2MBZ9hS9gP21HV4KN",
  "key40": "2b7oCNr9TVTfFxZAv4G6no3fKNoPKT8F4qb6UU5TttJbufLyEj6WVk8Ng4oocQagPYy5zJhscuphFc1rs7W4rKiC",
  "key41": "3kBKfdwQG8K59FC9CbPFtaY4wTW3xpT2k8UgcxZhKRcBgmsMgXpgJpzjiGe3A917BP3dcpHjbnyqEd8trMdGpGjv",
  "key42": "XYCXDwxLw2D2mRH9C2T8VsowpcxwRjc8prK9unUy72U7yVg4bxSnSPK5jk9gfjcskDFuD9ms3hLvKPoJEUz8X3o",
  "key43": "3uo1TMwPCjSZk5k1kmFzYL3omrvWHD1dxBXWEywmMtAgekjBxGwWSVdZXipehvV9eKcQLNAbGJVmo82z2zree2Wg",
  "key44": "oXKVt5RXccz5u8HsKvP1bKTsy2YvuZtuSD1vdPxXxFwCo2ReLsmu7Qq9831JVrKFj2xLmZUhU1X1zb67gzTFzuG",
  "key45": "JRwJDuKEfmVips6v6BXwD4jepsq8yPz8zH7N4gWEgs8QB7LyYYyn5TsEhLcwr7D8zFNeWhpXNrMYPTpTY5iyVJp"
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
