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
    "4SUznks9ecwhNfXpx4Jo5W1iLMmX4z2FrDnUZWiRk1Rdx99CRWwcMNyvDn8qMr1zEcMPmoKyB2MqHbymSFfzdkxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDdxUzM7mTvbwoDzcx6QM15Turs2t9JCYJxihBdnGmo741vpdiNP7YyWerqAH279iEyxH6yYbmUq7srxZvBY3gp",
  "key1": "47jYKvRMQpEbQtCLcCyNhgBzvK6pnBHNCmx6n8Vxsfpui5FXYK9ajB19ooYwae7XnPEBBvw3fScACoMSv5ZqFRty",
  "key2": "4dm94SPPmLbDXtbZNfMZhroGHukeHArTY5BZNCVf7m5UtLbqLxefVtVay4oNrofa7shgbcrBognV7668TUUJGYSE",
  "key3": "5wcfHrKQHWkxSYz32JBRc8pjpLqh5M39pH4QgmPt5T6LZ6tnav4Ff2zhLAeFMqQdcnpprstb61fTnUiDuafGmJoX",
  "key4": "5f9aMk8TpJrNyT6YR2K2JkMriQYChBJYjPBUYMQoktA5AztQDc5E2NtE2D3nszmR9thYigF8bFFQWswGWeXEfeaV",
  "key5": "4qc5wHXXGXKC5nBgNx6cnr6vr6qMm3apsaWwcBiqXjQ5bmSyXtwEZ6DzYbSn6VbvhA9gA9PjzXedvXzDyxQAXE8n",
  "key6": "5FYzBW24cmaCaN5XeW4FNaCHhSNcgSwNNNp3BZbXDRZnDePverTwwqcKYJmQiCRLdh21PEDPicekyH1eNM6XcgrS",
  "key7": "4ttYVCNgsvVth31FDHe5XexLXaeQwkqZNQym321MUYPaNe1QB9dVsX8z6tdhLoh4MhGHFGM5jzxEmbES5pjk3P3N",
  "key8": "3jot2zSVXtVjfE3wwhZBWWLs2QpYujMP7eLsKX3C2pY4EG27YUz75ym3Tv3UvtyrS7UCNJyYvSFUUYh93ceRnFRm",
  "key9": "2Qr2wUiJrTzkdU8FzNAxkM6ibetGNgZVTWHEhVDzGXND3HScxJeBg3Lz492gwsqdXsBSksTAbrdr7qprd3RPfu8i",
  "key10": "65bTS5P39Fjh3koDZjtqqTDghiNboyrv4L8bJZ5XFAqg3GXA8iaAouneUdt3FFWNdrnBn797AoogYj4ieGAsEA9f",
  "key11": "5YGAS4d6ATsrEqnA538tLgZTd8RXPf3cDN4NMAThsXEUWS59isHaY67wW5dJQEto4ASKTKCng3yM8H6yCMjxuK4B",
  "key12": "4LvqNEHsj3YWWPsn85FLpJ4t3MvH7zxVtw53muUXvJwVmSSV7Jf5fPguSsXTZ4G84GtPqS1MYN8KPaDCBWtWNiTJ",
  "key13": "4WYobnuHonLvKYZN7z6AMCMd4yBHyBpH2zBQJtEojDth8m1753WGpQRPf6WaT6oRUTeX1d8YrHSKfBFdMctATV2H",
  "key14": "2zwBZCoJWz4s26pMxsXxghaUW8M7FWkwa3VcxQXWKSUNq2ZUT5Eno5Ay4NZJMSoTVmiQuEPdvLNKjhHfGPiAvoqQ",
  "key15": "4MspFD55gz6JKGhzR2hHhopTyAgPkwsHpV9YPL2aoTSRXAJipnQWesPqtuyjjpu7k919vbcVYVMHsEstCE8SAQUD",
  "key16": "4c9knjAoynxNkdexLWdqKirqmP9LQsi8gD84dPPm8eyjtNHTT9fxZvFEZg9fUvCQrGK1penXLjQWc3Q4ekg2kLpQ",
  "key17": "8tZsGoSuThb7boXGz7Vset2SnGPeutudYj7aKm5J9n6XL63hvJHP1VHaPwoiSGVP4tweQd8iov5DyfQxf1BvhxK",
  "key18": "X8JfP24ZvMDvaMsaBVmziheSxTv1jfzCPu2ZbDyYk4eRKDsiBGSCXGCq6fwcmGuz4A6hpwntvxoxGDQSpxrTjY6",
  "key19": "KW9bbEeBiqpRfZ72gxPFRumcdX8zmibh2nfnKNFgSE1TH4tEcZH9sq8MbDYBUihAfJNPPt6FMuUYYn8cQ575x2h",
  "key20": "4mqQoCNkCds1pXxTgvyNQudcqLwCgo33TJRCfpYWseLqzRyAiUWaphAjFFvxbWqh92V6JXqCtsvaUJ17KDj15TSX",
  "key21": "4jEuwK1ykDaUCt2vK7ydzyRQvbXMrVGPr2fxGjfNGY4xXL2PXgv3kehoMgBu5u6XsfgfVoxsmh4QUru7VdUWVnKW",
  "key22": "58rQCEKvB8DZJYna19S7F5ehLZkn2HAiKWU2RQgpVRn9bhHroUa6xA8T5GEaMjaiFgH79Ke83Rbg4WJGTyTSWMrR",
  "key23": "r6gnVoyVN6j36VycfUJP5rAdDUdw3P6757qnF5N7pTkjbUqEGjUx2MZZTVKv3ooMgXKw6JgwVSqeSThFuP7V3jn",
  "key24": "3dAHk4C1DbvXnjXz7ekHtGgfb7SuekWmz3rZwz6WLZ76xfPedzDLKHE1xBYRViRnc7iENqy8T3bGzD9S1bmdjPEq",
  "key25": "5CgBtthcRLY4zuhXvBbzGpjqR6SxoeEPryUfKMqzNL3wiT7zuAfnUpBkrRJJjtjv3KEETvuBWN6UpDQkjXN6J49X",
  "key26": "44TVuN97ac9ZZxvJ13xXHEkJLPhSicntrDJ3zDzHdddkgPjEgpddkMPzr1ak34gjCTLmyJhgE9Fj4t5C8vBspTEa",
  "key27": "3v6ZwPdno3xAxNwNTbcdDcm6C5e1JF3HjZXsXRioRP8mV4VQdWLyZYJZHh95QgMUWiViyCA8j1sgLiYD1u7o93kQ",
  "key28": "3ER5wVGHZLiEoxb4f293GXi8PgnaXzDx2yszdWDnzcZdb6SvegcipXMRL3aJaCMg25QiTTUqPa3Cz65wpAhJFnyD",
  "key29": "2UiEprWwVbkVFgXvpRXbaigCbbf4N2YcXkajUn6HFNu4wTRVaYBq8X5W9jeSBA635Mr4UvWfus5ELhQXhiCBbp3P",
  "key30": "3LgoNHbTwxa6jFhAMMJ7vZ63JyyKrtTaD388qLHk7pXPp4MYy4eKVkE6XeagzNMWUzsi8v2NmAPh5Zhy4EVzbBpQ",
  "key31": "Kz4TaGhJ4bWhdn2dTNtWrN6qno6Mkxx1s2ds368jghMrfCLBxNQgRXBzT7S173DHLbZDu1KFXoKtqxbSn6eBWaq",
  "key32": "3ApuonZtaR1J1hNanKFze9Pr6zL5j3nhEE45ehHsVJW5ZUCrUBx7znEJm3SDsakRh8gZ3YwTzSYfKhuP2gPoiWSw"
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
