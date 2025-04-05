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
    "4aePZ77bsnaWCirSvi8VA4Z21KADkUpaoHqAykgV5k1GupfeJewyB3nsqnZNPfoyWhg75MmEw3XPGwaUFN7DZ65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQAhKcDa7ZrdSL44ofrKDPVYzrvqbcT7RZP98tQLcyzTn3bjAt8LxFsUzDM2kFjjMUfcnU7yM9AynTXnDc9gPgh",
  "key1": "48qqeWYfFo5kCZcyDwZcEZikPkJPHaX8BE6hq4edj8HE1Mtc8b9ZUVFjZPWitNBHmPMjJssTtqN3nDrKssZfPwbq",
  "key2": "s5dB3ZrjTrtDShf3fWpGHBqDyBiWzFWqUMK7wrxjpUq5QKW8HLqL5CnKohshdXFWC7skX8fxq98dHQsGf2qA1xw",
  "key3": "17rX7aWuXiNENBso56FrtujnFZZmCTLAuHQ1F1uAKiVqFkJG9PtHFQ7xr32yqA4VNjpydy5ujYW4MoPC15szeJR",
  "key4": "2FGV4mDFKB47ckQuFh9msa5heuHz4e7Wcrhobvk9eHXtcqapvBDKyegn1fKNJiNqVMHHSmfbm9NrM7Jaxz5DioJC",
  "key5": "RzVvNx9STvHEKJpaNgZhPZ6zVmqv5kWyE1RVWtU1KasLFAmNVL6iRTtJz2LvnLEbuZF6PmVp5GGwvqRrsWxvyay",
  "key6": "3N95Ju5RT5ARMEdYs6NvEG8Yn8PAXbGAZvYE9WhMpYuyQxy8QHHpUG9xGfXZDMWvQGCAqLmAxkRnyhSeCdbSBdb9",
  "key7": "2y5S7SKvZrWeVCkoJ3JJGNVAYeg9U2pLTSyDopRvHQQsEjYL5SfbtxkLpJps1bpRzwpoKaG6qUNL3qwQz6DZkicV",
  "key8": "2JGG4fN2oCte7m13SHytGRbBGsJKpZoM1CMGxsBhDokap5kbjsbd6GYFy4A1yWRohtxv4edGTnaktLUy7cg1cNhb",
  "key9": "qKVb34D1adFQW7s8U75CMQ27iF6SaofHUbDNsiHsMdEhH5d2vucFLojEjHddkJYZCGUZ59Vv8qFLdxwaQr3jcqo",
  "key10": "5pDw4tbfHJGzdC1h45vgLYkGbBraTr2RfCo9fPzD2MeEACfvA7HjLcnX3sFzGNDBi389qKKtw3fqq3kAw8TvcJt4",
  "key11": "23uNcqrTSrrcCD4WyAzYKDQqF1rAzsroanCMP9Sq6UMhGaJtUyLJJejRKCEnzvrrEBeujRGg7CtuHjGbLHP7vY3v",
  "key12": "28tebLdS99wp9tXXo4rcGA8t7fakLUckhpHdYg6392qer9jKyTrCiiTZSK62nmXEb88ySLKdNWuxyCrjimQTw8mY",
  "key13": "4qqhWvd6C8hcCfFBQsPfJQEdfXXCZBqZgaf1JXzw8aFjg7iqsXWjJoZTCqK1gns9UudatowNSqtpiPCeGHFroUMs",
  "key14": "42Wnz19wwm2vS23smxe1abgdSZQu6EPLg5iwFG96KUaV5wm45gJuJbejsS9N9pcb2PZ1x3QHY2GzjDMxnuXh9WWF",
  "key15": "f4TDPkWXqQ3wkxM2wpCfCSXjzQ8rTrCcX6LLxaQykYJxgCYWzbHRSvo9TvDMyySRBMa1AMbWBXGpjbXPicRaugq",
  "key16": "4PYsEy6iYjgARourZL2mUYEc8SB6vEtFaTt65NBLk9tdamWPfM9fdCB4Rram3obUHNV6gqS8WwekopdEyuZYUwRq",
  "key17": "2QZzGgbWDhBs1rEVESiQhCr9MZesFnHsnEoDqEyxAEsXwFHcbTqdPrMQZMPWgR4WzxcNCNpLSnGM1K4hqUnTg5UW",
  "key18": "4jvoACGddbgb347gfERyUtWHAcudQ8XyxGbiGjgbwu9taexCbzSMR6GSWb2izr5H2NgyMuZYDQbxswiU1NDeATgt",
  "key19": "2C5YfjoKLcaN9TZLvhHaGM3cotcX7Jr6Yj9wcLXAvYpNLrks4yiJzASwhPTdp4XsBe29Ekk7NpqKjVF14PcRZ5C1",
  "key20": "gBxiMtr5Csc2jqASvbXEdwVWWdGnUnMwqEtZhbGavu2g7PL6HNs1XScSF3wmGSwcsy2rzjpATJLLjzkGXUb98Rj",
  "key21": "56FSdwxgyP15sf8fd5hHj67toMcxKV218sdQii6URfffzDcKEjaNPoVXp5zhGRTCXV4GbyEQqYW7FKRh2p7bs1Qk",
  "key22": "3cZiYeHTYf8GvqoEa6Bv3BrcnXNad9RkmueRiF6jDVohj83diwawR1EjpfYA24x6SWroywzLqttui9Ccw6nq9nXP",
  "key23": "csNsyTJzzY6fVNmpMjz6nUhmCz8BfR4w89j5PTHnCufp8MZo9tMGhjnaRWYixqBJav2RprgEbkD9AwYVxHcWypk",
  "key24": "38Uac4u19tYmKeCjr9SgUpaiNWArTfWZL8ZwZyY8jAkeC4vyHRP16iouNdFqbP2PbMb61VU3hw6xVT8rvp2cKgBm",
  "key25": "5FS4j77pbHnztQTtANHr5jRbGfwey13jX6Bhfcg2fpfngyTFhhN1kvrW61oKq5uMX5hhusZWY8a17Mt94SCuZCkN",
  "key26": "5y3YFs3upVcmgj4wyvaK8qB96FN6CtosGgrn8LpJomhbVi4eapRZy4ctcegafYGJncpythx4Bq896JMspQ9FcrWk",
  "key27": "44riq7dsi8LN4RVu4RLSnoJiNKCvr6vmp64ZpJSHwvCz1y5wu6K1BYAdan5A2EZssydJTnnVRvKTvB1Vge82Gudp",
  "key28": "3tGCSaZ2fxKGQ21Db21itU7mwEMZqstQ2dRVchDw6J8GScHHngMs1QcNMhHs4A55dQnwTL3QkxxREPFVWoocTg43"
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
