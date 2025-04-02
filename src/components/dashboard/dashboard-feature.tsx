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
    "3Ey33AMwWYWc2p4yEr6UJMWMyHYJmxGBEZLy4ujSyWMwPS1whfDUrbGSJf7KdA1Sa5uY2MsqC7g3FRPcNVjvfNCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqxzPkxA15JXynLdhgvqLvfa5FVn1SgNtFH2jS5zZNtFBsqgyyZUsqwrUaJa9W7iiHAAD2gL9VH4XuJbUnVsamd",
  "key1": "4BgBAE2iAVi3KnHBgmLk2LX8wXPq5t8r5TrPTsoKvFL8LVGNyr2QucCuu3Ei1pxU2wmPZPciR1rxbjxfuPh58eNX",
  "key2": "2xf1XUhVB8thyBfTWFcA8FDa8Pt1UEkSKJRzGNK5TrsBfzGPrfVzgNZjqipwv4GM3FFzRHKS6wmqTjrSBnBEBe2Q",
  "key3": "3aaEoUzWR45ivyYSutyjZ96E6XzATjiprJefmgWGn8VgwK9Z2XLL3pVXGUFE4qW4JmfyeaemMQFE2aV9EFQCrc7D",
  "key4": "eAzBahh71cTP6adgg9BoWWuaEYk7Jrw9zDcTyqZFyN4djDXS7zESoKKDm3cmstd7k6fuV4ii9U8MgWu17m4drGQ",
  "key5": "4AZPQFV9TXfM4ytAm8en4jsemajwnidhCqmhUKGA9nbUP63dgeUfknB8VhvtLgwgkBZZ1f1p8Nk5p8VAykbFSCZd",
  "key6": "wiPbys5FjC8vRfcH9vnPgirnr2H8LYSsAZ3FT3r6GCvFtKi6Q96DUWK8wBXFhivjEdHYD4Qa2QNR4BYnoCjDW81",
  "key7": "51P88xFeqfVS3NYfMbTXLtwboJSByUGtwztpn7RUvd6Vi3ct4J1hjgSGKFGwXTqtbBQ4jzxZk1zwbvvWL7Pr5e22",
  "key8": "RruxJ4MogsoCupjYtNTZWoCo4csU1Fovhsxdfe6aQXkNmnMiyCBMU1DAQSL3CoSCak1rRiVZP5uDtdsLhV6wP6g",
  "key9": "DzWbpknKqNMxCa7Pdekn7qmNrrCgnbQ8JHmMgkMtsEZue83HAwj5PMsQZipEM3RjSg5abu8fpghk9ao4yZt5KaD",
  "key10": "5PUpRnkU3VjeCQcY8FKWcWMYhCMhPktHS2TcMuGEfMqSULfFF4CGo9xojuEiWJYoUzYFx4UgKa1dvPvF9iY4ZvLt",
  "key11": "3qMwBi18ykj1iszsuUQNNveYTFM6vqNPNKPQfhZVZTX3cSwJ8tR7FzbsQuEMAejbCcPWmMwSf2JfzgvKgdXYSz5a",
  "key12": "5rbwj9ji25Bpg3ndESKHTc253tAqsXwwRZDQeAuvvVtf53W4QNbqNw1nGvwV6LhvXLKVKRUHntRmZX9E7brPKRt3",
  "key13": "3dSFKwcN3ZCN8t9GkjyKuPth5iVYHkSeiXcT5dTNPaH6M5C4wiCdhigxhDZT5adJ52cDDcGiJg5e4rc9K9BdT3dP",
  "key14": "5wiK4uvt8Xmbg2Pm4uobyNw5zm4aLSDCR1uPXM89mLXANccr9cue2Jzx9SbPpA1smjqLNNs2ziLpe1VAWwUmeY4u",
  "key15": "22ZGvRiXru2Kg8wDnZuJhVNnGa1y843Yd9yUvtUDi1GxHQdmZX7W3oMz3W5BSKxMg6u9Kd3xCdJK8XvE28y2UAMo",
  "key16": "eW9Y9NfxYvytdiqNwUb3nFRbaLUkWzKm7JAe7kdUuyzSoThbFe7CCT1tKN2KApJ5AxN9ENXi6LUoGeD7vBV2K3b",
  "key17": "3zPARVqfS3Mw4Z8cxnSgYBi58xdbD6jb1zE52D6m1q5VBm9v9eybp8AdAj9iyiMWbWAaPJnchKYRmpNNjvzRb65J",
  "key18": "5vTWoQCVu3LMU9ckj5F9gDSUt7EQ2HH5pw7NFUi45zjhMRRdXG7eVgnVjKHeRPmjstcDxWX7VJxKFMbMP4qTvCcE",
  "key19": "3VecdUS4wqLDxkMUMPSPjHk9puKpWChYhQo1VX9e2sH7Exnju6upSw7TM1FCkPcD2ygpyrJ8HK5cVaJVGGcn5cBW",
  "key20": "5q6tZ5pVygxyCYTGSY7dGBeXihCcPWM4osF1KSXmDwWKP1RQ4DhHoHUnX2TnVcK5t8U6XvhQpMbLZNYAHfQSsn42",
  "key21": "yrMiudas7ThZQpovFkXqg6mkTQPnekCRSBFrJs9aiYsxGcmP9xdQdWFyHeguQkqtpy6CBHUUCbJu3XGY8rURN8c",
  "key22": "3CKTi8MME12pKEh46C1EJ4X8Kj1vjLanrvAFHA2Tyfm2LR7kTV22ERY3yvQ8LKmzkTr23SFGUc1eABMrFSSyQnH5",
  "key23": "wAybxLRyfQjpAE2DBP17UMStG5o5oss849oKBSFj9JF6Zep7BgTtfgL7y8aG5iAQWt7rR5ttYEjBvY6NjezW9jH",
  "key24": "2cQWSFPYu1EUv6EU9SZy8PkHuCRAMJbPZXxginY8vu1Yw4xJuWCMYaZQmGDye1KYE2CtKUwGLR4sSVuJUXNaaffr",
  "key25": "3KbxF1cSUQsnJPCYAktAKfBU1xzhy8FKZCVYpVAMH17jjDGyqhZKrLdWzzqXWHtf4jJWRRwYmJvpp8qovmcFAjXB",
  "key26": "2j1jDm7DzjGeTRPnsjsmsi929fUeMFXEwWHLBtgVQDK14SWDzKMDJENaKws4yBB6CL8cdWTeATs1Dr618jYsnRfA",
  "key27": "3n6acdbhXCxtSRAuE6LwB8CtFsahNLT3hxWP3KzqSRu7bZbSCKgWchqgVUrre2qK1ZwPPZ6q624Z3R1YeTYoy896",
  "key28": "4wdihtDmZmJhvR9ZTCo7vPYT5d62T3YzRxJeZk4ZM88b9HLJuQRPWtdRYeaH6yWnjzBdGqrhiJ4zxchaiNJ5xq8i",
  "key29": "2yazjRiRLRzevXwYsyNwM36Xv7Jvg3hLkjZqdCbCPPb9dYtQyA8Typw4wo7ioMUZshW7GhwMyu3pRndy2Ham4UGC",
  "key30": "2jJmSy28MQhunMjpX4Gp2pSrska6arRgQXkXU9q39oVB98ukF8hNauACei54VWfpME4M43ubWYKaFBAJBkttB2eq",
  "key31": "4wyLwQZZuMR8p9xpckemr9MGpxgVJDUoaXvTQPtsjzorCDzFcx9nhFJFCAybsnKABnPH3rKsS7pVj4ky81sNN7S6",
  "key32": "4j7yTHN73LtFpeXP1Ar4iqWCisKpnThd3bYnATss5AXRyRw53km9KCFmt53bqnk65CuEadqB7TS4ActE3sqCx7WY",
  "key33": "2GdCRP32bAbUg3fkWdswksraU5sgeF8hVfVgMiiJTcdEbLnEJxhjVTz2uqdJQMdpb7LaTfdPabrJCuCUcMXHFEpN",
  "key34": "3cP1h5FomT8LoCMPCcoXsmLwWHrSkCwp1HveTZiJsD8MabYJ7T6zGgJpNN75pwnueNkkmDoCiF412rmExcRRxXuQ",
  "key35": "2oDWg3hW8RhnRcCXg6xKxVm3pMvNRzgVqScuNQ1csD5F7UPNZ6G5FAeFpbRYj4CpfWAXhRX5senRViBw5MCR6drt",
  "key36": "47VkDMrHsiKuSyMJ3uBySeEY6CE7gsJG4gJpxQSj7QhHXAcF24CjHt91aBzsUm7XTPpacqC3CnRxAC8sqSqUA6Xg",
  "key37": "2XJqQwKVB42pnRGxgipQ9AjwhREGp6c51BdU7wUDdJaZ8U2mjz6g4LfBWPwY2VqPHtecFHKHMtgUVyXNdKTWnZCb",
  "key38": "4PhEU9XHhPG9Bt8YL8GGdBbiohrjNeJzPZBvc5uRhfAjYCy74HW9TDdnX6RN68kMogUpVyNnTSEn8ZUKY4CP9CDV",
  "key39": "4YSDx8CU5usvEgtvK9zJB85Lr7XicEGBngYkg4sEX5GfqW8a18WnQhPV2bkJt6UwPub9jjqKXT2JxvSfa75w5zGA",
  "key40": "4sYg69VPrdomEaLiCJxD9vm2eS9VmnCvtfSofdLda64Ze4idRXATPngfD2tqVQGVXwexaQPbKdmdSjecAU3Lfjyj",
  "key41": "3kKpHLUUtwpEZYM4KtL4eWJGABBCPvGVBBi1FN9XFbhQ6c3hBJsBec13SLiHdv93K6kPFqGS23SEEEUemuhiyCFg",
  "key42": "47umn24qiZM3qDLWyA3VA6hrvJoHbnq3XH26Qik7i2GdnFCTWB5BnEw5AZsaAzAwsDqCyRyGrEJEfsYRM9q277Sd",
  "key43": "4f1a6ksM22G2PNPZMXA55EMNJS9vFkGLd8Ki556eEWhsAPLW6X7aKjTWQyFtAMALRi8whBvEapm4FsZwgwcHQWBp",
  "key44": "5oG6JNPCGehHXgCeJLbrNPjdKZPLTNruntMkG5XDTrw9y5Yhje6V95gpt6G5PChNnbAZwPfQLQ5aDh9yHEzTmi8F",
  "key45": "3TcBwE2BqyXNKtv8DHGwgF25u2duvPWJ1gF4ZbdFfHsnfVCapchgoBrUYsTa26D99EZhMiYoDRxeuTKNR2LwLK94",
  "key46": "32Yw3A5NQRVeZL5qxcycRtn1mZoiNudRzi34hKJabB1neEM5pqBDpqhZo2A7D3FG97wCWXFELyfjHaj59bcfhVD2",
  "key47": "4eG58UWuLvc2xq9cLNRSPzt5uHxfpJaUdqNHaB1Nnst4SpqNtzGhuKEAkpRvvWS2bu3WB635UHpBVwth1SFHaGms",
  "key48": "3t21pxnBv5r2RrwxtUhCEJ7imYbJcHwfBdjqKBSLk8cxvN5T6WBNMD1qQVMbzCxF47xZxoamWmkAJWDxah4XkVAp"
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
