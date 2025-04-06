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
    "5HhqWrQwWrytuVdLfbdXqoVHzcB82E5qn4ZdtPGmNZrFhN93eiq79soqdMsRLJqFyTeK1QNH4uA5xAiBLurhBpx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EG9D63di7ZzuU3v2jLvbCXK46ufHWS1j7NEidUyumRChE9JyBgDhZvHMzqbZqfk7mrccRLBNmmKeX3gc3tznov",
  "key1": "FWG6Pq2BXzbVL7qGTn3uML5LAvjHYj1ELHwoi11VHdqkkGhpAZW2EqA1U4X37WRU1Lrc5xRozNEsEWXkearJBSx",
  "key2": "4pemr12imFvrG7KEpjt7WEGo7fYwz757wQURSy1cjsBKfTmDk2br1UzeexNmx7b7AFpNBGsrPnv3rA9bYLrkqFim",
  "key3": "4gSMNpLuimYLQ6PvmR6HAFLQHTTptcsSsc7JkvtQZHh7Enj6cD7iEsrtBoiGJiZLSBAHkaL9xFSeiJtKvYHcsCaR",
  "key4": "52P1H1XhBd7m4vgg3VYsCUq4Spyu998tEEqgGNEyuLXTfjkouA95BSToaewWqEWvfhWzJkX35z2w75hpAQG7u8cY",
  "key5": "5o48EezurQ5GYaMEnytX4e1HrrexjGaW5PzGimjizFqNEV1wJcViK4Va8f9ouNcy7TQaVdRYmDGSvAPwCWbyZPfP",
  "key6": "5jP5S27RPZDMMBNnuBsEYT43iecf6jaKmyhrrRty29LXbPTiPYR9ivXcKEMSuZrfTCBffVPYKFaYbckM1NUDRkEJ",
  "key7": "45gDmV4uDajY8gxqoCPg8n2YmoKpM2gBSsjmCvqJTscY8sjH9DAvzuUqcbwEdKRVpcgwVkeqVk6k4ZJ3fNeTxbcB",
  "key8": "2M6Gp8AXMicdBM4cbPab4Gf5K4jc69qLfH6mgnnTxrEr6nSU5stE5puh5MwLbdgtC6hptHutJnUhxdxQo5dTjnDo",
  "key9": "2m5zvYiuZNgw18V1JGmSFNMYcJv4Fe15B3hUfrahWzxXeGiihL31ntqFWtUcrbvdeKaDezGRMSkAeYwdBewQz8ff",
  "key10": "pocFDHYdfNZQnnXcCiJXfUvFp7GSNMXTiUmv9mTZVuaPdCfAaBeDMGNp3NPJPzDkbErrvhSP7AzDKwnUpXXxFdn",
  "key11": "5KZ8nT8Z1mexHTLA8nouW5w7jkqoo69jJo6LwpV4EHPJtAHY6yNyWJJiLU38CTjfMzBv4twVvi8HesP8nACe7Rss",
  "key12": "yn788tTzZQFBzH5TpYy2p9EXHcU6pYQeRGicZLGronNt9hovN95jifbSDMnU4e6zzjf7vrkG788M6KMibLFoDz8",
  "key13": "HCntQm17bS1RTNxmNWZHc24LCuXVz5vjTDGFTcNmvDDH4aurJNNBXRdMf5up31EbZQaktQSYz7WLBFxSQufbU8R",
  "key14": "5iuaJxozauUEaoUNDyoxUFSCJWAVuDwhGt3Cz1ZpP4B3JbynHJs8GYuyD7z5x4WH8AosFNWQ8BHiGJkeyNPmvfNB",
  "key15": "5tf35dtZYpCDJ9S2QqrnHcZsJWWfzvDLezJtmUZ3PeSooNZxhsDrw12d47JVMsMPMNQahetWH8YMajhXc2QYrnbx",
  "key16": "2o9bBFHkaVVexVXKZJeoFnnC3viEWMAMoPrdXrEYoZYXR5qkTsSSoBW7xktFpV2kdAV1eE8VwRSox21LN1iSPLTQ",
  "key17": "4ErBeRS3YkkxFRSyMmJJy5vuW2VY7YwuzqwAKcG99m1iUNo48uujXKQwbodBkKvXYncqWmeA6SvA1PeLXFr7jh9c",
  "key18": "3Mr4f5U5Qp1cJzFtL4r5npG3qYSbJaKJUq5L7xFZDUMyqHc29CFbdNGQD997D1cQLyTSFQmDExtSg9tvfP5x4Xm1",
  "key19": "42fE3TibVuA3WMsQgcPp9sLjvzRCncLw2hPGRjcX4n4eMvh58LnCBcHoanyBkeaP56kkT9ED5MGvWxJ4Sg1EMEbu",
  "key20": "5bptsmZikbc7uRgx3t28PJdXSftRM5x16sqgdxdyX8qngNFphdNSFyo78tHcQMf36iT67rJJMMUFMsAjUR8cPTbA",
  "key21": "4Tsj9F14LyDhGv7qJSPBEgKrXzWbvEZDsQx1iTnQoRH1VhQjpWpurvWwujaDZkvFjo7okq3PmKzjcS4GZ2YpaxfC",
  "key22": "1baFHAXepvzrFXz3FRuegFiguFs9g1UgVTZejVjb8wE9cFqiHSH9HUDwC9TyoYhFkrEUJG2dB4mWDqqiRh7t14m",
  "key23": "5ewdgAHyhpoS9WAZ4KJGb1Z4vQtDFxwbsrCw6okn7ruN6FwVVkeBGKuQ3MGM7aEXN5JqavZJVbLFKZdx2BoZ4MUG",
  "key24": "2BYP939y53sSKruxrzFpHCwauZTy2QYdqnuPEXSHsDPUDmJtVGmrBFM1uxdy2VtWWStdc4BTWh4uRGDPhQCyaine"
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
