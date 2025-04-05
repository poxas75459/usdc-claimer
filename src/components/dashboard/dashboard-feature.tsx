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
    "4DydsYzADspMa45wAvoyPEvana31WuUYuXQaHG6YjWdTghDhTNfSyus38DXC34HAceP3SaPYtYYrBDCALLJ76ULt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EcQcVTLpo3Kc5aR26WbGL99dYXbDb8RxzpDojfFF9iauKeqGd2s3YYYtZi9TN1qcg7GdtF2gfxDYjomkJ7eaf4c",
  "key1": "4qnuPjNMb76qR2gXKeUHADPkp2raGqhJ22peoRyrH5BqitQxp27BoVwrJJk8cnTgXkebTy1QeqfTxCiQNs4FHzJt",
  "key2": "YEuEjcsVNLEXjqcgqUs8w93v4e6q1tg5MuNS7P86MopbfDSrN6xUZRkJukdrusXSgdSTMGjFCPkqQDUMnNuqqux",
  "key3": "sY2ABMNuRZrw7bRB6VSsZ7PUUhARQoEG2qXxrF1LrF117qjLXgEiK4LLGay2QUB7V3xSauY6chG7n2eDrYVWH4j",
  "key4": "5uaTrdgJKSiR6J97wVCeioajCubLy2NJnTMLFX9DAVpUnAdoo3cpRGYqn1ScygMK29SqqfdDQmDT9eo6KkZFUNRp",
  "key5": "3uXymoKzPrsfetCn1BXM4FDnD6rqtnfruXuNT5BiQenYuTyqMMU6h8cUSHuuPN317Sh7ESMaLfdYGahRyP6RG6N6",
  "key6": "2JeQvyVTeMpABesW7UvHi5BH3v8VB5389zTsxPtn9hSNrw4nLzWUmzfNDNTN93oDnosxi2aFsG26f2C7ZaFFNsLf",
  "key7": "5gMdHMynNGvy3dPjGwECSVnj3KZxqFpzFYA5HmTwKi2hRCy88Usk78n8k3b4Nz37zGWg83sMud3NCTCJcxXedxJ",
  "key8": "4qGk83cKTEwXUCZBAHyZ9BQgueHs7XDCqSmzPrDCHGx5WNrvXG6F2W5g14cHfsjAiuXyxeLnMkBktXc96kgMEQEa",
  "key9": "phsRv8eNsVPxXYfrV7PuF4Rt1snVqGZXKeNVvJs5BCgA3sveHEraUpcJ3DMGytr1L8kjZVQDUZ4TyuAKQFbn2oM",
  "key10": "4ort9biGZWtyBwDpXsRRPfxj8pSzGY2zq4LJemhJ26ukG5n85VmfdBZUVKJ3h2SbFyHeBTCQ12WJCmMdPrXjHGiz",
  "key11": "2xrJhrLpGHHxuJmiViCMWrttNE7UakQyzLLU8QrYwCRreTbTSqdm5kunfGxLSY9VHjcpda1tdDbBHLnZmq5DZRNe",
  "key12": "5UrbQVZoxY4qJmwVPtN32TxbivcowomaBZ15c2mwGXLW7PAXFHgC989TtgaPQLkm2hgUmo4aHA57zhjR1YCw386U",
  "key13": "54SNTYg2s8kjUG2vvgVm7R14nxr6tNmEHyzcbpYJLJcwSnH5gZd8Z8Jcdnbbda7o7fDMuWcAc5ahb2Cj3XbNuFpy",
  "key14": "5YYcb7bY9u8zgW2HLUxfUBzTA3ThyEssSr4XFPXT7jBVCVEzWEBjdmLGQLizD2AwHahQrpQrTpzTH8RajmUXxDx3",
  "key15": "5ZUMt3YB1HfiGkybrptUfAbSmWc6gGwT63tBqFSh8geNUyVs7gRCEMDT4xaicnG4pBFYt9CYFjcyG2jPW7NaAzXy",
  "key16": "4AiHgdzYt4NEz2iYhmNvE4knz5qGRfmW1sP9VAee7bX6UDVnmLLt2a5nWX9bBahYMBe2YPhK9tkc9qkZ9vbzZqxM",
  "key17": "4Ca9mJsBTjsStLeV7c2BXkFa27nYxrKqv7pRHLp8LGFvHh4gao83ddWed4eiTap7WZKxNJiXBqNLVQziQU3vcxXn",
  "key18": "4SzUUXhVnWAnsoba4j4M5y5NB4y9BmDmoTZypcM6nBZ64zJ4VB5q8AyH4sHzypPmT36dtGWxCwVGo1NXxCkHqKp4",
  "key19": "4T5jko8VrB9Yb6csQFGrhgQLN2duQEAsr2bCCcMzCQ6WscQmJU973i4WyJvz4YXBNJX8xqcGRCJk5MC6QPCDXYyc",
  "key20": "3goDdkaDDfTEQKQg3wCVGByLZSK7sGZDzLywJ4VAw3k9etumYv4L76AioWszAbdHmAMVuNgedZwgKCZo8KAqXUHP",
  "key21": "4JUnbGVzSRxp6fBmKhEhTmbsST35tU8r2SURYv9jXTDpNqh2Yv89Pvy5opcnWwptWDYa7QB3emsjDJSEZ9z9eem1",
  "key22": "2arYtAaiqMevYASV91ABtVBQyn7F56vEiRS6d6zWQ848KfGaujbx69uykkNK9tEnTiMDwK3Awpdgn4Jxci4Wuwus",
  "key23": "2Nxo2B7NUBmhP96uuRhzQiS2KKngcfzi8RHrvgoJQu5vujGxKVr2G38WGpGWVpn1c1RdKaapxmiQpm9QjB34xRji",
  "key24": "4rBddHKC8dbvJxYiX6C2tQzWHDd43hg7poPvdd5jbUhayXAqs3r8BmWXYVYnhmZzrpwaJuSowJJVkXrKTxE7ZpVc",
  "key25": "539nWwajLXnupuYUbkChtfWCJRNoqY3NfZR7HTC9s3t8H1c2T96wytEnqvYeJi9PfQv9wvVDWCiZX9Bg4wRY4oyz",
  "key26": "3QLkdvaeTfN792n5pGFtQv1auchbuMLumVSYu6d8XcDyvCWPY9bJBVvh4z3Yjdho4EKQM3KHp74tDv62QoujBYUp",
  "key27": "Bgpj7ZdwsW7GHxULos7tpc3dZakvkdUbJ6adRFHh8z5L47XpvxefTssyLWu8jXg28pBn89S4ZZcgpqptkgb84jY",
  "key28": "sBA8oxGssYSZq6BQ3QV8QFymJg3mY2oDTg49zjrpAMqKXs1Bd2cJiRM9k4cLamhjZZ5NjUcyqhrb3G5Sn48oN4W",
  "key29": "5JjM4N7q386jRP1PBvTmjFawE7wc7e1jkVaHV3g5BqQvtY5noKTdn9ao4d84CJoLRi4W3L9xSuXkZERr2WZJbkBt",
  "key30": "4ezNNGTu5hPVqGCujkKb1shXiH1rxfdQDX42eFsYUmGabYdC2BdC4uEB97ynmQLBkaaehdPmn7tRpk5jrhWYpzrT",
  "key31": "318uEG5Qfqwb1wCfQkaaNqqYCHzggYBqwnXp8WJUm7Ky6jHVPED1zpGPYdeJEJmYvq7PsAUbQQ9iNPRWB9WxkQiD",
  "key32": "5jwh8UG5fQMZxQ4Gepeot7ViLUtvescwHNS5SdzN5KYx6HtpfWP1ogHupev39SEcF2KMn5ftWVmhDQZVYU5drcys"
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
