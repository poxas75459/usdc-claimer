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
    "52mTc6G4XBG47t16Hwf1jD3Lp7g9Bfe6gPsBqPj7matEqmQBG4ZT6tNT6Q3GidiDJnDbwJXAQCsCPy8choFueqfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCcz5kopK9coGCAReQ76ucheWB6QJWphGJG3ghWkqaF7vDCT5occncF4i83sTQ8sdtPg3zAGDTZ8LTrjThEBMXV",
  "key1": "49eZh5hpSF2BZm6j95J4JzGDuGHPn9Xq7qCXCGzyFgJtAdnZcQY8SE3o5owWELVeme45qKtUK4ziqmYeHYBDHH8T",
  "key2": "5pyQKKDvvxaPKwUCM9mjxNAxRdpd5ioS9YJPftmEud4AueTfytC1ZtbVztEYsx9GbhFcG7xcC87vR9zm9bAd4VkD",
  "key3": "dTzEjAdYwkXvuzYuWqRUSj629ZxWVMMmbbdpd1mBhscuC4qXowbKxcouftvubGxvv5UH9SkCUkFzzr1LixP33Dq",
  "key4": "2aRsQvQM9tNeAPhgcAusZfgQsnchjwpKzbWuoH3MucXZhgkq6LVwREDzNEoVc3VkbcQzefYxszRnpsAuHkdfQQcL",
  "key5": "4FoeAdgXvdmPd7E4STMQPK91Li8vzzqgNm4FhRikHBfg4SkYSaTqqkn8QsPMCLMovQ3nArgndV1VURb2uDYZBtQv",
  "key6": "3nZTTKH3ZjwDhjxU338rYNdN7CDPs8nNNw7Ct7XXgcFFsEoE12FtPeoLdmQneuQsKgf4NW92Fqiawh8BG3Rnyj1D",
  "key7": "49tXALzKj8XfxhKjs8RoWQuNYxxn7hCK1BkiTnedNCy95JkAxA66zSwFmAFXEq6AJcjQ95avhatjKbCK8Z6WwBUB",
  "key8": "bodjJLdfpPdbHUmBXcZxmXWwt8pWvtMYRxhpRhwuPeozSu5Ksq5zmYFDAvnELwaEUGxNgzkKuxs3QPTWz3ZNGHq",
  "key9": "3FuezCaBS6YGN4NQUNdMqNomeZHreqbk7xPRt7op3FKjqxYXUGPyovqDy4C8jMAvM1ahXN4ufuAuKwBPzNjrVe5C",
  "key10": "hfo1yZ47sF6HN81qPnJuVreVWSi32v4uetKZF3PE9EYgUWG4WPeZUhqTtgKJXGbuuq9WxmGxhUupsGXQDWD6Ft1",
  "key11": "2toDjRDUTyee9V88DjLALdFKew3CdzTQUsHER2afxE4p8Ro96NEnJxHS76J8v3TFQFz8BtzfLKPVdJEG4Dtd3ccw",
  "key12": "31GfCgE64dRV8Jg8vT1yvfV3rrm1aHh15qbVTUPXber727aMPpqJHN5vQArPg5eVDubN7RVgAMeBQ9xGaLeZH1sc",
  "key13": "55GhZUsNKRohYC4t7TeHUoD6b4JYezDDmVVz4DykhxsdmGuM56vTSB5gEY5ytg5yW3iRtjCVYufCy6Hwz4bByjWF",
  "key14": "VaZoDtPBCBJY7HTAegwGwUX7i9ZcXmy182NWS7TrPTbVNWiZt5xu1xBZgcrBK2NituLTdxKnqb36xP1yc9yuU1T",
  "key15": "5SS3NxHpG4Tu4wRdYqwqhq572ZumbbHmu8Nykn9PnAHRAyM8xUdwA2CCiXrWbG4BETy3fdxpmFu9rcu69Y3SzPLh",
  "key16": "3qxFAes8xp4CA4NZxy4gmycU7SiNqdNkGbsQitjbpBMDimuBAmXd1C6vdBSWJrJH1ZhCPrJFFazKxNiUHfuvrrhp",
  "key17": "5iLGGpUkrpxFrA1sCy12mFMg5x9LyqA3hbrre7ttkJQ7w2ErZknKMyhuLVtysjvGCtupCcxmWSBffbFeQDD9gAWd",
  "key18": "2k4TVgifQ3hACmYriKwwSRoV1Si7dA1jtSERpBuhPDxhfeWit1hHo5RZMAWHU16LBQZfDmcLYo1NgDZ9ZMbUGFXb",
  "key19": "4DgHoMVJMYGP2GwAD2V6SFpw57x8VLKcBUZXmKS26VVg9reKmntXWTzwGb1dQgNcjUp2fUk45CkUCMc8RhdPity7",
  "key20": "3yfVbZe7DxBDaLoV8g6FZS4bPDrrWd77omGYCan6pk4CSsvVezDwr2AbUdzM2gLEJhXvaZtf3Y7bepLN89b4LYo2",
  "key21": "4j6TM7KYo5EsZnb3r3mWWvPdEpneWtm4ADfuyEnEGLWXTXW3PoVuFNADfWukTgb6X74pe6q2C8Zbsu9hPitpDrm1",
  "key22": "4aJQ4VLt9VF55dQ91qBmaBCYLMwuKwPxLzVxjZgqrR83X51LiN8oMVuWJoVh81tSkA8Bp7DDrrL4FuSMGycksHFo",
  "key23": "L71AscLguhB58GPTpJNBMnM8shFk8bnjSjWRVS7aGXg9hQmS6uiH1wwNQVY6ddFehxCwjvJxu9Me58Y5KvjYQNG",
  "key24": "24Jx4adgHdUaKWysScp3ymu6VUZeuReX3E98zQZrtzhyQwuyLfEzw5SVpriJ96UhY1Lrd7vk4XhJ9QcXi7jioT9X",
  "key25": "ioogeWLjdzNAZCmcD1jDiRZtZtUAJXQMv9CVVFXoaS8aDdEBKs5DXsaYVzUME7pLsSiHZs5nhgxPiXHUA4uJPkr",
  "key26": "5oFAG7tDRgRfkuVoB2e4hLyLdQ2tCehTvpASYeFE5V2ccV9ucH4pinCHS47JZvUbAPwSPd81C8vw61UANCdzwdzw"
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
