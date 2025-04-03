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
    "3ZKsTFGfEx6YdmwamkbHhERns294DCwHmPS3vkw8RkrxoMZBLi8Hzk3B7By1GpPoCx7E3se6dEJswTUrHKq3Y1Uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UDfgbr1NvHPBSom5mVi72jgjHdUPaUwref4Lu2vizBnBYEAJeZsveSnxVNBcAie1q2JhHrmTdB9XU6m5iDqpEsC",
  "key1": "44pSJHrCXabrtP98qxTkZygVMEkPUK2Gw6rXRfSzUBxDLVbgLKZZvUqCJZkxKT8UUfVd92JXYEyMtdCnU9pBbwyo",
  "key2": "sS7ak6mDeuHufCRRiTdGe1K2o7kP9JtVtkyGYzp1Ta3RJhYMaPpKbhS5g2fqD8YqQM1nUkt8aUiNmwBELRZTXdx",
  "key3": "4mZnpbP8xNQEKg46EFg4CUwXQ4FrXQf97tW6YyRST2ggmAuSZQYi3jgxqzzrsD7AwBLnLbSatkd3x3My8xfEFxHc",
  "key4": "4dGW2PGHkbpDJ1Tf8jqmw1AD8zU2LGgcDCTdJDdsFy1SmfPdFjgq6m8JiH7ctzfEuqQLoajP76bXxn8v6yLaRxZ5",
  "key5": "3o4jxPCjbkDJdCFpJmCCzZMQQhYnzWNvMkjkDWnQxjX66qXCwgUvnB2LSMLL6Xio3fcsDGWWP7JkHhkGZQqyES1h",
  "key6": "3Pk1i6z4FrdLdVo8w6s39rz9xU3z45HNWLVWNQhhZW5ZfYfTcf1VVjMqzVjQ87suXXyGryXy1ve5LSWa7q4wnK1z",
  "key7": "33wy8KZ8XofQUtTazefZkMELWSbAGjtpCtL9epvQV4KVzoQsfH8M94fkNF9j3CEDzX6UiKh2ghSUMKZ4ntR7AYXb",
  "key8": "2vyArD3vECsyiy66DPRUqvA8UVj7hGcdYLLnBCN7vbmMcGQGvdpkzkLdfq4GvTtQw4G8DbiuhUNoM7uSTh91fAYu",
  "key9": "xTTPoqhd47ySfFNndk9bAQwZzxmYjmntxymkmKydmVFmnXvRFKtqM7gpdDWTFviBVdGme7241eKWm21M4rhQF89",
  "key10": "4t4B6B6BKZUwEsZa8QdVoHuA8SYkGnNFY4sdXP1Bz8SZR9XjVPoz5g8x95QCdGNx8DTgFH16fZzbaSSampueySBD",
  "key11": "JCThdvq9iRi8mpG3qVAsbqi11SWcDrRdwoW17wFoVixFAJC8P9VGL3ZskL4Uforf6obWm1JgQo2rpMQVoHPpj8K",
  "key12": "oDjMUyo3mn9unjsL9fT9PGE2dCT4kxmTvFwJv4M6cfqqst3GHPvQS7wAq2i8bv1uN8u4ATCaTH48Lpdq32mbS4P",
  "key13": "2YxYKpqEPGdRmyXLkNmyWa315iG81KHtkNaz7T66KcHxmcU2V3mxrRxNYo4aQzqhfVUAgH8MqTZV2CyqmQWV84nW",
  "key14": "2h3fcvn6hEtauCPrSKnp7Wbcn9sKSt6tUozf9YYJ2SN3gVm4HPJmkEFD6o65ps2w28zs3rFwkfTFbJQtd9EV32yW",
  "key15": "3h3jHJFTcCk4WKtebgF5rucqK24BcowmKcyBsNMxNRMtdc87CmQhsSsEQnv3286UkWjpt2sx3Bqyf7GgZaAFejYz",
  "key16": "nPQEJ1Hoir6bB7TRwKoEsK8fiHwTHDpMHxMAsMVfXE3nKDtsoSpEVh869uu8krPior3z9FNKJ84iMDMYFR3ufoD",
  "key17": "tp9Sk6uuvobc4HscCg8DbAu5E6a6NBvZjuD2etjgVL5onB2vFBo511PiAFRmkcGcL4u36tWQNANKdkBPoHrxpnm",
  "key18": "ygJutkALnpfdgfK2cFXzUMhj3tA9J9etrA7Z3txH2eB3ZdTgH9gsvymzaDyJz5BW62Aaz25DyCNDvvQ6uNSxyDR",
  "key19": "5x3T9TUUXQPXL2AQy9XNTkeCBZtJx5Uvaq7K1Vro6CAYAFXvSopHtmZnBzdGiH8CXWyDFgUkY1Jq78MsDXzn2TVY",
  "key20": "3j22RsUbq8aLwess43MXV6QmhUvJxCTSrJS5FV9vLvvJpP7q8HVKAcY6TnetZBpdV2nqTmexB5AuMrHKTPs11vV",
  "key21": "4TDN17PcKhcsJuMvom5sTzhosbK2cH8kgXdiAidbwVXbeXdKvXwrnLRrrC74JnoZNnyDs76kMu9tj3h87nfUQ2sp",
  "key22": "5VTQypkvmWcXjEymctPzRuMpHSjeG3T8Wmh1B5bXKo5GcgPVVmX24MRUtoJMXrCo4VF6mzdhtGQ9jz2QzKdCbgKH",
  "key23": "2XB8T86yxjS5qzAEmvePdJ8eSnsdF88rn3RKE56KggYaX6WHEhBVLH7drdoGyMC9iK2myshNarJfbvjDwpveNNqm",
  "key24": "4ppXmCkd5pnCq3p9jzBiGVnYG9kkcLy69dEFsm2S8UEpAXjp6SZA9xKvvu9qTntTsZk9jfCvsyLSGZy1F4jJedyR",
  "key25": "5q3dKRoJ1YVoaWbAWjx97zBKkG54AVAkgr8ptQjeUjJjoomcAjoBTcwx4bwrwxNJ9JhhP1fkwH2sJrpUUCgv6NVG",
  "key26": "qjVbVai2L5kk6vyDE1PHYXrVwcswHDSUtZctkprfGjAvDS5rEGXsfLzi7nq8AgsNL5bki59WjXGVqWaWsbCv8jU",
  "key27": "DUAocWcrAtCVX7jiUHDWGYVF9gu874Di1DG45aMraFXj2E8AADLnGBAhwPgagjuQdcV5HTYQLvHxzh88uw3ZHpE",
  "key28": "iye2VAZj5wZqcks2LvAUREqZh7HdkrSstdQtN5AGCH4x3NrjNHYUozK6H6aa4FMYMMtsNSdbKwE3TjANQ8A8vCY",
  "key29": "2QxYBo76upPpTSg9jTNWGXGMJvP9dheF6xf2e2kyiBRWEfdN5R9xxJbbX7KNy83e5LtJUZfsRZQDZ92iMiyWhPQg",
  "key30": "4cPDSYKsCzNzZXBsFpkNNfSif93Yw7HPQLaJtrjiKg6iqzTARXKb56NHRahVDeMwfpNunQTvfFkkqUHY9LepD4UE",
  "key31": "CstKiamRji8aVJ6K8GwHuFxpFR3uknr9pXQm9cDdKKhnP31mrjthUhDiQVtE4vZBoJaokd6NVpZU9KLeHZyn89J"
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
