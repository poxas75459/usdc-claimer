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
    "2QBKJtY9hH7ZsVctfQTRuJFn4RVqUuzV7KLTYjDnKAt2L9tcLwB1hWwJiiCSy51F4ddhN3NzGQFg7EBvJzp2nxVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVLcPagGeRxSRUyS76YQTmMn58tzuRC4E6Y4Xciw3ck1Nhgfy1NJfuj8qCBPz2j47bRxhMT8rrcFaXSoyaAG6He",
  "key1": "AFdJeVeoamagdY6MiWnfgWWNqzedAtPBof2f3iBw93cWMmCfHFSTwJvUpbSEWG8FsaVwY47XiAHReMifHzgpP4z",
  "key2": "5tuAwExYy9u5cHkvADL8CYWm7yZBXbo8hukg3GoGMu8ewkhiyuLqgp9T6rPipNycr25XioDZAjeDkzCQ666Zp4oq",
  "key3": "s9uenKRPGtpYNeKjD73tyHEocBiFAUv9HxkYApSmbYvbqcWZdsDU5F6eYvzSXxPi4rtzuYkDyYfjmP8FUXZCtmf",
  "key4": "3qz758Xt57XWJGce1q7WKzdQ38NLSHHgewBtLaqwHsfrjDuBEzZwDU3QmSohNfPLg9rtVViQbs1DmX5av3GyH6uJ",
  "key5": "5UzDfUdFNg5EFQnvbWNbihRTRFWiM9UoHvhFEQW3RgNj5yUXREJm1uDaR5qMPMN1G9RnqR92UrBbqnFWBDwV9go",
  "key6": "RmXXhVrAXq35QUQ6xJNqxVT6X7jhu2j8fevAbTPwkZBrQSbJEk5VYvSMGQz4wRaU6ZLZcWPs4ouZ6gtCGXCpSxh",
  "key7": "5Y3jiCeEKfyCFeEfcJMnPkziUZ88HL2qac21fLE9J5mP9fgS83xQvV74jEWVUF9P9L1ToSckr6CV79yqGE8p65Fm",
  "key8": "3zGepgUZJxbyFC68nNKWojVEjMNoX9WLktsMojde5NQM5knFJJuwegFP1ebeZG54acV9zNiCkBHGmtubkTy97j3M",
  "key9": "5LUwfR9iW3hJb5KV6S2CPBZkM1F6A1zVU7D8DpLscJZmPxkYcA28SX935kWmAMRvtyXwTf9K9q9ndAqcBwqLwCG8",
  "key10": "62r7p61aG2KvPJ7kqa9fRxFnXd16Abgcxy49hsVz2G4HipAkJBevy4BQ2MdPvxUGWQGLkovHoqmrNBVt7TeufFex",
  "key11": "22DuMj3deXSsMPLdTFcZCqy9F6rRxZtaT1ZELkUCYFEyr3yuL1LNmuTGUmQ8i15HjfTNHeNFDzdDUow6hxK33ZYt",
  "key12": "2LRbfBAPNtfbyXWD19RGUni8JGPWgKthvHCgPhBJMtpdUA4qLUo7NwPbzratiFU9n4BBR16kfeiRbfVdwZfRjFfJ",
  "key13": "5RssD4rfS6ScrxzLop8W5B8UcnJW5gjeD4HQiGjGsVYQzkBiYHLFhVboy8EeyPXWrtE9GjMtbXHx5dFfGBCJRvip",
  "key14": "23iYGUdbqByScTPmgS2yG2dsP1Edn1j1eb1pAJttBATCaXHxgfhXMSciagGjtjCBNZPbiQWmN8eLFLVcbtB3pKVs",
  "key15": "4ediqXAafbKa2qDbE1nQicpBVbu7ZdFLzaHaTuAcdmTcJn3vrqoJcf1LmqjCK4SwHDKEJ6SJMRaarVfHNww1LSoo",
  "key16": "21BNe6RcM1PSUTuWV45MggpfLbuAavmVGVUosaNgyCeXFo778tGrdKzkXWrgs7o6So3Mz3DYZabziB9oygwvKW67",
  "key17": "iN4f6NPDQnTEraLtVmRv6nYRw3pSfCdinWAkQDW4NrXPRBsZ7B75wuUztwtCF7crdVaRbfVP7gmjqKtqwGknrRG",
  "key18": "4jZXLzbtp9PamuYWrbiNB6CcMVG7VtK3WV38R7demtYPPTQPafYrHgMXLdHanMzVDtogzcgPGCDz8pfCkAzb3uAT",
  "key19": "mPitYQJ1ffRxHUrDyQXDdTDLi6iM2MQ7drTTNZfxTA8fBxAqFwpZDKkKnNGs58PCTx9Y7M995ENwdWwgUDbbSyi",
  "key20": "61pjw4NiB9izsdMXkahfhsiiYZnaJcWBCWabSUFCcT2hoBpStZLnws6hydY3ap5Ark6FjKU6auVXn7AmHufsJ29J",
  "key21": "3NbwpbJiqQmxcHyV2vob4VgxK5zqbKteMjiTLk6b6QukKVpf8XW8Kbg5qJSYqMmwVuPaDcgG44gryuMmkZj6nsmj",
  "key22": "4jNY6DTSGyU4uzSUMGUEVCEKVVx7Cx8SHTu1HK6f3w7cVnNKD5wfdj7wSQEQ1XXHyEWvvmqcYTsEn3qdz6fCEG1U",
  "key23": "2vxcAFnrzTJkDwGLM1sDdxcnn634DimmjecWWrteGgPH4U9GGf5mkVpypfUoZstuxm5KwYtsbtG3xjyHJBdLCQGT",
  "key24": "2FwfCHCdcToXHdkTBAuK1txN13HPrFC8gBzUrw2PMRMe8hoDAohSajGzReSyEV12vVSuDa81EmjuCT7Bhwe9RbsT",
  "key25": "3Tkp9GaVt28HaLfrVMXCoArVT1GjqXzUrBJEFdvVUeKNkXPTWiss1NQKaHSdjRT9NPi4Eh7FWQnoWUjrjtUmU7ep"
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
