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
    "2wwMHK3teCkPzPC5ZC53FstWnJYbT7FGkAbh72BUYNHehjxsofzxdmsYkCfkzCvoiGZFRKRRrHoCFgLiSGmxySfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVALCaUxK5vXSC1Ey3QYRcShz6GkCVUtjQTsfe4gu6sMAVsm7pnCHg6ECVwkHofw3Muzo1Gtup9nczv2Y7fwSfb",
  "key1": "4aBJVnj2BiDHDfZajgiGMtJsqbTRx6LZYahWvugyVnBZNpeek1eK4VbVVT6nnJpSpQkxE9gXtzDxdt9rTyGoqA2B",
  "key2": "65zMnGnSiK1FnVg18kbgY7JLJ6QhXghvhK5x86yXLbn5YCWhD6rMqUhihZnEyRZTjPxNL6LfmJV72Ma7UwRwCWVW",
  "key3": "2qviWrgnNGDGPkJ3VpZvRtDvifg3vcK1GkNXco4BLzf9786c5FVrfnQVYqgKqpdNXRvKipCiNFzQG5vCJJRhcYvw",
  "key4": "28ijseZmUNmxgJEXoeqewYqTssYiuhs8YDHoEeeF5QsszZHLnXtzEuwMFmV1zDyqzXQeooSisoTct7yk8Nji6HgY",
  "key5": "4vWRpsQHQ8W8rhKeTTSLQymi9hAEL8w822C2KgsHKHSs2S6SGu49XyGxeEmwJxQzSgFch1KkQ2ch5ZH2FichuTcg",
  "key6": "3SqgobgqSmDD461Vf5VJFM4hLezks2Bu5k2H7aGripnMi5cay61y3DVw9iHSjuYTRTu4BUMEineHoaZyguCLWAvG",
  "key7": "4BsdaoEmFSS8aYzhff5nJXB4eLqGot6ShnQNovAoqsPfUyF6VRBTmjt1NAtrRhGEGpGgdmqNf6bU9LeKYHS1Mw8g",
  "key8": "2WkqnWM639GZHuhYht2UTWf2FrqbBtGPDBx8ntpcjDBjY77WuRaXoH7PqX41piJkmoTJ9jNrQrahvBAm9Np2cjKk",
  "key9": "338csGSfCyBicq7VSkhweVVmYQNWdpW73kGN5iM78xbsGZwgB1pf7G56p1hBMQwFPhtwLWsdgjpjfqwZA8UU7CNy",
  "key10": "2YpqeqVr32Ch7mM5SEum2n9yxRgr4isPWa4DbEEr657VPrf3UB7tSiznT14SccWLMNKNj9TK8FKhfYN482qne6pD",
  "key11": "YGyQRfKkfAo9rnz9nJWnBcmRnwNpeXD14rqPhuyzJCCowr6jcYMszCUoHMhMeEVgDqqAogTTh6LPz7FawVjH7VY",
  "key12": "5cppJGRFV8f3t5cy8jGrFqQEJNnYtC4KG2t1qx2pcxZUzETotSNveVpEF7pto8iHnb1X4nPvFTUEewj4N1dYgB2R",
  "key13": "2qEv2i9s3ENuSFLmAY567Dh1AYZJfmG4HVDZFB3kvPPLMPCgCHHcvN7sLYCofcFCVSiXim8UsKjM3H5P8vRJYJo6",
  "key14": "4JteBztjjWZC4hSWM4LVr4vhGb5V9KtmLGuCeU5Cm8etBtME6Vz5dZVSPdaVjXbntcDvcJjVRofQFJztKyeuK1Ap",
  "key15": "2mMtDKdbNpZzW8xdvYb7yeF3RDBeMGswvu12SiZSfq2iJXxtsU1WF8mFX66Qr9eitnFQYbDm9tDaTxNBayz5kCxh",
  "key16": "b8dCa3PpPho2pVSUVVd9GMupJmbu39pUDQsx53FTAjPkB21yYRJhztzAjr6FceLYnvVDBZ4aQ1wwicnEmK2mvob",
  "key17": "ZPR7RDz5FYKvaFFsfS8zJhfKvVgV8mUNdyzpKwkWTQsuGNLNqRVxBmHU3N34WJSsSiJeB3tojwahTJctzacgrmD",
  "key18": "4AEtgLf2swhXdVEwX6fBH1bi5y4f6oZdPVaEJUtESM1NfdcUePGYt9Vr9CVJQseaFjzFTyaP3Pog8188zVubCSDa",
  "key19": "2FGSN1fM3357C48rNsZ14rNKcAuLqRobshzv7A3Aq3ttMmmRbhbn47B8VQsPQq93FncGtrQ8KTSyEQnu7nRtZaaN",
  "key20": "29vXDiUzBRTSsTsFHc1dpt1XQoHAPjMW6249Qqvb4FAfER7RM54wCYKxDbEMkcw7HmZNxEUARhDper3JJiMACQ6X",
  "key21": "5ueFr4qxTezrbmzCcu9nAMBs4cfXXan3QNLBEsCdkWNapBMoMhVSmFG1AM8MnJ2mK4UrTcDmoDuonD1A4G332mpf",
  "key22": "FAe37daWMh5Px66Nc4ZpZphpQZEy6UEwCHFo2SXcj5uKMtkqimFvrspuwURTxq8J5WXaQM5tCxPrAPujgvhkPpM",
  "key23": "5AqTczsNW2G5X6QJSBnTB81z2sAVBbvA4GytgCV5qpHGbxTYPsEybU7DwWRJTr78sXKxLvPoExZ1MwexfaLCQXRb",
  "key24": "4TGT9WSt2DfpjCBMb96xGLqLSb2Exk7PwLP8WfUu5U1vdiYFitNrYQSiUm2JbsNQ5SvzZjGsJWsoz8LZNEinTpnB",
  "key25": "BcRajGAL4KXyrseoU6yHM28C1Gtwiwoo82fqeKQnKqXk3YQi18mHBD6c7eiGKaForbVTbjoE8dGhcHDp3bj7A4G",
  "key26": "v9YGpr7NVwcTRPG2TwGQbV9BHvgWVeMH8At9xYYehxqL4LTh7GDfk4VUHoGKEgTGPzfXKoN4wPvaxRH9DJZqR4y",
  "key27": "2qm85e2fMvQzGPf7u5oLxNhZCvSYbLGcojRNKtYomJaktuk3uaQmQXvrrWdkZrJppft4T2M7FaFfcKGnp659CfFo",
  "key28": "9LpSf2VAYWFPR1EaW9ZnzUtoEkNb3VB8ztwEkWRGp4focN8WWEmLpzBiMPYX1YQ9p4NpWjLiTKge2z8GvrHdD8y",
  "key29": "3gNZnnHdfBpmgDq1sQxXg6bntbjA7wsJgU3gfaEgQxgCNn8Dewmqe2Dd3tawvcAXT5YFFEa1F32DuimDBBMTJmnQ",
  "key30": "275xmYPYHSzFf48sh3gbUG8zQWsMNA8YNoGVDk4zQzSmwaMaPVqk6trk9UkmLMHEsYjZGcPSyJLsF12WevtXPu9G",
  "key31": "3DQvSk5U1zdi2AiscNNzrSwVxqGi8hD9wxbkCQY3n8GgeoUkfzKTnDeitXKkRDvN8r6uAAULCYgfXYXdwZZoqxLM",
  "key32": "zwfCaEqs6vEW1qsFM4YyK83BE2sNpVtYq8b7gLtSyGMVwkAinwG4Abc7NgUaZmRiv79pT6yJy3314pnghaKt9wv",
  "key33": "t2xMTD9Wyr1GVU4x8tafHLWRKRR6xxmVLK8sXy5JYBXdAoqBVrSxa3RecruX8buz1FuYX7qAnyX6fd9nVbxxkfy",
  "key34": "3Z1AMY7apByM8xRjjDMiB2q9vCdk2SR3F2HdPtS6cVNpBiQYxy3LRtQUndpYb5Y6J9N9UkYT9wT3KMRW5sTVn59r",
  "key35": "59Gv8GEQ7cWCFE2rn38neJjvSNnFwp7SsiEVfTzfgzgunshnbsKvAv2QkDEt77D3byMkfm7iDRrQd1GCXd3XZGJv",
  "key36": "2wt66FFKfx5jAZoyybHHoXpRrszK17CzbfPAme96EC6WDENMJEceUFWfoHhWgEKN9fgU9siHG1GDp7PT8aG5UiC"
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
