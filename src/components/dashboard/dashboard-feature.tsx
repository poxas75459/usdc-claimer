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
    "3y4ruCashyQXoEo1Av8wt89NsHhfTcCnN5YfmoPANFpWLWsWBj1xTjz7H1SHsqaiazCFHRpFohX9gKMcV3PGPpe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gu7xnWBFZmsUtNUofwPfbG4rdQ3BPGA6H9jDRNgHThqymzk9KMDcybPRFeL19nT27utz5dmynSwx2cuYhb4DjXW",
  "key1": "3AuTvaPFaSxeiJwEPpN34HaA2iCbWeNgnrYCMJ36PUN4NrWMruDDHLfL492vaiWXWLE5SRzHcNAYaCjEEFm1Zx8s",
  "key2": "67G3rXuGiP5D7218VCHcv4SKggCzf55uKhSuc2ExCXV6XjyqaieWJd6YattXjAe7UqxQCDxPyeNkwiNYBRLjttkh",
  "key3": "2AwqpUZrs5xCyxbmF78cwRTrqFDiGmoQLCz1GDAPdESu9PZa5BC7zg7phRBrkh7B8a1Q7cWwjRyv7XaR4HBLSuAK",
  "key4": "2fhD3U35wkZMnUHMFeRsLWssTebNQC48o8kcdZNkThpar6eFNqZqKsVdkY9oUaEmVRGfepovdMmWi5W8Zium3gnB",
  "key5": "4uZG6dkfBj1a5CAMPEPZBgicWZHmLqEcPWNTZn2Hu2DV4oWSoe7RyRbqvsbT4uKVSAi5on5ZhN46MnvhhSPsHccG",
  "key6": "5W2c7P1hVEXhEeSC1ruA1c77kxWJ2Pj2XjuaXHXoXBun3XA6XQbeLGp1XN9qb4VKN3imvW3noqgHz1NA1ayjn83E",
  "key7": "3QC3mm7zbZQ5SkfxCnGNrWgzL81sPmZ3nJuyMiQ9nc7VWw5FLsc6xn4qiKH5eYRVnnM8J76vZ2pFHTdoyG1EUccS",
  "key8": "5w5jJGVJ6p8KSrYrWDs8ah3FSrtdzyfqRQ6SGV5Gf5Ldkso7WMDhTniHq6hfBbqcUVTgqwqcVSnczxnfn7ugseFW",
  "key9": "3qupnWmt5PFNbadLPBq9AQ4bzcMrk8g6xGbovJihiYVFRxkX1XERwGCjbGNuLyYUH1ww64dekm93MK4xeD5GHkK6",
  "key10": "csTCsY1xDis4G7dKPNrJKgCkCot3G6UmtoXDzgxCF2AKhF9rCdL9cUpxwKfkTVxxWmhnvRP54nHRLVMEktMncSW",
  "key11": "ZTePBwRJfRaKrzmbULEmZNRy6YypXGWck42Q8QsKLXNB4aB878j3RF7YbUZFupJMkBLSeQv36t4Hp8j6cz1QrAt",
  "key12": "46Wd2ctCVFC8NcD1F1ecoNbGBki8zVZHcrc7pYSbJgBEb7Fs7deYKQUHyv2juWRKuzieG1cTHXzX1gfs5XnEcxsL",
  "key13": "38rUS28p39kiNqgEMTSGZnCEWdkkz6RXiHmyCGWPwUxYVHHxxCMSWukjk85wAdLgjrkYTMvJpG7iz35DUmdu7DW2",
  "key14": "3ReDxoHpujcHDsmq48EJAYUdBR21VKD5LLMmS2t34ciZfX6xGUfCsBXCgoo295fnDRezfzQUjjQnt3CqomVA49aQ",
  "key15": "5bi1zrMuW17JFrruDvgW61hqk4t2oe1jRYGvzGZAALzkjF2fHZBFgK2E5ALHYusw2ksnyrkFMmUjKeiasYyN7eZY",
  "key16": "5Ks2NQ4s168MWe5fCieFERrLJt9imqr1TSguV9DKaocsxcPDxsajrzPd7NxvXcstyFQsChbUj3KATpnwUiCbM4rT",
  "key17": "5XMyny2tqhokyfAJPTSg7kRVKxLfDANKBiNEhmb3T3LgYJTSQgPV5PwLS9Krkf8EusDx87eJgtATL48QzpuX683i",
  "key18": "2HXwbVmB7iaSxRGXVrFsjRB2dhRWpA69sG2TgSJmcgQu9SbyWaE1EA9peEGeZUCNB53qwzxA6jXPbyKPPtaadfLe",
  "key19": "2qgBLbhta5pU5PLGahLueXb11Bx38pqtopuQoQnYFTxi42bTZEh5G8wYHX1k3wkyvM8SMYWUyq6FBQC1z7kC1A7a",
  "key20": "2PoqQyVaRAHnr68MKnaxtW7a5sXvkbHYyxLTLh36sk65p86RcctNZRa3Qf1Lp5jcVtZTbjKeSWYqqxNhDBqskWXG",
  "key21": "QqJHxLMh2tVACeCCnKTqLrcWwhtA6Sdg9ATUESi2ZVzEsXDuMZ5DcAkt8mRh6YreoP9Wpwn5FMqt1unAuCEdu62",
  "key22": "3wmoj1asjiaj8vcLTJxVzv6X4xtVvd3kdkBevjJGDH75awJcVwpQZuxzTfaiquzR8rMt6JN8uaG5UWKmYubfx6u7",
  "key23": "4MZ1sudaR52KbLQQSX5LEWLKAnSL5fwSJww3eJG8n1oqKePwCGbCRejssA2DqHS5ipLLBws6D85XrK1Pie1wBJjJ",
  "key24": "5aBnLFH87R1KxzEou5R9fivnJ1y4oYnDQsdtzQpsH6qqrx8QLtszkGUmJNTHZzWy7Jbe1dsAiXdLZPHMfG43Jpdi",
  "key25": "2ffU5Wxqp5xfbhnJRoMnSfL8GuB6CuEV2nU8hoQqGdpaHjrbHc17VpVvEdn69xbSrwnWZfJSDMU1RTWzHjaveq2u",
  "key26": "56w2A18dXbjqgi6z6Dru83qP52JwDd2eMZXA7nWpVn7KGjmjaBqyGdS3m3scTpNi8pH7WnsbcKaE25621FtPHxKT",
  "key27": "MpW8iP9FG1DPJurqKEnzjtZtUTH2WUZ8BL2YW6oFSPJ6Bjkw6PgvGZHdi1udUeho1KJxKTVBgbcb3sJBcAYdshp",
  "key28": "2g6bJqWGWF7EtAtaqG2svyntwsg7ruxpTLPG7oDYrMWKAFKdRyXu412vqEU2WMbvQFEoUamgxPfdVXtprySo9sL8"
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
