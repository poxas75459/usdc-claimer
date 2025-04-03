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
    "x9adyVgKYQGea8ykf1T6DSdMZa7wShrZM5ZX2Z3J83a8mZaVhDPsinL27b1JWQAWa4pNXSiWyJRLL6kpMpcYWbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9PMuy9XLQjFvAY6bpgR4bbCRUef5PJg4hRQEMRafXxAzV3RveSCWkpQ75rQARLnvKZkpgYWGGhuCifZuibUWfD",
  "key1": "4Fvs5MmWidjDMRvXXCDg8uXVMupK98CUB4nLrQENC6oCH1e1GLHibZ32GMouDkoKxXeaVkw9WvFQkVvca8E33QbQ",
  "key2": "3NPHd3GJynmwZ2eWToqFbBDn7N2ZZvBbYm75ngjDs32bsi2tZTVeU3hVZEXNaHGCeaZs8SWj3pgzL9UUwiDwNq4q",
  "key3": "5SAZnM5T5bwBLSSNMzi6PchajzTMNCvhZymmTid6zwpsPaDUPUr5FC439Zs4QfPfdPHBqmXf7v3dxHGYfEeWdoZf",
  "key4": "3ofiNsZuU2x86Mtua7KyMju6AHtdnhSsTJTpwZWPv2KXXaKc387tBNu9GwnWWBwjeqS6mqXy9AEzAZeLC3FKV2Xq",
  "key5": "HE3663vrx31XoXPBAznHjhR7cLqy4TqffxqJaykFFLZsmqSYZL5ZMqmev4SWACBY3go98TfDxSB521f1YtgjXAf",
  "key6": "VQMaACWrKrnm4SDinPYbijQ7VL5ewLRtkLuZrx7XTNNg1Lg1Ssmn56WbDWYUokBpeA4CCTuV3B7TWNmE3yASJJm",
  "key7": "5N1HtwgTSAQt5T51iabdcSK6ffgajGTW1mWrRumLH2DWe3bv1skMZzMBL7YsG3fKEXpRRdNpMXMpvcdGNcPdBJbf",
  "key8": "3HGcknS9rbQWC7kUn2W5ccbwvkCF2dCNpem3BScVqBXjE1HMByk31Tk1VNn75LsrA2akJkgv9NaYeGvuuKNnaVyt",
  "key9": "5QMmq5gojJgmL8TGRNKKTk9wTufk4jP1eAgMdfPaUMN4ZBLRJMEgXewah3dNVRSVRRgBhMtUs9Vpczceuvgtutry",
  "key10": "4AL1W6DmdXTWUte2LUP7EgjupGTbrZwgxExZZqvXRqE415pYwsugk4aDEf7SpZqxbXCGk55dPiBgHHKQpQDzVydT",
  "key11": "3yEnijdjsmRiqGsNZV85wfnXUxDhuqxpogjuxzubBHBJVf8UEPEFRaASfvK2AiRrZ6FEvgEbw1na85Ccz4jwySeH",
  "key12": "3cdtkXFLDG467V96P2Hqc7Lo1a3wKVNroZgShRdNpyPg7qoYtBJLK31ZKmErveHfJHwgViMjVFM9jFrBT7jEcz5t",
  "key13": "5Xhm7pn8D6un1nF428LRCsYjRM7EwZGdonVJdtkCutfMrsDSp1upALZ9eKXsW11zrazywXqziZhHbXtc6hjJRhWv",
  "key14": "4jNB15hFRmNsZRsKVvgUks8VsnSK3YQRS3rXjUMCc5v1LdQ2amFG3dYPd7yY44HjUPz8KRud9WKtLWi8sP7F6bmP",
  "key15": "43LNauqyA2hynV6ovdAupYYSmYbHKzdp6HbDTSUUBxtckFaYk5RYVge5Ss1zPMYhx8AseLkS7pBGy2k7xewhBV5t",
  "key16": "3mSd8MR14SWLbMVwemGVNxNunjeWXLsnEukDkwrnHT7wWV4LAa5EysPbuAwrFUTWwREkFzwEiFz2292dxnAQNp4S",
  "key17": "4SURL7BdsQNV22pZaE2cjW5exjdudjPPYNwFgsbnADnixdwXSwny6BjbMGVrcuzv1RKp2FAEQG2y86xeWT1SyY3P",
  "key18": "2BQxQmbzVG4YtZBV5bMoqQRtN8LtcmN8puWSTY18b2TuBsjC3V7F85918T54So4cSGstVwNLE1WUkbEmV9XV9qsk",
  "key19": "4z17b3KXANdhk94U9MuydDQ1GAohBtjedxMwBUe4dboyguQosMuceNh3KDZkA2A8HZFsWFcute2Jb8zUfVGHY8YS",
  "key20": "2eQGVTBMx2WXF8CjK7rWTFy5unieY3Ap5x8AvYoHwF1TQWMA4DaeLNhXG6YPQXpGJu8MLTnHMtKC5xD36VGVi4pj",
  "key21": "4jkPFQGcDTBKCeXGPo3MBSWxvGUe4s1YLqsSLQKq3vTsor6u1vaUJu939T25X1xXksWVyVBrfayywXEcsF2XE7xd",
  "key22": "2eitB8xfgo27UL97MRc9om48mD6EtU9gGJEUvY2n5qEhGeTV13Y5T1dspT66Vb3uib9yDJx9TNWTZ6LNvFWLf56D",
  "key23": "2ThhAwTdcUHuJFddjJjWnHVY2gzfmHZsrEn1Mad1zR2ybm4KAQdoi1k9Jn7shMhkWucmeEjm3zbdm2db2CpSpbbT",
  "key24": "4gNGfGMoXujuXHgxdEC3ofS5yYjP8e9L9vFJbWeHLkAdNqs8dipnqLKkbjyMxkLV2VBkUWLug7e3tHhTXuD3q3QU",
  "key25": "3DbWLYV4qtUcoo6W7zEHRQNwW89nnxvFafbs1JPqvLX3awuh3JyRHKU9kMEPniNeFTjMib9gK3jxuQ13LYXG7hhE",
  "key26": "2deKtKw4cKUWVBjhjRGq3o4V4kNDPTRdPDGavgK7LdsGaSTxDkRd87R1gX6UJpNwWMHmitxiR2BrwyP7BVxUaDBE",
  "key27": "5h6xAQpusyWY68HUNymuopZAR8KkzVgGco1LcZ713GNytvEidaRAusdALzvt63LkX7xxybq9ACStD3K4GsC1hAtu",
  "key28": "zwAbQRNYE9T6mF3YMbuEmSh7ZHaum5uwhZdxJoCFVUUe5pmdV4E9oJ4VWwKeQonM9wtaQfbKYMVS4Lp49xtANDA"
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
