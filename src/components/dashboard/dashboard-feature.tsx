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
    "29RJxbA6XYdEhw77jD3sYah6MRQnxMXjHpVatBgpvjM9XdmUYxgNdqR3CTMTc5DXA8kNyE1fr48bzML7Q2c8DTDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5XkX5ahUgmLBwY5xZYkVMPUATxtdbyiNpY4xARko5MaUUh4autVKR4w9ypfRQGURezixGXoEtk6YuxVWk9q6gh",
  "key1": "4Uxw8SnbMRcQkS2VsmY6cwqshYCTnEpfDWNeyfs8NF6wYiaY8Kbr1Q6LkcNfTDW9S685DDy7B4BsiiBDJMh9bB54",
  "key2": "QNTZZLePvn36vSk5Qs31VXpsrTx4MdWgAfwMfUEJtav2S4q6A4xakmshC7HV5Qd5m6aaSBiF4Ke9Sknkd4yhECS",
  "key3": "3Y6Tv5oFC1PAKaWLtgvSMi9TLHmuPNnkm5xPmKWaRD9myhSisjfrMN4xZZKnSsGg6QmdUYqnT1vWo4yriRYMWgwK",
  "key4": "3R6r129LMEaPE5xUNEYF7D9U6xmBnXJeeA75iTN58wddJ21UF6FXgpo9fWUunXtazM8BFV5BW5Xh1g2GPTTXQbfE",
  "key5": "23mvPdGoDHYKrZAAvtjbZwuJo3NTezEvQnzbvSKKqPjwaJVRkqDXLfQAXUHZT6P3HRzCCYpWuEDhrbdP47KN3abn",
  "key6": "LLLbd9phaegXmnoFm5K9m3YHHMufvMrDEKr43gqVtqNZvyUbcFb8kGqkJZUg2buo2EQ6syJnLaaCbbuXHHntvdm",
  "key7": "5uQxNViW9LMhaqGLS1gg828pNiic6Cp8h8fCBkutnPXGqKASobWxqsDxzDaff67ozwkSn42UjszGHmSHZpFVDDnN",
  "key8": "2xj2CSvzgmQUetm46dw5qrHSiFgT5gNM9faYzRWkNMUSEV3wcTRUwwLX76iR93eaj9AYNVxgmLdawx1FxBaDwwfT",
  "key9": "2sbahvX78dh52V2ZaQ1VPU7YNJ7eADgFs6FBSTzvP5Y9P3nThcBHH5q7dL2s6W7qU9SKWLj5yNXKW6sZuDPL4sgV",
  "key10": "2XF82FiSgSJdxmjv5hxcyv4SZFAFhsM56porg3QK5xbqZ2B7yDNSCwvHscXj4yKQ9qTs2ri5Vo7BFxXPX7HpFnGe",
  "key11": "5MUCPzx4Cy9DU5zqzbgm3bAZnL1EoLGueQPtvphWCrwxreSg9FEC1qj8qPNmAp8i5ACb57HdsyzQv97MFyaDmobi",
  "key12": "5qfj1DwdXV26G7VsRWfanyKM8TSAHsicyd91ujvoqHmE7WiV9buqx2PyTkU18BkPznU16EsL6D7qhrDs67JDoWkS",
  "key13": "2t7nQtg5K6piaQaosNv2FeKRGpw87ST3Xg6wbxqzgcb9GNX1Aw8jigTdfMcE7fypPP9jADxn9z6DkYTDhfS2zpnQ",
  "key14": "2x9wXmXpfVGoofkssT7nTK7ogQK8p7S92R2X3kyq8DPffMj8fAfUq7EqiwfQ71QWCJX2PixvpRH2uQQAUUtuTpuQ",
  "key15": "45jyD8XSM3JYrdp8sUxMhzuwLPZ9pCCiQqUutKdew2tg9jHEfPhuTXYs7u8op7GM4bQ4F2WHyrWXfEhixtMGeMMz",
  "key16": "3JYJf345QqgWHJ6vARhYJS8GPySk2tRGfBeuC3aD9dtPa2TQjxZvVNBksePv9unYSyySu5tSBhqU2jfkFBWGnrxG",
  "key17": "JepytHxz7nATx9zWhN1pb3b2aMqqd3e4fcb7Kiuk4KuGrBG5fGDt3J6Ro6hZWUp8a6JqM6ASVSkRhrapFUM6oMC",
  "key18": "3aYTacyNRJae14g6czgsZUQd2i2jE5xbuLDURjrUHQy3g8FARYU9KemAcLaKVtQ6b6twzTvX4ksFB3EB71mHMEyN",
  "key19": "fmtPRrq7MRNT1AFdkqLyHaVgEKEiwTb4ygG8pb9ZdVV77xAUaJCLwYSYB1erg4KGcreKR2XbsDd4wPECuv4bDto",
  "key20": "5tRvKKZtMSVAAS39CxtgbxSGiWitQ4KA6DaUu3TKq4WroW9GXH3TyT3JnZfWDMigPxDQDXFyH9YBgZN2BNAqmANp",
  "key21": "M7KxBeqKJjtQQuu7tzNjCT6snkrVFW4Pf5W6LvDpBLMywsqqahVRvfwqm3z8oy8ya69yPShgvpRqdLY8Vt9e4of",
  "key22": "gx8WfR7pVZZRanZe76qwhJwPKzsv9vr6qoibRNG2cQ1oQ2VWwBNPzUnMokMqpC95c8prjCXx3vgmAVNgHMCRPGP",
  "key23": "2VX1DUbGsYf5xpyGdewYrNRAXP2X9dTG5B3Pa3hWcFNareRx7DXY9ngVkwc9mzuYTToessAMg6tGUrrpijNCfeSP",
  "key24": "4F2NqN8Ee4vqNbnMDpF8nMdMJhGUVgxtvE8mhTaR3VP7ZcpQbKxVT4ngmTk21sc41u5T1bLQ3FjUeqfpwbsgaaDc",
  "key25": "4pM8gDV4oi5EYa2pFNdwacxZHGoV5M6GepjfaH69Hk7UP6KuyhXwVBjsgxeskknniPkzg1gPWuLDpmu3GUHgcDD3",
  "key26": "4sL1sbXXXPkBqYSEEkRPDXc1G5JguhE2CxZg4maeJN4tDyb3YAd83oMfQHjCRLGM7eKdoYaqaPBVYfo67ygssea7",
  "key27": "3VQu9wQUD4Wb9Uti4bteib42XPKTNXidapSGpFqWGhBvWQJts3Z6A8F4ADjy7MzzFPiKhqtE2rMMDeRgQj2fTzHn",
  "key28": "5z1Wq74h9SeaYRpMcRJMGW7wL8T56j6VDg93YevksqxoggpPXJNVFeRjrhsqEECmtPJKSdjEMR3hUdCXa1scpAjM",
  "key29": "5fiaGZgs5yfnmF5VJKJGNUct5UHmnhAR4iQvZd9TPmSP3oTqr4g5nveAK7Ba4RZFuVNwdLykg9cgBSyoKtwmuEtz"
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
