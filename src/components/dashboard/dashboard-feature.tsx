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
    "4Qka4jPSwKUCeGpQV1Lar3Zm7SiUrLWbfUJdPyDZEr1r6S2FV8eB8GKjs9LzuYNLY3EzgZGGk5Ly5nt9Q6ERY4g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUGZtXJEA8kSRAVUDJyKKghSah1JkAfr78YUP2itqiHFMpXvAFqSqaroYYyQmzTR3uwJt6oaSV6Qc3xfwAGMwDN",
  "key1": "5TD6nvycZXyK1ssY9x94Esi1sCx6KE2sigqYvV3Ysyb3a9Zg8czcg3jPNQnPMkutgsTcN7ro319igfq1irseDTtW",
  "key2": "5gHjVe3LkuTAFYsSTRWZTd4qvyorsSaZBMSy2wn3EaU76B7Xgfg1ar8uz84o2jbP5FRuEbXzj85sNRmbxcYRmu6u",
  "key3": "2XjTTMTL8kvMyHNaHgSDC9wDMKNamW2vAKUd12mSH8wUqFn2gyZ39DG8cXNZefUM5mZKAQ6JQqk7A8pAf3PWUaBr",
  "key4": "4P5h22t54rBX7p3nxR7hW2xgUuQHvHUUpu5nJvQ1txaPdqzimQmpXepMrcQcuD67getbXZvDRhvAjGBF58nBkK8",
  "key5": "5zEZdZyaiDFLQ9dcbY6NRPjPH6zw7smsdfQJzXi3NFgsmERpNbYqWMn2QACPpkH6iXX2pJRDerDV7p3iPXZoUdJV",
  "key6": "3ppuyzzppf3wzrJZx3J1urX1Y9HEPhrvptUEdXejdtLAmryodCu5WtGqBCpmDj9jUMMzQLdbkLpVstkjbmD7bm4D",
  "key7": "5ppbAVthPThMNbtDZyfUMyQzAvf2zpoLcJwHVoTzg1qCkAoVXA3x9dPeHJSHrGYK8BUawabv4BsyM9kvd4Gexmdv",
  "key8": "4ftyDvjSecLYUJWBgQpt1cmd2oz8hJvBZ871cYcNkmjmpzCSrCfwb2tmxdMYZBVeuQ2YmnHttTk27txdR2N3csdF",
  "key9": "32NiVeKPFZFrBGE7QzsVgdawuoiPsUFqaVomE86hw22ti7YbkK1AA9ZkenwfMETgGnuciBioUTAsSKtjrxQAevjX",
  "key10": "36nFzSbnudcaaczmqaZqkLFNrqXmSjvYrYziDzCLqrBMe1iZMhHBfZEk8twnB8n4wy8jZbhRefLGtd2Jyc4uHGS2",
  "key11": "i8M6w7JXLPESTZvK7b4mhuzgfU9sSw6PY3Ldan1SJbnAMiF5Kw1NYFcEvCitDvidPymShyYq97jyVE14B4JUsb4",
  "key12": "4aQJ8sgPP29rq7trjnogJYproNDPUnZiut9gv2m3mbkhrE6y9Sz5Z5VViA5cnLZ5eXfsBDzJCzLLMDyxu1E5brZz",
  "key13": "2YNQbWuBN7VpKoX9MoC3KiuvBy5fXeMHKwh2zabY2VGioXMaAkBvdMyvYpmZitFe8rqP5n8TaeN2qT6pb8bwDVZd",
  "key14": "GehB8UYr9j5y8fJvKErwdYFk3Re8a1KBJwKr55L7qqvkW1BsnXM2GEmyET32bc6SuLnjVgT3BHqpcGQyUyGDLjt",
  "key15": "jztYwwpqmrSp7beB7HSkjbcekwszCkjbht6Z7Cr1u4EAjukXe1GCKz3gfLqQ5i56W7dCa2M6ZQyrj7A6xKZ3PaE",
  "key16": "fTi7BfZmTasrY7KSZAgRk9y9jdRA4BZvycHAP5d9LtpK3YSsoijyJYKZZo34JU7fHZRg6kThMFeisXbNznDkkaM",
  "key17": "5Dbp8KHqHV8NmrGG3EJKhSmY95K3EzXPBQTMuiEAbsk9dm6F1fYCYa5yKR27r44kjBvpTAAVVMGhrWTdPKMah8mq",
  "key18": "NtExB9H9TDtTZrEMTrwPVtCE7cPgSvKBjA4hfiy3s6BoDARbNQuKjCygSJN9xKzKHJVs8EmsTiY75TVBsC3AftE",
  "key19": "3CsALEqFMRVs6Bgo1X1aRo2ypsgxq2F1hPqAYdzYiGE7v8TwmHDKVLah6pKTdhEu4NPmifAus5trVHPWpwaCXkHd",
  "key20": "2KPJYmtwAzdz4WNCpZ78J7zxXzdnjNL12t6tTuvVpmVgzo69nNFYJkBUUe7K99bmFCDoXyLZUoraRD2nJgfHU7DH",
  "key21": "2v3siwdpSizgxyf9e5N1oDzkUzeYGk842PuxVMYstPtkcmtUHDpdNR4LniH8BkK7htjwCgn7syAVJjxvmBARvNre",
  "key22": "4oxCMUMH6ccYcNwXJvokipqq1YajjbGU7MRXau9oHx6SGwoKpSDEQmD43EDjEwJfSm89kexF9YmytwDyzKVxkE9f",
  "key23": "5waqwKw2D4bx8vTHiPk47T92Hwb5UuXEnamF5LoX8hKfLPffhMqPKa97hBnpSKaQkGDpqXwgbEsfmciFdCMQHLrN",
  "key24": "oHTf66i4fSdgHHC6xXG3bgVPt11zHMVCKskDefPjjBayCpreZ5TDwn3gAgNjxiGALvtHHCe9TsEmTnALpg3xwjp",
  "key25": "2MPLybFr8e1WMkqSXacYXJPTtthNK4B5qNTt4H7mF2raKAC3dNgr9gyZFHsL4WgeRf68XE8fq7qj5WNoSvv1KiXf",
  "key26": "4gVc1bznQVpsjKavd2EEbNvndHhiYA4jFG4DCCYu2uFFTqp6SJ4PauVnHWRuhYDyXxvzkfezMMUhAHEdaMZC51gB",
  "key27": "625AzgsaKunZk7D41TYyMJYCHweRapnoxaFz6j3d6xge2FeppY8kJpJfuKCmHWAxJjoQ6bveU63dQHG2RtPB7EvD",
  "key28": "54YTNiWYj1opH1eG6J4aLntb9PFYs5wTSjwWJetYaF6yWTkqRqGL5PjcTrf5azA9qKY3rvubwLwhVtWp4ZtZqLmd",
  "key29": "g41xpjAn6QLFhQoY9Tvav4XcagciN6sjfMPWKcMu37jxq7EgGA6Q52i8rhj7M3UrU1EUNSJwXENwKC15Wz61VGh",
  "key30": "5VzTN92C1aBbSTVLAzVXvGuRRkdiusSygb47exisHJQUXmJtJb1UovRw2cAwAUK2hBkA6RebZCXLJ87ig9WKXgWe",
  "key31": "3qmsHHQ8b6dKum3JmxHtvRqL3jJGj9DcnwTzgeZsEhos34nK85gMob18nq8DpCni6B1LqcbiPp4TF7bKydXTVhQV",
  "key32": "3Hbiqk7j35wWg6C4tyGLJFYpnMWFA4bCh94Ni5ZLyysRmsjZ3dXJunmDHPkFVp43SnBVkVETf9L4k2B5Q8fF4taN",
  "key33": "46cAETVUEzuJEoP5UZEnwNzeREuZCchs7V3TiUX2tiAHygCV9eG36V7RyGCJuTVx9XhXXxz6Pwx9TBwHSP1vfPUF",
  "key34": "5gtoEdaeiPkP7qpkgVcZHwPCztdAzuSiKqFXU5H1weacdjxEgesAVVaX8wRssionhZEkgn3j2Zwxm3DNVDZ4HCJU",
  "key35": "42a2WxTippXpMzNwPPGuUgT43dwvBvhhRBKWGssgymwvDV9kUwRxYSx2cFhvHA8EhX76TrGJBXwJ8QYoJ3p3zfwA",
  "key36": "3t81msj1eT4WgztYJZgyit9GaZcMdeAe9xvJuXy6WqocYtxiWBehZyju3gnNzYaygHLmp8BeL3w2r6TLXvJ61Drd"
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
