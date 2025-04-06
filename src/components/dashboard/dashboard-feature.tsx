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
    "25P2hJcKmgtzqmRwL2xQvKFftzLa2cwYJnYPBc1V5K4azGkk2gQ2rUx9PZDAu58G4t2qhrrQcL7znm2jS6zF2f1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rX9PJMPhtQMf6H1skHRLTrajhmxPkFnkDCqnzJiXWNA4QHRG5W7Lc2E3BoYALPPEDqq8bGXMZG5JG9VWmnG2RV",
  "key1": "5Paos22hPLV4vW7HzU294e9PH5CkFVKo3S7GX1CeTeEgr8dW9XheQzWaWJqfSjnrEgwimaE4at5bLCMB391Vx5qp",
  "key2": "4UFSnuG9ByKDxiZNWFhRhBU8Wn4xsSj8DaPod7tCTz1fdGm8h2J4fxUcsSoVvZ6mFxihpeduWE7x3m1yKggqv3R2",
  "key3": "65YEMu4FWBCRjW9S3F1vzNsDwqBK5C2qo1ikraEXQ2CGjJjwBs8dnve3duCMnZzp1EAYXbEKxxfSMNGHPLoNbzZ6",
  "key4": "t5uikSPkbhWkWG7fSvHtcmf1Tf3Gnoa2gh8kj3rpdFnAREex5xGm9nrDZgti3p2esq63hBfS7j4ohXEHDLMV3BR",
  "key5": "4x6f23ohhv6ckpUmmrzmCht1wEz1Lu43TWaAGnLoJP76c4H8reYrRAYL2d9wJJbQiAUSEJPjQdtrhS18Vmn533eD",
  "key6": "4a5B4msKnpe5MhEeXb2C3LZik35v9LHexB8nzUyBgAb3Ta2tC2LxaSuG6qNDwsBfeyq6MxLsqKGzwFvyNYi9fYYk",
  "key7": "3WsiWYtPyBDWTLPHgGZoxaqUETuYvaph7uAwhJ2pnWb6CHsygNJEUkrV25FMFfRQwGKXhwGBa3eKSSUgv8b7wLzE",
  "key8": "4cqJvxzZXC2xiG7vYL9icYxbf6FdCgP86Tw3K7CkeiYEkjyvxq35rkyT7daDgu7SAFbynq4ofiu6pz8d2TJmcGEv",
  "key9": "3hXoab8moyDhWtLRCwbbZzyDWybpUBk9M67LRtP1UYwQBvkxgDm97rNKC89xm7moDm9MW1JQGgHHh5nz7pepZgjK",
  "key10": "2tu1WWpnDH3TmpYutY8chU7JisKM5g9jtUBkcidW9wUoHLDvNgB1YhUwAWEVtgiNWM4azk2P1oH6LvgfzUDieks6",
  "key11": "4wXkNuuFYwg8Qzh3MejrmJKRroMjaKXArCQwWYr8uBqA7rN1EQUxrxAcRcx1uKx7GbrT4quQFYQJtK9XjnyfB7ph",
  "key12": "2Ms3JjbV6LsSKNJmn8AQbVAmLyoVPXQWM14XVBaeLkfsAot9nKsUSRdkjCiUsG643sUUUwVWW8kmptTm5j4ufR6f",
  "key13": "4emCn85CwuSNF85MfJHAZWZvuBX1gmsvm1pHGUpwPyQq3MoPcXigAxrnwkS7PpxWSJfSEqShr9SNZeVMUELSrJKG",
  "key14": "2YDDG5iaaZAekq2WMjKUSEipDHFm8yzGPFr5ncc8cTFn6PQR8dmsXUSFk7Hbe72179F5mNq8PPgkFvZSgiYAE8NQ",
  "key15": "5dNXNXTZtheJ82WtGmh1jW4LKcGG428189hisgoobTz65J9T99QHpCQuWC8RU1XpaJK9FgbMX42VkrF3Jzuund4x",
  "key16": "Uosv9u1dFndUJpT94kFsFcrJwJA34Xwefthv6CdyrgDUfAGKNSAZTLm3a1ftR3j7gyuXeFvJE4gaALvPpUb55U1",
  "key17": "xzMo1bFyjLEm8favWWk9BEkRnh6vfFvE5X9ooy6TyMjVQ3L1ZDUQQwGD7r3akGBJov1bUMu9APSQqK7KvWoMNrM",
  "key18": "3qfyyMA1fZvmpdytgyrMkNKVojdN6qkU7DHXsJRKBJ8X6BrevkPQVe1NnYjhGDAQ1qR9GJSTxDPMPXTkiyMgp6Rx",
  "key19": "3kaRZZGtS9NcXLzJUq2vyqYw3H1EnjjmsLJM94RhuAPKShb1aDKWgYqdqmR1dWrSuYegRZaauauh8sQfDc8M2y8R",
  "key20": "2Vh98jYgU4v6DTshGFKxaWwFsBYLs9nh6MknPBQJo1Dj7ZjsdAJTwYdnHG9Wz5nCEFEJZPUbatBG5ms5BuCnDD4d",
  "key21": "3HnE2nUFJC5ZRXMtcEvFvK5EDfPXdgbS5FRg4Q8CRzjN2qd49wJCgHDWsr5zksHeqjCUjX1QfRp7zp2PkrzBQY9z",
  "key22": "wkaLr9Cey66jQEdKNZ4cw1uFG56d7jxkV59byzkanxhiF2EMh26zzWEDmv6pfYMgHgfKxRWBV2RF7wtEbVKzp9Z",
  "key23": "3ghsbDhVjuCyMcvncZMNiB6LL75Z3Z8Vzc2xAYdLRsMQksScj17X1cemfZrUoWY5GYn8qtRx1AZBye9bLUi5dJCG",
  "key24": "b6aCntCQ75iRbgVUiJB24qBn8Whg5HrxYUd7HbHhXAGcbvptgfDoJxUJDXtg2pTHRWcZVa28cSNT91zmHBLFZZQ",
  "key25": "2LPSSFAFgSgXFw6FcRdYVxBiRd8p6MAoGhVrcztUfnfVNCHhSomxUfctY81bCxir1FAZfwvfjoy2HXmvjtxtEYnk",
  "key26": "26ghH4fh1wBQCComzVAoyCsBMNL6voYg3CAn4bkoJEyQP9twq4iEWuha1pAsYgTzuUcKB5xe7civPPdp1qpr7jf5",
  "key27": "4PKrBKrRTEdSrDuXfn1dn86LjJF8dFyLF8oDKnNDZ7HvQgfrjEBaw7F9y4tK4KXJmpiptbGiTuLXuv9P5gaoxMrn",
  "key28": "4f66R6J2ncRixELtbkGxUcRnD1NiUirtp3jFC2MMQjJ298bvoyw6xNQ8vC2ioLVepyWZqSagtQ3cGHxs6YDFdCTR",
  "key29": "3Mkg5pHvVDaU3uiaZoJqmqVNKvhR5B7XZvcJV3gEwt3nMu4Hs3rg4LWxg2E8HsCWHitWUVEyBRuAof9AKp4uXaVY",
  "key30": "2iaCebBMFFM14KrEhpi3XHBNaSX1TjXF5SJCQVX9FehQvpE5Zcg7ZemJUaR5K2Az1yxzLaFrfqVrKXsiS8NWt4XK",
  "key31": "uE8BdFoL42SvnNN3xhCbniBrzSbw4jaVqF5dhExfFEMLZu1sjdESJwNQi1oPBXNqypXrPRwnQrWUrgV9CGndZS3",
  "key32": "5tWEDAGcFVX4LekSuEzjBg5BeAfVgnrX9vxtyBAoottFwDwKvvTtVFNgbDPTrw3w6JXtnePfQ8qHJ89JKVRiP3bK",
  "key33": "2DVdpVyik5o3Agamc91vDLrigSSF2kMu4oHo67JrJ4syAngfxfVjEjVdghzSS9psDdqC56zvhWXToMbEx9GacauU",
  "key34": "36szZWEK77kVqPjboaKyJqDjMAuNguz3EnzBcjBg2NiS2czemMY8ye86dFApbbCBmXQmPW9xiWvYPWJDyqxVNY9X",
  "key35": "2R1eDxzafFAf6PLAw5ysnrrjDR8EYDuxhkmyVMsi1irSfrZLZdFYKPYqEFGegcCEKCgtNZQwJhSpkCm92V8wAwwD"
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
