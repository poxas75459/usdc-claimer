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
    "PffaJ3Jb3MMR4a7tKom83zz6p4unXS4Q4MVs9hwscmZRP7gR2q9LykjG2Wu8UKGhuC2WFWMer5mcL5c87ue17jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TpYTZLAG8Wp5CdQdTpuiwkmf9c4S84hMuieJMBq99Bn6pZyiMKz9uVHPJ2uu1yGVDfM7aj1mP5KdDGjK2V2FSsZ",
  "key1": "2xbkGSGQqWeA2FABaMeCMYRMs398f69FnxNj197qvGBowTRAcUd9PGcofmeeSFsByCiwyyokM3zrwEBjFGggM9ii",
  "key2": "4tU8qnu819uCXCdjvnxn5wwFNR9xnDNBepnkDNNJmfAjqjnr4X9D94iW7JPBx5PVgkbz8catq5yRotKigN2iEfGX",
  "key3": "2XixhthQuHUSM7HC3N4rJboaeZhRcicaC65xS9e3fC4rv6k8abYP1Ly9sKuEz2DbWR5vhcF41cqqLYBHAfkZfhG6",
  "key4": "3B6B4zkNFVyTbSGP3GKcrBaq7R4C8PjHLBP1iDamYAGVPXBRX5SGBy2EVH7GassTJN89zpHQ9ZvW3V57a4o2a4DU",
  "key5": "55bqVzV913CRk67FB8hBwBvyLnmaYo83ApxJUieoAcudpD4ZeyCMDt29USCoxzzyEFwcU1KoCcpc5NAwXvtFiVhd",
  "key6": "41y8bkWt5X7KvLd7KHNafbVHGFXqQxciCioF72E7Qes4BMbQbQwzyY96xTXVXJENv5mZoAHqX7kKTdQJfXb1SFmy",
  "key7": "5oJTj1EnwMuJyqyhYTktU5BdAa1bbAdjo4annGtZSJvwxMWoaZjG9zNfjn63291CvfS5i5gjhLhxYKQKYojd7GBX",
  "key8": "2dhvhhowUPhzdpYoJMHdYk3RajkhXhQyDRfKMoCoEVfHzre3K42AZC8T32XJAjoLueRAGJhhaSR4fXWtUbpBGzFT",
  "key9": "4tbpopyAbfWz6ZuhWzkzJXGe4cwR5w4nJprn4NnjjmqQywhLuMC6THfwY3RxV33CZRQakJzvLE2VPC8aZv2D6z4f",
  "key10": "g4kVwuk2mMu6wR68vw4NnKsN5rmhPt56iDp4vLkrMxVozZgThEr1oJRziBfcdfHmzT5pXtBDLmusD2c6Di6ooyN",
  "key11": "3RviYJ4pLyV7nUTHi97o7XXZNywzDQq4oigsAU9u9B8Dw2jpc2Fqua2EcsgqtSsNhW7NJ4wJwieuFqsDmz3tRW1k",
  "key12": "gs4xRRrnWEHr6bUE8coND4ojWkRwaCrcoKU73r193EyK9baS9UUE9Ciea2HLJ7Xci9gw6KvL6zMBUeiTcKr9PF7",
  "key13": "3YXsAipC8BYRii3VwWF8dQbxQZYEwt7nwcfC5ErxmtK2UrySGSUeJSog3X2vARvHcdsV17jc6pSXgLX5vzZhLFhn",
  "key14": "3yDahYfEH2Hs7khcyZWvkQM3ATr8LmFSzf6YVzyXTeHAvKyYAtBwFojMWAzLU2C9ENsFSMrX2VihtGRinr5LTq7X",
  "key15": "2a9QH98dAQowUwsajhVj9ABztfNtkHuyJTsDxZzMRu7C4cYJPqU2ax1QykeznTuxesX7cyGCLUWp2kGGCJiTZve7",
  "key16": "5ck4AuUDtBbQqgMnBhAZgxztf7M7Gy3omAD9Xq1jGMySCbf841dTKHuyrEd8gzAyZdRsVsJNF6Mz7oBN8CKgUms3",
  "key17": "3YhyRpjHR5pe8m5mRDDKwQk6VfUGGauyJnSB8btxG86Gxnwza7Qry1uFboyAmHfYTN92DWNmy8Lg86RV8fNG63r8",
  "key18": "43EtXprnEahqfcQKEcf3RxadHtxJqxs1Kte1NzWNSLvzbFaJTZse2Q9S6DHmtGsJEr2pX1pDQqiyQHqDcGPySexb",
  "key19": "LMxKxh7D6iTXYLSncAezDPADSzAnbnPXFEDyKhBWBXXFpRH2Dsha8UALbkKUxRqXg3FQTkUgpmeuwWNxXEVngHS",
  "key20": "FTs6TUUxETxgZ1icqQp6XAzyKkbjBRAeos4Yp698JyaJrjbaiyduFtaXB7wTuX4BdYmnxAiAPfdtPYw8qwJFtHS",
  "key21": "Yw7JZNsqfFcgQZgzGEjXPe6B4sTmiGsE27hbsZaQU2pDRNdpwGc8vjhaKHmLqRhMc27aVxmRVB5feiDc6K5UEuw",
  "key22": "533kthXG9ihtvR69KGbsV64AXBZ7UeHfqQLgnw72D2BSepyNcCxt7pDFtQXja2opRa8RKzQnrdVfkaUAqkCmLWSs",
  "key23": "57QydejZBg2WnEPj3bDc39XRgqK6gV7ob3NFs2xg3TeJq2RTFaeEpfJ5zK7PYiHTJKxDTu8LRw8djAGBti33ZibG",
  "key24": "3KX5gBCy15f6ukznsXsTQVbAWnKrc9gSVjJSgKytJwWVg9zVNPnb15Kb943AJRFjE3noL3czdgSorYYqocpqy48Z",
  "key25": "8zqFHLSBTwK3fSWTfy8a9PVE15pAVu6oZfbip2jAhqNLp1jVr7CQNmT1ed18WJp1eTrHNwWVvsd7hwhDk34dkHm",
  "key26": "5UKatLVwzscyS6jg544g79ZhvR7482L1etrnbnx9CjGZcQX4Xz9NtmjZWk1nSH8oM9brThSgbGFhwGJmMhpVSr2m",
  "key27": "3ziXxieyZiJyaadnJfgmeYtLE74SMq9jf9eMr4ucgJwt7ymx9BfdBbfGDSfE7UkcR71NcFQNjt1pNoddhqLk5Wup"
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
