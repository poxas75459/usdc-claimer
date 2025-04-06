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
    "4Z2gfhGpBphjocjSYFbdVFzqoPrrgfnucuGRJMgJ22jyGw9SBPdrmtHMAdRUBtsJKBPpTVeG5AFndrjy3StzJQx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMW6UVhRSNH1jQqfdro3DaAdX2tsFHhoTKpb3cfysNeG5neZPJYMNgLSn33bvoHaFmPwNnYf7neVSfzNjQYvZTB",
  "key1": "33V2Sqh8ewHXKihRfxbmhXzLB1CdWjK4bF9dUMtj7F8ZsEEybnZb9YCFVGb7qUX5Tt2YAZct1qAZh4SQ9Fhopr7q",
  "key2": "5jAJ6zb6apV2HvZZyvjQqUMPBMrYcL456CVD1RmeeQLgJ9fhsGt1WaxKnGKPBeNyiZBfp5Rs89XDurW1o6VVzpup",
  "key3": "233yyBL9uFAQ6Rweh7a6KTfd9TKerAtj8bx93QpqK2M9wAg6jiGYEzjQtmWhU8FZpqaVY3hWoGVMPWWiHQ5ma5fd",
  "key4": "2u9DbFcb3vE2UrJ9zdc7TnSXC6ZAJ3hEDzNGQgf7upeWdtuzJAXXrQXLq4PGKKs4HN4ZeteBVugGwuM7Lq14HCMy",
  "key5": "3NyrNknWMk3NeWUbFUe1uie6czCyW9Jkd3Nr6bHgAp6FG2ToJogszABU8fUM7Mg9j7pZtRWMagW1jqQ1CBPcmqcF",
  "key6": "3keKvMYoVfzcRLrHKK52DmVZg1MZCRKcyrxyFw2a68tSfYhLpAtmWU4tDWtXSR3fFuur46nFNe5JrntGiMsWF7ja",
  "key7": "4RtRdWCUMyHnWjuzsScqr6kSHqrHUwnTsL8bzBvKGNGyXnf6jX3ikbVPNrYdNjbnxcXMkYgGETFvNG6p7AhH5dPV",
  "key8": "23mhoHB9DErFcGZoJTEjNivXQ13zpxiQupkaMPtzoK8kFQsZw52hKk39fdFzq26B2D1Ay65tKAikDDKazuk6Htw9",
  "key9": "5dyKgDdmisg2GwxsD7EDP8KQHCmPTJ6am9WdbMR8rnFhaRJPXtmEFQ5EtfNKmXvDnH4MJBmce6n62gutu2Hb29wF",
  "key10": "5wzZu1FqsMUBxD3YDDoEPYjN7kcwVN2rTtXMCQE5aNY19ieGAtFxk8gmbjHw7uuAwpgfBHSuLJC4WgDjffsX73Z8",
  "key11": "3mcZy2rvVqg9QvmihCYzfCHvms9JiYPBG7YekegwZGw2Gpi3eTM4uFk497QmdgJKFHnDTco4V7iidHmCtreV4Jxe",
  "key12": "54QcPaJA4omeummFDucH97w4uAn5jQVWFYit1kDfyf2D6w3VZFwXDazJ39unKcqdi9gNh7ayBDE27tyzsZpBd33g",
  "key13": "2BYWwTmKoZdrUeGJqfDM69ippFVrsTwr4xWyJsg2jTdwqyTgxHCaVGLtx5vssAGJBwcho7xHNZPns35FuWBXeiok",
  "key14": "PB9NPzWg6nPnyMWVGgPASxwVDLMKPhNtbmU1anixxzn6yrb7LW6VNMx8HzSjpTWgVTFmSp5URTNDsoDDa4acnfQ",
  "key15": "3e3o8eCbFpJWEnMgmHy6DXZSjYujvi448c4gFmM3KMAUykbMRSt2eBXcJPMsn87rLEudq3T6YWW3tkLHPxmNWPu",
  "key16": "5hXx8uyG7HeB2YtUF3t7vAZWiXQvaC7dhQUxNhNDLRqyKRjSzkVqT4VvQxisxHPd1KkBf7xdYN2Hc5HhYU3BFCn",
  "key17": "4tLf1Xpm6FgtMYyWhSz2fiXHei1bDczRsuPZLZ4knACycZisPwpo83RPXS6NPz7nZr7Wi5D5oYZN4ekgoo1XsMcQ",
  "key18": "4BKEcPZuN5ssnVVVq8qaE1mwwzfjfgASVwHNLHW6B32Rdg7ffQkA7HcJf1Ksrbr5ifKgdAJ1q8etNcDRQQs3aFpf",
  "key19": "4kfZMqiL8XMJBYUwhJrm2Q7WdsqxGqGJLjrG5tJqy6cjbXE8xG3WgehuHN4sdhwqY3frfdsUijyzezFF3WNehJAR",
  "key20": "2FMV2evZysEGW5y3MddBXyz2YNkfDNDPTWYNLbouPXMgGjaEryT2moi9zxSubTVWDzXmTWWaqQUduZsfB21Q7zAp",
  "key21": "59RxaNuKmSUr7Xe62zTMz3sSLZ9tak1BcnwdjDzNcShZo3NuYM2NPZFo2nKahHAoToKrXRRMCid9sTEDWDaj3wU5",
  "key22": "2sHM8LwSu3NkiLiaTPqrVLK49BQHGwkAZLSWpxKUrCYq1vLBtHm3GcSx4diChp958WZ1E6pxUwbwFTpm1RHu3rgj",
  "key23": "UwAzXmPgkxrv2J3w9BC8bM7owegtJmbnuVrSsx6WTuTqtW6rY7XdoW5xmE6b27ZHg4vtDhEb4VrC5sNw9uwj585",
  "key24": "3rpab8Kutju6nzzg4WiKq2EAhLRPNSL4MgSGb5dqXeBCZSzTrcunfRaDuaWssU7BmE3uLhbjZdwQ345jiU6LDtUq",
  "key25": "5YPHfYgRyBxmofWmyywpVnAgjP3eUSEBXrf1bHYf3wcEFQjP8tiqN4AqEcidVBVJB6JqwYAFaBmtdGgZnCNcPZhY"
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
