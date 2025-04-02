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
    "4srRpsH45piwLQcXhkH34QVwWDpStyyui7CPBHBB7Mto3MnqG3ghEiTJiCvRF5UFehnWGRysoYb1HuBJbqgsHV6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9WeZrbsr6wBRS8nVLdWbVeXKdekFWx71fypvhnGMc3aHFTxDYdu22JTDxhyrCPjbvAWnqGdNKChW1Qo7C975RG",
  "key1": "3eRnwrDgrbgb5jX7VDpncTSVT5jStD8pmNspwqcUzfRE6Cf5G6vsBSMjwK5C9kTGjHHkG82B12HapFRx4tVu2CWC",
  "key2": "2W2oFpY2gZ3N1xsU3kysBY97Nsjw1VKLuCGV7vKTTtKAniuuspiZxcSFXVX5ABWxob9WNfURMANo4Rxyf7mZzPUu",
  "key3": "5a6Pe2NWKkhGB6tXwL6JdaXpDb9BrB3spZKecyZyJCe7AgGMvAUza92ZpuHsRwqY1FvC86amL9bmoVGHMBrhLWBg",
  "key4": "2xMX84ZNCbFFTuXw9PhnffnZJBYE23ujEZ3oMsk2rP5ECsA6hkNyfPXwATWuR1W2K9hRvzE7TN2LsAEGyz2GjfxY",
  "key5": "5vv3sGkjUY1Bkuc7phvunguikVqLniXiPYZo67Mk3rXgF9Rbu6CJjk5NAydYSvYM4WRxvU3jHBQTLi6K3TEUaUAX",
  "key6": "4UVhSfWvXtgCkbN1f7ECqAcVuHGEXtjTaGVDgy7icUJ7DKFVK6ZDSArbuC722aAqasMPQXwZSn5FsZBLfKXLGMZd",
  "key7": "2kvXE2S8yihRt85hfrVJe18UA9RGAMRYDF9eDiYXeQP9cmHKbkNNwS7Vc285EZUuAhos3uYAqAGwiK1tMmd8AJmj",
  "key8": "4BX7gAh4gRwb9vh3XwXBiWwjj9UF5y29Z1pwd2HTJp3h8oJjLHbrDDPXPzdGUe9WfkweK6Q8jdYjNvz7Gs4ju31i",
  "key9": "5wPpwbsdURtBZR4wCqe12zx8auWiQyVMuk4qw9B71gJKubYDDavbAhwm43bUL6pzZhn6k4qafm3dD3GtUiVGDABG",
  "key10": "3QDwwoSg54ejfJFkTrGQagEuksc2aM8rcftWGS6cN8njuZ6LHcmHttnYtL8e3EP6tsGRo6zpTbRbkPxMjCR42Ryk",
  "key11": "3k2bsgQySCcaPQDBBPozc3nY7Bw2NLi4vgxymyHDff8ch8iS4P69CB6R2uwodHt9f5Qwh5ZhsyWu4ufqRaJnTRL4",
  "key12": "5pebdTvo9rmuE8WXAALazEr6QDw49CY8acmiH1WkJmz4VbHhXmMSc3uFNJwBHLW4DiaWBDWiNcfBCW219RpgwbpS",
  "key13": "3wMZRz6wx4QjBMU7M9e613N9niz8nzsesirzPCAvAxfETyZ4vmXHSoskipYvpD91CWQ6qtYJiGwPP3xWbV97HX9r",
  "key14": "4PbPfsuVvDa9v7mHoTpHyiEizmH2BF372gf2YY5t1eFv8tJZnACx5wE98qjQpd1jofjahBP2gWetJm85XosdUhg6",
  "key15": "4rW3WnjdvmKDYgijhci6bymDH8e1cPhFfxKeS2c9oj7s8LnC7bDgMbtZuHQc6pWfmaGdxfg8b2WvqmHTsFK4Dnm9",
  "key16": "26EHRvqbyaWojLFT7YD2tF3BzCzdUDRdNEUmk9T3jtv1di9BQ1QFBkBH6AECWrx9oeazBLTWGovQwVX7xuTxzNkp",
  "key17": "4itGaJb631vYdshM7pCE6LWrDnAQ71uzJkCcxnaG9qUjmzbwipZRGNU7LP8STSjHuxFsm9NUuXhH4kUwdSKpucQi",
  "key18": "V9VcnZwm4jBPJypt4hQVqwk6yy8HrbJb5wDN5DoW9hTuCWCFA2JpECrXTvxdeHBoM569Swm9bRVz9ALVvUfn1hs",
  "key19": "4TyS13QpS2bcCoheLPZBr2juBxHW4nkDZKPke2nK73H1MFxWwub6fvFZQRw2BryRHtvMb9waV7PvDd8wBeguRoJe",
  "key20": "5CHCm5KDtKDst2PsXQJ6JvkfEaMjbfdsVGDqLePQCUESJztDCHBFuX2m5VydTxwkoZRh26kweQKQ2kC38tpXmPUd",
  "key21": "4m9rfeyUsHtjahn5JM9Jxe76V8svTuDd6qKHfDV8x9VDKJ6trwFrpwBPFEuyCJLj3jMJctM8PcMdfVTEYdH8kf4",
  "key22": "at7dVZ1cEpz7584YWjU4YMhUAMuRfNK316GiyNubUQZzBz5QWDwK69vDSDoAqaEv1utF17zR3gUNDyEPcBZFqT5",
  "key23": "ZqzLKBTPyahNFAiHnM88wXnXH6ZMZstq2cMivD2Ppzu7Ch9BN1x94joy3njMvxUtkwPQLWuzeNCC9UWxAtJkr3w",
  "key24": "4Z25kLse9V5pfXanRx4b9pgHVBKqPcHJV8oxNCV3yAohRJaAaRw62vV4LtuaRq7qriaNrfMnLyE3uEUJhXWNSb47",
  "key25": "2tEyZsaqZ8fDSZMnbMhHhHY6NzLQSfE2fuWAdui4SZUNrfaabYTwu1Fr2Lq9G4ePGsBkzCzK9WhHCL6v5aBgzAXL",
  "key26": "ZHqhJDrRk6FxDuSE6mLeZwr9NzjTtVdfSjKRnnTwuZptzQD6Bya88PiXhHwXoEh284J1LenEsymRhxD42Fc56Vt",
  "key27": "5bAaXfc2bHiJSPpGx5xBVZLCfNNbvrruJKPJjtYdi7jXfEHtkvPW7jtT9mo18Do9hyrj2d7g7PDqVwNvaGG7KVE5",
  "key28": "5vRXEgDGRXSFodtxfsVwowtXj1g6xusjFhAQhuw9isCMpeGye7ybRwhCpXG4YArCkJNVEKQLGpmtUETy1knL553n",
  "key29": "5yL8dHipW1enNATVna5hpcmA7thL6vc6244ej7BgmVZYnjaTAbH1VkzGpMDm4Muo2mfACMfRvq8hd6isbWhLL27q",
  "key30": "4XYwY2gRLrMazU9wCr7B4SXrA1Kph9Zhfoas1sN3V4YVeGiX4kKFjup7cGCwq7Mn9JnY4cEjXv9roUKRPYkNV7Vn",
  "key31": "5cC7dJY9i9MZeEkJXLGTbQ1HtquW5SSkxCCvRe1cCbiKQ3bgmeZHGstSm5CuX4eqJQ1pwfCdaCPM2gLCu3uWXUB9"
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
