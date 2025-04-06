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
    "xR82nMDrL9pV2VpPZf3YsKp5fp5AuRQMzpumqdDSMCJX7zb8Haa3Raxdbuk5aiw4VbM3dy8DnXtpwPkSchTpWDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iwh1xLkthpGWsgg1iCsnnF1AtUrPf3tDFtxcdijYmLZ9o7Q4dfNA8YVXK6RJHqE9H1hwzYjFu6UqrvyEQWvVNt",
  "key1": "3kErzdLRqJqFLTKxjp4Qhoi7bR82pKWgkUm5xrbqq5r8XEDpFUx9gQVjs19bFhnsrKxiNCSrsshaDMhvLzFVYwDP",
  "key2": "3SNPH8nr6XX63n5piQ6PtT2ZquRq9gcGmSwiLyY5eRXKYZF6HGWJBxwXTsCSdtfSC5DJmdozfxzAbvahW4gqZCug",
  "key3": "59hx9boVL1jH82njotj7TX3BaRHvPRZdt56HTCf1w1JeRU5ahmdNy4ovkisQKguxsCY7J7QQ6dgVoFVv5LgzNLFv",
  "key4": "3XBYrqD9XWr7Gfb8SFaZ9CAADVqQ1Ypqb8GUGE5HDm7R6vekZqDVjeNuJiu9ntgXvWoCGdn6eje8hi4mzibZqcXH",
  "key5": "2jfm7Crhx74JbiLCH4XWy5LtRxnFQ6h1vuwQCzM5UbRqegLtzV1y8moz4osvrf5yAySWdjr5fZyCV6AVGZEMv9AS",
  "key6": "4rhYx3PjeoBoDNrMPh1Bvqxrct3fYPxKcJWohsqZwbQ6gG3ZAY373ocDz9wtHsukX4hpVvJvioq6mQM5kRPJkRLb",
  "key7": "5mE511AHA6RYpVSCwyEKcGeBzaoLCFxJtsTkV1ddDSYf5aeifqLyK8ug1VCLgJbMQAJauuxQxezCQwfYG2dirZsv",
  "key8": "54hbZJbSuCoaSA3qS9EnqE2uSTUg91CAxuRWcPSDNMMzbebD9LzYSdvygFatGQi2VDmtnoDnnDoX4vAbmytwEJoD",
  "key9": "58SAkBGDE3BD9A15fHxwXUf7Y6UABmyC6f9f3FnMJrQ8cdZ3dQpR3a2DhpP3UWGJbWyQTfBN9jew7nWXb4teHXof",
  "key10": "LZjw2o4qrpyt8D3efcaEymDLTU5WS9Eg9YnSd6QDgtWnoqz9hWKwamB5FikYpsHj4PM1KEqHCGuXMVccKTLeQyu",
  "key11": "5a9DNSBHUuReEUH1E8Cf9CcwWFxDs5tqC3JBPhvrR1vvYAdjEtu7rFhdM6niiKSxSG3mfVfEqaNj3qMQRdW1nUus",
  "key12": "fRAX8xmqM6Aq91uhCh1jyxVSVag8pB1jodgdzT2Xx9A1uhkXmUNFUGBcCSCt1Mjmvjhsbei2B5KcJYpiPnmCtXi",
  "key13": "ChBg5KDHVjfELNevmiNebcet16rivJsDUowVtZMYYhabmfarNNS5Yusx7sK2Dvyx7nob4FmHRth6NGRJkXy8Bpy",
  "key14": "Sktgwbvj3VudeRc97uqDiFFHNYmDhLdAVovDjeZTfAxgDWsTzMGoAVHHLEwxKtaDbfVr6G64R3Vomb7FBVBjB1H",
  "key15": "5zGVMVEFSyoyz8MHZ87J9amSTxmHa1qgufVckrGhTSGVwREwXzKVCx3PHMDbT3QQUXNqgQGGnXqXS1uJgwUyTkXu",
  "key16": "2hPWX92C52KRCE7ouZRK4Xqj5mGwnSJEwUyW3zUCcztR6DNzrzgFpkUiNUW5PBECrdRPUH4FYaFxYYU4cFbn1uz6",
  "key17": "wDV3B1AT2DNRvSAmjutb4TpnR9Vrm8Dx4cXP6qqtgaZ6fYnqQ6E7JYMRiuY6v3BLLQjifvCmvcbnHSkkDWUriMr",
  "key18": "3NmsEjLUCwDjU7Rx67N4gF5JKNQjQmsTyjKbHL4ZQW4AGj7Q8C82eu3MHiR3rqstXVmjWwMaW7tEhPuNKhxEm5uf",
  "key19": "fSFhBYAjQTqXBV3xggdFbPxV5p5cCGoNydLS1T5kSMCGUHWFxv8XJLaeP7rEaYH5LXxot55oVHmEJbNarE1BrDz",
  "key20": "5wUrZ1GbFjzbdxyEbB9LzFRo4J9DGhLmzFjzvtNoRjQ5kvhznxyRGXrssAF4x8FePgD38cFVhHTu4cUQicUtWcuk",
  "key21": "xCqqcAugxLUjMWANFnSyQHWfPHdYnuLygmAFc1todukAPJJxRz2iV9Yz9E3PmUWsjUHZyiaYvwrTdF1nPyFnF4a",
  "key22": "3mvCEQvBuEXxqCT9U2s81vKyBbpaXJXUsiYirjDNkZ3Y87UL6QADZBRfFpZWj6RGz2y9jVC99rrMiwdP5Wsa1eob",
  "key23": "3kp7NuRWF2gnh3fFBnSr4CQneyyEssHnFGmogaztod6KqCYztEiyC5TiC6kcCvtDMqkisB2NHUEGukPnxRNqpsj3",
  "key24": "4Voa7wwr1zmcPy1ioSmWE3DJQuV6RCNhDc8ar2LvTzT62UQHXcz1WMZwHRVqJFXa4M6B6mcrSWHKoHR3TbFQ98q5",
  "key25": "52pdssAu7fUm3aePUfN1kfbMCKC9hC1Zjsi9jgxw11GkqkeorcHwhfmAT8g4jPGn329LWUuD2pAxieuUfznuMVuC",
  "key26": "sHADbx5x7WYujoc7BgntN7qzs98KxPmmPFJ3nZYAH27zznsVFupBFwNRpSWiKczTmX7DZiP6YehfT9i2vqY3ZiH",
  "key27": "3nibsWDaxCEvE56qFjkgShB9JSvR1ZBP1gpWL1uUU9gZszdh9zvNnkzPNHoYq1HrXtChAXrZMTZ1RxgRxdnwAcBN",
  "key28": "5NbiXgTjv9ejTctXF3YcixbbMz1U9GUedhat6XNDDwVsEgVrfPP22XqT3s2cAh2GDUuwcprbsdmnmcPUW1Lbjctr",
  "key29": "3yQpqVwvJkFxw7XqvNaXRBjQRbGpWLLQM7HovjrmW6JQrLTULk7vBg6XLD7KvQrRCpjD6ALMyjguR1xBsGe6JyJT",
  "key30": "M6uxDsaaVdvR7BpvLgQtauHQssauWiyWbctVstKDPNcCQsojLriP5oazywrJCCr6c6jvyi7Ke11fu8hcTXcRFtz",
  "key31": "4ciJNkLeo7eygRqfdXKkTR4hV29PiVC92RGZFseTR2MLcjvbzu86vt3PweTsn8huGAcZG35PW18dDkFFW4HSQ9Jq",
  "key32": "5Hxx54aF6gZe1Sm11X9uLjpGQTufDxeGKXBMTNu3bnQEhemzaaTkiGytHGrpcPKaqSY1zjKW3ygfxv4D5m6HYmWq",
  "key33": "yXxSWK2pArh1UwHfJTfWdYQb4s4AHxReb8achggGisYqAd79CpwNgqE3fCdXzBAjaoBd9BePzjadA4VHkS1tV4h",
  "key34": "3Fkj2oco2US4RRKzjZEw3pfznDMDQefeqt6MNCy1dgQa1PciBQWTsQ4e8iGQEpqyAseRL4yYnkFCx6VNi3r3K3Fq",
  "key35": "3WhQBNYcnmSqkPW5j6pJiKNA59JcpGajh1JPetpsYkqkZBnXptXcJFbmQCwprZKZ2ufhhtUMkQsGU6v4eTVe4nMU",
  "key36": "4GTRHGfyxGkUyAo8avfdgPfdpsMabh5koihCAhJgtywEda5ESvKxQ77ara6AZ7boKAGbJBXi4rD7HHrSPGVZv2fF",
  "key37": "Yo8QbL1iogm8iySQ2eVFX4srFXGJQgUuCoZxyAN6tCuiZDhxFxmEodQRTmpjjpMF9MXx7iwtfpDXGfubo3rGR9N",
  "key38": "2ZzTxff5CbYxAPszXixUhLTkmNYuhcVKkKBvi2axQ65P6Smv2c6gRxL7r7sSKY2tXeUW2NfHPq8U2W2Xm4TnzJA1",
  "key39": "bcMLmq8CRGCqrZZMnqKZ8jCUBMtpVSGzu4dcbUikiAgdZbYn56akg3CLFcqBTSCJu8cTBXc91J2PTEqXDc5kH1F"
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
