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
    "X6peFcNN8jUpMtp92xuxEMCAbd7na2k9kgTXK9XUdYQsedEgPsK88fUU6vbrYvEcBEsEA6eqzpbW1FctbCpHSca"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3cvqU4cjZc7Z2QCehjP9fpaHHrNpW4MvaFUuArfpZckW5NQthhnZGoKYCZax1UNZHYgwnDPLeg1tkCTQKFSyPSXu",
  "decoyKey1": "SHBxVQ4TzhURBeEsFdt6b2RcjSB7L8rfxpCVQ69V4nH9azFdc2zMxwWHXARZvEWyBYxBtZsKFm5XG2ewahf4Cbm",
  "decoyKey2": "2toTFguzePKee7h797jesywgg4hEQ8rgs8kRH17RMJCE1HNCAP7uBUf6HipRZGgzp7c58UoV383qxb11htoW7QRq",
  "decoyKey3": "61XQftECDQfciwDVukpjczcP7mzsZp5tAktjqei3a4VYGcDthd7zgsjGVJvmUiqaThbMXd4JSc5fm1GMhZ4zJ6Rk",
  "decoyKey4": "5j1KTDHNyD1xxK6xXo46FXvRW2vwmqvixvWPNaeomrhUVVrP4mJaD2dG18mEXTxuADbkXev1hJs14qQQq65Mxejs",
  "decoyKey5": "7ufbPsXoBsREjp9NcATAMFLN5gX3kKh1Hq7Jvc55pNync4kC7Ys3ErbT6caidjnG3nxZAjJnJC7ZknxbbAmC3FG",
  "decoyKey6": "3gKwwYBNLeRGfWVAZz1Vf3C6FqBS9PkTk7tLsWbdB46KA1rBzN573FCPhxC5DeoKqvkf7LDQen3GN2Pg4Pj3F2Uh",
  "decoyKey7": "wp8bNmM4hnoDwk6Bc8enBUCmvTAvgSCVVizKt6yaQaFGjoQ2nPF3ziTfy9PVU6AcYuMaTi8W3tupzK9VLGxGacw",
  "decoyKey8": "5QikCoNYrQxiAdysjqx3pdUm2jFRBkY21xEFCWTnz1aMjPR6qW5PwqjX9QDX7j75H7tL4uRgQRubq7na7KXm45A1",
  "decoyKey9": "5sh7CtwfuHYw75sLzDLZMiT1YS3iDnxCdBA9Mpt8NZkYT8MNGTMSuBwutDjVktxeZLG23GydqFBoC4xwkd4CGvti",
  "decoyKey10": "5dEF5fgx486TiAJY7uRCb5GhNa92QrYTyLxL6JmPjRdQfS1fqfNE6fPfXtKDQPhyQLxdsL7ANPjstheh4uYwCncL",
  "decoyKey11": "ECkTpCQeVDgmXGLdgnbAq9j7FZg7BzMPjvYmyYj7bm8JgE5EenSvsDij7mcCgrizvjxfS8LB1X1WHZmxvjJPecP",
  "decoyKey12": "3YfVzTxcdy6qeNchGG7Kh3dG6WJftQUYmAfyu3TtuZPgCdSHGD4okZYcxrNTofwuvDdVJCa6rNuvuGwS58aG95kM",
  "decoyKey13": "4fQs1qj4hai7qD7PBDqkTiJrvWFNajvXCQJwGp6C6F1d8mXRGqPLJVdswuvdUZkiMtXWNyuHdUqPcz9UNDgMW856",
  "decoyKey14": "43S5knE6rZ1aKq5CYF6dUjreizsNHG1EheAbTs7vYe77FdZwg8KiurAeHLAjV6HjQGr9qjvX8hHaKvCYH4eNXABo",
  "decoyKey15": "3zTmy9cCTu7ihxpVKenhMMfbhSBd15kjQXhxjw3FYhbrtDnVqv1zcDQduN8jWTLdpXKb47zRNW4fApYwqMwqHKmb",
  "decoyKey16": "4a1dKheuCguwMF81BGi95Rz3uDW2kUHYyZDMPYQmngPTChm2LuAWns5d7VSw9vPSvBvuuNLQc4R8d1QguLQppTKC",
  "decoyKey17": "2EACZndLsamhgnwdxLohLwevMcoWnTi2PwbwqqeurR3RE6x74x7UsKkaWYCtL9gYYvc5xfQ6KJV2qWmvU33zffDC",
  "decoyKey18": "2oT6PkdfqJAYZ1cpoX8KKpwFS8PcQWdKtkdeeELqET444m4fk31gbxDMLBwwKFc1PVtMMAHqe9vrfvLex9GCUpxz",
  "decoyKey19": "4CbM7mD12oT5yC2riX6GiVfTYo7Ht4cFqKb5F48q9WXgWiteE8axtTw6vgc7GLzH917AVcBsoZxMgMgCX4PsK1KC",
  "decoyKey20": "sG6NXrpDjC9j8Ys2oNRwhyvbHLraiz28JDZAhTD7igvyRWJoxdi6gQmWPgQYNho7qrzd3GSiq73oMim2nSm1idt",
  "decoyKey21": "2Wisx3HWb6VVtq1D8MaG9M7FSksRTh2oQhDgrCVTZ2hLrq1kP94ZApwUo7ZfCPkKe3cKrswYqWWp6Rzk6xfREN2b",
  "decoyKey22": "2tfKtAMtDxsDc8PEudPGihF95zhGqutKXyVC2nbYPnRNskqZS95i9tg2K72yhCqXFLZB8Ek5Mg387gJRARnPP6UE",
  "decoyKey23": "226HWJQZ7Lz2B9TnxZcuWqdR56wSE7H38sNxfkuUXq73aCKLBrAwjktZRtnPtqKJKPeG94T9egMGq2n2e7fCw8XN",
  "decoyKey24": "3krbML11B1pnvc28Zawdn4VJS4cUgd9Cs61xp6MAAj9N16jm7YbpwD1u3Ysw5gCAwJphSBuVek9G8ehuQ14NhiHh",
  "decoyKey25": "2R9YR19nSJy5NDxCRVKzjXi6pTc7M3LEmEsTtsNGi3YH85j4LdC44gqUDuZDZizjYf1feQgmpWo9XSg87LbDCkrQ",
  "decoyKey26": "3eNSa5JRjdTEfuQZbipwn9nw4LGvwfW4pbKJsww9QBcRmmq6SMrPMuv9WL4LJpphU7mw4g2xwjpqB9QLPXByb83K",
  "decoyKey27": "2H1i5AqKcLCsD9pZ7Qj4TXVYLKmmfi6wkyXrsB5VR9C2ebsbB815KGBjCp3cNvYtrbf1bfrMbkPgdWZ6tiLjGE6u",
  "decoyKey28": "CnV8yciEXE1UBR9xqC1xdpVqVTwYmjMQBKgBGJbjDrYm5dDsYo7FRLyCrn42cVdhdoMWeH4HyZ3WcryyeYcNptT",
  "decoyKey29": "3AyZPAfNGEH32gzQNFobb7HH61wzj21wqxHzJNMYqbt92Jatc5ULU1WMSxbmENRcTbN5ACPmuS48tnYFDpqqaVEz",
  "decoyKey30": "3931Nyv5a1AU9nRyLcK3q6jX82vutzBXCV7TqM9jPn2XfbFUyxiqTzCq38HjGbao8722AaH6Xa1jCZPFjNz9QsTm",
  "decoyKey31": "WDHSpxPj2sTV67LvF3AU5RYadtKqu8wVjVX36AKXtYCb3fvPxUucPnGjDcgNXzBWi1fhMzoUzY69bKdPm6oBd4L",
  "decoyKey32": "2JVfhAiUuh38rCjTKwgDuwqe8jHgwgQVAjpgADVDPdwnarpt7gdn3Dqiz3akVNoU2qhgoU67oFRjA81jSbpJ2RkC",
  "decoyKey33": "5XdRmKuXLXpTgwK6U7GZpcUb3Qcnx4tNgy9VPyQgu7wP3ksCAQZF26AN6fNwQGPrR2NqXqFYaokT5nDXiZshRRXy",
  "decoyKey34": "4gw31q1U1ghW1Mo2WGQKC8bYAjwaN3TQ1pt4EoH4KJyPeHyTgxs5dUVkuUGzB2rUSxhQDkDBTwPqF3do29H6NuRw",
  "decoyKey35": "4KZuV9aZxC7NGys5AmHPS7ZAe74TXTqqQZpJmqGNWVCgfkvxo3DDNi1i8xvycnH7sF9pqS46Hi753ooZoQhAEQfB",
  "decoyKey36": "5hWcMQWZDWH5hiLr5MpcAPkzM2ZJVKh7wmQS6vR464oSYHG9Xgof8rm534YhxkRfSGSXxnXQ7apNTnFjhDo6f3c8",
  "decoyKey37": "5SgAYuHCKdKQ7MfMfRHyV3StGMTvuhbRXpJKfSUPZejHwSzCRgxBfLamSuMFdh9gLd7n3Bp9Go7eWzLub7iTFgzC",
  "decoyKey38": "cYTqXh6Cugc8WF9bRPbVwArshGiZ9LHAeAb2cBGW6r9Mqc58XVKpWhRjTx98eDGpHRgFPFcVfBxyusB5AuM8e2T",
  "decoyKey39": "2LfNKxcBXhNjE9tytnWKLeednCkqUtDYGF3Hn6nou945LE6j8NFgk5Kcm3n9hrgSLvdCu5EjxmneyNrr8fSy34Aq",
  "decoyKey40": "49ycv2KNJ1uY5MAhs2BfF8hmpbePEnKqt5Xwj5QD9SCBvZPZMxHPtR1UCScx3A6418smiQVq6jvUGa6kuqBc34aL",
  "decoyKey41": "5FHBJbPMiYsxvjJQsNx4jeQcxMnMfTJ27cmTznxG1PJoEijVZZbbpPKAgHpJEwzXtdcVejCfJf8uXvMgfgykzGeD",
  "decoyKey42": "5tfokyDzPHHxr2FavLeaAqztmFxicFW3fBP5U2gjCSKdP6RmVxqFdWscFmbFvLDkmXn6auexS7ZunTtVtPT23oE5"
};
// DECOY_KEYS_END
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