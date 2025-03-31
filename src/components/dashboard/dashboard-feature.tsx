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
    "4XEvxTXGWJBuM6nQVT7VNP6kLp4zHaoA2Nd542K5ZCYb2vSi2m6D3kjfu9JVioA9YBe46HKYFQucKSSmVi2WeLzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qd6XdJ6ZEDwTiAJEsBUjkgNnCwsxTRSMKBupcascGVB7Fq6RfKd5ZDED3oGmfD6j6iD83wyrAsEj2k7LBK3pkKh",
  "key1": "uDe6AKYSHoav69B2qn2nZ6GgzNQiArv51Dz8dUnAzzQEFEMdYZfMVvqjeSEoGJ74VsQiwWSyEnKJNAsyFE2ySjN",
  "key2": "5DZzPVBfETAzVQfqeJRiNViPfd4zmNYq4ft6JpQqTokgv4ivvf47Q8RggBLxwThjWehDW28gHU736UbnaGryS1CP",
  "key3": "671aS9D8ZHAWPfnZQbqWpSFZ8XGc7ZmWSnkqbXTuDTXAZnE59Nt2F96knk5mbKoEonjokes1WVmFZ4sn6J4uExaL",
  "key4": "351wYajGPaWieNisMVJ4iNhgfXWCAGGNytFRNtGK94udkkABbTT2QAgxTpEmr5YJyo9HzVPU6jeeUWbxC7MW8E8k",
  "key5": "25Tp8et5Yhs4gPT8kRfTejs5ZJxCzo3y7YpRUSEKgcBHPoV1FDbZapyj4okbYVmBXG8RS4Z7jkcps265vatDY5Fo",
  "key6": "VB6AQ6HEMobzSVEouAZ6JbZ8RUAh6LKTAhdZccn8fnoSAUd1SvvEhz3rLxXYPM5rtgstkXPAshMZLkvYW5auMKD",
  "key7": "3DYHWmgVZv4w56cRynxeocNe22BzGQXRVSKsdRQCVTdhXz4xsTqoX6nSbaub96zKZ5yoyzgs8BTqoG41aksKjYZA",
  "key8": "2wPfMcwY82zwwiQAAxeU1XEHfrptNmRMPGVrHo3eq7jALQrt6e4gj3gXDQpvXWULGhaKJKjvHv3yv6Upkd2ba9Ho",
  "key9": "21JHbwJRfyL1hikAD39aJR1Y2VFCT23kvMEV3mjsYM7QEJzgTUG41V5AA7Ebpc2YxPqDZMe6oUj3j1N3R8vD3b3U",
  "key10": "4de2mLSTEXB9RizCX6YvEPaqA23qVsJyV3yWeLWLXSpNs1r4Aws1iXTJCK81W1PA1ZcMRN4oRd7D6qjeGXjKKcNj",
  "key11": "4MxotDHk3auxu83rD5fJHAWMd4JvVthSsTvHpkzmyKipGeG3f3Ae8p9J6S2yeY2Nm21z5KH7EqBynJUnAdvPFp7B",
  "key12": "55bH7Vee6brd8Sp4BYuPw6svDUz2eNFnf2y4RfNw2bBucjEs5ZULwa2oyE7EhcPv1kGHXqgLGy5LwBdsXCYVVMGK",
  "key13": "c7BD6S8FWEH5wHjrz9PYQcXFxXyyCkTv3NA7ZRkgg6yYW6goF1jh3U5J6SSsKPHzxcdsPoBM252EN69NMXJc6dQ",
  "key14": "4qJ1EdHRDMzB5jXHTrhBWCS1miXC1kv6zVeF7y1T5KzosQJacNKtw6jXTLcp4TUCmRzSQ6heaDpA5pckMPQvDinf",
  "key15": "5ZPzuR7ekDVZR1JLYmMsDCw95J6mHdkpFRVUhnMbJKqbkTXwb7H845u3Mcrjgk3g7NBFzWE8ySjrxSJbMoANDwkX",
  "key16": "5iMDof1EaA6dTKd5yi4i9s4LF8dQQWxN7g5poaB7TdeVFU591X11xqfdZVJH9HL84rhzE6VHSyxCmrSYvesqTTuV",
  "key17": "2NrXNpacj748n7aopFGTDqWJrN4LHAPzAyYVeLDnhuAnZ4bueFT5AkfVDEw7bmUD3ppHwZGeALq2F6k6h1kJAjFT",
  "key18": "4aD94zp79B4JcLJ3micwhtCd2JuWMqqMBNkfto9ueopEc8hean2uFD8FBRDixPfJv6ZQiYT2zA5fn39CfXYt8gNK",
  "key19": "3upWh6g3YehJNtoUNrzF5h6cRujoeRQ8htYKQSa9jP5YEh3sKu9frNes2CAeNeLF6oNcFCbSvq5Vz8G4L9i75JSL",
  "key20": "24JsSsFyTAmhzCcZQrYQgAC3FfygY8AvDRRMaDcjAWw9qfZMW4NmcXRD28m8CijxqMmQU81CMhZDFLBPSZurvMgQ",
  "key21": "4Y1qKVYJvj4tM7BQ2mUUuarSS3HY1sTnffHwRvdQFA86JKxjJCkk5heMUsJRTXASHNo5nnqC9SasedoNautWfNe1",
  "key22": "2oijNUbQuoxB9VDiFPFvniMefLLxeHYiQ5qZv75rW7i56JoQvtQyGiL5JKDgkcL8w5J84totaEygJ42rzig7iivD",
  "key23": "4B6mNa1zQ6PkMPYfeYWGC7e5JDrYsQYLYPc9RZggTpXdWstRaBPznW5bU2S2pQwjLmtDUc7RQTjY79MCzgVo4vXY",
  "key24": "2T4rvgjinYYh4ZZ6GX1F21uKL6EinhpWcV8e8DvQt7Sj9Bvoz77Vt2Wy9Rf4ibmopXBwo9eqcm6mrB4fMHvA6VLe",
  "key25": "v69RyExdGvEHahYLQdNKaYSRvJD1bLuAPNgFqjX22WyfUzh3DiUimnLEiGE5ZtUe2r2FZCaCv8mwT5L2FmJur63",
  "key26": "4K5Gw8fxPvMsB9TSM6fy8AabhWkdVspnfFP4GFHsftQy2Zt8SpRRqF2vQWMLEAcB3jHNtobHCWnv7tdySyoVozr1",
  "key27": "2NoDFEwyW2oiPi529AFkDUhdJyAqm1Nqo9PUs2xjzLVmkXRScKxLDCUPX2Qm6NGgwmasDYxSxvZgxL1tJ6N3UKY9",
  "key28": "2nk1ok5AbbqX3JQ2hC455kzUkKrmWPu9StC7D575qdEfPmYkDuRCJvUtWGdeasfg3uUBvfB4g79o3Ua4jCaouS1F",
  "key29": "5MFcLRb5VRwCykcmoR9RtV65W8LnL1cUw8Z2wpKsoPfvBneE7quonC6xpMSe1Ps4uKvVk5edx1yV6tMikVFEXqpL",
  "key30": "2Puz47wDsknPFqatneZij5Zs7DcHw8nkuJjRzKMj9J7v9uo1cdidnUzTbD4RZmgoHWhAUiGVBYPhgokmnnZQMcpc",
  "key31": "QzRZWJZ3y24KovRHqfnXBgNWVrgL6n9dx1e2T79kEKMyYB1vVwqJHuEaqLWUNKoyn6J8Hy1QjN8xGkcQdf1bjJ6",
  "key32": "2Q6pBaTEtNVGYxLYaaJUSeiGmd8gZ1sH19rJdRrKzZMBZWbjzGP5YiVH6i41rkPNCobbLqrUZxK1tVLBaymaN8QM",
  "key33": "2JbammbzWFAF9xwKBE19UWh4x5EN9WD36QSUzB5qAaE2YXEhTLUea4M2kCsxAXiKJbWro53iYhHTrwVBR2VuQZXo",
  "key34": "2qNauu8yLveCUJZq81BwcVyx2HpaUc3Lby4td51WHq7dNTjudHVpjfL5jWd8cqj5f5LzfPaVVpuMjH8zjyLgRzEa",
  "key35": "5GEgdMH6ifMuPaDxdcckC4P27E8TFesDqBg4gqdBgdZSu1rTcbbNmvSLbfWuLiyVKCVay9mzczgekv6wJwFqL8Y",
  "key36": "3tabBDj9rbTzA7YPXhJH5jv8LjaDGXDvYYgFj1bW7Z1KceFKbY8KiNoc8qPPf3uu68hAcgDzkC8dbuwq3SHNyrJv",
  "key37": "596BgoZZLzMsJETxbCi6yfBJNKpY3euZAFbeb3vKp4diKS7nnwpQRvHPpphWPTrCuaJWPFZg7h5mBgvLKiyAqwf4",
  "key38": "2AkxkTkzUC2ZRuwb1hYWCMteWyNCrWHe4DxhZmCbvDnXjrJ1kKvqdRX8gdhzGXqN3aa4Po3HB4CvKrAxP2LKjnkd",
  "key39": "4C3EgCTYieJyW8DVgFWqNW7Ze7DKYWssxFyuAZiUdsSocgudPujZ2APBsWa1koYU49JVMsqRAfTdsFwH2zgzrvwJ",
  "key40": "5AjWgbNf87iXbFqrTc5AfNQKH9PVhB8SpMJv4rKX6yNDm32ghrSQrgqZHBwVhANo8TMRpKQxH2U2nvBFFXCv5eQn",
  "key41": "4avzw3GRXwWUSzSHoKtE3n6DXzMZpSdzfzGBDatFgsicaHQM1518g68qcHE3bqFjvEVgK3DpAq7kdKe7UGVyLBUT",
  "key42": "g4gRBRoeWUcbDYb18Fp9dcc2iX5eNV5DZ7ja18meiMHs88vFfHbRKPaf82iCvUtZCctEuNkb9GJYeRvBThNxDpC",
  "key43": "2Nf86X4ahEZNc2G5Re4YkE1jgUafEchRK9c9DG6zdVLskVQ2Nf5c8i4jnHN3e6XFxhcpgdBZ6SXyXbq6jKSsnZhy",
  "key44": "5ovRTBHdtSAuw7cZksiUFu1zc16g1ap4w28WUMZAAam7gNxLwa6BL8RjKuBjTuKkEJRXn8mZtHbyPsdXw9oeUKqa",
  "key45": "3kNiN8UTM3kJC9MNJ72rSreZDjUNpMjLjrRqGyHasZegjcxVZMQUrCiGMrSVMQQeLJjwVgQDUzZiw3yMen8dGJjY",
  "key46": "3cbbhWSy1Po6Q6U6PmmDf5ZbSR7Z6AYvZahmpC3yLANpnXDCiNT5nD1SpgEwMCsy4ShNfpePsiDCB44U2iWSnogg"
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
