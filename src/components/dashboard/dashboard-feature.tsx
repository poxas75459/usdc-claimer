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
    "4xW8si9YC3Y2WmSQXNoZYKQWouH8rNrpu5C2j8vhxi8Ef13A4zAbJc1az4GSw1CQB2caJsz2h1c8qcWy55t4ioz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65iJTRBa6r4s39sjDfFTC69spZUMPurPscb6kGei5qgUjYZWaQmottdnSi6RPhBDDSwnzjcEpafh1rez4bBWa6fp",
  "key1": "XWVTUijfZM9HpHBguXuKtR4KJHa2RMkubXmsDKFTmqkHZQYQfD5JSxdf1MwHKE6gPPqtZnM65iMKtEDXCHrPaCy",
  "key2": "26kZHYwwjkkwnfzGx2y47Sw5fmeoCLGnQg1fP84Bw93AVG6mQMY1rY9p1Dt9FNAy7MDi5NxAoct4EvPe91PQM8dq",
  "key3": "4JucxCHJWTwQT8fF1YFZtuW7PEkeJWAC7CLnse3fQnvHnwDX9j9xD5jRMMqPmZka4ve1Z28AXDzrkMtpx1ioNB51",
  "key4": "3x3sSejYR6gnpYghxtknSMYJhLkjXdodadDG2p1er2MxWKX2mrWHmM5NMbq1DUzQvRYAvmos9Za8wL4pbcknjhvU",
  "key5": "3QZTxDWqzsiMkxeVqQGFMoAFMV6H28kKqygstGjh46ZwKNSRHV7G2gfxWiBosEkxo6ypKgCzsfXmqpmBo5xc7bqH",
  "key6": "2WyA7v7MiDJrdtBc5yywGFfZpTeCbbH3yQt6Gs8RFDvp88VXLoNhU1cpPoanxushus7vFELQKt4Pr8yuvU98ePoH",
  "key7": "5h6XMT9PHgNQhTYVAwbjoLUvQKhNgaTwdBBRD3znHfSwwTW9yxseDSaqiMnqj3iQfXPcUGQXxnv5ThpGAqj8FMk4",
  "key8": "2v1xmb4Bj4NeZXSP91BdyZLkdCBxg1iiiFq7UtWJMBYxvWSud9wmvD4FqEgps4ZBkPSJgUhcjL5NAyNgLPDDM9i1",
  "key9": "4iU8HNELDAKbZvG7dCyUuYmG2oBHF5BLJCt2cUHawX6ruFPH2Hg4en2j8p3RUUpMhA4552LZ6QX56mXUaosvfs4j",
  "key10": "oX1oTFnExYiK4ZAZi6LB4UyDcDxRfVG2BQSvesNaG98NchAAps9AC6ctSwRfh77A5RUvUD34SSzLAHtFUJ9GxLo",
  "key11": "5L6qpjC6GXWE2gPMiKvq1KBbHth5LNzzKvdXtHrVW2jFT25MZHm1e6vKsMvuT2pV2CtuePUQEC5oqMoWFoDmzUMq",
  "key12": "5c7Lwc7YC9FixfPxU29JTqmduw4Eo6b9ug34fQhWKkzEYZcpZyaFdMZHKZ8wBPHBoMCsJqw7KAEwbBYX8q5sGB3C",
  "key13": "27rhs7k3dqeZ1ptfVMam3cPWKVkhYgyTxmEmH7sZCkPHe5Nz6nS92KCRxsu4dPDMEVLsQVqzDBAbKgZUNg8imdTt",
  "key14": "4prHXP9ayNiLmRCCJwkKdCkDts3rTSfCdaTCvxcYADY82sosnw8PnB2Nve2ej8swyrdoyCUUd6gL54wsTGT5xRDW",
  "key15": "2EKEVwBXJf2FMB8oLu7fypvNQcYF3cAXdm8VUADgecBLcQTA7UtiNZm1H4SH75evKiM4gsnfDXyLiHZYXww1C5XL",
  "key16": "4aqmzj8ZjYfd3xfdyDEDpYvKCd2xV7THkQqaV4vdiFk5HAse4qm8mcW28KkpyApa9mPKycuRD7UcdoA4gBWwhQ6x",
  "key17": "3vQYorQYLFbPpz6j6q319LEHNXpXbw9u15YwUbZa1bLfSFHiEfB1hnnSAS3CYLuChrqmvtoasV8VfVZBfAouBQSP",
  "key18": "67e9527GwinSKCN6XUDCXHuf9cF97st6eTb9AoQiyCEXEcLGV6ppMVCaTU2HCf2JtXWyZc3XdESXX5AGCTCm6ugf",
  "key19": "245ugdTxHgs1eFAESXUCps4xkNSpzcyFXTrnqVjRr8UAAgoDGead8wzvPojnEK1RHtbTomT7LZi39fiRAVSvkuW2",
  "key20": "4JHzk1fh2gqhNQg5zq63ytFGiuE5dQu1Yfh2FzbCyWgBBZyGfx57xWdfoJC8ULPCoKVPh9mkotSR5CmHoPu9rvo3",
  "key21": "2t4PmBAYDYsgi2ZtJkppFRhXFFS5FSeNj7MZvEWxHqnVYiHcRDRifMFHW3GWtDyx42D1AfX4JEGpf9UzJajhJw2D",
  "key22": "3zKBwqHzg1CBUQVBMU59ScqXhEgc8VYNUYdx9cCKsqAUHGKtb8KyHjUb1HhSNNffDBmHmTNibtWHPJh7UCFa55FG",
  "key23": "EYyFzmxAZxK2tnxbVLTtfGG7uc1Aj1ixJZk1FRoXYXqa75h9GakW3J8Zh3bZ2DGqQU5vURP6DFeN7LnmnUooRjD",
  "key24": "oMM3Qe2T3WsaXudNJybCmRSz2jYj7YzrDCfzEccUsXii6JX8s1Px7kYzVPEzJMrk2v84sEf45qiTbpG7GonaFx9",
  "key25": "29p8pDLA55jX7pRfuqty2eXDS41t5HDTprnsdvemMhH6hBcfHTUGtPsHQa8uBVGHTTtRvXfhVdPFPAW1rYyxxgrt",
  "key26": "44UhbmkY4BRfDkEYgvLqFPobXkVF2tJPDe3HiCWGYrb3SaSbhQjf6F1RXP1U3W2zP6iniHyQ2Ud3PnEeeFJEf8ri",
  "key27": "3DjrKSNosbmEA1es9T3QDDbs44tWHcX8Q4Uk2LaTiUMrzCFDRanfRangM24DXWcSW5tmXvHxPZNbFkEVtmc1Pv12",
  "key28": "nuHibJ4jWfQsHU7XokxEqJUWJFsAX8RofwA2tyU2sg7LJwfSTwEKCQZJqz1e8x9mjhQhUYwqroWcmHCNKR7RAPX",
  "key29": "3wZyjnrUPZteny23udcycGyDqm18eu8AYZ5vStCK69aSHSuvXfhuuAD3uB3QBfqqty13zfyWtMr37BcnXGnd3qQk",
  "key30": "2tbXy2jDqMwwFEbN6C582jxBPZuu3HeYhpPiMC5uXWcKeZ5QsoQm6WdFiPCrY9qcDMtATKXhNHKcfgDxukHaH7m",
  "key31": "45gV1iEAsCui1sipdhV2Z3gCRa7M2yR9FpU8nDaBDEEXNWY2XF1v4EMvnGZfqhT31xtPfT2paxNaJRq8GDStkXin",
  "key32": "5RX4UYwPRCyMd2LPPR6e5Jmv2b2oUfaLvjDubPxry5oNYLS6a5S13tRygGZAiff85CM2H5V7wq9Tp3bJkjzqeesq",
  "key33": "2kgitCJMepmZ3eNVPUuWqUUiAhrzF4BZ4cKVofyZdVKjMAKvXTZ1V5xaTSNfF1ExFKzm998DmuPYTSygdx2RtEf7"
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
