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
    "48D4VweokdJaCBabKEH8gsuaEwi7s1LgTbRo95Kbgh8dxVG5LzTGE21o4nEknHkDzWkdd71aU29CU7GoSKQTSdRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PbRn2QzsZFaE8DjRSSPpYpWo5VgHC4aeyM3wdDbei5riqKtdLum4PMdGgky6Qa6Eif5EPryyP1n39Rdh7zmNW2r",
  "key1": "nrFGgEsAsAsyf2tfMTfzRqwJSG3m4QxRuHGqEpZNEBNUeud1BJ8jazbdtvZwneEfqZM7utw2xDmXU4mZJ8eSMnx",
  "key2": "4aeiouKAwKdUrK3Zo5qWEWTibdTLpfgwuiBNKKSusZei5PP3DH1gr3hKHsyY7RUjimq5LTLfTBJ4gU1SZEkxHLVr",
  "key3": "3j5rcRK9RmAiCWF1CXp1qv5PaidfLPJDs3PpNDUhJT2ikTK7h4PdoWmavAbNonbJNXEGg21Suqq6KEM4tz495vos",
  "key4": "4fRQqo8Fs6wk3EWWu7kwqziPnnjci7KPNk1T6oaje1sZqojHuXqDhtX35ESfGeRABdYnywUmk4hS3Cb1Fw3aR9pF",
  "key5": "3ETg4AmF7Zkp5SHRS3RXwP7Dr1k4X7FwKBGfonYhTnkgqA3R5AL2E8LrYAV2e4ek8aAhNWBX8LrFt1navCziz2J4",
  "key6": "FQWUymvV5APrDP4bsz9i5idBnxAegz8cJDcaRkEqPN4T7AKXTXJTAQtaaErmKdhL4F9PzrmjtnHoWVFSz7iniS2",
  "key7": "46XWmGdhvz2X3NcFGnWbbyETwvYDuHE4jLwCdX4LMeERaBPWJotXTa3dDdaxCzvmw9qrgE7Jqo5dq2rEL2tugWwo",
  "key8": "51AEEFgigPSE9sNGuQgKb77AqAtW9dydhX1XYZgt5es1izhxsvKytwp3SKDyZkFZMdUDmrdWzzoKeTvvTMbyzAsu",
  "key9": "4rM8SBodY8M81ehucCd18a7tWApHsiyQuG8NgAWypV4MaA2EncKjUMFQrjLRj44C4u8UbQGv825rMg3C7JJ8n1La",
  "key10": "3pLDt9oGtCvdkYhs6orfFcMiaSxCHrDFp78SC8Lik2Ltr3K3VRrniB9Sv3JC7N8C5Ya1wXdZoqc5bgaj6k18PGo1",
  "key11": "2b7gQcC7zBaosCyaHdsA3R6kg8FNGyHFfg65ctoZgXcTtQBTuXGKE1DCZu7LK46iSYq8wji3VHTtik8fmmLag23S",
  "key12": "4V7EXgayB3CkHbXEJU3w15KUjmpWGwgp8DET75iLEUbBPiwFScvN9nyVQCD27mbSfVTyow1iAfddcf6n4eNRxcNC",
  "key13": "4ukeC51R7g3i5yMwsKnbaahe7sos8iBLBEy3zvtrS5yg3SfY4jaiHVArhdcr2bazEFeLdyNmYjRa2ycQX9hhr3yP",
  "key14": "RWftnXorN2Hvvpt11y5Cj3PoVPUUjtsgaYYq42s9SbhGSHukW2zVfGqVWooL6QiMRo6q7LqC9qtULZ9RfHxwrQ2",
  "key15": "2bKuro3LKYP4xKjXPMmbD6KV9vkTP9okDUGQ24rzG3GMTibCJ1EVWDRYcbN2dMNZqM2ERmWm8Ab4n3ewGBkoEGT2",
  "key16": "4dXTEVgGPyd7fomLcuMbnscHTZABJ6Na151vbLaH5jAVXzxCtanoPsfUnTtU798wBpfunwG8SrChPoUj13vp2mXF",
  "key17": "3LfamwhdiYQAzz1Deh8F1UcYSSi6sAwDws18KZYDaUAz6DbutDbBzrjtshmUEqFY8BcNBNVEmR9VKdnvUgkK1R2V",
  "key18": "368gkCKMgiiiNH74WwkHkcRDnPde9aWRwXyErb9hwwzpr3n1xQBofDcij4PG7KtPnPzodetYyPucqMFjrA85rUYY",
  "key19": "5FV7RtX8MZnyLGrBidrSsbS7DKcxURSFSBt1me6xDcy2mXHMfGwEXmNoCBKwndd3bH97oi3b88zKbspW2yyiC8Jm",
  "key20": "2SG1JCebP3U3pS4VbA6Bepx8dyrH6yqK3zWUF8t2oLrTZmNeisZvULyxm6XkJgt9CWrgPcNb2Rjrq1Fn4CRb5wTD",
  "key21": "5QCaSj1xpdBxAqhW8NPqH5beG7CtKwGVZpDm8bVHPJv3cFa3d75LScTqcW2PfRKXTzYSwenD2ijRv34xhQx4pb9h",
  "key22": "ko2j4DFsp1zxEJC9HbwNLVasLqqQFo8P5mQMtNjKrfcNcUUb8t7BcprXecwfGbYcqQk2FL3xDTk5EcpomcTTxb6",
  "key23": "3nkBJpQFDBVVr2b9vNojzooBZrbR9fr2m3h8KtXgnGjCjXuogDPCZ79SuC4hSjZtw9uaQNX1K3Fp2duQBHJWSvrZ",
  "key24": "7bVbRyJBisTfQNt5QQAiiuaemZiNik362q5Ng8N2M5dLTdV5SaU44JgJHCxZYN8z6MvjhzybBmcre8Ktjm19S4p",
  "key25": "4c5QVUvYMHNcNxTAeSQ8LiriRZpqXAgKjWof4RZgAfX9s6B4JmSYnB4NS9JnAJuQQC37nXuALCvmrwhtF34TrEvx",
  "key26": "34ozeuvqNbWXGWpFm5D6RBSFbKyKsHJhSaacLBXXcCdwRZ6wsdGoF8EVEcrEzQ1KAHpn1cBqr2wDpeZJyZWQtPSi",
  "key27": "5sTTfEaj9zzKPpQRQGPUt8Rrp5e14KEirpG4jgrMEb7fG6ntc74hHZFhDz7bejbimcNHgAzh5cED2oK65Zkh845N",
  "key28": "21Dw5D4EAB5tH5sHdSkazMFNDTS1FYc6H8mLo39PY9otN9m5nqVXJxSqubacwCHc5Mw8aWraPuieZhwQHPtsNiG9",
  "key29": "35sSAxR7P1125atzDU4JrSnocnK5bKKF5WFZzKVnFsLGaqqdswrGmXQgDBmvrPubpXTutyNTLVLqd9Nck28x9B9b",
  "key30": "5yqUVjt3fyMMjmtDT2P4R9AzvKQinWWPwCCgwAehCUWAWr8hAdCMcMTDQLCxbcCr7YzWnYKcd8gQwPYfbs4buD4n",
  "key31": "2xSQZ8rpQhtkYqoFV93aU6dXim6L9NWGmwf2jGzGGK3epPdxy5bNN4cRHSX4R1ArNnjvNsVxa1B6AuR31LpQVsbh",
  "key32": "5K2qRa9Tn5uRnX4mVweBK3PeLf3c1YXsQF2hoJj6g145FjQCy9doU8nqceuuk46wfqCqvaDc5HEpVvtq2wSPENE9",
  "key33": "4QWgouk73eHMzE9gHJvypEQCSsnLpPwe9oLMxEbM3uVv6wxEd7fGJYt8AYXoAXJFPNAiTCBgsqWEwBfPWHkREZcf",
  "key34": "5eo9dBdCgUivqEKa7UQDa5QKukGBPjm8uq4FgTzmvTM1LroCgfqEFPHtjcgkJU7HRMeNHkbYgTHxB4rxSck943Li",
  "key35": "2ou5db5HxvTMQ2vbgLe7V89mAUvTC3kgRCjMBiY5wW7HD8ftETQWgPGVtaHyvBjeuxYWi5XyFgRucjNkh967dyzU",
  "key36": "q1sfCiwUsdpzusZpPoqDELLuLbNr65dJG5b2zfTwvMFdA8Aqff8c6rVncVYHj9C6Gq5GnkctBmyfmz5C4NtKKaK",
  "key37": "3KcxsV9ivQWrPMhEuDH4Ytw8UGqeQqesXdA5hedhafipoG669J3KxkAXmKJSU1a1YCsEhHzVm1BW3xoN2csGinFp",
  "key38": "3n2WZj3oergpKUTyeCYTrbv4RtyxjakAxURQGgktyos7CoN7mNendgwCJj5HqbjFs4zHBQ4sBLXU8q38MTKP2YB",
  "key39": "2ywgVxj2Ws2tqGuDfx6Prrna9UCuBpTHuFaNAVXBDQZw8b1MNkGoyzw6nbmY38NP4aTfUVpSBVQicD7U1dHvwiRH",
  "key40": "2aGNV53tzXjZe8H6nxh8SehsverYs5Fh51VLA4nY27JdwiEiiLzJynuktDjFrhosr2Sm3mt95dtyyKRJjUm5yy5r",
  "key41": "3LuUpBJqLdeKiuw248xGDruJNZAg1aXMkw1aP6bQabgUMqUgzPP32meYJrqYqyQ83wch5RnDoeVY57tqY8PT4oGP",
  "key42": "2aNz5Th52sHJpXZgJRcMtGvjWJTm2qcJebxTTL8uxBFZv1Uhh4ZkzsQwgHFB4VjNNj71qRrbKmAuhdZzYcyszTwH",
  "key43": "3rmiG1U86AtSkaRRoJo8AfTWfNw7YKhWnNfww3BJW3H7hnrmasLFQMuesP6C39XT4uKCmoFQRa5UFzmGQMsMBs6i",
  "key44": "2z2XNXBQxee3SkcM3epLvtsSLCR1Kf5RmbKSrWigJ1KBxNsR2jgLa25jR9A9JWzJ7a5DD1HeseFuiMKF2c1g25gX",
  "key45": "3nW7HnN7NVn65rRSxTA8CvxJwbx7L9qt8HuAHvdWEJWWSww8w75paRSbU3na6decCcoktMoo7vrte4DbMnRjcqm3",
  "key46": "5VboQiewgHhVKyHiWqVTjV7KSazWUvFG6scAd6gtMdDW2xT53AYSG7E6A9Ct4KAeDtmLYCub4GstuLgpSBAqftcj",
  "key47": "5b7ecpxKiTwwUFTt7tLmN8MRX1WGnzHy3fEsiMNpYrDyZMXaimpu8uARTpZKqjaDbyMS1Y1oJkFKGg7HvQwzY1E1"
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
