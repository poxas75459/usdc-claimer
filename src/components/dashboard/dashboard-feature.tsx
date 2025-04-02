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
    "cKWUss2C7k2NKuLL2keaGN5bCjd4h34kaqB7K1MWhP532XiHf1VLftTekZgHZGCqcsFKQ1HhTiuZgd24bC1bNA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XSLEiCuuBGDSdELWHtgr6nqsPpkWJ4cp6RrwMH1wRZwQpxQzZoy6syhdfp5DVnYy3uBwkvZFsiEpVDkdcA34YSp",
  "key1": "2qxJ1cUbeGwqJMjjzEYEYp7w3bymSiEocXJXjKDUTiSaFvVBQXgCT5r52hUBgykEXuEzAp7F9f6RbRB9kbLBPX3e",
  "key2": "4zi2Bm9Q4KAkErom43LMa8aX3bE8PNK6bt3sorxfvvV4AwpwYq4BCHsWFJUMQYMdz1QZfM8QgkUhBkGWtLuDA7Ek",
  "key3": "3HGA26w6VfmEx8TrDQEBHQjks1KT7WkVM26z6RqiynGPmqvow6UsnZBYq6R6oYSsczwPA98oKM3kGQ5QPsCbWmdV",
  "key4": "fWUCFZjf8otzmDxSXgbdAgmXEUAL3AphYwB3KJ9t94pKcV4aXCH2zAR8T8M1B358QkDuPY4gdyv8W72gci2GSsC",
  "key5": "pmvidf6cvZzNRRUk3SxsUzYWLQETXEhHy29VHq8So3x6cXQuZp8NihoeoCXBTwn99zPfmGMTw7h4XyhRKcVYd36",
  "key6": "7TNxm94WwzzxxoiCeY5kxS4ueUF4cvZ6mTGj7iRHSh2ddr4PLRgoQkNFqy9bwZas8bv1BrSXCK9ce4FXoLbNqmS",
  "key7": "33jFBrPXPR3vaZaHg5T8Qi8Uqhya11nMqfverirFg7czHUzhLmX9tzztUvmDZzckDXKuuktE7CRbMcNS8zyhrEuC",
  "key8": "aaVZ5dqffJRDbMZZ5dFK3Vs2s9KTXGGnw1oz44MVx1fx3j3HK7ixDEm9uEJzGifk89EfN93m331smam4qDy8hTV",
  "key9": "4mPRT3EaFZdBdVBzZAjxTTzDLoJe279TzU5HzUKKGVsJaSH2W5sj7KEGfTeB1CcAPD99NGfv6M1VRQLcEpJu6vs7",
  "key10": "3ocPrTgKMikYYgydMJMWKgakR8gXcexjtryLPKT8ZJsTm5wLizJBJL1aJqjb7U4DsrpgAPACHVSPX7seJTp3i8gd",
  "key11": "2iBaWJyKvytRmxaJx9r4L4rKmA72k2ni3nLabvvThGgcpGt6c4z16DGkrhVtM8NUsdBjsQqsfuFV8VZGk2kqCpSW",
  "key12": "51iAyQoQanNE72hB648rS2wUM2YSXozAGsHmTgQgfxwAXebfKL4zfgszeWH8PRDGKmGU4Vh4qRburWt76p77byLc",
  "key13": "3o4icdWd1CvmfgbBJvwuaLvBaLd7eBZbJwVwBKAvy7tabTjcwkc9HzLMtgZifA97qNRN5w1KywB3b5cgQutSdhQ5",
  "key14": "5p1PgDVxpKhHwNbVW1T3N3rYjLqKHS3gcsC3NvnPoSaVffs4RMAp9bKvpPwKTedgSjz4GmEai1nY4312yNmgpTts",
  "key15": "4Spsrw2rAnf1WbmqWUF4567j6atxkC3qXdrRM6iHqKk6DXdHbGe8EZwhdWETZFSd5wvq26cS5TsiaEzNgPTtieKX",
  "key16": "4s8dwSzXbzT7WQHEnfdUEY8JB52CKQs3gmkf3V6VkStDPphRq5QoFnErRU7rnSjhGYvBGTrCLWnTQkmzDdEia1LB",
  "key17": "4gvvxo1oensKCsqp1it7e6Zxoa7eJt4Q4xJe2dqUterVWjgknb2kBSMiGdJDHhDB7RQqqd7Y2psNkzqjVcUnRQvQ",
  "key18": "5XgNAvotPG9N5taiqn4cZi8i8mxGbcJjLSfv3JtfxxCkiLMzr2mpm6M3QTufANGwkq5iXxhW3y8fLoQ29FuChCQ2",
  "key19": "4EXVhD6Bccv8tSTCGEQ1EkPcjg4h63WUGvod2rFGbZZ5fwbxFPTysJmCf2kGtLua7ZiPFbjvnGi5zxTF8SyA8CNA",
  "key20": "v5XpCepQ5YBBFzbftWPdEefNpR8E7NyiJYXQpAsey2uaauW976PjtsH14VHDonB597baPPeqNTtyFo4FcJpgB4E",
  "key21": "5As6CHD8vm1ngGuHhHn36xmXq1HWbuLsBGf49q7PHbGxKDjndSCGPTL9pskrfevN9rGLwYKyefDrP51YaMkX3xAs",
  "key22": "47dzf5oQ49YrT9x4SVDSCNgAeSMN5SfAZKNN7HXX3CLsnpXnUpLuzcmUfySunPAo1xoPyNQW8EjNY8p7doPZZUwt",
  "key23": "4U4gNtWXhZF5KFb8PFAAjpSN1evPTFTE6sSEW6yZ88EdWXEUGZXT2rcp3nCwrCC2tTb2uBsQ48ukzJnjqGFvufCA",
  "key24": "4RxFmidMD9NaTCaPFehxnVewRznUGacmkEdT89iCTNm9QTqQfGnJZs3nxwAVLbYhsD5toRqycDCmusn9cgSBiSXS",
  "key25": "3KNSGa7ZQ4Cb1o66kNdj9JfUY5j3Fibwb4iK2M7CXAqhcygW5V9925dhLSL7c6XTSVammR1TkWse87i4Gv5tdDkb"
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
