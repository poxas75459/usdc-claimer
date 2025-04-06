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
    "25vC7DW2LafxhJeExj5joQWAXzZomUcre3pREgzAtwWPFwouWcvxNBvHm6hR7V46KxcC6EC4hXp8yYieF4omcPdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CDcLSaUM4VN4b7dGQVQLAKJfDq41E2Yq56j1PXDowoRh6FJ6r5cVmWuDgrJZFT7xuu4NcfSaY5zmFWPmyyK9pDn",
  "key1": "2VHMjq9nGWa3ZSWe7NPRbYsKAGXirMWgRM4zRAEprqXNNLpPMiqt5XZLeJZtP7UHbiW9yrYaTNMZshoq7B49dqUU",
  "key2": "2WA7rAcoKsFPaiQmRfGyenE3o19PstVjZa1kVEvhtHpdcAHEuxN44LByhyAHsAtfo4pQB7n5tMdy3uJbHFMZ5P3Q",
  "key3": "4MpwZGA5ZTQjGETjdQBfRV3YbBXt5fnCzPVs1qg9Sxq2sCS8Wq7apBA9DCwi6ViYHVQyShhnTL7N6yXZFwNTCrra",
  "key4": "3uFw9gGMPn8uuDpPzaf9AmjNFkWo67G2uzqKDEtJDRTr5bnLtJ3XEwVEXEs3jwzKeBgxmY6E7R9ozZooRPPE4Gr4",
  "key5": "3JvjSQh7fmhLtkE15c5L1ujMfThGKp3M8c49KEkVXGiQpd1eDLUig2P4bKzLt6XWgiFHwCePWWUqcDtdXqTGXCs2",
  "key6": "288AZ4FZUtZzHZePV9heXGYn5qo1sB6K7gj9f3irpdpnKEikMfb7FuXEW98aey1AHhat4nvdPMbnP6rUeB9Ki5E8",
  "key7": "5U5Lc7occoR8XbUXiEV1YhiUFvpu5bZhZdxqxEJxN5P26WGcFm8tzenHC6MTrFJJWcnnJ6g1hFjdqheDFwHz7Jws",
  "key8": "3TWSqqYorrJTuRJJ8fhp5crye5fQbcXA4SpZiUFWeshtMvwWYkCBCMiAx2RCb3CCQVui1xCR1m39CSgi2KyXUgZy",
  "key9": "3ZnT3My9VTMJEcfHdMacucfypHTRPr1B3aBuZDMqFnqY41d3CJ7HRy27iJxLxdDjpBWH74zvQcWj65tLN4mcLj8N",
  "key10": "3KGkU2x67ZQYp3qbvA84GjyhCB1mpqTpRGpsGFkpC6DwZhRcdvcvYEU1wcPL8G3R5iaxQz1PZRAAGSKbXAMn6bau",
  "key11": "5PxsUnTtb3QyqPFxuAHtdk5DwfLRtLLPCFAEJXBNAqwq1arVVR11wQecLcF5HWfJKuMLTdL223jdRLFoUyB8MqUY",
  "key12": "5cnDpdSnxAR9iK8PTJ1XsCfr95CqZx9FwyxZuqi6EExNmjsWwZZM49qwpmoX9hX7FPvGgtPnsqtCukkC5mb4kJTF",
  "key13": "4T7DNj4Hn7DJU5kbTuRGmZGqFrxHdEFtmgoVM3nQEWAVRTgp8fBPj7mPgSLDZPTMAkxyXVGhxtDCSgnpUQ7gNJSC",
  "key14": "5rxBQUWz6y3vAUeNT8Fas67rkW2mwzPET1FBkfbXwjh4u8tYf9dz8QT8KdWAuVaax2UEnKYX1G3J4vGeKn6Lr4JQ",
  "key15": "5apGwpFfEfbbPJKtx5qCqY1noVBdfH1tgevDn4yVscVYn521pyGm9GFEduqPhqkscS1Ufz5p3wZNpb5RgiD5JxvZ",
  "key16": "zC1sNYfFMuMPzgRtLDsqR4tRuTm6yoMHVxn8DLBLWUBHTLZCh23BmKDkqoaLgGpZyVgAEM5KbdMjWuoLwc9gDjj",
  "key17": "4kXmg5dDFGv3nMZKaD9aGeC1o4U6Lc7VNfUHChhixKYiPgVoypWUoq1LRUc4Hn9ZkGB3G6SMnkm9xZa8YWipMWoG",
  "key18": "4c2zr5jhgXPL47g1mN851zXhS5RVuYHQgeMbciZHrkrDe4C8D4ofxk7fDFwsEjHBWF4ycmxzpeBVURW8AxJ9Las7",
  "key19": "3RuJhhtLiEEPfy7Js2pbP9YxZdqzyoBRkEKZ9W3gw1JHSHKJJBnoce1fgjTdfJnZGT4oveYLWD7gY9epAQrjoQ7m",
  "key20": "Cn9VQku8okpqaCRn67iVDVopovTtMpKJ8MfWoAGLpwjUrWrfQwM2nXXF6jPTRFE9fLa1udYQCTQs2FWH7XmCrxE",
  "key21": "124mPVvgfc1ZjRdf7mf49vKgnrJbZb8VozxpQU3rsv3LNTFUWMCBcqrFPj22yrSERVUFLeuEJawXGYRbgHv3g46K",
  "key22": "NFv6x1qfs1bZrr7WmcRV4e3Z4krB3qgZDzjjqZTP4aQvCEgzUrfYbhapQNut8PDrsBe7P1pJmV1DWPEmgLGaa55",
  "key23": "4eBJU3BT8NX9WQZHHtFMjk9wxcgXPLoepZihN4pxZAdqqnjmZtZmnz84v55AuNVPKMBPiVXFP8YYeGx3V2vhxfq1",
  "key24": "5xF4QwSh5KsMUBRfUiYFVr6Qo22rzCTcjPq9jsBT9MEZNx4qz5jDUSQeLmaEXoTbGeR1vcv89SRoceLVKccnrh1r",
  "key25": "2K8qYzer6XNCixQR83UzdmG9pDwYGSawoRSnYBdjBKZZ93gHsxkN9QwjkTvJy6ChU21ich3wB1opVBZGb1UFMaAC",
  "key26": "4kY3ACunT37BsoC4gZ2juJYdJEKshrrWK51NibAz4TwkAQHT7C4r3D7p1ES6qVQpNnN2bxSQ2kQtbssFkbuorEV9",
  "key27": "377GW5WBaDnaug7R3BwjxeaGm225CoxdyXDk7vbzXqpp2J6nuVgb8R2Zk6niwEGNege5GqDuLt9Uz6SLvAdn4Y3P",
  "key28": "5NZzTNZP5rwN13CwswGFWHG61MNB69JxzhvKdc2h6e8GFf24unuc4GFgDSATm4vrKuEteqskRvobocxzzpx163JM",
  "key29": "siqSgyqRWFzAqLvQytJZP2s9ikan4DCCkT1xw74w8s8XWiFN4xHq8Rov8fH26XKYwjYEvGzbmepHBSToDnPmM1A",
  "key30": "4KMCTy7MbkSrEwU4jwzE7oqegNfcwegYK5aFSiWXyXtZZ4gfzeYaLjBbnQkUsUJEZFQtHkuqugEmXRXvTtcNQ3HW",
  "key31": "2ztj5S6JWLB4U3HL41nRogLAbCBNzvh6UhZ3w8EiF8oGRLTapKqcxFR4w8tdNtRJFfSDtN5c2wBKkeMRe2sDM6SV",
  "key32": "3TztGRhqC2wTthbmVFuPRyyprQMEhrLsQ9rhVsbwK5o5yrFUA495xAthCch1L7bAiZM86UFF9aBXgGp6U4CUaoJW",
  "key33": "2N2YmGcFQF5vkguEL8UfeKsmRfiUHeWhNF5xu4WBV65Eu9KkUNoDiJVr4tkfx4WUjMkDDhpCLavn5U3NCAPsRfZo",
  "key34": "2q7NFghpQGSaSsU55Z5JyQQMeDWReSdrY9sUoGq6f2cvaH2cWrfxqwfnJrmfEUpJ8iX3EDdA9Xpigdwmw6JK6Bue",
  "key35": "2WsP6qMfGDDmBoasSdmigizjKA2iasQc15YBnhFQ1Q4C1FRaMZQfEN4gqdC1RP4hzozAiYin6VhSHDSWFj3x8y13",
  "key36": "n4FofywFyjKMfxkyaqCcZ6e5AqKa6PUkyrLgRyEhc7GoyHczvhb9fgRq1VUB4hEmQP3CCP5oQNVcma1exSJXqVq",
  "key37": "61A8Yx2WRrbfdahPMCtoCvbGK4DfWUiEwzz84yn9Tz8CixQP3rhwr7zJVwceHBg7qnTgDQjeRC1zS51gneUnMrHY",
  "key38": "54GEb8kTmvGoaEwCQShvUvsHjjP1Bu8VjtsBSoi7vvVi4s85rFwGQvCWZupS7utS3LUfG3pJZhWvPriHtVceFWwY",
  "key39": "HcWkJZPaZyoXHwJyXVMXJYtSpDUWVTXSMqeoVLGBFqosXjqXLpToNjqKsoRBGbuYRPeRruZmZ5NjmWUoFGaq2qM",
  "key40": "487MRSyAzcpvFvvAUgyVZVXizyffaAHcPLMmtQWkstJNKvgM996wvbSMGdDdFsETajuMyVEQFfHUVaMsfMMWh8Hw",
  "key41": "2DVk6C3Px51DrS8UuAZ6ZCWTRrgxHATUXmq2KTSEa4kwFgbL2W5B48vQf3aa4jmYqXDz4kouVDPLcJ9KS92KmTUA"
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
