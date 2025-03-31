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
    "vxMFEcotwFz3XnxwCggBTz25ezGYeBpx63nrwBRSXMopRayuD3bwiCmeu9C6eQr3G7PuoA2XU7MNYD8NzEKhxF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvrPUTSDtZWeRskBwQBrN9viopHwhjo6M6w2EfUyxmUCfbAEtAXzoDDurATpWoRkAgxHMwtHXoPDeBGL1UaYwW3",
  "key1": "3UcWLQqXctQsbEpv2vQDMjsoZxi7ETpF8Szas51yBizdCKEAXRE37aetSijNW6zYCKfGvBcCKUFCsbh6JLCqcqXM",
  "key2": "eMiLByMABo14kMzc9Ddtbu1RjmR7e5qQ8Lr224UMWfAseKqFAgtcCrgFrFof6NpicQmFeK5xZAjvkoCLbe13psZ",
  "key3": "3VMJhZemtq3o7z1VeywhUa5RB6pQSwWADe7ZsKAczNF5tF4VfsuAcNVthMiecnrCvtvFrmT1CjDgPR5uf6FxyiTE",
  "key4": "4duYvmGjgEJp8i4Lmm58Yo2tYYW1wxeEspLPUas71eWn8sk21p55cvAxmeS64JUCekarLMvT8Ztt7Ane5h1NG9QK",
  "key5": "45dhg8hguxPa6QqsqNMGFKM4bS72bBj3YfQp8An9yWR9UCzqW6gwnCvfQbYZgj3NzzNjBL95zcTxABtgtJ9Dvvyg",
  "key6": "3qjGNEcZXzrNfaEhyS5xhBnumTZcNu4Fe8Y55KQRiTZN8fAXkXF9o9ExmyjaUfkRNJfhTifcMDCXjCRrCmr6bs4y",
  "key7": "5WMTB8xjB26jLBj4NmC73GucVgzhCfMxWSmcFZwtAmGPPKBRf3Cr6MkKRFmug54m9PuA1bc8nP37wFp7RMdKAh6",
  "key8": "4TyzphozpzPpMTDVwbffuRoq9ZFoA79ky4emj7LSXH4jZoqqgtPp1AcdkyoDaogKCF4rAHHXbr7gAQuJ9paUDDxL",
  "key9": "2hNeemRELCNWyBK5U9MRuWSSLkGoU1LDgwCB7fGoyezPEVd74Ktg9UxkTARKVnPA6RgcP4NSgA3MWXuLvsivaXxL",
  "key10": "AtpDuVRymhAggyPCopEH9p8F2X2CyjniNhfdn5smQz95GdD7qjRFwYoH9vQ8V9XgYWddGbbGYcjZ6GR6YuVPsT3",
  "key11": "31cUq4r8STAhLC44p934zdaM92vp6byLcTueNvbNggC5NfQUCwoFRSCCiyob5YhadRgA3hyQ2F5yG7y1Yvinp2gY",
  "key12": "3JEH2XcMyEKweK9MALQqkPxmbzRaLArF3rNJ36JZmeZvQb8ovN5rVBbXYVxJuiecBLuYxUHLBnH6cFTX4HVGbjwk",
  "key13": "2D5n5X7aeb7Vyh3nYKEi8yp4i1Skaqani15dKpcNpTekDBcJZKnNQc7Rv2PxjwWGpnFUmT6KcqUSZC8cpAZi3uns",
  "key14": "4Mizsg49DZWxdQRZCxoV2H8fewj78E2YBLGYLPepNCMtgD1YSXrKP2wAnbpXmrvRubXSDbRNWy2DErnwtPPnwNbm",
  "key15": "4Ad9fhrG96fxcBmFvmNTgc8rLtk2ryPfn5BhsiHyZCGhpnMbXxaVtvSpeMAZhCetrpRK5bSMGdgW2AigcxJE6zZu",
  "key16": "Sv9ftV8apPiC3PmrAeWVVb13vwMQFXcCKVx8iuuJ4gB84bEgcWNyNTFFcnRg7Q9cTaRrzcfLtzanPVEsazUMqLv",
  "key17": "UG1NVGihsa68BaP7MRkT4MqaX7M8WuwaWeN5X868ECwqF7NMLPgAojuTDauZZKxSrnKjFWCWpaNoXDGcKBszcjV",
  "key18": "56Ntkjan9h6wGJ4TtN1zZnT1ESLAUHcUkXP2DVh1iiqfcg5dtD5vbKnciNXfK3UNS9MhGke8sY7mBd2Nsts9mGzd",
  "key19": "5zGGh4agLHTTkKxGm6zZkdGPTuLe1wXdgYZatGKuQ5FGTYwUQBKP6CxfGdGHvqLR9NpK5Hy2g1kabBChnZFYcfZv",
  "key20": "2kG62CK6Lw9h9uAUWSNKStzbGbEgidx5iiNfhygFWB4fxKjkszJcTpKSvcFwjNtnxEyyQXcRHeJ9s7j1wedvDked",
  "key21": "QWsjgNvexpeE7DebMcoo7ebNiVqkozEpYE3K4xA1ZN5vDXH2X9zygjAJEx4sVKz2dopnsbKsZFG4qY3q59NGf3a",
  "key22": "QD5WP4Kwyx5DWaJTB9URkjzfe7opG7mynesz8Vx8L3EbZqHpdxzhUxbydh1nPk5RWTW8dQeVykw7AehTb8KVMuv",
  "key23": "3HtBX9aNqsX5pCBKRnn2EbiVuwdisrucP9vSZcbScbY4MEeCahZmXwHHnCouM77u6c6YscchfNvgSDXbieYQNx62",
  "key24": "55JFbzKDgXZAs9Nub1tYJew6s4dvadrjxFYpSJjTpeWy8yEGwBkJsD9NkVrXNQfjkgYe3dQPCupP3CZRKBop4LaF",
  "key25": "38EpA9prTT87Gwe2pjtsj53Ynkwj5hRoH4aWMDA1CSwQ4R9JALkYnxHhEeoX8TPTbFDSC8vB4XXZCLJ1qMX16JNM",
  "key26": "3dVsVWyrcuDunf33C6RMds5X3G2r432Ra4WGKmGPxCwBT2QJTjSdFxAMW6jxaseV4zWVMN1TUybaVR6yTGmp44xc",
  "key27": "25Z2oD39SdYfc73MMmQjsFK53gVwM81T47cTC2C9Puww9q3NLt7oY3cHhYv5B12zwqSh3dp3i9rSHHpwwBLb3cdX",
  "key28": "5at5YuFARdNzjRZmeZ2jop4U58cSMnjrYCeuBKMnqSJYycWKV6aH29W2vGZviUfhovguxZoroqt9oQF798xK6DaT",
  "key29": "53UUD5WRk4N885Efo7RyMZTKVsVh3Q3hswcbeTykGr9WUMhyKGGn9tY4N7TeXQKyzPbUU9RLauwoBuzKQ5Z7CYcu",
  "key30": "PcUWiPawn8SwRZuqYGecJ4U24Db9Da5j4a9pLRPmN2LSnDTNZbhxYusYSMCHwxiPZybVJCi7hWJtUjWps2kXzkE",
  "key31": "4rjURogUL1xCSYWzPasoDvWVrkud3H8m3rdVonnAdBAQB3uaYrs5ybmC1FrkYTgdfU3SbZ12EQPbLzwrBmjy5q5w",
  "key32": "3Zf35uNTXmLPvmJ6NxZ729fh7dGtgLSweVu6tqZeCV73GrtTfeoGtsQpGv3zwfG5rs7p8w3vLE4rB4CCGR5Wz23t",
  "key33": "2CvPhUHRXGHrRhoTArpjkrsAWhynCBYPvCKbgf8jfTDohPAVMkyKs6DYcbVLJ5Jaiooe1VHRuvrLTXrNKDB2QLj",
  "key34": "3oWhv3DSJenfgPbBmLBdeU4xAYVoFwF7iG4CVvjgbnmwb69WZvcrBXefNnGKMhe84MFMeLm6hvCJPiT2K1zKz19m",
  "key35": "5NGvN9Hc8JHeoUAgLiLcxVEPHzpek9jaGAgLdKdhA6xrGP18u3X8yUAgnE4bL2snqRg81ZLDHj6rPyBquD89f5J4",
  "key36": "2vquX3v91Tsbywrv93DVsx14nq1j3T7EJ9wMu7j6qviWDyRJQiuTtfc7JhY3ey8uMJnRqtAsuUbDZf5D3ydgddF7"
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
