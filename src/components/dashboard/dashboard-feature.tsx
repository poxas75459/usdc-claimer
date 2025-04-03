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
    "5r1AWsHa6vz5goqLe9yeoDNv5Bh58GVW9HcZYm6otjeSBx8D7h8zhqRwPiShaJKwJMNJy2nMFCqFyFPJB4UJxP8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MoFMEQKXduDUYYpqbJAnU6QpZemiZqaC9iPHkMCdfRznph69pV7pqmriM9UguZxZEYX8Z3K5dXdPBVaNVfP8wTy",
  "key1": "4srjENv9quk5LwfB9mjFTVpyMnqgwDBERL1nejY5ANPcw58akJeTnTSgE5gJUu8EpHPuVJngN6QPv3dhxsdA9Atj",
  "key2": "5D7Jxu2tVJeMtS4ZHAnKdnAe4oqJS6aWwP7SR9XjYJQuogz9ehSueaCVa6JU4hbLDVNEiXdja7bpeqRHc6VzhZF7",
  "key3": "55y8aVBvA3G8NADFMDZ2ecPAfUXqqKGLS4C5qHNEjLRq8qkVn3Hd6fu2ZcX48rJte87ixjHqq1DbMaFyDY1g3Ki8",
  "key4": "4xyt3f61tCZCdv7U74Edy6zjxvzHwRFFUYZ8XbGEC6nhUQc8DC4AEmGgSPDA3xDtFhVgTnhhXiPK3LPbgbs2uNX6",
  "key5": "4jtZfsSgH3cMrNzS24fWKy2oVMCTCbuLMfoCDYVrV3DMG7JUWW47vmbFUeuHkeSw4ntLQf2AbjCJaUfcsXnJx3uL",
  "key6": "3ckZftpxZbX6huwya9UjMAkusmnSJesCUY7uAuBnUKuBQn3inp7SMBEFuyQNmrLg2NVpck886BbT3dGz8q83yQ5B",
  "key7": "dzW6eFSkkuMziaKCA3ARr73196w2PJczFcFSsXHYgFe1en3Qx3xPZ1a4AtfkLxipbP5Lmd2xZ9Q78EUeEBSAAAW",
  "key8": "3UKg7MzEyBaz7D9kmCFbNtWtqPg49kws8VwWB3SZguHmvn4BUGu8K58dbELpHMXPDhfieqGfhNdiBS2MfjLjcSu8",
  "key9": "5CQEH1dgddoKQW1ApvBBe8K2PjzWhV1uLsLmEeh2nxrTx1A1T9DTAfmMBPyX7M9Apy4pLaNhob1FDCdDQZiFxdUL",
  "key10": "4LucyzehZzfEJ3Lobzchzj2TyPCgyV5XzjuXGWPguA38mfjvqZppLCKvniSfbnda12uXkfnm56hmPp2fM9MGzJjm",
  "key11": "5LZrcQjPgtCdJfqxbEQSdQvxmiDyYobRzg6ZpJicmu2iYz52GqhNCtEfoBPLQBwAACEGcpCPuBUhyCCA5UksooN1",
  "key12": "5DGzZqL39DmTqNaYDtFhrGfJaLTCKFVhJG3KuU3zk8htW6MWj8unrmruhDYrgPsVd8oXET7yLBherVQNj5b6dJAw",
  "key13": "nH1QTToXhnm13ndzH7toRev2CRPbi5Z2RUR1fDurcvr4MVZcN3FRLK4GPXY2yo6kJTSgQPaygy3ywzfxfTcLZn8",
  "key14": "66xEdgEPf3yc8sncnrwPtwwd9qpJrutd9p3EiGQrvv3z1jsfj1TDqQnh5rEBfeBX9mU1w8nbxgeAUNvWeaGbR1Ua",
  "key15": "2b72JKrqAC6mCTZ7dLrXQbuHTgBY1NVFUXNtnZ1t2canhGLxh6fZ6eoTBWAX3HsvXUPAz18A4CpvNu36NJf8JT1n",
  "key16": "26JAHkr3s5wsfBiUSmLsS2ZD82sQKPptPykYngKcEqt4Vb5Q9wm2E5pb6d3mKtX6cxqPWw2g45YkeMpdAMoRpGSP",
  "key17": "3TbvfQvKWcF7xV4kkQqqD7HcaJYN6sJ92UmT9fD8NWBjCHeZH8VnfLE8qctHb7uTreQyz4hExb799s75L4Armids",
  "key18": "2SHYnNbXMmucJohdhjj6ZWPNYuM3WoPTtjL9szxfFpQr3Ubc4mnFZ2LQJcCJVwdBiE8ZsdjAL1wYKLnVkM5yc7pL",
  "key19": "3eMXFhTKfcEMQdBvNjZ33RigNPoyK6xjw5NePPJzSLzp5pRsGEfiopge35k4rwoFBbmpoeXjRMrwbmj7zREa6cEJ",
  "key20": "2BWTwZCDAHBTJ9XE1m4fo7AXLqhkw8tUeDbH427f7FSSWBXg6J9EH44N6TxAV4qEu2qy6Vn5q2BAGtRY2ioMq1Dv",
  "key21": "3s7VvCgyziGWeEbQCxFQUjws9NeCVYEg1UAWULVwNadav3DH1ZK59tyA9B8gs9ucS5es9ZN5AaHkbP6rqh36qkvU",
  "key22": "2sikZwxf9xnwnvr9pKvArtpDABUTNKz6tJrv1MiCCzVjNdd9pssgruEX41Fgpzv8N48B83PH5niwP18xhimGVFoK",
  "key23": "3DkeTbSG7ErLhEz7qdfYGXgGnCYM7U1feKuFPYCh6RGEqmKXD5jY9EwhHSUEvfhHmCvvtSUnLJs1xc6EtsVopS4H",
  "key24": "4YjJaFqHs399Mr8GFfS4Jc4to9XwdQ6CBgmaMcofr7sAZntesDwsVAbHSZHMpMqTPMcnsT7hc6UzYe5h4crmkyr2",
  "key25": "342y4tgX25h1tgK22Jz4TcMHG9etpoQW2YyCXzap5Mk1bXehxCQw1Q7qRK49UUtxd9hxchyaF8Y5By4iKfPEp85M",
  "key26": "5rxuKdLLXZNDtZrETs1rsg4FRGPHgoSc4g8JSxpwgzdgTZaMrR6ANE4pYcJkZ7N2VDcxu94PGM34HjRaNn55XcJB",
  "key27": "4PAZ3zV5DejHto1hkontQFrXELyinRuBHxqqZGop9r4QCVg3rpYX6GR7HNU8sYNYbGW8kca323nCrrdwkebjDMJS",
  "key28": "Kzr2W4kHUDs5nNg5LHNCwFEDqTq5viuq2cbb3LbhCUVgUdYQSpUYR7XzQYNRJaTQBATPoQVtRsvu9JZ6ah6Qj6P",
  "key29": "64iQMNaPznasjR2ei12KkQnbbifWbvvA8Xww5XdBdkxJDcUUHC49243Y98QeV1XmtCgRW15U3EBwh1GV4MUQfRgg",
  "key30": "35wsgTvn68KbnVTPWPs2TVAGTEaMiVpojCtn9VeJhpntEx6TUWBSQSYXfTV1Truk9CtZAqpTzUensJH9o8w5qkpu",
  "key31": "3kJQo7FPfbgz4A52Wg4GWfm8sB5seaVN1BYQWmRixWSWDvZX4Au1ydXKBZz4D4JANzKa9Zibx4B1yKLx4XPbNjuE",
  "key32": "3uJAnFk9DHTEMWcDYwrbjxaUBwvGxKuvNaUyxYyiznXkz6X8jPhze4wqEwXqLdRaL6JBM6CeYm6AWDvHHqCbktdX",
  "key33": "2F8XBCSQBkCfgYwMBonUEp5JnevCsMViioSyXAjgb6Y6Aa42pNeU3jmFQ4DcGDfVCEZAEVMXyBatDeq7Q1MZH74W",
  "key34": "5v4br3giPZQrWn2zkqxDCgBM9yFPg13jgNatfXRQ1ZV5m4ZMzJ7vt584sepAKUzjh9buLXLkhQHZtN5YS8aQpTRK",
  "key35": "8DH67bCkiziB2FeLg49ZvPByxZNoVgzn2RKUXBLZ6C7HgxuTT8NLq9seMdzeyq4o18pQJ85fk5x6usxwFfxhKbC",
  "key36": "5YtobyJUgJjayVrunfFwkM4GiDrVHTJaGEvK3e1ryefFFcZBsPDmZRWVbp5LVcfszhS5ummb6ZnT7t8Mh6QPyrQ",
  "key37": "53QDtZvs8bwVaZ8yfwZynx4kPV2FBb381jEpLxBK4pzK9wBornoHaFPaXQcB1MPDZ4oxL1GRocykfsmFVTfpdADD",
  "key38": "4SMFHGJeZQkuVvmdg796bbE1h1MWrrxtAgYoq8sb3zkyjVKc2vPFccmH143WHTtCjG7vVautnrTQ67FgMkPuAYop",
  "key39": "5drVuhPzHsEUx2xwzYTSDNZBS2GyqXfRB4278qExeroMPoX6nyLMkGCF96h8qSrYKprki3NVfvmxY9AQCcrGNbYR",
  "key40": "4nvNRrS8Aa4FaNurd3xZ5m1SyC9Lf7UCwhpCHuoqDNzsoqYah2V7cnCBAtAG75awnauozWxMnYEnSUrnV6TRan7M",
  "key41": "5GyBRPePWNowjehNqtYoCifdPNc6QzniSayk3rCFxD5nnoi92uoVoSXTDWm3doWdQwkPAU4ckNZe3q1pqrz7ZP4J",
  "key42": "2rNsvdM8S487E6HCMBK1KeRk5gWJGtzjJVe8YfDsWmPpPvsoB6KF4XN1ZpzMX1sgCyc8SMJdy1mLeYEmWKJUCgFS",
  "key43": "2dmV5YAQmSabAfaWBTiXK919dSuQkVLtyoitBMGkYQVgnJBL3At4h4JWizcbFV8WGReapFsf51SVFkyMwMKuxwaM"
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
