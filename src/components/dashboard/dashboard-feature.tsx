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
    "42VqkYCZhqiybV9LK7LnJAint4eDGwJeizv9ho8TzdnfdxTDJfKhu4j6hpWzzLGadgQEjasx9fr6nXBG4NfdBqvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRQhcurWtdY1kqXX9dnRdU4Jnvewc58i3WJo6pHQLWD6wuYhyP89DyvLry2FsBULDYAKeEasXaksRNBgSiaBGW5",
  "key1": "5bLdMJC7tLf2saLDXvMenhaJrSHw5iAuoqbTPcytf3PX7RrySpf2ZhGAU6KReNWtsva17oy3UtupqPXa38f63rY2",
  "key2": "3Wo5V2PBDxBTjZecjexcEYpMz2d2piaLpg4T6fBANdVFr3ERifYkEabqTP4G8qCqgoFRM8hXB8fTX1fbiNbRicqr",
  "key3": "5h9nfbPLoUWezpV3rLN7AKEGjQzggGpxo4yQt971wR1fhVhg3jyRBQ2DWNfTHVM84EEe6Fjiau77pXnfgN3Ee6Ns",
  "key4": "3P3MxwZssYx6RVp4ruYdXzYgRbLMpKofPAKsidmHkb26e5TG415sd9WFB9kebVuwK6V1Amce9ihc9XyDMw3zHuW6",
  "key5": "21XsHVwwCNYAY2jQhTd4fACLEki7vDf4E6NJhPomZAhbq6y3rUK4Sg952HcQpnaFkN5bPX4qQDHwBxmMSGADgp2H",
  "key6": "4pto4qmgsvv3e7gMEWfmCRXqiwGMLYUQjuocSC3F1GJMk9T2Bja5Q1h4oj8SqR4PketzaGZCU4vCpz7FiPU5u1Mx",
  "key7": "2jZ1brok98UUYgj5K9fLbtiyLF1noTyBevySyVCdWrRVKtX6sjpx3mfHsVM9C413WLRCpqUhxzoubGkhrNxAWotT",
  "key8": "3YYL3ojajAXkqcNLxX91awWYqcEWfekXKZrjmHJHGyFGem2DSGe1pd3E6mCBM32qztwWQ2jUPuFB2j1oG2ZQ2k8d",
  "key9": "3DiSKWMxPZ6sQC5rAa41t9gVjfZgSNen1mMC7i4izzmyWSN6ZwtP3PEZKkuAXfRqje6c8w4poa8Wjmzb4xdA6n92",
  "key10": "4eNNJryJPyLkBaS7gSV9uHmrFxknRYt2dnz5qQ4EtCzTwDLEhZwoCumkfohh9uZHN6QaGHK5r5qTfBshD43YW42S",
  "key11": "1ZfVDiWZkRFm5n1uoQBmLqKBKPLLrqGiY1fbThBZHx2pL4x5Y9imdTd69W5zKr8Lb8Jc4oXzpPpavR9tidW3kGt",
  "key12": "2mU8f4ZbHVuegEqZyb1Hb1GQH4R7pVPA6Zi8SR2K32wzugzAcssR3soM6McexZ3NBVhuMsDf34LiQrDGE81bxyMF",
  "key13": "2rpENex1ninvUz8AXxrX2qDzpcicfRFyWqFnQ5JkV3XBAZEQcb9B7kU8X9KCeZkpL9WNm9q5V7s4HGTGGHFXnTvE",
  "key14": "QxpMeiC6PwJPSFxH3L1SbCJhyM555Xjk6FoMe6CsVYbx75r7GEojFqnAGRDrvbrJjN1GbEpQaPAa9xr2fKZCatw",
  "key15": "4cTTpirKeGaud2FabzZmiXcwA2ew2ft4WxZazR8Wm3doWQKQEYP6v8vUbwMSiwdCR1uKRe3ALUqJVoVrWW1LheNt",
  "key16": "4oXWCVtS1boW3ybxk5dhyDKuxki4bdNDkLHhEkSPTU6reP13euTaLaYSogEEMqfPxif9Ut5rfobMXPjqKkQ41W41",
  "key17": "2AWzkmoiLNRxFXeV7q17AXBnyinjXo7cZVr4nvFade7hZb2PUoFwKztLi1z4HvHREdUTgDAjGcSfmAGXZf5F5c3K",
  "key18": "u1eV9BbR6R2MfknSpdTeWZ7AW4v14oCTdqPxnm4TV2EqSspgotsMz3oSPBKnMHHtqtNLeed3vf88RAbWkx7p9ra",
  "key19": "61uU6RFzcBiF77EXoJg6h1Jy96Fb4zxVNL9XiQGzyPnvGUQk5bfBFqfa58bDuvJSw32dgtd8bdsabWdy12p4iBpc",
  "key20": "4cfo4SdnrgYP8gad4mkUv66A822xBPH38kmkYKMxLvnhdVrE15GfGJhco3BqsiAzr2VH9npVJaHiBs7QSQBqnDv6",
  "key21": "4yehupUto1HYXDyKTZpxzF4eFYZPG83GmwgEp4MK6Uy1dVLBZYkZqwdhChSYPWA7cir9tsdi5Uusc5zukWpEKgGc",
  "key22": "4g2Cug1bdn4yWGHMYvEhzjz4d97h5UPSyHfoC4PA4coWE97nSKKvN8BHZNk2Qa3mXxsr5GZa2KwbxNX16JL1F82K",
  "key23": "4cxtKZKoKEh3FizCrvowQ8oq65LCycBFCqxjw9hkTHqc5uzYdUXKmVtj51ujgsqJ2FmXjvcns7YjZYjeYaGfMfRt",
  "key24": "4EHLMwWegCbw4JoTWBAwp3HbikXoPZv3TAsLioZZmRq37THtqy1YnUitLJgFYdDQc425dxXtk6GYQ1MMGmiQoEaQ",
  "key25": "4tNsxLsW43GpuyihCJnnqJhykGc2ME6sX1MTANRHCTw4zrDR3arYRBYMZXb3nufJszrERJ4kv8ALoChfy4uQWEGi",
  "key26": "5CFtRVnryoXo5vJ4H7khM1CgYhgVX42uZt9z2CQiNBU36uQP9FjDfe4PFxqND5bcv4K4oooaWThAqJgnpztF1nrB",
  "key27": "34QUSoqwXyEwX3NtTMvEYg5RsWhZqeAEuupTPWFNj5WRMJsupdTGekP2LYQmksaKbE7Fm8SvDPEsf7PtqRnNn8fN",
  "key28": "58vv9aoBxszq1f28xHEuibkLXVSnp2QzpAAqYwiuwkioxH8RjqGg9kKtj6qgsQvc9jQNLifBBBy6wNXWkZVJGnJL",
  "key29": "3sZHLGH2Ys2gWmJ6tyTguyhxCdyzSQwLQq4t5qCS1nZiurm8SnMQYvJwSG7TGBLuSvJNsHECtqrQqRBBz6XCrfGv",
  "key30": "2Nh2pezEmC5R5YGCnvgJn35w9bPZU2TukJw4EgoPbjpfPjxPjvZP8D41Cvi8w5zRQRANWSWrfeSrBVsYsC6WcJEu"
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
