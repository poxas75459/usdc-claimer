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
    "5zXDTxPT3mTd2So7xBsvEdgvq2LJ2yfzxNHX8oTyzXqLiatGJnZGjNZsvYiBx6XDM44B9hCgVfzR4gen2Mcckgzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5go23GNZpnvwRfUC3XueoymMdGsqpDXjHQQcgDYsYdAmrGXsAwyrWCxVdCfUfiZJSY4HEbeVrnvsE8kEc7R62tJn",
  "key1": "2Y9GR9kL3zDQv5RFvvVjJbXMPcUEYAyZDE4VTDsbBtW9ebfXGKMTVMAFRG94dBkWXgM5DUAj8qpZQqxbGNu6Yi3U",
  "key2": "4BiMWr7GWssGYv7K6MoS5vqr8tqSszpYWkE4qrastPdAkDE87gnmTTHiXnccLotdD8oPizjQcXa4cfrE6Yek4GLz",
  "key3": "2G96r6785K4Eh2doB9hDEiyNBjbJjunQAyQrdrsAYaGUbGGqUTc6CaRG9mjVq9m68FtyTSncEwgCpmVafqQn68bH",
  "key4": "37hDiU6rkWMFsWKJXYs4tM1jotMbLhSfvbbXYtgRD3weiZP79fwyeHotUreUeig3E1Y2s4z5RdoXova8KJh4munV",
  "key5": "2TA8oeUWYnsP1vQYdMJuF2VF2wAsfYvkWCEJNYoDECjk7dzLD5rcJCEkogBQ34oYr36k2ijpCaqNLu57o4Xjyygt",
  "key6": "DV8Qb84t73HmVqnMcPBRcDGw5YNR3TmnZ1o2dYyikJ1ossxiKDRS8tnp9MhLpY83GSTFt6fRdd9ByKpUu9Bi7Fs",
  "key7": "2tGASPVG6K3UyTXv5qkhWs3x4EjH215tKXRkvd9m5yh7wW7vPpXwkRj49q8UbydydkMZvVBWWD1ZqLKrz9Byw4cM",
  "key8": "4SyVB9DoMJYnshWSiQ2DeKHVn2JHDu3Tw4ojGN3gaVonkPzrZ1yhZQm17Jtandr4kcoy77ucVvaA3EQzJZus4rnL",
  "key9": "uSUS7LW2NVUn3N2soEZ5WWbB2TTyu2PB8KKbMmCM1CSbgPw8SQkv8pNpsdkmzK7tCdE7pPhyTeDoWdyibHbyCPv",
  "key10": "22yDqvfLpP52qq5sMKJtnMSTqANG87bXcdoVxKGXBLHsrWbdXtMTvcoy1zxGkef5HfWHCg4YdhJZ8ZEYGHEPdDso",
  "key11": "2MeHdaUj3xcrBLUF6aXcHAWrpurwDcE2N2cUC6CMtuCVvFUjdqdA666CuYoVGPrSSTNsYVSi1rGCqcvCeUTbc5wP",
  "key12": "BoW2SbHdr3rSzp22aqBsRneERiiWSrNAgu7gYPFuu2yNvqdj1kaMJqhmZJXYovznLZf6FhbyhhpkbJ7Psm6HHrc",
  "key13": "5sQyosbZSCAJFbQYNYeaGXuTQrrEZKgw9Fkd6ww87kk566PFtAbbR5cVb37xwbEbRfQgRZUT9qt7iTXCCtykWSFu",
  "key14": "4fas77hJcAKMENn3M8wPXbmL4UB4yKcnC9C27N9EaqGtrjNFGS4kh9JFHXbhrnG7PUS1jiT3smqGUmJFjSK2eeyo",
  "key15": "5y84qG1HaCbeWDwj1bszxN4qey4BStaPB3You4shNymKdpUeB3egva59NQ9Dq6kEPZjYyxbw7EcgQKKvR9jDhJYy",
  "key16": "39CHfWQtRYky3PrHLskMU8PCXfsnPDU8YvUM12FmjoTP3gmdFYqhpadEuzToVjBwRtMsY3FqDWUH4oeU4xR5RmgQ",
  "key17": "2yHH5FuWzf3ip5KUSWNQMEjoKDbqpVXEHx4GQYYAsNMCXmbJ4X4bZLRdf6eJh4QaJC6XDzerV6tc45TtMPD9iaX3",
  "key18": "4ZM5XMpo7UruNftZLP8NnGsY49dDLsZ3PaCj25JwtL7Ye99NvgdgPwujCEbzBA9dyVCKNLwMJekCW8sRJkNRVtDo",
  "key19": "4iDbvEx4HqrDzEyLcxJDeMAzxnqUMMJtwK6ouFJWcrC3mvAMLVS8xTMSJBAFK93d7kX2Nu2JRGoeUMCzYyT74qPL",
  "key20": "3vyE2XcyJz3vyKpUkWjCNxbd5H7XATDeHA5oNbU5gMWMuJgzBzDapC4HJJSRdM2zDa18wvg62LLHmTdXRasgZbXL",
  "key21": "4cTmjczD8AtJ7HS9xqViT5XyoZVaDgyzPA3gDqyWvc4NtvWjaMUhHVLynru72PiG2k3VmyRkbbKetEuXVQ3fm7fh",
  "key22": "2AwYwEMohEoBNvk3gdP6zbmkbRtZuyZwTVpSVmzXaBb9WXGWWsvtivUTtrT72m1aMtZMkiKb4Qb9RHAjJ2aUTbzR",
  "key23": "4ABY3CQtBbiqpj38LfZq2piMdosmUAtgf5Jps2axKg1S6q9KzK3tVHxEYKbYyHrCBnKjhZqjuCoWWxVUWWngfBo9",
  "key24": "523d7V3z5H55ypMR9d5Jx1W2uPttSB83fxyZZPwQXguqPyAhSbXgeUFro7TtXA8F2VDsoYVsmjCML3dAq8JkBuXz",
  "key25": "1NjaQrq4t7e6mid2AtJ3QxPsUFs8U917cck1aqFJoHNDTHjVmEJDqMEsXKfQTbEdyJRJkuip22feX1n4NamCDpW",
  "key26": "KSu7tRzBWiXYennWgypRNSvhRQKCULC2h6VhJyrJS1TAvnPNuAcqoAosmGBjzrSTeCLWSPozZ4hExUKuCjjQ4cq"
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
