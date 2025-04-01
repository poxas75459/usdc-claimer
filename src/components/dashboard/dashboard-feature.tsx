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
    "4yN3N9mg7pUDDS29GxD4ukVvQCHg5tjg2Apr4FdzQisYxecrTj2KRTTKtQWTU843cC7ABus1snWZXdUhifCh46wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AP6cYZh4CFpZFMfd1pcmh6LEQAPJH5mVvNFMEoKFR84ifudx7rcBtuua2kysdd4XofquGJB6uRoY2eqqcSRrZbX",
  "key1": "313uYUnSRrgXxkdSDkwZT3mAjd8bXjteErojvUeFT1nojBATs1qtYvtQG255Lu5siH7Ksy4HRMLxC8spTEiNCnjo",
  "key2": "4CXrMpjzf646WmBJismnYgVHCbz9tTzRbbF4Lj836hbNxcJzYvqWfJxbUjRKuFXV4jFkbdkRHjKG9SuF968eBUdo",
  "key3": "2yztH6wKJrDJgReFUP8ascJLQQihfxBV1rvbXka1V6592mbG2ujK5WXDaAbnLEhxVPdU2ipH4U1eCUCmqgmvzkx8",
  "key4": "47NZMwiC2E4s8joEPJ54qaRKkxpsjeM4WCLabNRLUUYEc16gSca5E8VkwBTZbo6YYAHReLS8xNiEVTzF2ZY5Kesb",
  "key5": "2sZ8V2GyA3u788y1Gdd4ppnuWPYzKxQjM6xdkNJJ7RXhKHxHs5r3ufqu9RbYjx7bFCRnyaPTh7qyjSvnSMhCgKUY",
  "key6": "37QmuZMt2oZ6cEp7pgzZn7dhoTtj8TkFJtstYBFK72oDWX4UC9cW11dGBhgKKZmo4gYDThZFGaNiJTrKwnApDyuE",
  "key7": "foYfZDe3C6RffEZSTK8n7ujPHhLnpYXD2vHwwsCbKoKN4wFqx7nRiSP3gzLirQErJtgpSwEV4udNssiUC5sffXW",
  "key8": "3wihGg4cvjgxQsp7chGGRk6a5JuJADDDqgpbcjC7CD6fzL2o7CR7xrBGJWGxVRy5vxU7avc9DTAzz5ys32Shrjvm",
  "key9": "38xpFznfiVZNYHSKh7eTvDoz8iRk9WYsyBT7u4shGctpw4cScMLZ4zpe1kJh1Ha1husTgQ1ceaeiTzFTW8WvgGmf",
  "key10": "3TFpN813BWXCHpsBiXoEyCCUSSwC7z8t3KeMGEFC62LWs4y3Ry4JpwCP82QQghCH3sNhT4szHswPo3T6TL1VuTCy",
  "key11": "2k7wv1wrpur1wWgnd5HBDVrgTo1PomGt698UozsUSesWLWbh412Aer68ac45Y8e7h7LKxFTiiiYDcuQLF6PpjAkc",
  "key12": "LheNuyCxwt1pKLg5E7t3rN5FgH3SwpH9pQw2UCdcS34yGMaeczSbUMXdNxFTn1k3abMTCiVMxpCwMeuTEHdNJkY",
  "key13": "5KCq7CkQygwbisAZzWp1ykVUsHYhkVXqtLKewLuyCf59uYf9pYcdCp12B1wYm3qVW5By2xvvY8h7qqVorwFwt8uC",
  "key14": "25WCDVTxViRPM9WHdMdP428dqXpbkYvmDuE6GLi52gpm7kjxWSS6FZDmcbDcQfQAtBuG1Ufr6NPHbtbnpFA92fmV",
  "key15": "fd8tHNU7VkyK6naGENSo54HgnwwQtS915rykNLM9i6Hc5mYDr6dvX5ap3ymDPZyrywKJJNo3qTNeMDhFv1FkHXB",
  "key16": "562HjeJFzQGz2MvMKiErR3UpEy1Ei8BhM5F9QatKrVct3CFzAezos2oWb4TZjKxHwbvx2YDZDdqxeh3CyxD1Sr7v",
  "key17": "2WPLekkgJ9r11WCimTYp8qM6HqD6UZapfANnFYf7XDB95uTwgPTBNeJ3oXs5sQHyNVj6YTsYqzyzaoLMbPtAbQe9",
  "key18": "fNRPLPsGZvnDPZP581DMaQwdhrYqJuLsdbshhftjESCpw3DGKJjxpjpnbeDkwWWffWVws7sfAqFwimMDPX3ZZEv",
  "key19": "2YghJwcHA5bRZZJPLk3LSicbW89c8ViGtmXbkJErRtbQjTpgqSecVk7s6G89G8B3QwwatUaXZuvH8JVLLyJDNiGx",
  "key20": "2BrB8X2CWZMrWxd8oxharUS1Mg2qrqsvftya1VCru1p5PE5uVhnLh3i2z6encZQHHVA6PtjpFiENbF9mabE5BtbM",
  "key21": "2v9R9fiGzDSWMotdYfRi82huSERcTpKki7n4EUZ6PiZNtiZnhnKWqke2Dsq4saFuAcfsQ5gazUmrPEhQQ2sxNRtT",
  "key22": "4B9Lk74jo4Geiv2QEeiPbHAfdVbGUjrUQBeEYXfRZs1vutSqhAikrizVA4PsTdNnpp6XR4nFrCDw2TuU3fipEym6",
  "key23": "4vr8tvv1q5f2UWLF5XGvS1aYJaWGdjMNisUX22Qyj7S6gW7bL16sEQwkELDgUEEj6A9Fs74hkkyGqpxHPbr7GfHo",
  "key24": "4UCpEYHq978PXw5ghmk2BURkks7rmbyJ9gj29MrGiZAhkyi6Xp8fNjYYva7S16mZQN3h9ajvJrvQP25GLhfTw5CC",
  "key25": "52taDciMzJGwzhctfw3hgSGGkm7E11QwuyKcVQ9dtAMgVKQDkA9j72b1Usjc1sEzRkcXgsaa7BW95JWBJBkZvmFe",
  "key26": "4jvChRZBp7zx1ERKFXBTR1DjSRT73aPphR9Jpzafdr4W1xVn4FELLfsfguXA79DQ62dLHdTbA6jCczTdoFfGjDhN",
  "key27": "4GGc8AXUSEim66Swe1Lq4Wme2gmJ8DBzNRvs7ga7ZTDCaaVRNcAyoFTJk1HrtEA9KE9Sev5up6caL7yepAYdH1Ub",
  "key28": "2SgF5yaxqzW6ry7EjV6oqoJ5TfA9HkGARtabrY7vg9ysXrDHWsLsSYDRh1XSvxNNLQMRvy1F96HeYuKoNDGpGbXv"
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
