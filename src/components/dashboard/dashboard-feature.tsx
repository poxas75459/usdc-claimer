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
    "31nbp5MEtsjFmb29uVP2dBnvsc5toBUHHrXBCe9LFHDRSkmPwi5LXn3uGgeciDHCF9moSULham8gwWJxdsKYc9KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579JwTp3AgXG3rTVSWT4BBFuCZyiXv2aCzBafMTPrXJnKRL2G3Haaw2bgLj4hnB6LK3URHPt531pCEJucDWHKkjz",
  "key1": "2htam2ATCpP5PnwNhwf5aoti61pVa4EwAxfmuErX4mpf2p1vBhWu83YJ32icN6Z4kfX1gfZDgyS4sh5GPDnxXCtM",
  "key2": "3NGsWgUzSRtqJripgL2gxSNkyaT3RWaX2pLnQd2XP67zMWojK9JzLkGsNMDo62hibiHpiWuX17QFMB1AKjMx4Bo5",
  "key3": "5NEoNe79urZkKwhJmHD6N9Ga1tTF5gKNpUHbbcJV1VsLiXYz58Zc4tiuyBhn9ojXaCTS8adahiMSF1ypYnzhAZpg",
  "key4": "4G4fm2QTLvW9TD519uJJ7PqDSkrbgjU1pPQbHMdaqp1ijqCzfzUG8HUt6zSJN6PSZeEEzeJZvGdLWFAU8fnjYw3K",
  "key5": "4H7ETnbv8CPY5S7DbWBT5uby2bsGqLBheNp5e14PR29tXM2zhdiNVc1YASdhaGfFmtDgBmEZaJcotiZM8iZTYLiA",
  "key6": "2NQrtfPwbKtNRF6se9BvPBQRwyaTweXuegKCijicgJb1TsCRim2gr8vUVg1gQekN23dZ9Cc1kUV6i4UqAExKTqwt",
  "key7": "2mZgGLU2WGnWB7RkKefAbGMn9RLG3wAey77KpWK17PqNUsWmuLp7uoVNK6XGvLodbdQDhe5QcJ6H81GKroa7SQYX",
  "key8": "S7K8E8XaK2oGUXQu1fCfQ6hs8LCrBG2KQNPfLRPsgvx71U24bcHgnA811ot55aEBHU1eom34UPWBoUwYxDX9jTQ",
  "key9": "4UNs7jYY8rUXqBS7mLHeBVktwBt1HF6qm6Lvp5TMZPTvydpXpgPUS6BUQei5oHicPGfG45w5VSqtnFmxSCjEEGtJ",
  "key10": "2SH3LWjkmMNpvzkGN8qnoC6ye3KjHwdjkQ8n4uAejN4tiC6i2hj8hLnfs4wEUK3YjXMQgAiqJZGdeuFuFLTSKA9",
  "key11": "4wrhV9Kmi6Ep49beCYMH5ijn9A5URxsejhjQWiwQgG91rr13Ssi8EGKCLKcqyTxoepBnusA9JDvrJ7m32vDcsGDh",
  "key12": "5dx4STqPAsjgNsEBfzC1dKDF3LSKAAz5fFzGKrWE9YtUhtFemgUKk34eH7s39qcf6AEc9mWz7PCbtHErfg8vKBP2",
  "key13": "7YjZTUgNmnMfjN911P6CGCDzrB95s78MH7GPnxgkaptWMb5Qy4hKfTSwq5vRHhQAunh4dyYGQauQb13Gfewj7gb",
  "key14": "61P3QTYEhm2agymE3JqiC3LbngMnnhyzXRrNw5Vr16L5SZYTM72jqdnjZRrKZDbc7qW9mzPy4QNiWfxaTt7MSXPy",
  "key15": "5HgGfJk5GV2HS3pa3ua2R8kfHCbByuv7BE27HS6XaNhuFpwJqpRyesvttVFcMoS2wTJEQTjQdvahTctK7bwcypXq",
  "key16": "fa7Pq4xU4gm9dpUtR8wT9xUjXKJp4qXWL66x6cAA9J3TaCRLUQZ1G3EFNDcFfVpMUY5cSM9ve47vadYZwhgtjdU",
  "key17": "2QVrj5jXexRTzqSHviQSqBKqB4YEjHUujgRGxAdBTmdTw3QVQfy4LRva1AfzwYGDVuvx1MakVRa5NM3Ng4t82ugc",
  "key18": "553Tq68XMMBxsSaCX3h6KKvx77BP5fw2YnCUsbnGxYWB2hzPVnZHcwoPtL2FrmcpBiZbDaWyx6pX39cueiD233xD",
  "key19": "32v6CkW6r6x8gYT4Q2huZ87uuGikZibHSPk6DjAjziAXbQoBA1yHzTu5PNaqa1vM1NfBS97aUc7gjwaWG33c5twH",
  "key20": "56T2YPmDK3Hb2nzSBpndukJDFaeGintR3KG2MEfJ9SHSqF7dvardhRWhY2DvWkvR9iwqQ2yeVHi7iMrBeQWrq9pK",
  "key21": "4oZBqbgdXXrbxz4d7HxZNmo99SBdjxLgwAMEmFaLMoa2KxS5CxKtpimkp2SFK31GdFBQ4pTfH4XVmP5K3c3UyGsP",
  "key22": "2bvtDMbKCn3ZyTFjz1doSFQst215ZAhkqwZ4csD6pV7j3iduuHSVyAEMWGuhUFJYTGt7PtfdGbgntyDC6k8dTBRd",
  "key23": "5Sx7WQo5kb6Ucrd2sc2LfsJVL4d1zhn7L7fzEqzHzADNcxHLVmYUrLpaKgiMcspESztu7S2Hf2c7Kc41bh2iWWgn",
  "key24": "4tEjdN44qGBQ8pRJEZ948pncCRjguGqjp48gw1WYa1MqwrVLGQHRJijtwT5wiBR1GYGanJdnFC6TSqG1UhLwZQ5K",
  "key25": "4WdPUQqbAKBWak3sgVQ5PNpdmHUwKkaX7qYX7ivzeFXpCgQeqx451mHCJYUaAXsYokruQn5DfTBKe9f5m9e36oYC",
  "key26": "5rM7iYFfVGkSH2bnLpDtLBmuXWUqkt1TtZipccV4frt84fvP5n4zLZLnzDho1AqXzDrg8fip2cyBGCswGfSWx2m9",
  "key27": "1pZV5BQ8Zxvvr9XMLknCHog7BRH44BiLqUHXXfF7znMddyRcXgSRrCtyyPTpreXkwRhGT9ak1cwXXSUipsdanDS",
  "key28": "4AR5zaAak3VoKQqQcDjzdo19B9shHAZkuV2awanPboBudkzzHR6Pgef2ZjdRhhB3MfXTzmYdwoygCSH51sLuHNLA"
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
