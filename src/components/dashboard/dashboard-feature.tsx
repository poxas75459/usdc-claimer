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
    "5XG1urMQkZ4LTqxBoENrLuFrNDoCSMhSiPayt4BFBrn1grDUWAxhrSBUaA4X5RjsCe2M3maoo6Ywtwr1pSmqxCJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPot1z2mYvcSDvJeXnjsQzfEbrCqvdDp7WhpLfHrJJ3kjnV5TSZR5SS2evt1XAwiseqs7ucdPui6NxMPRigKmYZ",
  "key1": "gHMMocvR8wUjwDaYJDsvU3QmT5gNyH8qhHwywLHh36EMK3xotDg3tr7Q4CSZkjj4XAZycCj3FHceU2bFpaFNWE3",
  "key2": "4EqSFMdvFWkboiWnsMhZPw57t2Mf8Fe4AK6CgaFLtfoaACpKM4fY8Go5yifSyWamr2nRuJvzmeoCNUSnpVB3o3q7",
  "key3": "jzYuR5g5tXWu35VunGqCn6QZtCNBNhj88JnrKCGUK8NYW2hcF74b2HbqsVebEkvPS3PVsVqTsjDjEjbomfZdZei",
  "key4": "38tmep5AsaUXTm8AB3ef14wu6u3kTfePJ29uWoeMgFV9RBbJpw4sFMyqr9Hnmh6j2EkbZiWLZv3gisUQTuWVqrJY",
  "key5": "2HtYL3BXruCNhRYbNcNRHGSwq5Yn6mD2kYQ5mXub4QHCew6Dg93RJ2d7kQn7X4Yps191sCGE2x4xnvSADtdRtQiN",
  "key6": "4PxDRwB2aiAUnrTQ5SMPF3DbQbU6wqTCLDe2wAww919b7MuckRHGvv62tNRvRmwHUzUUekVS5QpwvvVPtdhTDLK4",
  "key7": "348U4USnSmSwBnJ48FTre6WVfWRXudNfJH8EvJbT5LyEWtY8N1LooGb6oW3tjWRymVa6D35Tg7WZMaEvNjcycm6J",
  "key8": "1YuxvuSj36sJYhHKaK5hoUaUdYUsrcaXSdMRbaJ2d4EDnqixqTxxmsvZNJcGM7rNme7Vk7CHB7sbiMiTZCV8qFh",
  "key9": "5R2gLcPMYJSHej7gHp8gTemUygPVsWJNL2iL5osvPjhWHxK7jKar6hoQqEMx3ecGrpwp2yTkaH8f7JquSK5PhjSm",
  "key10": "48rVj7xBeG2eDa3vfMrA7UdxEU31QLR2mZehctR2Dmzd7aPpFUZ8hQsEPPux6SCPzP1kFiPinNocu4tgMtjuGYvg",
  "key11": "4xkhrHi3QDN5U1Cy1tjCetFs486hiU9QTFRm1Tf4bTDvQ1kkwu9cuC3J13ip4U62RZ7xCofGxSY9rg8ZMLp6vMoS",
  "key12": "3itrsp3XDbYJbGEtFAJtFK3UgmSp5ujLFdSsz3qS9R9HBrBh78g7XV8bfyD9TKbxw1CdLK5KGb2JgC8CtpmDv472",
  "key13": "3T3dxWz8kAd3kxXTRzMA8tbsSgoUks16znnyyzWHvfiJG54FeJNq7qfokMqHsjpg5NFHHoi7VFtB1eq9nWBNuUaG",
  "key14": "3BupRqivtAfSDKmYDpsVL6QYiE6m9UabDBBsUA4YprdpEt4b4Ve4hX5aRADULciPD4VrNPENpjAdUxbV81JDpnF1",
  "key15": "WQQtW7LBdM9MGFydkrqoGgMJCqtEPwTpb7E8ZGYsRrbPwWQig19Yz3gVhsZ6DZpvKr35bQgCToWsV83s2LRWwBn",
  "key16": "5i9ezmP6f8r6VKuXGdePGMiwpfttPPNL4hyN9WHNfGsvEyRnEg3JPGvmmM2DfSjSrKopaTkL3TfqdTTvydv732Q2",
  "key17": "4V4GqWrKcC9svgQFk6xy3FJPVZmZs4dfw8sUTFJXVunkPJFbRMc6u2cLijym9nXkb7dLBREqiJugRtk55LDbTmWC",
  "key18": "RP1HBe2ee77yHk7xKGwYCtwnUjJnybBDEjF4exK5NdtJfkTRdbX7kN4sGDzptX2gE5B1DCN4FCaEZ9vDUFtiLF3",
  "key19": "yawPGo2ELocXc299anLPue1yBGDR5nHzXEEEtmYkcWNWm2cA9NhiKq2FgyYTheUnMbPozzPZtCGMJgp2eaYWbma",
  "key20": "64Tb2fuFX2zZs2ozpXHmtdye3PgsnbStS2iRbTXQTjm25wJbsteJyPuKb6myrRfGj3iAsVkag3SVEYP4qup3ntzj",
  "key21": "2SPgZWrhbGZYYSWNLUR1f3RPfLGZ9ixDJaXrZAbBQPkh3bK8ZpNiDabksiiTdQxM1UzSa3YyBd93sBmBRTEhJ95K",
  "key22": "BSYKHMrzVjMQaHJvzDSJgU4vVVF1v8TCH1xicAEywW4znR94dMu9mxTE1sbM9bcxfRop9Yk7KoRP4U4KbNaGpY4",
  "key23": "2WErio2wDpA6dMbEAeCFhtWMgHxqE6NhGN2dgredZt9LL8HEdhbWxR5dKtpygnyLpKzok6Nxt9eM4XeG5Y2cuouS",
  "key24": "3ZM2DELk8dCukP51aJ1WKHydJfFtge9EQXQCkiiRachhUdNBPGx2X8KYvsdN1B2qQiGtCZjoih3WXDiLkSmweH9s",
  "key25": "4p1QUTvANYEG25gbP2ATRfh3G4Kt7pzP3ahom33UZLhngWLxPw5M81dTi4zFz2McnrpBjJoYiZQe5TYwZ3Y9U4jW",
  "key26": "4Tc2q7YyyqS5Pa3QRwWaJqNmvg5hAfXvDBBYgcGabKa1XSfbL6FiGctX7Br4v9aoU93u5Av83WAksqAfjkLVfsUu",
  "key27": "hM7KmtuptJ3dYYrgVp22vn32tXr3X61z2k8YuvGpw8qbJ8J1hpBzLrzMCNjeLwewK6WakkEunMWaZGqefQxRTSu",
  "key28": "oTEf5oByjW5pbRhcoG6b9dv3M4ktqQjJPTpyQHJj5uyt215eLiGGxDjqJWYripiuJS25frRYyNXJuAVcVe8Lxts",
  "key29": "4n7Zz4B9gyfpAAoSUuLPW9sUapH2CPE849wGjHXC4exa32gCibwosMaeMS2GCFALafLeFdVD1TSVsTYi1xBLqd9a",
  "key30": "4Qrrm54CUaiob1gEWua2BGBCSAYC3HvLwbA7rN8A3oRfAgnDHXa4FPaqi2v9gLhnN7yXZpip2ypLC2Vvq34dKyd4",
  "key31": "2hZwftbjAUT4yqnvcVnQ6VRYaLw6xCVngUp79sit549xae6XgNY2ccNDxzWnbkhe72aZjfhXc5R4ZCs8JTSzihyQ",
  "key32": "4W3UBKc8LS1kLwm7Fr4stqBGRZYB4At1Cw3ERZaK86zDEi7r6ArTdTfBNxijFpgchuevJQrGEQfmYvnhzFZY745H",
  "key33": "5BYasiTuhtrb9vRg9VdT7hJu6d5GMVa2Rkwe6jRAbew5JY6wruW8z5M2oqQgknMLaTyAt2b1MKuUopV6YHs9hRqQ",
  "key34": "4rGxbSpxfNm9U2N2878uqUvTLXsYegp7RkxrVSVDj4jpb9k85Ufjodt4ZTRbVDSbtcRymubfy7Zt61k3BwVUcsfA",
  "key35": "4vEDKaBZCpzUjd6MRTzmboKmVL4LDmYp4koWf6arbkrkyNQaBffyxepCAvXEJtQRbrpDAjhXDCm4ZVNFS7uRvPWW",
  "key36": "3FC5ynCXCgN5bPCsLyMXC2ntVSbjfoEEVYaYC3QDFswzLuZ8FWZbNoVojLd6rnRNCAsFBuQ4iYJ2Kvpdtmf111Kd",
  "key37": "3ohoq45QwWggjDh4wVUJ6yjg7iYyd2iFFCM1rMz2WZfU1DMFoizrfVCWfmc4n1wKY4uHXMFzxKt5gjfbqkhhwsnA",
  "key38": "47N38fqYDy6dqrADE1XPzTRXEV3cCoQZ85CneEVekNvRLgJHcxpMq79KXJi6SW4VAL4kAZ7vU4ZXqwjbRGVEMStr",
  "key39": "2tmLBmyB3qdnnviYEbgZVTmsZ8z7NNRZMityf137WjR8fZu6qv3chwPocRRzmo9FeaqC7CJ5FgdUatCCojkK4b8s",
  "key40": "3Kun1N9bpApNVMdYjgCdTzF5cVURqt5WnVXzBUs95Y5F2JZZzunTthNQTd5K7RYqihWoaRDCmSa6q4B3LMo5QWef",
  "key41": "2RnrWDiMx4rmciCUedgyAxJz8zckSsaqQrh2nSStSrPfLRP8vbKofSUgxtLvrQRozfdZQ6gwqJDWVHimPrrT54L",
  "key42": "3x6z32Eh8h7Q4N3AfLZDEhsYnvq8px8VrxY71jfzgDq9AhTnsUVxnTM2pFSP2uWT6D3ej5kFQyG18yyBpE4jES9Y",
  "key43": "5jdXhcVNMVqq8sLVxt5ngkonr7bXMg9HzxQrBzvjS1cVGELGNz7M8VBmQcRNzyfnoiyR6sLkMfDGxLV5UnB8sikn",
  "key44": "2Uf4aMHW8ch3Nnk5N9yFgYivMZ1erpcLhTmScQt8eZagnw2cq8JX8qeMaDQQJ2eXHUpnuBhbtH4seUZnii2MveeN",
  "key45": "5AFuKjGJKwNTKzjjx19w9XmVVK5nBn18N68KgtGh9okGYDXecBzsXihNxF2v8K4Qoc6neq4CHQHuTBRUzTsSGwdq"
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
