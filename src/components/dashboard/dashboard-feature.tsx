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
    "BS1HwFxjA3swv9HvHTc3kdrvViRzbxfPuL7cL1cLgGiuK8W11VgBK9JunkFa9t8sqg52B3ctSQdiyy3SWCFUYa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqSi8xxnGWVBQ2UBcbh4VQTHY3E3EuPTesKJakH8WNfRtNKqsMhxora3LQ6aW9nKcXueUNaDzDsEivEwZSBBVB7",
  "key1": "3hvoRVA5ppYSoDREjWV2i9g3GKbNZg86C2fV87t1XQna6XTjskzwGRNJfnec9oM8dqwii5dXPNUwZv513jNg1wzR",
  "key2": "29H6Jvjwm5QmpQ1xgs6KU44pkd81TX6qNag9PQcEdk3oRycbXbJzFpAVp5uRq56423KkN2r8McRTSGDszeck8xbC",
  "key3": "5h7KPKBHfot1c84wGj5pndGX9dCwj7CYgj27Ak19fLWEfvLmXMMQsAjTSDRNzNKpcZH8HAPCAMfi9LzVVHFQhmU1",
  "key4": "5oMnneyJ6TpZihxGmbFQzFnjdLmVMvDN8gjjZCrZaDWWJmed3ergD5tZCCExDALXSyTv7Y4BExeAEtmjw7bkdkQU",
  "key5": "5taKq3pKHwZNkribkriNCH1Bvp3wneDzPJubcDn15LssR9GDw45Ncrp2fwGDWbpYomjc4yd3DsMkrcoNLZPMPSFr",
  "key6": "37qWkxE1b9Pz66yC9a84Y8cR9dxge4FESeeGPY6ZiemZsRpV2kikETChXQeBNcimVEmKw4Stc4k8f3y2AgDFF9Gu",
  "key7": "7r7stxvYGosP7TyEAYfD1bRieMv6xTxh7ofT4GDVGHukHAedHnHV8LqLjTnoF7EZokVH7fAsJWH43nMNUwE1skp",
  "key8": "4dGGJdkYHNbLagJYMBsE9VHW79EaXwHx5jvuRzHwpDBzk8SY54G3isfv1nnsRz3YZ9GtxKVXkqXU4QmvdeEK7gfN",
  "key9": "4VxVphnDMDVs3inMyMNGwg5PWAUQxkxurJuZGwiAA597mrSEmAS1t9VtXTRBdASRVoAH5EquRxytvqxir7y5zCjo",
  "key10": "ub8aeZFqALTtvSVfPkymwQaz7wV3T4DQokR2EG7cGE8b4sEhMTKDgBQbMQjXU6pjYfxB9y4wBezCumeNQgEibjJ",
  "key11": "36pg2DMEMC7R5Cj6P6tynwtRDKwpPMrMRbdYoX9buwdhw9bCtTtaxFKj5QrD4kgotHtDLmpT9uX1ejKnArzCxSMA",
  "key12": "5f7KWVdFFvZQTAuMwKomEVbqFgYycqnYWiSL3hFW47bUSgTkuiNxzgEbKb9r7W8Avo7jdr7ha7w5Qw52iwCyKh1V",
  "key13": "5cesFH9sWLxJrdmaUHyaq92coY4Y62HGGWRC3hFp8VNZruR6Do81KNV7Nkn7CzwnbYewVvxkUh43ZYZ1KHFPNvcM",
  "key14": "3XAwrFq9u9TmqJf9kp2EG1VMYS3dBLHXJJCDs4dRt5oQNqh94KhPnTLk2HcrmLV2r6BwZPBMFLcoXd1WPojU6Zn2",
  "key15": "4mWXqhhS2K1J4VUK8GX6hBZwbwWsamh9nz1Nwvdz8h3fkmD7cJgFCN3TfdmQ4FvVrupgTkjcww7nFHbdKYx9mQrz",
  "key16": "4w4hRS6uNvnvtwsYUVP3F5yrhDCC4LepN2mRaM2x3Ez2G8SGJ1ec5jaAof8AxUdP8TE3CvsqMN9SEjGT2hejjbHX",
  "key17": "4cJwjJABwVCnGFBSNzsHpGBHpwktuEvErSvpdcQK7fRkBpcTepvYq6kYzAjWsUDAWfym9ZgBf2TECZDcyNXTKorM",
  "key18": "4M812PYboJC2m5n71aegCvagSGRZamj1pmwkNnhKe4JWiMEgMM9RYyufeJxdL5jbaYsxRo8MDxQBJkBCkNLknUpx",
  "key19": "5NgLApm1w5SoRx4P9WB1nJ1cvf338hFPzs9MfgUgU7Sg4TBLbGKP1vLHzb9qKQf9PjN3rfxMeEiiA4jLugLx6M7B",
  "key20": "4AwwtmWDAdVnAN5VpRGR7UJVYEksX3xhGTFcTqwJrs6pX3voWhM7KBLfyTg1v1i9UPc5NKnixKZU7bTCPH9cJs8a",
  "key21": "43uHtcK4R2nxLxF7DbR1tcE9xXPnGhrcEHsuqjf822xMn3Wy2VBiu3pi7sZJEtYACe5Hk1aWndmV9Ps5w9v1vjR5",
  "key22": "2c5BafqMvUK1H1UTrc7JkWdh7B8xixMnrn23Q3Ba2796QKYea2EVY8JajaHr6Me2fn4oKCA3VZccH6mF75rAL2MK",
  "key23": "4nDJ1Hqjg837Z7k2BYuz2R247rXvj2Z3baqYtStQuYRsf37kcYX9cszSjxuNsyqmV1wK9qbbEqN7KyxaajYBpmm9",
  "key24": "CHzwPGXTW6vQwUBVXSKfB5i2X7HKGqJgTrFBbvgomM3f6Q3XSQTQJZY4bgKe1fCSVy8UV7XGDBGJpCzhHnchaqM",
  "key25": "3KsxCXfvRGZTcLBHyUUSAqek6FTNZjLswhY25G6XH7DbAUgXETPjUM7vqknqgyGmEoSiE7okKKXEN6u8Ss7Ya5RL",
  "key26": "5E77wmLCujACdmywfdXk19TzdgYrGiBQPD7LzoxC7bS85y5dQ3GUDEJAAn2QFbJvbnewFao3ogcRsu3dwUn91bDQ",
  "key27": "rn1Uvwfqf2CZPQXhSay6hKR8pEqTNmiWestHjDXuqDAsVoyhvsyZWgtFitGpcrjJEH2HXKna8TywxEocHa5hT19",
  "key28": "2hya8BKD98iFk4e7BiMetZRvoYAuAod67ZYZGhruSWR7gC6Udim88FsSuJKxrVnvLYqA4WuaVjCkQuAezfXbBrJj",
  "key29": "kKhpPnDixaNdgamj9MHd7vUzbM6AaZx7HpDzXhEW2LzMJACaZMSuUnaQoQQEsf7Fpb8bgoD1Kbm1Pby5tezVVKW",
  "key30": "SC4uSEq9dwftMDjpvj86xHNMgxLLRtZFUHZmPJ4PzZg3Y4r5WwTqFFKTWGrCgX3jFJiUfes6pdDYdssR4AUvk5Z",
  "key31": "2N4QdCPLXTsMzk98udarELBFwkL44m66erZAWU5xqUMRqAKye3u4UZkwNsjjE9Ktb3XaLfeEzBpsPH4S5qBmJ5VB",
  "key32": "3eCRSWjNmJ564ewDE6HeHywAenRCjjFyb3EhCXFnjTDHHvkRy4dmnipdk4KoxuN52aF74N1WApzRFvXANCXnxKmG",
  "key33": "47RQLFhJpspMnG4x4455vE143CjaNqz2pa4BrWMvEq5LAPa4dUWNz5jpyDUFseGzoKi2whEDNQMw8cAS42R3nEkF",
  "key34": "4zFdX87Vt9mRP8dt2pksv3Nw1FpkCHMXku8vzQQidtoL7YDTG3fLFTcnzB5MMKSiwmyyNp2WdvwGNtww2fzeqR8T",
  "key35": "4qsFdSHNhKBFC67BBRKRCPdWJXig3LFvt846QLYxVGptVcb1kvfNxQERA8CZuAa9GhCXCyKdSbmUALQGro1BaA2C",
  "key36": "YYQjV7eZNxLaFoRaHJr1QjL6cnxb1RBwNabLexmAUokudtXDN7oJu6BeUAy5xGQ2mnxFkUbdAF5w8PBr2tJGZwq",
  "key37": "5yGD9Yr9ZFeDvrUn5ZenMZCYJ1hPzMHb8vC18rfeV2FEczsVwPtzkJY4yzRXjCUzhHJ1rkSoVyUwNtsSKp2Vib3a",
  "key38": "4SeLscV4avPccNFx5SYAuVDEugtKEWPRW1cfu51hoSWSQ85UYr4jxnLJYi3QPBxMyq7m3WVEJnmR557aE8BiS9b1",
  "key39": "64NwTkWB8equVhwA1q8Nwjh3bxRdXztwqs8mx7otKpt7Yz7ZGJJCqbtYzyb1QxGWtKXQ1cKecn4J1P5bDVLksLYi",
  "key40": "5ojyUSMtYppiFKJqGTTAxNW9SBUN2zgMtTh6yqiYWQaMgQyF2ZBnFRV1f9xu2KBESs1dhMGf7KdAQXNo932UX2iZ",
  "key41": "4dW8CYLAXtkn4TrUAz2pLMTwuHvCFNG2MzsQZEoxRWP4JDBjmPYQbi8FMqd6m4SHLJSsVGxTGLDRQK5EQbKVnJ3s",
  "key42": "2XuJ2pkyYtzbwEGuxKDFJBVqq1xoybWzXJbaAGxa7UxCp2AobBujRyrXL2T3Wkbi6JND3m91aZADCkqZwx9xKS2q",
  "key43": "4eDN4z59mdfvfrDjsZAHs84FMPKJ775tcuqxvmgTpPCudjg4Z2uV6m2eS5G8HheBCgQwev8G73Xomcj8NKWkgeEt",
  "key44": "3KUY3W3KjgRB1Ujffo6zQTTvqLaCaoC9LBYhF5FhgnQxspH7GJr67tQ8kGEu321rxtGKiLmuU8ASGTQQ3mnv2C1s"
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
