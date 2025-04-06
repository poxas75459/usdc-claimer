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
    "4Gk2i3JPs85oCgnUoKGqFxgYvG9d1NMo3ruKwYQcsobLYJopu83ERsW1whpxe2E9AV8BcDNz1cAP1hWWEqY8ZxoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zgYkFQYbGkAHdWU2ChhBtXwv4dkiSg2tFXt4bSizC6t2Y92Hy2Z5gDy7DEqG4bGoFoi7mQVDasJmZKEuYVprLNM",
  "key1": "5xFGHsdH7MYhuLu2vkZCWSH9Nt4vYsR3CoPMKTk1fAE9aJwLND9ZJYzpoybS9B6icH13vytzRb6XJjpoQBRPTCHs",
  "key2": "3hQeRgji5EM7QAFHdd5rDL6LQqZXYxad4PbisqpMPcWVid1V7y8a6EKtEi2ifb3y3GMWos9n11EnW4tQ9ehtE4hn",
  "key3": "2WT4ZQCUuQVasBsu4X18YRWQqJDZcPwR1oiFsN5hNiahPruVs72obW6VCM4pNSsU5uVnj31N3Z21drqdthA8r7RL",
  "key4": "GboqKmRC8zvhskfjJxozPFYHwy3m97RsP72cz47xSXXkkCzRgf1ybHgHR82eLPP13YBeQnVGxvSvvfUFazAndGa",
  "key5": "VZHyjterVoSCdGPUc1at13LG97BZ7iW3RZngkVJfi2JyyzG9PY36U9Tun1RT6b5axu81hubhYNjdKhsCtbtUMAF",
  "key6": "5nr38BWkUzxFctH1UStWFukTgAbvsuPSSQ3spRYB6USEEvuQv4bpRBman2WqmRQi1yG3o3zAWB8UR52zbpCkWWXw",
  "key7": "5zku1fTsjCeV5kMD6m7DyzqtTd9cH3BDkoaWuiUrPEPTHTK4HqKPofaPc6s552qQvzULpFH3AyDbRpXcaTGGymL7",
  "key8": "385gNZe7v9p4fNqkx5Y1iNEK2VrQRC2tX88zGkwGHmW4BCuX12WpFyYPb3FwHNyWFvHBYeAvUAeTEurLkcX4xwzs",
  "key9": "2pi6Q5AbnoqdbiBWfdRVWsDTeCz1DK28155a632qvyeRocmkahg6WWDxWEYtqKgW2DBU4ZtLqszASKQGvTSVcSmX",
  "key10": "ennrraR1U5SMdgSdEy87WjeEjwrd2v2sodDQzweTCRj5u44MrrcNvXx6gwRP2oamK3GhTQPuFTqdy4eC6BYToR1",
  "key11": "5G4gMCqMKCRKcyNPfnB1Ld4kCXhKGCc4tcZAy5qTamj9ne2BKheFcvD3BEgPQRzjcp4QxoN2boxfeGdcZW6ZEb4v",
  "key12": "49dwfVuZascyKjZhQqQ6Pk9z5nBSScVdzf2oPRFTycKwjopSzh6UeeRgwcxwY4Tay4vZbfX5uDKjtHEKvFbU8pEW",
  "key13": "w5MA7346e9xZqXxjL4hEGx8Ve5dzFvroaJ8gBs3vhAndgWkyZGPbrnmcxEsNWGqosLiVjvMoxvQhKHWmPkTv9cQ",
  "key14": "5cHvLUZK5dqvoUSJjYVL9TEV6qACK3kWn1L4iJUDjMLwyXjhFL1x77noTvFgw8mvd9qgga8BdbZZk4roesC9RUUe",
  "key15": "5UzUqm5KYu4J5t1tv1m25n4rXKRGcLjLHVXjUtScZ4TTXi3pUCw5m23HSMc7aApZejjPosrySJJZTEePVfQ5ZQ4m",
  "key16": "35XPUPfH5ZLXvHF62fEdCoxpzc6DgofSt2dcbUSonpEgWHsP7UNKK93qua3V532j3zcYAXBmV4CgVYJXapemxUrn",
  "key17": "57rPSDZVCf2TGjo8bJGtgUUcB7z2iTp3S3tt7PAUbyRsWL8td3Lcpv9jo9nkUJcyk8aBEVrZX9dHWczpvcZMTpSk",
  "key18": "BBNpSjy5e3KVRsZ72ReqjPZ6mEeWMtVpw3UE9o53FC26eMK1Qh5FJNYMAzn8qN8FkqajhsZ6QFjxa8tg4Zv9wYq",
  "key19": "7uabgwBtLtCu17gdH2ZEg4i1BktgVUsG1cu9U7uLBJM4PE6SPYMzaShDtYhhzg99Gxtwp7D5oRcHVu3hFVHznfL",
  "key20": "5mqRU2iYqHhbjna4Uxrv3qTjz98AXM848QrgWjfzsMPyNiyo5qTHht4dsDoqW42caq5o5QfMCCMeAePKDmGsZUJi",
  "key21": "5HXqLjk526RJuLi1LJARQW4x92uWCh1ADuJCD8v1eJfSBhVgPfzA9rKvRFpCzCjnXJ4v9S8r2mRCoAx5gXvMhK4f",
  "key22": "57iZjH1jW4BnJ1zybve1zMTQxBA5mtN6r2UShQS26rzRJGUERsDk6CzmnrrrhNL9XRqoPLxvS7pdY6krB8oMUh5C",
  "key23": "4qkEodbDcEP7rTctc9HMQuzzDBUDGNBco5syGLgAUnFL7aarqTkMRbjW6TAkmYXsuFGac9WTvD4GMtFXU4PKSQYr",
  "key24": "3GfzNFmid8KiTa13Y87kHXwu1Ybb5ZjXk7mc1hexENowzCKr9dxk5XTdTBfJuk8T1UMezpUCNppYFiHDc8T7CnNe",
  "key25": "3AGUjCGyW8Xec863WYEweCjHkdLAQBYVMfrB2BcwxJHJ9KNYha4ah8zE5aG4pfyrEFrRgMxRrzx6n2LApBV2CifN",
  "key26": "4iiCWuSmWLdRfVBkdYrHsTAtZjHCzVJrDv4pYJsQM5T3hGHLdtDgzxnB6f4LcXaFfdnAxpShqBQykraxfucU9K77",
  "key27": "4z1cHpf2YCadpfGHM3V8C3ebpRvfXFEgzSrSpCMS7UVFCkrcU93dBHpZJtsRGEboz4wc6RSmn3DGpNc9RpPN9NUj",
  "key28": "32ShfTK8B9oumoun5KicGbme5ZHJhexDvKwXS9rBmUDzVGk71XiFfj7HCBazFisKsUuwingRsknvAdy3DUejJSsF",
  "key29": "4ct6ngXLMeD1nY2zDyuJfwCxM5WVL3ZXm9ApEGZovADSwm2B5KxKWhBG1w5CwuoG8DzkXAjgYtLVLZzy5gNkoBmi",
  "key30": "28RyyuMqoNFUwTEGJ97AknzTx2X6gfRV3qUerG6twm2izZtcttnXojHDktWB7fHqrEmSuaab6jiYxRHcX736giTF",
  "key31": "3KKepf2akyC3RrXGzL3bzhEb7urT3BXjSZjka4z9BqWg1HpQhoNXgT3FG2Dz1fti5PBM3bWVfzx3R3MCmBLUY3CQ",
  "key32": "4CeA8vpV2TwgYQ8MWnMRZqqb517zSJq2L7jeGuqAZ6f5jq4AK7PekdsUZmFTcpVT8TyuQgoYTV4fmptL2sjecKuS",
  "key33": "4WMT3dJnLzzZ3YeKZm9hajFNyM9GDqRpJL5MmcpbwhS9anujD9ARRPNg5Ef9dUyvPdyEi86d5u4qaz3yY7cPVj5w",
  "key34": "4SjiAhTdY9eK9e9WFtAVtsD2YWohBeLP8ntBfRnSyfk5TaaRV6CPpc6sfn72FDBsCu31eiA3nk66v1eaw1yTrgAS",
  "key35": "3tvVQ6J7YAzQu2u2rDczhWNnkG9tZQTVc3MDvxeGtM8ns9scGiPvAqVc28QAq9Edjq2ANecCGaUi6occ6xXhJDm1"
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
