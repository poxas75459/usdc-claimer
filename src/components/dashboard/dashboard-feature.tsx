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
    "NXhfhiZMsojp57x7yBe2c9UzrHsaeqErGjviFu1dSfsVQzJAQp6JcD2s5Zh5JhZqpfcVJJyMrtRQ31axUkJj1BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kqMsUaxB6Bax8Ts8xpTSJA3dhfpoVbZ128rDs3eHZ9x2PpWeocZpgWCmtpcZyYtUpoWHhHTkaL4cSzedfC5SooC",
  "key1": "5ZpX2nruQAiE9NbdhhroJCcWbrTkJVPHs7nf4qYnRRcuUSRCDMFhKmuu2pr9rSPTYS9cMKCCcBjndQG62HmSDy5e",
  "key2": "4jU3ohTARcoQkM1wUWeP5fJRs6QUQ16AtmaiVFLrFapQrd3EUhRMZBW1NSWJqvvpgLxAs6AfTHpTyWDcJQqz7ykz",
  "key3": "3pJLPxuvFJMyMiCUhfWH8FqJHzFWtEzxi8kCWAMtcw4hhWqoqAjPWAxSpgHiukfaF2sFAdWcMUnYDRSw1STpBF4z",
  "key4": "vDp3ZCse5aTvFvPWkUuZTHxpf1F572x6ety6K4zZzwZ5m91mJcTe75jiXd1GX8cvMC38TV622cudwaLcGzN4F29",
  "key5": "3ry18cdHAz186vkbuqo6PA3hEcN4dXsFxCidd7CqdxS4jdv8w469PqQBMkSQV1h5FLTKGLH88Zty24ZTgYMvwigC",
  "key6": "3hocgdoAY9K9emfsJhKA5wKsDuBCn51Uyw57AdQCyfqvtSgGHcXuyzePUCaG1u38vCLryzUu7mEKJL7aF48242eM",
  "key7": "4jgV5SMsZFwJqZZ5UUq5T4C6YZKJbMo2iNLkYDTBwk4fNW3YyDxCUjZF1hJfUxZYmEkfNFSk4mW8Mm3MpKEWUVvg",
  "key8": "VVqKJJdjsHSGi11KX7CCQBDEvbfTc4nCDJr7SR6PG16Wx76CRbADkwQByvR1Y6eoyeFwmdUT8AxA2e8XDeyA7hH",
  "key9": "wvrSeEh5EXa6WF5o2gbbhG17wwL67XW24Py3miewKfB5qEP1S7DcHGPUehfA22N6bSsBBFqWAh9czhHq9tATJQ5",
  "key10": "4Y8o2pBr3vhkopfNZNqoKZf6ebK4ZryooxSLm4FTdivzX4tmcfsj2y8cEthecaHqykKQzT55GQ8ZAbVNhURaudk9",
  "key11": "E4JvcwWxkjdQoyT8dfYvnA961ugVssmUng1dQsp9yCHbPNHYEQwY9eCCtL9r31AqrLFfTP1MCK9kiuLCuN5chDG",
  "key12": "35gNYpvAQetmS1vPQhu5t2ZXbCjBxAccaW2c9wE9b9ooUPco91xBb8tArzwzZXYv3pP7JetDUaaaQbezRezRJLJY",
  "key13": "jnJokHy4hRtivP9YPb7Wb9xxATCvL62SMGxEmuPVRgr1WwXAgkQdXFEErmYbkr83kQSLWoh5oc95dTtP7vvsaEC",
  "key14": "4WssAtEaFK7DTUUK1XZLN5q4uyPHfLW9NVmD4Qr4UeDHN1MUuDMHo1asdqTtScxmBmnBEPgcDjKEX316Hnv3ZTwY",
  "key15": "2p1N4oS8KZDBrNvFkqWGnuCyifxn2kHc5TjseeCZPmBcs9QHxHXFu9HiuCxRzir6UdzLk7pxD8hXqQUX4cWsrQHt",
  "key16": "5AYvxXefnCXAvSkoTfNYmiXTDzenmyUwVzdgVgyFp88zvx2kVsqcuu1wgSVK1B5cEV9ujs9xZntNUARGHq4PyoHN",
  "key17": "5o8sCxc6wezWy55dJA8wpi1K1t4QaDe4DqyWSqELmfRBsGHo97VD2oYZAbrZYKUJsiPKa1shafXKoNgBqDsPNWC5",
  "key18": "4K435Tm3HasH9RdGXEjxbk2MrUDxBTCepfrNU2bi4XG6HyfHLN4dcH3z6kmcwaPZqXTearzekKUyF7uK87HRqFDo",
  "key19": "2MiFqcwrNyGzpPscjBurvDUfeaxwML93tTaGbCogRFYCr9cHvauPnZWn1LzAV9KmQPuwXNZvTvSh3fy3mSDpJBzo",
  "key20": "52RG8o9xovY8GpysqTwWMwDapBtoJuaZAFSGxpqUfSYt3ZuJTFuTwFmymeEzwFa2jqZPAkeBTAc18x4QgeJdJvPV",
  "key21": "5dopPLRuP9Eey2qmLVNNr2118HcVFqr6B8hq6P1StNW6Y27XnxC1avEhmEgerEx8yESJwqsbeNVJaQXgvNyB1Qpy",
  "key22": "3dj9z3gjUe589UwJ3LCAvfud25QQNhaCfR6bBLMTJ3uK58QejgFQFdpEehPtqEpRqMxUvSiC1F3bWDAtcbtXYGVB",
  "key23": "3z52AxLD2F3xMKSEciY2HtsZCKxy4BxVJTbLSPiXEjxbvtXY2dWkyuEMaiJxK8a2sVJsWh5vt5zFuhGASCHtLbqY",
  "key24": "2HRfCznJMt5U2yq2dwKZBnyBZ2DzVAAeX1kzzSBsDEF9VFnjGWLR1JcDCuSosgfPPk48ho1XVXYpzUMcr4CqA2K2",
  "key25": "2pyWPGbXRcDX6vMnUNtdRJZ6kiq9fWJTahwLTzmvk2kco4cYhTNhfn4ncPm67cHg5SmwPJAnDeTdQAozFXx6HR91",
  "key26": "ebnmkf1BB4YynaKWNtVM67XAbnvoKfHCyd6SDeazN51TWMBALGdebfkKgTw1rH8EweRp6LTJr2du7nZqmo1yD6f",
  "key27": "2JX4kKNMMYazy9kzx6YMukTVFwoFVbqYfDVzh3SdWMrMGWMur5zXQYC3AMcvT9r9jckicybApwBcNLEsjZHCCs3V",
  "key28": "61eZZMjvYPDHx9qhVya1dcAAKeb152om1fSDPsA3uom7efrDLNup3sfkQCYhQmxVeKQUShEuZF6VfJw8XCrKXokm",
  "key29": "X2yH4rBsQykFTBqWoULXMvX9hSXog6uDmhJgtdpjB6idJGymr8DgAhRwSTKB25KBD1GP5FLtswRpCk441mTVT6S",
  "key30": "5s2hZDRd1sDhm3KJW6LjCrKCDDytj1kG3paYgo8XWqLv5JBgAbrCeSKoM4AQfS7uddpe2FyfjiQzbE7Xn6bjt7jw",
  "key31": "29ggDSPQDyBaBPgXbH7to7bMht6SY8G4sTSbcxRQvB7LSRq4Ly2foaah6JHxVwv5ijPbpTamKtEqiGrwQc78XRah",
  "key32": "5zydqwVJXR9SwM6VgEqR9m1749rMp9EjhbFmhGz7jTCNoCamYN5NtsKF8hbRyTf4tAsRhY1PH2bbHo3ivnpqKCGN",
  "key33": "5H1RT3wFZSQkoqWt1ssCZ8ZeHsUzgq2cL2mtNXkp9wZB4y2gdXFwffYJXMgZRe2zJW6St4VB9ftadSg8Wb3KK35Q",
  "key34": "3TfTBNALCtcHB3iTZNY6AoRK2gMagAxHcirA786TDXMFS7CYcTNwHxryfMZcPGMXsQenhHUtUztAMLPDjbx8vN6y",
  "key35": "2razGxGh6j1DfrDKSmuNDpr5hk6yTEAgM1YvXimVLpuUCc82CUtjduTYW84JgksWqVWudGiHeAQTSahuuyCzj7jz",
  "key36": "4pGtpTLjUNZNoLGp8jD4ESkDkBWKQaQwQRRXmnwGqtvipLfCw9MrTDpC89Co6G1J1sPYtDekSR2sh6wkrWEAJWzH",
  "key37": "4ts6a7WsNjRkiG3RYtxJkmdJRSr7mVL7vfYwaGa7NTPMfMHKkF7chMrNLv6dZkr5xabmNMGAU2ohaY34CxkFacxf",
  "key38": "u2MGzeQ9StHAWgM7rQA7zknZKfVSuPtbcDgPxhDDyvyUURaoFFEhAZeGNy7dipetu2pAcvhg7hw2taZJjHbygTV",
  "key39": "5f9ioAYQsnFTNr2FNAi7fHpujLJu1GiN1BxbeSF5JpyWdgtNGh4dnguwVSghhL5nJqLDTkRMZV6rys3kyqYWDsVe",
  "key40": "RXwyyb6aUg2n8W9Wny8eLiZU4Gng92sjWN4gTppKegXgzUWEhv8JmCogN8QWVq8xHqCGHf58poPHzuwwVmU1Vcm",
  "key41": "3AVNKWTV7v7kg4MEAZkzPoqAcpVXDcfDkkiCaCfnee7sunHkD8sc9TGhxooERdjWUFpEbVARRV348ATxPdGDfSiT",
  "key42": "5DK3hdyKqnvHhkMU6PEcCoUQzmnT67Qbw3BvX2cfF8UdKAyJg1Ro2hWvioxoZEmZqmfM8M2gFvtDxkysNArmm2VB",
  "key43": "3mdc8F1U4M1T2cebz57YjWUGF3wT9YMR7mCAUw9ubKMpJunoS8jDuVQZXFiAfW1STXTt5EQ5Qd6zrpV3v2EfXciw",
  "key44": "4cVpe7U2Y7YJT5VXd9dMZM5g9NADJWu8KiJoPbU3db6Lck5npi5iXn65vyX2Q9PJ8JST9LgnixKSHLFaQvEWYbsJ",
  "key45": "123fxLLofXS7jxEBQu4EYS5JrpGZpmygg8YcBvsh67kn9CzfyZ3d42txmfPXWMhVshgxHZ5nCtgqiyEqJ2DiTBCX",
  "key46": "36Cu8dFG3zRfHb9Ra4EfEoxUMrPRph2i2LJqSWhHHQzExdDLsZ4T5Rs7DYDCBpq76dq8ejhWv8Gwou491duQbUzc"
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
