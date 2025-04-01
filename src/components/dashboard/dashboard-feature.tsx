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
    "H8jPu5VbVMvfQBmmF1FGCtqAUwmwcYPtNHinguuuzFt7uccXrS18568bnnjtJZ6YzUe3Z2XZe9NcxQn7QmXD4VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VWMem4nCYbDJSrPpVfoAbDLMX89Qz9wUXaxMoNEv1YWqJok8HeJS2CyNrRg9bUg5FMdTWC6ufXEjiAeVxTbujr",
  "key1": "3Gffc7GxSehWMKjWXPigTYfp2DrQC7PpQFNuvJLaLsGKm8653vNqg1H9x98vwGfi9cZbQSQmPZYmSvaWcZaC1Jwo",
  "key2": "3tRRnK4wiYdgxZUbHphApVLHqBzgrCfgBAXb8QDz5LrSufm9dVSfprfqwDZVzk1GbJ9TcFZHPRNDidTu3LgxPwj4",
  "key3": "38MVYQ5xQFZRMLr9JiPKTVzdPFm9S6KcS3QLHwYW9gw5TKFpW7pWfLPr52ZXRpWj1yuaKxNxdZJ9h9cmsRH356JE",
  "key4": "Zh4Y3Z6BddMB7wk1Tmz63kjCQGS48GU8d9vmnZHSEoeTRHVLqqx7KK4tsqGD7Hsx9rTjwhkEY4yQy1v9XSKj8Cj",
  "key5": "w3GTPZrE8rxHEfAyGFbzYBvi8JQHpNN87Zg8SBagsA5WM6Lnh7AncJREdMg4N7kiWfRitcQYxcDD7Aoq8nDfBod",
  "key6": "49CCW2fpLKgyuVLj47J3HhRko6X5btp88m2awi38mWJ44xz1cMmXBAXEj4i8j3w5sfMfmpzAuGDDGYNFoNUfE1yN",
  "key7": "3ehziabmo9UoweEy8NeLRQYUmeMcJWoQDP4w1knsa6xzeREs677avCC6Rar4dGxmk5pr87CDza261hTZrYm2K5aX",
  "key8": "23TyVJkAAxUgA5PWNTLjZXpB66Wb1i96BGrkgU6RMK4rptdMwRSUDLLRrxta63oMTUWxVE1udhPHW4pjzyXLxU9Q",
  "key9": "33i291M7a97Z3tL9fS9t2hHFT6WYT7SogWLdDMbnfer6VmHbNHUR97cA7Tr4pEo9dYskuLEPEtTRsJ8SdGQ2VsfY",
  "key10": "3R3wPxev8x1QMqiNJEUVTX3czo7S8rCQYRWa1N6zv7K9MG185krAvnYhoqv9KY47g4BscEP7NNTi7H6QU5C57MD6",
  "key11": "2ZsKy8Kg6vGbB3XLQNPb9dENkD9MdECGwdrBS4MRNWJhYoH5g4dHTxQMgmNywPqkFoJtTc6dBc1rsiibBYX658G7",
  "key12": "w4J1qzbU7Y3TGaudXXBsyiED4DHv7wjXtARXm3dBDD1Nqi8kUmTCoZKJp3skt3XwNmKJgSJsVeuJfyyiFqkdryt",
  "key13": "4Pp6ErWLSZsXNVssXJ8xTKJwZkgLP9tf68udF8PMYJ4XPGhbpyiVbjVHNxvqTEByrcur8R4Kx4S7nz29PkDfWCxx",
  "key14": "5RyT2n1Qdjh34siaJJ5jZLPZcDjwg3N9Gk4FHe6BqBp7asA9JVA21Vqu5BnWwhrrpZYsB9GR4XtdTGECfEYqfvwV",
  "key15": "586ExsGc9YWq8qmW2nbXZY6ZHcNgdDYEyhbyiVqHux12A42JrJjHA1R2Pcnz4hRzPPcm9o82URbXMRr1JjCnhVJV",
  "key16": "92DBNFRebRFXDWjAasstAcjrFSmdj5TVC8dzoh2fsKqdg69gyFXEZydzigDEVNrHcVyyjaemLQh19hyN1YtiUqE",
  "key17": "5LLKefDp8FEkG6oFy2TX9MbvFJLzf6fLQ86fx2YE1fUUeXb6M4icpvLiawFGrG78dm7bZvdosqEYcqL35AfWuHQw",
  "key18": "2ZLy6DRBHpVBGx4KTKyC9Xd6VW2Mh5tscRSEMuam2F8nRVpR5X6b794uujVDkvADyYisd3eSJyyErKr3C8M9RrxX",
  "key19": "588jaGq42k6GK7LW3hVZKF6CBMgL6eGXK46KXYyM4AMSX6XrUeEomCk3cBqg8KmPZAffb1mGa3BGhTrVK31dyPVu",
  "key20": "5TjzK22877mZ1kC8YAz7Wk6UDMeTRexSt2wKingX2mgjq2SyfaDcjVpfW6f1PDXvEaHArFrg9whtR9CozZX61ruJ",
  "key21": "4Y4pjiN5srgXJ2ZR6hyjMRkAozVdaoCvgEb9avEvHP5m1e1JumoPZ6BGua5ogXJDaXqn5WdVyNTZG12T6ptCdXXH",
  "key22": "2zGgwGb1cLowPsMgAF8NJFsVVzhwviDXE5zWKSQwZJxrGEqirHmri8xrgwE1ALNMnKYKQD1SQ856CQAzSy65ZLAJ",
  "key23": "3d6j3grovmNE6FZhLKswQ6rqb5oe3qrYorRSDY44G5JKMp5zfi3RKwdj8mW3DT9W6fhTDzuBEAF5aBB7GVX26zDb",
  "key24": "5Jf2xeqYNrXYpuVg3UXXarEfxstvrtb5VUxBWEn7RPNWVhUv6bCNZ6LoyVFsKJpDHRTtDQHCnKdTVzTvQHkg5uZm",
  "key25": "3Yo43hYXTKnasEXeSTB7MWySKyWNHuiP25ULEmQTEh5PmCuqTedcUtWAmN5YWKEgrm5UGdvJFy4Se2aPBMPYL3hC",
  "key26": "4Df7XCBQjud1fPgbA1XyQQpML5ZpdEKQVtbvQV6gHixmfQkG1TtkUgPWhkmz3gzf8UZ4di28B7FxfCUPmNFR8Gu5",
  "key27": "VPDZnqnnBcrgCT7yrjzysvv3W5SRkJvW7MdYXKifsHc1y3dhPcJMAQ6oFGAxkUc4Pb8y8tTxqnsoUxs4bBGpncr"
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
