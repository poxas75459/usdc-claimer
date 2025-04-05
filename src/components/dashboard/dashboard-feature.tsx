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
    "57SyzoEZedw3fwhKcoDiu3tecqX49CrmgRxkmD89w6RMomtpQ1ALS4rDnecjn9bvqecnrBPcY4bGdGWPpHU8cWdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDa3MRRi8HXSqpbGApi3cTrb7cQh53C339XU9hQ1tkHeNZmnAntyU6ujGrF3ZN1LivpmUEXez8W8Z6iW6BLinmz",
  "key1": "4zD64wGsu4eSN25ENhgCNhEMY6DR3ZWfTQ8fi4ao2m2qsmJwwi1o7PT4QCjnr5ehCTFekf8FyPyNc7DaraebXcfy",
  "key2": "4TqVNyhnva9Xwtr7yBheBkqfQhQPAJLvCmyCGEVF53tHaoJgmoaghB8vkUrGYvpmiSVV2nC5LFMThoF1DPGaWiUF",
  "key3": "2psqiza38oCXd62387Bmze45zf4ip49VSaiRywdoBibuSYXJTdiCu9uHWAABAgy1BHwZSJ4hRuqgcdn5DEnwGoGe",
  "key4": "TYHWBTrTfMLGdzty6LatvHSGciayE5cf77PWEK8NMjtPGn97QA9NBabwmqxLNtxykQSUyD6pJ2vT8bL3pUf2bpa",
  "key5": "46zEgBwCWuhABvnwAuS6eLMpuB99vs3J89NHfmaQUQoUKDZs36GsbvEpEwkH2vTjaSYXHckwYXZkqF9SZnsQ5Sdg",
  "key6": "3MhaECyhGqxixFDgnVkb2F3fQHy5JbLDPgS3ddQnhqLu7cHJrrpVp5PBq1ph4VzxNQ1Mtn14m8o2Uehp16AKB1v8",
  "key7": "55y5eyTVCK7541FPZ9s7NXSNYvW7etvhEzQgsAKhkyJLbJ4RpGR2yVAVVWNjNhPi2nvoDJYThm9rGnUP9KhvjxZt",
  "key8": "4XafASBt59VhTTE9Xf9XYmT7udbfyykjM7uMjmV31GXPUSVQsWQu4FdYbt1S4PoBbhb2gLWBPyWCvGLJr3csQVZM",
  "key9": "4ugmNwoXRSfg2GAueX2fPxkUvC2LJ4x2eryKm62Yy72B9qdRAYB8Pf2MNuC9v13eY8V2pXBYebVo3cq8C4k6xwEo",
  "key10": "x6tzQ6Lo1rgqx27DSxKJkRenBeEPgajHhBytEQG1JFQeWy7LfbMnMcwq4d1wF7aTMDKKbgBM9iD6M53ZpCWwE8B",
  "key11": "DTy9DkVdMQr338NtUMJAbWewvy4QTKHqw1ZZZGW92NQjwMskkA6hS1MCYjaQfAEpeDKAWEGdzwTFHhn6AQC7QkL",
  "key12": "2CFoznSL7SY5XyTpuypzHDx3XAjezg57yC7z8b6eakMKnDB3RDxoVwcfmuHG3K7VCJBJwARLZJ7LJ6jfwDiPDnwc",
  "key13": "3wU9FatRcyqca5qjgLVe4qmcvWqVumg9N5L5Sq8nQuhtga8C694SGLXS76JcCqJyv5Q6bnCM4uDfaEoDG86NuNgN",
  "key14": "5BA9L7ipporF3wAp6bhq6UVHASa18eQRbCyatkrocz7711CDAmirT9pb7EmJWHEJG1KjzjDGVhJMDfYtZ9LxZjhK",
  "key15": "imYhDPSRHeFTKccrEE6SaxFDCs5LXiRZo9CBCL3Bqmg2HR5rBx5LVyJwmJbn9oCP9y3KkSqGrkb2Th4hb9DosxG",
  "key16": "5V2SmrDbm2NTT4BgowarM4QEuoDPdNZAWNfjFsyXihFHAXuwNwsVg4Jxu9E4j3fYfqhFpqvLTssBzNoAJxA2z1JD",
  "key17": "c8x9oqgLWiKBCdxbggwApg4ktHQFCeuMq9ik5qheHTmfbZjz8yecnCXkYHACPyXcgyatiBcYLXbbNHA1C1SBU7D",
  "key18": "5iJxvu3SNib1PjL5Laxauhcep6j1H97sqgkd2BYukSMkoJFb2SZn9KHD9qa8HWp29drChf8Fr3yWNRgmHxfxUevC",
  "key19": "NTf45MQB2rUMKY89Leeruw3UqzMLjV8AztXAw3oFq9CE2vHL3RJaCZjBbXMRQU1YkrNbPzk3CsZRycZaZARgtwJ",
  "key20": "2sfREdYuepN3Jmxzc6RE8pp2US3mrpZfs4L7NHYbue2DUh3SzyxpZnrgYcEHkLgFohg8oHFi18VjhMiDss5uR3EG",
  "key21": "4AKthT6y6Y4k38ohcydCaz93vXePoRhmTQUaphrUJGJccqLW8K3EJ2958VX679Jn7bZ3hvDNkQgtnK5Z9kGXz3Wr",
  "key22": "3kUkyFfQUALrxgkHXVt6sKii55YdZHEaHgvoN4cVLymuznwmNDYH8n5576gfbmWfXw6qFNHhq1Z3gwEv7iTiHpoG",
  "key23": "2CzzTwtj4uXwnnfDqQerS9BQx6SyBKk9VSCSYM9o9MDCUYN9eBYr35YE3HmNMUcF6BWTbXCaMQDs3taPELQxm962",
  "key24": "4XvP5sFEbh2EKvz3qzy5kvWMHV9EE5MgqboWfN4YoQqovG1B9bEHrEmeSpTvKCjV7XE8SFTYdkKvFFnRi9T8CQuU",
  "key25": "4NTj53JNtj2SBNy5AHuDsL4TXcQUi93rRLbkHxvUBW2Jxphq56RXwsnhUL2tBAybZe7uyrKcykZrVrTZaC7JiCDV",
  "key26": "5FhoxezKd2vb1Mokj5GGtXozF8xqAvAs7wZpAtpfx7K48bHWRmdcNT78KrRS9X2edMRHwPtx314a6wzj3cktwpY8",
  "key27": "3q47tJgnVX3bRkm11gMtiRF4kRcs6JCXY6g79CE5L8CvncAcvmdHiGUTNpk2YdbvTkiEUPJ4qkexMR1S1wAz2YhY",
  "key28": "BbcstW2Rf4Vy9i6M6iHCBzXfV7fv7VNGmadci54S3r6D9c7HFuGpKFHi1CLqsPAnFTdrycH1ecxHdEnWpFbiMNU"
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
