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
    "r4HaLqZ4BR7cGa8utkrehkHLGi9WyBHUamTfx2ot46VkJk3YzUayRuVcQ457AdFvzHiHwgztfjPstD2VyrqSme2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h38iHoWU2e1p4n6FkcX1HQCABnrDygZxbqf9cDmMcvu68BdfoHcUtFXLCyWULgCwnBA1c9FtHgPKtNEiCynuaZA",
  "key1": "3JwJDqjEd7pLkZXM5EWrw9UsACLR9Fqk5RagbPkdeMmyvs11xRSyUkKFaGZc2nVbEMrgBN4bgY848okBR3BsWZhY",
  "key2": "4y3SAzFHVzxvz6rsewXJMS4rvowHb1YiYZusJKN4arzKMkRBcKgNTLNGLMXio84ZRWUShGvJ6nKoDwxXC95mF1r3",
  "key3": "4EpM1J3xmpysT6TQQx5jKvKtWXu7zdV7NURGmnqv9VBfvdTXXq8FJdNZEdDSJqoS9NjztPmdfLFn246PvWbFNJEB",
  "key4": "4w1jYbpuKBNuVfQbeRfFNBMrfheWeRvr5LW2PA5e2NKts2bWCtYFjwTXgF4xnMP23zpAhyjY7iEKErhfaExxoKzy",
  "key5": "5orDcXajAcC3TbGtFcbe6gNTBFNvjS1wK3QVtejJweadeSLyCwxNwTKpUY2zWzFGZKQZMijAsWw1qLQpRPdN6uqo",
  "key6": "3wZmnPZHZaaeFPX3xtQvKtGCcC2Lb6xse8C3tQMcWVxETecjVatxwzhTaaHhiiLPxrnUw2DzCR8frRUHxq8eCuGa",
  "key7": "3eDH9rCiZEi9bud2mGctCk1jLzCehuTopUYobV8AvBUxkFNWK5aAzXiKyWTmRtyACzaCQLfS8H2uptNnHbqej3qq",
  "key8": "kZ377ejSsGnoeBqFe3DH9MgrjBaAWPRYB7cCyhN5J6NZn1VbWNWTgmDXggqi1brGTL2SdsA5zGsZHUNihsgeXj4",
  "key9": "5mamW4iLs2a9EkqBfsiwHvbTJp2eWfkJ2zjTSFj6Jze8pEQQpCm86nmfcRsVQBJc7NtkRF99ZrJpENhkrYtLffX3",
  "key10": "5ueRSZaB3mbHXh8RVDfNw7Vq2PVV9uUMsaACda8otszVVeJKowSK75qoyjAXk2BQ1huSauHkEEEMYU3TAy6Ftc4K",
  "key11": "422MLU8xEtVUr3ejZHbEwj1upCkdCx4nGP3UG64h6T56qN2WrTHE4uSntaQHG2HcyghyECsHC6YnpohPdyADvRmf",
  "key12": "5FvGT3MYVLgbvxYfwQf9BJq1pbnN83mXpjCUYNLwPcregpspQGDwYXvDhnkxG7JAmn1EqoxxK8auj3HCVAEqLdJs",
  "key13": "UqQgQEPn4xLTqpajRF33pHbKABethMSDrnfjCVRhC5F1BqaNcPDCZuAKfDAp8aoGUNZax1612jUdhMYQzWhGwqw",
  "key14": "2S28JDEKfWwzN8ymu6xtDPJiaKoazHJkVPWJRVrfCW7VhwYxA4f5SpGaRXcAuDeutd1dSbS54pSqn96rV94osCEA",
  "key15": "45NyhZSpLo5LxeaukKLhcLNxBUHnvz4Jwxga9JuPxX56VeRyZRGvS9rc5BbAycMa21kzwFnuU8qQ5tw2AKHE7MQZ",
  "key16": "4MtwCuxcGdwwd9NLxBNV3Nm19ggRkfRjsigyqQ9BYVUsb1Qr4Mdnp6ffvCHyCnUVMvFMxFuLVxF81DzFxhao4Ux7",
  "key17": "2Hfcn1wHbSG9kLCJeeMTNFDTtEku9kyUjqAw2j2wrrryMWtZPRVkcVryWD447jpDpzDrLYyDBrWKyv5pBbTSFhTm",
  "key18": "5AjVrGJith5hRNyY5D3Y51nzdy53g3dDoJjEKyC4rEtdeqtun7gK5NQPg47uWE1GSBJ1gs6ynvcU7UwVJ4pn7qDY",
  "key19": "YsbSS9WDSAxR6PiMgY5QHJAjFSWstSV7syJBiDFs4CgFz2c8eR83aK2kwFFinMN7921fcxh41gXAZN7ihroSaVN",
  "key20": "3u7G1LBs7cFT7NqZ7chMA5YrJcx4oa95NXCGEKDzBMCY5sfxwzE2UdHdeCm14Uw2LXrwoiJbhnbzfJKENZBVQopi",
  "key21": "64d4KvYBifEgH6kn88sbKooQm3k4xZrN5cUwpxgaMv4Lvruz9iRKE3jx45zUZfeaJMdD1pJeChDy1VoHHB8uH9AY",
  "key22": "4QmQd4NGABA624Qjham2T1Fzb9ApHUYxBhhkoGy5TYRJy45kK1nm7rtHpAV8PH6mpcPP1VfP4zU8doQrMMGfkcrC",
  "key23": "3pgR5EWDcQTCauVMLSxf3VwHPPyct46QawhowVsbwj63kB8YEgNSVCFKK6v6ZkLeJ9881HArp4qvq7NbfF6rZdxX",
  "key24": "5vnESUbcg2kW12AWGkfg7wpZToG6BLoApCbxgV2onzusP2RQjddHGPG3ysvWsn5fMh5tenTxCHWJo2aVkBF5c4sX",
  "key25": "3bYAnGFqm1VBJNRRqYmpDVsD1t5WzRVBSJiiwr3txerqUfTCvnF7Ljwc5Nmcuq6MnvTa3ENEqjZDGQaeeBaRzZqc",
  "key26": "519cae1tvBhcEX8Hzm5vJBZU9xfoS8wkAyj4179J3Ff5pqyRTWC725Na9GotQLPW5Kqf82eLnhkNdEKidMXJmuTV",
  "key27": "2rPnV4SyEtnQ2NfTi8NaQ2sCopv2TKMMgZvFeBqvoN7Z2yf9Jhjv14xj4prhaUzvATbZGqvHSi3aUfmsdpahEH94"
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
