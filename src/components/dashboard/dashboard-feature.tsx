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
    "5imhbjQqWpPxpJbQqNCBwH72G9qme3tzrrS3HbTF4srP4q7nkjcaTzkVQ6nEyCw3ro9mZbfj228d6J3Q78TJSJUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uk1gNcpubQNvmUAt4RTHvynrdQ8twVEiAQZG5A5J3FeaNUx7DqSyp3g5szQ1JhcMQsKGSwXKuzBKWxBXM6Ja8Nc",
  "key1": "2oJkzsot7mfD2yynSmmQeFJM96TmwSUKzzKaTyy5BLNFQmHKEH4ikSNnEifZ3KoRUqe39zBULQRN4PSfbXwF4W2K",
  "key2": "3c1L96oKYho43mamYeWkA1bYHzZnUXaBsH4TJtYFeCokaPPGcKk3Uh3J42USLV9aR4vGxgibS8bw4papWqvWQAgN",
  "key3": "5ZU1c9zrGMVFtM8S3xZykQiPv97mH4ehoiaHMyyPY6F87Uz5stwaMypifQBNcNas7K5TwWtjEkuhhroTQtiRwbj",
  "key4": "2D3GuhnZ43qdMLUPZhwxJFAL4ZqCCH9MEMccaSu4WwdLABj57dYcBjpxvszD58NHRy5imJCSqUmW591LwQBbjfnq",
  "key5": "3u8Hr1FEfjMN62jUu4gHD5SP1eFkTvuMZcJ6KGKbyCiiL33NC84MjaYS4RfvsWEotsadSVeqUJb5ppeLUi8h2NVt",
  "key6": "3F9NZygrv3uUnUu27UJAW771z89LwCeZkNvgGuWMSzJ8Vf9WoccAHasRAkENqg1poTsghXWrq6Mm8CwEfwHiJnnG",
  "key7": "4sDH6H61U4oiVqAJjaqkwoi46iK2UUgqhkn2pdwcin7p9qu6RHnaK3ZcMetxUoEbk6HskSZdHbDUH18MSWwuxLpo",
  "key8": "3uTA2PZ6WQKtmPSXAJmzkraPANFG122DGTGckfbsYcsxqr56VSNmvE8JdLTbBGrCqzStebGF3F4x4htS2S4qkQYV",
  "key9": "4AaLozkk4LYws6vukjGoYYqSbJWqSfsq5ZDpmRF8Am3xjxjP5evnNnH9JshMh8fy2HpARuG8kSuNPiCg7FvQaQjL",
  "key10": "3dd4SxsTJktd9SEQ8w7LdwbKZJ9kiaZfczj9jz4Ka9MvYSFDrUFbskpK62fMhnPgmsQVn79FgPZrNosYm7hqMLV3",
  "key11": "64LBC4SjpMQcC1okueokzeh1MRfHd8V1GNS4abh1eF8Z8gjwgyhr7NyTP7MV57BuoZbNqC5ZCYX7meAUDcsxiBju",
  "key12": "3Hwz9Bo8AtDgkhuecPUxE5raygbT77SWLf7pzug4LiggC86kRaceyhSZ4abaRhqERjLn7FRZAwmvxc1sGNNY9RDs",
  "key13": "2iFp91PRF5HxHGntXv4dpY25z6RMLSSbstZ5m1akYuYcmeKqR9U7YG1tqhfxPVNpbP15wSM2Lfi6fNdJmZzPEk4N",
  "key14": "k81wCSDSHfaroU5nTB4HzBLuPDY1g3rZddS2pFrTM2HXo1LQCkMMRvoHp78Ejfq2dykvkYbYhDmxBPqFR1Heacm",
  "key15": "2HYSZCTnVudMCMWQeYtPyyE5dVh44t3vWHixGNTEjiS4UwVWrfRL9AD6pNBRmJJF3LpN4YRrrsQry9bHWK1PVgMF",
  "key16": "3YXkQJEei4akjuET4TrRFpeYAxneoK8Esb97Xq3VaX2ebLJTaJVWFHq8SYFzBFEGZvdgpoBQDN8pXCMTKDLtvw7Y",
  "key17": "5F46rZWBP5kMJP4nAqMNGtKawGFMnFdmhmHo383TpRghgt5QmMY1wkxowzsUeAyvtakWMhRPh8q2LQViqDrRBc9K",
  "key18": "4MTjRz31efQvbP2D6VQvpV1eW649zxDyn5NXTrd93wHSaYMTEHQRaUn7QuvszffFhtNqvtFPtiYQVmLcrzbTAdUy",
  "key19": "3S2vPSYUJhQAAL5LoBbLZU55KLGt9LUnjUxyNreRMuNqNybR5nHQPceKpYJhUWxKwjvvbJtFchfxrKzgc3eyQBNE",
  "key20": "4bfHuTN7SMQ9dFzpTJ1GK1yDWg3ujGMvUgYJfDsF5SWhVoFZo22pUegMn7YaEtMJv2j68bZq3w27idr1SqGuCdp2",
  "key21": "6KpagjSoQrd682P6iPKCAQT2nQN7NnZmzmcQjWExXhijzg7bEDZFW9Mq7dA9kUtGruk3tZTfnqNKLzZgkvzUo2g",
  "key22": "EQHnfL5HTkjJ1AyfyEGL3p4J3DesatnSeuFrBAiP5xrWCVzMGXG8PMkdXYwGYRuxvbK61KmyqeeLBmDD3nqJfER",
  "key23": "5HKYiJRDnTvp6JbWuFoH5Pqyte8jjCFZeV8VHH5FjyfD2FFBAEbjRsDhqk3vtwQkMoyEmjoHAt7SHnfsT51YTJA2",
  "key24": "QMvfHJBTC3DX4biwrkDrSA22cWYUF9s9yAKckf72QTSUt8ytwsFqgUXCU3v6A38x8eumNofjK4Q716xgwz75MpQ",
  "key25": "63UEfqgTcjSZ8U1uUsTDyehAz7AHuKLxJbBohPRfEZmXf5mjm9n4MkZLhzGmNQNx5qVXdtnVR852yZffjBA7FsMW",
  "key26": "4bEUzp3ZMQ273gWRMRwNAzk6JUWWu9iMNEzKqcdVpZ4cNxD55ZD1LoPrwNt3asS5qobwapaB3ghU95bittZJbEh2",
  "key27": "2BusoKjVQtL6QpwCYnSopmJBa6K73STTqzmLi9tr6rY54kJ3Xxp4YL1CDAEKG4pSNmwbD6kQGKyDZ87zcKg92bk3",
  "key28": "5EVDdNT9PkYshB3QQxqDsTR3Zz1BMs4HrdwT8JBt3FMBdiydumyMTv5Ppff9JhVpLWZsdPFRxu8xAVst9XBwER3S",
  "key29": "2FtuwaJkHNvjPoYg3cVbHKsym3d11R771icp6EhokM56dSMz6eMwFEfv2PaHJuUUYrUR1Ytb3Dga5TdQkcD5ZK5C",
  "key30": "36gLhgH6C8swAkc81m1VvwtcKkSFHmUiMDGcgnndZKUgaWhDjqnG1oc5wg8fSXKXeWe1dSvfvKfvCkoPpiq7Kmu7",
  "key31": "5aRWp67Eqa3YXcifsCX3MfTnGh1ZyZPV7qGmLLbfxQTavo2PqTkNQocV43dpzC416UQj9rNSLpiPGUMaSJyf5KvY",
  "key32": "5PmUbdQgkBR93Rm5QkLPqUQA6KFwA5Ds4gteXpve38BVdSayWSVJdRcTA2x3eB1GdbBdbDFqtPdBcSS2YapMFymA",
  "key33": "25xFq6SUzfHKfvAJE4HcoUtD5BGq72tc7DX2Za68D7VkHjHbPiPrHiVia2pckR7n7d5Uq5iQ5FsKHwbVpocE1jc7",
  "key34": "23TimyHBtr7f2NzY1FQ5bPL48HXjLbSJK7k8h2QFv3jGHLa9dhA1zB1GyXGMM6WJZREkjdX2bhK4JZixzhBq5yeq",
  "key35": "2ascQwoDNDVBwkb2vykcBJWa3nyjMkRXxTQiuoJKxxBNrteYHSgEMKLRVS2N3SNGi8pDLSqiMRdVisrAB1riUPYs",
  "key36": "2FSkvhimWEqRvLYEpAjThrEjQr9mZstyPBssFFXHgwFDF1EvoC47SocnyPY1mR11ToGuEzUyf1Xcik8vcJ2nKMHL",
  "key37": "43QEi9RYue5nxtX9C8Vxw5GaeTwcqiUJLp6dLpnRHcffTHCfYupbYe1W2Q9K86wLSh52zr6K6DTF4mNAapgcqsqC"
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
