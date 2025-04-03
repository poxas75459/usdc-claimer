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
    "1qE2c4vGbhC9bhx7vfQHTarVxCw84jdCrLJGZW3X8op4uR68pJm2AHQ6YMuFh5A86LmqsQncKZv3Hnr3oeuu4ws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfpS1xSTFJckkmBn7xf15qZfauxwD9hAwCLzyFHez5KcHAcdAKY4rMWRJmmhcjtQcnpQLwzTo4Dotz9pEdHfJdz",
  "key1": "5yjcHWP6o5tQrkJA3xfsbJTKyEF7xNFhvYiBPApMmYQkxoEbBBMSeWyq5a2h1kCUxUNmXtFeo4QqR8g5WM6yC2Pc",
  "key2": "3s5dh3foVfWidVDkwtT3SHeBRS82Y6WKdGsjEz1MP9sEkdchB2AvX8QgS5KJxRZEW1LWBu3st4wvEigGJrF1n87b",
  "key3": "4q7TnTxiEn9CbNQhF5bSJuVvU5Z9rNpWQSvGfdrYGMw6ysmyD3SVqQRBDxn4Y2AjVs3BBrJQaXgyUPvkWYg5iz4Q",
  "key4": "4cJLWQzbYJZaaaGWJUNC2B1AxaUwNX39vnCXFQMadhcuyC1xcocgEV2rHZsyBLTjQbKgwAj4MnAdYRyAsyyLKDzK",
  "key5": "UtWdt97jFCjdLj86MRiwHd5BLMvKwrtRpSMBLxfrfPmZaW2pK4kyQiEtYVPNpyZPSDUnCe65Ev6iG1edNNxzXFY",
  "key6": "43eViJWjMjjq9oizH2XGRYaZkupVp5yVD5FubWVJpGLvt1CRV4bfd9XudmZS72a7yVdQch2HWZzNS21HvedJ86yZ",
  "key7": "CcSaZ8dDz7qPxXWhA4sfoJhtZxjvmUs3XbbahnzRsfCWvwQx4dushkTfjmC6Tbq4S8TaaEzehKRs1RFRwZ5WL4S",
  "key8": "g5SZefzyJRUbGReFj7GwbBR3tgkSaJSq5qHVCoEcxENUtkTquHCgZABRPUHbcvUBzYeshpU59gP93j37gAPJW3P",
  "key9": "4sdUUizxsdxEzJjzRFxAejTtpVdNJZ13uLwm6sizAk6aZ44YP1Dh7RgMJcE4usQdsfAnKu5eKcZVMtJaDXLUGXEb",
  "key10": "4DEH6VMmMdLihkAZnGt3eEbjUL4C3kDi3mspUWGdcS2zz3RuDxkg2Q8g6Ceo15ubwwkTdFvdDfB57xbSFjiVUkSa",
  "key11": "4mQcPTuCd9DyqtZ8whoJua1n1VYBiFJ5Vz8X8hncGC4bccLarp8r8RBD1mArCpz8C9c34hoPKETz8BVfx4ja534e",
  "key12": "5NQnRxUFZ3Rq9fkcZuVRsiJTNyqomfwe1kXBmzXVXJwd2PjvnwFbD25jxbjGzkdg1YU7QUHqQLRab22dWFUXoWZb",
  "key13": "QdW7dfTmo2hJ5yfjbo2G441B4ycZzmonvuqnHJxGZVbiEk1fDnAq4jMu8FPsu6qZuPtk76R32Ek5yWu75eMhY6Y",
  "key14": "3a6UFA132p316WXkkv1i4VvK38uqqN5qr3mznvhdEn84uDzejvFxAiSXUDzqpFTC78EirT1HKJ6MSiBoiNct9LNh",
  "key15": "49wBAuvJ5bBrZVyFYtuPLX3TeCsWBgZoUDXg1faTeLATnbzF823Kqpyke6rycXz6pcsXq3RcMrk7Subm62Q1sUge",
  "key16": "5trruW9Y6FHELSwZrLJDBbnAWULt3NPHhcdivnNYbZcQMtdBNrkfRLy4BUQNASHtter655115n37WLYjqQmdN4VE",
  "key17": "2CsaM6V55PfZfKPwcBPFsjDFG2xHPYPML6zKgpnCuHr1jyX3kETwFKVn8AFRdCe9CqGKWjj5nTPgCVooSGSdp66H",
  "key18": "4h2z8PiGKFjbsV5jenc1MDzLNeFxDQyM3F5kHSCM52ZVHYEa4FUZGvdfWuSawUARixf2DWN2a2uLLmkLDuvwceJV",
  "key19": "4637v4ZC82JwQaNFjpzsHvULEtCBRNRgMVqZRpbKsyRsqZmb3dgK55hLueRMSKWDpAv8zRnbnDzC7Mqm8V1Z5Y9h",
  "key20": "3NPdmmCZJiRAMJQEnZEiNvppmHcQAJdkpCWqfohpHi9V9Wkjab65R9vkURau9W4gb3FtNnaRh5Dx2nAQprKTPLmS",
  "key21": "nJNQQZV5wg79P9nnciUjNFRpAUbhAvNEnWsLoJ9F9bDJcywNWGoatb3rQ8n7wwVSwmW2RDGzTQWRiH6mY8pbiDr",
  "key22": "2GivZihnxr9XZfgCM6DTmBc6ToNr74aBsbSvhKxeEmA5tbmK2Kq4zDK3e6ppAZch6KdWtdLfKAvkMUJBfwcyg43w",
  "key23": "26afrDmWvVDv2G4BXV4VcQbQ46DSYN9sKZ2n5YsqqPVozcoM1wywyuyryL2AVhBPraGkrgS2Bc8KWtFjQB6CB4FY",
  "key24": "3byngBx4hoKGYtMu7mp6nezvFjkqBtnZeNimbSzAgfJmLhiQ9M5S87iVtS5cEfHUDMZrmyqQsPG7HxSMMCHhM2eh",
  "key25": "3qjty4qafwm2QfngXKV2yzA6kjULuLijQdXP3YhhwPjzMAyuP3DqH2fLVnEoQNTrmwS2MDkxjTF38GQ55c1cXVpC",
  "key26": "3CUHG9P1k2oL6QCDUh1sA1DeACQrPVPn89Cb6JC4PJUZGgxxBU4uyLomXTSnhDdnujjRdbZjsKLaoVRa3tj5FgUR",
  "key27": "1ob6f6gjzvPY8vE4PUj87o8bkWwpERg4NQXFBecs9bvfvedmmkoLJjfXfojeqsYeW1i2k5VADRThHGsgRhNqkux"
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
