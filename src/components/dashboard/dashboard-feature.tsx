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
    "4H3d2VZDwDgiV7B2o1bnyEvXG8feiMLNE34YMQZThPFprJNKM5Dv6RysrV4qJfurFCspg2ZypmzWRRKnRftjzWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQWhMcPyNpg9FMnPvpgZbhXrwCUAEmt2AoACgQLAoegYvuNamk35G8MXfheRNFWZVB1LQqcVEKKKmhvRT4ETpcA",
  "key1": "4Qfg22nZZN29nvzu8rRD6GYEKKrWTVenKemtEcgCAejn452aP5ku4tsrgjAU3ST8az1nu3ZojCqAy9ZZfA3TobiN",
  "key2": "PNRWRwkqCTLSweotrTeB66JUPCoY1sLTDy3w1q4JAkhxVjqzNiPS3KuNdVALoYribUnncM3QwqdVmdH3HvounXU",
  "key3": "TM6frNdeAGXea3zMZA5nueqKTzwFoHZNMT3k3uiP6kMnwhZtyUi25YoqaNb1L3bZ64ETy1KLxZfbor42tisQdF4",
  "key4": "2kJQ72yGBBypgxjV5C8VRyznMuh6nN8r4x8QS5qMDRV9LygSnTr9vVKKSPHDnYS14Aiyy1ocrHvB6Ci57CQeGmNV",
  "key5": "cfBdsx2QcTxg74VJMmkNSe2FD3hUB3Sye7ESbRV696nykDiP6WdXmY5quniaBZPGH5yAJczKCGgpESBWRK2yR97",
  "key6": "b5Sq9mhW1pR7DVzdcsa5d6JDWxS3cyuyPcxymFgXMRGDDNfSaU3U2EZwinrvwiiAjyj4SmxxERbkRXzgMZdCw8R",
  "key7": "2Evtqh59hUSPd8XUjbxqzRG9MSgTYDy4VuKTkaxQMz2K5kVkTUQTCChQ5LbkJ5oFTEAarR4V9H1LarDYiSA65iUz",
  "key8": "3KwGniJ2UmhcGtYiMjbLq3c8jdvczT1hxFjLY3oaF3FC4spyC3rXGyua3KukA4TRNPvFHsEFBSN4iyjcAGqjabkq",
  "key9": "2uHYn36rR8D4QXHFeYsxrSBYKgKQPoCWbyyWb6bciQaygKmVaiugAmUTfYQMhfdFit2xEQ9yRL1hiG3N4MqErVGn",
  "key10": "3ktAQ2989x6SCfBHbYns75G2UEG2QCTEsrWjnRM8DhL6CprTjdx3BTCZgacLpC7uxJi4uSyedppHuir46wzNeWro",
  "key11": "gxCi8YUto9MJ7zMfYRPUGGxN6Urqu6LxPdSmPnvV5qvjRZgErJwRTCgFLu8hWxkYtmGyaVk1PhP41xD3HtxwXYg",
  "key12": "3QxHSiLmENTkEUMvQuZmFEawFXLZvhtpwJrqZEtFxo1MRHv6Ld1wTNBmkGFhcjCYrhxVmBGjJYDu1GyTdRYdHwkx",
  "key13": "4VKMGWdaddoG4DUwCzwcRYf5k6EpzGrf3jFh2G72hafgm7SNfeYs6gqki3xBHfs6Hfbt1eBWbLJyrhrdwEZa1sfu",
  "key14": "5QigKzyeM4fpqU5K4moPbrAW8x52Fx5BUCj8K7mqfdQEJdMq3uYsvZPXoMGMjBWB1rFDGA7P3kHLTVWQtJf9KPMc",
  "key15": "5yzRXCwm1xbWyRxiPE6kSKjBtsmADLHBtvuJ2QJ2huWhDM1LkMP3oTjisf4vN2ghPjNgPzv6A4X5A9sxoDFsT8z1",
  "key16": "5LQr1u2kZ1NvxvjRhXQk6A87dnjMomH2UUGE6V98ADNnrP9obyJiJJhtoKDBM2XvMDDshSnpGZbEZH7XZLCHX1T3",
  "key17": "2BikzuSSY1SVCuGHxfB7ZDMS2YDUpMG5ddnHM6wrmixGMPszrSwCSHXZKWdxNx8LS65tfX6ekprzjkLW1nEyXJnu",
  "key18": "4dtUbnhTME7UP3MRK8Hx416xgRUSmsSZiKJ6JnaZaffJNNH4rx22EvaTtxRHjFX8yWBwuRjzUAtq5q5jfJT6QFS8",
  "key19": "5QG4xdJvJqVDW7irGvE6j5oWxMs8d432r9AcFtMZJjnMG7YcqUFr9Hxe5oWfGnVf7akpWVu3WTBaNFSXuDmYz6c4",
  "key20": "3Y4eH5TewkQ8PyrB1sFi4ZrZQyWmYvoXfNEFsSdXzBGeiZ31RBimqVcpJiXmd8Rngtp31KF2LSb989zHufck6CLi",
  "key21": "4uA8HzQDHq6WFZHuasb6oCXCP4DVrVQiUkGd7XsYMvbQwpxQ7hJcP7YMgo9aJsrWAYnv5qfjpnvsu8wYs45xnPeP",
  "key22": "4J6cXoiPDCCYACVHWSxLaT3AX9EZrpASKmTPorLocNsGBqg5c7g7vFTEFNv2nEJCM8n525idqBo149Lg7SRfRmgP",
  "key23": "3nfXXR7TuvCbD9oa58Nh2pMywGADo9gy2z8nZZQd7H17u5LCe1GQtRVGhsMv2pDXXZFuWp9sUQ9zkpyrudkgZibp",
  "key24": "55hBjXwZJhHJ1sKZDKJFthcswakeJh6ZfmLenAowUJ49qihNUhx34VnUEr6g3VQKjH3zyxzY48fJ7TWEyxWhXihV",
  "key25": "398mH9XkJNqWYnFWGmw8HNrAGoei6w3CMLCgwxQyzfvjrAFu8YLLB2wZKMi6daaSdmF5GKmf2hKqWfg3pTn3GwsW",
  "key26": "3MAFUuuFhEPKCgQyxMymJLKW2oxYaHF3byebAwF9gmREHfXhBVsy3UyQsL7gbv3WS4g4nGs16CB2QLoXNr5yXibj",
  "key27": "5o1ku2xth9UkFawxMvELMTKkfVUKbuhSi9VgD6BVsNnddKJvdpM1es5Dc37iQQJtoxRdtUsbNVkp1VFzmtxeRyLf",
  "key28": "2MeSnSRdU9pVM2UHtx9W1iw3JQbLtLFnEMvMLrxAZ9uXNsBygm1PT46pTS7BKQGeciRtdpC6XEZX266jYwASSiy7",
  "key29": "48hbsFyv1HnRqzmFTmzTiVKbJ4evbeievEKquSsecVfdyUKS16wvzhfE3FNezxtKwpC3zPmtnh9TGkbwsSKr6xM",
  "key30": "5JHPAGd9pyPMiPKQMZ4P4N2HN2KbyRSEEH7jVV6GPPwqGXYxtGPvuPhNEeSGaBWRCTbaPRgcuHJUiixJ5bpycs7w",
  "key31": "BjnBxSbiuhKYCaw5dk1uQ9Toy7hMowhbMC75BtFPpvnD9TGNS2HRpjPQfnj6e6sMFW4idUwggkakdEr8MC3m8dk",
  "key32": "2qz2EqRX13ec4n2cTXJ2qGHcFo7ZBBBDuW8bCAQV1ybGF2Y2Skas1UcQ1aBsGCrWKXSyU9TLrZ7C8FPVdRsHvYnf",
  "key33": "5Z6p7ZB5oeFa7AKrpm9N97NCJSaRDjwu3VBaa865yFurd5vMVL4hYLpKcqKRwEpGyTYawxGpz6caJKBmMEfDs5GL",
  "key34": "2FNTRP1qtPL1cAKAW3Vjtmg2s45FafwkkuGD2KUCTWZBee4gyyn9nUdNXkA1ufsy52Vh4osBZPWjvHRk8aAvrECi",
  "key35": "nMRQ4q9fp4FLNaeDmR91dYApnqYDpGucbbQrx5rnQTsJsE33vKdxJ4tyxRj75zok7k8EsfNHH7ywcHNJzUb9gga",
  "key36": "3GvoVntw8EGiPHpvGNcuXQaWAnYrfbiRPUvkgS5pP2FsGkJe5UDwb9tRP4VLrRpwKjKW3qCKzDVg8pi62FARZV5C",
  "key37": "5wJDeKypghYqX4xixSdpYJoCKVGUQmU96NoytdxHLZEDug8Xvhq7zu59C3g55F6LG9wexnf9Xk8bmniuAnCAg5KX",
  "key38": "Mr8drV2rJrsfCEzmjVVZTToAwAmpT4fR331LASvTkXPfpY3dZqE8uyGPBURYFHRc97ksjLkyYZXXxVFh141yUnu",
  "key39": "4FULS2939a1n4ktLGmVyMG9beSmVYHaRjLPTxoQvCeSvxTvkGRbzjv1aQ6Qc5SK2QiqXxFdNNxDHtMaaZKaNQ9oX",
  "key40": "8yUFfenBZQkVmRZNzMq7G1bW8vyrK23sgcr9wXXqExvJAycy5oh3Qfcmbodit8g6HKHZ56gGn6VYN1fMacVxnDj",
  "key41": "g1JotBEv12TfTKN1XLBYLwUmKW5KPSt7aPEy6UXGzEkAxtNRcYNWJgcT9sYcjuZvJcsmnryTH5SRRPCFQvip2JN",
  "key42": "4N4H32huiDrofSVcFodsiMDbyHzDPuiK3M45tF2eAGwJQrTsRxduWDqVXAyvJL8MK1QQ7AA4ZvFLkfXmd6WU9Luj",
  "key43": "2EjpFR7RGPh3WHb1ATac5Jfu9yp77VWzmeD9819RuCnPw7X3pifdeGsxxYmqv7rosnJBCP6LS23CiTvzcaN2MwKQ",
  "key44": "4toXVDQJApD3Zm7vK8ZgsW19i2gMKDZDJZNJsyCJLnur3FcAn5T92Q7ikcqtz3MgeAK5xi8wn9KxHF6mrk9Qs5yn",
  "key45": "3ErujpU7ES4rX45qRAoKeZpt9tDmH2VCzLDRsmgSXLPTPvJKQ2FNAHRADe4i5jaAuP69ZJq9XJw2F1BoFDbREKxz",
  "key46": "2Air82sKddKp9nnmtMe6hEeNtuacNT9KMyhcchEGokvg731uD99GwnfoSbvpzV1zyseGYLF5L8AHDMpRuPgHT9jr",
  "key47": "3zSGCq8cNEqmaTVekFDePBv5PHiSRcSGf94gjh8BvF2Fhced32LnZqdtHKVZ31B7DK2FPJyRa5xJNGnxr7KkkP4c",
  "key48": "V4zQ2j81GBEqitLfZwRYHjePrPa2n648fHNmAFeCpHgdbZvxr3vsTcEns2Z8FUWBrXstHaFzvvi6BJE4Nqw3rX4",
  "key49": "5kCgFURMGeqDDb8ktJ9uJsNGdN6KyBqxm574S6zWYHSaqB4S3jFt5BDUsB3N6DTNaoSL8mowoCb6L8U75pXC1DWp"
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
