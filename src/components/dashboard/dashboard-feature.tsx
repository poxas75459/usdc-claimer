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
    "4wUTnowmkpeWR3U9o2pMHDWcP3BvvzHCHVy7FBqtuTYSqQ1XQ9xxCd8J9YWLa7xfyTpC7dWkKqXgZDHLFvy5BMLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2opwcdV58WJ19ZRif2ZQ5hN8ZgGuhYT2jZAZPukBAruoLGsPcR2fxsw8xg4u2NNcNjR1SozDx8eHfzjcy45MGPDP",
  "key1": "mync7DjdpqoQuBWdmbHuNX7XXXbJsRfJwRwSqoRZSzM2ceXAKncnQQyuF8gpntnSNg2W6pBbXD4SSZbp4kQBsKn",
  "key2": "3tX5tcf4zjnAX7CxKetPwfpNGMccjSTg3Fh6DSLj1oGTVYxx6SNGG5UR73iCHgze6sVLfQpLy2w33fiT5B99gGNe",
  "key3": "NFDVEMnLuWQvctEa5Cm61c313gc7D1uF4YRFh58yZzPfNYVGock6nwWf7SPvJkgbzDssqfsqoNMmFAkZ2Z9yMv2",
  "key4": "59b88UhHsMCVFkBgwvAE6EvGgJHV34Z7tbh9L6ZfQHAbomZLFhUGfdjEPybuY4De8Y1Uz8VM3cDiWyPNHLxCuYGo",
  "key5": "5snMo1H98idaEBDSgevzxX48oAmC76Q1MmfBiewXni91BQQshYwN336vaqDznK6wsTmrkDCf1hYk6U2hbwnazBX4",
  "key6": "3wp51tvw5mTGZbb5CZfdVMPAANrtrazLYBiCyGQcijsJPtnWiWYALrauGn2924WMgKV3dN8AXwYymKPrRStkVX7p",
  "key7": "5Lvt9EHvFQ7zpbJAS9AQkAFfp6sJbQkdxu515nvC7mwMWFk85UKvWbm7bMqF82sJUsSJpbKsypxTxjJfbDWYQEAk",
  "key8": "5zrcz5swrQqBKAaWKnJTTzfbJw2duq7oUXY9AjKsQq8mF7viPvnnUMgiim1YyLE2v5iANFyvU5usX9mEUa4ZxVMc",
  "key9": "46te4ivAEYNbdJgJXpUziYa2mFsBqxojfUr94QjvpXTECfLEf1agqXgKrY2BYXY5ZA1X8vVDGwY6xCyEMikytKs5",
  "key10": "4Mv1Dhahu3vAFvdAkykfsX8niZrhSM2o8dVPEJEcnupdexTAUqg1dnd38Se1uqgKvigdg72yNf3tPa7aEKxEHijN",
  "key11": "3ZZXbJe7kwcZXUyL6xBcnfTCtiKGQ2jJ9YFsR9WgHjECi8xqjTo99ceAKRmi8S6P6kDjfDVJKStdYMcGMzD3bVLB",
  "key12": "4oGJ6HKmrtCa48e6sgwsdmzEHMrYYVSbtLVtiSLzrWE7wvcKjBUoYYs6nTvq1zKQ5zHGETWkatAnLF8jiXAjwG2g",
  "key13": "37aDec3Td3jszjzHejctMmCBJW7TpXfXZ9142NfQeupUC45Kg4myawuN7THJJZ9wEwFHnr23gJExsSi1sMFbTLLW",
  "key14": "5bwtT3PeAcGRRoaGgivoM7Qm87XNGnWWBCnTzZ1BbV2jpdtYMTLbKb18Efie8kdu2qx8ptpSLKa3BffdwPYTBrYc",
  "key15": "ZqM927t8Rps5BriKmC483cKAhaiGaCsY4CoTMd9oCnXRMT4iy4Kr4xJi8F2i5YF9f1zcTsA5J8MsfyZJScHWTMc",
  "key16": "4fJ23Wf27eUYffxnjsJNF5paJjnVw1PTnSnXSEaQ1sTTyBA1swSZNrTZQQ4vGcYzPSKi5tzwtxa3DJX9gPkAvEJx",
  "key17": "5eW6yZQ2hJkznL47VK5objDPSeGYrx8hyZ8VH1MLh1gGa5XnadCHsNojoM6RUX9xQZRhLMjxbxXayg5jsho1jFGx",
  "key18": "3U6C6SPYX7VtHbiUyE1dbWFZhGeJ1vzNhsN1SS98sMgmNWRBqRfz7ewec2QvAZT1giHwmBcFU41L5ZqAHoLstLnS",
  "key19": "5x5sezVSphHFXtLfkjqUTaqT9zaq1TLh9yBNJGo3zH9dgvGYRksPSfMd6tyyLdYrwWuTp9XJsBKiSmZkKT8Bk5yT",
  "key20": "2gHJwkPVEQBa1bZmueXfuhYtqr8jh1Q2A5DEsBN4Ln1Ra5ftPgMRYpxqSRZ2ERVQc7URPszdB5dhUu3ZhupaFyUY",
  "key21": "4zg82ukHyQs3ZtY3UFyDps5B2VfJFfUxweHbbVvfgB5NWAiBuE44tPu1NWdYuMbQrxX7rdtR4qZAT648Gg37bN8V",
  "key22": "2agGuRZ6oHpuRtaacgvUdbjBitbrfwJFoUHPXNvRb5cKa7eWQwr3tssYFPwdKq8Jzr32TmbYxYy8YnGvtR3Tyk12",
  "key23": "4dYuqrkKQKor4W6GgEY5cGJTrwkMFaXzL4t6TxUxXTs98DoJVYyuQYDryn2SB7wvfuYgLiZqiC49ATXfuMUL8DZy",
  "key24": "d7GPL3svqfNfkv7x6Lbx1u4gNWbNEGbVU6KeWqXBH2BsuqC2hF3M9eEr6svGeiREZE43mdo2kfxo8xH1Y6tSFrk",
  "key25": "5cCHq1tEiurCyvXBLGkdP1xYuEUXVU32rQqcw6He7QiqUa2z2hkc3HQUDRFnDnfJtLcsUBWdVgntoUCXTBuVhVkZ"
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
