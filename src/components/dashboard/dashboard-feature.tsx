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
    "4FhUKmUk5PF6vk3KJUmXkUmhufzodx5nNq5Wdia4RxpURqSVtZEBaVxYBZTSpDQpB6Pid1M3WmazwcMV2mZdAM17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cghzEJ6rMw16bMde1KU1uTcQXgzvmH8yzzMfNLjunezTqxDv9wGYM6gRmaaq1oAZowAJgQJPokBMki1HVqoEmsp",
  "key1": "nV7JBv5WtC6Bp38YuLVraVW3jUhgqM7c5pHjLKQS6B2hFthKSPh3fUXkkUgz755pqGL3GfNFxJGDafMkdTNcevq",
  "key2": "63AJjuzKnm9YMx35LHxiUX8itAuC2As8f1EnV74MXu1ej7CLWbZU6L1QAp6skEskndQJM4q99R446xf5gzCPneVc",
  "key3": "4aLbbEMFJ1p1bQXrKhGjsaqaAfXSeyqm57uww1BRPiWbnfjLTyvnLM5iaS3W3fqeWTF1HMR2dE84tDwtdmBqFwP2",
  "key4": "4kxwRHC8ghCBLRFQrpXS8Qt8Nzi23vdiZqx89UfaAYbZwp7BxmUS9FydmL8gRsmiqxbyHJ9DaSuhN8LbfaistdAn",
  "key5": "34bs8waKfi8G8GSN1kEXWiCg8YAFN1M9CZb7WMLy6AzWh8Anaz9Qff75gLzUSfkYiHGbEJPcpdg5hcqTLsUEzqhZ",
  "key6": "4YBXCc3AgaXjJ4HmmrNiSmVJjJCNSvxkf8rfQf8ADTCbwQdJfrSpLWN8BR6e7PbcmJGpvnkQKqo51ThZdq6SK5zs",
  "key7": "2pjZPwvFA7HDFVvq5iKhceY2MW8LVvArV8hWLmeCN9NXgMq5fBoq1PQC4E11vUFK8GHE9jvRCifA2TDEyhnXCCXs",
  "key8": "2THAmg44zTHS6jbNH6c7TVTxLx6AFTNwp1FmhTuwjtHz74G2PnUegeArSPrR7iR3LxbA9xJcLes5EsgRY9EpS9Q4",
  "key9": "3G5oFhrRz93iiacL5wcHmTrNotQmtw8NsfA2D3zCkbyjDyefEKoq1vmSVW5YXvB8mE5WjYsr4ATCknz7nrrQ7wSU",
  "key10": "2rTrczSksDzdNBp5H3UL3gSCjLe4wuqQXdc716Btk8jjX1tNW6PA7tgsFxurJpoNkMGGdLV2nPexudRGmCiZFrDc",
  "key11": "3bCtAYwGnnQtzwDkEZ5K89Yzz9TtrrT7mTFK7ej65SEabha1GPnFQrWCQz8VkobTDHFWT1gi3YVYtgBTq22TNhXC",
  "key12": "2SphUxFZ9WpXGTN7Mrpv7dD92zjxjBQsEkxkmmsHRuVfpCqRTzuR4aKupCe7H3hLBALo24tM7XAYg7nsGL2MgWvi",
  "key13": "aTVMWW5sWfbMpmCa7RQQooNfchtmNke3MRdUnnM8WhDUt8KSvP4uUgsHgBHJSCyxsdF5ifoALfA5x8gx6v4Uq1A",
  "key14": "3hNTyCVBcJ1ZB9DN6vFH2Hjak4wjmdsWoHhMPYAtoefppx9G83czwHPze1bb6xFYt3MSMht71hfWW5pv7PxsnT2Y",
  "key15": "3vPMtq8bDCw5VQiFwnsifRU1xnMVuQrovbeMJfvbPjV44i5brqtMdNBbbVG95Yscpc6tX1TiKdxyQQ6kUyvLcerE",
  "key16": "59UXdkPmCXnxSnUSkaVxch5oo7f5i22ciut6qgDymmJ4LkDNLNCzhJyuM3Gxk4Ej5LwiSoQqCAWB1Qs87U4YrUcD",
  "key17": "fboaN5qiinAUtPqUkq3ARggqTwuaDcTxz2Ug4ytL4DWSEQN4H45Z7biFzaAtfyRXUGUZRwxo42oRSgWx5FjTb2p",
  "key18": "2ZyZec4VY5783rLUEFNGQEi1r1aN7LLMF84NNJVKMWLQdhTbc2Uy23kcDuMxr3i9gu4KPiKJoZoPEeEt7Bn5mCwA",
  "key19": "3ohYMiSZbkz7xB3tyCsGP6jEPCLn45PDG5SRdMQtZMQbU73XvQXGv4ojgYrT3rF42DQtRiNnnrdwTc9cwA7ctDY4",
  "key20": "3wqQBJXripx5n1B5ZQv7kpfdkvwVSUqEJASaWcSde8yRX9BbLNiXWYUhubUcJUHFsbncjzeAZophbeg5D35jKWu7",
  "key21": "4xTUR4jFHPEMQsgaft49ZyUFBYm613i2YgmcxDtB9vRSQ4cGbyBLis7CAdCd6LSc94EzDmFabS8ahLRuB4xtJZTL",
  "key22": "2yvsjAMHRqWyxivASVZ1havZjVftingF6vBgNdLqc1Dwq7EYqdQmWSCKfsYNQhyPCQaAFU1BtMAF93sCqtgSxKTj",
  "key23": "YyTCjHhxRxYdCxZvf2D4wYjjeddnMwQqqbhXqxZ6kPj3M9vUxV7uGhT3aQcsFpVRxG2vkpLCw7WW2oSCeE2RKdW",
  "key24": "2dKRrwynUf7MwahYovMUNAFW7G75VshWr1TQHpHhWZCBbtspVRprgxgrYKxSCjeixomonyBLS7cL854PMn6XWza6",
  "key25": "4VdwQSM2NEWJoZGfobjr2MviZR3YCkX3a1AYpLGC18AniRmah23GpdbfN3wYEWTbqjtMEF52QsPbmSxs5oHPGeZm",
  "key26": "3m7wJwe3vEvZxs6XLv5WLXoVtjJmKaZPDkCnxmyCrZF89pMkr2f2mvrcYskNz69eD1BnUcu6y9yR37Ts5kCNvNNh",
  "key27": "35CxWhcwn4z6kvH41SfcfL5MM9aPCESH3E4tANs39ibf4qkd3fM7JZV1Mouaa4JiLey8GvUYv7qMLxTCNGFDWUP6"
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
