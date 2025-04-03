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
    "5TecsMeqSHTH7hcJ4mbGYY6DgFYwYPVQnvpZ4RqaqehH9ymZDFMnbT5JJaXXqdM1eBBHMjCGVNB3SXDyMgKWs6Wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49vPEGyhbEi27yDktLiFU3g2wZwHpL1zWfzoe3NyNkqzNLGuXbu8HBHYfkkwjkR4FhXrpRLRFSnDX74fun7SisDf",
  "key1": "58Hdx1YXGVFWVhnd4qLzc88rhPxrSgNQa9XDQjpynQSPkBG9MmeFKEJh1VLSgbw8cGu5EvgGUni9f6GpkXVkzJ3r",
  "key2": "31jhzrXYfn7C4erm7tS1xkM8EY1X5AKCtEMSaxRAeAwpsu7doMVcpgXj4Ncq5HKeZ6GfCKXSL9PeeY2RSdJwDBuN",
  "key3": "2HhUDTdkSmSHc3vLiUmWVQPNQ6NAbui1rCAz61reDcapXE49YNDykgPDZoaarSVeuwbPdbr2yJTdRKq9WBGg5VCa",
  "key4": "4m8d7yfS3txzaaXedKBv1UEVMsPjwBKE5oHBG5Un13C4S4VM9w7SquRtbBiwNgreSLpWY1tZqDtHR6ebvQCapjB5",
  "key5": "mXAsmV7CfSXpGr9uVpS61BC7V3PJNdfmaXKpMimU9DLeLaMSzNqQuqaWBC3mTFmw3s9Ao4exPBZEzQiv8domxjd",
  "key6": "4aNUWLsPQWHveCM31tMK3bnUHqEkRq8rwcWeFrZLDGGaVbbducPMYyWUAk2Kovt2C34pC2ZRzBhivSqor2owvVCx",
  "key7": "2K5ZmotarUUqPF17iRKJKWcWBae543Faxw6xkjQ4Ec5Vx2jcYVH5GqDNknYbT4mfgPtnRqKkkThKgHCe4W9Boare",
  "key8": "w4vqtohX7BZY3iZqkXRHUGa7YJ4Jsuaa53GnRuGs68GdHh6Nhwr7CnxaLqxtrxXFx3SGzpY1W7rPwqoPkZm6sVH",
  "key9": "4gwdXxwiDCK7Z2z5DFawB3QK9vzAPBkDC6HHkhsDLoPNvYXsUPQ4pjfYFFKxNgx3o719MHSFp1JtjpPVM93GxkCW",
  "key10": "5BV18YxRdspGyvhubpZn2yMTrvGmDZmogZzg5bxLfAX3Z4JZaBMRmt517pwhfULCMVZBzu7rKEeGrg2b7ZXrfumB",
  "key11": "4GD75t4TgPoA4jKt5RQCpwTrYYT6XvzXznJNRbUfX5438ypJ4LwohHBNeftn3LrrDFrGFuXuauhfDDwd82z5iDET",
  "key12": "5Ktd8cXBi1auDP8sD3NwWePX2FoJVN88qw1XvTCSaWk2RV3BdF3PbArpntVeAGBedxFtzPPBYHGtcithrr4QLA2E",
  "key13": "5vDLaYbvqgVSb93WuyG9DWhrfwJqhGudQFaN3HaRYCgXjcp1BU6sbRoQvn7SVADzpmhnz3Ag6hJrCR2rMuzeWUX1",
  "key14": "2RP6u8nzmKrSibj7iFmj4ae1zBQqTyxEfmDJ9dVyJw9UYhEjPoyAN1fWFVQZ9TPTDJ3Hd3oEsp5iCq2KiczVykdb",
  "key15": "3CaVLFRMiDQZvYYKEjReS6KDt8wuTtjunndSacHLzanmeahh9CkndmRrZBweVZjPfwKTq3zBE59MGhwUqfK26JWz",
  "key16": "3yBdhAXjYZPuN4b6f1xLwzVdHt1Ln7KN3EzitWThNuTcKSUFb7XU6GAiYQ5Dpj9Zik2sG3oz3q7NiVnEf4pEYSWN",
  "key17": "4WeWF8mgn8Ebwes1hPn7atw7YiGpNXDKr8uaedBDEyLtfFxzCNytFcrZGiUeYkaCs1kPxmcN6rCMTnX5Jwk9xxNR",
  "key18": "3XWmfbXU3XpabGcfvjXV4os2Z3R9zzRxwiLTVvarCHAtkCr86hxESPwXDNZuRNaLksx7prVrRJjooCXZ9aatsLGx",
  "key19": "3Kfj1bvR3rpoJtzMAV5gdqEmuovyJ4w29G5LpK8DT1EyXPCf6gcrG5KwzBUthH7LB8YpbnfFErmKcwi4P631GoZd",
  "key20": "4cJC4xSzHdKWiTtc1jg1ruMHK6zzcEfHj8eYycqtywQGzu8iyp6w7Yq3oKEdNR5whRPuUwhRc1tqcA2rkN4QsbFH",
  "key21": "5DSm8y3UMKb8mDCXGwJqKkqY8DUijpCuCUgYh2cFjr8c2LrkqMz4QJTNhbVYvFE879nMhEG8DTTfcaDFmsCXtJSY",
  "key22": "2M7ktbnh8ArZkMaLtN3iLf5tcDwvYqRtjm42uyb3CEseN8pvcMABTryosfYafhQePGXhacsh41di2zKQ3BhAfAY8",
  "key23": "2ymEdUjmGjjf5LzH1PoFWnj45pNf1He77GvjSmbJLY7oWjU8JQozvy8HtL1c6g3njmda6GP3r7R4fmRYzwEFNoYR",
  "key24": "5vhdNZzUUqdXwBrcrqCWoPQhJPUfUccS8gSzxSvveTgAQggRcFdnrzp8vAZ7FdhugH2t9HJ3Cea2fFiAfgUcetJW",
  "key25": "3EFCWFFfbPBsdQW1VqHZfNyS6bakUe2s5kyHYVCfvUYsUo7hFyonNPy7tZZYS5nUB4S24fbaDHUcoEnNAUfiqj7X",
  "key26": "2bnoE3bizxM94vDnLVWUuqHUfRiXRGPVJuKAnTWWggXarBRsGZUWunrm4aMGMsKV2EykGZEStdQxfa5rKCajVboM",
  "key27": "ikKzVe22SWUKzGNZpeZJvqu4tG1CWAPZqBsXY26F7mWfB7vodNS4ju5MoipmoKZdxQErMvXYG83z7t3nmSVtkGi",
  "key28": "55UK24dntPW3ZFG8piXR2mxcdqqqxbjKavqoBiXwYxGKBRavVnsj7pfmbCbRmgq93QAvN5fbQqMERok2XmLSPc3u"
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
