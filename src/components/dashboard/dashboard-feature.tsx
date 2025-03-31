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
    "38T52HWzaSG6v3ANpjxf8PqrEh4kzeK6jMvpwT2WjiNwyk4h8VzCC2GYxUwvEKvsnot1eTVcAfwopQCKJ8aUvrcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KVRMq43VLfYtC295WVZiaUq5zfZyHEMvjUNm7YUVaaZpyC2kSbjnVWJraJXYV9zDrxcruJyp5b6qrY2sWKk349",
  "key1": "4ouY2eWxBw65XRCj4QRLN5ejL6rdsraXTkotYP8FPQ51yhdPT6jpNCjxc6DiZGK5gWW7BZXoqJbjJJidgHwK9Eri",
  "key2": "UupEaNbauCTccdYZMiYkELzCu8peZSGFQaivuwdtay96cTzVgrykTszU6qc97Pzg5QnjwZwaLDkjYTVc12xa7rz",
  "key3": "4SW6pZSid7QaqFDNqCFoiGLMjQ79tebg2ZpmtbULpbPJfXnpAqsZrywb8hGWAmEViytk9qpwLJXMAny8dorMLsQb",
  "key4": "3hbBUumNFkyCiVPacUfA7BwntfBNsNch4NUXKySGG7RRn5qC8GNa5SM9C58rxfdyenvi9nY75cEsJd6zChV8f5RZ",
  "key5": "1iTrMsVHjWhYjjh8cJqxsQWptwRaTiCfnQ5wqvMZVcmgkp9M8UCU7BYPBmSH236k7aSEjCPQRqGMvyUC4r5v8xR",
  "key6": "Tard78Wo723vmLexZBChCJGU7871HCWER5rLBS3FtDWLm8FEkGKFj8ueD5dLK4u39RaZaDqUe2jT4DZsCwT7dMH",
  "key7": "3satEr3zq1DkESkxiFENWBUsx46fGV1n5vUJviG9pNTtPkJ1dHiYRjtYSFE46BCGhKXSEBpfKNJ7mzY6kZE5BXeh",
  "key8": "o3zeBgVp8EcHZuP5A2TnVSKxz6uW83DMBroiyTv4j2pHeYRQ5g2kXSVZBsrV7TSEbPuQEeHkVMgpevB2398pTvR",
  "key9": "5mT1K15Uc9CeTYTgLfi81tp2JVrhnzTDvWMhnvW8fT4gQaxoQB99o3stjavSZMTnerf2cAyE2UUvp7cc3dEmehmo",
  "key10": "5HqQjR4nXvRMPFjbe7svGr5YRURcBrF2WaLvpV2tqG4aYAjtcvtxsYyYrDNYHfZsvHG1AJzJiqJTYUxBAhGE4Ycj",
  "key11": "57tvVVEA5rPFatLaw7ci3BmrPz5keYTFSWXEEW5JnWapYKGsC8hhPCht3SVpSwUewTUdcnEVETLuvMYp3LqwpRV5",
  "key12": "3EkjCigMDrxtPsgKANhFDuaWtueSDA5EdXPuhju6RgpZnVkf3VqtzFmatDsKaGdCQ8zHXc5mLXzKccqbLH5YGXFK",
  "key13": "23tXqzZtWAovRS7uF8t96GWG4r7ZZtUuM6JVPqgKrLKRuKMqcMjp6TEfGruPRuJqh7H6wf3ZuKTzXJW2VXxQKsVX",
  "key14": "3Wu4HGU421Wrj5zCPAWWHq7JLH5eueUdu28rKqZgVaeesySa4LgRDn63YNkRrKaYDfGP11sb7XMvnTXLecNhgEsy",
  "key15": "4yxAQtcuqkaV9brCoUKqR2X95DnBtZifDQ7AiU5Z48YfsjhiCRD9NuLjKe7WRi3YAUcZYAezxHgtRgPkmgwkEDsr",
  "key16": "5HaBRKX1dPJY9Uxevan7rCZtAEk5kDmFzY5X2tzayP4Pbve6PkHFJKR8rhbVdwRHagCA8iDbK5Qdbze1Yx4zhHhr",
  "key17": "5GHosWRGd8p5nfh9Dg54N5opXBrLRA17u8wf3Vvkt6WcwHayjnL5SFnLEwhRz1jiVjAKALrqZbxbXi23XxNGTRSd",
  "key18": "4BnW4auPvhG1HoS95Vo5FSnCrVivuZZQXgLF6SeYPpU7gMRqoYjPe6yt8yCjqYyhHKyR1QmzV4W4jHyHr7goFNbt",
  "key19": "42U3KKjmsM5QteXuzYBrbPNvryDNZAoi5xquRRRZMgFE8oE4N2uAwhpBSonkyCcogN4W55mmtdCoGgsM49uPW2po",
  "key20": "42Wbmr3qcD2qXaGxAhBSimQtZxnoCHi3TLhCXPTDrXCePGx8Xa5grJ53kXm5kK17kWA7oBvsfi3E12PCJsqvN9N8",
  "key21": "3whXBtMkMpkhEteAJradFq5egqWKrFLJxQovzv3hg9mwPsgJxfJN3EKVTvjZotNQ2kFJBeL9LRdmuFmyWmMG5BPS",
  "key22": "3mhcdStsfiuAG5QHQk1MS7BPDExvaWapWZZ3KT9kZjcdYVrLJeE87hNMMx5HUU4RKgn4Av5jRocCump3MRQR1xhL",
  "key23": "3zQRCnrtsWns7uhdLT4wp4T5hwnmQGxis4VpoSdTqFXEpps47SEJADtERSQBn2HUvLzntMrXaa9vzaR7WVbCVGcW",
  "key24": "AYebVoDyxaqU3xqqpPkeEjHh4B9DZv3Ca1kKZVBTtb8cjMaAsBdHydzRwhL2EtSY4VHyYAxnNjerEbppyqGtvmq",
  "key25": "5DGY8MgbfzN3EXY7fr6W3cJLKT9YBJKCsWfRJsZssFKFWTrsUoJ4rW85m5psufTHQL2rXbZb9Sy6j7h3whXF6C2N",
  "key26": "1QLMszBhcNCfW9XXkXbwru25xmNSBrYv38fUKK4DeMYyxddB9uB2Ve4aPmYDCFVC8Fx54sjyNA9rxJAr4aHmEWG",
  "key27": "4YTLyAYcits9LkVuHvq74rut1i6NsiUWeyGxEbcMudKAU3aDbSTwedKqFRbvbaeaxYXtPfJK3appae6DUu1rau2V"
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
