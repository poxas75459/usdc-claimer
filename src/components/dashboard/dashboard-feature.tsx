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
    "3yTHRVn1YMu7VyyPRPFpN87Fr3yxE3v3fkeaPe96XzynCF4cVfFug9aj81woUA98sqgReCHgcfW7aK6KpADAB7ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFAoEbNbhH1k3NmPMhNnLNnxcubAyzUTfSTCTchcK92XYFgpcjR27TL5VmhZcm5vgU5yMDV7b7EkuHFNDyHZvzA",
  "key1": "X79ZnxeQ5v8oRMyvzkqsMRRTpF5pYJ6ZWvmCkuGr1arFtPUNJQoNwFyCi1K3rs3FADpwcMnfFbu5ZQJCheSMpzW",
  "key2": "4jeTR3WqAnMVthgoCBZQPtsMLPVkpexE4bbqrpTReHCHLnkWfPiGrqXhnavoeQNpx5FBXT7hjWJjFvS8Nk4WvULh",
  "key3": "4DghFu1gsXdw4ijvHteaos1kV6RdRQY7nWmcoT4kyDC8LVgBCF3bpjC1ZwYs6Qvochmi89Br3hFg5o1ehE3UpiZD",
  "key4": "2D1QzXKyQshvVjmLpfwDcm3fLEUXBz2fh3m5GpfVbLpYr4hw3mwzxS1hmkR6HB7j2NwxMNqyonkSw2gB7TDSnzVm",
  "key5": "3jauxwKrW7kmsSy7EBotxmvCHepTvn86V2bsTw7qB6F4vxEdTYqbcH8DN3iY37ya9EEPKxsfxyxXuxvfnYNHcyv8",
  "key6": "2hybPQbLKuLAhYhKMfX3YBYCqG4vi34PABUdh1BZPViwtUTbv8Rd7Eqqb3CE7QkLBRqbD2pfZ9GiyqWYgVADTFsy",
  "key7": "4zzhaCoGZ1HDeKqe4hGsFQkNipumSz71oWKcn3bW8BNMx4hxoyRWGryrWw2NzreNHByzxDWmti86pnzQsEbHbzBz",
  "key8": "Jb9cm2kS7oTLrrAqtRfbcvwf1TTPPp1qPHDCK5791UWigR8YLzGM7ZkSBqGkq6N3KxBZ8g4vMVMVjkZnwhPaD87",
  "key9": "5xF3XzCGpjCfwCM1DAwt3dSSC3HfWCE7hzxetuCraJBtHv9RxZN1WYV8WhPvpMNaL5eLBXNqyuH9fSMDozjNAoR8",
  "key10": "4XibiYNvw94eZ53E6aD7hgVgvGWagsV6k7LdbvuULFHC4YtcwoMB3vVeBeViY9wGdZpyYTB2HYqWmUfuPUd3nK2a",
  "key11": "2mYj2XdDWM8sy6siQtk9hs7JXTW2MZVGH6kXTQj6w8jEv2y8SGUBiTjc1Vjf6jkcj66siJE2ccHi7afbwRzCsWfw",
  "key12": "3wEYqiyKqQFNhfxJ2xccknfa5o4mkuaHa8d7zDanXvqh7Cqa4wUs91jxGUvvFvEyruzfzm6JN3q2cEpsXFEk243w",
  "key13": "38FRMmPbdY51S31mbRyeYRpuLQoP8QAiRvhELDSS5zwZAxpgqPKZGqURe9RSQwbeD6TJTp5h6NHEeDLaJ6Ug7Cmp",
  "key14": "5mY6Ysv64Y46pKKU5yWhQoiNGrpNKwtszkwUCHf8ZyU7SB68dwmX72qYQc3rYJpgXsBdqHEfxq2jvmQJ8v9nKk5U",
  "key15": "4XgswxFqdoCefA4KxXjgUXA5hUq7eBheGUSFmisA5824ZzWchhsnfxUBgn8ftSeKrZRRtDwV25ni1vTM4MErWxxL",
  "key16": "QRWktH2SgnB78WmkGsgsKXk7T7Vcsg7yQyKuPa1apvTFTqRWtzw4ic5YfDJoYaxx52xPdsKnQ86N4yFUid1y6qd",
  "key17": "4RYJxee3Bm3RqWqZjPs4CcTaUNTZpCJYcxovh2NctZLcSh5fQdzCPQR3hLVWyAZxJ8dBTS8RnGSDWdsZ1ZZSuv4J",
  "key18": "2kxPhM1sq9qLo4VsFATxkCgo3qMBpcQCE6cA3caTFkFcDvwJmeQRGpcypyjupdwCf7YMy3Xr9D3JDdXEnsipPzvp",
  "key19": "8RVvn9q9SUEzYXKMNvLfAaHCdric8n53dLpHtuVC2xSG1u4FrhXf8UNQKbFqPrLsFunCakrQV1Tx5QzyCv7XN1M",
  "key20": "5ra8vZP3UYzjTwAqqompJhMtkZK76yCfj3VLZvx9mzwJhMkGnY1dKNBjbzC4fXeWqXbztcQiSGi1D9xAApi1yncq",
  "key21": "3opVTooYjAYB3EiA9z99H8E2tnYaNsuSMJopASvhdCqo2aWg3c8URrxrXCV43XTWryPoj5Rjqvb7EUbLaPSvnBhp",
  "key22": "MdstbC56SebkFwBhAMDuuXiunJMTDxaMLohBVoaUWg75una6jCsKEaBLZUFBGuNx5pstRqiaocqYq774fcdm7ff",
  "key23": "43wMfVWRzdbj5oHVjpgHL7aQANAsrsSmYbvYdHCNo8FA2WcCbi1UdUUxdYJnavrAXohA2oAJ6NasaHx8ZRKjvcsi",
  "key24": "28pWW7kYR1naMUbkToiWCF45KfB4i3WEtggoBBuW983uPSPkdhj8X9w3mKnvfCpGTkyw8SMdqt2MS5sx4b849Rug",
  "key25": "47d3tEXpMhWSYAuiENbiR2TadqoV6tStjEE3iWsmSB8CKewNxHVrqHcYU1aFvZb6euowYVRgr4myDAztwXLvtdSF"
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
