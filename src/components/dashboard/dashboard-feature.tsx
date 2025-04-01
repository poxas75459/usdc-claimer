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
    "f8Biy6MwZKFFBNWqsUgNxak23o3zwPzZwYucDC5VFpik6QmvtNLdXDMydrPb26po6JCt12oSzaWuYeDBdYASc9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XWeyvCeHDQyge6hviExKkbGgHFi77QzX2JA54Ri1AbwpJ4D86Fe34556fNpkGb2btaDciNZQcefxdH9fAYsXbr",
  "key1": "2LCVzyZY4oTDcU8NqMtCog3UKpXwHpE42uMgBTBdzsgTDg8UgBFceCEM4qGpDPWo6jeqUCiQ2swvPzpjjneukq74",
  "key2": "2MPxVB6B4Vznd3mCKVDmkRntSiYHqzFiyDAvYVWZUrPtWFLRTm3o9HeAXQ9ZvcPBtch5ibw2so4YskVLacHcw8YF",
  "key3": "Bggs8NnAptfm2DEJmrPPykaCafMnyWQ9up2yDiVJofyhuJNpog6TLodB3Q22GED7zT34x8QP9JxQZ9heu5WbzQs",
  "key4": "H9UiaU6oQbp56zvgsijuP6dtC8hpTgMcor8nVAZ9pZT1ku1Ahvyt6WJ24Npv4r5ZYqJCDyJcZVU7fSZouu7vGJT",
  "key5": "5NiRFAh5YsejhzXqmUcZPYUjTYoLi3N5avvdvXr3UQWAHJtk1QQLLZE3DMx8E9tM7cWnDaMufV1DyzHBzXoQd3TS",
  "key6": "fHvV8fnag7KkAt6H5LEpDsizULYdCBMiXCgGBb89Swe7rAeJJ7ZHeGi1xUBoKTq9KPXKAYidqhK2PgKSqFcMDtd",
  "key7": "5LCHeFhpcjk5vXG5qtnPzWHrYoG6YJtmodh3mjucNo9Y8UruNvBWtSF8snPNhJHKaLTvgCciWetQBJQnoTRsMVri",
  "key8": "BR6za6i4AzjRSk8hCDNv874imjAF3StGckD2Zq5e6s9xorotmHkwo31uHQJHcunsmevqAznkRvJ2cQX5p76TyjD",
  "key9": "3pjmSHximxH6gDMb522sys3TEMZ7j84whDQQ43ZgiMpE6q9G5pJ83ACN8GXoqbjwriFGQ99yHojXzzJEzUq64rnA",
  "key10": "fU6aUpaAb1oPeRNzmKwFGewyCeceRYKm8uCFKkC53XBRTHBzEfTDidhwuRu9hmyHtxqxNnCmTPZ35TDKBdL1KQX",
  "key11": "5Me16mZLcA9QWzuJZhkvc3HHviPbbs91rDYL1Zh5SvwFjTgB8EQua9J1DmkeRg9B4ZDBAZWP9zosTrpKX7AnmWZk",
  "key12": "2Pb5GuX7ELNv2jDKB5nvvARZtapQfj2vSwuvkQ1FjbEhmGdBXUbxcY93UX1cXhnzqKpGFMxuVRL1QYuRUs7ntHVs",
  "key13": "5N5pNjhtQrfSRSRch7LbQa5APMLYwtQ4itNzosW4VoqjPkp5zXFqQimE31jrxZjAEQ18cqRezSNoopRTu37fwBPL",
  "key14": "29AHLsABLJ3K7UANuMGwV4o9jnpDV8ZhwZrnQQz7jJYWqgi83Lu3QCF7TWDp18buJSJpyfm9rtDDjmAiNJBkrjxA",
  "key15": "2dUNVuSjaVeeULjVjeUkty6tb2FYUBNSvqhBaPG8DCURNBqsBfeQu969NuMtF9ju6YLgGfXgFJbnDrgPnAxXPa5F",
  "key16": "5CtxhDaev4P6imwNpY1mohuLfNEHciZkAPNB5q4kUtpzVWNkZiox7NDT5HWCyf8C1jdDtTdTyeKyqjzVHbuqvZx4",
  "key17": "4hiWDzFUhDVSovYW7mrnH4R1Fz6UqNKry2qHzodBnyJLvkHYiLZrQ1LAnsoa4iu55VBS1e2GAxGwJBxsTPxPsw4W",
  "key18": "4aqizBghTEtCN2zoqseU1WUwtLjgCrjSkbWGYzd8xLtopQpZnDBUX3CPUyEf3GeBucHBFb3rJKP988igWx8Dre9A",
  "key19": "2kcp3VqxH6mbAtA1bWSm3wyUKT52ycDaZ1hpciFTC1iCSsaErFL85LvqVMPtE9pPErvDw9AhYWRtBUQmHS6XFefW",
  "key20": "2MWdhVzypGBQznQRJkkkBSvhV2vQnnr8Aw1obwYuHTuMk7ppYjKyvdfCRtRAkvHqHsX3cKcYVSnh7XJFq65f751N",
  "key21": "oJ9RJToiCA9AtdLU1W59oFmY15chSbdwuWpovwGbpU4oCSe8Btp6F4C14TMxVhQNtsep3tmYWwJvnnU5fYfqmS1",
  "key22": "4yNa4ZtJhKSES9NCGTvLFRLvUKCqLTvARStgM76GCc5sagsS9wg58SYKDM9C4v5GX7hdWvsUzrorUAxEipKmSznL",
  "key23": "63jn3qk5N2Boy6YAKTzSXecbms24AHk6AeDSMcyddMoANGh6UitnMG9vYxu1CXeFNJsZqaDzpAd2wpZ3ygFCc5es",
  "key24": "5ec2EV7V8qEBfYAMLsQ8oDT72UAWmiHEKRberegjEyfqEahW9LyoZyEM8ERKxEX7FMG5Aorei17uMzcRkvYjvfsq",
  "key25": "2axTaB9LArExXT9ZVSpDjKpZEKaFny7oYzGtNCCp9VeN7Qs1rwTuQmk62HVoXp1TUH8B3NhxWowV7UQCipmpsGPA"
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
