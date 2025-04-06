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
    "Gf8PYt2FArCL9m16c65NKoa1KmeZJuJDv5i4ipCvJVmPAJZWftXYztK88tPyT9FAd5LfVApMd2e2FiUfD4tB9dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JHhcJEzZSrUUrDrXGZY7xakiwtERnfVwf5b9KET5MLNYRmLeaPt5ndugvXm6AdnRMQpneSMA1Jn9uzwnVmZSqtN",
  "key1": "3AwGuwrgUE2BZhAMkTKaXC86Bvp9ckUu6tr5iEA9aFhAqKRnedahm7cZo9ThdV5pUcxnacyqHJ7KoYCq4urjJnMq",
  "key2": "67qKm1J5yXvArSwEPWBmo41pG5xNbpfE9fJ2gPQWnJYa1WZiWcHUyY4MCphYf9z1nuaK8BA58e8g78shCLRe5mcL",
  "key3": "2f5KFgxt8JcxAMtUP3gkc3V7uVr7k23bPwRkQMEMLv5CCuFWE5FsiYJSAvqvEaRA5Z1k5sRFzf4gLUpGf8cmiurc",
  "key4": "2XpnGY7jYThQEtWSN344prjP4AkWapUbZWG9bi8Ldfp3h99pdD45DZ4oHjqDZx42FmPnRHWoNDzsEk7umKWa6dPs",
  "key5": "5LPGufedWg2ETQCVqcBWehQ9JchBzhiz3Mnnsv8oqwtWQctaxeE9mqns4aU2wxtanpz7UKND8oN8B2o9iwfcvDD8",
  "key6": "62E1WNAJToEjBh6k6PSzQgTu8sgKENus6hamsukHXeKMc919kTozgKJNGsSQFb3FqmpPX9Q9GoV8cwS8NkF3Drcp",
  "key7": "5gdDC4oEG5mY9jAZ4Ada3Viw3GnwL25aD3DmNMEWFC22MscCHditxjB23G5HSH5CyWCzJD1fGEMb8Qi45kBp2Wm3",
  "key8": "25krzjfbFkGkP9bgur1BGSm2ztrc33goUmVPj3WsCosb8S7wrYXcFk6ePdqaDZHxcnQombaZwbd4w6pWmjTPG37Q",
  "key9": "2xERf3UNbJFVo2xCqAjLNNvE5EcaFKUnvU2ypHW6B1msbLZsqq6NAHUyTrVmLEZxRyJpEyRev38kauRGUdcHrsZr",
  "key10": "5pHfuqRVGAj7uKeGEJyjRPeqiwaZZ1YKsRA6MkSCibvFFBnUnEPQFbzFXr62YwYHRLWYEiTtKjZHA6yGjCaHKhbz",
  "key11": "HVyK55riQkaMXcjyRW3DxcdEnsbDDBKBPWqfuBq2aaa8QwAcKa9epSXFnLrvBF3Y4U1gvVAfiVLJbVawojBd5Re",
  "key12": "2zhbk6QXExhMnh4hiBtTBZ6f9rURbWsNB4HWHcVKcLVCGComn971m7Wxx8UkaNDTHkWo6ighBHS1c549VUVzxGm8",
  "key13": "2V7KbvQbjUKeVHfEYHp5Utdb1xZWQvUZ9yhvsMhAkwVwrwzpgTiMhKULoK9wHAmWPJDeiXYct3jwrzuX9EJ7r6Wk",
  "key14": "4tJqtsBG4J1iac9LCiNHipktQqNf2ZF6sdXfti3FYaw3wyjgHx17vfJ4RS835ALA82foWWb21Kymmqt3PvJhiUPj",
  "key15": "4QuNTX7x8ky5MR153K9ZFNqpRR8CCtEckj1xhH4QkcEnfC4H85vPox45FK7TczeFNDQWZcxNA3n6tfQ1McXXp3vj",
  "key16": "2BoXL2qrb4MowTzNR3s9qZrJ7nWwDkBwVaQj14u5pZK5UV9FsytW6qDnwdaBrmP9PxkLP1s1KuuPt5DvPUv3aCBx",
  "key17": "x26b9brLmjJHWFjZB8rfoF2z73rhVYdipfH6c93DNPXruphqkCVhN4YNK7aubuTvT3UheroXXviY1EWA1CzTntN",
  "key18": "5hFm1Q7YGGmhkx9fYxZfkimPEofQnzkP426BiELJD8V6hWv5jdPBF9g14GCpi9DbUWEJ2XyVZj6WxxgpCHEsPAf8",
  "key19": "4J6idN4Wi4qSKQnQk6VAYkeRPdxnBP4476MJRwGMmy7FMC1YoNPEZ8NhXfhnmknP5uSYhayU3SCmZ1VhvRcwtZcz",
  "key20": "4z4jNaKfo62a9s7bSMDkwxGaNgtp14ECDszTwKbgqzA2mPEoSECsm4KWruxLtaJ7Mtcq2SVA2Wqo28h3BgpyyLTf",
  "key21": "626fKVomSiYGkqohCNL5fKApWkECuAjWr8psSKErSbWoP5tDc5vam43LjQHrf1dHNvBeyhTWDQ5kM1WLrQVcubC1",
  "key22": "4sCGZxST8CZv7JxVhKhuskc2s2amWf9os5qKa2DiSekRLRtyNaxmx7kTrnvAKGdnnRhWr7bpj5yudWufaedgF5wE",
  "key23": "4wqKdUMacAMeoQtFzNVHy2EEf7f9VqYAf5dVDUMkKnSfSGEFCQmKVSP945us3pw216uEHfhQge9FTYGPNc32hkKb",
  "key24": "5dicXzhFAC9crWMSYWJruAe49xvxt5w2wErPS2wLkpB3wN5GBmGkKAS2pysECJhNDwT9PGYHhYx5tu8wtHjdTnzN",
  "key25": "HkCDjC1Ss9zgrD1ixNfqrYaHEcD1eahRYMrGNtfFPrBMSkPEadML8g7BzAgsWRfC23hm63YP6r7UMHwaw6ePGsP",
  "key26": "4gsV2p2KTfKq25fCLSPDNRinm5gajYQ1zMQkAcQhRpukvvWKiz2k6e6HDceRvKspumPDqgqrremjvHiwTjnTeuEx",
  "key27": "5RR3bJWWsABsSZ5pDRTS6eavqEf1gbtAg287n3EPmWLgukDZEaz64kHSTY9DitmyvVsmxu6hWL6t6ZjgmTA3DiGh",
  "key28": "4FguRM6V4DfbSxpoUyP4UemgSyDKoJH7UjN2HF3B281Ha1uQCm3x9LjNBvygLLZCVgPRnqEUM8fBByLLvfKmWFvy",
  "key29": "2oioipUH7zjHYiTVDxbzxDJkmQmkDPm3Hd9S5hEFKCJvPFH6Y4oXnzbsJXMsGywEZM4GVFb88ST4Tntx61aqx1hs"
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
