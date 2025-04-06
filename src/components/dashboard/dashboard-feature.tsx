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
    "3caSur3sdEqysfGCiCDm2r2UbDvf7XCwP5wgVPXHsKJNsAcvUwu9X2esDzCMtgVwGBJWewRStVXDEc6oAmRHXdtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtSQyBRWVP8xnFFfeRGFxqUfGUAKcTaHoeLb4VWEJNW1i7QSTjdJCcNc31zY8WsnhEjQYpy655aEHJuDaGEcE7o",
  "key1": "5aB4beuMQDpVGzBWDYDmCJbbxLr3NsrPHapdYM6SeJPVSRnHm6GXELmgJEwCtreYxXdtbixEFcJxG8pQqNh7uDRq",
  "key2": "4FJFv89LoDaNMaVECdrzwYD5YZ5M2UBqo7aXGm7spuaJc6ieUSeEch1USurHg5B7iyhWx9vz4zFyVHE5cS6RbXNH",
  "key3": "3wYGZwN4LjC3mWX36TiTkW99yQ4g3WgNvYkUgSGDbZ8agTWCVfw3q7Q6TeMknM1dBoeuwHSdNi88pUBfStJQroFb",
  "key4": "2dE5a1PsECQGgQ8Jwd2YGp9wNCjasHXPeiHYkqWSbtDtzetRA2zxdYyfQTSL6ZEaeG7U4brrhAeNhNpteP9gKhM9",
  "key5": "n2jHHDGFPHNWG4VS3cxDEJL5T6QH1V6qnjQnAPyWJnggT8u8Bh13WoMLTWDY4SvWKDNwimo7FY4tEJ3zUHDwofp",
  "key6": "2hH7TETUGZeRTihZUPVRBkqkhWhMsNEdBwYb7swPH998TofrcK6iBHCdWj3jG9DAa6CG3Q1NN8PcHNNEsfrGEhTC",
  "key7": "2ErgjMBPAXgPNWA8ij7Q29FCBVYAEKYicdCXTZPfTEry98tm5eL2ktuJVQECNrTRouzbBJSVXtpX6rfCdad4Tzw3",
  "key8": "5vCT7rB8fnkAs8eVhr7MEKZjFucdum56JFt3LQmu1QF8bi3K8He9LvfBxnf1N3xuYTo9Tq6ScL6KGGJzEt3D3ZkQ",
  "key9": "2mqxbxAvsxbwwkM935554nkNQaaM6cAHP5moJmFdghDXqdmQpawVvLGBoxu1qDFFBHSpcVVXVXmm2sBymcMXYZ6d",
  "key10": "1ZrVziJTk291F2r8AcdGjkh9tQqLsNpJKHaRSxprMPGT4AUjRH39TPPAZC54w3ekZekpKN5FEFVYwViQNUebYAs",
  "key11": "3aq7WMR7spSt36r6niJqqND9q4tQSUY14CWDVf7QxhaZEHZrh2HCEHU97MrMdGQwzVZFHAzosfSB2okcy9mYk1YC",
  "key12": "2NHREWgmbzHKVT97mDJ5wmdJ6BuZ4AZoGkiiTTzBHsvFwCECxv5z3G7zDWZ8CcoMG45YRznGNRznQVmATGPhdNWr",
  "key13": "48MRRppVsBTHKgumqVkMht94PB52NorJtQouDW7CYHhbPPDHKduzAcKyjwqNrhQen9r9sdV6gQxsisKrHHoCiRZo",
  "key14": "54CsvR8wf5QuzgEZCk1LcxAoyrtf3sP4HLg2e6hAkhBjCremwPWvw6ggP2Pob18tKFgu3EtRQVRG73cXWDggkPbK",
  "key15": "43xBuPx1pyfSTZYLcCcPX2kGsQqGuKSbfzsyxbjyLQNWTwmrifGRG4QKwGFjtfFYEaSetoGqKuZnLJx2ghUXQPQn",
  "key16": "363Bngdy4yoTbQRnx6RDXqgSgyocyJFVHaFgwJ9cMaCecvH5ML8d2GFuDXGng5TQKFRjfJLGXcKXxab9BLZiVTxR",
  "key17": "UBUEG3u27tDCBmangxfFqmycsVY8yqbb5TNJ96Wkq75KMEw8LkE4rFLo9wMZAGmXDmmpKhSBAWWV8PL1JmbsEm2",
  "key18": "3nTd37V1Xt91m97MGemEiW3A3HcqoBfX1GqprmQaouG8vD1u6ppbLwLB5HjQrzVDJhGsL69XUGmEirSXGdaJL4BB",
  "key19": "2UYU3mTWK3V7CQ6spETtWTewnQbQ1ErPQjf6t52w3fuEYkNBkmAyHqaUK99NrSQygZzH8L2fDW4jY4F2uXT4sf7L",
  "key20": "4aW5gq47zdJupm45U3pyPSoSdMGRDQq45HgRwR15EdThWPWXBz3rkrJo8tzzuudRWdbNC5rtro4hTgnwXi3bQAQ7",
  "key21": "3n7zqJnGnUWZjQ8fh5EebF3TsBfQxZ5AGkGNUgCvkJC4oz8zerBZhZ9ceZUYdcwR4om26ZBbbJxiYymUi8Tqr7KM",
  "key22": "5FWbgqgjRVEWmNT5PykKxh8PXfSQ2o7vS4p3kvhdGQ9afpi1Y64C7TueCj3CAWW1K1t2ZmFYQ8mdX5V1rexGo4mc",
  "key23": "2oZ1VetZakK2dxXGw7zyLg5XBZHzEfHfjSZ5zAJxW7udMLSa3totdRLnoPVhc7nQAQ8QiAXvXiuDh1rogkHAHj72",
  "key24": "5Kp28juP8fWY49ooohV53WKZypkFysTB6uEHmdTFSRCeyDBM4JiJZJDc593fL7yNpPeuwd3vhicriMJnPu1dtwKi",
  "key25": "28WhjL1M7wdwPPuunDGpM3we5R9LSNrpDhGqpUFHGqWX2iwR8foMej62ZaHSsga6LXNg1xvaTjKb65rhVzizTimg",
  "key26": "oiogDheh2rDwyFCJmgQyY5HczXVhddmVJ9u3nQZEjNvKbvreqfZgYBzFrPSJkk18TbnUghMygq7EBE1MKmZvKHW",
  "key27": "5S46pDei1SUCPA4F22T74DsATuVN9goXsp3QGpz1yzPQ8Ga3H6Lt8DiuFq6eKcozNJY1T4ck7GsKPZkSg2oc57pm",
  "key28": "Ttm2zwuwxFPxhEBTm3X6eEZVf4WGLbCNParrVpXFFPChDkJbPoFwEG8EeNbYvFdBaxtehC17mv2B7TdFWXsTzLn",
  "key29": "4iMroFdKDA2eK2fWtktVh44ximqjup9VtAg5WaYhVo8bXxoiFWY7ynU24T9U2rdiWcA9t72KQU8qk5LdLdXTXVh8",
  "key30": "5w8PMUvBXSffywasdmAR7aUKLMUjezHwsPhbNBLpZRxjzK7ZTKW7Z6twpTFZLUPnbYe6umqSjcfYQsZUTc5hvLCc",
  "key31": "2AQiBnrdxNyVAzpwP6nBKcdrfVXpYc16L9Nq8tKS4qAT56V8aAADUM4VYDLniZVckXzhbNaPtLqebTSeMh43u1PB",
  "key32": "3uiPSwimH9jjY1yu7ZtpGc7tzayEpoMq2F3y7BHKuyR3mi3AgXfHTZYF8M7UWiMQG9Vgdx1hDAaGZdpPWG3AMvPs",
  "key33": "3Gmrf1pZpk4eZ7wE7MRPvK7uBC2YPGwukCpsy2jovm6r4n7s1vcAp3Bthmh8PjwHPU7NhKguQmWM2DXM1csbNwbm",
  "key34": "2HHKwfdv6ePj95vgCQy2mXkot46uoJVyjT3T8E4zcTr3C6BEQE4AP2aaWvq5UFB5dbHAgybWQHxNMc5bYy5qepf5",
  "key35": "vCa8rMiwgFPL4GY2adLF2A77TMSfjNfpy2z6ZEvPALDeQ3WGjE2k2RYmN1MEEtYm4LsCdPLwoPj7dBwGT9VzkWG",
  "key36": "qj7UibEvJAteqdTzT4L6KR9AvkEwpvSvPRd3QKikamBjdwFFVuuLiQJeiZNF566DgQPu4pLWvJwrhxhHyvgVAQx",
  "key37": "5An468kLUoFh49JPqHQLaVWpdQDXgBy1vwparmrKXzmapTNLTRBGVTg6AoRNxmnTr9dkULi4dYWy8LEBnfVzTjNc",
  "key38": "5DxUtDrQqKSQgq2XsyfSemkx6xXs8o4Qx1texsr2uNjdDYCconUEZuKvRZ63bUwazyyiCdRdNFa6Lm2RX5VEyx3h",
  "key39": "kp7gc94at6TgVmuMgoL39MFxQqQnFRXB12svLgwbKkjq5zwcHgZCiHQ5h8EWJVNgSCN23Yxjn8uk6ZkAVc8n6w4",
  "key40": "5UMkX6Vs8RHTkNXBuARvu2x9ALZhPuSTVyXuBP4eDPC7axzZt6TyKknQt8YqPyN494bLatbcb78UzVJFe1oqmfa4",
  "key41": "5Ve5N6VFKthuxKbWdnPRD8Q3Gs3gVvkXQ2EkoWV1U3W181S1P4tf3NCe9EQUxbSa2xsMsKkBoaxPVwhckv6nWF52"
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
