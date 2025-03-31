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
    "qYU5B6SeKQ3nqKCYYdZKsnNMTbmcBvezpKP6q3EAsSkYo4ChSgkRj1a5gqdbsZS6jUA9xgziykayCLuH1N51wTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CERx9hYyjCtY9cHVzwMkZj1aZCSygmYd94VDyBNGnW9LWr11WdExYm1GbPJA2CxtEkZm4rgKxeFyJ8s7YsYCGaP",
  "key1": "2DdT36Mi6jyatBYzsYsmJN6397xdupbcU6t5mZpnYG69b7cNaRut3v639zuR8FXC5545ZzijbxJbnRtVpMnNFMj6",
  "key2": "5obA87spj57gKiPuubyn4nVCRyHY9x1GKjQdGWphrcDA6rmJuoDd8CUN3Ma1N6bcS1XcT8uuugeiVVEHcXWw7A93",
  "key3": "4WZBwr4wbPKnSxsthg7ekXECYT22qZhJqQMBJmScxQWNF62M4MUoU38QThfHJ7MQYsLbef9kakDXPVAytmUEB84d",
  "key4": "2U8nDHt4g2uYT3vrkFGP68v99PjsPJ4Tufoh2j2yyGkaXhH7aHd6o4S6Z7s4dAGH8ou2Cw2dDEdKMdxvmdAca957",
  "key5": "3aS8jRikMXFcxr78PiAL9RR74joG5LRUEqrooBF9o6QWQWiWAVySC6rGEhDVFB5sUNrS77kFdqmKQAskFSEBUwmv",
  "key6": "5czHYyQibMyNkJKEq363ht5sdgHz5QnJnEkGMN6Cm9s9fcJtFGVxs5euzfq9Dd93tmzZkAudRsp2ZVxoCgxhoyZh",
  "key7": "2EpvTKKTPYv7Cwp781Mw9WdgdCbXZcpj3r9i8fu5Rq3aQm4DNzPDyZh1SPgPZqrkmmR8tDPfmRxVQmQqKVn7ksm5",
  "key8": "61mTfhX1L2R1oVhLJJxCnYURD3J8R1f6Kbn6oAFdv8PfizKFfsBbQAwxJyiAq4f3miN3aPiLWBMtuCCnKYWowJ58",
  "key9": "5ctPHfpAfU6Vzx1d8BvkKavna9cBczJyBKbYzEU36CjWp4LXVfPwGFc7zYaZTpcnPEeSdZYZBLamXBE2s9Ft3USt",
  "key10": "3cJYbsEdLLVhjM7MvRYgtJQTk3ZUb9vKpo6vkyx9BwYarU2mT33iT5hQTJM1sWDzrNL3nz3qNonoazxd2x4GSvFM",
  "key11": "2RNBXCGezvUyKbVJeohZ6S29dtF8JLwnK1mYR8rzvSmZNqpXthJFMd6s8nMMDwTsDjnxTkTKgHmB6gb8zXvBKsU3",
  "key12": "5oCtyGkMso89Zx7qNVWiNTe4SoEuoKEiUNZRS5tRKSNr1zKE3DHdhAP2N5mgrLsrH7Rqj5H7LyAaTGR23ckvNpiF",
  "key13": "4ixNsMa8Z4YBtJq7KPw38qdrKpvSBBgfwiABo1mCr37wP8CpmTiGh5gHfrWspApED6b4RTW4i43V5drDpbC1xczJ",
  "key14": "2HVVJjcy84ryff443FG1eMZQWo1mS7HAqM5PsjR3XA6u3t3dSTSGBmy432TiSyHwg9yJW6SnkaZoY7PyU3LrhVve",
  "key15": "2jjVz2MWAG7GFMQVaXgqYXooWcf7UfBiQ6DzH5mo1QFmEN9x9UmMVF2i8PXY9qot52Din3zKNetgsfrGgNba2vrF",
  "key16": "n9iwYaFcYGdZLte2BzSRzrbGHvqCduD1c5F3akBRj8zEQJu4r334NmV26va3PUQBGKwETHhFxDx9AZ2cT4EneQC",
  "key17": "39m9A1JBYmQbxDGt9NbYd6q2cnhbpPnKobHSc3cVkbX4YikacF29eBt9Z8JtVjoRBbVpdQWPMRm6iWrQnTebLqUh",
  "key18": "3XnNTXYfswXS93aR7HEYLwXQDd1qHZaDRrm3A8kf1E6wXiCr5kqDzKiAH2Hy1YVgmtNEinCV5y2xfacYohJtjuJp",
  "key19": "uPJSBY1nKCe82tcQohMzQenP29534tMvyiqkWqtUbySESkX6Zdf6H9NtRxpiHheG83aNEL6w9gvun2V9t6emYCc",
  "key20": "sBdbysnzk996TRnXSuT2pVBGmXtEUnfDtTs422FC77enKVh6iZPSZqUmmfJ4766y5T4aEEttJ538H3ZZiaVboun",
  "key21": "h5ACqiBvxv8BRnizRFCQhaS7B1eYSp3KhJYCqYicM9kxNQVCbp4Rvqzs3rztm9pzhMk5YSzsrhmDV7ojAtqCWoZ",
  "key22": "26TFMNHxLrKPEY1LqUVAhFp8jw8KY96ehwkK5HJX4gZxkFfHPvzqwkp1vZCzRq1KznAxVX4jqLu1S8XJwRSuvSaq",
  "key23": "YcTHmxuv5uchRP6azSibqqmi3DHu2udUBMCWcPUYpxZ7fjeEZ1dhteCibmYyDt7oybNHy4eYZGaWCyECz2AZ5vL",
  "key24": "3SGHewFCfBt9zAGzkixZcWfXnV3DUKjev2iw5ztDWaiDq1i5SiieeeDN17AfC8cdQbM8hj6NZFnfdVnH2LshZyT5",
  "key25": "4WdgKZ8tbRxVEumxuDaPDak6HcAQa3Ehs2bX1m1HLqiiFF6qU2dVxtyfBLof3sMvroyMrzzqzn91iB9eR4gUpLcM",
  "key26": "5khy7XvzTUEFzkX51ftBqNEV6Amw6UgPpeCa2tiqrEgoszVayUrFSmaDR9NxzM2wJuFGUUvF1q831AD5mJ38A1hr",
  "key27": "5cdC1Keq6PghJBMiamBrx55ke98uVouNy1cpDdym1Pp9gy8Wt8VdFcAtn6YgqCXXgjj8ahPCYNa6RnCwGfLvRgX8",
  "key28": "4Dr9KFTFP8mLAosM1bPAMnr1Exnr4P55cgSNzfNvRMDhZLkuryDnJSuMMDoQGEQzqNy5DatkNSggkRM4QpL447RH",
  "key29": "4qGsCTLkWaJvuGSuWiNiQnYSA4kcCZyw28vG4HQFu9Ao8jQY3h9wV9Qjw6xVfCBmkwrJJaTyYwJTUNy8QvCUdFkx",
  "key30": "4ubF4rUvzqFgFWzKD4L9CYWfScMCN39yQ666di1NeMar7k3muxrthJd6wLJQkHrgUrRjtgk29EvSipSffcKkkWTf",
  "key31": "4LL9zxYvy6a3qxzrtWUC4getKvBS4NXh8tnCaugiEiMaybc3iXb5x7sRBSTHPw738WE67CX1CpKKVXdiPs3gSKN",
  "key32": "pAvS1qkxsvJDVFPNpW42UwQfsBg3XsVQ2vkPgAFbjnDNMXmbkuBwK9FVBivzioFtsZaycN7vSsRwfUi4g5QZ2a8",
  "key33": "23TP1CjCr1joh5dQSE34NiW2Ecjw8gWLefWAfVYH8t1sbMCX6RnpX5ybK5dEnwVkzmwm88ZcFG2iDTRLEBrPJLLh",
  "key34": "5ErJKBVVUH8NduJyee6P6xUvS8NovC4oKjNSKgegwrEjZgtouDchmfhPNYHNqaqPmi1QN79Tuxqd6i1NgWsrmXDE"
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
