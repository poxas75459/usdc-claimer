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
    "4bZzSpA9rEMRdvUcXzZfQpan7VG6du9P7VBxWLEvyTm5R5XXWqLhuFhZexWccRVR9dfaQGTLyTK5Lbg7N5WWqe6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJmiWyBv7UJmHjQkSJHkDaRaSKSJx1G8y9fZidTbAEWDP8eN9MP6v7QHNctr8Z2FB2AiXvKnU6shTHiMEAiNW9c",
  "key1": "3Z28BGqqG3UmTEq1yuLDAGYE8hNinHufJsNGovnCj3d17WscM742HXMmE7LWLHQbJDKjS2SPEL2Wa9pZwbsW3VXE",
  "key2": "2XgqPBzmeu9DeLncnjDnshTJLneAtFUrp27La8WLamFuzXiyx2PwWBDbdHHq5FPjpuyXt64T1GqLwJZiFWSEUjKu",
  "key3": "PKaeGpV4Dg1JwmJvJUfLL6jAJxCy6uiLTGptCJLjj6qYAidf1A9ZMM781bRT9ikZSLbxnWJskXATcyNRbaxcjFH",
  "key4": "58HqoyFyHjCiG43Y4gCdP6PLZcE9bDbeGkgLiH9R2jPdLHQkLAqDm5nWS39KpPGeArfKHDCahjKZ28R6Qz6guV1P",
  "key5": "5Z7Ly3fuak5BeJvPd7vaETCwXXL1ecRSZtNKV8y6bNCu7cMWBMzfUU2ap1E2H2Rad4ixHEdQdFyforUSWn2ErQHo",
  "key6": "uzU7cEbjawY8YD24wfR6oo9SXGMpejNFXzPeZcXZC58dx2SdeSYoDPEcJJjA6scvi5sW38C6JRJZuhMEEgyqxsE",
  "key7": "5MvNofHyxZ6aYPWYW4a3BpKSzecQGxFCfrT1c8FrgQCqTwN5GpPhauwRAch5GYt8a4iskq6jTk8vLp326dM3Hpti",
  "key8": "S4aKFe1mAtNHeQg8bujx1uZAQpAm47yGbdY2ddHpvoUV1eKM4REqXjGcFJnSL2J5NA78cdVKKqYiQRYsTsN3CvV",
  "key9": "2sk6tgu6eHjTcUNnQM4AcgtS1QwAA9o8zcU2sdYnR4dsd9ePX8YYwHrXaRcFmRsuPduG8pY1stFv5t2o87cTChHP",
  "key10": "2us8Bx7EugNx3a5sHokymzjevSZ6W6fYyawZV9Zfi5sust2qf28Ln9ZF6jwxf8RwtPBhwhEYFCbG7VLBny7kr9YD",
  "key11": "4kHD8Xu6RSwFRcNe5s3kWtbHryZk8rSvUJmwjxwHb77tQNDtJtZ15bed61JhtmX4uUxkLcNnGsK2tyJ3ev9bNo8f",
  "key12": "7yCoYJf8FUWuoa6HTgkAqoCRjJgagvrQE6DJJcDvov8oWmLZHwpuXpUikeFLqE9VxEVx7gySQjWookKDAxor2jt",
  "key13": "3CkqS3X476nwd3XEwxEu7WUiFEHX36KF1vnuUrnQ7xqVEPmQCGf7iz3Z5S8FDxPdyLof6my3W6MND6RpGXHX2yAn",
  "key14": "27ZyNsoszbjcu1EXypJwRvDj5wwxPsr5P6RqHSJZCKHBFoYBWUSvYNDTw5rHUPuNE3QchZAz3rvuepRo3QFaCkhL",
  "key15": "2pvLgpjDqUA9eHvJni72god8bgozgsi45pgkVptPEoqZqit4zMqjp7x7trFGwsavS8Fv8L6kruTqrtxrHY8hYbeg",
  "key16": "4ZDBodvc6kDmXFbpgrutBTsHhBHPzBBs3yjR4dX3CusG6FhpGBaZmr6UnQHoNUpzdRgyLX81pYrHkBrLnCioRYLH",
  "key17": "2qLsj816uQeswMP6ac6GNq9scyBxQ5ktWmrcpJ7BCP2rDdJkg6Q7poEmzuUhGxcZ7hycVWzP9eh8VpjyCo64kYfj",
  "key18": "5Xe5XStX256YhF7rSezbXLHwTJ6SEKkSv7A2r4wJZQ3kzZr5scRvKuKGK7tnkim1DqRioxUrMf2nSuyW3WeiiLTn",
  "key19": "2fmtNskPwD4g3av4qjhxZDvtK2Pf67XD54zxeMrnjVKuDtVnX35AbNQTUi7jm7cQAXouBWxc8E49ifbWudKMqbJB",
  "key20": "4YT9AqAQrJPYaM9moMJaB2ifX4a5B2Lizj4LbnBymvMc6GRnqi1gNhUi1UYXW9aQ8Vb7CzpnngaWfxGBSDNTrJLz",
  "key21": "sCd4AincNTfHET2QMaAUVLEMc27b87n2WeBbH5z5VEBDx4cgsJZxSXMkMB47fa6tDnGLZARCzK1Fc8td4QiZ6Zh",
  "key22": "5spjZHqjNFw9areB2Ed5xXrfseGTWTAArHWAt12qQNggmBZTCJ69ZbHHJpYaKzJjs9bp5eEeAJ8D2gDXCWvA1LUY",
  "key23": "479AiXyJkHdoCQTvvnng6WM51Bz9RdihmHHSWWMg9z3WL1k9ytPHEQ3HrSJ8cjw8jGRY6Zsza6tuJoJAb4NgUeUS",
  "key24": "bucpxfLNpYMLgWoQyJG81B8tQC5sm9ardbNR8bQKJXjaSnT1Md8mRfnBhbXcj3zU8mcEDMCiWP3DFX7vxwdjp7o"
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
