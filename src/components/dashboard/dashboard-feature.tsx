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
    "5bqP6TpjsDBSK6ZMsceAqYNNZRaesk8wQDfwNkdPqPQox2yHWcformdow75S1aW17xCjRQ98FT9Zig7DA9ctWCZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZXFDiWgqJqHM6uWAnfWQZ8n5Lnc9Ha5NAPUSLpze7nBWbR18z1L2anpNVGxLsRHnfAcEKZhjQwLkoqx8bQxiYU",
  "key1": "oaJvakfMjSXL3vKqyoknKftEiy9PoXY9ffH6iSAZzVTkXySXea9z7e4Q2KvZZ1e2cqqaRWp45VJcrfYqR7MTV2P",
  "key2": "43YpwLDhckNMJhGx1eLjef8ky1GH8js6nZ4HgmZ9racTiNCovfFbmrwa13ga5umXUX6M296wCzokE1h73QWWVT7h",
  "key3": "3KsNCdHchTfySaZRnp5Wm3pNmWi6fdizYdWq5Y9JYdBayUEnnQyCaK1DMwDku1gRfFjnJmgD8recCwcrXmws6bTF",
  "key4": "454A8vP9a7vRkd8tHCZKDf9VgUUitLdPcQs2bRFesH4uSVJqnW1yNC5x4YZ8YJ3vpGrBASDTva9FKVTmGuPfdi1A",
  "key5": "tduAt6CMXhoiQ2z9WaBx8YsJqhTbaxm8bk5qrSZ3LDrZRV8kZWoasNVg129brUMPGGjwZu78kDdKdQNUmefs99B",
  "key6": "3HD6BAYFWR9gUSdoKR71bb7RuQ97SuvQ4ShBwcuFJxNZJoVWjr3pvY6rzxLjbAVNC6aAbPsXarAdmuUiGwccZeRn",
  "key7": "3ArVfkrHC9tGGnpFvcEBZibWWPLXoqNceGjJiVLqFoVydqLsnocUaqNjVuwwQoC9r5c2tbvrZgJNwgzG78Fvs8Mg",
  "key8": "4gcLmsDU3WCRnHA6UaHpDAemNapCLSsWLcKf3QsNoL656eQUviS6Uu2PkBkECdoonT29JDRx6qr9hHSEHavkXMCM",
  "key9": "59SEww5KG3m1dmmPqwWYgd3yDqoaTTuV4pBwKhcN5RtjDGP9VShhqZWKXMNwY93jVP6SshZgN1B4HNGMow6o1kK4",
  "key10": "57M1B9nKN8di8mUWPC6GYWVZPdx4SLp1prS4PKVxrEEXNL8wbCQH6XrCF1aoBi8kTcM3am55dYHjwc4cLMw6vHEf",
  "key11": "F9H8RrmMP1fQJKHq5YNLGDWnZsKxXWa64HdGQubUJ1HBZndW1eiY2yTet28Q2U3MnpZXv49Pm6Np9a1nGMWvTiB",
  "key12": "2Xwwi2Ju2z6an8XfPAiN1epf613LtK9DFcygf1GEUWBQciQofy3oQ8Qx2vc2sAoKiUM3YpAgV7Xu4Lk5vereRUz1",
  "key13": "2ch6KgjmcinHXfU5tqj6FZwYdXopgBmeHeBAtQF1DWY2oWeDgL4DpV4MtzT8e1noPUqc9x7TcuaPxfA2cymaTxtr",
  "key14": "5MnQUwew7gAeaJDyf2XKeherto1ZJMGHATsiiB4LA87HouA59imRLywSS3Mw7A7PTNeUYx9UFnfE5QvxX1brmozX",
  "key15": "2UwhDTFLdWcDm4adoohc2qgK3FEgxgP4fK7UrPgwQCNFZX2F23KPC65cbAUbN5C3ALAVdaeUttSGX6CHWexATLoA",
  "key16": "oSNx7EByPQCdGUaLhN6A4H2aS6GE9WYznNbdEZssvZUyooNgJ9KCJKG8LsCCA3wKosJAtcPmxwCWzBvyvDZXTDH",
  "key17": "2ziXPYQgDhRDdcEGLVbRu1hMnowzxM5MUuiABaw6SAN2Q3B9jHM1vdXw851hbvepKXiGJFBwosdVyfbazByA24gt",
  "key18": "5QueiJw71qVUZvCkR57LYQHRa4UXgL3FhdfKVahHRSzcsxSAN5hEijmeyyg3ZkpezR11xVcUzBh78MnDuRmpHUmE",
  "key19": "5RzZitN1MoHDDCiycJ1maRghyQm1c6DWp7Q4MYuSDhwJjKUCz79REHrbfZQ9hLs3AAdfdwjm4jtdV9rdURiH7yCt",
  "key20": "4kTyQ8hxpTFpGQMWVNgKm4ttUKNc9Ah1CYtc6bG8r37Q3Xzb54etyY2m1T2JTcVWNsdvyXgRBn2Uj1CnDRZ4MBao",
  "key21": "5L3iiBHABx1AL9BfYxtrR2aUs6SZQuDL3dVXWAE91swUMWX4WViEzuuLMdybFLVygjW3vjVMsUhGYkPBxKfHFY3c",
  "key22": "4s7Rg11Sh4trqwfR543UiMpAWAZY6Mx9optJ3EeqSiiUvLZ1w1D4mZKy956ddn7Vo2VUQBWu8CUMhSPFXkwTY2aV",
  "key23": "5Rgs9KwBiTQUgDV2VFweYitYwj7b67oeUmkzP2EdMRjm9k2hskkyV3MEYMjMUCKQx5kpjG22YTFM1eDKCVbp31qZ",
  "key24": "3abfq2df6YhPgHCUQsPciv8dhZBZ1fDpbgXZyHHWFxe5p1d7KnWoZbswPjgJivytrtdVJC6yjCbVidHrVsUY3rLe",
  "key25": "XjUaCHjL4jUprM9V8Mt3EuwQK3EA7arWXsGCN2kjb5KvrmSDYFdPTksDDGgtxrCDbVcogRR6BmChGLpcbGS4qJD",
  "key26": "3SLMReaEv6SFJojUiMJ7RggL536SmW642EumPDvRF9JkoPB3nGUo9VZNEGwq53JVJwrNkk7AZZe4aTR1hy5FZxSd"
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
