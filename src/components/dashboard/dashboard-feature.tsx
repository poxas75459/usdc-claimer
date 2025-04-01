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
    "2ffLQZLYoXKmWDoKxe4sKDYfFKkXK9xWmsLutzh9eMhLET3eppq2kX9CFnGU6PHrVdE8rH5qUtAahNFL4CroWnje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NTt6Gf67a2N5PQW7eJixyHj8zwTYfURtBEJUN5yJR1s5ezL2db4YSkESiuVoE2AzKcem11wMesecQDrwEMZtTQ",
  "key1": "5ShTtURcbNFs4FX5cqdGkFSmMh1sJeRk5hB9eWPoXDs9hwnxeaEGWuEUaZsfR4cm4C6oDAEDpeX6qg7NFCdmGZYy",
  "key2": "SaPWJJNZKNgvBfxx5rtqoRb3gYsicadhf8NKee8J54tNEkemyR5wauUeW3UspXSYamv42EZ3cpCUX3EWbke8xKF",
  "key3": "3BM8R46cwLKxEAZYxfmYS7Ko7e7B5NCMr5WKQNbRHBBmspMwBaZ1SWrChKL9couNjotcuRgrg5jcogEUVChm1FV",
  "key4": "BDrLvCQx1ihAG9JJn6NckdXdUxoFLW6eyRYVUjCYhke7H8d6u2RTTz2KGXnChtKrcr7fcYhsLBPDqKqNW3ZvmCM",
  "key5": "2rkXWit9df9BkVFT6UjoCnvuwhfasuRCA3UgagyJtnGkRJ9HiBn82zFuEvu6NCQzbsEwiiAKKimKVojxg5Cpdm2B",
  "key6": "2Cd9JSoerjsQrkBeGrCgXd8LS9j8YAmZ37izNfA3HpUQKs5yoMDB8z7xns9hpy9GPdu7nHwDCk8bwnzHC6ocuPyB",
  "key7": "8m3TwePF3KUp3daQEpEXNCqj7nKmRCkCKNJLdowGFP2WD5wrZKZHwZkXEchySy9WjAWYzZQwTW3TtEdb5cYe1Uo",
  "key8": "48CH3CFuKc5BaDm5KgZgpXT2iNDwpWZ3zeiwW5o5v6i7tsv4sBCJ6HaCtk4YJT43tWgFjzkRNMBTyxX7bp6thu1A",
  "key9": "4cGa9JuQBjEeU4VSU5FAdGKbHmaSZMo2RiQ5Xa9L1MjcXtW8iDLTbt8TN9vCJ2aKT8Z1xEFZk3yF61V3DR8aSDiK",
  "key10": "5b8aTiSZu6SZSAvWiEvicrGJXh8yCa49CkQaawRfaZwVuwwhkdYqVuiFokv8N4gsNfYFH6ZR7YXuwc274A7reLjd",
  "key11": "ZFa9L8EoFyqgNitAG8Bo5F2mv57DpVLKRLUtrWda1iEE1hJqo2v2yBjYR3tXg4Mg6mubzWU2ssPkyzrqgzQ1D1i",
  "key12": "qciVVkGv1SDS1Mk1wqaSm82LqiAcGgAADtoek6fDmhkhGDEF7H2XQUd3X4hPJ3qCjVMfyMJacqHZjzuXiyPNTTS",
  "key13": "X167qWQSJg2EwhvTnSf94UypzaPkQL8TMcbEHzRzMHfLcWpcTicvBirpTAJFFAa5V4PbQwp26hii8UkkgVEtmSt",
  "key14": "4QNU4LB2kbuhSw5aojr84uw3FgHsj7WHJhHEyNxGG1CGPD2uUy9uKfgJVYHNE4iRDx3DpJBmceh3MNYVCa14wXoh",
  "key15": "5SqaevAvqyKFH35YSYYms7TFuc8C8fVETbJRRPtR8S3oUwX5DeDVvSb5U83MhXXC5akKWGBPzEpw1Qtv8HdaDzAt",
  "key16": "5Bm4GCHaXtkJ43ENWzDTvGeBy9n1ZC8K6cFxe8dXmB8AvfpnSN2hTnHhZaLtbJ7cTU4Q5z6LhwukHfMXdSSwin7S",
  "key17": "2PM7JK61nuKCoFbya3ocB1fNMvqykTpy9rwkHNb1gUHENsCzXQg2wvBJkoi1353soANzR2JJndDreu3dxRLviBGL",
  "key18": "3kvGhMrV5SHx4Gi4AVSvkWHCjRZKCDaEhUgk19PgnHqEcpEXFH5kDzY2pQTpMLGSqo3xXYz6bLYN3jyzKja7jq5x",
  "key19": "5Y8xxSqaV26PCUGF4XzsSN3ohAPv9XHaaU4DXH9kfzhNxE1Wh6m9PV7rAdVirSLJhh7Tpe2dDFrM2ngp4Ewjp3Tm",
  "key20": "2XVAgKPh73rGxZknURbgEvfPWbuyuxo9ajvysenWuhANDMRv5h4bSPJvTW448vBpFfbbVzDxaTxX4hEwLoAgECPz",
  "key21": "AUFuPp5xXYMcjNuJf4ic8s3baMZgTAeyoDbwDaWATo7NHwJPmPAYbuyt5c9NVSyi5u8QHV2GNM1J2WrsGgk8UGP",
  "key22": "4C29b4ZhCSU7HYTsEMC4MkGJ6ouoVkUyry13vgxd2SJAzPWs2wbJwz5GYJS3b9nYkJwiKLggxDCKPFgaa953a2ve",
  "key23": "5JcJ9QFsbpQsAjjv3Kj9d9Cfdzm87WvvUc2n4oZgHxCF789r7XzyD9gYF4vqfgpJJGFNuXsq3XFNp6BzWX62QNBv",
  "key24": "2QzgvE7XjRg85XmyJR6D2wvNVggGEDPivZ2XTKdA2yb9UT6zWvZxizqQmFmVZPt8MQNfgPhA3J57SqKX8hn6x9Y4",
  "key25": "3gq4TYxxrAYw1WzDcG6XchBSrAoLia5WNPYPtMseN7kFs5poKfRFoYiNPWTWvcyg53rXuxQx8p9nxgmP8KpTx9nr",
  "key26": "55pV9ZqKH3DqqFDcrHUVn3nn74DRdL3kRraKvWitADwEyBPnxtGgJBMNoCHxr7JUmaFRnhw7KRqEvjPMi5aRuEix",
  "key27": "5GDCgbP9yFTfMfff75PqFLKo3ED8WiXfnxRXf2Y4saearLVHrahHm3ybG2qNXPszJxxtCuxkJsvaYymwFpXRRAMm",
  "key28": "3YfujN6JLA3YRrHGgA7b8QTnNSVrFCoby5kwRczrJRjneiSDKWRoLcKvzzCreRSD9xfr3QVDhiL4SEP5qt4bYRga",
  "key29": "Sx45og1XoJ9sRBFCtaWZimBJskKm9yT2ohQQU7M6NtewG5nxTGgpJvvkqwaSGYY26XaTRQBDyvbGHm2DcyRYXWj",
  "key30": "2DEGvXWiRzeWXf3PkWyB2DA7Gz82F3H4gQbGtgvcMh3dyxw8ste5dTeMhx81H58kvDq3iA9uDDBaw1oNDJPMXfKr",
  "key31": "5T5JH5v7wsAJ9hSbf71nTbyAWDNqVk8eWQFoe1eE89xiijzuTjpNd2aAJAazEXsBuPgNyQioU9J8WM6iZMsTLQEp",
  "key32": "2LTggDoRCDoyvkeN49TmzuK4BkT5AfwKNJjLckvvrqkzjLgdvhZ5RzgYj5wtoRgCW411Q7p6pP9aG482Vgp13X5e",
  "key33": "aW3DsCACGEj7PMZfXGEnSiKoueMCY7YXFNiyLkc7dMzwLn7e3A5MFAKo9zrM8929iH26rd9amrKyxokEvodNAsP",
  "key34": "NzAwj95EhzLv5zyDdJeYFywixGswD3kHXdmxwL494nSP5UzjeQe5DmfA38F5nFqwoPhPwL71QdyfSWSeoaRVEjB",
  "key35": "4qQWho1y8s12aDx41Ss7oLLtT5u9DiQJCEiMoEfw7w1LWsGA4Hb2BL3EyQAAC7H1ic9u3SYKJKe3cnZh5uf4zBG8",
  "key36": "4HZnysjajrN1uVekFTMSuAtNJVYLHp7ujvfAN43fgBDz23MjAC8LMPptCnNg8uESoep7qeMwqiopx63AKeTFTwiM",
  "key37": "2xoerLogPVENGpZyWBXTiCAmkixqHzeAnkVgPFzXsr1Ln69BK1eNdtVydoYKhNSGC8kG8yvGuspvyH6buLdJkyCD",
  "key38": "5PYsJhqBHAKoEAJQ88QkJVPFxn62wbjJ26zFTVDexnTiJbivCh8UtxvrxvcDfpBUDAUUNbACqqbc22abW6qpWxDL",
  "key39": "49qypdzpUBm1Jjmm3fM14dP4NMLAkqNX8LmKPSsdBBKHRys1X6pDWBea78G7gbRpjsYuuZAjSEp3Wjypt3mgpWpf",
  "key40": "5j55hPjg4R2CbqHuU1S81WocA49axq3pMchXPu5rKvtfeujMm2ZKakRQCDWQb512icFaiTcpPGz6azrE7VpujYkV"
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
