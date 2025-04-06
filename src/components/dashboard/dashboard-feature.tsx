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
    "5vQfbzRKc6KzEbUpR1oznEvgoQXCPXZQUJ6z8CmFHV6hWgxRdijpBQgDT5KDPpwKBw6rDm4C37YxeGcT29wEMpCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ta8hMYuWGJRSRuUWrJ9GeTWFNNCpB7juUTdCKmzfmqUUiPZvvCEog1gwd7z1zmGypi3zM55a8BAShKw1vzqUPxY",
  "key1": "2p3LSDF39c6mvoBa86cru1FVMm3WpTm53WrhXi8LDzuDXB3fbPKf8XEY4FLyi7YrpBDwJY9H96LgQMF6tfEnD44T",
  "key2": "ajWi6yg5tJEZbvdNSVFHryKW4ymFa8cXAquXFAhaedS1t6z1Zqie3uuCxG3i1Dca2hCBAFBYT6ubbaZnemusSHs",
  "key3": "YHBjaS5nwgbW19TrQfi7qJ6AJmY6PZxGJwnHL3Y1TWLXZVz1vEu2xphkhs3TAMLzhX7u6eWqstupTUZXT5iRGY2",
  "key4": "3AYhfYGGhvXafcnGWH9jQeQcGJUi6wpRRX6GvJ4xeQZ2pdN1Xa1UNNoK38asQsmHVAdnhbzXHZdLrTm6sKc5eKUv",
  "key5": "3t8bGqhxkSK7K6k7VYmb575msmprAr3HoZJCRqnAXKnib4Fhf98hcMxGzfg6A4seqnpQHTbNRYFpkcR4SVzWYYvz",
  "key6": "46PqUXJtKyJ2s1uKJeTpbRJhYnDehLCAWJKr3CkyFv8bQYm69inBPqqdYjaZjEy4LatcWNngfa7BBnAYXGtqKM6V",
  "key7": "2WS4k2NwLjmAHjCoGJFkEw2gseyKzrPBSPoX7NqVLQEZ6p3cA2AhAxUehNc4h4tikdEYB17iaBLPQYYBtmao1Rqi",
  "key8": "3yxn8RcHZaz2DATivpxeYPsi3MkfkeFe1BEXUm6ekq8rv9GbmaK38b4keGZFEuvixUmBinqFsPAvzcLmF3zkM5ML",
  "key9": "3nsrgWghtxgTBn7DauKDD4oqy5DFUwojBfpHc9QTjsn4FUH7QEWq1uL9ktkWdmnbsA834asDgtwxTgxifvp57mvC",
  "key10": "51oN6GWjgJbWQsWUzVbxaoNtmCouq1bfDnKWhNgDp6qc58c6cgRRZHon5yWf6JUWM2QVnqCMbWv8zDxQLx9dz4VU",
  "key11": "4iNQ58u32ManR5KSfHcED8Zx8PD5vse1y2prksy2qxUpWjDtuxXemjdkv86prZCyEW9YocFt9a7eHmAT6MNDvTeg",
  "key12": "61GSiuBUZJAui25oSNJKg6wVHssq9kvVuJSKB81P6k4483hTFE64KjeUaQKXNYWZ4rjvBJMh2FKd2T4P4JCr5F7t",
  "key13": "5UBUj8mm7A67Syw46Vc4QfhNuUbbmaDEEzkLHAh6vgEQzwYQT8vQawFq4uMZBkbVu2m4oB6UddBKtjgYNpKG2Sxu",
  "key14": "4LQh8TqpACJXBtCVsFhZ6FPErGD1p6Xu99MZWbAE2UNAxfkpHYtTG3XFNzJYKJ7JBfTqoq8PQTMi8jjeYk9kVxeX",
  "key15": "3aqafcXtuV2cf6VgNH6BKYnQeT9xT6QvQ8nR7QmJvG4z3UjAKKHNDsc2kGQxdJRCHCnaLL3Do7PYNU8u4xuTQhDh",
  "key16": "4SMGnfbKraZWhKiqX7YJrWfMzDpmcHfoEg2b5JPDsudRKQqpbcxotA7as6NbPwh2i7DQXPzZw9QS8BTaR87wudF6",
  "key17": "5fjuCBcpA1TtLjApRtuxUboJhwuWupkApzPFfDjWqBeb5jQCqCYavbsRtxhzhi2FiAXEUyh7HmSR8h5eABzfUkYS",
  "key18": "4sebXgWKgL6ZZ9NNxZGefd7RoVYGAnsN3mC4Bjc5mqSJ3SBZCJERgd2kjbu8ui94HUaLDMoH7SUcwCD61oSJCmCu",
  "key19": "d88DwZo6xAeFEsbwWXBxiD1HTmJXG6BeXMDDpfkHaBVoTcE35kVAKhYsJU1WV1u4FwjfwNahkVqNoZ2MCoRfkVF",
  "key20": "46J7aPZBahi4CstMGASHSxhhWVcAUj8efDp4JGh18HsfD1svir3Cx4L9eybbv76awVU6nHYv9QdD5b2Ec9pjmg62",
  "key21": "4iW2awMpjsBkW1zSPP7bMsUWmu7JM2vngrhAFE1W3WaP7MddxHngdkaGQuxr2HrBtqXpwmVyiZqkVZ8bDWTXTmR8",
  "key22": "4x2LYC9ddgoRuZBAK6a3Nb2riczr6HoCsYCUM6oW7K5DCXtdWhUNGLngya9iaNW1tCBRwgU1Cu1G7DvNEU7sCTxh",
  "key23": "5eHmuS162hXSEwKbiJJU9ShHTyViEMQ2g1Zpgfgwv4LFf23t61qMTYZWwjXkMqV6pnANKWQbR6T66JvgkrELdKDr",
  "key24": "np13AY4aGWrVVU6ptiCNa34GeNkDtQKXLBHBDAWedasisGraLkKG4riKybcyD4aXX9ktnqs2Yb2GYFfgN4mv8fN",
  "key25": "5EoRTLU9AnWGj9B7a8i6dJhnnKWYhQfbN6x3APqGfB9RZzcrp91d44v1CwdVf5BEgTiDmwNkvLt4dBeH1d4ubSZA",
  "key26": "2C6ELYqKkwq16Uc8sN7q9LQpkQhqYK4MptftQvsi7PpnkD3hvig5y1inVcpjSqcz4Ps2znrEpxwAqbyKk49waTgG",
  "key27": "5Gw7iLWe4k74zQqwuM5u6rU3cdiB2uS6kXBuM2w87ZKQH517T9y1rUi3QgzrFP9itDspDaNC8ADXPMpySJBZFvMK",
  "key28": "43okWyopPH2McBS61cYFXZvXdDFAtGqVhgikQfALDAG8oKRCfMZ5y5374k2x6GTAf5Bh8vHAKfjhijJDq7jkhjQu",
  "key29": "5XLPUKPirgTY7ve7h8JhwbrAdbMi2CYYLdqG1BUoeW3uXcPvSv6BVJUL7rUTcECVAhGqsCuJaFKHAb2xqSk3MQch",
  "key30": "2Bx2DGw6cPtPcx9KsgqK3ospBVXkWprnonjjsE8AxF8TCWkP9wqauTJU2fMAq85TcbrgT4AxCvfFS8RgbNQbK9Yp",
  "key31": "5FhJdGKWUM36sTs3vb9Aq35b7mpk6ZbAp7GAvhLtDnJGmoeuoTnMosqoA32zu2YVi8ovuhk2jYD6towyTfE9GSCe",
  "key32": "2ugNYAoZiWmAsqCt1Xdj4EwMDwBMCrbXE8gNquv96RsAeEV1AWqty8QV4T71HeKLsgfa3cU419CLWRhLGC7dHMg9",
  "key33": "4L4vbb5PL8W7s6AWxtQcnpmGYieGHbH47uVJUdRZXko5PDM13FawgWgQo5xAwjqGJFt1JdC2toUV3GHa5bnrD6GE",
  "key34": "5kUpbg5MDzCxPj4U7MwKwjCTPbx5pjxiqBZTmW889gsuGwdzE6ntH63QRfCmz3GtnRCH79Wm6ssmBgwHmSvJQ6ud",
  "key35": "5BEPY9uhjF5ML8YKn8JSXBgHJDRQ4L9Zpgm41QCDwCJScMnudqs9tScVG4d3Rii8h7JR6wKYj62sue7q9TBK88PJ",
  "key36": "5eARxBw6Jc41T23a6H6wnZnHnb7VM67CiHiY1B7GvYVNSoBHdYt3VVeAfvHQ8MQryE5wJA7kWBkk3KvBzqa3RY4n",
  "key37": "2P6dsnDtJHCFSE2u1odMVUhqcK7mwAcefVFp27WtPdseoiR9DoB9M9WRmwhA1c1gVVLDrGAmDYrbgS8vnU2xPZTw",
  "key38": "4MMY1xphptCsdLmXKgVrw8TB5ijCaM1vqpkzswshQRA7ZnKzN37AQBBLEGhhgHCEZwZAA9w4eqmsXC39L3hesqiQ",
  "key39": "vurz9YwYifKU4yABDpTPtKsQZ4jzJaPJGzmV2h8KvzaQpS2syCBo31dPY8eNsJar1hxY4WiiLZNeGbkC74jm7Ya",
  "key40": "3XJBDR7ctfnSjaa99F6CcaDZHUKBrkofcfkEMic7gyAWtij3bbToESRfydaCusZzUYB53vJKuvX5gaQmdVT8Tjew",
  "key41": "56tvKqmvgxU4iSHVApRfW7VZjJdWni8diBBZMhYBFt6ZdvoHE6a6Eyyb65a7h5eQUnBKxjSXnofaJMfMafz1YEhv",
  "key42": "3UhCh3R18iEZarCWW7mKRyoFVsrUqyRcQQ1hG2dbcphrehLY12ZzY6VBvs5WrVWESgztbWu43s4ccf1KLcTWWH4b",
  "key43": "3VpqFjJsJoka9idbLjBrkGq9vYASrGMzdfGABfxHmo9FMsZRXkkhdWnAMetyZKdF7MtCUVXaerLqmYMxfMz6SMLB",
  "key44": "2W3WKH6VPXjiH5DzrgUn15muvHXCfNRVP1gTJBbkTwohrar3tVzzmZERfmSJg3uFSzLiGiDnqhRzSQSwtSLzXZFP",
  "key45": "3FHCENDboswBuxjDXHC84WWpFSZ4fnkh7RCMSdZ1VXoheXN6w8Qa1E7n3NQUpk5rNmYgcMwVVYcK2sjKmm1awWro",
  "key46": "5oAjyhJErjqWC2gcJKhrNzR8CamFHMS9vX8btw3zrcbYmTXK24LdWT4LCEyyurPaWdnSTX2YAcSge6zuRbCMkE8E",
  "key47": "2SrWfGmXQYY2n9GHuDKXB1pmxb85vHK9YpVZ2sME9yc9GnuaX1MfBSWdAVn6B8isJpcevMcBNSTGtpzLJcVPeGJQ"
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
