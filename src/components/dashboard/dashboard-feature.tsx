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
    "5efB17YR8pnZiRVamRrkt3bQ7R9VCNs9eyUpFoZDjvAScxLnQ64A7bVmeE9tGJZYEYMPH3fknsUUgaXw9HXR3ePv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsXMNhyvTxKGYAi5NkiY1eRZTFjAgfnMnR5GCEZcCjbWqgVB8zgrXKsr29jWkWEVwFfSVw8YFiNwgqXzghLTEyV",
  "key1": "4i5nH8bWBaMr1ndVbsxi9cKkC3YLsRRa5pW1G5RwfHHtmAujF2vnQno87TyoYjxBhdZGXriytkeU5bdoCoiyv3Jf",
  "key2": "3m29aq8q6F8mpaSLbutviKBgzi5SfedpDakt6A7HirW1jzERYpJiCyhy71442W7HYFihFsRixxWNGpVPiz7mFUCw",
  "key3": "5nQUURMathHL3R3KdjUpGodbfba69TwZ3NjQqwTJvBeWrsr3zjRvDcsb6Q21zKKjBq1oQPfnvS5xMTs8tSsWzdfE",
  "key4": "2NGGj1pHLr1mQPKfmK1px9e3HWrcbK7uB7FxS7UNajyvoKutCdeHwqj7gtrPNRfTwvMLGgAfYitGrE7WVGWBWgsj",
  "key5": "2ys8U5k1D4kJARyu1R2pYoj1XMfagdGrCRHUJPPCRCMx9cf4xQ3j3QiGETSSZrfR2HMWspcqTRf9f6cccLFGm8yD",
  "key6": "244X9gH2yBD78LQB7swbsvyei4z6EownjVrNEhg2xjqZ72VteENu56qUCv61A1ejPYSjf8JuAkZesPCqPfXL8HTj",
  "key7": "4SM21geunJif1nizCqMyrJhuTWvM9q3faphAKV3f7WkpxgeJipmE6k8ejRjCXdc1NgtWitkPE2mX7AZFkXJaaGuZ",
  "key8": "3xZLCrmdHCA8U1cxZaXcxptmBZKBawTYMppBUif8r61viuhrGEZGnWxE3GDz17dcM4Rg2hBRYojHLo3ZFhiwYD72",
  "key9": "5hmodFvFkSzumt8yJK62BaDpnyvmogSsUyoJqW2jjyEfG3YzkcjyQrnvZgLAqmsPzUrhnhFzGPr9EXHCJwRG4W57",
  "key10": "4ryC75UdhUaF7ML9iSgBA3CFxqRH58SSYm8yrCeTqkWNzNdhDPgJXoz5MMw2VZZuUMGhP2H9Zzc9FhmK7XR2dUkW",
  "key11": "2YaUA8EgjXDMKjUZHv6Tv6zwtJnPLsxLLeDqmkA8V8yqiZCS12nMuBzZCfNcAahNMbti5ExPgwTrpznUzQQPtvz1",
  "key12": "5wZbCXa6PLiTLXEfjFQJrAjXaaKrGbYUx5BWFQZaNNPvkbHpeeQx3e4P9i7XuNN4ijp59NamMzdXbzty3nZpvA54",
  "key13": "3i5GMPbZeUqWozY19jGDTzz7iRMsYRhTFLyebnUgiN3cTQ3EnMTMGhN4t55nR1GLo8xndGHzRNCwyLDgr48GBH5b",
  "key14": "3EtbUUDqhMT59vJ5r86kzapErAUATw614vV5vbt96c1NN9HSTA7e3KLagGDC877kn8qajb9NAF1FNxg2MHBbS7EU",
  "key15": "25yKPGCRLwr8TdjPizaTHMpQnaAG5NSsFJH3Foj4cEqVt8jfsxNSCGAr5erSEdPkWBGT3U6q8NDFPUu9fRGcKBSh",
  "key16": "VRzDmj6QRTD8qsUQFUg6pWrEmBkBrWFzHVmAoEaJk7bxtiz9tuZV5BumYCPzcfrmDteZmXVkhTKC63zJEr3x3ZL",
  "key17": "2WXF79vgfE66X2hjTVtWUNKtSX134po2WbYnQxPL2yxGQPMpUnwKbbXyzj9kFZhmU9DemrPMwQgX94xsyHQWFC48",
  "key18": "44KzmAUVhYp5PEG9Vy28JpPAxYvi3wGPwtA3bmT9D1WBTKk7YTMvUneUC4ezkipaVzk79nUTs6rPpWB31odUMieQ",
  "key19": "2R9qYdT86soNpJtb2unSpopjBg32hkVg2Tfaowo5fTfy8372qeaDFFT4xJJ38XAMsWo8evM1D35JDmTaMDDLEnVe",
  "key20": "3okHpJ7WXVnnitL7Vvrm9hqXYg6nATxt1Nf2TAZEMTFZeZJPKnenzQ87xzP85yBNnq5a1W6xz8jokWjMygLn8abL",
  "key21": "3cigRwbPYrxWQryiQDxSSP4w53M72vu8Voznn9w9fBNPnwsjRxhZnzBNgxgPmE3vyvqAv9eHXgmw1n9MAAeFhUwb",
  "key22": "5rPtCN9G2tDGoHqYBXnZfxh5bRNX463SZvt53FZqQQ4n1p9AnWi9nW93es8M9tGsT224xwMMC6FavuJZhTRsFqZy",
  "key23": "2E42mPDpu5R7Zj8UijKyTQMgpdHyExKPDpDKaCy9CsUgnostaPmyYX8Zk2czwyeWqmBUdn38H6YHR625KkbtjxMc",
  "key24": "4wRk2vL2gZdNQD6q5xPFDKboYz9SxaKzgTeZ3yLGb1EqTPnYsBcfBi1eZPyfQpvSETrkkeVzW8BSygTVFxtYmcM4",
  "key25": "24xiGPMs5uRHKM7EKsJjDrZ8iZ7jv57bZh6ri3sGaDPYdJhZoB9KTiUt5NevRVWn1m6NvvAzZbLMMjTjsfRzLYgc",
  "key26": "4BzFB93m1DEACtzdLeaZFHVbFf3FVTENDEYR1GbTMo1uyZEkHR7NAfcLZaMpouPWYdWARPGY63EKJYLJwKZLV2xj",
  "key27": "fFMMzAH8DKLP5dLuKsWW2LHeyi15GJWuN4fMQo9p3BuFS86npsMWEsxuDzDYvdGsfHfL5PN5UtV7iBGyHXRiZJD",
  "key28": "droZmLVZWKQB4vFx688yxzr1Zxxm7ospPw33aaQVgbxdQJn4tbHRAAKepjripehzTz9uEZ4Km8VuvpjVt2CXqSM"
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
