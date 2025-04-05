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
    "4UF8N5zkqzdwrJX6MTJPCJ7fTmvGk1UQnjDiQagaZqE6GgfDdTgTzyNTUVQ18SGFBVMUrsY89rdU54cGEcMVtnBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5br2LheEFnhje3Nt54da9AVtoYLgPGwskuq8daAcJ7v2PjYadpUb1sWMeMtmAF3m88mySxrRNL7Zv1DDq9EbLtGP",
  "key1": "2fxQSFRH7o2W4iH68c5ec7bU249MmtM4jsWohrR1C4snumyu1WeWUQ54pU1J6qn2e3zhgpRnSnDMsPGJfmJJSjUU",
  "key2": "4tu5bM4mdiXvpfM2A8soC5dNRNj2gGgzXiShTwa5Yj853PKHfyyKUUKUuJjJfkiNQERj15DcPEopbYGbZ5es64fW",
  "key3": "9mEfmh9EFQAvRUVZAkWy3Cuyiq2acthDWLdkxKjrgMeu7pwS2BFq7V2Mu6ya5ftsPgQn9UbxUpaXmJP72iX4RFG",
  "key4": "5yJg8HYLwL4NhV6BYXZATu6V72Yp5A96pExCVoGzLdZCJAUcNpSKY4mYMfux1mnNSVAL9izYYvBa1wyyM9texP4V",
  "key5": "2tmrXqLPqWK83v9xEdMG539FsDt8szjTq77svLLT4NMg3WyhccvFMwq1AyAzJsuVbHUEzVYx1hoFHCJHw5N852AQ",
  "key6": "2vvna6ifeusmBRfmZWWUEkJcB3acUYRi7VrL13GMe46U7BDaMuHEjbxD13pjawtC1RHm7gV9cukTzpa5nx6Mfd2v",
  "key7": "2nN8VZCiceUJiQ3Ui6rtwa9nmkvzx3TaWV3NoAjbT3hCAdk3WkJiBifkc2kGHD2rFBZLxyu7G2otQwjyvk9ao4BQ",
  "key8": "3t7WgYXm7fefwBGrukfD9cyzExUhguh3y94JLyNWkQawQjYH9Djgc8eykB3ptrbFLuEDQXZazT7zS8ye4VvDrESU",
  "key9": "HVitoduVNFDu894MgEZEVKuBfNKSFvRhCxqixeCD8CNvhJ2bEBVpF9fnC8iJ7MrtibEGiB12jsU9tmFYmv5qAP7",
  "key10": "4q2RqeFZXiow75SPpmmdHfjxLqHfPpLnuAPMH3fGXKH14mG9p7Dgx2H7gT1eQUgF15rfpQACjY4U1wd1apCf4gQ4",
  "key11": "3FVBrys5qEt6DSa6S81pUn2DAGgG448gT8W41CaJxcNS6UFSvKjbfmC4NWfEGwSvDAQRsE7682jGFbETU5GS7L3z",
  "key12": "4QA8dou5baotrpTFM8P99YCiZedrikb884F2aMYScyeVAQP1o1DY5f6Qc2BuapAoJYNCJnPR9BHfMR7paX1s9xdm",
  "key13": "4KFFNRwPYwSjCzgUxurGHVNfoGhdYKp7mq8N1tPMPK3nEh9jrcTCZiPfG9QftiGj1uLQrfQWP3rMAhFKB5jxQNPh",
  "key14": "5vhZkq7c9PJcFM58t6DVths6DPVM5HVDdVM7w2MWBRJ7xQbqGuDkxe3iEGrXFErvvms79h4rnp5GZfYJcGtgBYse",
  "key15": "4BAALNaA38AvnF4A2tRL5c4i9GTTSVv7JJ3zCYLf6GLeZU9b93GnK6VPrFdyMZZiH3nh3p3g9pV9E3TCPHfo46Bb",
  "key16": "3SNhRymaFAN1E1HfS8raQzYvkuFCeomDy1x6sVXUJznC7vS8KDHjJcQoJ3xpfcakYo91WcHyqgSDHhfL15UTovqu",
  "key17": "4wLZY565epc2wxJe5bZNpZa8cAYzMFi1GiCGtYeo55VHewKaVPJR5WotDk5cdEdvqPCVWnJNGqs85dPU8Wgbu68x",
  "key18": "33xTAJ4grWfCjVkedNAdrTuHr9ckXD5F9naz8FDMM9LHK44TzhFXR5RuAJhpNZBufndJYWdeaBjgzWybWuiE175Z",
  "key19": "5cRHWDr238L18KP4Jtak4h8ZE38aBRiSVuUuxKEJMx6indqa4ynLcaUHuFrRKVDr7NZxvXG3WRWZGcjUspvEV4aS",
  "key20": "EPocPX5G6q8hfMAMKuoauhpRtGyY8n5CgLX6LWK2bGAwbWBdYBYxvCPXeD53yJ9bHWzCx7gktJc3bmt6H9XZYNJ",
  "key21": "sMQkKZrMQHLEj18h6Y6Sw35pN26J6HWDPpW1AV9QSMmcRBWFuP4CfxDEs3JCHMAWAGtzb1mLUu3G4gL6WdtHQb9",
  "key22": "47XKN8trXyWhNzEZEMPU3zhyQEU3vx4WTW8nxTu34QTNt8TQS9FQ3F4rgE6bZQwvWfSrjm947cUg4Jg31oSFgDbh",
  "key23": "5mSq21RuebQLmoQbCfNV6uZU1EXBKN4J1z3AjxndA8nHY25YF3Km7M73bJb6Z9fGNoTz1tT6X7JrdhXSYHm5xH3Y",
  "key24": "2tZyH4vJiRibgKhVKMY7Epz3HG2RAdzrLG7kG9YHZpqZEEHX9f5REiYBcwWiA3tErwjjmwF3xbFqiGy6F74UntNq",
  "key25": "4LQ4vBPc9dikxMKSVb5egdzE7wEJgmvZbaJzYrLFbXzyAREqc7Uq9R6aoS7V2afjhJe9ercEG4Mat3Np3ufXHn71",
  "key26": "37YWGKj4s4vQ3VSZiRUpotizyU8jrNUhmWRWiUk44BDxNeTtLE7PSQdwtGCJCoF5hziiM2u7sF9UbiLoArRrp1eN",
  "key27": "37vanwm4PoyMbc5YZoZPfk3V7BwgUQ8wyp9iEYmpK4f7MWsYuQtBXu4r6h3tvMEUpoC9iWrHmjh6SfBAE5bWLUSJ",
  "key28": "3UX9xgXogy3uvyWgxCEgsLYGvRHqKWxo2A3oZtkm1Einzxx2W98rgyUYaVfRHikSHXbCis2vSP7zDwpSqJ7ViEMT",
  "key29": "3HMNGjs5AN6WRRHcGdTKiG88CqqrBE76kAJANujX8tHksCK51gdasa4o6wA3Hm6nDfRoGnWxcSZHviGL3P1YFBb8",
  "key30": "2jw9SHuWhw6gJ6NjtXDHUxc6EPD4mJ6dPUPszdo5G4caxsnxiozVpA3TKtaYJtRTe8tkQNBxuUm5HQ5ggZXEqLNK"
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
