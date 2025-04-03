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
    "2hmkSXfC2kVASebmvez5gp4967DmefiGdibL7uQJWNeeou829pPbrcFJbGAL3QPkspnMwS9HYvq8g13kjmqvsGUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9HR3DWR8Nagz5c3guU8C8sFaR1fhnAFxPcvQzJ5eMdGadjuy6m9V22MErermwgztAJUc8NcLqdCvX3MWqfvPTe",
  "key1": "4MTNkxtrKkGcXX7uTfKYj2Gpc9auiCQVmBTTf9XaShQYzGmbdYUnDYbMGp1dnQVj7UFCdevNWTQ5spEvSHemCHB2",
  "key2": "4ECNNttm2mQHrQrHzVWQFo2rEqDDinXdyNZG6Y44QehWiJHN5ATuvyxoDNkdgMnuUcxZV6zo1zWqkjqdqL7v8A47",
  "key3": "2zQg3kFPbL8UFbfVbxZjkNJa3QRYdqKcGiAbYds2LRQDTyHbNZZL4s44Vu1tCFZkH1cN7bkVDf4pYUChgoTiGgf1",
  "key4": "YXupgcqzmgsGAUPBqKnkLoBBmkucALUL26im6U8jEBBZe2cw3QGySkVRNds2CPiKAjoeMRsivXdKTwfLh8zqUhr",
  "key5": "4KV85vR9XC7cYU2B41ajkJhocU2rxC3nwrWjhGGgt5BHnLpdaw7b2nrpgCZjkLMmp1kdFiCNTH7UZfT8YERxUdc",
  "key6": "ngw56hmz9LbrVntgzs7QhTchmHwQpW58J9Y9fbVWJiJdv1PQYCVpaZsD68ous1zZ4AVJsipGe3VF66dUQNCSyBo",
  "key7": "2ecDXt9ykFmW1S6A1pLRVAdi5TrBCr9VCG2gEwSSxUuxQYGv1CfnZL3sNfWndtKPrBMstRcFRTdFsLGpVWRMWXat",
  "key8": "66PZd7kxQukUXCtYGx7LhuZCMqwMrsVoK8bHWLm2rEEezBUfTzFBCVfXkTkEGms89J3yZv6yWJRUPSLCGywF9kkj",
  "key9": "4MgpJYvnewjgicR9utdNUmbQQzb8RGTiznAUw9fxVcSWHSio5tfLRNReTQmsJT3szaK7ix2WXeBHrAKeZdSuBRFn",
  "key10": "3mWkKYhJ5j2JYX6AFVL7DJsm2LpUdhb4ZVM3TEb6Tx4yVfnnabhH4yPUpTU82ghRKjzLjp48ge8A6NjrDX2jtNAP",
  "key11": "AhkU9Wky8iXTuiMWakgfGHPf36tZR8gnYpmtCAWarQ8vEe3jtE4xdC8GnEhLjmJBypgcHDVw3BmYAjKM5NfAfr9",
  "key12": "2L8rNgV56Fvya4YQwikhVZohD6LVqDSPcQrSGHjHQJhuQhJUrKvRf2DDfKj1C1bnQ52tcF4XUTGnhkFEhh5TdNjC",
  "key13": "4xiAN9JxoTwJKBPzRvmk1UNin5PsaDMV9shzE3bQaMj75FHdmRbkzcVkfnfpdyKhqNhC5JTkg4qUKHeNwST5TaKv",
  "key14": "3zYhtWj8jUG8v21rChoByqY84mJSUGwXVbsb1C7L7euAXrynsGWntqN75f1QrsPCJYLP5DkoenmF32WzPVtsBp6d",
  "key15": "3oFLpRFYgZnQDEyGG7UfSgHYpQ9e8DYhG2D2ffxeoLncdYXPyAyBga9zuZBJhyAKGn2hpFTqHfLf2C7ewuDEQUyK",
  "key16": "2cTzk46qN616iKfegwTtiUruhgWEVCeEkhyp3DEmMxytJz9kxAXYqxErV2AaShjd13UruNUYKoirXT5ejEYbH8GP",
  "key17": "52vSVRys5ubn3kzxt9GQEjFfeh2KGnzbXLETTHv8fnwnvfsW2vNrbNkPATs4JQmURDAgyreDrCZ1qgNKKboZBsoc",
  "key18": "7mQ7iYUXwtJyzX8LgfwHqdf8zadTzUbZyfzBmsCGSgXTv35pBDjXT9mEwUhT5JApiiDUjBFQ3E8v5gpUQMRcamP",
  "key19": "3ep6C9ymk3Dzhfe5cvRT1BB1wrhUJCeKm7WmDpAhxr3Ub9dqdijpYqvKL9XcgLrVZP1HFtwnLsbW6sjkFztPjJh8",
  "key20": "36KnjWUERN7G3zLQvtiW9CXUEKKU3xKzZVsDwJYkArC8DpxXPT7nyMAWr6Ccu99XQ48WiUGuYWaeDiosRDiLQAUb",
  "key21": "4Hzfy11SRQUvhuTedD7ymiyjF8EkoQtskVgqitxpWQ8PiwPDcfj1dCNsXgxTBWZN2gBQWjjF26MS4UyCqa6N2GVp",
  "key22": "asixvUB6E5s5Aq1or5NsfCkP3AoYF61wbadNwQpdhrMBmv8MJZQxgtats7UU8ydcSTHarsFzGu5FZHConiwCpQo",
  "key23": "25aZdjPbWwkBDTpZVZUtkVoLpMi5XaGaDUb8vntuYESXpcHsoAMpRm4MMBUggwrGAQ61G3wnPhcJ39M2nCB6PVn4",
  "key24": "2c1pV6BourSMimzDLrzor85zaPHXtGt9WTvUVgtdXqX12pXcPsLPvEKFjeLUH7MJ8Kxhk39eC3b1yGQpyxHACyWd",
  "key25": "5w7i6GCdCf81VqTK7NB3NkkPQH5CC9PtZxYKai5bEPzXqXFrxSKac4zvpgCRkWuTzD7ugT1LKDH4Z7JBLaQD6Z1H",
  "key26": "sHW8DHqmQAuRTU24jryH6eLqo4o6CqLRtKmqSbbdqxZFmXJkvJVFHt525QeVyanptXhvGuN4Uz22L4Ad4iwpXAs",
  "key27": "3Qrx62NE2XBV5JgquZexXr3jgzsxp7wqXqATTd1AqoY7Y8pzcXHQ4jLdbawfcVdfbd7r4Wv3VhwyksutTJvyPs3A",
  "key28": "2w9ucSKpB9pXfSEtSykhTKsMhgKrxuWSvBy3rpWSeJPXSmGUCwLh34o6aS7e2pJCN8kku5Lkv4ESCTyWGUzPmB3t",
  "key29": "cEcNNDPVQip3Frg2JwPmNZ9VYRfjVLX1ic4hsLapnv8UDDyjUw5Df8BKKuJzGATwBX3uFVUccZFBETCscZJuANn"
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
