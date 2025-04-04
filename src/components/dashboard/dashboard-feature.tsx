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
    "5k5Z3jiXVKJLcofiEvJ6nqrLTRU44Us4JvqhgVdoGW8XXjC9FDD2MF9Fe12r1dC4ev3ctqC5VZmu2wZ9cWRSusXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hGmtYyRtZep85BMyxtyrXepzzcFDF4RCP2u29vkb4qcJtG9UTArr8CUKtBeGmEhHBmYgYuZExeWm1rxqdSB7BYw",
  "key1": "3BqXotbmneBAgjqJ2t4EAxSgqDP4FKpg6DWBVGvDJCXMU7GBH5voYCJqHhG8su1gGW1t8v9aBUBFpMDvUTXBuNDb",
  "key2": "56G1SbjUhtCynawUQZ7LyAkNSWYZr4x7Bhq6CJuPqHyJ6a7QT5qq2xiGFss6rbq2yWBfWYkdnn5dcx8LBxAEkmCz",
  "key3": "graTcXBWAVbnRK5ry7Yq58voAvgchYfPw2dQE3aSMUQtsbWAhvUNkHd3noJ8NhWtHq4GQDLHErSHFQeghCpqrLo",
  "key4": "4xSFgDCXG931diJoU5dzFrH4qjxT7GdBmYMyTy4pHLsjK1VgauJhCtD8FG3tU82z6ZvZMT8Z3La3hT1m9Lozz38v",
  "key5": "ffvPQ4ExMSeRNYFY5m5YD5KhwAudq9ZtcLKtxWDtDczziLzATbUMLwoHELd3SGBLuU2CTxiwCVLXFu7px5xbbV3",
  "key6": "26eqP79Q2VJejYqpceCqSZXYpKUgMGEff1vjtjyxyJN3XzzUu9WjajpnHhs5Yex98W8SzZyzfbVASXpshdrghLbv",
  "key7": "5HCoBJCkcVrC2WaqrpNdWLxcmMEqGyroTxqgz9CswiPEMrUbhBLuvhDXUVRoquc4uMfUgW5Fbu4665fnUd8B5cTM",
  "key8": "3utK7yh165nUYtaUrnVJp1h1nYm46FPF5c2AN4dZszwniRc9F1BqFytV3S1TiVSYXUsAaLULVndGtvoU21duWSnh",
  "key9": "5zv8s23ZR1WZxZaqZR2RrxVYxb681FCsLHwZHrNLh8XPVEFLXsKjYXY4b7MLK8nXVCrXEn8Ky4VCpbk6diWGLYjR",
  "key10": "2XP99jc7i4UEyymLQQsN8xvUKdkWXUP24ikQypC5JYsHpkcAHJ8bEZ9oxxpdceXZoDHibQYWuAn7Rz91m3nyGikt",
  "key11": "54tAAwcz9rmdR3yKXgWUZK5xuub8YZ5rQuRF7P46R3kDskwpEnMTJKYs33QVNFBgrZ2xXsagm5VVuTuCFx3UbZZX",
  "key12": "vjPpNG5UZtkfXc7ZTwGWEpzFN3BLjKavzeFrNvEgb7ZeACqXciPac7A1D5rMBvoiwPHAm6ivJxSCu7bynxiQ3Le",
  "key13": "3u9bUKo31W1E2bHt1VsoJa9zFSrBG5dnN5hLAsAtBShDRXJqXy89bj8Mi36whTVDZLbPoCR5xiCEEdMz4pHnEzeu",
  "key14": "2tuyTP4vNpSrqhAGgrwbFVJRKHTFvit9cZotiuZiwKJfU53c7pewkcEZQx7LTtdH95qnaibRVEauYwvZiFNZiHvH",
  "key15": "3QnikVHCWEjg39hpyW1KGfau8zPHbhcc3AgVEGoecbSAp3UjXpAnzuYKV9sN56Af5tksEs49nTQYZxf7du84fv4a",
  "key16": "YCUnapG4V2KCBMKsEAN6QfxVxkF4mL3ityb9akmEwpqoae6nWrJHs8LRdTpxmHSPCEeMLLJq474aUsSepJfiewr",
  "key17": "3bevvGLmiZJ26gz9kY3vtNz79Edxs3di2KMurEPiZoKArWiLvKtUZn3exptmEhRc9h6RbU8T7Dp2AVYUUTxRAXQC",
  "key18": "3V8EZcSb5Wx7gUMaU4EqaSyXidvBkSRWzrK5xSGiYZLdnHKg9W88z51AZ6dMMAFfhEXfCW8MhVLZ9ihXEUsPUrE3",
  "key19": "3F5bEPgoEDpj7RMixthWkbW2yM9cJeb9Xs5CRYZQ5URXsfbtd8uuH74FvFnHpjbw7HikoXmLAvcsFZBek8yPaa2p",
  "key20": "5P85Qofj1daMfDXpd77kW3fycY5LEDL7E1SH8uYiRy4R9ar2JTQE3jBKS4sW4z2rdS5H8GxC98vfRgoChntwCujK",
  "key21": "28zhcFBEir54bG12JbbzdmcdndG3ZF63ZMxoZ451mEgMU7HUVNcAUsdAcUBEasY24UjtNUf1MUwzkYdKVL5RcMRD",
  "key22": "4ChwP1qg5Yz2NYb9pu1n9D3v6P4rus4Xjas3ana7uEgibdXvPLjB3qMdGxdw7Uyedd5KFRXUtNnFmhhEy6Jei9ff",
  "key23": "jWTBD6rjXAjkWstDwHtrS6otbPJXCsFXKfLbiAXrLkwxdPJeB2akYeCfgBzNQcZrJZ6eQgMwKzu8w6UMA96gZfd",
  "key24": "65uazVNT4qjZt9UWzbSiYr8XH7d16LmrJqnkxDBPf42wcjCMEQeM2L3KBsXMdgKapce1PcRZR2Cg4j2PmwogokoJ",
  "key25": "4HMfVqxRupbdzsHVwtgHXyCRL5GGUPCFA9eDoEnSneXGnc1YVCfszWzj2SmfF6pPKJig9fNq3cZyWe6R27pvEtFj",
  "key26": "h59Ka2qqgSgJsNxcqa9w27i4k7cHaFY1LgBxiabkby2rweKkfBZNrMYELdjcSaS1cdWyU5Ej1kxhH3LXZMTDSzX",
  "key27": "377VjJNoysv3rYAai5uQaNMm5U4be2G8ZrGq8T1htLxr5nhhUggvmLciVdCZ1VS4QgVCyYhohRCBqPvrhyrup3fe",
  "key28": "e3TSYAjGEdCb8PuuUaw4oQRcEtpvTAGTyUYCq1hP1EKVYKLZy77J3YNuipuPDsDvdTB5vAkCqwmS5DakLMgJUiW",
  "key29": "5wPjtn8hHfE3FjLFi16stHy2R4G4F4baY6ArzubPCwfJ7o8gmXz92hq9F1zhnuZfRGeDonYRaDtVKD5pnUXwEb7L",
  "key30": "4LbxvE7RQzF6NwHBBbzTgRZ43nFXtU1mA6hD66EZTVgi9D7V6xM2LxVEPqYPwMsRn53VZnVP4FEkrPkX53CNoW6A",
  "key31": "4HFWoHVpTrgmmi26CswSYKDqUPzCs4rp4kgJfkEHkFogT4hpx9ZjJy7wrbEAdLZX6JDYiRqVM63aVJ97pwMArrhd",
  "key32": "V4kUpURgHfD9apNaB1HE3YSMFTZ5fN4MYtytUTVSC7NRk1uwCVKLRvZ1odE5VjQNei7F5HaegMipXXtfFKxnUw6",
  "key33": "2gZFNfjzswHvTLxQVJAmaUqWZkkzyXX5UCebRTCQ8EP1LD8jM9ipxKyBn5hcN2QoJLHsn8SYiekXDQf6Y4hTR2ut",
  "key34": "tnN4hBfufR8SpMqsnzZkqY5oSS95za3PzPDduUMLYdxYDSsXgxuZsJ6rx3qwqdFP6hTcTK4CbNANcEB1Ya5LEzJ",
  "key35": "4QupUEUNujSwhmX3rWoir4TdiZxZMGdsTja4gS9F2Su1R5tejB9KNmqj3WKVacUVvKVWqexPiyRm1fgq4xc7uKkB",
  "key36": "nBFurZNfExCrovioiHT3cFhr6Ac7aCDDEB4bi4T3g7ENE7fTjyGF5R1hkMnQ7ohEVz7H4cx2ycRnxxje6N6PPy7",
  "key37": "3of4vLVZDU65EDWMRNx7vYCa6N26qCb28ToNfRdqXrKng3As6zmgqTtU6zp3EWsuAaDPvjotjYm6KPGFfryLmftn",
  "key38": "514puMmmwbnAA1SrQhFWNcAYR9QrEDFPHe65Lvxyj2SJNmZAXrreapQ4FRBUdzPSjpXUxGuXuqLAzm3NfEwPmjGj"
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
