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
    "5ygc8hfrk2Ps4oa6So355hKBc3yyH7PgtUo2T8BfwkKGiQ7Q1F7jx1NXwnYTWzK2z3heXMjB4AXaTq8Cppni8Z6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28sVw1hhKsZvdgaQteK1TyC53ZLEPzdem2pKqsfsMvF4kKFjXPNTjjBgrs2MnTnk3FDYymXGUJNtF4bto69ocmUJ",
  "key1": "MBGw3CzkHY7tjNmrSuzkt6PbZ2m6aB6mqJcsdUgkAyZ2rpmTtnX4Ee8FpMzoK7vF5JQGY6uYmPebasH2ih84vjA",
  "key2": "53gRKSbWbWrVhPtJWB8VoGc9hoKfrAfTkxMaTwJgmC677aHDDrmSRhxUAiCjLMaUX9vLpQr5w1gKn9YSrBVG72Ao",
  "key3": "4ULCHrpa3HiJdNsrCCQn9ET2mb1PyYaGRCxorgQceewDfhp3wWMQB9oJ5QMQuNS9y4SdbqqQ8kJdbctGPK3464jm",
  "key4": "X9o4ufTFzusgokuwsHcFADV7DNuymzfyJbsasmjDMeA1G1f4d77jYSyVJfMkpCZgqaA7Lo2V64D1CavEYhwENBF",
  "key5": "1JNu3d677SrMRw9G55W3dgGkxRtmPERcUGjUabMkSDmc47pCF5jh3rMhAnPh7MhsozVuRqp2SWR5T1c8dnr12py",
  "key6": "2zCKPZJ46EX8qEFeVApdAj6G1bDHAovE11KwfU5dUGnSZDV3wTRHexffnaY5ZHqnPqkTr5W1L9GCFYDirb5vBH6M",
  "key7": "5wCD28ETbGTPN9p4pYUSf8eQEidQGhymGZQsH366yg1o6UvS3Mc3eJRog5DtmTK9QAkgYHougfSWMRxeqvhU6V7M",
  "key8": "uU6S2z7kZxfcf56UTynz11NiQXSkekLLYQXHUrujhKQXTkHFggWaV4TLirRFqVLizvSFS5vWN2NtpFq3gL5fkaB",
  "key9": "ZHLp6vTta1v2T9THuxRuMXqXqUYxeY8EWbMNtwGouEZ4VE1iN7GuUNJzmFzHqjfhfAwjx7JHnQqFPkDcnAjvdHs",
  "key10": "3Nj4M8Duiz9HqJJobzqLCcab6XkxHKJMCirzGShFQ4v6VoVSoKXQtfGKEd3aHPXP8TYrBoDdBg6PgqjKu2LfiFG7",
  "key11": "2itKx7smTaQEHeZtmKjATjgr9o3PayKhG7GJhgTSerQhk8pPRu9aEmJJuLq5h59zfyGxNRWUhCRKBJzVHJ5NVKL9",
  "key12": "2ooB4pvwxn4H2XEqNgKH1Z9iHwJkbaicczsovzQZfFbCjBvRC7nVQf6brM3oASLsuXeuQkqFGuf6zGShGzNyoHbW",
  "key13": "2BacxUHPLPu4JXSUTc4ExP7nwXCt8DTZAv1yEodYZ38UYq6Ydmaz6ffduu2GkAckoM23f5W4jdF4htxGw4GeJ9x7",
  "key14": "zBUDmxYdoifg85dyejqC9zW55P18g4WavFYCXdMTduLnP4YPSTPu8S9qUtUcou4kYXv7NuWNZyPScnJTPq346RB",
  "key15": "3x3FCy2v2yt3i4qsDagg9rYy1yEkFkt2PC7JuMLCts8Hp3RPUUb2tYbLcnpvL4Axn475cmwR9Wn1Jq9gDRAUgbj5",
  "key16": "2wLVTfczunvqmFE7U5iUqoJtY1KUro8WHNPy1dEKyzQzcXEmiHTpcMkJBZbuVdQCL3vYCgEwvVdMPLLmciYrruWK",
  "key17": "Tigq3g84SLuJ2yziM8aQx9tDWwqyYj1zLsa8L52wHb4spex15eF714D8mDEWFkKWN9v6PcsfQf3XadTkkAkpNHo",
  "key18": "3VkPnHb59yxquGGRo2Gxg6W8BzSXjG7RUjq2PZHhF8BeD4t6dbVDHZiGHT4r9FQKHLbrtXc3SCqNVkYx2sppEi9W",
  "key19": "4EWMcmo3mzQU856J9NCxojyDogTCy3a7KoPwK4MAALbfFiepW1aGcMzydTbx3FyG7eJGd6rFiBBSEA44XdRmA48i",
  "key20": "s2TXNaA71ZQiEB82nWFTFYNdvU6HnSuejCGAVNY8HS9EJmqSEpsVK4G2Nod1X46UKq7pVu8P8d6h5PcxsVT2EXw",
  "key21": "2BEDhDXo92kuV1uSp1FDdrCYaqhDA31yRKCZpMbJGFvQzwrCxaV4KQAinSot8ZbZ3MY5Ms4Y5ZW9HeEak75uknU6",
  "key22": "3FDRMCAmYeBMwgFoDV8Uh2GeMRH5rZH3hPTTMZXp2wL9HRdmGEWRqWV2BWfmBDR57Grx6VQsHKc86er1z8vW3Pp5",
  "key23": "4de9SYmyimQF5Gr22ZM1uxT8zi8fAosBKCBr9LMQn9nzCQ5T7HREUqHfT4ttZgZVc5bPvnFq9n8synEC7pWsEnGT",
  "key24": "5xBPUYv4NYMcStAAqpLouxaBKyU1eggTxjFpU69xWZKqxPVHYrErBQvntBx47vYc8LQMmnD2PEMUss9P1e3E5SoA"
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
