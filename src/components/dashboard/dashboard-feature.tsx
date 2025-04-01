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
    "44piWCQ2LeSYVWhDBvHV4ivyEGKNuuXu9pS96VviytCAa6xT92gHMinwntHbJCKDm65SCfyhYpmCd2e5Ae7gZUXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReqMRZgC7ZMyPvVvBRLAExLstuUEFRvT3DcuW1GABExbee3YXm6ehoT1ztANxASC5E4wNWhWbbB9qbUtETuWtpM",
  "key1": "5DfH3SLc36MSd2vb7FbUR9q538v7NEMG1z8zJ6Es5kTgeAxyR8ov2SYSwQ5WGD5bhcEBKBf3xHHeAwn8RnjxRV3k",
  "key2": "37qyfPNuayqfdYAg44NfW1fCTHvhFsKn9QAbqPDYiRVuhwjv3E52iKCmX5NzPgJ1of47Geg3Wh86FHa5MhHiwevk",
  "key3": "5svGzKeo8kWKyGffZFCG3sj8riTMNCunKCN7cfeEv2znXmJGFDU22M7gktLGbzA2gkJpqqpkk3GJ9WaZ6tS98Eoe",
  "key4": "52F53K59GGyqhKXSqYBzeQ1Q3QsStXwZozimsUV32xj6UQAvqXGEhihfxksFaJF7zionHnrxzMJUt177C3oU2eLD",
  "key5": "23Va4BPR62YAeJitBaaJ6ACsMy8pJ5ouBVfSjCEufejN51DxsfmmNuS14gymumkYDjQYbkzqUcupXmrQ269Kdkcj",
  "key6": "2thNAxcAnQBGRVSq4SZp5xGXVz3rW93RSeisKwAy8SXZ5uHNBrSdAneimUTPMNbkM1kkZmp5gR3E5456hu1Ba4s3",
  "key7": "3DBbprLVwQSbhf1aVK8qyWzrETBiUB2rQmTrsZHjpEezGsHGF7b2rHrGtJjjY47y5NZnXRoiMywiTfNATe7Mp3Wz",
  "key8": "45m6rapgWtkDu7eKZcjzEyQZbF25FQGy4AavNrqD4UmpNrfvUiv1hPGGjfUq4hLqNma5A5JkosvR77cSqCKXEA8C",
  "key9": "5sQNk9RpVE4wHMMjTT9vePuLNHFtkjfiH6XmDH27CJ8eGqXg6jcvT3CwwHXG6QntNxSPcguMpCv9VZMefbaBrhZ2",
  "key10": "ByXZcsg7UXy7AhLsvCkqozwgikqiv2QzZ3D2hob2jDtJ17WbwnMdTZg1E6kQARp1Z7CtTJJAJcuNKSgLL4CmYJa",
  "key11": "4dNjg6v4Ebv8RsBbbPstMtAwoWJdfXjPMGFmfgPNbZ9ptCwWqcUFS1P4x9xx6h1rn4hV9pYZ3WnwLKBqAPKJehFH",
  "key12": "62Y8D5ZWdCfdsgKhxmawZjAv7m2GwQJpdZH1pkQX5G9tyWpcXPMfQTYfB1dgL7i1kr8divPhhsjtQKX2nSjdA3k",
  "key13": "HMK5LEZeT7NktKT7d329x7WraSSCCagiL7wkVsZACKabwPzJVkHMVSwdrGANkokJDWsgT4KZXm7VHzeQErVJqP1",
  "key14": "3LgAMgurgZsearcL1hhC7eXaEkL68E1HCE788Fox86JshtQTaUZK8xHSug8BH9WQJXNTMKBcsYoVAaqaiGoDg3mC",
  "key15": "4MdW2dFfX6oyyYbESV1MBvEvNiP4GV9joDyCsHg6ABhaMNpxJ8bKnqF5mVz79o9J9kXPG1xpGFi5NnxNo24DXG5g",
  "key16": "4yfSjFaPs6R9StZMbtMajHadRS4N35GacSXNNyrBG925DsNsj1MoMc8RFLxrtWyZueQwtK4ExHWmFTdhWBx4SiUA",
  "key17": "492H8LBqgCPrGn1mWTNchKAViGPDhDfBPY7xHozFfiyx5ev6yCG2kaqywnCXK2XESPkaR3mfRF1XYnaUSfSKpAWA",
  "key18": "5DiEYYXNJeh8Vw1sSqir3UmmvkVqQPoTaFyVoJiia5y9PgS9qENTQKhWHwQWmRaJdEu17m8wNgu8vJosxQrpzfoy",
  "key19": "23ZuhUeFanMtGeAZXEHj6MgaWSwTvxp47xfqfmWyypLq8YgKFZyp4LgxMZaovD2b7DdpS4VV6UfTrt91Pb4X9Nss",
  "key20": "492kXzH2kzs7qa9GGxY1QGeA3JW8iXFYEHpdZNFwiWN1QKz61UGXwQN6G1fQpeSQZ9mGTu3tuwMxrrb844yQsoLC",
  "key21": "56bHWkzgTT7v5E25kB3ecqkScQS26f5bPqyKNutpvBp8CZEfZ7tW5Xq7iMwo883N2vijJ49W9eELbci3um3iwMzN",
  "key22": "3QdoSLHDdAZLi2rNLp3AwziDoDXyRmgzrph4z25pSGhLEnRM2QUCdRrwPFq1UzmL2Y5DM32URtjyHHXRS6bHhR4f",
  "key23": "46D1XZjKVJgvssMQxYWjZAKx2yMzbPfSKtjtyQ8jUxzi6jGGoxWe24fC9YhVbkMVnbqoDmzE8NfQJ29uFZM4DMX8",
  "key24": "37Nes4djPfTTLGAn1ZDehhJD85vc1d2Td7mDMVk5SidAuwLfeUMDrmHLJfmjfVYFHTxfRDEsawfXm3gxHUZsVetd",
  "key25": "NCeuPqDZNLhcBf7g2oPta2CzQSzwhMz4aKhtZQvxXfBqTmN453TmS99qDNRpKvqgxqCLU59gCfYcxozRv4C4szV",
  "key26": "3m2QuhDrTeXVVPbW45DELrNgbMw46WnRKcn6aQx6RPVygzDqLFggX6VVn1mRohnQp658ekt9nEdrZ9tSNVXrUMjD",
  "key27": "VTBtYJiMCqNyY3t86g7bufkExyMAdp2yyzizbrSt4EPthk5rXViuT48C2trfgq22umub9bTRAgTdj13RnG8snzD",
  "key28": "qTrNMVd1MTEg1x5javFb5eiwW1TSUP9WvYPLPLMcL2PNUkrEZpVLtNaFhgzkhdopnfo8jWH5XKjzrqWbzmkY1GJ",
  "key29": "2WPtDHQ9EAsgqvicMYdHTPJXtpZsjVC59K8z3bHKxjDuNJtFUUbRt6DKWQvFtTvvLRgshTzqGHVoHSoBRTQFdEkk",
  "key30": "2DUU483LJ9n7sy6kZ5LupRdhG4cx7p9YWp1q62fKJ3mcuXQuh9XZ68PhjWWVCtpYrf5MNv7Jo4Kvfy6ZNwzhWHNK",
  "key31": "DUXimghVa4Wnx5Ra27j1jYp98vyQw37Sw5mG3ar2cEZRsDCrmZKjMHSsHXU6Y9S7AGdriV8moFwHmQycii8GtAF",
  "key32": "2c6W2TorcDewMSXQ4kxzW5UofmSQUmLmGswvBHm5J1RqQpXWwgEwtnr4x1GjdXhkB5LgTDWNRumt3fnQRv53GJfV",
  "key33": "4Y15w7XrGwQSrXHkwbiQScwcZBS2V6xG8ii6zvKZFQz4kM4xSBgzJrz76YAgd3K3KfGthk4XLjAixmvMPgeiGWHL",
  "key34": "3xxsrRVxmEDjkLyGB11uyXyHN4bZFAgb6oX9cBf6rGYSt7fKE7YkUFCgpkPFyw4qtWEqMXpxZFkkh1oY9aVs19PM",
  "key35": "2NhfDhRoG9yUZcBr9vWnQGMcNJQcqvPPRYELBGGfhctqKnjZDgYSXuTkeTMyLpK7aZZ8Z6R9SimPMfdcEpE5fVaP",
  "key36": "5XZAHF8YVRawDfTLck43Yq3hJ79SSBWiMHMdzmt8QbMy8mRNecrfM4e5AMEETRot1coptxhBADg74PmhC5Gea9Jx",
  "key37": "5v4GeeAmpeBKvUKTr1t6bvH6Ddq1o393fynWcSJkW7AH5DJJykCSYziyApvcbkcXf63F6RdyQvt7WsPAZwajtWKW",
  "key38": "5eJb913n1bFS8AaKJ3NApMkyo9KAJACyHBD3w6GHGgN7wQkSNezJFPwQVJRLUG8qM9Sxh3eugzwbytFo9PwNN7wL",
  "key39": "ixXa8tif8KrxbRgfMXLvQkr4oaTvFFFGHn1sJkQ2rJRhu7kEYAWTdoaUQ6DqVf7y9HCnN2UVWgENbZom9rXua6u",
  "key40": "5Vs1eGAxRSm7z8HqaKhf4NnyaG8DoQFPFQ9MjmGd6AoEenB9UC7Wb6P3woSjv1gzLQwXzMRDTef9cLhrLUC5gLrn",
  "key41": "28VQobdnZodvDJkYoSnmNKHANKqJA1MVzcvBC4XkmYaEMsUi8wq5T3N9qyoodEED9rq9TH3qSsrXirPLRSc8L1J3",
  "key42": "3GmSxGMdd36FNtjSqpsvwduxYsGyNNLCtxK75Loy5stARkeBVxkzvtCndX1Ley86CGPtArvtxvHDxkZtch4QZKLh",
  "key43": "57sKREB1PRREskuLnFDvXtAQPgmFN32L11xSf6JWLqTuaTutEUNBLNKpZrW3G6LyEQEeTaEHxZKFDZNT5aUiggko",
  "key44": "3UYGan82ZS8F19Ge9TdPjuKsRu7aGeAvr5oJvki1MhsuJSAsEFPTN53ULKkstWGrV5m4q91tTEvoh8k6RiXRXgMk",
  "key45": "2G786djP2PN3oFts9GDvxDUKoN1BMyXMtgtRsAEwvZyqRAgKspNNR4zMrF4ruQzUx8MudWVMF84QkY5wyks4wyqH",
  "key46": "2BXum5aaEwJo85Do4xkgonXygzEergfGkYpSxj2dwwCopVrtbHa8ByNeYAjTWL9CBfhm838nmzMLYkxGqi8CuH9J"
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
