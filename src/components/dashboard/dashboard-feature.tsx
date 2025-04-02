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
    "2H91mj2P1sA1aj7yq2athqFiL9UFGMP9JZUWB2U66tjVj6N51Di41eShofKK2sADLWibWUjQxM4LrQ3e9QU3iF6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEqfA3daCDtMJqnEVVCfSbGuPFfXaJqaM3WxUBpM8fdbofdZxB2dLeqDeXGtuiJ7mkZFZCj3vwc3VSMzBBsTg39",
  "key1": "4FgmDvqGHTsmfsnj8nVhAxUjVnA8m8aTJcQNCGYdr3Dyem34LPhSKFizzzMPBExf67vptkMDmhb1zYj8qXG9dCSs",
  "key2": "F6EJkH7ADDRqJvQGRYUGud5YuD3L77XT2KYsTHQASSyd4ni3EpPS11AcJFGDQbkkTxMhaqmYQ46q6BCaUFFsLqN",
  "key3": "BWTGdDZALv8hLXsgx7KzshSmDcVD33kf2kKhg7b74gs2nyBN4hUDoHsqWpaeqcTejcnxUfpEv7pkF4knE8Hajqz",
  "key4": "4TJc5rTCsgEg9EeQWmbHvhzL6BTu3k7NZNd1qZc85vzmv6mCHf6ag7Rx1QLRrHDuXUF5cGkvKJVaVy6j1sXTrUt4",
  "key5": "hhQ9Y7JczcniBoRttDxpoMKpdLt5axSpgimGpeAA652cMSJFMhVC2JSWuXBhi8sHYfTzEBC6iLdtUPxXP7wgYHv",
  "key6": "4R2cKt5WihuzLPsqPMMiAXU4cWpoHpCEEK9Sj4ARxoW4LHockhuX2M1snQrCt1FBGKa6MQbGN19PYGeXPvFHksXP",
  "key7": "3aDn5htW3zUwRQ9oxB18RTGruJf2nyDCefsX4ZJzBqwsSeNvJqX3uYzPraZj3vdub2ohY6ptVrzzw74UcxCcnHmx",
  "key8": "3LPqnprHJdUxfPkryWJoNNx4Zt3E5UxEcozRCkAc9ieZYAMAj7JP9hMUVUA3ZHmZiRwZaj3yanfDg6XTLF3eP5i5",
  "key9": "4Gc4xNkV8PfbT9P2TiL2UvRsVttyZyZ3uBKdEcjb1dubPghYi61aWDSRxyp1CqtAwvYaEHPuccKay891zG4j8Hzu",
  "key10": "gBUSQ2E6BbERMVzj6Y6bTrounhRKt1nVTiBGeLYzoN4AKF43uBvzVdZxPCynGs9M2KRSVHZaa8vy8s2qKj9ghqJ",
  "key11": "43sqydrmDNopHVZdoVa9jRoGMMNfAC95bD5TJKuH3zfryd833pEDb1rNQ9ZMt1XFqcmtcXHhMaKhLHpb5UEPBKFG",
  "key12": "mvECxW6Lt9DoovsN9yJyTt6CD8Bi1GtqkjewBzWT24ptskx5kVY9P9t4kjV9xyXQVLjHoPsJzNAMcVxs3BHbZif",
  "key13": "3ZsyWyazraMxycZtBbiKUQfDxGSskvEcqKCieb7P7HukNPd5Fphu3nmXVVzDZ3PUxqdS3ExujXhtFVraPS7TYMDi",
  "key14": "3ByW1BDYafeFabXD8JD6fcwvXJypBUTCurvCtbh2H6PG1VMgh2n2iWN38cYhmkYa8Knx26np2Ya4t8Zb7gCKbxhU",
  "key15": "2Y8gYfGgUaZNsrcR7sLMyyiLgYsUZcu9dApNJRxurQEWABczYHcQx5UjyCKUFt6nmA5VoG55rPrV16kNHzgtUoJ1",
  "key16": "34ST4yFxSk4uv9PG8M8ENMeWnWGnPKyCtZtcPJjGenFnL61Q49SkLS8Kk2PKcLkT1LVNv4tSYQ9QM8zRQDRALbSd",
  "key17": "4jASxDPkkPSUJae1pa3JYAtpcGXtKYMjZe89iFEXX88bqhoudSrVJdQcMXBrR61wVMwbDHmTUUbTQZn4ibpBcods",
  "key18": "xdLrorR67KVFtvDRWcxKtR4UbbrAvSrDsRbjvx9YoTvDjaqKCESt2kLCfJq959aUPyq2x2wnmaA5mijA8Y3cyBC",
  "key19": "5qT2Ta9B3BvKLWGm3APBTTe4pz4reJtWxMqc4pHWJhft8EgyoXZ4iB8V3t24wfqohcV1z4dCgNRT83RpmFFJZDB7",
  "key20": "63pzkyMY6DcAzBzCmxX9WrVfUTG7YKhZ8bdmEVDMhhHkcpsNKMpUPNGEP4VpEY9GZe32NPrqiDgQbiRhQ33fJ16C",
  "key21": "3LzyLLgAXWzhG7FmwB6Ft6eSMBhFUZKRc9xrC2KGWxYjoioaY4DD8Gc24jy6Vy22X8xzP1jsT4sCUdPWRn5D1TrU",
  "key22": "5iLBVGSZfwSMpsGe2YLR4bk3WgZZBsVYQUaF3QNtihSyeiNYAu5dimFTDHDyN77ci7GsvqVGV7nTbaRG1v3MjgiF",
  "key23": "28TUShCSVvKvw1jXbpiEn1ZmxovkDAbkz2XtXL5hiL6UQwekQTFxMzGsGpxgKGnz6djpW9aVKXrdzRdDyNQmndQ3",
  "key24": "2y9B2TrWtf4DXZvDHECRW7hL5xK1WjKNugtbNwZMNAtVUVLkHSv9Du9WKWc5B4Kcum3PkL4pU73eYbevhB2H2W19",
  "key25": "3rqDWFPCU2r1XEce1HBUnGEf9B7SCvUgrX9JRbifPf616evb1m8xAD6NKKujr4rqfTC7NHtWEPgWC1rwLvFJ6A6a",
  "key26": "4L4Zz6afNW8A62UBv2t1bzUJJDdRXj1HC91X8E3u5HYfk57S4L4XxTmD2nLGw9Gmp8fhumVvhKmPv9NpPMEfJZBp",
  "key27": "5ft7Lkz2bxnoLt6hrYpVWqugsakRDcaKBGQxszHiJMFhbgyugd8KUg1zkjHEwUhPHakzxWAAfThydV2jhQ2E2t2w",
  "key28": "5mJz6m1q9TS7GXhya6LD7juVaRphVawoyUjfGxCsPpgPidP5iRqPBcC7LmegMMw5qFYY8o1zg5o2ETYg5G6fPt13",
  "key29": "59XGKVjPDhoGfhAXxGYZyCHKsZGrGY1upL67ykA7ALmgZRy3Fz4iWC6hPwCPYhbve9z91pUXJvV5D2vxyr33FzF8",
  "key30": "2tY6GpjugbsFMvN9wr5NLQPuEg6Y2fp8UBGTZakd5QV3ZfY8aQGoQdehFV3c62pgvPUi6sdAAdoAJbT5tPGoAY4C",
  "key31": "4rUkPrbouFw27HnR1PeVDpxyZzdGWcWk1rBTVkDiCk2ksy9H3vFrkbXAEzjQTnbfx4neFrvatiCBteYpTAJDoxp",
  "key32": "2rD2KdCuwYaAwKoMjq1injrwg1T4NmuXdPDNAoB5GfA6TmJGzMxUVdnRcrxgCKPztwvWWCSVwX24pAsgx8KCpPaJ",
  "key33": "44WjsDDuUobsXzRAgcbM3UXsE8mkNqNDDD3SgA3A1T66BHXputQe8YFFXB9apNebDC8vN7ErjrFS3FxpJSJ64iZg",
  "key34": "pytD46gNncWpQK7qWJBg8qK4cWQNHHEk3m56kDK4PXBpbS2QBapK8ztU65f85eV9RrsZMgyPA3EdNXoDfRjsJD1",
  "key35": "2FWdi4zLRBoMwvTXfcWRD88aRBLigCqT9rhcwvpzz9UUyJxXGKSF8J7HUt72FQ9pry6wehzPfssqYCv28BV2XM3j"
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
