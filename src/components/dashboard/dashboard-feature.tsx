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
    "AtLs1f3TAKPAWxLU1YRBhTHktVzbtTNLBoSb2nGETeH1c9nct1AA9z41yLLhSrTsCn7MX5vtjiBfmAxWpHcY86J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPSeTpJ3MboxpLGGZ8Mq9qgKRAHDiqtkKCGCieVCFSas8KKm42P36wbo7FvqVUZ94L5RwkqgtYtJCb1HAXUNQYv",
  "key1": "3Sy9eVkdz54DoamoGWCfS1E2CyLNDYKFnscsx17tJw6taLaTmLBuPiLVpS6xq4xXAq86M43c4MPnXoEt293wpQLp",
  "key2": "3xeHw6ZMjEcok9NAz22Bh7uuxiE8Hg3qaCdUSXouj7ptJxqeU1tXLXvxEW1fUyU174HDJdMERRFFzwdAD8VYUGCR",
  "key3": "2PDUFNmD1rVjiGha45svdKpcmfumqZF7qTmWEHcKnc3Cj8FAqQNRYYnezpLtUeK1gTPiSKQMKW9inoZm7ZPLMoxE",
  "key4": "4MgWjDMuA2gBAtoSLJg5ty58iind9upu6jLh1qqNHwSEdQ4zCFRXUR2gCZQVGhZDzGMZJdRy1SucA81FWL64XENw",
  "key5": "29e5dfBJpFWU8cjfscTAtKY9v7r64BxCbQP9APF1LcGmdQY5VAhDR5n278D3wHFAVhCtVFoUpWGmig6yGRfP3mJW",
  "key6": "4ZVvbbCcLyvL9J4TPFaYXi4PPSJZjRmLwg1pU2YNdkDTKKvrkLy2r9SzsbBaZyCs368fufTQSS6pyXoPigTixw82",
  "key7": "4Df3aPiYqbuxTyHSuHpc5ZvwtZ4t4axDUa7G59E69wTcwoZkFqaot6J4EkoNHHTj2TJDgUFTB9ToQqQd9BVkihvL",
  "key8": "4bZFEzmWGGmzdiANTSZsDnaxXB7g5BrtrmkD5G2iSen9jwAxWcEWYXZn3XcWhY7SmGrkHxYgFHNtfNWHHRGDBK7p",
  "key9": "3fgGWEP4S5QBGz7kcoriGJnCF6hfn4phpLSE66EAWDprSWpBszzzKoKxT2TKb11iij592AJA9bJKP2eJVQCV7k7q",
  "key10": "66B13PaemKoJFrBn2tifpBSGmSZ3twY6FjwKcivAsNx7Yw8vyYritW2VotJn6kiwfcNGDD2SicQJbJXN7XeETyUQ",
  "key11": "2rf2PgvXFjshasNHSEjS5dZoDNsZf8SbuuFabqYjHzKWXM3ex8c4ynauYCxzmRrj2F3wsP4QUtK1wwhmBKSKCJBy",
  "key12": "4eskw657F9ZTLkmNGuj4dgQzYF4wCW1LSAJghXHrx3MRZU2zJkLyJjvbS9efYBMJCCLNz83znjB5J4vgFazMjiKp",
  "key13": "HYPzfdrrNjEEY9CGURWpgUxkVazrHmDVzhgtB7wXnP7SEoys5KcRW19YoxnNBxDfGvm58bgZUZQ4YpUAYPbgLB6",
  "key14": "3rgyrjobqfTV2t7Ui1cu4oV9PyfxXaZBZxJ7fqpgEL2sV6hg9zamQSgVrM4UVEJgXxkQrH1SkXBTy8Q3CmTQCKkM",
  "key15": "4Xq9rXzNJGPC1PFLbhzR1prtKYDGhmga9L8qSkJcd5NzoZUgEe6Acmm1m2dZepiT6M2dZob8QVWytzjphnvr5PPA",
  "key16": "4Pdd9TiFuN2dKaGQyFFXZDG9gXNTw4FsuNppuAZxQnY5Kw22ycGnHvDdQKzNqvavW6zjGZ16QpisDCLq6bSif5Wd",
  "key17": "3w8vzxhuwxB7Dt6o9xVRTpjzWMp9xbmNbdnyqHep1AbMc46BDxbeSw2h6unr52gvHpepyHo5HazbhJ1p2o3Mow5K",
  "key18": "5hiBNo6uSLtAXApevWXBkH6MTgRAcRgfs2pQnXiteKtuf1RuKT1JFUVAkeMXKunms3a9wx6toGpKTKBTda6xe2Zr",
  "key19": "3UVrpRQLGfkJgPPWnjMJaUKZgckMJBcVLqM2sjhyJy8JDirisuyxNhKafsdq67x8saHUS11ocF5CE4Yae9eHnjr3",
  "key20": "WReKPWurSKTzua4M7FkSH9dFfVnmXnk12fcbb1HdFT4ntz7hMibFCANbz5Vnz6mGF2AU5Xo4NRdYZ9Ukz7gPnko",
  "key21": "JegZMCDXLDFivsSd8brk3Gid1JhZM5K8QwETypJBwmqxecZbDJtGtPwHDHU5wL2co8djibq57iyX8YDp7EBiFXd",
  "key22": "51v8vPg3n3r6RvpX2CfVN1Zrwa3dsLmsscfb99Q3SHntJ8Nk87XeMtGfpfKMwj9cXRmrAx1LsXZVvGepfvJ51qUC",
  "key23": "eFYikciXPu7APZNNMuvRDk2cvpHYn99McDjR34W4yc2qZvjsh3q4rW2Usy4dtCGydmToPtQRvgmu8EbWPk8vVXm",
  "key24": "63u2chMTo3TuCSkLEysqoou7UzaRF9C4hS92LotMFoEzD4PRBGgdn9FNiRjm3T9NyhGWuEJ3igETwYV89vNker1m",
  "key25": "5z2z79NRz24WhtNSD3q94uznPuKkfgAsGRJvrhBsCyiMVyjro6XyVrVdCRQTTF1HBpojPU4gVQ4Sd1XR2wQu9xZG",
  "key26": "64Scv81evC4kMjz31adyUrCgE9CJGYYRmRnuPKbUTGvPWfQFxE4RaTtBFC7iaWKfgnsMPQv5TMcQsxnc1mK7sjri",
  "key27": "5HoSxppVuksEZvqoPwkBT1bWZJciqdDKR25SnEmqcLomZuEwoQ1aEufyi75K4pMLzz7LcnCi419VWR3DLmq99VDW",
  "key28": "2umdFchQuoKM6DK2Sqcbs176tqvarTAvdMmZkF1nrUrPmaW8WN89FBS4QsLzDkghmPnDSWPNj8Bv7emZWegJKcfY",
  "key29": "wzULdVfHi2DsJaMtZ1YV7pLXKAapsKLArHFenxo3NwRB8ZtyBBtKcez7JaicAnkEnCoXXFzyLavHLFThGjZkqAu",
  "key30": "57cDQqHQP5pbNWjGGdJrt3KHPvp6J3jzgnG6nmkbBmMAdAD3UyDkedkEnyo2BqfqQH8ARZnp3Vx4Nc6x2y9E6HqY",
  "key31": "3gwnV4TznETyQuNpoVFjcqTfKq6fFdcp7Ai64Z2zJB6bWFMJGXuuFRtGD9GC2jf8M8RJVFFUtnAyeZzsAuS2yVVP",
  "key32": "42C4xyxuptSbNjNWEFpsvvL5mnzqarN5mia4eLkd2DyfFYczpgQhhdac9wqvpkZbFB8t13HT92wDffNT28X7cd83",
  "key33": "2BBFwotngQsMcCxa1nLZ5X654AhTPcXn6t5jwabR7PaXX6D5xkSHjNttmd7oq1ixTWwx9wA7GRKJq83aeD6jLGQp",
  "key34": "3eurXLmcXJa3mMfKU6qJmG9VhXxg9RAypu3AuEgTWkiEVFEGpiEPP6xKXF73FQRPYBPAjhC3FPqTvcnM8XqLpSir",
  "key35": "379traxtpsWhBMcMHyQtHsMuMEViTxSvRZMY4BDmCBwL2vJqU7cxBeEW3ZvsVP1foX71ZsfqhUUJdnQUT96BAUjA",
  "key36": "4jgzzcTCmmR8ru4sjytmy946aL7osdbVQyaeGAsfdiXE97dfEuMcn96iHoBGKzAnspogvm9F6KKauBgN9yrnSYsm",
  "key37": "5DWyqBoVo9Z73xEQWVNtgEmKfeDycRS8PrV2jtP9MsfEtDKZqYBVnVQwomD4QuhMfe8aKft9HtnZ9ViAG25GHycu",
  "key38": "tn4G7gEEqbD1jFdVAwU7bi5sA7izFtFADgz7gkd9ZyDvG1uqtuhUmxLoDChRNo9jrv8eP85yfSNVBkSttnkSyY5",
  "key39": "5MTN2YDF5jzEwoAuuQ5hGfK2cBrVoS6rneaTF1vG4Gz3piUJohyRD2WcedPSpPGqnJaJoJumpo53T2a9aVN14Cjf",
  "key40": "33nVfyVpnDKjjKbpDUk3sd5p5KUmGsqSa1nTkZuVarpPizTbXvRcY21xXt8DLTxgASDkmgQThdvxJqv91DRxkkko",
  "key41": "3ShJ6REjCkqnKCPBjyZMYk6LbWH5afrWEJyV4FPe5G9Vis5ogaaB4cBvRJMKJXjFDT1qEDHb5jM1tQbv74dyKbym",
  "key42": "keVP8gPqfB8PGPt8CfLCuXx2d6MYfKZ6NX9DQzfWtAaJ7thmNKNrDcCrvJVkC2XyvPVzbYUXo86GQxSYddk86ay",
  "key43": "2bz2FNpioDGogDkp3Vh1qXQbvBVtq1Gmp857ivH8wBPoaqRKx5Eshc9tWJ3DWrkrC4RE517cEGJp9MEbV2g59L56",
  "key44": "24SdGna78CU1EgM88qa16esogUzsfkVniYFUqbqay1VKa6Kt6PkS9oriRXkZ1j8VZU1VyAtYV2jPP4vULBefJpHX"
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
