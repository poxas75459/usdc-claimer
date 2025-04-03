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
    "4HyS5zdntcvebVcacsDGKetZZytCz3JFKnXAnY2FUUvVU15QUg96Pzkn7AY6UxdaGmRm2Vd8vqaXFoFLZE9iXVaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wbz5sN6K3bZsLEjNtpV8TvTi6jJpjh5GENtDYbvDhV6TBhFxiEaFmmpw5Qdii6tqvUcXQ8WmiuZnjNGR3weLQg9",
  "key1": "32ChSHeYPeyqTiZTwSBSA46n42Ms9jYCXpe4ccNSzyBNcQCr5R8bKzG9je6JUxEcXCUaMcuLms36FGeGmkbG1hbu",
  "key2": "4tfRdKqxAfBBYtKefFnSYh6GXPrJeGGiRnowjSNqsb5cvE56u9CnMWZHT1xGiNYW6FH8iuApgeBMMSHWEWAuSzcc",
  "key3": "4rYRQVFzoGFWTCdp9mVLhzxdx5q5gxnEmXTVX5qyNeVtG44PfuThfjpV8yRCjCbs9QjZ4oQ1QbCXJhCbaCAwVjzW",
  "key4": "HpExshBDP3p6gVVwhXNj9dczEwD94FQsRHBAVUSzfR4vzMpVL3xk955w93EEKKVBsQN5c48oWNNtqyuvjvkYCUB",
  "key5": "5AVuE2unT1ZTyzzmuYXfAXs5mwTRnLenLGbbx3XfdYhDqEJqTbyxxBdGAb7eH2fmJdgNL3nWjjRwdq49HnGz4tUv",
  "key6": "2muqn3a1RugqKZDheRrXhn12UdcF6CRFRdhpPaERdpwJ3vjozhmwVoCRisnDAZBEaDPGzsDCFFx5AgZYpE2YnQQ",
  "key7": "5JQgXp7rp2nDvE4BydLRodgwtvt7eBvzsa3JCBTXfjAAf5Vzk4NP4QDieCLQU5BfE69RodGNwTFqqtnnZQYAs3rX",
  "key8": "64qtHKpqgNF8RgXxatGb9w9cfzbYZehffTJfaVB6XAeTXd5BzBVZdFidu7vUszK9QFXEjTaLwaSZwj1bjjgza3wh",
  "key9": "64UfnenTyqi47D2zHPzyEsCeJeaaRCGkh9vLJx9uxUqoYtMcVFrCCrLdTwbCKfK9ak3EFEaR1zL7vW43SKTNGgbw",
  "key10": "2Gvj1HmcgHwAYHPCpra35qbpejfaM8UAPYbr5mg1YgrmaSeE1y33rQaekUH2cbFZzQWaN4vNXRqxeSA3J56kWQuQ",
  "key11": "3BthDGrH68gcaSoP8D3MM7EUpcV7E49Q7BWTEjdKWYjxHVSmzKTCdHxkMPCN7sfvM5pPytKpdaXLewSYQK2hDxmo",
  "key12": "2yCzDA2uCMCGQY7dB11bfuFjvvuKiMr3iZ9XJM91quGYnQEuKfoQWuFMZLxcBao1UBZ94jdJCk6poT4amk2C6CEg",
  "key13": "4HQB2PuhoxfaJwp2cQ6UGDKVD391nedegPEcVbGp61CXHpwrgfv8AYQJJYMbKMKGxdsgVSDZQdhgogLZUJY6hTQm",
  "key14": "433jP9SuBT94YrD7Uc5QSy9dQHcVWJyMDQKBarYA3hskhXrLSa8odmTEDLxLwLDNFHyNcu8x3vq8mEqX2W2szQN7",
  "key15": "4U2B4eHbNvWbaociNGqUFkEaT7KkFpKpMkdvAtck892BF54jGSoTGCteevzMCVhrYNK2BSKdBAAxm3XxAmqdR1V2",
  "key16": "2jE3ABLFp8ohzv6Q6eBcpdCWCfJrKdLR3nobPhMQYkmbRo6EFfN7Fzx19xpkvSEoYPVgnivV3FByeGR1QhjLkyf",
  "key17": "5yzQnBkRQ5QmBpnow3Z1KE4MTyAAwvHpvrFoiFc7nbCPxKXKjPrZoz9Hd7RC8pHijHsxKBCrsYUyDifXdtyXGnsk",
  "key18": "5R9XhhGL6EYooxgeZ1fxrqWdtZfpXCExQawDCnNWV9cA8FFJ7azaJDWkT91MLAC76htG944aUrC9Ut85Dv4q2n7V",
  "key19": "4WYbpekXNxSk6uiDRdG4G2VNxWdTgX6tvgmXKpgpwKB7poVGg1uPozpw3VdQrc6GVuCcEj5TxMT82oAgpzPn3E7z",
  "key20": "211TxiePqYwggENED9wHXXxUWKAy3AjdBcxfVVw3xJpKHLEcGSXtx5kfw9e5Y7dSjon5d6bewMrrQ87n2KhCoxVL",
  "key21": "4j8TWvipzhbx4qXF6GGAev4FHvnVm2DVe9x6pE1ojp9m1XqVqNFCJ5tW3nbduHtFBHni25ogiHUHEhhKemv9kVcj",
  "key22": "5R1FgQXKdmwFTGwTPhsLBHi1CRucrVf2aMngi3rbLhXVp5BnV3NQQvZ8dtZeogv29fV1P5PPuHhg6um9cecieDZd",
  "key23": "3vzZKREM86Ci8MXoKKMKVb1aYYf8NjHQo2QpyhdsHepaUgSss1Py2MkynoRXuTFDrGez61r4TFFWMTPMVqr8edMQ",
  "key24": "3UHrmGzTYuKVh9ijf5tUUcdxg9ReSEcd76VYPzDvjoXi2vuUKzSXm9ykmjZWPXco1WDoWjrT56uMCWkgyCG4gwF9",
  "key25": "3X1AMSfr1UiqwfD83ttkJuZsaWSJvsGDDfn3kjpEqbEXM4kHtbLrgq5KSecqV4Azkt1VMeatB6NfBAVU8KucwWQG",
  "key26": "52tbSAhq9HE3K44V1cpt4sW7yhyHUkbgd98gaTkCdo3SzFsrHGxvSsnQMiNWDcP473g8LQpkEN24VB8tQqodjc6G",
  "key27": "2AqfDYFQapMHYKsNxr8AZXuqfwQRMMEtKcHxMHv87EDaynVphvtJRTS1TGnp71BwpiZT1rgAD2WanBbqLjUKufDp",
  "key28": "4jFyqFaHthpLdowufocqzFA8hwkZAsz7AuocC8tH3p5ku5Sa43nTcupqEabZBTHot3a6F3DPcV9ekqvtgBCAf4Mh",
  "key29": "hc4QhtfJsPTQhsgaV35JYRsp3PSbxEEgFLC8serZSiCpxY7xiB4sQxGDyi7TaZE4iCT1PTgV1RaCCS9ZH81tPBf",
  "key30": "2JK5rKXyw8HC97UdTBfGA6h1HpCXApqsG2hoR5bJ2HQiQTxabx7iHRGqg9mC65Nn1tWHrESvraxwVZEo8oACoA6v",
  "key31": "465HBUQG2v7hVPkbjVnXMFhTkSuVg2NNgi5WtwW7dD4hSRBgzd7582fdW61o4mX8v1bWV3mUPbvW2rKo56M4NNM5",
  "key32": "49V9GrwhaNph2t1G7EUsYELWnosp7Ab9EQhmhYjGR6DFvzjGQM43tWwAaSmmixJQjKGyn1pzkBvHfe6ZkrzRtwBt",
  "key33": "xyt44KLUR23MMP65W2qJiK75qsTbgvSeXqUnTPLA6vAEafqNzECfc32Y7JCL5bLzeZuGDyS2QLccpo7H11WZ2Vx",
  "key34": "3kKx5LGJ6qKy3xzNkMahFKqdvsh1bUFnfuQ8pYQsUpmQsh6g1HLTq4marskPkcTsaVq2tJiemJzq8a9s7xM9iX9d",
  "key35": "43RfC2rBAe1o2GtSAFSijSQ66g47eyrUmK94sUwKCBm5GnZsX35LHAhqimNhGzKeJefgzndZrNFPNDJRPqSdv5qK",
  "key36": "T8krWzhyd8qtcxGvw3EGWXvsGtbcCAr881p1gBKCHFToStpDjR8sasqN9gveUGDDp4XaPFdNeDRGFwdMk9DriBm",
  "key37": "3Cyexs2KvztVr73zRwGcCuS81ci88vfsLyDra2oJUc95DVx4s94bvq2CJq22RSmkkBDbu9NeBPuTMEnNB5G9GRfn",
  "key38": "62oaQc7kcUnuRiQvpuaiBT1wuYpurUKsjaN5qZcSMLCHoZvnzkdutEUZtaEfQ6ykis5rEui26ZfaPupDpTWgCqGz",
  "key39": "44EGnDFdU2Yikj19SiAvfPK1391NaFEPpM98qV9xPgL3fVvHwF15tJdjoyfCfEirTYtgEMDRp63ZWadYep4PnFby",
  "key40": "3qzxpE2U7b92fNoKWJN25jg9TA2x1E7mmtUk1HoU8wDUvQW8xi1wsChNgccvuS9tkuWN6HeeBGH1CpRwmDS4X1bw",
  "key41": "28KES1fAmM9oeRL24tLvJoYRXQkqXVvDDA4KL3SGAULCLYrkafCdnUDFDGfDa1pddK7khZKA5J8XFeAziyUFMAk6",
  "key42": "47knNigMyr7rJCFsg6JaYvV37qUDfb9EXFZq2JFJgBBoy4TgmJGEt7RHebpD4G5MTLVmx6GkFjftjwMtJCRs76Fm",
  "key43": "2PMRpMQC8wXsRNWkpPUfXVYc8tgtLTPj4LCWV4n7S7jg5Kuzq2NnfjyT2Ax3NF6Mn7YGjiz3V3SVSHnjnXCxK6UB",
  "key44": "5pJDuAYVK88PzNo1FviEZZuwMaqo1AzKVG9Avitm5jRn314ZEMSzUyzoyqJftPtse7gBea3GykkUSLJjao58Yb8o",
  "key45": "4KRvj2hMHWWHYAPr3kbtqX8Q62TfXRMvYxDkp23iSn6d1q4h83HkcaE2CTwPGzoaYkRzJxp3sDMz2ebtCKcV42cs",
  "key46": "gRDfMdyppGmpJ1VfSD97Sy2apXQaox1UJjBzuxGM2K95JZs7vZQzSsJGKjGyqyGeqQvjX2V4CqaZTFjJ9NY4Gij",
  "key47": "2G8WCNfNCQjiBpSePq5go4j564dphtmdwAZfUS4J3Zfy6FdtZJhgSgttnky7ynAzMszfhbUy1TKrdcNHMn3M6ZAg",
  "key48": "2wWD7xSmb5QLKFM379V9BAVpZchtNB43WJs37HkZqtaxHQL4HxsG7uJLHXi3nC7kNCRU6uH8cktzSPMGhYtp64RR"
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
