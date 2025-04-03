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
    "33zrmpPXtBrQthuR5YeG7hfH9kMEHgVeuBFDfibVLNTUKWceRNxvCZxbLC4HgFWjEmVMfbsMZ2NtEYSu1HhMqtS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwFsEcYbE2A8AKzJK9qcGpjYFrGFx7G26We7bYh8fe49xZzUak9xNP51nhKrsGxgSVfewbRWL2VL286FBpLoQdr",
  "key1": "HXenMuU4nhaoVU7q5uf6BCuaysBLcBzL624MCbhqVQ43oBwg1d6fR4kgSZ1mCoSCDPBjw6JQRtdCtCVAaUxc9j4",
  "key2": "327qJ6BKn51AE7i1PfJhoTnf78j2c468BtxeAK4HWJFug7h1PJ1PiKnnCzbfzxqRysnmPfNpyQD3WFpVDugaAoHi",
  "key3": "4EoA6j4Gt136oW6SkvTFmae1T94fVTgw9W5hPR6B6Uxv3px8JG1MKiLsjKXvjEBuiQARvDFNjr8bTJcJXzPBYH1k",
  "key4": "5ftHrpxkyvVZbZYpoKdkDCnP9FZRBTPhedwg5as42XZSN8Uzi8pgFWG3M1Mro6P9CupmA88FSu94YUMpyNLtZR3D",
  "key5": "653nW78vtJqurYFWa326HF7VQwSYocAggXBWTUWRkcKxDe3UhQSV5wF7uTZho2cgY3HGLrZnFLYpcZkw999RpC6M",
  "key6": "2zDotBSS3Hy7MQdQzG8e4j5Agj6jDMRgoSnNCUidW95ZFVuMiQ2NRpTVhd3MohSycyq9zNXHYpCEFwf3BWuZe4fe",
  "key7": "3oGwa3nrwMjNRMEoMmbioJ1PWf3BwV7YRqbsmd7AVugaJXqByVdheP1KVJSM5GSKqJdrSz5PQM9gNYzs8TzeduL4",
  "key8": "4erYHBnM5Tk6bcF28oToxD5mVLr7V7BmxrsQUpQewS2Kg7upEq2Lwuh2AjtQLYfDJxEmutRyDS2kqQNJJHpgiSna",
  "key9": "5xrccwqgxTVZYujjRqBVa2hHbeuA2v26odoz9YtBYTBmcKSKsDWGQd25TfLkJojBKxmsB1hHecZ8sjipoFXDAKbQ",
  "key10": "226B28HoLFP8XapxBxgXN53482piGj94fVYp26RjEN9W8oGjWFpfH2p1rBbmA5qMd7YZLw7KPuwNsMYAwbj71Td6",
  "key11": "2V8SzoNT9M8BeFXoyGGwvfP5EbH5VL7zZpxguFEC5LUYdgXnRWKXaiuKMPYqgEhX8jsXbq4iF1WLA4q7vh3KzbR1",
  "key12": "2D6s1ruvnXmyrhdcGU8dvmFkobuy23K512Ung1YaPCcaq7N1brKC7wuw5YzVAYX9gFhGvRvJK3jZdVP5b4VytvCN",
  "key13": "ZbxbGw5D6dWpghq7CuouUnERtC63g9Fup6HXTHbL1vhsXc4KTL66xSvpuFbWHvWn4UWzb7Jc5zFswaqpsxwvXAr",
  "key14": "5tCi7Gd8aiu3sAFzexnjy1XGVEuSH3AuQKwCeUepBdxwC9KtMp83t244HYZZEeLkQXN3meRkrs5rhjPEroYTWhM5",
  "key15": "32P8UnpgKksbZxVmYjJMxEt8GRVfhoaG1Q4W9RQ3UdnrZTK32uVPouA7NArvJShKtGNHVp6J7iPWBrNVUpp6v8o7",
  "key16": "4A5xmn4QBq4LuNFtWgEpqjE6BcqyQRZMJYeoYfnhyjkk45feWkVAxhXfwxjKxaeHHb36tmB3TUnBs4E8jg68cD4U",
  "key17": "3kKqPaCYv8f86GRx25S3kpFsoyP41UPuCJEDvkKhTq2JEK3fMdfnxxJe16LztUAePY9R112UnriftpgXQcEjrYLF",
  "key18": "of3NidANScxAqCv1SwvLRdeYkupBhvdk42NALTVUWMzDzkv39rRyUN8EcnD38zgaYfumj2NYhrHmQS61heE8X89",
  "key19": "2G4ppU1WmuygjQMkC7HU9TVwEL5ReJW5HSvH278ozZHT8aYNUpVKkcujPENVyPgRgZ9kuWwjo7Q6Ju9CztJrJwcg",
  "key20": "FGQCF3wrrfufEsvS2LFcTiLSbh459JUAoZZv7hc1FXbyGxLRnosx9iMgmx1stv6AYcVi1CkUykHybE3eiaFcHz9",
  "key21": "2Sh7ZcAN3vACH6MV1W6FBft1xsMj1mJsRK7VGsDRUyxFT34WRZ6N196QbdNt5ayV8qc9ndUs1GVZbwVye3kWMfBE",
  "key22": "5SZGKTHgMP6h76YNvxqHu9RMYKvWs2TsVCxqXKmVSGVjqwMhMWiozfDc55984cv5Dce9BgMoaextzjm9poQu8Kha",
  "key23": "5fXi1RSHRRgMbziD7R6BKoxEzCUU8YBbq2r4VzufBtZkgWozBQ1mcqVHZbJbCFiUsAToyLsc3p5CWXBVUrEVcKmm",
  "key24": "36R2aYrUWNhh1cvtAWyT1anq34DDhm1dneiFNoHQU3qz4Aq2PVRbQ2NtAbMov2Mownhe7WzXFVTQn5kYnR4oVjyU",
  "key25": "4TYMPvumjhf1dPorh1xRBQav5gZnGpxss7ZEAHi6eACnY55jvvsz9rBrHietQE6De98X1ZZQQWHHEaADNcZXs6oy",
  "key26": "4sikNj5CypnjakuRou7vLWuKTesmECiScMCEjk29P9c1geSbMiCjwLqS6E4AjG3hJSYbvMXgy14xvK1ZiA76RKZv",
  "key27": "4KatEcuL2rcaPD9rmwYX3o69YF1hTuDnEzLCo32xoAAoEvsSQiCTjQ1MhDdkoUHF8pBX1ch5ikXBkG36wTXT5u8R",
  "key28": "33CtwnUiRjKvzpfx7WhNGeBES4f3KmkoXssA6WHAVPfxEQREBa5zd7VFdJUh3efQQEArWq2BM27jaKQtWKtsdpVq"
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
