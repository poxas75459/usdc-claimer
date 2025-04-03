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
    "AvCNZAUWkvUGrESpRma8mNFLsmUSytjhtF8N29hNzgVBm2a7ArxHMAAUmsBwcnNmdvTdSHZZncx7mMpz1JnNmy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FLAUjFXWtFMF4RsBivWzATLHK5wzifrLmePZaRRg3i79q2igcYtf51YSgUmzxVB1G4jXv8uenSB44T4ASjtp2sP",
  "key1": "3sfCqs8D2HyUkisyxTDrQiNm5bor98E7nS6SCHYH4dFAcfqsLeTwzVQoPUGa17tiC3j3ApmvB2ySfByh8cRXsh6K",
  "key2": "4MDea18vPTJUZAeE1TLzXsmJEbfyEJBDNVSP7yyCYqFjxG7b7KD6RKeJT6TyarFMZcLm5e1PTRXE3fD3RmmnAsnP",
  "key3": "2V8uN2RkrmYcJMgQBjJ9jtyucecREmeY3WEE9yY1KiWtvGE1nbMp6ZUQu3o6xcR8P19LynryjPMeh77igB5s8tBH",
  "key4": "66BcKZRNPyFg6Fsee1SvQfSTjrSzv6LLwqJN8trNP8Wpmaw8LzcbJChwsAZz19kqiZZb5Qq5JfeD3eiBLhyRnpHq",
  "key5": "5BjsUdnDmwm4p4cQyjw9r1zWGpx6V8QQY1NVcnqThQjJ2Jccb6ncsM9JRXrZKqbxJipokiSSCfqmX75pKkfBa7QC",
  "key6": "2q8zJc17TZYWeiAQ7MremB8L1pqyhtpdx6b2G8aKcpP3X82gwiev7woCBXQCva9xjnCseA6U4WN86wBt4wW8h9VF",
  "key7": "5XDT1PuUpJnGiPmCdA5Ch4gS2CTTCJ9TDvT6Wo2SnhgkcZcYFSgS2G495SHkbeaLtRGfn9fYWtLxxnzv7ivG4XjA",
  "key8": "23djf8wS8FvJSH91bRHLWBS34nJj4c8ozuExfwbt6yR6KuRMoziEfxJVwiUstfxyyoeKBkbhEyHDQwk4C4G6HXUE",
  "key9": "57fxoaR4GtBXafUoSbqWiW9GwaambE2hGdbb6ojNn2CAuct4xSWrcaWNbbwfMtsS9qZpNfCW3zQgzNEse6LAmn3F",
  "key10": "48Pd2M3Z7USxa67HyKZqH4FDkrcijrMc6Ehz6qPkHcyMb5vQKzGWzzpAHB1S5cMAzJVQNahKZotPeppcZkbH7qY9",
  "key11": "2ZPVnwmvo7FpC64gt3VoiZMU4jSK737JVEH4BhDGvjX1N22TqjqhRNxq7YTPv9expX1FVXUCw6otVniEQ72ydfUC",
  "key12": "U9DLePqj85FenpEPmrBpBSYKqT5L9MsMpBmWcEwXbTWFTHsDbaHy612xuMY2txbzdwPNECokSt3smbkNUfe1BKi",
  "key13": "3tUh1nNqQa4Nn79yNVequbvFzHQzhrpTCG8jSp5KETaELpNUsygf3YWUAQ5Dq4RdP4AZTLzRmHpXCKSoxf5gNAiJ",
  "key14": "2T3Ly7s2LjFw3u82woe3ZkUUzPENzZgZhRiB4Xk8McHLf17g5ApvmrdJvSLPZWbEG4NkhcMYmdQ3STaJtD91Bryz",
  "key15": "5fA7QvmYXprECDw4j85ophTPePHxo2DvV9ibY4jjenjVPUaKnxJfMyzwXqRwKEDEAHowDuXcvDQmY4cqnGKhx6ca",
  "key16": "3qL9fFv3nFjrQZA8tjwwKx3TpupgXDMA32wPbQy4ssEJeQBg871Jqx9C7HGVBKJ4mBojJ1TX7RBZPyYzBxhUNgiT",
  "key17": "3EWj9HdQ2hv7H6mEveU6V6V7wDXmnx13CuD4QDyXqpyu1j3bspxBuRs2U4QDAHTwv7nwDhZ4mc5hi5N5jeqUemM4",
  "key18": "Ztx6jP3NX9E1qW3DCYFWdqTsU9oaxzFZqmJGJMaSSoh1tWhWoMHCbrS4ydFXsJgg9yoc8192pw5eC94ruhf3vus",
  "key19": "5iEGFKtmf6X1M6kWzAGmwhL5b4PqvnEmTs4Cryo3gGSZitK83fbSn5Tp5KiTFH2vHRxqG8meCTY6ud4WBpKAwH3c",
  "key20": "a5YLwzVHohUKUANixDK4HbqNkCb5WAgzLChSwDu4hDJt8whqhj23pcTgAFPNVnskAhnqZ2Fq1rBPWgBjKq3L6nh",
  "key21": "665rcL6LUMJiuRBocEV2JMzjhUe7y7PekRRePJS8bNvWp4tpKLskz5aErjFPLBNbi2cZPTWPAK3Lz1oYeeW9a6dZ",
  "key22": "4mW7EyCGEA3Wa5G6h2vQtbWeJvJ9YzVEMSPj3avpt4wBAiL44FJWyxGUH5Rozh5NoArF5o2QaNeAYSTpSR4bgprF",
  "key23": "4eyS74YjLCUbZksXp17s6jsfNbgTYw43RHjx9KDaVheeLXDkTzbadHfNtH2xnVzbNAuk4dsoANxR2r9YKeUoz5sp",
  "key24": "42zXPR6rkEb2uZaYdadkg74q9nyhZYo84g6dZFqUznmojYHudXQXBw34ZyuSt4ns97ZY2fQUvJWGE7V2PkEnkH4Q",
  "key25": "2hDrMbJ8oJHuGTrYUdv8rHEGsagXAvCEpFk24cmFSjw3Ly3k9NPryzyqbapP4cKj9n3sk25Eq798HkWr2dtDJN3b",
  "key26": "34Fh46BgApmCDnF353ftsqY67VLAkcwt2hVHiNuG5s4i3ZVYUB8Cc1M9rfV1fxBkDcL37Dp5zVw66cUte1QSnFLK",
  "key27": "48BzLZGyHvMB7M5CJSeXsrcAu7frZYRbSajF3RAdrBB9jsmbZbdxBopc4jxE9HSBML2294va2fWkYySdLAD7PRUY",
  "key28": "4wzBfZS99Mc4rwGPmKub7nKbqNJnCh96tS6m62omaSgR6MJMVwtbqvNMuVuvschymstCUdYccY87L6xBmvZhKRFc"
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
