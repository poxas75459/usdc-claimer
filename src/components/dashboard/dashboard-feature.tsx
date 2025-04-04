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
    "4NFLeuvA7UkMehU1ZQVWtPLnXYyoeHhUeiQdR2XC2X2zjj7A4JX45qvHidx8BKokCapMyqXkLzNhGLCq9xsWHmHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38hhKZCJERY4YQgMbNtWQSFgUDg4psEVfnUBxZXpSd4Fetfk5ZadBAZeNmYg9EXCKYAtUuxR6yD43nBsdFA6wyUc",
  "key1": "24w3f1S98mvUNC711vMXbqDrqAYJ2wsrt3eJhnP3mws5dEHM3rcRTWjjhSQFPFDhHjMNYJG9hd2EyePoXrHvQii6",
  "key2": "4DdWRp5CD66aML9495mYhjWk47c8u33PaxnH6YV9WLKrQRcGTizVrFUvYQeCQJ4ToKKveTkYzRRVubEpTTzaX9TH",
  "key3": "3DWCDr47UBQx9CYfXcVWjF4gJTNx8Ei2BauAF9MdHvjzdTcjBnS9FkkNP36W7ekFHBSuuntkAvA4ZJji5tJPBYnC",
  "key4": "4HWPtqs3vRAwkwYLepafwnKU7WEVDpCgn6NRcF27gS9evgnLK8xr887o32SAN1Zq3RU1hv1kCmjNgwG4LcmAvwZK",
  "key5": "494NQosu3uK4KrC9cvoUbLe3XUwNXaZtHUhaSjGqvEaQCwGWBVnxNPZ3L872QMw1guopcx6hECZSZYDwZQth39qr",
  "key6": "3ubinEwfKtLh9NXa9icNtozchpkKQyuoYW3i7MFsdyT9LYf6iPqLsCvC6g7NAb7tpXWgGjNbzXcNuHCiVbZFHebq",
  "key7": "4aLyF45nBz55grsDgvyiY5ceh7xZ4DvPRniCCDu2n2ZoG7tTfNZ6suq1swS56qwVba9xtkNnFgPGzL2bGVJTnbis",
  "key8": "5YFfoHAwpjmjmqivvt7J7JRay93Mj8SR8gMkVUkp1PQKtmpRa54rYtG9ekZeY4V7fuz8UtUGTwDktsy6hLA6gfwo",
  "key9": "5GF4oiXNzM7pojDs9TeKZHRpyu5jH6dZuZJJ8AcdPXVxaHwLcQWi5rT2QBf7mwdHm2A4k1wAkjcEYF5Km3J48BJ4",
  "key10": "Z66TECb5qGTew5KKa157HehN6JhzNhQrh1eZgWAiR3gJeTibrJ8pLAhvA9xA4bPSwgRNCpiWeazBMc2r7Wj7utf",
  "key11": "48jZzbTdfnmtaZjPuZXiCNpAaamDdXbn7fL3bVf8idWQ9iwSamfXAaSh8D4TWGr2wTjTHt4rtDQLjHqyaFPJ5oJk",
  "key12": "4ArnkDRuEwTob48fusbe7LHux8LeKKpcYxiWdNPK2pUMnBZBx6ctu5PEEtfENfx82zFSDXYJVs5Rb5rgPu4iRkCU",
  "key13": "mMyNZUMZHcRS2JTi46sEuMcNkE2u2ym5mrhi1bBaosVF4Gz8Gt1Xnsjmv9EBYVUh6VPXgS632iDvdQ5jYoJnWYe",
  "key14": "2uUW9tFu5p2GVjmGE8MGEUpun2p9eXJJAc5dPX9RaztM56zVQ3aRmwjN2QSW6mhVQxAXpqYgqLZ8fzN2dAphUB5r",
  "key15": "4RtrJgiSgUAGDVBGyrxZYht7WqwhPy2ywLKZRQRcpWERiqVGyj6ifDge75r8sKJdVGZLKVep5Gc7a9cn7Tw9xKDQ",
  "key16": "oiGz1MiwP1zqwJQpLYLg5NfV8ENV3bC4LbWSh9AZBn1SFEWKrAJ4sJ1F6JsBbtyvoDZvt11SQGFArCBJxb5nhYk",
  "key17": "oumQTGYHxnqbaADYwa9bhjZWJGDt16oQi4wzVbYHrZsRA18NeqCBArRYMxBKf2UKjQ4pC67tNtugLLsjVAoowi2",
  "key18": "3gonHbJ6q3V528rstyxuNLPQs1NVEP31twDcrYqnTCpi6txYMDVriWU5BPbLFVgP8sbRHpQiTiRQn2zz1CEb387F",
  "key19": "3vgQfkJ9JfrXrEGiTkb5z7NGpofohi743LAsUkc1q25meSWxgLEKHRPJwe14GVrY5pZcfzL9ispkwHQxYw56t6CL",
  "key20": "3wVmGy35194KwhgJvFfapjYEb4wbfXfmPPTon4ExrjikGpmLkJVKQc5e1xSSyphk8BsrdMpibUovB2KEGYfdbjtq",
  "key21": "3ZPtcFtMCedBHVJJbtBpMCcZLyz4cTbX1acjHR8EmVBQf7SZJTYZCkNUbe7WnbXXuQnEqxxQnDoYRBuEuX484Esd",
  "key22": "5nWa1Q3T3L9rvT74EfrYoTByXdgshvyvjWU1Mob3ue5TYFQkAJmw3xJTE9WBaGZRbR91WZ6iJuk8MY2UyJL3EjMR",
  "key23": "2MXUtvqbEStMtCgHVQGWM4e9Cf6V71hfhhb4LzDmM455gmBVxT7PTiFJg1B2ucxy4gfWA95Fu4hZoCVg83ZkMLau",
  "key24": "EK8y5TqXqUoWXftvogfkfMQoA6RakPMSjswDntEbE51efwNWoQJ2qAyTc9hTPR1nA74qgg1UtsbqEYrPx6D8vNf",
  "key25": "5e2eVG4daFL4DwT3Mx9HvxFLxF8AMfjYvx7Jh8SkEanLXq1ipxSCPr5aG6UCWGL7VExaFykTuXejiMkt2aGSfAHJ",
  "key26": "4RuWYPXvpKtv5x39CrAfbXP9x1rcPvTB3ZTDHYzNMVe8oBHe2tMci8fW9zFvtxq2EC8BNGZtAqvxxHAPLSZrz5S6",
  "key27": "4QcUr4SigbDmgr8uo5vHcMHtxYeoktdZbPDvEiNRpustJURq8d3NNMz5wFVWg5N7XbhvYtB7obSgY44PFiu2L41h",
  "key28": "Edyu8Cx8uHchDmaVFZ4536tGY2DbjqdrB9FzF95H9bM3hWUzzDTHsj9Z6vPpZpEE7PYcCN5BZ6zeL6quPLWJQM6",
  "key29": "bgSx4ETc3up4SMCQ9nJgDNXV3UA1FVkEpdKnhQEHiC1UZNp5dpw94MkdJExuXN8G3X6PyxJm2oYhue6NqdRLfPW",
  "key30": "2byhpa6bLXfWxTVHnUrtYepoaQMzjBMP1VSvyGRTvCAJ1EBE6fDNYunsAngbzKnp5yXcJ3pboicCEuFoYjeZTfaL",
  "key31": "3S3TNBCvgSgPkji6QGcpeexVtgzutCv42E7vMiHAk96kxagTNa7cRwthNqW6UtiCD7RKSTaoFspeNshK7i3hiT5m",
  "key32": "4B8Pp7hwkDKTzwXpk4m2dgeD3JWCqW26N2fUF25M9QHnhP9nkPiDwhQbmWhRTyRneDEXNKoKNoCjALW2g8d3dDvm",
  "key33": "2VJppVxEG3w84Gy1b75BsVbiKyWGEsJd3ZwRaBADYsuo3k97RYMkgxUhT2ELm8dL5s85Utt5aqzv7vsqKC9DLyUo",
  "key34": "3ShJxuPYGaBKDBFxWX8iNjH2qdpxixwjUcjv33yZvXVMTRFx7VjrSkYrs4631E2vn2W1ept9uheT47xEomnJbHnJ",
  "key35": "2myNVDFQHG89igWcawS4JtEtorcnr91TWybWLCqGWoCvv4hEccU4wmWdfv3gT5UMcG4X7njGpDgPLk5w783ZW6Z1",
  "key36": "4sjEUHfJoWuCMw6Nv8Fatzt16FfpXuWL5n7WSNMtQwqjn4haG6aogo5F7g1qafiqoGAPQ3NXF5QZmVaNkvDbK4iS",
  "key37": "5KnKAKDThbctQv2eBsXNiY4mmqCsQ6MLahGn7nXzKPujPN6LKKXLUE83bm21MV2E341MWgHagWsgbnkKFfLuJ2ZD"
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
