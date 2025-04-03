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
    "3xXTBDiPs9Zb5RiKWayDCJTJHQUoVsJiRiBasGf6bXRtvtA1BJhs3oAZiTR6UAtjixVDrSuRiLponBPtRtrnTcWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4heQ4BCWP3iAw32EPNpREcrrB1o29DgJBgw69dqPPeo43F51iVPoyH4sXyZkTYZydKGKpfrx5djSCYainHiPhw",
  "key1": "59cnE6hyUzfcTwCjYhyGcsV6wRQT87zuYVr89GE6gTjFyYNHbAzjDrQLW4tDW3arydGrSDNnzZU1hHGrvqzy75Y8",
  "key2": "4Fr91Gw3RBc8W99ms9aQPgZk79f1FydWQ8EKHyg2AdmC4Qre8HS7MWgfWYA8dGeXhm3eSjLsTynf6M7kWwm94mLQ",
  "key3": "2f9Tk3cCX1FB6zQTKPU4Nr5KvgDVjE9du7Kfh15KPaWB1AebgfkUnP5nByDyBpt3npgwbdoEX4bZUNc1FeTvizdM",
  "key4": "5jxdStq588jJu3ARTo47UTNWWNbAiHo3UJo96kTdQJGa3GH5o8pWeAsiRB6s5ej8rYp3BpQLJ1HrAcg5j1TVnaE1",
  "key5": "5bDEz7HNVtEYrXJCeiaN4t17FoXdrmPU6wVwuaQVv3cMcMCEMRd5GZRrMiQmgfnJpAYBwAQMBGh1PiZ5cMZw7oon",
  "key6": "5a2VMDVXC8nZV2j4JpUR9RyRyBatjWy1pd2jJyowNxovXR6FNVMrgGKsGSqcV2TvfYyMWBCzV8DiXrwrxbU69D22",
  "key7": "Fc7yxK6JPXytPkdZcxRN3mGJLhz8CMoSvyypodLAsJu5exWWcFnn23cEiYdJvTBnW3cdnTGjXQvVDZHDHLvXuCz",
  "key8": "4bZH9ZAMA3mdsdEP8hxq7tEo1Wds7cSwsxsvjXGbehybc8qix3iqynvF4fcoV1adWeUgd4TJxmWn7HSgNB67YyNg",
  "key9": "2WugQ1VR18zkCufr2YqsmGzLwwyWqWL7BT3hh7uF96KVF1FguQ47sLgjqWZRjKvjgGu3hxpjpxYbh4Nw7hfPSPe",
  "key10": "3i4CuHSNNA3nRvxfWU7iw34inwSe8kZ1DgBhB9moVH6Moza7wc6TatKXpkixkv72dYKMoyvj2pCGqDxoojdT21d6",
  "key11": "JehCGBXrd6gPUYKk9LNvG4p3GHoB72wNbpbZyD53dxbThKKewYchDV7p43QpZEY5uT4u5kBqjSHmChLH9vrvDzx",
  "key12": "5aSyq6n3JcfGQkdBDaR9PwuRRX53Tg8gqqsFbH11RFAgyGzE4MKMSBS4Ce1xfCivDhrReejWiby129jcHd6cS2Kk",
  "key13": "27DaZ5TKyir2tAQu65f9uGtrdJc3D7ZTm3oBtxKgDsJm6UknE8V49AN977iqhHfHWWDCjdFC2E8YH8RBtk3rYtyS",
  "key14": "6449hEozgAF5Km9dc1jZCiecBC3jwQmpBiqWNzE8oMoaGvjpnz4JEc9wPWxeaASLECWDZfmHWqU9n76oe9Syddpa",
  "key15": "3MTZTFMaaTaCEFJtCAxVdFuzjn2sRq2wn11xHwRubjKWD39Q4QpteECnAZ9ZuqJvFdLg3CEdmFpSbgZY5KPeqVQT",
  "key16": "wk9dyXiQkQtJuwnYM2Ydh7eEHePsiQyBannMd4Lzg2yWfcQa7erJbYhDEPepsQXdBWThFgY5W6C31yffNFGi2h3",
  "key17": "2UMdNG9qvMpeENGXd7qsdfgxnqfsmrC3FpMYrg6DxkkLjk48ZGkWYH24UrCnxCSXJW72eq7dxdjUuvqHfiFTkJ7w",
  "key18": "K6oWtHk8yyiTMy4kkK2DZycg5fhAe768ueruMu1FVF8c9jpGkr9SA24EfDcKw4oY4XfGKvQW3p6dtauUWdMHVWc",
  "key19": "4FzxHErgmytqs5wak1EARguxjYZTXs4xCZ9Dwt6KKehWZK7eCJFoV6SvgefVU7Shs2YXM8RQJkSxAdoG6DK2q9qK",
  "key20": "3e5pECsWANbGnvdcBub1Y3SwgpHFQZV1WF6kWqLzc5Q7isuvuJnGaxcVgx9Nbg6wwFnL3WHPsAN6nRr6QUx25emC",
  "key21": "3raGcJfq78mawFE2iBurPbsHfLQNnmvxi7KDk2UwiGsM8iirinSHF4MmREB3VEYpHUSQmgLs7LGhXkJRTC5jeR3",
  "key22": "55sMArofJ12ZEowCq2e2toC27NDboULeYC4rWSZih5XTaxuefZYE2mQWhc8LzXHJKLBumuhKJexqRyK5ond2kUhB",
  "key23": "3gs2EB4GFWbaL968UsPkeWdhsnF7E2cr8G6ZiCxtqxfztgRxXXiMbXZyp5AdLy2RavhYnKW12ghDSQNky2rKCC5A",
  "key24": "4NtsfSx6bfXTAkVAk1Ho6s8ZzsmDtA49T1kRwTCQpnv9qxda58WYJ7HREeBaY9bvSTnC1KRa3DnLiHHg6wnYr4Gp",
  "key25": "2NHEh6aVkzMyP7XwXRS4QoE7DK9YfciKDKsPVEB3GPbBnDfC2J1E3xBUSEAejWzYktaLUXkdJiZB5X79aTtwoU97",
  "key26": "4zS8sMuw8mVE1vHEHNL3ztMLk8w9GMgyfQzRyvj2xbJExnReBJD1HFFt8D61eqQ3oxP4oJ4Y9H8TvMCynpozNG8i",
  "key27": "4Nces2HGfZjc6pNaAnG8kYjSPT6nxWMJyYBqxUmt29vVKWqJ4us1XCdYdet9Ka53sQgDndTe3Le58ZN4wbgJUjbH",
  "key28": "SMhWTE3dz2qPhWBZvpND4SGP8g58utb3G2qC93kRCYX8x7etT3tBiBapY4y1kPCx97hH7TaAkDfrvUcNSaCj5Dw",
  "key29": "5hgV8DNhzPxgws9atZBdUdMM3c7A5eiH83jme7eW4qA2nELWcEJjF8abenPzkipJzvtxDM7Q1V5SLNv2iV9i5g8P",
  "key30": "3pRafyag4pT67xFaj6hpgWGHVz4sRSmKJgDpW8qtEkBjVwZ5M6HRkb1CFyTZteiHSafrZqkf9c2Gf3wTqNNPQAgS",
  "key31": "e2Riu5fWpZy9P6AN4z7ephnRJxFvNKHB7KXcdBBQXKaZF9JkhYPzP9ZuvFSEduN7LLBhqAc2TpcYXaFipYMV6Cd"
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
