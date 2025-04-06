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
    "5e4sN7uYsbsRtjGY6ipnpCvJ6YuFbRLsNVjjecE8dsaDRDEsuK2Tot9kXjYXC9N6UASDJBcfDFyY3fT2b5hjucaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uiq9XR9jXy2nUZ6Q3XRvVBiibShaD7i8LwURXpKrtk7BYSrbcUpt5q6kRCLCbEYZ5N21SHW6B3HbHrawSPueXTU",
  "key1": "5oZKZaUKd7GaDghxHfExZzs4bmwhuJP1vGegDzV7PJXw1kHY6kbyuAF4nf6uTEaQEZauD89FcXYpNND4fY6upEwQ",
  "key2": "4hWebLrJHo2gWHKqDPKmvMVGhZLvKwNLNbGDdXeWWj1MMmsWjkicfiGeUgSYQmK7FnXZZBTX2YV5ZtCyvFUDj2sk",
  "key3": "5Z3oiua6BdXLBoLMBoa62oz3nibC7tYTqXSBzy2h4gsMX2yHn7pTubPyDUpPcyzBqqobFD7XymSMpJSVgxcfZqr7",
  "key4": "2h8fbdHhsMdLH35i3EXFZDTU3bFR1PJTgkj1bpaxQjii17n2A52EDmVuzfxbAGUeFLLoF2gr65WqpzwWSEPt66mk",
  "key5": "26Y4CfS9xaXW7y7Uvgi6ZX6UxLSrseFFg25GnRoPt8LdqigXFaZPrHuuMv2cZufye6n4fjQwBXg1bNm3h7zWPgtV",
  "key6": "4wzUVBLLT2Rv3yK7iMcNsVqNL5gCvWyJkoCmSWN2tWHFsepD2Yyr7o8nbf95t8MG5EvWE1idYcYSUFz4PyKVeUq2",
  "key7": "4vUZNAsVG3sCXggKdzbbQ1YuayXPspdsCZ1NHUrN9AqoZb1e2tW5UoeYYWjNBR7yxq3ikJMBKAYnLmWEa15EXb4g",
  "key8": "uK5wXUyTJ4qXg5jPJKzQGmDDCwrH6V6NCkSAtbYg5z1fqJ11hh5FSmgp1qM1axft49BKRCedS7ETPrVEtP6mjJ4",
  "key9": "4piW3orzjZoxphNZE9yWGgrxsmcfiRdDc5Ler3CDL9encquLyyQ3gzm9thWtCtzV1AAjmJHhtd1FmfpySMswhkTu",
  "key10": "3Z3A1dVMd8u2jgvhqgCLBYVhmevkCqsp4SYTha4HpyrFyJ2anfMEAhiUs7Ah9csJp6kmo3AC8hpuLZT5NUwsYxih",
  "key11": "5u5id9ZhSDfECfYxRfcBUY7D85gH4bbTFUrknVxQpQ6gL2ir1dw4UcpEgy25SkmL3SU3PBLTyk5UhAb5T7DFFBfz",
  "key12": "29MbZW2nEAxPMgqbX9owKds4DMnej8FwCi1Ek9j2WgdeCBKrUbMFJfgMvbqS3yGN4T9gxETDiSmMg7J3XAZg8bDr",
  "key13": "2MR6PSSB7BL5VtrqtMSs7YqvLmxCVZMB6nDgMgMyKffUBKdUbChM69maKGUgVkoZQWzczvRB5vBYsBTwPSJujTPc",
  "key14": "2grDSbgKFdXrUf5nm7coetM3CadjUikJj3JRXveTCsxgdythgHvRuZahgNQLjmLUHhyM5LQxnGJbLNYejFzP73Xr",
  "key15": "4NBQyXCj5TGPx7DW9Kjw7Vna7F5CcxvnfUDbUE31wZGPtomRAzEsZfzvsACt2LgDCSRHJHC6V3LkshKi4VS41uQ",
  "key16": "4kPnxTERyNZunaSy7fAbqrPcb6DMe2E9voey27PRnogvoPzdY2HyNqkVeHMXaJPjYGkKRjC2ArAhdgDN3dokC6JU",
  "key17": "9CbPbV1rGnq6AXUV17uDkXN8FiRgzd4KirXA4STUwZsPWZdeDpSczGZs12KjmrVTZ23RnJf5f8ciHpntdba7yC2",
  "key18": "4qGQhRDq5Co4qmGKGdsFHgYHFJV5oZCCu1QohiZ7QnwTPN6n2coAuuhXUtnbbC1vEX3rJ1vJrMHK8BxK3fX5xzd8",
  "key19": "2Ung32QjKyf9wUexBPqSSmqmjtMZUc58zftZbuT2iw3U5XBhu2Nz3ZCrAgiLoywBKRZirTGyktz5qyUbzNeNWNDS",
  "key20": "3XRtnWs9HJNFqcoyfgyDm4vpASYNTJv15gkDBTfQ1AmgUf2HrnsPWLL8SRtA7q37Hueur4i3fymDX1bV9iqy7h9p",
  "key21": "6pM5iwrcrieRxrVn14FTKW1yHspwAjDEverMrbeRN3yy95PJyDWg9e5ZVV8sdRA9EAj1if4AToskjJJQpSPMrQY",
  "key22": "3BiLEF6TCKHPGZrp5oynEXQjboPekubvWLqr2fXBHuN9hXNmHya4cvmhdNcd8mQnGayMpBKyKQUKMgrQdeme7Ng2",
  "key23": "AchSwntSBfprv1kLTux4hjX3Nxj8zdRu5LbMTRTAxG729qQLHA4yGRfxWf83CzkPsoNiBQYZxGf4EZVtmMKa7YA",
  "key24": "3mTSLaJ1kmLP9xibstvMrL59WAg3KJ4NoYX9EmmDFDjYLeBdPMN9BAu4sbgY2NiujHRTqL7bv6vsmt6SmeVoxnCF",
  "key25": "2vZDLYZUYN22PCpHx8DxsV92i7sA17SgVptsV6rhMXdvvBeL4dctH3Jr7Z8Z8paLbVoTMzXzZjNpJ2QETKKPKFgg",
  "key26": "5n1fgpZEcVEq8UuWcjAKh2cZmKtrFNj68eYNoCXs7rz77dJQudX5WoVe9qWpjy9ZtKjvfqez15v3pknbvuGiD3Ve"
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
