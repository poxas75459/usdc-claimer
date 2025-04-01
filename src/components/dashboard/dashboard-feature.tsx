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
    "5EGx3dbeuNvebQD7HKyTwFvzXikiQmALUFaYuR6PsHnKAKUEMzE1irBpTwSnW4pKYtFTegyCcjRzrhL8sVYAeidC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7JAMG1APwXAP6iHZj7FkgdGnJ9hp83g1yFD6gzUfgsF5R2PX4qeA7cF26pAY9WpegNuC3sH9xuSmJALJ2DXBNCB",
  "key1": "3HDo1Z27tTsLHUZ4eb5hcEuWLjkHJnMjU3eFb9BcNVk4UjwvNASpyFzRHK1AQzLsJs4tCfZmoKHE3mDAJN9cix8Z",
  "key2": "3gQ5sCbQ9nqqGBJkbfr2brvhKAuQBEF1ZrJynFTkeC8gPCsXATXngpmsF1KE5uM9HXTuzVX4uQbw4L7iRVwxyxR4",
  "key3": "3yXjCpdzVBgPaM4yGP4T6ENzAnQXXp5pdsBLzq93DpbH1SzkjsumXytWuFKuQDPW7sP8fYJ5435Ko2vjZ7iC7U2",
  "key4": "5Ccp3W5TB1W8NVyKNp6FfwWJD9zDdTBaR9XqEgN9Tk3Q8GsrBV7G4pTpEzht4j4MEcwZpdM8tpoed6SaLepgDFcM",
  "key5": "UFbjdVFoUWamWUCwoCNkQxGFe3Vqk3yKeHkyGk9PGxGK56SNfbx4Wfcwqq9qUjKVRTyGRmF84e4JUJSyoLZHaj3",
  "key6": "2dP8XnR86L2SidxWPmF8x151bBRxkzWdHHo2PjSH9eimWA9yWFYfKtCG3krNDyAv74Lkn7myXeR2Rgc8sJURz76e",
  "key7": "4BxSPojkxzwuL5SngvjyvNgvR3kSGCG4QWe4vwNcsUPFRo6ELpTGyZEo6Uw8w6yBytf21QoTQubm2GpEnckRkX3w",
  "key8": "3dcQdgaZi29P6C4pQbN6FKBu92PbGQz474WUBzX9M7TSd4nZb1CxM74VKuLFtir1SAw2mBsQ3zWR7wLWafSujLYe",
  "key9": "jaJ8ZF7YsQk2hWfdH2XWgD8yVhoZGm75BZbkp3D5putud3Px2ngRbRsoFboH4WqRVLGg2FHZa9Bw643eN4aFtDR",
  "key10": "3ixz8Yfbb6kPyqe1ZDcmMxvDn2mKetzgPcEe7CrV9fCwof4UVEgjkgo5xkCyjqFVX7qesaznazDswtJAoUDy5vin",
  "key11": "CzpemiB1N7sSRcEfRNW8e2zsxBKqjwPxoKTYceGSwLv587MMgdpj6Wbgoy59UtiY8NzcH5QwXSF9CSTPDiBc6or",
  "key12": "a1em6CaHCZzt2B4RnStHry5acQidB72ydKq528jEiMnehEotckV8UDsJpGvc6DfKrb4GriamNs5MUr5KFJFB2z1",
  "key13": "ogqisNMCma4QiR15JdeVndENr8JfCSRSja4QbeLbfYeNJ5toPTWzAkCWAQP3hyYJg7zan2WebYDkg6ULyfXQw1H",
  "key14": "55sRmx6M7m35josrqZFECiqEBgS5x6R2X3NgZ8c6cawrYZZWja8qHnRiT2S1HcHy9sgpy51Jc8ap7fbq8bvcyDhA",
  "key15": "42vjGSkhwTGoxPDWEutUAqowFJ4Fm8DxE8GYAR69tt8AgBVE4xQvNVafgimD14Cwf3NtXsTPLSLURuwXC8PtRyr1",
  "key16": "3qcXHSeJt3WqyacTTEZ3kC6cmLiNtPKJEZFRXkduXSjtubmR5QJr8j8u4qGTC5XScKtthWqWfgejEYsdEncRieHE",
  "key17": "53Q6bVJD7a2gp6JMpDyBrgPRVku4g6rWS1UHRQYQabUycQqw1ZTuZvXz7tDv4zWQSnUyNCfGJtMCMXiLRmXy3Xvp",
  "key18": "5TaXp3MaMjgE2BbkpCu6Mk15X5XLDv7KHce8q1iaqayNyjLMyCZVy71HCypF1WJJxEEVJzfUVE9t1szCSDR8pA2n",
  "key19": "5M2V4ivqaehtET1k9UKaaZ8DWVuAoKPDUUd793YXujAzFPxPszzdZbWaPijZQTRaPtQxdKwF96iQiYAJ3WX522V",
  "key20": "5KaWSWddkpmucXnPUWGQX4wsRRV4oVAYgMy61qzmzNLx3pWBBksWfHkgY72SzyA1HYGheVPUbs1J8rWhscwjXk5n",
  "key21": "24fR1Ud6Dw7jXqToLkMdFmVN3KuRt92A6eRbQ9bRY4qjivsY99xn7CpjDpMcxkSYNDP84hSo55oVQ8yowvLA9vuA",
  "key22": "5bKArS1tEUHCj9dQdhpUKb1fcTyeFH1Jg5snHBnJm23Xy92rQTKsXjWR5PhKVqNndiRJHUdpBw54V25mYwAFaApL",
  "key23": "4JBp4SCpJqLd4kvA3oCvQyoo46PPbyoT9DKeQKDN5CNhCsSD76TA479ToWX51CbujHdPD1nMXM2fyxBVVHYNZkzb",
  "key24": "3bctgAydzcqpqiJs3hF5QXcizXM8WwGGY3X8g3iru4g2uE6QMRPEptkenRNU9XgyADDqNaDda9CiLzAErZtMfSS2",
  "key25": "43LagxvEwJdsjxRBM1yPFRpDmCM8VjdQH7ZzFijbAJuLbXkvaH4rRvYrceU2jhVinr89g4SqmmRFqTBYjpHGA6Lo",
  "key26": "2zQtjFFbZ2BsfuQaYAtFTazxDt6qgNPuuN2mWjUSWHTxgSinUVwJE6Y2yYMNSvJtpyHPQs5XbUnNmRvAhKuozNFb",
  "key27": "5bYdvqxd3MdZ8HuJczXMKx81cKbdyPvud8tHRSNLtMnxohZxazJq1hakiW3Gj2KGj1gVqmhjnoTzDuaXmXzvV5y5",
  "key28": "GZtGbzsdFZHEJ9K4HCZqYhTEaVPc9LVDXSjxEDD95W5EEwZeiouaiatnqaFKSWohTgoH6cDn6GVyWEXVepGvh2H",
  "key29": "67HQdDc18Q18zNpY6kFM4Tfv2ZmT9vVwearjNE4AafACoxpAMTPaLqTR1SA6e59gHW3bDiP5p2L1Nt4wSfrdwLME",
  "key30": "3hs1fD58Ji7HchUSVSv5z7ieVKZ9yjKtmQJnnyiWfujv5aVgMmSbe4vFTm1QYmRdzLScsWx5fLj31bb9ar8ozLyC",
  "key31": "4kxciESv17yUwsNDdGPrSHfgV6NaiC2PtBfDzMQoTY2z246g6bL7vFu8d9Zku5s8u8ddWKBqs1ZC45cLQo3A9ZPa",
  "key32": "EMGQWzbTeTT2SyumjgaM5CDBe5sr9uKfpCxsD9bXYJCp9adyLUjHpJiJetssbtDLaq8T8PK8kYidY3UsrEZ222f",
  "key33": "5xaGy9edGCwbGLoTeAo4n4C8X5SwtXup5HTJoYcPQL147Nt8HFLUsmKoKnskqF6XLYtaZ6GCx9s4keDQ9cbagKwd",
  "key34": "4mj3AUmEprXtPk5crPKWnHV1nVRm1L9dg22ZHmUi7yM6scqrDEURWwxEzMJ2hVxwY2J5CTs9TEwJ3j4T6Z21GD1a",
  "key35": "4C3nzKJ8khcBTzUMhcSQfyFmDMfJGwrJcka1T2L5MVVHy14iKU5u3sLFtGwSuNwbhU1TJbY1YjUwk7xBGf5Qk6zA",
  "key36": "4AJq7BexvDWCmNJtshba7e5DtCa3XHE8WYKzUZsBgJwE2gQD3G61UfierMNoaaFM6qGkNYjnPotePvihBrTS4e24",
  "key37": "DK9LPE95N2p8TcUV67TM2wimUJ7MxFu4Uu1NmUBJr6qzAfmPEWTrj9eHoNhXw2zniB72XY3ANaRrCmmrCBGgCkx",
  "key38": "3i6nFHm9FH7SgV8eEMZe59tq3mZMf5rkqdnyprPY82hbwGRFYzvtcDrAi5rZS44BiXuZzk4y9WEUgMwvUMRDfqXW",
  "key39": "48uzoXB341D2HndijNgQd7GwqEC8Eob4EAGwFDGvUjqFTcqK1ui2tgdhtV4gAiEyaYdVz8fC9FWrqnLZUYoa14xM",
  "key40": "3LTGQfBBgCSxjmTuhEC6sfk9TBaNc4E4iNgCWgvBvrZj2MpLg3gCxRRDrxNGQ9FmJ2sTn7ePH9QVqDotv1dssMAG",
  "key41": "56Gx3pGnWRjTboCk9pLY9uy3tgULMrNanLBZzcDNaX7fgxsy5MtR8TExNG5JZ3zZ42TudyAh84Toyy8yKrJ5A1vK",
  "key42": "2KQhDWef6BVnSvyrtsB8hrA3yWL3XRqkjNZwaCWTC49WXiDgSFc21H3wrxSAnArp4mqnQxGii8zUzozbnnPk84F9",
  "key43": "2rwvJ8WMD97zWjTh6eQrxmJC2NLkXBTpXN7WLW1rNPAdSuZGZy6wxZ86kPmFbQ2PHbjnn8d8Q6vtc5kbcUYJdE8C",
  "key44": "4FdTupd4PMm5Gw13WF342iCvKp7QsFix51vKttA7eS799ELzgThSWALe2FWZgSPUa1BZzxFNqz93QVwX3eEt5d9T",
  "key45": "uC7u53xA7F5WTZiJ8U9GgN6puHAGzeHXm9HFHiv8wnYXPYQ6NSe3f5ZpBCpqp7YP7GS3hg1pLw7bZfRCmUxpFX9"
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
