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
    "PfYmTvZ5Rbpi7aqqRB3vEjTNL98ZUfcfRgeATgTdayJ6Afh5apMVkUFe1jxUaK8yRUwyWpayRDhjh7QQ5ez2X2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9WEDY858FJM9X7EHbHy5JJttDNerYsSUKmX6iuXRQCx3eeboBrtGidSN3akph8P7sianfjVCrf64EmPBzsJj91",
  "key1": "65ExntCkgJkaqDLtT5aJKrZzn4oLPpDfzrE3yLo1KuW5gs5aYm7r2cuvLvHsXdgdAbxY3cBCSmF8seY9rjQPMEhF",
  "key2": "2vRcmqcTyWS45e6df1tp9fSN52Xj1qnd2UkPBNGLpvmDuZWGTYSp1a9saMaCpAz9GHCmhZ63Rowho5eMuz18jgh5",
  "key3": "21N9p8mYr5Tp2X6atwAVCwaxcmMtQEsoRgxaUAipVytHA9drMLprjEw2wUZsm4MbhrztahHkuA2cXag6eh69Taz6",
  "key4": "zUNEkbFKSvEximGP11B1hn1MztUtNGvxfthXtUaGaMiAmr6JMoXGnR8ZjRkoFBcocVQr9AMYyDjs4aeQ82h4uxj",
  "key5": "bmQyr3WSgY23fLVTMCs7Q5xjAg6WQndYdVaiTEnAnXDWcDPkVEKjvNYkdGtdCs6TbYzpXzxTBNoqqqD3nCiFaLY",
  "key6": "1i1BSBfHvWcJJnTS9KjvAQHuq1Tk8MWe6DH7KmB71o1itFUuGaeJdyB4MEn117qG17gGPSbkiTZMRUgyDy7bfwu",
  "key7": "7rMJEyQmmBNDi5UvKwiNC4XgxSJc6tUWYEKgSmKRCh1UUrkJfsXw4vdYn1rDTTP2ja2tntRAeynwkQCLJU9qPAa",
  "key8": "4weNncq9aD4F9yrps5szehnAqsoiiBuuwsyC2aMsZ1RT1enCj6dCThF5EWHvnDK2iyUDjFN5ePKGg6pNZroBqupb",
  "key9": "iBcyEF43t9wUHTxMWYRj85N6extq4Td5R2WeNJZgzXfXJsRdZYnXTBhhWovjpgLxzERbL6usVwgrCAGeaQfmS3k",
  "key10": "2YrEtNTwv4Upimp58w6MeUGY9nhYFMq9z39V3nhnrMabCmTX4UtaFMgrqYqm3CzZDkKnDj5eKdo4Tvt449kCFB64",
  "key11": "g2p7efSXwcrp5mcXvDuVkHjaSZ46s4vacgAimFvy8ccufNVXjM64eMH7WXm73LBh566KTHJZUBtwkpciEp4oYnC",
  "key12": "4M7y3eAytFxomMMib5u7LpB2i1BY8mqP2S73MWWjRkX1oKQ5QGJW1rqiwuAAbeBXsF6Z5G4V9rJxtENVbjLXbo8k",
  "key13": "5AenYQJAFQUzAsSqcdU9rLuAEbbadXubVyrxVcE8KKQTYR3S7VeXF5m1ZA5LqwsjyEqxDce3onS5ta7GN6TsntvR",
  "key14": "3E16VxDfYhphCSXoasPKiv5GorGYtnyaHcWbsv314QCVBcp71vwbLLoXLMZqqJc5mjzem7hKVP1AAGoob5ou6KsT",
  "key15": "2CCPB25SfipC88R9Tg3rTuAhD2QDTXrdpRkV4Zi7FmS4Dz3KRpgxFP2thAnRomtAV4cfnDNspdW8vUZBf2kSVLVq",
  "key16": "3ngTv3Lnzcw8J5ZecjCthyX4qR5vVAMcfT4haXqrd7BJCs5x6D7Av6RJH2WLP7fVnMuCY6AQisuEBDg5kvydPPab",
  "key17": "3vVkKhcpuEBMmRrWfmhV9d5NfksEZneRBUR6cs5uCqQtWSxSWvmYSzoX3jTQHfX7FKFzRp9DVLDcqSkT3qYZ4Zik",
  "key18": "2Bbqg269Z3yxndJuaRAEzEnPWwWEPvXnpmzpXfmmjWW7i5wQsCAHENmbSDeJknT2hhmdz3Fg6amkvtCfVFzMfXDr",
  "key19": "5eCTPTfxTdWaa2Lx33eDFjYbXczpia4ioP2rZymax7ErMPWC11g1Hq1piNRfVUQiVXKYRnJzMHPpEDAwQujQecD3",
  "key20": "4ZY4vEKBkKAWDcb2Gg1p6QayBDYWvBVGmtgriCvzmchikhzeYcsiAGDHVHiYe1bDycVLbmVxhJFEivgRrmsvFT1q",
  "key21": "4cHoidrDNgcsa2Bb4Qk3V5toDtbWGvKnRjNBrzUhRSfcembVtZqjhqbgV3epT5rB1ux9Vqpk7jFJQUa7Uh8oxr7V",
  "key22": "2YgGZuTqgxjFbczgrWqV3D6aRpDes1BHaYWWZ3xRRJES2ztpJg1iSPQqpFb7rVkN7mY5qG3PHh3NBzbdC9LMayLn",
  "key23": "4pK92DLgUoVRLgq32HY44vwPhtgNLkXHvg3hajdScBH9VHyZwrsr1We7k27NifdaAGHXrqFJGmAxoDFvFnvMfgZW",
  "key24": "3raSrsxzgopocvWVPRB16svj59tY7f7izh4kSRCGqtn9ww6daooAcXZNTQDmHJz6srcn8AbFUddwe1zGmFZnqsFA"
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
