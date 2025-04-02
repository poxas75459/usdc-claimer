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
    "5MQpjEaGeRmdGdNGq7HdGqtjzg6HJjxHDR4vjZMtRBW4NEr2Ra7zbBD6nQmPQDkrm74RJgBJC8WxtNeLen1M8cCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYv8Y6DPXJyNRBiDhbsek2j3mbCtX6hiKSoJ7oTRtyocjNcteE79xmfqy1AQpS4L2F8CXP9dabNoqA2yVx1YEbg",
  "key1": "5EZrRg1TbDnpN9DGe25hdVCHrjx8CcK5UzcjRPPhkxM5VMDcy4kF8KNy6yYZCcevbgzhuSF3guisDtSVCfnnVvBP",
  "key2": "56FHhEVyx1bPxG8QDKkG2JFUjfxZgqKJUFQU5U2PeCfhUvJqgF5j3PuDe64coCAaYrUFybc4y874fxiWoazk1n5B",
  "key3": "2sTWJkDipprrsQiYtGR3rzuiDSf2Zb2QwncRTLjN9DrVEWkQzGu416t6ksE1nLzXubsTSwJY45GER19e45u6CJYn",
  "key4": "3DZLCMWZi2Juu9v13utyRKMsYK2pi4bSxPcdcu67Qb6WWdLG3srom2HjRkhZ1jdS5wz3xrKFHqFycz6wD2GaDaks",
  "key5": "3t3uw4VFX6bsZDrbTfUWdVgfZb9rboWngHH2ucyKQ1aKNjDZ9ceqagD4xosFdTYoFbFBXfAzTSTq9cTQEzLBkNTf",
  "key6": "36Ezb79LMH54eNxZtNxN3dkmweVvJEKYLMaiCC2jhCtzG7sLjE6mJCKKPWJ1DezuwALT8Jpp57jJS8DxNDMgHg4F",
  "key7": "2c16313UWt8kYU4Ak4X4mX36BBFUhXemUh61aMKRTzdMarXen9WCBhU5tyuj7MuepV9EPEvmai1BNzP1Up54ziwh",
  "key8": "dkVMCWGk2bnbWi3yrmX4bXyAVhY5FAnmuKW2CUDqNQMsosV5duFH4WNtj9rXTTXMfJ7rZ3TcHFkqYzpPpeD1fwM",
  "key9": "5uZB27Rvy9dTLgeoJdq7bML8dqo5nbnbwScjiLd9fB3mEMiVqfuKWzCpXFYuZR6RW4dcgFei3KoK3bZUp1o3dZrV",
  "key10": "4ALbjZs3WxKg62fqKRnmaqyxNrc5d6oZFrHmK2a91n1P7R8GzELEqXcrXmmubZiFkN7Txowou6KiBrfKwPrF9k2E",
  "key11": "3rfahKrBiJfwHQViwnEvsUktLVvtFW8aGiEGtQfpLjsvH4wrC59K8fFkwrbGZS68chZxqXuRQV7aVtkDvypAeAW5",
  "key12": "2KUGmcRQ8k7eyNh7czVzwMZBCX6TyEkFfwtfGAZ66SqiunSq6DKcdr6VgR2NJFYqdUY8P2XBmo7kW1YzjHQFew8C",
  "key13": "25ku2MzaWACLZ6VphzB4rdAYKxo9TJmZ2gfmVSQRGgDpSiXUFutvGjiwsNYdQ3exaUNYY5FqUQCrUB4zsmg5PBQw",
  "key14": "2RvVrxsJujmh3kxbfCXHo2zHkEUmz5Yr1WRbGNQWYzDv8nDCxrqEPxxWiVfe7CFZxU6wkfnWpmgAABwsn48Rms85",
  "key15": "wzQ5BmVGCugZBzKTEQqBjZtxxeNFehVouVwdSPGMUZtKuffwefMZ8ZZ2XcfpHmuknBefMekjCXfTvZc9snHfaFn",
  "key16": "Q6Fcsy9Ybt2WtYKnZt9vBiqymFS2HXqzvf3HcP83NhFmvndXF6keS7maTMXPsBndcpPx14Lh2cTgC6BpmzNrWEQ",
  "key17": "3sD1PvHMp894zABLgcLmYusn5kZSayiRvWZEYQNCeegvwnb5jFgHRg9mGzbMMamgkhdcd4ZQ4G3DGKhqt1C2r5rJ",
  "key18": "66mw57epPMKN3EycFoDAp6CBzvQJ1xNi5mTcTsCfMfcoaQph4386ioweg7QLkTxS4DAWCQnBDPoSxkDndsXP383r",
  "key19": "5nfLUctCCTwTHvJB84jn48oX4U4fvFmduwnfuDeJus8miiKrMUtRFKLHufFCiT2Kk2Qd9ZSX5BoZcFtGW6Zcy3nq",
  "key20": "4JzbwvGM9ZENLYD8xonYNan1e5KZYb5QKr96Jp186VDnwWcbWi7wRwEauqhsvHcqFRfeUkiN2fXSarZZnS2ygdG5",
  "key21": "351iHPRQvsNURFBMqemeRsR5vbsrpVGvQjDifdeVAJycZMEJz3SdohmGHzPUVwpfYJCdgFq19iPGQsTdFYiq1ui1",
  "key22": "558WTn1H4YW7CtKQL54NoGf1FwaHFRTyG6Ch4HW3UTM7Qq77HkDnbkzs36vQiN3aEFV8yeBhesdhWSjaWsCZc17b",
  "key23": "2xqpnFkUJf9GWqrM3CYY5ZtuUUaEMsFXGKjoiZqKomFyVZorvr1PgSBRb6uJY9BTyqJLszoweqPaBxqjZJ1VwAr1",
  "key24": "3SG9RzeP8vkcsfHk4BD6ay75oPgNt2nv7XAFqGpgYs7XsuVugMHvQSM4CDmCK3aduK6QWPvoHBembJKAbajkpDUJ",
  "key25": "5MpaJdkiCUuVQtm8jX81tj2VKty4DSST1VHCVbEChFypToda2U1u2BbbXyPJ2Jp6LtdGKJVwAP554m1SKcCqHf6P",
  "key26": "4a4NMLHo13KguYhMCib3HMHiSUZuCxUTb9TTCRTLnnnKkHj7SQSPLBDPdnp6euAgvgPBrXsvuvh6MiZMZpayM1g",
  "key27": "3rfWgLph7J7868TK1HJeGnt65V6rMWy5uKDWnVSjRvnbyrtsD24WDiXZkUorTvVDDrL4DpqvrzHGS4NdLCyqLjg",
  "key28": "2U8LtBoYVsg56hEZErDGqEm6hL4woNdoj1xkdS2NGgV5pmfymy2w68apGw7RufuWMt7fVmW4QE3Dxqrz1iX464Cm",
  "key29": "5oUXVw3YkmxDhx6kBRZrKfbQDRRBPPHf94jERX2LRfwWFomJCHtpMBW1fqHMmzKMWV7jeJ6xFfM7VDYYJxS89nfq"
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
