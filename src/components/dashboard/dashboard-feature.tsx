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
    "4nwJXafD8n8nYjjqMx5ZjwHPBUcN3xHBMZnvVe9rcNpLzSvWEDmdjasKWNRYwerK1Hv4n9T7WzJkDBRDSHdsxNiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RVSEwjzc9pXP5Z5eGneLcWCxQ1GSrgny6xDMpQbs5CgY7zBED5FAvQihjM3KipucTtHADkD7Tt3WjCvQYooHkA",
  "key1": "kzh6Nd4dmdQ4DhpQVpeYAidhdRMHgMYvPSxtKSgwYaxzQnW216dizQ24tdyHmzmkzoaaqRf4NCX3sVw5UQcky2m",
  "key2": "3rVU6tcwCGg19wS8LRXdhTvYDM3WnMb3dXyPo3QEVoawXhWGnyCb6otgk8UjPVkDj7vryumHu2gc6uqYKDiie9iv",
  "key3": "5eA4bBnnk2vY9Q8PJxQAduBA8URcAsonzM1ofoKs3nniXWQhHKbjeoPPcxaobqxhSkKoXzDhQqFCkQtHMdSyDPDB",
  "key4": "5JscP9rgV68cAfuMy41aD8if7x7gB81dhXTjvkhLcrTGXHucHvpsygZeodcerETwmBdjPGirUJDwj7NrApsoRbxR",
  "key5": "5tk4jFS9PHDwsKRUCZ31d5ex9tuCRheLGtgbDV64xNteZpz6mM7vy34PFsz4J12MudyNSUZxBYfPrGhBcavGc9W2",
  "key6": "5VxQxpgBwihngoW39vctMRDptTEGmtfxK9G3gQYY1XBPc6fuWwY2zuUGzpUmu5yxj213w2NqjLVhxzzf89ZmCph8",
  "key7": "2WefzfzcR4XnMKpQUB3zvu3z8RPo89QnNaxr4fKrYZ3JzLjw6hAcEXnjQriEjCyCqzXxMis2LiHgMf2tnkjEnLS1",
  "key8": "5eHx2wva6WC5k9ePUZm3fswPMG4oybqGVHBjF5ZeGBSkbXQyGBTCChxurG83BPUucPL6mAqn82ofKkvy8ezN2c4H",
  "key9": "27azkuk5d2kpHrwKGTnkqpdynB5r4FQ41vzG4DjuBwMMUfw8FtHE5qwsFmTyethgzrmaUhauXYyTQUvZxV6btHgo",
  "key10": "5UA81kduSiW8gUgXopxWAbV9vZFyXtR9n9Ut5ctLzv3GatiN46kuAaWPPLoS2KYS15dJuhvVexdF8JMiNRnb2siw",
  "key11": "3xhsZLxq3jXb8neu6PGRdhQEmwMsR7JUV58CMtVRTyV3GmjgwmkM8YtYtMAaDKhdsPyVeq7YCdS7ish1v8gKAnWy",
  "key12": "3aSESM3gRJGdjN167SWhtsnqQPVwmpBjE5qFiLq1pL4yZkqdWkh6r9FLQsDgchPeayriWa5b73xHCGHwBznjjNaz",
  "key13": "V547Zm6Nsc6Pjx4GJqJYbDDh63xRxiVPWMgxK4juASYsT1EkQ9fkoZKCEA2RZztTEdJu7z5MBgcp1aZefpdQ2yh",
  "key14": "3QJ3Q9NFyzQXhTx7pdbLCwKGLiD8XC7PsP2AZiqJdAfdhVofZDT6b5u1e56DH4dHa4EVHw4ze9ExZSPNTizidRb",
  "key15": "5QYGMkm5759UxpFjcAVpPkNFC3pwTGu2KscTLrknuWcFDsE8phiG8EbvBSZzQdRjGXtgazNqArzMaeDcVo8XRLTN",
  "key16": "3YhNdG5Do2UWAceyk7jo59AyqewiL13ZW3Q3KrN1WcBBjncTEF44M9AkHnAM6TRp8kFEDruEyifoKZHLvS8Vrngk",
  "key17": "2MKg5Hggoeh4AEC6hjcCyLSGzM5gTdovxXYhXNYTuMSm81SMUr6ny1fxkUVkeGQHVzPQuYJ3sGUjPuHbxwCFk6n7",
  "key18": "5E2xk6Avjc8hAG4oJmKoEPmSjoxAkL8pMbKoF8X4cNAjmGRr645uRssZaZyGoWWgJaBr7mBaHk78c3TNnfKKcppa",
  "key19": "i2cLpqciBM9uw5yMKGyHYWaVNyz77C2k3TMej47PTrP9H7fb1ZjUShtBmDxreoecvPAiqbDi63ej4EzCW61eW24",
  "key20": "3EdQ3rqFCx5rWykEDXC44WKS3QuAoMGp8gz5egwJPfrGVvqMRmW4Ev4vWfaJe5h5y9kmNDibtqvi8rUN9r6wHSF5",
  "key21": "3kr4kfcoyKJwZHo1FW7wco3GVQnFPfgC8NnUKM5eAzKhDAqzFwPUPkR1SVP2Y381EaG7jU3d8hMMvSS78NJ3gerY",
  "key22": "51tZiYCgcPFaQMGs8qc3JKSEvuezpwcuHNxz9d3TGSsEAUQSupceaR6NdemuryDJzdBMtJkY9uxrLgyVtwRLJai3",
  "key23": "3WU36cRFJTtmLng65kPqdNFKXZAUxykKEURjkV2BTu3i61i2K2jggk72GCMrwGqKEYFfWXpTySpGmNbEpvbpcHYD",
  "key24": "FoExotpWsF5ze4D3nPu7TktRjQr4SXuxoh9U1ajNKtmn72NQ3SSUgaPXBid8zyF8VNXYhYnGWqZC1yQEMfiENmL"
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
