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
    "UKsAuABqmhUdBryXbsXbWeRGVcYG1yNPvBj5TMbZCA6HSzrNJVx4GgE8qTrLA7L92FvrMUVDwF3rsLBq7dQqnUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpXk2EcgLR7s66KYLauDsMtSSEEGtNikpVVgT1WZBYW1WLcCnxmwYX7JDMQvic328HMEs8ekStegedCo2Xefgse",
  "key1": "32pEHKvWcJE9rTGUXmqQrpoiB8Yto22tyTo2NDXSRHR6HcNxxjDBsudzkLuWYZVu3NEGmnemibMPJB3BkrxGopY5",
  "key2": "MNJC9xmx41fbqB2Z4KJnPdkSiPpbYa963Bmoav1fexoHndGvYS3pyaPPzBN18BCxkNHHrG96fizJkepJGG3jG9D",
  "key3": "5EjNgAUVVz8GmqLv8jXinrBi5zy7BHUMeEPRZ9hTR1Qb9ZVg1EjNzHRRiMjFL7HDEesfpfPChgWTFjtgK1ueP7GG",
  "key4": "4Fbu4yqMtPgwMMT5TT7qaYdAu1T3HP4DBxLj4anjPxWF7sMXQJwLMFD62ULDAV55u3pgDAetK7oRa2FSRtuUmvhV",
  "key5": "2QcyHmV2pGa1wqH1bKLVFYK3H48herUtbSCRdexHVkxDAC4yQjG9qWsVQ1dVciMz5egkB6EV2zPmfuYcMeKdFV4J",
  "key6": "4G1ST5N6VaPHwsaobGicCVrCdAg8KCuymfcnRBcg1Ur2QR9Fb27GAeDPF1wGb6yy3rnzncbYpa6cr9NQr9UsbvFj",
  "key7": "5G9MaKEqTfx1ktyt3Vb6n6v5qfmGctu34Rws7KgKhv6vVkhxK6TBCKKTGcN5kXVX6jDWH2dE4fqZUPKvmyiz16nX",
  "key8": "4AvjySMFXrjxoJud7GfLMmKcoXPYcKCLgdXetJmcD2oUZoWXqDBX56Ed9RTYZtHTuhiUpfXk9mUnaTHeBpBNevNh",
  "key9": "5tnwtA73sKkfDyDtEnEcxhyyxLbrHSKYDEoscuAqHZ3JsbxYv3NBerCpSmoTidtabpfC8DxVKccW7Z5AZBJ7aFdr",
  "key10": "2sMLmoLkkD4K3CuSVNqu4tU7pSH17LNwfTC8dZ9V5wJD5kPxXTfMAUUxQJgXsAfYTUgWfhJWMVyytfRxMmWfHMxu",
  "key11": "3nttp8GFd3VR3rqWXiScoKhEzPyzGCAFB3yWEj5Tx2zJVN7NehmLzikm1Z3EyNiY6CMUkqDfDwmY7rq2LeD42U7S",
  "key12": "WPsgxRiiAimTqAhqDGvYHyvD9RDB62Ybyif8aqMPxXBkCYuxHyjKdBb9Dr5s47ryDnvmAPQ5dgi22KrQKVuz1J7",
  "key13": "PHW38KsVdwKG76NyAy2sLs2U9sR1iYhdt9Lz75mob39R1TXtXQ93JpAA1f5kT2HZmEPXUAwParHmGXAEF4r3LVo",
  "key14": "5J9rYgetgutaDvZcwf8adQdo77mjufbsdGXW75nDhWU1FVWgDDt3b8b6NfS5tVuathoMU8ntij6i97UKRmyHzceL",
  "key15": "2TR3x6uNaoWE2ZhNVgsWeTDPJ6guLG8nGEtXBRVReHFF6uizuahMNgs7w1YmGcg4T3AiZpYwSg63WZZvSKP13mh8",
  "key16": "4hNqdgz2nG3EwGdct99t7dEChX88TC6u4PryW5m4nk2xxy35sRSb1ebToVcwUZEnPuNqB6GzXxDpzf1jBm1gNxsz",
  "key17": "2s7MFsJpEy9tQYLueWhi5Z7e87uVSGjsKPvBpeUbVma58PS2zgeMB2fRG4qDSqhS7TKcoi6kteoGSeFhjCgwpjgc",
  "key18": "5ENPfg8MtWkrQC7NRmTHkwhkzm3Gu7D35czZbj9VYnk1GPfbXM95Ppagvb5KhxNTf99Ydzr957zAqq8ebhGgJHUs",
  "key19": "2z17Zx9yLQvjjZqndM94L52i8oKwdLaW9cKkULm7LJAooFDqxykpU4tdcgyk1ondupiJFGM21uWoHW2eoz9WXziQ",
  "key20": "3jYArQJHJdzCZLiNDy8kic4fcm1dAbn6Wf1pT65SnQgaAHVrMDyrYR4acvLiJAayAVrZ4u7mg5RqrhN8r5u91xYb",
  "key21": "4GgrYfAvSdobyaMQzg678phLKEdiZe8H7Aurk7hxFxLW4nHueczxGKnhHn16TtuBnsed51c2JjQ4Zr7U5kR4xS6w",
  "key22": "pbCoQwV6F58gkjhDYtKmZuKT4vbQDdKocdxZ82aWwZEDvojgJN831ouAvYGgkstsKrEb83gyqW1y4fygQhNARkk",
  "key23": "632ayQLozKmcQXFFzgoWxWV6iZeJfhEPjCapMDfmpk5FsQjycwgG7bZQfiFxUuFupBg56eTur6orD5GTbGEuYH6v",
  "key24": "3uhGeykbpepuNpNYDB3Y5mSmKGTfi9Fu6kKrmrHfzkQbzpWWVEznUqFUFj7rnQxLoptZ48FTJBA8FwMgtSW3yytg",
  "key25": "2KpsTJCJKPXsdWB7yLvso4zCQFaM4C7WKoxLnz9dHjY6He3qiAyjDoJqjDxGuj8CU9VppQkW9GCeyv9BQCp12GKp",
  "key26": "27yW9UtLUdswLorvLbm6mq4NPdgpdRoGHk2ChCuyjticrLD2mKXNry8GxgSJbUCjW5JkGVEsABm81voSvbaJNNL2"
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
