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
    "45wSGFNFprCQfbDKjq8ANfVgu3jLDxGSsV3dpkVMpjMTd58mJRXx7pXYhsgrbnwav3Z2TSendEeMEcNdLC7KtqVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhrTMvbFPzJ1TpCMMXdFWxnUHmHjWpGA4jJwKik5fQzBQJ97P8E67zsJhdeCCtZykkk3Y5VQegpdMuezXG5XWCD",
  "key1": "Tx2G9B5zXRiEN3RFbMy9NAtBbYqt984YHWBquyTLGKJyQsnrYgtmTSCKXvmRBkirBJLEJudZanD5joEbSssQ3ye",
  "key2": "cWURDGhZPptWsYLryDUzR6H8HQCoAcSxA9ctohuT95uQZ2v9Y8XmoJZjXZXRvJqANfDrHy2mwAdV7TVknDqRSR8",
  "key3": "Bj5rGnP41Fpbf7qDTAgPnzmWeJKsu2uQJLWexeT63tQegBwE4Fab7ExzKPPAqe6bs9xWwSLBUL4juSWKSJtXaeg",
  "key4": "2gABkr6u6CtPZHdeVNi1DEPhqYqesQKSzT65m39sRod4owYxs43iVxwgZvWsm4cRcmFm5bJHiAPJGwCVNVPrHN1D",
  "key5": "435SwTRKiUTxaojoAMsg1HJ1XPW6z2Nx6QwtfEpC9hLaBj5gbqX9MktBrPMThDGKw3GUWsah8NvC2ActsfKAgRkL",
  "key6": "3uMyuSRqHfbVpTqbWF7C5z6jBJozKPz58W218oP3aUXTSWrW1ES8WULx1SKemNwpGed1X2cneiA6KqRK6pbjDaZc",
  "key7": "2Z8pnCYULWBUv2F9xnYjE92t4hfhMzxK43yvmckXxNAgVJ4UxxYhN2VWuCmbU911vxLAgqh9LFnY6csPxvMxiHnD",
  "key8": "2frgVM8JrVUvnPbqaNr3Arte9u2hxTBLNCTs4GHb4xYuS3bBSJdpiBRQhXTGou6sxxc5jW7jbpY2rV9v8G9btzWj",
  "key9": "GwZtuHMNbiTaRJbiQ8Ez3TMcn7ttRaaTM2A7t452bg1ssb6K4WLHPgg2hnJAsaxvSM9hLCK5gmsEq8HRPFRqTeD",
  "key10": "RnGC7ApRs54z1wppfWqZfFsBsp99y8fZYLvtsJxC8DAwei3zZxSBrxgZvxcFMnZyaiq36aUWHRnzKQ6yvgUPdE3",
  "key11": "hM4himhqUseZuCSBogfNMPWVdUnDhdfcNQDH8bvvfYRETLtamBGzB7j11nHTdLDrhY1XuH12EhD29e1jdCAUhw1",
  "key12": "5Eveui9DLmKM4FEM7hsRmzQF6fRKFtjR1NrjwcBPUYDpGRCevkRrjK8vHwhYKiLt6Z3Yuw5EKSxWXggoGkKVUJvf",
  "key13": "3Z2ZmRiJ1mYxmykY2AWUYVGLZyKiahxwoCyKxhc7HhH7XUcXv2EyjDToFqt9M7t6xBXYYz1ZH6VRTS9fuvv6BvEt",
  "key14": "3HMaDo5ZCdBscJ8whAW5kMx9CVTn6RmuEiteE8VE2mWft9aEbekzyvzAo4cVN4GKBnTTHYYTTpVkA51u3VDXjHRE",
  "key15": "4hDgygWP8xKZCdJzkFaMTsvv1XMG17XNzT3vCChoSwzMmijUYEgbyKo9DszBhFzah8EMmwQLG2PrWHpmt9GV8DUL",
  "key16": "4VUkkm1im4NDdWXgqaNiTH2Lap6znHQXWT4Y7f66bKVSPgS8bgouxidoqMhmse3sRzWBJN1vkTkkFTeoBbd666tA",
  "key17": "yNwdspvLEf2ApuvqkKxeicjcAfPh7A9m5hqqU2TybPMtBqs9wqQpHTKp3AuxYJowoTJbAJypSEeFhswKBfJVpSU",
  "key18": "f6LZdyTFf9FAHJZKfayCNWzgiRaXFLQeHn65wbcYaxZ3wEF7wLRG53wjBVH6LZhm2HsyECyLkBDRFT14NVz3NeA",
  "key19": "519ggVCfuaCWd8zqV3spF8LqM3UVj7mjHFyxoP2gavXw23rJ3wNPAMfeoC59yfqsZuPuEHezzyjRcJ6b8DXjWSUM",
  "key20": "4vJAs6QLP6tPun6CenymTEPGXUBwQHV3KVQtQXS2c3kHs6MZpG6mrvUYxgnFAde3tnZ8agnSia3EHNHotRYrNk9X",
  "key21": "63KYE7oB3RWgjCwE86bAXQj95nQAhHYRk3Cq9yAt7iGo6Yt8NZAcR4v4GEa1KHidmhtEvRaUkwbZd79PsLU3QRqD",
  "key22": "4Ko3kVPSRTjQ859XkYa3WkYA8p8At2Un69dZJSvnj1VavGzfGjSJataK4eKsaRngs8APZcK5NqR4fb8rxjPA12aD",
  "key23": "wV8R3v8quqkoiLT8XMjVhwh2NEBKWMHGChDy5nuuVoaFe1WSDso8mfETJMZZ9x9P7A7ZMrjxsgMyLdzTUjX5KiF",
  "key24": "3D27meX9S3xasVS6T4jk1zTf1nDsR5RWbK9aErhfazfaXZ6TSwWzraPPZJf9JExtzFgBx2eSmDmMW9Ffv4dba7PC",
  "key25": "Xnrd3UciUESNW5yEH5frqBfzdHBGs5iWBxf9SMhXuE7uu5JfPfupbRQzsowWN7TLzu4Y4x4ychvuKC2zCqmsiCL",
  "key26": "QrHaki3YQKThPznBxQaaivKPsCs6RqP3ZTZjpoiRnrv5bHvBZSig2TLXZ5s5uaZ6dFtpbF58MB6DTumsg9DFHhi",
  "key27": "5iCEhkaBrRiRMgmdTy1zs2xCaFNtsnw4nPpTrk1XAcmjVxcqR8zZtbBy23jC4jEW9K3BYA9qp5T5dfSFhUwXpzYP",
  "key28": "5Mtsm7vnC27avR49ytpzminx1TzSSm1upCGiPr9P9oSK7r2YRYAAxarfBSDjYwVJmJRq2HWfbMbQWDtdV1LmKJHt",
  "key29": "4xNtZDF9mz68BZBpsjnka2yeNoFnJ1XVb1wFmpHawkzwyibQ896BeAXLyj3vjtHEMn8DhjbQvWb36EWxazGwvaeH",
  "key30": "4ooAqcHqzv91s7Lmj5rBSUDwwsyAbTQYNA23w1y5ysS2P5Si1AKFVbXo7iTriTNPNLzXVdwTRYJE4rTbYxbXMJ9Q",
  "key31": "SpodZEdcevzwGX1xFtNZPi7CUvpV9H6WqjunL3Lc2j1qpGgu6sjoVW8KUCTaG1nzNrC2GWGMto4cHUMheGTP6Gm",
  "key32": "RCYWbtVcA2vuRexV5ftU5a2TrzQAazAChFeCJFNP7ss9vcYUMcaxuyMEnNwDkd7a48SS7jY7sv4AsBPzSav8Dqw",
  "key33": "3X2ABuXUumTKpTxPA8DbhcoFxNUETkdqcdsxWrGFzSNxvQ5FVxZBytipGpNdLQ1rpUXvgJPdKz4edhvEMS4z68X",
  "key34": "29SMiz7PrAST6RLbrwiz7q1s45QfPTpwES7JY5abEY5TofAf2VrG1ZW6H1UcNaDw54t1s4EXvhecCaiZfYR1Lkiq"
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
