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
    "2mtboRAvc54Xg1yEYD9mCz9eTnBFv8Bh2CGYtB5fJ23A8ymXj2Z9i4pFzum3WAU548jvBmb5Vwm5RrpRY8obtNbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84QB3UfMmPzzZihUnyRTM3uvE5yUHEhw6p6DFi4MUy1c7RaVaWMZzBi35rLXgepkXiJfdkN1pTYjtr7ofdVpaeC",
  "key1": "v3gZAY3Zi5rBVDszSN8Ke1x2W358UsVP4MVHmp3kZWuRERY7wNRpgyo4vuUYhHQ1zZbRLmigf2zN88755t7t1Mt",
  "key2": "27SyaYxPRVnifNYuPoKq5DSmFDMS6Kp8pegKGB9y46RQtMLLKAGHdUpwF6DNGKm5iCbTtWGTNMoitngZDURRU23t",
  "key3": "2MFezb4EmbaAjc86dWR9boJNnQPkyPhG4wdSyv1zoSJt24NgkXFY5xLrT4GG3cZ5DAeFKRy9AaDunk2iiU5Md6ow",
  "key4": "4xvdpR2VVtJx1QCxdpQUPCstj4dVvKo9s5ft8shvD88o7fKaQDeHxWBch3PhTKEkLsJstboitMbregHNd4bmySZn",
  "key5": "4tdV5YpnyxvJ9KfyHMg7djdhZmJyocbCzY8ZdCG9VBvezdbtVtCzGzmqtHQ9KHgHXx9JtbiCnYcWxLpRdgrSzSMJ",
  "key6": "3W9inpKL44y1fTumadWTcgRJpuZoKZdSgJkyRDtfeFQrg2jw6bhLyFz9LaF17d3n7jjbhFJLEB6zrh83ZCKDrgxS",
  "key7": "5FneSY7iaRmTB48dA32GMBiLJS56HJGDKeHBZ6nSAmP8D7ZRecHd4nS7iMhnjUyB8EAg9EFdtfi8CTPBYasNwEaR",
  "key8": "4JjEMqUdJMHWt4KJR1pGpyjF15T7bmnbiDAvEUy3MvMWffX8sNE4AfW326d5FKicFSuka6DYud4cc3TQYzCBUtNi",
  "key9": "54yAwFsbremoBEoA33bPK7Ei19wrdn9jVLnfoGVzQ5rqVp2uR8AMgkmFyjhtVnSGNpDzM9UDRjf12B7po8onCabv",
  "key10": "4sW9uNfKQfQNTfSa7J6usahsaxRBQ8ap2LWdakNyza81bFogYx8zYj8fmGX4sU2BoQawdXYhMuTu8GRr6b4Coe7Y",
  "key11": "5R6GNa5mRuCNtNyV1CvSHMRGAtdcEbPgS2tR2iqjjPjEjDDVrRHRbMJSAL9efN5Pc3GwWKQhMk7D1skZf7UKvh57",
  "key12": "2TuHA1koxoXQCZ4BUESHwydvYdHegiTf3M33RHjz6Sc8476a47pfpmVBsVsQnk1vJfz3urofaRUEKQN1dyh4DpVd",
  "key13": "5pDj6f6uESQzGFnfScjrAm3MPqj7B7vMPd3D58ZfuYne1zxXwU1LVzkSX12Sz1ndLjrYdjPBvQF4VanebrXRK6ES",
  "key14": "CPF7fULYLUP5CLJoMmwmzAnDtT9khCd4eiTBxYhjHJZLvPr7MDJq4Lzq68aTSq7i7NDeZhJgA6rYJbW93qfLVVR",
  "key15": "4yJgRhHN2EqeX5Se4jk95b2bpZnXjhishDKV4ggqY23N6dipQExAkwSXMXFacbpXgRKZwXjmx4fhHkW71vV8XfeE",
  "key16": "pDk394H7yuL7WpgeTuKm2rxgTFvJASTvYg1bWpQnMEXqWaKpifQofBcKCbxBDikVADc7AKgqdPhdkqSmg3DG2Cx",
  "key17": "5fXsgFkuBSt7PJzPhbHWZkocmyQkGbLzSvpSRHQmh2ZC2U5MfF9oJ3foUMUQbMXcpDBmP9iuBttc6ZUrj45wJprL",
  "key18": "F3st2pnTdYw2Mi4TUfrYDfGn9VZMqHwSee9bSwPKniRs4oCjM9YEHriEng3KyMxr2ga7Nb9vywnRtUaf7gkWAwP",
  "key19": "2vhbdbvzfpM4YvNEAQv3SG1Bh29k6dDx178rkhu9NWHSszxDzm5MMN3x7Gt6yW6TUDwCa4h3znbka3CeyoLRvfvJ",
  "key20": "4XSYQBF1pbiPEcEUM46gX22TXq8CcgtbWdGeNgTLYYjG2oHtE6dQFQDtmb8vA8u1nGXEvNDUz9NcDiMYmRjS3mS6",
  "key21": "3hTzT3ss9p9mjU6DrR3uEnPs3zrfXn4x1fHaHEc4HCh5NCa98VvsDhgBjs2cxyomsqrxxcfXujB2sie4zdfPvr4M",
  "key22": "5fjAfNh5EtqSrAFxkjNkBy1sVhsxj28VwhbfTRxFYBLMitMHrpeaMPQKLXcq1zd8h5dCYgqUrkU6ExgsgPWekAi7",
  "key23": "53ya4o3Pr8Y3FXUQ1UsGxQ22mqm75PubwWWp9A1nfa4TYY5SPx8gSW3ugDysDDZ4jSHtCDyZHPwWiJ6hCDQH7Uth",
  "key24": "2FXJ5YEqCEUmmtSMjzuAMXNCgxDzRmdGWSQfhfVNBVRqjzCssRkVvnLe7tvH3VerdGfUrJ8u5ngzeEjn7oEUrT2f",
  "key25": "3WeeZ8snL9NnjA6kKVBfRcStrvZKAToNPgE7xRjEEUdidKuVCkwmReuycF9X93Gv28fAdmF4KWuQySGRvujCRgDm",
  "key26": "5Twqed2nNX5HU61MDytdC2KUvLonejM8SyJvodggoB3vGS12RaQmijvED4esGgTkFHTN36ks9zsZATbVy4FdSCiZ",
  "key27": "5PkYEZBjXKveAbeAdTNbBSSpBrN1RTrqCPsb4CrcLs4tAknKCo1R7Gp3gtsFvX9Krdc548UEWpRMVsPsoEQ433BB",
  "key28": "3UbLLGkTA7BMpHbPT9u5v5Xbkdn4z5K2P5iMBTmC5DQBsATsQgGeT2X2mHV2HP4QjLpQQ9pPXYfbAndgjipY46NY"
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
