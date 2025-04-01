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
    "4xWsUfn7yet8t8b8fg8McZStAaDBM264p5Gz9ZMoygSMs2nzUdGrU414uZax8NvgdcSFzy35xVxuzS8Fh2feLdy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBcGk35DECufwCLtvy4whpo5rfUw7nhMHMc5mvhiYppAFG1tJV8SArvMBTHDKzzjV1kmqThSdAWc9TH7Ck4Sdze",
  "key1": "4h5L3roA3xQ319DnRMQ4NGBGdiYNTbXcy1DABPcnE7Kgqf47SoV7QApTfEuUeGzNtUfCQKFZCkx8FDjgrd5kK1KM",
  "key2": "3U4MaEgFvbEmAHffSv7fcCLhD4hhp5SFAqaY53L3YAPdkCo3FFon5Ra8G6NheqthwsXCLCJcSr9jNCLdXjWtaX6t",
  "key3": "4V4MUKgVUidoz3gUSVLTi74AkEzTYMMFR5m1woRZ2zDQ7rL3Y3W3o8ZrG7syYa82MYbTryCFFfW8BQv3DXFTM5ZB",
  "key4": "2P3QdLNpTWcY73ggTWQ24bsdw81VhqHUDdW3kKCutKGFaA6gWLxXQxNYHBHmxY5NVNXPUeE6VZV6jUX8h4idzJgs",
  "key5": "2w56Kk2MXSVJFZrx7cxuAMYARMbxWrdJtyheom3p1zd2qz2wtMnXqEMJ4MZfshEUQ5udcG25ynSeTKpBycf7Ljk2",
  "key6": "eBNgSepX1Gm2ds1PJ4piduC3DxK62TSHLuMjvt7z8s5JU5Y2be61ags7DKXZRSrDUE12zWP659j83VpjS15JPHi",
  "key7": "2rwh2pevWf93pFMg5SFNfGWanRVNaoue6j8WMXnaPaEGBPsPZ8ZG6Kh325Gw8UE1X15pRozyXMWTP3YhG8eGHw5C",
  "key8": "4ogkjMhj99QmgndPFQ8NszjBUwXqqxby3wERWHcm8kiWhTEc5Ys6YvfvqgBCsLGmPZ6gFoyR789RCnc6ZZM6nSEo",
  "key9": "3dffvqV4L59mTb1WpZ26u9WVVTFJRtPNwUnsVnczWAqhSvthUqCmt8h3UHU1ah6CTmE3ZKo2y8FyjMMZhMtcY6MS",
  "key10": "2dQC83ixoczgV1R5YfU8vBp4DKG51pFE9tsEG9Jd3oNLRr9tX6y6KKeMtGDgXpEcWic69YPf5Ph8oCRLpZ5cTstM",
  "key11": "37pN6Qju3GQdV6FoTWUHMGAp8UVQnzGPu1QvVr1eFbt1MvFw3xqVjmuKJ7whzqWsa1sdNurTJnqfYTG3Qdh3A33s",
  "key12": "2FvtP2CNuXka5WhLm2VwgwYkW233WSjZHT1DfJLp3SKXYxYwHfUM8Q25nQA4XPVvbTdW7uJXTW7x4mDwuEh7mvSo",
  "key13": "2R53QdwSzur8fm6xKWWSTmkEkX1fp9P52j6ZxvMjzWRExeLaWVNEvs83Vc72kkmi8Bo85w9Lizg1VZywGkpvQq2e",
  "key14": "5mfaqeUkdJ9XDZxtbDa9iXfYR6TqPW47mEWiKEcQMc9Rrm4xJWVTKvkAyaBvZx4wE8Sgdjor63bWGmgUgUxvxxiR",
  "key15": "5jZs5M7mwMaNyHy6HWwNWNjDEVPk2M8XmecoSNVRpdK6dFfPYTX2ya4hMyK63oTYtjnQbMj7jvE7dAgSz2zBtMBn",
  "key16": "5BLZY5fENmyLY75GDEkV7m1ncfS7JMFqqwoCswd3G3Y8i796dwpcWwAdzmjf6K5EHj54ZP2VTFaRWzUc51t19Z33",
  "key17": "5SWVmP2ZXgeBirXc9WqghAbYfWaU7HcuSKxdqpNWM8Bc1DwsVDbzbhei1zbVWb3U2P6NGJ9y8P57wkyLtWcm12mY",
  "key18": "X2jUf5gWoYQcoupwon8aJsGvGauNnCyYvUYK2esNeDuECwLNpPSp2mUw8r81F4LPmbXqhNYe3Fckrc7BZYdo6bm",
  "key19": "5JFFBBJbi8RrBDqbay4m1Y15xVMFLq5h1Q4P25Mamp4JzPSR5v8cM19tLzqjTBYVucGSTf3BKPXoTnTsw9KcDiJd",
  "key20": "3H5Hdjr6MW1e1VcSVqZ7cfiDGHcTzhYmWj7Tg9CxPHD1N3kDqGmCAvmnvbnAkqxbNeNcJ4jyAhpK9KAQFmk9tW1b",
  "key21": "3bZRXeuWJNYvyW1XvfM2bmYJxwsjD6TV1wn3TaBMBr6RLF1nT2iacWR5212ZDeQsF8758zmrd9udHQMYTu4Zntwa",
  "key22": "2JWHYYxWj6ro8hmue4jqoDd7P9s3VeMSyDBjAGckuiK4fztx2hodsMbfcc3vV1B68ufv48bMMt6Qx7ASmtoPfAKd",
  "key23": "38mcGAwUhhnw5WanoEDdNev9HQSwdDU4t2Vyzhg68b6fVHEU65xXoKHbZeVuDAQcFWfXxQGEeUWwPoNABNpQZnF7",
  "key24": "3Rpf8k8ahdqCrtzUk7kYfADz9A1PfmzgXndQhyNByyjsyWyjT3V88F4ijG74ZGgiqxiLqbpnpJNJ8NqK6pJfhHuL",
  "key25": "2382QGMp3x1Egbir2fDPHMzNwZFNMNwRmGxLZ8qPN5ud8HEaZQ7tU1cRAB8BJAtBLYFc1WpxBzZbbewSiCFJmexm",
  "key26": "4uP6PifFXpqe2vjacDSrUoYMWH3nHR4ygjpXpFtBtphcqmpukpFgXbBaE6mqR37NbZpt8WQwJRNUovahBs3xbYPN",
  "key27": "5jwqvmd9hbbyyyHGhMfTpE6P2oiADzaJfxEH9qd6kA7iKkyLHaKrYP4TjkkrqQERK2WvN4b8ybhDDyYsRZN5GYNh",
  "key28": "5xszXZW64qG8rBr84sFd3dTegSZ9F8GamtBApU2Hdba914hh4SFqRwiWyjnMAiCXGVmqyAdgBrnwGVq2GstRZajc",
  "key29": "2XSZUXo3mVrpQjXw9HMfb2qFVou3vCFCSWip3n2JhKjeEx4j58BbhX325ib3DinZBpB6xQRag1PpiKsHVrTe2r2t",
  "key30": "2G5RrY2irGAj5p4SwZCjCAGUw9TKsLn358rKpc3ER88Msjfv1h7nrzwR3d2HA2QwooPJvgMJ8CAigABLUEBK9jux",
  "key31": "5KEQuvc6ZPLbz6xSFERzVgTGxEDdzUTDfydPdm1mBxUBq7dUrpGcoZ1kQSzsWvr1YUqrkfyLjTg8jsQ8qnAqryAs"
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
