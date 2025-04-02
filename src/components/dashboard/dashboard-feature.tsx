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
    "2jKf5PLEWVPnVi8kUSd5JyhsAC4geXhLapfeEVQzE28kF37KVZopfVvNHQVcMUU49gs6xtPQ5GMZCRcMbbLYo3fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ptDT7y8yFnW7pMSRm4WJZrbePdRFVRZKK17s8iqSjS4roC9qt8USipKPdHy7ZApia2xoLUuzLPLrPG5cm8niz5q",
  "key1": "x9nrQ6Jqi9u5bSJ3p7uA3zGYnnHiJrSuS3wtgFDhRi8shbySDkfYuzYamqMfHCLnfjMNF8JFQNy9MMs1kpP2KCi",
  "key2": "2CSQkfMPRnudtLhsFnjDiNT2UUQRStyH2BdqNSPmWcqaL2TKQjBsfKxzsAY5n879h7cBcofiqRMXuTpqQWiRa73N",
  "key3": "2zF6EbHqWnwtxHQ7YrHVgcTC9hNy8EMSiJjitjvNJCL6YGomFyumqJoJTk1m6B35pVVBruuZiwdtqc76zE33rDGY",
  "key4": "4tMg63BtSWt4wsA8cbRLf5vxo4ZNerDxgWjT798wmwPz5tXybcFvRb56g9JH5F7ZQGEqXqwfPC1ziQhYc3kLgJfm",
  "key5": "39tj89UzdDARokPAuDHjYXwBuA9QhnZoeVMKVFcv69SmYVvF15qbFhh61ksRqvtB3Xsn7kc5k8pA3qtY4iV33rCY",
  "key6": "5N4m94qLLzUT6HVAGE1My19yXnapiSoAmaoKhuLUxUbhfREiGt6faHVCpBB2e5cMDzMUnJnNUZoLaiFuyVsrRWiT",
  "key7": "5iXZxPXhSpZJUX2e8Vkay4xAUeYrtq4z6fHpcJgWRzbgFePiSXRi3pSzu5Wj8yKr2q7sFckpEYYSXBdAZsoik7TX",
  "key8": "2iLu5MU5J2B4hqvAHn6nGqMJ6bNGCzpXUwqFR9WYDNbpGJEiiRXYJ2qiXypMUmEksHtLspDiweHuzDSqLEnKYLJY",
  "key9": "4WaiyoJfcXwBPoei64kph1zo28hs5PjwUmCmgn6PcskKuUTzXayoTqBGp4Xxc59FrpML5GT1M6aADUn3BHCzAVEi",
  "key10": "4u9K54emjzLYWak4Q78rhQp1byb29h7iZMjrnSZvoMvrX8EBshgRxgibAVkW4fF6h6bcPdMLbDjHwEHsCm1gvnzH",
  "key11": "5RAcosYZ9GCoMmCBxig8o2pY1K7v8r11yW34BAH1CNinPFmPhhSyqaA9AC4UNTTsUyhNCLuPxbjR7kFztjYKLiC4",
  "key12": "42D6GhViiQFPrz9TdEhp4AXp2QRRZu7827Y8oMvkNaivm1iiGVrmPCsURPPDMcsexWgdhN9ViL4gzr2fJKqXrGAw",
  "key13": "5WoUb54it9twNuhmDCTqsAUGPptEGvamk4Xmjg9R6X3TGkPASsqFsb5QAAWjoKbv8ek5VGjcVsvXA1wMizFgUaqw",
  "key14": "2X1ix8hprq6Zsr42ShodP822UarzhzV9BBaBRBZWjTH9AynVUh3Kn6GuhJZvva5jQFHUKe22gCNE86Hv9BEZDm1c",
  "key15": "3LnB8uF4F6Gr1XwciFGoU2SwTY3MkmavTzh3W8r1dmmPqayVKrMd3u5afGsVWqTgpSjiyNvovtQbpuie2ZAoi3Vx",
  "key16": "eV9z1Qy4Lpr2CtQu7iCkkbRUtKLT6S9x58ogRLj6pNs3vsEVFgsLCtYatWCKPTRKdPYJHUSVMBvB6qVPYhuMVWc",
  "key17": "3dgZUnHZyWUTbEvWTTMwoRzA7NNQYFoJU3UPFFdtdyyweMoecfhb8AUgYKBqiypDnWoysvJtwxfeyb5Fn3hTkTik",
  "key18": "29d7UibGLe2smND2yF1nLX7UqfbsuYiVVzk3qUpQYeqzTwpnT4sP8qkD8fHoEyHdP2Eu9qzvkc423yZpi5NKcmsE",
  "key19": "5HAQ1tFS9CCSmAKRCoj7HNNanptVVGhKN5z3342GXfcrUJeyi8DF9DpKste1dcA6URg9L9NkMoXTdLdz2iDVQ5JW",
  "key20": "514VoCcpjHm5pce3icGxW7NL5PEweCanxM2E6PHpP16dHFqJnWJC1UhTH1ToNZ6KxZcoFM9FNGRyc9hqMRsAhVzC",
  "key21": "3AEmxyDcwkCpGfuLqmSJ7hYkDRkEwyZyJXqXzmGieTqfCRDy3Y9HRazLG9Dmao2A3hdx58RVi5ANfx4ArVvWfZtw",
  "key22": "42M3E2rdgox7NPdAS599PH5NwHzTQzews5J45PXBcSv8gbSDLu3U9hGToJQBZF2n57Vpw6jJqYSriPq1xuHF4xvx",
  "key23": "5avc4dk6pFmkz2Hs5ux5q8RLMxhcAqGcc6hq2U9XvXUirH7MRTiA2ivNJ7if2A8iG4hoFfUXaQb1V4JvS8KRT4aS",
  "key24": "5JEVEj5WvqymWn1Zsw7HixSTsz1yAguwBM1kmW73yNXbsNmLhhDCsPrDDJMpiuSRC7WrCwkDwUtTgDAtX6iuHqWD",
  "key25": "5vy1kdg1s9ses9ih3jxDhPh8GLKATubvvQmetZkJ3LUvbUmZircZV351x37v7tU7o7VbvFbayM1z3FVuoaTdvudq",
  "key26": "3avJtL5Sms8LbzWMSXC9Au4keYLkPQEsuCJ77vArFup2HZ82BZWva8LZZE6n6WrPyFUq5FwF4nhxvu6uJgeTaisf",
  "key27": "e2zuLxsfdqdqJTPDGvh4cek5Gxakgax55PVbh1268wygT7tVHKNa7vyRBqmLmMd5xpPCZ5BfrYYMDqB3Qah6UPo",
  "key28": "4nwko4a9eHxNksTbR6LhwPVxsH29KPPf7d3m6Az6MCbm2B6WFgnR9vEfw4XdP69ybakyTvpzBY3KVvKUJfzUB1dj",
  "key29": "3u76uhdsMhpk8LzWBUBxH2z92SBtaWZbs3pfieYruJN4aH1dA15ZSLdtKai2S2EPyLE6JzZ9JynWSaSono78VrG2",
  "key30": "4HP48KRePS9NgCjqfc3nsspdcuZyVpSWvUd8Ba6uoyhtX74BN1H36zK32RfvSF6xcX3bvu7gNW2v8RJ8R3juTkJ7",
  "key31": "5YqZd3G4xPotGfiT6AuH2Qwqd5z9CpjSLW8Ca4QcJQmuHvkkzE95mHrCHPjigAMWbh62Dd3b7Psab9ZoaLP1AVvF",
  "key32": "pSqJzg9EF1DidgBLW5FiHy5EJekNEW6SYhQ4y31Bxexwd43bEgFo9wL8yA4L214mKpavV4oBJDUiooPFzLxXLpb",
  "key33": "23FmeJFyHc9YKt6GkqXx6ABRp5TwkwFGfQhu3CS6DemLiks9DB66B1yLtNSA1skh83TBQKCuujSCCd4MtAuz83io",
  "key34": "2qhVoZT7nG9ktaN49Z5w4vXFoE1qvZVyGjWjECbcgRdYfiiWPssNU6C2oN7U3aUv1QnDDbGXAyadQ5v7NYYga7cz",
  "key35": "2VGz989o7PcAXGUi9meis8o67ZNDXsMhe31LQZf3Ur5utMr36WezjMZ1GhwsLsxeXFPPAoSKn2mwMvFFV6uhRzjL",
  "key36": "2n12c3Pwdk3W3N6upH3kBNfMYSSjyNpDgfdN2x547cayCe5PJTXxPNAskPiqQ5RebA7cDoPkwmGbRQvnhv5MHpRE",
  "key37": "4nzemu9vrzgiGnvKFXfuNbmw9ufvZ76q7raLssbuuF4MwnFT3shc5KvR7un1grT6rCES38ZU88NdNquHnXbj7C6W",
  "key38": "5EXbzc1swomqQjFf8BSnv5sKjjHAfpdydmx7GFj32v8XB26NE15nx8t8k6NDtLGx5S4phdMbeF16nLz6RfS6pm4g",
  "key39": "3YwLoUDMQRf5n5grQoo3j3G97YYL3PutJDUzShND3Cs9rzmeG35mcXXNMLCqf8sKNq23pPWDWgwawucf41yBHBhW"
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
