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
    "4vkg8wq8p9FnCn9ub7Yta1DhNpxd8dRkqg7XRe6898NU5zJKwfRMu4hgEg4WrHZEc4iD79hTux21fiDK2knWjyud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnSsFhnbiqAUXziez77hLVNRPZqxLmen1KcCqy5XC2FHRMmXP95mVbbNESswdu6ZuQYFPEoCv5u3jKg4m4yhUhX",
  "key1": "3mkkWf36gHvKigSWrCcKWTNfGC9YVRmETGTwHtT1QHJPVNXLVYa5DdyPPyPzNHtdDv3BkhPsNGky8DMYgU8bCwjy",
  "key2": "xdiH3saCc9RSs4MBDhC4N8osnKC7RmmwwmWBvs5yizUQz33DDSe2mdRfZSCLZPVP34H4giD4DNLFceLgCB1nkfc",
  "key3": "c7eMYk7NBFbyZ3gJbnFasDar3deU87tqF5ZB7y8JkBZ1WCTrMNSDfGU4sNMzWwkZrEwF1GzLHqmtvHinnq7Vbto",
  "key4": "VqUw5bJHuQ521PUJabW57MbgXD4BzEHyMtDav9AsedvBk8t4LVFC7jrdQNjoL3EeVnPRrvBWM21tygyQc2oUbek",
  "key5": "4nxb2qRXLRxX2bP9BKpfDdsyyy2timK2USy85tHMy8N1rCdSxn4Q4Zu8Y22wByeuMKxCxy77UuE6me1AgSQWq9fx",
  "key6": "1nNpKTd2yfZrreUdPo8hH75NdFXxTbzKmyVqGnGmiasyrsYAWHSs22jjC8wBnwodUa44jzJRsEsQtuPuiWrovtr",
  "key7": "4YtMu61MfbtotCA3HozukyfUTGtsNZWbbugtdEbArzMnVzPZRCm7G8DV8PF7aG5wvJ3AssWoBuvqj9kkjY5qsWLe",
  "key8": "3KR4jyPCbjN2YkCgY9AUDN5dFZuaE2PBZ8maT2GJXpeHhTFpz6a9nb6TDc8eEiRjnYkvtDLE9wUp6osuwaay2Va8",
  "key9": "2qwaArjEThare9Sbvyr33AJ32r9y3NZ57MzSRdJm9r9Pmg51vWCkEGW4Zk3TiNxVJGQ6KEfRrSMRrs3X3EpjBH75",
  "key10": "N3e1sRQNTq2F8WGc4JPfnwsUayA5QLjVPzy74aMxj3swkqZ9gWQmH1cTy1cfPqJpsQyDCSaHaKzAGN3kzXTj5SM",
  "key11": "22nezaw9VwEbqK4YjkzVmiPtHdHudvfKvPzJ2v48BWGJUtLb7YccxdrFeGpw8ogjqkqsPB4zSmMzggzvyGsTarbD",
  "key12": "5MbbhSsbW6oGXDhkqZ1ZwGGaiRg7NdpaUCn6sXgqxckzWgzka36CT2n4gbhNJwsA2UcTT7E2ER62Sav14kw7waCe",
  "key13": "X8Emyvv1bPHAXYc3NraWpGhBWxMeU9Dd9pTWRcBfXeZxjdoi3qTnvToDpapV3d39kg9C1CFhzVmjUdZDQtpJewy",
  "key14": "sR2BpWryMT2taCbF8B5xeDu4QqNeacbYkSzA3JwJvGScByqhsBfGSz83QaFC6E7dgF3qqSTZoaYWZ5HHGsKHGED",
  "key15": "4SjRBZsSSNu6CMr89VQPcTbABch39uupsQk3S2okPyyiaNtGe5nze811vNbifJA1AaZfakDo337tL3fhZTMegQZp",
  "key16": "3zaHcpYAwUkReM68hU9Fyem2UKtdwGhQCQkKT4hRE5rdzURbqXGzBVEPyFXhh462d1g6iXxmkPJs8aCHzBhQxBi5",
  "key17": "2E3dV59pfXy28Dpfrjikfd1YxM85Mg5iH3ofbQsHenWMmmHawhV98XzGvfy7GgjBgvnAeEnoFoHxhgrR7yzmERHE",
  "key18": "5QdU8zmp73pnnH2vjjcKG79a1VNtSUzvxdyJVDbbHvQ4y8nvi5MWjSnrZPkg9SKLwtJofu66EsracsJcmaHv8aPt",
  "key19": "4xxeCDKGTNZ7PEVDUTJVDxVnqCYibLAyYX8j7oqxwJ5BXGDw3zrAwcn3vppQAQcBBvPq6PHU8Pp775e9SZxjSguR",
  "key20": "5DN7J2wbFzm9okUg7tzDNy524593nXVcwor72fr9CZg4q8rJb3uaVdqwvHPmbfbPUttvdVLMVkjFZVUv9eRCkGsf",
  "key21": "3HW1NCHb4fWvKXZRo3Tb4QGWVinCLsx884pUSGoE5q2MH5RWv9M5PYZRgxm9DGfTa5pPbp9qggAXPCTybpWMyvWw",
  "key22": "2fvg6t2skxVpVZFdCbH1ScGv8NP7mB66oiiXzwmBXs61UE1cJWsJFJkL2XPvgcXTLfeJd1t26ZF1X7aATVX2LviS",
  "key23": "3yBUHgJwCEX2aNsqkFC18ovL4tgXV6i22a3pnRNVC7NKCsbvUBZ8aKpMf3kn1jMeSHA8BPMrXKabEzxUVRxFLY7H",
  "key24": "5hzMxANSrfjg8MopgSrgFBQCz7x5AjvXDZr9v7LnxtxN17aFeGciNm7L3Lu9Sm4LpPNw2RcpaEHHqeMC9ScvhJGn",
  "key25": "2GoAzvWoSkKzha4frFBV5g9tubHEu6ZLauF2miRpvRZZbTpRzG9kx3SwZPCsC1eoS7Eqmx5Th2PQToFspwMNGhCw",
  "key26": "5siWJMvAPETZX9pwHP1M3kiYimXRNL6pabzDXnipqbtbM7dBKLnzbCBon8zUTzz185JZ32xLKzwsidsx8ALa3X2b",
  "key27": "5jomt2NvR7dmvK4WgToPHeKLFLUPc5fQ51R5C7wUKWg5eqFmog4f7xfzzM7Qmvo7gchGbRV2TqMJFRwsWXw2c8vr",
  "key28": "1ZX8ig9BmjSpgYtAi5AwDhpTv6yUXqvdRjwGqV1qkCJydw8y8SQ2hWRS3woGCLcP6ajgWFKbgVPx7KdqcR9vHy5",
  "key29": "59fJBv6drdaPPuHi19C354y925EVQUDU921yNZtGa67cxFrbTj2tamms5neFR2eJ8UCzgqxUyZ7ipYux1gRKuEfX",
  "key30": "3s5HZNzVwxZHemRdzay32DyC9FeJ7RxxqNdGoL6KxZ7oJNuSZzXQhdzSumoF1LkasSyjEYxNUY7cbKHSJWeeM97N",
  "key31": "5PVBivduZ5EKtuWbbXmv9G3sSDpm23RGjRwKUw11Bs6Vpz7vJkTcSzAVPDTxC17TswTrMihuT2ii2yhcEmqaqep",
  "key32": "2U6NSu69mkYXWFUTJhR9VL5Gsei6Tii7Drrj7JdVUByMug9JXxYto62kWoEJmMxcPL53XNQqsvYD9ZpEvw2ykW9h",
  "key33": "3XqmS3JVQinHwxZuiajqAtGWWHFhzHB4REpQ2GjY7jLpGzasqSR7BNGsiPqMYWN9zr7cafDxTBWZXYgWMpHGwoRE",
  "key34": "jD26dQMDy5DLJRohW2dFmN2if1KouEWS7eHjhyjnT3Lvfhsef9KP51siyMHZMx6HCLaEkiZFSiUyP8aJjVgtrHg",
  "key35": "fzARtozZ7LEtE9pXGB4jCznye2Lm95QZEiHNuz4qT8dCgRjyRQTYJGRTGUefV6oPRtmTrov2nAsfYtFUVXvWAtj",
  "key36": "2V38AP1f2PGX7ahzB2TpxRDdCDyTHkMQyUNAqbH4SyG52pcVgzAuf84xJDHQrh4ssLFmfCZjU66YMTBuJwCYWsSo"
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
