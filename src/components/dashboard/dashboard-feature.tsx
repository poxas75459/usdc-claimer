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
    "4hv8ccE5MQrLLoJgmQbYLrLDoPmA4eu18pgyfBLBYRbpzgf2CYQWxzG7XcvZ8TbEBqRehHYVFeu6k2aEq8WmBvdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6WEiNEo6uVLV6tcE8tRRW5uwRJok1Qst6bh5vDsKRUM7zth7kRP98sNYViv1SfAfhisbAsHcd12uTNcjTTdnYt",
  "key1": "4hdF3Tk1Zu9TFup971Cf1K9HveYEHgD2g1VbZc66cxWYBwJ5QSDDRphL4eA2PvCfFoq324rTPaSp1frAJqFjdbv1",
  "key2": "2ksf5SuX3PyVNJqKWkaASscQiZVCsEKdMxW8TTeaW1AEnFUHD1HkYao4UkQLsaSKGmf7qXBA7zxT9XJLKTR8SX5h",
  "key3": "5TpMb4qYdmQy3bmKp7ZhQgQKFMMH3b1dtVy4hrx69rUYjhqZBCQb78XWx5sFoN8DRWAH8UadyVEdx4qDMGNiNi9K",
  "key4": "2hZ7DxVWrUk3tUwNvSaPFSUdqhZZ12F9PdtrQeZUKC71YMSkpu5Zog6ZGSFoSZ5KVECxA73CPtxMx8y7VnxG9eXa",
  "key5": "4jaysAtwESKw5aMAvsQzxeMSJWQWtmcSWzGgbK9FjYw3cuBSTWDRMZBZthrjRAobawT7YXbFXj92B56fyp3syMpa",
  "key6": "5kYQAxj7KSKZPFPWXabvySxU5dPPEsvKkB1PajXmrkW83f4yiZKHgoooJSKCxLBd1hCD5JNG7dpyWysHCgG9qrYK",
  "key7": "5t519EsCSLacmYktuF11sRQu76nWi8DZbtBMfXvcREZgCVJZo36PHKjdHYfDbhgWFFZMnWw3agsU7k7w4wKonyrX",
  "key8": "5FXWJidaYmzMr3JyUotHV2v47SzQ9iZx6e9cFnFJNdmJyhW6sLgk4JWptjE82jchbFmw5J9zZ9TsubEsTQ2UmPsM",
  "key9": "4nLBWJu6jYu44iwhZMdfVbnjxDHCfsQtwv7Emuhdfjau6GA46AXfChqmccCzRqe3mHrHnTYTmLBX1DxbBVMHKmR",
  "key10": "5pbixiDyFH1Z5c33b2weEhC3UDFothMjri356fSXNJGj8urPbSSoYWZmkoJWriqaoN5hwWXmxj6u2uSXEqEXFL3",
  "key11": "2fYCYNbYYCUqKKA4vssynRRvWVPRyhCjt7YMTUHyxpymfGrz2pkDUM7KdcUDAUnccAk5dU9E2QSJDx2aqMKxEQfh",
  "key12": "4TJTgbGq9YaAqAucX183M1DTcd42B3L8tKH4wF5zUVEYRRLhibwixuQHLpBHhQpVbPgTAs2kYWuJaUQy1C33fi8q",
  "key13": "5CfyuhfTNEaLFEmoeGs5CvcYxddVnnrxE8RLSxz4NGEK6fAJjpd7E1RAmH9kz7TJ2FWfPby9vBvgbXaLVAUAk2sR",
  "key14": "4Ah6aJTeCTbXzqvLdnVF3SvAyMbq3LmrKfnrsazPoLngd2iMeFQU9mdp3MXkdYHGytb3Egv4vk1NVUw33ZPgysFc",
  "key15": "392FrGhB6jfXJMk41iLEbds3YCRuKxyaceFiHakbtYoKWaVVq6R7GLWL62nz9ZFrtSUFDRDwdt6kQmRaeYGBhfpf",
  "key16": "2QmfufsMdHYV2tCUvZaRBeGjv6gW283WDMRWDfoBgiUM2FSQ3uBmDjFgWSevFe97c4oUmkJedztnHgHtqSRi6gxQ",
  "key17": "4cJLiwdKMedsphnNpBgVaSnVnrU61USAUewF4t2DR7iWDJYnPBJN85SSfyVPDh9bHikvZYGz3m3WAVB3xbpC3erb",
  "key18": "4DWkBqpNJSVY51n7SHFGSJKMDm7jb9S4Zd2Q6pdUkVwJLkyEk3zBtVZwuAVoLYfb1bw79oroaDSuMER9Z4Sr5xxQ",
  "key19": "51JkWxucghvsx2RgxtHB587BTi7oLGjAxbjt6RgiZUudaUGY9PbhRn2fWHSZVQPjncXpTSfNJcHt4WUpUbSzEi9P",
  "key20": "25exa1NvQTN2EbJ4Ug1CoRKrpLmPWXdHQGjLB9J1AoRHDFFtSwsX7BFxHSYxikHSfR8TMXE5EFFXboUuThoZcYAm",
  "key21": "4c7p1Hn9engGoY8RwCgSJhMzEKWZLJvMdNgUYsaMGkHCtYVjYVMU8wjXfXCMgMtANHXdCUTdqhBjxKYj65tqHqo8",
  "key22": "4KdBWqSzHoEsLURQYuDaaLDeU9nRZfxMj6iZsCtu1BQtbiDGryM2QdMnXc696eHAz83MkYAb7k92ZBGUAoHeLcMX",
  "key23": "4jDVWT8GhMUcks9zLsFVFeFNdYKgEzMsFD3vZhfRjNXEPbusWWhzCkprYpyQPV2pQwxeQKJCf6Bj4FfvRUmGj21",
  "key24": "64MRe7nbnogMYsEvcRALy5jWAYZ5VLrRNDwfRgpxPom1nYwzZjk2QVEBJ6UcBTGXLitR3XxEgAzbx2U8EUMA8ngd",
  "key25": "5GkqK7XVWpNC43L2yx3pAQqtvxepV1544eWnmpZFqkE9FpnpTx5wh7BkSnpNp5Ue8f6sQF9kL4Kco67bQP2FzvvA",
  "key26": "5aJCQy8NkVSoLcn8RCg7TwF9qNiYQDydYXNsDUBkrSrTAw6dVJtpypDf3of7hSJA47xqwAc5LuTENm9ggjCEKxWN",
  "key27": "3CJfQVhrr6Q8QKjTre6TTuDf9wUM7Jokw9mC5XusNdsQvRQpckwXRMG3sFieZ9CsWyukmLkSbBqYCz3CTinLMk7U",
  "key28": "f9uMSbwoaUENgdnkoJ9bGRX1dMz1zNDRBwvT2jB6fpcw37dWC6vpexgDrBVdS33tNYcJrosd4eWwYHgAKN2nch1",
  "key29": "5VF81nnwzL9bGBZTAHJ8zMX3tzB2b9Udd95aU4bny2UNYY1x63Dz2groCG1fNbB7tkiwjaPzSpHPu65JW5jUXgvP",
  "key30": "Z6vWPDMGhiCqvRx7wCex7rvWxMXZAYhFSdsZxBqbcfdkKvEZubxWZCHws2G3rNS3RAtS7rJAcHBK66qt5UYLJ5H",
  "key31": "2chhcyzk1fGX9xcE43TQLaTTNu9N79zpyi6e6EKfWzSAVonWexoLeCdSDFe6zqk2MNsePMoAtwTELoetB5fBW4rE",
  "key32": "2veFmtoyqt1tWViFbazkSJhysiWYQe2UQJCY9arH5bexZeSeHAAoSPhow4W4nebSPkAYUyfVztS6a8BG2trZYY8Q"
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
