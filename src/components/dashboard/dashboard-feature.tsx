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
    "MJQ4NEmFoU47vLyyoKAn3LCiTq9LkWXyYDfmgR8NQvcnJK1CDCXogDT2odUv5UDG9RDpadnKWxdh6xguurryB5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kxsMuJ36HyACLVGeyz5sHbdqV5mL3ER76tKjMXQew9aiTiYyLgugzf5waeqMfLHdNDGSEbwRjV9mQHUsdDEZhWL",
  "key1": "2cxAg6MMbs4nQomAE9puyTrdC4LzEhqWw27eCMkoxZfdnZMCSqUrR754xMjNJeZUftT5WjRc6KsNtd9CWsPsBeoU",
  "key2": "42Y1n5te6UGYPBt393cUmJS7bVurUe94g7bzfbtjEoA5zUzaCmRrEnv76HGNUosrZzYZ1yeSseWVK2sw3ifAUoDF",
  "key3": "3HGAJPbSHUdBrs62H6h3qfrJiBtoetaTn7u19BTjASWHv5ASNgw4Z5JGRKxxp8XqZXeLzeJt9RpnpbWeJF1DEAUE",
  "key4": "4BACYZWKSmBex2yi4aAKMijeNrb85BhwDjYgq64vgSxFCrmPRUKdEecmgm5Bu9kVd6zm5PnTegKEPd5m5XgWJ1qK",
  "key5": "XneJviv63FBNbeWXEh3DctHuXbznVUkQtQ9HDDksK4uJSG7uAHsMq9WF8C9GHyWo2R3M7RiQLKTrDAvEjnNCufJ",
  "key6": "23bsat7kfB7yprKturVs9dBfx3J78UdGdvNp4bUgGgLkj562scMPRz35UEV94UjBJehiEVxrKZGo6XqXuwwXvdqK",
  "key7": "5LMfuaqaAese6epUATY9vYpck3mkz9LDeKit9pYVZ8x2T1hdE7S2jdbGdr34KSPzh54JM8REwxgwLuAkWCPd2sMb",
  "key8": "8dYEE4ubCz7zgcs7dSSFgGu7mL37yuABHd9CyvBmo6b6KE68Bk2fXQtS8AMQdFP679PmHDFjp9RQTERuqhX7RPR",
  "key9": "25BnkGDPGc92QqXBQvDYryyy1fT7T656hg5pzeNm1UAw2xaNeeGER6DMfRUz1bqumCn2aMkobNBtJDk15rBAeNfn",
  "key10": "3NqtvhwvtkiVodLBq4VwELtGLZ91gnjgTd1EgzAPVgtB5qE7pj3rdqxBrhdkWAw185hkD73oV5PnmZYHRrQxkLNC",
  "key11": "4SghwTf3vJvroKTUGDGRrH83yVan3aRCkfRrs6D6C3SahzwSveNu4GqUH1fipq3CyUdUbiA2S2DyvDynGp2Y2QiS",
  "key12": "5Kd52S6kVAtYonKKqmzzoi1P2q7gxnRGKK3LPTkVoybToE9vr2upfysyKc1KKNKxdEwKPcadwyEHvvPXDU1pp4dv",
  "key13": "5ea8idAEYU5N2hxQNAMuFxkMGm3KtmqhnFmR4we7u2kaY8cnyVVett9Bn62uaQFPa1hDbBxZNW3RBr73AQ3jnmWU",
  "key14": "2CKa61myECWD2PD5k8Soi29TfmCexzR8aMqXxeUPd65aBzaUGssDxyGN4khs9G2eWVBET5yNkLHhiygY6wQ48A8C",
  "key15": "3B8WhKRaVRrPFNi4w4rkC43ccVyo5SLcgE8vFX3CpxLn7YKYMAXMBJjLFeMzGZTkv5xrw82c7tE4vfgg4NsmyYNN",
  "key16": "3hohHA7otfeifLz6hTZb5zKs4MGN7vTHzv4wzwVfLDihwmSirFA8vyxti5bWAkg2upmciwgCeR1x9gCxzg3Hgfrg",
  "key17": "PA6v4zeUTiAXc7hGdYWADbK4LyXdiG1Y9yF2TJMSizqU1toEY6cqCn5dHajxtFJggpry9nXudT3MVwg9KG8NWBt",
  "key18": "ah7sQ7QEsdWSzPvDmYDAc7EhYaS4C7SgD3vargN3vGdVqF6ZZpAuBP9o9dKXd8kBg6TDHuM7FZf7UrVKbusovyQ",
  "key19": "3dwzMkjF5MujkX2m4saGUihUcKsaShqV7EAcjKP6UZpGhavu1F1gfyjqPxDmwfaKW5mxgsvknBdDwy6583Y5Lia1",
  "key20": "4DsnhFk45hSxtPDoXZzVdoh3chpL4SJ4hHozAGuovcaX4zh9LKXxKW26qWgZaEYt3jUTQY1DLRZBo2GRaipKawpN",
  "key21": "4KysN994Eqe78T8HvGcTJrLoCTQxUGiiBjAX6gHjP6sxVW8FU8sXMPSpZRsazQ9gssqmVRPJPGHnKLJ5mQcQ32Zw",
  "key22": "3Y1MeSo4XUacjJySgYf69F3WLfFuYMa5oGmTscown5mSz5A4kMue177SU9qwjdZh69PuS6QeAR8idY2zszB3S9ND",
  "key23": "3WrqoHqjHg7r4CTD4q5DKaRsii8F7XXPDGcyrFXPpWdbvjLDEG2w8fLJYVhAWS9m44mmTa1VUxXo2okastsxnYex",
  "key24": "3nW9B8K8PyzXeX1NemkaZNkKb8viPUxtPFP9NpGCTYg98sHQyUHRY7uKpg3iGLshozeCDvJRu5nieJxSTfYKpgo5",
  "key25": "3BNZRi3rnCJ6BeX4KSQDAm7CdbzCL1zJtTmCueunHmUr6CSAF1jDZF1phSoVPfhhCXWoDsQ89kHay2JxndWyXbxj",
  "key26": "5H7eLnA85Jf3Nd24VYmf9uRxQxi6m2xpphzhGHLPrq7ZSeNwxhhojqEtQ72QBe7UMmtHdVsTDmuHt12AePvGgwNy",
  "key27": "xCcNc7go8g5cnugHNNoa7KUKK3ad2dir9VgP65imNtbJprjCudcByefpsvALmLkjyiWJom2dDk8FofHF3oX1HEv",
  "key28": "4g5o1KjZDPA4btEjRZXiB2E2fnQuiXGt8iKNfsWoZmAL7JjU2q9HGXRdMKXBCFUKAMCPvkURQ3CcvQ7xSun4zmuk"
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
