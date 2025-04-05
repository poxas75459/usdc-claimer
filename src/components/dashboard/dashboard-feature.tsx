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
    "47hLesW9X2tx2TNy3oJDuUN52MvXvh5zgSLDP92sqk9aLpMpPgg181iPx6eDYgrqVWQFk4287TzsnVzXaNU1Khc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9kLW6F6ezbbest9b2kL2hiow6DHKrW8DrX86PVhMDp9ee7EcK7du6vm4moxUhUWJ2R4pwDKGgVL412psNYxaag",
  "key1": "8eWHxJ17uYq9z49JKQp9Tn4MSbNxSvmmE8e3uD8jGpxsuaGWUcDK85qsUktUJpYQAgpgPBnUxR74WA14Mf2ryHB",
  "key2": "2WLHYbSbv53YhWBCjCei54Hdob3LdCDX2EdoY6kXTdtCjCFicT6fpy5WGpWwqDKnUV6sCEgjo837Pf96rBsQybRy",
  "key3": "3erC8BLqjX3poQXtmTLh4WCsLYN57gK7eWcbBKjxCANx7F6q2LErQS86wtKjohW1aGmuBhSdDvF5z7H3DwmSfWXC",
  "key4": "2yay65RSZeYAhBjsPnmzYGeLhYaSvECBnZNUHnwqfXrA6pBVKYTQnzjEjqq6ctjV88UnoUqdQB8aidaM1hr9Qg3Q",
  "key5": "3uQU8Rwf7fH6dXVS47xgUWUb1LcCnRXR1R5um2NesN1t9AY6LohMrzG41SsLBVV1YqwHgWRgsCnk3atRY2cPumkb",
  "key6": "29cSAmsxiXW9sdof6jHEFHUBBnhab7J8comFH2uwLdCapxEApqSZVygwVpRefVeXoB9kLNGvx5SxDAUngM164Z3K",
  "key7": "3tDyngS2EJj5jYBhXLx7YDyvbHTQDiiFrt9X1SqUrVxGSTyJebn8mnfViyjiSCQJLBaQycEwNEVjoQLwhbx73idt",
  "key8": "3ceYUo2oPc2bMzppU6UqNdth1qkzF7HRWHmsP63Gdh6ZUVQKi95JVWNAYpYcZgZupCf9gKFdxWPt4ArmrKjFWLuz",
  "key9": "4CvNshCSgJqWrtjXfFSRA72NBTEz1bhtRuexTUiudANeSoWe27aBW5joyfxyHLmHhV1yhhTACPxKEghFfwbBgmbY",
  "key10": "3cya4ARTw6CxtX8AmmiP6U7am3w8vLdiUEjDuCM9YnFKXiA5DFGmR1P7aMhPBfah2FnhUzhCzSBk89RSKY5AhnG4",
  "key11": "4ko3RSoQvfDWXENQ7pxq4cRZ5PLYEaCqNb8rhrGQDP2rrNxUCHFVwGfzHFRW3i6W6XFyK7n3sh547WtbY4hjGaYv",
  "key12": "2Yg4zEAL3mJMWwtjXrXPm3duWc2M9AfwVTiG8ik7ZJ7RKB6skiAf39dfSeSXA1fmWAXqGYrzFwiCRuupgbpUopdo",
  "key13": "31E7kXGP7p7CuQZTdQLqoNABq1FCU3j1vw9L3pDv8oxpoJozjgVVBVyYVH7WCBz8PTWsmRRUKp2durMducjwPqfJ",
  "key14": "2efQSUepkL13j8H5D8itSFyrp88mMLr2ALL1F6fDe5Q8XqpayzETuj7hnBefpLpTix4hDTdM4hnVV5RYxsZuN8QR",
  "key15": "iFdaubnJuDZFBAubELV5yBbvPwRYCcuXfVxuqZcJcGfihBYLinbMeMafM4xLc3WDEs5fjqwNzmLcV9pKAQt8CnA",
  "key16": "4MbwRa6vFnvHAAPNNDccRShva9KuJDtjeeUmMf9c86ZMbxq2q3ucZiK1YnSiN7PaBVVVU4Zfk1NUi32r4DzA5Pq2",
  "key17": "3vRLEebT7amXS68L7Gq1BXu97jkzEkUjqH65Dg9JZBHaeUAKrHUioFrJvyyVJWBwkcLYx5gNYt5CjyJDScF15TbC",
  "key18": "79f5hdMxKjub3b21i77YzF9FGFHc5sHy4rRnvy7mPjj1zK2coxLg1Ddq2D6Q8dZh72RaHoWp1G1YzARnM6yHejm",
  "key19": "2DQ5QaW23XN6YXWdyhZWFme7W1dYa4sYNw3AUFSyt3KLRVqJ39u4dvUZmd94n5XwmkhaEv22cC2NHhHdQMc4QYbP",
  "key20": "dx9P8QSqEyeUoJ9rRKQWBqhdLSpSiTQ9Yag5E735qJDp2FLFc719QsHc7n6YWH3tJwdd43G7zi7gHKCNCdHR11J",
  "key21": "2YdV5D7VK3qLcbd8FJMQqBiBem6CVGgUf7Pr6JVX73jansKtDSp6Zcgwjr9ZkrYUMEcasdLs5UgUbR3NwArbLBHA",
  "key22": "3jVwkhJJdjdELV4csHVPbWxfoWMivWqWCZvK7DmX1hv237pM8kvVtRdPp4Ys2uwG81BH49FmvmjL4GBTDAuyb4Jg",
  "key23": "5shr6AR5VJWq1dnDBM9U7oY2c1U3H8V4TqasTtfPG1x9vrnqW4S64wcxRYD3RXGaqgpg3hcsnuDmZSY1rpEVG7D1",
  "key24": "56Yzq7hc9gcckwaWDg6jiXsFswfpQvxrE2f6eLqc4jNQiftu58pKyBFDtUrMG1M4vnPzpT2JzqCr1HjFZrbcryuZ",
  "key25": "apCtnUSvFEYtb9DKZcrV6m5J2yAuJhz9bZ1D5XusGQEdaAq4P5t689Fny7Ado8hQ1hCVBMgwjQGii1KmFr3bThY",
  "key26": "4fasGorcvahaUDUVKuTScou4SkQ3Uxf5cAhcQgrGqbYn4nHe3SRVZM5gxE9AnHd86xM9GoW2A6uQbJTnU7X7tQGJ",
  "key27": "3RPCjnDtxoWLkDTYF2HkzZLSvF1MxxHjE4F3xPyAeN6oRxrvJN3p2CwoDNyxoBdhgYUAczjWx1cBQAbJLiLcairb",
  "key28": "z5uV39ru8Men5C7N6FmTbgbqUPAHnUmExWtebL31HBi76kGJjoiJRSkvYhFLeQhd6CroNb7fmuo8LE9TUBP3B8z",
  "key29": "5kSqpnomKscd3dJzdjVifJpE1ZGH955XJunt66bK5wWpgt4CkhKnNdR4ZikR7kV2rZ9gWFLj3d7exQ1KGtf4y8D9",
  "key30": "4vcXYXwArZMiZugJZwguLvVTr5BEgBmhAXidWFWp2TfXb1MfMuekd5WD5egCsNH3r4zDV4ymNTqdRy2mPPCnRPPE",
  "key31": "2FZwbUjydw74dfELP7EN2Pd4V9crJ4dEZSk7hyp7cV9cJ9rYjiYiUCbRbTuAgyTgSxEwXU5v9BxUjdMKxU3JQohS",
  "key32": "36cNiDE1NLnnb6Pc8vgZb5PtwvuFZiSvhZk5X5q6UUpFsZGNGXcrNxb8XQZXQLpSfcJJW1aZfzFmmqsyxaZD8sfH",
  "key33": "2eg5BMiitGcvkxsMBEj6CxyMWoBorRkG48c2Wck4K3VgzeTdMqwWfbfht6mi3jPMZoTSntabPCuH8sNb3oxgaJP2",
  "key34": "2oYPuyFfnYfbTSRK57CT7DQRpYgVxKhLmjTKyuBs77cH7mjZzy5AhHdDVdpfnjQxUh3UNArj6oEwVifEDXqh7vPb",
  "key35": "3DcgyhEj9WrVRk6EDWPjax232uFU9UW7Qco3heBZHvJugx8aC1VYxfmUX8hTukXu1vub9FAggbEQX2fqBZaZsWWc",
  "key36": "3cZn4w3FNq7NEQej4RkgwJkGinFB2b9DMtZ4UXeuSugrZbABva77R6AF2fhDmUbqytWPZJoQpZcRxqZNcumCT1fZ",
  "key37": "587oaESra4V6CjXWtXMo9ED1LGHGL8eBabbJJQ3XzrKbBuFkGm3sYYoA66zjDMzpDysEkugoim5M1oAfbWwzpjRU",
  "key38": "5hfiDvTsPhEpnTkgnYahqF84r3QLon8hgJ1HZCwYh99iwgEd7s7zkH9oFFo68UbnjLMHvkL4ndMGbAE2QFABxg39",
  "key39": "4QY7ZbzBf89Fp2QVLBRA5z4H5GEusytoh4EgZCZbvfWNFRpyazzzmBPRGD88UT8Xpo75d2JRL3ZAWVqXXXDcihgD",
  "key40": "5z86EszDXQiv4bbUicY1XVqdzNLCxdR54CcssXy8yJL7uD76dXVX8Wdvm4U7e8VpVYU4hAya7qKN5uHSA1SJub6H",
  "key41": "3ar5PdXzgFSShWqaBEfXB4AoiGSyYtGcPA71TsM6o8LDcmZmVu8ZqPnGKqakp5edeL8XkeFoWwjsS5iBbspy2D4i",
  "key42": "3tJAxySeHXhNkgTEzXVW7nfEKxfEUht3Kr5aLFS12E5VZsavtv5Gc5ofaixXiGqDfqzgf7QgMTUHgH2f4E8Cu35T",
  "key43": "5Wtr59ckXkXREdmnvVVQ3wHDgBf6VhYPbREEb41rvBxUXmnhwjUqrh1AqsHinkyNC9DJUnSvnnc1JtVp4HqkFUvY",
  "key44": "4zHKtAjjvMPnqnjDGjH3gb4dbWLfFFdEqWTPGHDeLC84ndnXZxFcYf8VXKyvqf5QfuagPUsQqHhhrhi61YtdkVki",
  "key45": "2arNVevufMRxAnapL6iuH5DV4Np5oxPUP4pTz4ay3SgFLPyMve7bp7ddBFEwBVzszH3iiHMBZ7p8n1birgDiZSJG",
  "key46": "33wGJ1Qbs1WovsTzHvRjnMVL5krfxWXYd696Prsjy7VARGd756b5MZ9DhqCcV9GdfKSU3kZuVS2bRnxbdLZTpKik",
  "key47": "29kBBcXhYM8uijMKvcab2jNsUXrmU4qbMwZt6KZPC7tUR7ozDQuHhAobjH6yvB567BJun7hQQVM7i5bn9kPFJsik"
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
