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
    "5YWTZZ6SJBX2pTiTv55EBngBB6khZtBH4bxivu59DpSt5PuonwJjCksBHQtrX7QqtQMTrsXaaAjfc9CYJfsXd822"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46D6YDs8sK7wVeG64oVqU2q54BNWMSVvwY1rhSEu83yDzktXwX7AeQnb5t5ewJyJvRfAa8GouTTNwtAxsCfunXUG",
  "key1": "4whN9gcGokdSY2KgyQdZkyNhTvL25NbgQq61YpM5ESpGGhRUFkBsCS3NNpEVRZNMRvwh3MQYncCnLYcJyHZWNGX9",
  "key2": "4WkNbHpdYhsfaFa46mUqMK5CY6nXiYgbpCDGSWP4RYf41exk6iCKn5DMicH5hNSPpadwDbYiPZJoqje1myo8pTXU",
  "key3": "4NJ1nS6d7V1aYAm6seu1otdKvp4i2Jg6uyHHZ2j2xPySeCfdpRWrvYe4bCf7SWJUvVsViSjHE1YyQUxfgfRLLVBR",
  "key4": "4mMK7kXazTtgxSZ7DkZxMS2vuxBpgW28kCoU1YtMucqeFP2KcD4TYv9aqDn6QVYCkLyBuyZG4RsCV44auz8eaJVi",
  "key5": "2Hc4wGpLc72zdAfPCEQGj2WpSWk76KLSRbqSuhQyFzTLD5MM2m12eYvhusEzk6EVhGreX29cvgR5hW5iUD9PpJcn",
  "key6": "2fESH1fEd6WrHEqonSP7ToxVe3U8dpj7JxaLtVm4S4VVBb8zbGKzThcVoCmWwyxtyiNMHhPE8WRMSZy3dDoXEoae",
  "key7": "3tH8YokvpHC27dcA5Hy4hPgeM2Voi1bAXiTPcR7mmqGDqoFMh6c5vjGFMYcs6T33fmgoaxdXHvYe9TFeBoR2B5bu",
  "key8": "44Bj5oaWVQqKmYekkK4ysAf17Vj1DBL5CALFTH4gRBY9XE2s2MTDivfqqWDLFPb9VHEa89cJABiobju5pL7ojXrL",
  "key9": "4h6KhtA2YMQjqYWG7aSnzzZ8uP4AYPA48NN27K137x7Vy5jo27SbUMvfqLpW2tM2TnaSasMAJb9Uw3MbcppukA3q",
  "key10": "3r2Lyx5fqzqg6wjEMnvVhjgFtVGYEmuLZR1UnDdrHKeKqn1dbqLz242Kxm8BoPCS6YJEPU4X6aRNfk5dnCZb2g5D",
  "key11": "2SVnpRcVwMg6utr2L57NWUz4fQcA6atXAVhMt3TkBSjPQ3L5ERZUXkJKR6nnz6VbE1U6Y4HNAUDefb5SdhZNgohP",
  "key12": "2u2xTYdfiX1PryTe29BGPWcXvFWAcgGu952N4jEkFX5RizxxWgPxmuCV4bVo8yLi8sbSiBXshQBJ8NDq62Zjuxhy",
  "key13": "5JRK9DyemCupo2db4NmY75PTZKYkoggK3H645k1uzs1219G4i3y1XwuRpLiHc8Hm1gXFeV58DHjJevy7ktZWaJsz",
  "key14": "xqeeASRumf46K8SM7vPoCZXv1cxGPjQjQfNtnRy751REXrumKvRtC1iSDnPH2AJSfbR3CN6eTmXVcTrsAj54T4y",
  "key15": "3ZYnzbNvoM5NCXZXyF9hmFmhUAe4frii5g9m7K7p6ksh8D8LFS8VTnEqYdFq6rGC8N4TCTNrPn2m3AwMgtyJrdAE",
  "key16": "2WYAioWTzxn4SeynNrKFAr5BmwzPMhwenwgcdszMbiow62FMWcsRQ4rxCuiUaWXUV7pfnTWD9cHt3PpvwF1WDziN",
  "key17": "4PqeC7ALB2Z6CzY5Ad2TJYG5vsMUthmJy96rXAsiVtB6toAJVzenCFYE3jgwYXkRqutE4Qk8CrWZix8CzQcy8VPp",
  "key18": "wnNtxBRPzB4KMwES8LGniwc4p5YzkLw4Lyh7ogdQ1hHryb2ashSQDF9LsiQ3e33PuMFeyNv7UKNxcjeBsZRd73f",
  "key19": "3ouZLLGZSxDePwucrmRoVdUTUifvBwJ7Nv4veaQQoFANVry7NG1gavvYD9FH4EyXpvPmuC2Rt6CRA1TdD7fHBReY",
  "key20": "5dDwVg4AchUT2tXeNmuqyDBB2DKVzYwzYfN8SeC6crGjeJJZJWua4HWQV4xDijxCfJNjdyVzYFxWZGUsTD3zoEYF",
  "key21": "59qjqkEP5CG4SVtGwEbY7KBZZLUnd6qh7i9jzztadhpZYHegGPLK937Tdq5y2vAyW8nBLi2Wd7NGC2w65T3MrWMS",
  "key22": "5TPBnp29jQfG3Ln9b69GiNASWcZPDpipNheSUd7nhv6Ge9ursrciwsjg1Mx5f3e1PyihkHwoPgXe4h3RxTovsnSd",
  "key23": "3azkV7urUgZW85umteN2VjyTMq7tvEzabfWdys2rweWmzHdWiwo3JrDJ3s4kkZMgQXuF4ft9k6MCxAphQ44XButP",
  "key24": "4q5HjU459PPpDPsMJn7ar5qNUeVYe5nQMaj1xnqLnJDFc5umm88PwGdow3G15W6GqqiT1pLLSyGR4ZFXp4qXAqVP",
  "key25": "6672HrVquykhk4D8DGXYCFwp4ebfcpxoHsiims2rb5vgAtwjv5XkGkahyUWvv7So7BruKnzTKxBb1P8Y78V65yR2",
  "key26": "pgensDPMfj8N6GZkhxAp4ZRmmj6ebkUR6F5QbzScffmGEq9rruRPoVJyNnKfhjSFbqRkYHEdNVYqxX8YPyyxRCj",
  "key27": "4F8vj8T4P9dPCsSNKiUa8ayZ5CCdgYbGUTkrp9seVB8SSJ4S9QQ1dQwccWpKudWyy55v4HqWNrSG5DHR7FMx4Gjt",
  "key28": "2kW6yLnnhJpM4XZkjxy5gS2pBPXmNr3gH732iuJshvAsK2cpDuc9GQNkFvBrc3zhzpyRpJq9tk9J37QSc7NR6TWu",
  "key29": "3eBiBHa9PRdwYAmFegWg3PZUm6Nz75YxsG6GNTi6vgCczgBU1TtqpSZceXBMfnE9sZozTZ3935QWgK6mojBEHk5j"
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
