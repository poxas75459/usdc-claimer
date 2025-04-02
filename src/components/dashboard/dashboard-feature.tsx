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
    "58B465Kdf45S18Z4GVjGPvCkZYUMBxnpSLpEUCkoM4qNmbRouqrGb7bCWFoLt5VaVb1WahzFPwjeqUj76NUb1gSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWn6243EFveMJ6ZpkQCgae6H2cxCpMaagvDi2NXdkkUWVAdFAN1FcRN3pG2zY7LPQwAMeARsy3zP9nUGfAjodbW",
  "key1": "3VhNgMkTYaBSryncqCnJrR6b4mV5ZhCgb3Yzq9KewY4nT8Sq9wWgt29SFmNAComGG6Q9tkWuS8d657VchRB1mP4f",
  "key2": "3VbYziP4RN81awAMHAULCM16KJaGwqqQZRzsAEFXf4QTEpaE6Hkf8viBQQ618W5u6GMjfamDy3U9anoxUeEAi5Zo",
  "key3": "4AX7UR38Spwsr5pz7jKoiq2YVdMEsrLre94xi5yHS9jZXJu4tK5NdJozeUMP85WiquU3eM4EiN14eEejsD9ipiy6",
  "key4": "A9QY8mhYPvxNaBZRm5nXVTKuqo5tBr4iGVm8sS8ZBrJ4kBCff3qeCN9npbqLGeojp4RLhDb7WHKBLdYT7BsxSUN",
  "key5": "2K4kxd8ce7sCGj9x6zYjRJj6M6BrcZS7gzWrZEepTWPnDB1UynqYkcr3BPyzA62SwHAoWCFtxFY5J8uVVwoA2JrF",
  "key6": "5R23w7HJps1CQS46CTnGEfdPx7onfxRM4Nz5oX1F89oDoRTgX8DwueH4BDnAPxsrie1apJTGiXwx2mxYR9kg5v6v",
  "key7": "57sDPdNFJRRTnodvN8ZCHkhKVQn1T8Vn5SBKnLpegr6VtPiNY5YdK1Kn2ZrDRLf79MJHsSFPuY7isbSmTZKYY8Wo",
  "key8": "4Sx1LYTDWfFEjdwRTXUVVftHuybQ9ZFgMBhHbRBwFGzZQWuRkaYDQvJuCPi4fBHvUoSXpQe1nkS5qQSJkS8d761R",
  "key9": "4mwuoNAqz4k4YUwCVH7BGPRKW6BoMG3zpiH3phVE1UkCn8Lfbp1QWQhSFMHQKPiBo2nNUidNWh84Afj6638FqH6r",
  "key10": "33MFNstFQDZnNTGsAJ4g3Sj7ZTQeMY4JDq59iuYzUeshUxN2M76RkKY7jUkh4Kgy9kCVGx6Rg4xH3FwAXoUqc4ut",
  "key11": "4xEjKnFH6zXzZE34bnPdxV5QA5AHEwbRuUnaDwxnZsAM6DE9sYBj1nnsp2HHiV4GKZZQYC3dxhnboJMEVsWbYHvk",
  "key12": "3suSTDWqREjzqGe2qDgeggShZwkcA8fQSenoHosdERg8rWw1eYLFYyvGzqEWN8qzf9qFsTXVTC9Gq5oVfnW4vw1p",
  "key13": "5N6STcbznixS3pSKwuybJWskAf581D9N3SNTmJ1RBNJFrrAgue6B2pq5Xvqy77JCvvuJQsGsQU6H4UFRTXMZY12m",
  "key14": "BoJDeDWuQ51pkgP1x4LqbCyNMN2mr5vDjF7ZSQX6qmdcNGqcXZMeiztu2fSA4fn5TJTo9aqPeRq14oMZEq4Fhth",
  "key15": "4ujpRcnenMpvhLNVviq9YLtU5FiMEiPHc2XRzPBVHnBCmX7zJjghkwGTwjXerKtwvJhxDHiCpGFctY3koAbbTucV",
  "key16": "4sVFB88wgqg8igj9Qj9AC4NVWH4WrD9b9yXxMForTBLnqHoum9RvagKNwFAgyfBeAtoB1cCCsR78Txo2a62sb76z",
  "key17": "38UK5bU4BjZ4hxnaocVKhty5PxLQ8KXmEu7gxXZ4dq23kdyo2LYGg38k5G36rwmW9u5ifH3zv7oJ1GGptMTYE8Ej",
  "key18": "37u6YPFHYoBE2GeNvqqTFhPCwiEyBb6BG9AByXuC1vd7zwrmrUWXDEruxSQbg5F45FfQ8wTVRJypzSDi5yApHvsB",
  "key19": "2g2o1PheszdqWeeNYGHTc43DVm6fkVqkuACzfceKMr4aRx1n6qMFduJo1VUj3nzLQF2owhPSNkCVTqf5SoKZHHae",
  "key20": "2NLhoRUz1LcQzpYCpKGR4urmHPDXhYm23XSFnLVVndAxGa3prgNhWDcHdBnDLsR4wMN7Mzbp1jkHJiVKgDGht9gS",
  "key21": "4MWM9euhCYWnruD6jtDLsUKroq2e3qfVnKbPHZp9kJrpykJBjWmgRx1A1jmG7e5u82p9XRwMTnfRkbi7zXXQhqZt",
  "key22": "2XcAMPtnkKTphRNkeDm4rnSZYhJ5NbnBVqD7DPNU6YxqEJ5eVweYnksU5XiNtocp8Pa4K81oTExeBQX1cbogVUg1",
  "key23": "e6jvwAnKiMJrs5zixhtCx6Bq5Mw54nwNdpqis2J6u2DEviA5u7ngYT8kJZuwiNixCpFLT63WG3LobuxAbCjQzqf",
  "key24": "66yUhpFyPDzobS6nmcZU6Ys1iMrsNbtxserNbpDm6YhD627SiegCFgfhDT1twkBbnBBTzEfRHcfm3ZhR9beBC6mX",
  "key25": "46XHdxTMQex6ApQDjGx7URSMk9URqugCB8UcaqRCWoDXwMBDGRWsDdwA2Vfr4BvT236CvmXDdTM5oMBs9kvxomNc",
  "key26": "2PVygaLCBY8fQcAsveZEZeHG7RWuEgBQBjog9avs2GbpJwsLJw8RkKupGiXZ255LuUu6LozyHQceUhKjxvxLUGo7"
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
