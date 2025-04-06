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
    "M86f8jEVzBLFjFnJ9LPNuvo5mp48bZ6Uk2nSJwm3e2vuv97nBAopfyfrWYfXQtAXFFZqDFGXdjAzLDRJLPme4zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGs1AWoRLd2iPi315VMkKVEEsr4aKPyxjezSgupht3nyHGkXGix7KcbMbMiFFUifTFekZByBoek6iPHMkWYPuiJ",
  "key1": "FrEvs2TEk19xSfDjph12Ddja3LgUSFtMcP5Xe8nQ32hpskCX5udYkA1sf2jKLwhFd3hDWq6yTJXsbZ4YLQpJBkF",
  "key2": "vKfx2wYbhaGB17edaHdxCpHr24XH97PzSqJcey9PP67VsD4ffZwyBKsdva6YmMVz5xECHrP4NFBfkMA7yvRnToV",
  "key3": "3KjqHHUEZP3DZcpQUqr2w8XDs4jEXJ9EixtnNv6sFhJR9V4vA2XDyQfixRaPDEx2g2rQm31CDJ3io9mGJsBGRvUp",
  "key4": "5NUXRd2MEp8XWq7rdF5wGvH1tuK5KqUaJf5wu5tFSSmtTsa6M7sPEeMs72fN36FhZw4W544aGLxqtg9af33TAbhB",
  "key5": "46E6vW2YmYrrGvxTour6xfE6hHHUymhgc3VSjFZY6h6u9hxBgzENj6jmzZzUh7L1yHNKTRb9TCszxp5aWqFnYa2U",
  "key6": "5DvTp8FiJEYBrMhhgiANjLEthndW8ykm2NuxjuvqHgW1YYERRLEx4zMJSK8tNTDRw9VSkMonZPGByWdtCVvCYgH8",
  "key7": "qgF5CRaCmkmzKWAApfbHf8acpdYpJZ192VqrxPewYUfGorYvN1fY7qwMKFQw626ue5126CdZ5jS6aquDs6CuWCw",
  "key8": "3GjfSDaztzECuMV9VuLEjKP2bK7cXrQ3AKzBGL9Ekppbn1rUk1X2HpFYd38uT89qTcxWnSNoGG6yY3Zzkfxbyoj8",
  "key9": "3gTqoK7rw1wtKRyZYGdcRZaBWF8nPK6HY8EtKAncCUCyoUDLpzDC5xrYyo59rA5UTMV3zLrM4bpYB9TqZE1W7u5W",
  "key10": "4mCwZwHZJksgrFP5GqYEdu4z3hR6YDUPcnjkgkhQ3c15gKPSZCCNFTUGLWrgZtHLERcziFNmTNzoMj6DFp2yZbMa",
  "key11": "2GPcb6hb7ZwTYLqLAfrQDXSSPh8iqwP2trwzbCeDuKRoemxTsKxnNsaumpcpjk9ZBKzhkoEcAZAnynLifWLQiVv9",
  "key12": "3Cs6yc766ER8nKcGVRhgoffnfpqzHZYHzBVwWAsy8PAZoMji1BgUuomJMNrDp8ABM6os3VqyotRYSF6GAUCE5DQN",
  "key13": "w3uWDYZYTuWKQwHWdzmLGwVHH7cDku8bkxAVkuvenv6cno6jDsHotgWe8n69s1vCZ4UB8dxaK7TioMLw3QaqpV7",
  "key14": "32KutJkXgTDDNZmJsNAcN5FitvjxewLvbMBh1kkATwiqRNKxLhpGg3RScXj9uHGLBuyzU3jXZw28bCK3KyxsowVE",
  "key15": "2NKcchx9kcqQL3TpoCUDs2VDx9NaaBRsF3wKMVsaRVyZ1T4UUPtewEMchVCkgR64ALD6aBTh1gUGQJqSJRoyUGMk",
  "key16": "2sz5fx94UoMPsbxSfmRSUy7UDN9Zsd4YX6orHTqiMj8s1oZe5q1kHBVoVgukM7A1cs3bZhTYGYRmwd2rwsdRcWgL",
  "key17": "5ewDtcdgqEDUWib6r3TvhQH2NhgLM66weeM5WeveZB1mDcA9vWY925yLrA6RZAEUfLyuPS1d7twnncYBPPntK4bb",
  "key18": "4gd2dy24DDx7bxEwJJ9R5MbzK2ByVjYkFuK7zszA1KQrpzGop5p2S6BJp6iKYC9AeSMXSZTTRqC9EMyJkHDbQLkX",
  "key19": "23zyyumLxZpLY9mMBHpMhszQjzjiJJF5R63a2g5yGURBVZ3XVDn8BSamopHrrpVhZgNbf659VL8iZHiYx9s1icBV",
  "key20": "SmmjLYwKZVqYm86xZK5LqE7BebmB6ep4kjPtcH6DHXVFmf5x711Kj4cdqgN1EtJgTafM2vhp39qh4cPtT9TRsaR",
  "key21": "q1sJVLwQ4KzN448ii53nqrf86z26dbpJeWiiwGf6hFxULXkqCaFUuxLaEobxaFQhTCgWVueDEcj6D8BrqeZhe1r",
  "key22": "491CdUzqFGBaEGh5ZzbZAzkDNc4ZSLVWtnns4ksxrzKUequMdjfQ365fUZAgiGNnH1qULQ5JZkVLxacLHRmawHqi",
  "key23": "3A2mU3dh3XpL88xCxv5g1Sqg1zCDn7cvycHNSHfjSE7qvWeQMsUdhmVtFCYy5QWZPtMXLj3e7J3bEV4vPqUTXGSS",
  "key24": "3Tr2bYR7yFD1CT848d4UX1a83jK5bBtgBLMsK3BzA4CABi4APgSdC7TgbBS5JncXBLK6b4v7nN7D5SrnxnGX4L3c",
  "key25": "3QdL9Ctz9LA2XbGrpieS8aGyonH7pteo5UA7T2KBNVvFjXeiV7ZXB7XSE9Xt4xKCqpLdMV8otstGvmBvCgCRRDRe",
  "key26": "tsozXVSEejeu1MvBvZSJG6SG94wDUSCw3Y9iCtAWFSVhmaviqfFEkSqo6QL5hFmwiAjPWjXypYm2AMMHeWmtf8X",
  "key27": "LPJyYRdUMyHaFKKaMRtx1SvDAtFcFLt9KhtyTJ6gjX9pTXyHFKW3E2SSUmghVoDD61S51m5s7MThEg6WRKiyNjF",
  "key28": "3cZ1okeb8vJa9WovEGfhqjVDfbwgygdUbKVcsBamePiipQrbRhTKb4Y7ud48JZ39C5bmD5aWo5iMqPTANnrqv7qy",
  "key29": "4AoKdFjzLzS1nVcohfLCKDyNAGwgH6x3LqibyJQChdE8PocTKTJez1ARYXbhkUgtF63FmVWj8miAsUdrduGyBCbY",
  "key30": "2VpAmxFX5MRoXFMKTWCY6prQVpazpTAALsSibUgwT4bZbXq6U4mgwt7WxmScLyWuLHWCzerEHsh9QR6M8vobEQjh"
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
