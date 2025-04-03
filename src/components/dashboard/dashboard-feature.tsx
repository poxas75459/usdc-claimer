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
    "4XoU4v49mHq71epN4q6EUdY2WeHNYBEKP8eipFbuGfzGcibp7tpa4VHD3JQchHAvdjVcEZf1nNU49iS8dxiamrs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3CYEmxp14BD9r1GjwcUUpXSfz6cvVreyvQcGdwsUncvNhU2Yjf72yn9zaDvS2rwrTm1hJHfDicA6mCfGXiV4Q7",
  "key1": "2DjAuxzF8kf4EV1UxCmfEMWnZe2NK5wmyFUTSb5qzs64TNEcWKKHdv8VirAbRi3BJKYf5VFN3EmifLAtu22U5P9N",
  "key2": "eqhRXGCMdZyzdXxjUKMmsC5MeppKLdA3gXvfATHb2WZFsnSgnAYTQVhiiLUpiG7gzDs9L41iZW5NZeoHQLcVGnm",
  "key3": "5gWvoo2hpRGguzjMJQMsDfeJCeUpcEkcGc9eKqzRDqw1GHaNoSPnvAxbPTMasz1Q5CR4FUCA7sgnj3PE4a2VxS69",
  "key4": "5u6Qce1bQsecRbog1aWTZXDvK3AXFVV9NRi7wyLyMSQRxUeFvwxg1H71SzQbzaqXx4Rajb6vNbD8CUtRPRG3wM9x",
  "key5": "3FEmqGZE3ZundSkjwUaSUeUCjisHrftRyKutZug5VZWBRzZKjjBPEuFUDDU1mq9pCVZ5ozkKxuF6pADB3V6vBSca",
  "key6": "4T2dWFhRjtKh3g1bCromnxmgLf7skwZdYaT4GB5UYkNN49HvR4hfMV3mgzbgCtTkYdn1Jmjvz1wfcFKLJMksBQAB",
  "key7": "5FGZZ4GZuKddPfcct5ptQ1kq6LFshhev6BvGPpksJxoL8cZSLtEGYEKkLvfMg3eqywpDvx2FTh2RjLdkWLuCtcpR",
  "key8": "2cMZpET2ScYsBv5Y6LesRdmfx7TrGnqT2FEe8cwBJGGm7LHGLrMnqFYLck9ig2PA3WNsWdK2BhykJ3RrWJ4MwXmi",
  "key9": "38sYVhxUJVEzKwP3w2ecmvaNr2f1DRjSBDuZLQmSxHPnv8kq8LTXJGdFRi5FA7zcH8UybuPGdVaHS8A9GAk4quj2",
  "key10": "43wiZB3mqDAVZ5rP6MQkRsi29VvCSUkwCSVe2tCc48AMnq23xQ2RAsW1k8xm5Pxamz2F7VA6JoVTGYeANv328nCM",
  "key11": "5Xs15AJuywT1vP89NMDyKNaCzKaa4QQdkLDcAPi8mx7HS6ZCtrLgmyyreGnghbCrSj9YNDzt3TgMWfpTZMJ4eQVc",
  "key12": "5dd4VDXnGbzP9UbYFCiiRxdc6f5jTWxAr9sC7y9ZNGWhB3acENicrZ9YMPSmKyguUot4vZdnAUk7dxTrKmipeujV",
  "key13": "L1jZYQaqSjuruQ8eidAFFr6iotkSZkRLDa24W3SQGXMy8rvFZXFu4s9FcuiFGXoyW4zBPAwbthxehVJDFCJB14n",
  "key14": "4PdKY5sXgRiUALuexTGe2ar5msHZQ7S7mkrkNUyyqaTSvsXm5TysC1ShcWwLjxbKArxzhyTHvNPr2AiBvuSDyyn1",
  "key15": "5bkfyJaAybqjBQzJU8EXUNWhuDR7UZhYAVoLEJmPb6s5LzDHutq2DHE3N1h5DwA9xeRt1uvPPsP1KFQ8R5w5ecYw",
  "key16": "dgU35V7Unps31Jo9i2UX7NFt2HMTdAziH5SNF65139iapxovDYH54v6yiCjyvyXL1sCQm96ruVD7c8dWka6TJbe",
  "key17": "5guft3aXiotcQfuprqHjkRA4DJCFdKQrHtQnjyfiDLqH21kot4zbWmqScMeEE3onTCki44cWr4Y7dUeCQPGJsmuk",
  "key18": "jnuhRgxqcVfvd1FaUBNmjpHBLM6RPCYvKAQBTGNaXyZcrAwjmjR2XQmZ83PQ6hAmmyUPkC8BWHKxeiCd5qm5K4j",
  "key19": "LPUsrASXvQdNbE21qgR8ZUBHoceMLhcv9QyedFBPbmgaTPjs8JWQcrquAYdvGyZMrZNu3HUT4tpTBqQDCdRc8oR",
  "key20": "4QGCBNJRqpwWhU4YHYNaY6HShENjQueofZ2aaqtmJegHQSzBtTUs3MemoSwNE1dfSwrNfmC3vPdCQk1KERuZRB9e",
  "key21": "qWkuj3BGrDMXFLorbS3LyntVTY7x66wLejLWetPV6ftjJ1xY2f6x2wqG5RRKe7XSCuvaYbxjEdqdJEopDkdbNsc",
  "key22": "VHLo1zR7TeTeaqdSopKLo45YWP9A658Dn2aFnxbpB6fteFgLgeCy7gEqCiUnfzxLu2kr5ed1HJ7HHoX53ankkSm",
  "key23": "Svr6CCHo76xSwYrjZ6oe84ioSeHgpzEGnVBHR5U7YWz3bwG7sskH6r4HwReujqUQD8U5RZ7N6WgL4EmzLoW95RQ",
  "key24": "3Gr6cd3QcDUTrAd8X6g9MF6e8RuBmj692bMpqSjT6RvSd6PpFZh6sUSCUzRuBkeRZuW3K9hNqQJmFfyuhwWiVp4a",
  "key25": "2otKXvDXrscaaeX5g9cxRX2XvRRHtSpt3gEUVkCdSy27BTkesq35jG67AFMbYujVKjmXC6YnHbRrFfwdwqTa8aV7",
  "key26": "2YtJnhYajqSids16qgnmNWxWtxyBgVffTvcQmqcBNHZAgSXRAM2dEfWRsxgLQQcp6ckATxQC8sXdaDeoXSxCCiaF",
  "key27": "2VSEfZfXoXtNHC2D3P98XsHp2jBtnS6kF6mrxn4tB8nHcXDtQ1GEjTkrr5PyUc8jFraeAGXLJDVZfYRjkpTJoaGt",
  "key28": "5s5nHjZ5KQTrvje44FXQ5C3mku97V1Jt4Qmcye92CoTeojSZZX7k2pMgRESbsTQFXG3rk461JuXgasAKFWerycWD",
  "key29": "a6ggEzug7KkXKsBxvvQQc7Leun5YhwGhpHD4xY2v1cGFsu5QaspQfN92krwCsNWuDWygoMq76cBQohgxkvsVAmi",
  "key30": "9c938R3wKdWVY7xceLsHcWurDfJ2g3UCxNyCfgSw66q2tZqj83ZxfHdhg3X58mCvVZG4WEfkJZL7QUaBfXofVBw",
  "key31": "3qk6BChFMx8ogG6CAg5LyJKfaQxgX6aeyzdPnCWvXGCP9hqEczWFyJmybchqGeLwAshziGntJ51tqAsCSdhBLTc5",
  "key32": "bdpf7v7VtDKp9mQdTEtTkpyNMSm6eWbNLXMCa8wR581ZQH7LnsZ28au5iMZKYiUrQRrt8xXWswQfB21wfAK5JTn",
  "key33": "48jtrmVtBUMMYhamghd4NWsmR8ghhUkBH6LMjET2jXVjkvCKoJdDweFLcS4ZdkKqR3hRZyobkby1cuGbfcBWSr5N",
  "key34": "2X9xRMq1u56TVLQHGgP3ND8n45Lano5KS5GrqeTC5ESSPfbiHbSJTaKRxJsX7FqAq1xheBB5E2ud1oxDXNe5wYq4"
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
