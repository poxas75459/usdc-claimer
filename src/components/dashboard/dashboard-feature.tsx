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
    "nY54thJnBeEmEDgm7hBKzqVVktJmjHxacAndiTjcgatbpy3Z2Ynt7NMB7vWzg2cGrLC3xUJP1bWZaeANoVrDtSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVfCNwRg6ZHMcx8nieu1VEubpeiQM8txWWZEcrVVDzsW5YNE2UQRHFk6zHWP1iqXiwgudTiEaSnjezRcJZ7gj1k",
  "key1": "31p3JtXiuMEr4FXDNLXEXqRHosS6kas1VGPddy3VWgvqTkbm415BxfpcS4D4qMQ27asSaRY9YymtPk1icwZdK3LT",
  "key2": "fygerDGzjHznW2hCWhnLSNSsDqoP6DoN4f9UxFTWLaPXMah8G53usBiBZ8HmYeGN1cbi38rMn8uA48sac8xKVrZ",
  "key3": "3Xog5FZHcyEcDjnp2TE1Y98bNU7MYicSNpDMG1YWxkWSFWndGZ83ED7JWdtGGw17i4wAszrNv9V9nF28uQdUNtiA",
  "key4": "5ssAVXBwRvsT65BdeBSRgdkHXJgwUiJnQqhSbLhZPE1oijMNAnYd1Tn8MTKCjzo5myYz5U8EwU6STirVmhGSh3kG",
  "key5": "syKUL6gLiyyzFsstar6uhADPMBFHKbnk3qbutKdQANjEWXo4wBJAyBZDpud5UAFpjzVHcEStKYYMJKhuRCrmLv4",
  "key6": "5mCREUqUEFREH3ejmRcMrKn7czGwc2M5oUQLSG5F6kkqYdTC33K6RamQ8M1EV3TD3AXZ6XhZdGWf1XHpRSzLr5Vw",
  "key7": "2PkPUcEDKUBsQwoXzChuL7vyNYm5taHFN2U9SRPVPDLPFNmv6tF3Yzkz5xQg627MyCfZopLGMdqjp5urqBieLFGK",
  "key8": "iSn2Dz8jGmW5627K9KcHCrd6D2eSNS9e8gY4s9y2wzaW8hoH4DqPFHXjxKrQrhbrgYfRwAafmXarV3bmBWwqBn3",
  "key9": "2vk29fGNQxNFYVidSPWjcajkM6r7PqHzzdK7T3AqtmYb2aNZVZpGmwWotMrP6tNHAwWejQdcxCcaZ12YDp8HtiXw",
  "key10": "UxJpys1jxAwvMAcZceCxxpEcenoc5W92u8o5cQrJrirmPSc6TAF4LSMuS2adcVMHRe1Qt24hd3C3UxXYj7T9KmD",
  "key11": "2nycLX4xf9EdJZzCMFQxK2wEJyT94bjXcij63wN22VkZb3VHXCpycp2x8xrGLREyJi17TUCFCU3mRVNe21cUTy4g",
  "key12": "4dh9tqY9WNkLhZkCnjopmNwL7k8cVB9M63tKAwrqgvsE2gtsVnWz5jro9sYAJe3AahMzBspuYMgeaQ7Uw2bkwALj",
  "key13": "5ypvx723pvQFuCbsc1kis8MHUGsjeMH1w2MXXHnz7MvwLkNXkHYDGCjwQY9yK8oN7vq8iyFRq1ZXXo5GQRJtrAy4",
  "key14": "66mFK2TUCsaTEQrW2J1pd3dHcvMdb4eGm5qTBw223syguHVuVPNrzRi3TdxNEyUQc3ZG4Thu9u1rbYKz3y2NMQeM",
  "key15": "5vFy3o1ywwmBWeJA8yNfZNoZYCkHMqCPzHrNnwRPBiAZriLhLzBjx5Ph2UJd6Ch6i7BCUbzsdPYH1PEjiUdC9YGv",
  "key16": "aLwXGRB3sAaFptMrqwjkE3TLsQtNbxbhLdeXnQBXR3h5XXj2xbbR67Uz1MkwNtW1DnFJYP2FVuRUAZ7Ghoco4QD",
  "key17": "5GKePvcp8XZ4DDodTXvCmMNomUfezbdyTu3C3S2zV9QXF6CcE4Giz1Pbr7YYdC8MmZjQHgGRGgpLWFUY7JMiPJgL",
  "key18": "5RR3ECqm8BQpxDuUucqEumtERAby3y2461y37ZMCVb1tQywUarbvWNpAkeaX6qk7J7uqhR1EWhWhhxLvLGtPdYop",
  "key19": "5Q3Ebm2RDXMLWNFSV5nGLzetuMPF2iR7u2JQcxiva9mPqZQwhWEmJF3S77PmNtd33FUdjCMp5RP73MaJa6pZCD4k",
  "key20": "2iewJWs3aw5NEmiiXhEo5zQBA7s2Cd5PPN3fg68QnYd9dJStXRuHvjn3rmqBHrjfm8xN2o8KSSTv3LCA3C4MpkF1",
  "key21": "3wmM5dRzDKVBsd8rG6brZvroeswtGGsEdQUyPGLD4iqnhxEu97TwB7Qhteian1wX4ZMUvNQUMmVmhQpfTUBkVQCi",
  "key22": "4TX84N4aF6DfXyqTTtediimqHxctYZ68JPuZM3msYpeza4RhV67TG4cPP1SMCmU97Wepc1AkYFfZf2ekig69b3iN",
  "key23": "47hykpxE5xoaW5sKrDN8JdLsy6G1UjnWCK9k2XPaZW6jYS1kV1Saqb9TGX71MCMUAWtiSqUY8tZGhDL1K41fQZ2q",
  "key24": "PDncnWBDc19z31EhdZ8ouYGZrgTPokF9HGrWMLvUVAdwc81AX1vinSMYz1wum5HpcBTQYscj3U3im8VaU3eoS8S"
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
