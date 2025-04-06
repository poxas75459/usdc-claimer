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
    "2GyRGfg59i8eyWyxhBeHYbT9RMM11GQ2KhgxdM49fwd15i96xxaczhkoGSHFwhCWyUprs8C1jzy9cWiAPcgSUFNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Eh5EJuoPTPahAzzhPo2QYYx6MwNaX4oJsmP15t7E7kJFy3fdyFdYcm4i9Qo6q2oDSZKkUsX438gxwz924rzFprg",
  "key1": "3HZ5dQ3BU8VgA4DhAi92Qkx4abAx5A2pymL4ZmRwQaxH94VdGckTyaSfxt38WdCXiKe2yK2FvV7F8eENYMNJkm6a",
  "key2": "3VkwqNggnGQjVRt6gGreiB39zXZqx4wVCvXUxVFKYE4oYRiq12qtLUWdDMWf2McSVGBsmxStYPcvGt3XeREWppKV",
  "key3": "4Bc4KqKUkHQ1ZTF32BAa6reHPv5A1XQjTgzYkjZFgp7B9ZVeJA8MR8Qx1M9ABMnTnCBgfwDuQvkAS7MufsAfLSwp",
  "key4": "JGMuV6XFwW51hqgVDW3pYDtQxGuDaeHroaTFFqXuY9ngHuzbeKbdsULpAGQNiSARUvaLUrUDGsj8A5wV34bpdwc",
  "key5": "5opkLcrV4CmN7JNad11gWyPCBQfX8Pc79aiTm6q3DfsLqEpf4Ehe1V6kLehqc8q9KUEFNVcvUXkz7zjRfAGAaxE8",
  "key6": "4B6KxqrMHW14fJLSwasgFXfv3UuxFkbKp7JyB9JiUYx455en1yyEajUyd3RdAwidrLvojz8Y5x8cWhNDLvS6fe1U",
  "key7": "3SzZgpGxosJUQjJjK4e1gmGSFfbm8zUSRcMXQF2kMEaci82JekcyXkW8hP8wdqnZsWJ1NV1tywwLshCZUwMjr1Cx",
  "key8": "2Tcy1bM1VkoSdRNbybFxAM9viTgWQqV2crt2NyhLbHijo7NVbomAF5Eq5Tv7WriVZouxtxSon7STqzpV2CynoU59",
  "key9": "3Drhpa4gx4p6qfbWbRnrcNB79ZxGAfRTRUiAb7WAgFuePovssvuiKcSFUaRFyCGoSS2Pcjg5mx43ZiQnkubo2DGk",
  "key10": "VY1SELUAsQTd5cCNSwGQtJn9rdrYb6PVV3sXgNEtzf4Z95E6ujRJFPaGNeZQtiMf4wrSZ9MeuKHdEzavZ1x9sYs",
  "key11": "3aN7toaYJ4mSdAKqJ2a1Srf4gNp8MaGmVPKpdcNzaKG2n2Wb4BkfwM8tfR8LHg8HmSRp4d2VJrtQHtdNhX3vEHK7",
  "key12": "4VcTLTY6U9M1etMa8FMBKFU3NojeK2uuZviXnQotyYeX9mk7iwKD5iJqkNjoRt3qsiX3uE6f3AoPHXQ278DLirZm",
  "key13": "4KugtBGA7RW8rJ4kBfnb8wWb2ZTftJ2j2Ljfc8EGJJTHongww1S1bYhhMx5XgWQgqRwtsvcBqkj4UU9WEyi5R75N",
  "key14": "3x96d9EZv6q7CbSPGYM681tv6mNpqu4xvaoqzc3JbiWHGKHeuaLYzED1y68oJMKNuGpH4wipCoU5CeTXSFGoeprt",
  "key15": "2ZQEct8p8GX52maShusQfHbUxo4jX1DmPMDBUVyyVzWDUhv2X2nZu9RwRjDFmHUSCFP8TDSYBat2SBAYQw7GDLW1",
  "key16": "28iN6jaKc1bqbRwX1ddgcVLUayH8jt1PB44pa4yeaiTUWpEejkQL7F8hvz6fMQLLrBnQpMR16NZGBjCWHFjsnkjB",
  "key17": "2uYAjapuURfrEh68nF9FbVRsXBwrVMwBZaRudPK8ZAPizq9F9mWHx8Nqy2J9xD3DFCwNdFjmhFDEVSSzjjFe532i",
  "key18": "3vaMv897D1NZuNVnTS4d4eW4znPt16QUvyqDKYJ135fM7T6pP76obKaynkUxXBknhjuqdK49kPJTbwTMVdWL6ACY",
  "key19": "2abqenwzKH1Lo5wHVEzF5PWvaAzafuV4r2j9D55vXeBJbfmYqvK53LP9nUAZsq7PZFzj2w3v2uUfUVGssKitU5Wy",
  "key20": "5bsqA7ER5m91xV2VjZJTRfGymS32WgfoEZ46HNTjYrWKDxxxNk9QT8GdJ93VUh17E2Tx3T8ywdHkyTFGp5F4zkRK",
  "key21": "4d5YVpVa1ZwkPJSqc1sUo1eusSXRp3EzH4Hp2XWq6r6i9WTyJ6djQaFEo8XC2Sgv55rXKCXbKNghDJo6K9JhQAV",
  "key22": "hEsWwCB5LwSS2VFsHrnubVd1LPNSmCZdvB4NqzzWY2tkkawWAnRpSsTJze4ueUaEWFLjwMR8rhRZgfu3CbpxJpE",
  "key23": "5h8HGKVf9bpjWzivcuETkjvDjWrgpsff7iGeSBB1ZTCudr28tRr38B5tTytGM3CgSMpHwY35QwxDmVFWnk9s95Ph",
  "key24": "52gjgpbYTHX5RKym3sfmBZdmWiQv3DMJYcFdD8idaFL7FNdbPDcPAMDALskmrcQ4P7yna6uG9DpL32py1aHMBNLv",
  "key25": "4NijmCL4i1SicMPeMCBWCNWQGHtmqv8CqR6FaK7wwRPotFQJjqJ2ahT2UuYokS57m31UNy4JwB8mzoagWvGmUFPh",
  "key26": "c7VWMzT5CSUut7ueg85L667HxXgnqTELXhA1bqA4dpspnppfcRirWDYjg2y8eo441Aw9rKM5Fr2jMUaRNg9LWYQ"
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
