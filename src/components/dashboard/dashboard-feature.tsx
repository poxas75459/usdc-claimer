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
    "qm62xxj68JgWYE6pp8aWsYMx8KmeGKwbGyX3cuvLY12RVR6ZADkFqdVtej4fuTg57hiHyfna1sZCeYKmYWCwKg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRdgdX6PefNyyTXhbBLverjg1MiBYGrHUXhoYffCjdTau3Br7WKAJzJva9eJsgmiZ22dbm7ofYpv8n6Z7aLYmcP",
  "key1": "3ZiLrjzTbN9sZ9SrHmHP3gvNGRnFhxVNNoZEswUmuS837FXfynnVwWJidkzAspPBwgdL9ipm4DK4ewhjrV22VTAe",
  "key2": "39AzV8qDzR6tk51RrDsVg6aGV7e8kohyvWfiBb1JNRZ7dx5MTdbzD8k9zR5Bc9M7moV8AuMmpeehr8WrqvEXzk6",
  "key3": "4tj4phXut2VBNSXmXTBeD3JqDVLNYoK9qCmVD8UaZvkLjiuFqnjsjUkUyUimzXF9qQaLTaJRXpUZ5M9b5A6kGgR8",
  "key4": "54QyDUGSYDuysmJTvkY4TyGsR5AMpnkLN4LyBvFq25j8LHjznH2ShQLAbUcjnno22h6Wjkmd5AgfKAErV1RJYqFY",
  "key5": "3D9J5Z47an3S8QkyTQz7UipH8HEKCdt8wAboKFjhuiCRV1Y517UX3XsWKR1Av41g7RMnZCvwA8AD7UfMBfmp9X8X",
  "key6": "48vhTFqkCiWRMifA7UWhSirRW1Vdr46uWBhG5dkRhPcPwqgKCQ4LkCoA2xUv53hFKLwVvBTmwUG4JbU4DJZ5QzAw",
  "key7": "21qveHpEBjNmxEJRzRrscANX18ZFEgXsvEiUVAX1qTBJpSCSq5FFLmZapBKwDxwgNQTGMZnYUB7Q4LZ84ULW7JEQ",
  "key8": "63iw8SHjoYxiJ7jRmX2hqyooK1SYuaqdR6nDwfpK5uFhokvoFhQArUaLcB9nwkE6pGP1qYewgaXZreWxbFELEqka",
  "key9": "4ARA6xugqbELcCavw8YKWRNaYuhFm6DuJziA8YXUmJoPsiWbj7D9asEbWuxSPu71AjcySDjHUKM86cBQevRR34TV",
  "key10": "2piLbnSMWSWBxg2gYvUJsNNLxYC1qT8qbAC5NyqZU26x3uZxwHyNBewuCuMikUtVV8hxhP3wKEDDcRyhXaZyZH2c",
  "key11": "41jQCJa2sCnqi4cBtHDiYGZU6p6XCzcYP9uyPMiL8eMJejaemHkTQLGiotH6AaotFeBdjqDbqXyKKaGHaGv4REL5",
  "key12": "m6J5y1EyxdC59pBxRBsBjfGTaDzDcTqDpeCRBCxVWMUhn5BAs28wFb1xxXU9aGoWqRz4GnLeL1tnHn7w7DS2PVU",
  "key13": "3MfxigRjPmwz17UpYdszg2vaLsc7E4F9qSt4b5HxEnLFekETMS2wXFr9Tq4DiA7eG6z5AeB1mGAHmhKsAuhxfLHr",
  "key14": "5fvaK4rGoukA12PBuZwQJkYxWEwayNPwYF2d9i4E2JPM4gGTf7CNnxbVtjgE721XW9BPmNJEZ86nwq2BsNjfEFpV",
  "key15": "4DCF5wx6QCVFmkuuajoorMLyKE23SBYpxhaaZ5pj3hy2pBp5CKry42wxYKjqe9EzHUG3h69gxECA1o71oMuNaLnP",
  "key16": "5jXXb1gGUzSjNAddV6yaVHEuWULCBxG1V3GwbjmcCVHDL9ekdohXQ43AhVWQJr8vJ3x69ASyeW4oBTfdLJf37d2R",
  "key17": "5L6Q36u2Sy5rKr64uQGvAuTh43C5zXFm1PnbexZ5kxd2AUGvX9nZ9g2KSZE2LBAcaNZiY5qB5mWSVdWfAVdVpaEX",
  "key18": "4VtSthWn1Qfzzu8QTVKiRcJqyHARCot6x5DJz5SJVNKaPzsanZFcaEzDPCvcv4ksPbdvsAcmYcpnQUvfN8gmyXbw",
  "key19": "264JXLFgRYgFQhFLBsTqVYBC6UKQBK44ESR2eF7thTkqjV67RBRjWXTAtCsdSW4r3pKW6saBnLkNEh92ugBjNUPt",
  "key20": "4axDEMr5i1xr2ETmjGV2bPjsufQdirEWM9dZCJev3VCa65H86C3EWsv3JEJThXae273pBzvKhSDUNrRN8i2koyNJ",
  "key21": "4nrLAwZbCAYcocWFVfDS9o3x5HXAvrviLeYiAsVf3A8mUFNZzBoYPztWARvCqHxVvWaM8bN8htzg82chSBBcA1mz",
  "key22": "CbqE84iuzYqrJBNgnZ2xGrp8TuxvzJqtDPbFsmEQMNTGNtcNSuQjv8nFgxgavgtLjLGdrCPnSDRM6X4M1Aw5ECx",
  "key23": "45MDo3qssdgB9wZUyFmHXthceGhSLzJBBDH5SPG9ahR5xYrpaEMN6u9AXY3xay2PvpjEG9LjVQBrJ5Q535m7vT7k",
  "key24": "3duLCAN3V86yU5jzu8N7hgJRH2KTdqHXwTBHNoDQnurP9mAzH9jxSP9c8EPbpcaWzv2wEGB6TfgenM7PJvN5XNCR",
  "key25": "4WA2gi9CruXhGj27Cax7GTZposFgXTDvvouMUmtJrvGk1TY4rVB31DcSKmqN6iZuL2GFz5xJSEhB7r7jdeq5dLnV",
  "key26": "Wp2zLmGtH7Sq92UKzQyCG5b9r5FXmEX78PDxRcTRCJ1JVUCWckZGZfP8gvE2Ai9Wd2qDRLkCMAzrFhk5EUXu9yZ",
  "key27": "5YiYBGofUgpb9XV2cZ2r6uH3AeHBP47afQNfVNUvCai2XLc2er7bsGfx9uBJMr5cdX551fARK3xZMRYL5hGdw5ZG",
  "key28": "2by92ZqpQzMBz8G7BoFXhXsjxYsYV5p4615BFe3VUd2m4CBjDMMjEC1PXKqU1tmzprGaZWTt8viQ872jU3XZiT5z",
  "key29": "5ZifCALDG9kd7AjG4fscXeM6K5bciv7d9diXQKzGYxfApDJtMbfZvdf1Gb1jFawYjsC4cFSPNQ59PpDNuyuq66pN",
  "key30": "WogE1M3pkt7ZFgg3NARRrzAKQ5ts7ZcTsmGBSFeh97mHLJgVwqKKuRhrqJgXRyBHEE3Mu44EkeoQH7SZVkxFHbz",
  "key31": "42tFgxyVRm7vu74Wx7gm17NeeVLKvfcztNkA9CkXb3YRvWxR6bgbyKqTjhasdSp1XrWiEEvZNE4yD2cpADmfBjTG",
  "key32": "4wCLJ6XuuC7QigxsKoe6qQhGNzbJe7FUKLM4ubXCUf1st9a1gP8hj3myBnJvPk8tzkCiohKKq5pLR7w6pTNRuhqh",
  "key33": "4Pde1rcxc1vGnAdPjmMFBMqZwb5RHWQNRRU7QcwUYMso57icrH1aEfzsgYZpXjyWdogySowQSMAQnmfe3WXJVWKA",
  "key34": "494jBt5JxhyP1gzSnVoYJyx6TRYAhBPwKr7eYTgxMPgq9sPjBqV6VZnTbXNPRRccXBKJpUdAm1T2yb99BwM6o1Ap",
  "key35": "3HYoZmu5jTzqYuR4SeuXkYxw85DhKCz8i2WbPoMA4EYrTAyyB4N4GXHVeefshuuTawFjRRPWdSaarXxo1YrX842R",
  "key36": "4DrCzpMMxBajMau43bYGdhQMv2TxJVCzjsMbtVWAkQFvkDAUD6NXwbjhQNpcy3DQSez23BU1qHssomX594sT6yV3",
  "key37": "3ZqGdBHCDnzo37tFHcPdR15L78exV4V5yvxGv7myaqy8SLz4gS8QBgnP3cVbtwycZ4vQUARYaeAATF11VmAH4oN4",
  "key38": "5nuAFt755zq2QSoTVSiCVmQexPJtPMuE5dfVy121Tez3sDT3YtPUgKbBAxEA8FCzUJeFsaNJ6yrCCBb4RfbrpCht",
  "key39": "4E1buiC1KJ8XHhFRtXkpsfXSZeoWfqnGSL1qHLjvzav7rhKLpxFUBT2ihfcx19u7K9M8SnDZyNuP1wCptYhsviT7",
  "key40": "Ru7dRKNAuQiyaRhi9sMiQ55Y4Uvd2ozZZ3uNuQ1QJmC7NydYsqbzEU48e3jzt81y4iXuk2m4QGticQtquPRPZ1Z",
  "key41": "4ugXmdGbYeTNkaZnbWaDLdyYvwDpeJsVRSY9dNdduwHBPq4BBsyWomaJaojXQFPXaeSKQG7aHQKGmoweirXWA5VN",
  "key42": "4BnFtGG8pCmyw4uRXvXAp25rmpA4iXBLoWVYSdvgJkGzvhmEYNBrwvtxrJS7odkAvgBcyCgMC3sk2J8rThiZgrFX",
  "key43": "4Y2eG4n5rDAZca5ZsN2QPzWxEG9ncDS8yygEZLSLZWCDmZXEwubcrNGo5ykLUwzDQU564stuDHtXPn2JChiUndd1"
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
