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
    "3C7L2EbCc1aFAMdnhg9CjgeRVMfdHbsNFys9mvMneMs4BG3Vj3wXB3F6gpRXMv6BJ1gbXAQWZmfP4DxRXnaUFtzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R4zofYocnNfuGmmbGa2iVqtJVo7RGKC1LZRgceYirZpic63A5bR7HyGs3V9JFLRSNXdze7x264vBmCcL19gEfXZ",
  "key1": "8NickSifGTRfswRFGsnqB55iMYx6Hypn68ZBPGeZxAeNhHBWtbS4ud4znLnQ2XJkWord6EugZ5ev55mkpxhiUuW",
  "key2": "3nnqmDeUxqaBXyX9wd3DTnjgGqNwUJkh4oFfd2h1HDkz7KMioDP75gDncgES4UfZTsrandpdqn93cxxRMxyb58SC",
  "key3": "dS5oTqM3EidP9xdhvWHXLyhBKJYaEkcqgjaSQoVrqv7VpahobJqmNUatNeWPiFnshhSqnvESjEAWSipHd2TsMNL",
  "key4": "3MEwCGhbRB2ZWDuvpm6U4A1QkFXrpfLEhb3ymg1YVcoSrrDnR9QuEY3HqDEkaoJN31K5qfiEJrNUFgYtvZfGLeaB",
  "key5": "46Qt3nYEAePZ1MF1Sasv9yJuEcXMneyyxxeLseBiSjtMzigo8k7U3h5LxVmDUBftM64DgzX73Q9Pc5Xr53CMVpWJ",
  "key6": "63w14VAhHeA8z1x7GAVf4QYn1pK2XiT5wSAYmY2pmfaN3dxs2fKYdAeZQRn6L5pQiU8FTKQ5fvv5ERpYEXt54ZfW",
  "key7": "e66RHySLM1jFbxHtkwR56LxKT3K2CDHh2NZUWjsR7C1Ejfm6zYaiMAwJHhx7JFjDMXC4unXV6yaPttftPXGxLZn",
  "key8": "4AqBJnoo3gGmB8hUdvYkHhPEEcqSCSdPYz3Ku5qFgchshSLjkAscr63JVuiGvvTb7pKDJJLkYAdwyte2Wb8rUGoA",
  "key9": "59rcSecJboVNc6QiSXRRFKbceaL6oQNaRjnjutSqiGAyEpeoduiYhMM1UjSrGfSp5jFDiPyD5ZJmdYVBom59wqNR",
  "key10": "Dg3wY7kgzHK7CuuVKoofo5HAWKzTyhEjFECndt19cqUJF4bwjsNgm8RdfexsMvMD6iK5vs7YkZ6ba8nerFBpkM7",
  "key11": "3ZQ5y5XX9YvXp4jdSKMRXSAUY2y6kktajRDaCnEExWrzHqReWnUvtbKXzQzwNYPvqCAUeaeBD3GEDbwxxg6oonNn",
  "key12": "3gAEZXH3pRUGev7rYLMkJsVnnVqkqF3KNBMP8qZVAkr44kQE748RMWRCDZ2oABk9BxRAcvgfGbrd8Y6pLCrNYnm8",
  "key13": "2h8busdZsRjEcDHjWxr64m8DRpSpH4KhDaTwmj7wWid3ThupbLX24Lv5omWnGFLCBEgZ5nnPJayw6PW3okYAuWzC",
  "key14": "4HkxXTPXFQjTFFE2aYRZvrn1axn8hnhF1WZRyGWJu4X6QhzLw4qcMUd2NzELN3DBYkgU8JTAyqnktSeZ1MZCKEcJ",
  "key15": "4dG7Had7xPvdx4SfuRNFWk2Z34ms8jVQ31uBn64FxptE8aNs8mZH9iXyRQH1MrSjywDBh1WVZprxcAkUVYqRpndZ",
  "key16": "2mcAyJs5ba2bH4cZQPq5irH2BvNJyWEu1Q78sUWVxJP59HrYXJSRyfLUnkVV3QYiEpiMusCzVrLqXkLB5GkvuDFS",
  "key17": "2n9xkxzNiaQRcjKcfjz5miXjZ5BRX8vLMbjfSeSNN9ukMhHrzLEKTfgb24mCSoNdmcPASZRF4Y1j2nqQ84gGKhBH",
  "key18": "51Lyw2sYjVRqxLBWkWiFaLGKNHqtjst8GZwgBp2ez3oXBnE3gjUF53g5eEErvG26mYXw8Tyua61JYBLMGQzUwSUe",
  "key19": "3qEBGSNVMrYpB9KD562dcCK6wzYs4ksUgprMRwxZBatY7n8bf2iMVBySyTmQKLrydvhKy4rmwNAjzvbSeFCUiBP3",
  "key20": "4uJGCd8qZvfHRHpn8ydfmEBzqv5eu32GpgXxfMjQ5jK8vAGXDEupVZGnYQsG92YVQgVFXfVTfxKTpDTd6rB2tS8J",
  "key21": "vLS61UJk3U6bd5qS4fEeVpG3YZyWkd2e2ZLwcLcvQzSAF26RqCXnJQqCXdxLNoaHB7yVygy1QTwq4sFwXFTMPBS",
  "key22": "gU9oNFE79xYmN9CvU2uduvP1SrZeiFpgjEhnyu9CW8K2whPAvanEw3X5BdvY8z5CyjTtVPEzF49Ka1rYeLF2RTC",
  "key23": "44roayCBWEmMRiFWcrNetBpNRPB6QAWeF1nnt3YFjfWYBTfL2qZnzGxuwLsrSu5t8TFRQyeuBDyqxiPiDjfEdT2Q",
  "key24": "HCzmDmFN8AbSfHVEhLCW5supbDwstRgFt7235vz2Qud5NRKxZxbsUPFWgFxWCqu6A25Kdrw47Hne27zCCJRmxMb",
  "key25": "3P1TnNR2hCAgnBPD62UbVdT86vDLzd6D3GUoXKyjYipmSheD8ymqBjn4afhEnWYKnayf4hVaWYWcKozcLw3qELkn",
  "key26": "4MCBBBCMMzxCSSUpEyUm9ev1GmVMjmncNKNDB5b45rZ3A2Y32ve99bZ3jECXHZSibrtfk26gYCSiVXP3LeScQ17e",
  "key27": "4X98UK3y1jVUXBoV99jA7ogVgysQJNiYDHHBZKuGVeC1A3yyQvLcJAKQoqb1ukrEAbpRjrwZYQNDTu4rhn3tKmJT",
  "key28": "5HHwUGhyYQJsK3Bpi8nXg32y5UTuntVrr4nvsPoYovFkKHD4814oKeq82Nintt7m7yE3DT8MNx93uvzg2FFtYEz",
  "key29": "5bEdCZFh4VPkdm947ikayjcHCQUrwGEzVZgeS2iVwZjJWw7f7awkrzD9auLMGpXsw8e9BeFdhKMZR9vU93822AQD",
  "key30": "25r5vPLyqs9JC9WMuyGHZR33oitK6Hdbm4bSMdL7fDqc5b9uAt7p8NM8AgZfzaT1xJWha2cUSBv8La6aanXW1odf",
  "key31": "522NJrtaBxBvnwTftsQP1o9U2LPeF1XtDusWznEX4H33UEn7HY3o3gZ3THVppLYQaWAaUeuWuwBCcsajkMBmCd6D",
  "key32": "3Bd6wUU9wjTC6YSVVzMVgtzAP4z4CRE5zG2zDKM5KYYV84RLfahfwpyFY4LUbTkXtwAbG3WMJDxACwiA9dAK9nr6",
  "key33": "2StRx61go9TV35GycBUY1R5k5vDcykeRpPL8m1Rxiyaau18PUUhZjApCqwH7Jfze7WJ8VLAHChA7KpBowm3ao7Cn",
  "key34": "dNyt9CPQYwuc1r7RyMEG4KZW7k6jsHn1B7cdPywfcgXcgSGFeviPrNEnvW7HSwEw9oXZYJkq1xWp5MKHu6bv3vs",
  "key35": "4zJNZeZQERVtVEv9AR4Bkpcworz5kjRRs3nAdKvN9JKytfhDF8yJs423DBWYYJxYZ2v657Cxw2LXtvu64dbhX42X",
  "key36": "2UcXTCcjretpKKnAZNvmV7CaJrPgBq7Adz8M6KWc6Dwnm9LwYwsJq7m6f6xcvCsf7Ym4kR9Yx9Pd53LVagHfJ2Si",
  "key37": "5kA6KQaM65hjUYBMhHhGsnRCk7rhYECCzt5kCH1i9x2r25E1fep3it9prCDEXkTMkpJS7YWB5oTwQmN9R7dxehgH",
  "key38": "2aYmzEraZKYpM2DZYhUjeF3jFZNFYiYE6gLMb5yfgaNttbUTmCoNxx4bYVmXzwnQbvDKXU5f6FNH37ruGJ7omnab",
  "key39": "2e9XsGbSjt8bYCqExFwz9WJKLm1Dncb2GyDEB4Kt9ArX3mZx11xyrGprMaZ93ShQ4WAAY2y2BZN8N8FZZzKTk8CV",
  "key40": "d96GQs71GC6FvP65jnwsKPLzFCcfwqZLcL8E9GnV6gHNuSLCiq2wPYMBTLRgDgKAogttgcCWLBvF7Ss5SQQCFSZ",
  "key41": "mFjxMZqhp55NQbusXJp8Cx9ALku9nsSVve8t5gZeqNSaHfjAby8MYCHPZHsaaacd9XdR2FsHdSSy6CywLmtB4XE",
  "key42": "6KoRRzGRTaxFfd1bRkWhqz8hd4WM2yQjBxHHK2gX1ppXHh8nAWTVUgosRAKT7f4aVnnwh2yDRGWJbHiqxhKTWD6",
  "key43": "V1h2RJYMuW5TZbWAK3yL9AbXjguUz8DRweih1oCQVx5JZSjQkjUjhMwTZR7d3Ghj5tSd1G5KbBSL4yCH416AFR2",
  "key44": "5yHgebcvxD65ZvTF4jwBdXSbrXEHrmGQLU4DwhuYU8DP2HjBidCqpVrQiKtCqUYSJjqSvtwjmr9jq37BN3vewuuQ",
  "key45": "3eHnbgGKvvjMxhfULJHyNX8EXjK3kN2WtkewUCcf2W9hggPH77y1Cuw1UEgSECGRWTZvKCRNWQCtkjyqtLavxK2R"
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
