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
    "Nu5ZnmHQuxjHw9rLzqufkz16RwzMHqR5gejrbHL46DDRLZVMjk4QfkYGhSRB47QKgEvGNycHA4hJVChbq4ecDd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UiiwvK5Q6dxSJyUAqtJCMGjvGiJWUSHBHiiskrSKTt1gH8CMcrh5F1YPcKKfe8vpHfYq6PR81XauHaCU3q6ijNV",
  "key1": "2LRhpKHJNeBHHh2WSf6VLtVACPq3bjfiKck2b8z3N5ztJuoqzpeGPoZ1krPejRvdLP5zYWDEDhYhf6e61xSfeCWy",
  "key2": "3wWKkA7UoRho2QogJFaehU5kS4Kzo6noi9nQJ8HbLYKdD3kaQ3VFh7iwqBMt7z3cWQ7uym2gUwBSAbaaBZ8s2LTU",
  "key3": "2W5K1qtSNPgm8yfG3hMUAGkT2gDHroGZwWxf9ssWSofXNLc5KzSjidX4vcp8FgCT2u39ccb9ySVZZLRGHabXJR3p",
  "key4": "3fHC9FC2UgJxMhP1BghyzirTxRDMVUsAg8N5nEGwJ14jXng7zzF3DoR9kmcwmMxvkgHqSo4WVgeFFKWHwktnuQj2",
  "key5": "4YpkGWZkWq979qQvQE6fgTNYaFjCiLoHiGK198isF8dUh9y5CNrm7Tg1NBhuLGhS3rPsB6Mr7H71awhTH2o6MYgn",
  "key6": "2qNLUiNiNsqNCWLWQkeigoR2DVe89ao6roBPxApxmvjf17CmHBvnaabWGH5comS1tL5Fct752n8YJ3QuV67a6W6D",
  "key7": "2tM3sd3ua3PPBaHejTnKc2cJ7s8neVA7DgxcA1CCViwYYAsVHWVJoh1E8HZev9a4jBZ1wLnT9y47Zx5yxJy61kF6",
  "key8": "4qGgc4XoYYR9Djuzj21dKZvs1bBc1iuG2wYuhcAmhQhWcij5V5513f8iywrFs11BH85t4YhSjUvicVsmXhBMHq3q",
  "key9": "bDc8SKbDYwkmkLqJjHpi4LBrRLujF4zHMJRRwjrwiZRweHrQUsQwrByTfAgVdNvTf6EWFwaBFxPJtYFFqRZLSYv",
  "key10": "2AXwm6hPxf2xDFNyikwCi8nVm9ZXTmm8GhFM6XpagPPcSsEv9NzK7qtDw2yhevPg2FZvQzNRovPhT2QK3jmyMSxz",
  "key11": "47PiexaMcgv8zxCVnctEbEcbH9NcQjjcEUVqLoMJtD5d7aRhq4CVrN5z2gSWHxrzoP83L1CvTpoHcrHWLrimXgzg",
  "key12": "54yL2VSpsWDvJxJrA2AgSpoZbh2H9Qs6Ux2zatMSyEqknAHzzbvcyzHcDZgqHMgnfih78Kq4z4ewcTKRvUkjFjxz",
  "key13": "4p8RwhxVYH3CCR5aqMMtVSTGayhs36AKGAb2U3naFuEF9Fm99it7ofgdBgXKuiCd4G88ntSkJDwDXsZ3Zw8QG2hQ",
  "key14": "Ei4Pn5AqAEPKhaCoJ2b1xd8VX6TA2SD5cQzGBPGUuBkYyb8SC4pqcAB9ozWxjgCQh75CRzJmeqmdQfGPrxqST3F",
  "key15": "61rXoVkUQ1L6WyEF1eQ3EeNbpATA7ALniUDKN8X1kjvpd9Bae9yBJTWyUXuMM1ciVMAg1hK6HHDaxNegyf9wr7c8",
  "key16": "59K8ihGbB4zKChJB9MUr3SaP72EUhtT4wPX2hKvF9na8Hky5VcRSG5AHtC82Tz7Yb86i4wvC7ZSEcZMdAmqexMR4",
  "key17": "w4vqErnz115Jntf3z7zkQrZUkvqqAh7H4cPpCQjVMSTu2en25TSVsq9PWPuxCx2p5KTnJoeb7HvLgZDMcD96h56",
  "key18": "zRa9vs3G1Hv4oX9CjMi1kPCdnjvtB6DiY5CEpetjLZx5jYDJ4EnRzdoAYbZcD497zyT9xRApyFVhV8xzjsNgrDg",
  "key19": "L5ttkvMm38f3AAXt9U8BPnibSyDR3ByRduh8dLjWt2BzPC6YotcH2MaFsWpYy24PMgZ2x7CjBGY5nBcfLnK2Zvo",
  "key20": "5WQW7ShD2he35zRrYMZiJP6GSJBGyCsc3pXLRy3ri5qWtKccRm1NbfErW2YqPMNJTnc1GMUVz8niYZDnL1HmywRw",
  "key21": "2LQcQkGR9b8xziJx8tbsLcx2VXS7USMD517ZgxAzoFqae2WqfzQ8oDAKxTbEY1ymxcBoxbdxjd1VHxUn687aVBJz",
  "key22": "7rPTkshxjAnjn499icYrvS57ZvCkr6bs77psJGm2QNy78W5KJ2WnLACUMcbfBxqcwY9ESJKMg11Hda9uPyGsS3U",
  "key23": "79Cm3ZhJ2zB4mDzhHe9T9kxHFdAag7NECyUkdBzsfnd5Bk4fM9MTScwp8f4upcZVMEqwfXY3wqmSJ9rMLafGGzv",
  "key24": "2QARJVXw9fbc1S7ikGGePmmiLdQHfECj5WBCERPWw616objQ16PKQPxrNjBVibigNkG8Rps3izpiDb7GLfXtJj6o",
  "key25": "5A6cFfkCM2SD3phhN8YEt76yUN2HRTTy3fku2dxWM2HuEjiugC6zPX6Zc8z7kVGNxuVgASkJUfCLfTwJucuB5ao6",
  "key26": "3iAPSPBXZXeCZbfFvPuUfHCjoD1NXydu6PeEugyA8f8XNfQdHewmMtDtocKRFZEWMUdLWqSNMJ8wVE4zJuZ8qEcH",
  "key27": "S3tJuBR1ynLTkaRwwQXRx1GhEdCPxFChfj3hjFxcoWH6CuhBqvCki8PCjcDMhURC9chXzS2TzK86MbetW7aS1gy",
  "key28": "5CYmpN1hRGGyi1RhaLu3P24PhgCPSpAFBFTu73uADT422G3K5DaQ1xkhmp1dH1hkYU7pWwuiEHFpqmnZRGR6i9Xm",
  "key29": "3554muobWxa1kHFg7oAypL98845G8GV7RmWUmE4A9kGL6HUE3T9VAizP8uvoQt5oMgQCtC3dZVQ4DotyKsg6iGib",
  "key30": "h39e7hq59W1AApFzn8Leh91yrDBjrKXjN5NNZo2UWfur7YWwE69vVHHEfJRNH5XaGyV3cHFPsCwaNGiBWuapWkR",
  "key31": "3iRRfyDs1WfVm4nLquDfL5SRzdXfZQH7dUCYjQXDQgbaRM5TsmZQnYEBMhXf238EMtgBik1pqYmWGkHWMpaHKPKh",
  "key32": "i1Aq3ZWpwghYqV4hvvt1VD17mCT88HAVTYsDiHmVEYkCKJ4STuLyg4Qwk8Ww24WfpmkbWvRZYybFDc3Mz6AG57d",
  "key33": "4R5kbbtefubSsbpQ2LgygrbdQDuHBJYpEUhinhDAX4tAT8G9TaLK5Sbdnpjew34Pw4dBHp7wz2KaMaEBbLdHr9Ga",
  "key34": "2FGrw5HGt2G1VftBXmkGMdZiycQKv6pnvrc6ox37Mf234McskSGzQUQ1YEtDhxBmig6asHHkhcXn4NncZgLfQNKE"
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
