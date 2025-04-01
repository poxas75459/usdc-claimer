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
    "5oPjGqAPYMH1Vu2fPthjxMErmJQp71pXhKVQAXNcopm8DZDdSHCZ8eyxZ8Cythm2jrsFp4VeT4X7d3qHmu5nf6TH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHyMCZZqRVNfSgktCs7g2BCPbyH7VZPX9o3usAo6h4WWzVopEfQRAtciCrokC2TkVEGfsQQMPsGuieUNS1257Dr",
  "key1": "qgDj1yiDFmKjdnN53AdpueSzKfqTUHUmzGhDgRs2BD2AEEJ65EnuMUqWZ72L4XgUPxXErpQ3LcqA63Mwn2wM4jf",
  "key2": "Bv3SodZHScoKp7usocEYgkFbydQmym6oKaFyybV4K1pvJqKXYQJBuTBrQk2GRcheYvYN2a4jDbVnfTzCDwdTRQ9",
  "key3": "4fPPsRf3pMyZgeKcbWDYLrw4FZ3rJEfimRDj74QE4hUY9q6qEzkXmDPNTkCUApvAzmc3xNGFp5ufy8bVdf62cb5F",
  "key4": "1EMwxhGTnANbB9CVjkFdU9QKptUQFXZLwpDcg8fw26cKxwmLkSMDtP9WhztdbeGUsMapYHWVXt5EQChf7JV5KME",
  "key5": "5mpUuzA4eduNGx49bDLwPy65cDsBdbhQGbSQ3Gczdx3HLwcSLQshnGqGZiYXWWABTSXXdKFuuDmRZhinsBeSTB5e",
  "key6": "2j8iZE4qbS1pYfGkpYV1kgpAzeQTB2ESAzEzEyFMJZE613DmPV1S819tdYFzzHAKUMZaV93dHvkRVQwZq5MoK9KY",
  "key7": "eq2UDSWMnvDj6o4cTy8En44AL7M9HnajGdob9QZoisbZjtxFLPA9aSgUUfULiy6iX2Fvudq8uN9zRzHCHvQumUk",
  "key8": "3c7VJKFEybCEfYsxymVFKGXugRHfp6AusCY4jxZh8Rv2hwWG7x6aWkZuzvsjuHJinYdGNudyUY7YQjo1t97Hkdav",
  "key9": "5PhnFYutaxeDJTpjfVpGWX4pNNTdqn8UmBqQ9Msy6AcTSY56bz8APmNu99FM2pHHDfvYt5DtbycWAVQWRuqKnTph",
  "key10": "5jwMqac72bkySEcU5mTKaduLsA9R7R9kHATWpNTRnxEff6JjWDPZMqhiSH4wvuRvmFRMpYG3BMirJ16LxeBbK8LQ",
  "key11": "4RkBUyxP3oUh5gpgx5CXjLw9MaywvReJY3MwrVaKfgroAt3bX8zEy2ENxM8Ho6FMDoY1DNGs6guvag1eVDq3uadU",
  "key12": "675GSugUdHvK2XSyrnAvvWENqnwog76gcnnGrHcNGrE1svF779EuzqKX3ocSrStvoKM2hLbeWP9aYHQnHbpGxP9W",
  "key13": "5TeMVZ71ZaifVNpDjJ4ci4o4eFk7qkz4UorkzTW8HjPo6FeUrg4vTfP57ShmaFhcKxqLbke5abw7FrxraU7QkdGy",
  "key14": "2oSMNoQT8xvvatvBUstsaSw1GwDso5oL2vQReUDtUEX4zcXk5P8x485QQ7hH52oy8FF8CgHoc2vWa7jES6zVwgoh",
  "key15": "GZXGAHaTgY3YntghSGzjCX7aG8ALGVMD9XK573fcUv4sdt3FhkWXF4jYJ16FKQv6k8352xYyfd75ddm2Fp1TqfD",
  "key16": "WoUobBZexJgRf9D7aCq8TV3WkAsRWPL8YntgQZnctPY6PmdDnK8f8YKHxHEmGYqReVUCdupdjcrTdCvVxsV8Xv6",
  "key17": "2YyNbqxq4Q6NoLyXgqXxyKLXvR1SWM6gGRm9XiXQ159EdnZR8wyKgkXGH6W6ApbitVw7XTutfi9mkwyH3hXsC8JQ",
  "key18": "57JWdcAQMAzscQUzjVFk7bb6uwtcquZ9S1BX4excPQBwBwkk46iUmqJDatuZuCRTpmTt9ffhi3kWP362nufuETkv",
  "key19": "56bScYFgYp3C9eq8bwCWdwgUoLsAhttpFpp8F165DYVFws1yc6yz3hDcjbLYJypJtX8a3soZtmJQCKdMVmwuG7JQ",
  "key20": "58VDBGawh9EK5Fau2ML79yRh67YZh9EazECrT6YeyFGxYfhZe8kRCSkhUzTALxGu1VyXn3Li6hEAEfcR3pKSx7uf",
  "key21": "2iREzQc6gtTXPUKEsnSz3PMyZKWkJEEEEnqzoQkL66UnCooP4N9ioGkMZ21RedkRqLRNoPwHQkARkg9jeBcdfrkv",
  "key22": "3sNp9kvbGVaCc8CA1gP7X96JnNWpG4EkrJBP9Vh6KqwYc8kYHT6k4ea5PniU44ZaaQ1tv8mbu8dHPyyWEoinxQ2u",
  "key23": "4Bfz8fDSsyGhuvpUeNf7fqQpc8qHpw8Megr89Nbak8xLZir9n6hvfkCFV5RPuyUcYYSgGU16hDmoVtPBrZ8pb2Ea",
  "key24": "2AyZmBC4MBe9j7i5XyYCepduae8bNLSLbaChAUS457R4VDu2ksKPjnGW4HMHScmYjcK8HBUnWjB6fGphWZpnB3WL",
  "key25": "5ek7tK1e4DwtR2UZSP9Eoua3ZDeHqbH12kBAkauLBrkTrT7xtSS3Gw3kL2GnqL6HvBnyJ1PPmzW8aLcP4fYedwE3",
  "key26": "3D1vmPGZWMtdh3SmZrgNQ6kXWnKrHi7mDTZQChNHh4iEd7oWhZ9RYhg2Fxajnje8oeLwh8Z3HZHVi4MLMapCXCdH",
  "key27": "27HJVNQbpQBAZAKBmxkcywWutnCsk9QfBjqUYC99xNTCouxsraJs2TTsnwjHJk5atkwiWjQwhaDEigknDajNRdPX",
  "key28": "2qpPUTcWgirh2MUDEqEfYRsdbwMGksnpiaZULR7n8hdWyE786ck2y3vfSftHRDgfcrRH7QB2fpvrUc9Au52ZqEbu",
  "key29": "61AZaL68gHAtoqqzdkUoKNarCfGqqdQrCcncZEkaxxNJU81jEHuuAqHfnfxg7ZYYCMR24XC6FGpATmA1Y517xPNy",
  "key30": "5DiQDmtPTCKk6W3AZY96iezPbZUx1FZZ4bUveYTqowoWZjqNj8Y2VAzgohnMjHRvoa8gBdHPimVxdtsoTvkCViaK",
  "key31": "5hJBmp4v3juaK4PJRmYWrQz6GEh9qxVpSF9BRh1skAq4gckaXgopmirBqq3dLzdu9kPkziFsuXxnAfCEVtAEkRbG",
  "key32": "5WeJ31D1wEXuLt14y7wQEmbn9zKsgWeRBAsSRCgjpDHHKM98ZyW1CfquErwQpqiak8YvSVgM8Rm9koo9a85QFJna",
  "key33": "4UqxCATedxVZnV3XyXuZvKP98CyoNNZUk72Bh3oWiRp6W8SQBgJ2s85Dt7H1KMgQUMSeJq92Y5XTMzVNmhcYYHav",
  "key34": "3eTBY3UYRsQ4DfVtf1dYxKH5Ga7HwVwycsnSpxweU5m6TepHRkrzeVmV44Bw73RNuKHhc8j9fnVPsFuuGmLTySqE",
  "key35": "2vGzmgHSRsCY5uDeEJCr9a2VkyzLpuwvKxqeGMikQ7dPQRvZQVkx48ZMGsLQRHnPZFSCPxDpcjxR3QKrw4aCi4Af",
  "key36": "63reGkQN8BtuixZkeVL8FLapkauqi1h1TpJPcrdmodEsqmpPdbW7CnPNEdmahZQ8ek7f6yjcuzdzPFq1bzLh4vgx",
  "key37": "2dKkLe7TfdJTKSjQNVBpguuwueGkzDefKV9vgMXL16vbzpWwWVmjaKHGtkpj9WFC9Hmq2VBvHdKhrh5QrpqNr82R"
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
