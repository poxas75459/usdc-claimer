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
    "2XXhg1EF2uBiSveLzYa3yqH8Nsh6uSvbg9eRhaJzWqJGH7Acen2E22AXHgsqw1RGpHjCcWfbGtmnyzUrPYA6XKHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Mp3bBtg2tfcQXy5K3YxuzbHng5LCoF5tmLs4Ro6QHU66rqohxPX1fZj5tAw866ZwosM8rDghYk5wENYPKyLF5p",
  "key1": "4Nt3X8bTAfpimrgYV98wUc9Yq2fXEdeNk18JUgwXPK19if2gHgXTQjjvK5otYmEW6NndqXbFZZnby2u3j2mQhFDK",
  "key2": "4Q8nVkB9A28vJBFtBPxhnRqjVpQ6jWCqUVpHX4N6qacWcWubwrxY7pjddbhbuwGKS4EQU7xaKrPZdzV7TUJ5A8Fx",
  "key3": "2rZp69br3iHVnPkiA4HoSbRAbXnTpDDroGt8KJvh94r5wwEJaQTMmJXxMJxFzoSxFk4UC7V3uubMEy4HpBgWkGB9",
  "key4": "33aqS3MbHtkUg1hgFN7Ki4SMpj6xSTrggiD4ML7z5hENzQdt7AZAPLG59Lz5xGEQ45UduiDD89uPSYCnpnK1v4dD",
  "key5": "2emv8R7HEvyqvMLLQjz8GDzQsRYXwrqAW8qkH6UcVKvvWh3u6qLgmfUpft5ecxVD3zb8E6wqAs4oM8dRXQFcn7YN",
  "key6": "2TqYyEA79sfHojMnJAy2kH6dP7WCXsJWg6XA9ZKsN9r7TEDpUDKWdv31p4RNpVzsRRSYRsuaEzz9d9PQZrvMf48p",
  "key7": "3TcEas8H7LttUq7VY6RpwrRFgXfHFMzWPCuUm6VphSeLsbaBMobwxXXXn7vRnjgCTYPFujwXYBsoKWttBVi5fBWq",
  "key8": "5VP4LJGqgmDLsWQTLiqbAchNpAKCk2jVfCExH3y9zaxh8u1urVJ64bHczNYHd1cyD1XqebDgqW2xW7zFPnDhLAiV",
  "key9": "4nsAedH9ZjqRifUVDAPGdE7Yo1YCbVV8bVKVwuVdxUoCZGBpBrVXihHAemhuYrizqNDrsrbgssfbongdUPe78TFY",
  "key10": "LC7V1THb4He4PcPLSGeY8aLwg9An6erjYqJsyR5T6K2xhuwhpBeWhwEpNXXMTdmPeNemdediTdUWpiGP32PSARZ",
  "key11": "2Xkjx5Ysan1uwrjZrkYngmZ5iT3Wcg1v8Zs9LvKaEbw7zYQArynr6DFTXd2EqCVDXWwP7Wheozg3wAKukvomX1K9",
  "key12": "2jawVeBUnKLw3m4Hsj4FMnL7yz8wVoB9ThvrbMrPVVsQqQVrF36yZs3HXpyZSs2NoteiBWRm8ppivfWf7CsT4Uxf",
  "key13": "5wFgcmbip5pbyaU41mpyxCVvGKc6SammE6CPdfcktux1C8WX79AiWUG9rokcar1KipBBLVfqrt6JcFQ1YsG3y6uX",
  "key14": "67Qd1UBv89v4RLGtKWWsDu1edYLCEV6gWowbt7Gu3z16puKGHqrAGfG52givmawj2sxneuG7nYC7cypNWTCfZxhn",
  "key15": "3Gj4qWweb2VJHHTRvbpT4bqXc5Fm9NpMdA9pDbqgvkm1n1pUiegWSjXRaMv2hyfYznFh8BmP3DQPFZ7HGmVbXdTr",
  "key16": "3wsSq1rSZG8AcVPxC81XUXbrhxZgJWkMJPThahmx4jFKQ6m6L5AKmnXSckAb7tv2UnFiMomM4Le96f1zPYwhhpkg",
  "key17": "2AtkFALDcfz2ZVJ64aiRFjs94yozdRsMjn5s9TbWHm4rQWUBqC3p4pDFcBR9pDnhCr84W6EtPnn6aEudEVpYaUq9",
  "key18": "qmx6A9VXQuZwk3MhvjFM36sPt8BqgWBpz53veFiU6qrQn76jZxNX3RodPcKpxvCJgkgX5AMMXrLeByZ1rL3Z8HB",
  "key19": "5zGG3cnHayySBVaAXtSpJPF4Cm2a1w7TZ1sedV4VozfKWmYKageeekgwHgSinpXwE18JGqmLipKjUuow2X6sNbV7",
  "key20": "3WW89AiHFNDfr9M3n2uE5R7DBRFBZBcz5TVVbWKDVa5nWQksu12W5roG3oiXbJDWMhKckhGAMiM2NL6dBb5YBUn3",
  "key21": "541cPVgkbxAN99Q15WJov83KES2QKvEhss7sDV2oQ949VAGEr2AnFuipEZ9sjem2ame5SB95RBbLhwJWxRBba1At",
  "key22": "5WBRvXcr56DWVjeXcJHrU3fGjwGrc1mir8YEFSQK2qNGwu4icrH1soMKVCKY8asgWkwUYbmR1nYx3oe1v9T5JHPu",
  "key23": "3MHkjcdghxUN8ZSZxpqttTABsvPezqfaGsSJd32eBtSaZA1xFYSPbyWmUYnJfACrQBAsvEAoqqTUbyucRvVYVuQL",
  "key24": "5DT7NY6S55LrYnjXGPH9PGAw7hL5iixXj9MdUgaGbsRwHaVB1qDeCyiiVNzrEoyxBWpZbe2DBtQL9AdB6y87RQd",
  "key25": "3KkPZamGfjSHmdukH1fGT9TgjHdtBJw4s1Pn5MUwQwm4zSwwDCGBF1X1T5k3RPqgeDyUriDn5YejN22T7vpYxCGj",
  "key26": "38iqoShxyNGwhAP6PLfcr896nwdt4KSYMKBfWkkVsUBrGYGu5uCJU9XRdsVabMqq8NwyXJkEbFQe8JgAG7RsNcr3",
  "key27": "55PjZRGasqnUNfYThYA5GT5WtAuH6UehFgn8qn4RKmeQWpL223gNANSNBSKArD3diDx9TU48pTqA364YqTQa8Nvz",
  "key28": "3pKpiE68JG9NgxfheZ5QCh89y1HdYDiJqPHptsFuocjW57FvkBmUJKLs3GJWhMqCqArrh5c7Ga8yVUD57DAJn6vs",
  "key29": "3nsQ2AKGb1xuFDD9Fm9JczSNGD6kqmSvPCEkRPb6EFRjMGxvy8LyVRzx1tv83W2kSTCGkx84UMD69Yiz6CwiLDhw",
  "key30": "zpHCmAf8rdfBTrqa9nfnTTdZZHxbcFqPcDPFSch8V7J4EeGGEWA5htXiLiNWY7PaBH4FpULuNzbd46td8qtgAoT",
  "key31": "2T9a2ShoAYiEemMpWj3vz4LZq5Q2b6BKyMir9yD5SjibbtVBuDnLrZsqPyKaRKTomQ4oEYNtsjzEdtyBV7kqrJ6A",
  "key32": "WenKiz3BDV5KxWQxCrm3R7sHFYj7qt5QctGYuyECy55PqfqLKhtUyvEjXLJyMTtKAnegSDA2HCDzDeZyKi4gARb"
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
