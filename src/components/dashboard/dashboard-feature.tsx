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
    "5euebRJD7oNsGJvsRXHqP41QW2GMEGep8NVdBZwoZq1fzB6iE55TWijXdn9ypLMCASW4uNxCE5Le5hAK8aGVNXRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uK4rTf6LBpgEQEW1sQZ228tgkgcdTyQrWcTgFfAh9Hm8C3DdaY368XxPKzYq9L1DmLk87g4DcwMDi6wmZJwEcoA",
  "key1": "4ySq9bTysaYLKNXzCnUFqzuuPbEVyxWwjJiNqUDYwGXDeBbWF9MKKpzzHeNs8LrmrPdPTXVESy2JTNPo2GNm2E8t",
  "key2": "eKcGERb3NgwJt44ModDxYmSbDAKT2Ptsgnkg7QHfoqhT3sWYLYfbtADH1hGhuPK1c9ywPZd7yuDa9AR1brnFo1M",
  "key3": "4zW9KRY4KUaieZ7zX6srSjWom3vZ4UpUjc56GaqApxJe5rgZWMm94w55A3YRUG2YZU7LtV9BBYPoLwZUBaSjwYX6",
  "key4": "3iMj7SDGNEsu8nLGAE4Nmv95cw7SGQshJrsD4cRVQzmKpo4YPUZ4PR8dwUC6LtbjJu6FxpTsnFN7LFzf9bxhU4Cw",
  "key5": "4mhJXPSBWUJSnNNNV52kFLY7vLxFgX92ZWg9U8Bi9Cbg4iWSAMmYikauZ1kR9jKW5owGUzsMc2mxdU5EkRgkCFp1",
  "key6": "5cW1TtCkxQjVKGXd2ZpTMvjcDaqMPkHpX1JzQd5xPMe3TqMf7ziCboeZREraxeQ6PTNy4WrsipGvtKfqnN9Xq77U",
  "key7": "35ARDu8wU5ubyfwLHHyu6mxkmpMzgMa6xCFJ2eaxvt8w3TTLDBzsyhDjY222XVqWRC1YPnkoiUfTVNoGVHe3wCNU",
  "key8": "3TMFa8fzjJFDQd5BQy5oDfB8WwhF46uzPoHMYNEXnRKaMAKKMvtay56F5KZReWrjEPAezwKwdL6jeq9XM1YkbjiE",
  "key9": "4sj6vci7APRJKuwifd4SxGwGDg14qTZf5jnvk1hX4sq5bFH4ukQv8RsJAH8F1CyXre1KW8VEGicQRYKyDPbqa8kp",
  "key10": "x6oLvYvqU1h4WAnHWbPUzGnaRECQu6Qy1rCGNQwngV55KXPTLFGqjw4eFi1jRLpa97VpVEBjSeB4XQpbq3x73i4",
  "key11": "22D7WnNnXEdVqv95x5v6XbypX4xfD5z96pHy8Yy2Krw9bk7UBbZweDsCnW7ifMAWxdD9aJhR6GWnp9WN2Bda3X92",
  "key12": "3d7KfgVagpM15RppbMMKohAo5fLHShgqMCav4mSELrZmnFVGTKTGhnDZ963L4wuagMpqcN5TX68AADtEoKtdtg7Q",
  "key13": "249LjnFBMYyAF5ZKbcp34ah57dmDv8KRqz96rrX73jEkhGrghxqG14SHefFrZMhS5YK6LtWZhaLKbpRCVRfd8UxW",
  "key14": "4uSQvdZKU8sEDLULLn4TqbRxtbVurLt97aU41a8xqJw5FLtuRG6y7R3bPHrxKi3fkmMPVsyE2L3UBiqKmB7C2w8M",
  "key15": "5cTEYZ391sBwvWnhNhQbbHj4zC3xwE65nfH1A6CV9Ysc5Th6vcbEBLpKkTa3T4ZRQmhW3tk9LGjM8ipdJn2Ths7H",
  "key16": "3Z8Gjav6JZmccbh2hjehubobNw34rbgy3LBKfwvswEYdYyEWcaPeKfF4eWgkwgWGRuKVV1hieiKySWnMKpwM5xh7",
  "key17": "9XrvSHMDzr41AwPzfmdDBgAuMNt6LvVEtMCnpE84TA2uxYt7TGrzf5fgH1MvhsAZ8CjsHPkBcoD3R5LwuEqPYUg",
  "key18": "4TyVgBKDJsPxxpvhgjymkaKoWx1TTY5dcxRKwDpF6XZSqevEzHW25CfNVUL1n2JTqELLbLA1pDfpb2XdabpucadU",
  "key19": "3jivjUhyPsRsDS2wzCHg5CUXBbQmC3YUtRGGUegnRow6GTPSytfTysKoVkJbDy6tCAwHtnJinoBnwc4x3HBkxUfa",
  "key20": "5Sj5XHFdCEj9wxq1TyCccDU2krAnSQwmGEz4HvjW8uQRReoq8a4sFUG8fNc3gKBknRiLifvMvxNkk2wCtTfdCghR",
  "key21": "5mK8umx2zsnmzC2ndZu3xMwxzZc5bkLdnehzVkSGYzR14DmhGRn7yK3e4RMvNYwEPGbpo9EUTfD39Ar58kV8uwtH",
  "key22": "5SxkQUpRtSKAhaLWgUnZ2WZWQnAo7vRebcPLidbNgSYVZUHdKKRUcjw5SR6yXXML5ohrgUcrzFoUUrvEddkfSGbw",
  "key23": "4MVPhobtYrCupaekEKQXLFPmefqYcLqob9MRQwgZU5s7dJnNVVmauMJExqChbuUBjz3N4hHQaA3QA6FPvfiDUY5s",
  "key24": "GZtyAFqucVruxRWwGrz8KvS2okrxxS4KESVWALASx9eW739Ww6HPZrJHqa2vm1rMLZ9de9RhH4v81YqFpyCptMf",
  "key25": "3xWVu3zuWQnaqaovWKHJtvMXeLABXnCQBeMq3421jBYTyWwYTPMMZeW3S1w547spZTXbRDhe7AxK9dhz6pESrEPr",
  "key26": "31gnaBMa1pRAPDRX188xzgaArsJgPPgmPjS3qJneyn9tr3x6BMjcYjrnFbkySg9DMoJUENMmS9RPLx456dnbqCpf",
  "key27": "ycnZ9boEbLSGKTAfasU46uf8srFVz37G2AdpTu1GTPNEBtuj7cLudPC94xBQNwNW97aQxUGCeczn6yuLFERchh7",
  "key28": "56aTCuEHpZ2Mb562CroycVxS5FSH8hq4KZnrCYK6Umt3J4tbcTEhiSc9aEF3S283PHwmq2hTv48VxhaGFznsCRft",
  "key29": "2ArC7B6CXs9LMybHcqdhY6mF8wDoy2PgwawR6Cmfxdi71pKoYAaUJPWxeShdzjnGT7oZwr4ncwsE47eXPNRKcH7N",
  "key30": "2ySU7WNGaxVoS4T7hU1fW9dzw8VSk3zbVeDQExrwtdEpREsAvKVeC3FhXm3oeSLVkYwKcRJg8r6jTGjE9dgUrfZE",
  "key31": "5owroEb27oTaXUJyMp9C1wEpCyNsWiUZqEstptuq9s7VmCTv4vsuXWtGA7BMvnFgZ2FXn9jS9b5VYB3iM97Lkfkz",
  "key32": "HVYVVoqF3MgE6fcLEhVyZysxp3wVAgVcA9BvAyDDjpp81yVS3X3PEnvTHwJxjAv567TuVaVhUMg8B3Yw5uHHLJU",
  "key33": "2uffCP4udAECDgAywkyoZAXQz34mBUE53b1SbWb7A2huZyv4CmhZUdRNswcQp2VsXCdPvAEEGhA1hndTq2uqWyAE"
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
