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
    "28zctEc7Twyo8ZGXdChxfhWVR2fs5YBRSCrpbEjbepkgunAmac6uKbAhp9gkoayFzjWz9A2xB5Sa3VgUkKJ3grTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8rjzH24Agyzu12K6sqKfkueAaz6HGoYhQTrre8ZVeqhs2maZ7ViB974pxfGVzXkgL9YgUuRCYHaD5MAChK5x1H",
  "key1": "2KP5evtahAziw4ogNwpQ938HS9xDcxJ4kgfx1fBbKFt3hTxifeq72poyq4MMwUAf67iKeycLDLh28WGkjeDpMDyT",
  "key2": "22RQmWGV6NSYmDF4nzf5dGvWJc7dHJeaZ1btorPCoAtjmjJKk4uSTemMB7g9CoKB4RczjqAyVbVSh6qzC3HFTbE2",
  "key3": "r5e3nTbKoFGJEixLbYvFN2tJ5sciMoot7GKDvZreiSbQf3fLxWQbQhtDjQZXUvg7dzs1fzPq9GbVAgkcv69hEHK",
  "key4": "4E2Ea8C9EYwNwqGAKSuSV2Lzfm1dcqVJ664fq9vYmHJeddz8Qi4MRqaQ6iupma4TsbGm3eF7PzNUzXaBXqghXSiz",
  "key5": "UTPoFzLDshBuMNTyRG1CUr55rS7FxgupQ6aKuFxzMReoKs99xeb9Wb8eSaNLBueooZfT1G58RkC5t4M2ap8XPtM",
  "key6": "4xJXkjHfMhVBvLif4VPYQYVSmptRWGH2UMtwwSR2P1YFuUBxox5ycnR6KeGTf7KUeV7rR32yhxbYQ9mqXpbYcHLy",
  "key7": "ZiFN4qTRwjLvT9p5ViZ7MS7LLP54STn1YrBGMxHSAQF1HShLwxPwp4iNkVqUyQVZ9Qv7nAf7zKkzRn4iV1E1yHK",
  "key8": "jaFuf6fpBDXBF3D2EK1UiSbXHyZxEazix8avuDKMuZm3G75DPqLjv5LjBME1ogviRgQbuByPFGzL3uyopg1Zs6n",
  "key9": "3YCHVxxagF35JodwKtbU5xU43oaXSv1fMkaKF5TqB8gNFncUmrUAHmHeqELB94BRpwAAz2pS54brPxRXg2dANFkH",
  "key10": "5uwU45ywttK98vZFjnuuuvVu52zdDZZRxZGEkw2ekxnoTs8n3pDLderff7bi9uTgnYpeGY7MW5oH57GYNm4x8ZUZ",
  "key11": "gUV4fekHJVoiZbpp7dfJoeQSG8mFqLkr9bzWc141EqEHXyY68jHtbhCWRn96pFCRF7xR4rTjxLp9EcUZKz47AV7",
  "key12": "26wCVoYSAMXDJWrEYbejoXKihvMwNMU7DsCEVRTZSe3cM2Tyihyx9WArgR19qrYFaG87VXdmupzUfnemo4x2bRZ1",
  "key13": "3pgtHJysfvRoGBPb59jZf4GjVhmLTysLNhzM2aRxUduuEAEd99eP1c9wN8nV2mwdnBiM9SGbznQTKiQydto5jMvi",
  "key14": "4rdxphwU6kwgGbe6dDVNxUJ1uYbinSXSsd2RpUnwZW6Wo8XZH4KEWeRr7DfsfvS9HuFs6AQ3YJavtfBgvPg3JJHZ",
  "key15": "61gxhfLQXh9yoLtfTJMXrjabDGhWFnvrphgZS9wnvWR5WSRFkAHe2MpsYAAktFTMSAFkDKSbNFHwcXCN54t93MDG",
  "key16": "4cnV1BxT8zXzGvEsAPiAwH3MW3ij7RQkag9KmzSJFyfeimCQ8C4w3Xgu9oPQD4scwG4amsVxpzpn565MFU9N6tCK",
  "key17": "3U7fgQ3KFQgtJdqYQjZvsjnDNAQNFz3W5dd9aGNtCB1DxzWfxUWe4siac6gNE6GKsEyh6ftiaqJKba25rGYg4kWk",
  "key18": "5DPhE5BcseT1vgwojnj4mcCzb5mhuvmUs8FdDWZ5jvKXPFaLBiQ8tTigyBP2fqRhzWMGQBU7gaXhxLPsRHTbqz1z",
  "key19": "55fbAPTYGwpfAmFbDxLZaDUfTkHXx7asZc1n2F12B766vWRwWA4zcHkAFdXfBQbMBjYYpyhcq7yGMyoi7rrmGRVn",
  "key20": "5eYTmAbPoDY3xevX7bb57XfvdRqvLRTALBiM5AEm8yUgdqFDTWXrDaAUWeL2uhyMKYh7ra6h5DK6kGxgWDjx6ymk",
  "key21": "UHs4A2Y1NgmzsfYG6swR7n4Ww2AaHeMbVQPKdoCk2CRQyrKvbSfHSGrLRtNKa2wU5BksrdKAG7We9Awo14626LA",
  "key22": "2KcVDopZy6tVnywYSDuaCXd6Ec5oMTW4ZZChfnUoqXDhCKshhN2Mbzmr6Kj1h3hbpCGwegpzYbQ9fh4VwgSzMYwJ",
  "key23": "2ahVjuvyCkhyGnGvLVEoaqyaeoXfrWS9CS9zXFDi7XXG2K3LAfEQ8jnGjwiaT1suqwdezGdxUqD6wPYefygAGVU2",
  "key24": "2LXU5Z4J11VoJu64gdUKZc6TcSr1kP15KqvZvWrFJtnbpUkkPsy45UyTRUdUamQgWFAMtoKYeqZCWqtvbK3pxRXN",
  "key25": "2hwM5pjvfcKzp5HSP6Wxg49isGWw8mqo68bdXZtarZwhPUxhKpYUTcq1pCNBNcdjaEDQa9sFNpkTbq5YLMutQSzZ",
  "key26": "5CsBo1oVxwDjSFJLfam2Vk3eGDH1gYcyofWSnFcQBsUbyZSjKB1f71eT85u5cNJQ6snWZ1f7jovAKHdvLsxqfJhx",
  "key27": "56rcHWSd7yPSLBemWyuu6Tjcvjd8XA9ozsckv9L34wDLfspvUBmdcPBRH8Mpsp9uo4naopoB9PDKRdrxVtDPM3P4",
  "key28": "55BhtAcHaAjvMXd4rG8jJrNqwomhMdGdHzPKnNGAPNakV7g1m7c5hLdM4dTvg37ULdgeMEWjMxxobYZaF9asNJGy"
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
