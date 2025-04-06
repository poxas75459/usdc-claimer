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
    "5CeBNuo1ryL9ukRN7s9oVnJpUFFdm6rGFzeTxBBN6PNFjZwiss3yYbx6EDfSBA2jHLPE62XkVeyDcoFWxJpcQaae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F6F3VSNBDP1gCMZxTEXGujXsmfdu6JQfAyECGbEUiQxmjNXxsTAoezpXhL17avz5RVu1UiAwmcwEKJCCYKkTCL2",
  "key1": "4GkVMKKf7eZ3YXs8kMVtQYHxGQdriCpwrGNtG3R7YigQJZFFz9uahWYdEfSwDAUpFDAmZodCVgubtnz2uXQDfuwJ",
  "key2": "2JQsK7Q7VNPKuNQwrk6rEKptEpLYGbe52RHsVdyrzZuebSy8PucoKkX5ZRwjsrqVwGdYYuKiGYsuAwXroB2WyeP2",
  "key3": "WGQaNYptsLJqyAyAAY2eZBveT9PnsUjED41fuPGf7JhFgs6auPi5zMDZVaRKpsoqkxcno6UBekYhcCNvnwPyVRp",
  "key4": "35QJ1gr4fB8uFtTHPukJiicHu5dYQsiuoRGes9kkGhNMtijVuCUwG6SZSVDW7gWLY5QeA8dtbSGcvD2vG8ZVQf35",
  "key5": "64ztpMxjrJFQzW2jBZqH32Cb1cpSpdshj8hZP556KbEpBjq38jUANnzyY9uwKfrf4oa8grzEaZtwPAFmppv7HneM",
  "key6": "5Y6KsrSnQWpPk8vW92b9Yb9kFjxpCJENdoF6Fp4LNeEh5m6LPUJ2GFFYQvK9dDQCqhJ1myeoW4NC2xueuMdrEzAH",
  "key7": "EcsJn8ZQ1bu1vvbZJ8WkdEKqCpuMrb1iicV8rPnPoC4Z1UQg1FuHAuVreYKCeUuSYBTN3L7dCdUEpB94JQQGQzf",
  "key8": "5gnuSjwudKR4SxP1VxJre35BbofneeDjkzGk9SoFsmjC7RJiWdRAX3suwwzhFCoAnM1M1VQkM5kyFqtLRv7AAULL",
  "key9": "3NAj1DDhmqSLz5yBzECQjuy3EhEPs4vsEBdKtFfaWPLG9B6hfa5SdftKRmbf5Rz9ADNiYcw5EkCyeSYkRGBXbSLf",
  "key10": "5ym87EDmB6etPJwotfNtWDFdSm42i62Z884TgwcbDrjGkqcqah2pTnumRCU7aCepRobav3ZBWBnBLVimz5x7hHKg",
  "key11": "4nuS58LNS6jZvMaKHowspqhrznyJ6BoidZ3d91cBL781FHyjohUf37MszpRFWTcxo1KsQXiZ9uGDe1JQbm8YHERe",
  "key12": "2n4sPAr3ifNkSYrh4LDCKBic1jUjE3Vh1aisv8USNwFBAciwHfJavHv3VGV38cEXEJkaWa6UBhjzFUm9AgjNRKaE",
  "key13": "3bdDmNm1Dgacz58UjZZSw3URa7ZBu2CMxeaoig7sy1bCAPMyg4QoBuEw9vySuWRRHAMTkGsAtsJsbyBLdo9ZuPa2",
  "key14": "5uYAoraGUC1gDkK1cmv9K9GnBVr1EDjzFzvPfGxbmobv46frop2A68184cDoAxNqY2DW8d56smuCpT84VYw4dzqT",
  "key15": "56FaSjDuU3aHPvmtHYHno1d1WaFDhvvhEfN8E4wXRadPmSSAzFvdSVHVCxMGSjWjyPwWpqrwKB2QYa5obKBLz42H",
  "key16": "5W6LVmZZrgsgUr24X7CBBZJYYtbbSMf5ZJ7VmjxboGLkCW5MZJADeojTNUKAXjWXxWsbiZjfg7dQWhgxzX6ECoqu",
  "key17": "2akvUBX3KXWRTLnXHimftrZFQZFmTiVjzrdNvqC61iH3L4PxZsp3Jok7gUfGX81oMhHgc6UVFPYNv7Ufpy2PAvzt",
  "key18": "3qcgEy2iUqefB4yYy3Q1EM48QaRJYQduQqkxorWMVfbuGtZ95wrmWNgra9paiT4vteZRAvcWGhZkLb6LjU33zs4T",
  "key19": "2FoGz53QVmG1znHxC66Q42vEoqsLhSG1sSZzV6x2CpgJiEUeJdUgSmSj7CohvpnNJUFU94TV22CW7r5cej6mHr32",
  "key20": "655DFqjtMuqsgDNcMyiHMtxEDkrcDHrkGiRQJnurAUjviaosEVGDjdFpJn4LGkQqLKfc8NebcJ9jAXuSGNrYvPbP",
  "key21": "5nKjn52hy2dQzMi2tpiSAC1n4ycxwJ8fwtJdgqSL5y9eP3qC8jzddPy3NkB4zC8s7aP7qECEnQUUaE48rVj5YERj",
  "key22": "w5M3dbzRANa3g8ui1AZnvZvUvSccdu5bTQzeMvXPcMK64KLgPajyfAUvJ4py8cafSHgPw2EezjuPVRhmjXS66ZM",
  "key23": "2tToQYxSzzmoT48S1iqTcktPr5CrCKdBysucg1juCMnSs6ypQfhmo5DoGZnx7fYGzfQcSTbWo683MEkHSbmt42Ai",
  "key24": "2scHhuKCuqWGMPat5G1Fi2e8ytE9w6jyTBJiNcAeZBhgYFDTbqpTvgaESH3c6a2QpphhfzRRBduP5NihiAsyPWVJ"
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
