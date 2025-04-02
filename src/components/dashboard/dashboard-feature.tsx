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
    "2cW47HyH81U4zGNnFtcG7n5TsDD2HHe3VhyTwXTyYd3WC1sX7ZqNPcwFVa5t5YCLg9bfELajv8roKD3hcFvTGC1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LbJ1Ky9ECdVnbNCQMEUj7EWq1dYT8X3WAvARj8KXyDwzWzNfwtbknQAHY9YkMg6xR9qa2fzgqry7BYKBLqmT5i3",
  "key1": "4DrbZvzZ2vpKnKSC4SUdiG39GEGYnauSyMswKvNo58etF1ebgSZGDLDfNBtKRaHzMsWEj2wmbuKEAiyBTV995TQW",
  "key2": "4hoWAX9gmjrnUC57V4xtyoZz6f8Xiw5rAp57Wo62UJDEDgNeR4V7XED7CJN3hJ11fBryvGkcJ5oZHScyuYGBRwF2",
  "key3": "sB64yrtCw2wMKXZkP9kZ2RpzSvvAcAFDYrLumEkQYcJZBAwv9x5N89xyq1mW2YbBtWoAw6YEkzw3gU8i7fLbpcv",
  "key4": "43eTpRaUadx8VNnaJcNucj1DCQtgA2w5FvJvSyXnYCDTW9o87NKoHiysCDkrvfpusn1uSwi7eM84Fa4VctrvmmrS",
  "key5": "3FnxZWJbCDVQz3f96pQAvK7874W8Cwch62SGHXcjDEfmwcVAL5PHoQwiXtNYkfqx2KrxkxxFGu8gy4tEBP1a1xCh",
  "key6": "47G9wWbAzwhVxCTpUxTSsKUuooJjr8Uf8NFWgSsQWos6pmWsVjxJroFv8E4MtqHKx6uXC8pk47qvhdEjWjZGFst3",
  "key7": "wmDyrbGNRiSnhJmrgEpZp8DuYvDHPGwArthkEYi19UVes2hY7AdxwkToGzHCZqhhwF9FzPMF71x28WXBDh2fFDQ",
  "key8": "3zBA5oenrVgVcgspDb1TPTMokKGCsy8pVoYfCtQncRqQS7E9rM8yeT456qvc8dz7yMmhJLzjAdp4WYvV6DUHfwNe",
  "key9": "2cJ7cp6wEaZCwTrQV6kzyuZUop2jBFrrBmM57L5UZT4uiXjHgv6t85N8SoGyHFmJoSkCjjx96vqboWUx9nRKodtD",
  "key10": "3c1rhWMkNmb41npEB9ZnfFrbqTNhiFH1Qdh26WttAUAqk3LVJZkKycRygcYQB7fhHxgw8BYQ4iGX3ApP7Eg36KKu",
  "key11": "5nLKRtAyGNtwQkf9ysNZr9QHhSu8pELZo5BxtVTENybKPYtyngPvd4r7P5hb1PWXBAbyURd8t6zpaJXRuHNK4KV7",
  "key12": "5bUYrBBZPNTZoCWbgUiSFK5BBrCXL7RqTcg8Yc5tECLMdbMAUqq1D3P7TBJdrYboBqZZ64idWp9fAeQrYMS841GY",
  "key13": "4XXB9phphMS8R3hJcBnYgsYqFJECLjN1Au1sv74XDNbjjBsym17KdExdqbEFq7xd7b3b8KBGAH3DmM2TrSiYucDM",
  "key14": "62x2ukBPALowDTNjsYxRHBb5ZU2o8CFKoay21Yt6kQ5aWsQeX8BUxhYXSFb9hSHEGFMt1YsAsRrMkpXWR99RpG55",
  "key15": "2FWZo6DcLLP7ZfrmrGQBvSDQUhM6Ed1n8pSqs6PUJvSmkyELztfT4UtFnRbhWcWvBPgHXgypUyrK6BuzQzNGiWAq",
  "key16": "3D7LFghJM3cTyZhbwavj4Fp4pP3EMbiQmTTLERWvGzDcURxQW5RWnGZR8acD1h8pDGTHyqtMSc8urschQ8eHpQn1",
  "key17": "4RT23h7Ad6mqtXPYgBGbsMcXKwrVqNmagk7sVj3x1PcvdHNBsfpFYHZJ845fw826ohosGkmeWyLCiQBVV6e84r81",
  "key18": "2pzWjiZYVgUgQhgpB6c3R6fLU4wBUd5UHHEHKqxQGRMaw2C5PMiv7K2dRGAavzY6PkvhWW5vHj26R4iUELhrtLEz",
  "key19": "zV6HbyD8gYEvo6ncFK1sCp6uiahxfy1u1WQMAyAhkpquBDQ45GkVguJTUypdcZ8cLdpEw7dyYcnov2Q5ybidzjK",
  "key20": "2zPFCdYy9TcbmLNaXm4Aiz4VdwZT49AGiZHkszw2aLJZKxH5Lq6RSkMrzq7tvkBu6X6yaCe33H1MQutc3gW74RQS",
  "key21": "3HdavtAtDCkYZk4Sprfz7NbQxtFWVcPj3pdHo1NNdB8zn7xwa3mFZuapKP6Q2g7HbeztJ33EMoXsicC76rQoSjYL",
  "key22": "3kUhm7Su978mDqLvp6FRsX9UHfyH16JTbM8zs2kNuytv8EMef1caCAsShmQLPyxx4SgXNp6ccamrhDqSmJMVB8Aj",
  "key23": "2khRiFG6n5ptLdtGa4xpdP9jqAeprWb8fWR1tPgw9NVE5JsTdLN1ZwZx1Xhn5kruYnqCjNe7tuR4Hk9xGY8FoUBw",
  "key24": "284ngQmdTaProxUYZfp2FbG1LUeQT2MuhNPzZxW38VG3ugb5n3FFMTDiZ7B2vCujQf8RzsNh5NW8JTvExnvofSBg",
  "key25": "5nrkhPzMjXiFhHJpHF1xFiWCkjZPqqYSrvRe1F3SNncsPAsEvqPYRhcvi35PP4Q64twzRzSmAfn44rs36R9p4jzh",
  "key26": "JR6XQDX3P8q9fBB58S2HenGAjmt8t7wX8FuErczMDPEfg6u5f15XdpNKVehVpKfSnB94phvyF464ioUDPqQdhMZ"
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
