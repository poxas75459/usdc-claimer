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
    "5d9ty7wcK3Y8x8hApEAbDqcm9bgYXURgCKwkBMLCNXZA9FahgUWhMXv6Cx5KMcbtvtjujouHoytRmp9PFG1nHbhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txhE3iwgRs5kDaKUe2PJLaDPHB7i1Zqw7i1u3fwfLoZ9hWX7EqMmQKeQMNLci6fTsgMzkrP3Gi9PnMeCmmYKn4W",
  "key1": "5zDHPMhv1UaXmFBTofD4vFMGaFiYovfMVy8vHovWWnCksErWpViRe19X2VYJvmZprXPDQoGQTNCM9PgUrbodmCX",
  "key2": "4LsFfMWn7pdp6kddD1yFBfji6ppFiSz654msTFMRcfHJtwALwV2sSqatkCXaCm2c6wqpa6yqQwFmDvRMzmTuTmfY",
  "key3": "5eAfrwbExcBKYrkgnrBYrY23QdNNxpm41ggyn7kCwbBuSsJEhDMe8XiuuEZfcFfEgECRdR3NQ3RjQkYDfUn1TyQo",
  "key4": "4FwUGEb4esAzEp9LxSWoEJHnVQJT3TSiVYMqBiEamwo7PJA5BgzGbH3AJbVaJWGccmTbUS5KGuZUZaX2kXrPj3gc",
  "key5": "2WvCNUS8PbHD1V6YrDufRkruMWPf2En1SJf5Q8CkdfCN5niBczJs5o9QVS5Sy3UMRdJyXYDpHsQzJDYViXzXip7u",
  "key6": "3M1FQ3oEhBTmNaJEJPWT5RLSBbvSTdhD3rLhMQ4xxv84WdwC4S2DkVaSEVFg22gENu4NZoQsNa5tci3MZhg9htv3",
  "key7": "2LYQv5RqiHgdkifVLRGsT5sWT5adgD3YkbrSH16fz6NHwDo68fsCQaeTDvfCr4sE379sQoetRSJ5WKmLsScGqvAa",
  "key8": "3eZeHRZjr42B2xM4cwRkgwXds3aVhEzLVGbvXbGgHtWcvLk1AkiTSkYwbwBRVZnoSXwBD9DeShykchqJQkPkXXxR",
  "key9": "5MpXEvCLfYZdhs7RkrF6HYBx4W9GyQeGi61VanKYs3aYSHCQM8t2W8tDxvDbuohjFsvGrAgyMKWzRgisJ74Y3TEf",
  "key10": "NqqAnca7G9z3DtFGCC3HFeuHbcqeGBFzicgnk52pQEZfDcBv19QX48pGZbqdX9c5ZKKFZDqg2c6w4LspNNaEy1d",
  "key11": "287jvbo6xDNdtJPTj6HThSYP7Bpif8wmK2a3P1tsBQW1p2ZHqeh26MuLinBqMcFDSQvyEsQ7gAiZVk43Pm5B2u2V",
  "key12": "5kjcWpmaBkW6176Vg1h9DpCeFaa4PdRkexUsvdRWRnKdTiDzEXFqEUsnk6F8ctKr7okGf6fMUwFyaP3qhXTnAddc",
  "key13": "4VNu58fWFY77cY4TrLHkQJTu8fzsUhVtBPc9B1fparBhQ1oo4T3WqutvncCe9CJnPqd7W7DudecEFQozTXCH764S",
  "key14": "2fw9LXVzDsK37zJfNMDPj7Ea8mfveXef8SECRoX7ecUUDyotpdDfVb4DJLz6Pcutgrvr9cDKxD26rS5PYBMT9DxH",
  "key15": "kozRTP2L5bf19nw3yHWY2KKFEqcqvFubxAZo9Vy5Ln1oUNX2PyU5URhLtmtf4Rj7hM47GcERbLDNULR3T1LpUZQ",
  "key16": "4EDeRQSaKz6TVWxVVPNPpdNAhryhHtd68JwAFMtGYiU41KV52Q2UJKQHy58VF43yYyRewtHfQrcSRbiZm11x6Mmd",
  "key17": "N6gm6RYKQo8oMR8xVYG6A6EEs9rkdTZTWHedMKC62iBFeC5bkA29Z7NJTNwjVyAsTYSduNQB4dwEy452SNYccc1",
  "key18": "2Zi7BYhoJaj5kHjGo13kEnfFpVKWsovdPxBXxx3YhifhtA5REfhZ983u4ucu9cptSo4EsdCcQJNN8G4zgZreMGSr",
  "key19": "3YXqfpiRqn1cFCM6qZi5zoeoXwC3pq7Pu7CEoJpsXkNDKGCX95JDrzTeNiCeyD933sT3QjVzhkGHJUroMxdvayuN",
  "key20": "2Dz9oDPShWwoWqNcwrsXP2sVDAqwMAMo7grCd2h9WJ7V4P2YDjBnNXaoHZRgxoSgDHaxYC4K1ZTVXYTYV7AYnA2P",
  "key21": "4NtooYEM3oNynVR1eneGevPwWC8hNzh8gURQLaoY1zCwtcqVw1HYKpmC8t9JormUfgZk4SZarHpygPShKvXNxH6b",
  "key22": "4A8y9KWcMB7uAWg36NZXnfRDb9m8rG4hadv2nA6sMwWpCJuM1LVXtCezuzM9mXBhQWHgJs11CHcSJfXSmXmX51fk",
  "key23": "5czaoDhmGNJdknrsEQV5EsyDKusmc2kLQffzkHEGK9PA3inJTjWqDDmrK5gPTsBXMgaGkCa166c68hcePMgsLZy4",
  "key24": "CeFJ18rZbabSNx9jiHwmMGrpEJJ172yg22EQXdCFx1TWRFipoMYKXwKwcrUyG4agTtRnwdQcv6Brn3EALVsD3WH",
  "key25": "4Ysh3pTPQfXU94Mc59ZrsEXqnHJtFuSQWXP39PREdqmiBm8GwJyUav4mrQ51CXs1PZNcsTwPfUc7hCuEmja1VxCa",
  "key26": "5sNYndQwKW9z45dM3qoRZgqt4uKuWbCs4My9L2XCaWTrb7JGTw1bHemXvrgtGqZutpaP7b8zka6E1K9Q1hpSWQdC",
  "key27": "57rLJQfkZGZBGptxFS79M49UeksMrZfzexXRfLhuVQUZevjSBPxUBxdVVqsZWTD1TPohYBepCr7H1zVG9M7wBVcZ",
  "key28": "5w4SJvJATdZgZDVUVGC4kaCGvkKtjs4FBApRKkB3egRURbvZXpnJYGSvnToQNCD9LTcKTzzBXp9cJ2P52KQuiRYU",
  "key29": "5kCtrDn9Wf8ZdfXgcqvwS9Gm6a9LW9SgVJG7rXzi9WoEW76jHdA4LZdZyNdM5zTBPt7NJz6uTQxuheBv4f2ZopE3"
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
