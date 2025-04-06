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
    "3ru4UUCksBsm3k7ruFXXgN7b6xgZ1XG3EUvZXuHaiXu8QLGvqXWRSNvKJKAwHpFtmsac9H1GjZQHRQP1NFV1sD7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGsKjBQVG4eHPfHEmFRKtqD1WT7dWWfEmHP6iGJvLtH84HBe3FAcUGYakvgbXsJasMSorQEzLNT4aVv731F37RJ",
  "key1": "5xWFhB9gBKtmmYEdVcugswvo4euU321L6Vz8J7wmoiscDt4F8EDSXYuXgDXuvsq8cBRFMiAX12hr5sqUk7SLNHNi",
  "key2": "2zrKsXwJRZcR695jHqqUSpSgZmcb6doNMU42T5eBpXL2NTPdMMERrq2itJvncrazaDjeH8TFXLrdN7RNpGtUYYZa",
  "key3": "4TWXrED8nkgdhscuzqV6ZR41yVoNRZvNZpJ615ACW7XHtfkUoGPhJGUh4UmoZxVMqNv89RxLi5sbrGzwnXJxPQVZ",
  "key4": "6777vZtU99LwoLS3fTyZDUWNYbVQp4vWQrb1yiuNVuRJTbADd6jHzBdr4FE9uuUgz4KSEH5tCKWYDXqmDzmwopNZ",
  "key5": "3imsizjqDf9TMFNDawygebnFutbjWBxnRSuAsUVPtq1rR6oDraV7o2it8aLwdBxYELyT48kqi4WUDETY2M8n6wGk",
  "key6": "RuhG7EQXoeVnXCZMe9GgmVXpYDhztDNSy9GV8NVecMavgJ52rSNDHh5ouBMWagF8KySFNnhg58SafMfyNn9aoBG",
  "key7": "48PRjTD1MKnVZShCNhTzfuxbfxoKpbT9Dfezeokyj595ydxc1w1yDWTq54ASZv4nJqAgtG4wYVaXPyZtD7vbMZaG",
  "key8": "2VkHcTfGsFGwUpBYJJEMhGrMRger3FANojGAtSnGyqbRSyQij1LRKS4kQPojzhRViygNxJg31iqPTaEY1BgVwDAs",
  "key9": "3ZRiHAQ3uKDD6vc6faxrGBZuSHu7T3AKzGk57PYueEh9pmVkgWVTQeigx1LFhcYDf3sBZoa84eeNEw3oYvNsqZGX",
  "key10": "5ruiT9ekKYbjVpXaWY7H5LYo8mFzMABWzcGdBAfpd6zaQCE9we9q82W26xRbYm8aRWj1iMQ7WAVuyTaDSTQ2mnA5",
  "key11": "5JWhbr5rz8cnhtSAb6uRKbUPkEHz2e9XWcgUz1ZeMJNFuViYHB3wW4osGF13pzEo5SBR9efXLoHnmt86ob2fHauo",
  "key12": "2js3j215Vm4V6aZ3b6usCwUci8kDTAMLVPAkSbxhowQ8NKkmB7KN7PTFxoHhAzDmn22s7sqADw1tUXkFTCTZmJrX",
  "key13": "F3UkJq1XVfzGyb3oFEcrGAPQMGn7SUhFXq2bscpRHz2NLG2a2t68gp3VkWSmNegXbjWh9HPh8viDHydGnZuFNVw",
  "key14": "6356dM4eifypDucxxmrcMWDD2XsAK6PrHPR5sBJN9DcmfEuLAC4qWP2jBhNXGYWfPYdCQSJqKtbmtaH69PRdqCLD",
  "key15": "fDCQomZsqn8EXiCJPUYj82Fcycrok73rdway9qEZDN2sGCBkTcmfCubb8vku9mD7chVZzTgpN7JHrJVqnbWSV8M",
  "key16": "j3qF4kCgb6ayB33Kz9txvrid5V29yDQZ7dZBB6kdjwWPvFJ1FszQfERUpFoud6XGBcdwdFpgYhBPjBH3TtSQk1W",
  "key17": "3N5gyorRPbtpsQyPuDaGZjADEX59Hem5ijLegeR18W8Yn1RdrWXVma7rRguVwavUtYymMPPF1Yh3GFvW9zsxv5LG",
  "key18": "56W6H779srtJTWG9BVuw7EAq243FLU6pCFPEpuLokbxhJuM8tH4VrrHvnxepd91EZxpYLZfvaVZK75o4HUat436P",
  "key19": "329wwKDiNsnpW1V3U7t2csz6WmTQWoz2RtrLtM4ARz999DMAgPpvX8GWqRDcNgbCJvyNWmDQdDZM7RRdXh5NLCVM",
  "key20": "2nWJ41fM6rcx5T5o1nCPPv97KkxYqmZ7DHJkPcpatyB4RexDf2wwJ1sHHcCiW41ekUPDaNrfyXJZyLv9i2NLwaxF",
  "key21": "3ksumZe6ocgNuZTzRabqYhFtPeY3nBjM1ESGzDfySxLZu5AQriFkdPDoAnmKYAd6S7RnXHEUW89Kxag6szEJbvVr",
  "key22": "5yQFxPDBzCB6QRe77pjTv7cMece36SmiYEHWGv3KGfovMdrp1sKVBfo49GWqfdEPUyHZMGrHqMQQbRGzrrPi9wn8",
  "key23": "2TJK4dww9XpcFjFH2T3hEdgCafFVSYWfjx4LDNhgiUM32XuLs58JsaTb6nJGXaG7mLaa5zMLRUn8zBxXFh8UNT9J",
  "key24": "5pKr42EeCEUWFZhcWNYcfuB6MZ6SrNLoxXf246RqMbEHeuTqPeF8zcJukaoi5PzZ7bWSBz1cBH1bHARFwy8NYq1Z",
  "key25": "634PG9mKJimpn6Ph7bykGV5wnS6yePQrMAQnCxNMBmQzdSYmJsF52EVw4FqZDqtpYqAEEctW14vU6e9KaxZ1ppyq",
  "key26": "44rFiDHQzQdy4cYwksqbLCyv2TUe9GY9PHUPoJvPcpXm1MVWMV7xec6y5SusysANcyYoPknfCi1MT4eGnxL7pFEa",
  "key27": "J73mVcqRUTktkT2SYhUpDFKaQ7HY1u3kBrMmAuJzt5dRdu2MsGgHc5fxmZRU5pCErPEzmppvDKEZnkAhbHu2rWc",
  "key28": "dLaUDZsRRccjcRPtoQLopWxuKBG9wGnwgYYmjirsrsTQvwahRbcVRHZCMAkXnNVAVY1YxzMX8Enwetym9ZMG7Ew"
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
