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
    "5pbyscBPoxAuDRAFK2q1gVosr7jsLTLUcppQSRr1ZKHTqyx3nGdYARKjLWCSJUDRTDctXveYxq29p9Uvst8LaTSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZYiUy3eYZYyG8qGLv6WXvpsAt3KLzeukQDPPuqziUrmewfmKeyPtE8TNJhpxAGCs38LQ4CG65grBEBtGrdZffn",
  "key1": "8HB9W3MMnHcrEHTxsmWQhVoiA93exakBotRM6UdLs9DcmB6tc1dEgDUKBEWAm7c2sxY6YLNfn6nZb3q5QNooU33",
  "key2": "4K3ps4FhhYUSuaRBEZdkS2xAdVkyZEaZ2WFKeHHHUvbYm2Sx74AJB2Q73Xef4HLqv7GbuemKaeXHGGw9xadUVVSx",
  "key3": "3EFD2WH15nMr9Y3ygCThjEHXNZ1LCbEvJhDZhGeyovJ8xQPA3uCYvEri99z4xcgGsLA15HZxgZAGNoZzvYqq7ESn",
  "key4": "35NQoVXUek9Yc8U3YhmjVepWPvPTmVNofRWSaUUCoBmmTHBHYqQa84nG5U2cThRXXMnpet4H2uUunHVHjN83MKNh",
  "key5": "5e42CRPhiGXgmA1JLZaQGwhBdGXzP9QvquieV45CDSdQAti3iFGx8UVGPtTXRRot3yKm6kT6dgP1rjPC6huRZN8Z",
  "key6": "5XujL44xyYPv8oKAmGuW2ytGKGdb7ykTABav7VnABnoA1yE5cQhdudoNkC7DQSnUjqttpD6WomDpRFPrjBTNeUYN",
  "key7": "WcYzUnqhoKWjr9egX38o6HF88xZuJsiS2wuwX38u5S2SbWTsDrLqD9mkSBwq2PkBWJ4UG9Rs4MvapiTcxnUxmCT",
  "key8": "52t1Z8xon2Bpkr3bdD2D94dyqCW4QV4HUMCbfHYMiop5DkhJQBMenQVhtwjwDPbUfA8jkpZyo5kNK9Rg2qed9GkC",
  "key9": "4GXM2p6L3y3qteXQ7FfH5U5WPXyHwKvnWVJhEZ8AMPwbh8aErF5KuRUGce63pHSbsPFE4tGABskoYoPeYgnCpJGh",
  "key10": "4z1DaaXHv5WMUfboYFmReREC6oqqMHxGAQtCACpyY8EjYjYMnP9CRzArLF4MovthmVSkYHxZrL2wEudL2d95cpct",
  "key11": "2PX26TwtAzzECMA8a7ddDaJxPUsBgtcJjjJFC2aWhVp9Fybd4WTWvrTCrqJj6EyvJLRCs7TQLuAqg4DHnC688BG",
  "key12": "3XZ5HEdS9bYdEFT4QanExKJdPFYQmBB3Q7C7fTRPXx41ZrQJr1qCxtfBZNSiD8TiVzNZaMZVgRXkFQ2YQ2M7aK7X",
  "key13": "5TxD3rqYWPhBNBAxeYe3vSAtDaMr2shLrtPZUoFvPzi27QU959e3nt26xjRxZbjUriEwqzBSMPv3FDS4XsE7Xe8Z",
  "key14": "5V7Nhp67NcyX9f6rjqZz3MmUU6Jqsc2sJY5rP5PPaaTEpqPuATaboaP3GkRduZwizcfCY5SmJ3UKZcoVz4e1x98y",
  "key15": "4uYUWLu8dTYT9QksXScFRi5GHu9j538ezTa6PiK9sWoFxKZGioW5EdUYDX1L7dxjY97fVh1MN4yjRBcoZWj4sLc",
  "key16": "2fQ5gywCpZd785umjYS8MvtDzfEDTW3y3PUqV5VonGqga57FhC3dQr2vKvJh8XbD89qZj1xb5Gi1Vc5m4bngBWBw",
  "key17": "aeKPt6vjzju6ejEwkKmBxnX5JkKTAoMrffyXJguq9FsS6GZRVFJY1Wr4jokpZXUgWPNVVQyhmFu9oQ2QJPhhGVH",
  "key18": "5G7PZmZovtx8CdNRAoyWpdTjDjcq66c7szApKf7rMR1KHJvMzCtcWTRVA7v7iNogsMNaZzgV9foSJUNZJZyQcDuz",
  "key19": "3Xr56eZtMJGXypLywzjaE9FJQQYPn9bgM6LKKvULoCL1eET79kegx1zUVt2CXZu2Cyg4288GGNfNUBYrBRa1scLh",
  "key20": "3cXVdLnhgiwVdJWkcSJA722z1GbuaSDX5okbExnjivJGWmSNv6R2QhwuxjJH2BULhmPesNpGRquErfSejb5z5LHJ",
  "key21": "5xgrHkyBvqR1urPYg6ReAyNZsqo859QS9PYkk6jpdM2fzfoFyEZHWGfcGF9d1SZiQRywRoBiQrdHS9bV3vc3A41w",
  "key22": "DhdbDAtd25hfXG7yBHf9BMevyPjbM58vPrFTas7e2BG57FmfwhXmCvgqUifXfKD3KtejRWa6YiWwwhgyMM1z1BZ",
  "key23": "5TndknYgVDGqFX12D4oCrv5xJLc2e1NppW39W3iUTWi2LYKjXs74wXLZRuzyCBu3VxGGqCfz8yT2PNB3vrTsYmyB",
  "key24": "4XWBuRsFSxThu7dWDg3Gu3EbvJ8EPLpKVd2EKJkMfX2ayLHKpHuZ7XyBaktpqzYdvPcmW3u1ojUCGnJHbawfvqM1",
  "key25": "5FbjUwrME2ny3ejHZAEuHWdZ5vayqRhx6wZpMVzPPDCXXgzFyccr7n25noEhbpHnEK7PczA6r5qnDA3SuVgkjtp4",
  "key26": "2uDgAU9mwQ2sZ25BbJrHjUnAbj8NDLvmnfoEiizcvkTVsX2FqTZm13fnmvjVmhveztLrbV6Bp9vPEhDg39V2gs1K",
  "key27": "2QViGvxg3EQKvfEo5mFd6MGx5ye6zpSuP6fPpDnQdHWEpDZKZYbmfFZo6qMC4F1KcZyy6HqdQw4v1dqQFEqD3zoB",
  "key28": "MFizEHEUkJgcysfXettYGBEQf4t8Fu29M1kvYzMykGUcKL2NgsxFzjzGmdrWA3Gyvw7PyG2KVUU2SX2RurW31QM",
  "key29": "4Df5GU7yvE7VbpNZBYWqZQ8NhDDkbUqZ2dDNXLcNx4Z7iPVyB9xywAk1QdasDZQVENBxUDWAeXNcKTQAjguonQPj",
  "key30": "3S9LtKJQ52fAzi2SvCqA9GAzCChXYQtx7FzuyM514kmQh3TtFuCstfwZsF9aNrRw8WAmv73fCFFtWt2NWu7pbzoa",
  "key31": "4dKaWugjiqCA3U5r6G67YUEXEnJ6DUDACa7zWRHkwhXAtNhmX8W73kA7bj76yH47BAf1SGKPpXpMyAaaPgU9ZURo",
  "key32": "2aZLVZRXeAhoWk4nUpgDVvcaQM61bH9QBYfAYZM2P8vd2TtTtxtwGJw8k327Gcb8aeVsvW6zqM52wxrepjU85tCW",
  "key33": "26X3XHeysBJR9qKDWsiXEoKKTpe7DHmJrMchEJ2tRmwqxswz5axoz9rfMWJS4FLREPoStbPETdaVPB4n6rs1i7xP"
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
