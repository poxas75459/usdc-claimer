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
    "2jdJ1md6GWB697xsBLLE2HrKQbyPpT4fGXSXzLq8638zw65vmZMDi57VyuaNgrZxbq8LJXp7KdS9f1j9GBGefArr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqdUaLeh3Hb7PGajPcbMEJvg7dDfynbAFJBqGpp9L4CMfrncM3UE4qpT2Gg2xbkzQ9BJMsyiizx78n3YwtDEFpu",
  "key1": "5PBAxMct6m2ektfP6R6qRhUA3o5sJkjPm5WG32rhKeZJnKaAnnP37ZMV2m236yrUXM8po5qhCk5ujscsKxdeBjio",
  "key2": "33WRAAZbengaqMVaHLpT9vPNa5DSbrtpc6H3Y6QiZV2WDH275TZnQvUDN8Y2QUm9vWHFGfesTagyACcWDf9FqKVi",
  "key3": "8JshWWSpkbDwRBMgFewDRpMpgeEv3qJFRiwC4sHJeDpFPvqXEYr2VFwCFkowUfdQmStKg15ebo9bLuyETwgMwfD",
  "key4": "3CVdjxpWNHbNSjAbEbLLQNr8M1npjrrnATuGoUAhCPkALPoTYzpVntVcoXDhAXu77fwpVdjYN6SNvaFqJx6f7zBz",
  "key5": "2G1ws6Ub8U8Y3nfsyqTzZPAEarG1bWhGZvbcmaVUEj7KK3rtJxrMpmAG9xKmcMkxFTXkxmbs94NZ7E3PqpELFgMm",
  "key6": "q3FyN51xwBFX9WwordLdXrumSsoSgRjLddcpbxZBGMShZyzBxWDR759m9DDsyRZbA38288QWtgDs9A3x3QUkBAF",
  "key7": "G4GNDY1GCDSusgejTE7e2vcn3NG8UJ4no6qciDCmgu3xLbwU8pV2vfchq9GqU9WwQcTy9fYyKQCV8Ex5c44wGKG",
  "key8": "4jntTJe51ZhnymidaCnaDexRUZvfzPi3rnSwTBLVqdmQHZAXnmT4mSEqD68HNmt1TddGSCzsyGZXMT5nkkxGYM3D",
  "key9": "5UG4UoAQtKaN8WMDkz5vdoTWqWJkLeUgmzfEn46nBECvFAjBUNBUyFm5AzBfZ66AyxirvJw8h1qYcpQ7zFiQDsrN",
  "key10": "5MWmvT4bA985fF7gpGLFRBbrcGmmB3GYPkkgZFjMoK8MaNWE5McVa4YuUwpaUu7ifWBDHK8E9n7mnxRD2oQgmAMv",
  "key11": "4eQLL4rMP2rn2GHWMbVBGs4KZ4EDeHgtUbsM3H6v7sueLLa44q6kFZx8N8nkdskMetQpPhj5yj77TSj93twhX2t4",
  "key12": "4RNHc5PVmA3abMSUMPWTBmmHUmAoqVSpNY7NPBoPtWoHGqLVHxDdpQpKYtyYCPkEQqLdDxW9v8LvzDCCSHk8PxbT",
  "key13": "5XuT47vZm5iuqNaDmiQAfpRMcEmgwCJxaYyVZ2w7qtyUG4uUTNkvSB5rPj5iyEDaadVbSo5mbcNSxvT6oEc1ENrZ",
  "key14": "63WaCM1cYB4skZLzaXaznZ1TW2MWai8Q2FC2dsde4N3bjXEa8gtbaHrbZuLQMvVdNzUihzCCHrDaR9yov4DcaBCr",
  "key15": "319wuSznEtYtd4sMuPWnj8Ji22GqAw26f8bC1A4YxtzyCpDAXU84T56betCNNnxRbgxVARnoaZwBd7vhKM61yW59",
  "key16": "4oGADSfewZXZiiszKGyyK43C72Sbg44n4UgxXQgFnHkPGj6E1obM13swt9iZGToTRmQmzZwQZTMZhuh2wym1HDVR",
  "key17": "5nTx1Hf3j5wkmEiKMezFMvhTCnYAyE88WThsKtVQCFGbkyC21XkXoevEnykHtzdC4ZG4DZVeQzv5FsvDc9KvrVkX",
  "key18": "3yRRtJb4pz4mnANwYhUhxM3uj3PtceALhnpUu79kbqpAhBVVcRe1K4a9jZTDHyr6f3aLY7o59FTL29DHtDwynTgk",
  "key19": "25xMhW57bqXumYvvpt6EhJN9DyfAEwWsGM1SY3BFDoTUTFq8mD3Y6piqVEgrm5amXzKd7nVdVm2k6KjmBHcdC1Ac",
  "key20": "ifUdEdZL3XrNtLeDjHTzY7uudFxrgGPNtSpYGqbm7j72ZVTsHUVGqNT6o3Ew3HVGxtVNEJ9ahsaseNZtHPzKiCa",
  "key21": "4cLM6XYH1J1E8xvXJ5mzAZqtKBpfmmChTmHEtrMm7fQ7PEUBxsHRHfpB8qh8oBBr4YEnWJYiAXxPFC1GMQYvJMDX",
  "key22": "4axfJzvPV8hppKJAdT4WahZW8SC5WretdXKZepsKjk3Sddgg4pT7xLZTwccQLjzGkVatMtUcQf1A2sdhBujppoBf",
  "key23": "3pQ4LyDgWh7E3HXDxUhmX4RfffoXTkDvKXx67Nvd5YkjNFMHKHdawDx3u2nxj496fNmHSCP9uvbJDLyFT2VPLmNX",
  "key24": "CictNSbKV8vxgXh3AtXNZqXQZscRLQEA5yqdni91U5YZTjBVY42i3GAuubnosPpSNUtph47uLXpE4x8Jix4feo4",
  "key25": "KdUBBPWHiZ48Z7HwTaWNjLj3VhyK3WzQ1XiDPn8durtaZ5xz4JVDR8uR87zbU6MLrikmrmMC1M2bnmPAhH7wDeS",
  "key26": "yocXd6DAAv5xqxesrJGSYhYE6ci2t8ufSiyVNMJMqhmPpFueYq9qyuanR4ZHqwQg8hUVvUHZ6dxpCnp2SxbLyCe",
  "key27": "32VquzeHkdabgffBgbPcSGcRpp7aUcb4BvnciEGLARus34XD5rZp9j2Mm5y5AuJwnh77H9Kw7jyv2qESMVZcWqkD",
  "key28": "3utBkBYiHXxChmd6yJAh1A1DuqTbdPuf5ekRCQXJipnZpyovtCbxcyQpPhtQCq8ktnLkb1SFD8CpVTscrUzgFkUH",
  "key29": "63GGEKLG3GV86y6pexRnCYPH2riRVELbGnyAreXG8frmyzScpAHbonPCcMiArKoQUYKGw3UbLprxRkmWe16JirEG",
  "key30": "zhTpn9Z2DkNTQhxieB6wwT1LAF9mUGjGuPYf3rQCjXUVYmGBMV9moY96UVYeh48cCc8TowFT6nknuE9EJSM3DRJ",
  "key31": "2T8aaiUYzyKE7Q1QjMoDjifu5ABSCMXdB4mQamzoPL4vquEw1TZ4zuuEa5AEn8jT5NngrQ5KgwSfzk4ZbZyeJQLK",
  "key32": "5EmELt8UwxmofBn4Zb1GDV5adrPRHX3gmhYQzw6A2yjNRAzUVAcJXrAFRx4akxAz5Wav1b6e5YHuzpd8GaRou8Qg",
  "key33": "NCVLLZ8kBx5GK9xwSDzEvj92qvjJZUqsPWdGcvojZiPP7FCk8admNxMvhArLju628zCwKo23N4KFibEueeWbd6j",
  "key34": "z8eHe66sD6HYP8zKiq9W1UdBaYHUhTpRKxKE4ShA93y8N2PQf2rLQAkVooMLJSnxDXYprw3ZXUJxNnkkt9nf5h1"
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
