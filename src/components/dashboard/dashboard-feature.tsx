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
    "3oTo8LPX2G89kFGCLS3MEoQb4qmaeyASPymgaqDUBW56wwFiNZbQzqGvhXvwbMnoky4q1RhEZvMtXXeuhBTeYudH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ty4Un2TLCqKYm7VFFRN1ct5tnY8TaZD4oXJ18NocZcLryECJNgaDk3mGs2uHJhRWbNgrko1i18nv5v6QDPmTpZN",
  "key1": "2EBuV3ns1eBvhPQXWQetGArBRznCUqrGeQi3sShHMoyrYYuUgcqcnCSP6UiFYitW5y6bvnboN3utLFrTixXk2wnB",
  "key2": "5nfCJ15uYb2nLrcQ3CKFPQ6yt4iyyafMMyqN8xTf4Hte9P38QiCJYPWmswwEo7nvax1Q9BZFNKeEbHGsk3LiRxpK",
  "key3": "5Nboyc8XdPBahp4ppnJPxtHL9Nit9RsJFYkiqpU6ddQuRjPMuLGmLcGive27X9qcJocPyvLMYHxDo5NzCrJMNgpJ",
  "key4": "5zcAfDJ7tWQVrNxBWBuniPiorsd7MADu7fAL5NGA7XfitMbMWx6yEQraATP8Xb2Vzon399QhqGgjQs5TqqgmfFdp",
  "key5": "mtxRxPrtLjh3MX2knujHpj9wJnR9mHFBwhLpHYPZHz62XkaUbG4HubZJ3MHPRQyfiUW7Fd3RNUBFA7A2zqzGVuJ",
  "key6": "36ZTzoRGcZEyJAvCNMJS3Enfp3Xnf5DordCNAxySS2UovzH7KArydUsfrPeEMAwJHfjQZwvNqHR7TgwEsK6KN8mQ",
  "key7": "4TiJNettMrqhkDLxfDiSi8PAcCWauCreXsADpCi86gLUshPD3ZcbZVDwLT5FC4g1UzchNb9HLjcskiCZSE2Puokf",
  "key8": "kKZZFroqHLTL7WaM8wB5cFaaBYR8MzdZVLifm5TsD6GExAbQp36F9hdPLGgYDHX25TNnLncA7vnhYYrBdoEJ78d",
  "key9": "1N1mGPj4gfbjaUgShBGWBbYHeGgfeysRUgTmW97sYowmLpC3CfxVSqQm1NF4ntecRT6ijT9pWQ2fYcegpDCh55Q",
  "key10": "2oQ75FwmU6QVs84hA8n4m9xLjhwXAMLJfpqu8ufJb7PL3NUENCGkwcNrXLjbDMVsh4cVHrKBoeD2PS95e9Q5XdXC",
  "key11": "2EiJ6JqrBzR4WjQ7nK2P8aWR4acmbD54L9JX15QqPm75ziwiAELQiGmCXcQTmu6mQZws9ZLmLTDGJdHXHSx4Mszz",
  "key12": "2PrmZSkYuc2iPVK3Xh2pQX7tMF1GEy88kBSL6bfUibgZZE8dmyVjxpUc9Q5izjkoh9bnYQa7PjrLnfCLuYAGS819",
  "key13": "4dbkbrxq2HYjNABvPTJKo1MgWHz1HTN4cHMHMnCLd2HyEisP6MQiC2ZXEc4xeBP7vvQ6VrSekxvgnRUj26hQ2WMn",
  "key14": "2A8Xjn2QTYB2zL7NkWShxYW6eSQRDaheZhYYrtT6Sph2L3xjvyVaURrPBKwrN4mtHeNHwyG7K8ByMoN3K5PJjgrh",
  "key15": "4Q5MZGVKxBFANRzjmvyLYTvHGQ8SYFHNK4Cvg9koAG26pzTLYqNSVsFxyEyZVnF4dJSdXEDKq6vmpKRnQGxcu5aE",
  "key16": "4vbUvXwz5AqwvoJ3PGjqt99VkEAp6HBpLDX9ZxpwSg97s43qkt786KpKwzmeNoVkmTMSfjTniordZ1uZhmZGXW9P",
  "key17": "56LH3y9ac7T5EmYQqxgW4J4LLcqSSo1xxWhc8YWqirBaK9qeHGiF7Sa2hL1RfcqJSSYXFV8mGGWE8QdZzAzfg2S1",
  "key18": "ooskkyM8CHQ7WJGMv961siei43Ra6Z3sbVDSFhhjdrZ46fpARfz8jagGhZP7ozGTjfedZMsG8UZ6psizPmGNVR5",
  "key19": "3dV3J7PZbPumd52RDPZXdjSRiymLWPgy457GMiMQ5uufFLkLCFn3Y6NJhVxrn4fvKLJWgyZiy59KFbeJ31tv4cSi",
  "key20": "3Uvj8q56j34mKZFARRVHPerXcH3zRAz5K4iYBDykhbMQejvw4LXQ7MfBACSzrMBLDyFcsEYHp4nAAHMCfpLeSyPZ",
  "key21": "2LQgBGaNZW7VCi6gbeYnnNjwY5ufWrd5afFKVnNsjxzHg1cewHLiNgfKzEaYVCnFTbCA4Nrhzttdn7TDfxjrC1xA",
  "key22": "2GHaTyvKkSmJuKsugccZceLBqv2uTuVDA2GdHpuKCEKdbAjWXHHQW6JiuTFbAeQmAaHZ1dUCK2dx4YZ88Czd2XGy",
  "key23": "4tSWEhsApDuyWuHmn3y9YZCYNz6eoYfwK6uuKPdkQjpY9bs95FDFw8kiW6DsoNqMYcTW3ifGmbmSuSGmWp4j4DVa",
  "key24": "2f5SghC6AQyA2u4xPzgQEnUAnxLWYp6kEogVWJ6ic1tkMy6a2ikXanxtxTzL6zi28P9Q5aVRJ6crhBXutHvgE8L7",
  "key25": "4x4Bctr2J83WevmQBU1yYG728hkBM8PKKb2ypKDrni1H68Takf7yfmHBkJXpqNZX2Ti286Mj16sUAqMesnAwuFWb",
  "key26": "u46LULwboyy98pJUzqwAh2B1QqVn7f97H46WgTBCUphL77yeJJWZmKKNJL4CoLYygUJPugFuve1pZ6avwjRcukD",
  "key27": "61AxKvKDoLARin9UhodwJoDEdX932U7K4AiRCPTQwxpCBpQNYT7TNHJWosMf3MYcX2n3UYzkh3owXihmzwmHmf45",
  "key28": "6sZkmhDz2C4t15tLoBL2rqMJ1JReGAWEqqCsuQaCxwReiSudPgkj31Qom4QGoN5wsw6MFh6wD3N6t7wmphZgron",
  "key29": "3CrimTua4f9pcNSyfgwLcpnhNT9ig5i36DYWr76ZZW6SnjJ5cbShoAKAnXfpkUKqgqPXPRBsYL2YH5d2wnD5r7RX",
  "key30": "57VVbNBbzCqwbsDRN3k6nD3AjaUxrcgLB3f3383DWFSCe2g7RtNYwWiNbk1Khp7Symvz9drJVoH6g1GdPQwoeN8m",
  "key31": "4t2BqbkUGcPJKxotBtw34zLuoRvjYktPCLkgMGURguLJYrSUoFmwRPjbpivcMkRAZA96wJu1HGGAave4zsyzSYoR",
  "key32": "5nS9r76aMv8cP7MLdMFBznaS8kzdB34FqWgdQoL75nbfDZXRQ4W22LuXmrC7E5QLR5UUjaiDEpR8dYYb2nj3rQsT",
  "key33": "4kCSA3z4FhGNtj6Yb9rBBwXQYGpjps4FSahAh3aM7XgNd5v6UZL5n1SAgs24b4ptU4pgtCuabhATAHAjJ1SgDesK",
  "key34": "NwwX5Qxs7GtM5T7zUhRVAe2iMYGp9yunECCEHYkTAqypt4ty1LVNGmYQm1aaZwuoB7UV5SsypuGPMPMHzo5WY9x",
  "key35": "2RychFPNNejro8oL4XTaKWqCyYeCWEqdG2BaDAMtCrfzBJf1S213GrtrTCJjchG2EuSPjoeFsKe6VpPgMcNoSzCu",
  "key36": "BdnKjqp3ofG2hE59jAprSyQuKcaeJy8svtoeEpBHdZKCRZ2bypBwr8xpWF8Km1QqgSD2hFCUD9kH142WquyX5yK",
  "key37": "WxmV8TvsUzJdWiV48dJqRC8aEa3r7trRupD1Jyq2uQe7orWYra5xCA5SGsykzomkGhwJtKwzdUjULd7JWHrCxea"
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
