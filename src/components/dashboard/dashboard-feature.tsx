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
    "3n3YNrsjw8fagnetpKeP3kc7JzwUniGzzJG3brvLZ1ZWHGfrvapGTHS4tRVHNaEYhUCE5LJ2WptpYyJR7tWMggYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1tyDG7v31aQePgLvAqA1PtpVKBpAQ9mHudbkUa1eZCKr3Z8oKzmVrzhJPX4pYzm5mCyrbCmNLXJcf14RuqnMzR",
  "key1": "3M7KGLCdt3su7dpkrnu7bw4GBkCoKusMTTpcYKmhPHwRsEBDcnxoBeRbAV4GSm6ZT335fdEfbPkwnVWBQbn6nwVk",
  "key2": "4FfeRFyohczzSH5ap8Da78R7ty9pxaAU9HQ2tgStuZR3hk5xZeTYig2k4883mbXQrkK4vwLeDyDJAWzADZVZ56ik",
  "key3": "zW7BfoKCKhFNBS7Qg3ozAMqEWZE64dtHsYoRn8sGzHzo6hMGMz4HaNU2zr4RHsdoEkGEtSgpcHtaLxTM2JguXZh",
  "key4": "38sxR4w2VUhroZ3egCsDiRdX8iT8dvJmK68AFg1ApbXp9b3dHNjkFz9WDxY8FuYYhZbdLcMU4GtRQnuzSfD2i8fx",
  "key5": "3P4VhDXzxRMZxGsySCYHNLuJthUK1Scco5zhyxELs4gf4KwC8Uo9pPjCZxdPnTpAzgv75Czr86S5jNj14M5XSd8U",
  "key6": "2vSnDCuMn1PanMrKcyoLEtURFqqFRM6nam5EWKJfEiXzWR5EaCRWYooVDXgWs1EhpsxAafcCb1D7cYkSbp3sH2So",
  "key7": "3ex1s6ATAbcn4Rk3kqMdc3bXA5hi1MZLtRZKuTfwZmnF484yE5DzVvPho9oVcoKufA1iPPWmw4qurAzZrPnsCCmM",
  "key8": "2u4qgajL8BGX7TFbmsGq1uk8q9vjhEEvWs8c5iMvX3aE5SpP3EpL4Hm3Bn24QDpAhFna8fuavW1TureNJcTkJikb",
  "key9": "5LqSkKwKBucZy5mx6Sa3n55LZPXmibSbBhwqkPfgCUZMXVBtSFmBhVqXbAbJ2zTmngwngDuJNXKuszV8oaqk1oP",
  "key10": "2KbcnRpDnrmHW3MHxaaf48WiRJo5acfqqL9TYTjMbUyCKhsdz7umDxbEsKDW7TkLQCTmaz4y8ZDKiQnzhJwT8RZh",
  "key11": "5mQPwQRCgzunerDuMXfft36px4ZmtwTmPWbu8m8UfdFYBreHJrP1sjSDE3QLNrHfdVZVzfg8BwV7TtQids4upZwn",
  "key12": "NjFNhu7A1Jk1SRuxyUMSBoKK9Q1rNZZ3HaNntfR2v92MZiHBv4Krafu1imFLAojNccv5CjayveTcNcSYyWbQyov",
  "key13": "6juMgw1rNbsq23xuN2L5btMRMUweXetzJrbGgmL3LLGLwALsaTg6ha9qkKmtFy4PnqbqQgQo9R6JY8WodMt4fRn",
  "key14": "257fWvvffK6s81mLU2BUBAUAQ9f4retieYRw2VodfHrecphekY7xJCcMdQNicY5AoG7XXWM4u9Uz6doU2TuygovZ",
  "key15": "3QVtJjwhMJnDwZJ1naFxjv9SPJz6t4fxshXQzniXm32h4NPbGdiL4yaveA3GWJW5GyxmpsXdJBVap9gRLYStMWzk",
  "key16": "5bMNLwYBvFw8cnLbMmpF8vRyhwoHTFvP5uYpq5x9hwhh6LziR8MBY4BUd3GuquVrmoeWtVsnfbqmCFztrZQsce4E",
  "key17": "3bw5KxNCiV3C2pB76PUT6qrXY5keFBgzZpQvb7jTf1VyWGc4ink4wtEHYhBgTCk6Vq88YL64kjXm5iojqsnpbEA7",
  "key18": "3QnNRCvWtpgZd8LCK6Kh8RqKboKc2MSBGXk87AyWB1wsJ1dZ6C894G9bhahxCRYCCTWr1ciuU2o6zJdPi9LR9Q2k",
  "key19": "31kvJcDQZQyNyRHTnbowsHBTeWrp2vVxVA5fP5E8fUrpmSLh63LJdNoGNAP12NmJGwChvtwoJwx4rLcVgmAHTPWP",
  "key20": "2zUmsj8QtJxS4ivrWQWZyN7hCqZHp87peXbPnaSucuiTCFnkhmT2S6bFdu32qQEZRJQHQVfeYXgnMCD2fcCVxxMk",
  "key21": "5BxoJVCaV7KJMXrkLpt6EEcfrhVKaWCyLSTpeK9e5RKJWTDuEUY52t4WyWVkDnFLRgAxbkVnzocTDLsv2sjcTqH5",
  "key22": "4QuNgEpduMKq6CWu1m7YzWEnojyHsvW2nGdnyofNUiDrEa1qoUkWRbAFdKfxCQ9nUFNJ81K1QNd8bqYTWoAU4Zoe",
  "key23": "VgxBCnmy7ZYRqPfnoRv3iXDQXRSiovjPWCHJn6rB1PrhmXjJnAsBtFLYrNYYGyxed8F5aSRMdUGkGEhCTfFd4by",
  "key24": "22Wwatw3CwCjuuDqF6wYCxSwTPmsS52Fwbkqz6Qohe2JApCVPEyP1gcKY19WCmCfhXGEBsjxV8Byc7gGHyBL6CT8",
  "key25": "2cRD4Rs3RLZPxhTXJqT2XjT9kNfZSzkg7qQvSgo8sQrt63GJ4x4DLoof1efTm1WqeX4AawmwarQkKPP2Z5bH31QZ",
  "key26": "5aH9Jqhejc6qoaBgeXwsSXpvahaDJpzQPqkYwUbJi2qcVxPbiKFmeN41dcf57AxVBkyBVnzJsHBFS3FPmqGDjzES",
  "key27": "4oF92QvjpPTD1PfCJzbkGu5gtxHXve8Xmn3m9hfJnyspXPxUuhsob5voiDHirxTJCauqNNCXKknCKyfxZxsE7X7R",
  "key28": "5bNCqhmMRuYGrMuUdiEXvNQRDDkbA1C3fGLT7wwUrrtEdLLmLd87AtwrqYW4MShk9Dwu673nDh5qz78X4mcb8Fws"
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
