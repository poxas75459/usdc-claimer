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
    "43pcFDHAmEyjqzVcUDRUSdTHyxpxGKMfumTEubBa94hCL7Ej93m547cPBbg1Umv34m3Ndo7kiquQd9grUnHg1qSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZPQk2ki1KkUmyfen2zYxR5Arbi5PgY5JLkRUjLtK4tcy2Qrdd4yGRCpCqBj2ZAEH9LYiEtDPu84p71bp3ofr6B",
  "key1": "4C2EpmURNpPvLVwVTTC4cw8eKX5v7JMPYS82awhDv9zTguco9Zf5Rb1AC1BxTUfPAzR5B7q658wGd6BGYP3C74Ln",
  "key2": "5tPMESRXnKskTgGNUhdkZ9Qux3v3u94fKDPRjNuXYD3XXZCfn2K6fCj1x5mHZi7wrQyhEkNUnBtHwDa5CBX9RiBY",
  "key3": "2reHYvhFuMySy6FAC7FUKSgoVTLqkz4yFJe3TsQNoSoH8n5VX3ySrmsjPC2dpnS57buDwSHxqrLFwoyKwe3Gkhx2",
  "key4": "5HybpiCr2NSGzG4wJ2dYaPuFAqf4vHb3yVFndjvonBcP6u2NoXso9ztCAdCr7hhJd8bPPy2DSUDGTW5Xdz67iZ2P",
  "key5": "57V7N2sf9pLWCJUM82dV5VRjXJRxsyAQ7hQLVJtRJx7v4r5rU2KYn5eb11ZYcfaepc6znP1iVWoio5ta6PjmrFyn",
  "key6": "3GkLMGMdbR1fHssbTvLw8LSZxKQcqE78w6gAzv3wNMavZWUH3VUU89CpJmF98zWXVr9gnu4Fgc4HMdDavtmFKtEK",
  "key7": "25qMxAzshdywuCzJjH9AAxW5i7efNWsuCxGdMbbmeJbX7xRBry2qmiJqh616WjnJtxsnhPnG3iFdysds92HeS8GY",
  "key8": "4TjFG1puSzEqJigpbx4sYs9XieqJaj4ka25mETLwV6qHtcGtRci1pa1ip6NNgfGanpkb1ZeApHoCsan8tVFF8tGR",
  "key9": "36eRCiZgk7i2Mt2Nwd9hMVapJHoHHL5bL9MpMsdJh9GC8ZxoMhdpFTNZ8TX2XBSYRPzwJRTBYvdrLWfqy4YasLsQ",
  "key10": "3HNFaE1mnxFHvxGzkfAdNbG9QLU9FNcMgiVZRCMRfsPMfK3oHhmnRPpyySZspJmouJVVqkogbTvBPMSaQbEFghKM",
  "key11": "48t8uFgdz2hQk2eWqKvFEc7VyRJm5BLwyUMn7BFVSu4cZaVu9oeSdb3kHR5NgUQLYhDRsm6Et2eQPPr7JLuD5V1N",
  "key12": "3dhpkTZZxutabQKPwF75SbiVu2jf3ifG9cuByQscDeUT5jgwbzBoK3tP3h4QTrkziKc31ciPDLdohQTAtEJKhpGL",
  "key13": "2Pa3sR4koFi6TT4aCs2hGkkgpR7rYRpnMEXWQs2oEAAZmg3b1rt4U99HCVHaWVSCvhGpCArPHxA1kAh7Qr81FCkR",
  "key14": "KxyB6AA4yd1Ngq85DD12FtprYs6T4VmQ6Va3mPUhn2J3BGseRM1Tbc7ZCDNRT4eNvCPeJ7fW5aDMyhjFfSD9aFB",
  "key15": "3iVnt8gJVAoWP4wQre8dDYqsThyp7ksdRsiquabdCZSSD3vU9Drcjj6g7bNN4yCo1QRsqDSuoUcD8ELZ5PWPaKQk",
  "key16": "2HvoKbbehTo2oevAURLuL5vuMaXUMGVwSgys4sbGJU62Bgne69R4ERrgHT7JCTNwnAMdnQLVrNoezSLKszbQ9Jsd",
  "key17": "49JrTD3tvh7UMacxyLbKKdwmoTFMcvPiw43WNp7m9bBYoi1KdUb1XDNVEcHVHWKu2TV7eZqGgabwDGum8bcv6FKR",
  "key18": "2UyCA78zcvuLE6PcDw72jW6W3Q2DDD4opPSt6Q4xJ5GdXfEQdgBaPL98PJFBHJkaUgwq33ZAXi4R2NDV3Cy5NamD",
  "key19": "4XKoTN7f59m2fBZdo4Tm18dNSnsLv9esK5EtxModzEtayB6vcLjtxhqDapyenpY4XSa6zSQoi33GgFUvguJGhwDv",
  "key20": "KBcnb2NDwqMJVC7nVuQZd7Ly6nWcAwPFqHSNRZsSotfGNmCQ9t9USEMXtx2qEXy9nZirZHw4JQr4nRHxBCrBzdR",
  "key21": "4sM8eU6RCGYEqsdyWxH8BKcUhkZPH4GzNCDgcwpRYfqptbLoBoLaMEPibbzdA19f9P7HZWJynhkrGZoA6hzePtVZ",
  "key22": "2XFQxeg6iszXYpPHrLtwJvja7tCGzzwbHL6hbrSbsLdeozrnYPv2CCytzYqDUomBxokUYNJmqBenY2B2nPLoN7JF",
  "key23": "2ESUMGwDvPqSFHv5piS2Fgoz8JVauQabpsTLoNrqA37kH2oDbWRRW5oHoiddnsqJwcH4D7b43bjF9duGv8mXDY3Y",
  "key24": "2t3WF47HoLpt4jAAdWcJjJaan9UwcpAUbPraD4VbTxAgFp9CxeCuoKAxXgZpC8UQKrn1s24vdmcQ2SmVNPaur8Mh",
  "key25": "3zJehWqadvxtTZz3PCJ4DpZ8U8E5axHzv5qZyEPDfNHDK9ZWDFypWqkgpnmJPEv9jG39Aq4fwXgUKr8fP1VwTHiT",
  "key26": "E9aEAGffcahrSsRFyEgs8AZ1kum2Y9MhfjWU8zPurynR95RUybHgDGFpm3zpk6P1RKZbbtk7GWi8Lu4i4wmXGQk",
  "key27": "41XnixQPnYKhYGmgu9eW8X7WRpKja6CaWt4wcivPpv1BjBaSj7UPsPAfsoEEYdLZphUv1hpR13Tn9pdS499VP1q3",
  "key28": "61biDFiLfKwhQXXh4U6xjKpZK8xXYwNmo4j4g5EX9VF63ZPSW4DKdVzW2FND5Crfs4ZgQK9fEsafwjSKvoAGWjPf",
  "key29": "YKUTocjRMEFBNpQmBh956EgfRGKMXxNjF7m4E8fZUA3RGJHvB7uCwsHrjxkoJQqKEyEuwtSqcuGRjBoSkgqbmT7",
  "key30": "3ndfAq2aYZ6xkJT3eaFgXokXmJV9xazooQQQHWyMEW4gZZbyKrLWEmzAr3guCg2qsJMSSabe75kJMx7qdYoqwmi5",
  "key31": "n2p7m1fWXh4xBABLsPmF31TTbn7MtpFMeihRvaatvFQhgKZ1A1wkrLfKWqWiEBQf329EuSCQnW7hRURL3UrTjTx",
  "key32": "5HxSUcvVEw4urazy2d7VSeV18eFcETJB2KY3QBorZUSgP4Cut6LTNg8xvV5qFNzYhCkXgm7JnMQtgBbfa5hd12dG",
  "key33": "3CvBMFvY1LRmAjeMSR6QeBYRHNh3VBK8UgyktpTad8U2hhqhaeZ9ySSyzRdreySoB4wYLpoF6Nrn68TamPnjrV8B",
  "key34": "52Z7aVFo7AbLnymqQLUQJDE1uSU5Fw2bAF8WmtmRjLZjSnap47sg4RdSNnVTFpgAXbmpAXpwkSkzqnsbqCyyqxT3",
  "key35": "3e5efxNkZ8a6C8dFZcLCNNMri421PEQhkiWrJ2McjJhESKjf4h1i5PsKwciC7fH4SgcpGUMRUWcWq52sYD3mmBt8",
  "key36": "4zjecKdkUXYhaeAKg817Zq3i3b6W2dRge4QkXKtpJXbR4L1a8hi8ApBvgzedJ9jRygbxbWVTURc9WcMWG7JSKvBS",
  "key37": "5PqvkjdTkyQEVtav47wfbBn5gWJZ843LdZtvBTff7ZY91GMe1iXKrFJMKzWaBkqnTfjR1TEJBi8JPaxqreuqzq7r",
  "key38": "cCwdqjhCqC2UZYMY78dfyet4nkCFoesvax5X4SBHtd1UaqrqCgjKtWQo18SCyUZPofHrKNfvCyp2YNHH4PN1PPW",
  "key39": "5xxJcAzrK2DHFZcqizZhAZddAncRueBkFUN3bA1PosRDj4ynKb8nngq3ZRZt3dNoAHQ5kT2EtM9tvGWW2oGRW2fw",
  "key40": "4RGDczeueRQTTek8gkH8RxxpwJTSA59kgA7te9mddZL8FoZfVufhLdJP2nThnLZ6q5iWXZPjUsadzdB8nKapYtWC",
  "key41": "5txxMXkBmhWAprBJVvNPyNbpTywZw2ib6v2fVb7gb2PGFYkdPZM4pknLVCsfvgDgn2aTKzZLySUyzvWaGHqdfSAM",
  "key42": "5g8Shn2fRaH8uHgFtbfHLMRbMgkJLQLLfv2thx6k1gtcnBrG85FSAx4kmkAFDwYQwTCJiiEmgj4b4hXZnph428gQ",
  "key43": "M8yPEZHmee4n35XmZsRv47p21PJ6hixn2YDNVXmrgy7sD1L1uM3v8pYtoajh9mZh7V9ccESBMfcikwq4BE2WQDv",
  "key44": "5yHiocPbkvHCYqWvXnATjnifZ2ez8ViBGWr7GB5K2uetMap1ebUqvGyAYUYMLGVwHNBNwqVGB5fpsDvbKzcAmGxw",
  "key45": "5CmJowGsicZPWCHQf586dPBQrSNXxjVJiB268isqFx53ttTzqb5rcu7R45TaPK3iK9x3SA3qUHFdFX79iBGNPRzD",
  "key46": "29YWbfQtmqqeLYpS8511pRFhMHutHLRohCshLWXDetvx9UntZDybWibZf9Zwq2YZoanCx7pNXT6LrWkgMDXfMABD"
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
