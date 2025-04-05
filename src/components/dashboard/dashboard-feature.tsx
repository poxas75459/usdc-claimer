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
    "2x6PSCjdTcgM5GpzuqQGwGXtwLgcDMM6Zk49rXXUeLKWhvae7ysDLukbNNzbeE3YVEt52Jb2CEVvvM3aErEG3mNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qXtHDNzvFyjAF2DBiKEBowqULYBW8jH6GESz24tKYknsZPPzVmVZwr6seAFX29cbgqEPsybBsTwwQWQfqoWrcDC",
  "key1": "5fenaiD8BpmbkyhTWrQF78yeKyi5KxbTTUEyppMr5Bs1AsR5ioVXZ46LSsfa162WXawSBHd5HNMa3XgoDGs4f16u",
  "key2": "35tHVCB2FYFU6poyhkMfnYPR1p4ETrFuMagHYLhbkpiN9s8BSA2kmNggX7RFqXqGq2q2jXRDjHoHoytyFJa3e9mP",
  "key3": "3DsGea8amUz8zCcpKqEb9gsscqPqLYvPwn19F5EKQY9Jc1au3gd9riHP7eVCK1N4gwmtnXbfiENFujGK19zxNdTf",
  "key4": "5Fw2qqSA4XYSxJ6Dy7QEw46mPyJzgAJNGy3ou6ijqTo8KtWRfb14NYUxsvsbUx9K1KCipFB1CNHonEh6LdqF5a7w",
  "key5": "46hNDJMAHHheWvBCHYMEUeJdw1X2dh4xE5zgtrEkbfmj7MkKmMhr4HQFE8BSBJbw6rZUm48oVXTa6uDRsDAVCL9U",
  "key6": "X3UsegsytE1ebNj3VPNZDi48ByJsYbMhWZ2u8LQvz3zFWBEiTXaa8JNmDeenR7HmymVc61xgzufk5PTNVdAGiQm",
  "key7": "2ySp82f95K93oUo9PTXg78X6Ur96ZNR4s5NLmvs36ANese1f9ZTwzcPgQAwSZNvS519PNrHtiwmzV2aWZgqZoYgx",
  "key8": "5iFG5i27WngjWNyHH7HfcNkzwz8Vn42zyttXXVECUkhfvhh4rBe3bHV2kmWbLrN7sKQPwRKC1LN9BbAVAcABYs5J",
  "key9": "5K8Tj5G7vYAyZnLMrVTVfNFLvy284jT6AwYL5eVNUmRtebEYhY6UeybXjwHp5Jd7bBnacJE8w3UcNWACXodwu1Lh",
  "key10": "5eoeoY9uKkyH3wq7BPxuN3WXDFQh6SwZaivEHdhS1SafWYUpzkYmK2RrtjBfXE9buU1RPwsFoy6EprguNmiSU27p",
  "key11": "yMxA2C2ES1ifi5N6hUebdn3tQKpRV3Zwzy7fk6P8phiakk1Quor7A7Lc6XgsJyeaoDVFAzHcMi3zYU4hMyAYUUx",
  "key12": "5cHQzNkUe8xAAowHWk3onGv5BJecBBneNrvkfuUDEo2w6Y1AWvB2GLFxXjNfqa7eKzNduStPkcA8RvowDVmxip2F",
  "key13": "58aN99hcT9EaVGctkwkvVCAm9GVimkmQvuzF5v8AVWQhnVmLcxCezaXLvHtLrBLDVZQq8qBTuqV8hRsycXbzu1kG",
  "key14": "3ciH2YikdA6q3qujeErQTZP4JvW7ipMKfvxTz3G1yBHCfxdyv1aUqh3myN6NGEH6QiT1tDRDKAR4rzhn3pc7xLQq",
  "key15": "233mZAtcr9ESnVxBUsKSAgAEfCseUbrd6TXtDAQoMazKSbKbqvAHX8wtNhUUx5maBKcnMmXfoa6tvG3CfZqrQUzk",
  "key16": "2XTtggNds6Ngd5ZRJ839bdkmBKhoAkkMnA4jreoDPfwCfNtUhM8FM9v5q4U3swFRBq5QY6rskQPs5uFT2YU8ZYnE",
  "key17": "3bJ9ggycjGxdW7J9Tb6rrTLMXpNHBKh57YkY6AA6h9tKGpPdEY5xsV9Dp9NpYxwzDZSTwx8Akdo2mFtrDzUbEBp",
  "key18": "2W8iJATrqwMP54AzcodsRuH7wVGcuVtnEnBr8g3Vr3kr2SKhzfwFePappzeTAdZ8mhGoDEemQDtzEkP9KAHQ6viV",
  "key19": "2FmQZqHgxgaAzyoYBesifBPN8scmCcju3gUWrsXAP53BF22NVg18umucVmTho7NyVC8c4reNGM9cMBpHEyKbnDSb",
  "key20": "3AVP8v1Rp5d6QuJJKRUAyCbNJTSXSHXJAUMcVwGuRFBcZezkxkLcdSeX7x8mBacvUZACHFSke2fgtWuMbjZQ7v3a",
  "key21": "yvDWRXWsvrwRkvbbsyRwQngaVyoKv1ASqurgXshiWLdF8sq77RxGEb1KHEXMw45hWLVbKTAVjLRevXQyhJ3HXaa",
  "key22": "2eom381Sp8uZKETmjWEPzaf9iQdTr82ruaJKjuSVwDbrU6mys9smjd1MW9HSQBcv2HcqJeUAxDy37VCg923nJt68",
  "key23": "2p759uaMc31ZBm9MWAu3Y6tqBLoiqW1hkiyT3JdgtsQQNHEsTMRC3NpVAj5VLCjof9f1RocT3Fhf29qEMwPmAnY1",
  "key24": "4xT2CVRLquwxvRvFfQGPb2k9rb8Zc3Zb3o7ZZNJmy2rVXJwEDiEfGdhNNWFZc4DusW6uL5tcbNT1R98sFvuFfUXW",
  "key25": "56kggnTojYVVkh2DmsFKHb44YHjbk4BWHa8ZKRYMSQxh7fYykCVu7aFdeH8r81wNoa9cW5vwUSYoCcMsNXN1hy8C",
  "key26": "3r2Csne6mJweY2pNNL7Ze3vT6dmcQ1avM8zotMwfccHuXiom9gF792KsrdWT391tBKpqAsxG5JgwHFnitqtZV6Kq",
  "key27": "3854cgniUZbs7NH4M3ibNAwHrxQh7FnNQS19ydL2puKeQG8ujqbtLpXjFXyeLRWtrt7c6GwEK1kyrhjKngc777pj",
  "key28": "nwnCuU7MVDjMbh24krRyTQmSMojWz88hAhTnNAxUgbK8cE6nghGKX4VSBsYhuPKtBUvgzuSbY2aKYU1r2VRwM6q",
  "key29": "25EubtYrnzSBQjw3K42LjiCLNpHVt6z87Yajx2yA7Zkt4gA4t9XEUVkpn3JYihkZtjak4tn5Kzsj7HyVSEZ4cLQ9",
  "key30": "fagTvHth88NUiPTonugWpR9cyRSy3U7dcM3a1fD1q4m2AHU6qaoMmyUrpRi1PXMCcvHh27qd5dotLP8bgQWyJ5Z",
  "key31": "2w9mTCvsNakLvf3qbfHfgxuNcXMkHsdzkmbFh2hUWbBGwYktm2mVspwyQRpcpN4UeU5PiNFBT4GiVkK1VQbgpHK3",
  "key32": "5frGvVFtHX6riywpp1uDHg928DPoHmwhgSosw8GZgBmBt9Q5tGCrP61WjCBXJJV8GswBTs8jnhuoDrVabWGSSeWq"
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
