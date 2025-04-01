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
    "4UFxDpAK2e7kNa5zxENZwymvPKzPoPZYYbfBKvagewZKuBamKGYBJYCrySU1F315G6ejStAE5L67KwZApAjHJkBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZ9rXuhafjQhtjZP42xwhsghQ7517TFKAyPNfV91nbnDqEgyKymLUQLhMYJfpx8cDBVLBbdW1MmyjK8ZC4163Kg",
  "key1": "CCvnfRJKUzzJRxF4G6TTgSMcZ88qoh62MYhQKBncuBjUstf2fwznHwNPWVJ2kHp3gAqXDq9tUCFyEA5qeZ6EtEG",
  "key2": "3DvdN9FZm6LwkmTuWMCJXwpLPd8JrQVLEYwUsxgyvBoyjG5BDK7eWEo8H3CtFeNZqeUg4QhRHCbHftaEFq2a3Bu6",
  "key3": "2oxFCaU7CJ3ejf2nUkVGsp8UwZdZDLi4RffM5HVV79zSigLx7MbF1ovp6azWcrZsD4Ldr2xb4F4fYRpCeqDqwMFJ",
  "key4": "5PUFZYraeSuGG6TXSBPwDQ2vGRELhjhoTz2Hknb7jaW1zrcbjASqGqNsD6n3ThhT96BrwxaKPYfH5zunfybZERdw",
  "key5": "59viUDtqbizDBr672mZ1NZ9gG4SQxK4dGFzBoDqpFGx2LtLZebC8qVma7p3142NXNrxuVNJK9VFojo94Ds3uh4G3",
  "key6": "4XTctBBqP6dNWvZEgaQ9axKL71QhEzixCpHNEPap8wadx6gRhKVpiud8PYVpUi5hFwKhjEbvHPXEh6MrEjjQWC1G",
  "key7": "61VpVbCLRZPQEEFD2ojwDKH2A2RiZDbqjVUkpesoD7irhTAo4LKzQZhSMLaCh2zyzvrtPXNkFA7sgbed3k2yXerq",
  "key8": "432hhAHQVkNzAzzBia2Q8eXqWrpDAKmmSETepebKvL2JWAgs9MbTLSQroboYTBCHAyP6rAbRUZSHq5SRzHkxdPrF",
  "key9": "MKVkjt2AnpC6zWmg3UsfaT1oRzkzYnV7UXJxbvQmru6LGuBhfr7WaSZCTYWxES6iPqgw8HYKtuNpCxbZtskCUxr",
  "key10": "2AjTSZKRJ2WFMVS5ipcJXzyojxtEwqnqo1yuCMPmJE3qQ167dmo4eqvo4ycGvhu5LhH6JP8GCYa8ispQbpMud2Xx",
  "key11": "4iUSc7vCyiTufJyNeHUu5VS1PVHeZ3BdAonacE6d99yeQXajkGSvASbcNmcjGREx6uLTirJsp1AsFfT4ZKY2Uuy1",
  "key12": "4xhuT9RiQCoUq7t1qanrDcGLDkehC9zWgyEojPxBWhN9XznqszXDeiWABHkLW3bocjMxMt9u3YeGiPZa889Q3Lm5",
  "key13": "4i84URXZer9Ef6JPoCrykRrf8wiDCYh1rgGVoVq8ZaPWU43jtWL6rjm9B6771kRM8sZ4JpWYVyHMWM8n56CyP9LH",
  "key14": "33DZTtYF9ARbBJkrgrv3vT32acPhotMnUnaQCWWB2n2RqEAn5DfjQ76oVrDUsSru6ZTzzDnX3YRtsijzejq94Wow",
  "key15": "3UErRxscejea2Pnq5dZtLijs3XbopHvWYkruBtNewmPvDVetyCuowJwK93Fyes2t8dEP1cvKWfLFwZDCsHDS5jMt",
  "key16": "2DzejkeLVBTDV4KmfHXRJiULu5hntQxWZ7y3trkRuxMSYLUJUfeRfy3iwLWaaJAp4JJNZVZgwfsfdWQbL197oayq",
  "key17": "3xS5LjaLWK6LvTKgMmfLWXbqiysmEPFF2A31oJT5pm8RNbGa6U8akxn9Jth6dwafK28u9QazXg1mDGW4xxWnnZVf",
  "key18": "PLPmgSrtSY2MSEED6RYS3rPuJo3tr3GPCCMZNuwGiZ62QpoQbKkXzuHRSV1XhCudhxH7jxJbPnTzEhPWk7KVBQi",
  "key19": "38JBuyB7BTFGXyQgYP91KMHGjnFfSbGTpWSTGeb2ovBXft7yV8y9WvekpBVpx9an9733TfprNm2K1irR6EDuf4kM",
  "key20": "56fJteGmb3D7rNSVTuM1TA3RstwELWAT6qMHKorioCmiMis3EinyxrhhsFeX8xVfTWRiTQWvMLkLLQChhWYoEAZE",
  "key21": "3crT8hbh5VmEqdgSepW3WG8pVVe5qQ9bSMHT7mdK6WK5uHsMAQjyY3LWNSLJyvebY73mcpjaCXAcPMqudpV4PEn3",
  "key22": "3UkyvsGmMzvhSxhDnmxfWTg27ZtsSRX2xHJCuJfyZwax3e7mUdY4S8CULAFsvRTAaQTE3g1E4iALvWUWZfZRkJqW",
  "key23": "6bu4VtQRLaxEZVFAq9gmDhVD1W8eHobF1WL3FUT8TsEvRnPzjMUHTVEjP8wo4wQgJButX9TJd4WPKKrEvpdttbz",
  "key24": "2NJfYW4DCNm7HBHwPP6hteJa4mQqkd85QcfU2JYZGaVb7pvnWuVm8Zw6LvCkL5GhMpRsv2X6z3FAgfYyr7pDkSRN",
  "key25": "5Uw8m23WYyvbPWB5Y698cPEAUMJZBWkpTiHGT1D4mH96tWMbZ5LRpz9HAmn1aqE2tKdT3YZxehMs1khUEoBDAgiM",
  "key26": "5sZ9G5QDyAwadWgtkH32oPE5DSxWdpCuaRkdvrsryMxrj8kKsTkYYURfGtLAZAMYX75ieHKaEDG4jhkyDWoVZZRt",
  "key27": "3Bi2vcmNFHWb96MGA62NeDEXrzHbRKrxAdU2AcScRwp3vwrdRC1NVgS6WT15Rjv5KUsGD6SM6XDtK5e2fmH7SziS",
  "key28": "3a1FegdLhq4JP5tacB8ASaQZCKypoBQmffiqQFFJZE86U9jmKgLZaeGX38VgsCCzoWxrThswbF5irjomHsbB3vDE",
  "key29": "4oueyUhw3EkneFy7MAGrE36toNwYhSKK6onkKyoGeqfgzfYpPL2CNf4rr46pLspYQriAkReW8jiFiSq8pUi5kZAe",
  "key30": "QYzVVnN8BpyJvY5Ax3kgJ9B77xHWQUc5SuVXmVpMeSAfs7mGu34a7ThUfVvWxANzicybdfk6kER5bjUwmCoSVDg",
  "key31": "3hGYTKzrqmrAvEpE4EzYZCfpRY9aGox6azExymFzwesoNDK2HGUGkgztyia4tKtiziU8JnnUb8EHo9bEaZs6gsJU",
  "key32": "w1gvFiUwignKGyQDMWCKsTLddkhJgrUaETtHSwLFEvptXQbqtqUX8cQ7xr4u1BhgKVp1YDyPzUcaiexxGSn4zCn",
  "key33": "i6zi7phJmsTdJmfu1QFA9Cej9a4AeWfM9VJgQK98H9Tb2UbRDZvSWw3MmADjwPc1ZoPYFFVJCMWqEVinFVLzzbz",
  "key34": "3RiwmTM7SHL7sgXWUCpN3horGDMvXqDRpDwRGkSB5YRiHB3pQqQqDESHN4yXmAoKcmrQwfPMwkRDwxQPGncj9NMG",
  "key35": "8CyaN7rLt5XWeaaBNTsKMoULY7mf52rNSQJdtjLY5vF62gC47udiYDtQxMPU9RPJXmD6ZpMDdnXrgF26QZB7Muf",
  "key36": "4FhQykXfAJTsPXCeQre6QSrTDU58gTGoMzzEuGRL3ep5K4HDCiBoYccNrsZNQnGCVdtca2hNjdEZYgyS2j7Bd3TT",
  "key37": "drHwV5n1JW9xPoSzqYQMJZfHYVYqMTQXNHV4QcZPqRRpWoGrofTHtE9FKRFcSivQYchHwXDNUSQLKhwkrmM5W4u",
  "key38": "64nLg9uWeTqZpBsq74bc7gZovsUitbumuNtcxuth1yjLvTSxLkvievJM29C9N1d4Zi6ApbiNwN2M1fwdFSxpkb1D",
  "key39": "4VvSUAR5XEwWTLKRJ8LD2LuiKtNQSY1ygVsGrZgCaELGuNnNGawFXhvp48uF5nxX2UKN85ez1h5TfWCEeNgMANKQ"
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
