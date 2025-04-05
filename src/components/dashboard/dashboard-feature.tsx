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
    "262Tk9s4kP6Bg1QnkmZsD4y8RGq9G1kiG4hdP1mhr2DfKdfPeZXJphn6a3A8ZnFA7PxavVD23FZo4fCeBYi267ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ei8kzk2UVrfSTYdMKYd9Jf7YNxrXgScc63GB7LxLQ4THnSvBZsxjiwxbyH4TUUDcGocJbcuhtEWdhaHrRLXt7sH",
  "key1": "43mE3CCPPWchetRUjSxCtHMU7w54FhaYkJDtfiMRFWXjw4miiYfGMhSzPtKzCPMNv6siqcny6cmML467ZrWBL9Fp",
  "key2": "5njkmw2WUKB1dNaRonWzMU3HTJugzsdDSM8hXN8YFsdJWSK1syhBRWBbonuk2NPRVBwHPCok9g2imHSVwDJPEHDs",
  "key3": "tMSPnkWDYEAhuS66QAEYf37aY4cm8o2wvt3tWPDS66NesnBFSiRYxmekKf1bUJ1TsL8U47kjupu6N5Q5X6YFFoU",
  "key4": "Ebjf9bnY1PShmVie1j5rXSCgoeJBzB66RC4qMSDHGkdtibrStRJ42N82mHwKY97A9zJbbP3Ec5iTonPvWaFq8Bo",
  "key5": "49fot39J1SLr38bybUqZp7VnbYzqzzNPimDCXSYMHdKiBXZwDL4x5txW8RqJYvSAdRB6b67CTz8QuRjpt9bYUknU",
  "key6": "3VUVMR1cV1UFsu2zs3UsmgwbeJBmvLRw4oFPBALkfbydMHup2iAbbgYvne4LiGbdkpBpt4X3uyT3YrD7YrojRYJc",
  "key7": "557XnqxTbuuJiC64T64XT11re2tppEoKS6efscBNhb8nzQMhP5SKAcHGDdaqmuz26JG4tacZjqdPrsk34P5AYtZ",
  "key8": "57f8jjmCoWLhDq4TJkvbMt4AZ3er39qGGGQw4cPRyZQCucVh4vpfoLyDDm9JYQFXRdx8sKq5zNqYd3XFoiec4d86",
  "key9": "4jrTXSdx23FaUv3V1AgipujvfLdUeZTC5G8s82EXkp6hdy52DFGD8iAGM9NEjLzt7dAHn7Q5whQg4aZHMnW9JkAP",
  "key10": "5VhcEazVANWeYoiA1t99XH2PpVHwmD8K1qJYMYLvg2gDVroTTtjPMWAtgEnVrti5gnWiU38w9tWBsoSe652tb8dR",
  "key11": "5dCuz5oQbYu9zRAtPDiZSArYkQ1B9ZKegvUnP24S4Fh7kDnjntje8ec2iMtegytUwDkCcpQE71hgjpuTELLXogko",
  "key12": "yd5V6KL35KLtZAgHufnw5keUsENhJjJsUS4xczuvjez91JnRCh5LHPJ8eXH387j6rdWm6TETG5B2WgDrLKgEPpm",
  "key13": "2DxXSHvNkaG6XwkZkTiS7uW7kfSV7pq1DJHGpqU3ztHiCtxPn5HCetg84dgb1qyVPXqhZR6DG7tRbu5xHv3yaDSx",
  "key14": "Z4ksZaqjpCicTU6KpoyuvowzWaeHnS9PBvzjgZYzPMtZKepi2Cu7g51Zo3UzULFRr8u7y1EkSdNtA6M6UzCBMcE",
  "key15": "5PhRH8hgNQQYAQ2PbeR85AHswPboejKw1Ustcf75pdrCcYpsquLtap92q5c6BoPBTtbzqnEs9GLauvHQxMSX9VZH",
  "key16": "3Jc1VVQR259jv11o3e6awcuC3qHgRnvTKDmuiuiU6UEZjD34MwXkEQ2aAhn1i81DYZJV83nFeMXTonHtgnMhonrt",
  "key17": "3uuXRG1bu3sfKMA1wqMo1sb5ZkzAuBUUYhEFPJx7YhpbMiRXavBSUkR8Mx7cNDniyHnG4iE19Yk5RvFmwqbcJcKw",
  "key18": "2QAQAABpHjA1yVx7Z25U6h8c1Sk2WuGKAQrFZGd2vgEDeLyygiBZ8SGKoCZEMHfZ3ovuQ4USsJ7aFCXNa7BdeDbP",
  "key19": "21J7to1PtrpSn3aowbH64xkjJkZyrx1ptWKk7ERr5inHX1WgTj4c1fTHLxBgtCaFdRDhWoX3gG5M9ZH5eh1tZDhk",
  "key20": "4dvAZKqauLhQXYmJoKhrC2KfR4guQ11c731Ap2uU8aXQgWuMEEhAq1zS5QAVP7FfTmMxoZuFNHBAc2DkRTk7R7QK",
  "key21": "9fdfkp9osi53PKq2wRKNzNsF8L3NQEwaCmNaWWevg7aC4TjLdW9Fp6Hhh2ttzQLSzAjeKYHo52wcgpaoEtwhRmm",
  "key22": "3jsey9JgnSp8jHoWSfLqn9v1ybdHuCG9fqpp9bXKsW5jVQrNJjAWqUbtnybuUwXa76uTsBr997JU96ikEnCgrTp5",
  "key23": "2QiAiH16BCh8sw66vUvT7cHaEi3Vwu2CxhRH192qUpqLfcLJyNZhXHcaL81EkH4HMWACeZUA8Ag6k1dWJXfPdxFe",
  "key24": "2HsXyPTAtPBg8M5SiArTuFAAh6N6Ffyk8i27YLovuHGX1oAKJdZ96qs1ZfqMG9WdcaHjj1kVmb3g6bAVH2Ae9imf"
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
