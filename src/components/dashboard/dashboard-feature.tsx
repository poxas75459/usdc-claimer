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
    "5YkDN749dxh3ShHqhFAawfcUGNPQxGFCfmsd11Ve5jjxJ92dHFySmzLTDHMW4CS6tCsmRSaYX1ZzNn2P22YJVQRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aA7fbAGXwjLQTF8ATXJWFJo63XsD6uDg3uzMcj2JHsGaLwEr1V7BEHtjGzVSTPFpij79AFb9YFbxCWUZoythJpy",
  "key1": "2sGjAKbDgx5Fz1RUWUV5KpgSSKYdXH4KHeRZ5v82P8qsxuu4xTqnatSvqsFueHLzM45hdnMpc9kDKdwM9D5wGqdi",
  "key2": "4zB3wENBkUDTHCpKAepnGASCE3oPFswobJTrqkidFjzHRhs2XWBKVvqDL1QttUnkMa4cTVGcg8sk8WAVn84Krqxu",
  "key3": "2VR9KQnaC2W7Bwrcd82bDw1H7f74ZEcsfojb1yZLUExc7XEWTp9xEE9sLU4zgd9kX4KUkAkEc3wztY4fnL3uC1DJ",
  "key4": "5LdVNvg5X9tdJNXukZDhmSeS7hqv5mjm68HknWCKgzebvqcDR338XoA9msXHs9aC6MZzDMzcGpCjym6qAwiszAtx",
  "key5": "44y4FGpKTvPADr7Aa2wkyqztjUB2XhxQYGrahTc6m3414k78soBja74pFbkXqbLksjnCZ1APyTziUKMy9oYgdL5a",
  "key6": "5WjqQuuvAsGpYuN1uE5AmJyErFojLxDXe4LX5cp7vPgnyJvJJH4UdNLszYfm9PZwodUS31xkV3QfBLaexqksCFLx",
  "key7": "3HddkYNTAgA3UVNGxrm6Z1SnxGpJCmhGHBooXrVmYEdufEh7acVf2uuSswC5yEPSDJf7JGAnJNRHugUEwCGKELY5",
  "key8": "61cNJma68P35XrjCPhyG22JhZqrabFFudUaYWJhrVmuJoNjdCbPPLNgoQhW6WVt6tR2pdJD1jp546BJjmWn95Qej",
  "key9": "2YEv53iWLqKJr3JiFbV8iR91bk7ueF7Frof9taUs4VjYNV4T2FKXK8uGhStbjDHooNindYbZ5PGQkbsQTJ6fnunj",
  "key10": "Y3yJpNpv2QEbjmTjDKBSZ3UmHCg4ajWMV9DcVYXRx5z3xDxqR1a5Kn9bab9gNyYZubVn7mVfDXMrLJwGGTDsxjE",
  "key11": "4kcNdnpa8mqqrB171h7k3dTg4keocjqKU49eX9bkwkFLLikMsJ3YtAw69o2bgezf2uFhhTxiiTjkrGWS7oziA96B",
  "key12": "RdXK96XdGHnkdpdMRagZNSSq8SUC3cUBSWDVLhk1bbXZTdGCQkCc8Kgi2zQL8YQTuZ9KtSH7naZTcRKfdWewNPu",
  "key13": "23bdrN8hNL696w2G9QMUvmeAerphFMjfY6JXZV4TFwmjZofN7KzGyzxMhj64ALphy3a3sd3dvWoGsn9YzJmhsnJ8",
  "key14": "5j9eKcfszHRZztJVjwgqbxEt7bYp2cCNrGyw4B26BhSfxuvEt1Nrcm1CzX7ZHezHgh5ZLjHqyTEAYzw8b4XWQDVx",
  "key15": "4Zn3WPAG7g9XYRquvRSF9wCLBwMfF1zAghXhFGwzK7kw2ZE68rceJedeEmQT7h2BSXUeMD4ruLeTy2w5DyHkjfuX",
  "key16": "2X3bJknJsNF4XFGzbsDAC9J2hnvarWwtZYLV1nfT6Bh3VuqJWNzzor2ZSkkxcVzpmqzv4fM7v7UKddfWCayF6jri",
  "key17": "4vqMc9atiV3Vmzp6NXRDW4kzBhU5QihQUJohTEyenXnhXzz8w7dwTjo7SzNWvTyhTQAv2gUMow1PgBkJJooQW39y",
  "key18": "5UCH8JJBFiTFCDv2pHXW5yHnWJGEwtaRVyCC3yqxksFok7DqEULd1MqdgmXCxVyWemZDqWubsGTKcH276t11Cgqm",
  "key19": "2Jd6mDfgouDoUSut5HNzz4o56RsY3HPX2ek37RimJUm2Zt21Uz3szyVTzoAyrybptckmuDkuSnP87wuLePxfVfed",
  "key20": "38hE7wjyXMhJVCwXjBrZhe8XGpoyhpK7wQKGKQUWyD37PePWg9JSnTgJwEGMXfC6UzWPtj31jmXk4j5en7cUXtU8",
  "key21": "3SfxjoMVanL3TGBHMfif1L1vMPAPMMLjQmpWwbaK4zB2WeuaZJSJ7mdV6V1Rdvk4tD29wJWeomR63nPGys2DaEt5",
  "key22": "cXuSSMNYL91fdAxAGM6pfiUqjZqJqeT8HNmNZSvAVczNA7pAZU89HbZVWrh9HVf55595EGiu2idCeiRh5jbyPio",
  "key23": "JoEuDssMki61WjYntYe4sU3ng7W2q2FnsH8pauejgDbb3ZxYoQf2hretPr1PTh9pinGzKNiZHEuCap191nafBjT",
  "key24": "26wuCsiihqRBBWehPhkF4mucXqfxxAVaRfZNLpnYwW4pZpECbp9yMnysnZAxSVnmSMi69t7V6Ui8A9WETu6ASvz3",
  "key25": "2a2K933mGR7whSqrXUTg24a2jjVPAqejneCE9efkMTWkRpZePbhFkgK7tt9aJeytvZxwtkGKZqE1pHdtrttZDnUb",
  "key26": "58yfyvPd216vgdAUeFkvo51162p1LB1CVWzhb4E7Bd4JRa9BGga9wyuSGUTsP2UweoVAJkShz9Tfv78p6AGvNZq9",
  "key27": "3EDX3oxB9aVB6q6S6WEfPFm1wZwaA5ZXNa2ffrXLqgkHb4o7GLUALxJ33qWLcfD1Q2zw6RHQgyjRnnaLbTdd3URG",
  "key28": "4GfjprbGkHADkTHtKHX1gjHB88i6dg4EH8fGsp1bVv3ydAHB4YNG43NwN2mQYjA38SuCGAkhTjSUNuMvytDzXVW6",
  "key29": "5kKx9bPr3U54NvCPXhs3RtLkccpKgLDNbcsxfSH761VbEi8waS7QLCsffo46Z1fjVNyQemukmBeJnPruDZUSZX7t",
  "key30": "Ec9pbiNPve8UEk6gjVURWg21iVntCS28eo5PexqLLQRFyJ41j8pp6CWUKk313irNzpbnXsqegPGxA5WcF97nqSL",
  "key31": "2nJrwTG7xAYngP3g5nNEukgEBkKgrNFHtMGLbTekhhe3bjR6eFeTKJsvaG2VvPFcTz8qZaNJ8vX1gPcexrebeBQr"
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
