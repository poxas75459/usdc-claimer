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
    "CtYVWsg914iT38EDKom8PtmfiDdA4p7Epd1UZVDBshP9wzEuh2hf1LC6qGFdf4t15X6k4PVh4mM9U9GvRLozURQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzEhN3VXF5QmSVU5U842ekPtkjWTCaqXJuJA4SAESAoQPrEjLiX8cmy7PjhQLzK8up73HSkry2tWiNMMxyYjp7k",
  "key1": "3j7D8qVDgrBTGHQJTH2iTt5pATARqhc23RuWQbuSAVb8peSV79rij9hdpBSBmqNpAzSAUE6RVcAFeLqnnzz9sJpY",
  "key2": "645dQfRhq5pBS4v83owXHMMxi18dZjnafUxReHyWCwHezDQjDaQgB5YDF2YDM45BxsUfXRHQSCyZaRyqnQXFvuFT",
  "key3": "2GUMUVqMNc8JtzxCkNcioS7SadKYmzrKQARb87WB6zyKPWByJF5pWiecwx9pcDp8t5bb5srroaseVExSsX3tDFyR",
  "key4": "35mXfmZNRhwEwBiz1exsqeqLDAuQGtf6tiQswoDUtkXyJMhg8PfTnfeQcoToDvunh8yNHXNguQLupnUop4WeaVWr",
  "key5": "DBHE7eYbBmT2zUF5RLNyKGBaVuUxToqWbTPCKSGxDsoK6qXL5SMC93gGxhKNQCkFpBnMirjxijs69kwtJyrmne7",
  "key6": "cgJmcpDsdFMgxu7ggmJPCzmfYdqreaX4tjFHhDF1JP2oU6vuAcDog8u6j6sbwMP8RKZUcoXWfRETwZtzo9wqy7P",
  "key7": "41vsNyUmUoqcm1LTq7L5iPRoVR6uU5LCAqyJTmV33zTod3QVs3SuLVjH8aNBqvZC7SMwe7yarLz5RvCsSDnmmaCC",
  "key8": "2KJU3XPQZPLgddt7EDdHDjS9kJ6nc6xxrnCsGMzJDu5EUAfuRFKbGNDks2HcCEpjKr8aRSN5A9LqiLJR755vGdYE",
  "key9": "ak8BpjhNPkq5nZJfPS2RRQoUUxEPMNmX2pUfYg8jG2SM4sueevZzvGAFRN97yNPyHKcBmy8q5K4KVywrjZYgpqU",
  "key10": "3p1g3HGSfRU5J15S4JNoXp5VqU9N3GFycoFvnQbJfRX6f8QQtGCJmCHoWKKKjwapbTxVNmZ2Sxgi5pUk5yrSxkMa",
  "key11": "4RrKqEbfrXFKK7wvHCaTjTuH7WMwDtXet1u1GfMoz6DArJRhuS1eGyFz1RHDv2Xg7USQPD1ujogTg9UG8YKSMoVa",
  "key12": "5vf2Ps2PQUg11c2Qb6b42kkiWc5r7HqEUzG3QN7UHqu4WvBa4CEaZRXeVfyMmsJZzsB1tJAvbSmHWZvjR2TzGRr2",
  "key13": "2TGAwxMPK6WNjW6U7CF2ujrPKTjAJ8keih5viFBZTGWNue3deBfr78t9smdzsRaBRijzRwgUc8r4iDNemEv1FYD4",
  "key14": "2Q2t2RTx1svJFDvxWHYmNaacRPTD3hgRGeK4aFka6TT9dPau7CT7ktPn1yU2syEUJ28jCiSRHeFoLPfTLvLc8Xbu",
  "key15": "2xBcQuXBwfhiXdVyyQpFx4M8FFMZ17d3rhca1JWgKr6pCH5WRYE8dUHUctqX1ngBPoCDtL3wNRdRXBQbKwHJgVUy",
  "key16": "65SmA55iCmsu9dFDJUNvDNHQyd3mpsN4xHUZNSc7hXZzZmmhNBekFvvA9mVihTvqSktysLNfvXxKneQBduLFSykS",
  "key17": "3A7PcqnSFVhErcFzxLz12KdVgBxMohiqrKtMfcWfXe9csKRsQUP7twJkrAMuDk6wQhxhq89saVyUi4xjJ78NQBMC",
  "key18": "4Je6E42HibE3W18bXN5fcGCojt7kGGXGFKCZF7BdkP6Jduf4C2W4TYgy2bUdZaFVDsnqaMYHmbLstEhz9K2E3fWt",
  "key19": "roEh8ZTAmCmRWVywrDG9R1kLtGUp64V21KJ3oMycds6i1WaybBhrMjdxuMdmL5YvZ9b1iKtQrb4aj1Cc3D7P1zx",
  "key20": "J6zuYae7A25mwpgEkj5BJDTkMddEVcyicA18jb4GccaV37bfV5QroHPo69Mz17aiR5vpeEy5kC4sFXJ3yyUbeRG",
  "key21": "2VgHHH5rSGDExak6DrrAv23zDEBUNCw4ems4xBsXengsvqtks81eZ5thCdWtybnGhWnYQRXs6HWJyiirrCCRLdfZ",
  "key22": "3k8tQWcH7cR38YqoVinoHKB5iRKTLW2iBnSdezthQyPJtMgCFWBRny3rqw2aiPruV7xc6A6iTN3fyvsbeupDCHg8",
  "key23": "5MHzF2QAh8Xt56vvNLUmnm7kZHPjEPm3QCtmxqRcqUBMGm1CqfTxMp5cHQje2B5UPZes7X5eaZHgLrMABinMU5Ei",
  "key24": "4waQLBW8bC8H7RcPXemY4hAXD4orzBzdfrrmFuWZFEWhGPFXLW7Jc5iRHmTMCRTvqAque7Ma3BkZUyyfCFQC3s9L"
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
