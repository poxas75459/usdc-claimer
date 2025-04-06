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
    "2axfwpP4JScEoQr5se9tmQ7rne2Fek2F3xZujLndQ8gbK6J6D5VhuYxCu14EXLar6j6s4T7PvNvAb3NfykrvkaGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aBgGFm6PebtXeRa57tfprPdTu39cNZcrEZuPxEPj3vnp7GDzgRa7EMASRNAfbnzJH6nk6gYfkja2K7pVejjdyB1",
  "key1": "4ZUoYdx5tBiyX4caYZZPjqbkTcbrrPvvfvhyG6VQjQjPYed75QBjSkR4cCwV7gUWoa5hA5DfkP5U256H1N8JQwGX",
  "key2": "jHcxQRXpHqGsd7yary9a79LtTDe4bsa2p6j5wugHFLAULCsQxa3ALJGfA7PUaLxr3BUEh8v4azYk2aZEZFgAYUF",
  "key3": "3MBxo1tzpeBRW6Uh15DscMEnBQJSTHBVq7FpEYqNCRbpXSgizRfhFMeztqkQ2WcpLzh3V8mBV6bo8jkePymAcsJq",
  "key4": "2GAftreecQ4HLdDc6rrtPNgke5yRaUUtSVnjszZKjNYmkgk8L4iwpcxBnFW41DXRH6EoPfAJ6MSRoKCaaCfBwhMe",
  "key5": "MheBnMb9aLm1LUsRXKEodVwJ4ZxnczhecgJiURa8rx6rmGWQeidaLsLk9wcBq5MX9i2P2C6RzyQnx9nqBu9iBYc",
  "key6": "4QzWEtwnrsV9WbsUFSZJPrhcf7CyLTkJUGwvZ86zq3gcDT5SxKCCHmShJZFC6jhZMBZsxe3CUZmy34vzczDsPjtA",
  "key7": "2wfxyfx2dcSWYVEeoS1eM2uzMfHZW4EXAksYBhdtAnaYXSDqbdQQf14JxA5R7PDxwzLtWZo3Pf1Mtt3Zwe6g1F2A",
  "key8": "4fxzMzs737bgyEYtMWnndhNumMtWHHV6Ke3Vjxn99QmiZ3XG6MN7H1dREmYJErg2fMNCXrB13eUq5WJfC4cqXRA6",
  "key9": "24gr99ZmXuvb59gcm2GNR8qNmZiyhzuSaENkYE57QjLpS5uDrk9AwD1BZhpVakRQfmnGT2bH7VLne3FcVLigZRsH",
  "key10": "5Tjgzm2aDxPiCHAW91j9jZDgrK9zeF4SkijxBcMW4uwV6z69FxaGiRia9m6VwfG1MWeyyBzwg6iSZ4cFCs9Be8cN",
  "key11": "28vvWFuw9AL8rvcGR946bopBLtHQchhhpjdS257Ny6qHFteLNcxLZJaV68ZdhtbEgwRLyvzFdN67euLYLuR1tkQv",
  "key12": "2ZiWfeopeG5UP6kQR1Gm4jLe8hzuctnePFmVsw7hE1PnVmyC5tdkiUgM6VFG1j2J84RVmMutEKEJbttPRsj1isnG",
  "key13": "25hqmzMfdqcd9CgkcJSyZfY6sf7tAWGP9q7NhFkXaNqXfnyCMREaTEGqXA4GGKLGfDRjReUMXnob2wCJPs13YZx7",
  "key14": "4WqFkBKiaRr6pDYrgNdXMvPqckULEsjKWWvUjb6JqXzaMwtELn43vGCRJsoaqaUEfy8UWXdXeR7ABxfRL79EFLwk",
  "key15": "2akU1ViizBtQL6wN3dTRNwprWwhyne6gar6ghswAyFf1Yd2MGhBrZwYuvz4j7jhizCoyJ78qEmL9UAkTHY8iq8CR",
  "key16": "2mue78Zuk3Wz2yta9eCGERjgmmRzXLyTLC7t75ZzLBr9gzxmoGrSSToxvACH76nDATkJ1txW2hjmnmKP62zq8kph",
  "key17": "3TpkGRxuzdLMoGUaQfPtWmqWqT1SMZRJ9M9Ps4oYpEANEcy7wHfBM6rGJ8NULXTH7QwnD97PuLYaea8N6PMUmLeG",
  "key18": "2j9xW82HWoPHSKSTaa8N7DqHe7BskC8Y6pw4XY3u8pc1ViZJn4FousHajTmJQCbnq9yaJbbBV5BiDqxu9UjsSDo",
  "key19": "5XsBuVuaEXqScCFXSV2Rza6CgaWgEckATrNE6YGGJ4gpu4m4P8aLqQH2PfZnzPn4qXq51eCJ2Z3j1BNmjGiQNEqP",
  "key20": "5m7emEefjnqDvc7Eur4Gzh8S11TwjGKiqkNQEVH2J9khxYPgszomqiGVcjKLJEVt2TEM6s4F5vcx8WyxP9wPC4Z",
  "key21": "5bJ8RiNmiRw93P4diY63Mni5S9efeRPniFLgL2RByK86aWroxMZJSD6UYzpiaS9V26KQrBeF5L4vEAfTGV9WrtdG",
  "key22": "XZ8vjJEKiEngNd2FU5yJ5YUvNGVe3KQCLmFQRnbxk16d7eyKgazKjsYhS6eigC7d9RwTnfaCADKRDYtEEKSSdEP",
  "key23": "3j1yn9fevTAU8XXH217W5SGQrYSXZ5f4QuKRtmjTH8VKSr2rGZo2AfuCiqWtpVEsjhJpiSzLLcC7mZpgNpEVzBaw",
  "key24": "3YgfEpSETK7K68aCZR5SM34rWgaxQ8ca8GjXXcLpYaR6HRpPFSHcfMFmNZWNonKUKsSigEXHxjTBvz4EpJdRnjQg",
  "key25": "29DEBCYWDqL8Ew98yuCHzPeLou83pvc7yS55t4qAcy22nS5tY9F2TJaqYT1w9GdhwypBWCZpDpFQwdykjqjStrB6",
  "key26": "gH4n63QRdtTwn9uPSMCHgE264ZCHnpnhnmMvDyr5YdxqWva7btnX84hHDJB7Tz7kTx845G1jzexAvrTzDKcQBZr",
  "key27": "3LUHKZH7wp1i6MCSC428dtqnDEVNKhZBbVUD34PSpYyTwVJKAa3z4LXKAnR4ARhZh4rddUzRmKy8aspZjuopQ6rs",
  "key28": "J8R8jgf6F2skiXK65o7KSCWmvGMrHB3M2YD4uohiMwnHZtKqMPXAuPVvGCuWS1ftPSFMyYHrGmWaLGdCXbkoiwv",
  "key29": "5S5yQpGsDvbcHthfh8xVDfhwDU5tSAQS2pCTsxKGGqJNedJBRRswUfqvwNPz3LNQwiqtFmqu2rsQGSL6UcwP1t3X",
  "key30": "DAzAPfQgCComz3LEHT9L6wDHdnMN5K3TyLcFwRNFxTMrjgTbTLmaXp49UmKq9rneYriCdPjVYxjDrofhgHr7vaX",
  "key31": "52g76CzkYPwZPfmbAJPuDs5oGrJTLQ1HkZJ4RfAX3haDrKbjNrZzeuMPsgnPmRY4Kbqm9hJdLgWpJEXxwhsYEoGU",
  "key32": "4cgKk3CJkrsyLsmjkADqZkBdN8P4c31b8kXUjqxcfV5gnV5HVnjtYxQZT8u6MRMymrUknXELx869kTPGs4BoM6qz",
  "key33": "3SPLUVB4bY8vdXfiapuTi48qVFCTR4SmZiurcANdYKhPsgZrYbf4LZ7RGJ1t94QrMQuZvpAr1kExCbPoWBhwKXEm",
  "key34": "4BbfooGhymAwX6bXMUScwWQE3on4q9PSwkhi5ph45BANpA9TamuDqdtXZ83hXYPMvkYwrXE4YnvMQAzJYsqCZmz1",
  "key35": "dkjqEcAYGS2cageWX3swiJyuDZxfzZTFZBNxzU61bj6ZMjxijaHDoKzPSQriWyfkKNxBTGqTP7KtDaEvMcHPXVY",
  "key36": "mbiYpYEGcXTpALDLwEbKdHnJXLAdcnvG7b9XJYEXAxyR9WM6fW371Gy2MY5PrNXUEjWEc25Dv7YQ9RdLD7NVeT4"
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
